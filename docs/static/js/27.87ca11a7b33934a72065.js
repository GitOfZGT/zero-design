(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("JsaA"),r=n("GPkD"),o=n.n(r),s=n("pv+U"),l=n.n(s),i=n("aTAs"),c=n.n(i),d=n("k7W2"),u=n.n(d),m=n("zqcf"),f=n.n(m),h=n("rdAL"),p=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function r(){return o()(this,r),c()(this,u()(r).apply(this,arguments))}return f()(r,n),l()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return p.a.createElement("div",{ref:function(e){t.boxEl=e}},p.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(p.a.PureComponent)}}},"0qhv":function(t,e,n){"use strict";n.r(e);var a=n("EKSK"),r=n("8iAp"),o=n("S0qk"),s=n.n(o),l=n("GPkD"),i=n.n(l),c=n("pv+U"),d=n.n(c),u=n("aTAs"),m=n.n(u),f=n("k7W2"),h=n.n(f),p=n("zqcf"),v=n.n(p),g=n("rdAL"),y=n.n(g),E=n("ebhq"),b=n("A3gy"),w=n.n(b),z=E.a.AmdDocHOC;e.default=z(w.a,{demo1:function(){var t=function(t){function e(){var t,n;i()(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=m()(this,(t=h()(e)).call.apply(t,[this].concat(o)))).items=[{key:"serviceCode",label:"服务编码",render:function(){return new s.a(function(t){setTimeout(function(){t(function(t,e){return y.a.createElement(r.a,{color:"red"},t)})},5e3)})}},{key:"serviceName",label:"服务名称"}],n.state={data:{serviceCode:"IDDKKDSSDSD",serviceName:"测试治大国"}},n}return v()(e,t),d()(e,[{key:"render",value:function(){return y.a.createElement(a.a,{items:this.items,fieldValue:this.state.data})}}]),e}(y.a.PureComponent);return y.a.createElement(t,null)}})},A3gy:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zinfo">信息展示：Zinfo</h1>\n<p><code>Zinfo</code> 用于展示一组 label 和 value 的组件</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Zinfo } from &quot;zerod&quot;;\nimport { Tag } from &quot;antd&quot;;\nclass Myjavascript extends React.PureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: () =&gt; {\n               //异步加载自定义项\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve((value, record) =&gt; {\n                            return &lt;Tag color=&quot;red&quot;&gt;{value}&lt;/Tag&gt;;\n                        });\n                    }, 5000);\n                });\n                //    return api.getOptions.then(re=&gt;{\n                //         return (value,record)=&gt;{\n                //               return 自定义内容\n                //         }\n                //     })\n            },\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n        },\n    ];\n    state = {\n        data: {\n            serviceCode: &quot;IDDKKDSSDSD&quot;,\n            serviceName: &quot;测试治大国&quot;,\n        },\n    };\n    render() {\n        return &lt;Zinfo items={this.items} fieldValue={this.state.data} /&gt;;\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="zinfo-props">Zinfo 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>fieldValue</td>\n            <td>对应items中key属性的map对象, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="items-">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>label区的宽度，默认"160px"</td>\n            <td>string</td>\n            <td>160px</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>\n            <td>自定义value钩子,render函数必须return一个函数。如果异步加载自定义内容：必须return的是Promise对象(这时候then回调里需return一个函数)。例如使用了后台接口：(form)=>api.getOptions.then(re=>{return <i class="zero-icon zerod-shengchangzhouqi"></i>  (value,record)=>自定义内容)})</td>\n            <td>()=>{return function(value,record){return 自定义内容})}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:6,xl:8,lg:12,md:24}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";n("Vsw1"),n("yDl1");var a=n("6h6h"),r=n.n(a),o=(n("/2a5"),n("P4eO"),n("jjl2")),s={},l=[];o.keys().forEach(function(t){var e=void 0;try{e=o(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==r()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(t){var e=o(t);return n(e)}function o(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("MaNN"),r=n("C6MB"),o=(n("yDl1"),n("PwP1")),s=(n("Vsw1"),n("4Loy"),n("U7Fr")),l=n.n(s),i=n("/sSO"),c=(n("P4eO"),n("GPkD")),d=n.n(c),u=n("pv+U"),m=n.n(u),f=n("aTAs"),h=n.n(f),p=n("k7W2"),v=n.n(p),g=n("zqcf"),y=n.n(g),E=n("kB6t"),b=(n("YTQH"),n("rdAL")),w=n.n(b),z=n("FFPy"),q=n.n(z),C=(n("T9cD"),n("tW/l")),S=n.n(C);var k=Object(E.a)(),x=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function a(){var t,e;d()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=h()(this,(t=v()(a)).call.apply(t,[this].concat(r)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=i.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),i.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),i.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,a=0;a<n;a++){var r=e.state.navs[a];if(t>=r.el.offsetTop-120){if(!(a<n-1)){r.active=!0;break}var o=e.state.navs[a+1];if(o&&t<o.el.offsetTop-120){r.active=!0;break}}}e.setState({navs:l()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return y()(a,n),m()(a,[{key:"componentWillUnmount",value:function(){x=!0,this.renderEls.forEach(function(t){q.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var r=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=r}}return e}(n);if(e&&"function"==typeof e[a.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var o=e[a.render]();t.renderEls.push(n),q.a.render(o,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=a.title?a.title:"",e.appendChild(l),r&&e.appendChild(s),t.appendChild(e),r&&o.appendChild(r),t.appendChild(o),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){x=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){x||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";x=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){x||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return w.a.createElement(r.b.Template,null,w.a.createElement(k,{pageHeader:{show:!1},hasBodyPadding:!1},w.a.createElement("div",{className:"z-panel ".concat(S.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},w.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},w.a.createElement(o.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?q.a.createPortal(w.a.createElement("div",{className:S.a["z-nav-box"],ref:function(t){return e.navEl=t}},w.a.createElement("div",{ref:function(t){return e.navContentEl=t}},w.a.createElement("section",null,this.state.navs.map(function(t,n){return w.a.createElement("div",{title:t.name,className:"".concat(S.a["z-nav"]," ").concat(t.active?S.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(w.a.PureComponent);return a.a.setConsumer(n)}}}}]);