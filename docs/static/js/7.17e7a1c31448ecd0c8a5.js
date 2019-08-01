(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "3oq6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(297);

/***/ }),

/***/ "4RYC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(220);

/***/ }),

/***/ "5GhF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(43);

/***/ }),

/***/ "ByDs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(305);

/***/ }),

/***/ "EIku":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(329);

/***/ }),

/***/ "HPR2":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zliveform\">动态表单配置：ZliveForm</h1>\n<p><code>ZliveForm</code>是动态表单配置模块</p>\n<p><code>ZliveForm.FormViewer</code>是动态表单展示模块(包括控件联动效果)</p>\n<p>控件联动功能有：1、单选/多选控制其他控件禁用，2、单选/多选控制其他控件必填，3、单选/多选控制其控件非必填，4、单选/多选 控制 其他单选/多选的选择项，5.1、单选/多选控制一个组隐藏，5.2、单选/多选控制其他控件隐藏，6、身份证号取出生年月日，7、单选联动异步请求选项</p>\n<p>2、ZliveForm 的例子</p>\n<div class=\"z-demo-box\" data-render=\"demo0\" data-title=\"ZliveForm的例子\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZliveForm } from &quot;zerod&quot;;\nimport formData from &quot;./formData&quot;;\nimport linkages from &quot;./linkages&quot;;\nclass Myjavascript extends React.PureComponent {\n    formData = { ...formData, linkages };\n    onSave = newFormData =&gt; {\n        console.log(newFormData);\n    };\n    render() {\n        return &lt;ZliveForm formData={this.formData} onSave={this.onSave} /&gt;;\n    }\n}</code></pre>\n<p>1、ZliveForm.FormViewer 的例子</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"ZliveForm.FormViewer的例子\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZliveForm } from &quot;zerod&quot;;\nimport formData from &quot;./formData&quot;;\nimport linkages from &quot;./linkages&quot;;\nclass Myjavascript extends React.PureComponent {\n    formData = { ...formData, linkages };\n    onSubmit = values =&gt; {\n        console.log(values);\n        return Promise.resolve();\n    };\n    render() {\n        return &lt;ZliveForm.FormViewer formData={this.formData} onSubmit={this.onSubmit} /&gt;;\n    }\n}</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zliveform-props\">ZliveForm 的 props</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>formData</td>\n<td>渲染整个表单的数据</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onSave</td>\n<td>保存按钮的事件</td>\n<td>function(newFormData){}</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zliveform-formviewer-props\">ZliveForm.FormViewer 的 props</h2>\n<p>可追 <code>className</code>、<code>style</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>formData</td>\n<td>渲染整个表单的数据</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>formValues</td>\n<td>表单字段对应的值</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onSubmit</td>\n<td>submit 类型的按钮触发表单验证通过后的确定回调函数，同/Zform 的 onSubmit</td>\n<td>function(values){return Promise.resolve()}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>momentFormat</td>\n<td>是否在触发 onSubmit 函数后里面传出的 values 中存在 moment 对象进行表单控件对应的 format 格式化，启用此属性，相关 moment 值的控件必需 format 属性</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>submitBtnRender</td>\n<td>表单之下的渲染函数，可以渲染一个或多个按钮，或者其他内容。提供了一个 submit 函数，可以直接绑定给提交按钮 click 等,触发后会用 onSubmit 回调</td>\n<td>(submit)=&gt;{return ReactNode}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>linkage</td>\n<td>是否启用联动功能 (联动的前提 formData 中存在 linkages 配置)</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>title</td>\n<td>表单的标题，默认来自 formData.name, 如果 title==false,则不显示标题</td>\n<td>boolean | string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>afterItemsRendered</td>\n<td>所有表单控件渲染完成（包括异步）的回调</td>\n<td>funcion</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<h2 id=\"zliveform-formviewer-ref-\">ZliveForm.FormViewer 实例方法 (通过 Ref 取得)</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>getEachFormMethod</td>\n<td>获取所有 Zform 的 form 实例和 methods</td>\n<td>getEachFormMethod()</td>\n<td>[{form,methods}]</td>\n</tr>\n</tbody></table>\n<h2 id=\"formdata-\">formData 基本结构</h2>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"formData\"></div>\n\n<pre><code class=\"language-json\">{\n    &quot;id&quot;: 111, //formId\n    &quot;name&quot;: &quot;养犬信息登记表&quot;,\n    &quot;code&quot;: &quot;dog_check_in_form&quot;,\n    &quot;description&quot;: &quot;养犬信息登记表&quot;,\n    &quot;linkages&quot;: [\n        //联动配置\n        {\n            &quot;linkageType&quot;: &quot;5.1&quot;,\n            &quot;name&quot;: &quot;单选/多选控制组隐藏&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;rfid&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;groupId&quot;: 113,\n                            &quot;groupName&quot;: &quot;名称&quot;\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;5.2&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件隐藏&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;isEntity&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;recipientName&quot;,\n                            &quot;label&quot;: &quot;收件人姓名&quot;,\n                            &quot;fieldType&quot;: 1\n                        },\n                        {\n                            &quot;fieldKey&quot;: &quot;contact&quot;,\n                            &quot;label&quot;: &quot;联系方式&quot;,\n                            &quot;fieldType&quot;: 4\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;1&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件禁用&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;dogSex&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;dogProperty&quot;,\n                            &quot;label&quot;: &quot;犬只性质&quot;,\n                            &quot;fieldType&quot;: 3\n                        },\n                        {\n                            &quot;fieldKey&quot;: &quot;dogColor&quot;,\n                            &quot;label&quot;: &quot;犬只颜色&quot;,\n                            &quot;fieldType&quot;: 1\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;2&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件必填&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;isIris&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;birthday&quot;,\n                            &quot;label&quot;: &quot;出生日期&quot;,\n                            &quot;fieldType&quot;: 5\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;3&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件非必填&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;isIris&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;1&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;birthday&quot;,\n                            &quot;label&quot;: &quot;出生日期&quot;,\n                            &quot;fieldType&quot;: 5\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;4&quot;,\n            &quot;name&quot;: &quot;单选/多选 控制 选项&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;rfid&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;1&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;domicile&quot;,\n                            &quot;label&quot;: &quot;住所性质&quot;,\n                            &quot;options&quot;: [\n                                { &quot;label&quot;: &quot;自有&quot;, &quot;value&quot;: &quot;1&quot; },\n                                { &quot;label&quot;: &quot;租赁&quot;, &quot;value&quot;: &quot;2&quot; },\n                                { &quot;label&quot;: &quot;其他&quot;, &quot;value&quot;: &quot;3&quot; }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;domicile&quot;,\n                            &quot;label&quot;: &quot;住所性质&quot;,\n                            &quot;options&quot;: [{ &quot;label&quot;: &quot;自有&quot;, &quot;value&quot;: &quot;1&quot; }]\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    &quot;sectionList&quot;: [\n        //表单控件组\n        {\n            &quot;id&quot;: 111, //groupId\n            &quot;formId&quot;: 111,\n            &quot;name&quot;: &quot;犬只信息&quot;,\n            &quot;seq&quot;: 1, //组排序\n            &quot;description&quot;: &quot;犬只信息表&quot;,\n            &quot;formFieldInfoList&quot;: [\n                //表单控件\n                {\n                    &quot;id&quot;: 466,\n                    &quot;sectionId&quot;: 111,\n                    &quot;label&quot;: &quot;犬只名称&quot;,\n                    &quot;fieldKey&quot;: &quot;dogName&quot;,\n                    &quot;fieldType&quot;: 1, //控件类型\n                    &quot;required&quot;: 1, //是否必填\n                    &quot;regularExpression&quot;: null, //正则表达式\n                    &quot;description&quot;: null,\n                    &quot;errorMsg&quot;: null, //验证失败的提示信息\n                    &quot;placeholder&quot;: null,\n                    &quot;span&quot;: 8, //栅栏占格(1-24)\n                    &quot;labelWidth&quot;: 4,\n                    &quot;config&quot;: &quot;{\\&quot;maxLength\\&quot;:8,\\&quot;minLength\\&quot;:1}&quot;, //规则配置等\n                    &quot;initialValue&quot;: null, //初始值\n                    &quot;seq&quot;: 1 //排序\n                }\n            ]\n        },\n        {\n            &quot;id&quot;: 112,\n            &quot;formId&quot;: 111,\n            &quot;name&quot;: &quot;养犬人信息&quot;,\n            &quot;seq&quot;: 2,\n            &quot;description&quot;: &quot;养犬人信息表&quot;,\n            &quot;gmtCreate&quot;: &quot;2019-03-26 12:09:59&quot;,\n            &quot;gmtModified&quot;: &quot;2019-03-26 12:09:59&quot;,\n            &quot;formFieldInfoList&quot;: [\n                {\n                    &quot;id&quot;: 475,\n                    &quot;sectionId&quot;: 112,\n                    &quot;label&quot;: &quot;养犬人姓名&quot;,\n                    &quot;fieldKey&quot;: &quot;name&quot;,\n                    &quot;fieldType&quot;: 1,\n                    &quot;required&quot;: 1,\n                    &quot;regularExpression&quot;: null,\n                    &quot;description&quot;: null,\n                    &quot;errorMsg&quot;: null,\n                    &quot;placeholder&quot;: null,\n                    &quot;span&quot;: 8,\n                    &quot;labelWidth&quot;: 4,\n                    &quot;config&quot;: &quot;{\\&quot;maxLength\\&quot;:8,\\&quot;minLength\\&quot;:1}&quot;,\n                    &quot;initialValue&quot;: null,\n                    &quot;seq&quot;: 1\n                }\n            ]\n        }\n    ],\n    //为某些控件添加onChange事件\n    &quot;customOnChange&quot;: {\n        &quot;dogType&quot;: function(field, imperativeRef, e) {\n            console.log(&quot;dogType&quot;, field, imperativeRef.current(), e);\n        }\n    },\n    //为某些控件添加自定义rules\n    &quot;customFormRules&quot;: {\n        &quot;dogName&quot;: function(field, imperativeRef) {\n            console.log(&quot;dogName&quot;, field, imperativeRef.current());\n            return [\n                {\n                    &quot;validator&quot;: (rule, value, callback) =&gt; {}\n                }\n            ];\n        }\n    }\n}</code></pre>\n";

/***/ }),

/***/ "K9rc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(27);

/***/ }),

/***/ "KQGt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(319);

/***/ }),

/***/ "LPA5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(438);

/***/ }),

/***/ "Nmzi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(28);

/***/ }),

/***/ "QEvK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(363);

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(497);

/***/ }),

/***/ "UYYe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(81);

/***/ }),

/***/ "XPDk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(365);

/***/ }),

/***/ "cqVX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(20);

/***/ }),

/***/ "dlQH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(366);

/***/ }),

/***/ "e1N5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(316);

/***/ }),

/***/ "e6XE":
/***/ (function(module) {

module.exports = {};

/***/ }),

/***/ "eb80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("hbJK");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("Wza8");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/tag/index.js + 2 modules
var tag = __webpack_require__("AcHM");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("C7dO");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/col/index.js
var col = __webpack_require__("Zwxx");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__("jZVE");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("U7E1");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/modal/index.js + 7 modules
var modal = __webpack_require__("QwZN");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/slider/index.js + 8 modules
var slider = __webpack_require__("X4Km");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/objectSpread.js
var objectSpread = __webpack_require__("JOet");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("eT9S");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("hQ8H");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/message/index.js
var message = __webpack_require__("2ZQn");

// EXTERNAL MODULE: delegated ./node_modules/_react@16.8.6@react/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("uqIC");
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: delegated ./node_modules/_prop-types@15.7.2@prop-types/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("EH+i");
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: ./node_modules/zerod/components/zTool/index.js + 3 modules
var zTool = __webpack_require__("/sSO");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZliveForm/style.scss
var ZliveForm_style = __webpack_require__("dVQ/");
var style_default = /*#__PURE__*/__webpack_require__.n(ZliveForm_style);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("JWaM");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("bren");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: delegated ./node_modules/_moment@2.24.0@moment/moment.js from dll-reference _dll_vendor_af5b108254eb523f1722
var momentfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("a/LZ");
var momentfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(momentfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("LxjT");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/zerod/components/Zform/controls.js + 97 modules
var controls = __webpack_require__("VoWU");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZerodMainContext.js
var ZerodMainContext = __webpack_require__("MaNN");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZerodLayerContext.js
var ZerodLayerContext = __webpack_require__("Y3vA");

// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/ZeroUpload.jsx














function getFileUids(files) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "uid";
  return files.map(function (file) {
    return file[key];
  });
}

var propTypes = {
  config: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object,
  getUserInfo: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  getInsertLocation: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  getLayerModalInsertLocation: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  showModalLoading: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  showLayerModalLoading: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  value: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.array,
  onChange: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func
};
var defaultProps = {
  getUserInfo: function getUserInfo() {
    return {};
  },
  getInsertLocation: function getInsertLocation() {
    return null;
  },
  showModalLoading: function showModalLoading() {
    return null;
  }
};
/**
 * config
 * 	{
 * 		url:多文件上传的接口,
 * 		urlMethod:多文件上传请求方式,
 * 		urlParamName:上传接口的参数名,
 * 		detailUrl:获取多文件列表的接口,
 * 		detailUrlMethod:获取多文件请求类型，
 * 		detailUrlParamName:获取多文件列表的接口的参数名,
 * 		userIdName:"userId",// 用户id参数名
 * 	}
 */
//上传文件组件(多文件)

var MyUpload = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var config = props.config,
      getUserInfo = props.getUserInfo,
      getInsertLocation = props.getInsertLocation,
      getLayerModalInsertLocation = props.getLayerModalInsertLocation,
      showModalLoading = props.showModalLoading,
      showLayerModalLoading = props.showLayerModalLoading,
      value = props.value,
      onChange = props.onChange;
  var wrapperElRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null); //fileList：上传文件的列表数据，setTruefileList：文件数据流

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])({
    fileList: [],
    setTruefileList: []
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      fileState = _useState2[0],
      setFileState = _useState2[1]; //保存已上传文件的uid和服务id


  var hasUploadDoneServerIdsRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])([]);
  var noUploader = fileState.setTruefileList.filter(function (file) {
    // console.log("---ids", hasUploadDoneServerIdsRef.current, getFileUids(hasUploadDoneServerIdsRef.current));
    return !getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid);
  }); // console.log(noUploader, hasUploadDoneServerIdsRef.current, fileState);
  //获取调用showModalLoading的第二个参数

  var modalRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])("");
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    modalRef.current = getLayerModalInsertLocation && typeof getLayerModalInsertLocation === "function" ? getLayerModalInsertLocation(wrapperElRef.current) : typeof getInsertLocation === "function" ? getInsertLocation(wrapperElRef.current) : null;
  }, []);
  var showLoading = showLayerModalLoading && typeof showLayerModalLoading === "function" ? showLayerModalLoading : typeof showModalLoading === "function" ? showModalLoading : function () {
    return null;
  }; //处理value

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    if (!is_array_default()(value) || !value.length) {
      setFileState({
        fileList: [],
        setTruefileList: []
      });
      return;
    } // if (!config.detailUrl) {
    // 	message.error("未配置请求多文件的后台地址");
    // 	return;
    // }
    // const hasGetDetailIds = value.filter(id => {
    // 	return !getFileUids(hasUploadDoneServerIdsRef.current, "serverId").includes(id);
    // });


    var hasGetDetailIds = value.filter(function (server) {
      var currentServers = getFileUids(hasUploadDoneServerIdsRef.current, "serverId");
      var hasServer = currentServers.find(function (item) {
        return item.id === server.id;
      });
      return !hasServer;
    }); // console.log(modalRef.current)

    if (hasGetDetailIds.length) {
      var files = hasGetDetailIds.filter(function (item) {
        var isPic = item.id && item.filePath;

        if (!isPic) {
          console.warn("上传控件的value缺少id、filePath等字段");
        }

        return isPic;
      }).map(function (item) {
        hasUploadDoneServerIdsRef.current.push({
          uid: item.id,
          serverId: item
        });
        return {
          uid: item.id,
          name: "".concat(item.originalFileName, ".").concat(item.fileSuffix),
          status: "done",
          type: item.fileType,
          url: item.filePath
        };
      });
      setFileState({
        fileList: [].concat(toConsumableArray_default()(fileState.fileList), toConsumableArray_default()(files)),
        setTruefileList: [].concat(toConsumableArray_default()(fileState.setTruefileList), toConsumableArray_default()(files))
      }); // showLoading(true, modalRef.current, "获取文件中...");
      // httpAjax(config.detailUrlMethod ? config.detailUrlMethod : "post", config.detailUrl, {
      // 	[config.detailUrlParamName ? config.detailUrlParamName : "fileIds"]: hasGetDetailIds,
      // })
      // 	.then(re => {
      // 		const files = re.data.map(item => {
      // 			return {
      // 				uid: item.id,
      // 				name: `${item.originalFileName}.${item.fileSuffix}`,
      // 				status: "done",
      // 				type: item.fileType,
      // 				url: item.filePath,
      // 			};
      // 		});
      // 		hasUploadDoneServerIdsRef.current = [
      // 			...hasUploadDoneServerIdsRef.current,
      // 			...re.data.map(item => {
      // 				return { uid: item.id, serverId: item.id };
      // 			}),
      // 		];
      // 		setFileState({
      // 			fileList: [...fileState.fileList, ...files],
      // 			setTruefileList: [...fileState.setTruefileList, ...files],
      // 		});
      // 	})
      // 	.catch(re => {
      // 		message.error(re && re.msg ? re.msg : "获取已上传列表失败。");
      // 	})
      // 	.finally(() => {
      // 		showLoading(false, modalRef.current);
      // 	});
    }
  }, [value]); //上传文件

  var uploadAsync = function uploadAsync() {
    if (!config.url) {
      message["a" /* default */].error("未配置上传多文件的后台地址");

      return;
    }

    var userinfo = getUserInfo();
    var userId = userinfo && userinfo.userDO ? userinfo.userDO.id : ""; // console.log("userinfo---", userinfo);

    var formData = new FormData();
    noUploader.forEach(function (file) {
      formData.append(config.urlParamName ? config.urlParamName : "files", file);
    });
    showLoading(true, modalRef.current, "上传中...");
    Object(zTool["k" /* httpAjax */])(config.urlMethod ? config.urlMethod : "post", "".concat(config.url, "?").concat(config.userIdName ? config.userIdName : "userId", "=").concat(userId), formData).then(function (re) {
      hasUploadDoneServerIdsRef.current = [].concat(toConsumableArray_default()(hasUploadDoneServerIdsRef.current), toConsumableArray_default()(re.data.map(function (server, i) {
        return {
          uid: noUploader[i].uid,
          serverId: server
        };
      })));
      setFileState(objectSpread_default()({}, fileState, {
        fileList: fileState.fileList.map(function (file) {
          return objectSpread_default()({}, file, {
            status: getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid) ? "done" : "undetermined"
          });
        })
      }));

      message["a" /* default */].success("上传成功。");

      typeof onChange === "function" && onChange(getFileUids(hasUploadDoneServerIdsRef.current, "serverId"));
    }).catch(function (re) {
      message["a" /* default */].error(re && re.msg ? re.msg : "上传失败。");
    }).finally(function () {
      showLoading(false, modalRef.current);
    });
  }; //确认上传事件


  var handleUpload = function handleUpload() {
    if (noUploader.length) {
      uploadAsync();
    }
  }; //确认上传按钮


  var commitButton = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-liveform-upload-btn z-margin-top-10",
    onClick: handleUpload
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "check"
  }), " \u4E0A\u4F20")); //选文件按钮

  var uploadButton = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-liveform-upload-btn"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "upload"
  }), " \u9009\u62E9\u6587\u4EF6"));
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-liveform-upload-wrapper",
    ref: wrapperElRef
  }, Object(controls["a" /* getControl */])("Upload", {
    children: uploadButton,
    multiple: config.multiple,
    // action: config.url,
    listType: "picture",
    name: "file",
    className: "z-liveform-upload",
    accept: config.accept,
    //onChange={this.handleUploadChange}
    fileList: fileState.fileList,
    onPreview: function onPreview(file) {
      console.log("----", file);
    },
    //移除
    onRemove: function onRemove(file) {
      function removeFlieFromList() {
        var index = fileState.fileList.findIndex(function (item) {
          return item.uid === file.uid;
        });
        var serverIndex = hasUploadDoneServerIdsRef.current.findIndex(function (item) {
          return item.uid === file.uid;
        });

        if (serverIndex > -1) {
          hasUploadDoneServerIdsRef.current.splice(serverIndex, 1);
          typeof onChange === "function" && onChange(getFileUids(hasUploadDoneServerIdsRef.current, "serverId"));
        }

        if (index > -1) {
          fileState.fileList.splice(index, 1);
          fileState.setTruefileList.splice(index, 1);
          setFileState({
            fileList: toConsumableArray_default()(fileState.fileList),
            setTruefileList: toConsumableArray_default()(fileState.setTruefileList)
          });
        }
      }

      if (getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid)) {
        modal["a" /* default */].confirm({
          title: "此文件已上传到服务器，确定从列表中移除?",
          content: "",
          okText: "确定",
          cancelText: "取消",
          onOk: function onOk() {
            removeFlieFromList();
          }
        });
      } else {
        removeFlieFromList();
      }
    },
    //取消自动上传，实现手动上传
    beforeUpload: function beforeUpload(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function () {
        setFileState({
          fileList: [].concat(toConsumableArray_default()(fileState.fileList), [{
            uid: file.uid,
            name: file.name,
            status: "undetermined",
            type: file.type,
            url: reader.result
          }]),
          setTruefileList: [].concat(toConsumableArray_default()(fileState.setTruefileList), [file])
        });
      };

      return false;
    }
  }), noUploader.length ? commitButton : null);
});
MyUpload.propTypes = propTypes;
MyUpload.defaultProps = defaultProps;
/* harmony default export */ var ZeroUpload = (ZerodMainContext["a" /* default */].setConsumer(ZerodLayerContext["a" /* default */].setConsumer(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(MyUpload))));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/controls.js














