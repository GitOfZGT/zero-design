(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+fre":function(t,e,n){"use strict";n.r(e);var o=n("2/Rp"),a=n("/HRN"),r=n.n(a),s=n("WaGi"),l=n.n(s),i=n("ZDA2"),d=n.n(i),c=n("/+P4"),p=n.n(c),u=n("N9n2"),h=n.n(u),m=n("q1tI"),v=n.n(m);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return r()(this,a),d()(this,p()(a).apply(this,arguments))}return h()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(e){t.boxEl=e}},v.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(v.a.PureComponent)}}},ebhq:function(t,e,n){"use strict";var o=n("iZP3"),a=n.n(o),r=n("jjl2"),s={},l=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==a()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},l5eS:function(t,e,n){"use strict";n.r(e);var o=n("diRs"),a=n("htGi"),r=n.n(a),s=n("2/Rp"),l=n("Avpf"),i=n.n(l),d=n("/HRN"),c=n.n(d),p=n("WaGi"),u=n.n(p),h=n("ZDA2"),m=n.n(h),v=n("/+P4"),f=n.n(v),b=n("N9n2"),g=n.n(b),C=n("q1tI"),E=n.n(C),y=n("17x9"),w=n.n(y),N=n("jY6J"),z=n("DOTH"),k=n.n(z),S=function(t){function e(){var t,n;c()(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=m()(this,(t=f()(e)).call.apply(t,[this].concat(a)))).methods={onVisibleChange:function(t){n.props.isCustomVisible&&t&&n.setState({visible:t}),n.props.onVisibleChange&&n.props.onVisibleChange(t)},getPopupContainer:function(){return n.props.onGetPopupContainer&&n.props.onGetPopupContainer()},closePopover:function(){n.setState({visible:!1}),n.props.onVisibleChange&&n.props.onVisibleChange(!1)},btnClick:function(){n.state.visible?n.methods.closePopover():(n.setState({visible:!0}),n.props.onVisibleChange&&n.props.onVisibleChange(!0))},setDisabled:function(t){n.setState({disabled:t})},show:function(t){n.setState({show:t})}},n.state={visible:!1,disabled:n.props.defaultDisabled,show:n.props.defaultShow},n}return g()(e,t),u()(e,[{key:"componentDidMount",value:function(){this.props.exportMethods&&this.props.exportMethods(this.methods)}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,a=e.content,l=e.isCustomVisible,d=e.placement,c=e.children,p=e.btnClassName,u=l?{visible:this.state.visible}:{},h=c,m=!1;return E.a.isValidElement(c)&&(m=!0,h=E.a.cloneElement(c,i()({},c.props,{onClick:function(e){t.methods.btnClick(),c.props.onClick&&c.props.onClick(e)},disabled:this.state.disabled,style:i()({},c.props.style?c.props.style:{},this.state.show?{}:{display:"none"}),className:"".concat(p," ").concat(c.props.className?c.props.className:"")}))),E.a.createElement("span",{style:this.state.disabled?{cursor:"not-allowed",display:"inline-block",pointerEvents:"none"}:{}},E.a.createElement(o.a,r()({placement:d,title:E.a.createElement("div",{className:k.a["z-scheduling-popover-title"]},n,E.a.createElement("span",{onClick:this.methods.closePopover,className:k.a["z-popover-close-btn"]},"×")),content:E.a.createElement("div",{className:k.a["z-scheduling-popover-content"]},a),trigger:"contextMenu",overlayClassName:k.a["z-scheduling-popover"],getPopupContainer:this.methods.getPopupContainer,onVisibleChange:this.methods.onVisibleChange},u),m?h:E.a.createElement(s.a,{type:"primary",size:"default",className:p,disabled:this.state.disabled,onClick:this.methods.btnClick,style:this.state.show?{}:{display:"none"}},h)))}}]),e}(N.a);S.propTypes={title:w.a.any,content:w.a.any,onVisibleChange:w.a.func,onGetPopupContainer:w.a.func,exportMethods:w.a.func,isCustomVisible:w.a.bool,defaultDisabled:w.a.bool,defaultShow:w.a.bool,placement:w.a.string,btnClassName:w.a.string},S.defaultProps={onGetButtonProps:function(){return{}},isCustomVisible:!0,defaultDisabled:!1,defaultShow:!0,placement:"rightTop"};var x=S,M=n("ebhq"),P=n("rgnb"),D=n.n(P),O=M.a.AmdDocHOC;e.default=O(D.a,{demo1:function(){var t=function(t){function e(){var t,n;c()(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=m()(this,(t=f()(e)).call.apply(t,[this].concat(a)))).methods={onCancel:function(){n.ZpopoverButtonMethods.closePopover()}},n.popover={title:E.a.createElement("div",null,"popover标题"),content:E.a.createElement(E.a.Fragment,null,E.a.createElement("div",null,"popover内容"),E.a.createElement("div",{className:"z-margin-top-20"},E.a.createElement(s.a,{block:!0,onClick:n.methods.onCancel},"取消"))),onVisibleChange:function(t){console.log(t)},onGetPopupContainer:function(){return document.body},exportMethods:function(t){n.ZpopoverButtonMethods=t},defaultDisabled:!1,defaultShow:!0,placement:"right",btnClassName:"z-margin-left-20"},n}return g()(e,t),u()(e,[{key:"render",value:function(){return E.a.createElement(x,this.popover,"内置按钮")}}]),e}(E.a.PureComponent);return E.a.createElement(t,null)}})},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("MaNN"),a=n("C6MB"),r=n("PwP1"),s=n("TbGu"),l=n.n(s),i=n("/sSO"),d=n("/HRN"),c=n.n(d),p=n("WaGi"),u=n.n(p),h=n("ZDA2"),m=n.n(h),v=n("/+P4"),f=n.n(v),b=n("N9n2"),g=n.n(b),C=n("kB6t"),E=n("q1tI"),y=n.n(E),w=n("i8i4"),N=n.n(w),z=(n("17x9"),n("tW/l")),k=n.n(z);var S=Object(C.a)(),x=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function o(){var t,e;c()(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=m()(this,(t=f()(o)).call.apply(t,[this].concat(a)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=i.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),i.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),i.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var a=e.state.navs[o];if(t>=a.el.offsetTop-120){if(!(o<n-1)){a.active=!0;break}var r=e.state.navs[o+1];if(r&&t<r.el.offsetTop-120){a.active=!0;break}}}e.setState({navs:l()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return g()(o,n),u()(o,[{key:"componentWillUnmount",value:function(){x=!0,this.renderEls.forEach(function(t){N.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=e[o.render]();t.renderEls.push(n),N.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=o.title?o.title:"",e.appendChild(l),a&&e.appendChild(s),t.appendChild(e),a&&r.appendChild(a),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){x=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){x||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";x=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){x||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return y.a.createElement(a.b.Template,null,y.a.createElement(S,{pageHeader:{show:!1},hasBodyPadding:!1},y.a.createElement("div",{className:"z-panel ".concat(k.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},y.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},y.a.createElement(r.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?N.a.createPortal(y.a.createElement("div",{className:k.a["z-nav-box"],ref:function(t){return e.navEl=t}},y.a.createElement("div",{ref:function(t){return e.navContentEl=t}},y.a.createElement("section",null,this.state.navs.map(function(t,n){return y.a.createElement("div",{title:t.name,className:"".concat(k.a["z-nav"]," ").concat(t.active?k.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(y.a.PureComponent);return o.a.setConsumer(n)}}},rgnb:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zpopoverbutton">自带浮层按钮：ZpopoverButton</h1>\n<p>ZpopoverButton 默认有一个按钮，自带 popover，左键和右键都会打开 popover，也可以是嵌入自定义按钮（必须是 ReactNode，且支持 onClick,style,disabled 等属性）</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title=""></div>\n\n<pre><code class="language-jsx">class Myjavascript extends React.PureComponent {\n    methods = {\n        onCancel: () =&gt; {\n            this.ZpopoverButtonMethods.closePopover();\n        },\n    };\n    popover = {\n        title: &lt;div&gt;popover标题&lt;/div&gt;,\n        content: (\n            &lt;React.Fragment&gt;\n                &lt;div&gt;popover内容&lt;/div&gt;\n                &lt;div className=&quot;z-margin-top-20&quot;&gt;\n                    &lt;Button block onClick={this.methods.onCancel}&gt;\n                        取消\n                    &lt;/Button&gt;\n                &lt;/div&gt;\n            &lt;/React.Fragment&gt;\n        ),\n        onVisibleChange: (visible) =&gt; {\n            console.log(visible);\n        },\n        onGetPopupContainer: function() {\n            return document.body;\n        },\n        exportMethods: (m) =&gt; {\n            this.ZpopoverButtonMethods = m;\n        },\n        defaultDisabled: false,\n        defaultShow: true,\n        placement: &quot;right&quot;,\n        btnClassName: &quot;z-margin-left-20&quot;,\n    };\n    render() {\n        return &lt;ZpopoverButton {...this.popover}&gt;内置按钮&lt;/ZpopoverButton&gt;;\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="zpopoverbutton-props">ZpopoverButton 的 props</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>popover 的 title</td>\n<td>string | ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>content</td>\n<td>popover 的 content</td>\n<td>string | ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onVisibleChange</td>\n<td>popover 打开/隐藏的回调</td>\n<td>function(visible){}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onGetPopupContainer</td>\n<td>将 popover 插入到哪个 dom 内</td>\n<td>function(){return dom}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>defaultDisabled</td>\n<td>按钮的默认禁用状态</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultShow</td>\n<td>按钮默认显示状态</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>popover 的方向</td>\n<td>string</td>\n<td>rightTop</td>\n</tr>\n<tr>\n<td>btnClassName</td>\n<td>按钮的 className</td>\n<td>string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>children</td>\n<td>可以是按钮的名称，也可以自定义按钮（必须是 React 组件，且要支持 onClick,style,disabled 等属性）</td>\n<td>string | ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>exportMethods</td>\n<td>在 componentDidMount 导出组件内部可调用的方法，methods 请往下看</td>\n<td>function(methods){}</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<h2 id="zpopoverbutton-methods">ZpopoverButton 的 methods</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值类型</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>closePopover</td>\n<td>隐藏 popover ,会触发 onVisibleChange</td>\n<td>methods.closePopover()</td>\n<td>--</td>\n</tr>\n<tr>\n<td>setDisabled</td>\n<td>主动修改按钮禁用状态</td>\n<td>methods.setDisabled(disabled)</td>\n<td>--</td>\n</tr>\n<tr>\n<td>show</td>\n<td>主动修改按钮显示状态</td>\n<td>methods.show(show)</td>\n<td>--</td>\n</tr>\n</tbody></table>\n'}}]);
//# sourceMappingURL=33.fa64d1439c8057d3e0ce.js.map