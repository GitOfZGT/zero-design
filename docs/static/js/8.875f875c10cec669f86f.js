(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "1hJj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(359);

/***/ }),

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "BOae":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-08-21 10:59:31\n * @LastEditors: zgt\n * @LastEditTime: 2019-10-11 17:36:23\n * @Description: file content\n -->\n<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zform\">普通表单：Zform</h1>\n<p><code>Zform</code>将<code>antd</code>的<code>Form</code>、<code>Form.item</code>的结构转成数据结构直接渲染的方式，并且自带有一个<code>提交</code>表单的按钮</p>\n<p>继承了 React.PureComponent</p>\n<p>1、labelLayout==&#39;inline&#39;</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"inline\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Zform } from &quot;zerod&quot;;\nimport { Input, message } from &quot;antd&quot;;\nclass Myjavascript extends React.PureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: form =&gt; {\n                return new Promise(resolve =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve(&lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;);\n                    }, 5000);\n                });\n            },\n            //antd的 form.getFieldDecorator的options\n            options: () =&gt; ({\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            }),\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n            render: form =&gt; {\n                return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;colorValue&quot;,\n            label: &quot;颜色值&quot;,\n            render: form =&gt; {\n                return &lt;ZcolorPicker className=&quot;z-margin-top-4&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;serviceRemark&quot;,\n            label: &quot;服务说明&quot;,\n            span: { md: 24 },\n            render: form =&gt; {\n                return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;servicePort&quot;,\n            label: &quot;端口号&quot;,\n            labelWidth: &quot;80px&quot;,\n            render: form =&gt; {\n                return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;myButton&quot;,\n            label: &quot;按钮&quot;,\n            render: (form, changeFormItems) =&gt; {\n                return (\n                    &lt;Button\n                        type=&quot;primary&quot;\n                        onClick={() =&gt; {\n                            const newItems = this.items.slice(0);\n                            newItems.splice(4, 1);\n                            changeFormItems(hasHide ? this.items : newItems);\n                            hasHide = !hasHide;\n                        }}\n                    &gt;\n                        {hasHide ? &quot;显示&quot; : &quot;不显示&quot;}端口号\n                    &lt;/Button&gt;\n                );\n            },\n        },\n        {\n            key: &quot;confProperty&quot;,\n            label: &quot;默认配置&quot;,\n            span: 24,\n            render: form =&gt; {\n                return &lt;Input.TextArea rows={15} placeholder=&quot;请输入默认配置&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n    ];\n    defaultValue = {\n        serviceCode: &quot;9999&quot;,\n        serviceRemark: &quot;llll&quot;,\n    };\n    render() {\n        return (\n            &lt;Zform\n                labelLayout=&quot;horizontal&quot;\n                values={this.defaultValue}\n                items={this.items}\n                onSubmit={values =&gt; {\n                    // console.log(values);\n                    return Promise.resolve().then(re =&gt; {\n                        message.success(&quot;提交成功：&quot; + JSON.stringify(values));\n                    });\n                }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<p>2、labelLayout==&quot;vertical&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"vertical\"></div>\n\n<p>2、labelLayout==&quot;horizontal&quot;</p>\n<div class=\"z-demo-box\" data-render=\"demo3\" data-title=\"horizontal\"></div>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zform-props\">Zform 的 props</h2>\n<p>可追 <code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n         <tr>\n            <td>labelLayout</td>\n            <td>label的布局方式</a></td>\n            <td>'horizontal'|'vertical'|'inline'</td>\n            <td>'vertical'</td>\n        </tr>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onSubmit</td>\n            <td>触发保存按钮会先验证表单是否通过,通过了当confirm.show为ture会打开确认提示框,确认后才调用onSubmit,onSubmit函数必须返回Promise对象才能关闭提示框，如果存在otherForms,values是一个数组，否则是一个对象</td>\n            <td>function(values){return Promise.resolve()}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>momentFormat</td>\n            <td>是否在触发onSubmit函数后里面传出的values中存在moment对象进行表单控件对应的format格式化，启用此属性，相关moment值的控件必需format属性</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> submitBtnName</td>\n            <td>提交按钮的名称，如果为空则不显示默认的提交按钮</td>\n            <td>string | furnction(){\n                return ReactNode;\n            }</td>\n            <td>保存</td>\n        </tr>\n        <tr>\n            <td><del>submitMsg</del></td>\n            <td><del>提交表单时的确认提示框文本，如果为空，则不会打开提示框直接调用onSubmit函数</del>，submitMsg已经被 confirm.content替代，这里保留着向下兼容</td>\n            <td>string</td>\n            <td>点击确定按钮提交数据</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> submitBtnRender</td>\n            <td>渲染提交按钮的函数，可以用自定义内容替换默认的提交按钮;参数有onSubmit：内置的提交按钮的方法,其可传入参数onSubmit(e,query)，props:Zform组件的props,可以取得props.form</td>\n            <td>funtion(onSubmit,props){return ReactNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>values</td>\n            <td>所有表单控件的值，如{serviceName:\"名称\"}，\"serviceName\"对应items属性里面的key</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getFormInstance</td>\n            <td>获取form对象的钩子，外部通过(form)=>{this.formIstance=form;}获得form对象,通过this.formInstance.调用antd<a href=\"https://ant.design/components/form-cn/\" target=\"_blank\">表单相关方法</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>afterItemsRendered</td>\n            <td>所有表单控件渲染完的回调，包括异步渲染控件</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>otherForms</td>\n            <td>有时存在多个Zform时，只想有一个保存按钮来触发提交，当触发保存时，会调用otherForms函数，otherForms应该return一个其他form对象的数组，会加上当前的form一起验证表单是否通过，通过了才会调用onSubmit</td>\n            <td>function(){return [form1,form2]}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>confirm</td>\n            <td>是一个对象，触发保存按钮后的确认提示框的配置，包含<a href=\"https://ant.design/components/modal-cn/\" target=\"_blank\"> Antd的Modal的属性（除了onOk）</a>，还包含 show属性(如果为false则不会出现确认提示框，直接调用onSubmit函数)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>booleanToNumber</td>\n            <td>表单验证通过后是否把boolean类型的值转成0或1，通常处理Switch控件的值</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"items-\">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>labelWidth</td>\n            <td>label的宽度，如labelWidth:\"120px\"，当labelLayout=='horizontal'才可能用的上</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> render</td>\n            <td>渲染表单控件的钩子。支持异步加载：必须return的是Promise对象。例如使用了后台接口：(form,changeFormItems)=>api.getOptions.then(re=>{return 表单控件})。changeFormItems 是一个方法，主要用于局部改变items，实现表单控件之间交互联动,使用方式请往下看</td>\n            <td>(form,changeFormItems)=>{return ReactNode | Promise}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:4,xl:6,lg:8}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>isFormItem</td>\n            <td>默认为true、如果为false则render函数可以渲染非表单控件内容</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>可以给每项添加className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> options</td>\n            <td><a href=\"https://ant.design/components/form-cn/\" target=\"_blank\">Antd的表单中getFieldDecorator函数的options参数</a>,可以配置验证规则}</td>\n            <td>object || ()=>options</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"changeformitems\">changeFormItems</h2>\n<p>changeFormItems 是一个方法，主要用于局部改变 items，实现表单控件之间交互联动。但不能直接在 render 函数中使用，应在控件的事件当中。changeFormItems 除了在 items 里的 render 参数中，还存在于 getFormInstance 函数的 methods 参数里。</p>\n<p>changeFormItems 需要两个参数：<code>newItems</code>：array | object 和 <code>part</code> : boolean</p>\n<p><code>newItems</code>的结构取决于 <code>part</code>参数</p>\n<p>如果<code>part</code>为 false (默认为 false),<code>newItems</code>同 Zform 的 items，会重新渲染全部 items，这是早期的做法，不建议使用</p>\n<pre><code class=\"language-jsx\">//this.items就是Zform的items\nconst newItems = this.items.slice(0);\nnewItems.splice(4, 1); //不显示第五个\nchangeFormItems(this.items, false); //触发渲染</code></pre>\n<p>如果<code>part</code>为 true，就是局部改变，<code>newItems</code>可以为数组(多个 item 改变)，可以为对象(单个 item 改变),推荐使用方式如下</p>\n<pre><code class=\"language-jsx\">//不显示key为servicePort的那个item，\nchangeFormItems(\n    {\n        key: &quot;servicePort&quot;, //对应Zform的items里的key\n        show: false, //是否显示\n    },\n    true,\n);\n//其他内容\nchangeFormItems(\n    [\n        {\n            key: &quot;servicePort&quot;, //对应Zform的items里的key\n            //改变key为servicePort的那个item的内容\n            newItem: {\n                control: &lt;Input /&gt;, //控件  ReactNode\n                span: { lg: 12 }, //栅栏占格 同zform 的items里的span\n                options: {}, //同zform 的items里的options\n                isFormItem: true, //control是否是表单控件\n                label: &quot;&quot;, //label\n            },\n        },\n    ],\n    true,\n);</code></pre>\n<h2 id=\"-\">辅助</h2>\n<p>在<code>zerod/components/Zform/controls.js</code>提供了 <code>getControl(name,config)</code>和<code>getOptions(config)</code> 两个方法</p>\n<p>在如下的 items 结构中 render 和 options 内容可用<code>getControl</code>和<code>getOptions</code>获取：</p>\n<pre><code class=\"language-jsx\">import { getControl, getOptions } from &quot;zerod/components/Zform/controls&quot;;\nconst items = [\n    {\n        key: &quot;numberPlate&quot;,\n        label: &quot;车牌号码&quot;,\n        render: form =&gt; {\n            return getControl(&quot;Input&quot;, { placeholder: &quot;请输入车牌号码&quot; });\n        },\n        options: getOptions({\n            required: true,\n            requiredMsg: &quot;请输入车牌号码！&quot;,\n            rules: [\n                {\n                    pattern: /^.{1,10}$/,\n                    message: &quot;车牌号码必须为长度1到10位的字符！&quot;,\n                },\n            ],\n            initialValue: &quot;&quot;,\n        }),\n    },\n    {\n        key: &quot;vehicleType&quot;,\n        label: &quot;车辆类别&quot;,\n        render: form =&gt; {\n            return getControl(&quot;Select&quot;, {\n                selectList: [\n                    { label: &quot;人货车&quot;, value: &quot;0&quot; },\n                    { label: &quot;的士头&quot;, value: &quot;1&quot; },\n                    { label: &quot;小汽车&quot;, value: &quot;2&quot; },\n                    { label: &quot;其他&quot;, value: &quot;3&quot; },\n                ],\n                placeholder: &quot;请选择车辆类别&quot;,\n            });\n        },\n        options: getOptions({ required: true, requiredMsg: &quot;请选择车辆类别&quot; }),\n    },\n];</code></pre>\n<h2 id=\"getcontrol-name-config-\">getControl(name,config)中</h2>\n<p>name 可选：<code>Input</code>、<code>Input.Group</code>、<code>TextArea</code>、<code>Switch</code>、<code>Select</code>、<code>Checkbox</code>、<code>InputNumber</code>、<code>DatePicker</code>、<code>Radio</code>、<code>Checkbox.Group</code>、<code>Radio.Group</code>、<code>TimePicker</code>、<code>Upload</code>、<code>TreeSelect</code>、<code>Mention</code>、\n<code>RangePicker</code>、<code>MonthPicker</code>、<code>Rate</code>、<code>AutoComplete</code>（在 antd-design 可找到对应的表单控件）、<code>TreeInput</code>(就是 ZtreeInput)、<code>Cascader</code>、<code>ColorPicker</code>(即 ZcolorPicker)、<code>TimeRange</code>(即 ZtimeRange) 、<code>YearPicker</code>(年份)</p>\n<p>当<code>Select</code>、<code>Checkbox.Group</code>、<code>Radio.Group</code>，需 config.selectList=[{label:&quot;label&quot;,value:&quot;value&quot;},]</p>\n<p>当<code>Select</code>，如果需选择项分组需 config.group=true，并且 config.selectList=[{label:&quot;组名&quot;,children:[{label:&quot;label&quot;,value:&quot;value&quot;}]},]</p>\n<pre><code class=\"language-js\">getControl(&quot;Select&quot;, {\n    selectList: [{ label: &quot;label&quot;, value: &quot;value&quot; }], //当`Select`、`Checkbox.Group`、`Radio.Group`时的选项数据\n    //...antd-design 可找到对应的表单控件的更多属性\n});</code></pre>\n<h2 id=\"getoptions-config-\">getOptions(config) 中</h2>\n<pre><code class=\"language-js\">getOptions({\n    required: true, //是否必填规则\n    requiredMsg: &quot;请选择车辆类别&quot;, //是否必填规则的错误提示\n    rules: [], //其他规则\n    initialValue: &quot;initialValue&quot;, //控件初始值\n    //...更多属性同items结构的options\n});</code></pre>\n";

