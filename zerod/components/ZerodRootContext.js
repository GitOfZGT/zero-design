import React from "react";
const defaultValue = {};
const context = React.createContext(defaultValue);//创建上下文
const { Provider, Consumer } = context;
//提供启用上下文的方法
const setConsumer = ChildComponent => {
	return class ContextConsumer extends React.PureComponent {
		render() {
			return <Consumer>{value => <ChildComponent {...this.props} {...value}/>}</Consumer>;
		}
	};
};
export default {
	name: "ZerodRootContext",//上下文名称（必需）
	Provider,
	Consumer,
	setConsumer,
};
