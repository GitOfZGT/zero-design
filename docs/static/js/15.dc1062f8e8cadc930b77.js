(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "Fnhc":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zcolorpicker\">颜色选择器：ZcolorPicker</h1>\n<p><code>ZcolorPicker</code>是一个颜色选择器控件，支持在<code>Form</code>、<code>Zform</code>等表单中使用</p>\n<p>依赖 <a href=\"http://casesandberg.github.io/react-color/\" target=\"_blank\">react-color 库</a> ，目前只选用了<code>react-color</code>的<code>SketchPicker</code>组件</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZcolorPicker } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    state = {\n        color: &quot;#FFFFFF&quot;,\n    };\n    colorChange = (value) =&gt; {\n        console.log(value);\n    };\n    picker={\n        style:{width:&quot;40px&quot;}\n        valueType:&quot;hex&quot;\n    }\n    render() {\n        return &lt;ZcolorPicker {...this.picker} value={this.state.state} onChange={this.colorChange} /&gt;;\n    }\n}</code></pre>\n<h2 id=\"zcolorpicker-props\">ZcolorPicker 的 props</h2>\n<p>可追加<code>className</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>valueType</td>\n<td>颜色值类型,hex:十六进制模式，rgb：RGB 模式(包括 rgba)</td>\n<td>hex</td>\n<td>rgb</td>\n</tr>\n<tr>\n<td>value</td>\n<td>颜色值，支持十六进制和 RGB 模式，如 &quot;#FFFFFF&quot;、&quot;rgba(255,214,21,0.9)&quot;</td>\n<td>string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>第一次渲染的颜色值，支持十六进制和 RGB 模式，如 &quot;#FFFFFF&quot;、&quot;rgba(255,214,21,0.9)&quot;</td>\n<td>string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>颜色值改变后触发</td>\n<td>(value,color)=&gt;{}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody></table>\n";

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(497);

/***/ }),

/***/ "e1N5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(316);

/***/ }),

/***/ "g6qu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_ZcolorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FOOf");
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
/* harmony import */ var zerod_components_ZcolorPicker_doc_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Fnhc");
/* harmony import */ var zerod_components_ZcolorPicker_doc_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZcolorPicker_doc_md__WEBPACK_IMPORTED_MODULE_8__);







// import { Input, message } from "antd";

var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZcolorPicker_doc_md__WEBPACK_IMPORTED_MODULE_8___default.a, {
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Myjavascript);

        return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript).apply(this, arguments));
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(zerod_components_ZcolorPicker__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            style: {
              width: "40px"
            }
          });
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Myjavascript, null);
  }
}));

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
//# sourceMappingURL=15.dc1062f8e8cadc930b77.js.map