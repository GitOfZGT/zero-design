(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("2/Rp"),o=n("/HRN"),r=n.n(o),s=n("WaGi"),l=n.n(s),c=n("ZDA2"),i=n.n(c),d=n("/+P4"),p=n.n(d),u=n("N9n2"),m=n.n(u),h=n("q1tI"),f=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return r()(this,o),i()(this,p()(o).apply(this,arguments))}return m()(o,n),l()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.PureComponent)}}},"3P0Q":function(t,e,n){"use strict";var a=n("q1tI"),o=n.n(a);e.a={trademark:function(){return o.a.createElement("div",{className:"z-padding-top-10"},o.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",width:"80",height:"auto",className:"z-margin-right-18"}))},breadcrumbRoutes:[{path:"config",name:"案例",link:!1},{path:"serviceWithTableList",name:"表格列表",link:!0}],title:"服务器配置",content:"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",rightMoreContent:o.a.createElement("div",null,"右边内容")}},ebhq:function(t,e,n){"use strict";var a=n("iZP3"),o=n.n(a),r=n("jjl2"),s={},l=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==o()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("MaNN"),o=n("C6MB"),r=n("PwP1"),s=n("TbGu"),l=n.n(s),c=n("/sSO"),i=n("/HRN"),d=n.n(i),p=n("WaGi"),u=n.n(p),m=n("ZDA2"),h=n.n(m),f=n("/+P4"),v=n.n(f),g=n("N9n2"),E=n.n(g),b=n("kB6t"),y=n("q1tI"),w=n.n(y),C=n("i8i4"),q=n.n(C),z=(n("17x9"),n("tW/l")),N=n.n(z);var x=Object(b.a)(),H=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function a(){var t,e;d()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=h()(this,(t=v()(a)).call.apply(t,[this].concat(o)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=c.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),c.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),c.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,a=0;a<n;a++){var o=e.state.navs[a];if(t>=o.el.offsetTop-120){if(!(a<n-1)){o.active=!0;break}var r=e.state.navs[a+1];if(r&&t<r.el.offsetTop-120){o.active=!0;break}}}e.setState({navs:l()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return E()(a,n),u()(a,[{key:"componentWillUnmount",value:function(){H=!0,this.renderEls.forEach(function(t){q.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var o=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[a.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[a.render]();t.renderEls.push(n),q.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=a.title?a.title:"",e.appendChild(l),o&&e.appendChild(s),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){H=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){H||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";H=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){H||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return w.a.createElement(o.b.Template,null,w.a.createElement(x,{pageHeader:{show:!1},hasBodyPadding:!1},w.a.createElement("div",{className:"z-panel ".concat(N.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},w.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},w.a.createElement(r.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?q.a.createPortal(w.a.createElement("div",{className:N.a["z-nav-box"],ref:function(t){return e.navEl=t}},w.a.createElement("div",{ref:function(t){return e.navContentEl=t}},w.a.createElement("section",null,this.state.navs.map(function(t,n){return w.a.createElement("div",{title:t.name,className:"".concat(N.a["z-nav"]," ").concat(t.active?N.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(w.a.PureComponent);return a.a.setConsumer(n)}}},sCSN:function(t,e,n){"use strict";n.r(e);var a=n("Avpf"),o=n.n(a),r=n("kB6t"),s=n("q1tI"),l=n.n(s),c=n("ebhq"),i=n("xRap"),d=n.n(i),p=n("3P0Q"),u=c.a.AmdDocHOC,m=c.a.AshowDemoHOC;e.default=u(d.a,{demo1:function(){var t=Object(r.a)(),e=o()({show:!0},p.a),n=m(l.a.createElement(t,{pageHeader:e},l.a.createElement("div",{className:"z-panel"},l.a.createElement("div",{className:"z-panel-body"},"中间内容"))),!0);return l.a.createElement(n,null)}})},xRap:function(t,e){t.exports='<h1 id="-zpagewrapper">页面头尾结构：ZpageWrapper</h1>\n<p><code>ZpageWrapper</code>是由之前的<code>ZpageWraperHOC</code>改名而来，等效于<code>ZpageWraperHOC()</code>，是一个页面头尾结构的普通组件；之前的<code>ZpageWraperHOC</code>依然可用。</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageWraperHOC } from &quot;zerod&quot;;\nconst PageWraper = ZpageWraperHOC();\nconst pageHeader = {\n    show: true,\n    trademark: (\n        &lt;img\n            src=&quot;https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png&quot;\n            width=&quot;60&quot;\n            className=&quot;z-margin-right-15&quot;\n        /&gt;\n    ),\n    // array&gt;[object] | null,如果是null则不显示面包屑\n    breadcrumbRoutes: [\n        { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n        { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n    ],\n    // any\n    title: &quot;服务器配置&quot;,\n    //any\n    content:\n        &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n    //element | node\n    rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n};\n\n&lt;PageWraper pageHeader={pageHeader}&gt;\n    &lt;div className=&quot;z-panel&quot;&gt;\n        &lt;div className=&quot;z-panel-body&quot;&gt;中间内容&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/PageWraper&gt;;</code></pre>\n<h2 id="zpagewrapper-props">ZpageWrapper 的 Props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>pageHeader</td>\n            <td>页头内容,除了show属性(默认false)，其他属性同 <span class="z-history-href" data-path="/main/component-doc/ZpageHeader-doc">组件/ZpageHeader</span> 的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>pageFooter</td>\n            <td>页尾内容,除了show属性(默认true)，其他属性同 <span class="z-history-href" data-path="/main/component-doc/ZpageFooter-doc">组件/pageFooter</span> 的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>hasBodyPadding</td>\n            <td>中间部分是否有padding值</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>showBreadcrumb</td>\n            <td>是否显示pageHeader面包屑</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>titleFromLasterBreadcrumb</td>\n            <td>pageHeader的title是否来自面包屑的最后一个名称</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);
//# sourceMappingURL=16.c7d5442f68a7675ded07.js.map