(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "LZzK":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"zwindowgapheight\">ZwindowGapHeight</h1>\n<p><code>ZwindowGapHeight</code>是给子 dom 元素设置: height(高度) = 视窗高度 - 子元素当前距离视窗顶部距离 - gap</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZwindowGapHeight, ZpageWrapper } from &quot;zerod&quot;;\nimport { Row, Col } from &quot;antd&quot;;\nclass MyComponent extends React.PureComponent {\n    render() {\n        return (\n            &lt;ZpageWrapper\n                pageHeader={{\n                    show: true,\n                    title: &quot;&quot;,\n                    content: &quot;&quot;,\n                }}\n            &gt;\n                &lt;div&gt;\n                    &lt;Row gutter={16}&gt;\n                        &lt;Col md={10}&gt;\n                            &lt;ZwindowGapHeight querySelector=&quot;.z-panel&quot; gap={20}&gt;\n                                //此节点必须是html元素\n                                &lt;div&gt;\n                                    //此节点可以是任意内容\n                                    &lt;div className=&quot;z-panel&quot;&gt;\n                                        &lt;div className=&quot;z-panel-heading&quot;&gt;panel-heading&lt;/div&gt;\n                                        &lt;div className=&quot;z-panel-body&quot;&gt;panel-body&lt;/div&gt;\n                                    &lt;/div&gt;\n                                &lt;/div&gt;\n                            &lt;/ZwindowGapHeight&gt;\n                        &lt;/Col&gt;\n                        &lt;Col md={14}&gt;右边&lt;/Col&gt;\n                    &lt;/Row&gt;\n                &lt;/div&gt;\n            &lt;/ZpageWrapper&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zwindowgapheight-props\">ZwindowGapHeight 的 props</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>children</td>\n<td>必须是 HTMLElement,如 section、div 等</td>\n<td>element</td>\n<td>--</td>\n</tr>\n<tr>\n<td>querySelector</td>\n<td>实际要设置 height 的那个元素的选择器（如 &#39;.z-panel&#39;）, 或者 具体的 dom 元素 , 默认取 children</td>\n<td>string | element</td>\n<td>--</td>\n</tr>\n<tr>\n<td>gap</td>\n<td>额外要减去的距离</td>\n<td>number</td>\n<td>0</td>\n</tr>\n</tbody></table>\n";

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

/***/ "nH4L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  children: _propTypes.default.element,
  querySelector: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  gap: _propTypes.default.number
};
var defaultProps = {
  gap: 0
};

var ZwindowGapHeight = _react.default.forwardRef(function (props, ref) {
  var domRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (domRef.current) {
      var el = domRef.current;

      if (props.querySelector && typeof props.querySelector === "string") {
        el = el.querySelector(props.querySelector);
      } else if (props.querySelector && domRef.current.contains(props.querySelector)) {
        el = props.querySelector;
      }

      var client = el.getBoundingClientRect();
      el.style.height = "calc(100vh - ".concat(client.top + props.gap, "px)");
      el.style.overflow = "auto";
    }

    return function () {
      domRef.current = null;
    };
  }, [props.gap]);

  if (_react.default.isValidElement(props.children)) {
    return _react.default.cloneElement(props.children, _objectSpread({}, props.children.props, {
      ref: domRef
    }));
  } else {
    return props.children;
  }
});

ZwindowGapHeight.propTypes = propTypes;
ZwindowGapHeight.defaultProps = defaultProps;

var _default = _react.default.memo(ZwindowGapHeight);

exports.default = _default;

/***/ }),

/***/ "qHp4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZpageWrapper2 = _interopRequireDefault(__webpack_require__("e8xx"));

var _row = _interopRequireDefault(__webpack_require__("BMrR"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _ZwindowGapHeight2 = _interopRequireDefault(__webpack_require__("nH4L"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("LZzK"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC,
    AshowDemoHOC = _loadHOC.default.AshowDemoHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var MyScript = AshowDemoHOC(_react.default.createElement(_ZpageWrapper2.default, {
      pageHeader: {
        show: true,
        title: "",
        content: ""
      }
    }, _react.default.createElement("div", null, _react.default.createElement(_row.default, {
      gutter: 16
    }, _react.default.createElement(_col.default, {
      md: 10
    }, _react.default.createElement(_ZwindowGapHeight2.default, {
      querySelector: ".z-panel",
      gap: 20
    }, _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "z-panel"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "panel-heading"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "panel-body"))))), _react.default.createElement(_col.default, {
      md: 14
    }, "\u53F3\u8FB9")))), false);
    return _react.default.createElement(MyScript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=20.d94460274415ac1a5410.js.map