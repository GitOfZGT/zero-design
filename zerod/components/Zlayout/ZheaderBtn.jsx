import React from "react";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";

class ZheaderBtn extends ZpureComponent {
	render() {
		const { className, children, ...others } = this.props;
		return (
			<div {...others} className={`z-header-btn ${className ? className : ""}`}>
				{children}
			</div>
		);
	}
}
export default ZheaderBtn;
