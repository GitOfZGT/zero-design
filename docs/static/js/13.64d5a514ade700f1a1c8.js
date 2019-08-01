(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "lzuH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZdetailSimpleBaseHOC_doc_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vjXJ");
/* harmony import */ var zerod_components_ZdetailSimpleBaseHOC_doc_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZdetailSimpleBaseHOC_doc_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_Main_HOC_doc_ZsearchListHOC_doc_demos_getDetailPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LQqe");


var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].AmdDocHOC,
    AshowDemoHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].AshowDemoHOC;


/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZdetailSimpleBaseHOC_doc_md__WEBPACK_IMPORTED_MODULE_2___default.a, {
  demo1: function demo1() {
    var Com = Object(_views_Main_HOC_doc_ZsearchListHOC_doc_demos_getDetailPage_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
      insertLocation: "mainModal",
      headerTitle: "详情页",
      headerContent: "页面描述",
      panelAfterRender: function panelAfterRender() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "z-panel z-margin-top-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "z-panel-body"
        }, "panelAfterRender"));
      }
    });
    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Com, {
      detailId: 1
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyScript, null);
  }
}));

/***/ }),

/***/ "vjXJ":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zdetailsimplebasehoc\">详情页面：ZdetailSimpleBaseHOC</h1>\n<p><code>ZdetailSimpleBaseHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个展示详细内容结构的组件</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">let defaultConfig = {\n    pageHeader: {\n        show: true,\n        // any\n        title: &quot;详情页&quot;,\n        //any\n        content: &quot;描述&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边&lt;/div&gt;,\n    },\n    detail: {\n        panelHeader: &quot;基础信息&quot;,\n        items: [\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n            },\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n            },\n            {\n                key: &quot;serviceProt&quot;,\n                label: &quot;约定端口号&quot;,\n                render: (value, record) =&gt; {\n                    return &lt;span className=&quot;z-text-red&quot;&gt;{value}&lt;/span&gt;;\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务描述&quot;,\n                span: { lg: 12 },\n                render: (value, record) =&gt; {\n                    return value;\n                },\n            },\n        ],\n        // 用于修改每个item的结构的钩子，(item,data)=&gt;{return &lt;div&gt;{`${item.label}:${data[item.key]}`}&lt;/div&gt;}\n        itemsRender: null,\n        // 获取详情数据的后台接口函数，必须返回 Promise\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n    },\n    // 更多渲染内容\n    moreContentRender: function(detail, panel) {\n        return (\n            &lt;div className=&quot;z-panel z-margin-top-20&quot;&gt;\n                &lt;div className=&quot;z-panel-body&quot;&gt;更多内容&lt;/div&gt;\n            &lt;/div&gt;\n        );\n    },\n};</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig\">pageConfig</h2>\n<p>除了如下的属性，pageConfig还包含 <span class=\"z-history-href\" data-path=\"/main/HOC-doc/ZpageWraperHOC-doc\">HOC/页面头尾结构：ZpageWrapper</span> 的props</p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>detail</td>\n            <td>表单配置，请看下面的pageConfig.detail</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> moreContentRender</td>\n            <td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>\n            <td>(detail,tool) =>{return;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelBeforeRender</td>\n            <td>列表面板上面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelAfterRender</td>\n            <td>列表面板下面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n            <tr>\n            <td>exportSomething</td>\n            <td>是一个获取tool的钩子，相当于组件的componentDidMount</td>\n            <td>function(tool){ myTool=tool }</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig-detail\">pageConfig.detail</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>panelHeader</td>\n            <td>列表面板的头部内容,为null则不显示面板头部</td>\n            <td>string | function(tool){return ;}</td>\n            <td>列表</td>\n        </tr>\n        <tr>\n            <td>items</td>\n            <td>同 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zinfo-doc\">组件/Zinfo</span> 的items属性</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>同 <span class=\"z-history-href\" data-path=\"/main/component-doc/Zinfo-doc\">组件/Zinfo</span> 的defaultSpan属性</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>detailApiInterface</td>\n            <td>获取详细数据的后台接口函数,必须返回Promise,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。then((re)=>{})的回调中re结构须：{ data:{} }</td>\n            <td>(detailId, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"tool-\">tool 参数</h2>\n<p>pageConfig 中的一些函数如<code>moreContentRender</code>提供了<code>tool</code>参数出来，有如下内容：</p>\n<p><code>tool</code>对象不但包含<code>ZerodMainContext</code>提供的东西（请查看 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：</p>\n<h3 id=\"tool-methods\">tool.methods</h3>\n<p>tool.methods 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>方法</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLoading</td>\n            <td>用于 显示/取消 当前页的loading的方法，必需参数show：true|false</td>\n            <td>tool.methods.showLoading(true)</td>\n        </tr>\n        <tr>\n            <td>getDetailData</td>\n            <td>会触发pageConfig.detail.detailApiInterface函数</td>\n            <td>tool.methods.getDetailData()</td>\n        </tr>\n        <tr>\n            <td>openModal</td>\n            <td>根据当前位置打开下一级rightModal</td>\n            <td>tool.methods.openModal(content)</td>\n        </tr>\n        <tr>\n            <td>closeCurrentModal</td>\n            <td>关闭当前的rightModal</td>\n            <td>tool.methods.closeCurrentModal()</td>\n        </tr>\n        <tr>\n            <td>notice</td>\n            <td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>\n            <td>tool.methods.notice.success(\"操作成功\" [,config])</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h3 id=\"tool-router\">tool.$router</h3>\n<p>tool.$router是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>属性</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>history</td>\n            <td>可以调用push、replace等跳转路由path得方法，<a href=\"https://reacttraining.com/react-router/web/api/history\" target=\"_blank\"> 更多请查看react-router的history</a></td>\n            <td>tool.$router.history.push(\"/login\")</td>\n        </tr>\n        <tr>\n            <td>location</td>\n            <td>当前路由的相关信息,<a href=\"https://reacttraining.com/react-router/web/api/location\" target=\"_blank\"> 更多请查看react-router的location</a></td>\n            <td>tool.$router.location.pathname</td>\n        </tr>\n    </tbody>\n</table>";

/***/ })

}]);
//# sourceMappingURL=13.64d5a514ade700f1a1c8.js.map