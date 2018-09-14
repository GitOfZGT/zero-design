# 编辑页面：ZeditSimpleFormHOC

`ZeditSimpleFormHOC`是一个函数，传入`pageConfig`参数配置，返回一个表单编辑结构的组件

1、新增表单

<div class="z-demo-box" data-render="demo1" data-title="新增表单"></div>

```jsx
import React from "react";
import { Input, InputNumber, Button } from "antd";
import { ZeditSimpleFormHOC, zTool } from "zerod";
import defaultConfigData from "@/mock/serviceDefaultConfigData.js";
// 后台接口
import api from "@/App.api.js";
const pageCofig = {
	insertLocation: "mainModal",
	pageHeader: {
		show: true,
		...pageHeader,
		breadcrumbRoutes: [],
	},
	form: {
		type: "add",
		panelHeader: "新增服务信息",
		items: [
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
				key: "quick",
				label: "快捷操作",
				render: (form) => {
					return (
						<Button
							onClick={() => {
								form.setFieldsValue({
									confProperty: defaultConfigData.default,
								});
							}}
						>
							模板配置
						</Button>
					);
				},
			},
			{
				key: "confProperty",
				label: "默认配置",
				render: (form) => {
					return (
						<Input.TextArea
							rows={15}
							placeholder="请输入默认配置"
							ref={(el) => {
								zTool.scrollDisableWheel(el.textAreaRef);
							}}
						/>
					);
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
		],
		detailApiInterface: (id, props) => {
			return api.config.getServiceDetail({ serviceId: id });
		},
		submitApiInterface: (values, props) => {
			return api.config.addService(Object.assign({}, values, { environment: "default" }));
		},
	},
};
export default ZeditSimpleFormHOC(pageConfig);
```

2、修改表单

<div class="z-demo-box" data-render="demo2" data-title='form.type="update"时为修改表单,这时才会调用form.detailApiInterface钩子，使用moreContentRender函数在页面末端追加更多内容'></div>

```jsx
import React from "react";
import { Input, InputNumber, Button } from "antd";
import { ZeditSimpleFormHOC, zTool } from "zerod";
import defaultConfigData from "@/mock/serviceDefaultConfigData.js";
// 后台接口
import api from "@/App.api.js";
const pageCofig = {
	insertLocation: "mainModal",
	pageHeader: {
		show: true,
		...pageHeader,
		breadcrumbRoutes: [],
	},
	form: {
		type: "update",
		panelHeader: "修改服务信息",
		items: [
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
		],
		detailApiInterface: (id, props) => {
			return api.config.getServiceDetail({ serviceId: id });
		},
		submitApiInterface: (values, props) => {
			return api.config.updateService(Object.assign({}, values, { serviceId: props.detailId }));
		},
	},
	moreContentRender: function(detail, panel) {
		return (
			<div className="z-panel z-margin-top-20">
				<div className="z-panel-body">更多内容</div>
			</div>
		);
	},
};
export default ZeditSimpleFormHOC(pageConfig);
```

## pageConfig

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
			<td>insertLocation</td>
			<td>这个组件渲染在的位置，mainRoute:main子路由，mainModal:在main子路由区域打开的右边窗口，appModal:在最外层打开的右边窗口</td>
			<td>mainRoute | mainModal | appModal</td>
			<td>mainRoute</td>
		</tr>
		<tr>
			<td>pageHeader</td>
			<td>页头内容,除了show属性，其他属性同 组件/ZpageHeader的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>form</td>
			<td>表单配置，请看下面的pageConfig.form</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>moreContentRender</td>
			<td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>
			<td>(detail,tool) =>{return;}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## pageConfig.form

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
			<td>type</td>
			<td>表单类型：新增操作 | 修改操作</td>
			<td>add | update</td>
			<td>mainRoute</td>
		</tr>
		<tr>
			<td>panelHeader</td>
			<td>列表面板的头部内容,为null则不显示面板头部</td>
			<td>string | function(){return ;}</td>
			<td>列表</td>
		</tr>
		<tr>
			<td>items</td>
			<td>表单的渲染项，如果为null则不显示查询表单，map结构：{key:表单控件value对应的字段名,lable:表单控件名称,render:渲染表单控件的函数(form,panel)=>{return;},options:<a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>}</td>
			<td>array[object] | null</td>
			<td>--</td>
		</tr>
		<tr>
			<td>detailApiInterface</td>
			<td>获取详细数据的后台接口函数,必须返回Promise,只有form.type="update"才自动调用,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性</td>
			<td>(detailId, props) =>{return Promise;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>submitApiInterface</td>
			<td>保存数据的后台接口函数,即保存按钮点击触发的函数,必须返回Promise,参数有：values:表单的值，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性</td>
			<td>(values, props) =>{return Promise;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showSubmitBtn</td>
			<td>是否显示提交按钮</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
        <tr>
			<td>afterSubmitSuccess</td>
			<td>保存数据成功的回调 closeRightModal是一个关闭modal的函数，values：表单的值</td>
			<td>(closeRightModal, values) =>{}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>