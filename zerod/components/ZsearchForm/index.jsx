import React from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout, const_initItems, const_execAsync, const_changeFormItems } from "../constant";
// import ZpageLoading from "../ZpageLoading";
import { once, dataType } from "../zTool";
import ColFormItem from "../Zform/ColFormItem";
export const ZsearchForm = Form.create()(
	class extends React.PureComponent {
		static propTypes = {
			hidden: PropTypes.bool,
			labelLayout: PropTypes.string, //'horizontal'|'vertical'
			className: PropTypes.string,
			colFormItems: PropTypes.arrayOf(PropTypes.object), //兼容旧版本，现由items替代
			items: PropTypes.arrayOf(PropTypes.object),
			onSearch: PropTypes.func,
			onReset: PropTypes.func,
			getFormInstance: PropTypes.func,
			exportMethods: PropTypes.func,
			noCollapse: PropTypes.bool,
			defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
			formDefaultValues: PropTypes.object,
			collapseCount: PropTypes.number,
			afterItemsRendered: PropTypes.func, // 表单控件渲染完的回调
			initAnimation: PropTypes.bool,
			momentFormat: PropTypes.bool,
		};
		static defaultProps = {
			defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
			collapseCount: 3,
			noCollapse: false,
			hidden: false,
			labelLayout: "vertical",
			initAnimation: true,
		};
		state = {
			expand: this.props.noCollapse,
			items: [],
		};
		allAsync = [];
		methods = {
			unfold: callback => {
				this.setAnimate(callback);
			},
			handleSearch: e => {
				e.preventDefault();
				this.props.form.validateFields((err, values) => {
					if (!err) {
						const newValues = {};
						if (dataType.isObject(values)) {
							Object.keys(values).forEach(key => {
								if (dataType.isString(values[key])) {
									//字符串类型的值去掉首尾空格
									newValues[key] = values[key].trim();
								} else if (this.props.momentFormat) {
									//如果需要把moment对象格式化对应的format
									const formating = val => {
										if (dataType.isObject(val) && val._isAMomentObject) {
											const currentItem = this.state.items.find(item => item.key === key);
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
								} else {
									newValues[key] = values[key];
								}
							});
						}
						this.props.onSearch && this.props.onSearch(newValues);
					}
				});
			},
			handleReset: () => {
				this.props.form.resetFields();
				this.props.onReset && this.props.onReset();
			},
			expandToggle: () => {
				this.setState({ expand: !this.state.expand });
			},
			changeFormItems: (newItems, part = false, callback) => {
				const_changeFormItems.call(this, newItems, part, callback);
			},
			getInsideItems: () => {
				return this.state.items;
			},
		};
		config = {
			collapseCount: this.props.collapseCount,
		};
		setFieldsValue(values) {
			values = values ? values : this.props.formDefaultValues;
			if (values && this.state.items.length) {
				const newValues = {};
				this.filedKeys.forEach(key => {
					const value = values[key];
					if (value !== undefined) {
						if (this.props.momentFormat) {
							const currentItem = this.state.items.find(item => item.key === key);
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
				if (Object.keys(newValues).length) this.form.setFieldsValue(newValues);
			}
		}
		execAsync(newItems) {
			const items = this.props.items ? this.props.items : this.props.colFormItems;
			const_initItems.call(
				this,
				Array.isArray(newItems) ? newItems : items,
				this.props.form,
				this.methods.changeFormItems,
				() => {
					const_execAsync.call(this, this.props.afterItemsRendered);
				},
			);
		}
		hidden = this.props.hidden;
		setAnimate = (callback, init) => {
			if (this.hidden) {
				if (init) {
					this.formEl.style.height = "0px";
					this.hidden = false;
				} else {
					this.formEl.style.height = (this.formEl.scrollHeight > 0 ? this.formEl.scrollHeight : 1) + "px";
					setTimeout(() => {
						this.formEl.style.height = "0px";
						this.hidden = false;
						callback && callback(this.hidden);
					}, 10);
				}
			} else {
				this.formEl.style.height = "0px";
				setTimeout(() => {
					this.formEl.style.height = (this.formEl.scrollHeight > 0 ? this.formEl.scrollHeight : 1) + "px";
					once(this.formEl, "transitionend", () => {
						this.formEl.style.height = "";
					});
					this.hidden = true;
					callback && callback(this.hidden);
				}, 10);
			}
		};
		componentDidMount() {
			this.form = { ...this.props.form, zformItems: this.state.items, saveFieldOptions: {},saveOptionsMapKey:{} };
			this.props.getFormInstance && this.props.getFormInstance(this.form, this.methods);
			this.props.exportMethods && this.props.exportMethods(this.methods);
			this.execAsync();
			this.setAnimate(null, true);
		}
		componentDidUpdate(prevProps, prevState) {
			if (this.props.formDefaultValues !== prevProps.formDefaultValues) {
				this.setFieldsValue();
			}
			if (
				(this.props.items !== prevProps.items || this.props.colFormItems !== prevProps.colFormItems) &&
				!this.allAsync.length
			) {
				this.execAsync();
			}
			if (this.props.form !== prevProps.form) {
				this.form = {
					...this.props.form,
					zformItems: this.state.items,
					saveFieldOptions: this.form.saveFieldOptions,
					saveOptionsMapKey: this.form.saveOptionsMapKey,
				};
				this.props.getFormInstance && this.props.getFormInstance(this.form, this.methods);
			}
			// if (this.props.hidden !== prevProps.hidden) {
			// 	this.setAnimate();
			// }
		}
		componentWillUnmount() {
			//组件卸载标识，用在异步回调阻止任何setState操作
			this.unmounted = true;
		}
		getFormItems() {
			const items = this.state.expand ? this.state.items : this.state.items.slice(0, this.config.collapseCount);
			return items.map((item, i) => {
				const colItem = (
					<ColFormItem
						key={item.key}
						loading={item.loading}
						form={this.props.form}
						changeFormItems={this.methods.changeFormItems}
						item={item}
						ref={item.ref}
						labelLayout={this.props.labelLayout}
						getInsideItems={this.methods.getInsideItems}
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
		}
		render() {
			this.items = this.getFormItems();
			const { className, hidden, labelLayout, initAnimation } = this.props;
			return (
				<div
					ref={el => (this.formEl = el)}
					className={`${cssClass["z-search-form"]} ${className ? className : ""}`}
				>
					<Form onSubmit={this.methods.handleSearch} className="z-padding-top-14">
						<Row type="flex" className={`z-form-row ${"z-form-label-" + labelLayout}`}>
							{initAnimation ? (
								<TransitionGroup component={null} enter={true} exit={true} appear={true}>
									{this.items}
								</TransitionGroup>
							) : (
								this.items
							)}
							{this.items.length ? (
								<Col
									{...(typeof this.props.defaultSpan == "number"
										? { md: this.props.defaultSpan }
										: this.props.defaultSpan)}
									className="z-flex-items-end"
								>
									<div className="ant-form-item z-padding-bottom-4">
										<Button type="primary" htmlType="submit">
											查询
										</Button>
										<Button className={`z-margin-left-15`} onClick={this.methods.handleReset}>
											重置
										</Button>
										{this.state.items.length > this.config.collapseCount &&
										!this.props.noCollapse ? (
											<Button
												className={`z-margin-left-15 z-font-size-12`}
												onClick={this.methods.expandToggle}
											>
												{this.state.expand ? "折叠" : "展开"}
												<Icon type={this.state.expand ? "up" : "down"} />
											</Button>
										) : null}
									</div>
								</Col>
							) : null}
						</Row>
					</Form>
				</div>
			);
		}
	},
);

export default ZsearchForm;
