(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "1WjU":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zlayout\">布局组件：Zlayout</h1>\n<p><code>Zlayout</code>布局组件它包含<code>Zheader</code>、<code>Zbody</code>、<code>Zfooter</code>、<code>ZheaderBtn</code>、<code>Template</code>这几个子组件</p>\n<p>滚动条在<code>Zlayout.Zbody</code></p>\n<h2 id=\"zlayout-\">Zlayout 横向布局</h2>\n<p><code>Zlayout</code>可以嵌套<code>Zlayout</code>，横向 flex 布局需<code>flexRow</code>属性</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"横向布局\"></div>\n\n<pre><code class=\"language-jsx\">/*Zlayout默认height=&quot;100%&quot;*/\n&lt;Zlayout flexRow&gt;\n    &lt;Zlayout width={200} style={{ background: &quot;#CBC9C9&quot; }} /&gt;\n    &lt;Zlayout style={{ background: &quot;#EAE8E8&quot; }} /&gt;\n    &lt;Zlayout width={200} style={{ background: &quot;#D1D1D1&quot; }} /&gt;\n&lt;/Zlayout&gt;</code></pre>\n<h2 id=\"zlayout-\">Zlayout 纵向布局</h2>\n<p><code>Zlayout</code>纵向布局需嵌套<code>Zlayout.Zheader</code>、<code>Zlayout.Zbody</code>、<code>Zlayout.Zfooter</code>配合使用</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"纵向布局\"></div>\n\n<pre><code class=\"language-jsx\">/*Zlayout默认height=&quot;100%&quot;*/\n&lt;Zlayout flexRow&gt;\n    &lt;Zlayout width={200}&gt;\n        &lt;Zlayout.Zheader height=&quot;64&quot; style={{ background: &quot;#EAEAEA&quot; }}&gt;\n            上\n        &lt;/Zlayout.Zheader&gt;\n        &lt;Zlayout.Zbody style={{ background: &quot;#CBCBCB&quot; }}&gt;中&lt;/Zlayout.Zbody&gt;\n        &lt;Zlayout.Zfooter height=&quot;50&quot; style={{ background: &quot;#C6C6C6&quot; }}&gt;\n            下\n        &lt;/Zlayout.Zfooter&gt;\n    &lt;/Zlayout&gt;\n    &lt;Zlayout&gt;\n        &lt;Zlayout.Zheader height=&quot;64&quot; style={{ background: &quot;#E8E0E0&quot; }}&gt;\n            上\n        &lt;/Zlayout.Zheader&gt;\n        &lt;Zlayout.Zbody style={{ background: &quot;#DBD1D1&quot; }}&gt;中&lt;/Zlayout.Zbody&gt;\n        &lt;Zlayout.Zfooter height=&quot;50&quot; style={{ background: &quot;#CEBFBF&quot; }}&gt;\n            下\n        &lt;/Zlayout.Zfooter&gt;\n    &lt;/Zlayout&gt;\n&lt;/Zlayout&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-props\">Zlayout 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>flexRow</td>\n            <td>将Zlayout的子元素横向flex布局</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>flex</td>\n            <td>嵌套的Zlayout的flex占比</td>\n            <td>number</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>height</td>\n            <td>Zlayout的高度</td>\n            <td>string|number</td>\n            <td>\"100%\"</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>Zlayout的宽度</td>\n            <td>string|number</td>\n            <td>\"100%\"</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>Zlayout的className</td>\n            <td>string</td>\n            <td>-</td>\n        </tr>\n        <tr>\n            <td>onTransitionend</td>\n            <td>当Zlayout的width等样式改变所触发的过渡动画完成后执行的钩子</td>\n            <td>function</td>\n            <td>-</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zheader-props\">Zlayout.Zheader 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>height</td>\n            <td>高度</td>\n            <td>string|number</td>\n            <td>\"100%\"</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zbody-props\">Zlayout.Zbody 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>scroll</td>\n            <td>是否启用滚动条</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getScrollInstance</td>\n            <td>获取滚动条的实例，scroll=true时有效</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>insertToScrollWraper</td>\n            <td>插入到具有滚动条区域外的内容，不受滚动事件的影响</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getWrapperEl</td>\n            <td>获取最外层包裹元素,(el,metods)=>{}</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zfooter-props\">Zlayout.Zfooter 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>height</td>\n            <td>高度</td>\n            <td>string|number</td>\n            <td>\"100%\"</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zheaderbtn\">Zlayout.ZheaderBtn</h2>\n<p>可加<code>className</code>、<code>style</code>、<code>onClick</code></p>\n<p><code>Zlayout.ZheaderBtn</code>需在<code>Zlayout.Zheader</code>内部使用</p>\n<pre><code class=\"language-jsx\">&lt;Zlayout&gt;\n    {/*使用了z-flex-space-between通用样式类，flex的两端对齐*/}\n    &lt;Zlayout.Zheader height=&quot;64&quot; className=&quot;z-flex-space-between&quot;&gt;\n        {/*使用z-flex将Zlayout.ZheaderBtn的宽度自动化*/}\n        &lt;div className=&quot;z-flex&quot;&gt;\n            &lt;Zlayout.ZheaderBtn&gt;左边按钮1&lt;/Zlayout.ZheaderBtn&gt;\n            &lt;Zlayout.ZheaderBtn&gt;左边按钮2&lt;/Zlayout.ZheaderBtn&gt;\n        &lt;/div&gt;\n        &lt;div className=&quot;z-flex&quot;&gt;\n            &lt;Zlayout.ZheaderBtn&gt;右边按钮1&lt;/Zlayout.ZheaderBtn&gt;\n            &lt;Zlayout.ZheaderBtn&gt;右边按钮2&lt;/Zlayout.ZheaderBtn&gt;\n        &lt;/div&gt;\n    &lt;/Zlayout.Zheader&gt;\n    &lt;Zlayout.Zbody&gt;中&lt;/Zlayout.Zbody&gt;\n    &lt;Zlayout.Zfooter height=&quot;50&quot;&gt;下&lt;/Zlayout.Zfooter&gt;\n&lt;/Zlayout&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-template\">Zlayout.Template</h2>\n<p><code>react</code>组件的<code>render</code>函数必须要有一个根元素，有时我们不想要一个多余无任何实际作用的根元素，这时就可以使用<code>Zlayout.Template</code>来替代</p>\n<pre><code class=\"language-jsx\">class myCom extends ZpureComponent {\n    render() {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;h1&gt;1&lt;/h1&gt;\n                &lt;div&gt;2&lt;/div&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    }\n}</code></pre>\n";

/***/ }),

