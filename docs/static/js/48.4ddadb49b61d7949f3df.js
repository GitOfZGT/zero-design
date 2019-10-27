(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "0yJm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC;
var doc = "\n<h1>\u4EE3\u7801\u9AD8\u4EAE\u7EC4\u4EF6\uFF1AZcodeHighlight</h1>\n<p>\n    ZcodeHighlight\u4F9D\u8D56\u4E8E\u4EE3\u7801\u9AD8\u4EAE\u63D2\u4EF6prismjs,\u9ED8\u8BA4\u652F\u6301html\u8BED\u8A00,\u5982\u9700\u652F\u6301\u66F4\u591A\u8BED\u8A00\uFF0C\u8BF7\u5728zerod-admin-webpack\u811A\u624B\u67B6\u7684.babelrc\u6587\u4EF6\u4E2D\u4FEE\u6539\uFF1A\n</p>\n<pre class=\"line-numbers\">\n    <code class=\"language-json\" >\n        \"plugins\": [\n            [\"prismjs\", {\n                \"languages\": [\"javascript\", \"css\", \"scss\", \"jsx\",\"http\",\"icon\",\"java\",\"json\",\"yaml\"],//\u8BBE\u7F6E\u652F\u6301\u7684\u8BED\u8A00\uFF0C\n                \"plugins\": [\"line-numbers\"],\n                \"theme\": \"tomorrow\",//\u4E3B\u9898\n                \"css\": true\n            }]\n    </code>\n</pre>";

var _default = AmdDocHOC(doc);

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

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=48.4ddadb49b61d7949f3df.js.map