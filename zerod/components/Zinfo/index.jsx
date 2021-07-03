import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import './style.scss';
import { const_initItems, const_execAsync } from '../constant';
// import ZpageLoading from "../ZpageLoading";
import ColInfoItem from './ColInfoItem';
class Zinfo extends React.PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
        defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        fieldValue: PropTypes.object,
        colCount: PropTypes.number,
        gutter: PropTypes.number,
        layoutType: PropTypes.string, //fixedCol || freeCol
    };
    static defaultProps = {
        items: [
            {
                lable: '字段名',
                key: 'name',
                span: null,
                render: () => {
                    return (value, record) => <span>{value}</span>;
                },
                width: '160px',
            },
        ],
        fieldValue: {},
        colCount: 2,
        gutter: 20,
        layoutType: 'fixedCol',
    };
    state = {
        items: [],
        detailData: this.props.fieldValue,
        rowItems: [],
    };
    allAsync = [];
    execAsync() {
        const_initItems.call(this, this.props.items, this.props.fieldValue, null, const_execAsync.bind(this));
    }
    setFieldsValue() {
        if (this.props.fieldValue) {
            this.setState({
                detailData: this.props.fieldValue,
            });
        }
    }
    componentDidMount() {
        if (this.props.items.length) {
            this.execAsync();
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.fieldValue !== prevProps.fieldValue) {
            this.setFieldsValue();
        }
        if (this.props.items !== prevProps.items && !this.allAsync.length) {
            this.execAsync();
        }
        if (this.state.items !== prevState.items) {
            if (this.props.layoutType === 'fixedCol') {
                const rowItems = [];
                let i = 0;
                this.state.items.forEach((item, index) => {
                    if (index % this.props.colCount === 0) {
                        i = 0;
                    }
                    if (!Array.isArray(rowItems[i])) {
                        rowItems[i] = [];
                    }
                    rowItems[i].push(item);
                    i++;
                });
                this.setState({ rowItems });
            }
        }
    }
    componentWillUnmount() {
        this.unmounted = true;
    }

    getItems() {
        const data = this.state.detailData;
        if (this.props.layoutType === 'fixedCol') {
            return this.state.rowItems.map((row, i) => {
                return (
                    <Col span={Math.floor(24 / this.props.colCount)} key={i} className="z-info-fixed-col">
                        <div className="z-panel" style={{ overflow: 'hidden' }}>
                            {row.map((item) => {
                                return (
                                    <ColInfoItem
                                        key={item.key}
                                        loading={item.loading}
                                        item={item}
                                        ref={item.ref}
                                        data={data}
                                    />
                                );
                            })}
                        </div>
                    </Col>
                );
            });
        }
        return this.state.items.map((item, i) => {
            return (
                <Col className="z-info-col" span={item.span || 8} key={item.key}>
                    <ColInfoItem loading={item.loading} item={item} ref={item.ref} data={data} />
                </Col>
            );
        });
    }

    render() {
        const { className } = this.props;
        let rows = (
            <Row type="flex" className="z-info-row" gutter={this.props.layoutType === 'fixedCol' ? 20 : 0}>
                {this.getItems()}
            </Row>
        );

        if (this.props.layoutType === 'fixedCol') {
            return rows;
        }
        return (
            <div className={`z-panel ${className || ''}`} style={{ overflow: 'hidden' }}>
                {rows}
            </div>
        );
    }
}

export default Zinfo;
