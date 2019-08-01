import React from "react";
import { dataType } from "../zTool";
import controls from "./controls";
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
export function getFormItem(field, group, linkage, getGroupsFn, imperative, customOnChange, customFormRules) {
	const getRules = customFormRules ? customFormRules[field.fieldKey] : null;
	const newField = {
		...field,
		groupId: group.id,
		seq: field.seq,
		key: field.fieldKey,
		label: field.label,
		span: field.span ? field.span : 8,
		labelFocused: [8, 9, 11, 5].includes(field.fieldType),
		imperative,
		customOnChange,
	};
	newField.options = controls[field.fieldType].getOptions(
		newField,
		typeof getRules === "function" ? getRules(newField, imperative) : [],
	);

	newField.render = currentForm => {
		return controls[newField.fieldType].getControl(
			newField,
			linkage,
			getGroupsFn,
			{ disabled: field.disabled },
			undefined,
			currentForm,
		);
	};
	return newField;
}
export function getGroupItem(item, linkage, getGroupsFn, imperative, customOnChange, customFormRules, labelLayout) {
	const formItems = item.formFieldInfoList.map(field => {
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
		labelLayout,
	};
}

export function translateGroups(formData, getGroupsFn, linkage, imperative) {
	if (dataType.isObject(formData) && Array.isArray(formData.sectionList)) {
		const groups = formData.sectionList.map(item => {
			return getGroupItem(
				item,
				linkage ? pareLinkages(formData.linkages) : null,
				getGroupsFn,
				imperative,
				formData.customOnChange,
				formData.customFormRules,
				formData.labelLayout,
			);
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
