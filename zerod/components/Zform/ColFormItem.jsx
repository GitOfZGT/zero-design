import React from "react";
import { Col, Form, Input } from "antd";
import ZpageLoading from "../ZpageLoading";
import { const_itemSpan } from "../constant";
import { dataType } from "../zTool";
function itemTostring(item) {
	if (dataType.isObject(item))
		return JSON.stringify({ ...item, control: null, defaultSpan: null, render: null, ref: null, options: null });
	else return "";
}
class ColFormItem extends React.PureComponent {
	static defaultProps = {
		item: {},
		// colContentRender:()=>{}
	};
	methods = {
		//手动显示loading
		showLoading: (show) => {
			this.setState({
				loading: show,
			});
		},
		//获取当前item对象
		getStateItem: () => this.state.item,
		//手动改变item对象属性
		changeItem: (newItem, callback) => {
			if (dataType.isObject(newItem)) {
				this.setState(
					{
						item: { ...this.state.item, ...newItem },
					},
					callback,
				);
			} else if (newItem == "reset") {
				this.setState(
					{
						item: this.props.item,
					},
					callback,
				);
			}
		},
		//手动控制控件是否显示
		showItem: (show, callback) => {
			this.setState(
				{
					show,
				},
				callback,
			);
		},
	};
	state = {
		loading: this.props.loading,
		item: this.props.item,
		show: true,
		focus: false,
	};
	componentDidUpdate(prevProps, prevState) {
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
					control.props.onBlur && control.props.onBlur(e);
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
			const labelFocused = (control.props && control.props.disabled) || item.labelFocused;
			if (this.props.labelLayout == "inline") {
				control = this.getInlineControl(control);
				formItemClassName = `${
					(control.props &&
						control.props.value !== undefined &&
						control.props.value !== "" &&
						control.props.value !== null) ||
					labelFocused
						? "has-value"
						: ""
				} ${this.state.focus ? "focus" : ""}`;
			}
		}
		const loader = <ZpageLoading showLoading={this.state.loading} size="small" />;
		return (
			<Col {...span} className={item.className} data-item={itemTostring(item)}>
				{isFormItem ? (
					<Form.Item
						label={!this.state.loading ? item.label : this.props.labelLayout != "inline" ? "加载中" : ""}
						className={`z-form-item ${formItemClassName} ${
							control.props && control.props.disabled ? "has-disabled" : ""
						}`}
					>
						{loader}
						{this.state.loading ? <Input placeholder="加载中..." disabled /> : control}
					</Form.Item>
				) : (
					<div>
						{loader}
						{control}
					</div>
				)}
				{dataType.isFunction(this.props.colContentRender)
					? this.props.colContentRender(item, this.props.form)
					: null}
			</Col>
		);
	}
}

export default ColFormItem;
