import React from "react";
import { Form, Modal, Input, Button, Row, Col } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout, const_initItems, const_execAsync, const_changeFormItems } from "../constant";
// import ZpageLoading from "../ZpageLoading";
// import { dataType, arrayFilterBy } from "../zTool";
import ColFormItem from "./ColFormItem";
import { dataType } from "../zTool";
export const Zform = Form.create()(
	class extends React.PureComponent {
		static propTypes = {
			className: PropTypes.string,
			labelLayout: PropTypes.string, //'horizontal'|'vertical' | 	inline
			items: PropTypes.arrayOf(PropTypes.object),
			getFormInstance: PropTypes.func,
			getInbuiltTool: PropTypes.func,
			onSubmit: PropTypes.func,
			formDefaultValues: PropTypes.object,
			submitBtnName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
			submitMsg: PropTypes.any,
			defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
			submitBtnRender: PropTypes.func,
			afterItemsRendered: PropTypes.func, // 表单控件渲染完的回调
		};
		static defaultProps = {
			items: [{ lable: "字段名", key: "name", options: {}, render: (form, panel) => <Input /> }],
			submitMsg: "点击确定按钮提交数据",
			defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
			submitBtnName: "保存",
			labelLayout: "vertical",
		};
		state = {
			items: [],
		};
		allAsync = [];
		methods = {
			onSubmit: (e) => {
				e.preventDefault();
				this.props.form.validateFields((err, values) => {
					if (err) return;
					if (dataType.isObject(values)) {
						Object.keys(values).forEach((key) => {
							if (dataType.isString(values[key])) {
								values[key] = values[key].trim();
							}
						});
					}
					if (this.props.submitMsg) {
						Modal.confirm({
							title: "确定好提交了吗?",
							content: this.props.submitMsg,
							onOk: (e) => {
								return this.props.onSubmit ? this.props.onSubmit(values) : Promise.resolve();
							},
						});
					} else {
						this.props.onSubmit && this.props.onSubmit(values);
					}
				});
			},
			changeFormItems: (newItems, part = false) => {
				const_changeFormItems.call(this, newItems, part);
			},
		};
		setFieldValue() {
			if (this.props.formDefaultValues && this.state.items.length) {
				const newValues = {};
				this.filedKeys.forEach((key) => {
					const value = this.props.formDefaultValues[key];
					if (value !== undefined) newValues[key] = value;
				});
				this.props.form.setFieldsValue(newValues);
			}
		}
		execAsync(newItems) {
			const_initItems.call(
				this,
				Array.isArray(newItems) ? newItems : this.props.items,
				this.props.form,
				this.methods.changeFormItems,
				() => {
					const_execAsync.call(this, this.props.afterItemsRendered);
				},
			);
		}
		componentDidMount() {
			this.execAsync();
			this.props.getFormInstance && this.props.getFormInstance(this.props.form, this.methods);

			this.props.getInbuiltTool &&
				this.props.getInbuiltTool({
					form: this.props.form,
					submit: this.methods.onSubmit,
					...this.methods,
				});
		}
		componentDidUpdate(prevProps, prevState) {
			if (this.props.formDefaultValues !== prevProps.formDefaultValues) {
				this.setFieldValue();
			}
			if (this.props.items !== prevProps.items && !this.allAsync.length) {
				this.execAsync();
			}
		}
		componentWillUnmount() {
			this.unmounted = true;
		}
		getFormItems() {
			// const { getFieldDecorator } = this.props.form;
			const formItems = this.state.items.map((item, i) => {
				return (
					<CSSTransition
						key={item.key + "_" + i}
						timeout={animateTimout.flipInTime}
						classNames="fadeIn-to-down"
					>
						<ColFormItem
							loading={item.loading}
							form={this.props.form}
							changeFormItems={this.methods.changeFormItems}
							item={item}
							ref={item.ref}
							labelLayout={this.props.labelLayout}
						/>
					</CSSTransition>
				);
			});
			return formItems;
		}
		render() {
			const { submitBtnName, onSubmit, className, style, submitBtnRender, labelLayout } = this.props;
			return (
				<Form
					onSubmit={this.methods.onSubmit}
					className={`${cssClass["z-form"]} ${className ? className : ""}`}
					style={style}
				>
					<Row type="flex" className={`${cssClass["z-form-row"]} ${"z-form-label-" + labelLayout}`}>
						<TransitionGroup component={null} enter={true} exit={true} appear={true}>
							{this.getFormItems()}
						</TransitionGroup>
						{typeof submitBtnRender === "function" ? (
							submitBtnRender(this.methods.onSubmit, this.props)
						) : submitBtnName ? (
							<Col span={24} className="z-text-center">
								<Button type="primary" htmlType="submit">
									{typeof submitBtnName === "function" ? submitBtnName() : submitBtnName}
								</Button>
							</Col>
						) : null}
					</Row>
				</Form>
			);
		}
	},
);

export default Zform;
