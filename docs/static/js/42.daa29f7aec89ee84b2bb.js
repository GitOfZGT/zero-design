(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "Ba+h":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Zviewer2 = _interopRequireDefault(__webpack_require__("mKiM"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("vHeI"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent);

      function Myjavascript() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, Myjavascript);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          urls: []
        };
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.setState({
            urls: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952786111&di=7d03c11e1f0ad40f08578cf8506844aa&imgtype=0&src=http%3A%2F%2Fpic11.photophoto.cn%2F20090415%2F0020032851022998_b.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952798194&di=9e2835fa442d82d57721e83505b4b706&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120330%2F0020033069990023_b.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952814603&di=1759b21819f90ef7d8d7c0c4d379dd62&imgtype=0&src=http%3A%2F%2Fpic21.photophoto.cn%2F20111122%2F0033033938946238_b.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535953843567&di=2cbdfc3ff5947698623fff361c5a4948&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201305%2F03%2F000447ycxqq7q6ntkxndps.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975713921&di=6cf5521422438b1f165d3bd82d10e406&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca2a59eeec68a801216a4b01865c.jpg%401280w_1l_2o_100sh.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975757343&di=b5d737467b8f3aa08ae3d0e2dc68fc8b&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2FOV8JyO.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975776762&di=ceb422c53cb6430269a4aa15a9e39a20&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2Fqp8uZm.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975788020&di=132a29c097bf83d6db16484741cc63f6&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3446260711%2C2783084043%26fm%3D214%26gp%3D0.jpg"]
          });
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(_Zviewer2.default, {
            urls: this.state.urls
          });
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
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

/***/ "vHeI":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zviewer\">图片查看器：Zviewer</h1>\n<p><code>Zviewer</code>展示一组缩略图，点击查看大图</p>\n<p>1、如果想定义显示缩略图大小，请使用样式覆盖，比如 添加 <code>className=&quot;pic-list&quot;</code>, 样式中：<code>.pic-list&gt;li{width:200px;height:180px;}</code></p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"这里是缩略图列表，点击查看大图\"></div>\n\n<pre><code class=\"language-jsx\">class Myjavascript extends ZpureComponent {\n    state = {\n        urls: [\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535952786111&amp;di=7d03c11e1f0ad40f08578cf8506844aa&amp;imgtype=0&amp;src=http%3A%2F%2Fpic11.photophoto.cn%2F20090415%2F0020032851022998_b.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535952798194&amp;di=9e2835fa442d82d57721e83505b4b706&amp;imgtype=0&amp;src=http%3A%2F%2Fpic22.photophoto.cn%2F20120330%2F0020033069990023_b.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535952814603&amp;di=1759b21819f90ef7d8d7c0c4d379dd62&amp;imgtype=0&amp;src=http%3A%2F%2Fpic21.photophoto.cn%2F20111122%2F0033033938946238_b.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535953843567&amp;di=2cbdfc3ff5947698623fff361c5a4948&amp;imgtype=0&amp;src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201305%2F03%2F000447ycxqq7q6ntkxndps.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975713921&amp;di=6cf5521422438b1f165d3bd82d10e406&amp;imgtype=0&amp;src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca2a59eeec68a801216a4b01865c.jpg%401280w_1l_2o_100sh.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975757343&amp;di=b5d737467b8f3aa08ae3d0e2dc68fc8b&amp;imgtype=0&amp;src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2FOV8JyO.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975776762&amp;di=ceb422c53cb6430269a4aa15a9e39a20&amp;imgtype=0&amp;src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2Fqp8uZm.jpg&quot;,\n            &quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1535975788020&amp;di=132a29c097bf83d6db16484741cc63f6&amp;imgtype=jpg&amp;src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3446260711%2C2783084043%26fm%3D214%26gp%3D0.jpg&quot;,\n        ],\n    };\n    render() {\n        return &lt;Zviewer urls={this.state.urls} className={&quot;pic-list&quot;} /&gt;;\n    }\n}</code></pre>\n<h2 id=\"zviewer-props\">Zviewer 的 props</h2>\n<p>可追加<code>className</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>urls</td>\n            <td>多张图片的路径，如果缩略图和原图的路径不一样，可以使用object方式：[{url:\"原图路径\",thumb:\"缩略图路径\",alt:\"图片描述\"}]</td>\n            <td>array[string] | array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showThumbAlt</td>\n            <td>是否在缩略图下显示图片的alt</td>\n            <td>Boolean</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=42.daa29f7aec89ee84b2bb.js.map