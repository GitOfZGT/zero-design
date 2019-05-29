(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "9Yq9":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zpageloading\">页面加载组件：ZpageLoading</h1>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"相对于最近的position:relative;的父元素的绝对定位，水平垂直显示loading\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageLoading, Zlayout } from &quot;zerod&quot;;\nimport { Button } from &quot;antd&quot;;\nclass Myjavascript extends ZpureComponent {\n    state = {\n        isShowLoading: false,\n    };\n    methods = {\n        onClick: () =&gt; {\n            this.setState({\n                isShowLoading: true,\n            });\n            setTimeout(() =&gt; {\n                this.setState({\n                    isShowLoading: false,\n                });\n            }, 5000);\n        },\n    };\n    render() {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;Button type=&quot;primary&quot; onClick={this.methods.onClick}&gt;\n                    显示loading\n                &lt;/Button&gt;\n                &lt;ZpageLoading showLoading={this.state.isShowLoading} /&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zpageloading-props\">ZpageLoading 的 Props</h2>\n<p>除了如下属性，还支持 <a href=\"https://ant.design/components/spin-cn/\">Antd 的 Spin 组件的属性</a></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>showLoading</td>\n<td>是否显示 , 可以不使用这个属性，通过 ref 取得 ZpageLoading 的实例调用 .methods.showLoading(show) ,也可以用 exportMethods 导出的参数调用</td>\n<td>boolean</td>\n<td>--</td>\n</tr>\n<tr>\n<td>exportMethods</td>\n<td>在 componentDidMount 导出组件内部可调用的方法，methods 请往下看</td>\n<td>function(methods){}</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<h2 id=\"zpageloading-methods\">ZpageLoading 的 methods</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值类型</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>showLoading</td>\n<td>ZpageLoading 在没有 showLoading 属性情况下使用</td>\n<td>methods.showLoading(show,tip)</td>\n<td>--</td>\n</tr>\n</tbody></table>\n";

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

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

/***/ "wOzl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("C6MB");
/* harmony import */ var zerod_components_ZpageLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/gcJ");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9DAX");
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
/* harmony import */ var zerod_components_ZpageLoading_doc_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("9Yq9");
/* harmony import */ var zerod_components_ZpageLoading_doc_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZpageLoading_doc_md__WEBPACK_IMPORTED_MODULE_10__);










var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZpageLoading_doc_md__WEBPACK_IMPORTED_MODULE_10___default.a, {
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          isShowLoading: false
        };
        _this.methods = {
          onClick: function onClick() {
            _this.setState({
              isShowLoading: true
            });

            setTimeout(function () {
              _this.setState({
                isShowLoading: false
              });
            }, 5000);
          }
        };
        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Template, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
            type: "primary",
            onClick: this.methods.onClick
          }, "\u663E\u793Aloading"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(zerod_components_ZpageLoading__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"], {
            showLoading: this.state.isShowLoading
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Myjavascript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=30.19780a01eaac983e8f4f.js.map