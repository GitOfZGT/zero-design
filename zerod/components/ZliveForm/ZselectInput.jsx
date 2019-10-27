import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import { getControl } from "../Zform/controls";
import { Input, Col } from "antd";
import { getStyle } from "../zTool";
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
	customControls: PropTypes.array,
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
	customControls: [],
};

function getNewValue(value, valueKey, currentValue, customControls) {
	let newValue = {};
	if (value) {
		newValue = { ...value, ...currentValue };
	} else {
		Object.values(valueKey).forEach(v => {
			newValue[v] = "";
		});
		customControls.forEach(item => {
			newValue[item.key] = "";
		});
		newValue = { ...newValue, ...currentValue };
	}
	return newValue;
}

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
		customControls,
	} = props;
	const customChange = (val, key) => {
		const currentValue = { [key]: val };
		let newValue = getNewValue(value, valueKey, currentValue, customControls);
		typeof onChange === "function" && onChange(newValue);
	};
	const leftChange = val => {
		customChange(val, valueKey.left);
	};
	const centerChange = val => {
		customChange(val, valueKey.center);
	};
	const rightChange = val => {
		customChange(val, valueKey.right);
	};
	const wrapperElRef = useRef();
	const _left = value && value[valueKey.left] !== undefined ? value[valueKey.left] : "";
	const _center = value && value[valueKey.center] !== undefined ? value[valueKey.center] : "";
	const _right = value && value[valueKey.right] !== undefined ? value[valueKey.right] : "";
	useEffect(() => {
		const warperEl = wrapperElRef.current.querySelector(".z-select-input");
		if (warperEl) {
			Array.from(warperEl.children).forEach((el, i) => {
				el.removeAttribute("style");
				const currentWidth = getStyle(el, "width");
				if (/\%$/.test(currentWidth) && i !== 0) {
					el.style.width = `calc(${currentWidth} + 1px)`;
				}
			});
		}
	}, [leftSpan, centerSpan, rightSpan]);

	return (
		<div ref={wrapperElRef}>
			<Input.Group compact size={size} className={`z-select-input ${className || ""}`}>
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
										centerChange(e);
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
										rightChange(e);
									},
									disabled,
									className: "z-name",
									placeholder: rightPlaceholder,
							  })}
					</Col>
				) : null}
				{customControls.map(item => {
					return (
						<Col span={item.span} key={item.key}>
							{item.render(value, item, customChange)}
						</Col>
					);
				})}
			</Input.Group>
		</div>
	);
});
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;
export default React.memo(MyComponent);
