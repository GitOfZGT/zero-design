# 通用样式

积累了一些通用的样式类

`zerod-admin-webpack` 脚手架中的`src/app.scss`已经全部引入 `@import '~zerod/index.scss';`，所以可以直接使用如下的所有的样式类名

<div class="z-doc-titles"></div>

## 字体颜色

<div class="z-demo-box" data-render="text-color" data-title="定义了一些字体颜色"></div>

```html
<div className="z-text-blue">z-text-blue</div>
```

<div class="z-doc-titles"></div>

## 面板

<div class="z-demo-box" data-render="default-panel" data-title="默认面板"></div>

```html
// 无边框面板
<div className="z-panel">
    <div className="z-panel-heading">标题</div>
    <div className="z-panel-body">无边框面板</div>
</div>
// 有边框面板
<div className="z-panel is-panel-border">
    <div className="z-panel-heading">标题</div>
    <div className="z-panel-body">有边框面板</div>
</div>

// 有边框+只有上圆角
<div className="z-panel is-panel-border is-radius-top">
    <div className="z-panel-heading">标题</div>
    <div className="z-panel-body">有边框面板</div>
</div>
// 有边框+只有下圆角
<div className="z-panel is-panel-border is-radius-bottom">
    <div className="z-panel-heading">标题</div>
    <div className="z-panel-body">有边框面板</div>
</div>

// 面板body全无padding
<div className="z-panel">
    <div className="z-panel-heading">标题</div>
    <div className="z-panel-body is-no-padding">内容</div>
</div>
// 面板body左右无padding
<div className="z-panel">
    <div className="z-panel-heading">标题</div>
    <div className="z-panel-body is-no-padding-sides">内容</div>
</div>
// 面板body上下无padding
<div className="z-panel">
    <div className="z-panel-heading">标题</div>
    <div className="z-panel-body is-no-padding-vertical">内容</div>
</div>
```

<div class="z-doc-titles"></div>

## z-info

<div class="z-demo-box" data-render="default-info" data-title="信息面板"></div>

```html
<div>
	<dl className="z-info">
		<dt className="z-info-left"><span className="z-margin-bottom-10">标题1</span></dt>
		<dd className="z-info-right">
			<span className="z-margin-bottom-10">为了使我们有更高的可控性，即自由控制顶点位置，WebGL把这个权力交给了我们，这就是可编程渲染管线（不用理解）。</span>
		</dd>
	</dl>
	<dl className="z-info">
		<dt className="z-info-left"><span className="z-margin-bottom-10">标题2</span></dt>
		<dd className="z-info-right"><span className="z-margin-bottom-10">我们引入了一个新的名词，叫“顶点着色器”</span></dd>
	</dl>
</div>
```

<div class="z-doc-titles"></div>

## 元素浮动

单独引入：`@import '~zerod/scss/cmomon/z-float.scss';`

```html
<div className="z-clear-fix"> //清除浮动
    <div className="z-float-left"></div> //左浮动
    <div className="z-float-right"></div> //右浮动
</div>
```

<div class="z-doc-titles"></div>

## 字体大小

定义了 12-100px 的字体大小

单独引入：`@import '~zerod/scss/cmomon/z-font-size.scss';`

```html
<div className="z-font-size-16">16像素大小</div>
<div className="z-font-size-16-important">权重优先</div>
```

<div class="z-doc-titles"></div>

## 文本对齐

定义了文本对齐的 clasName

单独引入：`@import '~zerod/scss/cmomon/z-text-align.scss';`

```html
<div className="z-text-left">文本居左</div>
<div className="z-text-center">文本居中</div>
<div className="z-text-right">文本居右</div>
<div className="z-text-underline">文字下划线</div>
<div className="z-text-underline-hover">文字hover后显示下划线</div>
<div className="z-vertical-top">文字顶部对齐</div>
<div className="z-vertical-middle">文字中间对齐</div>
<div className="z-vertical-bottom">文字底部对齐</div>
```

<div class="z-doc-titles"></div>

## margin 和 padding 值

单独引入：`@import '~zerod/scss/cmomon/z-margin-padding.scss';`

定义了 0-100px 的 margin 和 padding 值的 className

如需提高权重，加后缀："-important"

`z-margin-10` : 四个方位 margin 值为 10px

`z-margin-left-10` : margin-left 为 10px

`z-margin-top-10` : margin-top 为 10px

`z-margin-right-10` : margin-right 为 10px

`z-margin-bottom-10` : margin-bottom 为 10px

`z-margin-bottom-10-important` :权重优先

同理`padding`值 ：

`z-padding-10` : 四个方位 padding 值为 10px



<div class="z-doc-titles"></div>

## flex 盒子(更多请了解弹性布局)

单独引入：`@import '~zerod/scss/cmomon/z-flex.scss';`

```html
//z-flex-1只到z-flex-5
<div className="z-flex"> //启用弹性盒子
    <div className="z-flex-1"></div> //占比1
    <div className="z-flex-2"></div> //占比2
</div>

//盒子子元素水平居中
<div className="z-flex-items-h-center">
    //内部子元素呈水平居中
    <div></div>
    <div></div>
</div>

//盒子子元素垂直居中
<div className="z-flex-items-v-center">
    //内部子元素呈垂直居中
    <div></div>
    <div></div>
</div>

//盒子子元素水平垂直居中
<div className="z-flex-items-center">
    //内部子元素呈水平垂直居中
    <div></div>
    <div></div>
</div>

//子元素自身高度跟随内容
<div className="z-flex"> //父元素
    <div>子元素默认高度占父元素100%</div>
    <div className="z-flex-self-baseline">子元素高度跟随内容高度</div>
</div>

//子元素 两端对齐
<div className="z-flex-space-between"> //父元素
    <div>最左</div>
    <div>中间</div>
    <div>最右</div>
</div>

//子元素自身垂直居中
<div className="z-flex"> //父元素
    <div></div>
    <div></div>
    <div className="z-flex-self-center"只有我是垂直居中</div>
</div>
```

<div class="z-doc-titles"></div>

## 定义了 em 单位的字体缩进

1-10em 单位的字体缩进

单独引入：`@import '~zerod/scss/cmomon/z-text-indent.scss';`

如需提高权重，加后缀："-important"

```html
<div className="z-text-indent-2">文本</div>
```
