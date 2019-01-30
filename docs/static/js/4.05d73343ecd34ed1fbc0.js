(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+iFO":function(e,n,t){e.exports=t("PSQd")(388)},"03A+":function(e,n,t){e.exports=t("PSQd")(72)},"1xVk":function(e,n,t){"use strict";var r=t("/sSO");n.a=function(e,n,t,a){return n.includes("/sys")||(n="/webapi".concat(n)),r.h.httpAjax(e,n,t,a)}},"40mi":function(e,n,t){"use strict";n.a={default:"#Web服务器相关配置\nserver.port=11110\nserver.context-path=/\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.driverClassName=com.mysql.jdbc.Driver\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\nspring.datasource.druid.validation-query=SELECT 'x' from dual\nspring.datasource.druid.test-while-idle=true\nspring.datasource.druid.time-between-eviction-runs-millis=10000\nspring.datasource.druid.min-evictable-idle-time-millis=300000\nspring.datasource.druid.poolPreparedStatements=true\nspring.datasource.druid.maxPoolPreparedStatementPerConnectionSize=20\nspring.datasource.druid.filters=stat,slf4j\nspring.datasource.druid.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=1000\nspring.datasource.druid.useGlobalDataSourceStat=true\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0\n#json格式化\nspring.jackson.date-format=yyyy-MM-dd HH:mm:ss\nspring.jackson.time-zone=Asia/Shanghai\n#session共享\nspring.session.store-type=redis\n#文件上传\nspring.http.multipart.enabled=true\nspring.http.multipart.max-file-size=10MB\nspring.http.multipart.max-request-size=10MB\n#mybatis\nmybatis.configuration.mapUnderscoreToCamelCase=true\nmybatis.configuration.jdbcTypeForNull=NULL\n#日志\nlogging.level.com.hyzs=DEBUG\n#关闭\nendpoints.shutdown.enabled=true\nendpoints.shutdown.sensitive=false\n#分布助手配置\nlogging.pagehelper.helper-dialect=mysql\nlogging.pagehelper.reasonable=true\nlogging.pagehelper.support-methods-arguments=true\nlogging.pagehelper.params=count=countSql",dev:"#开发环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",test:"#测试环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",prod:"#生产环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0"}},"5Tg0":function(e,n,t){e.exports=t("PSQd")(377)},"5WI2":function(e,n,t){"use strict";t.r(n);var r=t("/sSO");n.default={name:"config",apis:{getServiceList:function(e){return r.h.httpAjax("post","/webapi/v1.0/config/center/pageServiceInfo",e)},deleteService:function(e){return r.h.httpAjax("post","/webapi/v1.0/config/center/deleteServiceInfo",e)},addService:function(e){return r.h.httpAjax("post","/webapi/v1.0/config/center/addServiceConfig",e)},updateService:function(e){return r.h.httpAjax("post","/webapi/v1.0/config/center/updateServiceInfo",e)},getServiceDetail:function(e){return r.h.httpAjax("post","/webapi/v1.0/config/center/getServiceConfigDetail",e)},updateServiceConfig:function(e){return r.h.httpAjax("post","/webapi/v1.0/config/center/updateConfigProperty",e)}}}},DSRE:function(e,n,t){e.exports=t("PSQd")(45)},ExA7:function(e,n,t){e.exports=t("PSQd")(17)},Lwzs:function(e,n,t){"use strict";t.r(n);var r=t("1xVk");n.default={name:"scheduling",apis:{getList:function(){return Object(r.a)("post","/get/Zscheduling/list")}}}},MMmD:function(e,n,t){e.exports=t("PSQd")(31)},O0oS:function(e,n,t){e.exports=t("PSQd")(372)},O3gd:function(e,n,t){"use strict";t.r(n);var r=t("1xVk");n.default={name:"login",apis:{getUserInfo:function(){return Object(r.a)("post","/loginUserInfo")}}}},Q1l4:function(e,n,t){e.exports=t("PSQd")(378)},Revr:function(e,n,t){var r={"./area.api.js":"eAri","./config.api.js":"5WI2","./login.api.js":"O3gd","./scheduling.api.js":"Lwzs"};function a(e){var n=i(e);return t(n)}function i(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="Revr"},WiDR:function(e,n,t){"use strict";var r=t("iZP3"),a=t.n(r),i=t("Revr"),o={},s=[];i.keys().forEach(function(e){var n=void 0;try{n=i(e).default}catch(n){throw Error("".concat(e,":").concat(n))}if(void 0===n||"object"!==a()(n))throw Error("".concat(e,":内没有 export default 或者export default格式有误 "));if("object"!=a()(n.apis))throw Error("".concat(e,":apis不是object"));var t=n.name;if("string"!=typeof t)throw Error("".concat(e,":缺少name属性"));if(t=t.trim(),s.includes(t))throw Error("".concat(e,":").concat(t,"此命名空间已被使用"));s.push(t),o[t]=n.apis}),n.a=o},YO3V:function(e,n,t){e.exports=t("PSQd")(308)},Z0cm:function(e,n,t){e.exports=t("PSQd")(13)},c6wG:function(e,n,t){e.exports=t("PSQd")(74)},"cq/+":function(e,n,t){e.exports=t("PSQd")(300)},eAri:function(e,n,t){"use strict";t.r(n);var r=t("1xVk");n.default={name:"area",apis:{getChildList:function(e){return Object(r.a)("get","/mzfwjg/sys/areas/".concat(e.id,"/children"))}}}},fmRc:function(e,n,t){e.exports=t("PSQd")(51)},hypo:function(e,n,t){e.exports=t("PSQd")(95)},juv8:function(e,n,t){e.exports=t("PSQd")(39)},lSCD:function(e,n,t){e.exports=t("PSQd")(76)},ljhN:function(e,n,t){e.exports=t("PSQd")(52)},mTTR:function(e,n,t){e.exports=t("PSQd")(96)},s1ms:function(e,n,t){"use strict";t.r(n);var r=t("eYSq"),a=t("UXZV"),i=t.n(a),o=t("tsqr"),s=t("5rEg"),c=t("q1tI"),d=t.n(c),u=t("WiDR"),l=t("4QcI"),p=t("TbGu"),g=t.n(p),f=t("fyUT"),m=t("/sSO"),v=t("2/Rp"),h=t("40mi"),b=t("MaNN"),y=t("VQbk"),x=t("+Qac"),C=t("/HRN"),P=t.n(C),S=t("WaGi"),k=t.n(S),w=t("ZDA2"),E=t.n(w),I=t("/+P4"),T=t.n(I),j=t("N9n2"),A=t.n(j),z=t("17x9"),N=t.n(z),D=function(e){function n(){var e,t;P()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=E()(this,(e=T()(n)).call.apply(e,[this].concat(a)))).methods={saveData:function(e,n){return t.props.showModalLoading(!0),u.a.config.updateServiceConfig({configProperty:n.confProperty,environment:e.key,serviceId:e.serviceId}).then(function(e){o.a.success("更新配置成功")}).catch(function(e){o.a.error(e&&e.msg?e.msg:"更新配置失败")}).finally(function(){t.props.showModalLoading(!1)})}},t.tabContent=function(e){return d.a.createElement(x.b,{items:t.props.formItems,formDefaultValues:{confProperty:e.serviceConfig.confProperty},onSubmit:function(n){return t.methods.saveData(e,n)}})},t.defaultTabPanes=[{tab:"默认环境",key:"default",serviceConfig:{},content:t.tabContent},{tab:"开发环境",key:"dev",serviceConfig:{},content:t.tabContent},{tab:"测试环境",key:"test",serviceConfig:{},content:t.tabContent},{tab:"生产环境",key:"prod",serviceConfig:{},content:t.tabContent}],t}return A()(n,e),k()(n,[{key:"getTabPanes",value:function(e){var n=this.props.data;return n&&n.cfgcPropertyDOList?e.map(function(e,t){e.serviceId=n.serviceId;for(var r=n.cfgcPropertyDOList,a=0;a<r.length;a++)if(e.key===r[a].environment){e.serviceConfig=r[a];break}return e}):[]}},{key:"render",value:function(){var e=this.getTabPanes(this.defaultTabPanes);return d.a.createElement("div",{className:"z-panel z-margin-top-20"},d.a.createElement("div",{className:"z-panel-heading"},"修改配置信息"),d.a.createElement("div",{className:"z-panel-body"},d.a.createElement(y.a,{tabPanes:e})))}}]),n}(d.a.PureComponent);D.propTypes={data:N.a.object,formItems:N.a.arrayOf(N.a.object)};var Q=b.a.setConsumer(D);var R=function(e){var n=e.pageType,t=e.headerTitle,r=e.headerContent,a=e.afterSubmitSuccess,o=[{key:"quick",label:"快捷操作",render:function(e){return d.a.createElement(v.a,{onClick:function(){e.setFieldsValue({confProperty:h.a.default})}},"模板配置")}},{key:"confProperty",label:"默认配置",render:function(e){return d.a.createElement(s.a.TextArea,{rows:15,placeholder:"请输入默认配置",ref:function(e){m.h.scrollDisableWheel(e.textAreaRef)}})},options:{rules:[{required:!0,message:"不能为空。"}]}}],c=[{key:"serviceCode",label:"服务编码",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入服务编码"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceName",label:"服务名称",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceRemark",label:"服务说明",render:function(e){return d.a.createElement(s.a.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"servicePort",detailKey:"serviceProt",label:"端口号",render:function(e){return d.a.createElement(f.a,{min:11110,max:65535,step:10})},options:{rules:[{required:!0,message:"不能为空。"}]}}];"add"===n&&(c=[].concat(g()(c),o));var p={pageHeader:{show:!0,title:t,content:r,rightMoreContent:null},form:{type:n,panelHeader:"add"===n?"新增服务信息":"修改基础信息",items:c,detailApiInterface:function(e,n){return u.a.config.getServiceDetail({serviceId:e})},submitApiInterface:function(e,t){return"add"===n?u.a.config.addService(i()({},e,{environment:"default"})):u.a.config.updateService(i()({},e,{serviceId:t.detailId}))},afterSubmitSuccess:a}};return"update"===n&&(p.moreContentRender=function(e){return d.a.createElement(Q,{data:e,formItems:o})}),Object(l.a)(p)},O=t("fdRb"),B=function(e){function n(){var e,t;P()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=E()(this,(e=T()(n)).call.apply(e,[this].concat(a)))).getConfig=function(e){return e?d.a.createElement("div",{style:{background:"#2B2B2B",padding:16}},e.split("\n").map(function(e,n){var t=e;if(e.startsWith("#"))t=d.a.createElement("span",{style:{color:"#629755"}},e);else if(e.indexOf("=")>0){var r=e.indexOf("="),a=e.substring(0,r),i=e.substring(r+1,e.length);t=d.a.createElement("span",null,d.a.createElement("span",{style:{color:"#9876AA"}},a),d.a.createElement("span",{style:{color:"rgba(255,255,255,0.85)"}},"="),d.a.createElement("span",{style:{color:"#BABABA"}},i))}return d.a.createElement("div",{key:"".concat(e,"-").concat(n)},t)})):d.a.createElement("div",{className:"z-text-center z-text-gray"},"无相关配置信息")},t.tabContent=function(e){return t.getConfig(e.serviceConfig.confProperty)},t.defaultTabPanes=[{tab:"默认环境",key:"default",serviceConfig:{},content:t.tabContent},{tab:"开发环境",key:"dev",serviceConfig:{},content:t.tabContent},{tab:"测试环境",key:"test",serviceConfig:{},content:t.tabContent},{tab:"生产环境",key:"prod",serviceConfig:{},content:t.tabContent}],t}return A()(n,e),k()(n,[{key:"getTabPanes",value:function(e){var n=this.props.data;return n&&n.cfgcPropertyDOList?e.map(function(e,t){e.serviceId=n.serviceId;for(var r=n.cfgcPropertyDOList,a=0;a<r.length;a++)if(e.key===r[a].environment){e.serviceConfig=r[a];break}return e}):[]}},{key:"render",value:function(){var e=this.getTabPanes(this.defaultTabPanes);return d.a.createElement("div",{className:"z-panel z-margin-top-20"},d.a.createElement("div",{className:"z-panel-heading"},"配置信息"),d.a.createElement("div",{className:"z-panel-body"},d.a.createElement(y.a,{tabPanes:e})))}}]),n}(d.a.PureComponent);B.propTypes={data:N.a.object};var q=b.a.setConsumer(B);var M=function(e){var n={pageHeader:{show:!0,breadcrumbRoutes:null,title:e.headerTitle,content:e.headerContent,rightMoreContent:d.a.createElement("div",null,"右边")},detail:{panelHeader:"基础信息",items:[{key:"serviceName",label:"服务名称"},{key:"serviceCode",label:"服务编码"},{key:"serviceProt",label:"约定端口号",render:function(e,n){return d.a.createElement("span",{className:"z-text-red"},e)}},{key:"serviceRemark",label:"服务描述",span:{lg:12},render:function(e,n){return e}}],detailApiInterface:function(e,n){return u.a.config.getServiceDetail({serviceId:e})}},moreContentRender:function(e){return d.a.createElement(q,{data:e})}};return Object(O.a)(n)},L={pageHeader:{show:!0,title:"服务配置",content:"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",rightMoreContent:d.a.createElement("div",null,"右边内容")},searchForm:{items:[{key:"serviceCode",label:"服务编码",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入内容"})}},{key:"serviceName",label:"服务名称",render:function(e){return d.a.createElement(s.a,{placeholder:"请输入内容"})}}]},list:{listType:"table",cardCoverRender:null,panelHeader:"列表",actionDataIndex:"serviceName",tableParams:{onChange:function(e,n,t){console.log(t)},expandedRowRender:function(e,n,t,r){return console.log(t),d.a.createElement("div",null,n+"-"+r)}},tableColumns:[{title:"服务名称",dataIndex:"serviceName"},{title:"服务编码",dataIndex:"serviceCode",sorter:!0},{title:"约定端口号",dataIndex:"servicePort",render:function(e,n,t,r){return d.a.createElement("span",{className:"z-text-red"},e)}},{title:"服务描述",dataIndex:"remark"}],showAddBtn:!0,addBtnPermCode:"",addPageRender:function(e){var n=R({pageType:"add",headerTitle:"新增服务配置",headerContent:"新增一个服务,需要录入服务编码服务名称端口号等信息",afterSubmitSuccess:function(n){e.methods.getListData(),n()}});return d.a.createElement(n,null)},showDetailBtn:!0,detailBtnPermCode:"",detailPageRender:function(e){var n=M({headerTitle:e.serviceName,headerContent:e.remark});return d.a.createElement(n,{detailId:e.id})},showUpdateBtn:!0,updateBtnPermCod:"",updatePageRender:function(e,n){var t=R({pageType:"update",headerTitle:e.serviceName,headerContent:e.remark,afterSubmitSuccess:function(e){n.methods.getListData()}});return d.a.createElement(t,{detailId:e.id})},showDeleteBtn:!0,deleteBtnPermCod:"",moreBtnMap:[{key:"0",name:"默认的按钮"}],onMoreBtnClick:function(e,n){o.a.success("您当前点击的是[".concat(n.serviceName,"]这条数据"))},listApiInterface:function(e){return u.a.config.getServiceList(i()(e,{servcieName:e.serviceName}))},deleteApiInterface:function(e){return u.a.config.deleteService({id:e.id})},showPagination:!0,paginationType:"paging"}};n.default=Object(r.a)(L)},sEfC:function(e,n,t){e.exports=t("PSQd")(99)},yP5f:function(e,n,t){e.exports=t("PSQd")(387)},zZ0H:function(e,n,t){e.exports=t("PSQd")(78)}}]);
//# sourceMappingURL=4.05d73343ecd34ed1fbc0.js.map