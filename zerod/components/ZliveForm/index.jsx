import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import FormViewer from "./FormViewer";
import FormContext from "./FormContext";
import { Button, Icon, Tag, Col, Slider, message, Modal, Tooltip } from "antd";
import controls from "./controls";
import Zform from "../Zform";
import { dataType, GenNonDuplicateID } from "../zTool";
import ZerodMainContext from "../ZerodMainContext";
// import ZerodLayerContext from "../ZerodLayerContext";
import "../../dragula/dragula.css";
import dragula from "../../dragula/dragula";
import AddColForm from "./AddColForm";
import GroupMoveBtns from "./GroupMoveBtns";
import InsertGroupBtns from "./InsertGroupBtns";
import GroupNameEdit from "./GroupNameEdit";
import LinkageConfig from "./LinkageConfig";
import { getGroupItem, pareLinkages, removeSomeLinkage } from "./common";
import ZfullLayer from "../ZfullLayer";
import AddTagName from "./AddTagName";
//校验、提取最新的formData数据
function commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave) {
	layoutFormRef.current.validateFields((errors, values) => {
		if (errors) return;
		const groups = formViewerRef.current.getFormGroups();
		const newFormData = {
			code: values.code,
			description: values.description,
			name: values.name,
			labelLayout: values.labelLayout,
			formSubmitTypeCode: values.formSubmitTypeCode,
		};
		let hasEmptyGroup = false;
		newFormData.sectionList = groups.map((g, gindex) => {
			const formList = g.groupRef.current.getFormItems().map((item, itemindex) => {
				const config = JSON.parse(item.config);
				config.tagName = item.tagName || [];
				return {
					fieldKey: item.fieldKey,
					fieldType: item.fieldType,
					id: item.id,
					config: JSON.stringify(config),
					disabled: item.disabled,
					initialValue: item.initialValue,
					label: item.label,
					regularExpression: item.regularExpression,
					required: item.required,
					sectionId: item.sectionId,
					span: item.span,
					seq: itemindex + 1,
					errorMsg: item.errorMsg,
					remark: item.remark,
				};
			});
			if (!hasEmptyGroup && !formList.length) {
				hasEmptyGroup = true;
			}
			return {
				id: g.additive ? undefined : g.id,
				name: g.name,
				formFieldInfoList: formList,
				seq: gindex + 1,
			};
		});
		if (hasEmptyGroup) {
			message.error("存在空的组，请为其添加控件或者移除该组");
			return;
		}
		newFormData.linkages = Array.isArray(linkageRef.current) ? JSON.stringify(linkageRef.current) : null;
		typeof onSave === "function" && onSave(newFormData);
	});
}

