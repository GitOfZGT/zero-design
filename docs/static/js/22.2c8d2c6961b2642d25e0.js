(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+fre":function(t,e,a){"use strict";a.r(e);var n=a("rSih"),i=a("U9/v"),o=a.n(i),r=a("gO+S"),s=a.n(r),c=a("LtZh"),l=a.n(c),m=a("qWWq"),p=a.n(m),d=a("raSu"),u=a.n(d),h=a("geBl"),f=a.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(a){function i(){return o()(this,i),l()(this,p()(i).apply(this,arguments))}return u()(i,a),s()(i,[{key:"componentDidMount",value:function(){var a=this.boxEl.querySelector(".z-open-modal-btn");a._scroll=e,a._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(n.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),i}(f.a.PureComponent)}}},ebhq:function(t,e,a){"use strict";var n=a("wObh"),i=a.n(n),o=a("jjl2"),r={},s=[];o.keys().forEach(function(t){var e=void 0;try{e=o(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==i()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var a=e.name;if("string"!=typeof a)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(a))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(a=a.trim(),s.includes(a))throw Error("".concat(t,":").concat(a,"此HOC名称已被使用"));s.push(a),r[a]=e.HOC}),e.a=r},g4Yh:function(t,e,a){t.exports=a("6Dne")(480)},jjl2:function(t,e,a){var n={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="jjl2"},o5n0:function(t,e,a){"use strict";a.r(e);var n=a("U9/v"),i=a.n(n),o=a("gO+S"),r=a.n(o),s=a("LtZh"),c=a.n(s),l=a("qWWq"),m=a.n(l),p=a("raSu"),d=a.n(p),u=a("geBl"),h=a.n(u),f=a("jY6J"),g=a("EH+i"),v=a.n(g),b=a("g4Yh"),y=a("R65X"),F=a.n(y),E=(a("o5hH"),a("LYpx")),w=a("AmCF"),q=a("vOye"),z=function(t){function e(){var t,a;i()(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=c()(this,(t=m()(e)).call.apply(t,[this].concat(o)))).initViewer=function(){a.viewer?a.viewer.update():a.props.urls.length&&(a.viewer=new b.default(a.imgsEl,{transition:!1,url:function(t){return t.dataset.url},ready:function(){var t=this,e=this.viewer.viewer?this.viewer.viewer:null;if(e&&null===e.querySelector(".".concat(F.a["z-next"]))){var a=document.createElement("div"),n=document.createElement("div");a.className=F.a["z-next"],n.className=F.a["z-prev"],a.innerHTML='<i  class="zero-icon zerod-next"/>',n.innerHTML='<i  class="zero-icon zerod-prev"/>',e.appendChild(a),e.appendChild(n),a.addEventListener("click",function(){t.viewer.next(!0)},!1),n.addEventListener("click",function(){t.viewer.prev(!0)},!1)}}}))},a}return d()(e,t),r()(e,[{key:"componentDidMount",value:function(){this.initViewer()}},{key:"componentDidUpdate",value:function(t){t.urls===this.props.urls&&t.urls.length===this.props.urls.length||this.initViewer()}},{key:"componentWillUnmount",value:function(){this.viewer&&this.viewer.destroy()}},{key:"render",value:function(){var t=this,e=this.props.showThumbAlt;return h.a.createElement("ul",{ref:function(e){t.imgsEl=e},className:"".concat(F.a["z-viewer-ul"]," ").concat(this.props.className)},h.a.createElement(q.TransitionGroup,{component:null,enter:!0,exit:!1,appear:!0},this.props.urls.map(function(t,a){var n="string"==typeof t?t:t.thumb?t.thumb:t.url,i="string"==typeof t?t:t.url,o="string"!=typeof t&&t.alt?t.alt:a+1;return h.a.createElement(q.CSSTransition,{key:a,timeout:w.a.flipInTime,classNames:"flipY"},h.a.createElement("li",{key:a},e?h.a.createElement("div",{className:F.a["z-viewer-thumb"]},h.a.createElement(E.a,{url:n,style:{height:"100%"}})):h.a.createElement(E.a,{url:n,style:{height:"100%"}}),e?h.a.createElement("div",{className:F.a["z-viewer-alt"]},o):null,h.a.createElement("img",{"data-url":i,alt:o})))})))}}]),e}(f.a);z.propTypes={urls:v.a.oneOfType([v.a.arrayOf(v.a.string),v.a.arrayOf(v.a.object)]),className:v.a.string,showThumbAlt:v.a.bool},z.defaultProps={urls:[],className:"",showThumbAlt:!0};var j=z,_=a("ebhq"),x=a("vHeI"),A=a.n(x),C=_.a.AmdDocHOC;e.default=C(A.a,{demo1:function(){var t=function(t){function e(){var t,a;i()(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=c()(this,(t=m()(e)).call.apply(t,[this].concat(o)))).state={urls:[]},a}return d()(e,t),r()(e,[{key:"componentDidMount",value:function(){this.setState({urls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952786111&di=7d03c11e1f0ad40f08578cf8506844aa&imgtype=0&src=http%3A%2F%2Fpic11.photophoto.cn%2F20090415%2F0020032851022998_b.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952798194&di=9e2835fa442d82d57721e83505b4b706&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120330%2F0020033069990023_b.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952814603&di=1759b21819f90ef7d8d7c0c4d379dd62&imgtype=0&src=http%3A%2F%2Fpic21.photophoto.cn%2F20111122%2F0033033938946238_b.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535953843567&di=2cbdfc3ff5947698623fff361c5a4948&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201305%2F03%2F000447ycxqq7q6ntkxndps.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975713921&di=6cf5521422438b1f165d3bd82d10e406&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca2a59eeec68a801216a4b01865c.jpg%401280w_1l_2o_100sh.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975757343&di=b5d737467b8f3aa08ae3d0e2dc68fc8b&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2FOV8JyO.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975776762&di=ceb422c53cb6430269a4aa15a9e39a20&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2Fqp8uZm.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975788020&di=132a29c097bf83d6db16484741cc63f6&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3446260711%2C2783084043%26fm%3D214%26gp%3D0.jpg"]})}},{key:"render",value:function(){return h.a.createElement(j,{urls:this.state.urls})}}]),e}(h.a.PureComponent);return h.a.createElement(t,null)}})},pnNO:function(t,e,a){"use strict";a.r(e);var n=a("MaNN"),i=a("C6MB"),o=a("PwP1"),r=a("HJrj"),s=a.n(r),c=a("/sSO"),l=a("U9/v"),m=a.n(l),p=a("gO+S"),d=a.n(p),u=a("LtZh"),h=a.n(u),f=a("qWWq"),g=a.n(f),v=a("raSu"),b=a.n(v),y=a("kB6t"),F=a("geBl"),E=a.n(F),w=a("QUlw"),q=a.n(w),z=(a("EH+i"),a("tW/l")),j=a.n(z);var _=Object(y.a)(),x=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var a=function(a){function n(){var t,e;m()(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=h()(this,(t=g()(n)).call.apply(t,[this].concat(i)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],a=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(a).forEach(function(a){t.push({name:a.dataset.title?a.dataset.title:a.nextElementSibling.innerText,el:a.nextElementSibling,active:-e.scrollInstance.scroll.y==a.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=c.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),c.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),c.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var a=e.state.navs.length,n=0;n<a;n++){var i=e.state.navs[n];if(t>=i.el.offsetTop-120){if(!(n<a-1)){i.active=!0;break}var o=e.state.navs[n+1];if(o&&t<o.el.offsetTop-120){i.active=!0;break}}}e.setState({navs:s()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return b()(n,a),d()(n,[{key:"componentWillUnmount",value:function(){x=!0,this.renderEls.forEach(function(t){q.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,a=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(a).forEach(function(a){var n=function(t){var e={};if(t.dataset)return t.dataset;for(var a=0;a<t.attributes.length;a++){var n=t.attributes[a].nodeName;if(/^data-\w+$/.test(n)){var i=t.attributes[a].nodeValue;e[n.match(/^data-(\w+)/)[1]]=i}}return e}(a);if(e&&"function"==typeof e[n.render]){var i=a.nextElementSibling;i=i&&"pre"==i.localName?i:null;var o=e[n.render]();t.renderEls.push(a),q.a.render(o,a,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var r=document.createElement("img");r.addEventListener("click",function(){r.src=r.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=r.open?"0px":"auto",r.open=!r.open},!1),r.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=n.title?n.title:"",e.appendChild(s),i&&e.appendChild(r),t.appendChild(e),i&&o.appendChild(i),t.appendChild(o),a.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){x=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){x||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var a=e.target._modal?e.target._modal:"mainModal";x=!1,t.props.showRightModal({show:!0,modal:a,content:null,scroll:!0,onTransitionend:function(e){x||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,a),setTimeout(function(){t.props.showModalLoading(!1,a)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var a=e.target.dataset.path;"string"==typeof a&&t.props.$router.history.push(a)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return E.a.createElement(i.b.Template,null,E.a.createElement(_,{pageHeader:{show:!1},hasBodyPadding:!1},E.a.createElement("div",{className:"z-panel ".concat(j.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},E.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},E.a.createElement(o.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?q.a.createPortal(E.a.createElement("div",{className:j.a["z-nav-box"],ref:function(t){return e.navEl=t}},E.a.createElement("div",{ref:function(t){return e.navContentEl=t}},E.a.createElement("section",null,this.state.navs.map(function(t,a){return E.a.createElement("div",{title:t.name,className:"".concat(j.a["z-nav"]," ").concat(t.active?j.a.active:""),key:a,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),n}(E.a.PureComponent);return n.a.setConsumer(a)}}},vHeI:function(t,e){t.exports='<h1 id="-zviewer">图片查看器：Zviewer</h1>\n<p><code>Zviewer</code>展示一组缩略图，点击查看大图</p>\n<p>1、如果想定义显示缩略图大小，请使用样式覆盖，比如 添加 <code>className=&quot;pic-list&quot;</code>, 样式中：<code>.pic-list&gt;li{width:200px;height:180px;}</code></p>\n<div class="z-demo-box" data-render="demo1" data-title="这里是缩略图列表，点击查看大图"></div>\n\n<pre><code class="language-jsx">class Myjavascript extends ZpureComponent {\n    state = {\n        urls: [\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535952786111&amp;di=7d03c11e1f0ad40f08578cf8506844aa&amp;imgtype=0&amp;src=http%3A%2F%2Fpic11.photophoto.cn%2F20090415%2F0020032851022998_b.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535952798194&amp;di=9e2835fa442d82d57721e83505b4b706&amp;imgtype=0&amp;src=http%3A%2F%2Fpic22.photophoto.cn%2F20120330%2F0020033069990023_b.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535952814603&amp;di=1759b21819f90ef7d8d7c0c4d379dd62&amp;imgtype=0&amp;src=http%3A%2F%2Fpic21.photophoto.cn%2F20111122%2F0033033938946238_b.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535953843567&amp;di=2cbdfc3ff5947698623fff361c5a4948&amp;imgtype=0&amp;src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201305%2F03%2F000447ycxqq7q6ntkxndps.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975713921&amp;di=6cf5521422438b1f165d3bd82d10e406&amp;imgtype=0&amp;src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca2a59eeec68a801216a4b01865c.jpg%401280w_1l_2o_100sh.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975757343&amp;di=b5d737467b8f3aa08ae3d0e2dc68fc8b&amp;imgtype=0&amp;src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2FOV8JyO.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975776762&amp;di=ceb422c53cb6430269a4aa15a9e39a20&amp;imgtype=0&amp;src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2Fqp8uZm.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975788020&amp;di=132a29c097bf83d6db16484741cc63f6&amp;imgtype=jpg&amp;src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3446260711%2C2783084043%26fm%3D214%26gp%3D0.jpg&quot;,\n        ],\n    };\n    render() {\n        return &lt;Zviewer urls={this.state.urls} className={&quot;pic-list&quot;} /&gt;;\n    }\n}</code></pre>\n<h2 id="zviewer-props">Zviewer 的 props</h2>\n<p>可追加<code>className</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>urls</td>\n            <td>多张图片的路径，如果缩略图和原图的路径不一样，可以使用object方式：[{url:"原图路径",thumb:"缩略图路径",alt:"图片描述"}]</td>\n            <td>array[string] | array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showThumbAlt</td>\n            <td>是否在缩略图下显示图片的alt</td>\n            <td>Boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);
//# sourceMappingURL=22.2c8d2c6961b2642d25e0.js.map