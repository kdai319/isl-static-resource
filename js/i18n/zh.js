'use strict';
!function() {
	window.isl = {
		cfg:{},
		protocol:{},
		locale:{
			type:'zh',
			login:{
				loginId:'账号',
				pwd:'密码',
				privacy:'用户隐私政策'
			},
			pagings:[ {
				id:50,
				value:'每页50项'
			}, {
				id:1e3,
				value:'每页1000项'
			}, {
				id:-1,
				value:'全部'
			} ],
			unsyncPagings:[ {
				id:50,
				value:'每页50项'
			}, {
				id:500,
				value:'每页500项'
			}, {
				id:5e3,
				value:'每页5000项'
			} ],
			s:'',
			alert:{
				success:'操作成功!',
				node:'请先选择一个节点',
				record:'请先选择一行记录'
			},
			failure:{
				title:'操作失败',
				noUrl:'未指定请求URL',
				del:'无法删除该数据项<br>可能由于其包含子数据项或有数据关联此数据项',
				pointTag:'每个标签类别至少选择一项',
				vs:'至少选择一项值状态',
				content:'内容不合法',
				pwd:'两次输入密码不相同',
				change:'旧密码错误或修改失败',
				login:'登录失败<br>账户或密码错误',
				error:'错误原因',
				cause:'堆栈信息',
				noData:'未能加载数据',
				sockjs:'实时数据加载失败',
				select:'没有选择操作对象',
				save:'保存信息失败',
				template:"模板内容不合法",
				ref:"该项正被其他配置引用",
				pos:'无法移动到该位置',
				duplicate_save:'不能保存重复项',
				duplicate_loginId:'登录账号重复',
				duplicate:'选项重复',
				unsupported:'不支持的操作',
				command:'命令执行失败',
				privilege:'无权限执行此操作',
				found:'无效操作对象',
				type:'类型不匹配',
				fileType:'文件类型不支持',
				fileFound:'文件未找到',
				uploadSize:'上传文件超过限制大小',
				upload:'文件上传失败',
				settle:'租户能耗结算失败<br>至少要一个以上的抄表数据',
				appInfo:"App注册信息不合法",
				dump:'创建备份失败',
				restore:'恢复数据失败',
				request:'通讯请求异常',
				request0:'通讯超时',
				request100:'操作对象不存在',
				request301:'操作方式不支持',
				request302:'无对象操作权限',
				request303:'设备通讯协议异常',
				request304:'等待上一次操作完成',
				system:'不能修改系统项',
				start:'启动任务失败',
				stop:'停止任务失败',
				newAlarm:'侦测到新报警状态',
				e:'未知错误',
				e0:'服务器连接失败',
				e400:'服务器处理数据失败',
				e401:'用户Session失效',
				e403:'无权限执行此操作',
				e404:'访问地址无效',
				e406:'请求无法处理',
				e408:'请求超时',
				e428:'前置条件未满足',
				e500:'服务器内部错误',
				e501:'软件授权验证失败',
				e502:'服务器维护中',
				x:'异常信息：',
				x7:'未侦测到授权设备',
				x9:'未找到授权文件',
				x22:'硬件信息不匹配',
				x1100:'设备信息不匹配',
				x1300:'授权已过期<br>请联系您的购买渠道获取新的授权',
				x1400:'当前授权不包含该功能'
			},
			confirm:{
				click:[ '取消', '确定' ],
				action:'是否要执行该操作?',
				save:'是否确定保存?',
				remove:'删除操作无法撤销<br>是否执行?',
				restore:'确定执行数据恢复?<br>系统将在数据恢复后重启，所有未保存的数据将丢失',
				upload:'确定上传该文件?',
				report:'确定以当前数据生成报告文件?',
				schedule:'改变当前任务状态?',
				rescan:"确定重新扫描设备?",
				sort:'确定自动排序当前数据?',
				pointReplace:'确定以此点位替换该标签组合的旧点位？<br>原点位将被删除，且配置将无法复原'
			},
			base:{
				gridpg:[ '共 ', ' 项', ' (', ') ', '数量统计中...' ],
				confirm:[ '取消', '确定' ],
				second:'秒'
			},
			fileSize:["B", "KB", "MB", "GB", "TB"],
			timeFormats:['hh', 'dd', 't', 'w', 'ss', 'mm', 'yyyy', 'yyyy-MM-dd', 'hh:mm:ss'],
			timeUnit:   ['点', '号', '', '', '秒', '分', '年'],
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
					value:'启用'
				}, {
					id:0,
					value:'禁用'
				} ],
				ustatus:[ {
					id:1,
					value:'启用'
				}, {
					id:0,
					value:'禁用'
				}, {
					id:2,
					value:'锁定'
				}, {
					id:3,
					value:'废除'
				} ],
				rs:[ {
					id:0,
					value:'停止'
				}, {
					id:1,
					value:'运行'
				} ],
				have:[ {
					id:0,
					value:'无'
				}, {
					id:1,
					value:'有'
				} ],
				agree:[ {
					id:1,
					value:'同意'
				}, {
					id:0,
					value:'不同意'
				} ],
				bool:[ {
					id:1,
					value:'是'
				}, {
					id:0,
					value:'否'
				} ],
				bool_s:[ {
					id:'true',
					value:'是'
				}, {
					id:'false',
					value:'否'
				} ],
				ctrl:[ {
					id:1,
					value:'开'
				}, {
					id:0,
					value:'关'
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
				add:'增加',
				edit:'编辑',
				del:'删除',
				save:'保存',
				apply:'应用',
				search:'搜索',
				download:'下载',
				refresh:'刷新',
				test:'测试',
				undo:'重置',
				close:'关闭',
				bind:'引用关系',
				actions:'通知方式',
				open:'打开',
				location:'定位显示',
				sort:'自动排序',
				backup:'备份数据',
				upload:'上传',
				login:'登录',
				preview:'预览',
				copy:'复制',
				saveAs:'另存为',
				create:'创建',
				pdf:'导出到PDF',
				csv:'导出到CSV',
				excel:'导出到Excel',
				compare:'对比',
				replace:'替换',
				swap:'交换',
				time_backward:'前一时间段',
				time_forward:'后一时间段',
				override:'手动设定',
				release:'释放控制',
				start:'启动',
				stop:'停止',
				left:'升级节点',
				right:'降级节点',
				up:'上移节点',
				down:'下移节点',
				paging:'分页大小',
				sbackward:'首页',
				backward:'上一页',
				forward:'下一页',
				sforward:'末页',
				levelTop:'上移至顶层',
				levelUp:'上移一层',
				levelDown:'下移一层',
				levelBottom:'下移至底层',
				previous:'前一项',
				next:'后一项'
			},
			weather:{
				update:'更新时间: ',
				wind:'',
				tmp:{
					unit:'℃',
					v:'温度: '
				},
				hum:'湿度: ',
				rain:'降雨量: ',
				load:'气象信息获取中...',
				vis:'能见度(公里)',
				api:'空气指数: '
			},
			protocol:{
				BACnet:{
					channel:{
						name:'BACnet通道名',
						interval:'设备检测(s)',
						subscribedProperties:'订阅属性',
						reload:'重新扫描'
					},
					device:{
						name:'BACnet设备名',
						lowLimit:'实例号下限',
						highLimit:'实例号上限'
					}
				},
				TnRtu:{
					channel:{
						name:'RTU通道名',
						port:'TCP端口',
						idType:'设备标识',
						pref:'平台ID',
						interval:'通讯超时(s)',
						password:'通讯密码',
						charset:'字符编码',
						options:{
							idType:[{
								id:0,
								value:"设备IP"
							},{
								id:1,
								value:"工程ID"
							}]
						}
					},
					device:{
						name:'RTU设备名',
						identity:'唯一标识',
						group:'点位组'
					},
					info:{
						title:'RTU状态(1分钟)',
						lastUpdate:'最后更新时间',
						lastTimeSet:'最后对时时间',
						cpu:'CPU利用率(%)',
						mem:'内存使用率(%)',
						sdSize:'SD卡总容量',
						sdRemain:'SD卡剩余容量',
						fileCount:'缓存文件数量',
						firstRecTime:'记录开始时间',
						lastRecTime:'记录结束时间',
						recCount:'记录数量',
						uptimes:'系统重启时间'
					},
					sub:{
						group:'点位分组'
					}
				},
				OpcDa:{
					channel:{
						name:'OPC-DA通道名',
						host:'服务器地址',
						user:'用户名',
						password:'密码',
						async:'异步模式',
						groupSize:'分组大小',
						timeout:'通讯超时(s)',
						interval:'重连间隔(s)'
					},
					device:{
						name:'OPC-DA点位组名',
						identity:'唯一标识'
					}
				},
				OpcUa:{
					channel:{
						name:'OPC-UA通道名',
						host:'端点',
						user:'用户名',
						password:'密码',
						groupSize:'分组大小',
						timeout:'通讯超时(s)',
						interval:'重连间隔(s)'
					},
					device:{
						name:'节点',
						identity:'唯一标识'
					}
				},
				Mqtt:{
					channel:{
						name:"MQTT通道名",
						user:'用户名',
						password:'密码',
						subscribeTopic:'订阅主题',
						subscribeAck:'回复确认',
						publishTopic:'发布主题',
						publishAck:'接收确认',
						willDeclare:'发布遗嘱',
						willTopic:'遗嘱主题',
						connDeclare:'上线确认',
						connTopic:'上线主题',
						syncInterval:'同步间隔(s)',
						connectionTimeout:'超时时间(s)',
						keepAliveInterval:'心跳间隔(s)',
						handlerId:'数据格式',
						maxCacheSize:'离线存储',
						options:{
							qos:[{
								id:0,
								value:'[0] 最多一次'
							},{
								id:1,
								value:'[1] 最少一次'
							},{
								id:2,
								value:'[2] 只有一次'
							}]
						}
					},
					device:{
						name:'MQTT点位组',
						identity:'分组唯一标识'
					}
				},
				Modbus:{
					channel:{
						name:'Modbus通道名',
						host:'通讯地址',
						masterType:"扫描方式",
						masterPort:"扫描端口",
						slaveType:"转发方式",
						slavePort:"转发端口",
						csBatchSize:"CS扫描量",
						isBatchSize:"IS扫描量",
						hrBatchSize:"HR扫描量",
						irBatchSize:"IR扫描量",
						retries:'重试次数',
						timeout:'通讯超时(ms)',
						interval:'重连间隔(s)'
					},
					device:{
						name:'Modbus设备名',
						slaveId:'设备ID',
						virtual:'虚拟点分组'
					}
				},
				Dtp:{
					channel:{
						name:'Dtp站点名',
						remoteCID:'站点ID',
						timeout:'通讯超时(s)',

						ip:"站点地址",
						port:"站点端口",
						password:"通讯密码"
					},
					device:{
						name:'数据来源',
						identity:'来源类型'
					}
				},
				SHEnergy:{
					channel:{
						name:'建筑通道名',
						buildingID:'站点ID',
						timeout:'通讯超时(s)',
						host:"接入地址",
						port:"接入端口",
						heartbeatInterval:"心跳间隔(s)",
						dataInterval:"数据间隔(s)",
						aes:"AES"
					}
				}
			},
			app:{
				menu:{
					icon:'菜单图标',
					iconColor:'图标颜色',
					openType:'打开方式',
					closeable:'可关闭',
					output:'统计数据',
					frame:'卡片布局',
					name:'菜单名称',
					dataType:'数据统计方式',
					minax:'最大最小值',
					avg:'平均值线',
					area:'显示增强',
					nullItem:'空值项目',
					timeSpan:'时间范围',
					newTimeSpan:'添加',
					compare:'对比时间',
					element:{
						name:'卡片位置',
						type:'卡片类型',
						id:'内容',
						url:'地址',
						width:'宽度',
						height:'高度',
						gravity:'缩小比例',
						og:'行列比例'
					},
					device:'显示设备',
					hall:'全部时间(小时)',
					mall:'全部时间(分钟)',
					hour:'点',
					minute:'分',
					toolbar:'功能栏',
					options:{
						dataType:[ {
							id:0,
							value:'叠加值'
						}, {
							id:1,
							value:'平均值'
						}, {
							id:10,
							value:'逐项值'
						} ],
						timeSpan:[ {
							id:0,
							value:'天'
						}, {
							id:3,
							value:'周'
						}, {
							id:1,
							value:'月'
						}, {
							id:2,
							value:'年'
						}, {
							id:-1,
							value:'小时'
						} ],
						cType:[ {
							id:1,
							value:'组态图',
							icon:'mdi mdi-image-size-select-actual'
						}, {
							id:2,
							value:'历史图',
							icon:'mdi mdi-finance'
						}, {
							id:3,
							value:'实时图',
							icon:'mdi mdi-chart-timeline'
						}, {
							id:4,
							value:'URL地址',
							icon:'mdi mdi-web'
						} ],
						openType:[ {
							id:0,
							value:'选项卡'
						}, {
							id:1,
							value:'浏览页'
						}, {
							id:2,
							value:'浮动窗'
						} ],
						device:[{
							id:0,
							value:'全部'
						}, {
							id:1,
							value:'电脑'
						}, {
							id:2,
							value:'手机'
						}, {
							id:3,
							value:'平板'
						}]
					}
				},
				right:{
					urls:'访问地址',
					name:'名称',
					status:'状态'
				},
				user:{
					changePwd:'密码修改',
					menus:'可使用菜单',
					groups:'访问限制组',
					pcMenu:'PC登录界面',
					phoneMenu:'手机登录界面',
					padMenu:'平板登录界面',
					name:'用户名',
					loginId:'登录账号',
					oldPwd:'登录密码',
					newPwd:'新密码',
					pwdRpt:'确认密码',
					mobile:'联系电话',
					email:'邮件地址',
					status:'状态'
				},
				group:{
					name:'访问限制名称',
					options:{
						level:[ {
							id:0,
							value:'禁止访问'
						}, {
							id:1,
							value:'只读'
						}, {
							id:3,
							value:'完全控制'
						} ]
					}
				},
				eventlog:{
					user:'操作者',
					time:'操作时间',
					action:'动作',
					source:'发起位置',
					params:'参数',
					content:'内容'
				},
				backup:{
					fileName:'文件名',
					size:'文件大小',
					lastModified:'时间',
					restore:'以此备份数据进行恢复',
					select:'选择备份库',
					db:'备份数据库名'
				},
				property:{
					name:'参数名',
					value:'参数值',
					time:'数据时间'
				},
				site:{
					title:'项目名',
					color:'显示颜色',
					key:'Dongle Key',
					company:'公司(客户)',
					code:'气象代码',
					maxPoint:'授权点位数',
					soft:'软件版本',
					limitTime:'授权时限',
					createTime:'创建时间',
					user:'最后修改人',
					info:'硬件信息',
					remark:'备注',
					status:'状态',
					functions:'授权功能',
					property:'配置属性'
				},
				point:{
					config:'点位配置',
					variable:'ISL变量名',
					name:'点位名',
					dscp:'描述',
					value:'状态 & 当前值',
					time:'当前值时间',
					timeout:'超时等待(s)',
					priority:'优先级',
					cls:'点位类型',
					kind:'数据类型',
					type:'协议类型',
					iteration:'搜索下级',
					defined:'标签已配置',
					accessLevel:'权限',
					identity:'识别标识',
					covLimit:'COV限值',
					covInterval:'数据间隔(s)',
					cacheSize:'缓冲大小',
					timeOffset:'偏移时间(s)',
					increment:'数据基数',
					incLimit:'每秒增量',
					multiple:'数据倍率',
					settleDays:'零点保存(d)',
					lastModified:'修改时间',
					dataSaved:'记录数据',
					tags:'点位标签',
					hand:'手动控制',
					deleted:"已删除的点位ID",
					overflow:'数据溢出',
					detail:'点位详细信息',
					ref:'引用依赖情况',
					select:'点位选择',
					property:'点位属性',
					propertyValue:'属性值',
					options:{
						accessLevel:[ {
							id:-1,
							value:'系统点位'
						}, {
							id:0,
							value:'未定义'
						}, {
							id:3,
							value:'读写'
						}, {
							id:1,
							value:'读'
						}, {
							id:2,
							value:'写'
						} ],
						cls:[{
							id:0,
							value:'物理点'
						}, {
							id:1,
							value:'虚拟点'
						}, {
							id:2,
							value:'转发点'
						}],
						kind:[{
							id:0,
							value:'累加值'
						}, {
							id:1,
							value:'浮点值'
						}, {
							id:2,
							value:'整数值'
						}, {
							id:3,
							value:'开关值'
						}, {
							id:4,
							value:'字符值'
						}, {
							id:100,
							value:'其他'
						}]
					}
				},
				tag:{
					title:'标签配置',
					ref:'标签',
					name:'标签显示名',
					varName:'标签变量名',
					icon:'标签图标',
					unit:'数据单位',
					coef:'数据标签配置项',
					scale:'数据精度',
					max:'最大设定值',
					min:'最小设定值',
					color:'标签颜色',
					options:{
						type:[{
							id:1,
							value:"根节点"
						},{
							id:3,
							value:"根节点"
						},{
							id:5,
							value:"根节点"
						},{
							id:11,
							value:"位置标签"
						},{
							id:13,
							value:"设备标签"
						},{
							id:15,
							value:"数据标签"
						}]
					}
				},
				valueStatus:{
					title:'值状态配置',
					color:'内容颜色',
					bgcolor:'背景色',
					compare:'判断方式',
					lowLimit:'数字限值',
					highLimit:'~',
					delay:'判断延迟(s)',
					icon:'图标',
					text:'状态名',
					legend:'图例组名',
					line:'显示方式',
					pos:'限值位置',
					type:'类型',
					showIn:'显示范围',
					value:'文字限值',
					options:{
						textPos:[{
							id:1,
							value:'位于线上方'
						}, {
							id:0,
							value:'位于线下方'
						}],
						lineDash:[{
							id:1,
							value:'虚线'
						}, {
							id:0,
							value:'实线'
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
							value:'系统默认'
						} ],
						showIn:[ {
							id:9,
							value:'不显示'
						}, {
							id:10,
							value:'全部'
						}, {
							id:0,
							value:'天统计图'
						}, {
							id:3,
							value:'周统计图'
						}, {
							id:1,
							value:'月统计图'
						}, {
							id:2,
							value:'年统计图'
						}, {
							id:-1,
							value:'小时统计图'
						} ],
						type:[{
							id:0,
							value:'数据含义'
						}, {
							id:1,
							value:'报警判断'
						}]
					},
					tvst:'状态判断配置'
				},
				alarmlog:{
					output:'报警数据',
					point:'报警点位及信息',
					alarm:'报警类型',
					recovered:'已恢复',
					startTime:'开始时间',
					stopTime:'结束时间'
				},
				script:{
					ref:'脚本程序',
					name:'程序显示名',
					dscp:'描述',
					type:'触发方式',
					content:'内容',
					options:{
						type:[ {
							id:1,
							value:'点位值变化'
						}, {
							id:2,
							value:'任务调用'
						} ]
					},
					error:{
						content:'内容不能为空'
					}
				},
				template:{
					ref:'模板报表',
					file:'模板名',
					type:'类型',
					retention:'文件保留(d)',
					bt:'数据开始时间',
					et:'数据结束时间',
					upload:'上传模板...',
					outputFiles:'报表数据文件',
					create:'即时生成报表'
				},
				sms:{
					ref:'短信通知组',
					name:'通知组名称',
					type:'短信发送设备',
					charset:'字符编码',
					port:'串口号',
					baud:'波特率',
					users:'接收用户',
					param:'参数',
					options:{
						type:[{
							id:1,
							value:'四信短信猫'
						}]
					}
				},
				email:{
					ref:'邮件通知组',
					name:'通知组名称',
					account:'SMTP账户',
					pwd:'SMTP账户密码',
					host:'SMTP服务器地址',
					port:'SMTP服务端口',
					ssl:'SSL加密',
					users:'接收用户',
					success:'发送成功标志'
				},
				app:{
					ref:'App通知组',
					name:'通知组名称',
					type:'终端类型',
					config:'发送参数',
					options:{
						type:[{
							id:10,
							value:'苹果设备'
						},{
							id:20,
							value:'小米设备'
						},{
							id:30,
							value:'华为设备'
						}]
					}
				},
				jobs:{
					title:'选择联动操作',
					log:{
						user:'执行者',
						type:'操作类型',
						action:'执行位置',
						target:'目标对象',
						execTime:'执行时间',
						result:'反馈内容',
						code:'执行结果'
					},
					options:{
						type:[ {
							id:80000,
							value:'移动端推送'
						}, {
							id:90000,
							value:'备份恢复'
						}, {
							id:72100000,
							value:'程序执行'
						}, {
							id:72200000,
							value:'报表输出'
						}, {
							id:73100000,
							value:'短信通知'
						}, {
							id:73200000,
							value:'邮件通知'
						}, {
							id:73300000,
							value:'App通知'
						}, {
							id:72701000,
							value:'租户抄表'
						} ],
						code:[ {
							id:0,
							value:'执行中'
						}, {
							id:1,
							value:'成功'
						}, {
							id:11,
							value:'异常中断'
						}, {
							id:12,
							value:'失败'
						} ]
					}
				},
				schedule:{
					name:'名称',
					dateRange:'有效期',
					timeRange:'时间范围',
					beginDate:'开始时间',
					endDate:'结束时间',
					operate:'操作',
					dscp:'描述',
					period:'执行周期',
					date:'循环日期',
					time:'循环时间',
					cron:'CRON值',
					duration:'判断时长(s)',
					alltime:'所有时间',
					sun1:'周日',
					mon1:'周1',
					tus1:'周2',
					wed1:'周3',
					thu1:'周4',
					fri1:'周5',
					sat1:'周6',
					sun:'周日',
					mon:'周一',
					tus:'周二',
					wed:'周三',
					thu:'周四',
					fri:'周五',
					sat:'周六',
					exception:'计划例外',
					startTime:'例外开始时间',
					stopTime:'例外结束时间',
					from:'从',
					to:'至',
					options:{
						s:'',
						each:'每 ',
						allYear:'每年',
						allDay:'每天',
						yearMonth:[ '每月', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月', '单月', '双月' ],
						monthDay:[ '每周', '第一周', '第二周', '第三周', '第四周', '最后一周', '最后一天', '号', '最后7天' ],
						hour:[ '小时', '点', '每小时' ],
						minute:[ '分钟', '分', '每分' ],
						second:[ '秒', '秒', '每秒' ],
						hundredth:'毫秒'
					}
				},
				chart:{
					name:'图表名称',
					type:'类型',
					duration:'时长数据',
					incLine:'累加值曲线',
					compare:'初始对比',
					initType:'数据统计方式',
					output:'图表分析数据',
					range:'数据范围',
					group:'数据分组',
					lowLimit:'最小刻度',
					highLimit:'最大刻度',
					marks:'值状态',
					data:{
						label3:'左侧Y坐标',
						label6:'顶部坐标',
						label7:'横向分组',
						label13:'左侧Y坐标',
						label16:'顶部坐标',
						label17:'数据类型',
						label11:'数据类型'
					},
					ref:{
						label3:'右侧Y坐标',
						label6:'底部坐标',
						label7:'-',
						label13:'右侧Y坐标',
						label16:'底部坐标',
						label17:'-',
						label11:'-'
					},
					nodata:'无数据',
					options:{
						type:[ {
							id:3,
							value:'历史趋势',
							icon:'mdi mdi-chart-areaspline'
						}, {
							id:6,
							value:'历史条形',
							icon:'mdi mdi-chart-bar-stacked mdi-rotate-90'
						}, {
							id:7,
							value:'历史环形',
							icon:'mdi mdi-chart-arc'
						}, {
							id:13,
							value:'实时趋势',
							icon:'mdi mdi-chart-line'
						}, {
							id:16,
							value:'实时条形',
							icon:'mdi mdi-chart-gantt'
						}, {
							id:17,
							value:'实时环形',
							icon:'mdi mdi-chart-donut-variant'
						}, {
							id:11,
							value:'仪表盘',
							icon:'mdi mdi-gauge-full'
						} ]
					}
				},
				graphic:{
					ref:'组态图',
					name:'组态图名称',
					import:'导入图像',
					export:'导出图像',
					backgroud:'背景图',
					bgNull:'Alpha',
					select:'打开组态图',
					elements:'组件分组',
					template:'保存为模板',
					Stage:'画布',
					Group:'组',
					Rect:'矩形',
					Ellipse:'圆形',
					Text:'文本',
					Star:'正多边形',
					Arc:'弧形',
					Line:'自由多边形',
					Arrow:'自由线段',
					Image:'图片',
					animation:' 动画',
					pic:' 图片',

					property:{
						section:{
							layout:'布局',
							style:'样式',
							text:'文本',
							interactive:'交互设置'
						},

						name:'名称',
						x:'X坐标',
						y:'Y坐标',
						width:'宽度',
						height:'高度',
						rotation:'旋转角度',
						radiusX:'横向半径',
						radiusY:'纵向半径',
						zoom:'自动缩放',
						align:'水平对齐',
						verticalAlign:'垂直对齐',

						color:'颜色',
						lineWidth:'线宽度',
						strokeWidth:'边框大小',
						stroke:'边框颜色',
						fill:'填充颜色',
						cover:'动态遮蔽',
						status:'值状态替换',
						image:'背景图',
						opacity:'不透明度',

						numPoints:'端点数量',
						angle:'弧度',
						oddRadius:'奇数点半径',
						evenRadius:'偶数点半径',
						innerRadius:'内环半径',
						outerRadius:'外环半径',
						pointerWidth:'箭头宽度',
						pointerLength:'箭头长度',

						fontFamily:'字体',
						fontSize:'字体大小',
						fontStyle:'字体样式',
						fontVariant:'字体变形',
						lineHeight:'文本行高',
						textDecoration:'文字装饰',
						wrap:'换行判断',
						ellipsis:'超出时省略',
						lineJoin:'转角形状',
						cornerRadius:'圆角率',
						lineCap:'线头形状',
						tension:'应力形变',

						pointName:'关联点位',
						content:'内容',

						showVS:'显示值状态',
						hideVS:'隐藏值状态',
						stopVS:'静态值状态',

						point:'点位选择',
						click:'点击事件',
						clickCtrl:'点位值设定'
					}
				},
				trendlog:{
					edit:'数据修正',
					time:'数据时间',
					value:'值',
					type0:'原始数字值记录',
					type1:'原始文字值记录'
				},
				tenant:{
					ref:'租户抄表',
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
					time:'时间',
					user:'用户',
					target:'位置/设备',
					type:'类型',
					code:'结果',
					options:{
						type:[{
							id:10,
							value:'上班打卡'
						},{
							id:11,
							value:'下班打卡'
						}],
						code10:[{
							id:0,
							value:'标准'
						}, {
							id:1,
							value:'新设备'
						}]
					},
					menu:{
						options:{
							timeSpan:[{
								id:3,
								value:'周'
							}, {
								id:1,
								value:'月'
							}]
						}
					}
				},
				nfc:{
					uid:'UID',
					deleted:"已删除",
					locationTags:'位置标签',
					deviceTags:'设备标签'
				}
			}
		}
	};
	webix.i18n.setLocale('zh-CN');
}();
webix['calendar']=webix.i18n.locales['zh-CN'].calendar;