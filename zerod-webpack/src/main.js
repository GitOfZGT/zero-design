import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./app.scss";
render(
	<App />,
	document.querySelector("#app"),
);
if (module.hot) {
	module.hot.accept();
}
