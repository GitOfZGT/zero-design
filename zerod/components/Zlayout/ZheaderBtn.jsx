import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

class ZheaderBtn extends React.PureComponent {
	render() {
		const { className, children, ...others } = this.props;
		return (
			<div {...others} className={`${cssClass["z-header-btn"]}${className ? " " + className : ""}`}>
				{children}
			</div>
		);
	}
}
export default ZheaderBtn;