(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "/HM7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_Zcascader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k9l9");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hbJK");
/* harmony import */ var zerod_components_ZcodeHighlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PwP1");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2ZQn");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_Zcascader_doc_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Sf9E");
/* harmony import */ var zerod_components_Zcascader_doc_md__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(zerod_components_Zcascader_doc_md__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _json_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4APB");
/* harmony import */ var _json_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_json_md__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mock_area__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("R7NC");











var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].AmdDocHOC;



/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_Zcascader_doc_md__WEBPACK_IMPORTED_MODULE_11___default.a, {
  demo1: function demo1() {
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
        _this.methods = {
          onSelect: function onSelect(items) {
            var names = items.map(function (item) {
              return item.name;
            });

            antd_es_message__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].success("\u60A8\u9009\u62E9\u4E86".concat(names.join('-')));
          },
          showJson: function showJson(e) {
            e.target._render = function () {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
                className: "z-panel"
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
                className: "z-panel-body"
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(zerod_components_ZcodeHighlight__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
                mode: "html"
              }, _json_md__WEBPACK_IMPORTED_MODULE_12___default.a)));
            };

            e.target._scroll = true;
          }
        };
        return _this;
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "z-clear-fix z-margin-bottom-15"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
            className: "z-float-right z-open-modal-btn",
            type: "primary",
            onClick: this.methods.showJson
          }, "\u67E5\u770Btree\u6570\u636E\u7ED3\u6784\u4F8B\u5B50")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(zerod_components_Zcascader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
            tree: _mock_area__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].data,
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
    }(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Myjavascript, null);
  },
  demo2: function demo2() {
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
        _this2.methods = {
          onSelect: function onSelect(items) {
            var names = items.map(function (item) {
              return item.name;
            });

            antd_es_message__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].success("\u60A8\u9009\u62E9\u4E86".concat(names.join('-')));
          },
          treeAsync: function treeAsync(data, resolve) {
            if (data.root) {
              setTimeout(function () {
                resolve(_mock_area__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].data);
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

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(zerod_components_Zcascader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
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
    }(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Myjavascript, null);
  }
}));

/***/ }),

/***/ "4APB":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"language-json\">[\n    {\n        &quot;areaId&quot;: &quot;1710121748130980000000166&quot;,\n        &quot;disable&quot;: true,\n        &quot;name&quot;: &quot;广东省&quot;,\n        &quot;zoningCode&quot;: &quot;440000000&quot;,\n        &quot;treeCode&quot;: &quot;001&quot;,\n        &quot;areaPid&quot;: &quot;root&quot;,\n        &quot;children&quot;: [\n            {\n                &quot;areaId&quot;: &quot;1710121748131360000000167&quot;,\n                &quot;name&quot;: &quot;广州市&quot;,\n                &quot;zoningCode&quot;: &quot;440100000&quot;,\n                &quot;treeCode&quot;: &quot;001001&quot;,\n                &quot;areaPid&quot;: &quot;1710121748130980000000166&quot;,\n                &quot;children&quot;: [\n                    {\n                        &quot;areaId&quot;: &quot;1710121748131550000000168&quot;,\n                        &quot;name&quot;: &quot;荔湾区&quot;,\n                        &quot;zoningCode&quot;: &quot;440103000&quot;,\n                        &quot;treeCode&quot;: &quot;001001001&quot;,\n                        &quot;areaPid&quot;: &quot;1710121748131360000000167&quot;,\n                        &quot;children&quot;: [\n                            {\n                                &quot;areaId&quot;: &quot;1710121748131760000000169&quot;,\n                                &quot;name&quot;: &quot;沙面街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103001&quot;,\n                                &quot;treeCode&quot;: &quot;001001001001&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748131940000000170&quot;,\n                                &quot;name&quot;: &quot;岭南街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103002&quot;,\n                                &quot;treeCode&quot;: &quot;001001001002&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132110000000171&quot;,\n                                &quot;name&quot;: &quot;华林街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103003&quot;,\n                                &quot;treeCode&quot;: &quot;001001001003&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132280000000172&quot;,\n                                &quot;name&quot;: &quot;多宝街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103004&quot;,\n                                &quot;treeCode&quot;: &quot;001001001004&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132520000000173&quot;,\n                                &quot;name&quot;: &quot;昌华街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103005&quot;,\n                                &quot;treeCode&quot;: &quot;001001001005&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132660000000174&quot;,\n                                &quot;name&quot;: &quot;逢源街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103006&quot;,\n                                &quot;treeCode&quot;: &quot;001001001006&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132830000000175&quot;,\n                                &quot;name&quot;: &quot;龙津街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103007&quot;,\n                                &quot;treeCode&quot;: &quot;001001001007&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132990000000176&quot;,\n                                &quot;name&quot;: &quot;金花街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103008&quot;,\n                                &quot;treeCode&quot;: &quot;001001001008&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133100000000177&quot;,\n                                &quot;name&quot;: &quot;彩虹街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103009&quot;,\n                                &quot;treeCode&quot;: &quot;001001001009&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133430000000178&quot;,\n                                &quot;name&quot;: &quot;南源街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103010&quot;,\n                                &quot;treeCode&quot;: &quot;001001001010&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133550000000179&quot;,\n                                &quot;name&quot;: &quot;西村街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103011&quot;,\n                                &quot;treeCode&quot;: &quot;001001001011&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133680000000180&quot;,\n                                &quot;name&quot;: &quot;站前街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103012&quot;,\n                                &quot;treeCode&quot;: &quot;001001001012&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133800000000181&quot;,\n                                &quot;name&quot;: &quot;桥中街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103013&quot;,\n                                &quot;treeCode&quot;: &quot;001001001013&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133960000000182&quot;,\n                                &quot;name&quot;: &quot;白鹤洞街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103014&quot;,\n                                &quot;treeCode&quot;: &quot;001001001014&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134070000000183&quot;,\n                                &quot;name&quot;: &quot;冲口街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103015&quot;,\n                                &quot;treeCode&quot;: &quot;001001001015&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134200000000184&quot;,\n                                &quot;name&quot;: &quot;花地街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103016&quot;,\n                                &quot;treeCode&quot;: &quot;001001001016&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134330000000185&quot;,\n                                &quot;name&quot;: &quot;石围塘街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103017&quot;,\n                                &quot;treeCode&quot;: &quot;001001001017&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134490000000186&quot;,\n                                &quot;name&quot;: &quot;茶滘街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103018&quot;,\n                                &quot;treeCode&quot;: &quot;001001001018&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134740000000187&quot;,\n                                &quot;name&quot;: &quot;东漖街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103019&quot;,\n                                &quot;treeCode&quot;: &quot;001001001019&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134870000000188&quot;,\n                                &quot;name&quot;: &quot;海龙街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103020&quot;,\n                                &quot;treeCode&quot;: &quot;001001001020&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134990000000189&quot;,\n                                &quot;name&quot;: &quot;东沙街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103021&quot;,\n                                &quot;treeCode&quot;: &quot;001001001021&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748135120000000190&quot;,\n                                &quot;name&quot;: &quot;中南街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103022&quot;,\n                                &quot;treeCode&quot;: &quot;001001001022&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n]</code></pre>\n";

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(497);

