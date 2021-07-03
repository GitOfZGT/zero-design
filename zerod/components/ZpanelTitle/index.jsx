import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./style.scss";
const propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
};
const defautlProps = {};
const ZpanelTitle = props => {
	const { className, style, children } = props;
	return children ? (
		<header className={`z-panel-title ${className || ""}`} style={style}>
			{children}
		</header>
	) : null;
};

ZpanelTitle.propTypes = propTypes;
ZpanelTitle.defautlProps = defautlProps;
export default React.memo(ZpanelTitle);
