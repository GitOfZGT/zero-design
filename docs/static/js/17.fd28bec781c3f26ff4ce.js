(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+fre":function(e,t,n){"use strict";n.r(t);var a=n("JsaA"),r=n("GPkD"),o=n.n(r),i=n("pv+U"),s=n.n(i),l=n("aTAs"),c=n.n(l),d=n("k7W2"),u=n.n(d),f=n("zqcf"),p=n.n(f),m=n("rdAL"),h=n.n(m);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function r(){return o()(this,r),c()(this,u()(r).apply(this,arguments))}return p()(r,n),s()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{ref:function(t){e.boxEl=t}},h.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(h.a.Component)}}},"1J26":function(e,t,n){"use strict";var a=n("o0Vl"),r=n("kXoh")(6),o="findIndex",i=!0;o in[]&&Array(1)[o](function(){i=!1}),a(a.P+a.F*i,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("v4lQ")(o)},"4zmg":function(e,t,n){var a=n("Qnxz");e.exports=function(e,t){return new(a(e))(t)}},Qnxz:function(e,t,n){var a=n("J+BS"),r=n("dAmw"),o=n("IKej")("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},alha:function(e,t,n){e.exports=n("PDTz")(595)},dAmw:function(e,t,n){var a=n("9Jhl");e.exports=Array.isArray||function(e){return"Array"==a(e)}},ebhq:function(e,t,n){"use strict";n("Vsw1"),n("yDl1");var a=n("6h6h"),r=n.n(a),o=(n("/2a5"),n("P4eO"),n("jjl2")),i={},s=[];o.keys().forEach(function(e){var t=void 0;try{t=o(e).default}catch(t){throw Error("".concat(e,":").concat(t))}if(void 0===t||"object"!==r()(t))throw Error("".concat(e,":内没有 export default 或者export default格式有误 "));if("function"!=typeof t.HOC)throw Error("".concat(e,":HOC有误"));var n=t.name;if("string"!=typeof n)throw Error("".concat(e,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(e,":name属性请以A开头HOC结尾"));if(n=n.trim(),s.includes(n))throw Error("".concat(e,":").concat(n,"此HOC名称已被使用"));s.push(n),i[n]=t.HOC}),t.a=i},haxw:function(e,t,n){"use strict";n.r(t);n("g4M6");var a=n("U7Fr"),r=n.n(a),o=n("zUbA"),i=n("74JL"),s=n("KObX"),l=n("JsaA"),c=n("S0qk"),d=n.n(c),u=n("9h/H"),f=(n("1J26"),n("82D8")),p=n.n(f),m=n("vCpt"),h=n.n(m),g=(n("P4eO"),n("puun")),v=n.n(g),y=(n("yDl1"),n("+qoS")),b=n("prVy"),E=n.n(b),D=n("GPkD"),T=n.n(D),S=n("pv+U"),z=n.n(S),q=n("aTAs"),w=n.n(q),x=n("k7W2"),O=n.n(x),N=n("zqcf"),C=n.n(N),A=(n("Vsw1"),n("4Loy"),n("rdAL")),k=n.n(A),j=n("T9cD"),K=n.n(j),I=n("alha"),R=n.n(I),M=n("EuKS"),U=n.n(M),L=(n("KON7"),n("4m0G"),n("/sSO"));function H(e){for(var t=e;t&&("string"!=typeof t.className||"string"==typeof t.className&&!t.className.includes(U.a["z-transfer-li"]))&&t.parentElement;)t=t.parentElement;return t}var J=function(e){function t(){return T()(this,t),w()(this,O()(t).apply(this,arguments))}return C()(t,e),z()(t,[{key:"render",value:function(){return this.props.children}}]),t}(k.a.Component),P="1em",_=function(e){function t(){var e,n;T()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=w()(this,(e=O()(t)).call.apply(e,[this].concat(r)))).methods={showSubNextEl:function(e,t,a){t.animating=!0;var r=t.nextElementSibling,o=e?"flipX-enter fast":"flipX-exit fast";r&&Object(L.i)(r,U.a["z-transfer-li"])&&!Object(L.i)(r,U.a["is-sub"])&&(JSON.parse(r.dataset.item).parName===a&&(e?(r.style.display="",Object(L.c)(r,o),Object(L.q)(r,"animationend",function(){Object(L.s)(r,o),t.animating=!1})):(Object(L.c)(r,o),Object(L.q)(r,"animationend",function(){r.style.display="none",Object(L.s)(r,o),t.animating=!1})),n.methods.showSubNextEl(e,r,a)))},expandNext:function(e){var t=H(e.target);if(!t.animating){var a=t.querySelector(".".concat(U.a["z-right"])),r=JSON.parse(t.dataset.item),o=U.a["is-90"];a&&(Object(L.i)(a,o)?(Object(L.s)(a,o),n.methods.showSubNextEl(!1,t,r.itemKey)):(Object(L.c)(a,o),n.methods.showSubNextEl(!0,t,r.itemKey)))}}},n}return C()(t,e),z()(t,[{key:"componentDidMount",value:function(){var e=new L.a(this.bodyEl,{scrollbars:"custom"});Object(L.m)(this.contentEl,e.refresh)}},{key:"render",value:function(){var e=this,t=this.props,n=t.getUlElement,a=t.sourceData,r=t.sourceKeys,o=t.headerRender,i=t.itemRender;return k.a.createElement("section",{className:"".concat(U.a["z-transfer-box"])},k.a.createElement("header",{className:"".concat(U.a["z-transfer-heading"])},o&&o()),k.a.createElement("section",{className:"".concat(U.a["z-transfer-body"]),ref:function(t){e.bodyEl=t}},k.a.createElement("div",{className:"".concat(U.a["z-transfer-ul"]," ").concat(U.a["z-min-height"]),ref:function(t){e.contentEl=t,n(t)}},a.map(function(t,n){return k.a.createElement("div",{onClick:e.methods.expandNext,style:{paddingLeft:t.paddingLeft},key:t.itemKey,"data-expand":"1","data-item":E()(t),"data-disabled":t.disabled,className:"".concat(U.a["z-transfer-li"]," ").concat(t.isSub?U.a["is-sub"]:""," ").concat(t.droged?U.a["is-li-droged"]:""," ").concat(t.move?U.a["is-li-move"]:"","  ").concat(t.disabled||t.noChilds?U.a["is-li-disabled"]:"")},t.isSub?k.a.createElement(y.a,{type:"folder-open",style:{marginRight:"0.4em"}}):null,"function"!=typeof i||t.isSub?t[r.name]:i(t,n),t.isSub?k.a.createElement(y.a,{className:"".concat(U.a["z-right"]," ").concat(U.a["is-90"]),type:"right",style:{fontSize:"12px"}}):null)}))))}}]),t}(k.a.Component);_.propTypes={getUlElement:K.a.func,sourceKeys:K.a.object,sourceData:K.a.arrayOf(K.a.object),headerRender:K.a.func,itemRender:K.a.func},_.defaultProps={getUlElement:function(){},sourceData:[]};var F=function(e){function t(){var e,n;T()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=w()(this,(e=O()(t)).call.apply(e,[this].concat(r)))).getDefaultSourceData=function(e,t,a){t=t?"".concat(v()(t,10)+1.4,"em"):P;var r=[];return e.forEach(function(e,o){var i=e[n.props.sourceKeys.children],s=h()(i),l=p()({disabled:!1,isSub:s,parName:a||"root",paddingLeft:t,droged:!1,move:!1},e,{itemKey:Object(L.b)()+"_"+o,children:null,noChilds:s&&!i.length});void 0===l[n.props.sourceKeys.id]&&(l[n.props.sourceKeys.id]=Object(L.b)()+"_id"),r.push(l),s&&i.length&&(r=r.concat(n.getDefaultSourceData(e[n.props.sourceKeys.children],t,l.itemKey)))}),r},n.state={leftSourceData:n.getDefaultSourceData(n.props.leftSourceData),rightTargetData:n.getDefaultSourceData(n.props.rightTargetData)},n.methods={selectAll:function(){var e=n.getDefaultSourceData(n.state.leftSourceData).filter(function(e){e.droged=!0,e.paddingLeft=P;var t=n.props.repeated?-1:n.state.rightTargetData.findIndex(function(t,a,r){return t[n.props.sourceKeys.id]==e[n.props.sourceKeys.id]});return!e.disabled&&t<0&&!e.isSub});n.setState({rightTargetData:n.state.rightTargetData.concat(e)},function(){n.props.onChange("selectAll",n.state.rightTargetData,null,null)})},clearAll:function(){n.state.rightTargetData.length&&u.a.confirm({title:"确认清空全部吗?",content:"",okText:"确定",cancelText:"取消",onOk:function(){return n.setState({rightTargetData:[]},function(){n.props.onChange("clearAll",n.state.rightTargetData,null,null)}),d.a.resolve()}})}},n}return C()(t,e),z()(t,[{key:"componentDidUpdate",value:function(e){e.leftSourceData!==this.props.leftSourceData&&this.setState({leftSourceData:this.getDefaultSourceData(this.props.leftSourceData)}),e.rightTargetData!==this.props.rightTargetData&&this.setState({rightTargetData:this.getDefaultSourceData(this.props.rightTargetData)})}},{key:"render",value:function(){var e=this;return k.a.createElement(i.a,{gutter:16,className:this.props.className,style:this.props.style},k.a.createElement("p",{style:{marginBottom:"12px"}},"鼠标指针呈现类似 ",k.a.createElement("i",{className:"zero-icon zerod-move"})," ",'即可拖动，从左框拖动到右框表示"选择"，右框中可上下拖动调整顺序，拖出右框可移除选项'),k.a.createElement(s.a,{span:12},k.a.createElement(_,{itemRender:this.props.leftItemRender,getUlElement:function(t){e.leftUl=t},sourceData:this.state.leftSourceData,sourceKeys:this.props.sourceKeys,headerRender:function(){return k.a.createElement(J,null,"function"==typeof e.props.leftTitle?leftTitle():k.a.createElement("span",null,e.props.leftTitle),k.a.createElement(l.a,{size:"small",onClick:e.methods.selectAll,disabled:e.props.selectAllDisabled},"全选"))}}),k.a.createElement("div",{className:U.a["z-arrow-right"]},k.a.createElement(y.a,{type:"arrow-right"}))),k.a.createElement(s.a,{span:12},k.a.createElement(_,{itemRender:this.props.rightItemRender,getUlElement:function(t){e.rightUl=t},sourceData:this.state.rightTargetData,sourceKeys:this.props.sourceKeys,headerRender:function(){return k.a.createElement(J,null,"function"==typeof e.props.rightTitle?leftTitle():k.a.createElement("span",null,e.props.rightTitle),k.a.createElement(l.a,{size:"small",onClick:e.methods.clearAll,disabled:e.props.clearAllDisabled},"清空"))}})))}},{key:"componentDidMount",value:function(){var e=this;R()([this.leftUl,this.rightUl],{copy:function(t,n){return n===e.leftUl},accepts:function(t,n){return n!==e.leftUl},invalid:function(e){return("boolean"==typeof(e=H(e)).dataset.disabled?e.dataset.disabled:"true"==e.dataset.disabled)||e.dataset.item&&JSON.parse(e.dataset.item).isSub},removeOnSpill:!0,revertOnSpill:!1}).on("drop",function(t,n,a,i){t=H(t);var s=null;i&&"none"!==Object(L.h)(i,"display")&&"hidden"!==Object(L.h)(i,"visibility")&&(s=i);var l=e.state.rightTargetData,c=s?l.findIndex(function(e,t,n){return e.itemKey==JSON.parse(s.dataset.item).itemKey}):l.length,d=l[c],u=JSON.parse(t.dataset.item),f="";if(n!==a){if(n.removeChild(t),!e.props.repeated)if(l.findIndex(function(t,n,a){return t[e.props.sourceKeys.id]==u[e.props.sourceKeys.id]})>-1)return void o.a.error("不能重复添加");f="transfer",u.droged=!0,u.itemKey=Object(L.b)(),l.splice(c,0,u)}else{f="move",u.move=!0;var p=l.findIndex(function(e,t,n){return e.itemKey==u.itemKey});p>c?(l.splice(p,1),l.splice(c,0,u)):p<c&&(l.splice(c,0,u),l.splice(p,1))}u.paddingLeft=P,e.setState({rightTargetData:r()(l)},function(){e.props.onChange(f,e.state.rightTargetData,u,d)})}).on("cloned",function(e,t,n){e.className+=" z-transfer-item-clone",e.style.paddingLeft=P}).on("remove",function(t,n,a){t=H(t);var i=e.state.rightTargetData,s=JSON.parse(t.dataset.item),l=i.findIndex(function(e,t,n){return e.itemKey==s.itemKey});i.splice(l,1),n.appendChild(t),e.setState({rightTargetData:r()(i)},function(){o.a.info("已移除[".concat(s[e.props.sourceKeys.name],"]")),e.props.onChange("remove",e.state.rightTargetData,s,null)})}).on("over",function(e,t){t.parentElement.parentElement.className+=" ".concat(U.a["is-over"])}).on("out",function(e,t){t.parentElement.parentElement.className=t.parentElement.parentElement.className.replace(U.a["is-over"],"")})}}]),t}(k.a.Component);F.propTypes={sourceKeys:K.a.object,leftSourceData:K.a.arrayOf(K.a.object),rightTargetData:K.a.arrayOf(K.a.object),onChange:K.a.func,leftItemRender:K.a.func,rightItemRender:K.a.func,leftTitle:K.a.oneOfType([K.a.string,K.a.func]),rightTitle:K.a.oneOfType([K.a.string,K.a.func]),repeated:K.a.bool,selectAllDisabled:K.a.bool,clearAllDisabled:K.a.bool},F.defaultProps={sourceKeys:{name:"name",id:"id",children:"children"},leftSourceData:[],rightTargetData:[],onChange:function(e){},repeated:!0,selectAllDisabled:!1,clearAllDisabled:!1};var W=F,B=n("ebhq"),V=n("r0Fl"),X=n.n(V),Z=B.a.AmdDocHOC;t.default=Z(X.a,{demo1:function(){var e=function(e){function t(){var e,n;T()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=w()(this,(e=O()(t)).call.apply(e,[this].concat(r)))).state={leftData:[{name:"风中飘摇",children:[{name:"由于天涯"},{name:"泪如雨下"},{name:"阳光舞台",disabled:!0},{name:"天下轨道"}]},{name:"枫叶南山"},{name:"相信时代(禁用状态)",disabled:!0},{name:"天下三官",children:[{name:"由于天涯"},{name:"泪如雨下"}]}],rightData:[]},n.methods={onChange:function(e,t,n,a){}},n}return C()(t,e),z()(t,[{key:"render",value:function(){return k.a.createElement(W,{style:{width:"650px"},repeated:!0,onChange:this.methods.onChange,leftSourceData:this.state.leftData,rightTargetData:this.state.rightData,leftTitle:"左边",rightTitle:"右边",sourceKeys:{name:"name",id:"id",children:"children"},leftItemRender:function(e){return k.a.createElement("span",null,e.name)},rightItemRender:function(e){return k.a.createElement("span",null,e.name)}})}}]),t}(k.a.Component);return k.a.createElement(e,null)}})},jjl2:function(e,t,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="jjl2"},kXoh:function(e,t,n){var a=n("YzNE"),r=n("OIhb"),o=n("Mehk"),i=n("ws4X"),s=n("4zmg");e.exports=function(e,t){var n=1==e,l=2==e,c=3==e,d=4==e,u=6==e,f=5==e||u,p=t||s;return function(t,s,m){for(var h,g,v=o(t),y=r(v),b=a(s,m,3),E=i(y.length),D=0,T=n?p(t,E):l?p(t,0):void 0;E>D;D++)if((f||D in y)&&(g=b(h=y[D],D,v),e))if(n)T[D]=g;else if(g)switch(e){case 3:return!0;case 5:return h;case 6:return D;case 2:T.push(h)}else if(d)return!1;return u?-1:c||d?d:T}}},pnNO:function(e,t,n){"use strict";n.r(t);var a=n("MaNN"),r=n("C6MB"),o=(n("yDl1"),n("PwP1")),i=(n("Vsw1"),n("4Loy"),n("U7Fr")),s=n.n(i),l=n("/sSO"),c=(n("P4eO"),n("GPkD")),d=n.n(c),u=n("pv+U"),f=n.n(u),p=n("aTAs"),m=n.n(p),h=n("k7W2"),g=n.n(h),v=n("zqcf"),y=n.n(v),b=n("kB6t"),E=(n("YTQH"),n("rdAL")),D=n.n(E),T=n("FFPy"),S=n.n(T),z=(n("T9cD"),n("tW/l")),q=n.n(z);var w=Object(b.a)(),x=!1;t.default={name:"AmdDocHOC",HOC:function(e,t){e='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+e;var n=function(n){function a(){var e,t;d()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=m()(this,(e=g()(a)).call.apply(e,[this].concat(r)))).renderEls=[],t.state={navs:[],closeModaled:!0},t.setNavs=function(){var e=[],n=t.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){e.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-t.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),e.length&&t.setState({navs:e},function(){if(t.bindScrollEvent(),t.navEl&&t.navContentEl){var e=l.g.BuildScroll;t.navScroollInstance=new e(t.navEl,{scrollbars:"custom"}),l.g.listenDivSizeChange(t.navEl,t.navScroollInstance.refresh),l.g.listenDivSizeChange(t.navContentEl,t.navScroollInstance.refresh)}})},t.scrollEnd=function(){var e=-t.scrollInstance.scroll.y;t.state.navs.forEach(function(e){e.active=!1});for(var n=t.state.navs.length,a=0;a<n;a++){var r=t.state.navs[a];if(e>=r.el.offsetTop-120){if(!(a<n-1)){r.active=!0;break}var o=t.state.navs[a+1];if(o&&e<o.el.offsetTop-120){r.active=!0;break}}}t.setState({navs:s()(t.state.navs)})},t.bindScrollEvent=function(){t.scrollInstance.scroll.on("scrollEnd",t.scrollEnd)},t.navScrollTo=function(e){t.scrollInstance.scroll.scrollTo(0,-(e.el.offsetTop-24),200)},t}return y()(a,n),f()(a,[{key:"componentWillUnmount",value:function(){x=!0,this.renderEls.forEach(function(e){S.a.unmountComponentAtNode(e)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var a=e.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var r=e.attributes[n].nodeValue;t[a.match(/^data-(\w+)/)[1]]=r}}return t}(n);if(t&&"function"==typeof t[a.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var o=t[a.render]();e.renderEls.push(n),S.a.render(o,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var i=document.createElement("img");i.addEventListener("click",function(){i.src=i.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=i.open?"0px":"auto",i.open=!i.open},!1),i.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=a.title?a.title:"",t.appendChild(s),r&&t.appendChild(i),e.appendChild(t),r&&o.appendChild(r),e.appendChild(o),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){x=!1,"function"==typeof t.target._render&&e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:t.target._render(),scroll:t.target._scroll,onTransitionend:function(t){x||e.setState({closeModaled:!t})}})},10)},!1),this.mdEl.addEventListener("click",function(t){if("string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";x=!1,e.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(t){x||e.setState({closeModaled:!t})}}),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof t.target.className&&t.target.className.includes("z-history-href")){var n=t.target.dataset.path;"string"==typeof n&&e.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){e.setNavs()},100)}},{key:"render",value:function(){var t=this;return D.a.createElement(r.b.Template,null,D.a.createElement(w,{pageHeader:{show:!1},hasBodyPadding:!1},D.a.createElement("div",{className:"z-panel ".concat(q.a["z-md-doc"]),ref:function(e){return t.mdEl=e}},D.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},D.a.createElement(o.a,{mode:"html"},e)))),this.state.navs.length&&this.state.closeModaled?S.a.createPortal(D.a.createElement("div",{className:q.a["z-nav-box"],ref:function(e){return t.navEl=e}},D.a.createElement("div",{ref:function(e){return t.navContentEl=e}},D.a.createElement("section",null,this.state.navs.map(function(e,n){return D.a.createElement("div",{title:e.name,className:"".concat(q.a["z-nav"]," ").concat(e.active?q.a.active:""),key:n,onClick:function(){t.navScrollTo(e)}},e.name)})))),document.body):null)}}]),a}(D.a.Component);return a.a.setConsumer(n)}}},r0Fl:function(e,t){e.exports='<h1 id="-zonewaytransfer">单向转移框: ZoneWayTransfer</h1>\n<p><code>ZoneWayTransfer</code>是一个通过拖动的单向转移选择框组件，左侧源数据框，右侧是接收框</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="左框的选项拖动到右框，右框内的选项可以上下拖动排序"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZoneWayTransfer } from &quot;zerod&quot;;\nclass Myjavascript extends React.Component {\n    state = {\n        leftData: [\n            { name: &quot;风中飘摇&quot;, children: [{ name: &quot;由于天涯&quot; }, { name: &quot;泪如雨下&quot; }] },\n            { name: &quot;枫叶南山&quot; },\n            { name: &quot;相信时代(禁用状态)&quot;, disabled: true },\n            { name: &quot;天下三官&quot;, children: [{ name: &quot;由于天涯&quot; }, { name: &quot;泪如雨下&quot; }] },\n        ],\n        rightData: [],\n    };\n    methods = {\n        onChange: (actionType, rightData, actionItem, sibligItem) =&gt; {\n            //actionType=&quot;transfer&quot; 从左转移到右\n            //actionType=&quot;move&quot; 右框内移动排序\n            //actionType=&quot;remove&quot; 拖出右框移除\n            //actionType=&quot;selectAll&quot; 全选\n            //actionType=&quot;clearAll 清空\n        },\n    };\n    render() {\n        return (\n            &lt;ZoneWayTransfer\n                style={{ width: &quot;600px&quot; }}\n                repeated={true}\n                onChange={this.methods.onChange}\n                leftSourceData={this.state.leftData}\n                rightTargetData={this.state.rightData}\n                leftTitle=&quot;左边&quot;\n                rightTitle=&quot;右边&quot;\n                sourceKeys={{ name: &quot;name&quot;, id: &quot;id&quot; }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id="zonewaytransfer-props">ZoneWayTransfer 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>leftSourceData</td>\n            <td>左侧框的数据源,[{name:"名称",id:"1",disabled:false}]</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>rightTargetData</td>\n            <td>右侧框的数据,[{name:"名称",id:"1",disabled:false}]</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>sourceKeys</td>\n            <td>定义leftSourceData和rightTargetData的key对象，默认：{name:"name",id:"id"}</td>\n            <td>object</td>\n            <td>{name:"name",id:"id"}</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>操作之后的回调，参数有 actionType：操作类型，rightData：操作之后右框数据，actionItem：当前操作的数据，sibligItem：当前操作位置下一个数据</td>\n            <td>(actionType, rightData, actionItem, sibligItem) => {}</td>\n            <td>{name:"name",id:"id"}</td>\n        </tr>\n         <tr>\n            <td>repeated</td>\n            <td>是否允许重复选择</td>\n            <td>Boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> leftTitle</td>\n            <td>左框标题</td>\n            <td>string | function(){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> rightTitle</td>\n            <td>右框标题</td>\n            <td>string | function(){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> leftItemRender</td>\n            <td>左框选择项的渲染函数</td>\n            <td>function(item,index){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> rightItemRender</td>\n            <td>右框选择项的渲染函数</td>\n            <td>function(item,index){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>selectAllDisabled</td>\n            <td>禁用全选按钮</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>clearAllDisabled</td>\n            <td>禁用清空按钮</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'}}]);