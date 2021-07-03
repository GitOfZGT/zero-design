import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ZerodMainContext from '../ZerodMainContext';
import './style.scss';
import { useKeepAliveEffect } from 'react-keep-alive';
// import { getStyle } from '../zTool';
// import { const_getDomZIndex } from '../constant';
const propTypes = {
    getInsertLocation: PropTypes.func, //来自ZerodMainContext
    getScrollAreaWrapperEl: PropTypes.func, //来自ZerodMainContext
    width: PropTypes.string,
    position: PropTypes.string,
};
const defaultProps = {
    width: '200px',
    position: 'left',
    style: {},
    isKeepAlive: false,
};
const ZpartSide = (props) => {
    const { getInsertLocation, getScrollAreaWrapperEl, width, children, position, style, isKeepAlive } = props;
    const [wrapperEl, setWrapperEl] = useState(null);
    const elRef = useRef();
    const partRef = useRef();
    const scroolAreaObj = useRef();
    const entryTimeRef = useRef();
    const firstAliveRef = useRef(false);
    useEffect(() => {
        const modal = getInsertLocation(elRef.current);
        scroolAreaObj.current = getScrollAreaWrapperEl(modal);
        const { wrapperEl, methods } = scroolAreaObj.current;
        setWrapperEl(wrapperEl);
    }, []);
    useEffect(() => {
        const { methods } = scroolAreaObj.current;
        if (partRef.current && wrapperEl) {
            firstAliveRef.current = true;
            partRef.current.style.visibility = 'hidden';
            partRef.current.style[position] = `-${width}`;
            entryTimeRef.current = setTimeout(() => {
                firstAliveRef.current = false;
                partRef.current.style.visibility = 'visible';
                partRef.current.style[position] = '0px';
                if (!isKeepAlive) {
                    const areaStyle = {
                        width: `calc(100% - ${width})`,
                    };
                    if (position === 'left') {
                        areaStyle.marginLeft = width;
                    }
                    methods.setScrollAreaStyle(areaStyle);
                }
            }, 350);
        }
        return () => {
            if (entryTimeRef.current) {
                clearTimeout(entryTimeRef.current);
            }
            if (!isKeepAlive) {
                methods.resetScrollArea();
            }
        };
    }, [wrapperEl]);
    if (isKeepAlive)
        useKeepAliveEffect(() => {
            const { methods } = scroolAreaObj.current;
            if (partRef.current && !firstAliveRef.current) {
                partRef.current.style.display = '';
                partRef.current.style.visibility = 'visible';
                partRef.current.style[position] = '0px';
            }
            const areaStyle = {
                width: `calc(100% - ${width})`,
            };
            if (position === 'left') {
                areaStyle.marginLeft = width;
            }
            methods.setScrollAreaStyle(areaStyle);

            return () => {
                if (entryTimeRef.current) {
                    clearTimeout(entryTimeRef.current);
                }
                if (partRef.current) {
                    partRef.current.style.display = 'none';
                    partRef.current.style.visibility = 'hidden';
                    partRef.current.style[position] = `-${width}`;
                    entryTimeRef.current = setTimeout(() => {
                        partRef.current.style.display = '';
                    }, 500);
                }
                methods.resetScrollArea();
            };
        });
    return (
        <section ref={elRef}>
            {wrapperEl
                ? ReactDom.createPortal(
                      <section
                          ref={partRef}
                          className={`app-body z-part-side is-${position}`}
                          style={{ ...style, width }}
                      >
                          {children}
                      </section>,
                      wrapperEl,
                  )
                : null}
        </section>
    );
};
ZpartSide.propTypes = propTypes;
ZpartSide.defaultProps = defaultProps;
export default ZerodMainContext.setConsumer(ZpartSide);
