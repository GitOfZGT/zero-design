(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

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

/***/ "l5eS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZpopoverButton2 = _interopRequireDefault(__webpack_require__("rwQd"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("rgnb"));

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
        _this.methods = {
          onCancel: function onCancel() {
            _this.ZpopoverButtonMethods.closePopover();
          }
        };
        _this.popover = {
          title: _react.default.createElement("div", null, "popover\u6807\u9898"),
          content: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, "popover\u5185\u5BB9"), _react.default.createElement("div", {
            className: "z-margin-top-20"
          }, _react.default.createElement(_button.default, {
            block: true,
            onClick: _this.methods.onCancel
          }, "\u53D6\u6D88"))),
          onVisibleChange: function onVisibleChange(visible) {
            console.log(visible);
          },
          onGetPopupContainer: function onGetPopupContainer() {
            return document.body;
          },
          exportMethods: function exportMethods(m) {
            _this.ZpopoverButtonMethods = m;
          },
          defaultDisabled: false,
          defaultShow: true,
          placement: "right",
          btnClassName: "z-margin-left-20"
        };
        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_ZpopoverButton2.default, this.popover, "\u5185\u7F6E\u6309\u94AE");
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "rgnb":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zpopoverbutton\">自带浮层按钮：ZpopoverButton</h1>\n<p>ZpopoverButton 默认有一个按钮，自带 popover，左键和右键都会打开 popover，也可以是嵌入自定义按钮（必须是 ReactNode，且支持 onClick,style,disabled 等属性）</p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"\"></div>\n\n<pre><code class=\"language-jsx\">class Myjavascript extends React.PureComponent {\n    methods = {\n        onCancel: () =&gt; {\n            this.ZpopoverButtonMethods.closePopover();\n        },\n    };\n    popover = {\n        title: &lt;div&gt;popover标题&lt;/div&gt;,\n        content: (\n            &lt;React.Fragment&gt;\n                &lt;div&gt;popover内容&lt;/div&gt;\n                &lt;div className=&quot;z-margin-top-20&quot;&gt;\n                    &lt;Button block onClick={this.methods.onCancel}&gt;\n                        取消\n                    &lt;/Button&gt;\n                &lt;/div&gt;\n            &lt;/React.Fragment&gt;\n        ),\n        onVisibleChange: (visible) =&gt; {\n            console.log(visible);\n        },\n        onGetPopupContainer: function() {\n            return document.body;\n        },\n        exportMethods: (m) =&gt; {\n            this.ZpopoverButtonMethods = m;\n        },\n        defaultDisabled: false,\n        defaultShow: true,\n        placement: &quot;right&quot;,\n        btnClassName: &quot;z-margin-left-20&quot;,\n    };\n    render() {\n        return &lt;ZpopoverButton {...this.popover}&gt;内置按钮&lt;/ZpopoverButton&gt;;\n    }\n}</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zpopoverbutton-props\">ZpopoverButton 的 props</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>popover 的 title</td>\n<td>string | ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>content</td>\n<td>popover 的 content</td>\n<td>string | ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onVisibleChange</td>\n<td>popover 打开/隐藏的回调</td>\n<td>function(visible){}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onGetPopupContainer</td>\n<td>将 popover 插入到哪个 dom 内</td>\n<td>function(){return dom}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>defaultDisabled</td>\n<td>按钮的默认禁用状态</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultShow</td>\n<td>按钮默认显示状态</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>popover 的方向</td>\n<td>string</td>\n<td>rightTop</td>\n</tr>\n<tr>\n<td>btnClassName</td>\n<td>按钮的 className</td>\n<td>string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>children</td>\n<td>可以是按钮的名称，也可以自定义按钮（必须是 React 组件，且要支持 onClick,style,disabled 等属性）</td>\n<td>string | ReactNode</td>\n<td>--</td>\n</tr>\n<tr>\n<td>exportMethods</td>\n<td>在 componentDidMount 导出组件内部可调用的方法，methods 请往下看</td>\n<td>function(methods){}</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<h2 id=\"zpopoverbutton-methods\">ZpopoverButton 的 methods</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值类型</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>closePopover</td>\n<td>隐藏 popover ,会触发 onVisibleChange</td>\n<td>methods.closePopover()</td>\n<td>--</td>\n</tr>\n<tr>\n<td>setDisabled</td>\n<td>主动修改按钮禁用状态</td>\n<td>methods.setDisabled(disabled)</td>\n<td>--</td>\n</tr>\n<tr>\n<td>show</td>\n<td>主动修改按钮显示状态</td>\n<td>methods.show(show)</td>\n<td>--</td>\n</tr>\n</tbody></table>\n";

