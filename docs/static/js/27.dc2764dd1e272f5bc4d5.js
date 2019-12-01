(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _ZpageWraperHOC2 = _interopRequireDefault(__webpack_require__("kB6t"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("xRap"));

var _pageHeader = _interopRequireDefault(__webpack_require__("3P0Q"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AmdDocHOC = _loadHOC.default.AmdDocHOC,
    AshowDemoHOC = _loadHOC.default.AshowDemoHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var PageWraper = (0, _ZpageWraperHOC2.default)();

    var newpageHeader = _objectSpread({
      show: true
    }, _pageHeader.default);

    var MyScript = AshowDemoHOC(_react.default.createElement(PageWraper, {
      pageHeader: newpageHeader
    }, _react.default.createElement("div", {
      className: "z-panel"
    }, _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u4E2D\u95F4\u5185\u5BB9"))), true);
    return _react.default.createElement(MyScript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "xRap":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zpagewrapper\">页面头尾结构：ZpageWrapper</h1>\n<p><code>ZpageWrapper</code>是由之前的<code>ZpageWraperHOC</code>改名而来，等效于<code>ZpageWraperHOC()</code>，是一个页面头尾结构的普通组件；之前的<code>ZpageWraperHOC</code>依然可用。</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageWraperHOC } from &quot;zerod&quot;;\nconst PageWraper = ZpageWraperHOC();\nconst pageHeader = {\n    show: true,\n    trademark: (\n        &lt;img\n            src=&quot;https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png&quot;\n            width=&quot;60&quot;\n            className=&quot;z-margin-right-15&quot;\n        /&gt;\n    ),\n    // array&gt;[object] | null,如果是null则不显示面包屑\n    breadcrumbRoutes: [\n        { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n        { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n    ],\n    // any\n    title: &quot;服务器配置&quot;,\n    //any\n    content:\n        &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n    //element | node\n    rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n};\n\n&lt;PageWraper pageHeader={pageHeader}&gt;\n    &lt;div className=&quot;z-panel&quot;&gt;\n        &lt;div className=&quot;z-panel-body&quot;&gt;中间内容&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/PageWraper&gt;;</code></pre>\n<h2 id=\"zpagewrapper-props\">ZpageWrapper 的 Props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>pageHeader</td>\n            <td>页头内容,除了show属性(默认false)，其他属性同 <span class=\"z-history-href\" data-path=\"/main/component-doc/ZpageHeader-doc\">组件/ZpageHeader</span> 的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>pageFooter</td>\n            <td>页尾内容,除了show属性(默认true)，其他属性同 <span class=\"z-history-href\" data-path=\"/main/component-doc/ZpageFooter-doc\">组件/pageFooter</span> 的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>hasBodyPadding</td>\n            <td>中间部分是否有padding值</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>showBreadcrumb</td>\n            <td>是否显示pageHeader面包屑</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>titleFromLasterBreadcrumb</td>\n            <td>pageHeader的title是否来自面包屑的最后一个名称</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=27.dc2764dd1e272f5bc4d5.js.map