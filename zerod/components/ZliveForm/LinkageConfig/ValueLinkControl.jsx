import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import { getControl, getOptions } from "../../Zform/controls";
import { Row, Col, Tag, Button, message } from "antd";
import ZoneWayTransfer from "../../ZoneWayTransfer";
import { itemsFromTree } from "../../zTool";
import { controlList } from "../AddColForm";
import { linkRemark1, linkRemark2, linkRemark3 } from "./linkRemark";
function turnSelectOptions(
	section,
	needChild,
	filter = list => {
		return list;
	},
) {
	return section.map(g => {
		let group = false;
		let children = null;
		if (Array.isArray(g.formFieldInfoList)) {
			group = true;
			children = filter(g.formFieldInfoList).map(item => {
				return { ...item, value: item.fieldKey, disabled: false };
			});
		}
		const newItem = {
			...g,
			value: g.name,
			group: needChild ? group : false,
			label: g.name,
			formFieldInfoList: null,
		};
		if (children && needChild) {
			newItem.children = children;
		}
		return newItem;
	});
}
function getControlitem(type) {
	const findItem = controlList.find(item => {
		return item.value == type;
	});
	return findItem;
}

function getLinkValue(query = {}) {
	return {
		srcControl: null,
		srcValues: [],
		srcControls: [],
		distControls: [],
		leftSelectedVal: "",
		rightSelectedVal: "",
		distControl: null,
		distValues: [],
		...query,
	};
}

