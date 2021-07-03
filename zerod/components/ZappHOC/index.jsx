import React from 'react';
import ReactDOM from 'react-dom';
import './defineAntdModalProperties';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider, Button } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import ZerodRootContext from '../ZerodRootContext';
import { mergeConfig } from '../zTool';
import { getProcessEnv } from '../zTool/getProcessEnv';
import { Provider as KeepAliveProvider } from 'react-keep-alive';
import { createRoute } from './createRoute';
const { baserouter } = getProcessEnv();
import ResultPage from './ResultPage';
import ErrorBoundary from '../../lazyLoad/ErrorBoundary';

window.unmountComponentAtNode = () => {
    const appel = document.querySelector('#app');
    if (appel) {
        ReactDOM.unmountComponentAtNode(appel);
    }
};
let fistLoad = true;
function hasPaceWatch() {
    if (window.Pace && fistLoad && !window.appPortalPath) {
        fistLoad = false;
        window.addEventListener(
            'hashchange',
            () => {
                window.Pace.restart();
            },
            false,
        );
    }
}
function ZappHOC(pageConfig) {
    let defaultConfig = {
        rootRoutes: [],
        footerLinks: null,
        footerCopyright: null,
        routerType: 'history',
        responseKeys: {
            listType: {
                list: 'list',
                totalCount: 'totalCount',
                totalPage: 'totalPage',
            },
        },
        errorBoundaryFallback: null,
    };
    // console.log(dataType.isObject(pageConfig),pageConfig);
    defaultConfig = mergeConfig(defaultConfig, pageConfig);
    if (defaultConfig.routerType === 'hash') {
        hasPaceWatch();
    }

    class App extends React.Component {
        render() {
            const routes = (
                <Switch>
                    {this.config.rootRoutes.map((item, i) => {
                        const { keepAlive } = item;
                        if (keepAlive && !this.hasKeepAlive) {
                            this.hasKeepAlive = true;
                        }
                        return createRoute({
                            routeItem: item,
                            parentPath: '',
                        });
                    })}
                    <Route path="*">
                        <ResultPage
                            extra={
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        window.location.assign(`${this.config.routerBasename || baserouter}/`);
                                    }}>
                                    点击返回主页
                                </Button>
                            }></ResultPage>
                    </Route>
                </Switch>
            );
            const Router = this.config.routerType === 'history' ? BrowserRouter : HashRouter;
            return (
                <ConfigProvider locale={zh_CN}>
                    <ZerodRootContext.Provider
                        value={{
                            footerLinks: this.config.footerLinks,
                            footerCopyright: this.config.footerCopyright,
                            responseKeys: this.config.responseKeys,
                            errorBoundaryFallback: this.config.errorBoundaryFallback,
                        }}>
                        <ErrorBoundary>
                            <Router basename={this.config.routerBasename || baserouter}>
                                {this.hasKeepAlive ? <KeepAliveProvider>{routes}</KeepAliveProvider> : routes}
                            </Router>
                        </ErrorBoundary>
                    </ZerodRootContext.Provider>
                </ConfigProvider>
            );
        }
        config = defaultConfig;
    }
    return App;
}
export default ZappHOC;
