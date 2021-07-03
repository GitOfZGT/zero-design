/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, message } from 'antd';
import { GenNonDuplicateID } from '../zTool';
import ColSpanItem from './ColSpanItem';
import './style.scss';
import debounce from 'lodash/debounce';
import Zform from '../Zform';
import ZmultiRowBaseTable from '../ZmultiRowBaseTable';
import ZpageLoading from '../ZpageLoading';
class RowForm extends React.PureComponent {
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
        const {
            rowKey,
            rowIndex,
            momentFormat,
            booleanToNumber,
            showCheckBox,
            controlSize,
            row,
            disabled,
        } = this.props;
        return (
            <tr key={rowKey}>
                {showCheckBox && !disabled ? (
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
                <Zform
                    items={this.state.items}
                    controlSize={controlSize}
                    getFormInstance={this.getFormInstance}
                    afterItemsRendered={this.afterItemsRendered}
                    momentFormat={momentFormat}
                    booleanToNumber={booleanToNumber}
                    values={row}>
                    {(zformInstance) => {
                        zformInstance.setNewForm();
                        return zformInstance.state.items.map((item, i) => (
                            <td key={item.key}>
                                <ColSpanItem
                                    multikey={zformInstance.formkey}
                                    hiddenItemFirstRendering={zformInstance.props.hiddenItemFirstRendering}
                                    loading={item.loading}
                                    form={zformInstance.form}
                                    changeFormItems={zformInstance.methods.changeFormItems}
                                    item={item}
                                    ref={item.ref}
                                    valueLabel={zformInstance.state.saveSettingValues[`${item.key}Label`]}
                                    // labelLayout={zformInstance.props.labelLayout}
                                    getInsideItems={zformInstance.methods.getInsideItems}
                                    controlSize={zformInstance.props.controlSize}
                                    onFirstRender={zformInstance.onFirstRender}
                                    getAnyMethods={zformInstance.getAnyMethods}
                                    onChange={this.props.onChange}
                                />
                            </td>
                        ));
                    }}
                </Zform>
            </tr>
        );
    }
    getFormInstance = (form, methods) => {
        this.props.exportFormMethods({
            [this.props.rowKey]: { form, methods },
        });
    };
    initItems = () => {
        this.setState({
            items: this.props.columns.map((item) => ({ ...item, rowKey: this.props.rowKey })),
        });
    };
    afterItemsRendered = () => {
        this.props.afterItemsRendered && this.props.afterItemsRendered({ rowKey: this.props.rowKey });
    };
}
class ZmultiRowFormControl extends React.PureComponent {
    static propTypes = {
        value: PropTypes.arrayOf(PropTypes.object),
        onChange: PropTypes.func,
        exportMethods: PropTypes.func,
        titleGroups: PropTypes.arrayOf(PropTypes.object),
        items: PropTypes.arrayOf(PropTypes.object),
        controlSize: PropTypes.string,
        momentFormat: PropTypes.bool,
        booleanToNumber: PropTypes.bool,
        showAddButton: PropTypes.bool,
        showRemoveButton: PropTypes.bool,
        onAdd: PropTypes.func,

        // hiddenItemFirstRendering: PropTypes.bool,
    };
    static defaultProps = {
        showAddButton: true,
        showRemoveButton: true,
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
        const { dataSource, allChecked } = this.state;
        const {
            controlSize,
            momentFormat,
            booleanToNumber,
            showAddButton,
            showRemoveButton,
            items,
            titleGroups,
            disabled,
            className,
        } = this.props;
        return (
            <div style={{ position: 'relative' }}>
                <ZpageLoading ref={this.loadingRef} size="small" />
                <ZmultiRowBaseTable
                    dataSource={dataSource}
                    items={items}
                    titleGroups={titleGroups}
                    disabled={disabled}
                    showAddButton={showAddButton}
                    showRemoveButton={showRemoveButton}
                    onAdd={this.addRow}
                    onRemove={this.removeRow}
                    onAllChecked={this.allRowChecked}
                    allChecked={allChecked}
                    controlSize={controlSize}
                    className={className}>
                    {({ dataSource, columns }) => {
                        this.columns = columns;
                        return (
                            <tbody
                                className={`z-form-row z-form-label-vertical z-form-control-${controlSize} z-multi-table-body`}>
                                {dataSource.map((tr, tr_i) => (
                                    <RowForm
                                        disabled={disabled}
                                        key={tr.rowKey}
                                        rowKey={tr.rowKey}
                                        columns={columns}
                                        row={tr}
                                        rowIndex={tr_i}
                                        showCheckBox={showRemoveButton}
                                        checked={this.state.checkedKeys.includes(tr.rowKey)}
                                        onChecked={this.rowChecked}
                                        controlSize={controlSize}
                                        exportFormMethods={this.exportFormMethods}
                                        onChange={this.methods.oneControlChange}
                                        afterItemsRendered={this.afterItemsRendered}
                                        momentFormat={momentFormat}
                                        booleanToNumber={booleanToNumber}></RowForm>
                                ))}
                            </tbody>
                        );
                    }}
                </ZmultiRowBaseTable>
            </div>
        );
    }
    loadingRef = React.createRef();
    methods = {
        //手动显示loading
        showLoading: (show) => {
            this.loadingRef.current && this.loadingRef.current.methods.showLoading(show);
        },
        getFormFieldsValue: (isValid) => this.methods.validateFormFields(isValid, true),
        validateFormFields: (isValid, returnValue) => {
            if (!this.state.dataSource.length) {
                return isValid === 'asyncValid' ? Promise.resolve({}) : true;
            }
            if (isValid === 'asyncValid') {
                const rows = [...this.state.dataSource];
                const values = [];
                const firtRow = rows.shift();
                let pro = this.formMethodsGather[firtRow.rowKey].methods.getFieldsValue(isValid);
                pro = pro.then((value) => {
                    values.push(this.getRealValue(firtRow, value));
                });
                while (rows.length) {
                    const row = rows.shift();
                    pro = pro.then(() =>
                        this.formMethodsGather[row.rowKey].methods.getFieldsValue(isValid).then((value) => {
                            values.push(this.getRealValue(row, value));
                        }),
                    );
                }
                return pro.then(() => (returnValue ? values : undefined));
            }
            const values = [];
            for (let index = 0; index < this.state.dataSource.length; index++) {
                const row = this.state.dataSource[index];
                const value = this.formMethodsGather[row.rowKey].methods.getFieldsValue(isValid);
                if (!value) {
                    return false;
                }
                values.push(this.getRealValue(row, value));
            }
            return returnValue ? values : undefined;
        },
        setFormFieldsValue: (value) => {
            console.log(GenNonDuplicateID(5));
            this.hasRenderedForm = this.hasRenderedForm || {};

            const dataSource = (value || this.props.value || []).map((row) => {
                if (!row.rowKey) {
                    row.rowKey = GenNonDuplicateID(5);
                }
                return row;
            });
            Object.keys(this.hasRenderedForm).forEach((key) => {
                if (!dataSource.some((row) => row.rowKey === key)) {
                    delete this.hasRenderedForm[key];
                }
            });
            if (dataSource.length > this.state.dataSource.length) {
                this.methods.showLoading(true);
            }
            this.setState({
                dataSource,
            });
        },
        getFormMethodsGather: () => this.formMethodsGather,
        getInitialFormItems: () => this.columns,
        oneControlChange: debounce(() => {
            if (this.props.onChange) {
                this.state.dataSource.forEach((row) => {
                    const value = this.formMethodsGather[row.rowKey].methods.getFieldsValue();
                    this.getRealValue(row, value);
                });
                this.props.onChange(this.state.dataSource);
            }
        }, 100),
    };
    getRealValue = (row, value) => {
        Object.keys(value).forEach((key) => {
            row[key] = value[key];
        });
        return row;
    };

