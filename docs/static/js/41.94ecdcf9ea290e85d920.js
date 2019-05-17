(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "/l5x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_README_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JRHS");
/* harmony import */ var zerod_README_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zerod_README_md__WEBPACK_IMPORTED_MODULE_1__);

var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_README_md__WEBPACK_IMPORTED_MODULE_1___default.a));

/***/ }),

/***/ "JRHS":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"zero-design-zerod\">Zero-design 简称 zerod</h1>\n<p><code>zerod</code> 是基于<code>react + antd</code>的扩展组件库，主要包括<code>通用小组件</code>、<code>快速开发页面的多风格模板(HOC高阶组件)</code>、<code>通用工具函数</code>、<code>通用样式类</code></p>\n<p><code>zerod</code> 需要搭配<code>zerod-admin-webpack</code>脚手架使用</p>\n<p>安装<code>zerod</code>会同时安装以下第三方依赖包：</p>\n<pre><code class=\"language-json\">{\n    &quot;dependencies&quot;: {\n        &quot;contra&quot;: &quot;1.9.4&quot;,\n        &quot;crossvent&quot;: &quot;1.5.4&quot;,\n        &quot;iscroll&quot;: &quot;^5.2.0&quot;,\n        &quot;viewerjs&quot;: &quot;^1.2.0&quot;,\n        &quot;prismjs&quot;: &quot;^1.15.0&quot;,\n        &quot;swiper&quot;: &quot;^4.3.5&quot;,\n        &quot;react-color&quot;: &quot;^2.14.1&quot;,\n        &quot;lodash.debounce&quot;: &quot;^4.0.8&quot;,\n        &quot;lodash.throttle&quot;: &quot;^4.1.1&quot;,\n        &quot;lodash.merge&quot;: &quot;^4.6.1&quot;,\n        &quot;uuid&quot;: &quot;^3.3.2&quot;,\n        &quot;blueimp-md5&quot;: &quot;^2.10.0&quot;,\n        &quot;js-base64&quot;: &quot;^2.5.1&quot;\n    }\n}</code></pre>\n<h1 id=\"zerod-admin-webpack-v1-2-3\">zerod-admin-webpack 脚手架 v1.2.3</h1>\n<p>基于 <code>react + react-router + redux + react-redux + antd + zerod + scss</code> 的 webpack4 前端开发环境</p>\n<p>1、支持基本的图片文件 <code>png|jpe?g|gif|svg</code> 加载,转 base64 打包, 支持视频文件 <code>mp4|webm|ogg|mp3|wav|flac|aac</code>加载</p>\n<p>2、支持 <code>js,jsx,css,scss,less</code> 公共代码抽取，压缩打包</p>\n<p>3、<code>babel-loader + less/sass</code> 模块加载功能，支持<code>scss</code>的 cssModules（不支持 less 的），主要使用 scss 文件写样式，less+less-loader 这里只用来编译 antd 的样式或者其他使用 less 的第三方库，</p>\n<p>4、<code>webpack-dev-server</code> 服务器，支持反代理配置，热加载热更新</p>\n<p>5、<code>babel-polyfill</code> 让 <code>IE10+</code>浏览器支持 es6+语法的垫片</p>\n<p>6、<code>react-loadable</code> 结合 <code>babel-plugin-syntax-dynamic-import</code> 支持 react 组件的按需加载</p>\n<p>7、支持使用 <code>scss</code> 变量代替 <code>less</code> 变量自定义 <code>antd</code> 的主题</p>\n<p>8、支持跨项目共享代码发布到我们的私有服务器<a href=\"http://172.16.8.10:8081/repository/hosted-npm/\">http://172.16.8.10:8081/repository/hosted-npm/</a></p>\n<p>9、支持状态管理，使用 <code>redux</code> + <code>react-redux</code></p>\n<p><code>git</code>地址：<a href=\"http://172.16.26.120/components/zerod-admin-webpack.git\" target=\"_blank\">http://172.16.26.120/components/zerod-admin-webpack.git</a></p>\n<p>2018-11-22 v1.1.0 去掉 antd-scss-theme-plugin 插件，添加 happypack 多线程插件，提高编译速度，添加 DllPlugin 和 DllReferencePlugin，添加 sass-resources-loader<br>2018-12-11 v1.1.3 修复只分割代码未按需加载的问题，新增 pace 来显示加载 loading<br>2018-12-25 v1.2.0 升级<a href=\"https://babeljs.io/\" target=\"_blank\"> babel@7.x</a><br>2019-01-24 v1.2.1 pacejs 插件使用 html-webpack-include-assets-plugin 插入 html 保持与打包路径一致，config/index.js 的 dll.exclude 支持正则匹配，新增 npm run dll-dev 和 npm run dll-prod 两条命令用于生成 dll 文件才用 development 或 production，只有 react 的 development 才支持 DevTools Profiler（性能分析），原 npm run dll 默认是 npm run dll-dev，npm run build 则包含了 npm run dll-prod</p>\n<p>生成的 vendor.manifest.json 和 vendor.dll.*.js 都可以提交 git</p>\n<p>如果在开发中发现这个报错：“You are currently using minified code outside of NODE_ENV === &quot;production&quot;. This means that you are running a slower development build of Redux.” 可以忽略，npm run build 后是不会有的</p>\n<p>偶热发现，cnpm install 安装的依赖包依赖链比 npm install 安装的要长的多，所以 npm install 的，运行或打包相对来说快的多。</p>\n<p>2019-03-28 v1.2.2 babel-polyfill 改用@babel/polyfill，修复@babel/*更新后报错问题<br>2019-04-20 v1.2.3 加入 Eslint 检测代码规范  </p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">脚手架目录结构</h2>\n<p>可在 <code>config/index.js</code> 配置反代理、host、端口号、sourceMap 等等</p>\n<pre><code class=\"language-bash\">├── /build/          # webpack配置\n├── /config/         # config/index.js可以配置反代理路径和打包公共路径，dev端口号等等\n├── /dist/           # 项目打包输出目录\n├── /src/            # 项目开发源码目录\n│ ├── /Api/          # 后台接口文件夹,\n│ ├── /assets/       # 公共文件:图片，iconfont,\n│ │ ├── /iconfont/   # 来自 http://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a\n│ │ └── /images/     # 图片\n│ ├── /components/   # 自生产的通用组件\n│ │ ├── /AbgImage/   # 组件文件夹，对应组件名称： 以&quot;A&quot;开头 驼峰命名法。例如：ZbgImage\n│ │ │ ├── index.jsx  # 组件主要文件（必需的）\n│ │ │ └── style.scss # 组件样式文件（如果需要）\n│ ├── /context/      # react “动态上下文” 文件\n│ ├── /HOC/          # 高阶组件，用于封装多次共用逻辑代码\n│ ├── /lazyLoad/\n│ │ ├── lazyLoad.js  # 这样使用const componet=lazyLoad(()=&gt;import(&#39;./componet.jsx&#39;))实现异步组件\n│ │ └── Loading.jsx  # //暂未用到\n│ ├── /mock/         # 数据模拟（建议使用 mockjs）\n│ ├── /scss/         # 通用样式文件夹\n│ │ └── index.scss   #\n│ ├── /store/        # 状态管理仓库，使用redux + react-redux\n│ ├── /views/        # 路由组件目录，应当按照路由结构创建\n│ ├── /zTool/        # 通用工具目录\n│ │ └── httpAjax.js  # ajax库：axios或fetch 的封装\n│ ├── ant-theme-vars.scss      # antd主题变量\n│ ├── App.api.js     # 自动加载/Api/下`.api.js`后缀的文件\n│ ├── App.context.js # 自动加载/context/下的&#39;Context.js&#39;\n│ ├── App.jsx        # 根组件\n│ ├── app.scss       # 根样式文件\n│ └── main.js        # 项目入口文件\n├── /static/         # 不会被压缩打包的静态文件放这里\n│ ├── /pace/         # 页面的加载进度条\n│ │ ├── pace-theme-flash.css   #\n│ │ └── pace.min.js\n│ └── vendor.dll.*.js  # package.json的dependencies依赖包的预打包文件，由npm run dll命令生成\n├── babel.config.js  # babel配置\n├── .gitgnore        # git忽略检测的配置\n├── .postcssrc.js    # postcss配置\n├── .prettierrc      # 格式化代码 prettier 的配置， vscode 编辑器需安装 prettier 插件\n├── index.html       # 单页面唯一的html\n└── package.json</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">脚手架命令</h2>\n<p>-1、请电脑已安装 nodejs</p>\n<p>0、安装依赖包：</p>\n<p>由于我们的<code>zerod</code>存储在<code>我们的npm私有服务器</code>中，请按如下顺序执行命令行：</p>\n<p>1、<code>npm install rimraf cnpm -g</code> (如果已经执行过了，跳过此步)</p>\n<p>2、<code>npm run init</code> (此命令包含 rimraf node_modules &amp; npm run npm-zerod &amp; cnpm install &amp; npm run dll)</p>\n<p><code>注：每次更新zerod包时(从私服安装依赖包)，需从第2步骤依次执行，这是因为私服和外网npm服务有差异，cnpm和npm混用导致某些包文件丢失，然后重新启动报错</code></p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">完整安装依赖包后：</h2>\n<p>1、启动服务：<code>npm run dev 或 npm start</code></p>\n<p>2、打包：<code>npm run build</code></p>\n<p>3、打包并显示依赖报告：<code>npm run build --report</code></p>\n<p>4、不常变依赖包预打包：<code>npm run dll</code></p>\n<p>5、从私服安装最新 zerod: <code>npm run npm-zerod</code></p>\n<p>6、<code>npm run init</code> (此命令包含 <code>rimraf node_modules &amp; npm run npm-zerod &amp; cnpm install &amp; npm run dll</code>)</p>\n<p>7、<code>npm run eslint</code>： 全局检测代码规范 前提先要全局安装 <code>npm install eslint eslint-plugin-react eslint-plugin-react-hooks -g</code>一次</p>\n";

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

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

/***/ })

}]);
//# sourceMappingURL=41.94ecdcf9ea290e85d920.js.map