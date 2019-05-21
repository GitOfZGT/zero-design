(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "WDm9":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"label-value-zlabelinput\">label+value输入框：ZlabelInput</h1>\n<p><code>ZlabelInput</code> 有两个输入框组成，得到的值如 {label:&quot;男&quot;,value:&quot;1&quot;}</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">class Myjavascript extends ZpureComponent {\n    state = {\n        labelValue: null,\n    };\n    onChange = (value, e) =&gt; {\n        this.setState({\n            labelValue: value,\n        });\n    };\n    render() {\n        return (\n            &lt;ZlabelInput\n                labelPlaceholder=&quot;请输入label&quot;\n                valuePlaceholder=&quot;请输入value&quot;\n                value={this.state.labelValue}\n                onChange={this.onChange}\n                style={{ width: &quot;300px&quot; }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zlabelinput-props\">ZlabelInput 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>value</td>\n            <td>两个输入框的值，{label:\"\",value:\"\"}</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>输入框内容变化时的回调</td>\n            <td>(value,e)=>{}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>labelPlaceholder</td>\n            <td>label输入框没有值时显示的内容</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>valuePlaceholder</td>\n            <td>value输入框没有值时显示的内容</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>disabled</td>\n            <td>是否禁用状态，默认false</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>labelSpan</td>\n            <td>label输入框占总宽度的格数 1~24</td>\n            <td>number</td>\n            <td>10</td>\n        </tr>\n        <tr>\n            <td>valueSpan</td>\n            <td>value输入框占总宽度的格数 1~24</td>\n            <td>number</td>\n            <td>14</td>\n        </tr>\n        <tr>\n            <td>size</td>\n            <td>输入框的尺寸</td>\n            <td>default | small | large</td>\n            <td>default</td>\n        </tr>\n        <tr>\n            <td>sync</td>\n            <td>是否label输入和value输入同步</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ "yzGP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_ZlabelInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qcaH");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MhH0");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FcZB");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ratc");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0j8+");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0kOG");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zerod_components_zTool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/sSO");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZlabelInput_doc_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("WDm9");
/* harmony import */ var zerod_components_ZlabelInput_doc_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZlabelInput_doc_md__WEBPACK_IMPORTED_MODULE_9__);








var addClass = zerod_components_zTool__WEBPACK_IMPORTED_MODULE_6__[/* default */ "g"].addClass,
    removeClass = zerod_components_zTool__WEBPACK_IMPORTED_MODULE_6__[/* default */ "g"].removeClass;

var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZlabelInput_doc_md__WEBPACK_IMPORTED_MODULE_9___default.a, {
  demo1: function demo1() {
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
          labelValue: null
        };

        _this.onChange = function (value, e) {
          _this.setState({
            labelValue: value
          });
        };

        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(zerod_components_ZlabelInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            labelPlaceholder: "\u8BF7\u8F93\u5165label",
            valuePlaceholder: "\u8BF7\u8F93\u5165value",
            value: this.state.labelValue,
            onChange: this.onChange,
            style: {
              width: "300px"
            }
          });
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Myjavascript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=27.4cd1c580300d7b270386.js.map