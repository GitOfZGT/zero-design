import React from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

export class ZpageLoading extends React.Component {
	static propTypes = {
		showLoading: PropTypes.bool,
	};
	render() {
		return (
			<div className={cssClass["z-page-loading-cover"]} style={{display:this.props.showLoading?'block':'none'}}>
				<div className={cssClass["z-page-loading"]}>
					<Spin spinning={this.props.showLoading} size="large"/>
				</div>
			</div>
		);
	}
}

export default ZpageLoading;
