# 页面头部组件：ZpageHeader

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZpageHeader } from "zerod";
import { Icon } from "antd";

class PageHeader extends React.Component {
	pageHeader = {
		trademark: <Icon type="cloud" />,
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
	render() {
		return (
			<ZpageHeader
				trademark={this.pageHeader.trademark}
				title={this.pageHeader.title}
				content={this.pageHeader.content}
				rightMoreContent={this.pageHeader.rightMoreContent}
				breadcrumbRoutes={this.pageHeader.breadcrumbRoutes}
			/>
		);
	}
}

export default PageHeader;
```

1、追加更多内容

<div class="z-demo-box" data-render="demo2" data-title="使用children属性"></div>

```jsx
import React from "react";
import { ZpageHeader } from "zerod";
import { Icon } from "antd";

class PageHeader extends React.Component {
	tabPanes = [
		{ tab: "基本信息", key: "1", content: null },
		{ tab: "配置信息", key: "2", content: null },
		{
			tab: "其他信息",
			key: "3",
			content: null,
		},
	];
	pageHeader = {
		trademark: <Icon type="cloud" />,
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
		children: () => {
			return <Ztabs tabPanes={this.tabPanes} />;
		},
	};

	render() {
		return <ZpageHeader {...this.pageHeader} />;
	}
}

export default PageHeader;
```

## ZpageHeader 的 Props

可追加`className`、`style`

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
			<td>trademark</td>
			<td>图标|图示</td>
			<td>any</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> title</td>
			<td>头部标题</td>
			<td>any</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> content</td>
			<td>头部描述说明</td>
			<td>any</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> rightMoreContent</td>
			<td>标题列的右边可添加更多内容</td>
			<td>React.element | function | ReactNode</td>
			<td>--</td>
		</tr>
        <tr>
			<td>breadcrumbParams</td>
			<td>面包屑路由参数</td>
			<td>any</td>
			<td>--</td>
		</tr>
        <tr>
			<td>breadcrumbRoutes</td>
			<td>面包屑routes，每个对象包括path、name、link等属性</td>
			<td>array>[object] | null</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> children</td>
			<td>更多内容</td>
			<td>any | function(){return 内容}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
