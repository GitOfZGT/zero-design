(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "87Bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dropdown = _interopRequireDefault(__webpack_require__("jsC+"));

var _menu = _interopRequireDefault(__webpack_require__("BvKs"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _ZroundingButton = __webpack_require__("yEMG");

var _Zbutton = __webpack_require__("nhtL");

var _zTool = __webpack_require__("/sSO");

__webpack_require__("5Qxo");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TreeTitle =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(TreeTitle, _React$PureComponent);

  function TreeTitle() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TreeTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TreeTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.hasMoreMenu = _this.props.moreBtnMap && _this.props.moreBtnMap.length;

    _this.moreMenu = function (record, index) {
      var tool = _this.props.tool;

      var onClick = _this.methods.handleMenuClick(record);

      var items = [];
      _this.hasMoreMenu && _this.props.moreBtnMap.forEach(function (item) {
        var show = item.show,
            disbaled = item.disbaled,
            name = item.name,
            others = (0, _objectWithoutProperties2.default)(item, ["show", "disbaled", "name"]);

        var _show = typeof show == "function" ? show(record, index, item, tool) : show === undefined ? true : show;

        var _disbaled = typeof disbaled == "function" ? disbaled(record, index, item, tool) : disbaled === undefined ? false : disbaled;

        if (_this.props.moreBtnType == "rounding") {
          items.push(_objectSpread({}, item, {
            show: _show,
            disabled: _disbaled,
            onClick: onClick
          }));
        } else if (_show) items.push(_react.default.createElement(_menu.default.Item, (0, _extends2.default)({
          disabled: _disbaled
        }, others), name));
      });
      return _this.props.moreBtnType == "rounding" ? items : items.length ? _react.default.createElement(_menu.default, {
        onClick: onClick
      }, items) : _react.default.createElement("span", null);
    };

    _this.methods = {
      handleMenuClick: function handleMenuClick(record) {
        return function (item) {
          _this.props.onMoreBtnClick && _this.props.onMoreBtnClick(item, record, _this.props.tool);
          item.domEvent.stopPropagation();
        };
      },
      detailBtnClick: function detailBtnClick(e) {
        _this.props.onDetailClick && _this.props.onDetailClick(_this.props.record);
        e.stopPropagation();
      },
      addChildBtnClick: function addChildBtnClick(e) {
        _this.props.onAddChildClick && _this.props.onAddChildClick(_this.props.record);
        e.stopPropagation();
      },
      updateBtnClick: function updateBtnClick(e) {
        _this.props.onUpdateClick && _this.props.onUpdateClick(_this.props.record);
        e.stopPropagation();
      },
      deleteBtnClick: function deleteBtnClick(e) {
        _this.props.onDeleteClick && _this.props.onDeleteClick(_this.props.record);
        e.stopPropagation();
      }
    };

    _this.getBtn = function (type, btnName, click, show, disabled) {
      var opt = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
      return show ? _react.default.createElement(_Zbutton.Zbutton, (0, _extends2.default)({
        onClick: click,
        size: "small",
        type: type,
        disabled: disabled
      }, opt), btnName) : null; // return show ? (
      // 	<Button disabled={disabled} type={type} size="small" onClick={click}>
      // 		{btnName}
      // 	</Button>
      // ) : null;
    };

    _this.onVisibleChange = function (show) {
      if (_this.moreIconEl) {
        show ? (0, _zTool.removeClass)(_this.moreIconEl, "is-down") : (0, _zTool.addClass)(_this.moreIconEl, "is-down");
      }
    };

    _this.nodeRef = _react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(TreeTitle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.nodeRef.current.firstElementChild.style.maxWidth = this.nodeRef.current.clientWidth - 464 + "px";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tool = this.props.tool;
      var _this$props = this.props,
          showDetailBtn = _this$props.showDetailBtn,
          showUpdateBtn = _this$props.showUpdateBtn,
          showAddChildBtn = _this$props.showAddChildBtn,
          showDeleteBtn = _this$props.showDeleteBtn,
          detailBtnDisabled = _this$props.detailBtnDisabled,
          updateBtnDisabled = _this$props.updateBtnDisabled,
          addChildBtnDisabled = _this$props.addChildBtnDisabled,
          deleteBtnDisabled = _this$props.deleteBtnDisabled,
          record = _this$props.record,
          index = _this$props.index;

      var _showDetailBtn = typeof showDetailBtn == "function" ? showDetailBtn(record, index, tool) : showDetailBtn;

      var _showUpdateBtn = typeof showUpdateBtn == "function" ? showUpdateBtn(record, index, tool) : showUpdateBtn;

      var _showAddChildBtn = typeof showAddChildBtn == "function" ? showAddChildBtn(record, index, tool) : showAddChildBtn;

      var _showDeleteBtn = typeof showDeleteBtn == "function" ? showDeleteBtn(record, index, tool) : showDeleteBtn;

      var _detailBtnDisabled = typeof detailBtnDisabled == "function" ? detailBtnDisabled(record, index, tool) : detailBtnDisabled;

      var _updateBtnDisabled = typeof updateBtnDisabled == "function" ? updateBtnDisabled(record, index, tool) : updateBtnDisabled;

      var _addChildBtnDisabled = typeof addChildBtnDisabled == "function" ? addChildBtnDisabled(record, index, tool) : addChildBtnDisabled;

      var _deleteBtnDisabled = typeof deleteBtnDisabled == "function" ? deleteBtnDisabled(record, index, tool) : deleteBtnDisabled;

      var moreBtn = _react.default.createElement(_Zbutton.Zbutton, {
        size: "small",
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      }, "\u66F4\u591A", _react.default.createElement("i", {
        className: "zero-icon zerod-up z-open-btn is-down",
        ref: function ref(el) {
          _this2.moreIconEl = el;
        }
      }));

      return _react.default.createElement("span", {
        className: "z-flex-space-between",
        ref: this.nodeRef
      }, _react.default.createElement("span", {
        className: "z-tree-title",
        title: this.props.name
      }, this.props.name), _react.default.createElement("span", {
        className: "z-tree-line"
      }), _react.default.createElement("span", {
        className: "z-tree-btns"
      }, this.getBtn("default", "详情", this.methods.detailBtnClick, _showDetailBtn, _detailBtnDisabled, {
        icon: "eye"
      }), this.getBtn("primary", "新增子节点", this.methods.addChildBtnClick, _showAddChildBtn, _addChildBtnDisabled, {
        icon: "branches"
      }), this.getBtn("primary", "修改", this.methods.updateBtnClick, _showUpdateBtn, _updateBtnDisabled, {
        icon: "edit"
      }), this.getBtn("danger", "删除", this.methods.deleteBtnClick, _showDeleteBtn, _deleteBtnDisabled, {
        icon: "delete"
      }), this.hasMoreMenu ? this.props.moreBtnType == "rounding" ? _react.default.createElement(_ZroundingButton.ZroundingButton, {
        items: this.moreMenu(record, index),
        onVisibleChange: this.onVisibleChange
      }, moreBtn) : _react.default.createElement(_dropdown.default, {
        key: "more",
        overlay: this.moreMenu(record, index),
        trigger: ["click"],
        placement: "bottomRight",
        onVisibleChange: this.onVisibleChange
      }, moreBtn) : null));
    }
  }]);
  return TreeTitle;
}(_react.default.PureComponent);

TreeTitle.propTypes = {
  tool: _propTypes.default.object,
  name: _propTypes.default.any,
  record: _propTypes.default.any,
  index: _propTypes.default.number,
  moreBtnType: _propTypes.default.string,
  moreBtnMap: _propTypes.default.arrayOf(_propTypes.default.object),
  onMoreBtnClick: _propTypes.default.func,
  onDetailClick: _propTypes.default.func,
  onAddChildClick: _propTypes.default.func,
  onUpdateClick: _propTypes.default.func,
  onDeleteClick: _propTypes.default.func,
  showDetailBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示详情按钮
  showAddChildBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示新增子节点按钮
  showUpdateBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示修改按钮
  showDeleteBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示删除按钮
  detailBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否禁用详情按钮
  addChildBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否禁用新增子节点按钮
  updateBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否禁用修改按钮
  deleteBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]) // 是否禁用删除按钮

};
var _default = TreeTitle;
exports.default = _default;

/***/ }),

/***/ "MJZm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: delegated ./node_modules/react/index.js from dll-reference _dll_vendor_3d2c9e3bcfbe3a2fd368
var reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368 = __webpack_require__("q1tI");
var reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default = /*#__PURE__*/__webpack_require__.n(reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368);

