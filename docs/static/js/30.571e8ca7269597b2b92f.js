(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+fre":function(t,e,n){"use strict";n.r(e);var r=n("lRmw"),a=n("aLtU"),o=n.n(a),l=n("2x50"),s=n.n(l),i=n("gEKl"),c=n.n(i),d=n("HTqB"),u=n.n(d),m=n("DLeZ"),f=n.n(m),h=n("uqIC"),p=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return o()(this,a),c()(this,u()(a).apply(this,arguments))}return f()(a,n),s()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return p.a.createElement("div",{ref:function(e){t.boxEl=e}},p.a.createElement(r.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(p.a.PureComponent)}}},"0qhv":function(t,e,n){"use strict";n.r(e);var r=n("EKSK"),a=n("U/OQ"),o=n("pZ7Q"),l=n.n(o),s=n("aLtU"),i=n.n(s),c=n("2x50"),d=n.n(c),u=n("gEKl"),m=n.n(u),f=n("HTqB"),h=n.n(f),p=n("DLeZ"),v=n.n(p),g=n("uqIC"),y=n.n(g),E=n("ebhq"),b=n("A3gy"),C=n.n(b),w=E.a.AmdDocHOC;e.default=w(C.a,{demo1:function(){var t=function(t){function e(){var t,n;i()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=m()(this,(t=h()(e)).call.apply(t,[this].concat(o)))).items=[{key:"serviceCode",label:"服务编码",render:function(){return new l.a(function(t){setTimeout(function(){t(function(t,e){return y.a.createElement(a.a,{color:"red"},t)})},5e3)})}},{key:"serviceName",label:"服务名称"}],n.state={data:{serviceCode:"IDDKKDSSDSD",serviceName:"测试治大国"}},n}return v()(e,t),d()(e,[{key:"render",value:function(){return y.a.createElement(r.a,{items:this.items,fieldValue:this.state.data})}}]),e}(y.a.PureComponent);return y.a.createElement(t,null)}})},A3gy:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zinfo">信息展示：Zinfo</h1>\n<p><code>Zinfo</code> 用于展示一组 label 和 value 的组件  </p>\n<p>继承了React.PureComponent  </p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Zinfo } from &quot;zerod&quot;;\nimport { Tag } from &quot;antd&quot;;\nclass Myjavascript extends ZpureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: () =&gt; {\n               //异步加载自定义项\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve((value, record) =&gt; {\n                            return &lt;Tag color=&quot;red&quot;&gt;{value}&lt;/Tag&gt;;\n                        });\n                    }, 5000);\n                });\n                //    return api.getOptions.then(re=&gt;{\n                //         return (value,record)=&gt;{\n                //               return 自定义内容\n                //         }\n                //     })\n            },\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n        },\n    ];\n    state = {\n        data: {\n            serviceCode: &quot;IDDKKDSSDSD&quot;,\n            serviceName: &quot;测试治大国&quot;,\n        },\n    };\n    render() {\n        return &lt;Zinfo items={this.items} fieldValue={this.state.data} /&gt;;\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="zinfo-props">Zinfo 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>fieldValue</td>\n            <td>对应items中key属性的map对象, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="items-">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>label区的宽度，默认"160px"</td>\n            <td>string</td>\n            <td>160px</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>\n            <td>自定义value钩子,render函数必须return一个函数。如果异步加载自定义内容：必须return的是Promise对象(这时候then回调里需return一个函数)。例如使用了后台接口：(form)=>api.getOptions.then(re=>{return <i class="zero-icon zerod-shengchangzhouqi"></i>  (value,record)=>自定义内容)})</td>\n            <td>()=>{return function(value,record){return 自定义内容})}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:6,xl:8,lg:12,md:24}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var r=n("M36X"),a=n.n(r),o=n("jjl2"),l={},s=[];o.keys().forEach(function(t){var e=void 0;try{e=o(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==a()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),s.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));s.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var r={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var r=n("Z3zS"),a=n("MaNN"),o=n("C6MB"),l=n("PwP1"),s=n("MDOJ"),i=n.n(s),c=n("/sSO"),d=n("aLtU"),u=n.n(d),m=n("2x50"),f=n.n(m),h=n("gEKl"),p=n.n(h),v=n("HTqB"),g=n.n(v),y=n("DLeZ"),E=n.n(y),b=n("kB6t"),C=n("uqIC"),w=n.n(C),q=n("jCnN"),z=n.n(q),x=(n("EH+i"),n("tW/l")),S=n.n(x);var N=Object(b.a)(),k=!1;var D=function(t){function e(){var t,n;u()(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=p()(this,(t=g()(e)).call.apply(t,[this].concat(a)))).methods={setHeader:function(t){n.setState({layerHeader:t})},setContent:function(t){n.setState({layerContent:t})}},n.state={layerHeader:null,layerContent:null},n.getMethods=function(t){n.layerMethods=t},n}return E()(e,t),f()(e,[{key:"render",value:function(){var t=this.state,e=t.layerHeader,n=t.layerContent;return w.a.createElement(r.a,{header:e,exportMethods:this.getMethods},n)}}]),e}(w.a.PureComponent);e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function r(){var t,e;u()(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=p()(this,(t=g()(r)).call.apply(t,[this].concat(a)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=c.g.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),c.g.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),c.g.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,r=0;r<n;r++){var a=e.state.navs[r];if(t>=a.el.offsetTop-120){if(!(r<n-1)){a.active=!0;break}var o=e.state.navs[r+1];if(o&&t<o.el.offsetTop-120){a.active=!0;break}}}e.setState({navs:i()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e.layerRef=w.a.createRef(),e}return E()(r,n),f()(r,[{key:"componentWillUnmount",value:function(){k=!0,this.renderEls.forEach(function(t){z.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var r=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var r=t.attributes[n].nodeName;if(/^data-\w+$/.test(r)){var a=t.attributes[n].nodeValue;e[r.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[r.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var o=e[r.render]();t.renderEls.push(n),z.a.render(o,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=r.title?r.title:"",e.appendChild(s),a&&e.appendChild(l),t.appendChild(e),a&&o.appendChild(a),t.appendChild(o),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){if(k=!1,"function"==typeof e.target._render){var n=e.target._render();if("layer"!=n.windowType)t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:n,scroll:e.target._scroll,onTransitionend:function(e){k||t.setState({closeModaled:!e})}});else{var r=n.header,a=n.content;t.layerRef.current.methods.setHeader(r),t.layerRef.current.methods.setContent(a),t.layerRef.current.layerMethods.showLayer(!0,null,!0)()}}},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";k=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){k||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return w.a.createElement(o.b.Template,null,w.a.createElement(N,{pageHeader:{show:!1},hasBodyPadding:!1},w.a.createElement("div",{className:"z-panel ".concat(S.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},w.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},w.a.createElement(l.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?z.a.createPortal(w.a.createElement("div",{className:S.a["z-nav-box"],ref:function(t){return e.navEl=t}},w.a.createElement("div",{ref:function(t){return e.navContentEl=t}},w.a.createElement("section",null,this.state.navs.map(function(t,n){return w.a.createElement("div",{title:t.name,className:"".concat(S.a["z-nav"]," ").concat(t.active?S.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null,w.a.createElement(D,{ref:this.layerRef}))}}]),r}(w.a.PureComponent);return a.a.setConsumer(n)}}}}]);
//# sourceMappingURL=30.571e8ca7269597b2b92f.js.map