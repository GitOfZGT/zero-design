(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "+xuy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _ZerodRootContext = _interopRequireDefault(__webpack_require__("ny2T"));

// import React from "react";
// import { Button } from "antd";
// import { ZerodRootContext } from "zerod";
var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_ZerodRootContext.default);

exports.default = _default;

/***/ }),

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

/***/ "ny2T":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"zerodrootcontext\">ZerodRootContext</h1>\n<p>在<code>ZappHOC</code>中启用了<code>ZerodRootContext</code>的上文，通过<code>ZerodRootContext.setConsumer(组件)</code>包装的组件，可以使用<code>this.props</code>调用以下东西：</p>\n<p>目前只有：</p>\n<h2 id=\"-footerlinks\">页面的底部链接：footerLinks</h2>\n<p>对应<code>ZappHOC</code>的 pageConfig.footerLinks</p>\n<h2 id=\"-footercopyright\">页面的底部版权信息：footerCopyright</h2>\n<p>对应<code>ZappHOC</code>的 pageConfig.footerCopyright</p>\n<h2 id=\"-key\">用于转发后台接口响应体数据的key</h2>\n<p>对应<code>ZappHOC</code>的 pageConfig.responseKeys</p>\n";

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=42.28b8456464e9c66be4a3.js.map