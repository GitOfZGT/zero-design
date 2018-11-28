# 页面加载组件：ZpageLoading

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="相对于最近的position:relative;的父元素的绝对定位，水平垂直显示loading"></div>

```jsx
import React from "react";
import { ZpageLoading, Zlayout } from "zerod";
import { Button } from "antd";
class Myjavascript extends React.Component {
	state = {
		isShowLoading: false,
	};
	methods = {
		onClick: () => {
			this.setState({
				isShowLoading: true,
			});
			setTimeout(() => {
				this.setState({
					isShowLoading: false,
				});
			}, 5000);
		},
	};
	render() {
		return (
			<Zlayout.Template>
				<Button type="primary" onClick={this.methods.onClick}>
					显示loading
				</Button>
				<ZpageLoading showLoading={this.state.isShowLoading} />
			</Zlayout.Template>
		);
	}
}
```

## ZpageLoading 的 Props

除了如下属性，还支持 <a href="https://ant.design/components/spin-cn/">Antd 的 Spin组件的属性</a>

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
			<td>showLoading</td>
			<td>是否显示加载图标</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
	</tbody>
</table>
