(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "LZzK":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"zwindowgapheight\">ZwindowGapHeight</h1>\n<p><code>ZwindowGapHeight</code>是给子 dom 元素设置: height(高度) = 视窗高度 - 子元素当前距离视窗顶部距离 - gap</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZwindowGapHeight, ZpageWrapper } from &quot;zerod&quot;;\nimport { Row, Col } from &quot;antd&quot;;\nclass MyComponent extends React.PureComponent {\n    render() {\n        return (\n            &lt;ZpageWrapper\n                pageHeader={{\n                    show: true,\n                    title: &quot;&quot;,\n                    content: &quot;&quot;,\n                }}\n            &gt;\n                &lt;div&gt;\n                    &lt;Row gutter={16}&gt;\n                        &lt;Col md={10}&gt;\n                            &lt;ZwindowGapHeight querySelector=&quot;.z-panel&quot; gap={20}&gt;\n                                //此节点必须是html元素\n                                &lt;div&gt;\n                                    //此节点可以是任意内容\n                                    &lt;div className=&quot;z-panel&quot;&gt;\n                                        &lt;div className=&quot;z-panel-heading&quot;&gt;panel-heading&lt;/div&gt;\n                                        &lt;div className=&quot;z-panel-body&quot;&gt;panel-body&lt;/div&gt;\n                                    &lt;/div&gt;\n                                &lt;/div&gt;\n                            &lt;/ZwindowGapHeight&gt;\n                        &lt;/Col&gt;\n                        &lt;Col md={14}&gt;右边&lt;/Col&gt;\n                    &lt;/Row&gt;\n                &lt;/div&gt;\n            &lt;/ZpageWrapper&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zwindowgapheight-props\">ZwindowGapHeight 的 props</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>children</td>\n<td>必须是 HTMLElement,如 section、div 等</td>\n<td>element</td>\n<td>--</td>\n</tr>\n<tr>\n<td>querySelector</td>\n<td>实际要设置 height 的那个元素的选择器（如 &#39;.z-panel&#39;）, 或者 具体的 dom 元素 , 默认取 children</td>\n<td>string | element</td>\n<td>--</td>\n</tr>\n<tr>\n<td>gap</td>\n<td>额外要减去的距离</td>\n<td>number</td>\n<td>0</td>\n</tr>\n</tbody></table>\n";

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

/***/ }),

/***/ "qHp4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/zerod/components/ZpageWrapper/index.jsx + 1 modules
var ZpageWrapper = __webpack_require__("e8xx");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/row/index.js
var row = __webpack_require__("/hLV");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/col/index.js
var col = __webpack_require__("Zwxx");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/objectSpread.js
var objectSpread = __webpack_require__("JOet");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: delegated ./node_modules/_react@16.8.6@react/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("uqIC");
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: delegated ./node_modules/_prop-types@15.7.2@prop-types/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("EH+i");
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// CONCATENATED MODULE: ./node_modules/zerod/components/ZwindowGapHeight/index.jsx



var propTypes = {
  children: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.element,
  querySelector: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.oneOfType([_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.string, _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.element]),
  gap: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.number
};
var defaultProps = {
  gap: 0
};
var ZwindowGapHeight = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var domRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null);
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
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

  if (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.isValidElement(props.children)) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.cloneElement(props.children, objectSpread_default()({}, props.children.props, {
      ref: domRef
    }));
  } else {
    return props.children;
  }
});
ZwindowGapHeight.propTypes = propTypes;
ZwindowGapHeight.defaultProps = defaultProps;
/* harmony default export */ var components_ZwindowGapHeight = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(ZwindowGapHeight));
// EXTERNAL MODULE: ./src/HOC/load-HOC.js
var load_HOC = __webpack_require__("ebhq");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZwindowGapHeight/doc.md
var doc = __webpack_require__("LZzK");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// CONCATENATED MODULE: ./src/views/Main/component-doc/ZwindowGapHeight-doc/index.jsx






var AmdDocHOC = load_HOC["a" /* default */].AmdDocHOC,
    AshowDemoHOC = load_HOC["a" /* default */].AshowDemoHOC;

/* harmony default export */ var ZwindowGapHeight_doc = __webpack_exports__["default"] = (AmdDocHOC(doc_default.a, {
  demo1: function demo1() {
    var MyScript = AshowDemoHOC(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZpageWrapper["c" /* default */], {
      pageHeader: {
        show: true,
        title: "",
        content: ""
      }
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(row["a" /* default */], {
      gutter: 16
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      md: 10
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(components_ZwindowGapHeight, {
      querySelector: ".z-panel",
      gap: 20
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-panel"
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-panel-heading"
    }, "panel-heading"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-panel-body"
    }, "panel-body"))))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      md: 14
    }, "\u53F3\u8FB9")))), false);
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(MyScript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=40.4264b2e99d20539bd33d.js.map