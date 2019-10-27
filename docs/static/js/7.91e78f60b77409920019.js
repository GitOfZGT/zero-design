(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "1hJj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(359);

/***/ }),

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

/***/ }),

/***/ "23cp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tag = _interopRequireDefault(__webpack_require__("mr32"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _tooltip = _interopRequireDefault(__webpack_require__("3S7+"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _modal = _interopRequireDefault(__webpack_require__("kLXV"));

var _slider = _interopRequireDefault(__webpack_require__("eZ87"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _FormViewer = _interopRequireDefault(__webpack_require__("C6KC"));

var _FormContext = _interopRequireDefault(__webpack_require__("7Gy6"));

var _controls = _interopRequireDefault(__webpack_require__("cx2H"));

var _Zform = _interopRequireDefault(__webpack_require__("+Qac"));

var _zTool = __webpack_require__("/sSO");

var _ZerodMainContext = _interopRequireDefault(__webpack_require__("MaNN"));

__webpack_require__("tfup");

var _dragula2 = _interopRequireDefault(__webpack_require__("Wbw3"));

var _AddColForm = _interopRequireDefault(__webpack_require__("GI4E"));

var _GroupMoveBtns = _interopRequireDefault(__webpack_require__("2hj5"));

var _InsertGroupBtns = _interopRequireDefault(__webpack_require__("sSe+"));

var _GroupNameEdit = _interopRequireDefault(__webpack_require__("fRnC"));

var _LinkageConfig = _interopRequireDefault(__webpack_require__("ecf3"));

var _common = __webpack_require__("q151");

var _ZfullLayer = _interopRequireDefault(__webpack_require__("Z3zS"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//校验、提取最新的formData数据
function commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave) {
  layoutFormRef.current.validateFields(function (errors, values) {
    if (errors) return;
    var groups = formViewerRef.current.getFormGroups();
    var newFormData = {
      code: values.code,
      description: values.description,
      name: values.name,
      labelLayout: values.labelLayout,
      formSubmitTypeCode: values.formSubmitTypeCode
    };
    var hasEmptyGroup = false;
    newFormData.sectionList = groups.map(function (g, gindex) {
      var formList = g.groupRef.current.getFormItems().map(function (item, itemindex) {
        return {
          fieldKey: item.fieldKey,
          fieldType: item.fieldType,
          id: item.id,
          config: item.config,
          disabled: item.disabled,
          initialValue: item.initialValue,
          label: item.label,
          regularExpression: item.regularExpression,
          required: item.required,
          sectionId: item.sectionId,
          span: item.span,
          seq: itemindex + 1,
          errorMsg: item.errorMsg,
          remark: item.remark
        };
      });

      if (!hasEmptyGroup && !formList.length) {
        hasEmptyGroup = true;
      }

      return {
        id: g.additive ? undefined : g.id,
        name: g.name,
        formFieldInfoList: formList,
        seq: gindex + 1
      };
    });

    if (hasEmptyGroup) {
      _message2.default.error("存在空的组，请为其添加控件或者移除该组");

      return;
    }

    newFormData.linkages = Array.isArray(linkageRef.current) ? JSON.stringify(linkageRef.current) : null;
    typeof onSave === "function" && onSave(newFormData);
  });
}

function useGetItems(formData, formViewerRef, layoutFormRef, showModal, onSave, layerRef, showViewerRef, formRenderedRef, linkageRef, domWrapperElRef, getInsertLocation) {
  var hasCodeRef = (0, _react.useRef)(false); // const linkageRef = useRef(pareLinkages(formData.linkages));

  (0, _react.useEffect)(function () {
    if (layoutFormRef.current && formRenderedRef.current) {
      layoutFormRef.current.setFieldsValue({
        name: formData.name,
        code: formData.code,
        labelLayout: formData.labelLayout,
        description: formData.description,
        formSubmitTypeCode: formData.formSubmitTypeCode
      });
    }

    hasCodeRef.current = !!formData.code;
    linkageRef.current = (0, _common.pareLinkages)(formData.linkages);
  }, [formData, layoutFormRef.current, formRenderedRef.current]);
  var itemsRef = (0, _react.useRef)([{
    key: "name",
    label: "表单名称",
    span: 4,
    render: function render(form, changeFormItems) {
      return _controls.default["1"].getControl();
    },
    options: _controls.default["1"].getOptions({
      required: true,
      initialValue: formData.name
    })
  }, {
    key: "code",
    label: "表单编码",
    span: 4,
    render: function render(form, changeFormItems) {
      return _controls.default["1"].getControl({}, undefined, undefined, {
        disabled: hasCodeRef.current
      });
    },
    options: _controls.default["1"].getOptions({
      required: true,
      initialValue: formData.code
    })
  }, {
    key: "labelLayout",
    label: "label布局",
    span: 3,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _controls.default["3"].getControl({
        config: {
          selectList: [{
            label: "内联",
            value: "inline"
          }, {
            label: "纵向",
            value: "vertical"
          }, {
            label: "横向",
            value: "horizontal"
          }]
        }
      }, undefined, undefined, {
        onChange: function onChange(value) {
          var groups = formViewerRef.current.getFormGroups();
          formViewerRef.current.setFormGroups(groups.map(function (item) {
            return _objectSpread({}, item, {
              labelLayout: value
            });
          }));
        }
      });
    },
    options: _controls.default["3"].getOptions({
      initialValue: formData.labelLayout
    })
  }, {
    key: "formSubmitTypeCode",
    label: "表单提交类型",
    span: 3,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _controls.default["3"].getControl({
        config: {
          selectList: [{
            label: "普通表单",
            value: 1
          }, {
            label: "文书编辑",
            value: 2
          }, {
            label: "文件签名",
            value: 3
          }, {
            label: "文件盖章",
            value: 4
          }]
        }
      });
    },
    options: _controls.default["3"].getOptions({
      initialValue: 1
    })
  }, {
    key: "buttons",
    label: null,
    span: 10,
    render: function render() {
      return _react.default.createElement("div", {
        className: "z-text-right"
      }, _react.default.createElement(_button.default, {
        size: "small",
        type: "primary",
        icon: "block",
        className: "z-margin-right-12",
        onClick: function onClick() {
          commitFormData(formViewerRef, layoutFormRef, linkageRef, function (newFormData) {
            showModal({
              show: true,
              modal: "linkageConfigModal",
              content: _react.default.createElement(_LinkageConfig.default, {
                newFormData: newFormData,
                defaultValue: linkageRef.current,
                onChange: function onChange(newLinkages) {
                  console.log(JSON.stringify(newLinkages));
                  linkageRef.current = newLinkages;
                }
              })
            });
          });
        }
      }, "\u8054\u52A8\u914D\u7F6E"), _react.default.createElement(_button.default, {
        size: "small",
        type: "primary",
        icon: "file-unknown",
        className: "z-margin-right-12",
        onClick: function onClick() {
          commitFormData(formViewerRef, layoutFormRef, linkageRef, function (newFormData) {
            layerRef.current.methods.showLayer(true, function () {
              showViewerRef.current.setFormData(newFormData);
            }, true)();
          });
        }
      }, "\u9884\u89C8"), _react.default.createElement(_button.default, {
        size: "small",
        type: "primary",
        icon: "check",
        className: "z-margin-right-12",
        onClick: function onClick() {
          commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave);
        }
      }, "\u4FDD\u5B58"));
    }
  }, {
    key: "description",
    label: "描述",
    span: 24,
    render: function render(form, changeFormItems) {
      return _controls.default["2"].getControl();
    },
    options: _controls.default["2"].getOptions({
      required: false,
      initialValue: formData.description
    })
  }]);
  return itemsRef.current;
}

function openUpdateControl(showModal, groupId, formViewerRef, linkageRef, formItem, type) {
  showModal({
    show: true,
    modal: "controlProtoModal",
    content: _react.default.createElement(_AddColForm.default, {
      groupId: groupId,
      formItem: formItem,
      formViewerRef: formViewerRef,
      linkageRef: linkageRef,
      type: type
    }),
    width: "800px"
  });
}

function setNewCurrentGroupItems(formViewerRef, item, action) {
  var groups = formViewerRef.current.getFormGroups();
  var groupRefIndex = groups.findIndex(function (g) {
    return g.id == item.groupId;
  });
  var groupRef = groups[groupRefIndex].groupRef;
  var currentItems = groupRef.current.getFormItems().slice(0);
  var i = currentItems.findIndex(function (o) {
    return o.key == item.key;
  });
  var newItems = typeof action === "function" ? action(currentItems, i) : currentItems;
  groupRef.current.setFormItems(newItems);
}

function useFormProps(showModal, formViewerRef, linkageRef) {
  return (0, _react.useRef)({
    colContentRender: function colContentRender(item, form) {
      return _react.default.createElement("div", {
        className: "z-live-tool"
      }, _react.default.createElement("div", {
        style: {
          width: "40%"
        },
        className: "z-padding-left-10"
      }, _react.default.createElement(_slider.default, {
        min: 2,
        max: 24,
        defaultValue: item.span,
        onAfterChange: function onAfterChange(value) {
          setNewCurrentGroupItems(formViewerRef, item, function (currentItems, i) {
            currentItems.splice(i, 1, _objectSpread({}, currentItems[i], {
              span: value
            }));
            return (0, _toConsumableArray2.default)(currentItems);
          });
        }
      })), _react.default.createElement("div", null, _react.default.createElement(_tooltip.default, {
        placement: "top",
        title: "\u79FB\u9664\u63A7\u4EF6"
      }, _react.default.createElement("div", {
        className: "z-live-tool-item right-item delete",
        onClick: function onClick() {
          _modal.default.confirm({
            title: "\u786E\u8BA4\u79FB\u9664[".concat(item.label, "]\u8FD9\u4E2A\u63A7\u4EF6\u5417?"),
            okText: "确定",
            cancelText: "取消",
            onOk: function onOk() {
              setNewCurrentGroupItems(formViewerRef, item, function (currentItems, i) {
                linkageRef.current && (0, _common.removeSomeLinkage)(linkageRef, currentItems[i].fieldKey);
                currentItems.splice(i, 1);
                return currentItems;
              });
            }
          });
        }
      }, _react.default.createElement(_icon.default, {
        type: "delete"
      }))), _react.default.createElement(_tooltip.default, {
        placement: "top",
        title: "\u4FEE\u6539\u63A7\u4EF6"
      }, _react.default.createElement("div", {
        className: "z-live-tool-item right-item",
        onClick: function onClick() {
          openUpdateControl(showModal, item.groupId, formViewerRef, linkageRef, item, "update");
        }
      }, _react.default.createElement(_icon.default, {
        type: "form"
      }))), _react.default.createElement("div", {
        className: "z-live-tool-item right-item"
      }, _react.default.createElement("i", {
        className: "zero-icon zerod-move",
        "data-handle": "handle"
      }))));
    },
    submitBtnRender: function submitBtnRender(onSubmit, props) {
      return _react.default.createElement(_col.default, {
        span: 24,
        "data-groupid": props.group.id,
        className: "z-text-center z-margin-bottom-10 z-add-formitem-btn",
        onClick: function onClick() {
          openUpdateControl(showModal, props.group.id, formViewerRef, linkageRef, null, "add");
        }
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), " \u6DFB\u52A0\u63A7\u4EF6");
    }
  }).current;
}

function getParentElement(el) {
  var _pE = el.parentElement;

  while (_pE && !_pE.className.includes("z-form-row")) {
    _pE = el.parentElement;
  }

  return _pE;
}

function getGroupIndex(formViewerRef, group) {
  var groups = formViewerRef.current.getFormGroups();
  var index = groups.findIndex(function (g) {
    return g.id === group.id;
  });
  var newGroups = groups.slice(0);
  return [newGroups, index];
}

function getNewGroupData(labelLayout, groupnameNumRef) {
  var item = {
    additive: true,
    name: "\u7EC4\u540D-".concat(groupnameNumRef.current),
    id: (0, _zTool.GenNonDuplicateID)(),
    formFieldInfoList: [],
    labelLayout: labelLayout
  };
  groupnameNumRef.current++;
  return item;
}

var propTypes = {
  formData: _propTypes.default.object.isRequired,
  onSave: _propTypes.default.func,
  showRightModal: _propTypes.default.func,
  showLayerRightModal: _propTypes.default.func
};
var defaultProps = {
  formData: {}
};

var ShowFormViewer = _react.default.memo(_react.default.forwardRef(function (props, ref) {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      setFormData: setFormData
    };
  });
  return formData ? _react.default.createElement("div", {
    style: {
      width: "90%",
      margin: "0 auto",
      padding: "20px 0"
    }
  }, _react.default.createElement(_FormViewer.default, {
    formData: formData
  })) : _react.default.createElement("div", {
    style: {
      height: "100px"
    }
  });
}));

var ZliveForm = _ZerodMainContext.default.setConsumer(function LiveForm(_ref) {
  var formData = _ref.formData,
      onSave = _ref.onSave,
      showRightModal = _ref.showRightModal,
      getInsertLocation = _ref.getInsertLocation;
  formData.customControlRender = null;
  var domWrapperElRef = (0, _react.useRef)();
  var groupnameNumRef = (0, _react.useRef)(1);
  var layerRef = (0, _react.useRef)(null);
  var linkageRef = (0, _react.useRef)(null);
  var showViewerRef = (0, _react.useRef)(null);
  var layoutFormRef = (0, _react.useRef)(null); //取FormViewer的实例

  var formViewerRef = (0, _react.useRef)(null); //打开modal的方法

  var showModal = _zTool.dataType.isFunction(showRightModal) ? showRightModal : function () {};

  if (!formData.sectionList || !formData.sectionList.length) {
    formData.sectionList = [getNewGroupData(formData.labelLayout, groupnameNumRef)];
  } //当前Zform的items


  var formRenderedRef = (0, _react.useRef)(false);
  var items = useGetItems(formData, formViewerRef, layoutFormRef, showModal, onSave, layerRef, showViewerRef, formRenderedRef, linkageRef, domWrapperElRef, getInsertLocation); //FormGroup里面Zform的扩展属性

  var formProps = useFormProps(showModal, formViewerRef, linkageRef); //存dragula的实例

  var drakeRef = (0, _react.useRef)(null); //存拖动元素下一个元素

  var nextSiblingRef = (0, _react.useRef)(null); //动态表单组变化的回调

  var onFormGroupsChange = (0, _react.useCallback)(function (formGroups) {
    if (!drakeRef.current) {
      if (formGroups.length) {
        drakeRef.current = (0, _dragula2.default)(formGroups.map(function (g) {
          return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
        }), {
          removeOnSpill: false,
          revertOnSpill: true,
          direction: "mixed",
          copy: false,
          copySortSource: false,
          accepts: function accepts(el, target, source, sibling) {
            //因为 z-add-formitem-btn 按钮是target/source最后一个子元素，也就是没有sibling时是不能被停放的
            if (!sibling) {
              return false;
            }

            return true;
          },
          moves: function moves(el, source, handle, sibling) {
            return handle.dataset.handle == "handle";
          }
        }).on("cloned", function (cloneEl, sourceEl, type) {
          nextSiblingRef.current = sourceEl.nextElementSibling;

          var _parEl = getParentElement(sourceEl);

          cloneEl.className += " z-live-form-item-clone ".concat(_parEl.className.slice(/z\-form\-label\-/g.exec(_parEl.className).index));
        }).on("drop", function (el, target, source, sibling) {
          var groups = formViewerRef.current.getFormGroups();
          var currentItem = JSON.parse(el.dataset.item);
          var currentGroup = groups.find(function (g) {
            return g.id == currentItem.groupId;
          });
          var newFormItems = currentGroup.groupRef.current.getFormItems().slice(0);
          var currentindex = newFormItems.findIndex(function (item) {
            return item.key == currentItem.key;
          });
          var currentFormitem = newFormItems[currentindex];

          if (target === source) {
            if (sibling.dataset.item) {
              var siblingItem = JSON.parse(sibling.dataset.item);
              var sibingindex = newFormItems.findIndex(function (item) {
                return item.key == siblingItem.key;
              });

              if (currentindex < sibingindex) {
                newFormItems.splice(sibingindex, 0, currentFormitem);
                newFormItems.splice(currentindex, 1);
              } else if (currentindex > sibingindex) {
                newFormItems.splice(currentindex, 1);
                newFormItems.splice(sibingindex, 0, currentFormitem);
              }
            } else {
              newFormItems.splice(currentindex, 1);
              newFormItems.push(currentFormitem);
            }

            currentGroup.groupRef.current.setFormItems(newFormItems);
          } else {
            var targetGroup = null;
            var targetFormItems = [];

            if (sibling.dataset.item) {
              var _siblingItem = JSON.parse(sibling.dataset.item);

              targetGroup = groups.find(function (g) {
                return g.id == _siblingItem.groupId;
              });
              targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);

              var _sibingindex = targetFormItems.findIndex(function (item) {
                return item.key == _siblingItem.key;
              });

              currentFormitem.groupId = _siblingItem.groupId;
              targetFormItems.splice(_sibingindex, 0, currentFormitem);
            } else if (sibling.dataset.groupid) {
              targetGroup = groups.find(function (g) {
                return g.id == sibling.dataset.groupid;
              });
              targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);
              currentFormitem.groupId = sibling.dataset.groupid;
              targetFormItems.push(currentFormitem);
            }

            if (targetGroup) {
              target.removeChild(el);
              source.appendChild(el); // console.log(target,source)

              newFormItems.splice(currentindex, 1);
              targetGroup.groupRef.current.setFormItems(targetFormItems);
              currentGroup.groupRef.current.setFormItems(newFormItems);
            }
          }
        });
      }
    } else {
      drakeRef.current.containers = formGroups.map(function (g) {
        return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
      });
    }
  }, [drakeRef.current, formViewerRef.current, nextSiblingRef.current]);
  var getFormInstance = (0, _react.useCallback)(function (form) {
    layoutFormRef.current = form;
  }, [layoutFormRef.current]);

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      pageHeaderBox = _useState4[0],
      setPageHeaderBox = _useState4[1];

  (0, _react.useEffect)(function () {
    var parEl = domWrapperElRef.current;

    while (parEl && !parEl.dataset.zgt_modal) {
      parEl = parEl.parentElement;
    }

    if (parEl) {
      setPageHeaderBox(parEl.querySelector("#ZpageHeaderBox"));
    }
  }, []);

  var configHeader = _react.default.createElement("div", {
    className: "z-panel is-radius-top z-shadow-blue"
  }, _react.default.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important"
  }, _react.default.createElement(_Zform.default, {
    items: items,
    labelLayout: "inline",
    style: {
      width: "100%"
    },
    submitBtnName: "",
    getFormInstance: getFormInstance,
    afterItemsRendered: function afterItemsRendered() {
      formRenderedRef.current = true;
    }
  })));

  return _react.default.createElement("section", {
    ref: domWrapperElRef,
    className: "z-padding-14"
  }, _react.default.createElement(_FormContext.default.Provider, {
    value: formProps
  }, pageHeaderBox ? _reactDom.default.createPortal(configHeader, pageHeaderBox) : configHeader, _react.default.createElement(_FormViewer.default, {
    onFormGroupsChange: onFormGroupsChange,
    ref: formViewerRef,
    className: "z-live-form",
    formData: formData,
    title: false,
    linkage: false,
    noAsync: true,
    groupTitleLeftRender: function groupTitleLeftRender(group, stateGroupName, onGroupNameChange, groups) {
      return _react.default.createElement(_GroupNameEdit.default, {
        value: stateGroupName,
        onChange: function onChange(val) {
          var hasindex = groups.findIndex(function (item) {
            return item.name === val;
          });

          if (hasindex > -1) {
            _message2.default.error("组名不能与其他组名相同");

            return true;
          }

          onGroupNameChange(val);
        }
      });
    },
    groupTitleRightRender: function groupTitleRightRender(group) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_InsertGroupBtns.default, {
        onInsertUp: function onInsertUp() {
          var _getGroupIndex = getGroupIndex(formViewerRef, group),
              _getGroupIndex2 = (0, _slicedToArray2.default)(_getGroupIndex, 2),
              newGroups = _getGroupIndex2[0],
              index = _getGroupIndex2[1];

          var groupItem = (0, _common.getGroupItem)({
            group: getNewGroupData(layoutFormRef.current.getFieldValue("labelLayout"), groupnameNumRef)
          });

          if (index === 0) {
            newGroups.unshift(groupItem);
          } else {
            newGroups.splice(index, 0, groupItem);
          }

          formViewerRef.current.setFormGroups(newGroups);

          _message2.default.success("向上插入组成功");
        },
        onInsertDown: function onInsertDown() {
          var _getGroupIndex3 = getGroupIndex(formViewerRef, group),
              _getGroupIndex4 = (0, _slicedToArray2.default)(_getGroupIndex3, 2),
              newGroups = _getGroupIndex4[0],
              index = _getGroupIndex4[1];

          var groupItem = (0, _common.getGroupItem)({
            group: getNewGroupData(layoutFormRef.current.getFieldValue("labelLayout"), groupnameNumRef)
          });

          if (index === newGroups.length - 1) {
            newGroups.push(groupItem);
          } else {
            newGroups.splice(index + 1, 0, groupItem);
          }

          formViewerRef.current.setFormGroups(newGroups);

          _message2.default.success("向下插入组成功");
        }
      }), _react.default.createElement(_GroupMoveBtns.default, {
        onMoveUp: function onMoveUp() {
          var _getGroupIndex5 = getGroupIndex(formViewerRef, group),
              _getGroupIndex6 = (0, _slicedToArray2.default)(_getGroupIndex5, 2),
              newGroups = _getGroupIndex6[0],
              index = _getGroupIndex6[1];

          if (index > 0) {
            newGroups.splice(index, 1);
            newGroups.splice(index - 1, 0, group);
            formViewerRef.current.setFormGroups(newGroups);

            _message2.default.success("上移成功");
          }
        },
        onMoveDown: function onMoveDown() {
          var _getGroupIndex7 = getGroupIndex(formViewerRef, group),
              _getGroupIndex8 = (0, _slicedToArray2.default)(_getGroupIndex7, 2),
              newGroups = _getGroupIndex8[0],
              index = _getGroupIndex8[1];

          if (index > -1 && index < newGroups.length - 1) {
            newGroups.splice(index + 2, 0, group);
            newGroups.splice(index, 1);
            formViewerRef.current.setFormGroups(newGroups);

            _message2.default.success("下移成功");
          }
        },
        onRemove: function onRemove() {
          _modal.default.confirm({
            title: "\u786E\u8BA4\u79FB\u9664[".concat(group.name, "]\u8FD9\u4E2A\u7EC4\u5417?"),
            okText: "确定",
            cancelText: "取消",
            onOk: function onOk() {
              var _getGroupIndex9 = getGroupIndex(formViewerRef, group),
                  _getGroupIndex10 = (0, _slicedToArray2.default)(_getGroupIndex9, 2),
                  newGroups = _getGroupIndex10[0],
                  index = _getGroupIndex10[1];

              if (newGroups.length === 1) {
                _message2.default.warning("最后一组不能移除");

                return;
              }

              newGroups.splice(index, 1);
              formViewerRef.current.setFormGroups(newGroups);

              _message2.default.success("移除成功");
            }
          });
        }
      }), _react.default.createElement(_tag.default, {
        color: group.additive ? "blue" : "magenta"
      }, group.additive ? "\u65B0\u589E" : "ID".concat(group["id"])));
    }
  })), _react.default.createElement(_ZfullLayer.default, {
    ref: layerRef
  }, _react.default.createElement(ShowFormViewer, {
    ref: showViewerRef
  })));
});

ZliveForm.propTypes = propTypes;
ZliveForm.defaultProps = defaultProps;
ZliveForm.FormViewer = _FormViewer.default;
var _default = ZliveForm;
exports.default = _default;

/***/ }),

/***/ "2hj5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tooltip = _interopRequireDefault(__webpack_require__("3S7+"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _default = _react.default.memo(function GroupMoveBtns(props) {
  var onMoveUp = props.onMoveUp,
      onMoveDown = props.onMoveDown,
      onRemove = props.onRemove;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u4E0A\u79FB"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onMoveUp
  }, _react.default.createElement(_icon.default, {
    type: "arrow-up"
  }))), _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u4E0B\u79FB"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onMoveDown
  }, _react.default.createElement(_icon.default, {
    type: "arrow-down"
  }))), _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u79FB\u9664\u7EC4"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border small delete z-margin-right-10",
    onClick: onRemove
  }, _react.default.createElement(_icon.default, {
    type: "delete"
  }))));
});

exports.default = _default;

/***/ }),

/***/ "2mBW":
/***/ (function(module, exports) {

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

module.exports = _readOnlyError;

/***/ }),

/***/ "6A4n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.autoCheckedBySelected = void 0;

