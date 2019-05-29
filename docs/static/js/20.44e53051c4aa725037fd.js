(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

/***/ "sCSN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vEZV");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zerod_components_ZpageWraperHOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kB6t");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZpageWrapper_doc_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xRap");
/* harmony import */ var zerod_components_ZpageWrapper_doc_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZpageWrapper_doc_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_Main_component_doc_ZpageHeader_doc_pageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3P0Q");




var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].AmdDocHOC,
    AshowDemoHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].AshowDemoHOC;


/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZpageWrapper_doc_md__WEBPACK_IMPORTED_MODULE_4___default.a, {
  demo1: function demo1() {
    var PageWraper = Object(zerod_components_ZpageWraperHOC__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();

    var newpageHeader = _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      show: true
    }, _views_Main_component_doc_ZpageHeader_doc_pageHeader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);

    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageWraper, {
      pageHeader: newpageHeader
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "z-panel"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "z-panel-body"
    }, "\u4E2D\u95F4\u5185\u5BB9"))), true);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MyScript, null);
  }
}));

/***/ }),

/***/ "xRap":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zpagewrapper\">页面头尾结构：ZpageWrapper</h1>\n<p><code>ZpageWrapper</code>是由之前的<code>ZpageWraperHOC</code>改名而来，等效于<code>ZpageWraperHOC()</code>，是一个页面头尾结构的普通组件；之前的<code>ZpageWraperHOC</code>依然可用。</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageWraperHOC } from &quot;zerod&quot;;\nconst PageWraper = ZpageWraperHOC();\nconst pageHeader = {\n    show: true,\n    trademark: (\n        &lt;img\n            src=&quot;https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png&quot;\n            width=&quot;60&quot;\n            className=&quot;z-margin-right-15&quot;\n        /&gt;\n    ),\n    // array&gt;[object] | null,如果是null则不显示面包屑\n    breadcrumbRoutes: [\n        { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n        { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n    ],\n    // any\n    title: &quot;服务器配置&quot;,\n    //any\n    content:\n        &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n    //element | node\n    rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n};\n\n&lt;PageWraper pageHeader={pageHeader}&gt;\n    &lt;div className=&quot;z-panel&quot;&gt;\n        &lt;div className=&quot;z-panel-body&quot;&gt;中间内容&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/PageWraper&gt;;</code></pre>\n<h2 id=\"zpagewrapper-props\">ZpageWrapper 的 Props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>pageHeader</td>\n            <td>页头内容,除了show属性(默认false)，其他属性同 <span class=\"z-history-href\" data-path=\"/main/component-doc/ZpageHeader-doc\">组件/ZpageHeader</span> 的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>pageFooter</td>\n            <td>页尾内容,除了show属性(默认true)，其他属性同 <span class=\"z-history-href\" data-path=\"/main/component-doc/ZpageFooter-doc\">组件/pageFooter</span> 的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>hasBodyPadding</td>\n            <td>中间部分是否有padding值</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>showBreadcrumb</td>\n            <td>是否显示pageHeader面包屑</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>titleFromLasterBreadcrumb</td>\n            <td>pageHeader的title是否来自面包屑的最后一个名称</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ })

}]);
//# sourceMappingURL=20.44e53051c4aa725037fd.js.map