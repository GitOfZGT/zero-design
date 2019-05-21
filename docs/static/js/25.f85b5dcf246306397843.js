(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "JNq4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9DAX");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MhH0");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FcZB");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ratc");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0j8+");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0kOG");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZfullLayer_doc_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zXgb");
/* harmony import */ var zerod_components_ZfullLayer_doc_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZfullLayer_doc_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var zerod_components_ZfullLayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Z3zS");
/* harmony import */ var zerod_components_ZerodLayerContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Y3vA");








var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].AmdDocHOC,
    AshowDemoHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].AshowDemoHOC;




var Contents =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Contents, _React$PureComponent);

  function Contents() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Contents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Contents)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.openRightModal = function () {
      _this.props.showLayerRightModal({
        show: true,
        modal: "abc",
        content: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "z-panel"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "z-panel-body"
        }, "\u5185\u5BB9")),
        width: "300px",
        mask: true,
        onTransitionend: function onTransitionend() {
          _this.props.showLayerModalLoading(true, "abc");

          setTimeout(function () {
            _this.props.showLayerModalLoading(false, "abc");
          }, 2000);
        }
      });
    };

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Contents, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "z-panel",
        style: {
          width: "90%",
          margin: "0 auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "z-panel-heading"
      }, "\u9762\u677F\u6807\u9898"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "z-panel-body"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        type: "primary",
        onClick: this.openRightModal
      }, "\u6253\u5F00RightModal")));
    }
  }]);

  return Contents;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

Contents = zerod_components_ZerodLayerContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].setConsumer(Contents);

var Header =
/*#__PURE__*/
function (_React$PureComponent2) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Header, _React$PureComponent2);

  function Header() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Header);

    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Header).apply(this, arguments));
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "z-padding-left-20 z-flex-items-center",
        style: {
          height: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        type: "primary"
      }, "\u6309\u94AE")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZfullLayer_doc_md__WEBPACK_IMPORTED_MODULE_8___default.a, {
  demo1: function demo1() {
    var Dom = AshowDemoHOC({
      windowType: "layer",
      header: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Header, null),
      content: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Contents, null)
    }, false);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Dom, null);
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

/***/ }),

