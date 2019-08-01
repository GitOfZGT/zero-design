(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "/sSO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/objectSpread.js
var objectSpread = __webpack_require__("JOet");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("Dy5R");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: delegated ./node_modules/_iscroll@5.2.0@iscroll/build/iscroll.js from dll-reference _dll_vendor_af5b108254eb523f1722
var iscrollfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("iCRc");
var iscrollfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(iscrollfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("GvXH");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/promise.js
var core_js_promise = __webpack_require__("Wza8");
var promise_default = /*#__PURE__*/__webpack_require__.n(core_js_promise);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Kvs7");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// CONCATENATED MODULE: ./node_modules/zerod/components/zTool/Promise-extend.js


// const promise = new Promise(function(resolve, reject) {
//     // ... some code
//     if (/* 异步操作成功 */){
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });
// Promise.prototype.then() 
// Promise.prototype.catch()
// Promise.race()
// Promise.resolve()
// Promise.reject()
// Promise除了以上原生自带的方法外，我们还可以扩展一些很有用的方法
// Promise 对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为 Promise 内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
promise_default.a.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected).catch(function (reason) {
    // 抛出一个全局错误
    setTimeout(function () {
      throw reason;
    }, 0);
  });
}; //   finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。


promise_default.a.prototype.finally = function (callback) {
  var P = this.constructor;
  return this.then(function (value) {
    return P.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return P.resolve(callback()).then(function () {
      throw reason;
    });
  });
};
// EXTERNAL MODULE: delegated ./node_modules/_axios@0.18.1@axios/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _axios_0_18_1_axiosfrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("91MD");
var _axios_0_18_1_axiosfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_axios_0_18_1_axiosfrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: ./node_modules/_uuid@3.3.2@uuid/v4.js
var v4 = __webpack_require__("VCiI");
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);

// EXTERNAL MODULE: delegated ./node_modules/_js-base64@2.5.1@js-base64/base64.js from dll-reference _dll_vendor_af5b108254eb523f1722
var base64from_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("zqH/");

// EXTERNAL MODULE: delegated ./node_modules/_blueimp-md5@2.10.0@blueimp-md5/js/md5.js from dll-reference _dll_vendor_af5b108254eb523f1722
var md5from_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("rB2p");
var md5from_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(md5from_dll_reference_dll_vendor_af5b108254eb523f1722);

// CONCATENATED MODULE: ./node_modules/zerod/components/zTool/httpAjax.js











function formatNumber(str) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  str = str.toString();

  while (str.length < t) {
    str = "0" + str;
  }

  return str;
} //随机产生不重复id


function GenNonDuplicateID() {
  var randomLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var id = Number(Math.random().toString().substr(3, randomLength) + now_default()()).toString();
  return id;
} //生成与后台协定的 X-Auth-Info


function getAuth() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "123";
  var key = GenNonDuplicateID().toString();
  var md5Key = md5from_dll_reference_dll_vendor_af5b108254eb523f1722_default()(key);
  var md5Token = md5from_dll_reference_dll_vendor_af5b108254eb523f1722_default()(token);
  var str = "";

  for (var index = 0; index < md5Key.length; index += 2) {
    var element = md5Key[index];
    str += element;
  }

  return "".concat(md5Token, ",").concat(key, ",").concat(base64from_dll_reference_dll_vendor_af5b108254eb523f1722["Base64"].encode("".concat(md5Token).concat(str)));
} //生成与后台协定的 X-Channel-Info


function getChannel(Auth) {
  var uuid = v4_default()(); // console.log("uuid", uuid);

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var Msecond = date.getUTCMilliseconds();
  var str = "".concat(year).concat(formatNumber(month)).concat(formatNumber(day)).concat(formatNumber(hour)).concat(formatNumber(minute)).concat(formatNumber(second)).concat(formatNumber(Msecond, 3)); // console.log("timer", str);

  var tmp = "".concat(uuid, ",").concat(str, ",").concat(md5from_dll_reference_dll_vendor_af5b108254eb523f1722_default()(Auth));
  var signature = base64from_dll_reference_dll_vendor_af5b108254eb523f1722["Base64"].encode(tmp);
  return "".concat(uuid, ",").concat(str, ",").concat(signature);
}

function getHeaders() {
  var userinfo = {};

  try {
    userinfo = JSON.parse(localStorage.getItem("main_save_userInfo"));
  } catch (e) {}

  if (userinfo && userinfo.token) {
    var Auth = getAuth(userinfo.token);
    return {
      "X-Token": userinfo.token,
      "X-Auth-Info": Auth,
      "X-Channel-Info": getChannel(Auth),
      "X-UserId": userinfo.userDO ? userinfo.userDO.id : ""
    };
  }

  return null;
} // import {const_notification} from '../constant';

/**
 *
 * @param {string} method //get || post || put    .....
 * @param {string} url
 * @param {object} query //接口参数，key，value 对应
 * @param {object} config //可配置请求头等，请看下面的config注释
 */


function httpAjax(method, url, query, config, noCallback) {
  //请求错误弹出提示框方法
  var msgAlert = typeof window.globalMsgError === "function" ? window.globalMsgError : window.alert;
  config = config ? config : {};
  var headers = getHeaders();

  if (headers) {
    config = objectSpread_default()({}, config, {
      headers: objectSpread_default()({}, Object.prototype.toString.call(config.headers) == "[object Object]" ? config.headers : {}, headers)
    });
  }

  method = method.toLowerCase(); //转小写

  switch (method) {
    case "get":
      //将get||delete请求传参处理成与post传参方式一致
      config = assign_default()(config, {
        params: query
      });
      break;

    case "delete":
      config = assign_default()(config, {
        data: query
      });
      break;

    case "location":
      window.location.assign(url);
      return;

    case "url":
      return url;

    case "url-promise":
      return promise_default.a.resolve(url);

    case "post-params":
      method = "post";
      query = typeof query == "string" ? query : keys_default()(query).map(function (key) {
        return "".concat(key, "=").concat(query[key]);
      }).join("&");
      break;
  }

  var P = null;

  switch (method) {
    case "get":
      P = _axios_0_18_1_axiosfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a[method](url, config);
      break;

    case "delete":
      P = _axios_0_18_1_axiosfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a[method](url, config);
      break;

    default:
      P = _axios_0_18_1_axiosfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a[method](url, query, config);
  }

  var promise = noCallback ? P : new promise_default.a(function (resolve, reject) {
    P && P.then(function (result) {
      if (result.data && (result.data.code === -1 || result.data.code === 500)) {
        var msg = result.data.msg || result.data.data || "请求错误";
        msgAlert(msg);
        reject(result.data);
        return;
      }

      if (result.data && result.data.code == 403403) {
        msgAlert(result.data.msg ? result.data.msg : "用户未登录或身份已过期");
        reject(result.data);
        return;
      } // 后台请求返回的code=0是操作成功


      result.data && result.data.code === 0 ? resolve(result.data) : reject(result.data);
    }).catch(function (result) {
      // if (result.response.data.status === 499) {
      // 	if (window.rootVue) {
      // 		window.rootVue.$message.error("您的账号在别的地方登录");
      // 		window.rootVue.$router.replace({ name: "login" });
      // 	}
      // 	return;
      // }
      // if (result.response.data.status === 403) {
      // 	if (window.rootVue) {
      // 		window.rootVue.$message.error("登录过期，重新登录");
      // 		window.rootVue.$router.replace({ name: "login" });
      // 	}
      // 	return;
      // }
      reject(result.data);
    });
  });
  return promise;
}

/* harmony default export */ var zTool_httpAjax = (httpAjax); // axios.interceptors.response.use(
// 	function(response) {
//         return Promise.reject(response.data);
// 		// return response.data.code === 0 ? response.data : Promise.reject(response.data);
// 	},
// 	function(error) {
//         console.log(error)
// 		// Do something with response error
// 		return error;
// 	},
// );

/* axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]]) */
//config

/* {
    //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    url: '/user',

    // 请求方法，同上
    method: 'get', // default
    // 基础url前缀
    baseURL: 'https://some-domain.com/api/',


    transformRequest: [function (data) {
      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
  　　data = Qs.stringify({});
      return data;
    }],

    transformResponse: [function (data) {
      // 这里提前处理返回的数据

      return data;
    }],

    // 请求头信息
    headers: {'X-Requested-With': 'XMLHttpRequest'},

    //parameter参数
    params: {
      ID: 12345
    },

    //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    data: {
      firstName: 'Fred'
    },

    //设置超时时间
    timeout: 1000,
    //返回数据类型
    responseType: 'json', // default


  } */
// EXTERNAL MODULE: delegated ./node_modules/_lodash.debounce@4.0.8@lodash.debounce/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _lodash_debounce_4_0_8_lodash_debouncefrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("TX3P");
var _lodash_debounce_4_0_8_lodash_debouncefrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_lodash_debounce_4_0_8_lodash_debouncefrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// CONCATENATED MODULE: ./node_modules/zerod/components/zTool/ResizeSensor.js


var ResizeSensor = function () {
  // Make sure it does not throw in a SSR (Server Side Rendering) situation
  if (typeof window === "undefined") {
    return null;
  } // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
  // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
  // would generate too many unnecessary events.


  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
    return window.setTimeout(fn, 20);
  };
  /**
   * Iterate over each of the provided element(s).
   *
   * @param {HTMLElement|HTMLElement[]} elements
   * @param {Function}                  callback
   */


  function forEachElement(elements, callback) {
    var elementsType = Object.prototype.toString.call(elements);
    var isCollectionTyped = '[object Array]' === elementsType || '[object NodeList]' === elementsType || '[object HTMLCollection]' === elementsType || '[object Object]' === elementsType || 'undefined' !== typeof jQuery && elements instanceof jQuery //jquery
    || 'undefined' !== typeof Elements && elements instanceof Elements //mootools
    ;
    var i = 0,
        j = elements.length;

    if (isCollectionTyped) {
      for (; i < j; i++) {
        callback(elements[i]);
      }
    } else {
      callback(elements);
    }
  }
  /**
  * Get element size
  * @param {HTMLElement} element
  * @returns {Object} {width, height}
  */


  function getElementSize(element) {
    if (!element.getBoundingClientRect) {
      return {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }

    var rect = element.getBoundingClientRect();
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    };
  }
  /**
   * Class for dimension change detection.
   *
   * @param {Element|Element[]|Elements|jQuery} element
   * @param {Function} callback
   *
   * @constructor
   */


  var ResizeSensor = function ResizeSensor(element, callback) {
    /**
     *
     * @constructor
     */
    function EventQueue() {
      var q = [];

      this.add = function (ev) {
        q.push(ev);
      };

      var i, j;

      this.call = function () {
        for (i = 0, j = q.length; i < j; i++) {
          q[i].call();
        }
      };

      this.remove = function (ev) {
        var newQueue = [];

        for (i = 0, j = q.length; i < j; i++) {
          if (q[i] !== ev) newQueue.push(q[i]);
        }

        q = newQueue;
      };

      this.length = function () {
        return q.length;
      };
    }
    /**
     *
     * @param {HTMLElement} element
     * @param {Function}    resized
     */


    function attachResizeEvent(element, resized) {
      if (!element) return;

      if (element.resizedAttached) {
        element.resizedAttached.add(resized);
        return;
      }

      element.resizedAttached = new EventQueue();
      element.resizedAttached.add(resized);
      element.resizeSensor = document.createElement('div');
      element.resizeSensor.dir = 'ltr';
      element.resizeSensor.className = 'resize-sensor';
      var style = 'position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
      var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';
      element.resizeSensor.style.cssText = style;
      element.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + style + '">' + '<div style="' + styleChild + '"></div>' + '</div>' + '<div class="resize-sensor-shrink" style="' + style + '">' + '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' + '</div>';
      element.appendChild(element.resizeSensor);
      var position = window.getComputedStyle(element).getPropertyValue('position');

      if ('absolute' !== position && 'relative' !== position && 'fixed' !== position) {
        element.style.position = 'relative';
      }

      var expand = element.resizeSensor.childNodes[0];
      var expandChild = expand.childNodes[0];
      var shrink = element.resizeSensor.childNodes[1];
      var dirty, rafId, newWidth, newHeight;
      var size = getElementSize(element);
      var lastWidth = size.width;
      var lastHeight = size.height;

      var reset = function reset() {
        //set display to block, necessary otherwise hidden elements won't ever work
        var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;

        if (invisible) {
          var saveDisplay = element.style.display;
          element.style.display = 'block';
        }

        expandChild.style.width = '100000px';
        expandChild.style.height = '100000px';
        expand.scrollLeft = 100000;
        expand.scrollTop = 100000;
        shrink.scrollLeft = 100000;
        shrink.scrollTop = 100000;

        if (invisible) {
          element.style.display = saveDisplay;
        }
      };

      element.resizeSensor.resetSensor = reset;

      var onResized = function onResized() {
        rafId = 0;
        if (!dirty) return;
        lastWidth = newWidth;
        lastHeight = newHeight;

        if (element.resizedAttached) {
          element.resizedAttached.call();
        }
      };

      var onScroll = function onScroll() {
        var size = getElementSize(element);
        var newWidth = size.width;
        var newHeight = size.height;
        dirty = newWidth != lastWidth || newHeight != lastHeight;

        if (dirty && !rafId) {
          rafId = requestAnimationFrame(onResized);
        }

        reset();
      };

      var addEvent = function addEvent(el, name, cb) {
        if (el.attachEvent) {
          el.attachEvent('on' + name, cb);
        } else {
          el.addEventListener(name, cb);
        }
      };

      addEvent(expand, 'scroll', onScroll);
      addEvent(shrink, 'scroll', onScroll); // Fix for custom Elements

      requestAnimationFrame(reset);
    }

    forEachElement(element, function (elem) {
      attachResizeEvent(elem, callback);
    });

    this.detach = function (ev) {
      ResizeSensor.detach(element, ev);
    };

    this.reset = function () {
      element.resizeSensor.resetSensor();
    };
  };

  ResizeSensor.reset = function (element, ev) {
    forEachElement(element, function (elem) {
      elem.resizeSensor.resetSensor();
    });
  };

  ResizeSensor.detach = function (element, ev) {
    forEachElement(element, function (elem) {
      if (!elem) return;

      if (elem.resizedAttached && typeof ev === "function") {
        elem.resizedAttached.remove(ev);
        if (elem.resizedAttached.length()) return;
      }

      if (elem.resizeSensor) {
        if (elem.contains(elem.resizeSensor)) {
          elem.removeChild(elem.resizeSensor);
        }

        delete elem.resizeSensor;
        delete elem.resizedAttached;
      }
    });
  };

  return ResizeSensor;
}();
/* harmony default export */ var zTool_ResizeSensor = (ResizeSensor);
// EXTERNAL MODULE: delegated ./node_modules/_lodash.merge@4.6.1@lodash.merge/index.js from dll-reference _dll_vendor_af5b108254eb523f1722
var _lodash_merge_4_6_1_lodash_mergefrom_dll_reference_dll_vendor_af5b108254eb523f1722 = __webpack_require__("hmYV");
var _lodash_merge_4_6_1_lodash_mergefrom_dll_reference_dll_vendor_af5b108254eb523f1722_default = /*#__PURE__*/__webpack_require__.n(_lodash_merge_4_6_1_lodash_mergefrom_dll_reference_dll_vendor_af5b108254eb523f1722);

