(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1xVk":function(e,r,n){"use strict";var t=n("tmCC");r.a=function(e,r,n,a){return r.includes("/sys")||(r="/webapi"+r),t.w.httpAjax(e,r,n,a)}},"40mi":function(e,r,n){"use strict";r.a={default:"#Web服务器相关配置\nserver.port=11110\nserver.context-path=/\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.driverClassName=com.mysql.jdbc.Driver\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\nspring.datasource.druid.validation-query=SELECT 'x' from dual\nspring.datasource.druid.test-while-idle=true\nspring.datasource.druid.time-between-eviction-runs-millis=10000\nspring.datasource.druid.min-evictable-idle-time-millis=300000\nspring.datasource.druid.poolPreparedStatements=true\nspring.datasource.druid.maxPoolPreparedStatementPerConnectionSize=20\nspring.datasource.druid.filters=stat,slf4j\nspring.datasource.druid.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=1000\nspring.datasource.druid.useGlobalDataSourceStat=true\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0\n#json格式化\nspring.jackson.date-format=yyyy-MM-dd HH:mm:ss\nspring.jackson.time-zone=Asia/Shanghai\n#session共享\nspring.session.store-type=redis\n#文件上传\nspring.http.multipart.enabled=true\nspring.http.multipart.max-file-size=10MB\nspring.http.multipart.max-request-size=10MB\n#mybatis\nmybatis.configuration.mapUnderscoreToCamelCase=true\nmybatis.configuration.jdbcTypeForNull=NULL\n#日志\nlogging.level.com.hyzs=DEBUG\n#关闭\nendpoints.shutdown.enabled=true\nendpoints.shutdown.sensitive=false\n#分布助手配置\nlogging.pagehelper.helper-dialect=mysql\nlogging.pagehelper.reasonable=true\nlogging.pagehelper.support-methods-arguments=true\nlogging.pagehelper.params=count=countSql",dev:"#开发环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",test:"#测试环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",prod:"#生产环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0"}},"5WI2":function(e,r,n){"use strict";n.r(r);var t=n("1xVk");r.default={name:"config",apis:{getServiceList:function(e){return Object(t.a)("post","/v1.0/config/center/pageServiceInfo",e)},deleteService:function(e){return Object(t.a)("post","/v1.0/config/center/deleteServiceInfo",e)},addService:function(e){return Object(t.a)("post","/v1.0/config/center/addServiceConfig",e)},updateService:function(e){return Object(t.a)("post","/v1.0/config/center/updateServiceInfo",e)},getServiceDetail:function(e){return Object(t.a)("post","/v1.0/config/center/getServiceConfigDetail",e)},updateServiceConfig:function(e){return Object(t.a)("post","/v1.0/config/center/updateConfigProperty",e)}}}},O3gd:function(e,r,n){"use strict";n.r(r);var t=n("1xVk");r.default={name:"login",apis:{getUserInfo:function(){return Object(t.a)("post","/loginUserInfo")}}}},Revr:function(e,r,n){var t={"./area.api.js":"eAri","./config.api.js":"5WI2","./login.api.js":"O3gd"};function a(e){var r=i(e);return n(r)}function i(e){var r=t[e];if(!(r+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r}a.keys=function(){return Object.keys(t)},a.resolve=i,e.exports=a,a.id="Revr"},WiDR:function(e,r,n){"use strict";var t=n("Q2cO"),a=n.n(t),i=n("Revr"),s={},o=[];i.keys().forEach(function(e){var r=void 0;try{r=i(e).default}catch(r){throw Error(e+":"+r)}if(void 0===r||"object"!==(void 0===r?"undefined":a()(r)))throw Error(e+":内没有 export default 或者export default格式有误 ");if("object"!=a()(r.apis))throw Error(e+":apis不是object");var n=r.name;if("string"!=typeof n)throw Error(e+":缺少name属性");if(n=n.trim(),o.includes(n))throw Error(e+":"+n+"此命名空间已被使用");o.push(n),s[n]=r.apis}),r.a=s},eAri:function(e,r,n){"use strict";n.r(r);var t=n("1xVk");r.default={name:"area",apis:{getChildList:function(e){return Object(t.a)("get","/mzfwjg/sys/areas/"+e.id+"/children")}}}},s1ms:function(e,r,n){"use strict";n.r(r);var t=n("6ZY3"),a=n.n(t),i=(n("I0Ae"),n("wEvt")),s=(n("0Dy0"),n("pIOA")),o=n("ZS5U"),d=n.n(o),c=n("tmCC"),u=n("WiDR"),l=n("unDg"),p=n.n(l),g=(n("Flam"),n("P6Fa")),m=(n("A1VQ"),n("vfEn")),f=n("40mi"),v=n("Ds8w"),h=n.n(v),b=n("6ato"),y=n.n(b),C=n("2dj7"),k=n.n(C),E=n("Xtzg"),w=n.n(E),I=n("0dFU"),x=n.n(I),P=n("T9cD"),S=n.n(P),T=function(e){function r(){var e,n,t,a;y()(this,r);for(var s=arguments.length,o=Array(s),l=0;l<s;l++)o[l]=arguments[l];return n=t=w()(this,(e=r.__proto__||h()(r)).call.apply(e,[this].concat(o))),t.methods={saveData:function(e,r){return t.props.showModalLoading(!0),u.a.config.updateServiceConfig({configProperty:r.confProperty,environment:e.key,serviceId:e.serviceId}).then(function(e){i.a.success("更新配置成功")}).catch(function(e){i.a.error(e&&e.msg?e.msg:"更新配置失败")}).finally(function(){t.props.showModalLoading(!1)})}},t.tabContent=function(e){return d.a.createElement(c.j,{items:t.props.formItems,formDefaultValues:{confProperty:e.serviceConfig.confProperty},onSubmit:function(r){return t.methods.saveData(e,r)}})},t.defaultTabPanes=[{tab:"默认环境",key:"default",serviceConfig:{},content:t.tabContent},{tab:"开发环境",key:"dev",serviceConfig:{},content:t.tabContent},{tab:"测试环境",key:"test",serviceConfig:{},content:t.tabContent},{tab:"生产环境",key:"prod",serviceConfig:{},content:t.tabContent}],a=n,w()(t,a)}return x()(r,e),k()(r,[{key:"getTabPanes",value:function(e){var r=this.props.data;return r&&r.cfgcPropertyDOList?e.map(function(e,n){e.serviceId=r.serviceId;for(var t=r.cfgcPropertyDOList,a=0;a<t.length;a++)if(e.key===t[a].environment){e.serviceConfig=t[a];break}return e}):[]}},{key:"render",value:function(){var e=this.getTabPanes(this.defaultTabPanes);return d.a.createElement("div",{className:"z-panel z-margin-top-20"},d.a.createElement("div",{className:"z-panel-heading"},"修改配置信息"),d.a.createElement("div",{className:"z-panel-body"},d.a.createElement(c.u,{tabPanes:e})))}}]),r}(d.a.Component);T.propTypes={data:S.a.object,formItems:S.a.arrayOf(S.a.object)};var j=c.i.setConsumer(T);var D=function(e){var r=e.pageType,n=e.headerTitle,t=e.headerContent,i=e.afterSubmitSuccess,o=[{key:"quick",label:"快捷操作",render:function(e){return d.a.createElement(m.a,{onClick:function(){e.setFieldsValue({confProperty:f.a.default})}},"模板配置")}},{key:"confProperty",label:"默认配置",render:function(e){return d.a.createElement(s.a.TextArea,{rows:15,placeholder:"请输入默认配置",ref:function(e){c.w.scrollDisableWheel(e.textAreaRef)}})},options:{rules:[{required:!0,message:"不能为空。"}]}}],l=[{key:"serviceCode",label:"服务编码",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入服务编码"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceName",label:"服务名称",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceRemark",label:"服务说明",render:function(e){return d.a.createElement(s.a.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"servicePort",detailKey:"serviceProt",label:"端口号",render:function(e){return d.a.createElement(g.a,{min:11110,max:65535,step:10})},options:{rules:[{required:!0,message:"不能为空。"}]}}];"add"===r&&(l=[].concat(p()(l),o));var v={pageHeader:{show:!0,title:n,content:t,rightMoreContent:null},form:{type:r,panelHeader:"add"===r?"新增服务信息":"修改基础信息",items:l,detailApiInterface:function(e,r){return u.a.config.getServiceDetail({serviceId:e})},submitApiInterface:function(e,n){return"add"===r?u.a.config.addService(a()({},e,{environment:"default"})):u.a.config.updateService(a()({},e,{serviceId:n.detailId}))},afterSubmitSuccess:i}};return"update"===r&&(v.moreContentRender=function(e){return d.a.createElement(j,{data:e,formItems:o})}),Object(c.g)(v)},z=function(e){function r(){var e,n,t,a;y()(this,r);for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];return n=t=w()(this,(e=r.__proto__||h()(r)).call.apply(e,[this].concat(s))),t.getConfig=function(e){return e?d.a.createElement("div",{style:{background:"#2B2B2B",padding:16}},e.split("\n").map(function(e,r){var n=e;if(e.startsWith("#"))n=d.a.createElement("span",{style:{color:"#629755"}},e);else if(e.indexOf("=")>0){var t=e.indexOf("="),a=e.substring(0,t),i=e.substring(t+1,e.length);n=d.a.createElement("span",null,d.a.createElement("span",{style:{color:"#9876AA"}},a),d.a.createElement("span",{style:{color:"rgba(255,255,255,0.85)"}},"="),d.a.createElement("span",{style:{color:"#BABABA"}},i))}return d.a.createElement("div",{key:e+"-"+r},n)})):d.a.createElement("div",{className:"z-text-center z-text-gray"},"无相关配置信息")},t.tabContent=function(e){return t.getConfig(e.serviceConfig.confProperty)},t.defaultTabPanes=[{tab:"默认环境",key:"default",serviceConfig:{},content:t.tabContent},{tab:"开发环境",key:"dev",serviceConfig:{},content:t.tabContent},{tab:"测试环境",key:"test",serviceConfig:{},content:t.tabContent},{tab:"生产环境",key:"prod",serviceConfig:{},content:t.tabContent}],a=n,w()(t,a)}return x()(r,e),k()(r,[{key:"getTabPanes",value:function(e){var r=this.props.data;return r&&r.cfgcPropertyDOList?e.map(function(e,n){e.serviceId=r.serviceId;for(var t=r.cfgcPropertyDOList,a=0;a<t.length;a++)if(e.key===t[a].environment){e.serviceConfig=t[a];break}return e}):[]}},{key:"render",value:function(){var e=this.getTabPanes(this.defaultTabPanes);return d.a.createElement("div",{className:"z-panel z-margin-top-20"},d.a.createElement("div",{className:"z-panel-heading"},"配置信息"),d.a.createElement("div",{className:"z-panel-body"},d.a.createElement(c.u,{tabPanes:e})))}}]),r}(d.a.Component);z.propTypes={data:S.a.object};var A=c.i.setConsumer(z);var N=function(e){var r={pageHeader:{show:!0,breadcrumbRoutes:null,title:e.headerTitle,content:e.headerContent,rightMoreContent:d.a.createElement("div",null,"右边")},detail:{panelHeader:"基础信息",items:[{key:"serviceName",label:"服务名称"},{key:"serviceCode",label:"服务编码"},{key:"serviceProt",label:"约定端口号",render:function(e,r){return d.a.createElement("span",{className:"z-text-red"},e)}},{key:"serviceRemark",label:"服务描述",span:{lg:12},render:function(e,r){return e}}],detailApiInterface:function(e,r){return u.a.config.getServiceDetail({serviceId:e})}},moreContentRender:function(e){return d.a.createElement(A,{data:e})}};return Object(c.f)(r)},O={pageHeader:{show:!0,title:"服务配置",content:"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",rightMoreContent:d.a.createElement("div",null,"右边内容")},searchForm:{items:[{key:"serviceCode",label:"服务编码",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入内容"})}},{key:"serviceName",label:"服务名称",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入内容"})}}]},list:{listType:"table",cardCoverRender:null,panelHeader:"列表",actionDataIndex:"serviceName",tableParams:{onChange:function(e,r,n){console.log(n)},expandedRowRender:function(e,r,n,t){return console.log(n),d.a.createElement("div",null,r+"-"+t)}},tableColumns:[{title:"服务名称",dataIndex:"serviceName"},{title:"服务编码",dataIndex:"serviceCode",sorter:!0},{title:"约定端口号",dataIndex:"servicePort",render:function(e,r,n,t){return d.a.createElement("span",{className:"z-text-red"},e)}},{title:"服务描述",dataIndex:"remark"}],showAddBtn:!0,addBtnPermCode:"",addPageRender:function(e){var r=D({pageType:"add",headerTitle:"新增服务配置",headerContent:"新增一个服务,需要录入服务编码服务名称端口号等信息",afterSubmitSuccess:function(r){e.methods.getListData(),r()}});return d.a.createElement(r,null)},showDetailBtn:!0,detailBtnPermCode:"",detailPageRender:function(e){var r=N({headerTitle:e.serviceName,headerContent:e.remark});return d.a.createElement(r,{detailId:e.id})},showUpdateBtn:!0,updateBtnPermCod:"",updatePageRender:function(e,r){var n=D({pageType:"update",headerTitle:e.serviceName,headerContent:e.remark,afterSubmitSuccess:function(e){r.methods.getListData()}});return d.a.createElement(n,{detailId:e.id})},showDeleteBtn:!0,deleteBtnPermCod:"",moreBtnMap:[{key:"0",name:"默认的按钮"}],onMoreBtnClick:function(e,r){i.a.success("您当前点击的是["+r.serviceName+"]这条数据")},listApiInterface:function(e){return u.a.config.getServiceList(a()(e,{servcieName:e.serviceName}))},deleteApiInterface:function(e){return u.a.config.deleteService({id:e.id})},showPagination:!0,paginationType:"paging"}};r.default=Object(c.s)(O)}}]);