// EXTERNAL MODULE: delegated ./node_modules/prop-types/index.js from dll-reference _dll_vendor_3d2c9e3bcfbe3a2fd368
var prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368 = __webpack_require__("17x9");
var prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default = /*#__PURE__*/__webpack_require__.n(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: delegated ./node_modules/warning/warning.js from dll-reference _dll_vendor_3d2c9e3bcfbe3a2fd368
var warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368 = __webpack_require__("2W6z");
var warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default = /*#__PURE__*/__webpack_require__.n(warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368);

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: delegated ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js from dll-reference _dll_vendor_3d2c9e3bcfbe3a2fd368
var react_lifecycles_compat_esfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368 = __webpack_require__("VCL8");

// EXTERNAL MODULE: ./node_modules/@ant-design/create-react-context/lib/index.js
var lib = __webpack_require__("foW8");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/rc-tree/es/contextTypes.js

var TreeContext = lib_default()(null);
// EXTERNAL MODULE: ./node_modules/rc-animate/es/CSSMotion.js + 1 modules
var CSSMotion = __webpack_require__("lCnp");

// CONCATENATED MODULE: ./node_modules/rc-tree/es/TreeNode.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // @ts-ignore






var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';

var TreeNode_TreeNode =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TreeNode, _React$Component);

  function TreeNode() {
    var _this;

    _classCallCheck(this, TreeNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeNode).apply(this, arguments));
    _this.state = {
      dragNodeHighlight: false
    };

    _this.onSelectorClick = function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, _assertThisInitialized(_this));

      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };

    _this.onSelectorDoubleClick = function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, _assertThisInitialized(_this));
    };

    _this.onSelect = function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, _assertThisInitialized(_this));
    };

    _this.onCheck = function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
          disableCheckbox = _this$props.disableCheckbox,
          checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, _assertThisInitialized(_this), targetChecked);
    };

    _this.onMouseEnter = function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, _assertThisInitialized(_this));
    };

    _this.onMouseLeave = function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, _assertThisInitialized(_this));
    };

    _this.onContextMenu = function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, _assertThisInitialized(_this));
    };

    _this.onDragStart = function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: true
      });

      onNodeDragStart(e, _assertThisInitialized(_this));

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {// empty
      }
    };

    _this.onDragEnter = function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, _assertThisInitialized(_this));
    };

    _this.onDragOver = function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, _assertThisInitialized(_this));
    };

    _this.onDragLeave = function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, _assertThisInitialized(_this));
    };

    _this.onDragEnd = function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDragEnd(e, _assertThisInitialized(_this));
    };

    _this.onDrop = function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDrop(e, _assertThisInitialized(_this));
    }; // Disabled item still can be switch


    _this.onExpand = function (e) {
      var onNodeExpand = _this.props.context.onNodeExpand;
      onNodeExpand(e, _assertThisInitialized(_this));
    }; // Drag usage


    _this.setSelectHandle = function (node) {
      _this.selectHandle = node;
    };

    _this.getNodeChildren = function () {
      var children = _this.props.children;
      var originList = Object(toArray["a" /* default */])(children).filter(function (node) {
        return node;
      });
      var targetList = getNodeChildren(originList);

      if (originList.length !== targetList.length) {
        warnOnlyTreeNode();
      }

      return targetList;
    };

    _this.getNodeState = function () {
      var expanded = _this.props.expanded;

      if (_this.isLeaf()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    };

    _this.isLeaf = function () {
      var _this$props2 = _this.props,
          isLeaf = _this$props2.isLeaf,
          loaded = _this$props2.loaded;
      var loadData = _this.props.context.loadData;
      var hasChildren = _this.getNodeChildren().length !== 0;

      if (isLeaf === false) {
        return false;
      }

      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    };

    _this.isDisabled = function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled; // Follow the logic of Selectable

      if (disabled === false) {
        return false;
      }

      return !!(treeDisabled || disabled);
    };

    _this.isCheckable = function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable; // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    }; // Load data to avoid default expanded tree without data


    _this.syncLoadData = function (props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _this$props$context = _this.props.context,
          loadData = _this$props$context.loadData,
          onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) return; // read from state to avoid loadData at same time

      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        var hasChildren = _this.getNodeChildren().length !== 0;

        if (!hasChildren && !loaded) {
          onNodeLoad(_assertThisInitialized(_this));
        }
      }
    }; // Switcher


    _this.renderSwitcher = function () {
      var _this$props3 = _this.props,
          expanded = _this$props3.expanded,
          switcherIconFromProps = _this$props3.switcherIcon;
      var _this$props$context2 = _this.props.context,
          prefixCls = _this$props$context2.prefixCls,
          switcherIconFromCtx = _this$props$context2.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

      if (_this.isLeaf()) {
        return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
          className: classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, typeof switcherIcon === 'function' ? switcherIcon(_objectSpread({}, _this.props, {
          isLeaf: true
        })) : switcherIcon);
      }

      var switcherCls = classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, typeof switcherIcon === 'function' ? switcherIcon(_objectSpread({}, _this.props, {
        isLeaf: false
      })) : switcherIcon);
    }; // Checkbox


    _this.renderCheckbox = function () {
      var _this$props4 = _this.props,
          checked = _this$props4.checked,
          halfChecked = _this$props4.halfChecked,
          disableCheckbox = _this$props4.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;

      var disabled = _this.isDisabled();

      var checkable = _this.isCheckable();

      if (!checkable) return null; // [Legacy] Custom element should be separate with `checkable` in future

      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
        className: classnames_default()("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    };

    _this.renderIcon = function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
        className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    }; // Icon + Title


    _this.renderSelector = function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props5 = _this.props,
          title = _this$props5.title,
          selected = _this$props5.selected,
          icon = _this$props5.icon,
          loading = _this$props5.loading;
      var _this$props$context3 = _this.props.context,
          prefixCls = _this$props$context3.prefixCls,
          showIcon = _this$props$context3.showIcon,
          treeIcon = _this$props$context3.icon,
          draggable = _this$props$context3.draggable,
          loadData = _this$props$context3.loadData;

      var disabled = _this.isDisabled();

      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
          className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      } // Title


      var $title = reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
        className: "".concat(prefixCls, "-title")
      }, title);
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames_default()("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected"), !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        "aria-grabbed": !disabled && draggable || undefined,
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick,
        onDragStart: draggable ? _this.onDragStart : undefined
      }, $icon, $title);
    }; // Children list wrapped with `Animation`


    _this.renderChildren = function () {
      var _this$props6 = _this.props,
          expanded = _this$props6.expanded,
          pos = _this$props6.pos;
      var _this$props$context4 = _this.props.context,
          prefixCls = _this$props$context4.prefixCls,
          motion = _this$props$context4.motion,
          renderTreeNode = _this$props$context4.renderTreeNode; // Children TreeNode

      var nodeList = _this.getNodeChildren();

      if (nodeList.length === 0) {
        return null;
      }

      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](CSSMotion["b" /* default */], Object.assign({
        visible: expanded
      }, motion), function (_ref) {
        var style = _ref.style,
            className = _ref.className;
        return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("ul", {
          className: classnames_default()(className, "".concat(prefixCls, "-child-tree"), expanded && "".concat(prefixCls, "-child-tree-open")),
          style: style,
          "data-expanded": expanded,
          role: "group"
        }, mapChildren(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        }));
      });
    };

    return _this;
  } // Isomorphic needn't load data in server side


  _createClass(TreeNode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          eventKey = _this$props7.eventKey,
          registerTreeNode = _this$props7.context.registerTreeNode;
      this.syncLoadData(this.props);
      registerTreeNode(eventKey, this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props8 = this.props,
          eventKey = _this$props8.eventKey,
          registerTreeNode = _this$props8.context.registerTreeNode;
      registerTreeNode(eventKey, null);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable; // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var loading = this.props.loading;

      var _this$props9 = this.props,
          className = _this$props9.className,
          style = _this$props9.style,
          dragOver = _this$props9.dragOver,
          dragOverGapTop = _this$props9.dragOverGapTop,
          dragOverGapBottom = _this$props9.dragOverGapBottom,
          isLeaf = _this$props9.isLeaf,
          expanded = _this$props9.expanded,
          selected = _this$props9.selected,
          checked = _this$props9.checked,
          halfChecked = _this$props9.halfChecked,
          otherProps = _objectWithoutProperties(_this$props9, ["className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "expanded", "selected", "checked", "halfChecked"]);

      var _this$props$context5 = this.props.context,
          prefixCls = _this$props$context5.prefixCls,
          filterTreeNode = _this$props$context5.filterTreeNode,
          draggable = _this$props$context5.draggable;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = getDataAndAria(otherProps);
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("li", Object.assign({
        className: classnames_default()(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), _defineProperty(_classNames, 'drag-over', !disabled && dragOver), _defineProperty(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), _defineProperty(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), _defineProperty(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),
        style: style,
        role: "treeitem",
        onDragEnter: draggable ? this.onDragEnter : undefined,
        onDragOver: draggable ? this.onDragOver : undefined,
        onDragLeave: draggable ? this.onDragLeave : undefined,
        onDrop: draggable ? this.onDrop : undefined,
        onDragEnd: draggable ? this.onDragEnd : undefined
      }, dataOrAriaAttributeProps), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector(), this.renderChildren());
    }
  }]);

  return TreeNode;
}(reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["Component"]);

TreeNode_TreeNode.propTypes = {
  eventKey: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string,
  prefixCls: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string,
  className: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string,
  style: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.object,
  onSelect: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  // By parent
  expanded: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  selected: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  checked: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  loaded: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  loading: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  halfChecked: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  children: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.node,
  title: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.node,
  pos: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string,
  dragOver: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  dragOverGapTop: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  dragOverGapBottom: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  // By user
  isLeaf: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  checkable: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  selectable: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  disabled: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  disableCheckbox: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  icon: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.node, prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func]),
  switcherIcon: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.node, prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func])
};
Object(react_lifecycles_compat_esfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["polyfill"])(TreeNode_TreeNode);

var TreeNode_ContextTreeNode = function ContextTreeNode(props) {
  return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](TreeContext.Consumer, null, function (context) {
    return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](TreeNode_TreeNode, Object.assign({}, props, {
      context: context
    }));
  });
};

TreeNode_ContextTreeNode.defaultProps = {
  title: defaultTitle
};
TreeNode_ContextTreeNode.isTreeNode = 1;

/* harmony default export */ var es_TreeNode = (TreeNode_ContextTreeNode);
// CONCATENATED MODULE: ./node_modules/rc-tree/es/util.js
function util_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { util_typeof = function _typeof(obj) { return typeof obj; }; } else { util_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return util_typeof(obj); }

function util_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = util_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function util_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;
var onlyTreeNodeWarned = false;
function warnOnlyTreeNode() {
  if (onlyTreeNodeWarned) return;
  onlyTreeNodeWarned = true;
  warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default()(false, 'Tree only accept TreeNode as children.');
}
function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);

  if (index >= 0) {
    clone.splice(index, 1);
  }

  return clone;
}
function arrAdd(list, value) {
  var clone = list.slice();

  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }

  return clone;
}
function posToArr(pos) {
  return pos.split('-');
}
function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getNodeChildren(children) {
  return Object(toArray["a" /* default */])(children).filter(isTreeNode);
}
function isCheckDisabled(node) {
  var _ref = node.props || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox,
      checkable = _ref.checkable;

  return !!(disabled || disableCheckbox) || checkable === false;
}
function traverseTreeNodes(treeNodes, callback) {
  function processNode(node, index, parent) {
    var children = node ? node.props.children : treeNodes;
    var pos = node ? getPosition(parent.pos, index) : 0; // Filter children

    var childList = getNodeChildren(children); // Process node if is not root

    if (node) {
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: node.key || pos,
        parentPos: parent.node ? parent.pos : null
      };
      callback(data);
    } // Process children node


    reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["Children"].forEach(childList, function (subNode, subIndex) {
      processNode(subNode, subIndex, {
        node: node,
        pos: pos
      });
    });
  }

  processNode(null);
}
/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */

function mapChildren(children, func) {
  var list = Object(toArray["a" /* default */])(children).map(func);

  if (list.length === 1) {
    return list[0];
  }

  return list;
}
function getDragNodesKeys(treeNodes, node) {
  var _node$props = node.props,
      eventKey = _node$props.eventKey,
      pos = _node$props.pos;
  var dragNodesKeys = [];
  traverseTreeNodes(treeNodes, function (_ref2) {
    var key = _ref2.key;
    dragNodesKeys.push(key);
  });
  dragNodesKeys.push(eventKey || pos);
  return dragNodesKeys;
} // Only used when drag, not affect SSR.

function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  }

  if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */

function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }

  return selectedKeys;
}
/**
 * Since React internal will convert key to string,
 * we need do this to avoid `checkStrictly` use number match
 */

function keyListToString(keyList) {
  if (!keyList) return keyList;
  return keyList.map(function (key) {
    return String(key);
  });
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};

function convertDataToTree(treeData, processor) {
  if (!treeData) return [];

  var _ref3 = processor || {},
      _ref3$processProps = _ref3.processProps,
      processProps = _ref3$processProps === void 0 ? internalProcessProps : _ref3$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref4) {
    var children = _ref4.children,
        props = util_objectWithoutProperties(_ref4, ["children"]);

    var childrenNodes = convertDataToTree(children, processor);
    return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.createElement(es_TreeNode, Object.assign({}, processProps(props)), childrenNodes);
  });
}
/**
 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
 * @param treeNodes
 * @param processTreeEntity  User can customize the entity
 */

function convertTreeToEntities(treeNodes) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref5.initWrapper,
      processEntity = _ref5.processEntity,
      onProcessFinished = _ref5.onProcessFinished;

  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseTreeNodes(treeNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos;
    var entity = {
      node: node,
      index: index,
      key: key,
      pos: pos
    };
    posEntities[pos] = entity;
    keyEntities[key] = entity; // Fill children

    entity.parent = posEntities[parentPos];

    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */

function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  } // Convert keys to object format


  var keyProps;

  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (util_typeof(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default()(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);
  return keyProps;
}
/**
 * Conduct check state by the keyList. It will conduct up & from the provided key.
 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
 */

function conductCheck(
/** list of keys */
keyList,
/** is check the node or not */
isCheck,
/** parsed by `convertTreeToEntities` function in Tree */
keyEntities) {
  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var checkedKeys = {};
  var halfCheckedKeys = {}; // Record the key has some child checked (include child half checked)

  (checkStatus.checkedKeys || []).forEach(function (key) {
    checkedKeys[key] = true;
  });
  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
    halfCheckedKeys[key] = true;
  }); // Conduct up

  function conductUp(key) {
    if (checkedKeys[key] === isCheck) return;
    var entity = keyEntities[key];
    if (!entity) return;
    var children = entity.children,
        parent = entity.parent,
        node = entity.node;
    if (isCheckDisabled(node)) return; // Check child node checked status

    var everyChildChecked = true;
    var someChildChecked = false; // Child checked or half checked

    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (_ref6) {
      var childKey = _ref6.key;
      var childChecked = checkedKeys[childKey];
      var childHalfChecked = halfCheckedKeys[childKey];
      if (childChecked || childHalfChecked) someChildChecked = true;
      if (!childChecked) everyChildChecked = false;
    }); // Update checked status

    if (isCheck) {
      checkedKeys[key] = everyChildChecked;
    } else {
      checkedKeys[key] = false;
    }

    halfCheckedKeys[key] = someChildChecked;

    if (parent) {
      conductUp(parent.key);
    }
  } // Conduct down


  function conductDown(key) {
    if (checkedKeys[key] === isCheck) return;
    var entity = keyEntities[key];
    if (!entity) return;
    var children = entity.children,
        node = entity.node;
    if (isCheckDisabled(node)) return;
    checkedKeys[key] = isCheck;
    (children || []).forEach(function (child) {
      conductDown(child.key);
    });
  }

  function conduct(key) {
    var entity = keyEntities[key];

    if (!entity) {
      warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default()(false, "'".concat(key, "' does not exist in the tree."));
      return;
    }

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;
    checkedKeys[key] = isCheck;
    if (isCheckDisabled(node)) return; // Conduct down

    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (child) {
      conductDown(child.key);
    }); // Conduct up

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conduct(key);
  });
  var checkedKeyList = [];
  var halfCheckedKeyList = []; // Fill checked list

  Object.keys(checkedKeys).forEach(function (key) {
    if (checkedKeys[key]) {
      checkedKeyList.push(key);
    }
  }); // Fill half checked list

  Object.keys(halfCheckedKeys).forEach(function (key) {
    if (!checkedKeys[key] && halfCheckedKeys[key]) {
      halfCheckedKeyList.push(key);
    }
  });
  return {
    checkedKeys: checkedKeyList,
    halfCheckedKeys: halfCheckedKeyList
  };
}
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */

function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = {};

  function conductUp(key) {
    if (expandedKeys[key]) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys[key] = true;
    var parent = entity.parent,
        node = entity.node;
    if (node.props && node.props.disabled) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return Object.keys(expandedKeys);
}
/**
 * Returns only the data- and aria- key/value pairs
 */

function getDataAndAria(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      prev[key] = props[key];
    }

    return prev;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/rc-tree/es/Tree.js
function Tree_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Tree_typeof = function _typeof(obj) { return typeof obj; }; } else { Tree_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Tree_typeof(obj); }

function Tree_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Tree_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tree_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tree_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tree_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tree_defineProperties(Constructor, staticProps); return Constructor; }

function Tree_possibleConstructorReturn(self, call) { if (call && (Tree_typeof(call) === "object" || typeof call === "function")) { return call; } return Tree_assertThisInitialized(self); }

