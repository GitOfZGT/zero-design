(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+fre":function(t,e,n){"use strict";n.r(e);var r=n("L3G2"),a=n.n(r),o=n("Ds8w"),s=n.n(o),l=n("6ato"),i=n.n(l),d=n("2dj7"),c=n.n(d),u=n("Xtzg"),m=n.n(u),f=n("0dFU"),p=n.n(f),h=n("6cB7"),v=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function r(){return i()(this,r),m()(this,(r.__proto__||s()(r)).apply(this,arguments))}return p()(r,n),c()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(e){t.boxEl=e}},v.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(v.a.Component)}}},"0qhv":function(t,e,n){"use strict";n.r(e);var r=n("aXqK"),a=n.n(r),o=n("Asgo"),s=n.n(o),l=n("Ds8w"),i=n.n(l),d=n("6ato"),c=n.n(d),u=n("2dj7"),m=n.n(u),f=n("Xtzg"),p=n.n(f),h=n("0dFU"),v=n.n(h),g=n("6cB7"),y=n.n(g),E=n("tmCC"),b=n("ebhq"),w=n("A3gy"),z=n.n(w),C=b.a.AmdDocHOC;e.default=C(z.a,{demo1:function(){var t=function(t){function e(){var t,n,r,o;c()(this,e);for(var l=arguments.length,d=Array(l),u=0;u<l;u++)d[u]=arguments[u];return n=r=p()(this,(t=e.__proto__||i()(e)).call.apply(t,[this].concat(d))),r.items=[{key:"serviceCode",label:"服务编码",render:function(){return new s.a(function(t){setTimeout(function(){t(function(t,e){return y.a.createElement(a.a,{color:"red"},t)})},5e3)})}},{key:"serviceName",label:"服务名称"}],r.state={data:{serviceCode:"IDDKKDSSDSD",serviceName:"测试治大国"}},o=n,p()(r,o)}return v()(e,t),m()(e,[{key:"render",value:function(){return y.a.createElement(E.k,{items:this.items,fieldValue:this.state.data})}}]),e}(y.a.Component);return y.a.createElement(t,null)}})},A3gy:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zinfo">信息展示：Zinfo</h1>\n<p><code>Zinfo</code> 用于展示一组 label 和 value 的组件</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Zinfo } from &quot;zerod&quot;;\nimport { Tag } from &quot;antd&quot;;\nclass Myjavascript extends React.Component {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: () =&gt; {\n               //异步加载自定义项\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve((value, record) =&gt; {\n                            return &lt;Tag color=&quot;red&quot;&gt;{value}&lt;/Tag&gt;;\n                        });\n                    }, 5000);\n                });\n                //    return api.getOptions.then(re=&gt;{\n                //         return (value,record)=&gt;{\n                //               return 自定义内容\n                //         }\n                //     })\n            },\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n        },\n    ];\n    state = {\n        data: {\n            serviceCode: &quot;IDDKKDSSDSD&quot;,\n            serviceName: &quot;测试治大国&quot;,\n        },\n    };\n    render() {\n        return &lt;Zinfo items={this.items} fieldValue={this.state.data} /&gt;;\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="zinfo-props">Zinfo 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>fieldValue</td>\n            <td>对应items中key属性的map对象, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="items-">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>label区的宽度，默认"160px"</td>\n            <td>string</td>\n            <td>160px</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>\n            <td>自定义value钩子,render函数必须return一个函数。如果异步加载自定义内容：必须return的是Promise对象(这时候then回调里需return一个函数)。例如使用了后台接口：(form)=>api.getOptions.then(re=>{return <i class="zero-icon zerod-shengchangzhouqi"></i>  (value,record)=>自定义内容)})</td>\n            <td>()=>{return function(value,record){return 自定义内容})}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:6,xl:8,lg:12,md:24}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var r=n("Q2cO"),a=n.n(r),o=n("jjl2"),s={},l=[];o.keys().forEach(function(t){var e=void 0;try{e=o(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":a()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),l.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var r={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var r=n("unDg"),a=n.n(r),o=n("Ds8w"),s=n.n(o),l=n("6ato"),i=n.n(l),d=n("2dj7"),c=n.n(d),u=n("Xtzg"),m=n.n(u),f=n("0dFU"),p=n.n(f),h=n("6cB7"),v=n.n(h),g=n("VUem"),y=n.n(g),E=(n("T9cD"),n("tmCC")),b=n("tW/l"),w=n.n(b);var z=Object(E.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function r(){var t,e,n,o;i()(this,r);for(var l=arguments.length,d=Array(l),c=0;c<l;c++)d[c]=arguments[c];return e=n=m()(this,(t=r.__proto__||s()(r)).call.apply(t,[this].concat(d))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var t=[],e=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-n.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&n.setState({navs:t},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var t=E.y.BuildScroll;n.navScroollInstance=new t(n.navEl,{scrollbars:"custom"}),E.y.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),E.y.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var t=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(t){t.active=!1});for(var e=n.state.navs.length,r=0;r<e;r++){var o=n.state.navs[r];if(t>=o.el.offsetTop-120){if(!(r<e-1)){o.active=!0;break}var s=n.state.navs[r+1];if(s&&t<s.el.offsetTop-120){o.active=!0;break}}}n.setState({navs:[].concat(a()(n.state.navs))})}})},n.navScrollTo=function(t){n.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},o=e,m()(n,o)}return p()(r,n),c()(r,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){y.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var r=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var r=t.attributes[n].nodeName;if(/^data-\w+$/.test(r)){var a=t.attributes[n].nodeValue;e[r.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[r.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var o=e[r.render]();t.renderEls.push(n),y.a.render(o,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=r.title?r.title:"",e.appendChild(l),a&&e.appendChild(s),t.appendChild(e),a&&o.appendChild(a),t.appendChild(o),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return v.a.createElement(E.l.Template,null,v.a.createElement(z,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+w.a["z-md-doc"],ref:function(t){return e.mdEl=t}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(E.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?y.a.createPortal(v.a.createElement("div",{className:w.a["z-nav-box"],ref:function(t){return e.navEl=t}},v.a.createElement("div",{ref:function(t){return e.navContentEl=t}},v.a.createElement("section",null,this.state.navs.map(function(t,n){return v.a.createElement("div",{title:t.name,className:w.a["z-nav"]+" "+(t.active?w.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),r}(v.a.Component);return E.i.setConsumer(n)}}}}]);