'use strict';
!function() {
	window.isl = {
		cfg:{},
		protocol:{},
		locale:{
			type:'en',
			login:{
				loginId:'LoginID',
				pwd:'Passward',
				privacy:'User Privacy Policy'
			},
			pagings:[ {
				id:50,
				value:'50 items'
			}, {
				id:1e3,
				value:'1000 items'
			}, {
				id:-1,
				value:'All items'
			} ],
			unsyncPagings:[ {
				id:50,
				value:'50 items'
			}, {
				id:500,
				value:'500 items'
			}, {
				id:5e3,
				value:'5000 items'
			} ],
			s:'',
			alert:{
				success:'Operation success',
				node:'Select a node first',
				record:'Select a record first'
			},
			failure:{
				title:'Operation failed',
				noUrl:'Undefined URL',
				del:'Can not delete this item<br>Probably referenced by another item',
				pointTag:'At least ONE selection in each Tag-type',
				vs:'At least ONE selection in Status',
				content:'Invalid content',
				pwd:'Password mismatch',
				change:'Old password mismatch or save failed',
				login:'Login failed<br>LoginID or Password Error',
				error:'Error',
				cause:'Caused by',
				noData:'Data load failed',
				sockjs:'Real-Time data load failed',
				select:'No item selected',
				ref:"Referenced by another configuration",
				save:'Save failed',
				template:"Invalid template content",
				pos:'Can not move the node',
				duplicate_save:'Duplicate item',
				duplicate_loginId:'Duplicate loginID',
				duplicate:'Duplicate selected',
				unsupported:'Unsupported action',
				command:'Command execute failed',
				privilege:'No privilege',
				found:'Invalid item',
				type:'Type mismatch',
				fileType:'Unsupported file type',
				fileFound:'File not found',
				uploadSize:'Over size',
				upload:'Upload failed',
				settle:'Settlement operation fail<br>At least one tenant meter readout',
				appInfo:"Device info invalid",
				dump:'Backup failed',
				restore:'Restore failed',
				request:'Request failed',
				request0:'Request timeout',
				request100:'Opareted object does not exist',
				request301:'Operation not supported',
				request302:'No operation permissions',
				request303:'Protocol exception',
				request304:'Operations are in progress, please wait',
				system:'Can not edit system item',
				start:'Schedule start failure',
				stop:'Schedule stop failure',
				newAlarm:'Alarm detected',
				e:"Unknown error",
				e0:"Server connect failed",
				e400:"Operation failed",
				e401:"Session timeout",
				e403:"Forbidden",
				e404:"Not found",
				e406:'Request not acceptable',
				e408:'Request timeout',
				e428:'Precondition required',
				e500:'Internal server error',
				e501:'Software authorization error',
				e502:'Server maintenance',
				x:'Information：',
				x7:'Dongle Key not found',
				x9:'License file lost',
				x22:'Hardware info mismatch',
				x1100:'License file mismatch',
				x1300:'License expired<br>Please contact Enenetlogix Repersentative',
				x1400:'Feature not include in current license'
			},
			confirm:{
				click:[ "Cancel", "OK" ],
				action:"Confirm to proceed?",
				save:"Confirm to save?",
				remove:"Confirm to delete?<br>(Can NOT Undo)",
				restore:"Confirm to restore?<br>System will restart after finished<br>All unsaved data will be lost",
				upload:"Confirm to upload?",
				report:"Confirm to run report?",
				schedule:'Confirm to change schedule status?',
				rescan:"Confirm to reload?",
				sort:"Sort all items?",
				pointReplace:'Confirm to replace point?<br>The old point will be DELETED!'
			},
			base:{
				gridpg:[ "Total ", " ", "(", ") ", "Loading..." ],
				confirm:[ "Cancel", "OK" ],
				second:'sec'
			},
			fileSize:["B", "KB", "MB", "GB", "TB"],
			timeFormats:['hh', 'dd', 't', 'w', 'ss', 'mm', 'yyyy', 'yyyy-MM-dd', 'hh:mm:ss'],
			timeUnit:   ['', '', '', '', '', '', ''],
			options:{
				tr:[ {
					id:0,
					value:'0'
				}, {
					id:1,
					value:'1'
				} ],
				status:[ {
					id:1,
					value:"Enable"
				}, {
					id:0,
					value:"Disable"
				} ],
				ustatus:[ {
					id:1,
					value:"Enabled"
				}, {
					id:0,
					value:"Disabled"
				}, {
					id:2,
					value:"Locked"
				}, {
					id:3,
					value:"Blocked"
				} ],
				rs:[ {
					id:0,
					value:"Stopped"
				}, {
					id:1,
					value:"Running"
				} ],
				have:[ {
					id:0,
					value:"No"
				}, {
					id:1,
					value:"Yes"
				} ],
				agree:[ {
					id:1,
					value:'Agree'
				}, {
					id:0,
					value:'Disagress'
				} ],
				bool:[ {
					id:1,
					value:"Yes"
				}, {
					id:0,
					value:"No"
				} ],
				bool_s:[ {
					id:'true',
					value:"Yes"
				}, {
					id:'false',
					value:"No"
				} ],
				ctrl:[ {
					id:1,
					value:"On"
				}, {
					id:0,
					value:"Off"
				} ],
				lc:[{
					id:"en",
					value:"English"
				}, {
					id:"zh",
					value:"中文"
				}]
			},
			button:{
				add:"Add",
				edit:"Edit",
				del:"Delete",
				save:"Save",
				apply:"Apply",
				search:'Search',
				download:'Download',
				refresh:'Refresh',
				test:'Test',
				undo:'Reset',
				close:'Close',
				bind:'Binding',
				actions:'Message Alert',
				open:'Open',
				location:'Locating',
				sort:'Sort',
				backup:'Backup',
				upload:'Upload',
				login:'Login',
				preview:'Preview',
				copy:'Copy',
				saveAs:'SaveAs',
				create:'Build',
				pdf:'Export PDF',
				csv:'Export CSV',
				excel:'Export Excel',
				compare:'Compare',
				replace:'Replace',
				swap:'Swap',
				time_backward:'Time backward',
				time_forward:'Time forward',
				override:'Set',
				release:'Relinquish',
				start:'Start',
				stop:'Stop',
				left:'Move out',
				right:'Move in',
				up:'Move up',
				down:'Move down',
				paging:'Paging size',
				sbackward:"First",
				backward:"Previous",
				forward:"Next",
				sforward:"Last",
				levelTop:'Move top',
				levelUp:'Move up',
				levelDown:'Move down',
				levelBottom:'Move bottom',
				previous:'Previous',
				next:'Next'
			},
			weather:{
				update:'Update: ',
				wind:'',
				tmp:{
					unit:'℃',
					v:'Tmp: '
				},
				hum:'Hum: ',
				rain:'Rain: ',
				load:'Weather info loading...',
				vis:'VIS(km)',
				api:'AQI: '
			},
			protocol:{
				BACnet:{
					channel:{
						name:'Channel Name',
						interval:'Scan Interval(s)',
						subscribedProperties:'Subscribe Properties',
						reload:'Reload'
					},
					device:{
						name:'Device Name',
						lowLimit:'Instance Low Limit',
						highLimit:'Instance High Limit'
					}
				},
				TnRtu:{
					channel:{
						name:'Channel Name',
						port:'TCP Port',
						idType:'Identification',
						pref:'Server ID',
						interval:'Timeout(s)',
						password:'Password',
						charset:'Charset',
						options:{
							idType:[{
								id:0,
								value:"Device IP"
							},{
								id:1,
								value:"Project ID"
							}]
						}
					},
					device:{
						name:'Device Name',
						identity:'Unique ID',
						group:'Point Group'
					},
					info:{
						title:'Current Status(1min)',
						lastUpdate:'Last Update',
						lastTimeSet:'Last Sync',
						cpu:'CPU(%)',
						mem:'Memory(%)',
						sdSize:'SD Capacity',
						sdRemain:'SD Remain',
						fileCount:'File Count',
						firstRecTime:'First Data Time',
						lastRecTime:'Last Data Time',
						recCount:'Data Count',
						uptimes:'Reboot Times'
					},
					sub:{
						group:'Point Group'
					}
				},
				OpcDa:{
					channel:{
						name:'Channel Name',
						host:'Host',
						user:'User',
						password:'Password',
						async:'Async-Poll',
						batchSize:'Batch Size',
						timeout:'Timeout(s)',
						interval:'Reconnect Interval(s)'
					},
					device:{
						name:'Item Group',
						identity:'Group Info'
					}
				},
				OpcUa:{
					channel:{
						name:'Channel Name',
						host:'Endpoint',
						user:'User Name',
						password:'Password',
						batchSize:'Batch Size',
						timeout:'Timeout(s)',
						interval:'Reconnect Interval(s)'
					},
					device:{
						name:'Node',
						identity:'Identifier'
					}
				},
				Mqtt:{
					channel:{
						name:'Channel Name',
						user:'User',
						password:'Password',
						subscribeTopic:'Sub Topic',
						subscribeAck:'Sub Ack',
						publishTopic:'Pub Topic',
						publishAck:'Pub Ack',
						willDeclare:'Will Declare',
						willTopic:'Will Topic',
						connDeclare:'Online Declare',
						connTopic:'Online Topic',
						syncInterval:'Sync Interval(s)',
						connectionTimeout:'Timeout(s)',
						keepAliveInterval:'Heartbeat(s)',
						handlerId:'Data Format',
						maxCacheSize:'Offline Data',
						options:{
							qos:[{
								id:0,
								value:'[0] At most once'
							},{
								id:1,
								value:'[1] At least once'
							},{
								id:2,
								value:'[2] Exactly once'
							}]
						}
					},
					device:{
						name:'Point Group',
						identity:'Group Identity'
					}
				},
				Modbus:{
					channel:{
						name:'Channel Name',
						host:'Host',
						masterType:"Master Type",
						masterPort:"Master Port",
						slaveType:"Slave Type",
						slavePort:"Slave Port",
						csBatchSize:"CS Load Batch",
						isBatchSize:"IS Load Batch",
						hrBatchSize:"HR Load Batch",
						irBatchSize:"IR Load Batch",
						retries:'Retries',
						timeout:'Timeout(ms)',
						interval:'Reconnect Interval(s)'
					},
					device:{
						name:'Device Name',
						slaveId:'Device ID',
						virtual:'Is Virtual Group'
					}
				},
				Dtp:{
					channel:{
						name:'Dtp Site',
						remoteCID:'Site ID',
						timeout:'Timeout(s)',

						ip:"Site Address",
						port:"Site Port",
						password:"Password"
					},
					device:{
						name:'Data Source',
						identity:'Source Type'
					}
				},
				SHEnergy:{
					channel:{
						name:'Building',
						buildingID:'Building ID',
						timeout:'Timeout(s)',
						host:"Send host",
						port:"Send port",
						heartbeatInterval:"Heartbeat(s)",
						dataInterval:"Data interval(s)",
						aes:"AES"
					}
				}
			},
			app:{
				menu:{
					icon:'Icon',
					iconColor:'Color',
					openType:'Open Type',
					closeable:'Tab Close',
					output:'OutputData',
					frame:'Layout',
					name:'Menu Text',
					dataType:'Data Calculation',
					minax:'Max&Min',
					avg:'Average',
					area:'Enhance',
					nullItem:'Null Item',
					timeSpan:'Time Span',
					newTimeSpan:'Add',
					compare:'Time Span of Comparison',
					element:{
						name:'Portlet',
						type:'Type',
						id:'Content',
						url:'URL',
						width:'Width',
						height:'Height',
						gravity:'Gravity',
						og:'Scale'
					},
					device:'Enabled',
					hall:'All(Hours)',
					mall:'All(Minutes)',
					hour:'',
					minute:'',
					toolbar:'Toolbar',
					options:{
						dataType:[ {
							id:0,
							value:'Summary'
						}, {
							id:1,
							value:'Average'
						}, {
							id:10,
							value:'Splitly'
						} ],
						timeSpan:[ {
							id:0,
							value:'Day'
						}, {
							id:3,
							value:'Week'
						}, {
							id:1,
							value:'Month'
						}, {
							id:2,
							value:'Year'
						}, {
							id:-1,
							value:'Hour'
						} ],
						cType:[ {
							id:1,
							value:'Graphic',
							icon:'mdi mdi-image-size-select-actual'
						}, {
							id:2,
							value:'History Chart',
							icon:'mdi mdi-finance'
						}, {
							id:3,
							value:'Real-Time Chart',
							icon:'mdi mdi-chart-timeline'
						}, {
							id:4,
							value:'URL',
							icon:'mdi mdi-web'
						} ],
						openType:[ {
							id:0,
							value:'Tab'
						}, {
							id:1,
							value:'Page'
						}, {
							id:2,
							value:'Window'
						} ],
						device:[{
							id:0,
							value:'All'
						}, {
							id:1,
							value:'PC'
						}, {
							id:2,
							value:'Phone'
						}, {
							id:3,
							value:'Pad'
						}]
					}
				},
				right:{
					urls:'URI',
					name:'Name',
					status:'Status'
				},
				user:{
					changePwd:'Account Setting',
					menus:'Available Menu',
					groups:'Access Limit Group',
					pcMenu:'PC Main Page',
					phoneMenu:'Phone Main Page',
					padMenu:'Pad Main Page',
					name:'Name',
					loginId:'LoginID',
					oldPwd:'Old Password',
					newPwd:'New Password',
					pwdRpt:'Password Repeat',
					mobile:'Mobile',
					email:'Email',
					status:'Status'
				},
				group:{
					name:'Group Name',
					options:{
						level:[ {
							id:0,
							value:'Forbidden'
						}, {
							id:1,
							value:'Read-Only'
						}, {
							id:3,
							value:'Configurable'
						} ]
					}
				},
				eventlog:{
					user:'User',
					time:'Time',
					action:'Action',
					source:'Source',
					params:'Params',
					content:'Content'
				},
				backup:{
					fileName:'File Name',
					size:'Size',
					lastModified:'Time',
					restore:'Restore from this file',
					select:'Backup option',
					db:'Database'
				},
				property:{
					name:'Property Name',
					value:'Property Value',
					time:'Time'
				},
				site:{
					title:'Project Name',
					company:'Company(Customer)',
					key:'Dongle Key',
					color:'Background Color',
					code:'Weather Code',
					maxPoint:'Point Count',
					soft:'Software Ver',
					limitTime:'Expire Date',
					createTime:'Create Time',
					user:'Last Modified',
					info:'Hardware Info',
					remark:'Remark',
					status:'Status',
					functions:'Feature',
					property:'Property'
				},
				point:{
					config:'Point Configuration',
					variable:'ISL Variable',
					name:'Point Name',
					dscp:'Description',
					value:'Status & PV',
					time:'PV Update',
					timeout:'Timeout(s)',
					priority:'Priority',
					cls:'Point Class',
					kind:'Data Type',
					type:'Protocol Type',
					iteration:'Iteration',
					defined:'Tags defined',
					accessLevel:'Access Level',
					identity:'Identity',
					covLimit:'COV Limit',
					covInterval:'Data Interval(s)',
					cacheSize:'Cache Size',
					timeOffset:'Time Offset(s)',
					increment:'Increment',
					incLimit:'Inc/sec',
					multiple:'Multiple',
					settleDays:'Force Save(d)',
					lastModified:'Last Modified',
					dataSaved:'Data Saved',
					tags:'Display Text',
					hand:'Override',
					deleted:"Deleted Point ID",
					overflow:'Overflow',
					detail:'Detail Info',
					ref:'Referenced by',
					select:'Reference Point Select',
					property:'Property Name',
					propertyValue:'Property Value',
					options:{
						accessLevel:[ {
							id:-1,
							value:'System'
						}, {
							id:0,
							value:'Undefined'
						}, {
							id:3,
							value:'Read & Write'
						}, {
							id:1,
							value:'Read'
						}, {
							id:2,
							value:'Write'
						} ],
						cls:[{
							id:0,
							value:'Physical'
						}, {
							id:1,
							value:'Virtual'
						}, {
							id:2,
							value:'Forward'
						}],
						kind:[{
							id:0,
							value:'Accumulation'
						}, {
							id:1,
							value:'Float'
						}, {
							id:2,
							value:'Integer'
						}, {
							id:3,
							value:'Binary'
						}, {
							id:4,
							value:'String'
						}, {
							id:100,
							value:'Other'
						}]
					}
				},
				tag:{
					title:'Tag Definitaion',
					ref:'Tag',
					name:'Display Text',
					varName:'Variable Component',
					icon:'Icon',
					unit:'Unit',
					coef:'Value Tag Property',
					scale:'Scale',
					max:'Max Value',
					min:'Min Value',
					color:'Color',
					options:{
						type:[{
							id:1,
							value:"Root tag"
						},{
							id:3,
							value:"Root tag"
						},{
							id:5,
							value:"Root tag"
						},{
							id:11,
							value:"Location tag"
						},{
							id:13,
							value:"Device tag"
						},{
							id:15,
							value:"Value tag"
						}]
					}
				},
				valueStatus:{
					title:'Status Definitaion',
					color:'Color',
					bgcolor:'BG Color',
					compare:'Comparison',
					lowLimit:'Numeric',
					highLimit:'~',
					delay:'Delay(s)',
					icon:'Icon',
					text:'Status Name',
					legend:'Legend Text',
					line:'Chart Item',
					pos:'Value Text',
					type:'Type',
					showIn:'Display in',
					value:'Character',
					options:{
						textPos:[{
							id:1,
							value:'Above Item'
						}, {
							id:0,
							value:'Below Item'
						}],
						lineDash:[{
							id:1,
							value:'Dotted'
						}, {
							id:0,
							value:'Solid'
						}],
						compare:[ {
							id:0,
							value:'!='
						}, {
							id:1,
							value:'='
						}, {
							id:2,
							value:'>'
						}, {
							id:3,
							value:'>='
						}, {
							id:4,
							value:'<'
						}, {
							id:5,
							value:'<='
						}, {
							id:8,
							value:'Default'
						} ],
						showIn:[ {
							id:9,
							value:'None'
						}, {
							id:10,
							value:'All'
						}, {
							id:0,
							value:'Day Chart'
						}, {
							id:3,
							value:'Week Chart'
						}, {
							id:1,
							value:'Month Chart'
						}, {
							id:2,
							value:'Year Chart'
						}, {
							id:-1,
							value:'Hour Chart'
						} ],
						type:[{
							id:0,
							value:'Meaning of Value'
						}, {
							id:1,
							value:'Alarm Status'
						}]
					},
					tvst:'Operational Configuration'
				},
				alarmlog:{
					output:'Alarm Logs',
					point:'Point & Status',
					alarm:'Alarm Type',
					recovered:'Recovered',
					startTime:'Start Time',
					stopTime:'Stop Time'
				},
				script:{
					ref:'Script',
					name:'Name',
					dscp:'Description',
					type:'Trigger',
					content:'Content',
					options:{
						type:[ {
							id:1,
							value:'Change of Value'
						}, {
							id:2,
							value:'Schedule'
						} ]
					},
					error:{
						content:'Content could not be null'
					}
				},
				template:{
					ref:'Report',
					file:'Report Template',
					type:'Type',
					retention:'Retention(d)',
					bt:'Start Time',
					et:'End Time',
					upload:'Import Template...',
					outputFiles:'Report File',
					create:'Run Report'
				},
				sms:{
					ref:'SMS Service',
					name:'Alert Group',
					type:'Device Type',
					charset:'Chartset',
					port:'Serial Port',
					baud:'Baud',
					users:'Users',
					param:'Parameter',
					options:{
						type:[{
							id:1,
							value:'SiXin SMS Modem'
						}]
					}
				},
				email:{
					ref:'Email Service',
					name:'Alert Group',
					account:'SMTP Account',
					pwd:'SMTP Password',
					host:'SMTP Host',
					port:'SMTP Port',
					ssl:'SSL',
					users:'Users',
					success:'Success Text'
				},
				app:{
					ref:'App Service',
					name:'Alert Group',
					type:'Terminal Type',
					config:'Configuration',
					options:{
						type:[{
							id:10,
							value:'iOS'
						},{
							id:20,
							value:'Mi'
						},{
							id:30,
							value:'HUAWEI'
						}]
					}
				},
				jobs:{
					title:'Triggered Action',
					log:{
						user:'Operator',
						type:'Task Type',
						action:'Action',
						target:'Target',
						execTime:'Time',
						result:'Result',
						code:'Code'
					},
					options:{
						type:[ {
							id:80000,
							value:'Cloud Notification'
						}, {
							id:90000,
							value:'Backup|Restore'
						}, {
							id:72100000,
							value:'Script Execute'
						}, {
							id:72200000,
							value:'Report Output'
						}, {
							id:73100000,
							value:'SMS Notify'
						}, {
							id:73200000,
							value:'Email Notify'
						}, {
							id:73300000,
							value:'App Notify'
						}, {
							id:72701000,
							value:'Tenant Metering'
						} ],
						code:[ {
							id:0,
							value:'Processing'
						}, {
							id:1,
							value:'Success'
						}, {
							id:11,
							value:'Exception'
						}, {
							id:12,
							value:'Failed'
						} ]
					}
				},
				schedule:{
					name:'Name',
					dateRange:'Effective',
					timeRange:'Time Range',
					beginDate:"Begin date",
					endDate:"End date",
					operate:'Operate',
					dscp:'Descripption',
					period:'Processing Time',
					date:"Cycle Date",
					time:"Cycle Time",
					cron:'CRON set',
					duration:'Duration(s)',
					alltime:'All times',
					sun1:'Sun',
					mon1:'Mon',
					tus1:'Tus',
					wed1:'Wed',
					thu1:'Thu',
					fri1:'Fri',
					sat1:'Sat',
					sun:'Sun',
					mon:'Mon',
					tus:'Tus',
					wed:'Wed',
					thu:'Thu',
					fri:'Fri',
					sat:'Sat',
					exception:'Exception',
					startTime:'Start time',
					stopTime:'Stop time',
					from:'From ',
					to:'to',
					options:{
						s:"s",
						each:"Every ",
						allYear:"Any year",
						allDay:"Any day",
						yearMonth:[ "Any month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Odd", "Even" ],
						monthDay:[ "Any week", "Week 1", "Week 2", "Week 3", "Week 4", "Last week", "Last day", "", "Last 7 days" ],
						hour:[ "hour", "", "Any" ],
						minute:[ "min", "", "Any" ],
						second:[ "sec", "", "Any" ],
						hundredth:'ms'
					}
				},
				chart:{
					name:'Chart Name',
					type:'Chart Type',
					duration:'Duration Chart',
					incLine:'AccumLine',
					compare:'Comparison',
					initType:'Data Calculation',
					output:'Chart Data',
					range:'Data Range',
					group:'Data Group',
					lowLimit:'Min Value',
					highLimit:'Max Value',
					marks:'Status',
					data:{
						label3:"Left Y axis",
						label6:"Top X axis",
						label7:"Data type",
						label13:"Left Y axis",
						label16:"Top X axis",
						label17:"Data type",
						label11:"Data type",
					},
					ref:{
						label3:"Right Y axis",
						label6:"Bottom X axis",
						label7:'-',
						label13:"Right Y axis",
						label16:"Bottom X axis",
						label17:'-',
						label11:'-'
					},
					nodata:'No data',
					options:{
						type:[ {
							id:3,
							value:'History Trend',
							icon:'mdi mdi-chart-areaspline'
						}, {
							id:6,
							value:'History Bar',
							icon:'mdi mdi-chart-bar-stacked mdi-rotate-90'
						}, {
							id:7,
							value:'History Ring',
							icon:'mdi mdi-chart-arc'
						}, {
							id:13,
							value:'Real-Time Trend',
							icon:'mdi mdi-chart-line'
						}, {
							id:16,
							value:'Real-Time Bar',
							icon:'mdi mdi-chart-gantt'
						}, {
							id:17,
							value:'Real-Time Ring',
							icon:'mdi mdi-chart-donut-variant'
						}, {
							id:11,
							value:'Gauge',
							icon:'mdi mdi-gauge-full'
						} ]
					}
				},
				graphic:{
					ref:'Graphic',
					name:'Name',
					import:'Import Graphic',
					export:'Export Graphic',
					backgroud:'Background',
					bgNull:'',
					select:'Open Graphic Configuration',
					elements:'Element Group',
					template:'Save to Template',
					Stage:'Stage',
					Group:'Group',
					Rect:'Rect',
					Ellipse:'Ellipse',
					Text:'Text',
					Star:'Regular polygon',
					Arc:'Arc',
					Line:'Free polygon',
					Arrow:'Free Line',
					Image:'Image',

					animation:' Animation',
					pic:' Picture',

					property:{
						section:{
							layout:'Layout',
							style:'Style',
							text:'Text',
							interactive:'Interactive'
						},

						name:'Name',
						x:'X Coord',
						y:'Y Coord',
						width:'Width',
						height:'Height',
						rotation:'Rotation',
						radiusX:'Radius-X',
						radiusY:'Radius-Y',
						zoom:'Zoom',
						align:'Horizontal Align',
						verticalAlign:'Vertical Align',

						color:'Color',
						lineWidth:'Line Width',
						strokeWidth:'Border Width',
						stroke:'Border Color',
						fill:'Fill Color',
						cover:'Color Cover',
						status:'Status Text',
						image:'Backgroud',
						opacity:'Opacity',

						numPoints:'Corner Count',
						angle:'Angle',
						oddRadius:'Odd Radius',
						evenRadius:'Even Radius',
						innerRadius:'Inner Radius',
						outerRadius:'Outer Radius',
						pointerWidth:'Arrow Width',
						pointerLength:'Arrow Length',

						fontFamily:'Font Family',
						fontSize:'Font Size',
						fontStyle:'Font Style',
						fontVariant:'Font Variant',
						lineHeight:'Line Height',
						textDecoration:'Decoration',
						wrap:'Wrap',
						ellipsis:'Ellipsis',
						lineJoin:'Line Join',
						cornerRadius:'Corner Radius',
						lineCap:'Line Cap',
						tension:'Tension',

						pointName:'ISL Variable',
						content:'Content',

						showVS:'Show Status',
						hideVS:'Hide Status',
						stopVS:'Stop Status',

						point:'Point Select',
						click:'On Click',
						clickCtrl:'Click Value Set'
					}
				},
				trendlog:{
					edit:'Data repair',
					time:'Data Time',
					value:'Value',
					type0:'Numeric Logs',
					type1:'String Logs'
				},
				tenant:{
					ref:'Tenant Metering',
					chart:'租户能耗图(月)',
					ident:'租户名',
					user:'关联用户',
					company:'公司名',
					phone:'联系电话',
					remark:'备注',
					status:'状态',
					upload:'上传报告模板',
					allreport:'全体能耗报告',
					allsettle:'全体结算',
					detail:'租户当月明细数据',
					addMeter:'添加能耗仪表',
					report:'租户能耗报告',
					rconfirm:'以当前抄表数据生成结算报告?',
					del:'清除租户信息',
					settle:'结算',
					sconfirm:'结算后不能再次以当前数据结算<br>确定以当前所有起止数据结算?',
					log:{
						title:'结算历史',
						time:'结算时间',
						user:'结算人',
						content:'结算内容'
					},
					output:'租户能耗明细数据'
				},
				metering:{
					name:'租户仪表信息',
					point:'关联点位',
					beginTime:'结算开始时间',
					beginValue:'结算开始止数',
					endTime:'最后抄表时间',
					endValue:'最后抄表止数',
					settleTime:'上次结算时间',
					coef:'数据系数',
					coefEdit:'设定数据系数',
					coefConfirm:'确定要设置数据系数?',
					manual:'手动抄表',
					mconfirm:'确定要手动更新最后的抄表止数?',
					time:'抄表时间',
					value:'抄表止数',
					user:'抄表人'
				},
				attendance:{
					point:{
						name:[{
							id:0,
							value:'正常'
						}, {
							id:1,
							value:'迟到'
						}, {
							id:2,
							value:'早退'
						}, {
							id:3,
							value:'打卡时间'
						}, {
							id:4,
							value:'考勤时段'
						}, {
							id:5,
							value:'未达标'
						}, {
							id:6,
							value:'达标'
						}, {
							id:7,
							value:'额外在岗'
						}, {
							id:8,
							value:'非在岗'
						},{
							id:9,
							value:'工时考核\n达标要求\n'
						},{
							id:10,
							value:'小时'
						}]
					},
					time:'Time',
					user:'User',
					target:'Location/Device',
					type:'Type',
					code:'Result',
					options:{
						type:[{
							id:10,
							value:'Clock In'
						}, {
							id:11,
							value:'Clock Out'
						}],
						code10:[{
							id:0,
							value:'Standard'
						}, {
							id:1,
							value:'New Device'
						}]
					},
					menu:{
						options:{
							timeSpan:[{
								id:3,
								value:'Week'
							}, {
								id:1,
								value:'Month'
							}]
						}
					}
				},
				nfc:{
					uid:'UID',
					deleted:"Deleted",
					locationTags:'Location Tags',
					deviceTags:'Device Tags'
				}
			}
		}
	};
	webix.i18n.setLocale('en-US');
}();
webix['calendar']=webix.i18n.locales['en-US'].calendar;