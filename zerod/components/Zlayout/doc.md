<!-- @routePath:/component-doc/Zlayout-doc -->
<!--
 * @Author: zgt
 * @Date: 2018-08-21 10:59:31
 * @LastEditors: zgt
 * @LastEditTime: 2019-08-16 09:50:02
 * @Description: file content
 -->
<div class="z-doc-titles"></div>

# 布局组件：Zlayout

`Zlayout`布局组件它包含`Zheader`、`Zbody`、`Zfooter`、`ZheaderBtn`、`Template`这几个子组件

滚动条在`Zlayout.Zbody`

## Zlayout 横向布局

`Zlayout`可以嵌套`Zlayout`，横向 flex 布局需`flexRow`属性

<div class="z-demo-box" data-render="demo1" data-title="横向布局"></div>

```jsx
/*Zlayout默认height="100%"*/
<Zlayout flexRow>
	<Zlayout width={200} style={{ background: "#CBC9C9" }} />
	<Zlayout style={{ background: "#EAE8E8" }} />
	<Zlayout width={200} style={{ background: "#D1D1D1" }} />
</Zlayout>
```

## Zlayout 纵向布局

`Zlayout`纵向布局需嵌套`Zlayout.Zheader`、`Zlayout.Zbody`、`Zlayout.Zfooter`配合使用

<div class="z-demo-box" data-render="demo2" data-title="纵向布局"></div>

```jsx
/*Zlayout默认height="100%"*/
<Zlayout flexRow>
	<Zlayout width={200}>
		<Zlayout.Zheader height="64" style={{ background: "#EAEAEA" }}>
			上
		</Zlayout.Zheader>
		<Zlayout.Zbody style={{ background: "#CBCBCB" }}>中</Zlayout.Zbody>
		<Zlayout.Zfooter height="50" style={{ background: "#C6C6C6" }}>
			下
		</Zlayout.Zfooter>
	</Zlayout>
	<Zlayout>
		<Zlayout.Zheader height="64" style={{ background: "#E8E0E0" }}>
			上
		</Zlayout.Zheader>
		<Zlayout.Zbody style={{ background: "#DBD1D1" }}>中</Zlayout.Zbody>
		<Zlayout.Zfooter height="50" style={{ background: "#CEBFBF" }}>
			下
		</Zlayout.Zfooter>
	</Zlayout>
</Zlayout>
```

<div class="z-doc-titles"></div>

## Zlayout 的 props

可追加`className`、`style`

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| children        | 即this.props.children                                                                | any             | --         |
| flexRow         | 将Zlayout的子元素横向flex布局                                                         | boolean         | --         |
| flex            | 嵌套的Zlayout的flex占比                                                               | number          | 1         |
| height          | Zlayout的高度                                                                        | string \| number  | "100%"   |
| width           | Zlayout的宽度                                                                        | string \| number  | "100%"   |
| className       | Zlayout的className                                                                   | string          | --         |
| onTransitionend | 当Zlayout的width等样式改变所触发的过渡动画完成后执行的钩子                              | function        | --         |

<div class="z-doc-titles"></div>

## Zlayout.Zheader 的 props

可追加`className`、`style`

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| children        | 即this.props.children                                                                | any             | --         |
| height          | 高度                                                                                 | string \| number  | "64px"   |
| className       | className                                                                            | string          | --         |

<div class="z-doc-titles"></div>

## Zlayout.Zbody 的 props

可追加`className`、`style`

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| children        | 即this.props.children                                                                | any             | --         |
| scroll          | 是否启用滚动条                                                                        | boolean         | --         || getScrollInstance | 获取滚动条的实例，scroll=true时有效                                                  | function        | --         || insertToScrollWraper | 插入到具有滚动条区域外的内容，不受滚动事件的影响                                   | any             | --         |
| getWrapperEl    | 获取最外层包裹元素,(el,metods)=>{}                                                    | function        | --         |
| useCustomScroll | 在chrome浏览器默认使用原生滚动条，在其他浏览器默认启用js自定义滚动条，如需chrome也启用js自定义滚动条，useCustomScroll为true即可 | boolean    | false      |

<div class="z-doc-titles"></div>

## Zlayout.Zfooter 的 props

可追加`className`、`style`

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| children        | 即this.props.children                                                                | any             | --         |
| height          | 高度                                                                                 | string \| number | "40px"    |
| className       | className                                                                            | string          | --         |

<div class="z-doc-titles"></div>

## Zlayout.ZheaderBtn

可加`className`、`style`、`onClick`

`Zlayout.ZheaderBtn`需在`Zlayout.Zheader`内部使用

```jsx
<Zlayout>
	{/*使用了z-flex-space-between通用样式类，flex的两端对齐*/}
	<Zlayout.Zheader height="64" className="z-flex-space-between">
		{/*使用z-flex将Zlayout.ZheaderBtn的宽度自动化*/}
		<div className="z-flex">
			<Zlayout.ZheaderBtn>左边按钮1</Zlayout.ZheaderBtn>
			<Zlayout.ZheaderBtn>左边按钮2</Zlayout.ZheaderBtn>
		</div>
		<div className="z-flex">
			<Zlayout.ZheaderBtn>右边按钮1</Zlayout.ZheaderBtn>
			<Zlayout.ZheaderBtn>右边按钮2</Zlayout.ZheaderBtn>
		</div>
	</Zlayout.Zheader>
	<Zlayout.Zbody>中</Zlayout.Zbody>
	<Zlayout.Zfooter height="50">下</Zlayout.Zfooter>
</Zlayout>
```

<div class="z-doc-titles"></div>

## Zlayout.Template

`react`组件的`render`函数必须要有一个根元素，有时我们不想要一个多余无任何实际作用的根元素，这时就可以使用`Zlayout.Template`来替代

```jsx
class myCom extends ZpureComponent {
	render() {
		return (
			<Zlayout.Template>
				<h1>1</h1>
				<div>2</div>
			</Zlayout.Template>
		);
	}
}
```
