import React, { useState, useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    children: PropTypes.element,
    querySelector: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    gap: PropTypes.number,
};
const defaultProps = {
    gap: 0,
};
const ZwindowGapHeight = React.forwardRef((props, ref) => {
    const domRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if (domRef.current) {
                let el = domRef.current;
                if (props.querySelector && typeof props.querySelector === 'string') {
                    el = el.querySelector(props.querySelector);
                } else if (props.querySelector && domRef.current.contains(props.querySelector)) {
                    el = props.querySelector;
                }
                if (el) {
                    const client = el.getBoundingClientRect();
                    el.style.height = `calc(100vh - ${client.top + props.gap}px)`;
                    el.style.overflow = 'auto';
                }
            }
        }, 60);
        return () => {
            domRef.current = null;
        };
    }, [props.gap, props.querySelector]);
    if (React.isValidElement(props.children)) {
        return React.cloneElement(props.children, {
            ...props.children.props,
            ref: domRef,
        });
    }
    return props.children;
});

ZwindowGapHeight.propTypes = propTypes;
ZwindowGapHeight.defaultProps = defaultProps;
export default React.memo(ZwindowGapHeight);