var controls_getOptionsRules = function getOptionsRules(e) {
  var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var reg = typeof e.regularExpression === "string" ? e.regularExpression.replace(/((^\/)|(\/$))/g, "") : "";
  return Object(controls["b" /* getOptions */])({
    required: e.required,
    initialValue: e.initialValue,
    rules: reg ? [].concat(toConsumableArray_default()(rules), [{
      pattern: reg,
      message: e.errorMsg
    }]) : rules
  });
};
var dateFormats = {
  "YYYY-wo": "WeekPicker",
  YYYY: "YearPicker",
  "YYYY-MM": "MonthPicker",
  "YYYY-MM-DD": "DatePicker",
  "YYYY-MM-DD HH:mm": "DatePicker",
  "YYYY-MM-DD HH:mm:ss": "DatePicker",
  "YYYY-MM-DD h:mm a": "DatePicker",
  "YYYY-MM-DD h:mm:ss a": "DatePicker",
  "YYYY-MM-DD - YYYY-MM-DD": "RangePicker",
  "YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm": "RangePicker",
  "YYYY-MM-DD HH:mm:ss - YYYY-MM-DD HH:mm:ss": "RangePicker",
  "HH:mm": "TimePicker",
  "HH:mm:ss": "TimePicker",
  "h:mm a": "TimePicker",
  "h:mm:ss a": "TimePicker",
  "HH:mm - HH:mm": "TimeRange",
  "HH:mm:ss - HH:mm:ss": "TimeRange"
};

function docustomOnChange(e, opt) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (zTool["e" /* dataType */].isObject(e.customOnChange)) {
    var confun = e.customOnChange[e.fieldKey];
    zTool["e" /* dataType */].isFunction(confun) && confun.apply(void 0, [e, e.imperative].concat(rest));
  }

  typeof opt.onChange === "function" && opt.onChange.apply(opt, rest);
}

function treeDataAddKey() {
  var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var distKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    label: "label",
    value: "value",
    children: "children",
    key: "key"
  };
  var srcKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    label: "label",
    value: "value",
    children: "children"
  };
  var isLeaf = arguments.length > 3 ? arguments[3] : undefined;
  return is_array_default()(tree) ? tree.map(function (item) {
    var _ref;

    var ciilds = treeDataAddKey(item[srcKey.children], distKey, srcKey, isLeaf);
    return _ref = {}, defineProperty_default()(_ref, distKey.label, item[srcKey.label]), defineProperty_default()(_ref, distKey.value, item[srcKey.value]), defineProperty_default()(_ref, distKey.children, ciilds.length ? ciilds : null), defineProperty_default()(_ref, distKey.key, item[srcKey.value]), defineProperty_default()(_ref, "isLeaf", isLeaf), _ref;
  }) : [];
}

function selectControl(controlName) {
  return function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var linkages = arguments.length > 1 ? arguments[1] : undefined;
    var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
      return [];
    };
    var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var currentForm = arguments.length > 5 ? arguments[5] : undefined;
    var isAsync = opt.isAsync;
    delete opt.isAsync;
    var config = e.config || {};

    if (typeof e.config == "string") {
      try {
        config = JSON.parse(e.config);
      } catch (e) {}
    }

    var _config = config,
        selectionsType = _config.selectionsType,
        selectionsUrl = _config.selectionsUrl,
        selectList = _config.selectList,
        selectionsQuery = _config.selectionsQuery,
        selectListFieldNames = _config.selectListFieldNames,
        others = objectWithoutProperties_default()(_config, ["selectionsType", "selectionsUrl", "selectList", "selectionsQuery", "selectListFieldNames"]);

    function getCurrentControl(selectList) {
      if (currentForm) {
        //保存已有的selectList
        currentForm.saveFieldOptions[e.fieldKey] = selectList; // currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;
      }

      return Object(controls["a" /* getControl */])(controlName, objectSpread_default()({
        placeholder: e.placeholder,
        selectList: selectList
      }, others, opt, {
        onChange: function onChange() {
          for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            rest[_key2] = arguments[_key2];
          }

          console.log(rest);
          linkageAction(linkages, getGroupsFn, e);
          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    } //异步类型


    if (selectionsType == 2) {
      if (!isAsync && currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
        return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
      }

      return Object(zTool["k" /* httpAjax */])(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, objectSpread_default()({}, selectionsQuery, requestQuery)).then(function (re) {
        return getCurrentControl(treeDataAddKey(re.data, undefined, selectListFieldNames, undefined));
      });
    } //自定义选项类型


    return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, undefined));
  };
}

var controls_controls = {
  //Input
  1: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return Object(controls["a" /* getControl */])("Input", objectSpread_default()({
        placeholder: e.placeholder
      }, config, opt, {
        onBlur: function onBlur() {
          linkageAction(linkages, getGroupsFn, e);
        },
        onChange: function onChange() {
          for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            rest[_key3] = arguments[_key3];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var regType = e.regType; //regType 来自Zform/controls的regExps

      return controls_getOptionsRules(e, regType ? [controls["c" /* regExps */][regType]].concat(toConsumableArray_default()(rules)) : rules);
    }
  },
  //TextArea
  2: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return Object(controls["a" /* getControl */])("TextArea", objectSpread_default()({
        placeholder: e.placeholder
      }, config, opt, {
        onChange: function onChange() {
          for (var _len4 = arguments.length, rest = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            rest[_key4] = arguments[_key4];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: controls_getOptionsRules
  },
  //Select
  3: {
    getControl: selectControl("Select"),
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var field = objectSpread_default()({}, e);

      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      if (["multiple", "tags"].includes(config.mode)) {
        field.initialValue = typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
      }

      return controls_getOptionsRules(field, rules);
    }
  },
  //InputNumber
  4: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return Object(controls["a" /* getControl */])("InputNumber", objectSpread_default()({
        placeholder: e.placeholder
      }, config, opt, {
        onChange: function onChange() {
          for (var _len5 = arguments.length, rest = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            rest[_key5] = arguments[_key5];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: controls_getOptionsRules
  },
  //日期/时间控件
  5: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      var showTime = false;
      config.format = config.format ? config.format : "";
      var format = config.format;

      var setShowTime = function setShowTime(format) {
        if (format.startsWith("YYYY") && (format.includes("HH") || format.includes("h"))) {
          showTime = {
            format: format.split(" ")[1],
            use12Hours: format.includes("h")
          };
        }
      };

      if (config.format.includes(" - ")) {
        format = config.format.split(" - ")[0]; // console.log(format)

        setShowTime(format);
      } else {
        setShowTime(config.format);
      } // let defaultOpt = {};


      var timeOpt = {
        showTime: showTime
      };

      if (dateFormats[config.format] === "TimePicker") {
        timeOpt = {
          use12Hours: config.format.includes("h")
        };
      }

      return Object(controls["a" /* getControl */])(dateFormats[config.format], objectSpread_default()({
        format: format,
        placeholder: e.placeholder
      }, opt, timeOpt, {
        // ...defaultOpt,
        onChange: function onChange() {
          for (var _len6 = arguments.length, rest = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            rest[_key6] = arguments[_key6];
          }

          // console.log(rest);
          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(es) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var e = objectSpread_default()({}, es);

      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config.format = config.format ? config.format : "";
      var isTimeRange = ["RangePicker", "TimeRange"].includes(dateFormats[config.format]);
      var format = config.format.includes(" - ") ? config.format.split(" - ")[0] : config.format;

      if (isTimeRange) {
        if (e.required) rules.push({
          validator: function validator(rule, value, callback) {
            if (is_array_default()(value) && value.length === 2) {
              callback();
            } else {
              callback("未填完整");
            }
          }
        });
        e.initialValue = typeof e.initialValue === "string" && e.initialValue.includes("-") ? e.initialValue.split("-") : e.initialValue;
        e.initialValue = is_array_default()(e.initialValue) && e.initialValue.length ? e.initialValue.map(function (time) {
          return momentfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default()(time, format);
        }) : null;
      } else {
        if (typeof e.initialValue === "string") {
          try {
            e.initialValue = momentfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default()(e.initialValue, format);
          } catch (e) {
            throw Error("initialValue格式有误");
          }
        }
      }

      return controls_getOptionsRules(e, rules);
    }
  },
  //Cascader级联
  6: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var currentForm = arguments.length > 5 ? arguments[5] : undefined;
      // const that = this;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      var _config2 = config,
          selectionsType = _config2.selectionsType,
          selectionsUrl = _config2.selectionsUrl,
          selectList = _config2.selectList,
          selectionsQuery = _config2.selectionsQuery,
          selectListFieldNames = _config2.selectListFieldNames,
          changeOnSelect = _config2.changeOnSelect,
          others = objectWithoutProperties_default()(_config2, ["selectionsType", "selectionsUrl", "selectList", "selectionsQuery", "selectListFieldNames", "changeOnSelect"]);

      function getCurrentControl(selectList) {
        var newProps = objectSpread_default()({}, others, {
          changeOnSelect: changeOnSelect
        }, opt, {
          selectionsUrl: selectionsUrl,
          selectionsQuery: selectionsQuery,
          placeholder: e.placeholder,
          selectList: selectList,
          optionsChange: function optionsChange(options) {
            if (currentForm) {
              //保存已有的selectList
              currentForm.saveFieldOptions[e.fieldKey] = options; // currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;
            }
          },
          selectListFieldNames: selectListFieldNames,
          onChange: function onChange() {
            linkageAction(linkages, getGroupsFn, e);

            for (var _len7 = arguments.length, rest = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              rest[_key7] = arguments[_key7];
            }

            docustomOnChange.apply(void 0, [e, opt].concat(rest));
          }
        });

        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(CascaderLoader, newProps);
      } //异步类型


      if (selectionsType == 2) {
        if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
          return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
        }

        return Object(zTool["k" /* httpAjax */])(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, objectSpread_default()({}, selectionsQuery, requestQuery)).then(function (re) {
          return getCurrentControl(treeDataAddKey(re.data, undefined, selectListFieldNames, selectionsUrl.requireType !== "part" // false  即为分部加载
          ));
        });
      } //自定义选项类型


      return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, true));
    },
    getOptions: controls_getOptionsRules
  },
  //TreeSelect树选择
  7: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var currentForm = arguments.length > 5 ? arguments[5] : undefined;
      // const that = this;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      var _config3 = config,
          selectionsType = _config3.selectionsType,
          selectionsUrl = _config3.selectionsUrl,
          selectList = _config3.selectList,
          selectionsQuery = _config3.selectionsQuery,
          selectListFieldNames = _config3.selectListFieldNames,
          others = objectWithoutProperties_default()(_config3, ["selectionsType", "selectionsUrl", "selectList", "selectionsQuery", "selectListFieldNames"]);

      function getCurrentControl(selectList) {
        var newProps = objectSpread_default()({}, others, opt, {
          selectionsUrl: selectionsUrl,
          selectionsQuery: selectionsQuery,
          placeholder: e.placeholder,
          selectList: selectList,
          optionsChange: function optionsChange(options) {
            if (currentForm) {
              //保存已有的selectList
              currentForm.saveFieldOptions[e.fieldKey] = options;
              currentForm.saveOptionsMapKey[e.fieldKey] = {
                label: "title",
                value: "value",
                children: "children"
              };
            }
          },
          selectListFieldNames: selectListFieldNames,
          onChange: function onChange() {
            linkageAction(linkages, getGroupsFn, e);

            for (var _len8 = arguments.length, rest = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              rest[_key8] = arguments[_key8];
            }

            docustomOnChange.apply(void 0, [e, opt].concat(rest));
          }
        });

        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(TreeSelectLoader, newProps);
      } //异步类型


      if (selectionsType == 2) {
        if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
          return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
        }

        return Object(zTool["k" /* httpAjax */])(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, objectSpread_default()({}, selectionsQuery, requestQuery)).then(function (re) {
          return getCurrentControl(treeDataAddKey(re.data, {
            label: "title",
            value: "value",
            children: "children",
            key: "key"
          }, selectListFieldNames, selectionsUrl.requireType !== "part" // false  即为分部加载
          ));
        });
      } //自定义选项类型


      return getCurrentControl(treeDataAddKey(selectList, {
        label: "title",
        value: "value",
        children: "children",
        key: "key"
      }, selectListFieldNames, true));
    },
    getOptions: controls_getOptionsRules
  },
  //Checkbox.Group
  8: {
    getControl: selectControl("Checkbox.Group"),
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var field = objectSpread_default()({}, e);

      field.initialValue = typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
      return controls_getOptionsRules(field, rules);
    }
  },
  //Radio.Group
  9: {
    getControl: selectControl("Radio.Group"),
    getOptions: controls_getOptionsRules
  },
  // //TimePicker
  // 10: {
  // 	getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
  // 		return getControl("TimePicker", {
  // 			format: e.format,
  // 			placeholder: e.placeholder,
  // 			...opt,
  // 			onChange: (...rest) => {
  // 				docustomOnChange(e,opt, ...rest);
  // 			},
  // 		});
  // 	},
  // 	getOptions: getOptionsRules,
  // },
  //Upload
  11: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZeroUpload, {
        config: objectSpread_default()({}, config, {
          multiple: e.multiple
        })
      });
    },
    getOptions: controls_getOptionsRules
  },
  //ColorPicker
  12: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return Object(controls["a" /* getControl */])("ColorPicker", objectSpread_default()({}, config, opt, {
        onChange: function onChange() {
          for (var _len9 = arguments.length, rest = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            rest[_key9] = arguments[_key9];
          }

          e.currentSaturability = rest[1] ? rest[1].hsv.s : 0; // console.log("color-change", rest[1]);

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      if (config.minSaturability > 0) {
        rules.push({
          validator: function validator(rule, value, callback) {
            var currentSaturability = e.currentSaturability;

            if (currentSaturability && config.minSaturability > currentSaturability) {
              return callback(e.errorMsg ? e.errorMsg : "\u9971\u548C\u5EA6\u4E0D\u80FD\u5C0F\u4E8E".concat(config.minSaturability * 100, "%"));
            }

            return callback();
          }
        });
      }

      return controls_getOptionsRules(e, rules);
    }
  },
  //地图选点
  13: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(MapChooseAddress, objectSpread_default()({
        placeholder: e.placeholder
      }, config, opt));
    },
    getOptions: controls_getOptionsRules
  }
};
/* harmony default export */ var ZliveForm_controls = (controls_controls);
var LoadMapIframe = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var mapType = props.mapType,
      value = props.value,
      onChange = props.onChange;
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    var messageCallback = null;

    if (mapType === "amap") {
      //高德地图
      var iframe = document.getElementById("addressIframe").contentWindow;

      document.getElementById("addressIframe").onload = function () {
        iframe.postMessage("hello", "https://m.amap.com/picker/");
      };

      messageCallback = function messageCallback(event) {
        var loc = event.data;
        var latlng = loc.location.split(",");
        onChange && onChange({
          name: loc.name,
          address: loc.address,
          longitude: latlng[0],
          latitude: latlng[1]
        });
      };
    } else if (mapType === "qqmap") {
      //腾讯地图
      messageCallback = function messageCallback(event) {
        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data;

        if (loc && loc.module == "locationPicker") {
          //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          onChange && onChange({
            name: loc.poiname,
            address: loc.poiaddress,
            longitude: loc.latlng.lng,
            latitude: loc.latlng.lat
          });
        }
      };
    }

    if (messageCallback) {
      window.addEventListener("message", messageCallback, false);
      return function () {
        window.removeEventListener("message", messageCallback, false);
      };
    }
  }, []);
  var url = "";
  var center = "";

  if (zTool["e" /* dataType */].isObject(value)) {
    center = "".concat(value.longitude, ",").concat(value.latitude);
  }

  if (mapType === "amap") {
    url = "https://m.amap.com/picker/?center=".concat(center, "&key=3d5c1c6169c64554d6f9fcca35d4abff&total=20");
  } else if (mapType === "qqmap") {
    url = "https://apis.map.qq.com/tools/locpicker?coord=".concat(center, "&search=1&type=1&key=63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK&referer=wx_map&total=20");
  }

  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("iframe", {
    frameBorder: "0",
    width: "100%",
    height: "100%",
    id: "addressIframe",
    src: url
  });
});
var MapChooseAddress = ZerodMainContext["a" /* default */].setConsumer(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var value = props.value,
      _onChange = props.onChange,
      placeholder = props.placeholder,
      showRightModal = props.showRightModal,
      mapType = props.mapType,
      disabled = props.disabled;
  var inputValue = zTool["e" /* dataType */].isObject(value) ? "".concat(value.name, "[").concat(value.address, "]") : "";
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {}, []);

  var openMap = function openMap() {
    showRightModal({
      show: true,
      modal: "addressModal",
      scroll: false,
      width: "500px",
      content: _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(LoadMapIframe, {
        mapType: mapType || "qqmap",
        value: value,
        onChange: function onChange(val) {
          showRightModal({
            show: false,
            modal: "addressModal"
          });
          _onChange && _onChange(val);
        }
      })
    });
  };

  return Object(controls["a" /* getControl */])("Input", {
    value: inputValue,
    addonAfter: _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("i", {
      className: "zero-icon zerod-address z-address-btn",
      onClick: !disabled ? openMap : undefined
    }),
    placeholder: placeholder,
    disabled: disabled
  });
})); //Cascader 异步加载子节点组件

var CascaderLoader = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var changeOnSelect = props.changeOnSelect,
      selectList = props.selectList,
      selectionsUrl = props.selectionsUrl,
      selectionsQuery = props.selectionsQuery,
      selectListFieldNames = props.selectListFieldNames,
      optionsChange = props.optionsChange,
      others = objectWithoutProperties_default()(props, ["changeOnSelect", "selectList", "selectionsUrl", "selectionsQuery", "selectListFieldNames", "optionsChange"]);

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    setOptions(selectList);
  }, [selectList]);
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    optionsChange && optionsChange(options);
  }, [options]);
  return Object(controls["a" /* getControl */])("Cascader", objectSpread_default()({}, others, {
    options: options,
    changeOnSelect: Boolean(changeOnSelect),
    showSearch: false,
    loadData: selectionsUrl && selectionsUrl.requireType === "part" ? function (selectedOptions) {
      var targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
      Object(zTool["k" /* httpAjax */])(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, objectSpread_default()({}, selectionsQuery, {
        id: targetOption.value
      })).then(function (re) {
        if (is_array_default()(re.data) && re.data.length) {
          targetOption.children = treeDataAddKey(re.data, undefined, selectListFieldNames, false);
        } else {
          targetOption.children = null;
          targetOption.isLeaf = true;
        }
      }).catch(function (re) {
        targetOption.children = null;
      }).finally(function () {
        targetOption.loading = false;
        setOptions(toConsumableArray_default()(options));
      });
    } : undefined
  }));
}); //treeSelect 异步加载子节点组件

