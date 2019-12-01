(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "1w3K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("9w1k"))(489);

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

/***/ "oUOB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZerodMainContext2 = _interopRequireDefault(__webpack_require__("MaNN"));

var _Ztabs2 = _interopRequireDefault(__webpack_require__("VQbk"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var DetailTab =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(DetailTab, _React$PureComponent);

  function DetailTab() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DetailTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DetailTab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getConfig = function (content) {
      if (!content) {
        return _react.default.createElement("div", {
          className: "z-text-center z-text-gray"
        }, "\u65E0\u76F8\u5173\u914D\u7F6E\u4FE1\u606F");
      }

      return _react.default.createElement("div", {
        style: {
          background: "#2B2B2B",
          padding: 16
        }
      }, content.split("\n").map(function (line, n) {
        var tmp = line;

        if (line.startsWith("#")) {
          tmp = _react.default.createElement("span", {
            style: {
              color: "#629755"
            }
          }, line);
        } else if (line.indexOf("=") > 0) {
          var idx = line.indexOf("=");
          var key = line.substring(0, idx);
          var value = line.substring(idx + 1, line.length);
          tmp = _react.default.createElement("span", null, _react.default.createElement("span", {
            style: {
              color: "#9876AA"
            }
          }, key), _react.default.createElement("span", {
            style: {
              color: "rgba(255,255,255,0.85)"
            }
          }, "="), _react.default.createElement("span", {
            style: {
              color: "#BABABA"
            }
          }, value));
        }

        return _react.default.createElement("div", {
          key: "".concat(line, "-").concat(n)
        }, tmp);
      }));
    };

    _this.tabContent = function (item) {
      return _this.getConfig(item.serviceConfig["confProperty"]);
    };

    _this.defaultTabPanes = [{
      tab: "默认环境",
      key: "default",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "开发环境",
      key: "dev",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "测试环境",
      key: "test",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "生产环境",
      key: "prod",
      serviceConfig: {},
      content: _this.tabContent
    }];
    return _this;
  }

  (0, _createClass2.default)(DetailTab, [{
    key: "getTabPanes",
    value: function getTabPanes(defaultTabPanes) {
      var data = this.props.data;

      if (data && data.cfgcPropertyDOList) {
        return defaultTabPanes.map(function (item, index) {
          item.serviceId = data.serviceId;
          var tabpanes = data.cfgcPropertyDOList;

          for (var i = 0; i < tabpanes.length; i++) {
            if (item.key === tabpanes[i]["environment"]) {
              item.serviceConfig = tabpanes[i];
              break;
            }
          }

          return item;
        });
      } else {
        return [];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var tabPanes = this.getTabPanes(this.defaultTabPanes);
      return _react.default.createElement("div", {
        className: "z-panel z-margin-top-20"
      }, _react.default.createElement("div", {
        className: "z-panel-heading"
      }, "\u914D\u7F6E\u4FE1\u606F"), _react.default.createElement("div", {
        className: "z-panel-body"
      }, _react.default.createElement(_Ztabs2.default, {
        tabPanes: tabPanes
      })));
    }
  }]);
  return DetailTab;
}(_react.default.PureComponent);

DetailTab.propTypes = {
  data: _propTypes.default.object
};

var _default = _ZerodMainContext2.default.setConsumer(DetailTab);

exports.default = _default;

/***/ }),

/***/ "pWgy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZeditSimpleFormHOC2 = _interopRequireDefault(__webpack_require__("4QcI"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _inputNumber = _interopRequireDefault(__webpack_require__("fyUT"));

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _zTool2 = _interopRequireDefault(__webpack_require__("/sSO"));

