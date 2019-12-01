(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "G3sx":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-ztimerange\">时间范围：ZtimeRange</h1>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtimeRange } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        times: [],\n    };\n    onChange = (times, timesString) =&gt; {\n        console.log(times, timesString);\n        this.setState({\n            times,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;300px&quot; }}&gt;\n                &lt;ZtimeRange value={this.state.times} onChange={this.onChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nreturn &lt;Myjavascript /&gt;;</code></pre>\n<h2 id=\"ztimerange-props\">ZtimeRange 的 props</h2>\n<p>可追 <code>className</code>、<code>style</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>defaultValue</td>\n<td>ZtimeRange 的默认值,当 value 存在时，defaultValue 无效</td>\n<td>moment []</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>value</td>\n<td>指定 ZtimeRange 的选中值</td>\n<td>moment []</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>ZtimeRange 的值改变时触发</td>\n<td>function(times: moment[] , timeStrings : string[]) {}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>format</td>\n<td>展示的时间格式</td>\n<td>string</td>\n<td>&quot;HH:mm:ss&quot;</td>\n</tr>\n<tr>\n<td>timePickerProps</td>\n<td><a href=\"https://ant.design/components/time-picker-cn/\">Antd 的 TimePicker 的属性</a>的其他属性</td>\n<td>object</td>\n<td>{}</td>\n</tr>\n</tbody></table>\n";

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

/***/ "nHhu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZtimeRange2 = _interopRequireDefault(__webpack_require__("shXs"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("G3sx"));

// import { Row, Col } from "antd";
var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1(tool) {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          times: []
        };

        _this.onChange = function (times, timesString) {
          console.log(times, timesString);

          _this.setState({
            times: times
          });
        };

        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            style: {
              width: "300px"
            }
          }, _react.default.createElement(_ZtimeRange2.default, {
            value: this.state.times,
            onChange: this.onChange
          }));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=41.cd241bd86461091b83b5.js.map