var TreeSelectLoader = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var selectList = props.selectList,
      selectionsUrl = props.selectionsUrl,
      selectionsQuery = props.selectionsQuery,
      selectListFieldNames = props.selectListFieldNames,
      optionsChange = props.optionsChange,
      others = objectWithoutProperties_default()(props, ["selectList", "selectionsUrl", "selectionsQuery", "selectListFieldNames", "optionsChange"]);

  var _useState3 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    setOptions(selectList);
  }, [selectList]);
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    optionsChange && optionsChange(options);
  }, [options]);
  return Object(controls["a" /* getControl */])("TreeSelect", objectSpread_default()({}, others, {
    treeData: options,
    showSearch: false,
    treeDefaultExpandAll: false,
    allowClear: true,
    loadData: selectionsUrl && selectionsUrl.requireType === "part" ? function (treeNode) {
      // console.log(treeNode);
      if (treeNode.props.isLeaf) {
        return promise_default.a.resolve();
      }

      return Object(zTool["k" /* httpAjax */])(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, objectSpread_default()({}, selectionsQuery, {
        id: treeNode.props.value
      })).then(function (re) {
        Object(zTool["o" /* itemsFromTree */])({
          tree: options,
          sourceItem: {
            value: treeNode.props.value
          },
          keyObj: {
            id: "value",
            children: "children"
          },
          action: function action(_ref2) {
            var tree = _ref2.tree,
                currentItem = _ref2.currentItem,
                item = _ref2.item,
                index = _ref2.index,
                keyObj = _ref2.keyObj;

            if (is_array_default()(re.data) && re.data.length) {
              currentItem.children = treeDataAddKey(re.data, {
                label: "title",
                value: "value",
                children: "children",
                key: "key"
              }, selectListFieldNames, false);
            } else {
              currentItem.children = null;
              currentItem.isLeaf = true;
            }
          }
        });
      }).finally(function () {
        setOptions(toConsumableArray_default()(options));
      });
    } : undefined
  }));
});
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/linkageAction.js









function concatKeys(values, arr, a, d) {
  var getNewFields = function getNewFields() {
    return d.fields.map(function (item) {
      return objectSpread_default()({}, item, {
        srcFieldKey: a.src.fieldKey
      });
    });
  };

  if (is_array_default()(values[a.src.fieldKey])) {
    if (is_array_default()(d.srcValue)) {
      if (stringify_default()(values[a.src.fieldKey]) == stringify_default()(d.srcValue)) {
        arr = arr.concat(getNewFields());
      }
    } else if (values[a.src.fieldKey].includes(d.srcValue)) {
      arr = arr.concat(getNewFields());
    }
  } else if (d.srcValue == values[a.src.fieldKey] || ["6", "7"].includes(a.linkageType)) {
    arr = arr.concat(getNewFields());
  }

  return arr;
}

var linkageAction_initialValueLinkageAction = function initialValueLinkageAction() {
  var ages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var getGroupsFn = arguments.length > 1 ? arguments[1] : undefined;
  var seftItem = arguments.length > 2 ? arguments[2] : undefined;
  ages = zTool["e" /* dataType */].isArray(ages) ? ages : [];
  if (!ages.length) return;
  setTimeout(function () {
    var formObjs = [];
    var groups = getGroupsFn();
    groups.forEach(function (g) {
      formObjs.push(g.groupRef.current.getForm());
    });
    var values = {};
    formObjs.forEach(function (o) {
      values = objectSpread_default()({}, values, o.form.getFieldsValue());
    });
    var cardGetBirthdayKeys = [];
    var asyncParamNameKeys = [];
    var groupHiddenIds = [];
    var hiddenKeys = [];
    var disabledKeys = [];
    var requiredKeys = [];
    var noRequiredKeys = [];
    var selectOptions = [];
    var hasClearSelect = false;
    ages.forEach(function (a) {
      if (values.hasOwnProperty(a.src.fieldKey)) {
        switch (a.linkageType) {
          //单选联动异步请求选项
          case "7":
            a.dist.forEach(function (d) {
              asyncParamNameKeys = concatKeys(values, asyncParamNameKeys, a, d);
            });
            break;
          //输入身份证自动联动生日

          case "6":
            a.dist.forEach(function (d) {
              cardGetBirthdayKeys = concatKeys(values, cardGetBirthdayKeys, a, d);
            });
            break;
          //隐藏

          case "5.1":
            a.dist.forEach(function (d) {
              groupHiddenIds = concatKeys(values, groupHiddenIds, a, d);
            });
            break;

          case "5.2":
            a.dist.forEach(function (d) {
              hiddenKeys = concatKeys(values, hiddenKeys, a, d);
            });
            break;
          //禁用

          case "1":
            a.dist.forEach(function (d) {
              disabledKeys = concatKeys(values, disabledKeys, a, d);
            });
            break;
          // 必填

          case "2":
            a.dist.forEach(function (d) {
              requiredKeys = concatKeys(values, requiredKeys, a, d);
            });
            break;
          // 非必填

          case "3":
            a.dist.forEach(function (d) {
              noRequiredKeys = concatKeys(values, noRequiredKeys, a, d);
            });
            break;
          // 控制选项

          case "4":
            hasClearSelect = seftItem && a.src.fieldKey == seftItem.fieldKey;
            a.dist.forEach(function (d) {
              selectOptions = concatKeys(values, selectOptions, a, d);
            }); // console.log("selectOptions",selectOptions)

            break;
        }
      }
    });
    var newFormObjs = [];
    var newItems = [];
    var asyncFields = [];
    groups.forEach(function (g, gindex) {
      var findHideGroup = groupHiddenIds.findIndex(function (gh) {
        return gh.groupName && gh.groupName === g.name;
      });
      g.groupRef.current.show(findHideGroup === -1);

      if (findHideGroup === -1) {
        newFormObjs.push(g.groupRef.current.getForm());
        g.formItems.forEach(function (field) {
          var hiddenFields = Object(zTool["d" /* arrayFilterBy */])(hiddenKeys, {
            fieldKey: field.fieldKey
          });

          if (values.hasOwnProperty(field.fieldKey)) {
            var disabledFields = Object(zTool["d" /* arrayFilterBy */])(disabledKeys, {
              fieldKey: field.fieldKey
            });
            var requiredFields = Object(zTool["d" /* arrayFilterBy */])(requiredKeys, {
              fieldKey: field.fieldKey
            });
            var noRequiredFields = Object(zTool["d" /* arrayFilterBy */])(noRequiredKeys, {
              fieldKey: field.fieldKey
            });
            var selectOptionsFields = Object(zTool["d" /* arrayFilterBy */])(selectOptions, {
              fieldKey: field.fieldKey
            });

            var e = objectSpread_default()({}, field);

            if (disabledFields.length) {
              e.required = 0;
            } else if (requiredFields.length && noRequiredFields.length) {
              console.error("\u540C\u4E2A\u63A7\u4EF6\u4E0D\u5E94\u8BE5\u540C\u65F6\u5B58\u5728\"\u5FC5\u586B\"\u548C\"\u975E\u5FC5\u586B\"\u8054\u52A8\u914D\u7F6E\uFF0C\u8BF7\u7EA0\u6B63");
            } else if (requiredFields.length) {
              e.required = 1;
            } else if (noRequiredFields.length) {
              e.required = 0;
            }

            if (typeof e.config == "string") {
              try {
                e.config = JSON.parse(e.config);
              } catch (e) {}
            }

            if (selectOptionsFields.length) {
              e.config = objectSpread_default()({}, e.config, {
                selectList: selectOptionsFields[0].options
              });
            } // console.log(selectOptionsFields,e)
            // console.log(selectOptionsFields, field.fieldKey, values);


            var control = disabledFields.length || selectOptionsFields.length ? ZliveForm_controls[e.fieldType].getControl(e, ages, getGroupsFn, {
              disabled: disabledFields.length > 0 || e.disabled
            }) : null;
            var options = stringify_default()(e) !== stringify_default()(field) ? ZliveForm_controls[e.fieldType].getOptions(e) : null;
            var newItem = {};

            if (control) {
              newItem.control = control;
            }

            if (options) {
              newItem.options = options;
            }

            newItems.push({
              key: e.fieldKey,
              show: !hiddenFields.length,
              newItem: control || options ? newItem : e.config.selectionsType == 2 ? undefined : "reset"
            }); //单选联动异步请求选项

            var paramField = asyncParamNameKeys.find(function (item) {
              return item.fieldKey === e.fieldKey;
            });

            if (paramField && e.config.selectionsType == 2) {
              e.config = objectSpread_default()({}, e.config, {
                selectionsQuery: objectSpread_default()({}, e.config.selectionsQuery, defineProperty_default()({}, paramField.asyncParamName, values[paramField.srcFieldKey]))
              });
              e.groupIndex = gindex;
              e.srcFieldKey = paramField.srcFieldKey;
              asyncFields.push(e);
            }
          } else {
            newItems.push({
              key: field.fieldKey,
              show: !hiddenFields.length
            });
          }
        });
      }
    }); // console.log(selectOptions)

    newFormObjs.forEach(function (o, i) {
      o.methods.changeFormItems(newItems, true);
      asyncFields.forEach(function (e) {
        if (i === e.groupIndex && (seftItem && e.srcFieldKey == seftItem.fieldKey || !seftItem)) {
          o.methods.changeFormItems({
            key: e.fieldKey,
            loading: true
          }, true);
          ZliveForm_controls[e.fieldType].getControl(e, ages, getGroupsFn, {
            isAsync: true
          }, undefined, o.form).then(function (control) {
            o.methods.changeFormItems({
              key: e.fieldKey,
              loading: false,
              newItem: {
                control: control
              }
            }, true);
          });
        }
      });
      var resetDisable = disabledKeys.map(function (item) {
        return item.fieldKey;
      });
      var resetNoRequired = noRequiredKeys.map(function (item) {
        return item.fieldKey;
      });
      var resetSelect = selectOptions.map(function (item) {
        return item.fieldKey;
      });
      o.form.validateFields([].concat(toConsumableArray_default()(resetDisable), toConsumableArray_default()(resetNoRequired)));
      o.form.resetFields([].concat(toConsumableArray_default()(resetDisable), toConsumableArray_default()(hasClearSelect ? resetSelect : []))); //处理身份证号码获取生日联动到其他控件：

      if (cardGetBirthdayKeys.length) {
        var formValues = o.form.getFieldsValue();
        cardGetBirthdayKeys.forEach(function (field) {
          if (formValues.hasOwnProperty(field.fieldKey)) {
            var birthday = values[field.srcFieldKey];
            var val = birthday && birthday.length > 14 ? birthday.substring(6, 14) : "";
            o.form.setFieldsValue(defineProperty_default()({}, field.fieldKey, field.fieldType == 5 ? momentfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default()(stringJoinSyml(val)) : stringJoinSyml(val)));
          }
        });
      }
    });
  }, 60);
};

function stringJoinSyml(str) {
  return str.length === 8 ? str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 8) : "";
}

/* harmony default export */ var linkageAction = (linkageAction_initialValueLinkageAction);
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/common.js




 //以 "seq" 字段排序

function sortList(o1, o2) {
  var v1 = o1.hasOwnProperty("seq") ? o1["seq"] : 0;
  var v2 = o2.hasOwnProperty("seq") ? o2["seq"] : 0;
  return v1 - v2;
}

function pareLinkages(linkages) {
  if (is_array_default()(linkages)) {
    return linkages;
  } else if (typeof linkages === "string" && /^\[.+/.test(linkages)) {
    return JSON.parse(linkages);
  }

  return [];
}
function getFormItem(field, group, linkage, getGroupsFn, imperative, customOnChange, customFormRules) {
  var getRules = customFormRules ? customFormRules[field.fieldKey] : null;

  var newField = objectSpread_default()({}, field, {
    groupId: group.id,
    seq: field.seq,
    key: field.fieldKey,
    label: field.label,
    span: field.span ? field.span : 8,
    labelFocused: [8, 9, 11, 5].includes(field.fieldType),
    imperative: imperative,
    customOnChange: customOnChange
  });

  newField.options = ZliveForm_controls[field.fieldType].getOptions(newField, typeof getRules === "function" ? getRules(newField, imperative) : []);

  newField.render = function (currentForm) {
    return ZliveForm_controls[newField.fieldType].getControl(newField, linkage, getGroupsFn, {
      disabled: field.disabled
    }, undefined, currentForm);
  };

  return newField;
}
function getGroupItem(item, linkage, getGroupsFn, imperative, customOnChange, customFormRules, labelLayout) {
  var formItems = item.formFieldInfoList.map(function (field) {
    return getFormItem(field, item, linkage, getGroupsFn, imperative, customOnChange, customFormRules);
  });
  formItems.sort(sortList);
  return {
    additive: item.additive,
    //添加状态
    groupRef: _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createRef(),
    seq: item.seq,
    id: item.id,
    name: item.name,
    formItems: formItems,
    labelLayout: labelLayout
  };
}
function translateGroups(formData, getGroupsFn, linkage, imperative) {
  if (zTool["e" /* dataType */].isObject(formData) && is_array_default()(formData.sectionList)) {
    var groups = formData.sectionList.map(function (item) {
      return getGroupItem(item, linkage ? pareLinkages(formData.linkages) : null, getGroupsFn, imperative, formData.customOnChange, formData.customFormRules, formData.labelLayout);
    });
    groups.sort(sortList);
    return groups;
  } else {
    return [];
  }
} //移除linkageRef对应fieldKey的联动配置

function removeSomeLinkage(linkageRef, fieldKey) {
  var hasRemoveAge = false;
  linkageRef.current = linkageRef.current.filter(function (age) {
    var unlikeness = age.src["fieldKey"] !== fieldKey;

    if (unlikeness) {
      age.dist.forEach(function (d) {
        d.fields = d.fields.filter(function (f) {
          var unlikeness = f["fieldKey"] !== fieldKey;

          if (!hasRemoveAge && !unlikeness) {
            hasRemoveAge = true;
          }

          return unlikeness;
        });
      });
    }

    if (!hasRemoveAge && !unlikeness) {
      hasRemoveAge = true;
    }

    return unlikeness;
  });
  return hasRemoveAge;
}
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/customHook.js





 //返回获取最新formGroups的callback

function useGetGroupsCallback(formGroups) {
  var groupsRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])();
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    groupsRef.current = formGroups;
  }, [formGroups]);
  return Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function () {
    return groupsRef.current;
  }, [groupsRef.current]);
} //返回执行linkageAction的callback

function useLinkageCallback(formGroups, formData, getGroupsFn) {
  var doLinkage = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function () {
    if (formData) {
      linkageAction(pareLinkages(formData.linkages), getGroupsFn);
    }
  }, [getGroupsFn, formData]);
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    doLinkage();
  }, [formGroups]);
  return doLinkage;
} //返回获取formGroups中非隐藏的forms的callback

function useGetOtherFormsCallback(formGroups) {
  return Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function (currentForm) {
    var forms = is_array_default()(formGroups) ? formGroups.filter(function (g) {
      if (!g.groupRef.current) {
        return false;
      }

      var o = g.groupRef.current.getForm();
      return currentForm !== o.form && g.groupRef.current.getShowState();
    }) : [];
    return forms.map(function (g) {
      return g.groupRef.current.getForm().form;
    });
  }, [formGroups]);
}
function customHook_getEachFormMethod(formGroups, isAll) {
  var subForm = isAll ? [] : null;

  for (var index = 0; index < formGroups.length; index++) {
    var g = formGroups[index];

    if (g.groupRef.current.getShowState()) {
      if (isAll) {
        subForm.push(g.groupRef.current.getForm());
      } else {
        subForm = g.groupRef.current.getForm();
        break;
      }
    }
  }

  return subForm;
} //返回执行formGroups中任意一个非隐藏的onSubmit的callback

function useDoSubmitCallback(formGroups) {
  return Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function (e) {
    var subForm = customHook_getEachFormMethod(formGroups);

    if (subForm) {
      subForm.methods.onSubmit(e);
    }
  }, [formGroups]);
}
var buttonType = {
  1: "primary",
  2: "default",
  3: "dashed",
  4: "danger"
}; //返回渲染提交按钮的函数

function useSubmitBtn(formData, formGroups) {
  var doSubmit = useDoSubmitCallback(formGroups);
  return Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function () {
    return formData && zTool["e" /* dataType */].isArray(formData.buttonList) ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-padding-bottom-20 z-text-center"
    }, formData.buttonList.map(function (e) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(es_button["a" /* default */], {
        key: e.value,
        type: buttonType[e.buttonType],
        onClick: doSubmit
      }, e.value);
    })) : null;
  }, [formData, doSubmit]);
}
// EXTERNAL MODULE: ./node_modules/zerod/components/Zform/index.jsx
var Zform = __webpack_require__("+Qac");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/extends.js
var helpers_extends = __webpack_require__("7BF6");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("UiLq");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/createClass.js
var createClass = __webpack_require__("g0Tb");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("rIhE");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("qFVM");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/inherits.js
var inherits = __webpack_require__("Wp/E");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/FormContext.js







var FormContext_defaultValue = {};
var context = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createContext(FormContext_defaultValue);
var Provider = context.Provider,
    Consumer = context.Consumer;

var FormContext_setConsumer = function setConsumer(ChildComponent) {
  return (
    /*#__PURE__*/
    function (_React$PureComponent) {
      inherits_default()(ContextConsumer, _React$PureComponent);

      function ContextConsumer() {
        classCallCheck_default()(this, ContextConsumer);

        return possibleConstructorReturn_default()(this, getPrototypeOf_default()(ContextConsumer).apply(this, arguments));
      }

      createClass_default()(ContextConsumer, [{
        key: "render",
        value: function render() {
          var _this = this;

          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Consumer, null, function (value) {
            return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ChildComponent, extends_default()({}, _this.props, value));
          });
        }
      }]);

      return ContextConsumer;
    }(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.PureComponent)
  );
};

/* harmony default export */ var FormContext = ({
  name: "FormContext",
  defaultValue: FormContext_defaultValue,
  Provider: Provider,
  Consumer: Consumer,
  setConsumer: FormContext_setConsumer
});
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/FormGroup.jsx






var MyForm = FormContext.setConsumer(Zform["b" /* default */]);
var FormGroup = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (_ref, ref) {
  var formItems = _ref.formItems,
      getOtherForms = _ref.getOtherForms,
      labelLayout = _ref.labelLayout,
      onSubmit = _ref.onSubmit,
      group = _ref.group,
      titleLeftRender = _ref.titleLeftRender,
      titleRightRender = _ref.titleRightRender,
      children = _ref.children,
      formValues = _ref.formValues,
      momentFormat = _ref.momentFormat,
      afterItemsRendered = _ref.afterItemsRendered;
  var domRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])();
  var formRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])({});

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var getFormInstance = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function (form, methods) {
    formRef.current = {
      form: form,
      methods: methods
    };
  }, [formRef.current]);

  var _useState3 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      stateFormItems = _useState4[0],
      setFormItems = _useState4[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    setFormItems(is_array_default()(formItems) ? formItems : []);
  }, [formItems]);
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useImperativeHandle"])(ref, function () {
    return {
      getForm: function getForm() {
        return objectSpread_default()({}, formRef.current, {
          group: group
        });
      },
      show: function show(_show) {
        setShow(_show);
      },
      getShowState: function getShowState() {
        return show;
      },
      getWrapperDom: function getWrapperDom() {
        return domRef.current;
      },
      getFormItems: function getFormItems() {
        return stateFormItems;
      },
      setFormItems: setFormItems
    };
  });

  var _useState5 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      groupName = _useState6[0],
      setGroupName = _useState6[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    setGroupName(group.name);
  }, [group.name]);
  var nameChange = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function (val) {
    group.name = val;
    setGroupName(val);
  }, [group, setGroupName]); // console.log("--groups--" + group.id, stateFormItems);

  return show ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-view-form-panel",
    ref: domRef
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-heading z-flex-space-between"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-flex-items-v-center"
  }, typeof titleLeftRender === "function" ? titleLeftRender(group, groupName, nameChange) : _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, groupName)), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-flex-items-v-center"
  }, typeof titleRightRender === "function" && titleRightRender(group))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(MyForm, {
    group: group,
    onSubmit: onSubmit,
    labelLayout: labelLayout ? labelLayout : "inline",
    items: stateFormItems,
    submitBtnName: "",
    getFormInstance: getFormInstance,
    otherForms: getOtherForms,
    formDefaultValues: formValues,
    momentFormat: momentFormat,
    afterItemsRendered: afterItemsRendered
  }), children)) : null;
}));
/* harmony default export */ var ZliveForm_FormGroup = (FormGroup);
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/FormViewer.jsx







 //formData: {id:1,name:"表",labelLayout:"",code:"dog_check_in_form",sectionList: [{id:"12",name:"名称",seq:1,formFieldInfoList:[{config:"{}",fieldKey:"name",fieldType:1,id:333,initialValue:"",label:"名称",required:1,span:8,regularExpression:null,seq:1,placeholder:"",errorMsg:""}]}]}

