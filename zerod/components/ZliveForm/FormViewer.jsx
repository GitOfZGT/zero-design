import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import Zform from "../Zform";
import { dataType } from "../zTool";
import { Button, Col } from "antd";
import controls from "./controls";
import linkageAction from "./linkageAction";
const FormGroup = React.memo(
	React.forwardRef(function({ name, formItems, getOtherForms, submitBtnRender, labelLayout, doLinkage ,onSubmit }, ref) {
		const formRef = useRef();
		const startRef = useRef(true);
		const [show, setShow] = useState(true);
		const getFormInstance = useCallback((form, methods) => {
			formRef.current = { form, methods };
		});
		useImperativeHandle(ref, () => ({
			getForm: () => {
				return formRef.current;
			},
			show: (show) => {
				setShow(show);
			},
		}));
		useEffect(() => {
			if (startRef.current) {
				startRef.current = false;
				return;
			}
			if (show) {
				doLinkage && doLinkage();
			}
		}, [show]);
		return show ? (
			<React.Fragment>
				<div className="z-panel-heading">{name}</div>
				<div className="z-panel-body">
					<Zform
						onSubmit={onSubmit}
						labelLayout={labelLayout ? labelLayout : "inline"}
						items={formItems}
						submitBtnName=""
						getFormInstance={getFormInstance}
						otherForms={getOtherForms}
						submitBtnRender={submitBtnRender}
					/>
				</div>
			</React.Fragment>
		) : null;
	}),
);
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
function useGetGroupsCallback(formGroups) {
	const groupsRef = useRef();
	useEffect(() => {
		groupsRef.current = formGroups;
	}, [formGroups]);

	return useCallback(() => {
		return groupsRef.current;
	}, [groupsRef]);
}
function useLinkageCallback(formGroups, formData, getGroupsFn) {
	const doLinkage = useCallback(() => {
		if (formData) {
			linkageAction(formData.linkages, getGroupsFn);
		}
	}, [getGroupsFn, formData]);
	useEffect(() => {
		doLinkage();
	}, [formGroups]);
	return doLinkage;
}
const buttonType = {
	1: "primary",
	2: "default",
	3: "dashed",
	4: "danger",
};
//formData: {id:1,name:"表",labelLayout:"",code:"dog_check_in_form",sectionList: [{id:"12",name:"名称",seq:1,formFieldInfoList:[{config:"{}",fieldKey:"name",fieldType:1,id:333,initialValue:"",label:"名称",required:1,span:8,regularExpression:null,seq:1,placeholder:"",errorMsg:""}]}]}
const FormViewer = React.memo(
	React.forwardRef(function({ formData, onSubmit }, ref) {
		const [formGroups, setFormGroups] = useState([]);
		const getOtherForms = useCallback(() => {
			return formGroups.map((g) => g.groupRef.current.getForm().form);
		}, [formGroups]);
		const submitBtnRender = useCallback(() => {
			return formData && dataType.isArray(formData.buttonList) ? (
				<Col span={24} className="z-text-center">
					{formData.buttonList.map((e) => {
						return (
							<Button key={e.value} type={buttonType[e.buttonType]} htmlType="submit">
								{e.value}
							</Button>
						);
					})}
				</Col>
			) : null;
		}, [formData]);
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
								submitBtnRender={formGroups.length - 1 == i ? submitBtnRender : undefined}
							/>
						);
					})}
				</div>
			</div>
		);
	}),
);

export default FormViewer;
