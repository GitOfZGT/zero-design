# 查询表单：ZsearchForm

`ZsearchForm`是有栅栏布局的横向排版的，将`antd`的`Form`、`Form.item` 的结构转成数据结构直接渲染的方式

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZsearchForm } from "zerod";
import { Input, message } from "antd";

class Myjavascript extends React.Component {
	items = [
		{
			key: "serviceCode",
			label: "服务编码",
			render: (form) => {
				return <Input placeholder="请输入服务编码" />;
			},
			//antd的 form.getFieldDecorator的options
			options: {
				//验证规则
				rules: [
					{
						required: true,
						message: "不能为空。",
					},
				],
			},
		},
		{
			key: "serviceName",
			label: "服务名称",
			render: (form) => {
				return <Input placeholder="请输入服务名称" />;
			},
			//antd的 form.getFieldDecorator的options
			options: {
				//验证规则
				rules: [
					{
						required: true,
						message: "不能为空。",
					},
				],
			},
		},
	];
	render() {
		return (
			<ZsearchForm
				colFormItems={this.items}
				onSearch={(values) => {
					message.success("提交成功：" + JSON.stringify(values));
				}}
			/>
		);
	}
}
```

### ZsearchForm Props

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
			<td>colFormItems</td>
			<td>表单项的配置，结构有 {key:表单控件value对应的字段名,lable:表单控件名称,render:渲染表单控件的函数(form,panel)=>{return;},options:<a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>}</td>
			<td>array</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onSearch</td>
			<td>验证表单后的提交事件</td>
			<td>function</td>
			<td>--</td>
		</tr>
        <tr>
			<td>onReset</td>
			<td>重置表单后的事件</td>
			<td>function</td>
			<td>--</td>
		</tr>
        <tr>
			<td>noCollapse</td>
			<td>禁用折叠</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
