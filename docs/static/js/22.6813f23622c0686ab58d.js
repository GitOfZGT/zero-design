(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+fre":function(t,e,n){"use strict";n.r(e);n("89bW");var o=n("XXxv"),a=n("Ds8w"),r=n.n(a),l=n("6ato"),s=n.n(l),i=n("2dj7"),c=n.n(i),d=n("Xtzg"),u=n.n(d),m=n("0dFU"),p=n.n(m),f=n("ZS5U"),h=n.n(f);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return s()(this,a),u()(this,(a.__proto__||r()(a)).apply(this,arguments))}return p()(a,n),c()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return h.a.createElement("div",{ref:function(e){t.boxEl=e}},h.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(h.a.Component)}}},"9Yq9":function(t,e){t.exports='<h1 id="-zpageloading">页面加载组件：ZpageLoading</h1>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="相对于最近的position:relative;的父元素的绝对定位，水平垂直显示loading"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZpageLoading, Zlayout } from &quot;zerod&quot;;\nimport { Button } from &quot;antd&quot;;\nclass Myjavascript extends React.Component {\n    state = {\n        isShowLoading: false,\n    };\n    methods = {\n        onClick: () =&gt; {\n            this.setState({\n                isShowLoading: true,\n            });\n            setTimeout(() =&gt; {\n                this.setState({\n                    isShowLoading: false,\n                });\n            }, 5000);\n        },\n    };\n    render() {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;Button type=&quot;primary&quot; onClick={this.methods.onClick}&gt;\n                    显示loading\n                &lt;/Button&gt;\n                &lt;ZpageLoading showLoading={this.state.isShowLoading} /&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    }\n}</code></pre>\n<h2 id="zpageloading-props">ZpageLoading 的 Props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLoading</td>\n            <td>是否显示加载图标</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var o=n("Q2cO"),a=n.n(o),r=n("jjl2"),l={},s=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":a()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),s.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");s.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("unDg"),a=n.n(o),r=n("Ds8w"),l=n.n(r),s=n("6ato"),i=n.n(s),c=n("2dj7"),d=n.n(c),u=n("Xtzg"),m=n.n(u),p=n("0dFU"),f=n.n(p),h=n("ZS5U"),v=n.n(h),g=n("FY2y"),E=n.n(g),y=(n("T9cD"),n("tmCC")),w=n("tW/l"),b=n.n(w);var C=Object(y.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function o(){var t,e,n,r;i()(this,o);for(var s=arguments.length,c=Array(s),d=0;d<s;d++)c[d]=arguments[d];return e=n=m()(this,(t=o.__proto__||l()(o)).call.apply(t,[this].concat(c))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var t=[],e=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-n.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&n.setState({navs:t},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var t=y.x.BuildScroll;n.navScroollInstance=new t(n.navEl,{scrollbars:"custom"}),y.x.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),y.x.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var t=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(t){t.active=!1});for(var e=n.state.navs.length,o=0;o<e;o++){var r=n.state.navs[o];if(t>=r.el.offsetTop-120){if(!(o<e-1)){r.active=!0;break}var l=n.state.navs[o+1];if(l&&t<l.el.offsetTop-120){r.active=!0;break}}}n.setState({navs:[].concat(a()(n.state.navs))})}})},n.navScrollTo=function(t){n.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},r=e,m()(n,r)}return f()(o,n),d()(o,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){E.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=e[o.render]();t.renderEls.push(n),E.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=o.title?o.title:"",e.appendChild(s),a&&e.appendChild(l),t.appendChild(e),a&&r.appendChild(a),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return v.a.createElement(y.l.Template,null,v.a.createElement(C,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+b.a["z-md-doc"],ref:function(t){return e.mdEl=t}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 120px)"}:{}},v.a.createElement(y.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?E.a.createPortal(v.a.createElement("div",{className:b.a["z-nav-box"],ref:function(t){return e.navEl=t}},v.a.createElement("div",{ref:function(t){return e.navContentEl=t}},v.a.createElement("section",null,this.state.navs.map(function(t,n){return v.a.createElement("div",{title:t.name,className:b.a["z-nav"]+" "+(t.active?b.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(v.a.Component);return y.i.setConsumer(n)}}},wOzl:function(t,e,n){"use strict";n.r(e);n("89bW");var o=n("XXxv"),a=n("Ds8w"),r=n.n(a),l=n("6ato"),s=n.n(l),i=n("2dj7"),c=n.n(i),d=n("Xtzg"),u=n.n(d),m=n("0dFU"),p=n.n(m),f=n("ZS5U"),h=n.n(f),v=n("tmCC"),g=n("ebhq"),E=n("9Yq9"),y=n.n(E),w=g.a.AmdDocHOC;e.default=w(y.a,{demo1:function(){var t=function(t){function e(){var t,n,o,a;s()(this,e);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=o=u()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(i))),o.state={isShowLoading:!1},o.methods={onClick:function(){o.setState({isShowLoading:!0}),setTimeout(function(){o.setState({isShowLoading:!1})},5e3)}},a=n,u()(o,a)}return p()(e,t),c()(e,[{key:"render",value:function(){return h.a.createElement(v.l.Template,null,h.a.createElement(o.a,{type:"primary",onClick:this.methods.onClick},"显示loading"),h.a.createElement(v.q,{showLoading:this.state.isShowLoading}))}}]),e}(h.a.Component);return h.a.createElement(t,null)}})}}]);