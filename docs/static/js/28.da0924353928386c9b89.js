(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+fre":function(t,e,n){"use strict";n.r(e);var r=n("2/Rp"),o=n("/HRN"),a=n.n(o),s=n("WaGi"),l=n.n(s),i=n("ZDA2"),c=n.n(i),d=n("/+P4"),u=n.n(d),m=n("N9n2"),p=n.n(m),f=n("q1tI"),h=n.n(f);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return a()(this,o),c()(this,u()(o).apply(this,arguments))}return p()(o,n),l()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return h.a.createElement("div",{ref:function(e){t.boxEl=e}},h.a.createElement(r.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(h.a.PureComponent)}}},"0qhv":function(t,e,n){"use strict";n.r(e);var r=n("EKSK"),o=n("mr32"),a=n("eVuF"),s=n.n(a),l=n("/HRN"),i=n.n(l),c=n("WaGi"),d=n.n(c),u=n("ZDA2"),m=n.n(u),p=n("/+P4"),f=n.n(p),h=n("N9n2"),v=n.n(h),g=n("q1tI"),E=n.n(g),y=n("ebhq"),b=n("A3gy"),w=n.n(b),q=y.a.AmdDocHOC;e.default=q(w.a,{demo1:function(){var t=function(t){function e(){var t,n;i()(this,e);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=m()(this,(t=f()(e)).call.apply(t,[this].concat(a)))).items=[{key:"serviceCode",label:"服务编码",render:function(){return new s.a(function(t){setTimeout(function(){t(function(t,e){return E.a.createElement(o.a,{color:"red"},t)})},5e3)})}},{key:"serviceName",label:"服务名称"}],n.state={data:{serviceCode:"IDDKKDSSDSD",serviceName:"测试治大国"}},n}return v()(e,t),d()(e,[{key:"render",value:function(){return E.a.createElement(r.a,{items:this.items,fieldValue:this.state.data})}}]),e}(E.a.PureComponent);return E.a.createElement(t,null)}})},A3gy:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zinfo">信息展示：Zinfo</h1>\n<p><code>Zinfo</code> 用于展示一组 label 和 value 的组件</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Zinfo } from &quot;zerod&quot;;\nimport { Tag } from &quot;antd&quot;;\nclass Myjavascript extends ZpureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: () =&gt; {\n               //异步加载自定义项\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve((value, record) =&gt; {\n                            return &lt;Tag color=&quot;red&quot;&gt;{value}&lt;/Tag&gt;;\n                        });\n                    }, 5000);\n                });\n                //    return api.getOptions.then(re=&gt;{\n                //         return (value,record)=&gt;{\n                //               return 自定义内容\n                //         }\n                //     })\n            },\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n        },\n    ];\n    state = {\n        data: {\n            serviceCode: &quot;IDDKKDSSDSD&quot;,\n            serviceName: &quot;测试治大国&quot;,\n        },\n    };\n    render() {\n        return &lt;Zinfo items={this.items} fieldValue={this.state.data} /&gt;;\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="zinfo-props">Zinfo 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>fieldValue</td>\n            <td>对应items中key属性的map对象, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="items-">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>label区的宽度，默认"160px"</td>\n            <td>string</td>\n            <td>160px</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>\n            <td>自定义value钩子,render函数必须return一个函数。如果异步加载自定义内容：必须return的是Promise对象(这时候then回调里需return一个函数)。例如使用了后台接口：(form)=>api.getOptions.then(re=>{return <i class="zero-icon zerod-shengchangzhouqi"></i>  (value,record)=>自定义内容)})</td>\n            <td>()=>{return function(value,record){return 自定义内容})}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:6,xl:8,lg:12,md:24}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var r=n("iZP3"),o=n.n(r),a=n("jjl2"),s={},l=[];a.keys().forEach(function(t){var e=void 0;try{e=a(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==o()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var r={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var r=n("MaNN"),o=n("C6MB"),a=n("PwP1"),s=n("TbGu"),l=n.n(s),i=n("/sSO"),c=n("/HRN"),d=n.n(c),u=n("WaGi"),m=n.n(u),p=n("ZDA2"),f=n.n(p),h=n("/+P4"),v=n.n(h),g=n("N9n2"),E=n.n(g),y=n("kB6t"),b=n("q1tI"),w=n.n(b),q=n("i8i4"),z=n.n(q),C=(n("17x9"),n("tW/l")),x=n.n(C);var N=Object(y.a)(),S=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function r(){var t,e;d()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=f()(this,(t=v()(r)).call.apply(t,[this].concat(o)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=i.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),i.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),i.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,r=0;r<n;r++){var o=e.state.navs[r];if(t>=o.el.offsetTop-120){if(!(r<n-1)){o.active=!0;break}var a=e.state.navs[r+1];if(a&&t<a.el.offsetTop-120){o.active=!0;break}}}e.setState({navs:l()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return E()(r,n),m()(r,[{key:"componentWillUnmount",value:function(){S=!0,this.renderEls.forEach(function(t){z.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var r=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var r=t.attributes[n].nodeName;if(/^data-\w+$/.test(r)){var o=t.attributes[n].nodeValue;e[r.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[r.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var a=e[r.render]();t.renderEls.push(n),z.a.render(a,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=r.title?r.title:"",e.appendChild(l),o&&e.appendChild(s),t.appendChild(e),o&&a.appendChild(o),t.appendChild(a),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){S=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){S||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";S=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){S||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return w.a.createElement(o.b.Template,null,w.a.createElement(N,{pageHeader:{show:!1},hasBodyPadding:!1},w.a.createElement("div",{className:"z-panel ".concat(x.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},w.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},w.a.createElement(a.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?z.a.createPortal(w.a.createElement("div",{className:x.a["z-nav-box"],ref:function(t){return e.navEl=t}},w.a.createElement("div",{ref:function(t){return e.navContentEl=t}},w.a.createElement("section",null,this.state.navs.map(function(t,n){return w.a.createElement("div",{title:t.name,className:"".concat(x.a["z-nav"]," ").concat(t.active?x.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),r}(w.a.PureComponent);return r.a.setConsumer(n)}}}}]);
//# sourceMappingURL=28.da0924353928386c9b89.js.map