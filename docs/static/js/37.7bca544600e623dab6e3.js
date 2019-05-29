(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "4CQA":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"ztreeinput-\">ZtreeInput 树编辑控件</h1>\n<p>1、inputType === &quot;double&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"double\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>2、inputType === &quot;single&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"single\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput inputType=&quot;single&quot; value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>3、multiple === false</p>\n<div class=\"z-demo-box\" data-render=\"demo3\" data-title=\"multiple === false\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput multiple={false} value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<h2 id=\"ztreeinput-props\">ZtreeInput 的 props</h2>\n<p>可追 <code>className</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>inputType</td>\n<td>输入框类型</td>\n<td>single | double</td>\n<td>double</td>\n</tr>\n<tr>\n<td>value</td>\n<td>tree 数据, array[{label,value,children}]</td>\n<td>array</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>新增兄弟节点、上移、下移、移除、新增子节点、输入框取消聚焦 都会触发 onChange</td>\n<td>function(newTree){}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>是否多级节点，如为 false, value 里是不存在 children 的</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n</tbody></table>\n";

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

/***/ "zOpV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sUcT");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MhH0");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FcZB");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ratc");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0j8+");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0kOG");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4CQA");
/* harmony import */ var zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_8__);








var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_8___default.a, {
  demo1: function demo1(tool) {
    // console.log(tool);
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          tree: []
        };

        _this.treeChange = function (value) {
          _this.setState({
            tree: value
          });
        };

        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              width: "500px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Myjavascript, null);
  },
  demo2: function demo2(tool) {
    // console.log(tool);
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, _React$PureComponent2);

      function Myjavascript() {
        var _getPrototypeOf3;

        var _this2;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Myjavascript);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf3 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.state = {
          tree: []
        };

        _this2.treeChange = function (value) {
          _this2.setState({
            tree: value
          });
        };

        return _this2;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              width: "500px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            inputType: "single",
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Myjavascript, null);
  },
  demo3: function demo3(tool) {
    // console.log(tool);
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent3) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, _React$PureComponent3);

      function Myjavascript() {
        var _getPrototypeOf4;

        var _this3;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Myjavascript);

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this3 = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf4 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Myjavascript)).call.apply(_getPrototypeOf4, [this].concat(args)));
        _this3.state = {
          tree: []
        };

        _this3.treeChange = function (value) {
          _this3.setState({
            tree: value
          });
        };

        return _this3;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              width: "500px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            multiple: false,
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Myjavascript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=37.7bca544600e623dab6e3.js.map