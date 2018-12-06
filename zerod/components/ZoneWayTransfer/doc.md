# 单向转移框: ZoneWayTransfer

`ZoneWayTransfer`是一个通过拖动的单向转移选择框组件，左侧源数据框，右侧是接收框

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="左框的选项拖动到右框，右框内的选项可以上下拖动排序"></div>

```jsx
import React from "react";
import { ZoneWayTransfer } from "zerod";
class Myjavascript extends React.Component {
	state = {
		leftData: [
			{ name: "风中飘摇", children: [{ name: "由于天涯" }, { name: "泪如雨下" }] },
			{ name: "枫叶南山" },
			{ name: "相信时代(禁用状态)", disabled: true },
			{ name: "天下三官", children: [{ name: "由于天涯" }, { name: "泪如雨下" }] },
		],
		rightData: [],
	};
	methods = {
		onChange: (actionType, rightData, actionItem, sibligItem) => {
			//actionType="transfer" 从左转移到右
			//actionType="move" 右框内移动排序
			//actionType="remove" 拖出右框移除
			//actionType="selectAll" 全选
			//actionType="clearAll 清空
		},
	};
	render() {
		return (
			<ZoneWayTransfer
				style={{ width: "600px" }}
				repeated={true}
				onChange={this.methods.onChange}
				leftSourceData={this.state.leftData}
				rightTargetData={this.state.rightData}
				leftTitle="左边"
				rightTitle="右边"
				sourceKeys={{ name: "name", id: "id" }}
			/>
		);
	}
}
```

## ZoneWayTransfer 的 props

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
			<td>leftSourceData</td>
			<td>左侧框的数据源,[{name:"名称",id:"1",disabled:false}]</td>
			<td>array[object]</td>
			<td>[]</td>
		</tr>
		<tr>
			<td>rightTargetData</td>
			<td>右侧框的数据,[{name:"名称",id:"1",disabled:false}]</td>
			<td>array[object]</td>
			<td>[]</td>
		</tr>
        <tr>
			<td>sourceKeys</td>
			<td>定义leftSourceData和rightTargetData的key对象，默认：{name:"name",id:"id"}</td>
			<td>object</td>
			<td>{name:"name",id:"id"}</td>
		</tr>
        <tr>
			<td>onChange</td>
			<td>操作之后的回调，参数有 actionType：操作类型，rightData：操作之后右框数据，actionItem：当前操作的数据，sibligItem：当前操作位置下一个数据</td>
			<td>(actionType, rightData, actionItem, sibligItem) => {}</td>
			<td>{name:"name",id:"id"}</td>
		</tr>
		 <tr>
			<td>repeated</td>
			<td>是否允许重复选择</td>
			<td>Boolean</td>
			<td>true</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> leftTitle</td>
			<td>左框标题</td>
			<td>string | function(){}</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> rightTitle</td>
			<td>右框标题</td>
			<td>string | function(){}</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> leftItemRender</td>
			<td>左框选择项的渲染函数</td>
			<td>function(item,index){}</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> rightItemRender</td>
			<td>右框选择项的渲染函数</td>
			<td>function(item,index){}</td>
			<td>--</td>
		</tr>
        <tr>
			<td>selectAllDisabled</td>
			<td>禁用全选按钮</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
        <tr>
			<td>clearAllDisabled</td>
			<td>禁用清空按钮</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
