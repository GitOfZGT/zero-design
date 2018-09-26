# 左侧菜单组件：ZsideMenu

`ZsideMenu` 将`antd`的 `Menu`、`Menu.Item`、`Menu.SubMenu`转成数据结构直接渲染的方式

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZsideMenu } from "zerod";
const menus = [
	{
		path: "/start-doc",
		name: "开始",
		// iconClass: "",
	},
	{
		path: "/component-doc",
		name: "组件",
		children: [
			{
				path: "/ZcodeHighlight-doc",
				name: "代码高亮 : ZcodeHighlight",
				iconClass: "",
			},
		],
	},
	{
		path: "/config",
		name: "案例",
		children: [
			{
				path: "/serviceWithTableList",
				name: "表格列表",
				iconClass: "",
			},
		],
	},
];
<ZsideMenu menuData={menus} />;
```

### ZsideMenu Props

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
			<td>menuData</td>
			<td>菜单数据，每个对象的属性有iconClass：小图标、name、path：路由地址、若有子菜单，则还有children属性</td>
			<td>array[object]</td>
			<td>-</td>
		</tr>
		<tr>
			<td>collapsed</td>
			<td>是否折叠菜单</td>
			<td>boolean</td>
			<td>false</td>
		</tr>
        <tr>
			<td>theme</td>
			<td>菜单的主题 'light' | 'dark'</td>
			<td>string</td>
			<td>light</td>
		</tr>
        <tr>
			<td>openAllSubmenu</td>
			<td>是否展开所有二级菜单</td>
			<td>string</td>
			<td>light</td>
		</tr>
	</tbody>
</table>
