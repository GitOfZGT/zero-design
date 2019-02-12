(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"+fre":function(t,e,o){"use strict";o.r(e);var n=o("2/Rp"),a=o("/HRN"),s=o.n(a),r=o("WaGi"),c=o.n(r),l=o("ZDA2"),u=o.n(l),i=o("/+P4"),d=o.n(i),p=o("N9n2"),m=o.n(p),q=o("q1tI"),v=o.n(q);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(o){function a(){return s()(this,a),u()(this,d()(a).apply(this,arguments))}return m()(a,o),c()(a,[{key:"componentDidMount",value:function(){var o=this.boxEl.querySelector(".z-open-modal-btn");o._scroll=e,o._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(e){t.boxEl=e}},v.a.createElement(n.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(v.a.PureComponent)}}},KnEK:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-">移动端网页开发</h1>\n<p><code>zerod-admin-webpack</code>脚手架同样适用于移动端网页开发，但是要做一些相关的配置调整</p>\n<h2 id="-">首先</h2>\n<p>移动端开发不使用<code>antd</code>库，所以先把<code>antd</code>相关的去掉，zerod的部分东西是不依赖antd的可以继续使用，如<code>zTool</code>，但是不能通过<code>import {zTool} from &#39;zerod&#39;</code> ，请使用 <code>import {deepCopy,dataType} from &#39;zerod/components/zTool&#39;</code> </p>\n<h2 id="-package-json-">在 package.json 中</h2>\n<pre><code class="language-js">{\n    &quot;dependencies&quot;: {\n        //&quot;antd&quot;: &quot;^3.11.6&quot;,去掉\n        &quot;axios&quot;: &quot;^0.18.0&quot;,\n        &quot;babel-polyfill&quot;: &quot;^6.26.0&quot;,\n        &quot;react&quot;: &quot;^16.4.0&quot;,\n        &quot;react-dom&quot;: &quot;^16.4.0&quot;,\n        &quot;react-loadable&quot;: &quot;^5.4.0&quot;,\n        &quot;react-redux&quot;: &quot;^5.0.7&quot;,\n        &quot;react-router-dom&quot;: &quot;^4.3.1&quot;,\n        &quot;react-transition-group&quot;: &quot;^2.4.0&quot;,\n        &quot;redux&quot;: &quot;^4.0.1&quot;\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-babel-config-js-babelrc-">在babel.config.js 或 .babelrc 中，把如下不需要用到的都去掉，如下</h2>\n<pre><code class="language-js">// [\n//     &quot;import&quot;,\n//     {\n//         &quot;libraryName&quot;: &quot;antd&quot;,\n//         &quot;style&quot;: true,\n//         &quot;libraryDirectory&quot;: &quot;es&quot;\n//     }\n// ],\n[\n    &quot;import&quot;,\n    {\n        &quot;libraryName&quot;: &quot;zerod&quot;,\n        &quot;style&quot;: false,\n        &quot;libraryDirectory&quot;: &quot;components&quot;,\n        &quot;camel2DashComponentName&quot;: false\n    }\n],\n// [\n//     &quot;prismjs&quot;,\n//     {\n//         &quot;languages&quot;: [&quot;javascript&quot;, &quot;scss&quot;, &quot;jsx&quot;,&quot;json&quot;,&quot;yaml&quot;],\n//         &quot;plugins&quot;: [&quot;line-numbers&quot;],\n//         &quot;theme&quot;: &quot;tomorrow&quot;,\n//         &quot;css&quot;: true\n//     }\n// ]</code></pre>\n<h2 id="-config-index-js-zerod-scss-scssvars-">在 config/index.js 中,如果没用到zerod或者不需要scss变量提升，可将scssVars属性为空（否则忽略）</h2>\n<pre><code class="language-js">const config = {\n    //入口js\n    entry: {\n        app: [&quot;babel-polyfill&quot;,&quot;./src/main.js&quot;],\n    },\n    copyName: shareName,\n    //babel-loader 要包含的文件夹是哪些\n    &quot;babel-includes&quot;: [&quot;src&quot;, &quot;node_modules/zerod&quot;, /(node_modules(\\\\|\\/)share\\-.*)/, &quot;node_modules/webpack-dev-server/client&quot;],\n    //微信页面开发授权域名验证的文件，如： path.resolve(__dirname, &#39;../MP_verify_P7fns4NGi17lbM0R.txt&#39;)\n    MP_verify: &quot;&quot;,\n    favicon: path.resolve(__dirname, &quot;../src/assets/images/logo.png&quot;),\n    //scss变量提升\n    scssVars:[path.resolve(__dirname,&quot;../node_modules/zerod/ant-theme-vars.scss&quot;)],\n    dll: {\n        //除了package.json的dependencies，还需包含\n        include: [&quot;moment&quot;],\n        //打包dll时从package.json的dependencies中不包含\n        exclude: [&quot;antd&quot;, &quot;uuid&quot;,&quot;echarts&quot;,&quot;babel-polyfill&quot;],\n    },</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-postcssrc-js-viewportwidth-viewportheight-">移动端自适应方案：在.postcssrc.js 中，用如下 代码框的配置 替换全部，再修改 viewportWidth 和 viewportHeight 对应设计稿的宽度和高度</h2>\n<h3 id="-rem-rem-vw-vh-vm-">移动端自适应，以前用 rem 加媒体查询来做自适应，如今，rem 方式也完成了它的历史使命，改用 vw、vh 、vm 等视窗单位</h3>\n<h3 id="-px-postcss-px-">但是我们在项目依然用<code>px</code>单位来写，使用 postcss 的插件自动将 px 转成视窗单位</h3>\n<h3 id="-">最后还要安装插件包：</h3>\n<p><code>npm install postcss-aspect-ratio-mini postcss-write-svg postcss-preset-env postcss-px-to-viewport cssnano cssnano-preset-advanced --save-dev</code></p>\n<pre><code class="language-js">// 容器适配，可以使用vw\n// 文本的适配，可以使用vw\n// 大于1px的边框、圆角、阴影都可以使用vw\n// 内距和外距，可以使用vw\n\nmodule.exports = {\n    plugins: {\n        &quot;postcss-import&quot;: {},\n        &quot;postcss-url&quot;: {},\n        &quot;postcss-aspect-ratio-mini&quot;: {},\n        &quot;postcss-write-svg&quot;: { utf8: false },\n        &quot;postcss-preset-env&quot;: { stage: 0, autoprefixer: { grid: true } },\n        &quot;postcss-px-to-viewport&quot;: {\n            viewportWidth: 419, // (Number) 设计稿的宽度（标准像素）.\n            viewportHeight: 741, // (Number) 设计稿的高度（标准像素）.\n            unitPrecision: 3, // // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）\n            viewportUnit: &quot;vw&quot;, //指定需要转换成的视窗单位，建议使用vw\n            selectorBlackList: [&quot;.not-vw&quot;, /^.weui-/, &#39;[class^=&quot;weui&quot;]&#39;], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名\n            minPixelValue: 1, // 于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值\n            mediaQuery: false, // 允许在媒体查询中转换`px`\n        },\n        // &quot;postcss-viewport-units&quot;: {},\n        cssnano: {\n            preset: &quot;advanced&quot;,\n            autoprefixer: false,\n            &quot;postcss-zindex&quot;: false,\n        },\n        // to edit target browsers: use &quot;browserslist&quot; field in package.json\n        // &quot;autoprefixer&quot;: {}\n    },\n};</code></pre>\n'},Ncpu:function(t,e,o){"use strict";o.r(e);var n=o("ebhq"),a=o("KnEK"),s=o.n(a),r=n.a.AmdDocHOC;e.default=r(s.a)},ebhq:function(t,e,o){"use strict";var n=o("iZP3"),a=o.n(n),s=o("jjl2"),r={},c=[];s.keys().forEach(function(t){var e=void 0;try{e=s(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==a()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var o=e.name;if("string"!=typeof o)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(o))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(o=o.trim(),c.includes(o))throw Error("".concat(t,":").concat(o,"此HOC名称已被使用"));c.push(o),r[o]=e.HOC}),e.a=r},jjl2:function(t,e,o){var n={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=s(t);return o(e)}function s(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="jjl2"},pnNO:function(t,e,o){"use strict";o.r(e);var n=o("MaNN"),a=o("C6MB"),s=o("PwP1"),r=o("TbGu"),c=o.n(r),l=o("/sSO"),u=o("/HRN"),i=o.n(u),d=o("WaGi"),p=o.n(d),m=o("ZDA2"),q=o.n(m),v=o("/+P4"),f=o.n(v),h=o("N9n2"),g=o.n(h),b=o("kB6t"),w=o("q1tI"),y=o.n(w),E=o("i8i4"),x=o.n(E),z=(o("17x9"),o("tW/l")),N=o.n(z);var j=Object(b.a)(),C=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var o=function(o){function n(){var t,e;i()(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=q()(this,(t=f()(n)).call.apply(t,[this].concat(a)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],o=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(o).forEach(function(o){t.push({name:o.dataset.title?o.dataset.title:o.nextElementSibling.innerText,el:o.nextElementSibling,active:-e.scrollInstance.scroll.y==o.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=l.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),l.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),l.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var o=e.state.navs.length,n=0;n<o;n++){var a=e.state.navs[n];if(t>=a.el.offsetTop-120){if(!(n<o-1)){a.active=!0;break}var s=e.state.navs[n+1];if(s&&t<s.el.offsetTop-120){a.active=!0;break}}}e.setState({navs:c()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return g()(n,o),p()(n,[{key:"componentWillUnmount",value:function(){C=!0,this.renderEls.forEach(function(t){x.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,o=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(o).forEach(function(o){var n=function(t){var e={};if(t.dataset)return t.dataset;for(var o=0;o<t.attributes.length;o++){var n=t.attributes[o].nodeName;if(/^data-\w+$/.test(n)){var a=t.attributes[o].nodeValue;e[n.match(/^data-(\w+)/)[1]]=a}}return e}(o);if(e&&"function"==typeof e[n.render]){var a=o.nextElementSibling;a=a&&"pre"==a.localName?a:null;var s=e[n.render]();t.renderEls.push(o),x.a.render(s,o,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var s=document.createElement("div");s.className="z-demo-code";var r=document.createElement("img");r.addEventListener("click",function(){r.src=r.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",s.style.height=r.open?"0px":"auto",r.open=!r.open},!1),r.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var c=document.createElement("span");c.innerText=n.title?n.title:"",e.appendChild(c),a&&e.appendChild(r),t.appendChild(e),a&&s.appendChild(a),t.appendChild(s),o.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){C=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){C||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var o=e.target._modal?e.target._modal:"mainModal";C=!1,t.props.showRightModal({show:!0,modal:o,content:null,scroll:!0,onTransitionend:function(e){C||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,o),setTimeout(function(){t.props.showModalLoading(!1,o)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var o=e.target.dataset.path;"string"==typeof o&&t.props.$router.history.push(o)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return y.a.createElement(a.b.Template,null,y.a.createElement(j,{pageHeader:{show:!1},hasBodyPadding:!1},y.a.createElement("div",{className:"z-panel ".concat(N.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},y.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},y.a.createElement(s.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?x.a.createPortal(y.a.createElement("div",{className:N.a["z-nav-box"],ref:function(t){return e.navEl=t}},y.a.createElement("div",{ref:function(t){return e.navContentEl=t}},y.a.createElement("section",null,this.state.navs.map(function(t,o){return y.a.createElement("div",{title:t.name,className:"".concat(N.a["z-nav"]," ").concat(t.active?N.a.active:""),key:o,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),n}(y.a.PureComponent);return n.a.setConsumer(o)}}}}]);
//# sourceMappingURL=36.6b671ce6a1e39a9416a9.js.map