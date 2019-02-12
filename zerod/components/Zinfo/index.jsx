import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateTimout, const_initItems, const_execAsync, const_itemSpan } from "../constant";
// import ZpageLoading from "../ZpageLoading";
import ColInfoItem from "./ColInfoItem";
class Zinfo extends React.PureComponent {
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
	allAsync = [];
	execAsync() {
		const_initItems.call(
			this,
			this.props.items,
			this.props.fieldValue,
			undefined,
			const_execAsync.bind(this),
		);
	}
	setFieldValue() {
		if (this.props.fieldValue)
			this.setState({
				detailData: this.props.fieldValue,
			});
	}
	componentDidMount() {
		this.execAsync();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.fieldValue !== prevProps.fieldValue) {
			this.setFieldValue();
		}
		if (this.props.items !== prevProps.items && !this.allAsync.length) {
			this.execAsync();
		}
	}
	componentWillUnmount() {
		this.unmounted = true;
	}
	getItems() {
		const data = this.state.detailData;
		return this.state.items.map((item, i) => {
			return (
				<CSSTransition key={item.key + "_" + i} timeout={animateTimout.flipInTime} classNames="flipX">
					<ColInfoItem key={i} loading={item.loading} item={item} ref={item.ref} data={data} />
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
