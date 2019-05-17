//自动加载./views/*A-api.js（后台接口）
//./views/*A-api.js导出格式为
// export default {
//   name: "home",
//   apis: {
//       //获取列表接口
//     getList(query) {
//       return httpAjax("post", "接口路径", query);
//     },
//   }
// };
//使用后台接口：
// import api from '@/App.api.js'
// api.home.getList(参数)

const components = require.context('./Api', true, /\.api.js$/);
const loadApis = {};
const names = [];
components.keys().forEach((key) => {
    let defines;
    try {
        defines = components(key).default;
    } catch (e) {
        throw Error(`${key}:${e}`);
    }
    if (defines === undefined || typeof defines !== 'object') {
        throw Error(`${key}:内没有 export default 或者export default格式有误 `);
    } else if (typeof defines.apis !== 'object') {
        throw Error(`${key}:apis不是object`);
    }
    let name = defines.name;
    if (typeof name !== 'string') {
        throw Error(`${key}:缺少name属性`);
    }
    name = name.trim();
    if (names.includes(name)) {
        throw Error(`${key}:${name}此命名空间已被使用`);
    } else {
        names.push(name);
    }
    loadApis[name] = defines.apis;
});
export default loadApis;
