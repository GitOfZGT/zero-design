//自动加载./context/下的*.context.js
const components = require.context('./context', true, /Context.js$/);
const loadContext = {};
const names = [];
components.keys().forEach(key => {
    let defines;
    try {
        defines = components(key).default;
    } catch (e) {
        throw Error(`${key}:${e}`);
    }
    if (defines === undefined || typeof defines !== 'object') {
        throw Error(`${key}:内没有 export default 或者export default格式有误 `);
    }

    if (typeof defines.name !== 'string') {
        throw Error(`${key}:缺少name属性`);
    }
    const name = defines.name.trim(); //
    if (!/^[A-Z][A-z0-9]*Context$/.test(defines.name)) {
        throw Error(`${key}:name首字母要大写,以Context结尾`);
    }
    if (names.includes(name)) {
        throw Error(`${key}:${name}此name已被使用`);
    } else {
        names.push(name);
    }
    loadContext[name] = defines;
});
export default loadContext;
