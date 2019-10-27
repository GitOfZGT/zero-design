import React from "react";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import "./style.scss";
import { Input, Col } from "antd";
import { deepCopy } from "../zTool";
import { getControl, getOptions } from "../Zform/controls";
export class ZlabelInput extends ZpureComponent {
	static propTypes = {
		className: PropTypes.string,
		size: PropTypes.string,
		onChange: PropTypes.func,
		value: PropTypes.object,
		labelPlaceholder: PropTypes.string,
		valuePlaceholder: PropTypes.string,
		disabled: PropTypes.bool,
		labelSpan: PropTypes.number,
		valueSpan: PropTypes.number,
		sync: PropTypes.bool,
	};
	static defaultProps = {
		labelSpan: 10,
		valueSpan: 14,
		sync: false,
	};
	saveData = {
		label: "",
		value: "",
	};
	methods = {
		labelChange: (value, e) => {
			this.saveData.label = value;
			if (this.props.sync) {
				this.saveData.value = value;
			}
			typeof this.props.onChange == "function" && this.props.onChange(deepCopy(this.saveData), e);
		},
		valueChange: (value, e) => {
			this.saveData.value = value;
			if (this.props.sync) {
				this.saveData.label = value;
			}
			typeof this.props.onChange == "function" && this.props.onChange(deepCopy(this.saveData), e);
		},
	};
	render() {
		const {
			labelPlaceholder,
			valuePlaceholder,
			disabled,
			value,
			className,
			style,
			labelSpan,
			valueSpan,
			size,
			sync,
			onChange,
			...others
		} = this.props;
		const labelValue = value ? value : {};
		const _label = labelValue.label ? labelValue.label : "";
		const _value = labelValue.value ? labelValue.value : "";
		this.saveData = labelValue;
		return (
			<Input.Group compact className={`z-label-input ${className ? className : ""}`} style={style} size={size}>
				<Col span={labelSpan}>
					{getControl("Input", {
						...others,
						className: `z-label ${_label ? "hasvalue" : ""}`,
						value: _label,
						placeholder: labelPlaceholder,
						onChange: this.methods.labelChange,
						disabled,
					})}
				</Col>
				<Col span={valueSpan}>
					{getControl("Input", {
						...others,
						className: `z-value ${_value ? "hasvalue" : ""}`,
						value: _value,
						placeholder: valuePlaceholder,
						onChange: this.methods.valueChange,
						disabled,
					})}
				</Col>
			</Input.Group>
		);
	}
}

export default ZlabelInput;
