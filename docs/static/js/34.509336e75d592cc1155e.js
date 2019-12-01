(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Ztabs2 = _interopRequireDefault(__webpack_require__("VQbk"));

var _ZpageHeader2 = _interopRequireDefault(__webpack_require__("ie1H"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf4 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _reactRouterDom = __webpack_require__("eO8H");

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("vOQm"));

var _pageHeader = _interopRequireDefault(__webpack_require__("3P0Q"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf4.default)(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.pageHeader = _objectSpread({}, _pageHeader.default, {
          trademark: null
        });
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", null, "\u8131\u79BB\u6EDA\u52A8\u533A\u57DF"), _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_ZpageHeader2.default, (0, _extends2.default)({}, this.pageHeader, {
            ceiling: true
          }))));
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
        var _getPrototypeOf3;

        var _this2;

        (0, _classCallCheck2.default)(this, Myjavascript);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf4.default)(Myjavascript)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.pageHeader = _pageHeader.default;
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

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          var _this3 = this;

          return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_ZpageHeader2.default, (0, _extends2.default)({}, this.pageHeader, {
            children: function children() {
              return _react.default.createElement(_Ztabs2.default, {
                tabPanes: _this3.tabPanes
              });
            },
            ceiling: false
          })));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "vOQm":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-08-21 10:59:31\n * @LastEditors: zgt\n * @LastEditTime: 2019-09-03 19:45:58\n * @Description: file content\n -->\n\n<h1 id=\"-zpageheader\">页面头部组件：ZpageHeader</h1>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageHeader } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\n\nclass PageHeader extends ZpureComponent {\n    pageHeader = {\n        trademark: &lt;Icon type=&quot;cloud&quot; /&gt;,\n        // array&gt;[object] | null,如果是null则不显示面包屑\n        breadcrumbRoutes: [\n            { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n            { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n        ],\n        // any\n        title: &quot;服务器配置&quot;,\n        //any\n        content:\n            &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n    };\n    render() {\n        return (\n            &lt;ZpageHeader\n                trademark={this.pageHeader.trademark}\n                title={this.pageHeader.title}\n                content={this.pageHeader.content}\n                rightMoreContent={this.pageHeader.rightMoreContent}\n                breadcrumbRoutes={this.pageHeader.breadcrumbRoutes}\n                ceiling={true}\n            /&gt;\n        );\n    }\n}\n\nexport default PageHeader;</code></pre>\n<p>1、追加更多内容</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"使用children属性\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageHeader } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\n\nclass PageHeader extends ZpureComponent {\n    tabPanes = [\n        { tab: &quot;基本信息&quot;, key: &quot;1&quot;, content: null },\n        { tab: &quot;配置信息&quot;, key: &quot;2&quot;, content: null },\n        {\n            tab: &quot;其他信息&quot;,\n            key: &quot;3&quot;,\n            content: null,\n        },\n    ];\n    pageHeader = {\n        trademark: &lt;Icon type=&quot;cloud&quot; /&gt;,\n        // array&gt;[object] | null,如果是null则不显示面包屑\n        breadcrumbRoutes: [\n            { path: &quot;config&quot;, name: &quot;案例&quot;, link: false },\n            { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true },\n        ],\n        // any\n        title: &quot;服务器配置&quot;,\n        //any\n        content:\n            &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n        children: () =&gt; {\n            return &lt;Ztabs tabPanes={this.tabPanes} /&gt;;\n        },\n        ceiling: false,\n    };\n\n    render() {\n        return &lt;ZpageHeader {...this.pageHeader} /&gt;;\n    }\n}\n\nexport default PageHeader;</code></pre>\n<h2 id=\"zpageheader-props\">ZpageHeader 的 Props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>trademark</td>\n            <td>图标|图示</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> title</td>\n            <td>头部标题</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> content</td>\n            <td>头部描述说明</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> rightMoreContent</td>\n            <td>标题列的右边可添加更多内容</td>\n            <td>React.element | function | ReactNode</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>breadcrumbParams</td>\n            <td>面包屑路由参数</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>breadcrumbRoutes</td>\n            <td>面包屑routes，每个对象包括path、name、link等属性</td>\n            <td>array>[object] | null</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> children</td>\n            <td>更多内容</td>\n            <td>any | function(){return 内容}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>ceiling</td>\n            <td>是否脱离滚动区域</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=34.509336e75d592cc1155e.js.map