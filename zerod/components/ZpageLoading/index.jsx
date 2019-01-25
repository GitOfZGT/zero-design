import React from "react";import ZpureComponent from "../ZpureComponent";
import { Spin } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

export class ZpageLoading extends ZpureComponent {
	static propTypes = {
		showLoading: PropTypes.bool,
		size: PropTypes.string,
	};
	render() {
		const { size, showLoading, ...others } = this.props;
		return (
			<div className={cssClass["z-page-loading-cover"]} style={{ display: showLoading ? "block" : "none" }}>
				<div className={cssClass["z-page-loading"]}>
					<Spin spinning={showLoading} size={size ? size : "large"} {...others} />
				</div>
			</div>
		);
	}
}

export default ZpageLoading;
