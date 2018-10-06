(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+fre":function(t,e,n){"use strict";n.r(e);n("+L6B");var o=n("2/Rp"),r=n("Yz+Y"),a=n.n(r),d=n("iCc5"),c=n.n(d),i=n("V7oC"),l=n.n(i),s=n("FYw3"),u=n.n(s),p=n("mRg0"),m=n.n(p),h=n("q1tI"),f=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function r(){return c()(this,r),u()(this,(r.__proto__||a()(r)).apply(this,arguments))}return m()(r,n),l()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(f.a.Component)}}},Fnhc:function(t,e){t.exports='<h1 id="-zcolorpicker">颜色选择器：ZcolorPicker</h1>\n<p><code>ZcolorPicker</code>是一个颜色选择器控件，支持在<code>Form</code>、<code>Zform</code>等表单中使用</p>\n<p>依赖 <a href="http://casesandberg.github.io/react-color/" target="_blank">react-color 库</a> ，目前只选用了<code>react-color</code>的<code>SketchPicker</code>组件</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZcolorPicker } from &quot;zerod&quot;;\nclass Myjavascript extends React.Component {\n    state = {\n        color: &quot;#FFFFFF&quot;,\n    };\n    colorChange = (value) =&gt; {\n        console.log(value);\n    };\n    render() {\n        return &lt;ZcolorPicker value={this.state.state} onChange={this.colorChange} valueType=&quot;hex&quot; /&gt;;\n    }\n}</code></pre>\n<h2 id="zcolorpicker-props">ZcolorPicker 的 props</h2>\n<p>可追加<code>className</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n         <tr>\n            <td>valueType</td>\n            <td>颜色值类型,hex:十六进制模式，rgb：RGB模式(包括rgba)</td>\n            <td>hex | rgb</td>\n            <td>hex</td>\n        </tr>\n        <tr>\n            <td>value</td>\n            <td>颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultValue</td>\n            <td>第一次渲染的颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>颜色值改变后触发</td>\n            <td>(value)=>{}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var o=n("EJiy"),r=n.n(o),a=n("jjl2"),d={},c=[];a.keys().forEach(function(t){var e=void 0;try{e=a(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":r()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),c.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");c.push(n),d[n]=e.HOC}),e.a=d},g6qu:function(t,e,n){"use strict";n.r(e);var o=n("Yz+Y"),r=n.n(o),a=n("iCc5"),d=n.n(a),c=n("V7oC"),i=n.n(c),l=n("FYw3"),s=n.n(l),u=n("mRg0"),p=n.n(u),m=n("q1tI"),h=n.n(m),f=n("tmCC"),v=n("ebhq"),g=n("Fnhc"),y=n.n(g),C=v.a.AmdDocHOC;e.default=C(y.a,{demo1:function(){var t=function(t){function e(){return d()(this,e),s()(this,(e.__proto__||r()(e)).apply(this,arguments))}return p()(e,t),i()(e,[{key:"render",value:function(){return h.a.createElement(f.e,null)}}]),e}(h.a.Component);return h.a.createElement(t,null)}})},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("Yz+Y"),r=n.n(o),a=n("iCc5"),d=n.n(a),c=n("V7oC"),i=n.n(c),l=n("FYw3"),s=n.n(l),u=n("mRg0"),p=n.n(u),m=n("q1tI"),h=n.n(m),f=n("i8i4"),v=n.n(f),g=(n("17x9"),n("tmCC")),y=n("tW/l"),C=n.n(y);var b=Object(g.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function o(){var t,e,n,a;d()(this,o);for(var c=arguments.length,i=Array(c),l=0;l<c;l++)i[l]=arguments[l];return e=n=s()(this,(t=o.__proto__||r()(o)).call.apply(t,[this].concat(i))),n.renderEls=[],a=e,s()(n,a)}return p()(o,n),i()(o,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(t){v.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var r=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=r}}return e}(n);if(e&&"function"==typeof e[o.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var a=e[o.render]();t.renderEls.push(n),v.a.render(a,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var d=document.createElement("img");d.addEventListener("click",function(){d.src=d.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=d.open?"0px":"auto",d.open=!d.open},!1),d.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var c=document.createElement("span");c.innerText=o.title?o.title:"",e.appendChild(c),r&&e.appendChild(d),t.appendChild(e),r&&a.appendChild(r),t.appendChild(a),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(t){}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal(!0,n,null,!0),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)})}},{key:"render",value:function(){var e=this;return h.a.createElement(b,{pageHeader:{show:!1},hasBodyPadding:!1},h.a.createElement("div",{className:"z-panel "+C.a["z-md-doc"],ref:function(t){return e.mdEl=t}},h.a.createElement("div",{className:"z-panel-body"},h.a.createElement(g.d,{mode:"html"},t))))}}]),o}(h.a.Component);return g.i.setConsumer(n)}}}}]);