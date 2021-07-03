<!-- @routePath: /component-doc/ZlabelInput-doc -->
# label+value输入框：ZlabelInput

`ZlabelInput` 有两个输入框组成，得到的值如 {label:"男",value:"1"}

```jsx

/**
 * @renderMode: inline
 * @componentName: ZlabelInputDemo
 * @description: ZlabelInput基本使用的示例
 * @title: ZlabelInput
 */
import React from 'react';
import { ZlabelInput } from 'zerod';

export default class Myjavascript extends React.PureComponent {
	state = {
		labelValue: null,
	};
	onChange = (value, e) => {
		this.setState({
			labelValue: value,
		});
	};
	render() {
		return (
			<ZlabelInput
				labelPlaceholder="请输入label"
				valuePlaceholder="请输入value"
				value={this.state.labelValue}
				onChange={this.onChange}
				style={{ width: "300px" }}
			/>
		);
	}
}
```

## ZlabelInput 的 props

可追加`className`、`style`

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| value           | 两个输入框的值，{label:"",value:""}                                                   | object          | --         |
| onChange        | 输入框内容变化时的回调                                                                | (value,e)=>{}    | --         |
| labelPlaceholder | label输入框没有值时显示的内容                                                        | string          | --         |
| valuePlaceholder | value输入框没有值时显示的内容                                                        | string          | --         |
| disabled        | 是否禁用状态，默认false                                                               | boolean         | false      |
| labelSpan       | label输入框占总宽度的格数 1~24                                                        | number          | 10         |
| valueSpan       | value输入框占总宽度的格数 1~24                                                        | number          | 14         |
| size            | 输入框的尺寸                                                                          | default \| small \| large | default           |
| sync            | 是否label输入和value输入同步                                                          | boolean         | false      |
