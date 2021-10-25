'use strict';
(function() {
	isl['point']={
		_statusGrid:null,
		alarms:[],
		getProtocol:function(k, p) {
			if(_fab.type!==k && p) {
				if(p.id!==k && p.subp) {
					p=isl.point.getProtocol(k, p.subp);
				}
			}
			return p;
		},
		initDetailData:function(point) {
			isl.point._refGrid=$$('point_ref_grid');
			isl.point._statusGrid=$$('point_status_grid');
			if(point && isl.point._statusGrid.point!==point) {
				isl.point._statusGrid['point']=point;
				isl.point._pointDetailLoad();
				isl.point._reloadPointRefGrid();
			}
		},
		_pointDetailLoad:function() {
			let grid=isl.point._statusGrid;
			grid.clearAll();
			isl.get(isl.app('io')+'/Device/pointProperties/'+(grid.point.id || grid.point), function(jdata) {
				if(jdata) {
					let data=[];
					for(let k in jdata) {
						data.push({
							id:k,
							value:jdata[k]
						});
					}
					grid.parse(data);
				} else {
					isl._renderPaging(grid, 0);
				}
			});
		},
		_reloadPointRefGrid:function() {
			let refGrid = isl.point._refGrid, statusGrid=isl.point._statusGrid;
			refGrid.clearAll();
			if((statusGrid.point.id && statusGrid.point.variable) || statusGrid.point) {
				isl.get(isl.app('io')+'/Device/pointRef/'+(statusGrid.point.id || statusGrid.point), function(jdata) {
					if(jdata) {
						refGrid.parse(jdata);
					} else {
						isl._renderPaging(refGrid, 0);
					}
				});
			} else {
				isl._renderPaging(refGrid, 0);
			}
		},
		pointRefGrid:{
			minHeight:100,
			index:false,
			id:'point_ref_grid',
			view:'datatable',
			sort:'value',
			sortAs:'string',
			columns:[{
				id:'value',
				fillspace:true,
				header:isl.locale.app.point.ref
			}]
		},
		pointStatusGrid:{
			id:'point_status_grid',
			view:'datatable',
			scroll:'xy',
			index:false,
			sort:'id',
			sortAs:'string',
			minWidth:370,
			excel:true,
			columns:[{
				id:'id',
				minWidth:150,
				header:isl.locale.app.point.property
			}, {
				id:'value',
				header:isl.locale.app.point.propertyValue
			}],
			on:{
				onAfterLoad:function() {
					let data=this.data.pull;
					if(!isl.isEmpty(data)) {
						let maxWidth=0;
						for(let k in data) {
							let newWidth=isl.getLabelWidth(data[k].value);
							if(maxWidth<newWidth) {
								maxWidth=newWidth;
							}
						}
						if(maxWidth>this.$width-167) {
							this.setColumnWidth('value', maxWidth+20);
						} else {
							this.setColumnWidth('value', this.$width-167);
						}
					}
				}
			}
		},
		_point_set_win:null,
		showPointSetWin:function(channel, obj, height, margin) {
			let icon=channel.pointSetIcon(obj);
			if(icon) {
				if(!isl.point._point_set_win) {//点位控制window
					isl.point._point_set_win=webix.ui(isl.window({
						id:'point_set_layout',
						icon:'mdi mdi-hand',
						title:'-',
						body:{
							id:'point_set_views',
							view:'multiview',
							fitHeight:false,
							borderless:true,
							animate:false,
							keepViews:true,
							cells:[{id:'-s'}],
							buttons:[{
								id:'point_set_timeout',
								view:'text',
								width:130,
								max:60,
								min:5,
								type:'number',
								value:5,
								label:isl.locale.app.point.timeout
							}, {}, {
								id:'point_set_bt',
								view:'button',
								type:'icon',
								disabled:true,
								label:isl.locale.button.override,
								icon:'mdi mdi-pencil',
								click:channel.pointSet
							}]
						}
					}));
				}
				channel.pointSetInit(obj, height, margin);
				$$('point_set_layout_title').setValue(obj.name+'('+obj.variable+') - '+obj.identity);
				$$('point_set_layout_icon').setValue(icon);
				let setBt=$$('point_set_bt');
				setBt.define('icon', icon);
				setBt.refresh();
				setBt.disable();
				isl.point._point_set_win.show();
			} else {
				isl.error(isl.locale.failure.privilege);
			}
		},
		buildArraySetElements:function(element, viewId, height) {
			delete element.name;
			element.id=viewId+'_iv';
			element['on']={
				onChange:function(newValue) {
					let tree=$$(viewId+'_vt'), node=tree.getSelectedItem();
					if(node) {
						let value=newValue;
						if(node._t==='number') {
							value=parseFloat(newValue);
						} else if(this.config.pattern) {
							value=this.getText();
						} else if(webix.isDate(value)) {
							value=value.format(isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[8]);
						} else if(node._t==='string') {
							value=value.replace(/</g, '&lt;');
						}
						if(node.value!==value) {
							node.value=value;
							tree.updateItem(node.id, node);
							$$('point_set_bt').enable();
						}
					}
					$$(viewId+'_add').enable();
				}
			};
			return [{
				view:'text',
				name:'value',
				hidden:true,
				on:{
					onChange:function(v) {
						if(v && typeof v==='string') {
							try {
								v=JSON.parse(v);
							} catch(e) {
								v=null;
							}
						}
						let tree=$$(viewId+'_vt');
						if(v) {
							tree.parse(isl.point._jsonToTreeData(v));
						} else {
							tree.clearAll();
						}
					}
				}
			}, isl.panels({
				id:viewId+'_vt',
				view:'tree',
				margin:0,
				filter:false,
				height:height,
				borderless:true,
				select:true,
				on:{
					onSelectChange:function() {
						let newData=this.getSelectedItem();
						if(newData) {
							let valueInput=$$(viewId+'_iv'), value=newData.value;
							if(value || value===0) {
								if(valueInput.config.view==='text') {
									if(valueInput.config.type) {
										if(valueInput.config.step===1) {
											value=parseInt(value);
										} else {
											value=parseFloat(value);
										}
									} else if(typeof value==='string') {
										value=value.replace(/&lt;/g, '<');
									}
								}
								$$(viewId+'_iv').setValue(value);
							}
							$$(viewId+'_del').enable();
							$$(viewId+'_add').enable();
						}
					}
				}
			}), {
				cols:[{
					id:viewId+'_del',
					view:'icon',
					tooltip:isl.locale.button.del,
					icon:'mdi mdi-timeline-minus-outline',
					disabled:true,
					click:function() {
						let tree=$$(viewId+'_vt');
						tree.remove(tree.getSelectedId());
						$$('point_set_bt').enable();
					}
				}, element, {
					id:viewId+'_add',
					view:'icon',
					tooltip:isl.locale.button.add,
					icon:'mdi mdi-timeline-plus-outline',
					disabled:true,
					click:function() {
						let tree=$$(viewId+'_vt'), valueInput=$$(viewId+'_iv'), value=valueInput.getValue(), selectedItem=tree.getSelectedItem(), parentId=selectedItem?selectedItem.$parent:0;
						if(value) {
							let last=tree.getItem(tree.getLastId());
							if(valueInput.config.view==='text') {
								if(valueInput.config.type) {
									if(valueInput.config.step===1) {
										value=parseInt(value);
									} else {
										value=parseFloat(value);
									}
								} else {
									value=value.replace(/</g, '&lt;');
								}
							}
							value={
								id:webix.uid(),
								value:value
							};
							if(parentId) {
								let parent=tree.getItem(parentId);
								value['identity']=parent.$count+1;
								tree.add(value, -1, parent.id);
							} else {
								value['identity']=last?(last.identity+1):1;
								tree.add(value, -1, 0);
							}
							$$('point_set_bt').enable();
						}
					}
				}]
			}];
		},
		pointSetFormInit:function(viewId, max, min, obj) {
			let form=$$(viewId), elements=form.elements, tree=$$(viewId+'_vt'), p_value=elements.value;
			//如果是array需要更新相关的组件状态
			if(tree) {
				p_value.setValue(null);
				tree.unselect();
				$$(viewId+'_iv').setValue(null);
				$$(viewId+'_del').disable();
				$$(viewId+'_add').disable();
			} else {
				//如果是数字类型，要判断一下最大最小值的边界是否需要改变
				if(p_value && (p_value.config.max!==max || p_value.config.min!==min)) {
					p_value.define('min', min);
					p_value.define('max', max);
					p_value.refresh();
				}
				for(let i=0; i<elements; i++) {
					elements[i].setValue(null);
				}
			}
			//设置点位当前的值
			form.setValues({
				id:obj.id,
				value:obj.value,
				param:8
			});
		},
		pointSetIcon:function(obj) {
			//虚拟点或者非累加值的物理点
			if(obj && obj.accessLevel>1 && obj.variable && ((!obj.cls && obj.kind) || obj.cls===1)) {
				return 'mdi mdi-hand';
			}
		},
		pointSet:function() {
			let viewId=$$('point_set_views').getValue(), o=isl.getFormValues(viewId), timeout=$$('point_set_timeout').getValue();
			if(o) {
				let id=o.id+'';
				delete o.id;
				let value=o.value;
				delete o.value;
				let vt=$$(viewId+'_vt');
				if(vt) {//数组值
					let data=isl.point._treeDataToJson(0, vt.data);
					if(data) {
						try {
							o[id]=JSON.stringify(data);
						} catch(e) {
							console.log(e);
						}
					} else {
						o[id]='';
					}
				} else {
					o[id]=value;
				}
				isl.patch(isl.app('io')+'/Device/point/'+((timeout?timeout:5)*1000), o, function(jdata, param) {
					let pg=$$('point_grid'), obj=pg.getSelectedItem(), objValue=param[obj.id];
					delete jdata[obj.id];//错误信息
					jdata['value']=webix.isUndefined(objValue.value)?objValue:objValue.value;
					jdata['writing']=true;
					pg.updateItem(obj.id, webix.extend(obj, jdata, true), 'false');
					return true;
				}, null, null, this, 'point_set_layout');
			}
		},
		_jsonToTreeData:function(data) {
			let result=null;
			if(data) {
				result=[];
				if(Array.isArray(data)) {
					for(let i=0; i<data.length; i++) {
						let value=data[i];
						if(Array.isArray(value)) {
							result.push({
								id:webix.uid(),
								identity:i+1,
								data:isl.point._jsonToTreeData(value)
							});
						} else {
							let valueType=typeof value;
							if(valueType==='boolean') {
								result.push({
									id:webix.uid(),
									identity:i+1,
									value:value+''
								});
								// } else if(valueType === "object") {
								// 	result.push({id:webix.uid(), identity:i+1, data:isl.point._jsonToTreeData(value)});
							} else {
								if(valueType==='string') {
									value=value.replace(/</g, '&lt;');
								}
								result.push({
									id:webix.uid(),
									identity:i+1,
									value:value
								});
							}
						}
					}
				}
			}
			return result;
		},
		_treeDataToJson:function(parentId, data) {
			let parent=null;
			data.eachChild(parentId, function(node) {
				let identity=node.identity;
				if(typeof identity==='number') {
					if(!parent) {
						parent=[];
					}
					identity--;
				} else {
					if(!parent) {
						parent={};
					}
				}
				if(node._t==='array' || node._t==='object') {
					let subValues=isl.point._treeDataToJson(node.id, data);
					if(!subValues) {
						if(node._t==='array') {
							subValues=[];
						} else {
							subValues={};
						}
					}
					parent.push(subValues);
				} else {
					if(node._t==='boolean') {
						parent[node.identity]=node.value && 'false'!==node.value;
					} else {
						if(node._t==='string') {
							parent.push(node.value.replace(/&lt;/g, '<'));
						} else {
							parent.push(node.value);
						}
					}
				}
			});
			return parent;
		},
		singleSelectTemplate:function(obj, common) {
			if(obj.icon) {//tag
				return isl._defaultTemplate(obj, common);
			} else {//point
				return common.icon(obj, common)+obj.variable+'('+isl.getOptionValue(isl.locale.app.point.options.accessLevel, obj.accessLevel)+')<span style="color: #C8C8C8;">'+obj.name+'</span>';
			}

		},
		getSelectedPoints:function(id, validate) {
			let tree=$$(id) || $$(id+'_point_tree'), unique;
			if(tree) {
				let ids=tree.getChecked();
				if(ids) {
					let i=ids.length, point;
					while(i--) {
						if(!unique) {
							unique={};
						}
						if(!unique[ids[i]]) {
							point=tree.getItem(ids[i]);
							if(!validate || point[validate]) {
								unique[ids[i]]=point;
							}
						}
					}
				}
			}
			return unique?Object.values(unique):null;
		},

		//------------------数据导出文件--------------------
		addPointData:function(columns, w, fmt, dataArray, key, header, tHeader, values, durationId) {
			let vow=Math.max(isl.getLabelWidth(header), 140);
			if(!durationId) {
				//添加时间列
				columns.push({
					id:key+'_time',
					header:tHeader,
					ow:140,
					width:140*w
				});
			}
			//添加数据列
			columns.push({
				id:durationId?(key+'|'+durationId):key,
				header:header,
				ow:vow,
				width:vow*w
			});
			if(values) {
				for(let i=0, l=values.length; i<l; i++) {
					let row=dataArray[i], data=values[i];
					if(data && data[0]) {
						if(!row) {
							row={};
							dataArray[i]=row;
						}
						if(durationId) {
							row[key+'_duration_time']=new Date(data[0]).format(fmt);//该行对应点位的时间列数据
						} else {
							row[key+'_time']=new Date(data[0]).format(fmt);//该行对应点位的时间列数据
						}
						row[durationId?(key+'|'+durationId):key]=isNaN(data[1])?null:data[1];//该行对应点位的数据列数据
					}
				}
			}
		},
		addDataToGrid:function(columns, w, fmt, dataArray, vss, data, cpInfo) {
			if(data) {
				for(let key in data) {
					let pointData=data[key], tHeader=cpInfo || '';
					if(pointData.kind) {
						fmt=isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[8];
					}
					isl.point.addPointData(columns, w, fmt, dataArray, key+tHeader, pointData.name, tHeader, pointData.data);
					if(pointData.duration) {
						//添加时间列
						columns.push({
							id:key+'_duration_time',
							header:tHeader,
							ow:140,
							width:140*w
						});
						//添加时长列
						for(let dId in pointData.duration) {
							isl.point.addPointData(columns, w, fmt, dataArray, key+tHeader, vss[dId].label, tHeader, pointData.duration[dId], dId);
						}
					}
				}
			}
		},
		buildExportFileName:function(titleTime, exportFileName, hour, minute) {
			if(!titleTime) {
				titleTime=new Date();
			}
			let fileName=exportFileName+' = '+titleTime.replace(':', '_');
			if(hour && hour!==24) {
				fileName+=' '+hour;
				if(minute && minute!==60) {
					fileName+='_'+minute;
				}
			}
			fileName.replace(/.[<>:"/\\|?*]/g, '_');
			return fileName;
		},
		buildExportData:function(qData, w) {//根据请求的趋势数据，构建导出数据，参数是column字体宽度倍率
			let grid=$$('output_trenddata_grid');
			if(grid && qData) {
				let columns=grid.config.columns;
				if(!qData.initExport) {
					//清空之前的column
					columns.splice(0, columns.length);
					let dataArray=[];
					for(let k in qData) {
						let data=qData[k], points=data.points, comparison=data.comparison, fmt=data.fmt;
						//只输出所有原始数据（点位/时长）
						isl.point.addDataToGrid(columns, w, fmt, dataArray, data.vss, points, comparison?comparison.currentName:null);
						if(comparison) {
							comparison.forEach(cp => {
								isl.point.addDataToGrid(columns, w, fmt, dataArray, data.vss, cp.points, cp.name);
							});
						}
					}
					qData['initExport']=true;
					grid.clearAll();
					grid.refreshColumns();
					grid.parse(dataArray);
				} else {//如果当前数据导出过，则不需要重新构建，只需要刷新column结构
					let len=grid.config.columns.length;
					while(len--) {
						columns[len].width=columns[len].ow*w;
					}
					grid.refreshColumns();
				}
				return grid.count();
			}
			return false;
		}
	};
})();