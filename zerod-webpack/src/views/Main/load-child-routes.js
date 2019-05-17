const components = require.context('./', true, /\.route.js$/);
let routes = [];
components.keys().forEach((key) => {
    let defines;
    try {
        defines = components(key).default;
    } catch (e) {
        throw Error(`${key}:${e}`);
    }
    if (defines === undefined || !Array.isArray(defines)) {
        throw Error(`${key}:内没有 export default 或者export default格式有误 `);
    }
    routes = [...routes, ...defines];
});
export default routes;
