import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import ZpageLoading from '../ZpageLoading';

export default class ColTd extends React.PureComponent {
    static defaultProps = {
        item: {},
    };
    methods = {
        showLoading: (show) => {
            this.setState({
                loading: show,
            });
        },
        getStateItem: () => this.state.item,
        changeItem: (newItem = {}) => {
            this.setState({
                item: { ...this.state.item, ...newItem },
            });
        },
    };
    state = {
        loading: this.props.loading,
        item: this.props.item,
    };
    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({
                item: this.props.item,
                loading: this.props.loading,
            });
        }
    }
    render() {
        const { data } = this.props;
        const { item } = this.state;
        const control = this.state.loading ? (
            <span>加载中...</span>
        ) : typeof item.control == 'function' ? (
            item.control(data[item.key], data, item)
        ) : (
            data[item.key]
        );
        return (
            <td>
                <div>{control}</div>
                <ZpageLoading showLoading={this.state.loading} size="small" />
            </td>
        );
    }
}