var _readOnlyError2 = _interopRequireDefault(__webpack_require__("2mBW"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _zTool = __webpack_require__("/sSO");

var _debounce = _interopRequireDefault(__webpack_require__("sEfC"));

var _moment = _interopRequireDefault(__webpack_require__("wd/R"));

var _controls = _interopRequireDefault(__webpack_require__("cx2H"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function concatKeys(values, arr, a, d) {
  var getNewFields = function getNewFields() {
    return d.fields.map(function (item) {
      return _objectSpread({}, item, {
        srcFieldKey: a.src.fieldKey
      });
    });
  };

  if (["6", "7", "8"].includes(a.linkageType) || d.srcValue !== undefined && values[a.src.fieldKey] !== undefined && d.srcValue == values[a.src.fieldKey]) {
    arr = arr.concat(getNewFields());
  } else if (Array.isArray(values[a.src.fieldKey])) {
    if (Array.isArray(d.srcValue)) {
      if (JSON.stringify(values[a.src.fieldKey]) == JSON.stringify(d.srcValue)) {
        arr = arr.concat(getNewFields());
      }
    } else if (values[a.src.fieldKey].includes(d.srcValue)) {
      arr = arr.concat(getNewFields());
    }
  }

  return arr;
}

var initialValueLinkageAction = (0, _debounce.default)(function () {
  var ages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var getGroupsFn = arguments.length > 1 ? arguments[1] : undefined;
  var seftItem = arguments.length > 2 ? arguments[2] : undefined;
  ages = _zTool.dataType.isArray(ages) ? ages : []; // console.log(ages, getGroupsFn, seftItem);

  if (!ages.length) return;
  var formObjs = [];
  var groups = getGroupsFn();
  groups.forEach(function (g) {
    formObjs.push(g.groupRef.current.getForm());
  });
  var values = {};
  formObjs.forEach(function (o) {
    values = _objectSpread({}, values, {}, o.form.getFieldsValue());
  });
  var cardGetBirthdayKeys = [];
  var asyncParamNameKeys = [];
  var regionNameKeys = [];
  var groupHiddenIds = [];
  var hiddenKeys = [];
  var disabledKeys = [];
  var requiredKeys = [];
  var noRequiredKeys = [];
  var selectOptions = [];
  var hasClearSelect = false;
  ages.forEach(function (a) {
    if (values.hasOwnProperty(a.src.fieldKey)) {
      switch (a.linkageType) {
        //地图选点取行政区划
        case "8":
          a.dist.forEach(function (d) {
            regionNameKeys = concatKeys(values, regionNameKeys, a, d);
          });
          break;
        //单选联动异步请求选项

        case "7":
          a.dist.forEach(function (d) {
            asyncParamNameKeys = concatKeys(values, asyncParamNameKeys, a, d);
          });
          break;
        //输入身份证自动联动生日

        case "6":
          a.dist.forEach(function (d) {
            cardGetBirthdayKeys = concatKeys(values, cardGetBirthdayKeys, a, d);
          });
          break;
        //隐藏

        case "5.1":
          a.dist.forEach(function (d) {
            groupHiddenIds = concatKeys(values, groupHiddenIds, a, d);
          });
          break;

        case "5.2":
          a.dist.forEach(function (d) {
            hiddenKeys = concatKeys(values, hiddenKeys, a, d);
          });
          break;
        //禁用

        case "1":
          a.dist.forEach(function (d) {
            disabledKeys = concatKeys(values, disabledKeys, a, d);
          });
          break;
        // 必填

        case "2":
          a.dist.forEach(function (d) {
            requiredKeys = concatKeys(values, requiredKeys, a, d);
          });
          break;
        // 非必填

        case "3":
          a.dist.forEach(function (d) {
            noRequiredKeys = concatKeys(values, noRequiredKeys, a, d);
          });
          break;
        // 控制选项

        case "4":
          hasClearSelect = seftItem && a.src.fieldKey == seftItem.fieldKey;
          a.dist.forEach(function (d) {
            selectOptions = concatKeys(values, selectOptions, a, d);
          }); // console.log("selectOptions",selectOptions)

          break;
      }
    }
  });
  var newFormObjs = [];
  var newItems = [];
  var asyncFields = [];
  groups.forEach(function (g, gindex) {
    var findHideGroup = groupHiddenIds.findIndex(function (gh) {
      return gh.groupName && gh.groupName === g.name;
    });
    g.groupRef.current.show(findHideGroup === -1, seftItem);

    if (findHideGroup === -1) {
      newFormObjs.push(g.groupRef.current.getForm());
      g.formItems.forEach(function (field) {
        var hiddenFields = (0, _zTool.arrayFilterBy)(hiddenKeys, {
          fieldKey: field.fieldKey
        });

        if (values.hasOwnProperty(field.fieldKey)) {
          var disabledFields = (0, _zTool.arrayFilterBy)(disabledKeys, {
            fieldKey: field.fieldKey
          });
          var requiredFields = (0, _zTool.arrayFilterBy)(requiredKeys, {
            fieldKey: field.fieldKey
          });
          var noRequiredFields = (0, _zTool.arrayFilterBy)(noRequiredKeys, {
            fieldKey: field.fieldKey
          });
          var selectOptionsFields = (0, _zTool.arrayFilterBy)(selectOptions, {
            fieldKey: field.fieldKey
          });

          var _e = _objectSpread({}, field);

          if (disabledFields.length) {
            _e.required = 0;
          } else if (requiredFields.length && noRequiredFields.length) {
            console.error("\u540C\u4E2A\u63A7\u4EF6\u4E0D\u5E94\u8BE5\u540C\u65F6\u5B58\u5728\"\u5FC5\u586B\"\u548C\"\u975E\u5FC5\u586B\"\u8054\u52A8\u914D\u7F6E\uFF0C\u8BF7\u7EA0\u6B63");
          } else if (requiredFields.length) {
            _e.required = 1;
          } else if (noRequiredFields.length) {
            _e.required = 0;
          }

          if (typeof _e.config == "string") {
            try {
              _e.config = JSON.parse(_e.config);
            } catch (e) {}
          }

          if (selectOptionsFields.length) {
            _e.config = _objectSpread({}, _e.config, {
              selectList: selectOptionsFields[0].options,
              customOnChange: null
            });
          }

          var control = disabledFields.length || selectOptionsFields.length ? _controls.default[_e.fieldType].getControl(_e, ages, getGroupsFn, {
            disabled: disabledFields.length > 0 || !!_e.disabled
          }) : null;

          var newFieldProto = _objectSpread({}, _e, {
            imperative: null,
            options: null,
            render: null,
            config: JSON.stringify(_e.config)
          });

          var currentFieldProto = _objectSpread({}, field, {
            imperative: null,
            options: null,
            render: null
          });

          var options = JSON.stringify(newFieldProto) !== JSON.stringify(currentFieldProto) ? _controls.default[_e.fieldType].getOptions(_e) : null;
          var newItem = {};

          if (control) {
            newItem.control = control;
          }

          if (options) {
            newItem.options = options;
          }

          newItems.push({
            key: _e.fieldKey,
            show: !hiddenFields.length,
            newItem: control || options ? newItem : _e.config.selectionsType == 2 ? undefined : "reset"
          }); //单选联动异步请求选项

          var paramField = asyncParamNameKeys.find(function (item) {
            return item.fieldKey === _e.fieldKey;
          });

          if (paramField && _e.config.selectionsType == 2) {
            _e.config = _objectSpread({}, _e.config, {
              selectionsQuery: _objectSpread({}, _e.config.selectionsQuery, (0, _defineProperty2.default)({}, paramField.asyncParamName, values[paramField.srcFieldKey]))
            });
            _e.groupIndex = gindex;
            _e.srcFieldKey = paramField.srcFieldKey;
            asyncFields.push(_e);
          }
        } else {
          newItems.push({
            key: field.fieldKey,
            show: !hiddenFields.length
          });
        }
      });
    }
  }); // console.log(selectOptions)

  newFormObjs.forEach(function (o, i) {
    o.methods.changeFormItems(newItems, true);
    asyncFields.forEach(function (e) {
      if (seftItem && e.srcFieldKey == seftItem.fieldKey || !seftItem) {
        var isShow = o.form.zformItems.find(function (item) {
          return item.key === e.fieldKey && item.ref.current.state.show;
        });

        if (!isShow && i !== e.groupIndex) {
          return;
        }

        o.methods.changeFormItems({
          key: e.fieldKey,
          loading: true
        }, true);

        _controls.default[e.fieldType].getControl(e, ages, getGroupsFn, {
          isAsync: true
        }, undefined, o.form).then(function (control) {
          o.methods.changeFormItems({
            key: e.fieldKey,
            loading: false,
            newItem: {
              control: control
            }
          }, true);
        });
      }
    });
    var resetDisable = disabledKeys.map(function (item) {
      return item.fieldKey;
    });
    var resetNoRequired = noRequiredKeys.map(function (item) {
      return item.fieldKey;
    });
    var resetSelect = selectOptions.map(function (item) {
      return item.fieldKey;
    });
    o.form.validateFields([].concat((0, _toConsumableArray2.default)(resetDisable), (0, _toConsumableArray2.default)(resetNoRequired)));
    o.form.resetFields([].concat((0, _toConsumableArray2.default)(resetDisable), (0, _toConsumableArray2.default)(hasClearSelect ? resetSelect : []))); //处理身份证号码获取生日联动到其他控件：

    if (cardGetBirthdayKeys.length) {
      var formValues = o.form.getFieldsValue();
      cardGetBirthdayKeys.forEach(function (field) {
        if (formValues.hasOwnProperty(field.fieldKey)) {
          var birthday = values[field.srcFieldKey];
          var val = birthday && birthday.length > 14 ? birthday.substring(6, 14) : "";
          o.form.setFieldsValue((0, _defineProperty2.default)({}, field.fieldKey, field.fieldType == 5 ? (0, _moment.default)(stringJoinSyml(val)) : stringJoinSyml(val)));
        }
      });
    } //处理地图选点的信息联动到其他控件：


    if (regionNameKeys.length) {
      var _formValues = o.form.getFieldsValue();

      regionNameKeys.forEach(function (field) {
        if (_formValues.hasOwnProperty(field.fieldKey)) {
          var mapInfo = values[field.srcFieldKey];

          if (_zTool.dataType.isObject(mapInfo) && field.regionName) {
            var regions = field.regionName.split(",");
            var inputString = "";
            regions.forEach(function (key) {
              inputString += mapInfo[key];
            });
            o.form.setFieldsValue((0, _defineProperty2.default)({}, field.fieldKey, inputString));
          }
        }
      });
    }
  });
}, 60);

function stringJoinSyml(str) {
  return str.length === 8 ? str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 8) : "";
}

var autoCheckedBySelected = (0, _debounce.default)(function (ages, getGroupsFn, seftItem) {
  ages = _zTool.dataType.isArray(ages) ? ages : [];
  var groups = getGroupsFn();
  groups.forEach(function (g) {
    var currentForm = g.groupRef.current.getForm();
    g.formItems.forEach(function (field) {
      var config = field.config;

      if (typeof config == "string") {
        try {
          config = ((0, _readOnlyError2.default)("config"), JSON.parse(e.config));
        } catch (e) {}
      }

      var options = currentForm.form.saveFieldOptions[field.fieldKey];

      if (options && options.length) {
        var currentValue = currentForm.form.getFieldValue(field.fieldKey);
        var hasValue = currentValue !== undefined && currentValue !== null && currentValue !== "" || Array.isArray(currentValue) && currentValue.length;
        if (hasValue) return;
        var multiple = ["multiple", "tags"].includes(config.mode);
        var newValue = null;
        var selectedValue = options.filter(function (item) {
          if (item.selected && multiple) item.disabled = true;
          return item.selected;
        }).map(function (item) {
          return item.value;
        });

        if (field.fieldType === 9 || field.fieldType === 3 && !multiple) {
          newValue = selectedValue[0];
        } else if (field.fieldType === 8 || field.fieldType === 3 && multiple) {
          newValue = selectedValue;
        }

        if (newValue) {
          var zformItem = currentForm.form.zformItems.find(function (item) {
            return item.key === field.fieldKey;
          });
          var currentStateItem = zformItem.ref.current.state.item;
          var originProps = {};
          if (currentStateItem.control.props) Object.keys(currentStateItem.control.props).forEach(function (key) {
            if (!["children", "value", "onChange"].includes(key)) {
              originProps[key] = currentStateItem.control.props[key];
            }
          });
          currentForm.methods.changeFormItems({
            key: field.fieldKey,
            newItem: {
              control: _controls.default[field.fieldType].getControl(field, ages, getGroupsFn, _objectSpread({}, originProps, {
                isAsync: false
              }), undefined, currentForm.form)
            }
          }, true);
          currentForm.form.setFieldsValue((0, _defineProperty2.default)({}, field.fieldKey, newValue));
        }
      }
    });
  });
}, 60);
exports.autoCheckedBySelected = autoCheckedBySelected;
var _default = initialValueLinkageAction;
exports.default = _default;

/***/ }),

/***/ "7Gy6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var defaultValue = {};

var context = _react.default.createContext(defaultValue);

var Provider = context.Provider,
    Consumer = context.Consumer;

var setConsumer = function setConsumer(ChildComponent) {
  return (
    /*#__PURE__*/
    function (_React$PureComponent) {
      (0, _inherits2.default)(ContextConsumer, _React$PureComponent);

      function ContextConsumer() {
        (0, _classCallCheck2.default)(this, ContextConsumer);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ContextConsumer).apply(this, arguments));
      }

      (0, _createClass2.default)(ContextConsumer, [{
        key: "render",
        value: function render() {
          var _this = this;

          return _react.default.createElement(Consumer, null, function (value) {
            return _react.default.createElement(ChildComponent, (0, _extends2.default)({}, _this.props, value));
          });
        }
      }]);
      return ContextConsumer;
    }(_react.default.PureComponent)
  );
};

var _default = {
  name: "FormContext",
  defaultValue: defaultValue,
  Provider: Provider,
  Consumer: Consumer,
  setConsumer: setConsumer
};
exports.default = _default;

/***/ }),

/***/ "8/JR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(81);

/***/ }),

/***/ "C6KC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _zTool = __webpack_require__("/sSO");

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _customHook = __webpack_require__("ZIHu");

var _FormGroup = _interopRequireDefault(__webpack_require__("JolE"));

var _common = __webpack_require__("q151");

__webpack_require__("dVQ/");

//formData: {id:1,name:"表",labelLayout:"",code:"dog_check_in_form",sectionList: [{id:"12",name:"名称",seq:1,formFieldInfoList:[{config:"{}",fieldKey:"name",fieldType:1,id:333,initialValue:"",label:"名称",required:1,span:8,regularExpression:null,seq:1,placeholder:"",errorMsg:""}]}]}
var FormViewer = _react.default.forwardRef(function (_ref, ref) {
  var formData = _ref.formData,
      formValues = _ref.formValues,
      onSubmit = _ref.onSubmit,
      groupTitleLeftRender = _ref.groupTitleLeftRender,
      groupTitleRightRender = _ref.groupTitleRightRender,
      className = _ref.className,
      onFormGroupsChange = _ref.onFormGroupsChange,
      linkage = _ref.linkage,
      groupChildrenRender = _ref.groupChildrenRender,
      submitBtnRender = _ref.submitBtnRender,
      title = _ref.title,
      style = _ref.style,
      momentFormat = _ref.momentFormat,
      booleanToNumber = _ref.booleanToNumber,
      afterItemsRendered = _ref.afterItemsRendered,
      customOnChange = _ref.customOnChange,
      customFormRules = _ref.customFormRules,
      customControlRender = _ref.customControlRender,
      noAsync = _ref.noAsync;

  var _linkage = _zTool.dataType.isBoolean(linkage) ? linkage : true;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      formGroups = _useState2[0],
      setFormGroups = _useState2[1];

  var getOtherForms = (0, _customHook.useGetOtherFormsCallback)(formGroups); // const submitBtnRender = useSubmitBtn(formData, formGroups);

  var getGroupsFn = (0, _customHook.useGetGroupsCallback)(formGroups);
  var doSubmit = (0, _customHook.useDoSubmitCallback)(formGroups);
  var imperativeRef = (0, _react.useRef)();

  imperativeRef.current = function () {
    return {
      getFormGroups: function getFormGroups() {
        return formGroups;
      },
      setFormGroups: setFormGroups,
      getEachFormMethod: function getEachFormMethod() {
        return (0, _customHook.getEachFormMethod)(formGroups, true);
      }
    };
  }; //formData改变时==>处理数据


  (0, _react.useEffect)(function () {
    setFormGroups((0, _common.translateGroups)({
      formData: formData,
      getGroupsFn: getGroupsFn,
      linkage: _linkage,
      imperative: imperativeRef,
      customOnChange: customOnChange,
      customFormRules: customFormRules,
      customControlRender: customControlRender,
      noAsync: noAsync
    }));
    setAllFormRendered([]);
  }, [formData]); //formGroups改变时==>调用onFormGroupsChange

  (0, _react.useEffect)(function () {
    _zTool.dataType.isFunction(onFormGroupsChange) && onFormGroupsChange(formGroups);
  }, [formGroups]);
  var doLinkage = _linkage ? (0, _customHook.useLinkageCallback)(formData, getGroupsFn) : null;
  (0, _react.useImperativeHandle)(ref, imperativeRef.current);
  var titleText = _zTool.dataType.isBoolean(title) && !title ? "" : title ? title : formData && formData.name ? formData.name : "";

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      allFormRendered = _useState4[0],
      setAllFormRendered = _useState4[1];

  (0, _react.useEffect)(function () {
    if (allFormRendered.length && allFormRendered.length === formGroups.length) {
      setAllFormRendered([]);
      doLinkage && doLinkage();
      afterItemsRendered && afterItemsRendered();
    }
  }, [allFormRendered]);
  return _react.default.createElement("div", {
    className: "z-panel z-padding-bottom-20 ".concat(className ? className : ""),
    style: style
  }, titleText ? _react.default.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important z-text-center"
  }, _react.default.createElement("h2", null, titleText)) : null, formGroups.map(function (group, i) {
    return _react.default.createElement(_FormGroup.default, {
      titleLeftRender: groupTitleLeftRender ? function (group, groupName, nameChange) {
        return groupTitleLeftRender(group, groupName, nameChange, formGroups);
      } : undefined,
      titleRightRender: groupTitleRightRender,
      group: group,
      onSubmit: onSubmit,
      key: group.id,
      labelLayout: group.labelLayout,
      ref: group.groupRef,
      formItems: group.formItems,
      getOtherForms: getOtherForms,
      formValues: formValues,
      momentFormat: momentFormat,
      booleanToNumber: booleanToNumber,
      afterItemsRendered: function afterItemsRendered() {
        setAllFormRendered(allFormRendered.concat(["success"]));
      }
    }, typeof groupChildrenRender == "function" && groupChildrenRender(group));
  }), typeof submitBtnRender == "function" ? submitBtnRender(doSubmit) : null);
});

FormViewer.propTypes = {
  formData: _propTypes.default.object.isRequired,
  formValues: _propTypes.default.object,
  onSubmit: _propTypes.default.func,
  groupTitleRightRender: _propTypes.default.func,
  className: _propTypes.default.string,
  onFormGroupsChange: _propTypes.default.func,
  linkage: _propTypes.default.bool,
  groupChildrenRender: _propTypes.default.func,
  submitBtnRender: _propTypes.default.func,
  afterItemsRendered: _propTypes.default.func,
  momentFormat: _propTypes.default.bool,
  booleanToNumber: _propTypes.default.bool,
  useDefaultVisible: _propTypes.default.bool,
  //是否启用控件的默认显示控制
  customOnChange: _propTypes.default.object,
  customFormRules: _propTypes.default.object,
  customControlRender: _propTypes.default.object
};

var _default = _react.default.memo(FormViewer);

exports.default = _default;

/***/ }),

/***/ "DzJC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(436);

/***/ }),

/***/ "GI4E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.controlList = void 0;

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _tooltip = _interopRequireDefault(__webpack_require__("3S7+"));

var _modal = _interopRequireDefault(__webpack_require__("kLXV"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _ZeditSimpleFormHOC = _interopRequireDefault(__webpack_require__("4QcI"));

var _controls = __webpack_require__("VoWU");

var _zTool = __webpack_require__("/sSO");

var _controls2 = __webpack_require__("cx2H");

var _ZselectInput = _interopRequireDefault(__webpack_require__("LlIA"));

var _ZauxiliaryInput = _interopRequireDefault(__webpack_require__("VJmb"));

var _common = __webpack_require__("q151");

var _zTool2 = __webpack_require__("/sSO");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PercentInput = _react.default.memo(_react.default.forwardRef(function (props, ref) {
  var value = props.value,
      _onChange = props.onChange;

  var _useState = (0, _react.useState)(typeof value === "number" ? value : 0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      num = _useState2[0],
      setNum = _useState2[1];

  (0, _react.useEffect)(function () {
    setNum(value * 100);
  }, [value]);
  return (0, _controls.getControl)("Input.Group", {
    compact: true,
    children: _react.default.createElement(_react.default.Fragment, null, (0, _controls.getControl)("InputNumber", {
      min: 0,
      max: 100,
      precision: 4,
      style: {
        width: "80%"
      },
      value: num,
      onChange: function onChange(num) {
        _onChange && _onChange(num / 100);
      }
    }), (0, _controls.getControl)("Input", {
      defaultValue: "%",
      disabled: true,
      style: {
        width: "20%"
      }
    }))
  });
}));

var commonKeys = ["groupName", "fieldType", "label", "fieldKey", "required", "initialValue", "regularExpression", "errorMsg", "remark", "disabled"];
var textKeys = ["maxLength", "minLength"];
var inputKeys = [].concat(textKeys, ["type"]);
var textarayKeys = textKeys;
var selectionsType1keys = ["selectList"];
var selectionsType2keys = ["selectionsUrl", "selectionsQuery"];
var selectKeys = ["notFoundContent", "selectionsType", "selectListFieldNames"].concat(selectionsType1keys, selectionsType2keys);
var cascaderKeys = [].concat((0, _toConsumableArray2.default)(selectKeys), ["changeOnSelect"]);
var dateKeys = ["format"];
var uploadKeys = ["url", "fileAccept", "fileListType", "wxSourceTypes", "uploaderResponse", "minUploadLength", "maxUploadLength", "autoUpload", "maxMegabytes"];
var colorKeys = ["colorValueType", "minSaturability"];
var mapSelectKeys = ["mapType", "secretKey", "webserviceUrlDO"];
var inputNumberKeys = ["min", "max"]; //微信小程序组件库wux-weapp-ex支持标识

var wechat = {
  key: "wechat",
  title: "微信小程序可用"
}; //控件类型在微信小程序组件库wux-weapp-ex支持情况

var controlWechat = [1, 2, 3, 4, 5, 6, 8, 9, 11, 13]; //日期格式在微信小程序组件库wux-weapp-ex支持情况

var formatWechat = ["YYYY", "YYYY-MM", "YYYY-MM-DD", "YYYY-MM-DD HH:mm", "HH:mm"]; //控件类型列表

var controlList = [{
  label: "单行输入",
  //控件类型名称
  value: 1,
  //类型值
  showKeys: [].concat(commonKeys, (0, _toConsumableArray2.default)(inputKeys)),
  //要显示的控件属性
  configKeys: inputKeys //保存时哪些要转成config的属性

}, {
  label: "多行输入",
  value: 2,
  showKeys: [].concat(commonKeys, textarayKeys),
  configKeys: textarayKeys
}, {
  label: "下拉选择",
  value: 3,
  showKeys: [].concat(commonKeys, (0, _toConsumableArray2.default)(selectKeys), ["mode", "notFoundContent"]),
  configKeys: [].concat((0, _toConsumableArray2.default)(selectKeys), ["mode", "notFoundContent"])
}, {
  label: "数字输入",
  value: 4,
  showKeys: [].concat(commonKeys, inputNumberKeys),
  configKeys: inputNumberKeys
}, {
  label: "日期/时间选择",
  value: 5,
  showKeys: [].concat(commonKeys, dateKeys),
  configKeys: dateKeys
}, {
  label: "级联",
  value: 6,
  showKeys: [].concat(commonKeys, (0, _toConsumableArray2.default)(cascaderKeys)),
  configKeys: cascaderKeys
}, {
  label: "树选择",
  value: 7,
  showKeys: [].concat(commonKeys, (0, _toConsumableArray2.default)(selectKeys)),
  configKeys: selectKeys
}, {
  label: "多选框",
  value: 8,
  showKeys: [].concat(commonKeys, (0, _toConsumableArray2.default)(selectKeys)),
  configKeys: selectKeys
}, {
  label: "单选框",
  value: 9,
  showKeys: [].concat(commonKeys, (0, _toConsumableArray2.default)(selectKeys)),
  configKeys: selectKeys
}, {
  label: "开关",
  value: 10,
  showKeys: [].concat(commonKeys),
  configKeys: []
}, {
  label: "文件上传",
  value: 11,
  showKeys: [].concat(commonKeys, uploadKeys),
  configKeys: uploadKeys
}, {
  label: "颜色值",
  value: 12,
  showKeys: [].concat(commonKeys, colorKeys),
  configKeys: colorKeys
}, {
  label: "地图选点",
  value: 13,
  showKeys: [].concat(commonKeys, mapSelectKeys),
  configKeys: mapSelectKeys
}, {
  label: "自定义占位",
  value: 14,
  showKeys: [].concat(commonKeys, ["isFormItem"]),
  configKeys: []
}, {
  label: "文书",
  value: 20,
  showKeys: [].concat(commonKeys, ["docCode"]),
  configKeys: ["docCode"]
}]; //地图的默认密钥(默认是邹国涛个人注册)

exports.controlList = controlList;
var initSereKey = {
  amap: "3d5c1c6169c64554d6f9fcca35d4abff",
  qqmap: "63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK"
}; //控制显示哪个类型的控件的属性

function showFieldTypeLinkOther(changeFormItems, formItems, val) {
  var excludeKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var fieldTypeItem = controlList.find(function (cont) {
    return cont.value === val;
  });
  var showKeys = fieldTypeItem.showKeys.filter(function (key) {
    return !excludeKeys.includes(key);
  });
  changeFormItems(formItems.map(function (item) {
    return {
      key: item.key,
      show: showKeys.includes(item.key)
    };
  }), true);
}

var getSwitchOpt = function getSwitchOpt() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Switch");
    },
    options: (0, _controls.getOptions)(_objectSpread({
      required: true,
      initialValue: true,
      normalize: function normalize(value, prevValue, allValues) {
        return Boolean(value);
      },
      valuePropName: "checked"
    }, options))
  };
}; //对应字段的控件


function getCorresFormItem(_ref) {
  var key = _ref.key,
      label = _ref.label,
      initialValue = _ref.initialValue;
  return {
    key: key,
    label: label,
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("TreeInput", {
        multiple: false,
        showBtns: false,
        inputType: "coustom",
        customInputKeys: [{
          key: "label",
          initValue: ""
        }, {
          key: "value",
          initValue: ""
        }],
        children: function children(states, setStates, customInputKeys) {
          return (0, _controls.getControl)("Input.Group", {
            compact: true,
            style: {
              width: "100%"
            },
            children: _react.default.createElement(_react.default.Fragment, null, (0, _controls.getControl)("Input", {
              style: {
                width: "50%"
              },
              value: states[customInputKeys[0].key],
              onChange: function onChange(value) {
                setStates((0, _defineProperty2.default)({}, customInputKeys[0].key, value));
              },
              size: "small",
              disabled: true
            }), (0, _controls.getControl)("Input", {
              style: {
                width: "50%"
              },
              value: states[customInputKeys[1].key],
              onChange: function onChange(value) {
                setStates((0, _defineProperty2.default)({}, customInputKeys[1].key, value));
              },
              size: "small"
            }))
          });
        }
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: initialValue
    })
  };
}

function showSelectionsTypeLinkOther(changeFormItems, selectionsType) {
  changeFormItems([{
    key: "selectList",
    show: selectionsType === 1
  }, {
    key: "selectionsUrl",
    show: selectionsType === 2
  }, {
    key: "selectionsQuery",
    show: selectionsType === 2
  }], true);
}

var urlRules = function urlRules() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return [{
    validator: function validator(rule, value, callback) {
      console.log(value);

      if (!value) {
        return callback(new Error("不能为空"));
      }

      var hasError = keys.some(function (key) {
        return value[key] === undefined || !value[key].toString().trim();
      });

      if (hasError) {
        return callback(new Error("有未填写的值"));
      }

      callback();
    }
  }];
};

function getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems) {
  var inputOpt = {
    disabled: keyDisabledRef.current
  };

  if (isUpdateRef.current) {
    inputOpt.addonAfter = _react.default.createElement(_tooltip.default, {
      title: "".concat(inputOpt.disabled ? "开启" : "关闭", "\u4FEE\u6539key")
    }, _react.default.createElement("i", {
      className: "zero-icon zerod-chushihualiuchengshitu z-fieldKey-lock",
      onClick: function onClick() {
        var doChange = function doChange() {
          keyDisabledRef.current = !keyDisabledRef.current;
          changeFormItems([{
            key: "fieldKey",
            newItem: {
              control: getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems)
            }
          }], true);
        };

        if (keyDisabledRef.current) {
          _modal.default.confirm({
            title: "提醒",
            content: "如果修改了字段key,提交后会删除相关的联动配置,是否继续?",
            onOk: doChange
          });
        } else {
          doChange();
        }
      }
    }));
  }

  return (0, _controls.getControl)("Input", inputOpt);
} //控件属性


