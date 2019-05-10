(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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

/***/ "qE8/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bMiI");
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zerod_components_Ztabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VQbk");
/* harmony import */ var zerod_components_ZpageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ie1H");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vEZV");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MhH0");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FcZB");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ratc");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0j8+");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("0kOG");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("o0/1");
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZpageHeader_doc_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("vOQm");
/* harmony import */ var zerod_components_ZpageHeader_doc_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZpageHeader_doc_md__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _views_Main_component_doc_ZpageHeader_doc_pageHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3P0Q");












var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].AmdDocHOC;


/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZpageHeader_doc_md__WEBPACK_IMPORTED_MODULE_12___default.a, {
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.pageHeader = _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, _views_Main_component_doc_ZpageHeader_doc_pageHeader__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
          trademark: null
        });
        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(zerod_components_ZpageHeader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], this.pageHeader));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Myjavascript, null);
  },
  demo2: function demo2() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Myjavascript, _React$PureComponent2);

      function Myjavascript() {
        var _getPrototypeOf3;

        var _this2;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Myjavascript);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (_getPrototypeOf3 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Myjavascript)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.pageHeader = _views_Main_component_doc_ZpageHeader_doc_pageHeader__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"];
        _this2.tabPanes = [{
          tab: "基本信息",
          key: "1",
          content: ""
        }, {
          tab: "配置信息",
          key: "2",
          content: ""
        }, {
          tab: "其他信息",
          key: "3",
          content: function content() {
            return "";
          }
        }];
        return _this2;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          var _this3 = this;

          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(zerod_components_ZpageHeader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.pageHeader, {
            children: function children() {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(zerod_components_Ztabs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
                tabPanes: _this3.tabPanes
              });
            }
          })));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Myjavascript, null);
  }
}));

/***/ }),

/***/ "vOQm":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zpageheader\">页面头部组件：ZpageHeader</h1>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageHeader } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\n\nclass PageHeader extends ZpureComponent {\n    pageHeader = {\n        trademark: &lt;Icon type=&quot;cloud&quot; /&gt;,\n        // array&gt;[object] | null,如果是null则不显示面包屑\n        breadcrumbRoutes: [\n            { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n            { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n        ],\n        // any\n        title: &quot;服务器配置&quot;,\n        //any\n        content:\n            &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n    };\n    render() {\n        return (\n            &lt;ZpageHeader\n                trademark={this.pageHeader.trademark}\n                title={this.pageHeader.title}\n                content={this.pageHeader.content}\n                rightMoreContent={this.pageHeader.rightMoreContent}\n                breadcrumbRoutes={this.pageHeader.breadcrumbRoutes}\n            /&gt;\n        );\n    }\n}\n\nexport default PageHeader;</code></pre>\n<p>1、追加更多内容</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"使用children属性\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageHeader } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\n\nclass PageHeader extends ZpureComponent {\n    tabPanes = [\n        { tab: &quot;基本信息&quot;, key: &quot;1&quot;, content: null },\n        { tab: &quot;配置信息&quot;, key: &quot;2&quot;, content: null },\n        {\n            tab: &quot;其他信息&quot;,\n            key: &quot;3&quot;,\n            content: null,\n        },\n    ];\n    pageHeader = {\n        trademark: &lt;Icon type=&quot;cloud&quot; /&gt;,\n        // array&gt;[object] | null,如果是null则不显示面包屑\n        breadcrumbRoutes: [\n            { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n            { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n        ],\n        // any\n        title: &quot;服务器配置&quot;,\n        //any\n        content:\n            &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n        children: () =&gt; {\n            return &lt;Ztabs tabPanes={this.tabPanes} /&gt;;\n        },\n    };\n\n    render() {\n        return &lt;ZpageHeader {...this.pageHeader} /&gt;;\n    }\n}\n\nexport default PageHeader;</code></pre>\n<h2 id=\"zpageheader-props\">ZpageHeader 的 Props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>trademark</td>\n            <td>图标|图示</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> title</td>\n            <td>头部标题</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> content</td>\n            <td>头部描述说明</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> rightMoreContent</td>\n            <td>标题列的右边可添加更多内容</td>\n            <td>React.element | function | ReactNode</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>breadcrumbParams</td>\n            <td>面包屑路由参数</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>breadcrumbRoutes</td>\n            <td>面包屑routes，每个对象包括path、name、link等属性</td>\n            <td>array>[object] | null</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> children</td>\n            <td>更多内容</td>\n            <td>any | function(){return 内容}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ })

}]);
//# sourceMappingURL=29.8329c5a4c7231626a770.js.map