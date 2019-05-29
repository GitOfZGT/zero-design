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
			colContentRender: PropTypes.func, //
			otherForms: PropTypes.func, // 取得其他表单对象
			confirm: PropTypes.object, // antd 的 modal 参数
			initAnimation: PropTypes.bool,
		};
		static defaultProps = {
			confirm: {},
			items: [{ lable: "字段名", key: "name", options: {}, render: (form, panel) => <Input /> }],
			submitMsg: "点击确定按钮提交数据",
			defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
			submitBtnName: "保存",
			labelLayout: "vertical",
			initAnimation: true,
		};
		state = {
			items: [],
		};
		allAsync = [];
		methods = {
			onSubmit: e => {
				e.preventDefault();
				const forms = dataType.isFunction(this.props.otherForms)
					? this.props.otherForms(this.form).concat([this.form])
					: [this.form];
				let formsValues = [];
				const valideds = forms.map(form => {
					let valided = true;
					form.validateFields(
						form.zformItems
							.filter(item => item.ref.current.state.show)
							.map(item => {
								return item.key;
							}),
						(err, values) => {
							// console.log('--form',this.state.items);
							if (err) {
								valided = false;
								return;
							}
							const newValues = {};
							if (dataType.isObject(values)) {
								Object.keys(values).forEach(key => {
									if (dataType.isString(values[key])) {
										//字符串类型的值去掉首尾空格
										newValues[key] = values[key].trim();
									} else {
										newValues[key] = values[key];
									}
								});
							}
							formsValues.push(values);
						},
					);
					return valided;
				});
				//有一个验证失败，就阻止
				if (
					valideds.some(valid => {
						return !valid;
					})
				) {
					return;
				}
				const { onOk, content, show, ...others } = this.props.confirm;
				//submitMsg本可以弃掉，这里为了兼容，confirm的参数可以代替submitMsg
				if ((dataType.isBoolean(show) && show) || (this.props.submitMsg && !dataType.isBoolean(show))) {
					Modal.confirm({
						title: "确定好提交了吗?",
						content: content ? content : this.props.submitMsg,
						onOk: e => {
							return this.props.onSubmit
								? this.props.onSubmit(formsValues.length == 1 ? formsValues[0] : formsValues)
								: Promise.resolve();
						},
						...others,
					});
				} else {
					this.props.onSubmit && this.props.onSubmit(formsValues.length == 1 ? formsValues[0] : formsValues);
				}
			},
			changeFormItems: (newItems, part = false, callback) => {
				const_changeFormItems.call(this, newItems, part, callback);
			},
			getInsideItems: () => {
				return this.state.items;
			},
		};
		setFieldsValue(values) {
			values = values ? values : this.props.formDefaultValues;
			if (values && this.state.items.length) {
				const newValues = {};
				this.filedKeys.forEach(key => {
					const value = values[key];
					if (value !== undefined) newValues[key] = value;
				});
				// console.log("--zform", newValues);
				if (Object.keys(newValues).length) this.form.setFieldsValue(newValues);
			}
		}
		execAsync(newItems) {
			const_initItems.call(
				this,
				Array.isArray(newItems) ? newItems : this.props.items,
				this.form,
				this.methods.changeFormItems,
				() => {
					const_execAsync.call(this, this.props.afterItemsRendered);
				},
			);
		}
		form = { ...this.props.form, zformItems: this.state.items };
		componentDidMount() {
			this.execAsync();
			this.form = { ...this.props.form, zformItems: this.state.items };
			this.props.getFormInstance && this.props.getFormInstance(this.form, this.methods);
			this.props.getInbuiltTool &&
				this.props.getInbuiltTool({
					form: this.form,
					submit: this.methods.onSubmit,
					...this.methods,
				});
		}
		componentDidUpdate(prevProps, prevState) {
			if (this.props.formDefaultValues !== prevProps.formDefaultValues) {
				this.setFieldsValue();
			}
			if (this.props.items !== prevProps.items && !this.allAsync.length) {
				this.execAsync();
			}
			if (this.props.form !== prevProps.form || this.state.items !== prevState.items) {
				this.form = { ...this.props.form, zformItems: this.state.items };
				this.props.getFormInstance && this.props.getFormInstance(this.form, this.methods);
			}
		}
		componentWillUnmount() {
			//组件卸载标识，用在异步回调阻止任何setState操作
			this.unmounted = true;
		}
		getFormItems = () => {
			const formItems = this.state.items.map((item, i) => {
				const colItem = (
					<ColFormItem
						key={item.key}
						colContentRender={this.props.colContentRender}
						loading={item.loading}
						form={this.form}
						changeFormItems={this.methods.changeFormItems}
						item={item}
						ref={item.ref}
						labelLayout={this.props.labelLayout}
					/>
				);
				return this.props.initAnimation ? (
					<CSSTransition key={item.key} timeout={animateTimout.flipInTime} classNames="fadeIn-to-down">
						{colItem}
					</CSSTransition>
				) : (
					colItem
				);
			});
			return formItems;
		};
		render() {
			const {
				submitBtnName,
				onSubmit,
				className,
				style,
				submitBtnRender,
				labelLayout,
				initAnimation,
			} = this.props;
			const items = this.getFormItems();
			return (
				<Form
					onSubmit={this.methods.onSubmit}
					className={`${cssClass["z-form"]} ${className ? className : ""}`}
					style={style}
				>
					<Row type="flex" className={`z-form-row ${"z-form-label-" + labelLayout}`}>
						{initAnimation ? (
							<TransitionGroup component={null} enter={true} exit={true} appear={true}>
								{items}
							</TransitionGroup>
						) : (
							items
						)}

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