// EXTERNAL MODULE: ./node_modules/zerod-ztool/index.js
var zerod_ztool = __webpack_require__("mQv5");

// CONCATENATED MODULE: ./node_modules/zerod/components/zTool/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return components_zTool_httpAjax; });
/* unused harmony export IScrollInstance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zTool_BuildScroll; });
/* unused harmony export scrollDisableWheel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return zTool_listenDivSizeChange; });
/* unused harmony export IntroInstance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return zTool_mergeConfig; });
/* unused harmony export zTool */
/* concated harmony reexport getStyle */__webpack_require__.d(__webpack_exports__, "i", function() { return zerod_ztool["h" /* getStyle */]; });
/* unused concated harmony import setStyle */
/* concated harmony reexport hasClass */__webpack_require__.d(__webpack_exports__, "j", function() { return zerod_ztool["i" /* hasClass */]; });
/* concated harmony reexport addClass */__webpack_require__.d(__webpack_exports__, "c", function() { return zerod_ztool["b" /* addClass */]; });
/* concated harmony reexport removeClass */__webpack_require__.d(__webpack_exports__, "v", function() { return zerod_ztool["r" /* removeClass */]; });
/* concated harmony reexport on */__webpack_require__.d(__webpack_exports__, "s", function() { return zerod_ztool["o" /* on */]; });
/* concated harmony reexport off */__webpack_require__.d(__webpack_exports__, "r", function() { return zerod_ztool["n" /* off */]; });
/* concated harmony reexport once */__webpack_require__.d(__webpack_exports__, "t", function() { return zerod_ztool["p" /* once */]; });
/* unused concated harmony import dataTypeTest */
/* unused concated harmony import deepCopyObject */
/* unused concated harmony import deepCopyArray */
/* concated harmony reexport deepCopy */__webpack_require__.d(__webpack_exports__, "f", function() { return zerod_ztool["e" /* deepCopy */]; });
/* unused concated harmony import formatDate */
/* concated harmony reexport GenNonDuplicateID */__webpack_require__.d(__webpack_exports__, "b", function() { return zerod_ztool["a" /* GenNonDuplicateID */]; });
/* concated harmony reexport arrayFilterBy */__webpack_require__.d(__webpack_exports__, "d", function() { return zerod_ztool["c" /* arrayFilterBy */]; });
/* unused concated harmony import EetoString */
/* unused concated harmony import onNoRepeatEvent */
/* unused concated harmony import filterQuery */
/* unused concated harmony import parseQueryString */
/* concated harmony reexport formatterMapKey */__webpack_require__.d(__webpack_exports__, "h", function() { return zerod_ztool["g" /* formatterMapKey */]; });
/* unused concated harmony import isUrl */
/* unused concated harmony import checkDevices */
/* unused concated harmony import loadFileList */
/* concated harmony reexport dataType */__webpack_require__.d(__webpack_exports__, "e", function() { return zerod_ztool["d" /* dataType */]; });
/* unused concated harmony import firstWordToUpperCase */
/* concated harmony reexport removeItemFromTree */__webpack_require__.d(__webpack_exports__, "w", function() { return zerod_ztool["s" /* removeItemFromTree */]; });
/* concated harmony reexport replaceItemFromTree */__webpack_require__.d(__webpack_exports__, "x", function() { return zerod_ztool["t" /* replaceItemFromTree */]; });
/* concated harmony reexport insertBeforeItemFromTree */__webpack_require__.d(__webpack_exports__, "m", function() { return zerod_ztool["k" /* insertBeforeItemFromTree */]; });
/* concated harmony reexport insertAfterItemFromTree */__webpack_require__.d(__webpack_exports__, "l", function() { return zerod_ztool["j" /* insertAfterItemFromTree */]; });
/* concated harmony reexport pushItemToTree */__webpack_require__.d(__webpack_exports__, "u", function() { return zerod_ztool["q" /* pushItemToTree */]; });
/* concated harmony reexport itemsFromTree */__webpack_require__.d(__webpack_exports__, "o", function() { return zerod_ztool["m" /* itemsFromTree */]; });
/* concated harmony reexport unshiftItemToTree */__webpack_require__.d(__webpack_exports__, "z", function() { return zerod_ztool["v" /* unshiftItemToTree */]; });
/* concated harmony reexport isWhiteColor */__webpack_require__.d(__webpack_exports__, "n", function() { return zerod_ztool["l" /* isWhiteColor */]; });
/* unused concated harmony import turnMapKeys */
/* concated harmony reexport turnLabelOrValue */__webpack_require__.d(__webpack_exports__, "y", function() { return zerod_ztool["u" /* turnLabelOrValue */]; });


 // import moment from "moment";





var components_zTool_httpAjax = zTool_httpAjax;

 // {
//     probeType: 2,
//     bounce: false,
//     momentum:false,
//     disableMouse:true,
//     disablePointer:true,
//     disableTouch:true,
//     scrollX: true,
//     preventDefault: false,
//     scrollY: true,
//     mouseWheel: true,
//     bindToWrapper: true,
//     eventPassthrough: false,
//     scrollbars: "custom",
//     interactiveScrollbars: true,
// }
//生成IScroll 滚动条实例

var zTool_IScrollInstance = function IScrollInstance(el, opt) {
  var defaultopt = assign_default()({
    disableMouse: true,
    disablePointer: true,
    disableTouch: false,
    bounce: false,
    //当滚动条符合边界时，它会执行一个小的反弹动画
    click: false,
    //要覆盖原生滚动，iScroll必须禁止某些默认浏览器行为，例如鼠标单击。如果您希望应用程序响应click事件，则必须将此选项显式设置为true。请注意，建议使用自定义tap事件
    scrollX: false,
    //启用横向滚动
    scrollY: true,
    //启用纵向滚动
    mouseWheel: true,
    //启用滚轮
    preventDefault: false,
    bindToWrapper: false,
    //的move事件通常是结合于文件而不是滚动容器。当您将光标/手指移出包装器时，滚动会继续进行。这通常是您想要的，但您也可以将move事件绑定到包装器本身。一旦指针离开容器，滚动就会停止。
    eventPassthrough: false,
    //有时您希望保留原生垂直滚动但能够添加水平iScroll（可能是旋转木马）。将此设置为true
    scrollbars: false,
    //显示滚动条，自定义滚动条样式：scrollbars选项'custom'
    interactiveScrollbars: true,
    //滚动条可拖动
    shrinkScrollbars: "scale",
    //当滚动到边界之外时，滚动条会缩小一小部分。'clip'和'scale'
    momentum: true,
    //您可以打开/关闭用户快速在屏幕上轻弹时执行的动量动画。关闭它可以大大提高性能。
    mouseWheelSpeed: 10,
    invertWheelDirection: false //激活鼠标滚轮支持时有意义，在这种情况下它只是反转滚动方向。（即向下滚动，反之亦然）。

  }, zerod_ztool["f" /* default */].dataTypeTest(opt) === "object" ? opt : {});

  return new iscrollfrom_dll_reference_dll_vendor_af5b108254eb523f1722_default.a(el, defaultopt);
}; //更新iscroll

