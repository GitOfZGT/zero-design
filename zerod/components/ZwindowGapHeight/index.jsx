import React, { useState, useEffect, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
const propTypes = {
	children: PropTypes.element,
	querySelector: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	gap: PropTypes.number,
};
const defaultProps = {
	gap: 0,
};
const ZwindowGapHeight = React.forwardRef(function(props, ref) {
	const domRef = useRef(null);
	useEffect(() => {
		if (domRef.current) {
			let el = domRef.current;
			if (props.querySelector && typeof props.querySelector === "string") {
				el = el.querySelector(props.querySelector);
			} else if (props.querySelector && domRef.current.contains(props.querySelector)) {
				el = props.querySelector;
			}
			const client = el.getBoundingClientRect();
			el.style.height = `calc(100vh - ${client.top + props.gap}px)`;
			el.style.overflow = "auto";
		}
		return () => {
			domRef.current = null;
		};
	}, [props.gap]);
	if (React.isValidElement(props.children)) {
		return React.cloneElement(props.children, {
			...props.children.props,
			ref: domRef,
		});
	} else {
		return props.children;
	}
});

ZwindowGapHeight.propTypes = propTypes;
ZwindowGapHeight.defaultProps = defaultProps;
export default React.memo(ZwindowGapHeight);
