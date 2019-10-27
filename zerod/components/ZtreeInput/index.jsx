import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { GenNonDuplicateID, removeItemFromTree, itemsFromTree } from "../zTool";
import PropTypes from "prop-types";
import InputGroup from "./InputGroup";
import InputContext from "./InputContext";
import { message } from "antd";
import "./style.scss";
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
	toolTips: PropTypes.object,
};

const defaultProps = {
	value: [],
	multiple: true,
	inputType: "double",
	labelPlaceholder: "Label",
	valuePlaceholder: "Value",
	customInputKeys: [{ key: "label", initValue: "" }, { key: "value", initValue: "" }],
	showBtns: true,
	toolTips: {},
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
		toolTips,
	} = props;
	const [sync, setSync] = useState(false);
	const valueTree = Array.isArray(value) && value.length ? value : [getNewItem()];
	const addChild = (item, newItem) => {
		item.children = Array.isArray(item.children) ? [...item.children, newItem] : [newItem];
		onChange && onChange([...valueTree]);
	};
	setId(valueTree);
	const _toolTips = Object.assign(
		{ addSiblings: "添加兄弟节点", moveUp: "上移", moveDown: "下移", remove: "移除", addChild: "新增子节点" },
		toolTips,
	);
	return (
		<InputContext.Provider
			value={{
				onBlur: () => {
					onChange && onChange([...valueTree]);
				},
				sync,
				inputType,
				multiple,
				labelPlaceholder,
				valuePlaceholder,
				customInputKeys,
				customInputFunc: children,
				showBtns,
				toolTips: _toolTips,
				onSibingsClick: (e, data, index) => {
					itemsFromTree({
						tree: valueTree,
						sourceItem: { id: data.id },
						action: ({ tree, currentItem, item, index, keyObj, parentItem }) => {
							if (parentItem) {
								parentItem.children = [...parentItem.children, getNewItem()];
								onChange && onChange([...valueTree]);
							} else {
								onChange && onChange([...valueTree, getNewItem()]);
							}
						},
					});
				},
				onMoveUp: (e, data, index) => {
					itemsFromTree({
						tree: valueTree,
						sourceItem: { id: data.id },
						action: ({ tree, currentItem, item, index, keyObj }) => {
							if (index === 0) {
								return;
							}
							tree.splice(index, 1);
							tree.splice(index - 1, 0, currentItem);
							onChange && onChange([...valueTree]);
						},
					});
				},
				onMoveDown: (e, data, index) => {
					itemsFromTree({
						tree: valueTree,
						sourceItem: { id: data.id },
						action: ({ tree, currentItem, item, index, keyObj }) => {
							if (index === tree.length - 1) {
								return;
							}
							tree.splice(index + 2, 0, currentItem);
							tree.splice(index, 1);
							onChange && onChange([...valueTree]);
						},
					});
				},
				onRemove: (e, data, index) => {
					if (valueTree.length === 1 && valueTree[0].id === data.id) {
						message.warning("根的最后一项不能移除");
						return;
					}
					const newTree = removeItemFromTree({
						tree: valueTree,
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
			<div className="z-tree-root">
				{inputType === "double" && typeof children !== "function" ? (
					<div className="z-tree-type">
						<Checkbox
							onChange={e => {
								setSync(e.target.checked);
							}}
						>
							左右同步输入({labelPlaceholder}与{valuePlaceholder}同值)
						</Checkbox>
					</div>
				) : null}
				<InputGroup options={valueTree} />
			</div>
		</InputContext.Provider>
	);
});
_ZtreeInput.propTypes = propTypes;
_ZtreeInput.defaultProps = defaultProps;
const ZtreeInput = React.memo(_ZtreeInput);
export default ZtreeInput;
