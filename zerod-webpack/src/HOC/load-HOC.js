//自动加载index.jsx（组件文件）
//其导出的格式为
// export default {
// 	name: "Zbutton",
// 	HOC: Zbutton,
// };

const components = require.context('./', true, /index.jsx$/);
const loadCompoents = {};
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
    } else if (typeof defines.HOC !== 'function') {
        throw Error(`${key}:HOC有误`);
    }
    let name = defines.name;
    if (typeof name !== 'string') {
        throw Error(`${key}:缺少name属性`);
    } else if (!/^A[A-z0-9]*HOC$/.test(name)) {
        throw Error(`${key}:name属性请以A开头HOC结尾`);
    }
    name = name.trim();
    if (names.includes(name)) {
        throw Error(`${key}:${name}此HOC名称已被使用`);
    } else {
        names.push(name);
    }
    loadCompoents[name] = defines.HOC;
});
export default loadCompoents;
