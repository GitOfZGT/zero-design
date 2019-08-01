import React from "react";
import {
	Checkbox,
	Input,
	Select,
	InputNumber,
	DatePicker,
	Radio,
	TimePicker,
	Upload,
	TreeSelect,
	Mention,
	Rate,
	AutoComplete,
	Cascader,
} from "antd";
import { dataType, deepCopy } from "../zTool";
import TreeInput from "../ZtreeInput";
const { RangePicker, MonthPicker, WeekPicker } = DatePicker;
import ColorPicker from "../ZcolorPicker";
import TimeRange from "../ZtimeRange";
import YearPicker from "../ZyearPicker";

export const getOptions = function(e) {
	return {
		...(dataType.isObject(e) ? e : {}),
		rules: [
			{
				required: dataType.isBoolean(e.required) ? e.required == 1 : e.required,
				message: e.requiredMsg ? e.requiredMsg : "必填。",
			},
			...(Array.isArray(e.rules) ? e.rules : []),
		],
		initialValue: e.initialValue,
	};
};
const controls = {
	Input,
	"Input.Group": Input.Group,
	TextArea: Input.TextArea,
	Select,
	Checkbox,
	InputNumber,
	DatePicker,
	Radio,
	"Checkbox.Group": Checkbox.Group,
	"Radio.Group": Radio.Group,
	TimePicker,
	Upload,
	TreeSelect,
	Mention,
	RangePicker,
	MonthPicker,
	WeekPicker,
	Rate,
	AutoComplete,
	TreeInput,
	Cascader,
	ColorPicker,
	TimeRange,
	YearPicker,
};

function recursionOption(selectList, Option, OptGroup, optLabelRender) {
	return (
		Array.isArray(selectList) &&
		selectList.map(item => {
			let label,
				value,
				key,
				disabled = false;
			if (dataType.isObject(item)) {
				label = item.label;
				value = key = item.value;
				disabled = item.disabled || disabled;
			} else {
				label = value = key = item;
			}
			if (item.group && OptGroup) {
				return (
					<OptGroup label={label} key={label}>
						{Array.isArray(item.children) &&
							recursionOption(item.children, Option, OptGroup, optLabelRender)}
					</OptGroup>
				);
			} else {
				return (
					<Option value={value} key={key} disabled={disabled}>
						{typeof optLabelRender === "function" ? optLabelRender(item) : label}
					</Option>
				);
			}
		})
	);
}

function getSelects(Control, Option, OptGroup, opt) {
	const selectList = opt.selectList;
	const optLabelRender = opt.optLabelRender;
	delete opt.selectList;
	delete opt.optLabelRender;
	return <Control {...opt}>{recursionOption(selectList, Option, OptGroup, optLabelRender)}</Control>;
}

export function getControl(name, opt = {}) {
	// opt=deepCopy(opt);
	let Control = controls[name];
	opt.disabled = Boolean(opt.disabled);
	switch (name) {
		case "Select":
			return getSelects(Control, Select.Option, Select.OptGroup, opt);
		case "Checkbox.Group":
			return getSelects(Control, Checkbox, null, opt);
		case "Radio.Group":
			return getSelects(Control, Radio, null, opt);
		default:
			return <Control {...opt} />;
	}
}
export const regExps = {
	// 验证身份证
	1: {
		name: "验证身份证号",
		pattern: /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/,
		message: "身份证格式有误",
	},
	// 验证电话号码
	2: {
		name: "验证电话号码",
		pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
		message: "手机号格式：13、14、15、17、18、19开头的11位数字",
	},
	// 验证邮箱
	3: {
		name: "验证邮箱",
		pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/,
		message: "邮箱格式有误",
	},
};

export default getControl;
