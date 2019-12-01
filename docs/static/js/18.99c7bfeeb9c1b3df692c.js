(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "aX1M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZpageFooter2 = _interopRequireDefault(__webpack_require__("p1xe"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("bnU3"));

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
        _this.footerCopyright = _react.default.createElement("div", null, "Copyright ", _react.default.createElement(_icon.default, {
          type: "copyright"
        }), " ", new Date().getFullYear(), " \u534E\u4E91\u4E2D\u76DB-\u653F\u52A1\u4E8B\u4E1A\u90E8\u6280\u672F\u56E2\u961F\u51FA\u54C1");
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_ZpageFooter2.default, {
            links: this.footerLinks,
            copyright: this.footerCopyright
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

/***/ }),

/***/ "p1xe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZpageFooter = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _ZpureComponent2 = _interopRequireDefault(__webpack_require__("jY6J"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

__webpack_require__("AlJg");

var Com =
/*#__PURE__*/
function (_ZpureComponent) {
  (0, _inherits2.default)(Com, _ZpureComponent);

  function Com() {
    (0, _classCallCheck2.default)(this, Com);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Com).apply(this, arguments));
  }

  (0, _createClass2.default)(Com, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          links = _this$props.links,
          copyright = _this$props.copyright,
          className = _this$props.className,
          forwardRef = _this$props.forwardRef,
          ref = _this$props.ref,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["show", "links", "copyright", "className", "forwardRef", "ref"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: "z-page-footer ".concat(className ? className : ""),
        ref: forwardRef
      }, others), links ? _react.default.createElement("div", {
        className: "z-footer-link"
      }, links.map(function (link, i) {
        return _react.default.createElement("a", {
          key: link.key ? link.key : i,
          target: link.blankTarget ? "_blank" : "_self",
          href: link.href
        }, link.title);
      })) : null, copyright ? _react.default.createElement("div", {
        className: "z-footer-copyright"
      }, typeof copyright == "function" ? copyright() : copyright) : null);
    }
  }]);
  return Com;
}(_ZpureComponent2.default);

Com.propTypes = {
  links: _propTypes.default.arrayOf(_propTypes.default.object),
  copyright: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string])
};

var ZpageFooter = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(Com, (0, _extends2.default)({}, props, {
    forwardRef: ref
  }));
});

exports.ZpageFooter = ZpageFooter;
var _default = ZpageFooter;
exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=18.99c7bfeeb9c1b3df692c.js.map