function useFormItems(groupId, formViewerRef, type) {
  var itemsRef = (0, _react.useRef)([]);
  var isUpdateRef = (0, _react.useRef)(type === "update");
  var keyDisabledRef = (0, _react.useRef)(isUpdateRef.current);
  var hashkey = (0, _zTool.GenNonDuplicateID)(4);
  itemsRef.current = [//<--共用属性---> start
  {
    key: "groupName",
    label: "组名",
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Input", {
        disabled: true
      });
    }
  }, {
    key: "fieldType",
    label: "控件类型",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Select", {
        selectList: controlList.map(function (item) {
          var plat = [];

          if (controlWechat.includes(item.value)) {
            plat.push(wechat);
          }

          return {
            label: item.label,
            value: item.value,
            plat: plat
          };
        }),
        onChange: function onChange(val) {
          //控件类型改变控制显示对应的属性输入框
          showFieldTypeLinkOther(changeFormItems, itemsRef.current, val);

          if ([3, 6, 7, 8, 9].includes(val)) {
            showSelectionsTypeLinkOther(changeFormItems, form.getFieldValue("selectionsType"));
          } // changeFormItems([{ key: "initialValue", show: ![5].includes(val) }], true);

        },
        optLabelRender: function optLabelRender(item) {
          return _react.default.createElement("div", {
            className: "z-flex-space-between"
          }, _react.default.createElement("div", null, item.label), _react.default.createElement("div", null, item.plat.map(function (p) {
            return _react.default.createElement(_tooltip.default, {
              title: p.title,
              key: p.key
            }, _react.default.createElement(_icon.default, {
              className: "z-text-green z-margin-left-5",
              key: p.key,
              type: p.key
            }));
          })));
        }
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: 1
    })
  }, {
    key: "label",
    label: "控件Label",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Input");
    },
    options: (0, _controls.getOptions)({
      required: false,
      initialValue: "\u540D\u79F0_".concat(hashkey)
    })
  }, {
    key: "fieldKey",
    label: "字段Key",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems);
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "key_".concat(hashkey),
      rules: [{
        validator: function validator(rule, value, callback) {
          if (/Label$/.test(value)) {
            return callback(new Error("禁止以Label结尾的key"));
          }

          var groups = formViewerRef.current.getFormGroups();
          var hasKey = groups.some(function (g) {
            return g.formItems.some(function (item) {
              return item.key === value;
            });
          });

          if (hasKey && type === "add") {
            return callback(new Error("key已存在，请填写其他的key"));
          }

          callback();
        }
      }]
    })
  }, _objectSpread({
    key: "required",
    label: "必填",
    labelFocused: true
  }, getSwitchOpt()), _objectSpread({
    key: "disabled",
    label: "默认禁用",
    labelFocused: true
  }, getSwitchOpt({
    initialValue: false
  })), //<--共用属性---> end
  //<--input特有属性---> start
  {
    key: "type",
    label: "文本类型",
    show: true,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Radio.Group", {
        selectList: [{
          label: "文本框",
          value: "text"
        }, {
          label: "密码框",
          value: "password"
        }]
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "text"
    })
  }, {
    key: "maxLength",
    label: "最大输入长度",
    show: true,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("InputNumber", {
        min: 0
      });
    }
  }, {
    key: "minLength",
    label: "最小输入长度",
    show: true,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("InputNumber", {
        min: 0
      });
    }
  }, {
    key: "max",
    label: "最大值",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("InputNumber");
    }
  }, {
    key: "min",
    label: "最小值",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("InputNumber");
    }
  }, //<--input特有属性---> end
  //<--下拉框特有属性---> start
  {
    key: "mode",
    label: "模式",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Radio.Group", {
        selectList: [{
          label: "单选",
          value: "single"
        }, {
          label: "多选",
          value: "multiple"
        }, {
          label: "标签",
          value: "tags"
        }]
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "single"
    })
  }, //<--下拉框特有属性---> end
  //<--下拉框、单选框、多选框、级联、树选择特有属性---> start
  {
    key: "selectionsType",
    label: "选项类型",
    labelFocused: true,
    show: false,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Radio.Group", {
        selectList: [{
          label: "自定义",
          value: 1
        }, {
          label: "异步",
          value: 2
        }],
        onChange: function onChange(e) {
          showSelectionsTypeLinkOther(changeFormItems, e.target.value);
        }
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: 1
    })
  }, {
    key: "selectionsUrl",
    label: "请求选项数据地址",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _react.default.createElement(_ZselectInput.default, {
        controlCostrom: [6, 7].includes(form.getFieldValue("fieldType")) ? {
          right: function right(value, valueChange) {
            return (0, _controls.getControl)("Select", {
              value: value,
              selectList: [{
                label: "全部加载",
                value: "all"
              }, {
                label: "分部加载",
                value: "part"
              }],
              onChange: valueChange,
              style: {
                width: "100%"
              }
            });
          }
        } : undefined,
        leftSpan: 6,
        centerSpan: [3, 8, 9].includes(form.getFieldValue("fieldType")) ? 18 : 12,
        rightSpan: [3, 8, 9].includes(form.getFieldValue("fieldType")) ? null : 6,
        selectList: ["post", "get"].map(function (m) {
          return {
            label: m,
            value: m
          };
        }),
        valueKey: {
          left: "selectionsUrlMethod",
          center: "selectionsUrl",
          right: "requireType"
        },
        leftPlaceholde: "\u8BF7\u6C42\u65B9\u5F0F",
        centerPlaceholder: "\u8BF7\u6C42\u5730\u5740"
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: {
        selectionsUrlMethod: "post",
        selectionsUrl: "",
        requireType: "all"
      },
      rules: urlRules(["selectionsUrlMethod", "selectionsUrl", "requireType"])
    })
  }, {
    key: "selectionsQuery",
    label: "请求参数配置",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("TreeInput", {
        multiple: false,
        labelPlaceholder: "Key"
      });
    },
    options: (0, _controls.getOptions)({
      required: false,
      initialValue: []
    })
  }, {
    key: "selectList",
    label: "选项数据",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("TreeInput", {
        multiple: [6, 7].includes(form.getFieldValue("fieldType"))
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: [],
      rules: [{
        validator: function validator(rule, value, callback) {
          var finished = (0, _zTool.itemsFromTree)({
            tree: value,
            condition: function condition(val1, val2) {
              return val1.toString().trim() === val2.toString().trim();
            },
            sourceItem: {
              value: ""
            },
            keyObj: {
              id: "value",
              children: "children"
            }
          });

          if (finished) {
            return callback(new Error("选项中有未填写的值"));
          }

          callback();
        }
      }]
    })
  }, getCorresFormItem({
    key: "selectListFieldNames",
    label: "lable、value、children对应选项数据中的字段",
    initialValue: [{
      label: "label",
      value: "label"
    }, {
      label: "value",
      value: "value"
    }, {
      label: "children",
      value: "children"
    }]
  }), {
    key: "notFoundContent",
    label: "没有选项数据时显示的内容",
    show: false,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Input");
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "无相关数据"
    })
  }, //<--下拉框、单选框、多选框、级联、树选择特有属性---> end
  //<--级联特有属性---> start
  _objectSpread({
    key: "changeOnSelect",
    label: "必须选到最后一级",
    labelFocused: true,
    show: false
  }, getSwitchOpt()), //<--级联特有属性---> end
  //<--日期特有属性---> start
  {
    key: "format",
    label: "格式",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Select", {
        selectList: Object.keys(_controls2.dateFormats).map(function (key) {
          var plat = [];

          if (formatWechat.includes(key)) {
            plat.push(wechat);
          }

          return {
            label: key,
            value: key,
            plat: plat
          };
        }),
        optLabelRender: function optLabelRender(item) {
          return _react.default.createElement("div", {
            className: "z-flex-space-between"
          }, _react.default.createElement("div", null, item.label), _react.default.createElement("div", null, item.plat.map(function (p) {
            return _react.default.createElement(_tooltip.default, {
              title: p.title,
              key: p.key
            }, _react.default.createElement(_icon.default, {
              className: "z-text-green z-margin-left-5",
              key: p.key,
              type: p.key
            }));
          })));
        }
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "YYYY-MM-DD"
    })
  }, //<--日期特有属性---> end
  //<--上传控件特有属性---> start
  _objectSpread({
    key: "autoUpload",
    label: "选完文件自动上传",
    labelFocused: true,
    show: false
  }, getSwitchOpt()), {
    key: "url",
    label: "上传地址(依次为：请求方式、请求地址、formData参数名、是否多文件上传)",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _react.default.createElement(_ZselectInput.default, {
        selectList: ["post", "get"].map(function (m) {
          return {
            label: m,
            value: m
          };
        }),
        valueKey: {
          left: "urlMethod",
          center: "url",
          right: "urlParamName"
        },
        leftPlaceholde: "\u8BF7\u6C42\u65B9\u5F0F",
        centerPlaceholder: "\u8BF7\u6C42\u5730\u5740",
        rightPlaceholder: "\u53C2\u6570\u540D",
        leftSpan: 5,
        centerSpan: 11,
        rightSpan: 3,
        customControls: [{
          key: "requestMode",
          span: 5,
          render: function render(value, item, change) {
            return (0, _controls.getControl)("Select", {
              value: value[item.key],
              selectList: [{
                label: "单文件",
                value: "single"
              }, {
                label: "多文件",
                value: "multiple"
              }],
              onChange: function onChange(val) {
                change(val, item.key);
              },
              className: "z-label"
            });
          }
        }]
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: {
        urlMethod: "post",
        url: "/file-upload-service/webapi/v1.0/fileUpload/uploads",
        urlParamName: "files",
        requestMode: "multiple"
      },
      rules: urlRules(["urlMethod", "url", "urlParamName", "requestMode"])
    })
  }, getCorresFormItem({
    key: "uploaderResponse",
    label: "响应体对应的字段",
    initialValue: [{
      label: "id",
      value: "id"
    }, {
      label: "filePath",
      value: "filePath"
    }, {
      label: "fileSuffix",
      value: "fileSuffix"
    }, {
      label: "originalFileName",
      value: "originalFileName"
    }]
  }), {
    key: "fileAccept",
    label: "允许上传文件类型",
    show: false,
    render: function render() {
      return (0, _controls.getControl)("Select", {
        selectList: [{
          label: "只允许图片",
          value: "image/*"
        }, {
          label: "任意文件",
          value: "all"
        }]
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "image/*"
    })
  }, {
    key: "fileListType",
    label: "上传列表样式",
    show: false,
    render: function render() {
      return (0, _controls.getControl)("Select", {
        selectList: ["picture", "picture-card"]
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "picture-card"
    })
  }, {
    key: "maxMegabytes",
    label: "最大上传大小(M)",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("InputNumber", {
        min: 0,
        precision: 2
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: 10
    })
  }, {
    key: "maxUploadLength",
    label: "最大上传数",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("InputNumber", {
        min: 0
      });
    }
  }, {
    key: "minUploadLength",
    label: "最小上传数",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("InputNumber", {
        min: 0
      });
    }
  }, {
    key: "wxSourceTypes",
    label: "小程序图片来源",
    show: false,
    render: function render() {
      return (0, _controls.getControl)("Checkbox.Group", {
        selectList: [{
          label: "从相册选图",
          value: "album"
        }, {
          label: "使用相机",
          value: "camera"
        }]
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: ["album", "camera"]
    })
  }, //<--上传控件特有属性---> end
  //<--颜色值特有属性---> start
  {
    key: "colorValueType",
    label: "颜色值类型",
    labelFocused: true,
    show: false,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Select", {
        selectList: [{
          label: "hex",
          value: "hex"
        }, {
          label: "rgb",
          value: "rgb"
        }]
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "rgb"
    })
  }, {
    key: "minSaturability",
    label: "最小饱和度(0%~100%,越小越趋近白色)",
    labelFocused: true,
    show: false,
    render: function render(form, changeFormItems) {
      return _react.default.createElement(PercentInput, null);
    },
    options: (0, _controls.getOptions)({
      required: false,
      initialValue: 0
    })
  }, //<--颜色值特有属性---> end
  //<--地图选点特有属性---> start
  {
    key: "mapType",
    label: "地图类型",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Radio.Group", {
        selectList: [{
          label: "腾讯",
          value: "qqmap"
        }, {
          label: "高德",
          value: "amap"
        }],
        onChange: function onChange(e) {
          var val = e.target.value;
          form.setFieldsValue({
            secretKey: initSereKey[val]
          });
        }
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: "qqmap"
    })
  }, {
    key: "secretKey",
    label: "密钥",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Input");
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: initSereKey["qqmap"]
    })
  }, {
    key: "webserviceUrlDO",
    label: "调用地图web服务的代理地址",
    show: false,
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _react.default.createElement(_ZselectInput.default, {
        leftSpan: 6,
        centerSpan: 18,
        rightSpan: 0,
        selectList: ["post", "get"].map(function (m) {
          return {
            label: m,
            value: m
          };
        }),
        valueKey: {
          left: "urlMethod",
          center: "url"
        },
        leftPlaceholde: "\u8BF7\u6C42\u65B9\u5F0F",
        centerPlaceholder: "\u8BF7\u6C42\u5730\u5740"
      });
    },
    options: (0, _controls.getOptions)({
      required: true,
      initialValue: {
        urlMethod: "post",
        url: "/system-service/webapi/geography/webService"
      },
      rules: urlRules(["urlMethod", "url"])
    })
  }, //<--地图选点特有属性---> end
  _objectSpread({
    key: "isFormItem",
    label: "自定义内容是否为表单控件",
    labelFocused: true,
    show: false
  }, getSwitchOpt()), //<--共用属性---> start
  {
    key: "initialValue",
    labelFocused: true,
    label: "控件初始值",
    render: function render(form, changeFormItems) {
      return [12].includes(form.getFieldValue("fieldType")) ? (0, _controls.getControl)("ColorPicker", {
        valueType: form.getFieldValue("colorValueType")
      }) : (0, _controls.getControl)("Input");
    }
  }, {
    key: "regularExpression",
    label: "正则表达式",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return _react.default.createElement(_ZauxiliaryInput.default, null);
    },
    options: {
      rules: [{
        validator: function validator(rule, value, callback) {
          var hasError = false;

          try {
            new RegExp(value);
          } catch (e) {
            hasError = true;
          }

          if (hasError) {
            return callback("无效正则表达式");
          }

          callback();
        }
      }]
    }
  }, {
    key: "errorMsg",
    label: "错误提示",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Input");
    }
  }, {
    key: "remark",
    label: "备注",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("TextArea", {
        autosize: {
          minRows: 3
        }
      });
    }
  }, //<--共用属性---> end
  {
    key: "docCode",
    show: false,
    label: "文书模板编码",
    labelFocused: true,
    render: function render(form, changeFormItems) {
      return (0, _controls.getControl)("Input");
    },
    options: (0, _controls.getOptions)({
      required: true
    })
  }];
  return itemsRef.current;
}

function useEditPage(groupId, formItem, formViewerRef, linkageRef, type) {
  var groupRef = (0, _react.useRef)();
  var items = useFormItems(groupId, formViewerRef, type);
  return (0, _react.useRef)((0, _ZeditSimpleFormHOC.default)({
    pageHeader: {
      show: false
    },
    pageFooter: {
      show: false
    },
    form: {
      initAnimation: false,
      panelHeader: "控件属性",
      labelLayout: "inline",
      type: "update",
      defaultSpan: 24,
      submitBtnName: "确定",
      submitMsg: null,
      items: items,
      detailApiInterface: function detailApiInterface(detailId, props, tool) {
        var group = {
          id: groupId
        };
        var groups = formViewerRef.current.getFormGroups();
        var i = groups.findIndex(function (g) {
          return g.id == groupId;
        });
        group.name = groups[i].name;
        groupRef.current = groups[i]; //新增/修改都需groupName

        var data = {
          groupName: group.name
        }; //修改控件情况

        if (formItem) {
          var excludeKeys = [];
          var currentItem = controlList.find(function (item) {
            return item.value === formItem["fieldType"];
          });

          if (currentItem) {
            Object.keys(formItem).forEach(function (key) {
              if (currentItem.showKeys.includes(key)) {
                data[key] = formItem[key];
              }
            });
          }

          try {
            var config = JSON.parse(formItem["config"]);

            if (config) {
              var objToArr = function objToArr(keyName) {
                if (_zTool2.dataType.isObject(config[keyName])) {
                  config[keyName] = Object.keys(config[keyName]).map(function (key) {
                    return {
                      label: key,
                      value: config[keyName][key]
                    };
                  });
                } else {
                  config[keyName] = undefined;
                }
              }; //当是上传控件


              if (formItem["fieldType"] === 11) {
                var url = {
                  urlMethod: "",
                  url: "",
                  urlParamName: ""
                }; // const detailUrl = { detailUrlMethod: "", detailUrl: "", detailUrlParamName: "" };

                Object.keys(config).forEach(function (key) {
                  switch (key) {
                    case "urlMethod":
                    case "url":
                    case "urlParamName":
                    case "requestMode":
                      url[key] = config[key];
                      delete config[key];
                      break;
                    // case "detailUrlMethod":
                    // case "detailUrl":
                    // case "detailUrlParamName":
                    // detailUrl[key] = config[key];
                    // delete config[key];
                    // break;
                  }
                });
                config["url"] = url;
                objToArr("uploaderResponse"); // config["detailUrl"] = detailUrl;
              } else if ([3, 6, 7, 8, 9].includes(formItem["fieldType"])) {
                config.selectionsType = config.selectionsType === undefined ? 1 : Number(config.selectionsType);
                excludeKeys = config.selectionsType === 1 ? selectionsType2keys : selectionsType1keys;
                objToArr("selectionsQuery");
                objToArr("selectListFieldNames");
                showSelectionsTypeLinkOther(tool.getFormMethods().changeFormItems, config["selectionsType"]);
              }

              data.disabled = data.disabled === undefined ? 0 : Number(data.disabled);
              data = _objectSpread({}, data, {}, config);
            }
          } catch (e) {}

          showFieldTypeLinkOther(tool.getFormMethods().changeFormItems, items, formItem["fieldType"], excludeKeys); // if ([5].includes(formItem["fieldType"])) {
          // 	tool.getFormMethods().changeFormItems({ key: "initialValue", show: false }, true);
          // }
        }

        return Promise.resolve({
          data: data
        });
      },
      submitApiInterface: function submitApiInterface(values, props, tool) {
        var fieldTypeItem = controlList.find(function (item) {
          return item.value === values["fieldType"];
        });
        var config = {};

        if (Array.isArray(fieldTypeItem.configKeys)) {
          fieldTypeItem.configKeys.forEach(function (key) {
            config[key] = values[key];
            delete values[key];
          });
        }

        values.config = config;
        values.fieldTypeName = fieldTypeItem.label;

        var arrToObj = function arrToObj(keyName) {
          var newSelectionsQuery = {};
          Array.isArray(values.config[keyName]) && values.config[keyName].forEach(function (item) {
            if (item.label && item.value) {
              newSelectionsQuery[item.label] = item.value;
            }
          });
          values.config[keyName] = newSelectionsQuery;
        }; //上传控件的config要特殊处理


        if (values["fieldType"] === 11) {
          var newConf = values.config;
          Object.keys(values.config).forEach(function (key) {
            var val = values.config[key]; // if (key === "url" || key === "detailUrl") {
            // 	newConf = { ...newConf, ...val };
            // }

            if (key === "url") {
              newConf = _objectSpread({}, newConf, {}, val);
            }
          });
          values.config = newConf;
          arrToObj("uploaderResponse");
        } else if ([3, 6, 7, 8, 9].includes(values["fieldType"])) {
          arrToObj("selectionsQuery");
          arrToObj("selectListFieldNames");
        }

        if (values.config) {
          values.config = JSON.stringify(values.config);
        }

        var newItem = (0, _common.getFormItem)({
          field: formItem ? _objectSpread({}, formItem, {}, values) : values,
          group: groupRef.current,
          noAsync: true
        });
        var currentItems = groupRef.current.groupRef.current.getFormItems();
        var newItems = (0, _toConsumableArray2.default)(currentItems);
        var i = currentItems.findIndex(function (item) {
          return item["fieldKey"] === (formItem ? formItem["fieldKey"] : values["fieldKey"]);
        });
        var successMsg = "".concat(formItem ? "修改" : "添加", "\u63A7\u4EF6\u6210\u529F");

        if (i > -1) {
          if (formItem && formItem["fieldKey"] !== values["fieldKey"] && linkageRef.current) {
            //修改了fieldKey时移除li
            var hasRemoveAge = (0, _common.removeSomeLinkage)(linkageRef, formItem["fieldKey"]);

            if (hasRemoveAge) {
              successMsg += "\u3002\u7531\u4E8E\u4FEE\u6539\u4E86fieldKey\uFF0C\u540C\u65F6\u79FB\u9664\u4E86\u5BF9\u5E94\u7684\u8054\u52A8\u914D\u7F6E\u3002";
            }
          }

          newItems.splice(i, 1, newItem);
        } else {
          newItems = [].concat((0, _toConsumableArray2.default)(newItems), [newItem]);
        } // console.log(newItem);


        groupRef.current.groupRef.current.setFormItems(newItems);
        tool.showRightModal(false, "controlProtoModal");
        return Promise.resolve({
          msg: successMsg
        });
      }
    }
  })).current;
}

var _default = _react.default.memo(_react.default.forwardRef(function AddColForm(_ref2, ref) {
  var groupId = _ref2.groupId,
      formItem = _ref2.formItem,
      formViewerRef = _ref2.formViewerRef,
      linkageRef = _ref2.linkageRef,
      type = _ref2.type;
  var EditForm = useEditPage(groupId, formItem, formViewerRef, linkageRef, type);
  return _react.default.createElement(EditForm, {
    detailId: "1"
  });
}));

exports.default = _default;

/***/ }),

/***/ "HPR2":
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: zgt\n * @Date: 2019-09-20 19:52:56\n * @LastEditors: zgt\n * @LastEditTime: 2019-10-12 17:04:09\n * @Description: file content\n -->\n<h1 id=\"-zliveform\">动态表单配置：ZliveForm</h1>\n<p><code>ZliveForm</code> 是动态表单配置模块</p>\n<p><code>ZliveForm.FormViewer</code> 是动态表单展示模块(包括控件联动效果)</p>\n<p>控件联动功能有：1、单选/多选控制其他控件禁用，2、单选/多选控制其他控件必填，3、单选/多选控制其控件非必填，4、单选/多选 控制 其他单选/多选的选择项，5.1、单选/多选控制一个组隐藏，5.2、单选/多选控制其他控件隐藏，6、身份证号取出生年月日，7、单选联动异步请求选项，8、地图选点取行政区划</p>\n<p>2、ZliveForm 的例子</p>\n<div class=\"z-demo-box\" data-render=\"demo0\" data-title=\"ZliveForm的例子\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZliveForm } from &quot;zerod&quot;;\nimport formData from &quot;./formData&quot;;\nimport linkages from &quot;./linkages&quot;;\nclass Myjavascript extends React.PureComponent {\n    formData = { ...formData, linkages };\n    onSave = newFormData =&gt; {\n        console.log(newFormData);\n    };\n    render() {\n        return &lt;ZliveForm formData={this.formData} onSave={this.onSave} /&gt;;\n    }\n}</code></pre>\n<p>1、ZliveForm. FormViewer 的例子</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"ZliveForm. FormViewer的例子\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport { ZliveForm } from &quot;zerod&quot;;\nimport formData from &quot;./formData&quot;;\nimport linkages from &quot;./linkages&quot;;\nclass Myjavascript extends React.PureComponent {\n    formData = { ...formData, linkages };\n    onSubmit = values =&gt; {\n        console.log(values);\n        return Promise.resolve();\n    };\n    render() {\n        return &lt;ZliveForm.FormViewer formData={this.formData} onSubmit={this.onSubmit} /&gt;;\n    }\n}</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zliveform-props\">ZliveForm 的 props</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>formData</td>\n<td>渲染整个表单的数据</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onSave</td>\n<td>保存按钮的事件</td>\n<td>function(newFormData){}</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"zliveform-formviewer-props\">ZliveForm. FormViewer 的 props</h2>\n<p>可追 <code>className</code> 、 <code>style</code> </p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>formData</td>\n<td>渲染整个表单的数据</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>formValues</td>\n<td>表单字段对应的值</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>onSubmit</td>\n<td>submit 类型的按钮触发表单验证通过后的确定回调函数，同/Zform 的 onSubmit</td>\n<td>function(values){return Promise.resolve()}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>momentFormat</td>\n<td>是否在触发 onSubmit 函数后里面传出的 values 中存在 moment 对象进行表单控件对应的 format 格式化，启用此属性，相关 moment 值的控件必需 format 属性</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>submitBtnRender</td>\n<td>表单之下的渲染函数，可以渲染一个或多个按钮，或者其他内容。提供了一个 submit 函数，可以直接绑定给提交按钮 click 等, 触发后会用 onSubmit 回调</td>\n<td>(submit)=&gt;{return ReactNode}</td>\n<td>--</td>\n</tr>\n<tr>\n<td>linkage</td>\n<td>是否启用联动功能 (联动的前提 formData 中存在 linkages 配置)</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>title</td>\n<td>表单的标题，默认来自 formData.name, 如果 title==false, 则不显示标题</td>\n<td>boolean | string</td>\n<td>--</td>\n</tr>\n<tr>\n<td>afterItemsRendered</td>\n<td>所有表单控件渲染完成（包括异步）的回调</td>\n<td>funcion</td>\n<td>--</td>\n</tr>\n<tr>\n<td>customOnChange</td>\n<td>为某些控件添加onChange事件</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>customFormRules</td>\n<td>为某些控件添加自定义rules</td>\n<td>object</td>\n<td>--</td>\n</tr>\n<tr>\n<td>customControlRender</td>\n<td>添加对应的自定义占位控件的渲染函数</td>\n<td>object</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<h2 id=\"zliveform-formviewer-ref-\">ZliveForm. FormViewer 实例方法 (通过 Ref 取得)</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>使用</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>getEachFormMethod</td>\n<td>获取所有 Zform 的 form 实例和 methods</td>\n<td>getEachFormMethod()</td>\n<td>[{form, methods}]</td>\n</tr>\n</tbody></table>\n<h2 id=\"formdata-\">formData 基本结构</h2>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"formData\"></div>\n\n<pre><code class=\"language-json\">{\n    &quot;id&quot;: 111, //formId\n    &quot;name&quot;: &quot;养犬信息登记表&quot;,\n    &quot;code&quot;: &quot;dog_check_in_form&quot;,\n    &quot;description&quot;: &quot;养犬信息登记表&quot;,\n    &quot;linkages&quot;: [\n        //联动配置\n        {\n            &quot;linkageType&quot;: &quot;5.1&quot;,\n            &quot;name&quot;: &quot;单选/多选控制组隐藏&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;rfid&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;groupId&quot;: 113,\n                            &quot;groupName&quot;: &quot;名称&quot;\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;5.2&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件隐藏&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;isEntity&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;recipientName&quot;,\n                            &quot;label&quot;: &quot;收件人姓名&quot;,\n                            &quot;fieldType&quot;: 1\n                        },\n                        {\n                            &quot;fieldKey&quot;: &quot;contact&quot;,\n                            &quot;label&quot;: &quot;联系方式&quot;,\n                            &quot;fieldType&quot;: 4\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;1&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件禁用&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;dogSex&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;dogProperty&quot;,\n                            &quot;label&quot;: &quot;犬只性质&quot;,\n                            &quot;fieldType&quot;: 3\n                        },\n                        {\n                            &quot;fieldKey&quot;: &quot;dogColor&quot;,\n                            &quot;label&quot;: &quot;犬只颜色&quot;,\n                            &quot;fieldType&quot;: 1\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;2&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件必填&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;isIris&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;birthday&quot;,\n                            &quot;label&quot;: &quot;出生日期&quot;,\n                            &quot;fieldType&quot;: 5\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;3&quot;,\n            &quot;name&quot;: &quot;单选/多选控制控件非必填&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;isIris&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;1&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;birthday&quot;,\n                            &quot;label&quot;: &quot;出生日期&quot;,\n                            &quot;fieldType&quot;: 5\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            &quot;linkageType&quot;: &quot;4&quot;,\n            &quot;name&quot;: &quot;单选/多选 控制 选项&quot;,\n            &quot;src&quot;: { &quot;fieldKey&quot;: &quot;rfid&quot; },\n            &quot;dist&quot;: [\n                {\n                    &quot;srcValue&quot;: &quot;1&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;domicile&quot;,\n                            &quot;label&quot;: &quot;住所性质&quot;,\n                            &quot;options&quot;: [\n                                { &quot;label&quot;: &quot;自有&quot;, &quot;value&quot;: &quot;1&quot; },\n                                { &quot;label&quot;: &quot;租赁&quot;, &quot;value&quot;: &quot;2&quot; },\n                                { &quot;label&quot;: &quot;其他&quot;, &quot;value&quot;: &quot;3&quot; }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    &quot;srcValue&quot;: &quot;2&quot;,\n                    &quot;fields&quot;: [\n                        {\n                            &quot;fieldKey&quot;: &quot;domicile&quot;,\n                            &quot;label&quot;: &quot;住所性质&quot;,\n                            &quot;options&quot;: [{ &quot;label&quot;: &quot;自有&quot;, &quot;value&quot;: &quot;1&quot; }]\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    &quot;sectionList&quot;: [\n        //表单控件组\n        {\n            &quot;id&quot;: 111, //groupId\n            &quot;formId&quot;: 111,\n            &quot;name&quot;: &quot;犬只信息&quot;,\n            &quot;seq&quot;: 1, //组排序\n            &quot;description&quot;: &quot;犬只信息表&quot;,\n            &quot;formFieldInfoList&quot;: [\n                //表单控件\n                {\n                    &quot;id&quot;: 466,\n                    &quot;sectionId&quot;: 111,\n                    &quot;label&quot;: &quot;犬只名称&quot;,\n                    &quot;fieldKey&quot;: &quot;dogName&quot;,\n                    &quot;fieldType&quot;: 1, //控件类型\n                    &quot;required&quot;: 1, //是否必填\n                    &quot;regularExpression&quot;: null, //正则表达式\n                    &quot;description&quot;: null,\n                    &quot;errorMsg&quot;: null, //验证失败的提示信息\n                    &quot;placeholder&quot;: null,\n                    &quot;span&quot;: 8, //栅栏占格(1-24)\n                    &quot;labelWidth&quot;: 4,\n                    &quot;config&quot;: &quot;{\\&quot;maxLength\\&quot;:8,\\&quot;minLength\\&quot;:1}&quot;, //规则配置等\n                    &quot;initialValue&quot;: null, //初始值\n                    &quot;seq&quot;: 1 //排序\n                }\n            ]\n        },\n        {\n            &quot;id&quot;: 112,\n            &quot;formId&quot;: 111,\n            &quot;name&quot;: &quot;养犬人信息&quot;,\n            &quot;seq&quot;: 2,\n            &quot;description&quot;: &quot;养犬人信息表&quot;,\n            &quot;gmtCreate&quot;: &quot;2019-03-26 12:09:59&quot;,\n            &quot;gmtModified&quot;: &quot;2019-03-26 12:09:59&quot;,\n            &quot;formFieldInfoList&quot;: [\n                {\n                    &quot;id&quot;: 475,\n                    &quot;sectionId&quot;: 112,\n                    &quot;label&quot;: &quot;养犬人姓名&quot;,\n                    &quot;fieldKey&quot;: &quot;name&quot;,\n                    &quot;fieldType&quot;: 1,\n                    &quot;required&quot;: 1,\n                    &quot;regularExpression&quot;: null,\n                    &quot;description&quot;: null,\n                    &quot;errorMsg&quot;: null,\n                    &quot;placeholder&quot;: null,\n                    &quot;span&quot;: 8,\n                    &quot;labelWidth&quot;: 4,\n                    &quot;config&quot;: &quot;{\\&quot;maxLength\\&quot;:8,\\&quot;minLength\\&quot;:1}&quot;,\n                    &quot;initialValue&quot;: null,\n                    &quot;seq&quot;: 1\n                }\n            ]\n        }\n    ],\n    //为某些控件添加onChange事件\n    &quot;customOnChange&quot;: {\n        &quot;dogType&quot;: function(field, imperativeRef, e) {\n            console.log(&quot;dogType&quot;, field, imperativeRef.current(), e);\n        }\n    },\n    //为某些控件添加自定义rules\n    &quot;customFormRules&quot;: {\n        &quot;dogName&quot;: function(field, imperativeRef) {\n            console.log(&quot;dogName&quot;, field, imperativeRef.current());\n            return [\n                {\n                    &quot;validator&quot;: (rule, value, callback) =&gt; {}\n                }\n            ];\n        }\n    },\n    &quot;customControlRender&quot;:{\n        &quot;customsKey&quot;:function({field,linkages,getGroupsFn}){\n            return &lt;div&gt;9999999&lt;/div&gt;\n        }\n    }\n}</code></pre>\n";

