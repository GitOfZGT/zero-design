import React from 'react';
import PropTypes from 'prop-types';
import { GenNonDuplicateID } from '../zTool';
import './style.scss';
import ZmultiRowBaseTable from '../ZmultiRowBaseTable';

import RowTr from './RowTr';
class ZmultiRowDataTable extends React.PureComponent {
    static propTypes = {
        value: PropTypes.arrayOf(PropTypes.object),
        titleGroups: PropTypes.arrayOf(PropTypes.object),
        items: PropTypes.arrayOf(PropTypes.object),
    };
    static defaultProps = {
        titleGroups: [],
        items: [],
    };
    state = {
        dataSource: [],
        checkedKeys: [],
        allChecked: false,
    };
    componentDidMount() {
        if ((this.props.value || []).length) {
            this.methods.setFormFieldsValue(this.props.value);
        }
        this.props.exportMethods && this.props.exportMethods(this.methods);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== prevProps.value) {
            this.methods.setFormFieldsValue(this.props.value);
        }
    }

    render() {
        const { dataSource } = this.state;
        const { items, titleGroups, className } = this.props;
        return (
            <ZmultiRowBaseTable
                dataSource={dataSource}
                items={items}
                titleGroups={titleGroups}
                showAddButton={false}
                showRemoveButton={false}
                className={className}
            >
                {({ dataSource, columns }) => {
                    this.columns = columns;
                    return (
                        <tbody className="z-multi-row-info-body">
                            {dataSource.map((tr, tr_i) => {
                                return <RowTr rowKey={tr.rowKey} columns={columns} row={tr} rowIndex={tr_i}></RowTr>;
                            })}
                        </tbody>
                    );
                }}
            </ZmultiRowBaseTable>
        );
    }
    loadingRef = React.createRef();
    methods = {
        setFormFieldsValue: (value) => {
            this.setState({
                dataSource: (value || this.props.value).map((row) => {
                    if (!row.rowKey) {
                        row.rowKey = GenNonDuplicateID(5);
                    }
                    return row;
                }),
            });
        },
        getInitialFormItems: () => {
            return this.columns;
        },
    };
}

export default ZmultiRowDataTable;
