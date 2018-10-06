# ZerodMainContext

在`ZmainHOC`中启用了`ZerodMainContext`的上文，通过`ZerodMainContext.setConsumer(组件)`包装的组件，可以使用`this.props`调用以下东西：

## 打开右边窗口: showRightModal()

showRightModal 函数有四个参数，`show`:是否显示，`modal`: "mainModal" | "appModal" | "mainModal_top" | "appModal_top"，`content`：窗口的内容，`scroll`：窗口内是否启用滚动条,`onTransitionend`:打开关闭的过渡动画执行完后的回调

`modal`属性层级："appModal_top" > "appModal" > "mainModal_top" > "mainModal"

2018-10-01 `modal`属性新增 "mainModal_top"和"appModal_top"值

2018-08-22 新增`onTransitionend `属性，以后可能还会有其他参数，为了向下兼容，还可以这样

```jsx
this.props.showRightModal({
	show: true,
	modal: "mainModal",
	content: null,
	scroll: true,
	onTransitionend: (show) => {},
});
```

<div class="z-demo-box" data-render="open-modal" data-title="关闭窗口只需两个参数 this.props.showRightModal (false,'mainModal')"></div>

```jsx
import React from "react";
import { Button } from "antd";
import { ZerodMainContext } from "zerod";
class OpenModal extends React.Component {
	methods = {
		openMainModal: (e) => {
			this.props.showRightModal(
				true,
				"mainModal",
				<div className="z-panel">
					<div className="z-panel-heading">标题</div>
					<div className="z-panel-heading">main子路由位置的右边窗口</div>
				</div>,
			);
		},
		openAppModal: (e) => {
			this.props.showRightModal(
				true,
				"appModal",
				<div className="z-panel">
					<div className="z-panel-heading">标题</div>
					<div className="z-panel-heading">最外边的右边窗口</div>
				</div>,
			);
		},
	};
	render() {
		return (
			<div>
				<Button type="dashed" className="z-open-modal-btn" onClick={this.methods.openMainModal}>
					打开main子路由位置的右边窗口
				</Button>

				<Button type="dashed" className="z-open-modal-btn z-margin-left-20" onClick={this.methods.openAppModal}>
					打开最外边的右边窗口
				</Button>
			</div>
		);
	}
}
const OutPut = ZerodMainContext.setConsumer(OpenModal);
```

## 显示主页路由区域loading: showRouteLoading()

showRouteLoading 函数有一个参数，`show`:是否显示

<div class="z-demo-box" data-render="route-loading" data-title="this.props.showRouteLoading(true)"></div>

```jsx
class MyScript extends React.Component {
	methods = {
		showRouteLoading: (e) => {
			this.props.showRouteLoading(true);
			setTimeout(() => {
				this.props.showRouteLoading(false);
			}, 2000);
		},
	};
	render() {
		return (
			<div>
				<Button type="primary" className="z-show-loading-btn" onClick={this.methods.showRouteLoading}>
					显示路由位置的loading
				</Button>
			</div>
		);
	}
}
const OutPut = ZerodMainContext.setConsumer(MyScript);
return <OutPut />;
```

## 显示右边窗口loading:  showModalLoading()

showModalLoading 函数有两个参数，`show`:是否显示，`modal`: "mainModal" | "appModal" | "mainModal_top" | "appModal_top"

<div class="z-demo-box" data-render="modal-loading" data-title="this.props.showModalLoading(true, modal);"></div>

```jsx
class MyScript extends React.Component {
	methods = {
		showModalLoading: (e, modal) => {
			this.props.showRightModal(true, modal);
			this.props.showModalLoading(true, modal);
			setTimeout(() => {
				this.props.showModalLoading(false, modal);
			}, 2000);
		},
	};
	render() {
		return (
			<div>
				<Button
					type="primary"
					className="z-show-loading-btn"
					onClick={(e) => {
						this.methods.showModalLoading(e, "mainModal");
					}}
				>
					显示 mainModal 的loading
				</Button>
				<Button
					type="primary"
					className="z-show-loading-btn"
					onClick={(e) => {
						this.methods.showModalLoading(e, "mainModal_top");
					}}
				>
					显示 mainModal_top 的loading
				</Button>
				<Button
					type="primary"
					className="z-show-loading-btn z-margin-left-20"
					onClick={(e) => {
						this.methods.showModalLoading(e, "appModal");
					}}
				>
					显示 appModal 的loading
				</Button>
				<Button
					type="primary"
					className="z-show-loading-btn z-margin-left-20"
					onClick={(e) => {
						this.methods.showModalLoading(e, "appModal_top");
					}}
				>
					显示 appModal_top 的loading
				</Button>
			</div>
		);
	}
}
const OutPut = ZerodMainContext.setConsumer(MyScript);
return <OutPut />;
```

## 获取左边导航栏数据: getSideMenuData()

getSideMenuData()返回的是一个数组

## 下次滚动条更新的时候，让滚动条回到顶部: setScrollToTop()

setScrollToTop 函数有一个参数，`witch`:哪个地方滚动条更新: "mainRoute" | "mainModal" | "appModal"

## 获取用户登录信息: getUserInfo()

ZmainHOC 的 componentDidMount 钩子中的 callback 函数注入的 userInfo 数据，可以通过 getUserInfo()获得


## 临时存储器: setTemporaryStorage(data)  和 getTemporaryStorage()

setTemporaryStorage(data)用于跨页面临时存储一些数据，data参数是一个对象：{"key":"存储的数据"}；getTemporaryStorage()获取当前存储器的数据

## $router

$router:是一个对象，提供history和location属性
