<!--
 * @Author: zgt
 * @Date: 2018-12-25 17:45:32
 * @LastEditors: zgt
 * @LastEditTime: 2019-08-15 16:02:04
 * @Description: file content
 -->

# 按钮：Zbutton （保留可用，完全就是 antd 的 Button）

之前考虑 button 在 Table 和 Tree 内渲染消耗性能很大(多数据情况下明显)，启用了 Zbutton 组件，但一次展示大量数据依然性能也同样不乐观，大量数据列表的渲染应该从数据角度处理，所以 Zbutton 的存在意义不大且没有 antd 的 Button 完善，所以 Zbutton 保留可用并且改用转发 antd 的 Button 而已（Zbutton就是Button），之后建议直接使用 Button

<del>`Zbutton` 与 `Antd 的 Button` 不同在于，`Zbutton`是 span 标签渲染的，这是因为在一些列表中渲染 button 标签，数据多的情况下消耗的性能巨大，如 Table、尤其在 Tree 当中，使用 span 标签明显有提升渲染性能。</del>

antd 的 Button 没有success类型的颜色， 当type==="primary"时可以加 className = "z-btn-success" 将按钮颜色改为success类型的

<div class="z-demo-box" data-render="demo2" data-title="z-btn-success"></div>

```jsx
import {Button} from 'antd'

<Button type="primary" className="z-btn-success">按钮</Button>
```

<!-- 1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
class Myjavascript extends ZpureComponent {
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
``` -->

<del>
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
</del>
