import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import FormViewer from "./FormViewer";
import FormContext from "./FormContext";
import { Button, Icon, Tag, Col, Slider } from "antd";
import controls from "./controls";
import Zform from "../Zform";
import { dataType, deepCopy } from "../zTool";
import ZerodMainContext from "../ZerodMainContext";
import ZerodLayerContext from "../ZerodLayerContext";
import "../../dragula/dragula.css";
import dragula from "../../dragula/dragula";
import AddColForm from "./AddColForm";

function useGetItems(formData, onSubmit, showModal) {
	const itemsRef = useRef([
		{
			key: "name",
			label: "表单名称",
			span: 6,
			render: (form, changeFormItems) => {
				return controls["1"].getControl();
			},
		},
		{
			key: "label布局",
			label: "labelLayout",
			span: 6,
			labelFocused: true,
			render: (form, changeFormItems) => {
				return controls["9"].getControl({
					config: {
						selectList: [{ label: "内联", value: "inline" }, { label: "纵向", value: "vertical" }, { label: "横向", value: "horizontal" }],
					},
				});
			},
			options: controls["9"].getOptions({
				initialValue: "inline",
			}),
		},
		{
			key: "buttons",
			label: null,
			span: 12,
			render: () => {
				return (
					<div>
						<Button
							type="primary"
							className="z-margin-right-12"
							onClick={() => {
								showModal({
									show: true,
									content: "8888",
									width: "500px",
								});
							}}
						>
							追加一组
						</Button>
						<Button
							type="primary"
							className="z-margin-right-12"
							onClick={() => {
								showModal({
									show: true,
									content: "8888",
									width: "500px",
								});
							}}
						>
							联动配置
						</Button>
						<Button
							type="primary"
							className="z-margin-right-12"
							onClick={() => {
								showModal({
									show: true,
									content: "8888",
									width: "500px",
								});
							}}
						>
							预览
						</Button>
						<Button
							type="primary"
							className="z-margin-right-12"
							onClick={() => {
								showModal({
									show: true,
									content: "8888",
									width: "500px",
								});
							}}
						>
							保存
						</Button>
					</div>
				);
			},
		},
	]);
	return itemsRef;
}
function useFormProps(showModal, formViewerRef) {
	return useRef({
		colContentRender: (item, form) => {
			return (
				<div className="z-live-tool">
					<div style={{ width: "40%" }} className="z-padding-left-10">
						<Slider
							min={2}
							max={24}
							defaultValue={item.span}
							onAfterChange={(value) => {
								const groups = formViewerRef.current.getFormGroups();
								const groupRefIndex = groups.findIndex((g) => g.id == item.groupId);
								const groupRef = groups[groupRefIndex].groupRef;
								const currentItems = groupRef.current.getFormItems();
								const i = currentItems.findIndex((o) => o.key == item.key);
								currentItems[i]["span"] = value;
								groupRef.current.setFormItems([...currentItems]);
							}}
						/>
					</div>
					<div>
						<div
							className="z-live-tool-item right-item"
							onClick={() => {
								showModal({
									show: true,
									content: <AddColForm groupId={item.groupId} formItem={item} formViewerRef={formViewerRef} />,
									width: "500px",
								});
							}}
						>
							<Icon type="form" />
						</div>
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
					className="z-text-center z-margin-bottom-10"
					style={{ padding: "15px 0", marginTop: "20px", cursor: "pointer" }}
					onClick={() => {
						showModal({
							show: true,
							content: <AddColForm groupId={props.group.id} formViewerRef={formViewerRef} />,
							width: "500px",
						});
					}}
				>
					+
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
const ZliveForm = ZerodMainContext.setConsumer(
	ZerodLayerContext.setConsumer(function LiveForm({ formData, onSubmit, showRightModal, showLayerRightModal, className }) {
		const formViewerRef = useRef(null);
		const formDataRef = useRef();
		useEffect(() => {
			formDataRef.current = deepCopy(formData);
		}, [formData]);
		const methods = useRef({
			getFormData() {
				return formDataRef.current;
			},
			saveFormData(data) {
				formDataRef.current = data;
			},
		}).current;
		const showModal = dataType.isFunction(showRightModal) ? showRightModal : dataType.isFunction(showLayerRightModal) ? showLayerRightModal : () => {};
		const formProps = useFormProps(showModal, formViewerRef);
		const items = useGetItems(formData, onSubmit, showModal).current;
		const [containers, setContainers] = useState([]);
		const drakeRef = useRef(null);
		const onFormGroupsChange = useCallback(
			(formGroups) => {
				if (!drakeRef.current) {
					if (formGroups.length) {
						drakeRef.current = dragula(
							formGroups.map((g) => {
								return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
							}),
							{
								removeOnSpill: false,
								revertOnSpill: false,
								direction: "mixed",
								copy: false,
								copySortSource: false,
								accepts: function() {
									return true;
								},
								moves: function(el, source, handle, sibling) {
									// console.log(el,source,handle,sibling)
									return handle.dataset.handle == "handle";
								},
							},
						)
							.on("cloned", (cloneEl, sourceEl, type) => {
								const _parEl = getParentElement(sourceEl);
								cloneEl.className += ` z-live-form-item-clone ${_parEl.className.slice(/z\-form\-label\-/g.exec(_parEl.className).index)}`;
								// clone.style.paddingLeft = _paddingLeft;
							})
							.on("drag", function(el) {
								el.className = el.className.replace("z-ex-moved", "");
							})
							.on("drop", function(el) {
								el.className += " z-ex-moved";
							});
					}
				} else {
				}
			},
			[drakeRef],
		);

		// useEffect(() => {
		// 	// if (!drakeRef.current) {
		// 	setTimeout(() => {
		// 		console.log(formViewerRef.current.getFormGroups());
		// 	}, 200);
		// 	// const contsd = formViewerRef.current.getFormGroups().map((g) => {
		// 	// 	return g.groupRef.current.getWrapperDom().querySelector(".z-form-row");
		// 	// });
		// 	// console.log(contsd);
		// 	// drakeRef.current = dragula(contsd);
		// 	// }
		// }, [drakeRef.current]);
		return (
			<FormContext.Provider value={formProps}>
				<div className="z-panel">
					<div className="z-panel-body z-padding-bottom-0-important">
						<Zform items={items} labelLayout="inline" style={{ width: "100%" }} submitBtnName="" />
					</div>
				</div>
				<FormViewer
					onFormGroupsChange={onFormGroupsChange}
					ref={formViewerRef}
					className="z-live-form"
					formData={formData}
					title={false}
					linkage={false}
					onSubmit={onSubmit}
					groupTitleRightRender={(group) => {
						return (
							<div>
								<Tag color="magenta" className="z-margin-right-15">{`序${group["seq"]}`}</Tag>
								<div className="z-live-tool-item all-border">
									<Icon type="form" />
								</div>
							</div>
						);
					}}
				/>
			</FormContext.Provider>
		);
	}),
);
ZliveForm.FormViewer = FormViewer;
export default ZliveForm;
