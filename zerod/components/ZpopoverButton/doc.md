<div class="z-doc-titles"></div>

# 自带浮层按钮：ZpopoverButton

ZpopoverButton 默认有一个按钮，自带 popover，左键和右键都会打开 popover，也可以是嵌入自定义按钮（必须是 ReactNode，且支持 onClick,style,disabled 等属性）

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title=""></div>

```jsx
class Myjavascript extends React.PureComponent {
	methods = {
		onCancel: () => {
			this.ZpopoverButtonMethods.closePopover();
		},
	};
	popover = {
		title: <div>popover标题</div>,
		content: (
			<React.Fragment>
				<div>popover内容</div>
				<div className="z-margin-top-20">
					<Button block onClick={this.methods.onCancel}>
						取消
					</Button>
				</div>
			</React.Fragment>
		),
		onVisibleChange: (visible) => {
			console.log(visible);
		},
		onGetPopupContainer: function() {
			return document.body;
		},
		exportMethods: (m) => {
			this.ZpopoverButtonMethods = m;
		},
		defaultDisabled: false,
		defaultShow: true,
		placement: "right",
		btnClassName: "z-margin-left-20",
	};
	render() {
		return <ZpopoverButton {...this.popover}>内置按钮</ZpopoverButton>;
	}
}
```

<div class="z-doc-titles"></div>

## ZpopoverButton 的 props

| 参数                | 说明                                                                                            | 类型                   | 默认值   |
| ------------------- | ----------------------------------------------------------------------------------------------- | ---------------------- | -------- |
| title               | popover 的 title                                                                                | string \| ReactNode    | --       |
| content             | popover 的 content                                                                              | string \| ReactNode    | --       |
| onVisibleChange     | popover 打开/隐藏的回调                                                                         | function(visible){}    | --       |
| onGetPopupContainer | 将 popover 插入到哪个 dom 内                                                                    | function(){return dom} | --       |
| defaultDisabled     | 按钮的默认禁用状态                                                                              | boolean                | false    |
| defaultShow         | 按钮默认显示状态                                                                                | boolean                | true     |
| placement           | popover 的方向                                                                                  | string                 | rightTop |
| btnClassName        | 按钮的 className                                                                                | string                 | --       |
| children            | 可以是按钮的名称，也可以自定义按钮（必须是 React 组件，且要支持 onClick,style,disabled 等属性） | string \| ReactNode    | --       |
| exportMethods       | 在 componentDidMount 导出组件内部可调用的方法，methods 请往下看                                 | function(methods){}    | --       |

## ZpopoverButton 的 methods

| 参数         | 说明                                     | 使用                          | 返回值类型 |
| ------------ | ---------------------------------------- | ----------------------------- | ---------- |
| closePopover | 隐藏 popover ,会触发 onVisibleChange     | methods.closePopover()        | --         |
| setDisabled  | 主动修改按钮禁用状态                     | methods.setDisabled(disabled) | --         |
| show         | 主动修改按钮显示状态                     | methods.show(show)            | --         |
