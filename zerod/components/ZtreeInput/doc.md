# ZtreeInput 树编辑控件

1、inputType === "double"

<div class="z-demo-box" data-render="demo1" data-title="double"></div>

```jsx
import React from "react";
import { ZtreeInput } from "zerod";
class Myjavascript extends React.PureComponent {
	state = {
		tree: [],
	};
	treeChange = value => {
		this.setState({
			tree: value,
		});
	};
	render() {
		return (
			<div style={{ width: "500px" }}>
				<ZtreeInput value={this.state.tree} onChange={this.treeChange} />
			</div>
		);
	}
}
export default Myjavascript;
```

2、inputType === "single"

<div class="z-demo-box" data-render="demo2" data-title="single"></div>

```jsx
import React from "react";
import { ZtreeInput } from "zerod";
class Myjavascript extends React.PureComponent {
	state = {
		tree: [],
	};
	treeChange = value => {
		this.setState({
			tree: value,
		});
	};
	render() {
		return (
			<div style={{ width: "500px" }}>
				<ZtreeInput inputType="single" value={this.state.tree} onChange={this.treeChange} />
			</div>
		);
	}
}
export default Myjavascript;
```
3、multiple === false

<div class="z-demo-box" data-render="demo3" data-title="multiple === false"></div>

```jsx
import React from "react";
import { ZtreeInput } from "zerod";
class Myjavascript extends React.PureComponent {
	state = {
		tree: [],
	};
	treeChange = value => {
		this.setState({
			tree: value,
		});
	};
	render() {
		return (
			<div style={{ width: "500px" }}>
				<ZtreeInput multiple={false} value={this.state.tree} onChange={this.treeChange} />
			</div>
		);
	}
}
export default Myjavascript;
```

## ZtreeInput 的 props

可追 `className`

| 参数      | 说明                                                                         | 类型                | 默认值 |
| --------- | ---------------------------------------------------------------------------- | ------------------- | ------ |
| inputType | 输入框类型                                                                   | single \| double    | double |
| value     | tree 数据, array[{label,value,children}]                                     | array               | []     |
| onChange  | 新增兄弟节点、上移、下移、移除、新增子节点、输入框取消聚焦 都会触发 onChange | function(newTree){} | --     |
| multiple  | 是否多级节点，如为 false, value 里是不存在 children 的                       | boolean             | true   |
