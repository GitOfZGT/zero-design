/*
 * @Author: zgt
 * @Date: 2019-04-08 10:53:46
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-15 14:32:18
 * @Description: file content
 */
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
	Mentions,
	Rate,
	AutoComplete,
	Cascader,
	Switch,
} from "antd";
import { dataType, deepCopy } from "../zTool";
import TreeInput from "../ZtreeInput";
const { RangePicker, MonthPicker, WeekPicker } = DatePicker;
import ColorPicker from "../ZcolorPicker";
import TimeRange from "../ZtimeRange";
import YearPicker from "../ZyearPicker";

import debounce from "lodash/debounce";

export function debounceInput(InputControl, valueType = "", timer = 70) {
	return class Mydebounce extends React.PureComponent {
		state = {
			value: this.props.value,
		};
		componentDidUpdate(prevProps) {
			if (this.props.value !== prevProps.value && this.props.value !== this.state.value) {
				this.setState({
					value: this.props.value,
				});
			}
		}
		render() {
			const { value, onChange, defaultValue, children, ...others } = this.props;
			return (
				<InputControl
					{...others}
					value={
						this.state.value !== null && this.state.value !== undefined ? this.state.value : defaultValue
					}
					onChange={(e, ...rest) => {
						let valueTypeNames = [];
						if (valueType) {
							valueTypeNames = valueType.split(".");
						}
						let value = e;
						if (valueTypeNames.length) {
							while (valueTypeNames.length) {
								value = value[valueTypeNames.shift()];
							}
						}
						this.setState({
							value,
						});
						if (valueType) {
							this.propOnChange(value, ...rest);
						} else {
							this.propOnChange(value, e, ...rest);
						}
					}}
				>
					{children}
				</InputControl>
			);
		}
		propOnChange = debounce((value, ...rest) => {
			this.props.onChange && this.props.onChange(value, ...rest);
		}, timer);
	};
}

export const getOptions = function(e) {
	const opt = dataType.isObject(e) ? e : {};
	const required = opt.required;
	const requiredMsg = opt.requiredMsg;
	delete opt.required;
	delete opt.requiredMsg;
	return {
		...opt,
		rules: [
			{
				required: dataType.isBoolean(required) ? required : required == 1,
				message: requiredMsg || "必填。",
			},
		].concat(Array.isArray(opt.rules) ? opt.rules : []),
	};
};

const controls = {
	Input: debounceInput(Input, "target.value"),
	"Input.Group": Input.Group,
	TextArea: debounceInput(Input.TextArea, "target.value"),
	Select: debounceInput(Select),
	Checkbox,
	InputNumber: debounceInput(InputNumber),
	DatePicker,
	Radio,
	"Checkbox.Group": debounceInput(Checkbox.Group),
	"Radio.Group": debounceInput(Radio.Group),
	TimePicker,
	Upload,
	TreeSelect,
	Mentions: debounceInput(Mentions),
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
	Switch,
};

function recursionOption(selectList, Option, OptGroup, optLabelRender, layout) {
	return (
		Array.isArray(selectList) &&
		selectList.map((item, index) => {
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
							recursionOption(item.children, Option, OptGroup, optLabelRender, layout)}
					</OptGroup>
				);
			} else {
				const content = (
					<Option value={value} key={key} disabled={disabled}>
						{typeof optLabelRender === "function" ? optLabelRender(item, index) : label}
					</Option>
				);
				return layout === "vertical" ? <p key={key}>{content}</p> : content;
			}
		})
	);
}

function getSelects(Control, Option, OptGroup, opt) {
	const selectList = opt.selectList;
	const optLabelRender = opt.optLabelRender;
	const layout = opt.layout;
	delete opt.selectList;
	delete opt.optLabelRender;
	delete opt.layout;
	return <Control {...opt}>{recursionOption(selectList, Option, OptGroup, optLabelRender, layout)}</Control>;
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