var FormViewer = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (_ref, ref) {
  var formData = _ref.formData,
      formValues = _ref.formValues,
      onSubmit = _ref.onSubmit,
      groupTitleLeftRender = _ref.groupTitleLeftRender,
      groupTitleRightRender = _ref.groupTitleRightRender,
      className = _ref.className,
      onFormGroupsChange = _ref.onFormGroupsChange,
      linkage = _ref.linkage,
      groupChildrenRender = _ref.groupChildrenRender,
      submitBtnRender = _ref.submitBtnRender,
      title = _ref.title,
      style = _ref.style,
      momentFormat = _ref.momentFormat,
      afterItemsRendered = _ref.afterItemsRendered;

  var _linkage = zTool["e" /* dataType */].isBoolean(linkage) ? linkage : true;

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      formGroups = _useState2[0],
      setFormGroups = _useState2[1];

  var getOtherForms = useGetOtherFormsCallback(formGroups); // const submitBtnRender = useSubmitBtn(formData, formGroups);

  var getGroupsFn = useGetGroupsCallback(formGroups);
  var doSubmit = useDoSubmitCallback(formGroups);
  var imperativeRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])();

  imperativeRef.current = function () {
    return {
      getFormGroups: function getFormGroups() {
        return formGroups;
      },
      setFormGroups: setFormGroups,
      getEachFormMethod: function getEachFormMethod() {
        return customHook_getEachFormMethod(formGroups, true);
      }
    };
  }; //formData改变时==>处理数据


  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    setFormGroups(translateGroups(formData, getGroupsFn, _linkage, imperativeRef));
    setAllFormRendered([]);
  }, [formData]); //formGroups改变时==>调用onFormGroupsChange

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    zTool["e" /* dataType */].isFunction(onFormGroupsChange) && onFormGroupsChange(formGroups);
  }, [formGroups]);
  var doLinkage = _linkage ? useLinkageCallback(formGroups, formData, getGroupsFn) : null;
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useImperativeHandle"])(ref, imperativeRef.current);
  var titleText = zTool["e" /* dataType */].isBoolean(title) && !title ? "" : title ? title : formData && formData.name ? formData.name : "";

  var _useState3 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      allFormRendered = _useState4[0],
      setAllFormRendered = _useState4[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    if (allFormRendered.length && allFormRendered.length === formGroups.length) {
      doLinkage && doLinkage();
      afterItemsRendered && afterItemsRendered();
    }
  }, [allFormRendered]);
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel z-padding-bottom-20 ".concat(className ? className : ""),
    style: style
  }, titleText ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important z-text-center"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("h2", null, titleText)) : null, formGroups.map(function (group, i) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_FormGroup, {
      titleLeftRender: groupTitleLeftRender ? function (group, groupName, nameChange) {
        return groupTitleLeftRender(group, groupName, nameChange, formGroups);
      } : undefined,
      titleRightRender: groupTitleRightRender,
      group: group,
      onSubmit: onSubmit,
      doLinkage: doLinkage,
      key: group.id,
      labelLayout: group.labelLayout,
      ref: group.groupRef,
      formItems: group.formItems,
      getOtherForms: getOtherForms,
      formValues: formValues,
      momentFormat: momentFormat,
      afterItemsRendered: function afterItemsRendered() {
        setAllFormRendered(allFormRendered.concat(["success"]));
      }
    }, typeof groupChildrenRender == "function" && groupChildrenRender(group));
  }), typeof submitBtnRender == "function" ? submitBtnRender(doSubmit) : null);
});
FormViewer.propTypes = {
  formData: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object,
  formValues: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object,
  onSubmit: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  groupTitleRightRender: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  className: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.string,
  onFormGroupsChange: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  linkage: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.bool,
  groupChildrenRender: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  submitBtnRender: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  afterItemsRendered: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  momentFormat: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.bool
};
/* harmony default export */ var ZliveForm_FormViewer = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(FormViewer));
// EXTERNAL MODULE: ./node_modules/zerod/dragula/dragula.css
var dragula = __webpack_require__("tfup");

// EXTERNAL MODULE: ./node_modules/zerod/dragula/dragula.js
var dragula_dragula = __webpack_require__("Wbw3");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/input/index.js + 7 modules
var input = __webpack_require__("HOSt");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("GvXH");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/zerod/components/ZeditSimpleFormHOC/index.jsx
var ZeditSimpleFormHOC = __webpack_require__("4QcI");

// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/ZselectInput.jsx








var ZselectInput_propTypes = {
  size: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.string,
  selectList: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.arrayOf(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object),
  value: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object,
  valueKey: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object,
  disabled: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.bool,
  leftPlaceholder: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.string,
  centerPlaceholder: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.string,
  rightPlaceholder: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.string,
  controlCostrom: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object
};
var ZselectInput_defaultProps = {
  valueKey: {
    left: "label",
    center: "value",
    right: "paramName"
  },
  size: "default",
  selectList: [],
  leftSpan: 6,
  centerSpan: 12,
  rightSpan: 6,
  disabled: false,
  controlCostrom: {
    left: null,
    center: null,
    right: null
  }
};
var MyComponent = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function ZselectInput(props, ref) {
  var size = props.size,
      selectList = props.selectList,
      leftSpan = props.leftSpan,
      centerSpan = props.centerSpan,
      rightSpan = props.rightSpan,
      onChange = props.onChange,
      value = props.value,
      valueKey = props.valueKey,
      disabled = props.disabled,
      className = props.className,
      leftPlaceholder = props.leftPlaceholder,
      centerPlaceholder = props.centerPlaceholder,
      rightPlaceholder = props.rightPlaceholder,
      controlCostrom = props.controlCostrom; // console.log("----value",value)

  var leftChange = function leftChange(val) {
    var _ref;

    typeof onChange === "function" && onChange(value ? objectSpread_default()({}, value, defineProperty_default()({}, valueKey.left, val)) : (_ref = {}, defineProperty_default()(_ref, valueKey.left, val), defineProperty_default()(_ref, valueKey.center, ""), defineProperty_default()(_ref, valueKey.right, ""), _ref));
  };

  var centerChange = function centerChange(val) {
    var _ref2;

    typeof onChange === "function" && onChange(value ? objectSpread_default()({}, value, defineProperty_default()({}, valueKey.center, val)) : (_ref2 = {}, defineProperty_default()(_ref2, valueKey.left, ""), defineProperty_default()(_ref2, valueKey.center, val), defineProperty_default()(_ref2, valueKey.right, ""), _ref2));
  };

  var rightChange = function rightChange(val) {
    var _ref3;

    typeof onChange === "function" && onChange(value ? objectSpread_default()({}, value, defineProperty_default()({}, valueKey.right, val)) : (_ref3 = {}, defineProperty_default()(_ref3, valueKey.left, ""), defineProperty_default()(_ref3, valueKey.center, ""), defineProperty_default()(_ref3, valueKey.right, val), _ref3));
  };

  var _left = value && value[valueKey.left] !== undefined ? value[valueKey.left] : "";

  var _center = value && value[valueKey.center] !== undefined ? value[valueKey.center] : "";

  var _right = value && value[valueKey.right] !== undefined ? value[valueKey.right] : "";

  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */].Group, {
    compact: true,
    size: size,
    className: "".concat(style_default.a["z-select-input"], " ").concat(className ? className : "")
  }, leftSpan ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: leftSpan
  }, typeof controlCostrom.left === "function" ? controlCostrom.left(_left, leftChange) : Object(controls["a" /* getControl */])("Select", {
    value: _left,
    selectList: selectList,
    onChange: leftChange,
    disabled: disabled,
    className: "z-label",
    placeholder: leftPlaceholder
  })) : null, centerSpan ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: centerSpan
  }, typeof controlCostrom.center === "function" ? controlCostrom.center(_center, centerChange) : Object(controls["a" /* getControl */])("Input", {
    value: _center,
    onChange: function onChange(e) {
      centerChange(e.target.value);
    },
    disabled: disabled,
    className: "z-value",
    placeholder: centerPlaceholder
  })) : null, rightSpan ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: rightSpan
  }, typeof controlCostrom.right === "function" ? controlCostrom.right(_right, rightChange) : Object(controls["a" /* getControl */])("Input", {
    value: _right,
    onChange: function onChange(e) {
      rightChange(e.target.value);
    },
    disabled: disabled,
    className: "z-name",
    placeholder: rightPlaceholder
  })) : null);
});
MyComponent.propTypes = ZselectInput_propTypes;
MyComponent.defaultProps = ZselectInput_defaultProps;
/* harmony default export */ var ZliveForm_ZselectInput = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(MyComponent));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/ZauxiliaryInput.jsx







var InputGroup = input["a" /* default */].Group;
var regExpsList = [{
  label: "自定义",
  value: "custom",
  pattern: ""
}].concat(keys_default()(controls["c" /* regExps */]).map(function (key) {
  return objectSpread_default()({}, controls["c" /* regExps */][key], {
    pattern: controls["c" /* regExps */][key].pattern.toString().replace(/(^\/|\/$)/g, ""),
    value: key,
    label: controls["c" /* regExps */][key].name
  });
}));
/* harmony default export */ var ZliveForm_ZauxiliaryInput = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function ZauxiliaryInput(props, ref) {
  var value = props.value,
      _onChange = props.onChange;

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(""),
      _useState2 = slicedToArray_default()(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])("custom"),
      _useState4 = slicedToArray_default()(_useState3, 2),
      selectValue = _useState4[0],
      setSelectValue = _useState4[1];

  function setVals(pattern) {
    var selected = regExpsList.find(function (item) {
      return item.pattern === pattern;
    });
    setSelectValue(selected ? selected.value : "custom");
    setInputValue(pattern);
  }

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    setVals(value);
  }, [value]);
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(InputGroup, {
    compact: true
  }, Object(controls["a" /* getControl */])("Input", {
    value: inputValue,
    onChange: function onChange(e) {
      setVals(e.target.value);

      _onChange(e.target.value);
    },
    style: {
      width: "75%"
    }
  }), Object(controls["a" /* getControl */])("Select", {
    value: selectValue,
    onChange: function onChange(val) {
      var selected = regExpsList.find(function (item) {
        return item.value === val;
      });

      if (selected) {
        setInputValue(selected.pattern);

        _onChange(selected.pattern);
      }

      setSelectValue(val);
    },
    selectList: regExpsList,
    style: {
      width: "25%"
    }
  }));
})));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/AddColForm.jsx


















var PercentInput = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var value = props.value,
      _onChange = props.onChange;

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(typeof value === "number" ? value : 0),
      _useState2 = slicedToArray_default()(_useState, 2),
      num = _useState2[0],
      setNum = _useState2[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    setNum(value * 100);
  }, [value]);
  return Object(controls["a" /* getControl */])("Input.Group", {
    compact: true,
    children: _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, Object(controls["a" /* getControl */])("InputNumber", {
      min: 0,
      max: 100,
      precision: 4,
      style: {
        width: "80%"
      },
      value: num,
      onChange: function onChange(num) {
        _onChange && _onChange(num / 100);
      }
    }), Object(controls["a" /* getControl */])("Input", {
      defaultValue: "%",
      disabled: true,
      style: {
        width: "20%"
      }
    }))
  });
}));
var commonKeys = ["groupName", "fieldType", "label", "fieldKey", "required", "initialValue", "regularExpression", "errorMsg", "remark", "disabled"];
var textKeys = ["maxLength", "minLength"];
var inputKeys = [].concat(textKeys, ["type"]);
var textarayKeys = textKeys;
var selectionsType1keys = ["selectList"];
var selectionsType2keys = ["selectionsUrl", "selectionsQuery"];
var selectKeys = ["selectionsType", "selectListFieldNames"].concat(selectionsType1keys, selectionsType2keys);
var cascaderKeys = [].concat(toConsumableArray_default()(selectKeys), ["changeOnSelect"]);
var dateKeys = ["format"];
var uploadKeys = ["url"];
var colorKeys = ["colorValueType", "minSaturability"]; //控件类型列表

var controlList = [{
  label: "单行输入",
  //控件类型名称
  value: 1,
  //类型值
  showKeys: [].concat(commonKeys, toConsumableArray_default()(inputKeys)),
  //要显示的属性
  configKeys: inputKeys //哪些要转成config的属性

}, {
  label: "多行输入",
  value: 2,
  showKeys: [].concat(commonKeys, textarayKeys),
  configKeys: textarayKeys
}, {
  label: "下拉选择",
  value: 3,
  showKeys: [].concat(commonKeys, toConsumableArray_default()(selectKeys), ["mode"]),
  configKeys: [].concat(toConsumableArray_default()(selectKeys), ["mode"])
}, {
  label: "数字输入",
  value: 4,
  showKeys: [].concat(commonKeys)
}, {
  label: "日期/时间选择",
  value: 5,
  showKeys: [].concat(commonKeys, dateKeys),
  configKeys: dateKeys
}, {
  label: "级联",
  value: 6,
  showKeys: [].concat(commonKeys, toConsumableArray_default()(cascaderKeys)),
  configKeys: cascaderKeys
}, {
  label: "树选择",
  value: 7,
  showKeys: [].concat(commonKeys, toConsumableArray_default()(selectKeys)),
  configKeys: selectKeys
}, {
  label: "多选框",
  value: 8,
  showKeys: [].concat(commonKeys, toConsumableArray_default()(selectKeys)),
  configKeys: selectKeys
}, {
  label: "单选框",
  value: 9,
  showKeys: [].concat(commonKeys, toConsumableArray_default()(selectKeys)),
  configKeys: selectKeys
}, // {
// 	label: "时间选择",
// 	value: 10,
// 	showKeys: [...commonKeys],
// },
{
  label: "文件上传",
  value: 11,
  showKeys: [].concat(commonKeys, uploadKeys),
  configKeys: uploadKeys
}, {
  label: "颜色值",
  value: 12,
  showKeys: [].concat(commonKeys, colorKeys),
  configKeys: colorKeys
}, {
  label: "地图选点",
  value: 13,
  showKeys: [].concat(commonKeys, ["mapType", "secretKey"]),
  configKeys: ["mapType", "secretKey"]
}]; //地图的默认密钥(默认是邹国涛个人注册)

var initSereKey = {
  amap: "3d5c1c6169c64554d6f9fcca35d4abff",
  qqmap: "63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK"
}; //控制显示哪个类型的控件的属性

function showFieldTypeLinkOther(changeFormItems, formItems, val) {
  var excludeKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var control = controlList.find(function (cont) {
    return cont.value === val;
  });
  var showKeys = control.showKeys.filter(function (key) {
    return !excludeKeys.includes(key);
  });
  changeFormItems(formItems.map(function (item) {
    return {
      key: item.key,
      show: showKeys.includes(item.key)
    };
  }), true);
}

function showSelectionsTypeLinkOther(changeFormItems, selectionsType) {
  changeFormItems([{
    key: "selectList",
    show: selectionsType === 1
  }, {
    key: "selectionsUrl",
    show: selectionsType === 2
  }, {
    key: "selectionsQuery",
    show: selectionsType === 2
  }], true);
}

var AddColForm_urlRules = function urlRules() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [{
    validator: function validator(rule, value, callback) {
      if (!value) {
        return callback(new Error("不能为空"));
      }

      var valkeys = keys_default()(keys);

      var hasError = valkeys.some(function (key) {
        return value[keys[key]] === undefined || !value[keys[key]].toString().trim();
      });

      if (hasError) {
        return callback(new Error("有未填写的值"));
      }

      callback();
    }
  }];
}; //控件属性


function useFormItems(groupId, formViewerRef, type) {
  var itemsRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])([]);
  itemsRef.current = [{
    key: "groupName",
    label: "组名",
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Input", {
        disabled: true
      });
    }
  }, {
    key: "fieldType",
    label: "控件类型",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Select", {
        selectList: controlList.map(function (item) {
          return {
            label: item.label,
            value: item.value
          };
        }),
        onChange: function onChange(val) {
          //控件类型改变控制显示对应的属性输入框
          showFieldTypeLinkOther(changeFormItems, itemsRef.current, val);

          if ([3, 6, 7, 8, 9].includes(val)) {
            showSelectionsTypeLinkOther(changeFormItems, form.getFieldValue("selectionsType"));
          } // changeFormItems([{ key: "initialValue", show: ![5].includes(val) }], true);

        }
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true
    })
  }, {
    key: "label",
    label: "控件Label",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Input");
    },
    options: Object(controls["b" /* getOptions */])({
      required: true
    })
  }, {
    key: "fieldKey",
    label: "字段Key",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Input");
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      rules: [{
        validator: function validator(rule, value, callback) {
          if (/Label$/.test(value)) {
            return callback(new Error("禁止以Label结尾的key"));
          }

          var groups = formViewerRef.current.getFormGroups();
          var hasKey = groups.some(function (g) {
            return g.formItems.some(function (item) {
              return item.key === value;
            });
          });

          if (hasKey && type === "add") {
            return callback(new Error("key已存在，请填写其他的key"));
          }

          callback();
        }
      }]
    })
  }, {
    key: "required",
    label: "是否必填",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Radio.Group", {
        selectList: [{
          label: "是",
          value: 1
        }, {
          label: "否",
          value: 0
        }]
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: 1
    })
  }, {
    key: "disabled",
    label: "是否默认禁用",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Radio.Group", {
        selectList: [{
          label: "是",
          value: 1
        }, {
          label: "否",
          value: 0
        }]
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: 0
    })
  }, {
    key: "mode",
    label: "模式",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Radio.Group", {
        selectList: [{
          label: "单选",
          value: "single"
        }, {
          label: "多选",
          value: "multiple"
        }, {
          label: "标签",
          value: "tags"
        }]
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: "single"
    })
  }, {
    key: "mapType",
    label: "地图类型",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Radio.Group", {
        selectList: [{
          label: "腾讯",
          value: "qqmap"
        }, {
          label: "高德",
          value: "amap"
        }],
        onChange: function onChange(e) {
          var val = e.target.value;
          form.setFieldsValue({
            secretKey: initSereKey[val]
          });
        }
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: "qqmap"
    })
  }, {
    key: "secretKey",
    label: "密钥",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Input");
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: initSereKey["qqmap"]
    })
  }, {
    key: "type",
    label: "文本类型",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Radio.Group", {
        selectList: [{
          label: "文本框",
          value: "text"
        }, {
          label: "密码框",
          value: "password"
        }]
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: "text"
    })
  }, {
    key: "maxLength",
    label: "最大输入长度",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("InputNumber");
    }
  }, {
    key: "minLength",
    label: "最小输入长度",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("InputNumber");
    }
  }, {
    key: "selectionsType",
    label: "选项类型",
    labelFocused: true,
    show: false,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Radio.Group", {
        selectList: [{
          label: "自定义",
          value: 1
        }, {
          label: "异步",
          value: 2
        }],
        onChange: function onChange(e) {
          showSelectionsTypeLinkOther(changeFormItems, e.target.value);
        }
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: 1
    })
  }, {
    key: "selectionsUrl",
    label: "请求选项数据地址",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_ZselectInput, {
        controlCostrom: [6, 7].includes(form.getFieldValue("fieldType")) ? {
          right: function right(value, valueChange) {
            return Object(controls["a" /* getControl */])("Select", {
              value: value,
              selectList: [{
                label: "全部加载",
                value: "all"
              }, {
                label: "分部加载",
                value: "part"
              }],
              onChange: valueChange,
              style: {
                width: "100%"
              }
            });
          }
        } : undefined,
        leftSpan: 6,
        centerSpan: [3, 8, 9].includes(form.getFieldValue("fieldType")) ? 18 : 12,
        rightSpan: [3, 8, 9].includes(form.getFieldValue("fieldType")) ? 0 : 6,
        selectList: ["post", "get"].map(function (m) {
          return {
            label: m,
            value: m
          };
        }),
        valueKey: {
          left: "selectionsUrlMethod",
          center: "selectionsUrl",
          right: "requireType"
        },
        leftPlaceholde: "\u8BF7\u6C42\u65B9\u5F0F",
        centerPlaceholder: "\u8BF7\u6C42\u5730\u5740"
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: {
        selectionsUrlMethod: "post",
        selectionsUrl: "",
        requireType: "all"
      },
      rules: AddColForm_urlRules({
        left: "selectionsUrlMethod",
        center: "selectionsUrl",
        right: "requireType"
      })
    })
  }, {
    key: "selectionsQuery",
    label: "请求参数配置",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("TreeInput", {
        multiple: false,
        labelPlaceholder: "Key"
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: false,
      initialValue: []
    })
  }, {
    key: "selectList",
    label: "选项数据",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("TreeInput", {
        multiple: [6, 7].includes(form.getFieldValue("fieldType"))
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: [],
      rules: [{
        validator: function validator(rule, value, callback) {
          var finished = Object(zTool["o" /* itemsFromTree */])({
            tree: value,
            condition: function condition(val1, val2) {
              return val1.toString().trim() === val2.toString().trim();
            },
            sourceItem: {
              value: ""
            },
            keyObj: {
              id: "value",
              children: "children"
            }
          });

          if (finished) {
            return callback(new Error("选项中有未填写的值"));
          }

          callback();
        }
      }]
    })
  }, {
    key: "selectListFieldNames",
    label: "lable、value、children对应选项数据中的字段",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("TreeInput", {
        multiple: false,
        showBtns: false,
        inputType: "coustom",
        customInputKeys: [{
          key: "label",
          initValue: ""
        }, {
          key: "value",
          initValue: ""
        }],
        children: function children(states, setStates, customInputKeys) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */].Group, {
            compact: true,
            style: {
              width: "100%"
            }
          }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */], {
            style: {
              width: "50%"
            },
            value: states[customInputKeys[0].key],
            onChange: function onChange(e) {
              setStates(defineProperty_default()({}, customInputKeys[0].key, e.target.value));
            },
            size: "small",
            disabled: true
          }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */], {
            style: {
              width: "50%"
            },
            value: states[customInputKeys[1].key],
            onChange: function onChange(e) {
              setStates(defineProperty_default()({}, customInputKeys[1].key, e.target.value));
            },
            size: "small"
          }));
        }
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: [{
        label: "label",
        value: "label"
      }, {
        label: "value",
        value: "value"
      }, {
        label: "children",
        value: "children"
      }]
    })
  }, {
    key: "changeOnSelect",
    label: "是否必须选到最后一级",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Radio.Group", {
        selectList: [{
          label: "是",
          value: 0
        }, {
          label: "否",
          value: 1
        }]
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: 0
    })
  }, {
    key: "format",
    label: "格式",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Select", {
        selectList: keys_default()(dateFormats).map(function (key) {
          return {
            label: key,
            value: key
          };
        })
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: "YYYY-MM-DD"
    })
  }, {
    key: "url",
    label: "上传地址",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_ZselectInput, {
        selectList: ["post", "get"].map(function (m) {
          return {
            label: m,
            value: m
          };
        }),
        valueKey: {
          left: "urlMethod",
          center: "url",
          right: "urlParamName"
        },
        leftPlaceholde: "\u8BF7\u6C42\u65B9\u5F0F",
        centerPlaceholder: "\u8BF7\u6C42\u5730\u5740",
        rightPlaceholder: "\u53C2\u6570\u540D"
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: {
        urlMethod: "post",
        url: "/file-upload-service/webapi/v1.0/fileUpload/uploads",
        urlParamName: "files"
      },
      rules: AddColForm_urlRules({
        left: "urlMethod",
        center: "url",
        right: "urlParamName"
      })
    })
  }, // {
  // 	key: "detailUrl",
  // 	label: "获取已上传列表的地址",
  // 	show: false,
  // 	labelFocused: true,
  // 	render(form, changeFormItems) {
  // 		return (
  // 			<ZselectInput
  // 				selectList={["post", "get"].map(m => ({ label: m, value: m }))}
  // 				valueKey={{ left: "detailUrlMethod", center: "detailUrl", right: "detailUrlParamName" }}
  // 				leftPlaceholde="请求方式"
  // 				centerPlaceholder="请求地址"
  // 				rightPlaceholder="参数名"
  // 			/>
  // 		);
  // 	},
  // 	options: getOptions({
  // 		required: true,
  // 		initialValue: { detailUrlMethod: "post", detailUrl: "", detailUrlParamName: "fileIds" },
  // 		rules: urlRules({ left: "detailUrlMethod", center: "detailUrl", right: "detailUrlParamName" }),
  // 	}),
  // },
  {
    key: "colorValueType",
    label: "颜色值类型",
    labelFocused: true,
    show: false,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Select", {
        selectList: [{
          label: "hex",
          value: "hex"
        }, {
          label: "rgb",
          value: "rgb"
        }]
      });
    },
    options: Object(controls["b" /* getOptions */])({
      required: true,
      initialValue: "rgb"
    })
  }, {
    key: "minSaturability",
    label: "最小饱和度(0%~100%,越小越趋近白色)",
    labelFocused: true,
    show: false,
    render: function render(form, changeFormItems) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(PercentInput, null);
    },
    options: Object(controls["b" /* getOptions */])({
      required: false,
      initialValue: 0
    })
  }, {
    key: "initialValue",
    labelFocused: true,
    label: "控件初始值",
    render: function render(form, changeFormItems) {
      return [12].includes(form.getFieldValue("fieldType")) ? Object(controls["a" /* getControl */])("ColorPicker", {
        valueType: form.getFieldValue("colorValueType")
      }) : Object(controls["a" /* getControl */])("Input");
    }
  }, {
    key: "regularExpression",
    label: "正则表达式",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_ZauxiliaryInput, null);
    },
    options: {
      rules: [{
        validator: function validator(rule, value, callback) {
          var hasError = false;

          try {
            new RegExp(value);
          } catch (e) {
            hasError = true;
          }

          if (hasError) {
            return callback("无效正则表达式");
          }

          callback();
        }
      }]
    }
  }, {
    key: "errorMsg",
    label: "错误提示",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("Input");
    }
  }, {
    key: "remark",
    label: "备注",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return Object(controls["a" /* getControl */])("TextArea", {
        autosize: {
          minRows: 3
        }
      });
    }
  }];
  return itemsRef.current;
}

