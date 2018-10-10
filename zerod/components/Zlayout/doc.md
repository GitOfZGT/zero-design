# 布局组件：Zlayout

`Zlayout`布局组件它包含`Zheader`、`Zbody`、`Zfooter`、`ZheaderBtn`、`Template`这几个子组件

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

## Zlayout 的 props

可追加`className`、`style`

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
			<td>flexRow</td>
			<td>将Zlayout的子元素横向flex布局</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
		<tr>
			<td>flex</td>
			<td>嵌套的Zlayout的flex占比</td>
			<td>number</td>
			<td>1</td>
		</tr>
        <tr>
			<td>height</td>
			<td>Zlayout的高度</td>
			<td>string|number</td>
			<td>"100%"</td>
		</tr>
        <tr>
			<td>width</td>
			<td>Zlayout的宽度</td>
			<td>string|number</td>
			<td>"100%"</td>
		</tr>
        <tr>
			<td>className</td>
			<td>Zlayout的className</td>
			<td>string</td>
			<td>-</td>
		</tr>
        <tr>
			<td>onTransitionend</td>
			<td>当Zlayout的width等样式改变所触发的过渡动画完成后执行的钩子</td>
			<td>function</td>
			<td>-</td>
		</tr>
	</tbody>
</table>

## Zlayout.Zheader 的 props

可追加`className`、`style`

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
			<td>height</td>
			<td>高度</td>
			<td>string|number</td>
			<td>"100%"</td>
		</tr>
        <tr>
			<td>className</td>
			<td>className</td>
			<td>string</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## Zlayout.Zbody 的 props

可追加`className`、`style`

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
			<td>insertToScrollWraper</td>
			<td>插入到具有滚动条区域外的内容，不受滚动事件的影响</td>
			<td>any</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## Zlayout.Zfooter 的 props

可追加`className`、`style`

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
			<td>height</td>
			<td>高度</td>
			<td>string|number</td>
			<td>"100%"</td>
		</tr>
        <tr>
			<td>className</td>
			<td>className</td>
			<td>string</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

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

## Zlayout.Template

`react`组件的`render`函数必须要有一个根元素，有时我们不想要一个多余无任何实际作用的根元素，这时就可以使用`Zlayout.Template`来替代

```jsx
class myCom extends React.Component {
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
