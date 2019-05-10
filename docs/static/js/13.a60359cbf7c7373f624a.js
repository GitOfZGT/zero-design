(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "0cU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_ZeditSimpleFormHOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4QcI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZeditSimpleFormHOC_doc_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XBpp");
/* harmony import */ var zerod_components_ZeditSimpleFormHOC_doc_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZeditSimpleFormHOC_doc_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pageConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Q7Bs");



var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].AmdDocHOC,
    AshowDemoHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].AshowDemoHOC;


/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZeditSimpleFormHOC_doc_md__WEBPACK_IMPORTED_MODULE_3___default.a, {
  demo1: function demo1() {
    var Com = Object(zerod_components_ZeditSimpleFormHOC__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_pageConfig__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])("add"));

    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Com, null), true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyScript, null);
  },
  demo2: function demo2() {
    var Com = Object(zerod_components_ZeditSimpleFormHOC__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_pageConfig__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])("update"));

    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Com, {
      detailId: 1
    }), true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyScript, null);
  }
}));

/***/ }),

/***/ "Revr":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./area.api.js": "eAri",
	"./config.api.js": "5WI2",
	"./login.api.js": "O3gd",
	"./scheduling.api.js": "Lwzs"
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
webpackContext.id = "Revr";

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "XBpp":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zeditsimpleformhoc\">编辑页面：ZeditSimpleFormHOC</h1>\n<p><code>ZeditSimpleFormHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个表单编辑结构的组件</p>\n<p>1、新增表单</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"新增表单\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Input, InputNumber, Button } from &quot;antd&quot;;\nimport { ZeditSimpleFormHOC, zTool } from &quot;zerod&quot;;\nimport defaultConfigData from &quot;@/mock/serviceDefaultConfigData.js&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\nconst pageCofig = {\n    pageHeader: {\n        show: true,\n        ...pageHeader,\n        breadcrumbRoutes: [],\n    },\n    form: {\n        type: &quot;add&quot;,\n        panelHeader: &quot;新增服务信息&quot;,\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务说明&quot;,\n                span: 24,\n                render: (form) =&gt; {\n                    return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;servicePort&quot;,\n                detailKey: &quot;serviceProt&quot;,\n                label: &quot;端口号&quot;,\n                render: (form) =&gt; {\n                    return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;quick&quot;,\n                label: &quot;快捷操作&quot;,\n                render: (form) =&gt; {\n                    return (\n                        &lt;Button\n                            onClick={() =&gt; {\n                                form.setFieldsValue({\n                                    confProperty: defaultConfigData.default,\n                                });\n                            }}\n                        &gt;\n                            模板配置\n                        &lt;/Button&gt;\n                    );\n                },\n            },\n            {\n                key: &quot;confProperty&quot;,\n                label: &quot;默认配置&quot;,\n                span: 24,\n                render: (form) =&gt; {\n                    return (\n                        &lt;Input.TextArea\n                            rows={15}\n                            placeholder=&quot;请输入默认配置&quot;\n                            ref={(el) =&gt; {\n                                zTool.scrollDisableWheel(el.textAreaRef);\n                            }}\n                        /&gt;\n                    );\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n        ],\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n        submitApiInterface: (values, props) =&gt; {\n            return api.config.addService(Object.assign({}, values, { environment: &quot;default&quot; }));\n        },\n    },\n        moreContentRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-top-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;moreContentRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelBeforeRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;panelBeforeRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelAfterRender: function() {\n            // MoreContent 的代码请查看 ZerodMainContext 的 getScrollAreaWrapperEl 中例子的代码\n            return &lt;MoreContent /&gt;;\n        },\n};\nexport default ZeditSimpleFormHOC(pageConfig);</code></pre>\n<p>2、修改表单</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title='form.type=\"update\"时为修改表单,这时才会调用form.detailApiInterface钩子，使用moreContentRender函数在页面末端追加更多内容'></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Input, InputNumber, Button } from &quot;antd&quot;;\nimport { ZeditSimpleFormHOC, zTool } from &quot;zerod&quot;;\nimport defaultConfigData from &quot;@/mock/serviceDefaultConfigData.js&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\nconst pageCofig = {\n    pageHeader: {\n        show: true,\n        ...pageHeader,\n        breadcrumbRoutes: [],\n    },\n    form: {\n        type: &quot;update&quot;,\n        panelHeader: &quot;修改服务信息&quot;,\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务说明&quot;,\n                span: 24,\n                render: (form) =&gt; {\n                    return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;servicePort&quot;,\n                detailKey: &quot;serviceProt&quot;,\n                label: &quot;端口号&quot;,\n                render: (form) =&gt; {\n                    return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n        ],\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n        submitApiInterface: (values, props) =&gt; {\n            return api.config.updateService(Object.assign({}, values, { serviceId: props.detailId }));\n        },\n    },\n        moreContentRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-top-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;moreContentRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelBeforeRender: function() {\n            return (\n                &lt;div className=&quot;z-panel z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;panelBeforeRender&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelAfterRender: function() {\n            // MoreContent 的代码请查看 ZerodMainContext 的 getScrollAreaWrapperEl 中例子的代码\n            return &lt;MoreContent /&gt;;\n        },\n};\nexport default ZeditSimpleFormHOC(pageConfig);</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig\">pageConfig</h2>\n<p>除了如下的属性，pageConfig还包含 <span class=\"z-history-href\" data-path=\"/main/HOC-doc/ZpageWraperHOC-doc\">HOC/页面头尾结构：ZpageWrapper</span> 的props</p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>form</td>\n            <td>表单配置，请看下面的pageConfig.form</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> moreContentRender</td>\n            <td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>\n            <td>(detail,tool) =>{return;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelBeforeRender</td>\n            <td>列表面板上面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelAfterRender</td>\n            <td>列表面板下面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig-form\">pageConfig.form</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>type</td>\n            <td>表单类型：新增操作 | 修改操作</td>\n            <td>add | update</td>\n            <td>mainRoute</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelHeader</td>\n            <td>列表面板的头部内容,为null则不显示面板头部</td>\n            <td>string | function(tool){return ;}</td>\n            <td>列表</td>\n        </tr>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，结构：同 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zform-doc\">组件/Zform</span> 的items结构,render函数参数在这里多加tool,如：items:[{render:(form,changeFormItems,tool)=>{}}]</td>\n            <td>array[object] | null</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>同 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zform-doc\">组件/Zform</span> 的defaultSpan属性</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>submitBtnName</td>\n            <td>同 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zform-doc\">组件/Zform</span> 的submitBtnName属性</td>\n            <td>string</td>\n            <td>保存</td>\n        </tr>\n        <tr>\n            <td>submitMsg</td>\n            <td>同 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zform-doc\">组件/Zform</span> 的submitMsg属性</td>\n            <td>string</td>\n            <td>点击确定按钮提交数据</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> submitBtnRender</td>\n            <td>同 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zform-doc\">组件/Zform</span> 的submitBtnRender属性</td>\n            <td>funtion(onSubmit,props,tool){return ReactNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>detailApiInterface</td>\n            <td>获取详细数据的后台接口函数,必须返回Promise,只有form.type=\"update\"才自动调用,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。then((re)=>{})的回调中re结构须：{ data:{} }</td>\n            <td>(detailId, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>submitApiInterface</td>\n            <td>保存数据的后台接口函数,即保存按钮点击触发的函数,必须返回Promise,参数有：values:表单的值，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性</td>\n            <td>(values, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showSubmitBtn</td>\n            <td>是否显示提交按钮</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>afterSubmitSuccess</td>\n            <td>保存数据成功的回调 values：表单的值</td>\n            <td>(value, tool) =>{}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>exportSomething</td>\n            <td>是一个获取tool的钩子，相当于组件的componentDidMount</td>\n            <td>function(tool){ myTool=tool }</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"tool-\">tool 参数</h2>\n<p>pageConfig 中的一些函数如<code>moreContentRender</code>提供了<code>tool</code>参数出来，有如下内容：</p>\n<p><code>tool</code>对象不但包含<code>ZerodMainContext</code>提供的东西（请 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：</p>\n<h3 id=\"tool-getforminstance\">tool.getFormInstance</h3>\n<p>是一个函数，可以 const myform=tool.getFormInstance()取得 antd 中经 Form.create() 包装过的组件自带的 this.props.form 属性 ；<a href=\"https://ant.design/components/form-cn/\" target=\"_blank\"> 更多请查看 antd 的 Form</a></p>\n<h3 id=\"tool-methods\">tool.methods</h3>\n<p>tool.methods 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>方法</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLoading</td>\n            <td>用于 显示/取消 当前页的loading的方法，必需参数show：true|false</td>\n            <td>tool.methods.showLoading(true)</td>\n        </tr>\n        <tr>\n            <td>getFormDetailData</td>\n            <td>会触发pageConfig.form.detailApiInterface函数</td>\n            <td>tool.methods.getFormDetailData()</td>\n        </tr>\n        <tr>\n            <td>openModal</td>\n            <td>根据当前位置打开下一级rightModal</td>\n            <td>tool.methods.openModal(content)</td>\n        </tr>\n        <tr>\n            <td>closeCurrentModal</td>\n            <td>关闭当前的rightModal</td>\n            <td>tool.methods.closeCurrentModal()</td>\n        </tr>\n        <tr>\n            <td>onSubmit</td>\n            <td>ZeditSimpleFormHOC的submit方法，需参数values:表单的所有值的map对象，tool.submit(values)会触发submitApiInterface，异步回调后会触发afterSuccess</td>\n            <td>tool.methods.onSubmit(values)</td>\n        </tr>\n        <tr>\n            <td>notice</td>\n            <td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>\n            <td>tool.methods.notice.success(\"操作成功\" [,config])</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h3 id=\"tool-router\">tool.$router</h3>\n<p>tool.$router 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>属性</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>history</td>\n            <td>可以调用push、replace等跳转路由path得方法，<a href=\"https://reacttraining.com/react-router/web/api/history\" target=\"_blank\"> 更多请查看react-router的history</a></td>\n            <td>tool.$router.history.push(\"/login\")</td>\n        </tr>\n        <tr>\n            <td>location</td>\n            <td>当前路由的相关信息,<a href=\"https://reacttraining.com/react-router/web/api/location\" target=\"_blank\"> 更多请查看react-router的location</a></td>\n            <td>tool.$router.location.pathname</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ })

}]);
//# sourceMappingURL=13.a60359cbf7c7373f624a.js.map