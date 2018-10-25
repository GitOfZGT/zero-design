import lazyLoad from "@/lazyLoad/lazyLoad";
const component = lazyLoad(import("./"));

export default [
	{
		path: "/myBrother",
		component: component,
	},
];
