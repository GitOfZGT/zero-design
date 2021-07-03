/*
 * @Author: zgt
 * @Date: 2019-04-10 15:11:45
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-09 15:57:11
 * @Description: file content
 */
import "./Promise-extend.js";
import axios from "axios";
// import uuidv4 from 'uuid/v4';
// import { Base64 } from 'js-base64';
import md5 from "blueimp-md5";
import getProcessEnv from "./getProcessEnv";
const statusMsg = {
  401: "您的请求未经授权 401",
  403: "您的请求被拒绝 403",
  404: "您的请求内容不存在 404",
  405: "您的请求方式不被允许 405",
  500: "服务器出现意外情况 500",
  501: "服务器不支持您的请求方式 501",
  502: "服务器无响应 502",
  503: "服务器异常 503",
  504: "服务器无响应 504",
  505: "服务器不支持您的http方式 505"
};
const codeMsg = {
  "-1": "请求失败，请联系管理员",
  403403: "未登录或用户已过期，请重新登录"
};
function formatNumber(str, t = 2) {
  str = str.toString();
  while (str.length < t) {
    str = "0" + str;
  }
  return str;
}
//随机产生不重复id
export const GenNonDuplicateID = function(randomLength = 8) {
  const id = (
    Number((Math.random() + Math.random()).toString().substr(2, 13)) +
    Date.now()
  )
    .toString(36)
    .slice(-parseInt(randomLength, 10));
  return id;
};

function createSign({ appCode, method, url, query }) {
  //任意字符串
  const nonce = GenNonDuplicateID();
  //当前时间戳
  const timestamp = new Date(Date.now()).getTime();
  return {
    nonce,
    timestamp,
    //签名
    sign: md5(
      method +
        "\n" +
        nonce +
        "\n" +
        timestamp +
        "\n" +
        appCode +
        "\n" +
        (query ? JSON.stringify(query) : "")
    )
  };
}
export const globalConfig = {
  storageMode: "localStorage"
};
export function getHeaders(opt = { method: "", url: "", query: {} }) {
  let userinfo = {};
  let appCode = window[globalConfig.storageMode].getItem("main_save_appCode");
  const header = {
    "X-AppCode": appCode,
    ...createSign({ ...opt, appCode })
  };
  try {
    userinfo = JSON.parse(
      window[globalConfig.storageMode].getItem("main_save_userInfo")
    );
    if (!userinfo || !userinfo.userDO) {
      window.onRequestHeaderConotFoundUser &&
        window.onRequestHeaderConotFoundUser();
    }
  } catch (e) {}
  if (userinfo) {
    header["X-UserId"] = userinfo.userDO ? userinfo.userDO.id : "";
  }
  let originCode = window.location.href.match(/https?:\/\/[^\/]+\/[^\/]+/g);
  if (originCode) {
    //取域名后的第一段路径
    originCode = originCode[0].replace(/https?:\/\/[^\/]+\//g, "");
    header["X-ItemCode"] = originCode;
  }
  return header;
}
const msgAlert = data => {
  data = data || {};
  const codemsgtext = codeMsg[data.code];
  const statusmsgtext = statusMsg[data.status];
  const msg = codemsgtext || statusmsgtext || data.msg || data.error;
  const _alert =
    typeof window.globalMsgError === "function"
      ? window.globalMsgError
      : window.alert;
  _alert(msg);
};
// import {const_notification} from '../constant';
/**
 *
 * @param {string} method //get || post || put    .....
 * @param {string} url
 * @param {object} query //接口参数，key，value 对应
 * @param {object} config //可配置请求头等，请看下面的config注释
 */
export const defaultAxiosInstance = axios.create({});
export function httpAjax(method, url, query, config, noCallback) {
  const axiosInstance =
    typeof this === "function" && this.interceptors
      ? this
      : defaultAxiosInstance;
  method = method.toLowerCase(); //转小写
  const headers = getHeaders({ method, url, query });
  //来自环境变量的basepath
  const { basepath } = getProcessEnv();
  if (!/^https?:\/\/.*/.test(url)) {
    url = basepath + url;
  }

  config = config ? config : {};
  if (headers) {
    config = {
      ...config,
      headers: {
        ...headers,
        ...(Object.prototype.toString.call(config.headers) == "[object Object]"
          ? config.headers
          : {})
      }
    };
  }
  switch (method) {
    case "get":
      //将get||delete请求传参处理成与post传参方式一致
      config = Object.assign(config, { params: query });
      break;
    case "delete":
      config = Object.assign(config, { data: query });
      break;
    case "location":
      window.location.assign(url);
      return;
    case "url":
      return url;
    case "url-promise":
      return Promise.resolve(url);
    case "post-params":
      method = "post";
      query =
        typeof query == "string"
          ? query
          : Object.keys(query)
              .map(key => {
                return `${key}=${query[key]}`;
              })
              .join("&");
      break;
  }
  let P = null;
  switch (method) {
    case "get":
      P = axiosInstance[method](url, config);
      break;
    case "delete":
      P = axiosInstance[method](url, config);
      break;
    default:
      P = axiosInstance[method](url, query, config);
  }
  let promise = noCallback
    ? P
    : new Promise((resolve, reject) => {
        P.then(result => {
          if (
            typeof result.data === "string" ||
            (result.config.responseType &&
              result.config.responseType !== "json")
          ) {
            resolve(result);
            return;
          }
          // 后台请求返回的code=0是操作成功
          if (result.data && result.data.code === 0) {
            resolve(result.data);
          } else {
            reject(result.data);
            msgAlert(result.data);
          }
        }).catch(result => {
          const re =
            result.response &&
            result.response.data &&
            typeof result.response.data === "object"
              ? result.response.data
              : result.response && typeof result.response === "object"
              ? result.response
              : {};
          const newResult = {
            msg: re.message,
            status: re.status,
            error: re.error,
            path: re.path
          };
          reject(newResult);
          msgAlert(newResult);
        });
      });
  return promise;
}
export default httpAjax;
// axios.interceptors.response.use(
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
