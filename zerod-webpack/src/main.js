import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import "./antd-vars.less";
import "./app.scss";
function didRoot(App) {
	render(
		<Provider store={store()}>
			<App />
		</Provider>,
		document.querySelector("#app"),
	);
}
didRoot(App);

if (module.hot) {
	module.hot.accept();
}
