(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "4CQA":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"ztreeinput-\">ZtreeInput 树编辑控件</h1>\n<p>1、inputType === &quot;double&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"double\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>2、inputType === &quot;single&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"single\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput inputType=&quot;single&quot; value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>3、multiple === false</p>\n<div class=\"z-demo-box\" data-render=\"demo3\" data-title=\"multiple === false\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput multiple={false} value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>3、自定义输入框等 : inputType === coustom</p>\n<div class=\"z-demo-box\" data-render=\"demo4\" data-title=\"inputType === coustom\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput\n                    multiple={false}\n                    value={this.state.tree}\n                    onChange={this.treeChange}\n                    customInputKeys={[\n                        { key: &quot;left&quot;, initValue: &quot;&quot; },\n                        { key: &quot;center&quot;, initValue: &quot;&quot; },\n                        { key: &quot;right&quot;, initValue: 0 },\n                    ]}\n                &gt;\n                    {(states, setStates, customInputKeys) =&gt; {\n                        return (\n                            &lt;InputGroup compact style={{ width: &quot;100%&quot; }}&gt;\n                                &lt;Select\n                                    value={states[customInputKeys[0].key]}\n                                    onChange={val =&gt; {\n                                        setStates({\n                                            [customInputKeys[0].key]: val,\n                                        });\n                                    }}\n                                    style={{\n                                        width: &quot;30%&quot;,\n                                    }}\n                                    size=&quot;small&quot;\n                                &gt;\n                                    &lt;Option value=&quot;Option1&quot;&gt;Option1&lt;/Option&gt;\n                                    &lt;Option value=&quot;Option2&quot;&gt;Option2&lt;/Option&gt;\n                                &lt;/Select&gt;\n                                &lt;Input\n                                    style={{ width: &quot;50%&quot; }}\n                                    value={states[customInputKeys[1].key]}\n                                    onChange={e =&gt; {\n                                        setStates({\n                                            [customInputKeys[1].key]: e.target.value,\n                                        });\n                                    }}\n                                    size=&quot;small&quot;\n                                /&gt;\n                                &lt;InputNumber\n                                    value={states[customInputKeys[2].key]}\n                                    onChange={val =&gt; {\n                                        setStates({\n                                            [customInputKeys[2].key]: val,\n                                        });\n                                    }}\n                                    style={{\n                                        width: &quot;20%&quot;,\n                                    }}\n                                    size=&quot;small&quot;\n                                /&gt;\n                            &lt;/InputGroup&gt;\n                        );\n                    }}\n                &lt;/ZtreeInput&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<h2 id=\"ztreeinput-props\">ZtreeInput 的 props</h2>\n<p>可追 <code>className</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>inputType</td>\n<td>输入框类型 ，当 &quot;coustom&quot;时 ，通过 ZtreeInput 的 children 必须是 (state,setState,customInputKeys)=&gt;{ return 自定义 }来实现自定义，state：一个对应 customInputKeys 的 key 的状态对象，setState： 更新状态的方法</td>\n<td>single | double | coustom</td>\n<td>double</td>\n</tr>\n<tr>\n<td>customInputKeys</td>\n<td>自定义输入框等的 key 名 和 initValue 初始值, 默认是 [{key:&quot;label&quot;,initValue:&quot;&quot;},{key:&quot;value&quot;,initValue:&quot;&quot;}]</td>\n<td>array</td>\n<td>[{key:&quot;label&quot;,initValue:&quot;&quot;},{key:&quot;value&quot;,initValue:&quot;&quot;}]</td>\n</tr>\n<tr>\n<td>value</td>\n<td>tree 数据, array[{children}] , 数据对象的属性除了 children , 其他属性对应 customInputKeys 的 key</td>\n<td>array</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>新增兄弟节点、上移、下移、移除、新增子节点、输入框取消聚焦 都会触发 onChange</td>\n<td>function(newTree){}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>是否多级节点，如为 false, value 里是不存在 children 的</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>toolTips</td>\n<td>各个操作按钮的 tooltip 名称，默认{addSiblings:&quot;添加兄弟节点&quot;,moveUp:&quot;上移&quot;,moveDown:&quot;下移&quot;,remove:&quot;移除&quot;,addChild:&quot;新增子节点&quot;} ， 可修改单个名称：{addSiblings:&quot;新增兄弟节点&quot;}</td>\n<td>object</td>\n<td>--</td>\n</tr>\n</tbody></table>\n";

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

/***/ "zOpV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_input_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5dGI");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HOSt");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bren");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sUcT");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UiLq");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("g0Tb");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rIhE");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qFVM");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Wp/E");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1fdY");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4CQA");
/* harmony import */ var zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_12__);












