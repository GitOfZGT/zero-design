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
			const amplify = this.ZfullLayerMethods.showLayer(
				true,
				() => {
					console.log("open");
				},
				true,
			);
			amplify();
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

| 参数          | 说明                                                            | 类型                | 默认值 |
| ------------- | --------------------------------------------------------------- | ------------------- | ------ |
| header        | 头部区域内容，高度有 64px                                       | ReactNode           | --     |
| children      | 主体区域内容                                                    | ReactNode           | --     |
| exportMethods | 在 componentDidMount 导出组件内部可调用的方法，methods 请往下看 | function(methods){} | --     |

## methods

| 参数        | 说明                                                                                                      | 使用                                     | 返回值类型 |
| ----------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| showLayer   | 显示/隐藏 ZfullLayer 的方法,当 isScale 为 true 时返回一个函数，调用这个函数主体内容会有一个放大的过渡动画 | methods.showLayer(show,callback,isScale) | --         |
| showLoading | 显示/隐藏 ZfullLayer 内部的 loading                                                                       | methods.showLoading(show)                | --         |
