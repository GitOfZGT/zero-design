<div class="z-doc-titles"></div>

# 根组件：ZappHOC

`ZappHOC`是一个函数，是对根组件内容封装，传入`pageConfig`参数配置，返回一个组件

在`zerod-admin-webpack 脚手架`的`src/App.jsx`已经使用,只有使用了`ZappHOC`后，它内部的子孙组件才能使用`ZerodRootContext`的内容

1、在`src/App.jsx`使用

```jsx
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
			exact: false, //是否精准匹配
		},
		{
			redirect: true, //重定向
			path: "/",
			to: "/main/start-doc",
		},
		{
			redirect: true,
			path: "/main", //重定向
			to: "/main/start-doc",
		},
	],
	footerLinks: null,
	footerCopyright: null,
};
export default ZappHOC(pageConfig);
```

<div class="z-doc-titles"></div>

## pageConfig

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>routerType</td>
			<td>路由模式</td>
			<td>history | hash</td>
			<td>history</td>
		</tr>
		<tr>
			<td>rootRoutes</td>
			<td>根路由配置,结构请看上面的代码</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>footerLinks</td>
			<td>用于覆盖ZpageWraperHOC默认的footerLinks，结构请查看ZpageFooter的links</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>footerCopyright</td>
			<td>用于覆盖ZpageWraperHOC默认的footerCopyright，结构请查看ZpageFooter的copyright</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>responseKeys</td>
			<td>用于转义后台接口响应体数据的key，前提后台接口response响应体应该是 { code:状态码,data:数据,msg:提示信息 }, </td>
			<td>object</td>
			<td>--</td>
		</tr>
	</tbody>
</table>


<div class="z-doc-titles"></div>

## pageConfig.responseKeys

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>listType</td>
			<td>列表类型的响应体key，默认{
				list: "list",
				totalCount: "totalCount",
				totalPage: "totalPage",
			}</td>
			<td>object</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
