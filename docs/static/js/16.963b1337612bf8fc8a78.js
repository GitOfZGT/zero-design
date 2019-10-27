(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "8/JR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(81);

/***/ }),

/***/ "PzH3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(305);

/***/ }),

/***/ "haxw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZoneWayTransfer2 = _interopRequireDefault(__webpack_require__("T352"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("r0Fl"));

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
          leftData: [{
            name: "风中飘摇",
            children: [{
              name: "由于天涯"
            }, {
              name: "泪如雨下"
            }, {
              name: "阳光舞台",
              disabled: true
            }, {
              name: "天下轨道"
            }]
          }, {
            name: "枫叶南山"
          }, {
            name: "相信时代(禁用状态)",
            disabled: true
          }, {
            name: "天下三官",
            children: [{
              name: "由于天涯"
            }, {
              name: "泪如雨下"
            }]
          }],
          rightData: []
        };
        _this.methods = {
          onChange: function onChange(actionType, rightData, actionItem, sibligItem) {//actionType="transfer" 从左转移到右
            //actionType="move" 右框内移动排序
            //actionType="remove" 拖出右框移除
            //actionType="selectAll" 全选
            //actionType="clearAll 清空
          }
        };
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_ZoneWayTransfer2.default, {
            style: {
              width: "650px"
            },
            repeated: true,
            onChange: this.methods.onChange,
            leftSourceData: this.state.leftData,
            rightTargetData: this.state.rightData,
            leftTitle: "\u5DE6\u8FB9",
            rightTitle: "\u53F3\u8FB9",
            sourceKeys: {
              name: "name",
              id: "id",
              children: "children"
            },
            leftItemRender: function leftItemRender(item) {
              return _react.default.createElement("span", null, item.name);
            },
            rightItemRender: function rightItemRender(item) {
              return _react.default.createElement("span", null, item.name);
            }
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

/***/ "r0Fl":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-zonewaytransfer\">单向转移框: ZoneWayTransfer</h1>\n<p><code>ZoneWayTransfer</code>是一个通过拖动的单向转移选择框组件，左侧源数据框，右侧是接收框</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"左框的选项拖动到右框，右框内的选项可以上下拖动排序\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { ZoneWayTransfer } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    state = {\n        leftData: [\n            { name: &quot;风中飘摇&quot;, children: [{ name: &quot;由于天涯&quot; }, { name: &quot;泪如雨下&quot; }] },\n            { name: &quot;枫叶南山&quot; },\n            { name: &quot;相信时代(禁用状态)&quot;, disabled: true },\n            { name: &quot;天下三官&quot;, children: [{ name: &quot;由于天涯&quot; }, { name: &quot;泪如雨下&quot; }] },\n        ],\n        rightData: [],\n    };\n    methods = {\n        onChange: (actionType, rightData, actionItem, sibligItem) =&gt; {\n            //actionType=&quot;transfer&quot; 从左转移到右\n            //actionType=&quot;move&quot; 右框内移动排序\n            //actionType=&quot;remove&quot; 拖出右框移除\n            //actionType=&quot;selectAll&quot; 全选\n            //actionType=&quot;clearAll 清空\n        },\n    };\n    render() {\n        return (\n            &lt;ZoneWayTransfer\n                style={{ width: &quot;600px&quot; }}\n                repeated={true}\n                onChange={this.methods.onChange}\n                leftSourceData={this.state.leftData}\n                rightTargetData={this.state.rightData}\n                leftTitle=&quot;左边&quot;\n                rightTitle=&quot;右边&quot;\n                sourceKeys={{ name: &quot;name&quot;, id: &quot;id&quot; }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id=\"zonewaytransfer-props\">ZoneWayTransfer 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>leftSourceData</td>\n            <td>左侧框的数据源,[{name:\"名称\",id:\"1\",disabled:false}]</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>rightTargetData</td>\n            <td>右侧框的数据,[{name:\"名称\",id:\"1\",disabled:false}]</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>sourceKeys</td>\n            <td>定义leftSourceData和rightTargetData的key对象，默认：{ name: \"name\", id: \"id\", children: \"children\" }</td>\n            <td>object</td>\n            <td>{ name: \"name\", id: \"id\", children: \"children\" }</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>操作之后的回调，参数有 actionType：操作类型，rightData：操作之后右框数据，actionItem：当前操作的数据，sibligItem：当前操作位置下一个数据</td>\n            <td>(actionType, rightData, actionItem, sibligItem) => {}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>repeated</td>\n            <td>是否允许重复选择</td>\n            <td>Boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> leftTitle</td>\n            <td>左框标题</td>\n            <td>string | function(){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> rightTitle</td>\n            <td>右框标题</td>\n            <td>string | function(){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> leftItemRender</td>\n            <td>左框选择项的渲染函数</td>\n            <td>function(item,index){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> rightItemRender</td>\n            <td>右框选择项的渲染函数</td>\n            <td>function(item,index){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>selectAllDisabled</td>\n            <td>禁用全选按钮</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>clearAllDisabled</td>\n            <td>禁用清空按钮</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=16.963b1337612bf8fc8a78.js.map