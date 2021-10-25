'use strict';
let colors=['#5AB1EF', '#E5CF3D', '#22C3AA', '#DC69AA', '#59678C', '#B6A2DE', '#F5994E', '#7EB00A', '#C05050', '#F9BE00', '#009EA7', '#B5002D', '#2EC7C9', '#FFB980', '#00A73B', '#C14089', '#588DD5', '#D87A80', '#07A2A4', '#A40081', '#8D98B3', '#541B85', '#AACD03', '#6F5553', '#EC6C00', '#0068B6', '#9A7FD1', '#95706D', '#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'], shapes=['circle', 'emptyCircle', 'diamond', 'emptyDiamond', 'polygon', 'emptyPolygon', 'triangle', 'emptyTriangle'], showFalse={show:false}, formatterDate=new Date(), rtLineXAxis=[{
		type:'time',
		splitLine:showFalse,
		axisPointer:{
			label:{
				formatter:function(p) {
					formatterDate.setTime(p.value);
					return formatterDate.format(isl.locale.timeFormats[7]+'\n'+isl.locale.timeFormats[8]);
				}
			}
		}
	}], timeYAxis={
		id:'timeYAxis',
		splitLine:showFalse,
		axisLabel:showFalse,
		axisPointer:showFalse,
		axisLine:showFalse,
		axisTick:showFalse
	}, trendLineXAxiPointer={
		snap:true,
		label:{
			formatter:function(p) {
				if(p.axisDimension==='x') {
					let seriesData=p.seriesData, i=seriesData.length;
					formatterDate.setTime(p.value);
					if(i--) {
						return formatterDate.format(seriesData[i].data[2] || isl.locale.timeFormats[7]+'\n'+isl.locale.timeFormats[8]);
					}
				} else {
					return p.value;
				}
			}
		}
	}, yAxisNameTextStyle={
		lineHeight:0
	}, xAxisNameTextStyle={
	padding:[0, 0, 0, -8]
	}, xySplitArea={
		show:true,
		areaStyle:{opacity:0.4}
	}, ySplitLine={
		show:true,
		lineStyle:{type:'dashed'}
	}, toolbox={
		left:0,
		bottom:0,
		feature:{
			saveAsImage:{
				iconStyle:{opacity:0.4},
				title:' '
			}
		}
	}, dashedSplitLine={
		lineStyle:{type:'dashed'}
	}, fullDataZoom=[{
		type:'inside',
		xAxisIndex:0,
		filterMode:'none'
	}, {
		filterMode:'none',
		xAxisIndex:0,
		bottom:7
	}], filterDataZoom=[{
		type:'inside',
		xAxisIndex:0,
		filterMode:'empty'
	}, {
		filterMode:'empty',
		xAxisIndex:0,
		bottom:7
	}], stepLineStyle={
		opacity:0
	}, areaStyle={
		opacity:.175
	}, whiteTextColorBorderShadow={
		color:'#FFF',
		textBorderWidth:2,
		textBorderColor:'inherit',
		textShadowColor:'rgba(80,80,80, 0.3)',
		textShadowBlur:2,
		textShadowOffsetY:1
	}, avgMarkLine={
		symbol:false,
		label:{
			position:'middle',
			show:false
		},
		lineStyle:{
			type:[5, 10],
			dashOffset:5
		},
		emphasis:{
			label:webix.extend({
				show:true
			}, whiteTextColorBorderShadow)
		},
		data:[{type:'average'}]
	}, markPointSymbol={
		symbol:'arrow',
		symbolOffset:[0, -3],
		symbolSize:12
	}, markPointLabelTop=webix.extend({
		position:'top',
		offset:[0, 4]
	}, whiteTextColorBorderShadow), markPointMaxTop=webix.extend({
		type:'max',
		symbolRotate:180,
		label:markPointLabelTop
	}, markPointSymbol), markPointMinTop=webix.extend({
		symbolRotate:180,
		type:'min',
		label:markPointLabelTop
	}, markPointSymbol), markPointMinBottom=webix.extend({
		type:'min',
		label:webix.extend({
			position:'bottom',
			offset:[0, -3]

		}, whiteTextColorBorderShadow)
	}, markPointSymbol), joinString=function(v1, v2, v3, connector) {
		let array=[];
		if(v1) array.push(v1);
		if(v2) array.push(v2);
		if(v3) array.push(v3);
		return array.join(connector || '\n');
	}, //-----------------------------Line-----------------------------------
	line13XAxisRanges={
		'0':3600000,
		'1':3600000*24,
		'2':3600000*24,
		'3':3600000*24,
		'-1':300000
	}, tooltip3Formatter=function(p) {
		let html, hasData, content, value;
		if(webix.isArray(p)) {
			p['shown']={};
			for(let i=0, l=p.length; i<l; i++) {
				let o=p[i];
				if(o.seriesType==='custom' || o.seriesId==='timeXAxisLine') {
					if(p.length===1) {
						return;
					} else {
						continue;
					}
				}
				if(p.shown[o.seriesName]!==1) {
					if(o.value || o.value===0) {
						if(webix.isArray(o.value)) {
							value=o.value[1];
						} else {
							value=o.value;
						}
					} else {
						value=null;
					}
					if(o.data) {
						if(value || value===0 || value===false) {
							content=value;
							hasData=true;
						} else {
							content=isl.locale.app.chart.nodata;
						}
						html=(html?html+'<br/>':'')+'<span style="display:inline-block;margin-right:5px;'+'border-radius:10px;width:9px;height:9px;background-color:'+o.color+'"></span>'+o.seriesName+' : '+content;
						if(o.data.s===0) {
							html+=isl.locale.app.chart.offline;
						}
						p.shown[o.seriesName]=1;
					} else {
						p.shown[o.seriesName]=o.color;
					}
				}
			}
			if(hasData) {
				for(let k in p.shown) {
					if(p.shown[k]!==1) {
						html?html+='<br/>':html+='';
						html+='<span style="display:inline-block;margin-right:5px;'+'border-radius:10px;width:9px;height:9px;background-color:'+p.shown[k]+'"></span>'+k+' : '+isl.locale.app.chart.nodata;
					}
				}
			} else {
				html=isl.locale.app.chart.nodata;
			}
			delete p.shown;
		} else {
			if(p.seriesType==='custom' || p.seriesId==='timeXAxisLine') {
				return;
			}
			if(webix.isArray(p.value)) {
				content=p.value[1]+'<br/>'+new Date(p.value[0]).format(p.value[2] || (isl.locale.timeFormats[7]+'\n'+isl.locale.timeFormats[8]));
			} else {
				if(p.value || p.value===0) {
					content=p.value;
				} else {
					content=isl.locale.app.chart.nodata;
				}
			}
			html='<span style="display:inline-block;margin-right:5px;'+'border-radius:10px;width:9px;height:9px;background-color:'+p.color+'"></span>'+p.seriesName+'<br/>'+content;
		}
		if(html) {
			return html;
		}
	}, //-----------------------------Bar-----------------------------------
	tooltip6={
		trigger:'axis',
		confine:true,
		axisPointer:{type:'cross'},
		formatter:function(p) {
			let html;
			if(webix.isArray(p)) {
				html='';
				for(let i=0, l=p.length; i<l; i++) {
					let o=p[i];
					if(o.value) {
						if(html!=='') {
							html+='<br/>';
						}
						html+='<span style="display:inline-block;margin-right:5px;'+'border-radius:10px;width:9px;height:9px;background-color:'+o.color+'"></span>'+o.seriesName+' : '+o.value+(o.data.time?(' ('+new Date(o.data.time).format(o.data.fmt)+')'):'');
					}
				}
			} else {
				html='<span style="display:inline-block;margin-right:5px;'+'border-radius:10px;width:9px;height:9px;background-color:'+p.color+'"></span>'+p.seriesName+' : '+p.value+(p.data.time?(' ('+new Date(p.data.time).format(p.data.fmt)+')'):'');
			}
			return html;
		}
	}, //-----------------------------Pie-----------------------------------
	tooltip7={
		confine:true,
		formatter:function(p) {
			if(p.value) {
				return '<span style="display:inline-block;margin-right:5px;'+'border-radius:10px;width:9px;height:9px;background-color:'+p.color+'"></span>'+p.value+'<br/>'+p.percent+'%<br/>'+p.name+(p.data.time?('<br/>('+new Date(p.data.time).format(p.data.fmt)+')'):'');
			} else {
				return '';
			}
		}
	},

	//-----------------------------Gauge-----------------------------------
	tooltip11={
		formatter:function(p) {
			return p.name+'<br/>'+p.seriesName+'<br/>'+(p.value || '-')+' '+p.data.unit+'<br/>'+p.data.time;
		},
		confine:true
	}, itemShadowStyle={
		color:'inherit',
		borderColor:'#FFF',
		shadowColor:'rgba(80,80,80, 0.3)',
		shadowBlur:3,
		shadowOffsetY:2
	}, axisTick11={
		lineStyle:{width:3},
		distance:-15
	}, splitLine11={
		lineStyle:{width:3},
		distance:-25
	}, axisLine11={lineStyle:{width:3}}, titleOffsetCenter11=[0, '-10%'], detailOffsetCenter11=[0, '-30%'], gaugeLineColors=['#006EDD', '#07A2A4', '#7EB00A', '#6EDD00', '#EFDF00', '#FF9E3E', '#FF3E3E'],//,  '#ff3eff', '#860EFE'
	gaugeLineValues=[0, 0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 1], gaugeLine={
		lineStyle:webix.extend({
			color:[[gaugeLineValues[1], gaugeLineColors[0]], [gaugeLineValues[1+1], gaugeLineColors[1]], [gaugeLineValues[2+1], gaugeLineColors[2]], [gaugeLineValues[3+1], gaugeLineColors[3]], [gaugeLineValues[4+1], gaugeLineColors[4]], [gaugeLineValues[5+1], gaugeLineColors[5]], [gaugeLineValues[6+1], gaugeLineColors[6]]],
			width:3
		}, itemShadowStyle)
	}, animationDelay=function() {return Math.random()*200;};
