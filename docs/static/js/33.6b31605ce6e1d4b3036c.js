(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "auj8":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zrightmodal\">右抽屉窗口：ZrightModal</h1>\n<p><code>ZrightModal</code>是从右边弹出的一种窗口模式，可以减少多层路由跳转的一种交互方式</p>\n<p>如果是使用<code>ZmainHOC</code>实现了主页布局，基本上不再需要单独使用<code>ZrightModal</code>，请查看 上下文的<code>ZerodMainContext</code></p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"以下是截取了`ZmainHOC `中使用`Zlayout.Zbody + ZrightModal`的部分代码展示\"></div>\n\n<pre><code class=\"language-jsx\">&lt;Zlayout.Zbody\n    className={`${cssClass[&quot;z-main-body&quot;]} z-scroll-color app-body`}\n    scroll\n    getScrollInstance={(instance) =&gt; (this.mainBodyScrollInstance = instance)}\n    insertToScrollWraper={\n        &lt;Zlayout.Template&gt;\n            &lt;ZpageLoading showLoading={this.state.isShowLoading} /&gt;\n            &lt;ZrightModal\n                show={this.state.isShowRightModal} //打开modal的状态\n                scroll //启用滚动条\n                getScrollInstance={(instance) =&gt; (this.rightBodyScrollInstance = instance)} //获取滚动条实例\n                showLoading={this.state.isShowModalLoading} //显示loading的状态\n                onClose={() =&gt; {\n                    this.methods.showRightModal(false); //关闭modal\n                }}\n                onTransitionend={this.methods.afterModalTransitionend} //modal过渡动画执行完之后\n            &gt;\n                {this.state.rightModalContent}\n            &lt;/ZrightModal&gt;\n        &lt;/Zlayout.Template&gt;\n    }\n&gt;\n    &lt;section&gt;\n        &lt;Switch&gt;{this.navRoutes}&lt;/Switch&gt;\n    &lt;/section&gt;\n&lt;/Zlayout.Zbody&gt;</code></pre>\n<h2 id=\"zrightmodal-props\">ZrightModal 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>show</td>\n            <td>是否打开ZrightModal</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>窗口宽度</td>\n            <td>string</td>\n            <td>90%</td>\n        </tr>\n        <tr>\n            <td>zIndex</td>\n            <td>层级</td>\n            <td>number</td>\n            <td>999</td>\n        </tr>\n        <tr>\n            <td>onClose</td>\n            <td>点击关闭按钮的事件，()=>{}</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showLoading</td>\n            <td>是否显示loading , 可以不使用这个属性，通过 ref 取得 ZpageLoading 的实例调用 methods.showLoading(show) ,也可以用 exportMethods 导出的参数调用</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>scroll</td>\n            <td>是否启用滚动条</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getScrollInstance</td>\n            <td>获取滚动条的实例，scroll=true时有效</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onTransitionend</td>\n            <td>当打开或关闭ZrightModal的过渡动画完成后执行的钩子</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>exportMethods</td>\n            <td>在 componentDidMount 导出组件内部可调用的方法，methods 请往下看  </td>\n            <td>function(methods){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id=\"zrightmodal-methods\">ZrightModal 的 methods</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值类型</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>showLoading</td>\n<td>ZpageLoading 在没有 showLoading 属性情况下使用</td>\n<td>methods.showLoading(show)</td>\n<td>--</td>\n</tr>\n</tbody></table>\n";

/***/ }),

/***/ "bBUQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZrightModal_doc_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("auj8");
/* harmony import */ var zerod_components_ZrightModal_doc_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZrightModal_doc_md__WEBPACK_IMPORTED_MODULE_2__);


var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].AmdDocHOC,
    AshowDemoHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].AshowDemoHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZrightModal_doc_md__WEBPACK_IMPORTED_MODULE_2___default.a, {
  demo1: function demo1() {
    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "z-padding-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "z-panel"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "z-panel-body z-text-center"
    }, "\u6211\u5C31\u662F\u8FD9\u4E2A\u7A97\u53E3"))), false);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyScript, null);
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

/***/ })

}]);
//# sourceMappingURL=33.6b31605ce6e1d4b3036c.js.map