var zTool_BuildScroll = function BuildScroll(el, opt) {
  var _this = this;

  this.scroll = zTool_IScrollInstance(el, opt);
  this.nextScrollToTop = false;

  this.refresh = function () {
    if (this.nextScrollToTop) {
      this.scroll.scrollTo(0, 0, 200);
      this.nextScrollToTop = false;
    }

    this.scroll.refresh();
  }.bind(this); //解决嵌套滚动条滚动问题


  var canscroll = false;
  var timer = null;

  var wheelhandle = function wheelhandle(e) {
    var scrollElement = e.target;

    while (scrollElement && scrollElement !== el && !["auto", "scroll"].includes(zerod_ztool["f" /* default */].getStyle(scrollElement, "overflow-y"))) {
      scrollElement = scrollElement.parentElement;
    }

    if (scrollElement && el.contains(scrollElement)) {
      if (!scrollElement.bindingWheelScroll) {
        zTool_scrollDisableWheel(scrollElement);
      }
    }

    if (_this.scroll.wrapperHeight - _this.scroll.y !== _this.scroll.scrollerHeight && _this.scroll.y !== 0) {
      e.stopPropagation();
      canscroll = true;
    } else {
      if (canscroll) {
        e.stopPropagation();
      }

      clearTimeout(timer);
      timer = setTimeout(function () {
        canscroll = false;
      }, 320);
    }
  };

  this.scroll.wrapper.addEventListener("wheel", wheelhandle, false);
  this.scroll.wrapper.addEventListener("mousewheel", wheelhandle, false);
  this.scroll.wrapper.addEventListener("DOMMouseScroll", wheelhandle, false);
  this.scroll.wrapper.addEventListener("mouseover", function () {
    canscroll = true;
  }, false);
}; //

var zTool_scrollDisableWheel = function scrollDisableWheel(el) {
  el.bindingWheelScroll = true;
  var scrollEnd = true;

  var onWheel = function onWheel(e) {
    var delta = e.deltaY ? e.deltaY : -e.wheelDeltaY;

    if (delta > 0 && el.scrollTop + el.clientHeight < el.scrollHeight || delta < 0 && el.scrollTop > 0) {
      scrollEnd = false;
    }

    if (!scrollEnd) e.stopPropagation();
  };

  zerod_ztool["f" /* default */].on(el, "wheel", onWheel);
  zerod_ztool["f" /* default */].on(el, "mousewheel", onWheel);
  zerod_ztool["f" /* default */].on(el, "DOMMouseScroll", onWheel);
  zerod_ztool["f" /* default */].on(el, "scroll", function (e) {
    scrollEnd = el.scrollTop + el.clientHeight >= el.scrollHeight || el.scrollTop === 0;
  });
}; //监听盒子（div）尺寸变化

var zTool_listenDivSizeChange = function listenDivSizeChange(el, scrollFun) {
  new zTool_ResizeSensor(el, _lodash_debounce_4_0_8_lodash_debouncefrom_dll_reference_dll_vendor_af5b108254eb523f1722_default()(scrollFun, 70));
}; //生成 引导提示 introjs的实例，注意的是：此函数返回promise 需要在then((intro)>{})拿introjs的实例

var zTool_IntroInstance = function IntroInstance(opt) {
  //异步加载相关文件
  return zerod_ztool["f" /* default */].loadFileList(["./static/introJs/introjs.min.css", "./static/introJs/themes/introjs-flattener.css", "./static/introJs/intro.min.js"]).then(function () {
    if (window.introJs) {
      var intro = window.introJs();
      intro.setOptions(assign_default()({
        nextLabel: "下一个",
        prevLabel: "上一个",
        doneLabel: "没有下一个，关闭",
        skipLabel: "关闭",
        disableInteraction: true,
        //是否让element可点击
        showProgress: true,
        //进度条
        exitOnOverlayClick: false,
        //是否点击遮罩层关闭
        showStepNumbers: true,
        //是否显示步骤数字
        showBullets: true,
        //是否显示步骤圆点
        // showButtons:true,
        exitOnEsc: false
      }, opt));
      return intro;
    }
  });
}; // 合并defaultConfig的属性生成新的config

var zTool_mergeConfig = function mergeConfig(defaultConfig, theConfig) {
  if (zerod_ztool["f" /* default */].dataTypeTest(defaultConfig) === "object" && zerod_ztool["f" /* default */].dataTypeTest(theConfig) === "object") {
    return _lodash_merge_4_6_1_lodash_mergefrom_dll_reference_dll_vendor_af5b108254eb523f1722_default()(zerod_ztool["f" /* default */].deepCopy(defaultConfig), theConfig);
  }
};
var zTool = objectSpread_default()({}, zerod_ztool["f" /* default */], {
  BuildScroll: zTool_BuildScroll,
  IScrollInstance: zTool_IScrollInstance,
  scrollDisableWheel: zTool_scrollDisableWheel,
  IntroInstance: zTool_IntroInstance,
  listenDivSizeChange: zTool_listenDivSizeChange,
  mergeConfig: zTool_mergeConfig,
  httpAjax: components_zTool_httpAjax
});
/* harmony default export */ var components_zTool = __webpack_exports__["g"] = (zTool);

/***/ }),

/***/ "aTWe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7BF6");
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UiLq");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g0Tb");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rIhE");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qFVM");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Wp/E");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ZpureComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jY6J");








var defaultValue = {};
var context = react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext(defaultValue); //创建上下文

var Provider = context.Provider,
    Consumer = context.Consumer; //提供启用上下文的方法

var setConsumer = function setConsumer(ChildComponent) {
  return (
    /*#__PURE__*/
    function (_ZpureComponent) {
      _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ContextConsumer, _ZpureComponent);

      function ContextConsumer() {
        _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ContextConsumer);

        return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ContextConsumer).apply(this, arguments));
      }

      _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ContextConsumer, [{
        key: "render",
        value: function render() {
          var _this = this;

          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Consumer, null, function (value) {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ChildComponent, _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.props, value, {
              ref: _this.props.forwardedRef
            }));
          });
        }
      }]);

      return ContextConsumer;
    }(_ZpureComponent__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])
  );
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "ZerodRootContext",
  //上下文名称（必需）
  Provider: Provider,
  Consumer: Consumer,
  setConsumer: setConsumer
});

/***/ }),

/***/ "cS7n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_es_locale_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ho6W");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UiLq");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g0Tb");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rIhE");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qFVM");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Wp/E");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ZpureComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jY6J");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("o0/1");
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("l0d0");
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("a/LZ");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("NdDt");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ZerodRootContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("aTWe");
/* harmony import */ var _zTool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("/sSO");












moment__WEBPACK_IMPORTED_MODULE_10___default.a.locale('zh-cn');


var fistLoad = true;

function hasPaceWatch() {
  if (window.Pace && fistLoad) {
    fistLoad = false;
    window.addEventListener("hashchange", function () {
      window.Pace && window.Pace.restart();
    }, false);
  }
}

function ZappHOC(pageConfig) {
  var defaultConfig = {
    rootRoutes: [],
    footerLinks: null,
    footerCopyright: null,
    routerType: "history",
    responseKeys: {
      listType: {
        list: "list",
        totalCount: "totalCount",
        totalPage: "totalPage"
      }
    }
  }; // console.log(dataType.isObject(pageConfig),pageConfig);

  defaultConfig = Object(_zTool__WEBPACK_IMPORTED_MODULE_13__[/* mergeConfig */ "q"])(defaultConfig, pageConfig);

  if (defaultConfig.routerType == "hash") {
    hasPaceWatch();
  }

  var App =
  /*#__PURE__*/
  function (_ZpureComponent) {
    _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _ZpureComponent);

    function App() {
      var _getPrototypeOf2;

      var _this;

      _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.config = defaultConfig;
      _this.routes = _this.config.rootRoutes.map(function (item, i) {
        return item.redirect ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
          key: i,
          exact: true,
          path: item.path,
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
              to: item.to
            });
          }
        }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
          key: i,
          exact: item.exact,
          path: item.path,
          component: item.component
        });
      });
      return _this;
    }

    _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
      key: "render",
      value: function render() {
        var Router = this.config.routerType === "history" ? react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"] : react_router_dom__WEBPACK_IMPORTED_MODULE_8__["HashRouter"];
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_locale_provider__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
          locale: antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_9___default.a
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ZerodRootContext__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Provider, {
          value: {
            footerLinks: this.config.footerLinks,
            footerCopyright: this.config.footerCopyright,
            responseKeys: this.config.responseKeys
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Router, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.routes))));
      }
    }]);

    return App;
  }(_ZpureComponent__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);

  return App;
}

