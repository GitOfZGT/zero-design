import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ZerodMainContext from '../ZerodMainContext';
import ReactDOM from 'react-dom';
import './style.scss';
import Loading from '../../lazyLoad/Loading';
import { useRouteMatch, useParams, useLocation } from 'react-router-dom';
import { useKeepAliveEffect } from 'react-keep-alive';
import { const_getDomZIndex } from '../constant';
const propTypes = {
    getScrollAreaWrapperEl: PropTypes.func,
    getInsertLocation: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
};
export const ZiframeRoute = React.memo((props) => {
    const { reoutePath } = props;
    const match = useRouteMatch(reoutePath);
    const { getScrollAreaWrapperEl, getInsertLocation } = useContext(ZerodMainContext.context);
    const boxElRef = useRef();
    const routeElRef = useRef();
    const [iframeUrl, setIframeUrl] = useState('');
    const [wrapperEl, setWrapperEl] = useState(null);
    const [loading, setLoading] = useState(false);
    useKeepAliveEffect(() => {
        routeElRef.current && (routeElRef.current.style.display = '');
        if (routeElRef.current && wrapperEl) {
            routeElRef.current.style.zIndex = const_getDomZIndex(wrapperEl);
        }
        return () => {
            routeElRef.current && (routeElRef.current.style.display = 'none');
        };
    });
    useEffect(() => {
        if (getInsertLocation && getScrollAreaWrapperEl) {
            const insetLocaltion = getInsertLocation(boxElRef.current);
            const context = getScrollAreaWrapperEl(insetLocaltion);
            setWrapperEl(context.wrapperEl);
        }
    }, []);
    useEffect(() => {
        // console.log(match.params.url, iframeUrl);
        if (
            wrapperEl &&
            match &&
            match.params &&
            match.params.url &&
            decodeURIComponent(match.params.url) !== iframeUrl
        ) {
            setLoading(true);
            setIframeUrl(decodeURIComponent(match.params.url));
        }
    }, [match, wrapperEl]);
    useEffect(() => {
        if (routeElRef.current && wrapperEl) {
            routeElRef.current.style.zIndex = const_getDomZIndex(wrapperEl);
        }
    }, [wrapperEl]);
    return (
        <section ref={boxElRef}>
            {wrapperEl
                ? ReactDOM.createPortal(
                      <div className="z-iframe-route" ref={routeElRef}>
                          {loading ? <Loading></Loading> : null}
                          <iframe
                              style={{ visibility: loading ? 'hidden' : 'visible' }}
                              src={iframeUrl}
                              frameBorder="0"
                              seamless
                              scrolling="auto"
                              onLoad={() => {
                                  console.log('dome form');
                                  setLoading(false);
                              }}
                          />
                      </div>,
                      wrapperEl
                  )
                : null}
        </section>
    );
});
ZiframeRoute.propTypes = propTypes;
export default ZiframeRoute;
