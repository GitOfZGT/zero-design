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
function diff_Prev_Next(prev, next) {
	if (!dataType.isObject(prev) || !dataType.isObject(next)) return true;
	const propsKeys = Object.keys(next);
	let should = false;
	for (let index = 0; index < propsKeys.length; index++) {
		const key = propsKeys[index];
		if (prev[key] !== next[key]) {
			should = true;
			break;
			// const isTouchChange = next["form"] && next["form"].isFieldTouched(next["item"].key);
			// const isValidating = next["form"] && next["form"].isFieldValidating(next["item"].key);
			// if (key !== "form" || isTouchChange || isValidating) {
			// 	should = true;
			// 	this.isTouchChange = isTouchChange;
			// 	break;
			// }
		}
	}
	return should;
}
class ColFormItem extends React.Component {
	static defaultProps = {
		item: {},
		controlSize:"default"
	};

	state = {
		loading: this.props.loading,
		item: this.props.item,
		show: dataType.isBoolean(this.props.item.show) ? this.props.item.show : true,
		focus: false,
	};
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.show === nextState.show && !nextState.show) {
			return false;
		}
		if (diff_Prev_Next(this.props, nextProps)) {
			return true;
		}
		if (diff_Prev_Next(this.state, nextState)) {
			if (this.state.item !== nextState.item) {
				this.saveItemString = itemTostring(nextState.item);
			}
			return true;
		}
		return false;
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.item !== prevProps.item) {
			this.setState({
				item: this.props.item,
				show: true,
				loading: this.props.loading,
			});
		}
	}
	getInlineControl = control => {
		if (React.isValidElement(control)) {
			let newControl = control;
			if (this.props.labelLayout === "inline") {
				newControl = React.cloneElement(control, {
					...control.props,
					placeholder: "",
					size: this.props.controlSize,
					onFocus: e => {
						this.setState({
							focus: true,
						});
						control.props.onFocus && control.props.onFocus(e);
					},
					onBlur: e => {
						this.setState({
							focus: false,
						});
						control.props.onBlur && control.props.onBlur(e);
					},
				});
			} else {
				newControl = React.cloneElement(control, {
					...control.props,
					size: this.props.controlSize,
				});
			}

			return newControl;
		} else {
			return control;
		}
	};
	getFormatProp = control => {
		if (React.isValidElement(control) && typeof this.props.getInsideItems === "function") {
			const items = this.props.getInsideItems();
			items.forEach(item => {
				if (item.key === this.state.item.key) {
					item.format = control.props.format;
				}
			});
		}
	};
	saveItemString = itemTostring(this.state.item);
	render() {
		const { getFieldDecorator } = this.props.form;
		const { item } = this.state;
		let control =
			typeof item.control === "function"
				? item.control(this.props.form, this.props.changeFormItems)
				: item.control;
		let controlDisabled = true;
		const span = const_itemSpan(control, item.span, item.defaultSpan);
		const isFormItem = typeof item.isFormItem === "boolean" ? item.isFormItem : true;
		let formItemClassName = item.itemClassName;
		if (!this.state.loading && isFormItem) {
			// if (this.props.labelLayout === "inline") {
			control = this.getInlineControl(control);
			// }
			control = getFieldDecorator(item.key, dataType.isFunction(item.options) ? item.options() : item.options)(
				control,
			);
			if (this.props.labelLayout === "inline") {
				const labelFocused = (control.props && control.props.disabled) || item.labelFocused;
				const hasvalue =
					control.props &&
					control.props.value !== undefined &&
					control.props.value !== "" &&
					control.props.value !== null;
				formItemClassName = `${hasvalue || labelFocused ? "has-value" : ""} ${this.state.focus ? "focus" : ""}`;
			}
			this.getFormatProp(control);
			controlDisabled = control.props && control.props.disabled;
		}
		const loader = <ZpageLoading showLoading={this.state.loading} size="small" />;
		return (
			<Col
				{...span}
				className={item.className}
				data-item={this.saveItemString}
				style={{ display: this.state.show ? "" : "none" }}
			>
				{isFormItem ? (
					<Form.Item
						label={!this.state.loading ? item.label : this.props.labelLayout != "inline" ? "加载中" : ""}
						className={`z-form-item ${formItemClassName} ${controlDisabled ? "has-disabled" : ""}`}
					>
						{loader}
						{this.state.loading ? <Input size={this.props.controlSize} placeholder="加载中..." disabled /> : control}
					</Form.Item>
				) : (
					<div className={this.props.labelLayout === "inline" ? "z-margin-bottom-10" : ""}>
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
	methods = {
		//手动显示loading
		showLoading: show => {
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
		updateState: (newState = {}, callback) => {
			let newItem = newState.item;
			if (dataType.isObject(newItem)) {
				newItem = { ...this.state.item, ...newItem };
			} else if (newItem == "reset") {
				newItem = this.props.item;
			} else {
				newItem = this.state.item;
			}
			this.setState({ ...this.state, ...newState, item: newItem }, callback);
		},
	};
}

export default ColFormItem;
