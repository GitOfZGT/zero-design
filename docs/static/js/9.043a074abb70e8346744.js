(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+fre":function(t,e,n){"use strict";n.r(e);var r=n("2/Rp"),o=n("/HRN"),a=n.n(o),i=n("WaGi"),s=n.n(i),d=n("ZDA2"),l=n.n(d),c=n("/+P4"),u=n.n(c),p=n("N9n2"),m=n.n(p),g=n("q1tI"),f=n.n(g);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return a()(this,o),l()(this,u()(o).apply(this,arguments))}return m()(o,n),s()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(r.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.PureComponent)}}},"0cU6":function(t,e,n){"use strict";n.r(e);var r=n("4QcI"),o=n("q1tI"),a=n.n(o),i=n("ebhq"),s=n("XBpp"),d=n.n(s),l=n("Q7Bs"),c=i.a.AmdDocHOC,u=i.a.AshowDemoHOC;e.default=c(d.a,{demo1:function(){var t=Object(r.a)(Object(l.a)("add")),e=u(a.a.createElement(t,null),!0);return a.a.createElement(e,null)},demo2:function(){var t=Object(r.a)(Object(l.a)("update")),e=u(a.a.createElement(t,{detailId:1}),!0);return a.a.createElement(e,null)}})},"1xVk":function(t,e,n){"use strict";var r=n("/sSO");e.a=function(t,e,n,o){return e.includes("/sys")||(e="/webapi".concat(e)),r.h.httpAjax(t,e,n,o)}},"3P0Q":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r);e.a={trademark:function(){return o.a.createElement("div",{className:"z-padding-top-10"},o.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",width:"80",height:"auto",className:"z-margin-right-18"}))},breadcrumbRoutes:[{path:"config",name:"案例",link:!1},{path:"serviceWithTableList",name:"表格列表",link:!0}],title:"服务器配置",content:"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",rightMoreContent:o.a.createElement("div",null,"右边内容")}},"40mi":function(t,e,n){"use strict";e.a={default:"#Web服务器相关配置\nserver.port=11110\nserver.context-path=/\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.driverClassName=com.mysql.jdbc.Driver\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\nspring.datasource.druid.validation-query=SELECT 'x' from dual\nspring.datasource.druid.test-while-idle=true\nspring.datasource.druid.time-between-eviction-runs-millis=10000\nspring.datasource.druid.min-evictable-idle-time-millis=300000\nspring.datasource.druid.poolPreparedStatements=true\nspring.datasource.druid.maxPoolPreparedStatementPerConnectionSize=20\nspring.datasource.druid.filters=stat,slf4j\nspring.datasource.druid.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=1000\nspring.datasource.druid.useGlobalDataSourceStat=true\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0\n#json格式化\nspring.jackson.date-format=yyyy-MM-dd HH:mm:ss\nspring.jackson.time-zone=Asia/Shanghai\n#session共享\nspring.session.store-type=redis\n#文件上传\nspring.http.multipart.enabled=true\nspring.http.multipart.max-file-size=10MB\nspring.http.multipart.max-request-size=10MB\n#mybatis\nmybatis.configuration.mapUnderscoreToCamelCase=true\nmybatis.configuration.jdbcTypeForNull=NULL\n#日志\nlogging.level.com.hyzs=DEBUG\n#关闭\nendpoints.shutdown.enabled=true\nendpoints.shutdown.sensitive=false\n#分布助手配置\nlogging.pagehelper.helper-dialect=mysql\nlogging.pagehelper.reasonable=true\nlogging.pagehelper.support-methods-arguments=true\nlogging.pagehelper.params=count=countSql",dev:"#开发环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",test:"#测试环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",prod:"#生产环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0"}},"5WI2":function(t,e,n){"use strict";n.r(e);var r=n("/sSO");e.default={name:"config",apis:{getServiceList:function(t){return r.h.httpAjax("post","/webapi/v1.0/config/center/pageServiceInfo",t)},deleteService:function(t){return r.h.httpAjax("post","/webapi/v1.0/config/center/deleteServiceInfo",t)},addService:function(t){return r.h.httpAjax("post","/webapi/v1.0/config/center/addServiceConfig",t)},updateService:function(t){return r.h.httpAjax("post","/webapi/v1.0/config/center/updateServiceInfo",t)},getServiceDetail:function(t){return r.h.httpAjax("post","/webapi/v1.0/config/center/getServiceConfigDetail",t)},updateServiceConfig:function(t){return r.h.httpAjax("post","/webapi/v1.0/config/center/updateConfigProperty",t)}}}},Lwzs:function(t,e,n){"use strict";n.r(e);var r=n("1xVk");e.default={name:"scheduling",apis:{getList:function(){return Object(r.a)("post","/get/Zscheduling/list")}}}},O3gd:function(t,e,n){"use strict";n.r(e);var r=n("1xVk");e.default={name:"login",apis:{getUserInfo:function(){return Object(r.a)("post","/loginUserInfo")}}}},Q7Bs:function(t,e,n){"use strict";var r=n("UXZV"),o=n.n(r),a=n("Avpf"),i=n.n(a),s=n("TbGu"),d=n.n(s),l=n("fyUT"),c=n("5rEg"),u=n("/sSO"),p=n("2/Rp"),m=n("q1tI"),g=n.n(m),f=n("3P0Q"),h=n("40mi"),v=n("MaNN"),b=n("/HRN"),q=n.n(b),y=n("WaGi"),C=n.n(y),z=n("ZDA2"),E=n.n(z),x=n("/+P4"),w=n.n(x),S=n("N9n2"),I=n.n(S),k=n("i8i4"),N=n.n(k),A=function(t){function e(){return q()(this,e),E()(this,w()(e).apply(this,arguments))}return I()(e,t),C()(e,[{key:"componentDidMount",value:function(){var t=this.props.getInsertLocation(this.boxEl);this.obj=this.props.getScrollAreaWrapperEl(t),this.setState({}),this.obj.methods.setScrollAreaStyle({height:"calc(100% - 60px)"})}},{key:"componentWillUnmount",value:function(){this.obj.methods.resetScrollArea()}},{key:"render",value:function(){var t=this;return g.a.createElement("div",{className:"z-panel z-margin-top-20",ref:function(e){return t.boxEl=e}},g.a.createElement("div",{className:"z-panel-body"},"panelAfterRender"),this.obj?N.a.createPortal(g.a.createElement("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:"60px",backgroundColor:"white",borderTop:"1px solid #ddd",boxShadow:"0 -2px 4px 0 rgba(217,217,217,0.50)"},className:"z-text-center z-padding-10"},g.a.createElement(p.a,{type:"primary"},"不受滚动条影响得按钮")),this.obj.wrapperEl):null)}}]),e}(g.a.PureComponent),j=v.a.setConsumer(A),R=n("WiDR");e.a=function(t){var e=[{key:"quick",label:"快捷操作",render:function(t,e,n){return console.log(e,n),g.a.createElement(p.a,{onClick:function(){t.setFieldsValue({confProperty:h.a.default})}},"模板配置")}},{key:"confProperty",label:"默认配置",render:function(t){return g.a.createElement(c.a.TextArea,{rows:15,placeholder:"请输入默认配置",ref:function(t){u.h.scrollDisableWheel(t.textAreaRef)}})},options:{rules:[{required:!0,message:"不能为空。"}]}}],n=[{key:"serviceCode",label:"服务编码",render:function(t){return g.a.createElement(c.a,{placeholder:"请输入服务编码"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceName",label:"服务名称",render:function(t){return g.a.createElement(c.a,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"remark",label:"服务说明",render:function(t){return g.a.createElement(c.a.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"servicePort",label:"端口号",render:function(t){return g.a.createElement(l.a,{min:11110,max:65535,step:10})},options:{rules:[{required:!0,message:"不能为空。"}]}}];return"add"===t&&(n=[].concat(d()(n),e)),{insertLocation:"mainModal",pageHeader:i()({show:!0},f.a,{breadcrumbRoutes:[]}),form:{type:t,panelHeader:"add"==t?"新增服务信息":"修改服务信息",items:n,detailApiInterface:function(t,e){return R.a.config.getServiceDetail({serviceId:t})},submitApiInterface:function(e,n){return"add"===t?R.a.config.addService(o()({},e,{environment:"default"})):R.a.config.updateService(o()({},e,{serviceId:n.detailId}))}},moreContentRender:function(){return g.a.createElement("div",{className:"z-panel z-margin-top-20"},g.a.createElement("div",{className:"z-panel-body"},"moreContentRender"))},panelBeforeRender:function(){return g.a.createElement("div",{className:"z-panel z-margin-bottom-20"},g.a.createElement("div",{className:"z-panel-body"},"panelBeforeRender"))},panelAfterRender:function(){return g.a.createElement(j,null)}}}},Revr:function(t,e,n){var r={"./area.api.js":"eAri","./config.api.js":"5WI2","./login.api.js":"O3gd","./scheduling.api.js":"Lwzs"};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="Revr"},WiDR:function(t,e,n){"use strict";var r=n("iZP3"),o=n.n(r),a=n("Revr"),i={},s=[];a.keys().forEach(function(t){var e=void 0;try{e=a(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==o()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("object"!=o()(e.apis))throw Error("".concat(t,":apis不是object"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(n=n.trim(),s.includes(n))throw Error("".concat(t,":").concat(n,"此命名空间已被使用"));s.push(n),i[n]=e.apis}),e.a=i},XBpp:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zeditsimpleformhoc">编辑页面：ZeditSimpleFormHOC</h1>\n<p><code>ZeditSimpleFormHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个表单编辑结构的组件</p>\n<p>1、新增表单</p>\n<div class="z-demo-box" data-render="demo1" data-title="新增表单"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Input, InputNumber, Button } from &quot;antd&quot;;\nimport { ZeditSimpleFormHOC, zTool } from &quot;zerod&quot;;\nimport defaultConfigData from &quot;@/mock/serviceDefaultConfigData.js&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\nconst pageCofig = {\n    pageHeader: {\n        show: true,\n        ...pageHeader,\n        breadcrumbRoutes: [],\n    },\n    form: {\n        type: &quot;add&quot;,\n        panelHeader: &quot;新增服务信息&quot;,\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务说明&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;servicePort&quot;,\n                detailKey: &quot;serviceProt&quot;,\n                label: &quot;端口号&quot;,\n                render: (form) =&gt; {\n                    return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;quick&quot;,\n                label: &quot;快捷操作&quot;,\n                render: (form) =&gt; {\n                    return (\n                        &lt;Button\n                            onClick={() =&gt; {\n                                form.setFieldsValue({\n                                    confProperty: defaultConfigData.default,\n                                });\n                            }}\n                        &gt;\n                            模板配置\n                        &lt;/Button&gt;\n                    );\n                },\n            },\n            {\n                key: &quot;confProperty&quot;,\n                label: &quot;默认配置&quot;,\n                render: (form) =&gt; {\n                    return (\n                        &lt;Input.TextArea\n                            rows={15}\n                            placeholder=&quot;请输入默认配置&quot;\n                            ref={(el) =&gt; {\n                                zTool.scrollDisableWheel(el.textAreaRef);\n                            }}\n                        /&gt;\n                    );\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n        ],\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n        submitApiInterface: (values, props) =&gt; {\n            return api.config.addService(Object.assign({}, values, { environment: &quot;default&quot; }));\n        },\n    },\n        moreContentRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-top-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;moreContentRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelBeforeRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;panelBeforeRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelAfterRender: function() {\n            // MoreContent 的代码请查看 ZerodMainContext 的 getScrollAreaWrapperEl 中例子的代码\n            return &lt;MoreContent /&gt;;\n        },\n};\nexport default ZeditSimpleFormHOC(pageConfig);</code></pre>\n<p>2、修改表单</p>\n<div class="z-demo-box" data-render="demo2" data-title=\'form.type="update"时为修改表单,这时才会调用form.detailApiInterface钩子，使用moreContentRender函数在页面末端追加更多内容\'></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Input, InputNumber, Button } from &quot;antd&quot;;\nimport { ZeditSimpleFormHOC, zTool } from &quot;zerod&quot;;\nimport defaultConfigData from &quot;@/mock/serviceDefaultConfigData.js&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\nconst pageCofig = {\n    pageHeader: {\n        show: true,\n        ...pageHeader,\n        breadcrumbRoutes: [],\n    },\n    form: {\n        type: &quot;update&quot;,\n        panelHeader: &quot;修改服务信息&quot;,\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务说明&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;servicePort&quot;,\n                detailKey: &quot;serviceProt&quot;,\n                label: &quot;端口号&quot;,\n                render: (form) =&gt; {\n                    return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n        ],\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n        submitApiInterface: (values, props) =&gt; {\n            return api.config.updateService(Object.assign({}, values, { serviceId: props.detailId }));\n        },\n    },\n        moreContentRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-top-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;moreContentRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelBeforeRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;panelBeforeRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelAfterRender: function() {\n            // MoreContent 的代码请查看 ZerodMainContext 的 getScrollAreaWrapperEl 中例子的代码\n            return &lt;MoreContent /&gt;;\n        },\n};\nexport default ZeditSimpleFormHOC(pageConfig);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="pageconfig">pageConfig</h2>\n<p>除了如下的属性，pageConfig还包含 <span class="z-history-href" data-path="/main/HOC-doc/ZpageWraperHOC-doc">HOC/页面头尾结构：ZpageWrapper</span> 的props</p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>form</td>\n            <td>表单配置，请看下面的pageConfig.form</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> moreContentRender</td>\n            <td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>\n            <td>(detail,tool) =>{return;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> panelBeforeRender</td>\n            <td>列表面板上面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode|Element;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> panelAfterRender</td>\n            <td>列表面板下面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode|Element;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="pageconfig-form">pageConfig.form</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>type</td>\n            <td>表单类型：新增操作 | 修改操作</td>\n            <td>add | update</td>\n            <td>mainRoute</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> panelHeader</td>\n            <td>列表面板的头部内容,为null则不显示面板头部</td>\n            <td>string | function(tool){return ;}</td>\n            <td>列表</td>\n        </tr>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，结构：同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的items结构,render函数参数在这里多加tool,如：items:[{render:(form,changeFormItems,tool)=>{}}]</td>\n            <td>array[object] | null</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的defaultSpan属性</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>submitBtnName</td>\n            <td>同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的submitBtnName属性</td>\n            <td>string</td>\n            <td>保存</td>\n        </tr>\n        <tr>\n            <td>submitMsg</td>\n            <td>同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的submitMsg属性</td>\n            <td>string</td>\n            <td>点击确定按钮提交数据</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnRender</td>\n            <td>同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的submitBtnRender属性</td>\n            <td>funtion(onSubmit,props,tool){return ReactNode | Element;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>detailApiInterface</td>\n            <td>获取详细数据的后台接口函数,必须返回Promise,只有form.type="update"才自动调用,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。then((re)=>{})的回调中re结构须：{ data:{} }</td>\n            <td>(detailId, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>submitApiInterface</td>\n            <td>保存数据的后台接口函数,即保存按钮点击触发的函数,必须返回Promise,参数有：values:表单的值，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性</td>\n            <td>(values, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showSubmitBtn</td>\n            <td>是否显示提交按钮</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>afterSubmitSuccess</td>\n            <td>保存数据成功的回调 values：表单的值</td>\n            <td>(value, tool) =>{}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>exportSomething</td>\n            <td>是一个获取tool的钩子，相当于组件的componentDidMount</td>\n            <td>function(tool){ myTool=tool }</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="tool-">tool 参数</h2>\n<p>pageConfig 中的一些函数如<code>moreContentRender</code>提供了<code>tool</code>参数出来，有如下内容：</p>\n<p><code>tool</code>对象不但包含<code>ZerodMainContext</code>提供的东西（请 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：</p>\n<h3 id="tool-getforminstance">tool.getFormInstance</h3>\n<p>是一个函数，可以 const myform=tool.getFormInstance()取得 antd 中经 Form.create() 包装过的组件自带的 this.props.form 属性 ；<a href="https://ant.design/components/form-cn/" target="_blank"> 更多请查看 antd 的 Form</a></p>\n<h3 id="tool-methods">tool.methods</h3>\n<p>tool.methods 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>方法</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLoading</td>\n            <td>用于 显示/取消 当前页的loading的方法，必需参数show：true|false</td>\n            <td>tool.methods.showLoading(true)</td>\n        </tr>\n        <tr>\n            <td>getFormDetailData</td>\n            <td>会触发pageConfig.form.detailApiInterface函数</td>\n            <td>tool.methods.getFormDetailData()</td>\n        </tr>\n        <tr>\n            <td>openModal</td>\n            <td>根据当前位置打开下一级rightModal</td>\n            <td>tool.methods.openModal(content)</td>\n        </tr>\n        <tr>\n            <td>closeCurrentModal</td>\n            <td>关闭当前的rightModal</td>\n            <td>tool.methods.closeCurrentModal()</td>\n        </tr>\n        <tr>\n            <td>onSubmit</td>\n            <td>ZeditSimpleFormHOC的submit方法，需参数values:表单的所有值的map对象，tool.submit(values)会触发submitApiInterface，异步回调后会触发afterSuccess</td>\n            <td>tool.methods.onSubmit(values)</td>\n        </tr>\n        <tr>\n            <td>notice</td>\n            <td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>\n            <td>tool.methods.notice.success("操作成功" [,config])</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h3 id="tool-router">tool.$router</h3>\n<p>tool.$router 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>属性</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>history</td>\n            <td>可以调用push、replace等跳转路由path得方法，<a href="https://reacttraining.com/react-router/web/api/history" target="_blank"> 更多请查看react-router的history</a></td>\n            <td>tool.$router.history.push("/login")</td>\n        </tr>\n        <tr>\n            <td>location</td>\n            <td>当前路由的相关信息,<a href="https://reacttraining.com/react-router/web/api/location" target="_blank"> 更多请查看react-router的location</a></td>\n            <td>tool.$router.location.pathname</td>\n        </tr>\n    </tbody>\n</table>\n'},eAri:function(t,e,n){"use strict";n.r(e);var r=n("1xVk");e.default={name:"area",apis:{getChildList:function(t){return Object(r.a)("get","/mzfwjg/sys/areas/".concat(t.id,"/children"))}}}},ebhq:function(t,e,n){"use strict";var r=n("iZP3"),o=n.n(r),a=n("jjl2"),i={},s=[];a.keys().forEach(function(t){var e=void 0;try{e=a(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==o()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),s.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));s.push(n),i[n]=e.HOC}),e.a=i},jjl2:function(t,e,n){var r={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var r=n("MaNN"),o=n("C6MB"),a=n("PwP1"),i=n("TbGu"),s=n.n(i),d=n("/sSO"),l=n("/HRN"),c=n.n(l),u=n("WaGi"),p=n.n(u),m=n("ZDA2"),g=n.n(m),f=n("/+P4"),h=n.n(f),v=n("N9n2"),b=n.n(v),q=n("kB6t"),y=n("q1tI"),C=n.n(y),z=n("i8i4"),E=n.n(z),x=(n("17x9"),n("tW/l")),w=n.n(x);var S=Object(q.a)(),I=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function r(){var t,e;c()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=g()(this,(t=h()(r)).call.apply(t,[this].concat(o)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=d.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),d.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),d.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,r=0;r<n;r++){var o=e.state.navs[r];if(t>=o.el.offsetTop-120){if(!(r<n-1)){o.active=!0;break}var a=e.state.navs[r+1];if(a&&t<a.el.offsetTop-120){o.active=!0;break}}}e.setState({navs:s()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return b()(r,n),p()(r,[{key:"componentWillUnmount",value:function(){I=!0,this.renderEls.forEach(function(t){E.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var r=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var r=t.attributes[n].nodeName;if(/^data-\w+$/.test(r)){var o=t.attributes[n].nodeValue;e[r.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[r.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var a=e[r.render]();t.renderEls.push(n),E.a.render(a,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var i=document.createElement("img");i.addEventListener("click",function(){i.src=i.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=i.open?"0px":"auto",i.open=!i.open},!1),i.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=r.title?r.title:"",e.appendChild(s),o&&e.appendChild(i),t.appendChild(e),o&&a.appendChild(o),t.appendChild(a),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){I=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){I||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";I=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){I||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return C.a.createElement(o.b.Template,null,C.a.createElement(S,{pageHeader:{show:!1},hasBodyPadding:!1},C.a.createElement("div",{className:"z-panel ".concat(w.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},C.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},C.a.createElement(a.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?E.a.createPortal(C.a.createElement("div",{className:w.a["z-nav-box"],ref:function(t){return e.navEl=t}},C.a.createElement("div",{ref:function(t){return e.navContentEl=t}},C.a.createElement("section",null,this.state.navs.map(function(t,n){return C.a.createElement("div",{title:t.name,className:"".concat(w.a["z-nav"]," ").concat(t.active?w.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),r}(C.a.PureComponent);return r.a.setConsumer(n)}}}}]);
//# sourceMappingURL=9.043a074abb70e8346744.js.map