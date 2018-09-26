import React from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout, const_initItems, const_execAsync } from "../constant";
import ZpageLoading from "../ZpageLoading";
export const ZsearchForm = Form.create()(
	class extends React.Component {
		static propTypes = {
			colFormItems: PropTypes.arrayOf(PropTypes.object),
			items: PropTypes.arrayOf(PropTypes.object),
			onSearch: PropTypes.func,
			onReset: PropTypes.func,
			noCollapse: PropTypes.bool,
			defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
			formDefaultValues: PropTypes.object,
			collapseCount: PropTypes.number,
		};
		static defaultProps = {
			defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
			collapseCount: 3,
			noCollapse: false,
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
		};
		config = {
			collapseCount: this.props.collapseCount,
		};
		setFormValues() {
			this.props.formDefaultValues &&
				this.state.items.length &&
				this.props.form.setFieldsValue(this.props.formDefaultValues);
		}
		execAsync(callback) {
			const items = this.props.items ? this.props.items : this.props.colFormItems;
			const_initItems.call(this, items, <Input placeholder="加载中" disabled />, this.props.form);
			const_execAsync.call(this, callback);
		}
		componentDidMount() {
			this.execAsync(this.setFormValues.bind(this));
		}
		componentDidUpdate(prevProps) {
			if (this.props.formDefaultValues !== prevProps.formDefaultValues && !this.allAsync.length) {
				this.setFormValues();
			}
			if (
				(this.props.items !== prevProps.items || this.props.colFormItems !== prevProps.colFormItems) &&
				!this.allAsync.length
			) {
				this.execAsync(this.setFormValues.bind(this));
			}
		}
		getFormItems() {
			const { getFieldDecorator } = this.props.form;
			const items = this.state.expand ? this.state.items : this.state.items.slice(0, this.config.collapseCount);
			return items.map((item, i) => {
				const control = item.control;
				let span = item.span;
				const isFormItem = typeof item.isFormItem === "boolean" ? item.isFormItem : true;
				return (
					<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="fadeIn-to-down">
						<Col {...span} className={item.className}>
							{isFormItem ? (
								<Form.Item label={item.label}>
									<ZpageLoading showLoading={item.loading} size="small" />
									{getFieldDecorator(item.key, item.options)(control)}
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
			return (
				<Form className={cssClass["z-search-form"]} onSubmit={this.methods.handleSearch}>
					<Row type="flex" className={cssClass["z-form-row"]}>
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
									{this.state.items.length > this.config.collapseCount && !this.props.noCollapse ? (
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
			);
		}
	},
);

export default ZsearchForm;
