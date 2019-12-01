(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "1hJj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(359);

/***/ }),

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "4CQA":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"ztreeinput-\">ZtreeInput 树编辑控件</h1>\n<p>1、inputType === &quot;double&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"double\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>2、inputType === &quot;single&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"single\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput inputType=&quot;single&quot; value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>3、multiple === false</p>\n<div class=\"z-demo-box\" data-render=\"demo3\" data-title=\"multiple === false\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput multiple={false} value={this.state.tree} onChange={this.treeChange} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<p>3、自定义输入框等 : inputType === coustom</p>\n<div class=\"z-demo-box\" data-render=\"demo4\" data-title=\"inputType === coustom\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZtreeInput } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    state = {\n        tree: [],\n    };\n    treeChange = value =&gt; {\n        this.setState({\n            tree: value,\n        });\n    };\n    render() {\n        return (\n            &lt;div style={{ width: &quot;500px&quot; }}&gt;\n                &lt;ZtreeInput\n                    multiple={false}\n                    value={this.state.tree}\n                    onChange={this.treeChange}\n                    customInputKeys={[\n                        { key: &quot;left&quot;, initValue: &quot;&quot; },\n                        { key: &quot;center&quot;, initValue: &quot;&quot; },\n                        { key: &quot;right&quot;, initValue: 0 },\n                    ]}\n                &gt;\n                    {(states, setStates, customInputKeys) =&gt; {\n                        return (\n                            &lt;InputGroup compact style={{ width: &quot;100%&quot; }}&gt;\n                                &lt;Select\n                                    value={states[customInputKeys[0].key]}\n                                    onChange={val =&gt; {\n                                        setStates({\n                                            [customInputKeys[0].key]: val,\n                                        });\n                                    }}\n                                    style={{\n                                        width: &quot;30%&quot;,\n                                    }}\n                                    size=&quot;small&quot;\n                                &gt;\n                                    &lt;Option value=&quot;Option1&quot;&gt;Option1&lt;/Option&gt;\n                                    &lt;Option value=&quot;Option2&quot;&gt;Option2&lt;/Option&gt;\n                                &lt;/Select&gt;\n                                &lt;Input\n                                    style={{ width: &quot;50%&quot; }}\n                                    value={states[customInputKeys[1].key]}\n                                    onChange={e =&gt; {\n                                        setStates({\n                                            [customInputKeys[1].key]: e.target.value,\n                                        });\n                                    }}\n                                    size=&quot;small&quot;\n                                /&gt;\n                                &lt;InputNumber\n                                    value={states[customInputKeys[2].key]}\n                                    onChange={val =&gt; {\n                                        setStates({\n                                            [customInputKeys[2].key]: val,\n                                        });\n                                    }}\n                                    style={{\n                                        width: &quot;20%&quot;,\n                                    }}\n                                    size=&quot;small&quot;\n                                /&gt;\n                            &lt;/InputGroup&gt;\n                        );\n                    }}\n                &lt;/ZtreeInput&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Myjavascript;</code></pre>\n<h2 id=\"ztreeinput-props\">ZtreeInput 的 props</h2>\n<p>可追 <code>className</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>inputType</td>\n<td>输入框类型 ，当 &quot;coustom&quot;时 ，通过 ZtreeInput 的 children 必须是 (state,setState,customInputKeys)=&gt;{ return 自定义 }来实现自定义，state：一个对应 customInputKeys 的 key 的状态对象，setState： 更新状态的方法</td>\n<td>single | double | coustom</td>\n<td>double</td>\n</tr>\n<tr>\n<td>customInputKeys</td>\n<td>自定义输入框等的 key 名 和 initValue 初始值, 默认是 [{key:&quot;label&quot;,initValue:&quot;&quot;},{key:&quot;value&quot;,initValue:&quot;&quot;}]</td>\n<td>array</td>\n<td>[{key:&quot;label&quot;,initValue:&quot;&quot;},{key:&quot;value&quot;,initValue:&quot;&quot;}]</td>\n</tr>\n<tr>\n<td>value</td>\n<td>tree 数据, array[{children}] , 数据对象的属性除了 children , 其他属性对应 customInputKeys 的 key</td>\n<td>array</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>新增兄弟节点、上移、下移、移除、新增子节点、输入框取消聚焦 都会触发 onChange</td>\n<td>function(newTree){}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>是否多级节点，如为 false, value 里是不存在 children 的</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>toolTips</td>\n<td>各个操作按钮的 tooltip 名称，默认{addSiblings:&quot;添加兄弟节点&quot;,moveUp:&quot;上移&quot;,moveDown:&quot;下移&quot;,remove:&quot;移除&quot;,addChild:&quot;新增子节点&quot;} ， 可修改单个名称：{addSiblings:&quot;新增兄弟节点&quot;}</td>\n<td>object</td>\n<td>--</td>\n</tr>\n</tbody></table>\n";

