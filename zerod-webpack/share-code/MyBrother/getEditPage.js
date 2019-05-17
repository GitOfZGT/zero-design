import React from "react";
// 第三方组件
import { Input, InputNumber, Button, message } from "antd";
// zerod
import { ZeditSimpleFormHOC ,zTool} from "zerod";
// 后台接口
import api from "./A.api.js";

// import components from '@/components/load-components'

import defaultConfigData from "./serviceDefaultConfigData.js";

import ServiceTab from "./ServiceTab";

function getEditPage({ pageType, headerTitle, headerContent, afterSubmitSuccess }) {
	const configFormItems = [
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
						// ref={(el) => {
						// 	zTool.scrollDisableWheel(el.textAreaRef);
						// }}
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
	];

	let formItems = [
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
			detailKey:'serviceProt',
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
	];
	if (pageType === "add") {
		formItems = [...formItems, ...configFormItems];
	}
	const pageCofig = {
		pageHeader: {
			show: true,
			// any
			title: headerTitle,
			//any
			content: headerContent,
			//element | node
			rightMoreContent: null,
		},
		form: {
			type: pageType,
			panelHeader: pageType === "add" ? "新增服务信息" : "修改基础信息",
			items: formItems,
			detailApiInterface: (id, props) => {
				return api.getServiceDetail({ serviceId: id });
			},
			submitApiInterface: (values, props) => {
				if (pageType === "add") {
					return api.addService(Object.assign({}, values, { environment: "default" }));
				} else {
					return api.updateService(Object.assign({}, values, { serviceId: props.detailId }));
				}
			},
			afterSubmitSuccess,
		},
	};
	if (pageType === "update") {
		pageCofig.moreContentRender = (detail) => {
			// console.log(detail);
			return <ServiceTab data={detail} formItems={configFormItems} />;
		};
	}
	return ZeditSimpleFormHOC(pageCofig);
}
export default getEditPage;
