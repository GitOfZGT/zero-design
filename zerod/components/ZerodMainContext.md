# ZerodMainContext

在`ZmainHOC`中启用了`ZerodMainContext`的上文，通过`ZerodMainContext.setConsumer(组件)`包装的组件，可以使用`this.props`调用以下东西：

<div class="z-doc-titles"></div>

## 打开右边窗口: showRightModal()

showRightModal 函数有四个参数，`show`:是否显示，`modal`: "mainModal" | "appModal" | "mainModal_top" | "appModal_top"，`content`：窗口的内容，`scroll`：窗口内是否启用滚动条,`onTransitionend`:打开关闭的过渡动画执行完后的回调

`modal`属性层级："appModal_top" > "appModal" > "mainModal_top" > "mainModal"

2018-10-01 `modal`属性新增 "mainModal_top"和"appModal_top"值

2018-08-22 新增`onTransitionend`属性，以后可能还会有其他参数，为了向下兼容，还可以这样

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

<div class="z-doc-titles"></div>

## 显示主页路由区域 loading: showRouteLoading()

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

<div class="z-doc-titles"></div>

## 显示右边窗口 loading: showModalLoading()

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

<div class="z-doc-titles"></div>

## 获取左边导航栏数据: getSideMenuData()

getSideMenuData()返回的是一个数组

## 获取滚动条的实例：getScrollInstance(witch)

getScrollInstance 函数有一个参数，`witch`:哪个地方的滚动条: "mainRoute" | "mainModal" | "mainModal_top" | "appModal" | "appModal_top"

<div class="z-doc-titles"></div>

## 获取某个dom元素所在的位置：getInsertLocation(el)

`const insertLocaltion = this.props.getInsertLocation(el); ` 返回值`insertLocaltion`是 "mainRoute" | "mainModal" | "mainModal_top" | "appModal" | "appModal_top" 中的其中一个

使用例子可参考如下的 getScrollAreaWrapperEl 中 demo 的代码 

<div class="z-doc-titles"></div>

## 获取滚动条区域的包裹元素：getScrollAreaWrapperEl(witch)

getScrollAreaWrapperEl 函数有一个参数，`witch`:哪个地方的滚动条: "mainRoute" | "mainModal" | "mainModal_top" | "appModal" | "appModal_top"

当需要某块内容绝对定位于主要内容之上，但不想受滚动条滚动时，可用这函数获取对应得`wrapperEl`，然后使用`ReactDOM.createPortal(内容, wrapperEl)`将内容插入到`wrapperEl`内

### const obj= this.props.getScrollAreaWrapperEl("mainModal")

### obj.wrapperEl : 滚动条区域的包裹元素

### obj.methods

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>用法</th>
		</tr>
	</thead>
	<tbody>
    	<tr>
			<td>setScrollAreaStyle</td>
			<td>设置滚动区域的style</td>
			<td>obj.methods.setScrollAreaStyle({height:"calc(100% - 60px)"})</td>
		</tr>
    	<tr>
			<td>setScrollAreaClassName</td>
			<td>设置滚动区域的className</td>
			<td>obj.methods.setScrollAreaClassName(`z-margin-10 z-flex`})</td>
		</tr>
    	<tr>
			<td>resetScrollArea</td>
			<td>恢复到调用 setScrollAreaStyle 或 setScrollAreaClassName 之前的样式</td>
			<td>obj.methods.resetScrollArea()</td>
		</tr>
	</tbody>
</table>

<div class="z-demo-box" data-render="myWrapperDemo" data-title="例如：使用ZeditSimpleFormHOC时，在pageCofig的panelAfterRender放入了如下代码的组件"></div>

```jsx
import React from "react";
import ReactDom from "react-dom";
import { ZerodMainContext } from "zerod";
class MoreCofig extends React.Component {
	componentDidMount() {
		// 首先得获取this.boxEl元素所在得位置
		const insetLocaltion = this.props.getInsertLocation(this.boxEl);
		// 获取insetLocaltion所在滚动区域得包裹元素
        this.obj = this.props.getScrollAreaWrapperEl(insetLocaltion);
		// 由于将 100px 高度的内容插入到滚动区域外边，
		// 需要将 滚动区域 的高度设置为`calc(100% - 100px)`
		this.obj.methods.setScrollAreaStyle({
			height: `calc(100% - 100px)`,
		});
        this.setState({});
	}
	componentWillUnmount() {
		// 组件销毁前 恢复 滚动区域的原始样式
		this.obj.methods.resetScrollArea();
	}
	render() {
		return (
			<div className="z-panel z-margin-top-20" ref={(el) => (this.boxEl = el)}>
				<div className="z-panel-body">panelAfterRender</div>
				{/* 将如下的内容插入到了 滚动条区域外面 不受滚动条影响 */}
				{this.obj
					? ReactDom.createPortal(
							<div
								style={{
									position: "absolute",
									bottom: "0px",
									width: "100%",
									height: "100px",
									backgroundColor: "white",
									borderTop: "1px solid #ddd",
								}}
							>
								内容
							</div>,
							this.obj.wrapperEl,
					  )
					: null}
			</div>
		);
	}
}
export default ZerodMainContext.setConsumer(MoreCofig);

```

## 下次滚动条更新的时候，让滚动条回到顶部: setScrollToTop(witch)

setScrollToTop 函数有一个参数，`witch`:哪个地方滚动条更新: "mainRoute" | "mainModal" | "mainModal_top" | "appModal" | "appModal_top"

<div class="z-doc-titles"></div>

## 获取用户登录信息: getUserInfo()

ZmainHOC 的 componentDidMount 钩子中的 callback 函数注入的 userInfo 数据，可以通过 getUserInfo()获得

## 临时存储器: setTemporaryStorage(data) 和 getTemporaryStorage()

setTemporaryStorage(data)用于跨路由页面临时存储一些数据，data 参数是一个对象：{"key":"存储的数据"}；getTemporaryStorage()获取当前存储器的数据

## $router

$router:是一个对象，提供 history 和 location 属性
