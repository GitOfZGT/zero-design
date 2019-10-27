import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import ZeditSimpleFormHOC from "../ZeditSimpleFormHOC";
import { getControl, getOptions } from "../Zform/controls";
import { itemsFromTree, GenNonDuplicateID } from "../zTool";
import { dateFormats } from "./controls";
import ZselectInput from "./ZselectInput";
import ZauxiliaryInput from "./ZauxiliaryInput";
import { getFormItem, removeSomeLinkage } from "./common";
import { dataType } from "zerod/components/zTool";
import { Input, message, Icon, Tooltip, Modal } from "antd";

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
const selectKeys = [
	"notFoundContent",
	"selectionsType",
	"selectListFieldNames",
	...selectionsType1keys,
	...selectionsType2keys,
];
const cascaderKeys = [...selectKeys, "changeOnSelect"];
const dateKeys = ["format"];
const uploadKeys = [
	"url",
	"fileAccept",
	"fileListType",
	"wxSourceTypes",
	"uploaderResponse",
	"minUploadLength",
	"maxUploadLength",
	"autoUpload",
	"maxMegabytes",
];
const colorKeys = ["colorValueType", "minSaturability"];
const mapSelectKeys = ["mapType", "secretKey", "webserviceUrlDO"];
const inputNumberKeys = ["min", "max"];
//微信小程序组件库wux-weapp-ex支持标识
const wechat = { key: "wechat", title: "微信小程序可用" };
//控件类型在微信小程序组件库wux-weapp-ex支持情况
const controlWechat = [1, 2, 3, 4, 5, 6, 8, 9, 11, 13];
//日期格式在微信小程序组件库wux-weapp-ex支持情况
const formatWechat = ["YYYY", "YYYY-MM", "YYYY-MM-DD", "YYYY-MM-DD HH:mm", "HH:mm"];
//控件类型列表
export const controlList = [
	{
		label: "单行输入", //控件类型名称
		value: 1, //类型值
		showKeys: [...commonKeys, ...inputKeys], //要显示的控件属性
		configKeys: inputKeys, //保存时哪些要转成config的属性
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
		showKeys: [...commonKeys, ...selectKeys, "mode", "notFoundContent"],
		configKeys: [...selectKeys, "mode", "notFoundContent"],
	},
	{
		label: "数字输入",
		value: 4,
		showKeys: [...commonKeys, ...inputNumberKeys],
		configKeys: inputNumberKeys,
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
	{
		label: "开关",
		value: 10,
		showKeys: [...commonKeys],
		configKeys: [],
	},
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
		showKeys: [...commonKeys, ...mapSelectKeys],
		configKeys: mapSelectKeys,
	},
	{
		label: "自定义占位",
		value: 14,
		showKeys: [...commonKeys, "isFormItem"],
		configKeys: [],
	},
	{
		label: "文书",
		value: 20,
		showKeys: [...commonKeys, "docCode"],
		configKeys: ["docCode"],
	},
];
//地图的默认密钥(默认是邹国涛个人注册)
const initSereKey = {
	amap: "3d5c1c6169c64554d6f9fcca35d4abff",
	qqmap: "63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK",
};
//控制显示哪个类型的控件的属性
function showFieldTypeLinkOther(changeFormItems, formItems, val, excludeKeys = []) {
	const fieldTypeItem = controlList.find(cont => {
		return cont.value === val;
	});
	const showKeys = fieldTypeItem.showKeys.filter(key => {
		return !excludeKeys.includes(key);
	});
	changeFormItems(
		formItems.map(item => {
			return { key: item.key, show: showKeys.includes(item.key) };
		}),
		true,
	);
}
const getSwitchOpt = (options = {}) => ({
	render(form, changeFormItems) {
		return getControl("Switch");
	},
	options: getOptions({
		required: true,
		initialValue: true,
		normalize(value, prevValue, allValues) {
			return Boolean(value);
		},
		valuePropName: "checked",
		...options,
	}),
});
//对应字段的控件
function getCorresFormItem({ key, label, initialValue }) {
	return {
		key,
		label,
		show: false,
		labelFocused: true,
		render(form, changeFormItems) {
			return getControl("TreeInput", {
				multiple: false,
				showBtns: false,
				inputType: "coustom",
				customInputKeys: [{ key: "label", initValue: "" }, { key: "value", initValue: "" }],
				children: (states, setStates, customInputKeys) => {
					return getControl("Input.Group", {
						compact: true,
						style: { width: "100%" },
						children: (
							<>
								{getControl("Input", {
									style: { width: "50%" },
									value: states[customInputKeys[0].key],
									onChange: value => {
										setStates({
											[customInputKeys[0].key]: value,
										});
									},
									size: "small",
									disabled: true,
								})}
								{getControl("Input", {
									style: { width: "50%" },
									value: states[customInputKeys[1].key],
									onChange: value => {
										setStates({
											[customInputKeys[1].key]: value,
										});
									},
									size: "small",
								})}
							</>
						),
					});
				},
			});
		},
		options: getOptions({
			required: true,
			initialValue,
		}),
	};
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
const urlRules = function(keys = []) {
	return [
		{
			validator: (rule, value, callback) => {
				console.log(value);
				if (!value) {
					return callback(new Error("不能为空"));
				}
				let hasError = keys.some(key => value[key] === undefined || !value[key].toString().trim());
				if (hasError) {
					return callback(new Error("有未填写的值"));
				}
				callback();
			},
		},
	];
};

function getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems) {
	const inputOpt = {
		disabled: keyDisabledRef.current,
	};
	if (isUpdateRef.current) {
		inputOpt.addonAfter = (
			<Tooltip title={`${inputOpt.disabled ? "开启" : "关闭"}修改key`}>
				<i
					className="zero-icon zerod-chushihualiuchengshitu z-fieldKey-lock"
					onClick={() => {
						const doChange = () => {
							keyDisabledRef.current = !keyDisabledRef.current;
							changeFormItems(
								[
									{
										key: "fieldKey",
										newItem: {
											control: getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems),
										},
									},
								],
								true,
							);
						};
						if (keyDisabledRef.current) {
							Modal.confirm({
								title: "提醒",
								content: "如果修改了字段key,提交后会删除相关的联动配置,是否继续?",
								onOk: doChange,
							});
						} else {
							doChange();
						}
					}}
				/>
			</Tooltip>
		);
	}
	return getControl("Input", inputOpt);
}