/***/ "zXgb":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zfulllayer\">浮层窗口：ZfullLayer</h1>\n<p><code>ZfullLayer</code> 是一个背景黑色半透的覆盖在整个文档之上的窗口组件，分 header 和 children 两个内容区域</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { Button } from &quot;antd&quot;;\nimport ZfullLayer from &quot;zerod/components/ZfullLayer&quot;;\nimport ZerodLayerContext from &quot;zerod/components/ZerodLayerContext&quot;;\nclass Contents extends React.PureComponent {\n    openRightModal = () =&gt; {\n        //打开RightModal\n        this.props.showLayerRightModal({\n            show: true,\n            modal: &quot;abc&quot;,\n            content: (\n                &lt;div className=&quot;z-panel&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;内容&lt;/div&gt;\n                &lt;/div&gt;\n            ),\n            width: &quot;300px&quot;,\n            mask: false,\n            onTransitionend: () =&gt; {\n                //显示/隐藏modal的loading\n                this.props.showLayerModalLoading(true, &quot;abc&quot;);\n                setTimeout(() =&gt; {\n                    this.props.showLayerModalLoading(false, &quot;abc&quot;);\n                }, 2000);\n            },\n        });\n    };\n    render() {\n        return (\n            &lt;div className=&quot;z-panel&quot; style={{ width: &quot;90%&quot;, margin: &quot;0 auto&quot; }}&gt;\n                &lt;div className=&quot;z-panel-heading&quot;&gt;面板标题&lt;/div&gt;\n                &lt;div className=&quot;z-panel-body&quot;&gt;\n                    &lt;Button type=&quot;primary&quot; onClick={this.openRightModal}&gt;\n                        打开RightModal\n                    &lt;/Button&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nContents = ZerodLayerContext.setConsumer(Contents);\n\nclass Header extends React.PureComponent {\n    render() {\n        return (\n            &lt;div className=&quot;z-padding-left-20 z-flex-items-center&quot; style={{ height: &quot;100%&quot; }}&gt;\n                &lt;div&gt;\n                    &lt;Button type=&quot;primary&quot;&gt;按钮&lt;/Button&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nclass Myjavascript extends React.PureComponent {\n    methods = {\n        open: () =&gt; {\n            const amplify = this.ZfullLayerMethods.showLayer(\n                true,\n                () =&gt; {\n                    console.log(&quot;open&quot;);\n                },\n                true, //是否先缩放\n            );\n            //再放大效果\n            amplify();\n        },\n    };\n    exportMethods = (m) =&gt; {\n        this.ZfullLayerMethods = m;\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;div className=&quot;z-panel&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;\n                        &lt;Button type=&quot;primary&quot; onClick={this.methods.open}&gt;\n                            打开ZfullLayer\n                        &lt;/Button&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n                &lt;ZfullLayer header={&lt;Header /&gt;} exportMethods={this.exportMethods}&gt;\n                    &lt;Contents /&gt;\n                &lt;/ZfullLayer&gt;\n            &lt;/div&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zfulllayer-props\">ZfullLayer 的 props</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>header</td>\n<td>头部区域内容，高度有 64px</td>\n<td>ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>children</td>\n<td>主体区域内容</td>\n<td>ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>exportMethods</td>\n<td>在 componentDidMount 导出组件内部可调用的方法，methods 请往下看</td>\n<td>function(methods){}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>scroll</td>\n<td>主体区域内容是否需要滚动条</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>type</td>\n<td>主题</td>\n<td>normal | dark</td>\n<td>dark</td>\n</tr>\n</tbody></table>\n<p>注： header 和 children 两个内容区域通信，请使用 <code>React.createRef()</code></p>\n<p>一般场景只允许同时打开一个<code>ZfullLayer</code></p>\n<h2 id=\"methods-zerodlayercontext-methods-showlayer-true-null-true-\">methods 同 ZerodLayerContext 提供的内容如： methods.showLayer(true,null,true)();</h2>\n<p><code>ZfullLayer</code>内部子孙组件经过<code>import ZerodLayerContext from &quot;zerod/components/ZerodLayerContext&quot;</code>的 <code>ZerodLayerContext.setConsumer(子孙组件)</code>包装后，<code>props</code>提供如下内容：</p>\n<table>\n<thead>\n<tr>\n<th>方法</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值类型</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>showLayer</td>\n<td>显示/隐藏 ZfullLayer 的方法,当 isScale 为 true 时返回一个函数，调用这个函数主体内容会有一个放大的过渡动画</td>\n<td>showLayer(show,callback,isScale)</td>\n<td>--</td>\n</tr>\n<tr>\n<td>showLoading</td>\n<td>显示/隐藏 ZfullLayer 内部的 loading</td>\n<td>showLoading(show)</td>\n<td>--</td>\n</tr>\n<tr>\n<td>showLayerRightModal</td>\n<td>在 ZfullLayer 中打开有抽屉窗口，参数同 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">上下文/ZerodMainContent 的 showRightModal</span></td>\n<td>showLayerRightModal({})</td>\n<td>--</td>\n</tr>\n<tr>\n<td>showLayerModalLoading</td>\n<td>在 ZfullLayer 中显示对应窗口的 loading，同 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">上下文/ZerodMainContent 的 showModalLoading</span></td>\n<td>showLayerModalLoading(show,modal)</td>\n<td>--</td>\n</tr>\n<tr>\n<td>getLayerModalScrollInstance</td>\n<td>在 ZfullLayer 中获取对应窗口的滚动条的实例，同 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">上下文/ZerodMainContent 的 getScrollInstance</span></td>\n<td>getLayerModalScrollInstance(modal)</td>\n<td>object</td>\n</tr>\n<tr>\n<td>getLayerScrollAreaWrapperEl</td>\n<td>在 ZfullLayer 中获取对应窗口的滚动条区域的包裹元素，同 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">上下文/ZerodMainContent 的 getScrollAreaWrapperEl</span></td>\n<td>getLayerScrollAreaWrapperEl(modal)</td>\n<td>Elment</td>\n</tr>\n</tbody></table>\n";

/***/ })

}]);
//# sourceMappingURL=25.f85b5dcf246306397843.js.map