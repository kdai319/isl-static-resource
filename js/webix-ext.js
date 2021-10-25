window.NP = (function (exports) {
	'use strict';
	/**
	 * 把错误的数据转正
	 */
	function strip(num, precision) {
		if (precision === void 0) { precision = 12; }
		return +parseFloat(num.toPrecision(precision));
	}
	/**
	 * Return digits length of a number
	 * @param {*number} num Input number
	 */
	function digitLength(num) {
		// Get digit length of e
		let eSplit = num.toString().split(/[eE]/);
		let len = (eSplit[0].split('.')[1] || '').length - (+(eSplit[1] || 0));
		return len > 0 ? len : 0;
	}
	/**
	 * 把小数转成整数，支持科学计数法。如果是小数则放大成整数
	 * @param {*number} num 输入数
	 */
	function float2Fixed(num) {
		if (num.toString().indexOf('e') === -1) {
			return Number(num.toString().replace('.', ''));
		}
		let dLen = digitLength(num);
		return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num;
	}
	/**
	 * 检测数字是否越界，如果越界给出提示
	 * @param {*number} num 输入数
	 */
	// function checkBoundary(num) {
	// 	if (_boundaryCheckingState) {
	// 		if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
	// 			console.warn(num + " is beyond boundary when transfer to integer, the results may not be accurate");
	// 		}
	// 	}
	// }
	/**
	 * 精确乘法
	 */
	function times(num1, num2) {
		let others = [];
		for (let _i = 2; _i < arguments.length; _i++) {
			others[_i - 2] = arguments[_i];
		}
		if (others.length > 0) {
			return times.apply(void 0, [times(num1, num2), others[0]].concat(others.slice(1)));
		}
		let num1Changed = float2Fixed(num1);
		let num2Changed = float2Fixed(num2);
		let baseNum = digitLength(num1) + digitLength(num2);
		let leftValue = num1Changed * num2Changed;
		//checkBoundary(leftValue);
		return leftValue / Math.pow(10, baseNum);
	}
	/**
	 * 精确加法
	 */
	function plus(num1, num2) {
		let others = [];
		for (let _i = 2; _i < arguments.length; _i++) {
			others[_i - 2] = arguments[_i];
		}
		if (others.length > 0) {
			return plus.apply(void 0, [plus(num1, num2), others[0]].concat(others.slice(1)));
		}
		let baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
		return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
	}
	/**
	 * 精确减法
	 */
	function minus(num1, num2) {
		let others = [];
		for (let _i = 2; _i < arguments.length; _i++) {
			others[_i - 2] = arguments[_i];
		}
		if (others.length > 0) {
			return minus.apply(void 0, [minus(num1, num2), others[0]].concat(others.slice(1)));
		}
		let baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
		return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
	}
	/**
	 * 精确除法
	 */
	function divide(num1, num2) {
		let others = [];
		for (let _i = 2; _i < arguments.length; _i++) {
			others[_i - 2] = arguments[_i];
		}
		if (others.length > 0) {
			return divide.apply(void 0, [divide(num1, num2), others[0]].concat(others.slice(1)));
		}
		let num1Changed = float2Fixed(num1);
		let num2Changed = float2Fixed(num2);
		//checkBoundary(num1Changed);
		//checkBoundary(num2Changed);
		// fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
		return times((num1Changed / num2Changed), strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
	}
	/**
	 * 四舍五入
	 */
	function round(num, ratio) {
		let base = Math.pow(10, ratio);
		return divide(Math.round(times(num, base)), base);
	}
	let _boundaryCheckingState = true;
	/**
	 * 是否进行边界检查，默认开启
	 * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
	 */
	function enableBoundaryChecking(flag) {
		if (flag === void 0) { flag = true; }
		_boundaryCheckingState = flag;
	}
	let index = { strip: strip, plus: plus, minus: minus, times: times, divide: divide, round: round, digitLength: digitLength, float2Fixed: float2Fixed, enableBoundaryChecking: enableBoundaryChecking };
	exports.strip = strip;
	exports.plus = plus;
	exports.minus = minus;
	exports.times = times;
	exports.divide = divide;
	exports.round = round;
	exports.digitLength = digitLength;
	exports.float2Fixed = float2Fixed;
	exports.enableBoundaryChecking = enableBoundaryChecking;
	exports['default'] = index;
	return exports;
}({}));
(function() {
	//-----------------------------------------------webix-----------------------------------------------
	webix.skin.mini.barHeight=36;
	webix.skin.mini.tabbarHeight=34;
	webix.skin.mini.rowHeight=28;
	webix.skin.mini.listItemHeight=28;
	webix.skin.mini.inputHeight=30;
	webix.skin.mini.layoutMargin.wide=5;
	webix.skin.mini.layoutMargin.space=5;
	webix.skin.mini.layoutPadding.space=5;
	webix.skin.set('mini');
	function M(t) {
		return (M='function'== typeof Symbol && 'symbol'== typeof Symbol.iterator?
			function(t) {
				return typeof t;
			}:function(t) {
				return t && 'function'== typeof Symbol && t.constructor===Symbol && t!==Symbol.prototype?'symbol':typeof t;
			})(t);
	}
	function Ct(t) {
		if(!t) return '';
		let i=t.className || '';
		return i.baseVal && (i=i.baseVal), i.indexOf || (i=''), i;
	}
	function ot(node) {//index
		let k = 0;
		while (node = node.previousSibling) {
			k++;
		}
		return k;
	}

	let _ready=false, _ready_code=[],
	doit=function() {
		_ready=true;
		if(window.webix_ready && isArray(window.webix_ready)) {
			for(let i=0; i<window.webix_ready.length; i++) {
				window.webix_ready[i].call();
			}
		}
		for(let i=0; i<_ready_code.length; i++) {
			let readyCfg=_ready_code[i];
			if(readyCfg[1]) {
				readyCfg[0].call(null, readyCfg[1]);
			} else {
				readyCfg.call();
			}
		}
		_ready_code=[];
	};
	webix.attachEvent('onReady', function(force) {
		if(force) doit(); else webix.delay(doit);
	});
		webix.ready=function(code, args) {
			if(_ready) {
				if(args) {
					code.call(null, args);
				} else {
					code.call();
				}
			} else {
				if(args) {
					_ready_code.push([code, args]);
				} else {
					_ready_code.push(code);
				}
			}
		},
		webix.isPort = function(value) {
			if(typeof value === 'string') {
				value = parseFloat(value);
			}
			return value > 0 && value < 65536;
		},
		webix.isIPOrNone = function(value) {
			return !value || webix.isIP(value);
		},
		webix.isPortOrNone = function(value) {
			return !value || webix.isPort(value);
		},
		webix.isIP = function(value) {
			return value && /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value);
		},
		webix.getIconPopupCfg=function(pid){
			return {
				height:250,
				view:"popup",
				type:'icon',
				body:isl.panels({
					id:pid+'_idv',
					view:"dataview",
					scrollY:true,
					filter:true,
					info:false,
					xCount:5,
					type:{
						width:40,
						height:27
					},
					template:'<span style="padding-top:2px;" class="webix_icon #id#"></span>',
					data:isl.icons,
					on:{
						onItemClick:function(id){
							this.getParentView().hide();
							let iconView=$$(this.getParentView().getParentView().config.master);
							if(iconView.getValue() === id) {
								iconView.setValue(null);
							} else {
								iconView.setValue(id);
							}
						}
					}
				}),
				on:{
					onShow:function(){
						let id=$$(this.config.master).getValue();
						if(id) {
							isl.selectNode($$(pid+'_idv'), id);
						}
					},
					onKeyPress:function(code){
						if(code === 46 || code === 8) {
							$$(this.config.master).setValue(null);
						}
					}
				}
			}
		},
		webix.extend = function(t, i, e) {
			if (!t||!i) {return t||i;}//
			if(t.$protoWait) return webix.FA//x 从 H.FA=x, 找到x的混淆名字
				.insertAt.call(t.$protoWait, i, 1), t;
			for(let s in i) s in t && !e || (t[s]=i[s]);
			return i.defaults &&
			webix//H
				.extend(t.defaults, i.defaults), i.$init && i.$init.call(t), t;
		},
		//W.binary=E
		webix.proxy.binary.load=function() {
			let i=this.source.split('@'), e=i[0].split('.').pop();
			return webix.ajax()//return B()  从 H.ajax=B, 找到B的混淆名字
			.response('arraybuffer').get(i[0]).then(function(t) {
				return {
					data:t,
					options:{
						ext:e,
						dataurl:i[1]
					}
				};
			})
			.fail(isl.ajaxError)//
		},
		//W.json=N, W.rest=j
		webix.proxy.json.load=webix.proxy.rest.load=function(p,i) {//p,i
			return webix.ajax(this.source
				,webix.extend(i, p.params)//
			);
		},

		webix.ajax.prototype['S']=function(t, i, s, e) {
			let n;
			let ps = (i && i.params) ? i.params: (s ? s.params: (this.master ? this.master.params: null));
			let tk = webix.storage.local.get("ftk");//
			if (tk) {
				if(!ps) {
					ps = {};
				}
				ps['ftk'] = tk;
			}
			//
			i && (
				webix.isArray(i)//$(i)
				|| 'function'== typeof (i.success || i.error || i)) && (n=s, s=i, i=null);
			if(ps) {if(!i || isl.isEmpty(i)) {i=ps;} else {for(let pk in ps) {(i instanceof window.FormData)?i.append(pk, ps[pk]):(i[pk]=ps[pk]);}}}//
			if(i&&i._formData) {
				let fd = new FormData();for(let k in i) {if(i[k] || i[k]===0) {fd.append(k, i[k]);}delete i[k];}i = fd;
			}//
			let h=
				webix.promise//m
				.defer(), r=this.getXHR(), o=this.k || {};
			if ("POST" === e && t.substring(t.length-1)==="/") {t = t.substring(0, t.length-1);}t = t.replace("/?", '?');//
			if(!webix.callEvent//y
				('onBeforeAjax', [e, t, i, r, o, null, h])) return h.reject(r);
			if('object'===M(i)) {
				if('GET'!==e) {
					if(window.FormData && i instanceof window.FormData) {//
						delete o['Content-Type'];//
					} else {//
						o['Content-Type']='application/json';
						i = JSON.stringify(i);
					}//
				} else {
					//o['Content-Type']='application/x-www-form-urlencoded';
					let f=[];
					for(let l in i) {
						let d=i[l];
						null!==d && d!==undefined || (d=''), 'object'===M(d) && (d=this.stringify(d)), f.push(l+'='+encodeURIComponent(d));
					}
					i=f.join('&');
				}
			}
			i && 'GET'===e && (t=t+(-1!==t.indexOf('?')?'&':'?')+i, i=null), r.open(e, t, !this.$);
			let v=this.D;//!!D
			for(let _ in v && (r.responseType=v), o) r.setRequestHeader(_, o[_]);
			let p=this;
			return this.master=this.master || n, r.onreadystatechange=function() {
				if(!r.readyState || 4==r.readyState) {
					webix.ajax//B
						.count++;
					let t, i, e=400<=r.status || 0===r.status;
					i='blob'==r.responseType || 'arraybuffer'==r.responseType?(t='', r.response):(t=r.responseText || '', p.I(r)), e?(
						webix.callEvent//y
						('onAjaxError', [r
							,n//
						]), h.reject(r
							,n//
						)):h.resolve(i), s &&
					webix.ajax//B
					.$callback(p.master ||
						p,//window,
						s, t, i, r, e);
				}
			}, this.T && (r.timeout=this.T), this.$?r.send(i || null):setTimeout(function() {r.send(i || null);}, 0), this.master && !this.$ && h.then(function(t) {return p.master=null, s=p=n=null, t;}), this.$?r:h;
		},
		webix.DataStore.prototype.id = function(t) {
			return !t?null:(t.id || (t.id === 0 ? 0 ://
					webix.uid())//V()
			);
		},

		webix.ajax.$callback = function(t, i, e, s, n, h) {
			if(!t.$destructed && (h &&
			webix.callEvent//y
			('onAjaxError', [n]), i)) {
				let r=i.success || i;
				h && (r=i.error), r && r.call && r.call(t, e, s, n
					, i//
				);
			}
		},

		webix.DataDriver.json.toObject=function(t) {
			if(!t) return t === "" ? [] :null; else if (t === "null") return [];//if(!t) return null;
			if('string'== typeof t) try {
				if(this.parseDates) {
					let e=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{1-3})?Z/;
					t=JSON.parse(t, function(t, i) {return 'string'== typeof i && e.test(i)?new Date(i):i;});
				} else t=JSON.parse(t);
			} catch(i) {
				return null;
			}
			if (t && !webix.isArray(t) && t.data === null) {t.data = emptyArray;}//
			return t;
		},

		webix.DataRecord.prototype.$init=function(t) {
			this.data=t || {};
			let i=t &&
			(t.id || t.id === 0)?t.id:webix.uid();//t.id?t.id:V();
			this.P={id:i}, si.views[i]=this;
		},
		webix.DataValue.prototype.$init=function(t) {
			t && !
				webix.isUndefined//R
				(t.value) || (this.data=t || '');
			let i=t &&
			(t.id || t.id === 0)?t.id:webix.uid();//t.id?t.id:V();
			this.P={id:i},
				webix.ui//si
					.views[i]=this;
		},
		webix.DataMove['Xh']=function(t, i) {//!!Xh
			let e=
				webix//E
				.extend({}, t);
			return e.id=!i ||
			i!==0?0://
				this.data.pull[i]?
					webix.uid//V
					():i, e.$template=null, this.P.externalData && (e=this.P.externalData.call(this, e, i, t)), e;
		},
		webix.ValidateData['Qh'] = function(t, i, e, s) {//!!Qh
			let element = this.elements[s];if (webix.isUndefined(s) || (element && element.validate === false)) {return true;}//
			return 'string'== typeof t && (t=
				webix.rules//ue
					[t]), t.call(this, i, e, s)?(this.callEvent('onValidationSuccess', [s, e]) && this.Kh && this.Kh(s), !0):(this.callEvent('onValidationError', [s, e]) && this.ir && this.ir(s), !1);//!!Kh,ir
		},

		webix.Values.clear = function() {
			this.Of= !1;//!!Of
			let t={};
			//for(let i in this.elements) this.elements[i].$allowsClear && (t[i]='');
			for(let i in this.elements) {//+
				if (this.elements[i].$allowsClear || (this.elements[i].config.view==='icon'&&this.elements[i].config.popup)) {
					if(this.elements[i].config.defaultValue===0 || this.elements[i].config.defaultValue) {
						t[i] = this.elements[i].config.defaultValue;
					} else {
						t[i] = '';
					}
				}
			}//
			this.Lf(t);//!!Lf
		},

		webix.ui.datafilter.masterCheckbox.refresh = function(e, t, s) {
			t.onclick=function(
				me//
			) {
				this.getElementsByTagName('input')[0].checked=s.checked= !s.checked;
				let t=e.getColumnConfig(s.columnId), i=s.checked?t.checkValue:t.uncheckValue;
				if(me) {e.callEvent("onCheckMaster", [e]);//
					e.data.each(function(t) {
						t[s.columnId]=i, e.callEvent('onCheck', [t.id, s.columnId, i])
						//, this.callEvent('onStoreUpdated', [t.id, t, 'save'])
						;
						return !1;//
					});//}), e.refresh();
				}e.refresh();//
			};
		},
		webix.ui.datafilter.masterCheckbox.render = function(t, i) {
			return '<input type=\'checkbox\' '+(i.checked?'checked=\'1\'':'')+'>'
				+ (i.groupText || '')//
				;
		},
		webix.TreeAPI["iterateParents"] = function(id, callback) {//+
			if(typeof callback === "function") {
				let item=this.getItem(id);
				if(item) {
					callback.call(this, item);
					this.iterateParents(item.$parent, callback);
				}
			}
		},
		webix.TreeAPI["setValue"] = function(data) {//+
			if (this.config.checkbox || this.config.leafCheckbox) {
				this.uncheckAll();
			} else {
				this.unselect();
			}
			this.closeAll();
			if (data) {
				if (typeof data === "string") {
					data = JSON.parse(data);
				}
				if (Object.prototype.toString.call(data) !== "[object Array]") {
					data = data[this.config.id];
				}
				if (data && data.length) {
					if (!this.config.checkbox && !this.config.leafCheckbox) {
						this.select(data);
					} else {
						let i = data.length;
						while (i--) {
							if(data[i]) {
								let id;
								if (this.exists(data[i])) {
									id = data[i];
								} else if (this.exists(data[i].id)) {
									id = data[i].id;
								}
								if (id) {
									this.open(this.getParentId(id), true);
									this.checkItem(id);
									this.showItem(id);
								}
							}
						}
					}
				}
			}
			this.refresh();
			return data;
		},
		webix.TreeStateCheckbox.checkItem = function(t, e) {
			if(this.getItem(t)) {//
				this.ef(t, !0,//!!ef
					e//
				);
			}//, this.updateItem(t);
		},
		webix.TreeStateCheckbox.uncheckItem = function(t, e) {
			if(this.getItem(t)) {
				this.ef(t, !1,//!!ef
					e//
				);
			}//, this.updateItem(t);
		},
		webix.TreeStateCheckbox.checkAll = function(t, e) {
			this.Mf(t, !0,//!!Mf
				e//
			);
			this.refresh();//
		},
		webix.TreeStateCheckbox.uncheckAll = function(t, e) {
			this.Mf(t, !1,//!!Mf
				e//
			);
			this.refresh();//
		},

		webix.uiSetValue=function(t,i) {
			let noChange = t===0?t===i:this.$compareValue(i, t);//+++
			if(!noChange) {
				if(this.config.confirm) {
					isl.comfirmClick(null, this.config.confirm, function(me) {
						me.P.value=t;//P
						me.Jp && me.$setValue(t);//!!Jp
						void me.callEvent("onChange", [t, i, this]);
					}, this);
				}
			}//---
			if(!t && t !== 0 && t !== false) {t = '';}//
			this.P.value=t, this.Jp && this.$setValue(t);//!!Jp
			//, this.callEvent('onChange', [t, i]);
			if(noChange) {//+++
				return !1;
			} else {
				this.callEvent('onChange', [t, i, this]);
			}//---
		},

		webix.ui.uploader.$protoWait[0]['Rf']=function(t) {//!!Rf
			let i=this.P.upload, e=
				webix//H
				.extend(t.urlData || {}, this.P.urlData || {
					ftk:webix.storage.local.get("ftk")//
				});
			if(i && e) {
				let s=[];
				for(let n in e) s.push(encodeURIComponent(n)+'='+encodeURIComponent(e[n]));
				s.length && (i+=(-1==i.indexOf('?')?'?':'&')+s.join('&'));
			}
			return i;
		},

		webix.ui.button.$protoWait[0].setValue=function(t) {
			if(this.config.type === 'number'){t = isl.scaledNumber(parseFloat(t), this.config.scale);if(!webix.isUndefined(this.config.max) && t > this.config.max) {t = this.config.max;} else if(!webix.isUndefined(this.config.min) && t < this.config.min) {t = this.config.min;}if((!t && t!==0)||isNaN(t)) {t = "";}}//
			t=this.$prepareValue(t);
			//if(this.$compareValue(i, t)) return this.qp && t!=this.$getValue() && this.$setValue(t), !1;
			webix.uiSetValue.call(this, t, this.P.value);//
		},
		webix.ui.button.$protoWait[0].$prepareValue=function(t) {
			if(t&&typeof t==='string') {//+++
				let v = Number(t);
				if(!isNaN(v)) {
					t = v;
				}
			}//---
			return 0===t?0:(t || '');//return 0===t?'0':(t || '').toString();
		},
		webix.ui.button.$protoWait[0].getValue=function() {
			//let t=this.qp?this.$getValue():this.P.value;
			let t = null;//+++
			if(this.Jp) {//!!Jp
				t =this.$getValue();
			} else {
				t = this.P.value;
			}//---
			return 0 === t ? 0:(t||"")//return void 0===t?'':t;
		},
		webix.ui.button.$protoWait[0]['bd']//!!bd
			.icon='<button type=\'button\' class=\'webix_button webix_img_btn\'><span class=\'webix_icon_btn #icon#\' style=\'max-width:#cheight#px;\'></span>#label#</button>',//--- style='line-height:#cheight#px;'

		webix.ui.text.$protoWait[0].$renderInput=function(t, i, e) {
			//包含this的多个属性变化，下方整体替换
			let s=t.inputAlign || 'left', n='top'==t.labelPosition, h=this.Cm(t);
			e=e || e === 0 ? 0 :webix.uid();//e=e || V();
			let r=this.$renderLabel(t, e), o='';
			if(i) o+=i; else {
				let a=
					webix.template//Yt
					.escape(t.text || this.um(t.value));
				o+=this.Dm('input')+'id=\''+e+'\' type=\''+(t.type || this.name)+'\''+(t.editable?' role=\'combobox\'':'')+' value=\''+a+'\' style=\'width: '+h+'px; text-align: '+s+';\'';
				let u=t.attributes;
				if(u) for(let c in u) o+=' '+c+'=\''+u[c]+'\'';
				o+=' />';
			}
			o+=this.$renderIcon?this.$renderIcon(t):'';
			let f='';
			f=n?r+'<div class=\'webix_el_box\' style=\'width:'+t.awidth+'px; height:'+t.aheight+'px\'>'+o+'</div>':'<div class=\'webix_el_box\' style=\'width:'+t.awidth+'px; height:'+t.aheight+'px\'>'+r+o+'</div>';
			let l=t.awidth-h-2*
				webix.skin.$active//Li
					.inputPadding, d=(t.invalid?t.invalidMessage:'') || t.bottomLabel;
			return d && (f+='<div class=\'webix_inp_bottom_label\''+(t.invalid?'role=\'alert\' aria-relevant=\'all\'':'')+' style=\'width:'+(h || t.awidth)+'px;margin-left:'+Math.max(l,
				webix.skin.$active//Li
					.inputPadding)+'px;\'>'+d+'</div>'), f;
		},
		webix.ui.text.$protoWait[0].suggest_setter=function(t) {
			if(t) {
				if('string'== typeof t) {
					if($$(t)) return $$(t).P.id;//if(oi(t)) return oi(t).P.id;
					t={
						body:{
							url:t,
							dataFeed:this.config.dynamic?t:null//避免频繁请求
						}
					};
				} else t.getItem?t={body:{data:t}}:
					webix.isArray//$
				(t)?t={body:{data:this.sm(t)}}:t.body || (t.body={});
				webix//H
				.extend(t, {view:'suggest'});
				let i=webix.ui//si
				(t);
				return this.Bt.push(i), i.P.id;
			}
			return !1;
		},
		webix.ui.richselect.$protoWait[0].setValue=function(t) {//+
			webix.uiSetValue.call(this, this.$prepareValue(t), this.P.value);
		},
		webix.ui.richselect.$protoWait[0].$setValue=function(t) {
			if(this.Jp) {//!!Jp
				let i=t, e=this.getPopup();
				if(e && (i=e.getItemText(t)), t && t.id) {
					let s=e.getList(), n=s.exists(t.id);
					n || s.add(t), i=e.getItemText(t.id), s.P.dynamic && !n && s.remove(t.id), this.P.value=this.$prepareValue(t.id);
				}
				let h=this.getInputNode();
				webix.isUndefined//R
				(h.value)?h.innerHTML=i || this.nm():h.value=i=//!!nm
					(typeof i==='string'?i.replace(/<[^>]*>/g, ''):i)//i.replace(/<[^>]*>/g, '')
					,this.P.text=i;
			}//
		},
		webix.ui.richselect.$protoWait[0].getValue=function() {
			//return this.P.value || '';
			let v = this.P.value;//+++
			if(v!==0) {
				let n=parseInt(v);
				v = isNaN(n)?v:n;
			}
			return v;//---
		},
		webix.ui.colorpicker.$protoWait[0].$compareValue=function(t, i) {
			return !i?!t:false;//return t==i;
		},
		webix.ui.colorpicker.$protoWait[0].setValueHere=function(t, i, e) {
			if(e && e.symbol) {
				let s=e.symbol, n=this.getValue(), h=n.substring(e.pos);
				n=(n=n.substring(0, e.pos)).substring(0, n.lastIndexOf(s)+s.length)+t, this.setValue(n+h), $t(this.getInputNode(), n.length);
			} else {
				if(t === this.getValue()) {t="";}//
				this.setValue(t);
			}
		},
		webix.ui.icon.$protoWait[0].defaults.template=function(t, i) {
			let color = " style='";//
			if (t.color) {color += "color:" + t.color + ";";}//
			if(t.background) {color += "background-color:" + t.background + ";";}color+="'";//

			let e=Math.min(t.awidth, t.aheight), s=Math.round((i.ge-t.aheight)/2), n='<button type=\'button\' style=\'height:'+e+'px;width:'+e+'px;\' class=\'webix_icon_button\'><span'
				+ color + //
				' class=\'webix_icon '+t.icon+'\'></span></button>';
			return '<div class=\'webix_el_box\' style=\'width:'+t.awidth+'px;height:'+t.aheight+'px;line-height:'+t.aheight+'px;margin-top:'+s+'px\'>'+n+(
				//t.badge || 0===
				t.badge?'<span class=\'webix_badge\'>'+t.badge+'</span>':'')+'</div>';
		},
		webix.ui.icon.$protoWait[0].$setValue=function(t) {
			//{}
			this.define('icon', t||'');//+++
			this.P.value=t||null;
			this.refresh();//---
		},

		webix.ui.list.$protoWait[0].type.template=function(t) {
			if(t.color||t.bgColor) {return '<span style=\'color:'+t.color+(t.bgColor==='#FFFFFF'?'':(';background-color:'+t.bgColor))+(t.icon?(';\' class=\'webix_list_icon webix_icon '+t.icon+'\'></span> '+t.value):(';\'>'+t.value+'</span>'))+(t.badge?'<div class=\'webix_badge\'>'+t.badge+'</div>':'');//
				//return (t.icon?'<span class=\'webix_list_icon webix_icon '+t.icon+'\'></span>':'')+t.value+(t.badge || 0===t.badge?'<div class=\'webix_badge\'>'+t.badge+'</div>':'');
			} else {return (t.icon?'<span class=\'webix_list_icon webix_icon '+t.icon+'\'></span>':'')+t.value+(t.badge?'<div class=\'webix_badge\'>'+t.badge+'</div>':'');}//
		},
		webix.ui.suggest.$protoWait[0].defaults.filter=function(t, i) {
			return t.value.toString().toLowerCase().indexOf(i.toLowerCase())>-1;
		},
		webix.ui.suggest.$protoWait[0]['_a']//!!_a
			=function(t) {
			t=t || this.getList();
			let i=this.getMasterValue();
			if(i===0) {i='0'}//
			t.select && t.showItem?
				i&& t.exists && t.exists(i)?(t.select(i), t.showItem(i)):(t.unselect(), t.showItem(t.getFirstId())):t.setValue && (this.P.master && (i=
				webix.$$//oi
				(this.P.master).$prepareValue(i)), t.setValue(i));
		},

		webix.ui.datepicker.$protoWait[0].setValue=function(t) {//+
			if (!isNaN(t) && typeof t === "number") {if(t === 0) {t = null;} else {t = new Date(t);}}
			t = this.$prepareValue(t);
			webix.uiSetValue.call(this, t, this.P.value);
		},

		webix.ui.slider.$protoWait[0].refresh=function() {
			let t=this.Mb();
			this.P.value = NP.strip(this.P.value, this.config.scale);//+
			t && (this.Db(), this.P.title && t.setAttribute('aria-label', this.P.label+' '+this.P.title(this.P, this)), this.qp());
		},

		webix.ui.datatable.$protoWait[0].on_click.webix_table_checkbox=function(t, i) {
			i=this.locate(t);
			let e=this.getItem(i.row), s=this.getColumnConfig(i.column), n=t.target || t.srcElement, h=('checkbox'==n.type?n.checked:e[i.column]!=s.checkValue)?s.checkValue:s.uncheckValue
				//, r={}
			;
			return e//r
				[i.column]=h,
				//this.updateItem(i.row, r, this.B.checkboxRefresh?'update':'save'),
				this.callEvent('onCheck', [i.row, i.column, h]),
				this.refresh(),//
				!1;
		},
		webix.ui.datatable.$protoWait[0].$init=function(t) {
			this.on_click=
				webix//E
				.extend({}, this.on_click);
			//包含this的多个属性变化，下方整体替换
			this.Oi.innerHTML='<div class=\'webix_ss_header\'><div class=\'webix_hs_left\'></div><div class=\'webix_hs_center\'></div><div class=\'webix_hs_right\'></div></div><div class=\'webix_ss_body\'><div class=\'webix_ss_left\'><div class=\'webix_ss_center_scroll\'></div></div><div class=\'webix_ss_center\'><div class=\'webix_ss_center_scroll\' role=\'rowgroup\'></div></div><div class=\'webix_ss_right\'><div class=\'webix_ss_center_scroll\'></div></div></div><div class=\'webix_ss_hscroll\' role=\'scrollbar\' aria-orientation=\'horizontal\'></div><div class=\'webix_ss_footer\'><div class=\'webix_hs_left\'></div><div class=\'webix_hs_center\'></div><div class=\'webix_hs_right\'></div></div><div class=\'webix_ss_vscroll_header\'></div><div class=\'webix_ss_vscroll\' role=\'scrollbar\' aria-orientation=\'vertical\'></div><div class=\'webix_ss_vscroll_footer\'></div>',
				this.xM=this.Oi.id=this.name+
					webix.uid//V
					(),
				this.Oi.className+=' webix_dtable', this.tt=this.Oi, this.k=this.Oi.firstChild, this.st=this.k.nextSibling, this.el=this.st.nextSibling.nextSibling, this.Vt.setAttribute('role', 'grid'), t.editable || this.Vt.setAttribute('aria-readonly', 'true'), this.data.provideApi(this, !0),
				this.data.attachEvent('onParse',
				webix.bind//S
				(this.HM, this)), this.$ready.push(this.RM), this.nl=[], this.go=[], this.rl=[], this.al=[], this.EM=[], this.Io={}, this.yo={}, this.PM={}, this.jM=[], this.Jo=this.NM=0, this.Bt=[], this.data.attachEvent('onServerConfig',
				webix.bind//S
				(this.LM, this)), this.data.attachEvent('onServerOptions',
				webix.bind//S
				(this.OM, this)), this.attachEvent('onViewShow', function() {this.e_(), this.WM();}), this.data.attachEvent('onClearAll',
				webix.bind//S
				(function(t) {t || (this.ph=this.vh=0, this._h && this._h.reset(), this.dh && this.dh.reset()
					//, this.UM(0)
				);}, this))

				this.attachEvent('onDestruct', this.YM),
				this.attachEvent('onKeyPress', this.Se),
				this.attachEvent('onScrollY', this.qM),
				webix.callEvent//y
				('onDataTable', [this, t]);
		},
		webix.ui.datatable.$protoWait[0].checkItem=function(id, columnId, value) {//+
			let record = this.getItem(id);
			if(record) {
				record[columnId]=value;
				let shownNode = this.getItemNode(id);
				if(shownNode) {
					shownNode = shownNode.children[this.getColumnIndex(columnId)];
					if("checkbox" === shownNode.type) {
						shownNode.checked=value;
						this.callEvent("onItemCheck", [id, value, columnId])
					} else {
						delete record[columnId];
					}
				}
			}
		},
		webix.ui.datatable.$protoWait[0].uncheckAll=function(columnId, value) {//+
			let dtable = this;
			value=!!value;
			if(!columnId) {
				columnId = dtable.config.id + "_cbx";
			}
			dtable.eachRow(function(id){
				dtable.checkItem(id, columnId, value);
			});
			this.refresh();
		},
		webix.ui.datatable.$protoWait[0].getChecked=function() {//+
			let key = this.config.id + "_cbx", result = null;
			this.eachRow(function(t) {
				let i = this.data.pull[t];
				if (i && i[key]) {
					if (!result) {
						result = [];
					}
					result.push(i.id);
				}
			});
			return result;
		},
		webix.ui.datatable.$protoWait[0].setValue=function(data) {//+
			if(this.config.checkbox) {
				this.uncheckAll();
				if(data) {
					let id=this.config.id, cbxId=id+"_cbx";
					if(typeof data==="string") {
						data=JSON.parse(data);
					}
					if(Object.prototype.toString.call(data)!=="[object Array]") {
						data=data[id];
					}
					if(data.length) {
						this.data.each(function(obj) {
							for(let i=0, l=data.length; i<l; i++) {
								let node=data[i];
								if(node) {
									if(node.id) {
										if(obj.id===node.id) {
											obj[cbxId]=1;
											webix.extend(obj, node, true);
											return;
										}
									} else if(obj.id===node) {
										obj[cbxId]=1;
										return;
									}
								}
							}
						});
					}
				}
				this.data.refresh();
			}
		},
		webix.ui.datatable.$protoWait[0]['Yu']//!!Yu
			=function(t, i, e, s) {
			let n=(t=t || event).target || t.srcElement;
			if(!this.P.subview || this==$$(n)//oi
				) {
				//for(let h='', r=[], o=!1, a=null; n && n.parentNode && n!=this.Vt.parentNode;) {
				let h='', r=[], o=!1, a=null;for(; n && n.parentNode && n!==this.Vt.parentNode;) {//
					//包含this的多个属性变化，下方整体替换
					if(h=Ct(n)) for(let u=(h=h.toString().split(' ')).length-1; 0<=u; u--) i[h[u]] && r.push(i[h[u]]);
					if(n.parentNode.getAttribute && !a) {
						let c=n.parentNode.getAttribute('column') || n.getAttribute('column');
						if(c) {
							let f='DIV'==n.parentNode.tagName;
							if(!this.nl[c]) return;//下方参考this.nl[c]
							if(o= !0, f) {
								let l=n.parentNode.getAttribute('row') || n.getAttribute('row');
								if(!l) {
									if(n.getAttribute('column')) return;
									if((l=ot(n))>=this.P.topSplit) (this.P.pager || !this.P.prerender && !this.P.autoheight) && (l+=this.nl[c].Ay-this.P.topSplit);
								}
								this.Ru=a={
									row:this.data.order[l],
									column:this.nl[c].id
								}, a.toString=this.Ww;
							} else this.Ru=a={column:this.nl[c].id};
							if(!1===this.QS(r, t, a, n)) return;
							if(f)
							{//
								this.callEvent('on'+e, [a, t, n]) && s && this.callEvent('on'+s, [a, t, n]);
								let icon, rowData;//+++
								if(this.getItem) {
									rowData = this.getItem(a);
									let item = this.nl[c]//参考上面找到this.nl[c]函数
									if(item.icon) {
										icon = typeof item.icon==='string'?item.icon:item.icon(rowData);
										if(e==='ItemClick' && t.target.tagName==='SPAN' && item.click && icon) {
											item.click.call(this, rowData);
										}
									}
								}//---
							}//
							else if('ItemClick'==e) {
								'header'==n.parentNode.parentNode.getAttribute('section') && this.callEvent('onHeaderClick', [a, t, n]) && this.KS(a.column, t);
							}
							r=[];
						}
					}
					n=n.parentNode;
				}
				return this.QS(r, t, a, this.$view), o;
			}
		},

		webix.ui.tabbar.$protoWait[0]['Zb']//!!Zb
			=function(t, i) {
			let e, s='', n='', h=!!t.disabled, r=this.config;
			if(t.id==r.value && (s+=' webix_selected'), h && (s+=' webix_disabled'), t.css && (s+=' '+t.css), r.tooltip && (n=' webix_t_id=\''+t.id+'\''), i=t.width || i, e='<div class="webix_item_tab'+s+'" button_id="'+t.id+'" role="tab" aria-selected="'+(t.id==r.value?'true':'false')+'" tabindex="'+(h || t.id!=r.value?'-1':'0')+'" style="width:'+i+'px;"'+(h?' webix_disabled="true"':'')+n+'>',
				this.Qb) {//!!Qb 用于Jb函数参考
				let o=this.ge-2*r.inputPadding-2, a=this.ge-2, u=
					webix//H
					.extend({
					cheight:o,
					aheight:a
				}, t);
				e+=this.Qb(u);//!!Qb 用于Jb函数参考
			} else {
				e+=(t.icon?'<span class=\'webix_icon '+t.icon+'\'></span> ':'')+t.value;
			}
			return h || !t.close && !r.close || (e+='<span role=\'button\' tabindex=\'0\' aria-label=\''+
				webix.i18n//I
					.aria.closeTab+'\' class=\'webix_tab_close webix_icon wxi-close\'></span>'), e+='</div>';
		},
		webix.ui.tabbar.$protoWait[0]['Jb']//!!Jb
			=function() {//完全替换let t, i, e=this.P, s=this.au(e.options), n=this.Qp-2*e.tabOffset, h=e.optionWidth || e.tabMinWidth;....
			let e = this.P, s = this.Qb //this.Qb 需要在上面Zb函数中确定混淆的名字
				|| e.options, n = this.Qp - 2 * e.tabOffset, a;//!!Qp 在源代码第一行
			for (let t = 0, l = s.length; l > t; t++) {
				a = s[t].width,n -= s[t].width + (t || e.type ? 0 :e.tabMargin);if (n < 45) {return {max:t};}
			}
			return {width:a};
		},

		webix.ui.portlet.$protoWait[0]['t_']//!!t_
			=function() {
			//let t=this.getChildViews();
			//if(1<t.length) Xi.addDrag(t[0].$view, this); else
			if(this.P.icon) {
				let i=
					webix.html.create//ft
					('div', {'class':'portlet_drag'},
						'<span style="color:#1CA1C1;" class=\'webix_icon '//'<span class=\'webix_icon '
						+this.P.icon+'\'></span>');
				this.Vt//!!Vt
				.appendChild(i),
					webix.DragControl//Xi
					.addDrag(i, this);
				let b = this;i.onclick = function() {if(b.config['iconClick']) {b.config.iconClick.call(b, b.config.id);}};//
			}// else Xi.addDrag(this.$view, this);
		};
})();