function useEditPage(groupId, formItem, formViewerRef, linkageRef, type) {
  var groupRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])();
  var items = useFormItems(groupId, formViewerRef, type);
  return Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(Object(ZeditSimpleFormHOC["a" /* default */])({
    pageHeader: {
      show: false
    },
    pageFooter: {
      show: false
    },
    form: {
      panelHeader: "控件属性",
      labelLayout: "inline",
      type: "update",
      defaultSpan: 24,
      submitBtnName: "确定",
      submitMsg: null,
      items: items,
      detailApiInterface: function detailApiInterface(detailId, props, tool) {
        var group = {
          id: groupId
        };
        var groups = formViewerRef.current.getFormGroups();
        var i = groups.findIndex(function (g) {
          return g.id == groupId;
        });
        group.name = groups[i].name;
        groupRef.current = groups[i]; //新增/修改都需groupName

        var data = {
          groupName: group.name
        }; //修改控件情况

        if (formItem) {
          var excludeKeys = [];
          var currentItem = controlList.find(function (item) {
            return item.value === formItem["fieldType"];
          });

          if (currentItem) {
            keys_default()(formItem).forEach(function (key) {
              if (currentItem.showKeys.includes(key)) {
                data[key] = formItem[key];
              }
            });
          }

          try {
            var config = JSON.parse(formItem["config"]);

            if (config) {
              //当是上传控件
              if (formItem["fieldType"] === 11) {
                var url = {
                  urlMethod: "",
                  url: "",
                  urlParamName: ""
                }; // const detailUrl = { detailUrlMethod: "", detailUrl: "", detailUrlParamName: "" };

                keys_default()(config).forEach(function (key) {
                  switch (key) {
                    case "urlMethod":
                    case "url":
                    case "urlParamName":
                      url[key] = config[key];
                      delete config[key];
                      break;
                    // case "detailUrlMethod":
                    // case "detailUrl":
                    // case "detailUrlParamName":
                    // detailUrl[key] = config[key];
                    // delete config[key];
                    // break;
                  }
                });

                config["url"] = url; // config["detailUrl"] = detailUrl;
              } else if ([3, 6, 7, 8, 9].includes(formItem["fieldType"])) {
                config.selectionsType = config.selectionsType === undefined ? 1 : Number(config.selectionsType);
                excludeKeys = config.selectionsType === 1 ? selectionsType2keys : selectionsType1keys;

                var objToArr = function objToArr(keyName) {
                  if (zTool["e" /* dataType */].isObject(config[keyName])) {
                    config[keyName] = keys_default()(config[keyName]).map(function (key) {
                      return {
                        label: key,
                        value: config[keyName][key]
                      };
                    });
                  } else {
                    config[keyName] = [];
                  }
                };

                objToArr("selectionsQuery");
                objToArr("selectListFieldNames");
                showSelectionsTypeLinkOther(tool.getFormMethods().changeFormItems, config["selectionsType"]);
              }

              data.disabled = data.disabled === undefined ? 0 : Number(data.disabled);
              data = objectSpread_default()({}, data, config);
            }
          } catch (e) {}

          showFieldTypeLinkOther(tool.getFormMethods().changeFormItems, items, formItem["fieldType"], excludeKeys); // if ([5].includes(formItem["fieldType"])) {
          // 	tool.getFormMethods().changeFormItems({ key: "initialValue", show: false }, true);
          // }
        }

        return promise_default.a.resolve({
          data: data
        });
      },
      submitApiInterface: function submitApiInterface(values, props, tool) {
        var control = controlList.find(function (item) {
          return item.value === values["fieldType"];
        });
        var config = {};

        if (is_array_default()(control.configKeys)) {
          control.configKeys.forEach(function (key) {
            config[key] = values[key];
            delete values[key];
          });
        }

        values.config = config; //上传控件的config要特殊处理

        if (values["fieldType"] === 11) {
          var newConf = values.config;

          keys_default()(values.config).forEach(function (key) {
            var val = values.config[key]; // if (key === "url" || key === "detailUrl") {
            // 	newConf = { ...newConf, ...val };
            // }

            if (key === "url") {
              newConf = objectSpread_default()({}, newConf, val);
            }
          });

          values.config = newConf;
        } else if ([3, 6, 7, 8, 9].includes(values["fieldType"])) {
          var arrToObj = function arrToObj(keyName) {
            var newSelectionsQuery = {};
            is_array_default()(values.config[keyName]) && values.config[keyName].forEach(function (item) {
              if (item.label && item.value) {
                newSelectionsQuery[item.label] = item.value;
              }
            });
            values.config[keyName] = newSelectionsQuery;
          };

          arrToObj("selectionsQuery");
          arrToObj("selectListFieldNames");
        }

        if (values.config) {
          values.config = stringify_default()(values.config);
        }

        var newItem = getFormItem(formItem ? objectSpread_default()({}, formItem, values) : values, groupRef.current);
        var currentItems = groupRef.current.groupRef.current.getFormItems();

        var newItems = toConsumableArray_default()(currentItems);

        var i = currentItems.findIndex(function (item) {
          return item["fieldKey"] === (formItem ? formItem["fieldKey"] : values["fieldKey"]);
        });
        var successMsg = "添加控件成功";

        if (i > -1) {
          if (formItem && formItem["fieldKey"] !== values["fieldKey"] && linkageRef.current) {
            //修改了fieldKey时移除li
            var hasRemoveAge = removeSomeLinkage(linkageRef, formItem["fieldKey"]);

            if (hasRemoveAge) {
              successMsg += "\u3002\u7531\u4E8E\u4FEE\u6539\u4E86fieldKey\uFF0C\u540C\u65F6\u79FB\u9664\u4E86\u5BF9\u5E94\u7684\u8054\u52A8\u914D\u7F6E\u3002";
            }
          }

          newItems.splice(i, 1, newItem);
        } else {
          newItems = [].concat(toConsumableArray_default()(newItems), [newItem]);
        } // console.log(newItem);


        groupRef.current.groupRef.current.setFormItems(newItems);
        tool.showRightModal(false, "controlProtoModal");
        return promise_default.a.resolve({
          msg: successMsg
        });
      }
    }
  })).current;
}

/* harmony default export */ var ZliveForm_AddColForm = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function AddColForm(_ref, ref) {
  var groupId = _ref.groupId,
      formItem = _ref.formItem,
      formViewerRef = _ref.formViewerRef,
      linkageRef = _ref.linkageRef,
      type = _ref.type;
  var EditForm = useEditPage(groupId, formItem, formViewerRef, linkageRef, type);
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(EditForm, {
    detailId: "1"
  });
})));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/GroupMoveBtns.jsx



/* harmony default export */ var ZliveForm_GroupMoveBtns = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(function GroupMoveBtns(props) {
  var onMoveUp = props.onMoveUp,
      onMoveDown = props.onMoveDown,
      onRemove = props.onRemove;
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u4E0A\u79FB"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onMoveUp
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "arrow-up"
  }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u4E0B\u79FB"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onMoveDown
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "arrow-down"
  }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u79FB\u9664\u7EC4"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border small delete z-margin-right-10",
    onClick: onRemove
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "delete"
  }))));
}));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/InsertGroupBtns.jsx



/* harmony default export */ var ZliveForm_InsertGroupBtns = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(function InsertGroupBtns(props) {
  var onInsertUp = props.onInsertUp,
      onInsertDown = props.onInsertDown;
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u5411\u4E0A\u63D2\u5165\u4E00\u7EC4"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onInsertUp
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "arrow-up",
    className: "z-group-insert"
  }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u5411\u4E0B\u63D2\u5165\u4E00\u7EC4"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onInsertDown
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "arrow-down",
    className: "z-group-insert"
  }))));
}));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/GroupNameEdit.jsx





/* harmony default export */ var ZliveForm_GroupNameEdit = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(function GroupNameEdit(props) {
  var value = props.value,
      onChange = props.onChange;

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(),
      _useState2 = slicedToArray_default()(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      edited = _useState4[0],
      setEdited = _useState4[1];

  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, !edited ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, value) : null, edited ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-display-inline-block",
    style: {
      width: "180px"
    }
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */], {
    size: "small",
    value: inputValue,
    onChange: function onChange(e) {
      setInputValue(e.target.value);
    }
  })) : null, edited ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u53D6\u6D88"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border small delete z-margin-left-10",
    onClick: function onClick() {
      setEdited(false);
    }
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "close"
  }))) : null, edited ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u786E\u5B9A"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border small z-margin-left-10",
    onClick: function onClick() {
      var returner = typeof onChange === "function" && onChange(inputValue);

      if (returner) {
        return;
      }

      setEdited(false);
    }
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "check"
  }))) : null, !edited ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
    placement: "top",
    title: "\u4FEE\u6539\u7EC4\u540D"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-live-tool-item all-border small z-margin-left-10",
    onClick: function onClick() {
      setEdited(true);
      setInputValue(value);
    }
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
    type: "form"
  }))) : null);
}));
// EXTERNAL MODULE: delegated ./node_modules/_react-dom@16.8.6@react-dom/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _react_dom_16_8_6_react_domfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("jCnN");
var _react_dom_16_8_6_react_domfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_react_dom_16_8_6_react_domfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: ./node_modules/zerod/components/Ztabs/index.jsx
var Ztabs = __webpack_require__("VQbk");

// EXTERNAL MODULE: ./node_modules/zerod/components/Zcascader/index.jsx
var Zcascader = __webpack_require__("k9l9");

// EXTERNAL MODULE: ./node_modules/_antd@3.19.7@antd/es/row/index.js
var row = __webpack_require__("/hLV");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZoneWayTransfer/index.jsx
var ZoneWayTransfer = __webpack_require__("T352");

// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/liveCanstant.js
var linkageTypeActionName = {
  "1": "禁用",
  "2": "必填",
  "3": "非必填",
  "4": "联动",
  "5.1": "组隐藏",
  "5.2": "隐藏",
  "6": "年月日"
};
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/LinkageConfig/linkRemark.js




function srcControlRemark(srcControl, srcValues) {
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
    color: "volcano"
  }, srcControl ? srcControl.label : "未选控件"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, "\u7684\u503C\uFF1A"), srcValues.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "#2db7f5",
      key: item.label
    }, item.label);
  }));
}

function linkRemark1(_ref) {
  var srcControl = _ref.srcControl,
      srcValues = _ref.srcValues,
      distControls = _ref.distControls,
      linkageType = _ref.linkageType;
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, srcControlRemark(srcControl, srcValues), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", {
    className: "z-margin-right-5"
  }, "\u8054\u52A8"), distControls.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "magenta",
      key: item.label
    }, item.label);
  }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, linkageTypeActionName[linkageType]));
}
function linkRemark2(_ref2) {
  var srcControl = _ref2.srcControl,
      srcValues = _ref2.srcValues,
      distControl = _ref2.distControl,
      distValues = _ref2.distValues;
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, srcControlRemark(srcControl, srcValues), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", {
    className: "z-margin-right-5"
  }, "\u8054\u52A8"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
    color: "volcano"
  }, distControl ? distControl.label : "未选控件"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, "\u53EF\u9009\u9879\uFF1A"), distValues.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "#2db7f5",
      key: item.label
    }, item.label);
  }));
}
function linkRemark3(_ref3) {
  var srcControls = _ref3.srcControls,
      distControls = _ref3.distControls;
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, "\u8EAB\u4EFD\u8BC1\u8F93\u5165\u63A7\u4EF6\uFF1A"), srcControls.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "volcano",
      key: item.label
    }, item.label);
  }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", {
    className: "z-margin-right-5"
  }, "\u8054\u52A8\u51FA\u751F\u5E74\u6708\u65E5\u63A5\u6536\u63A7\u4EF6\uFF1A"), distControls.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "volcano",
      key: item.label
    }, item.label);
  }));
}
function linkRemark4(_ref4) {
  var srcControls = _ref4.srcControls,
      distControls = _ref4.distControls;
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, srcControls.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "volcano",
      key: item.label
    }, item.label);
  }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", {
    className: "z-margin-right-5"
  }, "\u9009\u9879\u7684value\u4F20\u5165\u5F02\u6B65\u63A7\u4EF6\uFF1A"), distControls.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "volcano",
      key: item.label
    }, item.label);
  }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, "\u7684\u8BF7\u6C42\u53C2\u6570\u540D\uFF1A"));
}
function linkRemark5(_ref5) {
  var srcControls = _ref5.srcControls,
      distControls = _ref5.distControls;
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, srcControls.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "volcano",
      key: item.label
    }, item.label);
  }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", {
    className: "z-margin-right-5"
  }, "\u9009\u9879\u7684\u8054\u52A8\u5F02\u6B65\u63A7\u4EF6\uFF1A"), distControls.map(function (item) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "volcano",
      key: item.label
    }, item.label);
  }));
}
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/LinkageConfig/ValueLinkControl.jsx


















function turnSelectOptions(section, needChild) {
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (list) {
    return list;
  };
  return section.map(function (g) {
    var group = false;
    var children = null;

    if (is_array_default()(g.formFieldInfoList)) {
      group = true;
      children = filter(g.formFieldInfoList).map(function (item) {
        return objectSpread_default()({}, item, {
          value: item.fieldKey,
          disabled: false
        });
      });
    }

    var newItem = objectSpread_default()({}, g, {
      value: g.name,
      group: needChild ? group : false,
      label: g.name,
      formFieldInfoList: null
    });

    if (children && needChild) {
      newItem.children = children;
    }

    return newItem;
  });
}

function getControlitem(type) {
  var findItem = controlList.find(function (item) {
    return item.value == type;
  });
  return findItem;
}

function getLinkValue() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return objectSpread_default()({
    srcControl: null,
    srcValues: [],
    srcControls: [],
    distControls: [],
    leftSelectedVal: "",
    rightSelectedVal: "",
    distControl: null,
    distValues: []
  }, query);
}

var ValueLinkControl_propTypes = {
  newFormData: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object,
  onSrcSelected: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  onOk: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func
};

