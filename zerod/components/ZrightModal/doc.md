<!-- @routePath:/component-doc/ZrightModal-doc -->
# 右抽屉窗口：ZrightModal

`ZrightModal`是从右边弹出的一种窗口模式，可以减少多层路由跳转的一种交互方式

如果是使用`ZmainHOC`实现了主页布局，基本上不再需要单独使用`ZrightModal`，请查看 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">上下文的`ZerodMainContext`</span>  

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
				show={this.state.isShowRightModal} //打开modal的状态
				scroll //启用滚动条
				getScrollInstance={(instance) => (this.rightBodyScrollInstance = instance)} //获取滚动条实例
				showLoading={this.state.isShowModalLoading} //显示loading的状态
				onClose={() => {
					this.methods.showRightModal(false); //关闭modal
				}}
				onTransitionend={this.methods.afterModalTransitionend} //modal过渡动画执行完之后
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

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| children        | 即this.props.children                                                                | any             | --         |
| show            | 是否打开ZrightModal                                                                  | boolean         | --         |
| width           | 窗口宽度                                                                             | string          | 90%        |
| zIndex          | 层级                                                                                 | number          | 999        |
| onClose         | 点击关闭按钮的事件，()=>{}                                                            | boolean         | --         |
| showLoading     | 是否显示loading , 可以不使用这个属性，通过 ref 取得 ZpageLoading 的实例调用 methods.showLoading(show) ,也可以用 exportMethods 导出的参数调用  | boolean  | --         |
| scroll          | 是否启用滚动条                                                                        | boolean         | --         |
| getScrollInstance | 获取滚动条的实例，scroll=true时有效                                                  | function       | --         |
| onTransitionend | 当打开或关闭ZrightModal的过渡动画完成后执行的钩子                                       | function        | --         |
| exportMethods   | 在 componentDidMount 导出组件内部可调用的方法，methods 请往下看                         | function(methods){} | --         |

## ZrightModal 的 methods

| 参数        | 说明                                           | 使用                      | 返回值类型 |
| ----------- | ---------------------------------------------- | ------------------------- | ---------- |
| showLoading | ZpageLoading 在没有 showLoading 属性情况下使用 | methods.showLoading(show) | --         |