function Tree_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Tree_getPrototypeOf(o) { Tree_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tree_getPrototypeOf(o); }

function Tree_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Tree_setPrototypeOf(subClass, superClass); }

function Tree_setPrototypeOf(o, p) { Tree_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tree_setPrototypeOf(o, p); }










var Tree_Tree =
/*#__PURE__*/
function (_React$Component) {
  Tree_inherits(Tree, _React$Component);

  function Tree() {
    var _this;

    Tree_classCallCheck(this, Tree);

    _this = Tree_possibleConstructorReturn(this, Tree_getPrototypeOf(Tree).apply(this, arguments));
    /** Internal usage for `rc-tree-select`, we don't promise it will not change. */

    _this.domTreeNodes = {};
    _this.state = {
      keyEntities: {},
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      dragNodesKeys: [],
      dragOverNodeKey: null,
      dropPosition: null,
      treeNode: [],
      prevProps: null
    };

    _this.onNodeDragStart = function (event, node) {
      var expandedKeys = _this.state.expandedKeys;
      var onDragStart = _this.props.onDragStart;
      var _node$props = node.props,
          eventKey = _node$props.eventKey,
          children = _node$props.children;
      _this.dragNode = node;

      _this.setState({
        dragNodesKeys: getDragNodesKeys(children, node),
        expandedKeys: arrDel(expandedKeys, eventKey)
      });

      if (onDragStart) {
        onDragStart({
          event: event,
          node: node
        });
      }
    };
    /**
     * [Legacy] Select handler is less small than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */


    _this.onNodeDragEnter = function (event, node) {
      var expandedKeys = _this.state.expandedKeys;
      var onDragEnter = _this.props.onDragEnter;
      var _node$props2 = node.props,
          pos = _node$props2.pos,
          eventKey = _node$props2.eventKey;
      if (!_this.dragNode) return;
      var dropPosition = calcDropPosition(event, node); // Skip if drag node is self

      if (_this.dragNode.props.eventKey === eventKey && dropPosition === 0) {
        _this.setState({
          dragOverNodeKey: '',
          dropPosition: null
        });

        return;
      } // Ref: https://github.com/react-component/tree/issues/132
      // Add timeout to let onDragLevel fire before onDragEnter,
      // so that we can clean drag props for onDragLeave node.
      // Macro task for this:
      // https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script


      setTimeout(function () {
        // Update drag over node
        _this.setState({
          dragOverNodeKey: eventKey,
          dropPosition: dropPosition
        }); // Side effect for delay drag


        if (!_this.delayedDragEnterLogic) {
          _this.delayedDragEnterLogic = {};
        }

        Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
          clearTimeout(_this.delayedDragEnterLogic[key]);
        });
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function () {
          var newExpandedKeys = arrAdd(expandedKeys, eventKey);

          if (!('expandedKeys' in _this.props)) {
            _this.setState({
              expandedKeys: newExpandedKeys
            });
          }

          if (onDragEnter) {
            onDragEnter({
              event: event,
              node: node,
              expandedKeys: newExpandedKeys
            });
          }
        }, 400);
      }, 0);
    };

    _this.onNodeDragOver = function (event, node) {
      var onDragOver = _this.props.onDragOver;
      var eventKey = node.props.eventKey; // Update drag position

      if (_this.dragNode && eventKey === _this.state.dragOverNodeKey) {
        var dropPosition = calcDropPosition(event, node);
        if (dropPosition === _this.state.dropPosition) return;

        _this.setState({
          dropPosition: dropPosition
        });
      }

      if (onDragOver) {
        onDragOver({
          event: event,
          node: node
        });
      }
    };

    _this.onNodeDragLeave = function (event, node) {
      var onDragLeave = _this.props.onDragLeave;

      _this.setState({
        dragOverNodeKey: ''
      });

      if (onDragLeave) {
        onDragLeave({
          event: event,
          node: node
        });
      }
    };

    _this.onNodeDragEnd = function (event, node) {
      var onDragEnd = _this.props.onDragEnd;

      _this.setState({
        dragOverNodeKey: ''
      });

      if (onDragEnd) {
        onDragEnd({
          event: event,
          node: node
        });
      }

      _this.dragNode = null;
    };

    _this.onNodeDrop = function (event, node) {
      var _this$state = _this.state,
          _this$state$dragNodes = _this$state.dragNodesKeys,
          dragNodesKeys = _this$state$dragNodes === void 0 ? [] : _this$state$dragNodes,
          dropPosition = _this$state.dropPosition;
      var onDrop = _this.props.onDrop;
      var _node$props3 = node.props,
          eventKey = _node$props3.eventKey,
          pos = _node$props3.pos;

      _this.setState({
        dragOverNodeKey: ''
      });

      if (dragNodesKeys.indexOf(eventKey) !== -1) {
        warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default()(false, "Can not drop to dragNode(include it's children node)");
        return;
      }

      var posArr = posToArr(pos);
      var dropResult = {
        event: event,
        node: node,
        dragNode: _this.dragNode,
        dragNodesKeys: dragNodesKeys.slice(),
        dropPosition: dropPosition + Number(posArr[posArr.length - 1]),
        dropToGap: false
      };

      if (dropPosition !== 0) {
        dropResult.dropToGap = true;
      }

      if (onDrop) {
        onDrop(dropResult);
      }

      _this.dragNode = null;
    };

    _this.onNodeClick = function (e, treeNode) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e, treeNode);
      }
    };

    _this.onNodeDoubleClick = function (e, treeNode) {
      var onDoubleClick = _this.props.onDoubleClick;

      if (onDoubleClick) {
        onDoubleClick(e, treeNode);
      }
    };

    _this.onNodeSelect = function (e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var keyEntities = _this.state.keyEntities;
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          multiple = _this$props.multiple;
      var _treeNode$props = treeNode.props,
          selected = _treeNode$props.selected,
          eventKey = _treeNode$props.eventKey;
      var targetSelected = !selected; // Update selected keys

      if (!targetSelected) {
        selectedKeys = arrDel(selectedKeys, eventKey);
      } else if (!multiple) {
        selectedKeys = [eventKey];
      } else {
        selectedKeys = arrAdd(selectedKeys, eventKey);
      } // [Legacy] Not found related usage in doc or upper libs


      var selectedNodes = selectedKeys.map(function (key) {
        var entity = keyEntities[key];
        if (!entity) return null;
        return entity.node;
      }).filter(function (node) {
        return node;
      });

      _this.setUncontrolledState({
        selectedKeys: selectedKeys
      });

      if (onSelect) {
        onSelect(selectedKeys, {
          event: 'select',
          selected: targetSelected,
          node: treeNode,
          selectedNodes: selectedNodes,
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.onNodeCheck = function (e, treeNode, checked) {
      var _this$state2 = _this.state,
          keyEntities = _this$state2.keyEntities,
          oriCheckedKeys = _this$state2.checkedKeys,
          oriHalfCheckedKeys = _this$state2.halfCheckedKeys;
      var _this$props2 = _this.props,
          checkStrictly = _this$props2.checkStrictly,
          onCheck = _this$props2.onCheck;
      var eventKey = treeNode.props.eventKey; // Prepare trigger arguments

      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e.nativeEvent
      };

      if (checkStrictly) {
        var checkedKeys = checked ? arrAdd(oriCheckedKeys, eventKey) : arrDel(oriCheckedKeys, eventKey);
        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, eventKey);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function (key) {
          return keyEntities[key];
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });

        _this.setUncontrolledState({
          checkedKeys: checkedKeys
        });
      } else {
        var _conductCheck = conductCheck([eventKey], checked, keyEntities, {
          checkedKeys: oriCheckedKeys,
          halfCheckedKeys: oriHalfCheckedKeys
        }),
            _checkedKeys = _conductCheck.checkedKeys,
            _halfCheckedKeys = _conductCheck.halfCheckedKeys;

        checkedObj = _checkedKeys; // [Legacy] This is used for `rc-tree-select`

        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;

        _checkedKeys.forEach(function (key) {
          var entity = keyEntities[key];
          if (!entity) return;
          var node = entity.node,
              pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node: node,
            pos: pos
          });
        });

        _this.setUncontrolledState({
          checkedKeys: _checkedKeys,
          halfCheckedKeys: _halfCheckedKeys
        });
      }

      if (onCheck) {
        onCheck(checkedObj, eventObj);
      }
    };

    _this.onNodeLoad = function (treeNode) {
      return new Promise(function (resolve) {
        // We need to get the latest state of loading/loaded keys
        _this.setState(function (_ref) {
          var _ref$loadedKeys = _ref.loadedKeys,
              loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys,
              _ref$loadingKeys = _ref.loadingKeys,
              loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props3 = _this.props,
              loadData = _this$props3.loadData,
              onLoad = _this$props3.onLoad;
          var eventKey = treeNode.props.eventKey;

          if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
            // react 15 will warn if return null
            return {};
          } // Process load data


          var promise = loadData(treeNode);
          promise.then(function () {
            var _this$state3 = _this.state,
                currentLoadedKeys = _this$state3.loadedKeys,
                currentLoadingKeys = _this$state3.loadingKeys;
            var newLoadedKeys = arrAdd(currentLoadedKeys, eventKey);
            var newLoadingKeys = arrDel(currentLoadingKeys, eventKey); // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464

            if (onLoad) {
              onLoad(newLoadedKeys, {
                event: 'load',
                node: treeNode
              });
            }

            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });

            _this.setState({
              loadingKeys: newLoadingKeys
            });

            resolve();
          });
          return {
            loadingKeys: arrAdd(loadingKeys, eventKey)
          };
        });
      });
    };

    _this.onNodeExpand = function (e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$props4 = _this.props,
          onExpand = _this$props4.onExpand,
          loadData = _this$props4.loadData;
      var _treeNode$props2 = treeNode.props,
          eventKey = _treeNode$props2.eventKey,
          expanded = _treeNode$props2.expanded; // Update selected keys

      var index = expandedKeys.indexOf(eventKey);
      var targetExpanded = !expanded;
      warningfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default()(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

      if (targetExpanded) {
        expandedKeys = arrAdd(expandedKeys, eventKey);
      } else {
        expandedKeys = arrDel(expandedKeys, eventKey);
      }

      _this.setUncontrolledState({
        expandedKeys: expandedKeys
      });

      if (onExpand) {
        onExpand(expandedKeys, {
          node: treeNode,
          expanded: targetExpanded,
          nativeEvent: e.nativeEvent
        });
      } // Async Load data


      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);

        return loadPromise ? loadPromise.then(function () {
          // [Legacy] Refresh logic
          _this.setUncontrolledState({
            expandedKeys: expandedKeys
          });
        }) : null;
      }

      return null;
    };

    _this.onNodeMouseEnter = function (event, node) {
      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter({
          event: event,
          node: node
        });
      }
    };

    _this.onNodeMouseLeave = function (event, node) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (onMouseLeave) {
        onMouseLeave({
          event: event,
          node: node
        });
      }
    };

    _this.onNodeContextMenu = function (event, node) {
      var onRightClick = _this.props.onRightClick;

      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event: event,
          node: node
        });
      }
    };
    /**
     * Only update the value which is not in props
     */


    _this.setUncontrolledState = function (state) {
      var needSync = false;
      var newState = {};
      Object.keys(state).forEach(function (name) {
        if (name in _this.props) return;
        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        _this.setState(newState);
      }
    };

    _this.registerTreeNode = function (key, node) {
      if (node) {
        _this.domTreeNodes[key] = node;
      } else {
        delete _this.domTreeNodes[key];
      }
    };

    _this.isKeyChecked = function (key) {
      var _this$state$checkedKe = _this.state.checkedKeys,
          checkedKeys = _this$state$checkedKe === void 0 ? [] : _this$state$checkedKe;
      return checkedKeys.indexOf(key) !== -1;
    };
    /**
     * [Legacy] Original logic use `key` as tracking clue.
     * We have to use `cloneElement` to pass `key`.
     */


    _this.renderTreeNode = function (child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var _this$state4 = _this.state,
          keyEntities = _this$state4.keyEntities,
          _this$state4$expanded = _this$state4.expandedKeys,
          expandedKeys = _this$state4$expanded === void 0 ? [] : _this$state4$expanded,
          _this$state4$selected = _this$state4.selectedKeys,
          selectedKeys = _this$state4$selected === void 0 ? [] : _this$state4$selected,
          _this$state4$halfChec = _this$state4.halfCheckedKeys,
          halfCheckedKeys = _this$state4$halfChec === void 0 ? [] : _this$state4$halfChec,
          _this$state4$loadedKe = _this$state4.loadedKeys,
          loadedKeys = _this$state4$loadedKe === void 0 ? [] : _this$state4$loadedKe,
          _this$state4$loadingK = _this$state4.loadingKeys,
          loadingKeys = _this$state4$loadingK === void 0 ? [] : _this$state4$loadingK,
          dragOverNodeKey = _this$state4.dragOverNodeKey,
          dropPosition = _this$state4.dropPosition;
      var pos = getPosition(level, index);
      var key = child.key || pos;

      if (!keyEntities[key]) {
        warnOnlyTreeNode();
        return null;
      }

      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["cloneElement"](child, {
        key: key,
        eventKey: key,
        expanded: expandedKeys.indexOf(key) !== -1,
        selected: selectedKeys.indexOf(key) !== -1,
        loaded: loadedKeys.indexOf(key) !== -1,
        loading: loadingKeys.indexOf(key) !== -1,
        checked: _this.isKeyChecked(key),
        halfChecked: halfCheckedKeys.indexOf(key) !== -1,
        pos: pos,
        // [Legacy] Drag props
        dragOver: dragOverNodeKey === key && dropPosition === 0,
        dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
        dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
      });
    };

    return _this;
  }

  Tree_createClass(Tree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var treeNode = this.state.treeNode;
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          className = _this$props5.className,
          focusable = _this$props5.focusable,
          style = _this$props5.style,
          showLine = _this$props5.showLine,
          _this$props5$tabIndex = _this$props5.tabIndex,
          tabIndex = _this$props5$tabIndex === void 0 ? 0 : _this$props5$tabIndex,
          selectable = _this$props5.selectable,
          showIcon = _this$props5.showIcon,
          icon = _this$props5.icon,
          switcherIcon = _this$props5.switcherIcon,
          draggable = _this$props5.draggable,
          checkable = _this$props5.checkable,
          checkStrictly = _this$props5.checkStrictly,
          disabled = _this$props5.disabled,
          motion = _this$props5.motion,
          loadData = _this$props5.loadData,
          filterTreeNode = _this$props5.filterTreeNode;
      var domProps = getDataAndAria(this.props);

      if (focusable) {
        domProps.tabIndex = tabIndex;
      }

      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](TreeContext.Provider, {
        value: {
          prefixCls: prefixCls,
          selectable: selectable,
          showIcon: showIcon,
          icon: icon,
          switcherIcon: switcherIcon,
          draggable: draggable,
          checkable: checkable,
          checkStrictly: checkStrictly,
          disabled: disabled,
          motion: motion,
          loadData: loadData,
          filterTreeNode: filterTreeNode,
          renderTreeNode: this.renderTreeNode,
          isKeyChecked: this.isKeyChecked,
          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop,
          registerTreeNode: this.registerTreeNode
        }
      }, reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("ul", Object.assign({}, domProps, {
        className: classnames_default()(prefixCls, className, Tree_defineProperty({}, "".concat(prefixCls, "-show-line"), showLine)),
        style: style,
        role: "tree",
        unselectable: "on"
      }), mapChildren(treeNode, function (node, index) {
        return _this2.renderTreeNode(node, index);
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: props
      };

      function needSync(name) {
        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
      } // ================== Tree Node ==================


      var treeNode = null; // Check if `treeData` or `children` changed and save into the state.

      if (needSync('treeData')) {
        treeNode = convertDataToTree(props.treeData);
      } else if (needSync('children')) {
        treeNode = Object(toArray["a" /* default */])(props.children);
      } // Tree support filter function which will break the tree structure in the vdm.
      // We cache the treeNodes in state so that we can return the treeNode in event trigger.


      if (treeNode) {
        newState.treeNode = treeNode; // Calculate the entities data for quick match

        var entitiesMap = convertTreeToEntities(treeNode);
        newState.keyEntities = entitiesMap.keyEntities;
      }

      var keyEntities = newState.keyEntities || prevState.keyEntities; // ================ expandedKeys =================

      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        newState.expandedKeys = Object.keys(keyEntities);
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      } // ================ selectedKeys =================


      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      } // ================= checkedKeys =================


      if (props.checkable) {
        var checkedKeyEntity;

        if (needSync('checkedKeys')) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeNode) {
          // If treeNode changed, we also need check it
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }

        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
              _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
              checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
              _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
              halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;

          if (!props.checkStrictly) {
            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }

          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      } // ================= loadedKeys ==================


      if (needSync('loadedKeys')) {
        newState.loadedKeys = props.loadedKeys;
      }

      return newState;
    }
  }]);

  return Tree;
}(reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["Component"]);