/***/ }),

/***/ "Sf9E":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zcascader\">级联选择: Zcascader</h1>\n<p><code>Zcascader</code>是一个级联选择组件，通常做地区级联。</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"地区树方式\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { message } from &quot;antd&quot;;\nimport { Zcascader } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    methods = {\n        onSelect: (items) =&gt; {\n            let names = items.map((item) =&gt; {\n                return item.name;\n            });\n            message.success(`您选择了${names.join(&quot;-&quot;)}`);\n        },\n    };\n    render() {\n        return (\n            &lt;Zcascader\n                tree={area.data}\n                itemKeys={{ name: &quot;name&quot;, id: &quot;areaId&quot;, disabled: &quot;disable&quot;, children: &quot;children&quot; }}\n                selections={[&quot;1710121748130980000000166&quot;]}\n                onSelect={this.methods.onSelect}\n            /&gt;\n        );\n    }\n}</code></pre>\n<p>1、异步加载</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"异步加载下一级\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { message } from &quot;antd&quot;;\nimport { Zcascader } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    methods = {\n        onSelect: (items) =&gt; {\n            let names = items.map((item) =&gt; {\n                return item.name;\n            });\n            message.success(`您选择了${names.join(&quot;-&quot;)}`);\n        },\n        treeAsync: (data, resolve) =&gt; {\n            if (data.root) {\n                setTimeout(() =&gt; {\n                    resolve(area.data);\n                }, 500);\n            } else if (data.children &amp;&amp; data.children.length) {\n                setTimeout(() =&gt; {\n                    resolve(data.children);\n                }, 500);\n            } else {\n                resolve([]);\n            }\n        },\n    };\n    render() {\n        return (\n            &lt;Zcascader\n                treeAsync={this.methods.treeAsync}\n                itemKeys={{ name: &quot;name&quot;, id: &quot;areaId&quot;, disabled: &quot;disable&quot;, children: &quot;children&quot; }}\n                selections={[&quot;1710121748130980000000166&quot;]}\n                onSelect={this.methods.onSelect}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zcascader-props\">Zcascader 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>tree</td>\n            <td>级联树数据，非treeAsync下有效, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>lables</td>\n            <td>对应每一级的label</td>\n            <td>array[string]</td>\n            <td>[\"省\", \"市\", \"区/县\", \"街道/镇\", \"村\"]</td>\n        </tr>\n        <tr>\n            <td>itemKeys</td>\n            <td>定义tree的key对象，默认：{ name: \"name\", id: \"id\", disabled: \"disabled\", children: \"children\" }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>selections</td>\n            <td>默认已选择的每一级选项的ids，如 默认选择 广东省：[\"1710121748130980000000166\"], (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array[string]</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>onSelect</td>\n            <td>点击选项的回调</td>\n            <td>function(selectItems){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>treeAsync</td>\n            <td>异步加载选项函数,有两个参数，data:当前选项的数据，resolve:加载下一级的钩子resolve([下一级的所有选项]])</td>\n            <td>function(data,resolve){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ "q3Yw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(312);

/***/ })

}]);
//# sourceMappingURL=10.8d28e0b669f2b91655a3.js.map