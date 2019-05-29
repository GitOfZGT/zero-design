(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "3OXX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(10);

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

/***/ "s1ms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/zerod/components/ZsearchListHOC/index.jsx + 46 modules
var ZsearchListHOC = __webpack_require__("eYSq");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("II5r");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/message/index.js
var message = __webpack_require__("nMT3");

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/input/index.js + 7 modules
var input = __webpack_require__("eaxb");

// EXTERNAL MODULE: delegated ./node_modules/_react@16.8.6@react/index.js from dll-reference _dll_vendor_e823eb2f1294e4241445
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445 = __webpack_require__("uqIC");
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default = /*#__PURE__*/__webpack_require__.n(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445);

// EXTERNAL MODULE: ./src/App.api.js
var App_api = __webpack_require__("WiDR");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZeditSimpleFormHOC/index.jsx
var ZeditSimpleFormHOC = __webpack_require__("4QcI");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("rDdF");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/input-number/index.js + 4 modules
var input_number = __webpack_require__("bkI4");

// EXTERNAL MODULE: ./node_modules/zerod/components/zTool/index.js
var zTool = __webpack_require__("/sSO");

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("9DAX");

// EXTERNAL MODULE: ./src/mock/serviceDefaultConfigData.js
var serviceDefaultConfigData = __webpack_require__("40mi");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZerodMainContext.js
var ZerodMainContext = __webpack_require__("MaNN");

// EXTERNAL MODULE: ./node_modules/zerod/components/Ztabs/index.jsx
var Ztabs = __webpack_require__("VQbk");

// EXTERNAL MODULE: ./node_modules/zerod/components/Zform/index.jsx
var Zform = __webpack_require__("+Qac");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("MhH0");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/createClass.js
var createClass = __webpack_require__("FcZB");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Ratc");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("0j8+");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/inherits.js
var inherits = __webpack_require__("0kOG");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: delegated ./node_modules/_prop-types@15.7.2@prop-types/index.js from dll-reference _dll_vendor_e823eb2f1294e4241445
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445 = __webpack_require__("EH+i");
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default = /*#__PURE__*/__webpack_require__.n(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445);

// CONCATENATED MODULE: ./src/views/Main/Config/ServiceWithTableList/ServiceTab.jsx










 // zerod



var ServiceTab_ServiceTab =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(ServiceTab, _React$PureComponent);

  function ServiceTab() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ServiceTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ServiceTab)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.methods = {
      saveData: function saveData(item, values) {
        _this.props.showModalLoading(true);

        return App_api["a" /* default */].config.updateServiceConfig({
          configProperty: values["confProperty"],
          environment: item.key,
          serviceId: item.serviceId
        }).then(function (re) {
          message["a" /* default */].success("更新配置成功");
        }).catch(function (re) {
          message["a" /* default */].error(re && re.msg ? re.msg : "更新配置失败");
        }).finally(function () {
          _this.props.showModalLoading(false);
        });
      }
    };

    _this.tabContent = function (item) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Zform["b" /* default */], {
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

  createClass_default()(ServiceTab, [{
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel z-margin-top-20"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel-heading"
      }, "\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel-body"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Ztabs["a" /* default */], {
        tabPanes: tabPanes
      })));
    }
  }]);

  return ServiceTab;
}(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.PureComponent);

ServiceTab_ServiceTab.propTypes = {
  data: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.object,
  formItems: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.arrayOf(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.object)
};
/* harmony default export */ var ServiceWithTableList_ServiceTab = (ZerodMainContext["a" /* default */].setConsumer(ServiceTab_ServiceTab));
// CONCATENATED MODULE: ./src/views/Main/Config/ServiceWithTableList/getEditPage.js







 // 第三方组件

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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(es_button["a" /* default */], {
        onClick: function onClick() {
          form.setFieldsValue({
            confProperty: serviceDefaultConfigData["a" /* default */].default
          });
        }
      }, "\u6A21\u677F\u914D\u7F6E");
    }
  }, {
    key: "confProperty",
    label: "默认配置",
    render: function render(form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */].TextArea, {
        rows: 15,
        placeholder: "\u8BF7\u8F93\u5165\u9ED8\u8BA4\u914D\u7F6E",
        ref: function ref(el) {
          zTool["g" /* default */].scrollDisableWheel(el.textAreaRef);
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */].TextArea, {
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input_number["a" /* default */], {
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
    formItems = [].concat(toConsumableArray_default()(formItems), configFormItems);
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
        return App_api["a" /* default */].config.getServiceDetail({
          serviceId: id
        });
      },
      submitApiInterface: function submitApiInterface(values, props) {
        if (pageType === "add") {
          return App_api["a" /* default */].config.addService(assign_default()({}, values, {
            environment: "default"
          }));
        } else {
          return App_api["a" /* default */].config.updateService(assign_default()({}, values, {
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(ServiceWithTableList_ServiceTab, {
        data: detail,
        formItems: configFormItems
      });
    };
  }

  return Object(ZeditSimpleFormHOC["a" /* default */])(pageCofig);
}

/* harmony default export */ var ServiceWithTableList_getEditPage = (getEditPage);
// EXTERNAL MODULE: ./node_modules/zerod/components/ZdetailSimpleBaseHOC/index.jsx
var ZdetailSimpleBaseHOC = __webpack_require__("fdRb");

// CONCATENATED MODULE: ./src/views/Main/Config/ServiceWithTableList/DetailTab.jsx








 // zerod

var DetailTab_DetailTab =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(DetailTab, _React$PureComponent);

  function DetailTab() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DetailTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DetailTab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getConfig = function (content) {
      if (!content) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
          className: "z-text-center z-text-gray"
        }, "\u65E0\u76F8\u5173\u914D\u7F6E\u4FE1\u606F");
      }

      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        style: {
          background: "#2B2B2B",
          padding: 16
        }
      }, content.split("\n").map(function (line, n) {
        var tmp = line;

        if (line.startsWith("#")) {
          tmp = _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("span", {
            style: {
              color: "#629755"
            }
          }, line);
        } else if (line.indexOf("=") > 0) {
          var idx = line.indexOf("=");
          var key = line.substring(0, idx);
          var value = line.substring(idx + 1, line.length);
          tmp = _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("span", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("span", {
            style: {
              color: "#9876AA"
            }
          }, key), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("span", {
            style: {
              color: "rgba(255,255,255,0.85)"
            }
          }, "="), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("span", {
            style: {
              color: "#BABABA"
            }
          }, value));
        }

        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
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

  createClass_default()(DetailTab, [{
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel z-margin-top-20"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel-heading"
      }, "\u914D\u7F6E\u4FE1\u606F"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel-body"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Ztabs["a" /* default */], {
        tabPanes: tabPanes
      })));
    }
  }]);

  return DetailTab;
}(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.PureComponent);

