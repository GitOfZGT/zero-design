(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "eb3m":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zbgimage\">展示图片：ZbgImage</h1>\n<p><code>ZbgImage</code>是以背景图的方式展示一张图片</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">//默认：无url\n&lt;ZbgImage style={{height:&quot;240px&quot;}}/&gt;\n//有url，position:&quot;center&quot;\n&lt;ZbgImage style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;\n//有url，position:&quot;top&quot;\n&lt;ZbgImage position=&quot;top&quot; style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;</code></pre>\n<h2 id=\"zbgimage-props\">ZbgImage 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>url</td>\n            <td>背景图片路径</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>position</td>\n            <td>背景图片在可视区域的位置</td>\n            <td>center | top</td>\n            <td>center</td>\n        </tr>\n        <tr>\n            <td>onClick</td>\n            <td>点击事件</td>\n            <td>funtion(e){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>children</td>\n            <td>可选择放一些子内容通过绝对定位浮于背景图之上</td>\n            <td>ReactNode</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ "xwxM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JBb0");
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M0Qm");
/* harmony import */ var zerod_components_ZbgImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LYpx");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MhH0");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FcZB");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ratc");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0j8+");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0kOG");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZbgImage_doc_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("eb3m");
/* harmony import */ var zerod_components_ZbgImage_doc_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZbgImage_doc_md__WEBPACK_IMPORTED_MODULE_10__);










var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZbgImage_doc_md__WEBPACK_IMPORTED_MODULE_10___default.a, {
  demo1: function demo1(tool) {
    console.log(tool);

    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Myjavascript);

        return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Myjavascript).apply(this, arguments));
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          var height = "300px";
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            gutter: 20
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
            span: 8
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(zerod_components_ZbgImage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
            style: {
              height: height
            }
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            className: "z-text-center z-margin-top-15"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "z-text-gray z-margin-left-5"
          }, "\u9ED8\u8BA4\uFF1A\u65E0url"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
            span: 8
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(zerod_components_ZbgImage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
            style: {
              height: height
            },
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598348104&di=4e0d2935d8b0d5f0d716b61652354e16&imgtype=0&src=http%3A%2F%2Fpic2016.ytqmx.com%3A82%2F2016%2F0804%2F36%2F4.jpg%2521960.jpg"
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            className: "z-text-center z-margin-top-15"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "z-text-gray z-margin-left-5"
          }, "\u6709url\uFF0Cposition:\"center\""))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
            span: 8
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(zerod_components_ZbgImage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
            position: "top",
            style: {
              height: height
            },
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598529458&di=be8bc62d177075515b4d4c82a5ea6cc8&imgtype=0&src=http%3A%2F%2Fimg2015.zdface.com%2F20180720%2Fe4b632ad21ce12e7b5c731a2475aff5a.jpg"
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            className: "z-text-center z-margin-top-15"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "z-text-gray z-margin-left-5"
          }, "\u6709url\uFF0Cposition:\"top\""))));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Myjavascript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=21.bedab60abccbaebd5417.js.map