function useGetItems(
	formData,
	formViewerRef,
	layoutFormRef,
	showModal,
	onSave,
	layerRef,
	showViewerRef,
	formRenderedRef,
	linkageRef,
	domWrapperElRef,
	getInsertLocation,
) {
	const hasCodeRef = useRef(false);
	// const linkageRef = useRef(pareLinkages(formData.linkages));
	useEffect(() => {
		if (layoutFormRef.current && formRenderedRef.current) {
			layoutFormRef.current.setFieldsValue({
				name: formData.name,
				code: formData.code,
				labelLayout: formData.labelLayout,
				description: formData.description,
				formSubmitTypeCode: formData.formSubmitTypeCode,
			});
		}
		hasCodeRef.current = !!formData.code;
		linkageRef.current = pareLinkages(formData.linkages);
	}, [formData, layoutFormRef.current, formRenderedRef.current]);
	const allTagNameRef = useRef([]);
	const itemsRef = useRef([
		{
			key: "name",
			label: "表单名称",
			span: 4,
			render: (form, changeFormItems) => {
				return controls["1"].getControl();
			},
			options: controls["1"].getOptions({
				required: true,
				initialValue: formData.name,
			}),
		},
		{
			key: "code",
			label: "表单编码",
			span: 4,
			render: (form, changeFormItems) => {
				return controls["1"].getControl({}, undefined, undefined, { disabled: hasCodeRef.current });
			},
			options: controls["1"].getOptions({
				required: true,
				initialValue: formData.code,
			}),
		},
		{
			key: "labelLayout",
			label: "label布局",
			span: 3,
			labelFocused: true,
			render: (form, changeFormItems) => {
				return controls["3"].getControl(
					{
						config: {
							selectList: [
								{ label: "内联", value: "inline" },
								{ label: "纵向", value: "vertical" },
								{ label: "横向", value: "horizontal" },
							],
						},
					},
					undefined,
					undefined,
					{
						onChange: value => {
							const groups = formViewerRef.current.getFormGroups();
							formViewerRef.current.setFormGroups(
								groups.map(item => {
									return { ...item, labelLayout: value };
								}),
							);
						},
					},
				);
			},
			options: controls["3"].getOptions({
				initialValue: formData.labelLayout,
			}),
		},
		{
			key: "formSubmitTypeCode",
			label: "表单提交类型",
			span: 3,
			labelFocused: true,
			render: (form, changeFormItems) => {
				return controls["3"].getControl({
					config: {
						selectList: [
							{ label: "普通表单", value: 1 },
							{ label: "文书编辑", value: 2 },
							{ label: "文件签名", value: 3 },
							{ label: "文件盖章", value: 4 },
							{ label: "文件制作", value: 5 },
						],
					},
				});
			},
			options: controls["3"].getOptions({
				initialValue: 1,
			}),
		},
		{
			key: "buttons",
			label: null,
			span: 10,
			render: () => {
				return (
					<div className="z-text-right">
						{/* <Button
							type="default"
							onClick={() => {
								const insetLocaltion = getInsertLocation(domWrapperElRef.current);
								showModal({
									show: false,
									modal: insetLocaltion,
								});
							}}
							icon="close"
							size="small"
							className="z-margin-right-12"
						>
							关闭窗口
						</Button> */}
						{/* <Button
							type="primary"
							onClick={() => {}}
							// icon="close"
							size="small"
							className="z-margin-right-12"
						>
							导入JOSN
						</Button>
						<Button
							type="primary"
							onClick={() => {}}
							// icon="close"
							size="small"
							className="z-margin-right-12"
						>
							导出JOSN
						</Button> */}
						<Button
							type="primary"
							onClick={() => {
								Modal.confirm({
									title: `为所有控件添加标签?`,
									content: (
										<AddTagName
											onChange={val => {
												allTagNameRef.current = val;
											}}
										></AddTagName>
									),
									okText: "确定",
									cancelText: "取消",
									onOk() {
										const groups = formViewerRef.current.getFormGroups();
										groups.forEach(g => {
											const currentItems = g.groupRef.current.getFormItems();
											g.groupRef.current.setFormItems(
												currentItems.map(item => {
													return { ...item, tagName: allTagNameRef.current };
												}),
											);
										});
									},
								});
							}}
							icon="tag"
							size="small"
							className="z-margin-right-12"
						>
							全局打标签
						</Button>
						<Button
							size="small"
							type="primary"
							icon="block"
							className="z-margin-right-12"
							onClick={() => {
								commitFormData(formViewerRef, layoutFormRef, linkageRef, newFormData => {
									showModal({
										show: true,
										modal: "linkageConfigModal",
										content: (
											<LinkageConfig
												newFormData={newFormData}
												defaultValue={linkageRef.current}
												onChange={newLinkages => {
													// console.log(JSON.stringify(newLinkages));
													linkageRef.current = newLinkages;
												}}
											/>
										),
									});
								});
							}}
						>
							联动配置
						</Button>
						<Button
							size="small"
							type="primary"
							icon="file-unknown"
							className="z-margin-right-12"
							onClick={() => {
								commitFormData(formViewerRef, layoutFormRef, linkageRef, newFormData => {
									layerRef.current.methods.showLayer(
										true,
										() => {
											showViewerRef.current.setFormData(newFormData);
										},
										true,
									)();
								});
							}}
						>
							预览
						</Button>
						<Button
							size="small"
							type="primary"
							icon="check"
							className="z-margin-right-12"
							onClick={() => {
								commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave);
							}}
						>
							保存
						</Button>
					</div>
				);
			},
		},
		{
			key: "description",
			label: "描述",
			span: 24,
			render: (form, changeFormItems) => {
				return controls["2"].getControl();
			},
			options: controls["2"].getOptions({
				required: false,
				initialValue: formData.description,
			}),
		},
	]);
	return itemsRef.current;
}

