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

3、自定义输入框等 : inputType === coustom

<div class="z-demo-box" data-render="demo4" data-title="inputType === coustom"></div>

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
				<ZtreeInput
					multiple={false}
					value={this.state.tree}
					onChange={this.treeChange}
					customInputKeys={[
						{ key: "left", initValue: "" },
						{ key: "center", initValue: "" },
						{ key: "right", initValue: 0 },
					]}
				>
					{(states, setStates, customInputKeys) => {
						return (
							<InputGroup compact style={{ width: "100%" }}>
								<Select
									value={states[customInputKeys[0].key]}
									onChange={val => {
										setStates({
											[customInputKeys[0].key]: val,
										});
									}}
									style={{
										width: "30%",
									}}
									size="small"
								>
									<Option value="Option1">Option1</Option>
									<Option value="Option2">Option2</Option>
								</Select>
								<Input
									style={{ width: "50%" }}
									value={states[customInputKeys[1].key]}
									onChange={e => {
										setStates({
											[customInputKeys[1].key]: e.target.value,
										});
									}}
									size="small"
								/>
								<InputNumber
									value={states[customInputKeys[2].key]}
									onChange={val => {
										setStates({
											[customInputKeys[2].key]: val,
										});
									}}
									style={{
										width: "20%",
									}}
									size="small"
								/>
							</InputGroup>
						);
					}}
				</ZtreeInput>
			</div>
		);
	}
}
export default Myjavascript;
```

## ZtreeInput 的 props

可追 `className`

| 参数            | 说明                                                                                                                                                                                                           | 类型                        | 默认值                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------- |
| inputType       | 输入框类型 ，当 "coustom"时 ，通过 ZtreeInput 的 children 必须是 (state,setState,customInputKeys)=>{ return 自定义 }来实现自定义，state：一个对应 customInputKeys 的 key 的状态对象，setState： 更新状态的方法 | single \| double \| coustom | double                                                  |
| customInputKeys | 自定义输入框等的 key 名 和 initValue 初始值, 默认是 [{key:"label",initValue:""},{key:"value",initValue:""}]                                                                                                    | array                       | [{key:"label",initValue:""},{key:"value",initValue:""}] |
| value           | tree 数据, array[{children}] , 数据对象的属性除了 children , 其他属性对应 customInputKeys 的 key                                                                                                               | array                       | []                                                      |
| onChange        | 新增兄弟节点、上移、下移、移除、新增子节点、输入框取消聚焦 都会触发 onChange                                                                                                                                   | function(newTree){}         | --                                                      |
| multiple        | 是否多级节点，如为 false, value 里是不存在 children 的                                                                                                                                                         | boolean                     | true                                                    |
| toolTips        | 各个操作按钮的 tooltip 名称，默认{addSiblings:"添加兄弟节点",moveUp:"上移",moveDown:"下移",remove:"移除",addChild:"新增子节点"} ， 可修改单个名称：{addSiblings:"新增兄弟节点"}                                | object                      | --                                                      |
