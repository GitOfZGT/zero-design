(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("2/Rp"),o=n("/HRN"),r=n.n(o),l=n("WaGi"),s=n.n(l),c=n("ZDA2"),i=n.n(c),d=n("/+P4"),u=n.n(d),h=n("N9n2"),m=n.n(h),p=n("q1tI"),f=n.n(p);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return r()(this,o),i()(this,u()(o).apply(this,arguments))}return m()(o,n),s()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.PureComponent)}}},JNq4:function(t,e,n){"use strict";n.r(e);var a=n("2/Rp"),o=n("/HRN"),r=n.n(o),l=n("WaGi"),s=n.n(l),c=n("ZDA2"),i=n.n(c),d=n("/+P4"),u=n.n(d),h=n("N9n2"),m=n.n(h),p=n("q1tI"),f=n.n(p),v=n("ebhq"),y=n("zXgb"),g=n.n(y),E=n("i8i4"),b=n.n(E),w=n("jY6J"),N=n("17x9"),z=n.n(N),q=(n("EQFL"),n("/gcJ")),x=function(t){function e(){var t,n;r()(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=i()(this,(t=u()(e)).call.apply(t,[this].concat(o)))).methods={showLayer:function(t,e){n.setState({show:t},e)},closeLayer:function(){n.methods.showLayer(!1)},showLoading:function(t){n.setState({loading:t})}},n.returned=n.props.exportMethods&&n.props.exportMethods(n.methods),n.state={show:!1,loading:!1},n}return m()(e,t),s()(e,[{key:"render",value:function(){var t=this.props,e=t.header,n=t.children;return b.a.createPortal(f.a.createElement("div",{className:"z-full-layer",style:{display:this.state.show?"block":"none"}},f.a.createElement("div",{className:"z-full-layer-heading"},e),f.a.createElement("div",{className:"z-full-layer-body"},n),f.a.createElement("div",{className:"close",onClick:this.methods.closeLayer},f.a.createElement("span",{className:"text"},"×")),f.a.createElement(q.b,{showLoading:this.state.loading,size:"default"})),document.body)}}]),e}(w.a);x.propTypes={header:z.a.node,children:z.a.node,exportMethods:z.a.func};var C=x,L=v.a.AmdDocHOC,M=v.a.AshowDemoHOC;e.default=L(g.a,{demo1:function(){var t=function(t){function e(){return r()(this,e),i()(this,u()(e).apply(this,arguments))}return m()(e,t),s()(e,[{key:"render",value:function(){return f.a.createElement("div",{className:"z-padding-left-20 z-flex-items-center",style:{height:"100%"}},f.a.createElement("div",null,f.a.createElement(a.a,{type:"primary"},"按钮")))}}]),e}(f.a.PureComponent),e=function(e){function n(){var t,e;r()(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=i()(this,(t=u()(n)).call.apply(t,[this].concat(o)))).methods={open:function(){e.ZfullLayerMethods.showLayer(!0,function(){console.log("open")})}},e.exportMethods=function(t){e.ZfullLayerMethods=t},e}return m()(n,e),s()(n,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("div",{className:"z-panel"},f.a.createElement("div",{className:"z-panel-body"},f.a.createElement(a.a,{type:"primary",onClick:this.methods.open},"打开ZfullLayer"))),f.a.createElement(C,{header:f.a.createElement(t,null),exportMethods:this.exportMethods},f.a.createElement("div",{className:"z-panel",style:{width:"90%",margin:"0 auto"}},f.a.createElement("div",{className:"z-panel-heading"},"面板标题"),f.a.createElement("div",{className:"z-panel-body"},"内容"))))}}]),n}(f.a.PureComponent),n=M(f.a.createElement(e,null),!1);return f.a.createElement(n,null)}})},ebhq:function(t,e,n){"use strict";var a=n("iZP3"),o=n.n(a),r=n("jjl2"),l={},s=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==o()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),s.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));s.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("MaNN"),o=n("C6MB"),r=n("PwP1"),l=n("TbGu"),s=n.n(l),c=n("/sSO"),i=n("/HRN"),d=n.n(i),u=n("WaGi"),h=n.n(u),m=n("ZDA2"),p=n.n(m),f=n("/+P4"),v=n.n(f),y=n("N9n2"),g=n.n(y),E=n("kB6t"),b=n("q1tI"),w=n.n(b),N=n("i8i4"),z=n.n(N),q=(n("17x9"),n("tW/l")),x=n.n(q);var C=Object(E.a)(),L=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function a(){var t,e;d()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=p()(this,(t=v()(a)).call.apply(t,[this].concat(o)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=c.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),c.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),c.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,a=0;a<n;a++){var o=e.state.navs[a];if(t>=o.el.offsetTop-120){if(!(a<n-1)){o.active=!0;break}var r=e.state.navs[a+1];if(r&&t<r.el.offsetTop-120){o.active=!0;break}}}e.setState({navs:s()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return g()(a,n),h()(a,[{key:"componentWillUnmount",value:function(){L=!0,this.renderEls.forEach(function(t){z.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var o=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[a.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[a.render]();t.renderEls.push(n),z.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=a.title?a.title:"",e.appendChild(s),o&&e.appendChild(l),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){L=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){L||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";L=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){L||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return w.a.createElement(o.b.Template,null,w.a.createElement(C,{pageHeader:{show:!1},hasBodyPadding:!1},w.a.createElement("div",{className:"z-panel ".concat(x.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},w.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},w.a.createElement(r.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?z.a.createPortal(w.a.createElement("div",{className:x.a["z-nav-box"],ref:function(t){return e.navEl=t}},w.a.createElement("div",{ref:function(t){return e.navContentEl=t}},w.a.createElement("section",null,this.state.navs.map(function(t,n){return w.a.createElement("div",{title:t.name,className:"".concat(x.a["z-nav"]," ").concat(t.active?x.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(w.a.PureComponent);return a.a.setConsumer(n)}}},zXgb:function(t,e){t.exports='<h1 id="-zfulllayer">浮层窗口：ZfullLayer</h1>\n<p>ZfullLayer 是一个背景黑色半透的覆盖在整个文档之上的窗口组件，分 header 和 children 两个内容区域</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title=""></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Button } from &quot;antd&quot;;\nimport ZfullLayer from &quot;zerod/components/ZfullLayer&quot;;\nclass Header extends React.PureComponent {\n    render() {\n        return (\n            &lt;div className=&quot;z-padding-left-20 z-flex-items-center&quot; style={{ height: &quot;100%&quot; }}&gt;\n                &lt;div&gt;\n                    &lt;Button type=&quot;primary&quot;&gt;按钮&lt;/Button&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nclass Myjavascript extends React.PureComponent {\n    methods = {\n        open: () =&gt; {\n            this.ZfullLayerMethods.showLayer(true, () =&gt; {\n                console.log(&quot;open&quot;);\n            });\n        },\n    };\n    exportMethods = (m) =&gt; {\n        this.ZfullLayerMethods = m;\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;div className=&quot;z-panel&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;\n                        &lt;Button type=&quot;primary&quot; onClick={this.methods.open}&gt;\n                            打开ZfullLayer\n                        &lt;/Button&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n                &lt;ZfullLayer header={&lt;Header /&gt;} exportMethods={this.exportMethods}&gt;\n                    &lt;div className=&quot;z-panel&quot; style={{ width: &quot;90%&quot;, margin: &quot;0 auto&quot; }}&gt;\n                        &lt;div className=&quot;z-panel-heading&quot;&gt;面板标题&lt;/div&gt;\n                        &lt;div className=&quot;z-panel-body&quot;&gt;内容&lt;/div&gt;\n                    &lt;/div&gt;\n                &lt;/ZfullLayer&gt;\n            &lt;/div&gt;\n        );\n    }\n}</code></pre>\n<h2 id="zfulllayer-props">ZfullLayer 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>header</td>\n            <td>头部区域内容，高度有64px</td>\n            <td>ReactNode</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>children</td>\n            <td>主体区域内容</td>\n            <td>ReactNode</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>exportMethods</td>\n            <td>提供内部方法的钩子,methods是一个对象，具体看下面</td>\n            <td>function(methods){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id="methods">methods</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>使用</th>\n            <th>返回值类型</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLayer</td>\n            <td>显示/隐藏ZfullLayer的方法</td>\n            <td>methods.showLayer(show,callback)</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showLoading</td>\n            <td>显示/隐藏ZfullLayer内部的loading</td>\n            <td>methods.showLoading(show)</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);
//# sourceMappingURL=27.58459bac26f1cb5d9e21.js.map