(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "BIrZ":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-ztabs\">标签页：Ztabs</h1>\n<p><code>Ztabs</code>是将<code>antd</code>的<code>Tabs</code>、<code>Tabs.TabPane</code> 的结构转成数据结构直接渲染的方式，</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Ztabs } from &quot;zerod&quot;;\n\nclass Myjavascript extends ZpureComponent {\n    tabPanes = [\n        { tab: &quot;基本信息&quot;, key: &quot;1&quot;, content: &quot;基本信息内容&quot; },\n        { tab: &quot;配置信息&quot;, key: &quot;2&quot;, content: &quot;配置信息内容&quot; },\n        {\n            tab: &quot;其他信息&quot;,\n            key: &quot;3&quot;,\n            content: () =&gt; {\n                return &quot;其他内容&quot;;\n            },\n        },\n    ];\n    render() {\n        return &lt;Ztabs tabPanes={this.tabPanes} /&gt;;\n    }\n}</code></pre>\n<h2 id=\"ztabs-props\">Ztabs 的 Props</h2>\n<p><code>Ztabs</code>除了<code>tabPanes</code>参数，还有同<a href=\"https://ant.design/components/tabs-cn/\">Antd 的 Tabs 组件的参数</a></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>tabPanes</td>\n            <td>选项卡数据，数据结构有{tab ：tab名称，key:对应Antd的Tabs组件 activeKey，content：string | ()=>内容 }</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "IJP7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Ztabs2 = _interopRequireDefault(__webpack_require__("VQbk"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("BIrZ"));

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
        _this.tabPanes = [{
          tab: "基本信息",
          key: "1",
          content: "基本信息内容"
        }, {
          tab: "配置信息",
          key: "2",
          content: "配置信息内容"
        }, {
          tab: "其他信息",
          key: "3",
          content: function content() {
            return "其他内容";
          }
        }];
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_Ztabs2.default, {
            tabPanes: this.tabPanes
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
//# sourceMappingURL=40.dc161803849a2ecec832.js.map