//控件属性
function useFormItems(groupId, formViewerRef, type) {
	const itemsRef = useRef([]);
	const isUpdateRef = useRef(type === "update");
	const keyDisabledRef = useRef(isUpdateRef.current);
	const hashkey = GenNonDuplicateID(4);
	itemsRef.current = [
		//<--共用属性---> start
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
					selectList: controlList.map(item => {
						const plat = [];
						if (controlWechat.includes(item.value)) {
							plat.push(wechat);
						}
						return { label: item.label, value: item.value, plat };
					}),
					onChange(val) {
						//控件类型改变控制显示对应的属性输入框
						showFieldTypeLinkOther(changeFormItems, itemsRef.current, val);
						if ([3, 6, 7, 8, 9].includes(val)) {
							showSelectionsTypeLinkOther(changeFormItems, form.getFieldValue("selectionsType"));
						}
						// changeFormItems([{ key: "initialValue", show: ![5].includes(val) }], true);
					},
					optLabelRender(item) {
						return (
							<div className="z-flex-space-between">
								<div>{item.label}</div>
								<div>
									{item.plat.map(p => {
										return (
											<Tooltip title={p.title} key={p.key}>
												<Icon
													className="z-text-green z-margin-left-5"
													key={p.key}
													type={p.key}
												/>
											</Tooltip>
										);
									})}
								</div>
							</div>
						);
					},
				});
			},
			options: getOptions({ required: true, initialValue: 1 }),
		},
		{
			key: "label",
			label: "控件Label",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Input");
			},
			options: getOptions({ required: false, initialValue: `名称_${hashkey}` }),
		},
		{
			key: "fieldKey",
			label: "字段Key",
			labelFocused: true,
			render(form, changeFormItems) {
				return getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems);
			},
			options: getOptions({
				required: true,
				initialValue: `key_${hashkey}`,
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
			label: "必填",
			labelFocused: true,
			...getSwitchOpt(),
		},
		{
			key: "disabled",
			label: "默认禁用",
			labelFocused: true,
			...getSwitchOpt({ initialValue: false }),
		},
		//<--共用属性---> end
		//<--input特有属性---> start
		{
			key: "type",
			label: "文本类型",
			show: true,
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
			show: true,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber", { min: 0 });
			},
		},
		{
			key: "minLength",
			label: "最小输入长度",
			show: true,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber", { min: 0 });
			},
		},
		{
			key: "max",
			label: "最大值",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber");
			},
		},
		{
			key: "min",
			label: "最小值",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber");
			},
		},
		//<--input特有属性---> end
		//<--下拉框特有属性---> start
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
		//<--下拉框特有属性---> end
		//<--下拉框、单选框、多选框、级联、树选择特有属性---> start
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
						rightSpan={[3, 8, 9].includes(form.getFieldValue("fieldType")) ? null : 6}
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
				rules: urlRules(["selectionsUrlMethod", "selectionsUrl", "requireType"]),
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
		getCorresFormItem({
			key: "selectListFieldNames",
			label: "lable、value、children对应选项数据中的字段",
			initialValue: [
				{ label: "label", value: "label" },
				{ label: "value", value: "value" },
				{ label: "children", value: "children" },
			],
		}),
		{
			key: "notFoundContent",
			label: "没有选项数据时显示的内容",
			show: false,
			render(form, changeFormItems) {
				return getControl("Input");
			},
			options: getOptions({ required: true, initialValue: "无相关数据" }),
		},
		//<--下拉框、单选框、多选框、级联、树选择特有属性---> end
		//<--级联特有属性---> start
		{
			key: "changeOnSelect",
			label: "必须选到最后一级",
			labelFocused: true,
			show: false,
			...getSwitchOpt(),
		},
		//<--级联特有属性---> end
		//<--日期特有属性---> start
		{
			key: "format",
			label: "格式",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Select", {
					selectList: Object.keys(dateFormats).map(key => {
						const plat = [];
						if (formatWechat.includes(key)) {
							plat.push(wechat);
						}
						return { label: key, value: key, plat };
					}),
					optLabelRender(item) {
						return (
							<div className="z-flex-space-between">
								<div>{item.label}</div>
								<div>
									{item.plat.map(p => {
										return (
											<Tooltip title={p.title} key={p.key}>
												<Icon
													className="z-text-green z-margin-left-5"
													key={p.key}
													type={p.key}
												/>
											</Tooltip>
										);
									})}
								</div>
							</div>
						);
					},
				});
			},
			options: getOptions({ required: true, initialValue: "YYYY-MM-DD" }),
		},
		//<--日期特有属性---> end
		//<--上传控件特有属性---> start
		{
			key: "autoUpload",
			label: "选完文件自动上传",
			labelFocused: true,
			show: false,
			...getSwitchOpt(),
		},
		{
			key: "url",
			label: "上传地址(依次为：请求方式、请求地址、formData参数名、是否多文件上传)",
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
						leftSpan={5}
						centerSpan={11}
						rightSpan={3}
						customControls={[
							{
								key: "requestMode",
								span: 5,
								render(value, item, change) {
									return getControl("Select", {
										value: value[item.key],
										selectList: [
											{ label: "单文件", value: "single" },
											{ label: "多文件", value: "multiple" },
										],
										onChange(val) {
											change(val, item.key);
										},
										className: "z-label",
									});
								},
							},
						]}
					/>
				);
			},
			options: getOptions({
				required: true,
				initialValue: {
					urlMethod: "post",
					url: "/file-upload-service/webapi/v1.0/fileUpload/uploads",
					urlParamName: "files",
					requestMode: "multiple",
				},
				rules: urlRules(["urlMethod", "url", "urlParamName", "requestMode"]),
			}),
		},
		getCorresFormItem({
			key: "uploaderResponse",
			label: "响应体对应的字段",
			initialValue: [
				{ label: "id", value: "id" },
				{ label: "filePath", value: "filePath" },
				{ label: "fileSuffix", value: "fileSuffix" },
				{ label: "originalFileName", value: "originalFileName" },
			],
		}),
		{
			key: "fileAccept",
			label: "允许上传文件类型",
			show: false,
			render() {
				return getControl("Select", {
					selectList: [
						{
							label: "只允许图片",
							value: "image/*",
						},
						{
							label: "任意文件",
							value: "all",
						},
					],
				});
			},
			options: getOptions({
				required: true,
				initialValue: "image/*",
			}),
		},
		{
			key: "fileListType",
			label: "上传列表样式",
			show: false,
			render() {
				return getControl("Select", {
					selectList: ["picture", "picture-card"],
				});
			},
			options: getOptions({
				required: true,
				initialValue: "picture-card",
			}),
		},
		{
			key: "maxMegabytes",
			label: "最大上传大小(M)",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber", { min: 0, precision: 2 });
			},
			options: getOptions({
				required: true,
				initialValue: 10,
			}),
		},
		{
			key: "maxUploadLength",
			label: "最大上传数",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber", { min: 0 });
			},
		},
		{
			key: "minUploadLength",
			label: "最小上传数",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("InputNumber", { min: 0 });
			},
		},
		{
			key: "wxSourceTypes",
			label: "小程序图片来源",
			show: false,
			render() {
				return getControl("Checkbox.Group", {
					selectList: [{ label: "从相册选图", value: "album" }, { label: "使用相机", value: "camera" }],
				});
			},
			options: getOptions({
				required: true,
				initialValue: ["album", "camera"],
			}),
		},
		//<--上传控件特有属性---> end
		//<--颜色值特有属性---> start
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
		//<--颜色值特有属性---> end
		//<--地图选点特有属性---> start
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
			key: "webserviceUrlDO",
			label: "调用地图web服务的代理地址",
			show: false,
			labelFocused: true,
			render(form, changeFormItems) {
				return (
					<ZselectInput
						leftSpan={6}
						centerSpan={18}
						rightSpan={0}
						selectList={["post", "get"].map(m => ({ label: m, value: m }))}
						valueKey={{ left: "urlMethod", center: "url" }}
						leftPlaceholde="请求方式"
						centerPlaceholder="请求地址"
					/>
				);
			},
			options: getOptions({
				required: true,
				initialValue: { urlMethod: "post", url: "/system-service/webapi/geography/webService" },
				rules: urlRules(["urlMethod", "url"]),
			}),
		},
		//<--地图选点特有属性---> end
		{
			key: "isFormItem",
			label: "自定义内容是否为表单控件",
			labelFocused: true,
			show: false,
			...getSwitchOpt(),
		},

		//<--共用属性---> start
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
		//<--共用属性---> end
		{
			key: "docCode",
			show: false,
			label: "文书模板编码",
			labelFocused: true,
			render(form, changeFormItems) {
				return getControl("Input");
			},
			options: getOptions({ required: true }),
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
				initAnimation: false,
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
								const objToArr = keyName => {
									if (dataType.isObject(config[keyName])) {
										config[keyName] = Object.keys(config[keyName]).map(key => {
											return {
												label: key,
												value: config[keyName][key],
											};
										});
									} else {
										config[keyName] = undefined;
									}
								};
								//当是上传控件
								if (formItem["fieldType"] === 11) {
									const url = { urlMethod: "", url: "", urlParamName: "" };
									// const detailUrl = { detailUrlMethod: "", detailUrl: "", detailUrlParamName: "" };
									Object.keys(config).forEach(key => {
										switch (key) {
											case "urlMethod":
											case "url":
											case "urlParamName":
											case "requestMode":
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
									objToArr("uploaderResponse");
									// config["detailUrl"] = detailUrl;
								} else if ([3, 6, 7, 8, 9].includes(formItem["fieldType"])) {
									config.selectionsType =
										config.selectionsType === undefined ? 1 : Number(config.selectionsType);
									excludeKeys =
										config.selectionsType === 1 ? selectionsType2keys : selectionsType1keys;

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
					const fieldTypeItem = controlList.find(item => {
						return item.value === values["fieldType"];
					});
					const config = {};
					if (Array.isArray(fieldTypeItem.configKeys)) {
						fieldTypeItem.configKeys.forEach(key => {
							config[key] = values[key];
							delete values[key];
						});
					}
					values.config = config;
					values.fieldTypeName = fieldTypeItem.label;
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
						arrToObj("uploaderResponse");
					} else if ([3, 6, 7, 8, 9].includes(values["fieldType"])) {
						arrToObj("selectionsQuery");
						arrToObj("selectListFieldNames");
					}
					if (values.config) {
						values.config = JSON.stringify(values.config);
					}

					const newItem = getFormItem({
						field: formItem ? { ...formItem, ...values } : values,
						group: groupRef.current,
						noAsync: true,
					});
					const currentItems = groupRef.current.groupRef.current.getFormItems();
					let newItems = [...currentItems];
					const i = currentItems.findIndex(
						item => item["fieldKey"] === (formItem ? formItem["fieldKey"] : values["fieldKey"]),
					);
					let successMsg = `${formItem ? "修改" : "添加"}控件成功`;
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
