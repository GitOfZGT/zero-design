(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+fre":function(t,e,n){"use strict";n.r(e);var o=n("JsaA"),a=n("GPkD"),r=n.n(a),l=n("pv+U"),c=n.n(l),s=n("aTAs"),i=n.n(s),d=n("k7W2"),u=n.n(d),h=n("zqcf"),p=n.n(h),f=n("rdAL"),m=n.n(f);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return r()(this,a),i()(this,u()(a).apply(this,arguments))}return p()(a,n),c()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return m.a.createElement("div",{ref:function(e){t.boxEl=e}},m.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(m.a.PureComponent)}}},aX1M:function(t,e,n){"use strict";n.r(e);var o=n("p1xe"),a=n("+qoS"),r=n("GPkD"),l=n.n(r),c=n("pv+U"),s=n.n(c),i=n("aTAs"),d=n.n(i),u=n("k7W2"),h=n.n(u),p=n("zqcf"),f=n.n(p),m=n("rdAL"),v=n.n(m),g=n("ebhq"),y=n("bnU3"),E=n.n(y),w=g.a.AmdDocHOC;e.default=w(E.a,{demo1:function(){var t=function(t){function e(){var t,n;l()(this,e);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(n=d()(this,(t=h()(e)).call.apply(t,[this].concat(r)))).footerLinks=[{key:"hua-cloud",title:"华云中盛科技有限公司",href:"http://www.hua-cloud.com.cn/",blankTarget:!0},{key:"szhcf",title:"华成峰集团",href:"http://www.szhcf.com.cn/",blankTarget:!0}],n.footerCopyright=v.a.createElement("div",null,"Copyright ",v.a.createElement(a.a,{type:"copyright"})," 2018 华云中盛-政务事业部技术团队出品"),n}return f()(e,t),s()(e,[{key:"render",value:function(){return v.a.createElement(o.b,{links:this.footerLinks,copyright:this.footerCopyright})}}]),e}(v.a.PureComponent);return v.a.createElement(t,null)}})},bnU3:function(t,e){t.exports='<h1 id="-zpagefooter">页脚组件：ZpageFooter</h1>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZpageFooter } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\nclass PageFooter extends React.PureComponent {\n    footerLinks = [\n        {\n            key: &quot;hua-cloud&quot;,\n            title: &quot;华云中盛科技有限公司&quot;,\n            href: &quot;http://www.hua-cloud.com.cn/&quot;,\n            blankTarget: true,\n        },\n        {\n            key: &quot;szhcf&quot;,\n            title: &quot;华成峰集团&quot;,\n            href: &quot;http://www.szhcf.com.cn/&quot;,\n            blankTarget: true,\n        },\n    ];\n    footerCopyright = () =&gt; (\n        &lt;div&gt;\n            Copyright &lt;Icon type=&quot;copyright&quot; /&gt; 2018 华云中盛-政务事业部技术团队出品\n        &lt;/div&gt;\n    );\n    render() {\n        return &lt;ZpageFooter links={this.footerLinks} copyright={this.footerCopyright} /&gt;;\n    }\n}\n\nexport default PageFooter;</code></pre>\n<h2 id="zpagefooter-props">ZpageFooter 的 Props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>links</td>\n            <td>快速链接</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> copyright</td>\n            <td>版权信息</td>\n            <td>string | function</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";n("Vsw1"),n("yDl1");var o=n("6h6h"),a=n.n(o),r=(n("/2a5"),n("P4eO"),n("jjl2")),l={},c=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==a()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),c.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));c.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("MaNN"),a=n("C6MB"),r=(n("yDl1"),n("PwP1")),l=(n("Vsw1"),n("4Loy"),n("U7Fr")),c=n.n(l),s=n("/sSO"),i=(n("P4eO"),n("GPkD")),d=n.n(i),u=n("pv+U"),h=n.n(u),p=n("aTAs"),f=n.n(p),m=n("k7W2"),v=n.n(m),g=n("zqcf"),y=n.n(g),E=n("kB6t"),w=(n("YTQH"),n("rdAL")),b=n.n(w),k=n("FFPy"),z=n.n(k),C=(n("T9cD"),n("tW/l")),q=n.n(C);var x=Object(E.a)(),T=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function o(){var t,e;d()(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=f()(this,(t=v()(o)).call.apply(t,[this].concat(a)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=s.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),s.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),s.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var a=e.state.navs[o];if(t>=a.el.offsetTop-120){if(!(o<n-1)){a.active=!0;break}var r=e.state.navs[o+1];if(r&&t<r.el.offsetTop-120){a.active=!0;break}}}e.setState({navs:c()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return y()(o,n),h()(o,[{key:"componentWillUnmount",value:function(){T=!0,this.renderEls.forEach(function(t){z.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=e[o.render]();t.renderEls.push(n),z.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var c=document.createElement("span");c.innerText=o.title?o.title:"",e.appendChild(c),a&&e.appendChild(l),t.appendChild(e),a&&r.appendChild(a),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){T=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){T||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";T=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){T||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return b.a.createElement(a.b.Template,null,b.a.createElement(x,{pageHeader:{show:!1},hasBodyPadding:!1},b.a.createElement("div",{className:"z-panel ".concat(q.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},b.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},b.a.createElement(r.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?z.a.createPortal(b.a.createElement("div",{className:q.a["z-nav-box"],ref:function(t){return e.navEl=t}},b.a.createElement("div",{ref:function(t){return e.navContentEl=t}},b.a.createElement("section",null,this.state.navs.map(function(t,n){return b.a.createElement("div",{title:t.name,className:"".concat(q.a["z-nav"]," ").concat(t.active?q.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(b.a.PureComponent);return o.a.setConsumer(n)}}}}]);