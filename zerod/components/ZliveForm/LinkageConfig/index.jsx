import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import ReactDom from "react-dom";
// import Zform from "../Zform";
// import { getControl, getOptions } from "../../Zform/controls";
import { Tag, Modal } from "antd";
import ZerodMainContext from "../../ZerodMainContext";
import Ztabs from "../../Ztabs";
import { ZcascaderItemGroup } from "../../Zcascader";
import ValueLinkControl from "./ValueLinkControl";
import ValueLinkConfigured from "./ValueLinkConfigured";
import IDLinkagesConfigured from "./IDLinkagesConfigured";
const linkageTypes = [
	{
		tab: "单选/多选控制控件禁用",
		key: "1",
		active: true,
	},
	{
		tab: "单选/多选控制控件必填",
		key: "2",
	},
	{
		tab: "单选/多选控制控件非必填",
		key: "3",
	},
	{
		tab: "单选/多选控制选项",
		key: "4",
	},
	{
		tab: "单选/多选控制组隐藏",
		key: "5.1",
	},
	{
		tab: "单选/多选控制控件隐藏",
		key: "5.2",
	},
	{
		tab: "身份证取出生年月日",
		key: "6",
	},
	{
		tab: "单选联动其他控件异步选项",
		key: "7",
	},
	{
		tab: "地图选点取行政区划",
		key: "8",
	},
];
const itemKeys = {
	name: "tab",
	id: "key",
};
// const propTypes = {};
const defaultProps = {
	//默认的linkages
	defaultValue: [],
};

