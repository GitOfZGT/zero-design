import React, { useRef } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { dataType } from '../zTool';
import { removeOblique } from '../zTool/getProcessEnv';
import { KeepAlive, useKeepAliveEffect } from 'react-keep-alive';
import './style.scss';
export function createRoute({ routeItem, parentPath, baserouter }) {
    parentPath = baserouter || parentPath; //baserouter重命名为parentPath，保留baserouter可用
    const { path, to, component, keepAlive, redirect, ...others } = routeItem;
    const _path = removeOblique(`${parentPath}${path}`);
    const RouteChild = component;
    let _to = null;
    let keepAliveDomProperties = null;
    if (dataType.isObject(keepAlive)) {
        keepAliveDomProperties = keepAlive.domProperties;
    }
    // console.log(_path, path, _to);
    if (redirect) {
        if (dataType.isObject(to)) {
            _to = {
                ...to,
                pathname: dataType.isString(to.pathname) ? removeOblique(`${parentPath}${to.pathname}`) : '',
            };
        } else if (dataType.isString(to)) {
            _to = removeOblique(`${parentPath}${to}`);
        }
    }
    // console.log(_path);
    return redirect ? (
        <Route
            key={`${_path}_redirect`}
            exact
            path={_path}
            render={() => {
                return <Redirect to={_to}></Redirect>;
            }}
            {...others}
        ></Route>
    ) : (
        <Route
            key={_path}
            path={_path}
            render={(props) => {
                return keepAlive ? (
                    <KeepAlive name={_path}>
                        {keepAliveDomProperties ? (
                            <KeepAliveContent keepAliveDomProperties={keepAliveDomProperties}>
                                <RouteChild routePath={_path} {...props} />
                            </KeepAliveContent>
                        ) : (
                            <RouteChild routePath={_path} {...props} />
                        )}
                    </KeepAlive>
                ) : (
                    <RouteChild routePath={_path} {...props} />
                );
            }}
            {...others}
        ></Route>
    );
}

function KeepAliveContent(props) {
    const domRef = useRef();
    useKeepAliveEffect(() => {
        setTimeout(() => {
            domRef.current.classList.remove('fade-hide');
        }, 10);
        return () => {
            domRef.current.classList.add('fade-hide');
        };
    });
    const { keepAliveDomProperties, children } = props;
    return (
        <div
            className="z-route-wrapper fade-hide"
            ref={domRef}
            {...(dataType.isObject(keepAliveDomProperties) ? keepAliveDomProperties : {})}
        >
            {children}
        </div>
    );
}
