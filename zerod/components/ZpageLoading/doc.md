# 页面加载组件：ZpageLoading

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="相对于最近的position:relative;的父元素的绝对定位，水平垂直显示loading"></div>

```jsx
import React from "react";
import ZpureComponent from "zerod/components/ZpureComponent";
import { ZpageLoading, Zlayout } from "zerod";
import { Button } from "antd";
class Myjavascript extends ZpureComponent {
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

除了如下属性，还支持 [Antd 的 Spin 组件的属性](https://ant.design/components/spin-cn/)

| 参数          | 说明                                                                                                                                | 类型                | 默认值 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------ |
| showLoading   | 是否显示 , 可以不使用这个属性，通过 ref 取得 ZpageLoading 的实例调用 .methods.showLoading(show) ,也可以用 exportMethods 导出的参数调用 | boolean             | --     |
| exportMethods | 在 componentDidMount 导出组件内部可调用的方法，methods 请往下看                                                                     | function(methods){} | --     |

## ZpageLoading 的 methods

| 参数        | 说明                                           | 使用                      | 返回值类型 |
| ----------- | ---------------------------------------------- | ------------------------- | ---------- |
| showLoading | ZpageLoading 在没有 showLoading 属性情况下使用 | methods.showLoading(show) | --         |
