(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+fre":function(e,t,n){"use strict";n.r(t);var a=n("lRmw"),r=n("aLtU"),o=n.n(r),l=n("2x50"),s=n.n(l),c=n("gEKl"),i=n.n(c),d=n("HTqB"),u=n.n(d),m=n("DLeZ"),p=n.n(m),h=n("uqIC"),f=n.n(h);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function r(){return o()(this,r),i()(this,u()(r).apply(this,arguments))}return p()(r,n),s()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return f.a.createElement("div",{ref:function(t){e.boxEl=t}},f.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(f.a.PureComponent)}}},eb3m:function(e,t){e.exports='<h1 id="-zbgimage">展示图片：ZbgImage</h1>\n<p><code>ZbgImage</code>是以背景图的方式展示一张图片</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">//默认：无url\n&lt;ZbgImage style={{height:&quot;240px&quot;}}/&gt;\n//有url，position:&quot;center&quot;\n&lt;ZbgImage style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;\n//有url，position:&quot;top&quot;\n&lt;ZbgImage position=&quot;top&quot; style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;</code></pre>\n<h2 id="zbgimage-props">ZbgImage 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>url</td>\n            <td>背景图片路径</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>position</td>\n            <td>背景图片在可视区域的位置</td>\n            <td>center | top</td>\n            <td>center</td>\n        </tr>\n        <tr>\n            <td>onClick</td>\n            <td>点击事件</td>\n            <td>funtion(e){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>children</td>\n            <td>可选择放一些子内容通过绝对定位浮于背景图之上</td>\n            <td>ReactNode</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(e,t,n){"use strict";var a=n("M36X"),r=n.n(a),o=n("jjl2"),l={},s=[];o.keys().forEach(function(e){var t=void 0;try{t=o(e).default}catch(t){throw Error("".concat(e,":").concat(t))}if(void 0===t||"object"!==r()(t))throw Error("".concat(e,":内没有 export default 或者export default格式有误 "));if("function"!=typeof t.HOC)throw Error("".concat(e,":HOC有误"));var n=t.name;if("string"!=typeof n)throw Error("".concat(e,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(e,":name属性请以A开头HOC结尾"));if(n=n.trim(),s.includes(n))throw Error("".concat(e,":").concat(n,"此HOC名称已被使用"));s.push(n),l[n]=t.HOC}),t.a=l},jjl2:function(e,t,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="jjl2"},pnNO:function(e,t,n){"use strict";n.r(t);var a=n("Z3zS"),r=n("MaNN"),o=n("C6MB"),l=n("PwP1"),s=n("MDOJ"),c=n.n(s),i=n("/sSO"),d=n("aLtU"),u=n.n(d),m=n("2x50"),p=n.n(m),h=n("gEKl"),f=n.n(h),g=n("HTqB"),v=n.n(g),y=n("DLeZ"),E=n.n(y),b=n("kB6t"),w=n("uqIC"),z=n.n(w),x=n("jCnN"),C=n.n(x),q=(n("EH+i"),n("tW/l")),N=n.n(q);var S=Object(b.a)(),k=!1;var M=function(e){function t(){var e,n;u()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=f()(this,(e=v()(t)).call.apply(e,[this].concat(r)))).methods={setHeader:function(e){n.setState({layerHeader:e})},setContent:function(e){n.setState({layerContent:e})}},n.state={layerHeader:null,layerContent:null},n.getMethods=function(e){n.layerMethods=e},n}return E()(t,e),p()(t,[{key:"render",value:function(){var e=this.state,t=e.layerHeader,n=e.layerContent;return z.a.createElement(a.a,{header:t,exportMethods:this.getMethods},n)}}]),t}(z.a.PureComponent);t.default={name:"AmdDocHOC",HOC:function(e,t){e='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+e;var n=function(n){function a(){var e,t;u()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=f()(this,(e=v()(a)).call.apply(e,[this].concat(r)))).renderEls=[],t.state={navs:[],closeModaled:!0},t.setNavs=function(){var e=[],n=t.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){e.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-t.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),e.length&&t.setState({navs:e},function(){if(t.bindScrollEvent(),t.navEl&&t.navContentEl){var e=i.g.BuildScroll;t.navScroollInstance=new e(t.navEl,{scrollbars:"custom"}),i.g.listenDivSizeChange(t.navEl,t.navScroollInstance.refresh),i.g.listenDivSizeChange(t.navContentEl,t.navScroollInstance.refresh)}})},t.scrollEnd=function(){var e=-t.scrollInstance.scroll.y;t.state.navs.forEach(function(e){e.active=!1});for(var n=t.state.navs.length,a=0;a<n;a++){var r=t.state.navs[a];if(e>=r.el.offsetTop-120){if(!(a<n-1)){r.active=!0;break}var o=t.state.navs[a+1];if(o&&e<o.el.offsetTop-120){r.active=!0;break}}}t.setState({navs:c()(t.state.navs)})},t.bindScrollEvent=function(){t.scrollInstance.scroll.on("scrollEnd",t.scrollEnd)},t.navScrollTo=function(e){t.scrollInstance.scroll.scrollTo(0,-(e.el.offsetTop-24),200)},t.layerRef=z.a.createRef(),t}return E()(a,n),p()(a,[{key:"componentWillUnmount",value:function(){k=!0,this.renderEls.forEach(function(e){C.a.unmountComponentAtNode(e)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var a=e.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var r=e.attributes[n].nodeValue;t[a.match(/^data-(\w+)/)[1]]=r}}return t}(n);if(t&&"function"==typeof t[a.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var o=t[a.render]();e.renderEls.push(n),C.a.render(o,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=a.title?a.title:"",t.appendChild(s),r&&t.appendChild(l),e.appendChild(t),r&&o.appendChild(r),e.appendChild(o),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){if(k=!1,"function"==typeof t.target._render){var n=t.target._render();if("layer"!=n.windowType)e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:n,scroll:t.target._scroll,onTransitionend:function(t){k||e.setState({closeModaled:!t})}});else{var a=n.header,r=n.content;e.layerRef.current.methods.setHeader(a),e.layerRef.current.methods.setContent(r),e.layerRef.current.layerMethods.showLayer(!0,null,!0)()}}},10)},!1),this.mdEl.addEventListener("click",function(t){if("string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";k=!1,e.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(t){k||e.setState({closeModaled:!t})}}),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof t.target.className&&t.target.className.includes("z-history-href")){var n=t.target.dataset.path;"string"==typeof n&&e.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){e.setNavs()},100)}},{key:"render",value:function(){var t=this;return z.a.createElement(o.b.Template,null,z.a.createElement(S,{pageHeader:{show:!1},hasBodyPadding:!1},z.a.createElement("div",{className:"z-panel ".concat(N.a["z-md-doc"]),ref:function(e){return t.mdEl=e}},z.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},z.a.createElement(l.a,{mode:"html"},e)))),this.state.navs.length&&this.state.closeModaled?C.a.createPortal(z.a.createElement("div",{className:N.a["z-nav-box"],ref:function(e){return t.navEl=e}},z.a.createElement("div",{ref:function(e){return t.navContentEl=e}},z.a.createElement("section",null,this.state.navs.map(function(e,n){return z.a.createElement("div",{title:e.name,className:"".concat(N.a["z-nav"]," ").concat(e.active?N.a.active:""),key:n,onClick:function(){t.navScrollTo(e)}},e.name)})))),document.body):null,z.a.createElement(M,{ref:this.layerRef}))}}]),a}(z.a.PureComponent);return r.a.setConsumer(n)}}},xwxM:function(e,t,n){"use strict";n.r(t);var a=n("FpWK"),r=n("kbW3"),o=n("LYpx"),l=n("aLtU"),s=n.n(l),c=n("2x50"),i=n.n(c),d=n("gEKl"),u=n.n(d),m=n("HTqB"),p=n.n(m),h=n("DLeZ"),f=n.n(h),g=n("uqIC"),v=n.n(g),y=n("ebhq"),E=n("eb3m"),b=n.n(E),w=y.a.AmdDocHOC;t.default=w(b.a,{demo1:function(){var e=function(e){function t(){return s()(this,t),u()(this,p()(t).apply(this,arguments))}return f()(t,e),i()(t,[{key:"render",value:function(){return v.a.createElement(a.a,{gutter:20},v.a.createElement(r.a,{span:8},v.a.createElement(o.a,{style:{height:"300px"}}),v.a.createElement("p",{className:"z-text-center z-margin-top-15"},v.a.createElement("span",{className:"z-text-gray z-margin-left-5"},"默认：无url"))),v.a.createElement(r.a,{span:8},v.a.createElement(o.a,{style:{height:"300px"},url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598348104&di=4e0d2935d8b0d5f0d716b61652354e16&imgtype=0&src=http%3A%2F%2Fpic2016.ytqmx.com%3A82%2F2016%2F0804%2F36%2F4.jpg%2521960.jpg"}),v.a.createElement("p",{className:"z-text-center z-margin-top-15"},v.a.createElement("span",{className:"z-text-gray z-margin-left-5"},'有url，position:"center"'))),v.a.createElement(r.a,{span:8},v.a.createElement(o.a,{position:"top",style:{height:"300px"},url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598529458&di=be8bc62d177075515b4d4c82a5ea6cc8&imgtype=0&src=http%3A%2F%2Fimg2015.zdface.com%2F20180720%2Fe4b632ad21ce12e7b5c731a2475aff5a.jpg"}),v.a.createElement("p",{className:"z-text-center z-margin-top-15"},v.a.createElement("span",{className:"z-text-gray z-margin-left-5"},'有url，position:"top"'))))}}]),t}(v.a.PureComponent);return v.a.createElement(e,null)}})}}]);
//# sourceMappingURL=26.031db7feb4550590300d.js.map