/***/ }),

/***/ "rwQd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _popover = _interopRequireDefault(__webpack_require__("diRs"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _ZpureComponent2 = _interopRequireDefault(__webpack_require__("jY6J"));

__webpack_require__("DOTH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ZpopoverButton =
/*#__PURE__*/
function (_ZpureComponent) {
  (0, _inherits2.default)(ZpopoverButton, _ZpureComponent);

  function ZpopoverButton() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ZpopoverButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ZpopoverButton)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.methods = {
      onVisibleChange: function onVisibleChange(visible) {
        if (_this.props.isCustomVisible && visible) {
          _this.setState({
            visible: visible
          });
        }

        _this.props.onVisibleChange && _this.props.onVisibleChange(visible);
      },
      getPopupContainer: function getPopupContainer() {
        return _this.props.onGetPopupContainer && _this.props.onGetPopupContainer();
      },
      closePopover: function closePopover() {
        _this.setState({
          visible: false
        });

        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
      },
      btnClick: function btnClick() {
        if (_this.state.visible) {
          _this.methods.closePopover();
        } else {
          _this.setState({
            visible: true
          });

          _this.props.onVisibleChange && _this.props.onVisibleChange(true);
        }
      },
      setDisabled: function setDisabled(disabled) {
        _this.setState({
          disabled: disabled
        });
      },
      show: function show(_show) {
        _this.setState({
          show: _show
        });
      }
    };
    _this.state = {
      visible: false,
      disabled: _this.props.defaultDisabled,
      show: _this.props.defaultShow
    };
    return _this;
  }

  (0, _createClass2.default)(ZpopoverButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.exportMethods && this.props.exportMethods(this.methods);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          isCustomVisible = _this$props.isCustomVisible,
          placement = _this$props.placement,
          children = _this$props.children,
          btnClassName = _this$props.btnClassName;
      var visible = isCustomVisible ? {
        visible: this.state.visible
      } : {};
      var buttonName = children;
      var isReactNode = false;

      if (_react.default.isValidElement(children)) {
        isReactNode = true;
        buttonName = _react.default.cloneElement(children, _objectSpread({}, children.props, {
          onClick: function onClick(e) {
            _this2.methods.btnClick();

            children.props.onClick && children.props.onClick(e);
          },
          disabled: this.state.disabled,
          style: _objectSpread({}, children.props.style ? children.props.style : {}, {}, this.state.show ? {} : {
            display: "none"
          }),
          className: "".concat(btnClassName, " ").concat(children.props.className ? children.props.className : "")
        }));
      }

      return _react.default.createElement("span", {
        style: this.state.disabled ? {
          cursor: "not-allowed",
          display: "inline-block",
          pointerEvents: "none"
        } : {}
      }, _react.default.createElement(_popover.default, (0, _extends2.default)({
        placement: placement,
        title: _react.default.createElement("div", {
          className: "z-scheduling-popover-title"
        }, title, _react.default.createElement("span", {
          onClick: this.methods.closePopover,
          className: "z-popover-close-btn"
        }, "\xD7")),
        content: _react.default.createElement("div", {
          className: "z-scheduling-popover-content"
        }, content),
        trigger: "contextMenu",
        overlayClassName: "z-scheduling-popover",
        getPopupContainer: this.methods.getPopupContainer,
        onVisibleChange: this.methods.onVisibleChange
      }, visible), isReactNode ? buttonName : _react.default.createElement(_button.default, {
        type: "primary",
        size: "default",
        className: btnClassName,
        disabled: this.state.disabled,
        onClick: this.methods.btnClick,
        style: this.state.show ? {} : {
          display: "none"
        }
      }, buttonName)));
    }
  }]);
  return ZpopoverButton;
}(_ZpureComponent2.default);

ZpopoverButton.propTypes = {
  title: _propTypes.default.any,
  content: _propTypes.default.any,
  onVisibleChange: _propTypes.default.func,
  onGetPopupContainer: _propTypes.default.func,
  exportMethods: _propTypes.default.func,
  isCustomVisible: _propTypes.default.bool,
  defaultDisabled: _propTypes.default.bool,
  defaultShow: _propTypes.default.bool,
  placement: _propTypes.default.string,
  btnClassName: _propTypes.default.string
};
ZpopoverButton.defaultProps = {
  onGetButtonProps: function onGetButtonProps() {
    return {};
  },
  isCustomVisible: true,
  defaultDisabled: false,
  defaultShow: true,
  placement: "rightTop"
};
var _default = ZpopoverButton;
exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=17.be2fbce7e769aac5c31e.js.map