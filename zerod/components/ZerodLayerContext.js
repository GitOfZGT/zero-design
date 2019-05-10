import React from "react";
import ZpureComponent from "./ZpureComponent";
const defaultValue = {};
const context = React.createContext(defaultValue);
const { Provider, Consumer } = context;
const setConsumer = (ChildComponent) => {
	return class ContextConsumer extends ZpureComponent {
		render() {
			return <Consumer>{(value) => <ChildComponent {...this.props} {...value} ref={this.props.forwardedRef}/>}</Consumer>;
		}
	};
};
export default {
	name: "ZerodLayerContext",
	defaultValue,
	Provider,
	Consumer,
	setConsumer,
};
