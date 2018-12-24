import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { Input,Col } from "antd";
import { deepCopy } from "../zTool";
export class ZlabelInput extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		onChange: PropTypes.func,
		value: PropTypes.object,
		labelPlaceholder: PropTypes.string,
		valuePlaceholder: PropTypes.string,
		disabled: PropTypes.disabled,
		labelSpan:PropTypes.number,
		valueSpan:PropTypes.number,
	};
	static defaultProps = {
		labelSpan:10,
		valueSpan:14
	};
	saveData = {
		label: "",
		value: "",
	};
	methods = {
		labelChange: (e) => {
			this.saveData.label = e.target.value;
			typeof this.props.onChange == "function" && this.props.onChange(deepCopy(this.saveData), e);
		},
		valueChange: (e) => {
			this.saveData.value = e.target.value;
			typeof this.props.onChange == "function" && this.props.onChange(deepCopy(this.saveData), e);
		},
	};
	render() {
		const { labelPlaceholder, valuePlaceholder, value ,className,style,labelSpan,valueSpan} = this.props;
		const labelValue = value ? value : {};
		const _label = labelValue.label ? labelValue.label : "";
		const _value = labelValue.value ? labelValue.value : "";
		this.saveData = labelValue;
		return (
			<Input.Group compact className={`${cssClass['z-label-input']} ${className?className:""}`} style={style}>
				<Col span={labelSpan}>
					<Input
						className="z-label"
						value={_label}
						placeholder={labelPlaceholder}
						onChange={this.methods.labelChange}
					/>
				</Col>
				<Col span={valueSpan}>
					<Input
						className="z-value"
						value={_value}
						placeholder={valuePlaceholder}
						onChange={this.methods.valueChange}
					/>
				</Col>
			</Input.Group>
		);
	}
}

export default ZlabelInput;
