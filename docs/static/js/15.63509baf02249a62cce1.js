(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "/HM7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Zcascader2 = _interopRequireDefault(__webpack_require__("k9l9"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _ZcodeHighlight2 = _interopRequireDefault(__webpack_require__("PwP1"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf5 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("Sf9E"));

var _json = _interopRequireDefault(__webpack_require__("4APB"));

var _area = _interopRequireDefault(__webpack_require__("R7NC"));

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

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf5.default)(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.methods = {
          onSelect: function onSelect(items) {
            var names = items.map(function (item) {
              return item.name;
            });

            _message2.default.success("\u60A8\u9009\u62E9\u4E86".concat(names.join("-")));
          },
          showJson: function showJson(e) {
            e.target._render = function () {
              return _react.default.createElement("div", {
                className: "z-panel"
              }, _react.default.createElement("div", {
                className: "z-panel-body"
              }, _react.default.createElement(_ZcodeHighlight2.default, {
                mode: "html"
              }, _json.default)));
            };

            e.target._scroll = true;
          }
        };
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("section", null, _react.default.createElement("div", {
            className: "z-clear-fix z-margin-bottom-15"
          }, _react.default.createElement(_button.default, {
            className: "z-float-right z-open-modal-btn",
            type: "primary",
            onClick: this.methods.showJson
          }, "\u67E5\u770Btree\u6570\u636E\u7ED3\u6784\u4F8B\u5B50")), _react.default.createElement(_Zcascader2.default, {
            tree: _area.default.data,
            itemKeys: {
              name: "name",
              id: "areaId",
              disabled: "disable",
              children: "children"
            },
            selections: ["1710121748130980000000166"],
            onSelect: this.methods.onSelect
          }));
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

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf5.default)(Myjavascript)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.methods = {
          onSelect: function onSelect(items) {
            var names = items.map(function (item) {
              return item.name;
            });

            _message2.default.success("\u60A8\u9009\u62E9\u4E86".concat(names.join("-")));
          },
          treeAsync: function treeAsync(data, resolve) {
            if (data.root) {
              setTimeout(function () {
                resolve(_area.default.data);
              }, 500);
            } else if (data.children && data.children.length) {
              setTimeout(function () {
                resolve(data.children);
              }, 500);
            } else {
              resolve([]);
            }
          }
        };
        return _this2;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_Zcascader2.default, {
            treeAsync: this.methods.treeAsync,
            itemKeys: {
              name: "name",
              id: "areaId",
              disabled: "disable",
              children: "children"
            },
            selections: ["1710121748130980000000166"],
            onSelect: this.methods.onSelect
          });
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  },
  demo3: function demo3() {
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

        _this3 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf4 = (0, _getPrototypeOf5.default)(Myjavascript)).call.apply(_getPrototypeOf4, [this].concat(args)));
        _this3.methods = {
          onSelect: function onSelect(items) {
            var names = items.map(function (item) {
              return item.name;
            });

            _message2.default.success("\u60A8\u9009\u62E9\u4E86".concat(names.join("-")));
          },
          showJson: function showJson(e) {
            e.target._render = function () {
              return _react.default.createElement("div", {
                className: "z-panel"
              }, _react.default.createElement("div", {
                className: "z-panel-body"
              }, _react.default.createElement(_ZcodeHighlight2.default, {
                mode: "html"
              }, _json.default)));
            };

            e.target._scroll = true;
          }
        };
        _this3.selections = ["1710121748130980000000166"];
        _this3.itemKeys = {
          name: "name",
          id: "areaId",
          disabled: "disable",
          children: "children"
        };

        _this3.popoverContentRender = function (data, index) {
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_button.default, {
            type: "primary",
            size: "small",
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, "\u4FEE\u6539"), _react.default.createElement(_button.default, {
            type: "danger",
            className: "z-margin-left-10",
            size: "small",
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, "\u5220\u9664"));
        };

        return _this3;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("section", null, _react.default.createElement("div", {
            className: "z-clear-fix z-margin-bottom-15"
          }, _react.default.createElement(_button.default, {
            className: "z-float-right z-open-modal-btn",
            type: "primary",
            onClick: this.methods.showJson
          }, "\u67E5\u770Btree\u6570\u636E\u7ED3\u6784\u4F8B\u5B50")), _react.default.createElement(_Zcascader2.default, {
            tree: _area.default.data,
            itemKeys: this.itemKeys,
            selections: this.selections,
            onSelect: this.methods.onSelect,
            popoverContentRender: this.popoverContentRender
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

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "4APB":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"language-json\">[\n    {\n        &quot;areaId&quot;: &quot;1710121748130980000000166&quot;,\n        &quot;disable&quot;: true,\n        &quot;name&quot;: &quot;广东省&quot;,\n        &quot;zoningCode&quot;: &quot;440000000&quot;,\n        &quot;treeCode&quot;: &quot;001&quot;,\n        &quot;areaPid&quot;: &quot;root&quot;,\n        &quot;children&quot;: [\n            {\n                &quot;areaId&quot;: &quot;1710121748131360000000167&quot;,\n                &quot;name&quot;: &quot;广州市&quot;,\n                &quot;zoningCode&quot;: &quot;440100000&quot;,\n                &quot;treeCode&quot;: &quot;001001&quot;,\n                &quot;areaPid&quot;: &quot;1710121748130980000000166&quot;,\n                &quot;children&quot;: [\n                    {\n                        &quot;areaId&quot;: &quot;1710121748131550000000168&quot;,\n                        &quot;name&quot;: &quot;荔湾区&quot;,\n                        &quot;zoningCode&quot;: &quot;440103000&quot;,\n                        &quot;treeCode&quot;: &quot;001001001&quot;,\n                        &quot;areaPid&quot;: &quot;1710121748131360000000167&quot;,\n                        &quot;children&quot;: [\n                            {\n                                &quot;areaId&quot;: &quot;1710121748131760000000169&quot;,\n                                &quot;name&quot;: &quot;沙面街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103001&quot;,\n                                &quot;treeCode&quot;: &quot;001001001001&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748131940000000170&quot;,\n                                &quot;name&quot;: &quot;岭南街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103002&quot;,\n                                &quot;treeCode&quot;: &quot;001001001002&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132110000000171&quot;,\n                                &quot;name&quot;: &quot;华林街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103003&quot;,\n                                &quot;treeCode&quot;: &quot;001001001003&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132280000000172&quot;,\n                                &quot;name&quot;: &quot;多宝街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103004&quot;,\n                                &quot;treeCode&quot;: &quot;001001001004&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132520000000173&quot;,\n                                &quot;name&quot;: &quot;昌华街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103005&quot;,\n                                &quot;treeCode&quot;: &quot;001001001005&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132660000000174&quot;,\n                                &quot;name&quot;: &quot;逢源街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103006&quot;,\n                                &quot;treeCode&quot;: &quot;001001001006&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132830000000175&quot;,\n                                &quot;name&quot;: &quot;龙津街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103007&quot;,\n                                &quot;treeCode&quot;: &quot;001001001007&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132990000000176&quot;,\n                                &quot;name&quot;: &quot;金花街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103008&quot;,\n                                &quot;treeCode&quot;: &quot;001001001008&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133100000000177&quot;,\n                                &quot;name&quot;: &quot;彩虹街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103009&quot;,\n                                &quot;treeCode&quot;: &quot;001001001009&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133430000000178&quot;,\n                                &quot;name&quot;: &quot;南源街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103010&quot;,\n                                &quot;treeCode&quot;: &quot;001001001010&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133550000000179&quot;,\n                                &quot;name&quot;: &quot;西村街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103011&quot;,\n                                &quot;treeCode&quot;: &quot;001001001011&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133680000000180&quot;,\n                                &quot;name&quot;: &quot;站前街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103012&quot;,\n                                &quot;treeCode&quot;: &quot;001001001012&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133800000000181&quot;,\n                                &quot;name&quot;: &quot;桥中街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103013&quot;,\n                                &quot;treeCode&quot;: &quot;001001001013&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133960000000182&quot;,\n                                &quot;name&quot;: &quot;白鹤洞街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103014&quot;,\n                                &quot;treeCode&quot;: &quot;001001001014&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134070000000183&quot;,\n                                &quot;name&quot;: &quot;冲口街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103015&quot;,\n                                &quot;treeCode&quot;: &quot;001001001015&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134200000000184&quot;,\n                                &quot;name&quot;: &quot;花地街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103016&quot;,\n                                &quot;treeCode&quot;: &quot;001001001016&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134330000000185&quot;,\n                                &quot;name&quot;: &quot;石围塘街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103017&quot;,\n                                &quot;treeCode&quot;: &quot;001001001017&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134490000000186&quot;,\n                                &quot;name&quot;: &quot;茶滘街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103018&quot;,\n                                &quot;treeCode&quot;: &quot;001001001018&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134740000000187&quot;,\n                                &quot;name&quot;: &quot;东漖街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103019&quot;,\n                                &quot;treeCode&quot;: &quot;001001001019&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134870000000188&quot;,\n                                &quot;name&quot;: &quot;海龙街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103020&quot;,\n                                &quot;treeCode&quot;: &quot;001001001020&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134990000000189&quot;,\n                                &quot;name&quot;: &quot;东沙街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103021&quot;,\n                                &quot;treeCode&quot;: &quot;001001001021&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748135120000000190&quot;,\n                                &quot;name&quot;: &quot;中南街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103022&quot;,\n                                &quot;treeCode&quot;: &quot;001001001022&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n]</code></pre>\n";

/***/ }),

/***/ "DzJC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(436);

/***/ }),

