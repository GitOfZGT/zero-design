import React from 'react';
// import { Col } from 'antd';
import ZpageLoading from '../ZpageLoading';
import ZtextBreak from '../ZtextBreak';

class ColInfoItem extends React.PureComponent {
    static defaultProps = {
        item: {},
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
        ) : typeof item.control === 'function' ? (
            item.control(data[item.key], data, item)
        ) : (
            data[item.key]
        );
        return (
            <div className="z-info">
                {item.label !== false ? (
                    <div
                        className="z-info-left z-info-left-content"
                        style={{ width: item.width ? item.width : '120px' }}>
                        {item.label}
                    </div>
                ) : null}
                <div className="z-info-right z-info-right-content">
                    <ZpageLoading showLoading={this.state.loading} size="small" />
                    {typeof control === 'string' ? <ZtextBreak text={control} /> : control}
                </div>
            </div>
        );
    }
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
}

export default ColInfoItem;
