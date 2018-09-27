# 页面头尾结构：ZpageWraperHOC

`ZpageWraperHOC`是一个函数(无参数)，返回一个页面头尾结构的组件(有参数)

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZpageWraperHOC } from "zerod";
const PageWraper = ZpageWraperHOC();
const pageHeader = {
	show: true,
	trademark: (
		<img
			src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
			width="60"
			className="z-margin-right-15"
		/>
	),
	// array>[object] | null,如果是null则不显示面包屑
	breadcrumbRoutes: [
		{ path: "config", name: "案例", link: false },
		{ path: "serviceWithTableList", name: "表格列表", link: true },
	],
	// any
	title: "服务器配置",
	//any
	content:
		"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",
	//element | node
	rightMoreContent: <div>右边内容</div>,
};

<PageWraper pageHeader={pageHeader}>
	<div className="z-panel">
		<div className="z-panel-body">中间内容</div>
	</div>
</PageWraper>;
```

## ZpageWraperHOC()返回组件的 Props

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
			<td>pageHeader</td>
			<td>页头内容,除了show属性(默认false)，其他属性同 组件/ZpageHeader的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>pageFooter</td>
			<td>页尾内容,除了show属性(默认true)，其他属性同 组件/pageFooter的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>hasBodyPadding</td>
			<td>中间部分是否有padding值</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
	</tbody>
</table>
