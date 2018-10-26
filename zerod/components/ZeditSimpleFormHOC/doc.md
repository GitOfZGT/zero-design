<div class="z-doc-titles"></div>

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
		moreContentRender: function() {
			return (
				<div className="z-panel z-margin-top-20">
					<div className="z-panel-body">moreContentRender</div>
				</div>
			);
		},
		panelBeforeRender: function() {
			return (
				<div className="z-panel z-margin-bottom-20">
					<div className="z-panel-body">panelBeforeRender</div>
				</div>
			);
		},
		panelAfterRender: function() {
			// MoreContent 的代码请查看 ZerodMainContext 的 getScrollAreaWrapperEl 中例子的代码
			return <MoreContent />;
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
		moreContentRender: function() {
			return (
				<div className="z-panel z-margin-top-20">
					<div className="z-panel-body">moreContentRender</div>
				</div>
			);
		},
		panelBeforeRender: function() {
			return (
				<div className="z-panel z-margin-bottom-20">
					<div className="z-panel-body">panelBeforeRender</div>
				</div>
			);
		},
		panelAfterRender: function() {
			// MoreContent 的代码请查看 ZerodMainContext 的 getScrollAreaWrapperEl 中例子的代码
			return <MoreContent />;
		},
};
export default ZeditSimpleFormHOC(pageConfig);
```

<div class="z-doc-titles"></div>

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
			<td>pageHeader</td>
			<td>页头内容,除了show属性(默认false)，其他属性同 组件/ZpageHeader的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>pageFooter</td>
			<td>页尾内容,除了show属性(默认true)，其他属性同 组件/pageFooter的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>hasBodyPadding</td>
			<td>中间部分是否有padding值</td>
			<td>boolean</td>
			<td>true</td>
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
		<tr>
			<td>panelBeforeRender</td>
			<td>列表面板上面的渲染函数</td>
			<td>function(detail,tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>panelAfterRender</td>
			<td>列表面板下面的渲染函数</td>
			<td>function(detail,tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

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
			<td>生成表单的json数组，结构：同 组件/Zform 的items结构</td>
			<td>array[object] | null</td>
			<td>--</td>
		</tr>
		<tr>
			<td>defaultSpan</td>
			<td>同 组件/Zform 的defaultSpan属性</td>
			<td>number | object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>submitBtnName</td>
			<td>同 组件/Zform 的submitBtnName属性</td>
			<td>string</td>
			<td>保存</td>
		</tr>
        <tr>
			<td>submitMsg</td>
			<td>同 组件/Zform 的submitMsg属性</td>
			<td>string</td>
			<td>点击确定按钮提交数据</td>
		</tr>
        <tr>
			<td>submitBtnRender</td>
			<td>同 组件/Zform 的submitBtnRender属性</td>
			<td>funtion(onSubmit,props){return ReactNode | Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>detailApiInterface</td>
			<td>获取详细数据的后台接口函数,必须返回Promise,只有form.type="update"才自动调用,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。接口响应体的data属性必须 object类型</td>
			<td>(detailId, props,tool) =>{return Promise;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>submitApiInterface</td>
			<td>保存数据的后台接口函数,即保存按钮点击触发的函数,必须返回Promise,参数有：values:表单的值，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性</td>
			<td>(values, props,tool) =>{return Promise;}</td>
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
			<td>保存数据成功的回调 values：表单的值</td>
			<td>(value, tool) =>{}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

## tool 参数

pageConfig 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请查看 上下文/ ZerodMainContext ），比如 tool.showRightModal，还提供如下内容：

### tool.getFormInstance

是一个函数，可以 const myform=tool.getFormInstance()取得 antd 中经 Form.create() 包装过的组件自带的 this.props.form 属性 ；<a href="https://ant.design/components/form-cn/" target="_blank"> 更多请查看 antd 的 Form</a>

### tool.methods

tool.methods 是一个对象，内容如下：

<table>
	<thead>
		<tr>
			<th>方法</th>
			<th>说明</th>
			<th>使用方式</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>showLoading</td>
			<td>用于 显示/取消 当前页的loading的方法，必需参数show：true|false</td>
			<td>tool.methods.showLoading(true)</td>
		</tr>
		<tr>
			<td>getFormDetailData</td>
			<td>会触发pageConfig.form.detailApiInterface函数</td>
			<td>tool.methods.getFormDetailData()</td>
		</tr>
		<tr>
			<td>openModal</td>
			<td>根据当前位置打开下一级rightModal</td>
			<td>tool.methods.openModal(content)</td>
		</tr>
		<tr>
			<td>closeCurrentModal</td>
			<td>关闭当前的rightModal</td>
			<td>tool.methods.closeCurrentModal()</td>
		</tr>
		<tr>
			<td>onSubmit</td>
			<td>ZeditSimpleFormHOC的submit方法，需参数values:表单的所有值的map对象，tool.submit(values)会触发submitApiInterface，异步回调后会触发afterSuccess</td>
			<td>tool.methods.onSubmit(values)</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

### tool.$router

tool.$router 是一个对象，内容如下：

<table>
	<thead>
		<tr>
			<th>属性</th>
			<th>说明</th>
			<th>使用方式</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>history</td>
			<td>可以调用push、replace等跳转路由path得方法，<a href="https://reacttraining.com/react-router/web/api/history" target="_blank"> 更多请查看react-router的history</a></td>
			<td>tool.$router.history.push("/login")</td>
		</tr>
		<tr>
			<td>location</td>
			<td>当前路由的相关信息,<a href="https://reacttraining.com/react-router/web/api/location" target="_blank"> 更多请查看react-router的location</a></td>
			<td>tool.$router.location.pathname</td>
		</tr>
	</tbody>
</table>
