<div class="z-doc-titles"></div>

# 普通表单：Zform

`Zform`将`antd`的`Form`、`Form.item`的结构转成数据结构直接渲染的方式，并且自带有一个`提交`表单的按钮

继承了 React.PureComponent

1、labelLayout=='inline'

<div class="z-demo-box" data-render="demo1" data-title="inline"></div>

```jsx
import React from "react";
import ZpureComponent from "zerod/components/ZpureComponent";
import { Zform } from "zerod";
import { Input, message } from "antd";
class Myjavascript extends React.PureComponent {
	items = [
		{
			key: "serviceCode",
			label: "服务编码",
			render: (form) => {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve(<Input placeholder="请输入服务编码" />);
					}, 5000);
				});
			},
			//antd的 form.getFieldDecorator的options
			options: () => ({
				//验证规则
				rules: [
					{
						required: true,
						message: "不能为空。",
					},
				],
			}),
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
			key: "colorValue",
			label: "颜色值",
			render: (form) => {
				return <ZcolorPicker className="z-margin-top-4" />;
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
			span: { md: 24 },
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
			label: "端口号",
			labelWidth: "80px",
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
			key: "myButton",
			label: "按钮",
			render: (form, changeFormItems) => {
				return (
					<Button
						type="primary"
						onClick={() => {
							const newItems = this.items.slice(0);
							newItems.splice(4, 1);
							changeFormItems(hasHide ? this.items : newItems);
							hasHide = !hasHide;
						}}
					>
						{hasHide ? "显示" : "不显示"}端口号
					</Button>
				);
			},
		},
		{
			key: "confProperty",
			label: "默认配置",
			span: 24,
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
	defaultValue = {
		serviceCode: "9999",
		serviceRemark: "llll",
	};
	render() {
		return (
			<Zform
				labelLayout="horizontal"
				formDefaultValues={this.defaultValue}
				items={this.items}
				onSubmit={(values) => {
					// console.log(values);
					return Promise.resolve().then((re) => {
						message.success("提交成功：" + JSON.stringify(values));
					});
				}}
			/>
		);
	}
}
```

2、labelLayout=="vertical"

<div class="z-demo-box" data-render="demo2" data-title="vertical"></div>

2、labelLayout=="horizontal"

<div class="z-demo-box" data-render="demo3" data-title="horizontal"></div>

<div class="z-doc-titles"></div>

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
			<td>生成表单的json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>
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
			<td>onSubmit</td>
			<td>触发保存按钮会先验证表单是否通过,通过了当submitMsg不为空时会打开确认提示框,确认后才调用onSubmit,onSubmit函数必须返回Promise对象才能关闭提示框，如果存在otherForms,values是一个数组，否则是一个对象</td>
			<td>function(values){return Promise.resolve()}</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnName</td>
			<td>提交按钮的名称，如果为空则不显示默认的提交按钮</td>
			<td>string | furnction(){
				return ReactNode | Element;
			}</td>
			<td>保存</td>
		</tr>
        <tr>
			<td>submitMsg</td>
			<td>提交表单时的确认提示框文本，如果为空，则不会打开提示框直接调用onSubmit函数</td>
			<td>string</td>
			<td>点击确定按钮提交数据</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnRender</td>
			<td>渲染提交按钮的函数，可以用自定义内容替换默认的提交按钮;参数有onSubmit：内置的提交按钮的方法，props:Zform组件的props,可以取得props.form</td>
			<td>funtion(onSubmit,props){return ReactNode | Element;}</td>
			<td>--</td>
		</tr>
        <tr>
			<td>formDefaultValues</td>
			<td>表单控件的默认值，如{serviceName:"名称"}，"serviceName"对应items属性里面的key, (请使用变量缓存所需设置的值而非直接使用字面量)。如需后续修改表单控件的值，也可以选择getFormInstance导出的methods.setFieldsValue(newValues)或者form.setFieldsValue(newValues)</td>
			<td>object</td>
			<td>--</td>
		</tr>
        <tr>
			<td>getFormInstance</td>
			<td>获取form对象的钩子，外部通过(form)=>{this.formIstance=form;}获得form对象,通过this.formInstance.调用antd<a href="https://ant.design/components/form-cn/" target="_blank">表单相关方法</a></td>
			<td>function(form,methods){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>afterItemsRendered</td>
			<td>所有表单控件渲染完的回调，包括异步渲染控件</a></td>
			<td>function(form,methods){}</td>
			<td>--</td>
		</tr>
		 <tr>
			<td>labelLayout</td>
			<td>label的布局方式</a></td>
			<td>'horizontal'|'vertical'|'inline'</td>
			<td>'vertical'</td>
		</tr>
		 <tr>
			<td>otherForms</td>
			<td>有时存在多个Zform时，只想有一个保存按钮来触发提交，当触发保存时，会调用otherForms函数，otherForms应该return一个其他form对象的数组，会加上当前的form一起验证表单是否通过，通过了才会调用onSubmit</td>
			<td>function(){return [form1,form2]}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

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
			<td>labelWidth</td>
			<td>label的宽度，如labelWidth:"120px"，当labelLayout=='horizontal'才可能用的上</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>
			<td>渲染表单控件的钩子。支持异步加载：必须return的是Promise对象。例如使用了后台接口：(form,changeFormItems)=>api.getOptions.then(re=>{return 表单控件})。changeFormItems 是一个方法，主要用于局部改变items，实现表单控件之间交互联动,使用方式请往下看</td>
			<td>(form,changeFormItems)=>{return ReactNode | Element | Promise}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>span</td>
			<td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:4,xl:6,lg:8}，默认取this.props.defaultSpan</td>
			<td>number | object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>isFormItem</td>
			<td>默认为true、如果为false则render函数可以渲染非表单控件内容</td>
			<td>boolean</td>
			<td>--</td>
		</tr>
		<tr>
			<td>className</td>
			<td>可以给每项添加className</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> options</td>
			<td><a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>,可以配置验证规则}</td>
			<td>object || ()=>options</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

## changeFormItems

changeFormItems 是一个方法，主要用于局部改变 items，实现表单控件之间交互联动。但不能直接在 render 函数中使用，应在控件的事件当中。changeFormItems 除了在 items 里的 render 参数中，还存在于 getFormInstance 函数的 methods 参数里。

changeFormItems 需要两个参数：`newItems`：array | object 和 `part` : boolean

`newItems`的结构取决于 `part`参数

如果`part`为 false (默认为 false),`newItems`同 Zform 的 items，会重新渲染全部 items，这是早期的做法，不建议使用

```jsx
//this.items就是Zform的items
const newItems = this.items.slice(0);
newItems.splice(4, 1); //不显示第五个
changeFormItems(this.items, false); //触发渲染
```

如果`part`为 true，就是局部改变，`newItems`可以为数组(多个 item 改变)，可以为对象(单个 item 改变),推荐使用方式如下

```jsx
//不显示key为servicePort的那个item，
changeFormItems(
	{
		key: "servicePort", //对应Zform的items里的key
		show: false, //是否显示
	},
	true,
);
//其他内容
changeFormItems(
	[
		{
			key: "servicePort", //对应Zform的items里的key
			//改变key为servicePort的那个item的内容
			newItem: {
				control: <Input />, //控件  ReactNode
				span: { lg: 12 }, //栅栏占格 同zform 的items里的span
				options: {}, //同zform 的items里的options
				isFormItem: true, //control是否是表单控件
				label: "", //label
			},
		},
	],
	true,
);
```
