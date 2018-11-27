# 图片查看器：Zviewer

`Zviewer`展示一组缩略图，点击查看大图

1、如果想定义显示缩略图大小，请使用样式覆盖，比如 添加 `className="pic-list"`, 样式中：`.pic-list>li{width:200px;height:180px;}`

<div class="z-demo-box" data-render="demo1" data-title="这里是缩略图列表，点击查看大图"></div>

```jsx
class Myjavascript extends React.Component {
	state = {
		urls: [
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952786111&di=7d03c11e1f0ad40f08578cf8506844aa&imgtype=0&src=http%3A%2F%2Fpic11.photophoto.cn%2F20090415%2F0020032851022998_b.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952798194&di=9e2835fa442d82d57721e83505b4b706&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120330%2F0020033069990023_b.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535952814603&di=1759b21819f90ef7d8d7c0c4d379dd62&imgtype=0&src=http%3A%2F%2Fpic21.photophoto.cn%2F20111122%2F0033033938946238_b.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535953843567&di=2cbdfc3ff5947698623fff361c5a4948&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201305%2F03%2F000447ycxqq7q6ntkxndps.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975713921&di=6cf5521422438b1f165d3bd82d10e406&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca2a59eeec68a801216a4b01865c.jpg%401280w_1l_2o_100sh.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975757343&di=b5d737467b8f3aa08ae3d0e2dc68fc8b&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2FOV8JyO.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975776762&di=ceb422c53cb6430269a4aa15a9e39a20&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F18%2F15%2Fqp8uZm.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975788020&di=132a29c097bf83d6db16484741cc63f6&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3446260711%2C2783084043%26fm%3D214%26gp%3D0.jpg",
		],
	};
	render() {
		return <Zviewer urls={this.state.urls} className={"pic-list"} />;
	}
}
```

## Zviewer 的 props

可追加`className`

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
			<td>urls</td>
			<td>多张图片的路径，如果缩略图和原图的路径不一样，可以使用object方式：[{url:"原图路径",thumb:"缩略图路径",alt:"图片描述"}]</td>
			<td>array[string] | array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showThumbAlt</td>
			<td>是否在缩略图下显示图片的alt</td>
			<td>Boolean</td>
			<td>true</td>
		</tr>
	</tbody>
</table>
