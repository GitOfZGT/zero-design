<!-- @routePath: /httpAjax -->

# httpAjax

> 对`axios`(优秀的 ajax 库)的二次封装，并统一了`get`、`post`、`put`、`delete`、`patch`请求方式的传参方式。

> 返回一个 Promise 对象，当第五个参数是 false \| undefined 时，会默认对响应结果的处理：
> 只有 `result.data.code === 0` 时才会进入`then((res)=>{})`回调，其他情况都会进入`catch((res)=>{})`回调,并且`then((res)=>{})`和`catch((res)=>{})`回调中的参数`res`其实是`result.data`；
> 当 `result.data.code === -1` || `result.data.code === 500` 会 使用 `window.globalMsgError` 弹出 `result.data.msg` || `result.data.data` 提示；
> 在`ZmainHOC`中已配置一个 window.globalMsgError = message.error 或者 notification.error；当 `result.data.code === 403403` 会提示`用户未登录或身份已过期`。

```js
import { httpAjax, globalConfig } from 'zerod/components/zTool';
globalConfig.storageMode = 'localStorage';
//或者
// import httpAjax from 'zerod-ztool/axiosInterceptor/httpAjax';
/**
 *
 * @param {string} method //get || post || put    .....
 * @param {string} url //接口url, url会自动拼接 process.env.basepath (即 npm run build --basepath=/abc 而来的 /abc)
 * @param {object} query //接口参数，key，value 对应
 * @param {object} config //axios的config参数，更多请看https://github.com/axios/axios
 * @param {boolean} noCallback //默认false，因为httpAjax方法默认会有对特殊请求结果的统一处理，noCallback=true时，就是不需要默认的统一处理
 */
//例：
httpAjax('get', '/webapi/v1.0/config/center/deleteServiceInfo', { id: '41' })
    .then((res) => {})
    .then((res) => {})
    .catch((res) => {})
    .finally(() => {});
httpAjax('post', '/webapi/v1.0/config/center/updateConfigProperty', { id: '41', name: '我们的故事' });
//'location' 执行拼接后的url : window.location.assign()
httpAjax('location', '/webapi/v1.0/config/center/updateConfigProperty');
//'url' 返回拼接后的url
const newUrl = httpAjax('url', '/webapi/v1.0/config/center/updateConfigProperty');
//'url-promise' 返回 promise，then 回调取拼接后的url
httpAjax('url-promise', '/webapi/v1.0/config/center/updateConfigProperty').then((newUrl) => {
    console.log(newUrl);
});
```

## X-AppCode

默认添加了`X-AppCode`请求头，来自于 `window[globalConfig.storageMode].getItem("main_save_appCode")`

## X-UserId

默认添加了`X-UserId`请求头，来自于 `window[globalConfig.storageMode].getItem("main_save_userInfo")`，`window[globalConfig.storageMode].getItem("main_save_userInfo")`的结构应该是 **"{"userDO":{id:13}}"**

## 签名请求头

默认添加了用于防篡改请求参数的签名请求头(后台做对应解密)

```js
import md5 from 'blueimp-md5';
//随机产生不重复id
function GenNonDuplicateID(randomLength = 8) {
    let id = Number(
        Math.random()
            .toString()
            .substr(3, randomLength) + Date.now(),
    ).toString();
    return id;
}
function createSign({ appCode, method, query }) {
    //任意字符串
    const nonce = GenNonDuplicateID().toString();
    //当前时间戳
    const timestamp = new Date(Date.now()).getTime();
    return {
        nonce,
        timestamp,
        //签名
        sign: md5(
            method + '\n' + nonce + '\n' + timestamp + '\n' + appCode + '\n' + (query ? JSON.stringify(query) : ''),
        ),
    };
}
```
