(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "Iajx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _row = _interopRequireDefault(__webpack_require__("BMrR"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("irHV"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC;

var _default = AmdDocHOC(_doc.default, {
  "text-color": function textColor() {
    var colors = {
      "z-text-red": {
        name: "嫣红"
      },
      "z-text-orange": {
        name: "桔橙"
      },
      "z-text-yellow": {
        name: "明黄"
      },
      "z-text-olive": {
        name: "橄榄"
      },
      "z-text-green": {
        name: "森绿"
      },
      "z-text-cyan": {
        name: "天青"
      },
      "z-text-blue": {
        name: "海蓝"
      },
      "z-text-purple": {
        name: "姹紫"
      },
      "z-text-mauve": {
        name: "木槿"
      },
      "z-text-pink": {
        name: "桃粉"
      },
      "z-text-brown": {
        name: "棕褐"
      },
      "z-text-grey": {
        name: "玄灰"
      },
      "z-text-black": {
        name: "墨黑"
      },
      "z-text-darkGray": {
        name: "暗灰"
      },
      "z-text-gray": {
        name: "草灰"
      },
      "z-text-white": {
        name: "雅白",
        bg: "z-bg-black"
      }
    };
    return _react.default.createElement("div", {
      className: "z-flex-wrap"
    }, Object.keys(colors).map(function (key, i) {
      var _React$createElement;

      return _react.default.createElement("div", (_React$createElement = {
        className: key,
        key: key
      }, (0, _defineProperty2.default)(_React$createElement, "className", "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ".concat(colors[key].shadow || "z-shadow-gray", " ").concat(key, " ").concat(colors[key].bg || "z-bg-white")), (0, _defineProperty2.default)(_React$createElement, "style", {
        width: "156px"
      }), _React$createElement), _react.default.createElement("div", null, colors[key].name), _react.default.createElement("div", null, key));
    }));
  },
  "bg-color": function bgColor() {
    var colors = {
      "z-bg-red": {
        name: "嫣红"
      },
      "z-bg-orange": {
        name: "桔橙"
      },
      "z-bg-yellow": {
        name: "明黄"
      },
      "z-bg-olive": {
        name: "橄榄"
      },
      "z-bg-green": {
        name: "森绿"
      },
      "z-bg-cyan": {
        name: "天青"
      },
      "z-bg-blue": {
        name: "海蓝"
      },
      "z-bg-purple": {
        name: "姹紫"
      },
      "z-bg-mauve": {
        name: "木槿"
      },
      "z-bg-pink": {
        name: "桃粉"
      },
      "z-bg-brown": {
        name: "棕褐"
      },
      "z-bg-grey": {
        name: "玄灰"
      },
      "z-bg-black": {
        name: "墨黑"
      },
      "z-bg-darkGray": {
        name: "暗灰"
      },
      "z-bg-gray": {
        name: "草灰"
      },
      "z-bg-ghostWhite": {
        name: "灰白",
        color: "z-text-black",
        shadow: "z-shadow-gray"
      },
      "z-bg-white": {
        name: "雅白",
        color: "z-text-black",
        shadow: "z-shadow-gray"
      }
    };
    return _react.default.createElement("div", {
      className: "z-flex-wrap"
    }, Object.keys(colors).map(function (key, i) {
      var _React$createElement2;

      return _react.default.createElement("div", (_React$createElement2 = {
        className: key,
        key: key
      }, (0, _defineProperty2.default)(_React$createElement2, "className", "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ".concat(colors[key].shadow || "z-shadow-blur", " ").concat(key, " ").concat(colors[key].color || "z-text-white")), (0, _defineProperty2.default)(_React$createElement2, "style", {
        width: "156px"
      }), _React$createElement2), _react.default.createElement("div", null, colors[key].name), _react.default.createElement("div", null, key));
    }));
  },
  "bg-light-color": function bgLightColor() {
    var colors = {
      "z-bg-light-red": {
        name: "浅嫣红"
      },
      "z-bg-light-orange": {
        name: "浅桔橙"
      },
      "z-bg-light-yellow": {
        name: "浅明黄"
      },
      "z-bg-light-olive": {
        name: "浅橄榄"
      },
      "z-bg-light-green": {
        name: "浅森绿"
      },
      "z-bg-light-cyan": {
        name: "浅天青"
      },
      "z-bg-light-blue": {
        name: "浅海蓝"
      },
      "z-bg-light-purple": {
        name: "浅姹紫"
      },
      "z-bg-light-mauve": {
        name: "浅木槿"
      },
      "z-bg-light-pink": {
        name: "浅桃粉"
      },
      "z-bg-light-brown": {
        name: "浅棕褐"
      },
      "z-bg-light-grey": {
        name: "浅玄灰"
      }
    };
    return _react.default.createElement("div", {
      className: "z-flex-wrap"
    }, Object.keys(colors).map(function (key, i) {
      var _React$createElement3;

      return _react.default.createElement("div", (_React$createElement3 = {
        className: key,
        key: key
      }, (0, _defineProperty2.default)(_React$createElement3, "className", "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ".concat(key, " ").concat(key.replace("z-bg-light", "z-text"))), (0, _defineProperty2.default)(_React$createElement3, "style", {
        width: "156px"
      }), _React$createElement3), _react.default.createElement("div", null, colors[key].name), _react.default.createElement("div", null, key));
    }));
  },
  "bg-gradient-color": function bgGradientColor() {
    var colors = {
      "z-bg-gradient-red": {
        name: "魅红"
      },
      "z-bg-gradient-orange": {
        name: "鎏金"
      },
      "z-bg-gradient-green": {
        name: "翠柳"
      },
      "z-bg-gradient-blue": {
        name: "靛青"
      },
      "z-bg-gradient-purple": {
        name: "惑紫"
      },
      "z-bg-gradient-pink": {
        name: "霞彩"
      }
    };
    return _react.default.createElement("div", {
      className: "z-flex-wrap"
    }, Object.keys(colors).map(function (key, i) {
      var _React$createElement4;

      return _react.default.createElement("div", (_React$createElement4 = {
        className: key,
        key: key
      }, (0, _defineProperty2.default)(_React$createElement4, "className", "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ".concat(key, " z-text-white z-shadow-blur")), (0, _defineProperty2.default)(_React$createElement4, "style", {
        width: "180px"
      }), _React$createElement4), _react.default.createElement("div", null, colors[key].name), _react.default.createElement("div", null, key));
    }));
  },
  "border-color": function borderColor() {
    var colors = {
      "z-bordercolor-red": {
        name: "嫣红"
      },
      "z-bordercolor-orange": {
        name: "桔橙"
      },
      "z-bordercolor-yellow": {
        name: "明黄"
      },
      "z-bordercolor-olive": {
        name: "橄榄"
      },
      "z-bordercolor-green": {
        name: "森绿"
      },
      "z-bordercolor-cyan": {
        name: "天青"
      },
      "z-bordercolor-blue": {
        name: "海蓝"
      },
      "z-bordercolor-purple": {
        name: "姹紫"
      },
      "z-bordercolor-mauve": {
        name: "木槿"
      },
      "z-bordercolor-pink": {
        name: "桃粉"
      },
      "z-bordercolor-brown": {
        name: "棕褐"
      },
      "z-bordercolor-grey": {
        name: "玄灰"
      },
      "z-bordercolor-black": {
        name: "墨黑"
      },
      "z-bordercolor-darkGray": {
        name: "暗灰"
      },
      "z-bordercolor-gray": {
        name: "草灰"
      },
      "z-bordercolor-ghostWhite": {
        name: "灰白"
      },
      "z-bordercolor-light-red": {
        name: "浅嫣红"
      },
      "z-bordercolor-light-orange": {
        name: "浅桔橙"
      },
      "z-bordercolor-light-yellow": {
        name: "浅明黄"
      },
      "z-bordercolor-light-olive": {
        name: "浅橄榄"
      },
      "z-bordercolor-light-green": {
        name: "浅森绿"
      },
      "z-bordercolor-light-cyan": {
        name: "浅天青"
      },
      "z-bordercolor-light-blue": {
        name: "浅海蓝"
      },
      "z-bordercolor-light-purple": {
        name: "浅姹紫"
      },
      "z-bordercolor-light-mauve": {
        name: "浅木槿"
      },
      "z-bordercolor-light-pink": {
        name: "浅桃粉"
      },
      "z-bordercolor-light-brown": {
        name: "浅棕褐"
      },
      "z-bordercolor-light-grey": {
        name: "浅玄灰"
      }
    };
    return _react.default.createElement("div", {
      className: "z-flex-wrap"
    }, Object.keys(colors).map(function (key, i) {
      var _React$createElement5;

      return _react.default.createElement("div", (_React$createElement5 = {
        className: key,
        key: key
      }, (0, _defineProperty2.default)(_React$createElement5, "className", "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ".concat(key, " ").concat(key.replace(/bordercolor(-light)?/g, "text"))), (0, _defineProperty2.default)(_React$createElement5, "style", {
        width: "156px",
        borderWidth: "1px",
        borderStyle: "solid"
      }), _React$createElement5), _react.default.createElement("div", null, colors[key].name), _react.default.createElement("div", null, key));
    }));
  },
  "shadow-color": function shadowColor() {
    var colors = {
      "z-shadow-red": {
        name: "嫣红"
      },
      "z-shadow-orange": {
        name: "桔橙"
      },
      "z-shadow-yellow": {
        name: "明黄"
      },
      "z-shadow-olive": {
        name: "橄榄"
      },
      "z-shadow-green": {
        name: "森绿"
      },
      "z-shadow-cyan": {
        name: "天青"
      },
      "z-shadow-blue": {
        name: "海蓝"
      },
      "z-shadow-purple": {
        name: "姹紫"
      },
      "z-shadow-mauve": {
        name: "木槿"
      },
      "z-shadow-pink": {
        name: "桃粉"
      },
      "z-shadow-brown": {
        name: "棕褐"
      },
      "z-shadow-grey": {
        name: "玄灰"
      },
      "z-shadow-black": {
        name: "墨黑"
      },
      "z-shadow-gray": {
        name: "草灰"
      }
    };
    return _react.default.createElement("div", {
      className: "z-flex-wrap"
    }, _react.default.createElement("div", {
      className: "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 z-shadow-blur z-bg-red z-text-white",
      style: {
        width: "200px"
      }
    }, _react.default.createElement("div", null, "\u81EA\u52A8\u6839\u636E\u80CC\u666F\u8272\u7684\u9634\u5F71"), _react.default.createElement("div", null, "z-shadow-blur")), _react.default.createElement("div", {
      className: "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 z-shadow-blur z-bg-mauve z-text-white",
      style: {
        width: "200px"
      }
    }, _react.default.createElement("div", null, "\u81EA\u52A8\u6839\u636E\u80CC\u666F\u8272\u7684\u9634\u5F71"), _react.default.createElement("div", null, "z-shadow-blur")), _react.default.createElement("div", {
      className: "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 z-shadow-blur z-bg-pink z-text-white",
      style: {
        width: "200px"
      }
    }, _react.default.createElement("div", null, "\u81EA\u52A8\u6839\u636E\u80CC\u666F\u8272\u7684\u9634\u5F71"), _react.default.createElement("div", null, "z-shadow-blur")), Object.keys(colors).map(function (key, i) {
      var _React$createElement6;

      return _react.default.createElement("div", (_React$createElement6 = {
        className: key,
        key: key
      }, (0, _defineProperty2.default)(_React$createElement6, "className", "z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ".concat(key, " z-bg-white ").concat(key.replace("shadow", "text"))), (0, _defineProperty2.default)(_React$createElement6, "style", {
        width: "156px"
      }), _React$createElement6), _react.default.createElement("div", null, colors[key].name), _react.default.createElement("div", null, key));
    }));
  },
  "default-panel": function defaultPanel() {
    return _react.default.createElement(_row.default, {
      gutter: 40
    }, _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u65E0\u8FB9\u6846\u9762\u677F"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-panel-border"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u6709\u8FB9\u6846\u9762\u677F"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-panel-border is-radius-top"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u6709\u8FB9\u6846+\u53EA\u6709\u4E0A\u5706\u89D2"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-panel-border is-radius-bottom"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u6709\u8FB9\u6846+\u53EA\u6709\u4E0B\u5706\u89D2"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-no-radius"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u56DB\u5468\u65E0\u5706\u89D2"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body is-no-padding"
    }, "\u9762\u677Fbody\u5168\u65E0padding"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body is-no-padding-sides"
    }, "\u9762\u677Fbody\u5DE6\u53F3\u65E0padding"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15"
    }, _react.default.createElement("div", {
      className: "z-panel-heading"
    }, "\u6807\u9898"), _react.default.createElement("div", {
      className: "z-panel-body is-no-padding-vertical"
    }, "\u9762\u677Fbody\u4E0A\u4E0B\u65E0padding"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15"
    }, _react.default.createElement("div", {
      className: "z-panel-heading z-bg-light-olive"
    }, "\u6807\u9898z-bg-light-olive"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u65E0\u8FB9\u6846\u9762\u677F"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-orange"
    }, _react.default.createElement("div", {
      className: "z-panel-heading z-bg-light-orange z-bordercolor-light-orange"
    }, "\u6807\u9898z-bg-light-orange z-bordercolor-light-orange"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u6709\u8FB9\u6846\u9762\u677F"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-pink"
    }, _react.default.createElement("div", {
      className: "z-panel-heading z-bg-light-pink z-bordercolor-light-pink"
    }, "\u6807\u9898z-bg-light-pink"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u6709\u8FB9\u6846\u9762\u677F"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-cyan"
    }, _react.default.createElement("div", {
      className: "z-panel-heading z-bg-light-cyan z-bordercolor-light-cyan"
    }, "\u6807\u9898z-bg-light-cyan z-bordercolor-cyan"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u6709\u8FB9\u6846\u9762\u677F"))), _react.default.createElement(_col.default, {
      span: 12
    }, _react.default.createElement("div", {
      className: "z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-grey"
    }, _react.default.createElement("div", {
      className: "z-panel-heading z-bg-light-grey z-bordercolor-light-grey"
    }, "\u6807\u9898z-bg-light-orange z-bordercolor-pink"), _react.default.createElement("div", {
      className: "z-panel-body"
    }, "\u6709\u8FB9\u6846\u9762\u677F"))));
  },
  "default-info": function defaultInfo() {
    return _react.default.createElement("div", null, _react.default.createElement("dl", {
      className: "z-info"
    }, _react.default.createElement("dt", {
      className: "z-info-left"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6807\u98981")), _react.default.createElement("dd", {
      className: "z-info-right"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u4E3A\u4E86\u4F7F\u6211\u4EEC\u6709\u66F4\u9AD8\u7684\u53EF\u63A7\u6027\uFF0C\u5373\u81EA\u7531\u63A7\u5236\u9876\u70B9\u4F4D\u7F6E\uFF0CWebGL\u628A\u8FD9\u4E2A\u6743\u529B\u4EA4\u7ED9\u4E86\u6211\u4EEC\uFF0C\u8FD9\u5C31\u662F\u53EF\u7F16\u7A0B\u6E32\u67D3\u7BA1\u7EBF\uFF08\u4E0D\u7528\u7406\u89E3\uFF09\u3002"))), _react.default.createElement("dl", {
      className: "z-info"
    }, _react.default.createElement("dt", {
      className: "z-info-left"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6807\u98982")), _react.default.createElement("dd", {
      className: "z-info-right"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u540D\u8BCD\uFF0C\u53EB\u201C\u9876\u70B9\u7740\u8272\u5668\u201D"))), _react.default.createElement("div", {
      className: "z-margin-top-15"
    }, _react.default.createElement("dl", {
      className: "z-info z-bordercolor-light-mauve"
    }, _react.default.createElement("dt", {
      className: "z-info-left z-bg-light-mauve z-bordercolor-light-mauve"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6807\u98982")), _react.default.createElement("dd", {
      className: "z-info-right"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u540D\u8BCD\uFF0C\u53EB\u201C\u9876\u70B9\u7740\u8272\u5668\u201D"))), _react.default.createElement("dl", {
      className: "z-info z-bordercolor-light-brown"
    }, _react.default.createElement("dt", {
      className: "z-info-left z-bg-light-brown z-bordercolor-light-brown"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6807\u98982")), _react.default.createElement("dd", {
      className: "z-info-right"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u540D\u8BCD\uFF0C\u53EB\u201C\u9876\u70B9\u7740\u8272\u5668\u201D"))), _react.default.createElement("dl", {
      className: "z-info z-bordercolor-light-green"
    }, _react.default.createElement("dt", {
      className: "z-info-left z-bg-light-green z-bordercolor-light-green"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6807\u98982")), _react.default.createElement("dd", {
      className: "z-info-right"
    }, _react.default.createElement("span", {
      className: "z-margin-bottom-10"
    }, "\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u540D\u8BCD\uFF0C\u53EB\u201C\u9876\u70B9\u7740\u8272\u5668\u201D")))));
  }
});

exports.default = _default;

/***/ }),

