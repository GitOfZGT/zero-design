import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { dataType } from "../zTool";
import PropTypes from "prop-types";
import controls from "./controls";
import "./style.scss";
import {
	useGetGroupsCallback,
	useLinkageCallback,
	useGetOtherFormsCallback,
	// useSubmitBtn,
	getEachFormMethod,
	useDoSubmitCallback,
} from "./customHook";
import FormGroup from "./FormGroup";
export function getFormItem(field, group, linkage, getGroupsFn, imperative, customOnChange, customFormRules) {
	const getRules = customFormRules ? customFormRules[field.fieldKey] : null;
	const newField = {
		...field,
		groupId: group.id,
		seq: field.seq,
		key: field.fieldKey,
		label: field.label,
		span: field.span,
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
		groupRef: React.createRef(),
		seq: item.seq,
		id: item.id,
		name: item.name,
		formItems,
	};
}
function sortList(o1, o2) {
	const v1 = o1.hasOwnProperty("seq") ? o1["seq"] : 0;
	const v2 = o2.hasOwnProperty("seq") ? o2["seq"] : 0;
	return v1 - v2;
}

function translateGroups(formData, getGroupsFn, linkage, imperative) {
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

//formData: {id:1,name:"表",labelLayout:"",code:"dog_check_in_form",sectionList: [{id:"12",name:"名称",seq:1,formFieldInfoList:[{config:"{}",fieldKey:"name",fieldType:1,id:333,initialValue:"",label:"名称",required:1,span:8,regularExpression:null,seq:1,placeholder:"",errorMsg:""}]}]}
const FormViewer = React.forwardRef(function(
	{
		formData,
		formValues,
		onSubmit,
		groupTitleRightRender,
		className,
		onFormGroupsChange,
		linkage,
		groupChildrenRender,
		submitBtnRender,
		title,
	},
	ref,
) {
	const _linkage = dataType.isBoolean(linkage) ? linkage : true;
	const [formGroups, setFormGroups] = useState([]);
	const getOtherForms = useGetOtherFormsCallback(formGroups);
	// const submitBtnRender = useSubmitBtn(formData, formGroups);
	const getGroupsFn = useGetGroupsCallback(formGroups);
	const doSubmit = useDoSubmitCallback(formGroups);
	const imperativeRef = useRef();
	imperativeRef.current = () => {
		return {
			getFormGroups: () => {
				return formGroups;
			},
			setFormGroups,
			getEachFormMethod: () => {
				return getEachFormMethod(formGroups, true);
			},
		};
	};
	//formData改变时==>处理数据
	useEffect(() => {
		setFormGroups(translateGroups(formData, getGroupsFn, _linkage, imperativeRef));
	}, [formData]);
	//formGroups改变时==>调用onFormGroupsChange
	useEffect(() => {
		dataType.isFunction(onFormGroupsChange) && onFormGroupsChange(formGroups);
	}, [formGroups]);
	const doLinkage = _linkage ? useLinkageCallback(formGroups, formData, getGroupsFn) : null;
	useImperativeHandle(ref, imperativeRef.current);
	const titleText =
		dataType.isBoolean(title) && !title ? "" : title ? title : formData && formData.name ? formData.name : "";
	return (
		<div className="z-padding-20">
			<div className={`z-panel ${className ? className : ""}`}>
				{titleText ? (
					<div className="z-panel-body z-padding-bottom-0-important z-text-center">
						<h2>{titleText}</h2>
					</div>
				) : null}
				{formGroups.map((group, i) => {
					return (
						<FormGroup
							titleRightRender={groupTitleRightRender}
							group={group}
							onSubmit={onSubmit}
							doLinkage={doLinkage}
							key={group.id}
							labelLayout={group.labelLayout}
							name={group.name}
							ref={group.groupRef}
							formItems={group.formItems}
							getOtherForms={getOtherForms}
							formValues={formValues}
						>
							{typeof groupChildrenRender == "function" && groupChildrenRender(group)}
						</FormGroup>
					);
				})}
				{typeof submitBtnRender == "function" ? submitBtnRender(doSubmit) : null}
			</div>
		</div>
	);
});
FormViewer.propTypes = {
	formData: PropTypes.object,
	formValues: PropTypes.object,
	onSubmit: PropTypes.func,
	groupTitleRightRender: PropTypes.func,
	className: PropTypes.string,
	onFormGroupsChange: PropTypes.func,
	linkage: PropTypes.bool,
	groupChildrenRender: PropTypes.func,
	submitBtnRender: PropTypes.func,
};
export default React.memo(FormViewer);
