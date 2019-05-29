import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { dataType } from "../zTool";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import ZlabelInput from "../ZlabelInput";
import { Tooltip, Input } from "antd";
import InputContext from "./InputContext";
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
	} = props;
	const [doubleValue, setDoubleValue] = useState(null);
	const [singleValue, setSingleValue] = useState("");
	const doubleChange = (val, e) => {
		data.label = val.label;
		data.value = val.value;
		setDoubleValue(val);
	};
	const singleChange = e => {
		data.label = e.target.value;
		data.value = e.target.value;
		setSingleValue(e.target.value);
	};
	useEffect(() => {
		if (inputType === "double") {
			setDoubleValue({ label: data.label, value: data.value });
		} else {
			setSingleValue(data.value);
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
		<div className={`${cssClass["z-option-item"]} ${index === 0 ? cssClass["first-item"] : ""}`}>
			{index === length - 1 ? (
				<Tooltip placement="top" title="添加兄弟节点" mouseEnterDelay={0} mouseLeaveDelay={0}>
					<i
						className={`zero-icon zerod-add-circle ${cssClass["z-add-siblings"]}`}
						onClick={_onSibingsClick}
					/>
				</Tooltip>
			) : null}
			<div className="z-flex">
				<div className="z-flex-1">
					{inputType === "double" ? (
						<ZlabelInput
							labelSpan={12}
							valueSpan={12}
							size="small"
							value={doubleValue}
							onChange={doubleChange}
							labelPlaceholder="Label"
							valuePlaceholder="Value"
							sync={sync}
							onBlur={onBlur}
						/>
					) : (
						<Input
							size="small"
							placeholde="Value"
							value={singleValue}
							onChange={singleChange}
							onBlur={onBlur}
						/>
					)}
				</div>

				<div className="z-flex-items-v-center">
					<Tooltip placement="top" title="上移" mouseEnterDelay={0} mouseLeaveDelay={0}>
						<i className={`zero-icon zerod-move-up`} onClick={_onMoveUp} />
					</Tooltip>
					<Tooltip placement="top" title="下移" mouseEnterDelay={0} mouseLeaveDelay={0}>
						<i className={`zero-icon zerod-down`} onClick={_onMoveDown} />
					</Tooltip>
					<Tooltip placement="top" title="移除" mouseEnterDelay={0} mouseLeaveDelay={0}>
						<i className={`zero-icon zerod-minus-circle ${cssClass["remove"]}`} onClick={_onRemove} />
					</Tooltip>
					{multiple ? (
						<Tooltip placement="top" title="新增子节点" mouseEnterDelay={0} mouseLeaveDelay={0}>
							<i className={`zero-icon zerod-icon-`} onClick={_onAddChild} />
						</Tooltip>
					) : null}
				</div>
			</div>
		</div>
	);
});
const InputItem = InputContext.setConsumer(_InputItem);
export default InputItem;
