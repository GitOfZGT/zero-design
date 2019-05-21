# ZtreeInput 树编辑控件

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZtreeInput } from "zerod";
class Myjavascript extends React.PureComponent {
	state = {
		tree: [],
	};
	treeChange = (value) => {
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

## ZtreeInput 的 props

可追 `className`

| 参数     | 说明                                                                         | 类型                | 默认值 |
| -------- | ---------------------------------------------------------------------------- | ------------------- | ------ |
| value    | tree 数据, array[{label,value,children}]                                     | array               | []     |
| onChange | 新增兄弟节点、上移、下移、移除、新增子节点、输入框取消聚焦 都会触发 onChange | function(newTree){} | --     |
| multiple | 是否多级节点，如为 false, value 里是不存在 children 的                       | boolean             | true   |
