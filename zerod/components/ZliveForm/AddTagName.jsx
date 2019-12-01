import React, { useState, useRef, useEffect } from "react";
import { getControl } from "../Zform/controls";
import ZlabelInput from "../ZlabelInput";
import { Icon, Tooltip, Tag } from "antd";
const defaultTags = [{ label: "移动端列表展示字段", value: "1" }, { label: "PC端列表展示字段", value: "2" }, { label: "整行展示字段", value: "3" }];
const colors = ["#F8AD3A", "#01D0A2", "#3277FA", "#B94354", "#7469F1"];
const AddTagName = React.memo(
	React.forwardRef((props, ref) => {
		const { value, onChange } = props;
		const [tagValue, setTagValue] = useState([]);
		const [tags, setTags] = useState(defaultTags);
		useEffect(() => {
			if (Array.isArray(value)) {
				const newTags = [...defaultTags];
				value.forEach(item => {
					const finded = newTags.find(f => item.value === f.value);
					if (!finded) {
						newTags.push(item);
					}
				});
				setTags(newTags);
				setTagValue(value.map(item => item.value));
			}
		}, [value]);
		useEffect(() => {
			const newValue = [];
			tags.forEach(item => {
				if (tagValue.includes(item.value)) {
					newValue.push(item);
				}
			});
			onChange && onChange(newValue);
		}, [tagValue]);
		return (
			<div>
				<div style={{ paddingTop: "10px" }}>
					{getControl("Checkbox.Group", {
						layout: "vertical",
						value: tagValue,
						optLabelRender: (item, index) => {
							return (
								<Tag style={{ cursor: "pointer" }} color={colors[index % colors.length]}>
									{`${item.label}--[${item.value}]`}
								</Tag>
							);
						},
						selectList: tags,
						onChange: vals => {
							setTagValue(vals);
						},
					})}
				</div>
				<div>
					<div style={{ padding: "10px 0" }}>自加标签</div>
					<CustomTagName
						onOk={newVal => {
							const finded = tags.findIndex(item => item.value === newVal.value);
							if (finded > -1) {
								tags.splice(finded, 1, newVal);
							} else {
								setTags([...tags, newVal]);
							}
						}}
					></CustomTagName>
					{/* {defaultTags.map(item => {
						return (
							<Tag
								key={item.name}
								color={item.color}
								onClick={() => {
									setInputValue(item.name);
                                }}
                                style={{cursor:"pointer"}}
							>
								{item.name}
							</Tag>
						);
					})} */}
				</div>
			</div>
		);
	}),
);

const CustomTagName = React.memo(function NameEdit(props) {
	const { onOk } = props;
	const [inputValue, setInputValue] = useState();
	return (
		<div className="z-flex">
			<div className="z-flex-1">
				<ZlabelInput
					labelPlaceholder="请输入label"
					valuePlaceholder="请输入value"
					size="small"
					value={inputValue}
					onChange={val => {
						setInputValue(val);
					}}
				></ZlabelInput>
			</div>
			<Tooltip placement="top" title="确定">
				<div
					className="z-live-tool-item all-border small z-margin-left-10 z-margin-top-2"
					onClick={() => {
						typeof onOk === "function" && onOk(inputValue);
					}}
				>
					<Icon type="check" />
				</div>
			</Tooltip>
		</div>
	);
});

export default AddTagName;
