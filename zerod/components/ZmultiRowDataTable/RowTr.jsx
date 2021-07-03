import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class RowTr extends React.PureComponent {
    state = {
        items: [],
    };
    componentDidMount() {
        this.initItems();
    }
    componentDidUpdate(prevProps) {
        if (this.props.columns !== prevProps.columns) {
            this.initItems();
        }
    }
    render() {
        const { rowKey, rowIndex, row } = this.props;
        return (
            <tr key={rowKey}>
                <td className="text-center">
                    <span>{rowIndex + 1}</span>
                </td>
                {this.state.items.map((item) => {
                    return (
                        <td key={item.key}>
                            {typeof item.render === 'function' ? item.render(row[item.key], row) : row[item.key]}
                        </td>
                    );
                })}
            </tr>
        );
    }
    initItems = () => {
        this.setState({
            items: this.props.columns.map((item) => {
                item.rowKey = this.props.rowKey;
                return item;
            }),
        });
    };
}
