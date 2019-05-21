import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import { getControl } from "../Zform/controls";
import { Input, Col } from "antd";
import cssClass from "./style.scss";
const propTypes = {
	size: PropTypes.string,
	selectList: PropTypes.arrayOf(PropTypes.object),
	value: PropTypes.object,
	valueKey: PropTypes.object,
	disabled: PropTypes.bool,
	labelPlaceholder: PropTypes.string,
	valuePlaceholder: PropTypes.string,
	paramNamePlaceholder: PropTypes.string,
};
const defaultProps = {
	valueKey: { label: "label", value: "value", paramName: "paramName" },
	size: "default",
	selectList: [],
	selectSpan: 6,
	inputSpan: 12,
	paramNameSpan: 6,
	disabled: false,
};

const MyComponent = React.forwardRef(function ZselectInput(props, ref) {
	const {
		size,
		selectList,
		selectSpan,
		inputSpan,
		paramNameSpan,
		onChange,
		value,
		valueKey,
		disabled,
		className,
		labelPlaceholder,
		valuePlaceholder,
		paramNamePlaceholder,
	} = props;
	// console.log("----value",value)
	const selectChange = (val) => {
		typeof onChange === "function" &&
			onChange(
				value
					? { ...value, [valueKey.label]: val }
					: { [valueKey.label]: val, [valueKey.value]: "", [valueKey.paramName]: "" },
			);
	};
	const inputChange = (e) => {
		typeof onChange === "function" &&
			onChange(
				value
					? { ...value, [valueKey.value]: e.target.value }
					: { [valueKey.label]: "", [valueKey.value]: e.target.value, [valueKey.paramName]: "" },
			);
	};
	const nameChange = (e) => {
		typeof onChange === "function" &&
			onChange(
				value
					? { ...value, [valueKey.paramName]: e.target.value }
					: { [valueKey.label]: "", [valueKey.value]: "", [valueKey.paramName]: e.target.value },
			);
	};
	const _label = value && value[valueKey.label] !== undefined ? value[valueKey.label] : "";
	const _value = value && value[valueKey.value] !== undefined ? value[valueKey.value] : "";
	const _paramName = value && value[valueKey.paramName] !== undefined ? value[valueKey.paramName] : "";
	return (
		<Input.Group compact size={size} className={`${cssClass["z-select-input"]} ${className ? className : ""}`}>
			<Col span={selectSpan}>
				{getControl("Select", {
					value: _label,
					selectList,
					onChange: selectChange,
					disabled,
					className: "z-label",
					placeholder: labelPlaceholder,
				})}
			</Col>
			<Col span={inputSpan}>
				{getControl("Input", {
					value: _value,
					onChange: inputChange,
					disabled,
					className: "z-value",
					placeholder: valuePlaceholder,
				})}
			</Col>
			<Col span={paramNameSpan}>
				{getControl("Input", {
					value: _paramName,
					onChange: nameChange,
					disabled,
					className: "z-name",
					placeholder: paramNamePlaceholder,
				})}
			</Col>
		</Input.Group>
	);
});
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;
export default React.memo(MyComponent);
