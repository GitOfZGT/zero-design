import React from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout, const_initItems, const_execAsync, const_itemSpan } from "../constant";
import ZpageLoading from "../ZpageLoading";
import { once, dataType, } from "../zTool";
export const ZsearchForm = Form.create()(
	class extends React.Component {
		static propTypes = {
			hidden: PropTypes.bool,
			labelLayout: PropTypes.string,//'horizontal'|'vertical'
			className: PropTypes.string,
			colFormItems: PropTypes.arrayOf(PropTypes.object), //兼容旧版本，现由items替代
			items: PropTypes.arrayOf(PropTypes.object),
			onSearch: PropTypes.func,
			onReset: PropTypes.func,
			getFormInstance: PropTypes.func,
			noCollapse: PropTypes.bool,
			defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
			formDefaultValues: PropTypes.object,
			collapseCount: PropTypes.number,
			afterItemsRendered: PropTypes.func, // 表单控件渲染完的回调
		};
		static defaultProps = {
			defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
			collapseCount: 3,
			noCollapse: false,
			hidden: false,
			labelLayout:"vertical",
		};
		state = {
			expand: this.props.noCollapse,
			items: [],
		};
		allAsync = [];
		methods = {
			handleSearch: (e) => {
				e.preventDefault();
				this.props.form.validateFields((err, values) => {
					if (!err) {
						this.props.onSearch && this.props.onSearch(values);
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
			changeFormItems: (newItems) => {
				this.execAsync(newItems);
			},
		};
		config = {
			collapseCount: this.props.collapseCount,
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
			const items = this.props.items ? this.props.items : this.props.colFormItems;
			const_initItems.call(
				this,
				Array.isArray(newItems) ? newItems : items,
				<Input placeholder="加载中" disabled />,
				this.props.form,
				this.methods.changeFormItems,
				() => {
					const_execAsync.call(this, this.props.afterItemsRendered);
				},
			);
		}
		setAnimate=() =>{
			if (this.props.hidden) {
				this.formEl.style.height = (this.formEl.scrollHeight > 0 ? this.formEl.scrollHeight : 1) + "px";
				setTimeout(() => {
					this.formEl.style.height = "0px";
				},10);
			} else {
				this.formEl.style.height = "0px";
				setTimeout(() => {
					this.formEl.style.height = (this.formEl.scrollHeight > 0 ? this.formEl.scrollHeight : 1) + "px";
					once(this.formEl, "transitionend", () => {
						this.formEl.style.height = "";
					});
				},10);
			}
		}
		componentDidMount() {
			this.props.getFormInstance && this.props.getFormInstance(this.props.form, this.methods);
			this.execAsync();
			this.setAnimate();
		}
		componentDidUpdate(prevProps, prevState) {
			if (this.props.formDefaultValues !== prevProps.formDefaultValues) {
				this.setFieldValue();
			}
			if (
				(this.props.items !== prevProps.items || this.props.colFormItems !== prevProps.colFormItems) &&
				!this.allAsync.length
			) {
				this.execAsync();
			}
			if (this.props.hidden !== prevProps.hidden) {
				this.setAnimate();
			}
		}
		getFormItems() {
			const { getFieldDecorator } = this.props.form;
			const items = this.state.expand ? this.state.items : this.state.items.slice(0, this.config.collapseCount);
			return items.map((item, i) => {
				const control =
					typeof item.control === "function"
						? item.control(this.props.form, this.methods.changeFormItems)
						: item.control;
				const span = const_itemSpan(control, item.span, item.defaultSpan);
				const isFormItem = typeof item.isFormItem === "boolean" ? item.isFormItem : true;
				return (
					<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="fadeIn-to-down">
						<Col {...span} className={item.className}>
							{isFormItem ? (
								<Form.Item label={item.label} className={item.itemClassName}>
									<ZpageLoading showLoading={item.loading} size="small" />
									{getFieldDecorator(item.key, dataType.isFunction(item.options)?item.options():item.options)(control)}
								</Form.Item>
							) : (
								<div>
									<ZpageLoading showLoading={item.loading} size="small" />
									{control}
								</div>
							)}
						</Col>
					</CSSTransition>
				);
			});
		}
		render() {
			this.items = this.getFormItems();
			const { className, hidden,labelLayout } = this.props;
			return (
				<div
					ref={(el) => (this.formEl = el)}
					className={`${cssClass["z-search-form"]} ${className ? className : ""}`}
				>
					<Form onSubmit={this.methods.handleSearch}>
						<Row type="flex" className={`${cssClass["z-form-row"]} ${labelLayout=="horizontal"?"z-form-label-horizontal":""}`}>
							<TransitionGroup component={null} enter={true} exit={true} appear={true}>
								{this.items}
							</TransitionGroup>
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
