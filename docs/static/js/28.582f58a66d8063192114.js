(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "eb3m":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zbgimage\">展示图片：ZbgImage</h1>\n<p><code>ZbgImage</code>是以背景图的方式展示一张图片</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">//默认：无url\n&lt;ZbgImage style={{height:&quot;240px&quot;}}/&gt;\n//有url，position:&quot;center&quot;\n&lt;ZbgImage style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;\n//有url，position:&quot;top&quot;\n&lt;ZbgImage position=&quot;top&quot; style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;</code></pre>\n<h2 id=\"zbgimage-props\">ZbgImage 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>url</td>\n            <td>背景图片路径</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>position</td>\n            <td>背景图片在可视区域的位置</td>\n            <td>center | top</td>\n            <td>center</td>\n        </tr>\n        <tr>\n            <td>onClick</td>\n            <td>点击事件</td>\n            <td>funtion(e){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>children</td>\n            <td>可选择放一些子内容通过绝对定位浮于背景图之上</td>\n            <td>ReactNode</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

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

/***/ "xwxM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _row = _interopRequireDefault(__webpack_require__("BMrR"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _ZbgImage2 = _interopRequireDefault(__webpack_require__("LYpx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("eb3m"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1(tool) {
    console.log(tool);

    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        (0, _classCallCheck2.default)(this, Myjavascript);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Myjavascript).apply(this, arguments));
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          var height = "300px";
          return _react.default.createElement(_row.default, {
            gutter: 20
          }, _react.default.createElement(_col.default, {
            span: 8
          }, _react.default.createElement(_ZbgImage2.default, {
            style: {
              height: height
            }
          }), _react.default.createElement("p", {
            className: "z-text-center z-margin-top-15"
          }, _react.default.createElement("span", {
            className: "z-text-gray z-margin-left-5"
          }, "\u9ED8\u8BA4\uFF1A\u65E0url"))), _react.default.createElement(_col.default, {
            span: 8
          }, _react.default.createElement(_ZbgImage2.default, {
            style: {
              height: height
            },
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598348104&di=4e0d2935d8b0d5f0d716b61652354e16&imgtype=0&src=http%3A%2F%2Fpic2016.ytqmx.com%3A82%2F2016%2F0804%2F36%2F4.jpg%2521960.jpg"
          }), _react.default.createElement("p", {
            className: "z-text-center z-margin-top-15"
          }, _react.default.createElement("span", {
            className: "z-text-gray z-margin-left-5"
          }, "\u6709url\uFF0Cposition:\"center\""))), _react.default.createElement(_col.default, {
            span: 8
          }, _react.default.createElement(_ZbgImage2.default, {
            position: "top",
            style: {
              height: height
            },
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598529458&di=be8bc62d177075515b4d4c82a5ea6cc8&imgtype=0&src=http%3A%2F%2Fimg2015.zdface.com%2F20180720%2Fe4b632ad21ce12e7b5c731a2475aff5a.jpg"
          }), _react.default.createElement("p", {
            className: "z-text-center z-margin-top-15"
          }, _react.default.createElement("span", {
            className: "z-text-gray z-margin-left-5"
          }, "\u6709url\uFF0Cposition:\"top\""))));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=28.582f58a66d8063192114.js.map