function ValueLinkControl(props) {
  var newFormData = props.newFormData,
      onSrcSelected = props.onSrcSelected,
      onOk = props.onOk,
      linkageType = props.linkageType;

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      leftTransferSelections = _useState2[0],
      setLeftTransferSelections = _useState2[1];

  var _useState3 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      leftTransferSelected = _useState4[0],
      setLeftTransferSelected = _useState4[1];

  var _useState5 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      rightTransferSelections = _useState6[0],
      setRightTransferSelections = _useState6[1];

  var _useState7 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState8 = slicedToArray_default()(_useState7, 2),
      rightTransferSelected = _useState8[0],
      setRightTransferSelected = _useState8[1];

  var asyncParamNameRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])("id");
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    switch (linkageType) {
      case "1":
      case "2":
      case "3":
      case "5.2":
        setLeftTransferSelections([]);
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true));
        break;

      case "5.1":
        setLeftTransferSelections([]);
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, false));
        break;

      case "4":
        setLeftTransferSelections([]);
        setRightTransferSelections([]);
        break;

      case "6":
        setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [1].includes(item.fieldType);
          });
        }));
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [1, 5].includes(item.fieldType);
          });
        }));
        break;

      case "7":
        setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [3, 9].includes(item.fieldType);
          });
        }));
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            var config = item.config || {};

            if (typeof item.config == "string") {
              try {
                config = JSON.parse(item.config);
              } catch (e) {}
            }

            return [3, 6, 7, 8, 9].includes(item.fieldType) && config.selectionsType == 2;
          });
        }));
        break;
    }

    setLinkValue(getLinkValue());
    setLeftTransferSelected([]);
    setRightTransferSelected([]);
  }, [linkageType]);

  var _useState9 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(getLinkValue()),
      _useState10 = slicedToArray_default()(_useState9, 2),
      linkValue = _useState10[0],
      setLinkValue = _useState10[1];

  var selectOptionsRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(turnSelectOptions(newFormData.sectionList, true, function (list) {
    return list.filter(function (item) {
      var config = item.config || {};

      if (typeof config === "string") {
        config = JSON.parse(config);
      }

      return [3, 8, 9].includes(item.fieldType) && config.selectionsType != 2;
    });
  })); //第一个穿梭框的特殊属性

  var leftTransferPropsRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])({});

  var getSelectControl = function getSelectControl() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-flex-1 z-margin-right-10"
    }, Object(controls["a" /* getControl */])("Select", objectSpread_default()({
      showSearch: false,
      size: "small",
      placeholder: "请选择单选/多选控件",
      selectList: selectOptionsRef.current,
      style: {
        width: "100%"
      },
      dropdownMatchSelectWidth: false,
      dropdownStyle: {
        width: "400px"
      },
      optLabelRender: function optLabelRender(item) {
        var findItem = getControlitem(item.fieldType);
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
          className: "z-flex-space-between"
        }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", {
          className: "z-margin-right-8"
        }, item.label), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
          color: "#2db7f5"
        }, findItem.label));
      }
    }, opt)));
  };

  if (["1", "2", "3", "4", "5.1", "5.2"].includes(linkageType)) {
    leftTransferPropsRef.current = {
      leftTitle: function leftTitle() {
        return getSelectControl({
          value: linkValue.leftSelectedVal,
          onChange: function onChange(val) {
            Object(zTool["o" /* itemsFromTree */])({
              tree: selectOptionsRef.current,
              sourceItem: {
                value: val
              },
              keyObj: {
                id: "value",
                children: "children"
              },
              action: function action(_ref) {
                var tree = _ref.tree,
                    currentItem = _ref.currentItem,
                    item = _ref.item,
                    index = _ref.index;
                var config = JSON.parse(currentItem.config);
                setLeftTransferSelections(config.selectList);
                setLinkValue(objectSpread_default()({}, linkValue, {
                  leftSelectedVal: currentItem.value,
                  srcValues: [],
                  distControls: [],
                  srcControls: [],
                  srcControl: currentItem
                }));
                setLeftTransferSelected([]);
                setRightTransferSelected([]);

                if (linkageType !== "4") {
                  setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
                    return list.filter(function (item) {
                      return item.fieldKey !== val;
                    });
                  }));
                }

                onSrcSelected && onSrcSelected(currentItem);
              }
            }); // console.log(turnSelectOptions(newFormData.sectionList));
          }
        });
      },
      rightTitle: "已选择的选项"
    };
  } else if (["6", "7"].includes(linkageType)) {
    leftTransferPropsRef.current = {
      leftTitle: "可选控件列表",
      rightTitle: "已选择的控件",
      leftItemRender: function leftItemRender(item, index) {
        var findControl = getControlitem(item.fieldType);
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
          className: "z-flex-space-between"
        }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, item.label), findControl ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
          color: "purple"
        }, findControl.label) : null);
      }
    };
  } //第二个穿梭框的特殊属性


  var rightTransferPropsRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])({});

  if (["1", "2", "3", "5.2", "6"].includes(linkageType)) {
    rightTransferPropsRef.current = {
      leftTitle: "可选控件列表",
      rightTitle: "已选择的控件",
      leftItemRender: function leftItemRender(item, index) {
        var findControl = getControlitem(item.fieldType);
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
          className: "z-flex-space-between"
        }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, item.label), findControl ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
          color: "purple"
        }, findControl.label) : null);
      }
    };
  } else if (["4"].includes(linkageType)) {
    rightTransferPropsRef.current = {
      leftTitle: function leftTitle() {
        return getSelectControl({
          value: linkValue.rightSelectedVal,
          onChange: function onChange(val) {
            Object(zTool["o" /* itemsFromTree */])({
              tree: selectOptionsRef.current,
              sourceItem: {
                value: val
              },
              keyObj: {
                id: "value",
                children: "children"
              },
              action: function action(_ref2) {
                var tree = _ref2.tree,
                    currentItem = _ref2.currentItem,
                    item = _ref2.item,
                    index = _ref2.index;
                var config = JSON.parse(currentItem.config);
                setRightTransferSelections(config.selectList);
                setLinkValue(objectSpread_default()({}, linkValue, {
                  rightSelectedVal: currentItem.value,
                  distValues: [],
                  distControls: [],
                  srcControls: [],
                  distControl: currentItem
                }));
                setRightTransferSelected([]);
              }
            });
          }
        });
      },
      rightTitle: "已选择的选项"
    };
  } else if (["5.1"].includes(linkageType)) {
    rightTransferPropsRef.current = {
      leftTitle: "可选组列表",
      rightTitle: "已选择的组"
    };
  }

  var linkRemark = null;

  switch (linkageType) {
    case "1":
    case "2":
    case "3":
    case "5.1":
    case "5.2":
      linkRemark = linkRemark1(objectSpread_default()({}, linkValue, {
        linkageType: linkageType
      }));
      break;

    case "4":
      linkRemark = linkRemark2(linkValue);
      break;

    case "6":
      linkRemark = linkRemark3(linkValue);
      break;

    case "7":
      linkRemark = linkRemark5(linkValue);
      break;
  }

  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(row["a" /* default */], {
    gutter: 20,
    className: "z-margin-top-15",
    type: "flex"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: 12
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZoneWayTransfer["a" /* default */], extends_default()({}, leftTransferPropsRef.current, {
    sourceKeys: {
      name: "label",
      id: "value",
      children: "children"
    },
    repeated: false,
    leftSourceData: leftTransferSelections,
    rightTargetData: leftTransferSelected,
    onChange: function onChange(actionType, rightData, actionItem, sibligItem) {
      setLinkValue(["6", "7"].includes(linkageType) ? objectSpread_default()({}, linkValue, {
        srcControls: rightData
      }) : objectSpread_default()({}, linkValue, {
        srcValues: rightData.map(function (item) {
          return {
            label: item.label,
            value: item.value
          };
        })
      }));
    }
  }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: 12
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZoneWayTransfer["a" /* default */], extends_default()({}, rightTransferPropsRef.current, {
    repeated: false,
    sourceKeys: {
      name: "label",
      id: "value",
      children: "children"
    },
    leftSourceData: rightTransferSelections,
    rightTargetData: rightTransferSelected,
    onChange: function onChange(actionType, rightData, actionItem, sibligItem) {
      setLinkValue(linkageType === "4" ? objectSpread_default()({}, linkValue, {
        distValues: rightData
      }) : objectSpread_default()({}, linkValue, {
        distControls: rightData
      }));
    }
  }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: 9,
    className: "z-flex-items-center"
  }, linkageType === "7" ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-linkage-remark"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("p", null, linkRemark4(linkValue)), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */].Group, {
    compact: true
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */], {
    style: {
      width: "80px"
    },
    defaultValue: "value",
    disabled: true
  }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(input["a" /* default */], {
    style: {
      width: "160px"
    },
    defaultValue: "id",
    onChange: function onChange(e) {
      asyncParamNameRef.current = e.target.value;
    }
  }))) : null), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: 12
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-linkage-line z-linkage-remark z-flex-items-center"
  }, linkRemark)), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
    span: 3,
    className: "z-flex-items-center"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    onClick: function onClick(e) {
      var error = false;

      if (["6", "7"].includes(linkageType)) {
        if (!linkValue.srcControls.length || !linkValue.distControls.length) {
          error = true;
        }
      } else if (["4"].includes(linkageType)) {
        if (!linkValue.srcValues.length || !linkValue.distValues.length) {
          error = true;
        }
      } else if (!linkValue.srcValues.length || !linkValue.distControls.length) {
        error = true;
      }

      if (error) {
        message["a" /* default */].error("配置不完整");

        return;
      }

      setLinkValue(objectSpread_default()({}, linkValue, {
        srcValues: [],
        srcControls: [],
        distValues: [],
        distControls: []
      }));
      setLeftTransferSelected([]);
      setRightTransferSelected([]);
      onOk && onOk(linkValue, {
        asyncParamName: asyncParamNameRef.current
      });
    }
  }, "\u4FDD\u5B58\u5230\u8868\u5355")));
}

ValueLinkControl.propTypes = ValueLinkControl_propTypes;
/* harmony default export */ var LinkageConfig_ValueLinkControl = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(ValueLinkControl));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/LinkageConfig/ValueLinkConfigured.jsx







 // import { getControl, getOptions } from "../../Zform/controls";



function ValueLinkConfigured(props, ref) {
  var linkageType = props.linkageType,
      onRemove = props.onRemove;

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      configured = _useState2[0],
      setConfigured = _useState2[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useImperativeHandle"])(ref, function () {
    return {
      getCurrentConfigured: function getCurrentConfigured() {
        return configured;
      },
      setConfigured: setConfigured
    };
  });
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, configured.map(function (c, index) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(row["a" /* default */], {
      gutter: 16,
      key: c.srcValue,
      type: "flex",
      className: "z-link-configured"
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      span: 6
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-flex-space-between"
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "#2db7f5"
    }, c.valueLabel), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, linkageTypeActionName[linkageType]))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      span: 14
    }, c.fields.map(function (item) {
      if (is_array_default()(item.options)) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
          key: item.fieldKey
        }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
          color: "magenta"
        }, item.label), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, "\u53EF\u9009\u7684\u9009\u9879\uFF1A"), item.options.map(function (opt) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
            key: opt.value,
            color: "#2db7f5"
          }, opt.label);
        }));
      }

      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
        color: "magenta",
        key: item.fieldKey ? item.fieldKey : item.groupName
      }, item.fieldKey ? item.label : item.groupName);
    })), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      span: 4
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
      placement: "top",
      title: "\u79FB\u9664"
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-live-tool-item delete all-border small",
      onClick: function onClick() {
        typeof onRemove === "function" && onRemove(c, index);
      }
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
      type: "delete"
    })))));
  }), !configured.length ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("p", {
    className: "z-text-center"
  }, "\u65E0\u914D\u7F6E") : null);
}

/* harmony default export */ var LinkageConfig_ValueLinkConfigured = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(ValueLinkConfigured)));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/LinkageConfig/IDLinkagesConfigured.jsx






 // import { getControl, getOptions } from "../../Zform/controls";

function IDLinkagesConfigured(props, ref) {
  var onRemove = props.onRemove;

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      configured = _useState2[0],
      setConfigured = _useState2[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useImperativeHandle"])(ref, function () {
    return {
      getCurrentConfigured: function getCurrentConfigured() {
        return configured;
      },
      setConfigured: setConfigured
    };
  });
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, configured.map(function (c, index) {
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(row["a" /* default */], {
      gutter: 16,
      key: c.linkageType + c.src.fieldKey,
      type: "flex",
      className: "z-link-configured"
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      span: 6
    }, c.linkageType === "6" ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, "\u8EAB\u4EFD\u8BC1\u8F93\u5165\u63A7\u4EF6\uFF1A") : null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "#2db7f5"
    }, c.src.label)), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      span: 14
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, c.linkageType === "6" ? "出生年月日接收控件：" : "联动异步控件："), c.dist.map(function (d) {
      return d.fields.map(function (item) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
          color: "magenta",
          key: item.fieldKey
        }, item.label);
      });
    }), c.asyncParamName ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, "\u8BF7\u6C42\u9009\u9879\uFF0C\u5176\u53C2\u6570\u540D\uFF1A", _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
      color: "red"
    }, c.asyncParamName)) : null), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
      span: 4
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
      placement: "top",
      title: "\u79FB\u9664"
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
      className: "z-live-tool-item delete all-border small",
      onClick: function onClick() {
        typeof onRemove === "function" && onRemove(c, index);
      }
    }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
      type: "delete"
    })))));
  }), !configured.length ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("p", {
    className: "z-text-center"
  }, "\u65E0\u914D\u7F6E") : null);
}

/* harmony default export */ var LinkageConfig_IDLinkagesConfigured = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(IDLinkagesConfigured)));
// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/LinkageConfig/index.jsx







 // import Zform from "../Zform";
// import { getControl, getOptions } from "../../Zform/controls";







var linkageTypes = [{
  tab: "单选/多选控制控件禁用",
  key: "1",
  active: true
}, {
  tab: "单选/多选控制控件必填",
  key: "2"
}, {
  tab: "单选/多选控制控件非必填",
  key: "3"
}, {
  tab: "单选/多选控制选项",
  key: "4"
}, {
  tab: "单选/多选控制组隐藏",
  key: "5.1"
}, {
  tab: "单选/多选控制控件隐藏",
  key: "5.2"
}, {
  tab: "身份证取出生年月日",
  key: "6"
}, {
  tab: "单选联动其他控件异步选项",
  key: "7"
}];
var itemKeys = {
  name: "tab",
  id: "key"
}; // const propTypes = {};

var LinkageConfig_defaultProps = {
  //默认的linkages
  defaultValue: []
};

function LinkageConfig(props) {
  var getInsertLocation = props.getInsertLocation,
      getScrollAreaWrapperEl = props.getScrollAreaWrapperEl,
      newFormData = props.newFormData,
      defaultValue = props.defaultValue,
      onChange = props.onChange;
  var wrapperRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null);

  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      tabPanes = _useState2[0],
      setTabPanes = _useState2[1];

  var _useState3 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])("1"),
      _useState4 = slicedToArray_default()(_useState3, 2),
      tabKey = _useState4[0],
      setTabKey = _useState4[1];

  var _useState5 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(linkageTypes),
      _useState6 = slicedToArray_default()(_useState5, 2),
      linkageTypesState = _useState6[0],
      setLinkageTypes = _useState6[1];

  var curentLinkTypeRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(linkageTypesState.find(function (item) {
    return item.active;
  }));
  var objRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null);
  var defaultLinkagesRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(defaultValue);
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    // 首先得获取wrapperRef.current元素所在得位置
    var insetLocaltion = getInsertLocation(wrapperRef.current); // 获取insetLocaltion所在滚动区域得包裹元素

    objRef.current = getScrollAreaWrapperEl(insetLocaltion);
    setTabPanes([{
      tab: "联动列表",
      key: "1",
      content: null
    }, {
      tab: "联动配置",
      key: "2",
      content: null
    }]);
    return function () {
      objRef.current.methods.resetScrollArea();
    };
  }, []);
  var onItemClick = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function (e, item, i, props) {
    setLinkageTypes(linkageTypesState.map(function (l) {
      var active = l.key === item.data.key;

      if (active) {
        curentLinkTypeRef.current = item.data;
      }

      return objectSpread_default()({}, l, {
        active: active
      });
    }));
  }, []); //当前选择的控件

  var _useState7 = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])({}),
      _useState8 = slicedToArray_default()(_useState7, 2),
      currentControl = _useState8[0],
      setCurrentControl = _useState8[1]; //取ValueLinkConfigured提供的属性


  var configuredRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null);
  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    if (is_array_default()(defaultLinkagesRef.current) && ["6", "7"].includes(curentLinkTypeRef.current.key)) {
      var IDconfigured = defaultLinkagesRef.current.filter(function (age) {
        return age.linkageType === curentLinkTypeRef.current.key;
      });
      configuredRef.current && configuredRef.current.setConfigured(IDconfigured);
    } else {
      configuredRef.current && configuredRef.current.setConfigured([]);
    }
  }, [curentLinkTypeRef.current.key]);

  var onRemove = function onRemove(currentConf, index) {
    modal["a" /* default */].confirm({
      title: "是否确认移除这条配置?",
      okText: "确定",
      cancelText: "取消",
      onOk: function onOk() {
        var currentConfigured = configuredRef.current.getCurrentConfigured();
        var currentLinkageType = curentLinkTypeRef.current.key;
        var findIndex = -1;

        if (["6", "7"].includes(currentLinkageType)) {
          findIndex = defaultLinkagesRef.current.findIndex(function (item) {
            return item.linkageType === currentLinkageType && item.src.fieldKey === currentConf.src.fieldKey;
          });
        } else {
          findIndex = defaultLinkagesRef.current.findIndex(function (item) {
            return item.linkageType === currentLinkageType && item.src.fieldKey === currentConf.srcKey;
          });
        }

        if (findIndex > -1) {
          currentConfigured.splice(index, 1);

          var newConfigs = toConsumableArray_default()(currentConfigured);

          defaultLinkagesRef.current[findIndex].dist = newConfigs;
          configuredRef.current.setConfigured(newConfigs);
          defaultLinkagesRef.current = toConsumableArray_default()(defaultLinkagesRef.current);
          onChange && onChange(defaultLinkagesRef.current);
        }
      }
    });
  };

  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("section", {
    ref: wrapperRef,
    className: "z-linkage-config"
  }, objRef.current ? _react_dom_16_8_6_react_domfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createPortal(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-linkage-tab",
    ref: function ref(el) {
      if (el) {
        objRef.current.methods.setScrollAreaStyle({
          height: "calc(100% - ".concat(el.clientHeight, "px)"),
          marginTop: "".concat(el.clientHeight, "px")
        });
      }
    }
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Ztabs["a" /* default */], {
    tabPanes: tabPanes,
    activeKey: tabKey,
    onChange: function onChange(key) {
      setTabKey(key);
    }
  })), objRef.current.wrapperEl) : null, tabKey === "1" ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("section", {
    className: "z-panel"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-body z-text-center"
  }, "\u672A\u5B8C\u5F85\u7EED")) : null, tabKey === "2" ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("section", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-padding-20"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Zcascader["a" /* ZcascaderItemGroup */], {
    label: "\u8054\u52A8\u7C7B\u578B",
    itemData: linkageTypesState,
    itemKeys: itemKeys,
    onItemClick: onItemClick
  }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(LinkageConfig_ValueLinkControl, {
    newFormData: newFormData,
    linkageType: curentLinkTypeRef.current.key,
    onSrcSelected: function onSrcSelected(control) {
      var existLinkage = null;

      if (is_array_default()(defaultLinkagesRef.current)) {
        existLinkage = defaultLinkagesRef.current.find(function (age) {
          return age.linkageType === curentLinkTypeRef.current.key && age.src.fieldKey === control.fieldKey;
        });
      }

      configuredRef.current.setConfigured(existLinkage ? toConsumableArray_default()(existLinkage.dist) : []);
      setCurrentControl(control);
    },
    onOk: function onOk(links, other) {
      // if(curentLinkTypeRef.current.key === "6"){
      // }
      //转成linkage
      var linkage = {
        linkageType: curentLinkTypeRef.current.key,
        name: curentLinkTypeRef.current.tab,
        src: null,
        dist: null
      };

      if (links.srcControl) {
        linkage.src = {
          fieldKey: links.srcControl.fieldKey,
          label: links.srcControl.label,
          fieldType: links.srcControl.fieldType
        };
      }

      var linkages = [];

      if (["1", "2", "3", "5.2"].includes(curentLinkTypeRef.current.key)) {
        linkage.dist = links.srcValues.map(function (val) {
          var fields = links.distControls.map(function (d) {
            return {
              fieldKey: d.fieldKey,
              label: d.label,
              fieldType: d.fieldType
            };
          });
          return {
            srcKey: linkage.src.fieldKey,
            srcValue: val.value,
            valueLabel: val.label,
            fields: fields
          };
        });
      } else if (["4"].includes(curentLinkTypeRef.current.key)) {
        linkage.dist = links.srcValues.map(function (val) {
          var fields = [{
            fieldKey: links.distControl.fieldKey,
            label: links.distControl.label,
            fieldType: links.distControl.fieldType,
            options: links.distValues.map(function (dv) {
              return {
                label: dv.label,
                value: dv.value
              };
            })
          }];
          return {
            srcKey: linkage.src.fieldKey,
            srcValue: val.value,
            valueLabel: val.label,
            fields: fields
          };
        });
      } else if (["5.1"].includes(curentLinkTypeRef.current.key)) {
        linkage.dist = links.srcValues.map(function (val) {
          var fields = links.distControls.map(function (d) {
            return {
              groupId: d.id,
              groupName: d.label
            };
          });
          return {
            srcKey: linkage.src.fieldKey,
            srcValue: val.value,
            valueLabel: val.label,
            fields: fields
          };
        });
      } else if (["6", "7"].includes(curentLinkTypeRef.current.key)) {
        var asyncParamName = curentLinkTypeRef.current.key === "7" ? other.asyncParamName : undefined;
        linkages = links.srcControls.map(function (l) {
          return objectSpread_default()({}, linkage, {
            src: {
              fieldKey: l.fieldKey,
              label: l.label,
              fieldType: l.fieldType
            },
            asyncParamName: asyncParamName,
            dist: [{
              fields: links.distControls.map(function (d) {
                return {
                  fieldKey: d.fieldKey,
                  label: d.label,
                  asyncParamName: asyncParamName
                };
              })
            }]
          });
        });
      } //查找配置的选项中是否存在，存在就替换，不存在就追加


      if (is_array_default()(linkage.dist) && linkage.dist.length) {
        var currentConfigured = configuredRef.current.getCurrentConfigured();
        linkage.dist.forEach(function (di) {
          var existIndex = currentConfigured.findIndex(function (con) {
            return con.srcValue === di.srcValue;
          });

          if (existIndex > -1) {
            var newFields = [];
            currentConfigured[existIndex].fields.forEach(function (f) {
              var hasFieldindex = di.fields.findIndex(function (df) {
                return df.fieldKey && df.fieldKey === f.fieldKey || df.groupName && df.groupName === f.groupName;
              });

              if (hasFieldindex > -1) {
                newFields.push(di.fields[hasFieldindex]);
                di.fields.splice(hasFieldindex, 1);
              } else {
                newFields.push(f);
              }
            });
            di.fields = [].concat(newFields, toConsumableArray_default()(di.fields));
            currentConfigured.splice(existIndex, 1, di);
          } else {
            currentConfigured.push(di);
          }
        });
        linkage.dist = toConsumableArray_default()(currentConfigured);
        configuredRef.current.setConfigured(toConsumableArray_default()(currentConfigured)); //新的linkages

        var existLinkageIndex = -1;

        if (is_array_default()(defaultLinkagesRef.current)) {
          existLinkageIndex = defaultLinkagesRef.current.findIndex(function (age) {
            return age.linkageType === linkage.linkageType && age.src.fieldKey === linkage.src.fieldKey;
          });
        }

        if (existLinkageIndex > -1) {
          defaultLinkagesRef.current.splice(existLinkageIndex, 1, linkage);
        } else {
          defaultLinkagesRef.current.push(linkage);
        }
      }

      if (is_array_default()(linkages) && linkages.length && is_array_default()(defaultLinkagesRef.current)) {
        linkages.forEach(function (linkage) {
          var hasAgeIndex = defaultLinkagesRef.current.findIndex(function (age) {
            return age.linkageType === linkage.linkageType && age.src.fieldKey === linkage.src.fieldKey;
          });

          if (hasAgeIndex > -1) {
            defaultLinkagesRef.current.splice(hasAgeIndex, 1, linkage);
          } else {
            defaultLinkagesRef.current.push(linkage);
          }
        });
        var IDconfigured = defaultLinkagesRef.current.filter(function (age) {
          return age.linkageType === curentLinkTypeRef.current.key;
        });
        configuredRef.current.setConfigured(IDconfigured);
      }

      defaultLinkagesRef.current = toConsumableArray_default()(defaultLinkagesRef.current);
      onChange && onChange(defaultLinkagesRef.current);
    }
  })), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-heading"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null, currentControl.label ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
    color: "volcano"
  }, currentControl.label) : null, "\u5DF2\u914D\u7F6E\u7684\u9009\u9879")), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-body"
  }, ["6", "7"].includes(curentLinkTypeRef.current.key) ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(LinkageConfig_IDLinkagesConfigured, {
    ref: configuredRef,
    onRemove: onRemove
  }) : _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(LinkageConfig_ValueLinkConfigured, {
    linkageType: curentLinkTypeRef.current.key,
    ref: configuredRef,
    onRemove: onRemove
  }))))) : null);
}

