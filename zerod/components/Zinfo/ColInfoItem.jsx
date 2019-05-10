import React from "react";
import { Col } from "antd";
import ZpageLoading from "../ZpageLoading";
import { const_itemSpan, animateTimout } from "../constant";
import { CSSTransition } from "react-transition-group";
class ColInfoItem extends React.PureComponent {
	static defaultProps = {
		item: {},
	};
	methods = {
		showLoading: (show) => {
			this.setState({
				loading: show,
			});
		},
		getStateItem: () => this.state.item,
		changeItem: (newItem = {}) => {
			this.setState({
				item: { ...this.state.item, ...newItem },
			});
		},
	};
	state = {
		loading: this.props.loading,
		item: this.props.item,
	};
	componentDidUpdate(prevProps) {
		if (this.props.item !== prevProps.item) {
			this.setState({
				item: this.props.item,
				loading: this.props.loading,
			});
		}
	}
	render() {
		const { data } = this.props;
		const { item } = this.state;
		const control = this.state.loading ? (
			<span>加载中...</span>
		) : typeof item.control == "function" ? (
			item.control(data[item.key], data)
		) : (
			data[item.key]
		);
		const span = const_itemSpan(control, item.span, item.defaultSpan);
		return (
			<Col {...span}>
				<div className="z-info z-margin-bottom--1 is-border-right">
					<div
						className="z-info-left z-padding-bottom-10"
						style={{ width: item.width ? item.width : "160px" }}
					>
						{item.label}
					</div>
					<div className="z-info-right z-padding-bottom-10">
						<ZpageLoading showLoading={this.state.loading} size="small" />
						{control}
					</div>
				</div>
			</Col>
		);
	}
}

export default ColInfoItem;