/* harmony default export */ __webpack_exports__["a"] = (ZappHOC);

/***/ }),

/***/ "jY6J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ZpureComponent */
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UiLq");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("g0Tb");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rIhE");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qFVM");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Wp/E");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("GvXH");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uqIC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _zTool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/sSO");









function diff_Prev_Next(prev, next) {
  if (!_zTool__WEBPACK_IMPORTED_MODULE_7__[/* dataType */ "e"].isObject(prev) || !_zTool__WEBPACK_IMPORTED_MODULE_7__[/* dataType */ "e"].isObject(next)) return true;

  var propsKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(next);

  var should = false;

  for (var index = 0; index < propsKeys.length; index++) {
    var key = propsKeys[index];

    if (prev[key] !== next[key] || _zTool__WEBPACK_IMPORTED_MODULE_7__[/* dataType */ "e"].isFunction(next[key]) && !/^(on|export)[A-Z]{1}[\w\-]*$/.test(key)) {
      should = true;
      break;
    }
  }

  return should;
}

var ZpureComponent =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZpureComponent, _React$Component);

  function ZpureComponent() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZpureComponent);

    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ZpureComponent).apply(this, arguments));
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ZpureComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (diff_Prev_Next(this.props, nextProps)) {
        return true;
      }

      if (diff_Prev_Next(this.state, nextState)) {
        return true;
      }

      return false;
    }
  }]);

  return ZpureComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* harmony default export */ __webpack_exports__["a"] = (ZpureComponent);

/***/ }),

/***/ "mQv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export loadFileList */
/* unused harmony export onNoRepeatEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getStyle; });
/* unused harmony export setStyle */
/* unused harmony export firstWordToUpperCase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dataType; });
/* unused harmony export dataTypeTest */
/* unused harmony export deepCopyObject */
/* unused harmony export deepCopyArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return arrayFilterBy; });
/* unused harmony export formatDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenNonDuplicateID; });
/* unused harmony export EetoString */
/* unused harmony export filterQuery */
/* unused harmony export parseQueryString */
/* unused harmony export checkDevices */
/* unused harmony export digitUppercase */
/* unused harmony export isUrl */
/* unused harmony export isHttpStart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return formatterMapKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return itemsFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return removeItemFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return replaceItemFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return pushItemToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return unshiftItemToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return insertBeforeItemFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return insertAfterItemFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isWhiteColor; });
/* unused harmony export turnMapKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return turnLabelOrValue; });
/* unused harmony export zTool */
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bren");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hQ8H");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JOet");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dy5R");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Kvs7");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("GvXH");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ttJM");
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Wza8");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);









/*加载一批文件，_files:文件路径数组,可包括js,css,less文件,isSequence 是否按数组的顺序加载*/
var loadFileList = function () {
  /* 已加载文件缓存列表,用于判断文件是否已加载过，若已加载则不再次加载*/
  var classcodes = [];
  /*加载JS文件,url:文件路径*/

  var loadFile = function loadFile(url) {
    if (!FileIsExt(classcodes, url)) {
      var ThisType = GetFileType(url);
      var fileObj = null;

      if (ThisType == ".js" || ThisType == "http") {
        fileObj = document && document.createElement("script");
        fileObj.src = url;
      } else if (ThisType == ".css") {
        fileObj = document && document.createElement("link");
        fileObj.href = url;
        fileObj.type = "text/css";
        fileObj.rel = "stylesheet";
      } else if (ThisType == ".less") {
        fileObj = document && document.createElement("link");
        fileObj.href = url;
        fileObj.type = "text/css";
        fileObj.rel = "stylesheet/less";
      }

      if (fileObj) return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve, reject) {
        fileObj.onload = fileObj.onreadystatechange = function () {
          if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
            // success();
            classcodes.push(url);
            resolve();
          }
        };

        document && document.getElementsByTagName("head")[0].appendChild(fileObj);
      });else return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.resolve();
    } else {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.resolve();
    }
  };
  /*获取文件类型,后缀名，小写*/


  var GetFileType = function GetFileType(url) {
    if (url != null && url.length > 0) {
      var lasindex = url.lastIndexOf(".");

      if (lasindex > -1) {
        return url.substr(url.lastIndexOf(".")).toLowerCase();
      } else if (/^(http:|https:)/.test(url)) {
        return "http";
      }
    }

    return "";
  };
  /*文件是否已加载*/


  var FileIsExt = function FileIsExt(FileArray, _url) {
    if (FileArray != null && FileArray.length > 0) {
      var len = FileArray.length;

      for (var i = 0; i < len; i++) {
        if (FileArray[i] == _url) {
          return true;
        }
      }
    }

    return false;
  };

  return function (_files, isSequence) {
    var FileArray = [];

    if (dataTypeTest(_files) === "array") {
      FileArray = _files;
    } else if (dataTypeTest(_files) === "string") {
      /*如果文件列表是字符串，则用,切分成数组*/
      FileArray = _files.split(",");
    }

    if (FileArray != null && FileArray.length > 0) {
      var LoadedCount = 0;

      if (isSequence) {
        //依次加载
        return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve, reject) {
          var len = FileArray.length;
          var P = loadFile(FileArray.shift());

          var _loop = function _loop() {
            var url = FileArray[i];
            P = P.then(function () {
              LoadedCount++;
              return loadFile(url);
            });
          };

          for (var i = 0; i < len - 1; i++) {
            _loop();
          }

          P.then(function () {
            LoadedCount++;

            if (LoadedCount === len) {
              resolve();
            }
          });
        });
      } else {
        //非依次加载
        return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve, reject) {
          var len = FileArray.length;

          for (var i = 0; i < len; i++) {
            var url = FileArray[i];
            loadFile(url).then(function () {
              LoadedCount++;

              if (LoadedCount === len) {
                resolve();
              }
            });
          }
        });
      }
    } else {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.reject();
    }
  };
}(); // import Vue from 'vue';
// const isServer = Vue.prototype.$isServer;

var isServer = false;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document ? document.documentMode : 0);
/* 去掉字符串首尾空格 */

var trim = function trim(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
/* istanbul ignore next */


var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, "Moz$1");
}; //绑定不重复的事件


var hasListenerEvents = [];
var onNoRepeatEvent = function onNoRepeatEvent(element, event, handler) {
  var hasBanded = null;
  var index = 0;

  for (var i = 0; i < hasListenerEvents.length; i++) {
    var item = hasListenerEvents[i];

    if (item.element == element && item.event == event) {
      hasBanded = item;
      index = i;
      break;
    }
  }

  if (hasBanded) {
    off(hasBanded.element, hasBanded.event, hasBanded.handler);
    on(element, event, handler);
    hasListenerEvents.splice(index, 1, {
      element: element,
      event: event,
      handler: handler
    });
  } else {
    on(element, event, handler);
    hasListenerEvents.push({
      element: element,
      event: event,
      handler: handler
    });
  }
};
/* 绑定事件on(element, event, handler) */

var on = function () {
  if (!isServer && document && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
}();
/* 绑定事件off(element, event, handler) */

var off = function () {
  if (!isServer && document && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
}();
/* 绑定一次性事件one(element, event, handler) */

var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }

    off(el, event, listener);
  };

  on(el, event, listener);
};
/* 是否存在某个样式类名 */

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}
/* 添加className */

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += " " + clsName;
      }
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}
/* 移除className */

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(" " + clsName + " ", " ");
      }
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}
/* 获取某个元素的某个样式 */

