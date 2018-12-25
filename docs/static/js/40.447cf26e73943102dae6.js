(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+fre":function(e,t,n){"use strict";n.r(t);var o=n("JsaA"),a=n("GPkD"),s=n.n(a),c=n("pv+U"),r=n.n(c),d=n("aTAs"),p=n.n(d),l=n("k7W2"),i=n.n(l),u=n("zqcf"),m=n.n(u),g=n("rdAL"),h=n.n(g);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function a(){return s()(this,a),p()(this,i()(a).apply(this,arguments))}return m()(a,n),r()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{ref:function(t){e.boxEl=t}},h.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(h.a.Component)}}},R6I8:function(e,t,n){"use strict";n.r(t);var o=n("ebhq"),a=n("lgEO"),s=n.n(a),c=o.a.AmdDocHOC;t.default=c(s.a)},ebhq:function(e,t,n){"use strict";n("Vsw1"),n("yDl1");var o=n("6h6h"),a=n.n(o),s=(n("/2a5"),n("P4eO"),n("jjl2")),c={},r=[];s.keys().forEach(function(e){var t=void 0;try{t=s(e).default}catch(t){throw Error("".concat(e,":").concat(t))}if(void 0===t||"object"!==a()(t))throw Error("".concat(e,":内没有 export default 或者export default格式有误 "));if("function"!=typeof t.HOC)throw Error("".concat(e,":HOC有误"));var n=t.name;if("string"!=typeof n)throw Error("".concat(e,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(e,":name属性请以A开头HOC结尾"));if(n=n.trim(),r.includes(n))throw Error("".concat(e,":").concat(n,"此HOC名称已被使用"));r.push(n),c[n]=t.HOC}),t.a=c},jjl2:function(e,t,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(e){var t=s(e);return n(t)}function s(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id="jjl2"},lgEO:function(e,t){e.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-">代码书写约定规范</h1>\n<p>1、scss : className 的单词之间以“-”连接,如<code>z-panel-body</code>; 相同的样式值多次使用到请使用变量（scss 变量写法如：<code>$--border-color:#f0fef2</code>）;</p>\n<p>2、js : 变量名和普通函数名如果是多个单词,请使用骆驼峰形式如<code>myName</code>，构造函数名和 class 类名,请以首字母大写、多个单词以骆驼峰形式，如<code>MyComponent</code>;</p>\n<p>3、js : 声明函数参数超过 3 个时，请使用对象参数形式，如 <code>showMyDreams(show,isBox,byElement)</code>,<code>showMyDreams({show,isBox,byElement,allData})</code>;</p>\n<p>4、react : 禁用组件生命周期函数：<code>componentWillMount</code>、<code>componentWillReceiveProps</code>、<code>componentWillUpdate</code>,因为这些可能在以后 react 中被废弃的函数;</p>\n<p>5、react : ref 属性禁用字符串方式, 如禁用<code>&lt;div ref=&quot;myBox&quot;&gt;&lt;/div&gt;</code>，推荐用法<code>&lt;div ref={(el)=&gt;{this.myBoxEl=el;}}&gt;&lt;/div&gt;</code>;</p>\n<p>6、react : 组件内跟<code>setState</code>无关的属性，请不要写进 <code>state</code>中。</p>\n<p>7、react : v16.7.0之前的react组件写法：</p>\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport PropTypes from &quot;prop-types&quot;;\n\nclass MyComponent extends React.Component {\n    // 定义props的类型(如果有props规定必须要写)\n    static propTypes = {\n        className: PropTypes.string,\n        children: PropTypes.any,\n    };\n    // props的默认值（如果需要）\n    static defaultProps = {\n        className: &quot;z-body&quot;,\n    };\n    // 定义初始state\n    state = {\n        listData: [],\n    };\n    // 安装组件（插入树中）后\n    componentDidMount(){\n\n    },\n    // props更新或state更新后\n    componentDidUpdate(prevProps,prevState){\n\n    },\n    // 卸载和销毁组件之前\n    componentWillUnmount(){\n\n    }\n    render() {\n        const { className, children } = this.props;\n        return (\n            &lt;div className={className}&gt;\n                {this.state.listData.map((item) =&gt; {\n                    return &lt;p&gt;{item.name}&lt;/p&gt;;\n                })}\n                {children}\n            &lt;/div&gt;\n        );\n    }\n}</code></pre>\n<p class="z-margin-bottom-30 "></p>\n\n<h1 id="zerod-admin-webpack-">zerod-admin-webpack 开发约定规范</h1>\n<p>以下看到的<code>@</code>符号，是开发目录 <code>src</code> 的别名（绝对路径）</p>\n<div class="z-doc-titles"></div>\n\n<h2 id="-api">后台接口 @/Api</h2>\n<p>0、后台接口请求响应体应该这样的 ： { code:状态码,data:数据 ,msg:&quot;提示&quot; }</p>\n<p>1、<code>@/App.api.js</code> 会自动加载 <code>@/Api/</code>下的<code>.api.js</code></p>\n<p>2、对应后台 <code>swagger</code> 接口文档，如login分类的接口，就创建一个<code>login.api.js</code>，在这个js中统一写login相关的接口函数</p>\n<p>3、规定写法：</p>\n<pre><code class="language-jsx">// 例如login.api.js\nimport httpAjax from &quot;@/zTool/httpAjax&quot;;\nexport default {\n    name: &quot;login&quot;, //空间命名，用于支持多个.api.js中的apis出现相同的函数命名\n    apis: {\n        //获取列表接口\n        getList(query) {\n            return httpAjax(&quot;post&quot;, &quot;接口路径&quot;, query);\n        },\n        //获取验证码\n        getCode(query) {\n            return httpAjax(&quot;get&quot;, &quot;接口路径&quot;, query);\n        },\n    },\n};</code></pre>\n<p>4、例如在<code>Home/index.jsx</code>中使用接口</p>\n<pre><code class="language-jsx">// 导入@/App.api.js即可\nimport api from &quot;@/App.api.js&quot;;\n\napi.login.getList(查询参数).then(re=&gt;{\n\n}).catch(re=&gt;{\n\n}).finally(()=&gt;{\n\n});</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-">静态资源</h2>\n<p>1、衡量小文件可进行打包处理的，统一放 <code>@/assets</code> 目录，如小图片在 <code>@/assets/images</code></p>\n<p>2、较大文件，不宜打包处理的，统一放 <code>static</code>目录，但不能 <code>import png from &#39;../static/images/my.png&#39;</code> 的方式引入， 以<code>&lt;img src=&quot;../../static/images/my.png&quot;&gt;</code>等方式使用</p>\n<div class="z-doc-titles"></div>\n\n<h2 id="-components">通用组件 @/components</h2>\n<p>1、组件命名：以大写<code>A</code>开头，驼峰命名法</p>\n<p>2、一个大组件就是一个文件夹，文件夹命名与组件命名相同，里面有对应的 <code>index.jsx（必需文件）</code>和 <code>style.scss</code>,<br>如 <code>AtabBar</code> 组件。</p>\n<pre><code class="language-jsx">//例子：AtabBar 的 index.jsx\n//使用模块化的css\nimport cssClass from &quot;./style.scss&quot;;\n\nimport React from &quot;react&quot;;\nclass AtabBar extends React.Component {\n    render(){\n        return &lt;div&gt;&lt;/div&gt;\n    }\n}\nexport default {\n    name: &quot;AtabBar&quot;, //组件命名(必需)\n    component: AtabBar, //必需\n};</code></pre>\n<p>3、<code>@/components</code> 下的所有 <code>index.jsx</code>会在 <code>@/components/load-components.js</code>自动加载，使用的时候如</p>\n<pre><code class="language-jsx">//例如，在路由组件中使用通用组件只需\nimport components from &quot;@/components/load-components&quot;;\n//然后必须这样：需要什么组件，将组件命名const出来\nconst { AtabBar, ApageTitle } = components;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="hoc-hoc">HOC 组件 @/HOC</h2>\n<p>1、组件命名：以大写<code>A</code>开头<code>HOC</code>结尾</p>\n<p>2、一个大组件就是一个文件夹，文件夹命名与组件命名相同，里面有对应的 <code>index.jsx（必需文件）</code>和 <code>style.scss</code><br>如 <code>AshowDemoHOC</code> 组件。</p>\n<pre><code class="language-jsx">//例子：AshowDemoHOC 的 index.jsx\n//使用模块化的css\nimport cssClass from &quot;./style.scss&quot;;\n\nimport React from &quot;react&quot;;\nfunction AshowDemoHOC(Comp) {\n    return class Common extends React.Component {\n        render() {\n            return &lt;Comp /&gt;;\n        }\n    };\n}\n\nexport default {\n    name: &quot;AshowDemoHOC&quot;, //组件命名(必需)\n    component: AshowDemoHOC, //必需\n};</code></pre>\n<p>3、<code>@/HOC</code> 下的所有 <code>index.jsx</code>会在 <code>@/HOC/load-HOC.js</code>自动加载，使用的时候如</p>\n<pre><code class="language-jsx">//例如，在路由组件中使用HOC组件只需\nimport HOC from &quot;@/components/load-HOC&quot;;\n//然后必须这样：需要什么组件，将组件命名解构出来\nconst { AshowDemoHOC } = HOC;\nconst NewComponent = AshowDemoHOC(config);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-views">路由组件 @/views</h2>\n<p>0、一个路由组件就是一个文件夹，文件夹命名：以大写字母开头，驼峰命名法</p>\n<p>1、<code>@/views</code>下的目录结构按照路由层级结构划分</p>\n<p>2、每个路由组件有对应的 <code>index.jsx、style.scss</code> 和<code>A.route.js(路由配置)</code></p>\n<p>3、路由组件一般使用异步加载，使用 <code>@/lazyLoad/</code>懒加载：</p>\n<pre><code class="language-jsx">//例如：Home页面有 index.jsx、style.scss和Home.route.js\n// A.route.js写法：\nimport lazyLoad from &quot;@/lazyLoad/lazyLoad&quot;;\nconst Home = lazyLoad(()=&gt;import(&quot;./&quot;));\nexport default [\n    {\n        path: &quot;/Home&quot;,\n        component: Home,\n    },\n];</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-store">状态管理仓库 @/store</h2>\n<p>状态管理的工具使用的是<code>redux</code> + <code>react-redux</code></p>\n<p><code>@/store</code>主要分为三个部分：<code>reducers</code>、<code>actions</code>、<code>mapStateToProps</code></p>\n<p><code>@/store/index.js</code>中创建了 store，绝大多数不需要修改此文件</p>\n<p>如果要设置 store 中某些状态的初始值，请在<code>@/store/initialState.js</code>配置</p>\n<h3 id="reducers">reducers</h3>\n<p>绝大多数不需要修改<code>@/store/reducers/index.js</code>，它自动加载了<code>@/store/reducers</code>下所有以<code>.mutation.js</code>后缀的文件</p>\n<p><code>.mutation.js</code>内书写的格式如下：</p>\n<pre><code class="language-js">// 变异状态 例子：\nexport default {\n    //命名空间，用于区分 多个.mutation.js里mutations中存在相同函数名\n    name: &quot;evaluate&quot;,\n    //状态变异的函数结构:\n    mutations: {\n        // 如果 actions/index.js中 type 为&quot;evaluate.changeInput1&quot;的action函数被触发，就会触发这里的changeInput1函数去变异相应的状态\n        changeInput1(state, action) {\n            return {\n                ...state,\n                currentValue: action.payload.value,\n            };\n        },\n        // 同理\n        changeInput2(state, action) {\n            return {\n                ...state,\n                maxValue: action.payload.value,\n            };\n        },\n    },\n};</code></pre>\n<h3 id="actions">actions</h3>\n<p>actions 的作用是，其他地方或者其他组件内部想要改变 store 仓库里的什么状态</p>\n<p><code>@/store/actions/index.js</code>内书写的格式如下：</p>\n<pre><code class="language-js">// action函数之一\nexport const numberChange1 = (value) =&gt; ({\n    type: &quot;evaluate.changeInput1&quot;, //要触发的是 命名空间为evaluate的 `.mutation.js`中的 `changeInput1`函数\n    payload: {\n        value,\n    },\n});\n// action函数之一\nexport const numberChange2 = (value) =&gt; ({\n    type: &quot;evaluate.changeInput2&quot;, // 同理\n    payload: {\n        value,\n    },\n});</code></pre>\n<h3 id="mapstatetoprops">mapStateToProps</h3>\n<p>mapStateToProps 的作用是，其他地方或者其他组件内部想要取 store 仓库中的什么状态</p>\n<p><code>@/store/mapStateToProps/index.js</code>内书写的格式如下：</p>\n<pre><code class="language-js">//mapStateToProps函数之一\nexport const getInputValueState1 = function(state) {\n    // 这里取得 store仓库中的currentValue状态 给某个组件的props.value\n    return {\n        value: state.currentValue,\n    };\n};\n//mapStateToProps函数之一\nexport const getInputValueState2 = function(state) {\n    // 这里取得 store仓库中的maxValue状态 给某个组件的props.value\n    return {\n        value: state.maxValue,\n    };\n};</code></pre>\n<h3 id="react-redux-connect">react-redux 的 connect</h3>\n<p>当已经写好了<code>.mutation.js</code>、<code>actions</code>、<code>mapStateToProps</code>，这时需要<code>connect</code>将<code>mapStateToProps</code>和<code>actons</code>与<code>组件</code>进行连接</p>\n<p>假如有 <code>Input</code> 这样的组件,它有 value 和 onChange 两个 props，它与 <code>mapStateToProps</code>和<code>actions</code>的连接如下：</p>\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Input } from &quot;antd&quot;;\nimport { connect } from &quot;react-redux&quot;;\nimport { numberChange1 } from &quot;@/store/actions&quot;;\nimport { getInputValueState1 } from &quot;@/store/mapStateToProps&quot;;\n\nconst NewInput = connect(\n    getInputValueState1,\n    {\n        onChange: numberChange1,\n    },\n)(Input);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="react-">react 上下文 使用</h2>\n<p>1、<code>@/App.context.js</code> 会自动加载 <code>@/context/</code>下的以大写字母开头且以<code>Context</code>结尾的<code>.js</code></p>\n<p>2、例：<code>AppRootContext.js</code></p>\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nconst defaultValue = {};\nconst context = React.createContext(defaultValue); //创建上下文\nconst { Provider, Consumer } = context;\n//提供启用上下文的方法\nconst setConsumer = (ChildComponent) =&gt; {\n    return class ContextConsumer extends React.Component {\n        render() {\n            return &lt;Consumer&gt;{(value) =&gt; &lt;ChildComponent {...this.props} {...value} /&gt;}&lt;/Consumer&gt;;\n        }\n    };\n};\nexport default {\n    name: &quot;AppRootContext&quot;, //上下文名称（必需）,首字母要大写,以Context结尾\n    loadingText: &quot;加载中...&quot;, //一些固定值\n    Provider,\n    Consumer,\n    setConsumer,\n};</code></pre>\n<p>3、使用上下文 例子：</p>\n<p>上文</p>\n<pre><code class="language-jsx">//引入上下文\nimport contexts from &quot;@/App.context.js&quot;;\n//将上下文的名称 const 出来\nconst { AppRootContext } = contexts;\n\n//在 App.jsx中通过 AppRootContext.Provider 组件更改 上文value\n&lt;AppRootContext.Provider\n    value={{\n        updateLoading: this.methods.updateLoading,\n        timeoutHideLoading: this.methods.timeoutHideLoading,\n        updateDialog: this.methods.updateDialog,\n        updatePicker: this.methods.updatePicker,\n        setPageStorage: this.methods.setPageStorage,\n        getPageStorage: this.methods.getPageStorage,\n        clearPageStorage: this.methods.clearPageStorage,\n    }}\n&gt;\n    {/*这里包含下文的组件*/}\n&lt;/AppRootContext.Provider&gt;;</code></pre>\n<p>下文</p>\n<pre><code class="language-jsx">//引入上下文\nimport contexts from &quot;@/App.context.js&quot;;\n//将上下文的名称 const 出来\nconst { AppRootContext } = contexts;\n\n//在 Report/index.jsx中通过 AppRootContext.setConsumer(Report) 获取上文的value\n//这时在 Report组件中就可以 通过props使用这些东西\n\nthis.props.updateLoading();\nthis.props.timeoutHideLoading();\nthis.props.updateDialog();</code></pre>\n'},pnNO:function(e,t,n){"use strict";n.r(t);var o=n("MaNN"),a=n("C6MB"),s=(n("yDl1"),n("PwP1")),c=(n("Vsw1"),n("4Loy"),n("U7Fr")),r=n.n(c),d=n("/sSO"),p=(n("P4eO"),n("GPkD")),l=n.n(p),i=n("pv+U"),u=n.n(i),m=n("aTAs"),g=n.n(m),h=n("k7W2"),v=n.n(h),f=n("zqcf"),x=n.n(f),q=n("kB6t"),C=(n("YTQH"),n("rdAL")),y=n.n(C),j=n("FFPy"),E=n.n(j),A=(n("T9cD"),n("tW/l")),w=n.n(A);var b=Object(q.a)(),S=!1;t.default={name:"AmdDocHOC",HOC:function(e,t){e='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+e;var n=function(n){function o(){var e,t;l()(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=g()(this,(e=v()(o)).call.apply(e,[this].concat(a)))).renderEls=[],t.state={navs:[],closeModaled:!0},t.setNavs=function(){var e=[],n=t.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){e.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-t.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),e.length&&t.setState({navs:e},function(){if(t.bindScrollEvent(),t.navEl&&t.navContentEl){var e=d.g.BuildScroll;t.navScroollInstance=new e(t.navEl,{scrollbars:"custom"}),d.g.listenDivSizeChange(t.navEl,t.navScroollInstance.refresh),d.g.listenDivSizeChange(t.navContentEl,t.navScroollInstance.refresh)}})},t.scrollEnd=function(){var e=-t.scrollInstance.scroll.y;t.state.navs.forEach(function(e){e.active=!1});for(var n=t.state.navs.length,o=0;o<n;o++){var a=t.state.navs[o];if(e>=a.el.offsetTop-120){if(!(o<n-1)){a.active=!0;break}var s=t.state.navs[o+1];if(s&&e<s.el.offsetTop-120){a.active=!0;break}}}t.setState({navs:r()(t.state.navs)})},t.bindScrollEvent=function(){t.scrollInstance.scroll.on("scrollEnd",t.scrollEnd)},t.navScrollTo=function(e){t.scrollInstance.scroll.scrollTo(0,-(e.el.offsetTop-24),200)},t}return x()(o,n),u()(o,[{key:"componentWillUnmount",value:function(){S=!0,this.renderEls.forEach(function(e){E.a.unmountComponentAtNode(e)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var o=e.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=e.attributes[n].nodeValue;t[o.match(/^data-(\w+)/)[1]]=a}}return t}(n);if(t&&"function"==typeof t[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var s=t[o.render]();e.renderEls.push(n),E.a.render(s,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var s=document.createElement("div");s.className="z-demo-code";var c=document.createElement("img");c.addEventListener("click",function(){c.src=c.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",s.style.height=c.open?"0px":"auto",c.open=!c.open},!1),c.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var r=document.createElement("span");r.innerText=o.title?o.title:"",t.appendChild(r),a&&t.appendChild(c),e.appendChild(t),a&&s.appendChild(a),e.appendChild(s),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){S=!1,"function"==typeof t.target._render&&e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:t.target._render(),scroll:t.target._scroll,onTransitionend:function(t){S||e.setState({closeModaled:!t})}})},10)},!1),this.mdEl.addEventListener("click",function(t){if("string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";S=!1,e.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(t){S||e.setState({closeModaled:!t})}}),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof t.target.className&&t.target.className.includes("z-history-href")){var n=t.target.dataset.path;"string"==typeof n&&e.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){e.setNavs()},100)}},{key:"render",value:function(){var t=this;return y.a.createElement(a.b.Template,null,y.a.createElement(b,{pageHeader:{show:!1},hasBodyPadding:!1},y.a.createElement("div",{className:"z-panel ".concat(w.a["z-md-doc"]),ref:function(e){return t.mdEl=e}},y.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},y.a.createElement(s.a,{mode:"html"},e)))),this.state.navs.length&&this.state.closeModaled?E.a.createPortal(y.a.createElement("div",{className:w.a["z-nav-box"],ref:function(e){return t.navEl=e}},y.a.createElement("div",{ref:function(e){return t.navContentEl=e}},y.a.createElement("section",null,this.state.navs.map(function(e,n){return y.a.createElement("div",{title:e.name,className:"".concat(w.a["z-nav"]," ").concat(e.active?w.a.active:""),key:n,onClick:function(){t.navScrollTo(e)}},e.name)})))),document.body):null)}}]),o}(y.a.Component);return o.a.setConsumer(n)}}}}]);