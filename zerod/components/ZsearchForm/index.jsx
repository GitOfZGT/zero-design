import React from 'react';
import { Button, Modal, Spin, Badge, Popover } from 'antd';
import PropTypes from 'prop-types';
import Zform from '../Zform';
import { dataType } from '../zTool';
import './style.scss';
export class ZsearchForm extends React.PureComponent {
    static propTypes = {
        hidden: PropTypes.bool,
        labelLayout: PropTypes.string, //'horizontal'|'vertical'
        className: PropTypes.string,
        controlSize: PropTypes.string,
        colFormItems: PropTypes.arrayOf(PropTypes.object), //兼容旧版本，现由items替代
        items: PropTypes.arrayOf(PropTypes.object),
        onSearch: PropTypes.func,
        onReset: PropTypes.func,
        getFormInstance: PropTypes.func,
        exportMethods: PropTypes.func,
        noCollapse: PropTypes.bool,
        defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        formDefaultValues: PropTypes.object,
        values: PropTypes.object,
        collapseCount: PropTypes.number,
        afterItemsRendered: PropTypes.func, // 表单控件渲染完的回调
        initAnimation: PropTypes.bool,
        momentFormat: PropTypes.bool,
        booleanToNumber: PropTypes.bool,
        excludeHideValid: PropTypes.bool,
        noControlBorder: PropTypes.bool,
        searchColConfig: PropTypes.object,
    };
    static defaultProps = {
        excludeHideValid: true,
        defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
        collapseCount: 2,
        noCollapse: false,
        labelLayout: 'vertical',
        initAnimation: true,
        booleanToNumber: true,
        controlSize: 'default',
    };
    state = {
        items: [],
        moreSearchVisible: false,
        loading: false,
        controlValueCount: 0,
    };
    componentDidMount() {
        this.setItems();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.items !== this.props.items || prevProps.colFormItems !== this.props.colFormItems) {
            this.setItems();
        }
    }

    render() {
        const { searchColConfig } = this.props;
        const colConfig = searchColConfig || {};
        let collapse = colConfig.collapse || {};
        collapse = { ...searchColConfig, ...collapse, normal: null, collapse: null };
        return (
            <Zform
                className={`z-search-form ${this.props.noControlBorder ? 'z-no-control-border' : ''}`}
                {...this.props}
                items={this.state.items}
                submitBtnName=""
                onSubmit={this.methods.onSubmit}
                getFormInstance={this.methods.getFormInstance}
                confirm={this.confirm}
                excludeHideValue={false}
                excludeHideValid={this.props.excludeHideValid}
            ></Zform>
        );
    }
    confirm = { show: false };
    setItems = () => {
        const { searchColConfig } = this.props;
        const items = this.props.items || this.props.colFormItems;
        const stateItems = [];
        items.forEach((item, i) => {
            const newItem = { ...item };
            if (this.props.collapseCount - 1 < i && !this.props.noCollapse) {
                newItem.show = false;
            }
            stateItems.push(newItem);
        });
        const colConfig = searchColConfig || {};
        let normal = colConfig.normal || {};
        normal = { ...searchColConfig, ...normal, normal: null, collapse: null };
        let collapse = colConfig.collapse || {};
        collapse = { ...searchColConfig, ...collapse, normal: null, collapse: null };
        stateItems.push({
            ...normal,
            isFormItem: false,
            label: '',
            key: 'search-btns',
            render: () => {
                return (
                    <div className="ant-form-item z-form-item" style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                        {this.props.collapseCount > 0 || this.props.noCollapse ? (
                            <Button type="primary" htmlType="submit">
                                查询
                            </Button>
                        ) : null}
                        {this.methods.showFilterBtn() ? (
                            <Badge count={this.state.controlValueCount}>
                                <Popover
                                    placement="bottom"
                                    title={
                                        <span>
                                            全部查询条件
                                            <span
                                                className="z-search-all-form-close"
                                                onClick={this.methods.closeMoreSearch}
                                            >
                                                x
                                            </span>
                                        </span>
                                    }
                                    overlayClassName="z-search-all-form"
                                    overlayStyle={{ width: '60%' }}
                                    visible={this.state.moreSearchVisible}
                                    content={
                                        <Spin spinning={this.state.loading}>
                                            <ZsearchForm
                                                {...this.props}
                                                getFormInstance={(form, methods) => {
                                                    this.moreSearchForm = form;
                                                    this.moreSearchMethods = methods;
                                                    this.props.getFormInstance &&
                                                        this.props.getFormInstance(form, {
                                                            ...methods,
                                                            setFieldsValue: this.methods.setFieldsValue,
                                                            getFieldsValue: this.methods.getFieldsValue,
                                                            changeFormItems: this.methods.changeFormItems,
                                                            resetSearchFormFields: this.methods.resetSearchFormFields,
                                                        });
                                                }}
                                                exportMethods={() => {}}
                                                noCollapse={true}
                                                onSearch={(newValues) => {
                                                    this.form.setFieldsValue(newValues);
                                                    this.popoverValues = newValues;
                                                    this.methods.setControlValueCount(newValues);
                                                    this.props.onSearch && this.props.onSearch(newValues);
                                                    this.methods.closeMoreSearch();
                                                }}
                                                onReset={(values) => {
                                                    this.methods.setControlValueCount(values);
                                                    this.methods.handleReset();
                                                }}
                                                values={this.state.moreSearchValues}
                                                excludeHideValid={false}
                                                afterItemsRendered={(...rest) => {
                                                    if (!this.firstItemsRendered) {
                                                        this.setState({
                                                            loading: false,
                                                        });
                                                        this.firstItemsRendered = true;
                                                        if (this.changedItems) {
                                                            this.moreSearchMethods &&
                                                                this.moreSearchMethods.changeFormItems(
                                                                    this.changedItems,
                                                                    this.changedPart,
                                                                );
                                                        }
                                                    }
                                                    this.props.afterItemsRendered &&
                                                        this.props.afterItemsRendered(...rest);
                                                }}
                                                noControlBorder={false}
                                                searchColConfig={collapse}
                                            ></ZsearchForm>
                                        </Spin>
                                    }
                                    onVisibleChange={this.methods.handleVisibleChange}
                                    trigger="click"
                                >
                                    <Button type="primary" className={`z-margin-left-10`}>
                                        更多查询
                                    </Button>
                                </Popover>
                            </Badge>
                        ) : null}
                        <Button className={`z-margin-left-10`} onClick={this.methods.handleReset}>
                            重置
                        </Button>
                    </div>
                );
            },
        });
        this.setState({
            items: stateItems,
        });
    };
    methods = {
        showFilterBtn: () => {
            return this.state.items.length - 1 > this.props.collapseCount && !this.props.noCollapse;
        },
        setControlValueCount: (values) => {
            if (values && this.methods.showFilterBtn()) {
                const items = this.props.items || this.props.colFormItems;
                this.setState({
                    controlValueCount: items.filter((item, i) => {
                        if (this.props.collapseCount > 0 && this.props.collapseCount > i) {
                            return false;
                        }
                        const val = values[item.key];
                        return val !== undefined && val !== null && val !== '';
                    }).length,
                });
            }
        },
        handleReset: () => {
            this.popoverValues = {};
            this.methods.resetSearchFormFields();
            const values = this.formMethods.getFieldsValue();
            this.methods.setControlValueCount(values);
            this.props.onReset && this.props.onReset(values);
        },
        resetSearchFormFields: () => {
            this.form.resetFields();
            this.moreSearchForm && this.moreSearchForm.resetFields();
        },
        onSubmit: (values) => {
            const newValues = { ...(this.popoverValues || {}), ...values };
            this.popoverValues = newValues;
            this.methods.setControlValueCount(newValues);
            this.props.onSearch && this.props.onSearch(newValues);
        },
        getFormInstance: (form, methods) => {
            this.form = form;
            this.formMethods = methods;
            this.props.getFormInstance &&
                this.props.getFormInstance(form, {
                    ...methods,
                    setFieldsValue: this.methods.setFieldsValue,
                    getFieldsValue: this.methods.getFieldsValue,
                    changeFormItems: this.methods.changeFormItems,
                    resetSearchFormFields: this.methods.resetSearchFormFields,
                });
        },
        changeFormItems: (newItems, part = false, callback) => {
            const items = this.props.items || this.props.colFormItems;
            this.changedItems = newItems;
            this.changedPart = part;
            let changingItems = null;
            if (dataType.isObject(newItems)) {
                changingItems = { ...newItems };
                const i = items.findIndex((item) => newItems.key === item.key);
                if (this.props.collapseCount - 1 < i && !this.props.noCollapse) {
                    delete changingItems.show;
                }
            } else if (dataType.isArray(newItems)) {
                changingItems = newItems.map((nitem) => {
                    const returnItem = { ...nitem };
                    const i = items.findIndex((item) => nitem.key === item.key);
                    if (this.props.collapseCount - 1 < i && !this.props.noCollapse) {
                        delete returnItem.show;
                    }
                    return returnItem;
                });
            }
            this.formMethods && this.formMethods.changeFormItems(changingItems, part, callback);
            this.moreSearchMethods && this.moreSearchMethods.changeFormItems(newItems, part, callback);
        },
        getFieldsValue: (...rest) => {
            const mainValues = this.formMethods ? this.formMethods.getFieldsValue(...rest) : {};
            const assistantValues = this.moreSearchMethods ? this.moreSearchMethods.getFieldsValue(...rest) : {};
            return { ...mainValues, ...assistantValues };
        },
        setFieldsValue: (...rest) => {
            this.formMethods && this.formMethods.setFieldsValue(...rest);
            this.moreSearchMethods && this.moreSearchMethods.setFieldsValue(...rest);
        },
        openMoreSearch: () => {
            if (this.state.moreSearchVisible) {
                this.setState({
                    moreSearchVisible: false,
                });
                return;
            }
            const newState = {
                moreSearchVisible: true,
                moreSearchValues: { ...(this.popoverValues || {}), ...this.form.getFieldsValue() },
            };
            if (!this.firstItemsRendered) {
                newState.loading = true;
            }
            this.setState(newState);
        },
        closeMoreSearch: (e) => {
            this.setState({
                moreSearchVisible: false,
            });
        },
        handleVisibleChange: (visible) => {
            const newState = {
                moreSearchVisible: visible,
            };
            if (visible) {
                newState.moreSearchValues = { ...(this.popoverValues || {}), ...this.form.getFieldsValue() };
            }
            if (!this.firstItemsRendered) {
                newState.loading = true;
            }

            this.setState(newState);
        },
    };
}
export default ZsearchForm;
