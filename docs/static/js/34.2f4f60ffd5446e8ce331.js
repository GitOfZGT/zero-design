(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "9Yq9":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zpageloading\">页面加载组件：ZpageLoading</h1>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"相对于最近的position:relative;的父元素的绝对定位，水平垂直显示loading\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZpageLoading, Zlayout } from &quot;zerod&quot;;\nimport { Button } from &quot;antd&quot;;\nclass Myjavascript extends ZpureComponent {\n    state = {\n        isShowLoading: false,\n    };\n    methods = {\n        onClick: () =&gt; {\n            this.setState({\n                isShowLoading: true,\n            });\n            setTimeout(() =&gt; {\n                this.setState({\n                    isShowLoading: false,\n                });\n            }, 5000);\n        },\n    };\n    render() {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;Button type=&quot;primary&quot; onClick={this.methods.onClick}&gt;\n                    显示loading\n                &lt;/Button&gt;\n                &lt;ZpageLoading showLoading={this.state.isShowLoading} /&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zpageloading-props\">ZpageLoading 的 Props</h2>\n<p>除了如下属性，还支持 <a href=\"https://ant.design/components/spin-cn/\">Antd 的 Spin 组件的属性</a></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>showLoading</td>\n<td>是否显示 , 可以不使用这个属性，通过 ref 取得 ZpageLoading 的实例调用 .methods.showLoading(show) ,也可以用 exportMethods 导出的参数调用</td>\n<td>boolean</td>\n<td>--</td>\n</tr>\n<tr>\n<td>exportMethods</td>\n<td>在 componentDidMount 导出组件内部可调用的方法，methods 请往下看</td>\n<td>function(methods){}</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<h2 id=\"zpageloading-methods\">ZpageLoading 的 methods</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值类型</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>showLoading</td>\n<td>ZpageLoading 在没有 showLoading 属性情况下使用</td>\n<td>methods.showLoading(show,tip)</td>\n<td>--</td>\n</tr>\n</tbody></table>\n";

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Zlayout2 = _interopRequireDefault(__webpack_require__("C6MB"));

var _ZpageLoading2 = _interopRequireDefault(__webpack_require__("/gcJ"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("9Yq9"));

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

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_Zlayout2.default.Template, null, _react.default.createElement(_button.default, {
            type: "primary",
            onClick: this.methods.onClick
          }, "\u663E\u793Aloading"), _react.default.createElement(_ZpageLoading2.default, {
            showLoading: this.state.isShowLoading
          }));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=34.2f4f60ffd5446e8ce331.js.map