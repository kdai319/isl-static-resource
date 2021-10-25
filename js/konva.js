'use strict';
webix.protoUI({
	name:'konva',
	idCreator:0,
	vss:null,
	$init:function() {
		this._wait=webix.promise.defer();
		this.$ready.push(this.render);
	},
	render:function() {
		gifler.Animator.prototype.animateInCanvas=function(canvas, setDimensions, frameImg, bgImg) {
			let ctx;
			if(setDimensions==null) {
				setDimensions=true;
			}
			if(setDimensions) {
				canvas.width=this.width || 1;
				canvas.height=this.height || 1;
			}
			ctx=!frameImg?canvas.getContext('2d'):null;
			if(this.onDrawFrame==null) {
				this.onDrawFrame=function(ctx, frame) {
					return ctx.drawImage(frame.buffer, frame.x, frame.y);
				};
			}
			if(this.onFrame==null) {
				this.onFrame=(function(_this) {
					return function(frame, i) {
						let ref, saved;
						if(frame.buffer==null) {
							frame.buffer=gifler.Animator.createBufferCanvas(frame, _this.width, _this.height);
						}
						if(typeof _this.disposeFrame==='function') {
							_this.disposeFrame();
						}
						switch(frame.disposal) {
						case 2:
							if(ctx) {
								_this.disposeFrame=function() {
									return ctx.clearRect(0, 0, canvas.width, canvas.height);
								};
							}
							break;
						case 3:
							if(ctx) {
								saved=ctx.getImageData(0, 0, canvas.width, canvas.height);
								_this.disposeFrame=function() {
									return ctx.putImageData(saved, 0, 0);
								};
							}
							break;
						default:
							_this.disposeFrame=null;
						}
						return (ref=_this.onDrawFrame)!=null?ref.apply(_this, [ctx || frameImg, frame, i, bgImg]):void 0;
					};
				})(this);
			}
			this.start();
			return this;
		};
		this.stage=new Konva.Stage({
			container:this.$view
		});
		this.stage.width(1).height(1);
		this.stage['points']={};
		this.stage['zIndexCache']=[];
		this.stage['imgZIndexCache']=[];
		if(!this.mainLayer) {
			//创建主图层,
			this.mainLayer=new Konva.Layer();
			this.stage.add(this.mainLayer);
			//编辑用
			if(this.config.shape_tree || this.config.shape_list || this.config.property_form) {
				this.stage['editor']=this;
				this.overrideKonva();
				//注册拖拽元素动作
				webix.DragControl.addDrop(this.$view, {$drop:this.createShape});
				//注册函数
				this.selectShape=this.config.onSelectShape;
				//自由位置锚点图层
				this.anchorLayer=new Konva.Layer({id:'anchorLayer'});
				//创建粘胶选框图层
				this.rubberLayer=new Konva.FastLayer({
					id:'rubberLayer',
					draggable:false
				});
				this.rubber=new Konva.Rect({
					id:'_rubber',
					x:0,
					y:0,
					width:0,
					height:0,
					fill:'#7FCFFF',
					stroke:'blue',
					dash:[2, 2]
				});

				//主图层元素的Transformer
				this.tfr=new Konva.Transformer({
					id:'shape_transformer',
					ignoreStroke:true,
					rotationSnaps:[0, 90, 180, 270],
					borderDash:[3, 3],
					keepRatio:false,
					opacity:0.5
				});
				//group中元素的Transformer
				this.subTfr=new Konva.Transformer({
					id:'group_shape_transformer',
					keepRatio:false,
					ignoreStroke:true,
					borderEnabled:false,
					resizeEnabled:false,
					rotateEnabled:false
				});
				this.mainLayer.add(this.tfr).add(this.subTfr);
				//注册stage的功能及元素
				this.stage.add(this.rubberLayer.add(this.rubber)).add(this.anchorLayer)
				// 注册konva画布上的粘胶选框监听事件
				.on('mousedown', this.config.onStageMouseDown).on('mousemove', this.config.onStageMouseMove).on('mouseup', this.config.onStageMouseUp).container().firstChild.style.backgroundImage='url(/img/canvas_bg.png)';
			} else {//最终显示用
				this.stage['covers']=[];
				//设置hitGraphEnabled: false
				Konva.hitOnDragEnabled=true;
				this.tooltip=new Konva.Text({
					text:'',
					fontFamily:'Microsoft YaHei',
					fontSize:13,
					padding:5,
					fill:'#FFF',
					shadowColor:'#000',
					shadowOffsetX:1,
					shadowOffsetY:1,
					shadowBlur:1,
					x:-100,
					y:-100
				});
				this.stage.add(new Konva.FastLayer().add(this.tooltip));
				let mainLayer=this.mainLayer;
				this.stage.on('touchmove mousemove', function(e) {
					e.evt.preventDefault();
					if(e.evt.touches || mainLayer.moveInited) {
						if(e.evt.touches && e.evt.touches.length>1) {//缩放
							let touch1=e.evt.touches[0], touch2=e.evt.touches[1];
							let dist=Math.sqrt(Math.pow(touch2.clientX-touch1.clientX, 2)+Math.pow(touch2.clientY-touch1.clientY, 2));//新手指间距离
							if(!mainLayer.lastDist) {
								mainLayer.lastDist=dist;
							}
							//尺寸变化率
							let deff=dist/mainLayer.lastDist, //新缩放比例
								newScale=mainLayer.scaleX()*deff;
							let xy=mainLayer.resetZoom(deff, newScale, //触摸点中心点距离屏幕零点的相对坐标
								Math.min(touch2.clientX, touch1.clientX)+Math.abs(touch2.clientX-touch1.clientX)/2, Math.min(touch2.clientY, touch1.clientY)+Math.abs(touch2.clientY-touch1.clientY)/2);
							if(xy) {
								mainLayer.lastDist=dist;
								mainLayer.resetXY(xy[0], xy[1]);
							}
						} else {//移动
							let clientX, clientY;
							if(mainLayer.moveInited) {
								clientX=e.evt.clientX;
								clientY=e.evt.clientY;
							} else {
								clientX=e.evt.touches[0].clientX;
								clientY=e.evt.touches[0].clientY;
							}
							if(clientX> -1) {
								let newX=mainLayer.initX+clientX;
								if(0<newX) {
									newX=0;
								} else if(newX< -mainLayer.maxMoveX) {
									newX= -mainLayer.maxMoveX;
								}
								mainLayer.x(newX);
							}
							if(clientY> -1) {
								let newY=mainLayer.initY+clientY;
								if(0<newY) {
									newY=0;
								} else if(newY< -mainLayer.maxMoveY) {
									newY= -mainLayer.maxMoveY;
								}
								mainLayer.y(newY);
							}
						}
					}
					mainLayer.batchDraw();
				}).on('wheel', function(e) {
					e.evt.preventDefault();
					let deff=(1+e.evt.wheelDelta/2000), newScale=mainLayer.scaleX()*deff;
					let xy=mainLayer.resetZoom(deff, newScale, e.evt.clientX, e.evt.clientY);
					if(xy) {
						mainLayer.resetXY(xy[0], xy[1]);
						mainLayer['initX']=mainLayer.x()-e.evt.clientX;//移动初始触摸点绝对坐标
						mainLayer['initY']=mainLayer.y()-e.evt.clientY;
					}
					mainLayer.batchDraw();
				}).on('touchstart mousedown', function(e) {
					if(e.evt.touches) {
						let touch1=e.evt.touches[0], touch2=e.evt.touches[1];
						if(touch1 && touch2) {
							mainLayer['lastDist']=0;
						} else {
							mainLayer['initX']=mainLayer.x()-touch1.clientX;//移动初始触摸点绝对坐标
							mainLayer['initY']=mainLayer.y()-touch1.clientY;
						}
					} else {
						mainLayer['moveInited']=true;
						mainLayer['initX']=mainLayer.x()-e.evt.clientX;//移动初始触摸点绝对坐标
						mainLayer['initY']=mainLayer.y()-e.evt.clientY;
					}
				}).on('touchend mouseleave mouseup', function(e) {
					if(e.evt.touches) {
						let touch1=e.evt.touches[0];
						if(touch1) {
							mainLayer['initX']=mainLayer.x()-touch1.clientX;//最后一个触摸点设置为移动初始触摸点绝对坐标
							mainLayer['initY']=mainLayer.y()-touch1.clientY;
						}
						let covers=this.getStage().covers, l=covers.length, needDraw=false;
						while(l--) {
							let cover=covers[l];
							if(cover.getAttr('opacity')>0) {
								needDraw|=true;
								cover.setAttr('opacity', 0).setAttr('strokeWidth', 0);
							}
						}
						if(needDraw) {
							mainLayer.batchDraw();
						}
					}
					delete mainLayer.moveInited;
				});
			}
		}
		this._wait.resolve(this);
		if(this.config.ready) {
			this.config.ready.call(this, this.stage);
		}
	},

	$setSize:function(x, y) {
		if(webix.ui.view.prototype.$setSize.call(this, x, y)) {
			this._wait.then(function(editor) {
				editor.stage.width(x).height(y);
				let mainLayer=editor.mainLayer;
				if(!mainLayer.inited) {
					//注册konva的画布编辑器对象
					if(editor.config.shape_tree) {
						editor.shape_tree=$$(editor.config.shape_tree);
						//editor.shape_tree.cacheData = {};
						editor.shape_tree['editor']=editor;
					}
					if(editor.config.shape_list) {
						editor.shape_list=$$(editor.config.shape_list);
						editor.shape_list['editor']=editor;
					}
					if(editor.config.property_form) {
						editor.property_form=$$(editor.config.property_form);
						editor.property_form['editor']=editor;
					}
					if(editor.config.onAfterRender) {
						editor.config.onAfterRender.call(editor);
					}
					if(!editor.shape_list && !editor.shape_tree) {
						mainLayer['resetMaxMove']=function() {
							let scale=this.scaleX();
							if(this.cfgWidth*scale>this.screenWidth) {
								this['maxMoveX']=this.cfgWidth*scale-this.screenWidth;
							} else {
								this['maxMoveX']=0;
							}
							if(this.cfgHeight*scale>this.screenHeight) {
								this['maxMoveY']=this.cfgHeight*scale-this.screenHeight;
							} else {
								this['maxMoveY']=0;
							}
							mainLayer['minScale']=Math.min(mainLayer.screenWidth/mainLayer.cfgWidth, mainLayer.screenHeight/mainLayer.cfgHeight);
						};

						mainLayer['resetZoom']=function(deff, newScale, screenX, screenY) {
							if(newScale>1 || mainLayer.minScale>=1) {
								newScale=1;
							} else if(newScale<mainLayer.minScale) {
								newScale=mainLayer.minScale;
							}
							let xy=null;
							if(mainLayer.scaleX()!==newScale) {
								mainLayer.scaleX(newScale).scaleY(newScale);
								mainLayer.resetMaxMove();
								//新屏幕零点绝对坐标 = 触摸点中心的新绝对坐标 - 屏幕相对坐标
								xy=[deff*(mainLayer.x()-screenX)+screenX, deff*(mainLayer.y()-screenY)+screenY];
							}
							return xy;
						};

						mainLayer['resetXY']=function(newX, newY) {
							if(0<newX) {
								newX=0;
							} else if(newX< -mainLayer.maxMoveX) {
								newX= -mainLayer.maxMoveX;
							}
							mainLayer.x(newX);
							if(0<newY) {
								newY=0;
							} else if(newY< -mainLayer.maxMoveY) {
								newY= -mainLayer.maxMoveY;
							}
							mainLayer.y(newY);
						};
					}
					mainLayer.inited=true;
				}
				if(!editor.shape_list && !editor.shape_tree) {
					let parentNode=mainLayer.getStage().content.parentNode;
					mainLayer['screenWidth']=Math.min(parentNode.clientWidth, parentNode.parentNode.clientWidth);
					mainLayer['screenHeight']=Math.min(parentNode.clientHeight, parentNode.parentNode.clientHeight);
					mainLayer.resetMaxMove();
					if(mainLayer.scaleX()<mainLayer.minScale) {
						mainLayer.scaleX(mainLayer.minScale).scaleY(mainLayer.minScale);
					}
					mainLayer.x(0).y(0).batchDraw();
				}
			});
		}
	},

	overrideKonva:function() {
		Konva.Node.prototype.toObject=function() {
			let t, e, i, n={attrs:{lv:this.zIndex()}}, r=this.getAttrs(), notSave, className=this.getClassName();
			delete r.lv;
			for(t in r) {
				e=r[t];
				notSave=Konva.Util.isObject(e) && !Konva.Util._isPlainObject(e) && !Konva.Util._isArray(e);
				if(!notSave) {
					switch(t) {
					case 'scaleX':
					case 'scaleY':
					case 'opacity':
						notSave=e===1;
						break;
					case 'cover':
						notSave=e===0;
						break;
					case 'stroke':
						if(e==='#000000') {
							e='#000';
						} else if(e==='#FFFFFF') {
							e='#FFF';
						}
						break;
					case 'fontFamily':
						notSave=e==='Microsoft YaHei';
						break;
					case 'fill':
						notSave=className==='Text' && e==='#000000';
						break;
					case 'rotation':
					case 'offsetX':
					case 'offsetY':
					case 'skewX':
					case 'skewY':
						notSave=e===0;
						break;
					case 'draggable':
					case 'visible':
					case 'strokeScaleEnabled':
					case 'hitStrokeWidth':
					case 'shadowEnabled':
					case 'shadowForStrokeEnabled':
					case 'perfectDrawEnabled':
					case 'open':
						notSave=true;
						break;
					}
				}
				if(notSave) {
					continue;
				}
				if(webix.isUndefined(e)) {
					i=this[t];
					if('function'== typeof i) {
						e=i.call(this);
					}
				}
				if(!webix.isUndefined(e) && e!=null) {
					n.attrs[t]=e;
				}
			}
			return n.className=this.getClassName(), Konva.Util._prepareToStringify(n);
		};
		Konva.Container.prototype.toObject=function() {
			let t=Konva.Node.prototype.toObject.call(this);
			t.children=[];
			for(let e=this.getChildren(), i=e.length, n=0; n<i; n++) {
				let r=e[n];
				if(r.getClassName()==='Transformer' || r.id()==='rubberLayer' || r.id()==='anchorLayer') {//
					continue;
				}
				t.children.push(r.toObject());
			}
			return t;
		};
	},

	_registerPointAndMouseEvents:function(shape) {
		let editor=this, clickObj=shape.getAttr('click'), pointObj=shape.getAttr('point'), isCover=shape.getAttr('cover');
		if(typeof isCover==='string') {
			isCover=parseInt(isCover);
		}
		if(clickObj || pointObj || isCover) {
			//注册点位映射
			let onShapeOver=function(e) {
				if(clickObj) {
					e.evt.currentTarget.style.cursor='pointer';
				}
				if(isCover) {
					if(e.evt.touches) {
						let covers=this.getStage().covers, l=covers.length;
						while(l--) {
							let coverObj=covers[l];
							if(coverObj!==this) {
								coverObj.setAttr('opacity', 0).setAttr('strokeWidth', 0);
							}
						}
					}
					this.setAttr('opacity', this.orgAttrs.opacity).setAttr('strokeWidth', this.orgAttrs.strokeWidth);
					this.getLayer().batchDraw();
				}
				if(pointObj && editor.tooltip) {
					let mousePos=editor.stage.getPointerPosition(), x=mousePos.x-65, y=mousePos.y-55;
					editor.tooltip.position({
						x:x<0?0:x,
						y:y<0?0:y
					}).text(this.tooltip).getLayer().draw();
				}
			}, onShapeOut=function(e) {
				e.evt.currentTarget.style.cursor='default';
				if(isCover && e.type==='mouseout') {
					this.setAttr('opacity', 0).setAttr('strokeWidth', 0);
					this.getLayer().batchDraw();
				}
				if(pointObj && editor.tooltip) {
					editor.tooltip.position({
						x:-100,
						y:-100
					}).getLayer().draw();
				}
			};
			//注册指针覆盖事件
			shape.on('mouseover touchstart', onShapeOver).on('mouseout', onShapeOut);
			if(shape.ag) {
				shape.ag.on('mouseover touchstart', onShapeOver).on('mouseout', onShapeOut);
			}
			if(isCover) {
				this.stage.covers.push(shape);
				shape['orgAttrs']={};
				shape.orgAttrs['opacity']=shape.getAttr('opacity');
				shape.orgAttrs['strokeWidth']=shape.getAttr('strokeWidth');
				shape.orgAttrs['text']=shape.getAttr('text');
				shape.orgAttrs['fill']=shape.fill();
				shape.orgAttrs['stroke']=shape.stroke();
				shape.setAttr('opacity', 0.001).setAttr('strokeWidth', 0);
			}
			if(clickObj) {
				//注册点击事件
				shape.on('click touchend', function(e) {
					if(clickObj===1000000000) {// 手动控制
						let params=shape.getAttr('params');
						if(params) {//带参数的控制（直接设定配置值）
							//需要控制确认
							isl.comfirmClick(null, isl.locale.confirm.action, function() {
								isl.patch(isl.app('io')+'/Device/point', params, function() {
									return true;
								});
							});
						} else if(webix._pointSet) {//不带参数的控制（弹出设定窗口）
							isl.get(isl.app('io')+'/Device/point?tagString='+pointObj, function(info) {
								if(info) {
									webix.require(isl.app('io')+'/protocol/'+info.protocol+'.js', function() {
										webix._pointSet(info);//对应设备注册的showSetLayout函数的内容不同
									});
								} else {
									isl.error(isl.locale.failure.found);
								}
							});
						} else {
							isl.error(isl.locale.failure.unsupported);
						}
					} else {//菜单
						let menuList=parent.$$('menu_list') || parent.$$('glportlet');
						if(menuList) {
							menuList.callEvent('onItemClick', [clickObj, null, null, window.location]);
						} else {
							window.location.href=isl.app('ui')+'/Menu/portlet.html?id='+clickObj;
						}
					}
					if(e.type==='touchend') {
						onShapeOut.call(this, e);
					}
				});
			}
			if(pointObj && shape.getAttr('showVS')) {
				if(shape.ag) {
					shape.ag.hide();
					shape.animator.stop();
				} else {
					shape.hide();
				}
			}
		}
	}, //新点位加入缓存
	addPointToStatusMap:function(shape, point) {
		if(point) {
			let pointInfos=this.stage.points[point];
			if(!pointInfos) {
				pointInfos={};
				this.stage.points[point]=pointInfos;
			}
			if(!pointInfos.shapes) {
				pointInfos['shapes']=[];
			}
			if(shape && shape!==emptyObject) {
				if(pointInfos.shapes.indexOf(shape)=== -1) {
					pointInfos.shapes.push(shape);
				}
			}
		}
	},

	//性能优化
	_shapePerformanceInc:function(cfg) {
		cfg['strokeScaleEnabled']=false;
		cfg['hitStrokeWidth']=0;
		cfg['shadowEnabled']=false;
		cfg['shadowForStrokeEnabled']=false;
		cfg['perfectDrawEnabled']=false;
	},

	createShape:function(source, cfg, e, showMode) {//组件拖进画布的动作
		let className, editor;
		if(source.attrs) {
			editor=cfg;
			className=source.className;
			if(source.ag) {
				cfg=source.ag;
			} else {
				cfg=source.attrs;
			}
			source=source.attrs;
		} else {
			let context=webix.DragControl.getContext();
			editor=context.from.editor;
			source=context.from.getItem(context['source'][0]);
			className=source.value;
			cfg=null;
		}

		if(source.icon && source.icon.indexOf('.')>0) {//图片对象
			//先建立关联点位，用于通知调用
			editor.addPointToStatusMap(emptyObject, source.point);
			let url=source.icon;
			if(source.icon.toLowerCase().endsWith('.gif')) {//gif动画
				gifler('/uif/'+url).get().then(function(animator) {
					editor.buildGifImage(showMode, animator, source, cfg || null, e);
				});
			} else {//静态图
				editor.buildImage(showMode, url, cfg || null, e);
			}
		} else {
			let isDragDrop=typeof e.offsetX==='number' && typeof e.offsetY==='number';
			if(isDragDrop) {
				if(source.cfg){
					let templateCfg = JSON.parse(source.cfg);
					let children;
					if(templateCfg.className === "Group") {
						children = templateCfg.children;
					}
					templateCfg.attrs["name"] = source.value+"_temp_" + editor.idCreator;
					templateCfg.attrs["x"] = e.offsetX;
					templateCfg.attrs["y"] = e.offsetY;
					templateCfg.attrs["rotation"] = 0;
					let shape = editor.createShape(templateCfg, editor, e);
					if(children) {
						editor.$restoreShapes(children, shape, {});
						editor.selectShape(editor.stage);
						editor.selectShape(shape);
					}
					return shape;
				} else if(!cfg) {
					cfg={
						id:className+'_'+editor.idCreator,
						name:isl.locale.app.graphic[className]+'_'+editor.idCreator++,
						x:e.offsetX,
						y:e.offsetY,
						rotation:0,
						opacity:1,
						stroke:'#000000',
						strokeWidth:2
					};
					switch(className) {
					case 'Rect':
						cfg['width']=100;
						cfg['height']=100;
						break;
					case 'Ellipse':
						cfg['radiusX']=50;
						cfg['radiusY']=50;
						break;
					case 'Star':
						cfg['numPoints']=1.5;
						cfg['innerRadius']=50;
						cfg['outerRadius']=50;
						break;
					case 'Arc':
						cfg['angle']=90;
						cfg['innerRadius']=50;
						cfg['outerRadius']=100;
						break;
					case 'Text':
						delete cfg.stroke;
						delete cfg.strokeWidth;
						cfg['text']='Text';
						cfg['fill']='#000000';
						cfg['fontSize']=20;
						cfg['width']=100;
						cfg['height']=50;
						cfg['fontFamily']='Microsoft YaHei';
						break;
					case 'Line':
						cfg['points']=[0, 0, 50, 86.6, 100, 0];
						cfg['tension']=0;
						cfg['closed']=true;
						break;
					case 'Arrow':
						cfg['points']=[0, 0, 100, 0];
						cfg['strokeWidth']=3;
						cfg['tension']=0;
						break;
					}
				} else {
					cfg.id = className+'_'+editor.idCreator++;
				}
			} else if(cfg){
				if(className==='Text') {
					if(!cfg.fill) {
						cfg['fill']='#000000';
					}
					if(!cfg.fontFamily) {
						cfg['fontFamily']='Microsoft YaHei';
					}
				}
				cfg.id = className+'_'+editor.idCreator++;
			}
			editor._shapePerformanceInc(cfg);
			let shape=new Konva[className](cfg);
			if(showMode) {
				//加入图层
				e.add(shape);
				editor._registerPointAndMouseEvents(shape);
				if(editor.shape_tree) {
					editor.treeData.add(webix.extend({shape:shape}, cfg), 0);
				}
			} else {
				shape.on('dragend', editor.config.onDragEnd).on('transformend', editor.config.onTransformEnd);
				if(className==='Line' || className==='Arrow') {
					shape.on('dblclick', editor.config.onAddFreeAnchor);
				}
				if(e.attrs) {
					//加入图层
					e.add(shape);
				} else {
					//组件加入静态图像层
					editor.mainLayer.add(shape);
				}
			}
			//作为最后加载元素的处理
			if(isDragDrop) {
				//加入layerTree
				editor.addShapeToLayerTree(shape);
				editor.selectShape(shape);
			} else {
				//加入layerTree
				editor.addShapeToLayerTree(shape, e);
			}
			//新点位加入缓存
			editor.addPointToStatusMap(shape, shape.getAttr('point'));
			return shape;
		}
	},

	buildImage:function(showMode, url, cfg, container) {
		let editor=this, img=new Image(), shape;
		if(showMode) {
			cfg['image']=img;
			this._shapePerformanceInc(cfg);
			shape=new Konva.Image(cfg);
		} else {
			if(!cfg) {
				let id='Image_'+this.idCreator++;
				cfg={
					id:id,
					name:id,
					x:container.offsetX,
					y:container.offsetY
				};
			}
			cfg['image']=img;
			this._shapePerformanceInc(cfg);
			shape=new Konva.Image(cfg).on('dragend', this.config.onDragEnd).on('transformend', this.config.onTransformEnd);
		}
		img.onload=function() {
			let image=shape.image();
			shape.width(shape.attrs.width || image.width).height(shape.attrs.height || image.height).setAttr('icon', url);
			let id=shape.id();
			if(showMode) {//展示模式
				//加入图层
				container.add(shape);
				editor._registerPointAndMouseEvents(shape);
			} else {//还原
				if(container.attrs) {//编辑复制
					//加入图层
					container.add(shape);
				} else {//编辑新增
					//加入图层
					editor.mainLayer.add(shape).draw();
				}
			}
			let indexOf=editor.stage.imgZIndexCache.indexOf(id);
			if(indexOf> -1) {
				//静态图
				editor.stage.imgZIndexCache.splice(indexOf, 1);
			}
			//作为最后加载元素的处理
			if(typeof container.offsetX==='number' && typeof container.offsetY==='number') {
				//加入layerTree
				editor.addShapeToLayerTree(shape);
				editor.selectShape(shape);
			} else {
				//加入layerTree
				editor.addShapeToLayerTree(shape, container);
				editor._refreshZIndex();
			}
			//新点位加入缓存
			editor.addPointToStatusMap(shape, shape.getAttr('point'));
		};
		img.src='/uif/'+url;
	},

	buildGifImage:function(showMode, animator, bgCfg, agCfg, container) {
		//每个GIF都由两个Image对象构成
		if(!showMode) {
			//判断是否是复制对象
			if(!agCfg) {
				let id=this.idCreator++, pointerPosition=this.stage.getPointerPosition(), name=bgCfg.value.substring(0, bgCfg.value.indexOf('<br/>'));
				bgCfg={
					id:'GIF_'+id,
					name:'GIF_'+name,
					x:pointerPosition.x,
					y:pointerPosition.y,
					width:animator.width,
					height:animator.height,
					icon:bgCfg.icon
				};
				agCfg={
					id:'Frame_GIF_'+id,
					name:'Frame_GIF_'+name,
					x:pointerPosition.x,
					y:pointerPosition.y
				};
			}
		}
		this._shapePerformanceInc(bgCfg);
		this._shapePerformanceInc(agCfg);
		//背景帧，用于Transformer和拖拽
		let bgImg=new Konva.Image(bgCfg), //动画帧
			frameImg=new Konva.Image(agCfg);
		//背景帧处理
		let bg=animator._frames[0];
		bg.buffer=gifler.Animator.createBufferCanvas(bg, animator.width, animator.height);
		bgImg.image(bg.buffer);
		bgImg['ag']=frameImg;
		bgImg['animator']=animator;
		frameImg['bg']=bgImg;
		frameImg['animator']=animator;
		if(showMode) {
			container.add(bgImg).add(frameImg);
			this._registerPointAndMouseEvents(bgImg);
		} else {
			bgImg.on('dragend', this.config.onDragEnd).on('transformend', this.config.onTransformEnd);
			bgImg['owidth']=animator.width;
			bgImg['oheight']=animator.height;
			//判断是否指定绘画位置
			if(container && container.attrs) {
				container.add(bgImg).add(frameImg);
			} else {
				this.mainLayer.add(bgImg).add(frameImg).draw();
			}
		}
		let indexOf=this.stage.imgZIndexCache.indexOf(bgCfg.id);
		if(indexOf> -1) {
			//静态图
			this.stage.imgZIndexCache.splice(indexOf, 1);
		}
		//作为最后加载元素的处理
		if(!container || (typeof container.offsetX==='number' && typeof container.offsetY==='number')) {
			//加入layerTree
			this.addShapeToLayerTree(bgImg);
			this.selectShape(bgImg);
		} else {
			//加入group
			this.addShapeToLayerTree(bgImg, container);
			this._refreshZIndex();
		}
		//动画函数
		animator.onDrawFrame=this._onDrawAnimFrame;
		//启动动画播放
		animator.animateInCanvas(null, false, frameImg, bgImg);
		//新点位加入缓存
		this.addPointToStatusMap(bgImg, bgImg.getAttr('point'));
		return bgImg;
	},
	_onDrawAnimFrame:function(frame, content, i, bg) {
		if(bg.getLayer()) {
			if(i) {
				//动画帧要跟随背景帧改变位置
				frame.image(content.buffer).width(content.width).height(content.height).offsetX(-content.x).offsetY(-content.y).rotation(bg.rotation()).x(bg.x()).y(bg.y()).draw();
			} else {
				bg.draw();
			}
		}
	},
	stopAnimation:function(shape) {//停止动画播放
		if(shape.animator) {
			shape.animator.stop();
			//如果选择的不是背景帧，则返回背景帧
			return shape.bg || shape;
		} else {
			return shape;
		}
	},

	clear:function() {
		//清理stage的所有元素
		let i=this.mainLayer.children.length;
		if(i>2) {
			while(i--) {
				let shape=this.mainLayer.children[i];
				if(shape.getClassName()!=='Transformer') {
					if(shape.ag) {
						shape.animator.stop();
					}
					shape.destroy();
				}
			}
			if(this.anchorLayer) {
				i=this.anchorLayer.children.length;
				if(i) {
					while(i--) {
						this.anchorLayer.children[i].destroy();
					}
					this.anchorLayer.draw();
				}
			}
		}
		if(this.shape_tree) {
			this.shape_tree.clearAll();
			this.shape_tree.refresh();
		}
		if(!isl.isEmpty(this.stage.points)) {
			for(let tagString in this.stage.points) {
				let pointInfos=this.stage.points[tagString];
				pointInfos.shapes.length=0;
				delete pointInfos.shapes;
				delete pointInfos.lastValueTime;
				delete pointInfos.lastStatus;
				delete pointInfos.tooltip;
				delete this.stage.points[tagString];
			}
		}
	}, //-------------------------------------------------------
	restoreStage:function(baseInfo, cfg, vss) {
		isl.showProgress();
		//清理stage的所有元素
		this.clear();
		this.vss=vss;
		if(baseInfo) {//编辑模式
			this.stage.id(baseInfo.id).name(baseInfo.name).width(baseInfo.width).height(baseInfo.height).setAttr('color', cfg.color).setAttr('bg', cfg.bg).setAttr('zoom', (baseInfo.zoom || 0));
			baseInfo['bg']=cfg.bg || null;
			baseInfo['color']=cfg.color || null;
			baseInfo['data']=cfg.data || null;
			this.$restoreShapes(JSON.parse(cfg.data), this.mainLayer, {});
			if(cfg.bg) {
				this.stage.container().firstChild.style.backgroundImage='url(/uif/'+cfg.icon+')';
			} else {
				this.stage.container().firstChild.style.backgroundImage='url(/uif/img/canvas_bg.png)';
			}
			this.selectShape(this.stage);
			// 加载组态图配置信息
			this.property_form.setValues(this.stage.attrs);
			this.define('width', this.stage.width());
			this.define('height', this.stage.height());
			this.resize();
		} else {//展示模式(stage已经在前一个步骤绘制，只需要处理画布内容)
			if(cfg.id) {
				this.stage.id(cfg.id);
			}
			//屏幕显示范围大小
			let layoutWidth=this.config.width || (this.$view.offsetWidth), layoutHeight=this.config.height || (this.$view.offsetHeight);
			this.stage.width(layoutWidth).height(layoutHeight);
			//组态图原始大小
			this.mainLayer['cfgWidth']=cfg.width;
			this.mainLayer['cfgHeight']=cfg.height;

			this.$restoreShapes(JSON.parse(cfg.data), this.mainLayer, {}, true);
			if(cfg.bg) {
				this.stage.container().firstChild.style.backgroundImage='url(/uif/'+cfg.bg+')';
			} else {
				this.stage.container().firstChild.style.backgroundImage='url(/uif/user/alpha.png)';
			}
			this.mainLayer.resetMaxMove();
			if(cfg.zoom) {
				this.mainLayer.scaleX(this.mainLayer.minScale).scaleY(this.mainLayer.minScale);
			}
		}
		this.stage.container().firstChild.style.backgroundColor=cfg.color || '#FFF';
		this._refreshZIndex();
	},
	$restoreShapes:function(shapes, container, gifCaches, showMode) {
		while(shapes.length) {
			let cfg=shapes.shift(), id=cfg.attrs.id, _pos=id.indexOf('_');
			if(_pos>0) {
				let num=parseInt(id.substring(id.indexOf('_')+1));
				if(num>=this.idCreator) {
					this.idCreator=num+1;
				}
			}
			if(cfg.className==='Group') {
				this.stage.zIndexCache.push(id);
				this.$restoreShapes(cfg.children, this.createShape(cfg, this, container, showMode), gifCaches, showMode);
			} else {
				if(cfg.className==='Image') {
					if(id.startWith('Frame_GIF_')) {
						id=id.substring(6);
						if(gifCaches[id]) {
							gifCaches[id]['ag']=cfg.attrs;
							cfg=gifCaches[id];
							delete gifCaches[id];
						} else {
							gifCaches[id]=cfg.attrs;
							continue;
						}
					} else if(id.startWith('GIF_')) {
						if(gifCaches[id]) {
							cfg['ag']=gifCaches[id];
							delete gifCaches[id];
						} else {
							gifCaches[id]=cfg;
							continue;
						}
					} else {
						this.stage.zIndexCache.push(id);
					}
					this.stage.imgZIndexCache.push(id);
				} else {
					this.stage.zIndexCache.push(id);
				}
				this.createShape(cfg, this, container, showMode);
			}
		}
	},
	addShapeToLayerTree:function(shape, container) {
		if(this.shape_tree) {
			if(container && container.id) {
				this.shape_tree.add(webix.extend({shape:shape}, shape.attrs), 0, container.id());//顺序添加group
			} else {
				this.shape_tree.add(webix.extend({shape:shape}, shape.attrs));//倒序添加
			}
		}
	},
	_refreshZIndex:function() {
		if(!this.stage.imgZIndexCache.length) {
			//递归所有对象处理zIndex
			for(let i=0; i<this.stage.zIndexCache.length; i++) {
				let shape=this.mainLayer.findOne('#'+this.stage.zIndexCache[i]);
				if(shape) {
					shape.setZIndex(shape.getAttr('lv') || 0);
				}
			}
			if(this.shape_tree) {
				this.shape_tree.refresh();
			}
			this.mainLayer.draw();
			this.stage['isReady']=true;
			isl.hideProgress();
		}
	},

	//动态数据处理
	drawStatus:function(userCfgs, jdata) {
		for(let tagString in jdata) {
			let pointInfos=this.stage.points[tagString];
			if(pointInfos) {
				let pointData=jdata[tagString];
				if(!pointInfos.lastValueTime || this.rubberLayer || pointInfos.lastValueTime<pointData.time) {
					let status=pointData.status, vs=this.vss?this.vss[status]:null, value=pointData.value, statusChanged=pointInfos.lastStatus!==status;
					if(jdata.kind===1) {
						value=isl.scaledNumber(value, pointInfos.scale);
					}
					if(webix.isUndefined(value)) {
						value='';
					} else {
						value+='';
					}
					pointInfos['lastValueTime']=pointData.time;
					if(statusChanged) {
						pointInfos['lastStatus']=status;
					}
					pointInfos['tooltip']=new Date(pointData.time).format(isl.locale.timeFormats[7]+'\n'+isl.locale.timeFormats[8]);
					if(vs) {
						pointInfos.tooltip+='\n'+vs.value+' = '+value;
					} else {
						pointInfos.tooltip+='\n'+value;
					}
					pointInfos.shapes.forEach(shape => {
						let className=shape.getClassName();
						switch(className) {
						case 'Image':
							let showVS=shape.getAttr('showVS'), hideVS=shape.getAttr('hideVS'), stopVS=shape.getAttr('stopVS'), matchVS=status===showVS || status===hideVS || status===stopVS;
							if(matchVS) {
								switch(status) {
								case showVS:
									shape.show();
									if(shape.ag && statusChanged) {
										shape.animator.start();
										shape.ag.show();
									}
									break;
								case hideVS:
									if(shape.ag && statusChanged) {
										shape.animator.stop();
										shape.ag.hide();
									}
									shape.hide();
									break;
								case stopVS:
									if(shape.ag) {
										if(statusChanged) {
											shape.animator.stop();
											shape.ag.hide();
										}
									}
									shape.show();
									break;
								}
							} else {
								if(stopVS && shape.ag) {
									if(statusChanged) {
										shape.animator.stop();
										shape.ag.hide();
									}
									shape.show();
								} else {
									if(shape.ag && statusChanged) {
										shape.ag.hide();
										shape.animator.stop();
									}
									shape.hide();
								}
							}
							break;
						case 'Text':
							if(!shape.orgAttrs) {
								shape['orgAttrs']={
									fill:shape.fill(),
									text:shape.getAttr('text')
								};
							}
							if(vs) {
								shape.fill(vs.color);
								let status=shape.getAttr('status');
								if(typeof status==='string') {
									status=parseInt(status);
								}
								if(status) {
									shape.text(vs.value);
								} else {
									shape.text(value);
								}
							} else {
								if(shape.orgAttrs.fill) {
									shape.fill(shape.orgAttrs.fill);
								}
								shape.text(value);
							}
							break;
						default:
							if(!shape.orgAttrs) {
								shape['orgAttrs']={};
								shape.orgAttrs['stroke']=shape.stroke();
								shape.orgAttrs['strokeWidth']=shape.getAttr('strokeWidth');
								shape.orgAttrs['text']=shape.getAttr('text');
								shape.orgAttrs['fill']=shape.fill();
							}
							if(vs) {
								shape.fill(vs.bgColor);
							} else {
								shape.fill(shape.orgAttrs.fill || shape.orgAttrs.stroke || shape.fill());
							}
							break;
						}
						shape.tooltip=pointInfos.tooltip;
					});
				}
			}
		}
		this.mainLayer.batchDraw();
	}
}, webix.ui.view);