Tree_Tree.propTypes = {
  prefixCls: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string,
  className: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string,
  style: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.object,
  tabIndex: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string, prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.number]),
  children: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.any,
  treeData: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.array,
  showLine: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  showIcon: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  icon: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.node, prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func]),
  focusable: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  selectable: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  disabled: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  multiple: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  checkable: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool, prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.node]),
  checkStrictly: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  draggable: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  defaultExpandParent: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  autoExpandParent: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  defaultExpandAll: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.bool,
  defaultExpandedKeys: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.arrayOf(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string),
  expandedKeys: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.arrayOf(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string),
  defaultCheckedKeys: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.arrayOf(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string),
  checkedKeys: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.arrayOf(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string, prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.number])), prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.object]),
  defaultSelectedKeys: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.arrayOf(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string),
  selectedKeys: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.arrayOf(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string),
  onClick: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onDoubleClick: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onExpand: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onCheck: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onSelect: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onLoad: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  loadData: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  loadedKeys: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.arrayOf(prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.string),
  onMouseEnter: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onMouseLeave: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onRightClick: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onDragStart: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onDragEnter: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onDragOver: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onDragLeave: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onDragEnd: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  onDrop: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  filterTreeNode: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func,
  motion: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.object,
  switcherIcon: prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.oneOfType([prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.node, prop_typesfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default.a.func])
};
Tree_Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: []
};
Object(react_lifecycles_compat_esfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["polyfill"])(Tree_Tree);
/* harmony default export */ var es_Tree = (Tree_Tree);
// CONCATENATED MODULE: ./node_modules/rc-tree/es/index.js


var rc_tree_es_Tree = es_Tree;
rc_tree_es_Tree.TreeNode = es_TreeNode;

/* harmony default export */ var es = (rc_tree_es_Tree);
// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var omit_js_es = __webpack_require__("BGR+");

// EXTERNAL MODULE: delegated ./node_modules/lodash/debounce.js from dll-reference _dll_vendor_3d2c9e3bcfbe3a2fd368
var debouncefrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368 = __webpack_require__("sEfC");
var debouncefrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default = /*#__PURE__*/__webpack_require__.n(debouncefrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 2 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/tree/util.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var Record;

(function (Record) {
  Record[Record["None"] = 0] = "None";
  Record[Record["Start"] = 1] = "Start";
  Record[Record["End"] = 2] = "End";
})(Record || (Record = {})); // TODO: Move this logic into `rc-tree`


function traverseNodesKey(rootChildren, callback) {
  var nodeList = getNodeChildren(rootChildren) || [];

  function processNode(node) {
    var key = node.key,
        children = node.props.children;

    if (callback(key, node) !== false) {
      traverseNodesKey(children, callback);
    }
  }

  nodeList.forEach(processNode);
}

function getFullKeyList(children) {
  var _convertTreeToEntitie = convertTreeToEntities(children),
      keyEntities = _convertTreeToEntitie.keyEntities;

  return Object.keys(keyEntities);
}
/** 计算选中范围，只考虑expanded情况以优化性能 */

function calcRangeKeys(rootChildren, expandedKeys, startKey, endKey) {
  var keys = [];
  var record = Record.None;

  if (startKey && startKey === endKey) {
    return [startKey];
  }

  if (!startKey || !endKey) {
    return [];
  }

  function matchKey(key) {
    return key === startKey || key === endKey;
  }

  traverseNodesKey(rootChildren, function (key) {
    if (record === Record.End) {
      return false;
    }

    if (matchKey(key)) {
      // Match test
      keys.push(key);

      if (record === Record.None) {
        record = Record.Start;
      } else if (record === Record.Start) {
        record = Record.End;
        return false;
      }
    } else if (record === Record.Start) {
      // Append selection
      keys.push(key);
    }

    if (expandedKeys.indexOf(key) === -1) {
      return false;
    }

    return true;
  });
  return keys;
}
function convertDirectoryKeysToNodes(rootChildren, keys) {
  var restKeys = _toConsumableArray(keys);

  var nodes = [];
  traverseNodesKey(rootChildren, function (key, node) {
    var index = restKeys.indexOf(key);

    if (index !== -1) {
      nodes.push(node);
      restKeys.splice(index, 1);
    }

    return !!restKeys.length;
  });
  return nodes;
}
//# sourceMappingURL=util.js.map

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var es_icon = __webpack_require__("CtXQ");

// CONCATENATED MODULE: ./node_modules/antd/es/tree/DirectoryTree.js
function DirectoryTree_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DirectoryTree_typeof = function _typeof(obj) { return typeof obj; }; } else { DirectoryTree_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DirectoryTree_typeof(obj); }

function DirectoryTree_toConsumableArray(arr) { return DirectoryTree_arrayWithoutHoles(arr) || DirectoryTree_iterableToArray(arr) || DirectoryTree_nonIterableSpread(); }

function DirectoryTree_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function DirectoryTree_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function DirectoryTree_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DirectoryTree_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DirectoryTree_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DirectoryTree_createClass(Constructor, protoProps, staticProps) { if (protoProps) DirectoryTree_defineProperties(Constructor.prototype, protoProps); if (staticProps) DirectoryTree_defineProperties(Constructor, staticProps); return Constructor; }

function DirectoryTree_possibleConstructorReturn(self, call) { if (call && (DirectoryTree_typeof(call) === "object" || typeof call === "function")) { return call; } return DirectoryTree_assertThisInitialized(self); }

function DirectoryTree_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DirectoryTree_getPrototypeOf(o) { DirectoryTree_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DirectoryTree_getPrototypeOf(o); }

function DirectoryTree_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DirectoryTree_setPrototypeOf(subClass, superClass); }

function DirectoryTree_setPrototypeOf(o, p) { DirectoryTree_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DirectoryTree_setPrototypeOf(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












function getIcon(props) {
  var isLeaf = props.isLeaf,
      expanded = props.expanded;

  if (isLeaf) {
    return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](es_icon["default"], {
      type: "file"
    });
  }

  return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](es_icon["default"], {
    type: expanded ? 'folder-open' : 'folder'
  });
}

