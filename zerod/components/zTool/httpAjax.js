import "./Promise-extend.js";
import axios from "axios";
import uuidv4 from "uuid/v4";
import { Base64 } from "js-base64";
import md5 from "blueimp-md5";

function formatNumber(str, t = 2) {
	str = str.toString();
	while (str.length < t) {
		str = "0" + str;
	}
	return str;
}
//随机产生不重复id
function GenNonDuplicateID(randomLength = 8) {
	let id = Number(
		Math.random()
			.toString()
			.substr(3, randomLength) + Date.now(),
	).toString();
	return id;
}
//生成与后台协定的 X-Auth-Info
function getAuth(token = "123") {
	const key = GenNonDuplicateID().toString();
	const md5Key = md5(key);
	const md5Token = md5(token);
	let str = "";
	for (let index = 0; index < md5Key.length; index += 2) {
		const element = md5Key[index];
		str += element;
	}
	return `${md5Token},${key},${Base64.encode(`${md5Token}${str}`)}`;
}
//生成与后台协定的 X-Channel-Info
function getChannel(Auth) {
	const uuid = uuidv4();
	// console.log("uuid", uuid);
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	const Msecond = date.getUTCMilliseconds();
	const str = `${year}${formatNumber(month)}${formatNumber(day)}${formatNumber(hour)}${formatNumber(
		minute,
	)}${formatNumber(second)}${formatNumber(Msecond, 3)}`;
	// console.log("timer", str);
	const tmp = `${uuid},${str},${md5(Auth)}`;
	const signature = Base64.encode(tmp);
	return `${uuid},${str},${signature}`;
}

function getHeaders() {
	let userinfo = {};
	try {
		userinfo = JSON.parse(localStorage.getItem("main_save_userInfo"));
	} catch (e) {}
	if (userinfo && userinfo.token) {
		const Auth = getAuth(userinfo.token);
		return {
			"X-Token": userinfo.token,
			"X-Auth-Info": Auth,
			"X-Channel-Info": getChannel(Auth),
		};
	}
	return null;
}

// import {const_notification} from '../constant';
/**
 *
 * @param {string} method //get || post || put    .....
 * @param {string} url
 * @param {object} query //接口参数，key，value 对应
 * @param {object} config //可配置请求头等，请看下面的config注释
 */
function httpAjax(method, url, query, config, noCallback) {
	const msgAlert = typeof window.globalMsgError === "function" ? window.globalMsgError : window.alert;
	config = config ? config : {};
	const headers = getHeaders();
	if (headers) {
		config = {
			...config,
			headers: {
				...(Object.prototype.toString.call(config.headers) == "[object Object]" ? config.headers : {}),
				...headers,
			},
		};
	}
	method = method.toLowerCase(); //转小写
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
			P = axios[method](url, config);
			break;
		case "delete":
			P = axios[method](url, config);
			break;
		default:
			P = axios[method](url, query, config);
	}
	let promise = noCallback
		? P
		: new Promise((resolve, reject) => {
				P &&
					P.then(result => {
						if (result.data && (result.data.code === -1 || result.data.code === 500)) {
							const msg = result.data.msg || result.data.data || "请求错误";
							msgAlert(msg);
							reject(result.data);
							return;
						}
						if (result.data && result.data.code == 403403) {
							msgAlert(result.data.msg ? result.data.msg : "用户未登录或身份已过期");
							reject(result.data);
							return;
						}
						// 后台请求返回的code=0是操作成功
						result.data && result.data.code === 0 ? resolve(result.data) : reject(result.data);
					}).catch(result => {
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
