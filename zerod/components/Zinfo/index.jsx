import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout, const_initItems, const_execAsync } from "../constant";
import ZpageLoading from "../ZpageLoading";

class Zinfo extends React.Component {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.object),
		defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		fieldValue: PropTypes.object,
	};
	static defaultProps = {
		items: [
			{
				lable: "字段名",
				key: "name",
				span: null,
				render: () => {
					return (value, record) => <span>{value}</span>;
				},
				width: "160px",
			},
		],
		defaultSpan: { xxl: 8, xl: 12, lg: 24 },
		fieldValue: {},
	};
	state = {
		items: [],
		detailData: this.props.fieldValue,
	};
	allAsync=[];
	execAsync(callback) {
		const_initItems.call(
			this,
			this.props.items,
			(value, record) => {
				<span>加载中...</span>;
			},
			this.props.fieldValue,
		);
		const_execAsync.call(this, callback);
	}
	setFieldValue() {
		if (this.props.fieldValue)
			this.setState({
				detailData: this.props.fieldValue,
			});
	}
	componentDidMount() {
		this.execAsync(this.setFieldValue.bind(this));
	}
	componentDidUpdate(prevProps) {
		if (this.props.fieldValue !== prevProps.fieldValue && !this.allAsync.length) {
			this.setFieldValue();
		}
	}
	getItems() {
		const data = this.state.detailData;
		return this.state.items.map((item, i) => {
			const control = item.control;
			const span = item.span;
			return (
				<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="flipX">
					<Col {...span}>
						<div className="z-info z-margin-bottom-20 is-border-right">
							<div
								className="z-info-left z-padding-bottom-10"
								style={{ width: item.width ? item.width : "160px" }}
							>
								{item.label}
							</div>
							<div className="z-info-right z-padding-bottom-10">
								<ZpageLoading showLoading={item.loading} size="small" />
								{typeof control == "function" ? control(data[item.key], data) : data[item.key]}
							</div>
						</div>
					</Col>
				</CSSTransition>
			);
		});
	}
	render() {
		return (
			<Row type="flex" className={cssClass["z-info-row"]}>
				<TransitionGroup component={null} enter={true} exit={true} appear={true}>
					{this.getItems()}
				</TransitionGroup>
			</Row>
		);
	}
}

export default Zinfo;
