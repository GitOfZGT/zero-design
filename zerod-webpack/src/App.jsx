import React from "react";
import { ZappHOC } from "zerod";

// 路由组件
import lazyLoad from "@/lazyLoad/lazyLoad";
const Main = lazyLoad(()=>import("@/views/Main/"));
const pageConfig = {
	rootRoutes: [
		{
			path: "/main",
			component: Main,
		},
		{
			redirect: true,
			path: "/",
			to: "/main/home",
		},
		{
			redirect: true,
			path: "/main",
			to: "/main/home",
		},
	],
	footerLinks: null,
	footerCopyright: null,
};
export default ZappHOC(pageConfig);
