(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+fre":function(e,t,n){"use strict";n.r(t);var a=n("lRmw"),r=n("aLtU"),o=n.n(r),l=n("2x50"),s=n.n(l),i=n("gEKl"),c=n.n(i),d=n("HTqB"),u=n.n(d),m=n("DLeZ"),p=n.n(m),f=n("uqIC"),h=n.n(f);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function r(){return o()(this,r),c()(this,u()(r).apply(this,arguments))}return p()(r,n),s()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{ref:function(t){e.boxEl=t}},h.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(h.a.PureComponent)}}},alha:function(e,t,n){e.exports=n("ZTnV")(286)},ebhq:function(e,t,n){"use strict";var a=n("M36X"),r=n.n(a),o=n("jjl2"),l={},s=[];o.keys().forEach(function(e){var t=void 0;try{t=o(e).default}catch(t){throw Error("".concat(e,":").concat(t))}if(void 0===t||"object"!==r()(t))throw Error("".concat(e,":内没有 export default 或者export default格式有误 "));if("function"!=typeof t.HOC)throw Error("".concat(e,":HOC有误"));var n=t.name;if("string"!=typeof n)throw Error("".concat(e,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(e,":name属性请以A开头HOC结尾"));if(n=n.trim(),s.includes(n))throw Error("".concat(e,":").concat(n,"此HOC名称已被使用"));s.push(n),l[n]=t.HOC}),t.a=l},haxw:function(e,t,n){"use strict";n.r(t);var a=n("MDOJ"),r=n.n(a),o=n("49r3"),l=n("FpWK"),s=n("kbW3"),i=n("lRmw"),c=n("pZ7Q"),d=n.n(c),u=n("+lAh"),m=n("hsk9"),p=n.n(m),f=n("8Qmg"),h=n.n(f),g=n("BW4M"),y=n.n(g),v=n("V/OK"),b=n("Hwm8"),E=n.n(b),D=n("aLtU"),T=n.n(D),S=n("2x50"),C=n.n(S),q=n("gEKl"),w=n.n(q),z=n("HTqB"),N=n.n(z),O=n("DLeZ"),x=n.n(O),j=n("uqIC"),K=n.n(j),k=n("jY6J"),A=n("EH+i"),I=n.n(A),R=n("alha"),M=n.n(R),H=n("EuKS"),L=n.n(H),U=(n("KON7"),n("4m0G"),n("/sSO"));function Z(e){for(var t=e;t&&("string"!=typeof t.className||"string"==typeof t.className&&!t.className.includes(L.a["z-transfer-li"]))&&t.parentElement;)t=t.parentElement;return t}var _=function(e){function t(){return T()(this,t),w()(this,N()(t).apply(this,arguments))}return x()(t,e),C()(t,[{key:"render",value:function(){return this.props.children}}]),t}(K.a.Component),B="1em",J=function(e){function t(){var e,n;T()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=w()(this,(e=N()(t)).call.apply(e,[this].concat(r)))).methods={showSubNextEl:function(e,t,a){t.animating=!0;var r=t.nextElementSibling,o=e?"flipX-enter fast":"flipX-exit fast";r&&Object(U.j)(r,L.a["z-transfer-li"])&&!Object(U.j)(r,L.a["is-sub"])&&(JSON.parse(r.dataset.item).parName===a&&(e?(r.style.display="",Object(U.c)(r,o),Object(U.r)(r,"animationend",function(){Object(U.t)(r,o),t.animating=!1})):(Object(U.c)(r,o),Object(U.r)(r,"animationend",function(){r.style.display="none",Object(U.t)(r,o),t.animating=!1})),n.methods.showSubNextEl(e,r,a)))},expandNext:function(e){var t=Z(e.target);if(!t.animating){var a=t.querySelector(".".concat(L.a["z-right"])),r=JSON.parse(t.dataset.item),o=L.a["is-90"];a&&(Object(U.j)(a,o)?(Object(U.t)(a,o),n.methods.showSubNextEl(!1,t,r.itemKey)):(Object(U.c)(a,o),n.methods.showSubNextEl(!0,t,r.itemKey)))}}},n}return x()(t,e),C()(t,[{key:"componentDidMount",value:function(){var e=new U.a(this.bodyEl,{scrollbars:"custom"});Object(U.n)(this.contentEl,e.refresh)}},{key:"render",value:function(){var e=this,t=this.props,n=t.getUlElement,a=t.sourceData,r=t.sourceKeys,o=t.headerRender,l=t.itemRender;return K.a.createElement("section",{className:"".concat(L.a["z-transfer-box"])},K.a.createElement("header",{className:"".concat(L.a["z-transfer-heading"])},o&&o()),K.a.createElement("section",{className:"".concat(L.a["z-transfer-body"]),ref:function(t){e.bodyEl=t}},K.a.createElement("div",{className:"".concat(L.a["z-transfer-ul"]," ").concat(L.a["z-min-height"]),ref:function(t){e.contentEl=t,n(t)}},a.map(function(t,n){return K.a.createElement("div",{onClick:e.methods.expandNext,style:{paddingLeft:t.paddingLeft},key:t.itemKey,"data-expand":"1","data-item":E()(t),"data-disabled":t.disabled,className:"".concat(L.a["z-transfer-li"]," ").concat(t.isSub?L.a["is-sub"]:""," ").concat(t.droged?L.a["is-li-droged"]:""," ").concat(t.move?L.a["is-li-move"]:"","  ").concat(t.disabled||t.noChilds?L.a["is-li-disabled"]:"")},t.isSub?K.a.createElement(v.a,{type:"folder-open",style:{marginRight:"0.4em"}}):null,"function"!=typeof l||t.isSub?t[r.name]:l(t,n),t.isSub?K.a.createElement(v.a,{className:"".concat(L.a["z-right"]," ").concat(L.a["is-90"]),type:"right",style:{fontSize:"12px"}}):null)}))))}}]),t}(k.a);J.propTypes={getUlElement:I.a.func,sourceKeys:I.a.object,sourceData:I.a.arrayOf(I.a.object),headerRender:I.a.func,itemRender:I.a.func},J.defaultProps={getUlElement:function(){},sourceData:[]};var P=function(e){function t(){var e,n;T()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=w()(this,(e=N()(t)).call.apply(e,[this].concat(r)))).getDefaultSourceData=function(e,t,a){t=t?"".concat(y()(t,10)+1.4,"em"):B;var r=[];return e.forEach(function(e,o){var l=e[n.props.sourceKeys.children],s=h()(l),i=p()({disabled:!1,isSub:s,parName:a||"root",paddingLeft:t,droged:!1,move:!1},e,{itemKey:Object(U.b)()+"_"+o,children:null,noChilds:s&&!l.length});void 0===i[n.props.sourceKeys.id]&&(i[n.props.sourceKeys.id]=Object(U.b)()+"_id"),r.push(i),s&&l.length&&(r=r.concat(n.getDefaultSourceData(e[n.props.sourceKeys.children],t,i.itemKey)))}),r},n.state={leftSourceData:n.getDefaultSourceData(n.props.leftSourceData),rightTargetData:n.getDefaultSourceData(n.props.rightTargetData)},n.methods={selectAll:function(){var e=n.getDefaultSourceData(n.state.leftSourceData).filter(function(e){e.droged=!0,e.paddingLeft=B;var t=n.props.repeated?-1:n.state.rightTargetData.findIndex(function(t,a,r){return t[n.props.sourceKeys.id]==e[n.props.sourceKeys.id]});return!e.disabled&&t<0&&!e.isSub});n.setState({rightTargetData:n.state.rightTargetData.concat(e)},function(){n.props.onChange("selectAll",n.state.rightTargetData,null,null)})},clearAll:function(){n.state.rightTargetData.length&&u.a.confirm({title:"确认清空全部吗?",content:"",okText:"确定",cancelText:"取消",onOk:function(){return n.setState({rightTargetData:[]},function(){n.props.onChange("clearAll",n.state.rightTargetData,null,null)}),d.a.resolve()}})}},n}return x()(t,e),C()(t,[{key:"componentDidUpdate",value:function(e){e.leftSourceData!==this.props.leftSourceData&&this.setState({leftSourceData:this.getDefaultSourceData(this.props.leftSourceData)}),e.rightTargetData!==this.props.rightTargetData&&this.setState({rightTargetData:this.getDefaultSourceData(this.props.rightTargetData)})}},{key:"render",value:function(){var e=this;return K.a.createElement(l.a,{gutter:16,className:this.props.className,style:this.props.style},K.a.createElement("p",{style:{marginBottom:"12px"}},"鼠标指针呈现类似 ",K.a.createElement("i",{className:"zero-icon zerod-move"})," ",'即可拖动，从左框拖动到右框表示"选择"，右框中可上下拖动调整顺序，拖出右框可移除选项'),K.a.createElement(s.a,{span:12},K.a.createElement(J,{itemRender:this.props.leftItemRender,getUlElement:function(t){e.leftUl=t},sourceData:this.state.leftSourceData,sourceKeys:this.props.sourceKeys,headerRender:function(){return K.a.createElement(_,null,"function"==typeof e.props.leftTitle?leftTitle():K.a.createElement("span",null,e.props.leftTitle),K.a.createElement(i.a,{size:"small",onClick:e.methods.selectAll,disabled:e.props.selectAllDisabled},"全选"))}}),K.a.createElement("div",{className:L.a["z-arrow-right"]},K.a.createElement(v.a,{type:"arrow-right"}))),K.a.createElement(s.a,{span:12},K.a.createElement(J,{itemRender:this.props.rightItemRender,getUlElement:function(t){e.rightUl=t},sourceData:this.state.rightTargetData,sourceKeys:this.props.sourceKeys,headerRender:function(){return K.a.createElement(_,null,"function"==typeof e.props.rightTitle?leftTitle():K.a.createElement("span",null,e.props.rightTitle),K.a.createElement(i.a,{size:"small",onClick:e.methods.clearAll,disabled:e.props.clearAllDisabled},"清空"))}})))}},{key:"componentDidMount",value:function(){var e=this;M()([this.leftUl,this.rightUl],{copy:function(t,n){return n===e.leftUl},accepts:function(t,n){return n!==e.leftUl},invalid:function(e){return("boolean"==typeof(e=Z(e)).dataset.disabled?e.dataset.disabled:"true"==e.dataset.disabled)||e.dataset.item&&JSON.parse(e.dataset.item).isSub},removeOnSpill:!0,revertOnSpill:!1}).on("drop",function(t,n,a,l){t=Z(t);var s=null;l&&"none"!==Object(U.i)(l,"display")&&"hidden"!==Object(U.i)(l,"visibility")&&(s=l);var i=e.state.rightTargetData,c=s?i.findIndex(function(e,t,n){return e.itemKey==JSON.parse(s.dataset.item).itemKey}):i.length,d=i[c],u=JSON.parse(t.dataset.item),m="";if(n!==a){if(n.removeChild(t),!e.props.repeated)if(i.findIndex(function(t,n,a){return t[e.props.sourceKeys.id]==u[e.props.sourceKeys.id]})>-1)return void o.a.error("不能重复添加");m="transfer",u.droged=!0,u.itemKey=Object(U.b)(),i.splice(c,0,u)}else{m="move",u.move=!0;var p=i.findIndex(function(e,t,n){return e.itemKey==u.itemKey});p>c?(i.splice(p,1),i.splice(c,0,u)):p<c&&(i.splice(c,0,u),i.splice(p,1))}u.paddingLeft=B,e.setState({rightTargetData:r()(i)},function(){e.props.onChange(m,e.state.rightTargetData,u,d)})}).on("cloned",function(e,t,n){e.className+=" z-transfer-item-clone",e.style.paddingLeft=B}).on("remove",function(t,n,a){t=Z(t);var l=e.state.rightTargetData,s=JSON.parse(t.dataset.item),i=l.findIndex(function(e,t,n){return e.itemKey==s.itemKey});l.splice(i,1),n.appendChild(t),e.setState({rightTargetData:r()(l)},function(){o.a.info("已移除[".concat(s[e.props.sourceKeys.name],"]")),e.props.onChange("remove",e.state.rightTargetData,s,null)})}).on("over",function(e,t){t.parentElement.parentElement.className+=" ".concat(L.a["is-over"])}).on("out",function(e,t){t.parentElement.parentElement.className=t.parentElement.parentElement.className.replace(L.a["is-over"],"")})}}]),t}(k.a);P.propTypes={sourceKeys:I.a.object,leftSourceData:I.a.arrayOf(I.a.object),rightTargetData:I.a.arrayOf(I.a.object),onChange:I.a.func,leftItemRender:I.a.func,rightItemRender:I.a.func,leftTitle:I.a.oneOfType([I.a.string,I.a.func]),rightTitle:I.a.oneOfType([I.a.string,I.a.func]),repeated:I.a.bool,selectAllDisabled:I.a.bool,clearAllDisabled:I.a.bool},P.defaultProps={sourceKeys:{name:"name",id:"id",children:"children"},leftSourceData:[],rightTargetData:[],onChange:function(e){},repeated:!0,selectAllDisabled:!1,clearAllDisabled:!1};var W=P,F=n("ebhq"),V=n("r0Fl"),X=n.n(V),$=F.a.AmdDocHOC;t.default=$(X.a,{demo1:function(){var e=function(e){function t(){var e,n;T()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=w()(this,(e=N()(t)).call.apply(e,[this].concat(r)))).state={leftData:[{name:"风中飘摇",children:[{name:"由于天涯"},{name:"泪如雨下"},{name:"阳光舞台",disabled:!0},{name:"天下轨道"}]},{name:"枫叶南山"},{name:"相信时代(禁用状态)",disabled:!0},{name:"天下三官",children:[{name:"由于天涯"},{name:"泪如雨下"}]}],rightData:[]},n.methods={onChange:function(e,t,n,a){}},n}return x()(t,e),C()(t,[{key:"render",value:function(){return K.a.createElement(W,{style:{width:"650px"},repeated:!0,onChange:this.methods.onChange,leftSourceData:this.state.leftData,rightTargetData:this.state.rightData,leftTitle:"左边",rightTitle:"右边",sourceKeys:{name:"name",id:"id",children:"children"},leftItemRender:function(e){return K.a.createElement("span",null,e.name)},rightItemRender:function(e){return K.a.createElement("span",null,e.name)}})}}]),t}(K.a.PureComponent);return K.a.createElement(e,null)}})},jjl2:function(e,t,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="jjl2"},pnNO:function(e,t,n){"use strict";n.r(t);var a=n("Z3zS"),r=n("MaNN"),o=n("C6MB"),l=n("PwP1"),s=n("MDOJ"),i=n.n(s),c=n("/sSO"),d=n("aLtU"),u=n.n(d),m=n("2x50"),p=n.n(m),f=n("gEKl"),h=n.n(f),g=n("HTqB"),y=n.n(g),v=n("DLeZ"),b=n.n(v),E=n("kB6t"),D=n("uqIC"),T=n.n(D),S=n("jCnN"),C=n.n(S),q=(n("EH+i"),n("tW/l")),w=n.n(q);var z=Object(E.a)(),N=!1;var O=function(e){function t(){var e,n;u()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=h()(this,(e=y()(t)).call.apply(e,[this].concat(r)))).methods={setHeader:function(e){n.setState({layerHeader:e})},setContent:function(e){n.setState({layerContent:e})}},n.state={layerHeader:null,layerContent:null},n.getMethods=function(e){n.layerMethods=e},n}return b()(t,e),p()(t,[{key:"render",value:function(){var e=this.state,t=e.layerHeader,n=e.layerContent;return T.a.createElement(a.a,{header:t,exportMethods:this.getMethods},n)}}]),t}(T.a.PureComponent);t.default={name:"AmdDocHOC",HOC:function(e,t){e='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+e;var n=function(n){function a(){var e,t;u()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=h()(this,(e=y()(a)).call.apply(e,[this].concat(r)))).renderEls=[],t.state={navs:[],closeModaled:!0},t.setNavs=function(){var e=[],n=t.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){e.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-t.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),e.length&&t.setState({navs:e},function(){if(t.bindScrollEvent(),t.navEl&&t.navContentEl){var e=c.g.BuildScroll;t.navScroollInstance=new e(t.navEl,{scrollbars:"custom"}),c.g.listenDivSizeChange(t.navEl,t.navScroollInstance.refresh),c.g.listenDivSizeChange(t.navContentEl,t.navScroollInstance.refresh)}})},t.scrollEnd=function(){var e=-t.scrollInstance.scroll.y;t.state.navs.forEach(function(e){e.active=!1});for(var n=t.state.navs.length,a=0;a<n;a++){var r=t.state.navs[a];if(e>=r.el.offsetTop-120){if(!(a<n-1)){r.active=!0;break}var o=t.state.navs[a+1];if(o&&e<o.el.offsetTop-120){r.active=!0;break}}}t.setState({navs:i()(t.state.navs)})},t.bindScrollEvent=function(){t.scrollInstance.scroll.on("scrollEnd",t.scrollEnd)},t.navScrollTo=function(e){t.scrollInstance.scroll.scrollTo(0,-(e.el.offsetTop-24),200)},t.layerRef=T.a.createRef(),t}return b()(a,n),p()(a,[{key:"componentWillUnmount",value:function(){N=!0,this.renderEls.forEach(function(e){C.a.unmountComponentAtNode(e)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var a=e.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var r=e.attributes[n].nodeValue;t[a.match(/^data-(\w+)/)[1]]=r}}return t}(n);if(t&&"function"==typeof t[a.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var o=t[a.render]();e.renderEls.push(n),C.a.render(o,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=a.title?a.title:"",t.appendChild(s),r&&t.appendChild(l),e.appendChild(t),r&&o.appendChild(r),e.appendChild(o),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){if(N=!1,"function"==typeof t.target._render){var n=t.target._render();if("layer"!=n.windowType)e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:n,scroll:t.target._scroll,onTransitionend:function(t){N||e.setState({closeModaled:!t})}});else{var a=n.header,r=n.content;e.layerRef.current.methods.setHeader(a),e.layerRef.current.methods.setContent(r),e.layerRef.current.layerMethods.showLayer(!0,null,!0)()}}},10)},!1),this.mdEl.addEventListener("click",function(t){if("string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";N=!1,e.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(t){N||e.setState({closeModaled:!t})}}),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof t.target.className&&t.target.className.includes("z-history-href")){var n=t.target.dataset.path;"string"==typeof n&&e.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){e.setNavs()},100)}},{key:"render",value:function(){var t=this;return T.a.createElement(o.b.Template,null,T.a.createElement(z,{pageHeader:{show:!1},hasBodyPadding:!1},T.a.createElement("div",{className:"z-panel ".concat(w.a["z-md-doc"]),ref:function(e){return t.mdEl=e}},T.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},T.a.createElement(l.a,{mode:"html"},e)))),this.state.navs.length&&this.state.closeModaled?C.a.createPortal(T.a.createElement("div",{className:w.a["z-nav-box"],ref:function(e){return t.navEl=e}},T.a.createElement("div",{ref:function(e){return t.navContentEl=e}},T.a.createElement("section",null,this.state.navs.map(function(e,n){return T.a.createElement("div",{title:e.name,className:"".concat(w.a["z-nav"]," ").concat(e.active?w.a.active:""),key:n,onClick:function(){t.navScrollTo(e)}},e.name)})))),document.body):null,T.a.createElement(O,{ref:this.layerRef}))}}]),a}(T.a.PureComponent);return r.a.setConsumer(n)}}},r0Fl:function(e,t){e.exports='<h1 id="-zonewaytransfer">单向转移框: ZoneWayTransfer</h1>\n<p><code>ZoneWayTransfer</code>是一个通过拖动的单向转移选择框组件，左侧源数据框，右侧是接收框</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="左框的选项拖动到右框，右框内的选项可以上下拖动排序"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZoneWayTransfer } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    state = {\n        leftData: [\n            { name: &quot;风中飘摇&quot;, children: [{ name: &quot;由于天涯&quot; }, { name: &quot;泪如雨下&quot; }] },\n            { name: &quot;枫叶南山&quot; },\n            { name: &quot;相信时代(禁用状态)&quot;, disabled: true },\n            { name: &quot;天下三官&quot;, children: [{ name: &quot;由于天涯&quot; }, { name: &quot;泪如雨下&quot; }] },\n        ],\n        rightData: [],\n    };\n    methods = {\n        onChange: (actionType, rightData, actionItem, sibligItem) =&gt; {\n            //actionType=&quot;transfer&quot; 从左转移到右\n            //actionType=&quot;move&quot; 右框内移动排序\n            //actionType=&quot;remove&quot; 拖出右框移除\n            //actionType=&quot;selectAll&quot; 全选\n            //actionType=&quot;clearAll 清空\n        },\n    };\n    render() {\n        return (\n            &lt;ZoneWayTransfer\n                style={{ width: &quot;600px&quot; }}\n                repeated={true}\n                onChange={this.methods.onChange}\n                leftSourceData={this.state.leftData}\n                rightTargetData={this.state.rightData}\n                leftTitle=&quot;左边&quot;\n                rightTitle=&quot;右边&quot;\n                sourceKeys={{ name: &quot;name&quot;, id: &quot;id&quot; }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id="zonewaytransfer-props">ZoneWayTransfer 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>leftSourceData</td>\n            <td>左侧框的数据源,[{name:"名称",id:"1",disabled:false}]</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>rightTargetData</td>\n            <td>右侧框的数据,[{name:"名称",id:"1",disabled:false}]</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>sourceKeys</td>\n            <td>定义leftSourceData和rightTargetData的key对象，默认：{name:"name",id:"id"}</td>\n            <td>object</td>\n            <td>{name:"name",id:"id"}</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>操作之后的回调，参数有 actionType：操作类型，rightData：操作之后右框数据，actionItem：当前操作的数据，sibligItem：当前操作位置下一个数据</td>\n            <td>(actionType, rightData, actionItem, sibligItem) => {}</td>\n            <td>{name:"name",id:"id"}</td>\n        </tr>\n         <tr>\n            <td>repeated</td>\n            <td>是否允许重复选择</td>\n            <td>Boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> leftTitle</td>\n            <td>左框标题</td>\n            <td>string | function(){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> rightTitle</td>\n            <td>右框标题</td>\n            <td>string | function(){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> leftItemRender</td>\n            <td>左框选择项的渲染函数</td>\n            <td>function(item,index){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> rightItemRender</td>\n            <td>右框选择项的渲染函数</td>\n            <td>function(item,index){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>selectAllDisabled</td>\n            <td>禁用全选按钮</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>clearAllDisabled</td>\n            <td>禁用清空按钮</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);
//# sourceMappingURL=21.bd7daac0f174d8af7eda.js.map