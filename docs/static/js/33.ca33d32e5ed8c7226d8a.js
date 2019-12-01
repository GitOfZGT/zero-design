(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "1WjU":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-08-21 10:59:31\n * @LastEditors: zgt\n * @LastEditTime: 2019-08-16 09:50:02\n * @Description: file content\n -->\n<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zlayout\">布局组件：Zlayout</h1>\n<p><code>Zlayout</code>布局组件它包含<code>Zheader</code>、<code>Zbody</code>、<code>Zfooter</code>、<code>ZheaderBtn</code>、<code>Template</code>这几个子组件</p>\n<p>滚动条在<code>Zlayout.Zbody</code></p>\n<h2 id=\"zlayout-\">Zlayout 横向布局</h2>\n<p><code>Zlayout</code>可以嵌套<code>Zlayout</code>，横向 flex 布局需<code>flexRow</code>属性</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"横向布局\"></div>\n\n<pre><code class=\"language-jsx\">/*Zlayout默认height=&quot;100%&quot;*/\n&lt;Zlayout flexRow&gt;\n    &lt;Zlayout width={200} style={{ background: &quot;#CBC9C9&quot; }} /&gt;\n    &lt;Zlayout style={{ background: &quot;#EAE8E8&quot; }} /&gt;\n    &lt;Zlayout width={200} style={{ background: &quot;#D1D1D1&quot; }} /&gt;\n&lt;/Zlayout&gt;</code></pre>\n<h2 id=\"zlayout-\">Zlayout 纵向布局</h2>\n<p><code>Zlayout</code>纵向布局需嵌套<code>Zlayout.Zheader</code>、<code>Zlayout.Zbody</code>、<code>Zlayout.Zfooter</code>配合使用</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"纵向布局\"></div>\n\n<pre><code class=\"language-jsx\">/*Zlayout默认height=&quot;100%&quot;*/\n&lt;Zlayout flexRow&gt;\n    &lt;Zlayout width={200}&gt;\n        &lt;Zlayout.Zheader height=&quot;64&quot; style={{ background: &quot;#EAEAEA&quot; }}&gt;\n            上\n        &lt;/Zlayout.Zheader&gt;\n        &lt;Zlayout.Zbody style={{ background: &quot;#CBCBCB&quot; }}&gt;中&lt;/Zlayout.Zbody&gt;\n        &lt;Zlayout.Zfooter height=&quot;50&quot; style={{ background: &quot;#C6C6C6&quot; }}&gt;\n            下\n        &lt;/Zlayout.Zfooter&gt;\n    &lt;/Zlayout&gt;\n    &lt;Zlayout&gt;\n        &lt;Zlayout.Zheader height=&quot;64&quot; style={{ background: &quot;#E8E0E0&quot; }}&gt;\n            上\n        &lt;/Zlayout.Zheader&gt;\n        &lt;Zlayout.Zbody style={{ background: &quot;#DBD1D1&quot; }}&gt;中&lt;/Zlayout.Zbody&gt;\n        &lt;Zlayout.Zfooter height=&quot;50&quot; style={{ background: &quot;#CEBFBF&quot; }}&gt;\n            下\n        &lt;/Zlayout.Zfooter&gt;\n    &lt;/Zlayout&gt;\n&lt;/Zlayout&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-props\">Zlayout 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>flexRow</td>\n            <td>将Zlayout的子元素横向flex布局</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>flex</td>\n            <td>嵌套的Zlayout的flex占比</td>\n            <td>number</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>height</td>\n            <td>Zlayout的高度</td>\n            <td>string|number</td>\n            <td>\"100%\"</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>Zlayout的宽度</td>\n            <td>string|number</td>\n            <td>\"100%\"</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>Zlayout的className</td>\n            <td>string</td>\n            <td>-</td>\n        </tr>\n        <tr>\n            <td>onTransitionend</td>\n            <td>当Zlayout的width等样式改变所触发的过渡动画完成后执行的钩子</td>\n            <td>function</td>\n            <td>-</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zheader-props\">Zlayout.Zheader 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>height</td>\n            <td>高度</td>\n            <td>string|number</td>\n            <td>\"64px\"</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zbody-props\">Zlayout.Zbody 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>scroll</td>\n            <td>是否启用滚动条</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getScrollInstance</td>\n            <td>获取滚动条的实例，scroll=true时有效</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>insertToScrollWraper</td>\n            <td>插入到具有滚动条区域外的内容，不受滚动事件的影响</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getWrapperEl</td>\n            <td>获取最外层包裹元素,(el,metods)=>{}</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>useCustomScroll</td>\n            <td>在chrome浏览器默认使用原生滚动条，在其他浏览器默认启用js自定义滚动条，如需chrome也启用js自定义滚动条，useCustomScroll为true即可</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zfooter-props\">Zlayout.Zfooter 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>height</td>\n            <td>高度</td>\n            <td>string|number</td>\n            <td>\"40px\"</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-zheaderbtn\">Zlayout.ZheaderBtn</h2>\n<p>可加<code>className</code>、<code>style</code>、<code>onClick</code></p>\n<p><code>Zlayout.ZheaderBtn</code>需在<code>Zlayout.Zheader</code>内部使用</p>\n<pre><code class=\"language-jsx\">&lt;Zlayout&gt;\n    {/*使用了z-flex-space-between通用样式类，flex的两端对齐*/}\n    &lt;Zlayout.Zheader height=&quot;64&quot; className=&quot;z-flex-space-between&quot;&gt;\n        {/*使用z-flex将Zlayout.ZheaderBtn的宽度自动化*/}\n        &lt;div className=&quot;z-flex&quot;&gt;\n            &lt;Zlayout.ZheaderBtn&gt;左边按钮1&lt;/Zlayout.ZheaderBtn&gt;\n            &lt;Zlayout.ZheaderBtn&gt;左边按钮2&lt;/Zlayout.ZheaderBtn&gt;\n        &lt;/div&gt;\n        &lt;div className=&quot;z-flex&quot;&gt;\n            &lt;Zlayout.ZheaderBtn&gt;右边按钮1&lt;/Zlayout.ZheaderBtn&gt;\n            &lt;Zlayout.ZheaderBtn&gt;右边按钮2&lt;/Zlayout.ZheaderBtn&gt;\n        &lt;/div&gt;\n    &lt;/Zlayout.Zheader&gt;\n    &lt;Zlayout.Zbody&gt;中&lt;/Zlayout.Zbody&gt;\n    &lt;Zlayout.Zfooter height=&quot;50&quot;&gt;下&lt;/Zlayout.Zfooter&gt;\n&lt;/Zlayout&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zlayout-template\">Zlayout.Template</h2>\n<p><code>react</code>组件的<code>render</code>函数必须要有一个根元素，有时我们不想要一个多余无任何实际作用的根元素，这时就可以使用<code>Zlayout.Template</code>来替代</p>\n<pre><code class=\"language-jsx\">class myCom extends ZpureComponent {\n    render() {\n        return (\n            &lt;Zlayout.Template&gt;\n                &lt;h1&gt;1&lt;/h1&gt;\n                &lt;div&gt;2&lt;/div&gt;\n            &lt;/Zlayout.Template&gt;\n        );\n    }\n}</code></pre>\n";

/***/ }),

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "EZMl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Zlayout2 = _interopRequireDefault(__webpack_require__("C6MB"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("1WjU"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC,
    AshowDemoHOC = _loadHOC.default.AshowDemoHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var MyScript = AshowDemoHOC(_react.default.createElement(_Zlayout2.default, {
      flexRow: true
    }, _react.default.createElement(_Zlayout2.default, {
      width: 200,
      style: {
        background: "#CBC9C9"
      }
    }), _react.default.createElement(_Zlayout2.default, {
      style: {
        background: "#EAE8E8"
      }
    }), _react.default.createElement(_Zlayout2.default, {
      width: 200,
      style: {
        background: "#D1D1D1"
      }
    })), false);
    return _react.default.createElement(MyScript, null);
  },
  demo2: function demo2() {
    var MyScript = AshowDemoHOC(_react.default.createElement(_Zlayout2.default, {
      flexRow: true
    }, _react.default.createElement(_Zlayout2.default, {
      width: 200
    }, _react.default.createElement(_Zlayout2.default.Zheader, {
      height: "64",
      style: {
        background: "#EAEAEA"
      }
    }, "\u4E0A"), _react.default.createElement(_Zlayout2.default.Zbody, {
      style: {
        background: "#CBCBCB"
      }
    }, "\u4E2D"), _react.default.createElement(_Zlayout2.default.Zfooter, {
      height: "50",
      style: {
        background: "#C6C6C6"
      }
    }, "\u4E0B")), _react.default.createElement(_Zlayout2.default, null, _react.default.createElement(_Zlayout2.default.Zheader, {
      height: "64",
      style: {
        background: "#E8E0E0"
      }
    }, "\u4E0A"), _react.default.createElement(_Zlayout2.default.Zbody, {
      style: {
        background: "#DBD1D1"
      }
    }, "\u4E2D"), _react.default.createElement(_Zlayout2.default.Zfooter, {
      height: "50",
      style: {
        background: "#CEBFBF"
      }
    }, "\u4E0B"))), false);
    return _react.default.createElement(MyScript, null);
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
//# sourceMappingURL=33.ca33d32e5ed8c7226d8a.js.map