(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+fre":function(t,n,e){"use strict";e.r(n);var o=e("L3G2"),a=e.n(o),r=e("Ds8w"),d=e.n(r),l=e("6ato"),i=e.n(l),s=e("2dj7"),c=e.n(s),u=e("Xtzg"),m=e.n(u),p=e("0dFU"),g=e.n(p),h=e("6cB7"),f=e.n(h);n.default={name:"AshowDemoHOC",HOC:function(t,n){return function(e){function o(){return i()(this,o),m()(this,(o.__proto__||d()(o)).apply(this,arguments))}return g()(o,e),c()(o,[{key:"componentDidMount",value:function(){var e=this.boxEl.querySelector(".z-open-modal-btn");e._scroll=n,e._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(n){t.boxEl=n}},f.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.Component)}}},cGPK:function(t,n){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zmainhoc">主页布局：ZmainHOC</h1>\n<p><code>ZmainHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个主页布局结构的<code>路由组件</code>(我们这里称它为<code>main</code>组件)</p>\n<p>在<code>zerod-admin-webpack 脚手架</code>的<code>src/views/Main/index.jsx</code>已经使用。</p>\n<p>只有使用了<code>ZmainHOC</code>后，它内部的子孙组件才能使用<code>ZerodMainContext</code>的内容。</p>\n<p>且<code>ZsearchListHOC</code>、<code>ZeditSimpleFormHOC</code>、<code>ZdetailSimpleBaseHOC</code>、<code>ZeditorTreeHOC</code>就应该是<code>ZmainHOC</code>的子孙组件才能发挥所长</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="这个demo取zerod-design文档主页展示，所有代码如下"></div>\n\n<pre><code class="language-jsx">// react\nimport React from &quot;react&quot;;\nimport PropTypes from &quot;prop-types&quot;;\n// zerod\nimport { Zlayout, ZmainHOC } from &quot;zerod&quot;;\nimport GlobalLoading from &quot;@/lazyLoad/Loading.jsx&quot;;\n// 路由组件\nimport mainRoutes from &quot;./load-child-routes.js&quot;;\n// ant ui\nimport { Icon, Dropdown, Menu } from &quot;antd&quot;;\n// img\nimport logo from &quot;@/assets/images/logo.png&quot;;\nimport flower from &quot;@/assets/images/flower.jpg&quot;;\n// 样式类\nimport cssClass from &quot;./style.scss&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\n\nconst myMenu = [\n    {\n        permUrl: &quot;start-doc&quot;,\n        permName: &quot;开始&quot;,\n    },\n];\n\nlet logoMethods = null;\nconst pageConfig = {\n    // 左侧边展开时的宽度\n    leftExpandWidth: 280,\n    // 主页的主题 light | dark\n    theme: &quot;dark&quot;,\n    // logt区域\n    logo: {\n        title: &quot;&quot;,\n        render: () =&gt; {\n            return &lt;Logo getLogoMethods={(methods) =&gt; (logoMethods = methods)} /&gt;;\n        },\n    },\n    // 路由配置信息\n    mainRoutes: mainRoutes,\n    // 加载前要显示一个全局loading\n    globalLoading: () =&gt; &lt;GlobalLoading /&gt;,\n    // 侧边导航设置\n    sideMenu: {\n        //是否打开所有的submenu\n        openAllSubmenu: true,\n        //追加在上面的menu\n        topOtherMenu: myMenu,\n        //追加在下面的menu\n        bottomOtherMenu: [],\n        //\n        mapKeys: { iconClass: &quot;iconClass&quot;, path: &quot;permUrl&quot;, name: &quot;permName&quot;, children: &quot;children&quot; },\n    },\n    // 顶部栏左边内容的渲染钩子\n    headerLeftRender: (main) =&gt; {\n        return &lt;img className=&quot;z-margin-left-20&quot; src={flower} height=&quot;60&quot; /&gt;;\n    },\n    // 顶部栏右边内容的渲染钩子\n    // headerRightRender: (main) =&gt; {\n    //     return ;\n    // },\n    // 侧边栏折叠按钮触发后，过渡动画之前\n    beforeToggleCollapse: (collapsed) =&gt; {\n        logoMethods &amp;&amp; logoMethods.toggleTitle(collapsed);\n    },\n    // 侧边栏折叠按钮触发后，过渡动画之后\n    // afterToggleCollapse: (collapsed) =&gt; {},\n    // 组件加载完成的钩子\n    componentDidMount: (callback) =&gt; {\n        callback();\n        //// 获取登录信息\n        // api.login.getUserInfo().then((re) =&gt; {\n        //     if (re.data) {\n        //         console.log(re.data)\n        //         //已经登录了保存登录信息数据，传入导航数据\n        //         callback(re.data,[]);\n        //         // callback(re.data, re.data.userInfo.permTreeVOS);\n        //     } else {\n        //         //如果没有登录回到登录页\n        //         window.location.assign(&quot;/login&quot;);\n        //     }\n        // });\n    },\n};\nexport default ZmainHOC(pageConfig);\n\nclass Logo extends React.Component {\n    static propTypes = {\n        getLogoMethods: PropTypes.func,\n    };\n    state = {\n        showTitle: true,\n    };\n    toggleTitle = (show) =&gt; {\n        this.setState({\n            showTitle: show,\n        });\n    };\n    componentDidMount() {\n        this.props.getLogoMethods &amp;&amp;\n            this.props.getLogoMethods({\n                toggleTitle: this.toggleTitle,\n            });\n    }\n    render() {\n        return (\n            &lt;div className=&quot;z-flex-items-v-center&quot; style={{ height: &quot;100%&quot; }}&gt;\n                &lt;img src={logo} alt=&quot;&quot; width=&quot;32&quot; className=&quot;z-margin-left-24&quot; /&gt;\n                {this.state.showTitle ? (\n                    &lt;span className=&quot;z-margin-left-12 z-font-size-20&quot; style={{ fontWeight: 600 }}&gt;\n                        Zero-design\n                    &lt;/span&gt;\n                ) : null}\n            &lt;/div&gt;\n        );\n    }\n}</code></pre>\n<p>2、右边顶部按钮</p>\n<div class="z-demo-box" data-render="demo2" data-title="需要在右上角添加更多按钮时，可使用Zlayout.ZheaderBtn"></div>\n\n<pre><code class="language-jsx">const pageConfig = {\n    // 左侧边展开时的宽度\n    leftExpandWidth: 280,\n    // 主页的主题 light | dark\n    theme: &quot;dark&quot;,\n    // 顶部栏左边内容的渲染钩子\n    headerLeftRender: (main) =&gt; {\n        return &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;左边&lt;/Zlayout.ZheaderBtn&gt;;\n    },\n    // 顶部栏右边内容的渲染钩子\n    headerRightRender: (main) =&gt; {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;按钮1&lt;/Zlayout.ZheaderBtn&gt;\n                &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;按钮2&lt;/Zlayout.ZheaderBtn&gt;\n                &lt;UserDropdown /&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    },\n    // 组件加载完成的钩子\n    componentDidMount: (callback) =&gt; {\n        callback();\n    },\n};\n\nclass UserDropdown extends React.Component {\n    methods = {\n        //用户dropdown按钮点击触发\n        onMenuClick: (item) =&gt; {\n            // if (item.key === &quot;/logout&quot;) {\n            //     window.location.assign(item.key);\n            // } else {\n            // }\n        },\n    };\n    dropdownMenu = (\n        &lt;Menu\n            className={cssClass[&quot;z-main-user-menu&quot;]}\n            selectedKeys={[]}\n            onClick={this.methods.onMenuClick &amp;&amp; this.methods.onMenuClick}\n        &gt;\n            &lt;Menu.Item disabled&gt;\n                &lt;Icon type=&quot;user&quot; /&gt;\n                个人中心\n            &lt;/Menu.Item&gt;\n            &lt;Menu.Item disabled&gt;\n                &lt;Icon type=&quot;setting&quot; /&gt;\n                设置\n            &lt;/Menu.Item&gt;\n            &lt;Menu.Divider /&gt;\n            &lt;Menu.Item key=&quot;/logout&quot;&gt;\n                &lt;Icon type=&quot;logout&quot; /&gt;\n                退出登录\n            &lt;/Menu.Item&gt;\n        &lt;/Menu&gt;\n    );\n    render() {\n        return (\n            &lt;Dropdown overlay={this.dropdownMenu} trigger={[&quot;click&quot;]} placement=&quot;bottomRight&quot;&gt;\n                &lt;Zlayout.ZheaderBtn className=&quot;z-margin-right-15&quot;&gt;\n                    &lt;span className=&quot;z-icon-circle z-margin-right-8&quot;&gt;\n                        &lt;Icon type=&quot;user&quot; /&gt;\n                    &lt;/span&gt;\n                    登录用户\n                &lt;/Zlayout.ZheaderBtn&gt;\n            &lt;/Dropdown&gt;\n        );\n    }\n}\nexport default ZmainHOC(pageConfig);</code></pre>\n<h2 id="-">重点</h2>\n<p>在主页中定义了两种打开右边窗口的模式，如需调用打开右边窗口和调用显示 loading 的方法请<a href="/main/context-doc/ZerodMainContext-doc">查看上下文 ZerodMainContext</a></p>\n<div class="z-doc-titles"></div>\n\n<h2 id="pageconfig">pageConfig</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>noticeType</td>\n            <td>用于配置操作提示通告的方式</td>\n            <td>notification | message</td>\n            <td>message</td>\n        </tr>\n        <tr>\n            <td>leftExpandWidth</td>\n            <td>左侧栏展开时的宽度</td>\n            <td>string | number</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>theme</td>\n            <td>主题</td>\n            <td>light | dark | mazarine</td>\n            <td>light</td>\n        </tr>\n        <tr>\n            <td>logo</td>\n            <td>logo区域配置,请看下面的pageConfig.logo</td>\n            <td>object</td>\n            <td>\'{title:"",render:()=><span>logo</span>}\'</td>\n        </tr>\n        <tr>\n            <td>mainRoutes</td>\n            <td>路由配置,如[{path: "/start-doc",component: 组件,exact:是否精准匹配默认true, redirect:false,to:"/redirect-path"}];  当重定向属性redirect为true时,component无效，to属性有效</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>globalLoading</td>\n            <td>加载前要显示的一个全局loading</td>\n            <td>Element | ReactNode | function(){return ;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>sideMenu</td>\n            <td>侧边导航配置,请看下面的pageConfig.sideMenu</td>\n            <td>object</td>\n            <td>{}</td>\n        </tr>\n        <tr>\n            <td>headerLeftRender</td>\n            <td>右侧顶部栏左边内容的渲染钩子,参数有main组件的实例对象</td>\n            <td>function(tool){return ;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>headerRightRender</td>\n            <td>右侧顶部栏右边内容的渲染钩子,参数有main组件的实例对象</td>\n            <td>function(tool){return ;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>beforeToggleCollapse</td>\n            <td>侧边栏折叠按钮触发后，过渡动画之前回调,参数有折叠状态collapsed</td>\n            <td>function(collapsed){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>beforeToggleCollapse</td>\n            <td>侧边栏折叠按钮触发后，过渡动画之后回调,参数有折叠状态collapsed</td>\n            <td>function(collapsed){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>componentDidMount</td>\n            <td>main组件加载完的钩子,考虑到可能走后台接口,提供一个一定要调用的callback，这个函数可传入两个可选参数:callback(userInfo = {}, menuData = []),userInfo是用户登录后要储存的一个对象，menuData是侧边导航的数据(map结构由pageConfig.sideMenu.mapKeys对应)。$router:是一个对象，提供history和location属性</td>\n            <td>function(callback,$router){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="pageconfig-logo">pageConfig.logo</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>title</td>\n            <td>标题</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>render</td>\n            <td>渲染logo的钩子</td>\n            <td>function(){return ;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="pageconfig-sidemenu">pageConfig.sideMenu</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>openAllSubmenu</td>\n            <td>侧边导航存在二级导航时，是否打开所有的一级导航</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>topOtherMenu</td>\n            <td>追加在上面的导航配置(map结构由pageConfig.sideMenu.mapKeys对应)，中间的导航配置是由pageConfig.componentDidMount中的callback函数注入进去的</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>bottomOtherMenu</td>\n            <td>追加在下面的导航配置(map结构由pageConfig.sideMenu.mapKeys对应)</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>mapKeys</td>\n            <td>导航配置的map对象key的对应，默认{ iconClass: "iconClass", path: "path", name: "name", children: "children" }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>noParentPath</td>\n            <td>为false时，菜单导航的path会取父路由的path拼接</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="tool-">tool参数</h2>\n<p><code>tool</code>是一个对象，里面的属性同 上下文/ZerodMainContext 提供的内容</p>\n'},ebhq:function(t,n,e){"use strict";var o=e("Q2cO"),a=e.n(o),r=e("jjl2"),d={},l=[];r.keys().forEach(function(t){var n=void 0;try{n=r(t).default}catch(n){throw Error(t+":"+n)}if(void 0===n||"object"!==(void 0===n?"undefined":a()(n)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof n.HOC)throw Error(t+":HOC有误");var e=n.name;if("string"!=typeof e)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(e))throw Error(t+":name属性请以A开头HOC结尾");if(e=e.trim(),l.includes(e))throw Error(t+":"+e+"此HOC名称已被使用");l.push(e),d[e]=n.HOC}),n.a=d},jjl2:function(t,n,e){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var n=r(t);return e(n)}function r(t){var n=o[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},pnNO:function(t,n,e){"use strict";e.r(n);var o=e("unDg"),a=e.n(o),r=e("Ds8w"),d=e.n(r),l=e("6ato"),i=e.n(l),s=e("2dj7"),c=e.n(s),u=e("Xtzg"),m=e.n(u),p=e("0dFU"),g=e.n(p),h=e("6cB7"),f=e.n(h),v=e("VUem"),y=e.n(v),q=(e("T9cD"),e("tmCC")),b=e("tW/l"),C=e.n(b);var E=Object(q.r)();n.default={name:"AmdDocHOC",HOC:function(t,n){var e=function(e){function o(){var t,n,e,r;i()(this,o);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=e=m()(this,(t=o.__proto__||d()(o)).call.apply(t,[this].concat(s))),e.renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=q.x.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),q.x.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),q.x.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",function(){if(!e.unmounted){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var r=e.state.navs[o];if(t>=r.el.offsetTop-120){if(!(o<n-1)){r.active=!0;break}var d=e.state.navs[o+1];if(d&&t<d.el.offsetTop-120){r.active=!0;break}}}e.setState({navs:[].concat(a()(e.state.navs))})}})},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},r=n,m()(e,r)}return g()(o,e),c()(o,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){y.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,e=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(e).forEach(function(e){var o=function(t){var n={};if(t.dataset)return t.dataset;for(var e=0;e<t.attributes.length;e++){var o=t.attributes[e].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[e].nodeValue;n[o.match(/^data-(\w+)/)[1]]=a}}return n}(e);if(n&&"function"==typeof n[o.render]){var a=e.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=n[o.render]();t.renderEls.push(e),y.a.render(r,e,function(){var t=document.createElement("div");t.className="z-demo-footer";var n=document.createElement("div");n.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var d=document.createElement("img");d.addEventListener("click",function(){d.src=d.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=d.open?"0px":"auto",d.open=!d.open},!1),d.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=o.title?o.title:"",n.appendChild(l),a&&n.appendChild(d),t.appendChild(n),a&&r.appendChild(a),t.appendChild(r),e.appendChild(t)})}}),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof n.target._render&&t.props.showRightModal({show:!0,modal:n.target._modal?n.target._modal:"mainModal",content:n.target._render(),scroll:n.target._scroll,onTransitionend:function(n){t.setState({closeModaled:!n})}})},10)},!1),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==n.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var e=n.target._modal?n.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:e,content:null,scroll:!0,onTransitionend:function(n){t.setState({closeModaled:!n})}}),t.props.showModalLoading(!0,e),setTimeout(function(){t.props.showModalLoading(!1,e)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var n=this;return f.a.createElement(q.l.Template,null,f.a.createElement(E,{pageHeader:{show:!1},hasBodyPadding:!1},f.a.createElement("div",{className:"z-panel "+C.a["z-md-doc"],ref:function(t){return n.mdEl=t}},f.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},f.a.createElement(q.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?y.a.createPortal(f.a.createElement("div",{className:C.a["z-nav-box"],ref:function(t){return n.navEl=t}},f.a.createElement("div",{ref:function(t){return n.navContentEl=t}},f.a.createElement("section",null,this.state.navs.map(function(t,e){return f.a.createElement("div",{title:t.name,className:C.a["z-nav"]+" "+(t.active?C.a.active:""),key:e,onClick:function(){n.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(f.a.Component);return q.i.setConsumer(e)}}},pyES:function(t,n,e){"use strict";e.r(n);var o=e("aqjm"),a=e.n(o),r=e("oSms"),d=e.n(r),l=e("63J6"),i=e.n(l),s=e("Ds8w"),c=e.n(s),u=e("6ato"),m=e.n(u),p=e("2dj7"),g=e.n(p),h=e("Xtzg"),f=e.n(h),v=e("0dFU"),y=e.n(v),q=e("6cB7"),b=e.n(q),C=e("tmCC"),E=e("o0/1"),M=e("ebhq"),w=e("55gy"),z=e("dEKO"),k=e.n(z),x=e("cGPK"),O=e.n(x),Z=e("0Gcb"),N=e.n(Z),T=M.a.AmdDocHOC,D=M.a.AshowDemoHOC,j="/"==N.a.path?E.BrowserRouter:E.HashRouter,R=function(t){return b.a.createElement("div",{style:{height:"100%"}},b.a.createElement(j,null,b.a.createElement(E.Route,{path:"/main/HOC-doc/ZmainHOC-doc",component:t})))};n.default=T(O.a,{demo1:function(){var t=D(R(w.default),!1);return b.a.createElement(t,null)},demo2:function(){var t={leftExpandWidth:280,theme:"dark",headerLeftRender:function(t){return b.a.createElement(C.l.ZheaderBtn,{className:"z-margin-right-15"},"左边")},headerRightRender:function(t){return b.a.createElement(C.l.Template,null,b.a.createElement(C.l.ZheaderBtn,{className:"z-margin-right-15"},"按钮1"),b.a.createElement(C.l.ZheaderBtn,{className:"z-margin-right-15"},"按钮2"),b.a.createElement(n,null))},componentDidMount:function(t){t()}},n=function(t){function n(){var t,e,o,a;m()(this,n);for(var r=arguments.length,l=Array(r),s=0;s<r;s++)l[s]=arguments[s];return e=o=f()(this,(t=n.__proto__||c()(n)).call.apply(t,[this].concat(l))),o.methods={onMenuClick:function(t){}},o.dropdownMenu=b.a.createElement(d.a,{className:k.a["z-main-user-menu"],selectedKeys:[],onClick:o.methods.onMenuClick&&o.methods.onMenuClick},b.a.createElement(d.a.Item,{disabled:!0},b.a.createElement(i.a,{type:"user"}),"个人中心"),b.a.createElement(d.a.Item,{disabled:!0},b.a.createElement(i.a,{type:"setting"}),"设置"),b.a.createElement(d.a.Divider,null),b.a.createElement(d.a.Item,{key:"/logout"},b.a.createElement(i.a,{type:"logout"}),"退出登录")),a=e,f()(o,a)}return y()(n,t),g()(n,[{key:"render",value:function(){return b.a.createElement(a.a,{overlay:this.dropdownMenu,trigger:["click"],placement:"bottomRight"},b.a.createElement(C.l.ZheaderBtn,{className:"z-margin-right-15"},b.a.createElement("span",{className:"z-icon-circle z-margin-right-8"},b.a.createElement(i.a,{type:"user"})),"登录用户"))}}]),n}(b.a.Component),e=Object(C.m)(t),o=D(R(e),!1);return b.a.createElement(o,null)}})}}]);