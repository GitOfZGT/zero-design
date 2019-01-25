# 浮层窗口：ZfullLayer

ZfullLayer 是一个背景黑色半透的覆盖在整个文档之上的窗口组件，分 header 和 children 两个内容区域

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title=""></div>

```jsx
import React from "react";
import { Button } from "antd";
import ZfullLayer from "zerod/components/ZfullLayer";
class Header extends React.PureComponent {
	render() {
		return (
			<div className="z-padding-left-20 z-flex-items-center" style={{ height: "100%" }}>
				<div>
					<Button type="primary">按钮</Button>
				</div>
			</div>
		);
	}
}
class Myjavascript extends React.PureComponent {
	methods = {
		open: () => {
			this.ZfullLayerMethods.showLayer(true, () => {
				console.log("open");
			});
		},
	};
	exportMethods = (m) => {
		this.ZfullLayerMethods = m;
	};
	render() {
		return (
			<div>
				<div className="z-panel">
					<div className="z-panel-body">
						<Button type="primary" onClick={this.methods.open}>
							打开ZfullLayer
						</Button>
					</div>
				</div>
				<ZfullLayer header={<Header />} exportMethods={this.exportMethods}>
					<div className="z-panel" style={{ width: "90%", margin: "0 auto" }}>
						<div className="z-panel-heading">面板标题</div>
						<div className="z-panel-body">内容</div>
					</div>
				</ZfullLayer>
			</div>
		);
	}
}
```

## ZfullLayer 的 props

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
			<td>header</td>
			<td>头部区域内容，高度有64px</td>
			<td>ReactNode</td>
			<td>--</td>
		</tr>
		<tr>
			<td>children</td>
			<td>主体区域内容</td>
			<td>ReactNode</td>
			<td>--</td>
		</tr>
		<tr>
			<td>exportMethods</td>
			<td>提供内部方法的钩子,methods是一个对象，具体看下面</td>
			<td>function(methods){}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## methods

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>使用</th>
			<th>返回值类型</th>
		</tr>
	</thead>
	<tbody>
    	<tr>
			<td>showLayer</td>
			<td>显示/隐藏ZfullLayer的方法</td>
			<td>methods.showLayer(show,callback)</td>
			<td>--</td>
		</tr>
    	<tr>
			<td>showLoading</td>
			<td>显示/隐藏ZfullLayer内部的loading</td>
			<td>methods.showLoading(show)</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