/***/ "irHV":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-08-21 10:59:31\n * @LastEditors: zgt\n * @LastEditTime: 2019-08-24 14:28:25\n * @Description: file content\n -->\n\n<h1 id=\"-\">通用样式</h1>\n<p>积累了一些通用的ClassName</p>\n<p><code>zerod-admin-webpack</code> 脚手架中的<code>src/app.scss</code>已经全部引入 <code>@import &#39;~zerod/index.scss&#39;;</code>，所以可以直接使用如下的所有的样式类名</p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">字体颜色</h2>\n<div class=\"z-demo-box\" data-render=\"text-color\" data-title=\"定义了一些字体颜色\"></div>\n\n<pre><code class=\"language-html\">&lt;div className=&quot;z-text-blue&quot;&gt;z-text-blue&lt;/div&gt;</code></pre>\n<h2 id=\"-\">浅色背景</h2>\n<div class=\"z-demo-box\" data-render=\"bg-light-color\" data-title=\"定义了一些浅色背景\"></div>\n\n<pre><code class=\"language-html\">&lt;div className=&quot;z-bg-light-blue&quot;&gt;z-bg-light-blue&lt;/div&gt;</code></pre>\n<h2 id=\"-\">深色背景</h2>\n<div class=\"z-demo-box\" data-render=\"bg-color\" data-title=\"定义了一些深色背景\"></div>\n\n<pre><code class=\"language-html\">&lt;div className=&quot;z-bg-blue&quot;&gt;z-bg-blue&lt;/div&gt;\n//自动根据背景色的阴影\n&lt;div className=&quot;z-bg-red z-shadow-blur&quot;&gt;z-bg-red z-shadow-blur&lt;/div&gt;</code></pre>\n<h2 id=\"-\">渐变色背景</h2>\n<div class=\"z-demo-box\" data-render=\"bg-gradient-color\" data-title=\"定义了一些渐变色背景\"></div>\n\n<pre><code class=\"language-html\">&lt;div className=&quot;z-bg-gradient-blue&quot;&gt;z-bg-gradient-blue&lt;/div&gt;</code></pre>\n<h2 id=\"-\">边框颜色</h2>\n<div class=\"z-demo-box\" data-render=\"border-color\" data-title=\"定义了一些边框颜色\"></div>\n\n<pre><code class=\"language-html\">&lt;div className=&quot;z-bordercolor-blue&quot;&gt;z-bordercolor-blue&lt;/div&gt;</code></pre>\n<h2 id=\"-\">阴影</h2>\n<div class=\"z-demo-box\" data-render=\"shadow-color\" data-title=\"定义了一些阴影\"></div>\n\n<pre><code class=\"language-html\">&lt;div className=&quot;z-shadow-blue&quot;&gt;z-shadow-blue&lt;/div&gt;\n//自动根据背景色的阴影\n&lt;div className=&quot;z-bg-red z-shadow-blur&quot;&gt;z-bg-red z-shadow-blur&lt;/div&gt;</code></pre>\n<h2 id=\"-\">面板</h2>\n<div class=\"z-demo-box\" data-render=\"default-panel\" data-title=\"默认面板\"></div>\n\n<pre><code class=\"language-jsx\">&lt;Row gutter={40}&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;无边框面板&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-panel-border&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-panel-border is-radius-top&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;有边框+只有上圆角&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-panel-border is-radius-bottom&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;有边框+只有下圆角&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-no-radius&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;四周无圆角&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body is-no-padding&quot;&gt;面板body全无padding&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body is-no-padding-sides&quot;&gt;面板body左右无padding&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15&quot;&gt;\n            &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body is-no-padding-vertical&quot;&gt;面板body上下无padding&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15&quot;&gt;\n            &lt;div className=&quot;z-panel-heading z-bg-light-olive&quot;&gt;标题z-bg-light-olive&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;无边框面板&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-orange&quot;&gt;\n            &lt;div className=&quot;z-panel-heading z-bg-light-orange z-bordercolor-light-orange&quot;&gt;\n                标题z-bg-light-orange z-bordercolor-light-orange\n            &lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-pink&quot;&gt;\n            &lt;div className=&quot;z-panel-heading z-bg-light-pink z-bordercolor-light-pink&quot;&gt;标题z-bg-light-pink&lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-cyan&quot;&gt;\n            &lt;div className=&quot;z-panel-heading z-bg-light-cyan z-bordercolor-light-cyan&quot;&gt;\n                标题z-bg-light-cyan z-bordercolor-cyan\n            &lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n    &lt;Col span={12}&gt;\n        &lt;div className=&quot;z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-grey&quot;&gt;\n            &lt;div className=&quot;z-panel-heading z-bg-light-grey z-bordercolor-light-grey&quot;&gt;\n                标题z-bg-light-orange z-bordercolor-pink\n            &lt;/div&gt;\n            &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/Col&gt;\n&lt;/Row&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"z-info\">z-info</h2>\n<div class=\"z-demo-box\" data-render=\"default-info\" data-title=\"信息面板\"></div>\n\n<pre><code class=\"language-html\">&lt;div&gt;\n    &lt;!--  默认  --&gt;\n    &lt;dl className=&quot;z-info&quot;&gt;\n        &lt;dt className=&quot;z-info-left&quot;&gt;\n            &lt;span className=&quot;z-margin-bottom-10&quot;&gt;标题1&lt;/span&gt;\n        &lt;/dt&gt;\n        &lt;dd className=&quot;z-info-right&quot;&gt;\n            &lt;span className=&quot;z-margin-bottom-10&quot;&gt;\n                为了使我们有更高的可控性，即自由控制顶点位置，WebGL把这个权力交给了我们，这就是可编程渲染管线（不用理解）。\n            &lt;/span&gt;\n        &lt;/dd&gt;\n    &lt;/dl&gt;\n    &lt;dl className=&quot;z-info&quot;&gt;\n        &lt;dt className=&quot;z-info-left&quot;&gt;\n            &lt;span className=&quot;z-margin-bottom-10&quot;&gt;标题2&lt;/span&gt;\n        &lt;/dt&gt;\n        &lt;dd className=&quot;z-info-right&quot;&gt;\n            &lt;span className=&quot;z-margin-bottom-10&quot;&gt;我们引入了一个新的名词，叫“顶点着色器”&lt;/span&gt;\n        &lt;/dd&gt;\n    &lt;/dl&gt;\n    &lt;!--  与背景色z-bg-light-和边框颜色z-border-color-一起用  --&gt;\n    &lt;div className=&quot;z-margin-top-15&quot;&gt;\n        &lt;dl className=&quot;z-info z-bordercolor-light-mauve&quot;&gt;\n            &lt;dt className=&quot;z-info-left z-bg-light-mauve z-bordercolor-light-mauve&quot;&gt;\n                &lt;span className=&quot;z-margin-bottom-10&quot;&gt;标题2&lt;/span&gt;\n            &lt;/dt&gt;\n            &lt;dd className=&quot;z-info-right&quot;&gt;\n                &lt;span className=&quot;z-margin-bottom-10&quot;&gt;我们引入了一个新的名词，叫“顶点着色器”&lt;/span&gt;\n            &lt;/dd&gt;\n        &lt;/dl&gt;\n        &lt;dl className=&quot;z-info z-bordercolor-light-brown&quot;&gt;\n            &lt;dt className=&quot;z-info-left z-bg-light-brown z-bordercolor-light-brown&quot;&gt;\n                &lt;span className=&quot;z-margin-bottom-10&quot;&gt;标题2&lt;/span&gt;\n            &lt;/dt&gt;\n            &lt;dd className=&quot;z-info-right&quot;&gt;\n                &lt;span className=&quot;z-margin-bottom-10&quot;&gt;我们引入了一个新的名词，叫“顶点着色器”&lt;/span&gt;\n            &lt;/dd&gt;\n        &lt;/dl&gt;\n        &lt;dl className=&quot;z-info z-bordercolor-light-green&quot;&gt;\n            &lt;dt className=&quot;z-info-left z-bg-light-green z-bordercolor-light-green&quot;&gt;\n                &lt;span className=&quot;z-margin-bottom-10&quot;&gt;标题2&lt;/span&gt;\n            &lt;/dt&gt;\n            &lt;dd className=&quot;z-info-right&quot;&gt;\n                &lt;span className=&quot;z-margin-bottom-10&quot;&gt;我们引入了一个新的名词，叫“顶点着色器”&lt;/span&gt;\n            &lt;/dd&gt;\n        &lt;/dl&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">元素浮动</h2>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-float.scss&#39;;</code></p>\n<pre><code class=\"language-html\">&lt;div className=&quot;z-clear-fix&quot;&gt;\n    //清除浮动\n    &lt;div className=&quot;z-float-left&quot;&gt;&lt;/div&gt;\n    //左浮动\n    &lt;div className=&quot;z-float-right&quot;&gt;&lt;/div&gt;\n    //右浮动\n&lt;/div&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">字体大小</h2>\n<p>定义了 12-100px 的字体大小</p>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-font-size.scss&#39;;</code></p>\n<pre><code class=\"language-html\">&lt;div className=&quot;z-font-size-16&quot;&gt;16像素大小&lt;/div&gt;\n&lt;div className=&quot;z-font-size-16-important&quot;&gt;权重优先&lt;/div&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-\">文本对齐</h2>\n<p>定义了文本对齐的 clasName</p>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-text-align.scss&#39;;</code></p>\n<pre><code class=\"language-html\">&lt;div className=&quot;z-text-left&quot;&gt;文本居左&lt;/div&gt;\n&lt;div className=&quot;z-text-center&quot;&gt;文本居中&lt;/div&gt;\n&lt;div className=&quot;z-text-right&quot;&gt;文本居右&lt;/div&gt;\n&lt;div className=&quot;z-text-underline&quot;&gt;文字下划线&lt;/div&gt;\n&lt;div className=&quot;z-text-underline-hover&quot;&gt;文字hover后显示下划线&lt;/div&gt;\n&lt;div className=&quot;z-vertical-top&quot;&gt;文字顶部对齐&lt;/div&gt;\n&lt;div className=&quot;z-vertical-middle&quot;&gt;文字中间对齐&lt;/div&gt;\n&lt;div className=&quot;z-vertical-bottom&quot;&gt;文字底部对齐&lt;/div&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"margin-padding-\">margin 和 padding 值</h2>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-margin-padding.scss&#39;;</code></p>\n<p>定义了 0-100px 的 margin 和 padding 值的 className</p>\n<p>如需提高权重，加后缀：&quot;-important&quot;</p>\n<p><code>z-margin-10</code> : 四个方位 margin 值为 10px</p>\n<p><code>z-margin-left-10</code> : margin-left 为 10px</p>\n<p><code>z-margin-top-10</code> : margin-top 为 10px</p>\n<p><code>z-margin-right-10</code> : margin-right 为 10px</p>\n<p><code>z-margin-bottom-10</code> : margin-bottom 为 10px</p>\n<p><code>z-margin-bottom-10-important</code> :权重优先</p>\n<p>同理<code>padding</code>值 ：</p>\n<p><code>z-padding-10</code> : 四个方位 padding 值为 10px</p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"flex-\">flex 盒子(更多请了解弹性布局)</h2>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-flex.scss&#39;;</code></p>\n<pre><code class=\"language-html\">//z-flex-1只到z-flex-5\n&lt;div className=&quot;z-flex&quot;&gt; //启用弹性盒子\n    &lt;div className=&quot;z-flex-1&quot;&gt;&lt;/div&gt; //占比1\n    &lt;div className=&quot;z-flex-2&quot;&gt;&lt;/div&gt; //占比2\n&lt;/div&gt;\n\n//盒子子元素挤不下自动转行\n&lt;div className=&quot;z-flex-wrap&quot;&gt;\n    &lt;div className=&quot;z-flex-1&quot;&gt;&lt;/div&gt; //占比1\n    &lt;div className=&quot;z-flex-2&quot;&gt;&lt;/div&gt; //占比2\n&lt;/div&gt;\n\n// 盒子子元素底部对齐\n&lt;div className=&quot;z-flex-items-end&quot;&gt;\n    &lt;div className=&quot;z-flex-1&quot;&gt;&lt;/div&gt; //占比1\n    &lt;div className=&quot;z-flex-2&quot;&gt;&lt;/div&gt; //占比2\n&lt;/div&gt;\n\n//盒子子元素水平居中\n&lt;div className=&quot;z-flex-items-h-center&quot;&gt;\n    //内部子元素呈水平居中\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n//盒子子元素垂直居中\n&lt;div className=&quot;z-flex-items-v-center&quot;&gt;\n    //内部子元素呈垂直居中\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n//盒子子元素水平垂直居中\n&lt;div className=&quot;z-flex-items-center&quot;&gt;\n    //内部子元素呈水平垂直居中\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n//子元素自身高度跟随内容\n&lt;div className=&quot;z-flex&quot;&gt; //父元素\n    &lt;div&gt;子元素默认高度占父元素100%&lt;/div&gt;\n    &lt;div className=&quot;z-flex-self-baseline&quot;&gt;子元素高度跟随内容高度&lt;/div&gt;\n&lt;/div&gt;\n\n//子元素 两端对齐\n&lt;div className=&quot;z-flex-space-between&quot;&gt; //父元素\n    &lt;div&gt;最左&lt;/div&gt;\n    &lt;div&gt;中间&lt;/div&gt;\n    &lt;div&gt;最右&lt;/div&gt;\n&lt;/div&gt;\n\n//子元素自身垂直居中\n&lt;div className=&quot;z-flex&quot;&gt; //父元素\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div className=&quot;z-flex-self-center&quot;只有我是垂直居中&lt;/div&gt;\n&lt;/div&gt;\n\n//纵向排列方式\n&lt;div className=&quot;z-flex-direction-column&quot;&gt;\n    &lt;div&gt;上&lt;/div&gt;\n    &lt;div&gt;中&lt;/div&gt;\n    &lt;div&gt;下&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-em-\">定义了 em 单位的字体缩进</h2>\n<p>1-10em 单位的字体缩进</p>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-text-indent.scss&#39;;</code></p>\n<p>如需提高权重，加后缀：&quot;-important&quot;</p>\n<pre><code class=\"language-html\">&lt;div className=&quot;z-text-indent-2&quot;&gt;文本&lt;/div&gt;</code></pre>\n";

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
//# sourceMappingURL=47.3fa824ce2ab0371e3164.js.map