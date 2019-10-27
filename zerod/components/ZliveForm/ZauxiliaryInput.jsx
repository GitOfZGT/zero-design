import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import { getControl, regExps } from "../Zform/controls";
import { Input } from "antd";
const InputGroup = Input.Group;
const regExpsList = [{ label: "自定义", value: "custom", pattern: "" }].concat(
	Object.keys(regExps).map(key => {
		return {
			...regExps[key],
			pattern: regExps[key].pattern.toString().replace(/(^\/|\/$)/g, ""),
			value: key,
			label: regExps[key].name,
		};
	}),
);

export default React.memo(
	React.forwardRef(function ZauxiliaryInput(props, ref) {
		const { value, onChange } = props;
		const [inputValue, setInputValue] = useState("");
		const [selectValue, setSelectValue] = useState("custom");
		function setVals(pattern) {
			const selected = regExpsList.find(item => {
				return item.pattern === pattern;
			});
			setSelectValue(selected ? selected.value : "custom");
			setInputValue(pattern);
		}
		useEffect(() => {
			setVals(value);
		}, [value]);
		return (
			<InputGroup compact>
				{getControl("Input", {
					value: inputValue,
					onChange(e) {
						setVals(e);
						onChange(e);
					},
					style: {
						width: "75%",
					},
				})}
				{getControl("Select", {
					value: selectValue,
					onChange(val) {
						const selected = regExpsList.find(item => {
							return item.value === val;
						});
						if (selected) {
							setInputValue(selected.pattern);
							onChange(selected.pattern);
						}
						setSelectValue(val);
					},
					selectList: regExpsList,
					style: {
						width: "25%",
					},
				})}
			</InputGroup>
		);
	}),
);
