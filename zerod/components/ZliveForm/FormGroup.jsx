import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import Zform from "../Zform";
import FormContext from "./FormContext";


const MyForm = FormContext.setConsumer(Zform);
const FormGroup = React.memo(
	React.forwardRef(function(
		{ formItems, getOtherForms, labelLayout, doLinkage, onSubmit, group,titleLeftRender, titleRightRender, children, formValues },
		ref,
	) {
		const domRef = useRef();
		const formRef = useRef({});
		const startRef = useRef(true);
		const [show, setShow] = useState(true);
		const getFormInstance = useCallback(
			(form, methods) => {
				formRef.current = { form, methods };
			},
			[formRef.current],
		);
		const [stateFormItems, setFormItems] = useState([]);
		useEffect(() => {
			setFormItems(Array.isArray(formItems) ? formItems : []);
		}, [formItems]);
		useImperativeHandle(ref, () => ({
			getForm() {
				return { ...formRef.current, group };
			},
			show(show) {
				setShow(show);
			},
			getShowState() {
				return show;
			},
			getWrapperDom() {
				return domRef.current;
			},
			getFormItems() {
				return stateFormItems;
			},
			setFormItems,
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

		const [groupName, setGroupName] = useState();
		useEffect(() => {
			setGroupName(group.name);
		}, [group.name]);
		const nameChange = useCallback(
			(val) => {
				group.name = val;
				setGroupName(val);
			},
			[group, setGroupName],
		);
		// console.log("--groups--" + group.id, stateFormItems);
		return show ? (
			<div className="z-view-form-panel" ref={domRef}>
				<div className="z-panel-heading z-flex-space-between">
					<div className="z-flex-items-v-center">
						{typeof titleLeftRender === "function" ? titleLeftRender(group,groupName,nameChange):<span>{groupName}</span>}
					</div>
					<div className="z-flex-items-v-center">
						{typeof titleRightRender === "function" && titleRightRender(group)}
					</div>
				</div>
				<div className="z-panel-body z-padding-bottom-0-important">
					<MyForm
						group={group}
						onSubmit={onSubmit}
						labelLayout={labelLayout ? labelLayout : "inline"}
						items={stateFormItems}
						submitBtnName=""
						getFormInstance={getFormInstance}
						otherForms={getOtherForms}
						formDefaultValues={formValues}
					/>
					{children}
				</div>
			</div>
		) : null;
	}),
);
export default FormGroup;
