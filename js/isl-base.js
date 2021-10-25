'use strict';
let emptyObject={}, emptyArray=[], errorBox=null, modKey='0AB1CDE2FG3HIJ4KL5MNO6PQ7RST8UV9WXY'.split('');
(function() {
	Date.prototype.format=function(fmt) {
		let o=[['w+', webix.calendar.dayShort[this.getDay()]], ['t+', webix.calendar.monthShort[this.getMonth()]], ['q+', 'Q'+Math.floor((this.getMonth()+3)/3)], ['M+', this.getMonth()+1], ['d+', this.getDate()], ['h+', this.getHours()], ['m+', this.getMinutes()], ['s+', this.getSeconds()], ['S', this.getMilliseconds()]];
		if(!fmt) {
			fmt='yyyy-MM-dd hh:mm:ss';
		}
		if(/(y+)/.test(fmt)) fmt=fmt.replace(RegExp.$1, (this.getFullYear()+'').substr(4-RegExp.$1.length));
		while(o.length) {
			let f=o.pop(), k=f[0], v=f[1];
			if(new RegExp('('+k+')').test(fmt)) fmt=fmt.replace(RegExp.$1, RegExp.$1.length===1?v:('00'+v).substr((''+v).length));
		}
		return fmt;
	};
	if(!Object['values']) {
		Object.values=function(obj) {
			let res=[];
			for(let i in obj) {
				if(obj.hasOwnProperty(i)) {
					res.push(obj[i]);
				}
			}
			return res;
		};
	}
	if(!Object['keys']) {
		Object.keys=function(obj) {
			let res=[];
			for(let i in obj) {
				if(obj.hasOwnProperty(i)) {
					res.push(i);
				}
			}
			return res;
		};
	}
	if(!String['endWith']) {
		String.prototype.endWith=function(str) {
			if(str===null || str==='' || this.length===0 || str.length>this.length) return false;
			return this.substring(this.length-str.length)===str;
		};
	}
	if(!String['startWith']) {
		String.prototype.startWith=function(str) {
			if(str===null || str==='' || this.length===0 || str.length>this.length) return false;
			return this.substr(0, str.length)===str;
		};
	}
	Array['addElements']=function(source, target, key) {
		if(source && !isl.isEmpty(source)) {
			if(!target) {
				target=[];
			}
			if(Array.isArray(source)) {
				source.forEach(o => {
					if(o) {
						let v=typeof key==='function'?key(o):(key?o[key]:o);
						if(v && target.indexOf(v)<0) {
							target.push(v);
						}
					}
				});
			} else {
				for(let k in source) {
					let v=typeof key==='function'?key(source[k]):(key?source[k][key]:source[k]);
					if(v && target.indexOf(v)<0) {
						target.push(v);
					}
				}
			}
		}
		return target;
	};
	if(!String['modEncrypt']) {
		let len=modKey.length;
		String.prototype.modEncrypt=function() {
			let result='', charCode, i1, i2, i3;
			for(let i=0; i<this.length; i++) {
				charCode=this.charCodeAt(i);
				i1=charCode%len;
				charCode=(charCode-i1)/len;
				i2=charCode%len;
				charCode=(charCode-i2)/len;
				i3=charCode%len;
				result+=modKey[i3]+modKey[i2]+modKey[i1];
			}
			return result;
		};
		String.prototype.modDecrypt=function() {
			let result='', d=0;
			for(let i=0; i<Math.floor(this.length/3); i++) {
				result+=String.fromCharCode(modKey.indexOf(this.charAt(d++))*len*len+modKey.indexOf(this.charAt(d++))*len+modKey.indexOf(this.charAt(d++)));
			}
			return result;
		};
	}
	let lastTime=0;
	document.addEventListener('touchstart', function(event) {
		if(event.touches.length>1) {
			event.preventDefault();
		}
	}, false);
	document.addEventListener('touchend', function(event) {
		let nowTime=(new Date()).getTime();
		if(nowTime-lastTime<=300) {
			event.preventDefault();
		}
		lastTime=nowTime;
	}, false);
	document.addEventListener('gesturestart', function(event) {
		event.preventDefault();
	}, false);
	window.addEventListener('message', function(event) {
		if(webix.isArray(event.data) && event.data.length>0) {
			if(event.origin===window.location.origin) {
				let action=event.data[0];
				if('ftk'===action) {
					webix.storage.local.put('ftk', event.data[1]);
					webix.storage.local.put('pApp', event.data[2]);
				} else if(event.data.length>2) {
					if(dsBridge.hasNativeMethod(action)) {
						if(action==='scanQRCode' || action==='takePhoto' || action==='takeVideo') {
							webix.storage.local.put('_app_screen', Date.now());
						}
						dsBridge.call(action, event.data[2], (ret) => {
							if(webix.isArray(event.data[1]) && event.data[1].length>1) {
								let ifr=$$('iframeContent');
								ifr.getIframe().contentWindow.postMessage([event.data[1][0]+JSON.stringify(ret)+event.data[1][1]], ifr.config.origin);
							} else {
								isl.error(JSON.stringify(ret));
							}
						});
					} else {
						isl.error(isl.locale.failure.request301);
					}
				} else if(event.data.length>1) {
					if(dsBridge.hasNativeMethod(action)) {
						if(action==='scanQRCode' || action==='takePhoto' || action==='takeVideo') {
							webix.storage.local.put('_app_screen', Date.now());
						}
						dsBridge.call(action, (ret) => {
							if(webix.isArray(event.data[1]) && event.data[1].length>1) {
								let ifr=$$('iframeContent');
								ifr.getIframe().contentWindow.postMessage([event.data[1][0]+JSON.stringify(ret)+event.data[1][1]], ifr.config.origin);
							} else {
								isl.error(JSON.stringify(ret));
							}
						});
					} else {
						isl.error(isl.locale.failure.request301);
					}
				} else if(action) {
					eval(action);
				}
			}
		}
	});
	webix.extend(isl, {
		icons:[],
		isHorizontal:false,
		createCssCode:function(code) {
			let style=document.createElement('style');
			style.rel='stylesheet';
			style.innerHTML=code;
			document.getElementsByTagName('head')[0].appendChild(style);
		},
		qrcode:function(ret) {
			if(typeof ret==='string') {
				ret=JSON.parse(ret);
			}
			if(ret.code===0) {
				if(typeof ret.data==='string') {
					let info;
					if(ret.data.modDecrypt) {
						info=ret.data.modDecrypt();
					} else {
						info=ret.data;
					}
					if(window.qrcodeCallback) {
						window.qrcodeCallback(info);
					} else {
						isl.error(isl.locale.failure.request301, info);
					}
				} else {
					isl.error(isl.locale.failure.content);
				}
			} else {
				isl.error('e'+ret.code, ret.description);
			}
		},
		nfc:function(ret) {
			if(typeof ret==='string') {
				ret=JSON.parse(ret);
			}
			if(ret.code===0) {
				if(window.nfcCallback) {
					window.nfcCallback(ret.data);
				} else {
					isl.error(isl.locale.failure.request301, ret.data);
				}
			} else {
				isl.error('e'+ret.code, ret.description);
			}
		},
		uuid:function(len, radix) {
			let chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), uuid=[];
			radix=radix || chars.length;
			if(len) {
				for(let i=0; i<len; i++) uuid[i]=chars[0|Math.random()*radix];
			} else {
				let r;
				uuid[8]=uuid[13]=uuid[18]=uuid[23]='-';
				uuid[14]='4';
				for(let i=0; i<36; i++) {
					if(!uuid[i]) {
						r=0|Math.random()*16;
						uuid[i]=chars[(i===19)?(r&0x3)|0x8:r];
					}
				}
			}
			return uuid.join('');
		},
		filterPageVar:function(sVar) {
			return decodeURI(window.location.search.replace(new RegExp('^(?:.*[&\\?]'+encodeURI(sVar).replace(/[.+*]/g, '\\$&')+'(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
		},
		ready:function(callback, urls, asyncUrls, xhrs) {
			webix.env.cdn='/webix';
			webix.ui.fullScreen();
			if(callback && Array.isArray(callback)) {
				xhrs=asyncUrls;
				asyncUrls=urls;
				urls=callback;
				callback=null;
			}
			if(asyncUrls && !Array.isArray(asyncUrls)) {
				xhrs=asyncUrls;
				asyncUrls=null;
			}
			if(urls && !Array.isArray(urls) && typeof urls!=='string') {
				xhrs=urls;
				urls=null;
			}
			if(xhrs && !Array.isArray(xhrs) && typeof xhrs==='object') {
				let result={};
				for(let key in xhrs) {
					let xhr=xhrs[key], method, url;
					result[key]=false;
					if(typeof xhr==='string') {
						method='get';
						url=xhr;
					} else {
						method=xhr.method;
						if(method) {
							method=method.toLowerCase();
						} else {
							method='get';
						}
						url=xhr.url;
					}

					isl[method](url, function(json) {
						if(json) {
							result[key]=json;
						} else {
							delete result[key];
						}
					});
				}
				isl['_refreshID']=window.setInterval(isl._ready, 500, callback, urls, asyncUrls, result);
			} else {
				isl._ready(callback, urls, asyncUrls);
			}
		},
		_ready:function(callback, urls, asyncUrls, xhrResults) {
			if(xhrResults) {
				for(let key in xhrResults) {
					if(xhrResults[key]===false) {
						return;
					}
				}
				let rid=isl._refreshID;
				delete isl._refreshID;
				if(rid || rid===0) {
					clearInterval(rid);
				}
			}
			if(asyncUrls && asyncUrls.length) {
				let urlsObject={}, i=asyncUrls.length;
				while(i--) {
					urlsObject[asyncUrls[i]]=true;
				}
				if(urls) {
					webix.require(urlsObject).then(function() {
						if(callback) {
							webix.require(urls, function() {webix.ready(callback, xhrResults);});
						} else {
							webix.require(urls);
						}
					});
				} else if(callback) {
					webix.require(urlsObject, function() {webix.ready(callback, xhrResults);});
				} else {
					webix.require(urlsObject);
				}
			} else {
				if(urls) {
					if(callback) {
						webix.require(urls, function() {webix.ready(callback, xhrResults);});
					} else {
						webix.require(urls);
					}
				} else if(callback) {
					webix.ready(callback, xhrResults);
				}
			}
		},
		app:function(key) {
			if(key) {
				return '/'+key;
			} else {
				return isl.getRootPath();
			}
		},
		getRootPath:function() {
			let path=top.location.pathname.substring(1), pos=path.indexOf('/');
			if(pos<1) {
				path='';
			} else {
				path='/'+path.substring(0, pos);
			}
			return path;
		},
		scaledNumber:function(value, scale) {
			if(value && scale) {
				return isl.roundNumber(value, scale);
			}
			return value;
		},
		roundNumber:function(num, len) {
			return NP.strip(Math.round(num*Math.pow(10, len))/Math.pow(10, len));
		},
		selectNode:function(p, id) {
			if(p.getItem(id)) {
				if(p.open) {
					isl.openParent(p, id);
				}
				p.select(id);
				p.showItem(id);
			} else {
				p.unselect();
			}
			//p.refresh();
		},
		openParent:function(p, id) {
			let parentId=p.getParentId(id);
			if(parentId) {
				p.open(parentId, true);
				isl.openParent(p, parentId);
			}
		},
		isEmpty:function(obj) {
			return !obj || (Array.isArray(obj)?obj.length===0:Object.keys(obj).length===0);
		},
		objArraySort:function(a, p, d) {
			if(webix.isArray(a) && typeof a[0]==='object' && p) {
				a.sort(function(o1, o2) {
					let v1=o1?o1[p]:0, v2=o2?o2[p]:0;
					return d?(v1-v2):(v2-v1);// 升序
				});
			}
		},
		arrayIntersection:function(a, b) {
			let result;
			if(a && b) {
				if(a.length===0) {
					result=a;
				} else if(b.length===0) {
					result=b;
				} else {
					let i=a.length, n;
					while(i--) {
						n=b.length;
						while(n--) {
							if(a[i]===b[n]) {
								if(!result) {
									result=[];
								}
								result.push(a[i]);
							}
						}
					}
				}
			}
			return result;
		},
		isLowResolution:function() {
			let ow=window.parent.outerWidth, oh=window.parent.outerHeight;
			if(ow>oh) {
				ow=oh;
			}
			return ow<375;
		},
		getOptionValue:function(ops, obj, returnOption) {
			if(ops) {
				for(let i=0, ol=ops.length; i<ol; i++) {
					if(ops[i].id===obj || ops[i].id===parseInt(obj)) {
						if(returnOption) {
							return ops[i];
						} else {
							return ops[i].value;
						}
					}
				}
				return '';
			} else {
				return null;
			}
		},

		dataURItoBlob:function(dataURI) {
			let byteString;
			if(dataURI.split(',')[0].indexOf('base64')>=0) {
				byteString=atob(dataURI.split(',')[1]);
			} else {
				byteString=unescape(dataURI.split(',')[1]);
			}
			let mimeString=dataURI.split(',')[0].split(':')[1].split(';')[0];
			let ia=new Uint8Array(byteString.length);
			for(let i=0, l=byteString.length; i<l; i++) {
				ia[i]=byteString.charCodeAt(i);
			}
			return new Blob([ia], {type:mimeString});
		},
		reLogin:function() {
			top.location.href=isl.getRootPath()+'/index.html?logout=true&ftk='+webix.storage.local.get('ftk');
		},
		error:function(status, info, callback) {
			let msg;
			if(status) {
				msg=isl.locale.failure['e'+status] || status;
			} else {
				msg=isl.locale.failure.e;
			}
			if(!errorBox) errorBox=webix.alert({
				type:'alert-error',
				title:msg,
				text:isl.locale.failure[info]?isl.locale.failure[info]:(info || ''),
				callback:callback || function() {
					errorBox=null;
				}
			});
		},
		ajaxError:function(text, data, ajax) {
			if(typeof text==='object' && text.responseURL) {
				ajax=text;
			}
			isl.hideProgress(null, true);
			if(ajax) {
				let error;
				if(ajax.status===404) {
					error=ajax.responseURL;
					let p=error.indexOf('?');
					if(p && p> -1) {
						error=error.substring(0, p);
					}
				} else {
					if(data && data.json) {
						data=ajax.status===204?null:data.json();
					} else if(ajax.responseText && !ajax.responseText.startWith('<')) {
						data=JSON.parse(ajax.responseText) || null;
					}
					if(data && data.error) {
						error=(ajax.status===501?'x':'')+data.error;
					} else {
						error=ajax.statusText;
					}
					error=isl.locale.failure[error] || (error+(data && data.cause?('<br>'+data.cause):''));
				}
				if(ajax.status===401) {
					isl.error(ajax.status, error, isl.reLogin);
				} else {
					isl.error(ajax.status, error || 'Network error');
				}
				// } else {
				// 	isl.error(isl.locale.failure.title);
			}
		},
		showProgress:function(id, create) {
			let pv=$$(id || 'main');
			if(pv) {
				if(create) {
					if(pv.hideProgress) {
						pv.hideProgress();
						delete pv.shown;
					}
				}
				if(!pv.shown) {
					if(!pv.buildMask) {
						webix.extend(pv, webix.ProgressBar);
						pv['buildMask']=true;
					}
					pv.showProgress();
					pv['shown']=0;
				}
				pv.shown++;
			}
		},
		hideProgress:function(id, kill) {
			let pv=$$(id || 'main');
			if(pv) {
				if(pv.shown>0) {
					pv.shown--;
					//5秒后执行强制关闭
					if(pv.timeoutId) {
						clearTimeout(pv.timeoutId);
					}
					pv['timeoutId']=setTimeout(function() {
						if(pv.hideProgress) {
							pv.hideProgress();
							delete pv.shown;
						}
						delete pv.timeoutId;
					}, 5000);
				}
				if(pv.shown<=0 || kill) {
					if(pv.timeoutId) {
						clearTimeout(pv.timeoutId);
						delete pv.timeoutId;
					}
					if(pv.hideProgress) {
						pv.hideProgress();
						delete pv.shown;
					}
				}
			}
		},
		syncPaging:function(driver, o) {
			$$(this.owner).config.total=o.total || (o.data?o.data.length:0);
		},
		asyncPaging:function(jdata) {
			this.config.total=(jdata && jdata.total) || 0;
			isl._renderPaging(this, this.config.total || 0);
		},
		reload:function(p, params, url, callback) {
			if(p) {
				p=typeof p==='string'?$$(p):p;
				if(params && !webix.isUndefined(params) && !webix.isArray(params) && !webix.isDate(params) && typeof params==='object' && !isl.isEmpty(params)) {
					p.oldPage=0;
					p.config.page=1;
				}
				if(p.config.view.endWith('table') || p.config.view==='dataview') {
					if(params) {
						if(!p.params) {
							p['params']=params;
						} else {
							webix.extend(p.params, params, true);
						}
					}
				} else {
					p['params']=params || {};
				}
				for(let k in p.params) {
					if(p.params[k]===null) {
						delete p.params[k];
					}
				}
				if(url) {
					p.load(url, 'json', callback);
				} else if(p.config.url) {
					p.load(p.config.url.source || p.config.url, 'json', callback);
				}
			}
		},
		buildDefaultAfterSave:function(_afterFn) {
			return function(response, id, details) {
				if(id=== -1 && response.id>0) {
					id=response.id;
				}
				let p=$$(this.config.store.owner);
				if(response._cpid!==0) {
					webix.extend(p.getItem(id), webix.extend(this.config._ps, response, true), true);
					p.refresh();
					p.showItem(id);
					p.select(id);
				} else {//批量新增，直接刷新整个结构
					isl.reload(p);
				}
				if(p.config.sortBy) {
					p.sort(p.config.sortBy, p.config.sortDir, p.config.sortAs);
				}
				p=$$(this.config.store.owner+'_');
				if(p) {
					p.show();
				} else {
					$$(this.config.store.owner).show();
				}
				if(p.actionBT) {
					p.actionBT.enable();
					delete p.actionBT;
				}
				if(_afterFn) {
					_afterFn.call(this, response, id, details);
				}
				isl.hideProgress(null, true);
			};
		},
		stringFilter:function(cfg) {
			let penalId=cfg.id;
			return {
				view:'text',
				attributes:{
					class:'filterInput'
				},
				borderless:true,
				on:{
					onTimedKeyPress:function() {
						let param=$$(penalId), value=this.getValue();
						param.filter(function(obj, pn) {
							if(value) {
								for(let k in obj) {
									let fieldValue=obj[k];
									if(typeof fieldValue==='string') {
										if(fieldValue.indexOf(value)!== -1) {
											return true;
										}
									} else {
										if(pn.config.columns) {
											let column=isl.getOptionValue(pn.config.columns, fieldValue, true);
											if(column.collection) {
												column=column.collection.data['pull'][fieldValue];
												if(column && column.value.indexOf(value)!== -1) {
													return true;
												}
											}
										} else if(typeof fieldValue==='number') {
											if(fieldValue===parseInt(value)) {
												return true;
											} else {
												fieldValue=new Date(fieldValue);
												if(fieldValue && isl._datetimeFormat(fieldValue, isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[8]).indexOf(value)!== -1) {
													return true;
												}
											}
										}
									}
								}
								return false;
							} else {
								return true;
							}
						}, param);
						if(!value) {
							let panel=$$(penalId);
							isl._renderPaging(panel, Object.keys(panel.data.pull).length);
						}
					}
				}
			};
		},
		onAfterFilter:function() {
			let panel=$$(this.owner);
			if(panel.config.view!=='tree') {
				isl._renderPaging(panel, panel.count());
			}
		},
		addConfig:function(cfg, id) {
			isl.cfg[id || cfg.id]=cfg;
		},
		getConfig:function(key, options, keepCfg) {
			let result=isl.cfg[key];
			if(result) {
				if(typeof result!=='function') {
					if(options) {
						if(result.view) {
							if(result.view==='form') {
								if(options.elements) {
									if(!result.elements) {
										result['elements']=options.elements;
									} else {
										Array.addElements(options.elements, result.elements);
									}
									delete options.elements;
								}
							} else if(result.view.endWith('table')) {
								if(options.columns) {
									if(!result.columns) {
										result['columns']=options.columns;
									} else {
										Array.addElements(options.columns, result.columns);
									}
									delete options.columns;
								}
							}
						}
						if(options.buttons) {
							if(!result.buttons) {
								result['buttons']=options.buttons;
							} else {
								Array.addElements(options.buttons, result.buttons);
							}
							delete options.buttons;
						}
						if(options.on) {
							if(!result.on) {
								result['on']=options.on;
							} else {
								webix.extend(result.on, options.on, true);
							}
							delete options.on;
						}
						webix.extend(result, options, true);
					}
				}
			}
			if(!keepCfg) {
				delete isl.cfg[key];
			}
			return result;
		},
		viewShowDelay:150,
		viewIconClick:function() {
			let key=this.config.id.substring(4), panel=$$(key+'_') || $$(key);
			if(panel) {
				if(!panel._showFn) {
					panel['_showFn']=function() {panel.show();};
				}
				setTimeout(panel._showFn, isl.viewShowDelay);
			}
		},
		showTitleViewOnItemClick:function(viewId, k) {
			return function(o) {
				let item;
				if(o) {
					if(o.column && o.column.endWith('_delete')) {
						return;
					}
					item=this.getItem(o);
				} else {
					item=this.getSelectedItem();
				}
				if(typeof viewId==='string') {
					if(!item) {
						item='{+}';
					} else if(typeof k==='function') {
						item=k(item);
					} else {
						item=item[k];
					}
					$$(viewId+'_title').setValue(item);
					$$(viewId+'_layout').show();
					let views=$$(viewId+'_views'), panel=views.getChildViews()[0];
					if(views.getValue()!==panel.config.id) {
						if(!panel._showFn) {
							panel['_showFn']=function() {panel.show();};
						}
						setTimeout(panel._showFn, isl.viewShowDelay);
					}
				} else {
					viewId.call(this, o, item);
				}
			};
		},
		setMobileAddAction:function(btParent, id, func) {
			let o=$$(btParent+'_addbt');
			if(!id) {
				id=btParent;
			}
			if(o) o.attachEvent('onItemClick', func || function() {
				let p=$$(btParent);
				if(p._psError) {
					let form=btParent;
					form=$$((form.substring(0, form.lastIndexOf('_'))+'_form'));
					if(form) {
						form.setValues(p._psError);
					}
					delete p._psError;
				}
				if(!this.errorClick) {
					$$(id+'_title').setValue('{+}');
					$$(id+'_layout').show();
					o=$$(id+'_config');
					if(!o) {
						o=$$(id+'_views').getChildViews()[0];
					}
					if(!o._showFn) {
						o['_showFn']=function() {o.show();};
					}
					setTimeout(o._showFn, isl.viewShowDelay);
				}
			});
		},
		onTitleTouchEnd:{
			onTouchEnd:function() {
				let panel=$$(this.config.backTo);
				if(!panel._backFn) {
					panel['_backFn']=function() {panel.back();};
				}
				setTimeout(panel._backFn, isl.viewShowDelay);
			}
		},
		getTitleViews:function(id, backTo, cells, on, exBt) {
			let cols=[{
				view:'label',
				align:'left',
				backTo:backTo,
				width:20,
				label:'<span class="webix_icon mdi mdi-chevron-left"></span>',
				on:isl.onTitleTouchEnd
			}, {
				id:id+'_title',
				view:'label',
				backTo:backTo,
				align:'left',
				on:isl.onTitleTouchEnd
			}];
			for(let i=0, l=cells.length; i<l; i++) {
				let cell=cells[i];
				if(cell.icon) {
					cols.push({
						id:'vbt_'+cell.id,
						view:'icon',
						icon:cell.icon,
						click:isl.viewIconClick
					});
				} else if(cell.view==='scrollview' && cell.body.icon) {
					cols.push({
						id:'vbt_'+cell.id,
						view:'icon',
						icon:cell.body.icon,
						click:isl.viewIconClick
					});
				}
			}
			if(cols.length>1) {
				isl.getLabelWidth(cols);
			}
			if(exBt && exBt.length) {
				Array.addElements(exBt, cols);
			}
			return {
				id:id+'_layout',
				rows:[{
					view:'toolbar',
					elements:cols
				}, {
					id:id+'_views',
					keepViews:true,
					cells:cells,
					on:on
				}]
			};
		},
		cInputMargin:12,
		cInputHeight:30,
		mInputMargin:17,
		mInputHeight:38,
		pInputMargin:17,
		pInputHeight:38,
		getLabelWidth:function(field, css) {
			let result=0, count=0;
			if(field) {
				let reqWidth=0;
				if(webix.isArray(field)) {
					count=field.length;
					while(count--) {
						let textElement=field[count];
						if(typeof textElement==='object') {
							result=isl.getLabelWidth(textElement);
							if(count && result) {
								textElement['labelWidth']=result;
							}
						}
					}
					return result;
				} else if(typeof field==='object') {
					if(field.cols) {
						return isl.getLabelWidth(field.cols);
					} else if(field.rows) {
						return isl.getLabelWidth(field.rows);
					} else if(field.view==='button' || field.view==='uploader') {
						if(!field.width && !field.minWidth) {
							field.width=Math.ceil(webix.html.getTextSize(field.value || field.label, 'webixbutton').width+('icon'===field.type?15:0));
						}
						return 0;
					} else {
						if(!field.label && field.label!=='') {
							field.label=field.name;
						}
						if(field.label) {
							if(field.labelPosition && field.labelPosition!=='left') {
								return 0;
							} else {
								if(field.view==='label') {
									if(!field.align) {
										field['align']='right';
									}
								} else {
									if(field.view!=='checkbox' && (field.label.length>1 || field.label.charCodeAt(0)>255) && !field.label.endsWith(':')) {
										field.label+=':';
									}
									if(!field.labelAlign) {
										field['labelAlign']='right';
									}
								}
								if(field.label.length===1 && field.label.charCodeAt(0)<256) {
									if(!field.labelWidth) {
										field['labelWidth']=Math.ceil(webix.html.getTextSize(field.label+'.', css || 'fieldFont').width);
									}
									if(!field.label.endsWith('&nbsp;')) {
										field.label+='&nbsp;';
									}
									field['labelAlign']='center';
								}
							}
							if(field.required) {
								reqWidth=5;
							}
							if(field.labelWidth) {
								return field.labelWidth;
							} else {
								field=field.label;
							}
						} else {
							return 0;
						}
					}
				} else {
					field=field+'';
				}
				if(field) {
					let fSplit=field.split('\n'), fSplitLen=fSplit.length;
					while(fSplitLen--) {
						let content=fSplit[fSplitLen], nW=webix.html.getTextSize(content, css || 'fieldFont').width+reqWidth-content.length/2.5, ques=content.match(/[()]/g);
						if(ques) {
							nW+=ques.length*2.5;
						}
						if(nW>result) {
							result=nW;
						}
					}
				}
			}
			return Math.ceil(result);
		},
		tagsUnion:function(fn, rangeTags, groupTags, dataTags) {
			if(rangeTags && groupTags && dataTags) {
				let rgTagsLen=rangeTags.length;
				while(rgTagsLen--) {
					let gpTagsLen=groupTags.length;
					while(gpTagsLen--) {
						let dtTagsLen=dataTags.length;
						while(dtTagsLen--) {
							fn(rangeTags[rgTagsLen], groupTags[gpTagsLen], dataTags[dtTagsLen]);
						}
					}
				}
			}
		},
		panels:function(cfg) {
			if(!cfg) {
				return;
			}
			let i, l, subPanels=null, newCfg=cfg, buttons=[];
			if(!cfg.width) {
				cfg['fillspace']=true;
			}
			if(cfg.cols) {
				subPanels=cfg.cols;
				for(i=0, l=subPanels.length; i<l; i++) {
					subPanels[i]=isl.panels(subPanels[i]);
				}
			} else if(cfg.cells) {
				subPanels=cfg.cells;
				for(i=0, l=subPanels.length; i<l; i++) {
					subPanels[i]=isl.panels(subPanels[i]);
				}
			} else if(cfg.rows && cfg.view!=='form') {
				subPanels=cfg.rows;
				for(i=0, l=subPanels.length; i<l; i++) {
					subPanels[i]=isl.panels(subPanels[i]);
				}
			} else if(cfg.body) {
				if(cfg.body.view!=='template') {
					cfg.body=isl.panels(cfg.body);
				}
			} else {
				if(!cfg.on) {
					cfg.on={};
				}
				if(cfg.view==='form') {
					if(webix.isUndefined(cfg.scroll)) {
						cfg['scroll']='auto';
						if(webix.isUndefined(cfg.fitHeight)) {
							cfg['fitHeight']=false;
						}
					}
					newCfg=isl.wrapperCell(cfg);
					if(cfg.buttons) {
						Array.addElements(cfg.buttons, buttons);
						delete cfg.buttons;
					}
					if(cfg.save) {
						buttons.push({
							id:cfg.id+'_copybt',
							view:'icon',
							icon:'mdi mdi-file-multiple',
							tooltip:isl.locale.button.copy,
							disabled:true,
							click:cfg.save
						}, {}, {
							id:cfg.id+'_savebt',
							view:'icon',
							icon:'mdi mdi-content-save',
							disabled:true,
							tooltip:isl.locale.button.save,
							click:cfg.save
						});
					}
				} else if(cfg.view!=='iframe') {
					let _onBeforeLoad=cfg.on.onBeforeLoad;
					cfg.on['onBeforeLoad']=function() {
						isl.initLoadParams(this);
						if(this.config.disabled) {
							return false;
						} else if(_onBeforeLoad && !_onBeforeLoad.call(this)) {
							return false;
						}
						isl.showProgress();
						if(this.config.info!==false && !this.params) {
							isl._enabledisableToolbar(this.config.id, 'disable');
							let tls=$$(this.config.id+'-20');
							if(tls) {
								tls.setValue(this.config.pgx[4]);
							}
						}
						if(this.config.size) {
							if(this.params._lt) {
								if(this.config.page<1) {
									this.config.page=1;
								}
								this.params._st=(this.config.page-1)*this.params._lt;
							} else {
								this.params._st=0;
							}
						}
						if(this.clearAll && this.data.count() && !this.config.dynamicUrl) {
							this.clearAll(true);
						}
						if(this.unselect) {
							this.unselect();
						}
					};

					let _onAfterLoad=cfg.on.onAfterLoad;
					cfg.on['onAfterLoad']=function() {
						isl.hideProgress();
						if(this.params) {
							if(this.config.view.startWith('data') || this.config.view.endWith('table')) {
								if(this.config.sync!==false) {
									isl._renderPaging(this, this.config.total || this.count());
								} else if(this.config.url) {
									let tmp=this.params._lt;
									this.params._lt=0;
									isl.get(this.config.url.source, this.params, isl.asyncPaging, null, this, 'pagingbar');
									this.params._lt=tmp;
								}
							} else {
								isl._enabledisableToolbar(this.config.id, 'enable');
							}
							if(this.config.sortBy) {
								this.sort(this.config.sortBy, this.config.sortDir, this.config.sortAs);
							}
							this.callEvent('onSelectChange');
						}
						if(this._psError) {
							let form=$$(this.config.id+'_');
							if(form) {
								form.show();
							} else {
								$$(this.config.id).show();
							}
						}
						this.refresh();
						if(this._scrollState) {
							this.scrollTo(this._scrollState.x, this._scrollState.y);
							delete this._scrollState;
						}
						if(_onAfterLoad) {
							_onAfterLoad.call(this);
						}
					};
					if(!cfg.on.onLoadError) {
						cfg.on['onLoadError']=isl.ajaxError;
					}

					if(cfg.url) {
						cfg.url='rest->'+cfg.url;
						if(cfg.info!==false || cfg.renew) {
							buttons.push({
								id:cfg.id+'-0',
								view:'icon',
								icon:'mdi mdi-autorenew',
								tooltip:isl.locale.button.refresh,
								click:function() {
									let p=$$(this.config.id.substring(0, this.config.id.length-2));
									p._scrollState=p.getScrollState();
									isl.reload(p);
								}
							});
						}
						if(cfg.insert || cfg.update || cfg.delet) {
							if(typeof cfg.save==='string') {
								cfg.save={
									url:cfg.save
								};
							} else {
								if(typeof cfg.save==='object') {
									if(typeof cfg.save.length==='number') {
										cfg.save={};
									}
								} else {
									cfg.save={};
								}
							}
							if(!cfg.save.url) {
								cfg.save['url']=cfg.url;
							}
							if(!cfg.save.on) {
								cfg.save['on']={};
							}
							let _onBeforeDataSend=cfg.on.onBeforeDataSend;
							delete cfg.on.onBeforeDataSend;
							cfg.save.on['onBeforeDataSend']=function(details) {
								if(_onBeforeDataSend && !_onBeforeDataSend.call(this, details)) {
									return false;
								}
								this.config['_ps']=details.data;
								isl.showProgress();
							};
							let _onAfterSaveError=cfg.on.onAfterSaveError;
							delete cfg.on.onAfterSaveError;
							cfg.save.on['onAfterSaveError']=function(id, status, response, details) {
								isl.ajaxError(details.text, details.data, details.loader);
								let p=$$(this.config.store.owner);
								if(p.actionBT) {
									p.actionBT.enable();
									delete p.actionBT;
								}
								isl.reload(p);
								if(id>0) {
									if(this.select) {
										isl.selectNode(this, id);
									}
								} else {
									this.config.master['_psError']=this.config['_ps'];
								}
								delete this.config['_ps'];
								if(_onAfterSaveError) {
									_onAfterSaveError.call(this, id, status, response, details);
								}
							};

							let _onAfterSync=cfg.on.onAfterSync;
							delete cfg.on.onAfterSync;
							cfg.save.on['onAfterSync']=function(statusObj, text, data, loader) {
								delete this.config['_ps'];
								if(_onAfterSync) {
									_onAfterSync.call(this, statusObj, text, data, loader);
								}
								isl.hideProgress();
								webix.message({
									type:'success',
									text:isl.locale.alert.success
								});
							};
							if(cfg.insert) {
								cfg.save.on['onAfterInsert']=isl.buildDefaultAfterSave(cfg.on.onAfterInsert || cfg.on.onAfterSave);
								if(cfg.addFn!==false) {
									if(!cfg.buttons) {
										cfg['buttons']=[];
									}
									cfg.buttons.push({
										id:cfg.id+'_addbt',
										view:'icon',
										icon:'mdi mdi-plus',
										tooltip:isl.locale.button.add,
										click:typeof cfg.addFn==='function'?cfg.addFn:function(id) {
											$$(id.substring(0, id.length-6)).unselect();
										}
									});
								}
								delete cfg.on.onAfterInsert;
							}
							if(cfg.update) {
								cfg.save.on['onAfterUpdate']=isl.buildDefaultAfterSave(cfg.on.onAfterUpdate || cfg.on.onAfterSave);
								delete cfg.on.onAfterUpdate;
							}
							delete cfg.on.onAfterSave;
							if(cfg.delet && cfg.on.onAfterDelete) {
								cfg.save.on['onAfterDelete']=cfg.on.onAfterDelete;
								delete cfg.on.onAfterDelete;
							}
						}
					}
					if(cfg.sort && cfg.sort!==true && cfg.sort!=='multi') {
						cfg.sortField=cfg.sort;
						if(!cfg.sortBy) {
							cfg.sortBy=cfg.sortField;
						}
						cfg.sort=true;
					}
					if(cfg.view==='datatable' || cfg.view==='treetable') {
						newCfg=isl._grid(cfg, buttons);
					} else if(cfg.view==='tree') {
						newCfg=isl._tree(cfg, buttons);
					} else if(cfg.view==='dataview') {
						newCfg=isl._dataview(cfg, buttons);
					} else if(cfg.view==='organogram') {
						newCfg=isl._organogram(cfg, buttons);
					}
				}
			}
			if(cfg.buttons) {
				Array.addElements(cfg.buttons, buttons);
				delete cfg.buttons;
			}
			let panelRows;
			if(cfg.title || buttons.length>0) {
				if(newCfg.rows) {
					panelRows=newCfg.rows;
				} else {
					let borderless=newCfg.borderless || false;
					panelRows=[newCfg];
					newCfg={
						borderless:borderless,
						rows:panelRows
					};
				}
				if(cfg.title) {
					let tp;
					if(Array.isArray(cfg.title)) {
						tp={
							view:'toolbar',
							cols:cfg.title
						};
						isl.getLabelWidth(tp);
					} else {
						tp={
							view:'template',
							template:cfg.title,
							type:'section'
						};
					}
					if(cfg.id) {
						tp['id']=cfg.id+'_title';
					}
					panelRows.unshift(tp);
					delete cfg.title;
				}
				if(buttons.length>0) {
					isl.getLabelWidth(buttons);
					if(buttons[0].cols) {
						buttons.splice(1, 0, {
							minWidth:250,
							margin:5,
							cols:buttons.slice(1, buttons.length)
						});
						buttons.splice(2);
						panelRows.push({
							id:'responsive_'+cfg.id,
							tooltip:true,
							view:'toolbar',
							rows:[{
								responsive:'responsive_'+cfg.id,
								cols:buttons
							}]
						});
					} else {
						if(buttons.length===1) {
							buttons.unshift({});
						}
						panelRows.push({
							tooltip:true,
							view:'toolbar',
							margin:5,
							cols:buttons
						});
					}
				}
			}
			if(newCfg) {
				if(!newCfg.id && newCfg.rows && cfg.id) {
					newCfg['id']=cfg.id+'_';
				}
				return newCfg;
			} else {
				return cfg;
			}
		},
		initLoadParams:function(panel) {
			if(!panel.params) {
				if(panel.config.size) {
					panel['params']={
						_st:0,
						_lt:panel.config.size,
						_sc:panel.config.sync
					};
					if(panel.config.sync!==false) {
						panel.data.attachEvent('onStoreLoad', isl.syncPaging);
					}
				} else {
					panel['params']={};
				}
			}
			if(panel.config.filter && panel.data) {
				panel.data.attachEvent('onAfterFilter', isl.onAfterFilter);
			}
		},
		window:function(cfg) {
			if(cfg.view!=='popup') {
				cfg['view']='window';
				if(!cfg.position) {
					cfg['position']='center';
				}
				if(cfg.modal===null || cfg.modal===undefined) {
					cfg['modal']=true;
				}
				if(cfg.move===null || cfg.move===undefined) {
					cfg['move']=true;
				}
			}
			if(cfg.body) {
				cfg.body=isl.panels(cfg.body);
			}

			let i, l, buttons;
			if(cfg.buttons) {
				buttons=cfg.buttons;
				delete cfg.buttons;
			} else {
				if(cfg.ok) {
					buttons=[{}];
					let okButton={
						id:cfg.id+'_ok',
						view:'button',
						type:'icon',
						width:80,
						icon:'mdi mdi-check',
						label:isl.locale.base.confirm[1]
					};
					if(typeof cfg.ok==='function') {
						okButton['click']=cfg.ok;
					} else {
						webix.extend(okButton, cfg.ok, true);
					}
					delete cfg.ok;
					buttons.push(okButton);
				}
			}

			if(buttons) {
				let rows=cfg.body.rows;
				if(rows) {
					let buttonform=rows[rows.length-1];
					if(buttonform.view==='form' && rows[rows.length-1].cols) {
						i=0;
						if(buttons.length>0 && isl.isEmpty(buttons[0])) {
							i=1;
						}
						for(l=buttons.length; i<l; i++) {
							rows[rows.length-1].cols.push(buttons[i]);
						}
					} else {
						rows.push({
							tooltip:true,
							view:'toolbar',
							margin:5,
							cols:buttons
						});
					}
				} else {
					cfg.body={
						rows:[cfg.body, {
							tooltip:true,
							view:'toolbar',
							margin:5,
							cols:buttons
						}]
					};
				}
				isl.getLabelWidth(buttons);
			}

			if(cfg.head!==false) {
				cfg['head']={
					view:'toolbar',
					elements:[]
				};
				if(cfg.title) {
					cfg.head.elements.unshift({
						id:cfg.id+'_title',
						view:'label',
						align:'left',
						label:cfg.title
					});
				}
				if(cfg.icon) {
					cfg.head.elements.unshift({
						id:cfg.id+'_icon',
						view:'icon',
						disabled:true,
						icon:cfg.icon
					});
				}
				if(cfg.view!=='popup' && cfg.closeable!==false) {
					let closeIcon={
						view:'icon',
						icon:'mdi mdi-close'
					};
					if(typeof cfg.cancel==='function') {
						closeIcon['click']=cfg.cancel;
					} else {
						closeIcon['click']='$$(\''+cfg.id+'\').hide();';
					}
					cfg.head.elements.push(closeIcon);
				}
				isl.getLabelWidth(cfg.head.elements);
			}
			return cfg;
		},
		enable:function(p) {
			isl._enabledisable(p, 'enable');
		},
		disable:function(p) {
			isl._enabledisable(p, 'disable');
		},
		_enabledisable:function(p, type) {
			if(typeof p==='string') {
				p=$$(p);
			}
			p[type]();
			isl._enabledisableToolbar(p.config.id, type);
		},
		_enabledisableToolbar:function(id, type) {
			let sbar=$$(id+'_search_bt');
			if(sbar) {
				sbar[type]();
			}
			for(let i=0; i<8; i++) {
				let item=$$(id+'-'+i);
				if(item) {
					item[type]();
				}
			}
		},
		_datetimeFormat:function(obj, fn) {
			if(typeof obj==='string') {
				if(obj.indexOf('.')!== -1) {
					obj=obj.substring(0, obj.indexOf('.'));
				} else {
					let number=parseInt(obj);
					if(number>576e5) {
						obj=new Date(number).format(fn);
					}
				}
			} else if(typeof obj==='number') {
				if(obj===0) {
					obj='-';
				} else {
					obj=new Date(obj).format(fn);
				}
			} else if(webix.isDate(obj)) {
				obj=obj.format(fn);
			}
			return obj || '';
		},
		_grid:function(cfg, buttons) {
			if(cfg.select!==false) {
				cfg['select']=true;
			}
			if(cfg.sync!==false) {
				cfg['sync']=true;
			}
			if(webix.isUndefined(cfg.scroll)) {
				cfg['scroll']='xy';
			}
			let columns=[], scells=cfg.scells, sc, resizeHeader=0;
			if(cfg.checkbox) {
				columns.push({
					id:cfg.id+'_cbx',
					header:{
						content:'masterCheckbox'
					},
					tooltip:false,
					template:'{common.checkbox()}',
					width:40
				});
			}
			if(cfg.view!=='treetable' && (cfg.index!==false && (!cfg.size || typeof cfg.index==='number'))) {
				if(!cfg.scheme) {
					cfg['scheme']={};
				}
				if(!cfg.scheme.$init) {
					cfg.scheme['$init']=function(obj) { obj.isl_index=this.count(); };
				}
				columns.push({
					id:'isl_index',
					header:'',
					tooltip:false,
					width:cfg.index || 40
				});
			}
			for(let i=0, l=cfg.columns.length; i<l; i++) {
				let column=cfg.columns[i];
				if(column.fillspace) {
					resizeHeader++;
				}
				if(!column.tooltip) {
					column['tooltip']=false;
				} else {
					cfg['tooltip']=true;
				}
				if(!column.hidden) {
					if(column.format) {
						column['formator']=webix.Date.dateToStr(column.format);
					}
					if(column.type==='datetime') {
						if(!column.template) column['template']=function(obj) {
							return isl._datetimeFormat(obj[this.id], isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[8]);
						};
						if(!column.width && !column.fillspace) {
							column['width']=150;
						}
					} else if(column.type==='date') {
						if(!column.template) column['template']=function(obj) {
							return isl._datetimeFormat(obj[this.id], isl.locale.timeFormats[7]);
						};
						if(!column.width && !column.fillspace) {
							column['width']=100;
						}
					} else if(column.type==='time') {
						if(!column.template) column['template']=function(obj) {
							return isl._datetimeFormat(obj[this.id], isl.locale.timeFormats[8]);
						};
						if(!column.width && !column.fillspace) {
							column['width']=120;
						}
					} else if(column.options && !column.template) {
						column['template']=function(obj) {
							let v=parseInt(obj[this.id]);
							if(v || v===0) {
								let me=this.collection;
								if(!me) {
									me=$$(cfg.id).getColumnConfig(this.id).collection;
								}
								let data=me.data['pull'][v];
								if(data) {
									return data.value;
								} else {
									return v;
								}
							} else {
								return '';
							}
						};
					} else if(i===0 && cfg.view==='treetable' && !column.template) {
						column['template']=isl._getTreeNodeTemplate(cfg);
					} else if(column.icon) {
						column['template']=isl.gridIconTemplate;
						//column['css']=cfg.css;
					}
					columns.push(column);
				} else {
					if(!cfg.hiddenColumns) {
						cfg['hiddenColumns']={};
					}
					cfg.hiddenColumns[column.id]={
						header:column.header || column.id
					};
				}
				sc=isl._setSearchColumn(cfg, column);
				if(sc) {
					if(!scells) {
						scells=[];
					}
					scells.push(sc);
				}
				delete column.type;
			}
			if(resizeHeader>1) {
				cfg['resizeColumn']={
					headerOnly:true
				};
			}
			delete cfg.columns;
			cfg['columns']=columns;
			if(cfg.delet) {
				cfg['tooltip']=true;
				let delBt={
					id:cfg.id+'_delete',
					header:'',
					width:35,
					tooltip:isl.locale.button.del,
					icon:'mdi mdi-trash-can-outline',
					click:function() {
						isl.remove(this.config.id);
					},
					template:isl.gridIconTemplate
					//css:'ccc'
				};
				if(cfg.delet===true) {
					cfg.columns.push(delBt);
				} else {
					cfg.columns.push(webix.extend(cfg.delet, delBt));
				}
			}
			return isl._dataPanel(cfg, buttons, scells);
		},
		gridIconTemplate:function(rowData, type, index, field) {
			let template='';
			if(field.icon) {
				let icon=typeof field.icon==='string'?field.icon:field.icon(rowData);
				let color=field.autoColor?(rowData.color?('color:'+rowData.color+';'):''):(field.color || ''), bgColor=field.autoBGColor?(rowData.bgColor?('color:'+rowData.bgColor+';'):''):(field.bgColor || '');
				if(icon) {
					template='<span style=\''+(field.click?'cursor:pointer;':';')+color+bgColor+'\' class=\'webix_icon '+icon+'\'></span>';
					if(field.click) {
						template='<button type=\'button\' class=\'webix_icon_button webix_grid_icon_button\'>'+template+'</button>';
					}
				} else {
					template='<span style="color:#94A1B3" class=\'webix_icon mdi mdi-cancel webix_disabled webix_grid_icon_button\'></span>';
				}
				// } else if(field.click){
				// 	template = '<button type=\'button\' style=\'cursor:pointer;height:30px;width:20px;\' class=\'webix_icon_button\'>'+rowData+'</button>'
			}
			return template;
		},
		_dataview:function(cfg, buttons) {
			cfg['tooltip']=false;
			if(cfg.select===null || cfg.select===undefined) {
				cfg['select']=true;
			}
			if(webix.isUndefined(cfg.scroll)) {
				cfg['scroll']='xy';
			}
			let newCfg=isl._dataPanel(cfg, buttons, null);
			if(cfg.delet) {
				buttons.push({
					id:cfg.id+'-4',
					view:'icon',
					align:'center',
					disabled:true,
					tooltip:isl.locale.button.del,
					icon:'mdi mdi-trash-can-outline',
					click:isl.remove
				});
			}
			return newCfg;
		},
		_setSearchColumn:function(cfg, column) {
			if(column.search || column.rangeSearch) {
				let sc={
					id:column.id+'_sc',
					name:column.id,
					view:column.type || 'text'
				};
				if(column.on) {
					sc['on']=column.on;
					delete column.on;
				} else {
					sc['on']={
						onKeyPress:function(code) {
							if(code===13) {
								let config=$$(cfg.id+'_sbt').config;
								config.click(config.id);
							}
						},
						onSwShow:function() {
							$$(cfg.id+'_searchbar').scrollTo(0, 0);
						}
					};
				}
				sc['span']=column.span;
				sc['label']=column.swLabel || column.header;
				if(!sc.labelAlign) {
					sc['labelAlign']='right';
				}
				if(!sc.labelPosition) {
					sc['labelWidth']=isl.getLabelWidth(sc.label)+3;
				}
				if(column.type==='datetime') {
					sc.view='datepicker';
					sc['stringResult']=true;
					sc['timepicker']=true;
					if(!column.format) {
						sc['format']='%Y-%m-%d %H:%i:%s';
					} else {
						sc['format']=column.format;
					}
				} else if(column.type==='date' || column.type==='time') {
					sc['type']=column.type;
					sc.view='datepicker';
					sc['stringResult']=true;
					if(!column.format) {
						sc['format']=column.type==='date'?'%Y-%m-%d':'%H:%i:%s';
					} else {
						sc['format']=column.format;
					}
				} else if(column.type==='number') {
					sc['type']=column.type;
					sc.view='text';
				} else if(column.type==='combo' || column.type==='richselect') {
					sc['options']=column.hidden?column.options:[];
				} else if(column.type==='radio') {
					sc['span']=true;
					sc['options']=column.hidden?column.options:[''];
				}
				if(!sc.minWidth) {
					sc['minWidth']=220;
				}
				if(column.rangeSearch) {
					let nsc=webix.extend({}, sc);
					nsc.name+='_s';
					nsc.id+='_s';
					nsc['rule']=function(value, data, id) {
						let cpData=data[id.substring(0, id.lastIndexOf('_'))+'_e'];
						if(!value || !cpData) {
							return true;
						} else {
							return value<=cpData;
						}
					};
					sc.name+='_e';
					sc.id+='_e';
					sc.label='-';
					sc.labelWidth=5;
					sc.minWidth-=(nsc.labelWidth-sc.labelWidth)/1.5;
					nsc.minWidth+=(nsc.labelWidth-sc.labelWidth)/1.5;
					sc['rule']=function(value, data, id) {
						let cpData=data[id.substring(0, id.lastIndexOf('_'))+'_s'];
						if(!value || !cpData) {
							return true;
						} else {
							return value>=cpData;
						}
					};
					delete nsc.labelWidth;
					sc={
						span:true,
						id:'responsive_'+sc.id,
						rows:[{
							responsive:'responsive_'+sc.id,
							cols:[nsc, sc]
						}]
					};
				}
				return sc;
			}
		},
		_buildSearchButton:function(cfg, scells, pId) {
			if(scells) {
				let cell, lw=0, i, l, optionCells=[];
				for(i=0, l=scells.length; i<l; i++) {
					cell=scells[i];
					if(lw<cell.labelWidth) {
						lw=cell.labelWidth;
					}
					delete cell.width;
				}
				for(i=0, l=scells.length; i<l; i++) {
					cell=scells[i];
					cell.labelWidth=lw;
					if(cell.view==='combo' || cell.view==='richselect' || cell.view==='radio') {
						optionCells.push(cell.id);
					}
				}
				return {
					id:pId+'_search_bt',
					view:'icon',
					icon:'mdi mdi-magnify',
					disabled:true,
					tooltip:isl.locale.button.search,
					click:function() {
						if(!this.searchWin) {
							let swCfg={
								id:pId+'_search_win',
								icon:'mdi mdi-magnify',
								padding:0,
								title:isl.locale.button.search,
								body:{
									id:pId+'_searchbar',
									view:'form',
									width:cfg.swWidth,
									height:cfg.swHeight,
									columns:2,
									elements:scells
								},
								buttons:[{
									view:'icon',
									icon:'mdi mdi-refresh',
									label:isl.locale.button.undo,
									click:cfg.on.onSwUndo || function() {
										let f=$$(pId+'_searchbar'), els=f.elements, hideValues={};
										for(let k in els) {
											if(els[k].config.hidden) {
												hideValues[k]=els[k].getValue();
											} else {
												hideValues[k]=null;
											}
										}
										if(hideValues) {
											f.parse(hideValues, 'json');
										}
									}
								}, {}, {
									id:pId+'_sbt',
									view:'icon',
									icon:'mdi mdi-check',
									label:isl.locale.button.search,
									click:cfg.on.onSwSearch || function() {
										let conditions=isl.getFormValues(pId+'_searchbar');
										if(conditions) {
											$$(pId+'_search_win').hide();
											isl.reload($$(pId), conditions);
										}
									}
								}]
							};
							if(cfg.on.onSwShow) {
								swCfg['on']={
									onShow:cfg.on.onSwShow
								};
							}
							this['searchWin']=webix.ui(isl.window(swCfg));
							delete cfg.on.onSwShow;
							delete cfg.on.onSwUndo;
							delete cfg.on.onSwSearch;
						}
						let panel=$$(pId);
						for(i=0, l=optionCells.length; i<l; i++) {
							let cellId=optionCells[i];
							isl.optionLink(panel.getColumnConfig(cellId.substring(0, cellId.lastIndexOf('_sc'))), $$(cellId));
						}
						this.searchWin.show();
						if(webix.env.mobile) {
							let mc=$$('main_') || $$('main'), from=$$(pId+'_searchbar');
							if(mc.$width-40>900) {
								from.define('width', 900);
							} else {
								from.define('width', mc.$width-40);
							}
							//from.resize();//刷新宽度后才能处理高度？
							from.define('height', Math.min(mc.$height-150, 800, from.getNode().firstElementChild.offsetHeight+35));
							from.resize();
							this.searchWin.setPosition((mc.$width-this.searchWin.$width)/2, (mc.$height-this.searchWin.$height)/2);
						}
					}
				};
			}
		},
		optionLink:function(column, element) {
			if(column && column.collection && element && (!element._cver || (column._cver && column._cver!==element._cver))) {
				element.define('options', Object.values(column.collection.data.pull));
				element.refresh();
				element._cver=column._cver || 1;
			}
		},
		_dataPanel:function(cfg, buttons, scells) {
			let gid=cfg.id;
			isl._setMoveButtons(cfg, buttons);
			if(cfg.info!==false) {
				let searchButton=isl._buildSearchButton(cfg, scells, gid);
				if(searchButton) {
					buttons.push(searchButton);
				}
				cfg['pgx']=isl.locale.base.gridpg;
				if(cfg.size) {
					cfg['page']=1;
					cfg['total']=0;
					buttons.push({
						id:gid+'-1',
						view:'icon',
						hidden:true,
						icon:'mdi mdi-skip-backward',
						tooltip:isl.locale.button.sbackward,
						click:function() {
							let p=$$(this.config.id.substring(0, this.config.id.length-2));
							p.config.page=1;
							isl.reload(p);
						}
					}, {
						id:gid+'-2',
						view:'icon',
						hidden:true,
						icon:'mdi mdi-step-backward',
						tooltip:isl.locale.button.backward,
						click:function() {
							let p=$$(this.config.id.substring(0, this.config.id.length-2));
							if(p.config.page>1) {
								p.config.page--;
							}
							isl.reload(p);
						}
					}, {
						id:gid+'-3',
						view:'text',
						inputAlign:'center',
						disabled:true,
						value:1,
						on:{
							onKeyPress:function(code) {
								if(code===13) {
									let p=$$(this.config.id.substring(0, this.config.id.length-2)), page=this.getValue(), lastPage=Math.ceil(p.config.total/p.params._lt);
									if(page>lastPage) {
										page=lastPage;
									} else if(page<1) {
										page=1;
									}
									p.config.page=page;
									isl.reload(p);
								}
							}
						}
					}, {
						id:gid+'-5',
						view:'icon',
						hidden:true,
						icon:'mdi mdi-step-forward',
						tooltip:isl.locale.button.forward,
						click:function() {
							let p=$$(this.config.id.substring(0, this.config.id.length-2)), lastPage=Math.ceil(p.config.total/p.params._lt);
							if(p.config.page<lastPage) {
								p.config.page++;
							}
							isl.reload(p);
						}
					}, {
						id:gid+'-6',
						view:'icon',
						hidden:true,
						icon:'mdi mdi-skip-forward',
						tooltip:isl.locale.button.sforward,
						click:function() {
							let p=$$(this.config.id.substring(0, this.config.id.length-2));
							p.config.page=Math.ceil(p.config.total/p.params._lt);
							isl.reload(p);
						}
					}, {}, {
						id:gid+'-7',
						view:'icon',
						icon:'mdi mdi-book-open-variant',
						tooltip:isl.locale.button.paging,
						popup:{
							view:'popup',
							body:{
								view:'list',
								id:gid+'-7_p',
								data:cfg.sync?isl.locale.pagings:isl.locale.unsyncPagings,
								width:110,
								height:webix.env.mobile?110:85,
								value:cfg.size || 50,
								on:{
									onItemClick:function(v) {
										this.getParentView().hide();
										if(typeof v==='string') {
											v=parseInt(v);
										}
										let p=$$(this.config.id.substring(0, this.config.id.length-4));
										if(p.params._lt!==v) {
											p.params._lt=v;
											p.config.page=1;
											isl.reload(p);
										}
									}
								}
							}
						}
					});
				}
				if(buttons.length>5) {
					buttons.unshift({
						minWidth:330,
						margin:5,
						cols:buttons.slice()
					});
					buttons.splice(1);
				}
				buttons.push({
					id:gid+'-20',
					view:'label',
					value:cfg.pgx[4]
				});
				if(typeof parent.dsBridge==='undefined' || !parent.dsBridge.hasNativeMethod('takePhoto')) {
					if(cfg.excel) {
						buttons.push({
							view:'icon',
							icon:'mdi mdi-file-excel',
							tooltip:isl.locale.button.excel,
							click:function() {
								isl._toExport(gid, webix.toExcel, cfg.excel);
							}
						});
					}
					if(cfg.pdf) {
						buttons.push({
							view:'icon',
							icon:'mdi mdi-file-pdf',
							tooltip:isl.locale.button.pdf,
							click:function() {
								isl._toExport(gid, webix.toPDF, cfg.pdf);
							}
						});
					}
					if(cfg.csv) {
						buttons.push({
							view:'icon',
							icon:'mdi mdi-file-document',
							tooltip:isl.locale.button.text,
							click:function() {
								isl._toExport(gid, webix.toCSV, cfg.csv);
							}
						});
					}
				}
			}
			if(cfg.filter) {
				cfg={
					rows:[isl.stringFilter(cfg), cfg]
				};
			}
			return cfg;
		},
		_renderPaging:function(g, tc) {
			if(g.config.info!==false) {
				let end, gid=g.config.id, count;
				isl._enabledisableToolbar(gid, 'enable');
				if(g.params && g.params._lt) {
					count=Math.ceil(tc/g.params._lt);
					if(count<1) {
						count=1;
					}
					let pgInpur=$$(gid+'-3');
					pgInpur.setValue(g.config.page);
					pgInpur.define('width', (count.toString().length-1)*7+28);
					pgInpur.resize();
					$$(gid+'-7').enable();
					if(g.config.page>=count) {
						end=tc;
						$$(gid+'-5').hide();
						$$(gid+'-6').hide();
					} else {
						end=g.config.page*g.params._lt;
						$$(gid+'-5').show();
						$$(gid+'-6').show();
					}
					if(g.config.page<=1) {
						$$(gid+'-1').hide();
						$$(gid+'-2').hide();
					} else {
						$$(gid+'-1').show();
						$$(gid+'-2').show();
					}
				} else {
					end=tc;
					count=1;
				}
				let tls=$$(gid+'-20');
				if(tls) {
					let tlsValue=g.config.pgx[0]+tc+g.config.pgx[1];
					if(count>1) {
						tlsValue+=g.config.pgx[2]+count+g.config.pgx[3];
						let s=(g.config.page-1)*g.params._lt+1 || 1;
						if(s<end) {
							tlsValue+=s+' ~ '+end;
						} else {
							tlsValue+=end;
						}
					}
					tls.setValue(tlsValue);
					tls.resize();
				}
			}
		},
		getFormValues:function(f, noBlankValueKey) {
			if(typeof f==='string') {
				f=$$(f);
			}
			let values=null;
			if(f) {
				if(!f.validate()) {
					return values;
				}
				values={};
				let els=f.elements;
				for(let k in els) {
					f=els[k];
					if(f.getValue && f.isEnabled()) {
						let v=f.getValue();
						if(f.config.type==='number') {
							v=parseFloat(v);
						}
						v=(v || v===0 || v===false)?v:null;
						if(v!==null || !noBlankValueKey) {
							if(webix.isDate(v)) {
								v=v.format(isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[8]);
							}
							values[k]=v;
						}
					}
				}
			}
			return values;
		},
		wrapperCell:function(cfg) {
			let fields=cfg.elements;
			if(!cfg.wrappered) {
				if(fields) {
					let len, i, j, newlw=0, cslws=0, f_cfg;
					if(!cfg.rules) {
						cfg['rules']={};
					}
					if(cfg.columns && cfg.columns>1) {
						delete cfg.elements;
						let newElements=[], cs=cfg.columns, id;
						//delete cfg["columns"];
						for(i=0, j=0, len=fields.length; i<len; i++) {
							f_cfg=fields[i];
							if(!f_cfg.hidden) {
								newlw=isl.getLabelWidth(f_cfg);
								if(f_cfg.span) {
									j=cs;
								} else {
									if(!this.newCols) {
										this.newCols=[];
									}
									this.newCols.push(f_cfg);
									j++;
								}
								if(j===cs) {
									if(this.newCols) {
										id='responsive_'+webix.uid();
										newElements.push({
											id:id,
											rows:[{
												responsive:id,
												cols:this.newCols
											}]
										});
										delete this.newCols;
									}
									j=0;
									if(f_cfg.span) {
										newElements.push(f_cfg);
									}
								}
							} else {
								newElements.push(f_cfg);
							}
							if(newlw && cslws<newlw) {
								cslws=newlw;
							}
						}
						if(this.newCols) {
							id='responsive_'+webix.uid();
							newElements.push({
								id:id,
								rows:[{
									responsive:id,
									cols:this.newCols
								}]
							});
							delete this.newCols;
						}
						cfg['elements']=newElements;
					} else {
						for(i=0, j=fields.length; i<j; i++) {
							f_cfg=fields[i];
							if(!f_cfg.hidden) {
								newlw=isl.getLabelWidth(f_cfg);
								if(newlw && cslws<newlw) {
									cslws=newlw;
								}
							}
						}
					}
					for(i=0, j=fields.length; i<j; i++) {
						f_cfg=fields[i];
						if(!f_cfg.hidden) {
							isl._setDefault(cfg, f_cfg, cslws);
						}
					}
					if(f_cfg) {
						if(cfg.fitHeight!==false && f_cfg!==emptyObject && f_cfg.view!=='textarea' && f_cfg.view!=='ace-editor') {
							cfg.elements.push({});
						}
					}
				}
				cfg['wrappered']=true;
			} else {
				let lastElement=fields.pop();
				if(lastElement) {
					if(!lastElement.view && !lastElement.cols && !lastElement.rows) {
						fields.push({});
					} else {
						fields.push(lastElement);
					}
				}
			}
			return cfg;
		},
		_setDefault:function(cfg, f_cfg, cslws) {
			let sw=0;
			if(f_cfg.cols) {
				sw=f_cfg.cols.length;
				while(sw--) {
					isl._setDefault(cfg, f_cfg.cols[sw], cslws);
				}
			} else if(f_cfg.rows) {
				sw=f_cfg.rows.length;
				while(sw--) {
					isl._setDefault(cfg, f_cfg.rows[sw], cslws);
				}
			} else {
				if(f_cfg.rule) {
					cfg.rules[f_cfg.name]=f_cfg.rule;
					delete f_cfg.rule;
				}
				if(f_cfg.view!=='button' && f_cfg.view!=='uploader') {
					if(f_cfg.label && !f_cfg.labelWidth) {
						if(f_cfg.view==='label') {
							f_cfg['width']=cslws;
						} else {
							f_cfg['labelWidth']=cslws;
						}
					}
					if(f_cfg.view==='checkbox') {
						sw=webix.env.mobile?19:20;
						f_cfg['checkValue']=true;
						f_cfg['uncheckValue']=false;
						if(!f_cfg.width) {
							f_cfg['width']=sw+(f_cfg.labelWidth || 0);
						}
					} else {
						if(f_cfg.view!=='text' && f_cfg.view!=='textarea') {
							if(!f_cfg.on) {
								f_cfg['on']={};
							}
						}
						switch(f_cfg.view) {
						case 'text':
							if(f_cfg.type==='mobile') {
								cfg['validate']={
									allow:/[0-9]/g
								};
								delete f_cfg.type;
							} else if(f_cfg.type==='number') {
								if(f_cfg.validate!==false && !cfg.rules[f_cfg.name]) {
									cfg.rules[f_cfg.name]=webix.rules.isNumber;
								}
								if(!f_cfg.defaultValue) {
									f_cfg['defaultValue']=0;
								}
							} else if(f_cfg.type==='email') {
								cfg.rules[f_cfg.name]=webix.rules.isEmail;
							}
							break;
						case 'datetime':
							f_cfg.view='datepicker';
							if(!f_cfg.autowidth) {
								sw=175;
							}
							f_cfg['timepicker']=true;
							if(!f_cfg.format) {
								f_cfg['format']='%Y-%m-%d %H:%i:%s';
							}
							break;
						case 'date':
						case 'time':
							f_cfg['type']=f_cfg.view;
							if(f_cfg.view==='time') {
								sw=100;
								if(!f_cfg.format) {
									f_cfg['format']='%H:%i:%s';
								}
							} else {
								sw=120;
								if(!f_cfg.format) {
									f_cfg['format']='%Y-%m-%d';
								}
							}
							f_cfg.view='datepicker';
							f_cfg['stringResult']=true;
							break;
						case 'colorpicker':
							sw=32;
							f_cfg.on['onAfterRender']=function() {
								this.getInputNode().style.color=this.$view.style.backgroundColor || 'white';
							};
							f_cfg['width']=sw+f_cfg.labelWidth;
						case 'icon':
							f_cfg.on['onKeyPress']=function(code) {
								if(code===46 || code===8) {
									this.setValue(null);
								}
							};
							if(webix.env.mobile) {
								delete f_cfg.tooltip;
							}
							break;
						}
						if(sw && !f_cfg.minWidth) {
							f_cfg['minWidth']=sw+(f_cfg.labelWidth || 0);
						}
					}
				}
			}
		},
		treeAfterSelect:function(nodeId, ev) {
			let o=this.getItem(nodeId), hasSub=this.getFirstChildId(nodeId);
			if(o.leafCheckbox || o.checkbox) {
				let openChecked=!(this.isChecked(nodeId) || this.isBranchOpen(nodeId)), k=this.config['dynamicParent'];
				if(k && o[k] && !hasSub && !o.loaded) {//查询下级点位
					this.loadBranch(nodeId, function() {
						o['loaded']=true;
						//展开并check下级所有节点
						if(this.getFirstChildId(nodeId)) {
							this.open(nodeId);
						} else {
							this.getItem(nodeId).$count=0;
						}
						this.refresh();
					}, this.config.dynamicUrl || this.config.url.source);
				} else {
					//check本层
					if(o.checkbox || !hasSub) {
						openChecked?this.checkItem(nodeId, ev):this.uncheckItem(nodeId, ev);
					}
					//展开并check下级所有节点
					isl.openSubItems(this, nodeId, openChecked);
					this.refresh();
				}
			} else {
				if(o.loaded) {
					if(this.config.leafSelect) {
						this.unselectAll();//清除选择
					}
				} else {
					let k=this.config['dynamicParent'];
					if(k && o[k]) {//查询下级点位
						if(this.config.leafSelect) {
							this.unselectAll();//清除选择
						}
						if(!this.params) {
							this.params={};
						}
						this.params['leaf']=true;
						this.loadBranch(nodeId, function() {
							o['loaded']=true;
							if(this.getFirstChildId(nodeId)) {
								this.open(nodeId);
							} else {
								this.getItem(nodeId).$count=0;
							}
							this.refresh();
						}, this.config.dynamicUrl || this.config.url.source);
					} else if(this.config.selected) {
						this.config.selected(nodeId);
					}
				}
			}
		},
		_tree:function(cfg, buttons) {
			if(cfg.select!==false && !cfg.checkbox && !cfg.leafCheckbox) {
				cfg['select']=true;
			}
			if(!cfg.type) {
				cfg['type']='lineTree';
			}
			if(cfg.filter!==false) {
				cfg['filter']=true;
			}
			if(!cfg.on.onAfterSelect) {
				cfg.on['onAfterSelect']=isl.treeAfterSelect;
			}
			if(!cfg.template) {
				cfg['template']=isl._getTreeNodeTemplate(cfg);
			}
			if(!cfg.on.onItemRender) {
				cfg.on['onItemRender']=function(obj) {
					obj['checkbox']=this.config.checkbox;
					obj['leafCheckbox']=this.config.leafCheckbox;
				};
			}
			if(webix.isUndefined(cfg.scroll)) {
				cfg['scroll']='auto';
			}
			isl._setMoveButtons(cfg, buttons);
			if(cfg.delet) {
				buttons.push({}, {
					id:cfg.id+'-4',
					view:'icon',
					align:'center',
					disabled:true,
					tooltip:isl.locale.button.del,
					icon:'mdi mdi-trash-can-outline',
					click:isl.remove
				});
			}
			if(cfg.filter) {
				cfg={
					rows:[isl.stringFilter(cfg), cfg]
				};
			}
			return cfg;
		},
		_setMoveButtons:function(cfg, buttons) {
			if(cfg.move) {
				if(cfg.move==='all' && cfg.view.startWith('tree')) {
					buttons.push({
						id:cfg.id+'-16',
						view:'icon',
						align:'center',
						icon:'mdi mdi-arrow-expand-left',
						tooltip:isl.locale.button.left,
						click:isl._nodeMove
					});
				}
				buttons.push({
					id:cfg.id+'-17',
					view:'icon',
					align:'center',
					icon:'mdi mdi-arrow-expand-up',
					tooltip:isl.locale.button.up,
					click:isl._nodeMove
				}, {
					id:cfg.id+'-18',
					view:'icon',
					align:'center',
					icon:'mdi mdi-arrow-expand-down',
					tooltip:isl.locale.button.down,
					click:isl._nodeMove
				});
				if(cfg.move==='all' && cfg.view.startWith('tree')) {
					buttons.push({
						id:cfg.id+'-19',
						view:'icon',
						align:'center',
						icon:'mdi mdi-arrow-expand-right',
						tooltip:isl.locale.button.right,
						click:isl._nodeMove
					});
				}
			}
		},
		_nodeMove:function(tid) {
			let pos=tid.lastIndexOf('-'), btid=tid.substring(pos+1);
			if(pos>0) {
				tid=tid.substring(0, pos);
			}
			let t=$$(tid), item=t.getSelectedItem();
			if(item) {
				isl.showProgress();
				let brk=false, order, cid, corder, pId=item.parent, sid=item.id, cItem;
				switch(parseInt(btid)) {
				case 16:
					if(pId<2) {
						brk=true;
					} else {
						let tmp=t.getParentId(pId);
						while(pId) {
							item=t.getItem(pId);
							pId=t.getNextSiblingId(pId);
						}
						;order=(typeof t.config.sortField==='string'?item[t.config.sortField]:t.getBranchIndex(pId))+1;
						pId=tmp;
					}
					break;
				case 17:
					cid=t.getPrevSiblingId?t.getPrevSiblingId(sid):t.getPrevId(sid);
					if(!cid) {
						brk=true;
					} else {
						cItem=t.getItem(cid);
						corder=typeof t.config.sortField==='string'?item[t.config.sortField]:t.getIndexById(sid);
						order=typeof t.config.sortField==='string'?cItem[t.config.sortField]:t.getIndexById(cid);
					}
					break;
				case 18:
					cid=t.getNextSiblingId?t.getNextSiblingId(sid):t.getNextId(sid);
					if(!cid) {
						brk=true;
					} else {
						cItem=t.getItem(cid);
						corder=typeof t.config.sortField==='string'?item[t.config.sortField]:t.getIndexById(sid);
						order=typeof t.config.sortField==='string'?cItem[t.config.sortField]:t.getIndexById(cid);
					}
					break;
				case 19:
					let tmp=t.getPrevSiblingId(sid);
					if(!tmp) {
						brk=true;
					} else {
						pId=t.getFirstChildId(tmp);
						item=null;
						while(pId) {
							item=t.getItem(pId);
							pId=t.getNextSiblingId(pId);
						}
						if(item!=null && typeof item==='object') {
							order=(typeof t.config.sortField==='string'?item[t.config.sortField]:t.getBranchIndex(pId))+1;
						} else {
							order=0;
						}
						pId=tmp;
					}
					break;
				}
				if(brk) {
					isl.hideProgress();
					return;
				}
				let param={
					parent:pId,
					id:sid,
					order:order,
					cid:cid,
					corder:corder
				};
				isl.patch((t.config.sortUrl || t.config.url.source)+'/'+sid, param, function(jdata, o) {
					if(o.cid) {
						this.getItem(o.cid).order=o.corder;
						let item=this.getItem(o.id);
						item.order=o.order;
						item.parent=o.parent;
						if(this.config.sortBy) {
							this.sort(this.config.sortBy, this.config.sortDir, this.config.sortAs);
						}
					} else {
						this.move(o.id, o.order, null, {
							parent:o.parent
						});
						let item=this.getItem(o.id);
						item.order=o.order;
						item.parent=o.parent;
					}
					if(this.open) {
						this.open(o.parent);
					}
					return true;
				}, null, t);
			} else {
				isl.error(isl.locale.failure.select);
			}
		},
		openSubItems:function(tree, id, checked) {
			let cId=tree.getFirstChildId(id);
			if(cId) {
				checked?tree.open(id):tree.close(id);
				do {
					if((tree.config.checkbox || tree.config.leafCheckbox) && !tree.getItem(cId).webix_kids) {
						checked?tree.checkItem(cId):tree.uncheckItem(cId);
					}
					isl.openSubItems(tree, cId, checked);
					cId=tree.getNextSiblingId(cId);
				} while(cId);
			}
		},
		_checkboxTemplate:function(obj, com) {
			return com.icon(obj, com)+isl._nodeCheckbox(obj, com)+isl._nodeIcon(obj, com)+isl._nodeValue(obj, com);
		},
		_treetableTemplate:function(obj, com) {
			return com.space(obj, com)+isl._defaultTemplate(obj, com);
		},
		_defaultTemplate:function(obj, com) {
			return com.icon(obj, com)+isl._nodeIcon(obj, com)+isl._nodeValue(obj, com);
		},
		_nodeCheckbox:function(obj) {
			return (obj.checkbox || obj.leafCheckbox && !obj.$count)?('<input type="checkbox" class="webix_tree_checkbox" '+(obj.checked?'checked':'')+(obj.disabled?' disabled':'')+'>'):'';
		},
		_nodeIcon:function(obj) {
			return obj.icon?('<div class="webix_icon '+obj.icon+(obj.color?('" style="color:'+obj.color):'')+'"></div>'):'';
		},
		_nodeValue:function(obj) {
			return '<span '+(obj.css?('class="'+obj.css+'"'):'')+'>'+(webix.isUndefined(obj.name)?(webix.isUndefined(obj.value)?'':obj.value.replace(/</g, '&lt;')):obj.name)+(webix.isUndefined(obj.variable)?(webix.isUndefined(obj.identity)?'':(' ['+obj.identity+']')):(' ['+obj.variable+']'))+'</span>';
		},
		_getTreeNodeTemplate:function(cfg) {
			if(cfg.checkbox || cfg.leafCheckbox) {
				return isl._checkboxTemplate;
			} else if(cfg.icon!==false) {
				if(cfg.view==='treetable') {
					return isl._treetableTemplate;
				} else {
					return isl._defaultTemplate;
				}
			}
			return null;
		},
		_organogram:function(cfg, buttons) {
			if(webix.isUndefined(cfg.scroll)) {
				cfg['scroll']='auto';
			}
			if(cfg.delet) {
				buttons.push({
					id:cfg.id+'-4',
					view:'icon',
					align:'center',
					disabled:true,
					tooltip:isl.locale.button.del,
					icon:'mdi mdi-trash-can-outline',
					click:isl.remove
				});
			}
			if(cfg.filter) {
				cfg={
					rows:[{
						view:'text',
						pnId:cfg.id,
						on:{
							onTimedKeyPress:function() {
								let value=this.getValue();
								$$(this.config.pnId).filter(function(obj) {
									let result=obj.value.indexOf(value)!== -1;
									if(!result && obj.letName) {
										result=obj.letName.indexOf(value)!== -1;
									}
									return result;
								});
							}
						}
					}, cfg]
				};
			}
			if(cfg.insert) {
				let _onAfterInsert=cfg.on.onAfterInsert;
				cfg.save.on['onAfterInsert']=function(response, id, details) {
					let p=$$(this.config.store.owner);
					p.by[data.id]=p.by[id];
					delete p.by[id];
					p.$xy[data.id]=p.$xy[id];
					delete p.$xy[id];
					if(_onAfterInsert) {
						_onAfterInsert.call(this, response, id, details);
					}
				};
				delete cfg.on.onAfterInsert;
			}
			return cfg;
		},
		ajax:function(type, url, params, success, error, p, bt, showProgress) {
			let panel;
			if(p) {
				panel=typeof p==='string'?$$(p):p;
				if(panel.config) {
					let dp=webix.dp(panel.config.id);
					if(dp) {
						dp.reset();
					}
				}
			}
			if(showProgress!==false) {
				isl.showProgress(showProgress);
			}
			if(bt && bt.disable) bt.disable();
			return webix.ajax().timeout(60000)[type](url, params, {
				success:function(text, data, ajax) {
					if(showProgress!==false) {
						isl.hideProgress(showProgress, true);
					}
					if(success && success.call(p, ajax.status===204?null:data.json() || text, params, bt)) {
						webix.message({
							type:'success',
							text:isl.locale.alert.success
						});
					}
				},
				error:function(text, data, ajax) {
					if(bt && bt.enable) bt.enable();
					if(showProgress!==false) {
						isl.hideProgress(showProgress, true);
					}
					if(error) {
						error.call(p, ajax.status===204?null:data.json(), params, ajax);
					} else {
						isl.ajaxError(text, data, ajax);
					}
				}
			});
		},
		get:function(url, params, success, error, p, showProgress) {
			if(params && typeof params==='function') {
				showProgress=p, p=error, error=success, success=params, params=null;
			}
			return isl.ajax('get', url, params, success, error, p, null, showProgress);
		},
		_defaultSuccess:function() {
			return true;
		},
		post:function(url, params, success, error, p, bt, showProgress) {
			if(params && typeof params==='function') {
				showProgress=bt, bt=p, p=error, error=success, success=params, params=null;
			}
			return isl.ajax('post', url, params, success || isl._defaultSuccess, error, p, bt, showProgress);
		},
		put:function(url, params, success, error, p, bt, showProgress) {
			if(params && typeof params==='function') {
				showProgress=bt, bt=p, p=error, error=success, success=params, params=null;
			}
			return isl.ajax('put', url, params, success || isl._defaultSuccess, error, p, bt, showProgress);
		},
		del:function(url, params, success, error, p, bt, showProgress) {
			if(params && typeof params==='function') {
				showProgress=bt, bt=p, p=error, error=success, success=params, params=null;
			}
			return isl.ajax('del', url, params, success || isl._defaultSuccess, error, p, bt, showProgress);
		},
		patch:function(url, params, success, error, p, bt, showProgress) {
			if(params && typeof params==='function') {
				showProgress=bt, bt=p, p=error, error=success, success=params, params=null;
			}
			return isl.ajax('patch', url, params, success || isl._defaultSuccess, error, p, bt, showProgress);
		},
		save:function(p, o, bt) {
			isl.comfirmClick(bt, isl.locale.confirm.save, function(params, bt) {
				isl.directSave(params.p, params.o, bt);
			}, {
				p:p,
				o:o
			});
		},
		directSave:function(p, o, bt) {
			p=typeof p==='string'?$$(p):p;
			let dp=webix.dp(p.config.id);
			if(dp) {
				dp.reset();
			}
			if(bt && bt.config.id.endWith('_copybt')) {
				o['_cpid']=o.id;
				delete o.id;
			}
			if(o.id && o.id>0) {
				if(p.config.update) {
					p['actionBT']=bt;
					p.updateItem(o.id, o);
				} else {
					if(bt) bt.enable();
					isl.error(isl.locale.failure.privilege);
				}
			} else if(p.config.insert) {
				o['id']= -1;
				p['actionBT']=bt;
				p.add(o, -1, o.parent);
			} else {
				if(bt) bt.enable();
				isl.error(isl.locale.failure.privilege);
			}
		},
		remove:function(btId) {
			let p=btId;
			if(typeof p==='string') {
				if(p.endWith('-4')) p=p.substring(0, p.length-2);
				p=$$(p);
			}
			if(p.config.delet) {
				let id=p.getSelectedId();
				if(id) {
					if(p.config.deletConfirm!==false) {
						isl.comfirmClick(null, isl.locale.confirm.remove, isl._remove, p, 'alert-warning');
					} else {
						isl._remove(p);
					}
				} else {
					isl.error(isl.locale.failure.select);
				}
			} else {
				isl.error(isl.locale.failure.privilege);
			}
		},
		_remove:function(p) {
			p.remove(p.getSelectedId());
		},
		comfirmClick:function(bt, text, fn, params, type) {
			let details={
				params:params
			};
			if(bt) {
				details['bt']=bt;
			}
			webix.confirm({
				type:type || 'confirm-warning',
				text:text,
				ok:isl.locale.confirm.click[1],
				cancel:isl.locale.confirm.click[0],
				details:details,
				callback:function(res, details) {
					let bt=details.bt;
					if(res) {
						if(bt && bt.disable && !bt.config.id.endWith('_copybt')) bt.disable();
						fn(details.params, bt);
					} else {
						if(bt && bt.enable) {
							bt.enable();
						}
						isl.hideProgress();
					}
				}
			});
		},
		_toExport:function(gid, toFn, fileName) {
			let p=$$(gid), item=p.getItem(p.getFirstId()), columns=p.config.columns;
			if(item && columns.length) {
				let columnCfg={}, noExports={};
				for(let i=0, l=columns.length; i<l; i++) {
					let cfg=columns[i];
					if(cfg.header[0].text==='' || cfg['export']===false) {
						noExports[cfg.id]=true;
					} else {
						columnCfg[cfg.id]={
							header:cfg.header[0]?cfg.header[0].text:cfg.id,
							width:cfg.width
						};
						if(cfg.template) {
							if(cfg.exportValue) {
								columnCfg[cfg.id]['template']=isl._exportRaw;
							} else {
								columnCfg[cfg.id]['template']=cfg.template;
							}
						}
					}
				}
				webix.extend(columnCfg, p.config.hiddenColumns, true);
				toFn(gid, {
					filename:fileName || gid,
					autowidth:true,
					columns:columnCfg
				});
			}
		},
		_exportRaw:function(obj) {
			return obj[this.id];
		}
	});
})();