    rowChecked = (e) => {
        const { checkedKeys } = this.state;
        if (e.target.checked) {
            checkedKeys.push(e.target.rowKey);
        } else {
            const i = checkedKeys.findIndex((key) => key === e.target.rowKey);
            checkedKeys.splice(i, 1);
        }

        this.setState({
            checkedKeys: [...checkedKeys],
            allChecked: checkedKeys.length === this.state.dataSource.length,
        });
    };
    allRowChecked = (e) => {
        if (e.target.checked) {
            this.setState({
                checkedKeys: this.state.dataSource.map((item) => item.rowKey),
                allChecked: e.target.checked,
            });
        } else {
            this.setState({
                checkedKeys: [],
                allChecked: e.target.checked,
            });
        }
    };
    addRow = () => {
        if (typeof this.props.onAdd === 'function') {
            this.props.onAdd();
            this.setState({ allChecked: false });
            return;
        }
        const { dataSource } = this.state;
        const newdataSource = [...dataSource];
        const oneSource = {
            rowKey: GenNonDuplicateID(5),
        };
        newdataSource.push(oneSource);
        this.actionName = 'add';
        this.setState((prevState) => ({
            ...prevState,
            dataSource: newdataSource,
            allChecked: false,
        }));
    };
    removeRow = () => {
        if (!this.state.checkedKeys.length) {
            message.info('请勾选行数据！');
            return;
        }
        const dataSource = this.state.dataSource.filter((item) => !this.state.checkedKeys.includes(item.rowKey));
        this.setState(
            {
                dataSource,
                allChecked: false,
                checkedKeys: [],
            },
            () => {
                this.props.onChange && this.props.onChange(dataSource);
            },
        );
    };
    formMethodsGather = {};
    exportFormMethods = (obj) => {
        this.formMethodsGather = { ...this.formMethodsGather, ...obj };
    };
    hasRenderedForm = {};
    afterItemsRendered = ({ rowKey }) => {
        if (this.actionName === 'add') {
            this.actionName = null;
            const rowValues = this.formMethodsGather[rowKey].methods.getFieldsValue();
            if (Object.keys(rowValues).length) {
                this.props.onChange &&
                    this.props.onChange(
                        this.state.dataSource.map((row) => {
                            if (row.rowKey === rowKey) {
                                return { ...rowValues, rowKey };
                            }
                            return row;
                        }),
                    );
            }
        }
        this.props.oneFormAfterItemsRendered && this.props.oneFormAfterItemsRendered({ rowKey });
        this.hasRenderedForm[rowKey] = true;
        if (Object.keys(this.hasRenderedForm).length >= this.state.dataSource.length) {
            this.methods.showLoading(false);
        }
    };
}

export default ZmultiRowFormControl;