function openUpdateControl(showModal, groupId, formViewerRef, linkageRef, formItem, type) {
	showModal({
		show: true,
		modal: "controlProtoModal",
		content: (
			<AddColForm
				groupId={groupId}
				formItem={formItem}
				formViewerRef={formViewerRef}
				linkageRef={linkageRef}
				type={type}
			/>
		),
		width: "800px",
	});
}

function setNewCurrentGroupItems(formViewerRef, item, action) {
	const groups = formViewerRef.current.getFormGroups();
	const groupRefIndex = groups.findIndex(g => g.id == item.groupId);
	const groupRef = groups[groupRefIndex].groupRef;
	const currentItems = groupRef.current.getFormItems().slice(0);
	const i = currentItems.findIndex(o => o.key == item.key);
	const newItems = typeof action === "function" ? action(currentItems, i) : currentItems;
	groupRef.current.setFormItems(newItems);
}

function useFormProps(showModal, formViewerRef, linkageRef) {
	const tagNameRef = useRef([]);
	return useRef({
		colContentRender: (item, form) => {
			tagNameRef.current = item.tagName || [];
			return (
				<div className="z-live-tool">
					<div style={{ width: "40%" }} className="z-padding-left-10">
						<Slider
							min={2}
							max={24}
							defaultValue={item.span}
							onAfterChange={value => {
								setNewCurrentGroupItems(formViewerRef, item, function(currentItems, i) {
									currentItems.splice(i, 1, { ...currentItems[i], span: value });
									return [...currentItems];
								});
							}}
						/>
					</div>
					<div>
						<Tooltip placement="top" title="标签">
							<div
								className="z-live-tool-item right-item tag"
								onClick={() => {
									Modal.confirm({
										title: `为 [${item.label}] 这个控件添加标签?`,
										content: (
											<AddTagName
												value={item.tagName}
												onChange={val => {
													tagNameRef.current = val;
												}}
											></AddTagName>
										),
										okText: "确定",
										cancelText: "取消",
										onOk() {
											setNewCurrentGroupItems(formViewerRef, item, function(currentItems, i) {
												currentItems.splice(i, 1, {
													...currentItems[i],
													tagName: tagNameRef.current,
												});
												return [...currentItems];
											});
										},
									});
								}}
							>
								<Icon type="tag" />
							</div>
						</Tooltip>
						<Tooltip placement="top" title="移除控件">
							<div
								className="z-live-tool-item right-item delete"
								onClick={() => {
									Modal.confirm({
										title: `确认移除[${item.label}]这个控件吗?`,
										okText: "确定",
										cancelText: "取消",
										onOk() {
											setNewCurrentGroupItems(formViewerRef, item, function(currentItems, i) {
												linkageRef.current &&
													removeSomeLinkage(linkageRef, currentItems[i].fieldKey);
												currentItems.splice(i, 1);
												return currentItems;
											});
										},
									});
								}}
							>
								<Icon type="delete" />
							</div>
						</Tooltip>
						<Tooltip placement="top" title="修改控件">
							<div
								className="z-live-tool-item right-item"
								onClick={() => {
									openUpdateControl(
										showModal,
										item.groupId,
										formViewerRef,
										linkageRef,
										item,
										"update",
									);
								}}
							>
								<Icon type="form" />
							</div>
						</Tooltip>
						<div className="z-live-tool-item right-item">
							<i className="zero-icon zerod-move" data-handle="handle" />
						</div>
					</div>
				</div>
			);
		},
		submitBtnRender: (onSubmit, props) => {
			return (
				<Col
					span={24}
					data-groupid={props.group.id}
					className="z-text-center z-margin-bottom-10 z-add-formitem-btn"
					onClick={() => {
						openUpdateControl(showModal, props.group.id, formViewerRef, linkageRef, null, "add");
					}}
				>
					<Icon type="plus" /> 添加控件
				</Col>
			);
		},
	}).current;
}
function getParentElement(el) {
	let _pE = el.parentElement;
	while (_pE && !_pE.className.includes("z-form-row")) {
		_pE = el.parentElement;
	}
	return _pE;
}

