'use strict';
(function() {
	let messenger=[{
		app:'messenger',
		url:'App'
	}, {
		app:'messenger',
		url:'Email'
	}, {
		app:'messenger',
		url:'Sms'
	}], job=[{
		app:'io',
		url:'Script'
	}, {
		app:'report',
		url:'Template'
	}, {
		app:'maintenance',
		url:'Tenant'
	}];
	isl['notify']={
		isJob:false,
		getPageConfig:function(typeIndex, cfg, pageType) {
			let type=messenger[typeIndex].url.toLowerCase(), url=isl.app(messenger[typeIndex].app)+'/'+messenger[typeIndex].url, saveFun=function() {
				let o=isl.getFormValues(type+'_form');
				if(o) {
					o['users']=$$(type+'_user_tree').getChecked();
					isl.save(type+'_grid', o, this);
				}
			}, grid={
				id:type+'_grid',
				view:'datatable',
				leftSplit:1,
				filter:true,
				columns:cfg.columns,
				url:url,
				insert:true,
				update:true,
				delet:true,
				on:{
					onSelectChange:function() {
						let newData=this.getSelectedItem(), ef=$$(type+'_form'), ut=$$(type+'_user_tree');
						ef.clear();
						ut.uncheckAll();
						if(newData) {
							ef.setValues(newData);
							ef.enable();
							ut.setValue(newData.users);
							$$(type+'_form_copybt').enable();
						} else {
							$$(type+'_form_copybt').disable();
						}
						$$(type+'_form_savebt').disable();
					}
				}
			}, form={
				id:type+'_form',
				view:'form',
				minWidth:300,
				elements:cfg.elements,
				on:{
					onChange:function() {
						$$(type+'_form_savebt').enable();
					}
				}
			}, user_tree={
				id:type+'_user_tree',
				view:'tree',
				type:'lineTree',
				minWidth:300,
				title:isl.locale.app[type].users,
				filter:true,
				checkbox:true,
				info:false,
				on:{
					onItemCheck:function(id, v, e) {
						if(e) {
							$$(type+'_form_savebt').enable();
						}
					}
				},
				url:url+'/users'
			};
			if(pageType==='m') {
				grid.on['onItemClick']=isl.showTitleViewOnItemClick(type, 'name');
				webix.ui(isl.panels({
					id:'main', //width:window.parent.document.documentElement.clientWidth,
					keepViews:true,
					cells:[grid, isl.getTitleViews(type, 'main', [{
						id:type+'_config',
						rows:[{
							responsive:type+'_config',
							cols:[form, user_tree]
						}],
						buttons:[{
							id:type+'_form_copybt',
							view:'icon',
							icon:'mdi mdi-file-multiple',
							tooltip:isl.locale.button.copy,
							disabled:true,
							click:saveFun
						}, {}, {
							id:type+'_form_savebt',
							view:'icon',
							icon:'mdi mdi-content-save',
							disabled:true,
							tooltip:isl.locale.button.save,
							click:saveFun
						}]
					}])]
				}));
				isl.setMobileAddAction(type+'_grid', type);
			} else if(pageType==='p') {
				form['fitHeight']=false;
				form['scroll']=false;
				grid['minWidth']=650;
				webix.ui(isl.panels({
					id:'main',
					fillspace:true,
					rows:[{
						responsive:'main',
						cols:[grid, {
							id:type+'_config',
							minWidth:300,
							rows:[{
								responsive:type+'_config',
								cols:[form, user_tree]
							}],
							buttons:[{
								id:type+'_form_copybt',
								view:'icon',
								icon:'mdi mdi-file-multiple',
								tooltip:isl.locale.button.copy,
								disabled:true,
								click:saveFun
							}, {}, {
								id:type+'_form_savebt',
								view:'icon',
								icon:'mdi mdi-content-save',
								disabled:true,
								tooltip:isl.locale.button.save,
								click:saveFun
							}]
						}]
					}]
				}));
			} else if(pageType==='c') {
				form['fitHeight']=false;
				form['scroll']=false;
				webix.ui(isl.panels({
					id:'main',
					fillspace:true,
					cols:[grid, {
						width:300,
						rows:[form, user_tree],
						buttons:[{
							id:type+'_form_copybt',
							view:'icon',
							icon:'mdi mdi-file-multiple',
							tooltip:isl.locale.button.copy,
							disabled:true,
							click:saveFun
						}, {}, {
							id:type+'_form_savebt',
							view:'icon',
							icon:'mdi mdi-content-save',
							disabled:true,
							tooltip:isl.locale.button.save,
							click:saveFun
						}]
					}]
				}));
			}
		},
		getCheckConfigs:function(resizer, isJob, formId) {
			isl.notify.isJob=isJob;
			let cols=[], array=isl.notify.isJob?job:messenger;
			for(let i=0, l=array.length; i<l; i++) {
				let url=array[i].url, key=url.toLowerCase();
				cols.push({
					view:'datatable',
					id:key+'_datatable',
					checkbox:true,
					filter:true,
					info:false,
					minWidth:210,
					minHeight:200,
					columns:[{
						id:'value',
						fillspace:1,
						header:isl.locale.app[key].ref
					}],
					url:isl.app(array[i].app)+'/'+url+'/combo',
					on:{
						onItemClick:function(r) {
							let item=this.getItem(r);
							item[key+'_datatable_cbx']= !item[key+'_datatable_cbx'];
							this.updateItem(r.row, item, 'false');
							let formSaveBt=$$(formId+'_savebt');
							if(formSaveBt) {
								formSaveBt.enable();
							}
						},
						onLoadError:function(text, data, ajax) {
							if(ajax.status!==503) {
								isl.ajaxError(text, data, ajax);
							}
						},
						onCheck:function() {
							let formSaveBt=$$(formId+'_savebt');
							if(formSaveBt) {
								formSaveBt.enable();
							}
						}
					}
				});
				if(resizer && i<l-1) {
					cols.push({view:'resizer'});
				}
			}
			return cols;
		},
		check:function(obj) {
			let array=isl.notify.isJob?job:messenger;
			for(let i=0, l=array.length; i<l; i++) {
				let app=array[i].url.toLowerCase(), dt=$$(app+'_datatable');
				if(dt) {
					if(obj) {
						dt.setValue(obj[app]);
					} else {
						dt.setValue(null);
					}
				}
			}
		},
		getChecked:function() {
			let result={}, array=isl.notify.isJob?job:messenger;
			for(let i=0, l=array.length; i<l; i++) {
				let key=array[i].url.toLowerCase(), checkedItems=null, dt=$$(key+'_datatable');
				if(dt) {
					dt.data.each(function(item) {
						if(item[key+'_datatable_cbx']) {
							if(webix.isUndefined(item.type) || item.type===3) {
								if(!checkedItems) {
									checkedItems=[];
								}
								checkedItems.push(item.id);
							}
						}
					});
				}
				if(checkedItems) {
					result[key]=checkedItems;
				}
			}
			return result;
		}
	};
})();