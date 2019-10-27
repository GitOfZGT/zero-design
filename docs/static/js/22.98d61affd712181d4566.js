(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "9Q6a":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-08-21 10:59:31\n * @LastEditors: zgt\n * @LastEditTime: 2019-08-24 17:47:26\n * @Description: file content\n -->\n\n<h1 id=\"zerodmaincontext\">ZerodMainContext</h1>\n<p>在<code>ZmainHOC</code>中启用了<code>ZerodMainContext</code>的上文，通过<code>ZerodMainContext.setConsumer(组件)</code>包装的组件，可以使用<code>this.props</code>调用以下东西：</p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-showrightmodal-\">打开右抽屉窗口: showRightModal()</h2>\n<p>showRightModal 参数有：<code>show</code>:是否显示，<code>modal</code>: 任意字符串（窗口的唯一标识，可以理解为 ID） <del>&quot;mainModal&quot; | &quot;appModal&quot; | &quot;mainModal_top&quot; | &quot;appModal_top&quot;</del>，<code>content</code>：窗口的内容，<code>scroll</code>：窗口内是否启用滚动条,<code>onTransitionend</code>:打开关闭的过渡动画执行完后的回调，<code>wrapperEl</code>:窗口的父元素(dom 元素，可选， document.body 或其他)</p>\n<pre><code class=\"language-jsx\">//第一种传参\nthis.props.showRightModal(true, &quot;mainModal&quot;, &lt;div&gt;内容&lt;/div&gt;, true, show =&gt; {});\n//第二种传参\nthis.props.showRightModal({\n    show: true,\n    modal: &quot;mainModal&quot;, //modal也可以不写，内部会随机一个\n    content: &lt;div&gt;内容&lt;/div&gt;,\n    scroll: true,\n    width: null, //自定义宽度 &quot;400px&quot;||&quot;50%&quot;\n    mask: true, //是否显示遮罩层\n    onTransitionend: show =&gt; {},\n    // wrapperEl:document.body\n});\n//关闭窗口\nthis.props.showRightModal(false, &quot;mainModal&quot;); //关闭对应的\nthis.props.showRightModal(false); //关闭的是最顶层的那个</code></pre>\n<p><del><code>modal</code>属性层级：&quot;appModal_top&quot; &gt; &quot;appModal&quot; &gt; &quot;mainModal_top&quot; &gt; &quot;mainModal&quot;</del></p>\n<p><del>2018-10-01 <code>modal</code>属性新增 &quot;mainModal_top&quot;和&quot;appModal_top&quot;值</del></p>\n<p>2018-08-22 新增<code>onTransitionend</code>属性，支持如下的传参方式</p>\n<p>2019-01-11 <code>modal</code>属性不再是固定的，是任意的字符串，窗口数量可以无限叠加；新增<code>wrapperEl</code>属性：窗口的父元素(dom 元素，可以选择 document.body 或其他)</p>\n<div class=\"z-demo-box\" data-render=\"open-modal\" data-title=\"\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Button } from &quot;antd&quot;;\nimport { ZerodMainContext } from &quot;zerod&quot;;\nclass OpenModal extends ZpureComponent {\n    methods = {\n        openMainModal: e =&gt; {\n            this.props.showRightModal(\n                true,\n                &quot;mainModal&quot;,\n                &lt;div className=&quot;z-panel&quot;&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;main子路由位置的右边窗口&lt;/div&gt;\n                &lt;/div&gt;,\n            );\n        },\n        openAppModal: e =&gt; {\n            this.props.showRightModal(\n                true,\n                &quot;appModal&quot;,\n                &lt;div className=&quot;z-panel&quot;&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;最外边的右边窗口&lt;/div&gt;\n                &lt;/div&gt;,\n            );\n        },\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;Button type=&quot;dashed&quot; className=&quot;z-open-modal-btn&quot; onClick={this.methods.openMainModal}&gt;\n                    打开main子路由位置的右边窗口\n                &lt;/Button&gt;\n\n                &lt;Button type=&quot;dashed&quot; className=&quot;z-open-modal-btn z-margin-left-20&quot; onClick={this.methods.openAppModal}&gt;\n                    打开最外边的右边窗口\n                &lt;/Button&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nconst OutPut = ZerodMainContext.setConsumer(OpenModal);</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-loading-showrouteloading-show-tip-\">显示主页路由区域 loading: showRouteLoading(show,tip)</h2>\n<p>showRouteLoading 方法有一个参数，<code>show</code>:是否显示，<code>tip</code>:自定义文案</p>\n<div class=\"z-demo-box\" data-render=\"route-loading\" data-title=\"this.props.showRouteLoading(true)\"></div>\n\n<pre><code class=\"language-jsx\">class MyScript extends ZpureComponent {\n    methods = {\n        showRouteLoading: e =&gt; {\n            this.props.showRouteLoading(true);\n            setTimeout(() =&gt; {\n                this.props.showRouteLoading(false);\n            }, 2000);\n        },\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;Button type=&quot;primary&quot; className=&quot;z-show-loading-btn&quot; onClick={this.methods.showRouteLoading}&gt;\n                    显示路由位置的loading\n                &lt;/Button&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nconst OutPut = ZerodMainContext.setConsumer(MyScript);\nreturn &lt;OutPut /&gt;;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-loading-showmodalloading-show-modal-tip-\">显示右边窗口 loading: showModalLoading(show,modal,tip)</h2>\n<p>showModalLoading 方法有两个参数，<code>show</code>:是否显示，<code>modal</code>: &quot;mainModal&quot; | 与 showRightModal()的 modal 属性对应，<code>tip</code>:自定义文案</p>\n<div class=\"z-demo-box\" data-render=\"modal-loading\" data-title=\"this.props.showModalLoading(true, modal);\"></div>\n\n<pre><code class=\"language-jsx\">class MyScript extends ZpureComponent {\n    methods = {\n        showModalLoading: (e, modal) =&gt; {\n            this.props.showRightModal(true, modal);\n            this.props.showModalLoading(true, modal);\n            setTimeout(() =&gt; {\n                this.props.showModalLoading(false, modal);\n            }, 2000);\n        },\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;Button\n                    type=&quot;primary&quot;\n                    className=&quot;z-show-loading-btn&quot;\n                    onClick={e =&gt; {\n                        this.methods.showModalLoading(e, &quot;mainModal&quot;);\n                    }}\n                &gt;\n                    显示 mainModal 的loading\n                &lt;/Button&gt;\n                &lt;Button\n                    type=&quot;primary&quot;\n                    className=&quot;z-show-loading-btn&quot;\n                    onClick={e =&gt; {\n                        this.methods.showModalLoading(e, &quot;mainModal_top&quot;);\n                    }}\n                &gt;\n                    显示 mainModal_top 的loading\n                &lt;/Button&gt;\n                &lt;Button\n                    type=&quot;primary&quot;\n                    className=&quot;z-show-loading-btn z-margin-left-20&quot;\n                    onClick={e =&gt; {\n                        this.methods.showModalLoading(e, &quot;appModal&quot;);\n                    }}\n                &gt;\n                    显示 appModal 的loading\n                &lt;/Button&gt;\n                &lt;Button\n                    type=&quot;primary&quot;\n                    className=&quot;z-show-loading-btn z-margin-left-20&quot;\n                    onClick={e =&gt; {\n                        this.methods.showModalLoading(e, &quot;appModal_top&quot;);\n                    }}\n                &gt;\n                    显示 appModal_top 的loading\n                &lt;/Button&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nconst OutPut = ZerodMainContext.setConsumer(MyScript);\nreturn &lt;OutPut /&gt;;</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-getsidemenudata-\">获取左边导航栏数据: getSideMenuData()</h2>\n<p>getSideMenuData()返回的是一个数组</p>\n<h2 id=\"-getscrollinstance-modal-\">获取滚动条的实例：getScrollInstance(modal)</h2>\n<p>getScrollInstance 方法有一个参数，<code>modal</code>:哪个地方的滚动条: &quot;mainRoute&quot; | 与 showRightModal()的 modal 属性对应</p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-dom-getinsertlocation-el-\">获取某个 dom 元素所在的位置：getInsertLocation(el)</h2>\n<p><code>const insertLocaltion = this.props.getInsertLocation(el);</code> 返回值<code>insertLocaltion</code>是 &quot;mainRoute&quot; | 与 showRightModal()的 modal 属性对应</p>\n<p>使用例子可参考如下的 getScrollAreaWrapperEl 中 demo 的代码</p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-getscrollareawrapperel-modal-\">获取滚动条区域的包裹元素：getScrollAreaWrapperEl(modal)</h2>\n<p>getScrollAreaWrapperEl 方法有一个参数，<code>modal</code>:哪个地方的滚动条: &quot;mainRoute&quot; | 与 showRightModal()的 modal 属性对应</p>\n<p>当需要某块内容绝对定位于主要内容之上，但不想受滚动条滚动时，可用这方法获取对应得<code>wrapperEl</code>，然后使用<code>ReactDOM.createPortal(内容, wrapperEl)</code>将内容插入到<code>wrapperEl</code>内</p>\n<h3 id=\"const-obj-this-props-getscrollareawrapperel-mainmodal-\">const obj= this.props.getScrollAreaWrapperEl(&quot;mainModal&quot;)</h3>\n<h3 id=\"obj-wrapperel-\">obj.wrapperEl : 滚动条区域的包裹元素</h3>\n<h3 id=\"obj-methods\">obj.methods</h3>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>用法</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>setScrollAreaStyle</td>\n            <td>设置滚动区域的style （除了 height属性）</td>\n            <td>obj.methods.setScrollAreaStyle({backgroundColor:\"#f0f0f0\"})</td>\n        </tr>\n        <tr>\n            <td>initScrollAreaSize</td>\n            <td>设置滚动区域的height</td>\n            <td>obj.methods.initScrollAreaSize(60)</td>\n        </tr>\n        <tr>\n            <td>setScrollAreaClassName</td>\n            <td>设置滚动区域的className</td>\n            <td>obj.methods.setScrollAreaClassName(`z-margin-10 z-flex`})</td>\n        </tr>\n        <tr>\n            <td>resetScrollArea</td>\n            <td>恢复到调用 setScrollAreaStyle 或 setScrollAreaClassName 之前的样式</td>\n            <td>obj.methods.resetScrollArea()</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-demo-box\" data-render=\"myWrapperDemo\" data-title=\"例如：使用ZeditSimpleFormHOC时，在pageCofig的panelAfterRender放入了如下代码的组件\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport ReactDom from &quot;react-dom&quot;;\nimport { ZerodMainContext } from &quot;zerod&quot;;\nclass MoreCofig extends ZpureComponent {\n    componentDidMount() {\n        // 首先得获取this.boxEl元素所在得位置\n        const insetLocaltion = this.props.getInsertLocation(this.boxEl);\n        // 获取insetLocaltion所在滚动区域得包裹元素\n        this.obj = this.props.getScrollAreaWrapperEl(insetLocaltion);\n        // 由于将 60px 高度的内容插入到滚动区域外边，\n        // 需要将 滚动区域 的高度计算为`calc(100% - ZpageHeader的高度 - 60px)`\n        this.obj.methods.initScrollAreaSize(60);\n        this.setState({});\n    }\n    componentWillUnmount() {\n        // 组件销毁前 恢复 滚动区域的原始样式\n        this.obj.methods.resetScrollArea();\n    }\n    render() {\n        return (\n            &lt;div className=&quot;z-panel z-margin-top-20&quot; ref={el =&gt; (this.boxEl = el)}&gt;\n                &lt;div className=&quot;z-panel-body&quot;&gt;panelAfterRender&lt;/div&gt;\n                {/* 将如下的内容插入到了 滚动条区域外面 不受滚动条影响 */}\n                {this.obj\n                    ? ReactDom.createPortal(\n                            &lt;div\n                                style={{\n                                    position: &quot;absolute&quot;,\n                                    bottom: &quot;0px&quot;,\n                                    width: &quot;100%&quot;,\n                                    height: &quot;60px&quot;,\n                                    backgroundColor: &quot;white&quot;,\n                                    borderTop: &quot;1px solid #ddd&quot;,\n                                }}\n                            &gt;\n                                内容\n                            &lt;/div&gt;,\n                            this.obj.wrapperEl,\n                      )\n                    : null}\n            &lt;/div&gt;\n        );\n    }\n}\nexport default ZerodMainContext.setConsumer(MoreCofig);</code></pre>\n<h2 id=\"-setscrolltotop-witch-\">下次滚动条更新的时候，让滚动条回到顶部: setScrollToTop(witch)</h2>\n<p>setScrollToTop 方法有一个参数，<code>witch</code>:哪个地方滚动条更新: &quot;mainRoute&quot; | 与 showRightModal()的 modal 属性对应</p>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"-getuserinfo-\">获取用户登录信息: getUserInfo()</h2>\n<p>ZmainHOC 的 componentDidMount 钩子中的 callback 回调注入的 userInfo 数据，可以通过 getUserInfo()获得</p>\n<h2 id=\"-settemporarystorage-data-gettemporarystorage-\">临时存储器: setTemporaryStorage(data) 和 getTemporaryStorage()</h2>\n<p>setTemporaryStorage(data)用于跨路由页面临时存储一些数据，data 参数是一个对象：{&quot;key&quot;:&quot;存储的数据&quot;}；getTemporaryStorage()获取当前存储器的数据</p>\n<h2 id=\"-router\">$router</h2>\n<p>$router:是一个对象，提供 history 和 location 属性</p>\n<h2 id=\"setinitdata-userinfo-menudata-mapkeys-mainroutes-\">setInitData(userInfo = {}, menuData = [], mapKeys={}, mainRoutes=[])</h2>\n<p><code>setInitData</code>就是 ZmainHOC 的 pageConfig 的 componentDidMount 的 callback 方法</p>\n";

/***/ }),

