import lazyLoad from "@/lazyLoad/lazyLoad";
const Home = lazyLoad(()=>import("./"));

export default [
	{
		path: "/home",
		component: Home,
	},
];
