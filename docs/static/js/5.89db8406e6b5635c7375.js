(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+fre":function(t,n,e){"use strict";e.r(n);e("cGjX");var o=e("AV1Z"),r=e("Ds8w"),a=e.n(r),d=e("6ato"),i=e.n(d),s=e("2dj7"),c=e.n(s),l=e("Xtzg"),p=e.n(l),u=e("0dFU"),m=e.n(u),h=e("ZS5U"),f=e.n(h);n.default={name:"AshowDemoHOC",HOC:function(t,n){return function(e){function r(){return i()(this,r),p()(this,(r.__proto__||a()(r)).apply(this,arguments))}return m()(r,e),c()(r,[{key:"componentDidMount",value:function(){var e=this.boxEl.querySelector(".z-open-modal-btn");e._scroll=n,e._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(n){t.boxEl=n}},f.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(f.a.Component)}}},O0xr:function(t,n,e){"use strict";e.r(n);var o=e("ebhq"),r=e("xLr8"),a=e.n(r),d=o.a.AmdDocHOC;n.default=d(a.a)},ebhq:function(t,n,e){"use strict";var o=e("Q2cO"),r=e.n(o),a=e("jjl2"),d={},i=[];a.keys().forEach(function(t){var n=void 0;try{n=a(t).default}catch(n){throw Error(t+":"+n)}if(void 0===n||"object"!==(void 0===n?"undefined":r()(n)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof n.HOC)throw Error(t+":HOC有误");var e=n.name;if("string"!=typeof e)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(e))throw Error(t+":name属性请以A开头HOC结尾");if(e=e.trim(),i.includes(e))throw Error(t+":"+e+"此HOC名称已被使用");i.push(e),d[e]=n.HOC}),n.a=d},jjl2:function(t,n,e){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(t){var n=a(t);return e(n)}function a(t){var n=o[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="jjl2"},pnNO:function(t,n,e){"use strict";e.r(n);var o=e("Ds8w"),r=e.n(o),a=e("6ato"),d=e.n(a),i=e("2dj7"),s=e.n(i),c=e("Xtzg"),l=e.n(c),p=e("0dFU"),u=e.n(p),m=e("ZS5U"),h=e.n(m),f=e("FY2y"),g=e.n(f),y=(e("T9cD"),e("tmCC")),v=e("tW/l"),C=e.n(v);var b=Object(y.r)();n.default={name:"AmdDocHOC",HOC:function(t,n){var e=function(e){function o(){var t,n,e,a;d()(this,o);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=e=l()(this,(t=o.__proto__||r()(o)).call.apply(t,[this].concat(s))),e.renderEls=[],a=n,l()(e,a)}return u()(o,e),s()(o,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(t){g.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,e=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(e).forEach(function(e){var o=function(t){var n={};if(t.dataset)return t.dataset;for(var e=0;e<t.attributes.length;e++){var o=t.attributes[e].nodeName;if(/^data-\w+$/.test(o)){var r=t.attributes[e].nodeValue;n[o.match(/^data-(\w+)/)[1]]=r}}return n}(e);if(n&&"function"==typeof n[o.render]){var r=e.nextElementSibling;r=r&&"pre"==r.localName?r:null;var a=n[o.render]();t.renderEls.push(e),g.a.render(a,e,function(){var t=document.createElement("div");t.className="z-demo-footer";var n=document.createElement("div");n.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var d=document.createElement("img");d.addEventListener("click",function(){d.src=d.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=d.open?"0px":"auto",d.open=!d.open},!1),d.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var i=document.createElement("span");i.innerText=o.title?o.title:"",n.appendChild(i),r&&n.appendChild(d),t.appendChild(n),r&&a.appendChild(r),t.appendChild(a),e.appendChild(t)})}}),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof n.target._render&&t.props.showRightModal({show:!0,modal:n.target._modal?n.target._modal:"mainModal",content:n.target._render(),scroll:n.target._scroll,onTransitionend:function(t){}})},10)},!1),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==n.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var e=n.target._modal?n.target._modal:"mainModal";t.props.showRightModal(!0,e,null,!0),t.props.showModalLoading(!0,e),setTimeout(function(){t.props.showModalLoading(!1,e)},2e3)}},10)})}},{key:"render",value:function(){var n=this;return h.a.createElement(b,{pageHeader:{show:!1},hasBodyPadding:!1},h.a.createElement("div",{className:"z-panel "+C.a["z-md-doc"],ref:function(t){return n.mdEl=t}},h.a.createElement("div",{className:"z-panel-body"},h.a.createElement(y.d,{mode:"html"},t))))}}]),o}(h.a.Component);return y.i.setConsumer(e)}}},xLr8:function(t,n){t.exports='<h1 id="-zapphoc">根组件：ZappHOC</h1>\n<p><code>ZappHOC</code>是一个函数，是对<code>src/App.jsx</code>根组件内容封装，传入<code>pageConfig</code>参数配置，返回一个组件</p>\n<p>1、在<code>src/App.jsx</code>使用</p>\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZappHOC } from &quot;zerod&quot;;\n\n// 路由组件\nimport lazyLoad from &quot;@/lazyLoad/lazyLoad&quot;;\nconst Main = lazyLoad(import(&quot;@/views/Main/&quot;));\n\nconst pageConfig = {\n    rootRoutes: [\n        {\n            path: &quot;/main&quot;,\n            component: Main,\n            exact: false, //是否精准匹配\n        },\n        {\n            redirect: true, //重定向\n            path: &quot;/&quot;,\n            to: &quot;/main/start-doc&quot;,\n        },\n        {\n            redirect: true,\n            path: &quot;/main&quot;, //重定向\n            to: &quot;/main/start-doc&quot;,\n        },\n    ],\n    footerLinks: null,\n    footerCopyright: null,\n};\nexport default ZappHOC(pageConfig);</code></pre>\n<h2 id="pageconfig">pageConfig</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>routerType</td>\n            <td>路由模式</td>\n            <td>history | hash</td>\n            <td>history</td>\n        </tr>\n        <tr>\n            <td>rootRoutes</td>\n            <td>根路由配置,结构请看上面的代码</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>footerLinks</td>\n            <td>用于覆盖ZpageWraperHOC默认的footerLinks，结构请查看ZpageFooter的links</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>footerCopyright</td>\n            <td>用于覆盖ZpageWraperHOC默认的footerCopyright，结构请查看ZpageFooter的copyright</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>responseKeys</td>\n            <td>用于转义后台接口响应体数据的key，前提后台接口response响应体应该是 { code:状态码,data:数据,msg:提示信息 }, </td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id="pageconfig-responsekeys">pageConfig.responseKeys</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>listType</td>\n            <td>列表类型的响应体key，默认{\n                list: "list",\n                totalCount: "totalCount",\n                totalPage: "totalPage",\n            }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);