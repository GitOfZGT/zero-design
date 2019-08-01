(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "JFRy":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zcodehighlight\">代码高亮组件：ZcodeHighlight</h1>\n<p><code>ZcodeHighlight</code>依赖于代码高亮插件<code>prismjs</code>,默认支持<code>html</code>语言,如需支持更多语言，请在<code>zerod-admin-webpack</code>脚手架的<code>.babelrc</code>文件中修改：</p>\n<pre><code class=\"language-json\">&quot;plugins&quot;: [\n    [&quot;prismjs&quot;, {\n        &quot;languages&quot;: [&quot;javascript&quot;, &quot;css&quot;, &quot;scss&quot;, &quot;jsx&quot;,&quot;http&quot;,&quot;icon&quot;,&quot;java&quot;,&quot;json&quot;,&quot;yaml&quot;],//已设置支持的语言，\n        &quot;plugins&quot;: [&quot;line-numbers&quot;],\n        &quot;theme&quot;: &quot;tomorrow&quot;,//主题\n        &quot;css&quot;: true\n    }]</code></pre>\n<p>更多支持的语言请查看：<a href=\"https://prismjs.com/#languages-list\" target=\"_blank\">https://prismjs.com/#languages-list</a></p>\n<h2 id=\"-\">使用组件</h2>\n<p>1、基本使用</p>\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZcodeHighlight } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent{\n    render(){\n        return (\n            &lt;ZcodeHighlight lang=&quot;javascript&quot; mode=&quot;block&quot;&gt;\n                //注意这里，需要高亮的代码是字符串\n                 {`\n                    function getCode(){\n                        let a=0;\n                        retrun a;\n                    }\n                 `}\n            &lt;/ZcodeHighlight&gt;\n        );\n    }\n}</code></pre>\n<p>2、当<code>mode=&quot;html&quot;</code>时</p>\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZcodeHighlight } from &quot;zerod&quot;;\nclass MyHtml extends ZpureComponent{\n    render(){\n        return (\n            &lt;ZcodeHighlight mode=&quot;html&quot;&gt;\n                 {`&lt;h1&gt;代码高亮组件：ZcodeHighlight&lt;/h1&gt;\n                &lt;p&gt;\n                    ZcodeHighlight依赖于代码高亮插件prismjs,默认支持html语言,如需支持更多语言，请在zerod-admin-webpack脚手架的.babelrc文件中修改：\n                &lt;/p&gt;\n                &lt;pre class=&quot;line-numbers&quot;&gt;\n                    &lt;code class=&quot;language-json&quot; &gt;\n                        &quot;plugins&quot;: [\n                            [&quot;prismjs&quot;, {\n                                &quot;languages&quot;: [&quot;javascript&quot;, &quot;css&quot;, &quot;scss&quot;, &quot;jsx&quot;,&quot;http&quot;,&quot;icon&quot;,&quot;java&quot;,&quot;json&quot;,&quot;yaml&quot;],//设置支持的语言，\n                                &quot;plugins&quot;: [&quot;line-numbers&quot;],\n                                &quot;theme&quot;: &quot;tomorrow&quot;,//主题\n                                &quot;css&quot;: true\n                            }]\n                    &lt;/code&gt;\n                &lt;/pre&gt;`}\n            &lt;/ZcodeHighlight&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zcodehighlight-props\">ZcodeHighlight 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>mode</td>\n            <td>显示模式，block：块，inline：内联，html：直接是html元素</td>\n            <td>string : block | inline | html</td>\n            <td>block</td>\n        </tr>\n        <tr>\n            <td>lang</td>\n            <td>高亮代码的语言,更多支持的语言请查看：<a href=\"https://prismjs.com/#languages-list\" target=\"_blank\">https://prismjs.com/#languages-list</a>,当mode=\"html\"时，lang参数无任何作用</td>\n            <td>string</td>\n            <td>html</td>\n        </tr>\n        <tr>\n            <td>children</td>\n            <td>要高亮的代码</td>\n            <td>string</td>\n            <td>-</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ "m7Gq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebhq");
/* harmony import */ var zerod_components_ZcodeHighlight_doc_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JFRy");
/* harmony import */ var zerod_components_ZcodeHighlight_doc_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zerod_components_ZcodeHighlight_doc_md__WEBPACK_IMPORTED_MODULE_1__);

var AmdDocHOC = _HOC_load_HOC_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AmdDocHOC;

/* harmony default export */ __webpack_exports__["default"] = (AmdDocHOC(zerod_components_ZcodeHighlight_doc_md__WEBPACK_IMPORTED_MODULE_1___default.a));

/***/ })

}]);
//# sourceMappingURL=23.e4dfa93e3e7144ffea89.js.map