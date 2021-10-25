"use strict";
webix.ready(function() {
	if (_fab.status === 500) {
		webix.ui(isl.window({
			id:"error_detail_win",
			icon:"mdi mdi-alert-decagram",
			height:400,
			title:isl.locale.failure["e" + _fab.status],
			move:false,
			body:{
				width:600,
				view:"form",
				id:"errorForm",
				elements:[ {
					name:"error",
					readonly:true,
					label:isl.locale.failure.error,
					view:"textarea",
					value:_fab.error
				}, {
					name:"cause",
					readonly:true,
					label:isl.locale.failure.cause,
					view:"textarea",
					value:_fab.cause
				} ]
			}
		})).show();
	} else if (_fab.status === 501) {
		isl.get("/sitecode", _fab.error, function(jdata, error) {
			let msg = isl.locale.failure["x" + error] || isl.locale.failure.x + error;
			webix.alert({
				type:"alert-error",
				text:isl.locale.failure.e503 + "<br><br>" + msg,
				callback:isl.reLogin
			});
		});
	} else {
		webix.alert({
			type:"alert-error",
			text:isl.locale.failure["e" + _fab.status],
			callback:_fab.status===401?isl.reLogin:null
		});
	}
});