package com.enenetlogix.isl;

import io.vertx.core.MultiMap;
import io.vertx.core.Vertx;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.client.HttpRequest;
import io.vertx.ext.web.client.HttpResponse;
import io.vertx.ext.web.client.WebClient;
import io.vertx.ext.web.client.WebClientOptions;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by k.dai on 2020/2/19.21:44
 */
public class Compressor {

    private static final ConcurrentHashMap<String, Object> lock = new ConcurrentHashMap<>(100);
    private static WebClient webClient;
    private static final Vertx vertx = Vertx.vertx();
    private static final MultiMap jsMM = MultiMap.caseInsensitiveMultiMap(), cssMM = MultiMap.caseInsensitiveMultiMap();

    private static String islProjectDirPath = new File("").getAbsolutePath();
    private static final String srcPath = "/src/main/resources/webroot/",
            dstPath = "d:/opt/V6.x/",
            host = "www.css-js.com",
            url = "/taskserver.do";


    @BeforeAll
    public static void init() {
        WebClientOptions wco = new WebClientOptions().setConnectTimeout(30000).setUserAgent("INNER_HTTP_CLIENT").setKeepAlive(false).setSsl(true).setVerifyHost(false);
        webClient = WebClient.create(vertx, wco);
        islProjectDirPath = islProjectDirPath.substring(0, islProjectDirPath.lastIndexOf(File.separator));
        islProjectDirPath = islProjectDirPath.substring(0, islProjectDirPath.lastIndexOf(File.separator) + 1);
        jsMM.set("tasks", "[{\"name\":\"babel\",\"options\":{}},{\"name\":\"uglify\"}]");
        cssMM.set("tasks", "[{\"name\":\"yuicompressor\",\"options\":{\"type\":\"css\"}}]");
    }
    @SuppressWarnings("BusyWait")
    @AfterAll
    public static void fini(){
        while(!lock.isEmpty()) {
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("All done");
        webClient.close();
        vertx.close();
    }

    @Test
    public void all() {
        sys();
        ui();
        io();
        report();
        messenger();
        maintenance();
        cloud();
        staticJS();
        //staticCSS();
    }

    @Test
    public void staticJS() {
        compressDir("d:/data/js", dstPath+"data/js/");
    }
    @Test
    public void staticCSS() {
        compressDir("d:/data/css", dstPath+"data/css/");
    }
    @Test
    public void sys() {
        compressDir(islProjectDirPath+"sys"+srcPath, dstPath+"sys/webroot/");
    }
    @Test
    public void ui() {
        compressDir(islProjectDirPath+"ui"+srcPath, dstPath+"ui/webroot/");
    }
    @Test
    public void io() {
        compressDir(islProjectDirPath+"io"+srcPath, dstPath+"io/webroot/");
    }
    @Test
    public void report() {
        compressDir(islProjectDirPath+"report"+srcPath, dstPath+"report/webroot/");
    }
    @Test
    public void messenger() {
        compressDir(islProjectDirPath+"messenger"+srcPath, dstPath+"messenger/webroot/");
    }
    @Test
    public void maintenance() {
        compressDir(islProjectDirPath+"maintenance"+srcPath, dstPath+"maintenance/webroot/");
    }
    @Test
    public void cloud() {
        compressDir(islProjectDirPath+"cloud"+srcPath, dstPath+"cloud/webroot/");
    }

    private void compressDir(String srcPath, String dstPath) {
        File srcDir = new File(srcPath);
        File[] files = srcDir.listFiles();
        if (files != null && files.length > 0) {
            for (File plainFile : files) {
                String name = plainFile.getName();
                if(plainFile.isDirectory()) {
                    compressDir(srcPath + File.separator + name, dstPath + name + File.separator);
                } else {
                    if (!name.endsWith(".min.js") && name.endsWith(".js")) {
                        compress(dstPath, plainFile, name, jsMM);
                    } else if(!name.endsWith(".min.css") && name.endsWith(".css")) {
                        compress(dstPath, plainFile, name, cssMM);
                    }
                }
            }
        }
    }

    private void compress(String dstPath, File plainFile, String name, MultiMap jsMM) {
        try {
            lock.put(name, plainFile);
            jsMM.set("body", Files.readString(plainFile.toPath(), StandardCharsets.UTF_8));
            compressFileContent(jsMM, name, dstPath);
        } catch (Exception e) {
            System.out.println("Minify file : " + dstPath + name + " -- Failed!");
            lock.remove(name);
            e.printStackTrace();
        }
    }

    private void compressFileContent(MultiMap mm, String name, String dstDir) {
        HttpRequest<Buffer> request = webClient.post(443, host, url);
        request.timeout(60000);
        request.sendForm(mm, responseAsyncResult->{
            System.out.print("Minify file : " + dstDir + name);
            if(responseAsyncResult.succeeded()) {
                HttpResponse<Buffer> result = responseAsyncResult.result();
                if(result.statusCode() > 200) {
                    System.out.println(" -- Failed!" + result.statusCode() + "\n" + result.bodyAsString());
                } else {
                    JsonObject entries = result.bodyAsJsonObject();
                    if(entries.getInteger("code")==0) {
                        File file = new File(dstDir + name);
                        //noinspection ResultOfMethodCallIgnored
                        file.getParentFile().mkdirs();
                        if(!file.exists() || file.delete()) {
                            try {
                                Files.writeString(file.toPath(), entries.getString("data"));
                                System.out.println(" -- Success!");
                            } catch (IOException e) {
                                System.out.println(" -- Failed!");
                                e.printStackTrace();
                            }
                        }
                    } else {
                        System.out.println(" -- Failed! code="+entries.getInteger("code"));
                    }
                }
            } else {
                System.out.println(" -- Failed!");
                responseAsyncResult.cause().printStackTrace();
            }
            lock.remove(name);
        });
    }

}
