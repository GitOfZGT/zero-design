(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "1hJj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(359);

/***/ }),

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "WDm9":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"label-value-zlabelinput\">label+value输入框：ZlabelInput</h1>\n<p><code>ZlabelInput</code> 有两个输入框组成，得到的值如 {label:&quot;男&quot;,value:&quot;1&quot;}</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">class Myjavascript extends ZpureComponent {\n    state = {\n        labelValue: null,\n    };\n    onChange = (value, e) =&gt; {\n        this.setState({\n            labelValue: value,\n        });\n    };\n    render() {\n        return (\n            &lt;ZlabelInput\n                labelPlaceholder=&quot;请输入label&quot;\n                valuePlaceholder=&quot;请输入value&quot;\n                value={this.state.labelValue}\n                onChange={this.onChange}\n                style={{ width: &quot;300px&quot; }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zlabelinput-props\">ZlabelInput 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>value</td>\n            <td>两个输入框的值，{label:\"\",value:\"\"}</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>输入框内容变化时的回调</td>\n            <td>(value,e)=>{}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>labelPlaceholder</td>\n            <td>label输入框没有值时显示的内容</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>valuePlaceholder</td>\n            <td>value输入框没有值时显示的内容</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>disabled</td>\n            <td>是否禁用状态，默认false</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>labelSpan</td>\n            <td>label输入框占总宽度的格数 1~24</td>\n            <td>number</td>\n            <td>10</td>\n        </tr>\n        <tr>\n            <td>valueSpan</td>\n            <td>value输入框占总宽度的格数 1~24</td>\n            <td>number</td>\n            <td>14</td>\n        </tr>\n        <tr>\n            <td>size</td>\n            <td>输入框的尺寸</td>\n            <td>default | small | large</td>\n            <td>default</td>\n        </tr>\n        <tr>\n            <td>sync</td>\n            <td>是否label输入和value输入同步</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "WFjJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(316);

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

/***/ "rEGp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(366);

/***/ }),

/***/ "tLB3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(438);

/***/ }),

/***/ "ut/Y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(329);

/***/ }),

/***/ "xYSL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(363);

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ }),

/***/ "yGk4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(371);

/***/ }),

/***/ "yzGP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZlabelInput2 = _interopRequireDefault(__webpack_require__("qcaH"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _zTool2 = _interopRequireDefault(__webpack_require__("/sSO"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("WDm9"));

var addClass = _zTool2.default.addClass,
    removeClass = _zTool2.default.removeClass;
var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
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
          labelValue: null
        };

        _this.onChange = function (value, e) {
          _this.setState({
            labelValue: value
          });
        };

        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_ZlabelInput2.default, {
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
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=9.3ae1f49466288aa79b0c.js.map