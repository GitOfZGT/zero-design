(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "WDm9":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"label-value-zlabelinput\">label+value输入框：ZlabelInput</h1>\n<p><code>ZlabelInput</code> 有两个输入框组成，得到的值如 {label:&quot;男&quot;,value:&quot;1&quot;}</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">class Myjavascript extends ZpureComponent {\n    state = {\n        labelValue: null,\n    };\n    onChange = (value, e) =&gt; {\n        this.setState({\n            labelValue: value,\n        });\n    };\n    render() {\n        return (\n            &lt;ZlabelInput\n                labelPlaceholder=&quot;请输入label&quot;\n                valuePlaceholder=&quot;请输入value&quot;\n                value={this.state.labelValue}\n                onChange={this.onChange}\n                style={{ width: &quot;300px&quot; }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zlabelinput-props\">ZlabelInput 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>value</td>\n            <td>两个输入框的值，{label:\"\",value:\"\"}</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>输入框内容变化时的回调</td>\n            <td>(value,e)=>{}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>labelPlaceholder</td>\n            <td>label输入框没有值时显示的内容</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>valuePlaceholder</td>\n            <td>value输入框没有值时显示的内容</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>disabled</td>\n            <td>是否禁用状态，默认false</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>labelSpan</td>\n            <td>label输入框占总宽度的格数 1~24</td>\n            <td>number</td>\n            <td>10</td>\n        </tr>\n        <tr>\n            <td>valueSpan</td>\n            <td>value输入框占总宽度的格数 1~24</td>\n            <td>number</td>\n            <td>14</td>\n        </tr>\n        <tr>\n            <td>size</td>\n            <td></td>\n            <td>number</td>\n            <td>14</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ "yzGP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/col/index.js
var col = __webpack_require__("M0Qm");

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/input/index.js + 7 modules
var input = __webpack_require__("eaxb");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("MhH0");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/createClass.js
var createClass = __webpack_require__("FcZB");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Ratc");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("0j8+");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/inherits.js
var inherits = __webpack_require__("0kOG");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: delegated ./node_modules/_react@16.8.6@react/index.js from dll-reference _dll_vendor_e823eb2f1294e4241445
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445 = __webpack_require__("uqIC");
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default = /*#__PURE__*/__webpack_require__.n(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445);

// EXTERNAL MODULE: ./node_modules/zerod/components/ZpureComponent.jsx
var ZpureComponent = __webpack_require__("jY6J");

// EXTERNAL MODULE: delegated ./node_modules/_prop-types@15.7.2@prop-types/index.js from dll-reference _dll_vendor_e823eb2f1294e4241445
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445 = __webpack_require__("EH+i");
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default = /*#__PURE__*/__webpack_require__.n(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445);

// EXTERNAL MODULE: ./node_modules/zerod/components/ZlabelInput/style.scss
var ZlabelInput_style = __webpack_require__("7iNk");
var style_default = /*#__PURE__*/__webpack_require__.n(ZlabelInput_style);

// EXTERNAL MODULE: ./node_modules/zerod/components/zTool/index.js
var zTool = __webpack_require__("/sSO");

// CONCATENATED MODULE: ./node_modules/zerod/components/ZlabelInput/index.jsx












var ZlabelInput_ZlabelInput =
/*#__PURE__*/
function (_ZpureComponent) {
  inherits_default()(ZlabelInput, _ZpureComponent);

  function ZlabelInput() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ZlabelInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ZlabelInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.saveData = {
      label: "",
      value: ""
    };
    _this.methods = {
      labelChange: function labelChange(e) {
        _this.saveData.label = e.target.value;
        typeof _this.props.onChange == "function" && _this.props.onChange(Object(zTool["f" /* deepCopy */])(_this.saveData), e);
      },
      valueChange: function valueChange(e) {
        _this.saveData.value = e.target.value;
        typeof _this.props.onChange == "function" && _this.props.onChange(Object(zTool["f" /* deepCopy */])(_this.saveData), e);
      }
    };
    return _this;
  }

  createClass_default()(ZlabelInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          labelPlaceholder = _this$props.labelPlaceholder,
          valuePlaceholder = _this$props.valuePlaceholder,
          disabled = _this$props.disabled,
          value = _this$props.value,
          className = _this$props.className,
          style = _this$props.style,
          labelSpan = _this$props.labelSpan,
          valueSpan = _this$props.valueSpan,
          size = _this$props.size;
      var labelValue = value ? value : {};

      var _label = labelValue.label ? labelValue.label : "";

      var _value = labelValue.value ? labelValue.value : "";

      this.saveData = labelValue;
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */].Group, {
        compact: true,
        className: "".concat(style_default.a["z-label-input"], " ").concat(className ? className : ""),
        style: style
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(col["a" /* default */], {
        span: labelSpan
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
        className: "z-label",
        value: _label,
        placeholder: labelPlaceholder,
        onChange: this.methods.labelChange,
        disabled: disabled,
        size: size
      })), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(col["a" /* default */], {
        span: valueSpan
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
        className: "z-value",
        value: _value,
        placeholder: valuePlaceholder,
        onChange: this.methods.valueChange,
        disabled: disabled,
        size: size
      })));
    }
  }]);

  return ZlabelInput;
}(ZpureComponent["a" /* default */]);
ZlabelInput_ZlabelInput.propTypes = {
  className: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.string,
  size: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.string,
  onChange: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.func,
  value: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.object,
  labelPlaceholder: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.string,
  valuePlaceholder: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.string,
  disabled: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.bool,
  labelSpan: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.number,
  valueSpan: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.number
};
ZlabelInput_ZlabelInput.defaultProps = {
  labelSpan: 10,
  valueSpan: 14
};
/* harmony default export */ var components_ZlabelInput = (ZlabelInput_ZlabelInput);
// EXTERNAL MODULE: ./src/HOC/load-HOC.js
var load_HOC = __webpack_require__("ebhq");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZlabelInput/doc.md
var doc = __webpack_require__("WDm9");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// CONCATENATED MODULE: ./src/views/Main/component-doc/ZlabelInput-doc/index.jsx








var addClass = zTool["g" /* default */].addClass,
    removeClass = zTool["g" /* default */].removeClass;

var AmdDocHOC = load_HOC["a" /* default */].AmdDocHOC;

/* harmony default export */ var ZlabelInput_doc = __webpack_exports__["default"] = (AmdDocHOC(doc_default.a, {
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      inherits_default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck_default()(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          labelValue: null
        };

        _this.onChange = function (value, e) {
          _this.setState({
            labelValue: value
          });
        };

        return _this;
      }

      createClass_default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(components_ZlabelInput, {
            labelPlaceholder: "\u8BF7\u8F93\u5165label",
            valuePlaceholder: "\u8BF7\u8F93\u5165value",
            value: this.state.labelValue,
            onChange: this.onChange,
            style: {
              width: "300px"
            }
          });
        }
      }]);

      return Myjavascript;
    }(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.PureComponent);

    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Myjavascript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=26.10bd3dc826331475f9ad.js.map