const propTypes = {
	newFormData: PropTypes.object,
	onSrcSelected: PropTypes.func,
	onOk: PropTypes.func,
};
function ValueLinkControl(props) {
	const { newFormData, onSrcSelected, onOk, linkageType } = props;
	const [leftTransferSelections, setLeftTransferSelections] = useState([]);
	const [leftTransferSelected, setLeftTransferSelected] = useState([]);
	const [rightTransferSelections, setRightTransferSelections] = useState();
	const [rightTransferSelected, setRightTransferSelected] = useState([]);
	useEffect(() => {
		if (["1", "2", "3", "5.2"].includes(linkageType)) {
			setLeftTransferSelections([]);
			setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true));
		} else if (["5.1"].includes(linkageType)) {
			setLeftTransferSelections([]);
			setRightTransferSelections(turnSelectOptions(newFormData.sectionList, false));
		} else if (["4"].includes(linkageType)) {
			setLeftTransferSelections([]);
			setRightTransferSelections([]);
		} else if (["6"].includes(linkageType)) {
			setLeftTransferSelections(
				turnSelectOptions(newFormData.sectionList, true, list => {
					return list.filter(item => [1].includes(item.fieldType));
				}),
			);
			setRightTransferSelections(
				turnSelectOptions(newFormData.sectionList, true, list => {
					return list.filter(item => [1, 5].includes(item.fieldType));
				}),
			);
		}
		setLinkValue(getLinkValue());
		setLeftTransferSelected([]);
		setRightTransferSelected([]);
	}, [linkageType]);
	const [linkValue, setLinkValue] = useState(getLinkValue());
	const selectOptionsRef = useRef(
		turnSelectOptions(newFormData.sectionList, true, list => {
			return list.filter(item => [3, 8, 9].includes(item.fieldType));
		}),
	);
	//第一个穿梭框的特殊属性
	const leftTransferPropsRef = useRef({});
	const getSelectControl = (opt = {}) => {
		return (
			<div className="z-flex-1 z-margin-right-10">
				{getControl("Select", {
					showSearch: false,
					size: "small",
					placeholder: "请选择单选/多选控件",
					selectList: selectOptionsRef.current,
					style: {
						width: "100%",
					},
					dropdownMatchSelectWidth: false,
					dropdownStyle: { width: "400px" },
					optLabelRender(item) {
						const findItem = getControlitem(item.fieldType);
						return (
							<div className="z-flex-space-between">
								<span className="z-margin-right-8">{item.label}</span>
								<Tag color="#2db7f5">{findItem.label}</Tag>
							</div>
						);
					},
					...opt,
				})}
			</div>
		);
	};
	if (["1", "2", "3", "4", "5.1", "5.2"].includes(linkageType)) {
		leftTransferPropsRef.current = {
			leftTitle() {
				return getSelectControl({
					value: linkValue.leftSelectedVal,
					onChange(val) {
						itemsFromTree({
							tree: selectOptionsRef.current,
							sourceItem: { value: val },
							keyObj: { id: "value", children: "children" },
							action({ tree, currentItem, item, index }) {
								const config = JSON.parse(currentItem.config);
								setLeftTransferSelections(config.selectList);
								setLinkValue({
									...linkValue,
									leftSelectedVal: currentItem.value,
									srcValues: [],
									distControls: [],
									srcControls: [],
									srcControl: currentItem,
								});
								setLeftTransferSelected([]);
								setRightTransferSelected([]);
								onSrcSelected && onSrcSelected(currentItem);
							},
						});
						// console.log(turnSelectOptions(newFormData.sectionList));
					},
				});
			},
			rightTitle: "已选择的选项",
		};
	} else if (["6"].includes(linkageType)) {
		leftTransferPropsRef.current = {
			leftTitle: "可选控件列表",
			rightTitle: "已选择的控件",
			leftItemRender(item, index) {
				const findControl = getControlitem(item.fieldType);
				return (
					<div className="z-flex-space-between">
						<span>{item.label}</span>
						{findControl ? <Tag color="purple">{findControl.label}</Tag> : null}
					</div>
				);
			},
		};
	}
	//第二个穿梭框的特殊属性
	const rightTransferPropsRef = useRef({});
	if (["1", "2", "3", "5.2", "6"].includes(linkageType)) {
		rightTransferPropsRef.current = {
			leftTitle: "可选控件列表",
			rightTitle: "已选择的控件",
			leftItemRender(item, index) {
				const findControl = getControlitem(item.fieldType);
				return (
					<div className="z-flex-space-between">
						<span>{item.label}</span>
						{findControl ? <Tag color="purple">{findControl.label}</Tag> : null}
					</div>
				);
			},
		};
	} else if (["4"].includes(linkageType)) {
		rightTransferPropsRef.current = {
			leftTitle() {
				return getSelectControl({
					value: linkValue.rightSelectedVal,
					onChange(val) {
						itemsFromTree({
							tree: selectOptionsRef.current,
							sourceItem: { value: val },
							keyObj: { id: "value", children: "children" },
							action({ tree, currentItem, item, index }) {
								const config = JSON.parse(currentItem.config);
								setRightTransferSelections(config.selectList);
								setLinkValue({
									...linkValue,
									rightSelectedVal: currentItem.value,
									distValues: [],
									distControls: [],
									srcControls: [],
									distControl: currentItem,
								});
								setRightTransferSelected([]);
							},
						});
					},
				});
			},
			rightTitle: "已选择的选项",
		};
	} else if (["5.1"].includes(linkageType)) {
		rightTransferPropsRef.current = {
			leftTitle: "可选组列表",
			rightTitle: "已选择的组",
		};
	}

	let linkRemark = null;
	if (["1", "2", "3", "5.1", "5.2"].includes(linkageType)) {
		linkRemark = linkRemark1({ ...linkValue, linkageType });
	} else if (["4"].includes(linkageType)) {
		linkRemark = linkRemark2(linkValue);
	} else if (["6"].includes(linkageType)) {
		linkRemark = linkRemark3(linkValue);
	}

	return (
		<Row gutter={20} className="z-margin-top-15" type="flex">
			<Col span={12}>
				<ZoneWayTransfer
					{...leftTransferPropsRef.current}
					sourceKeys={{
						name: "label",
						id: "value",
						children: "children",
					}}
					repeated={false}
					leftSourceData={leftTransferSelections}
					rightTargetData={leftTransferSelected}
					onChange={(actionType, rightData, actionItem, sibligItem) => {
						setLinkValue(
							linkageType === "6"
								? { ...linkValue, srcControls: rightData }
								: {
										...linkValue,
										srcValues: rightData.map(item => ({ label: item.label, value: item.value })),
								  },
						);
					}}
				/>
			</Col>
			<Col span={12}>
				<ZoneWayTransfer
					{...rightTransferPropsRef.current}
					repeated={false}
					sourceKeys={{
						name: "label",
						id: "value",
						children: "children",
					}}
					leftSourceData={rightTransferSelections}
					rightTargetData={rightTransferSelected}
					onChange={(actionType, rightData, actionItem, sibligItem) => {
						setLinkValue(
							linkageType === "4"
								? { ...linkValue, distValues: rightData }
								: {
										...linkValue,
										distControls: rightData,
								  },
						);
					}}
				/>
			</Col>
			<Col offset={9} span={12}>
				<div className="z-linkage-line z-flex-items-center">{linkRemark}</div>
			</Col>
			<Col span={3} className="z-flex-items-center">
				<Button
					type="primary"
					onClick={e => {
						let error = false;
						if (["6"].includes(linkageType)) {
							if (!linkValue.srcControls.length || !linkValue.distControls.length) {
								error = true;
							}
						} else if (["4"].includes(linkageType)) {
							if (!linkValue.srcValues.length || !linkValue.distValues.length) {
								error = true;
							}
						} else if (!linkValue.srcValues.length || !linkValue.distControls.length) {
							error = true;
						}
						if (error) {
							message.error("配置不完整");
							return;
						}
						setLinkValue({
							...linkValue,
							srcValues: [],
							srcControls: [],
							distValues: [],
							distControls: [],
						});
						setLeftTransferSelected([]);
						setRightTransferSelected([]);
						onOk && onOk(linkValue);
					}}
				>
					保存到表单
				</Button>
			</Col>
		</Row>
	);
}
ValueLinkControl.propTypes = propTypes;
export default React.memo(ValueLinkControl);
