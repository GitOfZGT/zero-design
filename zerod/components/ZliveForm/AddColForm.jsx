import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import ZeditSimpleFormHOC from "../ZeditSimpleFormHOC";
import { getControl, getOptions } from "../Zform/controls";
import { itemsFromTree } from "../zTool";
import { dateFormats } from "./controls";
import ZselectInput from "./ZselectInput";
import { getFormItem } from "./common";

const commonKeys = [
	"groupName",
	"fieldType",
	"label",
	"fieldKey",
	"required",
	"initialValue",
	"regularExpression",
	"errorMsg",
	"remark",
];
const inputKeys = ["maxLength", "minLength"];
const selectKeys = ["selectList"];
const dateKeys = ["format"];
const uploadKeys = ["url", "detailUrl"];

//控件类型列表
export const controlList = [
	{
		label: "单行输入", //控件类型名称
		value: 1, //类型值
		showKeys: [...commonKeys, ...inputKeys], //对应的控件属性
		configKeys: inputKeys,
	},
	{
		label: "多行输入",
		value: 2,
		showKeys: [...commonKeys, ...inputKeys],
		configKeys: inputKeys,
	},
	{
		label: "下拉选择",
		value: 3,
		showKeys: [...commonKeys, ...selectKeys],
		configKeys: selectKeys,
	},
	{
		label: "数字输入",
		value: 4,
		showKeys: [...commonKeys],
	},
	{
		label: "日期/时间选择",
		value: 5,
		showKeys: [...commonKeys, ...dateKeys],
		configKeys: dateKeys,
	},
	{
		label: "多选框",
		value: 8,
		showKeys: [...commonKeys, ...selectKeys],
		configKeys: selectKeys,
	},
	{
		label: "单选框",
		value: 9,
		showKeys: [...commonKeys, ...selectKeys],
		configKeys: selectKeys,
	},
	// {
	// 	label: "时间选择",
	// 	value: 10,
	// 	showKeys: [...commonKeys],
	// },
	{
		label: "文件上传",
		value: 11,
		showKeys: [...commonKeys, ...uploadKeys],
		configKeys: uploadKeys,
	},
];
//控制显示哪个类型的控件的属性
function showFormItems(changeFormItems, formItems, val) {
	changeFormItems(
		formItems.map((item) => {
			const control = controlList.find((cont) => {
				return cont.value === val;
			});
			return { key: item.key, show: control.showKeys.includes(item.key) };
		}),
		true,
	);
}
const urlRules = [
	{
		validator: (rule, value, callback) => {
			if (!value) {
				return callback(new Error("不能为空"));
			}
			const valkeys = Object.keys(value);
			let hasError = valkeys.some((key) => !value[key].toString().trim());
			if (hasError) {
				return callback(new Error("有未填写的值"));
			}
			callback();
		},
	},
];
//控件属性
function useFormItems(groupId, formViewerRef,type) {
	const itemsRef = useRef([]);
	itemsRef.current = [
		{
			key: "groupName",
			label: "组名",
			render: (form, changeFormItems) => {
				return getControl("Input", { disabled: true });
			},
		},
		{
			key: "fieldType",
			label: "控件类型",
			render: (form, changeFormItems) => {
				return getControl("Select", {
					selectList: controlList.map((item) => ({ label: item.label, value: item.value })),
					onChange(val) {
						//控件类型改变控制显示对应的属性输入框
						showFormItems(changeFormItems, itemsRef.current, val);
					},
				});
			},
			options: getOptions({ required: true }),
		},
		{
			key: "label",
			label: "控件Label",
			render: (form, changeFormItems) => {
				return getControl("Input");
			},
			options: getOptions({ required: true }),
		},
		{
			key: "fieldKey",
			label: "字段Key",
			render: (form, changeFormItems) => {
				return getControl("Input", {
					disabled: type === "update",
				});
			},
			options: getOptions({
				required: true,
				rules: [
					{
						validator: (rule, value, callback) => {
							const groups = formViewerRef.current.getFormGroups();
							let hasKey = groups.some((g) => {
								return g.formItems.some((item) => {
									return item.key === value;
								});
							});
							if (hasKey && type === "add") {
								return callback(new Error("key已存在，请填写其他的key"));
							}

							callback();
						},
					},
				],
			}),
		},
		{
			key: "required",
			label: "是否必填",
			labelFocused: true,
			render: (form, changeFormItems) => {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "是",
							value: 1,
						},
						{ label: "否", value: 0 },
					],
				});
			},
			options: getOptions({ required: true, initialValue: 1 }),
		},
		{
			key: "disabled",
			label: "是否默认禁用",
			labelFocused: true,
			render: (form, changeFormItems) => {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "是",
							value: 1,
						},
						{ label: "否", value: 0 },
					],
				});
			},
			options: getOptions({ required: true, initialValue: 0 }),
		},
		{
			key: "initialValue",
			label: "控件初始值",
			render: (form, changeFormItems) => {
				return getControl("Input");
			},
		},
		{
			key: "maxLength",
			label: "最大输入长度",
			show:false,
			render: (form, changeFormItems) => {
				return getControl("InputNumber");
			},
		},
		{
			key: "minLength",
			label: "最小输入长度",
			show:false,
			render: (form, changeFormItems) => {
				return getControl("InputNumber");
			},
		},

		{
			key: "selectList",
			label: "选项",
			show:false,
			labelFocused: true,
			render: (form, changeFormItems) => {
				return getControl("TreeInput", { multiple: false });
			},
			options: getOptions({
				required: true,
				initialValue: [],
				rules: [
					{
						validator: (rule, value, callback) => {
							const finished = itemsFromTree({
								tree: value,
								condition(val1, val2) {
									return val1.toString().trim() === val2.toString().trim();
								},
								sourceItem: { value: "" },
								keyObj: { id: "value", children: "children" },
							});
							if (finished) {
								return callback(new Error("选项中有未填写的值"));
							}
							callback();
						},
					},
				],
			}),
		},
		{
			key: "format",
			label: "格式",
			show:false,
			render: (form, changeFormItems) => {
				return getControl("Select", {
					selectList: Object.keys(dateFormats).map((key) => ({ label: key, value: key })),
				});
			},
			options: getOptions({ required: true, initialValue: "YYYY-MM-DD" }),
		},
		{
			key: "url",
			label: "上传地址",
			show:false,
			labelFocused: true,
			render: (form, changeFormItems) => {
				return (
					<ZselectInput
						selectList={["post", "get"].map((m) => ({ label: m, value: m }))}
						valueKey={{ label: "urlMethod", value: "url", paramName: "urlParamName" }}
						labelPlaceholde="请求方式"
						valuePlaceholder="请求地址"
						paramNamePlaceholder="参数名"
					/>
				);
			},
			options: getOptions({
				required: true,
				initialValue: { urlMethod: "post", url: "", urlParamName: "files" },
				rules: urlRules,
			}),
		},
		{
			key: "detailUrl",
			label: "获取已上传列表的地址",
			show:false,
			labelFocused: true,
			render: (form, changeFormItems) => {
				return (
					<ZselectInput
						selectList={["post", "get"].map((m) => ({ label: m, value: m }))}
						valueKey={{ label: "detailUrlMethod", value: "detailUrl", paramName: "detailUrlParamName" }}
						labelPlaceholde="请求方式"
						valuePlaceholder="请求地址"
						paramNamePlaceholder="参数名"
					/>
				);
			},
			options: getOptions({
				required: true,
				initialValue: { detailUrlMethod: "post", detailUrl: "", detailUrlParamName: "fileIds" },
				rules: urlRules,
			}),
		},
		{
			key: "regularExpression",
			label: "正则表达式",
			render: (form, changeFormItems) => {
				return getControl("Input");
			},
		},
		{
			key: "errorMsg",
			label: "错误提示",
			render: (form, changeFormItems) => {
				return getControl("Input");
			},
		},
		{
			key: "remark",
			label: "备注",
			render: (form, changeFormItems) => {
				return getControl("TextArea", {
					autosize: { minRows: 3 },
				});
			},
		},
	];
	return itemsRef.current;
}
function useEditPage(groupId, formItem, formViewerRef, type) {
	const groupRef = useRef();
	const items = useFormItems(groupId, formViewerRef, type);
	return useRef(
		ZeditSimpleFormHOC({
			pageHeader: {
				show: false,
			},
			pageFooter: {
				show: false,
			},
			form: {
				panelHeader: "控件属性",
				labelLayout: "inline",
				type: "update",
				defaultSpan: 24,
				submitBtnName: "确定",
				submitMsg: null,
				items,
				detailApiInterface(detailId, props, tool) {
					const group = { id: groupId };
					const groups = formViewerRef.current.getFormGroups();
					const i = groups.findIndex((g) => g.id == groupId);
					group.name = groups[i].name;
					groupRef.current = groups[i];

					let data = { groupName: group.name };
					if (formItem) {
						const currentItem = controlList.find((item) => {
							return item.value === formItem["fieldType"];
						});
						if (currentItem) {
							Object.keys(formItem).forEach((key) => {
								if (currentItem.showKeys.includes(key)) {
									data[key] = formItem[key];
								}
							});
						}
						try {
							const config = JSON.parse(formItem["config"]);

							if (config) {
								if (formItem["fieldType"] === 11) {
									const url = { urlMethod: "", url: "", urlParamName: "" };
									const detailUrl = { detailUrlMethod: "", detailUrl: "", detailUrlParamName: "" };
									Object.keys(config).forEach((key) => {
										switch (key) {
											case "urlMethod":
											case "url":
											case "urlParamName":
												url[key] = config[key];
												delete config[key];
												break;
											case "detailUrlMethod":
											case "detailUrl":
											case "detailUrlParamName":
												detailUrl[key] = config[key];
												delete config[key];
												break;
										}
									});
									config["url"] = url;
									config["detailUrl"] = detailUrl;
								}
								data = { ...data, ...config };
							}
						} catch (e) {}
						showFormItems(tool.getFormMethods().changeFormItems, items, formItem["fieldType"]);
					}
					return Promise.resolve({
						data,
					});
				},
				submitApiInterface(values, props, tool) {
					const control = controlList.find((item) => {
						return item.value === values["fieldType"];
					});
					if (Array.isArray(control.configKeys)) {
						const config = {};
						control.configKeys.forEach((key) => {
							config[key] = values[key];
							delete values[key];
						});
						values.config = config;
					}
					//上传控件的config要特殊处理
					if (values["fieldType"] === 11 && values.config) {
						let newConf = values.config;
						Object.keys(values.config).forEach((key) => {
							const val = values.config[key];
							if (key === "url" || key === "detailUrl") {
								newConf = { ...newConf, ...val };
							}
						});
						values.config = newConf;
					}
					if (values.config) {
						values.config = JSON.stringify(values.config);
					}
					const newItem = getFormItem(formItem ? { ...formItem, ...values } : values, groupRef.current);
					const currentItems = groupRef.current.groupRef.current.getFormItems();
					const i = currentItems.findIndex((item) => item["fieldKey"] === values["fieldKey"]);
					let newItems = currentItems.slice(0);
					if (i > -1) {
						newItems.splice(i, 1, newItem);
					} else {
						newItems = [...newItems, newItem];
					}
					groupRef.current.groupRef.current.setFormItems(newItems);
					tool.showRightModal(false, "controlProtoModal");
					return Promise.resolve({
						msg: "添加控件成功",
					});
				},
			},
		}),
	).current;
}
export default React.memo(
	React.forwardRef(function AddColForm({ groupId, formItem, formViewerRef, type }, ref) {
		const EditForm = useEditPage(groupId, formItem, formViewerRef, type);
		return <EditForm detailId="1" />;
	}),
);