////////////////////////////////////////////////////////////////////////////////
webix.protoUI({
	name:'echart',
	defaults:{
		layoutType:'wide',
		on:{
			//注册resize事件
			onResize:function() {
				if(this.chart) {
					this.chart.resize();
				}
			}, //注册销毁事件
			onDestruct:function() {
				if(this.chart) {
					this.chart.clear();
					this.chart.dispose();
					delete this.chart;
				}
			}
		}
	},
	lastBarPos:[],
	$init:function() {
		this._wait=webix.promise.defer();
		this.$ready.push(this.render);
	},
	render:function() {
		this.chart=echarts.init(this.$view);
		this._wait.resolve(this.chart);
		if(this.config.ready) {
			this.config.ready.call(this, this.chart);
		}
	},
	$setSize:function(x, y) {
		if(webix.ui.view.prototype.$setSize.call(this, x, y)) {
			this._wait.then(function(chart) {
				chart.resize();
			});
		}
	},//-------------------------build method-----------------------------
	_buildXAxis:function(grid, tag, option, o) {//根据tag，构建X坐标
		grid.right=Math.max(grid.right, isl.getLabelWidth(o.name)+10);
		let minax=null;
		if(o.position==='top' && this.chart.dataTags) {
			minax=this.chart.dataTags[tag.id];
		} else if(this.chart.refTags) {
			minax=this.chart.refTags[tag.id];
		}
		return option.xAxis.push(webix.extend({
			axisLine:{
				show:true,
				lineStyle:webix.extend({
					color:tag.color || '#000'
				}, itemShadowStyle)
			},
			splitLine:dashedSplitLine,
			splitNumber:4,
			max:minax?minax[1]:null,
			min:minax?minax[0]:null,
			nameTextStyle:xAxisNameTextStyle,
			axisLabel:{
				color:tag.color || '#000',
				formatter:'{value}'
			}
		}, o));
	},
	_buildYAxis:function(tags, k, grid, yAxisLimits) {//根据tag，构建Y坐标
		let result=[], width;
		for(let i=0, l=tags.length; i<l; i++) {
			let c=webix.extend({
				splitArea:xySplitArea,
				splitLine:ySplitLine
			}, tags[i]), yAxisLimit=yAxisLimits[c.id], minaxWidth=0;
			if(!c.color) {
				c.color=colors[grid.color++];
			}
			if(c.max===1 && c.min===0 && c.scale===0) {//开关范围方波图形
				delete c.name;
				width=0;
				c['axisLabel']=c['axisPointer']=c['axisLine']=c['axisTick']=showFalse;
				c['splitNumber']=1;
			} else {//一般曲线
				c['axisLine']={
					show:true,
					lineStyle:webix.extend({
						color:c.color || '#000'
					}, itemShadowStyle)
				};
				c['position']=k;
				c.name=c.value;
				if(c.unit) {
					c.name+=' '+c.unit;
				}
				width=Math.max(isl.getLabelWidth(c.name)/2, 20);
				c['nameTextStyle']=yAxisNameTextStyle;
				if(yAxisLimit) {
					if(yAxisLimit[0] || yAxisLimit[0]===0) {
						c.min=yAxisLimit[0];
					}
					if(yAxisLimit[1] || yAxisLimit[1]===0) {
						c.max=yAxisLimit[1];
					}
				}
				//用户设置最大最小值
				if(c.max || c.min) {
					c['axisLabel']={
						formatter:'{value}'
					};
					minaxWidth=Math.max(isl.getLabelWidth(''+c.max), isl.getLabelWidth(''+c.min))+15;
					if(minaxWidth>width) {
						width=minaxWidth;
					} else {
						minaxWidth=0;
					}
				} else if(c.max===c.min) {
					delete c.max;
				}
				let newTop=38+12*(c.name?c.name.split('\n').length:1);
				if(newTop>grid.top) {
					grid.top=newTop;
				}
				c['axisPointer']={
					snap:true,
					label:{
						formatter:function(p) {
							if(p.axisDimension==='y') {
								return Math.ceil(p.value);
							}
						}
					},
					lineStyle:{
						color:c.color
					}
				};
			}
			if(grid[k] && c.name) {
				grid[k]+=width;//grid边距偏移（一倍宽度）
				c['offset']=grid[k];//当前坐标轴offset
			}
			grid[k]+=Math.max(minaxWidth, width)+3;//grid边距偏移
			c['maxWidth']=minaxWidth;
			//去掉对yAxis不必要的属性
			delete c.type;
			delete c.$count;
			delete c.$level;
			delete c.$parent;
			delete c.checkbox;
			delete c.checked;
			delete c.icon;
			delete c.leafCheckbox;
			delete c.parent;
			c.scale=true;
			delete c.unit;
			result.push(c);
		}
		return result;
	},
	_config3:function(option, dataTags, refTags, grid, xAxis) {
		option['xAxis']=xAxis;
		if(dataTags && dataTags.length) {
			dataTags=this._buildYAxis(dataTags, 'left', grid, this.chart.dataTags);
		}
		if(grid.left<24.01) {
			grid.left=24.01;
		}
		if(refTags && refTags.length) {
			grid.offs=0;
			refTags=this._buildYAxis(refTags, 'right', grid, this.chart.refTags);
		}
		if(grid.right<24.01) {
			grid.right=24.01;
		}
		option['grid']=grid;
		//option.legend['left']=grid.left-20;
		option['yAxis']=dataTags?(refTags?dataTags.concat(refTags):dataTags):refTags;
		option['tooltip']={
			trigger:'axis',
			confine:true,
			animation:false,
			axisPointer:{type:'cross'},
			formatter:tooltip3Formatter
		};
		//值坐标轴只有一个或开关坐标轴只有一个，则该坐标轴的各个数据都使用自由颜色
		let yaLen=option.yAxis.length, vY=[];
		while(yaLen--) {
			let yAxis=option.yAxis[yaLen];
			if(yAxis.name) {
				yAxis['itemColor']=yAxis.color;
				vY.push(yAxis);
			}
		}
		if(vY.length===1) {
			delete vY[0]['itemColor'];
		}
	},
	_config6:function(option, grid, dataTag, refTag) {
		option['grid']=grid;
		option['yAxis']={
			type:'category',
			data:[]
		};
		option['xAxis']=[];
		if(dataTag) {
			this._buildXAxis(grid, dataTag, option, {
				name:this._nReplace(dataTag.value, dataTag.unit, 2),
				splitArea:xySplitArea,
				position:'top'
			});
		}
		if(refTag) {
			this._buildXAxis(grid, refTag, option, {
				name:this._nReplace(refTag.value, refTag.unit, 1)
			});
		}
		option['tooltip']=tooltip6;
	},
	_nReplace:function(tagName, unitValue, r) {
		let appended='';
		if(unitValue) {
			tagName+='\n'+unitValue;
			appended='\n';
		}
		tagName=tagName.replace('_', function() {
			appended+='\n';
			return '\n';
		});
		if(r) {
			if(r===1) {
				tagName+=appended;
			} else {
				tagName=appended+tagName;
			}
		}
		return tagName;
	}, //-------------------------draw method-----------------------------
	//设置最终使用的图形显示属性
	_setDrawProperty:function(userCfgs, k) {
		let chart=this.chart, ucfg=userCfgs[k];
		if(ucfg || ucfg===0 || ucfg===false) {
			if(typeof ucfg==='string') {
				if(ucfg==='true') {
					chart[k]=true;
				} else {
					chart[k]=parseInt(ucfg);
				}
			} else {
				chart[k]=ucfg;
			}
		} else if(typeof chart[k]==='string') {
			if(chart[k]==='true') {
				chart[k]=true;
			} else {
				chart[k]=parseInt(chart[k]);
			}
		}
	},
	_processValueSumData:function(pointData, dataLen) {//所有点位不同时间的值之和
		if(!pointData.allSum && pointData.allSum!==0) {
			//消耗值才可以累加
			if(pointData.kind===0) {
				pointData['allSum']=0;
				while(dataLen--) {
					//累加点位值或取平均值，都需要先累加逐条点位值
					if(pointData.data[dataLen]) {
						//累加所有时间的值
						pointData.allSum=NP.plus(pointData.data[dataLen][1], pointData.allSum);
					}
				}
				if(this.chart.dataType===1) {
					pointData['avg']=NP.divide(pointData.allSum, pointData.data.length);
				}
			} else {//原始值只取最后一个值
				while(dataLen--) {
					if(pointData.data[dataLen]) {
						pointData['allSum']=pointData.data[dataLen][1];
						break;
					}
				}
			}
		}
	},
	_processDurationSumData:function(dataCollection, pointData, vss, dataKey, cpName) {//Line图时长数据统计
		let dSumData=dataCollection.dSumData;
		if(!dataCollection.dSumData) {
			dSumData={};
			dataCollection['dSumData']=dSumData;
		}
		//必须是非消耗量才会有时长定义
		if(pointData.kind!==0) {
			for(let vsId in vss) {
				let vsKey=vsId+(cpName || ''), sumData=dSumData[vsKey];
				if(!sumData) {
					sumData={
						data:[],//按时间点累加所有点位的此vs时长(line图和bar图)
						point:{},//按点位累加单个点位所有时间点的此vs时长（pie图和横bar图）
						finish:false
					};
					dSumData[vsKey]=sumData;
				}
				//如果已有该vs的累加数据则不再统计
				if(!sumData.finish) {
					//处理每个点位的每个值定义
					let durations=pointData.duration[vsId], pSum=0;
					if(durations) {
						for(let di=0, dl=durations.length; di<dl; di++) {
							let d=durations[di];
							pSum=NP.plus(d[1], pSum);
							//每个时间点的所有同一个vs时长累加
							if(sumData.data[di]) {
								sumData.data[di]=NP.plus(d[1], sumData.data[di]);
							} else {
								sumData.data[di]=[d[0], d[1]];
							}
						}
					}
					sumData.point[dataKey]=pSum;//累加每个点位的每个vs的所有时间点的时长
				}
			}
		}
	},
	_processTimeValueSumData:function(dataCollection, pointData, dtTag, times) {//Line图按时间的统计数据处理
		//消耗值才有累加或平均的意义
		if(pointData.kind===0) {
			let sumData=dataCollection.tSumData[dtTag.id];
			if(!sumData) {
				sumData={
					finish:false,
					amount:0,
					data:[]
				};
				dataCollection.tSumData[dtTag.id]=sumData;
			}
			//如果已有该tag的累加数据则不再统计
			if(!sumData.finish) {
				sumData.amount++;
				if(pointData.data) {
					let tl=times.length-1, ti=0;
					//累加值
					while(ti<tl) {
						let data=pointData.data[ti], vSum=sumData.data[ti];
						if(!vSum) {
							vSum=[times[ti], 0];
							sumData.data[ti]=vSum;
						}
						if(data) {
							vSum[1]=NP.plus(vSum[1], data[1]);
						}
						ti++;
					}
				}
			}
		}
	},
	_processGroupSumData:function(dataCollection, pointData, gpTag, dtTag, dataName, color) {//按分组标签统计
		if(pointData.kind===0) {//消耗值才有累加或平均的意义
			let dataLen=pointData.data?pointData.data.length:0;
			//累加点位值或取平均值，都需要先累加逐条点位值
			if(!dataCollection.gSumData) {
				dataCollection['gSumData']={};
			}
			//累加的pie数据对象
			let sumData=dataCollection.gSumData[gpTag.id];
			if(!sumData) {
				sumData={
					amount:0,
					finish:false,
					name:dataName,
					itemStyle:{
						color:color,
						borderColor:'#FFF'
					},
					sum:0//累加初始值
				};
				dataCollection.gSumData[gpTag.id]=sumData;
			}
			//如果已有该tag的累加数据已经统计过则不再统计
			if(!sumData.finish) {
				while(dataLen--) {
					let data=pointData.data[dataLen];
					if(data) {
						//累加所有时间的值
						sumData.sum=NP.plus(sumData.sum, data[1]);
					}
				}
				sumData.amount++;
			}
		}
	},

	//-------------------------line draw method-----------------------------
	//获取Line图项目标识形状
	_getShape:function(tagInfo, yAxisIndex) {
		if(!webix.isUndefined(yAxisIndex) && !tagInfo.shape) {
			if(webix.isUndefined(tagInfo.shapeIndex[yAxisIndex])) {
				tagInfo.shapeIndex[yAxisIndex]=0;
			} else {
				tagInfo.shapeIndex[yAxisIndex]++;
				if(tagInfo.shapeIndex[yAxisIndex]>7) {
					tagInfo.shapeIndex[yAxisIndex]=0;
				}
			}
			return shapes[tagInfo.shapeIndex[yAxisIndex]];
		}
	},
	_setMaxValueWidth:function(yAxis, value, scale) {//最大的值宽度
		let newMaxWidth;
		if(typeof value!=='string') {
			//处理Y轴最大宽度宽度
			if(value>1 || value< -1) {
				let txt=Math.floor(value).toLocaleString('en-US');
				if(txt.startWith('9') || txt.startWith('-9')) {
					txt+='0';
				}
				newMaxWidth=isl.getLabelWidth(txt)+15;
			} else if(value!==0) {
				newMaxWidth=scale*10+15;
			}
		} else {
			newMaxWidth=isl.getLabelWidth(value)+15;
		}
		if(yAxis.maxWidth<newMaxWidth) {
			yAxis.maxWidth=newMaxWidth;
		}
	},
	_resizeYAxisWidth:function(yAxis, grid) {//动态重设Y轴的宽度
		//根据数据动态设置Y轴宽度
		let currentWidth=0, addWidth=0, ya=yAxis[0], yaOffset=ya.offset || 0, timeLineYAxis=null;
		for(let yai=1, yaLen=yAxis.length; yai<yaLen; yai++) {
			let nextYAxis=yAxis[yai];
			if(nextYAxis.id==='timeYAxis') {
				timeLineYAxis=nextYAxis;
			}
			if(ya && ya.position) {//找到下一个同类yAxis的offset进行比较
				if(nextYAxis) {
					if(nextYAxis.position) {
						if(nextYAxis.position===ya.position) {
							currentWidth=nextYAxis.offset-yaOffset;
							if(ya.maxWidth>=currentWidth) {//如果值最大宽度大于最小宽度，则增加或减少偏移
								addWidth+=ya.maxWidth-currentWidth;
							}
							nextYAxis.offset+=addWidth;
						} else {
							currentWidth=grid[ya.position]-yaOffset;
							if(ya.maxWidth>currentWidth) {
								addWidth+=ya.maxWidth-currentWidth;
							}
							grid[ya.position]+=addWidth;//移动grid的该侧偏移
							addWidth=0;//换边
						}
						ya=nextYAxis;//换下一个y轴
						yaOffset=ya.offset || 0;
					}
				} else {
					grid[ya.position]+=addWidth;//移动grid的该侧偏移
				}
			} else {
				ya=yAxis[yai];//换下一个y轴
				yaOffset=ya.offset || 0;
			}
		}
		if(!addWidth) {
			currentWidth=grid[ya.position]-yaOffset;
			if(ya.maxWidth>currentWidth) {
				addWidth+=ya.maxWidth-currentWidth;
			}
		}
		grid[ya.position]+=addWidth;//移动grid的该侧偏移
		return timeLineYAxis;
	},
	_buildLineStatus:function(option, markSeries, times, vss, dtTag, yAxis) {//构造报警值定义线
		let startTime=times[0], stopTime=times[times.length-1], markData, dsData;
		for(let vsId in vss) {
			let vs=vss[vsId], compare=vs.compare, textPos=vs.textPos, lineDash=vs.lineDash, legend=vs.label || vs.name;
			//阈值比较方式： 0 !=, 1 =, 2 >, 4 <, 8(系统判断报警)
			if(vs.dataTag===dtTag.id && !(dtTag.max===1 && dtTag.min===0)) {
				if(!markData) {
					markData={};
				}
				let lowLimit=null, highLimit=null, neLimit=null;
				if(compare===0) {// !=
					highLimit=vs.lowLimit;
					if(vs.highLimit || vs.highLimit===0) {
						if(vs.highLimit === vs.lowLimit) {//高低限相等，则数据范围为全部数据
							lowLimit = highLimit;
						} else {
							neLimit=vs.highLimit;//数据范围应该是：小于低限，大于高限
						}
					}
				} else if(compare===1) {// =
					lowLimit=vs.lowLimit;
					if((vs.highLimit || vs.highLimit===0) && vs.highLimit>lowLimit) {
						highLimit=vs.highLimit;
					}
				} else {
					if(compare<4) {// >, >=
						lowLimit=vs.lowLimit;
					} else {// <, <=
						highLimit=vs.lowLimit;
					}
				}
				if(!vs.times || isl.isEmpty(vs.times)) {
					vs.times={
						allTimes:{
							triggers:[startTime],
							len:stopTime-startTime
						}
					};
				}
				//构建值定义的标识区域
				for(let dldId in vs.times) {
					let timeDefine=vs.times[dldId];
					for(let vsti=0, vstl=timeDefine.triggers.length; vsti<vstl; vsti++) {
						let startCoord=timeDefine.triggers[vsti], stopCoord=startCoord+timeDefine.len;
						if(stopTime>startCoord) {
							if(!markData[legend]) {
								markData[legend]=[];
							}
							dsData=markData[legend];
							dsData.push(['', '', startCoord<startTime?startTime:startCoord, //start
								stopCoord>stopTime?stopTime:stopCoord, //stop
								lowLimit, highLimit, compare, vs.color, vs.bgColor, textPos, lineDash]);
							if(neLimit) {
								dsData.push(['', '', startCoord<startTime?startTime:startCoord, //start
									stopCoord>stopTime?stopTime:stopCoord, //stop
									neLimit, null, compare, vs.color, vs.bgColor, textPos, lineDash]);
							}
						}
					}
				}
				markData[legend].push([startTime, Math.min(lowLimit, neLimit || highLimit)], [stopTime, Math.max(neLimit || lowLimit, highLimit)]);
			}
		}
		if(markData) {
			let legends=Object.keys(markData).sort();
			for(let i=0; i<legends.length; i++) {
				let legend=legends[i], data=markData[legend], m0=data[0], isLine=m0[4] && m0[4]===m0[5], color=m0[8] || m0[7] || '#000';
				//下文字
				markSeries.push({
					type:'custom',
					z:5,
					yAxisIndex:yAxis.indexNumber,
					name:legend,
					color:color,
					renderItem:this._renderTextItem,
					data:data
				});
				//上文字
				markSeries.push({
					type:'custom',
					z:5,
					yAxisIndex:yAxis.indexNumber,
					name:legend,
					color:color,
					renderItem:this._renderTextItem,
					data:data
				});
				//图形
				markSeries.push({
					type:'custom',
					z:isLine?3:1,
					itemStyle:{
						color:color
					},
					yAxisIndex:yAxis.indexNumber,
					name:legend,
					color:color,
					renderItem:this._renderRectItem,
					data:data
				});
			}
		}
	},
	_renderRectItem:function(params, api) {
		let lowLimit=api.value(4), highLimit=api.value(5);
		if(isNaN(lowLimit) && isNaN(highLimit)) {
			return null;
		}
		let rect=webix.ui.echart.prototype._buildBenchmarkRect(params, api);
		if(rect) {
			let backgroundColor=api.value(8) || '#888';
			let item={
				type:'rect',
				style:{
					textBackgroundColor:backgroundColor,
					fill:backgroundColor,
					opacity:(!lowLimit && !highLimit)?0.5:1
				},
				shape:rect
			};
			if(item.shape.width===0 || item.shape.height===0) {
				item.style['stroke']=backgroundColor;
				item.style['lineWidth']=2;
				if(api.value(10)) {
					item.style['lineDash']=[3, 7];
				}
				item.style['strokeNoScale']=true;
			}
			return item;
		} else {
			return null;
		}
	},
	_renderTextItem:function(params, api) {
		let lowLimit=api.value(4), highLimit=api.value(5), compare=api.value(6);
		if((compare === 0 && lowLimit === highLimit) || (isNaN(lowLimit) && isNaN(highLimit))) {
			return null;
		}
		let rect=webix.ui.echart.prototype._buildBenchmarkRect(params, api);
		if(rect) {
			let height=rect.y+rect.height/2, text=lowLimit+'\n', compare=api.value(6), isBottomText=params.seriesId.endsWith('1');
			if(compare>1) {
				if(isBottomText) {
					return null;
				} else {
					if(compare<4) {//大于的情况
						text=lowLimit+'\n';
						height=rect.y+rect.height;
					} else if(compare>3) {//小于的情况
						text='\n'+highLimit;
						height=rect.y+3;
					}
				}
			} else if(compare) {//等于
				if(highLimit || highLimit === 0) {
					if(lowLimit===highLimit) {//单线
						if(api.value(9)) {
							text=lowLimit+'\n';
							height=rect.y+rect.height;
						} else {
							text='\n'+highLimit;
							height=rect.y+3;
						}
					} else {//范围
						if(isBottomText) {
							text=highLimit+'\n';
							height=rect.y+3;
						} else {
							text='\n'+lowLimit;
							height=rect.y+rect.height;
						}
					}
				}
			} else {//不等于
				if(lowLimit || lowLimit === 0) {
					if(lowLimit===highLimit) {//单线
						if(api.value(9)) {
							text='!='+lowLimit+'\n';
							height=rect.y+rect.height;
						} else {
							text='\n!='+highLimit;
							height=rect.y+3;
						}
					} else {//范围的下部
						if(!isBottomText) {
							text='!='+lowLimit+'\n';
							height=rect.y+rect.height;
						} else {
							return null;
						}
					}
				} else if(highLimit || highLimit === 0) {//范围的上部
					if(!isBottomText) {
						text='!='+highLimit+'\n';
						height=rect.y+3;
					} else {
						return null;
					}
				}
			}
			return {
				type:'text',
				style:{
					text:text,
					textFill:api.value(7),
					textAlign:'center',
					textVerticalAlign:'middle',
					textShadowColor:'#FFF',
					textShadowOffsetX:1,
					textShadowOffsetY:1,
					textShadowBlur:1.5,
					opacity:0.5
				},
				position:[rect.x+rect.width/2, height]
			};
		} else {
			return null;
		}
	},
	_buildBenchmarkRect:function(params, api) {
		let start=api.value(2), stop=api.value(3), lowLimit=api.value(4), highLimit=api.value(5),
			leftTop=api.coord([start, highLimit]),
			rightBottom=api.coord([stop, lowLimit]),
			width=params.coordSys.width,
			height=params.coordSys.height;
		if(lowLimit === highLimit) {
			lowLimit = null;
			highLimit = null;
		}
		if(!stop) {//没有X轴结束点，则右侧宽度设置到X轴结束位置
			rightBottom[0]=params.coordSys.width;
			width+=params.coordSys.x;
		}
		if(!lowLimit && lowLimit!==0) {//没有设置低限，则设置Y轴向下延申到最低处
			rightBottom[1]=params.coordSys.height;
			height+=params.coordSys.y;
		}
		if(!start) {//没有x轴开始，则左侧设置为X轴开始位置
			leftTop[0]=0;
		}
		if(!highLimit && highLimit!==0) {//没有设置高限，则Y轴向上延申到最高处
			leftTop[1]=0;
		}
		let rect=null;
		//绘制的内容要在坐标轴范围内
		if(rightBottom[0]>=params.coordSys.x && //right
			rightBottom[1]>=params.coordSys.y && //bottom
			leftTop[0]<=(params.coordSys.x+params.coordSys.width) && //top
			leftTop[1]<=(params.coordSys.y+params.coordSys.height) //left
		) {
			rect=echarts.graphic.clipRectByRect({
				x:leftTop[0],
				y:leftTop[1],
				width:width-leftTop[0]-(params.coordSys.width-rightBottom[0]),
				height:height-leftTop[1]-(params.coordSys.height-rightBottom[1])
			}, {
				x:params.coordSys.x,
				y:params.coordSys.y,
				width:params.coordSys.width,
				height:params.coordSys.height
			});
		}
		return rect;
	},

	//构建xy坐标系的Line或Bar图
	_buildXYLine:function(dtTag, yAxis, sName, kind, color, data, vs, cpName) {
		//构建series
		let me=this, chart=me.chart;
		if(!color) {
			color=yAxis.itemColor || colors[chart.colorIndex++];
		}
		let line={
			name:sName+((vs && typeof vs==='object')?'('+vs.name+')':''),
			yAxisIndex:yAxis.indexNumber,
			itemStyle:{
				color:color
			},
			label:webix.extend({
				show:true,
				position:'insideTop',
				align:'right',
				verticalAlign:'middle',
				rotate:90,
				formatter:function(params) {
					let value=params.value[1];
					if(value && chart.area) {
						me.lastBarPos[params.dataIndex]= !me.lastBarPos[params.dataIndex];
						return me.lastBarPos[params.dataIndex]?(value+'\n'):('\n'+value);
					} else {
						return '';
					}
				}
			}, whiteTextColorBorderShadow),
			data:data
		};
		line['type']=(kind || chart.incLine)?'line':'bar';
		if(data) {
			if(line.type==='bar') {
				line['markLine']=chart.avg?avgMarkLine:null;
				line['markPoint']=chart.minax?{
					silent:true,
					data:[markPointMaxTop, markPointMinTop]
				}:null;
				if(vs) {
					//累加数据分组
					if(typeof vs==='string') {
						line['stack']=vs+cpName || '';
					} else {
						//时长柱形的颜色包边
						line.itemStyle['borderWidth']=2;
						line.itemStyle['color']=vs.bgColor;
						line.itemStyle['borderColor']=vs.color || color;
						line.itemStyle['opacity']=0.5;
						line['emphasis']={
							itemStyle:{
								borderColor:vs.color || color,
								color:vs.bgColor || '#FFF',
								opacity:1
							}
						};
					}
				} else {
					if(chart.area) {
						line['stack']=dtTag.variable+cpName || '';
					} else {
						delete line.stack;
					}
				}
				line.itemStyle['shadowColor']='rgba(80,80,80, 0.3)';
				line.itemStyle['shadowBlur']=5;
				line.itemStyle['shadowOffsetX']=2;
			} else {
				line['z']=4;
				if(kind===3) {
					//开关状态，使用区域方波
					line['xAxisIndex']=0;
					line['step']='end';
					line['areaStyle']=areaStyle;
					line.lineStyle=stepLineStyle;
					line.itemStyle['opacity']=1;
					line['animation']=false;
					line['symbol']='pin';
				} else {
					//整数或字符值用方波
					if(kind>1) {
						line['step']='end';
						yAxis['minInterval']=1;
					} else {
						if(chart.incLine) {
							line['smooth']=0.6;
							line['smoothMonotone']='x';
						}
						delete yAxis.minInterval;
					}
					line['lineStyle']=webix.extend({
						color:color
					}, itemShadowStyle);
					line['markLine']=chart.avg?avgMarkLine:null;
					line['markPoint']=chart.minax?{
						silent:true,
						data:[markPointMaxTop, markPointMinBottom]
					}:null;
					line['areaStyle']=chart.area?areaStyle:null;
					line['symbol']=this._getShape(dtTag, yAxis.indexNumber);
					line['emphasis']={
						symbolSize:12
					};
				}
			}
		} else {
			if(line.type!=='bar') {
				if(kind===3) {
					line['symbol']='pin';
				} else {
					line['symbol']=this._getShape(dtTag, yAxis.indexNumber);
				}
			}
		}
		line['showSymbol']=line.symbol!=='pin';
		return line;
	},
	_add3Series:function(option, dtTag, yAxis, sName, kind, color, data, vs, cpName) {
		let minValue=0;
		if(data) {
			for(let i=0, l=data.length; i<l; i++) {
				let d=data[i];
				if(d) {
					if(vs) {
						//时长数据默认单位秒
						d[1]=isl.scaledNumber(d[1], 1);
					} else {
						d[1]=isl.scaledNumber(d[1], dtTag.scale);
					}
					//处理Y轴最大宽度宽度
					if(d[1] || d[1]===0) {
						if(minValue>d[1]) {
							minValue=d[1];
						}
						this._setMaxValueWidth(yAxis, d[1], dtTag.scale);
					} else {
						d.length=0;
						data[i]=null;
					}
					d[2]=this.chart.dataFmt;
				}
			}
		}
		if(data && data.length) {
			let line=this._buildXYLine(dtTag, yAxis, sName, kind, color, data, vs, cpName);
			if(line.type==='bar' && line.markPoint && minValue<0) {
				line.markPoint.data[1]=markPointMinTop;
			}
			option.series.push(line);
		}
	},
	_add3SumSeries:function(option, vss, dtTag, yAxis, sName, dataCollection, cpName) {
		if(this.chart.duration) {
			for(let vsId in vss) {
				//所有点位的每个值定义的时长总和
				let dSumData=dataCollection.dSumData[vsId];
				if(dSumData && dSumData.data && dSumData.data.length) {
					this._add3Series(option, dtTag, yAxis, sName, 0, null, dSumData.data, vss[vsId], cpName);
					dSumData.finish=true;
				} else if(this.chart.nullItem) {
					option.series.push(this._buildXYLine(dtTag, yAxis, sName, 0, '#CCCCCC', null, vss[vsId], cpName));
				}
			}
		} else {
			let sumData=dataCollection.tSumData[dtTag.id];
			if(sumData && sumData.data && sumData.data.length) {
				//平均值处理
				if(this.chart.dataType===1) {
					if(!sumData.avg) {
						let avgData=[];
						for(let i=0, l=sumData.data.length; i<l; i++) {
							let d=sumData.data[i];
							avgData.push([d[0], d[1]/sumData.amount, this.chart.timeSpan]);
						}
						sumData['avg']=avgData;
					}
					this._add3Series(option, dtTag, yAxis, sName, 0, null, sumData.avg, null, cpName);
					//} else {//累加值
					//this._add3Series(option, dtTag, yAxis, sName, 0, null, sumData.data, dtTag.variable);
				}
				sumData.finish=true;
			} else if(this.chart.nullItem) {
				option.series.push(this._buildXYLine(dtTag, yAxis, sName, 0, '#CCCCCC', null, null, cpName));
			}
		}
	},
	_draw3:function(dataCollection, option, yAxis, dtTag, tagString, pdName, sName, color, vss, times, cpName) {
		let original=false, pointData=dataCollection[tagString];//tagString;//点位信息
		if(pointData) {
			if(cpName) {
				sName+='['+cpName+']';
			}
			pointData['name']=pdName;
			//累加或取平均值，都需要先累加逐条点位值
			if(this.chart.dataType!==10) {
				if(this.chart.duration) {
					this._processDurationSumData(dataCollection, pointData, vss, tagString, cpName);
				} else if(this.chart.dataType===1) {
					//平均值 先累加
					this._processTimeValueSumData(dataCollection, pointData, dtTag, times);
				} else {
					//--------------分组柱状图-----------------
					if(pointData.data && pointData.data.length) {
						//逐条点位值显示
						this._add3Series(option, dtTag, yAxis, sName, pointData.kind, color, pointData.data, dtTag.variable, cpName);
					}
				}
			} else {
				if(this.chart.duration) {
					if(pointData.duration) {
						for(let vsId in vss) {
							//每个点位的每个值定义的时长
							this._add3Series(option, dtTag, yAxis, sName, 0, color, pointData.duration[vsId], vss[vsId], cpName);
						}
					}
				} else {
					original=pointData.kind>0;
					if(pointData.data && pointData.data.length) {
						//逐条点位值显示
						this._add3Series(option, dtTag, yAxis, sName, pointData.kind, color, pointData.data, null, cpName);
					} else if(this.chart.nullItem) {
						option.series.push(this._buildXYLine(dtTag, yAxis, sName, 0, '#CCCCCC', null, null, cpName));
					}
				}
			}
		}
		//逐条显示时是否含有原始值
		return original;
	},

	_draw13:function(pointStatus, chart, series, dtTag, tagString, name, color, yAxis, newTime) {
		let value, time, s=chart.gauges[tagString];
		if(pointStatus || chart.nullItem) {
			if(!s) {
				s=this._buildXYLine(dtTag, yAxis, name, pointStatus.kind, color, []);
				series.push(s);
				chart.gauges[tagString]=s;
				if(s.step==='end') {
					if(!chart.stepEndLines) {
						chart['stepEndLines']=[];
					}
					chart.stepEndLines.push(s);
				}
			}
			if(chart.area) {
				s['areaStyle']=areaStyle;
				s['stack']=dtTag.variable;
			} else {
				delete s.stack;
				if(pointStatus.kind!==3) {
					delete s.areaStyle;
				}
			}
			s['markLine']=chart.avg?avgMarkLine:null;
			s['markPoint']=chart.minax?{
				silent:true,
				data:[markPointMaxTop, markPointMinBottom]
			}:null;

			if(pointStatus) {
				value=pointStatus.value;
				time=pointStatus.time;
				if(value && dtTag.scale) {
					value=isl.scaledNumber(value, dtTag.scale);
				}
				if(time>chart.maxTime) {
					chart.maxTime=time;
				}
				if(s.step==='end') {
					if(s.insertDummy) {
						s.insertDummy[0]=time;
						if(s.insertDummy[1]!==value) {
							s.insertDummy[1]=value;
							delete s.insertDummy;
						}
					} else {
						s.data.push([time, value]);
					}
				} else {
					s.data.push([time, value]);
				}
				this._setMaxValueWidth(yAxis, value, dtTag.scale);
				if(newTime<time) {
					newTime=time;
				}
			}
		}
		return newTime;
	}, //-------------------------bar draw method-----------------------------
	//构造横向条形
	_buildHBar:function(option, barName, stack, xAxisIndex, color, bar, dataIndex, fn) {
		let me=this, chart=me.chart;
		//添加数据块
		if(!bar) {
			bar={
				name:barName,
				type:'bar',
				xAxisIndex:xAxisIndex,
				label:webix.extend({
					show:true,
					position:'insideLeft',
					formatter:function(params) {
						if(params.value) {
							if(chart.area) {
								if(chart.multiData[params.dataIndex]>1) {
									me.lastBarPos[params.dataIndex]= !me.lastBarPos[params.dataIndex];
									let parallel='';
									if(params.seriesName) {
										parallel+='\n';
									}
									if(params.value) {
										parallel+='\n';
									}
									return me.lastBarPos[params.dataIndex]?joinString(params.seriesName, params.value, parallel):joinString(parallel, params.seriesName, params.value);
								} else {
									return joinString(params.seriesName, params.value);
								}
							} else {
								return params.value;
							}
						} else {
							return '';
						}
					}
				}, whiteTextColorBorderShadow),
				itemStyle:webix.extend({
					color:color || colors[this.chart.colorIndex++],
					borderColor:'#FFF'
				}, itemShadowStyle),
				data:[]
			};
			option.series.push(bar);
		}
		if(chart.area) {
			bar['stack']=stack;
		} else {
			delete bar.stack;
		}
		if(fn) {
			fn(bar, dataIndex);
		}
		return bar;
	},
	_add16HBar:function(jdata, option, bar, rgTag, gpTag, dtTag, barName, xAxisIndex, singleTag, groupColor, dataColor, index) {
		let chart=this.chart, tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id, pointStatus=jdata[tagString];
		//横向bar点位数据显示不区分dataType
		if(pointStatus || chart.nullItem) {
			//为了配合界面从上至下显示分组数据，在此反向添加数据
			bar=this._buildHBar(option, barName, dtTag.variable, xAxisIndex, groupColor, bar, index, function(bar, dataIndex) {
				if(pointStatus) {
					let bData=bar.data[dataIndex];
					if(bData) {
						bData.value=isl.scaledNumber(pointStatus.value, dtTag.scale);
						bData.time=pointStatus.time;
						if(singleTag) {
							bData.itemStyle.color=dataColor || colors[chart.colorIndex++];
						}
					} else {
						let newData={
							value:isl.scaledNumber(pointStatus.value, dtTag.scale),
							time:pointStatus.time
						};
						if(singleTag) {
							newData['itemStyle']={color:dataColor || colors[chart.colorIndex++]};
						}
						bar.data[dataIndex]=newData;
					}
				}
			});
		}
		return bar;
	},
	_add6HBar:function(dataCollection, option, bar, rgTag, gpTag, dtTag, barName, xAxisIndex, singleTag, groupColor, dataColor, index, vss, cpName) {
		let me=this, chart=me.chart, tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id, pointData=dataCollection[tagString];
		if(pointData) {//点位数据
			pointData['name']=rgTag.value+'_'+gpTag.value+'_'+dtTag.value;
			if(chart.duration) {//时长累计数据
				me._processDurationSumData(dataCollection, pointData, vss, joinString(rgTag.value, barName), cpName);
			} else {
				//横向bar点位数据显示不区分dataType
				let dataLen=pointData.data?pointData.data.length:0;
				if(dataLen || chart.nullItem || cpName) {
					//为了配合界面从上至下显示分组数据，在此反向添加数据
					bar=me._buildHBar(option, barName, dtTag.variable, xAxisIndex, dataLen?groupColor:'#CCCCCC', bar, index, function(bar, dataIndex) {
						me._processValueSumData(pointData, dataLen);
						if(chart.dataType===1 && pointData.avg) {
							//平均值
							if(singleTag) {
								bar.data.splice(dataIndex, 0, {
									value:isl.scaledNumber(pointData.avg, dtTag.scale),
									itemStyle:{color:dataColor || colors[chart.colorIndex++]}
								});
							} else {
								bar.data.splice(dataIndex, 0, isl.scaledNumber(pointData.avg, dtTag.scale));
							}
						} else {
							//累加值
							if(singleTag) {
								bar.data.splice(dataIndex, 0, {
									value:isl.scaledNumber(pointData.allSum, dtTag.scale),
									itemStyle:{color:dataColor || colors[chart.colorIndex++]}
								});
							} else {
								bar.data.splice(dataIndex, 0, isl.scaledNumber(pointData.allSum, dtTag.scale));
							}
						}
					});
				}
			}
		}
		return bar;
	},
	_add16Series:function(jdata, option, dtTag, xAxisIndex, isTrend, singleTag, vss, cpName, cpi) {
		//根据标签组合，处理每个点位的数据
		let chart=this.chart, rangeTags=chart.rangeTags, groupTags=chart.groupTags;
		if(chart.reverse) {
			let rl=rangeTags.length;
			singleTag&=rl===1;
			for(let ri=0; ri<rl; ri++) {
				let bar, rgTag=rangeTags[ri], barName=joinString(rgTag.value, dtTag.value), color=rl>1?rgTag.color:null;
				for(let n=0, m=option.series.length; n<m; n++) {
					if(option.series[n].name===barName) {
						bar=option.series[n];
						break;
					}
				}
				for(let gi=0, gl=groupTags.length; gi<gl; gi++) {
					let gpTag=groupTags[gi];
					if(isTrend) {
						let idx=gi;
						if(cpi && option.series.length) {
							idx=idx*2+cpi;
						}
						bar=this._add6HBar(jdata, option, bar, rgTag, gpTag, dtTag, barName, xAxisIndex, singleTag, color, gpTag.color, idx, vss, cpName);
					} else {
						bar=this._add16HBar(jdata, option, bar, rgTag, gpTag, dtTag, barName, xAxisIndex, singleTag, color, gpTag.color, gi);
					}
				}
			}
		} else {
			let gl=groupTags.length;
			singleTag&=gl===1;
			for(let gi=0; gi<gl; gi++) {
				let bar, gpTag=groupTags[gi], barName=joinString(gpTag.value, dtTag.value), color=gl>1?gpTag.color:null;
				for(let n=0, m=option.series.length; n<m; n++) {
					if(option.series[n].name===barName) {
						bar=option.series[n];
						break;
					}
				}
				for(let ri=0, rl=rangeTags.length; ri<rl; ri++) {
					let rgTag=rangeTags[ri];
					if(isTrend) {
						let idx=ri;
						if(cpName) {
							idx=idx*2+cpi;
						}
						bar=this._add6HBar(jdata, option, bar, rgTag, gpTag, dtTag, barName, xAxisIndex, singleTag, color, rgTag.color, idx, vss, cpName);
					} else {
						bar=this._add16HBar(jdata, option, bar, rgTag, gpTag, dtTag, barName, xAxisIndex, singleTag, color, rgTag.color, ri);
					}
				}
			}
		}
	},
	_add6Series:function(dataCollection, option, dtTag, xAxisIndex, singleTag, vss, cpName, cpi) {
		//根据标签组合，处理每个点位的数据
		let chart=this.chart;
		this._add16Series(dataCollection, option, dtTag, xAxisIndex, true, singleTag, vss, cpName, cpi);
		if(chart.duration) {//时长数据
			for(let vsId in vss) {
				let vsKey=vsId+(cpName || ''), dSumData=dataCollection.dSumData[vsKey];
				if(dSumData) {
					let vsPoints=dSumData.point;
					for(let barName in vsPoints) {
						this._buildHBar(option, barName, dtTag.variable, xAxisIndex, null, null, 0, function(bar) {
							let vsPointSum=vsPoints[barName];
							bar.data.push(vsPointSum?isl.scaledNumber(vsPointSum, 1):null);
						});
					}
				} else if(chart.nullItem) {
					this._buildHBar(option, vss[vsId].name+(cpName?(' ('+cpName+')'):''), dtTag.variable, xAxisIndex, '#CCCCCC', null, 0);
				}
			}
		}
	},
	_draw6:function(jdata, option, dataCollection, cpName, cpi) {
		let chart=this.chart, vss=jdata.vss, yAxisData=chart.reverse?chart.groupTags:chart.rangeTags;
		//如果图像为时长图，则Y轴分组为vs
		if(chart.duration) {
			yAxisData=vss;
		}
		if(yAxisData!=null) {
			yAxisData.reverse();
			for(let i=0; i<yAxisData.length; i++) {
				let yData=yAxisData[i], yValue=yData.value, cpYValue=cpName?('['+cpName+']'):'';
				if(cpYValue) {
					yValue+='\n'+cpYValue;
				}
				let dataIndex=i;
				if(cpi && option.yAxis.data.length) {
					dataIndex=dataIndex*2+cpi;
				}
				//添加y轴分组项
				option.yAxis.data.splice(dataIndex, 0, {
					value:yValue,
					textStyle:{
						color:yData.color
					}
				});
				option.grid.left=Math.max(option.grid.left, isl.getLabelWidth(yValue));
			}
		}
		let dataTagIndex=1, refTagIndex=0;
		if(option.xAxis[0].position==='top') {
			dataTagIndex=0;
			refTagIndex=1;
		}
		//分别处理上下X轴的数据
		if(chart.dataTag) {
			this._add6Series(dataCollection, option, chart.dataTag, dataTagIndex, !chart.refTag, vss, cpName, cpi);
		}
		if(chart.refTag) {
			this._add6Series(dataCollection, option, chart.refTag, refTagIndex, !chart.dataTag, vss, cpName, cpi);
		}
		if(yAxisData!=null) {
			yAxisData.reverse();
		}
	},

	//-------------------------pie draw method-----------------------------
	//获取Pie的偏移位置
	_getPiePosOffset:function(ti, tl, orient) {
		//偏移坐标位置
		let x=(2*ti+1)*(50/tl);
		if(x<40 || x>60) {
			x+=x>50?-5/tl:5/tl;
		}
		if(orient) {
			x=(x+5).toFixed(2);
		}
		return x;
	}, //构建Pie
	_buildPie:function(dataTag, radius, center, cpName) {
		let me=this, chart=me.chart;
		return {
			type:'pie',
			avoidLabelOverlap:false,
			radius:[(100/radius/2).toFixed(2)+'%', (100/radius).toFixed(2)+'%'],
			center:center,
			roseType:'radius',
			label:{
				formatter:function(obj) {
					if(obj.data.label.position) {
						let unit=chart.duration?isl.locale.base.second:(dataTag.unit?dataTag.unit:'');
						return me._nReplace(dataTag.value+(cpName?('_['+cpName+']'):''), chart.area?(unit?(unit+'\n'+chart.totalValue):chart.totalValue):unit);
					} else {
						return obj.value+'\n'+obj.percent+'%'+(chart.area?('\n'+obj.name):'');
					}
				}
			},
			data:[{
				label:{
					color:dataTag.color || '#000',
					position:'center'
				},
				value:false
			}],
			animationType:'scale',
			animationEasing:'elasticOut',
			animationDelay:animationDelay
		};
	},

	_incDataProcess:function(dataCollection, pie, gpTag, dtTag) {
		//累加值处理
		if(!this.chart.duration && this.chart.dataType!==10 && dataCollection.gSumData) {
			let sumData=dataCollection.gSumData[gpTag.id];
			if(sumData) {
				if(!sumData.finish) {
					if(this.chart.dataType===1) {//平均值
						sumData['value']=isl.scaledNumber(sumData.allSum/sumData.amount, dtTag.scale);
					} else {
						sumData['value']=isl.scaledNumber(sumData.allSum, dtTag.scale);
					}
					sumData.finish=true;
				}
				if(sumData.value) {
					pie.data.push(sumData);
					if(option.legend.data.indexOf(sumData.name)<0) {
						option.legend.data.push(sumData.name);
					}
				}
			} else if(this.chart.nullItem) {
				pie.data.push({
					name:gpTag.value,
					itemStyle:{
						color:'#CCCCCC',
						borderColor:'#FFF'
					}
				});
				if(option.legend.data.indexOf(gpTag.value)<0) {
					option.legend.data.push(gpTag.value);
				}
			}
		}
	},
	_add7Series:function(option, dataCollection, pie, rgTag, gpTag, dtTag, color, vss, cpName) {
		let pointData=dataCollection[rgTag.id+'.'+gpTag.id+'.'+dtTag.id], value=0;
		if(pointData) {
			pointData['name']=rgTag.value+'_'+gpTag.value+'_'+dtTag.value;
			let chart=this.chart;
			if(chart.duration) {
				this._processDurationSumData(dataCollection, pointData, vss, joinString(rgTag.value, gpTag.value, dtTag.value), cpName);
			} else {
				if(chart.dataType!==10) {//非逐条图
					let dataKey=gpTag.value;
					this._processGroupSumData(dataCollection, pointData, gpTag, dtTag, dataKey, color || colors[chart.colorIndex++]);
				} else {//逐条图
					//逐条点位值显示
					let name=joinString(rgTag.value, gpTag.value), dataLen=pointData.data?pointData.data.length:0;
					if(dataLen || chart.nullItem) {
						if(dataLen) {
							this._processValueSumData(pointData, dataLen);
							value=isl.scaledNumber(chart.dataType===1?pointData.avg:pointData.allSum, dtTag.scale) || 0;
						}
						if(value || chart.nullItem) {
							color=color || colors[chart.colorIndex++];
							pie.data.push({
								name:name,
								label:webix.extend({textBorderColor:color}, whiteTextColorBorderShadow),
								itemStyle:webix.extend({color:color}, itemShadowStyle),
								value:value
							});
							if(option.legend.data.indexOf(name)<0) {
								option.legend.data.push(name);
							}
						}
					}
				}
			}
		}
		return value;
	},
	_draw7:function(option, vss, dataCollection, center, radius, cpName) {
		let chart=this.chart, dtTag=this.chart.dataTag, pie=this._buildPie(dtTag, radius, center, cpName), rangeTags=chart.rangeTags, groupTags=chart.groupTags;
		option.series.push(pie);
		chart['totalValue']=0;
		//根据标签组合，处理每个点位的数据
		if(chart.reverse) {
			for(let ri=0, rl=rangeTags.length; ri<rl; ri++) {
				let rgTag=rangeTags[ri];
				for(let gi=0, gl=groupTags.length; gi<gl; gi++) {
					let gpTag=groupTags[gi], color=gpTag.color || rgTag.color;
					chart.totalValue=NP.plus(chart.totalValue, this._add7Series(option, dataCollection, pie, rgTag, gpTag, dtTag, color, vss, cpName));
				}
				this._incDataProcess(dataCollection, pie, rgTag, dtTag);
			}
		} else {
			for(let gi=0, gl=groupTags.length; gi<gl; gi++) {
				let gpTag=groupTags[gi];
				for(let ri=0, rl=rangeTags.length; ri<rl; ri++) {
					let rgTag=rangeTags[ri], color=rgTag.color || gpTag.color;
					chart.totalValue=NP.plus(chart.totalValue, this._add7Series(option, dataCollection, pie, rgTag, gpTag, dtTag, color, vss, cpName));
				}
				this._incDataProcess(dataCollection, pie, gpTag, dtTag);
			}
		}
		if(chart.duration && dataCollection.dSumData) {
			chart['totalValue']=0;
			//根据不同VS划分，每个VS数据包含多个点位的时长
			for(let vsId in vss) {
				let vs=vss[vsId], vsKey=vsId+(cpName || ''), dSumData=dataCollection.dSumData[vsKey], value;
				if(chart.dataType!==10) {//非逐条图
					let sum=0, pointAmount=0;
					for(let dataKey in dSumData.point) {
						pointAmount++;
						sum=NP.plus(sum, dSumData.point[dataKey]);
					}
					value=isl.scaledNumber(chart.dataType===1?sum/pointAmount:sum, 1) || 0;
					if(value || chart.nullItem) {
						//逐条vs显示
						pie.data.push({
							name:vs.name,
							itemStyle:{
								color:vs.bgColor,
								borderColor:vs.color,
								opacity:0.5
							},
							value:value
						});
						chart.totalValue=NP.plus(chart.totalValue, value);
					}
				} else {//逐条图
					//根据不同点位的不同VS划分，每个数据是一个点位的一个VS的时长
					for(let dataKey in dSumData.point) {
						value=isl.scaledNumber(dSumData.point[dataKey], 1) || 0;
						if(value || chart.nullItem) {
							//逐条vs显示
							pie.data.push({
								name:dataKey,
								itemStyle:{
									color:colors[chart.colorIndex++],
									borderColor:vs.color,
									opacity:0.5
								},
								value:value
							});
							chart.totalValue=NP.plus(chart.totalValue, value);
						}
					}
				}
			}
		}
		if(chart.totalValue) {
			chart.totalValue=isl.scaledNumber(chart.totalValue, dtTag.scale);
		}
	},

	_draw17:function(option, pointData, pie, nullItem, name, dtTag, color) {
		let pointValue=0;
		if(pointData || nullItem) {
			//逐条点位值显示
			let pData;
			for(let pdi=0, pdl=pie.data.length; pdi<pdl; pdi++) {
				pData=pie.data[pdi];
				if(pData.name===name) {
					break;
				} else {
					pData=null;
				}
			}
			if(pointData) {
				pointValue=isl.scaledNumber(pointData.value, dtTag.scale) || 0;
			}
			if(pointValue || nullItem) {
				if(!pData) {
					color=color || colors[pie.data.length-1];
					pData={
						name:name,
						label:webix.extend({textBorderColor:color}, whiteTextColorBorderShadow),
						itemStyle:webix.extend({color:color}, itemShadowStyle)
					};
					pie.data.push(pData);
				}
				if(option.legend.data.indexOf(name)<0) {
					option.legend.data.push(name);
				}
				pData['value']=pointValue;
				pData['time']=pointData.time;
			}
		}
		return pointValue;
	},

	//-------------------------gauge draw method-----------------------------
	//计算当前值应该属于仪表板的哪个值范围
	_draw11:function(pointStatus, chart, series, dtTag, tagString, color, name) {
		let value, vt;
		if(pointStatus || chart.nullItem) {
			if(pointStatus) {
				value=pointStatus.value;
				if(value && dtTag.scale) {
					value=isl.scaledNumber(value, dtTag.scale);
				}
				vt=new Date(pointStatus.time).format(isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[8]);
			}
			let s=chart.gauges[tagString];
			if(!s) {
				s={
					type:'gauge',
					name:dtTag.value,
					startAngle:180,
					endAngle:0,
					radius:'140%',
					pointer:showFalse,
					axisTick:axisTick11,
					splitLine:splitLine11,
					axisLine:axisLine11,
					itemStyle:{
						borderColor:'#FFF',
						shadowColor:'rgba(80,80,80, 0.3)',
						shadowBlur:4,
						shadowOffsetY:2
					},//动态设置颜色
					progress:{show:true},//动态设置
					axisLabel:{color:'#666'},//动态设置
					title:{//动态设置
						color:dtTag.color || colors[series.length],
						textBorderWidth:2,
						textShadowColor:'rgba(80,80,80, 0.3)',
						textShadowBlur:2,
						textShadowOffsetY:1,
						offsetCenter:titleOffsetCenter11
					},
					detail:{//动态设置
						color:dtTag.color || '#000',
						textBorderWidth:2,
						textShadowColor:'rgba(80,80,80, 0.3)',
						textShadowBlur:2,
						textShadowOffsetY:1,
						offsetCenter:detailOffsetCenter11,
						formatter:function(value) {
							return dtTag.value+'\n'+value+' '+(dtTag.unit || '');
						}
					},
					data:[{
						name:name,
						value:value,
						unit:dtTag.unit,
						time:vt || ''
					}]
				};
				if(chart.dataTags && chart.dataTags[dtTag.id]) {
					s.min=chart.dataTags[dtTag.id][0];
					s.max=chart.dataTags[dtTag.id][1];
				} else {
					s.min=0;
					s.max=100;
				}
				series.push(s);
				chart.gauges[tagString]=s;
			} else {
				s.data[0].value=value;
				s.data[0].time=vt;
			}
			let valueRange=value/s.max, i=gaugeLineValues.length-1;
			if(valueRange<=0) {
				s.itemStyle.color=gaugeLineColors[0];
			} else {
				while(i--) {
					if(valueRange>gaugeLineValues[i]) {
						s.itemStyle.color=gaugeLineColors[i];
						break;
					}
				}
			}
		}
	},

	//-------------------------build-----------------------------
	buildChart:function(chartCfg, rangeTags, groupTags, dataTags, refTags) {
		let me=this, chart=this.chart, option={
			//图表结构预处理
			backgroundColor:'#FFF'
		}, firstDataTag, firstRefTag;
		chart.clear();
		delete chart.shown;
		webix.extend(chart, chartCfg, true);
		chart.dataTags=(chart.dataTags && typeof chart.dataTags==='string')?JSON.parse(chart.dataTags):chart.dataTags;
		chart.refTags=(chart.refTags && typeof chart.refTags==='string')?JSON.parse(chart.refTags):chart.refTags;
		delete chart.dataTag;
		delete chart.refTag;
		delete chart.vertical;
		delete chart.gauges;
		//chart['reverse']=chartCfg.reverse;
		chart['rangeTags']=rangeTags;
		chart['groupTags']=groupTags;
		//只需要一个数据标签的图形
		firstDataTag=(dataTags && dataTags.length)?dataTags[0]:null;
		firstRefTag=(refTags && refTags.length)?refTags[0]:null;
		if(chart.type===11) {
			chart['dataTag']=firstDataTag || firstRefTag;
			chart['vertical']= !!firstRefTag;
			option['tooltip']=tooltip11;
		} else {
			let grid={
				left:0,
				right:0,
				bottom:25,
				top:70,
				color:0
			};
			option['legend']={
				itemWidth:16,
				itemHeight:16,
				textStyle:{
					padding:[0, 0, 0, -4]
				},
				type:'scroll',
				pageButtonPosition:'start',
				pageButtonItemGap:10
			};
			switch(chart.type) {
			case 13://实时曲线图
			case 3://时间图
				grid.bottom+=15;
				me._config3(option, dataTags, refTags, grid, chart.type>10?rtLineXAxis:[{
					axisTick:showFalse,
					type:'time', //scale:false,
					splitLine:showFalse,
					axisLabel:showFalse,
					axisPointer:trendLineXAxiPointer
				}]);
				chart.on('rendered', function() {
					me.lastBarPos.length=0;
				});
				chart.dataTags=(dataTags && dataTags.length)?dataTags:null;
				chart.refTags=(refTags && refTags.length)?refTags:null;
				delete chart.hasDataZoom;
				break;
			case 6://比例条形图
			case 16:
				chart['dataTag']=firstDataTag;
				chart['refTag']=firstRefTag;
				grid.right=24.01;
				grid.top=55;
				//实时条形图
				me._config6(option, grid, firstDataTag, firstRefTag);
				grid.left=24.01;
				chart.on('rendered', function() {
					me.lastBarPos.length=0;
				});
				break;
			case 17:
				chart['dataTag']=firstDataTag || firstRefTag;
				chart['rtValue']={};
				option['series']=[{
					type:'pie',
					avoidLabelOverlap:false,
					radius:['33.33%', '66.67%'],
					center:['50%', '53%'],
					roseType:'radius',
					label:{
						formatter:function(obj) {
							if(obj.data.label.position) {
								let unit=chart.dataTag.unit?(chart.dataTag.unit):'';
								return me._nReplace(chart.dataTag.value, chart.area?(unit?(unit+'\n'+chart.totalValue):chart.totalValue):unit);
							} else {
								return obj.value+'\n'+obj.percent+'%'+(chart.area?('\n'+obj.name):'');
							}
						}
					},
					data:[{
						label:{
							color:chart.dataTag.color || '#000',
							position:'center'
						},
						value:false
					}],
					animationType:'scale',
					animationEasing:'elasticOut',
					animationDelay:animationDelay
				}];
			case 7:
				chart['dataTag']=firstDataTag || firstRefTag;
				chart['vertical']= !!firstRefTag;
				//比例环形图
				option['tooltip']=tooltip7;
				if(!grid.right) {
					grid.right=24.01;
				}
				option.legend['data']=[];
				break;
			}
			delete grid.offs;
			delete grid.color;
		}
		if(typeof parent.dsBridge==='undefined' || !parent.dsBridge.hasNativeMethod('takePhoto')) {
			option['toolbox']=toolbox;
		}
		//console.log(JSON.stringify(option));
		chart['option']=option;
		chart['isReady']=true;
	},
	_selectLineYAxis:function(option, dtTag, chart) {
		let yAxis;
		if(option.yAxis.length>1) {//曲线颜色根据所属Y轴
			for(let yai=0, yaLen=option.yAxis.length; yai<yaLen; yai++) {
				let ya=option.yAxis[yai];
				if(ya.id===dtTag.id) {
					ya['indexNumber']=yai;
					yAxis=ya;
					break;
				}
			}
		} else {//只有一个y轴，各个曲线不同颜色
			yAxis=option.yAxis[0];
			yAxis['indexNumber']=0;
			if(yAxis.splitNumber!==1) {
				if(chart.dataType!==10) {
					dtTag['shape']=1;
				}
				if(!dtTag.color) {
					yAxis.axisLine.lineStyle.color='#000000';
				}
			}
		}
		//设置形状和颜色
		if(!dtTag.shapeIndex) {
			dtTag['shapeIndex']=[];
		} else {
			dtTag.shapeIndex.length=0;
		}
		yAxis.maxWidth=0;
		return yAxis;
	}, //-------------------------draw-----------------------------
	drawTrendData:function(userCfg, orgData) {
		if(!orgData) {
			return;
		}
		let chart=this.chart;
		if(chart.dataTag || chart.refTag || chart.dataTags || chart.refTags) {
			//处理显示选项
			this._setDrawProperty(userCfg, 'dataType');
			this._setDrawProperty(userCfg, 'timeSpan');
			this._setDrawProperty(userCfg, 'hour');
			this._setDrawProperty(userCfg, 'minute');
			this._setDrawProperty(userCfg, 'area');
			this._setDrawProperty(userCfg, 'duration');
			this._setDrawProperty(userCfg, 'nullItem');
			let json=orgData[chart.timeSpan+''], option=chart.option, times=json.times, pointData=json.points, comparisonData=json.comparison, //改变显示方式后，需要重置导出数据（累加和平均值都为相同显示方式）
				dataTypeX=chart.dataType-userCfg.dataType;
			if(!dataTypeX || Math.abs(dataTypeX)>5) {
				delete json.initExport;
				json['dataType']=userCfg.dataType;
			}
			let legendFmt, exportFmt, axisFmt;
			switch(chart.timeSpan) {
			case 1://'月'
				legendFmt=isl.locale.timeFormats[6]+'-'+isl.locale.timeFormats[2];
				exportFmt=isl.locale.timeFormats[1]+isl.locale.timeUnit[1];
				axisFmt=isl.locale.timeFormats[1]+isl.locale.timeUnit[1]+'\n'+isl.locale.timeFormats[0]+':'+isl.locale.timeFormats[5];
				break;
			case 2://'年'
				legendFmt=isl.locale.timeFormats[6];
				exportFmt=isl.locale.timeFormats[2]+isl.locale.timeUnit[2];
				axisFmt=isl.locale.timeFormats[2]+'\n'+isl.locale.timeFormats[1];
				break;
			case 3://'周'
				legendFmt=isl.locale.timeFormats[7];
				exportFmt=isl.locale.timeFormats[3];
				axisFmt=isl.locale.timeFormats[3]+isl.locale.timeFormats[0]+isl.locale.timeUnit[0]+'\n'+isl.locale.timeFormats[1]+isl.locale.timeUnit[1];
				break;
			case -1://'小时'
				if(!chart.minute || chart.minute===60) {
					legendFmt=isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[0];
					exportFmt=isl.locale.timeFormats[0]+':'+isl.locale.timeFormats[5];
				} else {
					legendFmt=isl.locale.timeFormats[7]+' '+isl.locale.timeFormats[0]+':'+isl.locale.timeFormats[5];
					exportFmt=isl.locale.timeFormats[8];
				}
				axisFmt=isl.locale.timeFormats[5]+':'+isl.locale.timeFormats[4];
				break;
			default ://'天'
				legendFmt=isl.locale.timeFormats[7];
				exportFmt=isl.locale.timeFormats[0]+isl.locale.timeUnit[0];
				axisFmt=isl.locale.timeFormats[0]+':'+isl.locale.timeFormats[5];
				break;
			}
			if(comparisonData) {
				let comparisonLen=comparisonData.length;
				while(comparisonLen--) {
					let comparison=comparisonData[comparisonLen];
					formatterDate.setTime(comparison.time);
					comparison['name']=formatterDate.format(legendFmt);
				}
				formatterDate.setTime(times[0]);
				comparisonData['currentName']=formatterDate.format(legendFmt);
			}
			json['fmt']=exportFmt;
			if(pointData) {
				let series=option.series, markSeries=[];
				series?series.length=0:option.series=series=[];
				chart['colorIndex']=0;
				if(chart.dataType!==10 && !pointData.tSumData) {
					pointData['tSumData']={};
				}
				switch(chart.type) {
				case 3:
					this._setDrawProperty(userCfg, 'minax');
					this._setDrawProperty(userCfg, 'avg');
					let xAxi=option.xAxis[0], hasOriginal=false, rangeTags=chart.rangeTags, groupTags=chart.groupTags, dataRefTags=chart.dataTags?(chart.refTags?chart.dataTags.concat(chart.refTags):chart.dataTags.concat()):chart.refTags.concat();
					chart['dataFmt']=exportFmt;
					//三种标签组合循环匹配点位数据
					for(let di=0, dl=dataRefTags.length; di<dl; di++) {
						let dtTag=dataRefTags[di], yAxis=this._selectLineYAxis(option, dtTag, chart);
						//处理比较数据
						if(comparisonData) {
							let comparisonLen=comparisonData.length;
							while(comparisonLen--) {
								let comparison=comparisonData[comparisonLen];
								//根据标签组合，处理每个点位的数据
								if(chart.reverse) {
									for(let ri=0, rl=rangeTags.length; ri<rl; ri++) {
										let rgTag=rangeTags[ri];
										for(let gi=0, gl=groupTags.length; gi<gl; gi++) {
											let gpTag=groupTags[gi];
											hasOriginal|=this._draw3(comparison.points, option, yAxis, dtTag, rgTag.id+'.'+gpTag.id+'.'+dtTag.id, rgTag.value+'_'+gpTag.value+'_'+dtTag.value, joinString(gpTag.value, rgTag.value, dtTag.value), gpTag.color || rgTag.color, json.vss, times, comparison.name);
										}
									}
								} else {
									for(let gi=0, gl=groupTags.length; gi<gl; gi++) {
										let gpTag=groupTags[gi];
										for(let ri=0, rl=rangeTags.length; ri<rl; ri++) {
											let rgTag=rangeTags[ri];
											hasOriginal|=this._draw3(comparison.points, option, yAxis, dtTag, rgTag.id+'.'+gpTag.id+'.'+dtTag.id, rgTag.value+'_'+gpTag.value+'_'+dtTag.value, joinString(rgTag.value, gpTag.value, dtTag.value), rgTag.color || gpTag.color, json.vss, times, comparison.name);
										}
									}
								}
							}
						}
						//根据标签组合，处理每个点位的数据
						if(chart.reverse) {
							for(let ri=0, rl=rangeTags.length; ri<rl; ri++) {
								let rgTag=rangeTags[ri];
								for(let gi=0, gl=groupTags.length; gi<gl; gi++) {
									let gpTag=groupTags[gi];
									hasOriginal|=this._draw3(pointData, option, yAxis, dtTag, rgTag.id+'.'+gpTag.id+'.'+dtTag.id, rgTag.value+'_'+gpTag.value+'_'+dtTag.value, joinString(gpTag.value, rgTag.value, dtTag.value), gpTag.color || rgTag.color, json.vss, times, comparisonData?comparisonData.currentName:null);
								}
							}
						} else {
							for(let gi=0, gl=groupTags.length; gi<gl; gi++) {
								let gpTag=groupTags[gi];
								for(let ri=0, rl=rangeTags.length; ri<rl; ri++) {
									let rgTag=rangeTags[ri];
									hasOriginal|=this._draw3(pointData, option, yAxis, dtTag, rgTag.id+'.'+gpTag.id+'.'+dtTag.id, rgTag.value+'_'+gpTag.value+'_'+dtTag.value, joinString(rgTag.value, gpTag.value, dtTag.value), rgTag.color || gpTag.color, json.vss, times, comparisonData?comparisonData.currentName:null);
								}
							}
						}
						//处理平均值数据
						if(chart.dataType===1) {
							let sName=dtTag.value;
							this._add3SumSeries(option, json.vss, dtTag, yAxis, sName, pointData);
							//处理比较数据
							if(comparisonData) {
								let comparisonLen=comparisonData.length;
								while(comparisonLen--) {
									let comparison=comparisonData[comparisonLen], cpName=comparison.name;
									this._add3SumSeries(option, json.vss, dtTag, yAxis, sName, comparison, cpName);
								}
							}
						}
						if(chart.markLine && json.vss) {
							//值状态元素
							this._buildLineStatus(option, markSeries, times, json.vss, dtTag, yAxis);
						}
						delete dtTag['shape'];
					}
					//根据数据动态设置Y轴宽度
					if(!this._resizeYAxisWidth(option.yAxis, option.grid)) {
						option.yAxis.push(timeYAxis);
					}
					let nullData=null, hasData=false, sLen=series.length, bars=[], timeXAxisLine, minTime=times[0], maxTime=times[times.length-1];
					//处理没有数据的线
					while(sLen--) {
						let s=series[sLen];
						if(s.id==='timeXAxisLine') {
							timeXAxisLine=s;
						}
						if(!s.data) {
							if(nullData==null) {
								nullData=[[xAxi.min, null]];
							}
							s['data']=nullData;
						} else {
							if(s.type==='line' && !s.smooth) {
								let i=s.data.length, firstData, previousData;
								while(i--) {
									if(i>0) {
										if(s.data[i][0]>maxTime) {
											if(s.step==='end') {
												s.data[i][0]=maxTime;
												s.data[i][1]=s.data[i-1][1];
											} else {
												s.data[i][1]-=NP.strip((s.data[i][1]-s.data[i-1][1])/(s.data[i][0]-s.data[i-1][0])*(s.data[i][0]-maxTime));
												s.data[i][0]=maxTime;
											}
											s.data[i].pop();
										} else {
											s.data[i].pop();
										}
										previousData=s.data[i];
									} else {
										s.data[i].pop();
										firstData=s.data[i];
									}
								}
								if(previousData && firstData && firstData[0]<minTime) {
									if(s.step==='end') {
										firstData[0]=minTime;
									} else {
										firstData[1]+=NP.strip((previousData[1]-firstData[1])/(previousData[0]-firstData[0])*(minTime-firstData[0]));
										firstData[0]=minTime;
									}
								}
							}
							hasData=true;
						}
						if(s.type==='bar') {
							bars.push(s);
						}
					}
					if(!series.length || bars.length) {
						option.tooltip.trigger='item';
						if(chart.gridBottom) {
							option.grid.bottom=chart.gridBottom;
							delete chart.gridBottom;
						}
						delete option.dataZoom;
						xAxi["boundaryGap"]=[-1, -1];
					} else {
						if(!chart.gridBottom) {
							chart.gridBottom=option.grid.bottom;
							option.grid.bottom+=35;
						}
						//逐条显示时是否含有实时数据
						if(hasOriginal) {//设置X轴显示范围
							option.tooltip.trigger='item';
							option.dataZoom=fullDataZoom;
						} else {
							option.tooltip.trigger='axis';
							option.dataZoom=filterDataZoom;
						}
					}
					//处理Y轴0的最小值，用于显示时间轴
					let viewWidth=this.$width-option.grid.left-option.grid.right, fmtSize=isl.getLabelWidth(new Date(maxTime).format(axisFmt)), timeCount=Math.min(times.length, Math.max(2, Math.floor(viewWidth/fmtSize))), jump=Math.ceil(times.length/timeCount), timeData=[];
					for(let i=0; i<timeCount; i++) {
						if(times[i*jump]) {
							timeData.push([times[i*jump], 0, axisFmt]);
						}
					}
					if(!timeXAxisLine) {
						timeXAxisLine={
							id:'timeXAxisLine',
							type:'line',
							itemStyle:{color:'black'},
							lineStyle:{width:0},
							hoverAnimation:false,
							animation:false,
							emphasis:{silent:true},
							symbolSize:1,
							symbolOffset:[0, 2],
							yAxisIndex:option.yAxis.length-1,
							label:{
								show:true,
								position:'bottom',
								align:'center',
								verticalAlign:'top',
								formatter:function(val) {
									return new Date(val.data[0]).format(val.data[2]);
								}
							}
						};
						series.push(timeXAxisLine);
					}
					timeXAxisLine['data']=timeData;
					//处理柱状图的最大宽度
					if(chart.dataType===10 && !chart.area) {
						sLen=bars.length;
						let barMaxWidth=viewWidth/sLen/times.length;
						while(sLen--) {
							bars[sLen]['barMaxWidth']=barMaxWidth;
						}
					}
					if(hasData) {
						delete xAxi.splitNumber;
					} else {
						xAxi['splitNumber']=1;
					}
					if(markSeries.length) {
						option.series=series.concat(markSeries);
					}
					break;
				case 6://条形图
					option.yAxis.data.length=0;
					//再处理比较数据
					if(comparisonData) {
						//先处理当前数据
						this._draw6(json, option, pointData, comparisonData.currentName);
						//再处理对比数据
						for(let cpi=0, cpl=comparisonData.length; cpi<cpl; cpi++) {
							let comparison=comparisonData[cpi];
							this._draw6(json, option, comparison.points, comparison.name, cpi+1);
						}
					} else {
						//处理当前数据
						this._draw6(json, option, pointData);
					}
					let l=series.length, i=0;
					if(chart.multiData) {
						chart.multiData.length=0;
					} else {
						chart['multiData']=[];
					}
					while(l--) {
						series[l].zlevel=i++;
						for(let di=0; di<series[l].data.length; di++) {
							if(!chart.multiData[di]) {
								chart.multiData[di]=0;
							}
							if(series[l].data[di]) {
								chart.multiData[di]+=1;
							}
						}
					}
					break;
				case 7:
					//环形图
					delete option.legend.orient;
					delete option.legend.top;
					delete option.legend.left;
					option.series.length=0;
					option.legend.data.length=0;

					let vertical=this.chart.vertical, vss=json.vss;
					if(comparisonData) {
						let ti=1, tl=comparisonData.length+1, radius=tl*1.5, offset=this._getPiePosOffset(0, tl, option.legend.orient);
						//先处理当前数据
						this._draw7(option, vss, pointData, vertical?['50%', offset+'%']:[offset+'%', '50%'], radius, comparisonData.currentName);
						for(; ti<tl; ti++) {
							offset=this._getPiePosOffset(ti, tl, option.legend.orient);
							let comparison=comparisonData[ti-1];
							//再处理比较数据
							this._draw7(option, vss, comparison.points, vertical?['50%', offset+'%']:[offset+'%', '50%'], radius, comparison.name);
						}
					} else {
						//直接处理当前数据
						this._draw7(option, vss, pointData, ['50%', '50%'], 1.5);
					}
					break;
				}
			}
			if(chart.shown) {
				chart.clear();
			}
			//console.log(JSON.stringify(option));
			chart.setOption(option);
			chart['shown']=true;
		}
	},
	drawStatus:function(userCfgs, jdata) {
		let chart=this.chart, option=chart.option, series, dtTag, gl, gi, rl, ri, rangeTags=chart.rangeTags, groupTags=chart.groupTags;
		if(!option.series) {
			option.series=[];
		}
		series=option.series;
		chart['colorIndex']=0;
		if(!chart.gauges) {
			chart.gauges=[];
		}
		this._setDrawProperty(userCfgs, 'timeSpan');
		this._setDrawProperty(userCfgs, 'area');
		switch(chart.type) {
		case 11://仪表盘
			// this._setDrawProperty(userCfgs, 'nullItem');
			dtTag=chart.dataTag;
			let vertical=chart.vertical, seriesCount=series.length;
			// if(seriesCount) {
			// 	let l=seriesCount/2;
			// 	gaugeMarkLines=series.splice(l, l);
			// } else {
			// 	gaugeMarkLines=[];
			// }
			if(chart.reverse) {
				for(ri=0, rl=rangeTags.length; ri<rl; ri++) {
					let rgTag=rangeTags[ri];
					for(gi=0, gl=groupTags.length; gi<gl; gi++) {
						let gpTag=groupTags[gi], tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id;//tagString
						this._draw11(jdata[tagString], chart, series, dtTag, tagString, gpTag.color || rgTag.color, joinString(gpTag.value, rgTag.value));
					}
				}
			} else {
				for(gi=0, gl=groupTags.length; gi<gl; gi++) {
					let gpTag=groupTags[gi];
					for(ri=0, rl=rangeTags.length; ri<rl; ri++) {
						let rgTag=rangeTags[ri], tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id;//tagString
						this._draw11(jdata[tagString], chart, series, dtTag, tagString, rgTag.color || gpTag.color, joinString(rgTag.value, gpTag.value));
					}
				}
			}

			seriesCount=series.length;
			let sizeCoeff=(vertical?chart.getWidth():chart.getHeight())/Math.max(seriesCount, 2)/17;
			for(let n=0; n<seriesCount; n++) {
				let s=series[n];
				if(vertical) {
					s['center']=['50%', (n+1)*(100/seriesCount)*0.95+'%'];
				} else {
					s['center']=[(2*n+1)*(100/seriesCount/2)+'%', '95%'];
				}
				s.axisLabel.fontSize=sizeCoeff*2;
				s.axisLabel.distance=-5-(s.max+'').length*s.axisLabel.fontSize*0.65;

				s.title.fontSize=s.detail.fontSize=sizeCoeff*2;
				s.detail.lineHeight=s.detail.fontSize;
				s.progress.width=sizeCoeff*7;//宽度
			}
			break;
		case 13:
			this._setDrawProperty(userCfgs, 'minax');
			this._setDrawProperty(userCfgs, 'avg');
			if(!chart.maxTime) {
				chart['maxTime']=0;
			}
			let dataRefTags=chart.dataTags?(chart.refTags?chart.dataTags.concat(chart.refTags):chart.dataTags.concat()):chart.refTags.concat(), newTime=0;
			//三种标签组合循环匹配点位数据
			for(let di=0, dl=dataRefTags.length; di<dl; di++) {
				dtTag=dataRefTags[di];
				let yAxis=this._selectLineYAxis(option, dtTag, chart);
				//根据标签组合，处理每个点位的数据
				if(chart.reverse) {
					for(ri=0, rl=rangeTags.length; ri<rl; ri++) {
						let rgTag=rangeTags[ri];
						for(gi=0, gl=groupTags.length; gi<gl; gi++) {
							let gpTag=groupTags[gi], tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id;

							newTime=this._draw13(jdata[tagString], chart, series, dtTag, tagString, joinString(gpTag.value, rgTag.value, dtTag.value), gpTag.color || rgTag.color, yAxis, newTime);
						}
					}
				} else {
					for(gi=0, gl=groupTags.length; gi<gl; gi++) {
						let gpTag=groupTags[gi];
						for(ri=0, rl=rangeTags.length; ri<rl; ri++) {
							let rgTag=rangeTags[ri], tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id;
							newTime=this._draw13(jdata[tagString], chart, series, dtTag, tagString, joinString(rgTag.value, gpTag.value, dtTag.value), rgTag.color || gpTag.color, yAxis, newTime);
						}
					}
				}
			}
			if(chart.stepEndLines) {
				for(let si=0, sl=chart.stepEndLines.length; si<sl; si++) {
					let s=chart.stepEndLines[si], lastData=s.data[s.data.length-1];
					if(lastData[0]<newTime) {
						if(s.insertDummy) {
							s.insertDummy[0]=newTime;
						} else {
							s['insertDummy']=[newTime, lastData[1]];
							s.data.push(s.insertDummy);
						}
					}
				}
			}
			//清理小于最小时间的数据3600000
			let minTime=chart.maxTime-line13XAxisRanges[chart.timeSpan+''], limit=chart.maxTime-line13XAxisRanges['2'];//仅显示1小时之内的数据
			for(let si=0, sl=series.length; si<sl; si++) {
				let data=series[si].data, len=data.length;
				if(len) {
					while(len--) {
						if(data[0][0]<=limit) {
							data.shift();
						} else {
							break;
						}
					}
				}
				if(!data.length) {
					data.push([minTime, null]);
				}
			}
			//x轴的刻度
			let xAxi=option.xAxis[0];
			xAxi['min']=minTime;
			xAxi['max']=chart.maxTime;
			//根据数据动态设置Y轴宽度
			this._resizeYAxisWidth(option.yAxis, option.grid);
			break;
		case 16:
			option.yAxis.data.length=0;
			let yAxisTags=chart.reverse?groupTags:rangeTags;
			if(!option.yAxis.data.length && yAxisTags) {
				yAxisTags.reverse();
				for(let i=0; i<yAxisTags.length; i++) {
					let yAxisTag=yAxisTags[i], tgValue=yAxisTag.value, newWidth=isl.getLabelWidth(tgValue)+20;
					option.yAxis.data.push({
						value:tgValue,
						textStyle:{
							color:yAxisTag.color
						}
					});
					if(newWidth>option.grid.left) {
						//重新计算偏移宽度
						option.grid.left=newWidth;
					}
				}
			}
			let dataTagIndex=1, refTagIndex=0;
			if(option.xAxis[0].position==='top') {
				dataTagIndex=0;
				refTagIndex=1;
			}
			//分别处理上下X轴的数据
			if(chart.dataTag) {
				this._add16Series(jdata, option, chart.dataTag, dataTagIndex, false, !chart.refTag);
			}
			if(chart.refTag) {
				this._add16Series(jdata, option, chart.refTag, refTagIndex, false, !chart.dataTag);
			}
			yAxisTags.reverse();
			let l=series.length, i=0;
			if(chart.multiData) {
				chart.multiData.length=0;
			} else {
				chart['multiData']=[];
			}

			while(l--) {
				series[l].zlevel=i++;
				for(let di=0; di<series[l].data.length; di++) {
					if(!chart.multiData[di]) {
						chart.multiData[di]=0;
					}
					if(series[l].data[di]) {
						chart.multiData[di]+=1;
					}
				}
			}
			break;
		case 17:
			dtTag=chart.dataTag;
			let pie=option.series[0];
			//根据标签组合，处理每个点位的数据
			if(chart.reverse) {
				for(ri=0, rl=rangeTags.length; ri<rl; ri++) {
					let rgTag=rangeTags[ri];
					for(gi=0, gl=groupTags.length; gi<gl; gi++) {
						let gpTag=groupTags[gi], tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id;
						chart.rtValue[tagString]=Math.max(chart.rtValue[tagString] || 0, this._draw17(option, jdata[tagString], pie, chart.nullItem, joinString(gpTag.value, rgTag.value), dtTag, gpTag.color || rgTag.color));
					}
				}
			} else {
				for(gi=0, gl=groupTags.length; gi<gl; gi++) {
					let gpTag=groupTags[gi];
					for(ri=0, rl=rangeTags.length; ri<rl; ri++) {
						let rgTag=rangeTags[ri], tagString=rgTag.id+'.'+gpTag.id+'.'+dtTag.id;
						chart.rtValue[tagString]=Math.max(chart.rtValue[tagString] || 0, this._draw17(option, jdata[tagString], pie, chart.nullItem, joinString(rgTag.value, gpTag.value), dtTag, rgTag.color || gpTag.color));
					}
				}
			}
			chart['totalValue']=0;
			for(let k in chart.rtValue) {
				chart.totalValue=NP.plus(chart.totalValue, chart.rtValue[k]);
			}
			chart.totalValue=isl.scaledNumber(chart.totalValue, dtTag.scale);
			break;
		}
		//console.log(JSON.stringify(option));
		chart.setOption(option, true);
	}
}, webix.ui.view);