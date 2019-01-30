import React from "react";
import { Col, Form, Input } from "antd";
import ZpageLoading from "../ZpageLoading";
import { const_itemSpan } from "../constant";
import { dataType } from "../zTool";
class ColFormItem extends React.PureComponent {
	static defaultProps = {
		item: {},
	};
	methods = {
		showLoading: (show) => {
			this.setState({
				loading: show,
			});
		},
		getStateItem: () => this.state.item,
		changeItem: (newItem = {}) => {
			this.setState({
				item: { ...this.state.item, ...newItem },
			});
		},
		showItem: (show) => {
			this.setState({
				show,
			});
		},
	};
	state = {
		loading: this.props.loading,
		item: this.props.item,
		show: true,
		focus: false,
	};
	componentDidUpdate(prevProps) {
		if (this.props.item !== prevProps.item) {
			this.setState({
				item: this.props.item,
				show: true,
				loading: this.props.loading,
			});
		}
	}
	getInlineControl = (control) => {
		if (React.isValidElement(control)) {
			const newControl = React.cloneElement(control, {
				placeholder: "",
				onFocus: (e) => {
					this.setState({
						focus: true,
					});
					control.props.onFocus && control.props.onFocus(e);
				},
				onBlur: (e) => {
					this.setState({
						focus: false,
					});
					control.props.onFocus && control.props.onFocus(e);
				},
			});
			return newControl;
		} else {
			return control;
		}
	};
	render() {
		if (!this.state.show) return null;
		const { getFieldDecorator } = this.props.form;
		const item = this.state.item;
		let control =
			typeof item.control === "function"
				? item.control(this.props.form, this.props.changeFormItems)
				: item.control;
		const span = const_itemSpan(control, item.span, item.defaultSpan);
		const isFormItem = typeof item.isFormItem === "boolean" ? item.isFormItem : true;
		let formItemClassName = item.itemClassName;
		if (!this.state.loading) {
			control = getFieldDecorator(item.key, dataType.isFunction(item.options) ? item.options() : item.options)(
				control,
			);
			if (this.props.labelLayout == "inline") {
				control = this.getInlineControl(control);
				formItemClassName = `${
					(control.props &&
						control.props.value !== undefined &&
						control.props.value !== "" &&
						control.props.value !== null) ||
					item.labelFocused
						? "has-value"
						: ""
				} ${this.state.focus ? "focus" : ""}`;
			}
		}

		return (
			<Col {...span} className={item.className}>
				{isFormItem ? (
					<Form.Item
						label={!this.state.loading ? item.label : ""}
						className={`z-form-item ${formItemClassName}`}
					>
						<ZpageLoading showLoading={this.state.loading} size="small" />
						{this.state.loading ? <Input placeholder="加载中" disabled /> : control}
					</Form.Item>
				) : (
					<div>
						<ZpageLoading showLoading={this.state.loading} size="small" />
						{control}
					</div>
				)}
			</Col>
		);
	}
}

export default ColFormItem;