var DirectoryTree_DirectoryTree =
/*#__PURE__*/
function (_React$Component) {
  DirectoryTree_inherits(DirectoryTree, _React$Component);

  function DirectoryTree(props) {
    var _this;

    DirectoryTree_classCallCheck(this, DirectoryTree);

    _this = DirectoryTree_possibleConstructorReturn(this, DirectoryTree_getPrototypeOf(DirectoryTree).call(this, props));

    _this.onExpand = function (expandedKeys, info) {
      var onExpand = _this.props.onExpand;

      _this.setUncontrolledState({
        expandedKeys: expandedKeys
      }); // Call origin function


      if (onExpand) {
        return onExpand(expandedKeys, info);
      }

      return undefined;
    };

    _this.onClick = function (event, node) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          expandAction = _this$props.expandAction; // Expand the tree

      if (expandAction === 'click') {
        _this.onDebounceExpand(event, node);
      }

      if (onClick) {
        onClick(event, node);
      }
    };

    _this.onDoubleClick = function (event, node) {
      var _this$props2 = _this.props,
          onDoubleClick = _this$props2.onDoubleClick,
          expandAction = _this$props2.expandAction; // Expand the tree

      if (expandAction === 'doubleClick') {
        _this.onDebounceExpand(event, node);
      }

      if (onDoubleClick) {
        onDoubleClick(event, node);
      }
    };

    _this.onSelect = function (keys, event) {
      var _this$props3 = _this.props,
          onSelect = _this$props3.onSelect,
          multiple = _this$props3.multiple,
          children = _this$props3.children;
      var _this$state$expandedK = _this.state.expandedKeys,
          expandedKeys = _this$state$expandedK === void 0 ? [] : _this$state$expandedK;
      var node = event.node,
          nativeEvent = event.nativeEvent;
      var _node$props$eventKey = node.props.eventKey,
          eventKey = _node$props$eventKey === void 0 ? '' : _node$props$eventKey;
      var newState = {}; // We need wrap this event since some value is not same

      var newEvent = _extends(_extends({}, event), {
        selected: true
      }); // Windows / Mac single pick


      var ctrlPick = nativeEvent.ctrlKey || nativeEvent.metaKey;
      var shiftPick = nativeEvent.shiftKey; // Generate new selected keys

      var newSelectedKeys;

      if (multiple && ctrlPick) {
        // Control click
        newSelectedKeys = keys;
        _this.lastSelectedKey = eventKey;
        _this.cachedSelectedKeys = newSelectedKeys;
        newEvent.selectedNodes = convertDirectoryKeysToNodes(children, newSelectedKeys);
      } else if (multiple && shiftPick) {
        // Shift click
        newSelectedKeys = Array.from(new Set([].concat(DirectoryTree_toConsumableArray(_this.cachedSelectedKeys || []), DirectoryTree_toConsumableArray(calcRangeKeys(children, expandedKeys, eventKey, _this.lastSelectedKey)))));
        newEvent.selectedNodes = convertDirectoryKeysToNodes(children, newSelectedKeys);
      } else {
        // Single click
        newSelectedKeys = [eventKey];
        _this.lastSelectedKey = eventKey;
        _this.cachedSelectedKeys = newSelectedKeys;
        newEvent.selectedNodes = [event.node];
      }

      newState.selectedKeys = newSelectedKeys;

      if (onSelect) {
        onSelect(newSelectedKeys, newEvent);
      }

      _this.setUncontrolledState(newState);
    };

    _this.setTreeRef = function (node) {
      _this.tree = node;
    };

    _this.expandFolderNode = function (event, node) {
      var isLeaf = node.props.isLeaf;

      if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
        return;
      } // Get internal rc-tree


      var internalTree = _this.tree.tree; // Call internal rc-tree expand function
      // https://github.com/ant-design/ant-design/issues/12567

      internalTree.onNodeExpand(event, node);
    };

    _this.setUncontrolledState = function (state) {
      var newState = Object(omit_js_es["a" /* default */])(state, Object.keys(_this.props));

      if (Object.keys(newState).length) {
        _this.setState(newState);
      }
    };

    _this.renderDirectoryTree = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          props = __rest(_a, ["prefixCls", "className"]);

      var _this$state = _this.state,
          expandedKeys = _this$state.expandedKeys,
          selectedKeys = _this$state.selectedKeys;
      var prefixCls = getPrefixCls('tree', customizePrefixCls);
      var connectClassName = classnames_default()("".concat(prefixCls, "-directory"), className);
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](tree_Tree_Tree, _extends({
        icon: getIcon,
        ref: _this.setTreeRef
      }, props, {
        prefixCls: prefixCls,
        className: connectClassName,
        expandedKeys: expandedKeys,
        selectedKeys: selectedKeys,
        onSelect: _this.onSelect,
        onClick: _this.onClick,
        onDoubleClick: _this.onDoubleClick,
        onExpand: _this.onExpand
      }));
    };

    var defaultExpandAll = props.defaultExpandAll,
        defaultExpandParent = props.defaultExpandParent,
        expandedKeys = props.expandedKeys,
        defaultExpandedKeys = props.defaultExpandedKeys,
        children = props.children;

    var _convertTreeToEntitie = convertTreeToEntities(children),
        keyEntities = _convertTreeToEntitie.keyEntities; // Selected keys


    _this.state = {
      selectedKeys: props.selectedKeys || props.defaultSelectedKeys || []
    }; // Expanded keys

    if (defaultExpandAll) {
      _this.state.expandedKeys = getFullKeyList(props.children);
    } else if (defaultExpandParent) {
      _this.state.expandedKeys = conductExpandParent(expandedKeys || defaultExpandedKeys, keyEntities);
    } else {
      _this.state.expandedKeys = expandedKeys || defaultExpandedKeys;
    }

    _this.onDebounceExpand = debouncefrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368_default()(_this.expandFolderNode, 200, {
      leading: true
    });
    return _this;
  }

  DirectoryTree_createClass(DirectoryTree, [{
    key: "render",
    value: function render() {
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](config_provider["ConfigConsumer"], null, this.renderDirectoryTree);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};

      if ('expandedKeys' in nextProps) {
        newState.expandedKeys = nextProps.expandedKeys;
      }

      if ('selectedKeys' in nextProps) {
        newState.selectedKeys = nextProps.selectedKeys;
      }

      return newState;
    }
  }]);

  return DirectoryTree;
}(reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["Component"]);

DirectoryTree_DirectoryTree.defaultProps = {
  showIcon: true,
  expandAction: 'click'
};
Object(react_lifecycles_compat_esfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["polyfill"])(DirectoryTree_DirectoryTree);
/* harmony default export */ var tree_DirectoryTree = (DirectoryTree_DirectoryTree);
//# sourceMappingURL=DirectoryTree.js.map

// CONCATENATED MODULE: ./node_modules/antd/es/_util/motion.js
// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node.offsetHeight
  };
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight
};
/* harmony default export */ var _util_motion = (collapseMotion);
//# sourceMappingURL=motion.js.map

// CONCATENATED MODULE: ./node_modules/antd/es/tree/Tree.js
function tree_Tree_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tree_Tree_typeof = function _typeof(obj) { return typeof obj; }; } else { tree_Tree_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tree_Tree_typeof(obj); }

function Tree_extends() { Tree_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tree_extends.apply(this, arguments); }

function tree_Tree_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tree_Tree_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tree_Tree_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tree_Tree_createClass(Constructor, protoProps, staticProps) { if (protoProps) tree_Tree_defineProperties(Constructor.prototype, protoProps); if (staticProps) tree_Tree_defineProperties(Constructor, staticProps); return Constructor; }

function tree_Tree_possibleConstructorReturn(self, call) { if (call && (tree_Tree_typeof(call) === "object" || typeof call === "function")) { return call; } return tree_Tree_assertThisInitialized(self); }

function tree_Tree_getPrototypeOf(o) { tree_Tree_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tree_Tree_getPrototypeOf(o); }

function tree_Tree_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tree_Tree_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tree_Tree_setPrototypeOf(subClass, superClass); }

function tree_Tree_setPrototypeOf(o, p) { tree_Tree_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tree_Tree_setPrototypeOf(o, p); }









var tree_Tree_Tree =
/*#__PURE__*/
function (_React$Component) {
  tree_Tree_inherits(Tree, _React$Component);

  function Tree() {
    var _this;

    tree_Tree_classCallCheck(this, Tree);

    _this = tree_Tree_possibleConstructorReturn(this, tree_Tree_getPrototypeOf(Tree).apply(this, arguments));

    _this.renderSwitcherIcon = function (prefixCls, switcherIcon, _ref) {
      var isLeaf = _ref.isLeaf,
          expanded = _ref.expanded,
          loading = _ref.loading;
      var showLine = _this.props.showLine;

      if (loading) {
        return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](es_icon["default"], {
          type: "loading",
          className: "".concat(prefixCls, "-switcher-loading-icon")
        });
      }

      if (showLine) {
        if (isLeaf) {
          return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](es_icon["default"], {
            type: "file",
            className: "".concat(prefixCls, "-switcher-line-icon")
          });
        }

        return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](es_icon["default"], {
          type: expanded ? 'minus-square' : 'plus-square',
          className: "".concat(prefixCls, "-switcher-line-icon"),
          theme: "outlined"
        });
      }

      var switcherCls = "".concat(prefixCls, "-switcher-icon");

      if (isLeaf) {
        return null;
      }

      if (switcherIcon) {
        var switcherOriginCls = switcherIcon.props.className || '';
        return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["cloneElement"](switcherIcon, {
          className: classnames_default()(switcherOriginCls, switcherCls)
        });
      }

      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](es_icon["default"], {
        type: "caret-down",
        className: switcherCls,
        theme: "filled"
      });
    };

    _this.setTreeRef = function (node) {
      _this.tree = node;
    };

    _this.renderTree = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls;

      var _assertThisInitialize = tree_Tree_assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          showIcon = props.showIcon,
          _switcherIcon = props.switcherIcon,
          blockNode = props.blockNode,
          children = props.children;
      var checkable = props.checkable;
      var prefixCls = getPrefixCls('tree', customizePrefixCls);
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](es, Tree_extends({
        ref: _this.setTreeRef
      }, props, {
        prefixCls: prefixCls,
        className: classnames_default()(className, (_classNames = {}, tree_Tree_defineProperty(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), tree_Tree_defineProperty(_classNames, "".concat(prefixCls, "-block-node"), blockNode), _classNames)),
        checkable: checkable ? reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"]("span", {
          className: "".concat(prefixCls, "-checkbox-inner")
        }) : checkable,
        switcherIcon: function switcherIcon(nodeProps) {
          return _this.renderSwitcherIcon(prefixCls, _switcherIcon, nodeProps);
        }
      }), children);
    };

    return _this;
  }

  tree_Tree_createClass(Tree, [{
    key: "render",
    value: function render() {
      return reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["createElement"](config_provider["ConfigConsumer"], null, this.renderTree);
    }
  }]);

  return Tree;
}(reactfrom_dll_reference_dll_vendor_3d2c9e3bcfbe3a2fd368["Component"]);


tree_Tree_Tree.TreeNode = es_TreeNode;
tree_Tree_Tree.DirectoryTree = tree_DirectoryTree;
tree_Tree_Tree.defaultProps = {
  checkable: false,
  showIcon: false,
  motion: Tree_extends(Tree_extends({}, _util_motion), {
    motionAppear: false
  }),
  blockNode: false
};
//# sourceMappingURL=Tree.js.map

// CONCATENATED MODULE: ./node_modules/antd/es/tree/index.js

/* harmony default export */ var tree = __webpack_exports__["default"] = (tree_Tree_Tree);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "NnqQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _modal = _interopRequireDefault(__webpack_require__("kLXV"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _tree2 = _interopRequireDefault(__webpack_require__("MJZm"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

__webpack_require__("4m0G");

var _reactRouterDom = __webpack_require__("eO8H");

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _constant = __webpack_require__("AmCF");

__webpack_require__("5Qxo");

var _TreeTitle = _interopRequireDefault(__webpack_require__("87Bb"));

var _ZerodMainContext = _interopRequireDefault(__webpack_require__("MaNN"));

var _zTool = __webpack_require__("/sSO");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TreeNode = _tree2.default.TreeNode;

function getTreeAllId(tree, keyMap) {
  var ids = [];
  tree.forEach(function (item) {
    ids.push(item[keyMap.id].toString());

    if (Array.isArray(item[keyMap.children])) {
      ids = ids.concat(getTreeAllId(item[keyMap.children], keyMap));
    }
  });
  return ids;
} // import { Zlayout } from "../Zlayout";


var defaultConfig = (0, _constant.const_getListConfig)("list", "ZtreePanel");

