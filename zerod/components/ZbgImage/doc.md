# 展示图片：ZbgImage

`ZbgImage`是以背景图的方式展示一张图片

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
//默认：无url
<ZbgImage style={{height:"240px"}}/>
//有url，position:"center"
<ZbgImage style={{height:"240px"}} url="http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&690"/>
//有url，position:"top"
<ZbgImage position="top" style={{height:"240px"}} url="http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&690"/>
```
## ZbgImage 的 props

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
			<td>url</td>
			<td>背景图片路径</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>position</td>
			<td>背景图片在可视区域的位置</td>
			<td>center | top</td>
			<td>center</td>
		</tr>
        <tr>
			<td>onClick</td>
			<td>点击事件</td>
			<td>funtion(e){}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
