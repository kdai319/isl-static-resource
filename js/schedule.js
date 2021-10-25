'use strict';
(function() {
	let weekDayNames=webix.calendar.dayShort, yearMonthNames=[{
		id:60,
		value:isl.locale.app.schedule.options.yearMonth[0]
	}], monthDayNames=[{
		id:60,
		value:isl.locale.app.schedule.options.monthDay[0]
	}], hourNames=[{
		id:60,
		value:isl.locale.app.schedule.options.each+isl.locale.app.schedule.options.hour[0]
	}], minuteNames=[{
		id:60,
		value:isl.locale.app.schedule.options.each+isl.locale.app.schedule.options.minute[0]
	}], secondNames=[{
		id:60,
		value:isl.locale.app.schedule.options.each+isl.locale.app.schedule.options.second[0]
	}];
	for(let i=1; i<13; i++) {
		yearMonthNames.push({
			id:i,
			value:isl.locale.app.schedule.options.yearMonth[i]
		});
	}
	for(let i=1; i<6; i++) {
		monthDayNames.push({
			id:60+i,
			value:isl.locale.app.schedule.options.monthDay[i]
		});
	}
	monthDayNames.push({
		id:35,
		value:isl.locale.app.schedule.options.monthDay[6]
	});
	for(let i=1; i<32; i++) {
		monthDayNames.push({
			id:i,
			value:i+isl.locale.app.schedule.options.monthDay[7]
		});
	}
	for(let i=2; i<24; i++) {
		hourNames.push({
			id:60+i,
			value:isl.locale.app.schedule.options.each+i+' '+isl.locale.app.schedule.options.hour[0]+isl.locale.app.schedule.options.s
		});
	}
	for(let i=0; i<24; i++) {
		hourNames.push({
			id:i,
			value:(i>9?i:'0'+i)+isl.locale.app.schedule.options.hour[1]
		});
	}
	for(let i=2; i<60; i++) {
		minuteNames.push({
			id:60+i,
			value:isl.locale.app.schedule.options.each+i+' '+isl.locale.app.schedule.options.minute[0]+isl.locale.app.schedule.options.s
		});
	}
	for(let i=0; i<60; i++) {
		minuteNames.push({
			id:i,
			value:(i>9?i:'0'+i)+isl.locale.app.schedule.options.minute[1]
		});
	}
	for(let i=2; i<60; i++) {
		secondNames.push({
			id:60+i,
			value:isl.locale.app.schedule.options.each+i+' '+isl.locale.app.schedule.options.second[0]+isl.locale.app.schedule.options.s
		});
	}
	for(let i=0; i<60; i++) {
		secondNames.push({
			id:i,
			value:(i>9?i:'0'+i)+isl.locale.app.schedule.options.second[1]
		});
	}

	let weekDayCheckboxes=[{width:0}], isLowResolution=isl.isLowResolution();
	for(let wi=0, wl=weekDayNames.length; wi<wl; wi++) {
		let wdn=weekDayNames[wi];
		weekDayCheckboxes.push({
			name:wdn,
			view:'checkbox',
			defaultValue:true,
			label:isl.locale.app.schedule[wdn+(isLowResolution?'1':'')],
			on:{
				onChange:function(newv) {
					if(newv) {
						let form=this.getFormView(), v=form.elements['monthDay'].getValue();
						if(v!==60) {
							let weekDayValues={};
							for(let wi=0, wl=weekDayNames.length; wi<wl; wi++) {
								if(weekDayNames[wi]!==this.config.name) {
									weekDayValues[weekDayNames[wi]]=false;
								}
							}
							form.setValues(weekDayValues, true);
						}
					}
				}
			}
		}, {minWidth:0});
	}

	isl['schedule']={
		cronGridTemplate:function(o) {
			if(o.duration===0) {
				return isl.locale.app.schedule.alltime;
			} else {
				let data=isl.schedule.cronToObj(o.cron), result=[];
				if(data.yearMonth<60) {
					result.push(isl.getOptionValue(yearMonthNames, data.yearMonth));
					result.push(', ');
				}
				result.push(isl.getOptionValue(monthDayNames, data.monthDay));
				if(data.monthDay>59) {
					let fullWeekDay=true, len=result.length;
					result.push('[');
					for(let i=0; i<weekDayNames.length; i++) {
						if(data[weekDayNames[i]]) {
							result.push(isl.locale.app.schedule[weekDayNames[i]], ',');
						} else {
							fullWeekDay=false;
						}
					}
					if(!fullWeekDay) {
						result.pop();
						result.push(']');
					} else {
						result.length=len-1;
						result.push(isl.locale.app.schedule.options.allDay);
					}
				}
				result.push(', ');
				result.push(isl.getOptionValue(hourNames, data.hour));
				result.push(data.hour>23 || data.minute>59?', ':':');
				result.push(isl.getOptionValue(minuteNames, data.minute));
				result.push(data.minute>59 || data.second>59?', ':':');
				result.push(isl.getOptionValue(secondNames, data.second));
				if(o.duration) {
					result.push(' = ', o.duration, 's');
				}
				return result.join('');
			}
		},
		objToCronString:function(rs) {
			//CRON 条件转换
			let cronValue='', tVal, hasNull=false;
			//秒
			tVal=rs['second'] || 0;
			delete rs.second;
			if(tVal>59) {
				tVal-=60;
				if(tVal===0) {
					cronValue+='*';
				} else {
					cronValue+='0/'+tVal;
				}
			} else {
				hasNull|=tVal===null;
				if(!hasNull) {
					cronValue+=tVal;
				}
			}
			//分钟
			tVal=rs['minute'] || 0;
			delete rs.minute;
			if(tVal>59) {
				tVal-=60;
				if(tVal===0) {
					cronValue+=' *';
				} else {
					cronValue+=' 0/'+tVal;
				}
			} else {
				hasNull|=tVal===null;
				if(!hasNull) {
					cronValue+=' '+tVal;
				}
			}
			//小时
			tVal=rs['hour'] || 0;
			delete rs.hour;
			if(tVal>59) {
				tVal-=60;
				if(tVal===0) {
					cronValue+=' *';
				} else {
					cronValue+=' 0/'+tVal;
				}
			} else {
				hasNull|=tVal===null;
				if(!hasNull) {
					cronValue+=' '+tVal;
				}
			}
			//月份中的天（60代表*每周，61代表第一周，62代表第二周，63代表第三周，64代表第四周，65代表最后一周，35代表最后一天） ? * ?
			tVal=rs['monthDay'];
			delete rs.monthDay;
			let weekDay='';
			if(tVal===60) {
				let x=' ';
				//每周可以指定多天,以逗号间隔
				for(let i=0; i<weekDayNames.length; i++) {
					if(rs[weekDayNames[i]]) {
						weekDay+=x+(i+1);
						x=',';
					}
				}
				if(' 1,2,3,4,5,6,7'===weekDay || !weekDay) {
					cronValue+=' *';
					weekDay=' ?';
				} else {
					cronValue+=' ?';
				}
			} else if(tVal>60) {
				tVal-=60;
				let w, x=' ';
				if(tVal===5) {
					w='L';
				} else {
					w='#'+tVal;
				}
				//指定第几周或最后一周，只能做其中一天
				for(let i=0; i<weekDayNames.length; i++) {
					if(rs[weekDayNames[i]]) {
						weekDay+=x+(i+1)+w;
						break;
					}
				}
				if(!weekDay) {
					weekDay=' ?';
				}
				cronValue+=' ?';
			} else if(tVal===35) {
				weekDay=' ?';
				cronValue+=' L';
			} else {
				weekDay=' ?';
				hasNull|=tVal===null;
				if(!hasNull) {
					cronValue+=' '+tVal;
				}
			}
			for(let i=0; i<weekDayNames.length; i++) {
				delete rs[weekDayNames[i]];
			}
			//年份中的月（0代表*）
			tVal=rs['yearMonth'];
			delete rs.yearMonth;
			if(tVal===60) {
				cronValue+=' *';
			} else {
				hasNull|=tVal===null;
				if(!hasNull) {
					cronValue+=' '+tVal;
				}
			}
			if(cronValue) {
				cronValue+=weekDay;
			}
			if(hasNull) {
				return null;
			} else {
				return cronValue;
			}
		},
		cronToObj:function(str) {
			if(!str) {
				return {
					second:60,
					minute:60,
					hour:60,
					monthDay:60,
					yearMonth:60,
					'sun':1,
					'mon':1,
					'tus':1,
					'wed':1,
					'thu':1,
					'fri':1,
					'sat':1
				};
			}
			let obj={}, indexOf, cronSegments=str.split(' '), sec=cronSegments[0], min=cronSegments[1], hour=cronSegments[2], dom=cronSegments[3], m=cronSegments[4], dow=cronSegments[5];
			indexOf=min.indexOf('/');
			if(indexOf>0) {
				obj['second']=parseInt(sec.substring(indexOf+1, sec.length))+60;
			} else if(sec==='*') {
				obj['second']=60;
			} else {
				obj['second']=parseInt(sec);
			}

			indexOf=min.indexOf('/');
			if(indexOf>0) {
				obj['minute']=parseInt(min.substring(indexOf+1, min.length))+60;
			} else if(min==='*') {
				obj['minute']=60;
			} else {
				obj['minute']=parseInt(min);
			}

			indexOf=hour.indexOf('/');
			if(indexOf>0) {
				obj['hour']=parseInt(hour.substring(indexOf+1, hour.length))+60;
			} else if(hour==='*') {
				obj['hour']=60;
			} else {
				obj['hour']=parseInt(hour);
			}
			//月份中的天（60代表*每周，61代表第一周，62代表第二周，63代表第三周，64代表第四周，65代表最后一周，35代表最后一天） ? * ?
			if(dom==='L') {
				obj['monthDay']=35;
			} else if(dom==='*' || dom==='?') {
				obj['monthDay']=60;
				if(!dow || dow==='?') {
					for(let i=0; i<weekDayNames.length; i++) {
						obj[weekDayNames[i]]=true;
					}
				} else {
					let days=dow.split(',');
					for(let i=0; i<days.length; i++) {
						let dn=parseInt(days[i].charAt(0));
						if(dn && weekDayNames[dn-1]) {
							obj[weekDayNames[dn-1]]=true;
						}
						if(days[i].charAt(1)==='L') {
							obj['monthDay']=65;
						} else {
							let wn=parseInt(days[i].charAt(2));
							if(wn) {
								obj['monthDay']=60+wn;
							}
						}
					}
				}
			} else {
				obj['monthDay']=parseInt(dom);
			}
			if(m==='*') {
				obj['yearMonth']=60;
			} else {
				obj['yearMonth']=parseInt(m);
			}
			return obj;
		},
		getTimeElements:function(addElement) {
			let result=[{
				name:'id',
				view:'text',
				hidden:true
			}, {
				name:'name',
				view:'text',
				span:true,
				rule:webix.rules.isNotEmpty,
				label:isl.locale.app.schedule.name
			}, {
				name:'beginDate',
				view:'datetime',
				minWidth:200,
				label:isl.locale.app.schedule.dateRange,
				defaultValue:new Date(new Date().setHours(0, 0, 0)),
				rule:function(value, data) {
					return !value || !data.endDate || value<=data.endDate;
				}
			}, {
				name:'endDate',
				view:'datetime',
				label:'~',
				defaultValue:new Date(new Date().setHours(23, 59, 59)),
				rule:function(value, data) {
					return !value || !data.beginDate || value>=data.beginDate;
				}
			}, {
				name:'yearMonth',
				view:'richselect',
				defaultValue:60,
				minWidth:210,
				rule:webix.rules.isNotEmpty,
				label:isl.locale.app.schedule.date,
				options:yearMonthNames
			}, {
				name:'monthDay',
				view:'richselect',
				defaultValue:60,
				label:'\\',
				options:monthDayNames,
				rule:webix.rules.isNotEmpty,
				on:{
					onChange:function(newv) {
						if(newv>=60) {
							$$('weekDaySet').enable();
							if(newv!==60) {
								let weekDayValues={};
								for(let wi=0, wl=weekDayNames.length; wi<wl; wi++) {
									weekDayValues[weekDayNames[wi]]=false;
								}
								this.getFormView().setValues(weekDayValues, true);
							}
						} else {
							$$('weekDaySet').disable();
						}
					}
				}
			}, {
				id:'weekDaySet',
				span:true,
				cols:weekDayCheckboxes
			}, {
				id:'timeSet',
				span:true,
				rows:[{
					responsive:'timeSet',
					cols:[{
						name:'hour',
						view:'richselect',
						minWidth:210,
						defaultValue:60,
						label:isl.locale.app.schedule.time,
						options:hourNames,
						on:{
							onChange:function(newv) {
								if(newv<=60) {
									let m=$$('minute');
									m.enable();
									if(m.getValue()<=60) {
										$$('second').enable();
									}
								} else {
									let m=$$('minute');
									m.setValue(0);
									m.disable();
									let s=$$('second');
									s.setValue(0);
									s.disable();
								}
							}
						}
					}, {
						id:'minute',
						name:'minute',
						view:'richselect',
						label:':',
						labelWidth:7,
						minWidth:110,
						defaultValue:0,
						options:minuteNames,
						on:{
							onChange:function(newv) {
								if(newv<=60) {
									$$('second').enable();
								} else {
									let s=$$('second');
									s.setValue(0);
									s.disable();
								}
							}
						}
					}, {
						id:'second',
						name:'second',
						view:'richselect',
						label:':',
						labelWidth:7,
						minWidth:110,
						defaultValue:0,
						options:secondNames
					}]
				}]
			}];
			if(addElement) {
				result.push(addElement);
			}
			return result;
		}
	};
})();