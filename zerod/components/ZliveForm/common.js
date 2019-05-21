import React from "react";
import { dataType } from "../zTool";
import controls from "./controls";
//以 "seq" 字段排序
function sortList(o1, o2) {
	const v1 = o1.hasOwnProperty("seq") ? o1["seq"] : 0;
	const v2 = o2.hasOwnProperty("seq") ? o2["seq"] : 0;
	return v1 - v2;
}

export function getFormItem(field, group, linkage, getGroupsFn, imperative, customOnChange, customFormRules) {
	const getRules = customFormRules ? customFormRules[field.fieldKey] : null;
	const newField = {
		...field,
		groupId: group.id,
		seq: field.seq,
		key: field.fieldKey,
		label: field.label,
		span: field.span ? field.span : 8,
		labelFocused: [8, 9, 11].includes(field.fieldType),
		imperative,
		customOnChange,
	};
	newField.options = controls[field.fieldType].getOptions(
		newField,
		typeof getRules === "function" ? getRules(newField, imperative) : [],
	);

	newField.render = () => {
		return controls[newField.fieldType].getControl(newField, linkage, getGroupsFn, { disabled: field.disabled });
	};
	return newField;
}
export function getGroupItem(item, linkage, getGroupsFn, imperative, customOnChange, customFormRules) {
	const formItems = item.formFieldInfoList.map((field) => {
		return getFormItem(field, item, linkage, getGroupsFn, imperative, customOnChange, customFormRules);
	});
	formItems.sort(sortList);
	return {
		additive: item.additive, //添加状态
		groupRef: React.createRef(),
		seq: item.seq,
		id: item.id,
		name: item.name,
		formItems,
	};
}

export function translateGroups(formData, getGroupsFn, linkage, imperative) {
	if (dataType.isObject(formData) && Array.isArray(formData.sectionList)) {
		const groups = formData.sectionList.map((item) => {
			return getGroupItem(
				item,
				linkage && formData.linkages ? formData.linkages : null,
				getGroupsFn,
				imperative,
				formData.customOnChange,
				formData.customFormRules,
			);
		});

		groups.sort(sortList);
		return groups;
	} else {
		return [];
	}
}
