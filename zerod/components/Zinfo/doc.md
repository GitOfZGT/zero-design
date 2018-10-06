# 信息展示：Zinfo

`Zinfo` 用于展示一组 label 和 value 的组件

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { Zinfo } from "zerod";
import { Tag } from "antd";
class Myjavascript extends React.Component {
	items = [
		{
			key: "serviceCode",
			label: "服务编码",
			render: () => {
               //异步加载自定义项
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve((value, record) => {
							return <Tag color="red">{value}</Tag>;
						});
					}, 5000);
				});
				//    return api.getOptions.then(re=>{
				//         return (value,record)=>{
				//               return 自定义内容
				//         }
				//     })
			},
		},
		{
			key: "serviceName",
			label: "服务名称",
		},
	];
	state = {
		data: {
			serviceCode: "IDDKKDSSDSD",
			serviceName: "测试治大国",
		},
	};
	render() {
		return <Zinfo items={this.items} fieldValue={this.state.data} />;
	}
}
```

## Zinfo 的 props

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
			<td>items</td>
			<td>json数组，请看下面的items结构</td>
			<td>array</td>
			<td>--</td>
		</tr>
		<tr>
			<td>defaultSpan</td>
			<td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>
			<td>number | object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>fieldValue</td>
			<td>对应items中key属性的map对象</td>
			<td>object</td>
			<td>--</td>
		</tr>
		</tr>
	</tbody>
</table>

## items 结构

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
			<td>key</td>
			<td>表单控件value对应的字段名</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>label</td>
			<td>表单控件label</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>width</td>
			<td>label区的宽度，默认"160px"</td>
			<td>string</td>
			<td>160px</td>
		</tr>
		<tr>
			<td>render</td>
			<td>自定义value钩子,render函数必须return一个函数。如果异步加载自定义内容：必须return的是Promise对象。例如使用了后台接口：(form)=>api.getOptions.then(re=>{return (value,record)=>自定义内容)})</td>
			<td>()=>{return function(value,record){return 自定义内容})}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>span</td>
			<td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:6,xl:8,lg:12,md:24}，默认取this.props.defaultSpan</td>
			<td>number | object</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
