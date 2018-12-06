# 页面头尾结构：ZpageWrapper

`ZpageWrapper`是由之前的`ZpageWraperHOC`改名而来，等效于`ZpageWraperHOC()`，是一个页面头尾结构的普通组件；之前的`ZpageWraperHOC`依然可用。

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

## ZpageWrapper 的 Props

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
			<td>页头内容,除了show属性(默认false)，其他属性同 <span class="z-history-href" data-path="/main/component-doc/ZpageHeader-doc">组件/ZpageHeader</span> 的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>pageFooter</td>
			<td>页尾内容,除了show属性(默认true)，其他属性同 <span class="z-history-href" data-path="/main/component-doc/ZpageFooter-doc">组件/pageFooter</span> 的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>hasBodyPadding</td>
			<td>中间部分是否有padding值</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>showBreadcrumb</td>
			<td>是否显示pageHeader面包屑</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>titleFromLasterBreadcrumb</td>
			<td>pageHeader的title是否来自面包屑的最后一个名称</td>
			<td>boolean</td>
			<td>false</td>
		</tr>
	</tbody>
</table>