var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === "float") {
    styleName = "styleFloat";
  }

  try {
    switch (styleName) {
      case "opacity":
        try {
          return element.filters.item("alpha").opacity / 100;
        } catch (e) {
          return 1.0;
        }

      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === "float") {
    styleName = "cssFloat";
  }

  try {
    var computed = document && document.defaultView.getComputedStyle(element, "");
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};
/* 给某个元素设置 style */

function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(styleName) === "object") {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);

    if (styleName === "opacity" && ieVersion < 9) {
      element.style.filter = isNaN(value) ? "" : "alpha(opacity=" + value * 100 + ")";
    } else {
      element.style[styleName] = value;
    }
  }
} //首字母大写

var firstWordToUpperCase = function firstWordToUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
    return L.toUpperCase();
  });
};
var data_types = {
  array: "[object Array]",
  object: "[object Object]",
  string: "[object String]",
  number: "[object Number]",
  boolean: "[object Boolean]",
  null: "[object Null]",
  undefined: "[object Undefined]",
  function: "[object Function]",
  date: "[object Date]",
  symbol: "[object Symbol]",
  set: "[object Set]",
  Map: "[object Map]",
  regExp: "[object RegExp]",
  json: "[object JSON]",
  //JSON对象
  promise: "[object Promise]",
  //Promise对象
  element: /HTML\w+Element/g
}; // 包含isArray,isObject,isString,isPromise等等

var dataType = {};

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(data_types).forEach(function (key) {
  dataType["is" + firstWordToUpperCase(key)] = function (item) {
    return dataTypeTest(item) === key;
  };
}); //检测数据类型 ，返回对应数据类型的名称


var dataTypeTest = function dataTypeTest(item) {
  var types = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(data_types);

  var hasType = null;
  var value = Object.prototype.toString.call(item);

  for (var index = 0; index < types.length; index++) {
    var key = types[index];

    if (value === data_types[key] || Object.prototype.toString.call(data_types[key]) === "[object RegExp]" && value.search(data_types[key]) > -1) {
      hasType = key;
      break;
    }
  }

  return hasType;
}; //深度复制对象

var deepCopyObject = function deepCopyObject(obj) {
  if (!obj || dataTypeTest(obj) !== "object") return {}; // return JSON.parse(JSON.stringify(obj));

  var newobj = {};

  for (var key in obj) {
    var type = dataTypeTest(obj[key]);

    switch (type) {
      case "string":
      case "null":
      case "number":
      case "undefined":
      case "function":
      case "boolean":
      case "symbol":
      case "set":
      case "map":
      case "json":
      case "promise":
      case "regExp":
      case "element":
        newobj[key] = obj[key];
        break;

      case "date":
        newobj[key] = obj[key].getTime();
        break;

      case "array":
        newobj[key] = deepCopyArray(obj[key]);
        break;

      case "object":
        newobj[key] = deepCopyObject(obj[key]);
        break;
    }
  }

  return newobj;
}; //深度复制数组

var deepCopyArray = function deepCopyArray(array) {
  if (!array || dataTypeTest(array) !== "array") return []; // return JSON.parse(JSON.stringify(array));

  var newarray = [];

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    var type = dataTypeTest(item);

    switch (type) {
      case "string":
      case "null":
      case "number":
      case "undefined":
      case "function":
      case "boolean":
      case "symbol":
      case "set":
      case "map":
      case "json":
      case "promise":
      case "regExp":
      case "element":
        newarray.push(item);
        break;

      case "date":
        newarray.push(item.getTime());
        break;

      case "array":
        newarray.push(deepCopyArray(item));
        break;

      case "object":
        newarray.push(deepCopyObject(item));
        break;
    }
  }

  return newarray;
}; //深度复制数组/对象

var deepCopy = function deepCopy(value) {
  switch (dataTypeTest(value)) {
    case "object":
      return deepCopyObject(value);

    case "array":
      return deepCopyArray(value);

    default:
      return value;
  }
}; //根据条件过滤数组，只能过滤两种情况：一、数组里面全是对象，二、数组里面全是字符串或者其他类型的

var arrayFilterFn = function arrayFilterFn(array, property) {
  var type = dataTypeTest(property);
  return array.filter(function (item) {
    var itemtype = dataTypeTest(item);

    if (itemtype === "object" && type === "object") {
      var hasItem = false;

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(property).forEach(function (el) {
        hasItem = item[el] === property[el];
      });

      return hasItem;
    } else {
      return item === property;
    }
  });
}; //用法一如：var arr=[{name:"水果",value:1},{name:"蔬菜",value:2}] ,arrayFilterBy(arr,{value:2})得到[{name:"蔬菜",value:2}]
//用法二如：var arr=[1,2,3,2,4,3,5,3]   arrayFilterBy(arr,3)得到 [3,3,3]
//用法三如：var arr=[{name:"水果",value:1},{name:"蔬菜",value:2},{name:"草莓",value:4}] ,arrayFilterBy(arr,[{value:2},{value:4}])得到[{name:"蔬菜",value:2},{name:"草莓",value:4}]
//用法四如：var arr=[1,2,3,2,4,3,5,3]   arrayFilterBy(arr,[3,2])得到 [3,3,3,2,2]


var arrayFilterBy = function arrayFilterBy(array, property) {
  //property可以是{name:'zgt'}或者'zgt'
  if (!array || dataTypeTest(array) !== "array") return [];
  var type = dataTypeTest(property);

  if (type === "array") {
    var newarray = [];
    property.forEach(function (item) {
      newarray = newarray.concat(arrayFilterFn(array, item));
    });
    return newarray;
  } else {
    return arrayFilterFn(array, property);
  }
}; //格式时间 支持时间戳转yyyy-MM-dd HH:mm:ss格式
//支持时间戳转 yyyy-mm-dd格式 ，支持yyyy/mm/dd转yyyy-mm-dd，不支持yyyy-mm-dd转yyyy/mm/dd

var formatDate = function formatDate(time, format) {
  if (!time) return "";
  var date = dataTypeTest(time) === "date" ? time : new Date(time);
  var ft = trim(format || "yyyy-MM-dd HH:mm:ss").split(" ");
  var newdate = "";
  var symbol = "-";
  if (!ft[0]) return;

  if (/[-]+/.test(ft[0]) && !/[/]+/.test(ft[0])) {
    symbol = "-";
  } else if (!/[-]+/.test(ft[0]) && /[/]+/.test(ft[0])) {
    symbol = "/";
  } else if (/[:]+/.test(ft[0])) {
    symbol = ":";
  }

  var addZero = function addZero(value) {
    if (Number(value) < 10) {
      return "0" + value;
    } else {
      return value;
    }
  };

  var setTimes = function setTimes(fts, symbol) {
    var newTime = "";
    var timeFtsLen = fts.split(":").length;

    switch (timeFtsLen) {
      case 1:
        newTime += addZero(date.getHours());
        break;

      case 2:
        newTime += addZero(date.getHours()) + symbol + addZero(date.getMinutes());
        break;

      default:
        newTime += addZero(date.getHours()) + symbol + addZero(date.getMinutes()) + symbol + addZero(date.getSeconds());
        break;
    }

    return newTime;
  };

  if (symbol === ":") {
    newdate += setTimes(ft[0], symbol);
  } else {
    var timeFtsLen = ft[0].split(symbol).length;

    switch (timeFtsLen) {
      case 1:
        newdate += date.getFullYear();
        break;

      case 2:
        newdate += date.getFullYear() + symbol + addZero(date.getMonth() + 1);
        break;

      default:
        newdate += date.getFullYear() + symbol + addZero(date.getMonth() + 1) + symbol + addZero(date.getDate());
        break;
    }

    if (ft[1]) {
      symbol = ":";
      newdate += " ";
      newdate += setTimes(ft[1], symbol);
    }
  }

  return newdate;
}; //随机产生不重复id

