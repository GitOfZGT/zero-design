import lazyLoad from "@/lazyLoad/lazyLoad";
const Component = lazyLoad(()=>import("./"));

export default [
	{
		path: "/config/serviceWithTableList",
		component: Component,
	},
];
