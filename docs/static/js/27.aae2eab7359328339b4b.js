(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "NWuN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _Zbutton2 = _interopRequireDefault(__webpack_require__("nhtL"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("U/He"));

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
          return _react.default.createElement("span", null, _react.default.createElement(_Zbutton2.default, {
            type: "default"
          }, "default"), _react.default.createElement(_Zbutton2.default, {
            type: "primary"
          }, "primary"), _react.default.createElement(_Zbutton2.default, {
            type: "success"
          }, "success"), _react.default.createElement(_Zbutton2.default, {
            type: "danger"
          }, "danger"), _react.default.createElement(_Zbutton2.default, {
            type: "danger",
            disabled: true
          }, "disabled"), _react.default.createElement(_Zbutton2.default, {
            type: "default",
            size: "small"
          }, "default small"), _react.default.createElement(_Zbutton2.default, {
            type: "primary",
            size: "small"
          }, "primary small"), _react.default.createElement(_Zbutton2.default, {
            type: "success",
            size: "small"
          }, "success small"), _react.default.createElement(_Zbutton2.default, {
            type: "danger",
            size: "small"
          }, "danger small"));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  },
  demo2: function demo2() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent2);

      function Myjavascript() {
        (0, _classCallCheck2.default)(this, Myjavascript);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Myjavascript).apply(this, arguments));
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_button.default, {
            type: "primary",
            className: "z-btn-success"
          }, "\u6309\u94AE");
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "U/He":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-12-25 17:45:32\n * @LastEditors: zgt\n * @LastEditTime: 2019-08-15 16:02:04\n * @Description: file content\n -->\n\n<h1 id=\"-zbutton-antd-button-\">按钮：Zbutton （保留可用，完全就是 antd 的 Button）</h1>\n<p>之前考虑 button 在 Table 和 Tree 内渲染消耗性能很大(多数据情况下明显)，启用了 Zbutton 组件，但一次展示大量数据依然性能也同样不乐观，大量数据列表的渲染应该从数据角度处理，所以 Zbutton 的存在意义不大且没有 antd 的 Button 完善，所以 Zbutton 保留可用并且改用转发 antd 的 Button 而已（Zbutton就是Button），之后建议直接使用 Button</p>\n<p><del><code>Zbutton</code> 与 <code>Antd 的 Button</code> 不同在于，<code>Zbutton</code>是 span 标签渲染的，这是因为在一些列表中渲染 button 标签，数据多的情况下消耗的性能巨大，如 Table、尤其在 Tree 当中，使用 span 标签明显有提升渲染性能。</del></p>\n<p>antd 的 Button 没有success类型的颜色， 当type===&quot;primary&quot;时可以加 className = &quot;z-btn-success&quot; 将按钮颜色改为success类型的</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"z-btn-success\"></div>\n\n<pre><code class=\"language-jsx\">import {Button} from &#39;antd&#39;\n\n&lt;Button type=&quot;primary&quot; className=&quot;z-btn-success&quot;&gt;按钮&lt;/Button&gt;</code></pre>\n<!-- 1、基本使用\n\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n```jsx\nclass Myjavascript extends ZpureComponent {\n    render() {\n        return (\n            <span>\n                <Zbutton type=\"default\">default</Zbutton>\n                <Zbutton type=\"primary\">primary</Zbutton>\n                <Zbutton type=\"success\">success</Zbutton>\n                <Zbutton type=\"danger\">danger</Zbutton>\n                <Zbutton type=\"danger\" disabled>\n                    disabled\n                </Zbutton>\n                <Zbutton type=\"default\" size=\"small\">\n                    default\n                </Zbutton>\n                <Zbutton type=\"primary\" size=\"small\">\n                    primary\n                </Zbutton>\n                <Zbutton type=\"success\" size=\"small\">\n                    success\n                </Zbutton>\n                <Zbutton type=\"danger\" size=\"small\">\n                    danger\n                </Zbutton>\n            </span>\n        );\n    }\n}\n``` -->\n\n<del>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>type</td>\n            <td>default | primary | success | danger</td>\n            <td>string</td>\n            <td>default</td>\n        </tr>\n        <tr>\n            <td>size</td>\n            <td>normal | small</td>\n            <td>string</td>\n            <td>normal</td>\n        </tr>\n        <tr>\n            <td>onClick</td>\n            <td>点击事件</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>disabled</td>\n            <td>禁用状态</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n</del>\n";

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
//# sourceMappingURL=27.aae2eab7359328339b4b.js.map