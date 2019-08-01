(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "BIrZ":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-ztabs\">标签页：Ztabs</h1>\n<p><code>Ztabs</code>是将<code>antd</code>的<code>Tabs</code>、<code>Tabs.TabPane</code> 的结构转成数据结构直接渲染的方式，</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Ztabs } from &quot;zerod&quot;;\n\nclass Myjavascript extends ZpureComponent {\n    tabPanes = [\n        { tab: &quot;基本信息&quot;, key: &quot;1&quot;, content: &quot;基本信息内容&quot; },\n        { tab: &quot;配置信息&quot;, key: &quot;2&quot;, content: &quot;配置信息内容&quot; },\n        {\n            tab: &quot;其他信息&quot;,\n            key: &quot;3&quot;,\n            content: () =&gt; {\n                return &quot;其他内容&quot;;\n            },\n        },\n    ];\n    render() {\n        return &lt;Ztabs tabPanes={this.tabPanes} /&gt;;\n    }\n}</code></pre>\n<h2 id=\"ztabs-props\">Ztabs 的 Props</h2>\n<p><code>Ztabs</code>除了<code>tabPanes</code>参数，还有同<a href=\"https://ant.design/components/tabs-cn/\">Antd 的 Tabs 组件的参数</a></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>tabPanes</td>\n            <td>选项卡数据，数据结构有{tab ：tab名称，key:对应Antd的Tabs组件 activeKey，content：string | ()=>内容 }</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "IJP7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_Ztabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VQbk");
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
/* harmony import */ var zerod_components_Ztabs_doc_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BIrZ");
/* harmony import */ var zerod_components_Ztabs_doc_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zerod_components_Ztabs_doc_md__WEBPACK_IMPORTED_MODULE_8__);








var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_Ztabs_doc_md__WEBPACK_IMPORTED_MODULE_8___default.a, {
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

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(zerod_components_Ztabs__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            tabPanes: this.tabPanes
          });
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Myjavascript, null);
  }
}));

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

/***/ })

}]);
//# sourceMappingURL=36.71e10b0edb3011eed452.js.map