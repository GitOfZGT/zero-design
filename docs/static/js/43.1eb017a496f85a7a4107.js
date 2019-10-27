(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "KnEK":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-12-24 19:54:32\n * @LastEditors: zgt\n * @LastEditTime: 2019-08-16 15:54:36\n * @Description: file content\n -->\n<h1 id=\"zerod-mobile-webpack\">zerod-mobile-webpack</h1>\n<p>如下的操作已在<code>zerod-mobile-webpack</code>中处理，所以可以直接 git clone <a href=\"http://172.16.120.120/hy-department-zw/web/zerod-mobile-webpack.git\">http://172.16.120.120/hy-department-zw/web/zerod-mobile-webpack.git</a> 使用</p>\n<p>移动端开发使用<code>react</code> + <code>react-router</code> + <code>antd-mobile</code> + <code>scss</code> + <code>axios</code>  </p>\n<h1 id=\"-\">移动端网页开发</h1>\n<p><code>zerod-admin-webpack</code>脚手架同样适用于移动端网页开发，但是要做一些相关的配置调整</p>\n<h2 id=\"-\">首先</h2>\n<p>移动端开发不使用<code>antd</code>库，所以先把<code>antd</code>相关的去掉，zerod的部分东西是不依赖antd的可以继续使用，如<code>zTool</code>，但是不能通过<code>import {zTool} from &#39;zerod&#39;</code> ，请使用 <code>import {deepCopy,dataType} from &#39;zerod/components/zTool&#39;</code> </p>\n<h2 id=\"-package-json-\">在 package.json 中</h2>\n<pre><code class=\"language-js\">{\n    &quot;dependencies&quot;: {\n        //&quot;antd&quot;: &quot;^3.11.6&quot;,去掉\n        &quot;axios&quot;: &quot;^0.18.0&quot;,\n        &quot;react&quot;: &quot;^16.4.0&quot;,\n        &quot;react-dom&quot;: &quot;^16.4.0&quot;,\n        &quot;react-loadable&quot;: &quot;^5.4.0&quot;,\n        &quot;react-redux&quot;: &quot;^5.0.7&quot;,\n        &quot;react-router-dom&quot;: &quot;^4.3.1&quot;,\n        &quot;react-transition-group&quot;: &quot;^2.4.0&quot;,\n        &quot;redux&quot;: &quot;^4.0.1&quot;\n    }\n}</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-babel-config-js-babelrc-\">在babel.config.js 或 .babelrc 中，把如下不需要用到的都去掉，如下</h2>\n<pre><code class=\"language-js\">// [\n//     &quot;import&quot;,\n//     {\n//         &quot;libraryName&quot;: &quot;antd&quot;,\n//         &quot;style&quot;: true,\n//         &quot;libraryDirectory&quot;: &quot;es&quot;\n//     }\n// ],\n[\n    &quot;import&quot;,\n    {\n        &quot;libraryName&quot;: &quot;zerod&quot;,\n        &quot;style&quot;: false,\n        &quot;libraryDirectory&quot;: &quot;components&quot;,\n        &quot;camel2DashComponentName&quot;: false\n    }\n],\n// [\n//     &quot;prismjs&quot;,\n//     {\n//         &quot;languages&quot;: [&quot;javascript&quot;, &quot;scss&quot;, &quot;jsx&quot;,&quot;json&quot;,&quot;yaml&quot;],\n//         &quot;plugins&quot;: [&quot;line-numbers&quot;],\n//         &quot;theme&quot;: &quot;tomorrow&quot;,\n//         &quot;css&quot;: true\n//     }\n// ]</code></pre>\n<h2 id=\"-config-index-js-zerod-scss-scssvars-\">在 config/index.js 中,如果没用到zerod或者不需要scss变量提升，可将scssVars属性为空（否则忽略）</h2>\n<pre><code class=\"language-js\">const config = {\n    //入口js\n    entry: {\n        app: [&quot;babel-polyfill&quot;,&quot;./src/main.js&quot;],\n    },\n    copyName: shareName,\n    //babel-loader 要包含的文件夹是哪些\n    &quot;babel-includes&quot;: [&quot;src&quot;, &quot;node_modules/zerod&quot;, /(node_modules(\\\\|\\/)share\\-.*)/, &quot;node_modules/webpack-dev-server/client&quot;],\n    //微信页面开发授权域名验证的文件，如： path.resolve(__dirname, &#39;../MP_verify_P7fns4NGi17lbM0R.txt&#39;)\n    MP_verify: &quot;&quot;,\n    favicon: path.resolve(__dirname, &quot;../src/assets/images/logo.png&quot;),\n    //scss变量提升\n    scssVars:[path.resolve(__dirname,&quot;../node_modules/zerod/ant-theme-vars.scss&quot;)],\n    dll: {\n        //除了package.json的dependencies，还需包含\n        include: [&quot;moment&quot;],\n        //打包dll时从package.json的dependencies中不包含\n        exclude: [&quot;antd&quot;, &quot;uuid&quot;,&quot;echarts&quot;,&quot;babel-polyfill&quot;],\n    },</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-postcssrc-js-viewportwidth-viewportheight-\">移动端自适应方案：在.postcssrc.js 中，用如下 代码框的配置 替换全部，再修改 viewportWidth 和 viewportHeight 对应设计稿的宽度和高度</h2>\n<h3 id=\"-rem-rem-vw-vh-vm-\">移动端自适应，以前用 rem 加媒体查询来做自适应，如今，rem 方式也完成了它的历史使命，改用 vw、vh 、vm 等视窗单位</h3>\n<h3 id=\"-px-postcss-px-\">但是我们在项目依然用<code>px</code>单位来写，使用 postcss 的插件自动将 px 转成视窗单位</h3>\n<h3 id=\"-\">最后还要安装插件包：</h3>\n<p><code>npm install postcss-aspect-ratio-mini postcss-write-svg postcss-preset-env postcss-px-to-viewport cssnano cssnano-preset-advanced --save-dev</code></p>\n<pre><code class=\"language-js\">// 容器适配，可以使用vw\n// 文本的适配，可以使用vw\n// 大于1px的边框、圆角、阴影都可以使用vw\n// 内距和外距，可以使用vw\n\nmodule.exports = {\n    plugins: {\n        &quot;postcss-import&quot;: {},\n        &quot;postcss-url&quot;: {},\n        &quot;postcss-aspect-ratio-mini&quot;: {},\n        &quot;postcss-write-svg&quot;: { utf8: false },\n        &quot;postcss-preset-env&quot;: { stage: 0, autoprefixer: { grid: true } },\n        &quot;postcss-px-to-viewport&quot;: {\n            viewportWidth: 419, // (Number) 设计稿的宽度（标准像素）.\n            viewportHeight: 741, // (Number) 设计稿的高度（标准像素）.\n            unitPrecision: 3, // // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）\n            viewportUnit: &quot;vw&quot;, //指定需要转换成的视窗单位，建议使用vw\n            selectorBlackList: [&quot;.not-vw&quot;, /^.weui-/, &#39;[class^=&quot;weui&quot;]&#39;], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名\n            minPixelValue: 1, // 于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值\n            mediaQuery: false, // 允许在媒体查询中转换`px`\n        },\n        // &quot;postcss-viewport-units&quot;: {},\n        cssnano: {\n            preset: &quot;advanced&quot;,\n            autoprefixer: false,\n            &quot;postcss-zindex&quot;: false,\n        },\n        // to edit target browsers: use &quot;browserslist&quot; field in package.json\n        // &quot;autoprefixer&quot;: {}\n    },\n};</code></pre>\n";

/***/ }),

/***/ "Ncpu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("KnEK"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_doc.default);

exports.default = _default;

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

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=43.1eb017a496f85a7a4107.js.map