/***/ "EZMl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("C6MB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_Zlayout_doc_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1WjU");
/* harmony import */ var zerod_components_Zlayout_doc_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zerod_components_Zlayout_doc_md__WEBPACK_IMPORTED_MODULE_3__);



var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].AmdDocHOC,
    AshowDemoHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].AshowDemoHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_Zlayout_doc_md__WEBPACK_IMPORTED_MODULE_3___default.a, {
  demo1: function demo1() {
    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
      flexRow: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
      width: 200,
      style: {
        background: "#CBC9C9"
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
      style: {
        background: "#EAE8E8"
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
      width: 200,
      style: {
        background: "#D1D1D1"
      }
    })), false);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyScript, null);
  },
  demo2: function demo2() {
    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
      flexRow: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
      width: 200
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Zheader, {
      height: "64",
      style: {
        background: "#EAEAEA"
      }
    }, "\u4E0A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Zbody, {
      style: {
        background: "#CBCBCB"
      }
    }, "\u4E2D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Zfooter, {
      height: "50",
      style: {
        background: "#C6C6C6"
      }
    }, "\u4E0B")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Zheader, {
      height: "64",
      style: {
        background: "#E8E0E0"
      }
    }, "\u4E0A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Zbody, {
      style: {
        background: "#DBD1D1"
      }
    }, "\u4E2D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_Zlayout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Zfooter, {
      height: "50",
      style: {
        background: "#CEBFBF"
      }
    }, "\u4E0B"))), false);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyScript, null);
  }
}));

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

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
//# sourceMappingURL=27.47cbf68a05e27db1af0c.js.map