LinkageConfig.defaultProps = LinkageConfig_defaultProps;
/* harmony default export */ var ZliveForm_LinkageConfig = (_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(ZerodMainContext["a" /* default */].setConsumer(LinkageConfig)));
// EXTERNAL MODULE: ./node_modules/zerod/components/ZfullLayer/index.jsx
var ZfullLayer = __webpack_require__("Z3zS");

// CONCATENATED MODULE: ./node_modules/zerod/components/ZliveForm/index.jsx





























 //校验、提取最新的formData数据

function commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave) {
  layoutFormRef.current.validateFields(function (errors, values) {
    if (errors) return;
    var groups = formViewerRef.current.getFormGroups();
    var newFormData = {
      code: values.code,
      description: values.description,
      name: values.name,
      labelLayout: values.labelLayout
    };
    var hasEmptyGroup = false;
    newFormData.sectionList = groups.map(function (g, gindex) {
      var formList = g.groupRef.current.getFormItems().map(function (item, itemindex) {
        return {
          fieldKey: item.fieldKey,
          fieldType: item.fieldType,
          id: item.id,
          config: item.config,
          disabled: item.disabled,
          initialValue: item.initialValue,
          label: item.label,
          regularExpression: item.regularExpression,
          required: item.required,
          sectionId: item.sectionId,
          span: item.span,
          seq: itemindex + 1,
          errorMsg: item.errorMsg,
          remark: item.remark
        };
      });

      if (!hasEmptyGroup && !formList.length) {
        hasEmptyGroup = true;
      }

      return {
        id: g.additive ? undefined : g.id,
        name: g.name,
        formFieldInfoList: formList,
        seq: gindex + 1
      };
    });

    if (hasEmptyGroup) {
      message["a" /* default */].error("存在空的组，请为其添加控件或者移除该组");

      return;
    }

    newFormData.linkages = is_array_default()(linkageRef.current) ? stringify_default()(linkageRef.current) : null;
    typeof onSave === "function" && onSave(newFormData);
  });
}

function useGetItems(formData, formViewerRef, layoutFormRef, showModal, onSave, layerRef, showViewerRef, formRenderedRef, linkageRef) {
  var hasCodeRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(false); // const linkageRef = useRef(pareLinkages(formData.linkages));

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useEffect"])(function () {
    if (layoutFormRef.current && formRenderedRef.current) {
      layoutFormRef.current.setFieldsValue({
        name: formData.name,
        code: formData.code,
        labelLayout: formData.labelLayout,
        description: formData.description
      });
    }

    hasCodeRef.current = !!formData.code;
    linkageRef.current = pareLinkages(formData.linkages);
  }, [formData, layoutFormRef.current, formRenderedRef.current]);
  var itemsRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])([{
    key: "name",
    label: "表单名称",
    span: 4,
    render: function render(form, changeFormItems) {
      return ZliveForm_controls["1"].getControl();
    },
    options: ZliveForm_controls["1"].getOptions({
      required: true,
      initialValue: formData.name
    })
  }, {
    key: "code",
    label: "表单编码",
    span: 4,
    render: function render(form, changeFormItems) {
      return ZliveForm_controls["1"].getControl({}, undefined, undefined, {
        disabled: hasCodeRef.current
      });
    },
    options: ZliveForm_controls["1"].getOptions({
      required: true,
      initialValue: formData.code
    })
  }, {
    key: "labelLayout",
    label: "label布局",
    span: 6,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return ZliveForm_controls["9"].getControl({
        config: {
          selectList: [{
            label: "内联",
            value: "inline"
          }, {
            label: "纵向",
            value: "vertical"
          }, {
            label: "横向",
            value: "horizontal"
          }]
        }
      }, undefined, undefined, {
        onChange: function onChange(e) {
          var groups = formViewerRef.current.getFormGroups();
          formViewerRef.current.setFormGroups(groups.map(function (item) {
            return objectSpread_default()({}, item, {
              labelLayout: e.target.value
            });
          }));
        }
      });
    },
    options: ZliveForm_controls["9"].getOptions({
      initialValue: formData.labelLayout
    })
  }, {
    key: "buttons",
    label: null,
    span: 10,
    render: function render() {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
        className: "z-text-right"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(es_button["a" /* default */], {
        type: "primary",
        className: "z-margin-right-12",
        onClick: function onClick() {
          commitFormData(formViewerRef, layoutFormRef, linkageRef, function (newFormData) {
            showModal({
              show: true,
              modal: "linkageConfigModal",
              content: _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_LinkageConfig, {
                newFormData: newFormData,
                defaultValue: linkageRef.current,
                onChange: function onChange(newLinkages) {
                  console.log(stringify_default()(newLinkages));
                  linkageRef.current = newLinkages;
                }
              })
            });
          });
        }
      }, "\u8054\u52A8\u914D\u7F6E"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(es_button["a" /* default */], {
        type: "primary",
        className: "z-margin-right-12",
        onClick: function onClick() {
          commitFormData(formViewerRef, layoutFormRef, linkageRef, function (newFormData) {
            layerRef.current.methods.showLayer(true, function () {
              showViewerRef.current.setFormData(newFormData);
            }, true)();
          });
        }
      }, "\u9884\u89C8"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(es_button["a" /* default */], {
        type: "primary",
        className: "z-margin-right-12",
        onClick: function onClick() {
          commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave);
        }
      }, "\u4FDD\u5B58"));
    }
  }, {
    key: "description",
    label: "描述",
    span: 24,
    render: function render(form, changeFormItems) {
      return ZliveForm_controls["2"].getControl();
    },
    options: ZliveForm_controls["2"].getOptions({
      required: false,
      initialValue: formData.description
    })
  }]);
  return itemsRef.current;
}

function openUpdateControl(showModal, groupId, formViewerRef, linkageRef, formItem, type) {
  showModal({
    show: true,
    modal: "controlProtoModal",
    content: _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_AddColForm, {
      groupId: groupId,
      formItem: formItem,
      formViewerRef: formViewerRef,
      linkageRef: linkageRef,
      type: type
    }),
    width: "800px"
  });
}

function setNewCurrentGroupItems(formViewerRef, item, action) {
  var groups = formViewerRef.current.getFormGroups();
  var groupRefIndex = groups.findIndex(function (g) {
    return g.id == item.groupId;
  });
  var groupRef = groups[groupRefIndex].groupRef;
  var currentItems = groupRef.current.getFormItems().slice(0);
  var i = currentItems.findIndex(function (o) {
    return o.key == item.key;
  });
  var newItems = typeof action === "function" ? action(currentItems, i) : currentItems;
  groupRef.current.setFormItems(newItems);
}

function useFormProps(showModal, formViewerRef, linkageRef) {
  return Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])({
    colContentRender: function colContentRender(item, form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
        className: "z-live-tool"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
        style: {
          width: "40%"
        },
        className: "z-padding-left-10"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(slider["a" /* default */], {
        min: 2,
        max: 24,
        defaultValue: item.span,
        onAfterChange: function onAfterChange(value) {
          setNewCurrentGroupItems(formViewerRef, item, function (currentItems, i) {
            currentItems[i]["span"] = value;
            return currentItems;
          });
        }
      })), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
        placement: "top",
        title: "\u79FB\u9664\u63A7\u4EF6"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
        className: "z-live-tool-item right-item delete",
        onClick: function onClick() {
          modal["a" /* default */].confirm({
            title: "\u786E\u8BA4\u79FB\u9664[".concat(item.label, "]\u8FD9\u4E2A\u63A7\u4EF6\u5417?"),
            okText: "确定",
            cancelText: "取消",
            onOk: function onOk() {
              setNewCurrentGroupItems(formViewerRef, item, function (currentItems, i) {
                linkageRef.current && removeSomeLinkage(linkageRef, currentItems[i].fieldKey);
                currentItems.splice(i, 1);
                return currentItems;
              });
            }
          });
        }
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
        type: "delete"
      }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tooltip["a" /* default */], {
        placement: "top",
        title: "\u4FEE\u6539\u63A7\u4EF6"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
        className: "z-live-tool-item right-item",
        onClick: function onClick() {
          openUpdateControl(showModal, item.groupId, formViewerRef, linkageRef, item, "update");
        }
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
        type: "form"
      }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
        className: "z-live-tool-item right-item"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("i", {
        className: "zero-icon zerod-move",
        "data-handle": "handle"
      }))));
    },
    submitBtnRender: function submitBtnRender(onSubmit, props) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(col["a" /* default */], {
        span: 24,
        "data-groupid": props.group.id,
        className: "z-text-center z-margin-bottom-10 z-add-formitem-btn",
        style: {
          padding: "15px 0",
          marginTop: "20px",
          cursor: "pointer"
        },
        onClick: function onClick() {
          openUpdateControl(showModal, props.group.id, formViewerRef, linkageRef, null, "add");
        }
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(icon["a" /* default */], {
        type: "plus"
      }), " \u6DFB\u52A0\u63A7\u4EF6");
    }
  }).current;
}

function getParentElement(el) {
  var _pE = el.parentElement;

  while (_pE && !_pE.className.includes("z-form-row")) {
    _pE = el.parentElement;
  }

  return _pE;
}

function getGroupIndex(formViewerRef, group) {
  var groups = formViewerRef.current.getFormGroups();
  var index = groups.findIndex(function (g) {
    return g.id === group.id;
  });
  var newGroups = groups.slice(0);
  return [newGroups, index];
}

function getNewGroupData(labelLayout, groupnameNumRef) {
  var item = {
    additive: true,
    name: "\u7EC4\u540D-".concat(groupnameNumRef.current),
    id: Object(zTool["b" /* GenNonDuplicateID */])(),
    formFieldInfoList: [],
    labelLayout: labelLayout
  };
  groupnameNumRef.current++;
  return item;
}

