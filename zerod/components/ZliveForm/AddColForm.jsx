import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import ZeditSimpleFormHOC from "../ZeditSimpleFormHOC";
import { getControl, getOptions } from "../Zform/controls";
import { itemsFromTree } from "../zTool";
import { dateFormats } from "./controls";
import ZselectInput from "./ZselectInput";
import ZauxiliaryInput from "./ZauxiliaryInput";
import { getFormItem, removeSomeLinkage } from "./common";
import { dataType } from "zerod/components/zTool";
import { Input } from "antd";

const PercentInput = React.memo(
	React.forwardRef(function(props, ref) {
		const { value, onChange } = props;
		const [num, setNum] = useState(typeof value === "number" ? value : 0);
		useEffect(() => {
			setNum(value * 100);
		}, [value]);
		return getControl("Input.Group", {
			compact: true,
			children: (
				<>
					{getControl("InputNumber", {
						min: 0,
						max: 100,
						precision: 4,
						style: { width: "80%" },
						value: num,
						onChange: num => {
							onChange && onChange(num / 100);
						},
					})}
					{getControl("Input", {
						defaultValue: "%",
						disabled: true,
						style: { width: "20%" },
					})}
				</>
			),
		});
	}),
);

const commonKeys = [
	"groupName",
	"fieldType",
	"label",
	"fieldKey",
	"required",
	"initialValue",
	"regularExpression",
	"errorMsg",
	"remark",
	"disabled",
];
const textKeys = ["maxLength", "minLength"];
const inputKeys = [...textKeys, "type"];
const textarayKeys = textKeys;
const selectionsType1keys = ["selectList"];
const selectionsType2keys = ["selectionsUrl", "selectionsQuery"];
const selectKeys = ["selectionsType", "selectListFieldNames", ...selectionsType1keys, ...selectionsType2keys];
const cascaderKeys = [...selectKeys, "changeOnSelect"];
const dateKeys = ["format"];
const uploadKeys = ["url"];
const colorKeys = ["colorValueType", "minSaturability"];
//控件类型列表
export const controlList = [
	{
		label: "单行输入", //控件类型名称
		value: 1, //类型值
		showKeys: [...commonKeys, ...inputKeys], //要显示的属性
		configKeys: inputKeys, //哪些要转成config的属性
	},
	{
		label: "多行输入",
		value: 2,
		showKeys: [...commonKeys, ...textarayKeys],
		configKeys: textarayKeys,
	},
	{
		label: "下拉选择",
		value: 3,
		showKeys: [...commonKeys, ...selectKeys, "mode"],
		configKeys: [...selectKeys, "mode"],
	},
	{
		label: "数字输入",
		value: 4,
		showKeys: [...commonKeys],
	},
	{
		label: "日期/时间选择",
		value: 5,
		showKeys: [...commonKeys, ...dateKeys],
		configKeys: dateKeys,
	},
	{
		label: "级联",
		value: 6,
		showKeys: [...commonKeys, ...cascaderKeys],
		configKeys: cascaderKeys,
	},
	{
		label: "树选择",
		value: 7,
		showKeys: [...commonKeys, ...selectKeys],
		configKeys: selectKeys,
	},
	{
		label: "多选框",
		value: 8,
		showKeys: [...commonKeys, ...selectKeys],
		configKeys: selectKeys,
	},
	{
		label: "单选框",
		value: 9,
		showKeys: [...commonKeys, ...selectKeys],
		configKeys: selectKeys,
	},
	// {
	// 	label: "时间选择",
	// 	value: 10,
	// 	showKeys: [...commonKeys],
	// },
	{
		label: "文件上传",
		value: 11,
		showKeys: [...commonKeys, ...uploadKeys],
		configKeys: uploadKeys,
	},
	{
		label: "颜色值",
		value: 12,
		showKeys: [...commonKeys, ...colorKeys],
		configKeys: colorKeys,
	},
	{
		label: "地图选点",
		value: 13,
		showKeys: [...commonKeys, "mapType", "secretKey"],
		configKeys: ["mapType", "secretKey"],
	},
];
//地图的默认密钥(默认是邹国涛个人注册)
const initSereKey = {
	amap: "3d5c1c6169c64554d6f9fcca35d4abff",
	qqmap: "63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK",
};
//控制显示哪个类型的控件的属性
function showFieldTypeLinkOther(changeFormItems, formItems, val, excludeKeys = []) {
	const control = controlList.find(cont => {
		return cont.value === val;
	});
	const showKeys = control.showKeys.filter(key => {
		return !excludeKeys.includes(key);
	});
	changeFormItems(
		formItems.map(item => {
			return { key: item.key, show: showKeys.includes(item.key) };
		}),
		true,
	);
}
function showSelectionsTypeLinkOther(changeFormItems, selectionsType) {
	changeFormItems(
		[
			{
				key: "selectList",
				show: selectionsType === 1,
			},
			{
				key: "selectionsUrl",
				show: selectionsType === 2,
			},
			{
				key: "selectionsQuery",
				show: selectionsType === 2,
			},
		],
		true,
	);
}
const urlRules = function(keys = {}) {
	return [
		{
			validator: (rule, value, callback) => {
				if (!value) {
					return callback(new Error("不能为空"));
				}
				const valkeys = Object.keys(keys);
				let hasError = valkeys.some(
					key => value[keys[key]] === undefined || !value[keys[key]].toString().trim(),
				);
				if (hasError) {
					return callback(new Error("有未填写的值"));
				}
				callback();
			},
		},
	];
};
//控件属性
function useFormItems(groupId, formViewerRef, type) {
	const itemsRef = useRef([]);
	itemsRef.current = [
		{
			key: "groupName",
			label: "组名",
			render(form, changeFormItems) {
				return getControl("Input", { disabled: true });
			},
		},
		{
			key: "fieldType",
			label: "控件类型",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Select", {
					selectList: controlList.map(item => ({ label: item.label, value: item.value })),
					onChange(val) {
						//控件类型改变控制显示对应的属性输入框
						showFieldTypeLinkOther(changeFormItems, itemsRef.current, val);
						if ([3, 6, 7, 8, 9].includes(val)) {
							showSelectionsTypeLinkOther(changeFormItems, form.getFieldValue("selectionsType"));
						}
						// changeFormItems([{ key: "initialValue", show: ![5].includes(val) }], true);
					},
				});
			},
			options: getOptions({ required: true }),
		},
		{
			key: "label",
			label: "控件Label",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Input");
			},
			options: getOptions({ required: true }),
		},
		{
			key: "fieldKey",
			label: "字段Key",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Input");
			},
			options: getOptions({
				required: true,
				rules: [
					{
						validator: (rule, value, callback) => {
							if (/Label$/.test(value)) {
								return callback(new Error("禁止以Label结尾的key"));
							}
							const groups = formViewerRef.current.getFormGroups();
							let hasKey = groups.some(g => {
								return g.formItems.some(item => {
									return item.key === value;
								});
							});
							if (hasKey && type === "add") {
								return callback(new Error("key已存在，请填写其他的key"));
							}
							callback();
						},
					},
				],
			}),
		},
		{
			key: "required",
			label: "是否必填",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "是",
							value: 1,
						},
						{ label: "否", value: 0 },
					],
				});
			},
			options: getOptions({ required: true, initialValue: 1 }),
		},

		{
			key: "disabled",
			label: "是否默认禁用",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "是",
							value: 1,
						},
						{ label: "否", value: 0 },
					],
				});
			},
			options: getOptions({ required: true, initialValue: 0 }),
		},
		{
			key: "mode",
			label: "模式",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "单选",
							value: "single",
						},
						{ label: "多选", value: "multiple" },
						{ label: "标签", value: "tags" },
					],
				});
			},
			options: getOptions({ required: true, initialValue: "single" }),
		},
		{
			key: "mapType",
			label: "地图类型",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "腾讯",
							value: "qqmap",
						},
						{ label: "高德", value: "amap" },
					],
					onChange(e) {
						const val = e.target.value;
						form.setFieldsValue({
							secretKey: initSereKey[val],
						});
					},
				});
			},
			options: getOptions({ required: true, initialValue: "qqmap" }),
		},
		{
			key: "secretKey",
			label: "密钥",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Input");
			},
			options: getOptions({ required: true, initialValue: initSereKey["qqmap"] }),
		},
		{
			key: "type",
			label: "文本类型",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "文本框",
							value: "text",
						},
						{
							label: "密码框",
							value: "password",
						},
					],
				});
			},
			options: getOptions({ required: true, initialValue: "text" }),
		},
		{
			key: "maxLength",
			label: "最大输入长度",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber");
			},
		},
		{
			key: "minLength",
			label: "最小输入长度",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber");
			},
		},
		{
			key: "selectionsType",
			label: "选项类型",
			labelFocused: true,
			show: false,
			render(form, changeFormItems) {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "自定义",
							value: 1,
						},
						{ label: "异步", value: 2 },
					],
					onChange(e) {
						showSelectionsTypeLinkOther(changeFormItems, e.target.value);
					},
				});
			},
			options: getOptions({ required: true, initialValue: 1 }),
		},
		{
			key: "selectionsUrl",
			label: "请求选项数据地址",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return (
					<ZselectInput
						controlCostrom={
							[6, 7].includes(form.getFieldValue("fieldType"))
								? {
										right(value, valueChange) {
											return getControl("Select", {
												value: value,
												selectList: [
													{
														label: "全部加载",
														value: "all",
													},
													{
														label: "分部加载",
														value: "part",
													},
												],
												onChange: valueChange,
												style: { width: "100%" },
											});
										},
								  }
								: undefined
						}
						leftSpan={6}
						centerSpan={[3, 8, 9].includes(form.getFieldValue("fieldType")) ? 18 : 12}
						rightSpan={[3, 8, 9].includes(form.getFieldValue("fieldType")) ? 0 : 6}
						selectList={["post", "get"].map(m => ({ label: m, value: m }))}
						valueKey={{ left: "selectionsUrlMethod", center: "selectionsUrl", right: "requireType" }}
						leftPlaceholde="请求方式"
						centerPlaceholder="请求地址"
					/>
				);
			},
			options: getOptions({
				required: true,
				initialValue: { selectionsUrlMethod: "post", selectionsUrl: "", requireType: "all" },
				rules: urlRules({ left: "selectionsUrlMethod", center: "selectionsUrl", right: "requireType" }),
			}),
		},
		{
			key: "selectionsQuery",
			label: "请求参数配置",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("TreeInput", { multiple: false, labelPlaceholder: "Key" });
			},
			options: getOptions({
				required: false,
				initialValue: [],
			}),
		},
		{
			key: "selectList",
			label: "选项数据",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("TreeInput", {
					multiple: [6, 7].includes(form.getFieldValue("fieldType")),
				});
			},
			options: getOptions({
				required: true,
				initialValue: [],
				rules: [
					{
						validator: (rule, value, callback) => {
							const finished = itemsFromTree({
								tree: value,
								condition(val1, val2) {
									return val1.toString().trim() === val2.toString().trim();
								},
								sourceItem: { value: "" },
								keyObj: { id: "value", children: "children" },
							});
							if (finished) {
								return callback(new Error("选项中有未填写的值"));
							}
							callback();
						},
					},
				],
			}),
		},
		{
			key: "selectListFieldNames",
			label: "lable、value、children对应选项数据中的字段",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("TreeInput", {
					multiple: false,
					showBtns: false,
					inputType: "coustom",
					customInputKeys: [{ key: "label", initValue: "" }, { key: "value", initValue: "" }],
					children: (states, setStates, customInputKeys) => {
						return (
							<Input.Group compact style={{ width: "100%" }}>
								<Input
									style={{ width: "50%" }}
									value={states[customInputKeys[0].key]}
									onChange={e => {
										setStates({
											[customInputKeys[0].key]: e.target.value,
										});
									}}
									size="small"
									disabled
								/>
								<Input
									style={{ width: "50%" }}
									value={states[customInputKeys[1].key]}
									onChange={e => {
										setStates({
											[customInputKeys[1].key]: e.target.value,
										});
									}}
									size="small"
								/>
							</Input.Group>
						);
					},
				});
			},
			options: getOptions({
				required: true,
				initialValue: [
					{ label: "label", value: "label" },
					{ label: "value", value: "value" },
					{ label: "children", value: "children" },
				],
			}),
		},
		{
			key: "changeOnSelect",
			label: "是否必须选到最后一级",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Radio.Group", {
					selectList: [
						{
							label: "是",
							value: 0,
						},
						{ label: "否", value: 1 },
					],
				});
			},
			options: getOptions({ required: true, initialValue: 0 }),
		},
		{
			key: "format",
			label: "格式",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Select", {
					selectList: Object.keys(dateFormats).map(key => ({ label: key, value: key })),
				});
			},
			options: getOptions({ required: true, initialValue: "YYYY-MM-DD" }),
		},

		{
			key: "url",
			label: "上传地址",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return (
					<ZselectInput
						selectList={["post", "get"].map(m => ({ label: m, value: m }))}
						valueKey={{ left: "urlMethod", center: "url", right: "urlParamName" }}
						leftPlaceholde="请求方式"
						centerPlaceholder="请求地址"
						rightPlaceholder="参数名"
					/>
				);
			},
			options: getOptions({
				required: true,
				initialValue: {
					urlMethod: "post",
					url: "/file-upload-service/webapi/v1.0/fileUpload/uploads",
					urlParamName: "files",
				},
				rules: urlRules({ left: "urlMethod", center: "url", right: "urlParamName" }),
			}),
		},
		// {
		// 	key: "detailUrl",
		// 	label: "获取已上传列表的地址",
		// 	show: false,
		// 	labelFocused: true,
		// 	render(form, changeFormItems) {
		// 		return (
		// 			<ZselectInput
		// 				selectList={["post", "get"].map(m => ({ label: m, value: m }))}
		// 				valueKey={{ left: "detailUrlMethod", center: "detailUrl", right: "detailUrlParamName" }}
		// 				leftPlaceholde="请求方式"
		// 				centerPlaceholder="请求地址"
		// 				rightPlaceholder="参数名"
		// 			/>
		// 		);
		// 	},
		// 	options: getOptions({
		// 		required: true,
		// 		initialValue: { detailUrlMethod: "post", detailUrl: "", detailUrlParamName: "fileIds" },
		// 		rules: urlRules({ left: "detailUrlMethod", center: "detailUrl", right: "detailUrlParamName" }),
		// 	}),
		// },
		{
			key: "colorValueType",
			label: "颜色值类型",
			labelFocused: true,
			show: false,
			render(form, changeFormItems) {
				return getControl("Select", {
					selectList: [{ label: "hex", value: "hex" }, { label: "rgb", value: "rgb" }],
				});
			},
			options: getOptions({
				required: true,
				initialValue: "rgb",
			}),
		},
		{
			key: "minSaturability",
			label: "最小饱和度(0%~100%,越小越趋近白色)",
			labelFocused: true,
			show: false,
			render(form, changeFormItems) {
				return <PercentInput />;
			},
			options: getOptions({
				required: false,
				initialValue: 0,
			}),
		},
		{
			key: "initialValue",
			labelFocused: true,
			label: "控件初始值",
			render(form, changeFormItems) {
				return [12].includes(form.getFieldValue("fieldType"))
					? getControl("ColorPicker", { valueType: form.getFieldValue("colorValueType") })
					: getControl("Input");
			},
		},
		{
			key: "regularExpression",
			label: "正则表达式",
			labelFocused: true,
			render(form, changeFormItems) {
				return <ZauxiliaryInput />;
			},
			options: {
				rules: [
					{
						validator(rule, value, callback) {
							let hasError = false;
							try {
								new RegExp(value);
							} catch (e) {
								hasError = true;
							}
							if (hasError) {
								return callback("无效正则表达式");
							}
							callback();
						},
					},
				],
			},
		},
		{
			key: "errorMsg",
			label: "错误提示",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Input");
			},
		},
		{
			key: "remark",
			label: "备注",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("TextArea", {
					autosize: { minRows: 3 },
				});
			},
		},
	];
	return itemsRef.current;
}
function useEditPage(groupId, formItem, formViewerRef, linkageRef, type) {
	const groupRef = useRef();
	const items = useFormItems(groupId, formViewerRef, type);
	return useRef(
		ZeditSimpleFormHOC({
			pageHeader: {
				show: false,
			},
			pageFooter: {
				show: false,
			},
			form: {
				panelHeader: "控件属性",
				labelLayout: "inline",
				type: "update",
				defaultSpan: 24,
				submitBtnName: "确定",
				submitMsg: null,
				items,
				detailApiInterface(detailId, props, tool) {
					const group = { id: groupId };
					const groups = formViewerRef.current.getFormGroups();
					const i = groups.findIndex(g => g.id == groupId);
					group.name = groups[i].name;
					groupRef.current = groups[i];
					//新增/修改都需groupName
					let data = { groupName: group.name };
					//修改控件情况
					if (formItem) {
						let excludeKeys = [];
						const currentItem = controlList.find(item => {
							return item.value === formItem["fieldType"];
						});
						if (currentItem) {
							Object.keys(formItem).forEach(key => {
								if (currentItem.showKeys.includes(key)) {
									data[key] = formItem[key];
								}
							});
						}
						try {
							const config = JSON.parse(formItem["config"]);
							if (config) {
								//当是上传控件
								if (formItem["fieldType"] === 11) {
									const url = { urlMethod: "", url: "", urlParamName: "" };
									// const detailUrl = { detailUrlMethod: "", detailUrl: "", detailUrlParamName: "" };
									Object.keys(config).forEach(key => {
										switch (key) {
											case "urlMethod":
											case "url":
											case "urlParamName":
												url[key] = config[key];
												delete config[key];
												break;
											// case "detailUrlMethod":
											// case "detailUrl":
											// case "detailUrlParamName":
											// detailUrl[key] = config[key];
											// delete config[key];
											// break;
										}
									});
									config["url"] = url;
									// config["detailUrl"] = detailUrl;
								} else if ([3, 6, 7, 8, 9].includes(formItem["fieldType"])) {
									config.selectionsType =
										config.selectionsType === undefined ? 1 : Number(config.selectionsType);
									excludeKeys =
										config.selectionsType === 1 ? selectionsType2keys : selectionsType1keys;
									const objToArr = keyName => {
										if (dataType.isObject(config[keyName])) {
											config[keyName] = Object.keys(config[keyName]).map(key => {
												return {
													label: key,
													value: config[keyName][key],
												};
											});
										} else {
											config[keyName] = [];
										}
									};
									objToArr("selectionsQuery");
									objToArr("selectListFieldNames");
									showSelectionsTypeLinkOther(
										tool.getFormMethods().changeFormItems,
										config["selectionsType"],
									);
								}

								data.disabled = data.disabled === undefined ? 0 : Number(data.disabled);
								data = { ...data, ...config };
							}
						} catch (e) {}
						showFieldTypeLinkOther(
							tool.getFormMethods().changeFormItems,
							items,
							formItem["fieldType"],
							excludeKeys,
						);
						// if ([5].includes(formItem["fieldType"])) {
						// 	tool.getFormMethods().changeFormItems({ key: "initialValue", show: false }, true);
						// }
					}
					return Promise.resolve({
						data,
					});
				},
				submitApiInterface(values, props, tool) {
					const control = controlList.find(item => {
						return item.value === values["fieldType"];
					});
					const config = {};
					if (Array.isArray(control.configKeys)) {
						control.configKeys.forEach(key => {
							config[key] = values[key];
							delete values[key];
						});
					}
					values.config = config;
					//上传控件的config要特殊处理
					if (values["fieldType"] === 11) {
						let newConf = values.config;
						Object.keys(values.config).forEach(key => {
							const val = values.config[key];
							// if (key === "url" || key === "detailUrl") {
							// 	newConf = { ...newConf, ...val };
							// }
							if (key === "url") {
								newConf = { ...newConf, ...val };
							}
						});
						values.config = newConf;
					} else if ([3, 6, 7, 8, 9].includes(values["fieldType"])) {
						const arrToObj = keyName => {
							const newSelectionsQuery = {};
							Array.isArray(values.config[keyName]) &&
								values.config[keyName].forEach(item => {
									if (item.label && item.value) {
										newSelectionsQuery[item.label] = item.value;
									}
								});
							values.config[keyName] = newSelectionsQuery;
						};
						arrToObj("selectionsQuery");
						arrToObj("selectListFieldNames");
					}
					if (values.config) {
						values.config = JSON.stringify(values.config);
					}
					const newItem = getFormItem(formItem ? { ...formItem, ...values } : values, groupRef.current);
					const currentItems = groupRef.current.groupRef.current.getFormItems();
					let newItems = [...currentItems];
					const i = currentItems.findIndex(
						item => item["fieldKey"] === (formItem ? formItem["fieldKey"] : values["fieldKey"]),
					);
					let successMsg = "添加控件成功";
					if (i > -1) {
						if (formItem && formItem["fieldKey"] !== values["fieldKey"] && linkageRef.current) {
							//修改了fieldKey时移除li
							const hasRemoveAge = removeSomeLinkage(linkageRef, formItem["fieldKey"]);
							if (hasRemoveAge) {
								successMsg += `。由于修改了fieldKey，同时移除了对应的联动配置。`;
							}
						}
						newItems.splice(i, 1, newItem);
					} else {
						newItems = [...newItems, newItem];
					}
					// console.log(newItem);
					groupRef.current.groupRef.current.setFormItems(newItems);
					tool.showRightModal(false, "controlProtoModal");
					return Promise.resolve({
						msg: successMsg,
					});
				},
			},
		}),
	).current;
}
export default React.memo(
	React.forwardRef(function AddColForm({ groupId, formItem, formViewerRef, linkageRef, type }, ref) {
		const EditForm = useEditPage(groupId, formItem, formViewerRef, linkageRef, type);
		return <EditForm detailId="1" />;
	}),
);
