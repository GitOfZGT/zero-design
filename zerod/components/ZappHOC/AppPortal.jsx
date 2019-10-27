import React from "react";
function paceRestart() {
	window.appProtalWindow.postMessage({ paceRestart: true }, window.appProtalOrigin);
}
function paceDone() {
	window.appProtalWindow.postMessage({ paceDone: true }, window.appProtalOrigin);
}
export default class AppPortal extends React.PureComponent {
	componentDidMount() {
		window.addEventListener("message", this.receiveMessage, false);
	}
	componentWillUnmount() {
		window.removeEventListener("message", this.receiveMessage, false);
	}
	render() {
		return <div></div>;
	}

	receiveMessage = event => {
		if (Object.prototype.toString.call(event.data) === "[object Object]" && event.data.isAppPortal) {
			window.isAppPortal = true;
			console.log("event.data.isAppPortal", window.isAppPortal);
			document.body.className += " app-portal";
			window.appProtalWindow = event.source;
			window.appProtalOrigin = event.origin;
			window.Pace && window.Pace.on("restart", paceRestart);
			window.Pace && window.Pace.on("done", paceDone);
			this.props.history.push("/main");
		}
	};
}
