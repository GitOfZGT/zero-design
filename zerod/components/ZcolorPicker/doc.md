# 颜色选择器：ZcolorPicker

`ZcolorPicker`是一个颜色选择器控件，支持在`Form`、`Zform`等表单中使用

依赖 <a href="http://casesandberg.github.io/react-color/" target="_blank">react-color 库</a> ，目前只选用了`react-color`的`SketchPicker`组件

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZcolorPicker } from "zerod";
class Myjavascript extends React.Component {
	state = {
		color: "#FFFFFF",
	};
	colorChange = (value) => {
		console.log(value);
	};
	render() {
		return <ZcolorPicker value={this.state.state} onChange={this.colorChange} valueType="hex" />;
	}
}
```

## ZcolorPicker 的 props

可追加`className`

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
			<td>valueType</td>
			<td>颜色值类型,hex:十六进制模式，rgb：RGB模式(包括rgba)</td>
			<td>hex | rgb</td>
			<td>hex</td>
		</tr>
		<tr>
			<td>value</td>
			<td>颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>defaultValue</td>
			<td>第一次渲染的颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onChange</td>
			<td>颜色值改变后触发</td>
			<td>(value)=>{}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