var _button = _interopRequireDefault(__webpack_require__("2/Rp"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _AppApi = _interopRequireDefault(__webpack_require__("WiDR"));

var _serviceDefaultConfigData = _interopRequireDefault(__webpack_require__("40mi"));

var _ServiceTab = _interopRequireDefault(__webpack_require__("uywz"));

// 后台接口
// import components from '@/components/load-components'
function getEditPage(_ref) {
  var pageType = _ref.pageType,
      headerTitle = _ref.headerTitle,
      headerContent = _ref.headerContent,
      afterSubmitSuccess = _ref.afterSubmitSuccess;
  var configFormItems = [{
    key: "quick",
    label: "快捷操作",
    render: function render(form) {
      return _react.default.createElement(_button.default, {
        onClick: function onClick() {
          form.setFieldsValue({
            confProperty: _serviceDefaultConfigData.default.default
          });
        }
      }, "\u6A21\u677F\u914D\u7F6E");
    }
  }, {
    key: "confProperty",
    label: "默认配置",
    render: function render(form) {
      return _react.default.createElement(_input.default.TextArea, {
        rows: 15,
        placeholder: "\u8BF7\u8F93\u5165\u9ED8\u8BA4\u914D\u7F6E",
        ref: function ref(el) {
          _zTool2.default.scrollDisableWheel(el.textAreaRef);
        }
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }];
  var formItems = [{
    key: "serviceCode",
    label: "服务编码",
    render: function render(form) {
      return _react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u7F16\u7801"
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }, {
    key: "serviceName",
    label: "服务名称",
    render: function render(form) {
      return _react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u540D\u79F0"
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }, {
    key: "serviceRemark",
    label: "服务说明",
    render: function render(form) {
      return _react.default.createElement(_input.default.TextArea, {
        rows: 2,
        placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u8BF4\u660E"
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }, {
    key: "servicePort",
    detailKey: 'serviceProt',
    label: "端口号",
    render: function render(form) {
      return _react.default.createElement(_inputNumber.default, {
        min: 11110,
        max: 65535,
        step: 10
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }];

  if (pageType === "add") {
    formItems = [].concat((0, _toConsumableArray2.default)(formItems), configFormItems);
  }

  var pageCofig = {
    pageHeader: {
      show: true,
      // any
      title: headerTitle,
      //any
      content: headerContent,
      //element | node
      rightMoreContent: null
    },
    form: {
      type: pageType,
      panelHeader: pageType === "add" ? "新增服务信息" : "修改基础信息",
      items: formItems,
      detailApiInterface: function detailApiInterface(id, props) {
        return _AppApi.default.config.getServiceDetail({
          serviceId: id
        });
      },
      submitApiInterface: function submitApiInterface(values, props) {
        if (pageType === "add") {
          return _AppApi.default.config.addService(Object.assign({}, values, {
            environment: "default"
          }));
        } else {
          return _AppApi.default.config.updateService(Object.assign({}, values, {
            serviceId: props.detailId
          }));
        }
      },
      afterSubmitSuccess: afterSubmitSuccess
    }
  };

  if (pageType === "update") {
    pageCofig.moreContentRender = function (detail) {
      // console.log(detail);
      return _react.default.createElement(_ServiceTab.default, {
        data: detail,
        formItems: configFormItems
      });
    };
  }

  return (0, _ZeditSimpleFormHOC2.default)(pageCofig);
}

var _default = getEditPage;
exports.default = _default;

/***/ }),

/***/ "s1ms":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZsearchListHOC2 = _interopRequireDefault(__webpack_require__("eYSq"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _input = _interopRequireDefault(__webpack_require__("5rEg"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _AppApi = _interopRequireDefault(__webpack_require__("WiDR"));

var _getEditPage = _interopRequireDefault(__webpack_require__("pWgy"));

var _getDetailPage = _interopRequireDefault(__webpack_require__("zUoN"));

// let listExports = null;
var config = {
  pageHeader: {
    show: true,
    //any
    title: "服务配置",
    //any
    content: "微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",
    //element | node
    rightMoreContent: _react.default.createElement("div", null, "\u53F3\u8FB9\u5185\u5BB9")
  },
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
  list: {
    // table | card
    listType: "table",
    cardCoverRender: null,
    // listType=="card"时的一个前置render
    panelHeader: "列表",
    // 表格操作列的字段key
    actionDataIndex: "serviceName",
    // antd  Table的参数
    tableParams: {
      onChange: function onChange(pagination, filters, sorter) {
        console.log(sorter);
      },
      expandedRowRender: function expandedRowRender(record, index, indent, expanded) {
        console.log(indent);
        return _react.default.createElement("div", null, index + "-" + expanded);
      }
    },
    // 表格列map数据数据，同antd的表格 columns
    tableColumns: [{
      title: "服务名称",
      dataIndex: "serviceName"
    }, {
      title: "服务编码",
      dataIndex: "serviceCode",
      sorter: true
    }, {
      title: "约定端口号",
      dataIndex: "servicePort",
      render: function render(text, record, index, instance) {
        return _react.default.createElement("span", {
          className: "z-text-red"
        }, text);
      }
    }, {
      title: "服务描述",
      dataIndex: "remark"
    }],
    // 是否显示新建按钮
    showAddBtn: true,
    // 新建按钮权限控制代码
    addBtnPermCode: "",
    addPageRender: function addPageRender(panel) {
      var AddPage = (0, _getEditPage.default)({
        pageType: "add",
        headerTitle: "新增服务配置",
        headerContent: "新增一个服务,需要录入服务编码服务名称端口号等信息",
        // 保存数据成功的回调
        afterSubmitSuccess: function afterSubmitSuccess(closeRightModal) {
          // 保存数据成功后刷新列表数据
          panel.methods.getListData(); // 关闭右边modal

          closeRightModal();
        }
      });
      return _react.default.createElement(AddPage, null);
    },
    // 是否显示详情按钮
    showDetailBtn: true,
    // 详情按钮权限控制代码
    detailBtnPermCode: "",
    detailPageRender: function detailPageRender(record) {
      var DetailPage = (0, _getDetailPage.default)({
        headerTitle: record.serviceName,
        headerContent: record.remark
      });
      return _react.default.createElement(DetailPage, {
        detailId: record.id
      });
    },
    // 是否显示修改按钮
    showUpdateBtn: true,
    // 修改按钮权限控制代码
    updateBtnPermCod: "",
    updatePageRender: function updatePageRender(record, panel) {
      var UpdatePage = (0, _getEditPage.default)({
        pageType: "update",
        headerTitle: record.serviceName,
        headerContent: record.remark,
        afterSubmitSuccess: function afterSubmitSuccess(closeRightModal) {
          panel.methods.getListData(); // 保存数据成功后刷新列表数据
        }
      });
      return _react.default.createElement(UpdatePage, {
        detailId: record.id
      });
    },
    // 是否显示删除按钮
    showDeleteBtn: true,
    // 删除按钮权限控制代码
    deleteBtnPermCod: "",
    //更多操作按钮的map数据
    moreBtnMap: [{
      key: '0',
      name: "默认的按钮"
    }],
    //更多操作按钮的的点击事件
    onMoreBtnClick: function onMoreBtnClick(item, record) {
      _message2.default.success("\u60A8\u5F53\u524D\u70B9\u51FB\u7684\u662F[".concat(record.serviceName, "]\u8FD9\u6761\u6570\u636E"));
    },
    // 获取列表数据的后台接口函数，其必须内部返回Promise
    listApiInterface: function listApiInterface(query) {
      return _AppApi.default.config.getServiceList(Object.assign(query, {
        servcieName: query.serviceName
      })); //处理字段名
    },
    // 删除按钮的后台接口函数，其必须内部返回Promise
    deleteApiInterface: function deleteApiInterface(data) {
      return _AppApi.default.config.deleteService({
        id: data.id
      });
    },
    // exportSomething: (obj) => (listExports = obj),
    //是否显示分页
    showPagination: true,
    // 分页类型 paging | infinite
    paginationType: 'paging'
  }
};

var _default = (0, _ZsearchListHOC2.default)(config);

exports.default = _default;

/***/ }),

/***/ "uywz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZerodMainContext2 = _interopRequireDefault(__webpack_require__("MaNN"));

var _Ztabs2 = _interopRequireDefault(__webpack_require__("VQbk"));

var _Zform2 = _interopRequireDefault(__webpack_require__("+Qac"));

var _message2 = _interopRequireDefault(__webpack_require__("tsqr"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _AppApi = _interopRequireDefault(__webpack_require__("WiDR"));

var ServiceTab =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ServiceTab, _React$PureComponent);

  function ServiceTab() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ServiceTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ServiceTab)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.methods = {
      saveData: function saveData(item, values) {
        _this.props.showModalLoading(true);

        return _AppApi.default.config.updateServiceConfig({
          configProperty: values["confProperty"],
          environment: item.key,
          serviceId: item.serviceId
        }).then(function (re) {
          _message2.default.success("更新配置成功");
        }).catch(function (re) {
          _message2.default.error(re && re.msg ? re.msg : "更新配置失败");
        }).finally(function () {
          _this.props.showModalLoading(false);
        });
      }
    };

    _this.tabContent = function (item) {
      return _react.default.createElement(_Zform2.default, {
        items: _this.props.formItems,
        formDefaultValues: {
          confProperty: item.serviceConfig["confProperty"]
        },
        onSubmit: function onSubmit(values) {
          return _this.methods.saveData(item, values);
        }
      });
    };

    _this.defaultTabPanes = [{
      tab: "默认环境",
      key: "default",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "开发环境",
      key: "dev",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "测试环境",
      key: "test",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "生产环境",
      key: "prod",
      serviceConfig: {},
      content: _this.tabContent
    }];
    return _this;
  }

  (0, _createClass2.default)(ServiceTab, [{
    key: "getTabPanes",
    value: function getTabPanes(defaultTabPanes) {
      var data = this.props.data;

      if (data && data.cfgcPropertyDOList) {
        return defaultTabPanes.map(function (item, index) {
          item.serviceId = data.serviceId;
          var tabpanes = data.cfgcPropertyDOList;

          for (var i = 0; i < tabpanes.length; i++) {
            if (item.key === tabpanes[i]["environment"]) {
              item.serviceConfig = tabpanes[i];
              break;
            }
          }

          return item;
        });
      } else {
        return [];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var tabPanes = this.getTabPanes(this.defaultTabPanes);
      return _react.default.createElement("div", {
        className: "z-panel z-margin-top-20"
      }, _react.default.createElement("div", {
        className: "z-panel-heading"
      }, "\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F"), _react.default.createElement("div", {
        className: "z-panel-body"
      }, _react.default.createElement(_Ztabs2.default, {
        tabPanes: tabPanes
      })));
    }
  }]);
  return ServiceTab;
}(_react.default.PureComponent);

ServiceTab.propTypes = {
  data: _propTypes.default.object,
  formItems: _propTypes.default.arrayOf(_propTypes.default.object)
};

var _default = _ZerodMainContext2.default.setConsumer(ServiceTab);

exports.default = _default;

/***/ }),

/***/ "zUoN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZdetailSimpleBaseHOC2 = _interopRequireDefault(__webpack_require__("fdRb"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _AppApi = _interopRequireDefault(__webpack_require__("WiDR"));

var _DetailTab = _interopRequireDefault(__webpack_require__("oUOB"));

function getPage(_ref) {
  var headerTitle = _ref.headerTitle,
      headerContent = _ref.headerContent;
  var pageCofig = {
    pageHeader: {
      show: true,
      // array>[object] | null,如果是null则不显示面包屑
      breadcrumbRoutes: null,
      // any
      title: headerTitle,
      //any
      content: headerContent,
      //element | node
      rightMoreContent: _react.default.createElement("div", null, "\u53F3\u8FB9")
    },
    detail: {
      panelHeader: "基础信息",
      items: [{
        key: "serviceName",
        label: "服务名称"
      }, {
        key: "serviceCode",
        label: "服务编码"
      }, {
        key: "serviceProt",
        label: "约定端口号",
        render: function render(value, record) {
          return _react.default.createElement("span", {
            className: "z-text-red"
          }, value);
        }
      }, {
        key: "serviceRemark",
        label: "服务描述",
        span: {
          lg: 12
        },
        render: function render(value, record) {
          return value;
        }
      }],
      detailApiInterface: function detailApiInterface(id, props) {
        return _AppApi.default.config.getServiceDetail({
          serviceId: id
        });
      }
    },
    moreContentRender: function moreContentRender(detail) {
      return _react.default.createElement(_DetailTab.default, {
        data: detail
      });
    }
  };
  return (0, _ZdetailSimpleBaseHOC2.default)(pageCofig);
}

var _default = getPage;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=15.e4f8d208ab0a04059990.js.map