(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "G3sx":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-ztimerange\">时间范围：ZtimeRange</h1>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtimeRange } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        times: [],\n    };\n    onChange = (times, timesString) =&gt; {\n        console.log(times, timesString);\n        this.setState({\n            times,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;300px&quot; }}&gt;\n                &lt;ZtimeRange value={this.state.times} onChange={this.onChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nreturn &lt;Myjavascript /&gt;;</code></pre>\n<h2 id=\"ztimerange-props\">ZtimeRange 的 props</h2>\n<p>可追 <code>className</code>、<code>style</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>defaultValue</td>\n<td>ZtimeRange 的默认值,当 value 存在时，defaultValue 无效</td>\n<td>moment []</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>value</td>\n<td>指定 ZtimeRange 的选中值</td>\n<td>moment []</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>ZtimeRange 的值改变时触发</td>\n<td>function(times: moment[] , timeStrings : string[]) {}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>format</td>\n<td>展示的时间格式</td>\n<td>string</td>\n<td>&quot;HH:mm:ss&quot;</td>\n</tr>\n<tr>\n<td>timePickerProps</td>\n<td><a href=\"https://ant.design/components/time-picker-cn/\">Antd 的 TimePicker 的属性</a>的其他属性</td>\n<td>object</td>\n<td>{}</td>\n</tr>\n</tbody></table>\n";

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(497);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_ZtimeRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("shXs");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UiLq");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g0Tb");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rIhE");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qFVM");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Wp/E");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZtimeRange_doc_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("G3sx");
/* harmony import */ var zerod_components_ZtimeRange_doc_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZtimeRange_doc_md__WEBPACK_IMPORTED_MODULE_8__);







// import { Row, Col } from "antd";

var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZtimeRange_doc_md__WEBPACK_IMPORTED_MODULE_8___default.a, {
  demo1: function demo1(tool) {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              width: "300px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(zerod_components_ZtimeRange__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            value: this.state.times,
            onChange: this.onChange
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Myjavascript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=37.0638902c1c9e4b6df415.js.map