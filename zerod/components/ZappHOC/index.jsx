import React from "react";
import { BrowserRouter, HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import Zlayout from "../Zlayout";
import ZerodRootContext from "../ZerodRootContext";
import zTool from "../zTool";
function ZappHOC(pageConfig) {
	let defaultConfig = {
		rootRoutes: [],
		footerLinks: null,
		footerCopyright: null,
		routerType:"history",
		responseKeys: {
			listType: {
				list: "list",
				totalCount: "totalCount",
				totalPage: "totalPage",
			},
		},
	};
	defaultConfig = zTool.mergeConfig(defaultConfig, pageConfig);
	class App extends React.Component {
		config = defaultConfig;
		routes = this.config.rootRoutes.map((item, i) => {
			return item.redirect ? (
				<Route key={i} exact path={item.path} render={() => <Redirect to={item.to} />} />
			) : (
				<Route key={i} exact={item.exact} path={item.path} component={item.component} />
			);
		});
		render() {
			const Router=this.config.routerType==="history"?BrowserRouter:HashRouter;
			return (
				<LocaleProvider locale={zh_CN}>
					<ZerodRootContext.Provider
						value={{
							footerLinks: this.config.footerLinks,
							footerCopyright: this.config.footerCopyright,
							responseKeys:this.config.responseKeys,
						}}
					>
						<Router>
							<Zlayout.Template>{this.routes}</Zlayout.Template>
						</Router>
					</ZerodRootContext.Provider>
				</LocaleProvider>
			);
		}
	}
	return App;
}
export default ZappHOC;