var GenNonDuplicateID = function GenNonDuplicateID() {
  var randomLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var id = Number(Math.random().toString().substr(3, randomLength) + _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()()).toString();
  return id;
}; //科学计数法转 字符串
//如 6.5E8 得 "650000000"
//如 6.5e-7得 "0.65000000"

var EetoString = function EetoString(num) {
  var str = num.toString();
  var reg = /^((\d+.\d+)|(\d+))([Ee])([\-]?\d+)$/;
  var arr,
      len,
      zerod = "";
  /*6e7或6e+7 都会自动转换数值*/

  if (!reg.test(str)) {
    return num;
  } else {
    /*6e-7 需要手动转换*/
    arr = reg.exec(str);
    len = Math.abs(arr[5]) - 1;

    for (var i = 0; i < len; i++) {
      zerod += "0";
    }

    return "0." + zerod + (arr[2] ? arr[1] : arr[3]).replace(".", "");
  }
}; // 过滤一个对象中有用的的属性，permissiveKys是允许的属性名数组

function filterQuery(permissiveKys, query) {
  var newQuery = {};

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(query).forEach(function (key) {
    if (permissiveKys.includes(key)) {
      newQuery[key] = query[key];
    }
  });

  return newQuery;
} //将url问号参数转成map对象

var parseQueryString = function parseQueryString(url) {
  if (isUrl(url)) {
    var searchurl = url.split("?");
    url = searchurl.length > 1 ? "?" + searchurl[1] : searchurl[0];
  }

  var reg_url = /^\?([\w\W]+)$/;
  var reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
      arr_url = reg_url.exec(url),
      ret = {};

  if (arr_url && arr_url[1]) {
    var str_para = arr_url[1],
        result;

    while ((result = reg_para.exec(str_para)) != null) {
      ret[result[1]] = result[2];
    }
  }

  return ret;
}; //检测移动端设备

var checkDevices = function checkDevices() {
  var userAgent = global.navigator.userAgent;

  if (/Android/i.test(userAgent)) {
    return "android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "ios";
  } else if (/WindowsWechat/i.test(userAgent)) {
    return "WindowsWechat";
  } else if (/MicroMessenger/i.test(userAgent)) {
    return "MicroMessenger";
  } // const inAndroid = /Android/i.test(userAgent)
  // const inIOS = /iPhone|iPad|iPod/i.test(userAgent)
  // const inMicroMessenger = /MicroMessenger/i.test(userAgent)
  // const inWindowsWechat = /WindowsWechat/i.test(userAgent)

}; //新增
// export function fixedZero(val) {
// 	return val * 1 < 10 ? `0${val}` : val;
// }
// export function getTimeDistance(type) {
// 	const now = new Date();
// 	const oneDay = 1000 * 60 * 60 * 24;
// 	if (type === "today") {
// 		now.setHours(0);
// 		now.setMinutes(0);
// 		now.setSeconds(0);
// 		return [moment(now), moment(now.getTime() + (oneDay - 1000))];
// 	}
// 	if (type === "week") {
// 		let day = now.getDay();
// 		now.setHours(0);
// 		now.setMinutes(0);
// 		now.setSeconds(0);
// 		if (day === 0) {
// 			day = 6;
// 		} else {
// 			day -= 1;
// 		}
// 		const beginTime = now.getTime() - day * oneDay;
// 		return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
// 	}
// 	if (type === "month") {
// 		const year = now.getFullYear();
// 		const month = now.getMonth();
// 		const nextDate = moment(now).add(1, "months");
// 		const nextYear = nextDate.year();
// 		const nextMonth = nextDate.month();
// 		return [
// 			moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
// 			moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
// 		];
// 	}
// 	if (type === "year") {
// 		const year = now.getFullYear();
// 		return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
// 	}
// }
// export function getPlainNode(nodeList, parentPath = "") {
// 	const arr = [];
// 	nodeList.forEach((node) => {
// 		const item = node;
// 		item.path = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
// 		item.exact = true;
// 		if (item.children && !item.component) {
// 			arr.push(...getPlainNode(item.children, item.path));
// 		} else {
// 			if (item.children && item.component) {
// 				item.exact = false;
// 			}
// 			arr.push(item);
// 		}
// 	});
// 	return arr;
// }