function getGroupIndex(formViewerRef, group) {
	const groups = formViewerRef.current.getFormGroups();
	const index = groups.findIndex(g => {
		return g.id === group.id;
	});
	const newGroups = groups.slice(0);
	return [newGroups, index];
}

function getNewGroupData(labelLayout, groupnameNumRef) {
	const item = {
		additive: true,
		name: `组名-${groupnameNumRef.current}`,
		id: GenNonDuplicateID(),
		formFieldInfoList: [],
		labelLayout,
	};
	groupnameNumRef.current++;
	return item;
}

const propTypes = {
	formData: PropTypes.object.isRequired,
	onSave: PropTypes.func,
	showRightModal: PropTypes.func,
	showLayerRightModal: PropTypes.func,
};
const defaultProps = {
	formData: {},
};

const ShowFormViewer = React.memo(
	React.forwardRef(function(props, ref) {
		const [formData, setFormData] = useState(null);
		useImperativeHandle(ref, () => {
			return {
				setFormData,
			};
		});
		return formData ? (
			<div style={{ width: "90%", margin: "0 auto", padding: "20px 0" }}>
				<FormViewer formData={formData} />
			</div>
		) : (
			<div style={{ height: "100px" }} />
		);
	}),
);

const ZliveForm = ZerodMainContext.setConsumer(function LiveForm({
	formData,
	onSave,
	showRightModal,
	getInsertLocation,
}) {
	formData.customControlRender = null;
	const domWrapperElRef = useRef();
	const groupnameNumRef = useRef(1);
	const layerRef = useRef(null);
	const linkageRef = useRef(null);
	const showViewerRef = useRef(null);
	const layoutFormRef = useRef(null);
	//取FormViewer的实例
	const formViewerRef = useRef(null);
	//打开modal的方法
	const showModal = dataType.isFunction(showRightModal) ? showRightModal : () => {};
	if (!formData.sectionList || !formData.sectionList.length) {
		formData.sectionList = [getNewGroupData(formData.labelLayout, groupnameNumRef)];
	}
	//当前Zform的items
	const formRenderedRef = useRef(false);
	const items = useGetItems(
		formData,
		formViewerRef,
		layoutFormRef,
		showModal,
		onSave,
		layerRef,
		showViewerRef,
		formRenderedRef,
		linkageRef,
		domWrapperElRef,
		getInsertLocation,
	);
	//FormGroup里面Zform的扩展属性
	const formProps = useFormProps(showModal, formViewerRef, linkageRef);
	//存dragula的实例
	const drakeRef = useRef(null);
	//存拖动元素下一个元素
	const nextSiblingRef = useRef(null);
	//动态表单组变化的回调
	const onFormGroupsChange = useCallback(
		formGroups => {
			if (!drakeRef.current) {
				if (formGroups.length) {
					drakeRef.current = dragula(
						formGroups.map(g => {
							return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
						}),
						{
							removeOnSpill: false,
							revertOnSpill: true,
							direction: "mixed",
							copy: false,
							copySortSource: false,
							accepts: function(el, target, source, sibling) {
								//因为 z-add-formitem-btn 按钮是target/source最后一个子元素，也就是没有sibling时是不能被停放的
								if (!sibling) {
									return false;
								}
								return true;
							},
							moves: function(el, source, handle, sibling) {
								return handle.dataset.handle == "handle";
							},
						},
					)
						.on("cloned", (cloneEl, sourceEl, type) => {
							nextSiblingRef.current = sourceEl.nextElementSibling;
							const _parEl = getParentElement(sourceEl);
							cloneEl.className += ` z-live-form-item-clone ${_parEl.className.slice(
								/z\-form\-label\-/g.exec(_parEl.className).index,
							)}`;
						})
						.on("drop", function(el, target, source, sibling) {
							const groups = formViewerRef.current.getFormGroups();
							const currentItem = JSON.parse(el.dataset.item);
							const currentGroup = groups.find(g => {
								return g.id == currentItem.groupId;
							});
							const newFormItems = currentGroup.groupRef.current.getFormItems().slice(0);
							const currentindex = newFormItems.findIndex(item => {
								return item.key == currentItem.key;
							});
							const currentFormitem = newFormItems[currentindex];
							if (target === source) {
								if (sibling.dataset.item) {
									const siblingItem = JSON.parse(sibling.dataset.item);
									const sibingindex = newFormItems.findIndex(item => {
										return item.key == siblingItem.key;
									});
									if (currentindex < sibingindex) {
										newFormItems.splice(sibingindex, 0, currentFormitem);
										newFormItems.splice(currentindex, 1);
									} else if (currentindex > sibingindex) {
										newFormItems.splice(currentindex, 1);
										newFormItems.splice(sibingindex, 0, currentFormitem);
									}
								} else {
									newFormItems.splice(currentindex, 1);
									newFormItems.push(currentFormitem);
								}
								currentGroup.groupRef.current.setFormItems(newFormItems);
							} else {
								let targetGroup = null;
								let targetFormItems = [];
								if (sibling.dataset.item) {
									const siblingItem = JSON.parse(sibling.dataset.item);

									targetGroup = groups.find(g => {
										return g.id == siblingItem.groupId;
									});
									targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);
									const sibingindex = targetFormItems.findIndex(item => {
										return item.key == siblingItem.key;
									});
									currentFormitem.groupId = siblingItem.groupId;
									targetFormItems.splice(sibingindex, 0, currentFormitem);
								} else if (sibling.dataset.groupid) {
									targetGroup = groups.find(g => {
										return g.id == sibling.dataset.groupid;
									});
									targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);
									currentFormitem.groupId = sibling.dataset.groupid;
									targetFormItems.push(currentFormitem);
								}
								if (targetGroup) {
									target.removeChild(el);
									source.appendChild(el);
									// console.log(target,source)
									newFormItems.splice(currentindex, 1);
									targetGroup.groupRef.current.setFormItems(targetFormItems);
									currentGroup.groupRef.current.setFormItems(newFormItems);
								}
							}
						});
				}
			} else {
				drakeRef.current.containers = formGroups.map(g => {
					return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
				});
			}
		},
		[drakeRef.current, formViewerRef.current, nextSiblingRef.current],
	);
	const getFormInstance = useCallback(
		form => {
			layoutFormRef.current = form;
		},
		[layoutFormRef.current],
	);

	const [pageHeaderBox, setPageHeaderBox] = useState(null);
	useEffect(() => {
		let parEl = domWrapperElRef.current;
		while (parEl && !parEl.dataset.zgt_modal) {
			parEl = parEl.parentElement;
		}
		if (parEl) {
			setPageHeaderBox(parEl.querySelector("#ZpageHeaderBox"));
		}
	}, []);
	const configHeader = (
		<div className="z-panel is-radius-top z-shadow-blue">
			<div className="z-panel-body z-padding-bottom-0-important">
				<Zform
					items={items}
					labelLayout="inline"
					style={{ width: "100%" }}
					submitBtnName=""
					getFormInstance={getFormInstance}
					afterItemsRendered={() => {
						formRenderedRef.current = true;
					}}
				/>
			</div>
		</div>
	);
	return (
		<section ref={domWrapperElRef} className="z-padding-14">
			<FormContext.Provider value={formProps}>
				{pageHeaderBox ? ReactDOM.createPortal(configHeader, pageHeaderBox) : configHeader}
				<FormViewer
					onFormGroupsChange={onFormGroupsChange}
					ref={formViewerRef}
					className="z-live-form"
					formData={formData}
					title={false}
					linkage={false}
					noAsync={true}
					groupTitleLeftRender={(group, stateGroupName, onGroupNameChange, groups) => {
						return (
							<GroupNameEdit
								value={stateGroupName}
								onChange={val => {
									const hasindex = groups.findIndex(item => item.name === val);
									if (hasindex > -1) {
										message.error("组名不能与其他组名相同");
										return true;
									}
									onGroupNameChange(val);
								}}
							/>
						);
					}}
					groupTitleRightRender={group => {
						return (
							<>
								<InsertGroupBtns
									onInsertUp={() => {
										const [newGroups, index] = getGroupIndex(formViewerRef, group);
										const groupItem = getGroupItem({
											group: getNewGroupData(
												layoutFormRef.current.getFieldValue("labelLayout"),
												groupnameNumRef,
											),
										});
										if (index === 0) {
											newGroups.unshift(groupItem);
										} else {
											newGroups.splice(index, 0, groupItem);
										}
										formViewerRef.current.setFormGroups(newGroups);
										message.success("向上插入组成功");
									}}
									onInsertDown={() => {
										const [newGroups, index] = getGroupIndex(formViewerRef, group);
										const groupItem = getGroupItem({
											group: getNewGroupData(
												layoutFormRef.current.getFieldValue("labelLayout"),
												groupnameNumRef,
											),
										});
										if (index === newGroups.length - 1) {
											newGroups.push(groupItem);
										} else {
											newGroups.splice(index + 1, 0, groupItem);
										}
										formViewerRef.current.setFormGroups(newGroups);
										message.success("向下插入组成功");
									}}
								/>
								<GroupMoveBtns
									onMoveUp={() => {
										const [newGroups, index] = getGroupIndex(formViewerRef, group);
										if (index > 0) {
											newGroups.splice(index, 1);
											newGroups.splice(index - 1, 0, group);
											formViewerRef.current.setFormGroups(newGroups);
											message.success("上移成功");
										}
									}}
									onMoveDown={() => {
										const [newGroups, index] = getGroupIndex(formViewerRef, group);
										if (index > -1 && index < newGroups.length - 1) {
											newGroups.splice(index + 2, 0, group);
											newGroups.splice(index, 1);
											formViewerRef.current.setFormGroups(newGroups);
											message.success("下移成功");
										}
									}}
									onRemove={() => {
										Modal.confirm({
											title: `确认移除[${group.name}]这个组吗?`,
											okText: "确定",
											cancelText: "取消",
											onOk() {
												const [newGroups, index] = getGroupIndex(formViewerRef, group);
												if (newGroups.length === 1) {
													message.warning("最后一组不能移除");
													return;
												}
												newGroups.splice(index, 1);
												formViewerRef.current.setFormGroups(newGroups);
												message.success("移除成功");
											},
										});
									}}
								/>
								<Tag color={group.additive ? "blue" : "magenta"}>
									{group.additive ? `新增` : `ID${group["id"]}`}
								</Tag>
							</>
						);
					}}
				/>
			</FormContext.Provider>
			<ZfullLayer ref={layerRef}>
				<ShowFormViewer ref={showViewerRef} />
			</ZfullLayer>
		</section>
	);
});
ZliveForm.propTypes = propTypes;
ZliveForm.defaultProps = defaultProps;
ZliveForm.FormViewer = FormViewer;
export default ZliveForm;
