/*
 * @Author: zgt
 * @Date: 2019-05-18 14:14:29
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-12 15:55:32
 * @Description: file content
 */
import React from "react";
import { dataType } from "../zTool";
import controls from "./controls";

export const regionNames = [
	{ label: "省份", value: "province" },
	{ label: "城市", value: "city" },
	{ label: "区", value: "district" },
	{ label: "街道", value: "street" },
	{ label: "省市", value: "province,city" },
	{ label: "省市区", value: "province,city,district" },
	{ label: "省市区街道", value: "province,city,district,street" },
];

//以 "seq" 字段排序
function sortList(o1, o2) {
	const v1 = o1.hasOwnProperty("seq") ? o1["seq"] : 0;
	const v2 = o2.hasOwnProperty("seq") ? o2["seq"] : 0;
	return v1 - v2;
}

export function pareLinkages(linkages) {
	if (Array.isArray(linkages)) {
		return linkages;
	} else if (typeof linkages === "string" && /^\[.+/.test(linkages)) {
		return JSON.parse(linkages);
	}
	return [];
}
//单个formItem
export function getFormItem({
	field,
	group,
	linkage,
	getGroupsFn,
	imperative,
	customOnChange,
	customFormRules,
	customControlRender,
	noAsync,
}) {
	const getRules = customFormRules ? customFormRules[field.fieldKey] : null;
	
	const newField = {
		...field,
		groupId: group.id,
		seq: field.seq,
		key: field.fieldKey,
		label: field.label,
		span: field.span ? field.span : 8,
		labelFocused: [5, 8, 9, 10, 11, 14].includes(field.fieldType),
		imperative,
		customOnChange,
		customControlRender: field.fieldType === 14 ? customControlRender : undefined,
	};
	if (!customControlRender && field.fieldType === 14) {
		newField.isFormItem = true;
	}
	newField.options = controls[field.fieldType].getOptions(
		newField,
		typeof getRules === "function" ? getRules(newField, imperative) : [],
	);

	newField.render = currentForm => {
		return controls[newField.fieldType].getControl(
			newField,
			linkage,
			getGroupsFn,
			{ disabled: field.disabled ,noAsync},
			undefined,
			currentForm,
		);
	};
	return newField;
}
//从item.formFieldInfoList生成Zform的items
export function getGroupItem(opt = {}) {
	const { group, labelLayout } = opt;
	const formItems = group.formFieldInfoList.map(field => {
		return getFormItem({
			field,
			...opt,
		});
	});
	formItems.sort(sortList);
	return {
		additive: group.additive, //添加状态
		groupRef: React.createRef(),
		seq: group.seq,
		id: group.id,
		name: group.name,
		formItems,
		labelLayout,
	};
}
//从formData生成group数据
export function translateGroups({
	formData,
	getGroupsFn,
	linkage,
	imperative,
	customOnChange,
	customFormRules,
	customControlRender,
	noAsync,
}) {
	if (dataType.isObject(formData) && Array.isArray(formData.sectionList)) {
		const groups = formData.sectionList.map(group => {
			return getGroupItem({
				group,
				linkage: linkage ? pareLinkages(formData.linkages) : null,
				getGroupsFn,
				imperative,
				customOnChange: customOnChange || formData.customOnChange,
				customFormRules: customFormRules || formData.customFormRules,
				customControlRender: customControlRender || formData.customControlRender,
				labelLayout: formData.labelLayout,
				noAsync,
			});
		});

		groups.sort(sortList);
		return groups;
	} else {
		return [];
	}
}
//移除linkageRef对应fieldKey的联动配置
export function removeSomeLinkage(linkageRef, fieldKey) {
	let hasRemoveAge = false;
	linkageRef.current = linkageRef.current.filter(age => {
		const unlikeness = age.src["fieldKey"] !== fieldKey;
		if (unlikeness) {
			age.dist.forEach(d => {
				d.fields = d.fields.filter(f => {
					const unlikeness = f["fieldKey"] !== fieldKey;
					if (!hasRemoveAge && !unlikeness) {
						hasRemoveAge = true;
					}
					return unlikeness;
				});
			});
		}
		if (!hasRemoveAge && !unlikeness) {
			hasRemoveAge = true;
		}
		return unlikeness;
	});
	return hasRemoveAge;
}