DetailTab_DetailTab.propTypes = {
  data: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.object
};
/* harmony default export */ var ServiceWithTableList_DetailTab = (ZerodMainContext["a" /* default */].setConsumer(DetailTab_DetailTab));
// CONCATENATED MODULE: ./src/views/Main/Config/ServiceWithTableList/getDetailPage.js

 // import { Input, InputNumber, Button } from "antd";




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
      rightMoreContent: _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", null, "\u53F3\u8FB9")
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
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("span", {
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
        return App_api["a" /* default */].config.getServiceDetail({
          serviceId: id
        });
      }
    },
    moreContentRender: function moreContentRender(detail) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(ServiceWithTableList_DetailTab, {
        data: detail
      });
    }
  };
  return Object(ZdetailSimpleBaseHOC["a" /* default */])(pageCofig);
}

/* harmony default export */ var getDetailPage = (getPage);
// CONCATENATED MODULE: ./src/views/Main/Config/ServiceWithTableList/index.jsx







 // let listExports = null;

var config = {
  pageHeader: {
    show: true,
    //any
    title: "服务配置",
    //any
    content: "微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",
    //element | node
    rightMoreContent: _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", null, "\u53F3\u8FB9\u5185\u5BB9")
  },
  searchForm: {
    // array>[object] | null，如果是null则不显示搜索表单
    items: [{
      key: "serviceCode",
      label: "服务编码",
      render: function render(form) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
        });
      }
    }, {
      key: "serviceName",
      label: "服务名称",
      render: function render(form) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
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
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", null, index + "-" + expanded);
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
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("span", {
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
      var AddPage = ServiceWithTableList_getEditPage({
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
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(AddPage, null);
    },
    // 是否显示详情按钮
    showDetailBtn: true,
    // 详情按钮权限控制代码
    detailBtnPermCode: "",
    detailPageRender: function detailPageRender(record) {
      var DetailPage = getDetailPage({
        headerTitle: record.serviceName,
        headerContent: record.remark
      });
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(DetailPage, {
        detailId: record.id
      });
    },
    // 是否显示修改按钮
    showUpdateBtn: true,
    // 修改按钮权限控制代码
    updateBtnPermCod: "",
    updatePageRender: function updatePageRender(record, panel) {
      var UpdatePage = ServiceWithTableList_getEditPage({
        pageType: "update",
        headerTitle: record.serviceName,
        headerContent: record.remark,
        afterSubmitSuccess: function afterSubmitSuccess(closeRightModal) {
          panel.methods.getListData(); // 保存数据成功后刷新列表数据
        }
      });
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(UpdatePage, {
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
      message["a" /* default */].success("\u60A8\u5F53\u524D\u70B9\u51FB\u7684\u662F[".concat(record.serviceName, "]\u8FD9\u6761\u6570\u636E"));
    },
    // 获取列表数据的后台接口函数，其必须内部返回Promise
    listApiInterface: function listApiInterface(query) {
      return App_api["a" /* default */].config.getServiceList(assign_default()(query, {
        servcieName: query.serviceName
      })); //处理字段名
    },
    // 删除按钮的后台接口函数，其必须内部返回Promise
    deleteApiInterface: function deleteApiInterface(data) {
      return App_api["a" /* default */].config.deleteService({
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
/* harmony default export */ var ServiceWithTableList = __webpack_exports__["default"] = (Object(ZsearchListHOC["a" /* default */])(config));

/***/ })

}]);
//# sourceMappingURL=45.3a7b73a73edd105d46dd.js.map