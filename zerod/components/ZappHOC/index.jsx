import React from "react";
import ZpureComponent from "../ZpureComponent";
import { BrowserRouter, HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import ZerodRootContext from "../ZerodRootContext";
import {mergeConfig,dataType} from "../zTool";
let fistLoad = true;
function hasPaceWatch() {
	if (window.Pace && fistLoad) {
		fistLoad = false;
		window.addEventListener(
			"hashchange",
			() => {
				window.Pace && window.Pace.restart();
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
		routerType: "history",
		responseKeys: {
			listType: {
				list: "list",
				totalCount: "totalCount",
				totalPage: "totalPage",
			},
		},
	};
	// console.log(dataType.isObject(pageConfig),pageConfig);
	defaultConfig = mergeConfig(defaultConfig, pageConfig);
	if (defaultConfig.routerType == "hash") {
		hasPaceWatch();
	}
	class App extends ZpureComponent {
		config = defaultConfig;
		routes = this.config.rootRoutes.map((item, i) => {
			return item.redirect ? (
				<Route key={i} exact path={item.path} render={() => <Redirect to={item.to} />} />
			) : (
				<Route key={i} exact={item.exact} path={item.path} component={item.component} />
			);
		});
		render() {
			const Router = this.config.routerType === "history" ? BrowserRouter : HashRouter;
			return (
				<LocaleProvider locale={zh_CN}>
					<ZerodRootContext.Provider
						value={{
							footerLinks: this.config.footerLinks,
							footerCopyright: this.config.footerCopyright,
							responseKeys: this.config.responseKeys,
						}}
					>
						<Router>
							<>{this.routes}</>
						</Router>
					</ZerodRootContext.Provider>
				</LocaleProvider>
			);
		}
	}
	return App;
}
export default ZappHOC;
