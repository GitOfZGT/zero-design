import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import ZeditSimpleFormHOC from "../ZeditSimpleFormHOC";
import { getControl, getOptions } from "../Zform/controls";
import { getFormItem } from "./FormViewer";
const controlList = [
	{
		label: "单行输入",
		value: 1,
	},
	{
		label: "多行输入",
		value: 2,
	},
	{
		label: "下拉选择",
		value: 3,
	},
	{
		label: "数字输入",
		value: 4,
	},
	{
		label: "日期选择",
		value: 5,
	},
	{
		label: "多选框",
		value: 8,
	},
	{
		label: "单选框",
		value: 9,
	},
	{
		label: "时间选择",
		value: 10,
	},
	{
		label: "上传",
		value: 11,
	},
];
function useFormItems() {
	const itemsRef = useRef([
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
					selectList: controlList,
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
				return getControl("Input");
			},
			options: getOptions({ required: true }),
		},
		// {
		// 	key: "span",
		// 	label: "栅栏占格(1~24)",
		// 	render: (form, changeFormItems) => {
		// 		return getControl("InputNumber", {
		// 			max: 24,
		// 			min: 1,
		// 		});
		// 	},
		// },
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
			key: "initialValue",
			label: "控件初始值",
			render: (form, changeFormItems) => {
				return getControl("Input");
			},
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
	]).current;
	return itemsRef;
}
function useEditPage(groupId, formItem, formViewerRef) {
	const groupRef = useRef();
	const items = useFormItems();
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

					return Promise.resolve({
						data: {
							groupName: group.name,
							...(formItem ? formItem : {}),
						},
					});
				},
				submitApiInterface(values, props, tool) {
					const newItem = getFormItem(values, groupRef.current);
					const currentItems = groupRef.current.groupRef.current.getFormItems();
					const i = currentItems.findIndex((item) => item.key == values.key);
					let newItems = [];
					if (i > -1) {
						currentItems.splice(i, 1, newItem);
						newItems = [...currentItems];
					} else {
						newItems = [...currentItems, newItem];
					}
					groupRef.current.groupRef.current.setFormItems(newItems);
				},
			},
		}),
	).current;
}
export default React.memo(
	React.forwardRef(function AddColForm({ groupId, formItem, formViewerRef }, ref) {
		const EditForm = useEditPage(groupId, formItem, formViewerRef);
		return <EditForm detailId="1" />;
	}),
);
