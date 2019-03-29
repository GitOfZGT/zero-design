import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { dataType } from "../zTool";
import controls from "./controls";
import {
	useGetGroupsCallback,
	useLinkageCallback,
	useGetOtherFormsCallback,
	useSubmitBtn,
} from "./customHook";
import FormGroup from "./FormGroup";
function sortList(o1, o2) {
	const v1 = o1.hasOwnProperty("seq") ? o1["seq"] : 0;
	const v2 = o2.hasOwnProperty("seq") ? o2["seq"] : 0;
	return v1 - v2;
}
function translateGroups(formData, getGroupsFn) {
	if (dataType.isObject(formData)) {
		const groups = formData.sectionList.map((item) => {
			const formItems = item.formFieldInfoList.map((field) => {
				const render = () => {
					return controls[field.fieldType].getControl(field, formData.linkages, getGroupsFn);
				};
				const options = controls[field.fieldType].getOptions(field);
				return {
					...field,
					seq: field.seq,
					key: field.fieldKey,
					label: field.label,
					span: field.span,
					labelFocused: [8, 9, 11].includes(field.fieldType),
					render,
					options,
				};
			});
			formItems.sort(sortList);
			return {
				groupRef: React.createRef(),
				seq: item.seq,
				id: item.id,
				name: item.name,
				formItems,
			};
		});

		groups.sort(sortList);
		return groups;
	} else {
		return [];
	}
}


//formData: {id:1,name:"表",labelLayout:"",code:"dog_check_in_form",sectionList: [{id:"12",name:"名称",seq:1,formFieldInfoList:[{config:"{}",fieldKey:"name",fieldType:1,id:333,initialValue:"",label:"名称",required:1,span:8,regularExpression:null,seq:1,placeholder:"",errorMsg:""}]}]}
const FormViewer = React.memo(
	React.forwardRef(function({ formData, onSubmit }, ref) {
		const [formGroups, setFormGroups] = useState([]);
		const getOtherForms = useGetOtherFormsCallback(formGroups);
		const submitBtnRender = useSubmitBtn(formData, formGroups);
		const getGroupsFn = useGetGroupsCallback(formGroups);
		useEffect(() => {
			setFormGroups(translateGroups(formData, getGroupsFn));
		}, [formData]);
		const doLinkage = useLinkageCallback(formGroups, formData, getGroupsFn);
		return (
			<div className="z-padding-20 app-body">
				<div className="z-panel">
					{formGroups.map((form, i) => {
						return (
							<FormGroup
								onSubmit={onSubmit}
								doLinkage={doLinkage}
								key={form.id}
								labelLayout={form.labelLayout}
								name={form.name}
								ref={form.groupRef}
								formItems={form.formItems}
								getOtherForms={getOtherForms}
							/>
						);
					})}
					{submitBtnRender()}
				</div>
			</div>
		);
	}),
);

export default FormViewer;
