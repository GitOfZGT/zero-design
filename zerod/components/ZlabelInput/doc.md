# label+value输入框：ZlabelInput

`ZlabelInput` 有两个输入框组成，得到的值如 {label:"男",value:"1"}

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
class Myjavascript extends React.Component {
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
			<td>value</td>
			<td>两个输入框的值，{label:"",value:""}</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onChange</td>
			<td>输入框内容变化时的回调</td>
			<td>(value,e)=>{}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>labelPlaceholder</td>
			<td>label输入框没有值时显示的内容</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>valuePlaceholder</td>
			<td>value输入框没有值时显示的内容</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>disabled</td>
			<td>是否禁用状态，默认false</td>
			<td>boolean</td>
			<td>false</td>
		</tr>
		<tr>
			<td>labelSpan</td>
			<td>label输入框占总宽度的格数 1~24</td>
			<td>number</td>
			<td>10</td>
		</tr>
		<tr>
			<td>valueSpan</td>
			<td>value输入框占总宽度的格数 1~24</td>
			<td>number</td>
			<td>14</td>
		</tr>
	</tbody>
</table>