var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].AmdDocHOC;

var Option = antd_es_select__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Option;
/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZtreeInput_doc_md__WEBPACK_IMPORTED_MODULE_12___default.a, {
  demo1: function demo1(tool) {
    // console.log(tool);
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
        _this.state = {
          tree: []
        };

        _this.treeChange = function (value) {
          console.log("double", value);

          _this.setState({
            tree: value
          });
        };

        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            style: {
              width: "500px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Myjavascript, null);
  },
  demo2: function demo2(tool) {
    // console.log(tool);
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
        _this2.state = {
          tree: []
        };

        _this2.treeChange = function (value) {
          console.log("single", value);

          _this2.setState({
            tree: value
          });
        };

        return _this2;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            style: {
              width: "500px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
            inputType: "single",
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Myjavascript, null);
  },
  demo3: function demo3(tool) {
    // console.log(tool);
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent3) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Myjavascript, _React$PureComponent3);

      function Myjavascript() {
        var _getPrototypeOf4;

        var _this3;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Myjavascript);

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this3 = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (_getPrototypeOf4 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Myjavascript)).call.apply(_getPrototypeOf4, [this].concat(args)));
        _this3.state = {
          tree: []
        };

        _this3.treeChange = function (value) {
          console.log("multiple", value);

          _this3.setState({
            tree: value
          });
        };

        return _this3;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            style: {
              width: "500px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
            multiple: false,
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Myjavascript, null);
  },
  demo4: function demo4(tool) {
    // console.log(tool);
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent4) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Myjavascript, _React$PureComponent4);

      function Myjavascript() {
        var _getPrototypeOf5;

        var _this4;

        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Myjavascript);

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        _this4 = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (_getPrototypeOf5 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Myjavascript)).call.apply(_getPrototypeOf5, [this].concat(args)));
        _this4.state = {
          tree: []
        };

        _this4.treeChange = function (value) {
          console.log("coustom", value);

          _this4.setState({
            tree: value
          });
        };

        return _this4;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            style: {
              width: "500px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(zerod_components_ZtreeInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
            inputType: "coustom",
            multiple: false,
            value: this.state.tree,
            onChange: this.treeChange,
            customInputKeys: [{
              key: "left",
              initValue: ""
            }, {
              key: "center",
              initValue: ""
            }, {
              key: "right",
              initValue: 0
            }]
          }, function (states, setStates, customInputKeys) {
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Group, {
              compact: true,
              style: {
                width: "100%"
              }
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
              value: states[customInputKeys[0].key],
              onChange: function onChange(val) {
                setStates(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, customInputKeys[0].key, val));
              },
              style: {
                width: "30%"
              },
              size: "small"
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Option, {
              value: "Option1"
            }, "Option1"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Option, {
              value: "Option2"
            }, "Option2")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
              style: {
                width: "50%"
              },
              value: states[customInputKeys[1].key],
              onChange: function onChange(e) {
                setStates(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, customInputKeys[1].key, e.target.value));
              },
              size: "small"
            }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_input_number__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
              value: states[customInputKeys[2].key],
              onChange: function onChange(val) {
                setStates(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, customInputKeys[2].key, val));
              },
              style: {
                width: "20%"
              },
              size: "small"
            }));
          }));
        }
      }]);

      return Myjavascript;
    }(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Myjavascript, null);
  }
}));

/***/ })

}]);
//# sourceMappingURL=38.4b857450bd007220b20b.js.map