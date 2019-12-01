/*
 * @Author: zgt
 * @Date: 2019-03-26 09:27:16
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-15 14:59:29
 * @Description: file content
 */
import React from "react";
import linkageAction from "./linkageAction";
import { getControl, getOptions, regExps } from "../Zform/controls";
import { dataType, httpAjax } from "../zTool";
import ZeroUpload from "./ZeroUpload";
import ZprosAndCons from "./ZprosAndCons";
import moment from "moment";
import MapChooseAddress from "./ZmapChooseAddress";
import TreeSelectLoader from "./TreeSelectLoader";
import CascaderLoader from "./CascaderLoader";
import { treeDataAddKey } from "./common";
//处理默认的校验规则
export const getOptionsRules = function(e, rules = [], opt = {}) {
	const reg = typeof e.regularExpression === "string" ? e.regularExpression.replace(/((^\/)|(\/$))/g, "") : "";
	return getOptions({
		...opt,
		required: e.required,
		requiredMsg: e.errorMsg,
		initialValue: e.initialValue,
		rules: reg
			? [
					...rules,
					{
						pattern: reg,
						message: e.errorMsg,
					},
			  ]
			: rules,
	});
};
//日期/时间的格式
export const dateFormats = {
	"YYYY-wo": "WeekPicker",
	YYYY: "YearPicker",
	"YYYY-MM": "MonthPicker",
	"YYYY-MM-DD": "DatePicker",
	"YYYY-MM-DD HH:mm": "DatePicker",
	"YYYY-MM-DD HH:mm:ss": "DatePicker",
	"YYYY-MM-DD h:mm a": "DatePicker",
	"YYYY-MM-DD h:mm:ss a": "DatePicker",
	"YYYY-MM-DD - YYYY-MM-DD": "RangePicker",
	"YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm": "RangePicker",
	"YYYY-MM-DD HH:mm:ss - YYYY-MM-DD HH:mm:ss": "RangePicker",
	"HH:mm": "TimePicker",
	"HH:mm:ss": "TimePicker",
	"h:mm a": "TimePicker",
	"h:mm:ss a": "TimePicker",
	"HH:mm - HH:mm": "TimeRange",
	"HH:mm:ss - HH:mm:ss": "TimeRange",
};
//
function docustomOnChange(e, opt, ...rest) {
	if (dataType.isObject(e.customOnChange)) {
		const confun = e.customOnChange[e.fieldKey];
		dataType.isFunction(confun) && confun(e, e.imperative, ...rest);
	}
	typeof opt.onChange === "function" && opt.onChange(...rest);
}

const defaultFieldConfig = {
	selectionsType: 1,
	selectionsUrl: {},
	selectList: [],
	selectionsQuery: {},
	selectListFieldNames: {},
};
function selectControl(controlName) {
	return function(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
		const isAsync = opt.isAsync;
		delete opt.isAsync;
		const noAsync = opt.noAsync;
		delete opt.noAsync;
		let config = e.config || {};
		if (typeof e.config == "string") {
			try {
				config = JSON.parse(e.config);
			} catch (e) {}
		}
		config = { ...defaultFieldConfig, ...config };
		const { selectionsType, selectionsUrl, selectList, selectionsQuery, selectListFieldNames, ...others } = config;
		function getCurrentControl(selectList) {
			if (currentForm) {
				//保存已有的selectList
				currentForm.saveFieldOptions[e.fieldKey] = selectList;
				if (selectList.length) {
					selectList[0].selected = true;
				}
				// currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;
			}
			return getControl(controlName, {
				placeholder: e.placeholder,
				selectList,
				...others,
				...opt,
				onChange: (...rest) => {
					linkageAction(linkages, getGroupsFn, e);
					docustomOnChange(e, opt, ...rest);
				},
			});
		}
		let hasAsync = false;
		if (!isAsync && currentForm) {
			const currnetFormAllAsync = currentForm.getAsyncQueue();
			if (currnetFormAllAsync && currnetFormAllAsync.length) {
				hasAsync = true;
			}
		}
		//异步类型
		if (selectionsType == 2 && !hasAsync && !noAsync) {
			if (!isAsync && currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
				return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
			}
			return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
				...selectionsQuery,
				...requestQuery,
			})
				.then(re => {
					return getCurrentControl(treeDataAddKey(re.data, undefined, selectListFieldNames, undefined));
				})
				.catch(() => {
					if (currentForm) {
						currentForm.saveFieldOptions[e.fieldKey] = [];
					}
					return getCurrentControl([]);
				});
		}
		//自定义选项类型
		return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, undefined));
	};
}

