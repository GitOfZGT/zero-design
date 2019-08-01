import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { GenNonDuplicateID, removeItemFromTree, itemsFromTree } from "../zTool";
import PropTypes from "prop-types";
import InputGroup from "./InputGroup";
import InputContext from "./InputContext";
import { message } from "antd";
import cssClass from "./style.scss";
import { Checkbox } from "antd";
function getNewItem() {
	return { id: GenNonDuplicateID(), label: "", value: "" };
}

const propTypes = {
	value: PropTypes.array,
	onChange: PropTypes.func,
	multiple: PropTypes.bool,
	showBtns: PropTypes.bool,
	inputType: PropTypes.string,
	labelPlaceholder: PropTypes.string,
	valuePlaceholder: PropTypes.string,
	customInputKeys: PropTypes.array,
	children: PropTypes.func,
	toolTips:PropTypes.object,
};

const defaultProps = {
	value: [],
	multiple: true,
	inputType: "double",
	labelPlaceholder: "Label",
	valuePlaceholder: "Value",
	customInputKeys: [{ key: "label", initValue: "" }, { key: "value", initValue: "" }],
	showBtns:true,
	toolTips:{},
};

function setId(arr) {
	Array.isArray(arr) &&
		arr.forEach(item => {
			if (item.id === undefined) {
				item.id = GenNonDuplicateID();
			}
			if (Array.isArray(item.children)) {
				setId(item.children);
			}
		});
}

const _ZtreeInput = React.forwardRef(function(props, ref) {
	const {
		value,
		onChange,
		multiple,
		inputType,
		labelPlaceholder,
		valuePlaceholder,
		customInputKeys,
		children,
		showBtns,
		toolTips
	} = props;
	const [sync, setSync] = useState(false);
	useEffect(() => {
		if (!value.length) onChange && onChange([getNewItem()]);
	}, [value]);
	const addChild = (item, newItem) => {
		item.children = Array.isArray(item.children) ? [...item.children, newItem] : [newItem];
		onChange && onChange([...value]);
	};
	setId(value);
	const _toolTips = Object.assign({addSiblings:"添加兄弟节点",moveUp:"上移",moveDown:"下移",remove:"移除",addChild:"新增子节点"},toolTips)
	return (
		<InputContext.Provider
			value={{
				onBlur: () => {
					onChange && onChange(value);
				},
				sync,
				inputType,
				multiple,
				labelPlaceholder,
				valuePlaceholder,
				customInputKeys,
				customInputFunc: children,
				showBtns,
				toolTips:_toolTips,
				onSibingsClick: (e, data, index) => {
					itemsFromTree({
						tree: value,
						sourceItem: { id: data.id },
						action: ({ tree, currentItem, item, index, keyObj, parentItem }) => {
							if (parentItem) {
								parentItem.children = [...parentItem.children, getNewItem()];
								onChange && onChange([...value]);
							} else {
								onChange && onChange([...value, getNewItem()]);
							}
						},
					});
				},
				onMoveUp: (e, data, index) => {
					itemsFromTree({
						tree: value,
						sourceItem: { id: data.id },
						action: ({ tree, currentItem, item, index, keyObj }) => {
							if (index === 0) {
								return;
							}
							tree.splice(index, 1);
							tree.splice(index - 1, 0, currentItem);
							onChange && onChange([...value]);
						},
					});
				},
				onMoveDown: (e, data, index) => {
					itemsFromTree({
						tree: value,
						sourceItem: { id: data.id },
						action: ({ tree, currentItem, item, index, keyObj }) => {
							if (index === tree.length - 1) {
								return;
							}
							tree.splice(index + 2, 0, currentItem);
							tree.splice(index, 1);
							onChange && onChange([...value]);
						},
					});
				},
				onRemove: (e, data, index) => {
					if (value.length === 1 && value[0].id === data.id) {
						message.warning("根的最后一项不能移除");
						return;
					}
					const newTree = removeItemFromTree({
						tree: value,
						sourceItem: {
							id: data.id,
						},
					});
					onChange && onChange(newTree);
				},
				onAddChild: (e, data, index) => {
					const newItem = getNewItem();
					addChild(data, newItem);
				},
			}}
		>
			<div className={cssClass["z-tree-root"]}>
				{inputType === "double" && typeof children !== "function" ? (
					<div className={cssClass["z-tree-type"]}>
						<Checkbox
							onChange={e => {
								setSync(e.target.checked);
							}}
						>
							左右同步输入({labelPlaceholder}与{valuePlaceholder}同值)
						</Checkbox>
					</div>
				) : null}
				<InputGroup options={value} />
			</div>
		</InputContext.Provider>
	);
});
_ZtreeInput.propTypes = propTypes;
_ZtreeInput.defaultProps = defaultProps;
const ZtreeInput = React.memo(_ZtreeInput);
export default ZtreeInput;
