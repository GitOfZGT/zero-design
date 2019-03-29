(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"+fre":function(t,e,n){"use strict";n.r(e);var o=n("lRmw"),a=n("aLtU"),r=n.n(a),l=n("2x50"),s=n.n(l),i=n("gEKl"),c=n.n(i),d=n("HTqB"),u=n.n(d),m=n("DLeZ"),h=n.n(m),f=n("uqIC"),p=n.n(f);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return r()(this,a),c()(this,u()(a).apply(this,arguments))}return h()(a,n),s()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return p.a.createElement("div",{ref:function(e){t.boxEl=e}},p.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(p.a.PureComponent)}}},Yz5A:function(t,e){t.exports='<h1 id="-zroundingbutton">环绕按钮：ZroundingButton</h1>\n<p><code>ZroundingButton</code> 环绕在四周的更多按钮展示方式</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">class Myjavascript extends ZpureComponent {\n            onClick = (item) =&gt; {\n                message.success(&quot;点击了&quot; + item.name);\n            };\n            items = [\n                {\n                    name: &quot;按钮1&quot;,\n                    icon: () =&gt; &lt;i className=&quot;zero-icon zerod-shengchangzhouqi&quot; /&gt;,\n                    onClick: this.onClick,\n                },\n                { name: &quot;按钮2&quot;, icon: &lt;Icon type=&quot;star&quot; theme=&quot;filled&quot; /&gt;, onClick: this.onClick },\n                { name: &quot;按钮3&quot;, icon: () =&gt; &lt;Icon type=&quot;eye&quot; theme=&quot;filled&quot; /&gt;, onClick: this.onClick },\n                { name: &quot;按钮4&quot;, icon: &lt;Icon type=&quot;camera&quot; theme=&quot;filled&quot; /&gt;, onClick: this.onClick },\n                { name: &quot;按钮5&quot;, show: false, icon: &lt;Icon type=&quot;pay-circle&quot; theme=&quot;filled&quot; /&gt;, onClick: this.onClick },\n                {\n                    name: &quot;按钮6&quot;,\n                    disabled: true,\n                    icon: &lt;Icon type=&quot;hourglass&quot; theme=&quot;filled&quot; /&gt;,\n                    onClick: this.onClick,\n                },\n            ];\n            render() {\n                return (\n                    &lt;span&gt;\n                        &lt;ZroundingButton items={this.items}&gt;\n                            &lt;Button size=&quot;small&quot;&gt;open&lt;/Button&gt;\n                        &lt;/ZroundingButton&gt;\n                        &lt;ZroundingButton items={this.items} className=&quot;z-margin-left-80&quot;&gt;\n                            &lt;Button size=&quot;small&quot;&gt;open&lt;/Button&gt;\n                        &lt;/ZroundingButton&gt;\n                    &lt;/span&gt;\n                );\n            }\n        }</code></pre>\n<h2 id="zroundingbutton-props">ZroundingButton 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>按钮组的渲染数据，结构如下items</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onVisibleChange</td>\n            <td>显示状态改变会触发onVisibleChange</td>\n            <td>(visible)=>{}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id="items">items</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>name</td>\n            <td>按钮名称</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> icon</td>\n            <td>按钮图标，如果没有图标会以按钮名称的第一个字符显示</td>\n            <td>reactNode | function(){return reactNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onClick</td>\n            <td>按钮点击事件,参数有当前点击的按钮map对象</td>\n            <td>function(item){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>show</td>\n            <td>是否显示此按钮</td>\n            <td>Boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>disabled</td>\n            <td>是否禁用此按钮</td>\n            <td>Boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>'},ebhq:function(t,e,n){"use strict";var o=n("M36X"),a=n.n(o),r=n("jjl2"),l={},s=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==a()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),s.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));s.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},"phG+":function(t,e,n){"use strict";n.r(e);var o=n("yEMG"),a=n("lRmw"),r=n("V/OK"),l=n("49r3"),s=n("aLtU"),i=n.n(s),c=n("2x50"),d=n.n(c),u=n("gEKl"),m=n.n(u),h=n("HTqB"),f=n.n(h),p=n("DLeZ"),v=n.n(p),g=n("/sSO"),y=n("uqIC"),E=n.n(y),C=n("ebhq"),b=n("Yz5A"),q=n.n(b),w=g.g.addClass,z=g.g.removeClass,k=C.a.AmdDocHOC;e.default=k(q.a,{demo1:function(){var t=function(t){function e(){var t,n;i()(this,e);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(n=m()(this,(t=f()(e)).call.apply(t,[this].concat(a)))).onClick=function(t){l.a.success("点击了"+t.name)},n.items=[{name:"按钮1",icon:function(){return E.a.createElement("i",{className:"zero-icon zerod-shengchangzhouqi"})},onClick:n.onClick},{name:"按钮2",icon:E.a.createElement(r.a,{type:"star",theme:"filled"}),onClick:n.onClick},{name:"按钮3",icon:function(){return E.a.createElement(r.a,{type:"eye",theme:"filled"})},onClick:n.onClick},{name:"按钮4",icon:E.a.createElement(r.a,{type:"camera",theme:"filled"}),onClick:n.onClick},{name:"按钮5",show:!1,icon:E.a.createElement(r.a,{type:"pay-circle",theme:"filled"}),onClick:n.onClick},{name:"按钮6",disabled:!0,icon:E.a.createElement(r.a,{type:"hourglass",theme:"filled"}),onClick:n.onClick}],n.onVisibleChange=function(t){n.moreIconEl&&(t?z(n.moreIconEl,"is-down"):w(n.moreIconEl,"is-down"))},n}return v()(e,t),d()(e,[{key:"render",value:function(){var t=this;return E.a.createElement("span",null,E.a.createElement(o.b,{items:this.items},E.a.createElement(a.a,{size:"small"},"open")),E.a.createElement(o.b,{items:this.items,className:"z-margin-left-80",onVisibleChange:this.onVisibleChange},E.a.createElement(a.a,{size:"small",type:"primary",className:"z-btn-green"},"open",E.a.createElement("i",{className:"zero-icon zerod-up z-open-btn is-down z-margin-left-4",ref:function(e){t.moreIconEl=e}}))))}}]),e}(E.a.PureComponent);return E.a.createElement(t,null)}})},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("Z3zS"),a=n("MaNN"),r=n("C6MB"),l=n("PwP1"),s=n("MDOJ"),i=n.n(s),c=n("/sSO"),d=n("aLtU"),u=n.n(d),m=n("2x50"),h=n.n(m),f=n("gEKl"),p=n.n(f),v=n("HTqB"),g=n.n(v),y=n("DLeZ"),E=n.n(y),C=n("kB6t"),b=n("uqIC"),q=n.n(b),w=n("jCnN"),z=n.n(w),k=(n("EH+i"),n("tW/l")),N=n.n(k);var x=Object(C.a)(),S=!1;var M=function(t){function e(){var t,n;u()(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=p()(this,(t=g()(e)).call.apply(t,[this].concat(a)))).methods={setHeader:function(t){n.setState({layerHeader:t})},setContent:function(t){n.setState({layerContent:t})}},n.state={layerHeader:null,layerContent:null},n.getMethods=function(t){n.layerMethods=t},n}return E()(e,t),h()(e,[{key:"render",value:function(){var t=this.state,e=t.layerHeader,n=t.layerContent;return q.a.createElement(o.a,{header:e,exportMethods:this.getMethods},n)}}]),e}(q.a.PureComponent);e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function o(){var t,e;u()(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=p()(this,(t=g()(o)).call.apply(t,[this].concat(a)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=c.g.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),c.g.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),c.g.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var a=e.state.navs[o];if(t>=a.el.offsetTop-120){if(!(o<n-1)){a.active=!0;break}var r=e.state.navs[o+1];if(r&&t<r.el.offsetTop-120){a.active=!0;break}}}e.setState({navs:i()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e.layerRef=q.a.createRef(),e}return E()(o,n),h()(o,[{key:"componentWillUnmount",value:function(){S=!0,this.renderEls.forEach(function(t){z.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=e[o.render]();t.renderEls.push(n),z.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=o.title?o.title:"",e.appendChild(s),a&&e.appendChild(l),t.appendChild(e),a&&r.appendChild(a),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){if(S=!1,"function"==typeof e.target._render){var n=e.target._render();if("layer"!=n.windowType)t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:n,scroll:e.target._scroll,onTransitionend:function(e){S||t.setState({closeModaled:!e})}});else{var o=n.header,a=n.content;t.layerRef.current.methods.setHeader(o),t.layerRef.current.methods.setContent(a),t.layerRef.current.layerMethods.showLayer(!0,null,!0)()}}},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";S=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){S||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return q.a.createElement(r.b.Template,null,q.a.createElement(x,{pageHeader:{show:!1},hasBodyPadding:!1},q.a.createElement("div",{className:"z-panel ".concat(N.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},q.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},q.a.createElement(l.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?z.a.createPortal(q.a.createElement("div",{className:N.a["z-nav-box"],ref:function(t){return e.navEl=t}},q.a.createElement("div",{ref:function(t){return e.navContentEl=t}},q.a.createElement("section",null,this.state.navs.map(function(t,n){return q.a.createElement("div",{title:t.name,className:"".concat(N.a["z-nav"]," ").concat(t.active?N.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null,q.a.createElement(M,{ref:this.layerRef}))}}]),o}(q.a.PureComponent);return a.a.setConsumer(n)}}}}]);
//# sourceMappingURL=37.ec09ed2ffc2250fb38bb.js.map