(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("JsaA"),o=n("GPkD"),r=n.n(o),l=n("pv+U"),c=n.n(l),s=n("aTAs"),i=n.n(s),d=n("k7W2"),u=n.n(d),m=n("zqcf"),p=n.n(m),h=n("rdAL"),f=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return r()(this,o),i()(this,u()(o).apply(this,arguments))}return p()(o,n),c()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.Component)}}},"3P0Q":function(t,e,n){"use strict";var a=n("rdAL"),o=n.n(a);e.a={trademark:function(){return o.a.createElement("div",{className:"z-padding-top-10"},o.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",width:"80",height:"auto",className:"z-margin-right-18"}))},breadcrumbRoutes:[{path:"config",name:"案例",link:!1},{path:"serviceWithTableList",name:"表格列表",link:!0}],title:"服务器配置",content:"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",rightMoreContent:o.a.createElement("div",null,"右边内容")}},CTfC:function(t,e,n){t.exports=n("PDTz")(220)},ebhq:function(t,e,n){"use strict";n("Vsw1"),n("yDl1");var a=n("6h6h"),o=n.n(a),r=(n("/2a5"),n("P4eO"),n("jjl2")),l={},c=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==o()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),c.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));c.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("MaNN"),o=n("C6MB"),r=(n("yDl1"),n("PwP1")),l=(n("Vsw1"),n("4Loy"),n("U7Fr")),c=n.n(l),s=n("/sSO"),i=(n("P4eO"),n("GPkD")),d=n.n(i),u=n("pv+U"),m=n.n(u),p=n("aTAs"),h=n.n(p),f=n("k7W2"),v=n.n(f),g=n("zqcf"),b=n.n(g),y=n("kB6t"),E=(n("YTQH"),n("rdAL")),q=n.n(E),k=n("FFPy"),z=n.n(k),C=(n("T9cD"),n("tW/l")),w=n.n(C);var H=Object(y.a)(),x=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function a(){var t,e;d()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=h()(this,(t=v()(a)).call.apply(t,[this].concat(o)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=s.g.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),s.g.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),s.g.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,a=0;a<n;a++){var o=e.state.navs[a];if(t>=o.el.offsetTop-120){if(!(a<n-1)){o.active=!0;break}var r=e.state.navs[a+1];if(r&&t<r.el.offsetTop-120){o.active=!0;break}}}e.setState({navs:c()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return b()(a,n),m()(a,[{key:"componentWillUnmount",value:function(){x=!0,this.renderEls.forEach(function(t){z.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var o=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[a.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[a.render]();t.renderEls.push(n),z.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var c=document.createElement("span");c.innerText=a.title?a.title:"",e.appendChild(c),o&&e.appendChild(l),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){x=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){x||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";x=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){x||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return q.a.createElement(o.b.Template,null,q.a.createElement(H,{pageHeader:{show:!1},hasBodyPadding:!1},q.a.createElement("div",{className:"z-panel ".concat(w.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},q.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},q.a.createElement(r.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?z.a.createPortal(q.a.createElement("div",{className:w.a["z-nav-box"],ref:function(t){return e.navEl=t}},q.a.createElement("div",{ref:function(t){return e.navContentEl=t}},q.a.createElement("section",null,this.state.navs.map(function(t,n){return q.a.createElement("div",{title:t.name,className:"".concat(w.a["z-nav"]," ").concat(t.active?w.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(q.a.Component);return a.a.setConsumer(n)}}},"qE8/":function(t,e,n){"use strict";n.r(e);var a=n("w4p+"),o=n.n(a),r=n("VQbk"),l=n("ie1H"),c=n("uGI6"),s=n.n(c),i=n("GPkD"),d=n.n(i),u=n("pv+U"),m=n.n(u),p=n("aTAs"),h=n.n(p),f=n("k7W2"),v=n.n(f),g=n("zqcf"),b=n.n(g),y=n("rdAL"),E=n.n(y),q=n("o0/1"),k=n("ebhq"),z=n("vOQm"),C=n.n(z),w=n("3P0Q"),H=k.a.AmdDocHOC;e.default=H(C.a,{demo1:function(){var t=function(t){function e(){var t,n;d()(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=h()(this,(t=v()(e)).call.apply(t,[this].concat(o)))).pageHeader=s()({},w.a,{trademark:null}),n}return b()(e,t),m()(e,[{key:"render",value:function(){return E.a.createElement(q.BrowserRouter,null,E.a.createElement(l.b,this.pageHeader))}}]),e}(E.a.Component);return E.a.createElement(t,null)},demo2:function(){var t=function(t){function e(){var t,n;d()(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=h()(this,(t=v()(e)).call.apply(t,[this].concat(o)))).pageHeader=w.a,n.tabPanes=[{tab:"基本信息",key:"1",content:""},{tab:"配置信息",key:"2",content:""},{tab:"其他信息",key:"3",content:function(){return""}}],n}return b()(e,t),m()(e,[{key:"render",value:function(){var t=this;return E.a.createElement(q.BrowserRouter,null,E.a.createElement(l.b,o()({},this.pageHeader,{children:function(){return E.a.createElement(r.a,{tabPanes:t.tabPanes})}})))}}]),e}(E.a.Component);return E.a.createElement(t,null)}})},vOQm:function(t,e){t.exports='<h1 id="-zpageheader">页面头部组件：ZpageHeader</h1>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZpageHeader } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\n\nclass PageHeader extends React.Component {\n    pageHeader = {\n        trademark: &lt;Icon type=&quot;cloud&quot; /&gt;,\n        // array&gt;[object] | null,如果是null则不显示面包屑\n        breadcrumbRoutes: [\n            { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n            { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n        ],\n        // any\n        title: &quot;服务器配置&quot;,\n        //any\n        content:\n            &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n    };\n    render() {\n        return (\n            &lt;ZpageHeader\n                trademark={this.pageHeader.trademark}\n                title={this.pageHeader.title}\n                content={this.pageHeader.content}\n                rightMoreContent={this.pageHeader.rightMoreContent}\n                breadcrumbRoutes={this.pageHeader.breadcrumbRoutes}\n            /&gt;\n        );\n    }\n}\n\nexport default PageHeader;</code></pre>\n<p>1、追加更多内容</p>\n<div class="z-demo-box" data-render="demo2" data-title="使用children属性"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZpageHeader } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\n\nclass PageHeader extends React.Component {\n    tabPanes = [\n        { tab: &quot;基本信息&quot;, key: &quot;1&quot;, content: null },\n        { tab: &quot;配置信息&quot;, key: &quot;2&quot;, content: null },\n        {\n            tab: &quot;其他信息&quot;,\n            key: &quot;3&quot;,\n            content: null,\n        },\n    ];\n    pageHeader = {\n        trademark: &lt;Icon type=&quot;cloud&quot; /&gt;,\n        // array&gt;[object] | null,如果是null则不显示面包屑\n        breadcrumbRoutes: [\n            { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n            { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n        ],\n        // any\n        title: &quot;服务器配置&quot;,\n        //any\n        content:\n            &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n        children: () =&gt; {\n            return &lt;Ztabs tabPanes={this.tabPanes} /&gt;;\n        },\n    };\n\n    render() {\n        return &lt;ZpageHeader {...this.pageHeader} /&gt;;\n    }\n}\n\nexport default PageHeader;</code></pre>\n<h2 id="zpageheader-props">ZpageHeader 的 Props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>trademark</td>\n            <td>图标|图示</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> title</td>\n            <td>头部标题</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> content</td>\n            <td>头部描述说明</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> rightMoreContent</td>\n            <td>标题列的右边可添加更多内容</td>\n            <td>React.element | function | ReactNode</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>breadcrumbParams</td>\n            <td>面包屑路由参数</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>breadcrumbRoutes</td>\n            <td>面包屑routes，每个对象包括path、name、link等属性</td>\n            <td>array>[object] | null</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> children</td>\n            <td>更多内容</td>\n            <td>any | function(){return 内容}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);