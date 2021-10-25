'use strict';
let Portlet={
	new:function(id, portlets_parent_viewId, exportFileName) {//'id' must be a String
		let _private={
			pointTags:[],
			userCfg:{},
			qData:null
		};
		let instance={
			exportFileName:exportFileName,
			eventBus:null,
			init:function() {
				if(typeof EventBus!=='undefined') {
					//注册socketJs
					instance.eventBus=new EventBus(isl.app('io')+'/portlet/ws/', {
						vertxbus_ping_interval:8000
					});
					instance.eventBus.enableReconnect(true);
					instance.eventBus.onopen=function() {
						instance.eventBus.registerHandler(id, function(err, msg) {
							if(typeof msg.body==='string') {
								let jdata=JSON.parse(msg.body);
								instance.rt_charts.forEach(chart => {
									chart.drawStatus(_private.userCfg, jdata);
								});
								instance.graphics.forEach(graphic => {
									graphic.drawStatus(_private.userCfg, jdata);
								});
							}
						});
					};
				}
			},
			startEventBusData:function() {
				if(instance.eventBus) {
					if(instance.rt_charts.length || (instance.graphics.length && _private.pointTags.length)) {
						if(instance.eventBus.state===EventBus.OPEN) {
							//通知后台更新的数据标签
							instance.eventBus.send(id, {
								pointTags:_private.pointTags
							});
						} else {
							isl.error(isl.locale.failure.sockjs);
							return true;
						}
					} else {
						instance.stopEventBusData();
					}
				}
			},
			stopEventBusData:function() {
				if(instance.eventBus && instance.eventBus.state===EventBus.OPEN) {
					//isl.showProgress();
					//通知后台注销websocket通知
					instance.eventBus.send(id);
				}
			},
			clear:function() {//清理所有portlet的内容view
				while(instance.trend_charts.length) {
					instance.trend_charts.pop().destructor();
				}
				while(instance.rt_charts.length) {
					instance.rt_charts.pop().destructor();
				}
				while(instance.graphics.length) {
					instance.graphics.pop().destructor();
				}
			},
			trend_charts:[],
			rt_charts:[],
			graphics:[],
			vss:{},
			hasTrendView:false,
			hasRTView:false,
			refresh:function() {//更新历史缓存的各个view
				let pv=$$(portlets_parent_viewId);
				if(pv) {
					instance.trend_charts.length=0;
					instance.rt_charts.length=0;
					instance.graphics.length=0;

					_private.pointTags.length=0;
					instance.hasTrendView=false;
					instance.hasRTView=false;
					//遍历所有echart
					pv.queryView('echart', 'all').map(view => {
						let chart=view.chart;
						if(chart.type<10) {//必须是“历史图”
							instance.trend_charts.push(view);
							instance.hasTrendView=true;
						} else {
							let rgIdx=chart.rangeTags?chart.rangeTags.length:0;
							while(rgIdx--) {
								let gpIdx=chart.groupTags?chart.groupTags.length:0;
								while(gpIdx--) {
									let dtIdx=chart.dataTags?chart.dataTags.length:0;
									let rfIdx=chart.refTags?chart.refTags.length:0;
									while(dtIdx--) {
										let tagString=chart.rangeTags[rgIdx].id+'.'+chart.groupTags[gpIdx].id+'.'+chart.dataTags[dtIdx].id;
										if(_private.pointTags.indexOf(tagString)=== -1) {
											_private.pointTags.push(tagString);
										}
									}
									while(rfIdx--) {
										let tagString=chart.rangeTags[rgIdx].id+'.'+chart.groupTags[gpIdx].id+'.'+chart.refTags[rfIdx].id;
										if(_private.pointTags.indexOf(tagString)=== -1) {
											_private.pointTags.push(tagString);
										}
									}
									if(chart.dataTag) {
										let tagString=chart.rangeTags[rgIdx].id+'.'+chart.groupTags[gpIdx].id+'.'+chart.dataTag.id;
										if(_private.pointTags.indexOf(tagString)=== -1) {
											_private.pointTags.push(tagString);
										}
									}
									if(chart.refTag) {
										let tagString=chart.rangeTags[rgIdx].id+'.'+chart.groupTags[gpIdx].id+'.'+chart.refTag.id;
										if(_private.pointTags.indexOf(tagString)=== -1) {
											_private.pointTags.push(tagString);
										}
									}
								}
							}
							instance.rt_charts.push(view);
							instance.hasRTView=true;
						}
					});
					//遍历所有graphic
					pv.queryView('konva', 'all').map(view => {
						instance.graphics.push(view);
						if(!isl.isEmpty(view.stage.points)) {
							instance.hasRTView=true;
							Array.addElements(Object.keys(view.stage.points), _private.pointTags);
						}
					});
				}
			},
			loadData:function() {//只有历史chart能主动读取趋势数据
				if(instance.trend_charts && instance.trend_charts.length) {
					let cIds=null;
					instance.trend_charts.forEach(portlet_view => {
						if(!cIds) {
							cIds=[];
						}
						cIds.push(portlet_view.chart.id);
					});
					if(cIds) {
						isl.post(isl.app('ui')+'/log/Data/trend', webix.extend({
							cIds:cIds
						}, _private.userCfg), function(jdata) {
							//console.log(jdata);
							_private.qData=jdata;
							instance.trend_charts.forEach(portlet_view => {
								portlet_view.drawTrendData(_private.userCfg, jdata);
							});
						});
					}
				}
			},
			buildChart:function(chart, cfg, tagMap) {
				isl.objArraySort(cfg.rangeTags, 'order', true);
				for(let i=0, l=cfg.rangeTags.length; i<l; i++) {
					cfg.rangeTags[i]=tagMap[cfg.rangeTags[i]];
				}
				isl.objArraySort(cfg.groupTags, 'order', true);
				for(let i=0, l=cfg.groupTags.length; i<l; i++) {
					cfg.groupTags[i]=tagMap[cfg.groupTags[i]];
				}

				let sorted=Object.keys(cfg.dataTags).sort(), dataTags=[], refTags=[];
				for(let i=0, l=sorted.length; i<l; i++) {
					dataTags[i]=tagMap[sorted[i]];
				}
				sorted=Object.keys(cfg.refTags).sort();
				for(let i=0, l=sorted.length; i<l; i++) {
					refTags[i]=tagMap[sorted[i]];
				}
				chart.buildChart(cfg, cfg.rangeTags, cfg.groupTags, dataTags, refTags);
			},

			buildCells:function(parentId, cells, defaultCfg, charts, graphics) {
				let og=1;
				if(cells) {
					for(let i=0, l=cells.length; i<l; i++) {
						let p=cells[i];
						if(p.id) {
							webix.extend(p, defaultCfg);
							if(p.gravity) {
								p.gravity=p.gravity/100;
							}
							if(i===0 && p.og) {
								og=p.og/100;
							}
							if(defaultCfg.view==='portlet') {
								switch(p.cType) {
								case 1:
									graphics[p.id]=p.cId;
									p['body']={
										id:p.id+'_g',
										view:'konva'
									};
									break;
								case 2:
								case 3:
									charts[p.id]=p.cId;
									p['body']={
										id:p.id+'_c',
										view:'echart'
									};
									break;
								case 4:
									p['body']={
										view:'iframe',
										src:p.cSrc
									};
									break;
								default:
									p['body']={template:p.id};
									break;
								}
							} else {
								switch(p.cType) {
								case 1:
									graphics[p.id]=p.cId;
									p['view']='konva';
									break;
								case 2:
								case 3:
									charts[p.id]=p.cId;
									p['view']='echart';
									if(p.width) {
										p['minWidth']=p.width;
										delete p.width;
									}
									if(p.height) {
										p['minHeight']=p.height;
										delete p.height;
									}
									break;
								case 4:
									p['src']=p.cSrc;
									p['view']='iframe';
									if(p.width) {
										p['minWidth']=p.width;
										delete p.width;
									}
									if(p.height) {
										p['minHeight']=p.height;
										delete p.height;
									}
									break;
								}
								delete p.cId;
								delete p.cType;
								delete p.cSrc;
							}
						} else {
							if(defaultCfg.view==='portlet') {
								p['type']='wide';
							} else {
								p['type']='clean';
								p['responsive']=parentId;
								p['id']='rs'+webix.uid();
							}
							p['gravity']=instance.buildCells(p.id, p.rows || p.cols, defaultCfg, charts, graphics);
						}
					}
				}
				return og;
			},
			settingValue:function(isSetting) {
				if(isSetting) {
					instance.setNewDatetime=isSetting;
				} else {
					delete instance.setNewDatetime;
				}
			}
		};
		//是否包含toolbar
		if(exportFileName) {
			let onCbxChange={//checkbox属性改变时的重绘函数
					onChange:function(v) {
						//根据用户条件,以上次读取的数据重新绘制图表
						_private.userCfg[this.config.id]=v;
						if(_private.qData) {
							instance.trend_charts.forEach(portlet_view => {
								//必须有过查询数据的“历史图”，才能重绘
								portlet_view.drawTrendData(_private.userCfg, _private.qData);
							});
						}
					}
				}, //------------------时间条件设置管理函数--------------------
				setNewHourTime=function(tcd, tcd_h, h, date, timeInc) {
					h+=timeInc;
					tcd.disable();
					if(h===24) {
						h=0;
						date.setDate(date.getDate()+timeInc);
						tcd.setValue(date);
					} else if(h=== -1) {
						h=23;
						date.setDate(date.getDate()+timeInc);
						tcd.setValue(date);
					}
					tcd.enable();
					tcd_h.setValue(h);//重新加载数据
				}, setNewDatetime=function() {
					instance.settingValue(true);
					let dataType=$$('dataType').getValue(), timeInc=this.config.timeInc, tcd=$$('datetime'), timeSpan=$$('timeSpan').getValue(), date=new Date(tcd.data.value), tcd_h=$$('hour'), h=tcd_h.getValue() || 0;
					if(!timeSpan) {
						timeSpan=0;
					}
					if(!dataType && dataType!==0) {
						for(let i=0; i<instance.trend_charts.length; i++) {
							let chart=instance.trend_charts[i].chart, chartTS=chart.timeSpan;
							if(chartTS===3) {
								chartTS=0.5;
							}
							if(timeSpan>chartTS) {
								timeSpan=chartTS;
							}
						}
						if(timeSpan===0.5) {
							timeSpan=3;
						}
					}
					if(tcd_h.getValue()===24) {//天的时间变化
						if(timeSpan===2) {
							date.setFullYear(date.getFullYear()+timeInc);
						} else if(timeSpan===1) {
							date.setMonth(date.getMonth()+timeInc);
						} else if(timeSpan=== -1) {
							date.setHours(date.getHours()+timeInc);
						} else {
							date.setDate(date.getDate()+timeInc*(timeSpan===3?7:1));
						}
						tcd.setValue(date);//重新加载数据
					} else {
						let tcd_m=$$('minute'), m=tcd_m.getValue() || 0;
						if(m===60) {//小时的时间变化
							setNewHourTime(tcd, tcd_h, h, date, timeInc);
						} else {//分钟的时间变化
							m+=timeInc;
							tcd_h.disable();
							if(m===60) {
								m=0;
								setNewHourTime(tcd, tcd_h, h, date, timeInc);
							} else if(m=== -1) {
								m=59;
								setNewHourTime(tcd, tcd_h, h, date, timeInc);
							}
							tcd_h.enable();
							tcd_m.setValue(m);//重新加载数据
						}
					}
					instance.loadData();
					instance.settingValue(false);
				};

			instance.toolbar_cfg={
				id:'condition_form',
				view:'form',
				scroll:false,
				fitHeight:false,
				columns:4,
				padding:0,
				margin:0,
				elementsConfig:{
					padding:0,
					margin:0
				},
				elements:[{
					id:'output_trenddata_grid',
					view:'datatable',
					columns:[],
					hidden:true
				}, {
					minWidth:320,
					id:'condition_form_columns1',
					rows:[{
						responsive:'condition_form_columns1',
						cols:[{
							minWidth:245,
							cols:[{
								id:'dataType',
								view:'richselect',
								label:isl.locale.app.menu.dataType,
								options:isl.locale.app.menu.options.dataType,
								defaultValue:0,
								on:onCbxChange
							}, {
								view:'icon',
								width:30,
								tooltip:isl.locale.button.pdf,
								disabled:typeof parent.dsBridge!=='undefined' && parent.dsBridge.hasNativeMethod('takePhoto'),
								icon:'mdi mdi-file-pdf',
								click:function() {
									if(isl.point.buildExportData(_private.qData, 1)) {
										webix.toPDF($$('output_trenddata_grid'), {
											filename:isl.point.buildExportFileName(_private.userCfg.datetime, instance.exportFileName, _private.userCfg.hour, _private.userCfg.minute),
											autowidth:true
										});
									}
								}
							}, {
								view:'icon',
								width:30,
								tooltip:isl.locale.button.excel,
								disabled:typeof parent.dsBridge!=='undefined' && parent.dsBridge.hasNativeMethod('takePhoto'),
								icon:'mdi mdi-file-excel',
								click:function() {
									if(isl.point.buildExportData(_private.qData, 1.3)) {
										webix.toExcel($$('output_trenddata_grid'), {
											filename:isl.point.buildExportFileName(_private.userCfg.datetime, instance.exportFileName, _private.userCfg.hour, _private.userCfg.minute),
											autowidth:true
										});
									}
								}
							}, {
								view:'icon',
								width:30,
								tooltip:isl.locale.button.csv,
								disabled:typeof parent.dsBridge!=='undefined' && parent.dsBridge.hasNativeMethod('takePhoto'),
								icon:'mdi mdi-file-document',
								click:function() {
									if(isl.point.buildExportData(_private.qData, 1)) {
										webix.toCSV($$('output_trenddata_grid'), {
											filename:isl.point.buildExportFileName(_private.userCfg.datetime, instance.exportFileName, _private.userCfg.hour, _private.userCfg.minute),
											autowidth:true
										});
									}
								}
							}]
						}, {
							minWidth:350,
							cols:[{}, {
								id:'minax',
								view:'checkbox',
								labelWidth:isl.getLabelWidth(isl.locale.app.menu.minax+':'),
								label:isl.locale.app.menu.minax,
								on:onCbxChange
							}, {}, {
								id:'avg',
								view:'checkbox',
								label:isl.locale.app.menu.avg,
								on:onCbxChange
							}, {}, {
								id:'area',
								view:'checkbox',
								label:isl.locale.app.menu.area,
								on:onCbxChange
							}, {}, {
								id:'nullItem',
								view:'checkbox',
								label:isl.locale.app.menu.nullItem,
								on:onCbxChange
							}]
						}]
					}]
				}, {
					minWidth:350,
					id:'condition_form_columns2',
					rows:[{
						responsive:'condition_form_columns2',
						cols:[{
							minWidth:360,
							cols:[{
								id:'timeSpan',
								view:'richselect',
								labelWidth:80,
								minWidth:150,
								label:isl.locale.app.menu.timeSpan,
								options:isl.locale.app.menu.options.timeSpan,
								on:{
									onChange:function(v) {//时间范围类型
										_private.userCfg[this.config.id]=v;
										if(v || v===0) {
											let tcdHour=$$('hour'), hour;
											if(tcdHour.parentSet) {
												return;
											}
											if(v>=0) {
												hour=24;
												if(v===0) {
													tcdHour.enable();
												} else {
													tcdHour.disable();
												}
											} else {
												tcdHour.enable();
												hour=new Date().getHours();
											}
											if(tcdHour.getValue()!==hour) {
												tcdHour.setValue(hour);
											} else if(!instance.setNewDatetime) {
												instance.loadData();
											}
										}
									}
								},
								defaultValue:0
							}, {
								view:'icon',
								width:30,
								timeInc:-1,
								icon:'mdi mdi-chevron-double-left',
								tooltip:isl.locale.button.time_backward,
								click:setNewDatetime//(-1);
							}, {
								id:'datetime',
								width:120,
								view:'datepicker',
								stringResult:true,
								timepicker:true,
								format:'%Y-%m-%d',
								value:new Date(),
								on:{
									onChange:function(v) {//具体时间
										if(v || v===0) {
											_private.userCfg[this.config.id]=v.format(isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[8]);
											if(!instance.setNewDatetime) {
												instance.loadData();
											}
										}
									}
								}
							}, {
								view:'icon',
								width:30,
								timeInc:1,
								icon:'mdi mdi-chevron-double-right',
								tooltip:isl.locale.button.time_forward,
								click:setNewDatetime//(1);
							}, {
								view:'icon',
								width:30,
								tooltip:isl.locale.button.compare,
								icon:'mdi mdi-scale-balance',
								click:function() {
									instance.compare_times_win.show();
								}
							}]
						}, {
							minWidth:235,
							cols:[{
								id:'hour',
								view:'slider',
								moveTitle:false,
								min:0,
								max:24,
								value:24,
								disabled:true,
								title:function(obj) {
									return obj.value===24?isl.locale.app.menu.hall:obj.value+isl.locale.app.menu.hour;
								},
								on:{//小时
									onChange:function(v) {
										if(v || v===0) {
											_private.userCfg[this.config.id]=v;
											let tcdMinute=$$('minute'), minute=null;
											if(v===24) {
												tcdMinute.disable();
												minute=60;
												this['parentSet']=true;
												$$('timeSpan').setValue(0);
												delete this.parentSet;
											} else {
												tcdMinute.enable();
												this['parentSet']=true;
												$$('timeSpan').setValue(-1);
												delete this.parentSet;
											}
											if(minute && tcdMinute.getValue()!==minute) {
												tcdMinute.setValue(minute);
											} else if(!instance.setNewDatetime) {
												instance.loadData();
											}
										}
									}
								}
							}, {
								id:'minute',
								view:'slider',
								moveTitle:false,
								min:0,
								max:60,
								disabled:true,
								value:60,
								title:function(obj) {
									return obj.value===60?isl.locale.app.menu.mall:obj.value+isl.locale.app.menu.minute;
								},
								on:{
									onChange:function(v) {
										if(v || v===0) {
											_private.userCfg[this.config.id]=v;
											if(!instance.setNewDatetime) {
												instance.loadData();
											}
										}
									}
								}
							}]
						}]
					}]
				}]
			};

			instance.compare_times_win=webix.ui(isl.window({
				id:'cp_times_win',
				icon:'mdi mdi-scale-balance',
				height:200,
				title:isl.locale.app.menu.compare,
				body:{
					id:'cp_times',
					view:'datatable',
					info:false,
					header:false,
					columns:[{
						id:'cptime',
						type:'datetime',
						fillspace:1
					}, {
						width:35,
						tooltip:isl.locale.button.del,
						'export':false,
						icon:'mdi mdi-trash-can-outline',
						click:function(obj) {
							let o=$$('cp_times');
							o.select(obj.id);
							o.remove(obj.id);
						}
					}]
				},
				buttons:[{
					id:'cp_datetime',
					view:'datepicker',
					timepicker:true,
					stringResult:true,
					format:'%Y-%m-%d %H:%i:%s',
					label:isl.locale.app.menu.newTimeSpan,
					labelWidth:isl.getLabelWidth(isl.locale.app.menu.newTimeSpan)+3,
					value:new Date(),
					on:{
						onChange:function(v) {
							$$('cp_times').add({
								id:webix.uid(),
								cptime:v.getTime()
							});
						}
					}
				}, {
					id:'point_form_win_ok',
					view:'icon',
					width:30,
					tooltip:isl.locale.base.confirm[1],
					icon:'mdi mdi-check',
					click:function() {
						_private.userCfg['compare']=Array.addElements($$('cp_times').data.pull, null, 'cptime');
						instance.loadData();
						$$('cp_times_win').hide();
					}
				}]
			}));
		}
		return instance;
	}
};