/***/ "Sf9E":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2019-09-20 19:36:46\n * @LastEditors: zgt\n * @LastEditTime: 2019-10-08 15:25:43\n * @Description: file content\n -->\n<h1 id=\"-zcascader\">级联选择: Zcascader</h1>\n<p><code>Zcascader</code>是一个级联选择组件，通常做地区级联。</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"地区树方式\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { message } from &quot;antd&quot;;\nimport { Zcascader } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    methods = {\n        onSelect: items =&gt; {\n            let names = items.map(item =&gt; {\n                return item.name;\n            });\n            message.success(`您选择了${names.join(&quot;-&quot;)}`);\n        },\n    };\n    render() {\n        return (\n            &lt;Zcascader\n                tree={area.data}\n                itemKeys={{ name: &quot;name&quot;, id: &quot;areaId&quot;, disabled: &quot;disable&quot;, children: &quot;children&quot; }}\n                selections={[&quot;1710121748130980000000166&quot;]}\n                onSelect={this.methods.onSelect}\n            /&gt;\n        );\n    }\n}</code></pre>\n<p>2、异步加载</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"异步加载下一级\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { message } from &quot;antd&quot;;\nimport { Zcascader } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    methods = {\n        onSelect: items =&gt; {\n            let names = items.map(item =&gt; {\n                return item.name;\n            });\n            message.success(`您选择了${names.join(&quot;-&quot;)}`);\n        },\n        treeAsync: (data, resolve) =&gt; {\n            if (data.root) {\n                setTimeout(() =&gt; {\n                    resolve(area.data);\n                }, 500);\n            } else if (data.children &amp;&amp; data.children.length) {\n                setTimeout(() =&gt; {\n                    resolve(data.children);\n                }, 500);\n            } else {\n                resolve([]);\n            }\n        },\n    };\n    selections = [&quot;1710121748130980000000166&quot;];\n    render() {\n        return (\n            &lt;Zcascader\n                treeAsync={this.methods.treeAsync}\n                itemKeys={{ name: &quot;name&quot;, id: &quot;areaId&quot;, disabled: &quot;disable&quot;, children: &quot;children&quot; }}\n                selections={this.selections}\n                onSelect={this.methods.onSelect}\n            /&gt;\n        );\n    }\n}</code></pre>\n<p>3、添加操作按钮</p>\n<div class=\"z-demo-box\" data-render=\"demo3\" data-title=\"popoverContentRender\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { message, Button } from &quot;antd&quot;;\nimport { Zcascader } from &quot;zerod&quot;;\nclass Myjavascript extends React.PureComponent {\n    methods = {\n        onSelect: items =&gt; {\n            let names = items.map(item =&gt; {\n                return item.name;\n            });\n            message.success(`您选择了${names.join(&quot;-&quot;)}`);\n        },\n        showJson: e =&gt; {\n            e.target._render = () =&gt; {\n                return (\n                    &lt;div className=&quot;z-panel&quot;&gt;\n                        &lt;div className=&quot;z-panel-body&quot;&gt;\n                            &lt;ZcodeHighlight mode=&quot;html&quot;&gt;{jsonmd}&lt;/ZcodeHighlight&gt;\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                );\n            };\n            e.target._scroll = true;\n        },\n    };\n    selections = [&quot;1710121748130980000000166&quot;];\n    itemKeys = { name: &quot;name&quot;, id: &quot;areaId&quot;, disabled: &quot;disable&quot;, children: &quot;children&quot; };\n    popoverContentRender = (data, index) =&gt; {\n        return (\n            &lt;&gt;\n                &lt;Button type=&quot;primary&quot; size=&quot;small&quot; onClick={e =&gt; e.stopPropagation()}&gt;\n                    修改\n                &lt;/Button&gt;\n                &lt;Button type=&quot;danger&quot; className=&quot;z-margin-left-10&quot; size=&quot;small&quot; onClick={e =&gt; e.stopPropagation()}&gt;\n                    删除\n                &lt;/Button&gt;\n            &lt;/&gt;\n        );\n    };\n    render() {\n        return (\n            &lt;section&gt;\n                &lt;div className=&quot;z-clear-fix z-margin-bottom-15&quot;&gt;\n                    &lt;Button className=&quot;z-float-right z-open-modal-btn&quot; type=&quot;primary&quot; onClick={this.methods.showJson}&gt;\n                        查看tree数据结构例子\n                    &lt;/Button&gt;\n                &lt;/div&gt;\n                &lt;Zcascader\n                    tree={area.data}\n                    itemKeys={this.itemKeys}\n                    selections={this.selections}\n                    onSelect={this.methods.onSelect}\n                    popoverContentRender={this.popoverContentRender}\n                /&gt;\n            &lt;/section&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zcascader-props\">Zcascader 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>tree</td>\n            <td>级联树数据，非treeAsync下有效, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>lables</td>\n            <td>对应每一级的label</td>\n            <td>array[string]</td>\n            <td>[\"省\", \"市\", \"区/县\", \"街道/镇\", \"村\"]</td>\n        </tr>\n        <tr>\n            <td>itemKeys</td>\n            <td>定义tree的key对象，默认：{ name: \"name\", id: \"id\", disabled: \"disabled\", children: \"children\" }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>selections</td>\n            <td>默认已选择的每一级选项的ids，如 默认选择 广东省：[\"1710121748130980000000166\"], (请不要在onSelect中修改selections)</td>\n            <td>array[string]</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>onSelect</td>\n            <td>点击选项的回调</td>\n            <td>function(selectItems){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>treeAsync</td>\n            <td>异步加载选项函数,有两个参数，data:当前选项的数据，resolve:加载下一级的钩子resolve([下一级的所有选项]])</td>\n            <td>function(data,resolve){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>popoverContentRender</td>\n            <td>每一项的popover的内容区渲染函数</td>\n            <td>function(data,index){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>unselected</td>\n            <td>是否可以取消选中</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=15.63509baf02249a62cce1.js.map