/***/ }),

/***/ "JolE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _Zform = _interopRequireDefault(__webpack_require__("+Qac"));

var _FormContext = _interopRequireDefault(__webpack_require__("7Gy6"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MyForm = _FormContext.default.setConsumer(_Zform.default);

var FormGroup = _react.default.memo(_react.default.forwardRef(function (_ref, ref) {
  var formItems = _ref.formItems,
      getOtherForms = _ref.getOtherForms,
      labelLayout = _ref.labelLayout,
      onSubmit = _ref.onSubmit,
      group = _ref.group,
      titleLeftRender = _ref.titleLeftRender,
      titleRightRender = _ref.titleRightRender,
      children = _ref.children,
      formValues = _ref.formValues,
      momentFormat = _ref.momentFormat,
      booleanToNumber = _ref.booleanToNumber,
      afterItemsRendered = _ref.afterItemsRendered;
  var domRef = (0, _react.useRef)();
  var formRef = (0, _react.useRef)({});

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      _show = _useState2[0],
      setShow = _useState2[1];

  var getFormInstance = (0, _react.useCallback)(function (form, methods) {
    formRef.current = {
      form: form,
      methods: methods
    };
  }, [formRef.current]);

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      stateFormItems = _useState4[0],
      setFormItems = _useState4[1];

  (0, _react.useEffect)(function () {
    setFormItems(Array.isArray(formItems) ? formItems : []);
  }, [formItems]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getForm: function getForm() {
        return _objectSpread({}, formRef.current, {
          group: group
        });
      },
      show: function show(showStatus, seftItem) {
        if (_show === showStatus) return;
        setShow(showStatus);
        formRef.current.methods.changeFormItems(stateFormItems.map(function (item) {
          return {
            key: item.key,
            show: showStatus
          };
        }), true);
      },
      getShowState: function getShowState() {
        return _show;
      },
      getWrapperDom: function getWrapperDom() {
        return domRef.current;
      },
      getFormItems: function getFormItems() {
        return stateFormItems;
      },
      setFormItems: setFormItems
    };
  });

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      groupName = _useState6[0],
      setGroupName = _useState6[1];

  (0, _react.useEffect)(function () {
    setGroupName(group.name);
  }, [group.name]);
  var nameChange = (0, _react.useCallback)(function (val) {
    group.name = val;
    setGroupName(val);
  }, [group, setGroupName]); // console.log("--groups--" + group.id, stateFormItems);

  return _react.default.createElement("div", {
    className: "z-view-form-panel",
    ref: domRef,
    style: !_show ? {
      display: "none"
    } : null
  }, _react.default.createElement("div", {
    className: "z-panel-heading z-bordercolor-light-orange z-text-orange z-flex-space-between"
  }, _react.default.createElement("div", {
    className: "z-flex-items-v-center"
  }, typeof titleLeftRender === "function" ? titleLeftRender(group, groupName, nameChange) : _react.default.createElement("span", null, groupName)), _react.default.createElement("div", {
    className: "z-flex-items-v-center"
  }, typeof titleRightRender === "function" && titleRightRender(group))), _react.default.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important"
  }, _react.default.createElement(MyForm, {
    group: group,
    onSubmit: onSubmit,
    labelLayout: labelLayout ? labelLayout : "inline",
    items: stateFormItems,
    submitBtnName: "",
    getFormInstance: getFormInstance,
    otherForms: getOtherForms,
    formDefaultValues: formValues,
    momentFormat: momentFormat,
    booleanToNumber: booleanToNumber,
    afterItemsRendered: afterItemsRendered,
    initAnimation: false
  }), children));
}));

var _default = FormGroup;
exports.default = _default;

/***/ }),

/***/ "LfBj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _row = _interopRequireDefault(__webpack_require__("BMrR"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _tag = _interopRequireDefault(__webpack_require__("mr32"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _controls = __webpack_require__("VoWU");

var _ZoneWayTransfer = _interopRequireDefault(__webpack_require__("T352"));

var _zTool = __webpack_require__("/sSO");

var _AddColForm = __webpack_require__("GI4E");

var _linkRemark = __webpack_require__("ePEr");

var _common = __webpack_require__("q151");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function turnSelectOptions(section, needChild) {
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (list) {
    return list;
  };
  return section.map(function (g) {
    var group = false;
    var children = null;

    if (Array.isArray(g.formFieldInfoList)) {
      group = true;
      children = filter(g.formFieldInfoList).map(function (item) {
        return _objectSpread({}, item, {
          value: item.fieldKey,
          disabled: false
        });
      });
    }

    var newItem = _objectSpread({}, g, {
      value: g.name,
      group: needChild ? group : false,
      label: g.name,
      formFieldInfoList: null
    });

    if (children && needChild) {
      newItem.children = children;
    }

    return newItem;
  });
}

function getControlitem(type) {
  var findItem = _AddColForm.controlList.find(function (item) {
    return item.value == type;
  });

  return findItem;
}

function getLinkValue() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    srcControl: null,
    srcValues: [],
    srcControls: [],
    distControls: [],
    leftSelectedVal: "",
    rightSelectedVal: "",
    distControl: null,
    distValues: []
  }, query);
}

var propTypes = {
  newFormData: _propTypes.default.object,
  onSrcSelected: _propTypes.default.func,
  onOk: _propTypes.default.func,
  onBack: _propTypes.default.func
};

function ValueLinkControl(props) {
  var newFormData = props.newFormData,
      onSrcSelected = props.onSrcSelected,
      onOk = props.onOk,
      onBack = props.onBack,
      linkageType = props.linkageType;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      leftTransferSelections = _useState2[0],
      setLeftTransferSelections = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      leftTransferSelected = _useState4[0],
      setLeftTransferSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      rightTransferSelections = _useState6[0],
      setRightTransferSelections = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      rightTransferSelected = _useState8[0],
      setRightTransferSelected = _useState8[1];

  var asyncParamNameRef = (0, _react.useRef)("id");
  var regionNameRef = (0, _react.useRef)("province,city,district");
  (0, _react.useEffect)(function () {
    switch (linkageType) {
      case "1":
      case "2":
      case "3":
      case "5.2":
        setLeftTransferSelections([]);
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true));
        break;

      case "5.1":
        setLeftTransferSelections([]);
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, false));
        break;

      case "4":
        setLeftTransferSelections([]);
        setRightTransferSelections([]);
        break;

      case "6":
        setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [1].includes(item.fieldType);
          });
        }));
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [1, 5].includes(item.fieldType);
          });
        }));
        break;

      case "7":
        setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [3, 9].includes(item.fieldType);
          });
        }));
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            var config = item.config || {};

            if (typeof item.config == "string") {
              try {
                config = JSON.parse(item.config);
              } catch (e) {}
            }

            return [3, 6, 7, 8, 9].includes(item.fieldType) && config.selectionsType == 2;
          });
        }));
        break;

      case "8":
        setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [13].includes(item.fieldType);
          });
        }));
        setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
          return list.filter(function (item) {
            return [1, 2].includes(item.fieldType);
          });
        }));
        break;
    }

    setLinkValue(getLinkValue());
    setLeftTransferSelected([]);
    setRightTransferSelected([]);
  }, [linkageType]);

  var _useState9 = (0, _react.useState)(getLinkValue()),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      linkValue = _useState10[0],
      setLinkValue = _useState10[1];

  var selectOptionsRef = (0, _react.useRef)(turnSelectOptions(newFormData.sectionList, true, function (list) {
    return list.filter(function (item) {
      var config = item.config || {};

      if (typeof config === "string") {
        config = JSON.parse(config);
      }

      return [3, 8, 9].includes(item.fieldType) && config.selectionsType != 2;
    });
  })); //第一个穿梭框的特殊属性

  var leftTransferPropsRef = (0, _react.useRef)({});

  var getSelectControl = function getSelectControl() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _react.default.createElement("div", {
      className: "z-flex-1 z-margin-right-10"
    }, (0, _controls.getControl)("Select", _objectSpread({
      showSearch: false,
      size: "small",
      placeholder: "请选择单选/多选控件",
      selectList: selectOptionsRef.current,
      style: {
        width: "100%"
      },
      dropdownMatchSelectWidth: false,
      dropdownStyle: {
        width: "400px"
      },
      optLabelRender: function optLabelRender(item) {
        var findItem = getControlitem(item.fieldType);
        return _react.default.createElement("div", {
          className: "z-flex-space-between"
        }, _react.default.createElement("span", {
          className: "z-margin-right-8"
        }, item.label), _react.default.createElement(_tag.default, {
          color: "#2db7f5"
        }, findItem.label));
      }
    }, opt)));
  };

  if (["1", "2", "3", "4", "5.1", "5.2"].includes(linkageType)) {
    leftTransferPropsRef.current = {
      leftTitle: function leftTitle() {
        return getSelectControl({
          value: linkValue.leftSelectedVal,
          onChange: function onChange(val) {
            (0, _zTool.itemsFromTree)({
              tree: selectOptionsRef.current,
              sourceItem: {
                value: val
              },
              keyObj: {
                id: "value",
                children: "children"
              },
              action: function action(_ref) {
                var tree = _ref.tree,
                    currentItem = _ref.currentItem,
                    item = _ref.item,
                    index = _ref.index;
                var config = JSON.parse(currentItem.config);
                setLeftTransferSelections(config.selectList);
                setLinkValue(_objectSpread({}, linkValue, {
                  leftSelectedVal: currentItem.value,
                  srcValues: [],
                  distControls: [],
                  srcControls: [],
                  srcControl: currentItem
                }));
                setLeftTransferSelected([]);
                setRightTransferSelected([]);

                if (!["4", "5.1"].includes(linkageType)) {
                  setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true, function (list) {
                    return list.filter(function (item) {
                      return item.fieldKey !== val;
                    });
                  }));
                }

                onSrcSelected && onSrcSelected(currentItem);
              }
            }); // console.log(turnSelectOptions(newFormData.sectionList));
          }
        });
      },
      rightTitle: "已选择的选项"
    };
  } else if (["6", "7", "8"].includes(linkageType)) {
    leftTransferPropsRef.current = {
      leftTitle: "可选控件列表",
      rightTitle: "已选择的控件",
      leftItemRender: function leftItemRender(item, index) {
        var findControl = getControlitem(item.fieldType);
        return _react.default.createElement("div", {
          className: "z-flex-space-between"
        }, _react.default.createElement("span", null, item.label), findControl ? _react.default.createElement(_tag.default, {
          color: "purple"
        }, findControl.label) : null);
      }
    };
  } //第二个穿梭框的特殊属性


  var rightTransferPropsRef = (0, _react.useRef)({});

  if (["1", "2", "3", "5.2", "6"].includes(linkageType)) {
    rightTransferPropsRef.current = {
      leftTitle: "可选控件列表",
      rightTitle: "已选择的控件",
      leftItemRender: function leftItemRender(item, index) {
        var findControl = getControlitem(item.fieldType);
        return _react.default.createElement("div", {
          className: "z-flex-space-between"
        }, _react.default.createElement("span", null, item.label), findControl ? _react.default.createElement(_tag.default, {
          color: "purple"
        }, findControl.label) : null);
      }
    };
  } else if (["4"].includes(linkageType)) {
    rightTransferPropsRef.current = {
      leftTitle: function leftTitle() {
        return getSelectControl({
          value: linkValue.rightSelectedVal,
          onChange: function onChange(val) {
            (0, _zTool.itemsFromTree)({
              tree: selectOptionsRef.current,
              sourceItem: {
                value: val
              },
              keyObj: {
                id: "value",
                children: "children"
              },
              action: function action(_ref2) {
                var tree = _ref2.tree,
                    currentItem = _ref2.currentItem,
                    item = _ref2.item,
                    index = _ref2.index;
                var config = JSON.parse(currentItem.config);
                setRightTransferSelections(config.selectList);
                setLinkValue(_objectSpread({}, linkValue, {
                  rightSelectedVal: currentItem.value,
                  distValues: [],
                  distControls: [],
                  srcControls: [],
                  distControl: currentItem
                }));
                setRightTransferSelected([]);
              }
            });
          }
        });
      },
      rightTitle: "已选择的选项"
    };
  } else if (["5.1"].includes(linkageType)) {
    rightTransferPropsRef.current = {
      leftTitle: "可选组列表",
      rightTitle: "已选择的组"
    };
  }

  var linkRemark = null;

  switch (linkageType) {
    case "1":
    case "2":
    case "3":
    case "5.1":
    case "5.2":
      linkRemark = (0, _linkRemark.linkRemark1)(_objectSpread({}, linkValue, {
        linkageType: linkageType
      }));
      break;

    case "4":
      linkRemark = (0, _linkRemark.linkRemark2)(linkValue);
      break;

    case "6":
      linkRemark = (0, _linkRemark.linkRemark3)(linkValue, {
        remmak1: "身份证输入控件：",
        remmak2: "联动出生年月日接收控件："
      });
      break;

    case "7":
      linkRemark = (0, _linkRemark.linkRemark3)(linkValue, {
        remmak1: "单选框/下拉框控件：",
        remmak2: "联动异步接收控件："
      });
      break;

    case "8":
      linkRemark = (0, _linkRemark.linkRemark3)(linkValue, {
        remmak1: "地图选点控件：",
        remmak2: "联动接收控件："
      });
      break;
  }

  return _react.default.createElement(_row.default, {
    gutter: 20,
    className: "z-margin-top-15",
    type: "flex"
  }, _react.default.createElement(_col.default, {
    span: 12
  }, _react.default.createElement(_ZoneWayTransfer.default, (0, _extends2.default)({}, leftTransferPropsRef.current, {
    sourceKeys: {
      name: "label",
      id: "value",
      children: "children"
    },
    repeated: false,
    leftSourceData: leftTransferSelections,
    rightTargetData: leftTransferSelected,
    onChange: function onChange(actionType, rightData, actionItem, sibligItem) {
      setLinkValue(["6", "7", "8"].includes(linkageType) ? _objectSpread({}, linkValue, {
        srcControls: rightData
      }) : _objectSpread({}, linkValue, {
        srcValues: rightData.map(function (item) {
          return {
            label: item.label,
            value: item.value
          };
        })
      }));
    }
  }))), _react.default.createElement(_col.default, {
    span: 12
  }, _react.default.createElement(_ZoneWayTransfer.default, (0, _extends2.default)({}, rightTransferPropsRef.current, {
    repeated: false,
    sourceKeys: {
      name: "label",
      id: "value",
      children: "children"
    },
    leftSourceData: rightTransferSelections,
    rightTargetData: rightTransferSelected,
    onChange: function onChange(actionType, rightData, actionItem, sibligItem) {
      setLinkValue(linkageType === "4" ? _objectSpread({}, linkValue, {
        distValues: rightData
      }) : _objectSpread({}, linkValue, {
        distControls: rightData
      }));
    }
  }))), _react.default.createElement(_col.default, {
    span: 9,
    className: "z-flex-items-center"
  }, linkageType === "7" ? _react.default.createElement("div", {
    className: "z-linkage-remark"
  }, _react.default.createElement("div", {
    className: "z-margin-bottom-12"
  }, (0, _linkRemark.linkRemark4)(linkValue, {
    remmak1: "选项的value传入异步控件：",
    remmak2: "的请求参数名："
  })), (0, _controls.getControl)("Input.Group", {
    compact: true,
    children: _react.default.createElement(_react.default.Fragment, null, (0, _controls.getControl)("Input", {
      style: {
        width: "80px"
      },
      defaultValue: "value",
      disabled: true
    }), (0, _controls.getControl)("Input", {
      style: {
        width: "160px"
      },
      defaultValue: asyncParamNameRef.current,
      onChange: function onChange(value) {
        asyncParamNameRef.current = value;
      }
    }))
  })) : null, linkageType === "8" ? _react.default.createElement("div", {
    className: "z-linkage-remark"
  }, _react.default.createElement("div", {
    className: "z-margin-bottom-12"
  }, (0, _linkRemark.linkRemark4)(linkValue, {
    remmak1: "选项的行政区划信息传入：",
    remmak2: "的内容是："
  })), (0, _controls.getControl)("Select", {
    style: {
      width: "240px"
    },
    defaultValue: regionNameRef.current,
    selectList: _common.regionNames,
    onChange: function onChange(val) {
      regionNameRef.current = val;
    }
  })) : null), _react.default.createElement(_col.default, {
    span: 12
  }, _react.default.createElement("div", {
    className: "z-linkage-line z-linkage-remark z-flex-items-center"
  }, linkRemark)), _react.default.createElement(_col.default, {
    span: 3,
    className: "z-flex-items-end"
  }, _react.default.createElement("div", {
    className: "z-display-inline-block"
  }, _react.default.createElement(_button.default, {
    icon: "check",
    block: true,
    type: "primary",
    onClick: function onClick(e) {
      var error = false;

      if (["6", "7", "8"].includes(linkageType)) {
        if (!linkValue.srcControls.length || !linkValue.distControls.length) {
          error = true;
        }
      } else if (["4"].includes(linkageType)) {
        if (!linkValue.srcValues.length || !linkValue.distValues.length) {
          error = true;
        }
      } else if (!linkValue.srcValues.length || !linkValue.distControls.length) {
        error = true;
      }

      if (error) {
        _message2.default.error("配置不完整");

        return;
      }

      setLinkValue(_objectSpread({}, linkValue, {
        srcValues: [],
        srcControls: [],
        distValues: [],
        distControls: []
      }));
      setLeftTransferSelected([]);
      setRightTransferSelected([]);
      onOk && onOk(linkValue, {
        asyncParamName: asyncParamNameRef.current,
        regionName: regionNameRef.current
      });
    }
  }, "\u4FDD\u5B58\u5230\u8868\u5355"), _react.default.createElement(_button.default, {
    type: "default",
    block: true,
    onClick: onBack,
    className: "z-margin-top-15",
    icon: "close"
  }, "\u5173\u95ED\u7A97\u53E3"))));
}

ValueLinkControl.propTypes = propTypes;

var _default = _react.default.memo(ValueLinkControl);

exports.default = _default;

/***/ }),

/***/ "Lfie":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * @Author: zgt
 * @Date: 2019-03-28 14:39:38
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-09 18:25:24
 * @Description: file content
 */
