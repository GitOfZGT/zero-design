import React from "react";
import ZpureComponent from "./ZpureComponent";
const defaultValue = {};
const context = React.createContext(defaultValue);//创建上下文
const { Provider, Consumer } = context;
//提供启用上下文的方法
const setConsumer = ChildComponent => {
	return class ContextConsumer extends ZpureComponent {
		render() {
			return <Consumer>{value => <ChildComponent {...this.props} {...value} ref={this.props.forwardedRef}/>}</Consumer>;
		}
	};
};
export default {
	name: "ZerodRootContext",//上下文名称（必需）
	Provider,
	Consumer,
	setConsumer,
};
