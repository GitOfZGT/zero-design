import React from "react";
import { Form, Modal, Input, Button, Row, Col } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout } from "../constant";
export const Zform = Form.create()(
	class extends React.Component {
		static propTypes = {
			items: PropTypes.arrayOf(PropTypes.object),
			getFormInstance: PropTypes.func,
			getInbuiltTool: PropTypes.func,
			onSubmit: PropTypes.func,
			formDefaultValues: PropTypes.object,
			submitBtnName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
			submitMsg: PropTypes.any,
			defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
			submitBtnRender: PropTypes.func,
		};
		static defaultProps = {
			items: [{ lable: "字段名", key: "name", options: {}, render: (form, panel) => <Input /> }],
			submitMsg: "点击确定按钮提交数据",
			defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
			submitBtnName: "保存",
		};
		methods = {
			onSubmit: (e) => {
				e.preventDefault();
				this.props.form.validateFields((err, values) => {
					if (err) return;
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
		};
		getFormItems() {
			const { getFieldDecorator } = this.props.form;
			return this.props.items.map((item, i) => {
				const control = item.render(this.props.form, this);
				let span =
					typeof this.props.defaultSpan === "number"
						? { md: this.props.defaultSpan }
						: this.props.defaultSpan;
				span = item.span
					? typeof item.span === "number"
						? { md: item.span }
						: item.span
					: control.props.prefixCls == "ant-input" && control.type.TextArea == undefined
						? { md: 24 }
						: span;
				const isFormItem = typeof item.isFormItem === "boolean" ? item.isFormItem : true;
				return (
					<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="fadeIn-to-down">
						<Col {...span} className={item.className}>
							{isFormItem ? (
								<Form.Item label={item.label}>
									{getFieldDecorator(item.key, item.options)(control)}
								</Form.Item>
							) : (
								control
							)}
						</Col>
					</CSSTransition>
				);
			});
		}
		setFormValues() {
			this.props.formDefaultValues && this.props.form.setFieldsValue(this.props.formDefaultValues);
		}
		componentDidMount() {
			this.setFormValues();
			this.props.getFormInstance && this.props.getFormInstance(this.props.form);
			this.props.getInbuiltTool &&
				this.props.getInbuiltTool({
					form: this.props.form,
					submit: this.methods.onSubmit,
				});
		}
		componentDidUpdate(prevProps) {
			if (this.props.formDefaultValues !== prevProps.formDefaultValues) {
				this.setFormValues();
			}
		}
		render() {
			const { submitBtnName, onSubmit, className, style, submitBtnRender } = this.props;
			return (
				<Form
					onSubmit={this.methods.onSubmit}
					className={`${cssClass["z-form"]} ${className ? className : ""}`}
					style={style}
				>
					<Row type="flex" className={cssClass["z-form-row"]}>
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