// export default {
// 	id: 927,
// 	name: "爆料管理表单",
// 	code: "szhd_disclosure_form",
// 	version: 19,
// 	seq: 0,
// 	description: "公众互动项目的爆料管理模块",
// 	configuration: null,
// 	linkages:
// 		'[{"linkageType":"8","name":"地图选点取行政区划","src":{"fieldKey":"address","label":"事发地址","fieldType":13},"dist":[{"fields":[{"fieldKey":"area","fieldType":1,"label":"所属区划","regionName":"district"}]}],"regionName":"district"}]',
// 	customOnChange: null,
// 	formTypeId: 8,
// 	gmtCreate: "2019-08-03 17:22:35",
// 	gmtModified: "2019-08-03 17:22:35",
// 	sectionList: [
// 		{
// 			id: 1054,
// 			formId: 927,
// 			name: "爆料问题信息",
// 			seq: 1,
// 			description: null,
// 			gmtCreate: "2019-08-03 17:22:35",
// 			gmtModified: "2019-08-03 17:22:35",
// 			formFieldInfoList: [
// 				{
// 					id: 3385,
// 					sectionId: 1054,
// 					label: "问题类型",
// 					fieldKey: "problemType",
// 					fieldType: 6,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 12,
// 					labelWidth: null,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"label","value":"value","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/upip-problem-webapi/webapi/v1.0/upip/problem/getProblemTypeTree","requireType":"all"},"selectionsQuery":{"problemClass":"1"},"changeOnSelect":0}',
// 					initialValue: null,
// 					seq: 1,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 				{
// 					id: 3386,
// 					sectionId: 1054,
// 					label: "问题来源",
// 					fieldKey: "problemSource",
// 					fieldType: 3,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 12,
// 					labelWidth: null,
// 					config:
// 						'{"selectionsType":2,"selectListFieldNames":{"label":"label","value":"value","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/upip-problem-webapi/webapi/v1.0/upip/problem/listProblemSource","requireType":"all"},"selectionsQuery":{"problemClass":"1"},"mode":"single"}',
// 					initialValue: null,
// 					seq: 2,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 				{
// 					id: 3387,
// 					sectionId: 1054,
// 					label: "所属区划",
// 					fieldKey: "area",
// 					fieldType: 1,
// 					required: 0,
// 					disabled: 1,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 8,
// 					labelWidth: null,
// 					config: '{"type":"text"}',
// 					initialValue: null,
// 					seq: 3,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 				{
// 					id: 3388,
// 					sectionId: 1054,
// 					label: "事发地址",
// 					fieldKey: "address",
// 					fieldType: 13,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 16,
// 					labelWidth: null,
// 					config:
// 						'{"mapType":"amap","secretKey":"63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK","webserviceUrlDO":{"urlMethod":"post","url":"/form-service/webapi/geography/webService"}}',
// 					initialValue: null,
// 					seq: 4,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 				{
// 					id: 3389,
// 					sectionId: 1054,
// 					label: "问题描述",
// 					fieldKey: "problemContent",
// 					fieldType: 2,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 24,
// 					labelWidth: null,
// 					config: '{"maxLength":50}',
// 					initialValue: null,
// 					seq: 5,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 			],
// 		},
// 		{
// 			id: 1055,
// 			formId: 927,
// 			name: "曝料人信息",
// 			seq: 2,
// 			description: null,
// 			gmtCreate: "2019-08-03 17:22:35",
// 			gmtModified: "2019-08-03 17:22:35",
// 			formFieldInfoList: [
// 				{
// 					id: 3390,
// 					sectionId: 1055,
// 					label: "曝料人姓名",
// 					fieldKey: "username",
// 					fieldType: 1,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 12,
// 					labelWidth: null,
// 					config: '{"maxLength":20,"type":"text"}',
// 					initialValue: null,
// 					seq: 1,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 				{
// 					id: 3391,
// 					sectionId: 1055,
// 					label: "登记人",
// 					fieldKey: "register",
// 					fieldType: 1,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 12,
// 					labelWidth: null,
// 					config: '{"type":"text"}',
// 					initialValue: null,
// 					seq: 2,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 				{
// 					id: 3392,
// 					sectionId: 1055,
// 					label: "联系方式",
// 					fieldKey: "phone",
// 					fieldType: 1,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: "^1[3|4|5|6|7|8|9][0-9]\\d{8}$",
// 					description: null,
// 					errorMsg: "输入的手机号格式有误",
// 					placeholder: null,
// 					span: 12,
// 					labelWidth: null,
// 					config: '{"type":"text"}',
// 					initialValue: null,
// 					seq: 3,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 				{
// 					id: 3393,
// 					sectionId: 1055,
// 					label: "爆料时间",
// 					fieldKey: "time",
// 					fieldType: 5,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 12,
// 					labelWidth: null,
// 					config: '{"format":"YYYY-MM-DD HH:mm"}',
// 					initialValue: null,
// 					seq: 4,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 			],
// 		},
// 		{
// 			id: 1056,
// 			formId: 927,
// 			name: "上传图片",
// 			seq: 3,
// 			description: null,
// 			gmtCreate: "2019-08-03 17:22:35",
// 			gmtModified: "2019-08-03 17:22:35",
// 			formFieldInfoList: [
// 				{
// 					id: 3394,
// 					sectionId: 1056,
// 					label: "图片",
// 					fieldKey: "problemFiles",
// 					fieldType: 11,
// 					required: 1,
// 					disabled: 0,
// 					regularExpression: null,
// 					description: null,
// 					errorMsg: null,
// 					placeholder: null,
// 					span: 24,
// 					labelWidth: null,
// 					config:
// 						'{"url":"/cloud-oss/webapi/v1.0/cloud/oss/upload/uploadFile","fileAccept":"image/*","fileListType":"picture-card","wxSourceTypes":["album","camera"],"uploaderResponse":{"id":"id","filePath":"filePath","fileSuffix":"fileSuffix","fileType":"fileType","originalFileName":"originalFileName"},"urlMethod":"post","urlParamName":"file","requestMode":"single"}',
// 					initialValue: null,
// 					seq: 1,
// 					gmtCreate: "2019-08-03 17:22:35",
// 					gmtModified: "2019-08-03 17:22:35",
// 				},
// 			],
// 		},
// 	],
// 	buttonList: [],
// };
// // export default {
// // 	code: "dog_check_in_form",
// // 	name: "养犬信息登记表",
// // 	labelLayout: "inline",
// // 	sectionList: [
// // 		{
// // 			id: 111,
// // 			name: "犬只信息",
// // 			formFieldInfoList: [
// // 				{
// // 					fieldKey: "dogName",
// // 					fieldType: 1,
// // 					id: 466,
// // 					config: '{"maxLength":8,"minLength":1}',
// // 					initialValue: null,
// // 					label: "犬只名称",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 1,
// // 				},
// // 				{
// // 					fieldKey: "dogType",
// // 					fieldType: 1,
// // 					id: 467,
// // 					config: '{"maxLength":16,"minLength":1}',
// // 					initialValue: null,
// // 					label: "犬只品种",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 2,
// // 				},
// // 				{
// // 					fieldKey: "dogSex",
// // 					fieldType: 9,
// // 					id: 468,
// // 					config: '{"selectList":[{"label":"公","value":"1"},{"label":"母","value":"2"}]}',
// // 					initialValue: "1",
// // 					label: "犬只性别",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 3,
// // 				},
// // 				{
// // 					fieldKey: "dogProperty",
// // 					fieldType: 3,
// // 					id: 469,
// // 					config:
// // 						'{"selectList":[{"label":"普通宠物","value":"1"},{"label":"导盲犬/扶助犬","value":"2"},{"label":"其他","value":"3"}]}',
// // 					disabled: true,
// // 					initialValue: null,
// // 					label: "犬只性质",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 4,
// // 				},
// // 				{
// // 					fieldKey: "dogColor",
// // 					fieldType: 1,
// // 					id: 470,
// // 					config: '{"maxLength":8,"minLength":1}',
// // 					initialValue: null,
// // 					label: "犬只颜色",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 5,
// // 				},
// // 				{
// // 					fieldKey: "isIris",
// // 					fieldType: 9,
// // 					id: 471,
// // 					config: '{"selectList":[{"label":"是","value":"1"},{"label":"否","value":"2"}]}',
// // 					initialValue: null,
// // 					label: "录入虹膜",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 6,
// // 				},
// // 				{
// // 					fieldKey: "rfid",
// // 					fieldType: 9,
// // 					id: 472,
// // 					config: '{"selectList":[{"label":"是","value":"1"},{"label":"否","value":"2"}]}',
// // 					initialValue: null,
// // 					label: "电子标签",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 7,
// // 				},
// // 				{
// // 					fieldKey: "birthday",
// // 					fieldType: 5,
// // 					id: 473,
// // 					config: '{"format":"YYYY-MM-DD"}',
// // 					initialValue: null,
// // 					label: "出生日期",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 111,
// // 					span: 8,
// // 					seq: 8,
// // 				},
// // 				{
// // 					fieldKey: "pic",
// // 					fieldType: 11,
// // 					id: 474,
// // 					config:
// // 						'{"url":"/file-upload-service/webapi/v1.0/fileUpload/uploads","accept":"87887878","multiple":false,"paramName":"7878","detailUrl":"/file-upload-service/webapi/v1.0/fileUpload/listUploadInfoByIds"}',
// // 					initialValue: null,
// // 					label: "上传文件",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 111,
// // 					span: 24,
// // 					seq: 9,
// // 				},
// // 				{
// // 					fieldKey: "weihubs",
// // 					fieldType: 3,
// // 					config:
// // 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// // 					disabled: 0,
// // 					label: "下拉控件",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 10,
// // 				},
// // 				{
// // 					fieldKey: "double",
// // 					fieldType: 8,
// // 					config:
// // 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// // 					disabled: 0,
// // 					label: "多选",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 11,
// // 				},
// // 				{
// // 					fieldKey: "single",
// // 					fieldType: 9,
// // 					config:
// // 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// // 					disabled: 0,
// // 					label: "单选",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 12,
// // 				},
// // 				{
// // 					fieldKey: "casserole",
// // 					fieldType: 6,
// // 					config:
// // 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"part"},"selectionsQuery":{"id":"0"},"changeOnSelect":0}',
// // 					disabled: 0,
// // 					label: "级联控件",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 13,
// // 				},
// // 				{
// // 					fieldKey: "treeSelect",
// // 					fieldType: 7,
// // 					config:
// // 						'{"selectionsType":2,"selectListFieldNames":{"label":"deptName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/dept/listDeptByPid","requireType":"part"},"selectionsQuery":{"id":"0"}}',
// // 					disabled: 0,
// // 					label: "tree控件",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 14,
// // 				},
// // 				{
// // 					fieldKey: "asyncTests",
// // 					fieldType: 3,
// // 					config:
// // 						'{"selectionsType":2,"selectListFieldNames":{"label":"itemName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/system-service/webapi/sysDictionary/listByTypeCode","requireType":"all"},"selectionsQuery":{"typeCode":"case_type"}}',
// // 					disabled: 0,
// // 					initialValue: 8,
// // 					label: "下拉测试异步",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 15,
// // 				},
// // 				{
// // 					fieldKey: "asyncYYYYYY",
// // 					fieldType: 3,
// // 					config:
// // 						'{"selectionsType":2,"selectListFieldNames":{"label":"itemName","value":"id","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/system-service/webapi/sysDictionary/listByParentId","requireType":"all"},"selectionsQuery":{"id":"0"}}',
// // 					disabled: 0,
// // 					label: "接收异步联动",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 16,
// // 				},
// // 				{
// // 					fieldKey: "yearssss",
// // 					fieldType: 5,
// // 					config: '{"format":"YYYY"}',
// // 					disabled: 0,
// // 					label: "年份",
// // 					required: 1,
// // 					span: 8,
// // 					seq: 17,
// // 				},
// // 			],
// // 			seq: 1,
// // 		},
// // 		{
// // 			id: 112,
// // 			name: "养犬人信息",
// // 			formFieldInfoList: [
// // 				{
// // 					fieldKey: "name",
// // 					fieldType: 1,
// // 					id: 475,
// // 					config: '{"maxLength":8,"minLength":1}',
// // 					initialValue: null,
// // 					label: "养犬人姓名",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 1,
// // 				},
// // 				{
// // 					fieldKey: "type",
// // 					fieldType: 3,
// // 					id: 476,
// // 					config: '{"selectList":[{"label":"身份证","value":"1"},{"label":"港澳通行证","value":"2"}]}',
// // 					initialValue: null,
// // 					label: "证件类型",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 2,
// // 				},
// // 				{
// // 					fieldKey: "number",
// // 					fieldType: 4,
// // 					id: 477,
// // 					config: '{"decimalLength":0}',
// // 					initialValue: null,
// // 					label: "证件号码",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 3,
// // 				},
// // 				{
// // 					fieldKey: "tel",
// // 					fieldType: 4,
// // 					id: 478,
// // 					config: '{"decimalLength":0}',
// // 					initialValue: null,
// // 					label: "移动电话",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 4,
// // 				},
// // 				{
// // 					fieldKey: "telephone",
// // 					fieldType: 1,
// // 					id: 479,
// // 					config: '{"maxLength":20,"minLength":1}',
// // 					initialValue: null,
// // 					label: "固定电话",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 5,
// // 				},
// // 				{
// // 					fieldKey: "email",
// // 					fieldType: 1,
// // 					id: 480,
// // 					config: '{"maxLength":20,"minLength":1}',
// // 					initialValue: null,
// // 					label: "电子邮箱",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 6,
// // 				},
// // 				{
// // 					fieldKey: "dogCount",
// // 					fieldType: 4,
// // 					id: 481,
// // 					config: '{"decimalLength":0}',
// // 					initialValue: null,
// // 					label: "犬只数量",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 7,
// // 				},
// // 				{
// // 					fieldKey: "address",
// // 					fieldType: 1,
// // 					id: 482,
// // 					config: '{"maxLength":50,"minLength":1}',
// // 					initialValue: null,
// // 					label: "详细地址",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 8,
// // 				},
// // 				{
// // 					fieldKey: "domicile",
// // 					fieldType: 3,
// // 					id: 483,
// // 					config:
// // 						'{"selectList":[{"label":"自有","value":"1"},{"label":"租赁","value":"2"},{"label":"其他","value":"3"}]}',
// // 					initialValue: null,
// // 					label: "住所性质",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 112,
// // 					span: 8,
// // 					seq: 9,
// // 				},
// // 			],
// // 			seq: 2,
// // 		},
// // 		{
// // 			id: 113,
// // 			name: "领取方式",
// // 			formFieldInfoList: [
// // 				{
// // 					fieldKey: "dogCard",
// // 					fieldType: 1,
// // 					id: 484,
// // 					config: '{"maxLength":8,"minLength":1}',
// // 					initialValue: "电子犬证",
// // 					label: "电子犬证",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 113,
// // 					span: 8,
// // 					seq: 1,
// // 				},
// // 				{
// // 					fieldKey: "isEntity",
// // 					fieldType: 9,
// // 					id: 490,
// // 					config: '{"selectList":[{"label":"是","value":"1"},{"label":"否","value":"2"}]}',
// // 					initialValue: "2",
// // 					label: "是否需要实体卡",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 113,
// // 					span: 8,
// // 					seq: 2,
// // 				},
// // 				{
// // 					fieldKey: "payment",
// // 					fieldType: 9,
// // 					id: 485,
// // 					config: '{"selectList":[{"label":"自取","value":"1"},{"label":"寄邮到付","value":"2"}]}',
// // 					initialValue: null,
// // 					label: "领取方式",
// // 					regularExpression: null,
// // 					required: 1,
// // 					sectionId: 113,
// // 					span: 8,
// // 					seq: 3,
// // 				},
// // 				{
// // 					fieldKey: "location",
// // 					fieldType: 1,
// // 					id: 486,
// // 					config: '{"maxLength":50,"minLength":1}',
// // 					initialValue: null,
// // 					label: "自取地址",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 113,
// // 					span: 8,
// // 					seq: 4,
// // 				},
// // 				{
// // 					fieldKey: "recipientName",
// // 					fieldType: 1,
// // 					id: 487,
// // 					config: '{"maxLength":8,"minLength":1}',
// // 					initialValue: null,
// // 					label: "收件人姓名",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 113,
// // 					span: 8,
// // 					seq: 5,
// // 				},
// // 				{
// // 					fieldKey: "contact",
// // 					fieldType: 4,
// // 					id: 488,
// // 					config: '{"decimalLength":0}',
// // 					initialValue: null,
// // 					label: "联系方式",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 113,
// // 					span: 8,
// // 					seq: 6,
// // 				},
// // 				{
// // 					fieldKey: " mailingAddress",
// // 					fieldType: 1,
// // 					id: 489,
// // 					config: '{"maxLength":50,"minLength":0}',
// // 					initialValue: null,
// // 					label: "邮寄地址",
// // 					regularExpression: null,
// // 					required: 0,
// // 					sectionId: 113,
// // 					span: 8,
// // 					seq: 7,
// // 				},
// // 			],
// // 			seq: 3,
// // 		},
// // 	],
// // 	linkages:
// // 		'[{"linkageType":"7","name":"单选联动其他控件异步选项","src":{"fieldKey":"asyncTests","label":"下拉测试异步","fieldType":3},"dist":[{"fields":[{"srcKey":"asyncTests","fieldKey":"asyncYYYYYY","label":"接收异步联动","fieldType":3,"asyncParamName":"id"}]}],"asyncParamName":"id"}]',
// // };
// // {
// // 	linkageType: "4",
// // 	name: "单选/多选 控制 选项",
// // 	src: { fieldKey: "rfid" },
// // 	dist: [
// // 		{
// // 			srcValue: "1",
// // 			fields: [
// // 				{
// // 					fieldKey: "domicile",
// // 					label: "住所性质",
// // 					options: [
// // 						{ label: "自有", value: "1" },
// // 						{ label: "租赁", value: "2" },
// // 						{ label: "其他", value: "3" },
// // 					],
// // 				},
// // 			],
// // 		},
// // 		{
// // 			srcValue: "2",
// // 			fields: [
// // 				{
// // 					fieldKey: "domicile",
// // 					label: "住所性质",
// // 					options: [{ label: "自有", value: "1" }],
// // 				},
// // 			],
// // 		},
// // 	],
// // },
var _default = {
  labelLayout: "inline",
  id: 1050,
  name: "巡查员问题处理表单(新)",
  code: "problem_flow_new_xcj_deal_form",
  version: 14,
  seq: 0,
  description: "巡查员问题处理表单(新)",
  configuration: null,
  linkages: '[{"linkageType":"5.1","name":"单选/多选控制组隐藏","src":{"fieldKey":"dealTag","label":"处理方式","fieldType":9},"dist":[{"srcKey":"dealTag","srcValue":"1","valueLabel":"劝告","fields":[{"groupId":955,"groupName":"警告详情"},{"groupId":956,"groupName":"报告详情"}]},{"srcKey":"dealTag","srcValue":"2","valueLabel":"警告","fields":[{"groupId":954,"groupName":"劝告详情"},{"groupId":956,"groupName":"报告详情"}]},{"srcKey":"dealTag","srcValue":"3","valueLabel":"报告","fields":[{"groupId":954,"groupName":"劝告详情"},{"groupId":955,"groupName":"警告详情"}]}]},{"linkageType":"7","name":"单选联动其他控件异步选项","src":{"fieldKey":"problemType","label":"问题类型","fieldType":3},"dist":[{"fields":[{"fieldKey":"problemReason","fieldType":3,"label":"问题原由","asyncParamName":"itemValue"}]}],"asyncParamName":"itemValue"}]',
  customOnChange: null,
  formTypeId: 2,
  requiredMsg: null,
  gmtCreate: "2019-08-22 09:03:22",
  gmtModified: "2019-08-22 09:03:22",
  sectionList: [{
    id: 1321,
    formId: 1050,
    name: "问题信息",
    seq: 1,
    description: null,
    gmtCreate: "2019-08-22 09:03:22",
    gmtModified: "2019-08-22 09:03:22",
    formFieldInfoList: [{
      label: "自定义",
      fieldKey: "mycustoms",
      fieldType: 14,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: "{}",
      initialValue: null,
      seq: 1,
      isFormItem: false
    }, {
      id: 4435,
      sectionId: 1321,
      label: "现场图片",
      fieldKey: "problemPictures",
      fieldType: 11,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"url":"/file-upload-service/webapi/v1.0/fileUpload/huawei/uploadFile","fileAccept":"image/*","fileListType":"picture-card","wxSourceTypes":["album","camera"],"uploaderResponse":{"id":"id","filePath":"filePath","fileSuffix":"fileSuffix","originalFileName":"originalFileName"},"autoUpload":1,"maxMegabytes":10,"urlMethod":"post","urlParamName":"file","requestMode":"single"}',
      initialValue: null,
      seq: 1,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4436,
      sectionId: 1321,
      label: "当事人",
      fieldKey: "litigantName",
      fieldType: 1,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 20,
      labelWidth: null,
      config: '{"maxLength":40,"minLength":2,"type":"text"}',
      initialValue: null,
      seq: 2,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4437,
      sectionId: 1321,
      label: "问题类型",
      fieldKey: "problemType",
      fieldType: 3,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"selectionsType":2,"selectListFieldNames":{"label":"itemName","value":"itemValue","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/system-service/api/sysDictionary/listByTypeCode","requireType":"all"},"selectionsQuery":{"typeCode":"problem_type"},"mode":"single","notFoundContent":"无相关数据"}',
      initialValue: null,
      seq: 3,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4438,
      sectionId: 1321,
      label: "问题原由",
      fieldKey: "problemReason",
      fieldType: 3,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"selectionsType":2,"selectListFieldNames":{"label":"itemName","value":"itemValue","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/system-service/api/sysDictionary/listByItemValue","requireType":"all"},"selectionsQuery":{"itemValue":"000"},"mode":"single","notFoundContent":"无相关数据"}',
      initialValue: null,
      seq: 4,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4439,
      sectionId: 1321,
      label: "案发地址",
      fieldKey: "problemAddress",
      fieldType: 13,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"mapType":"qqmap","secretKey":"63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK","webserviceUrlDO":{"urlMethod":"post","url":"/system-service/webapi/geography/webService"}}',
      initialValue: null,
      seq: 5,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }]
  }, {
    id: 1322,
    formId: 1050,
    name: "问题处理",
    seq: 2,
    description: null,
    gmtCreate: "2019-08-22 09:03:22",
    gmtModified: "2019-08-22 09:03:22",
    formFieldInfoList: [{
      id: 4441,
      sectionId: 1322,
      label: "处理方式",
      fieldKey: "dealTag",
      fieldType: 9,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"selectionsType":1,"selectListFieldNames":{"label":"label","value":"value","children":"children"},"selectList":[{"id":"784184431564453400000","selected":true,"label":"劝告","value":"1"},{"id":"455066461564453500000","label":"警告","value":"2"},{"id":"611918881564453500000","label":"报告","value":"3"}],"selectionsQuery":{}}',
      initialValue: "1",
      seq: 1,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }]
  }, {
    id: 1323,
    formId: 1050,
    name: "劝告详情",
    seq: 3,
    description: null,
    gmtCreate: "2019-08-22 09:03:22",
    gmtModified: "2019-08-22 09:03:22",
    formFieldInfoList: [{
      id: 4442,
      sectionId: 1323,
      label: "劝告后的图片",
      fieldKey: "advisePictures",
      fieldType: 11,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"url":"/file-upload-service/webapi/v1.0/fileUpload/huawei/uploadFile","fileAccept":"image/*","fileListType":"picture-card","wxSourceTypes":["album","camera"],"uploaderResponse":{"id":"id","filePath":"filePath","fileSuffix":"fileSuffix","originalFileName":"originalFileName"},"autoUpload":1,"maxMegabytes":10,"urlMethod":"post","urlParamName":"file","requestMode":"single"}',
      initialValue: null,
      seq: 1,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4443,
      sectionId: 1323,
      label: "备注信息",
      fieldKey: "adviseRemark",
      fieldType: 2,
      required: 0,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"maxLength":300,"minLength":0}',
      initialValue: null,
      seq: 2,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }]
  }, {
    id: 1324,
    formId: 1050,
    name: "警告详情",
    seq: 4,
    description: null,
    gmtCreate: "2019-08-22 09:03:22",
    gmtModified: "2019-08-22 09:03:22",
    formFieldInfoList: [{
      id: 4444,
      sectionId: 1324,
      label: "警告后的图片",
      fieldKey: "warnPictrures",
      fieldType: 11,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"url":"/file-upload-service/webapi/v1.0/fileUpload/huawei/uploadFile","fileAccept":"image/*","fileListType":"picture-card","wxSourceTypes":["album","camera"],"uploaderResponse":{"id":"id","filePath":"filePath","fileSuffix":"fileSuffix","originalFileName":"originalFileName"},"autoUpload":1,"maxMegabytes":10,"urlMethod":"post","urlParamName":"file","requestMode":"single"}',
      initialValue: null,
      seq: 1,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4445,
      sectionId: 1324,
      label: "备注说明",
      fieldKey: "warnRemark",
      fieldType: 2,
      required: 0,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"maxLength":300,"minLength":0}',
      initialValue: null,
      seq: 2,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }]
  }, {
    id: 1325,
    formId: 1050,
    name: "报告详情",
    seq: 5,
    description: null,
    gmtCreate: "2019-08-22 09:03:22",
    gmtModified: "2019-08-22 09:03:22",
    formFieldInfoList: [{
      id: 4446,
      sectionId: 1325,
      label: "报告接收人员",
      fieldKey: "reportUserId",
      fieldType: 3,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"selectionsType":2,"selectListFieldNames":{"label":"userName","value":"userAccount","children":"children"},"selectionsUrl":{"selectionsUrlMethod":"post","selectionsUrl":"/tibmas2-webapi/api/v1.0/user/listUserByDeptIdAndRoleCodesWithPathVarXcjHandler","requireType":"all"},"selectionsQuery":{"roleCodes":"AREA_MGR"},"mode":"single"}',
      initialValue: null,
      seq: 1,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4447,
      sectionId: 1325,
      label: "是否为紧急问题",
      fieldKey: "emergencyTag",
      fieldType: 9,
      required: 1,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"selectionsType":1,"selectListFieldNames":{"label":"label","value":"value","children":"children"},"selectList":[{"id":"6665571564456293000","label":"否","value":"0"},{"id":"847325661564456300000","label":"是","value":"1"}],"selectionsQuery":{}}',
      initialValue: null,
      seq: 2,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }, {
      id: 4448,
      sectionId: 1325,
      label: "备注说明",
      fieldKey: "repoartRemark",
      fieldType: 2,
      required: 0,
      disabled: 0,
      regularExpression: null,
      description: null,
      errorMsg: null,
      placeholder: null,
      span: 24,
      labelWidth: null,
      config: '{"maxLength":300,"minLength":0}',
      initialValue: null,
      seq: 3,
      gmtCreate: "2019-08-22 09:03:22",
      gmtModified: "2019-08-22 09:03:22"
    }]
  }],
  buttonList: [],
  formSubmitTypeCode: 1,
  customControlRender: {
    "mycustoms": function mycustoms(data) {
      console.log(data);
      return 999;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "LlIA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _controls = __webpack_require__("VoWU");

var _zTool = __webpack_require__("/sSO");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  size: _propTypes.default.string,
  selectList: _propTypes.default.arrayOf(_propTypes.default.object),
  value: _propTypes.default.object,
  valueKey: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  leftPlaceholder: _propTypes.default.string,
  centerPlaceholder: _propTypes.default.string,
  rightPlaceholder: _propTypes.default.string,
  controlCostrom: _propTypes.default.object,
  customControls: _propTypes.default.array
};
var defaultProps = {
  valueKey: {
    left: "label",
    center: "value",
    right: "paramName"
  },
  size: "default",
  selectList: [],
  leftSpan: 6,
  centerSpan: 12,
  rightSpan: 6,
  disabled: false,
  controlCostrom: {
    left: null,
    center: null,
    right: null
  },
  customControls: []
};

function getNewValue(value, valueKey, currentValue, customControls) {
  var newValue = {};

  if (value) {
    newValue = _objectSpread({}, value, {}, currentValue);
  } else {
    Object.values(valueKey).forEach(function (v) {
      newValue[v] = "";
    });
    customControls.forEach(function (item) {
      newValue[item.key] = "";
    });
    newValue = _objectSpread({}, newValue, {}, currentValue);
  }

  return newValue;
}

var MyComponent = _react.default.forwardRef(function ZselectInput(props, ref) {
  var size = props.size,
      selectList = props.selectList,
      leftSpan = props.leftSpan,
      centerSpan = props.centerSpan,
      rightSpan = props.rightSpan,
      onChange = props.onChange,
      value = props.value,
      valueKey = props.valueKey,
      disabled = props.disabled,
      className = props.className,
      leftPlaceholder = props.leftPlaceholder,
      centerPlaceholder = props.centerPlaceholder,
      rightPlaceholder = props.rightPlaceholder,
      controlCostrom = props.controlCostrom,
      customControls = props.customControls;

  var customChange = function customChange(val, key) {
    var currentValue = (0, _defineProperty2.default)({}, key, val);
    var newValue = getNewValue(value, valueKey, currentValue, customControls);
    typeof onChange === "function" && onChange(newValue);
  };

  var leftChange = function leftChange(val) {
    customChange(val, valueKey.left);
  };

  var centerChange = function centerChange(val) {
    customChange(val, valueKey.center);
  };

  var rightChange = function rightChange(val) {
    customChange(val, valueKey.right);
  };

  var wrapperElRef = (0, _react.useRef)();

  var _left = value && value[valueKey.left] !== undefined ? value[valueKey.left] : "";

  var _center = value && value[valueKey.center] !== undefined ? value[valueKey.center] : "";

  var _right = value && value[valueKey.right] !== undefined ? value[valueKey.right] : "";

  (0, _react.useEffect)(function () {
    var warperEl = wrapperElRef.current.querySelector(".z-select-input");

    if (warperEl) {
      Array.from(warperEl.children).forEach(function (el, i) {
        el.removeAttribute("style");
        var currentWidth = (0, _zTool.getStyle)(el, "width");

        if (/\%$/.test(currentWidth) && i !== 0) {
          el.style.width = "calc(".concat(currentWidth, " + 1px)");
        }
      });
    }
  }, [leftSpan, centerSpan, rightSpan]);
  return _react.default.createElement("div", {
    ref: wrapperElRef
  }, _react.default.createElement(_input.default.Group, {
    compact: true,
    size: size,
    className: "z-select-input ".concat(className || "")
  }, leftSpan ? _react.default.createElement(_col.default, {
    span: leftSpan
  }, typeof controlCostrom.left === "function" ? controlCostrom.left(_left, leftChange) : (0, _controls.getControl)("Select", {
    value: _left,
    selectList: selectList,
    onChange: leftChange,
    disabled: disabled,
    className: "z-label",
    placeholder: leftPlaceholder
  })) : null, centerSpan ? _react.default.createElement(_col.default, {
    span: centerSpan
  }, typeof controlCostrom.center === "function" ? controlCostrom.center(_center, centerChange) : (0, _controls.getControl)("Input", {
    value: _center,
    onChange: function onChange(e) {
      centerChange(e);
    },
    disabled: disabled,
    className: "z-value",
    placeholder: centerPlaceholder
  })) : null, rightSpan ? _react.default.createElement(_col.default, {
    span: rightSpan
  }, typeof controlCostrom.right === "function" ? controlCostrom.right(_right, rightChange) : (0, _controls.getControl)("Input", {
    value: _right,
    onChange: function onChange(e) {
      rightChange(e);
    },
    disabled: disabled,
    className: "z-name",
    placeholder: rightPlaceholder
  })) : null, customControls.map(function (item) {
    return _react.default.createElement(_col.default, {
      span: item.span,
      key: item.key
    }, item.render(value, item, customChange));
  })));
});

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

var _default = _react.default.memo(MyComponent);

exports.default = _default;

/***/ }),

/***/ "PjD8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modal = _interopRequireDefault(__webpack_require__("kLXV"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _controls = __webpack_require__("VoWU");

var _zTool = __webpack_require__("/sSO");

var _ZerodMainContext = _interopRequireDefault(__webpack_require__("MaNN"));

var _ZerodLayerContext = _interopRequireDefault(__webpack_require__("Y3vA"));

