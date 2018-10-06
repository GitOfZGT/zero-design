# 右边窗口：ZrightModal

`ZrightModal`是从右边弹出的一种窗口模式，可以减少多层路由跳转的一种交互方式

如果是使用`ZmainHOC`实现了主页布局，基本上不再需要单独使用`ZrightModal`，请查看 上下文的`ZerodMainContext`

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="以下是截取了`ZmainHOC `中使用`Zlayout.Zbody + ZrightModal`的部分代码展示"></div>

```jsx
<Zlayout.Zbody
	className={`${cssClass["z-main-body"]} z-scroll-color app-body`}
	scroll
	getScrollInstance={(instance) => (this.mainBodyScrollInstance = instance)}
	insertToScrollWraper={
		<Zlayout.Template>
			<ZpageLoading showLoading={this.state.isShowLoading} />
			<ZrightModal
				show={this.state.isShowRightModal}//打开modal的状态
				scroll //启用滚动条
				getScrollInstance={(instance) => (this.rightBodyScrollInstance = instance)}//获取滚动条实例
				showLoading={this.state.isShowModalLoading} //显示loading的状态
				onClose={() => {
					this.methods.showRightModal(false);//关闭modal
				}}
				onTransitionend={this.methods.afterModalTransitionend}//modal过渡动画执行完之后
			>
				{this.state.rightModalContent}
			</ZrightModal>
		</Zlayout.Template>
	}
>
	<section>
		<Switch>{this.navRoutes}</Switch>
	</section>
</Zlayout.Zbody>
```

## ZrightModal 的 props

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
			<td>children</td>
			<td>即this.props.children</td>
			<td>any</td>
			<td>--</td>
		</tr>
		<tr>
			<td>show</td>
			<td>是否打开ZrightModal</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
		<tr>
			<td>width</td>
			<td>窗口宽度</td>
			<td>string</td>
			<td>90%</td>
		</tr>
		<tr>
			<td>zIndex</td>
			<td>层级</td>
			<td>number</td>
			<td>999</td>
		</tr>
		<tr>
			<td>onClose</td>
			<td>点击关闭按钮的事件，()=>{}</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showLoading</td>
			<td>是否显示loading</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
		<tr>
			<td>scroll</td>
			<td>是否启用滚动条</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
		<tr>
			<td>getScrollInstance</td>
			<td>获取滚动条的实例，scroll=true时有效</td>
			<td>function</td>
			<td>--</td>
		</tr>
        <tr>
			<td>onTransitionend</td>
			<td>当打开或关闭ZrightModal的过渡动画完成后执行的钩子</td>
			<td>function</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