var ZtreePanel =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ZtreePanel, _React$PureComponent);

  function ZtreePanel() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ZtreePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ZtreePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.treeDataKeys = Object.assign({
      name: "name",
      id: "id",
      children: "children"
    }, _this.props.treeDataKeys);
    _this.methods = _objectSpread({}, _constant.const_getMethods.call((0, _assertThisInitialized2.default)(_this)), {
      getWrapperProps: function getWrapperProps() {
        return _this.props.wrapperProps;
      },
      // 获取列表数据
      loadTreeData: function loadTreeData(moreQuery) {
        var _ref = _this.props.treeProps || {},
            defaultExpandAll = _ref.defaultExpandAll;

        var querys = _this.searchQuery ? _this.searchQuery : {};

        if (_zTool.dataType.isObject(moreQuery)) {
          querys = Object.assign({}, querys, moreQuery);
        }

        var apiPromise = _this.props.treeApiInterface && _this.props.treeApiInterface(querys, _this.getExportSomething());

        if (_zTool.dataType.isPromise(apiPromise)) {
          _this.methods.showLoading(true);

          apiPromise.then(function (re) {
            var noData = _constant.requireValid.hasData(re);

            if (noData) {
              return noData;
            }

            var _defaultExpandAll = typeof defaultExpandAll === "function" ? defaultExpandAll(_this.getExportSomething(), re.data) : defaultExpandAll;

            var expandedKeys = [];

            if (Array.isArray(_defaultExpandAll)) {
              expandedKeys = _defaultExpandAll;
            } else {
              expandedKeys = _defaultExpandAll ? getTreeAllId(re.data, _this.treeDataKeys) : [];
            }

            _this.setState({
              treeData: re.data,
              expandedKeys: expandedKeys,
              loadedKeys: []
            });
          }).catch(function (re) {
            _this.methods.notice.error(re && re.msg ? re.msg : "获取数据失败");
          }).finally(function (re) {
            _this.methods.showLoading(false);
          });
        }
      },
      loadChildData: function loadChildData(treeNode) {
        // console.log(treeNode);
        var childrenKey = _this.treeDataKeys.children;

        var _ref2 = _this.props.treeProps || {},
            defaultExpandAll = _ref2.defaultExpandAll;

        return new Promise(function (resolve) {
          if (treeNode.props.children) {
            resolve();
            return;
          }

          var apiPromise = _this.ayncChild && _this.props.childApiInterface((0, _zTool.deepCopy)(treeNode.props.dataRef), _this.getExportSomething());

          if (_zTool.dataType.isPromise(apiPromise)) {
            apiPromise.then(function (re) {
              var noData = _constant.requireValid.hasData(re);

              if (noData) {
                return noData;
              }

              treeNode.props.dataRef[childrenKey] = re.data;

              var _defaultExpandAll = typeof defaultExpandAll === "function" ? defaultExpandAll(_this.getExportSomething(), re.data) : defaultExpandAll;

              var expandedKeys = [];

              if (Array.isArray(_defaultExpandAll)) {
                expandedKeys = [].concat((0, _toConsumableArray2.default)(_this.state.expandedKeys), (0, _toConsumableArray2.default)(_defaultExpandAll));
              } else {
                expandedKeys = _defaultExpandAll ? [].concat((0, _toConsumableArray2.default)(_this.state.expandedKeys), (0, _toConsumableArray2.default)(getTreeAllId(re.data, _this.treeDataKeys))) : _this.state.expandedKeys;
              }

              _this.setState({
                treeData: (0, _toConsumableArray2.default)(_this.state.treeData),
                expandedKeys: expandedKeys
              });
            }).finally(function () {
              resolve();
            });
          }
        });
      },
      // 查询
      onSearch: function onSearch(query) {
        _this.searchQuery = query;

        _this.methods.loadTreeData();
      },
      // 重置
      onReset: function onReset() {
        _this.methods.onSearch();
      },
      commonActionArr: function commonActionArr(_ref3) {
        var tree = _ref3.tree,
            record = _ref3.record,
            data = _ref3.data,
            action = _ref3.action;

        var _tree = Array.isArray(tree) ? tree : _this.state.treeData.slice(0);

        var newTree = action({
          tree: _tree,
          sourceItem: record,
          item: data,
          keyObj: _this.treeDataKeys
        });

        if (newTree && !Array.isArray(tree)) {
          _this.setState({
            treeData: newTree
          });
        }

        return newTree;
      },
      //移除tree中的一条数据
      removeOneData: function removeOneData(record, tree) {
        return _this.methods.commonActionArr({
          tree: tree,
          record: record,
          action: _zTool.removeItemFromTree
        });
      },
      //在record的children中添加一条数据
      addOneChildData: function addOneChildData(record, data, tree) {
        return _this.methods.commonActionArr({
          tree: tree,
          record: record,
          data: data,
          action: _zTool.pushItemToTree
        });
      },
      //在tree中替换一条数据
      replaceOneData: function replaceOneData(record, data, tree) {
        return _this.methods.commonActionArr({
          tree: tree,
          record: record,
          data: data,
          action: _zTool.replaceItemFromTree
        });
      },
      getDropType: function getDropType(info) {
        var dropKey = info.node.props.eventKey; //拖入的源key

        var dragKey = info.dragNode.props.eventKey; //拖动对象的key

        var dropPos = info.node.props.pos.split("-");
        var dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        var dropData = null;
        var dragData = null;
        var dropItem = (0, _defineProperty2.default)({}, _this.treeDataKeys.id, dropKey);
        var dragItem = (0, _defineProperty2.default)({}, _this.treeDataKeys.id, dragKey);
        var newTree = _this.state.treeData;
        (0, _zTool.itemsFromTree)({
          tree: newTree,
          sourceItem: dropItem,
          keyObj: _this.treeDataKeys,
          action: function action(_ref4) {
            var tree = _ref4.tree,
                currentItem = _ref4.currentItem,
                index = _ref4.index,
                keyObj = _ref4.keyObj;
            dropData = currentItem;
          }
        });
        (0, _zTool.itemsFromTree)({
          tree: newTree,
          sourceItem: dragItem,
          keyObj: _this.treeDataKeys,
          action: function action(_ref5) {
            var tree = _ref5.tree,
                currentItem = _ref5.currentItem,
                index = _ref5.index,
                keyObj = _ref5.keyObj;
            dragData = currentItem;
          }
        });
        if (!dragData || !dropData) return;

        if (!info.dropToGap) {
          return {
            type: "inLast",
            msg: "\u786E\u8BA4\u5C06 [".concat(dragData[_this.treeDataKeys.name], "] \u653E\u5165\u5230 [").concat(dropData[_this.treeDataKeys.name], "] \u91CC\u9762\u6700\u540E\u4E00\u4E2A\u5417\uFF1F"),
            dropData: dropData,
            dragData: dragData
          };
        } else if ((info.node.props.children || []).length > 0 && info.node.props.expanded && dropPosition === 1) {
          return {
            type: "inFirst",
            msg: "\u786E\u8BA4\u5C06 [".concat(dragData[_this.treeDataKeys.name], "] \u653E\u5165\u5230 [").concat(dropData[_this.treeDataKeys.name], "] \u91CC\u9762\u6700\u524D\u4E00\u4E2A\u5417\uFF1F"),
            dropData: dropData,
            dragData: dragData
          };
        } else if (dropPosition === -1) {
          return {
            type: "insertBefore",
            msg: "\u786E\u8BA4\u5C06 [".concat(dragData[_this.treeDataKeys.name], "] \u79FB\u52A8\u5230 [").concat(dropData[_this.treeDataKeys.name], "] \u7684\u524D\u9762\u5417\uFF1F"),
            dropData: dropData,
            dragData: dragData
          };
        } else {
          return {
            type: "insertAfter",
            msg: "\u786E\u8BA4\u5C06[".concat(dragData[_this.treeDataKeys.name], "]\u79FB\u52A8\u5230[").concat(dropData[_this.treeDataKeys.name], "]\u7684\u540E\u9762\u5417\uFF1F"),
            dropData: dropData,
            dragData: dragData
          };
        }
      },
      dropDone: function dropDone() {
        var newTree = (0, _toConsumableArray2.default)(_this.state.treeData);
        var _this$methods$droped = _this.methods.droped,
            type = _this$methods$droped.type,
            dropData = _this$methods$droped.dropData,
            dragData = _this$methods$droped.dragData;
        if (!type) return;
        newTree = (0, _zTool.removeItemFromTree)({
          tree: newTree,
          sourceItem: dragData,
          keyObj: _this.treeDataKeys
        });
        newTree = _this.methods.dropAction[type]({
          tree: newTree,
          sourceItem: dropData,
          item: dragData,
          keyObj: _this.treeDataKeys
        });

        _this.setState({
          treeData: newTree
        });
      },
      droped: {},
      dropAction: {
        inLast: _zTool.pushItemToTree,
        inFirst: _zTool.unshiftItemToTree,
        insertBefore: _zTool.insertBeforeItemFromTree,
        insertAfter: _zTool.insertAfterItemFromTree
      },
      onDrop: function onDrop(info) {
        var _ref6 = _this.props.treeProps || {},
            onDrop = _ref6.onDrop;

        if (typeof onDrop == "function") {
          var hasDrop = _this.methods.getDropType(info);

          if (hasDrop) {
            _this.methods.droped = hasDrop;

            _modal.default.confirm({
              title: _this.methods.droped.msg,
              content: "",
              okText: "确定",
              okType: "primary",
              cancelText: "取消",
              onOk: function onOk() {
                return onDrop(info, (0, _zTool.deepCopy)(_this.methods.droped), _this.methods.dropDone, _this.getExportSomething());
              }
            });
          }
        }
      },
      // 删除按钮触发
      onDelete: function onDelete(record) {
        var text = record[_this.treeDataKeys.name];

        _modal.default.confirm({
          title: "\u786E\u8BA4\u5220\u9664 ".concat(text ? "[".concat(text, "]") : "", " \u8FD9\u6761\u6570\u636E\u5417"),
          content: "将永久删除",
          okText: "删除",
          okType: "danger",
          cancelText: "取消",
          onOk: function onOk() {
            return new Promise(function (resolve, rejects) {
              _this.props.deleteApiInterface(record, _this.getExportSomething()).then(function (re) {
                _this.methods.notice.success("删除成功");

                _this.methods.removeOneData(record);

                resolve();
              }).catch(function (re) {
                _this.methods.notice.error(re && re.msg ? re.msg : "删除失败");

                rejects();
              });
            });
          }
        });
      },
      onAdd: function onAdd() {
        var content = _this.props.addPageRender(_this.getExportSomething());

        _this.methods.openModal(content);
      },
      onAddChild: function onAddChild(record) {
        var content = _this.props.addChildPageRender(record, _this.getExportSomething());

        _this.methods.openModal(content);
      },
      onUpdate: function onUpdate(record) {
        var content = _this.props.updatePageRender(record, _this.getExportSomething());

        _this.methods.openModal(content);
      },
      onDetail: function onDetail(record) {
        var content = _this.props.detailPageRender(record, _this.getExportSomething());

        _this.methods.openModal(content);
      },
      openSearch: function openSearch() {
        _this.ZsearchFormMethods.unfold(function (show) {
          _this.setState({
            expandedSearch: show
          });
        });
      },
      //外部可以通过这个函数获取当前列表中的数据，
      currentTreeData: function currentTreeData() {
        return _this.state.treeData;
      },
      setDataState: function setDataState(data) {
        _this.setState({
          treeData: data
        });
      }
    });
    _this.searchFormConfig = _constant.const_extendPanelFormConfig.call((0, _assertThisInitialized2.default)(_this));
    _this.colFormItems = _constant.const_getPanelDefaultFormItems.call((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      treeData: [],
      expandedKeys: [],
      loadedKeys: [],
      expandedSearch: _this.searchFormConfig && _this.searchFormConfig.defaultExpanded
    };
    _this.searchQuery = null;
    _this.ayncChild = typeof _this.props.childApiInterface === "function";

    _this.getSearchFormMethods = function (methods) {
      return _this.ZsearchFormMethods = methods;
    };

    return _this;
  }

  (0, _createClass2.default)(ZtreePanel, [{
    key: "getExportSomething",
    value: function getExportSomething() {
      var _this2 = this;

      return _objectSpread({}, _constant.const_getMainTool.call(this), {
        getSearchQuery: function getSearchQuery() {
          return (0, _zTool.deepCopy)(_this2.searchQuery);
        },
        methods: this.methods,
        $router: {
          history: this.props.history,
          location: this.props.location
        }
      });
    }
  }, {
    key: "getTreeNode",
    value: function getTreeNode(tree) {
      var _this3 = this;

      var _ref7 = this.props.treeProps || {
        selectable: false
      },
          selectable = _ref7.selectable;

      return tree.map(function (data, index) {
        var childrenKey = _this3.treeDataKeys.children;
        var idKey = _this3.treeDataKeys.id;
        var nameKey = _this3.treeDataKeys.name;
        var cilds = Array.isArray(data[childrenKey]) ? data[childrenKey] : [];
        var title = data.title,
            key = data.key,
            dataRef = data.dataRef,
            otherData = (0, _objectWithoutProperties2.default)(data, ["title", "key", "dataRef"]);

        var tool = _this3.getExportSomething();

        return _react.default.createElement(TreeNode, (0, _extends2.default)({
          selectable: selectable,
          title: _react.default.createElement(_TreeTitle.default, {
            tool: tool,
            name: _this3.props.nodeTitleRender ? _this3.props.nodeTitleRender(data[nameKey], data, tool) : data[nameKey],
            record: data,
            index: index,
            moreBtnType: _this3.props.moreBtnType,
            moreBtnMap: _this3.props.moreBtnMap,
            onMoreBtnClick: _this3.props.onMoreBtnClick,
            onDetailClick: _this3.methods.onDetail,
            onAddChildClick: _this3.methods.onAddChild,
            onUpdateClick: _this3.methods.onUpdate,
            onDeleteClick: _this3.methods.onDelete,
            showDetailBtn: _this3.props.showDetailBtn,
            showAddChildBtn: _this3.props.showAddChildBtn,
            showUpdateBtn: _this3.props.showUpdateBtn,
            showDeleteBtn: _this3.props.showDeleteBtn,
            detailBtnDisabled: _this3.props.detailBtnDisabled,
            addChildBtnDisabled: _this3.props.addChildBtnDisabled,
            updateBtnDisabled: _this3.props.updateBtnDisabled,
            deleteBtnDisabled: _this3.props.deleteBtnDisabled
          }),
          key: data[idKey],
          dataRef: data
        }, otherData), cilds.length ? _this3.getTreeNode(cilds) : null);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      typeof this.props.exportSomething == "function" && this.props.exportSomething(this.getExportSomething());
      this.insertLocation = (0, _constant.const_getInsertLocation)(this.hocWrapperEl);
      this.methods.onSearch();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      _constant.const_searchFormNode.call(this);

      var _ref8 = this.props.treeProps || {},
          showLine = _ref8.showLine,
          loadData = _ref8.loadData,
          onDrop = _ref8.onDrop,
          selectable = _ref8.selectable,
          _onExpand = _ref8.onExpand,
          expandedKeys = _ref8.expandedKeys,
          defaultExpandAll = _ref8.defaultExpandAll,
          treeOthers = (0, _objectWithoutProperties2.default)(_ref8, ["showLine", "loadData", "onDrop", "selectable", "onExpand", "expandedKeys", "defaultExpandAll"]);

      var _expandedKeys = typeof expandedKeys === "function" ? expandedKeys(this.state.expandedKeys, this.getExportSomething()) : this.state.expandedKeys;

      return _react.default.createElement("section", {
        ref: function ref(el) {
          _this4.hocWrapperEl = el;
        }
      }, this.props.panelBeforeRender && this.props.panelBeforeRender(this.getExportSomething()), _react.default.createElement("div", {
        className: "z-panel"
      }, this.getPanleHeader(), _react.default.createElement("div", null, this.searchForm, _react.default.createElement("div", {
        className: "z-editor-tree"
      }, this.state.treeData.length ? _react.default.createElement(_tree2.default, (0, _extends2.default)({
        showLine: true,
        autoExpandParent: false
      }, treeOthers, {
        expandedKeys: _expandedKeys,
        loadedKeys: this.state.loadedKeys,
        onExpand: function onExpand(expandedKeys, other) {
          _this4.setState({
            expandedKeys: expandedKeys
          });

          typeof _onExpand === "function" && _onExpand(expandedKeys, other);
        },
        loadData: this.ayncChild ? this.methods.loadChildData : undefined,
        onDrop: this.methods.onDrop,
        onLoad: function onLoad(loadedKeys) {
          _this4.setState({
            loadedKeys: loadedKeys
          });
        }
      }), this.getTreeNode(this.state.treeData)) : _react.default.createElement("div", {
        className: "z-text-center"
      }, "\u6682\u65E0\u6570\u636E")), this.props.moreContentRender && this.props.moreContentRender(this.getExportSomething()))), this.props.panelAfterRender && this.props.panelAfterRender(this.getExportSomething()));
    }
  }]);
  return ZtreePanel;
}(_react.default.PureComponent);

ZtreePanel.propTypes = {
  treeDataKeys: _propTypes.default.object,
  panelBeforeRender: _propTypes.default.func,
  panelAfterRender: _propTypes.default.func,
  exportSomething: _propTypes.default.func,
  nodeTitleRender: _propTypes.default.func,
  panelHeader: _propTypes.default.any,
  //面板title,可以自定义
  moreContentRender: _propTypes.default.func,
  searchForm: _propTypes.default.object,
  colFormItems: _propTypes.default.arrayOf(_propTypes.default.object),
  // 搜索表单列map数据数据
  moreBtnMap: _propTypes.default.arrayOf(_propTypes.default.object),
  //更多操作按钮的map数据
  onMoreBtnClick: _propTypes.default.func,
  // 更多按钮点击事件
  updateBtnPermCod: _propTypes.default.string,
  // 修改按钮权限控制代码
  deleteBtnPermCod: _propTypes.default.string,
  // 删除按钮权限控制代码
  showDetailBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示详情按钮
  showAddChildBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示新增子节点按钮
  showUpdateBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示修改按钮
  showDeleteBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示删除按钮
  showAddBtn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否显示新建按钮
  detailBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否禁用详情按钮
  addChildBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否禁用新增子节点按钮
  updateBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否禁用修改按钮
  deleteBtnDisabled: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 是否禁用删除按钮
  treeApiInterface: _propTypes.default.func,
  // 获取tree的后台接口函数，其必须内部返回Promise
  childApiInterface: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  // 异步加载子节点的后台接口函数，其必须内部返回Promise
  deleteApiInterface: _propTypes.default.func,
  // 删除按钮的后台接口函数，其必须内部返回Promise
  addPageRender: _propTypes.default.func,
  // 新建页面渲染模板
  addChildPageRender: _propTypes.default.func,
  // 新增子节点页面渲染模板
  updatePageRender: _propTypes.default.func,
  // 修改页面渲染模板
  detailPageRender: _propTypes.default.func,
  // 详情页面渲染模板
  treeProps: _propTypes.default.object,
  responseKeys: _propTypes.default.object //后台接口请求响应体的key处理

};
ZtreePanel.defaultProps = defaultConfig.tree;
ZtreePanel.prototype.getPanleHeader = _constant.const_getPanleHeader;

var _default = _ZerodMainContext.default.setConsumer((0, _reactRouterDom.withRouter)(ZtreePanel));

exports.default = _default;

/***/ }),