/***/ "IvrI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZeditSimpleFormHOC2 = _interopRequireDefault(__webpack_require__("4QcI"));

var _ZerodMainContext2 = _interopRequireDefault(__webpack_require__("MaNN"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf6 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _ZerodMainContext3 = _interopRequireDefault(__webpack_require__("9Q6a"));

var _pageConfig = _interopRequireDefault(__webpack_require__("Q7Bs"));

var AmdDocHOC = _loadHOC.default.AmdDocHOC,
    AshowDemoHOC = _loadHOC.default.AshowDemoHOC;

var ModalContent =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ModalContent, _React$PureComponent);

  function ModalContent() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ModalContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf6.default)(ModalContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function () {
      if (_this.props.closeModal) {
        _this.props.showRightModal({
          show: false,
          modal: _this.props.closeModalName
        });
      } else {
        _this.props.showRightModal({
          show: true,
          modal: _this.props.nextModalName,
          content: _this.props.nexModalContent,
          scroll: true,
          onTransitionend: function onTransitionend(show) {},
          wrapperEl: _this.props.wrapperEl
        });
      }
    };

    return _this;
  }

  (0, _createClass2.default)(ModalContent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "z-panel z-margin-bottom-15"
      }, _react.default.createElement("div", {
        className: "z-panel-heading"
      }, this.props.title ? this.props.title : "标题"), _react.default.createElement("div", {
        className: "z-panel-heading"
      }, this.props.content), _react.default.createElement("div", {
        className: "z-panel-heading"
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.onClick
      }, this.props.btnName)));
    }
  }]);
  return ModalContent;
}(_react.default.PureComponent);

