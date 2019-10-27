import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { dataType } from "../zTool";
import PropTypes from "prop-types";
import {
	useGetGroupsCallback,
	useLinkageCallback,
	useGetOtherFormsCallback,
	// useSubmitBtn,
	getEachFormMethod,
	useDoSubmitCallback,
} from "./customHook";
import FormGroup from "./FormGroup";
import { translateGroups } from "./common";
import "./style.scss";
//formData: {id:1,name:"表",labelLayout:"",code:"dog_check_in_form",sectionList: [{id:"12",name:"名称",seq:1,formFieldInfoList:[{config:"{}",fieldKey:"name",fieldType:1,id:333,initialValue:"",label:"名称",required:1,span:8,regularExpression:null,seq:1,placeholder:"",errorMsg:""}]}]}
const FormViewer = React.forwardRef(function(
	{
		formData,
		formValues,
		onSubmit,
		groupTitleLeftRender,
		groupTitleRightRender,
		className,
		onFormGroupsChange,
		linkage,
		groupChildrenRender,
		submitBtnRender,
		title,
		style,
		momentFormat,
		booleanToNumber,
		afterItemsRendered,
		customOnChange,
		customFormRules,
		customControlRender,
		noAsync
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
		setFormGroups(
			translateGroups({
				formData,
				getGroupsFn,
				linkage: _linkage,
				imperative: imperativeRef,
				customOnChange,
				customFormRules,
				customControlRender,
				noAsync,
			}),
		);
		setAllFormRendered([]);
	}, [formData]);
	//formGroups改变时==>调用onFormGroupsChange
	useEffect(() => {
		dataType.isFunction(onFormGroupsChange) && onFormGroupsChange(formGroups);
	}, [formGroups]);
	const doLinkage = _linkage ? useLinkageCallback(formData, getGroupsFn) : null;
	useImperativeHandle(ref, imperativeRef.current);
	const titleText =
		dataType.isBoolean(title) && !title ? "" : title ? title : formData && formData.name ? formData.name : "";
	const [allFormRendered, setAllFormRendered] = useState([]);
	useEffect(() => {
		if (allFormRendered.length && allFormRendered.length === formGroups.length) {
			setAllFormRendered([]);
			doLinkage && doLinkage();
			afterItemsRendered && afterItemsRendered();
		}
	}, [allFormRendered]);

	return (
		<div className={`z-panel z-padding-bottom-20 ${className ? className : ""}`} style={style}>
			{titleText ? (
				<div className="z-panel-body z-padding-bottom-0-important z-text-center">
					<h2>{titleText}</h2>
				</div>
			) : null}
			{formGroups.map((group, i) => {
				return (
					<FormGroup
						titleLeftRender={
							groupTitleLeftRender
								? (group, groupName, nameChange) => {
										return groupTitleLeftRender(group, groupName, nameChange, formGroups);
								  }
								: undefined
						}
						titleRightRender={groupTitleRightRender}
						group={group}
						onSubmit={onSubmit}
						key={group.id}
						labelLayout={group.labelLayout}
						ref={group.groupRef}
						formItems={group.formItems}
						getOtherForms={getOtherForms}
						formValues={formValues}
						momentFormat={momentFormat}
						booleanToNumber={booleanToNumber}
						afterItemsRendered={() => {
							setAllFormRendered(allFormRendered.concat(["success"]));
						}}
					>
						{typeof groupChildrenRender == "function" && groupChildrenRender(group)}
					</FormGroup>
				);
			})}
			{typeof submitBtnRender == "function" ? submitBtnRender(doSubmit) : null}
		</div>
	);
});
FormViewer.propTypes = {
	formData: PropTypes.object.isRequired,
	formValues: PropTypes.object,
	onSubmit: PropTypes.func,
	groupTitleRightRender: PropTypes.func,
	className: PropTypes.string,
	onFormGroupsChange: PropTypes.func,
	linkage: PropTypes.bool,
	groupChildrenRender: PropTypes.func,
	submitBtnRender: PropTypes.func,
	afterItemsRendered: PropTypes.func,
	momentFormat: PropTypes.bool,
	booleanToNumber: PropTypes.bool,
	useDefaultVisible: PropTypes.bool, //是否启用控件的默认显示控制
	customOnChange: PropTypes.object,
	customFormRules: PropTypes.object,
	customControlRender: PropTypes.object,
};
export default React.memo(FormViewer);