function LinkageConfig(props) {
	const { getInsertLocation, showRightModal, newFormData, defaultValue, onChange } = props;
	const wrapperRef = useRef(null);
	const [tabPanes, setTabPanes] = useState([
		{
			tab: "联动列表",
			key: "1",
			content: null,
		},
		{
			tab: "联动配置",
			key: "2",
			content: null,
		},
	]);
	const [tabKey, setTabKey] = useState("1");
	const [linkageTypesState, setLinkageTypes] = useState(linkageTypes);
	const curentLinkTypeRef = useRef(linkageTypesState.find(item => item.active));
	const objRef = useRef(null);
	const defaultLinkagesRef = useRef(defaultValue);
	const [insetLocaltion, setInsetLocaltion] = useState();
	useEffect(() => {
		// 首先得获取wrapperRef.current元素所在得位置
		const insetLocaltion = getInsertLocation(wrapperRef.current);
		let parEl = wrapperRef.current;
		while (parEl && !parEl.dataset.zgt_modal) {
			parEl = parEl.parentElement;
		}
		if (parEl) {
			objRef.current = parEl.querySelector("#ZpageHeaderBox");
		}
		setInsetLocaltion(insetLocaltion);
	}, []);
	const onItemClick = useCallback((e, item, i, props) => {
		setLinkageTypes(
			linkageTypesState.map(l => {
				const active = l.key === item.data.key;
				if (active) {
					curentLinkTypeRef.current = item.data;
				}
				return { ...l, active };
			}),
		);
	}, []);
	//当前选择的控件
	const [currentControl, setCurrentControl] = useState({});
	//取ValueLinkConfigured提供的属性
	const configuredRef = useRef(null);
	useEffect(() => {
		if (Array.isArray(defaultLinkagesRef.current) && ["6", "7", "8"].includes(curentLinkTypeRef.current.key)) {
			const IDconfigured = defaultLinkagesRef.current.filter(age => {
				return age.linkageType === curentLinkTypeRef.current.key;
			});
			configuredRef.current && configuredRef.current.setConfigured(IDconfigured);
		} else {
			configuredRef.current && configuredRef.current.setConfigured([]);
		}
	}, [curentLinkTypeRef.current.key]);

	const onRemove = (currentConf, currentIndex) => {
		Modal.confirm({
			title: "是否确认移除这条配置?",
			okText: "确定",
			cancelText: "取消",
			onOk() {
				const currentConfigured = configuredRef.current.getCurrentConfigured();
				const currentLinkageType = curentLinkTypeRef.current.key;
				let ageIndex = -1;
				const getageIndex = currentKey => {
					return defaultLinkagesRef.current.findIndex(item => {
						return item.linkageType === currentLinkageType && item.src.fieldKey === currentKey;
					});
				};
				if (["6", "7", "8"].includes(currentLinkageType)) {
					ageIndex = getageIndex(currentConf.src.fieldKey);
				} else {
					ageIndex = getageIndex(currentConf.srcKey);
				}
				if (ageIndex > -1) {
					currentConfigured.splice(currentIndex, 1);
					const newConfigs = [...currentConfigured];
					configuredRef.current.setConfigured(newConfigs);
					if (["6", "7", "8"].includes(currentLinkageType)) {
						defaultLinkagesRef.current.splice(ageIndex, 1);
					} else {
						defaultLinkagesRef.current[ageIndex].dist = newConfigs;
					}
					defaultLinkagesRef.current = [...defaultLinkagesRef.current];
					onChange && onChange(defaultLinkagesRef.current);
				}
			},
		});
	};

	return (
		<section ref={wrapperRef} className="z-linkage-config">
			{objRef.current
				? ReactDom.createPortal(
						<div className="z-linkage-tab">
							<Ztabs
								tabPanes={tabPanes}
								activeKey={tabKey}
								onChange={key => {
									setTabKey(key);
								}}
							/>
						</div>,
						objRef.current,
				  )
				: null}
			{tabKey === "1" ? (
				<section className="z-panel">
					<div className="z-panel-body z-text-center">未完待续</div>
				</section>
			) : null}
			{tabKey === "2" ? (
				<section>
					<div className="z-padding-15">
						<div className="z-panel">
							<div className="z-panel-body z-padding-bottom-0-important">
								<ZcascaderItemGroup
									label="联动类型"
									itemData={linkageTypesState}
									itemKeys={itemKeys}
									onItemClick={onItemClick}
									autoExpanded={true}
								/>
								<ValueLinkControl
									newFormData={newFormData}
									linkageType={curentLinkTypeRef.current.key}
									onSrcSelected={control => {
										let existLinkage = null;
										if (Array.isArray(defaultLinkagesRef.current)) {
											existLinkage = defaultLinkagesRef.current.find(age => {
												return (
													age.linkageType === curentLinkTypeRef.current.key &&
													age.src.fieldKey === control.fieldKey
												);
											});
										}
										configuredRef.current.setConfigured(existLinkage ? [...existLinkage.dist] : []);
										setCurrentControl(control);
									}}
									onOk={(links, other) => {
										// if(curentLinkTypeRef.current.key === "6"){

										// }

										//转成linkage
										let linkage = {
											linkageType: curentLinkTypeRef.current.key,
											name: curentLinkTypeRef.current.tab,
											src: null,
											dist: null,
										};
										if (links.srcControl) {
											linkage.src = {
												fieldKey: links.srcControl.fieldKey,
												label: links.srcControl.label,
												fieldType: links.srcControl.fieldType,
											};
										}
										let linkages = [];
										if (["1", "2", "3", "5.2"].includes(curentLinkTypeRef.current.key)) {
											linkage.dist = links.srcValues.map(val => {
												const fields = links.distControls.map(d => {
													return {
														fieldKey: d.fieldKey,
														label: d.label,
														fieldType: d.fieldType,
													};
												});
												return {
													srcKey: linkage.src.fieldKey,
													srcValue: val.value,
													valueLabel: val.label,
													fields,
												};
											});
										} else if (["4"].includes(curentLinkTypeRef.current.key)) {
											linkage.dist = links.srcValues.map(val => {
												const fields = [
													{
														fieldKey: links.distControl.fieldKey,
														label: links.distControl.label,
														fieldType: links.distControl.fieldType,
														options: links.distValues.map(dv => {
															return { label: dv.label, value: dv.value };
														}),
													},
												];
												return {
													srcKey: linkage.src.fieldKey,
													srcValue: val.value,
													valueLabel: val.label,
													fields,
												};
											});
										} else if (["5.1"].includes(curentLinkTypeRef.current.key)) {
											linkage.dist = links.srcValues.map(val => {
												const fields = links.distControls.map(d => {
													return {
														groupId: d.id,
														groupName: d.label,
													};
												});
												return {
													srcKey: linkage.src.fieldKey,
													srcValue: val.value,
													valueLabel: val.label,
													fields,
												};
											});
										} else if (["6", "7", "8"].includes(curentLinkTypeRef.current.key)) {
											const asyncParamName =
												curentLinkTypeRef.current.key === "7"
													? other.asyncParamName
													: undefined;
											const regionName =
												curentLinkTypeRef.current.key === "8" ? other.regionName : undefined;
											linkages = links.srcControls.map(l => {
												return {
													...linkage,
													src: {
														fieldKey: l.fieldKey,
														label: l.label,
														fieldType: l.fieldType,
													},
													asyncParamName,
													regionName,
													dist: [
														{
															fields: links.distControls.map(d => {
																return {
																	fieldKey: d.fieldKey,
																	fieldType: d.fieldType,
																	label: d.label,
																	asyncParamName,
																	regionName,
																};
															}),
														},
													],
												};
											});
										}

										//查找配置的选项中是否存在，存在就替换，不存在就追加
										if (Array.isArray(linkage.dist) && linkage.dist.length) {
											const currentConfigured = configuredRef.current.getCurrentConfigured();
											linkage.dist.forEach(di => {
												const existIndex = currentConfigured.findIndex(con => {
													return con.srcValue === di.srcValue;
												});
												if (existIndex > -1) {
													const newFields = [];
													currentConfigured[existIndex].fields.forEach(f => {
														const hasFieldindex = di.fields.findIndex(df => {
															return (
																(df.fieldKey && df.fieldKey === f.fieldKey) ||
																(df.groupName && df.groupName === f.groupName)
															);
														});
														if (hasFieldindex > -1) {
															newFields.push(di.fields[hasFieldindex]);
															di.fields.splice(hasFieldindex, 1);
														} else {
															newFields.push(f);
														}
													});
													di.fields = [...newFields, ...di.fields];
													currentConfigured.splice(existIndex, 1, di);
												} else {
													currentConfigured.push(di);
												}
											});
											linkage.dist = [...currentConfigured];
											configuredRef.current.setConfigured([...currentConfigured]);
											//新的linkages
											let existLinkageIndex = -1;
											if (Array.isArray(defaultLinkagesRef.current)) {
												existLinkageIndex = defaultLinkagesRef.current.findIndex(age => {
													return (
														age.linkageType === linkage.linkageType &&
														age.src.fieldKey === linkage.src.fieldKey
													);
												});
											}
											if (existLinkageIndex > -1) {
												defaultLinkagesRef.current.splice(existLinkageIndex, 1, linkage);
											} else {
												defaultLinkagesRef.current.push(linkage);
											}
										}
										if (
											Array.isArray(linkages) &&
											linkages.length &&
											Array.isArray(defaultLinkagesRef.current)
										) {
											linkages.forEach(linkage => {
												const hasAgeIndex = defaultLinkagesRef.current.findIndex(age => {
													return (
														age.linkageType === linkage.linkageType &&
														age.src.fieldKey === linkage.src.fieldKey
													);
												});
												if (hasAgeIndex > -1) {
													defaultLinkagesRef.current.splice(hasAgeIndex, 1, linkage);
												} else {
													defaultLinkagesRef.current.push(linkage);
												}
											});
											const IDconfigured = defaultLinkagesRef.current.filter(age => {
												return age.linkageType === curentLinkTypeRef.current.key;
											});
											configuredRef.current.setConfigured(IDconfigured);
										}
										defaultLinkagesRef.current = [...defaultLinkagesRef.current];
										onChange && onChange(defaultLinkagesRef.current);
									}}
									onBack={() => {
										showRightModal({
											show: false,
											modal: insetLocaltion,
										});
									}}
								/>
							</div>
							<div className="z-panel-heading">
								<span>
									{currentControl.label ? <Tag color="volcano">{currentControl.label}</Tag> : null}
									已配置的选项
								</span>
							</div>
							<div className="z-panel-body">
								{["6", "7", "8"].includes(curentLinkTypeRef.current.key) ? (
									<IDLinkagesConfigured ref={configuredRef} onRemove={onRemove} />
								) : (
									<ValueLinkConfigured
										linkageType={curentLinkTypeRef.current.key}
										ref={configuredRef}
										onRemove={onRemove}
									/>
								)}
							</div>
						</div>
					</div>
				</section>
			) : null}
		</section>
	);
}
LinkageConfig.defaultProps = defaultProps;
export default React.memo(ZerodMainContext.setConsumer(LinkageConfig));