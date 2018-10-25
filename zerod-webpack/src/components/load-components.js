//自动加载index.jsx（组件文件）
//其导出的格式为
// export default {
// 	name: "Zbutton",
// 	component: Zbutton,
// };

const components = require.context("./", true, /index.jsx$/);
let loadCompoents = {};
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
	} else if (typeof defines.component != "function" && typeof defines.component != "object") {
		throw Error(`${key}:component有误`);
	}
	let name = defines.name;
	if (typeof name !== "string") {
		throw Error(`${key}:缺少name属性`);
	}
	name = name.trim();
	if (names.includes(name)) {
		throw Error(`${key}:${name}此组件名称已被使用`);
	} else {
		names.push(name);
	}
	//如果组件命名以A开头
	const mat = name.match(/^(A)/);
	if (mat && mat.index === 0) {
		loadCompoents[name] = defines.component;
	} else {
		throw Error(`${key}:组件命名请以'A'开头`);
	}
});
export default loadCompoents;
