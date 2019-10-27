(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "Fnhc":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zcolorpicker\">颜色选择器：ZcolorPicker</h1>\n<p><code>ZcolorPicker</code>是一个颜色选择器控件，支持在<code>Form</code>、<code>Zform</code>等表单中使用</p>\n<p>依赖 <a href=\"http://casesandberg.github.io/react-color/\" target=\"_blank\">react-color 库</a> ，目前只选用了<code>react-color</code>的<code>SketchPicker</code>组件</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZcolorPicker } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    state = {\n        color: &quot;#FFFFFF&quot;,\n    };\n    colorChange = (value) =&gt; {\n        console.log(value);\n    };\n    picker={\n        style:{width:&quot;40px&quot;}\n        valueType:&quot;hex&quot;\n    }\n    render() {\n        return &lt;ZcolorPicker {...this.picker} value={this.state.state} onChange={this.colorChange} /&gt;;\n    }\n}</code></pre>\n<h2 id=\"zcolorpicker-props\">ZcolorPicker 的 props</h2>\n<p>可追加<code>className</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>valueType</td>\n<td>颜色值类型,hex:十六进制模式，rgb：RGB 模式(包括 rgba)</td>\n<td>hex</td>\n<td>rgb</td>\n</tr>\n<tr>\n<td>value</td>\n<td>颜色值，支持十六进制和 RGB 模式，如 &quot;#FFFFFF&quot;、&quot;rgba(255,214,21,0.9)&quot;</td>\n<td>string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>第一次渲染的颜色值，支持十六进制和 RGB 模式，如 &quot;#FFFFFF&quot;、&quot;rgba(255,214,21,0.9)&quot;</td>\n<td>string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>颜色值改变后触发</td>\n<td>(value,color)=&gt;{}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody></table>\n";

/***/ }),

/***/ "WFjJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(316);

/***/ }),

/***/ "g6qu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZcolorPicker2 = _interopRequireDefault(__webpack_require__("FOOf"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("Fnhc"));

// import { Input, message } from "antd";
var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        (0, _classCallCheck2.default)(this, Myjavascript);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Myjavascript).apply(this, arguments));
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_ZcolorPicker2.default, {
            style: {
              width: "40px"
            },
            defaultValue: "#BC29A0"
          });
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

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
//# sourceMappingURL=21.3c88a11db867401cfdcc.js.map