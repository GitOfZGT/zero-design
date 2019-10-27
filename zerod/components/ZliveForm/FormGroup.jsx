import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import Zform from "../Zform";
import FormContext from "./FormContext";

const MyForm = FormContext.setConsumer(Zform);
const FormGroup = React.memo(
	React.forwardRef(function(
		{
			formItems,
			getOtherForms,
			labelLayout,
			onSubmit,
			group,
			titleLeftRender,
			titleRightRender,
			children,
			formValues,
			momentFormat,
			booleanToNumber,
			afterItemsRendered,
		},
		ref,
	) {
		const domRef = useRef();
		const formRef = useRef({});
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
			show(showStatus, seftItem) {
				if (show === showStatus) return;
				setShow(showStatus);
				formRef.current.methods.changeFormItems(
					stateFormItems.map(item => ({
						key: item.key,
						show: showStatus,
					})),
					true,
				);
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

		const [groupName, setGroupName] = useState();
		useEffect(() => {
			setGroupName(group.name);
		}, [group.name]);
		const nameChange = useCallback(
			val => {
				group.name = val;
				setGroupName(val);
			},
			[group, setGroupName],
		);
		// console.log("--groups--" + group.id, stateFormItems);
		return (
			<div className="z-view-form-panel" ref={domRef} style={!show ? { display: "none" } : null}>
				<div className="z-panel-heading z-bordercolor-light-orange z-text-orange z-flex-space-between">
					<div className="z-flex-items-v-center">
						{typeof titleLeftRender === "function" ? (
							titleLeftRender(group, groupName, nameChange)
						) : (
							<span>{groupName}</span>
						)}
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
						momentFormat={momentFormat}
						booleanToNumber={booleanToNumber}
						afterItemsRendered={afterItemsRendered}
						initAnimation={false}
					/>
					{children}
				</div>
			</div>
		);
	}),
);
export default FormGroup;
