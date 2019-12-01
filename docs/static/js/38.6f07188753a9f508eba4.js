(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "0van":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-08-21 10:59:31\n * @LastEditors: zgt\n * @LastEditTime: 2019-10-11 17:35:00\n * @Description: file content\n -->\n<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zsearchform\">查询表单：ZsearchForm</h1>\n<p><code>ZsearchForm</code>是有栅栏布局的横向排版的，将<code>antd</code>的<code>Form</code>、<code>Form.item</code> 的结构转成数据结构直接渲染的方式，并且带有查询、重置、折叠按钮</p>\n<p>继承了 React.PureComponent</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZsearchForm } from &quot;zerod&quot;;\nimport { Input, message } from &quot;antd&quot;;\n\nclass Myjavascript extends React.PureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: form =&gt; {\n                //异步加载表单控件\n                return new Promise(resolve =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve(&lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;);\n                    }, 5000);\n                });\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n            render: form =&gt; {\n                return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;time&quot;,\n            label: &quot;申请时间&quot;,\n            render: form =&gt; {\n                return &lt;DatePicker.RangePicker renderExtraFooter={() =&gt; &quot;extra footer&quot;} showTime /&gt;;\n            },\n        },\n        {\n            key: &quot;serviceRemark&quot;,\n            label: &quot;服务说明&quot;,\n            span: 24,\n            render: form =&gt; {\n                return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n    ];\n    render() {\n        return (\n            &lt;ZsearchForm\n                labelLayout=&quot;inline&quot;\n                colFormItems={this.items}\n                onSearch={values =&gt; {\n                    message.success(&quot;提交成功：&quot; + JSON.stringify(values));\n                }}\n                collapseCount={2}\n            /&gt;\n        );\n    }\n}</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h3 id=\"zsearchform-props\">ZsearchForm Props</h3>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onSearch</td>\n            <td>验证表单后的提交事件</td>\n            <td>function(values){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>momentFormat</td>\n            <td>是否在触发onSubmit函数后里面传出的values中存在moment对象进行表单控件对应的format格式化，启用此属性，相关moment值的控件必需format属性</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>onReset</td>\n            <td>重置表单后的事件</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>noCollapse</td>\n            <td>禁用折叠</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>collapseCount</td>\n            <td>启用折叠后，折叠起来显示的数量</td>\n            <td>number</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>values</td>\n            <td>所有表单控件的值，如{serviceName:\"名称\"}，\"serviceName\"对应items属性里面的key</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n          <tr>\n            <td>getFormInstance</td>\n            <td>获取Form实例的钩子，外部通过(form)=>{this.formIstance=form;}获得form实例对象,通过this.formInstance.调用antd<a href=\"https://ant.design/components/form-cn/\" target=\"_blank\">表单相关方法</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>afterItemsRendered</td>\n            <td>所有表单控件渲染完的回调，包括异步渲染控件</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>hidden</td>\n            <td>通过改变height隐藏/显示ZsearchForm</a></td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n         <tr>\n            <td>labelLayout</td>\n            <td>label的布局方式</a></td>\n            <td>'horizontal'|'vertical'|'inline'</td>\n            <td>'vertical'</td>\n        </tr>\n         <tr>\n            <td>booleanToNumber</td>\n            <td>表单验证通过后是否把boolean类型的值转成0或1，通常处理Switch控件的值</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"items-\">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n            <tr>\n            <td>labelWidth</td>\n            <td>label的宽度，如labelWidth:\"120px\"，当labelLayout=='horizontal'才可能用的上</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> render</td>\n            <td>渲染表单控件的钩子。支持异步加载：必须return的是Promise对象。例如使用了后台接口：(form,changeFormItems)=>api.getOptions.then(re=>{return 表单控件})。changeFormItems 是一个方法，主要用于局部改变items，实现表单控件之间交互联动,使用方式请往下看</td>\n            <td>(form,changeFormItems)=>{return ReactNode | Promise}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:4,xl:6,lg:8}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>isFormItem</td>\n            <td>默认为true、如果为false则render函数可以渲染非表单控件内容</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>可以给每项添加className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> options</td>\n            <td><a href=\"https://ant.design/components/form-cn/\" target=\"_blank\">Antd的表单中getFieldDecorator函数的options参数</a>,可以配置验证规则}</td>\n            <td>object || ()=>options</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id=\"changeformitems\">changeFormItems</h2>\n<p>changeFormItems 是一个方法，主要用于局部改变 items，实现表单控件之间交互联动。但不能直接在 render 函数中使用，应在控件的事件当中。changeFormItems 除了在 items 里的 render 参数中，还存在于 getFormInstance 函数的 methods 参数里。</p>\n<p>changeFormItems 需要两个参数：<code>newItems</code>：array | object 和 <code>part</code> : boolean</p>\n<p><code>newItems</code>的结构取决于 <code>part</code>参数</p>\n<p>如果<code>part</code>为 false (默认为 false),<code>newItems</code>同 Zform 的 items，会重新渲染全部 items，这是早期的做法，不建议使用</p>\n<pre><code class=\"language-jsx\">//this.items就是Zform的items\nconst newItems = this.items.slice(0);\nnewItems.splice(4, 1); //不显示第五个\nchangeFormItems(this.items, false); //触发渲染</code></pre>\n<p>如果<code>part</code>为 true，就是局部改变，<code>newItems</code>可以为数组(多个 item 改变)，可以为对象(单个 item 改变),推荐使用方式如下</p>\n<pre><code class=\"language-jsx\">//不显示key为servicePort的那个item，\nchangeFormItems(\n    {\n        key: &quot;servicePort&quot;, //对应Zform的items里的key\n        show: false, //是否显示\n    },\n    true,\n);\n//其他内容\nchangeFormItems(\n    [\n        {\n            key: &quot;servicePort&quot;, //对应Zform的items里的key\n            //改变key为servicePort的那个item的内容\n            newItem: {\n                control: &lt;Input /&gt;, //控件  ReactNode\n                span: { lg: 12 }, //栅栏占格 同zform 的items里的span\n                options: {}, //同zform 的items里的options\n                isFormItem: true, //control是否是表单控件\n                label: &quot;&quot;, //label\n            },\n        },\n    ],\n    true,\n);</code></pre>\n";

/***/ }),

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "E1JP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZsearchForm2 = _interopRequireDefault(__webpack_require__("OFxj"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _datePicker = _interopRequireDefault(__webpack_require__("+eQT"));

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("0van"));

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
        _this.items = [{
          key: "serviceCode",
          label: "服务编码",
          render: function render(form) {
            //异步加载表单控件
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(_react.default.createElement(_input.default, {
                  placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u7F16\u7801"
                }));
              }, 5000);
            });
          },
          //antd的 form.getFieldDecorator的options
          options: {
            //验证规则
            rules: [{
              required: true,
              message: "不能为空。"
            }]
          }
        }, {
          key: "serviceName",
          label: "服务名称",
          render: function render(form) {
            return _react.default.createElement(_input.default, {
              placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u540D\u79F0"
            });
          },
          //antd的 form.getFieldDecorator的options
          options: {
            //验证规则
            rules: [{
              required: true,
              message: "不能为空。"
            }]
          }
        }, {
          key: "time",
          label: "申请时间",
          render: function render(form) {
            return _react.default.createElement(_datePicker.default.RangePicker, {
              renderExtraFooter: function renderExtraFooter() {
                return "extra footer";
              },
              showTime: true
            });
          }
        }, {
          key: "serviceRemark",
          label: "服务说明",
          span: 24,
          render: function render(form) {
            return _react.default.createElement(_input.default.TextArea, {
              rows: 2,
              placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u8BF4\u660E"
            });
          },
          //antd的 form.getFieldDecorator的options
          options: {
            //验证规则
            rules: [{
              required: true,
              message: "不能为空。"
            }]
          }
        }];
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_ZsearchForm2.default, {
            initAnimation: true,
            labelLayout: "inline",
            colFormItems: this.items,
            onSearch: function onSearch(values) {
              _message2.default.success("提交成功：" + JSON.stringify(values));
            },
            collapseCount: 2
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
//# sourceMappingURL=38.6f07188753a9f508eba4.js.map