var _Zviewer = _interopRequireDefault(__webpack_require__("mKiM"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getFileUids(files) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "uid";
  return files.map(function (file) {
    return file[key];
  });
}

var propTypes = {
  config: _propTypes.default.object,
  getUserInfo: _propTypes.default.func,
  getInsertLocation: _propTypes.default.func,
  getLayerModalInsertLocation: _propTypes.default.func,
  showModalLoading: _propTypes.default.func,
  showLayerModalLoading: _propTypes.default.func,
  value: _propTypes.default.array,
  onChange: _propTypes.default.func
};
var defaultProps = {
  getUserInfo: function getUserInfo() {
    return {};
  },
  getInsertLocation: function getInsertLocation() {
    return null;
  },
  showModalLoading: function showModalLoading() {
    return null;
  }
};
/**
 * config
 * 	{
 * 		url: string //多文件上传的接口,
 * 		urlMethod: string //多文件上传请求方式,
 * 		urlParamName: string //上传接口的参数名,
 *      uploaderResponse: object //转发value接收的字段名
 * 		userIdName: string ,// 用户id参数名
 *      autoUpload ：boolean //是否自动上传（是否出现确认上传按钮）
 *      requestMode: string  //上传接口上传模式  single(单文件) | multiple(多文件)
 *      isSourceFile ： boolean // onChange事件导出的value是否带着文件流数据，true时以上属性都无效，即不会调用上传接口，不会出现确认上传按钮
 *      fileAccept: string //上传可选的文件类型
 *      maxUploadLength ： number  //最大上传数量
 *      fileListType ： stirng  //列表展示模式  picture | picture-card
 *      maxMegabytes : number // 允许选择最大文件大小（M） 默认 10M
 * 	}
 */
//上传文件组件(多文件)

var MyUpload = _react.default.forwardRef(function (props, ref) {
  var config = props.config,
      getUserInfo = props.getUserInfo,
      getInsertLocation = props.getInsertLocation,
      getLayerModalInsertLocation = props.getLayerModalInsertLocation,
      showModalLoading = props.showModalLoading,
      showLayerModalLoading = props.showLayerModalLoading,
      value = props.value,
      onChange = props.onChange,
      field = props.field;
  var wrapperElRef = (0, _react.useRef)(null);
  var fileAccept = config.fileAccept,
      requestMode = config.requestMode,
      maxUploadLength = config.maxUploadLength,
      autoUpload = config.autoUpload,
      isSourceFile = config.isSourceFile;
  var fileListType = config.fileListType || "picture-card";
  var maxMegabytes = typeof config.maxMegabytes === "number" ? config.maxMegabytes : 10;
  var isPictureCardType = fileListType === "picture-card";
  var isOnlyPicture = fileAccept === "image/*";
  var uploaderResponse = config.uploaderResponse || {
    id: "id",
    filePath: "filePath",
    fileSuffix: "fileSuffix",
    originalFileName: "originalFileName"
  }; //是否单文件接口

  var isSingle = requestMode === "single"; //fileList：上传文件的列表数据，setTruefileList：文件数据流

  var _useState = (0, _react.useState)({
    fileList: [],
    setTruefileList: []
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      fileState = _useState2[0],
      setFileState = _useState2[1]; //保存已上传文件的uid和服务id


  var hasUploadDoneServerIdsRef = (0, _react.useRef)([]); //过滤出未上传的文件

  var noUploader = fileState.setTruefileList.filter(function (file) {
    // console.log("---ids", hasUploadDoneServerIdsRef.current, getFileUids(hasUploadDoneServerIdsRef.current));
    return !getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid);
  }); // console.log(noUploader, hasUploadDoneServerIdsRef.current, fileState);
  //获取调用showModalLoading的第二个参数

  var modalRef = (0, _react.useRef)("");
  (0, _react.useEffect)(function () {
    modalRef.current = getLayerModalInsertLocation && typeof getLayerModalInsertLocation === "function" ? getLayerModalInsertLocation(wrapperElRef.current) : typeof getInsertLocation === "function" ? getInsertLocation(wrapperElRef.current) : null;
  }, []);
  var showLoading = showLayerModalLoading && typeof showLayerModalLoading === "function" ? showLayerModalLoading : typeof showModalLoading === "function" ? showModalLoading : function () {
    return null;
  }; //处理value

  (0, _react.useEffect)(function () {
    if (!Array.isArray(value) || !value.length) {
      setFileState({
        fileList: [],
        setTruefileList: []
      });
      return;
    }

    var hasGetDetailIds = value.filter(function (server) {
      var isObject = _zTool.dataType.isObject(server);

      var currentServers = getFileUids(hasUploadDoneServerIdsRef.current, "serverId");
      var hasServer = currentServers.find(function (item) {
        return isObject ? item[uploaderResponse.id] ? item[uploaderResponse.id] === server[uploaderResponse.id] : item[uploaderResponse.filePath] === server[uploaderResponse.filePath] : item === server;
      });
      return !hasServer;
    });

    if (hasGetDetailIds.length) {
      var files = hasGetDetailIds.filter(function (item) {
        var isPic = _zTool.dataType.isObject(item) ? item[uploaderResponse.filePath] : item;

        if (!isPic) {
          console.warn("上传控件的value缺少相关的文件地址");
        }

        return isPic;
      }).map(function (item) {
        var isObject = _zTool.dataType.isObject(item);

        hasUploadDoneServerIdsRef.current.push({
          uid: isObject ? item[uploaderResponse.id] || item[uploaderResponse.filePath] : item,
          serverId: item
        });

        if (isObject) {
          return {
            uid: item[uploaderResponse.id] || item[uploaderResponse.filePath],
            name: "".concat(item[uploaderResponse.originalFileName], ".").concat(item[uploaderResponse.fileSuffix]),
            status: "done",
            type: item[uploaderResponse.fileSuffix] && /(webp|svg|png|gif|jpg|jpeg|bmp|dpg)$/.test(item[uploaderResponse.fileSuffix]) ? "image" : "",
            url: item[uploaderResponse.filePath]
          };
        } else {
          return {
            uid: item,
            name: "",
            status: "done",
            type: /\.(webp|svg|png|gif|jpg|jpeg|bmp|dpg)$/.test(item) ? "image" : "",
            url: item
          };
        }
      });
      setFileState({
        fileList: [].concat((0, _toConsumableArray2.default)(fileState.fileList), (0, _toConsumableArray2.default)(files)),
        setTruefileList: [].concat((0, _toConsumableArray2.default)(fileState.setTruefileList), (0, _toConsumableArray2.default)(files))
      });
    }
  }, [value]); //上传文件

  var uploadAsync = function uploadAsync() {
    if (!config.url) {
      _message2.default.error("未配置上传多文件的后台地址");

      return;
    }

    var userinfo = getUserInfo();
    var userId = userinfo && userinfo.userDO ? userinfo.userDO.id : ""; // console.log("userinfo---", userinfo);

    var formData = new FormData();
    noUploader.forEach(function (file) {
      formData.append(config.urlParamName ? config.urlParamName : "files", file);
    });
    showLoading(true, modalRef.current, "上传中...");
    if (config.url) (0, _zTool.httpAjax)(config.urlMethod ? config.urlMethod : "post", "".concat(config.url, "?").concat(config.userIdName ? config.userIdName : "userId", "=").concat(userId), formData).then(function (re) {
      var ulploadData = isSingle ? [re.data] : re.data;
      hasUploadDoneServerIdsRef.current = [].concat((0, _toConsumableArray2.default)(hasUploadDoneServerIdsRef.current), (0, _toConsumableArray2.default)(ulploadData.map(function (server, i) {
        return {
          uid: noUploader[i].uid,
          serverId: server
        };
      })));
      setFileState(_objectSpread({}, fileState, {
        fileList: fileState.fileList.map(function (file) {
          return _objectSpread({}, file, {
            status: getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid) ? "done" : "undetermined"
          });
        })
      }));

      _message2.default.success("上传成功。");

      typeof onChange === "function" && onChange(getFileUids(hasUploadDoneServerIdsRef.current, "serverId"));
    }).catch(function (re) {
      _message2.default.error(re && re.msg ? re.msg : "上传失败。"); //自动上传模式，上传失败时移除列表


      if (autoUpload) {
        setFileState({
          fileList: fileState.fileList.filter(function (file) {
            var isNoUploader = noUploader.find(function (item) {
              return item.uid === file.uid;
            });
            return !isNoUploader;
          }),
          setTruefileList: fileState.setTruefileList.filter(function (file) {
            var isNoUploader = noUploader.find(function (item) {
              return item.uid === file.uid;
            });
            return !isNoUploader;
          })
        });
      }
    }).finally(function () {
      showLoading(false, modalRef.current);
    });
  }; //确认上传事件


  var handleUpload = function handleUpload() {
    if (noUploader.length) {
      uploadAsync();
    }
  }; //确认上传按钮


  var commitButton = isPictureCardType ? _react.default.createElement("div", {
    className: "ant-upload ant-upload-select ant-upload-select-picture-card z-float-left z-flex-items-center",
    onClick: handleUpload
  }, _react.default.createElement(_icon.default, {
    type: "check"
  }), _react.default.createElement("div", null, "\u786E\u8BA4\u4E0A\u4F20")) : _react.default.createElement("div", {
    className: "z-liveform-upload-btn z-margin-top-10",
    onClick: handleUpload
  }, _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
    type: "check"
  }), " \u786E\u8BA4\u4E0A\u4F20"));
  var uploadButtonName = isOnlyPicture ? "选择图片" : "选择文件"; //选文件按钮

  var uploadButton = isSingle && noUploader.length ? null : isPictureCardType ? _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
    type: "upload"
  }), " ", uploadButtonName) : _react.default.createElement("div", {
    className: "z-liveform-upload-btn"
  }, _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
    type: "upload"
  }), " ", uploadButtonName));
  var viewerRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    autoUpload && !isSourceFile && handleUpload();
  }, [fileState]);
  return _react.default.createElement("div", {
    className: "z-liveform-upload-wrapper z-clear-fix",
    ref: wrapperElRef
  }, (0, _controls.getControl)("Upload", {
    disabled: !!field.disabled,
    children: maxUploadLength && maxUploadLength <= fileState.fileList.length ? null : uploadButton,
    multiple: false,
    // action: config.url,
    listType: fileListType,
    name: "file",
    className: "z-liveform-upload ".concat(fileListType === "picture-card" ? "z-float-left" : ""),
    accept: fileAccept !== "all" ? fileAccept : undefined,
    //onChange={this.handleUploadChange}
    fileList: fileState.fileList,
    onPreview: function onPreview(file) {
      // console.log("----", file, fileState.fileList);
      if (file.type && !file.type.includes("image")) {
        _message2.default.error("无法预览非图片文件");

        return;
      }

      viewerRef.current && viewerRef.current.viewer.show(true);
      viewerRef.current && viewerRef.current.viewer.view(fileState.fileList.findIndex(function (item) {
        return item.url === file.url;
      }));
    },
    //移除
    onRemove: function onRemove(file) {
      function removeFlieFromList() {
        var index = fileState.fileList.findIndex(function (item) {
          return item.uid === file.uid;
        });
        var serverIndex = hasUploadDoneServerIdsRef.current.findIndex(function (item) {
          return item.uid === file.uid;
        });

        if (serverIndex > -1) {
          hasUploadDoneServerIdsRef.current.splice(serverIndex, 1);
          typeof onChange === "function" && onChange(getFileUids(hasUploadDoneServerIdsRef.current, "serverId"));
        }

        if (index > -1) {
          fileState.fileList.splice(index, 1);
          fileState.setTruefileList.splice(index, 1);
          setFileState({
            fileList: (0, _toConsumableArray2.default)(fileState.fileList),
            setTruefileList: (0, _toConsumableArray2.default)(fileState.setTruefileList)
          });
        }
      }

      if (getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid)) {
        _modal.default.confirm({
          title: "此文件已上传到服务器，确定从列表中移除?",
          content: "",
          okText: "确定",
          cancelText: "取消",
          onOk: function onOk() {
            removeFlieFromList();
          } // onCancel() {
          // 	console.log("Cancel");
          // },

        });
      } else {
        removeFlieFromList();
      }
    },
    //取消自动上传，实现手动上传
    beforeUpload: function beforeUpload(file) {
      // console.log("--beforeload--", file);
      var currM = file.size / 1024 / 1024;

      if (currM > maxMegabytes) {
        _message2.default.error("\u9009\u62E9\u7684\u6587\u4EF6\u8FD1".concat(currM.toFixed(2), "M,\u4E0D\u5141\u8BB8\u4E0A\u4F20\u8D85\u8FC7").concat(maxMegabytes, "M\u7684\u6587\u4EF6"));

        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function () {
        var setTruefileList = [];

        if (isSourceFile) {
          var _sourceFile;

          var sourceFile = (_sourceFile = {}, (0, _defineProperty2.default)(_sourceFile, uploaderResponse.id, file.uid), (0, _defineProperty2.default)(_sourceFile, "uid", file.uid), (0, _defineProperty2.default)(_sourceFile, uploaderResponse.filePath, reader.result), (0, _defineProperty2.default)(_sourceFile, "sourceFile", file), _sourceFile);
          hasUploadDoneServerIdsRef.current = [].concat((0, _toConsumableArray2.default)(hasUploadDoneServerIdsRef.current), [{
            uid: file.uid,
            serverId: sourceFile
          }]);
          setTruefileList = [].concat((0, _toConsumableArray2.default)(fileState.setTruefileList), [sourceFile]);
          typeof onChange === "function" && onChange(setTruefileList);
        } else {
          setTruefileList = [].concat((0, _toConsumableArray2.default)(fileState.setTruefileList), [file]);
        }

        setFileState({
          fileList: [].concat((0, _toConsumableArray2.default)(fileState.fileList), [{
            uid: file.uid,
            name: file.name,
            status: "undetermined",
            type: file.type,
            url: reader.result
          }]),
          setTruefileList: setTruefileList
        });
      };

      return false;
    }
  }), noUploader.length && !autoUpload && !isSourceFile ? commitButton : null, fileState.fileList.length ? _reactDom.default.createPortal(_react.default.createElement("div", {
    style: {
      position: "fixed",
      visibility: "hidden",
      top: 0,
      left: 0,
      width: "100%",
      transform: "translate(-100%,0)"
    }
  }, _react.default.createElement(_Zviewer.default, {
    urls: fileState.fileList.filter(function (item) {
      return item.type && item.type.includes("image");
    }).map(function (item) {
      return item.url;
    }),
    ref: viewerRef
  })), document.body) : null);
});

MyUpload.propTypes = propTypes;
MyUpload.defaultProps = defaultProps;

var _default = _ZerodMainContext.default.setConsumer(_ZerodLayerContext.default.setConsumer(_react.default.memo(MyUpload)));

exports.default = _default;

/***/ }),

/***/ "PzH3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(305);

/***/ }),

/***/ "UOdo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MapChooseAddress = void 0;

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _controls = __webpack_require__("VoWU");

var _zTool = __webpack_require__("/sSO");

var _ZerodMainContext = _interopRequireDefault(__webpack_require__("MaNN"));

var _ZerodLayerContext = _interopRequireDefault(__webpack_require__("Y3vA"));

var _httpAjax = _interopRequireDefault(__webpack_require__("IvKo"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LoadMapIframe = _react.default.forwardRef(function (props, ref) {
  var mapType = props.mapType,
      value = props.value,
      onChange = props.onChange;
  (0, _react.useEffect)(function () {
    var messageCallback = null;

    if (mapType === "amap") {
      //高德地图
      var iframe = document.getElementById("addressIframe").contentWindow;

      document.getElementById("addressIframe").onload = function () {
        iframe.postMessage("hello", "https://m.amap.com/picker/");
      };

      messageCallback = function messageCallback(event) {
        var loc = event.data;
        var latlng = loc.location.split(",");
        onChange && onChange({
          name: "".concat(loc.name, "(").concat(loc.address, ")"),
          address: loc.address,
          longitude: latlng[0],
          latitude: latlng[1]
        });
      };
    } else if (mapType === "qqmap") {
      //腾讯地图
      messageCallback = function messageCallback(event) {
        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data;

        if (loc && loc.module == "locationPicker") {
          //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          onChange && onChange({
            name: "".concat(loc.poiname, "(").concat(loc.poiaddress, ")"),
            address: loc.poiaddress,
            longitude: loc.latlng.lng,
            latitude: loc.latlng.lat
          });
        }
      };
    }

    if (messageCallback) {
      window.addEventListener("message", messageCallback, false);
      return function () {
        window.removeEventListener("message", messageCallback, false);
      };
    }
  }, []);
  var url = "";
  var center = "";

  if (_zTool.dataType.isObject(value)) {
    center = "".concat(value.longitude, ",").concat(value.latitude);
  }

  if (mapType === "amap") {
    url = "https://m.amap.com/picker/?center=".concat(center, "&key=3d5c1c6169c64554d6f9fcca35d4abff&total=20&keywords=\u8857\u9053");
  } else if (mapType === "qqmap") {
    url = "https://apis.map.qq.com/tools/locpicker?coord=".concat(center, "&search=1&type=1&key=63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK&referer=wx_map&total=20");
  }

  return _react.default.createElement("iframe", {
    frameBorder: "0",
    width: "100%",
    height: "100%",
    id: "addressIframe",
    src: url
  });
});

function getWebService() {
  var webserviceUrlDO = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    urlMethod: "post",
    url: "/form-service/webapi/geography/webService"
  };
  var query = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _httpAjax.default)(webserviceUrlDO.urlMethod, webserviceUrlDO.url, query);
} //获取坐标位置详细信息


var geocoder = {
  amap: function amap(location, webserviceUrlDO) {
    return getWebService(webserviceUrlDO, {
      serviceApi: "https://restapi.amap.com/v3/geocode/regeo",
      query: {
        key: "8c0945ac5a3ca41937724434563346c2",
        //高德的是"经度,纬度"
        location: "".concat(location.longitude, ",").concat(location.latitude)
      }
    });
  },
  qqmap: function qqmap(location, webserviceUrlDO) {
    return getWebService(webserviceUrlDO, {
      serviceApi: "https://apis.map.qq.com/ws/geocoder/v1",
      query: {
        key: "63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK",
        //腾讯的是"纬度,经度"
        location: "".concat(location.latitude, ",").concat(location.longitude)
      }
    });
  }
};

var MapChooseAddress = _react.default.memo(_react.default.forwardRef(function (props, ref) {
  var value = props.value,
      _onChange = props.onChange,
      placeholder = props.placeholder,
      showRightModal = props.showRightModal,
      showModalLoading = props.showModalLoading,
      showLayerRightModal = props.showLayerRightModal,
      showLayerModalLoading = props.showLayerModalLoading,
      mapType = props.mapType,
      disabled = props.disabled,
      webserviceUrlDO = props.webserviceUrlDO;
  var thisType = mapType || "qqmap";

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  (0, _react.useEffect)(function () {
    setInputValue(_zTool.dataType.isObject(value) ? value.name : "");
  }, [value]);
  var triggerModal = showLayerRightModal || showRightModal;
  var triggerModalLodaing = showLayerModalLoading || showModalLoading; // useEffect(() => {}, []);

  var openMap = function openMap() {
    triggerModal({
      show: true,
      modal: "addressModal",
      scroll: false,
      width: "500px",
      content: _react.default.createElement(LoadMapIframe, {
        mapType: thisType,
        value: value,
        onChange: function onChange(val) {
          triggerModalLodaing(true, "addressModal");
          geocoder[thisType](val, webserviceUrlDO).then(function (res) {
            var area = {};

            if (thisType === "amap") {
              var ac = res.data.regeocode.addressComponent;
              area = {
                adcode: ac.adcode,
                citycode: ac.citycode,
                country: ac.country,
                towncode: ac.towncode,
                province: ac.province === ac.city ? "" : ac.province,
                city: ac.city,
                district: ac.district,
                street: ac.streetNumber ? ac.streetNumber.street : ""
              };
            } else if (thisType === "qqmap") {
              var _ac = res.data.result.ad_info;
              area = {
                adcode: _ac.adcode,
                //区划编码
                citycode: _ac.city_code,
                country: _ac.nation,
                //国
                province: _ac.province === _ac.city ? "" : _ac.province,
                //省
                city: _ac.city,
                //城市
                district: _ac.district,
                //区
                street: _ac.street //街道

              };
            }

            _onChange && _onChange(_objectSpread({}, val, {}, area));
          }).catch(function (re) {
            _message2.default.error(re && re.msg ? re.msg : "获取区划信息失败，请重试");
          }).finally(function () {
            triggerModalLodaing(false, "addressModal");
            triggerModal({
              show: false,
              modal: "addressModal"
            });
          });
        }
      })
    });
  };

  return (0, _controls.getControl)("Input", {
    value: inputValue,
    addonAfter: _react.default.createElement("i", {
      className: "zero-icon zerod-address z-address-btn",
      onClick: !disabled ? openMap : undefined
    }),
    placeholder: placeholder,
    onChange: function onChange(e) {
      if (_zTool.dataType.isObject(value)) {
        value.name = e;
        setInputValue(value.name);
      }
    },
    onBlur: function onBlur(e) {
      if (_zTool.dataType.isObject(value)) {
        value.name = e;
        _onChange && _onChange(_objectSpread({}, value));
      }
    },
    onFocus: function onFocus() {
      if (!_zTool.dataType.isObject(value) && !disabled) {
        openMap();
      }
    }
  });
}));

exports.MapChooseAddress = MapChooseAddress;

var _default = _ZerodMainContext.default.setConsumer(_ZerodLayerContext.default.setConsumer(MapChooseAddress));

exports.default = _default;

/***/ }),

/***/ "VJmb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _controls = __webpack_require__("VoWU");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var InputGroup = _input.default.Group;
var regExpsList = [{
  label: "自定义",
  value: "custom",
  pattern: ""
}].concat(Object.keys(_controls.regExps).map(function (key) {
  return _objectSpread({}, _controls.regExps[key], {
    pattern: _controls.regExps[key].pattern.toString().replace(/(^\/|\/$)/g, ""),
    value: key,
    label: _controls.regExps[key].name
  });
}));

var _default = _react.default.memo(_react.default.forwardRef(function ZauxiliaryInput(props, ref) {
  var value = props.value,
      _onChange = props.onChange;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)("custom"),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selectValue = _useState4[0],
      setSelectValue = _useState4[1];

  function setVals(pattern) {
    var selected = regExpsList.find(function (item) {
      return item.pattern === pattern;
    });
    setSelectValue(selected ? selected.value : "custom");
    setInputValue(pattern);
  }

  (0, _react.useEffect)(function () {
    setVals(value);
  }, [value]);
  return _react.default.createElement(InputGroup, {
    compact: true
  }, (0, _controls.getControl)("Input", {
    value: inputValue,
    onChange: function onChange(e) {
      setVals(e);

      _onChange(e);
    },
    style: {
      width: "75%"
    }
  }), (0, _controls.getControl)("Select", {
    value: selectValue,
    onChange: function onChange(val) {
      var selected = regExpsList.find(function (item) {
        return item.value === val;
      });

      if (selected) {
        setInputValue(selected.pattern);

        _onChange(selected.pattern);
      }

      setSelectValue(val);
    },
    selectList: regExpsList,
    style: {
      width: "25%"
    }
  }));
}));

exports.default = _default;

/***/ }),

/***/ "WFjJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(316);

/***/ }),

/***/ "YRZ9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _controls = __webpack_require__("VoWU");

var _zTool = __webpack_require__("/sSO");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//Cascader 异步加载子节点组件
var CascaderLoader = _react.default.forwardRef(function (props, ref) {
  var changeOnSelect = props.changeOnSelect,
      selectList = props.selectList,
      selectionsUrl = props.selectionsUrl,
      selectionsQuery = props.selectionsQuery,
      selectListFieldNames = props.selectListFieldNames,
      optionsChange = props.optionsChange,
      others = (0, _objectWithoutProperties2.default)(props, ["changeOnSelect", "selectList", "selectionsUrl", "selectionsQuery", "selectListFieldNames", "optionsChange"]);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  (0, _react.useEffect)(function () {
    setOptions(selectList);
  }, [selectList]);
  (0, _react.useEffect)(function () {
    optionsChange && optionsChange(options);
  }, [options]);
  return (0, _controls.getControl)("Cascader", _objectSpread({}, others, {
    options: options,
    changeOnSelect: Boolean(changeOnSelect),
    showSearch: false,
    loadData: selectionsUrl && selectionsUrl.requireType === "part" ? function (selectedOptions) {
      var targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
      (0, _zTool.httpAjax)(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, _objectSpread({}, selectionsQuery, {
        id: targetOption.value
      })).then(function (re) {
        if (Array.isArray(re.data) && re.data.length) {
          targetOption.children = treeDataAddKey(re.data, undefined, selectListFieldNames, false);
        } else {
          targetOption.children = null;
          targetOption.isLeaf = true;
        }
      }).catch(function (re) {
        targetOption.children = null;
      }).finally(function () {
        targetOption.loading = false;
        setOptions((0, _toConsumableArray2.default)(options));
      });
    } : undefined
  }));
});

var _default = CascaderLoader;
exports.default = _default;

/***/ }),

/***/ "ZIHu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetGroupsCallback = useGetGroupsCallback;
exports.useLinkageCallback = useLinkageCallback;
exports.useGetOtherFormsCallback = useGetOtherFormsCallback;
exports.getEachFormMethod = getEachFormMethod;
exports.useDoSubmitCallback = useDoSubmitCallback;
exports.useSubmitBtn = useSubmitBtn;

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _zTool = __webpack_require__("/sSO");

var _linkageAction = _interopRequireWildcard(__webpack_require__("6A4n"));

var _common = __webpack_require__("q151");

/*
 * @Author: zgt
 * @Date: 2019-03-29 12:10:53
 * @LastEditors: zgt
 * @LastEditTime: 2019-09-29 19:55:45
 * @Description: file content
 */
//返回获取最新formGroups的callback
function useGetGroupsCallback(formGroups) {
  var groupsRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    groupsRef.current = formGroups;
  }, [formGroups]);
  return (0, _react.useCallback)(function () {
    return groupsRef.current;
  }, [groupsRef.current]);
} //返回执行linkageAction的callback


function useLinkageCallback(formData, getGroupsFn) {
  var doLinkage = (0, _react.useCallback)(function (selfItem) {
    if (formData) {
      var linkages = (0, _common.pareLinkages)(formData.linkages);
      (0, _linkageAction.autoCheckedBySelected)(linkages, getGroupsFn);
      (0, _linkageAction.default)(linkages, getGroupsFn, selfItem);
    }
  }, [getGroupsFn, formData]);
  return doLinkage;
} //返回获取formGroups中非隐藏的forms的callback


function useGetOtherFormsCallback(formGroups) {
  return (0, _react.useCallback)(function (currentForm) {
    var forms = Array.isArray(formGroups) ? formGroups.filter(function (g) {
      if (!g.groupRef.current) {
        return false;
      }

      var o = g.groupRef.current.getForm();
      return currentForm !== o.form && g.groupRef.current.getShowState();
    }) : [];
    return forms.map(function (g) {
      return g.groupRef.current.getForm().form;
    });
  }, [formGroups]);
}

function getEachFormMethod(formGroups, isAll) {
  var subForm = isAll ? [] : null;

  for (var index = 0; index < formGroups.length; index++) {
    var g = formGroups[index];

    if (g.groupRef.current.getShowState()) {
      if (isAll) {
        subForm.push(g.groupRef.current.getForm());
      } else {
        subForm = g.groupRef.current.getForm();
        break;
      }
    }
  }

  return subForm;
} //返回执行formGroups中任意一个非隐藏的onSubmit的callback


function useDoSubmitCallback(formGroups) {
  return (0, _react.useCallback)(function (e) {
    var subForm = getEachFormMethod(formGroups);

    if (subForm) {
      subForm.methods.onSubmit(e);
    }
  }, [formGroups]);
}

var buttonType = {
  1: "primary",
  2: "default",
  3: "dashed",
  4: "danger"
}; //返回渲染提交按钮的函数

function useSubmitBtn(formData, formGroups) {
  var doSubmit = useDoSubmitCallback(formGroups);
  return (0, _react.useCallback)(function () {
    return formData && _zTool.dataType.isArray(formData.buttonList) ? _react.default.createElement("div", {
      className: "z-padding-bottom-20 z-text-center"
    }, formData.buttonList.map(function (e) {
      return _react.default.createElement(_button.default, {
        key: e.value,
        type: buttonType[e.buttonType],
        onClick: doSubmit
      }, e.value);
    })) : null;
  }, [formData, doSubmit]);
}

/***/ }),

/***/ "cfDN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkageTypeActionName = void 0;
var linkageTypeActionName = {
  "1": "禁用",
  "2": "必填",
  "3": "非必填",
  "4": "联动",
  "5.1": "组隐藏",
  "5.2": "隐藏",
  "6": "年月日"
};
exports.linkageTypeActionName = linkageTypeActionName;

/***/ }),

/***/ "cx2H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dateFormats = exports.getOptionsRules = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _linkageAction = _interopRequireDefault(__webpack_require__("6A4n"));

var _controls = __webpack_require__("VoWU");

var _zTool = __webpack_require__("/sSO");

var _ZeroUpload = _interopRequireDefault(__webpack_require__("PjD8"));

var _moment = _interopRequireDefault(__webpack_require__("wd/R"));

var _ZmapChooseAddress = _interopRequireDefault(__webpack_require__("UOdo"));

var _TreeSelectLoader = _interopRequireDefault(__webpack_require__("psFK"));

