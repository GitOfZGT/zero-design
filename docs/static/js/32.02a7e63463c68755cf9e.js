(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("JsaA"),o=n("GPkD"),r=n.n(o),s=n("pv+U"),l=n.n(s),i=n("aTAs"),c=n.n(i),d=n("k7W2"),u=n.n(d),p=n("zqcf"),m=n.n(p),h=n("rdAL"),f=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return r()(this,o),c()(this,u()(o).apply(this,arguments))}return m()(o,n),l()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.Component)}}},"9Yq9":function(t,e){t.exports='<h1 id="-zpageloading">页面加载组件：ZpageLoading</h1>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="相对于最近的position:relative;的父元素的绝对定位，水平垂直显示loading"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZpageLoading, Zlayout } from &quot;zerod&quot;;\nimport { Button } from &quot;antd&quot;;\nclass Myjavascript extends React.Component {\n    state = {\n        isShowLoading: false,\n    };\n    methods = {\n        onClick: () =&gt; {\n            this.setState({\n                isShowLoading: true,\n            });\n            setTimeout(() =&gt; {\n                this.setState({\n                    isShowLoading: false,\n                });\n            }, 5000);\n        },\n    };\n    render() {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;Button type=&quot;primary&quot; onClick={this.methods.onClick}&gt;\n                    显示loading\n                &lt;/Button&gt;\n                &lt;ZpageLoading showLoading={this.state.isShowLoading} /&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    }\n}</code></pre>\n<h2 id="zpageloading-props">ZpageLoading 的 Props</h2>\n<p>除了如下属性，还支持 <a href="https://ant.design/components/spin-cn/">Antd 的 Spin组件的属性</a></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLoading</td>\n            <td>是否显示加载图标</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";n("Vsw1"),n("yDl1");var a=n("6h6h"),o=n.n(a),r=(n("/2a5"),n("P4eO"),n("jjl2")),s={},l=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==o()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("MaNN"),o=n("C6MB"),r=(n("yDl1"),n("PwP1")),s=(n("Vsw1"),n("4Loy"),n("U7Fr")),l=n.n(s),i=n("/sSO"),c=(n("P4eO"),n("GPkD")),d=n.n(c),u=n("pv+U"),p=n.n(u),m=n("aTAs"),h=n.n(m),f=n("k7W2"),v=n.n(f),g=n("zqcf"),E=n.n(g),y=n("kB6t"),w=(n("YTQH"),n("rdAL")),b=n.n(w),C=n("FFPy"),S=n.n(C),k=(n("T9cD"),n("tW/l")),z=n.n(k);var T=Object(y.a)(),L=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function a(){var t,e;d()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=h()(this,(t=v()(a)).call.apply(t,[this].concat(o)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=i.g.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),i.g.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),i.g.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,a=0;a<n;a++){var o=e.state.navs[a];if(t>=o.el.offsetTop-120){if(!(a<n-1)){o.active=!0;break}var r=e.state.navs[a+1];if(r&&t<r.el.offsetTop-120){o.active=!0;break}}}e.setState({navs:l()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return E()(a,n),p()(a,[{key:"componentWillUnmount",value:function(){L=!0,this.renderEls.forEach(function(t){S.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var o=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[a.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[a.render]();t.renderEls.push(n),S.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=a.title?a.title:"",e.appendChild(l),o&&e.appendChild(s),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){L=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){L||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";L=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){L||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return b.a.createElement(o.b.Template,null,b.a.createElement(T,{pageHeader:{show:!1},hasBodyPadding:!1},b.a.createElement("div",{className:"z-panel ".concat(z.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},b.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},b.a.createElement(r.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?S.a.createPortal(b.a.createElement("div",{className:z.a["z-nav-box"],ref:function(t){return e.navEl=t}},b.a.createElement("div",{ref:function(t){return e.navContentEl=t}},b.a.createElement("section",null,this.state.navs.map(function(t,n){return b.a.createElement("div",{title:t.name,className:"".concat(z.a["z-nav"]," ").concat(t.active?z.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(b.a.Component);return a.a.setConsumer(n)}}},wOzl:function(t,e,n){"use strict";n.r(e);var a=n("C6MB"),o=n("/gcJ"),r=n("JsaA"),s=n("GPkD"),l=n.n(s),i=n("pv+U"),c=n.n(i),d=n("aTAs"),u=n.n(d),p=n("k7W2"),m=n.n(p),h=n("zqcf"),f=n.n(h),v=n("rdAL"),g=n.n(v),E=n("ebhq"),y=n("9Yq9"),w=n.n(y),b=E.a.AmdDocHOC;e.default=b(w.a,{demo1:function(){var t=function(t){function e(){var t,n;l()(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=u()(this,(t=m()(e)).call.apply(t,[this].concat(o)))).state={isShowLoading:!1},n.methods={onClick:function(){n.setState({isShowLoading:!0}),setTimeout(function(){n.setState({isShowLoading:!1})},5e3)}},n}return f()(e,t),c()(e,[{key:"render",value:function(){return g.a.createElement(a.b.Template,null,g.a.createElement(r.a,{type:"primary",onClick:this.methods.onClick},"显示loading"),g.a.createElement(o.b,{showLoading:this.state.isShowLoading}))}}]),e}(g.a.Component);return g.a.createElement(t,null)}})}}]);