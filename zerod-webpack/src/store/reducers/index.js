const components = require.context("./", true, /\.mutation.js$/);
let mutations = {};
const names = [];
components.keys().forEach((key) => {
	let defines = undefined;
	try {
		defines = components(key).default;
	} catch (e) {
		throw Error(`${key}:${e}`);
	}
	if (defines === undefined || typeof defines !== "object") {
		throw Error(`${key}:内没有 export default 或者export default格式有误 `);
	}
	else if (typeof defines.mutations != "object") {
		throw Error(`${key}:缺少mutations属性或mutations属性不是对象`);
	}
	let name = defines.name;
	if (typeof name != "string") {
		throw Error(`${key}:缺少name属性`);
	}
	name=name.trim();
	if (names.includes(name)) {
		throw Error(`${key}:${name}此name已被使用`);
	} else {
		names.push(name);
	}
	mutations[name] = defines.mutations;
});

const initialState = {};

function reducers(state = initialState, action) {
	if (typeof action.type === "string" && /^\w+\.\w+$/.test(action.type)) {
		const namespace = action.type.split(".");
		return mutations[namespace[0]][namespace[1]](state, action);
	} else {
		return state;
	}
}
export default reducers;