/***/ "Xd/X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZeditorTreeHOC2 = _interopRequireDefault(__webpack_require__("vabx"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("nTTp"));

var _pageHeader = _interopRequireDefault(__webpack_require__("3P0Q"));

var _area = _interopRequireDefault(__webpack_require__("R7NC"));

var _zTool = __webpack_require__("/sSO");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AmdDocHOC = _loadHOC.default.AmdDocHOC,
    AshowDemoHOC = _loadHOC.default.AshowDemoHOC;

var showDemo = function showDemo(Component) {
  return _react.default.createElement(Component, null);
};

var _default = AmdDocHOC(_doc.default, {
  demo1: function demo1() {
    var _tree;

    var config = {
      insertLocation: "mainModal",
      pageHeader: _objectSpread({
        show: true
      }, _pageHeader.default),
      searchForm: {
        // array>[object] | null，如果是null则不显示搜索表单
        items: [{
          key: "serviceCode",
          label: "服务编码",
          render: function render(form) {
            return _react.default.createElement(_input.default, {
              placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
            });
          }
        }, {
          key: "serviceName",
          label: "服务名称",
          render: function render(form) {
            return _react.default.createElement(_input.default, {
              placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
            });
          }
        }]
      },
      tree: (_tree = {
        treeProps: {
          // defaultExpandAll:true,
          draggable: true,
          onDragEnd: function onDragEnd(detail) {
            console.log("onDragEnd");
          },
          onDragEnter: function onDragEnter() {
            console.log("onDragEnter");
          },
          onDragLeave: function onDragLeave() {
            console.log("onDragLeave");
          },
          onDragOver: function onDragOver() {
            console.log("onDragOver");
          },
          onDragStart: function onDragStart() {
            console.log("onDragStart");
          },
          onDrop: function onDrop(info, dropData, done, tool) {
            done();
          }
        },
        treeDataKeys: {
          id: "areaId"
        },
        panelHeader: "树",
        // 是否显示新建按钮
        showAddBtn: true,
        // 新建按钮权限控制代码
        addBtnPermCode: "",
        addPageRender: function addPageRender(panel) {
          return _react.default.createElement("div", {
            className: "z-panel z-text-center z-margin-bottom-20"
          }, _react.default.createElement("div", {
            className: "z-panel-body"
          }, "addPageRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
        },
        // 是否显示新增子节点按钮
        showAddChildBtn: true
      }, (0, _defineProperty2.default)(_tree, "addBtnPermCode", ""), (0, _defineProperty2.default)(_tree, "addChildPageRender", function addChildPageRender(panel) {
        return _react.default.createElement("div", {
          className: "z-panel z-text-center z-margin-bottom-20"
        }, _react.default.createElement("div", {
          className: "z-panel-body"
        }, "addChildPageRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      }), (0, _defineProperty2.default)(_tree, "showDetailBtn", true), (0, _defineProperty2.default)(_tree, "detailBtnPermCode", ""), (0, _defineProperty2.default)(_tree, "detailPageRender", function detailPageRender(record) {
        return _react.default.createElement("div", {
          className: "z-panel z-text-center z-margin-bottom-20"
        }, _react.default.createElement("div", {
          className: "z-panel-body"
        }, "detailPageRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      }), (0, _defineProperty2.default)(_tree, "showUpdateBtn", true), (0, _defineProperty2.default)(_tree, "updateBtnPermCod", ""), (0, _defineProperty2.default)(_tree, "updatePageRender", function updatePageRender(record, panel) {
        return _react.default.createElement("div", {
          className: "z-panel z-text-center z-margin-bottom-20"
        }, _react.default.createElement("div", {
          className: "z-panel-body"
        }, "updatePageRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      }), (0, _defineProperty2.default)(_tree, "showDeleteBtn", true), (0, _defineProperty2.default)(_tree, "deleteBtnPermCod", ""), (0, _defineProperty2.default)(_tree, "moreBtnMap", [{
        key: "0",
        name: "默认的按钮"
      }]), (0, _defineProperty2.default)(_tree, "onMoreBtnClick", function onMoreBtnClick(item, record) {
        _message2.default.success("\u60A8\u5F53\u524D\u70B9\u51FB\u7684\u662F[".concat(record.name, "]\u8FD9\u6761\u6570\u636E"));
      }), (0, _defineProperty2.default)(_tree, "treeApiInterface", function treeApiInterface(query) {
        // return api.area.getChildList({ id: "root" }).then((re) => {
        // 	return { data: re.list };
        // });
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve({
              data: (0, _zTool.deepCopy)(_area.default.data)
            });
          }, 500);
        });
      }), (0, _defineProperty2.default)(_tree, "childApiInterface", false), (0, _defineProperty2.default)(_tree, "deleteApiInterface", function deleteApiInterface(data) {
        return Promise.resolve();
      }), (0, _defineProperty2.default)(_tree, "panelBeforeRender", function panelBeforeRender(obj) {
        return _react.default.createElement("div", {
          className: "z-panel z-text-center z-margin-bottom-20"
        }, _react.default.createElement("div", {
          className: "z-panel-body"
        }, "panelBeforeRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      }), (0, _defineProperty2.default)(_tree, "panelAfterRender", function panelAfterRender(obj) {
        return _react.default.createElement("div", {
          className: "z-panel z-margin-top-20 z-text-center"
        }, _react.default.createElement("div", {
          className: "z-panel-body"
        }, "panelAfterRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      }), (0, _defineProperty2.default)(_tree, "moreContentRender", function moreContentRender(obj) {
        return _react.default.createElement("div", {
          className: "z-panel is-panel-border z-margin-top-20 z-text-center"
        }, _react.default.createElement("div", {
          className: "z-panel-body"
        }, "moreContentRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      }), _tree)
    };
    var MyScript = AshowDemoHOC(showDemo((0, _ZeditorTreeHOC2.default)(config)));
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

/***/ "nTTp":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2018-09-12 10:18:04\n * @LastEditors: zgt\n * @LastEditTime: 2019-08-22 16:20:45\n * @Description: file content\n -->\n<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zeditortreehoc\">树列表页：ZeditorTreeHOC</h1>\n<p><code>ZeditorTreeHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个带按钮的树组件</p>\n<p><code>ZeditorTreeHOC</code>内置了一个<code>ZtreePanel</code>组件，可以<code>import {ZtreePanel} from &quot;zerod&quot;</code>引入，<code>ZtreePanel</code>的 props 同 <code>pageConfig.tree</code></p>\n<p>1、基本使用</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"基本使用\"></div>\n\n<pre><code class=\"language-jsx\">const config = {\n    pageHeader: {\n        show: true,\n        ...pageHeader,\n    },\n    searchForm: {\n        // array&gt;[object] | null，如果是null则不显示搜索表单\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: form =&gt; {\n                    return &lt;Input placeholder=&quot;请输入内容&quot; /&gt;;\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: form =&gt; {\n                    return &lt;Input placeholder=&quot;请输入内容&quot; /&gt;;\n                },\n            },\n        ],\n    },\n    tree: {\n        treeDataKeys: { id: &quot;areaId&quot; },\n        panelHeader: &quot;树&quot;,\n        // 是否显示新建按钮\n        showAddBtn: true,\n        addPageRender: panel =&gt; {\n            return (\n                &lt;div className=&quot;z-panel z-text-center z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;addPageRender 函数渲染的内容&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        // 是否显示详情按钮\n        showDetailBtn: true,\n        detailPageRender: record =&gt; {\n            return (\n                &lt;div className=&quot;z-panel z-text-center z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;detailPageRender 函数渲染的内容&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        // 是否显示修改按钮\n        showUpdateBtn: true,\n        // 修改按钮权限控制代码\n        updateBtnPermCod: &quot;&quot;,\n        updatePageRender: (record, panel) =&gt; {\n            return (\n                &lt;div className=&quot;z-panel z-text-center z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;updatePageRender 函数渲染的内容&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        // 是否显示删除按钮\n        showDeleteBtn: true,\n        // 删除按钮权限控制代码\n        deleteBtnPermCod: &quot;&quot;,\n        //更多操作按钮的map数据\n        moreBtnMap: [\n            {\n                key: &quot;0&quot;,\n                name: &quot;默认的按钮&quot;,\n            },\n        ],\n        //更多操作按钮的的点击事件\n        onMoreBtnClick: (item, record) =&gt; {\n            message.success(`您当前点击的是[${record.name}]这条数据`);\n        },\n        // 获取列表数据的后台接口函数，其必须内部返回Promise\n        treeApiInterface: query =&gt; {\n            // return api.area.getChildList({ id: &quot;root&quot; }).then((re) =&gt; {\n            //     return { data: re.list };\n            // });\n            return new Promise(resolve =&gt; {\n                setTimeout(() =&gt; {\n                    resolve({ data: deepCopy(area.data) });\n                }, 500);\n            });\n        },\n        childApiInterface: false,\n        // childApiInterface: (query) =&gt; {\n        //     return api.area.getChildList({ id: query.areaId }).then((re) =&gt; {\n        //         return { data: re.list };\n        //     });\n        // },\n        // 删除按钮的后台接口函数，其必须内部返回Promise\n        deleteApiInterface: data =&gt; {\n            return Promise.resolve();\n        },\n        panelBeforeRender: obj =&gt; {\n            return (\n                &lt;div className=&quot;z-panel z-text-center z-margin-bottom-20&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;panelBeforeRender 函数渲染的内容&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        panelAfterRender: obj =&gt; {\n            return (\n                &lt;div className=&quot;z-panel z-margin-top-20 z-text-center&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;panelAfterRender 函数渲染的内容&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n        moreContentRender: obj =&gt; {\n            return (\n                &lt;div className=&quot;z-panel is-panel-border z-margin-top-20 z-text-center&quot;&gt;\n                    &lt;div className=&quot;z-panel-body&quot;&gt;moreContentRender 函数渲染的内容&lt;/div&gt;\n                &lt;/div&gt;\n            );\n        },\n    },\n};\nexport default ZeditorTreeHOC(pageConfig);</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig\">pageConfig</h2>\n<p>除了如下的属性，pageConfig 还包含 <span class=\"z-history-href\" data-path=\"/main/HOC-doc/ZpageWraperHOC-doc\">HOC/页面头尾结构：ZpageWrapper</span> 的 props</p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>searchForm</td>\n            <td>\n                <p>1、<code>searchForm.defaultExpanded</code> 是否默认展开表单,(默认false)</p>\n                <p>2、<code>searchForm.insertTo</code> 此属性可以是:一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false || (tool)=>{return 一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false}，其用途为：将searchForm插到某个dom元素内,如为true则插到页头显示,(默认false)</p>\n                <p>3、<code>searchForm的其他属性</code>还包含： 请查看 <span class=\"z-history-href\" data-path=\"/main/component-doc/ZsearchForm-doc\">组件/ZsearchForm</span> 的 props  (除了onSearch, onReset, noCollapse ,hidden ,其他都有效)。</p>\n                <p>4、其中<code>searchForm.items</code>的<code>render函数</code>的参数在这里多加tool,如：items:[{render:(form,changeFormItems,tool)=>{},key:\"myKey\"}]。</p>\n                <p>5、其中<code>searchForm.items</code>的<code>options函数</code>的参数在这里多加tool,如：items:[{options:(tool)=>options}]。</p>\n                <p>6、<code>searchForm</code>的其他<code>函数属性</code>除了原有的参数，还多加tool，如 <code>searchForm.afterItemsRendered</code>:(form,methods,tool)=>{}</p>\n            </td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>tree</td>\n            <td>列表展示，请看下面的pageConfig.tree</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig-tree\">pageConfig.tree</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelHeader</td>\n            <td>列表面板的头部内容,为null则不显示面板头部。也可以是一个对象：{left:(tool)=>span,center:(tool)=>span,right:(tool)=>span,}</td>\n            <td>string | (tool)=>span | object</td>\n            <td>列表</td>\n        </tr>\n        <tr>\n            <td>treeDataKeys</td>\n            <td>树数据对应的map结构，默认：{ name: \"name\", id: \"id\", children: \"children\" }</td>\n            <td>object</td>\n            <td>{ name: \"name\", id: \"id\", children: \"children\" }</td>\n        </tr>\n        <tr>\n            <td>treeProps</td>\n            <td><a href=\"https://ant.design/components/tree-cn/\" target=\"_blank\">Antd 的Tree参数</a>,除了loadData,loadedKeys,onLoad，其他可用，其中启用draggable后onDrop参数扩展function(info,dropData,done,tool){}，defaultExpandAll可采用funtion(tool){return true;}</td>\n            <td>object</td>\n            <td>{ name: \"name\", id: \"id\", children: \"children\" }</td>\n        </tr>\n        <tr>\n            <td>nodeTitleRender</td>\n            <td>每个节点的title渲染函数</td>\n            <td>function(text,record){return text;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>treeApiInterface</td>\n            <td>获取树列表数据的后台接口函数,其必须返回Promise,参数有query:查询表单相关值。</td>\n            <td>(query,tool) => Promise对象</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>childApiInterface</td>\n            <td>异步加载子节点的接口函数，其必须返回Promise,参数有data:当前节点的数据。如果不需要异步加载，设为false即可</td>\n            <td>(data,tool) => Promise对象</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>deleteApiInterface</td>\n            <td>删除按钮后台接口函数,其必须返回Promise,参数有data:每一行数据</td>\n            <td>(data,tool) => Promise对象</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showAddBtn</td>\n            <td>是否显示新增按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>addPageRender</td>\n            <td>新增按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>\n            <td>function(tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showAddChildBtn</td>\n            <td>是否显示新增子节点按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>addChildPageRender</td>\n            <td>新增子节点按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>\n            <td>function(record,tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showDetailBtn</td>\n            <td>是否显示详情按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>detailPageRender</td>\n            <td>详情按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>\n            <td>function(record,tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showUpdateBtn</td>\n            <td>是否显示修改按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>updatePageRender</td>\n            <td>修改按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>\n            <td>function(record,tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showDeleteBtn</td>\n            <td>是否显示删除按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>moreBtnType</td>\n            <td>更多操作按钮显示类型</td>\n            <td>rounding | menu</td>\n            <td>rounding</td>\n        </tr>\n        <tr>\n            <td>moreBtnMap</td>\n            <td>更多操作按钮的map数据,[{key: \"0\",name: \"默认的按钮\", <i class=\"zero-icon zerod-shengchangzhouqi\"></i> show: boolean | function(record,index,item){return true;},disabled:boolean}]</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onMoreBtnClick</td>\n            <td>更多操作按钮点击事件,参数有item:当前按钮的map对象，record:当前节点的数据</td>\n            <td>function(item, record){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelBeforeRender</td>\n            <td>列表面板上面的渲染函数</td>\n            <td>function(tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelAfterRender</td>\n            <td>列表面板下面的渲染函数</td>\n            <td>function(tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> moreContentRender</td>\n            <td>分页控件下面更多内容的渲染函数</td>\n            <td>function(tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> addBtnDisabled</td>\n            <td>是否禁用新建按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> addChildBtnDisabled</td>\n            <td>是否禁用新建按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> detailBtnDisabled</td>\n            <td>是否禁用详情按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> updateBtnDisabled</td>\n            <td>是否禁用修改按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> deleteBtnDisabled</td>\n            <td>是否禁用删除按钮</td>\n            <td>boolean | function(record,index){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>exportSomething</td>\n            <td>是一个获取tool的钩子，相当于组件的componentDidMount</td>\n            <td>function(tool){ myTool=tool }</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"tool-\">tool 参数</h2>\n<p>pageConfig.tree 中的一些函数如<code>moreContentRender</code>提供了<code>tool</code>参数出来，有如下内容：</p>\n<p><code>tool</code>对象不但包含<code>ZerodMainContext</code>提供的东西（请 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：</p>\n<h3 id=\"tool-getsearchquery\">tool.getSearchQuery</h3>\n<p>获取当前查询表单中各控件的值的函数</p>\n<h3 id=\"tool-methods\">tool.methods</h3>\n<p>tool.methods 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>方法</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>getWrapperProps</td>\n            <td>用于获取ZeditorTreeHOC()返回的那个组件的props</td>\n            <td>tool.methods.getWrapperProps()</td>\n        </tr>\n        <tr>\n            <td>showLoading</td>\n            <td>用于 显示/取消 当前页的loading的方法，参数show：true|false</td>\n            <td>tool.methods.showLoading(true)</td>\n        </tr>\n        <tr>\n            <td>loadTreeData</td>\n            <td>更新树列表数据的方法，会触发pageConfig.tree的treeApiInterface函数；参数有moreQuery:是一个对象--更多传入treeApiInterface的参数</td>\n            <td>tool.methods.loadTreeData()</td>\n        </tr>\n        <tr>\n            <td>removeOneData</td>\n            <td>移除当前树的一条数据，参数有rowData:一节点的数据 或者 对应pageConfig.tree.treeDataKeys.id的数据(默认是id)，如tool.methods.removeOneData({id:5})，则会移除列表数据中id=5的那一条 </td>\n            <td>tool.methods.removeOneData({id:5})</td>\n        </tr>\n        <tr>\n            <td>replaceOneData</td>\n            <td>替换当前树的一条数据，参数有rowData:一节点的数据 或者 对应pageConfig.tree.treeDataKeys.id的数据(默认是id),newData:替换的新数据，如tool.methods.replaceOneData({id:5}，newData)，则会替换列表数据中id=5的那一条 </td>\n            <td>tool.methods.replaceOneData({id:5}，newData)</td>\n        </tr>\n        <tr>\n            <td>addOneChildData</td>\n            <td>在当前树的一条数据中新增一条子数据，参数有rowData:一节点的数据 或者 对应pageConfig.tree.treeDataKeys.id的数据(默认是id),newData:新增的子数据，如tool.methods.addOneChildData({id:5}，newData)，则会在列表数据中id=5的那一条数据的children里新增newData </td>\n            <td>tool.methods.addOneChildData({id:5}，newData)</td>\n        </tr>\n        <tr>\n            <td>openModal</td>\n            <td>打开当前列表所在位置关联的rightModal，与tool.showRightModal有区别；参数content:窗口的内容</td>\n            <td>tool.methods.openModal(<\\div\\>内容<\\/div\\>)</td>\n        </tr>\n        <tr>\n            <td>closeCurrentModal</td>\n            <td>关闭当前的rightModal</td>\n            <td>tool.methods.closeCurrentModal()</td>\n        </tr>\n        <tr>\n            <td>currentTreeData</td>\n            <td>获取当前树列表的全部数据(数组)的方法</td>\n            <td>const treeData=tool.methods.currentTreeData()</td>\n        </tr>\n        <tr>\n            <td>setDataState</td>\n            <td>用于主动更新列表数据状态的方法，参数data:列表数据(数组)</td>\n            <td>tool.methods.setDataState([...tool.methods.currentTreeData()])</td>\n        </tr>\n            <tr>\n            <td>onAdd</td>\n            <td>新增按钮的点击事件，会触发pageConfig.tree.addPageRender函数</td>\n            <td>tool.methods.onAdd()</td>\n        </tr>\n        </tr>\n            <tr>\n            <td>onAddChild</td>\n            <td>新增子节点按钮的点击事件，会触发pageConfig.tree.addChildPageRender函数</td>\n            <td>tool.methods.onAddChild()</td>\n        </tr>\n        <tr>\n            <td>onUpdate</td>\n            <td>修改按钮的点击事件，会触发pageConfig.tree.updatePageRender函数</td>\n            <td>tool.methods.onUpdate(record)</td>\n        </tr>\n        <tr>\n            <td>onDetail</td>\n            <td>详情按钮的点击事件，会触发pageConfig.tree.detailPageRender函数</td>\n            <td>tool.methods.onDetail(record)</td>\n        </tr>\n        <tr>\n            <td>onDelete</td>\n            <td>删除按钮的点击事件，会触发pageConfig.tree.deleteApiInterface函数</td>\n            <td>tool.methods.onDelete(text,record)</td>\n        </tr>\n        <tr>\n            <td>notice</td>\n            <td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>\n            <td>tool.methods.notice.success(\"操作成功\" [,config])</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h3 id=\"tool-router\">tool.$router</h3>\n<p>tool.$router 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>属性</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>history</td>\n            <td>可以调用push、replace等跳转路由path得方法，<a href=\"https://reacttraining.com/react-router/web/api/history\" target=\"_blank\"> 更多请查看react-router的history</a></td>\n            <td>tool.$router.history.push(\"/login\")</td>\n        </tr>\n        <tr>\n            <td>location</td>\n            <td>当前路由的相关信息,<a href=\"https://reacttraining.com/react-router/web/api/location\" target=\"_blank\"> 更多请查看react-router的location</a></td>\n            <td>tool.$router.location.pathname</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "vabx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZeditorTreeHOC = ZeditorTreeHOC;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _ZpureComponent2 = _interopRequireDefault(__webpack_require__("jY6J"));

var _zTool = __webpack_require__("/sSO");

var _ZpageWrapper = __webpack_require__("e8xx");

var _constant = __webpack_require__("AmCF");

var _ZtreePanel = _interopRequireDefault(__webpack_require__("NnqQ"));

// import { Input } from "antd";
// 工具
// childs
// HOC
var PageWraper = (0, _ZpageWrapper.ZpageWraperHOC)();

function ZeditorTreeHOC(pageConfig) {
  pageConfig = pageConfig ? pageConfig : {};
  var defaultConfig = (0, _constant.const_getListConfig)("tree", "ZtreePanel");
  defaultConfig = (0, _zTool.mergeConfig)(defaultConfig, pageConfig);

  var List =
  /*#__PURE__*/
  function (_ZpureComponent) {
    (0, _inherits2.default)(List, _ZpureComponent);

    function List() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, List);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.config = defaultConfig;
      _this.pageWraper = (0, _constant.const_getPageWrapperProps)(_this.config);
      _this.pageId = (0, _zTool.GenNonDuplicateID)();
      return _this;
    }

    (0, _createClass2.default)(List, [{
      key: "render",
      value: function render() {
        if (this.pageWraper.pageHeader && this.pageWraper.pageHeader.show) {
          this.pageWraper.pageHeader.pageId = this.pageId;
        }

        return _react.default.createElement(PageWraper, this.pageWraper, _react.default.createElement(_ZtreePanel.default, (0, _extends2.default)({
          wrapperProps: this.props,
          pageId: this.pageId,
          colFormItems: this.config.searchForm.items,
          searchForm: this.config.searchForm
        }, this.config.tree, {
          insertLocation: this.config.insertLocation
        })));
      }
    }]);
    return List;
  }(_ZpureComponent2.default);

  return List;
}

var _default = ZeditorTreeHOC;
exports.default = _default;

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ })

}]);
//# sourceMappingURL=14.c805ac6e00da6bbfa3aa.js.map