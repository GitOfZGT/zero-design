import React from "react";
import linkageAction from "./linkageAction";
import { getControl, getOptions, regExps } from "../Zform/controls";
import { dataType } from "zerod/components/zTool";
import ZeroUpload from "./ZeroUpload";

export const getOptionsRules = function(e, rules = []) {
	const reg = typeof e.regularExpression === "string" ? e.regularExpression.replace(/((^\/)|(\/$))/g, "") : "";
	return getOptions({
		required: e.required,
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
export const dateFormats = {
	"YYYY-wo": "WeekPicker",
	// YYYY: "MonthPicker",
	"YYYY-MM": "MonthPicker",
	"YYYY-MM-DD": "DatePicker",
	// "YYYY-MM-DD hh": "DatePicker",
	"YYYY-MM-DD HH:mm": "DatePicker",
	"YYYY-MM-DD HH:mm:ss": "DatePicker",
	"YYYY-MM-DD h:mm a": "DatePicker",
	"YYYY-MM-DD h:mm:ss a": "DatePicker",
	"HH:mm": "TimePicker",
	"HH:mm:ss": "TimePicker",
	"h:mm a": "TimePicker",
	"h:mm:ss a": "TimePicker",
};
function docustomOnChange(e, opt, ...rest) {
	if (dataType.isObject(e.customOnChange)) {
		const confun = e.customOnChange[e.fieldKey];
		dataType.isFunction(confun) && confun(e, e.imperative, ...rest);
	}
	typeof opt.onChange === "function" && opt.onChange(...rest);
}
const controls = {
	//Input
	1: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return getControl("Input", {
				placeholder: e.placeholder,
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
			const regType = e.regType;//regType 来自Zform/controls的regExps
			return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules);
		},
	},
	//TextArea
	2: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return getControl("TextArea", {
				placeholder: e.placeholder,
				...opt,
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	//Select
	3: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			const that = this;
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return getControl("Select", {
				placeholder: e.placeholder,
				selectList: config.selectList,
				...opt,
				onChange: (...rest) => {
					linkageAction(linkages, getGroupsFn, e);
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	//InputNumber
	4: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return getControl("InputNumber", {
				placeholder: e.placeholder,
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
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			let showTime = false;
			config.format = config.format ? config.format : "";
			if (config.format.startsWith("YYYY") && (config.format.includes("HH") || config.format.includes("h"))) {
				showTime = {
					format: config.format.split(" ")[1],
					use12Hours: config.format.includes("h"),
				};
			}
			let defaultOpt =
				dateFormats[config.format] === "TimePicker"
					? { use12Hours: config.format.includes("h") }
					: {
							showTime,
					  };
			return getControl(dateFormats[config.format], {
				format: config.format,
				placeholder: e.placeholder,
				...opt,
				...defaultOpt,
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	//Checkbox.Group
	8: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return getControl("Checkbox.Group", {
				placeholder: e.placeholder,
				selectList: config.selectList,
				...opt,
				onChange: (...rest) => {
					linkageAction(linkages, getGroupsFn, e);
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	//Radio.Group
	9: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			const that = this;
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return getControl("Radio.Group", {
				placeholder: e.placeholder,
				selectList: config.selectList,
				...opt,
				onChange: (...rest) => {
					linkageAction(linkages, getGroupsFn, e);
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	// //TimePicker
	// 10: {
	// 	getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
	// 		return getControl("TimePicker", {
	// 			format: e.format,
	// 			placeholder: e.placeholder,
	// 			...opt,
	// 			onChange: (...rest) => {
	// 				docustomOnChange(e,opt, ...rest);
	// 			},
	// 		});
	// 	},
	// 	getOptions: getOptionsRules,
	// },
	//Upload
	11: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return <ZeroUpload config={{ ...config, multiple: e.multiple }} />;
		},
		getOptions: getOptionsRules,
	},
};
export default controls;
