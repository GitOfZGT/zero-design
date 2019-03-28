import React, { useState, useEffect, useImperativeHandle } from "react";
import { Row, Col, Form } from "antd";
import cssClass from "./style.scss";
import Zform from "../Zform";
import { dataType } from "../zTool";
function extendChange(items, onChange) {
	return items.map((item) => {
		let newRender = item.render;
		if ((dataType.isBoolean(item.isFormItem) && item.isFormItem) || !dataType.isBoolean(item.isFormItem)) {
			newRender = (...rest) => {
				const res = item.render(...rest);
				if (React.isValidElement(res)) {
					React.cloneElement(res, {
						...res.props,
						onChange: (e) => {
							if (dataType.isFunction(res.props.onChange)) {
								res.props.onChange(e);
							}
							onChange(e);
						},
					});
				}
			};
		}
		return { ...items, render: newRender };
	});
}
export function ZrowsForm({ value, onChange, items, dataSource }, ref) {
	const [stateItems, setStateItems] = useState(extendChange(items));

	return (
		<div className={cssClass["z-rows-form"]}>
			{dataSource.map((row) => {
				return <Zform items={stateItems} submitBtnName=""/>;
			})}
		</div>
	);
}