var _CascaderLoader = _interopRequireDefault(__webpack_require__("YRZ9"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//处理默认的校验规则
var getOptionsRules = function getOptionsRules(e) {
  var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var reg = typeof e.regularExpression === "string" ? e.regularExpression.replace(/((^\/)|(\/$))/g, "") : "";
  return (0, _controls.getOptions)(_objectSpread({}, opt, {
    required: e.required,
    requiredMsg: e.errorMsg,
    initialValue: e.initialValue,
    rules: reg ? [].concat((0, _toConsumableArray2.default)(rules), [{
      pattern: reg,
      message: e.errorMsg
    }]) : rules
  }));
}; //日期/时间的格式


exports.getOptionsRules = getOptionsRules;
var dateFormats = {
  "YYYY-wo": "WeekPicker",
  YYYY: "YearPicker",
  "YYYY-MM": "MonthPicker",
  "YYYY-MM-DD": "DatePicker",
  "YYYY-MM-DD HH:mm": "DatePicker",
  "YYYY-MM-DD HH:mm:ss": "DatePicker",
  "YYYY-MM-DD h:mm a": "DatePicker",
  "YYYY-MM-DD h:mm:ss a": "DatePicker",
  "YYYY-MM-DD - YYYY-MM-DD": "RangePicker",
  "YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm": "RangePicker",
  "YYYY-MM-DD HH:mm:ss - YYYY-MM-DD HH:mm:ss": "RangePicker",
  "HH:mm": "TimePicker",
  "HH:mm:ss": "TimePicker",
  "h:mm a": "TimePicker",
  "h:mm:ss a": "TimePicker",
  "HH:mm - HH:mm": "TimeRange",
  "HH:mm:ss - HH:mm:ss": "TimeRange"
}; //

exports.dateFormats = dateFormats;

function docustomOnChange(e, opt) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (_zTool.dataType.isObject(e.customOnChange)) {
    var confun = e.customOnChange[e.fieldKey];
    _zTool.dataType.isFunction(confun) && confun.apply(void 0, [e, e.imperative].concat(rest));
  }

  typeof opt.onChange === "function" && opt.onChange.apply(opt, rest);
}

function treeDataAddKey() {
  var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var distMap = arguments.length > 1 ? arguments[1] : undefined;
  var srcMap = arguments.length > 2 ? arguments[2] : undefined;
  var isLeaf = arguments.length > 3 ? arguments[3] : undefined;
  var distKey = Object.assign({
    label: "label",
    value: "value",
    children: "children",
    key: "key"
  }, distMap || {});
  var srcKey = Object.assign({
    label: "label",
    value: "value",
    children: "children"
  }, srcMap || {});
  return Array.isArray(tree) ? tree.map(function (item) {
    var _ref;

    var ciilds = treeDataAddKey(item[srcKey.children], distKey, srcKey, isLeaf);
    return _ref = {}, (0, _defineProperty2.default)(_ref, distKey.label, item[srcKey.label]), (0, _defineProperty2.default)(_ref, distKey.value, item[srcKey.value]), (0, _defineProperty2.default)(_ref, distKey.children, ciilds.length ? ciilds : null), (0, _defineProperty2.default)(_ref, distKey.key, item[srcKey.value]), (0, _defineProperty2.default)(_ref, "isLeaf", isLeaf), _ref;
  }) : [];
}

var defaultFieldConfig = {
  selectionsType: 1,
  selectionsUrl: {},
  selectList: [],
  selectionsQuery: {},
  selectListFieldNames: {}
};

function selectControl(controlName) {
  return function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var linkages = arguments.length > 1 ? arguments[1] : undefined;
    var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
      return [];
    };
    var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var currentForm = arguments.length > 5 ? arguments[5] : undefined;
    var isAsync = opt.isAsync;
    delete opt.isAsync;
    var noAsync = opt.noAsync;
    delete opt.noAsync;
    var config = e.config || {};

    if (typeof e.config == "string") {
      try {
        config = JSON.parse(e.config);
      } catch (e) {}
    }

    config = _objectSpread({}, defaultFieldConfig, {}, config);
    var _config = config,
        selectionsType = _config.selectionsType,
        selectionsUrl = _config.selectionsUrl,
        selectList = _config.selectList,
        selectionsQuery = _config.selectionsQuery,
        selectListFieldNames = _config.selectListFieldNames,
        others = (0, _objectWithoutProperties2.default)(_config, ["selectionsType", "selectionsUrl", "selectList", "selectionsQuery", "selectListFieldNames"]);

    function getCurrentControl(selectList) {
      if (currentForm) {
        //保存已有的selectList
        currentForm.saveFieldOptions[e.fieldKey] = selectList;

        if (selectList.length) {
          selectList[0].selected = true;
        } // currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;

      }

      return (0, _controls.getControl)(controlName, _objectSpread({
        placeholder: e.placeholder,
        selectList: selectList
      }, others, {}, opt, {
        onChange: function onChange() {
          (0, _linkageAction.default)(linkages, getGroupsFn, e);

          for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            rest[_key2] = arguments[_key2];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    }

    var hasAsync = false;

    if (!isAsync && currentForm) {
      var currnetFormAllAsync = currentForm.getAsyncQueue();

      if (currnetFormAllAsync && currnetFormAllAsync.length) {
        hasAsync = true;
      }
    } //异步类型


    if (selectionsType == 2 && !hasAsync && !noAsync) {
      if (!isAsync && currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
        return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
      }

      return (0, _zTool.httpAjax)(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, _objectSpread({}, selectionsQuery, {}, requestQuery)).then(function (re) {
        return getCurrentControl(treeDataAddKey(re.data, undefined, selectListFieldNames, undefined));
      }).catch(function () {
        if (currentForm) {
          currentForm.saveFieldOptions[e.fieldKey] = [];
        }

        return getCurrentControl([]);
      });
    } //自定义选项类型


    return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, undefined));
  };
}

var controls = {
  //Input
  1: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return (0, _controls.getControl)("Input", _objectSpread({
        placeholder: e.placeholder
      }, config, {}, opt, {
        onBlur: function onBlur() {
          (0, _linkageAction.default)(linkages, getGroupsFn, e);
        },
        onChange: function onChange() {
          for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            rest[_key3] = arguments[_key3];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var regType = e.regType; //regType 来自Zform/controls的regExps

      return getOptionsRules(e, regType ? [_controls.regExps[regType]].concat((0, _toConsumableArray2.default)(rules)) : rules, {
        validateTrigger: "onBlur"
      });
    }
  },
  //TextArea
  2: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return (0, _controls.getControl)("TextArea", _objectSpread({
        placeholder: e.placeholder
      }, config, {}, opt, {
        onChange: function onChange() {
          for (var _len4 = arguments.length, rest = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            rest[_key4] = arguments[_key4];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var regType = e.regType; //regType 来自Zform/controls的regExps

      return getOptionsRules(e, regType ? [_controls.regExps[regType]].concat((0, _toConsumableArray2.default)(rules)) : rules, {
        validateTrigger: "onBlur"
      });
    }
  },
  //Select
  3: {
    getControl: selectControl("Select"),
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var field = _objectSpread({}, e);

      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);

      if (["multiple", "tags"].includes(config.mode)) {
        field.initialValue = typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
      }

      return getOptionsRules(field, rules);
    }
  },
  //InputNumber
  4: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return (0, _controls.getControl)("InputNumber", _objectSpread({
        placeholder: e.placeholder
      }, config, {}, opt, {
        onChange: function onChange() {
          for (var _len5 = arguments.length, rest = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            rest[_key5] = arguments[_key5];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: getOptionsRules
  },
  //日期/时间控件
  5: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      var showTime = false;
      config.format = config.format ? config.format : "";
      var format = config.format;

      var setShowTime = function setShowTime(format) {
        if (format.startsWith("YYYY") && (format.includes("HH") || format.includes("h"))) {
          showTime = {
            format: format.split(" ")[1],
            use12Hours: format.includes("h")
          };
        }
      };

      if (config.format.includes(" - ")) {
        format = config.format.split(" - ")[0]; // console.log(format)

        setShowTime(format);
      } else {
        setShowTime(config.format);
      } // let defaultOpt = {};


      var timeOpt = {
        showTime: showTime
      };

      if (dateFormats[config.format] === "TimePicker") {
        timeOpt = {
          use12Hours: config.format.includes("h")
        };
      }

      return (0, _controls.getControl)(dateFormats[config.format], _objectSpread({
        format: format,
        placeholder: e.placeholder
      }, opt, {}, timeOpt, {
        // ...defaultOpt,
        onChange: function onChange() {
          for (var _len6 = arguments.length, rest = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            rest[_key6] = arguments[_key6];
          }

          // console.log(rest);
          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(es) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var e = _objectSpread({}, es);

      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);
      config.format = config.format ? config.format : "";
      var isTimeRange = ["RangePicker", "TimeRange"].includes(dateFormats[config.format]);
      var format = config.format.includes(" - ") ? config.format.split(" - ")[0] : config.format;

      if (isTimeRange) {
        if (e.required) rules.push({
          validator: function validator(rule, value, callback) {
            if (Array.isArray(value) && value.length === 2) {
              callback();
            } else {
              callback("未填完整");
            }
          }
        });
        e.initialValue = typeof e.initialValue === "string" && e.initialValue.includes("-") ? e.initialValue.split("-") : e.initialValue;
        e.initialValue = Array.isArray(e.initialValue) && e.initialValue.length ? e.initialValue.map(function (time) {
          return (0, _moment.default)(time, format);
        }) : null;
      } else {
        if (typeof e.initialValue === "string") {
          try {
            e.initialValue = (0, _moment.default)(e.initialValue, format);
          } catch (e) {
            throw Error("initialValue格式有误");
          }
        }
      }

      return getOptionsRules(e, rules);
    }
  },
  //Cascader级联
  6: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var currentForm = arguments.length > 5 ? arguments[5] : undefined;
      var isAsync = opt.isAsync;
      delete opt.isAsync;
      var noAsync = opt.noAsync;
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);
      var _config2 = config,
          selectionsType = _config2.selectionsType,
          selectionsUrl = _config2.selectionsUrl,
          selectList = _config2.selectList,
          selectionsQuery = _config2.selectionsQuery,
          selectListFieldNames = _config2.selectListFieldNames,
          changeOnSelect = _config2.changeOnSelect,
          others = (0, _objectWithoutProperties2.default)(_config2, ["selectionsType", "selectionsUrl", "selectList", "selectionsQuery", "selectListFieldNames", "changeOnSelect"]);

      function getCurrentControl(selectList) {
        var newProps = _objectSpread({}, others, {
          changeOnSelect: changeOnSelect
        }, opt, {
          selectionsUrl: selectionsUrl,
          selectionsQuery: selectionsQuery,
          placeholder: e.placeholder,
          selectList: selectList,
          optionsChange: function optionsChange(options) {
            if (currentForm) {
              //保存已有的selectList
              currentForm.saveFieldOptions[e.fieldKey] = options; // currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;
            }
          },
          selectListFieldNames: selectListFieldNames,
          onChange: function onChange() {
            (0, _linkageAction.default)(linkages, getGroupsFn, e);

            for (var _len7 = arguments.length, rest = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              rest[_key7] = arguments[_key7];
            }

            docustomOnChange.apply(void 0, [e, opt].concat(rest));
          }
        });

        return _react.default.createElement(_CascaderLoader.default, newProps);
      }

      var hasAsync = false;

      if (!isAsync && currentForm) {
        var currnetFormAllAsync = currentForm.getAsyncQueue();

        if (currnetFormAllAsync && currnetFormAllAsync.length) {
          hasAsync = true;
        }
      } //异步类型


      if (selectionsType == 2 && !hasAsync && !noAsync) {
        if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
          return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
        }

        return (0, _zTool.httpAjax)(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, _objectSpread({}, selectionsQuery, {}, requestQuery)).then(function (re) {
          return getCurrentControl(treeDataAddKey(re.data, undefined, selectListFieldNames, selectionsUrl.requireType !== "part" // false  即为分部加载
          ));
        }).catch(function () {
          if (currentForm) {
            currentForm.saveFieldOptions[e.fieldKey] = [];
          }

          return getCurrentControl([]);
        });
      } //自定义选项类型


      return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, true));
    },
    getOptions: getOptionsRules
  },
  //TreeSelect树选择
  7: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var currentForm = arguments.length > 5 ? arguments[5] : undefined;
      var isAsync = opt.isAsync;
      delete opt.isAsync;
      var noAsync = opt.noAsync;
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);
      var _config3 = config,
          selectionsType = _config3.selectionsType,
          selectionsUrl = _config3.selectionsUrl,
          selectList = _config3.selectList,
          selectionsQuery = _config3.selectionsQuery,
          selectListFieldNames = _config3.selectListFieldNames,
          others = (0, _objectWithoutProperties2.default)(_config3, ["selectionsType", "selectionsUrl", "selectList", "selectionsQuery", "selectListFieldNames"]);

      function getCurrentControl(selectList) {
        var newProps = _objectSpread({}, others, {}, opt, {
          selectionsUrl: selectionsUrl,
          selectionsQuery: selectionsQuery,
          placeholder: e.placeholder,
          selectList: selectList,
          optionsChange: function optionsChange(options) {
            if (currentForm) {
              //保存已有的selectList
              currentForm.saveFieldOptions[e.fieldKey] = options;
              currentForm.saveOptionsMapKey[e.fieldKey] = {
                label: "title",
                value: "value",
                children: "children"
              };
            }
          },
          selectListFieldNames: selectListFieldNames,
          onChange: function onChange() {
            (0, _linkageAction.default)(linkages, getGroupsFn, e);

            for (var _len8 = arguments.length, rest = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              rest[_key8] = arguments[_key8];
            }

            docustomOnChange.apply(void 0, [e, opt].concat(rest));
          }
        });

        return _react.default.createElement(_TreeSelectLoader.default, newProps);
      }

      var hasAsync = false;

      if (!isAsync && currentForm) {
        var currnetFormAllAsync = currentForm.getAsyncQueue();

        if (currnetFormAllAsync && currnetFormAllAsync.length) {
          hasAsync = true;
        }
      } //异步类型


      if (selectionsType == 2 && !hasAsync && !noAsync) {
        if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
          return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
        }

        return (0, _zTool.httpAjax)(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, _objectSpread({}, selectionsQuery, {}, requestQuery)).then(function (re) {
          return getCurrentControl(treeDataAddKey(re.data, {
            label: "title",
            value: "value",
            children: "children",
            key: "key"
          }, selectListFieldNames, selectionsUrl.requireType !== "part" // false  即为分部加载
          ));
        }).catch(function () {
          if (currentForm) {
            currentForm.saveFieldOptions[e.fieldKey] = [];
          }

          return getCurrentControl([]);
        });
      } //自定义选项类型


      return getCurrentControl(treeDataAddKey(selectList, {
        label: "title",
        value: "value",
        children: "children",
        key: "key"
      }, selectListFieldNames));
    },
    getOptions: getOptionsRules
  },
  //Checkbox.Group
  8: {
    getControl: selectControl("Checkbox.Group"),
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var field = _objectSpread({}, e);

      field.initialValue = typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
      return getOptionsRules(field, rules);
    }
  },
  //Radio.Group
  9: {
    getControl: selectControl("Radio.Group"),
    getOptions: getOptionsRules
  },
  //Switch
  10: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return (0, _controls.getControl)("Switch", _objectSpread({
        placeholder: e.placeholder
      }, config, {}, opt, {
        onChange: function onChange() {
          for (var _len9 = arguments.length, rest = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            rest[_key9] = arguments[_key9];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
          (0, _linkageAction.default)(linkages, getGroupsFn, e);
        }
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      e.initialValue = _zTool.dataType.isString(e.initialValue) ? Number(e.initialValue) : e.initialValue;
      return getOptionsRules(e, rules, {
        valuePropName: "checked"
      });
    }
  },
  //Upload
  11: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);
      return _react.default.createElement(_ZeroUpload.default, {
        config: config,
        field: e
      });
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);
      var newRules = [{
        validator: function validator(rule, value, callback) {
          if (Array.isArray(value)) {
            if (!value.length) {
              return callback("未上传任何文件");
            }

            if (config.minUploadLength && config.minUploadLength > value.length) {
              return callback("\u6700\u5C11\u4E0A\u4F20".concat(config.minUploadLength, "\u4E2A"));
            }
          }

          return callback();
        }
      }];
      return getOptionsRules(e, newRules.concat(rules));
    }
  },
  //ColorPicker
  12: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var requestQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);
      return (0, _controls.getControl)("ColorPicker", _objectSpread({}, config, {}, opt, {
        onChange: function onChange() {
          for (var _len10 = arguments.length, rest = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            rest[_key10] = arguments[_key10];
          }

          e.currentSaturability = rest[1] ? rest[1].hsv.s : 0; // console.log("color-change", rest[1]);

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      config = _objectSpread({}, defaultFieldConfig, {}, config);

      if (config.minSaturability > 0) {
        rules.push({
          validator: function validator(rule, value, callback) {
            var currentSaturability = e.currentSaturability;

            if (currentSaturability && config.minSaturability > currentSaturability) {
              return callback(e.errorMsg ? e.errorMsg : "\u9971\u548C\u5EA6\u4E0D\u80FD\u5C0F\u4E8E".concat(config.minSaturability * 100, "%"));
            }

            return callback();
          }
        });
      }

      return getOptionsRules(e, rules);
    }
  },
  //地图选点
  13: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return _react.default.createElement(_ZmapChooseAddress.default, _objectSpread({
        placeholder: e.placeholder
      }, config, {}, opt, {
        onChange: function onChange() {
          (0, _linkageAction.default)(linkages, getGroupsFn, e);

          for (var _len11 = arguments.length, rest = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            rest[_key11] = arguments[_key11];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        }
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      rules.push({
        validator: function validator(rule, value, callback) {
          if (_zTool.dataType.isObject(value)) {
            if (!/^.{10,}/.test(value.name)) {
              return callback("地址名称不能少于10个字符");
            }
          }

          return callback();
        }
      });
      return getOptionsRules(e, rules);
    }
  },
  //自定义占位
  14: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (_zTool.dataType.isObject(e.customControlRender)) {
        var confun = e.customControlRender[e.fieldKey];

        if (_zTool.dataType.isFunction(confun)) {
          return confun({
            field: e,
            linkages: linkages,
            getGroupsFn: getGroupsFn,
            linkageAction: _linkageAction.default
          });
        }
      }

      return _react.default.createElement("div", {
        className: "z-form-control-placeholder"
      }, "\u81EA\u5B9A\u4E49\u533A\u57DF");
    },
    getOptions: getOptionsRules
  },
  //文书配置
  20: {
    getControl: function getControl() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var linkages = arguments.length > 1 ? arguments[1] : undefined;
      var getGroupsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };
      var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      delete opt.noAsync;
      var config = e.config || {};

      if (typeof e.config == "string") {
        try {
          config = JSON.parse(e.config);
        } catch (e) {}
      }

      return (0, _controls.getControl)("Input", _objectSpread({
        placeholder: e.placeholder
      }, config, {}, opt, {
        onBlur: function onBlur() {
          (0, _linkageAction.default)(linkages, getGroupsFn, e);
        },
        onChange: function onChange() {
          for (var _len12 = arguments.length, rest = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            rest[_key12] = arguments[_key12];
          }

          docustomOnChange.apply(void 0, [e, opt].concat(rest));
        },
        disabled: true
      }));
    },
    getOptions: function getOptions(e) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var regType = e.regType; //regType 来自Zform/controls的regExps

      return getOptionsRules(e, regType ? [_controls.regExps[regType]].concat((0, _toConsumableArray2.default)(rules)) : rules);
    }
  }
};
var _default = controls;
exports.default = _default;

/***/ }),

/***/ "ePEr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkRemark1 = linkRemark1;
exports.linkRemark2 = linkRemark2;
exports.linkRemark3 = linkRemark3;
exports.linkRemark4 = linkRemark4;

var _tag = _interopRequireDefault(__webpack_require__("mr32"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _liveCanstant = __webpack_require__("cfDN");

function srcControlRemark(srcControl, srcValues) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tag.default, {
    color: "volcano"
  }, srcControl ? srcControl.label : "未选控件"), _react.default.createElement("span", null, "\u7684\u503C\uFF1A"), srcValues.map(function (item) {
    return _react.default.createElement(_tag.default, {
      color: "#2db7f5",
      key: item.label
    }, item.label);
  }));
}

function linkRemark1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      srcControl = _ref.srcControl,
      srcValues = _ref.srcValues,
      distControls = _ref.distControls,
      linkageType = _ref.linkageType;

  return _react.default.createElement("span", null, srcControlRemark(srcControl, srcValues), _react.default.createElement("span", {
    className: "z-margin-right-5"
  }, "\u8054\u52A8"), distControls.map(function (item) {
    return _react.default.createElement(_tag.default, {
      color: "magenta",
      key: item.label
    }, item.label);
  }), _react.default.createElement("span", null, _liveCanstant.linkageTypeActionName[linkageType]));
}

function linkRemark2() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      srcControl = _ref2.srcControl,
      srcValues = _ref2.srcValues,
      distControl = _ref2.distControl,
      distValues = _ref2.distValues;

  return _react.default.createElement("span", null, srcControlRemark(srcControl, srcValues), _react.default.createElement("span", {
    className: "z-margin-right-5"
  }, "\u8054\u52A8"), _react.default.createElement(_tag.default, {
    color: "volcano"
  }, distControl ? distControl.label : "未选控件"), _react.default.createElement("span", null, "\u53EF\u9009\u9879\uFF1A"), distValues.map(function (item) {
    return _react.default.createElement(_tag.default, {
      color: "#2db7f5",
      key: item.label
    }, item.label);
  }));
}

function linkRemark3() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      srcControls = _ref3.srcControls,
      distControls = _ref3.distControls;

  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      remmak1 = _ref4.remmak1,
      remmak2 = _ref4.remmak2;

  return _react.default.createElement("span", null, _react.default.createElement("span", null, remmak1), srcControls.map(function (item) {
    return _react.default.createElement(_tag.default, {
      color: "volcano",
      key: item.label
    }, item.label);
  }), _react.default.createElement("span", {
    className: "z-margin-right-5"
  }, remmak2), distControls.map(function (item) {
    return _react.default.createElement(_tag.default, {
      color: "volcano",
      key: item.label
    }, item.label);
  }));
}

function linkRemark4() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      srcControls = _ref5.srcControls,
      distControls = _ref5.distControls;

  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      remmak1 = _ref6.remmak1,
      remmak2 = _ref6.remmak2;

  return _react.default.createElement("span", null, srcControls.map(function (item) {
    return _react.default.createElement(_tag.default, {
      color: "volcano",
      key: item.label
    }, item.label);
  }), _react.default.createElement("span", {
    className: "z-margin-right-5"
  }, remmak1), distControls.map(function (item) {
    return _react.default.createElement(_tag.default, {
      color: "volcano",
      key: item.label
    }, item.label);
  }), _react.default.createElement("span", null, remmak2));
}

/***/ }),

/***/ "eV+t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _row = _interopRequireDefault(__webpack_require__("BMrR"));

var _tooltip = _interopRequireDefault(__webpack_require__("3S7+"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _tag = _interopRequireDefault(__webpack_require__("mr32"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _liveCanstant = __webpack_require__("cfDN");

function ValueLinkConfigured(props, ref) {
  var linkageType = props.linkageType,
      onRemove = props.onRemove;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      configured = _useState2[0],
      setConfigured = _useState2[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getCurrentConfigured: function getCurrentConfigured() {
        return configured;
      },
      setConfigured: setConfigured
    };
  });
  return _react.default.createElement(_react.default.Fragment, null, configured.map(function (c, index) {
    return _react.default.createElement(_row.default, {
      gutter: 16,
      key: c.srcValue,
      type: "flex",
      className: "z-link-configured"
    }, _react.default.createElement(_col.default, {
      span: 6
    }, _react.default.createElement("div", {
      className: "z-flex-space-between"
    }, _react.default.createElement(_tag.default, {
      color: "#2db7f5"
    }, c.valueLabel), _react.default.createElement("span", null, _liveCanstant.linkageTypeActionName[linkageType]))), _react.default.createElement(_col.default, {
      span: 14
    }, c.fields.map(function (item) {
      if (Array.isArray(item.options)) {
        return _react.default.createElement("div", {
          key: item.fieldKey
        }, _react.default.createElement(_tag.default, {
          color: "magenta"
        }, item.label), _react.default.createElement("span", null, "\u53EF\u9009\u7684\u9009\u9879\uFF1A"), item.options.map(function (opt) {
          return _react.default.createElement(_tag.default, {
            key: opt.value,
            color: "#2db7f5"
          }, opt.label);
        }));
      }

      return _react.default.createElement(_tag.default, {
        color: "magenta",
        key: item.fieldKey ? item.fieldKey : item.groupName
      }, item.fieldKey ? item.label : item.groupName);
    })), _react.default.createElement(_col.default, {
      span: 4
    }, _react.default.createElement(_tooltip.default, {
      placement: "top",
      title: "\u79FB\u9664"
    }, _react.default.createElement("div", {
      className: "z-live-tool-item delete all-border small",
      onClick: function onClick() {
        typeof onRemove === "function" && onRemove(c, index);
      }
    }, _react.default.createElement(_icon.default, {
      type: "delete"
    })))));
  }), !configured.length ? _react.default.createElement("p", {
    className: "z-text-center"
  }, "\u65E0\u914D\u7F6E") : null);
}

var _default = _react.default.memo(_react.default.forwardRef(ValueLinkConfigured));

exports.default = _default;

/***/ }),

/***/ "eb80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _ZliveForm2 = _interopRequireDefault(__webpack_require__("23cp"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf4 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _loadHOC = _interopRequireDefault(__webpack_require__("ebhq"));

var _doc = _interopRequireDefault(__webpack_require__("HPR2"));

var _formData = _interopRequireDefault(__webpack_require__("Lfie"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AmdDocHOC = _loadHOC.default.AmdDocHOC,
    AshowDemoHOC = _loadHOC.default.AshowDemoHOC;

var _default = AmdDocHOC(_doc.default, {
  demo0: function demo0() {
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

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf4.default)(Myjavascript)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.formData = _objectSpread({}, _formData.default);

        _this.onSave = function (newFormData) {
          console.log(newFormData);
        };

        return _this;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_ZliveForm2.default, {
            formData: this.formData,
            onSave: this.onSave
          });
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    var Dom = AshowDemoHOC(_react.default.createElement(Myjavascript, null), true);
    return _react.default.createElement(Dom, null);
  },
  demo1: function demo1() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent2);

      function Myjavascript() {
        var _getPrototypeOf3;

        var _this2;

        (0, _classCallCheck2.default)(this, Myjavascript);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf4.default)(Myjavascript)).call.apply(_getPrototypeOf3, [this].concat(args)));
        _this2.state = {
          formValue: {
            busId: "ee351e47c614415385fd7eb09a2c6358",
            contactName: "李三66",
            problemNo: "201908190002",
            istName: "【201908190002】问题登记",
            registerProblemDescription: "待定",
            caseTypeLabel: "殡葬管理",
            initiatorName: "admin",
            remark: "纷纷",
            initiatorId: "admin",
            registerPictures: [{
              id: 5377,
              originalFileName: "234646s74vk3ttzteclwkc",
              fileName: "2019/08/19/16/aa0a3722857c4172993e90838f0a6246",
              fileSuffix: "jpg",
              filePath: "http://172.16.8.35:19004/2019/08/19/16/aa0a3722857c4172993e90838f0a6246.jpg",
              fileSize: 288618
            }],
            caseReasonCode: "A0114003",
            problemOriginCodeLabel: "新闻媒体曝光",
            caseType: "A0114",
            problemAddress: {
              name: "南山区政府(广东省深圳市南山区桃园路2号南山区委大楼)",
              address: "广东省深圳市南山区桃园路2号南山区委大楼",
              longitude: 113.93041,
              latitude: 22.53332,
              adcode: "440305",
              citycode: "156440300",
              country: "中国",
              province: "广东省",
              city: "深圳市",
              district: "南山区"
            },
            problemOriginCode: "C0203",
            caseReasonCodeLabel: "未经批准从事殡葬服务业务",
            contactPhone: "1342166188",
            busStatus: "101",
            dispatchTag: "2",
            dispatchTagLabel: "巡查员",
            receiveUserAccount: "FSADFSD",
            receiveUserAccountLabel: "FDASFS-未分组",
            busStatusName: "待核实"
          }
        };
        _this2.formData = _objectSpread({}, _formData.default);

        _this2.onSubmit = function (values) {
          console.log(values);
          return Promise.resolve();
        };

        return _this2;
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "componentDidMount",
        value: function componentDidMount() {// setTimeout(() => {
          // 	this.setState({
          // 		formValue:{
          // 			dogName:"8888"
          // 		}
          // 	})
          // }, 2000);
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            className: "z-padding-15"
          }, _react.default.createElement(_ZliveForm2.default.FormViewer, {
            formValues: this.state.formValue,
            formData: this.formData,
            onSubmit: this.onSubmit,
            momentFormat: true,
            submitBtnRender: function submitBtnRender(submit) {
              return _react.default.createElement("div", {
                className: "z-text-center"
              }, _react.default.createElement(_button.default, {
                type: "primary",
                onClick: submit
              }, "\u63D0\u4EA4\u6570\u636E"));
            }
          }));
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    var Dom = AshowDemoHOC(_react.default.createElement(Myjavascript, null), true);
    return _react.default.createElement(Dom, null);
  },
  demo2: function demo2() {
    var Myjavascript =
    /*#__PURE__*/
    function (_React$PureComponent3) {
      (0, _inherits2.default)(Myjavascript, _React$PureComponent3);

      function Myjavascript() {
        (0, _classCallCheck2.default)(this, Myjavascript);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf4.default)(Myjavascript).apply(this, arguments));
      }

      (0, _createClass2.default)(Myjavascript, [{
        key: "render",
        value: function render() {
          return _react.default.createElement("span", null);
        }
      }]);
      return Myjavascript;
    }(_react.default.PureComponent);

    return _react.default.createElement(Myjavascript, null);
  }
});

