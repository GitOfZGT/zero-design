# 级联选择: Zcascader

`Zcascader`是一个级联选择组件，通常做地区级联。

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="地区树方式"></div>

```jsx
import React from "react";
import { message } from "antd";
import { Zcascader } from "zerod";
class Myjavascript extends React.Component {
	methods = {
		onSelect: (items) => {
			let names = items.map((item) => {
				return item.name;
			});
			message.success(`您选择了${names.join("-")}`);
		},
	};
	render() {
		return (
			<Zcascader
				tree={area.data}
				itemKeys={{ name: "name", id: "areaId", disabled: "disable", children: "children" }}
				selections={["1710121748130980000000166"]}
				onSelect={this.methods.onSelect}
			/>
		);
	}
}
```

1、异步加载

<div class="z-demo-box" data-render="demo2" data-title="异步加载下一级"></div>

```jsx
import React from "react";
import { message } from "antd";
import { Zcascader } from "zerod";
class Myjavascript extends React.Component {
	methods = {
		onSelect: (items) => {
			let names = items.map((item) => {
				return item.name;
			});
			message.success(`您选择了${names.join("-")}`);
		},
		treeAsync: (data, resolve) => {
			if (data.root) {
				setTimeout(() => {
					resolve(area.data);
				}, 500);
			} else if (data.children && data.children.length) {
				setTimeout(() => {
					resolve(data.children);
				}, 500);
			} else {
				resolve([]);
			}
		},
	};
	render() {
		return (
			<Zcascader
				treeAsync={this.methods.treeAsync}
				itemKeys={{ name: "name", id: "areaId", disabled: "disable", children: "children" }}
				selections={["1710121748130980000000166"]}
				onSelect={this.methods.onSelect}
			/>
		);
	}
}
```

## Zcascader 的 props

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
			<td>tree</td>
			<td>级联树数据，非treeAsync下有效, (请使用变量缓存所需设置的值而非直接使用字面量)</td>
			<td>array[object]</td>
			<td>[]</td>
		</tr>
		<tr>
			<td>lables</td>
			<td>对应每一级的label</td>
			<td>array[string]</td>
			<td>["省", "市", "区/县", "街道/镇", "村"]</td>
		</tr>
        <tr>
			<td>itemKeys</td>
			<td>定义tree的key对象，默认：{ name: "name", id: "id", disabled: "disabled", children: "children" }</td>
			<td>object</td>
			<td>--</td>
		</tr>
        <tr>
			<td>selections</td>
			<td>默认已选择的每一级选项的ids，如 默认选择 广东省：["1710121748130980000000166"], (请使用变量缓存所需设置的值而非直接使用字面量)</td>
			<td>array[string]</td>
			<td>--</td>
		</tr>
		 <tr>
			<td>onSelect</td>
			<td>点击选项的回调</td>
			<td>function(selectItems){}</td>
			<td>--</td>
		</tr>
		 <tr>
			<td>treeAsync</td>
			<td>异步加载选项函数,有两个参数，data:当前选项的数据，resolve:加载下一级的钩子resolve([下一级的所有选项]])</td>
			<td>function(data,resolve){}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
