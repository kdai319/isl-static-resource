!function(t, i) {'object'== typeof exports && 'undefined'!= typeof module?i(exports):'function'== typeof define && define.amd?define(['exports'], i):i(t.webix={});}(this, function(H) {
	'use strict';

	function M(t) {return (M='function'== typeof Symbol && 'symbol'== typeof Symbol.iterator?function(t) {return typeof t;}:function(t) {return t && 'function'== typeof Symbol && t.constructor===Symbol && t!==Symbol.prototype?'symbol':typeof t;})(t);}

	function s(t) {
		return function s(t) {
			if(Array.isArray(t)) {
				for(var i=0, e=new Array(t.length); i<t.length; i++) e[i]=t[i];
				return e;
			}
		}(t) || function i(t) {if(Symbol.iterator in Object(t) || '[object Arguments]'===Object.prototype.toString.call(t)) return Array.from(t);}(t) || function e() {throw new TypeError('Invalid attempt to spread non-iterable instance');}();
	}

	var i=window, e=1, n={}, h=!1;

	function f(t) {i.setImmediate?i.setImmediate(t):i.importScripts || !i.addEventListener?setTimeout(t):(n[++e]=t, i.postMessage(e, '*'));}

	function m(t) {
		if('function'!= typeof t && t!=undefined) throw TypeError();
		if('object'!=M(this) || this && this.then) throw TypeError();
		var i, e, n=this, h=0, r=0, s=[];
		(n.promise=n).resolve=function(t) {return i=n.fn, e=n.er, h || (r=t, h=1, f(u)), n;}, n.reject=function(t) {return i=n.fn, e=n.er, h || (r=t, h=2, f(u)), n;}, n.i=1, n.then=function(t, i) {
			if(1!=this.i) throw TypeError();
			var e=new m;
			return e.fn=t, e.er=i, 3==h?e.resolve(r):4==h?e.reject(r):s.push(e), e;
		}, n['finally']=function(i) {
			var e, t=function(t) {return e=t, i();}, s=function() {
				var t=new m;
				return 4==h?t.reject(e):t.resolve(e);
			};
			return n.then(t, t).then(s, s);
		}, n['catch']=function(t) {return n.then(null, t);}, n.fail=function(t) {return n.then(null, t);};
		var o=function(t) {
			h=t || 4;
			for(var i=0; i<s.length; i++) {
				var e=s[i];
				3==h && e.resolve(r) || e.reject(r);
			}
		};
		try {
			'function'== typeof t && t(n.resolve, n.reject);
		} catch(c) {
			n.reject(c);
		}
		return n;

		function a(t, i, e, s) {
			if(2==h) return s();
			if('object'!=M(r) && 'function'!= typeof r || 'function'!= typeof t) s(); else try {
				var n=0;
				t.call(r, function(t) {n++ || (r=t, i());}, function(t) {n++ || (r=t, e());});
			} catch(c) {
				r=c, e();
			}
		}

		function u() {
			var t;
			try {
				t=r && r.then;
			} catch(c) {
				return r=c, h=2, u();
			}
			a(t, function() {h=1, u();}, function() {h=2, u();}, function() {
				try {
					1==h && 'function'== typeof i?r=i(r):2==h && 'function'== typeof e && (r=e(r), h=1);
				} catch(c) {
					return r=c, o();
				}
				r==n?(r=TypeError(), o()):a(t, function() {o(3);}, o, function() {o(1==h && 3);});
			});
		}
	}

	!i.setImmediate && i.addEventListener && i.addEventListener('message', function(t) {
		if(t.source==i) if(h) f(n[t.data]); else {
			h= !0;
			try {
				n[t.data]();
			} catch(t) {
			}
			delete n[t.data], h= !1;
		}
	}), m.resolve=function(i) {
		if(1!=this.i) throw TypeError();
		return i instanceof m?i:new m(function(t) {t(i);});
	}, m.reject=function(e) {
		if(1!=this.i) throw TypeError();
		return new m(function(t, i) {i(e);});
	}, m.all=function(e) {
		if(1!=this.i) throw TypeError();
		if(!(e instanceof Array)) return m.reject(TypeError());
		var s=new m;
		return function n(t, i) {return i?s.resolve(i):t?s.reject(t):(0==e.reduce(function(t, i) {return i && i.then?t+1:t;}, 0) && s.resolve(e), void e.map(function(t, i) {t && t.then && t.then(function(t) {return e[i]=t, n(), t;}, n);}));}(), s;
	}, m.race=function(e) {
		if(1!=this.i) throw TypeError();
		if(!(e instanceof Array)) return m.reject(TypeError());
		if(0==e.length) return new m;
		var s=new m;
		return function n(t, i) {return i?s.resolve(i):t?s.reject(t):(0==e.reduce(function(t, i) {return i && i.then?t+1:t;}, 0) && s.resolve(e), void e.map(function(t) {t && t.then && t.then(function(t) {n(null, t);}, n);}));}(), s;
	}, m.i=1, m.defer=function() {return new m(null);};
	var r={};

	function t(t, i) {r[t]=i;}

	function d(t) {return r[t];}

	var o={};

	function l(t) {
		var i=l.h;
		return i.prototype=t, new i;
	}

	function _(t) {
		var i, e=!!(window.Map && window.Set && window.WeakMap && window.WeakSet);
		for(var s in 1<arguments.length?(i=arguments[0], t=arguments[1]):i=$(t)?[]:{}, t) {
			var n=t[s];
			!n || 'object'!=M(n) || n instanceof RegExp?i[s]=n:D(n)?i[s]=new Date(n):e && (n instanceof Map || n instanceof Set || n instanceof WeakMap || n instanceof WeakSet)?i[s]=n:(i[s]=$(n)?[]:{}, _(i[s], n));
		}
		return i;
	}

	function S(t, i) {return function() {return t.apply(i, arguments);};}

	function p(t) {window.execScript?window.execScript(t):window.eval(t);}

	function R(t) {return void 0===t;}

	function k(i, e, s, t) {
		return window.setTimeout(function() {
			if(!e || !e.$destructed) {
				var t=i.apply(e, s || []);
				return i=e=s=null, t;
			}
		}, t || 1);
	}

	function a(t) {
		var i=!0;
		return function() {i && (i= !1, t.apply(this, arguments));};
	}

	l.h=function() {}, H.extend=function(t, i, e) {
		if(t.$protoWait) return x.insertAt.call(t.$protoWait, i, 1), t;
		for(var s in i) s in t && !e || (t[s]=i[s]);
		return i.defaults && H.extend(t.defaults, i.defaults), i.$init && i.$init.call(t), t;
	};
	var u=(new Date).valueOf();

	function V() {return ++u;}

	function C(t) {return 'string'== typeof t?document.getElementById(t):t;}

	function v(t, i) {
		if('string'!= typeof t) return t;
		var e=t.replace('()', '');
		return i && i[e]?i[e]:window[e] || window.eval(t);
	}

	function $(t) {return Array.isArray?Array.isArray(t):'[object Array]'===Object.prototype.toString.call(t);}

	function D(t) {return t instanceof Date;}

	function b(t) {return H.extend(t || [], x, !0);}

	var x={
		removeAt:function(t, i) {0<=t && this.splice(t, i || 1);},
		remove:function(t) {this.removeAt(this.find(t));},
		insertAt:function(t, i) {i || 0===i?this.splice(i, 0, t):this.push(t);},
		find:function(t) {
			for(var i=0; i<this.length; i++) if(t==this[i]) return i;
			return -1;
		},
		each:function(t, i) {for(var e=0; e<this.length; e++) t.call(i || this, this[e]);},
		map:function(t, i) {
			for(var e=0; e<this.length; e++) this[e]=t.call(i || this, this[e]);
			return this;
		},
		filter:function(t, i) {
			for(var e=0; e<this.length; e++) t.call(i || this, this[e]) || (this.splice(e, 1), e--);
			return this;
		}
	}, I={
		parseFormat:'%Y-%m-%d %H:%i:%s',
		parseTimeFormat:'%H:%i:%s'
	};

	function c(t) {
		var i, e=Date.prototype.toJSON;
		return Date.prototype.toJSON=function() {return I.parseFormatStr(this);}, i=t instanceof Date?t.toJSON():JSON.stringify(t), Date.prototype.toJSON=e, i;
	}

	var g={
		$init:function() {this.o || (this.o={}, this.u={}, this.l={});},
		blockEvent:function() {this.o._= !0;},
		unblockEvent:function() {this.o._= !1;},
		mapEvent:function(t) {H.extend(this.l, t, !0);},
		on_setter:function(t) {
			if(t) for(var i in t) {
				var e=v(t[i], this.$scope), s=i.indexOf('->');
				-1!==s?this[i.substr(0, s)].attachEvent(i.substr(s+2), S(e, this)):this.attachEvent(i, e);
			}
		},
		callEvent:function(t, i) {
			var e=this.m || this;
			if(this.o._) return !0;
			t=t.toLowerCase();
			var s=this.o[t.toLowerCase()], n=!0;
			if(s) for(var h=0; h<s.length; h++) !1===s[h].apply(e, i || []) && (n= !1);
			if(this.l[t]) {
				var r=this.l[t];
				r.$eventSource=this, r.callEvent(t, i) || (n= !1), r.$eventSource=null;
			}
			return n;
		},
		attachEvent:function(t, i, e) {
			t=t.toLowerCase(), e=e || V(), i=v(i, this.$scope);
			var s=this.o[t] || b();
			return arguments[3]?s.unshift(i):s.push(i), this.o[t]=s, this.u[e]={
				f:i,
				t:t
			}, e;
		},
		detachEvent:function(t) {
			if(this.u[t]) {
				var i=this.u[t].t, e=this.u[t].f;
				this.o[i].remove(e), delete this.u[t];
			} else {
				var s=(t+'').toLowerCase();
				this.o[s] && (this.o[s]=b());
			}
		},
		hasEvent:function(t) {
			t=t.toLowerCase();
			var i=this.o[t];
			if(i && i.length) return !0;
			var e=this.l[t];
			return !!e && e.hasEvent(t);
		}
	}, w={};
	H.extend(w, g, !0);
	var y=function(t, i) {return w.callEvent(t, i);}, A=function(t, i, e, s) {return w.attachEvent(t, i, e, s);}, T=function(t) {return w.detachEvent(t);}, F={
		w:function(t) {return t && t.documentElement?t.getElementsByTagName('parsererror').length?null:t:null;},
		toObject:function(t, i) {
			var e=i?i.rawxml?i.rawxml():i:null;
			return this.w(e)?e:(e='string'== typeof t?this.fromString(t.replace(/^[\s]+/, '')):t, this.w(e)?e:null);
		},
		getRecords:function(t) {return this.xpath(t, this.records);},
		records:'/*/item',
		child:'item',
		config:'/*/config',
		getDetails:function(t) {return this.tagToObject(t, {});},
		getOptions:function() {return !1;},
		getInfo:function(t) {
			var i=this.xpath(t, this.config);
			return i=i.length?this.assignTypes(this.tagToObject(i[0], {})):null, {
				size:t.documentElement.getAttribute('total_count') || 0,
				from:t.documentElement.getAttribute('pos'),
				parent:t.documentElement.getAttribute('parent') || 0,
				config:i
			};
		},
		xpath:function(t, i) {
			if(window.XPathResult) {
				var e=t;
				-1==t.nodeName.indexOf('document') && (t=t.ownerDocument);
				for(var s=[], n=t.evaluate(i, e, null, XPathResult.ANY_TYPE, null), h=n.iterateNext(); h;) s.push(h), h=n.iterateNext();
				return s;
			}
			var r=!0;
			try {
				'undefined'== typeof t.selectNodes && (r= !1);
			} catch(a) {
			}
			if(r) return t.selectNodes(i);
			var o=i.split('/').pop();
			return t.getElementsByTagName(o);
		},
		assignTypes:function(t) {
			for(var i in t) {
				var e=t[i];
				if('object'==M(e)) this.assignTypes(e); else if('string'== typeof e) {
					if(''===e) continue;
					'true'==e?t[i]= !0:'false'==e?t[i]= !1:e==1*e && (t[i]=1*t[i]);
				}
			}
			return t;
		},
		tagToObject:function(t, i) {
			var e=0;
			if(1==t.nodeType && t.getAttribute('stack')) {
				i=[];
				for(var s=t.childNodes, n=0; n<s.length; n++) 1==s[n].nodeType && i.push(this.tagToObject(s[n], {}));
			} else {
				i=i || {};
				var h=t.attributes;
				if(h && h.length) for(var r=0; r<h.length; r++) i[h[r].name]=h[r].value, e=1;
				for(var o=t.childNodes, a=0; a<o.length; a++) if(1==o[a].nodeType) {
					var u=o[a].tagName;
					i[u]?('function'!= typeof i[u].push && (i[u]=[i[u]]), i[u].push(this.tagToObject(o[a], {}))):i[u]=this.tagToObject(o[a], {}), e=2;
				}
				if(!e) return this.nodeValue(t);
				e<2 && (i.value=i.value || this.nodeValue(t));
			}
			return i;
		},
		nodeValue:function(t) {return t.firstChild?t.firstChild.wholeText || t.firstChild.data:'';},
		fromString:function(t) {
			try {
				if(window.DOMParser) return (new DOMParser).parseFromString(t, 'text/xml');
				if(window.ActiveXObject) {
					var i=new ActiveXObject('Microsoft.xmlDOM');
					return i.loadXML(t), i;
				}
			} catch(e) {
				return null;
			}
		}
	}, z={
		toObject:function(t) {
			if(!t) return null;
			if('string'== typeof t) try {
				if(this.parseDates) {
					var e=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{1-3})?Z/;
					t=JSON.parse(t, function(t, i) {return 'string'== typeof i && e.test(i)?new Date(i):i;});
				} else t=JSON.parse(t);
			} catch(i) {
				return null;
			}
			return t;
		},
		getRecords:function(t) {return t && t.data && (t=t.data), t && !$(t)?[t]:t;},
		getDetails:function(t) {
			return 'string'== typeof t?{
				id:t || V(),
				value:t
			}:t;
		},
		getOptions:function(t) {return t.collections;},
		getInfo:function(t) {
			return {
				size:t.total_count || 0,
				from:t.pos,
				parent:t.parent || 0,
				config:t.config
			};
		},
		child:'data',
		parseDates:!1
	};

	function B(t, i, e) {return 0!==arguments.length?(new B).get(t, i, e):this && this.getXHR?this:new B;}

	B.count=0, B.prototype={
		master:null,
		getXHR:function() {return new XMLHttpRequest;},
		stringify:function(t) {return c(t);},
		S:function(t, i, s, e) {
			var n;
			i && ($(i) || 'function'== typeof (i.success || i.error || i)) && (n=s, s=i, i=null);
			var h=m.defer(), r=this.getXHR(), o=this.k || {};
			if(!y('onBeforeAjax', [e, t, i, r, o, null, h])) return h.reject(r);
			var a=!1;
			if('GET'!==e) {
				var u=!1;
				for(var c in o) 'content-type'==c.toString().toLowerCase() && (u= !0, 'application/json'==o[c] && (a= !0));
				u || window.FormData && i instanceof window.FormData || (o['Content-Type']='application/x-www-form-urlencoded');
			}
			if('object'==M(i) && !(window.FormData && i instanceof window.FormData)) if(a) i=this.stringify(i); else {
				var f=[];
				for(var l in i) {
					var d=i[l];
					null!==d && d!==undefined || (d=''), 'object'===M(d) && (d=this.stringify(d)), f.push(l+'='+encodeURIComponent(d));
				}
				i=f.join('&');
			}
			i && 'GET'===e && (t=t+(-1!=t.indexOf('?')?'&':'?')+i, i=null), r.open(e, t, !this.$);
			var v=this.D;
			for(var _ in v && (r.responseType=v), o) r.setRequestHeader(_, o[_]);
			var p=this;
			return this.master=this.master || n, r.onreadystatechange=function() {
				if(!r.readyState || 4==r.readyState) {
					B.count++;
					var t, i, e=400<=r.status || 0===r.status;
					i='blob'==r.responseType || 'arraybuffer'==r.responseType?(t='', r.response):(t=r.responseText || '', p.I(r)), e?(y('onAjaxError', [r]), h.reject(r)):h.resolve(i), s && B.$callback(p.master || window, s, t, i, r, e);
				}
			}, this.T && (r.timeout=this.T), this.$?r.send(i || null):setTimeout(function() {r.send(i || null);}, 0), this.master && !this.$ && h.then(function(t) {return p.master=null, s=p=n=null, t;}), this.$?r:h;
		},
		I:function(i) {
			return {
				xml:function() {
					try {
						return F.tagToObject(F.toObject(i.responseText, this));
					} catch(t) {
						i.responseText, t.toString();
					}
				},
				rawxml:function() {return window.XPathResult?i.responseXML:F.fromString(i.responseText);},
				text:function() {return i.responseText;},
				json:function() {return z.toObject(i.responseText, !1);}
			};
		},
		get:function(t, i, e) {return this.S(t, i, e, 'GET');},
		post:function(t, i, e) {return this.S(t, i, e, 'POST');},
		put:function(t, i, e) {return this.S(t, i, e, 'PUT');},
		del:function(t, i, e) {return this.S(t, i, e, 'DELETE');},
		patch:function(t, i, e) {return this.S(t, i, e, 'PATCH');},
		sync:function() {return this.$= !0, this;},
		timeout:function(t) {return this.T=t, this;},
		response:function(t) {return this.D=t, this;},
		headers:function(t) {return this.k=H.extend(this.k || {}, t), this;},
		bind:function(t) {return this.master=t, this;}
	}, B.$callback=function(t, i, e, s, n, h) {
		if(!t.$destructed && (h && y('onAjaxError', [n]), i)) {
			var r=i.success || i;
			h && (r=i.error), r && r.call && r.call(t, e, s, n);
		}
	};
	var E={
		$proxy:!0,
		load:function() {
			var i=this.source.split('@'), e=i[0].split('.').pop();
			return B().response('arraybuffer').get(i[0]).then(function(t) {
				return {
					data:t,
					options:{
						ext:e,
						dataurl:i[1]
					}
				};
			});
		}
	}, P={
		$proxy:!0,
		load:function() {},
		save:function(t, i, e) {
			k(function() {
				window.console.log('[DP] '+i.id+' -> '+i.operation, i.data);
				var t={
					id:i.data.id,
					newid:i.data.id,
					status:i.data.operation
				};
				e.processResult(t, t);
			});
		}
	}, j={
		$proxy:!0,
		load:function() {return B(this.source);},
		save:function(t, i) {return j.F.call(this, i, B());},
		F:function(t, i) {
			var e=this.source, s='', n=e.indexOf('?');
			-1!==n && (s=e.substr(n), e=e.substr(0, n)), e+='/'==e.charAt(e.length-1)?'':'/';
			var h=t.operation, r=t.data;
			return 'insert'==h && delete r.id, 'update'==h?i.put(e+r.id+s, r):'delete'==h?i.del(e+r.id+s, r):i.post(e+s, r);
		}
	}, N={
		$proxy:!0,
		load:function() {return B(this.source);},
		save:function(t, i) {
			var e=B().headers({'Content-Type':'application/json'});
			return j.F.call(this, i, e);
		}
	}, L={
		$proxy:!0,
		load:function(t, i) {return i=H.extend(i || {}, this.params || {}, !0), B().post(this.source, i);}
	};
	var O={
		$proxy:!0,
		save:function(t) {return this.load(t);},
		load:function(t) {
			var i={query:this.source};
			return 1===arguments.length && (i.variables=t), B().headers({'Content-type':'application/json'}).post(this.url, i).then(function(t) {
				return function n(t) {
					if(!t || 'object'=== !M(t) || Array.isArray(t)) return t;
					var i='', e=0;
					for(var s in t) {
						if(2== ++e) return t;
						i=s;
					}
					return t[i];
				}(t.json().data);
			});
		}
	};

	function W(t, i, e) {
		var s=_(W[t]);
		return s.source=i, e && H.extend(s, e, !0), s.init && s.init(), s;
	}

	W.$parse=function(t) {
		if('string'!= typeof t || -1==t.indexOf('->')) return t;
		var i=t.split('->');
		return W(i[0], i[1]);
	}, W.binary=E, W.debug=P, W.json=N, W.post=L, W.rest=j, W.GraphQL=O;
	var U={
		toObject:function(t) {return 'string'== typeof t?JSON.parse(t):t;},
		getRecords:function(t) {return t && t.data && (t=t.data), t;},
		getDetails:function(t) {
			for(var i={}, e=0; e<t.length; e++) i['data'+e]=t[e];
			return null!==this.idColumn && (i.id=t[this.idColumn]), i;
		},
		getOptions:function() {return !1;},
		getInfo:function() {return {size:0};},
		idColumn:null
	}, Y={
		toObject:function(t) {
			if('string'!= typeof t) return t;
			var i=null;
			return -1==t.indexOf('<') && (i=C(t)), i || ((i=document.createElement('DIV')).innerHTML=t), i.firstChild;
		},
		getRecords:function(t) {return t.getElementsByTagName(this.tag);},
		getDetails:function(t) {return F.tagToObject(t);},
		getOptions:function() {return !1;},
		getInfo:function() {return {size:0};},
		tag:'LI'
	}, q={
		cdn:'//cdn.webix.com/',
		codebase:'',
		zIndexBase:100,
		scrollSize:17
	};
	q.strict= !!window.webix_strict, q.https='https:'===document.location.protocol;
	var G=navigator.userAgent;
	if(q.isMac=-1!=G.indexOf('Mac'), -1==G.indexOf('Mobile') && -1==G.indexOf('Windows Phone') || (q.mobile= !0), (q.mobile || -1!=G.indexOf('iPad') || -1!=G.indexOf('Android')) && (q.touch= !0), !q.touch && 'MacIntel'===navigator.platform && 1<navigator.maxTouchPoints && (q.touch= !0), -1!=G.indexOf('Opera')) q.isOpera= !0; else {
		if(q.isIE=!!document.all || -1!==G.indexOf('Trident'), q.isIE) 8==parseFloat(navigator.appVersion.split('MSIE')[1]) && (q.isIE8= !0);
		q.isEdge=-1!=G.indexOf('Edge'), q.isFF=-1!=G.indexOf('Firefox'), q.isWebKit=-1!=G.indexOf('KHTML'), q.isSafari=q.isWebKit && q.isMac && -1==G.indexOf('Chrome'), (q.isIE || q.isEdge || q.isFF) && (q.maxHTMLElementSize=1e7), q.isSafari && (q.maxHTMLElementSize=1e8);
	}
	-1!=G.toLowerCase().indexOf('android') && (q.isAndroid= !0, -1!=G.toLowerCase().indexOf('trident') && (q.isAndroid= !1, q.isIEMobile= !0)), q.transform= !1, q.transition= !1;
	for(var X=-1, J=['', 'webkit', 'Moz', 'O', 'ms'], K=document.createElement('DIV'), Z=0; Z<J.length; Z++) {
		var Q=J[Z]?J[Z]+'Transform':'transform';
		if('undefined'!= typeof K.style[Q]) {
			X=Z;
			break;
		}
	}
	if(-1<X) {
		q.cssPrefix=['', '-webkit-', '-Moz-', '-o-', '-ms-'][X];
		var tt=q.jsPrefix=J[X];
		q.transform=tt?tt+'Transform':'transform', q.transition=tt?tt+'Transition':'transition', q.transitionDuration=tt?tt+'TransitionDuration':'transitionDuration', K.style[q.transform]='translate3d(0,0,0)', q.translate=K.style[q.transform]?'translate3d':'translate', q.transitionEnd='-Moz-'==q.cssPrefix?'transitionend':tt?tt+'TransitionEnd':'transitionend';
	}
	q.pointerevents=!q.isIE || null!==new RegExp('Trident/.*rv:11').exec(G), q.passiveEventListeners= !1;
	try {
		var it=Object.defineProperty({}, 'passive', {get:function() {q.passiveEventListeners= !0;}});
		window.addEventListener('testPassive', null, it), window.removeEventListener('testPassive', null, it);
	} catch(Ro) {
	}
	q.svg=document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1'), q.svganimation=document.implementation.hasFeature('https://www.w3.org/TR/SVG11/feature#SVG-animation', '1.1');
	var et=0, st={}, nt={};

	function ht() {et || (et=document.onselectstart), document.onselectstart=wt;}

	function rt() {0!==et && (document.onselectstart=et || null), et=0;}

	function ot(t) {
		for(var i=0; t=t.previousSibling;) i++;
		return i;
	}

	function at(t, i) {
		var e='';
		for(var s in i=i || '', t) e+=s+':'+t[s]+';';
		var n=nt[e+i];
		return n || (ut('.'+(n='s'+V())+(i || '')+'{'+e+'}'), nt[e+i]=n), n;
	}

	function ut(t, i) {
		var e=i?st[i]:st['default'];
		e || ((e=document.createElement('style')).setAttribute('type', 'text/css'), e.setAttribute('media', 'screen,print'), document.getElementsByTagName('head')[0].appendChild(e), i?st[i]=e:st['default']=e), e.styleSheet?e.styleSheet.cssText+=t:e.appendChild(document.createTextNode(t));
	}

	function ct(t) {
		var i=st[t || 'default'];
		i && (i.innerHTML='');
	}

	function ft(t, i, e) {
		i=i || {};
		var s=document.createElement(t);
		for(var n in i) s.setAttribute(n, i[n]);
		return i.style && (s.style.cssText=i.style), i['class'] && (s.className=i['class']), e && (s.innerHTML=e), s;
	}

	function lt(t) {return (t=C(t))?R(t.value)?t.innerHTML:t.value:'';}

	function dt(t) {if(t instanceof Array) for(var i=0; i<t.length; i++) dt(t[i]); else t && t.parentNode && t.parentNode.removeChild(t);}

	function vt(t, i, e) {t && (i && i.parentNode?i.parentNode.insertBefore(t, i):e.appendChild(t));}

	function _t(t, i) {
		var e;
		for(e=t.tagName?t:(t=t || event).target; e;) {
			if(e.getAttribute) {
				var s=e.getAttribute(i);
				if(s) return s;
			}
			e=e.parentNode;
		}
		return null;
	}

	function pt(t) {
		if(t.getBoundingClientRect) {
			var i=t.getBoundingClientRect(), e=document.body, s=document.documentElement, n=window.pageYOffset || s.scrollTop || e.scrollTop, h=window.pageXOffset || s.scrollLeft || e.scrollLeft, r=s.clientTop || e.clientTop || 0, o=s.clientLeft || e.clientLeft || 0, a=i.top+n-r, u=i.left+h-o;
			return {
				y:Math.round(a),
				x:Math.round(u),
				width:t.offsetWidth,
				height:t.offsetHeight
			};
		}
		for(var c=0, f=0; t;) c+=parseInt(t.offsetTop, 10), f+=parseInt(t.offsetLeft, 10), t=t.offsetParent;
		return {
			y:c,
			x:f,
			width:t.offsetHeight,
			height:t.offsetWidth
		};
	}

	function mt(t) {
		return R((t=t || event).offsetX)?{
			x:t.layerX,
			y:t.layerY
		}:{
			x:t.offsetX,
			y:t.offsetY
		};
	}

	function bt(t) {
		if((t=t || event).touches && t.touches[0] && (t=t.touches[0]), t.pageX || t.pageY) return {
			x:t.pageX,
			y:t.pageY
		};
		var i=q.isIE && 'BackCompat'!=document.compatMode?document.documentElement:document.body;
		return {
			x:t.clientX+i.scrollLeft-i.clientLeft,
			y:t.clientY+i.scrollTop-i.clientTop
		};
	}

	function gt(t) {return t && t.preventDefault && t.preventDefault(), t && (t.returnValue= !1), wt(t);}

	function wt(t) {return (t=t || event).stopPropagation && t.stopPropagation(), !(t.cancelBubble= !0);}

	function xt(t, i, e) {
		if(document.createEventObject) {
			var s=document.createEventObject();
			t.fireEvent && t.fireEvent('on'+e, s);
		} else {
			var n=document.createEvent(i);
			n.initEvent(e, !0, !0), t.dispatchEvent && t.dispatchEvent(n);
		}
	}

	function yt(t, i, e) {e && -1!==t.className.indexOf(i) || (t.className+=' '+i);}

	function Mt(t, i) {t.className=t.className.replace(RegExp(' '+i, 'g'), '');}

	function St(t, i, e) {
		var s=ft('DIV', {'class':'webix_view webix_measure_size '+(i || '')}, '');
		s.style.cssText='height:auto;visibility:hidden; position:absolute; top:0px; left:0px; overflow:hidden;'+(e?'width:'+e+'px;':'width:auto;white-space:nowrap;'), document.body.appendChild(s);
		for(var n='object'!==M(t)?[t]:t, h=0, r=0, o=0; o<n.length; o++) s.innerHTML=n[o], h=Math.max(h, s.offsetWidth+1), r=Math.max(r, s.offsetHeight+1);
		return dt(s), {
			width:h,
			height:r
		};
	}

	function kt(t, i) {
		var e=!1;
		if('object'==M(t)) {
			if(window.navigator.msSaveBlob) return window.navigator.msSaveBlob(t, i);
			t=window.URL.createObjectURL(t), e= !0;
		}
		var s=document.createElement('a');
		s.setAttribute("target", "_blank");
		s.href=t, s.download=i, document.body.appendChild(s), s.click(), k(function() {e && window.URL.revokeObjectURL(t), document.body.removeChild(s), s.remove();});
	}

	function Ct(t) {
		if(!t) return '';
		var i=t.className || '';
		return i.baseVal && (i=i.baseVal), i.indexOf || (i=''), i;
	}

	function $t(t, i, e) {
		if(i=i || 0, e=e || i, t.focus(), t.setSelectionRange) t.setSelectionRange(i, e); else {
			var s=t.createTextRange();
			s.collapse(!0), s.moveEnd('character', e), s.moveStart('character', i), s.select();
		}
	}

	function Dt(t) {
		if('selectionStart' in t) return {
			start:t.selectionStart || 0,
			end:t.selectionEnd || 0
		};
		t.focus();
		var i=document.selection.createRange().getBookmark(), e=t.createTextRange();
		e.moveToBookmark(i);
		var s=e.text.length;
		e.collapse(!0), e.moveStart('character', -t.value.length);
		var n=e.text.length;
		return {
			start:n,
			end:n+s
		};
	}

	function It(t, i) {
		document.getElementsByTagName('head').item(0).appendChild(ft('meta', {
			name:t,
			content:i
		}));
	}

	var At={
		toObject:function(t) {
			(t=C(t)).tagName.toLowerCase();
			var i=t.rows;
			return dt(t), i;
		},
		getRecords:function(t) {
			for(var i=[], e=t[0] && t[0].V?1:0; e<t.length; e++) i.push(t[e]);
			return i;
		},
		getDetails:function(t) {
			var i=t.getElementsByTagName('td');
			t={};
			for(var e=0; e<i.length; e++) t['data'+e]=i[e].innerHTML;
			return t;
		},
		getInfo:function() {return {size:0};},
		getOptions:function() {},
		getConfig:function(t) {
			var i=[], e=t[0].getElementsByTagName('th');
			e.length && (t[0].V= !0);
			for(var s=0; s<e.length; s++) {
				var n={
					id:'data'+s,
					header:this.B(e[s].innerHTML)
				}, h=this.H(e[s]);
				n=H.extend(n, h), i.push(n);
			}
			return i;
		},
		B:function(t) {
			var i=t.indexOf('json://');
			return -1!=i && (t=JSON.parse(t.substr(i+7))), t;
		},
		H:function(t) {
			for(var i=t.attributes, e={}, s=0; s<i.length; s++) e[i[s].nodeName]=this.B(i[s].nodeValue);
			return e.width=parseInt(e.width, 10), e;
		}
	}, Tt={};

	function Ft(e, t, i) {
		var s=m.defer();
		if(t && !0!==t && (s=s.then(function() {t.call(i || this);})), Ft.disabled) return s.resolve(), s;
		if('string'!= typeof e) {
			var n=e.length || 0;
			if(n) {
				var h=function() {n?(n--, Ft(e[e.length-n-1]).then(h, function() {return s.reject();})):s.resolve();};
				h();
			} else {
				for(var r in e) n++;
				var o=function() {0=== --n && s.resolve();};
				for(var a in e) Ft(a).then(o, function() {return s.reject();});
			}
			return s;
		}
		if(!0!==Tt[e]) {
			var u=e;
			if(!0===t) return p(B().sync().get(u).responseText), Tt[e]= !0, s.resolve();
			if(Tt[e]) return Tt[e].push(s), s;
			Tt[e]=[s];
			var c=function() {
				var t=Tt[e];
				Tt[e]= !1;
				for(var i=0; i<t.length; i++) t[i].reject();
			}, f=function() {
				var t=Tt[e];
				Tt[e]= !0;
				for(var i=0; i<t.length; i++) t[i].resolve();
			}, l=e.split('?');
			if('.css'==l[0].substr(l[0].length-4)) {
				var d=ft('LINK', {
					type:'text/css',
					rel:'stylesheet',
					href:u
				});
				d.onload=f, d.onerror=c, document.getElementsByTagName('head')[0].appendChild(d);
			} else {
				var v=document.createElement('script');
				v.onload=f, v.onerror=c, document.getElementsByTagName('head')[0].appendChild(v), v.src=u;
			}
		} else s.resolve();
		return s;
	}

	var Vt=H.extend({
		toObject:function(t) {
			if(t.excel) return t;
			var i=t.options || {};
			i.dataurl && H.extend(i, this.R(i.dataurl)), t=t.data || t;
			var e=m.defer();
			if(t.name) {
				i.ext=t.name.split('.').pop();
				var s=new FileReader;
				s.onload=S(function(t) {e.resolve(this.parseData(t.target.result, i));}, this), s.readAsArrayBuffer(t);
			} else e.resolve(this.parseData(t, i));
			return e;
		},
		parseData:function(t, e) {
			t=new Uint8Array(t);
			for(var s=[], i=0; i!=t.length; ++i) s[i]=String.fromCharCode(t[i]);
			var n=(e.ext || e).toLowerCase();
			return 'xls'!=n && (n='xlsx'), Ft(q.cdn+'/extras/xlsx.core.styles.min.js').then(S(function() {
				var t='xls'==n?XLS.read(s.join(''), {
					type:'binary',
					cellStyles:!0,
					cellDates:!0
				}):XLSX.read(s.join(''), {
					type:'binary',
					cellStyles:!0,
					cellDates:!0
				}), i={
					sheets:t.Sheets,
					names:t.SheetNames,
					options:e,
					ranges:t.Workbook && t.Workbook.Names || []
				};
				return H.extend(this.getSheet(i, e), i);
			}, this));
		},
		getSheet:function(t, i) {
			var e=i.name || t.names[0];
			return t=this.sheetToArray(t.sheets[e], i), i.rows && i.rows.length && (t.data=t.data.splice(i.rows[0], Math.min(i.rows[1], t.data.length)-i.rows[0])), t;
		},
		sheetToArray:function(t, i) {
			var e=[], s=[], n=[], h=[], r=[], o={
				n:'number',
				d:'date',
				s:'string',
				b:'boolean'
			};
			if(t && t['!ref']) {
				var a, u, c, f=XLS.utils.decode_range(t['!ref']), l=f.s.c, d=f.s.r+(i.rows?i.rows[0]:0);
				for(a=f.s.r; a<=f.e.r; a++) {
					var v=[];
					for(u=f.s.c; u<=f.e.c; u++) if(c=t[XLS.utils.encode_cell({
						r:a,
						c:u
					})]) {
						var _='';
						_=i.math && c.f?'='==c.f.charAt(0)?c.f:'='+c.f:'d'==c.t && D(c.v)?I.dateFormatStr(c.v):c.v, v.push(_), c.s && n.push([a-d, u-l, c.s]), c.t && r.push([a-d, u-l, o[c.t]]);
					} else v.push('');
					e.push(v);
				}
				if(t['!merges']) for(var p=t['!merges'], m=0; m<p.length; m++) {
					var b=p[m].s, g=p[m].e;
					(!i.rows || 0<=b.r-d && g.r-d<=i.rows[1]) && s.push([b.r-d, b.c-l, g.c-b.c+1, g.r-b.r+1]);
				}
				if(t['!cols']) for(var w=t['!cols'], x=0; x<w.length; x++) w[x] && h.push(['column', x-l, Math.round(w[x].wch/(8.43/70))]);
				if(t['!rows']) for(var y=t['!rows'], M=0; M<y.length; M++) y[M] && h.push(['row', M-d, y[M].hpx]);
			}
			return {
				data:e,
				spans:s,
				styles:n,
				sizes:h,
				types:r,
				excel:!0
			};
		},
		R:function(t) {
			var i=t.split('['), e={};
			if(e.name=i[0], i[1]) {
				var s=i[1].split(/[^0-9]+/g);
				s[0]=1*s[0] || 0, s[1]=1*s[1] || 9999999, e.rows=s;
			}
			return e;
		}
	}, U), zt={
		json:z,
		jsarray:U,
		xml:F,
		csv:{
			toObject:function(t) {return t;},
			getRecords:function(t) {return t.split(this.row);},
			getDetails:function(t) {
				t=this.stringToArray(t);
				for(var i={}, e=0; e<t.length; e++) i['data'+e]=t[e];
				return null!==this.idColumn && (i.id=t[this.idColumn]), i;
			},
			getOptions:function() {return !1;},
			getInfo:function() {return {size:0};},
			stringToArray:function(t) {
				t=t.split(this.cell);
				for(var i=0; i<t.length; i++) t[i]=t[i].replace(/^[ \t\n\r]*("|)/g, '').replace(/("|)[ \t\n\r]*$/g, '');
				return t;
			},
			idColumn:null,
			row:'\n',
			cell:','
		},
		html:Y,
		htmltable:At,
		excel:Vt
	}, Bt={}, Ht={
		$init:function(t) {this.data={}, this.waitData=m.defer(), t && (this.P.datatype=t.datatype || 'json'), this.$ready.push(this.j);},
		j:function() {this.N= !0, this.P.url && this.url_setter(this.P.url), this.P.data && this.data_setter(this.P.data);},
		url_setter:function(t) {return t=W.$parse(t), this.N && this.load(t, this.P.datatype), t;},
		data_setter:function(t) {return this.N?(this.parse(t, this.P.datatype), !0):t;},
		load:function(t, i) {
			var e, s=this, n=arguments[2] || null;
			'string'== typeof i && (e=i, i=arguments[2]);
			var h=this.O(t, e, n);
			if(h && h.then) return h.then(function(t) {return s.W(t), i && B.$callback(s, i, '', t, -1), t;}, function(t) {return s.U(t);});
		},
		O:function(t, i, e) {
			var s, n=this;
			if(!i && this.data.driver || (this.data.driver=zt[i || 'json']), !this.callEvent('onBeforeLoad', [])) return m.reject();
			(s=(t=W.$parse(t)).$proxy && t.load?t.load(this, e):'function'== typeof t?t.call(this, e):B().bind(this).get(t)) && !s.then && (s=m.resolve(s));
			var h=this.Y;
			return s && s.then?s.then(function(t) {return n.$destructed || h && n.Y!==h?m.reject(Bt):t;}):s;
		},
		parse:function(t, i) {
			if(t && 'function'== typeof t.then) {
				var e=this.Y;
				return t.then(S(function(t) {
					if(this.$destructed || e && this.Y!==e) return m.reject();
					this.parse(t, i);
				}, this));
			}
			if(t && t.sync && this.sync) this.q(t); else {
				if(!this.callEvent('onBeforeLoad', [])) return m.reject();
				!i && this.data.driver || (this.data.driver=zt[i || 'json']), this.W(t);
			}
			return m.resolve();
		},
		q:function(t) {this.data && this.data.attachEvent && this.data.attachEvent('onSyncApply', S(function() {this.G && this.G();}, this)), this.sync(t);},
		X:function(t) {
			var i, e, s=this.data.driver;
			i=(e=s.getRecords(t)[0])?s.getDetails(e):{}, this.setValues?this.setValues(i):this.data=i;
		},
		J:function(t) {t?this.$onLoad && this.$onLoad(t, this.data.driver) || (this.data && this.data.X?this.data.X(t):this.X(t)):this.U(t), this.G && this.G(), this.callEvent('onAfterLoad', []), this.waitData.resolve();},
		W:function(t) {
			var i=this;
			t && 'function'== typeof t.text && !t.name && (t=t.text()), (t=this.data.driver.toObject(t)) && t.then?t.then(function(t) {return i.J(t);}):this.J(t);
		},
		U:function(t) {return t!==Bt && (this.$destructed || (this.callEvent('onAfterLoad', []), this.callEvent('onLoadError', arguments)), y('onLoadError', [t, this])), m.reject(t);},
		K:function(t) {
			if(!this.P.dataFeed || this.Z || !t) return !0;
			var i=this.P.dataFeed;
			return 'function'== typeof i?i.call(this, t.id || t, t):(i=i+(-1==i.indexOf('?')?'?':'&')+'action=get&id='+encodeURIComponent(t.id || t), this.callEvent('onBeforeLoad', []) && B(i, function(t, i, e) {
				this.Z= !0;
				var s=zt.json, n=s.toObject(t, i);
				n?this.setValues(s.getDetails(s.getRecords(n)[0])):this.U(e), this.Z= !1, this.callEvent('onAfterLoad', []);
			}, this), !1);
		}
	}, Rt={
		collapseNames:function(t, i, e, s) {
			if(e=e || {}, i=i || '', s=s || function() {return !0;}, !t || 'object'!=M(t)) return null;
			for(var n in t) {
				var h=t[n], r=i+n;
				h && 'object'==M(h) && !D(h) && !$(h) && s(r)?Rt.collapseNames(h, r+'.', e, s):e[r]=h;
			}
			return e;
		},
		expandNames:function(t) {
			var i, e, s, n, h, r={};
			for(h in t) {
				for(e=(s=h.split('.')).length-1, n=r, i=0; i<e; i++) n[s[i]] || (n[s[i]]={}), n=n[s[i]];
				n[s[e]]=t[h];
			}
			return r;
		}
	}, Et={}, Pt={}, jt=new RegExp('(\\r\\n|\\n)', 'g'), Nt=new RegExp('(\\")', 'g'), Lt=new RegExp('(\\\\)', 'g'), Ot={
		'&':'&amp;',
		'<':'&lt;',
		'>':'&gt;',
		'"':'&quot;',
		'\'':'&#x27;',
		'`':'&#x60;'
	}, Wt=/[&<>"'`]/g, Ut=function(t) {return Ot[t] || '&amp;';};

	function Yt(e) {
		if('function'== typeof e) return e;
		if(Et[e]) return Et[e];
		if(-1!=(e=(e || '').toString()).indexOf('->')) {
			var t=e.split('->');
			switch(t[0]) {
			case'html':
				e=lt(t[1]);
				break;
			case'http':
				e=(new B).sync().get(t[1], {uid:V()}).responseText;
			}
		}
		if(e=(e || '').toString(), q.strict) {
			if(!Pt[e]) {
				Pt[e]=[];
				var h=[];
				if(e.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g, function(t, i, e, s, n) {
					h.push({
						pos:n,
						str:t,
						fn:function(t) {return t[i]?e:s;}
					});
				}), e.replace(/\{common\.([^}(]*)\}/g, function(t, e, i) {
					h.push({
						pos:i,
						str:t,
						fn:function(t, i) {return i[e] || '';}
					});
				}), e.replace(/\{common\.([^}(]*)\(\)\}/g, function(t, e, i) {
					h.push({
						pos:i,
						str:t,
						fn:function(t, i) {return i[e]?i[e].apply(this, arguments):'';}
					});
				}), e.replace(/\{obj\.([^:}]*)\}/g, function(t, i, e) {
					h.push({
						pos:e,
						str:t,
						fn:function(t) {return t[i];}
					});
				}), e.replace('{obj}', function(t, i) {
					h.push({
						pos:i,
						str:t,
						fn:function(t) {return t;}
					});
				}), e.replace(/#([^#'";, ]+)#/gi, function(t, i, e) {
					'!'==i.charAt(0)?(i=i.substr(1), h.push({
						pos:e,
						str:t,
						fn:function(t) {return -1!=i.indexOf('.') && (t=Rt.collapseNames(t)), Yt.escape(t[i]);}
					})):h.push({
						pos:e,
						str:t,
						fn:function(t) {return -1!=i.indexOf('.') && (t=Rt.collapseNames(t)), t[i];}
					});
				}), h.sort(function(t, i) {return t.pos>i.pos?1:-1;}), h.length) {
					for(var i=0, s=function(t, i, e) {Pt[t].push(function() {return t.slice(i, e);});}, n=0; n<h.length; n++) {
						var r=h[n].pos;
						s(e, i, r), Pt[e].push(h[n].fn), i=r+h[n].str.length;
					}
					s(e, i, e.length);
				} else Pt[e].push(function() {return e;});
			}
			return function() {
				for(var t='', i=0; i<Pt[e].length; i++) t+=Pt[e][i].apply(this, arguments);
				return t;
			};
		}
		var o=!1;
		e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(Lt, '\\\\')).replace(jt, '\\n')).replace(Nt, '\\"')).replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g, '"+(obj.$1?"$2":"$3")+"')).replace(/\{common\.([^}(]*)\}/g, '"+(common.$1||\'\')+"')).replace(/\{common\.([^}(]*)\(\)\}/g, '"+(common.$1?common.$1.apply(this, arguments):"")+"')).replace(/\{obj\.([^}]*)\}/g, '"+(obj.$1)+"')).replace('{obj}', '"+obj+"')).replace(/#([^#'";, ]+)#/gi, function(t, i) {return '!'==i.charAt(0)?(o= !0, '"+template.escape(obj.'+i.substr(1)+')+"'):'"+(obj.'+i+')+"';});
		try {
			if(o) {
				var a=Function('obj', 'common', 'marks', 'value', 'template', 'return "'+e+'";');
				Et[e]=function(t, i, e, s) {return a(t, i, e, s, Yt);};
			} else Et[e]=Function('obj', 'common', 'return "'+e+'";');
		} catch(Ro) {
		}
		return Et[e];
	}

	Yt.escape=function(t) {return t===undefined || null===t?'':(t.toString() || '').replace(Wt, Ut);}, Yt.empty=function() {return '';};
	var qt={
		Q:function(t) {return t.$empty?'':this.P.template(t, this);},
		render:function() {
			var t=this.P;
			return !!this.isVisible(t.id) && (this.callEvent && !this.callEvent('onBeforeRender', [this.data]) || (this.data && !t.content && (this.tt.innerHTML='', this.tt.innerHTML=this.Q(this.data)), this.callEvent && this.callEvent('onAfterRender', [])), !0);
		},
		sync:function(i) {this.it= !1, 'DataStore'!=i.name && (i.data && 'DataStore'==i.data.name?i=i.data:this.it= !0), this.it?i.bind('change', S(function(t) {t.id==this.data.id && (this.data=t.attributes, this.refresh());}, this)):i.attachEvent('onStoreUpdated', S(function(t) {t && t!=this.data.id || (this.data=i.pull[t], this.refresh());}, this));},
		template_setter:Yt
	}, Gt={
		et:function(t) {
			var i, e, s=this.P.dragscroll;
			'string'!= typeof s && (s=this.P.layout || 'xy'), e=-1!==s.indexOf('x'), i=-1!==s.indexOf('y');
			var n=pt(this.st || this.$view), h=Math.max((this.P.rowHeight || (this.type && !isNaN(parseFloat(this.type.height))?this.type.height:0))+5, 40), r=!1;
			i && this.nt(t, n, h) && (r= !0), e && this.ht(t, n, h) && (r= !0), r && (this.rt=k(this.et, this, [t], 100));
		},
		ot:function(t) {
			var i=this.P.dragscroll;
			if('string'!= typeof i || -1!==i.indexOf('x')) {
				var e=pt(this.k || this.$view), s=Math.max(this.P.headerRowHeight || 0, 40);
				this.ht(t, e, s) && (this.rt=k(this.ot, this, [t], 100));
			}
		},
		nt:function(t, i, e) {
			var s=i.y, n=s+i.height, h=this.getScrollState(), r=this.P;
			if(r.topSplit) {
				var o=this.at(this.getIdByIndex(r.topSplit-1), this.columnId(0));
				s+=o.top+o.height;
			}
			return t.y<s+e?this.ut(h.x, h.y-2*e, t, 'y'):t.y>n-e && this.ut(h.x, h.y+2*e, t, 'y');
		},
		ht:function(t, i, e) {
			var s=i.x, n=s+i.width, h=this.getScrollState();
			return t.x<s+e?this.ut(h.x-2*e, h.y, t, 'x'):t.x>n-e && this.ut(h.x+2*e, h.y, t, 'x');
		},
		ut:function(t, i, e, s) {return !!this.callEvent('onBeforeAutoScroll', [e]) && (this.scrollTo(t, i), this.callEvent('onAfterAutoScroll', []), this.getScrollState()[s]===('x'===s?t:i));}
	}, Xt={};

	function Jt() {for(var t in Xt) Qt(t);}

	function Kt(t, i, e, s) {(s=s || {}).inner= !0, Zt(t, i, e, s);}

	function Zt(t, i, e, s) {
		s=s || {}, t=C(t);
		var n=s.id || V();
		s.bind && (e=S(e, s.bind));
		var h=[t, i, e, s.capture];
		s.inner || (Xt[n]=h);
		var r=!!s.capture;
		return !R(s.passive) && q.passiveEventListeners && (r={
			passive:s.passive,
			capture:r
		}), t.addEventListener?t.addEventListener(i, e, r):t.attachEvent && t.attachEvent('on'+i, h[2]=function() {return e.apply(t, arguments);}), n;
	}

	function Qt(t) {
		if(t) {
			Xt[t];
			var i=Xt[t];
			i[0].removeEventListener?i[0].removeEventListener(i[1], i[2], !!i[3]):i[0].detachEvent && i[0].detachEvent('on'+i[1], i[2]), delete Xt[t];
		}
	}

	function ti(t, i) {
		if(t.$protoWait) return t.ct || (t.ct=[]), void t.ct.push(i);
		'function'== typeof t && (t=t.prototype), t.types || (t.types={'default':t.type}, t.type.name='default');
		var e=i.name, s=t.type;
		for(var n in e && (s=t.types[e]=l(i.baseType?t.types[i.baseType]:t.type)), i) 0===n.indexOf('template')?s[n]=Yt(i[n]):s[n]=i[n];
		return e;
	}

	var ii={
		codebase:'./',
		cdn:'//cdn.webix.com',
		top_views:[],
		ft:null,
		lt:null,
		dt:null,
		vt:null,
		_t:null,
		pt:null,
		mt:null,
		bt:null,
		gt:0,
		wt:null,
		xt:null,
		yt:[],
		destructors:[],
		Mt:null,
		St:0,
		kt:b(),
		Ct:null
	}, ei={};

	function si(t, i, e) {
		var s;
		ii.gt++;
		var n=ii.ft;
		ii.ft=t.$scope || n;
		try {
			s=function l(t, i, e) {
				var s, n=$(t), h=C(t.container || i || document.body);
				h.P && (e=function f(t, i, e) {
					var s=[t];
					if(i) s=t.getChildViews(); else if(t.$t) s=[t.$t]; else {
						if('number'== typeof e) return e;
						if(e) return hi(s=[oi(e)]), s[0].config.id;
					}
					return hi(s), e;
				}(h, n, e));
				var r=!1, o=h==document.body;
				t.P || h && n?(s=t, r= !0):(h && o && (t.$topView= !0), t.Dt || (t.Dt={}), i && i.getParentView && (ii.mt=e || 0===e?i:i.getParentView()), s=ri(t));
				!o || s.setPosition || s.$apiOnly || d('_fixHeight')();
				if(s.P && s.P.It && !h.$view) s.P.At=h; else if(!s.$apiOnly) if(h.appendChild) ni(h, s, t); else if(h.destructor) {
					var a=h;
					if(e || 0===e || $(s) || (h=(e=h).getParentView()), h && h.Tt) {
						if(r && s.getParentView) {
							var u=s.getParentView();
							u && u.Ft && u.Ft(s), s.mt=h, s.$scope=h.$scope;
						}
						h.Tt(s, e);
					} else {
						var c=a.$view.parentNode;
						a.destructor(), ni(c, s, t);
					}
				} else t.container;
				return s;
			}(t, i, e);
		} finally {
			ii.gt--, ii.ft=n;
		}
		return s;
	}

	function ni(t, i, e) {t.appendChild(i.Vt), i.getParentView() || (((!i.setPosition || i.P.fullscreen) && t==document.body || i.P.position) && ii.top_views.push(i.zt), e.skipResize || i.adjust());}

	function hi(t) {
		for(var i=t.length-1; 0<=i; i--) {
			var e=t[i];
			delete ei[e.config.id], e.config.id='x'+V(), (ei[e.config.id]=e).getChildViews && hi(e.getChildViews()), e.Bt && hi(e.Bt);
		}
	}

	function ri(t) {
		if(t.view) {
			var i=t.view;
			return new si[i](t);
		}
		if(t.rows || t.cols) {
			for(var e=t.rows || t.cols, s=!1, n=0; n<e.length; n++) !e[n].body || e[n].view || e[n].align || (s= !0);
			return s?new si.headerlayout(t):new si.layout(t);
		}
		return t.cells?new si.multiview(t):t.template || t.content?new si.template(t):t.align && t.body?new si.align(t):new si.spacer(t);
	}

	function oi(t) {
		if(!t) return null;
		if(ei[t]) return ei[t];
		var i=t;
		if('object'==M(t)) {
			if(t.P) return t;
			i=t.target || t;
		}
		return ei[_t({target:C(i)}, 'view_id')];
	}

	si.views=ei, si.Ht=ri, 'undefined'== typeof window.$$ && (window.$$=oi), H.protoUI=function() {
		var h=arguments[0].name, r=function(t) {
			if(!r) return si[h].prototype;
			var i=r.$protoWait;
			if(i) {
				for(var e=[i[0]], s=1; s<i.length; s++) e[s]=i[s], e[s].$protoWait && (e[s]=e[s].call(-1, e[s].name)), e[s].prototype && e[s].prototype.name && (si[e[s].prototype.name]=e[s]);
				if(si[h]=H.proto.apply(-1, e), r.ct) for(var n=0; n<r.ct.length; n++) ti(si[h], r.ct[n]);
				r=i=null;
			}
			return -1!=this?new si[h](t):si[h];
		};
		return r.$protoWait=Array.prototype.slice.call(arguments, 0), si[h]=r;
	}, H.proto=function() {
		for(var t=arguments, i=t[0], e=!!i.$init, s=[], n=t.length-1; 0<n; n--) {
			if(t[n], 'function'== typeof t[n] && (t[n]=t[n].prototype), t[n].$init && s.push(t[n].$init), t[n].defaults) {
				var h=t[n].defaults;
				for(var r in i.defaults || (i.defaults={}), h) R(i.defaults[r]) && (i.defaults[r]=h[r]);
			}
			if(t[n].type && i.type) for(var o in t[n].type) i.type[o] || (i.type[o]=t[n].type[o]);
			for(var a in t[n]) i[a] || !1===i[a] || (i[a]=t[n][a]);
		}
		e && s.push(i.$init), i.$init=function() {for(var t=0; t<s.length; t++) s[t].apply(this, arguments);}, i.$skin && i.$skin();
		var u=function(t) {
			this.$ready=[], this.$init, this.$init(t), this.Rt && this.Rt(t, this.defaults);
			for(var i=0; i<this.$ready.length; i++) this.$ready[i].call(this);
		};
		return u.prototype=i, i=t=null, u;
	}, A('onClick', function(t) {
		var i=oi(t);
		if(i && i.touchable) {
			d('UIManager').applyChanges(i), i.getNode(t);
			var e=t.target;
			if(i.config.disabled) return;
			var s='';
			if(e.className && 0===e.className.toString().indexOf('webix_view')) return;
			for(i && d('UIManager').Et(i); e && e.parentNode;) {
				if(e.getAttribute) {
					if(e.getAttribute('view_id')) break;
					if(s=e.className) {
						s=s.toString().split(' ');
						for(var n=0; n<s.length; n++) {
							if(i.on_click[s[n]]) if(!1===i.on_click[s[n]].call(i, t, i.P.id, e)) return;
						}
					}
				}
				e=e.parentNode;
			}
			if(i.P.click) {
				var h=v(i.P.click, i.$scope);
				h && h.call && h.call(i, i.P.id, t);
			}
			var r=i.P.popup;
			r && !i.P.readonly && ('object'!=M(r) || r.name || (r=i.P.popup=si(r).P.id, i.Bt.push(oi(r))), (r=oi(r)).isVisible() || (r.P.master=i.P.id, r.show(i.getInputNode() || i.getNode(), null, !0))), i.callEvent('onItemClick', [i.P.id, t]);
		}
	});
	var ai={
		Pt:b(['dummy']),
		jt:0,
		delay:400,
		addTooltip:function(t, i) {
			var e, s, n=this;
			(t=C(t)) instanceof Element?(e=t, 'string'== typeof i?e.setAttribute('webix_tooltip', i):s=i):(e=t.$view, s=t), s=s || this;
			var h=this.Pt.find(s);
			-1===h && (h=this.Pt.length, this.Pt.push(s)), e.webix_tooltip=h, this.jt++, this.Nt || (this.Nt=new si.tooltip({}), this.Lt=Zt(document, 'mousemove', this.Ot, {bind:this}), this.Wt=Zt(document, 'mouseleave', this.Ut, {bind:this}), this.Yt=A('onDragMode', function() {n.Ut();}), this.qt=A('onClick', function() {n.Ut();}));
		},
		getTooltip:function() {return this.Nt;},
		Ot:function(t) {
			for(var i, e=t.target; e instanceof Element && "HTML"!=e.tagName;) {
				if(this.Pt[e.webix_tooltip]) return this.Gt && this.Gt!=e?(this.$tooltipOut(this.Gt, e, t), void (this.Gt=null)):(this.Gt || (this.Gt=this.$tooltipIn(e, t)), void this.$tooltipMove(e, t, i));
				i=i || e.getAttribute('webix_tooltip'), e=e.parentElement;
			}
			this.Gt && (this.Gt=this.$tooltipOut(this.Gt, null, t));
		},
		Ut:function() {clearTimeout(this.Xt), this.Nt.hide();},
		getMaster:function(t) {return this.Pt[t.webix_tooltip];},
		removeTooltip:function(t) {
			var i, e=(i=(t=C(t)) instanceof Element?t:t.$view).webix_tooltip;
			e && (this.Gt==i && (this.Ut(), this.Gt=null), delete i.webix_tooltip, this.jt--, this.Pt[e]=null), !this.jt && this.Nt && (this.Lt=Qt(this.Lt), this.Wt=Qt(this.Wt), this.Yt=T(this.Yt), this.qt=T(this.qt), this.Nt.destructor(), this.Nt=this.Gt=null, this.Pt=b(['dummy']));
		},
		$tooltipIn:function(t, i) {
			var e=this.Pt[t.webix_tooltip];
			return e.$tooltipIn && e!=this?e.$tooltipIn(t, i):(this.Nt.define({
				dx:20,
				dy:0,
				template:t.getAttribute('webix_tooltip') || '',
				css:''
			}), t);
		},
		$tooltipOut:function(t, i, e) {
			var s=this.Pt[t.webix_tooltip];
			return s.$tooltipOut && s!=this?s.$tooltipOut(t, i, e):(this.Ut(), null);
		},
		$tooltipMove:function(t, i, e) {
			var s=this.Pt[t.webix_tooltip];
			if(s.$tooltipMove && s!=this) return s.$tooltipMove(t, i, e);
			this.Nt.hide(), clearTimeout(this.Xt), this.Xt=k(this.Nt.show, this.Nt, [e || {}, bt(i)], this.delay);
		}
	};

	function ui(t) {return '$'+t+(ci[t]=(ci[t] || 0)+1);}

	var ci={}, fi=!1;

	function li(t, i) {
		fi= !0;
		var e=t();
		return e && e.then?e=e.then(function(t) {return (fi= !1)!==i && di(), t;}):(fi= !1)!==i && di(), e;
	}

	function di() {
		if(d('UIManager').applyChanges(), y('onClick', []), ii.Jt= !0, !fi) for(var t=ii.top_views.length-1; 0<=t; t--) ii.top_views[t].obj && ii.top_views[t].obj.resize();
		ii.Jt= !1;
	}

	function vi(t, i, e, s) {if(t) for(var n=s?[t]:t.getChildViews(), h=0; h<n.length; h++) !1!==i.call(e, n[h]) && vi(n[h], i, e);}

	function _i(t) {return R(t)?q.zIndexBase++:(q.zIndexBase=Math.max(q.zIndexBase, t+1), t);}

	function pi(t) {
		mi?t.call():
			bi.push(t);
	}

	Zt(window, 'resize', function() {q.touch && ii.bt && new Date-ii.bt<1e3 || di();});
	var mi=!1, bi=[], gi=document.getElementsByTagName('SCRIPT');
	gi.length, gi.length && ((gi=(gi[gi.length-1].getAttribute('src') || '').split('/')).splice(gi.length-1, 1), q.codebase=gi.slice(0, gi.length).join('/')+'/');
	var wi=function() {q.isIE && (document.body.className+=' webix_ie'), y('onReady', []);}, xi=function() {
		mi= !0, window.webix_ready && $(webix_ready) && (bi=webix_ready.concat(bi));
		for(var t=0; t<bi.length; t++) bi[t].call();
		bi=[];
	};
	A('onReady', function(t) {t?xi():k(xi);}), 'complete'==document.readyState?wi():Zt(window, 'load', wi), pi(function() {Zt(document.body, 'click', function(t) {y('onClick', [t || window.event]);});});
	var yi={
		set:function(t, i) {
			i=i || {}, this.Ht && this.exit(), oi(t)?t=oi(t):('string'== typeof t && (t=document.getElementById(t)), t instanceof Element && (t={
				$view:t,
				$html:!0
			})), this.Ht=t, this.Kt=this.Zt();
			var e=t.config;
			t.setPosition?(e.fullscreen= !0, t.resize()):(this.Qt=si({
				view:'window',
				head:this.ti(i),
				fullscreen:!0,
				borderless:!0,
				body:{rows:[]}
			}), e && (this.ii={
				width:e.width,
				minWidth:e.minWidth,
				maxWidth:e.maxWidth,
				height:e.height,
				minHeight:e.minHeight,
				maxHeight:e.maxHeight
			}), t.getParentView && t.getParentView()?(this.ei=t.getParentView(), this.ei.index && (this.Kt.index=this.ei.index(t), this.Kt.active=!!this.ei.getActiveId && this.ei.getActiveId()==e.id)):(this.ei=t.$view.parentNode, this.Kt.node=ft('div'), this.ei.replaceChild(this.Kt.node, t.$view)), this.Qt.getBody().addView(t.$html?{
				view:'template',
				content:t.$view,
				css:'webix_fullscreen_html'
			}:t), this.Qt.show(), this.si(t));
		},
		exit:function() {
			if(this.Ht) {
				var t=this.Ht.config;
				this.Zt(!0), this.Ht.setPosition?(t.fullscreen= !1, this.Ht.resize()):(this.ei instanceof Element?(this.Ht.mt=null, this.Ht.ni && this.Ht.ni(this.Ht.config), this.ei.replaceChild(this.Ht.$view, this.Kt.node)):R(this.Kt.index)?(this.Ht.mt=this.ei, this.ei.Tt(this.Ht)):(this.ei.addView(this.Ht, this.Kt.index), this.Kt.active && this.Ht.show(!1, !1)), this.si(this.Ht, this.ii), this.Ht.$html || (this.Qt.getBody().hi=[]), this.Qt.close()), this.ri();
			}
		},
		ri:function() {delete this.ei, delete this.Ht, delete this.ii, delete this.Kt, delete this.Qt;},
		Zt:function(i) {
			var e=this, t=this.Ht, s={};
			if(t.setPosition) i?t.setPosition(this.Kt.left, this.Kt.top):(s.left=t.config.left, s.top=t.config.top, t.setPosition(0, 0)); else {
				var n=t.$view.style;
				['position', 'top', 'bottom', 'left', 'right'].forEach(function(t) {n[t]=i?e.Kt[t]:(s[t]=n[t], 'position'==t?'relative':0);});
			}
			return s;
		},
		si:function(t, i) {
			t.$html || (i=i || {
				height:0,
				minHeight:0,
				maxHeight:0,
				width:0,
				minWidth:0,
				maxWidth:0
			}, t.define(i), t.resize());
		},
		ti:function(t) {
			var i=this;
			return !1===t.head || 'object'==M(t.head)?t.head:{
				cols:[{
					template:t.head || '',
					type:'header',
					borderless:!0
				}, {
					view:'icon',
					icon:'wxi-close',
					click:function() {i.exit();}
				}]
			};
		}
	}, Mi={
		Ht:null,
		oi:{},
		bt:0,
		ai:0,
		ci:0,
		fi:{
			esc:'escape',
			up:'arrowup',
			down:'arrowdown',
			left:'arrowleft',
			right:'arrowright',
			pgdown:'pagedown',
			pgup:'pageup',
			space:' ',
			multiply:'*',
			add:'+',
			subtract:'-',
			decimal:'.',
			divide:'/',
			pausebreak:'pause',
			'5numlocked':'clear'
		},
		li:{
			input:1,
			button:1,
			textarea:1,
			select:1
		},
		di:function() {
			Zt(document, 'keydown', this.vi, {bind:this}), Zt(document.body, 'click', this._i, {bind:this}), Zt(document.body, 'mousedown', function() {this.ci=new Date;}, {bind:this}), Zt(document.body, 'focus', this.pi, {
				capture:!0,
				bind:this
			}), ii.destructors.push({obj:this});
		},
		destructor:function() {Mi.Ht=null;},
		getFocus:function() {return this.Ht;},
		Et:function(t) {this.mi=this.mi || t.P.id;},
		setFocus:function(t, i, e) {return (t=oi(t)) && !t.$view && (t=null), this.bt=ii.bt=new Date, this.Ht===t || (this.Ht && this.Ht.callEvent && this.Ht.callEvent('onBlur', [this.Ht]), t && t.callEvent && (t.callEvent('onFocus', [t, this.Ht]), e && t.callEvent('onTabFocus', [t, this.Ht])), y('onFocusChange', [t, this.Ht]), this.Ht && this.Ht.blur && !i && this.Ht.blur(), (this.Ht=t) && t.focus && !i && t.focus()), !0;},
		applyChanges:function(t) {
			var i=this.getFocus();
			i && i!=t && i.bi && i.bi(t);
		},
		hasFocus:function(t) {return t===this.Ht;},
		gi:function(t) {
			var i=_t(t, 'view_id') || this.mi;
			return i=oi(i), this.mi=null, ii.bt=new Date, i==this.Ht || (i?this.canFocus(i)?this.Ht && this.Ht.getFormView()==i && this.Ht.focus?this.Ht.focus():this.setFocus(i):i.$view.contains(t.target) && t.target.blur():this.setFocus(null)), !0;
		},
		_i:function(t) {return new Date-this.bt<100?(this.mi=null, !1):this.gi(t);},
		pi:function(t) {return !!this.li[t.target.nodeName.toLowerCase()] && this.gi(t);},
		wi:function(t) {return !ii.St || ((t.queryView(function(t) {return !t.getParentView();}, 'parent') || t).$view.style.zIndex || 0)>=ii.St;},
		canFocus:function(t) {
			return t.isVisible() && t.isEnabled() && !t.config.disabled && this.wi(t) && !t.queryView({disabled:!0}, 'parent');
		},
		xi:function(t) {
			var i=this.getFocus();
			if(t && !this.yi(t, i)) return !1;
			this.Mi('getPrev', t) || (this.Ht=null);
		},
		yi:function(t, i) {
			if(!t) return !1;
			if(!i) return !1;
			for(; i;) {
				if(i===t) return !0;
				i=i.getParentView();
			}
			return !1;
		},
		Si:function() {this && this.callEvent && this.callEvent('onTimedKeyPress', []);},
		vi:function(t) {
			var i=t.which || t.keyCode;
			95<i && i<106 && (i-=48);
			var e=this.getFocus();
			if(e && e.callEvent && (!1===e.callEvent('onKeyPress', [i, t]) && gt(t), e.hasEvent('onTimedKeyPress') && (clearTimeout(e.ki), e.ki=k(this.Si, e, [], e.P.keyPressTimeout || 250))), !1===this.Ci(t)) return gt(t), !1;
		},
		Mi:function(t, i) {
			var e=i || this.getFocus();
			if(e) {
				t=t || 'getNext';
				for(var s=e, n=V(); ;) {
					if((e=this[t](e)) && this.canFocus(e)) return this.setFocus(e);
					if(e===s || e.$fmarker==n) return i && document.activeElement.blur(), null;
					e.$fmarker=n;
				}
			}
		},
		$i:function(t, i) {
			var e=!i.shiftKey;
			if(Mi.ai=new Date, t && t.Di && !t.Di(e, i)) return !1;
			if(t && t.Ii) {
				if(t.editNext) return t.editNext(e);
				if(t.editStop) return t.editStop(), !0;
			} else k(function() {
				if((t=oi(document.activeElement)) && !Mi.canFocus(t)) return Mi.Mi(e?'getNext':'getPrev', t);
				Mi.setFocus(t, !0, !0);
			});
		},
		getTop:function(t) {
			for(var i, e=oi(t); e && (i=e.getParentView());) e=i;
			return e;
		},
		getNext:function(t, i) {
			var e=t.getChildViews();
			if(e.length && !i) for(var s=0; s<e.length; s++) if(this.canFocus(e[s])) return e[s];
			var n=t.getParentView();
			if(!n) return t;
			var h=n.getChildViews();
			if(h.length) for(var r=x.find.call(h, t)+1; r<h.length;) {
				if(this.canFocus(h[r])) return h[r];
				r++;
			}
			return this.getNext(n, !0);
		},
		getPrev:function(t, i) {
			var e=t.getChildViews();
			if(e.length && i) for(var s=e.length-1; 0<=s; s--) if(this.canFocus(e[s])) return this.getPrev(e[s], !0);
			if(i && this.canFocus(t)) return t;
			var n=t.getParentView();
			if(!n) return this.canFocus(t)?this.getPrev(t, !0):t;
			var h=n.getChildViews();
			if(h) for(var r=x.find.call(h, t)-1; 0<=r;) {
				if(this.canFocus(h[r])) return this.getPrev(h[r], !0);
				r--;
			}
			return this.getPrev(n, !0);
		},
		addHotKey:function(t, i, e) {
			var s=this.Ai(t);
			return e || (e=null), this.oi[s] || (this.oi[s]=[]), this.oi[s].push({
				handler:i,
				view:e
			}), t;
		},
		removeHotKey:function(t, i, e) {
			var s=this.Ai(t);
			if(i || e) {
				var n=this.oi[s];
				if(n) {
					for(var h=n.length-1; 0<=h; h--) e && n[h].view!==e || i && n[h].handler!==i || n.splice(h, 1);
					n.length || delete this.oi[s];
				}
			} else delete this.oi[s];
		},
		Ti:function(t, i, e, s, n) {return (t || '').toLowerCase()+'_'+['', i?'1':'0', e?'1':'0', s?'1':'0', n?'1':'0'].join('');},
		Ci:function(t) {
			var i=t.which || t.keyCode, e=!t.ctrlKey && !t.altKey && !t.metaKey && 9!=i && 27!=i && 13!=i, s=this.Ti(t.key, t.ctrlKey, t.shiftKey, t.altKey, t.metaKey), n=this.getFocus();
			return this.oi[s]?this.Fi(this.oi[s], n, t):!e || !this.oi.any_0000 || this.Fi(this.oi.any_0000, n, t);
		},
		Fi:function(t, i, e) {
			for(var s=0; s<t.length; s++) {
				var n=t[s];
				if(null===n.view || i===n.view || 'string'== typeof n.view && i && i.name===n.view) {
					var h=n.handler(i, e);
					if(!!h===h) return h;
				}
			}
			return !0;
		},
		Ai:function(t) {
			var i, e, s, n, h=this.fi, r=t.toLowerCase().split(/[ +\-_]/);
			i=e=s=n=0;
			for(var o='', a=0; a<r.length; a++) 'ctrl'===r[a]?i=1:'shift'===r[a]?e=1:'alt'===r[a]?s=1:'command'===r[a]?n=1:o=h[r[a]] || r[a];
			return this.Ti(o, i, e, s, n);
		},
		getState:function(t, i) {
			i=i || !1;
			var e={
				id:(t=oi(t)).config.id,
				width:t.config.width,
				height:t.config.height,
				gravity:t.config.gravity
			};
			if(R(t.config.collapsed) || (e.collapsed=t.config.collapsed), 'tabs'!==t.name && 'tabbar'!==t.name || (e.activeCell=t.getValue()), i && (e=[e], t.hi)) for(var s=0; s<t.hi.length; s++) e=e.concat(this.getState(t.hi[s], i));
			return e;
		},
		setState:function(t) {
			$(t) || (t=[t]);
			for(var i=0; i<t.length; i++) {
				var e=t[i], s=oi(e.id);
				s && (R(e.collapsed) || s.define('collapsed', e.collapsed), R(e.activeCell) || s.setValue(e.activeCell), s.define('width', e.width), s.define('height', e.height), s.define('gravity', e.gravity));
			}
			var n=oi(t[0].id);
			n && n.resize();
		}
	};
	pi(function() {
		Mi.di(), Mi.addHotKey('enter', function(t, i) {
			if(t && t.callEvent && t.callEvent('onEnter', [i]), t && t.editStop && t.Ii) return t.editStop(), !0;
			if(t && t.touchable) {
				var e=t.getFormView();
				e && !t.Vi && e.callEvent('onSubmit', [t, i]);
			}
		}), Mi.addHotKey('esc', function(t) {
			if(t) {
				if(t.editCancel && t.Ii) return t.editCancel(), !0;
				var i=t.getTopParentView();
				i && i.setPosition && (yi.Qt==i && yi.exit(), i.zi());
			}
		}), Mi.addHotKey('shift+tab', Mi.$i), Mi.addHotKey('tab', Mi.$i);
	}), t('UIManager', Mi);
	var Si={
		$init:function() {this.P=this.config={};},
		define:function(t, i) {return 'object'==M(t)?this.Bi(t):this.Hi(t, i);},
		Hi:function(t, i) {
			var e=this[t+'_setter'];
			return this.P[t]=e?e.call(this, i, t):i;
		},
		Bi:function(t) {if(t) for(var i in t) this.Hi(i, t[i]);},
		Rt:function(t, i) {
			var e={};
			i && (e=H.extend(e, i)), 'object'!=M(t) || t.tagName || H.extend(e, t, !0), this.Bi(e);
		},
		Ri:function(t, i) {
			for(var e in i) switch(M(t[e])) {
			case'object':
				t[e]=this.Ri(t[e] || {}, i[e]);
				break;
			case'undefined':
				t[e]=i[e];
			}
			return t;
		}
	}, ki={
		$init:function() {
			var t=this.zt=this.zt || {obj:this};
			ii.destructors.push(t);
		},
		destructor:function() {
			var t=this.P;
			if(this.Ei && this.editCancel(), this.callEvent && this.callEvent('onDestruct', []), this.destructor=function() {}, this.zt.obj=null, this.getChildViews) {
				var i=this.getChildViews();
				if(i) for(var e=0; e<i.length; e++) i[e].destructor();
				if(this.Bt) for(var s=0; s<this.Bt.length; s++) this.Bt[s].destructor();
			}
			if(delete si.views[t.id], t.$id) {
				var n=this.getTopParentView();
				n && n.Pi && n.Pi(t.$id);
			}
			this.ji=null, this.Ni=null, this.Li=null, this.Oi && (this.Oi.innerHTML='', this.Oi.ji=null), this.Vt && this.Vt.parentNode && this.Vt.parentNode.removeChild(this.Vt), this.data && this.data.destructor && this.data.destructor(), this.unbind && this.unbind(), this.data=null, this.mt=null, this.Vt=this.$view=this.Oi=this.tt=null, this.o=this.u=this.l={}, Mi.Ht==this && (Mi.Ht=null);
			var h=t.url;
			h && h.$proxy && h.release && h.release(), this.$scope=null, this.$destructed= !0;
		}
	};
	Zt(window, 'unload', function() {
		y('unload', []), ii.xt= !0;
		for(var t=0; t<ii.destructors.length; t++) {
			var i=ii.destructors[t].obj;
			i && i.destructor();
		}
		ii.destructors=[], ii.kt=b(), Jt();
	});
	var Ci={
		$init:function() {
			this.Wi=null, this.attachEvent('onSelectChange', function() {
				var t=this.getSelectedId();
				this.setCursor(t?t.id || t:null);
			}), this.attachEvent('onAfterCursorChange', this.Ui), this.attachEvent('onAfterDelete', function(t) {t==this.getCursor() && this.setCursor(null);}), this.data.attachEvent('onStoreUpdated', S(function(t, i, e) {t && t==this.getCursor() && 'paint'!=e && 'delete'!=e && this.Ui();}, this)), this.data.attachEvent('onClearAll', S(function() {this.Wi=null;}, this)), this.data.attachEvent('onIdChange', S(function(t, i) {this.Wi==t && (this.Wi=i, this.Ui());}, this));
		},
		refreshCursor:function() {this.Wi && this.callEvent('onAfterCursorChange', [this.Wi]);},
		setCursor:function(t) {t==this.Wi || null!==t && !this.getItem(t) || (this.callEvent('onBeforeCursorChange', [this.Wi]), this.Wi=t, this.callEvent('onAfterCursorChange', [t]));},
		getCursor:function() {return this.Wi;},
		Yi:function(t, i, e) {
			if('$level'==i && this.data.getBranch) return (t.data || t).importData(this.data.getBranch(this.getCursor()));
			var s=this.getItem(this.getCursor()) || this.P.defaultData || null;
			'$data'==i?('function'== typeof e?e.call(t, s, this):t.data.importData(s?s[e]:[]), t.callEvent('onBindApply', [s, i, this])):(e && (s=e(s)), this.qi(t, i, s));
		}
	}, $i={
		$init:function() {this.attachEvent('onChange', this.Ui);},
		Yi:function(t, i, e) {
			i=i || 'value';
			var s=this.getValue() || '';
			if(e && (s=e(s)), t.setValue) t.setValue(s); else if(t.filter) t.data.silent(function() {this.filter(i, s);}); else {
				var n={};
				n[i]=s, t.K(s) && t.setValues(n);
			}
			t.callEvent('onBindApply', [s, i, this]);
		}
	}, Di={
		$init:function() {this.attachEvent('onChange', this.Ui);},
		Yi:function(t, i, e) {
			var s=this.getValues() || null;
			e && (s=e(s)), this.qi(t, i, s);
		}
	}, Ii={
		$init:function() {this.Gi={}, this.Xi={}, this.Ji={}, this.Ki(this);},
		saveBatch:function(t) {this.Zi= !0, t.call(this), this.Zi= !1, this.Ui();},
		setBindData:function(t, i) {
			if(i && (this.Ji[i]= !0), this.setValue) this.setValue(t); else if(this.setValues) this.setValues(t); else {
				var e=this.getCursor();
				e?this.updateItem(e, t):this.add(t);
			}
			this.callEvent('onBindUpdate', [t, i]), this.save && this.save(), i && (this.Ji[i]= !1);
		},
		getBindData:function(t, i) {
			if(this.Xi[t]) return !1;
			var e=oi(t);
			e.isVisible(e.P.id) && (this.Xi[t]= !0, this.Yi(e, this.Gi[t][0], this.Gi[t][1]), i && e.filter && e.refresh());
		},
		addBind:function(t, i, e) {this.Gi[t]=[i, e];},
		removeBind:function(t) {delete this.Gi[t], delete this.Xi[t], delete this.Ji[t];},
		Ki:function(t) {t.filter?H.extend(this, Ci):t.setValue?H.extend(this, $i):H.extend(this, Di);},
		Ui:function() {
			if(!this.Zi) for(var t in this.Gi) this.Ji[t] || (this.Xi[t]= !1, this.getBindData(t, !0));
		},
		qi:function(t, i, e) {t.setValue?t.setValue(e && i?e[i]:e):t.filter?t.data.silent(function() {this.filter(i, e);}):!e && t.clear?t.clear():t.K(e) && t.setValues(l(e)), t.callEvent('onBindApply', [e, i, this]);}
	}, Ai={
		bind:function(t, i, e) {this.attachEvent || H.extend(this, g), 'string'== typeof t && (t=oi(t)), t.Qi && t.Qi(), this.Qi && this.Qi(), t.getBindData || H.extend(t, Ii), this.te(), t.addBind(this.P.id, i, e), this.ie=t.P.id, this.ee=this.P.id, this.se=this.attachEvent(this.touchable?'onAfterRender':'onBindRequest', function() {return t.getBindData(this.ee);}), this.refresh && this.isVisible(this.ee) && this.refresh();},
		unbind:function() {
			if(this.ie) {
				var t=oi(this.ie);
				t && t.removeBind(this.ee), this.detachEvent(this.se), this.ie=this.se=null;
			}
		},
		te:function() {
			var t=this.P;
			if(this.filter) {
				var i=t.id;
				this.data.ne=S(function() {oi(this.ie).Xi[i]= !1;}, this);
			}
			var e=this.render;
			this.render=function() {
				if(!this.he) {
					this.he= !0;
					var t=this.callEvent('onBindRequest');
					return this.he= !1, e.apply(this, !1===t?arguments:[]);
				}
			}, (this.getValue || this.getValues) && (this.save=function(t) {
				var i=oi(this.ie);
				if(t) i.setBindData(t); else {
					if(this.validate && !this.validate()) return !1;
					var e=this.getValue?this.getValue:this.getValues();
					i.setBindData(e, this.P.id), this.setDirty && this.setDirty(!1);
				}
			}), this.te=function() {};
		}
	}, Ti=window.webix_view || {}, Fi={
		name:'baseview',
		$init:function(t) {t.id || (t.id=ui(this.name)), this.mt=ii.mt, ii.mt=null, this.$scope=t.$scope || (this.mt?this.mt.$scope:ii.ft), this.Vt || (this.Oi=this.Vt=ft('DIV', {'class':'webix_view'}), this.$view=this.Vt);},
		$skin:!1,
		defaults:{
			width:0,
			height:0,
			gravity:1
		},
		getNode:function() {return this.Vt;},
		$setNode:function(t) {this.Vt=this.tt=this.$view=t;},
		getParentView:function() {return this.mt || null;},
		getTopParentView:function() {
			var t=this.getParentView();
			return t?t.getTopParentView():this;
		},
		getFormView:function() {
			var t=this.getParentView();
			return !t || t.re?t:t.getFormView();
		},
		getChildViews:function() {return [];},
		queryView:function(s, t) {
			var i;
			if('string'== typeof s && (s={view:s}), i='object'===M(s)?function(t) {
				var i=t.config;
				for(var e in s) if(i[e]!=s[e]) return !1;
				return !0;
			}:s, 'self'===t && i(this)) return this;
			var e='all'===t && [], n='parent'===t?this.oe:this.ae, h=this.ue(i, n, e);
			return 'all'===t?e:h;
		},
		ae:function(t) {return t.getChildViews();},
		oe:function(t) {
			var i=t.getParentView();
			return i?[i]:[];
		},
		ue:function(t, i, e) {
			for(var s=i(this), n=0; n<s.length; n++) {
				if(t(s[n])) {
					if(!e) return s[n];
					e.push(s[n]);
				}
				var h=s[n].ue(t, i, e);
				if(h && !e) return h;
			}
			return null;
		},
		isVisible:function(t) {
			if(this.P.hidden) return t && (this.ce || (this.ce=[], this.fe={}), this.fe[t] || (this.fe[t]= !0, this.ce.push(t))), !1;
			var i=this.getParentView();
			return !i || i.isVisible(t, this.P.id);
		},
		isEnabled:function() {
			if(this.le) return !1;
			var t=this.getParentView();
			return !t || t.isEnabled();
		},
		disable:function() {dt(this.le), this.P.disabled= !0, this.le=ft('div', {'class':'webix_disabled'}), this.Vt.appendChild(this.le), this.Vt.setAttribute('aria-disabled', 'true'), yt(this.Vt, 'webix_disabled_view', !0), Mi.xi(this);},
		enable:function() {this.P.disabled= !1, this.le && (dt(this.le), Mt(this.Vt, 'webix_disabled_view'), this.Vt.removeAttribute('aria-disabled'), this.le=null);},
		disabled_setter:function(t) {return t?this.disable():this.enable(), t;},
		container_setter:function(t) {return C(t), !0;},
		css_setter:function(t) {return 'object'==M(t) && (t=at(t)), this.Vt.className+=' '+t, t;},
		id_setter:function(t) {
			if(ii.lt && (ii.lt!=this || this.de)) {
				var i=this.config.$id=t;
				t=ui(((this.de || ii.lt).ve[t]=this).name), (this.de || ii.lt)._e[t]=i;
			}
			return si.views[t], (si.views[t]=this).Vt.setAttribute('view_id', t), t;
		},
		$setSize:function(t, i) {
			var e=this.pe;
			return (!e || e[0]!=t || e[1]!=i) && (this.pe=[t, i], this.$width=this.me=t-(this.be?q.scrollSize:0), this.$height=this.ge=i-(this.we?q.scrollSize:0), this.P.flex || (this.Vt.style.width=t+'px', this.Vt.style.height=i+'px'), !0);
		},
		$getSize:function(t, i) {
			var e=this.P, s=[1*(e.width || e.minWidth || 0), 1*(e.width || e.maxWidth || 1e5), 1*(e.height || e.minHeight || 0), 1*(e.height || e.maxHeight || 1e5), e.gravity];
			return (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2]) || isNaN(s[3])) && (this.P.id, e.width=e.height=e.maxWidth=e.maxHeight=e.minWidth=e.minHeight=0, s=[0, 0, 1e5, 1e5, 1]), s[0]+=t, s[1]+=t, s[2]+=i, s[3]+=i, s;
		},
		show:function(t, i) {
			var e=this.getParentView(), s=!arguments[2];
			e?(!i && !1!==i && this.P.animate && e.P.animate && (i=H.extend(e.P.animate?H.extend({}, e.P.animate):{}, this.P.animate, !0)), (s?e.xe:e.zi) && (s?e.xe:e.zi).call(e, this, i), s && this.ye(), t && s && e.show(!e.$$ && t)):this.P.hidden?s && (C(this.P.At || document.body).appendChild(this.Vt), this.P.hidden= !1, this.adjust(), this.callEvent && (this.callEvent('onViewShow', []), this.Me && vi(this, this.Me)), this.ye()):s || (this.P.hidden=this.P.It= !0, this.Vt && (this.P.At=this.Vt.parentNode, dt(this.Vt)));
		},
		ye:function() {
			if(this.ce) {
				for(var t=0; t<this.ce.length; t++) {
					var i=oi(this.ce[t]);
					i && i.render();
				}
				this.ce=[], this.fe={};
			}
		},
		Se:function(t, i) {
			var e=i.target, s=e.getAttribute('role');
			13!==t && 32!==t || 'button'!=s && 'tab'!=s || this.P.disabled || (xt(e, 'MouseEvents', 'click'), gt(i));
		},
		hidden_setter:function(t) {return t && this.hide(), this.P.hidden;},
		hide:function() {this.show(null, null, !0), Mi.xi(this);},
		adjust:function() {
			if(!this.Vt.parentNode) return !1;
			var t=this.Vt.parentNode.clientWidth || 0, i=this.Vt.parentNode.clientHeight || 0, e=this.$getSize(0, 0), s=this.Vt.parentNode==document.body && !this.setPosition;
			e[0]>t && (t=e[0]), e[2]>i && (i=e[2]), (!s || this.P.width) && t>e[1] && (t=e[1]), (!s || this.P.height) && i>e[3] && (i=e[3]), this.$setSize(t, i), ii.vt && (ii.vt= !1, this.adjust());
		},
		resize:function() {
			if(!(ii.dt || ii.pt || ii._t)) {
				var t=this.getParentView();
				t?t.resizeChildren?t.resizeChildren():t.resize():(this.adjust(), y('onResize', []));
			}
		}
	}, Vi={
		api:Fi,
		view:H.protoUI(Fi, Si, ki, Ai, Ti)
	}, zi={
		name:'view',
		$init:function(t) {this.ni(t);},
		ni:function(t) {
			var i=R(t.borderless);
			i && !this.setPosition && t.$topView && (i= !(t.borderless= !0)), i && this.defaults.borderless || t.borderless?t.Dt={
				top:!0,
				left:!0,
				bottom:!0,
				right:!0
			}:(t.Dt || (t.Dt={}), this.Oi.style.borderWidth='1px');
		},
		$getSize:function(t, i) {
			var e=this.P.Dt;
			return e && (t+=(e.left?0:1)+(e.right?0:1), i+=(e.top?0:1)+(e.bottom?0:1)), Vi.api.$getSize.call(this, t, i);
		},
		$setSize:function(t, i) {
			var e=this.P.Dt;
			return e && (t-=(e.left?0:1)+(e.right?0:1), i-=(e.top?0:1)+(e.bottom?0:1)), Vi.api.$setSize.call(this, t, i);
		}
	}, Bi=H.protoUI(zi, Vi.view), Hi={
		api:zi,
		view:Bi
	};
	Bi.call(-1);
	var Ri=H.proto({
		template_setter:function(t) {this.type.template=Yt(t);},
		Q:function(t) {
			var i=this.type;
			return (i.templateStart?i.templateStart(t, i):'')+i.template(t, i)+(i.templateEnd?i.templateEnd(t, i):'');
		},
		customize:function(t) {ti(this, t);}
	}, qt), Ei={
		name:'tooltip',
		defaults:{
			dy:0,
			dx:20
		},
		$init:function(t) {
			'string'== typeof t && (t={template:t}), this.$view=this.Vt=this.Oi=this.tt=ft('DIV', {
				role:'alert',
				'aria-atomic':'true'
			}), this.Oi.className='webix_tooltip', vt(this.Oi, document.body.firstChild, document.body);
		},
		adjust:function() {},
		isVisible:function() {return this.ke;},
		Ce:function(t) {this.callEvent('onBeforeRender', [t]) && (this.tt.innerHTML='', this.tt.innerHTML=t, this.callEvent('onAfterRender', []));},
		css_setter:function(t) {return 'object'===M(t) && (t=at(t)), this.Vt.className='webix_tooltip '+t, t;},
		show:function(t, i) {
			if(!this.$e) if(this.ke= !0, 'string'== typeof t?this.Ce(t):(this.data=H.extend({}, t), this.render()), this.tt.firstChild) {
				var e=Math.max(document.documentElement.clientWidth, window.innerWidth || 0), s=Math.max(document.documentElement.clientHeight, window.innerHeight || 0), n=e-i.x, h=s-i.y;
				this.Oi.style.display='block', n-this.P.dx>this.Oi.offsetWidth?n=i.x:(n=i.x-2*this.P.dx-this.Oi.offsetWidth)<0 && (n=0), h-this.P.dy>this.Oi.offsetHeight?h=i.y:(h=i.y-2*this.P.dy-this.Oi.offsetHeight)<0 && (h=0), this.Oi.style.left=n+this.P.dx+'px', this.Oi.style.top=h+this.P.dy+'px';
			} else this.hide();
		},
		hide:function() {this.ke && (this.data=null, this.Oi.style.display='none', this.ke= !1);},
		disable:function() {this.$e= !0;},
		enable:function() {this.$e= !1;},
		type:{
			template:Yt('{obj.value}'),
			templateStart:Yt.empty,
			templateEnd:Yt.empty
		}
	}, Pi=(H.protoUI(Ei, Ri, Si, g, Hi.view), {
		tooltip_setter:function(t) {if(t) return 'function'!= typeof t && 'string'!= typeof t || (t={template:t}), 'object'!==M(t) && (t={}), this.De(), t;},
		De:function() {
			ai.addTooltip(this), this.attachEvent('onDestruct', function() {ai.removeTooltip(this);}), this.attachEvent('onAfterScroll', function() {ai.jt && ai.Ut();}), this.De=function() {};
		},
		$tooltipIn:function(t) {
			var i=ai.Nt, e=H.extend({
				dx:20,
				dy:0,
				template:'{obj.value}',
				css:''
			}, this.P.tooltip, !0);
			return i.define(e), t;
		},
		$tooltipOut:function() {return ai.Ut(), null;},
		$tooltipMove:function(t, i, e) {ai.Nt.hide(), clearTimeout(ai.Xt), ai.Xt=k(this.Ie, this, [t, i, e], ai.delay);},
		Ie:function(t, i, e) {
			var s=e || this.Ae(t, i);
			s && this.isVisible() && ai.Nt.show(s, bt(i));
		},
		Ae:function(t, i) {
			if(this.locate && this.getItem) {
				var e=this.locate(i);
				return e?this.getItem(e):null;
			}
			return this.P;
		}
	}), ji=H.proto({
		$init:function(t) {
			this.Te=[], this.Fe=R(t.series)?t.name:t.series, this.Ve=C(t.container || t);
			var i=t.width*(window.devicePixelRatio || 1), e=t.height*(window.devicePixelRatio || 1), s=t.style || '';
			s+=';width:'+t.width+'px;height:'+t.height+'px;', this.ze(t.name, s, i, e, t.title);
		},
		ze:function(t, i, e, s, n) {
			return this.Be=ft('canvas', {
				title:n,
				width:e,
				height:s,
				canvas_id:t,
				style:i || ''
			}), this.Ve.appendChild(this.Be), this.Be;
		},
		getCanvas:function(t) {
			var i=(this.Be || this.ze(this.Oi)).getContext(t || '2d');
			return this.He || (this.He= !0, i.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)), i;
		},
		Re:function(t, i) {this.Be && (this.Be.setAttribute('width', t*(window.devicePixelRatio || 1)), this.Be.setAttribute('height', i*(window.devicePixelRatio || 1)), this.Be.style.width=t+'px', this.Be.style.height=i+'px', this.He= !1);},
		renderText:function(t, i, e, s, n) {
			if(e) {
				n && (n=Math.max(n, 0)), i && (i=Math.max(i, 0));
				var h=ft('DIV', {
					'class':'webix_canvas_text'+(s?' '+s:''),
					style:'left:'+t+'px; top:'+i+'px;',
					'aria-hidden':'true'
				}, e);
				return this.Ve.appendChild(h), this.Te.push(h), n && (h.style.width=n+'px'), h;
			}
		},
		renderTextAt:function(t, i, e, s, n, h, r) {
			var o=this.renderText.call(this, e, s, n, h, r);
			return o && (t && (o.style.top='middle'==t?parseInt(s-o.offsetHeight/2, 10)+'px':s-o.offsetHeight+'px'), i && (o.style.left='left'==i?e-o.offsetWidth+'px':parseInt(e-o.offsetWidth/2, 10)+'px')), o;
		},
		clearCanvas:function(t) {
			var i=[];
			if(dt(this.Te), this.Te=[], !t && this.Ve.ji) {
				for(i=this.Ee(); i.length;) i[0].parentNode.removeChild(i[0]), i.splice(0, 1);
				i=null, this.Ve.ji.getElementsByTagName('AREA').length || (this.Ve.ji.parentNode.removeChild(this.Ve.ji), this.Ve.ji=null);
			}
			this.getCanvas().clearRect(0, 0, this.Be.offsetWidth || Math.floor(this.Be.width/(window.devicePixelRatio || 1)), this.Be.offsetHeight || Math.floor(this.Be.height/(window.devicePixelRatio || 1)));
		},
		toggleCanvas:function() {this.Pe('none'==this.Be.style.display);},
		showCanvas:function() {this.Pe(!0);},
		hideCanvas:function() {this.Pe(!1);},
		Pe:function(t) {
			var i, e;
			for(e=0; e<this.Te.length; e++) this.Te[e].style.display=t?'':'none';
			if(this.Ve.ji) for(i=this.Ee(), e=0; e<i.length; e++) t?i[e].removeAttribute('disabled'):i[e].setAttribute('disabled', 'true');
			this.Be.style.display=t?'':'none';
		},
		Ee:function() {
			var t, i, e=[];
			for(t=this.Ve.ji.getElementsByTagName('AREA'), i=0; i<t.length; i++) t[i].getAttribute('userdata')==this.Fe && e.push(t[i]);
			return e;
		}
	}), Ni=function(t, i) {
		var e=i;
		if($(t)) for(var s=0; s<t.length; s++) {
			if($(i) && (e=i[s]), 'slide'==e.type) {
				if('out'==e.subtype && 0===s) continue;
				if('in'==e.subtype && 1==s) continue;
			}
			if('flip'!=e.type) Ni(t[s], e); else {
				var n=l(e);
				0===s && (n.type='flipback'), 1==s && (n.callback=null), Ni(t[s], n);
			}
		} else {
			var h=C(t);
			h.je?Ni.end(h, e):Ni.start(h, e);
		}
	};
	Ni.end=function(t, i) {t.style[q.transitionDuration]='1ms', t.je=null, ii.Ct && window.clearTimeout(ii.Ct), ii.Ct=k(Ni, this, [t, i], 10);}, Ni.isSupported=function() {return q.transform && q.transition && !q.isOpera;}, Ni.formLine=function(t, i, e) {
		var s=e.direction;
		i.parentNode && (i.parentNode.style.position='relative'), i.style.position='absolute', t.style.position='absolute';
		var n=q.isFF?'top'==s || 'left'==s?-1:1:0;
		return 'top'==s || 'bottom'==s?(t.style.left='0px', t.style.top=(e.top || n)+('top'==s?1:-1)*i.offsetHeight+'px'):(t.style.top=(e.top || 0)+'px', t.style.left=n+('left'==s?1:-1)*i.offsetWidth+'px'), i.parentNode==t.parentNode && e.keepViews?t.style.display='':vt(t, i.nextSibling, i.parentNode), 'slide'==e.type && 'out'==e.subtype && (t.style.left='0px', t.style.top=(e.top || 0)+'px', i.parentNode.removeChild(i), vt(i, t.nextSibling, t.parentNode)), [t, i];
	}, Ni.breakLine=function(t) {arguments[1]?t[1].style.display='none':dt(t[1]), Ni.clear(t[0]), Ni.clear(t[1]), t[0].style.position='';}, Ni.clear=function(t) {t.style[q.transform]='none', t.style[q.transition]='none', t.style.top=t.style.left='';}, Ni.defaults={
		type:'slide',
		delay:'0',
		duration:'500',
		timing:'ease-in-out',
		x:0,
		y:0
	}, Ni.start=function(s, t) {
		'string'== typeof t && (t={type:t}), t=Si.Ri(t, Ni.defaults);
		var i, e, n=q.cssPrefix, h=s.je=t;
		switch('slide'==h.type && h.direction) {
		case'right':
			h.x=s.offsetWidth;
			break;
		case'left':
			h.x= -s.offsetWidth;
			break;
		case'top':
			h.y= -s.offsetHeight;
			break;
		case'bottom':
		default:
			h.y=h.y || s.offsetHeight;
		}
		'flip'!=h.type && 'flipback'!=h.type || (i=[0, 0], e='scaleX', 'vertical'==h.subtype?(i[0]=20, e='scaleY'):i[1]=20, 'right'!=h.direction && 'bottom'!=h.direction || (i[0]*= -1, i[1]*= -1));
		var r=h.duration+'ms '+h.timing+' '+h.delay+'ms', o=n+'TransformStyle: preserve-3d;', a='', u='';
		switch(h.type) {
		case'fade':
			a='opacity '+r, o='opacity: 0;';
			break;
		case'show':
			a='opacity '+r, o='opacity: 1;';
			break;
		case'flip':
			r=h.duration/2+'ms '+h.timing+' '+h.delay+'ms', u='skew('+i[0]+'deg, '+i[1]+'deg) '+e+'(0.00001)', a='all '+r;
			break;
		case'flipback':
			h.delay+=h.duration/2, r=h.duration/2+'ms '+h.timing+' '+h.delay+'ms', s.style[q.transform]='skew('+ -1*i[0]+'deg, '+ -1*i[1]+'deg) '+e+'(0.00001)', s.style.left='0', u='skew(0deg, 0deg) '+e+'(1)', a='all '+r;
			break;
		case'slide':
			var c=h.x+'px', f=h.y+'px';
			u=q.translate+'('+c+', '+f+('translate3d'==q.translate?', 0':'')+')', a=n+'transform '+r;
		}
		k(function() {
			s.style[q.transition]=a, k(function() {
				o && (s.style.cssText+=o), u && (s.style[q.transform]=u);
				var i=!1, e=Zt(s, q.transitionEnd, function(t) {s.je=null, h.callback && h.callback.call(h.master || window, s, h, t), i= !0, Qt(e);});
				window.setTimeout(function() {
					if(!i) {
						var t=h.master || window;
						s.je=null, !t.$destructed && h.callback && h.callback.call(t, s, h), i= !0, Qt(e);
					}
				}, 1.3*(1*h.duration+1*h.delay));
			});
		});
	};
	var Li, Oi;

	function Wi(t) {
		if(Ui[t], Oi!==t) for(var i in Ui.$active=Li=Ui[t], Ui.$name=Oi=t, si) {
			var e=si[i];
			e && e.prototype && e.prototype.$skin && e.prototype.$skin(e.prototype);
		}
	}

	var Ui={
		set:Wi,
		material:{
			topLayout:'space',
			barHeight:44,
			tabbarHeight:42,
			sidebarTitleHeight:44,
			rowHeight:36,
			toolbarHeight:44,
			listItemHeight:36,
			inputHeight:38,
			buttonHeight:38,
			inputPadding:3,
			menuHeight:36,
			labelTopHeight:22,
			propertyItemHeight:28,
			timelineItemHeight:70,
			unitHeaderHeight:36,
			inputSpacing:4,
			borderWidth:1,
			sliderHandleWidth:14,
			sliderPadding:10,
			sliderBorder:1,
			vSliderPadding:15,
			vSliderHeight:100,
			switchHeight:22,
			switchWidth:50,
			layoutMargin:{
				space:10,
				wide:10,
				clean:0,
				head:4,
				line:-1,
				toolbar:4,
				form:8,
				accordion:2
			},
			layoutPadding:{
				space:10,
				wide:0,
				clean:0,
				head:0,
				line:0,
				toolbar:2,
				form:17,
				accordion:0
			},
			tabMargin:0,
			tabOffset:0,
			tabBottomOffset:0,
			tabTopOffset:0,
			tabBorder:!0,
			customCheckbox:!0,
			customRadio:!0,
			sidebarMarkAll:!0,
			popupNoPoint:!0,
			borderlessPopup:!0,
			popupPadding:0,
			dataPadding:12,
			calendarWeekHeaderHeight:18,
			padding:0,
			accordionType:'accordion',
			optionHeight:32,
			organogramLineColor:'#CCD7E6',
			timelineColor:'#1CA1C1',
			backColor:'#FFFFFF'
		},
		mini:{
			topLayout:'space',
			barHeight:36,
			tabbarHeight:34,
			sidebarTitleHeight:36,
			rowHeight:28,
			toolbarHeight:36,
			listItemHeight:28,
			inputHeight:30,
			buttonHeight:30,
			inputPadding:3,
			menuHeight:28,
			labelTopHeight:16,
			propertyItemHeight:24,
			unitHeaderHeight:28,
			timelineItemHeight:50,
			inputSpacing:4,
			borderWidth:1,
			sliderHandleWidth:12,
			sliderPadding:10,
			sliderBorder:1,
			vSliderPadding:13,
			vSliderHeight:100,
			switchHeight:20,
			switchWidth:40,
			layoutMargin:{
				space:5,
				wide:5,
				clean:0,
				head:4,
				line:-1,
				toolbar:4,
				form:8,
				accordion:2
			},
			layoutPadding:{
				space:5,
				wide:0,
				clean:0,
				head:0,
				line:0,
				toolbar:2,
				form:12,
				accordion:0
			},
			tabMargin:0,
			tabOffset:0,
			tabBottomOffset:0,
			tabTopOffset:0,
			tabBorder:!0,
			customCheckbox:!0,
			customRadio:!0,
			sidebarMarkAll:!0,
			popupNoPoint:!0,
			borderlessPopup:!0,
			popupPadding:0,
			dataPadding:12,
			calendarWeekHeaderHeight:18,
			padding:0,
			accordionType:'accordion',
			optionHeight:24,
			organogramLineColor:'#CCD7E6',
			timelineColor:'#1CA1C1',
			backColor:'#FFFFFF'
		},
		flat:{
			topLayout:'space',
			barHeight:46,
			tabbarHeight:46,
			rowHeight:34,
			toolbarHeight:46,
			sidebarTitleHeight:45,
			listItemHeight:34,
			inputHeight:38,
			buttonHeight:38,
			inputPadding:3,
			menuHeight:34,
			labelTopHeight:22,
			unitHeaderHeight:20,
			propertyItemHeight:28,
			timelineItemHeight:70,
			inputSpacing:4,
			borderWidth:1,
			sliderHandleWidth:14,
			sliderPadding:10,
			sliderBorder:1,
			vSliderPadding:15,
			vSliderHeight:100,
			switchHeight:22,
			switchWidth:50,
			layoutMargin:{
				space:10,
				wide:10,
				clean:0,
				head:4,
				line:-1,
				toolbar:4,
				form:8,
				accordion:10
			},
			layoutPadding:{
				space:10,
				wide:0,
				clean:0,
				head:0,
				line:0,
				toolbar:3,
				form:17,
				accordion:0
			},
			tabMargin:4,
			tabOffset:0,
			tabBottomOffset:6,
			tabTopOffset:1,
			customCheckbox:!0,
			customRadio:!0,
			popupPadding:8,
			dataPadding:10,
			calendarWeekHeaderHeight:24,
			padding:0,
			accordionType:'accordion',
			optionHeight:32,
			timelineColor:'#3498DB',
			backColor:'#FFFFFF'
		},
		compact:{
			topLayout:'space',
			barHeight:34,
			tabbarHeight:34,
			sidebarTitleHeight:34,
			rowHeight:24,
			toolbarHeight:34,
			listItemHeight:28,
			unitHeaderHeight:20,
			propertyItemHeight:24,
			timelineItemHeight:50,
			inputHeight:30,
			buttonHeight:30,
			inputPadding:3,
			menuHeight:28,
			labelTopHeight:16,
			inputSpacing:4,
			borderWidth:1,
			sliderHandleWidth:12,
			sliderPadding:10,
			sliderBorder:1,
			vSliderPadding:13,
			vSliderHeight:100,
			switchHeight:20,
			switchWidth:40,
			layoutMargin:{
				space:5,
				wide:5,
				clean:0,
				head:4,
				line:-1,
				toolbar:4,
				form:4,
				accordion:5
			},
			layoutPadding:{
				space:5,
				wide:0,
				clean:0,
				head:0,
				line:0,
				toolbar:1,
				form:12,
				accordion:0
			},
			tabMargin:3,
			tabOffset:0,
			tabBottomOffset:3,
			tabTopOffset:1,
			customCheckbox:!0,
			customRadio:!0,
			popupPadding:8,
			dataPadding:10,
			calendarWeekHeaderHeight:24,
			padding:0,
			accordionType:'accordion',
			optionHeight:23,
			timelineColor:'#3498DB',
			backColor:'#FFFFFF'
		},
		contrast:{
			topLayout:'space',
			barHeight:46,
			tabbarHeight:46,
			rowHeight:34,
			toolbarHeight:46,
			sidebarTitleHeight:45,
			listItemHeight:34,
			unitHeaderHeight:20,
			inputHeight:38,
			buttonHeight:38,
			inputPadding:3,
			menuHeight:34,
			labelTopHeight:22,
			propertyItemHeight:28,
			timelineItemHeight:70,
			inputSpacing:4,
			borderWidth:1,
			sliderHandleWidth:14,
			sliderPadding:10,
			sliderBorder:1,
			vSliderPadding:15,
			vSliderHeight:100,
			switchHeight:22,
			switchWidth:50,
			layoutMargin:{
				space:10,
				wide:10,
				clean:0,
				head:4,
				line:-1,
				toolbar:8,
				form:8,
				accordion:10
			},
			layoutPadding:{
				space:10,
				wide:0,
				clean:0,
				head:0,
				line:0,
				toolbar:3,
				form:17,
				accordion:0
			},
			tabMargin:4,
			tabOffset:0,
			tabBottomOffset:6,
			tabTopOffset:1,
			customCheckbox:!0,
			customRadio:!0,
			popupPadding:8,
			dataPadding:10,
			calendarWeekHeaderHeight:24,
			padding:0,
			accordionType:'accordion',
			optionHeight:32,
			timelineColor:'#B300B3',
			backColor:'#393939'
		}
	};
	Wi(window.webix_skin || 'material');
	var Yi={
		config:{
			longTouchDelay:1e3,
			scrollDelay:150,
			gravity:500,
			deltaStep:30,
			speed:'0ms',
			finish:1500,
			ellastic:!0
		},
		limit:function(t) {Yi.Ne=!1!==t;},
		disable:function() {Yi.$e= !0;},
		enable:function() {Yi.$e= !1;},
		$init:function() {Yi.$init=function() {}, Zt(document.body, Gi.down, Yi.Le, {passive:!1}), Zt(document.body, Gi.move, Yi.Oe, {passive:!1}), Zt(document.body, Gi.up, Yi.We), Zt(document.body, 'dragstart', function(t) {if(!Yi.$e && !Yi.Ne) return gt(t);}), Yi.Ue(), Yi.Ye=[null, null], Yi.$active= !0;},
		Ue:function() {
			Yi.qe=Yi.Ge=Yi.Xe=Yi.Je=null, Yi.Ke=Yi.Ze=Yi.Qe=Yi.ts=null, Yi.es={
				ss:0,
				ns:0,
				hs:0
			}, Yi.rs && (Mt(Yi.rs, 'webix_touch'), Yi.rs=null), window.clearTimeout(Yi.os), Yi.us= !0, Yi.cs= !0, Yi.fs= !0, Yi.ls || Yi.ds();
		},
		We:function(t) {
			if(Yi.qe) {
				if(Yi.Ke) {
					var i=Yi.vs(Yi.Ze), e=i.e, s=i.f, n=Yi.config.finish, h=Yi._s(t, !0), r=oi(Yi.Ze), o=r && r.$scroll?r.$scroll.gravity:Yi.config.gravity;
					if(h.hs) {
						var a=e+o*h.ss/h.hs, u=s+o*h.ns/h.hs, c=Yi.Ye[0]?Yi.ps(a, !1, !1, Yi.Qe.dx, Yi.Qe.px):e, f=Yi.Ye[1]?Yi.ps(u, !1, !1, Yi.Qe.dy, Yi.Qe.py):s, l=Math.max(Math.abs(c-e), Math.abs(f-s));
						l<150 && (n=n*l/150), c==e && f==s || (n=Math.round(n*Math.max((c-e)/(a-e), (f-s)/(u-s))));
						var d={
							e:c,
							f:f
						};
						(r=oi(Yi.Ze)) && r.adjustScroll && r.adjustScroll(d), n=Math.max(100, n), e!=d.e || s!=d.f?(Yi.ms(Yi.Ze, d.e, d.f, n+'ms'), Yi.bs && Yi.bs.gs(d.e, d.f, n+'ms'), Yi.ws(d.e, d.f, n+'ms')):Yi.ds();
					} else Yi.ds();
				} else Yi.ts || (Yi.fs && !Yi.cs?Yi.xs('onSwipeX'):Yi.cs && !Yi.fs && Yi.xs('onSwipeY'));
				Yi.xs('onTouchEnd'), Yi.Ue();
			}
		},
		Oe:function(t) {
			if(Yi.Je && Yi.qe) {
				var i=Yi._s(t);
				if(Yi.xs('onTouchMove'), Yi.Ke) Yi.ys(i); else if(Yi.cs=Yi.Ms(i.Ss, 'x', Yi.cs), Yi.fs=Yi.Ms(i.ks, 'y', Yi.fs), Yi.Ke) {
					var e=Yi.Cs('onBeforeScroll', !0);
					if(e) {
						var s={};
						e.callEvent('onBeforeScroll', [s]), s.update && (Yi.config.speed=s.speed, Yi.config.scale=s.scale);
					}
					Yi.$s(i);
				} else if(q.isMac) {
					var n=oi(Yi.qe);
					if(n && n.$hasYScroll && n.$hasYScroll()) return gt(t);
				}
				return Yi.Ke?gt(t):void 0;
			}
		},
		ys:function() {
			if(Yi.Ze) {
				var t=Yi.vs(Yi.Ze), i=Yi.Xe || Yi.qe, e=oi(Yi.Ze), s=e && e.$scroll?e.$scroll.ellastic:Yi.config.ellastic;
				Yi.Ye[0] && (t.e=Yi.ps(t.e-i.x+Yi.Ge.x, s, t.e, Yi.Qe.dx, Yi.Qe.px)), Yi.Ye[1] && (t.f=Yi.ps(t.f-i.y+Yi.Ge.y, s, t.f, Yi.Qe.dy, Yi.Qe.py)), Yi.ms(Yi.Ze, t.e, t.f, '0ms'), Yi.bs && Yi.bs.gs(t.e, t.f, '0ms'), Yi.ws(t.e, t.f, '0ms');
			}
		},
		ws:function(t, i, e) {
			var s=Yi.Qe.px/Yi.Qe.dx* -t, n=Yi.Qe.py/Yi.Qe.dy* -i;
			Yi.Ye[0] && Yi.ms(Yi.Ye[0], s, 0, e), Yi.Ye[1] && Yi.ms(Yi.Ye[1], 0, n, e);
		},
		scrollTo:function(t, i, e, s) {Yi.ms(t, i, e, s);},
		ms:function(t, i, e, s) {
			if(s) {
				if(Yi.ls= !0, t) {
					var n=Yi.config.translate || q.translate;
					t.style[q.transform]=n+'('+Math.round(i)+'px, '+Math.round(e)+'px'+('translate3d'==n?', 0':'')+')', t.style[q.transitionDuration]=s;
				}
			} else t.style[q.transform]='';
		},
		vs:function(t) {
			var i, e=window.getComputedStyle(t)[q.transform];
			if('none'==e) i={
				e:0,
				f:0
			}; else if(window.WebKitCSSMatrix) i=new WebKitCSSMatrix(e); else if(window.MSCSSMatrix) i=new MSCSSMatrix(e); else {
				var s=e.replace(/(matrix\()(.*)(\))/gi, '$2');
				s=(s=s.replace(/\s/gi, '')).split(','), i={};
				for(var n=['a', 'b', 'c', 'd', 'e', 'f'], h=0; h<n.length; h++) i[n[h]]=parseInt(s[h], 10);
			}
			return Yi.bs && Yi.bs.Ds(i), i;
		},
		ps:function(t, i, e, s, n) {
			if(t===e) return t;
			var h=Math.abs(t-e);
			if(0<t) return i?e+h/(t-e)*Math.sqrt(h):0;
			var r=s-n;
			return r+t<0?i?e-Math.sqrt(-(t-e)):-r:t;
		},
		Is:function(t) {
			if(!t.scroll_enabled) {
				t.scroll_enabled= !0, t.parentNode.style.position='relative';
				var i=q.cssPrefix;
				t.style.cssText+=i+'transition: '+i+'transform; '+i+'user-select:none; '+i+'transform-style:flat;', t.addEventListener(q.transitionEnd, Yi.ds, !1);
			}
		},
		$s:function() {-1!=Yi.Ke.indexOf('x') && (Yi.Ye[0]=Yi.As('x', Yi.Qe.dx, Yi.Qe.px, 'width')), -1!=Yi.Ke.indexOf('y') && (Yi.Ye[1]=Yi.As('y', Yi.Qe.dy, Yi.Qe.py, 'height')), Yi.Is(Yi.Ze), window.setTimeout(function() {Yi.ys(), Yi.Qe && !Yi.Qe.hidden && (Yi.Ye[0] && (Yi.Ye[0].style.visibility='visible'), Yi.Ye[1] && (Yi.Ye[1].style.visibility='visible'));}, 0);},
		As:function(t, i, e, s) {
			if(i-e<2) {
				var n=Yi.vs(Yi.Ze), h='y'==t?n.e:0, r='y'==t?0:n.f;
				return Yi.bs || Yi.ms(Yi.Ze, h, r, '0ms'), Yi.Ke=Yi.Ke.replace(t, ''), '';
			}
			var o=ft('DIV', {'class':'webix_scroll_'+t}, '');
			return o.style.visibility='hidden', o.style[s]=Math.max(e*e/i-7, 10)+'px', Yi.Qe.left && ('x'===t?o.style.left=Yi.Qe.left+'px':o.style.right=-Yi.Qe.left+'px'), Yi.Ze.parentNode.appendChild(o), o;
		},
		Ms:function(t, i, e) {return t>Yi.config.deltaStep?(Yi.us && (Yi.Ts(i), Yi.Fs(i), -1==(Yi.Ke || '').indexOf(i) && (Yi.Ke='')), !1):e;},
		ds:function() {
			var t, i, e;
			(e=oi(Yi.Ze || this)) && (Yi.Ze?t=Yi.vs(Yi.Ze):e.getScrollState && (t={
				e:-(i=e.getScrollState()).x,
				f:-i.y
			}), y('onAfterScroll', [t]), e.callEvent && e.callEvent('onAfterScroll', [t])), Yi.Ke || (dt(Yi.Ye), Yi.Ye=[null, null]), Yi.ls= !1;
		},
		Ts:function() {window.clearTimeout(Yi.os), Yi.us= !1;},
		Vs:function(t) {
			if(!Yi.Ye[0] && !Yi.Ye[1]) return !0;
			Yi.zs(t, Yi.Ye[0]?'x':'y');
		},
		Le:function(t) {
			var i=t.target;
			if(!Yi.$e) {
				Yi.ts=null, Yi.Je=Yi.qe=Gi.context(t);
				var e=oi(t);
				!Yi.Ne || Yi.Bs() || e && e.$touchCapture || (Yi.Je=null), Yi.xs('onTouchStart'), Yi.Vs(t) && (Yi.os=window.setTimeout(Yi.Hs, Yi.config.longTouchDelay)), !e || !e.touchable || i.className && 0===i.className.indexOf('webix_view') || (Yi.rs=e.getNode(t), yt(Yi.rs, 'webix_touch'));
			}
		},
		Hs:function() {Yi.qe && (Yi.ts= !0, Yi.xs('onLongTouch'), y('onClick', [Yi.qe]));},
		zs:function(t, i) {
			Yi.Fs(i);
			var e=Yi.Ye[0] || Yi.Ye[1];
			if(e) {
				var s=Yi.Cs('onBeforeScroll', !0);
				s && s.callEvent('onBeforeScroll', [Yi.qe, Yi.Ge]);
			}
			!e || Yi.Ze && e.parentNode==Yi.Ze.parentNode || (Yi.Ue(), Yi.ds(), Yi.qe=Gi.context(t)), Yi.Oe(t);
		},
		_s:function(t) {return Yi.Xe=Yi.Ge, Yi.Ge=Gi.context(t), Yi.es.Ss=Math.abs(Yi.qe.x-Yi.Ge.x), Yi.es.ks=Math.abs(Yi.qe.y-Yi.Ge.y), Yi.Xe && (Yi.Ge.time-Yi.Xe.time<Yi.config.scrollDelay?(Yi.es.ss=Yi.es.ss/1.3+Yi.Ge.x-Yi.Xe.x, Yi.es.ns=Yi.es.ns/1.3+Yi.Ge.y-Yi.Xe.y):Yi.es.ns=Yi.es.ss=0, Yi.es.hs=Yi.es.hs/1.3+(Yi.Ge.time-Yi.Xe.time)), Yi.es;},
		Rs:function(t) {
			Yi.Qe={
				dx:t.offsetWidth,
				dy:t.offsetHeight,
				px:t.parentNode.offsetWidth,
				py:t.parentNode.offsetHeight
			};
		},
		Bs:function(t) {
			var i=Yi.qe.target;
			if(!q.touch && !q.transition && !q.transform) return null;
			for(; i && "BODY"!=i.tagName;) {
				if(i.getAttribute) {
					var e=i.getAttribute('touch_scroll');
					if(e && (!t || -1!=e.indexOf(t))) return [i, e];
				}
				i=i.parentNode;
			}
			return null;
		},
		Fs:function(t) {
			var i=this.Bs(t);
			return i && (Yi.Ke=i[1], Yi.Ze=i[0], Yi.Rs(i[0])), i;
		},
		xs:function(t) {
			y(t, [Yi.qe, Yi.Ge]);
			var i=Yi.Cs(t);
			i && i.callEvent(t, [Yi.qe, Yi.Ge]);
		},
		Cs:function(t, i) {
			var e=oi(i?Yi.Ze:Yi.qe);
			if(!e) return null;
			for(; e;) {
				if(e.hasEvent && e.hasEvent(t)) return e;
				e=e.getParentView();
			}
			return null;
		},
		Es:function(t) {
			if(t.touches[0]) return {
				target:t.target,
				x:t.touches[0].pageX,
				y:t.touches[0].pageY,
				time:new Date
			};
			var i=Yi.Ge;
			return i.time=new Date, i;
		},
		Ps:function(t) {
			return {
				target:t.target,
				x:t.pageX,
				y:t.pageY,
				time:new Date
			};
		}
	};

	function qi(t) {t.down='touchstart', t.move='touchmove', t.up='touchend', t.context=Yi.Es;}

	pi(function Eo() {
		if(q.touch) Yi.$init(), -1==document.body.className.indexOf('webix_full_screen') && Yi.limit(!0), q.isSafari && ut('.webix_view{ -webkit-overflow-scrolling: touch; }'), window.MSCSSMatrix && ut('.webix_view{ -ms-touch-action: none; }'); else var s=Zt(document.body, 'touchstart', function(t) {
			if(t.touches.length && 4<t.touches[0].radiusX) for(var i in q.touch= !0, qi(Gi), Eo(), si.views) {
				var e=si.views[i];
				e && e.$touch && e.$touch();
			}
			Qt(s);
		}, {capture:!0});
	});
	var Gi=q.mouse={
		down:'mousedown',
		up:'mouseup',
		move:'mousemove',
		context:Yi.Ps
	};
	window.navigator.pointerEnabled?(Gi.down='pointerdown', Gi.move='pointermove', Gi.up='pointerup'):window.navigator.msPointerEnabled?(Gi.down='MSPointerDown', Gi.move='MSPointerMove', Gi.up='MSPointerUp'):q.touch && qi(Gi);
	var Xi={
		js:b(['dummy']),
		addDrop:function(t, i, e) {(t=C(t)).webix_drop=this.Ns(i), e && (t.webix_master= !0);},
		Ns:function(t) {
			t=t || Xi;
			var i=this.js.find(t);
			return i<0 && (i=this.js.length, this.js.push(t), t.attachEvent && t.attachEvent('onDestruct', function() {return Xi.unlink(t);})), i;
		},
		unlink:function(t) {
			var i=this.js.find(t);
			-1<i && (Xi.Ls && Xi.Ls.webix_drag==i && Xi.Os(), Xi.Gt && Xi.Gt.webix_drop==i && (Xi.Gt=null), this.js[i]=null);
		},
		Ws:function(t) {
			var i=Xi, e=this.Us();
			if(e && e.Ys) {
				if(!i.Li && !i.createDrag(t)) return;
				t.longtouch_drag= !0;
				var s=i.qs;
				i.Li.style.left=t.x+i.left+(s.x_offset || 0)+'px', i.Li.style.top=t.y+i.top+(s.y_offset || 0)+'px';
			}
		},
		addDrag:function(t, i) {(t=C(t)).webix_drag=this.Ns(i), Kt(t, q.mouse.down, this.Gs, {bind:t}), Kt(t, 'dragstart', gt);},
		Gs:function(t) {
			if(Xi.Ls) {
				if(Xi.Xs==t) return;
				Xi.Js(t), Xi.destroyDrag(t);
			}
			Xi.Ls=this;
			var i=q.mouse.context(t);
			Xi.Ks=i, Xi.Xs=t;
			var e=q.touch?{passive:!1}:null;
			Xi.Zs=Zt(document.body, q.mouse.move, Xi.Qs, e), Xi.tn=Zt(document, q.mouse.up, Xi.Js), yt(document.body, 'webix_noselect', 1);
		},
		Js:function(t) {Xi['in'](), Xi.en= !t.cancelable;},
		Qs:function(t) {
			if(Xi.en= !t.cancelable, q.touch && Xi.en) return Xi['in'](), Xi.destroyDrag(t);
			var i=q.mouse.context(t), e=Xi.Us();
			if(!(e && q.touch && e.Ys && !Yi.ts || Math.abs(i.x-Xi.Ks.x)<5 && Math.abs(i.y-Xi.Ks.y)<5) && (Xi['in'](!0), Xi.Li || Xi.createDrag(Xi.Xs))) {
				Xi.sendSignal('start');
				var s=q.touch?{passive:!1}:null;
				Xi.Zs=Zt(document.body, q.mouse.move, Xi.sn, s), Xi.tn=Zt(document, q.mouse.up, Xi.Os), Xi.sn(t);
			}
		},
		Os:function(t) {Xi['in'](), Xi.Xs=null, Xi.Gt && t && (Xi.$drop(Xi.Ls, Xi.Gt, t), Xi.$dragOut(Xi.Ls, Xi.Gt, null, t)), Xi.destroyDrag(t), Xi.sendSignal('stop');},
		'in':function(t) {this.Zs=Qt(this.Zs), this.tn=Qt(this.tn), t || Mt(document.body, 'webix_noselect');},
		sn:function(s) {
			var t=Xi, i=bt(s), e=t.$dragPos(i, s), n=t.qs;
			t.Li.style.top=i.y+t.top+(e || !n.y_offset?0:n.y_offset)+'px', t.Li.style.left=i.x+t.left+(e || !n.x_offset?0:n.x_offset)+'px';
			var h=s;
			if(t.nn) t.nn= !1; else {
				if(q.touch) {
					var r=q.mouse.context(s), o=document.elementFromPoint(r.x, r.y);
					h=new Proxy(s, {
						get:function(t, i) {
							if('target'===i) return o;
							var e=t[i];
							return 'function'== typeof e?e.bind(s):e;
						}
					});
				}
				t.hn(h.target, h);
			}
			return gt(s);
		},
		hn:function(t, i) {
			for(; t && "BODY"!=t.tagName;) {
				if(t.webix_drop) return this.Gt && (this.Gt!=t || t.webix_master) && this.$dragOut(this.Ls, this.Gt, t, i), !this.Gt || this.Gt!=t || t.webix_master?(this.Gt=null, this.rn=this.$dragIn(Xi.Ls, t, i), void (this.rn && (this.Gt=t))):void 0;
				t=t.parentNode;
			}
			this.Gt && (this.Gt=this.rn=this.$dragOut(this.Ls, this.Gt, null, i));
		},
		sendSignal:function(t) {Xi.active='start'==t, y('onDragMode', [t]);},
		getMaster:function(t) {return this.js[t.webix_drag || t.webix_drop];},
		getContext:function() {return this.qs;},
		getNode:function() {return this.Li;},
		createDrag:function(t) {
			var i=Xi, e=i.Ls;
			i.qs={};
			var s, n=this.js[e.webix_drag];
			if(n.$dragCreate) {
				if(!(s=n.$dragCreate(e, t))) return !1;
				this.an(t), s.style.position='absolute';
			} else {
				var h=i.$drag(e, t);
				if(i.an(t), !h) return !1;
				(s=document.createElement('DIV')).innerHTML=h, s.className='webix_drag_zone', document.body.appendChild(s);
				var r=i.qs;
				r.html && q.pointerevents && (r.x_offset= -Math.round(.5*s.offsetWidth), r.y_offset= -Math.round(.75*s.offsetHeight));
			}
			return s.style.zIndex=Math.max(s.style.zIndex, _i()), Xi.un=Zt(s, q.mouse.move, Xi.cn), Xi.qs.from || (Xi.qs={
				source:e,
				from:e
			}), Xi.Li=s, !0;
		},
		cn:function() {Xi.nn= !0;},
		destroyDrag:function(t) {
			var i=Xi.Ls, e=this.js[i.webix_drag];
			e && e.$dragDestroy?(Xi.un=Qt(Xi.un), Xi.Li && e.$dragDestroy(i, Xi.Li, t)):dt(Xi.Li), e && e.rt && (e.rt=window.clearTimeout(e.rt)), Xi.ln && dt(Xi.ln), Xi.rn=Xi.Ls=Xi.Gt=Xi.Li=Xi.ln=null, Xi.qs=null;
		},
		Us:function() {return Xi.js[Xi.Ls.webix_drag];},
		top:0,
		left:0,
		an:function(t) {
			var i=Xi, e=i.Ks, s=i.qs;
			if('undefined'!= typeof s.x_offset && 'undefined'!= typeof s.y_offset) return null;
			if(s.x_offset=s.y_offset=0, q.pointerevents) {
				var n=Xi.Us();
				if(n.Ys && n!==this) {
					var h=n.Ys(e, t);
					h && (s.x_offset=h.x-e.x, s.y_offset=h.y-e.y);
				}
			}
		},
		$dragPos:function(t, i) {
			var e=this.js[Xi.Ls.webix_drag];
			if(e.$dragPos && e!=this) return e.$dragPos(t, i, Xi.Li), !0;
		},
		$dragIn:function(t, i, e) {
			var s=this.js[i.webix_drop];
			return s.$dragIn && s!=this?s.$dragIn(t, i, e):(i.className=i.className+' webix_drop_zone', i);
		},
		$dragOut:function(t, i, e, s) {
			var n=this.js[i.webix_drop];
			return n.$dragOut && n!=this?n.$dragOut(t, i, e, s):(i.className=i.className.replace('webix_drop_zone', ''), null);
		},
		$drop:function(t, i, e) {
			var s=this.js[i.webix_drop];
			if(Xi.qs.from=Xi.getMaster(t), s.$drop && s!=this) return s.$drop(t, i, e);
			i.appendChild(t);
		},
		$drag:function(t, i) {
			var e=this.js[t.webix_drag];
			return e.$drag && e!=this?e.$drag(t, i):'<div style=\''+t.style.cssText+'\'>'+t.innerHTML+'</div>';
		}
	};
	A('onLongTouch', function(t) {Xi.Ls && !Xi.en && Xi.Ws(t);});
	var Ji={move_setter:function(t) {return t && (H.extend(this, Ki, !0), Xi.addDrag(this.dn?this.dn:this.$view, this), delete this.move_setter), t;}}, Ki={
		$dragCreate:function(t, i) {
			if(this.config.move) {
				var e=pt(t), s=bt(i);
				return Xi.top=e.y-s.y, Xi.left=e.x-s.x, C(this.Vt);
			}
		},
		$dragDestroy:function(t, i) {this.P && (this.P.top=parseInt(i.style.top, 10), this.P.left=parseInt(i.style.left, 10)), Xi.top=Xi.left=0, this.callEvent('onViewMoveEnd', []);},
		$dragPos:function(t, i) {this.callEvent('onViewMove', [t, i]);}
	}, Zi={
		vn:function(t) {
			if(t) {
				if(!this._n) {
					this._n=ft('div', {'class':'webix_modal'});
					var i=_i(this.P.zIndex);
					this.pn=ii.St, ii.St=i, this._n.style.zIndex=i-1, this.Vt.style.zIndex=i, document.body.appendChild(this._n), document.body.style.overflow='hidden', Kt(this._n, 'click', S(this.mn, this));
				}
			} else this._n && (dt(this._n), this._n=null, ii.St=this.pn, ii.St || (document.body.style.overflow=''));
			return t;
		}
	}, Qi={
		resize_setter:function(t) {return t && !this.bn && this.gn(), t;},
		gn:function() {
			if(!this.wn) {
				var t=this.Vt;
				t.firstChild && ((t=t.firstChild).style.position='relative'), this.wn=ft('DIV', {
					'class':'webix_resize_handle',
					webix_disable_drag:'true'
				}), t.appendChild(this.wn), Kt(this.wn, q.mouse.down, this.xn, {bind:this});
			}
		},
		yn:function(t, i) {
			if(!this.Mn) {
				this.Mn=ft('div', {'class':'webix_resize_frame'}, ''), document.body.appendChild(this.Mn);
				var e=pt(this.Vt);
				this.Mn.style.left=e.x+'px', this.Mn.style.top=e.y+'px', this.Mn.style.zIndex=_i();
			}
			this.Mn.style.width=t+'px', this.Mn.style.height=i+'px';
		},
		xn:function() {this.config.resize && (yt(document.body, 'webix_noselect webix_resize_cursor'), this.Sn=pt(this.Vt), this.kn=Zt(document.body, q.mouse.move, this.Cn, {bind:this}), this.$n=Zt(document.body, q.mouse.up, this.Dn, {bind:this}));},
		Cn:function(t) {
			if(!1!==this.Sn) {
				var i=bt(t), e={
					x:i.x-this.Sn.x,
					y:i.y-this.Sn.y
				};
				if(this.$resizeMove) this.$resizeMove(e); else {
					var s=this.config, n=s.minWidth || 100, h=s.minHeight || 100;
					e.x<n?e.x=n:e.x>s.maxWidth && (e.x=s.maxWidth), e.y<h?e.y=h:e.y>s.maxHeight && (e.y=s.maxHeight);
				}
				this.In=e, this.yn(e.x, e.y);
			}
		},
		Dn:function() {this.Mn && (this.Mn=dt(this.Mn)), Mt(document.body, 'webix_resize_cursor'), Mt(document.body, 'webix_noselect'), Qt(this.kn), Qt(this.$n), this.In && (this.$resizeEnd?this.$resizeEnd(this.In):(this.config.width=this.In.x, this.config.height=this.In.y, this.resize())), this.Sn=this.In= !1, this.callEvent('onViewResize', []);}
	}, te={
		name:'window',
		$init:function(t) {
			this.Vt.innerHTML='<div class=\'webix_win_content\'><div class=\'webix_win_head\'></div><div class=\'webix_win_body\'></div></div>', this.Oi=this.Vt.firstChild, this.dn=this.Oi.childNodes[0], this.tt=this.An=this.Oi.childNodes[1], this.Vt.className+=' webix_window', this.Vt.setAttribute('role', 'dialog'), this.Vt.setAttribute('tabindex', '0'), this.Tn=this.$t=null, t.Dt={
				top:!1,
				left:!1,
				right:!1,
				bottom:!1
			}, t.id || (t.id=V()), Kt(this.Oi, 'click', this.mn, {bind:this}), Kt(this.Oi, 'click', function() {!this.P.zIndex && this.P.toFront && (this.Vt.style.zIndex=_i());}, {
				bind:this,
				capture:!0
			}), t.modal && (this.Fn= !0), t.close && (this.P.close=t.close), this.attachEvent('onViewMoveEnd', function() {this.P.position && delete this.P.position;});
		},
		mn:function(t) {
			var i=ii.kt, e=i.find(this);
			-1==e && (e=i.length-1), t.click_view=e;
		},
		getChildViews:function() {return this.Tn?[this.Tn, this.$t]:[this.$t];},
		zIndex_setter:function(t) {return this.Vt.style.zIndex=t;},
		Ft:function() {this.body_setter();},
		Tt:function(t, i) {
			var e=(i=i || this.$t)==this.$t;
			i.destructor(), e?this.$t=t:this.Tn=t, (e?this.An:this.dn).appendChild(t.Vt);
			var s=t.Vt.style, n={
				top:!0,
				left:!0,
				right:!0,
				bottom:!0
			}, h='0px';
			!1===t.config.borderless && (n=l(this.P.Dt), h='1px'), t.P.Dt=n, s.borderTopWidth=s.borderBottomWidth=s.borderLeftWidth=s.borderRightWidth=h, this.resize(!0);
		},
		show:function(t, i, e) {
			if(!0===t) {
				if(!this.P.hidden) return;
				t=null;
			}
			if(!this.callEvent('onBeforeShow', arguments)) return !1;
			var s, n, h;
			if(this.P.hidden= !1, this.Vt.style.zIndex=_i(this.P.zIndex), (this.P.modal || this.Fn) && (this.vn(!0), this.Fn=null), (i=i || {}).pos || (i.pos=this.P.relative), t) {
				'object'!=M(t) || t.tagName?s=pt(t=C(t)):t.target?(s=bt(t), n=20, h=5):s=t;
				var r=Math.max(window.innerWidth || 0, document.body.offsetWidth), o=Math.max(window.innerHeight || 0, document.body.offsetHeight);
				n=n || t.offsetWidth || 0, h=h || t.offsetHeight || 0;
				var a=this.pe, u=s.x, c=s.y, f=0, l=0, d=0, v=0, _=this.P.autofit;
				if(_) {
					var p='node'===_, m=6, b=6, g=6;
					this.P.point || (m=b=g=0), e='top', u=c=0, d=window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, r-s.x-n<a[0] && 'right'==i.pos && !p && (i.pos='left'), l='right'==i.pos?(u=s.x+m+n, b= -h, e='left', f=Math.round(s.y+h/2), u-g):'left'==i.pos?(u=s.x-m-a[0]-1, b= -h, e='right', f=Math.round(s.y+h/2), u+a[0]+1):(u=s.x<d?d:r+d-s.x>a[0]?s.x:r+d-m-a[0], l=Math.round(s.x+n/2), Math.min(l, u+a[0]-3*g)), v=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, (!a[1] || o+v-h-s.y-b>a[1] || p) && 'top'!=i.pos?(c=h+s.y+b-(this.P.point?4:0), f || (e='top', f=c-g)):(c=s.y-b-a[1])<0?(c=0, 'top'==e && (e= !1)):f || (e='bottom', f=--c+a[1]+1);
				}
				var w=i.x || 0, x=i.y || 0, y=this.Vn();
				this.$view.style.position=y?'fixed':'absolute', y && (c-=v, f-=v), this.setPosition(u+w, c+x), this.zn && (e && this.P.point?this.zn(e, l+w, f+x, y):this.Bn());
			} else this.Zt(this.P.left, this.P.top);
			this.Vt.style.display='block', this.Hn=1, k(function() {this.Hn=0;}, this, [], q.touch?400:100), this.ye(), this.config.autofocus && (this.Rn=Mi.getFocus(), Mi.setFocus(this)), -1==ii.kt.find(this) && ii.kt.push(this), this.callEvent('onShow', []);
		},
		zi:function(t) {
			if(!this.P.hidden && !this.P.modal && this.P.escHide && !this.Hn && !(t && t.showpopup && (t.showpopup==this.P.id || this.getTopMenu && this.getTopMenu().P.id==t.showpopup) || t && q.touch && t.longtouch_drag || ii.St && this.Vt.style.zIndex<=ii.St)) {
				if(t) {
					var i=t.click_view;
					if(i || 0===i || (i= -1), ii.kt.find(this)<=i) return;
				}
				this.En();
			}
		},
		hidden_setter:function(t) {return t?this.hide():this.show(), !!t;},
		hide:function() {
			var t=this.En();
			this.Pn(t);
		},
		En:function() {
			if(!this.$destructed && !this.P.hidden) {
				if(this.P.modal && this.vn(!1), this.jn(), this.P.autofocus) {
					var t=document.activeElement;
					t && this.Vt && (this.Vt.contains(t) || t===document.body) && (Mi.setFocus(this.Rn), this.Rn=null);
				}
				var i=ii.kt.find(this);
				return -1<i && ii.kt.removeAt(i), i;
			}
		},
		jn:function() {
			'top'==this.P.position?Ni(this.Vt, {
				type:'slide',
				x:0,
				y:-(this.ge+20),
				duration:300,
				callback:this.Nn,
				master:this
			}):this.Nn();
		},
		Pn:function(t) {if(-1<t) for(var i=ii.kt, e=i.length-1; t<=e; e--) i[e].Bn && i[e].En();},
		destructor:function() {this.hide(), ki.destructor.apply(this, []);},
		Nn:function() {
			this.$destructed || (this.Vt.style.display='none', this.P.hidden= !0, this.callEvent('onHide', []));
		},
		close:function() {this.destructor();},
		Ln:function(t) {'undefined'== typeof t.borderless && (t.borderless= !0);},
		body_setter:function(t) {return 'object'!=M(t) && (t={template:t}), this.Ln(t), (ii.mt=this).$t=si.Ht(t), this.An.appendChild(this.$t.Vt), t;},
		head_setter:function(t) {
			var i=this;
			if(!1===t) return t;
			var e='string'== typeof t;
			return e && (this.Vt.setAttribute('aria-label', t), t={template:t}), ('template'==t.view || !t.view && t.template) && H.extend(t, {
				padding:0,
				css:'webix_win_title',
				type:'header',
				borderless:!0
			}), e && this.config.close?t={
				padding:{
					left:Li.inputHeight+2,
					right:2
				},
				cols:[t, {
					view:'icon',
					icon:'wxi-close',
					click:function() {i.hide();}
				}]
			}:H.extend(t, {borderless:!0}), (ii.mt=this).Tn=si.Ht(t), this.dn.appendChild(this.Tn.Vt), t;
		},
		getBody:function() {return this.$t;},
		getHead:function() {return this.Tn;},
		adjust:function() {return this.resize();},
		resizeChildren:function() {this.$t && this.resize();},
		resize:function() {Vi.api.adjust.call(this), y('onResize', []), this.isVisible() && this.Zt(this.P.left, this.P.top);},
		Vn:function() {
			if(this.P.master) {
				var t=oi(this.P.master).getTopParentView().$view;
				return t && 'fixed'===t.style.position;
			}
			return !1;
		},
		Zt:function(t, i) {
			if(this.P.position || this.Vn()) {
				this.$view.style.position='fixed';
				var e=this.me, s=this.ge;
				if(e<=0 || s<=0) return;
				var n=window.innerWidth || document.documentElement.offsetWidth, h=window.innerHeight || document.documentElement.offsetHeight, r=Math.round((n-e)/2), o=Math.round((h-s)/2);
				if('function'== typeof this.P.position) {
					var a={
						left:r,
						top:o,
						width:e,
						height:s,
						maxWidth:n,
						maxHeight:h
					};
					this.P.position.call(this, a), a.width==e && a.height==s || this.$setSize(a.width, a.height), this.setPosition(a.left, a.top);
				} else 'top'==this.P.position && (o=Ni.isSupported()?-1*s:10), this.P.position || (r=this.P.left || r, o=this.P.top || o), this.setPosition(r, o);
				'top'==this.P.position && Ni(this.Vt, {
					type:'slide',
					x:0,
					y:s-2*(this.P.padding || 0),
					duration:300,
					callback:this.On,
					master:this
				});
			} else this.setPosition(t, i);
		},
		On:function(t) {Ni.clear(t), this.P.top=-2*(this.P.padding || 0), this.setPosition(this.P.left, this.P.top);},
		setPosition:function(t, i) {this.Vt.style.top=i+'px', this.Vt.style.left=t+'px', this.P.left=t, this.P.top=i;},
		$getSize:function(t, i) {
			var e=this.P.Dt;
			e && (t+=(e.left?0:1)+(e.right?0:1), i+=(e.top?0:1)+(e.bottom?0:1)), this.P.head && (i+=1);
			var s=this.$t.$getSize(0, 0), n=0;
			if(this.Tn) {
				var h=this.Tn.$getSize(0, 0);
				h[3]==h[2] && (this.P.headHeight=h[3]), i+=this.P.headHeight, n=h[0];
			}
			if(this.P.fullscreen) {
				var r=window.innerWidth || document.body.clientWidth, o=window.innerHeight || document.body.clientHeight;
				return [r, r, o, o];
			}
			var a=Hi.api.$getSize.call(this, 0, 0);
			return n && 1e5<s[1] && (s[0]=Math.max(n, s[0])), a[1]=Math.min(a[1], (1e5<=s[1] && 1e5<=a[1]?Math.max(s[0], a[0]):s[1])+t), a[3]=Math.min(a[3], (1e5<=s[3] && 1e5<=a[3]?Math.max(s[2], a[2]):s[3])+i), a[0]=Math.min(Math.max(a[0], s[0]+t), a[1]), a[2]=Math.min(Math.max(a[2], s[2]+i), a[3]), a;
		},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i), t=this.me, i=this.ge, !1===this.P.head?(this.dn.style.display='none', this.$t.$setSize(t, i)):(this.Tn.$setSize(t, this.P.headHeight), this.$t.$setSize(t, i-this.P.headHeight));},
		$skin:function() {this.defaults.headHeight=Li.barHeight;},
		defaults:{
			top:0,
			left:0,
			autofit:!0,
			relative:'bottom',
			body:'',
			head:'',
			hidden:!0,
			autofocus:!0,
			minWidth:300,
			minHeight:200,
			escHide:!0
		}
	};
	A('onLongTouch', function(t) {
		if(t && t.target) {
			var i=oi(t.target);
			if(i) {
				i=i.queryView(function(t) {return !t.getParentView();}, 'parent') || i;
				var e=ii.kt.find(i);
				-1!==e && (t.click_view=e);
			}
		}
	});
	var ie={
		api:te,
		view:H.protoUI(te, Hi.view, Ji, Zi, g, Qi)
	}, ee={
		defaults:{
			padding:'4',
			hidden:!0
		},
		body_setter:function(t) {return t=ie.api.body_setter.call(this, t), this.$t.Vt.style.borderWidth='0px', t;},
		attachTo:function(t) {
			var i;
			i=t.on_context?t.attachEvent('onAfterContextMenu', S(this.Wn, this)):Zt(t, 'contextmenu', this.Un, {bind:this}), this.attachEvent('onDestruct', function() {t.callEvent?t.detachEvent(i):Qt(i), t=null;});
		},
		getContext:function() {return this.Yn;},
		setContext:function(t) {this.Yn=t;},
		Un:function(t) {return this.Yn=C(t || ie.event), this.qn(t);},
		Wn:function(t, i) {
			return this.Yn={
				obj:oi(i),
				id:t
			}, this.qn(i);
		},
		qn:function(t) {
			var i=this.show(t, null, !0);
			if(!1===i) return i;
			var e=oi(t);
			if(e) {
				var s=e.queryView(function(t) {return !t.getParentView();}, 'parent') || e;
				s.mn && s.mn(t);
			}
			return y('onClick', [t]), gt(t);
		},
		Gn:!0,
		master_setter:function(t) {return this.attachTo(t), null;}
	}, se={
		Yn:null,
		Xn:null,
		Jn:0,
		init:function() {
			return null!==this.Yn || (ii.destructors.push({obj:this}), this.Yn=document.createElement('textarea'), this.Yn.className='webix_clipbuffer', this.Yn.setAttribute('webixignore', 1), this.Yn.setAttribute('spellcheck', 'false'), this.Yn.setAttribute('autocapitalize', 'off'), this.Yn.setAttribute('autocorrect', 'off'), this.Yn.setAttribute('autocomplete', 'off'), document.body.appendChild(this.Yn), Zt(document.body, 'keydown', S(function(t) {
				var i=t.keyCode, e=!(!t.ctrlKey && !t.metaKey);
				86===i && e && (this.Yn.value='', k(this.Kn, this, [t], 100));
			}, this))), this.Yn;
		},
		destructor:function() {this.Yn=null;},
		set:function(t) {this.init(), t=''===t?'\n':t, this.Yn.value=t, this.focus();},
		focus:function() {this.Zn() || (this.init(), this.Yn.focus(), this.Yn.select());},
		Zn:function() {
			var t='';
			return 'undefined'!= typeof window.getSelection?t=window.getSelection().toString():'undefined'!= typeof document.selection && 'Text'==document.selection.type && (t=document.selection.createRange().text), !!t;
		},
		Kn:function(t) {
			if(t.target===this.Yn) {
				var i=this.Yn.value, e=Mi.getFocus();
				!e || e.getEditor && e.getEditor() || (e.callEvent('onPaste', [i]), this.Yn.select());
			}
		}
	}, ne={
		clipboard_setter:function(t) {
			return q.touch || (!0!==t && 1!==t || (t='modify'), this.attachEvent('onAfterSelect', function(t) {
				if(!this.getEditor || !this.getEditor()) {
					var i=this.getItem(t), e=this.type.templateCopy(i);
					se.set(e, this), se.focus(), Mi.setFocus(this);
				}
			}), this.attachEvent('onPaste', function(t) {R(this.Kn[this.P.clipboard]) || this.Kn[this.P.clipboard].call(this, t);}), this.attachEvent('onFocus', function() {se.focus();}), this.attachEvent('onItemClick', function(t) {this.Qn && -1===this.Qn.find(t) || (se.focus(), Mi.setFocus(this));})), t;
		},
		Kn:{
			insert:function(t) {this.add({value:t});},
			modify:function(t) {for(var i=this.getSelectedId(!0), e=0; e<i.length; e++) this.getItem(i[e]).value=t, this.refresh(i[e]);},
			custom:function() {}
		},
		templateCopy_setter:function(t) {this.type.templateCopy=Yt(t);},
		type:{templateCopy:function(t) {return this.template(t);}}
	}, he={
		$customPrint:function(t, i) {
			if(this.th(t, i)) return !0;
			var e=this.ih(t), s=this.eh(e, t);
			if(i) return s;
			var n=ft('div', {'class':'webix_ui_print'});
			n.appendChild(s), vt(n, t.docFooter, document.body), window.print(), dt(n);
		},
		th:function(t, i) {
			if(!i && ('y'==this.config.layout || t.scroll || this.config.prerender || this.config.autoheight)) return !0;
			'x'==this.config.layout && H.extend(t || {}, {
				xCount:this.count(),
				nobreaks:!0
			}, !0);
		},
		sh:function(t) {
			var i=t.size['portrait'==t.mode?'width':'height'];
			return Math.min(i*q.printPPI-2*q.printMargin);
		},
		ih:function(t, i, e) {
			var s, n, h='page'==t.fit?Infinity:this.sh(t), r=t.xCount || this.hh().nh, o=[], a=[], u=0;
			e=e || 0, i=i || [];
			for(var c=0; c<this.data.order.length;) {
				var f=this.data.pull[this.data.order[c]];
				if(n=c-parseInt(c/r)*r, f && e<=n) {
					if(h<(u+=this.type.width) && e<n) {
						s=a.length+e, o.push(a), c+=r-a.length, a=[], u=0;
						continue;
					}
					var l=this.type.template(f, this.type), d=this.rh, v={
						display:'table-cell',
						height:this.type.height+'px',
						width:this.type.width+'px'
					};
					a.push({
						txt:l,
						className:d+' '+(f.$css || ''),
						style:v
					}), (c+1)%r==0 && (o.push(a), a=[], u=0);
				}
				c++;
			}
			return i.push(o), s && this.ih(t, i, s), i;
		},
		eh:function(n, h) {
			var r=ft('div');
			return n.forEach(S(function(t, i) {
				var e=ft('table', {
					'class':'webix_table_print '+this.$view.className,
					style:'border-collapse:collapse'
				});
				if(t.forEach(function(t) {
					var s=ft('tr');
					t.forEach(function(i) {
						var e=ft('td');
						(i.txt && (e.innerHTML=i.txt), i.className && (e.className=i.className), i.style) && Object.keys(i.style).forEach(function(t) {i.style[t] && (e.style[t]=i.style[t]);});
						i.span && (1<i.span.colspan && (e.colSpan=i.span.colspan), 1<i.span.rowspan && (e.rowSpan=i.span.rowspan)), s.appendChild(e);
					}), e.appendChild(s);
				}), r.appendChild(e), !h.nobreaks && i+1<n.length) {
					var s=ft('DIV', {'class':'webix_print_pagebreak'});
					r.appendChild(s);
				}
			}, this)), r;
		}
	}, re={
		scrollStep:40,
		init:function() {
			this.oh(), this.scrollStep=Li.rowHeight, q.$customScroll= !0, q.scrollSize=0, ii.destructors.push({obj:{destructor:function() {this.ah=null;}}}), A('onReconstruct', re.uh), A('onResize', re.uh), A('onClick', re.uh);
		},
		resize:function() {this.uh();},
		ch:function(t) {
			t.st.fh=t.P.id, t.attachEvent('onAfterRender', function() {
				var t=re.lh(this), i=Math.max(t.dy-t.py, 0), e=Math.max(t.dx-t.px, 0);
				this.dh && this.vh>i?this.dh.scrollTo(i):this._h && this.ph>e && this._h.scrollTo(e), re.ah==this.st && re.uh();
			}), Kt(t.st, 'mouseover', re.mh), Kt(t.st, 'mouseout', re.bh);
		},
		enable:function(t, i) {
			if(re.oh(), t.mapCells) return this.ch(t);
			var e=t;
			t.tt && (e=t.tt.parentNode), e.gh=i || 'xy', Kt(e, 'mouseover', re.mh), Kt(e, 'mouseout', re.bh), Kt(e, 'mousewheel', re.wh, {passive:!1}), Kt(e, 'DOMMouseScroll', re.wh, {passive:!1}), this.xh(t);
		},
		uh:function() {
			var t=re.ah;
			t && t.yh && (re.Mh.call(t), re.mh.call(t));
		},
		oh:function() {Zt(document.body, 'mousemove', function(t) {re.Sh && re.kh(re.Sh, re.Sh.Ch, bt(t));}), re.oh=function() {};},
		mh:function() {
			if(re.ah=this, clearTimeout(this.$h), !this.yh && !re.Sh) {
				var t=oi(this);
				if(!t || t.isEnabled()) {
					var i;
					if(this.fh) {
						if(!(t=oi(this.fh))) return;
						i=re.lh(t);
					} else (i={
						dx:this.scrollWidth,
						dy:this.scrollHeight,
						px:this.clientWidth,
						py:this.clientHeight
					}).we=i.dx>i.px && -1!=this.gh.indexOf('x'), i.be=i.dy>i.py && -1!=this.gh.indexOf('y');
					(this.yh=i).we && (i.Dh=re.As(this, 'x', i.dx, i.px, 'width', 'height'), i.Ih=i.px-i.Dh.offsetWidth-4, i.Ah=i.dx-i.px, re.trackBar && (i.Th=re.Fh(this, 'x'))), i.be && (i.Vh=re.As(this, 'y', i.dy, i.py, 'height', 'width'), i.zh=i.py-i.Vh.offsetHeight-4, i.Bh=i.dy-i.py, re.trackBar && (i.Hh=re.Fh(this, 'y'))), re.Rh(this);
				}
			}
		},
		Fh:function(t, i) {
			var e=ft('DIV', {
				webixignore:'1',
				'class':'webix_c_scroll_bar_'+i
			}, '');
			return t.appendChild(e), e;
		},
		kh:function(t, i, e) {
			var s=t.yh, n=t.fh;
			if(n && (n=oi(n)), s.Dh==t.Eh) {
				var h=(e.x-i.x)*s.Ah/s.Ih;
				n?n._h.scrollTo(n.ph+h):re.Ph(t, 'scrollLeft', h);
			}
			if(s.Vh==t.Eh) {
				var r=(e.y-i.y)*s.Bh/s.zh;
				n?n.dh.scrollTo(n.vh+r):re.Ph(t, 'scrollTop', r);
			}
			t.Ch=e, re.Rh(t);
		},
		lh:function(t) {
			var i={};
			return t._h && t.P.scrollX && (i.dx=t._h.getSize(), i.px=t._h.jh || 1, i.we=1<i.dx-i.px), t.dh && t.P.scrollY && (i.dy=t.dh.getSize(), i.py=t.dh.jh || 1, i.be=1<i.dy-i.py), i;
		},
		bh:function() {clearTimeout(this.$h), this.$h=k(re.Mh, this, [], 200);},
		Nh:function(t) {t && (dt(t), t.Lh && (Qt(t.Lh), Qt(t.Oh), Qt(t.Wh)));},
		Mh:function() {
			if(this.yh) {
				if(this.Eh) return void (this.Uh= !0);
				var t=this.yh;
				re.Nh(t.Dh), re.Nh(t.Vh), t.Th && dt(t.Th), t.Hh && dt(t.Hh), this.yh=null;
			}
		},
		wh:function(t) {
			var i=this.yh, e=t.wheelDelta/ -40, s=!1;
			if(!e && t.detail && R(t.wheelDelta) && (e=t.detail), i) {
				t.scrolledBy || (t.scrolledBy=i.be?'y':'x');
				var n=t.wheelDeltaX && Math.abs(t.wheelDeltaX)>Math.abs(t.wheelDeltaY);
				if(i.Dh && ('y'!==t.scrolledBy && (t.wheelDeltaX || e) || n)) {
					var h=t.wheelDeltaX/ -40 || e;
					s=re.Ph(this, 'scrollLeft', h*re.scrollStep);
				} else !n && e && i.Vh && (s=re.Ph(this, 'scrollTop', e*re.scrollStep));
			}
			if(re.Rh(this), !1!==s) return gt(t);
		},
		Ph:function(t, i, e) {
			var s=t.yh, n='scrollLeft'==i?s.dx-s.px:s.dy-s.py, h=t[i];
			return n<h+e && (e=n-h), !(!e || h+e<0 && 0===h) && (q.isIE && re.Rh(t, i, e+h), t[i]+=e, !0);
		},
		As:function(t, i, e, s, n) {
			var h=ft('DIV', {
				webixignore:'1',
				'class':'webix_c_scroll_'+i
			}, '<div></div>');
			return h.style[n]=Math.max(s*s/e-7, 40)+'px', h.style['height'==n?'top':'left']='0px', t.style.position='relative', t.appendChild(h), t.Lh=Zt(h, 'mousedown', re.Yh(t)), t.Oh=Zt(document.body, 'mouseup', S(re.qh, t)), t.Wh=Zt(document.body, 'mouseleave', S(re.qh, t)), h;
		},
		Yh:function(i) {return function(t) {yt(document.body, 'webix_noselect', 1), this.className+=' webix_scroll_active', (re.Sh=i).Eh=this, i.Ch=bt(t);};},
		qh:function() {this.Eh && (Mt(document.body, 'webix_noselect'), this.Eh.className=this.Eh.className.toString().replace(' webix_scroll_active', ''), this.Eh= !1, re.Sh=0, this.Uh && (re.Mh.call(this), this.Uh= !1));},
		Rh:function(t, i, e) {
			var s=t.yh;
			if(s && (s.Dh || s.Vh)) {
				var n=t.fh, h='scrollLeft'==i?e:t.scrollLeft, r=n?oi(n).ph:h, o=n?0:r, a='scrollTop'==i?e:t.scrollTop, u=n?oi(n).vh:a, c=n?0:u;
				s.Dh && (s.Dh.style.bottom=1-c+'px', s.Dh.style.left=Math.round(s.Ih*r/(s.dx-s.px))+o+1+'px', s.Th && (s.Th.style.bottom=1-c+'px', s.Th.style.left=o+'px')), s.Vh && (s.Vh.style.right=0-o+'px', s.Vh.style.top=Math.round(s.zh*u/(s.dy-s.py))+c+1+'px', s.Hh && (s.Hh.style.right=0-o+'px', s.Hh.style.top=c+'px'));
			}
		},
		xh:function(t) {
			var i=this;
			t.attachEvent && (t.attachEvent('onViewShow', function() {return i.Gh(t);}), t.attachEvent('onAfterAutoScroll', function() {return i.Gh(t);})), t.data && t.data.attachEvent && t.data.attachEvent('onStoreUpdated', function() {return i.Gh(t);});
		},
		Gh:function(t) {
			var i=re.ah;
			i && t.$view.contains(i)?re.uh():re.Mh.call(t.$view);
		}
	}, oe={
		addCss:function(t, i, e) {
			if(!this.addRowCss && !e && !this.hasCss(t, i)) {
				var s=this.getItemNode(t);
				s && (s.className+=' '+i, e= !0);
			}
			return this.data.addMark(t, i, 1, 1, e);
		},
		removeCss:function(t, i, e) {
			if(!this.addRowCss && !e && this.hasCss(t, i)) {
				var s=this.getItemNode(t);
				s && (s.className=s.className.replace(i, '').replace('  ', ' '), e= !0);
			}
			return this.data.removeMark(t, i, 1, e);
		},
		hasCss:function(t, i) {return this.data.getMark(t, i);},
		clearCss:function(t, i) {return this.data.clearMark(t, 1, i);}
	}, ae={
		copy:function(t, i, e, s) {
			var n=(s=s || {}).newId || t;
			e=e || this;
			var h=this.getItem(t);
			return e && (h=e.Xh(h)), e.data.add(e.Xh(h, n), i, s.parent || 0);
		},
		Jh:function(t, i, e) {
			if(i && t) {
				var s=this.getIndexById(t);
				return s+(e==this && e.getIndexById(i)<s?0:1);
			}
		},
		move:function(t, i, e, s) {
			var n=(s=s || {}).newId || t;
			if((e=e || this).data, e.data) {
				if($(t)) {
					3<t.length && (this.$blockRender=e.$blockRender= !0);
					for(var h=0; h<t.length; h++) {
						var r=this.move(t[h], i, e, s);
						i=e.Jh(r, t[h+1], this);
					}
					return this.$blockRender=e.$blockRender= !1, void (3<t.length && (this.refresh(), e!=this && e.refresh()));
				}
				var o=t, a=this.getItem(t);
				return e && e!=this?(o=e.data.add(e.Xh(a, n), i, s.parent || 0), this.data.remove(t)):(i<0 && (i=this.data.order.length-1), this.data.move(this.getIndexById(t), i), this.data.callEvent('onDataMove', [t, i, null, this.data.order[i+1]])), o;
			}
		},
		moveUp:function(t, i) {
			var e=this.getIndexById(t)-(i || 1);
			return this.move(t, e<0?0:e);
		},
		moveDown:function(t, i) {return this.moveUp(t, -1*(i || 1));},
		moveTop:function(t) {return this.move(t, 0);},
		moveBottom:function(t) {return this.move(t, this.data.count()-1);},
		Xh:function(t, i) {
			var e=H.extend({}, t);
			return e.id=!i || this.data.pull[i]?V():i, e.$template=null, this.P.externalData && (e=this.P.externalData.call(this, e, i, t)), e;
		}
	}, ue={
		isEmail:function(t) {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((t || '').toString());},
		isNumber:function(t) {return parseFloat(t)==t;},
		isChecked:function(t) {return !!t || '0'===t;},
		isNotEmpty:function(t) {return 0===t || t;}
	}, ce={
		$init:function() {this.yt && this.attachEvent('onChange', this.clearValidation);},
		clearValidation:function() {if(this.elements) for(var t in this.elements) this.Kh(t);},
		validate:function(t, i) {
			this.callEvent, this.callEvent('onBeforeValidate', []);
			var e=this.Zh={}, s=!0, n=this.P.rules, h=this.isVisible && !this.isVisible(), r=t && t.hidden, o=t && t.disabled, a={}, u={};
			for(var c in this.elements) {
				var f=this.elements[c].config.name;
				(h || this.elements[c].isVisible() || r) && (this.elements[c].isEnabled() || o)?a[f]=this.elements[c]:u[f]= !0;
			}
			if((n || a) && !i && this.getValues && (i=this.getValues()), n) {
				n.$obj && (s=this.Qh(n.$obj, i, i, '') && s);
				var l=n.$all, d=i;
				if(this.P.complexData && (d=Rt.collapseNames(i, '', {}, function(t) {return !n[t];})), l) for(var v in i) if(!u[v]) {
					var _=this.Qh(l, d[v], i, v);
					_ || (e[v]= !0), s=_ && s;
				}
				for(var p in n) if(!u[p] && 0!==p.indexOf('$') && !e[p]) {
					n[p];
					var m=this.Qh(n[p], d[p], i, p);
					m || (e[p]= !0), s=m && s;
				}
			}
			if(a) for(var b in a) if(!e[b]) {
				var g=a[b];
				if(g.validate) {
					var w=g.validate();
					s=w && s, w || (e[b]= !0);
				} else {
					var x=g.P;
					if(x) {
						var y=x.validate;
						if(!y && x.required && (y=n.isNotEmpty), y) {
							var M=this.Qh(y, i[b], i, b);
							M || (e[b]= !0), s=M && s;
						}
					}
				}
			}
			return this.callEvent('onAfterValidation', [s, this.Zh]), s;
		},
		Qh:function(t, i, e, s) {return 'string'== typeof t && (t=ue[t]), t.call(this, i, e, s)?(this.callEvent('onValidationSuccess', [s, e]) && this.Kh && this.Kh(s), !0):(this.callEvent('onValidationError', [s, e]) && this.ir && this.ir(s), !1);}
	}, fe={};

	function le(t, i) {
		if('object'==M(t) && t.P && (t=t.P.id), fe[t] || i) return fe[t];
		'string'!= typeof t && 'number'!= typeof t || (t={master:oi(t)});
		var e=new de(t), s=e.P.master.P.id;
		return fe[s]=e, oi(s).attachEvent('onDestruct', function() {fe[this.P.id]=null, delete fe[this.P.id];}), e;
	}

	t('dp', le), le.$$=function(t) {return fe[t];};
	var de=H.proto({
		defaults:{
			autoupdate:!0,
			updateFromResponse:!1,
			mode:'post',
			operationName:'webix_operation',
			trackMove:!1
		},
		$init:function() {
			this.reset(), this.sr= !1, this.name='DataProcessor', this.$ready.push(this.nr);
		},
		reset:function() {this.hr=[];},
		url_setter:function(t) {
			var i='';
			if('string'== typeof t) {
				var e=t.split('->');
				1<e.length && (t=e[1], i=e[0]);
			} else t && t.mode && (i=t.mode, t=t.url);
			return i?W(i, t):t;
		},
		master_setter:function(t) {
			var i=t;
			return 'DataStore'!=t.name && (i=t.data), this.P.store=i, t;
		},
		rr:function(t) {
			var i=this.or;
			this.or=[], t();
			var e=Promise.all(this.or);
			return (this.or=i) && i.push(e), e;
		},
		nr:function() {
			var t=this.P.store;
			t && (t.attachEvent('onStoreUpdated', S(this.ar, this)), t.attachEvent('onDataMove', S(this.ur, this)));
		},
		ignore:function(t, i) {
			var e=this.sr;
			this.sr= !0, t.call(i || this), this.sr=e;
		},
		off:function() {this.sr= !0;},
		on:function() {this.sr= !1;},
		cr:function(t) {
			var i={};
			for(var e in t) 0!==e.indexOf('$') && (i[e]=t[e]);
			return i;
		},
		save:function(t, i, e) {return i=i || 'update', this.fr(t, e, i, !0);},
		fr:function(t, i, e, s) {
			if('object'==M(t) && (t=t.toString()), t && !0!==this.sr && e && 'paint'!=e) {
				var n=this.P.store;
				n && (i=i || this.P.store.getItem(t), n.lr && (i=n.lr(i)));
				var h={
					id:t,
					data:this.cr(i),
					operation:e
				};
				if(R(i.$parent) || (h.data.parent=i.$parent), 'delete'!=h.operation) {
					var r=this.P.master;
					r && r.data && r.data.getMark && r.data.getMark(t, 'webix_invalid') && (h.dr= !0), this.validate(null, h.data) || (h.dr= !0);
				}
				return this.vr(h) && this.hr.push(h), this.P.autoupdate || s?this._r(t):void 0;
			}
		},
		ur:function(t, i, e, s) {
			if(this.P.trackMove) {
				var n=_(this.P.store.getItem(t));
				n.webix_move_index=i, n.webix_move_id=s, n.webix_move_parent=e, this.fr(t, n, 'order');
			}
		},
		ar:function(t, i, e) {
			switch(e) {
			case'save':
			case'update':
				e='update';
				break;
			case'add':
				e='insert';
				break;
			case'delete':
				e='delete';
				break;
			default:
				return !0;
			}
			return this.fr(t, i, e);
		},
		vr:function(t) {
			for(var i=0; i<this.hr.length; i++) {
				var e=this.hr[i];
				if(e.id==t.id && !e.pr) return 'delete'==t.operation && ('insert'==e.operation?this.hr.splice(i, 1):e.operation='delete'), e.data=t.data, e.dr=t.dr, !1;
			}
			return !0;
		},
		send:function() {return this._r();},
		_r:function(t) {
			if(this.P.url) {
				for(var i, e=this.hr, s=[], n=this.P.url, h=0; h<e.length; h++) {
					var r=e[h];
					if(!r.pr && !r.dr) {
						var o=r.id;
						if(this.P.autoupdate || !t || t==o) {
							var a=r.operation, u=W.$parse('object'!=M(n) || n.$proxy?n:n[a]), c=u && (u.$proxy || 'function'== typeof u);
							if(u) {
								var f=this.P.store;
								if(f && f.mr && f.mr(r.data), this.callEvent('onBefore'+a, [o, r])) {
									if(r.pr= !0, !this.callEvent('onBeforeDataSend', [r])) return;
									r.data=this.gr(r.data);
									var l=void 0;
									u.$proxy?(u.save && (l=u.save(this.config.master, r, this)), s.push(r)):('insert'==a && delete r.data.id, l=c?u.call(this.config.master, r.id, r.operation, r.data):(r.data[this.P.operationName]=a, this.S(u, r.data, this.P.mode))), l && (l=this.wr(l, {
										id:r.id,
										status:r.operation
									}), t && o===t && (i=l)), this.callEvent('onAfterDataSend', [r]);
								}
							}
						}
					}
				}
				if(n.$proxy && n.saveAll && s.length) {
					var d=n.saveAll(this.config.master, s, this);
					d && (d=this.wr(d, null), i || (i=d));
				}
				return i;
			}
		},
		wr:function(t, e) {
			var s=this;
			if(t) return t.then || (t=m.resolve(t)), t=t.then(function(t) {
				var i;
				if(t && 'function'== typeof t.json && (t=t.json()), !(i=null===e?s.xr(t):s.xr(e, '', t, -1))) throw i;
				return i;
			}, function(t) {throw s.yr(e, '', null, t), t;}), this.or && this.or.push(t), t;
		},
		gr:function(t) {
			var i={};
			for(var e in t) 0!==e.indexOf('$') && (i[e]=t[e]);
			return i;
		},
		S:function(t, i, e) {return B()[e](t, i);},
		attachProgress:function(t, i, e) {this.attachEvent('onBeforeDataSend', t), this.attachEvent('onAfterSync', i), this.attachEvent('onAfterSaveError', e), this.attachEvent('onLoadError', e);},
		yr:function(t, i, e, s) {
			t?this.Mr(!0, t.id, !1, t.status, !1, {
				text:i,
				data:e,
				loader:s
			}):(this.callEvent('onLoadError', arguments), y('onLoadError', [i, e, s, this]));
		},
		Mr:function(t, i, e, s, n, h) {
			var r=this.P.master, o=this.getItemState(i);
			if(o.pr= !1, !t) {
				this.setItemState(i, !1);
				var a=this.P.store;
				return a && a.exists(i) && (e && i!=e && a.changeId(i, e), n && 'delete'!=s && this.P.updateFromResponse && this.ignore(function() {a.updateItem(e || i, n);})), this.P.undoOnError && r.P.undo && r.removeUndo(e || i), this.callEvent('onAfterSave', [n, i, h]), this.callEvent('onAfter'+s, [n, i, h]), n || {};
			}
			this.callEvent('onBeforeSaveError', [i, s, n, h]) && (o.dr= !0, this.P.undoOnError && r.P.undo && (this.ignore(function() {r.undo(i);}), this.setItemState(i, !1)), this.callEvent('onAfterSaveError', [i, s, n, h]));
		},
		processResult:function(t, i, e) {
			var s=i && ('error'==i.status || 'invalid'==i.status), n=!!i && (i.newid || i.id);
			return this.Mr(s, t.id, n, t.status, i, e);
		},
		xr:function(t, i, e, s) {
			var n, h=this;
			if(this.callEvent('onBeforeSync', [t, i, e, s]), $(t)) n=[], t.forEach(function(t) {n.push(h.processResult(t, t, {}));}); else if(-1===s) n=this.processResult(t, e, {}); else {
				var r, o=this.P.url;
				if(o.$proxy && o.result) n=o.result(t, this.P.master, this, i, e, s) || {}; else i && (r=e.json(), i && null==r && (r={status:'error'})), n=this.processResult(t, r, {
					text:i,
					data:e,
					loader:s
				});
			}
			return this.callEvent('onAfterSync', [t, i, e, s]), n;
		},
		escape:function(t) {return this.P.escape?this.P.escape(t):encodeURIComponent(t);},
		getState:function() {
			if(!this.hr.length) return !1;
			for(var t=this.hr.length-1; 0<=t; t--) if(this.hr[t].pr) return 'saving';
			return !0;
		},
		getItemState:function(t) {
			var i=this.Sr(t);
			return this.hr[i] || null;
		},
		setItemState:function(t, i) {
			if(i) this.fr(t, null, 'update'); else {
				var e=this.Sr(t);
				-1<e && this.hr.splice(e, 1);
			}
		},
		Sr:function(t) {
			for(var i=-1, e=0; e<this.hr.length; e++) if(this.hr[e].id==t) {
				i=e;
				break;
			}
			return i;
		}
	}, Si, g, ce);

	function ve() {this.name='DataStore', H.extend(this, g), this.setDriver('json'), this.pull={}, this.order=b(), this.kr={};}

	ve.prototype={
		setDriver:function(t) {zt[t], this.driver=zt[t];},
		X:function(t) {
			this.callEvent('onParse', [this.driver, t]), this.Cr && this.filter();
			var i=this.driver.getInfo(t);
			i.config && this.callEvent('onServerConfig', [i.config]);
			var e=this.driver.getOptions(t);
			e && this.callEvent('onServerOptions', [e]);
			var s=this.driver.getRecords(t);
			this.Dr(i, s), this.Ir && this.Ar && !this.Tr && this.Ar(this.Ir), this.Fr && (this.blockEvent(), this.sort(this.Fr), this.unblockEvent()), this.callEvent('onStoreLoad', [this.driver, t]), this.refresh();
		},
		Dr:function(t, i) {
			var e=t.from, s=!0, n=!1;
			if(!e && 0!==e && this.order[0]) {
				if(this.Vr) {
					n={};
					for(var h=0; h<this.order.length; h++) n[this.order[h]]= !0;
				}
				s= !1, e=this.order.length;
			} else e=1*(e || 0);
			for(var r=0, o=0; o<i.length; o++) {
				var a=this.driver.getDetails(i[o]), u=this.id(a);
				this.pull[u]?s && this.order[r+e] && r++:(this.order[r+e]=u, r++), this.pull[u]?(H.extend(this.pull[u], a, !0), this.zr && this.zr(this.pull[u]), n && delete n[u]):(this.pull[u]=a, this.Br && this.Br(a));
			}
			if(n) {
				for(var c in this.blockEvent(), n) this.remove(c);
				this.unblockEvent();
			}
			var f=1*t.size;
			f && (this.order[f-1] || (this.order[f-1]=undefined), f<this.order.length && (this.order=this.order.slice(0, f)));
		},
		id:function(t) {return t.id || (t.id=V());},
		changeId:function(t, i) {t!=i && (this.pull[t] && (this.pull[i]=this.pull[t]), this.pull[i].id=i, this.order[this.order.find(t)]=i, this.Cr && (this.Cr[this.Cr.find(t)]=i), this.kr[t] && (this.kr[i]=this.kr[t], delete this.kr[t]), this.callEvent('onIdChange', [t, i]), this.Hr && this.Hr(t, i), delete this.pull[t]);},
		getItem:function(t) {return this.pull[t];},
		updateItem:function(t, i, e) {
			'object'===M(t) && (t=t.toString());
			var s=this.getItem(t), n=null, h=this.hasEvent('onDataUpdate');
			!i || !i.id || i.id, R(i) || s===i || (h && (n=_(s)), t=s.id, H.extend(s, i, !0), s.id=t), this.zr && this.zr(s), this.callEvent('onStoreUpdated', [t, s, e || 'update']), h && this.callEvent('onDataUpdate', [t, s, n]);
		},
		refresh:function(t) {this.Rr || (t?this.exists(t) && this.callEvent('onStoreUpdated', [t, this.pull[t], 'paint']):this.callEvent('onStoreUpdated', [null, null, null]));},
		silent:function(t, i) {this.Rr= !0, t.call(i || this), this.Rr= !1;},
		getRange:function(t, i) {
			if(t=t?this.getIndexById(t):this.$min || this.startOffset || 0, i?i=this.getIndexById(i):(i=0===this.$max?0:Math.min(this.$max?this.$max-1:this.endOffset || Infinity, this.count()-1))<0 && (i=0), i<t) {
				var e=i;
				i=t, t=e;
			}
			return this.getIndexRange(t, i);
		},
		getIndexRange:function(t, i) {
			i=Math.min(0===i?0:i || Infinity, this.count()-1);
			for(var e=b(), s=t || 0; s<=i; s++) e.push(this.getItem(this.order[s]));
			return e;
		},
		count:function() {return this.order.length;},
		exists:function(t) {return !!this.pull[t];},
		move:function(t, i) {
			if(t!=i) {
				var e=this.getIdByIndex(t), s=this.getItem(e);
				this.Cr && this.Er(this.Cr, 0, 0, this.getIdByIndex(t), this.getIdByIndex(i)), this.Er(this.order, t, i), this.callEvent('onStoreUpdated', [e, s, 'move']);
			}
		},
		Er:function(t, i, e, s, n) {
			if(s || n) {
				i=e= -1;
				for(var h=0; h<t.length; h++) t[h]==s && i<0 && (i=h), t[h]==n && e<0 && (e=h);
			}
			var r=t[i];
			t.removeAt(i), t.insertAt(r, Math.min(t.length, e));
		},
		scheme:function(t) {for(var i in this.Pr={}, this.mr=t.$save, this.Br=t.$init || t.$change, this.zr=t.$update || t.$change, this.lr=t.$serialize, this.Ir=t.$group, this.Fr=t.$sort, this.jr=t.$export, t) '$'!=i.substr(0, 1) && (this.Pr[i]=t[i]);},
		importData:function(t, i) {
			var e=t?t.data || t:[];
			if(this.Cr=null, 'function'== typeof e.serialize) {
				if(this.order=b([].concat(e.order)), this.Nr) {
					this.Nr= !1;
					var s=this.pull;
					for(var n in this.pull={}, e.pull) {
						var h=s[n];
						this.pull[n]=_(e.pull[n]), h && h.open && (this.pull[n].open= !0);
					}
				} else for(var r in this.pull={}, e.pull) this.pull[r]=e.pull[r];
				e.branch && this.branch && (this.branch=_(e.branch), this.Lr=null);
			} else {
				var o, a;
				if(this.order=b(), this.pull={}, $(t)) for(var u=0; u<t.length; u++) 'object'==M(a=o=t[u])?a.id=a.id || V():a={
					id:o,
					value:o
				}, this.order.push(a.id), this.Br && this.Br(a), this.pull[a.id]=a; else for(var c in e) this.order.push(c), this.pull[c]={
					id:c,
					value:e[c]
				};
			}
			if(this.Or && !e.branch) {
				this.branch={0:[]}, this.Wr || this.Ur('data');
				for(var f=0; f<this.order.length; f++) {
					var l=this.order[f];
					this.Or(this.pull[l], 0, 0, !1);
				}
			}
			this.callEvent('onStoreLoad', []), i || this.callEvent('onStoreUpdated', []);
		},
		sync:function(s, n, h) {
			this.unsync();
			var t=M(s);
			if('string'==t && (s=oi(s)), 'function'!=t && 'object'!=t && (h=n, n=null), 'DataStore'!=s.name && 'TreeStore'!=s.name) {
				if(!s.data || 'DataStore'!==s.data.name && 'TreeStore'!==s.data.name) return this.Yr=s, y('onSyncUnknown', [this, s, n]);
				s=s.data;
			}
			var i=S(function(t, i, e) {this.qr || (n && this.branch && (this.Nr= !0), this.importData(s, !0), n && this.silent(n), this.ne && this.ne(), t && i && e || this.count() || (this.kr={}), 'delete'==e && this.kr[t] && delete this.kr[t], this.callEvent('onSyncApply', []), h?h= !1:this.refresh());}, this);
			this.Gr=[s.attachEvent('onStoreUpdated', i), s.attachEvent('onIdChange', S(function(t, i) {this.changeId(t, i), this.refresh(i);}, this))], this.Yr=s, this.Xr=this.attachEvent('onStoreUpdated', function(t, i, e) {'update'!=e && 'save'!=e || (this.qr=1, s.updateItem(t, i), this.qr=0);}), i();
		},
		unsync:function() {
			if(this.Yr) {
				var t=this.Yr;
				if('DataStore'==t.name || 'TreeStore'==t.name || t.data && 'DataStore'==t.data.name && 'TreeStore'==t.data.name) {
					for(var i=0; i<this.Gr.length; i++) t.detachEvent(this.Gr[i]);
					this.detachEvent(this.Xr);
				} else y('onUnSyncUnknown', [this, t]);
				this.Yr=null;
			}
		},
		destructor:function() {this.unsync(), this.pull=this.order=this.kr=null, this.o=this.u={};},
		add:function(t, i) {
			if(this.Pr) for(var e in this.Pr) R(t[e]) && (t[e]=this.Pr[e]);
			this.Br && this.Br(t);
			var s=this.id(t), n=arguments[2] || this.order, h=n.length;
			if((R(i) || i<0) && (i=h), h<i && (i=Math.min(n.length, i)), !1===this.callEvent('onBeforeAdd', [s, t, i])) return !1;
			if(this.exists(s), this.pull[s]=t, n.insertAt(s, i), this.Cr) {
				var r=this.Cr.length;
				this.order.length && (r=Math.min(i || 0, r)), this.Cr.insertAt(s, r);
			}
			return this.callEvent('onStoreUpdated', [s, t, 'add']), this.callEvent('onAfterAdd', [s, i]), t.id;
		},
		remove:function(t) {
			if($(t)) for(var i=0; i<t.length; i++) this.remove(t[i]); else {
				if(!1===this.callEvent('onBeforeDelete', [t])) return !1;
				this.exists(t);
				var e=this.getItem(t);
				this.order.remove(t), this.Cr && this.Cr.remove(t), delete this.pull[t], this.kr[t] && delete this.kr[t], this.callEvent('onStoreUpdated', [t, e, 'delete']), this.callEvent('onAfterDelete', [t]);
			}
		},
		clearAll:function(t) {this.pull={}, this.kr={}, this.order=b(), this.Cr=null, t || (this.url=null), this.callEvent('onClearAll', [t]), this.refresh();},
		getIdByIndex:function(t) {return this.order[t];},
		getIndexById:function(t) {return this.pull[t]?this.order.find(t):-1;},
		getNextId:function(t, i) {return this.order[this.getIndexById(t)+(i || 1)];},
		getFirstId:function() {return this.order[0];},
		getLastId:function() {return this.order[this.order.length-1];},
		getPrevId:function(t, i) {return this.order[this.getIndexById(t)-(i || 1)];},
		sort:function(t, i, e) {
			var s, n=this, h=t;
			if(s=$(h)?[h=h.map(function(t) {return n.Jr(t);})]:[(h=this.Jr(t, i, e)).by, h.dir, h.as, h], this.callEvent('onBeforeSort', s)) {
				var r=this.sorting.create(h);
				this.order=this.Kr(r, this.order), this.Cr && this.Cr.length!=this.order.length && (this.Cr=this.Kr(r, this.Cr)), this.refresh(), this.callEvent('onAfterSort', s);
			}
		},
		Jr:function(t, i, e) {
			var s=t;
			return 'function'== typeof t?s={
				as:t,
				dir:i
			}:'string'== typeof t && (s={
				by:t,
				dir:i,
				as:e
			}), 'string'== typeof s.by && (s.by=s.by.replace(/#/g, '')), s;
		},
		Kr:function(t, i) {
			if(this.order.length) {
				for(var e=i.splice(0, this.$freeze), s=b(), n=i.length-1; 0<=n; n--) s[n]=this.pull[i[n]];
				return s.sort(t), b(e.concat(s.map(function(t) {return this.id(t);}, this)));
			}
			return i;
		},
		Zr:function(t) {this.Cr && !t && (this.order=this.Cr, delete this.Cr);},
		Qr:function(t, i, e) {
			for(var s=b(), n=this.$freeze || 0, h=0; h<this.order.length; h++) {
				var r=this.order[h];
				(h<n || t(this.getItem(r), i)) && s.push(r);
			}
			e && this.Cr || (this.Cr=this.order), this.order=s;
		},
		find:function(t, i) {
			var e=[];
			for(var s in this.pull) {
				var n=this.pull[s], h=!0;
				if('object'==M(t)) {
					for(var r in t) if(n[r]!=t[r]) {
						h= !1;
						break;
					}
				} else t(n) || (h= !1);
				if(h && e.push(n), i && e.length) return e[0];
			}
			return i?null:e;
		},
		filter:function(e, i, t) {
			if((e || this.Cr || this.Lr) && this.callEvent('onBeforeFilter', [e, i]) && (this.Zr(t), this.order.length)) {
				if(e) {
					var s=e;
					i=i || '', 'string'== typeof e && (e=e.replace(/#/g, ''), s='function'== typeof i?function(t) {return i(t[e]);}:(i=i.toString().toLowerCase(), function(t, i) {return -1!=(t[e] || '').toString().toLowerCase().indexOf(i);})), this.Qr(s, i, t, this.io);
				}
				this.refresh(), this.callEvent('onAfterFilter', []);
			}
		},
		eo:function() {
			for(var t=[], i=this.order.length-1; 0<=i; i--) t[i]=this.pull[this.order[i]];
			return t;
		},
		each:function(t, i, e) {
			var s=this.order;
			e && (s=this.Cr || s);
			for(var n=0; n<s.length; n++) s[n] && t.call(i || this, this.getItem(s[n]), n);
		},
		so:function(t, i) {return function() {return t[i].apply(t, arguments);};},
		provideApi:function(t, i) {
			i && this.mapEvent({
				onbeforesort:t,
				onaftersort:t,
				onbeforeadd:t,
				onafteradd:t,
				onbeforedelete:t,
				onafterdelete:t,
				ondataupdate:t
			});
			for(var e=['sort', 'add', 'remove', 'exists', 'getIdByIndex', 'getIndexById', 'getItem', 'updateItem', 'refresh', 'count', 'filter', 'find', 'getNextId', 'getPrevId', 'clearAll', 'getFirstId', 'getLastId', 'serialize', 'sync'], s=0; s<e.length; s++) t[e[s]]=this.so(this, e[s]);
		},
		addMark:function(t, i, e, s, n) {
			var h=this.kr[t] || {};
			if(!(this.kr[t]=h)[i]) {
				if(h[i]=s || !0, e) {
					var r=h.$css || '';
					h.$css=r+' '+i;
				}
				n || this.refresh(t);
			}
			return h[i];
		},
		removeMark:function(t, i, e, s) {
			var n=this.kr[t];
			if(n) {
				if(n[i] && delete n[i], e) {
					var h=n.$css;
					h && (n.$css=h.replace(i, '').replace('  ', ' '));
				}
				s || this.refresh(t);
			}
		},
		getMark:function(t, i) {
			var e=this.kr[t];
			return !!e && e[i];
		},
		clearMark:function(t, i, e) {
			for(var s in this.kr) {
				var n=this.kr[s];
				n[t] && (delete n[t], i && n.$css && (n.$css=n.$css.replace(t, '').replace('  ', ' ')), e || this.refresh(s));
			}
		},
		serialize:function(t) {
			var i=this.order;
			t && this.Cr && (i=this.Cr);
			for(var e=[], s=0; s<i.length; s++) {
				var n=this.pull[i[s]];
				this.lr && !1===(n=this.lr(n)) || e.push(n);
			}
			return e;
		},
		sorting:{
			create:function(t) {return $(t)?this.no(t):this.ho(t.dir, this.ro(t.by, t.as));},
			as:{
				server:function() {return !1;},
				date:function(t, i) {return t-=0, i-=0, isNaN(i)?1:isNaN(t)?-1:i<t?1:t<i?-1:0;},
				'int':function(t, i) {return t*=1, i*=1, isNaN(i)?1:isNaN(t)?-1:i<t?1:t<i?-1:0;},
				string_strict:function(t, i) {return i?t?(t=t.toString(), (i=i.toString())<t?1:t<i?-1:0):-1:1;},
				string:function(t, i) {return i?t?(t=t.toString().toLowerCase(), (i=i.toString().toLowerCase())<t?1:t<i?-1:0):-1:1;},
				raw:function(t, i) {return i<t?1:t<i?-1:0;}
			},
			no:function(n) {
				var i=this;
				return n=n.map(function(t) {return i.ho(t.dir, i.ro(t.by, t.as));}), function(t, i) {
					for(var e, s=0; !(e=n[s](t, i)) && n[++s];) ;
					return e;
				};
			},
			ro:function(e, s) {return e?('function'!= typeof s && (s=this.as[s || 'string']), function(t, i) {return s(t[e], i[e]);}):s;},
			ho:function(t, e) {return 'asc'!=t && t?function(t, i) {return -1*e(t, i);}:e;}
		}
	};
	var _e=H.proto({
		$init:function(t) {t=t || '', this.oo={}, this.Y=1, this.data=new ve, this.data.attachEvent('onClearAll', S(this.ao, this)), this.data.attachEvent('onServerConfig', S(this.uo, this)), this.attachEvent('onDestruct', this.ao), this.data.feed=this.co, this.data.owner=t.id;},
		co:function(t, i, e, s) {return this.fo?(s=m.defer(), this.fo=[t, i, e, s], s):(this.fo= !0, this.oo.from=t, this.oo.count=i, this.lo.call(this, t, i, e, !1, !1, s));},
		lo:function(t, i, e, s, n, h) {
			var r=this, o=null;
			if(s=s || this.data.url, t<0 && (t=0), n || (n={
				start:t,
				count:i
			}), this.count() && (n['continue']='true'), this.getState && (o=this.getState()), s && 'string'!= typeof s) return o && (o.sort && (n.sort=o.sort), o.filter && (n.filter=o.filter)), this.load(s, 0, n).then(function(t) {return r['do'](t, e, h);}, function() {return r.vo();});
			s+=-1==s.indexOf('?')?'?':'&';
			var a=[];
			for(var u in n) a.push(u+'='+n[u]);
			if(o) {
				if(o.sort) for(var c=$(o.sort)?o.sort:[o.sort], f=0; f<c.length; f++) a.push('sort['+c[f].id+']='+encodeURIComponent(c[f].dir));
				if(o.filter) for(var l in o.filter) {
					var d=o.filter[l];
					'object'==M(d) && (d=B().stringify(d)), a.push('filter['+l+']='+encodeURIComponent(d));
				}
			}
			return s+=a.join('&'), this.oo.url!==s?(this.oo.url=s, this.load(s).then(function(t) {return r['do'](t, e, h);}, function() {return r.vo();})):(this.fo= !1, m.reject());
		},
		'do':function(t, i, e) {
			var s=this;
			return k(function() {return s.vo();}, '', '', 100), i && B.$callback(this, i, t), e && e.resolve(t), t;
		},
		vo:function() {
			var t=this.fo;
			this.fo= !1, 'object'==M(t) && this.data.feed.apply(this, t);
		},
		load:function(t) {
			t=W.$parse(t);
			var i=Ht.load.apply(this, arguments);
			return this.data.url || (this.data.url=t), i;
		},
		loadNext:function(t, i, e, s, n) {
			var h=this.P;
			if(!h.datathrottle || n) return i || 0===i || (i=this.count()), t || (t=h.datafetch || this.count()), this.data.url=this.data.url || s, this.callEvent('onDataRequest', [i, t, e, s]) && this.data.url?this.data.feed.call(this, i, t, e):m.reject();
			this._o && window.clearTimeout(this._o);
			var r=m.defer();
			return this._o=k(function() {r.resolve(this.loadNext(t, i, e, s, !0));}, this, 0, h.datathrottle), r;
		},
		po:function(t, i) {
			var e=this.oo;
			return !!(this.fo && e.url && e.from<=i && e.count+e.from>=t+i);
		},
		removeMissed_setter:function(t) {return this.data.Vr=t;},
		mo:function() {
			var t=this.P.save;
			!0===t && (t=this.P.save=this.P.url);
			var i={master:this};
			t && t.url?H.extend(i, t):i.url=t, le(i);
		},
		save_setter:function(t) {return t && this.$ready.push(this.mo), t;},
		waitSave:function(t) {
			var i=this;
			return le(this).rr(function() {t.call(i);}).then(function(t) {return 1==t.length?t[0]:t;});
		},
		scheme_setter:function(t) {this.data.scheme(t);},
		dataFeed_setter:function(t) {
			return t=W.$parse(t), this.data.attachEvent('onBeforeFilter', S(function(t, i) {
				var e, s=this;
				if('function'== typeof t) return !0;
				if(this.P.dataFeed && (t || i)) {
					t=t || 'id', i && 'object'==M(i) && (i=i.id);
					var n=this.P.dataFeed;
					if('string'== typeof n) {
						var h='filter['+t+']='+encodeURIComponent(i);
						e=this.O(n+(n.indexOf('?')<0?'?':'&')+h, this.P.datatype);
					} else {
						var r={};
						r[t]=i, 'function'== typeof n?e=n.call(this, i, r):n.$proxy && n.load && (e=n.load(this, {filter:r}));
					}
					return e && (e.then || (e=m.resolve(e)), e.then(function(t) {s.clearAll(), s.W(t), s.data.callEvent('onAfterFilter', []);}, function(t) {return s.U(t);})), !1;
				}
			}, this)), t;
		},
		G:function() {
			if(this.P.ready && !this.bo) {
				var t=v(this.P.ready, this.$scope);
				t && k(t, this, arguments), this.callEvent && k(this.callEvent, this, ['onReady', []]), this.bo= !0;
			}
		},
		ao:function(t) {this.Y++, t || (this.fo= !1, this.oo={}, this.waitData=m.defer());},
		uo:function(t) {this.Bi(t);}
	}, Ht), pe={
		getState:function() {
			for(var i=this, t=this.config.columns.length, e=this.config.columns, s={
				ids:[],
				size:[],
				select:this.getSelectedId(!0),
				scroll:this.getScrollState()
			}, n=0; n<t; n++) {
				var h=e[n];
				s.ids.push(h.id), s.size.push(h.fillspace || h.adjust?-1:h.width);
			}
			if(s.order=[].concat(this.go.length?this.go:s.ids), this.wo.length) {
				var r=this.wo.map(function(t) {
					return {
						id:t,
						dir:i.xo[t].dir
					};
				});
				s.sort=1==r.length?r[0]:r;
			}
			if(this.yo && this.Mo) {
				var o={}, a=0;
				for(var u in this.yo) if(!this.So[u]) {
					var c=this.yo[u];
					c[1].value=o[u]=c[2].getValue(c[0]), a=1;
				}
				a && (s.filter=o);
			}
			for(var f in s.hidden=[], this.So) s.hidden.push(f);
			return s;
		},
		setState:function(t) {
			var i=this.config.columns;
			if(t) {
				if(this.markSorting(), this.wo=[], this.xo={}, this.blockEvent(), t.order && t.order.length && (this.go=[].concat(t.order), this.ko=[this.P.leftSplit, t.order.length-this.P.rightSplit]), t.hidden) {
					for(var e={}, s=0; s<t.hidden.length; s++) e[t.hidden[s]]= !0, this.go.length || this.hideColumn(t.hidden[s]);
					if(this.go.length) for(var n=0; n<this.go.length; n++) {
						var h=this.go[n];
						!!e[h]== !this.So[h] && this.hideColumn(h, {}, !1, !!e[h]);
					}
				}
				if(t.ids) {
					for(var r=!1, o=0; o<i.length; o++) i[o].id!=t.ids[o] && (r= !0);
					if(r) {
						for(var a=0; a<t.ids.length; a++) i[a]=this.getColumnConfig(t.ids[a]) || i[a];
						this.refreshColumns();
					}
				}
				if(t.size) for(var u=Math.min(t.size.length, i.length), c=0; c<u; c++) {
					var f=i[c];
					f && 0<t.size[c] && f.width!=t.size[c] && (delete f.fillspace, delete f.adjust, this.Co(c, t.size[c], !0));
				}
				this.unblockEvent();
				var l=!(this.P.leftSplit || this.P.rightSplit);
				if(this.$o(l), this.callEvent('onStructureUpdate', []), t.sort) {
					var d=t.sort, v=!0;
					$(d) || (v= !(d=[d]));
					for(var _=0; _<d.length; _++) {
						var p=this.getColumnConfig(d[_].id);
						p && this.Do(p.id, d[_].dir, p.sort, v);
					}
				}
				if(t.filter) {
					var m=this.filterByAll;
					for(var b in this.filterByAll=function() {}, t.filter) {
						var g=t.filter[b];
						if(g && this.yo[b]) {
							var w=this.yo[b];
							w[2].setValue(w[0], g);
							var x=w[1].contentId;
							x && (this.Io[x].value=g);
						}
					}
					for(var y in this.yo) if(!t.filter[y]) {
						var M=this.yo[y];
						M[2].setValue(M[0], '');
					}
					this.filterByAll=m, this.filterByAll();
				}
				if(t.select && this.select) {
					var S=t.select;
					this.unselect();
					for(var k=0; k<S.length; k++) S[k].row && !this.exists(S[k].row) || this.Ao(S[k], !0);
				}
				t.scroll && this.scrollTo(t.scroll.x, t.scroll.y);
			}
		}
	}, me={
		To:function(t, i, e) {
			i || Xi.addDrop(t.Oi, t, !0), e || Xi.addDrag(t.Oi, t), this.attachEvent('onDragOut', function(t, i) {this.$dragMark(t, i);}), this.attachEvent('onBeforeAutoScroll', function() {
				var t=Xi.getContext();
				return !(!Xi.Ls || !t || t.to!==this && !this.Fo);
			});
		},
		drag_setter:function(t) {return t && (H.extend(this, Gt, !0), 'order'!=t && 'move'!=t || H.extend(this, d('DragOrder'), !0), 'inner'!=t && 'order'!=t || (this.Vo= !0), this.To(this, 'source'==t, 'target'==t), delete this.drag_setter), t;},
		$dragIn:function(t, i, e) {
			var s=this.locate(e) || null, n=Xi.qs;
			if((this.Vo || n.from.Vo) && n.from!==this) return !1;
			var h=Xi.getMaster(i), r=this.getItemNode(s, e) || this.tt;
			if(r==Xi.rn) return r;
			n.target=s, n.to=h, this.rt && (this.rt=window.clearTimeout(this.rt));
			var o=this.addRowCss && q.touch && !this.P.prerender;
			return !1===this.P.dragscroll || o || (this.rt=k(function(t, i) {this.zo(i), this.et(t, i);}, this, [bt(e), s], 250)), this.$dropAllow(n, e) && this.callEvent('onBeforeDragIn', [n, e])?(this.$dragMark(n, e), r):(n.to=n.target=null, this.rt && (this.rt=window.clearTimeout(this.rt)), null);
		},
		$dropAllow:function() {return !0;},
		zo:function() {},
		Bo:function(t) {return t && 'object'===M(t)?t.toString():t;},
		$dragOut:function(t, i, e, s) {
			var n=(this.Vt.contains(e)?this.locate(s):null) || null, h=Xi.qs;
			return (h.target || '').toString()==(n || '').toString() || (this.rt && (this.rt=window.clearTimeout(this.rt)), h.target=h.to=null, this.callEvent('onDragOut', [h, s])), null;
		},
		$drop:function(t, i, e) {
			var s=Xi.qs;
			(s.to=this).Ho(t, i, s), this.$dragMark({}, e), s.from && s.from!=s.to && s.from.callEvent && !s.from.callEvent('onBeforeDropOut', [s, e]) || this.callEvent('onBeforeDrop', [s, e]) && (this.Ro(s, e), this.callEvent('onAfterDrop', [s, e]));
		},
		Ho:function(t, i, e) {
			var s=this.Bo(e.target);
			this.getBranchIndex?e.index=s?(e.parent=this.getParentId(s), this.getBranchIndex(s)):-1:e.index=s?this.getIndexById(s):this.count();
		},
		Ro:function(t) {
			if(t.from, t.from && t.from.move) {
				var i={
					parent:t.parent,
					mode:t.pos
				};
				t.from.move(t.source, t.index, t.to, i);
			}
		},
		Ys:function(t, i) {
			if(this.getItemNode) {
				var e=this.locate(i, !0), s=e?this.getItemNode(e):null;
				return s?pt(s):s;
			}
		},
		$drag:function(t, i) {
			var e=this.locate(i, !0);
			if(e) {
				var s=[e];
				if(this.getSelectedId) {
					var n=this.getSelectedId(!0, !0);
					if(n && 1<n.length && -1!=x.find.call(n, e)) {
						var h={};
						s=[];
						for(var r=0; r<n.length; r++) h[n[r]]= !0;
						for(var o=0; o<this.data.order.length; o++) {
							var a=this.data.order[o];
							h[a] && s.push(a);
						}
					}
				}
				var u=Xi.qs={
					source:s,
					start:e
				};
				if((u.from=this).callEvent('onBeforeDrag', [u, i])) return q.touch && 'touch'==this.Eo && k(function() {Yi.qe=null;}), u.html || this.$dragHTML(this.getItem(e), i, u);
			}
			return null;
		},
		$dragHTML:function(t, i, e) {
			var s=this.Q(t);
			return $(e.source) && 1<e.source.length && (s=this.Po(s, e.source.length)), s;
		},
		Po:function(t, i) {
			var e='<div class=\'webix_drag_multiple\'></div>';
			return 2<i && (e='<div class=\'webix_drag_multiple_last\'></div>'+e), e+(t='<div class=\'webix_drag_main\'>'+t+'</div>')+'<span class=\'webix_badge\'>'+i+'</span>';
		},
		$dragMark:function(t) {
			var i=null;
			return t.target && (i=this.Bo(t.target)), this.jo && this.jo!=i && (this.No([this.jo], 'webix_drag_over', !0), this.jo=null), !this.jo && i?(this.jo=i, this.Lo([i], 'webix_drag_over', !0), i):!!t.to;
		},
		Lo:function(t, i) {for(var e=0; e<t.length; e++) this.addCss(t[e], i);},
		No:function(t, i) {for(var e=0; e<t.length; e++) this.removeCss(t[e], i);},
		$dropHTML:function() {return '';},
		Oo:function(t, i) {
			var e=this.getItemNode(t);e?e.parentNode.insertBefore(Xi.ln[0], e):i.children[0].appendChild(Xi.ln[0]);
		}
	}, be={
		$drag:function(t, i) {
			var e=me.$drag.apply(this, arguments);
			if(!e) return e;
			var s=Xi.qs;
			return this.Wo && this.Wo(s), this.Vo && this.getBranchIndex && (this.Uo=this.Yo?20*(this.getItem(s.start).$level+1)+8:0), $(s.source) && (Xi.an(i), this.Lo(s.source, 'webix_invisible')), e;
		},
		$dragIn:function(t, i, e) {
			var s=me.$dragIn.apply(this, arguments);
			if(!s) return s;
			Xi.ln || (Xi.ln=this.qo());
			var n=Xi.qs, h='$webix-last';
			if(n.target && (h=this.Bo(n.target)), '$webix-last'!=h && '$webix-drop'!=h) {
				var r={
					direction:this.P.layout || this.Go || 'y',
					x:'width',
					y:'height'
				}, o=pt(s);
				2*(bt(e)[r.direction]-o[r.direction])>o[r[r.direction]] && (h=this.getNextId(h) || '$webix-last');
			}
			return h==this.Xo || '$webix-drop'==h || (this.Xo=h, this.Oo(h, i)), s;
		},
		$dragPos:function(t) {
			if(!this.Vo) {
				var i=Xi.qs;
				return t.y+=i.y_offset, void (t.x+=i.x_offset);
			}
			var e=pt(this.$view);
			if('x'==this.P.layout) if(e.x-=12, t.y=e.y-8, t.x=t.x-18, t.x<e.x) t.x=e.x; else {
				var s=e.x+e.width;
				t.x>s && (t.x=s);
			} else if(e.y+=(this.Jo || 0)-12, t.x=e.x+8+(this.Uo || 0), t.y=t.y-18, t.y<e.y) t.y=e.y; else {
				var n=e.y+e.height-(this.Jo || 0);
				t.y>n && (t.y=n);
			}
		},
		$dragOut:function(t, i, e) {return i!=e && (dt(Xi.ln), this.Xo=Xi.ln=null), me.$dragOut.apply(this, arguments);},
		Ho:function(t, i, e) {
			var s='$webix-last'==this.Xo?null:this.Xo;
			this.getBranchIndex?s?(e.parent=this.getParentId(s), e.index=this.getBranchIndex(s), t==i && this.getParentId(e.start)==e.parent && this.getBranchIndex(e.start)<e.index && (e.index-=1)):e.index= -1:(e.index=s?this.getIndexById(s):this.count(), e.index-=t==i && this.getIndexById(e.start)<e.index?1:0);
		},
		$dragDestroy:function() {
			var t=Xi.qs;
			$(t.source) && this.No(t.source, 'webix_invisible'), dt(Xi.Li);
		},
		qo:function() {
			var t=document.createElement('div');
			return t.className='webix_drop_area', t.style.width=this.type.width+'px', t.style.height=this.type.height+'px', t.innerHTML=this.$dropHTML(), t.setAttribute(this.Ko, '$webix-drop'), [t];
		},
		$dragMark:function() {return !1;}
	};
	t('DragOrder', be);
	var ge={
		$init:function() {this.Zo=H.extend([], x, !0), this.Qo= -1;},
		undo_setter:function(t) {return t && (this.ta(), this.ta=function() {}), t;},
		ta:function() {
			var n=this;
			this.attachEvent('onBeforeDrop', function(t) {
				if(t.from==t.to) {
					var i=n.ia=_(this.getItem(t.start));
					this.data.branch?i.$index=this.getBranchIndex(i.id):i.$index=this.getIndexById(i.id);
				}
			}), this.data.attachEvent('onDataMove', function(t) {
				if(n.ia && n.ia.id==t) {
					var i=n.ia;
					n.ia=null, n.ea(t, i, 'move');
				}
			}), this.data.attachEvent('onBeforeDelete', function(t) {
				if(this.getItem(t)) {
					var i=n.sa=_(this.getItem(t));
					this.branch?(i.$index=this.getBranchIndex(t), this.branch[t] && (i.$branch=_(this.serialize(t)))):i.$index=this.getIndexById(t);
				}
			}), this.data.attachEvent('onDataUpdate', function(t, i, e) {n.ea(t+'', e, 'update');}), this.data.attachEvent('onStoreUpdated', function(t, i, e) {
				var s=null;
				t && ('add'==e?s=_(i):'delete'==e && (s=n.sa), s && n.ea(t, s, e));
			}), this.data.attachEvent('onIdChange', function(t, i) {
				'object'==M(t) && (t=t.row);
				for(var e=0; e<n.Zo.length; e++) n.Zo[e].id==t && (n.Zo[e].id=i);
			});
		},
		ea:function(t, i, e) {
			!this.na && this.P.undo && (this.Zo.push({
				id:t,
				action:e,
				data:i
			}), 20==this.Zo.length && this.Zo.splice(0, 1), this.ha || (this.Qo=this.Zo.length-1));
		},
		ignoreUndo:function(t, i) {this.na= !0, t.call(i || this), this.na= !1;},
		removeUndo:function(t) {
			for(var i=this.Zo.length-1; 0<=i; i--) this.Zo[i].id==t && ('id'==this.Zo[i].action && (t=this.Zo[i].data), this.Zo.removeAt(i));
			this.Qo=this.Zo.length-1;
		},
		undo:function(e) {
			if(e) this.ignoreUndo(function() {
				var t, i;
				for(i=this.Zo.length-1; !t && 0<=i; i--) this.Zo[i].id==e && (t=this.Zo[i]);
				t && (this.ra(t), this.Zo.removeAt(i+1), this.Qo=this.Zo.length-1);
			}); else {
				var t=this.Zo[this.Qo];
				t && (this.ignoreUndo(function() {this.ra(t), this.Zo.removeAt(this.Qo);}), this.Qo--);
			}
		},
		ra:function(t) {
			if('delete'==t.action) {
				var i=null, e=t.data.$parent;
				t.data.$branch && (i={
					parent:t.id,
					data:_(t.data.$branch)
				}, delete t.data.$branch, e && !this.data.branch[e] && (e=0)), this.add(t.data, t.data.$index, e), i && this.parse(i);
			} else 'add'==t.action?this.remove(t.id):'update'==t.action?this.updateItem(t.id, t.data):'move'==t.action && (t.data.$parent?this.getItem(t.data.$parent) && this.move(t.id, t.data.$index, null, {
				parent:t.data.$parent
			}):this.move(t.id, t.data.$index));
		}
	};

	function we(t) {t && t.setMasterValue && !t.oa && (t.oa= !0, t.attachEvent('onValueSuggest', function() {k(function() {y('onEditEnd', []);});}));}

	function xe(t) {return 'string'== typeof t?t:t.linkInput?t.P.id:('object'==M(t)?($(t) && (t={data:t}), t.view=t.view || 'suggest'):!0===t && (t={view:'suggest'}), si(t).config.id);}

	function ye(t) {return ((t.header && t.header[0]?t.header[0].text:t.editValue || t.label) || '').toString().replace(/<[^>]*>/g, '');}

	var Me={
		text:{
			focus:function() {this.getInputNode(this.node).focus(), this.getInputNode(this.node).select();},
			getValue:function() {return this.getInputNode(this.node).value;},
			setValue:function(t) {
				var i=this.getInputNode(this.node);
				i.value=t, we(function n(t, i) {
					var e=t.config.suggest;
					if(e) {
						var s=oi(t.config.suggest=xe(e));
						return s && i && s.linkInput(i), s;
					}
				}(this, i));
			},
			getInputNode:function() {return this.node.firstChild;},
			render:function() {return ft('div', {'class':'webix_dt_editor'}, '<input type=\'text\' aria-label=\''+ye(this.config)+'\'>');}
		},
		'inline-checkbox':{
			render:function() {return {};},
			getValue:function() {return this.node.checked;},
			setValue:function() {},
			focus:function() {this.node.focus();},
			getInputNode:function() {},
			$inline:!0
		},
		'inline-text':{
			render:function() {return {};},
			getValue:function() {return this.node.value;},
			setValue:function() {},
			focus:function() {
				try {
					this.node.select(), this.node.focus();
				} catch(Ro) {
				}
			},
			getInputNode:function() {},
			$inline:!0
		},
		checkbox:{
			focus:function() {this.getInputNode().focus();},
			getValue:function() {return this.getInputNode().checked;},
			setValue:function(t) {this.getInputNode().checked= !!t;},
			getInputNode:function() {return this.node.firstChild.firstChild;},
			render:function() {return ft('div', {'class':'webix_dt_editor'}, '<div><input type=\'checkbox\' aria-label=\''+ye(this.config)+'\'></div>');}
		},
		select:{
			focus:function() {this.getInputNode().focus();},
			getValue:function() {return this.getInputNode().value;},
			setValue:function(t) {this.getInputNode().value=t;},
			getInputNode:function() {return this.node.firstChild;},
			render:function() {
				var i='', t=this.config.options || this.config.collection;
				if(t.data && t.data.each) t.data.each(function(t) {i+='<option value=\''+t.id+'\'>'+t.value+'</option>';}); else if($(t)) for(var e=0; e<t.length; e++) {
					var s=t[e], n=R(s.id), h=n?s:s.id, r=n?s:s.value;
					i+='<option value=\''+h+'\'>'+r+'</option>';
				} else for(var o in t) i+='<option value=\''+o+'\'>'+t[o]+'</option>';
				return ft('div', {'class':'webix_dt_editor'}, '<select aria-label=\''+ye(this.config)+'\'>'+i+'</select>');
			}
		},
		popup:{
			focus:function() {this.getInputNode().focus();},
			destroy:function() {this.getPopup().hide();},
			getValue:function() {return this.getInputNode().getValue() || '';},
			setValue:function(t) {this.getPopup().show(this.node), this.getInputNode().setValue(t);},
			getInputNode:function() {return this.getPopup().getChildViews()[0];},
			getPopup:function() {return this.config.$popup || (this.config.$popup=this.createPopup()), oi(this.config.$popup);},
			createPopup:function() {
				var t, i=this.config.popup || this.config.suggest;
				if(i) return (t='object'!=M(i) || i.name?oi(i):(i.view=i.view || 'suggest', si(_(i)))).aa || (t.linkInput?t.linkInput(document.body):this.linkInput && this.linkInput(document.body), t.aa= !0), we(t), t;
				var e=Me.$popup[this.popupType];
				return 'string'== typeof e || e.name || (e=Me.$popup[this.popupType]=si(e), this.popupInit(e), e.linkInput || this.linkInput(document.body)), e.P.id;
			},
			linkInput:function(t) {
				Kt(C(t), 'keydown', S(function(t) {
					if(this.config.$popup) {
						var i, e=t.which || t.keyCode, s=this.getInputNode();
						if(s.isVisible()) if(s.moveSelection && e<41 && 32<e) 33==e && (i='pgup'), 34==e && (i='pgdown'), 35==e && (i='bottom'), 36==e && (i='top'), 37==e && (i='left'), 38==e && (i='up'), 39==e && (i='right'), 40==e && (i='down'), s.moveSelection(i); else 13!==e || 'TEXTAREA'===t.target.nodeName && t.shiftKey || y('onEditEnd', []);
					}
				}, this));
			},
			popupInit:function() {},
			popupType:'text',
			render:function() {return {};},
			$inline:!0
		}
	};
	Me.color=H.extend({
		focus:function() {},
		popupType:'color',
		popupInit:function(t) {t.getChildViews()[0].attachEvent('onItemClick', function(t) {y('onEditEnd', [t]);});}
	}, Me.popup), Me.date=H.extend({
		focus:function() {},
		popupType:'date',
		setValue:function(t) {
			this.ua=this.config.stringResult || t && 'string'== typeof t, Me.popup.setValue.call(this, t);
		},
		getValue:function() {return this.getInputNode().getValue(this.ua?I.parseFormatStr:'') || '';},
		popupInit:function(t) {t.getChildViews()[0].attachEvent('onDateSelect', function(t) {y('onEditEnd', [t]);});}
	}, Me.popup), Me.combo=H.extend({
		ca:function(t) {
			var i, e;
			return this.config.popup?e=(i=this.config.popup).config.id:t?i=oi(e=xe(t)):e=this.fa(t), we(i), e;
		},
		fa:function() {
			var t=Me.combo;
			return t.la=t.la || this.ca(!0);
		},
		render:function() {
			var t=ft('div', {'class':'webix_dt_editor'}, '<input type=\'text\' role=\'combobox\' aria-label=\''+ye(this.config)+'\'>'), i=this.config.suggest=this.ca(this.config.suggest);
			return i && (oi(i).linkInput(t.firstChild, !0), Kt(t.firstChild, 'click', S(this.showPopup, this))), t;
		},
		getPopup:function() {return oi(this.config.suggest);},
		showPopup:function() {
			var t=this.getPopup(), i=t.getList(), e=this.getInputNode(), s=this.da;
			t.show(e), e.setAttribute('aria-expanded', 'true'), s?(i.exists(s), i.exists(s) && (i.select(s), i.showItem(s))):(i.unselect(), i.showItem(i.getFirstId())), t.va=e;
		},
		afterRender:function() {this.showPopup();},
		setValue:function(t) {
			if(this.da=t, this.config.suggest) {
				var i=oi(this.config.suggest), e=this.config.collection || this.config.options;
				e && i.getList().data.importData(e), this.getInputNode(this.node).value=i.getItemText(t);
			}
		},
		getValue:function() {
			var t=this.getInputNode().value;
			if(this.config.suggest) {
				var i=oi(this.config.suggest), e=i.getList();
				(t || e.getSelectedId && e.getSelectedId()) && (t=i.getSuggestion(t));
			}
			return t;
		}
	}, Me.text), Me.richselect=H.extend({
		focus:function() {},
		getValue:function() {return this.getPopup().getValue();},
		setValue:function(t) {
			var i=this.config.collection || this.config.options;
			this.getInputNode(), i && this.getPopup().getList().data.importData(i), this.getPopup().show(this.node), this.getPopup().setValue(t);
		},
		getInputNode:function() {return this.getPopup().getList();},
		popupInit:function(t) {t._a=function() {}, t.linkInput(document.body), we(t);},
		popupType:'richselect'
	}, Me.popup), Me.password=H.extend({render:function() {return ft('div', {'class':'webix_dt_editor'}, '<input type=\'password\' aria-label=\''+ye(this.config)+'\'>');}}, Me.text), Me.$popup={
		text:{
			view:'popup',
			width:250,
			height:150,
			body:{view:'textarea'}
		},
		color:{
			view:'popup',
			body:{view:'colorboard'}
		},
		date:{
			view:'popup',
			width:250,
			height:250,
			padding:0,
			body:{
				view:'calendar',
				icons:!0,
				borderless:!0
			}
		},
		richselect:{
			view:'suggest',
			body:{
				view:'list',
				select:!0
			}
		},
		multiselect:{
			view:'multisuggest',
			suggest:{button:!0}
		}
	};
	var Se={
		defaults:{editaction:'click'},
		$init:function(t) {this.pa={}, this.Ii=0, this.wt=0, this.Oi.style.position='relative', t && (t.onDblClick=t.onDblClick || {}), this.attachEvent('onAfterRender', this.ma), this.P.editable && this.ba(), H.extend(this, ge);},
		ga:function(t) {
			try {
				if('number'== typeof t.selectionStart) t.selectionStart=t.selectionEnd=t.value.length; else if('undefined'!= typeof t.createTextRange) {
					var i=t.createTextRange();
					i.collapse(!1), i.select();
				}
			} catch(Ro) {
			}
		},
		ma:function() {
			var t=this.getEditor();
			if(t && t.$inline && !t.getPopup) {
				var i=this.wa(t);
				if(i && i!=t.node) {
					var e=t.node.value;
					(t.node=i).value=e, i.focus(), this.ga(i);
				} else this.editStop();
			}
		},
		editable_setter:function(t) {return t && this.ba(), t;},
		ba:function() {
			var t=A('onEditEnd', S(function() {this.Ii && this.editStop();}, this)), i=A('onClick', S(function(t) {this.Ii && 200<new Date-this.wt && (this.Ei && !this.Ei.popupType && t && this.Ei.node && this.Ei.node.contains(t.target) || this.editStop());}, this));
			this.attachEvent('onDestruct', function() {T(t), T(i);}), this.data.attachEvent && this.data.attachEvent('onIdChange', S(function(t, i) {this.xa(t, i);}, this)), this.attachEvent('onItemClick', function(t) {this.P.editable && 'click'==this.P.editaction && this.edit(t);}), this.attachEvent('onItemDblClick', function(t) {this.P.editable && 'dblclick'==this.P.editaction && this.edit(t);}), this.ya=S(function() {this.wt=new Date;}, this), this.ba=function() {}, this.Ma && this.Ma();
		},
		Sa:function() {
			k(function() {
				var t=this.getEditor();
				if(t && t.config.liveEdit) {
					var i={
						value:t.getValue(),
						old:t.value
					};
					if(i.value==i.old) return;
					t.value=i.value, this.ka(t, i.value, !1), this.callEvent('onLiveEdit', [i, t]);
				}
			}, this);
		},
		Ca:function(t) {
			var i=this.P.form;
			'string'!= typeof i && (this.P.form=i=si(i).config.id);
			var e=(i=oi(i)).setValues?i:i.getChildViews()[0];
			e.setValues(this.getItem(t.row || t)), i.config.master=this.config.id, i.show(this.getItemNode(t));
			var s=e.getChildViews()[0];
			s.focus && s.focus();
		},
		edit:function(t, i, e) {
			if(this.P.editable && this.callEvent('onBeforeEditStart', [t])) {
				if(this.P.form) return this.Ca(t);
				var s=this.$a(t);
				if(s) {
					if(this.getEditor(t)) return;
					i || this.editStop(), Me[s];
					var n=H.extend({}, Me[s]), h=this.Da(t, n, e);
					n.config.liveEdit && (this.Ia=this.attachEvent('onKeyPress', this.Sa));
					var r=n.getPopup?n.getPopup(h).Vt:h;
					return r && Kt(r, 'click', this.ya), h && Kt(h, 'change', this.Aa, {
						bind:{
							view:this,
							id:t
						}
					}), !1!==e && n.focus(), this.$fixEditor && this.$fixEditor(n), this.wt=ii.edit_open_time=new Date, Mi.setFocus(this, !0), this.callEvent('onAfterEditStart', [t]), n;
				}
				return null;
			}
		},
		getEditor:function(t) {return t?this.pa[t]:this.Ei;},
		xa:function(t, i) {
			var e=this.pa[t];
			e && ((this.pa[i]=e).id=i, delete this.pa[t]);
		},
		Aa:function() {this.view.hasEvent('onEditorChange') && this.view.callEvent('onEditorChange', [this.id, this.view.getEditorValue(this.id)]);},
		Ta:function() {return this.P;},
		Da:function(t, i, e) {
			i.config=this.Ta(t);
			var s=i.render();
			i.$inline && (s=this.wa(t)), i.node=s;
			var n=this.getItem(t), h=n[this.P.editValue || 'value'];
			return R(h) && (h=''), i.setValue(h, n), i.value=h, this.Fa(t, i), !1!==e && this.showItem(t), i.$inline || this.Va(t, s, !0), i.afterRender && i.afterRender(), s;
		},
		za:function(t) {return this.getItemNode(t);},
		wa:function(t) {
			var i=this.za(t);
			return i && (i=i.getElementsByTagName('input')[0] || i), i;
		},
		$a:function() {return this.P.editor;},
		Fa:function(t, i) {i.id=t, this.pa[t]=this.Ei=i, this.Ii++;},
		Ba:function(t) {this.Ei==t && (this.Ei=0), t.destroy && t.destroy(), delete t.popup, delete t.node, delete this.pa[t.id], this.Ii--;},
		focusEditor:function() {
			var t=this.getEditor.apply(this, arguments);
			t && t.focus && t.focus();
		},
		editCancel:function() {this.editStop(null, null, !0);},
		bi:function(t) {
			if(t) {
				var i=this.getEditor();
				if(i && i.getPopup && i.getPopup()==t.getTopParentView()) return;
			}
			this.editStop();
		},
		editStop:function(t) {
			if(!this.Ha) {
				this.Ha=1;
				var i=arguments[2], e=1;
				return t?e=this.Ra(this.pa[t], i):this.Ea(function(t) {e*=this.Ra(t, i);}), this.Ha=0, e;
			}
		},
		at:function(t) {
			var i=this.getItemNode(t);
			return {
				left:i.offsetLeft,
				top:i.offsetTop,
				height:i.offsetHeight,
				width:i.offsetWidth,
				parent:this.Oi
			};
		},
		Va:function(t, i, e) {
			if(i.style) {
				var s=this.at(t, null, !0);
				return i.style.top=s.top+'px', i.style.left=s.left+'px', i.style.width=s.width-1+'px', i.style.height=s.height-1+'px', i.top=s.top, e && s.parent.appendChild(i), s;
			}
		},
		Ea:function(t) {for(var i in this.pa) t.call(this, this.pa[i]);},
		Ra:function(t, i) {
			if(t && !ii.xt) {
				var e={
					value:this.Pa(t),
					old:t.value
				};
				if(this.callEvent('onBeforeEditStop', [e, t, i])) {
					if(!i) {
						var s=e.old;
						if('string'== typeof e.value && (s+=''), s!=e.value || t.config.liveEdit) {
							var n=this.ka(t, e.value, !0);
							this.updateItem(t.row || t.id, n);
						}
					}
					t.$inline?t.node=null:dt(t.node);
					var h=t.config.suggest;
					return h && 'string'== typeof h && oi(h).hide(), this.Ba(t), this.Ia && this.detachEvent(this.Ia), this.callEvent('onAfterEditStop', [e, t, i]), 1;
				}
				return 0;
			}
		},
		validateEditor:function(t) {
			var i=!0;
			if(this.P.rules) {
				var e=this.getEditor(t), s=e.column || this.P.editValue || 'value', n=this.P.rules[s], h=this.P.rules.$all;
				if(n || h) {
					var r=this.data.getItem(e.row || e.id), o=e.getValue(), a=e.getInputNode();
					n && (i=n.call(this, o, r, s)), h && (i=h.call(this, o, r, s) && i), i?Mt(a, 'webix_invalid'):yt(a, 'webix_invalid'), y('onLiveValidation', [e, i, r, o]);
				}
			}
			return i;
		},
		getEditorValue:function(t) {
			var i;
			if(i=0===arguments.length?this.Ei:this.getEditor(t)) return i.getValue();
		},
		getEditState:function() {return this.Ei || !1;},
		editNext:function(t, i) {
			if(t=!1!==t, 1==this.Ii || i) {
				var e=this.ja(this.Ei || i, function(t) {return !!this.$a(t);}, t);
				if(this.editStop()) return e && (this.edit(e), this.Na(e)), !1;
			}
		},
		Na:function() {},
		ja:function(t, i, e) {
			var s=this.getIndexById(t.id), n=this.data.order;
			if(e) {
				for(var h=s+1; h<n.length; h++) if(i.call(this, n[h])) return n[h];
			} else for(var r=s-1; 0<=r; r--) if(i.call(this, n[r])) return n[r];
			return null;
		},
		Pa:function(t) {return t.getValue();},
		ka:function(t, i, e) {
			var s=e?{}:this.getItem(t.id);
			return s[this.P.editValue || 'value']=i, s;
		}
	}, ke={
		$init:function() {this.$view.className+=' webix_flexlayout';},
		La:function() {},
		Oa:function() {},
		Wa:function() {},
		$getSize:function() {
			var t=0, i=0, e=this.P.gravity;
			this.ii=[];
			for(var s=0; s<this.hi.length; s++) {
				var n=this.hi[s].$getSize(0, 0);
				this.ii.push(n), t=Math.max(t, n[0]), i=Math.max(i, n[2]);
			}
			return t+=this.Ua.left+this.Ua.right, i+=this.Ua.top+this.Ua.bottom, this.P.width && (t=Math.max(t, this.P.width)), this.P.height && (i=Math.max(i, this.P.height)), [t, 1e5, i, 1e5, e];
		},
		render:function() {this.resize();},
		Ya:function() {
			if(this.isVisible(this.P.id)) {
				var t=this.$view.style, i=Math.round(this.qa/2);
				t.paddingTop=this.Ua.top-i+'px', t.paddingBottom=this.Ua.bottom-i+'px', t.paddingLeft=this.Ua.left-i+'px', t.paddingRight=this.Ua.right-i+'px';
				for(var e=0; e<this.hi.length; e++) if(!this.hi[e].P.hidden) {
					var s=this.hi[e].$view, n=this.ii[e], h=this.hi[e].P;
					s && (s.style.minWidth=n[0]+'px', n[1]<1e5 && n[1]!=n[0] && (s.style.maxWidth=n[1]+'px'), s.style.flexBasis=h.flexBasis || n[0]+'px', s.style.flexGrow=h.flexGrow || (n[1]!=n[0]?n[4]:0), s.style.height=n[3]!=n[2]?'auto':n[2]+'px', s.style.minHeight=n[2]+'px', n[3]<1e5 && n[3]!=n[2] && (s.style.maxHeight=n[3]+'px'), s.style.margin=i+'px');
				}
				for(var r=[], o=0; o<this.hi.length; o++) if(!this.hi[o].P.hidden) {
					var a=this.hi[o].$view;
					r[o]=[a.offsetWidth, a.offsetHeight];
				}
				for(var u=0; u<this.hi.length; u++) if(!this.hi[u].P.hidden) {
					var c=this.hi[u];
					if(c.$view) {
						c.P.flex= !0;
						var f=this.ii[u], l=f[2]==f[3]?f[2]:r[u][1];
						c.$setSize(r[u][0], l), c.P.flex= !1;
					}
				}
				this.$height=this.ge=this.$view.scrollHeight, this.$view.style.height=this.ge+'px';
			}
		}
	}, Ce={
		sum:function(t, i) {
			i=i || this;
			for(var e=0, s=0; s<i.length; s++) {
				var n=parseFloat(t(i[s]), 10);
				isNaN(n) || (e+=n);
			}
			return e;
		},
		min:function(t, i) {
			i=i || this;
			for(var e=Infinity, s=0; s<i.length; s++) {
				var n=parseFloat(t(i[s]), 10);
				isNaN(n) || n<e && (e=n);
			}
			return e===Infinity?0:1*e;
		},
		max:function(t, i) {
			i=i || this;
			for(var e=-Infinity, s=0; s<i.length; s++) {
				var n=parseFloat(t(i[s]), 10);
				isNaN(n) || e<n && (e=n);
			}
			return e=== -Infinity?0:1*e;
		},
		count:function(t, i) {
			for(var e=0, s=0; s<i.length; s++) {
				var n=t(i[s]);
				null!=n && e++;
			}
			return e;
		},
		any:function(t, i) {return t(i[0]);},
		string:function(t) {return t.$name;}
	}, $e={
		$init:function() {
			var t=this;
			this.attachEvent('onClearAll', function() {return t.Tr=null;}), this.attachEvent('onSyncApply', function() {return t.Tr=null;});
		},
		ungroup:function(t) {
			if(this.getBranchIndex) {
				if(!this.Ga(t)) return;
			} else {
				if(!this.Tr) return;
				this.order=this.Tr, this.pull=this.Xa;
			}
			this.callEvent('onStoreUpdated', []);
		},
		Ga:function(t) {
			for(var i=this, e=t || 0, s='0'==e?1:this.getItem(e).$level+1, n=!1, h=this.branch[e], r=[], o=0; o<h.length; o++) {
				var a=h[o];
				if(this.pull[a].$group) {
					n= !0;
					var u=this.branch[a];
					u && (this.branch[a]=u.filter(function(t) {
						if(!i.pull[t].$footer) return t;
						i.Ja(t);
					})), r=r.concat(this.branch[a] || []), this.Ja(a);
				} else r.push(a);
			}
			return !!n && (this.branch[e]=r, this.Ka(this.branch[e], e, s), void 0===t && this.Ga(), !0);
		},
		Ja:function(t) {delete this.pull[t], delete this.branch[t];},
		Ar:function(t) {this.blockEvent(), this.group(t), this.unblockEvent();},
		Za:function(i) {
			if('function'== typeof i) return i;
			var t=function(t) {return t[i];};
			return t.$name=i, t;
		},
		group:function(e, t) {
			var i;
			if('string'== typeof e?(i=e, e={
				by:this.Za(e),
				map:{}
			}):'function'== typeof e?e={
				by:e,
				map:{}
			}:'string'== typeof e.by && (i=e.by, e.by=this.Za(e.by)), e.map=e.map || {}, i && !e.map[i] && (e.map[i]=[i]), e.missing=e.missing===undefined || e.missing, this.getBranchIndex) return this.Qa(e, t);
			this.Tr || (this.Tr=this.order, this.Xa=this.pull);
			var s={}, n=[], h=[], r=e.missing;
			this.each(function(t) {
				var i=e.by(t);
				if(!i && 0!==i) {
					if(!1===r) return;
					if(!0===r) return void h.push(t);
					i=r;
				}
				s[i] || (n.push({
					id:i,
					value:i,
					$group:!0,
					$row:e.row
				}), s[i]=b()), s[i].push(t);
			});
			for(var o=0; o<n.length; o++) {
				var a=n[o];
				this.tu(e.map, a, s[n[o].id]), this.hasEvent('onGroupCreated') && this.callEvent('onGroupCreated', [a.id, a.value, s[n[o].id]]);
			}
			this.order=b(), this.pull={}, this.iu(n), this.iu(h), this.callEvent('onStoreUpdated', []);
		},
		iu:function(t) {
			for(var i=0; i<t.length; i++) {
				var e=this.id(t[i]);
				this.pull[e] && (e=t[i].id=V()), this.pull[e]=t[i], this.order.push(e), this.Br && this.Br(t[i]);
			}
		},
		tu:function(t, i, e) {
			for(var s in t) {
				var n=t[s][1] || 'any', h=this.Za(t[s][0]);
				'function'!= typeof n && (Ce[n], n=Ce[n]), i[s]=n.call(this, h, e);
			}
		},
		Qa:function(t, i) {
			var e=0;
			i?e=this.getItem(i).$level:i=0;
			for(var s=[], n=[], h=[], r=this.branch[i], o={}, a=0; a<r.length; a++) {
				var u=this.getItem(r[a]), c=t.by(u);
				if(!c && 0!==c) {
					if(!1===t.missing) continue;
					if(!0===t.missing) {
						h.push(u.id);
						continue;
					}
					c=t.missing;
				}
				var f=o[c];
				if(!f) {
					var l=V(), d=this.pull[l]={
						id:l,
						value:c,
						$group:!0,
						$row:t.row
					};
					this.Br && this.Br(d), n.push(d), (f=o[c]=this.branch[l]=[]).eu=[], s.push(l);
				}
				f.push(u.id), f.eu.push(u);
			}
			this.branch[i]=s.concat(h);
			for(var v=0; v<n.length; v++) {
				var _=n[v];
				if(this.tu(t.map, _, this.branch[n[v].id].eu), this.hasEvent('onGroupCreated') && this.callEvent('onGroupCreated', [_.id, _.value, this.branch[_.id].eu]), t.footer) {
					var p='footer$'+_.id, m=this.pull[p]={
						id:p,
						$footer:!0,
						value:_.value,
						$level:e,
						$count:0,
						$parent:_.id,
						$row:t.footer.row
					};
					this.tu(t.footer, m, this.branch[n[v].id].eu), this.branch[_.id].push(m.id), this.callEvent('onGroupFooter', [m.id, m.value, this.branch[_.id].eu]);
				}
				delete this.branch[_.id].eu;
			}
			this.Ka(this.branch[i], i, e+1), this.callEvent('onStoreUpdated', []);
		},
		Ka:function(t, i, e) {
			i && (this.getItem(i).$count=t.length);
			for(var s=0; s<t.length; s++) {
				var n=this.pull[t[s]];
				n.$level=e, n.$parent=i;
				var h=this.branch[n.id];
				h && this.Ka(h, n.id, e+1);
			}
		}
	}, De={
		$init:function() {H.extend(this.data, $e);},
		group:function(t, i) {i || 0===i || (this.$blockRender= !0, this.data.ungroup(), this.$blockRender= !1), this.data.group(t, i);},
		ungroup:function(t) {this.data.ungroup(t);}
	}, Ie={
		$init:function() {
			var t=this;
			this.$ready.push(function() {t.customRadio_setter && !t.config.customRadio || Kt(t.$view, 'keydown', t.su, {bind:t});});
		},
		gi:function() {
			if(!Mi.canFocus(this)) return !1;
			var t=this.nu();
			if(t) for(var i=0; i<t.length; i++) if('0'==t[i].getAttribute('tabindex')) return t[i].focus();
		},
		hu:function() {
			var t=this.nu();
			if(t) for(var i=0; i<t.length; i++) if('0'==t[i].getAttribute('tabindex')) return t[i].blur();
		},
		su:function(t) {
			var i=t.which || t.keyCode;
			if(34<i && i<41) {
				var e=this.nu(), s=!1;
				if(!e.length) return;
				gt(t);
				var n=37===i || 38===i || 35===i?-1:1;
				if(35===i) s=e.length-1; else if(36===i) s=0; else for(var h=0; h<e.length; h++) if('0'==e[h].getAttribute('tabindex')) {
					s=h+n;
					break;
				}
				if(!1!==s) {
					var r=s;
					do {
						if(r>=e.length && (r=0), r<0 && (r=e.length-1), e[r].getAttribute('webix_disabled')) r+=n; else {
							var o=e[r].getAttribute('button_id');
							this.setValue(o), e[r].focus(), r='success';
						}
					} while('success'!==r && r!==s);
				}
			}
		},
		Ae:function(t, i) {
			for(var e, s=i.target; s && !s.webix_tooltip;) {
				if(e=s.getAttribute('webix_t_id')) return this.getOption(e);
				s=s.parentNode;
			}
			return null;
		},
		optionIndex:function(t) {
			for(var i=this.P.options, e=0; e<i.length; e++) if(i[e].id==t) return e;
			return -1;
		},
		getOption:function(t) {
			var i=this.optionIndex(t);
			return -1!==i?this.P.options[i]:null;
		},
		addOption:function(t, i, e, s) {
			var n=t;
			'object'!=M(t)?n={
				id:t,
				value:i=i || t
			}:(t=n.id, s=e, e=i), -1===this.optionIndex(t) && (x.insertAt.call(this.P.options, n, s), this.refresh(), this.callEvent('onOptionAdd', [t, n])), e && this.setValue(t);
		},
		removeOption:function(t) {
			var i=this.optionIndex(t);
			if(-1!==i) {
				var e=this.P.options;
				x.removeAt.call(e, i), this.refresh(), this.P.value==t && this.ru(e, i), this.callEvent('onOptionRemove', [t, this.P.value]);
			}
		},
		ru:function(t, i) {
			var e=t.length;
			if(e && !this.customRadio_setter) {
				for(var s=i=Math.min(i, e-1); s<e; s++) if(!t[s].hidden) return this.setValue(t[s].id);
				for(var n=i; 0<=n; n--) if(!t[n].hidden) return this.setValue(t[n].id);
			}
			this.setValue('');
		},
		ou:function(t) {
			var i=this.P.options;
			if(i.length) {
				for(var e=0; e<i.length; e++) if(!i[e].hidden && !i[e].disabled) return i[e].id;
				if(t) return i[0].id;
			}
			return '';
		},
		au:function(t) {
			for(var i=[], e=0; e<t.length; e++) t[e].hidden || i.push(t[e]);
			return i;
		},
		uu:function(t, i, e) {
			var s=this.P.options, n=this.optionIndex(t);
			s[n] && e!= !!s[n][i] && ((s[n][i]=e) && 'hidden'===i && this.P.value==t && this.ru(s, n), this.refresh());
		},
		hideOption:function(t) {this.uu(t, 'hidden', !0);},
		showOption:function(t) {this.uu(t, 'hidden', !1);},
		disableOption:function(t) {this.uu(t, 'disabled', !0);},
		enableOption:function(t) {this.uu(t, 'disabled', !1);}
	}, Ae=H.proto({
		$init:function(t) {this.Ko='map_'+V(), this.cu=t, this.fu=[], this.lu=[];},
		addRect:function(t, i, e) {
			this.du(t, 'RECT', i, e);
		},
		addPoly:function(t, i, e) {this.du(t, 'POLY', i, e);},
		du:function(t, i, e, s) {
			var n='';
			4==arguments.length && (n='userdata=\''+s+'\''), this.fu.push('<area '+this.cu+'=\''+t+'\' shape=\''+i+'\' coords=\''+e.join()+'\' '+n+'></area>'), this.lu.push({
				index:s,
				points:e
			});
		},
		addSector:function(t, i, e, s, n, h, r, o) {
			var a=[];
			a.push(s), a.push(Math.floor(n*r));
			for(var u=i; u<e; u+=Math.PI/18) a.push(Math.floor(s+h*Math.cos(u))), a.push(Math.floor((n+h*Math.sin(u))*r));
			return a.push(Math.floor(s+h*Math.cos(e))), a.push(Math.floor((n+h*Math.sin(e))*r)), a.push(s), a.push(Math.floor(n*r)), this.addPoly(t, a, o);
		},
		hide:function(t, i, e) {
			if(t.querySelectorAll) for(var s=t.querySelectorAll('area[userdata="'+i+'"]'), n=0; n<s.length; n++) {
				var h=s[n];
				e?h.getAttribute('coords') && (h.coordsdis=h.getAttribute('coords'), h.setAttribute('coords', ''), h.coords=''):e || h.coordsdis && (h.setAttribute('coords', h.coordsdis), h.coords=h.coordsdis, h.coordsdis=''), s[n].style.display=e?'none':'';
			}
		},
		render:function(t) {
			var i=ft('DIV');
			i.style.cssText='position:absolute; width:100%; height:100%; top:0px; left:0px;', t.appendChild(i);
			var e=q.isIE?'':'src=\'data:image/gif;base64,R0lGODlhEgASAIAAAP///////yH5BAUUAAEALAAAAAASABIAAAIPjI+py+0Po5y02ouz3pwXADs=\'';
			i.innerHTML='<map id=\''+this.Ko+'\' name=\''+this.Ko+'\'>'+this.fu.join('\n')+'</map><img '+e+' class=\'webix_map_img\' usemap=\'#'+this.Ko+'\'>', t.ji=i, this.fu=[];
		}
	}), Te={
		$init:function() {this.ve={}, this._e={}, this.getTopParentView=this.vu=S(function() {return this;}, this), this._u(), this.$ready.push(this.pu);},
		$$:function(t) {return this.ve[t];},
		innerId:function(t) {return this._e[t];},
		_u:function() {this.de=ii.lt, ii.lt=this;},
		pu:function() {
			for(var t in this.ve) {
				var i=this.ve[t];
				this.callEvent && i.mapEvent && !i.l.onitemclick && i.mapEvent({onitemclick:this}), i.getTopParentView=this.vu;
			}
			ii.lt=this.de, this.de=0;
		},
		Pi:function(t) {delete this.ve[t];},
		ui:function() {
			this._u();
			var t=si.apply(this, arguments);
			return this.pu(), t;
		}
	}, Fe={
		$init:function() {this.getSelectedId && this.attachEvent('onAfterRender', this.mu), this.moveSelection && this.attachEvent('onTabFocus', this.bu);},
		bu:function() {
			if(this.getSelectedId) {
				var t=this.getSelectedId(!0);
				t.length && this.getItemNode(t[0]) || this.moveSelection('down');
			}
		},
		mu:function() {
			var t=this.getSelectedId(!0);
			if(!t.length || !this.getItemNode(t[0])) {
				var i=this.tt.querySelector('['+this.Ko+']');
				i && i.setAttribute('tabindex', '0');
			}
		},
		gu:function(n) {
			return function(t, i) {
				var e=i.target;
				if(!e.getAttribute('webixignore')) {
					var s=e.tagName;
					if('INPUT'==s || 'TEXTAREA'==s || 'SELECT'==s) return !0;
				}
				if(t && t.moveSelection && t.config.navigation && !t.Ii) return gt(i), t.moveSelection(n, {
					shift:i.shiftKey,
					ctrl:i.ctrlKey
				});
			};
		},
		moveSelection:function(t, i, e) {
			var s=this.P;
			if(!s.disabled) {
				var n=this.getSelectedId(!0), h=this.count && ('x'==s.layout || 1<s.xCount);
				if(('right'==t || 'left'==t) && this.wu) {
					var r=oi(this.wu);
					return r.xu(!0), void ('x'===r.config.layout?r.moveSelection(t):Mi.setFocus(r));
				}
				if(!n.length && this.count()) {
					if('down'==t || 'right'==t && h) t='top'; else {
						if(!('up'==t || 'left'==t && h)) return;
						t='bottom';
					}
					n=[this.getFirstId()];
				}
				if(1==n.length) {
					var o=n=n[0];
					if('left'==t && this.close) return this.close(n);
					if('right'==t && this.open) return this.open(n);
					if('top'==t) n=this.getFirstId(); else if('bottom'==t) n=this.getLastId(); else if('up'==t || 'left'==t || 'pgup'==t) {
						var a=this.getIndexById(n), u='pgup'==t?10:1;
						n=this.getIdByIndex(Math.max(0, a-u));
					} else {
						if('down'!=t && 'right'!=t && 'pgdown'!=t) return;
						var c=this.getIndexById(n), f='pgdown'==t?10:1;
						n=this.getIdByIndex(Math.min(this.count()-1, c+f));
					}
					var l='up'==t || 'left'==t || 'pgdown'==t || 'bottom'==t?-1:1;
					if(this.yu && (n=this.yu(n, o, l)), this.showItem(n), this.select(n), this.getSubMenu && this.getSubMenu(n) && this.Mu(n, this.getItemNode(n)), !this.config.clipboard && !1!==e) {
						var d=this.getItemNode(n);
						d && d.focus();
					}
				}
				return !1;
			}
		},
		navigation_setter:function(t) {
			return t && !Mi.Su && (Mi.Su= !0, Mi.addHotKey('up', this.gu('up')), Mi.addHotKey('down', this.gu('down')), Mi.addHotKey('right', this.gu('right')), Mi.addHotKey('left', this.gu('left')), Mi.addHotKey('shift+up', this.gu('up')), Mi.addHotKey('shift+down', this.gu('down')), Mi.addHotKey('shift+right', this.gu('right')), Mi.addHotKey('shift+left', this.gu('left')), Mi.addHotKey('ctrl+shift+up', this.gu('up')), Mi.addHotKey('ctrl+shift+down', this.gu('down')), Mi.addHotKey('ctrl+shift+right', this.gu('right')), Mi.addHotKey('ctrl+shift+left', this.gu('left')), Mi.addHotKey('pageup', this.gu('pgup')), Mi.addHotKey('pagedown', this.gu('pgdown')), Mi.addHotKey('home', this.gu('top')), Mi.addHotKey('end', this.gu('bottom'))), t;
		}
	}, Ve={
		$init:function() {this.$ready.push(this.ku), this.attachEvent('onStructureUpdate', this.ku), this.attachEvent('onStructureLoad', function() {this.Cu.length || this.ku();});},
		ku:function() {
			var e=this.Cu=[], t=this.P;
			t.columns && this.$u(t.columns), this.P.map && this.Du(t.map), e.length && (this.data.Br=function(t) {for(var i=0; i<e.length; i++) e[i](t);});
		},
		Du:function(t) {for(var i in t) this.Cu.push(this.Iu(i, t[i]));},
		Iu:function(e, t, i) {
			var s, n=t.replace(/^(\s|)\((date|number)\)/, '');
			return s=''===n?function(t) {return t[e];}:(-1===n.indexOf('#') && -1===n.indexOf('{') && (n='#'+n+'#'), Yt(n)), 0===t.indexOf('(date)')?(i && !i.format && (i.format=I.dateFormatStr), function(t) {
				var i=(s(t) || '').toString();
				t[e]=I.parseFormatDate(i);
			}):0===t.indexOf('(number)')?function(t) {t[e]=1*s(t);}:function(t) {t[e]=s(t) || '';};
		},
		$u:function(t) {
			for(var i=0; i<t.length; i++) {
				var e=t[i].map, s=t[i].id;
				s || (s=t[i].id='i'+V(), t[i].header || (t[i].header='')), e && this.Cu.push(this.Iu(s, e, t[i])), this.Au(t[i]);
			}
		},
		Tu:function(t) {
			if('string'== typeof t) {
				var i=oi(t);
				i?t=i:(t=new (d('DataCollection'))({url:t}), this.Bt.push(t)), t.getBody && (t=i.getBody());
			} else if('function'== typeof t || t.$proxy) t=new (d('DataCollection'))({url:t}), this.Bt.push(t); else if(!t.loadNext) {
				var e=$(t), s=[];
				if(e && 'object'!==M(t[0])) {
					for(var n=0; n<t.length; n++) s.push({
						id:t[n],
						value:t[n]
					});
					t=s;
				} else if(!e) {
					for(var h in t) s.push({
						id:h,
						value:t[h]
					});
					t=s;
				}
				t=new (d('DataCollection'))({data:t}), this.Bt.push(t);
			}
			return t;
		},
		Au:function(t) {
			var i=t.options || t.collection;
			i && (i=this.Tu(i), this.Fu(i, t)), t.header && (this.Vu(t.header), this.Vu(t.footer));
		},
		Vu:function(n) {
			var h=this;
			n=n || [];
			for(var t=function(t) {
				var i=n[t];
				if(i && i.options) {
					var e=i.options;
					e.loadNext || (e=i.options=h.Tu(e));
					var s=e.data.attachEvent('onStoreUpdated', function() {h.refreshFilter && h.refreshFilter(i.columnId);});
					h.attachEvent('onDestruct', function() {e.$destructed || e.data.detachEvent(s);});
				}
			}, i=0; i<n.length; i++) t(i);
		},
		Fu:function(t, i) {
			var e=this;
			if(i) {
				delete i.options, i.collection=t, i.template=i.template || this.zu(t, i.id, i.optionslist);
				var s=t.data.attachEvent('onStoreUpdated', function() {e.refresh(), e.refreshFilter && e.refreshFilter(i.id);});
				this.attachEvent('onDestruct', function() {t.$destructed || t.data.detachEvent(s);});
			}
		},
		zu:function(h, r, t) {
			if(r=this.getColumnConfig?r:'value', t) {
				var o='string'== typeof t?t:',';
				return function(t) {
					var i=t[r];
					if(!i) return '';
					for(var e=i.toString().split(o), s=0; s<e.length; s++) {
						var n=h.data.pull[e[s]];
						e[s]=n && n.value || '';
					}
					return e.join(', ');
				};
			}
			return function(t) {
				var i=h.data.pull[t[r]];
				return i && (i.value || 0===i.value)?i.value:'';
			};
		}
	}, ze={
		$init:function(t) {t=t || {}, this.Bu=0, this.Hu=300, this.Ru=null, this.Eu(t.onClick, 'on_click'), this.Eu(t.onContext, 'on_context'), this.Eu(t.onDblClick, 'on_dblclick'), this.Eu(t.onMouseMove, 'on_mouse_move'), this.on_click && (Kt(this.Oi, 'click', this.Pu, {bind:this}), q.isIE8 && this.on_dblclick && Kt(this.Oi, 'dblclick', this.ju, {bind:this})), this.on_context && Kt(this.Oi, 'contextmenu', this.Nu, {bind:this}), this.on_mouse_move && this.Lu();},
		Lu:function() {this.Ou || (this.on_mouse_move=this.on_mouse_move || {}, Kt(this.Oi, 'mousemove', this.Wu, {bind:this}), Kt(this.Oi, q.isIE?'mouseleave':'mouseout', this.Wu, {bind:this}), this.Ou=1, this.attachEvent('onDestruct', function() {this.Uu && window.clearTimeout(this.Uu);}));},
		Eu:function(t, i) {
			if(t) {
				var e=this[i], s=e?H.extend({}, e):{};
				this[i]=H.extend(s, t);
			}
		},
		Pu:function(t) {
			if(!this.isEnabled()) return !1;
			if(Mi.Et(this), this.on_dblclick) {
				var i=(new Date).valueOf();
				if(i-this.Bu<=this.Hu && this.locate) if(''+this.locate(t)==''+this.Ru) return this.Bu=0, this.ju(t);
				this.Bu=i;
			}
			return this.Yu(t, this.on_click, 'ItemClick');
		},
		ju:function(t) {return this.Yu(t, this.on_dblclick, 'ItemDblClick');},
		Nu:function(t) {this.Yu(t, this.on_context, 'BeforeContextMenu', 'AfterContextMenu');},
		Wu:function(t) {
			this.$destructed || (document.createEventObject && (t=document.createEventObject(event)), this.Uu && window.clearTimeout(this.Uu), this.callEvent('onMouseMoving', [t]), this.Uu=k(function(t) {'mousemove'==t.type?this.qu(t):this.Gu(t);}, this, [t], this.P.mouseEventDelay || 500));
		},
		qu:function(t) {this.Yu(t, this.on_mouse_move, 'MouseMove') || this.Gu(t);},
		Gu:function(t) {this.callEvent('onMouseOut', [t || event]);},
		Yu:function(t, i, e, s) {
			if(!(t=t || event).processed && this.Vt) {
				t.processed= !0;
				var n=t.target;
				if(q.isIE8) {
					var h=this.P.id, r=n.w_view;
					if(r) {
						if(r!==h) return;
					} else n.w_view=h;
				}
				for(var o='', a=null, u=!1; n && n.parentNode && this.Vt && n!=this.Vt.parentNode;) {
					if(!u && n.getAttribute && (a=n.getAttribute(this.Ko))) {
						if(n.getAttribute('webix_disabled')) return void (this.Ru=null);
						if(this.Ru=a, this.callEvent) {
							if(!this.callEvent('on'+e, [a, t, n])) return;
							s && this.callEvent('on'+s, [a, t, n]);
						}
						u= !0;
					}
					if(o=Ct(n)) {
						o=o.toString().split(' ');
						for(var c=0; c<o.length; c++) {
							if(i[o[c]]) if(!1===v(i[o[c]], this.$scope).call(this, t, a || _t(t, this.Ko), n)) return u;
						}
					}
					n=n.parentNode;
				}
				return u;
			}
		}
	}, Be={
		$init:function() {this.$ready.push(function() {this.attachEvent('onKeyPress', this.Se);});},
		Xu:function(t, i) {
			if(37===t || 39===t) {
				gt(i), this.Ju(37===t?-1:1);
				var e=this.Ku.querySelector('[tabindex=\'0\']');
				e && e.focus();
			}
		},
		Zu:function() {
			dt(this.Ku), this.Ku=ft('DIV', {
				'class':'webix_nav_panel webix_nav_panel_'+this.P.navigation.type,
				role:'tablist'
			}, ''), this.Vt.appendChild(this.Ku), this.Qu(), this.tc(), this.ic();
		},
		ic:function() {
			var i=[];
			this.Ku && (i[0]=Zt(this.Ku, 'click', S(function(t) {
				for(var i=t.target, e=!1; i!=this.Ku && !e;) {
					var s=i.getAttribute(this.ec);
					s && (e= !0, this.sc(s)), i=i.parentNode;
				}
			}, this))), this.nc && (i[1]=Zt(this.nc, 'click', S(function() {this.Ju(-1);}, this))), this.hc && (i[1]=Zt(this.hc, 'click', S(function() {this.Ju(1);}, this))), this.attachEvent('onDestruct', function() {
				for(var t=0; t<i.length; t++) this.detachEvent(i[t]);
				i=null;
			});
		},
		Ju:function(t) {
			if(this.hi) {
				var i=this.rc+t;
				(i>=this.hi.length || i<0) && (i=i<0?this.hi.length-1:0), this.setActiveIndex(i);
			}
		},
		sc:function(t) {this.hi && oi(t).show();},
		Qu:function() {
			var t, i;
			if((i=this.P.navigation).items) {
				this.ec=i.linkAttr || 'bind_id', this.Ku?this.oc():this.Zu();
				var e=this.hi?this.hi:this.data.order;
				if(1<e.length) for(var s=0; s<e.length; s++) {
					t=ft('DIV', {
						'class':'webix_nav_item webix_nav_'+(s==this.rc?'active':'inactive'),
						role:'tab',
						tabindex:s==this.rc?'0':'-1'
					});
					var n=this.hi?this.hi[s].P.id:e[s];
					n && t.setAttribute(this.ec, n), this.Ku.appendChild(t);
				}
			}
		},
		oc:function() {if(this.Ku) for(var t=this.Ku.childNodes, i=t.length-1; 0<=i; i--) dt(t[i]);},
		tc:function() {
			var t=this.P.navigation;
			t.buttons && (this.nc && dt(this.nc), this.nc && dt(this.hc), this.nc=ft('DIV', {'class':'webix_nav_button_'+t.type+' webix_nav_button_prev '}, '<div role="button" tabindex="0" aria-label="'+I.aria.prevTab+'" class="webix_nav_button_inner"></div>'), this.Vt.appendChild(this.nc), this.hc=ft('DIV', {'class':'webix_nav_button_'+t.type+' webix_nav_button_next '}, '<div role="button" tabindex="0" aria-label="'+I.aria.prevTab+'" class="webix_nav_button_inner"></div>'), this.Vt.appendChild(this.hc));
		}
	}, He={
		showOverlay:function(t) {this.ac?this.ac.innerHTML=t:(this.ac=ft('DIV', {'class':'webix_overlay'}, t || ''), vt(this.ac, this.Vt.firstChild, this.Vt), this.Vt.style.position='relative');},
		hideOverlay:function() {this.ac && (dt(this.ac), this.ac=null);}
	}, Re={
		pager_setter:function(s) {
			if('string'== typeof s) {
				var t=oi(s);
				if(!t) return this.$blockRender= !0, k(function() {
					var t=oi(s);
					this.P.pager=this.pager_setter(t);
					var i=t.P;
					i.count=this.data.uc(i.level), t.refresh(), this.$blockRender= !1, this.render();
				}, this), null;
				s=t;
			}
			return this.attachEvent('onBeforeRender', function n(t) {
				if(this.config.topSplit && (this.config.topSplit=0), s.config.autosize && this.getVisibleCount) {
					var i=this.getVisibleCount();
					isNaN(i)?(s.config.size=1, k(n, this, [!0])):i!=s.config.size && (s.config.size=i, s.refresh(), !0===t && this.refresh());
				}
				var e=this.P.pager;
				return -1!=e.page && (this.data.$min=this.cc(0, e.page*e.size), this.data.$max=this.cc(this.data.$min, e.size), this.data.$pagesize=this.data.$max-this.data.$min, !0);
			}), s.$view || (s.view='pager', s=si(s)), ((this.fc=s).$master=this).data.attachEvent('onStoreUpdated', function() {
				var t=s.P;
				t.count=this.uc(t.level), s.refresh();
			}), this.data.uc=this.uc, s.P;
		},
		uc:function(i) {
			if(i && 0!==i) {
				var e=0;
				return this.each(function(t) {t.$level==i && e++;}), e;
			}
			return this.count();
		},
		cc:function(t, i) {
			var e=this.P.pager;
			if(e.level && 0!==e.level) {
				var s=t, n=this.data.order.length;
				if(i) for(; s<n;) {
					if(this.data.order[s] && this.data.getItem(this.data.order[s]).$level==e.level) {
						if(0===i) break;
						i--;
					}
					s++;
				}
				return s;
			}
			return t+i;
		},
		setPage:function(t) {this.fc && this.fc.select(t);},
		getPage:function() {return this.fc.P.page;},
		getPager:function() {return this.fc;}
	}, Ee={
		$init:function() {
			var t=this;
			R(this.lc) && this.attachEvent && (this.attachEvent('onBeforeLoad', function() {return t.showProgress();}), this.attachEvent('onAfterLoad', function() {return t.hideProgress();}), this.lc=null);
		},
		showProgress:function(t) {
			var i;
			if(!this.lc) {
				var e='icon'==(t=H.extend({
					position:0,
					delay:2e3,
					type:'icon',
					icon:'wxi-sync',
					hide:!1
				}, t || {}, !0)).type?t.icon+' webix_spin':'';
				if(this.lc=ft('DIV', {
					'class':'webix_progress_'+t.type,
					role:'progressbar',
					'aria-valuemin':'0',
					'aria-valuemax':'100',
					tabindex:'0'
				}, '<div class=\'webix_progress_state '+e+'\'></div>'), this.setPosition || (this.Vt.style.position='relative'), vt(this.lc, this.Vt.firstChild, this.Vt), this.Vt.setAttribute('aria-busy', 'true'), (!Yi.$active || 'native'==this.Eo) && this.getScrollState) {
					var s=this.getScrollState();
					this.Vt.scrollWidth!=this.$width && (this.lc.style.left=s.x+'px'), this.Vt.scrollHeight!=this.$height && ('bottom'!=t.type?this.lc.style.top=s.y+'px':this.lc.style.top=s.y+this.$height-this.lc.offsetHeight+'px');
				}
				this.dc='icon'!=t.type;
			}
			if(t) {
				if(this.dc) {
					var n=t.position || 1;
					if(this.lc.style[q.transitionDuration]===undefined && t.delay) {
						var h=0, r=0, o=n/t.delay*30, a=this;
						this.vc && (window.clearInterval(this.vc), r=this.lc.firstChild.offsetWidth/this.lc.offsetWidth*100), this.vc=window.setInterval(function() {30*h==t.delay?window.clearInterval(a.vc):(a.lc && a.lc.firstChild && (a.lc.firstChild.style.width=r+h*o*n*100+'%'), h++);}, 30);
					} else t.delay && (i=this.Vt.firstChild.offsetWidth, this.lc.firstChild.style[q.transitionDuration]=t.delay+'ms'), this.lc.firstChild.style.width=100*n+'%';
				}
				return this._c && clearTimeout(this._c), t.hide && (this._c=k(this.hideProgress, this, [1], t.delay)), i;
			}
		},
		hideProgress:function(t) {
			this.lc && (t || !this.dc?(this.vc && window.clearInterval(this.vc), dt(this.lc), this.lc=null, this.Vt.removeAttribute('aria-busy')):this.showProgress({
				position:1.1,
				delay:300,
				hide:!0
			}));
		}
	}, Pe={
		$init:function() {this.data, this.Li=document.createElement('DIV'), this.data.attachEvent('onIdChange', S(this.Hr, this)), this.attachEvent('onItemClick', this.pc), this.types || (this.types={'default':this.type}, this.type.name='default'), this.type=l(this.type);},
		customize:function(t) {ti(this, t);},
		item_setter:function(t) {return this.type_setter(t);},
		type_setter:function(t) {return this.types[t]?(this.type=l(this.types[t]), this.type.css && (this.Oi.className+=' '+this.type.css)):this.customize(t), this.type.on_click && H.extend(this.on_click, this.type.on_click), t;},
		template_setter:function(t) {this.type.template=Yt(t);},
		Q:function(t) {
			var i=this.data.kr[t.id];
			return !t.$template || this.type['template'+t.$template], t.$template, this.callEvent('onItemRender', [t]), this.type.templateStart(t, this.type, i)+(t.$template?this.type['template'+t.$template]:this.type.template)(t, this.type, i)+this.type.templateEnd(t, this.type, i);
		},
		mc:function(t) {return this.Li.innerHTML=this.Q(t), this.Li.firstChild;},
		Hr:function(t, i) {
			var e=this.getItemNode(t);
			e && (e.setAttribute(this.Ko, i), this.ji[i]=this.ji[t], delete this.ji[t]);
		},
		pc:function() {
			if(this.P.click) {
				var t=v(this.P.click, this.$scope);
				t && t.call && t.apply(this, arguments);
			}
		},
		getItemNode:function(t) {
			if(this.ji) return this.ji[t];
			this.ji={};
			for(var i=this.tt.childNodes, e=0; e<i.length; e++) {
				var s=i[e].getAttribute(this.Ko);
				s && (this.ji[s]=i[e]);
			}
			return this.getItemNode(t);
		},
		locate:function(t) {return _t(t, this.Ko);},
		showItem:function(t) {
			var i=this.getItemNode(t);
			if(i && this.scrollTo) {
				var e=i.offsetLeft, s=e+i.offsetWidth, n=i.offsetTop, h=n+i.offsetHeight, r=this.getScrollState(), o=r.x;
				(e<o || o+this.me<s) && (o=e);
				var a=r.y;
				(n<a || a+this.ge<h) && (a=n), this.scrollTo(o, a), this.bc && this.bc(t);
			}
		},
		render:function(t, i, e) {
			if(this.isVisible(this.P.id) && !this.$blockRender) if(t) {
				var s=this.getItemNode(t);
				switch(e) {
				case'paint':
				case'update':
					if(!s) return;
					vt(this.ji[t]=this.mc(i), s), dt(s);
					break;
				case'delete':
					if(!s) return;
					dt(s), delete this.ji[t];
					break;
				case'add':
					vt(this.ji[t]=this.mc(i), this.getItemNode(this.data.getNextId(t)), this.tt);
					break;
				case'move':
					vt(this.getItemNode(t), this.getItemNode(this.data.getNextId(t)), this.tt);
				}
			} else this.callEvent('onBeforeRender', [this.data]) && ((this.gc || this.tt).innerHTML=this.data.getRange().map(this.Q, this).join(''), this.ji=null, this.callEvent('onAfterRender', []));
		}
	}, je={
		$init:function(t) {
			if(t && !t.scroll && this.wc) return this.tt=this.tt || this.Oi;
			(this.tt || this.Oi).appendChild(ft('DIV', {'class':'webix_scroll_cont'}, '')), this.tt=(this.tt || this.Oi).firstChild, !this.callEvent || q.touch && 'native'!=this.Eo || Kt(this.Vt, 'scroll', function() {k(function() {this.callEvent('onAfterScroll', []);}, this);}, {bind:this});
		},
		Eo:'native',
		scroll_setter:function(t) {
			if(!t) return !1;
			var i='auto'===t, e='x'==t?'x':'xy'==t?'xy':i?'xy':'y';
			if(q.$customScroll) re.enable(this, e); else {
				var s=this.tt.parentNode.style;
				i?s.overflowX=s.overflowY='auto':(-1!=e.indexOf('x') && (this.we= !0, s.overflowX='scroll'), -1!=e.indexOf('y') && (this.be= !0, s.overflowY='scroll'));
			}
			return e;
		},
		xc:function(t, i) {
			if(!!this.P.scroll!= !!t) {
				if(!q.$customScroll) this.tt.parentNode.style['x'===i?'overflowX':'overflowY']=t?'auto':'hidden';
				'x'===i?this.we=t:this.be=t, this.P.scroll=!!t && i;
			}
		},
		getScrollState:function() {
			return {
				x:this.tt.parentNode.scrollLeft,
				y:this.tt.parentNode.scrollTop
			};
		},
		scrollTo:function(t, i) {this.tt.parentNode.scrollLeft=t, this.tt.parentNode.scrollTop=i;}
	}, Ne={
		$init:function() {this.Qn=b(), this.data, this.data.attachEvent('onStoreUpdated', S(this.yc, this)), this.data.attachEvent('onStoreLoad', S(this.Mc, this)), this.data.attachEvent('onAfterFilter', S(this.Sc, this)), this.data.attachEvent('onSyncApply', S(this.kc, this)), this.data.attachEvent('onIdChange', S(this.Cc, this)), this.$ready.push(this.Dc);},
		Dc:function() {('multiselect'==this.P.select || this.P.multiselect || 'area'==this.P.select) && Kt(this.$view, 'mousedown', function(t) {(t || window.event).shiftKey && yt(ii.Mt=this, 'webix_noselect', 1);});},
		Cc:function(t, i) {for(var e=this.Qn.length-1; 0<=e; e--) this.Qn[e]==t && (this.Qn[e]=i);},
		Sc:function() {
			for(var t=this.Qn.length-1; 0<=t; t--) if(this.data.getIndexById(this.Qn[t])<0) {
				var i=this.Qn[t];
				this.removeCss(i, 'webix_selected', !0), this.Qn.splice(t, 1), this.callEvent('onSelectChange', [i]);
			}
		},
		yc:function(t, i, e) {'delete'==e?this.loadBranch?this.kc():this.Qn.remove(t):t || this.data.count() || this.data.Cr || this.data.Lr || (this.Qn=b());},
		Mc:function() {this.P.select && this.data.each(function(t) {t && t.$selected && this.select(t.id);}, this);},
		kc:function() {for(var t=this.Qn.length-1; 0<=t; t--) this.exists(this.Qn[t]) || this.Qn.splice(t, 1);},
		Ic:function(t, i, e, s) {
			var n=i?'onBeforeSelect':'onBeforeUnSelect';
			if(!this.callEvent(n, [t, i])) return !1;
			s && (this.Ac= !0, this.unselectAll(), this.Ac= !1), i?this.addCss(t, 'webix_selected', !0):this.removeCss(t, 'webix_selected', !0), e?e.push(t):(i?this.Qn.push(t):this.Qn.remove(t), this.Tc(t));
			var h=i?'onAfterSelect':'onAfterUnSelect';
			return this.callEvent(h, [t]), !0;
		},
		select:function(t, i) {
			var e=arguments[2], s=arguments[3];
			if(!t) return this.selectAll();
			if($(t)) for(var n=0; n<t.length; n++) this.select(t[n], n?1:i, e, s); else {
				if(this.data.exists(t), s && this.Qn.length) return this.selectAll(this.Qn[this.Qn.length-1], t);
				var h=!1;
				e || i || 1==this.Qn.length && this.Qn[0]==t || (h= !0), h || !this.isSelected(t)?this.Ic(t, !0, null, h):e && this.unselect(t);
			}
		},
		unselect:function(t) {
			if(!t) return this.unselectAll();
			this.isSelected(t) && this.Ic(t, !1);
		},
		selectAll:function(t, i) {
			var e=[];
			(t || i?this.data.getRange(t || null, i || null):this.data.getRange()).each(function(t) {this.data.getMark(t.id, 'webix_selected') || (this.Qn.push(t.id), this.Ic(t.id, !0, e));}, this), this.Tc(e);
		},
		unselectAll:function() {
			var i=[];
			this.Qn.each(function(t) {this.Ic(t, !1, i);}, this), this.Qn=b(), this.Tc(i);
		},
		isSelected:function(t) {return -1!=this.Qn.find(t);},
		getSelectedId:function(t) {
			switch(this.Qn.length) {
			case 0:
				return t?[]:'';
			case 1:
				return t?[this.Qn[0]]:this.Qn[0];
			default:
				return [].concat(this.Qn);
			}
		},
		getSelectedItem:function(t) {
			var i=this.getSelectedId(!0);
			if(1<i.length || t) {
				for(var e=i.length-1; 0<=e; e--) i[e]=this.getItem(i[e]);
				return i;
			}
			if(i.length) return this.getItem(i[0]);
		},
		Fc:function(t) {return 100<t.length || t.length>this.data.count/2;},
		Tc:function(t) {
			if('object'!=M(t) && (t=[t]), t.length) {
				if(this.Fc(t)) this.data.refresh(); else for(var i=0; i<t.length; i++) this.render(t[i], this.data.getItem(t[i]), 'update');
				this.Ac || this.callEvent('onSelectChange', [t]);
			}
		}
	};
	pi(function() {Zt(document.body, 'mouseup', function() {ii.Mt && (Mt(ii.Mt, 'webix_noselect'), ii.Mt=null);});});
	var Le={
		Vc:['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
		toHex:function(t, i) {
			t=parseInt(t, 10);
			for(var e=''; 0<t;) e=this.Vc[t%16]+e, t=Math.floor(t/16);
			for(; e.length<i;) e='0'+e;
			return e;
		},
		rgbToHex:function(t) {
			var i=[];
			return 'string'== typeof t?t.replace(/[\d+.]+/g, function(t) {i.push(parseFloat(t));}):$(t) && (i=t), 0===i[3]?'':i.slice(0, 3).map(function(t) {return Le.toHex(Math.floor(t), 2);}).join('');
		},
		hexToDec:function(t) {return parseInt(t, 16);},
		toRgb:function(t) {
			var i, e, s, n;
			return s='string'!= typeof t?(i=t[0], e=t[1], t[2]):-1!=t.indexOf('rgb')?(i=(n=t.substr(t.indexOf('(')+1, t.lastIndexOf(')')-t.indexOf('(')-1).split(','))[0], e=n[1], n[2]):('#'==t.substr(0, 1) && (t=t.substr(1)), i=this.hexToDec(t.substr(0, 2)), e=this.hexToDec(t.substr(2, 2)), this.hexToDec(t.substr(4, 2))), ((i=parseInt(i, 10) || 0)<0 || 255<i) && (i=0), ((e=parseInt(e, 10) || 0)<0 || 255<e) && (e=0), ((s=parseInt(s, 10) || 0)<0 || 255<s) && (s=0), [i, e, s];
		},
		hsvToRgb:function(t, i, e) {
			var s, n, h, r, o, a, u, c;
			switch(h=e*(1-i), r=e*(1-(n=t/60-(s=Math.floor(t/60)%6))*i), o=e*(1-(1-n)*i), c=u=a=0, s) {
			case 0:
				a=e, u=o, c=h;
				break;
			case 1:
				a=r, u=e, c=h;
				break;
			case 2:
				a=h, u=e, c=o;
				break;
			case 3:
				a=h, u=r, c=e;
				break;
			case 4:
				a=o, u=h, c=e;
				break;
			case 5:
				a=e, u=h, c=r;
			}
			return [a=Math.floor(255*a), u=Math.floor(255*u), c=Math.floor(255*c)];
		},
		rgbToHsv:function(t, i, e) {
			var s, n, h, r, o, a, u;
			return s=t/255, n=i/255, h=e/255, r=Math.min(s, n, h), a=0, (u=o=Math.max(s, n, h))==r?a=0:o==s && h<=n?a=60*(n-h)/(o-r)+0:o==s && n<h?a=60*(n-h)/(o-r)+360:o==n?a=60*(h-s)/(o-r)+120:o==h && (a=60*(s-n)/(o-r)+240), [a, 0===o?0:1-r/o, u];
		}
	};

	function Oe(t) {
		var i=' ';
		if(t) for(var e in t) i+=e+'="'+t[e]+'" ';
		return i;
	}

	var We={
		draw:function(t, i, e, s) {
			return '<svg '+Oe({
				xmlns:'http://www.w3.org/2000/svg',
				version:'1.1',
				height:'100%',
				width:'100%',
				viewBox:'0 0 '+i+' '+e,
				'class':s || ''
			})+'>'+t+'</svg>';
		},
		styleMap:{
			lineColor:'stroke',
			color:'fill'
		},
		group:function(t) {return '<g>'+t+'</g>';}
	};
	We.zc={
		M:function(t) {return ' M '+t.x+' '+t.y;},
		L:function(t) {return ' L '+t.x+' '+t.y;},
		C:function(t, i, e) {return ' C '+t.x+' '+t.y+' '+i.x+' '+i.y+' '+e.x+' '+e.y;},
		A:function(t, i, e, s) {
			var n=t.x+Math.cos(s)*i, h=t.y+Math.sin(s)*i;
			return ' A '+i+' '+i+' 0 '+(s-e>=Math.PI?1:0)+' 1 '+n+' '+h;
		}
	}, We.definePath=function(t, i) {
		for(var e='', s=0; s<t.length; s++) {
			t[s][0] && t[s][0];
			var n=t[s][0].toUpperCase();
			this.zc[n], e+=this.zc[n].apply(this, t[s].slice(1));
		}
		return i && (e+=' Z'), e;
	}, We.Bc=function(t) {
		for(var i=[], e=0; e<t.length; e++) i.push([e?'L':'M', t[e]]);
		return i;
	}, We.setOpacity=function(t, i) {
		var e=Le.toRgb(t);
		return e.push(i), 'rgba('+e.join(',')+')';
	}, We.Hc=function(t) {
		for(var i=[], e=0; e<t.length; e++) {
			var s=t[e];
			e || i.push(['M', s[0]]), i.push(['C', s[1], s[2], s[3]]);
		}
		return i;
	}, We.getPath=function(t, i, e) {return '<path class="'+i+'" vector-effect="non-scaling-stroke" d="'+t+'" '+(e=Oe(e))+'/>';}, We.getSector=function(t, i, e, s, n, h) {
		h=Oe(h);
		var r=[['M', t], ['L', {
			x:t.x+Math.cos(e)*i,
			y:t.y+Math.sin(e)*i
		}], ['A', t, i, e, s], ['L', t]];
		return '<path class="'+n+'" vector-effect="non-scaling-stroke" d="'+We.definePath(r, !0)+'" '+h+'/>';
	}, We.getCurve=function(t, i, e) {return e=Oe(e), '<path fill="none" class="'+i+'" vector-effect="non-scaling-stroke" d="'+this.definePath(this.Hc(t))+'" '+e+'/>';}, We.getLine=function(t, i, e, s) {return this.getPath(this.definePath(this.Bc([t, i]), !0), e, s);}, We.getCircle=function(t, i, e, s) {return s=Oe(s), '<circle class="'+e+'" cx="'+t.x+'" cy="'+t.y+'" r="'+i+'" '+s+'/>';}, We.getRect=function(t, i, e, s, n, h) {
		return '<rect class="'+n+'" rx="0" ry="0" x="'+t+'" y="'+i+'" width="'+e+'" height="'+s+'" '+(h=Oe(h))+'/>';
	};
	var Ue={
		paddingX:6,
		paddingY:6,
		radius:2,
		minHeight:4,
		eventRadius:8
	};

	function Ye(t) {this.config=H.extend(_(Ue), t || {}, !0);}

	Ye.prototype.draw=function(t, i, e) {
		var s=this.getPoints(t, i, e), n=this.config, h=We, r=n.color?this.Rc(h, n.color):null, o=h.definePath(this.Ec(s)), a=h.group(h.getPath(o, 'webix_sparklines_line'+(r?' '+r.line:'')));
		a+=this.Pc(h, s, n.radius, 'webix_sparklines_item'+(r?' '+r.item:''));
		var u=Math.min(t.length?(i-2*(n.paddingX || 0))/t.length:0, n.eventRadius);
		return a+=this.jc(h, s, u), h.draw(a, i, e, 'webix_sparklines_line_chart'+(n.css?' '+n.css:''));
	}, Ye.prototype.Rc=function(t, i) {
		var e={
			line:{},
			item:{}
		}, s=t.styleMap;
		if(i) for(var n in e.line[s.lineColor]=i, e.item[s.color]=i, e) e[n]=at(e[n]);
		return e;
	}, Ye.prototype.Pc=function(t, i, e, s, n) {
		for(var h=[], r=0; r<i.length; r++) h.push(t.getCircle(i[r], e, s, n));
		return t.group(h.join(''));
	}, Ye.prototype.jc=function(t, i, e) {
		for(var s=[], n=0; n<i.length; n++) s.push(t.getCircle(i[n], e, 'webix_sparklines_event_area', {webix_area:n}));
		return t.group(s.join(''));
	}, Ye.prototype.Ec=function(t) {
		var i, e, s=[];
		for(i=0; i<t.length; i++) e=i?'L':'M', s.push([e, t[i]]);
		return s;
	}, Ye.prototype.getPoints=function(t, i, e) {
		var s=this.config, n=Math.min.apply(null, t);
		'undefined'!= typeof s.origin && (n=Math.min(s.origin, n));
		var h=Math.max.apply(null, t), r=[], o=s.paddingX || 0, a=s.paddingY || 0;
		i=(i || 100)-2*o;
		var u=s.minHeight || 0;
		if(e=(e || 100)-2*a, t.length) if(1==t.length) r.push({
			x:i/2+o,
			y:e/2+o
		}); else {
			var c=i/(t.length-1), f=s.scale || h-n, l=(e-u)/(f || 1);
			f || (e/=2);
			for(var d=0; d<t.length; d++) r.push({
				x:Math.ceil(c*d)+o,
				y:e-Math.ceil(l*(t[d]-n))+a-u
			});
		}
		return r;
	};
	var qe={
		paddingX:3,
		paddingY:4,
		radius:1,
		minHeight:4,
		eventRadius:8
	};

	function Ge(t) {this.config=H.extend(_(qe), t || {}, !0);}

	Ge.prototype.draw=function(t, i, e) {
		var s, n, h, r, o, a=this.config, u=Ye.prototype, c=We;
		return r=this.getPoints(t, i, e), h=c.definePath(u.Ec(r), !0), a.color && (o=this.Rc(c, a.color)), n=c.group(c.getPath(h, 'webix_sparklines_area'+(o?' '+o.area:''))), r.splice(r.length-3, 3), h=c.definePath(u.Ec(r)), n+=c.group(c.getPath(h, 'webix_sparklines_line'+(o?' '+o.line:''))), n+=u.Pc(c, r, a.radius, 'webix_sparklines_item'+(o?' '+o.item:'')), s=Math.min(t.length?(i-2*(a.paddingX || 0))/t.length:0, a.eventRadius), n+=u.jc(c, r, s), c.draw(n, i, e, 'webix_sparklines_area_chart'+(a.css?' '+a.css:''));
	}, Ge.prototype.Rc=function(t, i) {
		var e={
			area:{},
			line:{},
			item:{}
		}, s=t.styleMap;
		if(i) for(var n in e.area[s.color]=t.setOpacity(i, .2), e.line[s.lineColor]=i, e.item[s.color]=i, e) e[n]=at(e[n]);
		return e;
	}, Ge.prototype.getPoints=function(t, i, e) {
		var s=Ye.prototype.getPoints.call(this, t, i, e), n=this.config.paddingX || 0, h=this.config.paddingY || 0;
		return s.push({
			x:i-n,
			y:e-h
		}, {
			x:n,
			y:e-h
		}, {
			x:n,
			y:s[0].y
		}), s;
	};
	var Xe={
		paddingX:3,
		paddingY:4,
		width:20,
		margin:4,
		minHeight:4,
		eventRadius:8,
		origin:0,
		itemCss:function(t) {return t<(this.config.origin || 0)?' webix_sparklines_bar_negative':'';}
	};

	function Je(t) {this.config=H.extend(_(Xe), t || {}, !0);}

	Je.prototype.draw=function(t, i, e) {
		var s, n, h, r, o, a=this.config, u='', c=[], f=this.getPoints(t, i, e), l=We;
		for(s=0; s<f.length; s++) n='function'== typeof a.itemCss?a.itemCss.call(this, t[s]):a.itemCss || '', a.negativeColor && t[s]<a.origin?n+=' '+this.Rc(l, a.negativeColor):a.color && (n+=' '+this.Rc(l, a.color)), h=f[s], c.push(l.getRect(h.x, h.y, h.width, h.height, 'webix_sparklines_bar '+n));
		u+=l.group(c.join('')), r=parseInt(this.Nc(t, i, e), 10)+.5, o=a.paddingX || 0, u+=l.group(l.getLine({
			x:o,
			y:r
		}, {
			x:i-o,
			y:r
		}, 'webix_sparklines_origin'));
		var d=this.Lc(t, i, e), v=[];
		for(s=0; s<d.length; s++) h=d[s], v.push(l.getRect(h.x, h.y, h.width, h.height, 'webix_sparklines_event_area ', {webix_area:s}));
		return u+=l.group(v.join('')), l.draw(u, i, e, 'webix_sparklines_bar_chart'+(a.css?' '+a.css:''));
	}, Je.prototype.Rc=function(t, i) {
		var e={}, s=t.styleMap;
		return i && (e[s.color]=i), at(e);
	}, Je.prototype.Nc=function(t, i, e) {
		var s=this.config, n=s.paddingY || 0, h=n+(e=(e || 100)-2*n);
		if(!1!==s.origin) {
			var r=Math.min.apply(null, t), o=Math.max.apply(null, t), a=s.origin || -1e-6;
			if(o<=a) h=n; else if(r<a) {
				h-=e/(o-r)*(a-r);
			}
		}
		return h;
	}, Je.prototype.Lc=function(t, i, e) {
		var s=[], n=this.config.paddingX || 0, h=this.config.paddingY || 0;
		if(i=(i || 100)-2*n, e=(e || 100)-2*h, t.length) for(var r=i/t.length, o=0; o<t.length; o++) s.push({
			x:Math.ceil(r*o)+n,
			y:h,
			height:e,
			width:r
		});
		return s;
	}, Je.prototype.getPoints=function(t, i, e) {
		var s=this.config, n=Math.min.apply(null, t);
		s.origin<n && (n=s.origin);
		var h=Math.max.apply(null, t), r=[], o=s.paddingX, a=s.paddingY, u=s.margin, c=s.width || 20, f=this.Nc(t, i, e);
		if(i=(i || 100)-2*o, e=(e || 100)-2*a, t.length) {
			var l=i/t.length, d=s.scale || h-n;
			u=l-(c=Math.min(l-u, c));
			var v=0, _=n;
			!1!==s.origin && s.origin>n?_=s.origin || 0:v=s.minHeight;
			for(var p=(e-v)/(d || 1), m=0; m<t.length; m++) {
				var b=Math.ceil(p*(t[m]-_));
				r.push({
					x:Math.ceil(l*m)+o+u/2,
					y:f-(t[m]>=_?b:0)-v,
					height:Math.abs(b)+v,
					width:c
				});
			}
		}
		return r;
	};
	var Ke={paddingY:2};

	function Ze(t) {this.config=H.extend(Ke, t || {}, !0);}

	Ze.prototype.Oc=0, Ze.prototype.Wc=['#F55B50', '#FF6D3F', '#FFA521', '#FFC927', '#FFEE54', '#D3E153', '#9ACB61', '#63B967', '#21A497', '#21C5DA', '#3EA4F5', '#5868BF', '#7B53C0', '#A943BA', '#EC3B77', '#9EB0B8'], Ze.prototype.Uc=function(t, i) {
		var e=i.length, s=this.Wc.length;
		return e<s?(t && (t=t<s-e?this.Oc+2:this.Oc+1), this.Oc=t):t%=s, this.Wc[t];
	}, Ze.prototype.draw=function(t, i, e) {
		var s, n, h, r, o=this.config, a=o.color || this.Uc, u=this.getAngles(t), c=We, f=e/2-(o.paddingY || 0), l=i/2, d=e/2;
		for('function'!= typeof a && (a=function() {return a;}), r='', h=0; h<u.length; h++) (s={})[c.styleMap.color]=a.call(this, h, t, this.Yc), r+=c.getSector({
			x:l,
			y:d
		}, f, u[h][0], u[h][1], 'webix_sparklines_sector', s);
		for(n=c.group(r), r='', h=0; h<u.length; h++) r+=c.getSector({
			x:l,
			y:d
		}, f, u[h][0], u[h][1], 'webix_sparklines_event_area', {webix_area:h});
		return n+=c.group(r), c.draw(n, i, e, 'webix_sparklines_pie_chart'+(o.css?' '+o.css:''));
	}, Ze.prototype.getAngles=function(t) {
		var i, e, s=-Math.PI/2, n=[], h=this.qc(t);
		for(e=0; e<t.length; e++) i=-Math.PI/2+h[e]-1e-4, n.push([s, i]), s=i;
		return n;
	}, Ze.prototype.Gc=function(t) {
		for(var i=0, e=0; e<t.length; e++) i+=1*t[e];
		return i;
	}, Ze.prototype.qc=function(t) {
		var i, e, s=[], n=0, h=this.Gc(t);
		for(i=0; i<t.length; i++) e=1*t[i], s[i]=2*Math.PI*(h?(e+n)/h:1/t.length), n+=e;
		return s;
	};
	var Qe={
		paddingX:3,
		paddingY:6,
		radius:2,
		minHeight:4,
		eventRadius:8
	};

	function ts(t) {this.config=H.extend(_(Qe), t || {}, !0);}

	ts.prototype.draw=function(t, i, e) {
		var s=this.config, n='', h=Ye.prototype, r=this.getPoints(t, i, e), o=We, a=s.color?this.Rc(o, s.color):null;
		n+=o.group(o.getCurve(r, 'webix_sparklines_line'+(a?' '+a.line:'')));
		var u=h.getPoints.call(this, t, i, e);
		n+=h.Pc(o, u, s.radius, 'webix_sparklines_item'+(a?' '+a.item:''));
		var c=Math.min(t.length?(i-2*(s.paddingX || 0))/t.length:0, s.eventRadius);
		return n+=h.jc(o, u, c), o.draw(n, i, e, 'webix_sparklines_line_chart'+(s.css?' '+s.css:''));
	}, ts.prototype.Rc=function(t, i) {
		var e={
			line:{},
			item:{}
		}, s=t.styleMap;
		if(i) for(var n in e.line[s.lineColor]=i, e.item[s.color]=i, e) e[n]=at(e[n]);
		return e;
	}, ts.prototype.getPoints=function(t, i, e) {
		var s, n, h, r, o=[], a=[], u=[];
		for(n=Ye.prototype.getPoints.call(this, t, i, e), s=0; s<n.length; s++) a.push(n[s].x), u.push(n[s].y);
		for(h=this.Xc(a), r=this.Xc(u), s=0; s<n.length-1; s++) o.push([n[s], {
			x:h[0][s],
			y:r[0][s]
		}, {
			x:h[1][s],
			y:r[1][s]
		}, n[s+1]]);
		return o;
	}, ts.prototype.Xc=function(t) {
		var i, e, s=[], n=[], h=[], r=[], o=[], a=[], u=t.length-1;
		for(n[s[0]=0]=2, h[0]=1, r[0]=t[0]+2*t[1], i=1; i<u-1; i++) s[i]=1, n[i]=4, h[i]=1, r[i]=4*t[i]+2*t[i+1];
		for(s[u-1]=2, n[u-1]=7, h[u-1]=0, r[u-1]=8*t[u-1]+t[u], i=1; i<u; i++) e=s[i]/n[i-1], n[i]=n[i]-e*h[i-1], r[i]=r[i]-e*r[i-1];
		for(o[u-1]=r[u-1]/n[u-1], i=u-2; 0<=i; --i) o[i]=(r[i]-h[i]*o[i+1])/n[i];
		for(i=0; i<u-1; i++) a[i]=2*t[i+1]-o[i+1];
		return a[u-1]=.5*(t[u]+o[u-1]), [o, a];
	};
	var is={
		paddingX:3,
		paddingY:6,
		radius:1,
		minHeight:4,
		eventRadius:8
	};

	function es(t) {this.config=H.extend(_(is), t || {}, !0);}

	function ss() {}

	(es.prototype=_(ts.prototype)).draw=function(t, i, e) {
		var s=this.config, n=Ye.prototype, h=We, r=s.color?this.Rc(h, s.color):null, o=this.getPoints(t, i, e), a=o.splice(o.length-3, 3), u=h.Bc(a);
		u[0][0]='L';
		var c=h.Hc(o).concat(u), f=h.group(h.getPath(h.definePath(c), 'webix_sparklines_area'+(r?' '+r.area:''), !0));
		f+=h.group(h.getPath(h.definePath(h.Hc(o)), 'webix_sparklines_line'+(r?' '+r.line:'')));
		var l=n.getPoints.call(this, t, i, e);
		f+=n.Pc(h, l, s.radius, 'webix_sparklines_item'+(r?' '+r.item:''));
		var d=Math.min(t.length?(i-2*(s.paddingX || 0))/t.length:0, s.eventRadius);
		return f+=n.jc(h, l, d), h.draw(f, i, e, 'webix_sparklines_splinearea_chart'+(s.css?' '+s.css:''));
	}, es.prototype.Rc=function(t, i) {
		var e={
			area:{},
			line:{},
			item:{}
		}, s=t.styleMap;
		if(i) for(var n in e.area[s.color]=t.setOpacity(i, .2), e.line[s.lineColor]=i, e.item[s.color]=i, e) e[n]=at(e[n]);
		return e;
	}, es.prototype.getPoints=function(t, i, e) {
		var s=ts.prototype.getPoints.call(this, t, i, e), n=this.config.paddingX || 0, h=this.config.paddingY || 0;
		return s.push({
			x:i-n,
			y:e-h
		}, {
			x:n,
			y:e-h
		}, {
			x:n,
			y:s[0][0].y
		}), s;
	}, ss.types={}, ss.getTemplate=function(t) {
		var i=t || {};
		'string'== typeof t && (i={type:t}), H.extend(i, {type:'line'});
		var e=this.types[i.type];
		return S(this.Jc, new e(i));
	}, ss.Jc=function(t, i, e, s) {
		return s?this.draw(function n(t) {
			for(var i=[], e=t.length-1; 0<=e; e--) {
				var s=t[e];
				i[e]='object'===M(s)?s.value:s;
			}
			return i;
		}(e), s.width, 33):this.draw(t.data || t, i.width, i.height);
	}, A('onDataTable', function(t) {t.type.sparklines=ss.getTemplate();}), ss.types.area=Ge, ss.types.bar=Je, ss.types.line=Ye, ss.types.pie=Ze, ss.types.spline=ts, ss.types.splineArea=es;
	var ns={
		escape:!0,
		delimiter:{
			rows:'\n',
			cols:'\t'
		},
		parse:function(t, i) {
			if(i=i || this.delimiter, !this.escape) return this.Kc(t, i);
			for(var e=t.replace(/\n$/, '').split(i.rows), s=0; s<e.length-1;) this.Zc(e[s], '"')%2==1 && (e[s]+=i.rows+e[s+1], delete e[s+1], s++), s++;
			var n=[];
			for(s=0; s<e.length; s++) if('undefined'!= typeof e[s]) {
				for(var h=e[s], r=0, o=[], a=!1, u=0; u<=h.length; u++) {
					if(!a && h[u]===i.cols || u===h.length) {
						var c=h.substr(r, u-r);
						c[0]===c[c.length-1] && '"'===c[0] && (c=c.substr(1, c.length-2).replace('""', '"')), o.push(c), r=u+1;
					}
					'"'!==h[u] || (a= !a);
				}
				n.push(o);
			}
			return n;
		},
		Kc:function(t, i) {
			for(var e=t.split(i.rows), s=0; s<e.length; s++) e[s]=e[s].split(i.cols);
			return e;
		},
		Zc:function(t, i) {return t.split(i).length-1;},
		stringify:function(t, i) {
			if(i=i || this.delimiter, !this.escape) {
				for(var e=0; e<t.length; e++) t[e]=t[e].join(i.cols);
				return t.join(i.rows);
			}
			for(var s=/\n|"|;|,/, n=0; n<t.length; n++) {
				for(var h=0; h<t[n].length; h++) {
					var r=t[n][h];
					r instanceof Date?t[n][h]=I.parseFormatStr(r):s.test(r) && (t[n][h]='"'+r.toString().replace(/"/g, '""')+'"');
				}
				t[n]=t[n].join(i.cols);
			}
			return t=t.join(i.rows);
		}
	}, hs={
		clipboard_setter:function(t) {return q.touch || (!0!==t && 1!==t || (t='block'), se.init(), this.attachEvent('onSelectChange', this.Qc), this.attachEvent('onItemClick', function() {document.activeElement && this.$view.contains(document.activeElement) && (se.focus(), Mi.setFocus(this));}), this.attachEvent('onPaste', this.tf)), t;},
		templateCopy_setter:Yt,
		Qc:function() {
			if(!this.getEditor || !this.getEditor()) {
				var t=this['if']();
				se.set(t), Mi.setFocus(this);
			}
		},
		'if':function() {
			var h=[], r=this.P.templateCopy;
			return this.mapSelection(function(t, i, e, s) {
				h[s] || (h[s]=[]);
				var n=r?r(t, i, e):t;
				return h[s].push(n), t;
			}), 1===h.length && 1===h[0].length?h[0][0]:ns.stringify(h, this.P.delimiter);
		},
		tf:function(t) {
			if(!R(this.Kn[this.P.clipboard])) {
				var i=ns.parse(t, this.P.delimiter);
				this.Kn[this.P.clipboard].call(this, i);
			}
		},
		Kn:{
			block:function(h) {
				var t=this.mapSelection(null);
				t && (this.mapCells(t.row, t.column, h.length, null, function(t, i, e, s, n) {return h[s] && h[s].length>n?h[s][n]:t;}), this.render());
			},
			selection:function(h) {this.mapSelection(function(t, i, e, s, n) {return h[s] && h[s].length>n?h[s][n]:t;}), this.render();},
			repeat:function(h) {this.mapSelection(function(t, i, e, s, n) {return (i=h[s%h.length])[n%i.length];}), this.render();},
			custom:function() {}
		}
	}, rs={
		open:function(t, i) {
			if(t) {
				var e=this.getItem(t);
				e.$count && !e.open && (this.callEvent('onBeforeOpen', [t]) && (e.open= !0, this.data.callEvent('onStoreUpdated', [t, 0, 'branch']), this.callEvent('onAfterOpen', [t])), i && '0'!=t && this.open(this.getParentId(t), i));
			}
		},
		close:function(t) {
			if(t) {
				var i=this.getItem(t);
				i.open && this.callEvent('onBeforeClose', [t]) && (i.open= !1, this.data.callEvent('onStoreUpdated', [t, 0, 'branch']), this.callEvent('onAfterClose', [t]));
			}
		},
		openAll:function(t) {this.data.eachSubItem(t || 0, function(t, i) {i && (t.open= !0);}), this.data.refresh();},
		closeAll:function(t) {this.data.eachSubItem(t || 0, function(t, i) {i && (t.open= !1);}), this.data.refresh();},
		ef:function(t, i, e) {
			if(this.P.threeState) return this.sf(t, null!==i?i:'');
			var s, n=this.getItem(t), h=e?e.target:null;s=h && 'checkbox'==h.type?!!h.checked:null!==i?i:!n.checked, n.checked=s, this.callEvent('onItemCheck', [t, n.checked, e]);
		},
		isBranchOpen:function(t) {
			if('0'==t) return !0;
			var i=this.getItem(t);
			return !!i.open && this.isBranchOpen(i.$parent);
		},
		getOpenItems:function() {
			var t=[];
			for(var i in this.data.branch) this.exists(i) && this.getItem(i).open && t.push(i);
			return t;
		},
		getState:function() {
			return {
				open:this.getOpenItems(),
				select:this.getSelectedId(!0)
			};
		},
		nf:function(t, i) {var e=this.data.attachEvent('onStoreLoad', function() {t.setState.call(t, i), t.data.detachEvent(e), t=null;});},
		setState:function(t) {
			if(t.open) {
				this.closeAll();
				for(var i=t.open, e=0; e<i.length; e++) {
					var s=this.getItem(i[e]);
					if(s && s.$count && (s.open= !0, -1==s.$count)) return this.nf(this, t), this.refresh(), 0;
				}
				this.refresh();
			}
			if(t.select && this.select) {
				var n=t.select;
				this.unselect();
				for(var h=0; h<n.length; h++) this.exists(n[h]) && this.select(n[h], !0);
			}
			return 1;
		}
	}, os={
		webix_tree_open:function(t, i) {return this.close(i), !1;},
		webix_tree_close:function(t, i) {return this.open(i), !1;},
		webix_tree_checkbox:function(t, i) {return this.ef(i, null, t), !1;}
	}, as={
		$init:function() {this.data.attachEvent('onStoreUpdated', S(this.hf, this), null, !0), this.lo=this.rf;},
		rf:function(t, i, e, s) {
			var n=0===i?{parent:encodeURIComponent(t)}:null;
			return _e.prototype.lo.call(this, t, i, e, s, n);
		},
		loadBranch:function(t, i, e) {return t=t || 0, this.data.url=e || this.data.url, this.callEvent('onDataRequest', [t, i, this.data.url]) && this.data.url?this.data.feed.call(this, t, 0, i, e):m.reject();},
		hf:function(t, i, e) {e && 'add'!=e && 'delete'!=e && 'branch'!=e || this.data.af(this);}
	}, us={
		$init:function() {this.data;},
		copy:function(t, i, e, s) {return (s=s || {}).copy= !0, this.move(t, i, e, s);},
		Jh:function(t, i, e) {
			if(i && t) {
				var s=this.getBranchIndex(t);
				return s+(e==this && this.getParentId(t)==this.getParentId(i) && e.getBranchIndex(i)<s?0:1);
			}
		},
		uf:function(t, i) {
			var e=this.data.branch[t];
			if(e && e.length) for(var s=0; s<e.length; s++) {
				if(e[s]==i) return !0;
				if(this.uf(e[s], i)) return !0;
			}
			return !1;
		},
		cf:function(t) {
			for(var i=0; i<t.length; i++) for(var e=t[i]; this.getParentId(e);) e=this.getParentId(e), -1==x.find.call(t, e) || (t.splice(i, 1), i--);
			return t;
		},
		move:function(t, i, e, s) {
			i=i || 0;
			var n=(s=s || {}).newId || t, h=s.parent || 0;
			if((e=e || this).data, e.data) {
				if(!$(t)) {
					if(this!=e || s.copy) {
						if(n=e.data.add(e.Xh(this.getItem(t), n), i, h || 0), this.data.branch[t] && e.getBranchIndex) {
							var r=this.data.lr;
							this.data.lr=function(t) {
								var i=_(t);
								return delete i.$parent, delete i.$level, delete i.$child, e.data.pull[i.id] && (i.id=V()), i;
							};
							var o={
								data:this.serialize(t, !0),
								parent:n
							};
							this.data.lr=r, e.parse(o);
						}
						s.copy || this.data.remove(t);
					} else {
						if(t==h || this.uf(t, h)) return;
						var a=this.getItem(t), u=this.data.branch[h];
						u || (u=this.data.branch[h]=[]);
						var c=this.data.branch[a.$parent], f=x.find.call(c, t);
						if(i<0 && (i=u.length), c===u && i===f) return n;
						if(x.removeAt.call(c, f), x.insertAt.call(u, t, Math.min(u.length, i)), c.length || delete this.data.branch[a.$parent], a.$parent && '0'!=a.$parent && this.getItem(a.$parent).$count--, h && '0'!=h) {
							var l=e.getItem(h);
							l.$count++, this.ff(a, l.$level+1);
						} else this.ff(a, 1);
						a.$parent=h, e.data.callEvent('onDataMove', [t, i, h, u[i+1]]);
					}
					return this.refresh(), n;
				}
				this.cf(t);
				for(var d=0; d<t.length; d++) {
					var v=this.move(t[d], i, e, s);
					i=e.Jh(v, t[d+1], this);
				}
			}
		},
		ff:function(t, i) {
			t.$level=i;
			var e=this.data.branch[t.id];
			if(e) for(var s=0; s<e.length; s++) this.ff(this.getItem(e[s]), i+1);
		},
		zo:function(t) {t && !t.header && this.exists(t) && this.Bo(t)!=Xi.qs.start && this.open(t);},
		$dropAllow:function(t) {
			if(t.from!=t.to) return !0;
			for(var i=0; i<t.source.length; i++) if(this.uf(t.source, t.target)) return !1;
			return !0;
		},
		Xh:function(t, i) {
			var e=ae.Xh.call(this, t, i);
			return delete e.open, e;
		}
	}, cs={
		$init:function() {this.render;},
		lf:function(t) {
			var i=this.data.kr[t.id];
			return this.callEvent('onItemRender', [t]), this.type.templateStart(t, this.type, i)+(t.$template?this.type['template'+t.$template](t, this.type, i):this.type.template(t, this.type, i))+this.type.templateEnd();
		},
		df:function(t) {return this.Li.innerHTML=this.lf(t), this.Li.firstChild;},
		Q:function(t) {
			!t.$template || this.type['template'+t.$template], t.$template;
			var i='<div role=\'presentation\' class=\'webix_tree_branch_'+t.$level+'\'>'+this.lf(t);
			return t.open && (i+=this.vf(t.id)), i+='</div>';
		},
		vf:function(t) {
			var i='', e=this.data.branch[t];
			if(e) {
				i+='<div role=\'presentation\' class=\'webix_tree_leaves\'>';
				for(var s=e.length-1, n=0; n<=s; n++) {
					var h=this.getItem(e[n]), r=this.type._f;
					0!==r && (r[h.$level]=n==s), i+=this.Q(h);
				}
				i+='</div>';
			}
			return i;
		},
		render:function(t, i, e) {
			if((cs.Ve=this).isVisible(this.P.id) && !this.$blockRender) {
				if(t) {
					var s, n, h=this.getItem(t);
					if('add'!=e && !(s=this.getItemNode(t))) return;
					switch(e) {
					case'branch':
						var r=s.parentNode;
						vt(n=this.mc(h), r), dt(r), this.ji=null;
						break;
					case'paint':
					case'update':
						vt(n=this.ji[t]=this.df(h), s), dt(s);
						break;
					case'delete':
						dt(s.parentNode);
						break;
					case'add':
						var o;
						if(0==h.$parent) o=this.tt.firstChild; else if(this.getItem(h.$parent).open && (o=this.getItemNode(h.$parent))) {
							if(!o.nextSibling) {
								var a=ft('DIV', {'class':'webix_tree_leaves'}, '');
								o.parentNode.appendChild(a);
							}
							o=o.nextSibling;
						}
						if(o) {
							var u=this.data.getNextSiblingId(t);
							(u=this.getItemNode(u)) && (u=u.parentNode), n=this.mc(h), this.ji[t]=n.firstChild, vt(n, u, o);
						}
						break;
					default:
						return !1;
					}
					this.callEvent('onPartialRender', [t, i, e]);
				} else this.callEvent('onBeforeRender', [this.data]) && (this.type._f=[], this.tt.innerHTML=this.vf(0), this.ji=null, this.callEvent('onAfterRender', []));
				return this.type._f=0, !(cs.Ve=null);
			}
		},
		getItemNode:function(t) {
			if(this.ji) return this.ji[t];
			this.ji={};
			for(var i=this.tt.getElementsByTagName('DIV'), e=0; e<i.length; e++) {
				var s=i[e].getAttribute(this.Ko);
				s && (this.ji[s]=i[e]);
			}
			return this.getItemNode(t);
		},
		pf:1
	}, fs={
		mf:function() {
			if(this.pf) {
				var s=this.render;
				this.render=function(t, i) {
					var e=s.apply(this, arguments);
					this.P.threeState && e && 'checkbox'!=i && this.bf.apply(this, arguments);
				}, this.mf=function() {};
			}
		},
		threeState_setter:function(t) {return t && this.mf(), t;},
		bf:function(t) {
			var i, e, s, n, h;
			if(s=[], h=this, t && !h.data.pull[t] && (t=0), !t || h.data.pull[t].$count) for((e=this.gf(t)).sort(function(t, i) {return h.data.pull[i].$level-h.data.pull[t].$level;}), i=0; i<e.length; i++) i && h.data.pull[e[i]].$parent==h.data.pull[e[i-1]].$parent || (s=s.concat(h.wf(e[i]))); else s=s.concat(h.wf(t));
			for(n={}, i=0; i<s.length; i++) n[s[i]] || (n[s[i]]=1, this.xf(s[i]));
			h=null;
		},
		xf:function(t) {
			var i;
			this.getItemNode(t) && (this.render(t, 'checkbox', 'update'), this.getItem(t).indeterminate && (i=this.getItemNode(t).getElementsByTagName('input')[0]) && (i.indeterminate=this.getItem(t).indeterminate));
		},
		wf:function(t) {
			var i, e, s, n, h, r, o;
			for(n=this.getParentId(t), h=[]; n && "0"!=n;) {
				e=r=0, this.data.eachChild(n, function(t) {t.indeterminate?r++:t.checked && e++;}), i=s=o= !1;
				var a=this.getItem(n);
				e==a.$count?i= !0:(0<e || 0<r) && (s= !0), (s || s!=a.indeterminate) && (o= !0), a.indeterminate=s, (i || a.checked!=i) && (o= !0), a.checked=i, n=o?(h.push(n), this.getParentId(n)):0;
			}
			return h;
		},
		getChecked:function() {
			var i=[], e=this;
			return this.data.eachSubItem(0, function(t) {e.isChecked(t.id) && i.push(t.id);}), i;
		},
		sf:function(t, i) {
			var e=this.getItem(t);
			if(e && (''===i && (i= !e.checked), e.checked!=i || e.indeterminate)) {
				e.checked=i, this.yf(t);
				var s=this.wf(t);
				if(this.pf && s.length<5) for(var n=0; n<s.length; n++) this.xf(s[n]); else this.refresh();
				this.callEvent('onItemCheck', [t, i]);
			}
		},
		checkItem:function(t) {this.ef(t, !0), this.updateItem(t);},
		uncheckItem:function(t) {this.ef(t, !1), this.updateItem(t);},
		Mf:function(t, i, e) {
			var s=i?'checkItem':'uncheckItem';
			t?this[s](t):t=0, this.P.threeState?t || this.data.eachChild(0, function(t) {this[s](t.id);}, this, e):this.data.each(function(t) {this[s](t.id);}, this, e, t);
		},
		checkAll:function(t, i) {this.Mf(t, !0, i);},
		uncheckAll:function(t, i) {this.Mf(t, !1, i);},
		yf:function(t) {
			var i, e=this.getItem(t);
			e.indeterminate= !1, i=e.checked, this.data.eachSubItem(t, function(t) {t.indeterminate= !1, t.checked=i;}), this.pf && this.isBranchOpen(e.$parent) && this.render(t, 0, 'branch');
		},
		isChecked:function(t) {return this.getItem(t).checked;},
		gf:function(t) {
			var e=[];
			return this.data.eachSubItem(t, function(t, i) {i || e.push(t.id);}), e;
		}
	}, ls={
		name:'TreeStore',
		$init:function() {this.io={showSubItems:!0}, this.branch={0:[]}, this.attachEvent('onParse', function(t) {this.Ur(t.child);}), this.attachEvent('onClearAll', S(function() {this.Lr=null;}, this));},
		filterMode_setter:function(t) {return H.extend(this.io, t, !0);},
		Zr:function(t) {
			if(this.Lr && !t) {
				for(var i in this.branch=this.Lr, this.order=b(_(this.branch[0])), this.branch) '0'!=i && (this.getItem(i).$count=this.branch[i].length);
				delete this.Lr;
			}
		},
		Qr:function(t, i, e, s) {e && this.Lr || (this.Lr=this.branch, this.branch=l(this.branch)), this.branch[0]=this.Sf(t, i, this.branch[0], 1, s || {});},
		Sf:function(t, i, e, s, n) {
			for(var h=[], r=n.level && n.level!=s, o=0; o<e.length; o++) {
				var a=e[o], u=this.getItem(a), c=!1, f=this.branch[a];
				if(r) c= !0; else if(t(this.getItem(a), i)) {
					if(h.push(a), !1!==n.openParents) for(var l=this.getParentId(a); l && "0"!=l;) this.getItem(l).open=1, l=this.getParentId(l);
					if(n.level || n.showSubItems) continue;
				} else c= !0;
				if((r || !n.level) && f) {
					var d=this.branch[a]=this.Sf(t, i, f, s+1, n);
					u.$count=d.length, c && d.length && h.push(a);
				}
			}
			return h;
		},
		count:function() {
			if(this.order.length) return this.order.length;
			var t=0;
			return this.eachOpen(function() {t++;}), t;
		},
		kf:function(t, i, e, s) {
			if(t[e]) {
				for(var n=t[s]=t[e], h=0; h<n.length; h++) this.getItem(n[h]).$parent=s;
				delete t[e];
			}
			if(t[i]) {
				var r=x.find.call(t[i], e);
				0<=r && (t[i][r]=s);
			}
		},
		changeId:function(t, i) {
			if(t!=i) {
				var e=this.getItem(t).$parent;
				return this.kf(this.branch, e, t, i), this.Lr && this.kf(this.Lr, e, t, i), ve.prototype.changeId.call(this, t, i);
			}
		},
		clearAll:function(t) {this.branch={0:[]}, ve.prototype.clearAll.call(this, t);},
		getPrevSiblingId:function(t) {
			var i=this.branch[this.getItem(t).$parent], e=x.find.call(i, t)-1;
			return 0<=e?i[e]:null;
		},
		getNextSiblingId:function(t) {
			var i=this.branch[this.getItem(t).$parent], e=x.find.call(i, t)+1;
			return e<i.length?i[e]:null;
		},
		getParentId:function(t) {return this.getItem(t).$parent;},
		getFirstChildId:function(t) {
			var i=this.branch[t];
			return i && i.length?i[0]:null;
		},
		isBranch:function(t) {return !!this.branch[t];},
		getBranchIndex:function(t) {
			var i=this.branch[this.pull[t].$parent];
			return x.find.call(i, t);
		},
		Ur:function(e) {
			this.Wr='string'== typeof e?function(t) {
				var i=t[e];
				return i && delete t[e], i;
			}:e;
		},
		Dr:function(t, i) {
			for(var e=t.parent || 0, s=0; s<i.length; s++) {
				var n=this.driver.getDetails(i[s]), h=this.id(n), r=!!this.pull[h];
				r?(n=H.extend(this.pull[h], n, !0), this.zr && this.zr(n)):(this.Br && this.Br(n), this.pull[h]=n), this.Or(n, e, 0, r, t.from?1*t.from+s:0);
			}
			var o=this.pull[e] || {}, a=this.branch[e] || [];
			o.$count=a.length, delete o.webix_kids, t.size && t.size!=a.length && (a[t.size-1]=undefined);
		},
		Or:function(t, i, e, s, n) {
			t.$count=0, t.$parent='0'!=i?i:0, t.$level=e || ('0'!=i?this.pull[i].$level+1:1);
			var h=this.branch[t.$parent];
			(h || (h=this.branch[t.$parent]=[]), this.Lr && (this.Lr[t.$parent]=h), s) || (h[n || h.length]=t.id);
			var r=this.Wr(t);
			if(t.webix_kids) return t.$count= -1;
			if(!r) return t.$count=0;
			$(r) || (r=[r]);
			for(var o=0; o<r.length; o++) {
				var a=zt.json.getDetails(r[o]), u=this.id(a);
				(s= !!this.pull[u])?(a=H.extend(this.pull[u], a, !0), this.zr && this.zr(a)):(this.Br && this.Br(a), this.pull[u]=a), this.Or(a, t.id, t.$level+1, s);
			}
			var c=this.branch[t.id];
			c && (t.$count=c.length);
		},
		af:function(t) {this.order=b(), this.Cf(this.order, 0, t);},
		Cf:function(t, i, e) {
			for(var s=this.branch[i], n=0; n<s.length; n++) {
				var h=s[n];
				t.push(h);
				var r=this.pull[h];
				r && r.open && (-1==r.$count?e.loadBranch(h):r.$count && this.Cf(t, h, e));
			}
		},
		provideApi:function(t, i) {
			for(var e=['getPrevSiblingId', 'getNextSiblingId', 'getParentId', 'getFirstChildId', 'isBranch', 'getBranchIndex', 'filterMode_setter'], s=0; s<e.length; s++) t[e[s]]=this.so(this, e[s]);
			t.getIndexById || ve.prototype.provideApi.call(this, t, i);
		},
		getTopRange:function() {return b([].concat(this.branch[0])).map(function(t) {return this.getItem(t);}, this);},
		eachChild:function(t, i, e, s) {
			var n=this.branch;
			s && this.Lr && (n=this.Lr);
			var h=n[t];
			if(h) for(var r=0; r<h.length; r++) h[r] && i.call(e || this, this.getItem(h[r]));
		},
		each:function(e, s, n, t) {
			this.eachChild(t || 0, function(t) {
				var i=this.branch;
				e.call(s || this, t), n && this.Lr && (i=this.Lr), t && i[t.id] && this.each(e, s, n, t.id);
			}, this, n);
		},
		eachOpen:function(i, e, t) {this.eachChild(t || 0, function(t) {i.call(e || this, t), this.branch[t.id] && t.open && this.eachOpen(i, e, t.id);});},
		eachSubItem:function(t, i) {
			var e=this.branch[t || 0];
			if(e) for(var s=0; s<e.length; s++) {
				var n=e[s];
				this.branch[n]?(i.call(this, this.getItem(n), !0), this.eachSubItem(n, i)):i.call(this, this.getItem(n), !1);
			}
		},
		eachLeaf:function(t, i) {
			var e=this.branch[t || 0];
			if(e) for(var s=0; s<e.length; s++) {
				var n=e[s];
				this.branch[n]?this.eachLeaf(n, i):i.call(this, this.getItem(n), !1);
			}
		},
		Kr:function(t, i) {
			for(var e in this.branch) {
				for(var s=this.branch[e], n=[], h=0; h<s.length; h++) n.push(this.pull[s[h]]);
				n.sort(t);
				for(var r=0; r<s.length; r++) n[r]=n[r].id;
				this.branch[e]=n;
			}
			return i;
		},
		add:function(t, i, e) {
			var s=!1, n=this.getItem(e || 0);
			if(n && (this.branch[n.id] || (s= !0), n.$count++, n.$count || (n.$count=1)), this.branch[e || 0]=this.order=b(this.branch[e || 0]), t.$count=t.webix_kids?-1:0, t.$level=n?n.$level+1:1, t.$parent=n?n.id:0, this.Lr) {
				var h=this.Lr[e || 0];
				if(h || (h=this.Lr[e]=this.order), this.order!==h) {
					var r=h.length;
					!i && this.branch[e || 0].length && (r=0), h=b(h), t.id=t.id || V(), h.insertAt(t.id, r);
				}
			}
			var o=ve.prototype.add.call(this, t, i);
			return s && this.refresh(e), o;
		},
		$f:function(t) {
			var i=this.pull[t];
			if(this.branch[i.id] && 0<this.branch[i.id].length) for(var e=this.branch[t], s=0; s<e.length; s++) this.$f(e[s], !0);
			delete this.branch[t], this.Lr && delete this.Lr[t], delete this.pull[t], this.kr[t] && delete this.kr[t];
		},
		Df:function(t, i, e) {
			var s=t[i];
			1==s.length && s[0]==e && i?delete t[i]:b(s).remove(e);
		},
		remove:function(t) {
			if($(t)) for(var i=0; i<t.length; i++) this.remove(t[i]); else {
				this.exists(t);
				var e=this.pull[t], s=e.$parent || 0;
				if(!1===this.callEvent('onBeforeDelete', [t])) return !1;
				this.$f(t), this.callEvent('onAfterDelete', [t]);
				var n=this.pull[s];
				this.Df(this.branch, s, t), this.Lr && this.Df(this.Lr, s, t);
				var h=0;
				n && (n.$count--, n.$count<=0 && (n.$count=0, n.open=0, h=1)), this.callEvent('onStoreUpdated', [t, e, 'delete']), h && this.refresh(n.id);
			}
		},
		getBranch:function(t) {
			var i=[], e=(this.Lr || this.branch)[t];
			if(e) for(var s=0; s<e.length; s++) i[s]=this.pull[e[s]];
			return i;
		},
		serialize:function(t, i) {
			var e=this.branch;
			i && this.Lr && (e=this.Lr);
			for(var s=e[t || 0], n=[], h=0; h<s.length; h++) {
				var r, o=this.pull[s[h]];
				if(this.lr) {
					if(!1===(r=this.lr(o))) continue;
				} else r=_(o);
				e[o.id] && (r.data=this.serialize(o.id, i)), n.push(r);
			}
			return n;
		}
	}, ds={
		insert:function(t) {
			for(var i=this.getSelectedId(!0, !0), e=0; e<t.length; e++) {
				for(var s={}, n=0; n<this.P.columns.length; n++) s[this.P.columns[n].id]=t[e][n] || '';
				!R(s.id) && this.exists(s.id) && (s.id=V()), this.add(s, null, i[0]);
			}
		}
	}, vs={
		space:function(t) {
			for(var i='', e=1; e<t.$level; e++) i+='<div class=\'webix_tree_none\'></div>';
			return i;
		},
		icon:function(t) {return t.$count?t.open?'<div class=\'webix_tree_open\'></div>':'<div class=\'webix_tree_close\'></div>':'<div class=\'webix_tree_none\'></div>';},
		checkbox:function(t) {return t.nocheckbox?'':'<input type=\'checkbox\' class=\'webix_tree_checkbox\' '+(t.checked?'checked':'')+(t.disabled?' disabled':'')+'>';},
		folder:function(t) {return t.icon?'<div class=\'webix_tree_file webix_tree_'+t.icon+'\'></div>':t.$count?t.open?'<div class=\'webix_tree_folder_open\'></div>':'<div class=\'webix_tree_folder\'></div>':'<div class=\'webix_tree_file\'></div>';}
	}, _s={
		$render:function() {
			if(this.If) this.Oi.firstChild.appendChild(this.If); else {
				this.files.attachEvent('onBeforeDelete', this.Af);
				var t={
					type:'file',
					'class':'webix_hidden_upload',
					tabindex:-1
				};
				this.P.accept && (t.accept=this.P.accept), this.P.multiple && (t.multiple='true'), this.P.directory && (t.webkitdirectory='true', t.mozdirectory='true', t.directory='true');
				var i=ft('input', t);
				this.If=this.Oi.firstChild.appendChild(i), Kt(this.Vt, 'drop', S(function(t) {this.$drop(t), gt(t);}, this)), Kt(i, 'change', S(function() {
					if(this.Tf(i.files), q.isIE) {
						var t=document.createElement('form');
						t.appendChild(this.If), t.reset(), this.Oi.firstChild.appendChild(i);
					} else i.value='';
				}, this)), Kt(this.Vt, 'click', S(function() {250<new Date-(this.Ff || 0) && this.fileDialog();}, this)), Kt(this.Vt, 'dragenter', gt), Kt(this.Vt, 'dragexit', gt), Kt(this.Vt, 'dragover', gt);
			}
		},
		Vf:function(t) {return t.isDirectory;},
		zf:function(e, s, n) {
			if(e.isFile) e.file(function(t) {s.addFile(t, null, null, {name:n+'/'+t.name});}); else if(e.isDirectory) {
				e.createReader().readEntries(function(t) {for(var i=0; i<t.length; i++) s.zf(t[i], s, (n?n+'/':'')+e.name);});
			}
		},
		$drop:function(t) {
			var i=t.dataTransfer.files, e=t.dataTransfer.items;
			if(i.length) {
				if(this.callEvent('onBeforeFileDrop', [i, t])) {
					e=e || i;
					for(var s=0; s<e.length; s++) {
						var n=e[s];
						n.webkitGetAsEntry && (n=n.webkitGetAsEntry()).isDirectory?this.zf(n, this, ''):this.addFile(i[s]);
					}
				}
				this.callEvent('onAfterFileDrop', [i, t]);
			}
		},
		fileDialog:function(t) {
			this.Ff=new Date, this.Bf=t;
			var i=this.Vt.getElementsByTagName('INPUT');
			i[i.length-1].click();
		},
		send:function(i) {
			if('function'== typeof i && (this.Hf=i, i=0), i) {
				var t=this.files.getItem(i);
				if('client'!==t.status) return !1;
				this.P.upload, t.status='transfer';
				var e=new FormData;
				e.append(this.config.inputName, t.file, t.name), e.append(this.config.inputName+'_fullpath', t.name);
				var s={}, n=this.P.formData || {};
				'function'== typeof n && (n=n.call(this));
				var h=H.extend(t.formData || {}, n), r=new XMLHttpRequest, o=this.Rf(t);
				if(y('onBeforeAjax', ['POST', o, h, r, s, e])) {
					for(var a in h) e.append(a, h[a]);
					for(var u in (t.xhr=r).upload.addEventListener('progress', S(function(t) {this.$updateProgress(i, t.loaded/t.total*100);}, this), !1), r.onload=S(function() {r.aborted || this.Ef(i);}, this), r.open('POST', o, !0), s) r.setRequestHeader(u, s[u]);
					r.send(e);
				}
				return this.$updateProgress(i, 0), !0;
			}
			var c=this.files.data.order, f=!0;
			if(c.length) for(var l=0; l<c.length; l++) f=!this.send(c[l]) && f;
			f && this.Pf();
		},
		Ef:function(t) {
			var i=this.files.getItem(t);
			if(i) {
				var e=null;
				if(i.xhr.status<400) {
					var s=zt[this.P.datatype || 'json'];
					(e=s.toObject(i.xhr.responseText)) && (e=s.getDetails(e));
				}
				e && 'error'!=e.status?(!e.status || e.status, this.jf(t, e)):(i.status='error', delete i.percent, this.files.updateItem(t), this.callEvent('onFileUploadError', [i, e])), delete i.xhr;
			}
		},
		stopUpload:function(t) {S(this.Af, this.files)(t);},
		Af:function(t) {
			var i=this.getItem(t);
			'undefined'!= typeof i.xhr && (i.xhr.aborted= !0, i.xhr.abort(), delete i.xhr, i.status='client');
		}
	}, ps={
		Nf:function() {this.data.attachEvent('onStoreUpdated', S(function(t, i, e) {!t || 'add'!=e && 'update'!=e || this.validate(t);}, this)), this.data.attachEvent('onClearAll', S(this.clearValidation, this)), this.Nf=function() {};},
		rules_setter:function(t) {return t && this.Nf(), t;},
		clearValidation:function() {this.data.clearMark('webix_invalid', !0);},
		validate:function(t) {
			var i=!0;
			if(t) {
				this.Zh={};
				var e=this.getItem(t);
				(i=ce.validate.call(this, null, e))?this.callEvent('onValidationSuccess', [t, e]) && this.Kh(t):this.callEvent('onValidationError', [t, e, this.Zh]) && this.ir(t, this.Zh);
			} else for(var s in this.data.pull) i=this.validate(s) && i;
			return i;
		},
		Qh:function(t, i, e, s) {
			'string'== typeof t && (t=ue[t]);
			var n=t.call(this, i, e, s);
			return n || (this.Zh[s]= !0), n;
		},
		Kh:function(t) {this.data.removeMark(t, 'webix_invalid', !0);},
		ir:function(t) {this.data.addMark(t, 'webix_invalid', !0);}
	}, ms={
		$init:function() {this.elements={};},
		focus:function(t) {
			if(t) this.elements[t], this.gi(this.elements[t]); else for(var i in this.elements) if(!1!==this.gi(this.elements[i])) return !0;
			return !1;
		},
		gi:function(t) {return !(!t || !t.focus) && t.focus();},
		setValues:function(t, i) {
			var e=this;
			this.P.complexData && (t=Rt.collapseNames(t, '', {}, function(t) {return !e.elements[t];})), this.Lf(t, i);
		},
		Lf:function(t, i) {
			for(var e in this.Of=i, this.blockEvent(), i && this.Wf || (this.Wf={}), t) this.elements[e] || (this.Wf[e]=t[e]);
			for(var s in this.elements) {
				var n=this.elements[s];
				n && (R(t[s])?!i && n.$allowsClear && n.setValue(''):n.setValue(t[s]), this.Wf[s]=n.getValue());
			}
			this.unblockEvent(), this.callEvent('onValues', []);
		},
		isDirty:function() {return !!this.Of || !0===this.getDirtyValues(!0);},
		setDirty:function(t) {(this.Of=t) || (this.Wf=this.Uf());},
		getDirtyValues:function() {
			var t={};
			if(this.Wf) for(var i in this.elements) {
				var e=this.elements[i], s=e.getValue(), n=this.Wf[i];
				if((e.$compareValue?!e.$compareValue(n, s):n!=s) && (t[i]=s, arguments[0])) return !0;
			}
			return t;
		},
		getCleanValues:function() {return this.Wf;},
		getValues:function(t) {
			var i=this.Uf(t);
			return this.P.complexData && (i=Rt.expandNames(i)), i;
		},
		Uf:function(t) {
			var i, e=null, s=this.Wf?_(this.Wf):{};
			for(var n in this.elements) e=this.elements[n], i= !0, t && ('object'==M(t)?(!1===t.hidden && (i=e.isVisible()), i && !1===t.disabled && (i=e.isEnabled())):i=t.call(this, e)), i?s[n]=e.getValue():delete s[n];
			return s;
		},
		clear:function() {
			this.Of= !1;
			var t={};
			for(var i in this.elements) this.elements[i].$allowsClear && (t[i]='');
			this.Lf(t);
		},
		markInvalid:function(t, i) {
			if(!1===i) this.Kh(t); else {
				if('string'== typeof i) {
					var e=this.elements[t];
					e && (e.P.invalidMessage=i);
				}
				this.Zh && (this.Zh[t]= !0), this.ir(t);
			}
		},
		ir:function(t) {
			var i=this.elements[t];
			t && i && (this.Kh(t, !0), yt(i.Vt, 'webix_invalid'), i.P.invalid= !0, 'string'== typeof i.P.invalidMessage && i.setBottomText && i.setBottomText());
		},
		Kh:function(t, i) {
			var e=this.elements[t];
			t && e && e.$view && e.P.invalid && (Mt(e.Vt, 'webix_invalid'), e.P.invalid= !1, 'string'== typeof e.P.invalidMessage && !i && e.setBottomText && e.setBottomText());
		}
	}, bs={
		$init:function() {this.render, this.ji={}, Kt(this.Vt, 'scroll', S(this.Yf, this)), this.qf=[];},
		getItemNode:function(t) {return this.ji[t];},
		showItem:function(t) {
			var i=this.hh(), e=this.data.getIndexById(t), s=Math.floor(e/i.nh)*i.ks, n=this.getScrollState();
			(s<n.y || s+this.P.height>=n.y+this.ge) && this.scrollTo(0, s);
		},
		render:function(t, i, e) {
			if(this.isVisible(this.P.id) && !this.$blockRender) if(t) {
				var s=this.getItemNode(t);
				switch(e) {
				case'update':
					if(!s) return;
					vt(this.ji[t]=this.mc(i), s), dt(s);
					break;
				default:
					this.Gf();
				}
			} else this.callEvent('onBeforeRender', [this.data]) && (this.ji={}, this.Yf(null, !0), this.Xf= !1, this.callEvent('onAfterRender', []));
		},
		Gf:function() {this.Xf || (this.Xf= !0, window.setTimeout(S(function() {this.render();}, this), 1));},
		Jf:function(t) {
			q.maxHTMLElementSize && (t=Math.min(q.maxHTMLElementSize, t));
			var i=document.createElement('DIV');
			return i.style.cssText='height:'+t+'px; width:100%; overflow:hidden;', i;
		},
		Yf:function(t, i) {
			this.qf=[];
			var e=this.hh();
			this.tt.firstChild && !i || (this.tt.innerHTML='', this.tt.appendChild(this.Jf(e.Kf)), this.Ni=[this.tt.firstChild]);
			for(var s=e.Zf; s<=e.Qf;) {
				for(; this.Ni[s] && this.Ni[s].tl && s<=e.Qf;) s++;
				if(s>e.Qf) break;
				for(var n=s; !this.Ni[n];) n--;
				var h=this.Ni[n], r=s*e.nh+(this.data.$min || 0);
				if(r>(this.data.$max || Infinity)) break;
				var o=Math.min(r+e.nh-1, this.data.$max?this.data.$max-1:Infinity), a=this.Jf(e.ks), u=this.data.getIndexRange(r, o);
				if(!u.length) break;
				for(var c={$template:'Loading'}, f=0; f<u.length; f++) u[f] || this.qf.push(r+f), u[f]=this.Q(u[f] || c);
				a.innerHTML=u.join('');
				for(var l=0; l<u.length; l++) this.ji[this.data.getIdByIndex(r+l)]=a.childNodes[l];
				var d=parseFloat(h.style.height, 10), v=(s-n)*e.ks, _=d-v-e.ks;
				if(vt(a, v?h.nextSibling:h, this.tt), (this.Ni[s]=a).tl= !0, v<=0 && 0<_) h.style.height=_+'px', this.Ni[s+1]=h; else if(v<0?dt(h):h.style.height=v+'px', 0<_) vt(this.Ni[s+1]=this.Jf(_), a.nextSibling, this.tt);
				s++;
			}
			if(this.qf.length) {
				var p=this.qf[0], m=this.qf.pop()+1;
				if(p<m) {
					var b=m-p;
					if(this.po(b, p)) return;
					b=Math.max(b, this.P.datafetch || this.P.loadahead || 0), this.loadNext(b, p);
				}
			}
		},
		hh:function() {
			var t=this.getScrollState(), i=Math.max(0, t.y), e=this.me, s=this.ge, n=this.type, h=Math.floor(e/n.width) || 1, r=Math.floor(i/n.height), o=Math.ceil((s+i)/n.height)-1, a=this.data.$max?this.data.$max-this.data.$min:this.data.count();
			return {
				Zf:r,
				Qf:o,
				il:i,
				Kf:Math.ceil(a/h)*n.height,
				ks:n.height,
				nh:h
			};
		},
		at:function(t) {
			var i=this.getItemNode(t);
			return i || (this.showItem(t), this.Yf(), i=this.getItemNode(t)), {
				left:i.offsetLeft,
				top:i.offsetTop,
				height:i.offsetHeight,
				width:i.offsetWidth,
				parent:this.Oi
			};
		}
	}, gs={
		$init:function() {this.ji={}, Kt(this.Vt, 'scroll', S(function() {this.render(null, null, 'paint');}, this));},
		gs:function(t, i, e) {this.P.footer && Yi.ms(this.el.childNodes[1].firstChild, t, 0, e), this.callEvent('onSyncScroll', [t, i, e]);},
		getItemNode:function(t) {return this.ji && this.ji[t];},
		showItem:function(t) {
			var i=this.data.getIndexById(t);
			if(-1<i) {
				var e=i*this.type.height, s=e+this.type.height, n=this.getScrollState(), h=pt(this.$view);
				e<n.y?this.scrollTo(0, e):s>n.y+h.height && this.scrollTo(0, s-h.height);
			}
		},
		render:function(t, i, e) {
			if(this.isVisible(this.P.id) && !this.$blockRender) {
				var s=this.gc || this.tt;
				if(!t || 'paint'!=e && 'update'!=e) {
					if('paint'!=e && (this.ji={}, s.innerHTML=''), this.callEvent('onBeforeRender', [this.data])) {
						var n=this.data.count(), h=this.getScrollState(), r=pt(this.Vt), o=Math.floor(h.y/this.type.height)-2, a=Math.ceil((h.y+r.height)/this.type.height)+2;
						o=Math.max(0, o), a=Math.min(this.data.count()-1, a);
						for(var u=[], c=o; c<=a; c++) {
							var f=this.data.order[c];
							if(this.ji[f]) u.push('<div></div>'); else {
								var l=this.data.getItem(f);
								if(!l) {
									this.sl({
										count:a-c+(this.P.loadahead || 0),
										start:c
									});
									break;
								}
								u.push(this.Q(l));
							}
						}
						this.Li.innerHTML=u.join(''), s.style.position='relative', s.style.height=n*this.type.height+'px';
						for(var d=this.Li.childNodes, v=d.length-1; 0<=v; v--) {
							var _=d[v], p=_.getAttribute(this.Ko);
							p && (_.style.position='absolute', _.style.top=(o+v)*this.type.height+'px', _.style.left=0, _.style.width='100%', s.appendChild(_), this.ji[p]=_);
						}
						this.callEvent('onAfterRender', []);
					}
				} else {
					var m=this.getItemNode(t);
					if(m) {
						var b=this.ji[t]=this.mc(i);
						return b.style.top=m.style.top, b.style.position='absolute', b.style.left=0, b.style.width='100%', vt(b, m), void dt(m);
					}
				}
			}
		},
		$setSize:function() {Hi.api.$setSize.apply(this, arguments) && this.render(null, null, 'paint');},
		sl:function(t) {
			var i=Math.max(t.count, this.P.datafetch || this.P.loadahead || 0);
			this.po(t.count, t.start) || this.loadNext(i, t.start);
		}
	}, ws='non-existing view for export';

	function xs(i, e, t) {return !t && e.format?function(t) {return e.format(t[i]);}:function(t) {return t[i];};}

	function ys(t, i) {
		var e=i.text;
		if(i.contentId) {
			var s=t.getHeaderContent(i.contentId);
			s && !s.type.$icon && (e=s.getValue(!0));
		}
		return (e || '').toString().replace(/<[^>]*>/gi, '');
	}

	function Ms(t, i, e) {return e[t] && e[t][i]?e[t][i]:'';}

	function Ss(t, i) {
		var e, s=[], n=0, h=0, r=t.getColumnConfig, o=i.columns, a=!!i.rawValues, u='TreeStore'==t.data.name, c=i.treeLines;
		if((!0===c || R(c)) && (c='value'), s.heights={}, o) {
			if(!o.length) {
				var f=[];
				for(var l in o) f.push(H.extend({id:l}, H.extend({}, o[l])));
				o=f;
			}
		} else if(r) o=[].concat(t.nl); else {
			o=[];
			var d=t.data.pull[t.data.order[0]];
			for(var v in d) 'id'!==v && '$'!=v[0] && o.push({
				id:v,
				isTree:u && v===c
			});
		}
		if(i.ignore) for(var _=o.length-1; 0<=_; _--) i.ignore[o[_].id] && o.splice(_, 1);
		if(i.id && s.push({
			id:'id',
			width:50,
			header:' ',
			template:function(t) {return t.id;}
		}), i.flatTree) {
			for(var p=i.flatTree.id, m=[].concat(i.flatTree.columns), b=[], g=!!i.flatTree.fill, w=1; w<=m.length; w++) m[w-1].template=function(i) {return function(t) {return t.$level==i?b[i]=t[p]:g && i<t.$level?b[i]:'';};}(w);
			for(var x=0, y=o.length-1; 0<=y; y--) o[y].id===p && (x=y);
			o=[].concat(o.slice(0, x)).concat(m).concat(o.slice(x+1));
		}
		for(var M=0; M<o.length; M++) {
			var S=o[M], k=S.id;
			if(!S.noExport) {
				var C=a && r;
				if(r) {
					var $=t.hl[k];
					!S.template || $ && $.template==S.template || (C= !1), $ && (S=H.extend(H.extend({}, S), $));
				}
				var D={
					id:S.id,
					template:C || !S.template?xs(k, S, a):S.template,
					width:(S.width || 200)*('excel'===i.export_mode?8.43/70:1),
					header:!1!==S.header?S.header || k:''
				};
				u && k===c && (D.isTree=e= !0), 'excel'===i.export_mode && H.extend(D, {
					type:S.exportType || '',
					format:S.exportFormat || ''
				}), 'string'== typeof D.header?D.header=[{text:D.header}]:D.header=[].concat(D.header);
				for(var I=0; I<D.header.length; I++) D.header[I]=D.header[I]?ys(t, D.header[I]):'';
				if(n=Math.max(n, D.header.length), t.config.footer) {
					var A=S.footer || '';
					A='string'== typeof A?[{text:A}]:[].concat(A);
					for(var T=0; T<A.length; T++) A[T]=A[T]?ys(t, A[T]):'';
					D.footer=A, h=Math.max(h, D.footer.length);
				}
				s.push(D);
			}
		}
		!e && u && i.treeLines!=c && s[0] && (s[0].isTree= !0);
		for(var F=0; F<s.length; F++) {
			for(var V=n-s[F].header.length, z=0; z<V; z++) s[F].header.push('');
			if(t.config.footer) {
				V=h-s[F].footer.length;
				for(var B=0; B<V; B++) s[F].footer.push('');
			}
		}
		return s;
	}

	function ks(r, o, a) {
		var t, i, u=!!o.filterHTML, c=/<[^>]*>/gi, f=[], l=o.export_mode;
		if('excel'!==l && 'csv'!=l || !o.docHeader || (f=[[(o.docHeader.text || o.docHeader).toString()], ['']], 'excel'===l && o.docHeader.height && (a.heights[0]=o.docHeader.height)), !1!==o.header && a.length) for(var e=0; e<a[0].header.length; e++) {
			i=[];
			for(var s=0; s<a.length; s++) t='', a[s].header[e] && (t=a[s].header[e], u && (t=a[s].header[e]=t.replace(c, ''))), i.push(t);
			'excel'!=l || !r.nl || !1===o.heights || r.rl[e]===Li.barHeight && 'all'!=o.heights || (a.heights[f.length]=r.rl[e]), 'pdf'!==l && (f[f.length]=i);
		}
		o.yCorrection=(o.yCorrection || 0)-f.length;
		var d=o.flatTree || o.plainOutput?'':'-';
		if(r.data.each(function(t) {
			if(!o.filter || o.filter(t)) {
				this.data.jr && (t=r.data.jr(t));
				for(var i=[], e=0; e<a.length; e++) {
					var s=a[e], n=null;
					if(o.math && t['$'+s.id] && '='==t['$'+s.id].charAt(0) && !t['$'+s.id].match(/^=(image|sparkline)\(/i) && (n=t['$'+s.id]), this.ol) {
						var h=this.getSpan(t.id, s.id);
						h && h[4] && h[0]==t.id && h[1]==s.id && (n=h[4], u && 'string'== typeof n && (n=n.replace(c, '')));
					}
					n || ((n=s.template(t, r.type, t[s.id], s, e)) || 0===n || (n=''), s.isTree && d && (n=' '+Array(t.$level).join(d)+' '+n), u && 'string'== typeof n && (n=n.replace(c, '')), 'string'== typeof n && 'csv'===l && (n=n.trim()), 'string'!= typeof n || 'excel'!==l && 'csv'!==l || (n=n.replace(/<br\s*\/?>/gm, '\n'))), i.push(n);
				}
				'excel'==l && r.nl && !1!==o.heights && (t.$height && t.$height!==Li.rowHeight || 'all'==o.heights) && (a.heights[f.length]=t.$height || this.config.rowHeight), f.push(i);
			}
		}, r), !1!==o.footer) for(var n=a[0].footer?a[0].footer.length:0, h=0; h<n; h++) {
			for(var v=[], _=0; _<a.length; _++) {
				var p=a[_].footer[h];
				u && (p=a[_].footer[h]=p.toString().replace(c, '')), v.push(p);
			}
			'excel'!=l || !r.nl || !1===o.heights || r.al[h]===Li.barHeight && 'all'!=o.heights || (a.heights[f.length]=r.al[h]), 'pdf'!==l && f.push(v);
		}
		return 'excel'===l && o.docFooter && (f=f.concat([[], [(o.docFooter.text || o.docFooter).toString()]]), o.docFooter.height && (a.heights[f.length-1]=o.docFooter.height)), f;
	}

	var Cs={}, $s=function(t, s) {
		(s=s || {}).export_mode='pdf', s.ul=Cs, s.fontName=s.fontName || 'pt-sans.regular', t=$(t)?t:[t];
		for(var n=[], i=0; i<t.length; i++) {
			t[i].id || (t[i]={id:t[i]});
			var e=oi(t[i].id);
			if(e) {
				var h=H.extend(t[i].options || {}, s), r=h.display || 'table';
				if('image'==h.display && delete h.styles, e.$exportView && (e=e.$exportView(h)), $(e)) n=n.concat(e), s.autowidth && Fs(h, s); else {
					if(('table'==r || 'all'==r) && e.data && e.data.pull) {
						var o=Ss(e, h);
						n.push({
							scheme:o,
							exportData:ks(e, h, o),
							viewOptions:h
						}), s.autowidth && Fs(e, s, o);
					}
					if('image'==r || 'all'==r) {
						var a=h.It?zs(e.$view):e.$view;
						n.push({
							node:a,
							viewOptions:h
						}), s.autowidth && Fs(e, s);
					}
				}
			}
		}
		return s.dataOnly?n:Ft([q.cdn+'/extras/pdfjs.js', q.cdn+'/extras/html2canvas-1.0.min.js']).then(function() {
			if(0==n.length) return m.reject(ws);
			if(Cs[s.fontName]) return s.ul=Cs[s.fontName], Is(n, s).then(function(t) {return Ds(t, s);});
			var e=m.defer();
			return pdfjs.load(s.fontURL || q.cdn+'/extras/'+s.fontName+'.ttf', function(t, i) {
				if(t) throw t;
				s.ul=Cs[s.fontName]=new pdfjs.TTFFont(i), e.resolve(Is(n, s).then(function(t) {return Ds(t, s);}));
			}), e;
		});
	};

	function Ds(t, i) {
		var e=(i.filename || 'Data')+'.pdf', s=new Blob([t.toString()], {type:'application/pdf'});
		return !1!==i.download && kt(s, e), s;
	}

	function Is(s, n) {
		for(var h=function o(t) {
			var i=t.width || 595.296, e=t.height || 841.896;
			t.orientation && 'landscape'===t.orientation && (e=[i, i=e][0]);
			return new pdfjs.Document({
				padding:40,
				font:t.ul,
				threshold:256,
				width:i,
				height:e
			});
		}(n), r=[], t=0; t<s.length; t++) s[t].node?r.push(Ts(s[t].node)):r.push(m.resolve());
		return m.all(r).then(function(t) {
			for(var i=0; i<r.length; i++) {
				var e=s[i].viewOptions;
				e.textBefore && As(h, 'before', e.textBefore), t[i]?h.image(t[i], {align:'center'}):Vs(s[i], h), e.textAfter && As(h, 'after', e.textAfter), i!=s.length-1 && h.pageBreak();
			}
			return function o(s, n) {
				if(!1!==n.docFooter) {
					var t=s.footer();
					t.text({
						color:6710886,
						textAlign:'center'
					}).append(I.dataExport.page || 'Page').pageNumber().append('  '+(I.dataExport.of || 'of')+'  ').pageCount();
				}
				var h={
					text:0,
					image:1
				};
				n.docHeader && ('string'== typeof n.docHeader && (n.docHeader={text:n.docHeader}), H.extend(n.docHeader, {
					color:6710886,
					textAlign:'right',
					order:0
				}), h.text=n.docHeader.order);
				n.docHeaderImage && ('string'== typeof n.docHeaderImage && (n.docHeaderImage={url:n.docHeaderImage}), H.extend(n.docHeaderImage, {
					align:'right',
					order:1
				}), h.image=n.docHeaderImage.order);
				n.docHeader && h.image>h.text && s.header({paddingBottom:10}).text(n.docHeader.text, n.docHeader);
				{
					if(n.docHeaderImage) {
						var r=m.defer();
						return pdfjs.load(n.docHeaderImage.url, function(t, i) {
							if(!t) {
								var e=new pdfjs.Image(i);
								s.header({paddingBottom:10}).image(e, n.docHeaderImage), n.docHeader && h.image<h.text && s.header({paddingBottom:10}).text(n.docHeader.text, n.docHeader);
							}
							r.resolve(s.render());
						}), r;
					}
					return m.resolve(s.render());
				}
			}(h, n);
		});
	}

	function As(t, i, e) {'after'==i && t.text().br(), 'string'== typeof e && (e={text:e}), t.text(e.text, e.options || {}), 'before'==i && t.text().br();}

	function Ts(t) {
		var i=!document.body.contains(t);
		return i && (document.body.appendChild(t), t.style.position='absolute', t.style.left='-9999px'), window.html2canvas(t, {
			background:'#FFF',
			logging:!1,
			useCORS:!0
		}).then(function(t) {
			for(var i=t.toDataURL('image/jpeg'), e=window.atob(i.split('base64,')[1]), s=e.length, n=new Uint8Array(s), h=0; h<s; h++) n[h]=e.charCodeAt(h);
			return new pdfjs.Image(n.buffer);
		})['finally'](function() {i && document.body.removeChild(t);});
	}

	function Fs(t, i, e) {
		var s, n=i.orientation && 'landscape'==i.orientation?'height':'width';
		if(e) {
			s=80;
			for(var h=0; h<e.length; h++) s+=e[h].width;
		} else s=t.$width?t.$width:t[n];
		i[n]=Math.max(i[n] || 0, s || 0);
	}

	function Vs(t, i) {
		var e=t.scheme, s=t.exportData, n=t.viewOptions, h=t.styles;
		n.header=R(n.header) || !0===n.header?{}:n.header, n.footer=R(n.footer) || !0===n.footer?{}:n.footer, n.table=n.table || {};
		for(var r=!1===n.header?0:e[0].header.length, o=!1!==n.footer && e[0].footer?e[0].footer.length:0, a=[], u=0; u<e.length; u++) a[u]=e[u].width;
		var c=H.extend(n.table, {
			borderWidth:1,
			height:20,
			lineHeight:1.1,
			borderColor:15658734,
			backgroundColor:16777215,
			color:6710886,
			textAlign:'left',
			paddingRight:10,
			paddingLeft:10,
			headerRows:r,
			widths:a.length?a:['100%']
		}), f=i.table(c);
		if(r) for(var l=H.extend(n.header, {
			borderRightColor:11587299,
			borderBottomColor:11587299,
			color:4868682,
			backgroundColor:13820911,
			height:27,
			lineHeight:1.2
		}), d=0; d<r; d++) for(var v=f.tr(l), _=0; _<e.length; _++) {
			var p=h?Ms(d, _, h):{};
			v.td(e[_].header[d].toString(), p);
		}
		for(var m=0; m<s.length; m++) for(var b=f.tr({}), g=0; g<s[m].length; g++) {
			var w=h?Ms(m+r, g, h):{};
			b.td(s[m][g], w);
		}
		if(o) for(var x=H.extend(n.footer, {
			borderRightColor:15658734,
			borderBottomColor:15658734,
			backgroundColor:16448250,
			color:6710886,
			height:27,
			lineHeight:1.2
		}), y=0; y<o; y++) for(var M=r+s.length, S=f.tr(x), k=0; k<e.length; k++) {
			var C=h?Ms(y+M, k, h):{};
			S.td(e[k].footer[y].toString(), C);
		}
	}

	function zs(t) {
		var i=t.cloneNode(!1);
		if(t.tagName) {
			var e=window.getComputedStyle(t);
			i.style.cssText=e.cssText;
		}
		for(var s=0; s<t.childNodes.length; s++) i.appendChild(zs(t.childNodes[s]));
		return i;
	}

	var Bs=function(t, v) {
		(v=v || {}).export_mode='excel', t=$(t)?t:[t];
		for(var _=[], i=0; i<t.length; i++) {
			t[i].id || (t[i]={id:t[i]});
			var e=oi(t[i].id), s=H.extend(t[i].options || {}, v);
			if(e && e.$exportView && (e=e.$exportView(s)), $(e)) _=_.concat(e); else if(e.data && e.data.pull) {
				var n=Ss(e, s);
				_.push({
					scheme:n,
					exportData:ks(e, s, n),
					spans:s.spans?Ps(e, s):[],
					viewOptions:s
				});
			}
		}
		if(v.dataOnly) return _;
		var p=m.defer();
		return Ft(q.cdn+'/extras/xlsx.core.styles.min.js').then(function() {
			if(!_.length) return p.reject(ws);
			for(var t={
				SheetNames:[],
				Sheets:{},
				Workbook:{
					WBProps:{},
					Names:[]
				}
			}, i=0; i<_.length; i++) {
				for(var e=_[i].viewOptions, s=_[i].scheme, n=_[i].exportData, h=_[i].spans, r=_[i].ranges || [], o=Es(n, s, h, _[i].styles || [], e), a=(e.name || 'Data'+(i+1)).replace(/[*?:[\]\\/]/g, '').replace(/&/g, '&amp;').substring(0, 31), u=i; -1!=t.SheetNames.indexOf(a);) a='Data'+ ++u;
				t.SheetNames.push(a), t.Sheets[a]=o, t.Workbook.Names=t.Workbook.Names.concat(r);
			}
			var c=XLSX.write(t, {
				bookType:'xlsx',
				bookSST:!1,
				type:'binary'
			}), f=(v.filename || 'Data')+'.xlsx', l=new Blob([function d(t) {
				for(var i=new ArrayBuffer(t.length), e=new Uint8Array(i), s=0; s!=t.length; ++s) e[s]=255&t.charCodeAt(s);
				return i;
			}(c)], {type:'application/xlsx'});
			return !1!==v.download && kt(l, f), p.resolve(l), p;
		});
	};
	var Hs={
		number:'n',
		date:'n',
		string:'s',
		'boolean':'b'
	}, Rs='_table';

	function Es(t, i, e, s, n) {
		for(var h, r={}, o={
			s:{
				c:1e7,
				r:1e7
			},
			e:{
				c:0,
				r:0
			}
		}, a=0; a!=t.length; ++a) for(var u=0; u!=t[a].length; ++u) {
			o.s.r>a && (o.s.r=a), o.s.c>u && (o.s.c=u), o.e.r<a && (o.e.r=a), o.e.c<u && (o.e.c=u);
			var c={v:t[a][u]};
			if(null!==c.v) {
				var f=XLSX.utils.encode_cell({
					c:u,
					r:a
				}), l=c.v.toString(), d='='===l.charAt(0);
				if(s) {
					var v=Ms(a, u, s);
					v.format && (c.z=v.format, delete v.format), v.type && (c.t=Hs[v.type], delete v.type), c.s=v;
				}
				if((n.docHeader?2:0)+i[0].header.length<=a && !d) {
					var _=i[u];
					_.type && !c.t && (c.t=Hs[_.type] || ''), _.format && !c.z && (c.z=_.format);
				}
				c.v instanceof Date?(c.t=c.t || 'n', c.z=c.z || XLSX.SSF[Rs][14], c.v=(h=c.v, void 0, (25569+(h.getTime()-60*h.getTimezoneOffset()*1e3)/864e5).toString().substr(0, 20))):d?(c.t=c.t || 'n', c.f=c.v.substring(1), delete c.v):c.t || ('boolean'== typeof c.v?c.t='b':'number'== typeof c.v || parseFloat(c.v)==c.v?(c.v=1*c.v, c.t='n'):(c.v=l, c.t='s')), r[f]=c;
			}
		}
		return o.s.c<1e7 && (r['!ref']=XLSX.utils.encode_range(o)), r['!rows']=function p(t) {
			for(var i in t) t[i]={
				hpx:t[i],
				hpt:.75*t[i]
			};
			return t;
		}(i.heights), r['!cols']=function m(t) {
			for(var i=[], e=0; e<t.length; e++) i.push({wch:t[e].width});
			return i;
		}(i), e.length && (r['!merges']=e), r;
	}

	function Ps(t, i) {
		var e=t.getColumnConfig, s=t.ol, n=[];
		if(e) {
			if(!1!==i.header && (n=js(t, i, 'header', n)), s) {
				var h=i.xCorrection || 0, r=i.yCorrection || 0;
				for(var o in s) {
					var a=s[o];
					for(var u in a) {
						var c=t.getColumnIndex(u)-h, f=t.getIndexById(o)-r;
						if(!(c<0 || f<0)) {
							var l=c+a[u][0]-1, d=f+(a[u][1]-1);
							n.push({
								s:{
									c:c,
									r:f
								},
								e:{
									c:l,
									r:d
								}
							});
						}
					}
				}
			}
			!1!==i.footer && (n=js(t, i, 'footer', n));
		}
		return n;
	}

	function js(t, i, e, s) {
		for(var n=t.config.columns, h=(i.docHeader?2:0)+('header'==e?0:(!1!==i.header?t.rl.length:0)+t.count()), r=0; r<n.length; r++) for(var o=n[r][e], a=0; a<o.length; a++) o[a] && (o[a].colspan || o[a].rowspan) && s.push({
			s:{
				c:r,
				r:a+h
			},
			e:{
				c:r+(o[a].colspan || 1)-1,
				r:a+(o[a].rowspan || 1)-1+h
			}
		});
		return s;
	}

	function Ns(t, i) {
		if(-1!=t.type.indexOf('prompt')) if(!1===i) t.rr.reject(); else {
			var e=t.cl.querySelector('.webix_popup_input'), s=e.querySelector('input');
			if(t.input.required && !s.value) return t.input.invalid= !0, void yt(e, 'webix_popup_invalid');
			i=s.value || '', t.rr.resolve(i);
		}
		-1!=t.type.indexOf('confirm') && !1===i?t.rr.reject():t.rr.resolve(i);
		var n=t.callback;
		n && n(i, t.details), Qs.hide(t.id);
	}

	function Ls(t) {
		var i=Qs.order.length;
		if(0<i && tn.keyboard) {
			var e=(t=t || window.event).which || t.keyCode, s=Qs.pull[Qs.order[i-1]], n=-1!=s.type.indexOf('prompt');
			return (13==e || 32==e && !n) && Ns(s, !0), 27==e && Ns(s, !1), n || gt(t), !(t.cancelBubble= !0);
		}
	}

	function Os(t, i) {
		var e, s=i || document.body;
		if(R(s.modality)) {
			if((e=ft('DIV', {
				'class':'webix_modal_cover',
				style:'position:'+(i?'absolute':'fixed')+';'
			})).onkeydown=Ls, i) {
				var n=window.getComputedStyle(i).position;
				'fixed'!=n && 'absolute'!=n && 'sticky'!=n && 'relative'!=n && (s.style.position='relative');
			}
			s.appendChild(e), s.modality=1;
		} else t?s.modality++:s.modality--;
		if(t && 1===s.modality || 0===s.modality) if(e) e.style.display='inline-block'; else {
			e=s.querySelectorAll('.webix_modal_cover');
			for(var h=0; h<e.length; h++) if(e[h].parentNode==s) {
				e[h].style.display=1==s.modality?'inline-block':'none';
				break;
			}
		}
	}

	function Ws(t, i, e) {return '<div role=\'button\' tabindex=\'0\' aria-label=\''+t+'\' class=\'webix_popup_button'+(e?' '+e:'')+'\' result=\''+i+'\' ><div>'+t+'</div></div>';}

	function Us(s, t, i, e) {
		var n=document.createElement('DIV'), h=s.css?' '+s.css:'';
		n.className='webix_modal_box webix_'+s.type+h, n.setAttribute('webixbox', 1), n.setAttribute('role', 'alertdialog'), n.setAttribute('aria-label', s.title || ''), n.setAttribute('tabindex', '0');
		var r='';
		if(s.width && (n.style.width=s.width+(ue.isNumber(s.width)?'px':'')), s.height && (n.style.height=s.height+(ue.isNumber(s.height)?'px':'')), s.title && (r+='<div class="webix_popup_title">'+s.title+'</div>'), r+='<div class="webix_popup_text'+(e?' webix_popup_label':'')+'"><span>'+(s.content?'':s.text || '')+'</span></div>', r+='<div  class="webix_popup_controls">', e && (r+=function c(t) {return '<div tabindex=\'0\' class=\'webix_popup_input webix_el_text'+(t.required?' webix_required':'')+'\'><input value=\''+Yt.escape(t.value || '')+'\' placeholder=\''+Yt.escape(t.placeholder || '')+'\'></input></div>';}(s.input)), i && t && (r+=Ws(s.ok || I.message.ok, !0, 'confirm')), (r+=Ws(s.cancel || I.message.cancel, !1)), s.buttons && !t && !i) for(var o=0; o<s.buttons.length; o++) r+=Ws(s.buttons[o], o);
		if(r+='</div>', n.innerHTML=r, s.content) {
			var a=s.content;
			'string'== typeof a && (a=document.getElementById(a)), 'none'==a.style.display && (a.style.display=''), n.childNodes[s.title?1:0].appendChild(a);
		}
		if(-1!=s.type.indexOf('prompt')) {
			var u=n.querySelector('.webix_popup_input');
			u.querySelector('input').oninput=function() {s.input.invalid && (Mt(u, 'webix_popup_invalid'), s.input.invalid= !1);};
		}
		return n.onclick=function(t) {
			var i=(t=t || window.event).target;
			if(i.className || (i=i.parentNode), -1!=i.className.indexOf('webix_popup_button')) {
				var e=i.getAttribute('result');
				Ns(s, e='true'==e || 'false'!=e && e);
			}
			t.cancelBubble= !0;
		}, s.cl=n;
	}

	function Ys(t, i, e, s) {
		var n=t.tagName?t:Us(t, i, e, s), h=t.container?t.container.offsetWidth:window.innerWidth || document.documentElement.offsetWidth, r=t.container?t.container.offsetHeight:window.innerHeight || document.documentElement.offsetHeight;
		t.container && (n.style.position='absolute'), C((t.container || document.body).appendChild(n)), Os(!0, t.container);
		var o=t.left || Math.abs(Math.floor((h-n.offsetWidth)/2)), a=t.top || Math.abs(Math.floor((r-n.offsetHeight)/2));
		return 'top'==t.position?n.style.top='-3px':n.style.top=a+'px', n.style.left=o+'px', n.onkeydown=Ls, n.focus(), t.id?Qs.pull[t.id] && Qs.hide(t.id):t.id=ui('modalbox'), Qs.order.push(t.id), (Qs.pull[t.id]=t).rr=m.defer(), t.rr;
	}

	function qs(t) {return Ys(t, !0);}

	function Gs(t) {return Ys(t, !0, !0);}

	function Xs(t) {return Ys(t);}

	function Js(t) {return Ys(t, !0, !0, !0);}

	function Ks(t, i, e) {
		return 'object'!=M(t) && ('function'== typeof i && (e=i, i=''), t={
			text:t,
			type:i,
			callback:e
		}), t;
	}

	function Zs() {
		var t=Ks.apply(this, arguments);
		return t.type=t.type || 'confirm', Gs(t);
	}

	function Qs() {
		var t=Ks.apply(this, arguments);
		return t.type=t.type || 'alert', Xs(t);
	}

	function tn(t, i, e, s) {
		switch((t=function n(t, i, e, s) {
			return 'object'!=M(t) && (t={
				text:t,
				type:i,
				expire:e,
				id:s
			}), t.id=t.id || ui('message'), t.expire=t.expire || en.expire, t;
		}.apply(this, arguments)).type=t.type || 'info', t.type.split('-')[0]) {
		case'alert':
			return qs(t);
		case'confirm':
			return Gs(t);
		case'modalbox':
			return Xs(t);
		case'prompt':
			return Js(t);
		default:
			return function h(t) {
				en.area || (en.area=document.createElement('DIV'), en.area.className='webix_message_area', en.area.style[en.position]='5px', document.body.appendChild(en.area)), en.area.setAttribute('role', 'alert'), en.area.setAttribute('aria-atomic', !0), en.hide(t.id);
				var i=document.createElement('DIV');
				return i.innerHTML='<div>'+t.text+'</div>', i.className='webix_message webix_'+t.type, i.onclick=function() {t && en.hide(t.id), t=null;}, 'bottom'==en.position && en.area.firstChild?en.area.insertBefore(i, en.area.firstChild):en.area.appendChild(i), 0<t.expire && (en.timers[t.id]=window.setTimeout(function() {en.hide(t.id);}, t.expire)), i.style.height=i.offsetHeight-2+'px', en.pull[t.id]=i, i=null, t.id;
			}(t);
		}
	}

	Zt(document, 'keydown', Ls, {capture:!0}), Qs.pull={}, Qs.order=[], Qs.hide=function(t) {
		if(t && Qs.pull[t]) {
			var i=Qs.pull[t].cl;
			i && (i.parentNode.removeChild(i), Qs.order.splice(Qs.order.indexOf(t), 1), Os(!1, Qs.pull[t].container), delete Qs.pull[t]);
		}
	}, Qs.hideAll=function() {for(var t in Qs.pull) this.hide(t);};
	var en=tn;
	en.expire=4e3, en.keyboard= !0, en.position='top', en.pull={}, en.timers={}, en.hideAll=function() {for(var t in en.pull) en.hide(t);}, en.hide=function(t) {
		var i=en.pull[t];
		i && i.parentNode && (window.setTimeout(function() {i.parentNode.removeChild(i), i=null;}, 2e3), i.style.height=0, i.className+=' hidden', en.area.removeAttribute('role'), en.timers[t] && window.clearTimeout(en.timers[t]), delete en.pull[t]);
	}, t('message', tn);
	var sn={
		startOnMonday:!1,
		toFixed:function(t, i) {return t<10 && (t='0'+t), i && t<100 && (t='0'+t), t;},
		weekStart:function(t) {
			var i=(t=this.copy(t)).getDay();
			return this.startOnMonday && (0===i?i=6:i--), this.datePart(this.add(t, -1*i, 'day'));
		},
		monthStart:function(t) {return (t=this.copy(t)).setDate(1), this.datePart(t);},
		yearStart:function(t) {return (t=this.copy(t)).setMonth(0), this.monthStart(t);},
		dayStart:function(t) {return this.datePart(t, !0);},
		dateToStr:function(h, e) {
			if('function'== typeof h) return h;
			if(q.strict) return function(i) {
				if(!i) return '';
				i.getMonth || (i=I.parseFormatDate(i));
				var s='', n=0;
				return h.replace(/%[a-zA-Z]/g, function(e, t) {
					s+=h.slice(n, t);
					s+=function(t) {
						if('%d'==e) return sn.toFixed(t.getDate());
						if('%m'==e) return sn.toFixed(t.getMonth()+1);
						if('%j'==e) return t.getDate();
						if('%n'==e) return t.getMonth()+1;
						if('%y'==e) return sn.toFixed(t.getFullYear()%100);
						if('%Y'==e) return t.getFullYear();
						if('%D'==e) return I.calendar.dayShort[t.getDay()];
						if('%l'==e) return I.calendar.dayFull[t.getDay()];
						if('%M'==e) return I.calendar.monthShort[t.getMonth()];
						if('%F'==e) return I.calendar.monthFull[t.getMonth()];
						if('%h'==e) return sn.toFixed((t.getHours()+11)%12+1);
						if('%g'==e) return (t.getHours()+11)%12+1;
						if('%G'==e) return t.getHours();
						if('%H'==e) return sn.toFixed(t.getHours());
						if('%i'==e) return sn.toFixed(t.getMinutes());
						if('%a'==e) return 11<t.getHours()?I.pm[0]:I.am[0];
						if('%A'==e) return 11<t.getHours()?I.pm[1]:I.am[1];
						if('%s'==e) return sn.toFixed(t.getSeconds());
						if('%S'==e) return sn.toFixed(t.getMilliseconds(), !0);
						if('%W'==e) return sn.toFixed(Date.getISOWeek(t));
						if('%c'!=e) return e;
						var i=t.getFullYear();
						return i+='-'+sn.toFixed(t.getMonth()+1), i+='-'+sn.toFixed(t.getDate()), i+='T', i+=sn.toFixed(t.getHours()), i+=':'+sn.toFixed(t.getMinutes()), i+=':'+sn.toFixed(t.getSeconds());
					}(i), n=t+2;
				}), s+=h.slice(n, h.length);
			};
			h=h.replace(/%[a-zA-Z]/g, function(t) {
				switch(t) {
				case'%d':
					return '"+wDate.toFixed(date.getDate())+"';
				case'%m':
					return '"+wDate.toFixed((date.getMonth()+1))+"';
				case'%j':
					return '"+date.getDate()+"';
				case'%n':
					return '"+(date.getMonth()+1)+"';
				case'%y':
					return '"+wDate.toFixed(date.getFullYear()%100)+"';
				case'%Y':
					return '"+date.getFullYear()+"';
				case'%D':
					return '"+i18n.calendar.dayShort[date.getDay()]+"';
				case'%l':
					return '"+i18n.calendar.dayFull[date.getDay()]+"';
				case'%M':
					return '"+i18n.calendar.monthShort[date.getMonth()]+"';
				case'%F':
					return '"+i18n.calendar.monthFull[date.getMonth()]+"';
				case'%h':
					return '"+wDate.toFixed((date.getHours()+11)%12+1)+"';
				case'%g':
					return '"+((date.getHours()+11)%12+1)+"';
				case'%G':
					return '"+date.getHours()+"';
				case'%H':
					return '"+wDate.toFixed(date.getHours())+"';
				case'%i':
					return '"+wDate.toFixed(date.getMinutes())+"';
				case'%a':
					return '"+(date.getHours()>11?i18n.pm[0]:i18n.am[0])+"';
				case'%A':
					return '"+(date.getHours()>11?i18n.pm[1]:i18n.am[1])+"';
				case'%s':
					return '"+wDate.toFixed(date.getSeconds())+"';
				case'%S':
					return '"+wDate.toFixed(date.getMilliseconds(), true)+"';
				case'%W':
					return '"+wDate.toFixed(wDate.getISOWeek(date))+"';
				case'%c':
					var i='"+date.getFullYear()+"';
					return i+='-"+wDate.toFixed((date.getMonth()+1))+"', i+='-"+wDate.toFixed(date.getDate())+"', i+='T', i+='"+wDate.toFixed(date.getHours())+"', i+=':"+wDate.toFixed(date.getMinutes())+"', i+=':"+wDate.toFixed(date.getSeconds())+"', !0===e && (i+='Z'), i;
				default:
					return t;
				}
			}), !0===e && (h=h.replace(/date\.get/g, 'date.getUTC'));
			var i=new Function('date', 'i18n', 'wDate', 'if (!date) return \'\'; if (!date.getMonth) date=i18n.parseFormatDate(date);  return "'+h+'";');
			return function(t) {return i(t, I, sn);};
		},
		strToDate:function(t, h) {
			if('function'== typeof t) return t;
			var r, i, e, o=t.match(/%[a-zA-Z]/g), s='var temp=date.split(/[\\s\\./\\-\\:\\,]+/g); if(!temp.join(\'\')){return \'\'}';
			if(!I.calendar.monthShort_hash) {
				for(e=I.calendar.monthShort, i=I.calendar.monthShort_hash={}, r=0; r<e.length; r++) i[e[r]]=r;
				for(e=I.calendar.monthFull, i=I.calendar.monthFull_hash={}, r=0; r<e.length; r++) i[e[r]]=r;
			}
			if(q.strict) return function(t) {
				if(!t) return '';
				if('object'==M(t)) return t;
				var i=t.split(/[\s./\-:,]+/g);
				if(!i.join('')) return '';
				var e=[0, 0, 1, 0, 0, 0, 0];
				for(r=0; r<o.length; r++) {
					var s=o[r];
					if('%y'==s) e[0]=1*i[r]+(30<i[r]?1900:2e3); else if('%Y'==s) e[0]=1*(i[r] || 0), e[0]<30 && (e[0]+=2e3); else if('%n'==s || '%m'==s) e[1]=(i[r] || 1)-1; else if('%M'==s) e[1]=I.calendar.monthShort_hash[i[r]] || 0; else if('%F'==s) e[1]=I.calendar.monthFull_hash[i[r]] || 0; else if('%j'==s || '%d'==s) e[2]=i[r] || 1; else if('%g'==s || '%G'==s || '%h'==s || '%H'==s) e[3]=i[r] || 0; else if('%a'==s) e[3]=e[3]%12+((i[r] || '')==I.am[0]?0:12); else if('%A'==s) e[3]=e[3]%12+((i[r] || '')==I.am[1]?0:12); else if('%i'==s) e[4]=i[r] || 0; else if('%s'==s) e[5]=i[r] || 0; else if('%S'==s) e[6]=i[r] || 0; else if('%c'==s) {
						var n=/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)(\+.*|)/g.exec(t);
						e[0]=1*(n[1] || 0), e[0]<30 && (e[0]+=2e3), e[1]=(n[2] || 1)-1, e[2]=n[3] || 1, e[3]=n[4] || 0, e[4]=n[5] || 0, e[5]=n[6] || 0;
					}
				}
				return h?new Date(Date.UTC(e[0], e[1], e[2], e[3], e[4], e[5], e[6])):new Date(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
			};
			for(r=0; r<o.length; r++) switch(o[r]) {
			case'%j':
			case'%d':
				s+='set[2]=temp['+r+']||1;';
				break;
			case'%n':
			case'%m':
				s+='set[1]=(temp['+r+']||1)-1;';
				break;
			case'%y':
				s+='set[0]=temp['+r+']*1+(temp['+r+']>30?1900:2000);';
				break;
			case'%g':
			case'%G':
			case'%h':
			case'%H':
				s+='set[3]=temp['+r+']||0;';
				break;
			case'%i':
				s+='set[4]=temp['+r+']||0;';
				break;
			case'%Y':
				s+='set[0]=(temp['+r+']||0)*1; if (set[0]<30) set[0]+=2000;';
				break;
			case'%a':
				s+='set[3]=set[3]%12+(temp['+r+']==i18n.am[0]?0:12);';
				break;
			case'%A':
				s+='set[3]=set[3]%12+(temp['+r+']==i18n.am[1]?0:12);';
				break;
			case'%s':
				s+='set[5]=temp['+r+']||0;';
				break;
			case'%S':
				s+='set[6]=temp['+r+']||0;';
				break;
			case'%M':
				s+='set[1]=i18n.calendar.monthShort_hash[temp['+r+']]||0;';
				break;
			case'%F':
				s+='set[1]=i18n.calendar.monthFull_hash[temp['+r+']]||0;';
				break;
			case'%c':
				s+='var res = date.split(\'T\');', s+='if(res[0]){ var d = res[0].split(\'-\');', s+='set[0]= (d[0]||0)*1; if (set[0]<30) set[0]+=2000;', s+='set[1]= (d[1]||1)-1;', s+='set[2]= d[2]||1;}', s+='if(res[1]){ var t = res[1].split(\':\');', s+='set[3]= t[0]||0;', s+='set[4]= t[1]||0;', s+='set[5]= parseInt(t[2])||0;}';
			}
			var n='set[0],set[1],set[2],set[3],set[4],set[5],set[6]';
			h && (n=' Date.UTC('+n+')');
			var a=new Function('date', 'i18n', 'if (!date) return \'\'; if (typeof date == \'object\') return date; var set=[0,0,1,0,0,0,0]; '+s+' return new Date('+n+');');
			return function(t) {return a(t, I);};
		},
		getISOWeek:function(t) {
			if(!t) return !1;
			var i=t.getDay();
			0===i && (i=7);
			var e=new Date(t.valueOf());
			e.setDate(t.getDate()+(4-i));
			var s=e.getFullYear(), n=Math.floor((e.getTime()-new Date(s, 0, 1).getTime())/864e5);
			return 1+Math.floor(n/7);
		},
		getUTCISOWeek:function(t) {return this.getISOWeek(t);},
		fl:function(t, i, e, s) {
			if(e) {
				var n=s(t, i);
				if(n) for(var h=0<e?1:-1; n;) t.setHours(t.getHours()+h), n=s(t, i), h+=0<e?1:-1;
			}
		},
		add:function(t, i, e, s) {
			s && (t=this.copy(t));
			var n=sn.copy(t);
			switch(e) {
			case'day':
				t.setDate(t.getDate()+i), this.fl(t, n, i, function(t, i) {return sn.datePart(i, !0).valueOf()==sn.datePart(t, !0).valueOf();});
				break;
			case'week':
				t.setDate(t.getDate()+7*i), this.fl(t, n, 7*i, function(t, i) {return sn.datePart(i, !0).valueOf()==sn.datePart(t, !0).valueOf();});
				break;
			case'month':
				t.setMonth(t.getMonth()+i), this.fl(t, n, i, function(t, i) {return i.getMonth()==t.getMonth() && i.getYear()==t.getYear();});
				break;
			case'year':
				t.setYear(t.getFullYear()+i), this.fl(t, n, i, function(t, i) {return i.getFullYear()==t.getFullYear();});
				break;
			case'hour':
				t.setHours(t.getHours()+i), this.fl(t, n, i, function(t, i) {return i.getHours()==t.getHours() && Date.datePart(i, !0)==Date.datePart(t, !0);});
				break;
			case'minute':
				t.setMinutes(t.getMinutes()+i);
				break;
			default:
				sn.add[e](t, i, e);
			}
			return t;
		},
		datePart:function(t, i) {
			i && (t=this.copy(t));
			var e=this.copy(t);
			return e.setHours(0), e.getDate()!=t.getDate()?t.setHours(1):t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t;
		},
		timePart:function(t, i) {return i && (t=this.copy(t)), (t.valueOf()/1e3-60*t.getTimezoneOffset())%86400;},
		copy:function(t) {return new Date(t.valueOf());},
		equal:function(t, i) {return !(!t || !i) && t.valueOf()===i.valueOf();},
		isHoliday:function(t) {if(0===(t=t.getDay()) || 6==t) return 'webix_cal_event';}
	}, nn={
		getConfig:function(t) {
			var i={
				decimalSize:0,
				groupSize:999,
				prefix:'',
				sufix:''
			}, e=t.split(/[0-9].*[0-9]/g);
			e[0].length && (i.prefix=e[0]), e[1].length && (i.sufix=e[1]), (i.prefix || i.sufix) && (t=t.substr(i.prefix.length, t.length-i.prefix.length-i.sufix.length));
			var s=t.indexOf('1');
			0<s && (i.prefix=t.substr(0, s), t=t.substr(s));
			var n=t.indexOf('0');
			0<n && (i.decimalSize=t.length-n, i.decimalDelimiter=t[n-1], t=t.substr(0, n-1));
			var h=t.match(/[^0-9]/);
			return h && (i.groupSize=t.length-h.index-1, i.groupDelimiter=t[h.index]), i;
		},
		parse:function(t, i) {
			if(!t || 'string'!= typeof t) return t;
			i.prefix && (t=t.toLowerCase().replace(i.prefix.toLowerCase() || '', '')), i.sufix && (t=t.toLowerCase().replace(i.sufix.toLowerCase() || '', ''));
			var e='';
			if(i.decimalDelimiter) {
				var s=t.indexOf(i.decimalDelimiter);
				-1<s && (e=(e=t.substr(s+1).replace(/[^0-9]/g, '')).substr(0, Math.min(e.length, i.decimalSize)), t=t.substr(0, s));
			}
			var n='-'===t[0]?-1:1;
			return (t=t.replace(/[^0-9]/g, '')) || (t='0'), e && (t+='.'+e), parseFloat(t)*n;
		},
		format:function(t, i) {
			if(''===t || void 0===t) return t;
			i=i || I;
			var e=(t=parseFloat(t))<0?'-':'';
			t=Math.abs(t), i.decimalOptional || (t=t.toFixed(i.decimalSize));
			var s=t.toString();
			s=s.split('.');
			var n='';
			if(i.groupSize) {
				var h=i.groupSize, r=s[0].length;
				do {
					n=(0<(r-=h)?s[0].substr(r, h):s[0].substr(0, h+r))+(n?i.groupDelimiter+n:'');
				} while(0<r);
			} else n=s[0];
			return s=i.decimalSize?e+n+(s[1]?i.decimalDelimiter+s[1]:''):e+n, i.prefix || i.sufix?i.prefix+s+i.sufix:s;
		},
		numToStr:function(i) {return function(t) {return nn.format(t, i);};}
	};
	var hn=['fullDateFormat', 'timeFormat', 'dateFormat', 'longDateFormat', 'parseFormat', 'parseTimeFormat'];
	I.setLocale=function(t) {
		'string'== typeof t && (t=I.locales[t]), t && (t.priceSettings=_(t.priceSettings || t), function r(t, i) {for(var e in i) 'object'!=M(i[e]) || $(i[e])?t[e]=i[e]:(t[e] || (t[e]={}), r(t[e], i[e]));}(I, t), delete I.calendar.monthShort_hash, delete I.calendar.monthFull_hash);
		for(var i=0; i<hn.length; i++) {
			var e=hn[i], s=I[e+'UTC'];
			I[e+'Str']=sn.dateToStr(I[e], s), I[e+'Date']=sn.strToDate(I[e], s);
		}
		var n=Yt(I.price), h=I.priceSettings || I;
		I.intFormat=nn.numToStr({
			groupSize:I.groupSize,
			groupDelimiter:I.groupDelimiter,
			decimalSize:0
		}), I.priceFormat=function(t) {return n(nn.format(t, h));}, I.numberFormat=nn.format;
	}, I.locales={
		'en-US':{
			groupDelimiter:',',
			groupSize:3,
			decimalDelimiter:'.',
			decimalSize:2,
			dateFormat:'%m/%d/%Y',
			timeFormat:'%h:%i %A',
			longDateFormat:'%d %F %Y',
			fullDateFormat:'%m/%d/%Y %h:%i %A',
			am:['am', 'AM'],
			pm:['pm', 'PM'],
			price:'${obj}',
			priceSettings:{
				groupDelimiter:',',
				groupSize:3,
				decimalDelimiter:'.',
				decimalSize:2
			},
			fileSize:['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb'],
			calendar:{
				monthFull:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				monthShort:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				dayFull:['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				dayShort:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				hours:'Hours',
				minutes:'Minutes',
				done:'Done',
				clear:'Clear',
				today:'Today'
			},
			dataExport:{
				page:'Page',
				of:'of'
			},
			PDFviewer:{
				of:'of',
				automaticZoom:'Automatic Zoom',
				actualSize:'Actual Size',
				pageFit:'Page Fit',
				pageWidth:'Page Width',
				pageHeight:'Page Height',
				enterPassword:'Enter password',
				passwordError:'Wrong password'
			},
			aria:{
				calendar:'Calendar',
				increaseValue:'Increase value',
				decreaseValue:'Decrease value',
				navMonth:['Previous month', 'Next month'],
				navYear:['Previous year', 'Next year'],
				navDecade:['Previous decade', 'Next decade'],
				dateFormat:'%d %F %Y',
				monthFormat:'%F %Y',
				yearFormat:'%Y',
				hourFormat:'Hours: %h %A',
				minuteFormat:'Minutes: %i',
				removeItem:'Remove item',
				pages:['First page', 'Previous page', 'Next page', 'Last page'],
				page:'Page',
				headermenu:'Header menu',
				openGroup:'Open column group',
				closeGroup:'Close column group',
				closeTab:'Close tab',
				showTabs:'Show more tabs',
				resetTreeMap:'Reset tree map',
				navTreeMap:'Level up',
				nextTab:'Next tab',
				prevTab:'Previous tab',
				multitextSection:'Add section',
				multitextextraSection:'Remove section',
				showChart:'Show chart',
				hideChart:'Hide chart',
				resizeChart:'Resize chart'
			},
			richtext:{
				underline:'Underline',
				bold:'Bold',
				italic:'Italic'
			},
			combo:{
				select:'Select',
				selectAll:'Select all',
				unselectAll:'Unselect all'
			},
			message:{
				ok:'OK',
				cancel:'Cancel'
			},
			comments:{
				send:'Send',
				confirmMessage:'The comment will be removed. Are you sure?',
				edit:'Edit',
				remove:'Remove',
				placeholder:'Type here..',
				moreComments:'More comments'
			},
			filter:{
				less:'less',
				lessOrEqual:'less or equal',
				greater:'greater',
				greaterOrEqual:'greater or equal',
				contains:'contains',
				notContains:'not contains',
				equal:'equal',
				notEqual:'not equal',
				beginsWith:'begins with',
				notBeginsWith:'not begins with',
				endsWith:'ends with',
				notEndsWith:'not ends with',
				between:'between',
				notBetween:'not between'
			}
		}
	}, I.setLocale('en-US');
	var rn={
		prefix:function(e, s) {
			return e+='.', {
				put:function(t, i) {return s.put(e+t, i);},
				get:function(t) {return s.get(e+t);},
				remove:function(t) {return s.remove(e+t);}
			};
		}
	};
	rn.local={
		put:function(t, i) {t && window.JSON && window.localStorage && window.localStorage.setItem(t, c(i));},
		get:function(t) {
			if(t && window.JSON && window.localStorage) {
				var i=window.localStorage.getItem(t);
				return i?zt.json.toObject(i):null;
			}
			return null;
		},
		remove:function(t) {t && window.JSON && window.localStorage && window.localStorage.removeItem(t);},
		clear:function() {window.localStorage.clear();}
	}, rn.session={
		put:function(t, i) {t && window.JSON && window.sessionStorage && window.sessionStorage.setItem(t, c(i));},
		get:function(t) {
			if(t && window.JSON && window.sessionStorage) {
				var i=window.sessionStorage.getItem(t);
				return i?zt.json.toObject(i):null;
			}
			return null;
		},
		remove:function(t) {
			t && window.JSON && window.sessionStorage && window.sessionStorage.removeItem(t);
		},
		clear:function() {window.sessionStorage.clear();}
	}, rn.cookie={
		put:function(t, i, e, s) {t && window.JSON && (document.cookie=t+'='+escape(c(i))+(s && s instanceof Date?';expires='+s.toUTCString():'')+(e?';domain='+e:'')+(q.https?';secure':''));},
		getRaw:function(t) {
			for(var i=document.cookie.split(';'), e='', s='', n=0; n<i.length; n++) {
				if((e=i[n].split('='))[0].replace(/^\s+|\s+$/g, '')==t) return !0, 1<e.length && (s=unescape(e[1].replace(/^\s+|\s+$/g, ''))), s;
				e=null, '';
			}
			return null;
		},
		get:function(t) {
			if(t && window.JSON) {
				var i=this.getRaw(t);
				return i?zt.json.toObject(unescape(i)):null;
			}
			return null;
		},
		remove:function(t, i) {t && this.getRaw(t) && (document.cookie=t+'='+(i?';domain='+i:'')+';expires=Thu, 01-Jan-1970 00:00:01 GMT');},
		clear:function(t) {for(var i=document.cookie.split(';'), e=0; e<i.length; e++) document.cookie=/^[^=]+/.exec(i[e])[0]+'='+(t?';domain='+t:'')+';expires=Thu, 01-Jan-1970 00:00:01 GMT';}
	}, q.printPPI=96, q.printMargin=.75*q.printPPI;
	var on={
		a4:'A4',
		a3:'A3',
		letter:'letter'
	}, an={
		page:!0,
		data:!0
	}, un={
		portrait:!0,
		landscape:!0
	}, cn={
		A3:{
			width:11.7,
			height:16.5
		},
		A4:{
			width:8.27,
			height:11.7
		},
		letter:{
			width:8.5,
			height:11
		}
	};

	function fn(t, i) {
		var e=ft('div', {
			'class':'webix_view webix_print_'+t.toLowerCase(),
			style:'height:0px;visibility:hidden;'
		}, i['doc'+t]);
		'Header'===t?vt(e, document.body.firstChild):document.body.appendChild(e), i['doc'+t]=e;
	}

	var ln={
		number:{
			greater:function(t, i) {return i<t;},
			less:function(t, i) {return t<i;},
			greaterOrEqual:function(t, i) {return i<=t;},
			lessOrEqual:function(t, i) {return t<=i;},
			equal:function(t, i) {return t==i;},
			notEqual:function(t, i) {return t!=i;},
			contains:function(t, i) {return -1!==t.toString().toLowerCase().indexOf(i.toString().toLowerCase());},
			notContains:function(t, i) {return -1===t.toString().toLowerCase().indexOf(i.toString().toLowerCase());}
		},
		text:{
			equal:function(t, i) {return t.toLowerCase()===i.toLowerCase();},
			notEqual:function(t, i) {return t.toLowerCase()!==i.toLowerCase();},
			contains:function(t, i) {return -1!==t.toLowerCase().indexOf(i.toLowerCase());},
			notContains:function(t, i) {return -1===t.toLowerCase().indexOf(i.toLowerCase());},
			beginsWith:function(t, i) {return 0===t.toLowerCase().lastIndexOf(i.toLowerCase(), 0);},
			notBeginsWith:function(t, i) {return 0!==t.toLowerCase().lastIndexOf(i.toLowerCase(), 0);},
			endsWith:function(t, i) {return -1!==t.toLowerCase().indexOf(i.toLowerCase(), t.length-i.length);},
			notEndsWith:function(t, i) {return -1===t.toLowerCase().indexOf(i.toLowerCase(), t.length-i.length);}
		},
		date:{
			greater:function(t, i) {return i<t;},
			less:function(t, i) {return t<i;},
			greaterOrEqual:function(t, i) {return i<=t;},
			lessOrEqual:function(t, i) {return t<=i;},
			equal:function(t, i) {return !(!t || !i) && t.valueOf()===i.valueOf();},
			notEqual:function(t, i) {return !t || !i || t.valueOf()!==i.valueOf();},
			between:function(t, i) {return (!i.start || t>i.start) && (!i.end || t<i.end);},
			notBetween:function(t, i) {return !i.start || t<=i.start || !i.end || t>=i.end;}
		}
	}, dn={
		phone:{
			mask:'+# (###) ###-####',
			allow:/[0-9]/g
		},
		card:{
			mask:'#### #### #### ####',
			allow:/[0-9]/g
		},
		date:{
			mask:'####-##-## ##:##',
			allow:/[0-9]/g
		}
	}, vn={
		denySelect:ht,
		allowSelect:rt,
		index:ot,
		createCss:at,
		addStyle:ut,
		removeStyle:ct,
		create:ft,
		getValue:lt,
		remove:dt,
		insertBefore:vt,
		locate:_t,
		offset:pt,
		posRelative:mt,
		pos:bt,
		preventEvent:gt,
		stopEvent:wt,
		triggerEvent:xt,
		addCss:yt,
		removeCss:Mt,
		getTextSize:St,
		download:kt,
		ll:Ct,
		setSelectionRange:$t,
		getSelectionRange:Dt,
		addMeta:It
	}, _n='__webix_remote_error';

	function pn(t, i) {this.dl={}, this.vl=[], this._l=t, this.cu='', i?this.pl(i):this.ml=B(t).then(function(t) {return t.text();}).then(S(function(t) {return t=t.split('/*api*/')[1], this.pl(JSON.parse(t)), this.dl;}, this));}

	function mn(t, i) {
		var e=new pn(t, i).bl();
		for(var s in e) bn[s]=e[s];
		return e;
	}

	pn.prototype={
		pl:function(t) {
			if(t.$key && (this.cu=t.$key), t.$vars) for(var i in t.$vars) this.dl[i]=t.$vars[i];
			this.X(t, this.dl, '');
		},
		X:function(t, i, e) {
			for(var s in t) if('$key'!==s && '$vars'!==s) {
				var n=t[s];
				if('object'==M(n)) {
					var h=i[s]={};
					this.X(n, h, e+s+'.');
				} else i[s]=this.gl(this, e+s);
			}
		},
		wl:function(t, i) {
			var e=this.xl(this, t, i);
			return this.vl.push(e), this.yl(), e;
		},
		yl:function() {
			this.Ml || (this.Ml=setTimeout(S(this.Sl, this), 1));
		},
		Sl:function() {
			for(var t=[], h=this.vl, i=0; i<this.vl.length; i++) {
				var e=this.vl[i];
				e.$sync?(h.splice(i, 1), i--):t.push({
					name:e.$name,
					args:e.$args
				});
			}
			if(h.length) {
				var s=B(), n=this.kl(t);
				y('onBeforeRemoteCall', [s, n, {}]);
				var r=s.post(this._l, n).then(function(t) {
					for(var i=t.json().data, e=0; e<i.length; e++) {
						var s=i[e], n=i[e] && i[e][_n];
						n?(y('onRemoteError', [n]), h[e].reject(n)):h[e].resolve(s);
					}
				}, function(t) {
					for(var i=0; i<h.length; i++) h[i].reject(t);
					throw t;
				});
				y('onAfterRemoteCall', [r]);
			}
			this.vl=[], this.Ml=null;
		},
		$:function() {
			var t=null;
			this.$sync= !0;
			var i=[{
				name:this.$name,
				args:this.$args
			}];
			try {
				var e=B(), s=this.$context.kl(i);
				y('onBeforeRemoteCall', [e, s, {sync:!0}]);
				var n=e.sync().post(this.$context._l, s);
				y('onAfterRemoteCall', [null]), (t=JSON.parse(n.responseText).data[0])[_n] && (t=null);
			} catch(Ro) {
			}
			return t;
		},
		xl:function(t, i, e) {
			var s=m.defer();
			return s.sync=t.$, s.$name=i, s.$args=e, s.$context=this, s;
		},
		gl:function(t, i) {return function() {return t.wl(i, [].slice.call(arguments));};},
		bl:function() {return this.ml || this.dl;},
		kl:function(t) {
			return {
				key:this.cu,
				payload:t
			};
		}
	};
	var bn=function(t, i) {
		if('object'!==M(t)) return mn(t, i);
		var e=document.getElementsByTagName('script');
		return i=t, mn(t=e[e.length-1].src, i);
	};

	function gn() {
		var t=!!(window.orientation%180);
		ii.orientation!==t && (ii.orientation=t, y('onRotate', [t]));
	}

	q.touch && (ii.orientation= !!((R(window.orientation)?90:window.orientation)%180), Zt(window, 'onorientationchange' in window?'orientationchange':'resize', gn));
	var wn={
		textWaitDelay:500,
		summColumn:{
			getValue:function(t) {return t.firstChild.innerHTML;},
			setValue:function() {},
			refresh:function(t, i, e) {
				var s=0;
				t.mapCells(null, e.columnId, null, 1, function(t) {t*=1, isNaN(t) || (s+=t);}, !0), e.format && (s=e.format(s)), e.template && (s=e.template({value:s})), i.firstChild.innerHTML=s;
			},
			trackCells:!0,
			render:function(t, i) {return i.template && (i.template=Yt(i.template)), '';}
		},
		masterCheckbox:{
			getValue:function() {},
			setValue:function() {},
			getHelper:function(t, i) {
				return {
					check:function() {i.checked= !1, t.onclick();},
					uncheck:function() {i.checked= !0, t.onclick();},
					isChecked:function() {return i.checked;}
				};
			},
			refresh:function(e, t, s) {
				t.onclick=function() {
					this.getElementsByTagName('input')[0].checked=s.checked= !s.checked;
					var t=e.getColumnConfig(s.columnId), i=s.checked?t.checkValue:t.uncheckValue;
					e.data.each(function(t) {t[s.columnId]=i, e.callEvent('onCheck', [t.id, s.columnId, i]), this.callEvent('onStoreUpdated', [t.id, t, 'save']);}), e.refresh();
				};
			},
			render:function(t, i) {return '<input type=\'checkbox\' '+(i.checked?'checked=\'1\'':'')+'>';}
		},
		textFilter:{
			getInputNode:function(t) {return t.firstChild?t.firstChild.firstChild:{value:null};},
			getValue:function(t) {return this.getInputNode(t).value;},
			setValue:function(t, i) {this.getInputNode(t).value=i;},
			refresh:function(t, i, e) {i.component=t.P.id, t.registerFilter(i, e, this), i.Cl=t.P.id, e.value && this.getValue(i)!=e.value && this.setValue(i, e.value), i.onclick=gt, Kt(i, 'keydown', this.$l);},
			render:function(t, i) {return this.init && this.init(i), i.css=(i.css || '')+' webix_ss_filter', '<input '+(i.placeholder?'placeholder="'+i.placeholder+'" ':'')+'type=\'text\'>';},
			$l:function(t) {
				var i=this.Cl;
				9!=(t.which || t.keyCode) && (this.Dl && window.clearTimeout(this.Dl), this.Dl=window.setTimeout(function() {
					var t=oi(i);
					t && t.filterByAll();
				}, wn.textWaitDelay));
			}
		},
		selectFilter:{
			getInputNode:function(t) {return t.firstChild?t.firstChild.firstChild:{value:null};},
			getValue:function(t) {return this.getInputNode(t).value;},
			setValue:function(t, i) {this.getInputNode(t).value=i;},
			refresh:function(t, i, e) {
				e.compare=e.compare || function(t, i) {return t==i;}, i.component=t.P.id, t.registerFilter(i, e, this);
				var s=wn.Il(t, e);
				!1!==e.emptyOption && s.unshift({
					id:'',
					value:e.emptyOption || ''
				});
				for(var n=document.createElement('select'), h=0; h<s.length; h++) {
					var r=document.createElement('option');
					r.value=s[h].id, r.text=s[h].value, n.add(r);
				}
				i.firstChild.innerHTML='', i.firstChild.appendChild(n), e.value && this.setValue(i, e.value), i.onclick=gt, n.Cl=t.P.id, Kt(n, 'change', this.Al);
			},
			render:function(t, i) {return this.init && this.init(i), i.css=(i.css || '')+' webix_ss_filter', '';},
			Al:function() {oi(this.Cl).filterByAll();}
		},
		Il:function(t, i) {
			var e=i.options;
			return e?t.Tl.call(e, 'id', 'value'):t.collectValues(i.columnId, i.collect);
		}
	};
	wn.serverFilter=H.extend({
		$server:!0,
		$l:function(t) {
			var i=this.Cl, e=t.which || t.keyCode;
			9==e || 33<=e && e<=40 || (this.Dl && window.clearTimeout(this.Dl), this.Dl=window.setTimeout(function() {oi(i).filterByAll();}, wn.textWaitDelay));
		}
	}, wn.textFilter), wn.serverSelectFilter=H.extend({
		$server:!0,
		Al:function() {oi(this.Cl).filterByAll();}
	}, wn.selectFilter), wn.numberFilter=H.extend({
		init:function(h) {
			h.prepare=function(t) {
				var e, s=this, i=-1!=t.indexOf('='), n=this.format(t);
				return ''===n?'':(-1!=t.indexOf('>')?e=this.Fl:-1!=t.indexOf('<') && (e=this.Vl), h.compare=e && i?function(t, i) {return s.zl(t, i) || e(t, i);}:e || this.zl, n);
			};
		},
		format:function(t) {return t.replace(/[^\-.0-9]/g, '');},
		Fl:function(t, i) {return i<1*t;},
		Vl:function(t, i) {return ''!==t && 1*t<i;},
		zl:function(t, i) {return ''!==t && 1*t==i;}
	}, wn.textFilter), wn.dateFilter=H.extend({
		format:function(t) {
			if(''===t) return '';
			var i=new Date;
			if(-1!=t.indexOf('today')) i=sn.dayStart(i); else if(-1==t.indexOf('now')) {
				var e=t.match(/[0-9]+/g);
				if(!e || !e.length) return '';
				i=e.length<3?(e.reverse(), new Date(e[0], (e[1] || 1)-1, 1)):I.dateFormatDate(t.replace(/^[>< =]+/, ''));
			}
			return i.valueOf();
		}
	}, wn.numberFilter);
	var xn={
		name:'baselayout',
		restore:function(t, i, e) {
			var s=this.Bl(_(t), i);
			if(e) return s;
			si(s.cols || s.rows, this);
		},
		Bl:function(t, i) {
			if(!t.$layout) return i.call(this, t);
			for(var e=t.cols || t.rows, s=0; s<e.length; s++) e[s]=this.Bl(e[s], i);
			return t;
		},
		serialize:function(t) {
			for(var i=[], e=this.getChildViews(), s=0; s<e.length; s++) {
				var n=e[s];
				if(n.movePortlet) {
					var h=n.getChildViews();
					i.push(t.call(this, h[h.length-1]));
				} else n.serialize?i.push(n.serialize(t, !0)):i.push(t.call(this, n));
			}
			var r={
				$layout:!0,
				type:this.config.type
			};
			return this.config.rows?r.rows=i:r.cols=i, r;
		},
		$init:function(t) {
			this.$ready.push(this.Hl), this.tt=this.Oi, this.Rl=[], this.El=[], this.Ua={
				top:0,
				left:0,
				right:0,
				bottom:0
			}, t.$topView && (t.borderless= !0, t.Dt={
				top:!0,
				left:!0,
				bottom:!0,
				right:!0
			}), t.isolate && H.extend(this, Te);
		},
		rows_setter:function(t) {return this.Pl=1, this.jl=t, !0;},
		cols_setter:function(t) {return this.Pl=0, this.$view.style.whiteSpace='nowrap', this.jl=t, !0;},
		Ft:function(t) {
			var i=x.find.call(this.hi, t);
			this.Nl && this.Nl(i), x.removeAt.call(this.hi, i), this.Ll(!0);
		},
		Ll:function(t) {
			for(var i=this.Ol=0; i<this.hi.length; i++) {
				var e=this.hi[i];
				(e.P.hidden || e.$nospace) && this.Ol++;
			}
			t && this.resizeChildren(!0);
		},
		Tt:function(t, i) {
			if(R(i)) {
				for(var e=0; e<this.hi.length; e++) this.hi[e].destructor();
				this.jl=t, this.Hl();
			} else {
				var s;
				'number'== typeof i?((i<0 || i>this.hi.length) && (i=this.hi.length), x.insertAt.call(this.hi, t, i), t.P.hidden || this.Wl(t, this.hi[i])):(s=oi(i), i=x.find.call(this.hi, s), t.P.hidden || this.Wl(t, s), s.destructor(), this.hi[i]=t), this.Pl || this.La(t);
			}
			this.Ll(!0);
			var n=this.elements?this:this.getFormView();
			n && !this.Ul && n.re(), y('onReconstruct', [this]);
		},
		La:function(t) {t.Vt.style.display='inline-block', t.Vt.style.verticalAlign='top';},
		addView:function(t, i) {
			R(i) && (i=this.hi.length);
			var e=this.$$?this:this.getTopParentView();
			ii.mt=this;
			var s=e && e.ui?e.ui(t, this, i):si(t, this, i);
			return ii.mt=null, s.P.id;
		},
		removeView:function(t) {
			var i;
			i='object'!=M(t)?oi(t) || (this.$$?this.$$(t):null):t;
			var e=x.find.call(this.hi, i);
			if(0<=e) {
				this.Nl && this.Nl(e, i);
				var s=this.elements?this:this.getFormView();
				this.hi.splice(e, 1), s && vi(i, function(t) {t.name && delete s.getCleanValues()[t.config.name];}, s, !0), i.destructor(), this.Ll(!0), s && s.re();
			}
			y('onReconstruct', [this]);
		},
		reconstruct:function() {this.Ol=0, this.Tt(this.jl);},
		zi:function(t, i, e) {t.P.hidden || (t.P.hidden= !0, dt(t.Vt), this.Ol++, e || ii.gt || this.resizeChildren(!0));},
		Me:function(t) {t.callEvent && t.callEvent('onViewShow', []);},
		resizeChildren:function() {
			if(!ii.pt && this.Rl) {
				var t=this.getParentView();
				if(t) return t.resizeChildren?t.resizeChildren():t.resize();
				var i, e, s, n, h=this.$getSize(0, 0);
				if(s=i=this.Rl[0] || 0, n=e=this.Rl[1] || 0, (1e5<=h[1] || 1e5<=h[3]) && this.Vt.parentNode && (s=i=Math.max(h[0], this.P.width || this.Vt.parentNode.offsetWidth || i || 0), n=e=Math.max(h[2], this.P.height || this.Vt.parentNode.offsetHeight || e || 0)), t) this.Ya(i, e); else {
					h[0]>i && (s=h[0]), h[2]>e && (n=h[2]);
					var r=this.Vt.parentNode==document.body && !this.setPosition;
					!r && i>h[1] && (s=h[1]), !r && e>h[3] && (n=h[3]), this.$setSize(s, n);
				}
				ii.vt && (ii.vt= !1, this.resizeChildren()), y('onResize', []);
			}
		},
		getChildViews:function() {return this.hi;},
		index:function(t) {
			t.P && (t=t.P.id);
			for(var i=0; i<this.hi.length; i++) if(this.hi[i].P.id==t) return i;
			return -1;
		},
		Wl:function(t, i) {
			if(i) if(i.P.hidden || t===i) {
				for(var e=this.index(i)+1; this.hi[e] && this.hi[e].P.hidden;) e++;
				i=this.hi[e]?this.hi[e].Vt:null;
			} else i=i.Vt;
			vt(t.Vt, i, this.tt || this.Vt);
		},
		xe:function(t, i, e) {t.P.hidden && (this.Wl(t, t), t.P.hidden= !1, this.Ol--, e || (this.resizeChildren(!0), t.refresh && t.refresh()), t.callEvent && (t.callEvent('onViewShow', []), vi(t, this.Me)));},
		showBatch:function(t, i) {
			var e=void 0!==i;
			if(i=!1!==i, e) this.P.visibleBatch=''; else {
				if(this.P.visibleBatch==t) return;
				this.P.visibleBatch=t;
			}
			for(var s=[], n=0; n<this.hi.length; n++) this.hi[n].P.batch || this.hi[n].P.hidden?this.hi[n].P.batch==t?i?s.push(this.hi[n]):this.zi(this.hi[n], null, !0):e || this.zi(this.hi[n], null, !0):s.push(this.hi[n]);
			for(var h=0; h<s.length; h++) this.xe(s[h], null, !0), s[h].ye();
			this.resizeChildren(!0);
		},
		Hl:function(t) {
			this.hi=[], this.name;
			for(var i=0; i<t.length; i++) ii.mt=this, t[i].Dt || (t[i].borderless= !0), this.hi[i]=si.Ht(t[i], this), this.Pl || this.La(this.hi[i]), this.P.visibleBatch && this.P.visibleBatch!=this.hi[i].P.batch && this.hi[i].P.batch && (this.hi[i].P.hidden= !0), this.hi[i].P.hidden || (this.tt || this.Oi).appendChild(this.hi[i].Vt);
			this.Ll(), this.Yl && this.Yl(t);
		},
		ql:function(t, i) {i.top && (t.borderTopWidth='0px'), i.left && (t.borderLeftWidth='0px'), i.right && (t.borderRightWidth='0px'), i.bottom && (t.borderBottomWidth='0px');},
		Gl:function(t, i, e) {if(this.Pl!=e) for(var s=0; s<this.hi.length; s++) this.hi[s].P[t]=i, this.hi[s].Gl && this.hi[s].Gl(t, i, e);},
		$getSize:function(t, i) {
			var e=0, s=1e5, n=1e5, h=0;
			this.Pl?n=0:s=0;
			var r=0, o=0, a=0;
			this.ii=[];
			for(var u=0; u<this.hi.length; u++) if(!this.hi[u].P.hidden) {
				var c=this.ii[u]=this.hi[u].$getSize(0, 0);
				this.hi[u].$nospace?o++:this.Pl?(c[0]>e && (e=c[0]), c[1]<s && (s=c[1]), h+=c[2], n+=c[3], c[2]==c[3] && -1!=c[2]?(r+=c[2], o++):a+=c[4]):(c[2]>h && (h=c[2]), c[3]<n && (n=c[3]), e+=c[0], s+=c[1], c[0]==c[1] && -1!=c[0]?(r+=c[0], o++):a+=c[4]);
			}
			n<h && (n=h), s<e && (s=e), this.Xl=[r, this.hi.length-o, a], this.Jl=[e+t, h+i];
			var f=Vi.api.$getSize.call(this, 0, 0);
			return 1e5<=f[1] && (f[1]=0), 1e5<=f[3] && (f[3]=0), f[0]=(f[0] || e)+t, f[1]=Math.max(f[0], (f[1] || s)+t), f[2]=(f[2] || h)+i, f[3]=Math.max(f[2], (f[3] || n)+i), !this.Pl && this.P.responsive && (f[0]=0), f;
		},
		$setSize:function(t, i) {this.Rl=[t, i], Vi.api.$setSize.call(this, t, i), this.Ya(t, i);},
		Kl:function(t, i, e) {
			var s=i=t[i];
			if(i!=(e=t[e])) {
				var n=this.Zl*t[4]/this.Ql;
				if(n<i) s=i, this.Ql-=t[4], this.Zl-=s; else {
					if(!(e<n)) return -1;
					s=e, this.Ql-=t[4], this.Zl-=s;
				}
			}
			return s;
		},
		ed:function(t, i) {
			var e=oi(i);
			'hide'!==e && e?(e || (e=si({
				view:'popup',
				body:[{}]
			})), t.sd=t.P.width, t.nd=t.P.height, t.hd=e.P.id, t.P.width=0, t.P.height || (t.P.autoheight= !0), si(t, e, this.El.length)):(t.hide(), t.hd='hide'), this.El.push(t);
		},
		rd:function(t) {
			var i=t.hd;
			if(t.hd=0, 'hide'!==i && i) {
				t.P.width=t.sd, t.P.height=t.nd, delete t.P.autoheight;
				for(var e=0; this.hi[e] && !1===this.hi[e].P.responsiveCell;) e++;
				si(t, this, e);
			} else t.show();
			this.El.pop();
		},
		od:function(t) {
			if(ii._t= !0, t+this.Ua.left+this.Ua.right+this.qa*(this.hi.length-1)<this.Jl[0]) for(var i=this.hi.length-1, e=0; e<i; e++) {
				var s=this.hi[e];
				if(!s.hd) {
					if(!1!==s.P.responsiveCell) {
						this.ed(s, this.P.responsive), y('onResponsiveHide', [s.P.id]), ii.vt= !0;
						break;
					}
					i=this.hi.length;
				}
			} else if(this.El.length) {
				var n=this.El[this.El.length-1], h='hide'==n.hd?0:n.sd;
				n.$getSize(h, 0)[0]+this.Jl[0]+this.qa+20<=t && (this.rd(n), y('onResponsiveShow', [n.P.id]), ii.vt= !0);
			}
			ii._t= !1;
		},
		Ya:function(t, i) {
			ii.dt=(ii.dt || 0)+1, !this.Pl && this.P.responsive && this.od(t, i), this.Zl=(this.Pl?i:t)-this.Xl[0], this.Ql=this.Xl[2];
			for(var e=t, s=i, n=[], h=0; h<this.hi.length; h++) if(!this.hi[h].P.hidden && this.ii[h]) {
				var r=this.ii[h];
				if(this.Pl) {
					if((s=this.Kl(r, 2, 3))<0) {
						n.push({
							oldIndex:h,
							view:this.hi[h]
						});
						continue;
					}
				} else if((e=this.Kl(r, 0, 1))<0) {
					n.push({
						oldIndex:h,
						view:this.hi[h]
					});
					continue;
				}
				this.hi[h].$setSize(e, s);
			}
			for(var o=0; o<n.length; o++) {
				var a=n[o].oldIndex, u=this.ii[a], c=Math.round(this.Zl*u[4]/this.Ql);
				this.Zl-=c, this.Ql-=u[4], this.Pl?s=c:e=c, n[o].view.$setSize(e, s);
			}
			ii.dt-=1;
		},
		ad:function(t, i) {
			var e=this.index(t);
			return -1==e?null:this.hi[e+i];
		},
		ud:function() {return this.hi[0];}
	}, yn={
		api:xn,
		view:H.protoUI(xn, g, Vi.view)
	}, Mn={
		name:'layout',
		$init:function() {this.Ol=0;},
		defaults:{type:'line'},
		Hl:function() {
			this.cd && (t=this.cd(t)), this.fd || (this.Vt.className+=' webix_layout_'+(this.P.type || ''), this.fd=1), this.P.margin!==undefined && (this.qa=this.P.margin), this.P.padding!==undefined && 'object'!==M(this.P.padding) && (this.Ua.left=this.Ua.right=this.Ua.top=this.Ua.bottom=this.P.padding), this.P.paddingX!==undefined && (this.Ua.left=this.Ua.right=this.P.paddingX), this.P.paddingY!==undefined && (this.Ua.top=this.Ua.bottom=this.P.paddingY), 'object'===M(this.P.padding) && H.extend(this.Ua, this.P.padding, !0), (this.Ua.left || this.Ua.right || this.Ua.top || this.Ua.bottom) && (this.Ua.defined= !0), this.ld() && !this.P.borderless && (this.Oi.style.borderWidth='1px', this.dd= !0);
			var t=this.jl;
			this.P.borderless && (this.P.Dt={
				top:!0,
				left:!0,
				right:!0,
				bottom:!0
			}), this.Oa(t), yn.api.Hl.call(this, t), this.Wa(t);
		},
		$getSize:function(t, i) {
			t=t || 0, i=i || 0;
			var e=this.qa*(this.hi.length-this.Ol-1);
			if(this.dd || this.ld()) {
				var s=this.P.Dt;
				s && (t+=(s.left?0:1)+(s.right?0:1), i+=(s.top?0:1)+(s.bottom?0:1));
			}
			return this.P.height || (i+=this.Ua.top+this.Ua.bottom+(this.Pl?e:0)), this.P.width || (t+=this.Ua.left+this.Ua.right+(this.Pl?0:e)), yn.api.$getSize.call(this, t, i);
		},
		$setSize:function(t, i) {this.Rl=[t, i], this.ld() || this.dd?Hi.api.$setSize.call(this, t, i):Vi.api.$setSize.call(this, t, i), i=this.ge, t=this.me, this.P.scroll && (i=Math.max(i, this.Jl[1]), t=Math.max(t, this.Jl[0])), this.Ya(t, i);},
		Ya:function(t, i) {
			var e=this.qa*(this.hi.length-this.Ol-1);
			return i-=this.Ua.top+this.Ua.bottom, t-=this.Ua.left+this.Ua.right, this.Pl?i-=e:t-=e, yn.api.Ya.call(this, t, i);
		},
		resizeChildren:function(t) {
			if(t) {
				this.pe=null;
				for(var i=[], e=0; e<this.hi.length; e++) {
					var s=this.hi[e];
					i[e]=s.P;
					var n=s.Rl && !s.dd || s.P.borderless?'0px':'1px';
					s.Vt.style.borderTopWidth=s.Vt.style.borderBottomWidth=s.Vt.style.borderLeftWidth=s.Vt.style.borderRightWidth=n;
				}
				this.Oa(i);
				for(var h=0; h<i.length; h++) i[h].borderless && this.hi[h].ni && this.hi[h].ni(i[h]);
				this.Wa(this.hi);
			}
			ii._t || yn.api.resizeChildren.call(this);
		},
		ld:function() {return this.Ua.defined && 0<this.qa && !this.vd;},
		Oa:function(t) {
			if(!this.ld() || this.P.borderless && 'space'!=this.P.type) {
				for(var i=0; i<t.length; i++) t[i].Dt=l(this.P.Dt);
				var e=!1;
				this.vd && (e= !0);
				var s=t.length;
				if(this.Pl) {
					for(var n=1; n<s-1; n++) t[n].Dt.top=t[n].Dt.bottom=e;
					if(1<s) {
						for('head'!=this.P.type && (t[0].Dt.bottom=e); t[s-1].hidden && 1<s;) s--;
						0<s && (t[s-1].Dt.top=e);
					}
				} else {
					for(var h=1; h<s-1; h++) t[h].Dt.left=t[h].Dt.right=e;
					if(1<s) {
						for('head'!=this.P.type && (t[0].Dt.right=e), t[s-1].Dt.left=e; 1<s && t[s-1].hidden;) s--;
						0<s && (t[s-1].Dt.left=e);
					}
				}
			} else for(var r=0; r<t.length; r++) t[r].Dt && t[r].borderless || (t[r].Dt={
				top:!1,
				left:!1,
				right:!1,
				bottom:!1
			});
		},
		Wa:function(t) {
			for(var i=0, e=0; e<t.length; e++) {
				var s=this.hi[e], n=s.P.Dt;
				if(s.P.hidden && this.hi[e+1]) {
					var h=this.hi[e+1].P.Dt;
					n.top || (h.top= !1), n.left || (h.left= !1), e==i && i++;
				}
				this.ql(s.Vt.style, s.P.Dt);
			}
			for(var r=this.Pl?'marginLeft':'marginTop', o=this.Pl?'marginTop':'marginLeft', a=this.Pl?this.Ua.left:this.Ua.top, u=this.Pl?this.Ua.top:this.Ua.left, c=0; c<t.length; c++) this.hi[c].Vt.style[r]=a+'px';
			this.hi.length && (this.hi[i].Vt.style[o]=u+'px');
			for(var f=i+1; f<t.length; f++) this.hi[f].Vt.style[o]=this.qa+'px';
		},
		type_setter:function(t) {return this.qa='undefined'!= typeof this._d[t]?this._d[t]:this._d.line, this.Ua.left=this.Ua.right=this.Ua.top=this.Ua.bottom='undefined'!= typeof this._d[t]?this.pd[t]:this.pd.line, this.vd='material'==t || 'clean'==t, 'material'==t && (this.P.borderless= !0), t;},
		$skin:function() {this._d=Li.layoutMargin, this.pd=Li.layoutPadding;}
	}, Sn=H.protoUI(Mn, yn.view), kn={
		api:Mn,
		view:Sn
	};
	Sn.call(-1);
	var Cn={
		name:'daterange',
		defaults:{
			button:!1,
			icons:!1,
			calendarCount:2,
			borderless:!1
		},
		$init:function(t) {
			t.calendar=t.calendar || {}, t.value=this.$prepareValue(t.value), delete t.calendar.type, this.Vt.className+=' webix_daterange', this.md=this.bd[t.calendar.type] || 0;
			for(var i=[], e=Li.calendar, s=e && e.height?e.height:0, n=e && e.width?e.width:0, h=s || 250, r=n || 250, o=H.extend({
				view:'calendar',
				width:n,
				height:s
			}, t.calendar || {}, !0), a=t.calendarCount=0===this.md && t.calendarCount || this.defaults.calendarCount, u=(o.css?o.css+' ':'')+'webix_range_', c=t.value.start || new Date, f=0; f<a; f++) {
				var l=sn.copy(c);
				l.setDate(1), l=sn.add(l, this.gd[this.md]*f, 'month'), H.extend(o, {
					events:S(this.wd, this),
					css:u+(1===a?'':0===f?'0':f+1==a?'N':'1'),
					monthSelect:0===f || f+1===a,
					timepicker:0===this.md && t.timepicker,
					borderless:!0,
					date:l
				}, !0), i.push(_(o));
			}
			t.rows=[{
				type:'clean',
				cols:i
			}], (t.button || t.icons) && t.rows.push(this.xd(t, r*a)), t.height=R(t.height)?h+(t.icons || t.button?30:0):t.height, t.width=R(t.width)?r*a:t.width, t.type='line', this.$ready.push(this.yd), Kt(this.$view, 'keydown', S(function(t) {this.Se(t.which || t.keyCode, t);}, this));
		},
		value_setter:function(t) {return this.$prepareValue(t);},
		getValue:function() {return this.P.value;},
		setValue:function(t, i) {
			t=this.$prepareValue(t);
			var e=(this.P.value=t).start || t.end || new Date;
			if(!i) {
				this.Md[0].showCalendar(t.start);
				for(var s=1; s<this.Md.length; s++) this.Md[s].P.date=e, this.Sd(this.Md[s], 1, s);
			}
			this.callEvent('onChange', [t]), this.refresh();
		},
		refresh:function() {
			for(var t=0; t<this.Md.length; t++) if(this.Md[t].md===this.md) {
				Mt(this.Md[t].$view, 'webix_cal_timepicker'), Mt(this.Md[t].$view, 'webix_range_timepicker');
				var i=this.kd(this.Md[t].getVisibleDate());
				if(i.start || i.end) {
					if(this.Md[t].P.date=i.start || i.end, this.P.timepicker) {
						var e='webix_'+(i.start && i.end?'range':'cal')+'_timepicker';
						yt(this.Md[t].$view, e);
					}
				} else sn.datePart(this.Md[t].P.date);
				this.Md[t].refresh();
			}
		},
		addToRange:function(t) {
			var i=this.Cd(this.$d(t));
			this.setValue(i);
		},
		Dd:[{
			template:function() {return '<span role=\'button\' tabindex=\'0\' class=\'webix_cal_icon_today webix_cal_icon\'>'+I.calendar.today+'</span>';},
			on_click:{
				webix_cal_icon_today:function() {
					var t=new Date;
					this.P.timepicker || (t=sn.datePart(t)), this.addToRange(t), this.callEvent('onTodaySet', [this.getValue()]);
				}
			}
		}, {
			template:function() {return '<span role=\'button\' tabindex=\'0\' class=\'webix_cal_icon_clear webix_cal_icon\'>'+I.calendar.clear+'</span>';},
			on_click:{webix_cal_icon_clear:function() {this.setValue(''), this.callEvent('onDateClear', []);}}
		}],
		Id:function(t) {
			if(t) {
				t='object'==M(t)?t:this.Dd;
				for(var i={
					css:'webix_cal_footer ',
					borderless:!0,
					template:'<div class=\'webix_cal_icons\'>',
					onClick:{}
				}, e=0; e<t.length; e++) {
					if(t[e].template) {
						var s='function'== typeof t[e].template?t[e].template:Yt(t[e].template);
						i.template+=s.call(this);
					}
					if(t[e].on_click) for(var n in t[e].on_click) i.onClick[n]=S(t[e].on_click[n], this);
				}
				return i.template+='</div>', i.width=St(i.template).width+30, i;
			}
			return {width:0};
		},
		xd:function(t, i) {
			var e={
				view:'button',
				value:I.calendar.done,
				minWidth:100,
				maxWidth:230,
				align:'center',
				click:function() {this.getParentView().getParentView().hide();}
			}, s=this.Id(t.icons), n={
				css:'webix_range_footer',
				height:30,
				cols:[{width:s.width}]
			};
			return (t.button || t.icons) && 2*s.width+e.minWidth>i && (n.cols[0].width=0), n.cols.push(t.button?e:{}), n.cols.push(s), n;
		},
		bd:{
			time:-1,
			month:1,
			year:2
		},
		gd:{
			0:1,
			1:12,
			2:120
		},
		$prepareValue:function(t) {
			return t || (t={
				start:null,
				end:null
			}), t.start || t.end || (t={start:t}), t.end=this.$d(t.end) || null, t.start=this.$d(t.start) || null, (t.end && t.end<t.start || !t.start) && (t.end=[t.start, t.start=t.end][0]), t;
		},
		$d:function(t) {return 'string'== typeof t && (t=I.parseFormatDate(t)), isNaN(1*t)?null:t;},
		wd:function(t, i) {
			if(!i) {
				var e=this.P.value, s=e.start?sn.datePart(sn.copy(e.start)):null, n=e.end?sn.datePart(sn.copy(e.end)):null, h=sn.datePart(t), r=sn.add(h, 1, 'day', !0), o=sn.add(h, -1, 'day', !0), a='';
				return s<=h && n && h<=n && (a='webix_cal_range', sn.equal(o, s) && (a+=' webix_cal_range_first'), sn.equal(r, n) && (a+=' webix_cal_range_last')), sn.equal(h, s) && (a='webix_cal_range_start'), sn.equal(h, n) && (a='webix_cal_range_end'), a+' '+(sn.isHoliday(t)+' ' || '');
			}
		},
		yd:function() {
			var t=this.Md=this.getChildViews()[0].getChildViews(), e=this, i=this.config.id;
			this.Ad={};
			for(var s=0; s<t.length; s++) t[s].config.master=i, t[this.Ad[t[s].config.id]=s].attachEvent('onBeforeDateSelect', function(t) {return e.Td(this, t);}), t[s].attachEvent('onBeforeZoom', function(t) {return e.Fd(this, t);}), 0!==s && s!==t.length-1 || (t[s].attachEvent('onAfterMonthChange', S(this.Vd, this)), t[s].attachEvent('onAfterZoom', function(t, i) {e.zd(this, t, i);}));
			this.P.timepicker && this.refresh();
		},
		Fd:function(t, i) {
			var e=this.Bd(t.config.id);
			if(0<=i && 0<e && e!==this.Md.length-1) return !1;
			if(-1===i) {
				var s=this.kd(t.getVisibleDate());
				s.start && s.end && (t.P.date=s[this.Hd]);
			}
			return !0;
		},
		Vd:function(t, i) {
			var e=i<t?1:-1, s=i<t?this.Md[this.Md.length-1]:this.Md[0], n=s.Ed[s.md].Rd;
			this.Pd(e, n, s), this.refresh();
		},
		zd:function(t, i, e) {
			var s=t.Ed[t.md].Rd, n=this.Bd(t.config.id), h=0===n?1:-1;
			if(this.Md[n+h]) {
				var r=this.Md[n+h].P.date;
				if(i<e && 0<=i) {
					var o=0;
					if(1===i) {
						var a=r.getFullYear();
						(this.md || -1===h && 11===r.getMonth() || 1===h && 0===r.getMonth()) && (a-=h), o=t.P.date.getFullYear()-a;
					} else if(0===i) {
						var u=r.getMonth()-h;
						12!==u && -1!=u || (u=-1===u?11:0), o=t.P.date.getMonth()-u;
					}
					this.Pd(o, s, t), this.refresh();
				}
			}
		},
		Sd:function(t, i, e) {t.blockEvent(), 0<=t.md && t.jd(i, e), t.unblockEvent();},
		Bd:function(t) {return this.Ad[t];},
		Pd:function(t, i, e) {
			for(var s=0; s<this.Md.length; s++) {
				var n=this.Md[s];
				e && n.config.id===e.config.id || this.Sd(n, t, i);
			}
		},
		kd:function(t) {
			var i=this.P.value, e={};
			return i.start && i.start.getYear()===t.getYear() && i.start.getMonth()===t.getMonth() && (e.start=i.start), i.end && i.end.getYear()===t.getYear() && i.end.getMonth()===t.getMonth() && (e.end=i.end), e;
		},
		Nd:function(t, i) {t.setHours(i.getHours()), t.setMinutes(i.getMinutes()), t.setSeconds(i.getSeconds()), t.setMilliseconds(i.getMilliseconds());},
		Cd:function(t, i) {
			var e=_(this.P.value);
			0===this.md || R(i)?e.start && !e.end?e.end=t:(e.start=t, e.end=null):e[i?'end':'start']=t;
			return e;
		},
		Td:function(t, i) {
			if(this.callEvent('onBeforeDateSelect', [i])) {
				var e=this.P.value;
				if(t.md<0) {
					var s, n=_(this.kd(i));
					(s=n.start && n.end?n[this.Hd]:n.start || n.end) && this.Nd(s, i), t.md=0, e=H.extend(_(e), n, !0);
				} else {
					var h=t.getVisibleDate(), r=this.Bd(t.config.id);
					if(i.getMonth()!==h.getMonth() && (0===r || r===this.Md.length-1)) {
						var o=h<i?1:-1;
						this.Pd(o, 1);
					}
					e=this.Cd(i, r);
				}
				t.md!==this.md && t.showCalendar(i), this.setValue(e, !0), this.callEvent('onAfterDateSelect', [this.getValue()]);
			}
			return !1;
		}
	}, $n={
		api:Cn,
		view:H.protoUI(Cn, kn.view)
	};
	wn.excelFilter={
		getValue:function(t) {
			var i=this.Ld(t);
			if(i) return i.getValue();
		},
		setValue:function(t, i) {
			var e=this.Ld(t);
			e && (i=i || {}, e.setValue(i), this.Od(i, t));
		},
		$icon:!0,
		refresh:function(t, i, e) {
			var s=this;
			if(!t.$destructed) {
				(e.node=i).$webix=e.filter, t.registerFilter(i, e, this);
				var n=oi(e.filter), h=n.getBody(), r=this.Il(t, e);
				h.clearAll(), h.parse(r), e.value?this.setValue(i, e.value):e.compare=function() {return !0;}, i.onclick=function(t) {-1===t.target.className.indexOf('webix_excel_filter') || n.isVisible() || n.show(s.Wd(i, n));};
			}
		},
		render:function(t, n) {
			var i=this;
			if(!n.filter) {
				n.template && (n.template=Yt(n.template));
				var e=si({
					view:'popup',
					body:H.extend(n.filterConfig || {}, {
						view:'filter',
						mode:n.mode,
						field:'value',
						template:function(t, i) {
							var e=t.value;
							return e!==undefined && null!==e || (e=''), n.format && (e=n.format(e)), n.template && (e=n.template(t, i, e)), e;
						}
					}, !0)
				}), h=e.getBody();
				h.attachEvent('onChange', function() {
					var s=h.getFilterFunction();
					n.compare=function(t, i, e) {return s({value:e[n.columnId]});}, t.filterByAll(), n.value && i.Od(n.value, n.node);
				}), t.attachEvent('onScrollX', function() {return e.hide();}), n.originText=n.text || '', n.filter=e.P.id, t.Bt.push(e);
			}
			return n.css=(n.css || '')+' webix_ss_excel_filter', '<span class=\'webix_excel_filter webix_icon wxi-filter\'></span>'+n.originText;
		},
		Wd:function(t, i) {
			var e=pt(t);
			return {
				x:e.x+e.width-i.$width,
				y:e.y+e.height
			};
		},
		Od:function(t, i) {t.includes || t.condition && t.condition.filter?yt(i.firstChild, 'webix_ss_filter_active', !0):Mt(i.firstChild, 'webix_ss_filter_active');},
		Ld:function(t) {
			var i=oi(t.$webix);
			return i?i.getBody():null;
		},
		Il:function(t, i) {return i.options?t.Tl.call(i.options, 'id', 'value'):t.collectValues(i.columnId, i.collect);}
	}, wn.serverExcelFilter=H.extend({$server:!0}, wn.excelFilter), wn.richSelectFilter={
		getInputNode:function(t) {return oi(t.$webix) || null;},
		getValue:function(t, i) {
			var e=this.getInputNode(t);
			return i && e && e.getText?e.getText():e?e.getValue():'';
		},
		setValue:function(t, i) {
			var e=this.getInputNode(t);
			return e?e.setValue(i):'';
		},
		compare:function(t, i) {return t==i;},
		refresh:function(t, i, e) {
			if(!t.$destructed) {
				var s=oi(e.richselect);
				if(!s.$view.parentNode) ft('div', {'class':'webix_richfilter'}).appendChild(s.$view);
				i.$webix=e.richselect, i.style.marginLeft='-10px', e.compare=e.compare || this.compare, e.prepare=e.prepare || this.prepare, t.registerFilter(i, e, this);
				var n=wn.Il(t, e), h=s.getPopup().getList();
				if(i.firstChild.appendChild(s.$view.parentNode), h.parse && (h.clearAll(), h.parse(n), !this.$noEmptyOption && !1!==e.emptyOption || e.emptyOption)) {
					var r={
						id:'$webix_empty',
						value:e.emptyOption || '',
						$empty:!0
					};
					h.add(r, 0);
				}
				e.value && this.setValue(i, e.value), s.render(), k(s.resize, s);
			}
		},
		render:function(t, i) {
			if(!i.richselect) {
				var e={
					container:ft('div', {'class':'webix_richfilter'}),
					view:this.inputtype,
					options:[]
				}, s=H.extend(this.inputConfig || {}, i.inputConfig || {}, !0);
				H.extend(e, s), i.separator && (e.separator=i.separator), i.suggest && (e.suggest=i.suggest);
				var n=si(e);
				n.attachEvent('onChange', function() {t.filterByAll();}), i.richselect=n.P.id, t.Bt.push(n);
			}
			return i.css=(i.css || '')+' webix_div_filter', ' ';
		},
		inputtype:'richselect'
	}, wn.serverRichSelectFilter=H.extend({$server:!0}, wn.richSelectFilter), wn.multiSelectFilter=H.extend({
		$noEmptyOption:!0,
		inputtype:'multiselect',
		prepare:function(t, i) {
			if(!t) return t;
			for(var e={}, s=t.toString().split(i.separator || ','), n=0; n<s.length; n++) e[s[n]]=1;
			return e;
		},
		compare:function(t, i) {return !i || i[t];}
	}, wn.richSelectFilter), wn.serverMultiSelectFilter=H.extend({
		$server:!0,
		Al:function() {oi(this.Cl).filterByAll();}
	}, wn.multiSelectFilter), wn.multiComboFilter=H.extend({
		inputtype:'multicombo',
		inputConfig:{tagMode:!1}
	}, wn.multiSelectFilter), wn.serverMultiComboFilter=H.extend({
		inputtype:'multicombo',
		inputConfig:{tagMode:!1}
	}, wn.serverMultiSelectFilter), wn.datepickerFilter=H.extend({
		prepare:function(t) {return t || '';},
		compare:function(t, i) {return 1*t==1*i;},
		inputtype:'datepicker'
	}, wn.richSelectFilter), wn.columnGroup={
		getValue:function(t) {return t.innerHTML;},
		setValue:function() {},
		getHelper:function(t, i) {
			return {
				open:function() {i.closed= !0, t.onclick();},
				close:function() {i.closed= !1, t.onclick();},
				isOpened:function() {return i.closed;}
			};
		},
		refresh:function(e, t, s) {
			t.onclick=function(t) {
				wt(t);
				var i=this.firstChild.firstChild;
				s.closed?(s.closed= !1, i.className='webix_tree_open'):(s.closed= !0, i.className='webix_tree_close'), k(function() {e.callEvent('onColumnGroupCollapse', [s.columnId, s.batch, !s.closed]), e.showColumnBatch(s.batch, !s.closed);});
			}, s.firstRun || (s.firstRun=1, s.closed && e.showColumnBatch(s.batch, !1));
		},
		render:function(t, i) {return '<div role=\'button\' tabindex=\'0\' aria-label=\''+I.aria[i.closed?'openGroup':'closeGroup']+'\' class=\''+(i.closed?'webix_tree_close':'webix_tree_open')+'\'></div>'+(i.groupText || '');}
	}, wn.dateRangeFilter=H.extend({
		prepare:function(t) {return t.start || t.end?$n.api.$prepareValue(t):'';},
		compare:function(t, i) {return (!i.start || t>=i.start) && (!i.end || t<=i.end);},
		inputtype:'daterangepicker'
	}, wn.richSelectFilter), wn.serverDateRangeFilter=H.extend({$server:!0}, wn.dateRangeFilter), q.scrollSize=q.touch || q.$customScroll?0:17, pi(function() {
		var t=function s() {
			var t=ft('div');
			t.className='webix_skin_mark', t.style.cssText='position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;min-height:100px;overflow-y:scroll;', document.body.appendChild(t);
			var i=t.offsetWidth-t.clientWidth, e={
				200:'flat',
				210:'compact',
				230:'contrast',
				240:'material',
				250:'mini'
			}[10*Math.floor(t.offsetHeight/10)];
			document.body.removeChild(t), e && Wi(e);
			return q.$customScroll?0:i;
		}();
		q.scrollSize=q.touch?0:t;
	});
	var Dn=!1;
	t('_fixHeight', function Po() {Dn || (ut('html, body{ height:100%; }'), document.body.className+=' webix_full_screen', Yi.limit(!1), Dn= !0);}), si.animate=function jo(t, i, e) {
		var s=oi(i);
		if(s) {
			var n=e || {
				type:'slide',
				direction:'left'
			}, h=s.Vt.cloneNode(!0), r=si(t, i);
			r.Vt.parentNode.appendChild(h);
			var o=Ni.formLine(r.Vt, h, n);
			return n.callback=function() {Ni.breakLine(o);}, Ni(o, n), r;
		}
	}, si.animateView=function No(i, t, e) {
		if(i=oi(i)) {
			e=e || {
				type:'slide',
				direction:'left'
			};
			for(var s=function(t) {
				var i=t.Vt, e=i.className, s=i.innerHTML;
				return '<div class=\''+e+'\' style=\'width:'+i.offsetWidth+'px;height:'+i.offsetHeight+'px;\'>'+s+'</div>';
			}, n=[], h=0; h<i.Vt.childNodes.length; h++) {
				var r=i.Vt.childNodes[h], o=r.currentStyle?r.currentStyle.display:getComputedStyle(r, null).display;
				n.push(o || '');
			}
			var a=s(i);
			'function'== typeof t && t.call(this);
			for(var u=s(i), c=i.Vt.insertBefore(ft('DIV', {
				'class':'webix_view_animate',
				style:'width:'+i.Vt.offsetWidth+'px;height:'+i.Vt.offsetHeight+'px;'
			}, u+a), i.Vt.firstChild), f=1; f<i.Vt.childNodes.length; f++) i.Vt.childNodes[f].style.display='none';
			var l=Ni.formLine(c.childNodes[0], c.childNodes[1], e);
			return e.callback=function() {
				if(c) {
					i.Vt.removeChild(c), c=null;
					for(var t=0; t<i.Vt.childNodes.length; t++) i.Vt.childNodes[t].style.display=n[t];
				}
			}, Ni(l, e), i;
		}
	}, si.freeze=li, si.resize=di, si.zIndex=_i, si.datafilter=wn, si.fullScreen=function Lo() {
		if(q.touch) {
			It('apple-mobile-web-app-capable', 'yes'), It('viewport', 'initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no'), q.isMac || ut('body.webix_full_screen{ overflow-y: auto; }');
			var t=function() {
				var t=window.innerWidth, i=window.innerHeight;
				i && (document.body.style.height=i+'px', document.body.style.width=t+'px'), ii.pt= !1, di();
			}, i=function() {ii.pt= !0, k(t, null, [], 500);};
			A('onRotate', i), gn(), k(i);
		}
	};
	I.locales['de-DE']={
		groupDelimiter:'.',
		groupSize:3,
		decimalDelimiter:',',
		decimalSize:2,
		dateFormat:'%d.%n.%Y',
		timeFormat:'%H:%i',
		longDateFormat:'%j. %F %Y',
		fullDateFormat:'%j. %F %Y %H:%i',
		am:null,
		pm:null,
		price:'{obj} €',
		priceSettings:{
			groupDelimiter:'.',
			groupSize:3,
			decimalDelimiter:',',
			decimalSize:2
		},
		calendar:{
			monthFull:['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
			monthShort:['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
			dayFull:['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
			dayShort:['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
			hours:'Stunden',
			minutes:'Minuten',
			done:'Fertig',
			clear:'Entfernen',
			today:'Heute'
		},
		dataExport:{
			page:'Seite',
			of:'von'
		},
		PDFviewer:{
			of:'von',
			automaticZoom:'Automatisch Zoom',
			actualSize:'Aktuelles Ausmaß',
			pageFit:'Seite Ausmaß',
			pageWidth:'Seite Breite',
			pageHeight:'Seite Höhe',
			enterPassword:'Passwort eingeben',
			passwordError:'Falsches passwort'
		},
		aria:{
			calendar:'Kalender',
			increaseValue:'Wert erhöhen',
			decreaseValue:'Wert verringern',
			navMonth:['Vorheriger Monat', 'Nächsten Monat'],
			navYear:['Vorheriges Jahr', 'Nächstes Jahr'],
			navDecade:['Zurück Jahrzehnt', 'Als nächstes Jahrzehnt'],
			dateFormat:'%j. %F %Y',
			monthFormat:'%F %Y',
			yearFormat:'%Y',
			hourFormat:'Stunden: %H',
			minuteFormat:'Minuten: %i',
			removeItem:'Element entfernen',
			pages:['Erste Seite', 'Vorherige Seite', 'Folgeseite', 'Letzte Seite'],
			page:'Seite',
			headermenu:'Titelmenü',
			openGroup:'Öffnen Spaltengruppe ',
			closeGroup:'Schließen Spaltengruppe ',
			closeTab:'Tab schließen',
			showTabs:'Weitere Tabs',
			resetTreeMap:'Zurück zur ursprünglichen Ansicht',
			navTreeMap:'Aufleveln',
			nextTab:'Weiter tab',
			prevTab:'Zurück tab',
			multitextSection:'Element hinzufügen',
			multitextextraSection:'Element entfernen',
			showChart:'Chart anzeigen',
			hideChart:'Chart verstecken',
			resizeChart:'Chart Größe ändern'
		},
		richtext:{
			underline:'Unterstreichen',
			bold:'Fettgedruckt',
			italic:'Kursiv'
		},
		combo:{
			select:'Auswählen',
			selectAll:'Alles auswählen',
			unselectAll:'Alles widerrufen'
		},
		message:{
			ok:'OK',
			cancel:'Abbrechen'
		},
		comments:{
			send:'Absenden',
			confirmMessage:'Der Kommentar wird entfernt. Sind Sie sicher?',
			edit:'Redigieren',
			remove:'Löschen',
			placeholder:'Geben Sie hier ein..',
			moreComments:'Mehr Kommentare'
		},
		filter:{
			less:'weniger',
			lessOrEqual:'weniger oder gleich',
			greater:'mehr',
			greaterOrEqual:'größer oder gleich',
			contains:'enthält',
			notContains:'nicht enthält',
			equal:'gleich',
			notEqual:'ungleich',
			beginsWith:'beginnt mit',
			notBeginsWith:'nicht beginnt mit',
			endsWith:'endet mit',
			notEndsWith:'nicht endet mit',
			between:'zwischen',
			notBetween:'nicht zwischen'
		}
	}, I.locales['es-ES']={
		groupDelimiter:'.',
		groupSize:3,
		decimalDelimiter:',',
		decimalSize:2,
		dateFormat:'%d/%n/%Y',
		timeFormat:'%G:%i',
		longDateFormat:'%d %F %Y',
		fullDateFormat:'%d %F %Y %G:%i',
		am:null,
		pm:null,
		price:'{obj} €',
		priceSettings:{
			groupDelimiter:'.',
			groupSize:3,
			decimalDelimiter:',',
			decimalSize:2
		},
		calendar:{
			monthFull:['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
			monthShort:['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
			dayFull:['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
			dayShort:['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
			hours:'Horas',
			minutes:'Minutos',
			done:'Listo',
			clear:'Reinicio',
			today:'Hoy'
		},
		dataExport:{
			page:'Página',
			of:'de'
		},
		PDFviewer:{
			of:'de',
			automaticZoom:'Zoom automático',
			actualSize:'Tamaño real',
			pageFit:'Tamaño de página',
			pageWidth:'Ancho de página',
			pageHeight:'Altura de la página',
			enterPassword:'Introduzca la contraseña',
			passwordError:'Contraseña incorrecta'
		},
		aria:{
			calendar:'Сalendario',
			increaseValue:'Aumentar el valor',
			decreaseValue:'Disminuye el valor',
			navMonth:['Mes anterior', 'Próximo mes'],
			navYear:['Año anterior', 'Próximo año'],
			navDecade:['Década anterior', 'Próxima década'],
			dateFormat:'%d %F %Y',
			monthFormat:'%F %Y',
			yearFormat:'%Y',
			hourFormat:'Horas: %G',
			minuteFormat:'Minutos: %i',
			removeItem:'Retire el elemento',
			pages:['Primera página', 'Pagina anterior', 'Siguiente página', 'Última página'],
			page:'Página',
			headermenu:'Menú de títulos',
			openGroup:'Grupo de columnas abiertas',
			closeGroup:'Primer grupo de columnas',
			closeTab:'Cerrar tab',
			showTabs:'Mostrar más tabs',
			resetTreeMap:'Volver a la vista original',
			navTreeMap:'Elevar a mismo nivel',
			nextTab:'Siguiente tab',
			prevTab:'Tab anterior',
			multitextSection:'Añadir elemento',
			multitextextraSection:'Retire el elemento',
			showChart:'Espectáculo chart',
			hideChart:'Esconder chart',
			resizeChart:'Cambiar el tamaño el chart'
		},
		richtext:{
			underline:'Subrayar',
			bold:'Negrita',
			italic:'Itálico'
		},
		combo:{
			select:'Seleccionar',
			selectAll:'Seleccionar todo',
			unselectAll:'Deselecciona todo'
		},
		message:{
			ok:'OK',
			cancel:'Cancelar'
		},
		comments:{
			send:'Enviar',
			confirmMessage:'El comentario será eliminado. Estás seguro?',
			edit:'Corregir',
			remove:'Suprimir',
			placeholder:'Escriba aquí..',
			moreComments:'Más comentarios'
		},
		filter:{
			less:'menos',
			lessOrEqual:'menor o igual',
			greater:'mayor',
			greaterOrEqual:'mayor o igual',
			contains:'contiene',
			notContains:'not contiene',
			equal:'igual',
			notEqual:'no es igual',
			beginsWith:'comienza con',
			notBeginsWith:'no comienza con',
			endsWith:'termina con',
			notEndsWith:'no termina con',
			between:'entre',
			notBetween:'no entre'
		}
	}, I.locales['fr-FR']={
		groupDelimiter:' ',
		groupSize:3,
		decimalDelimiter:',',
		decimalSize:2,
		dateFormat:'%d/%m/%Y',
		timeFormat:'%H:%i',
		longDateFormat:'%d %F %Y',
		fullDateFormat:'%d.%m.%Y %H:%i',
		price:'{obj} €',
		priceSettings:null,
		calendar:{
			monthFull:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
			monthShort:['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aôu', 'Sep', 'Oct', 'Nov', 'Déc'],
			dayFull:['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
			dayShort:['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
			hours:'Heures',
			minutes:'Minutes',
			done:'Fini',
			clear:'Effacer',
			today:'Aujourd\'hui'
		},
		dataExport:{
			page:'Page',
			of:'sur'
		},
		PDFviewer:{
			of:'sur',
			automaticZoom:'Zoom automatique',
			actualSize:'Taille actuelle',
			pageFit:'Taille de la page',
			pageWidth:'Largeur de la page',
			pageHeight:'Hauteur de page',
			enterPassword:'Entrez le mot de passe',
			passwordError:'Mauvais mot de passe'
		},
		aria:{
			calendar:'Сalendrier',
			increaseValue:'Augmenter la valeur',
			decreaseValue:'Diminution de la valeur',
			navMonth:['Le mois précédent', 'Le mois prochain'],
			navYear:['Année précédente', 'L\'année prochaine'],
			navDecade:['Décennie précédente', 'Suivant décennie'],
			dateFormat:'%d %F %Y',
			monthFormat:'%F %Y',
			yearFormat:'%Y',
			hourFormat:'Heures: %H',
			minuteFormat:'Minutes: %i',
			removeItem:'Retirer l\'élément',
			pages:['Première page', 'Page précédente', 'Page suivante', 'Dernière page'],
			page:'Page',
			headermenu:'Menu de titre',
			openGroup:'Ouvrir groupe de colonnes ',
			closeGroup:'Fermer groupe de colonnes',
			closeTab:'Fermer tab',
			showTabs:'Montrer plus tabs',
			resetTreeMap:'Revenir à la vue originale',
			navTreeMap:'Niveau supérieur',
			nextTab:'Prochain tab',
			prevTab:'Précédent tab',
			multitextSection:'Ajouter l\'élément',
			multitextextraSection:'Retirer l\'élément',
			showChart:'Montrer chart',
			hideChart:'Cacher chart',
			resizeChart:'Redimensionner chart'
		},
		richtext:{
			underline:'Souligner',
			bold:'Gras',
			italic:'Italique'
		},
		combo:{
			select:'Sélectionner',
			selectAll:'Tout sélectionner',
			unselectAll:'Tout déselectionner'
		},
		message:{
			ok:'OK',
			cancel:'Annuler'
		},
		comments:{
			send:'Envoyer',
			confirmMessage:'Le commentaire sera supprimé. Êtes-vous sûr?',
			edit:'Modifier',
			remove:'Effacer',
			placeholder:'Écrivez ici..',
			moreComments:'Plus de commentaires'
		},
		filter:{
			less:'moins',
			lessOrEqual:'inférieur ou égal',
			greater:'plus grand',
			greaterOrEqual:'supérieur ou égal',
			contains:'contient',
			notContains:'ne contient',
			equal:'égal',
			notEqual:'pas égal',
			beginsWith:'commence par',
			notBeginsWith:'ne commence par',
			endsWith:'se termine par',
			notEndsWith:'pas se termine par',
			between:'entre',
			notBetween:'pas entre'
		}
	}, I.locales['it-IT']={
		groupDelimiter:'.',
		groupSize:3,
		decimalDelimiter:',',
		decimalSize:2,
		dateFormat:'%d/%m/%Y',
		timeFormat:'%H:%i',
		longDateFormat:'%j %F %Y',
		fullDateFormat:'%j %F %Y %H:%i',
		am:null,
		pm:null,
		price:'€ {obj}',
		priceSettings:{
			groupDelimiter:'.',
			groupSize:3,
			decimalDelimiter:',',
			decimalSize:2
		},
		calendar:{
			monthFull:['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
			monthShort:['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
			dayFull:['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
			dayShort:['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
			hours:'Orario',
			minutes:'Minuti',
			done:'Pronto',
			clear:'Pulisci',
			today:'Oggi'
		},
		dataExport:{
			page:'Pagina',
			of:'di'
		},
		PDFviewer:{
			of:'di',
			automaticZoom:'Zoom automatico',
			actualSize:'Dimensione reale',
			pageFit:'Dimensioni della pagina',
			pageWidth:'Larghezza della pagina',
			pageHeight:'Altezza della pagina',
			enterPassword:'Inserisci la password',
			passwordError:'Password errata'
		},
		aria:{
			calendar:'Calendario',
			increaseValue:'Aumenta il valore',
			decreaseValue:'Riduci il valore',
			navMonth:['Il mese scorso', 'Il prossimo mese'],
			navYear:['L\'anno scorso', 'L\'anno prossimo'],
			navDecade:['Decennio precedente', 'Prossimo decennio'],
			dateFormat:'%j %F %Y',
			monthFormat:'%F %Y',
			yearFormat:'%Y',
			hourFormat:'Orario: %H',
			minuteFormat:'Minuti: %i',
			removeItem:'Rimuovere l\'elemento',
			pages:['Prima pagina', 'Pagina precedente', 'Pagina successiva', 'Ultima pagina'],
			page:'Pagina',
			headermenu:'Menu del titolo',
			openGroup:'Aperto gruppo di colonne',
			closeGroup:'Chiudi gruppo di colonne',
			closeTab:'Chiudi tab',
			showTabs:'Mostra più tabs',
			resetTreeMap:'Tornare alla vista originale',
			navTreeMap:'Livello superiore',
			nextTab:'Tab successivo',
			prevTab:'Tab precedente',
			multitextSection:'Aggiungi elemento',
			multitextextraSection:'Rimuovere l\'elemento',
			showChart:'Mostrare grafico',
			hideChart:'Nascondere grafico',
			resizeChart:'Ridimensionare grafico'
		},
		richtext:{
			underline:'Sottolineare',
			bold:'Grassetto',
			italic:'Corsivo'
		},
		combo:{
			select:'Selezionare',
			selectAll:'Seleziona tutto',
			unselectAll:'Deseleziona tutto'
		},
		message:{
			ok:'OK',
			cancel:'Annullare'
		},
		comments:{
			send:'Inviare',
			confirmMessage:'Il commento verrà rimosso. Sei sicuro?',
			edit:'Correggere',
			remove:'Elimina',
			placeholder:'Digitare qui..',
			moreComments:'Altri commenti'
		},
		filter:{
			less:'meno',
			lessOrEqual:'minore o uguale',
			greater:'maggiore',
			greaterOrEqual:'maggiore o uguale',
			contains:'contiene',
			notContains:'non contiene',
			equal:'uguale',
			notEqual:'non uguale',
			beginsWith:'inizia con',
			notBeginsWith:'non inizia con',
			endsWith:'finisce con',
			notEndsWith:'non termina con',
			between:'tra',
			notBetween:'non tra'
		}
	}, I.locales['ja-JP']={
		groupDelimiter:',',
		groupSize:3,
		decimalDelimiter:'.',
		decimalSize:2,
		dateFormat:'%Y.%m.%d',
		timeFormat:'%H:%i',
		longDateFormat:'%Y年%m月%d日',
		fullDateFormat:'%Y.%m.%d %H:%i',
		price:'¥{obj}',
		priceSettings:{
			groupSize:3,
			groupDelimiter:',',
			decimalDelimiter:'',
			decimalSize:0
		},
		calendar:{
			monthFull:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			monthShort:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			dayFull:['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
			dayShort:['日', '月', '火', '水', '木', '金', '土'],
			hours:'営業時間',
			minutes:'分',
			done:'レディー',
			clear:'削除する',
			today:'今日'
		},
		dataExport:{
			page:'ページ',
			of:'から'
		},
		PDFviewer:{
			of:'から',
			automaticZoom:'自動ズーム',
			actualSize:'実サイズ',
			pageFit:'ページサイズ',
			pageWidth:'ページ幅',
			pageHeight:'ページの高さ',
			enterPassword:'パスワードを入力する',
			passwordError:'間違ったパスワード'
		},
		aria:{
			calendar:'カレンダー',
			increaseValue:'増加値',
			decreaseValue:'数字を小さく',
			navMonth:['前の月', '来月'],
			navYear:['前年', '来年'],
			navDecade:['前の十年', '次の10年'],
			dateFormat:'%Y年%m月%d日',
			monthFormat:'%Y年%m月',
			yearFormat:'%Y年',
			hourFormat:'営業時間: %H',
			minuteFormat:'分: %i',
			removeItem:'要素を削除します',
			pages:['一ページ目', '前のページ', '次のページ', '最後のページ'],
			page:'ページ',
			headermenu:'ヘッダメニュー',
			openGroup:'オープン列グループ',
			closeGroup:'閉じる列グループ',
			closeTab:'タブを閉じます',
			showTabs:'複数のタブを表示します',
			resetTreeMap:'元の表示に戻ります',
			navTreeMap:'レベルパック',
			nextTab:'次のタブ',
			prevTab:'前のタブ',
			multitextSection:'要素を追加します。',
			multitextextraSection:'要素を削除します',
			showChart:'靴チャート',
			hideChart:'隠すチャート',
			resizeChart:'グラフのサイズを変更'
		},
		richtext:{
			underline:'アンダーライン',
			bold:'大胆な',
			italic:'イタリック'
		},
		combo:{
			select:'選択する',
			selectAll:'すべて選択',
			unselectAll:'すべての選択を解除する'
		},
		message:{
			ok:'OK',
			cancel:'取り消す'
		},
		comments:{
			send:'送信',
			confirmMessage:'コメントは削除されます. 本気ですか？',
			edit:'編集',
			remove:'削除',
			placeholder:'ここに入力..',
			moreComments:'その他のコメント'
		},
		filter:{
			less:'レス',
			lessOrEqual:'以下',
			greater:'大きいです',
			greaterOrEqual:'以上',
			contains:'含まれています',
			notContains:'含まれていません',
			equal:'等しいです',
			notEqual:'等しくありません',
			beginsWith:'で始まります',
			notBeginsWith:'ないで始まります',
			endsWith:'で終わります',
			notEndsWith:'で終わりではありません',
			between:'間に',
			notBetween:'いない間'
		}
	}, I.locales['pt-BR']={
		groupDelimiter:'.',
		groupSize:3,
		decimalDelimiter:',',
		decimalSize:2,
		dateFormat:'%d/%m/%Y',
		timeFormat:'%G:%i',
		longDateFormat:'%d de %F de %Y',
		fullDateFormat:'%d de %F de %Y %G:%i',
		am:null,
		pm:null,
		price:'R$ {obj}',
		priceSettings:{
			groupDelimiter:'.',
			groupSize:3,
			decimalDelimiter:',',
			decimalSize:2
		},
		fileSize:['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb'],
		calendar:{
			monthFull:['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
			monthShort:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
			dayFull:['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
			dayShort:['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
			hours:'Horas',
			minutes:'Minutos',
			done:'Feito',
			clear:'Limpar',
			today:'Hoje'
		},
		dataExport:{
			page:'Página',
			of:'de'
		},
		PDFviewer:{
			of:'de',
			automaticZoom:'Zoom automático',
			actualSize:'Tamanho atual',
			pageFit:'Tamanho da página',
			pageWidth:'Largura da página',
			pageHeight:'Altura da página',
			enterPassword:'Digite a senha',
			passwordError:'Senha incorreta'
		},
		aria:{
			calendar:'Calendário',
			increaseValue:'Aumentar o valor',
			decreaseValue:'Diminuir o valor',
			navMonth:['Mês anterior', 'Próximo mês'],
			navYear:['Ano anterior', 'Próximo ano'],
			navDecade:['Década anterior', 'Próxima década'],
			dateFormat:'%d de %F de %Y',
			monthFormat:'%F de %Y',
			yearFormat:'%Y',
			hourFormat:'Horas: %G',
			minuteFormat:'Minutos: %i',
			removeItem:'Remover elemento',
			pages:['Primeira página', 'Página anterior', 'Próxima página', 'Última página'],
			page:'Página',
			headermenu:'Menu de títulos',
			openGroup:'Grupo coluna aberta',
			closeGroup:'Fechar grupo de colunas',
			closeTab:'Fechar tab',
			showTabs:'Mostre mais tabs',
			resetTreeMap:'Мoltar à vista original',
			navTreeMap:'Upar',
			nextTab:'Próximo tab',
			prevTab:'Anterior tab',
			multitextSection:'Adicionar elemento',
			multitextextraSection:'Remover elemento',
			showChart:'Exposição chart',
			hideChart:'Esconder chart',
			resizeChart:'Redimensionar chart'
		},
		richtext:{
			underline:'Sublinhado',
			bold:'Negrito',
			italic:'itálico'
		},
		combo:{
			select:'Selecionar',
			selectAll:'Selecionar tudo',
			unselectAll:'Desmarque todos'
		},
		message:{
			ok:'OK',
			cancel:'Cancelar'
		},
		comments:{
			send:'Enviar',
			confirmMessage:'Comentário será removido. Você tem certeza?',
			edit:'Editar',
			remove:'Excluir',
			placeholder:'Digite aqui..',
			moreComments:'Mais comentários'
		},
		filter:{
			less:'menos',
			lessOrEqual:'menor ou igual',
			greater:'maior',
			greaterOrEqual:'maior ou igual',
			contains:'contém',
			notContains:'não contém',
			equal:'igual',
			notEqual:'não é igual',
			beginsWith:'começa com',
			notBeginsWith:'não começa com',
			endsWith:'termina com',
			notEndsWith:'não termina com',
			between:'entre',
			notBetween:'não entre'
		}
	}, I.locales['zh-CN']={
		groupDelimiter:',',
		groupSize:3,
		decimalDelimiter:'.',
		decimalSize:2,
		dateFormat:'%Y/%m/%j',
		timeFormat:'%G:%i',
		longDateFormat:'%Y\'年\'%m\'月\'%j\'日\'',
		fullDateFormat:'%Y\'年\'%m\'月\'%j\'日\' %G:%i',
		am:['上午', '上午'],
		pm:['下午', '下午'],
		price:'¥{obj}',
		priceSettings:{
			groupDelimiter:',',
			groupSize:3,
			decimalDelimiter:'.',
			decimalSize:2
		},
		calendar:{
			monthFull:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			monthShort:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			dayFull:['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
			dayShort:['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
			hours:'小时',
			minutes:'分钟',
			done:'完成',
			clear:'清除',
			today:'今天'
		},
		dataExport:{
			page:'页',
			of:'从'
		},
		PDFviewer:{
			of:'从',
			automaticZoom:'自动设置页面大小',
			actualSize:'实际尺寸',
			pageFit:'页面大小',
			pageWidth:'页面宽度',
			pageHeight:'页面高度',
			enterPassword:'输入密码',
			passwordError:'密码错误'
		},
		aria:{
			calendar:'日历',
			increaseValue:'增加值',
			decreaseValue:'减少值',
			navMonth:['上个月', '下个月'],
			navYear:['上年', '明年'],
			navDecade:['过去十年', '下个十年'],
			dateFormat:'%Y\'年\'%m\'月\'%j\'日\'',
			monthFormat:'%Y\'年\'%m\'月',
			yearFormat:'%Y\'年',
			hourFormat:'小时: %G',
			minuteFormat:'分钟: %i',
			removeItem:'删除元素',
			pages:['第一页', '上一页', '下一页', '最后一页'],
			page:'页',
			headermenu:'标题菜单',
			openGroup:'打开栏目组',
			closeGroup:'关闭栏目组',
			closeTab:'关闭标签',
			showTabs:'显示更多选项卡',
			resetTreeMap:'回到原来的视图',
			navTreeMap:'升级',
			nextTab:'下一个标签',
			prevTab:'前一个标签',
			multitextSection:'加元',
			multitextextraSection:'删除元素',
			showChart:'显示图表',
			hideChart:'隐藏图表',
			resizeChart:'调整图'
		},
		richtext:{
			underline:'强调',
			bold:'粗體',
			italic:'斜体'
		},
		combo:{
			select:'选择',
			selectAll:'全选',
			unselectAll:'全部取消选择'
		},
		message:{
			ok:'好',
			cancel:'取消'
		},
		comments:{
			send:'发送',
			confirmMessage:'评论将被删除. 你确定吗?',
			edit:'编辑',
			remove:'去掉',
			placeholder:'在此输入..',
			moreComments:'更多评论'
		},
		filter:{
			less:'减',
			lessOrEqual:'少于或等于',
			greater:'更大',
			greaterOrEqual:'大于或等于',
			contains:'包含',
			notContains:'不包含',
			equal:'等于',
			notEqual:'不平等',
			beginsWith:'开始于',
			notBeginsWith:'不开始',
			endsWith:'结束',
			notEndsWith:'不是以',
			between:'之间',
			notBetween:'不在之间'
		}
	}, I.locales['ru-RU']={
		groupDelimiter:' ',
		groupSize:3,
		decimalDelimiter:',',
		decimalSize:2,
		dateFormat:'%d.%m.%Y',
		timeFormat:'%H:%i',
		longDateFormat:'%d %F %Y',
		fullDateFormat:'%d.%m.%Y %H:%i',
		price:'{obj} руб.',
		priceSettings:null,
		calendar:{
			monthFull:['Январь', 'Февраль', 'Март', 'Апрель', 'Maй', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Oктябрь', 'Ноябрь', 'Декабрь'],
			monthShort:['Янв', 'Фев', 'Maр', 'Aпр', 'Maй', 'Июн', 'Июл', 'Aвг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			dayFull:['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
			dayShort:['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			hours:'Часы',
			minutes:'Минуты',
			done:'Гoтовo',
			clear:'Очистить',
			today:'Сегодня'
		},
		dataExport:{
			page:'Страница',
			of:'из'
		},
		PDFviewer:{
			of:'из',
			automaticZoom:'Автоматический зум',
			actualSize:'Настоящий размер',
			pageFit:'Размер страницы',
			pageWidth:'Ширина страницы',
			pageHeight:'Высота страницы',
			enterPassword:'Введите пароль',
			passwordError:'Неверный пароль'
		},
		aria:{
			calendar:'Календарь',
			increaseValue:'Увеличить значение',
			decreaseValue:'Уменьшить значение',
			navMonth:['Предыдущий месяц', 'Следующий месяц'],
			navYear:['Предыдущий год', 'Следующий год'],
			navDecade:['Предыдущие десять лет', 'Следующие десять лет'],
			dateFormat:'%d %F %Y',
			monthFormat:'%F %Y',
			yearFormat:'%Y',
			hourFormat:'Часы: %H',
			minuteFormat:'Минуты: %i',
			removeItem:'Удалить элемент',
			pages:['Первая страница', 'Предыдущая страница', 'Следующая страница', 'Последняя страница'],
			page:'Страница',
			headermenu:'Меню шапки таблицы',
			openGroup:'Развернуть группу столбцов',
			closeGroup:'Свернуть группу столбцов',
			closeTab:'Закрыть вкладку',
			showTabs:'Показать больше вкладок',
			resetTreeMap:'Вернуться к первоначальному представлению',
			navTreeMap:'Перейти на уровень выше',
			nextTab:'Следующая вкладка',
			prevTab:'Предыдущая вкладка',
			multitextSection:'Добавить элемент',
			multitextextraSection:'Удалить элемент',
			showChart:'Показать чарт',
			hideChart:'Спрятать чарт',
			resizeChart:'Изменить размер чарта'
		},
		richtext:{
			underline:'Подчеркивание',
			bold:'Жирный',
			italic:'Курсив'
		},
		combo:{
			select:'Выбрать',
			selectAll:'Выбрать все',
			unselectAll:'Сброс выбора'
		},
		message:{
			ok:'OK',
			cancel:'Отмена'
		},
		comments:{
			send:'Отправить',
			confirmMessage:'Комментарий будет удален. Вы уверены?',
			edit:'Редактировать',
			remove:'Удалить',
			placeholder:'Введите текст..',
			moreComments:'Больше комментариев'
		},
		filter:{
			less:'меньше',
			lessOrEqual:'меньше или равно',
			greater:'больше',
			greaterOrEqual:'больше или равно',
			contains:'содержит',
			notContains:'не содержит',
			equal:'равно',
			notEqual:'не равно',
			beginsWith:'начинается с',
			notBeginsWith:'не начинается с',
			endsWith:'заканчиватся',
			notEndsWith:'не заканчиватся',
			between:'между',
			notBetween:'не между'
		}
	}, I.locales['be-BY']={
		groupDelimiter:' ',
		groupSize:3,
		decimalDelimiter:',',
		decimalSize:2,
		dateFormat:'%d.%m.%Y',
		timeFormat:'%H:%i',
		longDateFormat:'%d %F %Y',
		fullDateFormat:'%d.%m.%Y %H:%i',
		price:'{obj} руб.',
		priceSettings:{
			groupSize:3,
			groupDelimiter:' ',
			decimalDelimiter:'',
			decimalSize:0
		},
		calendar:{
			monthFull:['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Травень', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань'],
			monthShort:['Студз', 'Лют', 'Сак', 'Крас', 'Трав', 'Чэр', 'Ліп', 'Жнів', 'Вер', 'Каст', 'Ліст', 'Снеж'],
			dayFull:['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'],
			dayShort:['Нд', 'Пн', 'Аўт', 'Ср', 'Чцв', 'Пт', 'Сб'],
			hours:'Гадзіны',
			minutes:'Хвіліны',
			done:'Гатова',
			today:'Cёння',
			clear:'Ачысціць'
		},
		dataExport:{
			page:'Старонка',
			of:'з'
		},
		PDFviewer:{
			of:'з',
			automaticZoom:'Аўтаматычны зум',
			actualSize:'Сапраўдны памер',
			pageFit:'Памер старонкі',
			pageWidth:'Шырыня старонкі',
			pageHeight:'Вышыня старонкі',
			enterPassword:'Увядзіце пароль',
			passwordError:'Няправільны пароль'
		},
		aria:{
			calendar:'Каляндар',
			increaseValue:'Павялічыць значэнне',
			decreaseValue:'Паменшыць значэнне',
			navMonth:['Папярэдні месяц', 'Наступны месяц'],
			navYear:['Папярэдні год', 'Наступны год'],
			navDecade:['Папярэднія дзесяць год', 'Наступныя дзесяць год'],
			dateFormat:'%d %F %Y',
			monthFormat:'%F %Y',
			yearFormat:'%Y',
			hourFormat:'Hours: %h',
			minuteFormat:'Гадзіны: %i',
			removeItem:'Прыбраць элемент',
			pages:['Першая старонка', 'Папярэдняя старонка', 'Наступная старонка', 'Апошняя старонка'],
			page:'Старонка',
			headermenu:'Меню загалоўка',
			openGroup:'Адкрыць групу слупкоў',
			closeGroup:'Закрыць групу слупкоў',
			closeTab:'Закрыць укладку',
			showTabs:'Паказаць больш укладак',
			resetTreeMap:'Вярнуцца да першапачатковага выгляду',
			navTreeMap:'Падняцца на ўзровень вышэй',
			nextTab:'Наступная ўкладка',
			prevTab:'Папярэдняя ўкладка',
			multitextSection:'Дадаць элемент',
			multitextextraSection:'Прыбраць элемент',
			showChart:'Паказаць графік',
			hideChart:'Схаваць графік',
			resizeChart:'Змяніць памер графіка'
		},
		richtext:{
			underline:'Падкрэсліванне',
			bold:'Паўтлусты',
			italic:'Курсіў'
		},
		combo:{
			select:'Абраць',
			selectAll:'Абраць усё',
			unselectAll:'Ачысціць ўсе'
		},
		message:{
			ok:'ОК',
			cancel:'Адмена'
		},
		comments:{
			send:'Даслаць',
			confirmMessage:'Каментарый будзе выдалены. Вы ўпэўнены?',
			edit:'Рэдагаваць',
			remove:'Выдаліць',
			placeholder:'Пішыце тут..',
			moreComments:'Больш каментарыяў'
		},
		filter:{
			less:'менш',
			lessOrEqual:'менш або роўна',
			greater:'больш',
			greaterOrEqual:'больш або роўна',
			contains:'змяшчае',
			notContains:'не змяшчае',
			equal:'роўныя',
			notEqual:'не роўныя',
			beginsWith:'пачынаецца з',
			notBeginsWith:'не пачынаецца з',
			endsWith:'заканчваецца',
			notEndsWith:'не сканчаецца',
			between:'паміж',
			notBetween:'не паміж'
		}
	};
	H.protoUI({
		name:'spacer',
		defaults:{borderless:!0},
		$init:function() {this.Vt.className+=' webix_spacer';}
	}, Hi.view);
	var In={
		name:'template',
		$init:function(t) {
			var i=this.Ud[t.type];
			i && (i.css && t.css && (this.Vt.className+=' '+i.css), H.extend(t, i), t.borderless && (delete t.Dt, this.ni(t))), this.tt==this.Vt?(this.tt=ft('DIV'), this.tt.className=' webix_template', this.Vt.appendChild(this.tt)):this.tt.className+=' webix_template', this.attachEvent('onAfterRender', this.Yd);
		},
		setValues:function(t, i) {this.data=i?H.extend(this.data, t, !0):t, this.render();},
		getValues:function() {return this.data;},
		$skin:function() {this.Ud.header.height=Li.barHeight-2*Li.borderWidth, this.Ud.section.height=Li.barHeight;},
		Ud:{
			header:{css:'webix_header'},
			section:{
				css:'webix_section',
				borderless:!0
			},
			clean:{
				css:'webix_clean',
				borderless:!0
			}
		},
		onClick_setter:function(t) {return this.on_click=H.extend(this.on_click || {}, t, !0), this.Pu || H.extend(this, ze), t;},
		defaults:{template:Yt.empty},
		qd:function() {this.Gd= !1, this.Xd(), this.resize();},
		Xd:function() {this.Gd || (this.Gd= !0, this.render());},
		src_setter:function(t) {
			return this.Gd= !0, this.callEvent('onBeforeLoad', [])?(B(t, S(function(t) {this.P.template=Yt(t), this.qd(), this.callEvent('onAfterLoad', []);}, this)), t):'';
		},
		content_setter:function(t) {t && (this.Gd= !0, this.render=function() {}, this.tt.appendChild(C(t)), this.Yd());},
		refresh:function() {this.render();},
		setHTML:function(t) {this.P.template=function() {return t;}, this.refresh();},
		setContent:function(t) {this.tt.innerHTML='', this.content_setter(t);},
		$setSize:function(t, i) {
			if(Hi.api.$setSize.call(this, t, i)) {
				if(this.Xd(), this.P.autoheight) {
					var e=this.getTopParentView();
					clearTimeout(e.Jd), e.Jd=k(this.resize, this);
				}
				return !0;
			}
		},
		$getSize:function(t, i) {return !this.P.autoheight || this.P.type && 'clean'!=this.P.type || (this.P.height=this.Kd()), Hi.api.$getSize.call(this, t, i);},
		Yd:function() {this.P.autoheight && (this.pe=null, this.resize());},
		Kd:function() {
			var t, i=Li.layoutPadding.space;
			return this.Xd(), this.isVisible()?(this.tt.style.height='auto', t=this.tt.scrollHeight, this.tt.style.height=''):t=St(this.Q(this.data) || this.tt.innerHTML, 'webix_template', (this.$width || (this.getParentView()?this.getParentView().$width:0))-i).height, t;
		},
		wc:!0
	}, An={
		api:In,
		view:H.protoUI(In, je, Pi, Ht, qt, g, Hi.view)
	}, Tn={
		name:'scrollview',
		defaults:{
			scroll:'y',
			scrollSpeed:'300ms'
		},
		$init:function() {this.Vt.className+=' webix_scrollview';},
		body_setter:function(t) {t.borderless= !0, (ii.mt=this).$t=si.Ht(t), this.tt.appendChild(this.$t.Vt);},
		getChildViews:function() {return [this.$t];},
		getBody:function() {return this.$t;},
		resizeChildren:function() {this.$t && (this.Jl=this.$t.$getSize(0, 0), this.Zd(), y('onResize', []));},
		Zd:function() {
			var t=Math.max(this.me, this.Jl[0]), i=Math.max(this.ge, this.Jl[2]);
			if(this.$t.$setSize(t, i), q.touch) {
				var e=this.getScrollState(), s=this.$t.ge-this.ge;
				s<e.y && this.scrollTo(null, s);
			}
			ii.vt && (ii.vt= !1, this.Jl=this.$t.$getSize(0, 0), this.Zd());
		},
		$getSize:function(t, i) {
			var e=this.Jl=this.$t.$getSize(0, 0), s=Hi.api.$getSize.call(this, t, i), n=this.Qd || q.scrollSize;
			return 'x'==this.P.scroll?(s[2]=Math.max(s[2], e[2])+n, s[3]=Math.min(s[3], e[3])+n):'y'==this.P.scroll && (s[0]=Math.max(s[0], e[0])+n, s[1]=Math.min(s[1], e[1])+n), s;
		},
		$setSize:function(t, i) {
			var e=q.scrollSize;
			q.scrollSize=this.Qd || e, (Hi.api.$setSize.call(this, t, i) || ii.Jt) && this.Zd(), q.scrollSize=e;
		},
		scroll_setter:function(t) {
			var i=q.$customScroll;
			return 'string'== typeof t && 0===t.indexOf('native-') && (this.Qd=17, t=t.replace('native-', ''), q.$customScroll= !1), t=je.scroll_setter.call(this, t), q.$customScroll=i, t;
		},
		Tt:function(t) {this.$t.destructor(), this.$t=t, this.tt.appendChild(this.$t.Vt), this.resizeChildren();},
		showView:function(t) {
			var i=oi(t).$view.offsetTop-oi(t).$view.parentNode.offsetTop;
			this.scrollTo(0, i);
		}
	}, Fn=(H.protoUI(Tn, je, g, Hi.view), H.protoUI({
		name:'iframe',
		$init:function() {this.tt=this.Oi, this.Oi.innerHTML='<iframe style=\'width:100%; height:100%\' frameborder=\'0\' onload=\'var t = $$(this.parentNode.getAttribute("view_id")); if (t) t.callEvent("onAfterLoad",[]);\' src=\'about:blank\'></iframe>';},
		load:function(t) {this.src_setter(t);},
		src_setter:function(t) {return this.callEvent('onBeforeLoad', [])?this.getIframe().src=t:'';},
		getIframe:function() {return this.Oi.getElementsByTagName('iframe')[0];},
		getWindow:function() {return this.getIframe().contentWindow;}
	}, Hi.view, g), {
		name:'accordion',
		defaults:{
			panelClass:'accordionitem',
			multi:!1,
			collapsed:!1
		},
		$init:function() {this.Vt.setAttribute('role', 'tablist'), this.Vt.setAttribute('aria-multiselectable', 'true');},
		Tt:function(t) {kn.api.Tt.apply(this, arguments), t.collapsed_setter && t.refresh && t.refresh();},
		Hl:function() {
			for(var t=this.P.panelClass, i=this.jl, e=0; e<i.length; e++) !i[e].body && !i[e].header || i[e].view || i[e].align || (i[e].view=t), R(i[e].collapsed) && (i[e].collapsed=this.P.collapsed);
			this.tv= !0, kn.api.Hl.call(this), this.tv= !1;
			for(var s=0; s<this.hi.length; s++) this.hi[s].name==t && this.hi[s].refresh(), this.hi[s].iv= !1;
			for(var n=!1, h=this.hi.length-1; 0<=h && !n; h--) this.hi[h].P.hidden || (n=this.hi[h].iv= !0);
		},
		ev:function(t) {
			if(!1===this.P.multi && !0!==this.tv) for(var i=0; i<this.hi.length; i++) t!=this.hi[i] && !this.hi[i].P.collapsed && this.hi[i].collapse && this.hi[i].collapse();
			t.callEvent && (t.callEvent('onViewShow', []), vi(t, this.Me));
		},
		sv:function(t) {
			if(!0===this.P.multi || this.tv) return !0;
			for(var i=0; i<this.hi.length; i++) if(t!=this.hi[i] && !this.hi[i].P.collapsed && this.hi[i].isVisible() && !this.hi[i].$nospace) return !0;
			return !1;
		},
		$skin:function() {kn.api.$skin.call(this), Li.accordionType && (this.defaults.type=Li.accordionType);}
	}), Vn={
		api:Fn,
		view:H.protoUI(Fn, kn.view)
	}, zn=(H.protoUI({
		name:'headerlayout',
		defaults:{
			type:'accordion',
			multi:'mixed',
			collapsed:!1
		}
	}, Vn.view), {
		name:'accordionitem',
		$init:function(t) {this.Vt.innerHTML='<div tabindex=\'0\' webix_ai_id=\''+t.id+'\'  class=\'webix_accordionitem_header\'><div class=\'webix_accordionitem_button\' ></div><div class=\'webix_accordionitem_label\' ></div></div><div class=\'webix_accordionitem_body\'></div>', this.Oi=this.Vt, this.dn=this.Oi.childNodes[0], t.header || (this.dn.style.display='none'), this.nv=this.Oi.childNodes[0].childNodes[1], this.hv=this.Oi.childNodes[0].childNodes[0], this.An=this.Oi.childNodes[1], this.Vt.className+=' webix_accordionitem', this.Tn=this.$t=null, this.hi= !0, this.An.setAttribute('role', 'tabpanel'), this.dn.setAttribute('role', 'tab'), this.attachEvent('onKeyPress', this.Se);},
		Ft:function() {this.body_setter();},
		Tt:function(t) {this.$t.destructor(), this.$t=t, this.An.appendChild(this.$t.Vt), this.resize();},
		Ko:'webix_ai_id',
		getChildViews:function() {return [this.$t];},
		body_setter:function(t) {
			return 'object'!=M(t) && (t={template:t}), t.Dt={
				top:!0,
				left:!0,
				right:!0,
				bottom:!0
			}, (ii.mt=this).$t=si.Ht(t), this.An.appendChild(this.$t.Vt), t;
		},
		header_setter:function(t) {return t && (t=Yt(t)), t;},
		headerAlt_setter:function(t) {return t && (t=Yt(t)), t;},
		$getSize:function(t, i) {
			var e=this.$t.$getSize(0, 0), s=this.P.Dt;
			s && (t+=(s.left?0:1)+(s.right?0:1), i+=(s.top?0:1)+(s.bottom?0:1));
			var n=0, h=Vi.api.$getSize.call(this, 0, 0);
			h[0]=(h[0] || e[0])+t, 1e5<=h[1] && (h[1]=e[1]), h[1]+=t, h[2]=(h[2] || e[2])+i;
			var r=h[3]<1e5;
			return r || (h[3]=e[3]), h[3]+=i, this.getParentView().Pl?this.P.collapsed?h[2]=h[3]=this.rv()+i:this.P.header && (n=this.P.headerHeight):(this.P.collapsed && (h[0]=h[1]=this.rv()+t), this.P.header && (n=this.P.headerHeight)), r || (h[2]+=n, h[3]+=n), h;
		},
		on_click:{
			webix_accordionitem_header:function(t) {return this.ov(t), !1;},
			webix_accordionitem_header_v:function(t) {return this.ov(t), !1;}
		},
		ov:function() {this.define('collapsed', !this.P.collapsed);},
		collapsed_setter:function(t) {
			if(!1!==this.P.header) {
				var i=this.getParentView();
				if(i) {
					if(t) if(i.sv(this)) this.av(); else {
						var e=0;
						if(1<i.hi.length) for(var s=0; s<i.hi.length; s++) {
							var n=i.hi[s];
							if(this!=n && n.isVisible() && n.expand) {
								n.expand(), this.av(), e=1;
								break;
							}
						}
						if(!e) return;
					} else this.uv();
					(this.P.collapsed=t) || i.ev(this), this.refresh(), ii.gt || this.resize(), i.callEvent('onAfter'+(t?'Collapse':'Expand'), [this.P.id]), this.P.$noresize=t;
				}
				return t;
			}
		},
		collapse:function() {this.define('collapsed', !0), Mi.xi(this);},
		expand:function() {this.define('collapsed', !1);},
		xe:function() {this.show();},
		zi:function() {this.hide();},
		uv:function() {this.An.style.display='', Mt(this.$view, 'collapsed'), Mt(this.dn, 'collapsed'), this.dn.setAttribute('aria-expanded', 'true');},
		av:function() {this.P.headerAlt && (this.nv.innerHTML=this.P.headerAlt()), this.An.style.display='none', yt(this.$view, 'collapsed'), yt(this.dn, 'collapsed'), this.dn.setAttribute('aria-expanded', 'false');},
		refresh:function() {
			var t=this.P[this.P.collapsed?'headerAlt':'header'] || this.P.header;
			t && (this.nv.innerHTML=t(), this.hv.setAttribute('aria-label', t()));
			var i=this.getParentView().Pl?'vertical':'horizontal';
			this.Vt.className.indexOf(' '+i)<0 && yt(this.Vt, i), q.transform || yt(this.Vt, 'webix_ie', !0);
		},
		rv:function() {return this.P.collapsed?this.P.headerAltHeight:this.P.headerHeight;},
		$setSize:function(t, i) {
			if(Hi.api.$setSize.call(this, t, i) || this.rv()!=this.cv) {
				t=this.me, i=this.ge;
				var e=this.cv=this.rv();
				if(this.P.header) if(this.dn.style.height=e+'px', this.dn.style.width='auto', this.dn.style[q.transform]='', this.dn.style.borderBottomWidth=(this.P.collapsed?0:1)+'px', this.getParentView().Pl || !this.P.collapsed) i-=this.rv(); else if(this.P.collapsed) if(Ni.isSupported()) {
					this.dn.style.width=i+'px', this.dn.style.height=t+3+'px';
					var s=Math.floor(i/2-t/2)+(t-this.P.headerAltHeight)/2;this.dn.style[q.transform]='rotate(90deg) translate('+s+'px, '+(s+1)+'px)';
				} else this.dn.style.width=t+'px', this.dn.style.height=i+3+'px';
				this.P.collapsed || (this.$t.$setSize(t, i), this.fv=i);
			} else if(!this.P.collapsed) {
				var n=this.$t;
				this.fv && n.$setSize(this.me, this.fv);
			}
		},
		$skin:function() {this.defaults.headerAltHeight=this.defaults.headerHeight=Li.barHeight-2*Li.borderWidth;},
		defaults:{
			header:!1,
			headerAlt:!1,
			body:''
		}
	}), Bn=(H.protoUI(zn, ze, g, Hi.view), {
		name:'resizearea',
		defaults:{dir:'x'},
		$init:function(t) {
			var i=t.dir || 'x', e=C(t.container), s='x'==i?'width':'height', n=t.margin?t.margin+'px':0;
			this.lv='x'==i?'left':'top', this.Vt=ft('DIV', {'class':'webix_resize_area webix_dir_'+i}), Kt(this.Vt, q.mouse.down, wt), n && (n='x'==i?n+' 0 '+n:'0 '+n+' 0 '+n), this.dv=ft('DIV', {
				'class':'webix_resize_handle_'+i,
				style:n?'padding:'+n:''
			}, '<div class=\'webix_handle_content\'></div>'), this.vv=ft('DIV', {'class':'webix_resize_origin_'+i}), t[s] && (this.vv.style[s]=t[s]+(t.border?1:0)+'px', this.dv.style[s]=t[s]+'px'), t.cursor && (this.dv.style.cursor=this.vv.style.cursor=this.Vt.style.cursor=t.cursor), this._v=Zt(e, q.mouse.move, this.pv, {bind:this}), this.mv=Zt(document.body, q.mouse.up, this.bv, {bind:this}), this.dv.style[this.lv]=this.vv.style[this.lv]=t.start+'px', e.appendChild(this.Vt), e.appendChild(this.dv), e.appendChild(this.vv);
		},
		bv:function() {this.callEvent('onResizeEnd', [this.gv]), Qt(this._v), Qt(this.mv), dt(this.Vt), dt(this.dv), dt(this.vv), this.Vt=this.dv=this.vv=null;},
		pv:function(t) {
			var i=bt(t);
			this.gv=('x'==this.P.dir?i.x:i.y)+this.P.start-this.P.eventPos, this.dv.style[this.lv]=this.gv+'px', this.callEvent('onResize', [this.gv]);
		}
	}), Hn=(H.protoUI(Bn, g, Si), {
		name:'resizer',
		defaults:{
			width:7,
			height:7
		},
		$init:function(t) {
			this.getParentView(), this.Vt.className+=' webix_resizer';
			var i=this.getParentView().qa;
			Kt(this.Vt, q.mouse.down, this.wv, {bind:this});
			var e=this.xv();
			this.yv= !1, this.Mv=e, this.Sv='x'==e?'width':'height', 'x'==e?t.height=0:t.width=0, 0<i?(this.Vt.className+=' webix_resizer_v'+e, this.Vt.style.marginRight='-'+i+'px', 'x'==e?t.width=i:t.height=i, this.$nospace= !0):this.Vt.className+=' webix_resizer_'+e, this.Vt.innerHTML='<div class=\'webix_resizer_content\'></div>', 'y'==e && 0<i && (this.Vt.style.marginBottom='-'+(t.height || this.defaults.height)+'px'), this.Vt.setAttribute('webix_disable_drag', 'true'), this.Vt.setAttribute('tabindex', '-1'), this.Vt.setAttribute('aria-grabbed', 'false');
		},
		wv:function(t) {
			var i=this, e=this.kv();
			if(e && !this.P.disabled) {
				t=t || window.event, this.yv= !0, this.Cv=bt(t), this.$v=[], this.Vt.setAttribute('aria-grabbed', 'true');
				for(var s=0; s<2; s++) e[s].$view.setAttribute('aria-dropeffect', 'move');
				this.Vt.setAttribute('aria-dropeffect', 'move'), this.Dv(t, e[0]);
				var n=Zt(document.body, q.mouse.up, function(t) {return Qt(n), i.Iv(t);});
			}
		},
		Iv:function() {this.yv= !1, this.Cv= !1;},
		Dv:function(t, i) {
			var e, s, n, h, r;
			t=t || window.event, e=this.Mv, this.getParentView().Vt.style.position='relative', n=pt(this.Vt), h=pt(this.getParentView().Vt), r=n[e]-h[e], s=pt(i.$view)[e]-pt(this.getParentView().$view)[e], this.Av=[e, i, r, s], this.Tv=new si.resizearea({
				container:this.getParentView().Vt,
				dir:e,
				eventPos:this.Cv[e],
				start:r-1,
				height:this.$height,
				width:this.$width,
				border:1,
				margin:this.getParentView().Ua['x'===e?'left':'top']
			}), this.Tv.attachEvent('onResizeEnd', S(this.Fv, this)), this.Tv.attachEvent('onResize', S(this.Vv, this)), yt(document.body, 'webix_noselect', 1);
		},
		xv:function() {return this.getParentView().Pl?'y':'x';},
		Vv:function() {
			var t, i, e, s, n, h, r, o, a;
			if(this.Av) for(t=this.kv(), s=this.Av[0], e=this.Tv.gv-this.Av[2], o=this.zv(t, s, e), a=t[0]['$'+this.Sv]+t[1]['$'+this.Sv], n=0; n<2; n++) {
				i=n?-e:e, h=t[n].$getSize(0, 0);
				var u='y'==s?h[2]:h[0], c='y'==s?h[3]:h[1];
				if(u===c && (u=t[n].P['y'==s?'minHeight':'minWidth'] || 3, c=t[n].P['y'==s?'maxHeight':'maxWidth'] || 1e5), 0<i && c && c<=o[n] || i<0 && u && u>=o[n]) return this.$v[n]=0<i?c:u, r=this.Bv(t, s), void (this.Tv.dv.style['y'==s?'top':'left']=this.Av[3]+r[0]+'px');
				o[n]<3?this.Tv.dv.style['y'==s?'top':'left']=this.Av[3]+n*a+1+'px':this.$v[n]=null;
			}
		},
		kv:function() {
			var t, i, e;
			for(t=this.getParentView().hi, i=0; i<t.length; i++) if(t[i]==this) return (e=[this.Hv(t, i, 1, -1), this.Hv(t, i, 1, 1)])[0] && e[1] || (e=null), e;
		},
		Hv:function(t, i, e, s) {
			var n=t[i+s*e];
			return n && n.P.hidden?this.Hv(t, i, e+1, s):n && n.P.$noresize?null:n;
		},
		Fv:function(t) {
			if(void 0!==t) {
				var i, e, s, n, h=this.getParentView().Pl;
				if(this.Rv=null, this.Av) {
					if(e=this.Av[0], s=t-this.Av[2], (i=this.kv())[0] && i[1]) {
						n=this.Ev(i, e, s);
						for(var r=0; r<2; r++) {
							var o=i[r].$getSize(0, 0);
							if(h?o[2]==o[3]:Math.abs(o[1]-o[0])<3) i[r].P[this.Sv]=n[r], i[r].Gl && i[r].Gl(this.Sv, n[r], h); else {
								var a=i[r].$view[h?'offsetHeight':'offsetWidth'];
								i[r].P.gravity=n[r]/a*i[r].P.gravity;
							}
						}
						i[0].resize();
						for(var u=0; u<2; u++) i[u].callEvent && i[u].callEvent('onViewResize', []), i[u].$view.removeAttribute('aria-dropeffect');
						y('onLayoutResize', [i]);
					}
					this.Av= !1;
				}
				this.Av= !1, this.yv= !1, this.$v=null, Mt(document.body, 'webix_noselect'), this.Vt.setAttribute('aria-grabbed', 'false'), this.Vt.removeAttribute('aria-dropeffect');
			}
		},
		Bv:function(t) {
			var i, e, s;
			return s=t[0]['$'+this.Sv]+t[1]['$'+this.Sv], this.$v[0]?e=s-(i=this.$v[0]):this.$v[1] && (i=s-(e=this.$v[1])), [i, e];
		},
		zv:function(t, i, e) {
			for(var s=[], n='height'==this.Sv?'offsetHeight':'offsetWidth', h=0; h<2; h++) s[h]=t[h].$view[n]+(h?-1:1)*e;
			return s;
		},
		Ev:function(t, i, e) {
			var s, n, h;
			if(this.$v[0] || this.$v[1]) n=this.Bv(t, i); else for(n=this.zv(t, i, e), s=0; s<2; s++) n[s]<0 && (h=n[0]+n[1], n[s]=1, n[1-s]=h-1);
			return n;
		}
	}), Rn=(H.protoUI(Hn, ze, ki, Hi.view), {
		name:'align',
		defaults:{
			borderless:!0,
			left:0,
			top:0,
			right:0,
			bottom:0
		},
		$init:function() {this.Vt.className+=' webix_view_align';},
		Ft:function() {this.body_setter({});},
		Tt:function(t) {this.$t.destructor(), this.$t=t, this.Vt.appendChild(this.$t.Vt), this.resize();},
		getChildViews:function() {return [this.$t];},
		body_setter:function(t) {
			return t.Dt={
				top:!1,
				left:!1,
				right:!1,
				bottom:!1
			}, (ii.mt=this).$t=si.Ht(t), this.Vt.appendChild(this.$t.Vt), t;
		},
		align_setter:function(t) {
			'string'== typeof t && (t=t.split(',')), this.Pv=this.jv=this.Nv='';
			for(var i=0; i<t.length; i++) {
				var e=t[i];
				'center'!==e && 'left'!==e && 'right'!==e || (this.Pv=e), 'top'!==e && 'bottom'!==e && 'middle'!==e || (this.jv=e), 'absolute'===e && (this.Pv=this.jv=this.Nv='precise');
			}
			return t;
		},
		getBody:function() {return this.$t;},
		$setSize:function(t, i) {
			var e, s;
			Hi.api.$setSize.call(this, t, i), s=this.Nv?(e=t-this.P.left-this.P.right, i-this.P.top-this.P.bottom):(e=this.Jl[0] || t, this.Jl[2] || i), this.$t.$setSize(e, s);
			var n=this.$t.Vt;
			'center'==this.Pv?n.style.marginLeft=Math.ceil((t-e)/2)+'px':'right'==this.Pv?n.style.marginLeft=t-e+'px':n.style.marginLeft=(this.Nv?this.P.left:0)+'px', 'middle'==this.jv?n.style.marginTop=Math.ceil((i-s)/2)+'px':'bottom'==this.jv?n.style.marginTop=i-s+'px':n.style.marginTop=(this.Nv?this.P.top:0)+'px';
		},
		$getSize:function(t, i) {
			var e=this.Jl=this.$t.$getSize(0, 0), s=Vi.api.$getSize.call(this, 0, 0);
			return this.Nv && (t+=this.P.left+this.P.right, i+=this.P.top+this.P.bottom), !this.Pv || this.Nv?(s[0]=e[0]+t, s[1]=e[1]+t):(s[0]=(s[0] || e[0])+i, s[1]+=t), !this.jv || this.Nv?(s[2]=e[2]+i, s[3]=e[3]+i):(s[2]=(s[2] || e[2])+i, s[3]+=i), s;
		}
	}), En=(H.protoUI(Rn, Hi.view), {
		name:'multiview',
		defaults:{animate:{}},
		setValue:function(t) {oi(t).show();},
		getValue:function() {return this.getActiveId();},
		$init:function() {this.rc=0, this.Pl=1, this.Vt.style.position='relative', this.Vt.className+=' webix_multiview', this.Lv=[];},
		Ov:function(t, i) {
			var e=oi(t);
			e.Wv || (e.Uv=[], e.Wv={}), e.Wv[i] || (e.Wv[i]= !0, e.Uv.push(i));
		},
		Yv:function(t) {
			var i=oi(t);
			if(this.P.keepViews && (i.Vt.style.display=''), this.Lv[this.Lv.length-2]!=t?(10==this.Lv.length && this.Lv.splice(0, 1), this.Lv.push(t)):this.Lv.splice(this.Lv.length-1, 1), i.Wv) {
				for(var e=0; e<i.Uv.length; e++) {
					var s=oi(i.Uv[e]);
					s && s.render();
				}
				i.Uv=[], i.Wv={};
			}
		},
		addView:function(t, i) {
			var e=!R(i) && i<=this.rc?1:0, s=yn.api.addView.apply(this, arguments);
			return 1<this.hi.length && (this.P.keepViews?oi(s).Vt.style.display='none':dt(oi(s).Vt), this.rc+=e), s;
		},
		Tt:function(t) {
			if(!t.P.borderless) {
				var i=l(this.P.Dt);
				t.P.Dt=i;
				var e=t.Vt.style;
				e.borderTopWidth=e.borderBottomWidth=e.borderLeftWidth=e.borderRightWidth='1px', this.ql(e, i);
			}
			yn.api.Tt.apply(this, arguments);
		},
		Nl:function(t) {
			if(t==this.rc) {
				var i=t?t-1:1;
				this.hi[i] && (this.qv=null, this.xe(this.hi[i], !1));
			}
			t<this.rc && this.rc--;
		},
		zi:function() {},
		Hl:function(t) {
			t=t || this.jl;
			for(var i=0; i<t.length; i++) t[i].Dt=this.P.borderless?{
				top:1,
				left:1,
				right:1,
				bottom:1
			}:this.P.Dt || {};
			yn.api.Hl.call(this, t);
			for(var e=1; e<this.hi.length; e++) this.P.keepViews?this.hi[e].Vt.style.display='none':dt(this.hi[e].Vt);
			for(var s=0; s<t.length; s++) {
				var n=this.hi[s];
				n.hi && !n.dd || (this.ql(n.Vt.style, n.P.Dt), n.Vt.setAttribute('role', 'tabpanel'));
			}
			this.Yv(this.getActiveId());
		},
		cells_setter:function(t) {t && t.length, this.jl=t;},
		Gv:function(t, i) {
			var e=(this.P.animate || {}).direction, s='top'==e || 'bottom'==e;
			return t<i?s?'bottom':'right':s?'top':'left';
		},
		xe:function(t, i) {
			var e=this, s=arguments, n=this.getParentView();
			if(n && n.getTabbar) {
				var h=n.getTabbar();
				h.blockEvent(), h.setValue(t.P.$id || t.P.id), h.unblockEvent();
			}
			if(this.qv) return this.qv.then(function() {return e.xe.apply(e, s);});
			for(var r=-1, o=0; o<this.hi.length; o++) if(this.hi[o]==t) {
				r=o;
				break;
			}
			if(!(r<0 || r==this.rc)) {
				var a=this.hi[this.rc], u=this.hi[r];
				if(a.$getSize(0, 0), (i || void 0===i) && Ni.isSupported() && this.P.animate) {
					var c=H.extend({}, this.P.animate);
					this.P.keepViews && (c.keepViews= !0), c.direction=this.Gv(r, this.rc), c=Si.Ri(i || {}, c);
					var f=Ni.formLine(u.Vt, a.Vt, c);
					u.$getSize(0, 0), u.$setSize(this.me, this.ge);
					var l=c.callback;
					c.callback=function() {Ni.breakLine(f, this.P.keepViews), this.qv=null, c.wait_animation.resolve(), l && l.call(this), l=c.master=c.callback=null, this.resize();}, (c.master=this).rc=r, this.Yv(this.getActiveId()), Ni(f, c), this.qv=c.wait_animation=m.defer();
				} else this.P.keepViews?a.Vt.style.display='none':(dt(a.Vt), this.Vt.appendChild(this.hi[o].Vt)), this.rc=r, this.resizeChildren(), this.Yv(this.getActiveId());
				u.callEvent && (u.callEvent('onViewShow', []), vi(u, this.Me)), this.callEvent('onViewChange', [a.P.id, u.P.id]);
			}
		},
		$getSize:function(t, i) {
			if(!this.hi.length) return Vi.api.$getSize.call(this, 0, 0);
			var e=this.hi[this.rc].$getSize(0, 0);
			if(this.P.fitBiggest) for(var s=0; s<this.hi.length; s++) if(s!=this.rc) for(var n=this.hi[s].$getSize(0, 0), h=0; h<4; h++) e[h]=Math.max(e[h], n[h]);
			var r=Vi.api.$getSize.call(this, 0, 0);
			return 1e5<=r[1] && (r[1]=0), 1e5<=r[3] && (r[3]=0), r[0]=(r[0] || e[0])+t, r[1]=(r[1] || e[1])+t, r[2]=(r[2] || e[2])+i, r[3]=(r[3] || e[3])+i, r;
		},
		$setSize:function(t, i) {this.hi.length && (this.Rl=[t, i], Vi.api.$setSize.call(this, t, i), this.hi[this.rc].$setSize(t, i));},
		isVisible:function(t, i) {return i && i!=this.getActiveId()?(t && this.Ov(i, t), !1):Hi.api.isVisible.call(this, t, this.P.id);},
		getActiveId:function() {return this.hi.length?this.hi[this.rc].P.id:null;},
		back:function(t) {
			if(t=t || 1, this.callEvent('onBeforeBack', [this.getActiveId(), t])) {
				if(this.Lv.length>t) {
					var i=this.Lv[this.Lv.length-t-1];
					return oi(i).show(), i;
				}
				return null;
			}
			return null;
		},
		Wl:function(t, i) {!this.P.keepViews && i && i!=this.hi[this.rc] || yn.api.Wl.call(this, t, i);}
	}), Pn=(H.protoUI(En, yn.view), {
		name:'tabview',
		setValue:function(t) {this.hi[0].setValue(t);},
		getValue:function() {return this.hi[0].getValue();},
		getTabbar:function() {return this.hi[0];},
		getMultiview:function() {return this.hi[1];},
		addView:function(t) {
			var i=this.getMultiview().addView(t.body);
			return t.id=i, t.value=t.header, delete t.body, delete t.header, this.getTabbar().addOption(t), i;
		},
		removeView:function(t) {
			var i=this.getTabbar();
			i.removeOption(t), i.refresh();
		},
		$init:function(t) {
			this.$ready.push(this.Xv);
			var i=t.cells, e=[];
			i && i.length;
			for(var s=i.length-1; 0<=s; s--) {
				var n=i[s].body || i[s];
				n.id || (n.id='view'+V()), e[s]={
					value:i[s].header,
					id:n.id,
					close:i[s].close,
					width:i[s].width,
					hidden:!!i[s].hidden
				}, i[s]=n;
			}
			var h={
				view:'tabbar',
				multiview:!0
			}, r={
				view:'multiview',
				cells:i,
				animate:!!t.animate
			};
			t.value && (h.value=t.value), t.tabbar && H.extend(h, t.tabbar, !0), t.multiview && H.extend(r, t.multiview, !0), h.options=h.options || e, t.rows=[h, r], delete t.cells, delete t.tabs;
		},
		Xv:function() {
			this.getTabbar().attachEvent('onOptionRemove', function(t) {
				var i=oi(t);
				if(i) {
					var e=i.getParentView();
					e && e.removeView(i);
				}
			});
		}
	}), jn=(H.protoUI(Pn, kn.view), {
		name:'carousel',
		defaults:{
			scrollSpeed:'300ms',
			type:'clean',
			navigation:{},
			animate:!0
		},
		$init:function() {this.Vt.className+=' webix_carousel', this.Jv=null, this.tt=null, this.rc=0, this.$ready.unshift(this.Kv), this.$ready.push(this.nr);},
		addView:function(t, i) {
			var e=this.Jv.addView(t, i);
			return this.Zv(), e;
		},
		removeView:function(t) {this.Jv.removeView(t), this.Zv();},
		Tt:function(t, i) {this.Jv.Tt(t, i), this.Zv();},
		Zv:function() {this.hi=this.Jv.hi, this.Zu(), this.setActiveIndex(Math.min(this.rc, this.hi.length-1));},
		Kv:function() {
			var i=this;
			this.Jv && this.Jv.destructor && this.Jv.destructor();
			var t='';
			this.config.cols?(t='cols', this.Pl=0):(t='rows', this.Pl=1);
			var e={
				borderless:!0,
				type:'clean'
			};
			e[t]=_(this.P[t]);
			for(var s=['type', 'margin', 'marginX', 'marginY', 'padding', 'paddingX', 'paddingY'], n={}, h=0; h<s.length; h++) this.P[s[h]] && (n[s[h]]=this.P[s[h]]);
			H.extend(e, n, !0), (ii.mt=this).Jv=si.Ht(e), this.Vt.appendChild(this.Jv.Vt), this.hi=this.Jv.hi, this.Jv.xe=S(jn.xe, this), this.Jv.adjustScroll=S(jn.adjustScroll, this);
			var r=A('onReconstruct', function(t) {t==i.Jv && i.Qv();});
			this.attachEvent('onDestruct', function() {T(r);}), this.Oi=this.Vt.firstChild;
		},
		Se:function(t, i) {this.P.navigation.items && 'tab'===i.target.getAttribute('role') && this.Xu(t, i), Vi.api.Se.call(this, t, i);},
		getChildViews:function() {return [this.Jv];},
		getLayout:function() {return this.Jv;},
		nr:function() {this.Oi.setAttribute('touch_scroll', this.Pl?'y':'x'), this.Jv.attachEvent('onAfterScroll', S(function() {this.callEvent('onShow', [this.getActiveId()]);}, this)), vi(this.Jv, function(t) {t.Vt.setAttribute('role', 'tabpanel');});},
		adjustScroll:function(t) {
			var i, e=this.Pl?this.ge:this.me;
			return this.Pl?(i=Math.round(t.f/e), t.f=i*e):(i=Math.round(t.e/e), t.e=i*e), this.rc= -i, this.P.navigation && this.Qu(), !0;
		},
		xe:function(t) {
			var i, e, s, n, h, r;
			for(s= -1, e=this.Jv, i=0; i<e.hi.length; i++) if(e.hi[i]==t) {
				s=i;
				break;
			}
			s<0 || s==this.rc || (this.rc=s, n=e.Pl?this.ge:this.me, h= -(e.Pl?0:s*n), r= -(e.Pl?s*n:0), this.scrollTo(h, r), this.callEvent('onShow', [e.hi[this.rc].P.id]), this.P.navigation && this.Zu());
		},
		scrollTo:function(t, i) {Yi && Ni.isSupported() && this.P.animate?Yi.ms(this.Oi, t, i, this.P.scrollSpeed || '100ms'):(this.Oi.style.marginLeft=t+'px', this.Oi.style.marginTop=i+'px');},
		navigation_setter:function(t) {
			return this.Ri(t, {
				type:'corner',
				buttons:!0,
				items:!0
			}), t;
		},
		showNext:function() {this.rc<this.Jv.hi.length-1 && this.setActiveIndex(this.rc+1);},
		showPrev:function() {0<this.rc && this.setActiveIndex(this.rc-1);},
		setActiveIndex:function(t) {this.Jv.hi.length, oi(this.Jv.hi[t].P.id).show();},
		getActiveIndex:function() {return this.rc;},
		$getSize:function(t, i) {
			var e=this.Jv.$getSize(0, 0), s=Hi.api.$getSize.call(this, t, i);
			return this.Jv.Pl?(s[0]=Math.max(s[0], e[0]), s[1]=Math.min(s[1], e[1])):(s[2]=Math.max(s[2], e[2]), s[3]=Math.min(s[3], e[3])), s;
		},
		$setSize:function(t, i) {
			var e=this.Jv, s=e.hi.length, n=Hi.api.$setSize.call(this, t, i), h=this.ge*(e.Pl?s:1), r=this.me*(e.Pl?1:s);
			n?(this.Oi.style.height=h+'px', this.Oi.style.width=r+'px', e.$setSize(r, h), this.Qv()):e.$setSize(r, h);
		},
		Qv:function() {
			var t=this.Jv, i=this.rc || 0, e=t.Pl?this.ge:this.me, s=-(t.Pl?0:i*e), n=-(t.Pl?i*e:0);
			this.scrollTo(s, n), this.P.navigation && this.Zu();
		},
		getActiveId:function() {
			var t=this.Jv.hi[this.rc];
			return t?t.P.id:null;
		},
		setActive:function(t) {oi(t).show();}
	}), Nn=(H.protoUI(jn, g, Be, Hi.view), {
		name:'proxy',
		body_setter:function(t) {return (ii.mt=this).$t=si.Ht(t), this.Vt.appendChild(this.$t.Vt), t;},
		getChildViews:function() {return [this.$t];},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i), this.$t.$setSize(this.$width, this.$height);},
		$getSize:function(t, i) {
			var e=Hi.api.$getSize.call(this, t, i), s=this.$t.$getSize(t, i);
			return s[0]=Math.max(e[0], s[0]), s[1]=Math.min(e[1], s[1]), s[2]=Math.max(e[2], s[2]), s[3]=Math.min(e[3], s[3]), s[4]=Math.max(e[4], s[4]), s;
		},
		Tt:function(t) {this.$t.destructor(), this.$t=t, this.Vt.appendChild(t.Vt), this.resize();}
	}), Ln=(H.protoUI(Nn, Hi.view), {
		name:'portlet',
		defaults:{
			layoutType:'wide',
			icon:'wxi-drag'
		},
		$init:function(t) {
			this.Vt.style.position='relative', t.header && t.body && (t.body=[{
				template:t.header,
				type:'header'
			}, t.body]), this.$ready.push(this.t_);
		},
		i_:function(t) {vi(t, function(t) {t.e_ && t.e_();});},
		t_:function() {
			var t=this.getChildViews();
			if(1<t.length) Xi.addDrag(t[0].$view, this); else if(this.P.icon) {
				var i=ft('div', {'class':'portlet_drag'}, '<span class=\'webix_icon '+this.P.icon+'\'></span>');
				this.Vt.appendChild(i), Xi.addDrag(i, this);
			} else Xi.addDrag(this.$view, this);
		},
		body_setter:function(t) {return this.rows_setter($(t)?t:[t]);},
		markDropArea:function(t, i) {
			if(!t) return dt(this.s_);
			t=oi(t), this.s_ || (this.s_=ft('div', null, '&nbsp;')), t.$view.appendChild(this.s_), this.s_.className='portlet_marker'+i;
		},
		movePortlet:function(t, i) {
			var e=t.getParentView(), s=this.getParentView(), n=e.index(t), h=s.index(this);
			if(y('onBeforePortletMove', [s, e, this, t, i])) {
				ii.pt= !0;
				var r=s!=e?1:0, o=e.Pl;
				'top'==i || 'bottom'==i?(1!==o && (si(t, e=si({
					type:t.P.layoutType,
					rows:[]
				}, e, n+r), 0), n=0, r=1), 'bottom'==i && (r+=1)):'left'!=i && 'right'!=i || (0!==o && (si(t, e=si({
					type:t.P.layoutType,
					cols:[]
				}, e, n+r), 0), n=0, r=1), 'right'==i && (r+=1)), h<n && (r-=1), si(this, e, n+r), 'replace'==i && si(t, s, h), this.n_(s), ii.pt= !1, t.resize(), s.resize(), this.i_(s), y('onAfterPortletMove', [s, e, this, t, i]);
			}
		},
		n_:function(t) {
			for(var i, e=0; t.getChildViews().length<=e;) t=(i=t).getParentView(), e=1;
			e && t.removeView(i);
		},
		$drag:function(t) {
			return yt(this.Vt, 'portlet_in_drag'), Xi.qs={
				source:t,
				from:t
			}, this.Vt.innerHTML;
		},
		$dragDestroy:function(t, i) {Mt(this.Vt, 'portlet_in_drag'), dt(i), this.h_ && (this.movePortlet(this.h_, this.r_), this.markDropArea(), this.h_=null);},
		Ys:function() {return pt(this.$view);},
		$dragPos:function(t, i, e) {
			e.style.left='-10000px';
			var s=q.mouse.context(i), n=document.body.scrollTop || document.documentElement.scrollTop || 0, h=document.body.scrollLeft || document.documentElement.scrollLeft || 0, r=document.elementFromPoint(s.x-h, s.y-n), o=null;
			r && (o=oi(r)), this.h_=this.o_(o), this.r_=this.a_(this.h_, i), t.x=t.x-this.me+10, t.y=t.y-20, Xi.nn= !0;
		},
		a_:function(t, i) {
			var e='', s='';
			if(i && t) {
				var n=pt(t.$view), h=bt(i), r=h.x-n.x-n.width/2, o=h.y-n.y-n.height/2;
				(s=t.P.mode) || (s=Math.abs(r)*(n.height/n.width)>Math.abs(o)?'cols':'rows'), 'cols'==s?e=0<=r?'right':'left':'rows'==s && (e=0<=o?'bottom':'top'), this.markDropArea(t, e);
			}
			return this.markDropArea(t, e), e || s;
		},
		o_:function(t) {
			for(; t;) {
				if(t.movePortlet) return t;
				t=t.getParentView();
			}
		}
	}), On=(H.protoUI(Ln, kn.view), {
		name:'abslayout',
		$init:function() {this.$view.className+=' webix_abslayout', delete this.rows_setter, delete this.cols_setter, this.jl=[];},
		cells_setter:function(t) {this.jl=t;},
		Hl:function() {
			for(var t=0; t<this.jl.length; t++) this.jl[t].Dt={};
			yn.api.Hl.call(this, this.jl);
		},
		$getSize:function() {
			for(var t=Vi.api.$getSize.call(this, 0, 0), i=null, e=0; e<this.hi.length; e++) this.hi[e].P.relative && (i=this.hi[e].$getSize(0, 0));
			return i && (1e5<=t[1] && (t[1]=0), 1e5<=t[3] && (t[3]=0), t[0]=Math.max(t[0], i[0]), t[1]=Math.max(t[1], i[1]), t[2]=Math.max(t[2], i[2]), t[3]=Math.max(t[3], i[3])), t;
		},
		$setSize:function(t, i) {this.Rl=[t, i], Vi.api.$setSize.call(this, t, i), this.Ya(t, i);},
		Ya:function(t, i) {
			for(var e=0; e<this.hi.length; e++) {
				var s=this.hi[e], n=s.P, h=s.$getSize(0, 0);
				n.relative?(n.left=n.top=0, s.$setSize(t, i)):s.$setSize(h[0], h[2]);
				for(var r=s.$view, o=['left', 'right', 'top', 'bottom'], a=0; a<o.length; a++) {
					var u=o[a];
					u in n && (r.style[u]=n[u]+'px');
				}
			}
		}
	}), Wn={
		api:On,
		view:H.protoUI(On, yn.view)
	}, Un={
		name:'gridlayout',
		defaults:{
			autoplace:!0,
			gridColumns:2,
			gridRows:2,
			margin:10,
			padding:10
		},
		gridRows_setter:function(t) {return this.u_=t;},
		removeView:function(t) {Wn.api.removeView.call(this, t), this.c_(), this.callEvent('onChange', []);},
		f_:function(t) {
			if(t.dx=t.dx || 1, t.dy=t.dy || 1, R(t.y) || R(t.x)) {
				for(var i=this.l_(), e=0; e<this.u_; e++) for(var s=0; s<this.P.gridColumns; s++) if(!i[s][e] && this.d_(i, s, e, s+t.dx, e+t.dy)) return t.x=s, void (t.y=e);
				t.x=0, t.y=this.u_;
			}
			var n=t.x+t.dx-this.P.gridColumns;
			0<n && (t.dx-=n);
		},
		Tt:function(t, i) {
			if(R(i)) {
				for(var e=0; e<this.hi.length; e++) this.hi[e].destructor();
				this.jl=t, this.Hl();
			} else this.f_(t.config), this.hi.push(t), this.$view.appendChild(t.Vt), this.v_(t.config, t.config.id);
			this.c_(!0), this.__ || this.callEvent('onChange', []);
		},
		d_:function(t, i, e, s, n) {
			for(var h=i; h<s; h++) for(var r=e; r<n; r++) if(!t[h] || t[h][r]) return !1;
			return !0;
		},
		p_:function(t, i, e) {for(var s=0; s<i.dx; s++) for(var n=0; n<i.dy; n++) t[s+i.x][n+i.y]=e;},
		m_:function(t, i, e) {
			for(var s=this.P.gridColumns, n=i.x+i.dx; n+e.dx<=s; n++) if(this.d_(t, n, e.y, n+e.dx, e.y+e.dy)) return n-e.x;
			return 0;
		},
		b_:function(t, i, e) {
			for(var s=i.x-e.dx; 0<=s; s--) if(this.d_(t, s, e.y, s+e.dx, e.y+e.dy)) return e.x-s;
			return 0;
		},
		g_:function(t, i, e) {
			for(var s=i.y-e.dy; 0<=s; s--) if(this.d_(t, e.x, s, e.x+e.dx, s+e.dy)) return e.y-s;
			return 0;
		},
		l_:function(t) {
			for(var i=[], e=0; e<this.P.gridColumns; e++) i[e]=[];
			for(var s=0; s<this.hi.length; s++) {
				var n=this.hi[s].config;
				n.id===t || n.hidden || this.p_(i, n, n.id);
			}
			return i;
		},
		c_:function(t) {(this.w_() || t) && this.x_();},
		w_:function() {
			if(!this.P.autoplace) return !1;
			var t=this.P.gridColumns, i=this.u_, e=this.l_(), s=!1;
			t:for(var n=i-1; 0<=n; n--) {
				for(var h=t-1; 0<=h; h--) if(e[h][n]) continue t;
				s= !0;
				for(var r=0; r<this.hi.length; r++) {
					var o=this.hi[r].config;
					!o.hidden && o.y>=n && (o.y-=1);
				}
			}
			return s;
		},
		v_:function(t, i) {
			if(t.x-=Math.max(0, t.x+t.dx-this.P.gridColumns), this.P.autoplace) {
				for(var e=[], s=this.l_(i), n=0; n<this.hi.length; n++) {
					var h=this.hi[n].config;
					h.id===i || h.hidden || h.y<t.y+t.dy && h.y+h.dy>t.y && h.x<t.x+t.dx && h.x+h.dx>t.x && e.push(h);
				}
				for(var r=[], o=0; o<e.length; o++) {
					var a=e[o];
					this.p_(s, a, 0);
					var u=this.m_(s, t, a);
					if(u) a.x+=u; else {
						var c=this.b_(s, t, a);
						if(c) a.x-=c; else {
							var f=this.g_(s, t, a);
							f?a.y-=f:(a.y=t.y+t.dy, r.push(a));
						}
					}
					this.p_(s, a, a.id);
				}
				for(var l=0; l<r.length; l++) this.v_(r[l], r[l].id);
			} else t.y-=Math.max(0, t.y+t.dy-this.P.gridRows);
		},
		x_:function() {
			for(var t=this.P.gridRows, i=0; i<this.hi.length; i++) {
				var e=this.hi[i].config;
				e.hidden || (t=Math.max(t, e.y+e.dy));
			}
			this.u_!=t && (this.u_=t, this.resize()), this.Ya();
		},
		moveView:function(t, i) {i=H.extend(oi(t).config, i, !0), this.v_(i, t), this.c_(!0), this.callEvent('onChange', []);},
		serialize:function(t) {
			for(var i=[], e=0; e<this.hi.length; e++) if(t) i.push(t.call(this, this.hi[e])); else {
				var s=this.hi[e].config;
				i.push({
					id:s.id,
					name:s.name,
					x:s.x,
					y:s.y,
					dx:s.dx,
					dy:s.dy
				});
			}
			return i;
		},
		clearAll:function() {
			for(var t=0; t<this.hi.length; t++) this.hi[t].destructor();
			this.hi=[], this.callEvent('onChange', []);
		},
		restore:function(t, i) {
			i=i || this.P.factory, t=_(t), this.__= !0;
			for(var e={}, s=0; s<t.length; s++) {
				var n=t[s], h=oi(n.id);
				e[h?(H.extend(h.config, n, !0), h.config.id):(h=i.call(this, n), this.addView(h))]=1;
			}
			for(var r=this.hi.length-1; 0<=r; r--) e[this.hi[r].config.id] || (this.hi[r].destructor(), this.hi.splice(r, 1));
			this.x_(), this.__= !1;
		},
		$getSize:function() {
			for(var t=Vi.api.$getSize.call(this, 0, 0), i=0; i<this.hi.length; i++) this.hi[i].$getSize(0, 0);
			var e=this.P.cellWidth, s=this.P.cellHeight, n=this.y_(0, 0, this.P.gridColumns, this.u_);
			return e && (t[0]=n.dx+2*n.x), s && (t[2]=n.dy+2*n.y), t;
		},
		y_:function(t, i, e, s) {
			var n=this.P.margin, h=this.P.paddingX || this.P.padding, r=this.P.paddingY || this.P.padding, o=this.P.cellWidth;
			o || (o=(this.$width-2*h+n)/this.P.gridColumns-n);
			var a=this.P.cellHeight;
			return a || (a=(this.$height-2*r+n)/this.u_-n), {
				x:h+(o+n)*t,
				y:r+(a+n)*i,
				dx:Math.ceil(o+(o+n)*(e-1)),
				dy:Math.ceil(a+(a+n)*(s-1))
			};
		},
		Ya:function() {
			for(var t=0; t<this.hi.length; t++) {
				var i=this.hi[t], e=i.P, s=this.y_(e.x, e.y, e.dx, e.dy);
				i.$getSize(0, 0), i.$setSize(s.dx, s.dy);
				var n=i.$view;
				n.style.left=s.x+'px', n.style.top=s.y+'px';
			}
		}
	}, Yn={
		api:Un,
		view:H.protoUI(Un, Wn.view)
	}, qn={
		name:'dashboard',
		$init:function() {Xi.addDrag(this.$view, this), Xi.addDrop(this.$view, this, !0);},
		M_:function(t) {return !(!t.getAttribute || t.getAttribute('webix_disable_drag') || t.getAttribute('webixignore')) && (-1!=(t.className || '').toString().indexOf('panel_drag')?t:!(!t.parentNode || t==this.$view) && this.M_(t.parentNode));},
		$dragCreate:function(t, i) {
			if(!i.target || !this.M_(i.target)) return !1;
			var e=oi(i);
			e.$resizeMove || (e=e.queryView(function(t) {return !R(t.config.dx);}, 'parent'));
			var s=pt(this.$view), n=bt(i), h=Xi.qs={
				source:e,
				from:this,
				dashboard:{
					sx:n.x-s.x-parseInt(e.$view.style.left)+this.P.margin/2,
					sy:n.y-s.y-parseInt(e.$view.style.top)+this.P.margin/2
				}
			};
			return this.callEvent('onBeforeDrag', [h, i])?(this.S_(e.P.dx, e.P.dy), e.$view):void 0;
		},
		S_:function(t, i) {
			var e=this.k_=ft('div', {'class':'panel_target'}), s=this.y_(0, 0, t, i);
			e.style.width=s.dx+'px', e.style.height=s.dy+'px', this.$view.appendChild(this.k_);
		},
		$drop:function(t, i, e) {
			var s=Xi.qs, n={
				x:s.dashboard.x,
				y:s.dashboard.y
			};
			if(this.callEvent('onBeforeDrop', [s, e])) {
				if(s.from===this) {
					var h=s.source.config;
					this.moveView(h.id, n);
				} else {
					if(!(s.from && s.from.callEvent && s.from.callEvent('onBeforeDropOut', [s, e]))) return;
					n.name=s.source[0], n.dx=s.dashboard.dx, n.dy=s.dashboard.dy, n.id=n.name+':'+V(), (n=this.P.factory.call(this, n)) && this.addView(n);
				}
				this.callEvent('onAfterDrop', [s, e]);
			}
		},
		$dragDestroy:function(t, i) {i.style.zIndex=1, dt(this.k_), this.k_=null, this.x_();},
		C_:function(t, i, e) {
			var s=this.P.margin, n=this.P.paddingX || this.P.padding, h=this.P.paddingY || this.P.padding, r=this.P.cellWidth;
			r || (r=(this.$width-2*n+s)/this.P.gridColumns-s);
			var o=this.P.cellHeight;
			return o || (o=(this.$height-2*h+s)/this.u_-s), t+=e?s:-n, i+=e?s:-h, t=Math.round(t/(r+s)), i=Math.round(i/(o+s)), {
				x:t=Math.max(0, Math.min(t, this.P.gridColumns-(e?0:1))),
				y:i=Math.max(0, Math.min(i, this.u_)),
				width:r,
				height:o,
				margin:s,
				rx:t*(r+s)+n,
				ry:i*(o+s)+h
			};
		},
		$dragOut:function(t, i, e, s) {
			var n=Xi.qs;
			this.callEvent('onDragOut', [n, s]), this.k_ && n.external && (dt(this.k_), this.k_=null);
		},
		$dragIn:function(t, i, e) {
			var s=Xi.qs;
			if(this.callEvent('onBeforeDragIn', [s, e])) {
				if(!this.k_) {
					if(!s.from || !s.from.getItem) return !1;
					if(!this.P.factory) return !1;
					s.external= !0;
					var n=s.from.getItem(s.source);
					s.dashboard={
						dx:n.dx,
						dy:n.dy
					}, this.S_(n.dx, n.dy);
				}
				if(s.external) {
					var h=this.k_, r=q.mouse.context(e), o=pt(this.$view), a=this.C_(r.x-o.x, r.y-o.y);
					H.extend(s.dashboard, a, !0), h.style.left=a.rx+'px', h.style.top=a.ry+'px';
				}
				return !0;
			}
		},
		$dragPos:function(t, i, e) {
			var s=Xi.qs;
			e.style.left='-10000px';
			var n=q.mouse.context(i), h=pt(this.$view), r=s.dashboard, o=this.C_(n.x-h.x-r.sx, n.y-h.y-r.sy);
			t.x=n.x-r.sx-h.x, t.y=n.y-r.sy-h.y;
			var a=this.k_;
			a.style.left=o.rx+'px', a.style.top=o.ry+'px', H.extend(r, o, !0);
		}
	}, Gn=(H.protoUI(qn, Yn.view), {
		name:'panel',
		$init:function(t) {
			if(t.header && t.body) {
				var i=t.header;
				'object'!==M(i) && (i={
					template:t.header,
					type:'header',
					css:'webix_header'
				}), t.body=[i, t.body];
			}
			yt(this.$view, 'panel_drag_view'), this.$ready.push(this.t_);
		},
		t_:function() {
			var t=this.getChildViews(), i=1===t.length?this:t[1];
			if(this.P.icon) {
				var e=ft('div', {'class':'panel_icon'}, '<span class=\'webix_icon '+this.P.icon+' panel_icon_span\'></span>');
				i!=this && (i.$view.style.position='relative'), i.$view.appendChild(e);
			}
		},
		body_setter:function(t) {return this.rows_setter($(t)?t:[t]);},
		$resizeEnd:function(t) {
			var i=this.getParentView();
			if(i && i.C_) {
				var e=i.C_(t.mx, t.my, !0), s=Math.max(e.x, 1), n=Math.max(e.y, 1);
				i.moveView(this.P.id, {
					dx:s,
					dy:n
				});
			}
		},
		$resizeMove:function(t) {
			var i=this.getParentView();
			if(i && i.C_) {
				t.mx=t.x, t.my=t.y;
				var e=i.C_(t.x, t.y, !0);
				t.x=(e.width+e.margin)*e.x-e.margin, t.y=(e.height+e.margin)*e.y-e.margin;
			}
		}
	}), Xn=(H.protoUI(Gn, kn.view, Qi), {
		$init:function() {H.extend(this, ke, !0);},
		name:'flexlayout'
	}), Jn=(H.protoUI(Xn, kn.view), {
		name:'datalayout',
		$init:function() {this.data.provideApi(this, !0), this.data.attachEvent('onStoreUpdated', S(this.render, this));},
		Hl:function() {return this.D_ || (this.D_=this.jl, this.jl=[{}]), kn.api.Hl.call(this, this.jl);},
		setValue:function(t) {this.parse(t);},
		getValue:function() {
			for(var t=this.D_.length, i=0; i<this.hi.length; i++) {
				var e=this.data.order[Math.floor(i/t)], s=this.data.getItem(e);
				this.I_(this.hi[i], s);
			}
			return this.data.serialize();
		},
		I_:function(t, i) {
			var e=t.P.name;
			if(e) {
				var s=null;
				t.getValues?s=t.getValues():t.getValue?s=t.getValue():t.serialize && (s=t.serialize()), '$value'==e?H.extend(i, s, !0):i[e]=s;
			} else {
				var n=t.hi;
				if(n) for(var h=0; h<n.length; h++) this.I_(n[h], i);
			}
		},
		Ul:function(t, i) {
			var e, s=t.P.name;
			if(s) e='$value'==s?i:i[s], t.setValues?t.setValues(e):t.setValue?t.setValue(e):t.parse && (t.openAll && (e=_(e)), t.parse(e)); else {
				var n=t.hi;
				if(n) for(var h=0; h<n.length; h++) this.Ul(n[h], i);
			}
		},
		render:function(t, i, e) {
			var s=this.D_.length;
			if(t && 'update'===e) for(var n=this.getItem(t), h=this.getIndexById(t), r=0; r<s; r++) this.Ul(this.hi[h*s+r], n); else {
				for(var o=this.jl=[], a=this.data.order, u=0; u<a.length; u++) if(s) for(var c=0; c<s; c++) o.push(_(this.D_[c])); else o.push(this.getItem(a[u]));
				if(o.length || o.push({}), this.reconstruct(), s) for(var f=0; f<a.length; f++) for(var l=this.getItem(a[f]), d=0; d<s; d++) {
					var v=this.hi[f*s+d];
					this.Ul(v, l);
				}
			}
		}
	}), Kn={
		api:Jn,
		view:H.protoUI(Jn, _e, kn.view)
	}, Zn={
		$init:function() {H.extend(this, ke, !0);},
		name:'flexdatalayout'
	}, Qn=(H.protoUI(Zn, Kn.view), {
		name:'popup',
		$init:function() {
			var i=this;
			this.P.head= !1, this.$view.className+=' webix_popup';
			var t=A('onClick', function(t) {return i.zi(t);});this.attachEvent('onDestruct', function() {T(t);}), this.attachEvent('onHide', this.Bn);
		},
		$skin:function() {ie.api.$skin.call(this), this.defaults.padding=Li.popupPadding, this.defaults.point= !Li.popupNoPoint, this.defaults.borderless=Li.borderlessPopup;},
		close:function() {dt(this.A_), ie.api.close.call(this);},
		$getSize:function(t, i) {return ie.api.$getSize.call(this, t+2*this.P.padding, i+2*this.P.padding);},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i), t=this.me-2*this.P.padding, i=this.ge-2*this.P.padding, this.Oi.style.padding=this.P.padding+'px', this.dn.style.display='none', this.$t.$setSize(t, i);},
		Ln:function(t) {'undefined'== typeof t.borderless && (t.borderless= !1);},
		head_setter:function() {},
		zn:function(t, i, e, s) {this.Bn(), document.body.appendChild(this.A_=ft('DIV', {'class':'webix_point_'+t}, '')), this.A_.style.zIndex=this.Vt.style.zIndex, this.A_.style.position=s?'fixed':'absolute', this.A_.style.top=e+'px', this.A_.style.left=i+'px';},
		Bn:function() {this.A_=dt(this.A_);}
	}), th={
		api:Qn,
		view:H.protoUI(Qn, ie.view)
	}, ih={
		name:'toolbar',
		defaults:{type:'toolbar'},
		dd:!0,
		T_:'webix_toolbar',
		F_:!1,
		$init:function(t) {
			t.borderless || (this.Oi.style.borderWidth='1px', this.P.Dt={
				top:!1,
				left:!1,
				right:!1,
				bottom:!1
			}), this.Oi.className+=' '+this.T_, this.Vt.setAttribute('role', 'toolbar');
		},
		re:function() {
			var i=this;
			i.elements={}, vi(this, function(t) {
				if(t.P.name && t.getValue && t.setValue && (i.elements[t.P.name]=t).mapEvent && t.mapEvent({
					onbeforetabclick:i,
					onaftertabclick:i,
					onitemclick:i,
					onchange:i
				}), t.setValues || t.Ul) return !1;
			});
			var t=this.Wf;
			if(this.setDirty(!1), t) {
				var e=this.Wf;
				for(var s in i.elements) t[s] && e[s]!=t[s] && (e[s]=t[s], this.setDirty(!0));
			}
		},
		Yl:function() {this.re();},
		cd:function(t) {
			var i=this.P;
			return i.elements && !t && (this.jl=t=i.elements, this.Pl=this.F_, delete i.elements), this.P.elementsConfig && this.V_(this.jl, i.elementsConfig), t;
		},
		V_:function(t, i) {
			for(var e=0; e<t.length; e++) {
				var s=t[e];
				H.extend(s, i);
				var n, h=i;
				s.elementsConfig && (h=H.extend(H.extend({}, s.elementsConfig), i)), (n=s.body?[s.body]:s.rows || s.cols || s.cells || s.body) && this.V_(n, h);
			}
		},
		$getSize:function(t, i) {
			var e=kn.api.$getSize.call(this, t, i), s=this.getParentView(), n=this.Pl?3:1;
			return s && this.Pl!=s.Pl && (e[n]+=1e5), e;
		},
		render:function() {},
		refresh:function() {this.render();}
	}, eh={
		api:ih,
		view:H.protoUI(ih, je, Ht, ms, kn.view, ce)
	}, sh={
		name:'form',
		defaults:{
			type:'form',
			autoheight:!0
		},
		z_:-1,
		T_:'webix_form',
		F_:!0,
		$init:function() {this.Vt.setAttribute('role', 'form');},
		$getSize:function(t, i) {
			this.be && !this.P.width && (t+=q.scrollSize);
			var e=kn.api.$getSize.call(this, t, i);
			return !this.P.scroll && this.P.autoheight || (e[2]=this.P.height || this.P.minHeight || 0, e[3]=this.P.height || 1e5), e;
		}
	}, nh=(H.protoUI(sh, eh.view), {
		name:'fieldset',
		defaults:{
			borderless:!0,
			$cssName:'webix_fieldset',
			paddingX:18,
			paddingY:30
		},
		$init:function(t) {
			t.body=t.body || {};
			var i=this.defaults.$cssName;
			this.Vt.className+=' '+i, this.Vt.innerHTML='<fieldset><legend class=\''+i+'_label'+(t.required?' webix_required':'')+'\'></legend><div class=\''+i+'_body\'></div></fieldset>';
		},
		label_setter:function(t) {return this.Vt.firstChild.childNodes[0].innerHTML=t;},
		getChildViews:function() {return [this.B_];},
		body_setter:function(t) {return (ii.mt=this).B_=si(t, this.Vt.firstChild.childNodes[1]), t;},
		getBody:function() {return this.B_;},
		resizeChildren:function() {
			if(this.B_) {
				var t=this.$width-this.P.paddingX, i=this.$height-this.P.paddingY, e=this.B_.$getSize(0, 0);
				e[0]>t && (t=e[0]), e[2]>i && (i=e[2]), this.B_.$setSize(t, i), this.resize();
			}
		},
		$getSize:function(t, i) {
			t+=this.P.paddingX, i+=this.P.paddingY;
			var e=this.B_.$getSize(t, i), s=this.H_=Hi.api.$getSize.call(this, t, i);
			return s[0]<e[0] && (s[0]=e[0]), s[2]<e[2] && (s[2]=e[2]), s[1]>e[1] && (s[1]=e[1]), s[3]>e[3] && (s[3]=e[3]), s[1]<s[0] && (s[1]=s[0]), s[3]<s[2] && (s[3]=s[2]), s;
		},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && (t=Math.min(this.H_[1], t), i=Math.min(this.H_[3], i), this.B_.$setSize(t-this.P.paddingX, i-this.P.paddingY));}
	}), hh={
		api:nh,
		view:H.protoUI(nh, Hi.view)
	}, rh={
		name:'forminput',
		defaults:{
			$cssName:'webix_forminput',
			labelWidth:80,
			labelAlign:'left',
			paddingY:0,
			paddingX:0
		},
		setValue:function(t) {
			this.B_.setValue?this.B_.setValue(t):this.B_.setValues && this.B_.setValues(t);
		},
		focus:function() {return !!this.B_.focus && this.B_.focus();},
		getValue:function() {return this.B_.getValue?this.B_.getValue():this.B_.getValues?this.B_.getValues():void 0;},
		getBody:function() {return this.B_;},
		$skin:function() {this.R_=Li.inputPadding, this.E_=Li.inputSpacing, this.P_=Li.labelTopHeight;},
		$init:function(t) {
			if(this.$ready.push(function() {
				var t=this.Vt.firstChild.childNodes[0], i=this.Vt.firstChild.childNodes[1];
				if(!this.P.label || !this.P.labelWidth && 'top'!=this.P.labelPosition) return t.style.display='none', i.style.padding='0 '+this.E_/2+'px', this.P.paddingX=this.E_, void (this.P.paddingY=0);
				'top'==this.P.labelPosition?(t.style.lineHeight=this.P_-this.R_+'px', t.className+=' '+this.defaults.$cssName+'_label_top', i.style.padding='0 '+this.E_/2+'px'):t.style.width=this.P.paddingX-this.E_/2+'px', t.style.textAlign=this.P.labelAlign, this.P.value && this.setValue(this.P.value);
			}), 'top'!=t.labelPosition) {
				var i=R(t.labelWidth)?this.defaults.labelWidth:t.labelWidth;
				t.paddingX=i+this.E_;
			} else t.paddingY=this.P_, t.paddingX=this.E_;
		},
		labelWidth_setter:function(t) {return t?Math.max(t, Li.dataPadding):0;},
		setBottomText:function(t) {
			var i=this.P;
			if(void 0!==t) {
				if(i.bottomLabel==t) return;
				i.bottomLabel=t;
			}
			var e=(i.invalid?i.invalidMessage:'') || i.bottomLabel;
			this.j_ && dt(this.j_), e && (this.$view.style.position='relative', this.j_=ft('div', {
				'class':'webix_inp_bottom_label',
				role:i.invalid?'alert':'',
				'aria-relevant':'all',
				style:'position:absolute; bottom:0px; padding:2px 0; background: white; left:'+(this.E_/2+(i.label?i.labelWidth:0))+'px; '
			}, e), this.Vt.appendChild(this.j_));
		}
	};
	H.protoUI(rh, hh.view);

	function oh(t) {return t.tagName?t.tagName.toLowerCase():null;}

	function ah(t, i) {
		if(!t.getAttribute) return null;
		var e=t.getAttribute(i);
		return e?e.toLowerCase():null;
	}

	function uh() {
		var t=oh(this);
		return ch[t]?ch[t](this):ch.other(this);
	}

	var ch={
		radio:function(t) {
			for(var i=0; i<t.length; i++) if(t[i].checked) return t[i].value;
			return '';
		},
		input:function(t) {return 'checkbox'===ah(t, 'type')?t.checked:t.value;},
		textarea:function(t) {return t.value;},
		select:function(t) {
			var i=t.selectedIndex;
			return t.options[i].value;
		},
		other:function(t) {return t.innerHTML;}
	};

	function fh(t) {
		var i=oh(this);
		return lh[i]?lh[i](this, t):lh.other(this, t);
	}

	var lh={
		radio:function(t, i) {for(var e=0; e<t.length; e++) t[e].checked=t[e].value==i;},
		input:function(t, i) {'checkbox'===ah(t, 'type')?t.checked= !!i:t.value=i;},
		textarea:function(t, i) {t.value=i;},
		select:function(t, i) {t.value=i, -1===t.selectedIndex && (t.value=t.firstElementChild.value);},
		other:function(t, i) {t.innerHTML=i;}
	}, dh={
		name:'htmlform',
		$init:function(t) {this.elements={}, this.N_= !1, t.content && (t.container==t.content || !t.container && t.content==document.body) && (this.L_= !0);},
		content_setter:function(t) {
			if(t=C(t), this.L_) for(; 1<t.childNodes.length;) this.Vt.childNodes[0].appendChild(t.childNodes[0]); else this.Vt.childNodes[0].appendChild(t);
			return this.O_(), !0;
		},
		render:function() {An.api.render.apply(this, arguments), this.O_();},
		O_:function() {
			var t=this.Vt.querySelectorAll('[name]');
			this.elements={};
			for(var i=0; i<t.length; i++) {
				var e=t[i], s=ah(e, 'name');
				if(s) {
					var n='button'===oh(e), h=ah(e, 'type'), r=n || 'button'===h || 'submit'===h;
					if('radio'===h) {
						var o=this.elements[s] || [];
						o.tagName='radio', o.push(e), e=o;
					}
					(this.elements[s]=e).getValue=uh, e.setValue=fh, e.$allowsClear= !r;
				}
			}
			return this.elements;
		},
		ir:function(t, i) {
			this.Kh(t, i);
			var e=this.Vt.querySelector('[name="'+t+'"]');
			e && yt(e, 'invalid');
		},
		Kh:function(t) {
			var i=this.Vt.querySelector('[name="'+t+'"]');
			i && Mt(i, 'invalid');
		},
		focus:function(t) {
			if(!t && this.$view.contains(document.activeElement)) return !1;
			ms.focus.apply(this, arguments);
		}
	}, vh=(H.protoUI(dh, An.view, ms), {
		name:'property',
		$init:function() {this.Oi.className+=' webix_property', this.Oi.setAttribute('role', 'listbox'), this.Bt=[], this.attachEvent('onAfterEditStart', function(t) {yt(this.getItemNode(t), 'webix_focused');}), this.attachEvent('onAfterEditStop', function(t, i) {Mt(this.getItemNode(i.config.id), 'webix_focused');});},
		defaults:{
			nameWidth:100,
			editable:!0
		},
		on_render:{
			checkbox:function(t) {
				return '<input type=\'checkbox\' class=\'webix_property_check\' '+(t?'checked':'')+'>';
			},
			color:function(t) {return '<div class="webix_property_col_val"><div class=\'webix_property_col_ind\' style="background-color:'+(t || '#FFFFFF')+';"></div><span>'+t+'</span></div>';}
		},
		on_edit:{label:!1},
		Ko:'webix_f_id',
		on_click:{
			webix_property_check:function(t) {
				var i=this.locate(t);
				return this.getItem(i).value= !this.getItem(i).value, this.callEvent('onCheck', [i, this.getItem(i).value]), !1;
			}
		},
		on_dblclick:{},
		registerType:function(t, i) {if(R(i.template) || (this.on_render[t]=i.template), R(i.editor) || (this.on_edit[t]=i.editor), !R(i.click)) for(var e in i.click) this.on_click[e]=i.click[e];},
		elements_setter:function(t) {
			this.W_={};
			for(var i=0; i<t.length; i++) {
				var e=t[i];
				'multiselect'==e.type && (e.optionslist= !0), e.id=e.id || V(), e.label=e.label || '', e.value=e.value || '', this.W_[e.id]=i, this.Au(t[i]);
			}
			return t;
		},
		showItem:function(t) {Pe.showItem.call(this, t);},
		locate:function() {return _t(arguments[0], this.Ko);},
		getItemNode:function(t) {return this.tt.childNodes[this.W_[t]];},
		getItem:function(t) {return this.P.elements[this.W_[t]];},
		$a:function(t) {
			var i=this.getItem(t).type;
			if('checkbox'==i) return 'inline-checkbox';
			var e=this.on_edit[i];
			return !1!==e && (e || i);
		},
		Ta:function(t) {return this.getItem(t);},
		ja:function(t, i, e) {
			var s=this.W_[t.id], n=this.P.elements;
			if(e) {
				for(var h=s+1; h<n.length; h++) if(i.call(this, n[h].id)) return n[h].id;
			} else for(var r=s-1; 0<=r; r--) if(i.call(this, n[r].id)) return n[r].id;
			return null;
		},
		updateItem:function(t, i) {
			i=i || {};
			var e=this.getItem(t);
			e && H.extend(e, i, !0), this.refresh();
		},
		at:function(t) {
			var i=this.getItemNode(t);
			return {
				left:i.offsetLeft+this.P.nameWidth,
				top:i.offsetTop,
				height:i.firstChild.offsetHeight,
				width:this.U_,
				parent:this.Oi
			};
		},
		Y_:function() {for(var t=this.P.elements, i=0; i<t.length; i++) t[i].value='';},
		clear:function() {this.Y_(), this.q_={}, this.refresh();},
		setValues:function(t, i) {
			var e=this;
			for(var s in this.P.complexData && (t=Rt.collapseNames(t, '', {}, function(t) {return R(e.W_[t]);})), i || this.Y_(), t) {
				var n=this.getItem(s);
				n && (n.value=t[s]);
			}
			this.q_=t, this.refresh();
		},
		getValues:function() {
			for(var t=l(this.q_ || {}), i=0; i<this.P.elements.length; i++) {
				var e=this.P.elements[i];
				'label'!=e.type && (t[e.id]=e.value);
			}
			return this.P.complexData && (t=Rt.expandNames(t)), t;
		},
		refresh:function() {this.render();},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && (this.U_=this.me-this.P.nameWidth, this.render());},
		$getSize:function(t, i) {
			if(this.P.autoheight) {
				var e=this.P.elements.length;
				this.P.height=Math.max(this.type.height*e, this.P.minHeight || 0);
			}
			return Hi.api.$getSize.call(this, t, i);
		},
		Q:function() {
			var t=[], i=this.P.elements;
			if(i) for(var e=0; e<i.length; e++) {
				var s=i[e];
				s.css && 'object'==M(s.css) && (s.css=at(s.css));
				var n='<div webix_f_id="'+s.id+'"'+('label'!==s.type?'role="option" tabindex="0"':'')+' class="webix_property_line '+(s.css || '')+'">';
				if('label'==s.type) t[e]=n+'<div class=\'webix_property_label_line\'>'+s.label+'</div></div>'; else {
					var h, r=this.on_render[s.type], o='<div class=\'webix_property_label\' style=\'width:'+this.P.nameWidth+'px\'>'+s.label+'</div><div class=\'webix_property_value\' style=\'width:'+this.U_+'px\'>';
					h=s.collection || s.options?s.template(s):s.format?s.format(s.value):s.value, r && (h=r.call(this, s.value, s)), t[e]=n+o+h+'</div></div>';
				}
			}
			return t.join('');
		},
		type:{
			height:24,
			templateStart:Yt(''),
			templateEnd:Yt('</div>')
		},
		$skin:function() {this.type.height=Li.propertyItemHeight;}
	}), _h=(H.protoUI(vh, Pi, Se, Ve, ze, je, Ri, Ht, g, Hi.view), {
		name:'calendar',
		defaults:{
			date:new Date,
			navigation:!0,
			monthSelect:!0,
			weekHeader:!0,
			monthHeader:!0,
			weekNumber:!1,
			skipEmptyWeeks:!1,
			calendarHeader:'%F %Y',
			events:sn.isHoliday,
			minuteStep:5,
			timeIcon:'wxi-clock',
			icons:!1,
			timepickerHeight:30,
			headerHeight:30,
			dayTemplate:function(t) {return t.getDate();},
			width:260,
			height:250
		},
		dayTemplate_setter:Yt,
		calendarHeader_setter:sn.dateToStr,
		calendarTime_setter:function(t) {return this.G_=t, sn.dateToStr(t);},
		date_setter:function(t) {return this.$d(t);},
		maxDate_setter:function(t) {return this.$d(t);},
		minDate_setter:function(t) {return this.$d(t);},
		minTime_setter:function(t) {
			return 'string'== typeof t && (t=[(t=I.parseTimeFormatDate(t)).getHours(), t.getMinutes()]), t;
		},
		maxTime_setter:function(t) {return 'string'== typeof t && (t=[(t=I.parseTimeFormatDate(t)).getHours(), t.getMinutes()]), t;},
		X_:function() {
			var t='focus'+(q.isIE?'in':'');
			q.touch || Kt(this.$view, t, S(function(t) {
				var i=t.target.className, e=-1!==i.indexOf('webix_cal_day')?'webix_cal_day':-1!==i.indexOf('webix_cal_block')?'webix_cal_block':'';
				if(300<new Date-Mi.ai && 100<new Date-Mi.ci && e) {
					var s=t.relatedTarget;
					if(s && !R(s.className)) {
						var n='webix_cal_day'==e?this.J_(t.target):this.K_(t.target);
						this.su(n);
					}
				}
			}, this), {capture:!q.isIE});
		},
		$init:function() {this.Vt.className+=' webix_calendar', this.Vt.setAttribute('role', 'region'), this.Vt.setAttribute('aria-label', I.aria.calendar), this.Z_={}, this.Q_={}, this.md=0, this.X_(), this.attachEvent('onKeyPress', this.Se);},
		minuteStep_setter:function(t) {return Math.max(Math.min(t, 60), this.defaults.minuteStep);},
		type_setter:function(t) {return 'time'==t?(this.tp= !0, this.md= -1):'year'==t && (this.ip= !0), t;},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && this.render();},
		$getSize:function(t, i) {
			var e=this.P;
			if(e.cellHeight && !e.type) {
				var s=this.ep(e.date);
				e.height=e.cellHeight*s.sp+e.headerHeight+(e.weekHeader?Li.calendarWeekHeaderHeight:0)+(e.timepicker || this.Dd?e.timepickerHeight:0)+2*(this.np+Li.borderWidth);
			}
			return Hi.api.$getSize.call(this, t, i);
		},
		moveSelection:function(t, i, e) {
			if(!this.config.master) {
				var s=this.getSelectedDate();
				this.config.multiselect && (s=s[0]);
				var n=sn.copy(s || this.getVisibleDate());
				this.su(n, t, e);
			}
		},
		su:function(t, i, e) {
			var s=this.Ed[this.md].hp(t, i, this);
			if(!1!==e) {
				var n=this.Vt.querySelector('.'+s+'[tabindex=\'0\']');
				n && n.focus();
			}
		},
		ep:function(t, i) {
			if(!this.rp || i) {
				var e=t.getMonth(), s=t.getFullYear(), n=new Date(s, e+1, 1), h=sn.weekStart(new Date(s, e, 1)), r=Math.round((n.valueOf()-h.valueOf())/864e5), o=this.P.skipEmptyWeeks?Math.ceil(r/7):6;
				this.rp={
					op:e,
					ap:h,
					ad:n,
					sp:o
				};
			}
			return this.rp;
		},
		$skin:function() {Li.calendar && (Li.calendar.width && (this.defaults.width=Li.calendar.width), Li.calendar.height && (this.defaults.height=Li.calendar.height), Li.calendar.headerHeight && (this.defaults.headerHeight=Li.calendar.headerHeight), Li.calendar.timepickerHeight && (this.defaults.timepickerHeight=Li.calendar.timepickerHeight)), this.np=Li.layoutPadding.form;},
		cp:function(t) {
			for(var i=this.ep(t), e=this.P, s=[], n=[], h=Infinity, r=this.me-2*(this.np+Li.borderWidth), o=this.ge-(e.monthHeader?e.headerHeight:0)-(e.weekHeader?Li.calendarWeekHeaderHeight:0)-(e.timepicker || this.Dd?e.timepickerHeight:0)-2*(this.np+Li.borderWidth), a=e.weekNumber?8:7, u=0; u<a; u++) n[u]=Math.ceil(r/(a-u)), r-=n[u], h=Math.min(h, n[u]);
			for(var c=i.sp, f=0; f<c; f++) s[f]=Math.ceil(o/(c-f)), o-=s[f], h=Math.min(h, s[f]);
			return [n, s, h];
		},
		icons_setter:function(t) {t?'object'==M(t)?this.Dd=t:this.Dd=this.fp:this.Dd=null;},
		Dd:[],
		fp:[{
			template:function() {return '<span role=\'button\' tabindex=\'0\' class=\'webix_cal_icon_today webix_cal_icon\'>'+I.calendar.today+'</span>';},
			on_click:{
				webix_cal_icon_today:function() {
					var t=new Date;
					this.P.timepicker || (t=sn.datePart(t)), this.setValue(t), this.callEvent('onTodaySet', [this.getSelectedDate()]);
				}
			}
		}, {
			template:function() {return '<span role=\'button\' tabindex=\'0\' class=\'webix_cal_icon_clear webix_cal_icon\'>'+I.calendar.clear+'</span>';},
			on_click:{webix_cal_icon_clear:function() {this.setValue(''), this.callEvent('onDateClear', [this.getSelectedDate()]);}}
		}],
		refresh:function() {this.render();},
		render:function() {
			this.md=0, this.lp= !1;
			var t=this.P;
			if(this.isVisible(t.id)) {
				this.vp=sn.datePart(new Date), this.callEvent('onBeforeRender', []);
				var i=this.P.date, e=this.ep(i, !0), s=this.cp(i), n=this.np+'px', h=s[0], r=s[1], o='';
				if(t.monthHeader && (o+='<div class=\'webix_cal_month\' style=\'margin:0 '+n+'\'><span aria-live=\'assertive\' aria-atomic=\'true\' class=\'webix_cal_month_name'+(t.monthSelect && t.navigation?'\' role=\'button\' tabindex=\'0\'':' webix_readonly\'')+'>'+t.calendarHeader(i)+'</span>', t.navigation && (o+='<div role=\'button\' tabindex=\'0\' aria-label=\''+I.aria.navMonth[0]+'\' class=\'webix_cal_prev_button\'></div><div role=\'button\' tabindex=\'0\' aria-label=\''+I.aria.navMonth[1]+'\' class=\'webix_cal_next_button\'></div>')
					, o+='</div>'), t.weekHeader && (o+='<div class=\'webix_cal_header\' style=\'margin:0 '+n+'\' aria-hidden=\'true\'>'+this._p(h)+'</div>'), o+='<div class=\'webix_cal_body\' style=\'margin:0 '+n+'\'>'+this.pp(h, r, e, s[2])+'</div>', (this.P.timepicker || this.Dd) && (o+='<div class=\'webix_cal_footer\' style=\'margin:0 '+n+'\'>', this.P.timepicker && (o+=this.mp(i)), this.Dd && (o+=this.Id()), o+='</div>'), this.Oi.innerHTML=o, this.Oi.firstChild.style.marginTop=n, 'time'==this.P.type) {
					var a=this.P.date;
					a && ('string'== typeof a?i=I.parseTimeFormatDate(a):$(a) && (i.setHours(a[0]), i.setMinutes(a[1]))), this.bp(-1, i);
				} else 'month'==this.P.type?this.bp(1, i):'year'==this.P.type && this.bp(2, i);
				this.callEvent('onAfterRender', []);
			}
		},
		Id:function(t) {
			for(var i='<div class=\'webix_cal_icons\'>', e=this.Dd, s=0; s<e.length; s++) {
				if(e[s].template) {
					var n='function'== typeof e[s].template?e[s].template:n(e[s].template);
					i+=n.call(this, t);
				}
				e[s].on_click && H.extend(this.on_click, e[s].on_click);
			}
			return i+='</div>';
		},
		mp:function(t) {
			var i=this.P.calendarTime || I.timeFormatStr, e=this.P.timeIcon, s='';
			if(this.P.master) {
				var n=_(oi(this.P.master).P.value);
				for(var h in sn.equal(n.end, t) && (n.start=n.end), n) s+='<div role=\'button\' tabindex=\'0\' class=\'webix_range_time_'+h+' webix_cal_time\'><span class=\'webix_icon '+e+'\'></span> '+i(n[h])+'</div>';
			} else s='<div role=\'button\' tabindex=\'0\' class=\'webix_cal_time'+(this.Dd?' webix_cal_time_icons':'')+'\'><span class=\'webix_icon '+e+'\'></span> '+i(t)+'</div>';
			return s;
		},
		_p:function(t) {
			var i=this.P, e='', s=0;
			i.weekNumber && (s=1, e+='<div class=\'webix_cal_week_header\' style=\'width: '+t[0]+'px;\' >'+(i.calendarWeekHeader || '')+'</div>');
			for(var n=sn.startOnMonday?1:0, h=0; h<7; h++) {
				var r=(n+h)%7, o=I.calendar.dayShort[r];
				e+='<div day=\''+r+'\' style=\'width: '+t[h+s]+'px;\' >'+o+'</div>';
			}
			return e;
		},
		blockDates_setter:function(t) {return v(t, this.$scope);},
		gp:function(t, i) {
			var e='', s=!1;
			return sn.equal(t, this.vp) && (e+=' webix_cal_today'), this.wp(t) || (e+=' webix_cal_day_disabled'), t.getMonth()!=i.op && (s= !0, e+=' webix_cal_outside'), !s && this.xp(t) && (e+=' webix_cal_select'), this.P.events && (e+=' '+(this.P.events(t, s) || '')), e+=' webix_cal_day';
		},
		pp:function(t, i, e, s) {
			for(var n=this.P, h='', r=sn.datePart(sn.copy(e.ap)), o=n.weekNumber?1:0, a=sn.getISOWeek(sn.add(r, 2, 'day', !0)), u=0; u<i.length; u++) {
				h+='<div class=\'webix_cal_row\' style=\'height:'+i[u]+'px;line-height:'+i[u]+'px\'>', o && (!r.getMonth() && r.getDate()<7 && (a=sn.getISOWeek(sn.add(r, 2, 'day', !0))), h+='<div class=\'webix_cal_week_num\' aria-hidden=\'true\' style=\'width:'+t[0]+'px\'>'+a+'</div>');
				for(var c=o; c<t.length; c++) {
					var f=this.gp(r, e), l=this.P.dayTemplate.call(this, r), d=this.xp(r), v='', _=r.getMonth()!=e.op;
					'object'==M(l)?(v=l.aria || v, l=l.text):v=sn.dateToStr(I.aria.dateFormat)(r), h+='<div day=\''+c+'\' role=\'gridcell\' '+(_?'aria-hidden=\'true\'':'')+' aria-label=\''+v+'\' tabindex=\''+(d && !_?'0':'-1')+'\' aria-selected=\''+(d && !_?'true':'false')+'\' class=\''+f+'\' style=\'text-align:center; width:'+t[c]+'px\'><span aria-hidden=\'true\' class=\'webix_cal_day_inner\' style=\'display:inline-block; '+this.yp(s, s)+'\'>'+l+'</span></div>', (r=sn.add(r, 1, 'day')).getHours() && (r=sn.datePart(r));
				}
				h+='</div>', a++;
			}
			return h;
		},
		jd:function(t, i) {
			var e=this.P.date;
			i || (i=this.Ed[this.md].Rd), this.md || (e=sn.copy(e)).setDate(1);
			var s=sn.add(e, t*i, 'month', !0);
			this.Mp(e, s);
		},
		Mp:function(t, i) {this.callEvent('onBeforeMonthChange', [t, i]) && (this.md?this.Sp(i):this.showCalendar(i), this.callEvent('onAfterMonthChange', [i, t]));},
		Ed:{
			'-2':{
				kp:function(t) {
					var i=this.P, e=i.date, s=!1, n=i.minTime?i.minTime[0]:0, h=i.maxTime?i.maxTime[0]+(i.maxTime[1]?1:0):24, r=i.minTime && e.getHours()==n?i.minTime[1]:0, o=i.maxTime && i.maxTime[1] && e.getHours()==h-1?i.maxTime[1]:60;
					if(this.P.blockTime) {
						var a=sn.copy(e);
						a.setMinutes(t), s=this.P.blockTime(a);
					}
					return t<r || o<=t || s;
				},
				Cp:function(t, i) {t.setMinutes(i);},
				$p:function(t, i, e) {
					if(!this.kp.call(e, t.getMinutes())) return t;
					var s=e.P.minuteStep, n=sn.add(t, 'right'==i?s:-s, 'minute', !0);
					return t.getHours()===n.getHours()?this.$p(n, i, e):void 0;
				}
			},
			'-1':{
				kp:function(t) {
					var i=this.P, e=i.date, s=i.minTime?i.minTime[0]:0, n=i.maxTime?i.maxTime[0]+(i.maxTime[1]?1:0):24;
					if(t<s || n<=t) return !0;
					if(i.blockTime) {
						var h=sn.copy(e);
						h.setHours(t);
						for(var r=i.minTime && t==s?i.minTime[1]:0, o=i.maxTime && i.maxTime[1] && t==n-1?i.maxTime[1]:60, a=r; a<o; a+=i.minuteStep) if(h.setMinutes(a), !i.blockTime(h)) return !1;
						return !0;
					}
				},
				Cp:function(t, i) {t.setHours(i);},
				hp:function(t, i, e) {
					var s, n, h=e.P.minuteStep;
					return 'bottom'===i || 'top'===i?(t.setHours('bottom'===i?23:0), t.setMinutes('bottom'===i?55:0), t.setSeconds(0), t.setMilliseconds(0), s=t):'left'===i || 'right'===i?(n='right'===i?h:-h, 'left'===i && t.getMinutes()<h && (n=60-h), 'right'===i && t.getMinutes()>=60-h && (n=h-60), n-=t.getMinutes()%h, s=e.Ed[-2].$p(sn.add(t, n, 'minute'), i, e)):'up'===i || 'down'===i?(n='down'===i?1:-1, 'down'===i && 23===t.getHours() && (n= -23), 'up'===i && 0===t.getHours() && (n=23), s=this.$p(sn.add(t, n, 'hour'), i, e)):!1===i && (s=this.$p(t, i, e)), e.selectDate(s, !1), s && (e.Sp(s), e.selectDate(s, !1)), 'webix_cal_block'+('left'===i || 'right'===i?'_min':'');
				},
				$p:function(t, i, e) {
					if(!this.kp.call(e, t.getHours())) return t;
					var s=sn.add(t, 'down'==i?1:-1, 'hour', !0);
					return t.getDate()===s.getDate()?this.$p(s, i, e):void 0;
				}
			},
			0:{
				Rd:1,
				hp:function(t, i, e) {
					var s=t;
					return 'pgup'===i || 'pgdown'===i?s=sn.add(t, 'pgdown'===i?1:-1, 'month'):'bottom'===i?s=new Date(t.getFullYear(), t.getMonth()+1, 0):'top'===i?s=new Date(t.setDate(1)):'left'===i || 'right'===i?s=sn.add(t, 'right'===i?1:-1, 'day'):'up'!==i && 'down'!==i || (s=sn.add(t, 'down'===i?1:-1, 'week')), e.wp(s) || (s=e.$p(t, i)), s && e.selectDate(s, !0), 'webix_cal_day';
				}
			},
			1:{
				kp:function(t, i) {
					var e=!1, s=i.P.minDate, n=i.P.maxDate, h=i.P.date.getFullYear();
					if(s) {
						var r=s.getFullYear();
						e=h<r || h==r && s.getMonth()>t;
					}
					if(n && !e) {
						var o=n.getFullYear();
						e=o<h || h==o && n.getMonth()<t;
					}
					return e;
				},
				fl:function(t, i) {return (t=sn.monthStart(t))<i.P.minDate?t=sn.copy(i.P.minDate):t>i.P.maxDate && (t=sn.copy(i.P.maxDate)), t;},
				Dp:function(t) {return t.getFullYear();},
				Ip:function(t) {return I.calendar.monthShort[t];},
				Cp:function(t, i) {i!=t.getMonth() && t.setDate(1), t.setMonth(i);},
				Rd:12,
				hp:function(t, i, e) {
					var s=t;
					return 'pgup'===i || 'pgdown'===i?s=sn.add(t, 'pgdown'===i?1:-1, 'year'):'bottom'===i?s=new Date(t.setMonth(11)):'top'===i?s=new Date(t.setMonth(0)):'left'===i || 'right'===i?s=sn.add(t, 'right'===i?1:-1, 'month'):'up'!==i && 'down'!==i || (s=sn.add(t, 'down'===i?4:-4, 'month')), s=e.fl(s), e.wp(s) || (s=e.$p(t, i)), s && (e.Sp(s), e.selectDate(s, !1)), 'webix_cal_block';
				}
			},
			2:{
				kp:function(t, i) {
					t+=i.Ap;
					var e=i.P.minDate, s=i.P.maxDate;
					return !!(e && e.getFullYear()>t || s && s.getFullYear()<t);
				},
				fl:function(t, i) {return (t=sn.yearStart(t))<i.P.minDate?t=sn.copy(i.P.minDate):t>i.P.maxDate && (t=sn.copy(i.P.maxDate)), t;},
				Dp:function(t, i) {
					var e=t.getFullYear();
					return i.Ap=e=e-e%10-1, e+' - '+(e+10+1);
				},
				Ip:function(t, i) {return i.Ap+t;},
				Cp:function(t, i, e) {t.setFullYear(e.Ap+i);},
				Rd:120,
				hp:function(t, i, e) {
					var s=t;
					return 'pgup'===i || 'pgdown'===i?s=sn.add(t, 'pgdown'===i?10:-10, 'year'):'bottom'===i?s=new Date(t.setYear(e.Ap+10)):'top'===i?s=new Date(t.setYear(e.Ap)):'left'===i || 'right'===i?s=sn.add(t, 'right'===i?1:-1, 'year'):'up'!==i && 'down'!==i || (s=sn.add(t, 'down'===i?4:-4, 'year')), s=e.fl(s), e.wp(s) || (s=e.$p(t, i)), s && (e.Sp(s), e.selectDate(s, !1)), 'webix_cal_block';
				}
			}
		},
		Tp:function() {
			var t;
			if(this.Ed[-1].kp.call(this, this.P.date.getHours())) for(t=0; t<24; t++) if(!this.Ed[-1].kp.call(this, t)) {
				this.P.date.setHours(t);
				break;
			}
			if(this.Ed[-2].kp.call(this, this.P.date.getMinutes())) for(t=0; t<60; t+=this.P.minuteStep) if(!this.Ed[-2].kp.call(this, t)) {
				this.P.date.setMinutes(t);
				break;
			}
		},
		Sp:function(t) {
			var i, e, s, n, h, r, o, a, u, c, f, l, d='', v=this.np+'px';
			if(h=2-((i=this.P).weekHeader?0:1)-(i.monthHeader?0:1), c=this.Ed[this.md], r=this.Oi.childNodes, t && (i.date=t), a=i.type, this.lp || (this.Fp=this.Oi.offsetHeight-(i.monthHeader || this.tp?i.headerHeight:0)-2*(this.np+Li.borderWidth), 'year'!=a && 'month'!=a && (this.Fp-=i.timepickerHeight), this.Vp=r[h].offsetWidth, this.lp=1), this.tp) {
				s=this.Fp/6;
				var _=6, p=(this.G_ || I.timeFormat).match(/%([a,A])/);
				for(p && _++, u=parseInt((this.Vp-3)/_, 10), l=Math.min(u, s), d+='<div class=\'webix_time_header\' style=\'margin:0 '+v+'\'>'+this.zp(u, p)+'</div>', d+='<div  class=\'webix_cal_body\' style=\'height:'+this.Fp+'px; margin:0 '+v+';\'>', this.Tp(), d+='<div class=\'webix_hours\'>', o=i.date.getHours(), f=sn.copy(i.date), n=0; n<24; n++) {
					if(e='', p && n%4==0) {
						var m=n?12==n?I.pm[0]:'':I.am[0];
						d+='<div class=\'webix_cal_block_empty'+e+'\' style=\''+this.yp(u, s)+'clear:both;\'>'+m+'</div>';
					}
					this.Ed[-1].kp.call(this, n)?e+=' webix_cal_day_disabled':o==n && (e+=' webix_selected'), f.setHours(n), d+='<div aria-label=\''+sn.dateToStr(I.aria.hourFormat)(f)+'\' role=\'gridcell\' tabindex=\''+(o==n?'0':'-1')+'\' aria-selected=\''+(o==n?'true':'false')+'\' class=\'webix_cal_block'+e+'\' data-value=\''+n+'\' style=\''+this.yp(u, s)+(n%4!=0 || p?'':'clear:both;')+'\'><span style=\'display:inline-block; '+this.yp(l, l)+'\'>'+sn.toFixed(p?n && 12!=n?n%12:12:n)+'</span></div>';
				}
				for(d+='</div>', d+='<div class=\'webix_minutes\'>', o=i.date.getMinutes(), f=sn.copy(i.date), n=0; n<60; n+=i.minuteStep) e='', this.Ed[-2].kp.call(this, n)?e=' webix_cal_day_disabled':o==n && (e=' webix_selected'), f.setMinutes(n), d+='<div aria-label=\''+sn.dateToStr(I.aria.minuteFormat)(f)+'\' role=\'gridcell\' tabindex=\''+(o==n?'0':'-1')+'\' aria-selected=\''+(o==n?'true':'false')+'\' class=\'webix_cal_block webix_cal_block_min'+e+'\' data-value=\''+n+'\' style=\''+this.yp(u, s)+(n/i.minuteStep%2==0?'clear:both;':'')+'\'><span style=\'display:inline-block; '+this.yp(l, l)+'\'>'+sn.toFixed(n)+'</span></div>';
				d+='</div>', d+='</div>', d+='<div class=\'webix_time_footer\' style=\'margin:0 '+v+'\'>'+this.Bp()+'</div>', this.Oi.innerHTML=d, this.Oi.firstChild.style.marginTop=v;
			} else {
				if(i.monthHeader) {
					var b=r[0].childNodes, g=I.aria['nav'+(1==this.md?'Year':'Decade')];
					b[0].innerHTML=c.Dp(i.date, this), b[0].blur(), i.navigation && (b[1].setAttribute('aria-label', g[0]), b[2].setAttribute('aria-label', g[1]));
				} else c.Dp(i.date, this);
				for(s=Math.floor(this.Fp/3), u=Math.floor(this.Vp/4), l=Math.min(s, u), this.wp(i.date) && (o=1==this.md?i.date.getMonth():i.date.getFullYear()), n=0; n<12; n++) {
					e=o==(1==this.md?n:c.Ip(n, this))?' webix_selected':'', c.kp(n, this) && (e+=' webix_cal_day_disabled');
					var w=I.aria[(1==this.md?'month':'year')+'Format'];
					d+='<div role=\'gridcell\' aria-label=\''+sn.dateToStr(w)(i.date)+'\' tabindex=\''+(-1!==e.indexOf('selected')?'0':'-1')+'\' aria-selected=\''+(-1!==e.indexOf('selected')?'true':'false')+'\' class=\'webix_cal_block'+e+'\' data-value=\''+n+'\' style=\''+this.yp(u, s)+'\'><span style=\'display:inline-block; '+this.yp(l, l)+'\'>'+c.Ip(n, this)+'</span></div>';
				}
				i.weekHeader && (r[h-1].style.display='none', 1===h && (r[h].style.marginTop=v)), r[h].innerHTML=d, 'year'!=a && 'month'!=a?r[h+1]?r[h+1].innerHTML=this.Bp():this.Oi.innerHTML+='<div class=\'webix_time_footer\' style=\'margin:0 '+v+'\'>'+this.Bp()+'</div>':r[h+1] && (r[h+1].style.display='none'), r[h].style.height=this.Fp+'px';
			}
		},
		yp:function(t, i) {return 'width:'+t+'px; height:'+i+'px; line-height:'+i+'px;';},
		Bp:function() {return '<input type=\'button\' style=\'width:100%\' class=\'webix_cal_done\' value=\''+I.calendar.done+'\'>';},
		zp:function(t, i) {
			var e=2*t;
			return '<div class=\'webix_cal_hours\' style=\'width:'+t*(i?5:4)+'px\'>'+I.calendar.hours+'</div><div class=\'webix_cal_minutes\' style=\'width:'+e+'px\'>'+I.calendar.minutes+'</div>';
		},
		bp:function(t, i) {
			var e=this.md;
			this.callEvent('onBeforeZoom', [t, e]) && ((this.md=t)?this.Sp(i):this.showCalendar(i), this.callEvent('onAfterZoom', [t, e]));
		},
		fl:function(t) {return !this.wp(t) && this.Ed[this.md].fl && (t=this.Ed[this.md].fl(t, this)), t;},
		Hp:function(t) {
			var i=this.K_(t), e=this.md-(this.ip?0:1);
			if(i=this.fl(i), this.wp(i)) {
				this.bp(e, i);
				var s=this.P.type;
				'month'!=s && 'year'!=s || this.Rp(i);
			}
		},
		Rp:function(t, i) {this.callEvent('onBeforeDateSelect', [t]) && (this.selectDate(t, !0, i), this.callEvent('onDateSelect', [t]), this.callEvent('onAfterDateSelect', [t]));},
		J_:function(t) {
			var i=ot(t)-(this.P.weekNumber?1:0), e=ot(t.parentNode), s=sn.add(this.ep().ap, i+7*e, 'day', !0);
			return this.P.timepicker && (s.setHours(this.P.date.getHours()), s.setMinutes(this.P.date.getMinutes())), s;
		},
		K_:function(t) {
			var i=1*t.getAttribute('data-value'), e=-1!=t.className.indexOf('webix_cal_block_min')?this.md-1:this.md, s=this.P.date, n=sn.copy(s);
			return this.Ed[e].Cp(n, i, this), n;
		},
		on_click:{
			webix_cal_prev_button:function() {this.jd(-1);},
			webix_cal_next_button:function() {this.jd(1);},
			webix_cal_day_disabled:function() {return !1;},
			webix_cal_outside:function() {if(!this.P.navigation) return !1;},
			webix_cal_day:function(t, i, e) {
				var s=this.J_(e), n='touch'===this.P.multiselect || t.ctrlKey || t.metaKey;
				this.Rp(s, n);
			},
			webix_cal_time:function() {
				if(this.Ed[this.md-1]) {
					this.tp= !0;
					var t=this.md-1;
					this.bp(t);
				}
			},
			webix_range_time_start:function() {oi(this.P.master).Hd='start';},
			webix_range_time_end:function() {oi(this.P.master).Hd='end';},
			webix_cal_done:function() {
				var t=sn.copy(this.P.date);
				t=this.fl(t), this.Rp(t);
			},
			webix_cal_month_name:function() {
				if(this.P.navigation && (this.tp= !1, 2!=this.md && this.P.monthSelect)) {
					var t=Math.max(this.md, 0)+1;
					this.bp(t);
				}
			},
			webix_cal_block:function(t, i, e) {
				if(this.tp) {
					if(-1!==e.className.indexOf('webix_cal_day_disabled')) return !1;
					var s=this.K_(e);
					this.Sp(s);
				} else -1==e.className.indexOf('webix_cal_day_disabled') && this.Hp(e);
			}
		},
		$d:function(t, i) {return t?('string'== typeof t && (t=i?sn.strToDate(i)(t):I.parseFormatDate(t)), t):sn.datePart(new Date);},
		wp:function(t) {
			var i=this.P.blockDates && this.P.blockDates.call(this, t), e=this.P.minDate, s=this.P.maxDate;
			return !i && !(t<e || s<t);
		},
		$p:function(t, i) {
			var e, s='top'===i || 'left'===i || 'pgup'===i || 'up'===i?-1:1, n=sn.add(t, s, 'day', !0);
			return this.wp(n)?n:(0===this.md?e=t.getMonth()===n.getMonth():1===this.md?e=t.getFullYear()===n.getFullYear():2===this.md && (e=n.getFullYear()>this.Ap && n.getFullYear()<this.Ap+10), e?this.$p(n, i):void 0);
		},
		showCalendar:function(t) {t=this.$d(t), this.P.date=t, this.render(), this.resize();},
		xp:function(t) {return t && this.Q_[t.valueOf()];},
		getSelectedDate:function() {
			var t=[];
			for(var i in this.Q_) t.push(sn.copy(this.Q_[i]));
			return this.config.multiselect?t:t[0] || null;
		},
		getVisibleDate:function() {return sn.copy(this.P.date);},
		setValue:function(t) {this.selectDate(t, !0);},
		getValue:function(t) {
			var i=this.getSelectedDate();
			return t && (i=sn.dateToStr(t)(i)), i;
		},
		selectDate:function(t, i, e) {
			if(t && e && this.config.multiselect || (this.Q_={}), t) {
				$(t) || (t=[t]);
				for(var s=0; s<t.length; s++) {
					var n=this.$d(t[s]), h=sn.datePart(sn.copy(n)).valueOf();
					if(this.Q_[h] && e?delete this.Q_[h]:this.Q_[h]=n, !this.config.multiselect) break;
				}
				t.length && i && this.showCalendar(t[0]);
			}
			!1!==i && this.render(), this.callEvent('onChange', [t]);
		},
		locate:function() {return null;}
	}), ph=(H.protoUI(_h, Fe, ze, Hi.view, g), {
		name:'colorboard',
		defaults:{
			template:'<div style="width:100%;height:100%;background-color:{obj.val}"></div>',
			palette:null,
			height:220,
			width:220,
			cols:12,
			rows:10,
			minLightness:.15,
			maxLightness:1,
			navigation:!0
		},
		$init:function() {
			Kt(this.Vt, 'click', S(function(t) {
				var i=_t(t, 'webix_val');
				if(i) {
					var e=this.P.value;
					i=this.setValue(i), this.callEvent('onItemClick', [i, t]), i!=e && this.callEvent('onSelect', [i]);
				}
			}, this)), this.$view.setAttribute('role', 'grid'), this.Vt.setAttribute('aria-readonly', 'true');
		},
		bu:function() {this.getValue() || this.moveSelection('up');},
		Ep:function(t) {
			var i=this.P.palette;
			t=(t || '').toUpperCase();
			for(var e=0, s=i.length; e<s; e++) for(var n=0, h=i[e].length; n<h; n++) if(i[e][n].toUpperCase()==t) return {
				row:e,
				col:n
			};
			return null;
		},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && this.render();},
		getValue:function() {return this.P.value;},
		Pp:function() {return this.Vt.firstChild;},
		$prepareValue:function(t) {return (t=t?t.toString(16):'') && '#'!=t.charAt(0) && /^[0-9a-fA-F]+$/.test(t) && (t='#'+t), t;},
		value_setter:function(t) {return this.$prepareValue(t);},
		setValue:function(t) {
			t=this.$prepareValue(t);
			var i=this.P.value;
			return this.P.value=t, this.$setValue(t, i), t;
		},
		jp:null,
		Np:function() {
			if(this.jp && this.jp.parentNode) return this.jp;
			var t=this.jp=document.createElement('div');
			return t.className='webix_color_selector', this.Vt.lastChild.appendChild(t), t;
		},
		$setValue:function(t, i) {
			if(this.isVisible(this.P.id)) {
				var e, s, n, h, r, o=0, a=0;
				if(i && (n=this.Ep(i)), n || (n={
					row:0,
					col:0
				}), this.Vt.lastChild.childNodes[n.row].childNodes[n.col].setAttribute('tabindex', '-1'), (n=this.Ep(t)) && (e=this.Vt.lastChild.childNodes[n.row].childNodes[n.col]), !(e && e.parentNode && e.parentNode.parentNode)) return this.jp && (this.jp.style.left='-100px'), void this.Vt.lastChild.childNodes[0].childNodes[0].setAttribute('tabindex', '0');
				h=e.parentNode, o=e.offsetLeft-h.offsetLeft, a= -(this.$height-(e.offsetTop-h.parentNode.offsetTop)), e.setAttribute('tabindex', '0'), e.setAttribute('aria-selected', 'true'), e.setAttribute('tabindex', '0'), e.setAttribute('aria-selected', 'true'), (s=this.Np()).setAttribute('webix_val', t), r=['left:'+o+'px', 'top:'+a+'px', 'width:'+e.style.width, 'height:'+e.style.height].join(';'), 'undefined'!= typeof s.style.cssText?s.style.cssText=r:s.setAttribute('style', r);
			}
		},
		Lp:function(t) {
			function s(t) {return Le.toHex(t, 2);}

			function h(t, i, e) {return '#'+s(Math.floor(t))+s(Math.floor(i))+s(Math.floor(e));}

			function i(t, i, e) {
				var s, n, h;
				if(i) {
					var r=e<.5?e*(1+i):e+i-e*i, o=2*e-r;
					s=a(o, r, t+1/3), n=a(o, r, t), h=a(o, r, t-1/3);
				} else s=n=h=e;
				return {
					r:255*s,
					g:255*n,
					b:255*h
				};
			}

			function a(t, i, e) {return e<0 && (e+=1), 1<e && (e-=1), e<1/6?t+6*(i-t)*e:e<=.5?i:e<2/3?t+(i-t)*(2/3-e)*6:t;}

			var e=[], n=t.rows-1, r=1/t.cols, o=(t.maxLightness-t.minLightness)/n, u=null;
			e.push(function _(t) {
				for(var i=[], e=255, s=e/t, n=0; n<t; n++) e=Math.round(0<e?e:0), i.push(h(e, e, e)), e-=s;
				return i[i.length-1]='#000000', i;
			}(t.cols));
			for(var c=0, f=t.minLightness; c<n; c++) {
				u=[];
				for(var l=0, d=0; l<t.cols; l++) {
					var v=i(d, 1, f);
					u.push(h(v.r, v.g, v.b)), d+=r;
				}
				e.push(u), f+=o;
			}
			this.P.palette=e;
		},
		moveSelection:function(t, i, e) {
			var s, n, h=this.getValue();
			if(h && (s=this.Ep(h)), s || (s={
				row:0,
				col:0
			}), s && ('up'==t || 'down'==t?s.row=s.row+('up'==t?-1:1):'right'==t || 'left'==t?s.col=s.col+('right'==t?1:-1):'top'==t?s.row=s.col=0:'bottom'==t && (s.row=this.Vt.lastChild.querySelectorAll('.webix_color_row').length-1, s.col=this.Vt.lastChild.childNodes[s.row].childNodes.length-1), s.row=Math.max(s.row, 0), 0<=s.row && (n=this.Vt.lastChild.childNodes[s.row].childNodes[s.col]), n && (h=n.getAttribute('webix_val'), this.setValue(h), this.callEvent('onSelect', [this.P.value]), !1!==e))) {
				var r=this.Vt.querySelector('div[tabindex=\'0\']');
				r && r.focus();
			}
		},
		render:function() {
			if(this.isVisible(this.P.id)) {
				this.P.palette || this.Lp(this.P);
				var t=this.P.palette;
				this.callEvent('onBeforeRender', []);
				for(var h=Yt('<div role=\'gridcell\' tabindex=\'-1\' aria-label="{obj.val}" style="width:{obj.width}px;height:{obj.height}px;" webix_val="{obj.val}">'+(this.P.template || '')+'</div>'), r={
					width:0,
					height:0,
					val:0
				}, i=this.$width, e=this.$height, s=[], n='<div class="webix_color_palette"role="rowgroup">', o='object'==M(t[0])?t[0]:t, a=0; a<o.length; a++) s[a]=Math.floor(i/(o.length-a)), i-=s[a];
				if('object'==M(t[0])) for(var u=0; u<t.length; u++) {
					var c=Math.floor(e/(t.length-u));
					e-=c, n+=f(t[u], s, c);
				} else n+=f(t, s, e);
				n+='</div>', this.Vt.innerHTML=n, this.jp=null, this.P.value?this.$setValue(this.P.value):this.Vt.lastChild.childNodes[0].childNodes[0].setAttribute('tabindex', '0'), this.callEvent('onAfterRender', []);
			}

			function f(t, i, e) {
				for(var s='<div class="webix_color_row" role="row">', n=0; n<t.length; n++) r.width=i[n], r.height=e, r.val=t[n], s+=h(r);
				return s+='</div>';
			}
		},
		refresh:function() {this.render();}
	}), mh=(H.protoUI(ph, Fe, Hi.view, g), {
		name:'button',
		touchable:!0,
		$skin:function() {this.defaults.height=Li.buttonHeight || Li.inputHeight;},
		defaults:{
			template:function(t, i) {
				var e=i.$renderInput(t, i);
				return (t.badge || 0===t.badge) && (e=e.replace('</button>', '<span class=\'webix_badge\'>'+t.badge+'</span></button>')), '<div class=\'webix_el_box\' style=\'width:'+t.awidth+'px; height:'+t.aheight+'px\'>'+e+'</div>';
			},
			label:'',
			value:'',
			borderless:!0
		},
		$renderInput:function(t) {return '<button type=\'button\' '+(t.popup?'aria-haspopup=\'true\'':'')+' class=\'webix_button\'>'+(t.label || t.value)+'</button>';},
		$init:function(t) {this.Vt.className+=' webix_control webix_el_'+(this.$cssName || this.name), this.Bt=[], this.Op(t), this.data=this.P, this.tt=this.Vt, this.$ready.push(function() {this.Wp(this.config);});},
		hotkey_setter:function(t) {
			var e=this;
			this.Up(t, function(t, i) {e.isVisible() && (xt(e.$view.firstChild, 'MouseEvents', 'click'), gt(i));});
		},
		Op:function(t) {t.css && this.Yp(t.css) && (!this.defaults.css || this.Yp(this.defaults.css)) || (this.Vt.className+=' webix_secondary');},
		Yp:function(t) {
			if('string'== typeof t) {
				for(var i in {
					webix_danger:1,
					webix_transparent:1,
					webix_primary:1
				}) if(-1!==t.indexOf(i)) return !0;
			}
			return !1;
		},
		Up:function(t, i, e) {
			var s=Mi.addHotKey(t, i, e);
			this.attachEvent('onDestruct', function() {Mi.removeHotKey(s, i, e);});
		},
		type_setter:function(t) {return this.bd[t] && (this.$renderInput=Yt(this.bd[t])), t;},
		qp:!1,
		bd:{
			image:'<button type=\'button\' class=\'webix_button webix_img_btn\' style=\'line-height:#cheight#px;\'><img class=\'webix_image\' style=\'max-width:#cheight#px; max-height:#cheight#px;\' src = \'#image#\'>#label#</button>',
			imageTop:'<button type=\'button\' class=\'webix_button webix_img_btn_top\'><img class=\'webix_image\' style=\'max-width:#cheight#px; max-height:#cheight#px;\' src = \'#image#\'><div class=\'webix_img_btn_text\'>#label#</div></button>',
			icon:'<button type=\'button\' class=\'webix_button webix_img_btn\' style=\'line-height:#cheight#px;\'><span class=\'webix_icon_btn #icon#\' style=\'max-width:#cheight#px;\'></span>#label#</button>',
			iconTop:'<button type=\'button\' class=\'webix_button webix_img_btn_top\' style=\'width:100%;text-align:center;\'><span class=\'webix_icon #icon#\'></span><div class=\'webix_img_btn_text\'>#label#</div></button>'
		},
		Gp:function() {
			for(var t=[], i=['input', 'select', 'textarea', 'button'], e=0; e<i.length; e++) for(var s=this.$view.getElementsByTagName(i[e]), n=0; n<s.length; n++) t.push(s[n]);
			return t;
		},
		disable:function() {
			var t, i, e=this.Pp();
			if(Vi.api.disable.apply(this, arguments), e && -1==e.className.indexOf(' webix_disabled_box')) {
				e.className+=' webix_disabled_box';
				var s=this.Gp();
				for(t=0; t<s.length; t++) s[t].setAttribute('disabled', !0);
				if((i=this.getInputNode()) && 'div'==i.tagName.toLowerCase() && (this.Xp=i.getAttribute('tabIndex'), i.removeAttribute('tabIndex')), 'top'==this.P.labelPosition) {
					var n=this.tt.firstChild;
					n && (n.className+=' webix_disabled_top_label');
				}
			}
		},
		enable:function() {
			Vi.api.enable.apply(this, arguments);
			var t, i=this.Pp();
			if(i) {
				i.className=i.className.replace(' webix_disabled_box', '');
				for(var e=this.Gp(), s=0; s<e.length; s++) e[s].removeAttribute('disabled');
				if((t=this.getInputNode()) && !R(this.Xp) && t.setAttribute('tabIndex', this.Xp), 'top'==this.P.labelPosition) {
					var n=this.tt.firstChild;
					n && (n.className=n.className.replace(' webix_disabled_top_label', ''));
				}
			}
		},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && this.render();},
		setValue:function(t) {
			t=this.$prepareValue(t);
			var i=this.P.value;
			this.$compareValue(i, t)?this.Jp && t!=this.$getValue() && this.$setValue(t):(this.P.value=t, this.Jp && this.$setValue(t), this.callEvent('onChange', [t, i]));
		},
		$compareValue:function(t, i) {return 'number'== typeof i && (i=i.toString()), 'number'== typeof t && (t=t.toString()), t==i;},
		$prepareValue:function(t) {return 0===t?'0':(t || '').toString();},
		value_setter:function(t) {return this.$prepareValue(t);},
		$setValue:function(t) {
			var i=this.getInputNode();
			i && !this.bd[this.P.type] && (t=this.P.label || t, 'BUTTON'==i.tagName?i.innerHTML=t:i.value=t);
		},
		getValue:function() {
			var t=this.Jp?this.$getValue():this.P.value;
			return void 0===t?'':t;
		},
		$getValue:function() {return this.P.value || '';},
		focus:function() {
			if(!Mi.canFocus(this)) return !1;
			var t=this.getInputNode();
			t && t.focus && t.focus();
		},
		blur:function() {
			var t=this.getInputNode();
			t && t.blur && t.blur();
		},
		getInputNode:function() {return this.tt.getElementsByTagName('input')[0] || this.tt.getElementsByTagName('button')[0];},
		Pp:function() {
			for(var t=0; t<this.tt.childNodes.length; t++) if(0<=this.tt.childNodes[t].className.indexOf('webix_el_box')) return this.tt.childNodes[t];
			return null;
		},
		Ae:function(t, i) {
			var e=i.target, s=this.Pp();
			return 'top'==this.P.labelPosition && this.tt.firstChild.contains(e) || s && s.contains(e)?this.P:null;
		},
		Kp:Math.sqrt(2),
		Wp:function(t) {
			if((t=t || this.P).autowidth) {
				var i=St(t.value || t.label || '', 'webixbutton').width+(t.badge || 0===t.badge?2*St(t.badge, 'webix_badge').width-32:0)+('icon'===t.type?24:0)+('image'===t.type?t.height-Li.inputPadding:0);
				i=Math.max(t.minWidth || 0, i), t.width=Math.min(t.maxWidth || Infinity, i);
			}
		},
		Zp:function() {this.Qp=this.P.inputWidth || (2<this.me-this.P.width?this.P.width:0) || this.me, this.tm=this.P.inputHeight || this.im || 0;},
		resize:function() {return this.Wp(), Hi.api.resize.apply(this, arguments);},
		render:function() {
			if(this.Zp(), this.P.awidth=this.Qp || this.me, this.P.aheight=this.tm || this.ge, this.P.bheight=this.P.aheight+2, this.P.cheight=this.P.aheight-2*Li.inputPadding, this.P.dheight=this.P.cheight-2, qt.render.call(this)) {
				if(this.Jp= !0, this.qp && this.qp(), this.P.align) {
					var t=this.tt.firstChild;
					switch('top'==this.P.labelPosition && t.nextSibling && (t=t.nextSibling), this.P.align) {
					case'right':
						t.style.cssFloat='right';
						break;
					case'center':
						t.style.display='inline-block', t.parentNode.style.textAlign='center';
						break;
					case'middle':
						t.style.marginTop=Math.round((this.ge-this.tm)/2)+'px';
						break;
					case'bottom':
						t.style.marginTop=this.ge-this.tm+'px';
						break;
					case'left':
						t.style.cssFloat='left';
						break;
					default:
						this.P.align;
					}
				}
				this.$render && this.$render(this.data), this.P.disabled && this.disable(), this.oh && (this.oh(this.data), this.oh=0);
			}
		},
		refresh:function() {this.render();},
		on_click:{
			em:function(t) {
				var i=_t(t, 'button_id'), e=this.getOption(i);
				e && !e.disabled && this.callEvent('onBeforeTabClick', [i, t]) && (this.setValue(i), this.focus(), this.callEvent('onAfterTabClick', [i, t]));
			},
			webix_all_segments:function(t, i) {this.on_click.em.call(this, t, i);},
			webix_all_tabs:function(t, i) {this.on_click.em.call(this, t, i);},
			webix_inp_counter_next:function() {this.P.readonly || this.next();},
			webix_inp_counter_prev:function() {this.P.readonly || this.prev();},
			webix_input_icon:function() {this.getInputNode().focus();},
			webix_inp_checkbox_border:function(t) {this.P.disabled || 'DIV'==t.target.tagName || this.P.readonly || this.toggle();},
			webix_inp_checkbox_label:function() {this.P.readonly || this.toggle();},
			webix_inp_radio_border:function(t) {
				var i=_t(t, 'radio_id'), e=this.getOption(i);
				e && !e.disabled && (this.setValue(i), this.focus());
			},
			webix_tab_more_icon:function(t, i, e) {
				var s=this.getPopup();
				s.isVisible()?s.hide():(s.resize(), s.show(e, null, !0));
			},
			webix_tab_close:function(t) {
				var i=_t(t, 'button_id'), e=this.getOption(i);
				return e && !e.disabled && this.callEvent('onBeforeTabClose', [i, t]) && this.removeOption(i), !1;
			}
		},
		sm:function(t) {
			this.name, $(t), this.name;
			for(var i=0; i<t.length; i++) t[i].text, t[i].label, 'string'== typeof t[i]?t[i]={
				id:t[i],
				value:t[i]
			}:(R(t[i].id) && (t[i].id=t[i].value), R(t[i].value) && (t[i].value=t[i].id));
			return t;
		},
		nm:function(t) {
			var i=t?t.placeholder:this.P.placeholder;
			return i?'<span class=\'webix_placeholder\'>'+i+'</span>':'';
		}
	}), bh={
		api:mh,
		view:H.protoUI(mh, Hi.view, Pi, qt, Si, g)
	}, gh={
		name:'label',
		defaults:{template:'<div class=\'webix_el_box\' style=\'width:#awidth#px;height:#aheight#px;line-height:#cheight#px\'>#label#</div>'},
		$skin:function() {bh.api.$skin.call(this), this.defaults.height=Li.inputHeight;},
		focus:function() {return !1;},
		Pp:function() {return this.tt.firstChild;},
		setHTML:function(t) {this.P.label=t, this.refresh();},
		setValue:function(t) {this.P.label=t, bh.api.setValue.apply(this, arguments);},
		$setValue:function(t) {this.tt.firstChild.innerHTML=t;},
		$render:function(t) {'right'===t.align && (this.tt.firstChild.style.textAlign='right');},
		qp:!1,
		Op:function() {},
		Wp:function(t) {
			var i='webix_el_box webixlabel'+(this.queryView('toolbar', 'parent')?' webixtoolbarlabel':'');
			(t=t || this.P).autowidth && (t.width=St(t.label, i).width);
		}
	}, wh=(H.protoUI(gh, bh.view), {});
	for(var xh in Mi.fi) wh[Mi.fi[xh]]=xh;
	var yh={
		9:'tab',
		38:'up',
		40:'down',
		37:'left',
		39:'right'
	}, Mh={
		$init:function(t) {
			var i=this.defaults.pattern || t.pattern, e=this.defaults.format || t.format;
			t.value=R(t.value)?'':t.value, (i || e && !this.format_setter) && (this.attachEvent('onKeyPress', function(t, i) {i.ctrlKey || i.altKey || this.P.readonly || this.hm || (105<t && t<112 && (t-=64), wh[t] && 8!==t && 46!==t?yh[t] || gt(i):(gt(i), this.rm(i, t)));}), this.attachEvent('onAfterRender', this.om), this.getText=function() {return this.getInputNode().value;}, this.$prepareValue=function(t) {return this.um(t, !1);}, this.um=function(t, i) {return !1===i?this.cm(t):this.fm(t);}, e && ('object'===M(e)?this.hm=e:(e=nn.getConfig(e), this.hm={
				parse:function(t) {return nn.parse(t, e);},
				edit:function(t) {return nn.format(t, e);}
			}))), i && (this.P.pattern=this.pattern_setter(i), delete t.pattern);
		},
		pattern_setter:function(t) {
			var i=dn[t] || t;
			return 'string'== typeof i && (i={mask:i}), i.allow=i.allow || /[A-Za-z0-9]/g, this.lm(i), i;
		},
		dm:function() {
			this.config.validate=this.config.validate || S(function() {
				var t=this.getText(), i=t.replace(this.vm, '');
				return (t.toString().match(this._m) || []).join('').length==i.length && t.length==this.P.pattern.mask.length;
			}, this);
		},
		om:function() {
			var t=q.isIE8?'propertychange':'input';
			this.hm || Kt(this.getInputNode(), t, function() {
				var t=(new Date).valueOf();
				this.$view.offsetWidth;
				(!this.mm || 100<t-this.mm) && (this.mm=t, this.$setValue(this.getText()));
			}, {bind:this}), Kt(this.getInputNode(), 'blur', function() {this.bi();}, {bind:this});
		},
		lm:function(t) {
			for(var i=t.mask, e={}, s='', n=0, h=0; h<i.length; h++) '#'===i[h]?(e[h]=n, n++):(e[h]= !1, -1===s.indexOf(i[h]) && (s+='\\'+i[h]));
			this._m=t.allow, this.vm=new RegExp('['+s+']', 'g'), this.bm=e, this.dm();
		},
		rm:function(t, i) {
			var e=this.getInputNode(), s=e.value, n=Dt(e), h='';
			if(8==i || 46==i) n.start==n.end && (8==i?n.start--:n.end++); else {
				h=String.fromCharCode(i);
				var r=t.getModifierState('CapsLock');
				(!t.shiftKey && !r || t.shiftKey && r) && (h=h.toLowerCase());
			}
			s=s.substr(0, n.start)+h+s.substr(n.end), n=this.gm(h, s.length, n.start, i), this.wm=i, this.$setValue(s), $t(e, n);
		},
		gm:function(t, i, e, s) {
			if(t && t.match(this._m) || 8==s || 46==s) e=t?e+1:e, e=this.xm(e, s); else if(i-1==e && 8!==s && 46!==s) {
				var n=this.P.pattern.mask.indexOf('#', e);
				0<n && (e+=n);
			}
			return e;
		},
		xm:function(t, i) {
			var e=t-1*(46!==i);
			return !1===this.bm[e]?(t+=8==i?-1:1, this.xm(t, i)):!1===this.bm[t] && 8!==i?this.xm(t+1, i)-1:t;
		},
		cm:function(t) {return this.hm?this.hm.parse(t):((t=t || 0===t?t:'').toString().match(this._m) || []).join('').replace(this.vm, '');},
		fm:function(t) {
			if(this.hm) return this.hm.edit(this.hm.parse(t));
			var i=this.cm(t), e=this.P.pattern.mask, s=this.P.pattern.mask, n=this.bm, h=!1, r=0, o=0, a=0;
			for(var u in n) if(!1!==n[u]) {
				if(!h) {
					r=1*u;
					var c=i[o=n[u]] || '', f=i[o+1];
					e=(c?e.substr(0, r):'')+c+(c && f?e.substr(r+1):''), f || (h= !0);
				}
				a++;
			}
			var l=this.wm;
			if(l && 8!==l || !l && a-1===o && e.length<s.length) if(i) {
				var d=r+1;
				if('#'!==s.charAt(d) && e.length<s.length) {
					var v=s.indexOf('#', d);
					v<0 && (v=s.length), e+=s.substr(d, v-d);
				}
			} else 46!==l && (e+=s.substr(0, s.indexOf('#')));
			return this.wm=null, e;
		}
	}, Sh={
		name:'text',
		$allowsClear:!0,
		ym:function() {this.$allowsClear && (this.Mm || Kt(this.getInputNode(), 'change', this.bi, {bind:this}), this.P.suggest && oi(this.P.suggest).linkInput(this));},
		bi:function() {
			var t=this.getValue(), i=this.setValue(t, !0);
			this.hm && !1===i && this.$setValue(t);
		},
		$skin:function() {bh.api.$skin.call(this), this.defaults.height=Li.inputHeight, this.defaults.inputPadding=Li.inputPadding, this.E_=Li.inputSpacing, this.P_=Li.labelTopHeight;},
		$init:function(t) {'top'==t.labelPosition && R(t.height) && this.defaults.height && (t.height=this.defaults.height+(t.label?this.P_:0)), this.Mm && this.attachEvent('onBlur', function() {this.Jp && this.Mm();}), this.attachEvent('onAfterRender', this.ym);},
		$renderIcon:function() {
			var t=this.P;
			if(t.icon) {
				var i=t.aheight-2*t.inputPadding, e=(i-18)/2-1, s=this.addSection?'role=\'button\' tabindex=\'0\' aria-label=\''+I.aria['multitext'+(t.mode || '')+'Section']+'\'':'';
				return '<span style=\'height:'+(i-e)+'px;padding-top:'+e+'px;\' class=\'webix_input_icon '+t.icon+'\' '+s+'></span>';
			}
			return '';
		},
		relatedView_setter:function(t) {
			return this.attachEvent('onChange', function() {
				var t=this.getValue(), i=this.P.relatedAction, e=this.P.relatedView, s=oi(e);
				if(!s) {
					var n=this.getTopParentView();
					n && n.$$ && (s=n.$$(e));
				}
				'enable'==i?t?s.enable():s.disable():t?s.show():s.hide();
			}), t;
		},
		validateEvent_setter:function(t) {return 'blur'==t && this.attachEvent('onBlur', this.validate), 'key'==t && this.attachEvent('onTimedKeyPress', this.validate), t;},
		validate:function() {
			var t=this.P.validate;
			!t && this.P.required && (t=ue.isNotEmpty);
			var i=this.getFormView(), e=this.P.name, s=this.getValue(), n={};
			return n[e]=s, !(t && !i.Qh(t, s, n, e));
		},
		bottomLabel_setter:function(t) {return this.P.bottomPadding || (this.P.bottomPadding=18), t;},
		Sm:function() {
			var t=this.P.invalidMessage;
			return 'function'== typeof t && t.call(this), t;
		},
		setBottomText:function(t, i) {
			var e=this.P;
			if(void 0!==t) {
				if(e.bottomLabel==t) return;
				e.bottomLabel=t;
			}
			var s=(e.invalid?e.invalidMessage:'') || e.bottomLabel;
			s || e.bottomPadding || (e.inputHeight=0), s && !e.bottomPadding?(this.km=1, e.bottomPadding=e.bottomPadding || i || 18, this.render(), this.adjust(), this.resize()):!s && this.km?(e.bottomPadding=this.km=0, e.height || this.render(), this.adjust(), this.resize()):this.render();
		},
		$getSize:function() {
			var t=Hi.api.$getSize.apply(this, arguments), i=this.config.bottomPadding;
			return i && (t[2]+=i, t[3]+=i), t;
		},
		$setSize:function(t, i) {
			var e=this.P;
			if(Hi.api.$setSize.call(this, t, i)) {
				if(!t || !i) return;
				'top'==e.labelPosition?(e.inputHeight || (this.im=this.ge-(e.label?this.P_:0)-(this.config.bottomPadding || 0)), e.labelWidth=0):e.bottomPadding && (e.inputHeight=this.ge-this.config.bottomPadding), this.render();
			}
		},
		Cm:function(t) {
			var i=(this.Qp || 0)-(t.label?t.labelWidth:0)-this.E_-(t.iconWidth || 0);
			return i<0?0:i;
		},
		$m:function(t, i) {
			var e='x'+V(), s=i.Cm(t), n=t.inputAlign || 'left', h=this.P.aheight-2*Li.inputPadding-2*Li.borderWidth, r=t.text || t.value || this.nm(t), o='<div class=\'webix_inp_static\' role=\'combobox\' aria-label=\''+Yt.escape(t.label)+'\' tabindex=\'0\''+(t.readonly?' aria-readonly=\'true\'':'')+(t.invalid?'aria-invalid=\'true\'':'')+' onclick=\'\' style=\'line-height:'+h+'px;width: '+s+'px; text-align: '+n+';\' >'+r+'</div>';
			return i.$renderInput(t, o, e);
		},
		Dm:function(t) {
			var i='<'+t+(this.P.placeholder?' placeholder=\''+Yt.escape(this.P.placeholder)+'\' ':' ');
			this.P.readonly && (i+='readonly=\'true\' aria-readonly=\'\''), this.P.required && (i+='aria-required=\'true\''), this.P.invalid && (i+='aria-invalid=\'true\'');
			var e=this.P.attributes;
			if(e) for(var s in e) i+=s+'=\''+e[s]+'\' ';
			return i;
		},
		$renderLabel:function(t, i) {
			var e='';
			if(t.label) {
				var s='top'==this.P.labelPosition, n='text-align:'.concat(t.labelAlign || 'left', '; line-height:').concat(this.Im(s), 'px; ');
				e='<label style=\''+(n+=s?'display:block;':t.labelWidth?'width:'.concat(t.labelWidth, 'px;'):'display:none;')+'\' onclick=\'\' for=\''+i+'\' class=\'webix_inp_'+(s?'top_':'')+'label '+(t.required?'webix_required':'')+'\'>'+(t.label || '')+'</label>';
			}
			return e;
		},
		Im:function(t) {return t?this.P_-this.P.inputPadding:this.P.aheight-2*this.P.inputPadding;},
		$renderInput:function(t, i, e) {
			var s=t.inputAlign || 'left', n='top'==t.labelPosition, h=this.Cm(t);
			e=e || V();
			var r=this.$renderLabel(t, e), o='';
			if(i) o+=i; else {
				var a=Yt.escape(t.text || this.um(t.value));
				o+=this.Dm('input')+'id=\''+e+'\' type=\''+(t.type || this.name)+'\''+(t.editable?' role=\'combobox\'':'')+' value=\''+a+'\' style=\'width: '+h+'px; text-align: '+s+';\'';
				var u=t.attributes;
				if(u) for(var c in u) o+=' '+c+'=\''+u[c]+'\'';
				o+=' />';
			}
			o+=this.$renderIcon?this.$renderIcon(t):'';
			var f='';
			f=n?r+'<div class=\'webix_el_box\' style=\'width:'+t.awidth+'px; height:'+t.aheight+'px\'>'+o+'</div>':'<div class=\'webix_el_box\' style=\'width:'+t.awidth+'px; height:'+t.aheight+'px\'>'+r+o+'</div>';
			var l=t.awidth-h-2*Li.inputPadding, d=(t.invalid?t.invalidMessage:'') || t.bottomLabel;
			return d && (f+='<div class=\'webix_inp_bottom_label\''+(t.invalid?'role=\'alert\' aria-relevant=\'all\'':'')+' style=\'width:'+(h || t.awidth)+'px;margin-left:'+Math.max(l, Li.inputPadding)+'px;\'>'+d+'</div>'), f;
		},
		defaults:{
			template:function(t, i) {return i.$renderInput(t);},
			label:'',
			labelWidth:80
		},
		labelWidth_setter:function(t) {return t?Math.max(t, Li.dataPadding):0;},
		type_setter:function(t) {return t;},
		qp:!1,
		Op:function() {},
		um:function(t) {return t;},
		$setValue:function(t) {this.getInputNode().value=this.um(t);},
		$getValue:function() {return this.um(this.getInputNode().value, !1);},
		setValueHere:function(t, i, e) {
			if(e && e.symbol) {
				var s=e.symbol, n=this.getValue(), h=n.substring(e.pos);
				n=(n=n.substring(0, e.pos)).substring(0, n.lastIndexOf(s)+s.length)+t, this.setValue(n+h), $t(this.getInputNode(), n.length);
			} else this.setValue(t);
		},
		suggest_setter:function(t) {
			if(t) {
				if('string'== typeof t) {
					if(oi(t)) return oi(t).P.id;
					t={
						body:{
							url:t,
							dataFeed:t
						}
					};
				} else t.getItem?t={body:{data:t}}:$(t)?t={body:{data:this.sm(t)}}:t.body || (t.body={});
				H.extend(t, {view:'suggest'});
				var i=si(t);
				return this.Bt.push(i), i.P.id;
			}
			return !1;
		}
	}, kh={
		api:Sh,
		view:H.protoUI(Sh, Mh, bh.view)
	}, Ch=H.proto({
		name:'DataCollection',
		isVisible:function() {return !!(this.data.order.length || this.data.Cr || this.P.dataFeed);},
		$init:function(t) {
			this.data.provideApi(this, !0);
			var i=t && t.id?t.id:V();
			this.P.id=i, (si.views[i]=this).data.attachEvent('onStoreLoad', S(function() {this.callEvent('onBindRequest', []);}, this));
		},
		refresh:function() {this.callEvent('onBindRequest', []);}
	}, ae, Ci, Ii, ps, _e, Ve, g, Ai, ki, Si);
	t('DataCollection', Ch);var $h={
		name:'select',
		defaults:{
			template:function(i, t) {
				var e='x'+V(), s=t.Dm('select')+'id=\''+e+'\' style=\'width:'+t.Cm(i)+'px;\'>', n=oi(i.options);
				if(n && n.data && n.data.each) n.data.each(function(t) {s+='<option'+(t.id==i.value?' selected=\'true\'':'')+' value=\''+t.id+'\'>'+t.value+'</option>';}); else for(var h=t.sm(i.options), r=0; r<h.length; r++) s+='<option'+(h[r].id==i.value?' selected=\'true\'':'')+' value=\''+h[r].id+'\'>'+h[r].value+'</option>';
				return s+='</select>', t.$renderInput(i, s, e);
			}
		},
		options_setter:function(t) {
			if(t) {
				if('string'!= typeof t) return t;
				var i=new Ch({url:t});
				return i.data.attachEvent('onStoreLoad', S(this.refresh, this)), i;
			}
		},
		getInputNode:function() {return this.tt.getElementsByTagName('select')[0];}
	}, Dh=(H.protoUI($h, kh.view), {
		name:'checkbox',
		defaults:{
			checkValue:1,
			uncheckValue:0,
			template:function(t, i) {
				var e='x'+V(), s='';
				t.labelRight && (s='<label class=\'webix_label_right\'>'+t.labelRight+'</label>', t.labelWidth && (t.label=t.label || '&nbsp;'));
				var n=t.checkValue==t.value, h=Math.floor((i.P.aheight-16)/2), r=i.Dm('input')+'style=\'margin-top:'+h+'px;'+(t.customCheckbox?'display:none':'')+'\' id=\''+e+'\' type=\'checkbox\' '+(n?'checked=\'1\'':'')+(t.labelRight?' aria-label=\''+Yt.escape(t.labelRight)+'\'':'')+'/>', o='webix_inp_checkbox_border webix_el_group webix_checkbox_'+(n?'1':'0'), a=t.customCheckbox || '';
				a && (a=(a=(a=a.replace(/(aria-checked=')\w*(?=')/, '$1'+(t.value==t.checkValue?'true':'false'))).replace(/(aria-label=')\w*(?=')/, '$1'+Yt.escape(t.labelRight || t.label))).replace(/(aria-invalid=')\w*(?=')/, '$1'+(t.invalid?'true':'false')));
				var u='<div style=\'line-height:'+i.P.cheight+'px\' class=\''+o+'\'>'+r+a+s+'</div>';
				return i.$renderInput(t, u, e);
			}
		},
		customCheckbox_setter:function(t) {return !0===t && Li.customCheckbox && (t='<a role=\'presentation\' onclick=\'javascript:void(0)\'><button role=\'checkbox\' aria-checked=\'false\' aria-label=\'\' type=\'button\' aria-invalid=\'\' class=\'webix_custom_checkbox\'></button></a>'), t;},
		blur:function() {
			var t=this.getInputNode();
			t && t.blur();
		},
		$prepareValue:function(t) {return t;},
		ym:function() {},
		$setValue:function(t) {
			var i=t==this.P.checkValue, e=this.$view.getElementsByTagName('input')[0], s=e?e.parentNode:null;
			if(s && this.P.customCheckbox) {
				var n=s.getElementsByTagName('BUTTON');
				n[0] && n[0].setAttribute('aria-checked', i?'true':'false');
			}
			s && (s.className=s.className.replace(/(webix_checkbox_)\d/, '$1'+(i?1:0))), e.checked=i;
		},
		toggle:function() {
			var t=this.getValue()!=this.P.checkValue?this.P.checkValue:this.P.uncheckValue;
			this.setValue(t);
		},
		getValue:function() {return this.P.value==this.P.checkValue?this.P.checkValue:this.P.uncheckValue;},
		getInputNode:function() {return this.$view.getElementsByTagName(this.P.customCheckbox?'button':'input')[0];},
		$skin:function() {kh.api.$skin.call(this), this.defaults.customCheckbox= !!Li.customCheckbox;}
	}), Ih={
		api:Dh,
		view:H.protoUI(Dh, kh.view)
	}, Ah={
		name:'radio',
		defaults:{
			template:function(t, i) {
				i.sm(t.options);
				for(var e, s, n, h, r, o, a, u, c, f, l, d=i.au(t.options), v=i.ou(), _=[], p=0; p<d.length; p++) s='x'+V(), e=e || s, p && (d[p].newline || t.vertical) && _.push('<div class=\'webix_line_break\'></div>'), l=(n=d[p].id==t.value) || !t.value && d[p].id===v, h= !!d[p].disabled, r=d[p].value || '', o=t.tooltip?' webix_t_id=\''+d[p].id+'\'':'', (a=t.customRadio || '') && (u=(0===p?t.label+' ':'')+r, a=(a=(a=(a=(a=a.replace(/(aria-label=')\w*(?=')/, '$1'+Yt.escape(u))).replace(/(aria-checked=')\w*(?=')/, '$1'+(n?'true':'false'))).replace(/(tabindex=')\w*(?=')/, '$1'+(!h && l?'0':'-1'))).replace(/(aria-invalid=')\w*(?=')/, '$1'+(t.invalid?'true':'false'))).replace(/(button_id=')\w*(?=')/, '$1'+d[p].id), h && (a=a.replace('role=\'radio\'', 'role=\'radio\' webix_disabled=\'true\''))), c=i.Dm('input')+' name=\''+(t.name || t.id)+'\' type=\'radio\' '+(n?'checked=\'1\'':'')+'tabindex='+(!h && l?'0':'-1')+' value=\''+d[p].id+'\' id=\''+s+'\''+(h?' disabled=\'true\'':'')+' style=\''+(a?'display:none':'')+'\' />', f='<div radio_id=\''+d[p].id+'\' class=\'webix_inp_radio_border webix_radio_'+(n?'1':'0')+'\' role=\'presentation\'>'+c+a+'</div>', r && (r='<label for=\''+s+'\' class=\'webix_label_right\'>'+r+'</label>'), _.push('<div class=\'webix_radio_option'+(h?' webix_disabled':'')+'\' role=\'presentation\''+o+'>'+f+r+'</div>');
				return _='<div class=\'webix_el_group\' role=\'radiogroup\' style=\'margin-left:'+(t.label?t.labelWidth:0)+'px;\'>'+_.join('')+'</div>', i.$renderInput(t, _, e);
			}
		},
		refresh:function() {this.render(), this.pe && this.$getSize(0, 0)[2]!=this.pe[1] && this.resize();},
		$getSize:function(t, i) {
			var e=bh.api.$getSize.call(this, t, i), s=this.au(this.P.options);
			if(s) {
				for(var n=this.P.vertical?0:1, h=0; h<s.length; h++) (this.P.vertical || s[h].newline) && n++;
				e[3]=e[2]=Math.max(e[2], (this.P.optionHeight || 25)*n+2*this.P.inputPadding+('top'==this.P.labelPosition?this.P_:0));
			}
			var r=this.config.bottomPadding;
			return r && (e[2]+=r, e[3]+=r), e;
		},
		nu:function() {return this.tt.getElementsByTagName(this.P.customRadio?'button':'input');},
		$setValue:function(t) {for(var i, e, s, n, h, r=this.tt.getElementsByTagName('input'), o=this.ou(), a=0; a<r.length; a++) i=r[a].parentNode.getAttribute('radio_id'), e=this.getOption(i), r[a].checked=i==t, s=e && !e.disabled && (r[a].checked || !t && e.id==o), r[a].setAttribute('tabindex', s?'0':'-1'), (n=r[a]?r[a].parentNode:null) && (n.className=n.className.replace(/(webix_radio_)\d/, '$1'+(r[a].checked?1:0)), this.P.customRadio && (h=n.getElementsByTagName('BUTTON'))[0] && (h[0].setAttribute('aria-checked', r[a].checked?'true':'false'), h[0].setAttribute('tabindex', s?'0':'-1')));},
		getValue:function() {return this.P.value;},
		focus:function() {return this.gi();},
		blur:function() {this.hu();},
		customRadio_setter:function(t) {return !0===t && Li.customRadio && (t='<a role=\'presentation\' onclick=\'javascript:void(0)\'><button type=\'button\' class=\'webix_custom_radio\' button_id=\'\' role=\'radio\' aria-checked=\'false\' aria-label=\'\' aria-invalid=\'\' tabindex=\'\'></button></a>'), t;},
		$skin:function() {kh.api.$skin.call(this), this.defaults.customRadio= !!Li.customRadio, Li.optionHeight && (this.defaults.optionHeight=Li.optionHeight);}
	}, Th=(H.protoUI(Ah, kh.view, Ie), {
		name:'datepicker',
		Am:!0,
		$init:function(t) {t.multiselect && (this.P.multiselect=t.multiselect), this.$ready.push(this.Tm);},
		defaults:{
			template:function(t, i) {
				'time'==i.P.type && (i.P.icon=i.P.timeIcon);
				var e=t.type;
				t.type='';
				var s=t.editable?i.$renderInput(t):i.$m(t, i);
				return t.type=e, s;
			},
			stringResult:!1,
			timepicker:!1,
			icon:'wxi-calendar',
			icons:!0,
			timeIcon:'wxi-clock',
			separator:', '
		},
		Mm:function() {
			var t=this.getText();
			if(this.P.text!=t && (!R(this.P.text) || t)) {
				var i=this.P.editable?this.getValue():this.getPopup().getValue();
				this.setValue(i || '');
			}
		},
		$skin:function() {kh.api.$skin.call(this), this.defaults.inputPadding=Li.inputPadding, this.defaults.point= !Li.popupNoPoint;},
		getPopup:function() {return oi(this.P.popup);},
		Tm:function() {
			var t=this.P;
			if(t.suggest) t.popup=t.suggest; else if(!t.popup) {
				var i=this.P.timepicker;
				t.popup=t.suggest=this.suggest_setter({
					type:'calendar',
					point:!1!==this.P.point,
					padding:0,
					body:{
						height:240+(i || this.P.icons?30:0),
						width:250,
						multiselect:this.P.multiselect,
						timepicker:i,
						type:this.P.type,
						icons:this.P.icons,
						timeIcon:this.P.timeIcon
					}
				});
			}
			this.oh=function() {};
		},
		$render:function(t) {this.$setValue(t.value);},
		$prepareValue:function(t) {
			if(this.P.multiselect) {
				'string'== typeof t?t=t.split(this.P.separator):t instanceof Date?t=[t]:t || (t=[]);
				for(var i=0; i<t.length; i++) t[i]=this.Fm(t[i]);
				return t;
			}
			return this.Fm(t);
		},
		Fm:function(t) {
			var i=this.P.type, e='time'==i;
			if(isNaN(parseFloat(t)) || (t=''+t), 'string'== typeof t && t) {
				t=('month'!=i && 'year'!=i || !this.Vm?e?I.parseTimeFormatDate:I.parseFormatDate:this.Vm)(t);
			}
			if(t) {
				if(e && $(t)) {
					var s=new Date;
					s.setHours(t[0]), s.setMinutes(t[1]), t=s;
				}
				isNaN(t.getTime()) && (t='');
			}
			return t;
		},
		zm:function(t) {
			var i=this;
			return this.P.multiselect?[].concat(t).map(function(t) {return i.Bm(t);}).join(this.config.separator):this.Bm(t);
		},
		Bm:function(t) {
			var i=this.Hm;
			return i || (i='time'==this.P.type?I.timeFormatStr:this.config.timepicker?I.fullDateFormatStr:I.dateFormatStr), i(t);
		},
		Rm:function() {
			var t=this.getInputNode();
			R(t.value)?t.innerHTML=this.P.text || this.nm():t.value=this.P.text || '';
		},
		$compareValue:function(t, i) {return !t && !i || sn.equal(t, i);},
		$setValue:function(t) {this.P.text=t?this.zm(t):'', this.Rm();},
		format_setter:function(t) {
			return t?'function'== typeof t?this.Hm=t:(this.Hm=sn.dateToStr(t), this.Vm=sn.strToDate(t)):this.Hm=this.Vm=null, t;
		},
		getInputNode:function() {return this.P.editable?this.tt.getElementsByTagName('input')[0]:this.tt.getElementsByTagName('DIV')[1];},
		getValue:function() {
			var i=this;
			if(this.P.multiselect) {
				var t=this.P.value;
				if(!t) return [];
				var e=[].concat(t).map(function(t) {return i.Em(t);});
				return this.P.stringResult?e.join(this.P.separator):e;
			}
			return this.Em(this.P.value);
		},
		Em:function(t) {
			var i=this.P.type, e='time'==i;
			if(this.Jp) {
				if(this.P.editable) {
					var s=this.Vm;
					s || (s=e?I.timeFormatDate:this.config.timepicker?I.fullDateFormatDate:I.dateFormatDate), t=s(this.getInputNode().value);
				}
			} else t=this.$prepareValue(t) || null;
			if(this.P.stringResult) {
				var n=I.parseFormatStr;
				return e && (n=I.parseTimeFormatStr), !this.Hm || 'month'!=i && 'year'!=i || (n=this.Hm), this.P.multiselect?[].concat(t).map(function(t) {return t?n(t):'';}):t?n(t):'';
			}
			return t || null;
		},
		getText:function() {
			var t=this.getInputNode(), i='';
			return t && (i=R(t.value)?t.innerHTML:t.value), i;
		}
	}), Fh={
		api:Th,
		view:H.protoUI(Th, kh.view)
	}, Vh={
		name:'colorpicker',
		$init:function() {this.$ready.push(this.Tm);},
		defaults:{icon:!0},
		Tm:function() {
			var t=this.P;
			t.suggest?t.popup=t.suggest:t.popup || (t.popup=t.suggest=this.suggest_setter({
				type:'colorboard',
				height:200
			})), this.oh=function() {};
		},
		getValue:function() {return this.Jp && this.P.editable?this.getInputNode().value:this.P.value;},
		$prepareValue:function(t) {return (t=t?t.toString(16):'') && '#'!=t.charAt(0) && /^[0-9a-fA-F]+$/.test(t) && (t='#'+t), t;},
		Pm:function() {return this.$view.getElementsByTagName('DIV')[this.P.editable?1:2];},
		zm:function(t) {return t;},
		$compareValue:function(t, i) {return t==i;},
		$setValue:function(t) {
			this.Pm().style.backgroundColor=t, this.P.text=t;
			var i=this.getInputNode();
			i.value==undefined?i.innerHTML=t:i.value=t;
		},
		$renderIcon:function() {return '<div class="webix_input_icon" style="background-color:'+this.config.value+';"> </div>';}
	}, zh=(H.protoUI(Vh, Fh.view), {
		name:'richselect',
		defaults:{
			template:function(t, i) {return i.$m(t, i);},
			popupWidth:200,
			icon:'wxi-menu-down'
		},
		Mm:function() {
			var t=this.getText();
			if(this.P.text!=t && (!R(this.P.text) || t)) {
				var i=this.getPopup(), e=this.getInputNode().value, s=i.getSuggestion(e), n=this.getValue();
				!s || s==n || ''===e && ''!==i.getItemText(s)?''===e?this.setValue(''):this.jm && this.jm():this.setValue(s);
			}
		},
		suggest_setter:function(t) {return this.options_setter(t);},
		options_setter:function(t) {
			t=this.Nm?this.Nm(t):t;
			var i=this.P.popup=this.P.suggest=kh.api.suggest_setter.call(this, t), e=oi(i).getList();
			return e && e.attachEvent('onAfterLoad', S(this.Lm, this)), i;
		},
		getList:function() {
			var t=oi(this.P.suggest);
			return t.getList();
		},
		Lm:function() {
			var t=this.P.value, i=this.P.text;
			R(t) || this.getPopup().isVisible() || i || !this.getInputNode() || this.$setValue(t);
		},
		$skin:function() {kh.api.$skin.call(this), this.defaults.inputPadding=Li.inputPadding;},
		$render:function(t) {this.$setValue(t.value);},
		getInputNode:function() {return this.tt.getElementsByTagName('DIV')[1];},
		getPopup:function() {return oi(this.P.popup);},
		getText:function() {
			var t=this.P.value, i=this.getInputNode();
			return i?'undefined'== typeof i.value?i.firstChild && 'webix_placeholder'===i.firstChild.className?'':i.innerHTML:i.value:t?this.getPopup().getItemText(t):'';
		},
		$prepareValue:function(t) {return t && t.id?t:kh.api.$prepareValue.call(this, t);},
		$setValue:function(t) {
			var i=t, e=this.getPopup();
			if(e && (i=e.getItemText(t)), t && t.id) {
				var s=e.getList(), n=s.exists(t.id);
				n || s.add(t), i=e.getItemText(t.id), s.P.dynamic && !n && s.remove(t.id), this.P.value=this.$prepareValue(t.id);
			}
			var h=this.getInputNode();
			R(h.value)?h.innerHTML=i || this.nm():h.value=i=i.replace(/<[^>]*>/g, ''), this.P.text=i;
		},
		getValue:function() {return this.P.value || '';},
		Om:function(t) {this.focus(), gt(t);}
	}), Bh={
		api:zh,
		view:H.protoUI(zh, kh.view)
	}, Hh={
		name:'combo',
		getInputNode:function() {return this.tt.getElementsByTagName('input')[0];},
		jm:function() {
			var t=this.getValue();
			this.$setValue(R(t)?'':t);
		},
		bi:function() {
			var t=this.getInputNode(), i='', e=this.getPopup();
			t.value && (i=this.P.value, e.getItemText(i)!=this.getText() && (i=e.getSuggestion() || i)), i!=this.P.value?this.setValue(i, !0):this.$setValue(i);
		},
		defaults:{
			template:function(t, i) {
				return i.$renderInput(t).replace(/(<input)\s*(?=\w)/, '$1 role=\'combobox\'');
			},
			icon:'wxi-menu-down'
		},
		on_click:{
			webix_inp_label:function(t) {this.Om(t);},
			webix_inp_top_label:function(t) {this.Om(t);}
		}
	}, Rh=(H.protoUI(Hh, Bh.view), {
		name:'counter',
		defaults:{
			template:function(t, i) {
				var e=t.value, s='x'+V(), n='<div role=\'spinbutton\' aria-label=\''+Yt.escape(t.label)+'\' aria-valuemin=\''+t.min+'\' aria-valuemax=\''+t.max+'\' aria-valuenow=\''+t.value+'\' class=\'webix_el_group\' style=\'width:'+i.Cm(t)+'px\'>';
				return n+='<button type=\'button\' class=\'webix_inp_counter_prev\' tabindex=\'-1\' aria-label=\''+I.aria.decreaseValue+'\'>-</button>', n+=i.Dm('input')+' id=\''+s+'\' type=\'text\' class=\'webix_inp_counter_value\' aria-live=\'assertive\' value=\''+e+'\'></input>', n+='<button type=\'button\' class=\'webix_inp_counter_next\' tabindex=\'-1\' aria-label=\''+I.aria.increaseValue+'\'>+</button></div>', i.$renderInput(t, n, s);
			},
			min:0,
			max:Infinity,
			value:0,
			step:1
		},
		$init:function() {Kt(this.$view, 'keydown', this.hp, {bind:this});},
		hp:function(t) {
			var i=t.which || t.keyCode, e=this.P, s=this.getValue();
			32<i && i<41 && (36===i?s=e.min:35===i?s=e.max===Infinity?1e6:e.max:33===i?this.next():34===i?this.prev():s+=37===i || 40===i?-1:1, 34<i && s>=e.min && s<=e.max && this.setValue(s));
		},
		$setValue:function(t) {this.getInputNode().value=t;},
		$prepareValue:function(t) {
			t=parseFloat(t);
			var i=this.P.min, e=this.P.max;
			return isNaN(t) && (t=isFinite(i)?i:0), Math.min(Math.max(t, i), e);
		},
		getInputNode:function() {return this.tt.getElementsByTagName('input')[0];},
		getValue:function() {return 1*bh.api.getValue.apply(this, arguments);},
		next:function(t) {t=1*(t || this.P.step), this.shift(t);},
		prev:function(t) {t=-1*(t || this.P.step), this.shift(t);},
		shift:function(t) {
			var i=Math.round(1e5*(this.getValue()+t))/1e5;
			this.setValue(i);
		}
	}), Eh=(H.protoUI(Rh, kh.view), {
		name:'icon',
		$skin:function() {bh.api.$skin.call(this), this.defaults.height=Li.inputHeight, this.defaults.width=Li.inputHeight;},
		defaults:{
			template:function(t, i) {
				var e=Math.min(t.awidth, t.aheight), s=Math.round((i.ge-t.aheight)/2), n='<button type=\'button\' style=\'height:'+e+'px;width:'+e+'px;\' class=\'webix_icon_button\'><span class=\'webix_icon '+t.icon+'\'></span></button>';
				return '<div class=\'webix_el_box\' style=\'width:'+t.awidth+'px;height:'+t.aheight+'px;line-height:'+t.aheight+'px;margin-top:'+s+'px\'>'+n+(t.badge || 0===t.badge?'<span class=\'webix_badge\'>'+t.badge+'</span>':'')+'</div>';
			}
		},
		qp:!1,
		Op:function() {},
		$setValue:function() {}
	}), Ph=(H.protoUI(Eh, bh.view), {
		name:'search',
		on_click:{webix_input_icon:function(t) {this.getInputNode().focus(), this.callEvent('onSearchIconClick', [t]);}},
		$skin:function() {kh.api.$skin.call(this), this.defaults.inputPadding=Li.inputPadding;},
		defaults:{
			type:'text',
			icon:'wxi-search'
		}
	}), jh=(H.protoUI(Ph, kh.view), {
		name:'segmented',
		$allowsClear:!1,
		$init:function() {this.attachEvent('onChange', function(t) {this.P.multiview && this.Wm(t);}), this.attachEvent('onAfterRender', a(function() {this.P.multiview && this.P.value && this.Wm(this.P.value);}));},
		Wm:function(t) {
			var i=this.getTopParentView(), e=null;
			i && i.$$ && (e=i.$$(t)), e || (e=oi(t)), e && e.show && e.show();
		},
		defaults:{
			template:function(t, i) {
				i.sm(t.options);
				var e, s, n=i.au(t.options), h=i.Cm(t), r='contrast'==Oi?0:n.length-1, o=t.optionWidth || Math.floor((h-r)/n.length), a='<div style=\'width:'+h+'px\' class=\'webix_all_segments\' role=\'tablist\' aria-label=\''+Yt.escape(t.label)+'\'>';
				t.value || (t.value=i.ou(!0));
				for(var u=0; u<n.length; u++) s= !!n[u].disabled, e=t.tooltip?' webix_t_id=\''+n[u].id+'\'':'', a+='<button type=\'button\' style=\'width:'+(n[u].width || o)+'px\' role=\'tab\' aria-selected=\''+(t.value==n[u].id?'true':'false')+'\' tabindex=\''+(s || t.value!=n[u].id?'-1':'0')+'\' class=\'webix_segment_'+(u==n.length-1?'N':0<u?1:0)+(t.value==n[u].id?' webix_selected':'')+(s?' webix_disabled':'')+'\' '+(s?'webix_disabled=\'true\' ':'')+'button_id=\''+n[u].id+'\''+e+'>'+n[u].value+'</button>';
				return i.$renderInput(t, a+'</div>', V());
			}
		},
		nu:function() {return this.$view.getElementsByTagName('BUTTON');},
		focus:function() {return this.gi();},
		blur:function() {this.hu();},
		$setValue:function(t) {
			var i=this.config.tabbarPopup;
			if(i && oi(i) && oi(i).getBody().exists(t)) return this.refresh();
			for(var e, s, n=this.nu(), h=0; h<n.length; h++) e=n[h].getAttribute('button_id'), s=this.getOption(e), n[h].setAttribute('aria-selected', t==e?'true':'false'), n[h].setAttribute('tabindex', s && !s.disabled && t==e?'0':'-1'), t==e?yt(n[h], 'webix_selected'):Mt(n[h], 'webix_selected');
		},
		$getValue:function() {return this.P.value || '';},
		getValue:function() {return this.P.value;},
		getInputNode:function() {return null;},
		qp:!1
	}), Nh={
		api:jh,
		view:H.protoUI(jh, kh.view, Ie)
	}, Lh={
		name:'textarea',
		defaults:{
			template:function(t, i) {
				var e=t.name || t.id, s='x'+V(), n=i.Dm('textarea')+'style=\'width:'+i.Cm(t)+'px;\'';
				return n+=' id=\''+s+'\' name=\''+e+'\' class=\'webix_inp_textarea\'>'+i.um(t.value)+'</textarea>', i.$renderInput(t, n, s);
			},
			minHeight:60
		},
		$skin:function() {kh.api.$skin.call(this), this.defaults.height=0;},
		Vi:!0,
		Im:function(t) {return t?this.P_-this.P.inputPadding:'';},
		getInputNode:function() {return this.tt.getElementsByTagName('textarea')[0];}
	}, Oh=(H.protoUI(Lh, kh.view), {
		name:'toggle',
		$allowsClear:!0,
		$init:function() {this.attachEvent('onItemClick', function() {this.toggle();});},
		$renderInput:function(t) {return '<button type=\'button\' '+(t.popup?'aria-haspopup=\'true\'':'')+' class=\'webix_button\'>'+t.label+'</button>';},
		$setValue:function(t) {
			var i=this.getInputNode(), e=this.P, s=t && '0'!=t, n=(s?e.onLabel:e.offLabel) || e.label, h=i.children;
			if(this.bd[e.type]) {
				var r=h[0];
				'SPAN'==r.nodeName && e.onIcon && e.offIcon && e.onIcon!=e.offIcon && (r.className=r.className.replace(s?e.offIcon:e.onIcon, s?e.onIcon:e.offIcon)), 'imageTop'==e.type || 'iconTop'==e.type?h[1].innerHTML=n:(i.innerHTML=n, i.insertBefore(r, i.firstChild));
			} else i.innerHTML=n;
			i.setAttribute('aria-pressed', s?'true':'false'), (s?yt:Mt)(i.parentNode, 'webix_pressed');
		},
		toggle:function() {this.setValue(!this.getValue());},
		getValue:function() {
			var t=this.P.value;
			return t && '0'!=t?1:0;
		},
		defaults:{
			template:function(t, i) {
				var e=t.value && '0'!=t.value, s=e?' webix_pressed':'';
				t.label=(e?t.onLabel:t.offLabel) || t.label, t.icon=(e?t.onIcon:t.offIcon) || t.icon;
				var n='<div class=\'webix_el_box'+s+'\' style=\'width:'+t.awidth+'px; height:'+t.aheight+'px\'>'+i.$renderInput(t, i)+'</div>';
				return n=n.replace(/(button)\s*(?=\w)/, '$1 aria-pressed=\''+(e?'true':'false')+'\' '), (t.badge || 0===t.badge) && (n=n.replace(/<\/div>$/, '<span class=\'webix_badge\'>'+t.badge+'</span></div>')), n;
			}
		},
		qp:!1
	}), Wh=(H.protoUI(Oh, bh.view), {
		name:'multitext',
		$cssName:'text',
		defaults:{
			icon:'wxi-plus-circle',
			iconWidth:25,
			separator:', '
		},
		getValueHere:function() {return kh.api.getValue.call(this);},
		setValueHere:function(t) {return kh.api.$setValue.call(this, t);},
		getValue:function() {
			if('extra'==this.config.mode) return this.getValueHere();
			if(this.Um) return this.Um;
			for(var t=[this.getValueHere(this)], i=0; i<this.Ym.length; i++) {
				var e=oi(this.Ym[i]).getValueHere();
				e && t.push(e);
			}
			return t.join(this.config.separator);
		},
		$setValue:function(t) {
			if(t=t || '', 'extra'==this.config.mode) return this.setValueHere(t);
			var i=(this.Um=t).split(this.config.separator);
			if(i.length!=this.Ym.length+1) {
				this.removeSection(), this.setValueHere.call(this, i[0]);
				for(var e=1; e<i.length; e++) this.addSection(i[e]);
				this.Um='';
			} else {
				this.setValueHere(i[0]);
				for(var s=0; s<this.Ym.length; s++) oi(this.Ym[s]).setValueHere(i[s+1]);
				this.Um='';
			}
		},
		qm:function() {
			var t=this.config.master?oi(this.config.master):this, i=t.getValue(), e=t.P.value;
			i!==e && (t.P.value=i, t.callEvent('onChange', [i, e]));
		},
		addSection:function(t) {
			var i=this.config, e={
				labelWidth:i.labelWidth,
				inputWidth:i.inputWidth,
				width:i.width,
				label:i.label?'&nbsp;':'',
				view:this.name,
				mode:'extra',
				value:t || '',
				icon:'wxi-minus-circle',
				tooltip:i.tooltip,
				suggest:i.suggest || null,
				master:i.id
			};
			H.extend(e, i.subConfig || {}, !0);
			var s=this.getParentView().addView(e);
			return oi(s).attachEvent('onChange', this.qm), this.Ym.push(s), this.callEvent('onSectionAdd', [s, this.Ym.length]), s;
		},
		removeSection:function(t) {
			for(var i=this.config.master?oi(this.config.master):this, e=i.Ym.length-1; 0<=e; e--) {
				var s=i.Ym[e];
				t && s!=t || (i.Ym.removeAt(e), this.getParentView().removeView(s), i.callEvent('onSectionRemove', [s, e+1]));
			}
		},
		on_click:{
			webix_input_icon:function() {
				if('extra'==this.config.mode) {
					this.removeSection(this.config.id);
					var t=this.getParentView().getChildViews();t[t.length-1].focus(), this.qm();
				} else oi(this.addSection()).focus();
				return !1;
			}
		},
		$init:function() {this.Ym=b([]), this.attachEvent('onKeyPress', this.Se);},
		$render:function(t) {this.$setValue(t.value);}
	}), Uh=(H.protoUI(Wh, kh.view), {
		name:'proto',
		$init:function() {this.data.provideApi(this, !0), this.tt=this.tt || this.Oi, this.data.attachEvent('onStoreUpdated', S(function() {this.render.apply(this, arguments);}, this));},
		$setSize:function() {Hi.api.$setSize.apply(this, arguments) && this.render();},
		Ko:'webix_item',
		on_mouse_move:{},
		type:{}
	}), Yh={
		api:Uh,
		view:H.protoUI(Uh, Re, oe, Pi, ps, Pe, _e, Hi.view, g, Si)
	}, qh={
		name:'list',
		Gm:'webix_list',
		rh:'webix_list_item',
		$init:function(t) {yt(this.Vt, this.Gm+('x'==(t.layout || this.defaults.layout)?'-x':'')), this.data.provideApi(this, !0), this.Xm=S(this.Xm, this), this.data.attachEvent('onStoreUpdated', this.Xm), this.data.attachEvent('onSyncApply', this.Xm), this.Vt.setAttribute('role', 'listbox');},
		dynamic_setter:function(t) {return t && H.extend(this, gs, !0), t;},
		$dragHTML:function(t, i, e) {
			var s;
			return 'y'==this.P.layout && 'auto'==this.type.width?(this.type.width=this.me, s=this.Q(t), this.type.width='auto'):s=this.Q(t), $(e.source) && 1<e.source.length && (s=this.Po(s, e.source.length)), s;
		},
		defaults:{
			select:!1,
			scroll:!0,
			layout:'y',
			navigation:!0,
			datafetch:50
		},
		Ko:'webix_l_id',
		on_click:{webix_list_item:function(t, i) {this.P.select && (this.Jm= !0, 'multiselect'==this.P.select || this.P.multiselect?this.select(i, !1, t.ctrlKey || t.metaKey || 'touch'==this.P.multiselect, t.shiftKey):this.select(i), this.Jm= !1);}},
		on_dblclick:{},
		getVisibleCount:function() {return Math.floor(this.ge/this.Km());},
		Xm:function() {
			var t=this.P;
			if(t.autoheight || t.autowidth) return this.resize();
			'y'==t.layout?t.yCount && this.Zm(t.yCount):t.xCount && this.Qm(t.xCount);
		},
		Zm:function(t) {
			var i=this.data.$pagesize || this.count();
			this.xc(t && t<i, 'y'), this.P.autoheight && i<(t || Infinity) && (t=i);
			var e=this.Km()*t+(this.type.margin || 0);
			return this.getUnits && (e+=this.getUnits().length*this.type.headerHeight), Math.max(e, this.P.minHeight || 0);
		},
		Km:function() {return this.type.height+(this.type.margin || 0);},
		Qm:function(t) {
			var i=this.data.$pagesize || this.count();
			return this.xc(t && t<i, 'x'), this.P.autowidth && i<(t || Infinity) && (t=i), this.type.width*t;
		},
		$getSize:function(t, i) {return 'y'==this.P.layout?('auto'!=this.type.width && (this.P.width=this.type.width+(this.be?q.scrollSize:0)), (this.P.yCount || this.P.autoheight) && (this.P.height=this.Zm(this.P.yCount) || 1)):('auto'!=this.type.height && (this.P.height=this.Km()+(this.we?q.scrollSize:0)), (this.P.xCount || this.P.autowidth) && (this.P.width=this.Qm(this.P.xCount) || 1)), Hi.api.$getSize.call(this, t, i);},
		$setSize:function() {Hi.api.$setSize.apply(this, arguments);},
		type:{
			css:'',
			widthSize:function(t, i) {return i.width+(-1<i.width?'px':'');},
			heightSize:function(t, i) {return i.height+(-1<i.height?'px':'');},
			classname:function(t, i, e) {
				var s='webix_list_item';
				return i.css && (s+=' '+i.css), t.disabled && (s+=' webix_disabled'), t.$css && ('object'==M(t.$css) && (t.$css=at(t.$css)), s+=' '+t.$css), e && e.$css && (s+=' '+e.$css), s;
			},
			aria:function(t, i, e) {return 'role="option"'+(e && e.webix_selected?' aria-selected="true" tabindex="0"':' tabindex="-1"')+(t.$count && t.$template?'aria-expanded="true"':'')+(t.disabled?' aria-disabled="true" webix_disabled="true"':'');},
			template:function(t) {return (t.icon?'<span class=\'webix_list_icon webix_icon '+t.icon+'\'></span>':'')+t.value+(t.badge || 0===t.badge?'<div class=\'webix_badge\'>'+t.badge+'</div>':'');},
			width:'auto',
			templateStart:Yt('<div webix_l_id="#id#" class="{common.classname()}" style="width:{common.widthSize()}; height:{common.heightSize()}; overflow:hidden;" {common.aria()}>'),
			templateEnd:Yt('</div>')
		},
		$skin:function() {this.type.height=Li.listItemHeight;},
		disableItem:function(t) {this.tb(t, !0);},
		enableItem:function(t) {this.tb(t, !1);},
		tb:function(t, i) {
			var e=this.getItem(t);
			e && (e.disabled=i, this.refresh(t));
		},
		isItemEnabled:function(t) {
			var i=this.getItem(t);
			return i && !i.disabled;
		},
		yu:function(t, i, e) {return this.isItemEnabled(t)?t:(t=this.getNextId(t, e) || null) && t!=i?this.yu(t, i, e):i;}
	}, Gh={
		api:qh,
		view:H.protoUI(qh, he, Fe, ae, me, ze, Ne, je, Yh.view, ne)
	}, Xh={
		name:'multiselect',
		$cssName:'richselect',
		defaults:{
			separator:',',
			stringResult:!0
		},
		Nm:function(t) {
			var i=!$(t) && 'object'==M(t) && !t.name, e={
				view:'checksuggest',
				separator:this.config.separator,
				buttonText:this.config.buttonText,
				button:this.config.button
			};
			this.P.optionWidth?e.width=this.P.optionWidth:e.fitMaster= !0, i && H.extend(e, t, !0);
			var s=si(e), n=s.getList();
			return 'string'== typeof t?n.load(t):i || n.parse(t), s.attachEvent('onShow', function() {s.setValue(oi(s.P.master).config.value);}), s;
		},
		$compareValue:function(t, i) {return t.toString()==i.toString();},
		$prepareValue:function(t) {return 'string'== typeof (t=t || [])?t.split(this.P.separator):$(t)?t:[bh.api.$prepareValue.call(this, t)];},
		$setValue:function(t) {
			if(this.Jp) {
				var i=this.getPopup(), e='';
				i && 'object'==M(e=i.setValue(t)) && (e=e.join(this.config.separator+' ')), this.P.text=e, this.getInputNode().innerHTML=e || this.nm();
			}
		},
		getValue:function() {
			var t=this.P.value || [];
			return this.P.stringResult?t.join(this.P.separator):t;
		}
	};
	Me.multiselect=H.extend({
		popupType:'multiselect',
		popupInit:function(t) {t._a=function() {}, t.linkInput(document.body);}
	}, Me.richselect), ti(Gh.view, {
		name:'multilist',
		templateStart:Yt('<div webix_l_id="#!id#" class="{common.classname()}" style="width:{common.widthSize()}; height:{common.heightSize()}; overflow:hidden;" {common.aria()}>')
	}), ti(Gh.view, {
		name:'checklist',
		templateStart:Yt('<div webix_l_id="#!id#" {common.aria()} class="{common.classname()}" style="width:{common.widthSize()}; height:{common.heightSize()}; overflow:hidden; white-space:nowrap;">{common.checkbox()}'),
		checkbox:function(t) {
			var i=t.$checked?'wxi-checkbox-marked':'wxi-checkbox-blank';
			return '<span role=\'checkbox\' tabindex=\'-1\' aria-checked=\''+(t.$checked?'true':'false')+'\' class=\'webix_icon '+i+'\'></span>';
		},
		aria:function(t) {return 'role=\'option\' tabindex=\'-1\' '+(t.$checked?'aria-selected=\'true\'':'');},
		template:Yt('#value#')
	});
	H.protoUI(Xh, Bh.view);
	var Jh={
		name:'multicombo',
		$cssName:'text',
		defaults:{
			keepText:!1,
			separator:',',
			stringResult:!0,
			icon:!1,
			iconWidth:0,
			tagMode:!0,
			tagTemplate:function(t) {return t.length?t.length+' item(s)':'';},
			template:function(t, i) {return i.ib(t, i);}
		},
		$init:function() {
			var t=this;
			this.$view.className+=' webix_multicombo', this.attachEvent('onBeforeRender', function() {return this.im || (this.im=Li.inputHeight), !0;}), this.attachEvent('onAfterRender', function() {this.pe=null;}), Kt(this.$view, 'scroll', function() {t.$view.scrollTop=0;});
		},
		on_click:{
			webix_multicombo_delete:function(t, i, e) {
				var s;
				return !this.P.readonly && e && (s=e.parentNode.getAttribute('optvalue')) && this.eb(s), !1;
			},
			webix_inp_label:function(t) {this.Om(t);},
			webix_inp_top_label:function(t) {this.Om(t);}
		},
		Mm:function() {
			var t=this.getInputNode(), i=t.value;
			i && this.P.newValues && 100<new Date-(this.getPopup().sb || 0) && (i=i.trim(), this.nb(i)), this.hb=t.value=this.P.keepText?i:'', this.$setValue();
		},
		eb:function(t) {
			var i=this.P.value || [], e=oi(this.config.suggest);
			(i=b(_(i))).remove(t), this.setValue(i), e && e.P.selectAll && e.getBody().hi[0].setValue(0);
		},
		rb:function(t) {
			var i=oi(this.config.suggest);
			if(i.getList().getItem(t)) {
				var e=i.getValue();
				e && 'string'== typeof e && (e=e.split(i.config.separator)), (e=b(e || [])).find(t)<0 && (e.push(t), i.setValue(e), this.setValue(i.getValue()));
			}
		},
		nb:function(t) {
			var i, e=oi(this.config.suggest), s=e.getList();
			if(t=Yt.escape(t.trim())) {
				for(var n in s.data.pull) e.getItemText(n)==t && (i=n);
				i || (i=s.add({value:t})), this.rb(i);
			}
		},
		Nm:function(t) {
			var i=!$(t) && 'object'==M(t) && !t.name, e={
				view:'checksuggest',
				separator:this.config.separator,
				buttonText:this.config.buttonText,
				button:this.config.button
			}, s=this;
			i && H.extend(e, t, !0), !e.width && this.P.optionWidth && H.extend(e, {
				width:this.P.optionWidth,
				fitMaster:!1
			}, !0), e.width=e.fitMaster || R(e.fitMaster)?0:e.width;
			var n=si(e);
			e.width || (n.$customWidth=function() {this.config.width=s.Cm(s.P);}), n.attachEvent('onBeforeShow', function(t, i, e) {if(this.P.master && (this.setValue(oi(this.P.master).config.value), oi(this.P.master).getInputNode().value || this.isVisible()?(this.getList().refresh(), this.ob= !0):this.getList().filter(), t.tagName && 'input'==t.tagName.toLowerCase())) return th.api.show.apply(this, [t.parentNode, i, e]), !1;});var h=n.getList();
			return 'string'== typeof t?h.load(t):i || h.parse(t), n.ab=function() {
				if(!this.ub) return !0;
				this.ub= !1, this.show(s.cb());
			}, n;
		},
		ib:function(t, i) {
			var e, s, n, h, r, o, a, u, c, f, l, d, v='', _='top'==this.P.labelPosition;
			return e='x'+V(), d=i.Cm(t), s=t.inputAlign || 'left', r=this.im-2*Li.inputPadding-2, h=this.hb || '', u='<ul class=\'webix_multicombo_listbox\' style=\'line-height:'+r+'px\'></ul>', n='width: '+Math.min(d, i.fb || 7)+'px;height:'+r+'px;max-width:'+(d-20)+'px', l=t.readonly?' readonly ':'', o='<div class=\'webix_inp_static\' onclick=\'\' style=\'line-height:'+r+'px;width: '+d+'px;  text-align: '+s+';height:auto\' >'+u+('<input id=\''+e+'\' role=\'combobox\' aria-multiline=\'true\' aria-label=\''+Yt.escape(t.label)+'\' tabindex=\'0\' type=\'text\' class=\'webix_multicombo_input\' '+l+' style=\''+n+'\' value=\''+h+'\'/>')+'</div>', a=i.$renderLabel(t, e), f=this.P.awidth-d-2*Li.inputPadding, (c=(t.invalid?t.invalidMessage:'') || t.bottomLabel) && (v='<div class=\'webix_inp_bottom_label\' style=\'width:'+d+'px;margin-left:'+Math.max(f, Li.inputPadding)+'px;\'>'+c+'</div>'), _?a+'<div class=\'webix_el_box\' style=\'width:'+this.P.awidth+'px; height:auto;\'>'+o+v+'</div>':'<div class=\'webix_el_box\' style=\'width:'+this.P.awidth+'px; height:auto; min-height:'+this.P.aheight+'px;\'>'+a+o+v+'</div>';
		},
		lb:function() {return this.Pp().getElementsByTagName('UL')[0];},
		qp:function() {
			var t=this.getPopup();
			if(t) {
				var i=t?t.setValue(this.P.value):null;
				t.db && (this.P.value=t.db(this.P.value));
				var e='', s=this.lb(), n=i && i.length;
				if(n) {
					var h=this.im-2*Li.inputPadding-8, r=this.P.value || [];
					if(this.P.tagMode) for(var o=0; o<i.length; o++) e+=this.$renderTag(i[o], h, r[o]); else e+='<li class=\'webix_multicombo_tag\' style=\'line-height:'+h+'px;\'><span>'+this.P.tagTemplate(r)+'</span></li>';
				}
				s.innerHTML=e;
				var a=this.getInputNode();
				this.P.placeholder && (n?(a.placeholder='', !a.value && 20<a.offsetWidth && (a.style.width='20px')):a.value || (a.placeholder=this.P.placeholder, a.style.width=this.Cm(this.P)+'px')), !this.P.tagMode && s.firstChild && (a.style.width=this.vb()+'px');
			}
			this._b();
		},
		$renderTag:function(t, i, e) {
			var s='<span>'+t+'</span><span class=\'webix_multicombo_delete\' role=\'button\' aria-label=\''+I.aria.removeItem+'\'>x</span>';
			return '<li class=\'webix_multicombo_value\' style=\'line-height:'+i+'px;\' optvalue=\''+Yt.escape(e)+'\'>'+s+'</li>';
		},
		pb:function(t) {
			if(t=t || this.getInputNode()) {
				var i=t.value.length;
				t.selectionStart=i, t.selectionEnd=i, t.focus();
			}
		},
		_b:function(i) {
			var t='top'==this.P.labelPosition, e=this.cb(), s=Math.max(e.offsetHeight+2*Li.inputPadding, this.im);
			if(t && (s+=this.P_), (s+=this.P.bottomPadding || 0)!=this.$getSize(0, 0)[2]) {
				var n=e.offsetHeight+(t?this.P_:0)+2*Li.inputPadding, h=this.getTopParentView();
				clearTimeout(h.Jd), h.Jd=k(function() {
					this.config.height!=n && (this.config.height=n, this.resize()), Mi.getFocus()===this && (i?this.getInputNode().select():this.pb(this.getInputNode()));
					var t=this.getPopup();
					t.isVisible() && t.show(this.cb());
				}, this);
			}
			i && this.getInputNode().select();
		},
		cb:function() {
			for(var t=this.Pp(), i=t.childNodes, e=0; e<i.length; e++) if(i[e].className && -1!=i[e].className.indexOf('webix_inp_static')) return i[e];
			return t;
		},
		getInputNode:function() {return this.tt.getElementsByTagName('INPUT')[0];},
		$compareValue:function(t, i) {return t.toString()==i.toString();},
		$prepareValue:function(t) {return 'string'== typeof (t=t || [])?t.split(this.P.separator):$(t)?t:[bh.api.$prepareValue.call(this, t)];},
		$setValue:function() {this.Jp && this.qp();},
		getValue:function(t) {
			if('object'==M(t) && t.options) return this.mb();
			var i=this.P.value || [];
			return this.P.stringResult?i.join(this.P.separator):i;
		},
		getText:function() {
			var t=this.P.value || [];
			if(!t.length) return '';
			for(var i=[], e=0; e<t.length; e++) i.push(this.getPopup().getItemText(t[e]));
			return i.join(this.P.separator);
		},
		mb:function() {
			var t, i, e, s=[], n=this.P.value || [];
			if(!n.length) return n;
			for(e=this.getPopup(), t=0; t<n.length; t++) (i=e.getList().getItem(n[t]) || (e.bb?e.bb[n[t]]:null)) && s.push(i);
			return s;
		},
		$setSize:function(t, i) {
			var e=this.P;
			if(Hi.api.$setSize.call(this, t, i)) {
				if(!t || !i) return;
				'top'==e.labelPosition && (e.labelWidth=0), this.render();
			}
		},
		$render:function() {},
		gb:function(t) {
			var i=ft('span', {
				type:'text',
				style:'visibility:visible; white-space:pre-wrap; position:absolute; top:-9999px;'
			});
			i.className='webix_el_text', i.innerHTML='<span class="webix_multicombo_input" style="margin:0;">'.concat(t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'), '</span>'), document.body.appendChild(i);
			var e=i.offsetWidth+1;
			return document.body.removeChild(i), e;
		},
		vb:function() {
			var t=this.lb(), i=t.offsetWidth-(t.firstChild.offsetWidth+1);
			return i<=25?t.offsetWidth-12:i-15;
		},
		wb:function(t) {
			for(var i=t.split(this.P.separator), e=this.getPopup(), s='', n=0; n<i.length; n++) {
				var h=i[n].trim();
				if(h) if(s=h, this.P.newValues) this.nb(h); else {
					var r=e.getItemId(h);
					r && this.rb(r);
				}
			}
			return s;
		},
		ym:function() {
			Kt(this.Pp(), 'click', function(t) {
				var i=this.getInputNode();
				i.contains(t.target)?i.focus():this.pb(i);
			}, {bind:this}), Kt(this.getInputNode(), 'focus', function() {-1==this.Pp().className.indexOf('webix_focused') && (this.Pp().className+=' webix_focused');}, {bind:this}), Kt(this.getInputNode(), 'blur', function() {this.Pp().className=this.Pp().className.replace(' webix_focused', '');}, {bind:this}), Kt(this.getInputNode(), 'input', function() {
				var t, i, e=this.getInputNode(), s=!1;
				if(this.P.tagMode && -1<e.value.indexOf(this.P.separator)) {
					var n=this.wb(e.value);
					this.hb=e.value=this.P.keepText?n:'', s=this.P.keepText;
				}
				var h=this.P.value || [];
				!this.P.placeholder || e.value || h.length?(i=t=this.gb(e.value), !this.P.tagMode && this.lb().firstChild && (i=this.vb())):i=this.Cm(this.P), e.style.width=i+'px', (s || t!=this.fb) && (this.fb=t || i, this.hb=e.value, this._b(s));
			}, {bind:this}), Kt(this.getInputNode(), 'keydown', function(t) {
				var i=this.getInputNode(), e=this.getPopup();
				t=t || event;
				var s=this.lb().lastChild;
				if(8==t.keyCode && s && (!i.value && 100<(new Date).valueOf()-(this.xb || 0)?this.eb(s.getAttribute('optvalue')):this.xb=(new Date).valueOf()), 13==t.keyCode || 9==t.keyCode) {
					var n=i.value;
					e.getList().getSelectedId() || (n=this.wb(i.value)), this.hb=i.value=this.P.keepText?n:'';
					var h=this.P.value || [];
					13!=t.keyCode || i.value || h.length || (e.getList().filter(), this.P.placeholder && (i.style.width=this.Cm(this.P)+'px')), this._b(13==t.keyCode);
				}
			}, {bind:this}), oi(this.P.suggest).linkInput(this);
		}
	}, Kh=(H.protoUI(Jh, Bh.view), {
		name:'slider',
		$touchCapture:!0,
		defaults:{
			min:0,
			max:100,
			value:50,
			step:1,
			title:!1,
			moveTitle:!0,
			template:function(t, i) {
				var e=i.yb='x'+V(), s='', n='<div class=\'webix_slider_title'+(t.moveTitle?' webix_slider_move':'')+'\''+(!t.moveTitle && t.vertical?' style=\'line-height:'+(t.aheight-2*t.inputPadding)+'px;\'':'')+'>&nbsp;</div>', h='<div class=\'webix_slider_left\'>&nbsp;</div>', r='<div class=\'webix_slider_right\'></div>', o='<div class=\'webix_slider_handle\' webix_disable_drag=\'true\' role=\'slider\' aria-label=\''+t.label+(t.title?' '+t.title(t):'')+'\' aria-valuemax=\''+t.max+'\' aria-valuemin=\''+t.min+'\' aria-valuenow=\''+t.value+'\' tabindex=\'0\' id=\''+e+'\'>&nbsp;</div>';
				return s=t.vertical?'<div class=\'webix_slider_box\'>'+r+h+o+'</div>'+n:n+'<div class=\'webix_slider_box\'>'+h+r+o+'</div>', i.$renderInput(t, s, e);
			}
		},
		type_setter:function(t) {this.Vt.className+=' webix_slider_'+t;},
		title_setter:function(t) {return 'string'== typeof t?Yt(t):t;},
		Mb:function() {return this.$view.querySelector('.webix_slider_handle');},
		qp:function() {
			var t=this.Mb(), i=this.P;
			if(t) {
				var e=i.vertical?this.ge:this.Cm(i), s=i.value%i.step?Math.round(i.value/i.step)*i.step:i.value, n=i.max-i.min;
				s=Math.max(Math.min(s, i.max), i.min), s=i.vertical?n-(s-i.min):s-i.min;
				var h=Math.ceil((e-2*this.Sb)*s/n), r=e-2*this.Sb-h, o=i.vertical?'top':'left', a=i.vertical?'height':'width';
				t.style[o]=this.Sb+h-this.kb/2+'px', t.parentNode.style[a]=e+'px', r=Math.min(Math.max(r, 2*this.Cb), e-2*this.Sb-2*this.Cb), h=Math.min(Math.max(h, 2*this.Cb), e-2*this.Sb-2*this.Cb);
				var u=t.previousSibling;
				u.style[a]=r+'px', u.previousSibling.style[a]=h+'px', this.$b(t, h, r, o);
			}
		},
		$b:function(t, i, e, s) {
			var n=this.P;
			if(this.P.title) {
				var h=t.parentNode[n.vertical?'nextSibling':'previousSibling'];
				if(h.innerHTML=this.P.title(this.P, this), this.P.moveTitle) {
					var r=0;
					if(n.vertical) r=i+2*this.Cb-this.kb/2; else {
						var o=h.clientWidth/2, a=i<o?o-i-2*this.Cb:0, u=e<o?o-e-2*this.Cb-this.kb/2:0;
						r=this.Sb+i-o+a-u;
					}
					h.style[s]=r+'px';
				}
			}
		},
		Db:function() {this.Mb().setAttribute('aria-valuenow', this.P.value);},
		refresh:function() {
			var t=this.Mb();
			t && (this.Db(), this.P.title && t.setAttribute('aria-label', this.P.label+' '+this.P.title(this.P, this)), this.qp());
		},
		$setValue:function() {this.refresh();},
		$getValue:function() {return this.P.value;},
		$prepareValue:function(t) {return t=parseFloat(t), isNaN(t)?0:t;},
		$init:function(t) {q.touch?this.attachEvent('onTouchStart', S(this.Ib, this)):Kt(this.Vt, 'mousedown', S(this.Ib, this)), Kt(this.$view, 'keydown', S(this.Ab, this)), t.vertical && (t.height=t.height || Li.vSliderHeight, this.Vt.className+=' webix_slider_vertical', this.Sb=Li.vSliderPadding);},
		$skin:function() {kh.api.$skin.call(this), this.kb=Li.sliderHandleWidth, this.Sb=Li.sliderPadding, this.Cb=Li.sliderBorder;},
		Ab:function(t) {
			var i=t.keyCode, e=this.P, s=e.value;
			if(32<i && i<41) {
				gt(t);
				var n=t.target, h=/webix_slider_handle_(\d)/.exec(n.className);
				if(this.Tb=h?parseInt(h[1], 10):-1, h && (s=e.value[this.Tb]), s=s<e.min?e.min:s>e.max?e.max:s, 36===i) s=e.min; else if(35===i) s=e.max; else {
					var r=37===i || 40===i || 34===i?-1:1;
					(33===i || 34===i || 1<e.step) && (r*=e.step), s=1*s+r;
				}
				if(h) {
					var o=e.value[this.Tb?0:1];
					s=this.Tb && s<=o || !this.Tb && o<=s?o:s;
				}
				if(s>=e.min && s<=e.max) {
					if(h) {
						for(var a=[], u=0; u<e.value.length; u++) a[u]=u===this.Tb?s:e.value[u];
						s=a;
					}
					this.setValue(s), this.Tb= -1;
				}
			}
		},
		Ib:function(t) {
			if(!this.Fb) {
				var i=t.target;
				this.Vb && this.Vb(t);
				var e=this.P.value;
				if($(e) && (e=_(e)), -1!=i.className.indexOf('webix_slider_handle')) return this.zb=e, this.Bb.apply(this, arguments);
				-1!=i.className.indexOf('webix_slider') && (this.zb=e, this.P.value=this.Hb.apply(this, arguments), this.Bb(t));
			}
		},
		Bb:function() {q.touch?this.Fb=[this.attachEvent('onTouchMove', S(this.Rb, this)), this.attachEvent('onTouchEnd', S(this.Eb, this))]:this.Fb=[Zt(document.body, 'mousemove', S(this.Rb, this)), Zt(window, 'mouseup', S(this.Eb, this))], yt(document.body, 'webix_noselect');},
		Eb:function() {
			this.Fb && (q.touch?(this.detachEvent(this.Fb[0]), this.detachEvent(this.Fb[1])):(Qt(this.Fb[0]), Qt(this.Fb[1])), this.Fb=null), Mt(document.body, 'webix_noselect');
			var t=this.P.value;
			$(t) && (t=_(t)), this.P.value=this.zb, this.setValue(t), this.Mb(this.Tb).focus(), this.Tb= -1;
		},
		Rb:function() {this.P.value=this.Hb.apply(this, arguments), this.refresh(), this.callEvent('onSliderDrag', []);},
		Hb:function(t, i) {
			var e=0, s=this.P.vertical?'y':'x';
			return e=q.touch?i?i[s]:t[s]:bt(t)[s], this.Pb(e);
		},
		Pb:function(t) {
			var i=this.P, e=i.max-i.min, s=i.vertical?'y':'x', n=pt(this.Mb().parentNode)[s]+this.Sb, h=(i.vertical?this.ge:this.Cm(i))-2*this.Sb, r=h?(t-n)*e/h:0;
			return i.vertical && (r=e-r), r=Math.round((r+1*i.min)/i.step)*i.step, Math.max(Math.min(r, i.max), i.min);
		},
		ym:function() {}
	}), Zh={
		api:Kh,
		view:H.protoUI(Kh, kh.view)
	}, Qh={
		name:'rangeslider',
		$cssName:'slider webix_rangeslider',
		defaults:{
			separator:',',
			value:[20, 80],
			template:function(t, i) {
				var e='x'+V();
				i.yb=[e+'_0', e+'_1'];
				var s='role=\'slider\' aria-label=\''+t.label+(t.title?' '+t.title(t):'')+'\' aria-valuemax=\''+t.max+'\' aria-valuemin=\''+t.min+'\' tabindex=\'0\'', n='<div class=\'webix_slider_handle webix_slider_handle_0\' webix_disable_drag=\'true\' id=\''+i.yb[0]+'\' '+s+' aria-valuenow=\''+t.value[0]+'\'>&nbsp;</div>';
				n+='<div class=\'webix_slider_handle webix_slider_handle_1\' webix_disable_drag=\'true\' id=\''+i.yb[1]+'\' '+s+' aria-valuenow=\''+t.value[1]+'\'>&nbsp;</div>';
				var h='<div class=\'webix_slider_title'+(t.moveTitle?' webix_slider_move':'')+'\''+(!t.moveTitle && t.vertical?' style=\'line-height:'+(t.aheight-i.Sb-2*t.inputPadding)+'px;\'':'')+'>&nbsp;</div>';
				t.moveTitle && (h='<div class=\'webix_slider_title_box\'>'+(h+h)+'</div>');
				var r='<div class=\'webix_slider_right\'>&nbsp;</div><div class=\'webix_slider_left\'></div>', o='';
				return o=t.vertical?'<div class=\'webix_slider_box\'>'+r+n+'</div>'+h:h+'<div class=\'webix_slider_box\'>'+r+n+'</div>', i.$renderInput(t, o, e);
			}
		},
		$prepareValue:function(t) {
			if($(t) || (t=(t || '').toString().split(this.P.separator)), t[0]=parseFloat(t[0]), t[0]=isNaN(t[0])?0:t[0], t.length<2?t[1]=t[0]:(t[1]=parseFloat(t[1]), t[1]=isNaN(t[1])?0:t[1]), t[0]>t[1]) {
				var i=[t[1], t[0]];
				t[0]=i[0], t[1]=i[1];
			}
			return t;
		},
		Mb:function(t) {
			return t=t && 0<=t?t:0, this.$view.querySelector('.webix_slider_handle_'+(t || 0));
		},
		jb:function(t, i) {
			var e, s, n;
			return s=(e=this.P).max-e.min, n=e.value[i]%e.step?Math.round(e.value[i]/e.step)*e.step:e.value[i], n=Math.max(Math.min(n, e.max), e.min), Math.ceil((t-2*this.Sb)*(n-e.min)/s);
		},
		Nb:function(t, i, e) {
			var s=this.Sb+i-this.kb/2*(e?-1:1);
			return (s=e?t-s:s)+'px';
		},
		Lb:function(t, i, e, s) {
			var n=i+this.Sb+2*this.Cb;
			return s && (n=t-n-e), n+'px';
		},
		qp:function() {
			var t, i, e, s, n, h, r, o, a, u, c;
			i=this.Mb(0), e=this.Mb(1), $((t=this.P).value) || this.define('value', t.value), i && (a=t.vertical?'height':'width', c=t.vertical?'top':'left', h=(u=t.vertical?this.ge:this.Cm(t))-2*this.Sb-2*this.Cb, s=this.jb(u, 0), r=(n=this.jb(u, 1))-s, i.style[c]=this.Nb(u, s, t.vertical), e.style[c]=this.Nb(u, n, t.vertical), (o=i.parentNode).style[a]=u+'px', o.firstChild.style[a]=h+'px', o.childNodes[1].style[a]=r+'px', o.childNodes[1].style[c]=this.Lb(u, s, r, t.vertical), this.$b(i, [s, n], h, c));
		},
		Ob:0,
		Wb:function(t, i) {R(this.Ob) || (t[this.Ob].style.visibility='visible'), R(i) || (t[i].style.visibility='hidden', this.Ob=i);},
		$b:function(t, i, e, s) {
			var n=this.P;
			if(this.P.title) {
				var h=t.parentNode, r=n.vertical?'nextSibling':'previousSibling';
				if(n.moveTitle) {
					for(var o=h[r].childNodes, a=[], u=0; u<2; u++) a.push(this.Ub(o[u], n.value[u], i[u], e, s, u));
					var c=n.vertical?a[0]-a[1]-this.kb:a[1]-a[0], f=n.vertical?'clientHeight':'clientWidth';
					o[0][f]/2+o[1][f]/2>c?this.Wb(o, R(this.Tb)?0:this.Tb?0:1):this.Wb(o);
					for(var l=0; l<2; l++) o[l].style[s]=a[l]+'px';
				} else h[r].innerHTML=this.P.title(this.P, this);
			}
		},
		Ub:function(t, i, e, s, n, h) {
			t.innerHTML=this.P.title({value:i}, this);
			var r=t.clientWidth/2, o=0;
			return o=this.P.vertical?s-e-this.kb/2-(h?this.Sb:0)+2*this.Cb:(o=e+this.kb/2+2*this.Cb-r, o=e<r?r-e+o:o, h && s<r+e?o-r+(s-e):o);
		},
		Db:function() {for(var t=0; t<2; t++) this.Mb(t).setAttribute('aria-valuenow', this.P.value[t]);},
		Vb:function(t) {
			var i=t.target, e=/webix_slider_handle_(\d)/.exec(i.className);
			this.Tb=e?parseInt(e[1], 10):-1, e && this.Yb(this.Tb);
		},
		$compareValue:function(t, i) {return i=this.$prepareValue(i), t[0]===i[0] && t[1]===i[1];},
		$getValue:function() {
			var t=this.P.value;
			return this.P.stringResult?t.join(this.P.separator):t;
		},
		Yb:function(t) {
			var i=this.Mb(t), e=this.Mb(1-t);
			-1==i.className.indexOf('webix_slider_active') && (i.className+=' webix_slider_active'), e.className=e.className.replace(' webix_slider_active', ''), i.focus();
		},
		Pb:function(t) {
			var i=this.P, e=i.value, s=i.max-i.min, n=i.vertical?'y':'x', h=pt(this.Mb().parentNode)[n], r=Math.ceil((t-h)*s/(i.vertical?this.ge:this.Cm(i)));
			r=Math.round((r+1*i.min)/i.step)*i.step, i.vertical && (r=s-r);
			var o=null, a=pt(this.Mb(0))[n], u=pt(this.Mb(1))[n];
			a!=u || i.value[0]!=i.min && i.value[0]!=i.max?0<=this.Tb?o=this.Tb:a==u?o=t<a?0:1:(o=Math.abs(a-t)<Math.abs(u-t)?0:1, this.Tb=o):(this.Tb=o=i.value[0]==i.min?1:0, this.Yb(o));
			return e[o]=o?Math.max(Math.min(r, i.max), e[0]):Math.max(Math.min(r, e[1]), i.min), e;
		}
	}, tr=(H.protoUI(Qh, Zh.view), {
		name:'switch',
		defaults:{
			template:function(t, i) {
				i.qb();
				var e=t.name || 'x'+V(), s='';
				t.labelRight && (s='<label class=\'webix_label_right\'>'+t.labelRight+'</label>', t.labelWidth && (t.label=t.label || '&nbsp;'));
				var n=t.checkValue==t.value, h='aria-label="'+(t.label || t.labelRight || '')+'" role="checkbox" tabindex="0" aria-checked="'+(n?'true':'false')+'" '+(t.readonly?'aria-readonly=\'true\'':'')+'"', r='<div class="webix_switch_box '+(n?' webix_switch_on':'')+'" style="width:'+i.Gb+'px"><span class="webix_switch_text">'+((n?t.onLabel:t.offLabel) || '')+'</span><button class="webix_switch_handle" '+h+' style="left:'+(n?i.Gb-i.Xb:0)+'px;"><input  id="'+e+'" class="webix_switch_toggle" type="checkbox" '+(n?'checked':'')+'></button></div>'+s;
				return i.$renderInput(t, r, e);
			}
		},
		$skin:function() {Ih.api.$skin.call(this), this.Xb=Li.switchHeight, this.Gb=Li.switchWidth;},
		$setValue:function(t) {
			var i=this.P, e=t==i.checkValue, s=this.$view.querySelector('.webix_switch_box');
			if(s) {
				var n=s.childNodes[1], h=(e?i.onLabel:i.offLabel) || '';
				e?yt(s, 'webix_switch_on'):Mt(s, 'webix_switch_on'), n.style.left=(e?this.Gb-this.Xb:0)+'px', n.firstChild.checked=e, n.setAttribute('aria-checked', e?'true':'false'), h && (s.childNodes[0].innerHTML=h);
			}
		},
		qb:function() {
			var t=this.P;
			if(t.onLabel || t.offLabel) {
				var i=t.onLabel?St(t.onLabel, 'webix_switch_text').width:0, e=t.onLabel?St(t.offLabel, 'webix_switch_text').width:0;
				this.Gb=Math.max(i, e)+this.Xb;
			}
		},
		on_click:{
			webix_switch_box:function() {this.P.readonly || this.toggle();},
			webix_label_right:function() {this.P.readonly || this.toggle();}
		}
	}), ir=(H.protoUI(tr, Ih.view), {
		name:'tabbar',
		$init:function() {this.attachEvent('onKeyPress', this.Se);},
		$skin:function() {
			var t=Li, i=this.defaults;
			i.topOffset=t.tabTopOffset || 0, i.tabOffset='undefined'!= typeof t.tabOffset?t.tabOffset:10, i.bottomOffset=t.tabBottomOffset || 0, i.height=t.tabbarHeight, i.tabMargin=t.tabMargin, i.inputPadding=t.inputPadding, i.tabMinWidth=t.tabMinWidth || 100, i.tabMoreWidth=t.tabMoreWidth || 40, i.borderless= !t.tabBorder;
		},
		Jb:function() {
			var t, i, e=this.P, s=this.au(e.options), n=this.Qp-2*e.tabOffset, h=e.optionWidth || e.tabMinWidth;
			if(i=s.length, e.tabMinWidth && n/i<h) return {max:parseInt(n/h, 10) || 1};
			if(!e.optionWidth) for(t=0; t<i; t++) s[t].width && (n-=s[t].width+(t || e.type?0:e.tabMargin), i--);
			return {width:i?n/i:e.tabMinWidth};
		},
		Tm:function() {
			var i=this, t=this.P;
			if(!t.tabbarPopup) {
				var e=si({
					view:'popup',
					autofocus:!1,
					width:t.popupWidth || 200,
					body:{
						view:'list',
						borderless:!0,
						select:!0,
						navigation:!0,
						css:'webix_tab_list',
						autoheight:!0,
						yCount:t.yCount,
						type:{template:t.popupTemplate}
					}
				}), s=e.getBody();
				e.attachEvent('onShow', function() {
					s.unselect(), Mi.setFocus(s);
					var t=s.getItemNode(s.getFirstId());
					t && t.focus();
				}), s.attachEvent('onItemClick', function(t) {return i.Kb(t);}), s.attachEvent('onEnter', function() {return i.Kb();}), t.tabbarPopup=e.P.id, this.Bt.push(e);
			}
			this.Tm=function() {};
		},
		Kb:function(t) {
			var i=oi(this.P.tabbarPopup);
			return (t=t || i.getBody().getSelectedId()) && this.callEvent('onBeforeTabClick', [t]) && (this.setValue(t), i.hide(), this.callEvent('onAfterTabClick', [t]), this.refresh(), this.focus()), !1;
		},
		getPopup:function() {return this.Tm(), oi(this.P.tabbarPopup);},
		moreTemplate_setter:Yt,
		popupTemplate_setter:Yt,
		defaults:{
			popupWidth:200,
			popupTemplate:'#value#',
			yCount:7,
			moreTemplate:'<span class="webix_icon wxi-dots"></span>',
			template:function(t, i) {
				i.sm(t.options);
				var e, s, n, h, r, o, a, u=i.au(t.options);
				if(u.length) {
					t.value || (t.value=i.ou(!0)), e='', t.tabOffset && (e+='<div class=\'webix_tab_filler\' style=\'width:'+t.tabOffset+'px;\'>&nbsp;</div>'), i.Qp-2*t.tabOffset-(t.type?0:t.tabMargin*(u.length-1)), o=t.topOffset+t.bottomOffset;
					var c=i.Jb();
					if(c.max && c.max<u.length) {
						var f=i.getPopup();
						f.hide();
						var l=f.getBody() || null;
						if(l) if(c.max) {
							for(var d=0, v=!1; d<u.length && !v; d++) if(u[d].id==t.value && (v= !0, d+1>c.max)) {
								var _=u.splice(d, 1);
								u=u.splice(0, c.max-1).concat(_).concat(u);
							}
							l.clearAll(), l.parse(u.slice(c.max));
						} else l.clearAll();
					} else i.P.tabbarPopup && oi(i.P.tabbarPopup).hide();
					r=t.tabOffset;
					for(var p=0, m=!1; p<u.length && !m; p++) a=c && c.max?(c.max==p+1 && (m= !0), (i.Qp-2*t.tabOffset-(!t.type && 1<c.max?t.tabMargin*(c.max-1):0)-t.tabMoreWidth)/c.max):c.width, r+=(a=u[p].width || t.optionWidth || a)+(p && !t.type?t.tabMargin:0), 0<t.tabMargin && p && !t.type && (e+='<div class=\'webix_tab_filler\' style=\'width:'+t.tabMargin+'px;\'></div>'), e+=i.Zb(u[p], a), m && (e+='<div role="button" tabindex="0" aria-label="'+I.aria.showTabs+'" class="webix_tab_more_icon" style="width:'+t.tabMoreWidth+'px;">'+t.moreTemplate(t, i)+'</div>', r+=t.tabMoreWidth);
					0<(s=i.me-r) && !t.type && (e+='<div class=\'webix_tab_filler\' style=\'width:'+s+'px;\'>&nbsp;</div>');
				} else e='<div class=\'webix_tab_filler\' style=\'width:'+i.Qp+'px; border-right:0px;\'></div>';
				return n='', h=o && !t.type?'height:'+(i.ge-o)+'px':'', t.topOffset && !t.type && (n+='<div class=\'webix_before_all_tabs\' style=\'width:100%;height:'+t.topOffset+'px\'></div>'), n+='<div style=\''+h+'\' role=\'tablist\' class=\'webix_all_tabs '+(t.type?'webixtype_'+t.type:'')+'\'>'+e+'</div>', t.bottomOffset && !t.type && (n+='<div class=\'webix_after_all_tabs\' style=\'width:100%;height:'+t.bottomOffset+'px\'></div>'), n;
			}
		},
		nu:function() {return this.$view.querySelectorAll('.webix_item_tab');},
		Zb:function(t, i) {
			var e, s='', n='', h=!!t.disabled, r=this.config;
			if(t.id==r.value && (s+=' webix_selected'), h && (s+=' webix_disabled'), t.css && (s+=' '+t.css), r.tooltip && (n=' webix_t_id=\''+t.id+'\''), i=t.width || i, e='<div class="webix_item_tab'+s+'" button_id="'+t.id+'" role="tab" aria-selected="'+(t.id==r.value?'true':'false')+'" tabindex="'+(h || t.id!=r.value?'-1':'0')+'" style="width:'+i+'px;"'+(h?' webix_disabled="true"':'')+n+'>', this.Qb) {
				var o=this.ge-2*r.inputPadding-2, a=this.ge-2, u=H.extend({
					cheight:o,
					aheight:a
				}, t);
				e+=this.Qb(u);
			} else {
				e+=(t.icon?'<span class=\'webix_icon '+t.icon+'\'></span> ':'')+t.value;
			}
			return h || !t.close && !r.close || (e+='<span role=\'button\' tabindex=\'0\' aria-label=\''+I.aria.closeTab+'\' class=\'webix_tab_close webix_icon wxi-close\'></span>'), e+='</div>';
		},
		Pp:function() {return this.tt.firstChild;},
		bd:{
			image:'<div class=\'webix_img_btn_top\' style=\'height:#cheight#px;background-image:url(#image#);\'><div class=\'webix_img_btn_text\'>#value#</div></div>',
			icon:'<div class=\'webix_img_btn\' style=\'line-height:#cheight#px;height:#cheight#px;\'><span class=\'webix_icon_btn #icon#\' style=\'max-width:#cheight#px;max-height:#cheight#px;\'></span>#value#</div>',
			iconTop:'<div class=\'webix_img_btn_top\' style=\'height:#cheight#px;width:100%;top:0px;text-align:center;\'><span class=\'webix_icon #icon#\'></span><div class=\'webix_img_btn_text\'>#value#</div></div>'
		},
		type_setter:function(t) {return this.P.tabOffset=0, this.bd[t] && (this.Qb=Yt(this.bd[t])), t;}
	}), er=(H.protoUI(ir, Nh.view), {
		name:'richtext',
		defaults:{
			label:'',
			labelWidth:80,
			labelPosition:'left'
		},
		$init:function() {this.Vt.className+=' webix_richtext', this.$ready.unshift(this.tg);},
		$skin:function() {kn.api.$skin.call(this), this.defaults.paddingX=Li.inputSpacing/2, this.defaults.paddingY=Li.inputPadding;},
		getInputNode:function() {return this.$view.querySelector('.webix_richtext_editor');},
		ig:function(t) {
			return {
				view:'toggle',
				type:'icon',
				icon:'wxi-'+t,
				name:t,
				id:t,
				label:I.richtext[t],
				autowidth:!0,
				action:t,
				click:this.eg
			};
		},
		tg:function() {
			var t=this, i={
				view:'template',
				css:'webix_richtext_container',
				borderless:!0,
				template:'<div class=\'webix_richtext_editor\' contenteditable=\'true\'>'+this.getValue()+'</div>',
				on:{onAfterRender:function() {t.Jp= !0, t.refresh(), Kt(t.getInputNode(), 'blur', function() {t.sg(this.innerHTML);}), Kt(t.getInputNode(), 'keyup', function() {t.ng();});}},
				onClick:{webix_richtext_editor:function() {t.ng();}}
			}, e=[this.ig('underline'), this.ig('bold'), this.ig('italic'), {}], s={
				view:'toolbar',
				id:'toolbar',
				elements:e
			}, n=[s, i];
			'top'===this.config.labelPosition?(s.elements=e.concat([{
				view:'label',
				label:this.config.label,
				align:'right'
			}, {width:4}]), this.rows_setter(n)):this.config.labelWidth?(this.config.margin=0, this.cols_setter([{
				template:this.config.label || ' ',
				css:'webix_richtext_inp_label'+(this.config.required?' webix_required':''),
				borderless:!0,
				width:this.config.labelWidth
			}, {rows:n}])):this.rows_setter(n);
		},
		labelWidth_setter:function(t) {return t?Math.max(t, Li.dataPadding):0;},
		ng:function() {
			var t;
			this.$$('toolbar').setValues({
				italic:!1,
				underline:!1,
				bold:!1
			}), t=window.getSelection?window.getSelection():document.selection.createRange();
			for(var i=0; i<t.rangeCount; ++i) this.$view.contains(this.getInputNode()) && (document.queryCommandState('bold') && this.$$('bold').setValue(!0), document.queryCommandState('underline') && this.$$('underline').setValue(!0), document.queryCommandState('italic') && this.$$('italic').setValue(!0));
		},
		refresh:function() {this.Jp && (this.getInputNode().innerHTML=this.config.value || '');},
		hg:function(t) {
			var i, e;
			if(window.getSelection) {
				e=(i=window.getSelection()).toString().length;
				var s=this.getInputNode();
				if(s.contains(i.anchorNode) && s.contains(i.focusNode) && 0<e) for(var n=0; n<i.rangeCount; ++n) {
					var h=i.getRangeAt(n);
					if(i.isCollapsed) {
						var r=i.focusNode.textContent, o=i.focusNode, a=i.anchorOffset, u=r.substring(0, a).match(/[A-Za-z]*$/)[0], c=r.substring(a).match(/^[A-Za-z]*/)[0], f=a-u.length, l=a+c.length;
						h.setStart(o, f), h.setEnd(o, l), i.removeAllRanges(), i.addRange(h), document.execCommand(t, !1, '');
					} else document.execCommand(t, !1, '');
				}
			}
		},
		eg:function() {this.getTopParentView().hg(this.config.action);},
		focus:function() {
			if(!Mi.canFocus(this)) return !1;
			this.getInputNode().focus();
		},
		sg:function(t) {
			var i=this.config.value;
			this.config.value=t || '', i!==t && this.callEvent('onChange', [t, i]);
		},
		setValue:function(t) {
			this.sg(t), this.refresh();
		},
		getValue:function() {
			this.getInputNode() && (this.config.value=this.getInputNode().innerHTML);
			var t=this.config.value;
			return t || (0===t?'0':'');
		}
	});
	H.protoUI(er, Te, kn.view);
	ti(Gh.view, {
		name:'uploader',
		template:'{common.removeIcon()}{common.percent()}<div style=\'float:right\'>#sizetext#</div>{common.fileName()}',
		percent:function(t) {return 'transfer'==t.status?'<div style=\'width:60px; text-align:center; float:right\'>'+t.percent+'%</div>':'<div class=\'webix_upload_'+t.status+'\'><span class=\''+('error'==t.status?'error_icon':'webix_icon wxi-check')+'\'></span></div>';},
		removeIcon:function() {return '<div class=\'webix_remove_upload\'><span class=\'cancel_icon\'></span></div>';},
		fileName:function(t) {return '<div style=\'text-overflow:ellipsis; white-space:nowrap; overflow:hidden; padding-right:8px;\'>'+t.name+'</div>';},
		on_click:{webix_remove_upload:function(t, i) {oi(this.config.uploader).files.remove(i);}}
	});
	var sr={
		name:'uploader',
		defaults:{
			autosend:!0,
			multiple:!0,
			inputName:'upload'
		},
		$cssName:'button webix_uploader',
		$allowsClear:!0,
		on_click:{webix_hidden_upload:function() {return !1;}},
		send:function() {},
		fileDialog:function() {},
		stopUpload:function() {},
		$skin:function() {bh.api.$skin.call(this), 'material'!=Oi && 'mini'!=Oi || (this.defaults.css='webix_primary');},
		$init:function() {this.files=new Ch, this.Bt=[this.files], H.extend(this, _s, !0);},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && this.render();},
		apiOnly_setter:function(t) {return k(this.render, this), this.$apiOnly=t;},
		Tf:function(t) {for(var i=0; i<t.length; i++) this.addFile(t[i]);},
		link_setter:function(t) {
			return t && k(function() {
				var t=oi(this.P.link);
				if(!t) {
					var i=this.getTopParentView();
					i.$$ && (t=i.$$(this.P.link));
				}
				t.sync && t.filter?t.sync(this.files):t.setValues && this.files.data.attachEvent('onStoreUpdated', function() {t.setValues(this);}), t.P.uploader=this.P.id;
			}, this), t;
		},
		addFile:function(t, i, e, s) {
			var n=null;
			'object'==M(t) && (t=(n=t).name, i=n.size);
			var h=this.rg(i);
			e=e || t.split('.').pop();
			var r={
				file:n,
				name:t,
				id:V(),
				size:i,
				sizetext:h,
				type:e,
				context:this.Bf,
				status:'client'
			};
			if(n && n.webkitRelativePath && (r.name=n.webkitRelativePath), s && H.extend(r, s, !0), this.callEvent('onBeforeFileAdd', [r])) {
				this.P.multiple || this.files.clearAll();
				var o=this.files.add(r);
				this.callEvent('onAfterFileAdd', [r]), o && this.P.autosend && this.send(o);
			}
			return r;
		},
		Rf:function(t) {
			var i=this.P.upload, e=H.extend(t.urlData || {}, this.P.urlData || {});
			if(i && e) {
				var s=[];
				for(var n in e) s.push(encodeURIComponent(n)+'='+encodeURIComponent(e[n]));
				s.length && (i+=(-1==i.indexOf('?')?'?':'&')+s.join('&'));
			}
			return i;
		},
		addDropZone:function(t, i) {
			var e=C(t), s='';
			i && (s=' '+at({content:'"'+i+'"'}, ':before'));
			var n='webix_drop_file'+s, h=null;
			Kt(e, 'dragover', gt), Kt(e, 'dragover', function() {yt(e, n, !0), h && (clearTimeout(h), h=null);}), Kt(e, 'dragleave', function() {h=setTimeout(function() {Mt(e, n);}, 150);}), Kt(e, 'drop', S(function(t) {return Mt(e, n), this.$drop(t), gt(t);}, this));
		},
		rg:function(t) {
			for(var i=0; 1024<t;) i++, t/=1024;
			return Math.round(100*t)/100+' '+I.fileSize[i];
		},
		jf:function(t, i) {
			var e=this.files.getItem(t);
			H.extend(e, i, !0), e.status='server', e.progress=100, this.callEvent('onFileUpload', [e, i]), this.callEvent('onChange', []), this.files.updateItem(t), this.isUploaded() && this.Pf(i);
		},
		Pf:function(t) {this.callEvent('onUploadComplete', [t]), this.Hf && (this.Hf.call(this, t), this.Hf=0);},
		isUploaded:function() {
			for(var t=this.files.data.order, i=0; i<t.length; i++) if('server'!=this.files.getItem(t[i]).status) return !1;
			return !0;
		},
		$onUploadComplete:function() {},
		$updateProgress:function(t, i) {this.files.getItem(t).percent=Math.round(i), this.files.updateItem(t);},
		setValue:function(t) {
			'string'== typeof t && t && (t={
				value:t,
				status:'server'
			}), this.files.clearAll(), t && this.files.parse(t), this.callEvent('onChange', []);
		},
		getValue:function() {
			var i=[];
			return this.files.data.each(function(t) {'server'==t.status && i.push(t.value || t.name);}), i.join(',');
		}
	}, nr=(H.protoUI(sr, bh.view), {
		name:'texthighlight',
		defaults:{
			template:function(t, i) {
				var e=t.name || t.id, s='x'+V(), n=i.Cm(t), h='<div class="webix_text_highlight" style="width:'.concat(n, 'px;"><div class="webix_text_highlight_value"');
				return 'textarea'==t.type && q.mobile && q.isSafari && (h+=' style="margin-left:'.concat(Li.dataPadding+3, 'px; margin-right:').concat(Li.dataPadding+3, 'px;"')), h+='></div></div>', 'textarea'==t.type?(h+=''.concat(i.Dm('textarea'), ' style="width:').concat(n, 'px;" id="').concat(s, '" name="').concat(e, '" class="webix_inp_textarea">').concat(i.um(t.value), '</textarea>'), i.$renderInput(t, h, s)):h+i.$renderInput(t);
			},
			highlight:function(t) {return Yt.escape(t);},
			type:'text'
		},
		$init:function(t) {
			var i=this, e=t.type || this.defaults.type;
			this.Vt.className+=' webix_el_'+e, 'textarea'==e?(t.height=t.height || 0, t.minHeight=t.minHeight || 60, this.Vi= !0):(this.scrollEv=Zt(document, 'selectionchange', function() {i.$view.contains(document.getSelection().focusNode) && i.og();}), this.attachEvent('onDestruct', function() {Qt(i.scrollEv);})), this.attachEvent('onChange', function() {return i.og();}), this.attachEvent('onAfterRender', function() {
				i.ag();
				['scroll', 'focus', 'blur', 'paste', 'cut', 'keyup', 'input'].forEach(function(t) {return Kt(i.getInputNode(), t, function() {return i.og();});}), i.ug(!0);
			});
		},
		$setSize:function() {kh.api.$setSize.apply(this, arguments), this.ag();},
		Im:function(t) {return 'textarea'==this.P.type?t?this.P_-this.P.inputPadding:'':kh.api.Im.apply(this, arguments);},
		getInputNode:function() {return this.tt.querySelector('text'==this.P.type?'input':'textarea');},
		cg:function() {return this.tt.querySelector('.webix_text_highlight');},
		ug:function(t) {
			var i=this.cg().firstElementChild, e=this.getValue();
			(t || e!=(this.fg || '')) && (this.fg=e, i.innerHTML=this.P.highlight.apply(this, [e])+'&nbsp;');
		},
		lg:function() {
			var t=this.cg();
			'text'==this.P.type && (t=t.firstElementChild);
			var i=this.getInputNode();
			t.scrollTop=i.scrollTop, t.scrollLeft=i.scrollLeft;
		},
		ag:function() {
			if(this.isVisible()) {
				var t=this.getInputNode(), i=this.cg().style;
				i.left=t.offsetLeft+'px', i.top=t.offsetTop+'px', i.height=t.getBoundingClientRect().height+'px';
			}
		},
		og:function() {
			var t=this;
			k(function() {t.ug(), t.lg();});
		}
	}), hr=(H.protoUI(nr, kh.view), {
		name:'suggest',
		defaults:{
			autofocus:!1,
			type:'list',
			keyPressTimeout:1,
			body:{
				yCount:10,
				autoheight:!0,
				body:!0,
				select:!0,
				borderless:!0,
				navigation:!0
			},
			filter:function(t, i) {return 0===t.value.toString().toLowerCase().indexOf(i.toLowerCase());}
		},
		template_setter:Yt,
		filter_setter:function(t) {return v(t, this.$scope);},
		dg:!0,
		$init:function(t) {
			var i={};
			H.extend(i, _(this.defaults.body)), i.view=t.type || this.defaults.type;
			var e=this.vg(i);
			t.body && H.extend(e, t.body, !0), t.data && (e.data=t.data), t.url && (e.url=t.url), t.datatype && (e.datatype=t.datatype), t.id && (i.id=i.id || t.id+'_'+i.view), t.body=i, this.$ready.push(this._g), this.attachEvent('onShow', function() {
				if(this.P.master) {
					var t=oi(this.P.master);
					if(t) (t.cb?t.cb():t.getInputNode()).setAttribute('aria-expanded', 'true');
				}
				this._a();
			}), this.attachEvent('onHide', function() {
				if(this.P.master) {
					var t=oi(this.P.master);
					if(t) (t.cb?t.cb():t.getInputNode()).setAttribute('aria-expanded', 'false');
				}
			}), this.pg={};
		},
		vg:function(t) {return t;},
		mg:function() {return null;},
		gg:function(t) {this.va.value=t;},
		wg:function(t) {
			var i, e=t.id?this.getItemText(t.id):t.text || t.value;
			if(this.P.master) {
				var s=oi(this.P.master);
				if(i=s.getInputNode()) {
					var n=s.P.text;
					s.options_setter?s.$setValue(t.$empty?'':t.id):s.$setValueHere?s.$setValueHere(e, t, this.mg()):s.$setValue(e), s.P.text=n;
				}
			} else this.va && this.gg(e);
			(i=i || this.va) && i.focus();
		},
		setMasterValue:function(t, i) {
			var e=t.id?this.getItemText(t.id):t.text || t.value;
			if(this.P.master) {
				var s=oi(this.P.master);
				i && t.id?s.refresh():s.options_setter?s.setValue(t.$empty?'':t.id):s.setValueHere?s.setValueHere(e, t, this.mg()):s.setValue(e);
			} else this.va && this.gg(e);
			i || (this.hide(), this.va && this.va.focus()), this.callEvent('onValueSuggest', [t, e]);
		},
		getMasterValue:function() {return this.P.master?oi(this.P.master).getValue():null;},
		getItemId:function(t) {
			var i=this.getList();
			for(var e in i.data.pull) {
				var s=i.getItem(e);
				if(this.P.filter.call(this, s, t)) return s.id;
			}
		},
		getItemText:function(t) {
			var i=this.getList().getItem(t);
			if(!i) return this.pg[t] || '';
			if(this.P.template) return this.P.template.call(this, i, this.type);
			if(this.P.textValue) return ''+i[this.P.textValue];
			var e=this.getList().type, s=e.template.call(e, i, e);
			return this.pg[t]=s;
		},
		getSuggestion:function(t) {
			var i, e=this.getList(), s=e.data.order;
			return e.getSelectedId && (i=e.getSelectedId()), t && s.length && (!i || s.find(i)<0) && (i=s[0], !e.config.dataFeed && !this.config.filter.call(this, e.data.pull[i], t))?null:i && ('object'==M(i) && (i+=''), e.getItem(i).$empty)?null:i;
		},
		getList:function() {return this.$t;},
		_g:function() {
			var i=this.getList(), t=this.P.type;
			i.count?(i.attachEvent('onItemClick', S(function(t) {this.setMasterValue(i.getItem(t));}, this)), i.data.attachEvent('onstoreupdated', S(function(t, i, e) {
				'delete'==e && t==this.getMasterValue()?this.setMasterValue({
					id:'',
					text:''
				}, 1):'update'==e && t==this.getMasterValue() && this.setMasterValue(i, 1);
			}, this)), i.data.attachEvent('onAfterFilter', S(this.ab, this)), R(this.P.fitMaster) && (this.P.fitMaster= !0)):'calendar'==t?(i.attachEvent('onDateSelect', function() {this.getParentView().setMasterValue({value:i.getSelectedDate()}, i.config.multiselect);}), i.attachEvent('onTodaySet', function(t) {this.getParentView().setMasterValue({value:t});}), i.attachEvent('onDateClear', function(t) {this.getParentView().setMasterValue({value:t});})):'colorboard'==t && i.attachEvent('onItemClick', function(t) {this.getParentView().setMasterValue({value:t});});
		},
		input_setter:function(t) {return this.linkInput(t), 0;},
		linkInput:function(i) {
			var e;
			i.getInputNode?(e=i.getInputNode()).webix_master_id=i.P.id:e=C(i), Kt(e, 'keydown', function(t) {e==document.body && !this.isVisible() || (i.config?i.config.readonly:e.getAttribute('readonly')) || this.xg(t);}, {bind:this}), i.cb && (e=i.cb()), e.setAttribute('aria-autocomplete', 'list'), e.setAttribute('aria-expanded', 'false'), 'DIV'===e.tagName && (e.setAttribute('aria-live', 'assertive'), e.setAttribute('aria-atomic', 'true')), this.yg= !0;
		},
		xg:function(t) {
			this.Mg && (this.Mg=clearTimeout(this.Mg)), t=t || event;
			var e=this.getList(), s=t.target;
			if((s!=document.body || this.isVisible()) && 'webix_clipbuffer'!=s.className) {
				this.va=s, this.P.master=s.webix_master_id;
				var i=t.keyCode;
				if(16!=i && 17!=i) {
					if(9==i) return this.Sg(t, e);
					if(27==i) return this.kg(t, e);
					if(13==i) return this.$enterKey(t, e);
					if(this.Cg(t) && this.isVisible()) return gt(t), !1;
					var n='true'==s.getAttribute('contentEditable');
					R(s.value) && !n || (this.Mg=k(function() {
						if(this.yg || Mi.getFocus()==oi(this.P.master)) {
							this.ub= !0;
							var i=n?s.innerText:s.value;
							this.$g && this.$g(), e.config.dataFeed?e.filter('value', i):e.filter && e.filter(S(function(t) {return this.P.filter.call(this, t, i);}, this));
						}
					}, this, [], this.P.keyPressTimeout));
				}
			}
		},
		ab:function() {
			if(!this.ub) return !0;
			this.ub= !1, 0<this.getList().count()?(this.adjust(), this.isVisible() || (this.ob= !0), this.show(this.va, null, !0), this.ob= !1):(this.hide(), this.va=null);
		},
		show:function(t) {
			var i=!t || 'INPUT'!=t.tagName && 'TEXTAREA'!=t.tagName?null:t;
			if(!this.isVisible() || i && i!=this.va) {
				var e=this.getList();
				e.filter && !this.ob && e.filter(''), this.$customWidth?this.$customWidth(t):t && t.tagName && this.P.fitMaster && (this.P.width=t.offsetWidth-2), e.md && e.render(), this.adjust(), i && (this.va=i);
			}
			th.api.show.apply(this, arguments);
		},
		_a:function(t) {
			t=t || this.getList();
			var i=this.getMasterValue();
			t.select && t.showItem?i && t.exists && t.exists(i)?(t.select(i), t.showItem(i)):(t.unselect(), t.showItem(t.getFirstId())):t.setValue && (this.P.master && (i=oi(this.P.master).$prepareValue(i)), t.setValue(i));
		},
		$enterKey:function(t, i) {
			var e, s, n=this.isVisible();
			this.P.master && (s=oi(this.P.master)), s && s.Am && s.P.editable?s.bi():n && (i.count?(e=i.getSelectedId(!1, !0), 1==i.count() && i.getFirstId()!=e && (e=i.getFirstId()), e && (e=i.getItem(e))):(i.getSelectedDate?e=i.getSelectedDate():i.getValue && (e=i.getValue()), e && (e={value:e})), e && this.setMasterValue(e)), n?this.hide():this.dg && this.show(this.va);
		},
		kg:function() {return this.hide();},
		Sg:function() {return this.hide();},
		Cg:function(t) {
			var i, e=this.getList(), s=t.keyCode;
			if(!(e.moveSelection && s<41 && 32<s) || t.ctrlKey || t.metaKey || t.shiftKey || t.altKey) return !1;
			if(40===s || 38===s) {
				this.dg && !this.isVisible() && this.show(this.va);
				var n=38===s?'up':'down';
				e.moveSelection(n, !1, !1);
			} else {
				if(e.count || !e.count && !e.isVisible()) return !1;
				var h;
				33==s && (h='pgup'), 34==s && (h='pgdown'), 35==s && (h='bottom'), 36==s && (h='top'), 37==s && (h='left'), 39==s && (h='right'), e.moveSelection(h, !1, !1);
			}
			return e.count?i=e.getSelectedItem(!1):(e.getSelectedDate?i=e.getSelectedDate():e.getValue && (i=e.getValue()), i && (i={value:i})), i && this.isVisible() && this.wg(i), !0;
		},
		getValue:function() {
			var t=this.getList(), i=(t.getValue?t.getValue():t.getSelectedId()) || '';
			if(i=i.id || i, t.getItem) {
				var e=t.getItem(i);
				if(e && e.$empty) return '';
			}
			return i;
		},
		setValue:function(t) {
			var i=this.getList();
			t?i.exists(t) && (i.select(t), i.showItem(t)):(i.unselect(), i.showItem(i.getFirstId()));
		}
	}), rr={
		api:hr,
		view:H.protoUI(hr, th.view)
	}, or={
		name:'multisuggest',
		defaults:{
			separator:',',
			type:'layout',
			button:!0,
			width:0,
			filter:function(t, i) {return -1<this.getItemText(t.id).toString().toLowerCase().indexOf(i.toLowerCase());},
			body:{
				rows:[{
					view:'list',
					type:'multilist',
					borderless:!0,
					autoheight:!0,
					yCount:5,
					multiselect:'touch',
					select:!0,
					on:{
						onItemClick:function(t) {
							var i=this.getParentView().getParentView();
							k(function() {i.Dg(t);});
						}
					}
				}, {
					view:'button',
					click:function() {this.getParentView().getParentView().hide(), k(function() {y('onEditEnd', []);});}
				}]
			}
		},
		Dg:function(t, i, e) {
			var s=this.getValue(), n=e || b(s?this.getValue().split(this.P.separator):[]), h=oi(this.P.master);
			e || (n.find(t)<0?n.push(t):n.remove(t));
			var r=n.join(this.P.separator), o=this.setValue(n).join(this.P.separator);
			if(h?h.setValue(r):this.va && (this.va.value=o), this.callEvent('onValueSuggest', [{
				id:r,
				text:o
			}]), i) {
				var a=this.getList().getItemNode(t).getElementsByTagName('SPAN');
				a && a.length && a[0].focus();
			}
		},
		vg:function(t) {return t.rows[0];},
		_g:function() {
			var t=this.getButton(), i=this.P.button?this.P.buttonText || I.combo.select:0;
			if(t && (i?(t.P.value=i, t.refresh()):t.hide()), this.P.selectAll) return this.getBody().getChildViews()[0].show();
			this.getList().data.attachEvent('onAfterFilter', S(function() {return this.ab();}, this));
		},
		_a:function() {
			var t=this.getList(), i=this.getMasterValue();
			if(i && (i=i.toString().split(this.config.separator))[0]) for(var e=0; e<i.length; e++) t.exists(i[e]) && t.select(i[e], !0);
		},
		getButton:function() {return this.getBody().getChildViews()[1];},
		getList:function() {return this.getBody().getChildViews()[0];},
		setValue:function(t) {
			var i=[], e=this.getList();
			if(e.unselect(), t && ($(t) || (t=t.toString().split(this.config.separator)), t[0])) for(var s=0; s<t.length; s++) e.getItem(t[s]) && (e.exists(t[s]) && e.select(t[s], !0), i.push(this.getItemText(t[s])));
			return this.P.value=t?t.join(this.config.separator):'', i;
		},
		getValue:function() {return this.P.value;}
	}, ar={
		api:or,
		view:H.protoUI(or, rr.view)
	}, ur={
		name:'checksuggest',
		defaults:{
			button:!1,
			selectAll:!1,
			body:{
				rows:[{
					view:'checkbox',
					hidden:!0,
					customCheckbox:!1,
					borderless:!1,
					css:'webix_checksuggest_select_all',
					labelRight:I.combo.selectAll,
					labelWidth:0,
					height:28,
					inputHeight:20,
					on:{
						onItemClick:function(t) {
							for(var i=this.getParentView().getParentView(), e=i.getList(), s=e.data.order, n=0; n<s.length; n++) {
								e.getItem(s[n]).$checked=this.getValue();
							}
							var h=this.getValue()?[].concat(s):[];
							i.Dg(s[0], t, h), e.refresh();
						},
						onChange:function() {
							var t=this.$view.querySelector('label'), i=I.combo;
							t.textContent=this.getValue()?i.unselectAll:i.selectAll;
						},
						onAfterRender:function() {
							var t=this.getParentView().getParentView();
							this.setValue(1*t.Ig());
						}
					}
				}, {
					view:'list',
					css:'webix_multilist',
					borderless:!0,
					autoheight:!0,
					yCount:5,
					type:'checklist',
					on:{
						onItemClick:function(t, i) {
							var e=this.getItem(t);
							e.$checked=e.$checked?0:1, this.refresh(t);
							var s=this.getParentView().getParentView();
							s.sb=new Date, s.Dg(t, i), s.config.selectAll && (e.$checked?s.Ig() && s.getBody().hi[0].setValue(1):s.getBody().hi[0].setValue(0));
						}
					}
				}, {
					view:'button',
					click:function() {this.getParentView().getParentView().hide(), k(function() {y('onEditEnd', []);});}
				}]
			}
		},
		Ig:function() {return (this.getValue() || '').split(this.config.separator).length===this.getList().count();},
		vg:function(t) {return t.rows[1];},
		getButton:function() {return this.getBody().getChildViews()[2];},
		getList:function() {return this.getBody().getChildViews()[1];},
		$init:function() {this.bb={}, this.oa= !0, this.$ready.push(this.Ag);},
		Ag:function() {
			var t=this.getList();
			if(t.config.dataFeed) {
				var i=this;
				t.attachEvent('onAfterLoad', function() {i.setValue(i.P.value);}), t.getItem=function(t) {return this.data.pull[t] || i.bb[t];};
			}
			this.config.master && !this.config.selectAll && this.getBody().getChildViews()[0].hide();
		},
		$enterKey:function(t, i) {
			if(i.count && i.count()) if(this.isVisible()) {
				var e=i.getSelectedId(!1, !0);
				e && this.Dg(e), this.hide();
			} else this.show(this.va); else this.isVisible() && this.hide();
		},
		_a:function() {
			var t=this.getList();
			t.select && t.unselect();
		},
		setValue:function(t) {
			var i, e=this.getList(), s=[], n={}, h=[];
			for($(t=t || [])?e.config.dataFeed && (t=this.db(t)):t=t.toString().split(this.config.separator), i=0; i<t.length; i++) n[t[i]]=1, e.getItem(t[i]) && (this.bb && (this.bb[t[i]]=_(e.getItem(t[i]))), s.push(this.getItemText(t[i])));
			for(e.data.each(function(t) {t.$checked?n[t.id] || (t.$checked=0, h.push(t.id)):n[t.id] && (t.$checked=1, h.push(t.id));}, this, !0), i=0; i<h.length; i++) e.refresh(h[i]);
			return this.P.value=t.length?t.join(this.config.separator):'', s;
		},
		getValue:function() {return this.P.value;},
		wg:function() {
			var t;
			this.P.master && (t=oi(this.P.master).getInputNode()), (t=t || this.va) && t.focus();
		},
		db:function(t) {
			if(t && $(t)) {
				for(var i=[], e=0; e<t.length; e++) t[e].id?(this.bb[t[e].id]=_(t[e]), i.push(t[e].id)):i.push(t[e]);
				t=i;
			}
			return t;
		}
	}, cr=(H.protoUI(ur, ar.view), H.protoUI({
		name:'datasuggest',
		defaults:{
			type:'dataview',
			fitMaster:!1,
			width:0,
			body:{
				xCount:3,
				autoheight:!0,
				select:!0
			}
		}
	}, rr.view), {
		name:'gridsuggest',
		defaults:{
			type:'datatable',
			fitMaster:!1,
			width:0,
			body:{
				navigation:!0,
				autoheight:!0,
				autowidth:!0,
				select:!0
			},
			filter:function(t, i) {return 0===this.config.template(t).toString().toLowerCase().indexOf(i.toLowerCase());}
		},
		$init:function(t) {t.body.columns || (t.body.autoConfig= !0), t.template || (t.template=S(this.Tg, this));},
		Tg:function(t) {
			var i=this.getBody(), e=this.config.textValue || i.config.columns[0].id;
			return i.getText(t.id, e);
		}
	}), fr=(H.protoUI(cr, rr.view), {
		name:'mentionsuggest',
		defaults:{
			symbol:'@',
			filter:function(t, i) {
				var e=this.P.symbol;
				return -1!==(i=i.substring(0, this.Fg)).indexOf(e) && (!!(i=i.substring(i.lastIndexOf(e)+e.length)).length && -1!==(t.id?this.getItemText(t.id):t.text || t.value).toString().toLowerCase().indexOf(i.toLowerCase()));
			}
		},
		$init:function() {this.attachEvent('onValueSuggest', this.$g);},
		$enterKey:function(t) {
			var i;
			this.isVisible() && (gt(t), this.P.master && (i=oi(this.P.master)), i && i.callEvent && i.callEvent('onEnter'));
			return rr.api.$enterKey.apply(this, arguments);
		},
		$g:function() {this.va && (this.Fg=Dt(this.va).start);},
		mg:function() {
			return {
				pos:this.Fg,
				symbol:this.P.symbol
			};
		},
		wg:function() {},
		gg:function(t) {
			var i=this.P.symbol, e=this.va.value, s=e.substring(this.Fg);
			e=(e=e.substring(0, this.Fg)).substring(0, e.lastIndexOf(i)+i.length)+t, this.va.value=e+s, $t(this.va, e.length);
		},
		dg:!1
	}), lr=(H.protoUI(fr, rr.view), {
		name:'daterangesuggest',
		defaults:{
			type:'daterange',
			body:{
				view:'daterange',
				icons:!0,
				button:!0,
				borderless:!0
			}
		},
		getValue:function() {return this.getRange().getValue();},
		setValue:function(t) {this.getRange().setValue(_(t));},
		getRange:function() {return this.getBody();},
		getButton:function() {return this.getBody().getChildViews()[1].getChildViews()[1];},
		Vg:function(t, i) {
			var e=oi(this.P.master);
			e?(e.setValue(t), i && this.hide()):this.setValue(t);
		},
		_g:function() {
			var t=this.getRange();
			t.attachEvent('onAfterDateSelect', S(function(t) {this.Vg(t);}, this)), t.attachEvent('onDateClear', S(function(t) {this.Vg(t);}, this)), t.attachEvent('onTodaySet', S(function(t) {this.Vg(t);}, this));
		}
	}), dr=(H.protoUI(lr, rr.view), {
		$cssName:'datepicker',
		name:'daterangepicker',
		$init:function(t) {delete t.type, delete t.multiselect, delete this.P.multiselect;},
		defaults:{
			value:{},
			separator:' - '
		},
		Tm:function() {
			var t=this.P;
			t.suggest?t.popup=t.suggest:t.popup || (t.popup=t.suggest=this.suggest_setter({
				view:'daterangesuggest',
				body:{
					timepicker:t.timepicker,
					calendarCount:t.calendarCount,
					height:250+(t.button || t.icons?30:0)
				}
			})), this.oh=function() {};
		},
		$prepareValue:function() {return $n.api.$prepareValue.apply(this, arguments);},
		$d:function(t) {return 'string'== typeof t && (t=I.parseFormatDate(t)), isNaN(1*t)?null:t;},
		$compareValue:function(t, i) {
			var e=Fh.api.$compareValue, s=e.call(this, t.start, i.start), n=e.call(this, t.end, i.end);
			return s && n;
		},
		$setValue:function(t) {t=t || {}, this.P.text=(t.start?this.zm(t.start):'')+(t.end?this.P.separator+this.zm(t.end):''), this.Rm();},
		getValue:function() {
			var t=this.P.value;
			if(this.Jp) {
				if(this.P.editable) {
					var i=this.Vm || I.dateFormatDate, e=(this.getInputNode().value || '').split(this.P.separator);
					t=this.zg(i, {
						start:e[0],
						end:e[1]
					});
				}
			} else t=this.$prepareValue(t) || null;
			if(this.P.stringResult) {
				var s=I.parseFormatStr;
				return this.zg(s, t);
			}
			return t || null;
		},
		zg:function(t, i) {return i.start && (i.start=t(i.start)), i.end && (i.end=t(i.end)), i;}
	}), vr=(H.protoUI(dr, Fh.view), H.protoUI({
		name:'excelbar',
		defaults:{
			padding:0,
			type:'line'
		},
		$init:function(t) {
			t.cols=[{
				view:'tabbar',
				options:[''],
				optionWidth:200,
				borderless:!0,
				on:{onaftertabclick:function() {this.getParentView().callEvent('onExcelSheetSelect', [this.getValue()]);}}
			}];
		},
		getValue:function() {return this.getInput().getValue();},
		setValue:function(t) {return this.getInput().setValue(t);},
		getInput:function() {return this.getChildViews()[0];},
		setSheets:function(t) {
			var i=this.getInput();
			i.config.options=t, i.refresh();
		}
	}, eh.view), {
		name:'vscroll',
		$apiOnly:!0,
		defaults:{
			scroll:'x',
			scrollPos:0,
			scrollSize:18,
			scrollVisible:1,
			zoom:1
		},
		$init:function(t) {
			var i=t.scroll || 'x', e=this.Vt=C(t.container);
			e.className+=' webix_vscroll_'+i, e.innerHTML='<div class=\'webix_vscroll_body\'></div>', Kt(e, 'scroll', this.Bg, {bind:this}), this.jh=0;
		},
		$skin:function() {this.defaults.scrollStep=Li.rowHeight;},
		reset:function() {this.config.scrollPos=0, this.Vt['x'==this.config.scroll?'scrollLeft':'scrollTop']=0;},
		Hg:function(t) {return 15e5<t?(this.P.zoom=t/1e6, t=1e6):this.P.zoom=1, t;},
		scrollWidth_setter:function(t) {return t=this.Hg(t), this.Vt.firstChild.style.width=t+'px', t;},
		scrollHeight_setter:function(t) {return t=this.Hg(t), this.Vt.firstChild.style.height=t+'px', t;},
		sizeTo:function(t, i, e) {
			t=t-(i || 0)-(e || 0);
			var s=this.P.scrollSize;
			q.isIE && s && (s+=1), s || !this.P.scrollVisible || q.$customScroll || (this.Vt.style.pointerEvents='none', s=14), s?(this.Vt.style.display='block', i && (this.Vt.style.marginTop=i+'px'), this.Vt.style['x'==this.P.scroll?'width':'height']=Math.max(0, t)+'px', this.Vt.style['x'==this.P.scroll?'height':'width']=s+'px'):this.Vt.style.display='none', this.jh=t;
		},
		getScroll:function() {return Math.round(this.P.scrollPos*this.P.zoom);},
		getSize:function() {return Math.round((this.P.scrollWidth || this.P.scrollHeight)*this.P.zoom);},
		Rg:function() {
			var t=this.getScroll(), i=Math.max(this.getSize()-this.jh, 0);
			i<t && this.scrollTo(i);
		},
		scrollTo:function(t) {
			t<0 && (t=0);
			var i=this.P;
			if((t/=i.zoom)<0 && (t=0), t!=this.P.scrollPos) return this.Vt['x'==i.scroll?'scrollLeft':'scrollTop']=t, this.Eg(t, !0), !0;
		},
		Bg:function() {
			var t=this.Vt['x'==this.P.scroll?'scrollLeft':'scrollTop'];
			Math.floor(t)!=Math.floor(this.P.scrollPos) && this.Eg(t, !1);
		},
		Eg:function(t, i) {
			var e=this.P.scrollWidth || this.P.scrollHeight;
			t>=e-this.jh/(i?this.P.zoom:1) && (t=Math.max(0, e-this.jh/this.P.zoom)), this.P.scrollPos=t || 0, this.callEvent('onScroll', [this.getScroll()]);
		},
		activeArea:function(t, i) {
			this.Pg=i, Kt(t, 'wheel', this.jg, {
				bind:this,
				passive:!1
			}), this.Ng(t);
		},
		Ng:function(t) {
			!q.touch && window.navigator.pointerEnabled && (yt(t, 'webix_scroll_touch_ie', !0), Kt(t, 'pointerdown', function(t) {'touch'!=t.pointerType && 'pen'!=t.pointerType || (this.qe=Yi.Ps(t), this.Lg=this.getScroll());}, {bind:this}), Zt(document.body, 'pointermove', function(t) {
				var i;
				this.qe && (this.Ge=Yi.Ps(t), 'x'==this.P.scroll?i=this.Ge.x-this.qe.x:'y'==this.P.scroll && (i=this.Ge.y-this.qe.y), i && 5<Math.abs(i) && this.scrollTo(this.Lg-i));
			}, {bind:this}), Zt(window, 'pointerup', function() {this.qe && (this.qe=this.Ge=null);}, {bind:this}));
		},
		jg:function(t) {
			var i=0, e=0===t.deltaMode?30:1;
			return !t.ctrlKey && (t.deltaX && Math.abs(t.deltaX)>Math.abs(t.deltaY)?this.Pg && this.P.scrollVisible && (i=t.deltaX/e):!this.Pg && this.P.scrollVisible && (i=R(t.deltaY)?t.detail:t.deltaY/e), q.isSafari && (this.Og=t.target), i && this.scrollTo(this.getScroll()+i*this.P.scrollStep)?gt(t):void 0);
		}
	}), _r=(H.protoUI(vr, g, Si), {
		Wg:function() {
			this.Ug= !0, this.Yg={}, this.define('select', 'area'), this.attachEvent('onAfterScroll', function() {this.refreshSelectArea();}), this.attachEvent('onAfterRender', function() {
				this.refreshSelectArea(), this.qg();
			}), this.attachEvent('onColumnResize', function() {this.refreshSelectArea();}), this.attachEvent('onBeforeColumnHide', function(t) {this.Gg=this.getColumnIndex(t);}), this.attachEvent('onAfterColumnHide', function() {this.Xg(this.Gg);}), this.attachEvent('onSyncScroll', this.Jg), this.Kg=function(t, i, e, s) {
				if(t.row && i.row) {
					if(e) return this.addSelectArea(t, i, !0), !(this.Ug= !0);
					if(!this.callEvent('onAreaDrag', [t, i, s])) return !1;
					this.Zg || !this.Ug || this.P.multiselect && s && s.ctrlKey || (this.removeSelectArea(), this.Ug= !1);
				}
			}, this.attachEvent('onBeforeAreaAdd', this.Qg), Kt(this.st, q.mouse.down, this.tw, {bind:this});
		},
		Jg:function(t, i, e) {Yi.ms(this.iw, t, i, e), Yi.ms(this.ew, t, i, e), Yi.ms(this.sw, t, i, e);},
		nw:!0,
		Xg:function(t) {
			var i=this.Yg;
			for(var e in i) {
				var s=i[e];
				if(this.getColumnIndex(s.start.column)<0) if(s.start.column==s.end.column) this.removeSelectArea(s.name); else {
					var n=this.columnId(t);
					n && this.hw(s.name, {
						row:s.start.row,
						column:n
					}, null);
				} else if(this.getColumnIndex(s.end.column)<0) {
					var h=this.columnId(t-1);
					h && this.hw(s.name, null, {
						row:s.end.row,
						column:h
					});
				}
			}
		},
		rw:function(t, i, e, s) {
			var n, h, r, o, a, u, c, f;
			if(i) {
				n=this.getColumnIndex(i.start.column), h=this.getColumnIndex(i.end.column), r=this.getIndexById(i.start.row), o=this.getIndexById(i.end.row), a=this.getColumnIndex(t.column), u=this.getIndexById(t.row), c=this.getIndexById(i.init.row), f=this.getColumnIndex(i.init.column), a<n || 'left'==e?'left'===e && s.ctrl?(n=this.ow(c, n, e), h=f):'left'===e && f<h?h--:n=a:(h<=a || 'right'==e) && ('right'==e && s.ctrl?(h=this.ow(c, h, e), n=f):'right'==e && n<f?n++:h=a), u<r || 'up'==e?'up'==e && s.ctrl?(r=this.ow(r, f, e), o=c):'up'==e && c<o?o--:r=u:(o<u || 'down'==e) && ('down'==e && s.ctrl?(o=this.ow(o, f, e), r=c):'down'==e && r<c?r++:o=u);
				var l={
					row:this.getIdByIndex(r),
					column:this.columnId(n)
				}, d={
					row:this.getIdByIndex(o),
					column:this.columnId(h)
				};
				this.callEvent('onBeforeBlockSelect', [l, d, !0]) && (this.hw(i.name, l, d), this.callEvent('onSelectChange', []), this.callEvent('onAfterBlockSelect', [l, d]));
			}
		},
		ow:function(t, i, e) {
			var s=this.config.columns, n=this.data.order, h=this.data.pull[n[t]], r=s[i].id, o=0;
			if('right'==e) for(var a=i+1; a<s.length; a++) {
				if(h[s[a].id]) {
					o=a;
					break;
				}
				o=a;
			} else if('left'==e) {
				for(var u=i-1; 0<=u; u--) if(h[s[u].id]) {
					o=u;
					break;
				}
			} else if('down'==e) for(var c=t+1; c<n.length; c++) {
				if(this.getItem(n[c])[r]) {
					o=c;
					break;
				}
				o=c;
			} else if('up'==e) for(var f=t-1; 0<=f; f--) if(this.getItem(n[f])[r]) {
				o=f;
				break;
			}
			return o;
		},
		hw:function(t, i, e, s) {
			var n=this.Yg[t];
			if(!n) return !1;
			var h=_(n), r={
				start:i || n.start,
				end:e || n.end
			};
			this.Qg(r), H.extend(n, r, !0), this.refreshSelectArea(), this.qg(h), s && this.callEvent('onSelectChange', []);
		},
		areaselect_setter:function(t) {return t && (this.Wg(), this.Wg=function() {}), this.define('blockselect', t), t;},
		addSelectArea:function(t, i, e, s, n, h) {
			var r, o, a, u, c;
			r=this.getIndexById(t.row), o=this.getIndexById(i.row), a=this.getColumnIndex(t.column), o<r && (c=r, r=o, o=c), (u=this.getColumnIndex(i.column))<a && (c=a, a=u, u=c), s=s || this.Zg || V(), this.Zg=null;
			var f={
				start:{
					row:this.getIdByIndex(r),
					column:this.columnId(a)
				},
				end:{
					row:this.getIdByIndex(o),
					column:this.columnId(u)
				}
			};
			if(n && (f.css=n), (h || !1===h) && (f.handle=h), this.Yg[s]) return this.hw(s, f.start, f.end, !0);
			f.handle= !0, f.name=s, f.init=f.start, this.callEvent('onBeforeAreaAdd', [f]) && (this.aw=s, e || this.removeSelectArea(), this.Yg[f.name]=f, this.uw.push(f), this.refreshSelectArea(), this.qg(), this.callEvent('onAfterAreaAdd', [f]), this.callEvent('onSelectChange', []));
		},
		cw:function() {
			var t=ft('DIV');
			return t.className='webix_area_selection_layer', t.style.top=this.lw+'px', t;
		},
		refreshSelectArea:function() {
			var t, i, e, s, n=null, h=null, r=null, o=this.P.prerender;
			if(this.dw) {
				t=this.vw(o), i=this._w(!0===o), this.iw || (this.iw=this.cw(), this.st.childNodes[1].appendChild(this.iw), this.ew=this.cw(), this.st.childNodes[0].appendChild(this.ew), this.sw=this.cw(), this.st.childNodes[2].appendChild(this.sw)), this.iw.innerHTML='', this.ew.innerHTML='', this.sw.innerHTML='';
				var a=this.P.leftSplit, u=this.P.rightSplit;
				for(e in this.Yg) {
					s=this.Yg[e];
					var c=this.pw(s, t, i);
					if(null!==c) {
						var f=this.getColumnIndex(s.start.column), l=this.getColumnIndex(s.end.column);
						if(c.r0<=c.r1) {
							if(this.P.topSplit && this.P.topSplit<= void 0 && void 0<this.mw) return !1;
							f<a && (h=this.bw(c.r0, f, c.r1, Math.min(l, a-1))), c.c0<=c.c1 && (n=this.bw(c.r0, c.c0, c.r1, c.c1)), u && l>=this.gw && (r=this.bw(c.r0, Math.max(f, this.gw), c.r1, l)), (h || n || r) && this.ww(h, n, r, e, s.css, s.handle);
						}
					} else this.removeSelectArea(e);
				}
			}
		},
		pw:function(t, i, e) {
			var s, n, h=this.getIndexById(t.start.row), r=this.getIndexById(t.end.row), o=this.getColumnIndex(t.start.column), a=this.getColumnIndex(t.end.column);
			if(-1===o || -1===a) return null;
			if(-1===h || -1===r) return null;
			if(n=Math.min(e[1], r), this.P.topSplit) {
				if((s=h)>=this.P.topSplit && (s=Math.max(e[0]-this.P.topSplit, h)), n>=this.P.topSplit) {
					var u=this.at(this.getIdByIndex(r), t.end.column), c=this.at(this.getIdByIndex(this.P.topSplit-1), t.end.column);
					c.top+c.height>u.top+u.height && (n=this.P.topSplit-1);
				}
			} else s=Math.max(e[0], this.getIndexById(t.start.row));
			return {
				r0:s,
				r1:n,
				c0:Math.max(i[0], o),
				c1:Math.min(this.gw?i[1]-1:i[1], a)
			};
		},
		bw:function(t, i, e, s) {return [this.at(this.getIdByIndex(t), this.columnId(i)), this.at(this.getIdByIndex(e), this.columnId(s))];},
		ww:function(t, i, e, d, v, s) {
			var n, h, r=this.Yg[d], _=0;
			this.P.topSplit && (_=this.xw(r.start, !0));
			var o=function(t, i, e, s, n) {
				var h, r, o, a, u, c, f={
					top:1,
					right:1,
					bottom:1,
					left:1
				};
				for(h in s && delete f.left, n && delete f.right, r=e.top-i.top+e.height-1, o=e.left-i.left+e.width, f) {
					a=i.top+_, 'bottom'==h && (a=e.top+e.height), u=i.left, 'right'==h && (u=e.left+e.width), c='top'==h || 'bottom'==h, t.appendChild(ft('DIV', {
						'class':'webix_area_selection webix_area_selection_'+h+(v?' '+v:''),
						style:'left:'+u+'px;top:'+a+'px;'+(c?'width:'+o+'px;':'height:'+(r-_)+'px;'),
						webix_area_name:d
					}, ''));
					var l=t.lastChild;
					'right'==h && (l.style.left=u-l.offsetWidth+'px'), 'bottom'==h && (l.style.top=a-l.offsetHeight+'px'), _ && ('top'==h && (l.style.display='none'), e.height==_ && 'bottom'==h && (l.style.display='none'));
				}
			};
			e && o(this.sw, e[0], e[1], !!i, !1), i && o(this.iw, i[0], i[1], !!t, !!e), t && o(this.ew, t[0], t[1], !1, !!i), s && (h=e?e[1]:i?i[1]:t[1], (n=e?this.sw:i?this.iw:this.ew).appendChild(ft('DIV', {
				'class':'webix_area_selection_handle'+(v?' '+v:''),
				style:'left:'+(h.left+h.width)+'px;top:'+(h.top+h.height)+'px;',
				webix_area_name:d
			}, '')), _ && h.height==_ && (n.lastChild.style.display='none'));
		},
		yw:function(s) {
			if(s) {
				var t=function(t) {for(var i=t.childNodes, e=i.length-1; 0<=e; e--) i[e].getAttribute('webix_area_name')==s && t.removeChild(i[e]);};
				t(this.iw), t(this.ew), t(this.sw);
			}
		},
		removeSelectArea:function(t) {
			if(t && this.Yg[t]) {
				if(this.callEvent('onBeforeAreaRemove', [t])) {
					for(var i in this.qg(_(this.Yg[t]), !0), delete this.Yg[t], this.yw(t), this.uw=[], this.Yg) this.uw.push(this.Yg[i]);
					this.callEvent('onAfterAreaRemove', [t]);
				}
			} else for(var e in this.Yg) this.removeSelectArea(e);
		},
		tw:function(t) {
			var i=t.target, e=Ct(i);
			if(e && -1!=e.indexOf('webix_area_selection_handle')) {
				var s=i.getAttribute('webix_area_name');
				this.Zg=s;
				var n=this.Yg[s], h=this.at(n.start.row, n.start.column), r=this.at(n.end.row, n.end.column), o=this.P.prerender, a=this.getColumnIndex(n.start.column)<this.P.leftSplit?0:this.Mw, u=this.getColumnIndex(n.end.column)<this.P.leftSplit?0:this.Mw;
				this.Sw=[h.left+1+a-this.ph, h.top+1-(o?this.vh:0), {
					row:n.start.row,
					column:n.start.column
				}], this.kw=pt(this.st), this.Cw(t), this.$w=[r.left+1+u-this.ph, r.top+1-(o?this.vh:0)], this.Dw(!1, !1, t), gt(t), this.Iw();
			}
		},
		getSelectArea:function(t) {return this.Yg[t || this.aw];},
		getAllSelectAreas:function() {return this.Yg;},
		Qg:function(t, i) {
			var e, s, n, h, r, o, a, u, c, f, l, d, v, _=!1, p=t.start, m=t.end;
			for(f=r=this.getIndexById(p.row), l=n=this.getColumnIndex(p.column), d=o=this.getIndexById(m.row), v=h=this.getColumnIndex(m.column), e=r; e<=o; e++) {
				if(this.getItem(this.getIdByIndex(e)).$row && !i) _= !0, v=this.nl.length-1; else if(this.config.spans) for(s=n; s<=h; s++) (a=this.getSpan(this.getIdByIndex(e), this.columnId(s))) && ((u=this.getIndexById(a[0]))<f && (f=u, _= !0), (c=this.getColumnIndex(a[1]))<l && (_= !0, l=c), u+a[3]-1>d && (_= !0, d=u+a[3]-1), c+a[2]-1>v && (_= !0, v=c+a[2]-1));
			}
			_ && (t.start={
				row:this.getIdByIndex(f),
				column:this.columnId(l)
			}, t.end={
				row:this.getIdByIndex(d),
				column:this.columnId(v)
			}, this.Qg(t, !0));
		},
		qg:function(t, i) {
			var e;
			if(t && (e=this.getItemNode({
				row:t.start.row,
				column:t.start.column
			})) && e.removeAttribute('tabindex'), !i && this.uw.length) {
				var s=this.getSelectedId(!0)[0];
				(e=this.getItemNode(s)) && e.setAttribute('tabindex', '1');
			}
		}
	}), pr={
		filterByAll:function() {
			var r=!1;
			this.data.silent(function() {
				this.filter();
				var t=!1;
				for(var e in this.yo) if(this.isColumnVisible(e)) {
					var i=this.yo[e], s=i[2].getValue(i[0]), n=s;
					i[1].prepare && (n=i[1].prepare.call(i[2], n, i[1], this)), i[1].value=s;
					var h=i[1].compare;
					if(this.callEvent('onBeforeFilter', [e, n, i[1]])) if(i[2].$server || r) r= !0; else {
						if(''===n) continue;
						h?(h=this.Aw(e, h), this.filter(S(function(t, i) {return !!t && h(t[e], i, t);}, this), n, t)):this.filter(e, n, t), t= !0;
					}
				}
				r && this.Tw();
			}, this), r || (this.refresh(), this.callEvent('onAfterFilter', []));
		},
		Aw:function(t, h) {
			var i=this.getColumnConfig(t), r=i?i.optionslist:null;
			return r?('string'!= typeof r && (r=','), function(t, i, e) {
				if(!t) return !1;
				for(var s=t.toString().split(r), n=0; n<s.length; n++) if(h(s[n], i, e)) return !0;
			}):h;
		},
		filterMode_setter:function(t) {return H.extend(this.data.io, t, !0);},
		getFilter:function(t) {
			var i=this.yo[t];
			return i && i[2].Ld?i[2].Ld(i[0]):i && i[2].getInputNode?i[2].getInputNode(i[0]):null;
		},
		registerFilter:function(t, i, e) {this.yo[i.columnId]=[t, i, e];},
		collectValues:function(t, i) {
			var e=this.getColumnConfig(t), s=i && i.visible?null:e.collection, n={values:s?this.Tl.call(s, 'id', 'value'):this.Tl(e.id, e.id)};
			return this.callEvent('onCollectValues', [t, n]), n.values;
		},
		Tl:function(e, s) {
			var n={'':!0}, h=[];
			if(this.data.each(function(t) {
				var i=t?t[e]:'';
				0===i && (i='0'), 'object'==M(i) && (i=String(i)), i===undefined || n[i] || (n[i]= !0, h.push({
					id:i,
					value:t[s]
				}));
			}, this, !0), h.length) {
				var t='string'== typeof h[0].value?'string':'raw';
				h.sort(this.data.sorting.create({
					as:t,
					by:'value',
					dir:'asc'
				}));
			}
			return h;
		},
		Tw:function() {
			var i=this;
			this.loadNext(0, 0, 0, 0, 1).then(function(t) {i.editStop && i.editStop(), i.clearAll(!0), i.parse(t), i.callEvent('onAfterFilter', []);});
		}
	}, mr={
		hover_setter:function(t) {
			var s=this;
			return t && !this.Fw && (this.Lu(), this.config.experimental= !0, this.attachEvent('onMouseMoving', function(t) {
				var i=s.locate(t);
				!i && q.isEdge && t.relatedTarget && (i=s.locate(t.relatedTarget));
				var e=i?i.row:null;
				s.Vw!=e && (s.Vw && s.removeRowCss(s.Vw, s.P.hover), s.Vw=e, s.Vw && s.addRowCss(s.Vw, s.P.hover));
			}), Kt(this.$view, 'mouseout', function(t) {
				var i=t.target;
				s.Vw && document.body.contains(i) && ((t.relatedTarget?s.locate(t.relatedTarget):null) || (s.removeRowCss(s.Vw, s.P.hover), s.Vw=null));
			}), this.Fw=1), t;
		},
		select_setter:function(t) {return !this.select && t && (H.extend(this, this.Bw.zw, !0), !0===t?t='row':'multiselect'==t && (t='row', this.P.multiselect= !0), this.Bw[t], H.extend(this, this.Bw[t], !0)), t;},
		getSelectedId:function(t) {return t?[]:'';},
		getSelectedItem:function(t) {return Ne.getSelectedItem.call(this, t);},
		Bw:{
			zw:{
				Hw:' webix_cell_select',
				$init:function() {this.Rw(), this.on_click.webix_cell=S(this.Ew, this), this.Pw=this.Sc=function() {this.unselect();}, this.data.attachEvent('onStoreUpdated', S(this.yc, this)), this.data.attachEvent('onSyncApply', S(this.jw, this)), this.data.attachEvent('onClearAll', S(this.Pw, this)), this.data.attachEvent('onAfterFilter', S(this.Sc, this)), this.data.attachEvent('onIdChange', S(this.Cc, this)), this.$ready.push(Ne.Dc);},
				Cc:function(t, i) {
					for(var e=0; e<this.Nw.length; e++) this.Nw[e]==t && (this.Nw[e]=i);
					for(var s=0; s<this.uw.length; s++) {
						var n=this.uw[s];
						n.row==t && (t=this.Lw(n), n.row=i, i=this.Lw(n), n.id=i, delete this.Ow[t], this.Ow[i]= !0);
					}
				},
				yc:function(t, i, e) {'delete'==e && this.unselect(t);},
				jw:function() {
					for(var t=this.uw.length-1; 0<=t; t--) {
						var i=this.uw[t].row;
						this.exists(i) || (this.uw.splice(t, 1), delete this.Ow[i]);
					}
				},
				Rw:function() {this.uw=[], this.Ow={}, this.Nw=[];},
				isSelected:function(t, i) {
					var e;
					return e=R(i)?'object'===M(t)?this.Lw(t):t:this.Lw({
						row:t,
						column:i
					}), this.Ow[e];
				},
				getSelectedId:function(t, i) {
					var e;
					if(1<this.uw.length || t) {
						if(e=[].concat(this.uw), i) for(var s=0; s<e.length; s++) e[s]=e[s].id;
					} else if(e=this.uw[0], i && e) return e.id;
					return e;
				},
				Ww:function() {return this.row;},
				Ao:function(t, i) {
					var e=this.Lw(t);
					if(null!==e) {
						if(-1===i) return this.Uw(t);
						if(t.id=e, t.toString=this.Ww, !this.callEvent('onBeforeSelect', [t, i])) return !1;
						if(!this.Ow[e] || !i && 1!=this.uw.length) return i || this.Yw(), this.uw.push(t), this.Ow[e]= !0, this.callEvent('onAfterSelect', [t, i]), this.qw(this.Gw(t)), !0;
					}
				},
				Yw:function() {
					if(!this.uw.length) return !1;
					for(var t=0; t<this.uw.length; t++) if(!this.callEvent('onBeforeUnSelect', [this.uw[t]])) return !1;
					for(var i=0; i<this.Nw.length; i++) this.data.removeMark(this.Nw[i], 'webix_selected');
					var e=this.P.columns;
					if(e) for(var s=0; s<e.length; s++) e[s].$selected=null;
					var n=this.uw;
					this.Rw();
					for(var h=0; h<n.length; h++) this.callEvent('onAfterUnSelect', [n[h]]);
					return !0;
				},
				unselectAll:function() {this.clearSelection();},
				selectAll:function() {this.selectRange();},
				clearSelection:function() {this.Yw() && (this.callEvent('onSelectChange', []), this.render());},
				Uw:function(t) {
					var i=this.Lw(t);
					if(!i && this.uw.length && (this.clearSelection(), this.callEvent('onSelectChange', [])), this.Ow[i]) {
						if(!this.callEvent('onBeforeUnSelect', [t])) return !1;
						for(var e=0; e<this.uw.length; e++) if(this.uw[e].id==i) {
							this.uw.splice(e, 1);
							break;
						}
						delete this.Ow[i], this.callEvent('onAfterUnSelect', [t]), this.qw(0, this.Xw(t));
					}
				},
				Jw:function(t) {
					var i=this.getItem(t);
					return this.data.addMark(i.id, 'webix_selected', 0, {$count:0}, !0);
				},
				qw:function(t) {t && this.Nw.push(t), this.Ac || (this.render(), this.callEvent('onSelectChange', []));},
				Ew:function(t, i) {
					var e=t.ctrlKey || t.metaKey || 'touch'==this.P.multiselect, s=t.shiftKey;
					if(this.P.multiselect || 'multiselect'==this.P.select || 'area'==this.P.select || (e=s= !1), s && this.uw.length) {
						var n=this.uw[this.uw.length-1];
						this.Kw(i, n);
					} else e && this.Ow[this.Lw(i)]?this.Uw(i):this.Ao({
						row:i.row,
						column:i.column
					}, e);
				},
				Zw:function(t, i, e) {
					var s=this.P.columns;
					if(i) {
						for(var n=[], h=0; h<s.length; h++) s[h].$selected && n.push(s[h]);
						s=n;
					}
					for(var r=this.data.order, o=0, a=0; a<r.length; a++) {
						var u=this.getItem(r[a]);
						if(u) {
							var c=this.data.getMark(u.id, 'webix_selected');
							if(c || i) {
								for(var f=0, l=0; l<s.length; l++) {
									var d=s[l].id;
									if(e || i || c[d]) {
										if(!t) return {
											row:r[a],
											column:d
										};
										u[d]=t(u[d], r[a], d, o, f), f++;
									}
								}
								o++;
							}
						}
					}
				}
			},
			row:{
				Hw:' webix_row_select',
				Lw:function(t) {return t.row;},
				select:function(t, i) {t && (t=t.toString()), this.data.exists(t), this.Ao({row:t}, i);},
				Gw:function(t) {return this.Jw(t.row).$row= !0, t.row;},
				unselect:function(t) {this.Uw({row:t});},
				Xw:function(t) {return this.data.removeMark(t.row, 'webix_selected', 0, 1), t.row;},
				mapSelection:function(t) {return this.Zw(t, !1, !0);},
				Kw:function(t, i) {return this.selectRange(t.row, i.row);},
				selectRange:function(t, i, e) {
					R(e) && (e= !0);
					var s=t?this.getIndexById(t):0, n=i?this.getIndexById(i):this.data.order.length-1;
					if(n<s) {
						var h=s;
						s=n, n=h;
					}
					this.Ac= !0;
					for(var r=s; r<=n; r++) {
						var o=this.getIdByIndex(r);
						if(!o) {
							t && this.select(t);
							break;
						}
						this.select(o, e);
					}
					this.Ac= !1, this.qw();
				}
			},
			cell:{
				Lw:function(t) {return t.column?t.row+'_'+t.column:null;},
				select:function(t, i, e) {
					this.data.exists(t), this.Ao({
						row:t,
						column:i
					}, e);
				},
				Gw:function(t) {
					var i=this.Jw(t.row);
					return i.$count++, i[t.column]= !0, t.row;
				},
				unselect:function(t, i) {
					this.Uw({
						row:t,
						column:i
					});
				},
				Xw:function(t) {
					var i=this.Jw(t.row);
					return i.$count--, i[t.column]= !1, i.$count<=0 && this.data.removeMark(t.row, 'webix_selected'), t.row;
				},
				mapSelection:function(t) {return this.Zw(t, !1, !1);},
				Kw:function(t, i) {return this.selectRange(t.row, t.column, i.row, i.column);},
				selectRange:function(t, i, e, s, n) {
					R(n) && (n= !0);
					var h=t?this.getIndexById(t):0, r=e?this.getIndexById(e):this.data.order.length-1, o=i?this.getColumnIndex(i):0, a=s?this.getColumnIndex(s):this.nl.length-1;
					if(r<h) {
						var u=h;
						h=r, r=u;
					}
					if(a<o) {
						var c=o;
						o=a, a=c;
					}
					this.Ac= !0;
					for(var f=h; f<=r; f++) for(var l=o; l<=a; l++) this.select(this.getIdByIndex(f), this.columnId(l), n);
					this.Ac= !1, this.qw();
				}
			},
			column:{
				Hw:' webix_column_select',
				Lw:function(t) {return t.column;},
				Ww:function() {return this.column;},
				select:function(t, i) {this.Ao({column:t}, i);},
				Gw:function(t) {this.P.columns[this.getColumnIndex(t.column)].$selected= !0, this.Ac || this.Qw();},
				unselect:function(t) {this.Uw({column:t});},
				Xw:function(t) {this.P.columns[this.getColumnIndex(t.column)].$selected=null, this.Qw();},
				mapSelection:function(t) {return this.Zw(t, !0, !1);},
				Kw:function(t, i) {return this.selectRange(t.column, i.column);},
				selectRange:function(t, i, e) {
					R(e) && (e= !0);
					var s=t?this.getColumnIndex(t):0, n=i?this.getColumnIndex(i):this.nl.length-1;
					if(n<s) {
						var h=s;
						s=n, n=h;
					}
					this.Ac= !0;
					for(var r=s; r<=n; r++) this.select(this.columnId(r), e);
					this.Ac= !1, this.Qw(), this.qw();
				},
				jw:function() {}
			},
			area:{
				Lw:function(t) {return t.row+'_'+t.column;},
				getSelectedId:function(t) {
					var i=this.getSelectArea(), e=[];
					if(i) if(!t || i.start.row==i.end.row && i.start.column==i.end.column) e.push(i.end); else {
						var s=this.getIndexById(i.start.row), n=this.getIndexById(i.end.row);
						if(-1==s || -1==n) return e;
						for(var h=this.getColumnIndex(i.start.column), r=this.getColumnIndex(i.end.column), o=s; o<=n; o++) for(var a=h; a<=r; a++) e.push({
							row:this.getIdByIndex(o),
							column:this.columnId(a)
						});
					}
					return t?e:e[0];
				},
				unselect:function() {this.Uw();},
				Uw:function() {this.removeSelectArea(), this.callEvent('onSelectChange', []);},
				mapSelection:function(t) {
					var i=this.getSelectArea();
					if(i) for(var e=this.getColumnIndex(i.start.column), s=this.getColumnIndex(i.end.column), n=this.getIndexById(i.start.row), h=this.getIndexById(i.end.row), r=n; r<=h; r++) for(var o=this.data.order[r], a=this.getItem(o), u=e; u<=s; u++) {
						var c=this.nl[u].id;
						if(!t) return {
							row:o,
							column:c
						};
						a[c]=t(a[c], o, c, r-n, u-e);
					}
				},
				select:function(t, i, e) {
					this.data.exists(t), this.Ao({
						row:t,
						column:i
					}, e);
				},
				Kw:function(t, i) {this.rw(t, i);},
				Ao:function(t) {return this.addSelectArea(t, t, !1), !0;},
				jw:function() {this.uw.length && this.refreshSelectArea();}
			}
		}
	}, br={
		blockselect_setter:function(t) {return t && this.nw && (q.touch?this.attachEvent('onLongTouch', this.tx):Kt(this.Vt, q.mouse.down, this.tx, {bind:this}), Kt(this.Vt, q.mouse.move, this.ix, {bind:this}), this.nw=this.Sw=this.$w= !1, this.attachEvent('onAfterScroll', this.nx), H.extend(this, Gt, !0), this.attachEvent('onBeforeAutoScroll', function() {return this.$w;})), t;},
		nw:!0,
		hx:function(t, i) {
			for(var e=t.target; e;) {
				if(e.getAttribute && e.getAttribute('webixignore')) return !1;
				if(e==i) return !0;
				e=e.parentNode;
			}
			return !1;
		},
		tx:function(t) {
			if((!this.P.subview || this==oi(t.target)) && this.hx(t, this.st)) {
				if(t.target && 'INPUT'==t.target.tagName || this.Cv) return;
				this.kw=pt(this.st);
				var i=q.touch?t:bt(t);
				this.Sw=[i.x-this.kw.x, i.y-this.kw.y], gt(t), this.Iw();
			}
		},
		Iw:function() {var i=this, e=Zt(document.body, q.mouse.up, function(t) {return Qt(e), i.ox(t);});},
		ox:function(t) {this.ax && (this.Dw('select', !0, t), this.ax=dt(this.ax)), Mt(document.body, 'webix_noselect'), this.Sw=this.$w= !1, this.rt && (this.rt=window.clearTimeout(this.rt));},
		nx:function() {this.$w && k(this.Dw, this, [!1, !1]);},
		Dw:function(t, i, e) {
			var s;
			this.Sw[2] || (this.Sw[2]=this.ux.apply(this, this.Sw)), s=this.Sw[2];
			var n=this.ux.apply(this, this.$w);
			if(this.callEvent('onBeforeBlockSelect', [s, n, i, e])) {
				if((!this.Kg || !1!==this.Kg(s, n, i, e)) && s.row && n.row) if('select'===t) this.Yw(), this.Kw(s, n); else {
					var h, r, o, a;
					if('box'===t) h=Math.min(this.Sw[0], this.$w[0]), o=Math.max(this.Sw[0], this.$w[0]), r=Math.min(this.Sw[1], this.$w[1]), a=Math.max(this.Sw[1], this.$w[1]); else {
						var u=this.at(s.row, s.column), c=this.at(n.row, n.column), f=this.getScrollState(), l=u.width, d=c.width;
						this.cx && this.Sw[0]>this.Mw+this.vx?u.left+=this.Mw+this.vx:this.Mw?this.Sw[0]>this.Mw && (u.left<f.x?(l-=f.x-u.left, u.left=this.Mw):u.left+=this.Mw-f.x):u.left-=f.x, this.cx && this.$w[0]>this.Mw+this.vx?c.left+=this.Mw+this.vx:this.Mw?this.$w[0]>this.Mw && (c.left<f.x?(d-=f.x-c.left, c.left=this.Mw):c.left+=this.Mw-f.x):c.left-=f.x, this.P.prerender && (u.top-=this.vh, c.top-=this.vh), h=Math.min(u.left, c.left), o=Math.max(u.left+l, c.left+d), r=Math.min(u.top, c.top), a=Math.max(u.top+u.height, c.top+c.height), this.P.topSplit && (r+=this.xw(s)), this.rt && (this.rt=window.clearTimeout(this.rt)), !e || q.touch && !this.P.prerender || (this.rt=k(this.et, this, [bt(e)], 250));
					}
					var v=this.ax.style;
					v.left=h+'px', v.top=r+'px', v.width=o-h+'px', v.height=a-r+'px';
				}
				i && this.callEvent('onAfterBlockSelect', [s, n]);
			}
		},
		Cw:function() {this.ax=ft('div', {'class':'webix_block_selection'}, ''), this.st.appendChild(this.ax);},
		ix:function(t) {
			if(!1!==this.Sw) {
				this.$w || yt(document.body, 'webix_noselect');
				var i=q.touch?q.mouse.context(t):bt(t), e=[i.x-this.kw.x, i.y-this.kw.y];
				if(Math.abs(this.Sw[0]-e[0])<5 && Math.abs(this.Sw[1]-e[1])<5) return;
				!1===this.$w && this.Cw(t), this.$w=e, this.Dw(this.config.blockselect, !1, t), q.touch && gt(t);
			}
		},
		ux:function(t, i) {
			var e=!1, s=null, n=null;
			if(this.cx && t>this.Mw+this.vx?t+=this._h.getSize()-this.vx-this.Mw-this.cx:(!this.Mw || t>this.Mw) && (t+=this._h.getScroll()), this.P.topSplit && this.mw>this.P.topSplit) {
				var h=this.at(this.getIdByIndex(this.P.topSplit-1), this.columnId(0));
				h.top+h.height>i && (e= !0);
			}
			e || (i+=this.getScrollState().y), t<0 && (t=0), i<0 && (i=0);
			for(var r=this.P.columns, o=this.data.order, a=0, u=0; u<r.length; u++) if(t<=(a+=r[u].width)) {
				n=r[u].id;
				break;
			}
			n || (n=r[r.length-1].id), a=0;
			var c=this.data.$min || 0;
			if(this.P.fixedRowHeight) s=o[c+Math.floor(i/this.P.rowHeight)]; else for(var f=c; f<o.length; f++) if(i<=(a+=this._x(f))) {
				s=o[f];
				break;
			}
			return s || (s=o[o.length-1]), {
				row:s,
				column:n
			};
		},
		xw:function(t, i) {
			var e=0, s=this.getIndexById(t.row);
			if(s>=this.P.topSplit) {
				var n=this.at(this.getIdByIndex(s), t.column), h=this.at(this.getIdByIndex(this.P.topSplit-1), t.column);
				h.top+h.height>n.top && (e=h.top+h.height-(0<n.top || !i?n.top:0));
			}
			return e;
		}
	}, gr={
		resizeRow_setter:function(t) {return this.P.scrollAlignY= !1, this.P.fixedRowHeight= !1, this.resizeColumn_setter(t);},
		resizeColumn_setter:function(t) {return t && this.bx && (Kt(this.Vt, 'mousemove', this.gx, {bind:this}), Kt(this.Vt, 'mousedown', this.wx, {bind:this}), Kt(this.Vt, 'mouseup', this.xx, {bind:this}), this.bx= !1), t;},
		bx:!0,
		wx:function(t) {this.P.subview && this!=oi(t.target) || this.yx && (this.Cv=[bt(t), this.yx[2]], yt(document.body, 'webix_noselect'), ht());},
		xx:function() {this.Cv= !1, Mt(document.body, 'webix_noselect'), rt();},
		Mx:function() {
			if(!this.Av) {
				var t=this.yx[0], i=this.Cv[1], e=this.Fs(i);
				if(e) {
					var s, n=this.Cv[0];
					if('x'==t?(s=pt(i).x+this.yx[1]-pt(this.st).x, n=n.x, this.yx[1] || (e.cind-=i.parentNode.colSpan || 1)):(s=pt(i).y+this.yx[1]-pt(this.st).y+this.Jo, n=n.y, this.yx[1] || e.rind--), 0<=e.cind && 0<=e.rind) this.Av=[t, e, s], new si.resizearea({
						container:this.Vt,
						dir:t,
						eventPos:n,
						start:s,
						cursor:('x'==t?'col':'row')+'-resize'
					}).attachEvent('onResizeEnd', S(this.Sx, this));
					this.wx=this.yx= !1;
				}
			}
		},
		Sx:function(t) {
			if(this.Av) {
				var i=this.Av[0], e=this.Av[1], s=t-this.Av[2];
				if('x'==i) {
					this.P.rightSplit && e.cind+1>=this.gw && e.cind!==this.nl.length-1 && (e.cind++, s*= -1);
					var n=this.nl[e.cind], h=n.width;
					delete n.fillspace, delete n.adjust, this.Co(e.cind, h+s, !0, !0), this.$o();
				} else {
					var r=this.getIdByIndex(e.rind), o=this.kx(this.getItem(r));
					this.setRowHeight(r, o+s);
				}
				this.xx();
			}
			this.Av=null;
		},
		gx:function(t) {
			var i=null, e=this.P;
			if(this.yx && this.Cv) return this.Mx(t);
			var s=(t=t || event).target, n=!1;
			if('TD'!=s.tagName && 'TABLE'!=s.tagName) {
				var h=s.className || '', r='string'== typeof h && -1!=h.indexOf('webix_cell');
				if(!r || !e.drag) {
					var o='string'== typeof h && -1!=h.indexOf('webix_hcell');
					if(this.yx= !1, r || o) {
						var a=s.offsetWidth, u=s.offsetHeight, c=mt(t), f=e.resizeRow;
						'object'==M(f) && f.headerOnly && 0<(i=this.Fs(s)).cind && (f= !1), r && f && (f='object'==M(f) && f.size?f.size:3, c.y<f?(i || (i=this.Fs(s)), i.rind && (this.yx=['y', 0, s], n='row-resize')):u-c.y<f+1 && (this.yx=['y', u, s], n='row-resize'));
						var l=e.resizeColumn;
						'object'==M(l) && l.headerOnly && r && (l= !1), l && (l='object'==M(l) && l.size?l.size:3, c.x<l?(this.yx=['x', 0, s], n='col-resize'):a-c.x<l+1 && (this.yx=['x', a, s], n='col-resize'));
					}
					this.Cx && window.clearTimeout(this.Cx), this.Cx=k(this.$x, this, [n], n?100:0);
				}
			}
		},
		$x:function(t) {this.Dx!=t && (this.Dx=t, this.Vt.style.cursor=t || 'default');}
	};
	A('onDataTable', function(t, i) {q.touch && (Yi.$init(), i.scrollSize=0, Yi.$e && Yi.limit(), t.$ready.push(t.$touch));});
	var wr={
		$touch:function() {
			var t=this.P;
			t.scrollAlignY= !1, H.extend(this, !0===t.prerender?this.Ix:this.Ax);
			var i='';
			t.autowidth || !1===t.scrollX || (i+='x'), t.autoheight || !1===t.scrollY || (i+='y'), this.st.setAttribute('touch_scroll', i), Yi.Is(this.st.childNodes[1].firstChild), Yi.ms(this.st.childNodes[1].firstChild, 0, 0, '0ms'), this.gs(0, 0, '0ms');
		},
		Ix:{
			Tx:function(t, i) {
				Yi.ms(this.st.childNodes[1].firstChild, -t, -i, '0ms'), this.gs(-t, -i, '0ms'), this.callEvent('onAfterScroll', [{
					e:-t,
					f:-i
				}]);
			},
			Fx:function() {
				var t=Yi.vs(this.st.childNodes[1].firstChild);
				return {
					x:-t.e,
					y:-t.f
				};
			},
			$init:function() {
				this.attachEvent('onBeforeScroll', function() {Yi.Ze=this.st.childNodes[1].firstChild, Yi.Rs(Yi.Ze), Yi.bs=this;}), this.attachEvent('onTouchEnd', function() {Yi.bs=null;}), this.attachEvent('onAfterScroll', function(t) {
					t && (this.ph= -t.e, this.vh= -t.f, this._h && (this._h.P.scrollPos=this.ph), this.dh && (this.dh.P.scrollPos=this.vh));
				});
			},
			gs:function(t, i, e) {Yi.ms(this.st.childNodes[1].firstChild, t, i, e), this.P.leftSplit && Yi.ms(this.st.childNodes[0].firstChild, 0, i, e), this.P.rightSplit && Yi.ms(this.st.childNodes[2].firstChild, 0, i, e), this.P.header && Yi.ms(this.k.childNodes[1].firstChild, t, 0, e), this.P.footer && Yi.ms(this.el.childNodes[1].firstChild, t, 0, e), this.callEvent('onSyncScroll', [t, i, e]);},
			Ds:function() {}
		},
		Ax:{
			Tx:function(t, i) {
				k(function() {
					this.callEvent('onAfterScroll', [{
						e:-t,
						f:-i
					}]);
				}, this);
			},
			$scroll:{
				gravity:0,
				elastic:!1
			},
			$hasYScroll:function() {return 2<this.Vx-this.zx;},
			$init:function() {
				this.attachEvent('onAfterColumnHide', function() {this.Tx(0, 0);}), this.attachEvent('onBeforeScroll', function() {
					var t=Yi;
					t.Ze=this.st.childNodes[1].firstChild, t.Rs(t.Ze), t.Qe.left=this.ph, t.Qe.hidden=this._h.P.scrollVisible || this.dh.P.scrollVisible, t.Qe.dy=this.Vx, t.bs=this;
				}), this.attachEvent('onAfterRender', function() {this._h && this.P.scrollX && this._h.Rg(), this.dh && this.P.scrollY && this.dh.Rg();}), this.attachEvent('onAfterScroll', function(t) {
					if(t) {
						var i=this.ph!= -t.e, e=this.vh!= -t.f;
						Yi.bs=null, Yi.Bx=null, this.vh=0, this.ph=0;
						var s=Yi.config.translate;
						return Yi.config.translate='translate', this.gs(this._h?0:t.e, 0, 0), Yi.config.translate=s, this.ph= -t.e, this.vh= -t.f, this.Hx(), this.render(), i && (this._h && this._h.scrollTo(this.ph), this.callEvent('onScrollX', [])), e && (this.dh && this.dh.scrollTo(this.vh), this.callEvent('onScrollY', [])), !1;
					}
				});
			},
			gs:function(t, i, e) {i+=this.vh, t+=this.ph, Yi.ms(this.st.childNodes[1].firstChild, t, i, e), this.P.leftSplit && Yi.ms(this.st.childNodes[0].firstChild, 0, i, e), this.P.rightSplit && Yi.ms(this.st.childNodes[2].firstChild, 0, i, e), this.P.header && Yi.ms(this.k.childNodes[1].firstChild, t, 0, e), this.P.footer && Yi.ms(this.el.childNodes[1].firstChild, t, 0, e), this.callEvent('onSyncScroll', [t, i, e]);},
			Ds:function(t) {t.f-=this.vh, t.e-=this.ph;}
		}
	}, xr={
		$init:function() {this.data.attachEvent('onStoreUpdated', S(function(t) {t || this.Rx();}, this)), this.attachEvent('onStructureLoad', this.Rx), this.attachEvent('onStructureUpdate', this.Ex), this.attachEvent('onColumnResize', function(t, i, e, s) {s && this.Ex();}), this.attachEvent('onResize', this.Ex);},
		Rx:function() {
			for(var t=!1, i=this.nl, e=0; e<i.length; e++) i[e].adjust && ('header'==i[e].adjust || this.count()) && (t=this.Px(e, i[e].adjust, !0) || t);
			t && (this.$o(!0), this.Ex());
		},
		Ex:function() {
			var t=this.P.columns, i=[], e=0;
			if(t && !this.P.autowidth) for(var s=0; s<t.length; s++) {
				var n=t[s].fillspace;
				n && (e+=1*(i[s]=n) || 1);
			}
			e && this.jx(i, e);
		},
		jx:function(t, i) {
			var e=this.P.columns;
			if(e) {
				var s=this.me-this.Nx, n=!1;
				if(0<s) {
					for(var h=0; h<e.length; h++) t[h] || (s-=e[h].width || this.P.columnWidth);
					for(var r=0; r<t.length; r++) if(t[r]) {
						var o=Math.min(s, Math.round(s*t[r]/i));
						n=this.Co(r, o, !0) || n, s-=e[r].width, i-=t[r];
					}
					n && this.$o(!0);
				}
			}
		},
		Lx:function(t, i) {
			var e=this.P.columns[t], s=e.minWidth || this.P.minColumnWidth;
			if('header'!=i) {
				var n=this.data.order.length;
				e.adjustBatch && e.adjustBatch<n && (n=e.adjustBatch);
				for(var h=this.data.order.slice(0, n), r=0; r<n; r++) h[r]=h[r]?this.Ox(this.getItem(h[r]), e, 0):'';
				s=Math.max(s, St(h, 'webix_table_cell webix_cell').width);
			}
			if('data'!=i) {
				for(var o=0; o<e.header.length; o++) {
					var a=e.header[o];
					if(a) {
						var u=0;
						if(a.rotate) for(var c=0; c<(a.rowspan || 1); c++) u+=this.rl[c];
						var f='webix_table_cell webix_cell '+(a.css || '')+(a.rotate?'webix_measure_rotate':''), l=St([a.text], f, u);
						s=Math.max(s, a.rotate?l.height:l.width);
					}
				}
				e.sort && (s+=10);
			}
			return s+=q.isIE?Li.layoutPadding.space:0, Math.min(s, e.maxWidth || this.P.maxColumnWidth || 1e5);
		},
		Px:function(t, i, e) {
			if(0<=t) {
				var s=this.Lx(t, i);
				return this.Co(t, s, e);
			}
		},
		adjustColumn:function(t, i) {this.Px(this.getColumnIndex(t), i);},
		adjustRowHeight:function(t, i) {
			if(t) this.Wx(t); else {
				for(var e={}, s=this.P.columns, n=0; n<s.length; n++) this.Wx(s[n].id, e);
				this.data.each(function(t) {t.$height=e[t.id];});
			}
			i || this.refresh();
		},
		Wx:function(t, e) {
			var i, s=this.getColumnConfig(t), n=ft('DIV', {'class':'webix_table_cell webix_measure_size webix_cell'}, '');n.style.cssText='width:'+s.width+'px; height:1px; visibility:hidden; position:absolute; top:0px; left:0px; overflow:hidden;', this.$view.appendChild(n), n.offsetHeight<1 && (i=this.$view.cloneNode(!0), document.body.appendChild(i), i.appendChild(n)), this.data.each(function(t) {
				var i;
				n.innerHTML=this.Ox(t, s, 0), i=Math.max(n.scrollHeight, this.P.rowHeight, this.P.minRowHeight || 0), i=Math.min(i, this.P.maxRowHeight || 1e5), e?e[t.id]=Math.max(i, e[t.id] || 0):t.$height=i;
			}, this), n=dt(n), i && dt(i);
		}
	}, yr={
		math_setter:function(t) {return t && this.Ux(), t;},
		Yx:'$',
		Ux:function() {q.strict || (this.data.attachEvent('onStoreUpdated', S(this.qx, this)), this.data.attachEvent('onStoreLoad', S(this.Gx, this)), this.attachEvent('onStructureLoad', this.Gx));},
		qx:function(t, i, e) {
			if(t && 'paint'!=e) if('delete'==e) for(var s=0; s<this.nl.length; s++) this.Xx(i, this.nl[s].id); else {
				'add'==e && this.Jx(i);
				for(var n=0; n<this.nl.length; n++) this.Kx={}, this.Zx(t, this.nl[n].id);
				this.Kx={};
			}
		},
		Zx:function(t, i) {
			var e, s=this.getItem(t);
			if((e=s[this.Yx+i] || s[i]) && 0<e.length && '='===e.toString().substr(0, 1)?(s[this.Yx+i]=e, s[i]=this.Qx(e, t, i)):('undefined'!= typeof s[this.Yx+i] && delete s[this.Yx+i], this.Xx(s, i)), 'undefined'!= typeof s.depends && 'undefined'!= typeof s.depends[i]) for(var n in s.depends[i]) {
				var h=s.depends[i][n][0]+'__'+s.depends[i][n][1];
				'undefined'== typeof this.Kx[h] && (this.Kx[h]= !0, this.Zx(s.depends[i][n][0], s.depends[i][n][1]));
			}
		},
		ty:function(t, i) {
			var e=this.getItem(t);
			'undefined'!= typeof e[this.Yx+i] && (e[i]=e[this.Yx+i]);
		},
		Gx:function() {
			if(this.nl && this.count()) {
				this.Jx();
				for(var t=0; t<this.nl.length; t++) {
					var i=this.columnId(t);
					this.data.each(function(t) {this.Kx={}, this.Zx(t.id, i);}, this);
				}
				this.Kx={};
			}
		},
		Jx:function(t) {
			for(var i=0; i<this.nl.length; i++) if(this.nl[i].math) {
				var e=this.columnId(i), s='='+this.nl[i].math;
				s=s.replace(/\$c/g, '#$c#'), t?(t[e]=this.iy(s, t.id, e), delete t[this.Yx+e], this.Xx(t, e)):this.data.each(function(t) {t[e]=this.iy(s, t.id, e), delete t[this.Yx+e], this.Xx(t, e);}, this);
			}
		},
		iy:function(t, i, e) {
			return Yt(t)({
				$r:i,
				$c:e
			});
		},
		ey:function(t, i) {
			var e;
			if(!this.exists(t)) return '#out_of_range';
			var s=(e=this.getItem(t))[this.Yx+i] || e[i] || 0;
			return '='!==(s=s.toString()).substring(0, 1)?s:('undefined'== typeof e[this.Yx+i] && (e[this.Yx+i]=e[i]), e[i]=this.Qx(s, t, i, !0), e[i]);
		},
		Qx:function(t, i, e, s) {
			if(!0===s) {
				if(this.ny(i, e)) return '#selfreference';
			} else this.hy();
			this.oy(i, e);
			var n=this.getItem(i);
			t=t.substring(1);
			var h=this.ay(t), r=this.uy(t, i);
			t=h?(t=this.cy(t, r), this.fy(t, h)):this.cy(t, r, !0);
			var o=this.ly(t);
			if(!1!==o) return o;
			this.vy(i, e), this.Xx(n, e);
			for(var a=0; a<r.length; a++) this._y([i, e], r[a]);
			return !1!==(o=this.ly(t))?o:t?(t=this.gy(t.replace(/\$r/g, n.id)), !1!==(o=this.ly(t))?o:t):t;
		},
		ay:function(t) {return t.replace(/\[[^)]*?\]/g, '').match(/(\+|-|\*|\/)/g);},
		uy:function(t, i) {
			var e=t.match(/\[([^\]]+),([^\]]+)\]/g);
			null===e && (e=[]);
			for(var s=0; s<e.length; s++) {
				var n=e[s], h=n;
				(n=(n=n.substr(1, n.length-2)).split(','))[0]=this.wy(n[0]), n[1]=this.wy(n[1]), ':'===n[0].substr(0, 1) && (n[0]=this.getIdByIndex(n[0].substr(1))), '$r'===n[0] && (n[0]=i), ':'===n[1].substr(0, 1) && (n[1]=this.columnId(n[1].substr(1))), n[2]=h, e[s]=n;
			}
			return e;
		},
		cy:function(t, i, e) {
			var s='(', n=')';
			e && (s=n='');
			for(var h=0; h<i.length; h++) {
				var r=i[h], o=this.ey(r[0], r[1]);
				isNaN(o) && (o='"'+o+'"'), t=t.replace(r[2], s+o+n);
			}
			return t;
		},
		fy:function(t, i) {
			for(var e=[], s=0; s<i.length; s++) {
				var n=i[s], h=this.xy(t, n);
				e.push(h[0]), t=h[1];
			}
			e.push(t);
			for(var r=0; r<e.length; r++) {
				var o=this.wy(e[r]);
				e[r]=o;
			}
			for(var a='', u=0; u<e.length-1; u++) a+=e[u]+i[u];
			return a+=e[e.length-1];
		},
		gy:function(t) {
			var i;
			try {
				i=window.eval(t);
			} catch(e) {
				i='';
			}
			return i.toString();
		},
		xy:function(t, i) {
			var e=t.indexOf(i);
			return [t.substr(0, e), t.substr(e+1)];
		},
		wy:function(t) {return t=(t=t.replace(/^ */g, '')).replace(/ *$/g, '');},
		hy:function() {this.yy=[];},
		oy:function(t, i) {this.yy[t+'__'+i]= !0;},
		vy:function(t, i) {'undefined'!= typeof this.yy[t+'__'+i] && delete this.yy[t+'__'+i];},
		ny:function(t, i) {return 'undefined'!= typeof this.yy[t+'__'+i];},
		_y:function(t, i) {
			var e=this.getItem(i[0]);
			'undefined'== typeof e.depends && (e.depends={}), 'undefined'== typeof e.depends[i[1]] && (e.depends[i[1]]={}), e.depends[i[1]][t[0]+'__'+t[1]]=t, 'undefined'== typeof (e=this.getItem(t[0])).triggers && (e.triggers={}), 'undefined'== typeof e.triggers[t[1]] && (e.triggers[t[1]]={}), e.triggers[t[1]][i[0]+'__'+i[1]]=i;
		},
		Xx:function(t, i) {
			if(t && 'undefined'!= typeof t.triggers) for(var e in t.triggers[i]) {
				var s=t.triggers[i][e], n=this.getItem(s[0]);
				n && delete n.depends[s[1]][t.id+'__'+i];
			}
		},
		ly:function(t) {
			var i=t.match(/#\w+/);
			return null!==i && 0<i.length && i[0];
		}
	}, Mr={
		headermenu_setter:function(t) {return t && (t.data && (this.My= !0), t=this.Sy(t)), t;},
		Sy:function(n) {
			var t={
				view:'contextmenu',
				template:'<span class=\'webix_icon {common.hidden()}\'></span> &nbsp; #value#',
				type:{hidden:function(t) {return t.hidden?'wxi-eye-slash':'wxi-eye';}},
				on:{
					onMenuItemClick:S(function(t) {
						var i=oi(this.P.headermenu), e=i.getItem(t).hidden;
						i.getItem(t).hidden= !e, i.refresh(t), i.$blockRender= !0;
						var s={spans:'object'==M(n) && n.spans};
						return e?this.showColumn(t, s):this.hideColumn(t, s), i.$blockRender= !1;
					}, this)
				},
				data:[]
			};
			'object'==M(n) && H.extend(t, n, !0);
			var i=si(t);
			return i.attachTo(this.k), this.Bt.push(i), this.attachEvent('onStructureLoad', this.ky), this.attachEvent('onStructureUpdate', this.ky), this.Sy=function(t) {return t;}, i.P.id;
		},
		ky:function() {
			var t=oi(this.P.headermenu), i=this.So;
			if(!t.$blockRender) {
				if(this.My) return t.data.each(function(t) {t.hidden= !!i[t.id];}), void t.refresh();
				var e=[], s=this.go;
				s.length || (s=this.nl);
				for(var n=0; n<s.length; n++) {
					var h=this.getColumnConfig(s[n].id || s[n]), r=h.header[0], o=!!i[h.id];
					!1!==h.headermenu && r && e.push({
						id:h.id,
						value:o?r.text:r.groupText || r.text,
						hidden:o
					});
				}
				e.length && t.data.importData(e);
			}
		}
	};
	wn.headerMenu={
		getValue:function() {},
		setValue:function() {},
		refresh:function(t, i) {t.P.headermenu || (t.define('headermenu', !0), t.ky()), i.onclick=function() {oi(t.config.headermenu).show(i);};},
		render:function() {return '<span class=\'webix_icon wxi-columns\' role=\'button\' tabindex=\'0\' aria-label=\''+I.aria.headermenu+'\'>';}
	};
	var Sr={
		$a:function(t) {return this.getColumnConfig(t.column).editor;},
		getEditor:function(t, i) {return t?(1==arguments.length && (i=t.column, t=t.row), (this.pa[t] || {})[i]):this.Ei;},
		Ea:function(t) {
			for(var i in this.pa) {
				var e=this.pa[i];
				for(var s in e) '$count'!=s && t.call(this, e[s]);
			}
		},
		Da:function(t, i, e) {
			var s=t.row, n=t.column, h=i.config=this.getColumnConfig(n);
			!1!==e && this.showCell(s, n);
			var r=i.render();
			i.$inline && (r=this.wa(t)), i.node=r;
			var o, a=this.getItem(s), u=h.editFormat;
			return this.P.editMath && (o=a['$'+n]), R(o=o || a[n]) && (o=''), i.setValue(u?u(o):o, a), i.value=a[n], this.Fa(t, i), i.$inline || (i.Cy=this.Va(t, r, !0)), i.afterRender && i.afterRender(), this.P.liveValidation && (Kt(i.node, 'keyup', this.$y(t, this)), this.validateEditor(t)), r;
		},
		$y:function(t, i) {return function() {i.validateEditor(t);};},
		Pa:function(t) {
			var i=this.getColumnConfig(t.column).editParse, e=t.getValue();
			return i?i(e):e;
		},
		ka:function(t, i, e) {
			var s=e?{}:this.getItem(t.row);
			return s[t.column]=i, this.P.editMath && (s['$'+t.column]=null), s;
		},
		Fa:function(t, i) {
			var e=this.pa[t.row]=this.pa[t.row] || {};
			e.$count=(e.$count || 0)+1, i.row=t.row, i.column=t.column, this.Ei=e[t.column]=i, this.Ii++, this.Dy=this.getScrollState();
		},
		Ba:function(t) {
			this.Ei==t && (this.Ei=0), t.destroy && t.destroy();
			var i=this.pa[t.row];
			delete i[t.column], i.$count--, i.$count || delete this.pa[t.row], this.Ii--;
		},
		xa:function(t, i) {
			var e=this.pa[t];
			if(e) for(var s in this.pa[i]=e, delete this.pa[t], e) '$count'!=s && (e[s].row=i);
		},
		za:function(t) {
			var i, e, s, n, h, r=this.getColumnConfig(t.column), o=0;
			if(r && r.node && r.attached) {
				if(s=this.getIndexById(t.row), this.ol && this.getSpan(t.row, t.column)) for(e=0; e<3; e++) for(i=this.Iy[e], n=0; !o && n<i.childNodes.length; n++) (h=i.childNodes[n]).getAttribute('row')==s && h.getAttribute('column')==this.getColumnIndex(t.column) && (o=h);
				!o && s>=r.Ay-this.P.topSplit && s<r.Ty && (o=r.node.childNodes[s-r.Ay+this.P.topSplit]);
			}
			return o;
		},
		editCell:function(t, i, e, s) {
			return i=i || this.P.columns[0].id, Se.edit.call(this, {
				row:t,
				column:i
			}, e, s);
		},
		editRow:function(i) {
			i && i.row && (i=i.row);
			var e=!1;
			this.eachColumn(function(t) {
				this.edit({
					row:i,
					column:t
				}, e, !e), e= !0;
			});
		},
		editColumn:function(i) {
			i && i.column && (i=i.column);
			var e=!1;
			this.eachRow(function(t) {
				this.edit({
					row:t,
					column:i
				}, e, !e), e= !0;
			});
		},
		eachRow:function(t, i) {
			var e=this.data.order;
			i && (e=this.data.Cr || e);
			for(var s=0; s<e.length; s++) t.call(this, e[s]);
		},
		eachColumn:function(t, i) {
			for(var e in this.hl) {
				var s=this.hl[e];
				t.call(this, s.id, s);
			}
			if(i) for(var n in this.So) {
				var h=this.So[n];
				t.call(this, h.id, h);
			}
		},
		Na:function(t) {if(this.getSelectedId && 1==this.getSelectedId(!0).length) return this.Ao(t), !1;},
		Di:function(t, i) {
			if(this.P.editable && !this.Ii) {
				if(i.target && 'INPUT'==i.target.tagName) return !0;
				var e=this.getSelectedId(!0);
				if(1==e.length) {
					var s=e[0];
					return 'row'==this.P.select && (s.column=this.P.columns[i.shiftKey?0:this.P.columns.length-1].id), this.editNext(t, s), !1;
				}
			}
			return !0;
		},
		ja:function(t, i, e) {
			var s=this.getIndexById(t.row), n=this.getColumnIndex(t.column), h=this.data.order, r=this.nl;
			if(e) for(var o=s; o<h.length; o++) {
				for(var a=n+1; a<r.length; a++) {
					var u={
						row:h[o],
						column:r[a].id
					};
					if(i.call(this, u) && (!this.Fy || !this.Fy(t, u))) return u;
				}
				n= -1;
			} else for(var c=s; 0<=c; c--) {
				for(var f=n-1; 0<=f; f--) {
					var l={
						row:h[c],
						column:r[f].id
					};
					if(i.call(this, l)) return l;
				}
				n=r.length;
			}
			return null;
		},
		Vy:function() {this.Ii && (this.zy?this.zy= !1:(this.dh.scrollTo(this.getScrollState().y+this.st.childNodes[1].firstChild.scrollTop), this.st.childNodes[1].firstChild.scrollTop=0, this.zy= !0));},
		By:function() {this.Ii && this._h.scrollTo(this.st.childNodes[1].scrollLeft);},
		Ma:function() {this.attachEvent('onScrollY', this.Hy), this.attachEvent('onScrollX', this.Hy), this.attachEvent('onScrollY', this.ma), this.attachEvent('onColumnResize', function() {this.editStop();}), this.attachEvent('onAfterFilter', function() {this.editStop();}), this.attachEvent('onRowResize', function() {this.editStop();}), this.attachEvent('onAfterScroll', function() {this.P.topSplit && this.editStop();}), this.st.childNodes[1].firstChild.onscroll=S(this.Vy, this), this.st.childNodes[1].onscroll=S(this.By, this);},
		Hy:function() {
			if(this.Ii) {
				var t=this.Dy;
				this.Dy=this.getScrollState();
				var r=this.Dy.y-t.y;
				this.Ea(function(t) {
					if(t.getPopup) {
						var i=this.getItemNode(t), e=!1;
						if(this.P.prerender) {
							var s=t.Cy, n=s.top-this.vh, h=s.left-this.ph;
							e=n<0 || n+s.height>this.zx || h<0 || h+s.width>this.$width-this.Ry;
						}
						!i || e?t.getPopup().show({
							x:-1e4,
							y:-1e4
						}):t.getPopup().show(i);
					}
					this.P.prerender || t.linkInput || t.$inline || (t.node.top-=r, t.node.style.top=t.node.top+'px');
				});
			}
		}
	}, kr={
		$init:function() {this.Ey(), this.attachEvent('onStructureLoad', this.Py);},
		Ey:function() {this.So={}, this.go=b(), this.ko=[0, 0];},
		Py:function() {
			for(var t=this.nl, i=0; i<t.length; i++) t[i].header && this.jy(t, t[i].header), t[i].footer && this.jy(t, t[i].footer);
			for(var e=t.length-1; 0<=e; e--) t[e].hidden?this.hideColumn(t[e].id, {}, !0, !0):t[e].batch && this.config.visibleBatch && t[e].batch!=this.config.visibleBatch && this.hideColumn(t[e].id, {}, !0, !0);
		},
		jy:function(t, i) {
			for(var e=0; e<i.length; e++) {
				var s=i[e];
				s && s.colspan && !s.$colspan && (s.$colspan=s.colspan);
			}
		},
		moveColumn:function(t, i) {
			var e=this.getColumnIndex(t);
			if(e!=i) {
				var s=this.P.columns, n=s.splice(e, 1), h=i-(e<i?1:0);
				x.insertAt.call(s, n[0], h);
				var r=this.go;
				if(r.length) {
					var o=(r=b(r)).find(t);
					r.removeAt(o), 0===h?r.unshift(t):r.insertAt(t, r.find(s[h-1].id)+1);
				}
				this.Ny();
			}
		},
		Ly:function() {
			var t=this.go, i=this.P.columns;
			if(!t.length) {
				for(var e=0; e<i.length; e++) t[e]=i[e].id;
				this.ko=[this.P.leftSplit, this.gw];
			}
		},
		isColumnVisible:function(t) {return !this.So[t];},
		hideColumn:function(t, i, e, s) {
			var n, h=this.P.columns, r=this.go, o=this.So, a=1;
			if(i=i || {}, !1!==s) {
				var u=this.getColumnIndex(t);
				if(-1===u || !this.callEvent('onBeforeColumnHide', [t])) return;
				if(-1==u) return;
				if(this.Ly(), i.spans) for(var c=h[u].header, f=0; f<c.length; f++) c[f] && (c[f].$groupSpan=c[f].colspan || 1, a=Math.max(a, c[f].$groupSpan));
				u<this.P.leftSplit && (this.P.leftSplit-=a), u>=this.gw?this.P.rightSplit-=a:this.gw-=a;
				for(var l=u+a-1; u<=l; l--) this.Oy(u), (o[(n=h.splice(u, 1)[0]).id]=n).Ay= -1, delete this.hl[n.id];
				this.callEvent('onAfterColumnHide', [t]);
			} else {
				if(!(n=o[t]) || !this.callEvent('onBeforeColumnShow', [t])) return;
				for(var d=null, v=0, _=0; v<r.length; v++) {
					if(r[v]==t) {
						_=v;
						break;
					}
					o[r[v]] || (d=r[v]);
				}
				var p=d?this.getColumnIndex(d)+1:0;
				if(i.spans) for(var m=n.header, b=0; b<m.length; b++) m[b] && (m[b].colspan=m[b].$groupSpan || m[b].colspan, delete m[b].$groupSpan, a=Math.max(a, m[b].colspan || 1));
				for(var g=_+a-1; _<=g; g--) {
					var w=o[r[g]];
					w?(x.insertAt.call(h, w, p), delete w.hidden, delete o[w.id], this.hl[w.id]=w):a--;
				}
				_<this.ko[0] && (this.P.leftSplit+=a), _>=this.ko[1]?this.P.rightSplit+=a:this.gw+=a, this.callEvent('onAfterColumnShow', [t]);
			}
			n.header && this.Wy(n, !1!==s?0:1, 'header'), n.footer && this.Wy(n, !1!==s?0:1, 'footer'), e || this.Ny();
		},
		Wy:function(t, i, e) {
			for(var s=t[e].length-1; 0<=s; s--) for(var n, h=this.go, r=!1, o=0, a=0; a<h.length; a++) {
				var u=this.getColumnConfig(h[a]), c=u[e][s];
				this.isColumnVisible(h[a])?(r && 0<o && n && 0<n.colspan?n=c=u[e][s]=n:c && c.$colspan && o<=0 && (o=c.colspan=c.$colspan, n=c), r=null):(c && c.$colspan && o<=0 && (o=c.colspan=c.$colspan, r=n=c), n && 0<o && n.colspan--), o--;
			}
		},
		refreshColumns:function(t, i) {
			this.Uy= !0, (t && t!=this.config.columns || i) && (this.Ey(), this.yo={}, t && (this.gw=t.length-(this.config.rightSplit || 0))), this.hl={};
			for(var e=0; e<this.nl.length; e++) {
				var s=this.nl[e];
				(this.hl[s.id]=s).attached=s.node=null;
			}
			for(var n=0; n<3; n++) this.k.childNodes[n].innerHTML='', this.st.childNodes[n].firstChild.innerHTML='';
			this.nl=this.config.columns=t || this.config.columns, this.gw=this.nl.length-this.P.rightSplit, this.Mo=0, this.Yy(), this.Rh(), this.callEvent('onStructureUpdate'), this.render(), this.Uy=0;
		},
		Ny:function() {this.Mo=0, this.callEvent('onStructureUpdate'), this.qy(), this.render();},
		showColumn:function(t, i, e) {return this.hideColumn(t, i, e, !1);},
		showColumnBatch:function(s, n) {
			var h=void 0!==n;
			n=!1!==n, this.eachColumn(function(t, i) {
				if(i.batch) {
					var e=this.So[i.id];
					n || (e= !e), i.batch==s && e?this.hideColumn(i.id, {spans:!0}, !0, !n):h || i.batch==s || e || this.hideColumn(i.id, {spans:!0}, !0, n);
				}
			}, !0), this.Ny();
		}
	}, Cr={
		$init:function() {this.attachEvent('onAfterScroll', this.mu), this.attachEvent('onFocus', function() {yt(this.$view, 'webix_dtable_focused');}), this.attachEvent('onBlur', function() {Mt(this.$view, 'webix_dtable_focused');});},
		mu:function() {
			if(!this.Gy()) {
				var t=this.tt.querySelector('.webix_cell');
				t && t.setAttribute('tabindex', '0');
			}
		},
		Gy:function() {
			for(var t=this.getSelectedId(!0), i=0; i<t.length; i++) if(this.isColumnVisible(t[i].column)) return this.getItemNode(t[i]);
			return null;
		},
		moveSelection:function(t, i, e) {
			if(this.Xy(), !this.P.disabled) {
				i=i || {};
				var s=this.getSelectedId(!0), n=s.length-1, h=!(!this.P.multiselect && !this.P.areaselect) && i.shift;
				if(1<s.length && 'cell'!==this.P.select && (s=s.sort(S(function(t, i) {return this.getIndexById(t.row)>this.getIndexById(i.row) || this.getColumnIndex(t.column)>this.getColumnIndex(i.column)?1:-1;}, this)), 'up'!=t && 'left'!=t && 'top'!=t && 'pgup'!=t || (n=0)), n<0 && this.count()) {
					if('down'==t || 'right'==t) t='top'; else {
						if('up'!=t && 'left'!=t) return;
						t='bottom';
					}
					n=0, s=[{
						row:1,
						column:1
					}];
				}
				if(0<=n) {
					var r=s[n].row, o=s[n].column;
					if('top'==t || 'bottom'==t) r && ('top'==t?r=this.data.getFirstId():'bottom'==t && (r=this.data.getLastId())), o && (n=0, 'bottom'==t && (n=this.config.columns.length-1), o=this.columnId(n)); else if('up'==t || 'down'==t || 'pgup'==t || 'pgdown'==t) {
						if(r) {
							var a=this.getIndexById(r), u=1;
							'pgup'!=t && 'pgdown'!=t || (u=this.fc?this.fc.config.size:Math.round(this.zx/this.P.rowHeight)), 'up'==t || 'pgup'==t?a-=u:'down'!=t && 'pgdown'!=t || (a+=u), a<0 && (a=0), a>=this.data.order.length && (a=this.data.order.length-1), !(r=this.getIdByIndex(a)) && this.P.pager && this.showItemByIndex(a);
						}
					} else {
						if('right'!=t && 'left'!=t) return;
						if(o && 'row'!=this.config.select) {
							var c=this.getColumnIndex(o);
							'right'==t?c++:'left'==t && c--, c<0 && (c=0), c>=this.config.columns.length && (c=this.config.columns.length-1), o=this.columnId(c);
						} else {
							if((this.open || this.Jy) && 'right'==t) return this.open?this.open(r):this.openSub(r);
							if((this.close || this.Jy) && 'left'==t) return this.close?this.close(r):this.closeSub(r);
						}
					}
					if(r) {
						this.showCell(r, o), this.select || (H.extend(this, this.Bw.zw, !0), this.P.select=this.open || this.Jy?'row':'cell', H.extend(this, this.Bw[this.P.select], !0));
						var f={
							row:r,
							column:o
						};
						if(h && 'area'==this.P.select) {
							var l=this.uw[this.uw.length-1];
							this.rw(f, l, t, i);
						} else this.Ao(f, h);
						if(!this.P.clipboard && !1!==e) {
							var d=this.getItemNode(f);
							d && d.focus();
						}
					}
				}
				return !1;
			}
		}
	}, $r={
		Oo:function(t) {
			for(var i=0; i<this.nl.length; i++) {
				var e=this.nl[i], s=this.getItemNode({
					row:t,
					cind:i
				});
				s?s.parentNode.insertBefore(Xi.ln[i], s):e.node.appendChild(Xi.ln[i]);
			}
		},
		qo:function() {
			var t=[], i=this.nl.length, e=document.createElement('div');
			e.className='webix_drop_area', e.style.height=this.P.rowHeight+'px', e.innerHTML=this.$dropHTML();
			for(var s=0; s<i; s++) t.push(e.cloneNode(!0));
			return t;
		}
	}, Dr={
		drag_setter:function(t) {
			return this.attachEvent('onBeforeDrag', function(t) {return this.Ky(t.source);}), this.attachEvent('onBeforeDragIn', function(t) {
				var i=this.Ky(t.target);
				return !i && Xi.ln && (dt(Xi.ln), this.Xo=Xi.ln=null), i;
			}), me.drag_setter.call(this, t), 'order'!=t && 'move'!=t || H.extend(this, $r, !0), t;
		},
		Lo:function(t, i, e) {
			var s=Xi.qs;
			this.P.prerender || e || (t=[s.start]);
			for(var n=0; n<t.length; n++) {
				for(var h=0; h<this.nl.length; h++) {
					var r=this.getItemNode({
						row:t[n],
						cind:h
					});
					r && yt(r, i);
				}
				this.data.addMark(t[n], i, 1, 1, !0);
			}
		},
		No:function(t, i, e) {
			var s=Xi.qs;
			this.P.prerender || e || (t=[s.start]);
			for(var n=0; n<t.length; n++) {
				for(var h=0; h<this.nl.length; h++) {
					var r=this.getItemNode({
						row:t[n],
						cind:h
					});
					r && Mt(r, i);
				}
				this.data.removeMark(t[n], i, 1, !0);
			}
		},
		Ky:function(t) {
			var i, e, s=!1;
			if(this.P.topSplit && t) for($(t) || (t=[t]), i=0; !s && i<t.length; i++) s=0<=(e=this.getIndexById(t[i])) && e<this.P.topSplit;
			return !s;
		},
		Q:function(t) {
			for(var i='<div class=\'webix_dd_drag\' style=\'width:'+(this.me-this.Nx)+'px;\'>', e=this.P.columns, s=0; s<e.length; s++) {
				var n=this.Ox(t, e[s]);
				i+='<div style=\'width:'+e[s].width+'px;\'>'+n+'</div>';
			}
			return i+'</div>';
		},
		getHeaderNode:function(t, i) {return this.Zy(t, i, this.k);},
		getFooterNode:function(t, i) {return this.Zy(t, i, this.el);},
		Zy:function(t, i, e) {
			if(this.isColumnVisible(t)) {
				var s=this.getColumnIndex(t), n=this.P.leftSplit>s?0:this.gw<=s?2:1;
				i=i || 0;
				var h=e.childNodes[n].getElementsByTagName('TR');
				if(h.length) for(var r=h[i+1].childNodes, o=0; o<r.length; o++) if(r[o].getAttribute('column')==s) return r[o].firstChild;
			}
			return null;
		},
		getItemNode:function(t) {
			if(t && !t.header) {
				var i=t.row || t, e='number'== typeof t.rind?t.rind:this.getIndexById(i), s=this._w(), n=s[0]-this.P.topSplit;
				if(e<n && e>s[1]) return;
				var h=this.vw(), r=this.P.leftSplit?0:h[0], o='number'== typeof t.cind;
				if((t.column || o) && (r=o?t.cind:this.getColumnIndex(t.column))<this.gw && r>=this.P.leftSplit && (r<h[0] || r>h[1])) return;
				var a=this.P.columns[r];
				if(a.attached && a.node) {
					if('$webix-drop'===i) return Xi.ln[r];
					for(var u=e<this.P.topSplit || this.P.prerender?e:e-n, c=a.node.childNodes, f=Math.min(c.length, u+1), l=0; l<f; l++) 'webix_drop_area'===c[l].className && u++;
					return c[u];
				}
			}
		},
		Qy:function(t) {
			var i=t.target.nodeName;
			return 'INPUT'!=i && 'TEXTAREA'!=i;
		},
		dragColumn_setter:function(t) {
			var r;
			'order'==t?r={
				$drag:S(function(t, i) {
					if(!this.Qy(i) || this.Cv) return !1;
					var e=this.locate(i);
					if(!e || !this.callEvent('onBeforeColumnDrag', [e.column, i])) return !1;
					Xi.qs={
						from:r,
						start:e,
						custom:'column_dnd'
					};
					var s=this.getColumnConfig(e.column);
					return this.tM=mt(i), this.iM=s.width, this.Fo= !0, '<div class=\'webix_dd_drag_column\' style=\'width:'+s.width+'px\'>'+(s.header[0].text || '&nbsp;')+'</div>';
				}, this),
				$dragPos:S(function(t, i, e) {
					var s=this, n=Xi.getContext(), h=pt(this.$view);
					e.style.display='none';
					var r=document.elementFromPoint(t.x, h.y+this.P.headerRowHeight/2), o=r?this.locate(r):null, a=Xi.getContext().start.column;
					if(o && o.column!=a && (!this.eM || o.column!=this.sM) && 'column_dnd'==n.custom && oi(r)==this) {
						if(!this.callEvent('onBeforeColumnDropOrder', [a, o.column, i])) return;
						var u=this.getColumnIndex(a), c=this.getColumnIndex(o.column);
						i.touches && (this.nM=i.target, this.nM.style.display='none', this.$view.parentNode.appendChild(this.nM)), this.moveColumn(a, c+(u<c?1:0)), this.sM=o.column, this.eM= !0;
					}
					if(o && o.column==a && (this.eM= !1), e.style.display='block', t.x=t.x-this.tM.x, t.y=h.y, t.x<h.x) t.x=h.x; else {
						var f=h.x+this.$view.offsetWidth-this.Nx-this.iM;
						t.x>f && (t.x=f);
					}
					Xi.nn= !0, this.rt && (this.rt=window.clearTimeout(this.rt)), !1!==this.P.dragscroll && (this.rt=k(function(t) {return s.ot(t);}, this, [bt(i)], 250));
				}, this),
				$dragDestroy:S(function(t, i) {
					this.Fo=null, this.rt && (this.rt=window.clearTimeout(this.rt)), dt(i), this.nM && dt(this.nM);
					var e=Xi.getContext().start;
					this.callEvent('onAfterColumnDropOrder', [e.column, this.sM, t]);
				}, this),
				$drop:function() {}
			}:t && (r={
				Vo:!0,
				$drag:S(function(t, i) {
					if(!this.Qy(i) || this.Cv) return !1;
					var e=this.locate(i);
					if(!e || !this.callEvent('onBeforeColumnDrag', [e.column, i])) return !1;
					Xi.qs={
						from:r,
						start:e,
						custom:'column_dnd'
					};
					for(var s=this.getColumnConfig(e.column).header, n='&nbsp;', h=0; h<s.length; h++) if(s[h]) {
						n=s[h].text;
						break;
					}
					return this.Fo= !0, '<div class=\'webix_dd_drag_column\'>'+n+'</div>';
				}, this),
				$drop:S(function(t, i, e) {
					var s=e;
					e.touches && this.hM && (s=this.hM);
					var n=this.locate(s);
					if(!n) return !1;
					var h=Xi.getContext().start.column;
					if(h!=n.column) {
						if(!this.callEvent('onBeforeColumnDrop', [h, n.column, e])) return;
						var r=this.getColumnIndex(h), o=this.getColumnIndex(n.column);
						this.moveColumn(h, o+(r<o?1:0)), this.callEvent('onAfterColumnDrop', [h, n.column, e]);
					}
				}, this),
				$dragIn:S(function(t, i, e) {
					var s=this, n=Xi.getContext();
					if('column_dnd'!=n.custom || n.from!=r) return !1;
					for(var h=e.target; -1==(h.className || "").indexOf("webix_hcell");) if(!(h=h.parentNode)) return;
					return this.rt && (this.rt=window.clearTimeout(this.rt)), !1!==this.P.dragscroll && (this.rt=k(function(t) {return s.ot(t);}, this, [bt(e)], 250)), h!=this.hM && (this.hM && Mt(this.hM, 'webix_dd_over_column'), yt(h, 'webix_dd_over_column')), this.hM=h;
				}, this),
				$dragDestroy:S(function(t, i) {this.Fo=null, this.rt && (this.rt=window.clearTimeout(this.rt)), this.hM && Mt(this.hM, 'webix_dd_over_column'), dt(i);}, this)
			}), t && (Xi.addDrag(this.k, r), Xi.addDrop(this.k, r, !0), this.attachEvent('onDestruct', function() {return Xi.unlink(r);}), this.et || H.extend(this, Gt, !0));
		}
	}, Ir={
		th:function(t, i) {
			if(t.scroll && !i) return !0;
			t.header=R(t.header)?!!this.config.header:t.header, t.footer=R(t.footer)?!!this.config.footer:t.footer, t.xCorrection=t.xCorrection || 0;
		},
		Ep:function(t, i) {
			for(var e=-1, s=0; e<0 && s<t.length; s++) i(t[s]) && (e=s);
			return e;
		},
		rM:function(e, c, f) {
			var l={}, d=0;
			return e.forEach(S(function(t, o) {
				var i=t[0], a=[], u=i.length;
				i.forEach(S(function(t, i) {
					for(var e=c[i+d], s=0; s<e[f].length; s++) {
						var n=e[f][s];
						if(n || l[o] && l[o][s]) {
							if(n=_(n || {text:''}), l[o] && l[o][s] && 0===i && (n.colspan=l[o][s], l[o][s]=0), n.colspan) {
								var h=Math.min(n.colspan, u-i);
								l[o+1]=l[o+1] || {}, l[o+1][s]=n.colspan-h, n.colspan=h;
							}
							n.rowspan && 1===u && (n.height=(n.height || this.config.headerRowHeight)*n.rowspan, n.rowspan=null);
							var r={
								txt:n.rotate?this.getHeaderNode(e.id, s).innerHTML:n.text || (n.contentId?this.getHeaderContent(n.contentId).getValue():''),
								className:'webix_hcell webix_'+f+'_cell '+(n.css || ''),
								style:{
									height:(n.height || this.config.headerRowHeight)+'px',
									width:n.colspan?'auto':e.width+'px'
								},
								span:n.colspan || n.rowspan?{
									colspan:n.colspan || 1,
									rowspan:n.rowspan || 1
								}:null
							};
							a[s]=a[s] || [], a[s][i]=r;
						}
					}
				}, this)), e[o]='header'==f?a.concat(t):t.concat(a), d+=u;
			}, this)), e;
		},
		ih:function(v, t, _) {
			var p=this.config.columns, m=this.getSelectedId(!0), b='page'==v.fit?Infinity:this.sh(v), g=0, w=0, x=[], y=0, M=[];
			return _=_ || 0+v.xCorrection, t=t || [], this.eachRow(S(function(i) {
				for(var t=0, e=this.getItem(i), s=this.getIndexById(i), n=[], h=!1, r=_; r<p.length; r++) {
					var o=p[r].id, a=this.getColumnIndex(o)-_;
					if(p[r]) {
						if(t+=p[r].width, 0===s && M.push(p[r].width), b<t && _<r) {
							y=r;
							break;
						}
						if('selection'!==v.data || 'selection'==v.data && -1!==this.Ep(m, function(t) {return t.column==o && t.row==i;})) {
							var u;
							if(this.getSpan && (u=this.getSpan(i, o)), u && this.getColumnIndex(o)===_) {
								var c=this.getColumnIndex(u[1]);
								c<_ && (u[2]=u[2]-(_-c), u[4]=u[4]?u[4]:e[u[1]]?this.getText(i, u[1]):null, u[1]=o);
							}
							if(!u || u && u[0]==i && u[1]==o) {
								var f=u && u[4]?u[4]:this.hl[o]?this.getText(i, o):'', l=this.getCss(i, o)+' '+(p[r].css || '')+(u?' webix_dtable_span '+(u[5] || ''):''), d={
									height:u && 1<u[3]?'auto':(e.$height || this.config.rowHeight)+'px',
									width:u && 1<u[2]?'auto':p[r].width+'px'
								};
								n.push({
									txt:f,
									className:l,
									style:d,
									span:u?{
										colspan:u[2],
										spanStart:this.getColumnIndex(u[1]),
										rowspan:u[3]
									}:null
								}), (f || 0===f) && (g=Math.max(a+1, g), w=Math.max(s+1, w)), h=h || !!f;
							} else u && (n.push({$inspan:!0}), g=Math.max(a+1, g), w=Math.max(s+1, w));
						}
					}
				}
				v.skiprows && !h || x.push(n);
			}, this)), w && g && (v.trim && (x.length=w, x=x.map(function(t) {
				for(var i=t.length-1; 0<=i; i--) if(t[i].span && t[i].span.colspan) {
					t[i].span.colspan=Math.min(t[i].span.colspan, t.length-i);
					break;
				}
				return t.length=g, t;
			})), t.push(x)), y?this.ih(v, t, y):(v.footer && (t=this.rM(t, p, 'footer')), v.header && (t=this.rM(t, p, 'header')), 'page'==v.fit && this.oM(t, M, g, v)), t;
		},
		oM:function(t, i, e, s) {
			e && s.trim && (i.length=e);
			for(var n=0, h=0; h<i.length; h++) n+=i[h];
			n>this.sh(s) && t[0].forEach(function(t) {for(var i=0; i<t.length; i++) t[i] && t[i].style && t[i].style.width && (t[i].style.width='auto');});
		},
		eh:function(n, h) {
			var r=ft('div');
			return n.forEach(S(function(t, i) {
				var e=ft('table', {
					'class':'webix_table_print '+this.$view.className+(h.borderless?' borderless':''),
					style:'border-collapse:collapse',
					id:this.$view.getAttribute('id')
				});
				if(t.forEach(function(t) {
					var s=ft('tr');
					t.forEach(function(t) {
						if(!t.$inspan) {
							var i=ft('td');
							for(var e in i.innerHTML=t.txt, i.className=t.className, t.style) i.style[e]=t.style[e];
							t.span && (i.colSpan=t.span.colspan, i.rowSpan=t.span.rowspan), s.appendChild(i);
						}
					}), e.appendChild(s);
				}), r.appendChild(e), i+1<n.length) {
					var s=ft('DIV', {'class':'webix_print_pagebreak'});
					r.appendChild(s);
				}
			}, this)), r;
		}
	}, Ar={
		$exportView:function(t) {
			this.isBranchOpen && H.extend(t, {filterHTML:!0});
			var i=t.export_mode;
			if('pdf'!=i && 'excel'!=i || t.dataOnly || !t.styles) return this;
			t.dataOnly= !0, t.heights=R(t.heights)?'all':t.heights;
			var e='pdf'==i?$s(this, t):Bs(this, t);
			return e[0].styles=this.aM(t), delete t.dataOnly, e;
		},
		aM:function(t) {
			var u=t.export_mode, c=this.config.columns, f=[];
			return this.uM=this.uM || {}, t.docHeader && (f=[{0:this.cM(t.docHeader.css)}, {0:{}}]), !1!==t.header && (f=this.fM(t, 'header', f, u)), this.data.each(function(t) {
				for(var i={}, e=0; e<c.length; e++) {
					var s=this.getCss(t.id, c[e].id), n=c[e].node.className, h='', r=null, o=null;
					if(this.ol && (r=this.getSpan(t.id, c[e].id))?(o=this.getSpanNode({
						row:r[0],
						column:r[1]
					}), h='webix_dtable_span '+(r[5] || '')):o=this.getItemNode({
						row:t.id,
						column:c[e].id
					}), !o) {
						o=ft('div', {
							'class':s,
							style:'visibility:hidden'
						});
						var a=c[e].node;
						c[e].attached || (a=ft('div', {
							'class':n,
							style:'visibility:hidden'
						}), this.st.appendChild(a)), a.appendChild(o);
					}
					i[e]=this.lM(o, [s, n, h].join(':'), u);
				}
				f[f.length]=i;
			}, this), !1!==t.footer && this.config.footer && (f=this.fM(t, 'footer', f, u)), t.docFooter && (f=f.concat([{0:{}}, {0:this.cM(t.docFooter.css)}])), f;
		},
		fM:function(t, i, e, s) {
			for(var n=this.config.columns, h=[], r=0; r<n[0][i].length; r++) {
				for(var o={}, a=0; a<n.length; a++) {
					var u=n[a][i][r];
					if(u) {
						var c=u.colspan?n[a+u.colspan-1].id:n[a].id, f='header'==i?this.getHeaderNode(c, r):this.getFooterNode(c, r);
						if(f) {
							var l=[f.parentNode.className, u.css || '', 'webix_hcell', i];
							o[a]=this.lM(f, l.join(':'), s), (u.colspan || u.rowspan) && h.push([r, a, {
								colspan:u.colspan-1 || 0,
								rowspan:u.rowspan-1 || 0
							}, o[a]]);
						}
					} else for(var d=0; d<h.length; d++) {
						var v=h[d][2], _=h[d][1], p=h[d][0];
						_+v.colspan>=a && p+v.rowspan>=r && (o[a]=h[d][3]);
					}
				}
				e[e.length]=o;
			}
			return e;
		},
		dM:function(t, i, e) {return '0px'==t['border-'.concat(e, '-width')]?null:Le.rgbToHex(t['border-'.concat(e, '-color')]) || i;},
		lM:function(t, i, e) {
			if(this.uM[i]) return this.uM[i];
			var s;
			t.parentNode && 'TD'==t.parentNode.nodeName && (s=this.vM(t.parentNode));
			var n=this.vM(t), h=Le.rgbToHex(n['background-color']) || 'FFFFFF', r={
				backgroundColor:h,
				fontSize:.75*n['font-size'].replace('px', ''),
				color:Le.rgbToHex(n.color),
				textAlign:n['text-align'],
				borderRightColor:this.dM(s || n, h, 'right'),
				borderLeftColor:this.dM(s || n, h, 'left'),
				borderBottomColor:this.dM(s || n, h, 'bottom'),
				borderTopColor:this.dM(s || n, h, 'top')
			}, o='pdf'==e?r:this._M(n, t, r);
			return this.uM[i]=o;
		},
		cM:function(t) {
			t=H.extend(t || {}, {
				visibility:'hidden',
				'white-space':'nowrap',
				'text-align':'left'
			});
			var i='';
			for(var e in t) i+=e+':'+t[e]+';';
			var s=ft('div', {style:i});
			this.st.appendChild(s);
			var n=this.lM(s, i);
			return dt(s), n;
		},
		_M:function(t, i, e) {
			var s={
				font:{},
				alignment:{},
				border:{}
			};
			return s.font.name=t['font-family'].replace(/,.*$/, ''), s.font.sz=e.fontSize, s.font.color={rgb:e.color}, 'normal'!==t['font-weight'] && 400!=t['font-weight'] && (s.font.bold= !0), 'underline'===t['text-decoration-line'] && (s.font.underline= !0), 'italic'===t['font-style'] && (s.font.italic= !0), 'line-through'===t['text-decoration-line'] && (s.font.strike= !0), s.alignment.horizontal=e.textAlign, s.alignment.vertical=t.height==t['line-height']?'center':'top', 'normal'==t['white-space'] && (s.alignment.wrapText= !0), i.firstChild && i.firstChild.className && -1!==i.firstChild.className.indexOf('webix_rotate') && (s.alignment.textRotation=90), s.fill={fgColor:{rgb:e.backgroundColor}}, e.borderRightColor && (s.border.right={
				style:'thin',
				color:{rgb:e.borderRightColor}
			}), e.borderBottomColor && (s.border.bottom={
				style:'thin',
				color:{rgb:e.borderBottomColor}
			}), e.borderLeftColor && (s.border.left={
				style:'thin',
				color:{rgb:e.borderLeftColor}
			}), e.borderTopColor && (s.border.top={
				style:'thin',
				color:{rgb:e.borderTopColor}
			}), s;
		},
		vM:function(t) {return window.getComputedStyle?window.getComputedStyle(t):t.currentStyle;}
	}, Tr={
		subrow_setter:function(t) {return !!t && (this.pM(), this.P.fixedRowHeight= !1, Yt(t));},
		subview_setter:function(t) {return t && (this.P.subrow=this.subrow_setter('<div></div>')), t;},
		defaults:{subRowHeight:35},
		mM:function() {this.data.each(function(t) {t && (t.$sub=this.P.subrow(t, this.type));}, this), this.bM();},
		bM:function(t) {
			if('auto'===this.P.subRowHeight && this.me && this.gM(), t && this.P.subview) for(var i in this.Jy) {
				var e=oi(this.Jy[i]);
				e.P.hidden || e.adjust();
			}
		},
		wM:function(t) {
			var i=this.getItem(t);
			i.$sub=this.P.subrow(i, this.type), 'auto'===this.P.subRowHeight && this.gM(i.id, i.$sub);
		},
		$init:function() {
			this.pM=a(function() {
				var t='#'+this.xM+' .webix_cell.webix_dtable_subview { line-height:normal;}';
				this.P.fixedRowHeight && (t+='#'+this.xM+' .webix_column .webix_cell { white-space: nowrap;}'), ut(t), this.Jy={}, this.attachEvent('onSubViewRender', this.yM), this.data.attachEvent('onStoreUpdated', S(function(t, i, e) {t?'update'==e || 'add'==e?this.wM(t):'delete'==e && i.$subContent && (oi(i.$subContent).destructor(), delete this.Jy[i.$subContent]):this.mM();}, this)), this.attachEvent('onResize', function(t, i, e) {e!=t && this.bM(!0);});
			}), this.type.subrow=function(t) {return t.$sub?t.$subopen?'<div class=\'webix_tree_open webix_sub_open\'></div>':'<div class=\'webix_tree_close webix_sub_close\'></div>':'<div class=\'webix_tree_none\'></div>';}, this.on_click.webix_sub_open=function(t, i) {return this.closeSub(i), !1;}, this.on_click.webix_sub_close=function(t, i) {return this.openSub(i), !1;};
		},
		openSub:function(t) {
			var i=this.getItem(t);
			if(!i.$subopen) {
				i.$row=this.P.subrow, i.$subHeight=i.$subHeight || this.P.subRowHeight, i.$subopen= !0;
				var e=this.Jy[i.$subContent];
				e && (e.repaintMe= !0), this.refresh(t), this.callEvent('onSubViewOpen', [t]);
			}
		},
		getSubView:function(t) {
			var i=this.getItem(t);
			if(i) {
				var e=this.Jy[i.$subContent];
				if(e) return oi(e);
			}
			return null;
		},
		resizeSubView:function(t) {
			var i=this.getSubView(t);
			i && this.MM(this.getItem(t), i);
		},
		MM:function(t, i) {
			var e=i.$getSize(0, 0)[2], s=t.$subHeight || this.P.subRowHeight;
			2<Math.abs(e-(s || 0)) && (t.$subHeight=e, this.refresh(t.id));
		},
		SM:function(t) {
			var i=t.$width;
			if(t.Rl) {
				var e=t.hi.length-t.Ol;
				t.Pl?i-=t.Ua.left+t.Ua.right+2:i-=t.qa*(e-1)+t.Ua.left+t.Ua.right+2*e;
			}
			return 0<i;
		},
		yM:function(n, t) {
			var i, e=this.Jy[n.$subContent];
			if(e) t.firstChild.appendChild(e), i=oi(n.$subContent), this.SM(i) || i.adjust(), e.repaintMe && (delete e.repaintMe, i.config.hidden= !1, i.ye()); else {
				var s, h=this.P.subview;
				(i='function'== typeof h?h.call(this, n, t.firstChild):((s=_(h)).$scope=this.$scope, si(s, t.firstChild))).getMasterView=S(function() {return this;}, this), n.$subContent=i.config.id, this.Jy[n.$subContent]=i.$view, this.Bt.push(i), i.attachEvent('onResize', S(function(t, i, e, s) {i && i!=s && this.refresh(n.id);}, this)), this.callEvent('onSubViewCreate', [i, n]);
			}
			this.MM(n, i || oi(e));
		},
		gM:function(i, e) {
			var t, s=ft('DIV', {'class':'webix_measure_size webix_cell webix_dtable_subrow'}, '');
			s.style.cssText='width:'+this.me+'px; height:auto; visibility:hidden; position:absolute; top:0px; left:0px; overflow:hidden;', this.$view.appendChild(s), s.offsetHeight<1 && (t=this.$view.cloneNode(!0), document.body.appendChild(t), t.appendChild(s)), this.data.each(function(t) {(t && !i || t.id==i && t.$sub) && (s.innerHTML=e || this.P.subrow(t, this.type), t.$subHeight=s.offsetHeight);}, this), s=dt(s), t && dt(t);
		},
		closeSub:function(t) {
			var i=this.getItem(t);
			if(i.$subopen) {
				i.$row= !1, i.$subopen= !1;
				var e=this.Jy[i.$subContent];
				e && (oi(e).config.hidden= !0), this.refresh(t), this.callEvent('onSubViewClose', [t]);
			}
		}
	}, Fr={
		spans_setter:function(t) {return t && !this.ol && this.kM(), t;},
		kM:function() {
			this.ol={}, this.Iy=[], this.data.attachEvent('onStoreLoad', S(function(t, i) {i && i.spans && this.addSpan(i.spans);}, this)), this.data.attachEvent('onClearAll', S(function() {this.ol={};}, this)), this.attachEvent('onSyncScroll', function(t, i, e) {for(var s=0; s<3; s++) Yi.ms(this.Iy[s], 1==s?t:0, i, e);}), this.attachEvent('onScrollY', this.CM), this.attachEvent('onScrollX', this.CM), this.attachEvent('onAfterRender', this.$M), this.attachEvent('onColumnResize', this.$M), this.attachEvent('onSelectChange', this.DM);
		},
		addSpan:function(t, i, e, s, n, h) {if('object'!=M(t)) s=s || 1, e=e || 1, this.ol[t] || (this.ol[t]={}), this.ol[t][i]=[e, s, n, h]; else for(var r=0; r<t.length; r++) this.addSpan.apply(this, t[r]);},
		removeSpan:function(t, i) {
			arguments.length || (this.ol={});
			var e=this.ol[t];
			e && delete e[i];
		},
		getSpan:function(t, i) {
			if(!t) return this.ol;
			var e, s, n, h, r, o=this.ol;
			for(t in e=this.getIndexById(t), n=this.getColumnIndex(i), o) for(i in o[t]) if(r=o[t][i], s=this.getIndexById(t), 0<=(h=this.getColumnIndex(i)) && 0<=s && !(e>s+r[1]-1 || e<s || n>h+r[0]-1 || n<h)) return [t, i].concat(r);
			return null;
		},
		$M:function() {
			var t, i, e=this.nl.length-this.P.rightSplit;
			for(dt(this.Iy), i=0; i<3; i++) t=this.Iy[i]=ft('DIV', {'class':'webix_span_layer'}), this.st.childNodes[i].appendChild(t);
			this.CM(), this.P.leftSplit && this.IM(this.Iy[0], 0, this.P.leftSplit), this.P.rightSplit && this.IM(this.Iy[2], e, this.nl.length), this.IM(this.Iy[1], this.P.leftSplit, e), this.P.topSplit && !q.touch && this.AM();
		},
		TM:function() {
			for(var t, i=0, e=0, s=0, n=0; i<this.P.leftSplit;) e+=this.nl[i].width, i++;
			for(t=(i=this.nl.length-1)-this.P.rightSplit; t<=i;) n+=this.nl[i].width, i--;
			for(i=this.P.leftSplit; i<this.nl.length-this.P.rightSplit; i++) s+=this.nl[i].width;
			return [e, s, n];
		},
		AM:function() {
			var t, i, e, s=this.nl.length-this.P.rightSplit;
			for(i=3; i<6; i++) t=this.Iy[i]=ft('DIV', {'class':'webix_span_layer_top'}), this.st.childNodes[i-3].appendChild(t);
			e=this.TM(), this.P.leftSplit && (this.Iy[3].style.width=e[0]+'px', this.IM(this.Iy[3], 0, this.P.leftSplit, !0)), this.P.rightSplit && (this.Iy[5].style.width=e[2]+'px', this.IM(this.Iy[5], s, this.nl.length, !0)), this.Iy[4].style.width=e[1]+'px', this.IM(this.Iy[4], this.P.leftSplit, s, !0);
		},
		IM:function(t, i, e, s) {
			for(var n=0, h=this.data.$min || 0, r=this.data.$max || this.data.order.length, o=h; o<r; o++) {
				var a=this.data.order[o];
				if(a) {
					var u=this.ol[a];
					if(u && (!s || o<this.P.topSplit)) for(var c=i; c<e; c++) {
						var f=this.nl[c].id;
						u[f] && this.FM(t, o, c, u, n, i, a, f);
					}
					n+=this.kx(this.getItem(a));
				}
			}
		},
		DM:function() {
			for(var t=this.config.select, i='cell'==t || 'column'==t, e=this.getSelectedId(!0), s=[], n=this.VM || [], h=V()+'', r=!1, o=0; o<e.length; o++) {
				var a=this.ol[e[o]];
				!a || i && !a[e[o].column] || (a.$selected && a.$selected.id==e[o].id || (r= !0), a.$selected=e[o], a.$time=h, s.push(e[o].id));
			}
			for(var u=0; u<n.length; u++) {
				var c=this.ol[n[u]];
				c && c.$time!==h && (delete c.$selected, r= !0);
			}
			this.VM=[].concat(e), r && this.$M();
		},
		zM:function(t, i) {
			for(var e=0, s=t; s<i; s++) {
				var n=this.nl[s];
				e+=n?n.width:0;
			}
			return e;
		},
		BM:function(t, i) {
			for(var e=0, s=t; s<i; s++) {
				var n=this.getItem(this.data.order[s]);
				e+=n?this.kx(n):this.P.rowHeight;
			}
			return e;
		},
		FM:function(t, i, e, s, n, h, r, o) {
			var a=s[o], u=a[2] || this.getText(r, o), c='';
			!s.$selected || 'row'!==this.P.select && s.$selected.column!==o || (c='webix_selected ');
			var f={
				column:e,
				row:i,
				'class':c+'webix_cell webix_table_cell webix_dtable_span '+(a[3] || ''),
				'aria-colindex':e+1,
				'aria-rowindex':i+1
			};
			1<a[0] && (f['aria-colspan']=a[0]), 1<a[1] && (f['aria-rowspan']=a[1]);
			var l=ft('DIV', f, ''+u);
			l.style.top=n+'px', l.style.left=this.zM(h, e)+'px', l.style.width=this.zM(e, e+a[0])+'px', l.style.height=this.BM(i, i+a[1])+'px', t.appendChild(l);
		},
		CM:function() {if(!this.P.prerender) for(var t=this.getScrollState(), i=0; i<3; i++) this.Iy[i].style.top='-'+(t.y || 0)+'px';},
		Fy:function(t, i) {
			var e, s, n=!1;
			return this.ol && (e=this.getSpan(t.row, t.column), s=this.getSpan(i.row, i.column), e && s && e[0]==s[0] && e[1]==s[1] && (n= !0)), n;
		},
		getSpanNode:function(t) {
			for(var i=this.Iy, e=this.getIndexById(t.row), s=this.getColumnIndex(t.column), n=0; n<i.length; n++) for(var h=i[n].childNodes, r=0; r<h.length; r++) if(h[r].getAttribute('row')==e && h[r].getAttribute('column')==s) return h[r];
			return null;
		}
	}, Vr={
		name:'datatable',
		defaults:{
			leftSplit:0,
			rightSplit:0,
			topSplit:0,
			columnWidth:100,
			sort:!0,
			prerender:!1,
			autoheight:!1,
			autowidth:!1,
			header:!0,
			fixedRowHeight:!0,
			scrollAlignY:!0,
			scrollX:!0,
			scrollY:!0,
			datafetch:50,
			navigation:!0
		},
		$skin:function() {this.defaults.rowHeight=Li.rowHeight, this.defaults.minRowHeight=Li.rowHeight-6, this.defaults.headerRowHeight=Li.barHeight-2*Li.borderWidth, this.defaults.minColumnWidth=2*Li.dataPadding+Li.borderWidth;},
		on_click:{
			webix_excel_filter:function() {return !1;},
			webix_richfilter:function() {return !1;},
			webix_table_checkbox:function(t, i) {
				i=this.locate(t);
				var e=this.getItem(i.row), s=this.getColumnConfig(i.column), n=t.target, h=('checkbox'==n.type?n.checked:e[i.column]!=s.checkValue)?s.checkValue:s.uncheckValue, r={};
				return r[i.column]=h, this.updateItem(i.row, r, this.P.checkboxRefresh?'update':'save'), this.callEvent('onCheck', [i.row, i.column, h]), !1;
			},
			webix_table_radio:function(t) {
				var e=this.locate(t), i=this.getItem(e.row), s=this.getColumnConfig(e.column);
				return this.eachRow(function(t) {
					var i=this.data.pull[t];
					i && i[e.column]==s.checkValue && (i[e.column]=s.uncheckValue);
				}), i[e.column]=s.checkValue, this.callEvent('onCheck', [e.row, e.column, !0]), this.refresh(), !1;
			}
		},
		on_dblclick:{webix_table_checkbox:function() {return this.on_click.webix_table_checkbox.apply(this, arguments);}},
		on_context:{},
		$init:function(t) {
			this.on_click=H.extend({}, this.on_click);
			this.Oi.innerHTML='<div class=\'webix_ss_header\'><div class=\'webix_hs_left\'></div><div class=\'webix_hs_center\'></div><div class=\'webix_hs_right\'></div></div><div class=\'webix_ss_body\'><div class=\'webix_ss_left\'><div class=\'webix_ss_center_scroll\'></div></div><div class=\'webix_ss_center\'><div class=\'webix_ss_center_scroll\' role=\'rowgroup\'></div></div><div class=\'webix_ss_right\'><div class=\'webix_ss_center_scroll\'></div></div></div><div class=\'webix_ss_hscroll\' role=\'scrollbar\' aria-orientation=\'horizontal\'></div><div class=\'webix_ss_footer\'><div class=\'webix_hs_left\'></div><div class=\'webix_hs_center\'></div><div class=\'webix_hs_right\'></div></div><div class=\'webix_ss_vscroll_header\'></div><div class=\'webix_ss_vscroll\' role=\'scrollbar\' aria-orientation=\'vertical\'></div><div class=\'webix_ss_vscroll_footer\'></div>', this.xM=this.Oi.id=this.name+V(), this.Oi.className+=' webix_dtable', this.tt=this.Oi, this.k=this.Oi.firstChild, this.st=this.k.nextSibling, this.el=this.st.nextSibling.nextSibling, this.Vt.setAttribute('role', 'grid'), t.editable || this.Vt.setAttribute('aria-readonly', 'true'), this.data.provideApi(this, !0), this.data.attachEvent('onParse', S(this.HM, this)), this.$ready.push(this.RM), this.nl=[], this.go=[], this.rl=[], this.al=[], this.EM=[], this.Io={}, this.yo={}, this.PM={}, this.jM=[], this.Jo=this.NM=0, this.Bt=[], this.data.attachEvent('onServerConfig', S(this.LM, this)), this.data.attachEvent('onServerOptions', S(this.OM, this)), this.attachEvent('onViewShow', function() {this.e_(), this.WM();}), this.data.attachEvent('onClearAll', S(function(t) {t || (this.ph=this.vh=0, this._h && this._h.reset(), this.dh && this.dh.reset(), this.UM(0));}, this)), this.attachEvent('onDestruct', this.YM), this.attachEvent('onKeyPress', this.Se), this.attachEvent('onScrollY', this.qM), y('onDataTable', [this, t]);
		},
		GM:function() {this.Ry=this.Nx=q.scrollSize, ut('#'+this.xM+' .webix_cell { height:'+this.P.rowHeight+'px; line-height:'+(this.P.rowLineHeight || this.P.rowHeight)+'px;'+(this.P.fixedRowHeight?'':'white-space:normal;')+' }'), ut('#'+this.xM+' .webix_hcell { height:'+this.P.headerRowHeight+'px; line-height:'+this.P.headerRowHeight+'px;}'), this.GM=function() {};},
		RM:function() {this.data.attachEvent('onStoreLoad', S(this.WM, this)), this.data.attachEvent('onSyncApply', S(this.WM, this)), this.data.attachEvent('onStoreUpdated', S(function() {return this.render.apply(this, arguments);}, this)), this.data.attachEvent('onStoreUpdated', S(this.XM, this)), this.render();},
		refresh:function() {this.render();},
		Xy:function() {
			var t=this;
			clearTimeout(this.JM), this.JM=k(function() {t.JM=0, R(t.KM) || (t.UM(t.KM), delete t.KM), t.render();});
		},
		render:function(t, i, e) {
			if('save'!=e && !this.JM) {
				if(!this.nl.length) {
					var s=this.P.columns;
					if(!s || !s.length) {
						if(!this.P.autoConfig || !this.data.order.length || this.go.length) return;
						this.Mo=0, this.ZM();
					}
					this.Yy();
				}
				if(!this.isVisible(this.P.id) || this.$blockRender) return this.GM();
				var n=this.config.experimental && !this.P.subview;
				return !t || -1==i || 'paint'!=e && 'update'!=e || n?(this.QM && (clearTimeout(this.QM), this.QM=0), this.callEvent('onBeforeRender', [this.data])?(this.GM(), this.Mo || this.qy(), this.me && (n && ('paint'==e || 'update'==e) && t?this.tS(t):this.iS(!0, !0)), t && 'update'==e || (this.Vx=this.eS(), this.sS()), this.Vt.setAttribute('aria-colcount', Math.max(this.go.length, this.nl.length)), this.Vt.setAttribute('aria-rowcount', this.data.count()), this.callEvent('onAfterRender', [this.data]), !0):void 0):(this.QM && clearTimeout(this.QM), void (this.QM && this.nS!=t?(this.nS=null, this.QM=k(function() {this.render();}, this)):(this.nS=t, this.QM=k(function() {this.render(t, -1, e);}, this))));
			}
		},
		getColumnConfig:function(t) {return this.hl[t] || this.So[t];},
		OM:function(t) {
			for(var i in t) {
				var e=this.getColumnConfig(i), s=new Ch({data:t[i]});
				this.Bt.push(s), this.Fu(s, e);
			}
		},
		LM:function(t) {this.ku(), t.columns && this.Mo && this.refreshColumns(null, !0);},
		Yy:function() {
			if(this.P.columns) {
				this.nl=this.P.columns, this.hl={};
				for(var t=0; t<this.nl.length; t++) {
					var i=this.nl[t], e=(this.hl[i.id]=i).cssFormat;
					if(e && (i.cssFormat=v(e, this.$scope)), i.width=this.hS(i.width || this.P.columnWidth, i), 'string'== typeof i.format && (i.format=I[i.format] || window[i.format]), i.numberFormat) {
						var s=i.numberFormat;
						'string'== typeof s && (i.numberFormat=s=nn.getConfig(s)), i.format=nn.numToStr(s), i.editFormat=i.editFormat || function(t) {return nn.format(t, s);}, i.editParse=i.editParse || function(t) {return nn.parse(t, s);};
					}
					R(i.checkValue) && (i.checkValue=1), R(i.uncheckValue) && (i.uncheckValue=0), i.css && 'object'==M(i.css) && (i.css=at(i.css));
					var n=i.template;
					n && ('string'== typeof n && (n=n.replace(/#\$value#/g, '#'+i.id+'#')), i.template=Yt(n));
				}
				this.rS('header', this.rl), this.rS('footer', this.al), this.callEvent('onStructureLoad', []);
			}
		},
		oS:function() {this.qy();},
		YM:function() {for(var t=0; t<this.nl.length; t++) delete this.nl[t].attached, delete this.nl[t].node;},
		qy:function() {
			this.gw=this.nl.length-this.P.rightSplit;
			for(var t=this.aS=0; t<this.nl.length; t++) {
				if(!this.nl[t].node) {
					var i=ft('DIV');
					i.style.width=this.nl[t].width+'px', this.nl[t].node=i;
				}
				t>=this.P.leftSplit && t<this.gw && (this.aS+=this.nl[t].width);
			}
			var e=[];
			if(this.P.rightSplit) {
				var s=this.nl.length-this.P.rightSplit;
				e[s]=' webix_first', e[s-1]=' webix_last';
			}
			if(this.P.leftSplit) {
				var n=this.P.leftSplit;
				e[n]=' webix_first', e[n-1]=' webix_last';
			}
			e[0]=(e[0] || '')+' webix_first webix_select_mark';
			var h=this.nl.length-1;
			e[h]=(e[h] || '')+' webix_last';
			for(var r=0; r<this.nl.length; r++) {
				var o=this.nl[r].node;
				o.setAttribute('column', r), o.className='webix_column '+(this.nl[r].css || '')+(e[r] || '');
			}
			this.uS(), this.cS(), this.fS(), this.Qw(), this.Mo= !0;
		},
		cS:function() {
			for(var t=0, i=0; i<this.nl.length; i++) {
				var e=this.nl[i];
				i!=this.P.leftSplit && i!=this.gw || (t=0), e.node && (e.node.style.left=t+'px', (this.P.leftSplit || this.P.rightSplit) && (dt(e.node), e.attached= !1)), t+=e.width;
			}
		},
		Qw:function() {
			this.lS || (this.lS=0), this.Jo=this.NM=0, this.P.header && (this.dS(this.k, 0, 1), this.rS('header', this.rl), this.Jo=this.rl.vS, this._S(this.k, 'header', this.rl)), this.P.footer && (this.dS(this.el, 0, 1), this.rS('footer', this.al), this.NM=this.al.vS, this._S(this.el, 'footer', this.al)), this.refreshHeaderContent(!1, !1), this.pS();
			for(var t=0; t<this.jM.length; t++) {
				var i=this.jM[t];
				this.mS(i, this.PM[i]);
			}
		},
		bS:function(t, i, e) {
			var s=0, n=t.colspan || 1, h='webix_hcell '+(t.css || '');
			if(t.rotate) h+=' webix_measure_rotate'; else for(var r=0; r<n; r++) s+=this.nl[e+r]?this.nl[e+r].width:this.config.columnWidth;
			var o=St([t.text], h, s);
			return (t.rotate?o.width:o.height)+1;
		},
		rS:function(t, i) {
			for(var e=0, s=i.length=0; s<this.nl.length; s++) {
				var n=this.nl[s][t];
				n && 'object'==M(n) && n.length || (R(n) && (n='header'==t?this.nl[s].id:''), n=[n]);
				for(var h=0; h<n.length; h++) 'object'!=M(n[h]) && (n[h]={text:n[h]}), n[h] && n[h].height && (i[h]=Math.max(i[h] || 0, n[h].height)), n[h] && n[h].autoheight && (i[h]=Math.max(i[h] || 0, this.bS(n[h], this.nl[s], s))), n[h] && n[h].css && 'object'===M(n[h].css) && (n[h].css=at(n[h].css));
				e=Math.max(e, n.length), this.nl[s][t]=n;
			}
			for(var r=(i.vS=e)-1; 0<=r; r--) i[r]=i[r] || this.P.headerRowHeight, i.vS+=1*i[r];
			for(var o=0; o<this.nl.length; o++) for(var a=this.nl[o][t], u=0; u<a.length; u++) {
				if(a[u] && a[u].rowspan) for(var c=1; c<a[u].rowspan; c++) a[u+c]=null;
				if(a[u] && a[u].colspan) for(var f=1; f<a[u].colspan; f++) this.nl[o+f][t][u]=null;
			}
			for(var l=0; l<this.nl.length; l++) {
				var d=this.nl[l][t];
				if(d.length<e) {
					var v=d.length-1;
					d[v].rowspan=e-d.length+1;
					for(var _=v+1; _<e; _++) d[_]=null;
				}
			}
			return e;
		},
		gS:function(t, i) {for(var e=t.getElementsByTagName('TD'), s=0; s<e.length; s++) if(e[s].getAttribute('active_id')==i) return e[s];},
		getHeaderContent:function(t) {
			var i=this.gS(this.k, t);
			if(i || (i=this.gS(this.el, t)), i) {
				var e=this.Io[t], s=wn[e.content], n={
					type:s,
					getValue:function(t) {return s.getValue(i, t);},
					setValue:function(t) {return s.setValue(i, t);}
				};
				return s.getHelper && H.extend(n, s.getHelper(i, e)), n;
			}
		},
		wS:function(t, i, e) {
			var s=e?-1:0;
			for(e+=i; i<e; i++) s+=t[i]+1;
			return s;
		},
		xS:function(t, i, e, s, n) {
			if(t==i) return '';
			var h='<table role=\'presentation\' style=\'width:'+e+'px\' cellspacing=\'0\' cellpadding=\'0\'>';
			h+='<tr class=\'webix_size_row\'>';
			for(var r=t; r<i; r++) h+='<td style=\'width:'+this.nl[r].width+'px;\'></td>';
			h+='</tr>';
			for(var o=this.nl[0][s].length, a=0; a<o; a++) {
				h+='<tr section=\''+s+'\' role=\'row\'>';
				for(var u=t; u<i; u++) {
					var c=this.nl[u][s][a];
					if(null!==c) {
						c.content && (c.contentId=c.contentId || V(), c.columnId=this.nl[u].id, c.format=this.nl[u].format, wn[c.content], c.content, c.text=wn[c.content].render(this, c), this.Io[c.contentId]=c, this.yS= !0), h+='<td  role=\'presentation\' column=\''+(c.colspan?c.colspan-1+u:u)+'\'';
						var f='';
						u==t && (f+='webix_first'), i-1<=u+(c.colspan?c.colspan-1:0) && (f+=' webix_last'), (c.rowspan && a+c.rowspan===o || a===o-1) && (f+=' webix_last_row'), f && (h+=' class="'+f+'"');
						var l=n[a], d='';
						c.contentId && (h+=' active_id=\''+c.contentId+'\''), c.colspan && (h+=' colspan=\''+c.colspan+'\''), c.rowspan && (h+=' rowspan=\''+c.rowspan+'\'', l=this.wS(this.rl, a, c.rowspan)), l!=this.P.headerRowHeight && (d=' style=\'line-height:'+l+'px; height:'+l+'px;\'');
						var v='webix_hcell';
						c.css && (v+=' '+c.css), this.nl[u].$selected && (v+=' webix_sel_hcell'), h+='><div role=\'columnheader\' class=\''+v+'\''+d+'>';
						var _=''===c.text?'&nbsp;':c.text;
						c.rotate && (_='<div class=\'webix_rotate\' style=\'width:'+(l-10)+'px; transform-origin:center '+(l-15)/2+'px;-webkit-transform-origin:center '+(l-15)/2+'px;\'>'+_+'</div>'), h+=_+'</div></td>';
					}
				}
				h+='</tr>';
			}
			return h+='</tr></table>';
		},
		showItemByIndex:function(t, i) {
			var e=this.P.pager;
			if(e && t>=this.P.topSplit) {
				var s=Math.floor(t/e.size);
				s!=e.page && oi(e.id).select(s);
			}
			var n=this.getScrollState();
			if(t>=this.P.topSplit || this.P.prerender && -1!=t) {
				var h=this._w();
				if(t<h[0]+1 || t>=h[1]-1) {
					var r=this.MS(e?this.data.$min:0, t), o=this.zx+1, a=this._x(t);
					if(t<h[0]+1) r=Math.max(0, r)-(this.SS || 0); else if(o<r+a) {
						r+=a-o;
						for(var u=t; 0<u && 0<o; u--) o-=this._x(u);
						0<t && o && (r+=this._x(t+1));
					} else r=n.y;
					n.y=r;
				}
			}
			if(-1!=i) {
				if(i<this.P.leftSplit || i>=this.gw) return this.scrollTo(n.x, n.y);
				var c=this.vw();
				if(i<c[0]+1 || i>=c[1]-1) {
					for(var f=0, l=this.P.leftSplit; l<i; l++) f+=this.nl[l].width;
					var d=this.nl[i].width;
					i<c[0]+1 || (f+d>this.vx?f+=d-this.vx:f=n.x), n.x=f;
				}
			}
			this.scrollTo(n.x, n.y);
		},
		showCell:function(t, i) {
			if(!i || !t) {
				var e=this.getSelectedId(!0);
				1==e.length && (i=i || e[0].column, t=t || e[0].row);
			}
			i=i?this.getColumnIndex(i):-1, t=t?this.getIndexById(t):-1, this.showItemByIndex(t, i);
		},
		scrollTo:function(t, i) {
			if(this._h) {
				if(this.Tx) return this.Tx(t, i);
				null!==t && this._h.scrollTo(t), null!==i && this.dh.scrollTo(i);
			}
		},
		Eo:'touch',
		getScrollState:function() {
			if(this.Fx) return this.Fx();
			var t=this.lw?0:this.kS || 0;
			return {
				x:this.ph || 0,
				y:this.vh+t
			};
		},
		showItem:function(t) {this.showItemByIndex(this.getIndexById(t), -1);},
		_S:function(t, i, e) {
			var s=t.childNodes;
			s[0].innerHTML=this.xS(0, this.P.leftSplit, this.Mw, i, e), s[1].innerHTML=this.xS(this.P.leftSplit, this.gw, this.aS, i, e), s[2].innerHTML=this.xS(this.gw, this.nl.length, this.cx, i, e), this.Uy && (s[1].scrollLeft=this.getScrollState().x), s[1].onscroll=S(this.CS, this);
		},
		CS:function() {
			var t=this.getScrollState().x, i=this.k.childNodes[1].scrollLeft;
			Math.ceil(i)!=Math.ceil(t) && this.scrollTo(i, null);
		},
		XM:function() {this.refreshHeaderContent(!0, !0);},
		WM:function() {this.refreshHeaderContent(!1, !0);},
		refreshHeaderContent:function(t, i, e) {this.P.header && (i && this.dS(this.k, t, 1, e), this.dS(this.k, t, 0, e)), this.P.footer && (i && this.dS(this.el, t, 1, e), this.dS(this.el, t, 0, e));},
		refreshFilter:function(t) {this.refreshHeaderContent(!1, !0, t);},
		dS:function(t, i, e, s) {
			if(this.yS && t) for(var n=t.getElementsByTagName('TD'), h=0; h<n.length; h++) {
				var r=n[h].getAttribute('active_id');
				if(r) {
					var o=this.Io[r];
					if(s && s!=o.columnId) continue;
					var a=wn[o.content];
					e?a.getValue && (o.value=a.getValue(n[h])):i && !a.trackCells || a.refresh(this, n[h], o);
				}
			}
		},
		headerContent:[],
		$S:function(t, i, e) {
			if(this.Nx) {
				if(t.style.height=Math.max(i, 1)-1+'px', t.style.width=(this.gw?0:e)+this.Nx-1+'px', q.isWebKit) t.offsetWidth;
			} else t.style.display='none';
		},
		pS:function() {this.P.header && this.$S(this.DS, this.Jo, this.lS), this.P.footer && this.$S(this.IS, this.NM, this.lS);},
		Rh:function() {
			var t=!(this.P.autowidth || !1===this.P.scrollX);
			this.Ry=t?q.scrollSize:0;
			var i=!(this.P.autoheight || !1===this.P.scrollY);
			this.Nx=i?q.scrollSize:0, q.touch && (t=i= !1), this._h && (this._h.P.scrollSize=this.Ry, this._h.P.scrollVisible=t), this.dh && (this.dh.P.scrollSize=this.Nx, this.dh.P.scrollVisible=i);
		},
		uS:function() {
			var t, i;
			if(this.vh=0, this.ph=0, t=i=1, (this.P.autoheight || !1===this.P.scrollY) && (i=this.Nx=0), (this.P.autowidth || !1===this.P.scrollX) && (t=this.Ry=0), q.touch && (t=i=0), this._h || (this._h=si({
				view:'vscroll',
				container:this.el.previousSibling,
				scrollWidth:this.aS,
				scrollSize:this.Ry,
				scrollVisible:t
			}), !t || this.Ry || q.$customScroll || (this._h.Vt.style.position='absolute'), this._h.attachEvent('onScroll', S(this.AS, this))), !this.dh) {
				this.DS=this.el.nextSibling;
				var e=this.DS.nextSibling;
				this.IS=e.nextSibling, this.dh=si({
					view:'vscroll',
					container:e,
					scrollHeight:100,
					scroll:'y',
					scrollSize:this.Nx,
					scrollVisible:i
				}), this.dh.activeArea(this.st), this._h.activeArea(this.st, !0), this.dh.attachEvent('onScroll', S(this.TS, this));
			}
			this.me && this.callEvent('onResize', [this.me, this.ge]), q.$customScroll && re.enable(this), this.uS=function() {};
		},
		columnId:function(t) {return this.nl[t].id;},
		getColumnIndex:function(t) {
			for(var i=0; i<this.nl.length; i++) if(this.nl[i].id==t) return i;
			return -1;
		},
		FS:function(t, i) {
			var e, s=0, n=0, h=0, r=0, o=0;
			for(e=0; e<this.nl.length && (this.gw!=e && this.P.leftSplit!=e || (s=0, o++), this.nl[e].id!=i); e++) s+=this.nl[e].width;
			for(n+=this.nl[e].width, e=0; e<this.data.order.length && this.data.order[e]!=t; e++) r+=this._x(e);
			return h+=this._x(e), [s, n, r-this.vh, h, this.st.childNodes[o]];
		},
		Ww:function() {return this.row;},
		locate:function(t, i) {
			if(this!=oi(t)) return null;
			for(t=t.target || t; t && t.getAttribute && t!==this.$view;) {
				var e=Ct(t).toString(), s=null;
				if(-1!=e.indexOf('webix_cell') && (s=this.Fs(t)) && (s.row=this.data.order[s.rind]), -1!=e.indexOf('webix_hcell') && (s=this.Fs(t)) && (s.header= !0), -1!=e.indexOf('webix_drop_area') && (s=this.Fs(t)) && (s.row=s.rind='$webix-drop'), s) return i?s.header?null:s.row:(s.column=this.nl[s.cind].id, s.toString=this.Ww, s);
				t=t.parentNode;
			}
			return null;
		},
		Fs:function(t) {
			var i=t.parentNode;
			if(!i) return null;
			var e=1*(t.getAttribute('column') || i.getAttribute('column')), s=t.getAttribute('aria-rowindex');
			return {
				rind:t.getAttribute('row') || (s?s-1:0),
				cind:e,
				span:1*(t.getAttribute('colspan') || i.getAttribute('colspan'))
			};
		},
		Hx:function() {
			for(var t=-this.vx, i=0; i<this.nl.length; i++) t+=this.nl[i].width;
			this.ph=Math.min(this.ph, Math.max(0, t));
		},
		$o:function(t) {this.Mo && (this.Hx(), this.cS(), this.fS(), this.Qw(), this.sS(), t || this.iS(!1, !1));},
		setColumnWidth:function(t, i, e) {return this.Co(this.getColumnIndex(t), i, e);},
		Co:function(t, i, e, s) {
			if(!(isNaN(i) || t<0)) {
				var n=this.nl[t];
				i=this.hS(i, n);
				var h=n.width;
				return h!=i && (t>=this.P.leftSplit && t<this.gw && (this.aS+=i-h), n.width=i, !!n.node && (n.node.style.width=i+'px', e || this.$o(), this.callEvent('onColumnResize', [n.id, i, h, !!s]), !0));
			}
		},
		hS:function(t, i) {return t=Math.max(t, i.minWidth || this.P.minColumnWidth || 0), t=Math.min(t, i.maxWidth || this.P.maxColumnWidth || 1e5);},
		kx:function(t) {return (t.$height || this.P.rowHeight)+(t.$subopen?t.$subHeight:0);},
		_x:function(t) {
			var i=this.data.order[t];
			return i?this.kx(this.data.pull[i]):this.P.rowHeight;
		},
		MS:function(t, i) {
			if(this.P.fixedRowHeight) return Math.max(i-t, 0)*this.P.rowHeight;
			for(var e=0; t<i; t++) e+=this._x(t);
			return e;
		},
		at:function(t, i, e) {
			t.row && (i=t.column, t=t.row);
			var s=this.getColumnConfig(i).width, n=this.getItem(t).$height || this.P.rowHeight;
			if(this.config.spans && e) {
				var h=this.getSpan(t, i);
				if(h) {
					var r=this.getSpanNode({
						row:h[0],
						column:h[1]
					});
					s=r.offsetWidth, n=r.offsetHeight;
				}
			}
			for(var o=0, a=0, u=0; u<this.nl.length; u++) {
				u!=this.P.leftSplit && u!=this.gw || (o=0);
				var c=this.nl[u];
				if(c.id==i) {
					var f=u<this.P.leftSplit?0:u>=this.gw?2:1;
					a=this.st.childNodes[f].firstChild;
					break;
				}
				o+=c.width;
			}
			var l, d=this.getIndexById(t);
			if(d<this.P.topSplit) l=this.MS(0, d); else {
				var v=this.mw || 0;
				l=this.MS(v, d)+(this.lw || 0)+(v<=d && this.SS || 0);
			}
			return {
				parent:a,
				top:l,
				left:o,
				width:s,
				height:n
			};
		},
		eS:function() {
			var t=this.P.pager, i=0, e=this.data.order.length;
			return t && (i=t.size*t.page, e=Math.min(e, i+t.size), t.level && (i=this.data.$min, e=this.data.$max)), this.MS(i, e);
		},
		setRowHeight:function(t, i) {
			if(!isNaN(i)) {
				i=Math.max(i, this.P.minRowHeight || 0), i=Math.min(i, this.P.maxRowHeight || 1e5);
				var e=this.getItem(t), s=e.$height || this.P.rowHeight;
				s!=i && (e.$height=i, this.config.fixedRowHeight= !1, this.render(), this.callEvent('onRowResize', [t, i, s]));
			}
		},
		TS:function(t) {
			var i=this.vh!==t;
			if(this.vh=t, this.P.prerender) for(var e=this.st.childNodes, s=0; s<e.length; s++) e[s].scrollTop=t; else this.iS();
			q.$customScroll && re.Rh(this.st), i && (this.callEvent('onScrollY', []), this.callEvent('onAfterScroll', []));
		},
		UM:function(t) {this.st.childNodes[1].scrollLeft=this.ph=t, this.P.header && (this.k.childNodes[1].scrollLeft=t), this.P.footer && (this.el.childNodes[1].scrollLeft=t);},
		AS:function(t) {
			var i=this.ph!==t;
			this.JM?this.KM=t:this.UM(t), !1===this.P.prerender && this.iS(!this.VS), q.$customScroll && re.Rh(this.st), i && (this.callEvent('onScrollX', []), this.callEvent('onAfterScroll', []));
		},
		vw:function(t) {
			if(t) return [0, this.nl.length];
			for(var i=this.ph, e=this.P.leftSplit; 0<i && this.nl.length-1>e;) i-=this.nl[e].width, e++;
			var s=e;
			for(i && 0<e && e--, i+=this.vx; 0<i && s<this.gw;) i-=this.nl[s].width, s++;
			return [e, s];
		},
		getVisibleCount:function() {return Math.floor(this.zx/this.config.rowHeight);},
		_w:function(t) {
			var i=this.vh, e=0, s=this.count(), n=this.P.pager;
			n && (e=n.page*n.size, s=Math.min(s, e+n.size), n.level && (e=this.data.$min, s=this.data.$max));
			var h=e+this.P.topSplit;
			if(t || this.P.autoheight) return [h, s, 0];
			var r=this.P.fixedRowHeight?this.P.rowHeight:0;
			if(r) {
				var o=Math.ceil(i/r);
				i-=o*r, h+=o;
			} else for(; 0<i;) i-=this._x(h), h++;
			var a=0<h && i?-(this._x(h-1)+i):0, u=h;
			if(i && h--, i+=(this.zx || this.ge)-(this.SS || 0), r) {
				var c=Math.ceil(i/r);
				i-=c*r, u+=c;
			} else for(; 0<i && u<s;) i-=this._x(u), u++;
			return s<u && (u=s), [h, u, a];
		},
		tS:function(t) {
			var i=this.getItem(t), e=this.getIndexById(t), s=this._w(), n=this.P.topSplit, h='';
			if(n<=e) {
				if(e<s[0] || e>=s[1]) return;
				e-=s[0]-n;
			} else h=e==n-1?' webix_topcell webix_last_topcell':' webix_topcell';
			for(var r=this.vw(), o=0; o<this.nl.length; o++) {
				var a=this.nl[o];
				if(o<this.gw && o>=this.P.leftSplit && (o<r[0] || o>r[1]) && (a.Ay= -999), a.attached && a.node) {
					var u=a.node.childNodes[e];
					if(!u) continue;
					var c=this.Ox(i, this.nl[o], 0);
					u.innerHTML=c, u.className=this.zS(this.nl[o], c, i, t)+h;
				}
			}
		},
		iS:function(t, i) {
			if(this.nl.length && !this.JM) {
				i && this.BS();
				var e=this.vw(this.P.prerender), s=this._w(!0===this.P.prerender);
				if(t) {
					for(var n=this.P.leftSplit; n<e[0]; n++) this.Oy(n, i);
					for(var h=e[1]; h<this.gw; h++) this.Oy(h, i);
				}
				this.dw=[];
				for(var r=0; r<this.P.leftSplit; r++) this.HS(r, s, i);
				for(var o=e[0]; o<e[1]; o++) this.HS(o, s, i, o==e[0]);
				for(var a=this.gw; a<this.nl.length; a++) this.HS(a, s, i);
				this.RS(s[0], s[1], i), this.ES(s);
			}
		},
		PS:function(t, i) {this.jS=t, this.NS=i, dt(this.EM), this.EM=[];},
		qM:function() {
			if(this.P.prerender && this.LS) {
				var t=this.getScrollState();
				this.LS.style.top='-'+(t.y || 0)+'px';
			}
		},
		RS:function(t, i, e) {
			if(this.LS && (this.LS.style.top=this.lw+'px'), e || t!=this.jS || i!=this.NS) {
				if(this.PS(t, i), this.OS) {
					this.OS= !1;
					for(var s=0; s<this.dw.length; s++) {
						var n, h=this.dw[s], r=this.getItem(h.id);
						n='function'== typeof r.$row?r.$row.call(this, r, this.type):this.Ox(r, this.getColumnConfig(r.$row), s);var o=this.EM[s]=ft('DIV', null, n);
						o.className='webix_cell '+(r.$sub?'webix_dtable_sub'+(this.P.subview?'view':'row'):'webix_dtable_colrow'+(r.$row?' webix_topcell'+(this.data.getMark(r.id, 'webix_selected')?' webix_selected':''):'')), o.setAttribute('column', 0), o.setAttribute('row', h.index);
						var a=r.$height || this.P.rowHeight;
						r.$subopen?o.style.height=r.$subHeight+'px':o.style.height=a+'px', o.style.paddingRight=q.scrollSize+'px';
						var u=this.dw[s].index<this.config.topSplit?-this.lw:0;
						o.style.top=u+h.top+(r.$subopen?a-1:0)+'px', this.LS || (this.LS=ft('DIV'), this.LS.style.position='relative', this.LS.style.top=this.lw+'px', this.st.appendChild(this.LS)), this.LS.appendChild(o), this.attachEvent('onSyncScroll', function(t, i, e) {Yi.ms(this.LS, 0, i, e);}), this.P.subview && this.callEvent('onSubViewRender', [r, o]);
					}
				}
			} else if(this.config.topSplit) for(var c=0; c<this.dw.length; c++) {
				var f=this.EM[c];
				this.dw[c].index<this.config.topSplit && (f.style.top=this.dw[c].top-this.lw+'px');
			}
		},
		ES:function(t) {
			var i=this.P.pager, e=this.P.datafetch, s=!this.WS || t[0]>=this.WS;
			if(this.WS=t[0], this.US) {
				if(i && (!e || e>=i.size) && this.YS([0, i.size*i.page], Math.max(e, i.size), !0)) return this.US=null;
				this.sl(this.US, s), this.US=null;
			} else this.P.loadahead && this.YS(t, this.P.loadahead, s);
		},
		YS:function(t, i, e) {
			var s=t[1], n=s+i;
			e || (s=t[0]-i, n=t[0]), s<0 && (s=0), n=Math.min(n, this.data.order.length-1);
			for(var h=!1, r=s; r<n; r++) this.data.order[r] || (h?(h.last=r, h.count=r-s):h={
				start:r,
				count:n-s
			});
			if(h) return this.sl(h, e), !0;
		},
		sl:function(t, i) {
			var e=Math.max(t.count, this.P.datafetch || this.P.loadahead || 0), s=i?t.start:t.last-e+1;
			this.po(t.count, t.start) || this.loadNext(e, s);
		},
		qS:function(t) {
			if(q.isSafari) {
				var i, e, s, n, h=[this._h, this.dh];
				for(i=0; i<2; i++) (n=h[i]) && n.Og && n.Og.parentNode==t && (e=n.Og);
				e && (this.GS && dt(this.GS), s=(this.GS=e).cloneNode(!0), e.parentNode.insertBefore(s, e), this.GS.style.display='none', this.st.appendChild(this.GS));
			}
		},
		Oy:function(t) {
			var i=this.nl[t];
			this.qS(i.node), dt(i.node), i.attached= !1;
		},
		BS:function() {
			for(var t=0; t<this.nl.length; t++) this.nl[t].Ay= -1;
			this.EM.length && (dt(this.EM), this.EM=[]);
		},
		getText:function(t, i) {return this.Ox(this.getItem(t), this.getColumnConfig(i), 0);},
		getCss:function(t, i) {
			var e=this.getItem(t);
			return this.zS(this.getColumnConfig(i), e[i], e, t);
		},
		zS:function(t, i, e, s) {
			var n='webix_cell';
			if(t.cssFormat) {
				var h=t.cssFormat(i, e, s, t.id);
				h && ('object'==M(h)?n+=' '+at(h):n+=' '+h);
			}
			var r=e.$css;
			r && ('object'==M(r) && (e.$css=r=at(r)), n+=' '+r);
			var o=this.data.kr[s];
			if(o && (o.$css && (n+=' '+o.$css), o.$cellCss)) {
				var a=o.$cellCss[t.id];
				a && (n+=' '+a);
			}
			if(e.$cellCss) {
				var u=e.$cellCss[t.id];
				u && ('object'==M(u) && (u=at(u)), n+=' '+u);
			}
			var c=this.data.getMark(e.id, 'webix_selected');
			return (c && (c.$row || c[t.id]) || t.$selected) && (n+=this.Hw), n;
		},
		Ox:function(t, i, e) {
			return t?((s=t[i.id])!==undefined && null!==s || (s=''), i.format && (s=i.format(s)), i.template && (s=i.template(t, this.type, s, i, e)), s):'';
			var s;
		},
		type:{
			checkbox:function(t, i, e, s) {return '<input class=\'webix_table_checkbox\' type=\'checkbox\' '+(e==s.checkValue?'checked="true"':'')+'>';},
			radio:function(t, i, e, s) {return '<input class=\'webix_table_radio\' type=\'radio\' '+(e==s.checkValue?'checked="true"':'')+'>';},
			editIcon:function() {return '<span class=\'webix_icon wxi-pencil\'></span>';},
			trashIcon:function() {return '<span class=\'webix_icon wxi-trash\'></span>';}
		},
		type_setter:function(t) {return this.types && this.types[t]?(this.type=l(this.types[t]), this.type.css && (this.Oi.className+=' '+this.type.css)):ti(this, t), this.type.on_click && H.extend(this.on_click, this.type.on_click), t;},
		HS:function(t, i, e, s) {
			var n=this.nl[t];
			if(!n.attached) {
				var h=t<this.P.leftSplit?0:t>=this.gw?2:1;
				this.st.childNodes[h].firstChild.appendChild(n.node), n.attached= !0, n.split=h;
			}
			if(this.mw=i[0], this.lw=0, this.kS=i[2], this.P.scrollAlignY?i[1]==this.data.order.length || this.data.$pagesize && i[1]%this.data.$pagesize==0?n.node.style.top=(this.lw=i[2])+'px':n.XS && (n.node.style.top='0px'):(this.lw=i[2], n.node.style.top=i[2]+'px'), !(e || n.Ay!=i[0] || n.Ty!=i[1] || this.P.topSplit && n.lw!=this.lw)) return 0;
			for(var r='', o=this.P.columns[t], a={
				row:this.P.rowHeight,
				total:0,
				single:s
			}, u=0; u<this.P.topSplit; u++) r+=this.JS(u, o, i, a, -this.lw, t);
			this.US=null;
			for(var c=Math.max(i[0], this.P.topSplit); c<i[1]; c++) r+=this.JS(c, o, i, a, -1, t);
			return this.qS(n.node), n.node.innerHTML=r, n.Ay=i[0], n.Ty=i[1], n.XS=i[2], n.lw=this.lw, 1;
		},
		JS:function(t, i, e, s, n, h) {
			var r=this.data.order[t], o=this.data.getItem(r), a='';
			if(o) {
				var u=' role=\'gridcell\' aria-rowindex=\''+(t+1)+'\' aria-colindex=\''+(this.getColumnIndex(i.id)+1)+'\''+(o.$count || o.$sub?' aria-expanded=\''+(o.open || o.$subopen?'true':'false')+'\'':'')+(o.$level?' aria-level=\''+o.$level+'\'':'');
				if(s.single && o.$row && (this.OS= !0, this.dw.push({
					top:s.total,
					id:o.id,
					index:t
				}), !o.$sub)) {
					var c=o.$height || s.row;
					return s.total+=c, '<div'+u+' class=\'webix_cell\' style=\'height:'+c+'px;\'></div>';
				}
				var f=this.Ox(o, i, t), l=this.zS(i, f, o, r), d=' aria-selected=\'true\' tabindex=\'0\'';
				if(-1!==l.indexOf('select')) if(-1!==l.indexOf('row')) this.vw()[0]===h && (u+=d); else -1!==l.indexOf('col')?t===e[0] && (u+=d):u+=d;
				var v=!!o.$subopen, _=v?'margin-bottom:'+o.$subHeight+'px;':'';
				0<=n && (0<n && (_+='top:'+n+'px;\''), l='webix_topcell '+l, t==this.P.topSplit-1 && (l='webix_last_topcell '+l)), o.$height?(a='<div'+u+' class=\''+l+'\' style=\'height:'+o.$height+'px;'+_+'\'>'+f+'</div>', s.total+=o.$height-s.row):a='<div'+u+' class=\''+l+'\''+(_?' style=\''+_+'\'':'')+'>'+f+'</div>', v && (s.total+=o.$subHeight);
			} else a='<div role=\'gridcell\' class=\'webix_cell\'></div>', this.US?this.US.last=t:this.US={
				start:t,
				count:e[1]-t
			};
			return s.total+=s.row, a;
		},
		sS:function() {
			if(this.nl.length && !isNaN(1*this.ge)) {
				var t=this.Vx+(this.Ry?this.Ry:0);
				if(!this.P.autoheight && !this.P.yCount || !this.resize()) {
					this.dh.sizeTo(this.ge, this.Jo, this.NM), this.dh.define('scrollHeight', t), this.SS=this.P.topSplit?this.MS(0, this.P.topSplit):0, this.zx=Math.max(0, this.ge-this.Ry-this.Jo-this.NM);
					for(var i=0; i<3; i++) this.st.childNodes[i].style.height=this.zx+'px', this.P.prerender?this.st.childNodes[i].firstChild.style.height=this.Vx+'px':this.st.childNodes[i].firstChild.style.height=this.zx+'px';
					this.k.style.height=this.Jo+'px';
				}
			}
		},
		fS:function() {
			if(this.nl.length) {
				var t=0;
				for(this.Mw=0, this.cx=0, this.vx=0; t<this.P.leftSplit;) this.Mw+=this.nl[t].width, t++;
				for(t=this.nl.length-1; t>=this.gw;) this.cx+=this.nl[t].width, t--;
				if(this.me && (!this.P.autowidth || !this.resize())) {
					this.vx=this.me-this.cx-this.Mw-this.Nx, this.st.childNodes[1].firstChild.style.width=this.aS+'px', this.st.childNodes[0].style.width=this.Mw+'px', this.st.childNodes[1].style.width=this.vx+'px', this.st.childNodes[2].style.width=this.cx+'px', this.k.childNodes[0].style.width=this.Mw+'px', this.k.childNodes[1].style.width=this.vx+'px', this.k.childNodes[2].style.width=this.cx+'px', this.el.childNodes[0].style.width=this.Mw+'px', this.el.childNodes[1].style.width=this.vx+'px', this.el.childNodes[2].style.width=this.cx+'px';
					var i=this.vx-this.aS;
					if(i<0 && (i=0), i!=this.lS && (this.lS=i, this.pS()), q.isWebKit) {
						this.st.childNodes[0].offsetWidth;
						this.st.childNodes[1].offsetWidth, this.st.childNodes[1].firstChild.offsetWidth, this.st.childNodes[2].offsetWidth;
					}
					this._h.sizeTo(this.me-this.Nx), this._h.define('scrollWidth', this.aS+this.Mw+this.cx);
				}
			}
		},
		$getSize:function(t, i) {
			if((this.P.autoheight || this.P.yCount) && this.P.columns) {
				var e=(this.P.yCount || 0)*this.P.rowHeight;
				e || (e=this.isVisible()?this.Vx:this.count()*this.P.rowHeight), this.P.height=Math.max(e+(this.Ry?this.Ry:0)-1, this.P.minHeight || 0)+this.Jo+this.NM;
			}
			this.P.autowidth && this.P.columns && (this.P.width=Math.max(this.aS+this.Mw+this.cx+this.Nx, this.P.minWidth || 0));
			var s=this.Mw+this.cx+this.Nx, n=Hi.api.$getSize.call(this, t, i);
			return n[0]=Math.max(n[0] || s), n;
		},
		e_:function() {
			if(this._h && !q.touch) {
				var t=this.getScrollState();
				this._h.config.scrollPos=this.dh.config.scrollPos=0, this.scrollTo(t.x, t.y);
			}
		},
		$setSize:function() {
			var t=this.me, i=this.ge;
			Hi.api.$setSize.apply(this, arguments) && (this.Mo && (this.callEvent('onResize', [this.me, this.ge, t, i]), this.fS(), this.sS()), this.render());
		},
		KS:function(t, i) {
			var e=this.getColumnConfig(t);
			if(this.P.sort && e.sort) {
				var s='asc';
				this.xo[e.id] && (s='asc'==this.xo[e.id].dir?'desc':'asc'), this.Do(e.id, s, e.sort, i.ctrlKey || i.metaKey);
			}
		},
		markSorting:function(t, i, e) {
			if(i=i || 'asc', !e) for(var s in this.jM=[], this.PM) if(s!==t) {
				var n=this.PM[s].parentNode;
				n && (n.removeAttribute('aria-sort'), n.removeAttribute('tabindex')), dt(this.PM[s]), delete this.PM[s];
			} else this.jM.push(s), this.PM[s].firstChild.innerHTML='1';
			if(t) {
				if(this.PM[t]) this.PM[t].className='webix_ss_sort_'.concat(i); else {
					var h=ft('div', {
						webix_sort_dir:i,
						'class':'webix_ss_sort_'.concat(i)
					}, '<div class="webix_ss_sort_num">'.concat(this.jM.length+1, '</div>'));
					this.mS(t, h, i), this.PM[t]=h, this.jM.push(t);
				}
				var r=this.PM[this.jM[0]];
				switch(this.jM.length) {
				case 1:
					yt(r, 'webix_ss_sort_single');
					break;
				case 2:
					Mt(r, 'webix_ss_sort_single');
				}
			}
		},
		mS:function(t, i, e) {
			e=e || i.getAttribute('webix_sort_dir');
			var s=this.ZS(this.getColumnIndex(t));
			s && (s.style.position='relative', s.appendChild(i), s.setAttribute('aria-sort', e+'ending'), s.setAttribute('tabindex', '0'));
		},
		scroll_setter:function(t) {return 'string'== typeof t?(this.P.scrollX=-1!=t.indexOf('x'), this.P.scrollY=-1!=t.indexOf('y'), t):this.P.scrollX=this.P.scrollY=t;},
		ZS:function(t) {
			for(var i=this.k.getElementsByTagName('TD'), e=null, s=0; s<i.length; s++) if(i[s].getAttribute('column')==t) {
				var n=i[s].getAttribute('active_id');
				if(n && !wn[this.Io[n].content].$icon) return null;
				if(e=i[s].firstChild, (i[s].colSpan || 0)<2) return e;
			}
			return e;
		},
		wo:[],
		xo:{},
		Do:function(t, i, e, s) {
			var n=this;
			i=i || 'asc', (s='multi'===this.P.sort && s) || (this.wo=[], this.xo={});
			var h=this.getColumnConfig(t), r='function'== typeof h.sort?{
				as:h.sort,
				dir:i
			}:{
				by:h.id,
				dir:i,
				as:h.sort
			};
			if(this.xo[h.id] || this.wo.push(h.id), this.xo[h.id]=r, 'server'==e) {
				var o=[h.id, i, e];
				1<this.wo.length && (o=[this.wo.map(function(t) {return n.xo[t];})]), this.callEvent('onBeforeSort', o), this.loadNext(0, 0, 0, 0, 1).then(function(t) {n.clearAll(!0), n.parse(t), n.callEvent('onAfterSort', o);});
			} else {
				if('text'==e) {
					var a='$text_'+h.id;
					this.data.each(function(t) {t[a]=this.getText(t.id, h.id);}, this), r.as='string', r.by=a;
				}
				1<this.wo.length?this.data.sort(this.wo.map(function(t) {return n.xo[t];})):this.data.sort(r);
			}
			this.markSorting(h.id, r.dir, s);
		},
		QS:function(t, i, e, s) {
			var n;
			if(t.length) for(n=0; n<t.length; n++) if(!1===v(t[n], this.$scope).call(this, i, e, s)) return !1;
		},
		Yu:function(t, i, e, s) {
			var n=(t=t || event).target;
			if(!this.P.subview || this==oi(n)) {
				for(var h='', r=[], o=!1, a=null; n && n.parentNode && n!=this.Vt.parentNode;) {
					if(h=Ct(n)) for(var u=(h=h.toString().split(' ')).length-1; 0<=u; u--) i[h[u]] && r.push(i[h[u]]);
					if(n.parentNode.getAttribute && !a) {
						var c=n.parentNode.getAttribute('column') || n.getAttribute('column');
						if(c) {
							var f='DIV'==n.parentNode.tagName;
							if(!this.nl[c]) return;
							if(o= !0, f) {
								var l=n.parentNode.getAttribute('row') || n.getAttribute('row');
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
							if(f) this.callEvent('on'+e, [a, t, n]) && s && this.callEvent('on'+s, [a, t, n]); else if('ItemClick'==e) {
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
		Ae:function(t, i) {
			var e=this.locate(i);
			if(!e) return null;
			var s, n=ai.Nt;
			if(e.header) {
				for(var h, r=i.target, o=e.cind-(e.span?e.span-1:0), a=-1; r && !h;) h=(r=r.parentNode).getAttribute('section');
				for(; null!==(r=r.previousSibling);) a++;
				var u=this.nl[o][h][a];
				if(!u.tooltip) return null;
				n.type.template=Yt(!0===u.tooltip?'#text#':u.tooltip), s=u;
			} else {
				var c=n.type.column=this.getColumnConfig(e.column);
				if(!c.tooltip && c.tooltip!==undefined) return null;
				if(!0===c.tooltip || !c.tooltip && R(this.P.tooltip.template)) s=this.getText(e.row, e.column).toString(); else if(c.tooltip) {
					var f=i.target.getAttribute('webix_area');
					n.type.template=f?function(t, i) {
						var e=t[c.id];
						return Yt(c.tooltip).call(this, t, i, e[f], f);
					}:Yt(c.tooltip);
				} else n.type.template=Yt(this.P.tooltip.template);
			}
			return s!==undefined?s:this.getItem(e.row);
		},
		$tooltipOut:function() {return ai.Ut(), delete ai.Nt.type.column, null;},
		showOverlay:function(t) {
			if(!this.tk) {
				var i=ft('DIV', {
					'class':'webix_overlay'
				}, '');
				this.st.appendChild(i), this.tk=i;
			}
			this.tk.innerHTML=t;
		},
		hideOverlay:function() {this.tk && (dt(this.tk), this.tk=null);},
		mapCells:function(t, i, e, s, n, h) {
			if(null===t && 0<this.data.order.length && (t=this.data.order[0]), null===i && (i=this.columnId(0)), null===e && (e=this.data.order.length), null===s && (s=this.P.columns.length), this.exists(t) && (t=this.getIndexById(t), null!==(i=this.getColumnIndex(i)))) for(var r=0; r<e && t+r<this.data.order.length; r++) {
				var o=t+r, a=this.data.order[o];
				if(a) for(var u=this.getItem(a), c=0; c<s && i+c<this.P.columns.length; c++) {
					var f=i+c, l=this.columnId(f), d=n(u[l], a, l, r, c);
					h || (u[l]=d);
				}
			}
		},
		HM:function(t, i) {!this.P.columns && t.getConfig && this.define('columns', t.getConfig(i));},
		ZM:function() {
			var t=this.getItem(this.getFirstId()), i=this.P.columns=[];
			for(var e in t) 'id'!=e && '$'!=e[0] && i.push({
				id:e,
				header:e[0].toUpperCase()+e.substr(1),
				sort:'string',
				editor:'text'
			});
			i.length && (i[0].fillspace= !0), 'undefined'== typeof this.P.select && this.define('select', 'row');
		}
	}, zr={
		api:Vr,
		view:H.protoUI(Vr, _r, pe, hs, ae, Se, Fe, Re, he, Ir, ps, {
			clearValidation:function() {
				for(var t in this.data.kr) this.ik(t);
				this.data.clearMark('webix_invalid', !0);
			},
			ir:function(t, i) {
				for(var e in this.ik(t), i) this.addCellCss(t, e, 'webix_invalid_cell');
				this.addCss(t, 'webix_invalid');
			},
			Kh:function(t) {this.ik(t), this.removeCss(t, 'webix_invalid');},
			ik:function(t) {
				var i=this.data.getMark(t, '$cellCss');
				if(i) for(var e in i) i[e]=i[e].replace('webix_invalid_cell', '').replace('  ', ' ');
			},
			addRowCss:function(t, i, e) {this.addCss(t, i, e);},
			removeRowCss:function(t, i, e) {this.removeCss(t, i, e);},
			addCellCss:function(t, i, e, s) {
				var n=this.data.getMark(t, '$cellCss'), h=n || {}, r=h[i] || '';
				h[i]=r.replace(e, '').replace('  ', ' ')+' '+e, n || this.data.addMark(t, '$cellCss', !1, h, !0), s || this.refresh(t);
			},
			removeCellCss:function(t, i, e, s) {
				var n=this.data.getMark(t, '$cellCss');
				if(n) {
					var h=n[i] || '';
					h && (n[i]=h.replace(e, '').replace('  ', ' ')), s || this.refresh(t);
				}
			}
		}, Ar, me, Dr, Cr, kr, Sr, yr, Mr, xr, wr, gr, Tr, br, mr, pr, {
			topSplit_setter:function(t) {return this.data && (this.data.$freeze=t), t;},
			freezeRow:function(t, i) {
				var r=this.P.topSplit, e=this.data.order, s=this.data.Cr;

				function n(t, i, e, s, n) {
					var h;
					if(e && r<=t) {
						for(n || r++, h=t; r<=h; h--) s[h]=s[h-1];
						s[r-1]=i;
					}
					if(!e && t<r) {
						for(n || r--, h=t; h<r; h++) s[h]=s[h+1];
						s[r]=i;
					}
				}

				t?(n(this.getIndexById(t), t=t.toString(), i, e), s && n(s.find(t), t, i, s, !0)):i || (r=0), this.define('topSplit', r), this.refresh();
			}
		}, Fr, Pi, De, oe, _e, ze, Ve, Hi.view, g, Si)
	}, Br={
		name:'excelviewer',
		$init:function() {
			var t=this;
			this.$ready.push(function() {this.P.toolbar && oi(this.P.toolbar).attachEvent('onExcelSheetSelect', S(this.showSheet, this));}), this.data.attachEvent('onClearAll', function() {delete t.ek;});
		},
		defaults:{datatype:'excel'},
		$onLoad:function(t) {
			if(t.sheets) {
				this.sk=t, this.P.toolbar && oi(this.P.toolbar).setSheets(t.names);
				var i=t.names[0];
				return this.showSheet(i.id || i), !0;
			}
			return !1;
		},
		$exportView:function(t) {
			var i=t.export_mode;
			if('pdf'!=i && 'excel'!=i || t.dataOnly) return this;
			!0===t.sheets?t.sheets=this.getSheets().map(function(t) {return t.id || t;}):t.sheets && t.sheets.length?'string'== typeof t.sheets && (t.sheets=[t.sheets]):t.sheets=[this.ek], t.dataOnly= !0, t.heights=R(t.heights) && t.styles?'all':t.heights;
			for(var e=[], s=this.ek, n=0; n<t.sheets.length; n++) {
				var h=t.sheets[n], r=h.id || h, o=h.options?H.extend(_(h.options), t):_(t);
				o.name || (o.name=r), this.showSheet(r), r!=s && (o.It= !0), 'pdf'==i && R(o.textBefore) && (o.textBefore=o.name);
				var a='pdf'==i?$s(this, o):Bs(this, o);
				o.styles && (a[0].styles=this.aM(o)), 'pdf'==i && t.autowidth && Fs(o, t), e=e.concat(a);
			}
			return this.showSheet(s), delete t.dataOnly, e;
		},
		showSheet:function(t) {
			if(t!=this.ek) {
				this.clearAll();
				var i=this.data.driver.sheetToArray(this.sk.sheets[t], {spans:this.P.spans}), e=this.P.excelHeader, s={}, n={};
				if(i.sizes) for(var h=0; h<i.sizes.length; h++) 'column'==i.sizes[h][0]?s[i.sizes[h][1]]=Math.round(i.sizes[h][2]):'row'==i.sizes[h][0] && (n[i.sizes[h][1]]=Math.round(i.sizes[h][2]));
				if(e) if(!0===e) {
					e=i.data.splice(0, 1)[0];
					for(var r=0; r<e.length; r++) e[r]={
						header:e[r],
						id:'data'+r,
						width:s[r],
						adjust:!s[r],
						editor:'text',
						sort:'string'
					};
				} else e=_(e); else {
					e=_(i.data[0]);
					for(var o=0; o<e.length; o++) e[o]={
						header:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[o],
						id:'data'+o,
						width:s[o],
						adjust:!s[o],
						editor:'text',
						sort:'string'
					};
				}
				this.config.columns=e, this.refreshColumns(), this.parse(i, this.P.datatype), this.ek=t;
				var a=this.nk(i.spans), u=this.hk(n), c=this.rk(i.styles, a);
				(a || u || c) && this.refresh();
			}
		},
		getSheets:function() {return this.sk.names;},
		ak:function(t, i, e, s) {
			for(var n=!1, h=0; h<t.length; h++) if(t[h][0]===i && t[h][1]===e) {
				t[h][5]=at(this.uk(s)), this.addSpan(t[h][0], t[h][1], t[h][2], t[h][3], t[h][4], t[h][5]), n= !0;
				break;
			}
			return n;
		},
		rk:function(t, i) {
			var e=0;
			if(t && t.length) {
				for(var s=0; s<t.length; s++) {
					var n=t[s][0]-(this.config.excelHeader?1:0);
					if(0<=n) {
						var h=this.getIdByIndex(n);
						if(this.exists(h)) {
							var r=this.getItem(h), o=this.columnId(t[s][1]);
							o && (i.length && this.ak(i, h, o, t[s][2]) || (r.$cellCss=r.$cellCss || {}, r.$cellCss[o]=this.uk(t[s][2])), e++);
						}
					}
				}
				return e;
			}
			return !1;
		},
		ck:function(t) {return 8===(t=t || '000000').length && (t=t.substring(2)), '#'+t;},
		uk:function(t) {
			var i={};
			if(t.fill && t.fill.fgColor && (i['background-color']=this.ck(t.fill.fgColor.rgb)), t.font) {
				var e=t.font;
				e.name && (i['font-family']=e.name), e.sz && (i['font-size']=e.sz/.75+'px'), e.color && e.color.rgb && (i.color=this.ck(e.color.rgb)), e.bold && (i['font-weight']='bold'), e.underline && (i['text-decoration']='underline'), e.italic && (i['font-style']='italic'), e.strike && (i['text-decoration']='line-through');
			}
			if(t.alignment) {
				var s=t.alignment;
				s.vertical && 'center'==s.vertical && (i.display='flex', i['justify-content']='flex-start', i['align-items']='center'), s.vertical && 'bottom'==s.vertical && (i.display='flex', i['justify-content']='flex-end', i['align-items']='flex-end'), s.horizontal && (!s.vertical || 'center'!=s.vertical && 'bottom'!=s.vertical?i['text-align']=s.horizontal:i['justify-content']='center'), s.wrapText && (i['white-space']='normal');
			}
			if(t.border) {
				var n=t.border;
				n.top && (i['border-top']='1px solid '+this.ck(n.top.color.rgb)), n.bottom && (i['border-bottom']='1px solid '+this.ck(n.bottom.color.rgb)+' !important'), n.left && (i['border-left']='1px solid '+this.ck(n.left.color.rgb)), n.right && (i['border-right']='1px solid '+this.ck(n.right.color.rgb)+' !important');
			}
			return i;
		},
		hk:function(t) {
			var i=0;
			for(var e in t) {
				var s=this.config.excelHeader?e-1:e;
				if(0<=s) {
					var n=this.getIdByIndex(s);
					this.exists(n) && (this.getItem(n).$height=t[e], i++);
				}
			}
			return this.config.fixedRowHeight= !i, i;
		},
		nk:function(t) {
			var i=[];
			if(this.P.spans && t && t.length) {
				this.ol={};
				for(var e=0; e<t.length; e++) this.config.excelHeader && t[e][0]--, 0<=t[e][0] && (t[e][0]=this.getIdByIndex(t[e][0]), t[e][1]='data'+t[e][1], i.push(t[e]));
				return this.addSpan(i), i;
			}
			return !1;
		}
	}, Hr=(H.protoUI(Br, zr.view), {
		name:'pdfbar',
		reset:function() {this.setPage(0), this.setValues(0, 'auto');},
		$init:function(t) {
			this.$view.className+=' pdf_bar', t.cols=[{
				view:'button',
				type:'icon',
				css:'webix_transparent',
				icon:'wxi-angle-left',
				width:35,
				click:function() {this.getParentView().Cg('prev');}
			}, {
				view:'text',
				width:70,
				value:'0',
				on:{
					onBlur:function() {this.getParentView().Cg(this.getValue());},
					onKeyPress:function(t) {13===t && this.getParentView().Cg(this.getValue());}
				}
			}, {
				template:I.PDFviewer.of+' #limit#',
				width:70,
				data:{limit:0},
				borderless:!0
			}, {
				view:'button',
				type:'icon',
				css:'webix_transparent',
				icon:'wxi-angle-right',
				width:35,
				click:function() {this.getParentView().Cg('next');}
			}, {}, {
				view:'button',
				type:'icon',
				css:'webix_transparent',
				icon:'wxi-minus',
				width:35,
				click:function() {this.getParentView().zoom('out');}
			}, {
				view:'richselect',
				options:[],
				maxWidth:195,
				suggest:{
					padding:0,
					css:'pdf_opt_list',
					borderless:!0,
					body:{
						type:{height:25},
						scroll:!1,
						yCount:13
					}
				},
				on:{onChange:function() {this.getParentView().setMasterScale(this.getValue());}}
			}, {
				view:'button',
				type:'icon',
				css:'webix_transparent',
				icon:'wxi-plus',
				width:35,
				click:function() {this.getParentView().zoom('in');}
			}, {
				view:'button',
				type:'icon',
				css:'webix_transparent',
				icon:'wxi-download',
				width:35,
				click:function() {this.getParentView().download();}
			}], this.$ready.push(this.fk);
		},
		fk:function() {
			var t=this.getChildViews()[6].getPopup().getBody();
			t.clearAll(), t.parse([{
				id:'auto',
				value:I.PDFviewer.automaticZoom
			}, {
				id:'page-actual',
				value:I.PDFviewer.actualSize
			}, {
				id:'page-fit',
				value:I.PDFviewer.pageFit
			}, {
				id:'page-width',
				value:I.PDFviewer.pageWidth
			}, {
				id:'page-height',
				value:I.PDFviewer.pageHeight
			}, {
				id:'0.5',
				value:'50%'
			}, {
				id:'0.75',
				value:'75%'
			}, {
				id:'1',
				value:'100%'
			}, {
				id:'1.25',
				value:'125%'
			}, {
				id:'1.5',
				value:'150%'
			}, {
				id:'2',
				value:'200%'
			}, {
				id:'3',
				value:'300%'
			}, {
				id:'4',
				value:'400%'
			}]);
			var i=0;
			t.data.each(function(t) {i=Math.max(St(t.value, 'webixbutton').width, i);}), this.getChildViews()[6].define('width', i+20), this.getChildViews()[6].resize();
		},
		Cg:function(t) {this.setMasterPage(t), this.setPage(this.$master.$pageNum);},
		setScale:function(t) {
			var i=this.getChildViews()[6];
			i.blockEvent(), i.getPopup().getList().exists(t)?i.setValue(t):(i.setValue(''), i.getInputNode().innerHTML=(100*t).toFixed(0)+'%'), i.unblockEvent();
		},
		setMasterScale:function(t) {this.$master && this.$master.setScale(t);},
		setMasterPage:function(t) {this.$master && ('prev'===t?this.$master.prevPage():'next'===t?this.$master.nextPage():isNaN(parseInt(t)) || this.$master.renderPage(parseInt(t)));},
		zoom:function(t) {this.$master && ('out'===t?this.$master.zoomOut():'in'===t && this.$master.zoomIn());},
		setPage:function(t) {this.getChildViews()[1].setValue(t);},
		setValues:function(t, i) {this.getChildViews()[2].data.limit=t, this.getChildViews()[2].refresh(), this.setScale(i);},
		download:function() {this.$master && this.$master.download();}
	}), Rr=(H.protoUI(Hr, eh.view), {
		name:'pdfviewer',
		defaults:{scale:'auto'},
		$init:function(t) {
			this.$view.className+=' webix_pdf';
			var i=document.createElement('DIV');
			i.className='canvas_wrapper';
			var e=document.createElement('canvas');
			this.lk=this.$view, this.At=this.$view.appendChild(i), this.Be=this.At.appendChild(e), this.$pdfDoc=null, this.$pageNum=0, this.$numPages=0, this.dk= !1, this.vk=null, this._k=this.Be.getContext('2d'), this.pk=.1, this.mk=t.scaleDelta || 1.1, this.bk=t.minScale || .25, this.gk=t.maxScale || 10, this.wk=1.25, this.xk=40, this.yk=10, this.Bt=[], this.$ready.push(this.Mk);
		},
		toolbar_setter:function(t) {
			if('string'== typeof t) {
				var i=oi(t);
				return i && (i.$master=this, i.refresh()), this.attachEvent('onDocumentReady', function() {i?(i.setPage(this.$pageNum), i.setValues(this.$numPages, this.P.scale)):this.toolbar_setter(t);}), t;
			}
		},
		Mk:function() {
			if(delete this.P.datatype, this.attachEvent('onScaleChange', function(t) {this.P.toolbar && oi(this.P.toolbar).setScale && oi(this.P.toolbar).setScale(t);}), this.attachEvent('onPageRender', function(t) {this.P.toolbar && oi(this.P.toolbar).setPage && oi(this.P.toolbar).setPage(t);}), q.touch) this.Sk= !1, Kt(this.Vt, 'touchstart', S(function(t) {
				var i=t.targetTouches;
				2===i.length && (gt(t), this.Sk=Math.abs(i[0].pageY-i[1].pageY));
			}, this)), Kt(this.$view, 'touchmove', S(function(t) {
				var i=t.targetTouches;
				2===i.length && !1!==this.Sk && (gt(t), Math.abs(i[0].pageY-i[1].pageY)>this.Sk?this.zoomIn():this.zoomOut(), this.Sk= !1);
			}, this)), this.attachEvent('onSwipeX', function(t, i) {this.$view.scrollLeft=this.$view.scrollLeft-(i.x-t.x);}), this.attachEvent('onSwipeY', function(t, i) {
				var e=this.$view.clientHeight, s=this.$view.scrollHeight, n=this.$view.offsetHeight, h=this.$view.scrollTop, r=i.y-t.y;
				if(e===s || r<0 && s-n<h || 0<r && 0===h) {
					var o=this.$pageNum+(0<r?-1:1);
					0<o && o<=this.$numPages && (this.$pageNum=o, this.kk(this.$pageNum), this.$view.scrollTop=0<r?s:0);
				} else this.$view.scrollTop=h-r;
			}); else {
				var t=q.isFF?'DOMMouseScroll':'mousewheel';
				Kt(this.$view, t, function(t) {
					var i=('DOMMouseScroll'===t.type?-t.detail:t.wheelDelta)<0?'out':'in';
					t.ctrlKey && (gt(t), 'in'==i?this.zoomIn():this.zoomOut());
				}, {
					bind:this,
					passive:!1
				});
			}
		},
		$onLoad:function(t) {return window.PDFJS?this.Ck(t):Ft([q.cdn+'/extras/pdfjs/compatibility.min.js', q.cdn+'/extras/pdfjs/pdf.min.js'], function() {PDFJS.workerSrc=q.cdn+'/extras/pdfjs/pdf.worker.min.js', this.Ck(t);}, this), !0;},
		Ck:function(t) {
			if(t.name) {
				var i=new FileReader;
				i.onload=S(function(t) {this.Ck({data:t.target.result});}, this), i.readAsArrayBuffer(t);
			} else this.$k({data:t.data});
		},
		$k:function(i) {
			var e=this;
			return PDFJS.getDocument({
				data:i.data,
				password:i.password
			}).then(function(t) {e.clear(), e.$pdfDoc=t, e.$numPages=e.$pdfDoc.numPages, e.$pageNum=1, e.Dk(e.$pageNum).then(function() {e.callEvent('onDocumentReady');});}, function(t) {'PasswordException'==t.name && e.Ik(i);});
		},
		getPopup:function() {
			var e=this;
			return this.Ak || (this.Ak=si({
				view:'window',
				position:'center',
				modal:!0,
				head:I.PDFviewer.enterPassword,
				body:{
					view:'form',
					elements:[{
						view:'text',
						name:'password',
						type:'password',
						invalidMessage:I.PDFviewer.passwordError,
						required:!0
					}, {
						cols:[{
							view:'button',
							value:I.message.cancel,
							hotkey:'esc',
							click:function() {e.getPopup().hide();}
						}, {
							view:'button',
							css:'webix_primary',
							value:I.message.ok,
							hotkey:'enter',
							click:function() {
								var t=e.getPopup(), i=t.getBody();
								i.validate()?(e.$k({
									data:e.Tk,
									password:i.getValues().password
								}), t.hide()):i.focus();
							}
						}]
					}]
				},
				on:{
					onHide:function() {
						var t=e.getPopup().getBody();
						t.clear(), t.clearValidation(), delete e.Tk;
					}
				}
			}), this.Bt.push(this.Ak)), this.Ak;
		},
		Ik:function(t) {
			var i=this.getPopup(), e=i.getBody();
			this.Tk=t.data, t.password && (e.markInvalid('password'), e.setValues({password:t.password})), i.show(), e.focus();
		},
		Fk:function(t, i) {
			var e=t.getViewport(i);
			return this.Be.height=e.height, this.Be.width=e.width, this.At.style.width=e.width+'px', this.At.style.height=e.height+'px', e;
		},
		Dk:function(t) {
			var n=this;
			return this.dk= !0, this.$pdfDoc.getPage(t).then(function(t) {
				var i=isNaN(parseFloat(n.P.scale))?n.pk:n.P.scale, e=n.Fk(t, i);
				i!==n.P.scale && (i=n.Vk(n.P.scale), e=n.Fk(t, i), n.P.scale=i);
				var s={
					canvasContext:n._k,
					viewport:e
				};
				return t.cleanupAfterRender= !0, t.render(s).promise.then(function() {n.callEvent('onPageRender', [n.$pageNum]), n.dk= !1, null!==n.vk && (n.Dk(n.vk), n.vk=null);});
			});
		},
		kk:function(t) {this.dk?this.vk=t:this.Dk(t);},
		renderPage:function(t) {!this.$pdfDoc || t<=0 || t>this.$numPages || (this.$pageNum=t, this.kk(this.$pageNum));},
		prevPage:function() {this.$pageNum<=1 || (this.$pageNum--, this.kk(this.$pageNum));},
		nextPage:function() {this.$pageNum>=this.$numPages || (this.$pageNum++, this.kk(this.$pageNum));},
		zoomIn:function() {
			var t=this.P.scale;
			t=(t*this.mk).toFixed(2), t=Math.ceil(10*t)/10, t=Math.min(this.gk, t), this.setScale(t);
		},
		zoomOut:function() {
			var t=this.P.scale;
			t=(t/this.mk).toFixed(2), t=Math.floor(10*t)/10, t=Math.max(this.bk, t), this.setScale(t);
		},
		Vk:function(t) {
			if(!isNaN(parseFloat(t))) return t;
			isNaN(parseFloat(this.P.scale)) && (this.P.scale=this.pk);
			var i=1, e=((this.lk.clientWidth-this.xk)*this.P.scale/this.Be.clientWidth).toFixed(2), s=((this.lk.clientHeight-this.yk)*this.P.scale/this.Be.clientHeight).toFixed(2);
			switch(t) {
			case'page-actual':
				i=1;
				break;
			case'page-width':
				i=e;
				break;
			case'page-height':
				i=s;
				break;
			case'page-fit':
				i=Math.min(e, s);
				break;
			case'auto':
				var n=this.lk.clientWidth>this.lk.clientHeight?Math.min(s, e):e;
				i=Math.min(this.wk, n);
			}
			return i;
		},
		setScale:function(t) {
			if(isNaN(parseFloat(t))) {
				var i=this.Vk(t);
				this.zk(i);
			} else this.zk(t);
		},
		zk:function(t) {this.P.scale=t, this.renderPage(this.$pageNum), this.callEvent('onScaleChange', [t]);},
		download:function() {
			if(this.$pdfDoc) {
				var i=(this.P.downloadName || 'document')+'.pdf';
				this.$pdfDoc.getData().then(function(t) {kt(PDFJS.createBlob(t, 'application/pdf'), i);});
			}
		},
		clear:function() {this.$pdfDoc && (this._k.clearRect(0, 0, this.Be.width, this.Be.height), this.At.style.height=this.At.style.width=this.Be.width=this.Be.height=0, this.P.scale='auto', this.$pageNum=this.$numPages=0, this.$pdfDoc.transport.startCleanup(), this.$pdfDoc.destroy(), this.$pdfDoc=null, this.P.toolbar && oi(this.P.toolbar) && oi(this.P.toolbar).reset());}
	}), Er=(H.protoUI(Rr, g, Ht, Hi.view), {
		name:'video',
		$init:function(t) {t.id || (t.id=V()), this.$ready.push(this.Bk);},
		Bk:function() {
			var t=this.P;
			if(this.Oi=ft('video', {
				'class':'webix_view_video',
				style:'width:100%;height:100%;',
				autobuffer:'autobuffer'
			}, ''), t.poster && (this.Oi.poster=t.poster), t.src) {
				'object'!=M(t.src) && (t.src=[t.src]);
				for(var i=0; i<t.src.length; i++) this.Oi.innerHTML+=' <source src="'+t.src[i]+'">';
			}
			t.controls && (this.Oi.controls= !0), t.autoplay && (this.Oi.autoplay= !0), this.Vt.appendChild(this.Oi);
		},
		getVideo:function() {return this.Oi;},
		defaults:{
			src:'',
			controls:!0
		}
	}), Pr=(H.protoUI(Er, Hi.view), {
		name:'gage',
		defaults:{
			value:0,
			minRange:0,
			maxRange:100,
			minWidth:250,
			minHeight:200,
			smoothFlow:!0,
			scale:3,
			stroke:7
		},
		$init:function() {this.$ready.push(S(this.Hk, this)), this.attachEvent('onDestruct', function() {this.Rk=this.Ek=this.Pk=null;});},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && this.jk();},
		jk:function() {
			this.Nk=this.config.value;
			var t=this.$view.querySelector('.webix_gage_curves'), i=this.$view.querySelector('.webix_gage_info'), e=this.config.scale, s=Math.min(this.$width, this.$height), n=s/100*this.config.stroke, h=s/e;
			t.setAttribute('r', h), t.setAttribute('strokeDasharray', Math.round(Math.PI*h)), t.style.r=h, t.style.strokeDasharray=Math.round(Math.PI*h), t.style['stroke-width']=n+'px', i.setAttribute('style', 'width: '+Math.round(2*h)+'px;'), this.Pk.setAttribute('style', 'height: '+Math.round(h+n)+'px;'), this.Rk.setAttribute('r', h), this.Rk.setAttribute('style', 'stroke-dasharray: '+Math.round(this.gradientLength*Math.PI*h)+', 1900; stroke-width:'+n+'px'), this.Lk(h), this.Ok();
		},
		Wk:function(t) {return Math.min(Math.max(t, this.P.minRange), this.P.maxRange);},
		Lk:function(t) {
			var i=this.$width, e=Math.min(this.$width, this.$height)/100*this.config.stroke;
			this.Ek.style.transformOrigin=i/2+'px 0 0', this.Ek.setAttribute('y1', '0'), this.Ek.setAttribute('x1', Math.round(i)/2+e), this.Ek.setAttribute('y2', '0'), this.Ek.setAttribute('x2', Math.round((i+e)/2+t));
		},
		Ok:function() {
			var t=this.config.value, i=this.$view.querySelector('.webix_gage_value'), e=this.Wk(t)-this.config.minRange, s=Math.round(180*e/(this.config.maxRange-this.config.minRange)), n=Math.min(this.$width, this.$height);
			this.$view.style.fontSize=Math.floor(n/8)+'px', i.innerHTML=t, this.Rk.style.stroke=this.color, this.Rk.setAttribute('stroke', this.color), this.Ek.setAttribute('transform', 'rotate('+s+' '+n/2+' 0)'), this.Ek.style.transform='rotate('+s+'deg)';
		},
		Uk:function() {
			this.config.minRange, this.config.maxRange, this.gradientLength=(this.Wk(this.config.value)-this.config.minRange)/(this.config.maxRange-this.config.minRange);
			var t=this.config.color;
			this.color=t?'function'== typeof t?t.call(this, this.config.value):t:'hsl('+(120-Math.round(120*this.gradientLength))+', 100%, 50%)', !0===this.config.animation?this.defaultColor='hsl(125, 100%, 50%)':this.defaultColor='hsl('+(120-Math.round(120*this.gradientLength))+', 100%, 50%)';
		},
		Hk:function() {
			var t=this.config.smoothFlow && q.svganimation && !q.isEdge;
			this.gradientLength=0, this.Uk(), this.$view.innerHTML='<div class="webix_gage_box"><div>\n\t\t\t<div class="webix_gage_label"><span>'.concat(this.config.label || '', '</span></div>\n\t\t\t<svg class="webix_gage_body" style="height:300px; position: relative;">\n\t\t\t\t<circle class="webix_gage_curves" r="0" cx="50%" cy="0" stroke="#EEEEEE" fill="none"></circle>\n\t\t\t\t<circle class="webix_gage_gradient').concat(t?' webix_gage_animated':'', '" r="0" stroke=').concat(this.defaultColor, ' cx="50%" cy="0" fill="none" style="stroke-dasharray: 0, 1900;"></circle>\n\t\t\t\t<line class="webix_gage_gradient_point').concat(t?' webix_gage_gradient_point_animated':'', '" x1="0" x2="0" y1="0" y2="0" style="stroke:#B0B0B0; stroke-width:4;"></line>\n\t\t\t</svg>\n\t\t\t<div class="webix_gage_info">\n\t\t\t\t<div class="webix_gage_min_range">').concat(this.config.minRange, '</div>\n\t\t\t\t<div class="webix_gage_max_range">').concat(this.config.maxRange, '</div>\n\t\t\t\t<div class="webix_gage_placeholder">\n\t\t\t\t\t<div class="webix_gage_value">').concat(this.config.value, '</div>\n\t\t\t\t\t<div class="webix_gage_range_info">').concat(this.config.placeholder || '', '</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div></div>'), this.Rk=this.$view.querySelector('.webix_gage_gradient'), this.Ek=this.$view.querySelector('.webix_gage_gradient_point'), this.Pk=this.$view.querySelector('.webix_gage_body');
		},
		refresh:function() {
			var t=this.config.value;
			this.config.smoothFlow && t!=this.Nk && (this.config.value=this.Nk), this.Hk(), this.jk(), this.Nk!=t && this.Vt.parentNode.clientHeight && this.setValue(t);
		},
		setValue:function(t) {this.config.value=t, this.Uk(), this.jk();},
		getValue:function() {return this.config.value;}
	}), jr=(H.protoUI(Pr, g, Hi.view), {
		name:'barcode',
		defaults:{
			type:'ean13',
			height:160,
			width:220,
			paddingY:10,
			paddingX:20,
			textHeight:20,
			color:'#000',
			ariaLabel:'bars'
		},
		$init:function() {this.$view.className+=' webix_barcode', this.types || (this.types={'default':this.type}, this.type.name='default');},
		type:{},
		render:function() {
			this.isVisible(this.P.id) && (this.canvas && this.canvas.clearCanvas(!0), this.$view.innerHTML='', this.Yk());
		},
		Yk:function() {
			this.canvas=new ji({
				container:this.$view,
				name:this.name,
				title:this.P.ariaLabel,
				width:this.$width,
				height:this.$height
			}), this.qk();
		},
		qk:function() {
			var t, i, e, s, n=this.P.value, h=this.P.type;
			if(!h || !this.types[h] || !n) return !1;
			if(s=(t=this.type.encode(n)).length, i=this.canvas.getCanvas(), s) {
				var r=(this.$width-2*this.config.paddingX)/s, o=0;
				for(e=0; e<s; e++) {
					parseInt(t.charAt(e), 10)?(o++, e==s-1 && this.Gk(i, e+1, r, o, s)):o && (this.Gk(i, e, r, o, s), o=0);
				}
				this.Xk(n, r);
			}
		},
		Gk:function(t, i, e, s, n) {
			var h, r, o, a;
			r=parseInt(i*e+this.config.paddingX, 10), h=parseInt(r-s*e, 10), o=this.config.paddingY, a=this.$height-this.config.paddingY-this.config.textHeight, this.Jk() && (i<4 || n-4<i || i<n/2+2 && n/2-2<i) && (a+=this.config.textHeight/2), t.fillStyle=this.config.color, t.beginPath(), t.moveTo(h, o), t.lineTo(r, o), t.lineTo(r, a), t.lineTo(h, a), t.lineTo(h, o), t.fill();
		},
		Xk:function(t, i) {
			var e, s, n;
			if(this.type.template && (t=this.type.template(t)), this.Jk()) {
				if(this.type.firstDigit && (this.canvas.renderTextAt(!0, 'left', this.config.paddingX, this.$height-this.config.paddingY, t.charAt(0)), t=t.slice(1)), s=t.length, this.type.lastDigit && s--, s) {
					var h=(this.$width-2*this.config.paddingX-11*i)/s;
					for(e=0; e<s; e++) n=this.config.paddingX+e*h+(e<s/2?3:8)*i+h/2, this.canvas.renderTextAt(!0, !0, n, this.$height-this.config.paddingY, t.charAt(e));
					this.type.lastDigit && (n=this.config.paddingX+s*h+11*i, this.canvas.renderTextAt(!0, !1, n, this.$height-this.config.paddingY, t.charAt(s)));
				}
			} else this.canvas.renderTextAt(!0, !0, this.$width/2, this.$height-this.config.paddingY, t);
		},
		setValue:function(t) {return this.P.value=t, this.render(), t;},
		getValue:function() {
			var t=this.P.value;
			return this.type.template?this.type.template(t):t;
		},
		type_setter:function(t) {return this.types[t]?(this.type=l(this.types[t]), this.type.css && (this.Oi.className+=' '+this.type.css)):this.customize(t), t;},
		Jk:function() {
			var t=this.config.type;
			return 0===t.indexOf('ean') || -1!=t.indexOf('upcA');
		},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && this.render();}
	}), Nr=H.protoUI(jr, Hi.view);
	ti(Nr, {
		name:'upcA',
		firstDigit:!0,
		lastDigit:!0,
		encode:function(t) {return t.length<12 && (t='0'+t), Lr.encode(t);},
		template:function(t) {return t.replace(/[^0-9]/g, '').substring(0, 11)+this.checksum(t);},
		checksum:function(t) {return t.length<12 && (t='0'+t), Lr.checksum(t);}
	}), ti(Nr, {
		name:'ean8',
		encodings:[['0001101', '1110010'], ['0011001', '1100110'], ['0010011', '1101100'], ['0111101', '1000010'], ['0100011', '1011100'], ['0110001', '1001110'], ['0101111', '1010000'], ['0111011', '1000100'], ['0110111', '1001000'], ['0001011', '1110100']],
		encode:function(t) {
			var i, e;
			if(7!=(t=t.replace(/[^0-9]/g, '').substring(0, 7)).length) return '';
			for(t+=this.checksum(t), i='101', e=0; e<4; e++) i+=this.encodings[parseInt(t.charAt(e), 10)][0];
			for(i+='01010', e=4; e<8; e++) i+=this.encodings[parseInt(t.charAt(e), 10)][1];
			return i+='101';
		},
		template:function(t) {return t.replace(/[^0-9]/g, '').substring(0, 7)+this.checksum(t);},
		checksum:function(t) {
			t=t.substring(0, 7);
			var i, e=!0, s=0;
			for(i=0; i<7; i++) s+=(e?3:1)*parseInt(t.charAt(i), 10), e= !e;
			return ((10-s%10)%10).toString();
		}
	});
	var Lr={
		name:'ean13',
		firstDigit:!0,
		encodings:[['0001101', '0100111', '1110010', '000000'], ['0011001', '0110011', '1100110', '001011'], ['0010011', '0011011', '1101100', '001101'], ['0111101', '0100001', '1000010', '001110'], ['0100011', '0011101', '1011100', '010011'], ['0110001', '0111001', '1001110', '011001'], ['0101111', '0000101', '1010000', '011100'], ['0111011', '0010001', '1000100', '010101'], ['0110111', '0001001', '1001000', '010110'], ['0001011', '0010111', '1110100', '011010']],
		encode:function(t) {
			var i, e, s;
			if(12!=(t=t.replace(/[^0-9]/g, '').substring(0, 12)).length) return '';
			for(t+=this.checksum(t), i='101', e=this.encodings[parseInt(t.charAt(0), 10)][3], s=1; s<7; s++) i+=this.encodings[parseInt(t.charAt(s), 10)][parseInt(e.charAt(s-1), 10)];
			for(i+='01010', s=7; s<13; s++) i+=this.encodings[parseInt(t.charAt(s), 10)][2];
			return i+='101';
		},
		template:function(t) {return t.replace(/[^0-9]/g, '').substring(0, 12)+this.checksum(t);},
		checksum:function(t) {
			var i, e=!1, s=0;
			for(t=t.substring(0, 12), i=0; i<12; i++) s+=(e?3:1)*parseInt(t.charAt(i), 10), e= !e;
			return ((10-s%10)%10).toString();
		}
	};
	ti(Nr, Lr);
	var Or, Wr, Ur, Yr, qr={
		name:'bullet',
		defaults:{
			color:'#394646',
			marker:!1,
			layout:'x',
			barWidth:40,
			flowTime:500,
			labelWidth:150,
			minRange:0,
			maxRange:100,
			stroke:8,
			value:0,
			smoothFlow:!0,
			tickSize:10,
			bands:[{
				value:100,
				color:'#5BE5D6'
			}, {
				value:80,
				color:'#FFF07E'
			}, {
				value:60,
				color:'#FD8B8C'
			}],
			scale:{step:10}
		},
		label_setter:Yt,
		placeholder_setter:Yt,
		$init:function(t) {
			var i='undefined'!= typeof t.tickSize?t.tickSize:this.defaults.tickSize;
			t && (t.layout && 'x'!==t.layout || !R(t.height) || (t.height=!1===t.scale?60:i?76+i:74), 'y'===t.layout && R(t.width) && (t.width=!1===t.scale?60:i?87+i:87));
		},
		scale_setter:function(t) {return t && (t.step=t.step || 10, t.template=Yt(t.template || '#value#')), t;},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && (this.Hk('y'===this.P.layout?i:t), (this.P.value || 0===this.P.value) && this.Ok(0, this.P.value));},
		Wk:function(t) {return Math.min(Math.max(t, this.P.minRange), this.P.maxRange)-this.P.minRange;},
		Kk:function(t) {
			var i;
			this.Zk=t-(this.hs || t), this.hs=t, (1e3<(i=this.P.flowTime>this.Zk?this.P.flowTime/this.Zk:this.P.flowTime) || i<5) && (i=30);
			var e=(this.P.value-this.Qk)/i;
			this.tC+=e, Math.abs(this.tC-this.P.value)<Math.abs(e) && (this.tC=this.P.value), this.tC!=this.P.value?this.iC=requestAnimationFrame(this.Kk.bind(this)):(cancelAnimationFrame(this.iC), this.iC=null), this.eC.setAttribute('width', Math.floor(this.Wk(this.tC)*this.sC)), this.eC.style.fill=this.Uc();
		},
		Ok:function(t, i) {this.Qk=this.tC=t, this.P.value=this.Nk=i, !0===this.isVisible() && !0===this.P.smoothFlow && window.requestAnimationFrame?this.iC || (this.iC=requestAnimationFrame(this.Kk.bind(this))):(this.eC.setAttribute('width', Math.floor(this.Wk(i)*this.sC)), this.eC.style.fill=this.Uc());},
		Uc:function() {
			var t=this.P.color;
			return 'function'== typeof t?t(this.Nk):t;
		},
		nC:function(t, i, e) {for(var s=0; s<i.length; s++) t.setAttribute(i[s], e[s]);},
		hC:function(t, i, e) {
			var s=document.createElementNS('http://www.w3.org/2000/svg', t);
			return i && this.nC(s, i, e), s;
		},
		rC:function(t) {
			var i=this.hC(t[0], t[1], t[2]), e=t[3];
			if(e) for(var s=0; s<e.length; s++) i.appendChild(this.rC(e[s]));
			return i;
		},
		oC:function() {
			var t='d'+V(), i=this.hC('svg', ['class'], ['webix_bullet_graph_svg']), e=this.hC('g'), s=this.hC('g'), n=this.hC('rect', ['x', 'y', 'width', 'height', 'class', 'style'], [this.aC, this.uC, 100, this.P.stroke, 'webix_bullet_value', 'filter:url(#'+t+');fill:'+this.Uc()]), h=this.hC('rect', ['x', 'y', 'width', 'height', 'fill'], [0, 5, 3, this.P.barWidth-10, 'rgba(0,0,0,0.5)']), r=this.hC('g', ['stroke', 'stroke-width', 'fill'], ['#8B94AC', '2', 'none']), o=this.hC('text', ['text-anchor', 'stroke', 'fill'], ['end', 'none', '#8B94AC']), a='y'==this.P.layout?'50%':this.aC-10, u='y'==this.P.layout?11:17, c=this.hC('tspan', ['x', 'y', 'class'], [a, u, 'webix_bullet_header']), f=this.hC('tspan', ['x', 'y', 'class'], [a, u+17, 'webix_bullet_subheader']), l=this.hC('text', ['text-anchor', 'stroke', 'class', 'fill'], ['middle', 'none', 'webix_bullet_scale', '#8B94AC']), d=this.rC(['filter', ['id', 'x', 'y', 'width', 'height'], [t, '0', '-150%', '110%', '400%'], [['feOffset', ['in', 'dx', 'dy'], ['SourceAlpha', 0, 0]], ['feGaussianBlur', ['stdDeviation'], ['2']], ['feComponentTransfer', 0, 0, [['feFuncA', ['type', 'slope'], ['linear', '0.5']]]], ['feMerge', 0, 0, [['feMergeNode'], ['feMergeNode', ['in'], ['SourceGraphic']]]]]]);
			i.appendChild(d);
			var v=document.createElement('div');
			e.appendChild(s), !1!==this.P.marker && (h.setAttribute('x', this.aC+this.Wk(this.P.marker)*this.sC-2), e.appendChild(h)), e.appendChild(n), o.appendChild(c), o.appendChild(f), i.appendChild(o);
			var _='y'===this.P.layout, p=this.P.tickSize;
			if(this.P.scale) {
				for(var m=this.aC, b=this.P.minRange; b<=this.P.maxRange; b+=this.P.scale.step) {
					var g=Math.max(b-this.P.minRange, 0), w=Math.floor(g*this.sC-(g?.1:-1)), x=_?(this.$width-this.P.barWidth)/2+(p?2-p:4):w+m, y=_?this.cC+m-w+6:this.P.barWidth+(p?16+p:14), M=_?-4:this.P.barWidth+3+p, S=_?'end':'middle', k=this.hC('tspan', ['x', 'y', 'text-anchor'], [x, y, S]), C=this.hC('line', ['x1', 'y1', 'x2', 'y2', 'stroke-width'], [w+m, M, w+m, M-p, 1]);
					v.innerHTML=this.P.scale.template({value:b}), k.appendChild(v.childNodes[0]), l.appendChild(k), r.appendChild(C);
				}
				e.appendChild(r), i.appendChild(l);
			}
			for(var $=0; $<this.P.bands.length; $++) {
				var D=this.P.bands[$], I=this.hC('path'), A=this.Wk(D.value)*this.sC;
				I.setAttribute('d', 'M '+this.aC+',0 l '+A+',0 l 0,'+this.P.barWidth+' l -'+A+',0 z'), I.setAttribute('fill', D.color), s.appendChild(I);
			}
			if(i.appendChild(e), 'y'===this.P.layout) {
				var T=this.P.scale?this.$width/2-10:0, F=this.$height+this.aC-28;
				e.setAttribute('transform', 'translate('+T+', '+F+') rotate(270)'), o.setAttribute('text-anchor', 'middle'), o.childNodes[0].setAttribute('x', '55%'), o.childNodes[1].setAttribute('x', '55%'), l.setAttribute('text-anchor', 'right');
			}
			return i.setAttribute('viewBox', '0 0 '+this.$width+' '+this.$height), i;
		},
		Hk:function(t) {
			this.config.minRange, this.config.maxRange, t=t || ('x'==this.P.layout?this.$width:this.$height);
			var i=this.$view;
			i.innerHTML='';
			var e=this.P, s=e.label && e.label(e) || e.placeholder && e.placeholder(e);
			this.aC=s?e.labelHeight || e.labelWidth:7, this.uC=Math.floor((this.P.barWidth-this.P.stroke)/2), this.cC=t-this.aC-30, this.sC=this.cC/(this.P.maxRange-this.P.minRange);
			var n=this.oC();
			n.setAttribute('height', this.$height), n.setAttribute('width', this.$width), i.appendChild(n), this.eC=i.querySelector('.webix_bullet_value');
			var h=this.P.label;
			h && (this.$view.querySelector('.webix_bullet_header').textContent=h(this.P));
			var r=this.P.placeholder;
			r && (this.$view.querySelector('.webix_bullet_subheader').textContent=r(this.P));
		},
		refresh:function() {this.Hk(), this.Ok(this.Nk, this.P.value);},
		setValue:function(t) {this.P.value!=t && this.Ok(this.P.value, t);},
		getValue:function() {return this.P.value;}
	}, Gr=(H.protoUI(qr, Hi.view), {
		name:'geochart',
		defaults:{
			chart:{
				displayMode:'auto',
				region:'world',
				resolution:'countries'
			}
		},
		$init:function(t) {this.$view.innerHTML='<div class=\'webix_map_content\' style=\'width:100%;height:100%\'></div>', this.Oi=this.$view.firstChild, this.fC=m.defer(), t.chart=H.extend(t.chart || {}, this.defaults.chart), this.data.provideApi(this, !0), this.$ready.push(this.render), this.data.attachEvent('onClearAll', S(this.lC, this)), this.data.attachEvent('onStoreUpdated', S(this.dC, this));},
		getMap:function(t) {return t?this.fC:this.fu;},
		vC:function(t) {return S(function() {'function'== typeof t && t(), Or=Or || window.google, this._C();}, this);},
		render:function() {'undefined'== typeof window.google || 'undefined'== typeof window.google.charts?(Wr || ((Wr=document.createElement('script')).type='text/javascript', Wr.src='//www.gstatic.com/charts/loader.js', document.getElementsByTagName('head')[0].appendChild(Wr)), Wr.onload=this.vC(Wr.onload)):this.vC()();},
		_C:function() {
			Or.visualization && Or.visualization.GeoChart?(this.fu=new Or.visualization.GeoChart(this.Oi), this.pC(), this.fC.resolve(this.fu)):(Or.charts.load('current', {
				packages:['geochart'],
				mapsApiKey:this.P.key
			}), Or.charts.setOnLoadCallback(S(function() {this._C();}, this)));
		},
		$onLoad:function(t) {return !this.fu && (this.fC.then(S(function() {this.parse(t, this.P.datatype);}, this)), !0);},
		dC:function() {
			if(this.fu) {
				var n=this.nl && this.nl.length?this.nl:this.mC(), h=[];
				if(this.data.each(function(t) {
					for(var i=[], e=0; e<n.length; e++) {
						var s=t[n[e].label];
						'number'==n[e].type?s*=1:'tooltip'==n[e].role && (s=this.P.tooltip(t)), i.push(s);
					}
					h.push(i);
				}, this), n.length) {
					for(var t=new Or.visualization.DataTable, i=0; i<n.length; i++) t.addColumn(n[i]);
					t.addRows(h);
					var e=new Or.visualization.DataView(t);
					this.fu.draw(e, this.P.chart);
				} else this.fu.draw(Or.visualization.arrayToDataTable([['', '']]), {});
			} else this.fu || this.fC.then(S(this.dC, this));
		},
		setDisplayMode:function(t) {this.P.chart.displayMode=t, this.refresh();},
		setRegion:function(t) {this.P.chart.region=t, this.refresh();},
		refresh:function() {this.fu.clearChart(), this.dC();},
		tooltip_setter:function(t) {
			var i=this.P.chart.tooltip;
			return this.P.chart.tooltip=H.extend(i || {}, {isHtml:!0}), Yt(t);
		},
		$setSize:function(t, i) {
			Hi.api.$setSize.apply(this, arguments) && this.fu && (H.extend(this.P, {
				width:t,
				height:i
			}), this.refresh());
		},
		lC:function() {this.nl=null, this.dC();},
		bC:function(t, i) {
			if(!t || R(t[i])) return 'string';
			var e=M(t[i]);
			return 'string'!=e || isNaN(1*t[i]) || (e='number'), e;
		},
		mC:function() {
			var t=this.P.columns || [], i=this.data.pull[this.data.order[0]];
			if(!t.length && i) for(var e in i) 'id'!==e && t.push(e);
			for(var s=0; s<t.length; s++) 'object'!==M(t[s]) && (t[s]={
				type:this.bC(i, t[s]),
				label:t[s]
			});
			return this.P.tooltip && t.push({
				type:'string',
				role:'tooltip',
				p:{html:!0}
			}), this.nl=t;
		},
		pC:function() {
			Or.visualization.events.addListener(this.fu, 'error', S(function() {this.callEvent('onMapError', arguments);}, this)), Or.visualization.events.addListener(this.fu, 'ready', S(function() {this.callEvent('onMapReady', arguments);}, this)), Or.visualization.events.addListener(this.fu, 'regionClick', S(function() {this.callEvent('onRegionClick', arguments);}, this)), Or.visualization.events.addListener(this.fu, 'select', S(function() {
				var t=this.fu.getSelection()[0], i=t || this.gC;
				if(i) {
					var e=this.data.order[i.row];
					this.gC=i, this.callEvent('onItemClick', [e, !!t]);
				}
			}, this));
		}
	}), Xr=(H.protoUI(Gr, _e, g, Hi.view), {
		name:'google-map',
		$init:function() {this.$view.innerHTML='<div class=\'webix_map_content\' style=\'width:100%;height:100%\'></div>', this.Oi=this.$view.firstChild, this.fC=m.defer(), this.data.provideApi(this, !0), this.$ready.push(this.render);},
		getMap:function(t) {return t?this.fC:this.fu;},
		vC:function(t) {return S(function() {'function'== typeof t && t(), Ur=Ur || window.google, this._C.call(this);}, this);},
		render:function() {
			if('undefined'== typeof window.google || 'undefined'== typeof window.google.maps) {
				if(!Yr) {
					(Yr=document.createElement('script')).type='text/javascript';
					var t=this.P, i=t.src || '//maps.google.com/maps/api/js';
					i+=-1===i.indexOf('?')?'?':'&', t.key && (i+='&key='+t.key), t.libraries && (i+='&libraries='+t.libraries), Yr.src=i, document.getElementsByTagName('head')[0].appendChild(Yr);
				}
				Yr.onload=this.vC(Yr.onload);
			} else this.vC()();
		},
		_C:function() {
			var t=this.config;
			this.isVisible(t.id) && (this.fu=new Ur.maps.Map(this.Oi, {
				zoom:t.zoom,
				center:new Ur.maps.LatLng(t.center[0], t.center[1]),
				mapTypeId:Ur.maps.MapTypeId[t.mapType]
			}), this.fC.resolve(this.fu), this.Oi.firstChild.setAttribute('webix_disable_drag', 'true'));
		},
		center_setter:function(t) {return this.fu && this.fu.setCenter(new Ur.maps.LatLng(t[0], t[1])), t;},
		mapType_setter:function(t) {return this.fu && this.fu.setMapTypeId(Ur.maps.MapTypeId[t]), t;},
		zoom_setter:function(t) {return this.fu && this.fu.setZoom(t), t;},
		layerType_setter:function(t) {return 'heatmap'==t && (this.config.libraries='visualization'), this.wC[t] && (H.extend(this, this.wC[t], !0), this.data.attachEvent('onStoreUpdated', S(function() {this.fC.then(S(function() {this.drawData.call(this, arguments);}, this));}, this))), t;},
		defaults:{
			zoom:5,
			center:[39.5, -98.5],
			mapType:'ROADMAP',
			layerType:'marker'
		},
		$setSize:function() {Hi.api.$setSize.apply(this, arguments), this.fu && Ur.maps.event.trigger(this.fu, 'resize');},
		$onLoad:function(t) {return !this.fu && (this.fC.then(S(function() {this.parse(t);}, this)), !0);},
		wC:{
			marker:{
				drawData:function(t, i, e) {
					switch(e) {
					case'add':
					case'update':
						i.$marker=this.xC(i);
						break;
					case'delete':
						i.$marker.setMap(null);
						break;
					default:
						this.data.each(function(t) {t.$marker=this.xC(t);}, this);
					}
				},
				clearAll:function(t) {this.data.each(function(t) {t.$marker.setMap(null);}), this.data.clearAll(t);},
				showItem:function(t) {
					var i=this.getItem(t);
					this.fu.setCenter(new Ur.maps.LatLng(i.lat, i.lng));
				},
				xC:function(t) {
					var i={};
					for(var e in t) i[e]=t[e];
					i.position=new Ur.maps.LatLng(t.lat, t.lng), i.map=t.hidden?null:this.fu;
					var s=t.$marker;
					return s?t.$marker.setMap(i.map):(s=new Ur.maps.Marker(i), this.yt(s)), this.callEvent('onItemRender', [t]), s;
				},
				yt:function(t) {
					var i=this;
					t.addListener('click', function() {i.callEvent('onItemClick', [this.id, this]);}), t.getDraggable() && (t.addListener('dragend', function() {i.yC(this, !0);}), t.addListener('drag', function() {i.yC(this);}));
				},
				yC:function(t, i) {
					var e=this.getItem(t.id), s=t.getPosition(), n=i?'onAfterDrop':'onDrag';
					e.lat=s.lat(), e.lng=s.lng(), this.callEvent(n, [e.id, e]);
				}
			},
			heatmap:{
				heatmapConfig_setter:function(t) {return t=t || {};},
				drawData:function() {
					this.MC && (this.MC.setMap(null), this.MC=null);
					var i=[];
					if(this.data.each(function(t) {i.push(this.SC(t));}, this), i.length) {
						var t=H.extend(this.config.heatmapConfig, {
							data:i,
							map:this.fu
						}, !0);
						this.MC=new Ur.maps.visualization.HeatmapLayer(t), this.callEvent('onHeatMapRender', [this.MC]);
					}
				},
				getHeatmap:function() {return this.MC;},
				SC:function(t) {
					var i={};
					for(var e in t) i[e]=t[e];
					return i.location=new Ur.maps.LatLng(t.lat, t.lng), i;
				}
			}
		}
	}), Jr=(H.protoUI(Xr, _e, g, Hi.view), {
		name:'organogram',
		defaults:{
			scroll:'auto',
			ariaLabel:'lines'
		},
		$init:function() {this.Vt.className+=' webix_organogram', this.Li=document.createElement('DIV'), this.$ready.push(this.kC), H.extend(this.data, ls, !0), this.data.provideApi(this, !0);},
		Ko:'webix_dg_id',
		on_click:{webix_organogram_item:function(t, i) {this.P.select && ('multiselect'==this.P.select || this.P.multiselect?this.select(i, !1, t.ctrlKey || t.metaKey || 'touch'==this.P.multiselect, t.shiftKey):this.select(i), this.Jm= !1);}},
		on_context:{},
		on_dblclick:{},
		kC:function() {this.tt.style.position='relative', this.data.attachEvent('onStoreUpdated', S(this.render, this));},
		lf:function(t) {
			var i=this.data.kr[t.id];
			return this.callEvent('onItemRender', [t]), this.type.templateStart.call(this, t, this.type, i)+(t.$template?this.type['template'+t.$template].call(this, t, this.type, i):this.type.template.call(this, t, this.type, i))+this.type.templateEnd.call(this);
		},
		Q:function(t) {
			var i=this.lf(t);
			return this.data.branch[t.id] && (i+=this.CC(t.id)), i;
		},
		$C:function() {return this.type.listMarginX || this.type.listMarginY;},
		CC:function(t, i) {
			var e, s, n, h, r='', o=this.data.branch[t], a=this.data.kr[t], u=this.getItem(t), c=!!u && u.$type;
			if(i=i || 0, 'list'===c && (i+=this.type.listMarginX), t || (this.DC=[], this.$xy={}, h=this.$width-2*this.type.padding, this.$xy[0]={
				totalWidth:h,
				start:this.type.padding,
				width:0,
				height:0,
				left:h/2,
				top:this.type.padding || 0
			}), o) {
				n=this.$xy[t], 'list'!=c || this.$C() || (r+=this.type.templateListStart.call(this, u, this.type, a));
				var f=0, l=0;
				for(e=0; e<o.length; e++) {
					s=o[e], h=this.IC[s];
					var d=this.getItem(s);
					d.open==undefined && (d.open= !0), 'list'==c && this.data.addMark(s, 'list_item', '', 1, !0);
					var v=this.AC(s);
					if('list'==c) {
						var _=0;
						this.$C()?_=this.type.listMarginY:e || (_=this.type.marginY), this.$xy[s]={
							totalWidth:h,
							start:n.start,
							width:this.type.width,
							height:v,
							left:n.start+h/2-this.type.width/2+i,
							top:e?this.$xy[o[e-1]].top+this.$xy[o[e-1]].height+_+l:n.top+n.height+_
						}, l=this.data.branch[s]?this.TC(s):0;
					} else this.$xy[s]={
						totalWidth:h,
						start:n.start+f,
						width:this.type.width,
						height:v,
						left:n.start+f+h/2-this.type.width/2,
						top:n.top+n.height+(t?this.type.marginY:0)
					};
					r+=this.lf(d), f+=h;
				}
				for(e=0; e<o.length; e++) s=o[e], this.data.branch[s] && this.getItem(s).open?r+=this.CC(s, i):u && ('list'!=u.$type?this.DC.push(this.$xy[s].top+this.$xy[s].height):e==o.length-1 && this.DC.push(this.$xy[s].top+this.$xy[s].height));
				var p=0;
				for(var m in this.$xy) {
					var b=this.$xy[m];
					p=Math.max(b.left+b.width, p);
				}
				this.tt.style.width=p+this.type.padding+this.type.marginX/2+'px', 'list'!=c || this.$C() || (r+=this.type.templateListEnd(u, this.type, a));
			}
			return r;
		},
		TC:function(t) {
			for(var i=this.data.branch[t], e=0, s=0; s<i.length; s++) e+=this.AC(i[s])+this.type.listMarginY, this.data.branch[i[s]] && (e+=this.TC(i[s]));
			return e+this.type.marginY;
		},
		AC:function(t) {
			var i=this.getItem(t), e=this.type.height;
			return 'function'== typeof e && (e=e.call(i, this.type, this.data.kr[t])), this.FC || (this.FC=ft('div'), this.tt.appendChild(this.FC)), this.FC.className=this.type.classname(i, this.type, this.data.kr[t]), this.FC.style.cssText='width:'+this.type.width+'px;height:'+e+('auto'==e?'':'px')+';', this.FC.innerHTML=this.type.template.call(this, i, this.type, this.data.kr[t]), this.FC.scrollHeight;
		},
		VC:function() {
			var n={}, h=this.type.width, r=this.type.marginX;
			return this.data.each(function(t) {
				n[t.id]=h+r;
				var i=this.getParentId(t.id);
				if(i && 'list'!=this.getItem(i).$type) for(; i;) {
					for(var e=this.branch[i], s=n[i]=0; s<e.length; s++) n[i]+=n[e[s]] || 0;
					i=this.getParentId(i);
				}
			}), this.IC=n;
		},
		getItemNode:function(t) {
			if(this.ji) return this.ji[t];
			this.ji={};
			for(var i=this.tt.childNodes, e=0; e<i.length; e++) {
				var s=i[e].getAttribute(this.Ko);
				if(s && (this.ji[s]=i[e]), -1!=i[e].className.indexOf('webix_organogram_list') && !this.$C()) for(var n=i[e].childNodes, h=0; h<n.length; h++) (s=n[h].getAttribute(this.Ko)) && (this.ji[s]=n[h]);
			}
			return this.getItemNode(t);
		},
		mc:function(t) {return this.Li.innerHTML=this.lf(t), this.Li.firstChild;},
		render:function(t, i, e) {
			if(this.isVisible(this.P.id) && !this.$blockRender) {
				if('update'!=e) return this.callEvent('onBeforeRender', [this.data]) && (this.VC(), this.ji=null, this.tt.innerHTML=this.CC(0), this.FC=null, this.tt.style.height=Math.max.apply(Math, this.DC)+this.type.padding+'px', this.Yk(), this.resize(), this.callEvent('onAfterRender', [])), !0;
				var s=this.getItemNode(t);
				return vt(this.ji[t]=this.mc(i), s), dt(s), !0;
			}
		},
		Yk:function() {
			this.canvas && this.canvas.clearCanvas(!0), this.canvas=new ji({
				container:this.tt,
				name:this.name,
				title:this.P.ariaLabel,
				width:this.tt.offsetWidth,
				height:this.tt.offsetHeight
			}), this.zC(0);
		},
		BC:function(t, i, e, s, n, h, r) {t.strokeStyle=h, t.lineCap='square', t.lineWidth=r, t.beginPath(), t.moveTo(i, e), t.lineTo(s, n), t.stroke(), t.lineWidth=1;},
		zC:function(t, i) {
			var e, s, n, h, r, o, a, u, c, f;
			if(i || (i=this.canvas.getCanvas()), this.$xy && (t=t || 0, n=this.data.branch[t], s=this.getItem(t), n && n.length)) {
				if(h=this.$xy[t], t) if(o=parseInt(h.left+h.width/2, 10)+.5, a=parseInt(h.top+h.height, 10), u=parseInt(h.top+h.height+this.type.marginY/2, 10), 'list'==s.$type) {
					if(!this.$C()) return u=parseInt(h.top+h.height+this.type.marginY, 10), void this.BC(i, o, a, o, u, this.type.lineColor);
				} else this.BC(i, o, a, o, u, this.type.lineColor);
				for(a=parseInt(h.top+h.height+this.type.marginY/2, 10)+.5, e=0; e<n.length; e++) t && (r=this.$xy[n[e]], 'list'==s.$type && this.$C()?(o=parseInt(h.left+this.type.listMarginX/2, 10)+.5, e?e==n.length-1 && (f=o):c=o, u=parseInt(r.top+r.height/2, 10), this.BC(i, o, a-this.type.marginY/2, o, u, this.type.lineColor), this.BC(i, o, u, o+this.type.listMarginX/2, u, this.type.lineColor)):(o=parseInt(r.left+r.width/2, 10)+.5, e?e==n.length-1 && (f=o):c=o, u=parseInt(r.top, 10), this.BC(i, o, a, o, u, this.type.lineColor))), this.getItem(n[e]).open && this.zC(n[e], i);
				t && this.BC(i, c, a, f, a, this.type.lineColor);
			}
		},
		$getSize:function(t, i) {
			var e=this.P.autowidth, s=this.P.autoheight;
			return e && (t=this.tt.offsetWidth+(this.tt.offsetHeight>i && !s?q.scrollSize:0)), s && (i=this.tt.offsetHeight+(this.tt.offsetWidth>t && !e?q.scrollSize:0)), Hi.api.$getSize.call(this, t, i);
		},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i) && (this.tt.style.width=this.$width+'px', this.tt.style.height=this.$height+'px', this.render());},
		type:{
			width:120,
			height:'auto',
			padding:20,
			marginX:20,
			marginY:20,
			listMarginX:0,
			listMarginY:0,
			lineColor:Li.organogramLineColor || '#90CAF9',
			classname:function(t, i, e) {
				var s='webix_organogram_item';
				return t.$css && ('object'==M(t.$css) && (t.$css=at(t.$css)), s+=' '+t.$css), e && e.list_item && (s+=' webix_organogram_list_item'), e && e.$css && (s+=e.$css), s+=' webix_organogram_level_'+t.$level, i.css && (s+=' '+i.css), s;
			},
			listClassName:function(t) {
				var i='webix_organogram_list webix_organogram_list_'+t.$level;
				return t.$listCss && ('object'==M(t.$listCss) && (t.$listCss=at(t.$listCss)), i+=' '+t.$listCss), i;
			},
			template:Yt('#value#'),
			templateStart:function(t, i, e) {
				var s='';
				if((!e || !e.list_item || i.listMarginX || i.listMarginY) && this.$xy) {
					var n=this.$xy[t.id];
					s+='width: '+n.width+'px; height: '+n.height+'px;', s+='top: '+n.top+'px; left: '+n.left+'px;';
				}
				return '<div webix_dg_id="'+t.id+'" class="'+i.classname.call(this, t, i, e)+'"'+(s?'style="'+s+'"':'')+'">';
			},
			templateEnd:Yt('</div>'),
			templateListStart:function(t, i, e) {
				var s='';
				if(this.$xy) {
					var n=this.$xy[t.id];
					s+='width: '+n.width+'px;', s+='top: '+(n.top+n.height+i.marginY)+'px; left: '+n.left+'px;';
				}
				return '<div class="'+i.listClassName.call(this, t, i, e)+'"'+(s?'style="'+s+'"':'')+'">';
			},
			templateListEnd:Yt('</div>')
		}
	}), Kr=(H.protoUI(Jr, Pi, De, rs, oe, Ne, ze, je, Pe, as, _e, Hi.view, g), {
		$render_pie:function(t, i, e, s, n, h) {this.HC(t, i, e, s, 1, h, n);},
		HC:function(t, i, e, s, n, h, r) {
			if(i.length) {
				var o=this.RC(e, s), a=this.P.radius?this.P.radius:o.radius;
				if(!(a<0)) {
					var u=this.EC(i), c=this.Gc(u), f=this.qc(u, c), l=this.P.x?this.P.x:o.x, d=this.P.y?this.P.y:o.y;
					1==n && this.P.shadow && this.PC(t, l, d, a), d/=n;
					var v, _=-Math.PI/2, p=[];
					if(t.scale(1, n), this.P.gradient) {
						var m=1!=n?l+a/3:l, b=1!=n?d+a/3:d;
						this.jC(t, l, d, a, m, b);
					}
					for(var g=0; g<i.length; g++) if(u[g]) {
						t.strokeStyle=this.P.lineColor.call(this, i[g]), t.beginPath(), t.moveTo(l, d), p.push(_);
						var w=-Math.PI/2+f[g]-1e-4;
						t.arc(l, d, a, _, w, !1), t.lineTo(l, d);
						var x=this.P.color.call(this, i[g]);
						t.fillStyle=x, t.fill(), this.P.pieInnerText && this.NC(l, d, 5*a/6, _, w, n, this.P.pieInnerText(i[g], c), !0), this.P.label && this.NC(l, d, a+this.P.labelOffset, _, w, n, this.P.label(i[g])), 1!=n && (this.LC(t, l, d, _, w, a, !0), t.fillStyle='#000000', t.globalAlpha=.2, this.LC(t, l, d, _, w, a, !1), t.globalAlpha=1, t.fillStyle=x), h.addSector(i[g].id, _, w, l-e.x, d-e.y/n, a, n, r), _=w;
					}
					for(t.globalAlpha=.8, g=0; g<p.length; g++) v=this.OC(p[g], l, d, a), this.BC(t, l, d, v.x, v.y, this.P.lineColor.call(this, i[g]), 2);
					(t.globalAlpha=1)==n && this.P.border && (t.lineWidth=this.P.borderWidth || 2, t.strokeStyle=this.P.borderColor?this.P.borderColor.call(this):'#FFFFFF', t.beginPath(), t.arc(l, d, a+1, 0, 2*Math.PI, !1), t.stroke()), t.scale(1, 1/n);
				}
			}
		},
		EC:function(t) {
			for(var i=[], e=0; e<t.length; e++) i.push(Math.abs(parseFloat(this.P.value(t[e]) || 0)));
			return i;
		},
		Gc:function(t) {
			for(var i=0, e=0; e<t.length; e++) i+=t[e];
			return i;
		},
		qc:function(t, i) {
			var e, s=[], n=0;
			i=i || this.Gc(t);
			for(var h=0; h<t.length; h++) e=t[h], s[h]=2*Math.PI*(i?(e+n)/i:1/t.length), n+=e;
			return s;
		},
		RC:function(t, i) {
			var e=i.x-t.x, s=i.y-t.y;
			return {
				x:t.x+e/2,
				y:t.y+s/2,
				radius:Math.min(e/2, s/2)
			};
		},
		LC:function(t, i, e, s, n, h, r) {
			if(t.lineWidth=1, s<=0 && 0<=n || 0<=s && n<=Math.PI || .003<Math.abs(s-Math.PI) && s<=Math.PI && n>=Math.PI) {
				s<=0 && 0<=n && (s=0, r= !1, this.WC(t, i, e, h, s, n)), s<=Math.PI && n>=Math.PI && (n=Math.PI, r= !1, this.WC(t, i, e, h, s, n));
				var o=(this.P.pieHeight || Math.floor(h/4))/this.P.cant;
				t.beginPath(), t.arc(i, e, h, s, n, !1), t.lineTo(i+h*Math.cos(n), e+h*Math.sin(n)+o), t.arc(i, e+o, h, n, s, !0), t.lineTo(i+h*Math.cos(s), e+h*Math.sin(s)), t.fill(), r && t.stroke();
			}
		},
		WC:function(t, i, e, s, n, h) {t.beginPath(), t.arc(i, e, s, n, h, !1), t.stroke();},
		PC:function(t, i, e, s) {
			t.globalAlpha=.5;
			for(var n=['#C4C4C4', '#C6C6C6', '#CACACA', '#DCDCDC', '#DDDDDD', '#E0E0E0', '#EEEEEE', '#F5F5F5', '#F8F8F8'], h=n.length-1; -1<h; h--) t.beginPath(), t.fillStyle=n[h], t.arc(i+1, e+1, s+h, 0, 2*Math.PI, !0), t.fill();
			t.globalAlpha=1;
		},
		UC:function(t) {return t.addColorStop(0, '#FFFFFF'), t.addColorStop(.7, '#7A7A7A'), t.addColorStop(1, '#000000'), t;},
		jC:function(t, i, e, s, n, h) {
			var r;
			t.beginPath(), r='function'!= typeof this.P.gradient?(r=t.createRadialGradient(n, h, s/4, i, e, s), this.UC(r)):this.P.gradient(r), t.fillStyle=r, t.arc(i, e, s, 0, 2*Math.PI, !0), t.fill(), t.globalAlpha=.7;
		},
		NC:function(t, i, e, s, n, h, r, o) {
			var a=this.canvases[0].renderText(0, 0, r, 0, 1);
			if(a) {
				var u=a.scrollWidth;
				a.style.width=u+'px', t<u && (u=t);
				var c=n-s<.2?4:8;
				o && (c=u/1.8);
				var f=s+(n-s)/2;
				e-=(c-8)/2;
				var l=-c, d='right';
				(f>=Math.PI/2 && f<Math.PI || f<=3*Math.PI/2 && f>=Math.PI) && (l=-u-l+1, d='left');
				var v=0;
				!o && h<1 && 0<f && f<Math.PI && (v=(this.P.height || Math.floor(e/4))/h);
				var _=(i+Math.floor((e+v)*Math.sin(f)))*h-8, p=t+Math.floor((e+c/2)*Math.cos(f))+l, m=n<Math.PI/2+.01, b=s<Math.PI/2;
				b && m?p=Math.max(p, t+3):b || m?!o && (f>=Math.PI/2 && f<Math.PI || f<=3*Math.PI/2 && f>=Math.PI) && (p+=u/3):p=Math.min(p, t-u), a.style.top=_+'px', a.style.left=p+'px', a.style.width=u+'px', a.style.textAlign=d, a.style.whiteSpace='nowrap';
			}
		},
		$render_pie3D:function(t, i, e, s, n, h) {this.HC(t, i, e, s, this.P.cant, h);},
		$render_donut:function(t, i, e, s, n, h) {
			if(i.length) {
				this.HC(t, i, e, s, 1, h, n);
				var r=this.P, o=this.RC(e, s), a=r.radius?r.radius:o.radius;
				if(!(a<=0)) {
					var u=r.innerRadius && r.innerRadius<a?r.innerRadius:a/3, c=r.x?r.x:o.x, f=r.y?r.y:o.y;
					t.fillStyle=Li.backColor, t.beginPath(), t.arc(c, f, u, 0, 2*Math.PI, !0), t.fill();
				}
			}
		}
	}), Zr={
		$render_bar:function(t, i, e, s, n, h) {
			var r, o, a, u, c, f, l, d, v, _, p, m, b, g=s.y-e.y;
			b= !!this.P.yAxis, m= !!this.P.xAxis, c=(u=this.YC()).max, f=u.min, o=(s.x-e.x)/i.length, n || 'auto'!=this.P.origin && !b || this.qC(i, e, s, f, c, o), b && (c=parseFloat(this.P.yAxis.end), f=parseFloat(this.P.yAxis.start)), l=(v=this.GC(f, c))[0], d=v[1], p=l?g/l:l, b || 'auto'!=this.P.origin && m || (_=10, p=l?(g-_)/l:_), !n && 'auto'!=this.P.origin && !b && this.P.origin>f && this.XC(t, i, e, s, o, s.y-p*(this.P.origin-f)), r=parseInt(this.P.barWidth, 10);
			var w=0, x=0;
			for(a=0; a<this.JC.length; a++) a==n && (x=w), 'bar'==this.JC[a].type && w++;
			this.JC && o<r*w+4 && (r=parseInt(o/w-4, 10));
			var y=(o-r*w)/2, M='undefined'!= typeof this.P.radius?parseInt(this.P.radius, 10):Math.round(r/5), S=!1, k=this.P.gradient;
			for(k && 'function'!= typeof k?(S=k, k= !1):k && (k=t.createLinearGradient(0, s.y, 0, e.y), this.P.gradient(k)), m || this.BC(t, e.x, s.y+.5, s.x, s.y+.5, '#EDEFF0', 1), a=0; a<i.length; a++) {
				var C=parseFloat(this.P.value(i[a]) || 0);
				if(this.KC && (C=this.ZC(C)), C && !isNaN(C)) {
					c<C && (C=c), C-=f, C*=d;
					var $=e.x+y+a*o+(r+1)*x, D=s.y, I=k || this.P.color.call(this, i[a]), A=this.P.border?1:0, T=this.P.label(i[a]);
					b || 'auto'!=this.P.origin && m?C==this.P.origin || 'auto'==this.P.origin && this.P.value(i[a])==f?(A=0, T=''):(C<0 || this.P.yAxis && 0===C && !('auto'!=this.P.origin && this.P.origin>f)) && (C=A=0, T=''):C+=_/p, t.globalAlpha=this.P.alpha.call(this, i[a]);
					var F=this.Gk(t, e, $, D, r, f, M, p, C, I, k, S, A);
					S && this.QC(t, $, D, r, f, M, p, C, I, S, A), A && this.t$(t, $, D, r, f, M, p, C, I), t.globalAlpha=1, F[0]!=$?this.canvases[n].renderTextAt(!1, !0, $+Math.floor(r/2), F[1], T):this.canvases[n].renderTextAt(!0, !0, $+Math.floor(r/2), F[3], T), h.addRect(i[a].id, [$-e.x, F[3]-e.y, F[2]-e.x, F[1]-e.y], n);
				}
			}
		},
		i$:function(t, i, e, s, n, h, r) {
			var o=e;
			return this.P.xAxis && 'auto'!=this.P.origin && this.P.origin>r && (o=e-=(this.P.origin-r)*n, (s-=this.P.origin-r)<0 && (s*= -1, t.translate(i+h, e), t.rotate(Math.PI), e=i=0), e-=.5), {
				value:s,
				x0:i,
				y0:e,
				start:o
			};
		},
		Gk:function(t, i, e, s, n, h, r, o, a, u, c, f, l) {
			t.save(), t.fillStyle=u;
			var d=this.i$(t, e, s, a, o, n, h), v=this.e$(t, d.x0, d.y0, n, r, o, d.value, l);
			c && !f && t.lineTo(d.x0+l, i.y), t.fill(), t.restore();
			var _=d.x0, p=d.x0!=e?e+v[0]:v[0];
			return [_, d.x0!=e?d.start-v[1]-d.y0:d.y0, p, d.x0!=e?d.start-d.y0:v[1]];
		},
		s$:function(t, i) {
			var e, s;
			s=Le.toRgb(i), (e=Le.rgbToHsv(s[0], s[1], s[2]))[2]/=1.4;
			var n='rgb('+Le.hsvToRgb(e[0], e[1], e[2])+')';
			t.strokeStyle=n, 1==t.globalAlpha && (t.globalAlpha=.9);
		},
		t$:function(t, i, e, s, n, h, r, o, a) {
			var u;
			t.save(), u=this.i$(t, i, e, o, r, s, n), this.s$(t, a), this.e$(t, u.x0, u.y0, s, h, r, u.value, t.lineWidth/2, 1), t.stroke(), t.restore();
		},
		QC:function(t, i, e, s, n, h, r, o, a, u, c) {
			t.save();
			var f=this.i$(t, i, e, o, r, s, n), l=this.n$(t, f.x0, f.y0, f.x0+s, f.y0-r*f.value+2, u, a, 'y');
			t.fillStyle=l.gradient, this.e$(t, f.x0+l.offset, f.y0, s-2*l.offset, h, r, f.value, l.offset+c), t.fill(), t.restore();
		},
		e$:function(t, i, e, s, n, h, r, o, a) {
			t.beginPath();
			var u=0;
			if(h*r<n) {
				var c=(n-h*r)/n;
				c<=1 && -1<=c && (u=-Math.acos(c)+Math.PI/2);
			}
			t.moveTo(i+o, e);
			var f=e-Math.floor(h*r)+n+(n?0:o);
			n<h*r && t.lineTo(i+o, f);
			var l=i+n;
			n && 0<n && t.arc(l, f, Math.max(n-o, 0), -Math.PI+u, -Math.PI/2, !1);
			var d=i+s-n-o, v=f-n+(n?o:0);
			t.lineTo(d, v), n && 0<n && t.arc(d+o, f, Math.max(n-o, 0), -Math.PI/2, 0-u, !1);
			var _=i+s-o;
			return t.lineTo(_, e), a || t.lineTo(i+o, e), [_, v];
		}
	}, Qr={
		$render_line:function(t, i, e, s, n, h) {
			var r, o, a, u, c, f, l, d, v, _, p, m;
			if(u=this.h$(t, i, e, s, n), r=this.P, i.length) {
				for(c=r.offset?e.x+.5*u.cellWidth:e.x, a=[], o=0; o<i.length; o++) if((m=this.r$(i[o], e, s, u)) || '0'==m) {
					if(l=o?u.cellWidth*o-.5+c:c, v='object'==M(m)?m.y0:m, o && this.P.fixOverflow) {
						if((p=this.r$(i[o-1], e, s, u)).out && p.out==m.out) continue;
						f=u.cellWidth*(o-1)-.5+c, d='object'==M(p)?p.y0:p, p.out && (_='min'==p.out?s.y:e.y, a.push({
							x:this.o$(f, l, d, v, _),
							y:_
						})), m.out && (_='min'==m.out?s.y:e.y, a.push({
							x:this.o$(f, l, d, v, _),
							y:_
						}));
					}
					m.out || a.push({
						x:l,
						y:m,
						index:o
					});
				}
				for(this.a$=e, o=1; o<=a.length; o++) f=a[o-1].x, d=a[o-1].y, o<a.length && (l=a[o].x, v=a[o].y, this.BC(t, f, d, l, v, r.line.color.call(this, i[o-1]), r.line.width), r.line && r.line.shadow && (t.globalAlpha=.3, this.BC(t, f+2, d+r.line.width+8, l+2, v+r.line.width+8, '#EEEEEE', r.line.width+3), t.globalAlpha=1)), 'undefined'!= typeof a[o-1].index && this.u$(t, f, d, i[a[o-1].index], r.label(i[a[o-1].index]), n, h, e);
			}
		},
		o$:function(t, i, e, s, n) {return t+(n-e)*(i-t)/(s-e);},
		u$:function(t, i, e, s, n, h, r) {
			var o=this.P.item, a=parseInt(o.radius.call(this, s), 10) || 0, u=this.a$, c=o.type.call(this, s);
			if(a) {
				if(t.save(), o.shadow) {
					t.lineWidth=1, t.strokeStyle='#BDBDBD', t.fillStyle='#BDBDBD';
					for(var f=[.1, .2, .3], l=f.length-1; 0<=l; l--) t.globalAlpha=f[l], t.strokeStyle='#D0D0D0', t.beginPath(), this.c$(t, i, e+2*a/3, a+l+1, c), t.stroke();
					t.beginPath(), t.globalAlpha=.3, t.fillStyle='#BDBDBD', this.c$(t, i, e+2*a/3, a+1, c), t.fill();
				}
				t.restore(), t.lineWidth=o.borderWidth, t.fillStyle=o.color.call(this, s), t.strokeStyle=o.borderColor.call(this, s), t.globalAlpha=o.alpha.call(this, s), t.beginPath(), this.c$(t, i, e, a+1, c), t.fill(), t.stroke(), t.globalAlpha=1;
			}
			if(n && this.canvases[h].renderTextAt(!1, !0, i, e-a-this.P.labelOffset, this.P.label.call(this, s)), r) {
				var d=this.P.eventRadius || a+1;
				r.addRect(s.id, [i-d-u.x, e-d-u.y, i+d-u.x, e+d-u.y], h);
			}
		},
		c$:function(t, i, e, s, n) {
			var h=[];
			if(!n || 'square'!=n && 's'!=n) if(!n || 'diamond'!=n && 'd'!=n) h=!n || 'triangle'!=n && 't'!=n?[[i, e, s, 0, 2*Math.PI, !0]]:[[i, e-s], [i+Math.sqrt(3)*s/2, e+s/2], [i-Math.sqrt(3)*s/2, e+s/2], [i, e-s]]; else {
				var r=1<t.lineWidth?t.lineWidth*Math.sqrt(2)/4:0;
				h=[[i, e-s], [i+s, e], [i, e+s], [i-s, e], [i+r, e-s-r]];
			} else h=[[i-(s*=Math.sqrt(2)/2)-t.lineWidth/2, e-s], [i+s, e-s], [i+s, e+s], [i-s, e+s], [i-s, e-s]];
			this.f$(t, h);
		},
		r$:function(t, i, e, s) {
			var n=s.minValue, h=s.maxValue, r=s.unit, o=s.valueFactor, a=this.P.value(t);
			this.KC && (a=this.ZC(a));
			var u=(parseFloat(a || 0)-n)*o;
			this.P.yAxis || (u+=s.startValue/r);
			var c=e.y-r*u;
			return !this.P.fixOverflow || 'line'!=this.P.type && 'area'!=this.P.type?(h<a && (c=i.y), (u<0 || a<n) && (c=e.y)):h<a?c={
				y:i.y,
				y0:c,
				out:'max'
			}:(u<0 || a<n) && (c={
				y:e.y,
				y0:c,
				out:'min'
			}), c;
		},
		h$:function(t, i, e, s, n) {
			var h, r={};
			r.totalHeight=s.y-e.y, this.P.cellWidth?r.cellWidth=Math.min(s.x-e.x, this.P.cellWidth):r.cellWidth=(s.x-e.x)/(this.P.offset?i.length:i.length-1);
			var o=!!this.P.yAxis, a=-1!=this.P.type.indexOf('stacked')?this.l$(i):this.YC();
			r.maxValue=a.max, r.minValue=a.min, n || this.qC(i, e, s, r.minValue, r.maxValue, r.cellWidth), o && (r.maxValue=parseFloat(this.P.yAxis.end), r.minValue=parseFloat(this.P.yAxis.start));
			var u=this.GC(r.minValue, r.maxValue);
			return h=u[0], r.valueFactor=u[1], r.unit=h?r.totalHeight/h:10, r.startValue=0, o || (r.startValue=10, r.unit!=r.totalHeight && (r.unit=h?(r.totalHeight-r.startValue)/h:10)), r;
		}
	}, to={
		$render_barH:function(t, i, e, s, n, h) {
			var r, o, a, u, c, f, l, d, v, _, p, m, b, g, w, x, y, M, S, k, C;
			for(a=(s.y-e.y)/i.length, d=(l=this.YC('h')).max, v=l.min, x=s.x-e.x, C= !!this.P.xAxis, n || this.d$(t, i, e, s, v, d, a), C && (d=parseFloat(this.P.xAxis.end), v=parseFloat(this.P.xAxis.start)), m=(g=this.GC(v, d))[0], p=g[1], M=m?x/m:10, C || (w=10, M=m?(x-w)/m:10), (o=parseInt(this.P.barWidth, 10))*this.JC.length+4>a && (o=a/this.JC.length-4), r=Math.floor((a-o*this.JC.length)/2), b='undefined'!= typeof this.P.radius?parseInt(this.P.radius, 10):Math.round(o/5), _= !1, (c=this.P.gradient) && 'function'!= typeof c?(_=c, c= !1):c && (c=t.createLinearGradient(e.x, e.y, s.x, e.y), this.P.gradient(c)), C || this.BC(t, e.x-.5, e.y, e.x-.5, s.y, '#EDEFF0', 1), f=0; f<i.length; f++) if(y=parseFloat(this.P.value(i[f] || 0)), this.KC && (y=this.ZC(y)), y && !isNaN(y)) if(d<y && (y=d), y-=v, y*=p, S=e.x, k=e.y+r+f*a+(o+1)*n, y<0 && 'auto'==this.P.origin || this.P.xAxis && 0===y && !('auto'!=this.P.origin && this.P.origin>v)) this.canvases[n].renderTextAt('middle', 'right', S+10, k+o/2+r, this.P.label(i[f])); else {
				y<0 && 'auto'!=this.P.origin && this.P.origin>v && (y=0), C || (y+=w/M), u=c || this.P.color.call(this, i[f]), this.P.border && this.v$(t, S, k, o, v, b, M, y, u), t.globalAlpha=this.P.alpha.call(this, i[f]);
				var $=this._$(t, s, S, k, o, v, b, M, y, u, c, _);
				_ && this.p$(t, S, k, o, v, b, M, y, u, _), t.globalAlpha=1, $[3]==k?(this.canvases[n].renderTextAt('middle', 'left', $[0]-5, $[3]+Math.floor(o/2), this.P.label(i[f])), h.addRect(i[f].id, [$[0]-e.x, $[3]-e.y, $[2]-e.x, $[3]+o-e.y], n)):(this.canvases[n].renderTextAt('middle', !1, $[2]+5, $[1]+Math.floor(o/2), this.P.label(i[f])), h.addRect(i[f].id, [$[0]-e.x, k-e.y, $[2]-e.x, $[3]-e.y], n));
			}
		},
		m$:function(t, i, e, s, n, h, r, o, a) {
			var u=0;
			if(h*r<n) {
				var c=(n-h*r)/n;
				u=-Math.asin(c)+Math.PI/2;
			}
			t.moveTo(i, e+o);
			var f=i+h*r-n-(n?0:o);
			f=Math.max(i, f), n<h*r && t.lineTo(f, e+o);
			var l=e+n;
			n && 0<n && t.arc(f, l, n-o, -Math.PI/2+u, 0, !1);
			var d=e+s-n-(n?0:o), v=f+n-(n?o:0);
			t.lineTo(v, d), n && 0<n && t.arc(f, d, n-o, 0, Math.PI/2-u, !1);
			var _=e+s-o;
			return t.lineTo(i, _), a || t.lineTo(i, e+o), [v, _];
		},
		d$:function(t, i, e, s, n, h, r) {
			var o=0;
			this.P.xAxis && (this.canvases.x || (this.canvases.x=this.b$('axis_x')), o=this.g$(this.canvases.x.getCanvas(), i, e, s, n, h)), this.P.yAxis && (this.canvases.y || (this.canvases.y=this.b$('axis_y')), this.w$(this.canvases.y.getCanvas(), i, e, s, r, o));
		},
		w$:function(t, i, e, s, n, h) {
			if(this.P.yAxis) {
				var r, o=parseInt(h || e.x, 10)-.5, a=s.y+.5, u=e.y;
				this.BC(t, o, a, o, u, this.P.yAxis.color, 1);
				for(var c=0; c<i.length; c++) {
					var f='auto'!=this.P.origin && 'barH'==this.P.type && parseFloat(this.P.value(i[c]))<this.P.origin;
					r=u+n/2+c*n, this.canvases.y.renderTextAt('middle', !f && 'left', f?o+5:o-5, r, this.P.yAxis.template(i[c]), 'webix_axis_item_y', f?0:o-10), this.P.yAxis.lines.call(this, i[c]) && this.BC(t, e.x, r, s.x, r, this.P.yAxis.lineColor.call(this, i[c]), 1);
				}
				this.P.yAxis.lines.call(this, {}) && this.BC(t, e.x+.5, u+.5, s.x, u+.5, this.P.yAxis.lineColor.call(this, {}), 1), this.x$(e, s);
			}
		},
		g$:function(t, i, e, s, n, h) {
			var r, o={}, a=this.P.xAxis;
			if(a) {
				var u=s.y+.5, c=e.x-.5, f=s.x-.5, l=e.x;
				if(this.BC(t, c, u, f, u, a.color, 1), a.step && (r=parseFloat(a.step)), 'undefined'!= typeof this.y$.step && 'undefined'!= typeof this.y$.start && 'undefined'!= typeof this.y$.end || (n=(o=this.M$(n, h)).start, h=o.end, r=o.step, this.P.xAxis.end=h, this.P.xAxis.start=n, this.P.xAxis.step=r), 0!==r) {
					for(var d=(f-c)*r/(h-n), v=0, _=n; _<=h; _+=r) {
						var p=this.KC?Math.pow(10, _):_;
						o.fixNum && (p=parseFloat(p).toFixed(o.fixNum));
						var m=Math.floor(c+v*d)+.5;
						if(_==n && 'auto'==this.P.origin || !a.lines.call(this, _) || this.BC(t, m, u, m, e.y, this.P.xAxis.lineColor.call(this, _), 1), _==this.P.origin && (l=m+1), r<1 && !this.KC) {
							var b=Math.min(Math.floor(this.ZC(r)), n<=0?0:Math.floor(this.ZC(n))), g=Math.pow(10, -b);
							_=p=Math.round(p*g)/g;
						}
						this.canvases.x.renderTextAt(!1, !0, m, u+2, a.template(p.toString()), 'webix_axis_item_x'), v++;
					}
					return this.canvases.x.renderTextAt(!0, !1, c, s.y+this.P.padding.bottom-3, this.P.xAxis.title, 'webix_axis_title_x', s.x-e.x), l;
				}
			}
		},
		S$:function(t, i, e, s, n, h, r) {
			var o=i;
			return this.P.yAxis && 'auto'!=this.P.origin && this.P.origin>r && (o=i+=(this.P.origin-r)*n, (s-=this.P.origin-r)<0 && (s*= -1, t.translate(i, e+h), t.rotate(Math.PI), i=.5, e=0), i+=.5), {
				value:s,
				x0:i,
				y0:e,
				start:o
			};
		},
		_$:function(t, i, e, s, n, h, r, o, a, u, c, f) {
			t.save();
			var l=this.S$(t, e, s, a, o, n, h);
			t.fillStyle=u, t.beginPath();
			var d=this.m$(t, l.x0, l.y0, n, r, o, l.value, this.P.border?1:0);
			c && !f && t.lineTo(i.x, l.y0+(this.P.border?1:0)), t.fill(), t.restore();
			var v=l.y0, _=l.y0!=s?s:d[1];
			return [l.y0!=s?l.start-d[0]:l.start, v, l.y0!=s?l.start:d[0], _];
		},
		v$:function(t, i, e, s, n, h, r, o, a) {
			t.save();
			var u=this.S$(t, i, e, o, r, s, n);
			t.beginPath(), this.s$(t, a), t.globalAlpha=.9, this.m$(t, u.x0, u.y0, s, h, r, u.value, t.lineWidth/2, 1), t.stroke(), t.restore();
		},
		p$:function(t, i, e, s, n, h, r, o, a, u) {
			t.save();
			var c=this.S$(t, i, e, o, r, s, n), f=this.n$(t, c.x0, c.y0+s, c.x0+r*c.value, c.y0, u, a, 'x');
			t.fillStyle=f.gradient, t.beginPath(), this.m$(t, c.x0, c.y0+f.offset, s-2*f.offset, h, r, c.value, f.offset), t.fill(), t.globalAlpha=1, t.restore();
		}
	}, io={
		$render_stackedBar:function(t, i, e, s, n, h) {
			var r, o, a, u, c, f, l, d=this.P, v=s.y-e.y, _=!!d.yAxis, p=!!d.xAxis, m=this.l$(i), b=0===d.origin;
			r=m.max, o=m.min;
			var g=Math.floor((s.x-e.x)/i.length);
			n || (a=this.qC(i, e, s, o, r, g)), _ && (r=parseFloat(d.yAxis.end), o=parseFloat(d.yAxis.start));
			var w=this.GC(o, r);
			l=w[0], f=w[1];
			var x=l?v/l:10, y=parseInt(d.barWidth, 10);
			g<y+4 && (y=g-4);
			var M=Math.floor((g-y)/2), S=!!d.gradient && d.gradient;
			p || this.BC(t, e.x, s.y+.5, s.x, s.y+.5, '#EDEFF0', 1);
			for(var k=0; k<i.length; k++) {
				var C=Math.abs(parseFloat(d.value(i[k] || 0)));
				this.KC && (C=this.ZC(C)), u=e.x+M+k*g;
				var $=b && C<0;
				if(n?c=$?i[k].$startYN:i[k].$startY:(c=a-1, i[k].$startY=c, b && ($ && (c=a+1), i[k].$startYN=a+1)), C && !isNaN(C) && (n || b || (C-=o), C*=f, !(c<e.y+1))) {
					var D=this.P.color.call(this, i[k]), I=Math.abs(c-(b?s.y+o*x:s.y))<3;
					t.globalAlpha=d.alpha.call(this, i[k]), t.fillStyle=t.strokeStyle=d.color.call(this, i[k]), t.beginPath();
					var A=c-x*C+(I?$?-1:1:0), T=this.k$(t, u-(d.border?.5:0), c, y+(d.border?.5:0), A, 0, e.y);
					if(t.fill(), t.stroke(), S) {
						t.save();
						var F=this.n$(t, u, c, u+y, T[1], S, D, 'y');
						t.fillStyle=F.gradient, t.beginPath(), T=this.k$(t, u+F.offset, c, y-2*F.offset, A, d.border?1:0, e.y), t.fill(), t.restore();
					}
					d.border && (t.save(), 'string'== typeof d.border?t.strokeStyle=d.border:this.s$(t, D), t.beginPath(), this.k$(t, u-.5, parseInt(c, 10)+.5, y+1, parseInt(A, 10)+.5, 0, e.y, I), t.stroke(), t.restore()), t.globalAlpha=1, this.canvases[n].renderTextAt(!1, !0, u+Math.floor(y/2), T[1]+(c-T[1])/2-7, this.P.label(i[k])), h.addRect(i[k].id, [u-e.x, T[1]-e.y, T[0]-e.x, i[k][$?'$startYN':'$startY']-e.y], n), i[k][$?'$startYN':'$startY']=T[1];
				}
			}
		},
		k$:function(t, i, e, s, n, h, r, o) {
			t.moveTo(i, e), n<r && (n=r), t.lineTo(i, n);
			var a=i+s, u=n;
			t.lineTo(a, u);
			var c=i+s;
			return t.lineTo(c, e), o || t.lineTo(i, e), [c, u];
		}
	}, eo={
		$render_stackedBarH:function(t, i, e, s, n, h) {
			var r, o, a, u, c=s.x-e.x, f=!!this.P.yAxis, l=this.l$(i);
			r=l.max, o=l.min;
			var d=Math.floor((s.y-e.y)/i.length);
			n || this.d$(t, i, e, s, o, r, d), f && (r=parseFloat(this.P.xAxis.end), o=parseFloat(this.P.xAxis.start));
			var v=this.GC(o, r);
			u=v[0], a=v[1];
			var _=u?c/u:10, p=0;
			f || (p=10, _=u?(c-p)/u:10);
			var m=parseInt(this.P.barWidth, 10);
			d<m+4 && (m=d-4);
			var b=(d-m)/2, g=!1, w=this.P.gradient;
			w && (g= !0), f || this.BC(t, e.x-.5, e.y, e.x-.5, s.y, '#EDEFF0', 1);
			var x=0, y=0;
			for(M=0; M<this.JC.length; M++) M==n && (y=x), 'stackedBarH'==this.JC[M].type && x++;
			for(var M=0; M<i.length; M++) {
				y || (i[M].$startX=e.x);
				var S=Math.abs(parseFloat(this.P.value(i[M] || 0)));
				r<S && (S=r), S-=o, S*=a;
				var k=e.x, C=e.y+b+M*d;
				if(y?k=i[M].$startX:i[M].$startX=k, S && !isNaN(S)) {
					f || (S+=p/_);
					var $=this.P.color.call(this, i[M]);
					t.globalAlpha=this.P.alpha.call(this, i[M]), t.fillStyle=this.P.color.call(this, i[M]), t.beginPath();
					var D=this.m$(t, k, C, m, 0, _, S, 0);
					if(w && !g && t.lineTo(e.x+c, C+(this.P.border?1:0)), t.fill(), g) {
						var I=this.n$(t, k, C+m, k, C, g, $, 'x');
						t.fillStyle=I.gradient, t.beginPath(), D=this.m$(t, k, C, m, 0, _, S, 0), t.fill();
					}
					this.P.border && this.v$(t, k, C, m, o, 0, _, S, $), t.globalAlpha=1, this.canvases[n].renderTextAt('middle', !0, i[M].$startX+(D[0]-i[M].$startX)/2-1, C+(D[1]-C)/2, this.P.label(i[M])), h.addRect(i[M].id, [i[M].$startX-e.x, C-e.y, D[0]-e.x, D[1]-e.y], n), i[M].$startX=D[0];
				}
			}
		}
	}, so={
		$render_area:function(t, i, e, s, n, h) {
			var r, o, a, u, c, f, l, d, v, _, p, m, b, g, w;
			if(f=this.h$(t, i, e, s, n), u=(o=this.P).eventRadius || Math.floor(f.cellWidth/2), i.length) {
				for(l=[], _=o.offset?e.x+.5*f.cellWidth:e.x, a=0; a<i.length; a++) if(c=i[a], v=this.r$(c, e, s, f), b=_+f.cellWidth*a, v) {
					if(g='object'==M(v)?v.y0:v, a && this.P.fixOverflow) {
						if((d=this.r$(i[a-1], e, s, f)).out && d.out==v.out) continue;
						p=f.cellWidth*(a-1)-.5+_, m='object'==M(d)?d.y0:d, d.out && (w='min'==d.out?s.y:e.y, l.push([this.o$(p, b, m, g, w), w])), v.out && (w='min'==v.out?s.y:e.y, l.push([this.o$(p, b, m, g, w), w]), a==i.length-1 && w==e.y && l.push([b, e.y]));
					}
					v.out || (l.push([b, g]), h.addRect(c.id, [b-u-e.x, g-u-e.y, b+u-e.x, g+u-e.y], n)), o.yAxis || (r=o.offset || a!=i.length-1?'center':'left', this.canvases[n].renderTextAt(!1, r, b, g-o.labelOffset, o.label(c)));
				}
				l.length && (l.push([b, s.y]), l.push([l[0][0], s.y])), t.globalAlpha=this.P.alpha.call(this, i[0]), t.fillStyle=this.P.color.call(this, i[0]), t.beginPath(), this.f$(t, l), t.fill(), t.lineWidth=1, t.globalAlpha=1, o.border && (t.lineWidth=o.borderWidth || 1, o.borderColor?t.strokeStyle=o.borderColor.call(this, i[0]):this.s$(t, t.fillStyle), t.beginPath(), this.f$(t, l), t.stroke());
			}
		},
		$render_stackedArea:function(t, e, i, s, n, h) {
			var r, o, a, u, c, f, l, d, v, _, p, m, b, g, w, x, y;
			if(v=this.h$(t, e, i, s, n), l=(u=this.P).eventRadius || Math.floor(v.cellWidth/2), e.length) {
				_=[], b=[], p=u.offset?i.x+.5*v.cellWidth:i.x;
				var M=function(t, i) {return n?e[t].$startY?i-s.y+e[t].$startY:0:i;};
				for(c=0; c<e.length; c++) d=e[c], c?p+=v.cellWidth:(m=M(c, s.y), _.push([p, m])), m=M(c, this.r$(d, i, s, v)), b.push(isNaN(m) && !c?e[c].$startY || s.y:m), m && (_.push([p, m]), h.addRect(d.id, [p-l-i.x, m-l-i.y, p+l-i.x, m+l-i.y], n), u.yAxis || (u.offset, a='center', this.canvases[n].renderTextAt(!1, a, p, m-u.labelOffset, u.label(d))));
				if(_.push([p, M(c-1, s.y)]), n) for(c=e.length-2; 0<c; c--) p-=v.cellWidth, (m=e[c].$startY) && _.push([p, m]);
				for(_.push([_[0][0], _[0][1]]), t.globalAlpha=this.P.alpha.call(this, e[0]), t.fillStyle=this.P.color.call(this, e[0]), t.beginPath(), this.f$(t, _), t.fill(), c=0; c<e.length; c++) {
					if(!(m=b[c])) for(c==e.length-1 && (m=e[c].$startY), f=c+1; f<e.length; f++) if(b[f]) {
						r={
							x:i.x,
							y:b[0]
						}, o={
							x:i.x+v.cellWidth*f,
							y:b[f]
						}, g=i.x+v.cellWidth*c, void 0, m=(y=((x=o).y-(w=r).y)/(x.x-w.x))*g+w.y-y*w.x;
						break;
					}
					e[c].$startY=m;
				}
			}
		}
	}, no={
		$render_radar:function(t, i, e, s, n, h) {this.C$(t, i, e, s, n, h);},
		C$:function(t, i, e, s, n, h) {
			if(i.length) {
				for(var r=this.RC(e, s), o=this.P.radius?this.P.radius:r.radius, a=this.P.x?this.P.x:r.x, u=this.P.y?this.P.y:r.y, c=[], f=0; f<i.length; f++) c.push(1);
				var l=this.qc(c, i.length);
				this.a$=e, n || this.D$(l, a, u, o, i), this.I$(t, l, a, u, o, i, n, h);
			}
		},
		I$:function(t, i, e, s, n, h, r, o) {
			var a, u, c, f, l, d, v, _, p, m, b, g, w, x, y, M, S, k, C;
			for(l=(c=this.P).yAxis.start, d=c.yAxis.end, k=(g=(C=this.GC(l, d))[0])?n/g:n/2, S=C[1], a=u=w=-Math.PI/2, p=[], f=_=0; f<h.length; f++) y=M || (x=c.value(h[f]), this.KC && (x=this.ZC(x)), (parseFloat(x || 0)-l)*S), m=Math.floor(k*y), x=c.value(f!=h.length-1?h[f+1]:h[0]), this.KC && (x=this.ZC(x)), M=(parseFloat(x || 0)-l)*S, b=Math.floor(k*M)
				, a=u, u=f!=h.length-1?w+i[f]-1e-4:w, v=_ || this.OC(a, e, s, m), _=this.OC(u, e, s, b), p.push(v);
			c.fill && this.A$(t, p, h), !c.disableLines && 2<h.length && this.T$(t, p, h), (!c.disableItems || h.length<3) && this.F$(t, p, h, r, o), p=null;
		},
		F$:function(t, i, e, s, n) {for(var h=0; h<i.length; h++) this.u$(t, i[h].x, i[h].y, e[h], this.P.label.call(this, e), s, n);},
		A$:function(t, i, e) {
			var s, n;
			t.globalAlpha=this.P.alpha.call(this, {}), t.beginPath();
			for(var h=0; h<i.length; h++) t.fillStyle=this.P.fill.call(this, e[h]), s=i[h], n=i[h+1] || i[0], h || t.moveTo(s.x, s.y), t.lineTo(n.x, n.y);
			t.fill(), t.globalAlpha=1;
		},
		T$:function(t, i, e) {for(var s, n, h=0; h<i.length; h++) s=i[h], n=i[h+1] || i[0], this.BC(t, s.x, s.y, n.x, n.y, this.P.line.color.call(this, e[h]), this.P.line.width);},
		D$:function(t, i, e, s, n) {
			var h=this.P.yAxis, r=this.P.xAxis, o=h.start, a=h.end, u=h.step, c={}, f=this.V$;
			if('undefined'== typeof f.step || 'undefined'== typeof f.start || 'undefined'== typeof f.end) {
				var l=this.YC();
				o=(c=this.M$(l.min, l.max)).start, a=c.end, u=c.step, h.end=a, h.start=o;
			}
			var d, v, _, p, m, b=[], g=0, w=s*u/(a-o);
			u<1 && (p=Math.min(this.ZC(u), o<=0?0:this.ZC(o)), m=Math.pow(10, -p));
			var x=[];
			this.canvases.scale || (this.canvases.scale=this.b$('radar_scale'));
			var y=this.canvases.scale.getCanvas();
			for(d=a; o<=d; d-=u) {
				var M=this.KC?Math.pow(10, d):d;
				c.fixNum && (M=parseFloat(d).toFixed(c.fixNum)), b.push(Math.floor(g*w)+.5), m && !this.KC && (d=M=Math.round(M*m)/m);
				var S=e-s+b[b.length-1];
				this.canvases.scale.renderTextAt('middle', 'left', i, S, h.template(M.toString()), 'webix_axis_item_y webix_radar');
				var k, C=-Math.PI/2, $=C;
				for(v=0; v<t.length; v++) g || x.push($), k=C+t[v]-1e-4, this.z$(y, 2<t.length?f.lineShape || 'line':'arc', i, e, s-b[b.length-1], $, k, d, v, n[d]), $=k;
				g++;
			}
			for(d=0; d<x.length; d++) _=this.OC(x[d], i, e, s), r && (r.lines.call(this, n[d], d) && this.BC(y, i, e, _.x, _.y, r.lineColor.call(this, n[d]), 1), this.B$(y, i, e, s, x[d], r.template.call(this, n[d])));
		},
		z$:function(t, i, e, s, n, h, r, o, a) {
			var u, c;
			if(n<0) return !1;
			u=this.OC(h, e, s, n), c=this.OC(r, e, s, n);
			var f=this.P.yAxis;
			f.bg && (t.beginPath(), t.moveTo(e, s), 'arc'==i?t.arc(e, s, n, h, r, !1):(t.lineTo(u.x, u.y), t.lineTo(c.x, c.y)), t.fillStyle=f.bg(o, a), t.moveTo(e, s), t.fill(), t.closePath()), f.lines.call(this, o) && (t.lineWidth=1, t.beginPath(), 'arc'==i?t.arc(e, s, n, h, r, !1):(t.moveTo(u.x, u.y), t.lineTo(c.x, c.y)), t.strokeStyle=f.lineColor.call(this, o), t.stroke());
		},
		B$:function(t, i, e, s, n, h) {
			if(!h) return !1;
			var r=this.canvases.scale.renderText(0, 0, h, 'webix_axis_radar_title', 1), o=r.scrollWidth, a=r.offsetHeight, u=this.OC(n, i, e, s+5), c=0, f=0;
			(n<0 || n>Math.PI) && (f= -a), n>Math.PI/2 && (c= -o), Math.abs(n+Math.PI/2)<.001 || Math.abs(n-Math.PI/2)<.001?c=-o/2:(Math.abs(n)<.001 || Math.abs(n-Math.PI)<.001) && (f=-a/2), r.style.top=u.y+f+'px', r.style.left=u.x+c+'px', r.style.width=o+'px', r.style.whiteSpace='nowrap';
		}
	}, ho={
		$render_scatter:function(t, i, e, s, n, h) {
			if(this.P.xValue) {
				var r=this.P, o=!(r.disableLines || 'undefined'== typeof r.disableLines), a=this.YC(), u=this.YC('h', 'xValue');
				n || (this.canvases.x || (this.canvases.x=this.b$('axis_x')), this.canvases.y || (this.canvases.y=this.b$('axis_y')), this.H$(this.canvases.y.getCanvas(), i, e, s, a.min, a.max), this.g$(this.canvases.x.getCanvas(), i, e, s, u.min, u.max)), a={
					min:r.yAxis.start,
					max:r.yAxis.end
				}, u={
					min:r.xAxis.start,
					max:r.xAxis.end
				};
				var c=this.R$(t, i, e, s, u, a);
				this.a$=e;
				for(var f, l, d, v, _, p=[], m=0; m<i.length; m++) {
					var b=this.E$(c, s, e, u, i[m], 'X'), g=this.E$(c, e, s, a, i[m], 'Y');
					isNaN(b) || isNaN(g) || p.push({
						x:b,
						y:g,
						index:m
					});
				}
				for(var w=0; w<p.length; w++) {
					if(_=p[w].index, o) {
						var x=r.line.color.call(this, i[_]);
						f=p[w].x, l=p[w].y, w==p.length-1?r.shape && 2<p.length && (this.BC(t, d, v, p[0].x, p[0].y, x, r.line.width), r.disableItems || this.P$(t, h, p[0], i[0], n), r.fill && this.j$(t, p, i)):(d=p[w+1].x, v=p[w+1].y, this.BC(t, f, l, d, v, x, r.line.width));
					}
					!r.disableItems && p[w] && this.P$(t, h, p[w], i[_], n);
				}
			}
		},
		j$:function(t, i, e) {
			var s, n;
			t.globalAlpha=this.P.alpha.call(this, {}), t.beginPath();
			for(var h=0; h<i.length; h++) t.fillStyle=this.P.fill.call(this, e[h]), s=i[h], n=i[h+1] || i[0], h || t.moveTo(s.x, s.y), t.lineTo(n.x, n.y);
			t.fill(), t.globalAlpha=1;
		},
		R$:function(t, i, e, s, n, h) {
			var r={};
			return r.totalHeight=s.y-e.y, r.totalWidth=s.x-e.x, this.N$(r, n.min, n.max, r.totalWidth, 'X'), this.N$(r, h.min, h.max, r.totalHeight, 'Y'), r;
		},
		P$:function(t, i, e, s, n) {this.u$(t, e.x, e.y, s, this.P.label.call(this, s), n, i);},
		E$:function(t, i, e, s, n, h) {
			var r=this.P['X'==h?'xValue':'value'].call(this, n), o=t['valueFactor'+h], a=(parseFloat(r || 0)-s.min)*o, u=t['unit'+h], c=e[h.toLowerCase()]-('X'==h?-1:1)*Math.floor(u*a);
			return a<0 && (c=e[h.toLowerCase()]), r>s.max && (c=i[h.toLowerCase()]), r<s.min && (c=e[h.toLowerCase()]), c;
		},
		N$:function(t, i, e, s, n) {
			var h=this.GC(i, e);
			t['relValue'+(n=n || '')]=h[0], t['valueFactor'+n]=h[1], t['unit'+n]=t['relValue'+n]?s/t['relValue'+n]:10;
		}
	}, ro={
		$render_splineArea:function(t, i, e, s, n, h) {
			var r, o, a, u, c, f, l, d, v, _, p, m, b, g=this.P, w=[];
			if(f=this.h$(t, i, e, s, n), c=g.eventRadius || Math.floor(f.cellWidth/2), a=[], i.length) {
				for(v=e.x, o=0; o<i.length; o++) ((m=this.r$(i[o], e, s, f)) || '0'==m) && (d=o?f.cellWidth*o-.5+v:v, a.push({
					x:d,
					y:m,
					index:o
				}), h.addRect(i[o].id, [d-c-e.x, m-c-e.y, d+c-e.x, m+c-e.y], n));
				for(l=this.L$(a), o=0; o<a.length; o++) if(_=a[o].x, o<a.length-1) {
					for(p=a[o+1].x, b=a[o+1].y, u=_; u<p; u++) {
						var x=this.O$(u, _, o, l.a, l.b, l.c, l.d);
						x<e.y && (x=e.y), x>s.y && (x=s.y);
						var y=this.O$(u+1, _, o, l.a, l.b, l.c, l.d);
						y<e.y && (y=e.y), y>s.y && (y=s.y), w.push([u, x]), w.push([u+1, y]);
					}
					w.push([p, b]);
				}
				r=this.P.color.call(this, i[0]), w.length && (w.push([p, s.y]), w.push([w[0][0], s.y])), t.globalAlpha=this.P.alpha.call(this, i[0]), t.fillStyle=r, t.beginPath(), this.f$(t, w), t.fill(), t.lineWidth=1, t.globalAlpha=1, g.border && (t.lineWidth=g.borderWidth || 1, g.borderColor?t.strokeStyle=g.borderColor.call(this, i[0]):this.s$(t, r), t.beginPath(), w.splice(w.length-3), this.f$(t, w), t.stroke());
			}
		}
	}, oo={
		dynamic_setter:function(t) {
			return t && function i(r) {
				if(r.W$) return;
				var o=r.P;
				o.cellWidth || (o.cellWidth=30);
				o.animateDuration || (o.animateDuration=400);
				o.offset= !1, r.W$=r.attachEvent('onBeforeRender', function(t, i) {
					var e=r.U$(r.me, r.ge);
					!function s(e) {uo(e, function(t, i) {i.Re(e.me+2*e.P.cellWidth, e.ge);});}(r), function h(t, i, e, s) {
						if(s && t.length) {
							var n=Math.ceil((e.x-i.x)/s);
							t.length>n+1 && t.splice(0, t.length-n-1);
						}
					}(t, e.start, e.end, o.cellWidth), 'add'==i && function n(i) {
						var t=i.P.cellWidth;
						i.Y$!=t && (i.Y$=t, i.render());
						i.Y$=0, i.q$=null, window.requestAnimationFrame && !document.hidden && window.requestAnimationFrame(function(t) {
							!function h(i, t) {
								var e, s=i.P.animateDuration, n=i.P.cellWidth;
								n && 1<i.count() && (i.q$ || (i.q$=t), e=t-i.q$, i.Y$=Math.min(Math.max(e/s*n, 1), n), i.render(), e<s && window.requestAnimationFrame(function(t) {h(i, t);}));
							}(i, t);
						});
						i.G$ || (i.G$=i.attachEvent('onAfterRender', function(t) {
							!function h(t, c) {
								var f=t.count(), e=t.U$(t.me, t.ge), l=t.P.cellWidth, d=t.Y$ || 0, i=c.length<f || (c.length-1)*l>e.end.x-e.start.x;

								function s(t, i, e, s) {
									var n=t.getCanvas(), h=t.Be, r=t.Te, o=t.Fe;
									if(d && (c.length<f || (c.length-1)*l>e-i)?(h.style.left=-d+'px', 1<c.length && (!function u(t, i, e) {
										if(t.length) {
											dt(t[0]);
											for(var s=1; s<t.length; s++) ao(e, t[s]) || (t[s].style.left=t[s].offsetLeft-i+'px');
										}
									}(r, d, o), n.clearRect(0, 0, i+d, h.offsetHeight), n.clearRect(e+d, 0, h.offsetWidth, h.offsetHeight))):(h.style.left='0px', s || d==l || n.clearRect(i+(c.length-1)*l-l+d, 0, h.offsetWidth, h.offsetHeight)), 1<r.length && d && d!=l) {
										var a=r.length-1;
										ao(o, r[a]) && (a-=1), r[a].style.display='none';
									}
								}

								uo(t, function(t, i) {s(i, e.start.x, e.end.x, 'x'==t);}), function n(t, i, e) {t.Oi.ji.style.left=i.start.x-e+'px', t.Oi.ji.style.width=i.end.x-i.start.x+e+'px';}(t, e, i?d:0);
							}(i, t);
						}));
					}(r);
				}), r.X$=r.attachEvent('onBeforeXAxis', function(t, i, e, s, n, h) {
					return function _(t, i, e, s, n, h, r) {
						var o, a, u, c, f=t.P, l=s.x-.5, d=parseInt(r || n.y, 10)+.5, v=n.x;
						if(!f.dynamic) return !1;
						for(u=(e.length-1)*h>v-l || e.length<t.count(), a=0; a<e.length; a++) c=l+a*h, o=u?1<a:!!a, c=Math.ceil(c)-.5, t.J$(c, d, e[a], o), a && f.xAxis.lines.call(t, e[a]) && t.K$(i, c, n.y, s.y, e[a]);
						t.canvases.x.renderTextAt(!0, !1, l, n.y+f.padding.bottom-3, f.xAxis.title, 'webix_axis_title_x', n.x-s.x), t.BC(i, l, d, v+(u?t.Y$:0), d, f.xAxis.color, 1);
					}(r, t, i, e, s, n, h), !1;
				});
			}(this), t;
		}
	};

	function ao(t, i) {return 'axis_x'===t && -1!==i.className.indexOf('webix_axis_title_x');}

	function uo(t, i) {
		if(t.canvases) {
			for(var e=0; e<t.JC.length; e++) t.canvases[e] && i(e, t.canvases[e]);
			t.canvases.x && i('x', t.canvases.x);
		}
	}

	var co={
		name:'chart',
		$init:function(t) {
			if(this.JC=[this.P], this.Z$=[], this.Oi.className+=' webix_chart'
				, this.$ready.push(this.nr), t.preset && this.Q$(t), t.series) {
				var i=t.series;
				delete t.series, t.series=i;
			}
			this.data.provideApi(this, !0);
		},
		nr:function() {this.data.attachEvent('onStoreUpdated', S(function() {this.render.apply(this, arguments);}, this));},
		defaults:{
			ariaLabel:'chart',
			color:'default',
			alpha:'1',
			radius:0,
			label:!1,
			value:'{obj.value}',
			padding:{},
			type:'pie',
			lineColor:'#FFFFFF',
			cant:.5,
			barWidth:30,
			line:{
				width:2,
				color:'#1CA1C1'
			},
			item:{
				radius:3,
				borderColor:'#1CA1C1',
				borderWidth:2,
				color:'#FFFFFF',
				alpha:1,
				type:'r',
				shadow:!1
			},
			shadow:!1,
			gradient:!1,
			border:!1,
			labelOffset:20,
			origin:'auto',
			scale:'linear'
		},
		Ko:'webix_area_id',
		on_click:{
			webix_chart_legend_item:function(t, i, e) {
				var s=e.getAttribute('series_id');
				if(this.callEvent('onLegendClick', [t, s, e]) && void 0!==s && 1<this.JC.length) {
					var n=this.P, h=n.legend.values;
					(h && h[s].toggle || n.legend.toggle) && (-1!=e.className.indexOf('hidden')?this.showSeries(s):this.hideSeries(s));
				}
			}
		},
		on_dblclick:{},
		on_mouse_move:{},
		locate:function(t) {return _t(t, this.Ko);},
		$setSize:function(t, i) {
			var e=Hi.api.$setSize.call(this, t, i);
			if(e) {
				for(var s in this.canvases) this.canvases[s].Re(this.me, this.ge);
				this.render();
			}
			return e;
		},
		type_setter:function(t) {return this['$render_'+t], 'undefined'== typeof this.P.offset && (this.P.offset= !(-1!=t.toLowerCase().indexOf('area'))), 'radar'!=t || this.P.yAxis || this.define('yAxis', {}), 'scatter'==t && (this.P.yAxis || this.define('yAxis', {}), this.P.xAxis || this.define('xAxis', {})), t;},
		destructor:function() {this.removeAllSeries(), ki.destructor.apply(this, arguments);},
		removeAllSeries:function() {this.clearCanvas(), this.tD && (this.tD.innerHTML='', this.tD.parentNode.removeChild(this.tD), this.tD=null), this.canvases && (this.canvases={}), this.Oi.innerHTML='', this.JC=[];},
		clearCanvas:function() {if(this.canvases && 'object'==M(this.canvases)) for(var t in this.canvases) this.canvases[t].clearCanvas();},
		render:function(t, i, e) {
			var s, n, h, r;
			if(this.isVisible(this.P.id) && (n=this.iD(), this.callEvent('onBeforeRender', [n, e]))) {
				if(this.canvases && 'object'==M(this.canvases)) for(var o in this.canvases) this.canvases[o].clearCanvas(); else this.canvases={};
				if(this.P.legend && (this.canvases.legend || (this.canvases.legend=this.b$('legend')), this.eD(this.data.getRange(), this.me, this.ge)), this.fu=h=new Ae(this.Ko), r=this.P, s=this.U$(this.me, this.ge), this.JC) for(var a=0; a<this.JC.length; a++) this.P=this.JC[a], this.canvases[a] || (this.canvases[a]=this.b$(this.name+' '+a, 'z-index:'+(2+a), null, a, this.P.ariaLabel)), this['$render_'+this.P.type](this.canvases[a].getCanvas(), n, s.start, s.end, a, h);
				if(h.render(this.Oi), this.Oi.lastChild.style.zIndex=80, this.sD(this.Oi.lastChild, s), this.callEvent('onAfterRender', [n]), this.P=r, this.P.legend && this.P.legend.values) for(var u=this.P.legend.values, c=0; c<u.length; c++) u[c].$hidden && this.hideSeries(c);
			}
		},
		sD:function(t, i) {
			var e={};
			for(var s in e.left=i.start.x, e.top=i.start.y, e.width=i.end.x-i.start.x, e.height=i.end.y-i.start.y, e) t.style[s]=e[s]+'px';
		},
		iD:function() {
			var t, i, e, s, n, h, r, o, a, u;
			if(s=this.data.getRange(), t=-1!=this.P.type.toLowerCase().indexOf('barh')?'yAxis':'xAxis', (i=this.P[t]) && i.units && 'object'==M(i.units)) {
				if(o=[], 'undefined'!= typeof (e=i.units).start && 'undefined'!= typeof e.end && 'undefined'!= typeof e.next) for(r=e.start; r<=e.end;) o.push(r), r=e.next.call(this, r); else '[object Array]'===Object.prototype.toString.call(e) && (o=e);
				if(h=[], o.length) {
					for(a=i.value, u={}, n=0; n<s.length; n++) u[a(s[n])]=n;
					for(n=0; n<o.length; n++) 'undefined'!= typeof u[o[n]]?(s[u[o[n]]].$unit=o[n], h.push(s[u[o[n]]])):h.push({$unit:o[n]});
				}
				return h;
			}
			return s;
		},
		series_setter:function(t) {
			if(t && 'object'==M(t)) {
				this.Rt(t.length?t[0]:t), this.JC=[this.P];
				for(var i=1; i<t.length; i++) this.addSeries(t[i]);
			} else ;
			return t;
		},
		value_setter:Yt,
		xValue_setter:Yt,
		yValue_setter:function(t) {this.define('value', t);},
		alpha_setter:Yt,
		label_setter:Yt,
		lineColor_setter:Yt,
		borderColor_setter:Yt,
		pieInnerText_setter:Yt,
		gradient_setter:function(t) {return 'function'!= typeof t && t && !0===t && (t='light'), t;},
		colormap:{
			RAINBOW:function(t) {
				var i=Math.floor(this.getIndexById(t.id)/this.count()*1536);
				return 1536==i && (i-=1), this.nD[Math.floor(i/256)](i%256);
			},
			'default':function(t) {
				var i=this.count(), e=this.Wc.length, s=this.getIndexById(t.id);
				return i<e?(s && (s=s<e-i?this.Oc+2:this.Oc+1), this.Oc=s):s%=e, this.Wc[s];
			}
		},
		color_setter:function(t) {return this.colormap[t] || Yt(t);},
		fill_setter:function(t) {return !(!t || '0'==t) && Yt(t);},
		Q$:function(t) {this.define('preset', t.preset), delete t.preset;},
		preset_setter:function(t) {
			var i, e, s;
			if(this.defaults=H.extend({}, this.defaults), 'object'!=M(s=this.presets[t])) return !1;
			for(i in s) if('object'==M(s[i])) if(this.defaults[i] && 'object'==M(this.defaults[i])) for(e in this.defaults[i]=H.extend({}, this.defaults[i]), s[i]) this.defaults[i][e]=s[i][e]; else this.defaults[i]=H.extend({}, s[i]); else this.defaults[i]=s[i];
			return t;
		},
		legend_setter:function(t) {
			return t?('object'!=M(t) && (t={template:t}), this.Ri(t, {
				width:150,
				height:18,
				layout:'y',
				align:'left',
				valign:'bottom',
				template:'',
				toggle:-1!=this.P.type.toLowerCase().indexOf('stacked')?'':'hide',
				marker:{
					type:'square',
					width:15,
					height:15,
					radius:3
				},
				margin:4,
				padding:3
			}), t.template=Yt(t.template), t):(this.tD && (this.tD.innerHTML='', this.tD=null), !1);
		},
		item_setter:function(t) {
			'object'!=M(t) && (t={
				color:t,
				borderColor:t
			}), this.Ri(t, H.extend({}, this.defaults.item));
			return this.hD(['alpha', 'borderColor', 'color', 'radius', 'type'], t), t;
		},
		line_setter:function(t) {return 'object'!=M(t) && (t={color:t}), (t=H.extend(t, this.defaults.line)).color=Yt(t.color), t;},
		padding_setter:function(t) {
			return 'object'!=M(t) && (t={
				left:t,
				right:t,
				top:t,
				bottom:t
			}), this.Ri(t, {
				left:50,
				right:20,
				top:35,
				bottom:40
			}), t;
		},
		xAxis_setter:function(t) {
			if(!t) return !1;
			'object'!=M(t) && (t={template:t}), this.Ri(t, {
				title:'',
				color:'#EDEFF0',
				lineColor:'#EDEFF0',
				template:'{obj}',
				lines:!0
			});
			return this.hD(['lineColor', 'template', 'lines'], t), this.y$=H.extend({}, t), t;
		},
		yAxis_setter:function(t) {
			this.Ri(t, {
				title:'',
				color:'#EDEFF0',
				lineColor:'#EDEFF0',
				template:'{obj}',
				lines:!0,
				bg:Li.backColor
			});
			return this.hD(['lineColor', 'template', 'lines', 'bg'], t), this.V$=H.extend({}, t), t;
		},
		hD:function(t, i) {for(var e=0; e<t.length; e++) i[t[e]]=Yt(i[t[e]]);},
		b$:function(t, i, e, s, n) {
			var h={
				container:e || this.Oi,
				name:t,
				title:R(n)?t:n || '',
				series:s,
				style:i || '',
				width:this.me,
				height:this.ge
			};
			return new ji(h);
		},
		qC:function(t, i, e, s, n, h) {
			var r, o=0;
			return this.P.yAxis && (this.canvases.y || (this.canvases.y=this.b$('axis_y')), o=this.H$(this.canvases.y.getCanvas(), t, i, e, s, n)), this.P.xAxis && (this.canvases.x || (this.canvases.x=this.b$('axis_x')), r=this.canvases.x.getCanvas(), this.callEvent('onBeforeXAxis', [r, t, i, e, h, o]) && this.XC(r, t, i, e, h, o)), o;
		},
		XC:function(t, i, e, s, n, h) {
			var r, o, a=this.P, u=e.x-.5, c=parseInt(h || s.y, 10)+.5, f=s.x, l=!0, d='stackedBar'==a.type?s.y+.5:c;
			for(r=0; r<i.length; r++) {
				!0===a.offset?o=u+n/2+r*n:(o=r!=i.length-1 || a.cellWidth?u+r*n:s.x, l= !!r), o=Math.ceil(o)-.5;
				var v='auto'!=a.origin && 'bar'==a.type && parseFloat(a.value(i[r]))<a.origin;
				this.J$(o, d, i[r], l, v), (a.offset || r || a.cellWidth) && a.xAxis.lines.call(this, i[r]) && this.K$(t, o, s.y, e.y, i[r]);
			}
			this.canvases.x.renderTextAt(!0, !1, u, s.y+a.padding.bottom-3, a.xAxis.title, 'webix_axis_title_x', s.x-e.x), this.BC(t, u, c, f, c, a.xAxis.color, 1), a.xAxis.lines.call(this, {}) && a.offset && this.BC(t, f+.5, s.y, f+.5, e.y+.5, a.xAxis.lineColor.call(this, {}), 1);
		},
		H$:function(t, i, e, s, n, h) {
			var r, o={};
			if(this.P.yAxis) {
				var a=e.x-.5, u=s.y, c=e.y, f=s.y+.5;
				if(this.P.yAxis.step && (r=parseFloat(this.P.yAxis.step)), 'undefined'== typeof this.V$.step || 'undefined'== typeof this.V$.start || 'undefined'== typeof this.V$.end?(n=(o=this.M$(n, h)).start, h=o.end, r=o.step, this.P.yAxis.end=h, this.P.yAxis.start=n):'logarithmic'==this.config.scale && (this.KC= !0), this.x$(e, s), 0!==r) {
					if(h==n) return u;
					for(var l=(u-c)*r/(h-n), d=0, v=n; v<=h; v+=r) {
						var _=this.KC?Math.pow(10, v):v;
						o.fixNum && (_=parseFloat(_).toFixed(o.fixNum));
						var p=Math.floor(u-d*l)+.5;
						if(v==n && 'auto'==this.P.origin || !this.P.yAxis.lines.call(this, v) || this.BC(t, a, p, s.x, p, this.P.yAxis.lineColor.call(this, v), 1), v==this.P.origin && (f=p), r<1 && !this.KC) {
							var m=Math.min(Math.floor(this.ZC(r)), n<=0?0:Math.floor(this.ZC(n))), b=Math.pow(10, -m);
							v=_=Math.round(_*b)/b;
						}
						this.canvases.y.renderText(0, p-5, this.P.yAxis.template(_.toString()), 'webix_axis_item_y', e.x-5), d++;
					}
					return this.BC(t, a, u+1, a, c, this.P.yAxis.color, 1), f;
				}
			}
		},
		x$:function(t, i) {
			var e=this.canvases.y.renderTextAt('middle', !1, 0, parseInt((i.y-t.y)/2+t.y, 10), this.P.yAxis.title, 'webix_axis_title_y');
			e && (e.style.left=(q.transform?(e.offsetHeight-e.offsetWidth)/2:0)+'px');
		},
		rD:function(t, i) {
			return {
				start:Math.floor(this.ZC(t)),
				step:1,
				end:Math.ceil(this.ZC(i))
			};
		},
		oD:function(t) {
			var i=Math.floor(this.ZC(t)), e=Math.pow(10, i), s=t/e;
			return s=5<s?10:5, parseInt(s, 10)*e;
		},
		M$:function(t, i) {
			if(this.KC= !1, 'logarithmic'==this.P.scale) {
				var e=Math.floor(this.ZC(t)), s=Math.ceil(this.ZC(i));
				if(0<t && 0<i && 1<s-e) return this.KC= !0, this.rD(t, i);
			}
			var n, h;
			'auto'!=this.P.origin && this.P.origin<t && (t=this.P.origin);
			var r=this.oD((i-t)/8 || 1), o=Math.floor(this.ZC(r));
			if(r>Math.abs(t)) n=t<0?-r:0; else {
				var a=Math.abs(t), u=Math.floor(this.ZC(a)), c=a/Math.pow(10, u);
				for(n=0!=u || .1<=r?Math.ceil(10*c)/10*Math.pow(10, u)-r:a, 1<a && .1<r && (n=Math.ceil(n)); t<0?n<=t:t<=n;) n-=r;
				t<0 && (n=-n-2*r), n-=n%r, n=parseFloat((1*n).toFixed(Math.abs(o)));
			}
			for(10<i-n && (r=this.oD((i-n)/8 || 1)), h=n, 0==i && i==t && (i=r); h<i;) h+=r, h=parseFloat((1*h).toFixed(Math.abs(o)));
			return {
				start:n,
				end:h,
				step:r,
				fixNum:o<0?Math.abs(o):0
			};
		},
		YC:function(t, i) {
			var e, s, n=this.data.eo(), h=arguments.length && 'h'==t?this.y$:this.V$;
			if(i=i || 'value', h && 'undefined'!= typeof h.end && 'undefined'!= typeof h.start && h.step) e=parseFloat(h.end), s=parseFloat(h.start); else if(e=Ce.max(this.JC[0][i], n), s=h && 'undefined'!= typeof h.start?parseFloat(h.start):Ce.min(this.JC[0][i], n), 1<this.JC.length) for(var r=1; r<this.JC.length; r++) {
				var o=Ce.max(this.JC[r][i], n), a=Ce.min(this.JC[r][i], n);
				e<o && (e=o), a<s && (s=a);
			}
			return {
				max:e,
				min:s
			};
		},
		ZC:function(t) {return Math.log(t)/Math.LN10;},
		J$:function(t, i, e, s, n) {
			if(this.P.xAxis) {
				var h=this.canvases.x.renderTextAt(n, s, t, i-(n?2:0), this.P.xAxis.template(e));
				h && (h.className+=' webix_axis_item_x');
			}
		},
		K$:function(t, i, e, s, n) {this.P.xAxis && this.P.xAxis.lines && this.BC(t, i, e, i, s, this.P.xAxis.lineColor.call(this, n), 1);},
		BC:function(t, i, e, s, n, h, r) {t.strokeStyle=h, t.lineWidth=r, t.beginPath(), t.moveTo(i, e), t.lineTo(s, n), t.stroke(), t.lineWidth=1;},
		GC:function(t, i) {return [i!=t?i-t:t, 1];},
		nD:[function(t) {return '#FF'+Le.toHex(t/2, 2)+'00';}, function(t) {return '#FF'+Le.toHex(t/2+128, 2)+'00';}, function(t) {return '#'+Le.toHex(255-t, 2)+'FF00';}, function(t) {return '#00FF'+Le.toHex(t, 2);}, function(t) {return '#00'+Le.toHex(255-t, 2)+'FF';}, function(t) {return '#'+Le.toHex(t, 2)+'00FF';}],
		Wc:['#F55B50', '#FF6D3F', '#FFA521', '#FFC927', '#FFEE54', '#D3E153', '#9ACB61', '#63B967', '#21A497', '#21C5DA', '#3EA4F5', '#5868BF', '#7B53C0', '#A943BA', '#EC3B77', '#9EB0B8'],
		Oc:0,
		addSeries:function(t) {
			var i=this.P;
			this.P=H.extend({}, i), this.Rt(t), this.JC.push(this.P), this.P=i;
		},
		$tooltipIn:function(t) {return t;},
		Ae:function(t, i) {
			var e=this.locate(i);
			if(!e) return null;
			var s=this.aD(i), n=H.extend({
				dx:20,
				dy:0,
				template:'{obj.value}',
				css:''
			}, this.JC[s].tooltip || {template:''}, !0);
			return ai.Nt.define(n), this.getItem(e);
		},
		aD:function(t) {
			var i, e, s, n, h, r, o, a;
			for(e=this.fu.lu, n=pt(this.Oi.ji), o=(h=bt(t)).x-n.x, a=h.y-n.y, s=0; s<e.length; s++) o<=(i=e[s].points)[2] && o>=i[0] && a<=i[3] && a>=i[1] && (r?e[s].index>r.index && (r=e[s]):r=e[s]);
			return r?r.index:0;
		},
		hideSeries:function(t) {
			this.canvases[t].hideCanvas();
			var i=this.P.legend;
			i && i.values && i.values[t] && (i.values[t].$hidden= !0, this.eD()), this.fu.hide(this.Oi, t, !0);
		},
		showSeries:function(t) {
			this.canvases[t].showCanvas();
			var i=this.P.legend;
			i && i.values && i.values[t] && (delete i.values[t].$hidden, this.eD()), this.fu.hide(this.Oi, t, !1);
		},
		eD:function(t, i) {
			var e, s, n, h, r, o, a, u, c, f, l, d=0, v=0;
			if(t=t || [], i=i || this.me, u=this.canvases.legend.getCanvas(), s=this.P.legend, a='x'!=this.P.legend.layout?'width:'+s.width+'px':'', this.tD && (this.tD.innerHTML='', this.tD.parentNode.removeChild(this.tD)), this.canvases.legend.clearCanvas(!0), n=ft('DIV', {
				'class':'webix_chart_legend',
				style:'left:'+d+'px; top:'+v+'px;'+a
			}, ''), s.padding && (n.style.padding=s.padding+'px'), this.tD=n, this.Oi.appendChild(n), r=[], s.values) for(e=0; e<s.values.length; e++) r.push(this.uD(n, s.values[e].text, 'undefined'!= typeof s.values[e].id?M(s.values[e].id):e, s.values[e].$hidden)); else for(e=0; e<t.length; e++) r.push(this.uD(n, s.template(t[e]), t[e].id));
			for(0===n.offsetWidth && (n.style.width='auto'), o=n.offsetWidth, h=n.offsetHeight, o<i && ('x'==s.layout && 'center'==s.align && (d=(i-o)/2), 'right'==s.align && (d=i-o), s.margin && 'center'!=s.align && (d+=('left'==s.align?1:-1)*s.margin)), h<this.ge && ('middle'==s.valign && 'center'!=s.align && 'x'!=s.layout?v=(this.ge-h)/2:'bottom'==s.valign && (v=this.ge-h), s.margin && 'middle'!=s.valign && (v+=('top'==s.valign?1:-1)*s.margin)), n.style.left=d+'px', n.style.top=v+'px', u.save(), e=0; e<r.length; e++) l=r[e], c=s.values && s.values[e].$hidden?(f= !0, s.values[e].disableColor?s.values[e].disableColor:'#EDEFF0'):(f= !1, s.values?s.values[e].color:this.P.color.call(this, t[e])), this.cD(u, l.offsetLeft+d, l.offsetTop+v, c, l.offsetHeight, f, e);
			u.restore(), r=null;
		},
		uD:function(t, i, e, s) {
			var n='';
			'x'==this.P.legend.layout && (n='float:left;');
			var h=ft('DIV', {
				style:n+'padding-left:'+(10+this.P.legend.marker.width)+'px',
				'class':'webix_chart_legend_item'+(s?' hidden':''),
				role:'button',
				tabindex:'0',
				'aria-label':I.aria[(s?'show':'hide')+'Chart']+' '+i
			}, i);
			return 2<arguments.length && h.setAttribute('series_id', e), t.appendChild(h), h;
		},
		cD:function(t, i, e, s, n, h, r) {
			var o=[], a=this.P.legend.marker, u=this.P.legend.values, c=u && u[r].markerType?u[r].markerType:a.type;
			if(s && (t.strokeStyle=t.fillStyle=s), 'round'!=c && a.radius) if('item'==c) {
				if(this.P.line && 'scatter'!=this.P.type && !this.P.disableLines) {
					t.beginPath(), t.lineWidth=this.JC[r].line.width, t.strokeStyle=h?s:this.JC[r].line.color.call(this, {});
					var f=i+5, l=e+n/2;
					t.moveTo(f, l);
					var d=f+a.width;
					t.lineTo(d, l), t.stroke();
				}
				var v=this.JC[r].item, _=parseInt(v.radius.call(this, {}), 10) || 0, p=v.type.call(this, {});
				_ && (t.beginPath(), h?(t.lineWidth=v.borderWidth, t.strokeStyle=s, t.fillStyle=s):(t.lineWidth=v.borderWidth, t.fillStyle=v.color.call(this, {}), t.strokeStyle=v.borderColor.call(this, {}), t.globalAlpha=v.alpha.call(this, {})), t.beginPath(), i+=a.width/2+5, e+=n/2, this.c$(t, i, e, _+1, p), t.fill(), t.stroke()), t.globalAlpha=1;
			} else t.beginPath(), t.lineWidth=1, i+=5, e+=n/2-a.height/2, o=[[i+a.radius, e+a.radius, a.radius, Math.PI, 3*Math.PI/2, !1], [i+a.width-a.radius, e], [i+a.width-a.radius, e+a.radius, a.radius, -Math.PI/2, 0, !1], [i+a.width, e+a.height-a.radius], [i+a.width-a.radius, e+a.height-a.radius, a.radius, 0, Math.PI/2, !1], [i+a.radius, e+a.height], [i+a.radius, e+a.height-a.radius, a.radius, Math.PI/2, Math.PI, !1], [i, e+a.radius]], this.f$(t, o), t.stroke(), t.fill(); else {
				t.beginPath(), t.lineWidth=a.height, t.lineCap=a.type, i+=t.lineWidth/2+5, e+=n/2, t.moveTo(i, e);
				var m=i+a.width-a.height+1;
				t.lineTo(m, e), t.stroke(), t.fill();
			}
		},
		U$:function(t, i) {
			var e, s, n, h;
			if(e=this.P.padding.left, s=this.P.padding.top, n=t-this.P.padding.right, h=i-this.P.padding.bottom, this.P.legend) {
				var r=this.P.legend, o=this.P.legend.width, a=this.P.legend.height;
				'x'==r.layout?'center'==r.valign?'right'==r.align?n-=o:'left'==r.align && (e+=o):'bottom'==r.valign?h-=a:s+=a:'right'==r.align?n-=o:'left'==r.align && (e+=o);
			}
			return {
				start:{
					x:e,
					y:s
				},
				end:{
					x:n,
					y:h
				}
			};
		},
		l$:function(t) {
			var i, e, s, n, h;
			if(this.P.yAxis && 'undefined'!= typeof this.P.yAxis.end && 'undefined'!= typeof this.P.yAxis.start && this.P.yAxis.step) s=parseFloat(this.P.yAxis.end), n=parseFloat(this.P.yAxis.start); else {
				for(i=0; i<t.length; i++) for(t[i].$sum=0, t[i].$min=Infinity, e=0; e<this.JC.length; e++) h=Math.abs(parseFloat(this.JC[e].value(t[i]) || 0)), isNaN(h) || (-1!=this.JC[e].type.toLowerCase().indexOf('stacked') && (t[i].$sum+=h), h<t[i].$min && (t[i].$min=h));
				for(s= -Infinity, n=Infinity, i=0; i<t.length; i++) t[i].$sum>s && (s=t[i].$sum), t[i].$min<n && (n=t[i].$min);
				0<n && (n=0);
			}
			return {
				max:s,
				min:n
			};
		},
		n$:function(t, i, e, s, n, h, r, o) {
			var a, u, c, f, l, d;
			return 'light'==h?(a='x'==o?t.createLinearGradient(i, e, s, e):t.createLinearGradient(i, e, i, n), d=[[0, '#FFFFFF'], [.9, r], [1, r]], u=2):'falling'==h || 'rising'==h?(a='x'==o?t.createLinearGradient(i, e, s, e):t.createLinearGradient(i, e, i, n), c=Le.toRgb(r), (f=Le.rgbToHsv(c[0], c[1], c[2]))[1]*=.5, l='rgb('+Le.hsvToRgb(f[0], f[1], f[2])+')', 'falling'==h?d=[[0, l], [.7, r], [1, r]]:'rising'==h && (d=[[0, r], [.3, r], [1, l]]), u=0):(t.globalAlpha=.37, u=0, a='x'==o?t.createLinearGradient(i, n, i, e):t.createLinearGradient(i, e, s, e), d=[[0, '#9D9D9D'], [.3, '#E8E8E8'], [.45, '#FFFFFF'], [.55, '#FFFFFF'], [.7, '#E8E8E8'], [1, '#9D9D9D']]), this.fD(a, d), {
				gradient:a,
				offset:u
			};
		},
		OC:function(t, i, e, s) {
			return t*= -1, {
				x:i+=Math.cos(t)*s,
				y:e-=Math.sin(t)*s
			};
		},
		fD:function(t, i) {for(var e=0; e<i.length; e++) t.addColorStop(i[e][0], i[e][1]);},
		f$:function(t, i) {
			var e, s;
			for(e=0; e<i.length; e++) s=e?'lineTo':'moveTo', 2<i[e].length && (s='arc'), t[s].apply(t, i[e]);
		},
		lD:function(t, i, e, s, n) {t.addRect(i, [e[0].x-s.x, e[0].y-s.y, e[1].x-s.x, e[1].y-s.y], n);}
	}, fo={
		api:co,
		view:H.protoUI(co, Kr, Zr, Qr, to, io, eo, {
			$render_spline:function(t, i, e, s, n, h) {
				var r, o, a, u, c, f, l, d, v, _, p, m, b;
				if(c=this.h$(t, i, e, s, n), r=this.P, this.a$=e, a=[], i.length) {
					for(d=r.offset?e.x+.5*c.cellWidth:e.x, o=0; o<i.length; o++) ((p=this.r$(i[o], e, s, c)) || '0'==p) && (l=o?c.cellWidth*o-.5+d:d, a.push({
						x:l,
						y:p,
						v:this.P.value(i[o]),
						index:o
					}));
					for(f=this.L$(a), o=0; o<a.length; o++) {
						if(v=a[o].x, m=a[o].y, o<a.length-1) {
							for(_=a[o+1].x, b=a[o+1].y, u=v; u<_; u++) {
								var g=this.O$(u, v, o, f.a, f.b, f.c, f.d);
								g<e.y && (g=e.y), g>s.y && (g=s.y);
								var w=this.O$(u+1, v, o, f.a, f.b, f.c, f.d);
								w<e.y && (w=e.y), w>s.y && (w=s.y), this.BC(t, u, g, u+1, w, r.line.color(i[o]), r.line.width);
							}
							this.BC(t, _-1, this.O$(u, v, o, f.a, f.b, f.c, f.d), _, b, r.line.color(i[o]), r.line.width);
						}
						this.u$(t, v, m, i[a[o].index], r.label(i[a[o].index]), n, h);
					}
				}
			},
			L$:function(t) {
				var i, e, s, n, h, r, o, a, u=[], c=[], f=t.length;
				for(h=0; h<f-1; h++) u[h]=t[h+1].x-t[h].x, c[h]=(t[h+1].y-t[h].y)/u[h];
				for(a=[], (o=[])[0]=0, o[1]=2*(u[0]+u[1]), a[0]=0, a[1]=6*(c[1]-c[0]), h=2; h<f-1; h++) o[h]=2*(u[h-1]+u[h])-u[h-1]*u[h-1]/o[h-1], a[h]=6*(c[h]-c[h-1])-u[h-1]*a[h-1]/o[h-1];
				for((r=[])[f-1]=r[0]=0, h=f-2; 1<=h; h--) r[h]=(a[h]-u[h]*r[h+1])/o[h];
				for(i=[], e=[], s=[], n=[], h=0; h<f-1; h++) i[h]=t[h].y, e[h]=-u[h]*r[h+1]/6-u[h]*r[h]/3+(t[h+1].y-t[h].y)/u[h], s[h]=r[h]/2, n[h]=(r[h+1]-r[h])/(6*u[h]);
				for(h=0; h<t.length-1; h++) 0===t[h].v && 0===t[h+1].v && (i[h]=t[h].y, n[h]=s[h]=e[h]=0);
				return {
					a:i,
					b:e,
					c:s,
					d:n
				};
			},
			O$:function(t, i, e, s, n, h, r) {return s[e]+(t-i)*(n[e]+(t-i)*(h[e]+(t-i)*r[e]));}
		}, so, no, ho, {
			presets:{
				simple:{
					item:{
						borderColor:'#FFFFFF',
						color:'#2B7100',
						shadow:!1,
						borderWidth:2
					},
					line:{
						color:'#8ECF03',
						width:2
					}
				},
				plot:{
					color:'#8664C6',
					item:{
						borderColor:'#8664C6',
						borderWidth:1,
						color:'#FFFFFF',
						type:'r',
						shadow:!1
					},
					line:{
						color:'#8664C6',
						width:2
					}
				},
				diamond:{
					color:'#FF5C4C',
					item:{
						borderColor:'#FF5C4C',
						color:'#FF5C4C',
						type:'d',
						radius:3,
						shadow:!0
					},
					line:{
						color:'#FF5C4C',
						width:2
					}
				},
				point:{
					color:'#1CA1C1',
					disableLines:!0,
					fill:!1,
					disableItems:!1,
					item:{
						color:'#1CA1C1',
						borderColor:'#1CA1C1',
						radius:2,
						borderWidth:2,
						type:'r'
					},
					alpha:1
				},
				line:{
					line:{
						color:'#1CA1C1',
						width:2
					},
					item:{
						color:'#FFFFFF',
						borderColor:'#1CA1C1',
						radius:2,
						borderWidth:2,
						type:'d'
					},
					fill:!1,
					disableItems:!1,
					disableLines:!1,
					alpha:1
				},
				area:{
					fill:'#1CA1C1',
					line:{
						color:'#1CA1C1',
						width:1
					},
					disableItems:!0,
					alpha:.2,
					disableLines:!1
				},
				round:{
					item:{
						radius:3,
						borderColor:'#1CA1C1',
						borderWidth:1,
						color:'#1CA1C1',
						type:'r',
						shadow:!1,
						alpha:.6
					}
				},
				square:{
					item:{
						radius:3,
						borderColor:'#00A497',
						borderWidth:2,
						color:'#FFFFFF',
						type:'s',
						shadow:!1,
						alpha:1
					},
					line:{color:'#00A497'}
				},
				column:{
					color:'RAINBOW',
					gradient:!1,
					barWidth:45,
					radius:0,
					alpha:1,
					border:!0
				},
				stick:{
					barWidth:5,
					gradient:!1,
					color:'#1CA1C1',
					radius:2,
					alpha:1,
					border:!1
				},
				alpha:{
					color:'#B9A8F9',
					barWidth:70,
					gradient:'falling',
					radius:0,
					alpha:.5,
					border:!0
				}
			}
		}, ro, oo, De, Pi, _e, ze, g, Hi.view)
	}, lo={
		name:'rangechart',
		$init:function() {this.attachEvent('onAfterRender', this.dD), this.vD();},
		dD:function() {
			if(-1===this.P.type.indexOf('pie') && 'radar'!==this.P.type && this.P.type, this.fu.lu.length && !this._D) {
				this.pD(), this.mD=(this.fu.lu[0].points[2]-this.fu.lu[0].points[0])/2;
				var t={
					webix_disable_drag:'true',
					tabindex:'0',
					role:'button',
					'aria-label':I.aria.resizeChart
				};
				this.bD=ft('div', H.extend({'class':'webix_chart_resizer right'}, t)), this.gD=ft('div', H.extend({'class':'webix_chart_resizer left'}, t)), this._D=ft('div', {
					'class':'webix_chart_frame',
					webix_disable_drag:'true'
				}), this.Vt.appendChild(this.gD), this.Vt.appendChild(this._D), this.Vt.appendChild(this.bD), this.wD(), Kt(this.bD, q.mouse.down, this.xD, {bind:this}), Kt(this.gD, q.mouse.down, this.xD, {bind:this}), Kt(this._D, q.mouse.down, this.xD, {bind:this}), Kt(C(this.bD), 'keydown', this.yD, {bind:this}), Kt(C(this.gD), 'keydown', this.yD, {bind:this}), this.Nk && (this.P.range=this.vD(this.Nk)), this.MD(), this.callEvent('onAfterRangeChange', [this.Nk]), this.data.attachEvent('onStoreUpdated', S(this.MD, this));
			} else this.wD(!0);
		},
		$setSize:function(t, i) {fo.api.$setSize.call(this, t, i) && (this.pD(), this.MD());},
		wD:function(t) {this.bD && !this.SD && (this.SD=this.bD.clientWidth/2, t && this.MD());},
		pD:function() {
			var t=this.U$(this.me, this.ge);
			this.a$=t.start, this.kD=t.end;
		},
		removeAllSeries:function() {this._D=this.bD=this.gD=null, fo.api.removeAllSeries.apply(this, arguments);},
		yD:function(t) {
			var i=t.which || t.keyCode;
			if(37===i || 39===i) {
				gt(t);
				var e=-1!==t.target.className.indexOf('right')?'eindex':'sindex', s=-1!==t.target.className.indexOf('right')?'end':'start', n=this.Nk;
				n[e]=n[e]+(37===i?-1:1), this.fu.lu[n[e]] && (n[s]=this.CD(n[e]), this.setFrameRange(n));
			}
		},
		xD:function(t) {
			if(-1!==t.target.className.indexOf('webix_chart_resizer')) this.$D=t.target; else if(this.fu.lu.length) {
				var i=this.fu.lu[this.Nk.sindex].points[2]-this.mD, e=this.fu.lu[this.Nk.eindex].points[2]-this.mD;
				this.DD={
					ex:bt(t).x,
					fx:i+this.a$.x,
					fw:e-i
				};
			}
			yt(this.Vt, 'webix_noselect webix_wresize_cursor'), this.ID(), this.AD=Zt(document.body, q.mouse.move, this.TD, {bind:this}), this.FD=Zt(document.body, q.mouse.up, this.VD, {bind:this});
		},
		ID:function() {this.AD && (Qt(this.AD), Qt(this.FD), this.FD=this.AD=null);},
		TD:function(t) {
			if(this.$D) {
				var i=bt(t).x-pt(this.$view).x;
				i>=this.a$.x && i<=this.kD.x && (-1!==this.$D.className.indexOf('left')?i<this.bD.offsetLeft && (this.$D.style.left=i-this.SD+'px', this._D.style.left=i+'px', this._D.style.width=this.bD.offsetLeft-this.gD.offsetLeft-1+'px'):i>this.gD.offsetLeft+this.SD && (this.$D.style.left=i-this.SD+'px', this._D.style.width=this.bD.offsetLeft-this.gD.offsetLeft-1+'px'));
			} else if(this.DD) {
				var e=bt(t).x-this.DD.ex, s=this.DD.fx+e, n=s+this.DD.fw;
				this.a$.x<=s && this.kD.x>=n && (H.extend(this.DD, {
					lx:s,
					rx:n
				}, !0), this.gD.style.left=s-this.SD+'px', this.bD.style.left=n-this.SD+'px', this._D.style.left=s+'px');
			}
		},
		VD:function(t) {
			if(this.ID(), Mt(this.Vt, 'webix_noselect'), Mt(this.Vt, 'webix_wresize_cursor'), this.count()) {
				if(this.$D) {
					var i=q.touch?t.changedTouches[0].pageX:bt(t).x;
					i-=pt(this.$view).x+this.a$.x;
					var e=this.zD(i), s=this.CD(e);
					this.$D===this.gD?(e>=this.Nk.eindex && (e=this.Nk.eindex, s=this.CD(e)), this.Nk.start=s, this.Nk.sindex=e):(e<=this.Nk.sindex && (e=this.Nk.sindex, s=this.CD(e)), this.Nk.end=s, this.Nk.eindex=e), this.$D=null;
				} else if(this.DD && this.DD.lx) {
					var n=this.Nk.sindex=this.zD(this.DD.lx-this.a$.x), h=this.Nk.eindex=this.zD(this.DD.rx-this.a$.x);
					this.Nk.start=this.CD(n), this.Nk.end=this.CD(h), this.DD=null;
				}
				this.MD(), this.callEvent('onAfterRangeChange', [this.Nk.start, this.Nk.end]);
			}
		},
		CD:function(t) {return t>=this.data.order.length && (t=this.data.order.length-1), this.getItem(this.data.order[t])[this.P.frameId || 'id'];},
		zD:function(t) {
			for(var i=this.fu.lu, e=0; e<i.length; e++) if(t<=i[e].points[2]-this.mD) return e;
			return i.length-1;
		},
		BD:function(t) {
			for(var i=this.P.frameId || 'id', e=0; e<this.data.order.length; e++) if(this.getItem(this.data.order[e])[i]==t) return e;
			return -1;
		},
		vD:function(t) {
			t?(t.start && (t.sindex=this.BD(t.start)), t.end && (t.eindex=this.BD(t.end)), t.start=t.start || this.CD(t.sindex), t.end=t.end || this.CD(t.eindex)):t={
				start:0,
				end:0,
				sindex:0,
				eindex:0
			}, this.Nk=t;
		},
		range_setter:function(t) {return this.vD(t), this.Nk;},
		getFrameData:function() {
			for(var t=[], i=this.Nk.sindex; i<=this.Nk.eindex; i++) {
				var e=this.getItem(this.data.order[i]);
				e && t.push(e);
			}
			return t;
		},
		setFrameRange:function(t) {this.vD(t), this.MD(), this.callEvent('onAfterRangeChange', [t]);},
		MD:function() {
			if(this.fu) {
				var t=this.fu.lu;
				if(t.length) {
					var i=t[this.Nk.sindex].points[0]+this.a$.x+this.mD-1, e=t[this.Nk.eindex].points[0]+this.a$.x+this.mD-1;
					this.gD.style.left=i-this.SD+'px', this.bD.style.left=e-this.SD+'px', this._D.style.left=i+'px', this._D.style.width=e-i+'px', this.P.range=this.Nk;
				}
			}
		},
		getFrameRange:function() {return this.P.range;}
	}, vo=(H.protoUI(lo, fo.view), {
		name:'grouplist',
		defaults:{animate:{}},
		Gm:'webix_grouplist',
		$init:function() {
			H.extend(this.data, ls, !0), this.data.count=function() {return this.order.length;}, this.data.provideApi(this, !0), this.data.attachEvent('onClearAll', S(this.HD, this)), this.HD();
		},
		HD:function() {this.RD=[], this.ED=[];},
		$setSize:function() {Hi.api.$setSize.apply(this, arguments) && (this.tt.style.width=this.me);},
		on_click:{
			webix_list_item:function(t, i) {
				if(this.qv) return !1;
				for(var e=0; e<this.ED.length; e++) if(this.ED[e]==i) {
					for(var s=e; s<this.ED.length; s++) this.data.getItem(this.ED[s]).$template='';
					return e?(this.RD=this.data.branch[this.ED[e-1]], this.ED.splice(e)):(this.RD=this.data.branch[0], this.ED=[]), this.PD= !1, this.render();
				}
				var n=this.getItem(i);
				if(n.$count) return this.PD= !0, this.ED.push(i), n.$template='Back', this.RD=this.data.branch[n.id], this.render();
				this.P.select && (this.Jm= !0, 'multiselect'==this.P.select || this.P.multiselect?this.select(i, !1, 'touch'==this.P.multiselect || t.ctrlKey || t.metaKey, t.shiftKey):this.select(i), this.Jm= !1);
			}
		},
		getOpenState:function() {
			return {
				parents:this.ED,
				branch:this.RD
			};
		},
		render:function(t, i, e) {
			var s, n, h=this, r=arguments;
			if(this.ED=_(this.ED), this.RD=_(this.RD), this.ED.length) for(s=0; s<this.ED.length; s++) this.data.branch[this.ED[s]] || (this.ED.splice(s, 1), s--);
			if(n=this.ED.length?this.ED[this.ED.length-1]:0, this.RD=_(this.data.branch[n]), !this.RD.length && this.ED.length && (this.RD=[n], this.ED.pop()), this.qv) return this.qv.then(function() {return h.render.apply(h, r);});
			for(s=0; s<this.RD.length; s++) this.data.getItem(this.RD[s]).$template='';
			if(this.RD.length || (this.RD=this.data.branch[0]), this.data.order=b([].concat(this.ED).concat(this.RD)), this.callEvent('onBeforeRender', [this.data])) {
				if(!this.Jm && this.tt.innerHTML && Ni.isSupported() && this.P.animate && this.jD!=this.ED.length) {
					if(this.callEvent('onBeforeRender', [this.data])) {
						this.ND || (this.ND=[]);
						var o=this.tt.cloneNode(!1);
						o.innerHTML=this.data.getRange().map(this.Q, this).join('');
						var a=H.extend({}, this.P.animate);
						a.direction=this.PD?'left':'right';
						var u, c=[l(a), l(a)];
						this.PD?this.ND.push(this.getScrollState()):u=this.ND.pop();
						var f=Ni.formLine(o, this.tt, a);
						a.master=this, a.callback=function() {this.tt=o, this.PD?this.scrollTo(0, 0):u && this.scrollTo(0, u.y), Ni.breakLine(f), a.master=a.callback=null, this.ji=this.qv=null, a.wait_animation.resolve(), this.callEvent('onAfterRender', []);}, Ni(f, c), this.qv=a.wait_animation=m.defer();
					}
				} else {
					if(t && 'delete'!==e && -1===this.data.getIndexById(t)) return;
					Pe.render.apply(this, arguments);
				}
				this.jD=this.ED.length;
			}
		},
		templateBack_setter:function(t) {this.type.templateBack=Yt(t);},
		templateItem_setter:function(t) {this.type.templateItem=Yt(t);},
		templateGroup_setter:function(t) {this.type.templateGroup=Yt(t);},
		type:{
			template:function(t, i) {return t.$count?i.templateGroup(t, i):i.templateItem(t, i);},
			css:'group',
			classname:function(t, i, e) {return 'webix_list_item webix_'+(t.$count?'group':'item')+(t.$template?'_back':'')+(e && e.webix_selected?' webix_selected':'')+(i.css?' '+i.css:'')+(t.$css?' '+t.$css:'');},
			templateStart:Yt('<div webix_l_id="#id#" class="{common.classname()}" style="width:{common.widthSize()}; height:{common.heightSize()};  overflow:hidden;" {common.aria()}>'),
			templateBack:Yt('#value#'),
			templateItem:Yt('#value#'),
			templateGroup:Yt('#value#'),
			templateEnd:function(t) {
				var i='';
				return t.$count && (i+='<div class=\'webix_arrow_icon\'></div>'), i+='</div>';
			}
		},
		showItem:function(t) {
			var i, e;
			for(t && (e=(i=this.getItem(t)).$parent, i.$count && (e=i.id)), this.RD=this.data.branch[e || 0], this.ED=[]; e;) this.getItem(e).$template='Back', this.ED.unshift(e), e=this.getItem(e).$parent;
			this.Jm= !0, this.render(), this.Jm= !1, Pe.showItem.call(this, t);
		}
	});
	ti(H.protoUI(vo, De, Gh.view), {});
	var _o={
		name:'unitlist',
		Ko:'webix_item_id',
		uniteBy_setter:Yt,
		render:function(t, i, e) {
			var s=this.P;
			if(this.isVisible(s.id) && s.uniteBy) {
				if(t) {
					var n=this.getItemNode(t);
					if(n && 'update'==e && this.P.uniteBy.call(this, i)==this.getItem(t).$unitValue) return vt(this.ji[t]=this.mc(i), n), void dt(n);
				}
				this.callEvent('onBeforeRender', [this.data]) && (this.units=null, this.LD(), this.units && (this.callEvent('onUnits', []), this.tt.innerHTML=this.OD().map(this.Q, this).join(''), this.ji=null), this.callEvent('onAfterRender', []));
			}
		},
		getUnits:function() {
			var t=[];
			if(this.units) for(var i in this.units) t.push(i);
			return t;
		},
		getUnitList:function(t) {
			return this.units?this.units[t]:null;
		},
		Q:function(t) {
			var i=this.data.kr[t.id];
			return !t.$template || this.type['template'+t.$template], t.$template, this.callEvent('onItemRender', [t]), t.$unit?this.type.templateStartHeader(t, this.type)+this.type.templateHeader.call(this, t.$unit)+this.type.templateEnd(t, this.type):this.type.templateStart(t, this.type, i)+(t.$template?this.type['template'+t.$template]:this.type.template)(t, this.type)+this.type.templateEnd(t, this.type);
		},
		OD:function() {
			var t=[], i=this.data.$min || 0, e=this.data.$max || Infinity, s=0;
			for(var n in this.units) {
				t.push({$unit:n});
				for(var h=this.units[n], r=0; r<h.length; r++) {
					if(s==i && (t=[{$unit:n}]), t.push(this.getItem(h[r])), s==e) return b(t);
					s++;
				}
			}
			return b(t);
		},
		LD:function() {
			var e=this;
			this.units={}, this.data.each(function(t) {
				var i=e.P.uniteBy.call(this, t);
				t.$unitValue=i, e.units[i] || (e.units[i]=[]), e.units[i].push(t.id);
			});
		},
		type:{
			headerHeight:20,
			templateHeader:function(t) {return '<span class=\'webix_unit_header_inner\'>'+t+'</span>';},
			templateStart:function(t, i, e) {
				if(t.$unit) return i.templateStartHeader.apply(this, arguments);
				var s='webix_list_item webix_list_'+i.css+'_item'+(e && e.webix_selected?' webix_selected':'')+(t.$css?t.$css:''), n='width:'+i.widthSize(t, i, e)+'; height:'+i.heightSize(t, i, e)+'; overflow:hidden;'+(i.layout && 'x'==i.layout?'float:left;':'');
				return '<div webix_item_id="'+t.id+'" class="'+s+'" style="'+n+'" '+i.aria(t, i, e)+'>';
			},
			templateStartHeader:function(t, i, e) {
				var s='webix_unit_header webix_unit_'+i.css+'_header'+(t.$selected?'_selected':''), n='width:'+i.widthSize(t, i, e)+'; height:'+i.headerHeight+'px; overflow:hidden;';
				return '<div webix_unit_id="'+t.$unit+'" class="'+s+'" style="'+n+'">';
			}
		},
		$skin:function() {Gh.api.$skin.call(this), this.type.headerHeight=Li.unitHeaderHeight;}
	};
	H.protoUI(_o, Gh.view);
	I.dbllist={
		selectAll:'<span class=\'webix_icon wxi-angle-double-right\'></span>',
		selectOne:'<span class=\'webix_icon wxi-angle-right\'></span>',
		deselectAll:'<span class=\'webix_icon wxi-angle-double-left\'></span>',
		deselectOne:'<span class=\'webix_icon wxi-angle-left\'></span>'
	};
	var po={
		name:'dbllist',
		defaults:{borderless:!0},
		$init:function() {this.WD={}, this.UD=S(function(t) {return this.WD[t.id];}, this), this.YD=S(function(t) {return !this.WD[t.id];}, this), this.$view.className+=' webix_dbllist', this.$ready.unshift(this.tg);},
		$onLoad:function(t, i) {
			var e=this.$$('left'), s=this.$$('right');
			return this.qD(function() {e.data.driver=i, e.parse(t), s.data.driver=i, s.parse(t);}), this.GD= !0, this.jk(), !0;
		},
		XD:function() {
			if(!1===this.P.buttons) return {width:10};
			var t=I.dbllist, i=[this.JD('deselect_all', t.deselectAll), this.JD('select_all', t.selectAll), this.JD('deselect_one', t.deselectOne), this.JD('select_one', t.selectOne)];
			return i={
				width:120,
				template:i.join(''),
				onClick:{dbllist_button:function(t, i, e) {this.getTopParentView().KD(e.getAttribute('action'));}}
			}, this.P.buttons && (i.template=this.P.buttons), i;
		},
		JD:function(t, i) {return '<button class=\'dbllist_button\' action=\''+t+'\'>'+i+'</button>';},
		ZD:function(t, i, e, s) {
			var n={
				view:'list',
				select:'multiselect',
				multiselect:'touch',
				id:t,
				action:i,
				drag:!0,
				type:{
					margin:3,
					id:t
				},
				on:{
					onBeforeDrop:function(t) {
						var i=t.from, e=t.to, s=i.getTopParentView();
						if(s===this.getTopParentView()) {
							var n='select_one'!=e.P.action;
							s.select(t.source, n);
						}
						return !1;
					},
					onItemDblClick:function() {return this.getTopParentView().KD(this.config.action);}
				}
			};
			return this.P.list && H.extend(n, this.P.list, !0), e && (n={
				rows:[{
					view:'label',
					label:e,
					css:'webix_inp_top_label'
				}, n]
			}), s?{
				rows:[n, {
					view:'label',
					height:20,
					label:s,
					css:'bottom_label'
				}]
			}:n;
		},
		tg:function() {
			var t=[{
				margin:10,
				type:'clean',
				cols:[this.ZD('left', 'select_one', this.P.labelLeft, this.P.labelBottomLeft), this.XD(), this.ZD('right', 'deselect_one', this.P.labelRight, this.P.labelBottomRight)]
			}];
			this.cols_setter(t);
		},
		KD:function(t) {
			var i=null, e=!1;
			'select_all'===t?(i=this.$$('left').data.order, e= !0):'select_one'===t?(i=this.$$('left').getSelectedId(!0), e= !0):'deselect_all'===t?(i=this.$$('right').data.order, e= !1):'deselect_one'===t && (i=this.$$('right').getSelectedId(!0), e= !1), this.select(i, e);
		},
		select:function(t, i) {
			var e;
			if('object'!==M(t) && (t=[t]), i) for(e=0; e<t.length; e++) this.WD[t[e]]= !0; else for(e=0; e<t.length; e++) delete this.WD[t[e]];
			this.jk(), this.callEvent('onChange', []);
		},
		qD:function(t, i) {li(S(t, this), !1), i && (this.$$('left').P.autoheight || this.$$('right').P.autoheight) && this.resize();},
		jk:function() {
			var t=this.$$('left'), i=this.$$('right');
			t && this.qD(function() {t.filter(this.YD), i.filter(this.UD);}, !0);
		},
		focus:function() {
			if(!Mi.canFocus(this)) return !1;
			Mi.setFocus(this);
		},
		value_setter:function(t) {this.setValue(t);},
		setValue:function(t) {
			if(this.WD={}, t) {
				'object'!==M(t) && (t=t.toString().split(','));
				for(var i=0; i<t.length; i++) this.WD[t[i]]= !0;
			}
			this.jk();
		},
		getValue:function() {
			var t=[], i=this.$$('left');
			for(var e in this.WD) this.GD && !i.data.pull[e] || t.push(e);
			return t.join(',');
		}
	}, mo=(H.protoUI(po, Ht, Te, kn.view), {
		name:'tree',
		defaults:{
			scroll:'auto',
			navigation:!0
		},
		$init:function() {this.Vt.className+=' webix_tree', H.extend(this.data, ls, !0), H.extend(this.on_click, os), this.data.provideApi(this, !0), this.Vt.setAttribute('role', 'tree');},
		Ko:'webix_tm_id',
		on_context:{},
		on_dblclick:{webix_tree_checkbox:function() {if(this.on_click.webix_tree_checkbox) return this.on_click.webix_tree_checkbox.apply(this, arguments);}},
		$fixEditor:function(t) {
			var i=this.getItemNode(t.id).querySelector('span');
			if(i) {
				''===i.innerHTML && (i.innerHTML='&nbsp;');
				var e=i.offsetLeft;
				t.node.style.width=this.$view.scrollWidth-e-10+'px', t.node.style.marginLeft=e+'px', t.node.style.left='0px';
			}
		},
		on_click:{
			webix_tree_item:function(t, i) {
				this.P.activeTitle && (this.getItem(i).open?this.close(i):this.open(i));
				if(this.P.select) if('multiselect'==this.P.select || this.P.multiselect) {
					var e=t.ctrlKey || t.metaKey || 'touch'==this.P.multiselect;
					if('level'==this.P.multiselect && (e || t.shiftKey)) {
						var s=this.getSelectedId(!0)[0];
						if(s && this.getParentId(i)!=this.getParentId(s)) return;
					}
					this.select(i, !1, e, t.shiftKey);
				} else this.select(i);
			}
		},
		Kn:{
			insert:function(t) {
				var i=this.getSelectedId() || '0';
				this.add({value:t}, null, i);
			},
			modify:function(t) {for(var i=this.getSelectedId(!0), e=0; e<i.length; e++) this.getItem(i[e]).value=t, this.refresh(i[e]);},
			custom:function() {}
		},
		Yo:!0,
		$dragHTML:function(t, i, e) {
			var s='<div class=\'webix_tree_item\'>'+this.type.template(t, this.type)+'</div>';
			return $(e.source) && 1<e.source.length && (s=this.Po(s, e.source.length)), s;
		},
		Wo:function(t) {for(var i=t.source, e=0; e<i.length; e++) this.close(i[e]);},
		Oo:function(t, i) {
			var e=this.getItemNode(t);
			e?e.parentNode.insertBefore(Xi.ln[0], e):i.children[0].children[0].appendChild(Xi.ln[0]);
		},
		type:H.extend({
			template:function(t, i) {return (i['template'+t.level] || i.templateCommon).apply(this, arguments);},
			classname:function(t, i, e) {
				var s='webix_tree_item';
				return t.$css && ('object'==M(t.$css) && (t.$css=at(t.$css)), s+=' '+t.$css), e && e.$css && (s+=' '+e.$css), i.css && (s+=' '+i.css), s;
			},
			aria:function(t, i, e) {return 'role="treeitem"'+(e && e.webix_selected?' aria-selected="true" tabindex="0"':' tabindex="-1"')+(t.$count?'aria-expanded="'+(t.open?'true':'false')+'"':'')+'aria-level="'+t.$level+'"';},
			templateCommon:Yt('{common.icon()} {common.folder()} <span>#value#</span>'),
			templateStart:Yt('<div webix_tm_id="#id#" class="{common.classname()}" {common.aria()}>'),
			templateEnd:Yt('</div>'),
			templateCopy:Yt('#value#')
		}, vs)
	}), bo=H.protoUI(mo, fs, De, rs, me, us, Ne, Fe, ze, je, as, Yh.view, cs, ne, g), go={
		api:mo,
		view:bo
	};
	ti(bo, {
		name:'lineTree',
		css:'webixLineTree',
		icon:function(t, i) {
			for(var e='', s='', n=1; n<=t.$level; n++) {
				n==t.$level && (s=t.$count?t.open?'webix_tree_open ':'webix_tree_close ':'webix_tree_none ');
				var h=i.QD(t, i, n);
				h && (e+='<div class=\''+s+'webix_tree_img webix_tree_'+h+'\'></div>');
			}
			return e;
		},
		QD:function(t, i, e) {
			var s=i._f, n=cs.Ve;
			if(0===s && n) {
				var h=t.$level, r=t.id;
				for(s=[]; h;) {
					var o=n.getParentId(r), a=n.data.branch[o];
					a[a.length-1]==r && (s[h]= !0), r=o, h--;
				}
				i._f=s;
			}
			if(!s) return 0;
			if(e!=t.$level) return s[e]?'blank':'line1';
			var u=3;
			return t.$parent || 0===t.$index && (u=4), s[t.$level] && (u=2), t.$count?t.open?'minus'+u:'plus'+u:'line'+u;
		}
	});
	var wo={
		name:'treemap',
		defaults:{
			activeItem:!1,
			subRender:!0,
			header:!0,
			headerHeight:35,
			value:Yt('#value#'),
			headerTemplate:'',
			navigation:!0
		},
		value_setter:Yt,
		headerTemplate_setter:Yt,
		header_setter:function(t) {
			return t && !0!==t && (this.type.header=t), t;
		},
		$init:function() {this.$view.className+=' webix_treemap', this.Vt.setAttribute('role', 'tree'), this.tI=document.createElement('DIV'), H.extend(this.data, ls, !0), this.data.provideApi(this, !0), this.data.attachEvent('onClearAll', S(function() {this.Li='', this.$values={}, this.$xy={};}, this)), this.attachEvent('onKeyPress', this.Se);},
		lf:function(t) {
			var i=this.data.kr[t.id];
			this.callEvent('onItemRender', [t]);
			var e=t.$template?this.type['template'+t.$template].call(this, t, this.type, i):this.type.template.call(this, t, this.type, i);
			return this.type.templateStart.call(this, t, this.type, i)+e+this.type.templateEnd.call(this);
		},
		iI:function(t) {
			var i=this.getItem(t), e=this.P.headerHeight, s='<div class=\'webix_treemap_header\' style=\'height:'+e+'px;line-height:'+e+'px;\'>';
			return s+=this.type.header.call(this, i, this.type), s+='</div>';
		},
		CC:function(t) {
			var i, e, s, n, h=[];
			if(!this.$width || !this.count()) return this.Li='', !1;
			if(t || (t=this.config.branch || 0, this.Li='', this.$values={}, this.$xy={}, this.$xy[t]={
				width:this.$width,
				height:this.$height,
				top:0,
				left:0
			}, t && this.P.header && (this.$xy[t].height-=this.P.headerHeight, this.$xy[t].top=this.P.headerHeight, this.Li+=this.iI(t)), n=0, this.data.each(function(t) {
				var i=this.getParentId(t.id);
				if(!this.data.branch[t.id] && (s=1*this.config.value.call(this, t), !isNaN(s) && s)) for(this.$values[t.id]=s, n+=s; i;) this.$values[i] || (this.$values[i]=0), this.$values[i]+=s, i=this.getParentId(i);
			}, this, !1, t)), this.data.eachChild(t, function(t) {this.$values[t.id] && h.push(_(t));}, this), n=n || this.$values[t], h.length && n) {
				(e={
					top:(i=this.$xy[t]).top,
					left:i.left,
					dx:i.width,
					dy:i.height,
					set:[],
					sum:0
				}).dim=Math.min(e.dx, e.dy);
				for(var r=e.dx*e.dy/n, o=0; o<h.length; o++) h[o].$value=this.$values[h[o].id]*r;
				h.sort(function(t, i) {return t.$value>i.$value?-1:1;});
				for(var a=Infinity, u=0; h[u];) {
					var c=this.eI(e, h[u]);
					if(c<a) e.sum+=h[u].$value, e.set.push(h[u]), a=c, u++; else {
						this.sI(e);
						var f={
							top:e.top,
							left:e.left,
							dx:e.dx,
							dy:e.dy,
							set:[],
							sum:0
						}, l=e.sum/e.dim;
						e.dx>e.dy?(f.left+=l, f.dx-=l):(f.top+=l, f.dy-=l), (e=f).dim=Math.min(e.dx, e.dy), a=Infinity;
					}
				}
			}
			e && this.sI(e);
		},
		sI:function(t) {
			var i, e, s, n, h=t.top, r=t.left;
			for(t.mode=t.dy<t.dx, t.contra=t.sum/t.dim, i=0; i<t.set.length; i++) e=t.set[i].id, n=t.mode?(s=t.contra, t.set[i].$value/t.contra):(s=t.set[i].$value/t.contra, t.contra), this.$xy[e]={}, this.$xy[e].top=h, this.$xy[e].left=r, t.mode?h+=n:r+=s, this.$xy[e].width=s, this.$xy[e].height=n, this.Li+=this.lf(this.getItem(e)), this.P.subRender && this.data.branch[e] && this.CC(e);
		},
		eI:function(t, i) {
			var e=t.sum+i.$value, s=e*e/(t.dim*t.dim*i.$value);
			return t.set.length && (s=Math.max(t.dim*t.dim*t.set[0].$value/(e*e), s)), 1<s?s:1/s;
		},
		mc:function(t) {return this.tI.innerHTML=this.lf(t), this.tI.firstChild;},
		showBranch:function(t) {this.P.branch=t, this.refresh();},
		render:function(t, i, e) {
			if(this.isVisible(this.P.id) && !this.$blockRender) {
				if('update'==e) {
					var s=this.getItemNode(t);
					if(s) vt(this.ji[t]=this.mc(i), s), dt(s);
				} else !this.data.branch || this.P.branch && !this.data.branch[this.P.branch] || (this.ji=null, this.callEvent('onBeforeRender', []), this.CC(), this.tt.innerHTML=this.Li, this.callEvent('onAfterRender', []));
				return !0;
			}
		},
		Ko:'webix_dm_id',
		on_click:{
			webix_treemap_item:function(t, i) {this.P.select && ('multiselect'==this.P.select || this.P.multiselect?this.select(i, !1, t.ctrlKey || t.metaKey || 'touch'==this.P.multiselect, t.shiftKey):this.select(i)), this.P.activeItem && this.isBranch(i) && this.showBranch(i);},
			webix_treemap_header_item:function(t) {
				var i=_t(t, 'webix_dm_header_id');
				this.define('branch', i), this.refresh();
			},
			webix_treemap_reset:function() {this.define('branch', 0), this.refresh();}
		},
		on_dblclick:{},
		on_mouse_move:{},
		nI:function(t) {
			var i='';
			for(var e in t) i+=e+':'+t[e]+';';
			return i;
		},
		type:{
			template:Yt('#value#'),
			header:function(t, i) {
				for(var e=t.id, s='<div role=\'button\' tabindex=\'0\' aria-label=\''+I.aria.resetTreeMap+'\' class=\'webix_treemap_reset\'></div>', n=[]; e;) t=this.getItem(e), n.push(i.headerItem.call(this, t, i)), e=this.getParentId(e);
				return n.reverse(), s+n.join('<span class=\'webix_icon wxi-angle-right webix_treemap_path_icon\'></span>');
			},
			headerItem:function(t) {
				var i=this.config.headerTemplate(t), e='<a role="button" tabindex="0" aria-label="'+i+'" webix_dm_header_id="'+t.id+'" class="webix_treemap_header_item">';
				return e+=i, e+='</a>';
			},
			classname:function(t, i, e) {
				var s='webix_treemap_item';
				i.css && (s+=' '+i.css), t.$css && ('object'==M(t.$css) && (t.$css=at(t.$css)), s+=' '+t.$css);
				var n=this.$xy[t.id];
				e && e.$css && (s+=' '+e.$css), s+=' webix_treemap_level_'+this.getItem(t.id).$level;
				var h=this.getParentId(t.id);
				if(h && h!=this.P.branch || (s+=' webix_treemap_level_top'), this.$height-n.top-n.height<1 && (s+=' webix_treemap_item_bottom'), this.$width-n.left-n.width<1 && (s+=' webix_treemap_item_right'), i.cssClass) {
					var r=i.cssClass.call(this, t, i, e);
					r && ('object'==M(r)?s+=' '+at(r):s+=' '+r);
				}
				return s;
			},
			templateStart:function(t, i, e) {
				var s='';
				if(this.$xy) {
					var n=this.$xy[t.id];
					s+='width: '+n.width+'px; height: '+n.height+'px;', s+='top: '+n.top+'px; left: '+n.left+'px;';
				}
				return '<div role="treeitem" aria-level="'+t.$level+'" '+(e && e.webix_selected?'aria-selected="true" tabindex="0"':'')+' webix_dm_id="'+t.id+'" class="'+i.classname.call(this, t, i, e)+'" style="'+s+'">';
			},
			templateEnd:Yt('</div>')
		}
	}, xo=(H.protoUI(wo, De, rs, Ne, Fe, ze, je, as, Yh.view, cs, ne, g), {
		name:'dataview',
		$init:function(t) {
			t.sizeToContent && this.$ready.unshift(this.nr);
			var i=t.type || t.item;
			t.prerender || this.defaults.prerender || i && 'auto'==i.width || 'move'==t.drag || 'order'==t.drag || t.autoheight || H.extend(this, bs, !0), t.autoheight && (t.scroll= !1), i && 'tiles'==i.type && (this.hI=i.padding || this.type.padding, this.Vt.firstChild.style['float']='left', this.Vt.firstChild.style.padding=this.hI/2+'px'), this.Oi.className+=' webix_dataview', this.Vt.setAttribute('role', 'listbox');
		},
		nr:function() {
			var t=ft('DIV', 0, this.type.template({}));
			t.className='webix_dataview_item', t.style.position='absolute', document.body.appendChild(t), this.type.width=t.offsetWidth+this.hI, this.type.height=t.offsetHeight+this.hI, dt(t);
		},
		defaults:{
			scroll:!0,
			datafetch:50,
			navigation:!0
		},
		Ko:'webix_l_id',
		rh:'webix_dataview_item',
		hI:0,
		Go:'x',
		on_click:{webix_dataview_item:function(t, i) {this.P.select && ('multiselect'==this.P.select || this.P.multiselect?this.select(i, !1, 'touch'==this.P.multiselect || t.ctrlKey || t.metaKey, t.shiftKey):this.select(i));}},
		on_dblclick:{},
		on_mouse_move:{},
		type:{
			template:Yt('#value#'),
			templateLoading:Yt('Loading...'),
			width:160,
			height:50,
			padding:8,
			classname:function(t, i, e) {
				var s='webix_dataview_item';
				return i.css && (s+=' '+i.css), i.type && (s+=' '+i.type), t.$css && ('object'==M(t.$css) && (t.$css=at(t.$css)), s+=' '+t.$css), e && e.$css && (s+=' '+e.$css), s;
			},
			aria:function(t, i, e) {return 'role="option"'+(e && e.webix_selected?' aria-selected="true" tabindex="0"':' tabindex="-1"');},
			templateStart:function(t, i, e) {
				var s=i.width, n=i.height, h=0;
				return 'tiles'==i.type && (s-=i.padding, n-=i.padding, h=i.padding/2), '<div webix_l_id="'+t.id+'" class="'+i.classname(t, i, e)+'" '+i.aria(t, i, e)+' style="margin:'+h+'px; width:'+s+'px; height:'+n+'px; float:left; overflow:hidden;">';
			},
			templateEnd:Yt('</div>')
		},
		$dropHTML:function() {
			var t=this.hI;
			return '<div class="webix_drop_area_inner" style="width:'.concat(this.type.width-t, 'px; height:').concat(this.type.height-t, 'px; margin:').concat(t/2, 'px"></div>');
		},
		rI:function(t) {return this.P.height=this.type.height*Math.ceil(this.data.count()/Math.floor(t/this.type.width));},
		autoheight_setter:function(t) {return t && (this.data.attachEvent('onStoreLoad', S(this.resize, this)), this.Oi.style.overflowY='hidden'), t;},
		$getSize:function(t, i) {
			this.P.xCount && 'auto'!=this.type.width && !this.oI && (this.P.width=this.type.width*this.P.xCount+this.hI+(this.be?q.scrollSize:0)), this.P.yCount && 'auto'!=this.type.height && !this.aI && (this.P.height=this.type.height*this.P.yCount+this.hI);
			var e=this.P.width || this.me;
			return this.P.autoheight && e && (this.uI(), this.rI(e), this.scroll_setter(!1)), Hi.api.$getSize.call(this, t, i);
		},
		uI:function() {
			return this.P.yCount && (this.aI || 'auto'==this.type.height) && (this.type.height=Math.floor((this.ge-this.hI)/this.P.yCount), this.aI=this.P.yCount), this.P.xCount && (this.oI || 'auto'==this.type.width) && (this.type.width=Math.floor((this.me-this.hI)/this.P.xCount), this.oI=this.P.xCount), this.aI || this.oI;
		},
		$setSize:function(t, i) {
			var e=this.P;
			if(Hi.api.$setSize.call(this, t, i)) {
				if(e.autoheight && this.rI()!=this.ge) return k(this.resize, this);
				(this.uI() || this.Yf) && this.render();
			} else (e.yCount && e.yCount!=this.aI || e.xCount && e.xCount!=this.oI) && this.uI() && this.render();
		}
	});
	H.protoUI(xo, ae, me, ze, Fe, Ne, je, he, Yh.view);
	I.pager={
		first:'<span class=\'webix_icon wxi-angle-double-left\'></span>',
		last:'<span class=\'webix_icon wxi-angle-double-right\'></span>',
		next:'<span class=\'webix_icon wxi-angle-right\'></span>',
		prev:'<span class=\'webix_icon wxi-angle-left\'></span>'
	};
	var yo={
		defaults:{
			size:10,
			page:0,
			group:5,
			template:'{common.pages()}',
			maxWidth:1e5,
			height:30,
			borderless:!0
		},
		name:'pager',
		on_click:{webix_pager_item:function(t, i) {this.select(i);}},
		$init:function(t) {this.data=this.P, this.tt=this.Vt, this.Vt.className+=' webix_pager'+(t.autowidth?' webix_pager_auto':''), !1!==t.master && 0!==t.master || this.$ready.push(this.cI);},
		cI:function() {
			this.refresh(), this.$master={
				refresh:function() {},
				select:function() {}
			};
		},
		select:function(t) {
			if(this.$master && 'pager'==this.$master.name) return this.$master.select(t);
			switch(t) {
			case'next':
				t=this.P.page+1;
				break;
			case'prev':
				t=this.P.page-1;
				break;
			case'first':
				t=0;
				break;
			case'last':
				t=this.P.limit-1;
			}
			t<0 && (t=0), t>=this.data.limit && (t=this.data.limit-1);
			var i=this.data.page;
			this.callEvent('onBeforePageChange', [t, i]) && (this.data.page=1*t, this.refresh() && (this.P.animate && this.Ok(i, 1*t, this.P.animate) || this.$master.refresh()), this.callEvent('onAfterPageChange', [t]));
		},
		Ko:'webix_p_id',
		template_setter:Yt,
		type:{
			template:function(t, i) {return t.template.call(this, t, i);},
			pages:function(t) {
				var i='';
				if(-1==t.page) return '';
				t.$min=t.page-Math.round((t.group-1)/2), t.$max=t.$min+1*t.group-1, t.$min<0 && (t.$max+=-1*t.$min, t.$min=0), t.$max>=t.limit && (t.$min-=Math.min(t.$min, t.$max-t.limit+1), t.$max=t.limit-1);
				for(var e=t.$min || 0; e<=t.$max; e++) i+=this.button({
					id:e,
					index:e+1,
					selected:e==t.page?'_selected':'',
					label:I.aria.page+' '+(e+1)
				});
				return i;
			},
			page:function(t) {return t.page+1;},
			first:function() {
				return this.button({
					id:'first',
					index:I.pager.first,
					selected:'',
					label:I.aria.pages[0]
				});
			},
			last:function() {
				return this.button({
					id:'last',
					index:I.pager.last,
					selected:'',
					label:I.aria.pages[3]
				});
			},
			prev:function() {
				return this.button({
					id:'prev',
					index:I.pager.prev,
					selected:'',
					label:I.aria.pages[1]
				});
			},
			next:function() {
				return this.button({
					id:'next',
					index:I.pager.next,
					selected:'',
					label:I.aria.pages[2]
				});
			},
			button:Yt('<button type=\'button\' webix_p_id=\'{obj.id}\' class=\'webix_pager_item{obj.selected}\' aria-label=\'{obj.label}\'>{obj.index}</button>')
		},
		clone:function(t) {t.$view || (t.view='pager', t=si(t)), ((this.lI=t).$master=this).fI();},
		refresh:function() {
			var t=this.P;
			t.limit=Math.ceil(t.count/t.size) || 1;
			var i=Math.min(t.limit-1, t.page);
			return i!=t.page?this.$master.setPage(i):0<=(t.page=i) && i!=t.old_page || t.limit!=t.old_limit || t.old_count!=t.count?(this.render(), this.fI(), t.old_limit=t.limit, t.old_page=t.page, t.old_count=t.count, !0):void 0;
		},
		apiOnly_setter:function(t) {return this.$apiOnly=t;},
		fI:function() {this.lI && (this.lI.P.count=this.P.count, this.lI.P.page=this.P.page, this.lI.refresh());},
		Ok:function(t, i, e) {
			if(t==i) return !1;
			if(this.dI) return this.vI && window.clearTimeout(this.vI), this.vI=k(this.Ok, this, [t, i, e], 100);
			var s=t<i?'left':'right';
			'top'!=e.direction && 'bottom'!=e.direction || (s=t<i?'top':'bottom'), e.flip && (s='');
			var n=0, h=this.$master.tt, r=!!this.$master.st;
			r && (n=(h=this.$master.st).offsetTop, yt(this.$master.$view, 'webix_animation'));
			var o, a=h.cloneNode(!0);
			a.style.width=h.style.width='100%', this.$master.refresh(), vt(a, h.nextSibling, h.parentNode), r && (a.childNodes[1].scrollLeft=h.childNodes[1].scrollLeft);
			var u=!0!==e?e:{}, c=H.extend({
				direction:s,
				callback:S(function() {c.callback=null, Ni.breakLine(o), this.dI= !1, this.$master.st && Mt(this.$master.$view, 'webix_animation');}, this),
				top:n,
				keepViews:r
			}, u);
			o=Ni.formLine(h, a, c), Ni([h, a], c), this.dI= !0;
		}
	}, Mo=(H.protoUI(yo, ze, Ri, Hi.view, g), {
		name:'comments',
		defaults:{
			sendAction:'click',
			mode:'comments',
			highlight:!0
		},
		$init:function(t) {
			this.$view.className+=' webix_comments', this.Bt=[], t.rows=[this._I(t)], t.moreButton || (t.moreButton=Yt(I.comments.moreComments)), t.readonly || (t.rows.push(this.pI(t)), this.mI()), this.bI(t.users), this.$ready.push(this.kC);
		},
		$exportView:function() {return this.gI;},
		kC:function() {
			var e=this;
			this.gI=this.queryView('list'), this.wI=this.queryView('form'), this.xI=this.queryView('button'), this.yI=this.queryView({localId:'textarea'}), this.config.mentions && this.MI(this.config.mentions), this.gI.data.provideApi(this, !0), this.serialize=function() {
				var t=e.gI.serialize(), i=e.getIndexById('$more');
				return 0<=i && t.splice(i, 1), t;
			}, this.P.readonly || (this.SI=A('onClick', function(t) {
				var i=oi(t);
				i==e.yI?e.focus():i===e.xI || i===e.kI || e.CI && i===e.CI.getList() || t && -1!==(t.target.className || '').toString().indexOf('webix_comments_menu') || e.$I();
			}), this.attachEvent('onDestruct', function() {T(this.SI);}), this.gI.attachEvent('onAfterScroll', function() {e.kI.hide();}));
		},
		$onLoad:function(t, i) {return this.DI(t, i);},
		DI:function(t, i) {
			var e=this, s=this.gI || this.queryView({view:'list'});
			s.data.driver=i;
			var n=!1;
			if(t='function'== typeof t.serialize?t.serialize():(n=t.more, i.getRecords(t)), this.II) {
				if(this.II= !1, t.length) {
					var h=s.data.order, r=1;
					if('chat'==this.P.mode) s.data.order=b([h[0]].concat(new Array(t.length), h.slice(1))); else {
						var o=s.getIndexById('$more');
						s.data.order=b(h.slice(0, o).concat(new Array(t.length), h.slice(o))), r=o;
					}
					s.parse({
						data:t,
						pos:r
					}), n && le(this.gI).ignore(function() {e.gI.updateItem('$more', {value:n});}), 'chat'==this.P.mode && s.showItem(s.getIdByIndex(t.length));
				}
				t.length && n || le(this.gI).ignore(function() {e.gI.remove('$more');});
			} else n && !s.exists('$more') && (n={
				id:'$more',
				value:n,
				$css:'webix_comments_more_item'
			}, 'chat'==this.P.mode?t.unshift(n):t.push(n)), s.parse(t), 'chat'==this.P.mode && s.waitData.then(function() {return s.showItem(s.getLastId());});
			return !0;
		},
		$skin:function() {kn.api.$skin.call(this), this.im=Li.inputHeight+6;},
		getUsers:function() {return this.AI;},
		getMenu:function() {return this.kI;},
		setCurrentUser:function(t) {this.config.currentUser=t, this.wI.clear(), this.gI.refresh();},
		edit:function(t) {
			if(!this.config.readonly && this.callEvent('onBeforeEditStart', [t])) {
				this.$I(!0);
				var i=this.gI.getItem(t);
				this.wI.setValues(i), this.wI.focus();
				var e=this.wI.elements.text.getInputNode();
				e.scrollTop=e.scrollHeight, $t(e, i.text.length), this.callEvent('onAfterEditStart', [t]);
			}
		},
		TI:function(t) {
			var i=this.wI.getValues();
			i.text && (i.id?this.updateItem(i.id, i):(this.config.currentUser && (i.user_id=this.config.currentUser), i.date=new Date, this.add(i), this.gI.showItem(i.id)), this.wI.clear(), t && (this.yI.getInputNode().value=''));
		},
		FI:function(t) {this.wI.getValues().id==t && this.wI.clear(), this.remove(t);},
		$I:function(t) {
			if(!q.touch && !t!= !this.VI) {
				var i=this.yI;
				this.VI=t?(this.xI.getParentView().show(), i.define({height:84}), !0):(Mi.hasFocus(this.xI) && Mi.setFocus(this.gI), this.xI.getParentView().hide(), i.define({height:this.im}), !1), i.resize();
			}
		},
		focus:function() {
			var t=this;
			this.$I(!0), k(function() {t.yI.focus();});
		},
		zI:function(t) {t || (t=this.yI.getValue()), t && !this.xI.isEnabled()?this.xI.enable():!t && this.xI.isEnabled() && this.xI.disable();},
		mI:function() {
			var e=this;
			this.kI=si({
				view:'contextmenu',
				autowidth:!0,
				point:!1,
				data:[{
					id:'edit',
					icon:'wxi-pencil',
					value:I.comments.edit
				}, {
					id:'remove',
					icon:'wxi-trash',
					value:I.comments.remove
				}],
				on:{
					onShow:function() {
						var t=e.kI.getContext();
						e.gI.addCss(t.id, 'active_menu');
					},
					onHide:function() {
						var t=e.kI.getContext();
						e.gI.removeCss(t.id, 'active_menu');
					},
					onItemClick:function(t) {
						var i=e.kI.getContext();
						e.callEvent('onBeforeMenuAction', [t, i.id]) && ('edit'==t?e.edit(i.id):'remove'==t && (I.comments.confirmMessage?Zs({
							text:I.comments.confirmMessage,
							callback:function(t) {t && e.FI(i.id);}
						}):e.FI(i.id)));
					}
				}
			}), this.Bt.push(this.kI);
		},
		pI:function(t) {
			var n=this, i=I.comments, e={
				view:'textarea',
				localId:'textarea',
				css:'webix_comments_textarea',
				height:this.im,
				name:'text',
				placeholder:i.placeholder,
				keyPressTimeout:100,
				on:{
					onTimedKeyPress:function() {n.zI();},
					onChange:function(t) {n.zI(t);},
					onKeyPress:function(t, i) {
						if(13==t) {
							var e=n.P.sendAction, s=i.shiftKey;
							('enter'==e && !s || 'enter'!==e && s) && (gt(i), n.TI(!0));
						}
					}
				}
			};
			return !1!==t.highlight && H.extend(e, {
				view:'texthighlight',
				type:'textarea',
				highlight:function(t) {return n.BI(Yt.escape(t), !0);}
			}, !0), {
				view:'form',
				minHeight:50,
				paddingX:10,
				elements:[e, {
					hidden:!q.touch,
					cols:[{}, {
						view:'button',
						disabled:!0,
						css:'webix_comments_send webix_primary',
						value:i.send,
						autowidth:!0,
						click:function() {n.TI();}
					}]
				}]
			};
		},
		BI:function(t, n) {
			var h, r=this;
			if(-1===t.indexOf('@')) return t;
			'users'===this.P.highlight && (h=this.CI && this.CI.P.textValue || 'value');
			var i=n?this.HI:this.RI;
			return t.replace(i, function(t, i, e, s) {return r.EI(t, s || i, h, n);});
		},
		EI:function(t, i, e, s) {return e && !this.AI.find(function(t) {return t[e]==i;}, !0)?t:'<span class="webix_comments_mention">'.concat(s?t:'@'+i, '</span>');},
		_I:function(i) {
			var r=this, o='webix_comments_', e={
				height:'auto',
				templateStatus:function(t) {return '<span class = \''+o+'status '+t.status+'\'></span>';},
				templateUser:function(t) {
					var i=r.getUsers(), e=i && i.exists(t.user_id)?i.getItem(t.user_id):{};
					return '<span class = \''+o+'name\'>'+(e.value || '')+'</span>';
				},
				templateMenu:function() {return r.config.readonly?'':'<span class=\'webix_icon wxi-dots '+o+'menu\'></span>';},
				templateDate:function(t) {
					var i=sn.dateToStr('%d %M, %H:%i');
					return t.date?'<span class=\''+o+'date\'>'+i(t.date)+'</span>':'';
				},
				templateLinks:function(t) {
					return t.text.replace(/(https?:\/\/[^\s]+)/g, function(t) {
						var i='<a target=\'_blank\' href=\''+(t=Yt.escape(t))+'\'>';
						return t.match(/.(jpg|jpeg|png|gif)$/)?i+='<img class=\'webix_comments_image\' src=\''+t+'\'/>':i+=t, i+'</a>';
					});
				},
				templateMentioned:function(t) {return r.BI(t.text);},
				templateText:function(t, i) {return r.P.mentions && r.P.highlight && ((t=_(t)).text=i.templateMentioned(t, i)), '<div class = \''+o+'message\'>'+i.templateLinks(t)+'</div>';},
				templateAvatar:function(t, i) {
					var e='<div class=\''+o+'avatar\'>', s=r.getUsers(), n=s && s.exists(t.user_id)?s.getItem(t.user_id):{};
					if(n.status && (e+=i.templateStatus(n)), e+='<div class=\''+o+'avatar_image ', n.image) e+='\'><img src = \''+n.image+'\' class=\''+o+'photo\'>'; else {
						var h=n.value?n.value[0].toUpperCase():'<span class=\'webix_icon wxi-user\'></span>';
						e+=o+'avatar_text\'>'+h;
					}
					return e+='</div></div>';
				},
				template:function(t, i) {
					var e;
					if('$more'==t.id) e='<div class=\'webix_comments_more\'>'+r.P.moreButton(t)+'</div>'; else {
						var s=i.templateAvatar(t, i), n=i.templateUser(t, i), h=i.templateDate(t, i);
						e=s+n+i.templateMenu(t, i)+h+i.templateText(t, i);
					}
					return e;
				},
				classname:function(t, i, e) {
					var s=Gh.api.type.classname(t, i, e);
					return (t.user_id && t.user_id==r.P.currentUser || !r.AI.count()) && (s+=' webix_comments_current'), s;
				}
			};
			e=H.extend(e, i.listItem || {}, !0);
			var s={$init:function(t) {t.date && (t.date=I.parseFormatDate(t.date));}};
			i.scheme && Object.keys(i.scheme).forEach(function(t) {s[t]=i.scheme[t];});
			var t={
				view:'list',
				navigation:!1,
				type:e,
				scheme:s,
				onClick:{
					webix_comments_menu:function(t, i) {
						r.kI.isVisible()?r.kI.hide():(r.kI.setContext({
							obj:r,
							id:i
						}), r.kI.show(t.target, e.menuPosition || {
							pos:'left',
							y:30,
							x:10
						}));
					},
					webix_comments_more:function() {
						if(r.config.url && r.callEvent('onDataRequest', [])) {
							r.II= !0;
							var t=r.gI.getItem('$more').value, i='chat'==r.P.mode?t:r.gI.getIndexById('$more'), e=W.$parse(r.config.url), s={error:function() {r.II= !1;}};
							'string'== typeof e && (e=e+(e.indexOf('?')<0?'?':'&')+'pos='+i+'&more='+t), r.load(e, s, {
								pos:i,
								more:t
							});
						}
					}
				}
			};
			return i.save && (t.save=i.save), t;
		},
		bI:function(t) {
			var i=this;
			t && t.getItem?this.AI=t:(this.AI=new Ch, this.Bt.push(this.AI), t && 'string'== typeof t?this.AI.load(t):this.AI.parse(t || [])), this.AI.data.attachEvent('onStoreUpdated', function() {return i.gI.refresh();});
		},
		MI:function(t) {
			var s=this, i=this.config.readonly;
			i || this.jI(t), this.config.highlight && (i || (this.HI=new RegExp('@((&quot;(.*?)&quot;)|([^\\s]{1,}))', 'g')), this.RI=new RegExp('@(("(.*?)")|([^\\s]{1,}))', 'g')), m.all([this.gI.waitData, this.AI.waitData]).then(function() {s.gI.refresh();}), this.gI.data.attachEvent('onStoreUpdated', function(t, i, e) {!t || 'add'!==e && 'update'!==e || s.NI(i);});
		},
		jI:function(t) {
			var i='object'!=M(t)?{}:t;
			'object'!==M(i.body)?i.body={data:this.AI}:i.body.data=this.AI, H.extend(i, {view:'mentionsuggest'}, !0);
			var e=this.yI.define('suggest', i);
			this.yI.setValueHere=function(t, i, e) {
				return -1!=t.indexOf(' ') && (t='"'.concat(t, '"')), kh.api.setValueHere.apply(this, [t, i, e]);
			}, this.CI=oi(e);
		},
		NI:function(r) {
			var o=this;
			if(-1!=r.text.indexOf('@')) {
				var a=this.CI && this.CI.P.textValue || 'value', u={};
				r.text.replace(this.RI, function(t, i, e, s) {
					var n=s || i, h=o.AI.find(function(t) {return t[a]==n;}, !0);
					return h && !u[n] && (o.callEvent('onUserMentioned', [h.id, r.id]), u[n]= !0), t;
				});
			}
		}
	}), So=(H.protoUI(Mo, Ht, kn.view), {
		name:'timeline',
		defaults:{scroll:'auto'},
		$init:function() {
			var s=this;
			this.Vt.className+=' webix_timeline', this.$blockRender= !0, this.data.provideApi(this, !0), this.data.attachEvent('onStoreUpdated', function(t, i, e) {return s.render(t, i, e);});
		},
		Ko:'webix_tl_id',
		on_click:{},
		$setSize:function(t, i) {this.$blockRender= !1, Vi.api.$setSize.call(this, t, i) && this.refresh();},
		render:function(t, i, e) {
			if(this.isVisible(this.P.id) && !this.$blockRender) {
				if('update'!=e) return this.callEvent('onBeforeRender', [this.data]) && (this.ji=null, this.tt.innerHTML=this.data.getRange().map(this.Q, this).join(''), this.callEvent('onAfterRender', [])), !0;
				var s=this.getItemNode(t);
				return vt(this.ji[t]=this.mc(i), s), dt(s), !0;
			}
		},
		Q:function(t) {
			this.callEvent('onItemRender', [t]);
			var i=this.getIndexById(t.id);
			return this.type.templateStart.call(this, t, this.type, i)+this.type.template.call(this, t, this.type, i)+this.type.templateEnd.call(this);
		},
		type:{
			type:'left',
			classname:function(t, i, e) {
				var s='webix_timeline_item';
				return 'alternate'!==i.type?s+='  webix_timeline_'+i.type:s+=' webix_timeline_'+(e%2?'right':'left'), i.css && (s+=' '+i.css), t.$css && ('object'==M(t.$css) && (t.$css=at(t.$css)), s+=' '+t.$css), s;
			},
			lineColor:function(t) {return t.color;},
			templateValue:Yt('#value#'),
			templateDetails:function(t) {return t.details || '';},
			templateDate:function(t) {return sn.dateToStr('%d %M, %Y')(t.date);},
			template:function(t, i, e) {
				var s=Li.dataPadding, n='string'== typeof i.lineColor?i.lineColor:i.lineColor(t, i), h='stroke-width:'.concat(2, 'px; stroke:').concat(n || Li.timelineColor, ';'), r=this.P.scroll?q.scrollSize:0, o=this.$width-2*s-r, a=i.type, u=e+1==this.count(), c=s, f=Math.floor(.35*o), l=Math.floor(.65*o)-14, d=f+14+s, v=f-14;
				return 'right'==a?(c=(f=o-d+14+s)+14+s, d=s):'alternate'==a && (d=(f=Math.floor(.5*o))+14+s, v=l=f-14, e%2 && (c=d, d=s)), '<div style="left:'.concat(c, 'px; width:').concat(v, 'px;" class="webix_timeline_date">').concat(i.templateDate(t, i), '</div>\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="').concat(f+14, 'px" height="').concat(i.height+14, 'px">\n\t\t\t\t\t\t').concat(u?'':'<line x1="'.concat(f, 'px" y1="').concat(15, '" x2="').concat(f, 'px" y2="').concat(i.height+9-6, '" class="webix_timeline_node" style="').concat(h, '"/>'), '\n\t\t\t\t\t\t<circle cx="').concat(f, 'px" cy="').concat(9, '" r="').concat(6, '" class="webix_timeline_node webix_timeline_point" style="').concat(h, ' fill:transparent;" />\n\t\t\t\t\t</svg>\n\t\t\t\t\t<div class="webix_timeline_event" style="left:').concat(d, 'px; width:').concat(l, 'px; height:').concat(i.height-s, 'px;">\n\t\t\t\t\t\t<div class="webix_timeline_value">').concat(i.templateValue(t, i), '</div>\n\t\t\t\t\t\t<div class="webix_timeline_details">').concat(i.templateDetails(t, i), '</div>\n\t\t\t\t\t</div>');
			},
			templateStart:function(t, i, e) {return '<div '.concat('webix_tl_id', '="', t.id, '" class="').concat(i.classname.call(this, t, i, e), '" style="height:').concat(i.height, 'px;">');},
			templateEnd:Yt('</div>')
		},
		templateValue_setter:function(t) {this.type.templateValue=Yt(t);},
		templateDetails_setter:function(t) {this.type.templateDetails=Yt(t);},
		templateDate_setter:function(t) {this.type.templateDate=Yt(t);},
		$skin:function() {this.type.height=Li.timelineItemHeight;}
	}), ko=(H.protoUI(So, je, Pe, _e, ze, g, Pi, Vi.view), {
		name:'menu',
		Gm:'webix_menu',
		$init:function(t) {
			t.autowidth && (this.LI= !0, delete t.autowidth), this.data.attachEvent('onStoreUpdated', S(function() {this.xu();}, this)), this.attachEvent('onMouseMove', this.OI), this.attachEvent('onMouseOut', function(t) {this.WI() && 'click'==this.P.openAction || !this.UI && t.relatedTarget && this.xu();}), this.attachEvent('onItemClick', function(t, i, e) {
				var s=this.getItem(t);
				if(s) {
					if(s.$template) return;
					var n=this.getTopMenu();
					if(!n.callEvent('onMenuItemClick', [t, i, e])) return void (i.showpopup=n.P.id);
					this!=n && n.pc(t, i, e), this.type.YI(s) || n.qI?((q.touch || this===n && 'click'==n.P.openAction) && this.Mu(t, e), i.showpopup=n.P.id):(n.xu(!0), n.GI && n.hide());
				}
			}), this.attachEvent('onKeyPress', function(t) {
				if(9===t) this.getTopMenu().xu(); else if(13===t || 32===t) {
					var i, e=this.getSelectedId();
					e && (i=this.getItemNode(e)), i && xt(i, 'MouseEvents', 'click');
				}
			}), this.data.attachEvent('onClearAll', function() {this.XI=[];}), this.data.XI=[], this.Vt.setAttribute('role', 'menubar'), this.Bt=[];
		},
		sizeToContent:function() {
			if('y'==this.P.layout) {
				var i=[], e=!1;
				this.data.each(function(t) {i.push(this.Q(t)), t.submenu && (e= !0);}, this), this.config.width=St(i, this.$view.className).width+16+2+(e?15:0), this.resize();
			}
		},
		getTopMenu:function() {
			for(var t=this; t.wu;) t=oi(t.wu);
			return t;
		},
		Zm:function(t) {
			this.P.autoheight && (t=this.count());
			for(var i=this.count(), e=0, s=0; s<t; s++) {
				var n=this.data.pull[this.data.order[s]];
				n && 'Separator'==n.$template?(e+=4, this.P.autoheight || t++):e+=this.type.height;
			}
			return this.xc(t && t<i, 'y'), e;
		},
		on_mouse_move:{},
		type:{
			YI:function(t) {return t.submenu || t.data || t.item;},
			css:'menu',
			width:'auto',
			aria:function(t, i, e) {return 'role="menuitem"'+(e && e.webix_selected?' aria-selected="true" tabindex="0"':'tabindex="-1"')+(i.YI(t)?'aria-haspopup="true"':'')+(t.disabled?' aria-disabled="true"  webix_disabled="true"':'');},
			templateStart:function(t, i, e) {
				if('Separator'===t.$template || 'Spacer'===t.$template) return '<div webix_l_id="#id#" role="separator" tabindex="-1" class="webix_context_'+t.$template.toLowerCase()+'">';
				var s=(t.href?' href=\''+t.href+'\' ':'')+(t.target?' target=\''+t.target+'\' ':'');
				return Gh.api.type.templateStart(t, i, e).replace(/^<div/, '<a '+s)+(i.YI(t) && i.subsign?'<div class=\'webix_submenu_icon\'></div>':'');
			},
			templateEnd:function(t) {return 'Separator'===t.$template || 'Spacer'===t.$template?'</div>':'</a>';},
			templateSeparator:Yt('<div class=\'sep_line\'></div>'),
			templateSpacer:Yt('<div></div>')
		},
		getMenu:function(t) {
			if(this.data.pull[t]) return this;
			for(var i in this.data.pull) {
				var e=this.getItem(i);
				if(e.submenu) {
					var s=this.JI(e).getMenu(t);
					if(s) return s;
				}
			}
		},
		getSubMenu:function(t) {
			var i=this.getMenu(t), e=i.getItem(t);
			return e.submenu?i.JI(e):null;
		},
		getMenuItem:function(t) {return this.getMenu(t).getItem(t);},
		JI:function(t) {
			var i=oi(t.submenu);
			return i || (t.submenu=this.KI(t), i=oi(t.submenu)), i;
		},
		OI:function(t, i, e) {this.WI() && this.Mu(t, e);},
		WI:function() {
			if(q.touch) return !1;
			var t=this.getTopMenu();
			if('click'!=t.P.openAction) return !0;
			var i=t.ZI;
			return !(!i || !oi(i).isVisible());
		},
		Mu:function(t, i) {
			var e=this.getItem(t);
			if(e && (this.UI=null, this.ZI && e.submenu!=this.ZI && this.xu(!0), this.type.YI(e) && !this.config.hidden)) {
				var s=this.JI(e);
				if(!this.isItemEnabled(t)) return;
				s.show(i, {pos:this.P.subMenuPos}), s.wu=this.P.id, this.ZI=e.submenu;
			}
		},
		disableItem:function(t) {
			var i=this.getMenu(t);
			i && i.tb(t, !0);
		},
		enableItem:function(t) {
			var i=this.getMenu(t);
			i && i.tb(t, !1);
		},
		isItemEnabled:function(t) {
			var i=this.getMenu(t);
			if(i) return Gh.api.isItemEnabled.apply(i, arguments);
		},
		QI:function(t, i) {
			var e=this.data;
			e.XI[t]!=i && (e.XI[t]=i, e.filter(function(t) {return !e.XI[t.id];}), this.resize());
		},
		hideItem:function(t) {
			var i=this.getMenu(t);
			i && i.QI(t, !0);
		},
		showItem:function(t) {
			var i=this.getMenu(t);
			if(i) return i.QI(t, !1), Gh.api.showItem.call(i, t);
		},
		xu:function(t) {
			if(this.ZI) {
				var i=oi(this.ZI);
				i.xu && i.xu(t), !t && i.Gn || (i.hide(), this.ZI=null);
			}
		},
		KI:function(t) {
			var i={
				view:'submenu',
				data:this.type.YI(t)
			}, e=this.getTopMenu().P.submenuConfig;
			e && H.extend(i, e, !0);
			var s=this.getMenuItem(t.id);
			s && s.config && H.extend(i, s.config, !0);
			var n=si(i);
			return this.Bt.push(n), n.wu=this, n.P.id;
		},
		yu:function(t, i, e) {
			var s=this.getItem(t);
			return 'Separator'!=s.$template && 'Spacer'!=s.$template && this.isItemEnabled(t)?t:(t=this.getNextId(t, e) || null) && t!=i?this.yu(t, i, e):i;
		},
		$skin:function() {Gh.api.$skin.call(this), this.type.height=Li.menuHeight;},
		defaults:{
			scroll:'',
			layout:'x',
			mouseEventDelay:100,
			subMenuPos:'bottom'
		}
	}), Co={
		api:ko,
		view:H.protoUI(ko, Gh.view)
	}, $o={
		name:'submenu',
		$init:function() {
			this.$t=l(this.tA), (this.$t.Ht=this).attachEvent('onMouseOut', function(t) {'click'!=this.getTopMenu().P.openAction && (this.UI || this.Gn || !t.relatedTarget || this.hide());}), this.attachEvent('onMouseMoving', function() {this.wu && (oi(this.wu).UI= !0);}), this.attachEvent('onBeforeShow', function() {this.getTopMenu().LI && this.sizeToContent && !this.isVisible() && this.sizeToContent();}), this.tt.setAttribute('role', 'menu');
		},
		$skin:function() {Co.api.$skin.call(this), th.api.$skin.call(this), this.type.height=Li.menuHeight;},
		tA:{
			$getSize:function(t, i) {
				var e=1*this.Ht.P.height, s=1*this.Ht.P.width, n=Co.api.$getSize.call(this.Ht, t, i);
				return this.Ht.P.height=e, this.Ht.P.width=s, n;
			},
			$setSize:function(t, i) {this.Ht.P.scroll && (this.Ht.An.style.height=i+'px');},
			destructor:function() {this.Ht=null;}
		},
		body_setter:function() {},
		getChildViews:function() {return [];},
		defaults:{
			width:150,
			subMenuPos:'right',
			layout:'y',
			autoheight:!0
		},
		type:{
			height:Li.menuHeight,
			subsign:!0
		}
	}, Do={
		api:$o,
		view:H.protoUI($o, Co.view, th.view)
	}, Io={
		name:'sidemenu',
		defaults:{
			animate:!0,
			position:'left',
			width:200,
			borderless:!0
		},
		$init:function() {this.$view.className+=' webix_sidemenu';},
		$skin:function() {th.api.$skin.call(this), this.defaults.padding=0;},
		position_setter:function(t) {
			var i=this.P.position;
			return i && Mt(this.$view, ' webix_sidemenu_'+i), yt(this.$view, ' webix_sidemenu_'+t), t;
		},
		$getSize:function() {
			var t=ie.api.$getSize.apply(this, arguments);
			return this.iA=t;
		},
		$setSize:function(t, i) {Hi.api.$setSize.call(this, t, i), t=this.me-2*this.P.padding, i=this.ge-2*this.P.padding, this.Oi.style.padding=this.P.padding+'px', this.dn.style.display='none', this.An.style.height=i+'px', this.$t.$setSize(t, i);},
		show:function() {
			if(!this.callEvent('onBeforeShow', arguments)) return !1;
			this.P.hidden= !1, this.Vt.style.zIndex=_i(this.P.zIndex), (this.P.modal || this.Fn) && (this.vn(!0), this.Fn=null), this.Vt.style.display='block', this.ye(), this.P.position && this.Zt(), this.Hn=1, k(function() {this.Hn=0;}, this, [], q.touch?400:100), this.config.autofocus && (this.Rn=Mi.getFocus(), Mi.setFocus(this)), -1==ii.kt.find(this) && ii.kt.push(this), this.callEvent('onShow', []);
		},
		Zt:function(t) {
			var i, e, s, n, h, r=0, o=0, a={};
			this.$view.style.position='fixed', s=document.documentElement.offsetWidth, n=document.documentElement.offsetHeight, i=this.iA[0] || s, e=this.iA[2] || n, 'top'==(h=this.P.position)?i=s:'right'==h?(e=n, r=s-i):'bottom'==h?(i=s, o=n-e):e=n, a={
				left:r,
				top:o,
				width:i,
				height:e,
				maxWidth:s,
				maxHeight:n
			}, 'function'== typeof this.P.state && this.P.state.call(this, a), this.eA=a, this.$setSize(a.width, a.height), void 0===t && this.sA()?(Mt(this.$view, 'webix_animate'), this.Ok[this.P.position].beforeShow.call(this, a), k(function() {yt(this.$view, 'webix_animate', !0);}, this, null, 1), k(function() {this.Ok[this.P.position].show.call(this, a);}, this, null, 10)):('right'===this.P.position && (a.left=a.right?s-a.width-a.right:s-a.width), this.setPosition(a.left, a.top));
		},
		eA:{},
		sA:function() {return Ni.isSupported() && this.P.animate && !(q.isIE && -1!=navigator.appVersion.indexOf('MSIE 9'));},
		hidden_setter:function(t) {return t?this.hide():this.show(), !!t;},
		Ok:{
			left:{
				beforeShow:function(t) {this.$view.style.left=-t.width+'px', this.$view.style.top=t.top+'px';},
				show:function(t) {this.$view.style.left=t.left?t.left+'px':'0px';},
				hide:function(t) {this.$view.style.left=-t.width+'px';}
			},
			right:{
				beforeShow:function(t) {this.$view.style.left='auto', this.$view.style.right=-t.width+'px', this.$view.style.top=t.top+'px';},
				show:function(t) {this.$view.style.right=t.right?t.right+'px':'0px';},
				hide:function(t) {this.$view.style.right=-t.width+'px';}
			},
			top:{
				beforeShow:function(t) {this.setPosition(t.left, t.top), this.$view.style.height='0px', this.An.style.height='0px';},
				show:function(t) {this.$view.style.height=t.height+'px', this.An.style.height=t.height+'px';},
				hide:function() {this.$view.style.height='0px', this.An.style.height='0px';}
			},
			bottom:{
				beforeShow:function(t) {
					this.$view.style.left=t.left+'px', this.$view.style.top='auto';
					var i=t.bottom!=undefined?t.bottom:t.maxHeight-t.top-t.height;
					this.$view.style.bottom=i+'px', this.$view.style.height='0px';
				},
				show:function(t) {this.$view.style.height=t.height+'px';},
				hide:function() {this.$view.style.height='0px';}
			}
		},
		jn:function() {
			var t=document.documentElement.offsetWidth, i=document.documentElement.offsetHeight;
			if(this.sA() && t==this.eA.maxWidth && i==this.eA.maxHeight) {
				this.Ok[this.P.position].hide.call(this, this.eA);
				var e=Zt(this.$view, q.transitionEnd, S(function() {this.Nn(), Qt(e);}, this));
			} else this.Nn();
		}
	}, Ao=(H.protoUI(Io, th.view), {
		name:'sidebar',
		defaults:{
			type:'sideBar',
			activeTitle:!0,
			select:!0,
			scroll:!1,
			collapsed:!1,
			collapsedWidth:44,
			position:'left',
			width:250,
			mouseEventDelay:10
		},
		$skin:function() {this.defaults.titleHeight=Li.sidebarTitleHeight;},
		$init:function(t) {this.$view.className+=' webix_sidebar', this.$ready.push(this.nA), this.$ready.push(this.hA), this.data.Br=function(t) {t.data?t.menu=_(t.data):t.item && (t.menu=_(t.item.length?t.item:[t.item]));}, t.multiselect= !1;},
		on_context:{},
		on_mouse_move:{},
		nA:function() {
			this.rA=this.config.width, this.attachEvent('onBeforeOpen', function(t) {
				if(!this.config.multipleOpen) for(var i=this.getOpenItems(), e=0; e<i.length; e++) this.getParentId(t)==this.getParentId(i[e]) && this.close(i[e]);
				return !this.config.collapsed;
			}), this.attachEvent('onItemClick', function(t, i, e) {
				var s=this.getPopup();
				s && !s.config.hidden && (i.showpopup=s.config.id), q.touch && this.oA(t, e);
			}), this.attachEvent('onBeforeSelect', function(t) {return !this.getItem(t).$count && (this.clearCss('webix_sidebar_selected'), !0);}), this.attachEvent('onAfterSelect', function(t) {this.aA(this, t, !Li.sidebarMarkAll), this.getPopup().uA(t);}), this.attachEvent('onAfterUnSelect', function() {this.clearCss('webix_sidebar_selected');}), this.attachEvent('onMouseMove', function(t, i, e) {this.oA(t, e);}), this.attachEvent('onMouseOut', function() {this.config.collapsed && (this.getPopup().masterId=null);}), this.config.collapsed && this.collapse();
		},
		oA:function(t, i) {
			if(this.config.collapsed) {
				var e=this.getPopup();
				e && (this.cA(t, e), this.fA(t, e), e.masterId=t, e.show(i, {
					x:'left'==this.config.position?this.config.collapsedWidth:-e.config.width,
					y:-1
				}));
			}
		},
		cA:function(t, i) {
			var e=i.getBody().getChildViews()[0];
			e && i.masterId!=t && (e.parse(this.getItem(t)), this.getSelectedId()==t?yt(e.$view, 'webix_selected', !0):Mt(e.$view, 'webix_selected'));
		},
		fA:function(t, i) {
			var e=i.getBody().getChildViews()[1];
			if(e && i.masterId!=t) {
				this.exists(i.masterId) && this.getItem(i.masterId).menu && this.updateItem(i.masterId, {menu:e.data.serialize()}), e.clearCss('webix_sidebar_selected'), e.unselectAll();
				var s=_(this.getItem(t).menu || []);
				if(s.length) {
					e.show(), e.data.importData(s);
					var n=this.getSelectedId();
					e.exists(n)?e.select(n):n && this.aA(e, n);
				} else e.hide(), e.data.clearAll();
			}
		},
		hA:function() {
			var e, n=this, s=n.config;
			if(s.popup && (e=oi(s.popup)), !e) {
				var t='left'==s.position?'webix_sidebar_popup_left':'webix_sidebar_popup_right', i='left'==s.position?'right':'left', h=function(t) {
					var i='wxi-angle-'+('left'==s.position?'right':'left');
					return (t.submenu || t.data || t.item?'<div class="webix_icon '+i+'"></div>':'')+t.value;
				}, r=s.css?' '+s.css:'', o={
					view:'popup',
					css:'webix_sidebar_popup '+t+r,
					autofit:!1,
					width:this.rA-this.config.collapsedWidth,
					borderless:!0,
					padding:0,
					body:{
						rows:[{
							view:'template',
							borderless:!0,
							css:'webix_sidebar_popup_title',
							template:'#value#',
							height:this.config.titleHeight+2,
							onClick:{
								webix_template:function() {
									var t=this.getValues().id;
									n.getItem(t).$count || n.select(t);
								}
							}
						}, {
							view:'menu',
							submenu:'data',
							layout:'y',
							subMenuPos:i,
							select:!0,
							borderless:!0,
							autoheight:!0,
							css:'webix_sidebar_popup_list '+t+r,
							template:h,
							type:{subsign:!1},
							submenuConfig:{
								padding:0,
								subMenuPos:i,
								template:h,
								select:!0,
								type:{subsign:!1},
								css:'webix_sidebar_popup_list '+t+r,
								on:{
									onShow:function() {
										this.clearCss('webix_sidebar_selected'), this.unselectAll();
										var t=n.getSelectedId();
										t && this.exists(t)?this.select(t):t && n.aA(this, t);
									},
									onBeforeSelect:function(t) {if(this.getSubMenu(t)) return !1;},
									onAfterSelect:function(t) {
										for(var i=n.getPopup().queryView({view:'menu'}), e=n.getParentId(t); e;) {
											var s=i.getMenu(e);
											s && (s.unselectAll(), n.aA(s, t)), e=n.getParentId(e);
										}
										n.aA(this, t);
									}
								}
							},
							on:{
								onBeforeSelect:function(t) {if(this.getSubMenu(t)) return !1;},
								onMenuItemClick:function(t) {this.getSubMenu(t) || n.select(t);}
							}
						}]
					}
				};
				H.extend(o, s.popup || {}, !0), (e=si(o)).uA=function(t) {
					if(n.config.collapsed && 1==n.getItem(t).$level) {
						var i=e.getBody().getChildViews()[0];
						i && yt(i.$view, 'webix_selected', !0);
					}
				}, e.queryView({view:'menu'}).qI= !0;
			}
			e.attachEvent('onBeforeShow', function() {return s.collapsed;}), this.Bt=[e], s.popupId=e.config.id, Kt(document.body, 'mousemove', function(t) {
				var i=t.target;
				e.config.hidden || e.$view.contains(i) || this.$view.firstChild.contains(i) || e.queryView({view:'menu'}).ZI || e.hide();
			}, {bind:this});
		},
		aA:function(i, e, s) {
			var n='webix_sidebar_selected';
			i.data.each(function(t) {!this.lA(e, t.id) || s && '0'!=this.getParentId(t.id)?i.hasCss(t.id, n) && i.removeCss(t.id, n):i.addCss(t.id, n);}, this);
		},
		lA:function(t, i) {
			var e=this.getParentId(t);
			return i==e || !!e && this.lA(e, i);
		},
		getPopup:function() {return oi(this.config.popupId);},
		position_setter:function(t) {
			var i=t, e='left'==t?'right':'left';
			Mt(this.$view, 'webix_sidebar_'+e), yt(this.$view, 'webix_sidebar_'+i, !0);
			var s=this.getPopup();
			if(s) {
				var n=s.$view;
				Mt(n, 'webix_sidebar_popup_'+e), yt(n, 'webix_sidebar_popup_'+i, !0);
			}
			return t;
		},
		select:function(t) {t && ($(t) && (t=t.pop()), go.api.select.call(this, t));},
		selectAll:function() {},
		collapse:function() {this.define('collapsed', !0);},
		expand:function() {this.define('collapsed', !1);},
		toggle:function() {
			var t=!this.config.collapsed;
			this.define('collapsed', t);
		},
		collapsed_setter:function(t) {
			var i;
			return t?(i=this.config.collapsedWidth, this.closeAll(), this.type.collapsed= !0, Mt(this.$view, 'webix_sidebar_expanded')):(i=this.rA, this.type.collapsed= !1, yt(this.$view, 'webix_sidebar_expanded', !0)), this.define('width', i), this.resize(), t;
		},
		getState:function() {
			var t={collapsed:this.config.collapsed};
			return H.extend(t, rs.getState.call(this)), t;
		},
		setState:function(t) {rs.setState.call(this, t), this.define('collapsed', t.collapsed);}
	});
	ti(go.view, {
		name:'sideBar',
		height:'auto',
		template:function(t, i) {return i.collapsed?i.icon(t, i):i.arrow(t, i)+i.icon(t, i)+'<span>'+t.value+'</span>';},
		arrow:function(t) {
			for(var i='', e=1; e<=t.$level; e++) {
				if(e==t.$level && t.$count) i+='<span class=\''+('webix_sidebar_dir_icon webix_icon '+('wxi-angle-'+(t.open?'down':'left')))+'\'></span>';
			}
			return i;
		},
		icon:function(t) {
			var i='';
			return 2<t.$level && (i='style="padding-left:'+40*(t.$level-2)+'px"'), t.icon?'<span class=\'webix_icon webix_sidebar_icon '+t.icon+'\' '+i+'></span>':'<span '+i+'></span>';
		}
	});
	H.protoUI(Ao, go.view), H.protoUI({name:'context'}, ee, th.view);
	var To={
		name:'contextmenu',
		GI:!0,
		$init:function(t) {t.submenuConfig && H.extend(t, t.submenuConfig);}
	}, Fo=(H.protoUI(To, ee, Do.view), {
		name:'treetable',
		$init:function() {
			for(var t in H.extend(this.data, ls, !0), H.extend(this.type, vs), H.extend(this, us, !0), os) this.on_click[t] || (this.on_click[t]=this.dA(os[t]));
			this.type.treetable=Yt('{common.space()}{common.icon()} {common.folder()}'), this.type.treecheckbox=function(t) {return t.indeterminate && !t.nocheckbox?'<div class=\'webix_tree_checkbox webix_indeterminate\'></div>':vs.checkbox.apply(this, arguments);}, this.data.provideApi(this, !0), this.Vt.setAttribute('role', 'treegrid');
		},
		Yo:!1,
		dA:function(e) {return function(t, i) {return i=i.row, e.call(this, t, i);};},
		Wo:function(t) {for(var i=this.P.prerender?t.source:[t.start], e=0; e<i.length; e++) this.close(i[e]);},
		getState:function() {
			var t=pe.getState.call(this);
			return H.extend(t, rs.getState.call(this)), t;
		},
		setState:function(t) {rs.setState.call(this, t) && pe.setState.call(this, t);},
		clipboard_setter:function(t) {return H.extend(this.Kn, ds), hs.clipboard_setter.call(this, t);},
		sl:function(t, i) {
			for(var e=0; e<t.start; e++) {
				var s=this.data.order[e];
				s && 1!=this.getItem(s).$level && t.start--;
			}
			return zr.api.sl.call(this, t, i);
		}
	}), Vo=(H.protoUI(Fo, rs, fs, as, zr.view), {
		name:'filter',
		$init:function(t) {t.mode=t.mode || 'number', this.P.conditions=t.conditions, this.P.mode=this.mode_setter(t.mode), delete t.mode, t.rows=this.vA(t), this.$ready.push(this.kC);},
		$onLoad:function(t, i) {return this.DI(t, i);},
		DI:function(t, i) {
			var e=this, s=this.gI || this.queryView('list');
			s.data.driver=i;
			var n=[], h={};
			if('function'== typeof t.serialize?(t.data && 'DataStore'==t.data.name && (t=t.data), t.each(function(t) {return e._A(t, n, h);})):i.getRecords(t).forEach(function(t) {return e._A(t, n, h);}), s.clearAll(), s.parse(n), this.gI) {
				var r=this.P.value.includes;
				this.pA(), this.mA(r);
			}
			return !0;
		},
		_A:function(t, i, e) {
			var s=t[this.P.field];
			e[s] || (e[s]= !0, i.push(_(t)));
		},
		kC:function() {
			var t=this;
			this.gI=this.queryView('list'), this.ov=this.queryView('toggle'), this.Ao=this.queryView('richselect'), this.yI=this.queryView({batch:this.bA}), this.gI.data.provideApi(this, !0), this.gI.data.attachEvent('onSyncApply', function() {return t.DI(t.gI, t.gI.data.driver);}), this.setValue(this.P.value, !0);
		},
		mode_setter:function(t) {
			if(this.gA[t], this.wA=this.xA(this.P.conditions, t), this.yI) {
				var i=this.Ao.getList();
				i.clearAll(), i.parse(this.wA), this.Ao.config.value='', this.Ao.setValue(this.wA[0].id);
			} else this.bA=this.wA[0].batch;
			return t;
		},
		vA:function(t) {
			var e=this, i=this.yA(t.inputs);
			return [{
				visibleBatch:this.bA,
				cols:[{
					view:'richselect',
					value:this.wA[0].id,
					width:160,
					options:this.wA,
					on:{onChange:function(t) {e.MA(t), e.applyFilter();}}
				}].concat(s(i))
			}, {
				view:'toggle',
				batch:'includes',
				onLabel:I.combo.unselectAll,
				offLabel:I.combo.selectAll,
				value:!0,
				on:{onItemClick:function() {e.SA(e.ov.getValue()), e.callEvent('onChange', []);}}
			}, {
				view:'list',
				batch:'includes',
				css:'webix_multilist',
				autoheight:!0,
				borderless:!0,
				yCount:5,
				type:'checklist',
				template:t.template || '#'.concat(t.field, '#'),
				on:{
					onItemClick:function(t) {
						var i=e.gI.getItem(t);
						e.gI.updateItem(t, {$checked:!i.$checked}), e.P.value.includes=e.kA(), e.CA(e.ov, e.Ig()), e.callEvent('onChange', []);
					}
				}
			}];
		},
		yA:function(t) {
			var i=this;
			t=t || Object.keys(this.li);
			for(var e=0; e<t.length; e++) if(this.li[t[e]]) {
				if(t[e]=_(this.li[t[e]]), t[e].on) {
					var s=t[e].on;
					for(var n in s) s[n]=function() {return i.applyFilter();};
				}
			} else t[e] && t[e].batch;
			return t;
		},
		li:{
			text:{
				view:'text',
				batch:'text',
				on:{onTimedKeyPress:!0}
			},
			datepicker:{
				view:'datepicker',
				batch:'datepicker',
				on:{onChange:!0}
			},
			daterangepicker:{
				view:'daterangepicker',
				batch:'daterangepicker',
				on:{onChange:!0}
			},
			none:{
				view:'spacer',
				batch:'none'
			}
		},
		$A:{
			number:ln.number,
			text:ln.text,
			date:{
				greater:{
					batch:'datepicker',
					handler:ln.date.greater
				},
				less:{
					batch:'datepicker',
					handler:ln.date.less
				},
				greaterOrEqual:{
					batch:'datepicker',
					handler:ln.date.greaterOrEqual
				},
				lessOrEqual:{
					batch:'datepicker',
					handler:ln.date.lessOrEqual
				},
				equal:{
					batch:'datepicker',
					handler:ln.date.equal
				},
				notEqual:{
					batch:'datepicker',
					handler:ln.date.notEqual
				},
				between:{
					batch:'daterangepicker',
					handler:ln.date.between
				},
				notBetween:{
					batch:'daterangepicker',
					handler:ln.date.notBetween
				}
			}
		},
		gA:{
			number:['greater', 'less', 'greaterOrEqual', 'lessOrEqual', 'equal', 'notEqual', 'contains', 'notContains'],
			text:['contains', 'notContains', 'equal', 'notEqual', 'beginsWith', 'notBeginsWith', 'endsWith', 'notEndsWith'],
			date:['greater', 'less', 'greaterOrEqual', 'lessOrEqual', 'equal', 'notEqual', 'between', 'notBetween']
		},
		xA:function(t, i) {
			t=t || this.gA[i];
			for(var e=[], s=0; s<t.length; s++) {
				var n=this.DA(t[s], i);
				e.push(n);
			}
			return e;
		},
		DA:function(t, i) {
			if(t && 'function'== typeof t.handler) return t;
			if(this.$A[i][t]) {
				var e={
					id:t,
					value:I.filter[t]
				}, s='function'== typeof this.$A[i][t]?{
					batch:'text',
					handler:this.$A[i][t]
				}:this.$A[i][t];
				return H.extend(e, s, !0);
			}
			return null;
		},
		IA:function(t) {for(var i=0; i<this.wA.length; i++) if(this.wA[i].id==t) return this.wA[i];},
		kA:function() {
			var i=this, e=[];
			return this.gI.data.each(function(t) {t.$checked && e.push(t[i.P.field]);}), e.length==this.gI.count()?null:e;
		},
		getValue:function() {
			return {
				condition:{
					filter:this.yI.getValue?this.yI.getValue() || '':null,
					type:this.Ao.getValue()
				},
				includes:this.kA()
			};
		},
		Ig:function() {
			for(var t=this.gI.data.order, i=0; i<t.length; i++) if(!this.getItem(t[i]).$checked) return !1;
			return !0;
		},
		$compareValue:function(t, i) {
			if(!t || t.condition.type!==i.condition.type || t.condition.filter!==i.condition.filter) return !1;
			if(t.includes && i.includes) {
				if(t.includes.length!==i.includes.length) return !1;
				for(var e={}, s=0; s<t.includes.length; s++) e[t.includes[s]]= !0;
				for(var n=0; n<i.includes.length; n++) if(!e[i.includes[n]]) return !1;
				return !0;
			}
			return t.includes===i.includes;
		},
		setValue:function(t, i) {
			if(t=this.$prepareValue(t), !this.$compareValue(this.P.value, t)) {
				var e=t.condition, s=t.includes;
				this.MA(e.type), this.CA(this.yI, e.filter), this.CA(this.Ao, e.type), this.pA(), this.mA(s), this.CA(this.ov, this.Ig()), this.P.value=t, i || this.callEvent('onChange');
			}
		},
		mA:function(i) {
			var e=this.P.field;
			this.gI.data.each(function(t) {t.$checked=!i || -1!=i.indexOf(t[e]);}), this.gI.refresh();
		},
		CA:function(t, i) {
			t.setValue && (t.blockEvent(), t.setValue(i), t.unblockEvent());
		},
		$prepareValue:function(t) {
			return (t=t || {}).condition=t.condition || {
				filter:'',
				type:this.wA[0].id
			}, t.includes=t.includes || null, t;
		},
		pA:function() {
			var i=this.yI.getValue?this.yI.getValue() || '':null;
			if(''===i) this.gI.filter(); else {
				var e=this.P.field, s=this.IA(this.Ao.getValue()).handler;
				this.gI.filter(function(t) {return s(t[e], i);});
			}
			this.showBatch('includes', !!this.gI.count());
		},
		MA:function(t) {
			var i=this.IA(t).batch;
			i!=this.bA && (this.bA=i, this.yI=this.queryView({batch:i}), this.yI.setValue && this.yI.setValue(''), this.yI.getParentView().showBatch(i));
		},
		applyFilter:function() {this.pA(), this.CA(this.ov, !0), this.SA(!0), this.callEvent('onChange');},
		SA:function(i) {this.gI.data.each(function(t) {t.$checked=i;}), this.gI.refresh(), this.P.value=this.getValue();},
		getFilterFunction:function() {
			var e=this.P.field, s='date'==this.P.mode, t=this.getValue(), n=t.includes, h=t.condition, r=this.IA(h.type).handler;
			return n && s && (n=n.map(function(t) {return t.valueOf();})), function(t) {
				var i=t[e];
				return n?-1!=n.indexOf(s?i.valueOf():i):''===h.filter || r(i, h.filter);
			};
		}
	}), zo=(H.protoUI(Vo, Ht, kn.view), H.proto({
		name:'DataRecord',
		isVisible:function() {return !0;},
		$init:function(t) {
			this.data=t || {};
			var i=t && t.id?t.id:V();
			this.P={id:i}, si.views[i]=this;
		},
		getValues:function() {return this.data;},
		setValues:function(t, i) {this.data=i?H.extend(this.data, t, !0):t, this.callEvent('onChange', [t]);},
		refresh:function() {this.callEvent('onBindRequest');}
	}, g, Ai, Ht, Si)), Bo=H.proto({
		name:'DataValue',
		isVisible:function() {return !0;},
		$init:function(t) {
			t && !R(t.value) || (this.data=t || '');
			var i=t && t.id?t.id:V();
			this.P={id:i}, si.views[i]=this;
		},
		setValue:function(t) {this.data=t, this.callEvent('onChange', [t]);},
		getValue:function() {return this.data;},
		refresh:function() {this.callEvent('onBindRequest');}
	}, g, Ai), Ho=H.proto({
		name:'TreeCollection',
		$init:function() {H.extend(this.data, ls, !0), this.data.provideApi(this, !0), H.extend(this, us, !0);}
	}, as, Ch);
	H.Date=sn, H.Number=nn, H.promise=m, H.DataCollection=Ch, H.DataRecord=zo, H.DataValue=Bo, H.TreeCollection=Ho, H.AtomDataLoader=Ht, H.AtomRender=qt, H.AutoScroll=Gt, H.AutoTooltip=Pi, H.BaseBind=Ai, H.BindSource=Ii, H.Canvas=ji, H.CodeParser=Rt, H.CollectionBind=Ci, H.ContextHelper=ee, H.CopyPaste=ne, H.CustomPrint=he, H.CustomScroll=re, H.DataMarks=oe, H.DataMove=ae, H.DataLoader=_e, H.DataState=pe, H.DataStore=ve, H.Destruction=ki, H.DragControl=Xi, H.DragItem=me, H.DragOrder=be, H.EditAbility=Se, H.EventSystem=g, H.FlexLayout=ke, H.Group=De, H.GroupMethods=Ce, H.GroupStore=$e, H.HTMLOptions=Ie, H.HtmlMap=Ae, H.IdSpace=Te, H.KeysNavigation=Fe, H.MapCollection=Ve, H.Modality=Zi, H.MouseEvents=ze, H.Movable=Ji, H.NavigationButtons=Be, H.OverlayBox=He, H.PagingAbility=Re, H.ProgressBar=Ee, H.RecordBind=Di, H.RenderStack=Pe, H.ResizeArea=Qi, H.SingleRender=Ri, H.Scrollable=je, H.SelectionModel=Ne, H.Settings=Si, H.Sparklines=ss, H.TablePaste=hs, H.TooltipControl=ai, H.Touch=Yi, H.TreeAPI=rs, H.TreeClick=os, H.TreeDataLoader=as, H.TreeDataMove=us, H.TreeRenderStack=cs, H.TreeStateCheckbox=fs, H.TreeStore=ls, H.TreeTablePaste=ds, H.TreeType=vs, H.UIManager=Mi, H.Undo=ge, H.UploadDriver=_s, H.ValidateCollection=ps, H.ValidateData=ce, H.ValueBind=$i, H.Values=ms, H.VirtualRenderStack=bs, H.VRenderStack=gs, H.html=vn, H.skin=Ui, H.debug=function Oo(t) {if(t) if('object'!==M(t)) o={events:!0}; else for(var i in t) o[i]=t[i]; else o={};}, H.i18n=I, H.ready=pi, H.env=q, H.color=Le, H.csv=ns, H.clipbuffer=se, H.storage=rn, H.template=Yt, H.type=ti, H.editors=Me, H.animate=Ni, H.print=function(t, i) {
		var e=oi(t);
		e && e.$printView && (e=e.$printView()), e && (e.callEvent && e.callEvent('onBeforePrint', [i]), function s(t) {yt(document.body, 'webix_print'), t.docHeader && fn('Header', t), t.docFooter && fn('Footer', t), ut('@media print { @page{ size:'+t.paper+' '+t.mode+';margin-top:'+t.margin.top+'px;margin-bottom:'+t.margin.bottom+'px;margin-right:'+t.margin.right+'px;margin-left:'+t.margin.left+'px;}}', 'print');}(i=function n(t) {
			(t=t || {}).paper=on[(t.paper || '').toLowerCase()] || 'A4', t.mode=un[t.mode]?t.mode:'portrait', t.fit=an[t.fit]?t.fit:'page', t.scroll=t.scroll || !1, t.size=cn[t.paper], t.margin=t.margin || 0===t.margin?t.margin:{};
			var i=isNaN(1*t.margin)?q.printMargin:t.margin;
			return t.margin={
				top:t.margin.top || 0===t.margin.top?t.margin.top:i,
				bottom:t.margin.bottom || 0===t.margin.bottom?t.margin.bottom:i,
				right:t.margin.right || 0===t.margin.right?t.margin.right:i,
				left:t.margin.left || 0===t.margin.left?t.margin.left:i
			}, t;
		}(i)), e.$customPrint && !0!==e.$customPrint(i) || function r(t, i) {
			var e=t.$view.cloneNode(!0), s=t.$view.getElementsByTagName('canvas');
			if(s.length) for(var n=s.length-1; 0<=n; n--) {
				var h=e.getElementsByTagName('canvas')[n].getContext('2d');
				h.drawImage(s[n], 0, 0);
			}
			vt(e, i.docFooter, document.body), yt(e, 'webix_ui_print'), !i.scroll && (t.tt && t.data && t.data.pull || t.getBody) && yt(e, 'webix_print_noscroll'), window.print(), dt(e);
		}(e, i), function h(t) {Mt(document.body, 'webix_print'), ct('print'), t.docHeader && dt(t.docHeader), t.docFooter && dt(t.docFooter);}(i));
	}, H.rules=ue, H.filters=ln, H.patterns=dn, H.fullscreen=yi, H.name='core', H.level_in=function Wo() {0;}, H.level_out=function Uo() {0;}, H.clone=l, H.copy=_,H.single=function Yo(t) {
		var i=null;
		return function() {return i || (i=new t({})), i.AA && i.AA.apply(i, arguments), i;};
	},H.bind=S,H.exec=p,H.wrap=function qo(i, e) {
		return i?function() {
			var t=i.apply(this, arguments);
			return e.apply(this, arguments), t;
		}:e;
	},H.isUndefined=R,H.delay=k,H.once=a,H.uid=V,H.toNode=C,H.toFunctor=v,H.isArray=$,H.isDate=D,H.TA=b,H.FA=x,H.VA=Jt,H.zA=Kt,H.event=Zt,H.eventRemove=Qt,H.callEvent=y,H.attachEvent=A,H.detachEvent=T,H.blockEvent=function() {return w.blockEvent();},H.unblockEvent=function() {return w.unblockEvent();},H.mapEvent=function(t) {return w.mapEvent(t);},H.hasEvent=function(t) {return w.hasEvent(t);},H.stringify=c,H.toPNG=function(s, n) {
		var h=m.defer();
		return Ft(q.cdn+'/extras/html2canvas-1.0.min.js').then(function() {
			'string'== typeof n && (n={filename:n}), n=n || {};
			var t=oi(s);
			if(t && t.$exportView && (t=t.$exportView(n)), !t) return h.reject(ws);
			var i=t?t.$view:C(s), e=(n.filename || 'Data')+'.png';
			return window.html2canvas(i, {
				background:'#FFF',
				logging:!1,
				useCORS:!0
			}).then(function(t) {
				var i=function(t) {!1!==n.download && kt(t, e), h.resolve(t);};
				t.msToBlob?i(t.msToBlob()):t.toBlob(i, 'image/png');
			}), h;
		});
	},H.toCSV=function(t, i) {
		i=i || {};
		var e=oi(t);
		if(e && e.$exportView && (e=e.$exportView(i)), !e) return m.reject(ws);
		i.export_mode='csv', i.filterHTML= !0;
		var s=Ss(e, i), n=function o(t) {return ns.stringify(t);}(ks(e, i, s)), h=(i.filename || 'Data')+'.csv', r=new Blob(['\ufeff'+n], {type:'text/csv'});
		return !1!==i.download && kt(r, h), m.resolve(r);
	},H.toPDF=$s,H.toExcel=Bs,H.alert=function Go() {
		var t=Ks.apply(this, arguments);
		return t.type=t.type || 'alert', qs(t);
	},H.confirm=Zs,H.modalbox=Qs,H.prompt=function Xo() {
		var t=Ks.apply(this, arguments);
		return t.type=t.type || 'prompt', t.input=t.input || {}, Js(t);
	},H.message=tn,H.editStop=function Jo() {y('onEditEnd', []);},H.ajax=B,H.DataDriver=zt,H.dp=le,H.DataProcessor=de,H.remote=bn,H.require=Ft,H.proxy=W,H.send=function Ko(t, i, e, s) {
		var n=ft('FORM', {
			target:s || '_self',
			action:t,
			method:e || 'POST'
		}, '');
		for(var h in i) {
			var r=ft('INPUT', {
				type:'hidden',
				name:h,
				value:i[h]
			}, '');
			n.appendChild(r);
		}
		n.style.display='none', document.body.appendChild(n), n.submit(), document.body.removeChild(n);
	},H.ui=si,H.$$=oi,Object.defineProperty(H, 'BA', {value:!0});
});
