import React from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";
const FormItem = Form.Item;
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout } from "../constant";
export const ZsearchForm = Form.create()(
	class extends React.Component {
		static propTypes = {
			colFormItems: PropTypes.arrayOf(PropTypes.object).isRequired,
			onSearch: PropTypes.func,
			onReset: PropTypes.func,
			noCollapse: PropTypes.bool,
		};
		state = {
			expand: false,
		};
		items = [];
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
			xxlRowCount: 4,
			lgRowCount: 3,
			mdRowCount: 2,
			collapseCount: 3,
		};
		getFields() {
			const count =
				this.state.expand || this.props.noCollapse ? this.props.colFormItems.length : this.config.collapseCount;
			const { getFieldDecorator } = this.props.form;
			const children = [];
			for (let i = 0; i < this.props.colFormItems.length; i++) {
				const item = this.props.colFormItems[i];
				if (i < count) {
					children.push(
						<CSSTransition
							key={item.key + "_" + i}
							timeout={!this.state.expand&&!this.props.noCollapse ? animateTimout.flipInTime : animateTimout.flipOutTime}
							classNames="fadeIn-to-down"
						>
							<Col
								md={Math.floor(24 / this.config.mdRowCount)}
								lg={Math.floor(24 / this.config.lgRowCount)}
								xxl={Math.floor(24 / this.config.xxlRowCount)}
							>
								<FormItem label={item.label}>
									{getFieldDecorator(item.key, item.options)(item.render(this.props.form, this))}
								</FormItem>
							</Col>
						</CSSTransition>,
					);
				} else {
					break;
				}
			}
			return children;
		}
		render() {
			this.items = this.getFields();
			return (
				<Form className={cssClass["z-search-form"]} onSubmit={this.methods.handleSearch}>
					<Row type="flex" className={cssClass["z-form-row"]}>
						<TransitionGroup component={null} enter={true} exit={true} appear={true}>
							{this.items}
						</TransitionGroup>
						{this.items.length?<Col
							md={Math.floor(24 / this.config.mdRowCount)}
							lg={Math.floor(24 / this.config.lgRowCount)}
							xxl={Math.floor(24 / this.config.xxlRowCount)}
							className="z-flex-items-end"
						>
							<div className="ant-form-item z-padding-bottom-4">
								<Button type="primary" htmlType="submit">
									查询
								</Button>
								<Button className={`z-margin-left-15`} onClick={this.methods.handleReset}>
									重置
								</Button>
								{this.props.colFormItems.length > this.config.collapseCount &&
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
						</Col>:null}
					</Row>
				</Form>
			);
		}
	},
);

export default ZsearchForm;
