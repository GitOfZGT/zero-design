/*{
    "version": "1.0.0",
    "platform": "darwin",
    "buildTime": "2021-10-18 17:49:49"
}*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/NT/":function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ZcolorPicker=void 0,n("nTlR");var r=o(n("fwZX")),a=o(n("q8s6")),l=o(n("MAG/")),c=o(n("6iOh")),u=o(n("1rR9")),i=o(n("IPZl")),s=o(n("v6s4")),d=o(n("yLZQ")),p=o(n("XcRB")),f=n("i9C0"),m=n("7JPH");function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,i.default)(e);if(t){var r=(0,i.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,u.default)(this,n)}}n("DY0S");var g=function(e){(0,c.default)(n,e);var t=h(n);function n(){var e;(0,a.default)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showPicker:!1,color:"",size:"default"},e.backgroundColor="tranparent",e.position={},e.methods={initValue:function(){var t=e.props.value||e.props.defaultValue;if(t){var n="";if(t.includes("rgb")){var o=t.trim().replace(/[rgba\(\)]/g,"").replace(/[，]/g,",").split(",");if(!(3===o.length|4===o.length))throw Error("rgb值书写有误");n={r:Number(o[0]),g:Number(o[1]),b:Number(o[2]),a:o[3]?Number(o[3]):1}}else{if(!(t.includes("#")&&t.length>3))throw Error("颜色值只支持hex和rgb类型");n=t}e.backgroundColor=n,e.setState({color:n})}},colorChange:function(t,n){e.backgroundColor="rgba(".concat(t.rgb.r,", ").concat(t.rgb.g,", ").concat(t.rgb.b,",").concat(t.rgb.a,")"),e.setState({color:t.rgb}),e.props.onChange&&e.props.onChange("rgb"==e.props.valueType?e.backgroundColor:t[e.props.valueType],t)},setPosition:function(){var t=e.boxEl.getBoundingClientRect(),n=e.pickerEl.getBoundingClientRect(),o=t.top+t.height,r=t.left;o+n.height>document.documentElement.clientHeight&&(o=t.top-n.height),r+n.width>document.documentElement.clientWidth&&(r=t.left-n.width),e.position={top:o,left:r},e.coverEl.style.visibility="visible"},triggerPicker:function(t){if(!(e.props.disabled||t&&e.pickerEl.contains(t.target))){var n=!e.state.showPicker;n&&(e.coverEl.style.display="block",e.coverEl.style.visibility="hidden",e.methods.setPosition()),e.setState({showPicker:n})}},onAnimationEnd:function(){e.state.showPicker||(e.coverEl.style.display="none")},closePicker:function(t){t&&(e.pickerEl.contains(t.target)||e.boxEl.contains(t.target))||e.setState({showPicker:!1})},clearColor:function(t){t.stopPropagation(),e.backgroundColor="tranparent",e.setState({color:""}),e.props.onChange&&e.props.onChange(null)}},e}return(0,l.default)(n,[{key:"componentDidMount",value:function(){this.methods.initValue(),document.documentElement.addEventListener("click",this.methods.closePicker,!1)}},{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.methods.initValue()}},{key:"componentWillUnmount",value:function(){document.documentElement.removeEventListener("click",this.methods.closePicker,!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.disabled,a=t.style,l=t.size,c=t.allowClear;return s.default.createElement("span",{className:"z-color-box ".concat(l," ").concat(n||""," ").concat(o?"disabled":""," ").concat(this.state.color&&c?"allow-clear":""),ref:function(t){return e.boxEl=t},style:a,onClick:this.methods.triggerPicker},s.default.createElement("span",{className:"z-bg"}),s.default.createElement("span",{className:"z-color ".concat(this.state.color&&c?"allow-clear":""),style:this.state.color?{backgroundColor:this.backgroundColor}:null}),d.default.createPortal(s.default.createElement("div",{className:"z-cover",ref:function(t){return e.coverEl=t}},s.default.createElement(m.CSSTransition,{in:this.state.showPicker,timeout:500,classNames:"fadeIn-to-down"},s.default.createElement("div",{className:"z-picker",style:this.position,ref:function(t){return e.pickerEl=t},onAnimationEnd:this.methods.onAnimationEnd},s.default.createElement(f.SketchPicker,{color:this.state.color,onChange:this.methods.colorChange})))),document.body),this.state.color&&c?s.default.createElement(r.default,{type:"close-circle",theme:"filled",className:"z-color-clear-icon",onClick:this.methods.clearColor}):null)}}]),n}(s.default.PureComponent);t.ZcolorPicker=g,g.propTypes={value:p.default.string,defaultValue:p.default.string,onChange:p.default.func,className:p.default.string,size:p.default.string,valueType:p.default.string,disabled:p.default.bool,allowClear:p.default.bool},g.defaultProps={valueType:"hex",allowClear:!1};var v=g;t.default=v},"/Ykg":function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Zviewer=void 0;var r=o(n("q8s6")),a=o(n("MAG/")),l=o(n("6iOh")),c=o(n("1rR9")),u=o(n("IPZl")),i=o(n("v6s4")),s=o(n("kRUu")),d=o(n("XcRB")),p=o(n("ryJs"));n("hfS7"),n("axcb");var f=o(n("vApo")),m=n("V0j1"),h=n("7JPH"),g=o(n("nyVi"));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}var y=function(e){(0,l.default)(n,e);var t=v(n);function n(){var e;(0,r.default)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).initViewer=(0,g.default)((function(){e.viewer?e.viewer.update():e.props.urls.length&&(e.viewer=new p.default(e.imgsEl,{transition:!1,url:function(e){return e.dataset.url},hide:e.props.onViewerHide,ready:function(){var t=e.viewer.viewer?e.viewer.viewer:null;if(t&&null===t.querySelector(".z-next")){var n=document.createElement("div"),o=document.createElement("div");n.className="z-next",o.className="z-prev",n.innerHTML='<i  class="zero-icon zerod-next"/>',o.innerHTML='<i  class="zero-icon zerod-prev"/>',t.appendChild(n),t.appendChild(o),n.addEventListener("click",(function(){e.viewer.next(!0)}),!1),o.addEventListener("click",(function(){e.viewer.prev(!0)}),!1)}}})),e.props.viewerUpdated&&e.props.viewerUpdated()}),60),e}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.initViewer()}},{key:"componentDidUpdate",value:function(e){e.urls===this.props.urls&&e.urls.length===this.props.urls.length||this.initViewer()}},{key:"componentWillUnmount",value:function(){this.viewer&&this.viewer.destroy()}},{key:"render",value:function(){var e=this,t=this.props.showThumbAlt;return i.default.createElement("ul",{ref:function(t){e.imgsEl=t},className:"z-viewer-ul ".concat(this.props.className)},i.default.createElement(h.TransitionGroup,{component:null,enter:!0,exit:!1,appear:!0},this.props.urls.map((function(n,o){var r="string"==typeof n?n:n.thumb?n.thumb:n.url,a="string"==typeof n?n:n.url,l="string"!=typeof n&&n.alt?n.alt:o+1;return i.default.createElement(h.CSSTransition,{key:o,timeout:m.animateTimout.flipInTime,classNames:"flipY",onEntered:e.initViewer,onExited:e.initViewer},i.default.createElement("li",{key:o},t?i.default.createElement("div",{className:"z-viewer-thumb"},i.default.createElement(f.default,{url:r,style:{height:"100%"}})):i.default.createElement(f.default,{url:r,style:{height:"100%"}}),t?i.default.createElement("div",{className:"z-viewer-alt"},l):null,i.default.createElement("img",{"data-url":a,alt:l})))}))))}}]),n}(s.default);t.Zviewer=y,y.propTypes={urls:d.default.oneOfType([d.default.arrayOf(d.default.string),d.default.arrayOf(d.default.object)]),className:d.default.string,showThumbAlt:d.default.bool},y.defaultProps={urls:[],className:"",showThumbAlt:!0};var b=y;t.default=b},"4QcS":function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("6sYb")),a=o(n("55cP"));n("FWSn");var l=o(n("tOpa"));n("pnp8");var c=o(n("tHrf"));n("gV3c");var u=o(n("ogjV")),i=o(n("/NT/"));n("xgct");var s=o(n("6Wwa")),d=o(n("q8s6")),p=o(n("MAG/")),f=o(n("6iOh")),m=o(n("1rR9")),h=o(n("IPZl")),g=o(n("v6s4"));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,h.default)(e);if(t){var r=(0,h.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,m.default)(this,n)}}var y=!1,b=function(e){(0,f.default)(n,e);var t=v(n);function n(){var e;(0,d.default)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).items=[{key:"serviceCode",label:"服务编码",render:function(e){return new Promise((function(e){setTimeout((function(){e(g.default.createElement(s.default,{placeholder:"请输入服务编码"}))}),5e3)}))},options:function(){return{rules:[{required:!0,message:"不能为空。"}]}}},{key:"serviceName",label:"服务名称",render:function(e){return g.default.createElement(s.default,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"colorValue",label:"颜色值",render:function(e){return g.default.createElement(i.default,{className:"z-margin-top-4"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceRemark",label:"服务说明",span:{md:24},render:function(e){return g.default.createElement(s.default.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"servicePort",label:"端口号",labelWidth:"80px",render:function(e){return g.default.createElement(u.default,{min:11110,max:65535,step:10})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"myButton",label:"按钮",render:function(t,n){return g.default.createElement(c.default,{type:"primary",onClick:function(){var t=e.items.slice(0);t.splice(4,1),n(y?e.items:t),y=!y}},y?"显示":"不显示","端口号")}},{key:"confProperty",label:"默认配置",span:24,render:function(e){return g.default.createElement(s.default.TextArea,{rows:15,placeholder:"请输入默认配置"})},options:{rules:[{required:!0,message:"不能为空。"}]}}],e.defaultValue={serviceCode:"9999",serviceRemark:"llll"},e}return(0,p.default)(n,[{key:"render",value:function(){return g.default.createElement(r.default,{pageHeader:{show:!1}},g.default.createElement(a.default,{labelLayout:"horizontal",values:this.defaultValue,items:this.items,onSubmit:function(e){return Promise.resolve().then((function(t){l.default.success("提交成功："+JSON.stringify(e))}))}}))}}]),n}(g.default.PureComponent);t.default=b},"6m3K":function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("v6s4")),a=function(e){return r.default.createElement("div",null,"组件内容")};t.default=a},D6UO:function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("v6s4")),a=o(n("GuB6")),l=o(n("oHWW")),c=o(n("6m3K")),u=o(n("4QcS")),i=l.default.AmdDocHOC,s=l.default.AshowDemoHOC,d=i(a.default,{MyComponent:function(){return r.default.createElement(c.default,null)},MyForm:function(){var e=s(r.default.createElement(u.default,null),{openBtnName:"",scroll:!0});return r.default.createElement(e,null)},SandboxDemo1:{path:"/static/sandboxPages/SandboxDemo1.html"}});t.default=d},GuB6:function(e,t){e.exports='\x3c!-- @routePath: /zerod-markdown --\x3e\n\n\x3c!-- @import: ../README.md --\x3e\n<h1 id="zerod-markdown-webpack">zerod-markdown-webpack</h1>\n<p>将<code>src</code>目录内的<code>.md</code>文件编译成生成一个单页面文档，正如所看到当前文档一样。</p>\n<p>在<code>src</code>目录中可以随意命名<code>.md</code>文件。</p>\n<h2 id="终端命令">终端命令</h2>\n<blockquote>\n<p>npm run dev 或 npm start ： 启动服务。</p>\n</blockquote>\n<blockquote>\n<p>npm run build : 生产打包。</p>\n</blockquote>\n<blockquote>\n<p>npm run doc : 当 src 目录每次新增<code>.md</code>文件并且新增了@routePath，须执行一次才会触发编译</p>\n</blockquote>\n<h2 id="使用">使用</h2>\n<ol>\n<li>npm install</li>\n<li>在<code>src</code>中添加<code>.md</code>写文档</li>\n<li>npm run dev</li>\n</ol>\n<h2 id="md-文档编写规则">.md 文档编写规则</h2>\n<p>凡是作为导航页面的<code>.md</code>文件内容顶部必须添加如下注释声明 @routePath :</p>\n<pre><code class="language-html">&lt;!-- @routePath: /components/ZbgImage --&gt;</code></pre>\n<blockquote>\n<p>@routePath : 路由路径，必须以&quot;/&quot;开头，与 src/docs.config.js 的 menuData[].path 对应</p>\n</blockquote>\n<blockquote>\n<p>在<code>npm run dev</code>服务运行中，每次新增<code>.md</code>文件并且新增了@routePath，须执行 <code>npm run doc</code>一次才会触发编译</p>\n</blockquote>\n<p><code>.md</code>文件中使用的静态资源如图片等，须放在 <code>static</code> 下，在<code>.md</code>中引用绝对路径如：<code>![这个是一张图片](/static/images/banner.png)</code></p>\n<h2 id="srcdocsconfigjs">src/docs.config.js</h2>\n<p>左侧导航配置的路径按如下注释说明与 @routePath 对应即可</p>\n<pre><code class="language-js">module.exports = {\n    publicPath: &#39;/&#39;,\n    sourceDirs: [&#39;zerod&#39;],\n    leftExpandWidth: 280,//侧栏展开时宽度\n    author: &#39;ZGT&#39;, //作者\n    projectName: &#39;Zero-desigin&#39;, //文档标题\n    firstPage: &#39;/start&#39;, //强制默认打开的路由地址\n    version: &#39;0.0.1&#39;, //版本\n    //导航配置\n    menuData: [\n        {\n            path: &#39;start&#39;, //一级导航的路径 对应 @routePath: /start\n            name: &#39;开始&#39;,\n            iconClass: &#39;snippets&#39;,\n        },\n\n        {\n            path: &#39;components&#39;,\n            name: &#39;组件&#39;,\n            iconClass: &#39;diff&#39;,\n            children: [\n                {\n                    path: &#39;ZbgImage&#39;, //二级导航，注：会拼接父节点的path生成 /components/ZbgImage ，好对应 @routePath : /components/ZbgImage\n                    name: &#39;图片展示&#39;,\n                    iconClass: &#39;&#39;,\n                },\n            ],\n        },\n        {\n            path: &#39;components/Zinfo&#39;, //一级导航的路径 对应 @routePath: /components/Zinfo\n            name: &#39;信息展示&#39;,\n            iconClass: &#39;edit&#39;,\n        },\n    ],\n    // 更新日志(以二维数组字符串描述更新日志)\n    logs: [],\n};</code></pre>\n<h2 id="md-中代码块对应的前端-demo-的编写规则">.md 中代码块对应的前端 demo 的编写规则</h2>\n<p>如果要把<code>js</code>或者<code>jsx</code>的代码块渲染生成 demo,必须在代码块中添加如下注释,而且必须导出 React 组件(请看代码块内容):</p>\n<div class="z-demo-box" data-render="MyComponent" data-title=" demo标题" data-description=" 这是@renderMode:inline的代码块示例" data-defaultexpanded="false"></div>\n\n<pre><code class="language-js">/**\n * @renderMode:inline\n * @componentName: MyComponent\n * @title: demo标题\n * @description : 这是@renderMode:inline的代码块示例\n */\nimport React from &#39;react&#39;;\n//而且必须导出 React 组件\nconst MyComponent = (props) =&gt; {\n    return &lt;div&gt;组件内容&lt;/div&gt;;\n};\nexport default MyComponent;</code></pre>\n<p><strong>注意：切忌在代码块内部出现连续的 ` 符号，如 `` 是会影响截取代码片段的。</strong></p>\n<blockquote>\n<p>@renderMode : 渲染组件的位置，可选 inline | rightModal | sandbox，当 @renderMode:sandbox 时，会将代码内容放进独立的 iframe 中，适用于写移动端 demo。</p>\n</blockquote>\n<blockquote>\n<p>@componentName : export default React 组件的名称，必须以大写首字母开头,当 @componentName : EmptyRender 时不会渲染 demo,只是折叠代码块; 反之,每个代码块的 @componentName 是唯一的，但 @componentName : EmptyRender 可以是多个的。</p>\n</blockquote>\n<blockquote>\n<p>@title : demo 的标题。</p>\n</blockquote>\n<blockquote>\n<p>@description : demo 的描述 @renderMode:sandbox 中无效。</p>\n</blockquote>\n<blockquote>\n<p>@defaultExpanded : 是否默认展开代码块，可选 true | false</p>\n</blockquote>\n<p>当 @renderMode : rightModal 时还有属性：</p>\n<blockquote>\n<p>@openBtnName : 按钮的名称</p>\n</blockquote>\n<blockquote>\n<p>@scroll : rightModal 内是否启用滚动条，可选 true | false</p>\n</blockquote>\n<p>如果要在代码块中<code>import</code> src 目录的内容，取决于 src/package.json 的&quot;name&quot;,如 src/package.json 的&quot;name&quot;:&quot;zerod-mypack&quot;，这是 src 目录的别名就是&quot;zerod-mypack&quot;，就可以如下引入 src 目录的资源：</p>\n<pre><code class="language-js">//引入 zerod-mypack 中的资源示例\nimport mymodule from &#39;zerod-mypack/mymodule&#39;;\nimport Zform from &#39;zerod-mypack/components/Zform&#39;;</code></pre>\n<h2 id="渲染-demo-的代码块">渲染 demo 的代码块</h2>\n<div class="z-demo-box" data-render="MyForm" data-title=" 这是@renderMode:rightModal的代码块示例" data-description=" 表单渲染示例" data-defaultexpanded="false"></div>\n\n<pre><code class="language-jsx">/**\n * @renderMode:rightModal\n * @componentName: MyForm\n * @description : 表单渲染示例\n * @title: 这是@renderMode:rightModal的代码块示例\n */\nimport React from &#39;react&#39;;\nimport { Zform, ZcolorPicker, ZpageWrapper } from &#39;zerod&#39;;\nimport { Input, message, InputNumber, Button } from &#39;antd&#39;;\nlet hasHide = false;\nexport default class MyForm extends React.PureComponent {\n    items = [\n        {\n            key: &#39;serviceCode&#39;,\n            label: &#39;服务编码&#39;,\n            render: (form) =&gt; {\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve(&lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;);\n                    }, 5000);\n                });\n            },\n            //antd的 form.getFieldDecorator的options\n            options: () =&gt; ({\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &#39;不能为空。&#39;,\n                    },\n                ],\n            }),\n        },\n        {\n            key: &#39;serviceName&#39;,\n            label: &#39;服务名称&#39;,\n            render: (form) =&gt; {\n                return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &#39;不能为空。&#39;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &#39;colorValue&#39;,\n            label: &#39;颜色值&#39;,\n            render: (form) =&gt; {\n                return &lt;ZcolorPicker className=&quot;z-margin-top-4&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &#39;不能为空。&#39;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &#39;serviceRemark&#39;,\n            label: &#39;服务说明&#39;,\n            span: { md: 24 },\n            render: (form) =&gt; {\n                return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &#39;不能为空。&#39;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &#39;servicePort&#39;,\n            label: &#39;端口号&#39;,\n            labelWidth: &#39;80px&#39;,\n            render: (form) =&gt; {\n                return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &#39;不能为空。&#39;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &#39;myButton&#39;,\n            label: &#39;按钮&#39;,\n            render: (form, changeFormItems) =&gt; {\n                return (\n                    &lt;Button\n                        type=&quot;primary&quot;\n                        onClick={() =&gt; {\n                            const newItems = this.items.slice(0);\n                            newItems.splice(4, 1);\n                            changeFormItems(hasHide ? this.items : newItems);\n                            hasHide = !hasHide;\n                        }}\n                    &gt;\n                        {hasHide ? &#39;显示&#39; : &#39;不显示&#39;}端口号\n                    &lt;/Button&gt;\n                );\n            },\n        },\n        {\n            key: &#39;confProperty&#39;,\n            label: &#39;默认配置&#39;,\n            span: 24,\n            render: (form) =&gt; {\n                return &lt;Input.TextArea rows={15} placeholder=&quot;请输入默认配置&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &#39;不能为空。&#39;,\n                    },\n                ],\n            },\n        },\n    ];\n    defaultValue = {\n        serviceCode: &#39;9999&#39;,\n        serviceRemark: &#39;llll&#39;,\n    };\n    render() {\n        return (\n            &lt;ZpageWrapper pageHeader={{ show: false }}&gt;\n                &lt;Zform\n                    labelLayout=&quot;horizontal&quot;\n                    values={this.defaultValue}\n                    items={this.items}\n                    onSubmit={(values) =&gt; {\n                        return Promise.resolve().then((re) =&gt; {\n                            message.success(&#39;提交成功：&#39; + JSON.stringify(values));\n                        });\n                    }}\n                /&gt;\n            &lt;/ZpageWrapper&gt;\n        );\n    }\n}</code></pre>\n<div class="z-demo-box" data-render="SandboxDemo1" data-title=" 这是@renderMode:sandbox的代码块示例" data-description="" data-defaultexpanded="false"></div>\n\n<pre><code class="language-jsx">/**\n * @renderMode: sandbox\n * @componentName: SandboxDemo1\n * @title: 这是@renderMode:sandbox的代码块示例\n */\nimport React from &#39;react&#39;;\nimport { render } from &#39;react-dom&#39;;\nclass SandboxDemo1 extends React.PureComponent {\n    render() {\n        return &lt;div style={{ textAlign: &#39;center&#39; }}&gt;demo内容&lt;/div&gt;;\n    }\n}\nrender(&lt;SandboxDemo1 /&gt;, document.querySelector(&#39;#app&#39;));</code></pre>\n<h2 id="导入其他md">导入其他.md</h2>\n<p>当一个<code>.md</code>内容庞大时，可以把内容分成 n 个<code>.md</code>文件来存储，然后导入其他的<code>.md</code>文件；</p>\n<p>只需任意位置添加如下注释声明 @import :</p>\n<pre><code class="language-html">&lt;!-- @import: /src/components/ZliveForm/docs/demo.md --&gt;\n&lt;!-- @import: ./demo.md --&gt;</code></pre>\n<blockquote>\n<p>@import : 相对路径 | 从根目录开始的绝对路径。</p>\n</blockquote>\n<p>当其他的<code>.md</code>是某个代码块中的代码片段时，需要在 其他<code>.md</code>内容顶部声明 @fragment :</p>\n<pre><code class="language-html">&lt;!-- @fragment  --&gt;\n...以下是代码片段</code></pre>\n<pre><code class="language-js">// @horizonKey : fragmentDemo\n// @horizonTitle : 代码片段md\nconst a = 1;</code></pre>\n<pre><code class="language-js">// @horizonKey : fragmentDemo\n// @horizonTitle : 在代码块中导入md\n\n// @import: ./a.md\n\nconst b = a;</code></pre>\n<pre><code class="language-js">// @horizonKey : fragmentDemo\n// @horizonTitle : 合并后在文档中的代码\n\n// @import: ./a.md\nconst a = 1;\n\nconst b = a;</code></pre>\n<h2 id="代码块的语言样式">代码块的语言样式</h2>\n<p>支持的语言请查看 <a href="https://prismjs.com/#supported-languages">https://prismjs.com/#supported-languages</a></p>\n<p>请在<code>babel.config.js</code>如下位置添加支持语言样式,然后重启服务 npm run dev</p>\n<pre><code class="language-json">[\n    &quot;prismjs&quot;,\n    {\n        &quot;languages&quot;: [&quot;javascript&quot;, &quot;jsx&quot;, &quot;js&quot;, &quot;json&quot;, &quot;shell&quot;, &quot;yaml&quot;],\n        &quot;plugins&quot;: [&quot;line-numbers&quot;],\n        &quot;theme&quot;: &quot;tomorrow&quot;,\n        &quot;css&quot;: true\n    }\n]</code></pre>\n<h2 id="代码块横向组排">代码块横向组排</h2>\n<p>在代码块内加入@horizonKey 的注释，存在相同@horizonKey 值的代码块会横向排列一起，示例：</p>\n<pre><code class="language-js">// @horizonKey : reactDiff\n// @horizonTitle : 标题1\nfunction diffFunc() {}</code></pre>\n<pre><code class="language-js">// @horizonKey : reactDiff\n// @horizonTitle : 标题2\nconst diffFunc = () =&gt; {};</code></pre>\n<p>以上两个代码块的@horizonKey 都是 reactDiff，所以会排列在一起</p>\n'},duPH:function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ZcodeHighlight=void 0;var r=o(n("q8s6")),a=o(n("MAG/")),l=o(n("6iOh")),c=o(n("1rR9")),u=o(n("IPZl")),i=o(n("v6s4")),s=o(n("kRUu")),d=o(n("XcRB")),p=o(n("XYcM"));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}n("lYVS"),n("dDAE"),n("roMe"),n("YO7D"),n("77Mx"),n("vV76"),n("QgYW"),n("X7dv"),n("d8H9"),n("Vqov");var m=function(e){(0,l.default)(n,e);var t=f(n);function n(){return(0,r.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.mode;if(t){if(t&&"html"===n){var o=t.replace(/\<pre/g,'<pre class="line-numbers"');this.boxEl.innerHTML=o}p.default.highlightAllUnder(this.boxEl)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.mode,r=null;if(n&&"html"!==o){var a=i.default.createElement("code",{className:"language-".concat(this.props.lang)},this.props.children);r="block"===this.props.mode?i.default.createElement("pre",{className:"line-numbers"},a):a}return i.default.createElement("div",{ref:function(t){return e.boxEl=t}},r)}}]),n}(s.default);t.ZcodeHighlight=m,m.propTypes={mode:d.default.string,lang:d.default.string,children:d.default.string},m.defaultProps={lang:"html",mode:"block"};var h=m;t.default=h},oZFy:function(e,t,n){var o={"./AmdDocHOC/index.jsx":"xRbD","./AshowDemoHOC/index.jsx":"+GLa"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="oZFy"},v5v4:function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.ZpageWraperHOC=a,t.default=void 0;var r=o(n("6sYb"));function a(){return r.default}var l=a;t.default=l},vApo:function(e,t,n){"use strict";var o=n("K6wJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ZbgImage=void 0;var r=o(n("q8s6")),a=o(n("MAG/")),l=o(n("6iOh")),c=o(n("1rR9")),u=o(n("IPZl")),i=o(n("v6s4")),s=o(n("kRUu")),d=o(n("XcRB"));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}n("dLwK");var f=function(e){(0,l.default)(n,e);var t=p(n);function n(){return(0,r.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"render",value:function(){var e=this,t="z-bg-image-box z-flex-items-center ".concat(this.props.className?this.props.className:""," ").concat(this.props.url?"":"no-url");return i.default.createElement("div",{className:t,onClick:function(t){e.props.onClick&&e.props.onClick(t)},style:this.props.style},this.props.url?null:i.default.createElement("span",null,"无图片"),i.default.createElement("div",{className:"z-bg-image is-bg-".concat(this.props.position),style:{backgroundImage:"url(".concat(this.props.url,")")}}),this.props.children)}}]),n}(s.default);t.ZbgImage=f,f.propTypes={url:d.default.string,position:d.default.string,className:d.default.string,style:d.default.object,onClick:d.default.func},f.defaultProps={position:"center"};var m=f;t.default=m}}]);