function accMul(arg1, arg2) {
  var m = 0;
  var s1 = arg1.toString();
  var s2 = arg2.toString();
  m += s1.split(".").length > 1 ? s1.split(".")[1].length : 0;
  m += s2.split(".").length > 1 ? s2.split(".")[1].length : 0;
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

function digitUppercase(n) {
  var fraction = ["角", "分"];
  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  var unit = [["元", "万", "亿"], ["", "拾", "佰", "仟", "万"]];
  var num = Math.abs(n);
  var s = "";
  fraction.forEach(function (item, index) {
    s += (digit[Math.floor(accMul(num, 10 * Math.pow(10, index))) % 10] + item).replace(/零./, "");
  });
  s = s || "整";
  num = Math.floor(num);

  for (var i = 0; i < unit[0].length && num > 0; i += 1) {
    var p = "";

    for (var j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }

    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }

  return s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整");
}
/* eslint no-useless-escape:0 */

var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w\?\=\&]*))?)$/;
function isUrl(path) {
  return reg.test(path);
}
var startHttpReg = /^(http:|https:)[\w\?\&\.\#\%\*\@\$\!\~\/]*/;
function isHttpStart(path) {
  return startHttpReg.test(path);
} // 将从后台获取的导航数据转成route的需要的key

function formatterMapKey(data) {
  var mapKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
  var notParPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // const notParPath = typeof parentPath == "boolean" && !parentPath;
  mapKey = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({
    iconClass: "iconClass",
    path: "path",
    name: "name",
    children: "children"
  }, mapKey ? mapKey : {});
  return data.map(function (item) {
    var path = item[mapKey.path];
    if (!notParPath && !isHttpStart(path)) path = parentPath + path.replace(/^\/*/, "");

    var newData = _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, item, {
      iconClass: item[mapKey.iconClass] !== undefined ? item[mapKey.iconClass] : "smile-o",
      path: path,
      parPath: parentPath.replace(/\/$/, ""),
      name: item[mapKey.name]
    });

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(item[mapKey.children]) && item[mapKey.children].length) {
      newData[mapKey.children] = formatterMapKey(item[mapKey.children], mapKey, "".concat(path, "/"), notParPath);
    }

    return newData;
  });
}
function itemsFromTree(_ref) {
  var tree = _ref.tree,
      sourceItem = _ref.sourceItem,
      item = _ref.item,
      keyObj = _ref.keyObj,
      action = _ref.action,
      parentItem = _ref.parentItem,
      condition = _ref.condition;
  var finished = false;
  keyObj = dataType.isObject(keyObj) ? keyObj : {
    id: "id",
    children: "children"
  };

  for (var index = 0; index < tree.length; index++) {
    var currentItem = tree[index];

    if (dataType.isFunction(condition) ? condition(currentItem[keyObj.id], sourceItem[keyObj.id]) : currentItem[keyObj.id] === sourceItem[keyObj.id]) {
      dataType.isFunction(action) && action({
        tree: tree,
        currentItem: currentItem,
        item: item,
        index: index,
        keyObj: keyObj,
        parentItem: parentItem
      });
      finished = true;
    } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(currentItem[keyObj.children])) {
      finished = itemsFromTree({
        tree: currentItem[keyObj.children],
        sourceItem: sourceItem,
        item: item,
        keyObj: keyObj,
        action: action,
        parentItem: currentItem
      });
    }

    if (finished) break;
  }

  return finished;
}
/**
 *用于移除json中一项数据
 *
 * @export
 * @param {object} obj { tree:array, sourceItem:object, keyObj:{id:"id",children:"children"} }
 * @returns
 */

function removeItemFromTree(obj) {
  // { tree, sourceItem, keyObj }
  var newobj = deepCopy(obj);

  newobj.action = function (_ref2) {
    var tree = _ref2.tree,
        currentItem = _ref2.currentItem,
        index = _ref2.index,
        keyObj = _ref2.keyObj;
    tree.splice(index, 1);
  };

  if (itemsFromTree(newobj)) {
    return newobj.tree;
  }
}
/**
 *用item数据替换json中一项sourceItem数据
 *
 * @export
 * @param {object} obj { tree:array, sourceItem:object,item:object, keyObj:{id:"id",children:"children"} }
 * @returns
 */

function replaceItemFromTree(obj) {
  var newobj = deepCopy(obj);

  newobj.action = function (_ref3) {
    var tree = _ref3.tree,
        currentItem = _ref3.currentItem,
        item = _ref3.item,
        index = _ref3.index,
        keyObj = _ref3.keyObj;
    tree.splice(index, 1, item);
  };

  if (itemsFromTree(newobj)) {
    return newobj.tree;
  }
}
/**
 *用于json中某项sourceItem数据的children末端添加一项item数据
 *
 * @export
 * @param {object} obj { tree:array, sourceItem:object,item:object, keyObj:{id:"id",children:"children"} }
 * @returns
 */

function pushItemToTree(obj) {
  var newobj = deepCopy(obj);

  newobj.action = function (_ref4) {
    var tree = _ref4.tree,
        currentItem = _ref4.currentItem,
        item = _ref4.item,
        index = _ref4.index,
        keyObj = _ref4.keyObj;

    if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(currentItem[keyObj.children])) {
      currentItem[keyObj.children] = [];
    }

    currentItem[keyObj.children].push(item);
  };

  if (itemsFromTree(newobj)) {
    return newobj.tree;
  }
}
/**
 *用于json中某项sourceItem数据的children头端添加一项item数据
 *
 * @export
 * @param {object} obj { tree:array, sourceItem:object,item:object, keyObj:{id:"id",children:"children"} }
 * @returns
 */

function unshiftItemToTree(obj) {
  var newobj = deepCopy(obj);

  newobj.action = function (_ref5) {
    var tree = _ref5.tree,
        currentItem = _ref5.currentItem,
        item = _ref5.item,
        index = _ref5.index,
        keyObj = _ref5.keyObj;

    if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(currentItem[keyObj.children])) {
      currentItem[keyObj.children] = [];
    }

    currentItem[keyObj.children].unshift(item);
  };

  if (itemsFromTree(newobj)) {
    return newobj.tree;
  }
}
/**
 *用于将一项item数据插入在json中某项sourceItem数据之前
 *
 * @export
 * @param {object} obj { tree:array, sourceItem:object,item:object, keyObj:{id:"id",children:"children"} }
 * @returns
 */

function insertBeforeItemFromTree(obj) {
  var newobj = deepCopy(obj);

  newobj.action = function (_ref6) {
    var tree = _ref6.tree,
        currentItem = _ref6.currentItem,
        item = _ref6.item,
        index = _ref6.index,
        keyObj = _ref6.keyObj;
    tree.splice(index, 0, item);
  };

  if (itemsFromTree(newobj)) {
    return newobj.tree;
  }
}
/**
 *用于将一项item数据插入在json中某项sourceItem数据之后
 *
 * @export
 * @param {object} obj { tree:array, sourceItem:object,item:object, keyObj:{id:"id",children:"children"} }
 * @returns
 */

function insertAfterItemFromTree(obj) {
  var newobj = deepCopy(obj);

  newobj.action = function (_ref7) {
    var tree = _ref7.tree,
        currentItem = _ref7.currentItem,
        item = _ref7.item,
        index = _ref7.index,
        keyObj = _ref7.keyObj;
    tree.splice(index + 1, 0, item);
  };

  if (itemsFromTree(newobj)) {
    return newobj.tree;
  }
} //判断是白色颜色值

function isWhiteColor(str) {
  return typeof str === "string" && (str.search(/^\#(f{3}$|f{6}$)/i) > -1 || str.search(/^rgb(a)?\(255,255,255/) > -1);
}
/**
 * @description: 转换tree数据的键名
 * @param tree {array} 
 * @param srcMapKeys {object} 
 * @param distMapKeys {object} 
 * @param extands {object} 
 * @return: newTree
 */

function turnMapKeys(tree) {
  var srcMapKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    label: 'label',
    value: 'value',
    children: 'children'
  };
  var distMapKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    label: 'label',
    value: 'value',
    children: 'children'
  };
  var extands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(tree) ? tree.map(function (item) {
    var _objectSpread2;

    var newItem = _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()((_objectSpread2 = {}, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, distMapKeys.label, item[srcMapKeys.label]), _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, distMapKeys.value, item[srcMapKeys.value]), _objectSpread2), extands);

    if (item[srcMapKeys.children]) {
      newItem[distMapKeys.children] = turnMapKeys(item[srcMapKeys.children], srcMapKeys, distMapKeys);
    }

    return newItem;
  }) : [];
}
/**
 * @description: 
 * @param tree {array} 
 * @param valueArr {string|array|number} 
 * @return: newValueArr
 */

function turnLabelOrValue(tree, valueArr) {
  var toDist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    src: 'value',
    dist: 'label'
  };
  var parValueArr = arguments.length > 3 ? arguments[3] : undefined;
  var newValueArr = parValueArr ? parValueArr : [];

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(tree)) {
    tree.forEach(function (item) {
      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(valueArr)) {
        var index = valueArr.indexOf(item[toDist.src]);

        if (index > -1 && !newValueArr[index]) {
          newValueArr[index] = item[toDist.dist];
        }
      } else if (valueArr === item[toDist.src]) {
        newValueArr[0] = item[toDist.dist];
      }

      if (item.children) {
        turnLabelOrValue(item.children, valueArr, toDist, newValueArr);
      }
    });
  }

  return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(valueArr) ? newValueArr : newValueArr[0];
}
var zTool = {
  getStyle: getStyle,
  setStyle: setStyle,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  on: on,
  off: off,
  once: once,
  dataTypeTest: dataTypeTest,
  deepCopyObject: deepCopyObject,
  deepCopyArray: deepCopyArray,
  deepCopy: deepCopy,
  formatDate: formatDate,
  GenNonDuplicateID: GenNonDuplicateID,
  arrayFilterBy: arrayFilterBy,
  EetoString: EetoString,
  onNoRepeatEvent: onNoRepeatEvent,
  filterQuery: filterQuery,
  parseQueryString: parseQueryString,
  formatterMapKey: formatterMapKey,
  isUrl: isUrl,
  checkDevices: checkDevices,
  loadFileList: loadFileList,
  dataType: dataType,
  firstWordToUpperCase: firstWordToUpperCase,
  removeItemFromTree: removeItemFromTree,
  replaceItemFromTree: replaceItemFromTree,
  pushItemToTree: pushItemToTree,
  itemsFromTree: itemsFromTree,
  isWhiteColor: isWhiteColor,
  turnMapKeys: turnMapKeys,
  turnLabelOrValue: turnLabelOrValue
};
/* harmony default export */ __webpack_exports__["f"] = (zTool);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("0PiD")))

/***/ })

}]);
//# sourceMappingURL=5.2447437a7d48c38b4257.js.map