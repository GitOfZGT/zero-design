(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "aX1M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_ZpageFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("p1xe");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4lw");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MhH0");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FcZB");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Ratc");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0j8+");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0kOG");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZpageFooter_doc_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bnU3");
/* harmony import */ var zerod_components_ZpageFooter_doc_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZpageFooter_doc_md__WEBPACK_IMPORTED_MODULE_9__);









var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZpageFooter_doc_md__WEBPACK_IMPORTED_MODULE_9___default.a, {
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.footerLinks = [{
          key: "hua-cloud",
          title: "华云中盛科技有限公司",
          href: "http://www.hua-cloud.com.cn/",
          blankTarget: true
        }, {
          key: "szhcf",
          title: "华成峰集团",
          href: "http://www.szhcf.com.cn/",
          blankTarget: true
        }];
        _this.footerCopyright = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Copyright ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
          type: "copyright"
        }), " ", new Date().getFullYear(), " \u534E\u4E91\u4E2D\u76DB-\u653F\u52A1\u4E8B\u4E1A\u90E8\u6280\u672F\u56E2\u961F\u51FA\u54C1");
        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(zerod_components_ZpageFooter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
            links: this.footerLinks,
            copyright: this.footerCopyright
          });
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Myjavascript, null);
  }
}));

/***/ }),

/***/ "bnU3":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zpagefooter\">页脚组件：ZpageFooter</h1>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageFooter } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\nclass PageFooter extends ZpureComponent {\n    footerLinks = [\n        {\n            key: &quot;hua-cloud&quot;,\n            title: &quot;华云中盛科技有限公司&quot;,\n            href: &quot;http://www.hua-cloud.com.cn/&quot;,\n            blankTarget: true,\n        },\n        {\n            key: &quot;szhcf&quot;,\n            title: &quot;华成峰集团&quot;,\n            href: &quot;http://www.szhcf.com.cn/&quot;,\n            blankTarget: true,\n        },\n    ];\n    footerCopyright = () =&gt; (\n        &lt;div&gt;\n            Copyright &lt;Icon type=&quot;copyright&quot; /&gt; 2018 华云中盛-政务事业部技术团队出品\n        &lt;/div&gt;\n    );\n    render() {\n        return &lt;ZpageFooter links={this.footerLinks} copyright={this.footerCopyright} /&gt;;\n    }\n}\n\nexport default PageFooter;</code></pre>\n<h2 id=\"zpagefooter-props\">ZpageFooter 的 Props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>links</td>\n            <td>快速链接</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> copyright</td>\n            <td>版权信息</td>\n            <td>string | function</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

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
//# sourceMappingURL=28.8b7cb1bc7761cbbb1cda.js.map