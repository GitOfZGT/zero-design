(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "0yJm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebhq");

var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AmdDocHOC;
var doc = "\n<h1>\u4EE3\u7801\u9AD8\u4EAE\u7EC4\u4EF6\uFF1AZcodeHighlight</h1>\n<p>\n    ZcodeHighlight\u4F9D\u8D56\u4E8E\u4EE3\u7801\u9AD8\u4EAE\u63D2\u4EF6prismjs,\u9ED8\u8BA4\u652F\u6301html\u8BED\u8A00,\u5982\u9700\u652F\u6301\u66F4\u591A\u8BED\u8A00\uFF0C\u8BF7\u5728zerod-admin-webpack\u811A\u624B\u67B6\u7684.babelrc\u6587\u4EF6\u4E2D\u4FEE\u6539\uFF1A\n</p>\n<pre class=\"line-numbers\">\n    <code class=\"language-json\" >\n        \"plugins\": [\n            [\"prismjs\", {\n                \"languages\": [\"javascript\", \"css\", \"scss\", \"jsx\",\"http\",\"icon\",\"java\",\"json\",\"yaml\"],//\u8BBE\u7F6E\u652F\u6301\u7684\u8BED\u8A00\uFF0C\n                \"plugins\": [\"line-numbers\"],\n                \"theme\": \"tomorrow\",//\u4E3B\u9898\n                \"css\": true\n            }]\n    </code>\n</pre>";
/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(doc));

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
//# sourceMappingURL=45.1c829e23ee5ce38630c6.js.map