ModalContent = _ZerodMainContext2.default.setConsumer(ModalContent);

var _default = AmdDocHOC(_ZerodMainContext3.default, {
  "open-modal": function openModal() {
    var OpenModal =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      (0, _inherits2.default)(OpenModal, _React$PureComponent2);

      function OpenModal() {
        var _getPrototypeOf3;

        var _this2;

        (0, _classCallCheck2.default)(this, OpenModal);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf6.default)(OpenModal)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.methods = {
          openMainModal: function openMainModal(e) {
            e.target._modal = "mainModal";

            e.target._render = function () {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ModalContent, {
                title: "\u8FD9\u91CC\u662F mainModal \u7A97\u53E3",
                content: "this.props.showRightModal({\n\t\t\t\t\t\t\t\t\t\tshow: true,\n\t\t\t\t\t\t\t\t\t\tmodal: \"mainModal_top\",\n\t\t\t\t\t\t\t\t\t\tcontent: <div className=\"z-panel\">\n\t\t\t\t\t\t\t\t\t\t<div className=\"z-panel-heading\">\u8FD9\u91CC\u662F mainModal_top \u7A97\u53E3</div>\n\t\t\t\t\t\t\t\t\t</div>,\n\t\t\t\t\t\t\t\t\t\tscroll: true,\n\t\t\t\t\t\t\t\t\t\tonTransitionend: (show) => {},\n\t\t\t\t\t\t\t\t\t});",
                btnName: "\u6253\u5F00\u4E0B\u4E00\u4E2A\u7A97\u53E3",
                nextModalName: "mainModal_top",
                nexModalContent: _react.default.createElement("div", {
                  className: "z-panel"
                }, _react.default.createElement("div", {
                  className: "z-panel-heading"
                }, "\u8FD9\u91CC\u662F mainModal_top \u7A97\u53E3"))
              }), _react.default.createElement(ModalContent, {
                title: "\u8FD9\u91CC\u662F mainModal \u7A97\u53E3",
                content: "this.props.showRightModal({\n\t\t\t\t\t\t\t\t\t\tshow: true,\n\t\t\t\t\t\t\t\t\t\tmodal: \"mainModal_body\",\n\t\t\t\t\t\t\t\t\t\tcontent: <div className=\"z-panel\">\n\t\t\t\t\t\t\t\t\t\t\t<div className=\"z-panel-heading\">\u8FD9\u91CC\u662F mainModal_body \u7A97\u53E3</div>\n\t\t\t\t\t\t\t\t\t\t</div>,\n\t\t\t\t\t\t\t\t\t\tscroll: true,\n\t\t\t\t\t\t\t\t\t\tonTransitionend: (show) => {},\n\t\t\t\t\t\t\t\t\t\twrapperEl: document.body,\n\t\t\t\t\t\t\t\t\t});",
                btnName: "\u6253\u5F00\u5728document.body\u7684\u7A97\u53E3",
                wrapperEl: document.body,
                nextModalName: "mainModal_body",
                nexModalContent: _react.default.createElement("div", {
                  className: "z-panel"
                }, _react.default.createElement("div", {
                  className: "z-panel-heading"
                }, "\u8FD9\u91CC\u662F mainModal_body \u7A97\u53E3"))
              }), _react.default.createElement(ModalContent, {
                title: "\u8FD9\u91CC\u662F mainModal \u7A97\u53E3",
                content: "this.props.showRightModal({\n\t\t\t\t\t\t\t\t\t\tshow: false,\n\t\t\t\t\t\t\t\t\t});",
                btnName: "\u5173\u95ED\u5F53\u524D\u7A97\u53E3",
                closeModal: true
              }));
            }; // this.props.showRightModal(
            // 	true,
            // 	"mainModal",
            // 	<div className="z-panel">
            // 		<div className="z-panel-heading">标题</div>
            // 		<div className="z-panel-heading">main子路由位置的右边窗口</div>
            // 	</div>,
            // );

          },
          openAppModal: function openAppModal(e) {
            e.target._modal = "appModal";

            e.target._render = function () {
              return _react.default.createElement(ModalContent, {
                content: "\u8FD9\u91CC\u662F appModal \u7A97\u53E3",
                btnName: "\u6253\u5F00 appModal_top \u7A97\u53E3",
                nextModalName: "appModal_top",
                nexModalContent: _react.default.createElement("div", {
                  className: "z-panel"
                }, _react.default.createElement("div", {
                  className: "z-panel-heading"
                }, "\u8FD9\u91CC\u662F appModal_top \u7A97\u53E3"))
              });
            }; // this.props.showRightModal(
            // 	true,
            // 	"appModal",
            // 	<div className="z-panel">
            // 		<div className="z-panel-heading">标题</div>
            // 		<div className="z-panel-heading">最外边的右边窗口</div>
            // 	</div>,
            // );

          }
        };
        return _this2;
      }

      (0, _createClass2.default)(OpenModal, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
            type: "primary",
            className: "z-open-modal-btn",
            onClick: this.methods.openMainModal
          }, "\u6253\u5F00 \"mainModal\" \u7A97\u53E3"));
        }
      }]);
      return OpenModal;
    }(_react.default.PureComponent);

    var OutPut = _ZerodMainContext2.default.setConsumer(OpenModal);

    return _react.default.createElement(OutPut, null);
  },
  "route-loading": function routeLoading() {
    var OpenModal =
    /*#__PURE__*/
    function (_React$PureComponent3) {
      (0, _inherits2.default)(OpenModal, _React$PureComponent3);

      function OpenModal() {
        var _getPrototypeOf4;

        var _this3;

        (0, _classCallCheck2.default)(this, OpenModal);

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this3 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf4 = (0, _getPrototypeOf6.default)(OpenModal)).call.apply(_getPrototypeOf4, [this].concat(args)));
        _this3.methods = {
          showRouteLoading: function showRouteLoading(e) {
            e.target._modal = "mainRoute";
          }
        };
        return _this3;
      }

      (0, _createClass2.default)(OpenModal, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
            type: "primary",
            className: "z-show-loading-btn",
            onClick: this.methods.showRouteLoading
          }, "\u663E\u793A \"mainRoute\" \u7684loading"));
        }
      }]);
      return OpenModal;
    }(_react.default.PureComponent);

    var OutPut = _ZerodMainContext2.default.setConsumer(OpenModal);

    return _react.default.createElement(OutPut, null);
  },
  "modal-loading": function modalLoading() {
    var OpenModal =
    /*#__PURE__*/
    function (_React$PureComponent4) {
      (0, _inherits2.default)(OpenModal, _React$PureComponent4);

      function OpenModal() {
        var _getPrototypeOf5;

        var _this4;

        (0, _classCallCheck2.default)(this, OpenModal);

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        _this4 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf5 = (0, _getPrototypeOf6.default)(OpenModal)).call.apply(_getPrototypeOf5, [this].concat(args)));
        _this4.methods = {
          showModalLoading: function showModalLoading(e, modal) {
            e.target._modal = modal;
          }
        };
        return _this4;
      }

      (0, _createClass2.default)(OpenModal, [{
        key: "render",
        value: function render() {
          var _this5 = this;

          return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
            type: "primary",
            className: "z-show-loading-btn",
            onClick: function onClick(e) {
              _this5.methods.showModalLoading(e, "mainModal");
            }
          }, "\u663E\u793A \"mainModal\" \u7684loading"));
        }
      }]);
      return OpenModal;
    }(_react.default.PureComponent);

    var OutPut = _ZerodMainContext2.default.setConsumer(OpenModal);

    return _react.default.createElement(OutPut, null);
  },
  myWrapperDemo: function myWrapperDemo() {
    var Com = (0, _ZeditSimpleFormHOC2.default)((0, _pageConfig.default)("add"));
    var MyScript = AshowDemoHOC(_react.default.createElement(Com, null), true);
    return _react.default.createElement(MyScript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "Revr":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./area.api.js": "eAri",
	"./config.api.js": "5WI2",
	"./login.api.js": "O3gd",
	"./scheduling.api.js": "Lwzs"
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
webpackContext.id = "Revr";

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
//# sourceMappingURL=22.98d61affd712181d4566.js.map