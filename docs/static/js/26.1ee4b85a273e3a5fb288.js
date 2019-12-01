(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "cGPK":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zmainhoc\">主页布局：ZmainHOC</h1>\n<p><code>ZmainHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个主页布局结构(内置固定一种二级路由布局)的<code>组件</code>(我们这里称它为<code>main</code>组件)，凡是二级路由的子组件都可以使用<span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">上下文/ZerodMainContext</span></p>\n<p>如果想<code>自定义布局结构</code>，又想能使用<span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">上下文/ZerodMainContext</span>，ZmainHOC 需要的参数就不是 pageConfig 参数配置 ，而是自己写的 Main 组件：<code>ZmainHOC(MainComponent,componentDidMount)</code></p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"这个demo取zerod-design文档主页展示，所有代码如下\"></div>\n\n<pre><code class=\"language-jsx\">// react\nimport React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport PropTypes from &quot;prop-types&quot;;\n// zerod\nimport { Zlayout, ZmainHOC } from &quot;zerod&quot;;\nimport GlobalLoading from &quot;@/lazyLoad/Loading.jsx&quot;;\n// 路由组件\nimport mainRoutes from &quot;./load-child-routes.js&quot;;\n// ant ui\nimport { Icon, Dropdown, Menu } from &quot;antd&quot;;\n// img\nimport logo from &quot;@/assets/images/logo.png&quot;;\nimport flower from &quot;@/assets/images/flower.jpg&quot;;\n// 样式类\nimport cssClass from &quot;./style.scss&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\n\nconst myMenu = [\n    {\n        permUrl: &quot;start-doc&quot;,\n        permName: &quot;开始&quot;,\n    },\n];\n\nlet logoMethods = null;\nconst pageConfig = {\n    // 左侧边展开时的宽度\n    leftExpandWidth: 280,\n    // 主页的主题 light | dark\n    theme: &quot;dark&quot;,\n    // logt区域\n    logo: {\n        title: &quot;&quot;,\n        render: () =&gt; {\n            return &lt;Logo getLogoMethods={(methods) =&gt; (logoMethods = methods)} /&gt;;\n        },\n    },\n    // 路由配置信息\n    mainRoutes: mainRoutes,\n    // 侧边导航设置\n    sideMenu: {\n        //是否打开所有的submenu\n        openAllSubmenu: true,\n        //追加在上面的menu\n        topOtherMenu: myMenu,\n        //追加在下面的menu\n        bottomOtherMenu: [],\n        //\n        mapKeys: { iconClass: &quot;iconClass&quot;, path: &quot;permUrl&quot;, name: &quot;permName&quot;, children: &quot;children&quot; },\n    },\n    // 顶部栏左边内容的渲染钩子\n    headerLeftRender: (tool) =&gt; {\n        return &lt;img className=&quot;z-margin-left-20&quot; src={flower} height=&quot;60&quot; /&gt;;\n    },\n    // 顶部栏右边内容的渲染钩子\n    // headerRightRender: (tool) =&gt; {\n    //     return ;\n    // },\n    // 侧边栏折叠按钮触发后，过渡动画之前\n    beforeToggleCollapse: (collapsed) =&gt; {\n        logoMethods &amp;&amp; logoMethods.toggleTitle(collapsed);\n    },\n    // 侧边栏折叠按钮触发后，过渡动画之后\n    // afterToggleCollapse: (collapsed) =&gt; {},\n    // 组件加载完成的钩子\n    componentDidMount: (callback) =&gt; {\n        callback();\n        //// 获取登录信息\n        // api.login.getUserInfo().then((re) =&gt; {\n        //     if (re.data) {\n        //         console.log(re.data)\n        //         //已经登录了保存登录信息数据，传入导航数据\n        //         callback(re.data,[]);\n        //         // callback(re.data, re.data.userInfo.permTreeVOS);\n        //     } else {\n        //         //如果没有登录回到登录页\n        //         window.location.assign(&quot;/login&quot;);\n        //     }\n        // });\n    },\n};\nexport default ZmainHOC(pageConfig);\n\nclass Logo extends ZpureComponent {\n    static propTypes = {\n        getLogoMethods: PropTypes.func,\n    };\n    state = {\n        showTitle: true,\n    };\n    toggleTitle = (show) =&gt; {\n        this.setState({\n            showTitle: show,\n        });\n    };\n    componentDidMount() {\n        this.props.getLogoMethods &amp;&amp;\n            this.props.getLogoMethods({\n                toggleTitle: this.toggleTitle,\n            });\n    }\n    render() {\n        return (\n            &lt;div className=&quot;z-flex-items-v-center&quot; style={{ height: &quot;100%&quot; }}&gt;\n                &lt;img src={logo} alt=&quot;&quot; width=&quot;32&quot; className=&quot;z-margin-left-24&quot; /&gt;\n                {this.state.showTitle ? (\n                    &lt;span className=&quot;z-margin-left-12 z-font-size-20&quot; style={{ fontWeight: 600 }}&gt;\n                        Zero-design\n                    &lt;/span&gt;\n                ) : null}\n            &lt;/div&gt;\n        );\n    }\n}</code></pre>\n<p>2、右边顶部按钮</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"需要在右上角添加更多按钮时，可使用Zlayout.ZheaderBtn\"></div>\n\n<pre><code class=\"language-jsx\">const pageConfig = {\n    // 左侧边展开时的宽度\n    leftExpandWidth: 280,\n    // 主页的主题 light | dark\n    theme: &quot;dark&quot;,\n    // 顶部栏左边内容的渲染钩子\n    headerLeftRender: (tool) =&gt; {\n        return &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;左边&lt;/Zlayout.ZheaderBtn&gt;;\n    },\n    // 顶部栏右边内容的渲染钩子\n    headerRightRender: (tool) =&gt; {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;按钮1&lt;/Zlayout.ZheaderBtn&gt;\n                &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;按钮2&lt;/Zlayout.ZheaderBtn&gt;\n                &lt;UserDropdown /&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    },\n    // 组件加载完成的钩子\n    componentDidMount: (callback) =&gt; {\n        callback();\n    },\n};\n\nclass UserDropdown extends ZpureComponent {\n    methods = {\n        //用户dropdown按钮点击触发\n        onMenuClick: (item) =&gt; {\n            // if (item.key === &quot;/logout&quot;) {\n            //     window.location.assign(item.key);\n            // } else {\n            // }\n        },\n    };\n    dropdownMenu = (\n        &lt;Menu\n            className={cssClass[&quot;z-main-user-menu&quot;]}\n            selectedKeys={[]}\n            onClick={this.methods.onMenuClick &amp;&amp; this.methods.onMenuClick}\n        &gt;\n            &lt;Menu.Item disabled&gt;\n                &lt;Icon type=&quot;user&quot; /&gt;\n                个人中心\n            &lt;/Menu.Item&gt;\n            &lt;Menu.Item disabled&gt;\n                &lt;Icon type=&quot;setting&quot; /&gt;\n                设置\n            &lt;/Menu.Item&gt;\n            &lt;Menu.Divider /&gt;\n            &lt;Menu.Item key=&quot;/logout&quot;&gt;\n                &lt;Icon type=&quot;logout&quot; /&gt;\n                退出登录\n            &lt;/Menu.Item&gt;\n        &lt;/Menu&gt;\n    );\n    render() {\n        return (\n            &lt;Dropdown overlay={this.dropdownMenu} trigger={[&quot;click&quot;]} placement=&quot;bottomRight&quot;&gt;\n                &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;\n                    &lt;span className=&quot;z-icon-circle z-margin-right-8&quot;&gt;\n                        &lt;Icon type=&quot;user&quot; /&gt;\n                    &lt;/span&gt;\n                    登录用户\n                &lt;/Zlayout.ZheaderBtn&gt;\n            &lt;/Dropdown&gt;\n        );\n    }\n}\nexport default ZmainHOC(pageConfig);</code></pre>\n<p>3、自定义布局</p>\n<div class=\"z-demo-box\" data-render=\"demo3\" data-title=\"ZmainHOC(MainComponent,componentDidMount)\"></div>\n\n<pre><code class=\"language-jsx\">import logo from &quot;@/assets/images/logo.png&quot;;\nimport mainRoutes from &quot;@/Main/load-child-routes.js&quot;;\nclass Logo extends React.PureComponent {\n    static propTypes = {\n        getLogoMethods: PropTypes.func,\n    };\n    state = {\n        showTitle: true,\n    };\n    toggleTitle = (show) =&gt; {\n        this.setState({\n            showTitle: show,\n        });\n    };\n    componentDidMount() {\n        this.props.getLogoMethods &amp;&amp;\n            this.props.getLogoMethods({\n                toggleTitle: this.toggleTitle,\n            });\n    }\n    render() {\n        return (\n            &lt;div className=&quot;z-flex-items-v-center&quot; style={{ height: &quot;100%&quot; }}&gt;\n                &lt;img src={logo} alt=&quot;&quot; width=&quot;32&quot; className=&quot;z-margin-left-24&quot; /&gt;\n                {this.state.showTitle ? (\n                    &lt;span className=&quot;z-margin-left-12 z-font-size-20&quot; style={{ fontWeight: 600, color: &quot;white&quot; }}&gt;\n                        Zero-design\n                    &lt;/span&gt;\n                ) : null}\n            &lt;/div&gt;\n        );\n    }\n}\nclass Main extends React.Component {\n    componentDidMount() {}\n    render() {\n        //自定义主页布局，经过ZmainHOC包装的组件，会this.props.getSideMenuTemplate和this.props.getMaimRouteTemplate两个方法\n        return (\n            &lt;Zlayout&gt;\n                &lt;Zlayout.Zheader style={{ backgroundColor: &quot;#0A1131&quot; }}&gt;\n                    &lt;Logo /&gt;\n                &lt;/Zlayout.Zheader&gt;\n                &lt;Zlayout.Zbody scroll={false}&gt;\n                    &lt;Zlayout flexRow&gt;\n                        &lt;Zlayout width={&quot;320px&quot;}&gt;\n                            {this.props.getSideMenuTemplate({\n                                theme: &quot;dark&quot;,\n                                isCollapse: false,\n                                openAllSubmenu: true,\n                            })}\n                        &lt;/Zlayout&gt;\n                        &lt;Zlayout&gt;{this.props.getMaimRouteTemplate(&quot;my_main_body&quot;)}&lt;/Zlayout&gt;\n                    &lt;/Zlayout&gt;\n                &lt;/Zlayout.Zbody&gt;\n            &lt;/Zlayout&gt;\n        );\n    }\n}\nconst NewMain = ZmainHOC(Main, (callback) =&gt; {\n    //同pageConfig的componentDidMount函数\n    callback(\n        //保存的用户信息\n        {},\n        //侧边导航数据\n        [\n            {\n                permUrl: &quot;start-doc&quot;,\n                permName: &quot;开始&quot;,\n            },\n            {\n                permUrl: &quot;standard-doc&quot;,\n                permName: &quot;开发约定规范&quot;,\n            },\n            {\n                permUrl: &quot;mobile-doc&quot;,\n                permName: &quot;移动端开发&quot;,\n            },\n            {\n                permUrl: &quot;zTool-doc&quot;,\n                permName: &quot;工具函数：zTool&quot;,\n            },\n            {\n                permUrl: &quot;style-doc&quot;,\n                permName: &quot;通用样式&quot;,\n            },\n        ],\n        //mapKeys\n        { iconClass: &quot;permIconUrl&quot;, path: &quot;permUrl&quot;, name: &quot;permName&quot;, children: &quot;children&quot; },\n        //路由配置数据\n        mainRoutes,\n    );\n});</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig\">pageConfig</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>noticeType</td>\n            <td>用于配置操作提示通告的方式</td>\n            <td>notification | message</td>\n            <td>message</td>\n        </tr>\n        <tr>\n            <td>leftExpandWidth</td>\n            <td>左侧栏展开时的宽度</td>\n            <td>string | number</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>theme</td>\n            <td>主题</td>\n            <td>light | dark | mazarine</td>\n            <td>light</td>\n        </tr>\n        <tr>\n            <td>logo</td>\n            <td>logo区域配置,请看下面的pageConfig.logo</td>\n            <td>object</td>\n            <td>'{title:\"\",render:()=><span>logo</span>}'</td>\n        </tr>\n        <tr>\n            <td>mainRoutes</td>\n            <td>\n                <p>路由配置,如[{path: \"/start-doc\",component: 组件,exact:是否精准匹配默认true, redirect:false,to:\"/redirect-path\"}];  当重定向属性redirect为true时,component无效，to属性有效。</p>\n                <p>mainRoutes还可以是函数，return路由配置，componentDidMount钩子的callback回调之后执行</p>\n                <p>注：默认只有侧导航menuData里存在的path才会去生成路由，如需取消这种默认，让mainRoutes为函数return路由配置即可</p>\n            </td>\n            <td>array[object] | function(menuData,tool){ return array[object]}</td>\n            <td>[]</td>\n        </tr>\n        <!-- <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> globalLoading</td>\n            <td>加载前要显示的一个全局loading</td>\n            <td>ReactNode | function(){return ;}</td>\n            <td>--</td>\n        </tr> -->\n        <tr>\n            <td>sideMenu</td>\n            <td>侧边导航配置,请看下面的pageConfig.sideMenu</td>\n            <td>object</td>\n            <td>{}</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> headerLeftRender</td>\n            <td>右侧顶部栏左边内容的渲染钩子,参数有main组件的实例对象</td>\n            <td>function(tool){return ;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> headerRightRender</td>\n            <td>右侧顶部栏右边内容的渲染钩子,参数有main组件的实例对象</td>\n            <td>function(tool){return ;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>beforeToggleCollapse</td>\n            <td>侧边栏折叠按钮触发后，过渡动画之前回调,参数有折叠状态collapsed</td>\n            <td>function(collapsed,tool){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>afterToggleCollapse</td>\n            <td>侧边栏折叠按钮触发后，过渡动画之后回调,参数有折叠状态collapsed</td>\n            <td>function(collapsed,tool){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>componentDidMount</td>\n            <td><p>main组件加载完的钩子,考虑到可能走异步,提供一个一定要调用的callback</p>\n            <p>callback(userInfo = {}, menuData = []),userInfo是用户登录后要储存的一个对象，menuData是侧边导航的数据(map结构由pageConfig.sideMenu.mapKeys对应)。menuData除了pageConfig.sideMenu.mapKeys对应的属性外，还可以选择添加newWindow:true(点击这个导航打开新的浏览器标签页)</p>\n            <p>$router:是一个对象，提供history和location属性</p></td>\n            <td>function(callback,$router,tool){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig-logo\">pageConfig.logo</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>title</td>\n            <td>标题</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> render</td>\n            <td>渲染logo的钩子</td>\n            <td>function(){return ;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig-sidemenu\">pageConfig.sideMenu</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>collapseBtnRender</td>\n            <td>折叠按钮的渲染函数 (collapsed)=>Icon</td>\n            <td>(collapsed)=>Icon</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onSelect</td>\n            <td>点击选中菜单项触发的函数，如果函数内return false 则不会跳转menuData中对应项的path路径</td>\n            <td>function({ item, key, selectedKeys }){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>openAllSubmenu</td>\n            <td>侧边导航存在二级导航时，是否打开所有的一级导航</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><del>topOtherMenu</del></td>\n            <td><del>追加在上面的导航配置(map结构由pageConfig.sideMenu.mapKeys对应)，中间的导航配置是由pageConfig.componentDidMount中的callback函数注入进去的</del>；其实不需要这属性，直接处理componentDidMount的callback的menuData数据即可</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><del>bottomOtherMenu</del></td>\n            <td><del>追加在下面的导航配置(map结构由pageConfig.sideMenu.mapKeys对应)</del>；其实不需要这属性，直接处理componentDidMount的callback的menuData数据即可</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>mapKeys</td>\n            <td>导航配置的map对象key的对应，默认{ iconClass: \"iconClass\", path: \"path\", name: \"name\", children: \"children\" }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>noParentPath</td>\n            <td>如为true,则菜单导航的path不会与父节点的path拼接</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">自定义主页布局</h2>\n<p>如果想自定义布局结构，又想能使用<span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">上下文/ZerodMainContext</span>，ZmainHOC 需要的参数就不是 pageConfig 参数配置 ，而是自己写的 Main 组件：<code>ZmainHOC(MainComponent,componentDidMount)</code>,其中 componentDidMount 参数同 pageConfig 的 componentDidMount</p>\n<pre><code class=\"language-jsx\">//componentDidMount的callback调用需多些参数\nconst NewMain= ZmainHOC(MainComponent, (callback) =&gt; {\n    //callback必须调用，可在异步之后调用\n    callback(\n        //保存的用户信息\n        {},\n        //侧边导航数据\n        [\n            {\n                permUrl: &quot;start-doc&quot;,\n                permName: &quot;开始&quot;,\n            },\n        ],\n        //mapKeys  同 pageConfig.sideMenu 的mapKeys\n        { iconClass: &quot;permIconUrl&quot;, path: &quot;permUrl&quot;, name: &quot;permName&quot;, children: &quot;children&quot; },\n        //路由配置数据,同pageConfig的mainRoutes\n        mainRoutes,\n    );\n});</code></pre>\n<p>这时<code>MainComponent</code>组件的 props 会添加<code>getSideMenuTemplate</code>和<code>getMaimRouteTemplate</code>两个方法，可在<code>MainComponent</code>组件的 render 函数中使用</p>\n<pre><code class=\"language-jsx\">//得到的sideMenuBody是侧边导航布局内容，必须放进Zlayout内\nconst sideMenuBody = this.props.getSideMenuTemplate({\n    theme: &quot;mazarine&quot;, //同pageConfig的theme : light | dark | mazarine\n    isCollapse: false, //是否折叠侧边导航\n    openAllSubmenu: false, //是否默认打开所有的二级导航\n    onSelect: function({ item, key, selectedKeys }) {}, //同ZsideMenu的onSelect\n});\n//得到的mainRouteBody是二级路由区域布局内容，必须放进Zlayout内\nconst mainRouteBody = this.props.getMaimRouteTemplate(id); //id可选，当一个应用中出现两次 ZmainHOC时，就要用id区分</code></pre>\n<p>必须使用 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zlayout-doc\">组件/Zlayout</span> 来布局</p>\n<pre><code class=\"language-jsx\">class MainComponent extends React.Component {\n    componentDidMount() {}\n    render() {\n        //自定义主页布局，经过ZmainHOC包装的组件，会有this.props.getSideMenuTemplate和this.props.getMaimRouteTemplate两个方法\n        return (\n            &lt;Zlayout&gt;\n                &lt;Zlayout.Zheader style={{ backgroundColor: &quot;#0A1131&quot; }}&gt;\n                    &lt;Logo /&gt;\n                &lt;/Zlayout.Zheader&gt;\n                &lt;Zlayout.Zbody scroll={false}&gt;\n                    &lt;Zlayout flexRow&gt;\n                        &lt;Zlayout width={&quot;320px&quot;}&gt;\n                            {this.props.getSideMenuTemplate({\n                                theme: &quot;dark&quot;,\n                                isCollapse: false,\n                                openAllSubmenu: true,\n                            })}\n                        &lt;/Zlayout&gt;\n                        &lt;Zlayout&gt;{this.props.getMaimRouteTemplate(&quot;my_main_body&quot;)}&lt;/Zlayout&gt;\n                    &lt;/Zlayout&gt;\n                &lt;/Zlayout.Zbody&gt;\n            &lt;/Zlayout&gt;\n        );\n    }\n}</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"tool-\">tool 参数</h2>\n<p><code>tool</code>是一个对象，里面的属性同 上下文/ZerodMainContext 提供的内容</p>\n";

/***/ }),

