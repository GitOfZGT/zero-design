import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import { getControl, getOptions } from "../Zform/controls";
import ZlabelInput from "../ZlabelInput";
import { Tooltip, Input } from "antd";
import InputContext from "./InputContext";
function singleInput(states, setStates, inputKeys, valuePlaceholder) {
	return getControl("Input", {
		placeholder: valuePlaceholder,
		value: states[inputKeys[1].key],
		onChange: value => {
			setStates({
				[inputKeys[0].key]: value,
				[inputKeys[1].key]: value,
			});
		},
		size: "small",
	});
}

const _InputItem = React.forwardRef(function InputItemCom(props, ref) {
	const {
		data,
		length,
		index,
		onSibingsClick,
		onMoveUp,
		onMoveDown,
		onRemove,
		onAddChild,
		sync,
		onBlur,
		multiple,
		inputType,
		labelPlaceholder,
		valuePlaceholder,
		customInputKeys,
		customInputFunc,
		showBtns,
		toolTips,
	} = props;
	// const inputKeys = customInputKeys.length
	// 	? customInputKeys
	// 	: [{ key: "label", initValue: "" }, { key: "value", initValue: "" }];
	const coustomStates = {};
	const setCoustomStates = {};
	customInputKeys.forEach(item => {
		const [keyState, setKeyState] = useState(item.initValue);
		coustomStates[item.key] = keyState;
		setCoustomStates[item.key] = setKeyState;
	});
	const setState = newState => {
		Object.keys(newState).forEach(key => {
			data[key] = newState[key];
			setCoustomStates[key](newState[key]);
		});
		onBlur();
	};

	const [doubleValue, setDoubleValue] = useState(null);
	const doubleChange = (val, e) => {
		data[customInputKeys[0].key] = val.label;
		data[customInputKeys[1].key] = val.value;
		setDoubleValue(val);
		onBlur();
	};
	useEffect(() => {
		if (inputType === "double") {
			setDoubleValue({ label: data[customInputKeys[0].key], value: data[customInputKeys[1].key] });
		} else {
			customInputKeys.forEach(item => {
				if (data[item.key]) {
					setCoustomStates[item.key](data[item.key]);
				} else {
					data[item.key] = item.initValue;
				}
			});
		}
	}, [data]);
	const _onSibingsClick = e => {
		onSibingsClick && onSibingsClick(e, data, index);
	};
	const _onMoveUp = e => {
		onMoveUp && onMoveUp(e, data, index);
	};
	const _onMoveDown = e => {
		onMoveDown && onMoveDown(e, data, index);
	};
	const _onRemove = e => {
		onRemove && onRemove(e, data, index);
	};
	const _onAddChild = e => {
		onAddChild && onAddChild(e, data, index);
	};
	return (
		<div className={`z-option-item ${index === 0 ? "first-item" : ""}`}>
			{index === length - 1 && showBtns ? (
				<Tooltip placement="top" title={toolTips.addSiblings} mouseEnterDelay={0} mouseLeaveDelay={0}>
					<i className={`zero-icon zerod-add-circle z-add-siblings`} onClick={_onSibingsClick} />
				</Tooltip>
			) : null}
			<div className="z-flex">
				<div className="z-flex-1">
					{inputType === "coustom" ? (
						typeof customInputFunc === "function" ? (
							customInputFunc(coustomStates, setState, customInputKeys)
						) : null
					) : inputType === "double" ? (
						<ZlabelInput
							labelSpan={12}
							valueSpan={12}
							size="small"
							value={doubleValue}
							onChange={doubleChange}
							labelPlaceholder={labelPlaceholder}
							valuePlaceholder={valuePlaceholder}
							sync={sync}
							// onBlur={onBlur}
						/>
					) : (
						singleInput(coustomStates, setState, customInputKeys, valuePlaceholder)
					)}
				</div>

				{showBtns ? (
					<div className="z-flex-items-v-center">
						<Tooltip placement="top" title={toolTips.moveUp} mouseEnterDelay={0} mouseLeaveDelay={0}>
							<i className={`zero-icon zerod-move-up`} onClick={_onMoveUp} />
						</Tooltip>
						<Tooltip placement="top" title={toolTips.moveDown} mouseEnterDelay={0} mouseLeaveDelay={0}>
							<i className={`zero-icon zerod-down`} onClick={_onMoveDown} />
						</Tooltip>
						<Tooltip placement="top" title={toolTips.remove} mouseEnterDelay={0} mouseLeaveDelay={0}>
							<i className={`zero-icon zerod-minus-circle remove`} onClick={_onRemove} />
						</Tooltip>
						{multiple ? (
							<Tooltip placement="top" title={toolTips.addChild} mouseEnterDelay={0} mouseLeaveDelay={0}>
								<i className={`zero-icon zerod-icon-`} onClick={_onAddChild} />
							</Tooltip>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
});
const InputItem = InputContext.setConsumer(_InputItem);
export default InputItem;
