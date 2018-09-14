# 普通表单：Zform

`Zform`将`antd`的`Form`、`Form.item`的结构转成数据结构直接渲染的方式，并且自带有一个`提交`表单的按钮

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { Zform } from "zerod";
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
		{
			key: "serviceRemark",
			label: "服务说明",
			render: (form) => {
				return <Input.TextArea rows={2} placeholder="请输入服务说明" />;
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
			key: "servicePort",
			detailKey: "serviceProt",
			label: "端口号",
			render: (form) => {
				return <InputNumber min={11110} max={65535} step={10} />;
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
			key: "confProperty",
			label: "默认配置",
			render: (form) => {
				return <Input.TextArea rows={15} placeholder="请输入默认配置" />;
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
			<Zform
				items={this.items}
				onSubmit={(values) => {
					return Promise.resolve().then((re) => {
						message.success("提交成功：" + JSON.stringify(values));
					});
				}}
			/>
		);
	}
}
```

## Zform 的 props

可追 `className`、`style`

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
			<td>生成表单的josn数组，结构：{key:表单控件value对应的字段名,lable:表单控件名称,span:栅栏占格默认为{xxl:6,xl:8,lg:12},render:渲染表单控件的函数(form,panel)=>{return;},options:<a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>}</td>
			<td>array</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onSubmit</td>
			<td>表单提交事件,(values)=>{return Promise.resolve()},当submitMsg不为空时,onSubmit函数必须返回Promise对象才能关闭提示框</td>
			<td>function</td>
			<td>--</td>
		</tr>
        <tr>
			<td>submitBtnName</td>
			<td>提交按钮的名称</td>
			<td>string</td>
			<td>保存</td>
		</tr>
        <tr>
			<td>submitMsg</td>
			<td>提交表单时的确认提示框文本，如果为空，则不会触发提示</td>
			<td>string</td>
			<td>点击确定按钮提交数据</td>
		</tr>
        <tr>
			<td>formDefaultValues</td>
			<td>返显表单的数据，如{serviceName:"名称"}，"serviceName"对应items属性里面的key</td>
			<td>object</td>
			<td>--</td>
		</tr>
        <tr>
			<td>getFormInstance</td>
			<td>获取Form实例的钩子，外部通过(form)=>{this.formIstance=form;}获得form实例对象,通过this.formInstance调用antd<a href="https://ant.design/components/form-cn/" target="_blank">表单相关方法</a></td>
			<td>function</td>
			<td>--</td>
		</tr>
	</tbody>
</table>