const controls = {
	//Input
	1: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}

			return getControl("Input", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onBlur: (...rest) => {
					linkageAction(linkages, getGroupsFn, e);
				},
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions(e, rules = []) {
			const regType = e.regType; //regType 来自Zform/controls的regExps
			return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules, { validateTrigger: "onBlur" });
		},
	},
	//TextArea
	2: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}

			return getControl("TextArea", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions(e, rules = []) {
			const regType = e.regType; //regType 来自Zform/controls的regExps
			return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules, { validateTrigger: "onBlur" });
		},
	},
	//Select
	3: {
		getControl: selectControl("Select"),
		getOptions(e, rules = []) {
			const field = { ...e };
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			if (["multiple", "tags"].includes(config.mode)) {
				field.initialValue =
					typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
			}
			return getOptionsRules(field, rules);
		},
	},

	//InputNumber
	4: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}

			return getControl("InputNumber", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	//日期/时间控件
	5: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}

			let showTime = false;
			config.format = config.format ? config.format : "";

			let format = config.format;
			const setShowTime = format => {
				if (format.startsWith("YYYY") && (format.includes("HH") || format.includes("h"))) {
					showTime = {
						format: format.split(" ")[1],
						use12Hours: format.includes("h"),
					};
				}
			};
			if (config.format.includes(" - ")) {
				format = config.format.split(" - ")[0];
				// console.log(format)
				setShowTime(format);
			} else {
				setShowTime(config.format);
			}
			// let defaultOpt = {};
			let timeOpt = {
				showTime,
			};
			if (dateFormats[config.format] === "TimePicker") {
				timeOpt = { use12Hours: config.format.includes("h") };
			}

			return getControl(dateFormats[config.format], {
				format,
				placeholder: e.placeholder,
				...opt,
				...timeOpt,
				// ...defaultOpt,
				onChange: (...rest) => {
					// console.log(rest);
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions(es, rules = []) {
			const e = { ...es };
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			config.format = config.format ? config.format : "";
			const isTimeRange = ["RangePicker", "TimeRange"].includes(dateFormats[config.format]);
			const format = config.format.includes(" - ") ? config.format.split(" - ")[0] : config.format;
			if (isTimeRange) {
				if (e.required)
					rules.push({
						validator(rule, value, callback) {
							if (Array.isArray(value) && value.length === 2) {
								callback();
							} else {
								callback("未填完整");
							}
						},
					});
				e.initialValue =
					typeof e.initialValue === "string" && e.initialValue.includes("-")
						? e.initialValue.split("-")
						: e.initialValue;
				e.initialValue =
					Array.isArray(e.initialValue) && e.initialValue.length
						? e.initialValue.map(time => moment(time, format))
						: null;
			} else {
				if (typeof e.initialValue === "string") {
					try {
						e.initialValue = moment(e.initialValue, format);
					} catch (e) {
						throw Error("initialValue格式有误");
					}
				}
			}
			return getOptionsRules(e, rules);
		},
	},
	//Cascader级联
	6: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
			const isAsync = opt.isAsync;
			delete opt.isAsync;
			const noAsync = opt.noAsync;
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			const {
				selectionsType,
				selectionsUrl,
				selectList,
				selectionsQuery,
				selectListFieldNames,
				changeOnSelect,
				...others
			} = config;
			function getCurrentControl(selectList) {
				const newProps = {
					...others,
					changeOnSelect,
					...opt,
					selectionsUrl,
					selectionsQuery,
					placeholder: e.placeholder,
					selectList,
					optionsChange: options => {
						if (currentForm) {
							//保存已有的selectList
							currentForm.saveFieldOptions[e.fieldKey] = options;
							// currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;
						}
					},
					selectListFieldNames,
					onChange: (...rest) => {
						linkageAction(linkages, getGroupsFn, e);
						docustomOnChange(e, opt, ...rest);
					},
				};
				return <CascaderLoader {...newProps} />;
			}
			let hasAsync = false;
			if (!isAsync && currentForm) {
				const currnetFormAllAsync = currentForm.getAsyncQueue();
				if (currnetFormAllAsync && currnetFormAllAsync.length) {
					hasAsync = true;
				}
			}
			//异步类型
			if (selectionsType == 2 && !hasAsync && !noAsync) {
				if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
					return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
				}
				return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
					...selectionsQuery,
					...requestQuery,
				})
					.then(re => {
						return getCurrentControl(
							treeDataAddKey(
								re.data,
								undefined,
								selectListFieldNames,
								selectionsUrl.requireType !== "part", // false  即为分部加载
							),
						);
					})
					.catch(() => {
						if (currentForm) {
							currentForm.saveFieldOptions[e.fieldKey] = [];
						}
						return getCurrentControl([]);
					});
			}
			//自定义选项类型
			return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, true));
		},
		getOptions: getOptionsRules,
	},
	//TreeSelect树选择
	7: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
			const isAsync = opt.isAsync;
			delete opt.isAsync;
			const noAsync = opt.noAsync;
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			const {
				selectionsType,
				selectionsUrl,
				selectList,
				selectionsQuery,
				selectListFieldNames,
				...others
			} = config;
			function getCurrentControl(selectList) {
				const newProps = {
					...others,
					...opt,
					selectionsUrl,
					selectionsQuery,
					placeholder: e.placeholder,
					selectList,
					optionsChange: options => {
						if (currentForm) {
							//保存已有的selectList
							currentForm.saveFieldOptions[e.fieldKey] = options;
							currentForm.saveOptionsMapKey[e.fieldKey] = {
								label: "title",
								value: "value",
								children: "children",
							};
						}
					},
					selectListFieldNames,
					onChange: (...rest) => {
						linkageAction(linkages, getGroupsFn, e);
						docustomOnChange(e, opt, ...rest);
					},
				};
				return <TreeSelectLoader {...newProps} />;
			}
			let hasAsync = false;
			if (!isAsync && currentForm) {
				const currnetFormAllAsync = currentForm.getAsyncQueue();
				if (currnetFormAllAsync && currnetFormAllAsync.length) {
					hasAsync = true;
				}
			}
			//异步类型
			if (selectionsType == 2 && !hasAsync && !noAsync) {
				if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
					return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
				}
				return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
					...selectionsQuery,
					...requestQuery,
				})
					.then(re => {
						return getCurrentControl(
							treeDataAddKey(
								re.data,
								{ label: "title", value: "value", children: "children", key: "key" },
								selectListFieldNames,
								selectionsUrl.requireType !== "part", // false  即为分部加载
							),
						);
					})
					.catch(() => {
						if (currentForm) {
							currentForm.saveFieldOptions[e.fieldKey] = [];
						}
						return getCurrentControl([]);
					});
			}
			//自定义选项类型
			return getCurrentControl(
				treeDataAddKey(
					selectList,
					{ label: "title", value: "value", children: "children", key: "key" },
					selectListFieldNames,
				),
			);
		},
		getOptions: getOptionsRules,
	},
	//Checkbox.Group
	8: {
		getControl: selectControl("Checkbox.Group"),
		getOptions(e, rules = []) {
			const field = { ...e };
			field.initialValue =
				typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
			return getOptionsRules(field, rules);
		},
	},
	//Radio.Group
	9: {
		getControl: selectControl("Radio.Group"),
		getOptions: getOptionsRules,
	},
	//Switch
	10: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}

			return getControl("Switch", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
					linkageAction(linkages, getGroupsFn, e);
				},
			});
		},
		getOptions(e, rules = []) {
			e.initialValue = dataType.isString(e.initialValue) ? Number(e.initialValue) : e.initialValue;
			return getOptionsRules(e, rules, { valuePropName: "checked" });
		},
	},
	//Upload
	11: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			return (
				<div className="z-liveform-upload-wrapper">
					<ZeroUpload config={config} field={e} />
				</div>
			);
		},
		getOptions(e, rules = []) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			const newRules = [
				{
					validator(rule, value, callback) {
						if (Array.isArray(value)) {
							if (!value.length) {
								return callback("未上传任何文件");
							}
							if (config.minUploadLength && config.minUploadLength > value.length) {
								return callback(`最少上传${config.minUploadLength}个`);
							}
						}
						return callback();
					},
				},
			];

			return getOptionsRules(e, newRules.concat(rules));
		},
	},
	//ColorPicker
	12: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			return getControl("ColorPicker", {
				...config,
				...opt,
				onChange: (...rest) => {
					e.currentSaturability = rest[1] ? rest[1].hsv.s : 0;
					// console.log("color-change", rest[1]);
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions(e, rules = []) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			if (config.minSaturability > 0) {
				rules.push({
					validator(rule, value, callback) {
						const currentSaturability = e.currentSaturability;
						if (currentSaturability && config.minSaturability > currentSaturability) {
							return callback(e.errorMsg ? e.errorMsg : `饱和度不能小于${config.minSaturability * 100}%`);
						}
						return callback();
					},
				});
			}
			return getOptionsRules(e, rules);
		},
	},
	//地图选点
	13: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}

			return (
				<MapChooseAddress
					{...{
						placeholder: e.placeholder,
						...config,
						...opt,
						onChange: (...rest) => {
							linkageAction(linkages, getGroupsFn, e);
							docustomOnChange(e, opt, ...rest);
						},
					}}
				/>
			);
		},
		getOptions(e, rules = []) {
			rules.push({
				validator(rule, value, callback) {
					if (dataType.isObject(value)) {
						if (!/^.{10,}/.test(value.name)) {
							return callback("地址名称不能少于10个字符");
						}
					}
					return callback();
				},
			});
			return getOptionsRules(e, rules);
		},
	},
	//自定义占位
	14: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			if (dataType.isObject(e.customControlRender)) {
				const confun = e.customControlRender[e.fieldKey];
				if (dataType.isFunction(confun)) {
					return confun({ field: e, linkages, getGroupsFn, linkageAction });
				}
			}

			return <div className="z-form-control-placeholder">自定义区域</div>;
		},
		getOptions: getOptionsRules,
	},
	//电子签名
	15: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			if (dataType.isObject(e.customControlRender)) {
				const confun = e.customControlRender[e.fieldKey];
				if (dataType.isFunction(confun)) {
					return confun({ field: e, linkages, getGroupsFn, linkageAction });
				}
			}

			return <div className="z-form-control-placeholder">手动电子签名只支持小程序</div>;
		},
		getOptions: getOptionsRules,
	},
	//证件照
	16: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			return (
				<ZprosAndCons
					config={config}
					field={e}
					onChange={(...rest) => {
						linkageAction(linkages, getGroupsFn, e);
						docustomOnChange(e, opt, ...rest);
					}}
				></ZprosAndCons>
			);
		},
		getOptions(e, rules = []) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config = { ...defaultFieldConfig, ...config };
			const newRules = [
				{
					validator(rule, value, callback) {
						if (Array.isArray(value)) {
							if (!value[0] || !value[1]) {
								return callback("正反面图片都要上传");
							}
						}
						return callback();
					},
				},
			];

			return getOptionsRules(e, newRules.concat(rules));
		},
	},
	//文书配置
	20: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			delete opt.noAsync;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}

			return getControl("Input", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onBlur: (...rest) => {
					linkageAction(linkages, getGroupsFn, e);
				},
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
				disabled: true,
			});
		},
		getOptions(e, rules = []) {
			const regType = e.regType; //regType 来自Zform/controls的regExps
			return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules);
		},
	},
};
export default controls;
