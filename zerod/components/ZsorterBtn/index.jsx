import React from "react";import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { Tooltip ,Icon} from "antd";
export class ZsorterBtn extends ZpureComponent {
	static propTypes = {
		onClick: PropTypes.func,
		defaultSortOrder:PropTypes.string,
	};
	state = {
		ascendOn: this.props.defaultSortOrder==="ascend",
		descendOn: this.props.defaultSortOrder==="descend",
	};
	methods = {
		asdendClick: (e) => {
			this.props.onClick && this.props.onClick(this.state.ascendOn ? "" : "ascend", e);
			this.setState({
				ascendOn: !this.state.ascendOn,
				descendOn: false,
			});
		},
		descendClick: (e) => {
			this.props.onClick && this.props.onClick(this.state.descendOn ? "" : "descend", e);
			this.setState({
				ascendOn: false,
				descendOn: !this.state.descendOn,
			});
		},
	};
	render() {
		return (
			<Tooltip placement="top" title={`排序字段：${this.props.children}`}>
			<div className={cssClass["z-sorter-btn"]}>
				{this.props.children}
				<div className="btn-sorter">
					<span
						className={`btn-sorter-up ${
							this.state.ascendOn && !this.state.descendOn ? "on" : "off"
						}`}
						title="↑"
						onClick={this.methods.asdendClick}
					>
					<Icon  type="caret-up"></Icon>
					</span>
					<span
						className={`btn-sorter-down ${
							!this.state.ascendOn && this.state.descendOn ? "on" : "off"
						}`}
						title="↓"
						onClick={this.methods.descendClick}
					>
						<Icon  type="caret-down"></Icon>
					</span>
				</div>
			</div>
			</Tooltip>
		);
	}
}

export default ZsorterBtn;