/***/ }),

/***/ "WFjJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(316);

/***/ }),

/***/ "d21d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Zform2 = _interopRequireDefault(__webpack_require__("+Qac"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _inputNumber = _interopRequireDefault(__webpack_require__("fyUT"));

var _ZcolorPicker2 = _interopRequireDefault(__webpack_require__("FOOf"));

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _datePicker = _interopRequireDefault(__webpack_require__("+eQT"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("BOae"));

var _controls = __webpack_require__("VoWU");

var AmdDocHOC = _loadHOC.default.AmdDocHOC;
var hasHide = false;
var formItems = [{
  key: "radio",
  label: "单选",
  labelFocused: true,
  render: function render(form) {
    var selectList = [{
      label: "A",
      value: 2
    }, {
      label: "B",
      value: 3
    }, {
      label: "C",
      value: 4
    }, {
      label: "D",
      value: 5
    }];
    form.saveFieldOptions["radio"] = selectList;
    return (0, _controls.getControl)("Checkbox.Group", {
      selectList: selectList
    });
  },
  //antd的 form.getFieldDecorator的options
  options: function options() {
    return {
      initialValue: "",
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    };
  }
}, {
  key: "datepicker",
  label: "日期框",
  render: function render(form) {
    return _react.default.createElement(_datePicker.default, null);
  },
  //antd的 form.getFieldDecorator的options
  options: function options() {
    return {
      initialValue: null,
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    };
  }
}, {
  key: "selectTest",
  label: "下拉框",
  render: function render(form) {
    var selectList = [{
      label: "欧文大哥",
      value: 1
    }, {
      label: "我的观点",
      value: 5
    }, {
      label: "我的感受",
      value: 6
    }, {
      label: "新手大哥",
      value: 8
    }];
    form.saveFieldOptions["selectTest"] = selectList;
    return (0, _controls.getControl)("Select", {
      selectList: selectList
    });
  },
  //antd的 form.getFieldDecorator的options
  options: function options() {
    return {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    };
  }
}, {
  key: "serviceCode",
  label: "服务编码",
  render: function render(form) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(_react.default.createElement(_input.default, {
          placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u7F16\u7801"
        }));
      }, 5000);
    });
  },
  //antd的 form.getFieldDecorator的options
  options: function options() {
    return {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    };
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
  key: "colorValue",
  label: "颜色值",
  render: function render(form) {
    return _react.default.createElement(_ZcolorPicker2.default, null);
  },
  //antd的 form.getFieldDecorator的options
  options: {
    //验证规则
    rules: [{
      required: true,
      message: "不能为空。"
    }],
    initialValue: "#BC29A0"
  }
}, {
  key: "serviceRemark",
  label: "服务说明",
  span: {
    md: 24
  },
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
}, {
  key: "servicePort",
  label: "端口号",
  labelWidth: "80px",
  render: function render(form) {
    return _react.default.createElement(_inputNumber.default, {
      min: 11110,
      max: 65535,
      step: 10
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
  key: "myButton",
  label: " ",
  render: function render(form, changeFormItems) {
    return _react.default.createElement(_button.default, {
      type: "primary",
      onClick: function onClick() {
        // const newItems = this.items.slice(0);
        // newItems.splice(4, 1);
        // changeFormItems(hasHide ? this.items : newItems);
        changeFormItems({
          key: "servicePort",
          show: hasHide
        }, true);
        hasHide = !hasHide;
      }
    }, hasHide ? "显示" : "不显示", "\u7AEF\u53E3\u53F7");
  }
}, {
  key: "confProperty",
  label: "默认配置",
  span: 24,
  render: function render(form) {
    return _react.default.createElement(_input.default.TextArea, {
      rows: 15,
      placeholder: "\u8BF7\u8F93\u5165\u9ED8\u8BA4\u914D\u7F6E"
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

function getDemo(labelLayout) {
  var _temp;

  return _temp =
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
      _this.items = formItems;
      _this.defaultValue = {
        serviceCode: "9999",
        serviceRemark: "llll"
      };
      return _this;
    }

    (0, _createClass2.default)(Myjavascript, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(_Zform2.default, {
          labelLayout: labelLayout,
          formDefaultValues: this.defaultValue,
          items: this.items,
          onSubmit: function onSubmit(values) {
            console.log(values);
            return Promise.resolve().then(function (re) {
              _message2.default.success("提交成功：" + JSON.stringify(values));
            });
          }
        });
      }
    }]);
    return Myjavascript;
  }(_react.default.PureComponent), _temp;
}

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var Myjavascript = getDemo("inline");
    return _react.default.createElement(Myjavascript, null);
  },
  demo2: function demo2() {
    var Myjavascript = getDemo("vertical");
    return _react.default.createElement(Myjavascript, null);
  },
  demo3: function demo3() {
    var Myjavascript = getDemo("horizontal");
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

/***/ })

}]);
//# sourceMappingURL=8.875f875c10cec669f86f.js.map