/***/ "jjl2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AmdDocHOC/index.jsx": "pnNO",
	"./AshowDemoHOC/index.jsx": "+fre"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "jjl2";

/***/ }),

/***/ "pyES":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZmainHOC2 = _interopRequireDefault(__webpack_require__("jQpQ"));

var _dropdown = _interopRequireDefault(__webpack_require__("jsC+"));

var _menu = _interopRequireDefault(__webpack_require__("BvKs"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf4 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _Zlayout2 = _interopRequireDefault(__webpack_require__("C6MB"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _reactRouterDom = __webpack_require__("eO8H");

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _Main = _interopRequireDefault(__webpack_require__("55gy"));

var _style = _interopRequireDefault(__webpack_require__("dEKO"));

var _doc = _interopRequireDefault(__webpack_require__("cGPK"));

var _pablic = _interopRequireDefault(__webpack_require__("0Gcb"));

var _logo = _interopRequireDefault(__webpack_require__("nWR2"));

var _loadChildRoutes = _interopRequireDefault(__webpack_require__("u3xt"));

// react
var AmdDocHOC = _loadHOC.default.AmdDocHOC,
    AshowDemoHOC = _loadHOC.default.AshowDemoHOC;
var Router = _pablic.default.path == "/" ? _reactRouterDom.BrowserRouter : _reactRouterDom.HashRouter;

var showMain = function showMain(Component) {
  return _react.default.createElement("div", {
    style: {
      height: "100%"
    }
  }, _react.default.createElement(Router, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "/main/HOC-doc/ZmainHOC-doc",
    component: Component
  })));
};

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var MyScript = AshowDemoHOC(showMain(_Main.default), false);
    return _react.default.createElement(MyScript, null);
  },
  demo2: function demo2() {
    var pageConfig = {
      // 左侧边展开时的宽度
      leftExpandWidth: 280,
      // 主页的主题 light | dark
      theme: "dark",
      // 顶部栏左边内容的渲染钩子
      headerLeftRender: function headerLeftRender(main) {
        return _react.default.createElement(_Zlayout2.default.ZheaderBtn, {
          className: "z-margin-right-15"
        }, "\u5DE6\u8FB9");
      },
      // 顶部栏右边内容的渲染钩子
      headerRightRender: function headerRightRender(main) {
        return _react.default.createElement(_Zlayout2.default.Template, null, _react.default.createElement(_Zlayout2.default.ZheaderBtn, {
          className: "z-margin-right-15"
        }, "\u6309\u94AE1"), _react.default.createElement(_Zlayout2.default.ZheaderBtn, {
          className: "z-margin-right-15"
        }, "\u6309\u94AE2"), _react.default.createElement(UserDropdown, null));
      },
      // 组件加载完成的钩子
      componentDidMount: function componentDidMount(callback) {
        callback();
      }
    };

    var UserDropdown =
    /*#__PURE__*/
    function (_React$PureComponent) {
      (0, _inherits2.default)(UserDropdown, _React$PureComponent);

      function UserDropdown() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, UserDropdown);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf4.default)(UserDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.methods = {
          //用户dropdown按钮点击触发
          onMenuClick: function onMenuClick(item) {// if (item.key === "/logout") {
            // 	window.location.assign(item.key);
            // } else {
            // }
          }
        };
        _this.dropdownMenu = _react.default.createElement(_menu.default, {
          className: _style.default["z-main-user-menu"],
          selectedKeys: [],
          onClick: _this.methods.onMenuClick && _this.methods.onMenuClick
        }, _react.default.createElement(_menu.default.Item, {
          disabled: true
        }, _react.default.createElement(_icon.default, {
          type: "user"
        }), "\u4E2A\u4EBA\u4E2D\u5FC3"), _react.default.createElement(_menu.default.Item, {
          disabled: true
        }, _react.default.createElement(_icon.default, {
          type: "setting"
        }), "\u8BBE\u7F6E"), _react.default.createElement(_menu.default.Divider, null), _react.default.createElement(_menu.default.Item, {
          key: "/logout"
        }, _react.default.createElement(_icon.default, {
          type: "logout"
        }), "\u9000\u51FA\u767B\u5F55"));
        return _this;
      }

      (0, _createClass2.default)(UserDropdown, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_dropdown.default, {
            overlay: this.dropdownMenu,
            trigger: ["click"],
            placement: "bottomRight"
          }, _react.default.createElement(_Zlayout2.default.ZheaderBtn, {
            className: "z-margin-right-15"
          }, _react.default.createElement("span", {
            className: "z-icon-circle z-margin-right-8"
          }, _react.default.createElement(_icon.default, {
            type: "user"
          })), "\u767B\u5F55\u7528\u6237"));
        }
      }]);
      return UserDropdown;
    }(_react.default.PureComponent);

    var NewMain = (0, _ZmainHOC2.default)(pageConfig);
    var MyScript = AshowDemoHOC(showMain(NewMain), false);
    return _react.default.createElement(MyScript, null);
  },
  demo3: function demo3() {
    var Logo =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      (0, _inherits2.default)(Logo, _React$PureComponent2);

      function Logo() {
        var _getPrototypeOf3;

        var _this2;

        (0, _classCallCheck2.default)(this, Logo);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf4.default)(Logo)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.state = {
          showTitle: true
        };

        _this2.toggleTitle = function (show) {
          _this2.setState({
            showTitle: show
          });
        };

        return _this2;
      }

      (0, _createClass2.default)(Logo, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.getLogoMethods && this.props.getLogoMethods({
            toggleTitle: this.toggleTitle
          });
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            className: "z-flex-items-v-center",
            style: {
              height: "100%"
            }
          }, _react.default.createElement("img", {
            src: _logo.default,
            alt: "",
            width: "32",
            className: "z-margin-left-24"
          }), this.state.showTitle ? _react.default.createElement("span", {
            className: "z-margin-left-12 z-font-size-20",
            style: {
              fontWeight: 600,
              color: "white"
            }
          }, "Zero-design") : null);
        }
      }]);
      return Logo;
    }(_react.default.PureComponent);

    Logo.propTypes = {
      getLogoMethods: _propTypes.default.func
    };

    var Main =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(Main, _React$Component);

      function Main() {
        (0, _classCallCheck2.default)(this, Main);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf4.default)(Main).apply(this, arguments));
      }

      (0, _createClass2.default)(Main, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
      }, {
        key: "render",
        value: function render() {
          //自定义主页布局，经过ZmainHOC包装的组件，会this.props.getSideMenuTemplate和this.props.getMaimRouteTemplate两个方法
          return _react.default.createElement(_Zlayout2.default, null, _react.default.createElement(_Zlayout2.default.Zheader, {
            style: {
              backgroundColor: "#0A1131"
            }
          }, _react.default.createElement(Logo, null)), _react.default.createElement(_Zlayout2.default.Zbody, {
            scroll: false
          }, _react.default.createElement(_Zlayout2.default, {
            flexRow: true
          }, _react.default.createElement(_Zlayout2.default, {
            width: "320px"
          }, this.props.getSideMenuTemplate({
            theme: "dark",
            isCollapse: false,
            openAllSubmenu: true
          })), _react.default.createElement(_Zlayout2.default, null, this.props.getMaimRouteTemplate("my_main_body")))));
        }
      }]);
      return Main;
    }(_react.default.Component);

    var NewMain = (0, _ZmainHOC2.default)(Main, function (callback) {
      //同pageConfig的componentDidMount函数
      callback( //保存的用户信息
      {}, //侧边导航数据
      [{
        permUrl: "HOC-doc",
        permName: "HOC",
        children: [{
          permUrl: "ZappHOC-doc",
          permName: "根组件 : ZappHOC",
          iconClass: ""
        }, {
          permUrl: "ZmainHOC-doc",
          permName: "主页布局 : ZmainHOC",
          iconClass: ""
        }, {
          permUrl: "ZpageWraperHOC-doc",
          permName: "页面头尾结构 : ZpageWrapper",
          iconClass: ""
        }, {
          permUrl: "ZsearchListHOC-doc",
          permName: "列表展示 : ZsearchListHOC",
          iconClass: ""
        }, {
          permUrl: "ZeditSimpleFormHOC-doc",
          permName: "编辑页面 : ZeditSimpleFormHOC",
          iconClass: ""
        }, {
          permUrl: "ZdetailSimpleBaseHOC-doc",
          permName: "详情页面 : ZdetailSimpleBaseHOC",
          iconClass: ""
        }, {
          permUrl: "ZeditorTreeHOC-doc",
          permName: "树列表页 : ZeditorTreeHOC",
          iconClass: ""
        }]
      }], //mapKeys
      {
        iconClass: "permIconUrl",
        path: "permUrl",
        name: "permName",
        children: "children"
      }, //路由配置数据
      _loadChildRoutes.default);
    });
    var MyScript = AshowDemoHOC(showMain(NewMain), false);
    return _react.default.createElement(MyScript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=26.1ee4b85a273e3a5fb288.js.map