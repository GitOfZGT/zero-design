import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import './style.scss';

import { const_initItems, const_execAsync } from '../constant';
import ColTd from './ColTd';

export default class RowTr extends React.PureComponent {
    state = {
        items: [],
    };
    componentDidMount() {
        if (this.props.columns.length) {
            this.execAsync();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.columns !== prevProps.columns && !this.allAsync.length) {
            this.execAsync();
        }
    }
    render() {
        const { rowKey, rowIndex, row, showCheckBox, checked, onChecked } = this.props;
        return this.state.items.length ? (
            <tr key={rowKey}>
                {showCheckBox ? (
                    <td className="text-center">
                        <Checkbox
                            rowKey={rowKey}
                            className="z-multi-row-checked"
                            checked={this.props.checked}
                            onChange={this.props.onChecked}
                        />
                    </td>
                ) : null}
                <td className="text-center">
                    <span>{rowIndex + 1}</span>
                </td>
                {this.state.items.map((item) => {
                    return typeof item.show === 'undefined' || item.show ? (
                        <ColTd ref={item.ref} key={item.key} item={item} data={row} loading={item.loading}></ColTd>
                    ) : null;
                })}
            </tr>
        ) : null;
    }
    setFieldsValue = () => {};
    allAsync = [];
    execAsync = () => {
        const_initItems.call(this, this.props.columns, this.props.row, null, const_execAsync.bind(this));
    };
}
