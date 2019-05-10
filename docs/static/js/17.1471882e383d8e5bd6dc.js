(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "O0xr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZappHOC_doc_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xLr8");
/* harmony import */ var zerod_components_ZappHOC_doc_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZappHOC_doc_md__WEBPACK_IMPORTED_MODULE_1__);

var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZappHOC_doc_md__WEBPACK_IMPORTED_MODULE_1___default.a));

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

/***/ }),

/***/ "xLr8":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zapphoc\">根组件：ZappHOC</h1>\n<p><code>ZappHOC</code>是一个函数，是对根组件内容封装，传入<code>pageConfig</code>参数配置，返回一个组件</p>\n<p>在<code>zerod-admin-webpack 脚手架</code>的<code>src/App.jsx</code>已经使用,只有使用了<code>ZappHOC</code>后，它内部的子孙组件才能使用<code>ZerodRootContext</code>的内容</p>\n<p>1、在<code>src/App.jsx</code>使用</p>\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZappHOC } from &quot;zerod&quot;;\n\n// 路由组件\nimport lazyLoad from &quot;@/lazyLoad/lazyLoad&quot;;\nconst Main = lazyLoad(()=&gt;import(&quot;@/views/Main/&quot;));\n\nconst pageConfig = {\n    rootRoutes: [\n        {\n            path: &quot;/main&quot;,\n            component: Main,\n            exact: false, //是否精准匹配\n        },\n        {\n            redirect: true, //重定向\n            path: &quot;/&quot;,\n            to: &quot;/main/start-doc&quot;,\n        },\n        {\n            redirect: true,\n            path: &quot;/main&quot;, //重定向\n            to: &quot;/main/start-doc&quot;,\n        },\n    ],\n    footerLinks: null,\n    footerCopyright: null,\n};\nexport default ZappHOC(pageConfig);</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig\">pageConfig</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>routerType</td>\n            <td>路由模式</td>\n            <td>history | hash</td>\n            <td>history</td>\n        </tr>\n        <tr>\n            <td>rootRoutes</td>\n            <td>根路由配置,结构请看上面的代码</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>footerLinks</td>\n            <td>用于覆盖ZpageWraperHOC默认的footerLinks，结构请查看ZpageFooter的links</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>footerCopyright</td>\n            <td>用于覆盖ZpageWraperHOC默认的footerCopyright，结构请查看ZpageFooter的copyright</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>responseKeys</td>\n            <td>用于转义后台接口响应体数据的key，前提后台接口response响应体应该是 { code:状态码,data:数据,msg:提示信息 }, </td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig-responsekeys\">pageConfig.responseKeys</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>listType</td>\n            <td>列表类型的响应体key，默认{\n                list: \"list\",\n                totalCount: \"totalCount\",\n                totalPage: \"totalPage\",\n            }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ })

}]);
//# sourceMappingURL=17.1471882e383d8e5bd6dc.js.map