(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+fre":function(t,e,n){"use strict";n.r(e);var o=n("lRmw"),a=n("aLtU"),r=n.n(a),s=n("2x50"),l=n.n(s),c=n("gEKl"),i=n.n(c),d=n("HTqB"),u=n.n(d),p=n("DLeZ"),f=n.n(p),h=n("uqIC"),m=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return r()(this,a),i()(this,u()(a).apply(this,arguments))}return f()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return m.a.createElement("div",{ref:function(e){t.boxEl=e}},m.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(m.a.PureComponent)}}},O0xr:function(t,e,n){"use strict";n.r(e);var o=n("ebhq"),a=n("xLr8"),r=n.n(a),s=o.a.AmdDocHOC;e.default=s(r.a)},ebhq:function(t,e,n){"use strict";var o=n("M36X"),a=n.n(o),r=n("jjl2"),s={},l=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==a()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("Z3zS"),a=n("MaNN"),r=n("C6MB"),s=n("PwP1"),l=n("MDOJ"),c=n.n(l),i=n("/sSO"),d=n("aLtU"),u=n.n(d),p=n("2x50"),f=n.n(p),h=n("gEKl"),m=n.n(h),v=n("HTqB"),g=n.n(v),y=n("DLeZ"),E=n.n(y),C=n("kB6t"),b=n("uqIC"),w=n.n(b),z=n("jCnN"),q=n.n(z),x=(n("EH+i"),n("tW/l")),O=n.n(x);var H=Object(C.a)(),k=!1;var S=function(t){function e(){var t,n;u()(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=m()(this,(t=g()(e)).call.apply(t,[this].concat(a)))).methods={setHeader:function(t){n.setState({layerHeader:t})},setContent:function(t){n.setState({layerContent:t})}},n.state={layerHeader:null,layerContent:null},n.getMethods=function(t){n.layerMethods=t},n}return E()(e,t),f()(e,[{key:"render",value:function(){var t=this.state,e=t.layerHeader,n=t.layerContent;return w.a.createElement(o.a,{header:e,exportMethods:this.getMethods},n)}}]),e}(w.a.PureComponent);e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function o(){var t,e;u()(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=m()(this,(t=g()(o)).call.apply(t,[this].concat(a)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=i.g.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),i.g.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),i.g.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var a=e.state.navs[o];if(t>=a.el.offsetTop-120){if(!(o<n-1)){a.active=!0;break}var r=e.state.navs[o+1];if(r&&t<r.el.offsetTop-120){a.active=!0;break}}}e.setState({navs:c()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e.layerRef=w.a.createRef(),e}return E()(o,n),f()(o,[{key:"componentWillUnmount",value:function(){k=!0,this.renderEls.forEach(function(t){q.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=e[o.render]();t.renderEls.push(n),q.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=o.title?o.title:"",e.appendChild(l),a&&e.appendChild(s),t.appendChild(e),a&&r.appendChild(a),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){if(k=!1,"function"==typeof e.target._render){var n=e.target._render();if("layer"!=n.windowType)t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:n,scroll:e.target._scroll,onTransitionend:function(e){k||t.setState({closeModaled:!e})}});else{var o=n.header,a=n.content;t.layerRef.current.methods.setHeader(o),t.layerRef.current.methods.setContent(a),t.layerRef.current.layerMethods.showLayer(!0,null,!0)()}}},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";k=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){k||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return w.a.createElement(r.b.Template,null,w.a.createElement(H,{pageHeader:{show:!1},hasBodyPadding:!1},w.a.createElement("div",{className:"z-panel ".concat(O.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},w.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},w.a.createElement(s.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?q.a.createPortal(w.a.createElement("div",{className:O.a["z-nav-box"],ref:function(t){return e.navEl=t}},w.a.createElement("div",{ref:function(t){return e.navContentEl=t}},w.a.createElement("section",null,this.state.navs.map(function(t,n){return w.a.createElement("div",{title:t.name,className:"".concat(O.a["z-nav"]," ").concat(t.active?O.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null,w.a.createElement(S,{ref:this.layerRef}))}}]),o}(w.a.PureComponent);return a.a.setConsumer(n)}}},xLr8:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zapphoc">根组件：ZappHOC</h1>\n<p><code>ZappHOC</code>是一个函数，是对根组件内容封装，传入<code>pageConfig</code>参数配置，返回一个组件</p>\n<p>在<code>zerod-admin-webpack 脚手架</code>的<code>src/App.jsx</code>已经使用,只有使用了<code>ZappHOC</code>后，它内部的子孙组件才能使用<code>ZerodRootContext</code>的内容</p>\n<p>1、在<code>src/App.jsx</code>使用</p>\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZappHOC } from &quot;zerod&quot;;\n\n// 路由组件\nimport lazyLoad from &quot;@/lazyLoad/lazyLoad&quot;;\nconst Main = lazyLoad(()=&gt;import(&quot;@/views/Main/&quot;));\n\nconst pageConfig = {\n    rootRoutes: [\n        {\n            path: &quot;/main&quot;,\n            component: Main,\n            exact: false, //是否精准匹配\n        },\n        {\n            redirect: true, //重定向\n            path: &quot;/&quot;,\n            to: &quot;/main/start-doc&quot;,\n        },\n        {\n            redirect: true,\n            path: &quot;/main&quot;, //重定向\n            to: &quot;/main/start-doc&quot;,\n        },\n    ],\n    footerLinks: null,\n    footerCopyright: null,\n};\nexport default ZappHOC(pageConfig);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="pageconfig">pageConfig</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>routerType</td>\n            <td>路由模式</td>\n            <td>history | hash</td>\n            <td>history</td>\n        </tr>\n        <tr>\n            <td>rootRoutes</td>\n            <td>根路由配置,结构请看上面的代码</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>footerLinks</td>\n            <td>用于覆盖ZpageWraperHOC默认的footerLinks，结构请查看ZpageFooter的links</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>footerCopyright</td>\n            <td>用于覆盖ZpageWraperHOC默认的footerCopyright，结构请查看ZpageFooter的copyright</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>responseKeys</td>\n            <td>用于转义后台接口响应体数据的key，前提后台接口response响应体应该是 { code:状态码,data:数据,msg:提示信息 }, </td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n\n<div class="z-doc-titles"></div>\n\n<h2 id="pageconfig-responsekeys">pageConfig.responseKeys</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>listType</td>\n            <td>列表类型的响应体key，默认{\n                list: "list",\n                totalCount: "totalCount",\n                totalPage: "totalPage",\n            }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);
//# sourceMappingURL=24.362297e744a518d90ccf.js.map