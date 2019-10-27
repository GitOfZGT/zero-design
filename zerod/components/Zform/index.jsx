import React from "react";
import { Form, Modal, Input, Button, Row, Col, message } from "antd";
import PropTypes from "prop-types";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout, const_initItems, const_execAsync, const_changeFormItems } from "../constant";
// import ZpageLoading from "../ZpageLoading";
// import { dataType, arrayFilterBy } from "../zTool";
import ColFormItem from "./ColFormItem";
import { dataType, turnLabelOrValue } from "../zTool";
import moment from "moment";
import classNames from "classnames";
import "./style.scss";
export const Zform = Form.create()(
	class extends React.PureComponent {
		static propTypes = {
			className: PropTypes.string,
			labelLayout: PropTypes.string, //'horizontal'|'vertical' | 	inline
			items: PropTypes.arrayOf(PropTypes.object),
			getFormInstance: PropTypes.func,
			onSubmit: PropTypes.func,
			formDefaultValues: PropTypes.object, //values 替代 formDefaultValues；相当于 formDefaultValues 改名为 values
			values: PropTypes.object,
			submitBtnName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
			submitMsg: PropTypes.any,
			defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
			submitBtnRender: PropTypes.func,
			afterItemsRendered: PropTypes.func, // 表单控件渲染完的回调
			colContentRender: PropTypes.func, //
			otherForms: PropTypes.func, // 取得其他表单对象
			confirm: PropTypes.object, // antd 的 modal 参数
			// initAnimation: PropTypes.bool,
			momentFormat: PropTypes.bool,
			booleanToNumber: PropTypes.bool,
		};
		static defaultProps = {
			confirm: {},
			items: [
				{
					lable: "字段名",
					key: "name",
					options: {},
					render: (form, panel) => <Input />,
				},
			],
			submitMsg: "点击确定按钮提交数据",
			defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
			submitBtnName: "保存",
			labelLayout: "vertical",
			// initAnimation: true,
			momentFormat: false,
			booleanToNumber:true,
		};
		state = {
			items: [],
			currentForm: {
				...this.props.form,
				zformItems: [],
				saveFieldOptions: {},
				saveOptionsMapKey: {},
				getAsyncQueue: () => this.allAsync,
			},
		};
		allAsync = [];
		settingValues = {};
		methods = {
			getFieldsValue: (isValid, query) => {
				const forms = dataType.isFunction(this.props.otherForms)
					? this.props.otherForms(this.form).concat([this.form])
					: [this.form];
				let formsValues = [];
				const valideds = forms.map(form => {
					//保存的对应key的选项数据
					const saveFieldOptions = form.saveFieldOptions;
					const saveOptionsMapKey = form.saveOptionsMapKey;
					// console.log("--form--",form)
					let valided = true;
					const fieldNames = form.zformItems
						.filter(item => item.ref.current.state.show)
						.map(item => {
							return item.key;
						});
					let startValues = {};
					if (isValid) {
						form.validateFields(fieldNames, (err, values) => {
							// console.log('--form',this.state.items);
							if (err) {
								valided = false;
								return;
							}
							startValues = values;
						});
					} else {
						startValues = form.getFieldsValue(fieldNames);
					}
					const newValues = this.methods.getOneFormValue(
						startValues,
						saveFieldOptions,
						saveOptionsMapKey,
						form.zformItems,
					);
					formsValues.push({
						...newValues,
						...(dataType.isObject(query) ? query : {}),
					});
					return valided;
				});
				//有一个验证失败，就阻止
				if (
					valideds.some(valid => {
						return !valid;
					})
				) {
					// message.error("表单未通过验证");
					return false;
				}
				return formsValues.length > 1 ? formsValues : formsValues[0];
			},

			setFieldsValue: vals => {
				const values = vals ? vals : this.props.values || this.props.formDefaultValues;
				const forms = dataType.isFunction(this.props.otherForms)
					? this.props.otherForms(this.form).concat([this.form])
					: [this.form];
				this.saveSettingValues = values;
				// console.log(this.saveSettingValues, forms);
				forms.forEach(form => {
					if (values && form.zformItems.length) {
						const newValues = {};
						form.zformItems.forEach(field => {
							const key = field.key;
							const value = values[key];
							if (value !== undefined) {
								if (this.props.momentFormat) {
									const currentItem = form.zformItems.find(item => item.key === key);
									if (currentItem && currentItem.format) {
										const toMoment = (val, format) => {
											return moment(val, format);
										};
										if (dataType.isArray(value)) {
											newValues[key] = value.map(val => {
												return val ? toMoment(val, currentItem.format) : undefined;
											});
										} else {
											newValues[key] = value ? toMoment(value, currentItem.format) : undefined;
										}
									} else {
										newValues[key] = value;
									}
								} else {
									newValues[key] = value;
								}
							}
						});
						// console.log("--zform", newValues);
						if (Object.keys(newValues).length) {
							form.setFieldsValue(newValues);
						}
					}
				});
			},
			getOneFormValue: (values, saveFieldOptions, saveOptionsMapKey, items) => {
				const newValues = {};
				if (dataType.isObject(values)) {
					Object.keys(values).forEach(key => {
						if (dataType.isString(values[key])) {
							//字符串类型的值去掉首尾空格
							newValues[key] = values[key].trim();
							//凡是只有%_的都会转义
							const hasSyml = newValues[key].match(/^[\%\_]+$/g);
							if (hasSyml) {
								//转义通配符% _
								hasSyml.forEach(syml => {
									newValues[key] = newValues[key].replace(syml, `\\${syml}`);
								});
							}
						} else if (this.props.momentFormat) {
							//如果需要把moment对象格式化对应的format
							const formating = val => {
								if (dataType.isObject(val) && val._isAMomentObject) {
									const formItems = items || this.state.items;
									const currentItem = formItems.find(item => item.key === key);
									return val.format(currentItem.format);
								} else {
									return val;
								}
							};
							if (dataType.isArray(values[key])) {
								newValues[key] = values[key].map(val => formating(val));
							} else {
								newValues[key] = formating(values[key]);
							}
						} else if (this.props.booleanToNumber && dataType.isBoolean(values[key])) {
							newValues[key] = Number(values[key]);
						} else {
							newValues[key] = values[key];
						}
						if (saveFieldOptions && saveFieldOptions[key]) {
							const options = saveFieldOptions[key];
							const mapKeys = {
								label: "label",
								value: "value",
								children: "children",
								...(saveOptionsMapKey[key] || {}),
							};
							const currentLabel = turnLabelOrValue(options, newValues[key], {
								src: mapKeys.value,
								dist: mapKeys.label,
							});
							newValues[`${key}Label`] =
								(Array.isArray(currentLabel) && currentLabel.length) ||
								(!Array.isArray(currentLabel) && currentLabel)
									? currentLabel
									: this.settingValues[`${key}Label`];
						}
					});
				}
				return newValues;
			},
			onSubmit: (e, query) => {
				e.preventDefault();
				const newValues = this.methods.getFieldsValue(true, query);
				if (dataType.isBoolean(newValues) && !newValues) {
					return;
				}
				const { onOk, content, show, ...others } = this.props.confirm;
				//submitMsg本可以弃掉，这里为了兼容，confirm的参数可以代替submitMsg
				if ((dataType.isBoolean(show) && show) || (this.props.submitMsg && !dataType.isBoolean(show))) {
					Modal.confirm({
						title: "确定好提交了吗?",
						content: content ? content : this.props.submitMsg,
						onOk: e => {
							return this.props.onSubmit ? this.props.onSubmit(newValues) : Promise.resolve();
						},
						...others,
					});
				} else {
					this.props.onSubmit && this.props.onSubmit(newValues);
				}
			},
			changeFormItems: (newItems, part = false, callback) => {
				const_changeFormItems.call(this, newItems, part, callback);
			},
			getInsideItems: () => {
				return this.state.items;
			},
		};
		setFieldsValue(vals) {
			this.methods.setFieldsValue(vals);
		}
		execAsync(newItems) {
			const_initItems.call(
				this,
				Array.isArray(newItems) ? newItems : this.props.items,
				this.form,
				this.methods.changeFormItems,
				() => {
					const_execAsync.call(this, (...rest) => {
						this.form.formReady = true;
						this.props.afterItemsRendered && this.props.afterItemsRendered(...rest);
					});
				},
			);
		}
		componentDidMount() {
			this.form = this.state.currentForm;
			this.props.getFormInstance && this.props.getFormInstance(this.form, this.methods);
			this.execAsync();
		}
		componentDidUpdate(prevProps, prevState) {
			if (
				(this.props.values !== prevProps.values ||
					this.props.formDefaultValues !== prevProps.formDefaultValues) &&
				!this.allAsync.length
			) {
				this.setFieldsValue();
			}
			if (this.props.items !== prevProps.items && !this.allAsync.length) {
				// console.log('newItems',this.props.items)
				this.execAsync();
			}
			if (this.props.form !== prevProps.form || this.state.items !== prevState.items) {
				this.form = {
					...this.props.form,
					zformItems: this.state.items,
					saveFieldOptions: this.form.saveFieldOptions,
					saveOptionsMapKey: this.form.saveOptionsMapKey,
					getAsyncQueue: () => this.allAsync,
				};
				if (this.props.form !== prevProps.form) {
					this.setState({
						currentForm: this.form,
					});
				}
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
						form={this.state.currentForm}
						changeFormItems={this.methods.changeFormItems}
						item={item}
						ref={item.ref}
						labelLayout={this.props.labelLayout}
						getInsideItems={this.methods.getInsideItems}
					/>
				);
				return colItem;
				// return this.props.initAnimation ? (
				// 	<CSSTransition key={item.key} timeout={animateTimout.flipInTime} classNames="fadeIn-to-down">
				// 		{colItem}
				// 	</CSSTransition>
				// ) : (
				// 	colItem
				// );
			});
			return formItems;
		};
		render() {
			const {
				submitBtnName,
				// onSubmit,
				className,
				style,
				submitBtnRender,
				labelLayout,
				// initAnimation,
			} = this.props;
			const items = this.getFormItems();
			const wrapperClassname = classNames("z-form", className || "");
			return (
				<Form onSubmit={this.methods.onSubmit} className={wrapperClassname} style={style}>
					<Row type="flex" className={`z-form-row ${"z-form-label-" + labelLayout}`}>
						{items}
						{/* {initAnimation ? (
							<TransitionGroup component={null} enter={true} exit={true} appear={true}>
								{items}
							</TransitionGroup>
						) : (
							items
						)} */}
						{typeof submitBtnRender === "function" ? (
							submitBtnRender(this.methods.onSubmit, this.props)
						) : submitBtnName ? (
							<Col span={24} className="z-text-center">
								<Button type="primary" htmlType="submit" icon="check">
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
