# 标签页：Ztabs

`Ztabs`是将`antd`的`Tabs`、`Tabs.TabPane` 的结构转成数据结构直接渲染的方式，

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";import ZpureComponent from "zerod/components/ZpureComponent";
import { Ztabs } from "zerod";

class Myjavascript extends ZpureComponent {
	tabPanes = [
		{ tab: "基本信息", key: "1", content: "基本信息内容" },
		{ tab: "配置信息", key: "2", content: "配置信息内容" },
		{
			tab: "其他信息",
			key: "3",
			content: () => {
				return "其他内容";
			},
		},
	];
	render() {
		return <Ztabs tabPanes={this.tabPanes} />;
	}
}
```

## Ztabs 的 Props

`Ztabs`除了`tabPanes`参数，还有同<a href="https://ant.design/components/tabs-cn/">Antd 的 Tabs 组件的参数</a>

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
			<td>tabPanes</td>
			<td>选项卡数据，数据结构有{tab ：标签title，key:对应Antd的Tabs组件 activeKey，content：string | ()=>内容 }</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