var ZliveForm_propTypes = {
  formData: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.object,
  onSave: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  showRightModal: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func,
  showLayerRightModal: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.func
};
var ZliveForm_defaultProps = {
  formData: {}
};
var ShowFormViewer = _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.memo(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.forwardRef(function (props, ref) {
  var _useState = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useImperativeHandle"])(ref, function () {
    return {
      setFormData: setFormData
    };
  });
  return formData ? _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    style: {
      width: "90%",
      margin: "0 auto"
    }
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_FormViewer, {
    formData: formData
  })) : _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    style: {
      height: "100px"
    }
  });
}));
var ZliveForm = ZerodMainContext["a" /* default */].setConsumer(ZerodLayerContext["a" /* default */].setConsumer(function LiveForm(_ref) {
  var formData = _ref.formData,
      onSave = _ref.onSave,
      showRightModal = _ref.showRightModal,
      showLayerRightModal = _ref.showLayerRightModal;
  var groupnameNumRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(1);
  var layerRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null);
  var linkageRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null);
  var showViewerRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null);
  var layoutFormRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null); //取FormViewer的实例

  var formViewerRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null); //打开modal的方法

  var showModal = zTool["e" /* dataType */].isFunction(showRightModal) ? showRightModal : zTool["e" /* dataType */].isFunction(showLayerRightModal) ? showLayerRightModal : function () {};

  if (!formData.sectionList || !formData.sectionList.length) {
    formData.sectionList = [getNewGroupData(formData.labelLayout, groupnameNumRef)];
  } //当前Zform的items


  var formRenderedRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(false);
  var items = useGetItems(formData, formViewerRef, layoutFormRef, showModal, onSave, layerRef, showViewerRef, formRenderedRef, linkageRef); //FormGroup里面Zform的扩展属性

  var formProps = useFormProps(showModal, formViewerRef, linkageRef); //存dragula的实例

  var drakeRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null); //存拖动元素下一个元素

  var nextSiblingRef = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useRef"])(null); //动态表单组变化的回调

  var onFormGroupsChange = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function (formGroups) {
    if (!drakeRef.current) {
      if (formGroups.length) {
        drakeRef.current = Object(dragula_dragula["a" /* default */])(formGroups.map(function (g) {
          return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
        }), {
          removeOnSpill: false,
          revertOnSpill: true,
          direction: "mixed",
          copy: false,
          copySortSource: false,
          accepts: function accepts(el, target, source, sibling) {
            //因为 z-add-formitem-btn 按钮是target/source最后一个子元素，也就是没有sibling时是不能被停放的
            if (!sibling) {
              return false;
            }

            return true;
          },
          moves: function moves(el, source, handle, sibling) {
            return handle.dataset.handle == "handle";
          }
        }).on("cloned", function (cloneEl, sourceEl, type) {
          nextSiblingRef.current = sourceEl.nextElementSibling;

          var _parEl = getParentElement(sourceEl);

          cloneEl.className += " z-live-form-item-clone ".concat(_parEl.className.slice(/z\-form\-label\-/g.exec(_parEl.className).index));
        }).on("drop", function (el, target, source, sibling) {
          var groups = formViewerRef.current.getFormGroups();
          var currentItem = JSON.parse(el.dataset.item);
          var currentGroup = groups.find(function (g) {
            return g.id == currentItem.groupId;
          });
          var newFormItems = currentGroup.groupRef.current.getFormItems().slice(0);
          var currentindex = newFormItems.findIndex(function (item) {
            return item.key == currentItem.key;
          });
          var currentFormitem = newFormItems[currentindex];

          if (target === source) {
            if (sibling.dataset.item) {
              var siblingItem = JSON.parse(sibling.dataset.item);
              var sibingindex = newFormItems.findIndex(function (item) {
                return item.key == siblingItem.key;
              });

              if (currentindex < sibingindex) {
                newFormItems.splice(sibingindex, 0, currentFormitem);
                newFormItems.splice(currentindex, 1);
              } else if (currentindex > sibingindex) {
                newFormItems.splice(currentindex, 1);
                newFormItems.splice(sibingindex, 0, currentFormitem);
              }
            } else {
              newFormItems.splice(currentindex, 1);
              newFormItems.push(currentFormitem);
            }

            currentGroup.groupRef.current.setFormItems(newFormItems);
          } else {
            var targetGroup = null;
            var targetFormItems = [];

            if (sibling.dataset.item) {
              var _siblingItem = JSON.parse(sibling.dataset.item);

              targetGroup = groups.find(function (g) {
                return g.id == _siblingItem.groupId;
              });
              targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);

              var _sibingindex = targetFormItems.findIndex(function (item) {
                return item.key == _siblingItem.key;
              });

              currentFormitem.groupId = _siblingItem.groupId;
              targetFormItems.splice(_sibingindex, 0, currentFormitem);
            } else if (sibling.dataset.groupid) {
              targetGroup = groups.find(function (g) {
                return g.id == sibling.dataset.groupid;
              });
              targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);
              currentFormitem.groupId = sibling.dataset.groupid;
              targetFormItems.push(currentFormitem);
            }

            if (targetGroup) {
              target.removeChild(el);
              source.appendChild(el); // console.log(target,source)

              newFormItems.splice(currentindex, 1);
              targetGroup.groupRef.current.setFormItems(targetFormItems);
              currentGroup.groupRef.current.setFormItems(newFormItems);
            }
          }
        });
      }
    } else {
      drakeRef.current.containers = formGroups.map(function (g) {
        return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
      });
    }
  }, [drakeRef.current, formViewerRef.current, nextSiblingRef.current]);
  var getFormInstance = Object(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722["useCallback"])(function (form) {
    layoutFormRef.current = form;
  }, [layoutFormRef.current]);
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(FormContext.Provider, {
    value: formProps
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important"
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Zform["b" /* default */], {
    items: items,
    labelLayout: "inline",
    style: {
      width: "100%"
    },
    submitBtnName: "",
    getFormInstance: getFormInstance,
    afterItemsRendered: function afterItemsRendered() {
      formRenderedRef.current = true;
    }
  }))), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_FormViewer, {
    onFormGroupsChange: onFormGroupsChange,
    ref: formViewerRef,
    className: "z-live-form",
    formData: formData,
    title: false,
    linkage: false,
    groupTitleLeftRender: function groupTitleLeftRender(group, stateGroupName, onGroupNameChange, groups) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_GroupNameEdit, {
        value: stateGroupName,
        onChange: function onChange(val) {
          var hasindex = groups.findIndex(function (item) {
            return item.name === val;
          });

          if (hasindex > -1) {
            message["a" /* default */].error("组名不能与其他组名相同");

            return true;
          }

          onGroupNameChange(val);
        }
      });
    },
    groupTitleRightRender: function groupTitleRightRender(group) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.Fragment, null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_InsertGroupBtns, {
        onInsertUp: function onInsertUp() {
          var _getGroupIndex = getGroupIndex(formViewerRef, group),
              _getGroupIndex2 = slicedToArray_default()(_getGroupIndex, 2),
              newGroups = _getGroupIndex2[0],
              index = _getGroupIndex2[1];

          var groupItem = getGroupItem(getNewGroupData(layoutFormRef.current.getFieldValue("labelLayout"), groupnameNumRef));

          if (index === 0) {
            newGroups.unshift(groupItem);
          } else {
            newGroups.splice(index, 0, groupItem);
          }

          formViewerRef.current.setFormGroups(newGroups);

          message["a" /* default */].success("向上插入组成功");
        },
        onInsertDown: function onInsertDown() {
          var _getGroupIndex3 = getGroupIndex(formViewerRef, group),
              _getGroupIndex4 = slicedToArray_default()(_getGroupIndex3, 2),
              newGroups = _getGroupIndex4[0],
              index = _getGroupIndex4[1];

          var groupItem = getGroupItem(getNewGroupData(layoutFormRef.current.getFieldValue("labelLayout"), groupnameNumRef));

          if (index === newGroups.length - 1) {
            newGroups.push(groupItem);
          } else {
            newGroups.splice(index + 1, 0, groupItem);
          }

          formViewerRef.current.setFormGroups(newGroups);

          message["a" /* default */].success("向下插入组成功");
        }
      }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZliveForm_GroupMoveBtns, {
        onMoveUp: function onMoveUp() {
          var _getGroupIndex5 = getGroupIndex(formViewerRef, group),
              _getGroupIndex6 = slicedToArray_default()(_getGroupIndex5, 2),
              newGroups = _getGroupIndex6[0],
              index = _getGroupIndex6[1];

          if (index > 0) {
            newGroups.splice(index, 1);
            newGroups.splice(index - 1, 0, group);
            formViewerRef.current.setFormGroups(newGroups);

            message["a" /* default */].success("上移成功");
          }
        },
        onMoveDown: function onMoveDown() {
          var _getGroupIndex7 = getGroupIndex(formViewerRef, group),
              _getGroupIndex8 = slicedToArray_default()(_getGroupIndex7, 2),
              newGroups = _getGroupIndex8[0],
              index = _getGroupIndex8[1];

          if (index > -1 && index < newGroups.length - 1) {
            newGroups.splice(index + 2, 0, group);
            newGroups.splice(index, 1);
            formViewerRef.current.setFormGroups(newGroups);

            message["a" /* default */].success("下移成功");
          }
        },
        onRemove: function onRemove() {
          modal["a" /* default */].confirm({
            title: "\u786E\u8BA4\u79FB\u9664[".concat(group.name, "]\u8FD9\u4E2A\u7EC4\u5417?"),
            okText: "确定",
            cancelText: "取消",
            onOk: function onOk() {
              var _getGroupIndex9 = getGroupIndex(formViewerRef, group),
                  _getGroupIndex10 = slicedToArray_default()(_getGroupIndex9, 2),
                  newGroups = _getGroupIndex10[0],
                  index = _getGroupIndex10[1];

              if (newGroups.length === 1) {
                message["a" /* default */].warning("最后一组不能移除");

                return;
              }

              newGroups.splice(index, 1);
              formViewerRef.current.setFormGroups(newGroups);

              message["a" /* default */].success("移除成功");
            }
          });
        }
      }), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(tag["a" /* default */], {
        color: group.additive ? "blue" : "magenta"
      }, group.additive ? "\u65B0\u589E" : "ID".concat(group["id"])));
    }
  })), _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ZfullLayer["a" /* default */], {
    ref: layerRef
  }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(ShowFormViewer, {
    ref: showViewerRef
  })));
}));
ZliveForm.propTypes = ZliveForm_propTypes;
ZliveForm.defaultProps = ZliveForm_defaultProps;
ZliveForm.FormViewer = ZliveForm_FormViewer;
/* harmony default export */ var components_ZliveForm = (ZliveForm);
// EXTERNAL MODULE: ./src/HOC/load-HOC.js
var load_HOC = __webpack_require__("ebhq");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZliveForm/doc.md
var doc = __webpack_require__("HPR2");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// CONCATENATED MODULE: ./src/views/Main/component-doc/ZliveForm-doc/formData.js
/* harmony default export */ var ZliveForm_doc_formData = ({
  id: 785,
  name: "请假流程申请表单",
  code: "leave_flow_start_form",
  version: 3,
  seq: 0,
  description: "请假流程申请表单",
  configuration: null,
  linkages: null,
  customOnChange: null,
  formTypeId: null,
  gmtCreate: "2019-07-16 09:46:04",
  gmtModified: "2019-07-16 09:46:04",
  sectionList: [{
    id: 850,
    formId: 785,
    name: "基本信息",
    seq: 1,
    description: null,
    gmtCreate: "2019-07-16 09:46:04",
    gmtModified: "2019-07-16 09:46:04",
    formFieldInfoList: [{
      id: 2759,
      sectionId: 850,
      label: "请假类型",
      fieldKey: "leaveType",
      fieldType: 3,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 12,
      labelWidth: null,
      config: '{"selectionsType":1,"selectListFieldNames":{"label":"label","value":"value","children":"children"},"selectList":[{"id":"808501111562919900000","label":"事假","value":"1"},{"id":"609364761562920100000","label":"病假","value":"2"},{"id":"244347411562920180000","label":"年休假","value":"3"},{"id":"201580921562920160000","label":"婚假","value":"4"},{"id":"775874771562920100000","label":"调休","value":"5"},{"id":"509046801562920160000","label":"产假及看护假","value":"6"}],"selectionsQuery":{}}',
      initialValue: null,
      seq: 1,
      gmtCreate: "2019-07-16 09:46:04",
      gmtModified: "2019-07-16 09:46:04"
    }, {
      id: 2760,
      sectionId: 850,
      label: "请假小时",
      fieldKey: "hours",
      fieldType: 4,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 12,
      labelWidth: null,
      config: "{}",
      initialValue: null,
      seq: 2,
      gmtCreate: "2019-07-16 09:46:04",
      gmtModified: "2019-07-16 09:46:04"
    }, {
      id: 2761,
      sectionId: 850,
      label: "开始时间",
      fieldKey: "beginTime",
      fieldType: 5,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 12,
      labelWidth: null,
      config: '{"format":"YYYY-MM-DD HH:mm"}',
      initialValue: null,
      seq: 3,
      gmtCreate: "2019-07-16 09:46:04",
      gmtModified: "2019-07-16 09:46:04"
    }, {
      id: 2762,
      sectionId: 850,
      label: "结束时间",
      fieldKey: "finishTime",
      fieldType: 5,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 12,
      labelWidth: null,
      config: '{"format":"YYYY-MM-DD HH:mm"}',
      initialValue: null,
      seq: 4,
      gmtCreate: "2019-07-16 09:46:04",
      gmtModified: "2019-07-16 09:46:04"
    }, {
      id: 2763,
      sectionId: 850,
      label: "申请理由",
      fieldKey: "reason",
      fieldType: 2,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: "{}",
      initialValue: null,
      seq: 5,
      gmtCreate: "2019-07-16 09:46:04",
      gmtModified: "2019-07-16 09:46:04"
    }, {
      id: 2764,
      sectionId: 850,
      label: "附件",
      fieldKey: "fileList",
      fieldType: 11,
      required: 0,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"url":"/file-upload-service/webapi/v1.0/fileUpload/uploads","urlMethod":"post","urlParamName":"files"}',
      initialValue: null,
      seq: 6,
      gmtCreate: "2019-07-16 09:46:04",
      gmtModified: "2019-07-16 09:46:04"
    }]
  }],
  buttonList: []
}); // export default {
// 	code: "dog_check_in_form",
// 	name: "养犬信息登记表",
// 	labelLayout: "inline",
// 	sectionList: [
// 		{
// 			id: 111,
// 			name: "犬只信息",
// 			formFieldInfoList: [
// 				{
// 					fieldKey: "dogName",
// 					fieldType: 1,
// 					id: 466,
// 					config: '{"maxLength":8,"minLength":1}',
// 					initialValue: null,
// 					label: "犬只名称",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 1,
// 				},
// 				{
// 					fieldKey: "dogType",
// 					fieldType: 1,
// 					id: 467,
// 					config: '{"maxLength":16,"minLength":1}',
// 					initialValue: null,
// 					label: "犬只品种",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 2,
// 				},
// 				{
// 					fieldKey: "dogSex",
// 					fieldType: 9,
// 					id: 468,
// 					config: '{"selectList":[{"label":"公","value":"1"},{"label":"母","value":"2"}]}',
// 					initialValue: "1",
// 					label: "犬只性别",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 3,
// 				},
// 				{
// 					fieldKey: "dogProperty",
// 					fieldType: 3,
// 					id: 469,
// 					config:
// 						'{"selectList":[{"label":"普通宠物","value":"1"},{"label":"导盲犬/扶助犬","value":"2"},{"label":"其他","value":"3"}]}',
// 					disabled: true,
// 					initialValue: null,
// 					label: "犬只性质",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 4,
// 				},
// 				{
// 					fieldKey: "dogColor",
// 					fieldType: 1,
// 					id: 470,
// 					config: '{"maxLength":8,"minLength":1}',
// 					initialValue: null,
// 					label: "犬只颜色",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 5,
// 				},
// 				{
// 					fieldKey: "isIris",
// 					fieldType: 9,
// 					id: 471,
// 					config: '{"selectList":[{"label":"是","value":"1"},{"label":"否","value":"2"}]}',
// 					initialValue: null,
// 					label: "录入虹膜",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 6,
// 				},
// 				{
// 					fieldKey: "rfid",
// 					fieldType: 9,
// 					id: 472,
// 					config: '{"selectList":[{"label":"是","value":"1"},{"label":"否","value":"2"}]}',
// 					initialValue: null,
// 					label: "电子标签",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 7,
// 				},
// 				{
// 					fieldKey: "birthday",
// 					fieldType: 5,
// 					id: 473,
// 					config: '{"format":"YYYY-MM-DD"}',
// 					initialValue: null,
// 					label: "出生日期",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 111,
// 					span: 8,
// 					seq: 8,
// 				},
// 				{
// 					fieldKey: "pic",
// 					fieldType: 11,
// 					id: 474,
// 					config:
// 						'{"url":"/file-upload-service/webapi/v1.0/fileUpload/uploads","accept":"87887878","multiple":false,"paramName":"7878","detailUrl":"/file-upload-service/webapi/v1.0/fileUpload/listUploadInfoByIds"}',
// 					initialValue: null,
// 					label: "上传文件",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 111,
// 					span: 24,
// 					seq: 9,
// 				},
// 				{
// 					fieldKey: "weihubs",
// 					fieldType: 3,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// 					disabled: 0,
// 					label: "下拉控件",
// 					required: 1,
// 					span: 8,
// 					seq: 10,
// 				},
// 				{
// 					fieldKey: "double",
// 					fieldType: 8,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// 					disabled: 0,
// 					label: "多选",
// 					required: 1,
// 					span: 8,
// 					seq: 11,
// 				},
// 				{
// 					fieldKey: "single",
// 					fieldType: 9,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// 					disabled: 0,
// 					label: "单选",
// 					required: 1,
// 					span: 8,
// 					seq: 12,
// 				},
// 				{
// 					fieldKey: "casserole",
// 					fieldType: 6,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"part"},"selectionsQuery":{"id":"0"},"changeOnSelect":0}',
// 					disabled: 0,
// 					label: "级联控件",
// 					required: 1,
// 					span: 8,
// 					seq: 13,
// 				},
// 				{
// 					fieldKey: "treeSelect",
// 					fieldType: 7,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"part"},"selectionsQuery":{"id":"0"}}',
// 					disabled: 0,
// 					label: "tree控件",
// 					required: 1,
// 					span: 8,
// 					seq: 14,
// 				},
// 				{
// 					fieldKey: "asyncTests",
// 					fieldType: 3,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"itemName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/system-service/webapi/sysDictionary/listByTypeCode","requireType":"all"},"selectionsQuery":{"typeCode":"case_type"}}',
// 					disabled: 0,
// 					initialValue: 8,
// 					label: "下拉测试异步",
// 					required: 1,
// 					span: 8,
// 					seq: 15,
// 				},
// 				{
// 					fieldKey: "asyncYYYYYY",
// 					fieldType: 3,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"itemName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/system-service/webapi/sysDictionary/listByParentId","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// 					disabled: 0,
// 					label: "接收异步联动",
// 					required: 1,
// 					span: 8,
// 					seq: 16,
// 				},
// 				{
// 					fieldKey: "yearssss",
// 					fieldType: 5,
// 					config: '{"format":"YYYY"}',
// 					disabled: 0,
// 					label: "年份",
// 					required: 1,
// 					span: 8,
// 					seq: 17,
// 				},
// 			],
// 			seq: 1,
// 		},
// 		{
// 			id: 112,
// 			name: "养犬人信息",
// 			formFieldInfoList: [
// 				{
// 					fieldKey: "name",
// 					fieldType: 1,
// 					id: 475,
// 					config: '{"maxLength":8,"minLength":1}',
// 					initialValue: null,
// 					label: "养犬人姓名",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 1,
// 				},
// 				{
// 					fieldKey: "type",
// 					fieldType: 3,
// 					id: 476,
// 					config: '{"selectList":[{"label":"身份证","value":"1"},{"label":"港澳通行证","value":"2"}]}',
// 					initialValue: null,
// 					label: "证件类型",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 2,
// 				},
// 				{
// 					fieldKey: "number",
// 					fieldType: 4,
// 					id: 477,
// 					config: '{"decimalLength":0}',
// 					initialValue: null,
// 					label: "证件号码",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 3,
// 				},
// 				{
// 					fieldKey: "tel",
// 					fieldType: 4,
// 					id: 478,
// 					config: '{"decimalLength":0}',
// 					initialValue: null,
// 					label: "移动电话",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 4,
// 				},
// 				{
// 					fieldKey: "telephone",
// 					fieldType: 1,
// 					id: 479,
// 					config: '{"maxLength":20,"minLength":1}',
// 					initialValue: null,
// 					label: "固定电话",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 5,
// 				},
// 				{
// 					fieldKey: "email",
// 					fieldType: 1,
// 					id: 480,
// 					config: '{"maxLength":20,"minLength":1}',
// 					initialValue: null,
// 					label: "电子邮箱",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 6,
// 				},
// 				{
// 					fieldKey: "dogCount",
// 					fieldType: 4,
// 					id: 481,
// 					config: '{"decimalLength":0}',
// 					initialValue: null,
// 					label: "犬只数量",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 7,
// 				},
// 				{
// 					fieldKey: "address",
// 					fieldType: 1,
// 					id: 482,
// 					config: '{"maxLength":50,"minLength":1}',
// 					initialValue: null,
// 					label: "详细地址",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 8,
// 				},
// 				{
// 					fieldKey: "domicile",
// 					fieldType: 3,
// 					id: 483,
// 					config:
// 						'{"selectList":[{"label":"自有","value":"1"},{"label":"租赁","value":"2"},{"label":"其他","value":"3"}]}',
// 					initialValue: null,
// 					label: "住所性质",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 112,
// 					span: 8,
// 					seq: 9,
// 				},
// 			],
// 			seq: 2,
// 		},
// 		{
// 			id: 113,
// 			name: "领取方式",
// 			formFieldInfoList: [
// 				{
// 					fieldKey: "dogCard",
// 					fieldType: 1,
// 					id: 484,
// 					config: '{"maxLength":8,"minLength":1}',
// 					initialValue: "电子犬证",
// 					label: "电子犬证",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 113,
// 					span: 8,
// 					seq: 1,
// 				},
// 				{
// 					fieldKey: "isEntity",
// 					fieldType: 9,
// 					id: 490,
// 					config: '{"selectList":[{"label":"是","value":"1"},{"label":"否","value":"2"}]}',
// 					initialValue: "2",
// 					label: "是否需要实体卡",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 113,
// 					span: 8,
// 					seq: 2,
// 				},
// 				{
// 					fieldKey: "payment",
// 					fieldType: 9,
// 					id: 485,
// 					config: '{"selectList":[{"label":"自取","value":"1"},{"label":"寄邮到付","value":"2"}]}',
// 					initialValue: null,
// 					label: "领取方式",
// 					regularExpression: null,
// 					required: 1,
// 					sectionId: 113,
// 					span: 8,
// 					seq: 3,
// 				},
// 				{
// 					fieldKey: "location",
// 					fieldType: 1,
// 					id: 486,
// 					config: '{"maxLength":50,"minLength":1}',
// 					initialValue: null,
// 					label: "自取地址",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 113,
// 					span: 8,
// 					seq: 4,
// 				},
// 				{
// 					fieldKey: "recipientName",
// 					fieldType: 1,
// 					id: 487,
// 					config: '{"maxLength":8,"minLength":1}',
// 					initialValue: null,
// 					label: "收件人姓名",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 113,
// 					span: 8,
// 					seq: 5,
// 				},
// 				{
// 					fieldKey: "contact",
// 					fieldType: 4,
// 					id: 488,
// 					config: '{"decimalLength":0}',
// 					initialValue: null,
// 					label: "联系方式",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 113,
// 					span: 8,
// 					seq: 6,
// 				},
// 				{
// 					fieldKey: " mailingAddress",
// 					fieldType: 1,
// 					id: 489,
// 					config: '{"maxLength":50,"minLength":0}',
// 					initialValue: null,
// 					label: "邮寄地址",
// 					regularExpression: null,
// 					required: 0,
// 					sectionId: 113,
// 					span: 8,
// 					seq: 7,
// 				},
// 			],
// 			seq: 3,
// 		},
// 	],
// 	linkages:
// 		'[{"linkageType":"7","name":"单选联动其他控件异步选项","src":{"fieldKey":"asyncTests","label":"下拉测试异步","fieldType":3},"dist":[{"fields":[{"srcKey":"asyncTests","fieldKey":"asyncYYYYYY","label":"接收异步联动","fieldType":3,"asyncParamName":"id"}]}],"asyncParamName":"id"}]',
// };
// {
// 	linkageType: "4",
// 	name: "单选/多选 控制 选项",
// 	src: { fieldKey: "rfid" },
// 	dist: [
// 		{
// 			srcValue: "1",
// 			fields: [
// 				{
// 					fieldKey: "domicile",
// 					label: "住所性质",
// 					options: [
// 						{ label: "自有", value: "1" },
// 						{ label: "租赁", value: "2" },
// 						{ label: "其他", value: "3" },
// 					],
// 				},
// 			],
// 		},
// 		{
// 			srcValue: "2",
// 			fields: [
// 				{
// 					fieldKey: "domicile",
// 					label: "住所性质",
// 					options: [{ label: "自有", value: "1" }],
// 				},
// 			],
// 		},
// 	],
// },
// EXTERNAL MODULE: ./src/views/Main/component-doc/ZliveForm-doc/linkages.json
var ZliveForm_doc_linkages = __webpack_require__("e6XE");

// CONCATENATED MODULE: ./src/views/Main/component-doc/ZliveForm-doc/index.jsx











var AmdDocHOC = load_HOC["a" /* default */].AmdDocHOC,
    AshowDemoHOC = load_HOC["a" /* default */].AshowDemoHOC;



/* harmony default export */ var ZliveForm_doc = __webpack_exports__["default"] = (AmdDocHOC(doc_default.a, {
  demo0: function demo0() {
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
        _this.formData = objectSpread_default()({}, ZliveForm_doc_formData);

        _this.onSave = function (newFormData) {
          console.log(newFormData);
        };

        return _this;
      }

      createClass_default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(components_ZliveForm, {
            formData: this.formData,
            onSave: this.onSave
          });
        }
      }]);

      return Myjavascript;
    }(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.PureComponent);

    var Dom = AshowDemoHOC(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Myjavascript, null), true);
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Dom, null);
  },
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      inherits_default()(Myjavascript, _React$PureComponent2);

      function Myjavascript() {
        var _getPrototypeOf3;

        var _this2;

        classCallCheck_default()(this, Myjavascript);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = possibleConstructorReturn_default()(this, (_getPrototypeOf3 = getPrototypeOf_default()(Myjavascript)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.state = {
          formValue: {
            dogCard: "我的观点"
          }
        };
        _this2.formData = objectSpread_default()({}, ZliveForm_doc_formData);

        _this2.onSubmit = function (values) {
          console.log(values);
          return promise_default.a.resolve();
        };

        return _this2;
      }

      createClass_default()(Myjavascript, [{
        key: "componentDidMount",
        value: function componentDidMount() {// setTimeout(() => {
          // 	this.setState({
          // 		formValue:{
          // 			dogName:"8888"
          // 		}
          // 	})
          // }, 2000);
        }
      }, {
        key: "render",
        value: function render() {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(components_ZliveForm.FormViewer, {
            formValues: this.state.formValue,
            formData: this.formData,
            onSubmit: this.onSubmit,
            momentFormat: true,
            submitBtnRender: function submitBtnRender(submit) {
              return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("div", {
                className: "z-text-center"
              }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(es_button["a" /* default */], {
                type: "primary",
                onClick: submit
              }, "\u63D0\u4EA4\u6570\u636E"));
            }
          });
        }
      }]);

      return Myjavascript;
    }(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.PureComponent);

    var Dom = AshowDemoHOC(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Myjavascript, null), true);
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Dom, null);
  },
  demo2: function demo2() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent3) {
      inherits_default()(Myjavascript, _React$PureComponent3);

      function Myjavascript() {
        classCallCheck_default()(this, Myjavascript);

        return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Myjavascript).apply(this, arguments));
      }

      createClass_default()(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement("span", null);
        }
      }]);

      return Myjavascript;
    }(_react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.PureComponent);

    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a.createElement(Myjavascript, null);
  }
}));

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

/***/ "jkYs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(371);

/***/ }),

/***/ "q3Yw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(312);

/***/ }),

/***/ "s677":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(359);

/***/ }),

/***/ "tewB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dBtz"))(238);

/***/ })

}]);
//# sourceMappingURL=7.17e7a1c31448ecd0c8a5.js.map