exports.default = _default;

/***/ }),

/***/ "ecf3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tag = _interopRequireDefault(__webpack_require__("mr32"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _modal = _interopRequireDefault(__webpack_require__("kLXV"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _ZerodMainContext = _interopRequireDefault(__webpack_require__("MaNN"));

var _Ztabs = _interopRequireDefault(__webpack_require__("VQbk"));

var _Zcascader = __webpack_require__("k9l9");

var _ValueLinkControl = _interopRequireDefault(__webpack_require__("LfBj"));

var _ValueLinkConfigured = _interopRequireDefault(__webpack_require__("eV+t"));

var _IDLinkagesConfigured = _interopRequireDefault(__webpack_require__("tHbD"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var linkageTypes = [{
  tab: "单选/多选控制控件禁用",
  key: "1",
  active: true
}, {
  tab: "单选/多选控制控件必填",
  key: "2"
}, {
  tab: "单选/多选控制控件非必填",
  key: "3"
}, {
  tab: "单选/多选控制选项",
  key: "4"
}, {
  tab: "单选/多选控制组隐藏",
  key: "5.1"
}, {
  tab: "单选/多选控制控件隐藏",
  key: "5.2"
}, {
  tab: "身份证取出生年月日",
  key: "6"
}, {
  tab: "单选联动其他控件异步选项",
  key: "7"
}, {
  tab: "地图选点取行政区划",
  key: "8"
}];
var itemKeys = {
  name: "tab",
  id: "key"
}; // const propTypes = {};

var defaultProps = {
  //默认的linkages
  defaultValue: []
};

function LinkageConfig(props) {
  var getInsertLocation = props.getInsertLocation,
      showRightModal = props.showRightModal,
      newFormData = props.newFormData,
      defaultValue = props.defaultValue,
      onChange = props.onChange;
  var wrapperRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)([{
    tab: "联动列表",
    key: "1",
    content: null
  }, {
    tab: "联动配置",
    key: "2",
    content: null
  }]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tabPanes = _useState2[0],
      setTabPanes = _useState2[1];

  var _useState3 = (0, _react.useState)("1"),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      tabKey = _useState4[0],
      setTabKey = _useState4[1];

  var _useState5 = (0, _react.useState)(linkageTypes),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      linkageTypesState = _useState6[0],
      setLinkageTypes = _useState6[1];

  var curentLinkTypeRef = (0, _react.useRef)(linkageTypesState.find(function (item) {
    return item.active;
  }));
  var objRef = (0, _react.useRef)(null);
  var defaultLinkagesRef = (0, _react.useRef)(defaultValue);

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      insetLocaltion = _useState8[0],
      setInsetLocaltion = _useState8[1];

  (0, _react.useEffect)(function () {
    // 首先得获取wrapperRef.current元素所在得位置
    var insetLocaltion = getInsertLocation(wrapperRef.current);
    var parEl = wrapperRef.current;

    while (parEl && !parEl.dataset.zgt_modal) {
      parEl = parEl.parentElement;
    }

    if (parEl) {
      objRef.current = parEl.querySelector("#ZpageHeaderBox");
    }

    setInsetLocaltion(insetLocaltion);
  }, []);
  var onItemClick = (0, _react.useCallback)(function (e, item, i, props) {
    setLinkageTypes(linkageTypesState.map(function (l) {
      var active = l.key === item.data.key;

      if (active) {
        curentLinkTypeRef.current = item.data;
      }

      return _objectSpread({}, l, {
        active: active
      });
    }));
  }, []); //当前选择的控件

  var _useState9 = (0, _react.useState)({}),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      currentControl = _useState10[0],
      setCurrentControl = _useState10[1]; //取ValueLinkConfigured提供的属性


  var configuredRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (Array.isArray(defaultLinkagesRef.current) && ["6", "7", "8"].includes(curentLinkTypeRef.current.key)) {
      var IDconfigured = defaultLinkagesRef.current.filter(function (age) {
        return age.linkageType === curentLinkTypeRef.current.key;
      });
      configuredRef.current && configuredRef.current.setConfigured(IDconfigured);
    } else {
      configuredRef.current && configuredRef.current.setConfigured([]);
    }
  }, [curentLinkTypeRef.current.key]);

  var onRemove = function onRemove(currentConf, currentIndex) {
    _modal.default.confirm({
      title: "是否确认移除这条配置?",
      okText: "确定",
      cancelText: "取消",
      onOk: function onOk() {
        var currentConfigured = configuredRef.current.getCurrentConfigured();
        var currentLinkageType = curentLinkTypeRef.current.key;
        var ageIndex = -1;

        var getageIndex = function getageIndex(currentKey) {
          return defaultLinkagesRef.current.findIndex(function (item) {
            return item.linkageType === currentLinkageType && item.src.fieldKey === currentKey;
          });
        };

        if (["6", "7", "8"].includes(currentLinkageType)) {
          ageIndex = getageIndex(currentConf.src.fieldKey);
        } else {
          ageIndex = getageIndex(currentConf.srcKey);
        }

        if (ageIndex > -1) {
          currentConfigured.splice(currentIndex, 1);
          var newConfigs = (0, _toConsumableArray2.default)(currentConfigured);
          configuredRef.current.setConfigured(newConfigs);

          if (["6", "7", "8"].includes(currentLinkageType)) {
            defaultLinkagesRef.current.splice(ageIndex, 1);
          } else {
            defaultLinkagesRef.current[ageIndex].dist = newConfigs;
          }

          defaultLinkagesRef.current = (0, _toConsumableArray2.default)(defaultLinkagesRef.current);
          onChange && onChange(defaultLinkagesRef.current);
        }
      }
    });
  };

  return _react.default.createElement("section", {
    ref: wrapperRef,
    className: "z-linkage-config"
  }, objRef.current ? _reactDom.default.createPortal(_react.default.createElement("div", {
    className: "z-linkage-tab"
  }, _react.default.createElement(_Ztabs.default, {
    tabPanes: tabPanes,
    activeKey: tabKey,
    onChange: function onChange(key) {
      setTabKey(key);
    }
  })), objRef.current) : null, tabKey === "1" ? _react.default.createElement("section", {
    className: "z-panel"
  }, _react.default.createElement("div", {
    className: "z-panel-body z-text-center"
  }, "\u672A\u5B8C\u5F85\u7EED")) : null, tabKey === "2" ? _react.default.createElement("section", null, _react.default.createElement("div", {
    className: "z-padding-15"
  }, _react.default.createElement("div", {
    className: "z-panel"
  }, _react.default.createElement("div", {
    className: "z-panel-body z-padding-bottom-0-important"
  }, _react.default.createElement(_Zcascader.ZcascaderItemGroup, {
    label: "\u8054\u52A8\u7C7B\u578B",
    itemData: linkageTypesState,
    itemKeys: itemKeys,
    onItemClick: onItemClick,
    autoExpanded: true
  }), _react.default.createElement(_ValueLinkControl.default, {
    newFormData: newFormData,
    linkageType: curentLinkTypeRef.current.key,
    onSrcSelected: function onSrcSelected(control) {
      var existLinkage = null;

      if (Array.isArray(defaultLinkagesRef.current)) {
        existLinkage = defaultLinkagesRef.current.find(function (age) {
          return age.linkageType === curentLinkTypeRef.current.key && age.src.fieldKey === control.fieldKey;
        });
      }

      configuredRef.current.setConfigured(existLinkage ? (0, _toConsumableArray2.default)(existLinkage.dist) : []);
      setCurrentControl(control);
    },
    onOk: function onOk(links, other) {
      // if(curentLinkTypeRef.current.key === "6"){
      // }
      //转成linkage
      var linkage = {
        linkageType: curentLinkTypeRef.current.key,
        name: curentLinkTypeRef.current.tab,
        src: null,
        dist: null
      };

      if (links.srcControl) {
        linkage.src = {
          fieldKey: links.srcControl.fieldKey,
          label: links.srcControl.label,
          fieldType: links.srcControl.fieldType
        };
      }

      var linkages = [];

      if (["1", "2", "3", "5.2"].includes(curentLinkTypeRef.current.key)) {
        linkage.dist = links.srcValues.map(function (val) {
          var fields = links.distControls.map(function (d) {
            return {
              fieldKey: d.fieldKey,
              label: d.label,
              fieldType: d.fieldType
            };
          });
          return {
            srcKey: linkage.src.fieldKey,
            srcValue: val.value,
            valueLabel: val.label,
            fields: fields
          };
        });
      } else if (["4"].includes(curentLinkTypeRef.current.key)) {
        linkage.dist = links.srcValues.map(function (val) {
          var fields = [{
            fieldKey: links.distControl.fieldKey,
            label: links.distControl.label,
            fieldType: links.distControl.fieldType,
            options: links.distValues.map(function (dv) {
              return {
                label: dv.label,
                value: dv.value
              };
            })
          }];
          return {
            srcKey: linkage.src.fieldKey,
            srcValue: val.value,
            valueLabel: val.label,
            fields: fields
          };
        });
      } else if (["5.1"].includes(curentLinkTypeRef.current.key)) {
        linkage.dist = links.srcValues.map(function (val) {
          var fields = links.distControls.map(function (d) {
            return {
              groupId: d.id,
              groupName: d.label
            };
          });
          return {
            srcKey: linkage.src.fieldKey,
            srcValue: val.value,
            valueLabel: val.label,
            fields: fields
          };
        });
      } else if (["6", "7", "8"].includes(curentLinkTypeRef.current.key)) {
        var asyncParamName = curentLinkTypeRef.current.key === "7" ? other.asyncParamName : undefined;
        var regionName = curentLinkTypeRef.current.key === "8" ? other.regionName : undefined;
        linkages = links.srcControls.map(function (l) {
          return _objectSpread({}, linkage, {
            src: {
              fieldKey: l.fieldKey,
              label: l.label,
              fieldType: l.fieldType
            },
            asyncParamName: asyncParamName,
            regionName: regionName,
            dist: [{
              fields: links.distControls.map(function (d) {
                return {
                  fieldKey: d.fieldKey,
                  fieldType: d.fieldType,
                  label: d.label,
                  asyncParamName: asyncParamName,
                  regionName: regionName
                };
              })
            }]
          });
        });
      } //查找配置的选项中是否存在，存在就替换，不存在就追加


      if (Array.isArray(linkage.dist) && linkage.dist.length) {
        var currentConfigured = configuredRef.current.getCurrentConfigured();
        linkage.dist.forEach(function (di) {
          var existIndex = currentConfigured.findIndex(function (con) {
            return con.srcValue === di.srcValue;
          });

          if (existIndex > -1) {
            var newFields = [];
            currentConfigured[existIndex].fields.forEach(function (f) {
              var hasFieldindex = di.fields.findIndex(function (df) {
                return df.fieldKey && df.fieldKey === f.fieldKey || df.groupName && df.groupName === f.groupName;
              });

              if (hasFieldindex > -1) {
                newFields.push(di.fields[hasFieldindex]);
                di.fields.splice(hasFieldindex, 1);
              } else {
                newFields.push(f);
              }
            });
            di.fields = [].concat(newFields, (0, _toConsumableArray2.default)(di.fields));
            currentConfigured.splice(existIndex, 1, di);
          } else {
            currentConfigured.push(di);
          }
        });
        linkage.dist = (0, _toConsumableArray2.default)(currentConfigured);
        configuredRef.current.setConfigured((0, _toConsumableArray2.default)(currentConfigured)); //新的linkages

        var existLinkageIndex = -1;

        if (Array.isArray(defaultLinkagesRef.current)) {
          existLinkageIndex = defaultLinkagesRef.current.findIndex(function (age) {
            return age.linkageType === linkage.linkageType && age.src.fieldKey === linkage.src.fieldKey;
          });
        }

        if (existLinkageIndex > -1) {
          defaultLinkagesRef.current.splice(existLinkageIndex, 1, linkage);
        } else {
          defaultLinkagesRef.current.push(linkage);
        }
      }

      if (Array.isArray(linkages) && linkages.length && Array.isArray(defaultLinkagesRef.current)) {
        linkages.forEach(function (linkage) {
          var hasAgeIndex = defaultLinkagesRef.current.findIndex(function (age) {
            return age.linkageType === linkage.linkageType && age.src.fieldKey === linkage.src.fieldKey;
          });

          if (hasAgeIndex > -1) {
            defaultLinkagesRef.current.splice(hasAgeIndex, 1, linkage);
          } else {
            defaultLinkagesRef.current.push(linkage);
          }
        });
        var IDconfigured = defaultLinkagesRef.current.filter(function (age) {
          return age.linkageType === curentLinkTypeRef.current.key;
        });
        configuredRef.current.setConfigured(IDconfigured);
      }

      defaultLinkagesRef.current = (0, _toConsumableArray2.default)(defaultLinkagesRef.current);
      onChange && onChange(defaultLinkagesRef.current);
    },
    onBack: function onBack() {
      showRightModal({
        show: false,
        modal: insetLocaltion
      });
    }
  })), _react.default.createElement("div", {
    className: "z-panel-heading"
  }, _react.default.createElement("span", null, currentControl.label ? _react.default.createElement(_tag.default, {
    color: "volcano"
  }, currentControl.label) : null, "\u5DF2\u914D\u7F6E\u7684\u9009\u9879")), _react.default.createElement("div", {
    className: "z-panel-body"
  }, ["6", "7", "8"].includes(curentLinkTypeRef.current.key) ? _react.default.createElement(_IDLinkagesConfigured.default, {
    ref: configuredRef,
    onRemove: onRemove
  }) : _react.default.createElement(_ValueLinkConfigured.default, {
    linkageType: curentLinkTypeRef.current.key,
    ref: configuredRef,
    onRemove: onRemove
  }))))) : null);
}

LinkageConfig.defaultProps = defaultProps;

var _default = _react.default.memo(_ZerodMainContext.default.setConsumer(LinkageConfig));

exports.default = _default;

/***/ }),

/***/ "fRnC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tooltip = _interopRequireDefault(__webpack_require__("3S7+"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _controls = __webpack_require__("VoWU");

var _default = _react.default.memo(function GroupNameEdit(props) {
  var value = props.value,
      onChange = props.onChange;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      edited = _useState4[0],
      setEdited = _useState4[1];

  return _react.default.createElement(_react.default.Fragment, null, !edited ? _react.default.createElement("span", null, value) : null, edited ? _react.default.createElement("div", {
    className: "z-display-inline-block",
    style: {
      width: "180px"
    }
  }, (0, _controls.getControl)("Input", {
    size: "small",
    value: inputValue,
    onChange: function onChange(value) {
      setInputValue(value);
    }
  })) : null, edited ? _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u53D6\u6D88"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border small delete z-margin-left-10",
    onClick: function onClick() {
      setEdited(false);
    }
  }, _react.default.createElement(_icon.default, {
    type: "close"
  }))) : null, edited ? _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u786E\u5B9A"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border small z-margin-left-10",
    onClick: function onClick() {
      var returner = typeof onChange === "function" && onChange(inputValue);

      if (returner) {
        return;
      }

      setEdited(false);
    }
  }, _react.default.createElement(_icon.default, {
    type: "check"
  }))) : null, !edited ? _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u4FEE\u6539\u7EC4\u540D"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border small z-margin-left-10",
    onClick: function onClick() {
      setEdited(true);
      setInputValue(value);
    }
  }, _react.default.createElement(_icon.default, {
    type: "form"
  }))) : null);
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

/***/ "psFK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _controls = __webpack_require__("VoWU");

var _zTool = __webpack_require__("/sSO");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//treeSelect 异步加载子节点组件
var TreeSelectLoader = _react.default.forwardRef(function (props, ref) {
  var selectList = props.selectList,
      selectionsUrl = props.selectionsUrl,
      selectionsQuery = props.selectionsQuery,
      selectListFieldNames = props.selectListFieldNames,
      optionsChange = props.optionsChange,
      others = (0, _objectWithoutProperties2.default)(props, ["selectList", "selectionsUrl", "selectionsQuery", "selectListFieldNames", "optionsChange"]);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  (0, _react.useEffect)(function () {
    setOptions(selectList);
  }, [selectList]);
  (0, _react.useEffect)(function () {
    optionsChange && optionsChange(options);
  }, [options]);
  return (0, _controls.getControl)("TreeSelect", _objectSpread({}, others, {
    treeData: options,
    showSearch: false,
    treeDefaultExpandAll: false,
    allowClear: true,
    loadData: selectionsUrl && selectionsUrl.requireType === "part" ? function (treeNode) {
      // console.log(treeNode);
      if (treeNode.props.isLeaf) {
        return Promise.resolve();
      }

      return (0, _zTool.httpAjax)(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, _objectSpread({}, selectionsQuery, {
        id: treeNode.props.value
      })).then(function (re) {
        (0, _zTool.itemsFromTree)({
          tree: options,
          sourceItem: {
            value: treeNode.props.value
          },
          keyObj: {
            id: "value",
            children: "children"
          },
          action: function action(_ref) {
            var tree = _ref.tree,
                currentItem = _ref.currentItem,
                item = _ref.item,
                index = _ref.index,
                keyObj = _ref.keyObj;

            if (Array.isArray(re.data) && re.data.length) {
              currentItem.children = treeDataAddKey(re.data, {
                label: "title",
                value: "value",
                children: "children",
                key: "key"
              }, selectListFieldNames, false);
            } else {
              currentItem.children = null;
              currentItem.isLeaf = true;
            }
          }
        });
      }).finally(function () {
        setOptions((0, _toConsumableArray2.default)(options));
      });
    } : undefined
  }));
});

var _default = TreeSelectLoader;
exports.default = _default;

/***/ }),

/***/ "q151":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pareLinkages = pareLinkages;
exports.getFormItem = getFormItem;
exports.getGroupItem = getGroupItem;
exports.translateGroups = translateGroups;
exports.removeSomeLinkage = removeSomeLinkage;
exports.regionNames = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _zTool = __webpack_require__("/sSO");

var _controls = _interopRequireDefault(__webpack_require__("cx2H"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var regionNames = [{
  label: "省份",
  value: "province"
}, {
  label: "城市",
  value: "city"
}, {
  label: "区",
  value: "district"
}, {
  label: "街道",
  value: "street"
}, {
  label: "省市",
  value: "province,city"
}, {
  label: "省市区",
  value: "province,city,district"
}, {
  label: "省市区街道",
  value: "province,city,district,street"
}]; //以 "seq" 字段排序

exports.regionNames = regionNames;

function sortList(o1, o2) {
  var v1 = o1.hasOwnProperty("seq") ? o1["seq"] : 0;
  var v2 = o2.hasOwnProperty("seq") ? o2["seq"] : 0;
  return v1 - v2;
}

function pareLinkages(linkages) {
  if (Array.isArray(linkages)) {
    return linkages;
  } else if (typeof linkages === "string" && /^\[.+/.test(linkages)) {
    return JSON.parse(linkages);
  }

  return [];
} //单个formItem


function getFormItem(_ref) {
  var field = _ref.field,
      group = _ref.group,
      linkage = _ref.linkage,
      getGroupsFn = _ref.getGroupsFn,
      imperative = _ref.imperative,
      customOnChange = _ref.customOnChange,
      customFormRules = _ref.customFormRules,
      customControlRender = _ref.customControlRender,
      noAsync = _ref.noAsync;
  var getRules = customFormRules ? customFormRules[field.fieldKey] : null;

  var newField = _objectSpread({}, field, {
    groupId: group.id,
    seq: field.seq,
    key: field.fieldKey,
    label: field.label,
    span: field.span ? field.span : 8,
    labelFocused: [5, 8, 9, 10, 11, 14].includes(field.fieldType),
    imperative: imperative,
    customOnChange: customOnChange,
    customControlRender: field.fieldType === 14 ? customControlRender : undefined
  });

  if (!customControlRender && field.fieldType === 14) {
    newField.isFormItem = true;
  }

  newField.options = _controls.default[field.fieldType].getOptions(newField, typeof getRules === "function" ? getRules(newField, imperative) : []);

  newField.render = function (currentForm) {
    return _controls.default[newField.fieldType].getControl(newField, linkage, getGroupsFn, {
      disabled: field.disabled,
      noAsync: noAsync
    }, undefined, currentForm);
  };

  return newField;
} //从item.formFieldInfoList生成Zform的items


function getGroupItem() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var group = opt.group,
      labelLayout = opt.labelLayout;
  var formItems = group.formFieldInfoList.map(function (field) {
    return getFormItem(_objectSpread({
      field: field
    }, opt));
  });
  formItems.sort(sortList);
  return {
    additive: group.additive,
    //添加状态
    groupRef: _react.default.createRef(),
    seq: group.seq,
    id: group.id,
    name: group.name,
    formItems: formItems,
    labelLayout: labelLayout
  };
} //从formData生成group数据


function translateGroups(_ref2) {
  var formData = _ref2.formData,
      getGroupsFn = _ref2.getGroupsFn,
      linkage = _ref2.linkage,
      imperative = _ref2.imperative,
      customOnChange = _ref2.customOnChange,
      customFormRules = _ref2.customFormRules,
      customControlRender = _ref2.customControlRender,
      noAsync = _ref2.noAsync;

  if (_zTool.dataType.isObject(formData) && Array.isArray(formData.sectionList)) {
    var groups = formData.sectionList.map(function (group) {
      return getGroupItem({
        group: group,
        linkage: linkage ? pareLinkages(formData.linkages) : null,
        getGroupsFn: getGroupsFn,
        imperative: imperative,
        customOnChange: customOnChange || formData.customOnChange,
        customFormRules: customFormRules || formData.customFormRules,
        customControlRender: customControlRender || formData.customControlRender,
        labelLayout: formData.labelLayout,
        noAsync: noAsync
      });
    });
    groups.sort(sortList);
    return groups;
  } else {
    return [];
  }
} //移除linkageRef对应fieldKey的联动配置


function removeSomeLinkage(linkageRef, fieldKey) {
  var hasRemoveAge = false;
  linkageRef.current = linkageRef.current.filter(function (age) {
    var unlikeness = age.src["fieldKey"] !== fieldKey;

    if (unlikeness) {
      age.dist.forEach(function (d) {
        d.fields = d.fields.filter(function (f) {
          var unlikeness = f["fieldKey"] !== fieldKey;

          if (!hasRemoveAge && !unlikeness) {
            hasRemoveAge = true;
          }

          return unlikeness;
        });
      });
    }

    if (!hasRemoveAge && !unlikeness) {
      hasRemoveAge = true;
    }

    return unlikeness;
  });
  return hasRemoveAge;
}

/***/ }),

/***/ "rEGp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(366);

/***/ }),

/***/ "sSe+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tooltip = _interopRequireDefault(__webpack_require__("3S7+"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _default = _react.default.memo(function InsertGroupBtns(props) {
  var onInsertUp = props.onInsertUp,
      onInsertDown = props.onInsertDown;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u5411\u4E0A\u63D2\u5165\u4E00\u7EC4"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onInsertUp
  }, _react.default.createElement(_icon.default, {
    type: "arrow-up",
    className: "z-group-insert"
  }))), _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "\u5411\u4E0B\u63D2\u5165\u4E00\u7EC4"
  }, _react.default.createElement("div", {
    className: "z-live-tool-item all-border move small z-margin-right-10",
    onClick: onInsertDown
  }, _react.default.createElement(_icon.default, {
    type: "arrow-down",
    className: "z-group-insert"
  }))));
});

exports.default = _default;

/***/ }),

/***/ "tHbD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _row = _interopRequireDefault(__webpack_require__("BMrR"));

var _tooltip = _interopRequireDefault(__webpack_require__("3S7+"));

var _icon = _interopRequireDefault(__webpack_require__("CtXQ"));

var _col = _interopRequireDefault(__webpack_require__("kPKH"));

var _tag = _interopRequireDefault(__webpack_require__("mr32"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _common = __webpack_require__("q151");

function IDLinkagesConfigured(props, ref) {
  var onRemove = props.onRemove;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      configured = _useState2[0],
      setConfigured = _useState2[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getCurrentConfigured: function getCurrentConfigured() {
        return configured;
      },
      setConfigured: setConfigured
    };
  });
  return _react.default.createElement(_react.default.Fragment, null, configured.map(function (c, index) {
    return _react.default.createElement(_row.default, {
      gutter: 16,
      key: c.linkageType + c.src.fieldKey,
      type: "flex",
      className: "z-link-configured"
    }, _react.default.createElement(_col.default, {
      span: 6
    }, c.linkageType === "6" ? _react.default.createElement("span", null, "\u8EAB\u4EFD\u8BC1\u8F93\u5165\u63A7\u4EF6\uFF1A") : null, _react.default.createElement(_tag.default, {
      color: "#2db7f5"
    }, c.src.label)), _react.default.createElement(_col.default, {
      span: 14
    }, _react.default.createElement("span", null, c.linkageType === "6" ? "出生年月日接收控件：" : "联动控件："), c.dist.map(function (d) {
      return d.fields.map(function (item) {
        return _react.default.createElement(_tag.default, {
          color: "magenta",
          key: item.fieldKey
        }, item.label);
      });
    }), c.asyncParamName ? _react.default.createElement("span", null, "\u8BF7\u6C42\u9009\u9879\uFF0C\u5176\u53C2\u6570\u540D\uFF1A", _react.default.createElement(_tag.default, {
      color: "red"
    }, c.asyncParamName)) : null, c.regionName ? _react.default.createElement("span", null, "\u5185\u5BB9\u662F\uFF1A", _react.default.createElement(_tag.default, {
      color: "red"
    }, _common.regionNames.find(function (item) {
      return item.value === c.regionName;
    }).label)) : null), _react.default.createElement(_col.default, {
      span: 4
    }, _react.default.createElement(_tooltip.default, {
      placement: "top",
      title: "\u79FB\u9664"
    }, _react.default.createElement("div", {
      className: "z-live-tool-item delete all-border small",
      onClick: function onClick() {
        typeof onRemove === "function" && onRemove(c, index);
      }
    }, _react.default.createElement(_icon.default, {
      type: "delete"
    })))));
  }), !configured.length ? _react.default.createElement("p", {
    className: "z-text-center"
  }, "\u65E0\u914D\u7F6E") : null);
}

var _default = _react.default.memo(_react.default.forwardRef(IDLinkagesConfigured));

exports.default = _default;

/***/ }),

/***/ "tLB3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(438);

/***/ }),

/***/ "ut/Y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(329);

/***/ }),

/***/ "xYSL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(363);

/***/ }),

/***/ "yCxO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(497);

/***/ }),

/***/ "yGk4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(371);

/***/ })

}]);
//# sourceMappingURL=7.91e78f60b77409920019.js.map