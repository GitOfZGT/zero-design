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
	leftPlaceholder: PropTypes.string,
	centerPlaceholder: PropTypes.string,
	rightPlaceholder: PropTypes.string,
	controlCostrom: PropTypes.object,
};
const defaultProps = {
	valueKey: { left: "label", center: "value", right: "paramName" },
	size: "default",
	selectList: [],
	leftSpan: 6,
	centerSpan: 12,
	rightSpan: 6,
	disabled: false,
	controlCostrom: { left: null, center: null, right: null },
};

const MyComponent = React.forwardRef(function ZselectInput(props, ref) {
	const {
		size,
		selectList,
		leftSpan,
		centerSpan,
		rightSpan,
		onChange,
		value,
		valueKey,
		disabled,
		className,
		leftPlaceholder,
		centerPlaceholder,
		rightPlaceholder,
		controlCostrom,
	} = props;
	// console.log("----value",value)
	const leftChange = val => {
		typeof onChange === "function" &&
			onChange(
				value
					? { ...value, [valueKey.left]: val }
					: { [valueKey.left]: val, [valueKey.center]: "", [valueKey.right]: "" },
			);
	};
	const centerChange = val => {
		typeof onChange === "function" &&
			onChange(
				value
					? { ...value, [valueKey.center]: val }
					: { [valueKey.left]: "", [valueKey.center]: val, [valueKey.right]: "" },
			);
	};
	const rightChange = val => {
		typeof onChange === "function" &&
			onChange(
				value
					? { ...value, [valueKey.right]: val }
					: { [valueKey.left]: "", [valueKey.center]: "", [valueKey.right]: val },
			);
	};
	const _left = value && value[valueKey.left] !== undefined ? value[valueKey.left] : "";
	const _center = value && value[valueKey.center] !== undefined ? value[valueKey.center] : "";
	const _right = value && value[valueKey.right] !== undefined ? value[valueKey.right] : "";
	return (
		<Input.Group compact size={size} className={`${cssClass["z-select-input"]} ${className ? className : ""}`}>
			{leftSpan ? (
				<Col span={leftSpan}>
					{typeof controlCostrom.left === "function"
						? controlCostrom.left(_left, leftChange)
						: getControl("Select", {
								value: _left,
								selectList,
								onChange: leftChange,
								disabled,
								className: "z-label",
								placeholder: leftPlaceholder,
						  })}
				</Col>
			) : null}
			{centerSpan ? (
				<Col span={centerSpan}>
					{typeof controlCostrom.center === "function"
						? controlCostrom.center(_center, centerChange)
						: getControl("Input", {
								value: _center,
								onChange: e => {
									centerChange(e.target.value);
								},
								disabled,
								className: "z-value",
								placeholder: centerPlaceholder,
						  })}
				</Col>
			) : null}
			{rightSpan ? (
				<Col span={rightSpan}>
					{typeof controlCostrom.right === "function"
						? controlCostrom.right(_right, rightChange)
						: getControl("Input", {
								value: _right,
								onChange: e => {
									rightChange(e.target.value);
								},
								disabled,
								className: "z-name",
								placeholder: rightPlaceholder,
						  })}
				</Col>
			) : null}
		</Input.Group>
	);
});
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;
export default React.memo(MyComponent);
