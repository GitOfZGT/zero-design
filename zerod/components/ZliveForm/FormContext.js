import React from 'react';
const defaultValue = {};
const context = React.createContext(defaultValue);
const { Provider, Consumer } = context;
const setConsumer = (ChildComponent) => {
    return class ContextConsumer extends React.Component {
        render() {
            return <Consumer>{(value) => <ChildComponent {...this.props} {...value} />}</Consumer>;
        }
    };
};
export default {
    name: 'FormContext',
    defaultValue,
    Provider,
    Consumer,
    setConsumer,
    context
};
