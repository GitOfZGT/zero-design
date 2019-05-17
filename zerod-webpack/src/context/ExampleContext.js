import React from 'react';
const defaultValue = {};
const context = React.createContext(defaultValue);//创建上下文
const { Provider, Consumer } = context;
//提供启用上下文的方法
const setConsumer = ChildComponent => class ContextConsumer extends React.Component {
    render() {
        return <Consumer>{value => <ChildComponent {...this.props} {...value}/>}</Consumer>;
    }
};
export default {
    name: 'ExampleContext', //上下文名称（必需）
    Provider,
    Consumer,
    setConsumer,
};
