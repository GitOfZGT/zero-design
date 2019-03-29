import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import Zform from "../Zform";
const FormGroup = React.memo(
	React.forwardRef(function({ name, formItems, getOtherForms, labelLayout, doLinkage, onSubmit }, ref) {
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
			getShowState: () => {
				return show;
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
					/>
				</div>
			</React.Fragment>
		) : null;
	}),
);
export default FormGroup;