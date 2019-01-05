
# 按钮：Zbutton

`Zbutton` 与 `Antd 的 Button` 不同在于，`Zbutton`是 span 标签渲染的，这是因为在一些列表中渲染 button 标签，数据多的情况下消耗的性能巨大，如 Table、尤其在 Tree 当中，使用 span 标签明显有提升渲染性能。

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
class Myjavascript extends React.PureComponent {
	render() {
		return (
			<span>
				<Zbutton type="default">default</Zbutton>
				<Zbutton type="primary">primary</Zbutton>
				<Zbutton type="success">success</Zbutton>
				<Zbutton type="danger">danger</Zbutton>
				<Zbutton type="danger" disabled>
					disabled
				</Zbutton>
				<Zbutton type="default" size="small">
					default
				</Zbutton>
				<Zbutton type="primary" size="small">
					primary
				</Zbutton>
				<Zbutton type="success" size="small">
					success
				</Zbutton>
				<Zbutton type="danger" size="small">
					danger
				</Zbutton>
			</span>
		);
	}
}
```

## Zbutton 的 props

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
			<td>type</td>
			<td>default | primary | success | danger</td>
			<td>string</td>
			<td>default</td>
		</tr>
		<tr>
			<td>size</td>
			<td>normal | small</td>
			<td>string</td>
			<td>normal</td>
		</tr>
		<tr>
			<td>onClick</td>
			<td>点击事件</td>
			<td>function</td>
			<td>--</td>
		</tr>
		<tr>
			<td>disabled</td>
			<td>禁用状态</td>
			<td>boolean</td>
			<td>false</td>
		</tr>
	</tbody>
</table>
