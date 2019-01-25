import React from "react";
import ZpureComponent from "./ZpureComponent";
const defaultValue={
}
const context = React.createContext(defaultValue);
const { Provider, Consumer } = context;
const setConsumer = ChildComponent => {
	return class ContextConsumer extends ZpureComponent {
		render() {
			return <Consumer>{value => <ChildComponent {...this.props} {...value}/>}</Consumer>;
		}
	};
};
export default {
	name: "ZerodMainContext",
	defaultValue,
	Provider,
	Consumer,
	setConsumer,
};
