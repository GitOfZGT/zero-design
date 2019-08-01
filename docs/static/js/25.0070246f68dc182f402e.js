(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "0qhv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_Zinfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EKSK");
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AcHM");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wza8");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UiLq");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("g0Tb");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rIhE");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qFVM");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Wp/E");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_Zinfo_doc_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("A3gy");
/* harmony import */ var zerod_components_Zinfo_doc_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(zerod_components_Zinfo_doc_md__WEBPACK_IMPORTED_MODULE_10__);










var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_Zinfo_doc_md__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
        _this.items = [{
          key: "serviceCode",
          label: "服务编码",
          render: function render() {
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
              setTimeout(function () {
                resolve(function (value, record) {
                  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
                    color: "red"
                  }, value);
                });
              }, 5000);
            });
          }
        }, {
          key: "serviceName",
          label: "服务名称"
        }];
        _this.state = {
          data: {
            serviceCode: "IDDKKDSSDSD",
            serviceName: "测试治大国"
          }
        };
        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(zerod_components_Zinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            items: this.items,
            fieldValue: this.state.data
          });
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Myjavascript, null);
  }
}));

/***/ }),

/***/ "A3gy":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zinfo\">信息展示：Zinfo</h1>\n<p><code>Zinfo</code> 用于展示一组 label 和 value 的组件  </p>\n<p>继承了React.PureComponent  </p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Zinfo } from &quot;zerod&quot;;\nimport { Tag } from &quot;antd&quot;;\nclass Myjavascript extends ZpureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: () =&gt; {\n               //异步加载自定义项\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve((value, record) =&gt; {\n                            return &lt;Tag color=&quot;red&quot;&gt;{value}&lt;/Tag&gt;;\n                        });\n                    }, 5000);\n                });\n                //    return api.getOptions.then(re=&gt;{\n                //         return (value,record)=&gt;{\n                //               return 自定义内容\n                //         }\n                //     })\n            },\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n        },\n    ];\n    state = {\n        data: {\n            serviceCode: &quot;IDDKKDSSDSD&quot;,\n            serviceName: &quot;测试治大国&quot;,\n        },\n    };\n    render() {\n        return &lt;Zinfo items={this.items} fieldValue={this.state.data} /&gt;;\n    }\n}</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zinfo-props\">Zinfo 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>fieldValue</td>\n            <td>对应items中key属性的map对象, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"items-\">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>label区的宽度，默认\"160px\"</td>\n            <td>string</td>\n            <td>160px</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> render</td>\n            <td>自定义value钩子,render函数必须return一个函数。如果异步加载自定义内容：必须return的是Promise对象(这时候then回调里需return一个函数)。例如使用了后台接口：(form)=>api.getOptions.then(re=>{return <i class=\"zero-icon zerod-shengchangzhouqi\"></i>  (value,record)=>自定义内容)})</td>\n            <td>()=>{return function(value,record){return 自定义内容})}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:6,xl:8,lg:12,md:24}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

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
//# sourceMappingURL=25.0070246f68dc182f402e.js.map