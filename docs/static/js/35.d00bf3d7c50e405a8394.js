(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "UwU9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zerod_components_ZsideMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AfJP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZsideMenu_doc_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dnVX");
/* harmony import */ var zerod_components_ZsideMenu_doc_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZsideMenu_doc_md__WEBPACK_IMPORTED_MODULE_3__);



var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].AmdDocHOC,
    AshowDemoHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].AshowDemoHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZsideMenu_doc_md__WEBPACK_IMPORTED_MODULE_3___default.a, {
  demo1: function demo1() {
    var menus = [{
      path: "start-doc",
      name: "开始"
    }, {
      path: "mobile-doc",
      name: "移动端开发"
    }, {
      path: "HOC-doc",
      name: "HOC",
      children: [{
        path: "ZappHOC-doc",
        name: "根组件 : ZappHOC"
      }, {
        path: "ZmainHOC-doc",
        name: "主页布局 : ZmainHOC"
      }, {
        path: "ZpageWraperHOC-doc",
        name: "页面头尾结构 : ZpageWraperHOC"
      }, {
        path: "ZsearchListHOC-doc",
        name: "查询列表 : ZsearchListHOC"
      }, {
        path: "ZeditSimpleFormHOC-doc",
        name: "编辑页面 : ZeditSimpleFormHOC"
      }, {
        path: "ZdetailSimpleBaseHOC-doc",
        name: "详情页面 : ZdetailSimpleBaseHOC"
      }]
    }, {
      path: "component-doc",
      name: "组件",
      children: [{
        path: "ZcodeHighlight-doc",
        name: "代码高亮 : ZcodeHighlight"
      }, {
        path: "Zlayout-doc",
        name: "布局组件 : Zlayout"
      }, {
        path: "ZrightModal-doc",
        name: "右边窗口 : ZrightModal"
      }, {
        path: "ZpageHeader-doc",
        name: "页头 : ZpageHeader"
      }, {
        path: "ZpageFooter-doc",
        name: "页尾 : ZpageFooter"
      }, {
        path: "ZpageLoading-doc",
        name: "页loading : ZpageLoading"
      }, {
        path: "ZsideMenu-doc",
        name: "侧边导航 : ZsideMenu"
      }, {
        path: "Zform-doc",
        name: "普通表单 : Zform"
      }, {
        path: "ZsearchForm-doc",
        name: "查询表单 : ZsearchForm"
      }, {
        path: "Ztabs-doc",
        name: "标签页 : Ztabs"
      }]
    }, {
      path: "zTool-doc",
      name: "工具函数"
    }, {
      path: "css",
      name: "通用样式"
    }];
    var MyScript = AshowDemoHOC(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "z-padding-20"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "z-panel"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "z-panel-body"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: "300px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(zerod_components_ZsideMenu__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"], {
      menuData: menus,
      theme: "dark"
    }))))), true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyScript, null);
  }
}));

/***/ }),

/***/ "dnVX":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zsidemenu\">左侧菜单组件：ZsideMenu</h1>\n<p><code>ZsideMenu</code> 将<code>antd</code>的 <code>Menu</code>、<code>Menu.Item</code>、<code>Menu.SubMenu</code>转成数据结构直接渲染的方式</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZsideMenu } from &quot;zerod&quot;;\nconst menus = [\n    {\n        path: &quot;/start-doc&quot;,\n        name: &quot;开始&quot;,\n        // iconClass: &quot;&quot;,\n    },\n    {\n        path: &quot;/component-doc&quot;,\n        name: &quot;组件&quot;,\n        children: [\n            {\n                path: &quot;/ZcodeHighlight-doc&quot;,\n                name: &quot;代码高亮 : ZcodeHighlight&quot;,\n                iconClass: &quot;&quot;,\n            },\n        ],\n    },\n    {\n        path: &quot;/config&quot;,\n        name: &quot;案例&quot;,\n        children: [\n            {\n                path: &quot;/serviceWithTableList&quot;,\n                name: &quot;表格列表&quot;,\n                iconClass: &quot;&quot;,\n            },\n        ],\n    },\n];\n&lt;ZsideMenu menuData={menus} /&gt;;</code></pre>\n<h3 id=\"zsidemenu-props\">ZsideMenu Props</h3>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>menuData</td>\n            <td>菜单数据，每个对象的属性有iconClass：小图标、name、path：路由地址必须以\"/\"或\"http\"开头的、newWindow:是否打开新的浏览器标签页、若有子菜单，则还有children属性。iconClass默认支持antd的Icon组件的type,还支持函数return自定义图标, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array[object]</td>\n            <td>-</td>\n        </tr>\n        <tr>\n            <td>collapsed</td>\n            <td>是否折叠菜单</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>theme</td>\n            <td>菜单的主题 'light' | 'dark'</td>\n            <td>string</td>\n            <td>light</td>\n        </tr>\n        <tr>\n            <td>openAllSubmenu</td>\n            <td>是否展开所有二级菜单</td>\n            <td>string</td>\n            <td>light</td>\n        </tr>\n        <tr>\n            <td>onSelect</td>\n            <td>点击选中菜单项触发的函数，如果函数内return false 则不会跳转menuData中对应项的path路径</td>\n            <td>function({ item, key, selectedKeys }){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onOpenChange</td>\n            <td>展开/折叠二级菜单触发的函数，并且是展开/折叠过渡动画完了才触发</td>\n            <td>function(keys){}</td>\n            <td>--</td>\n        </tr>\n        <!-- <tr>\n            <td>iconTheme</td>\n            <td>同antd的Icon组件的theme属性，</td>\n            <td>'filled' | 'outlined' | 'twoTone'</td>\n            <td>outlined</td>\n        </tr> -->\n    </tbody>\n</table>\n";

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
//# sourceMappingURL=35.d00bf3d7c50e405a8394.js.map