/***/ }),

/***/ "WFjJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(316);

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

/***/ "rEGp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(366);

/***/ }),

/***/ "tLB3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(438);

/***/ }),

/***/ "ut/Y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(329);

/***/ }),

/***/ "xYSL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(363);

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ }),

/***/ "yGk4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(371);

/***/ }),

/***/ "zOpV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputNumber = _interopRequireDefault(__webpack_require__("fyUT"));

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _ZtreeInput2 = _interopRequireDefault(__webpack_require__("sUcT"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf6 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _select = _interopRequireDefault(__webpack_require__("2fM7"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("4CQA"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC;
var Option = _select.default.Option;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1(tool) {
    // console.log(tool);
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

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf6.default)(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            style: {
              width: "500px"
            }
          }, _react.default.createElement(_ZtreeInput2.default, {
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  },
  demo2: function demo2(tool) {
    // console.log(tool);
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

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf6.default)(Myjavascript)).call.apply(_getPrototypeOf3, [this].concat(args)));
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

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            style: {
              width: "500px"
            }
          }, _react.default.createElement(_ZtreeInput2.default, {
            inputType: "single",
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  },
  demo3: function demo3(tool) {
    // console.log(tool);
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent3) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent3);

      function Myjavascript() {
        var _getPrototypeOf4;

        var _this3;

        (0, _classCallCheck2.default)(this, Myjavascript);

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this3 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf4 = (0, _getPrototypeOf6.default)(Myjavascript)).call.apply(_getPrototypeOf4, [this].concat(args)));
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

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            style: {
              width: "500px"
            }
          }, _react.default.createElement(_ZtreeInput2.default, {
            multiple: false,
            value: this.state.tree,
            onChange: this.treeChange
          }));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  },
  demo4: function demo4(tool) {
    // console.log(tool);
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent4) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent4);

      function Myjavascript() {
        var _getPrototypeOf5;

        var _this4;

        (0, _classCallCheck2.default)(this, Myjavascript);

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        _this4 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf5 = (0, _getPrototypeOf6.default)(Myjavascript)).call.apply(_getPrototypeOf5, [this].concat(args)));
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

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            style: {
              width: "500px"
            }
          }, _react.default.createElement(_ZtreeInput2.default, {
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
            return _react.default.createElement(_input.default.Group, {
              compact: true,
              style: {
                width: "100%"
              }
            }, _react.default.createElement(_select.default, {
              value: states[customInputKeys[0].key],
              onChange: function onChange(val) {
                setStates((0, _defineProperty2.default)({}, customInputKeys[0].key, val));
              },
              style: {
                width: "30%"
              },
              size: "small"
            }, _react.default.createElement(Option, {
              value: "Option1"
            }, "Option1"), _react.default.createElement(Option, {
              value: "Option2"
            }, "Option2")), _react.default.createElement(_input.default, {
              style: {
                width: "50%"
              },
              value: states[customInputKeys[1].key],
              onChange: function onChange(e) {
                setStates((0, _defineProperty2.default)({}, customInputKeys[1].key, e.target.value));
              },
              size: "small"
            }), _react.default.createElement(_inputNumber.default, {
              value: states[customInputKeys[2].key],
              onChange: function onChange(val) {
                setStates((0, _defineProperty2.default)({}, customInputKeys[2].key, val));
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
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=11.7ad8306bde3b8628babf.js.map