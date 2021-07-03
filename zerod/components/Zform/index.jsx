import React from 'react';
import { Form, Modal, Input, Button, Row, Col, message, ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import PropTypes from 'prop-types';
import { const_initItems, const_execAsync, const_changeFormItems } from '../constant';
import ColFormItem from './ColFormItem';
import { dataType, turnLabelOrValue, GenNonDuplicateID } from '../zTool';
import moment from 'moment';
import classNames from 'classnames';
import './style.scss';
export const Zform = Form.create()(
    class extends React.PureComponent {
        static propTypes = {
            className: PropTypes.string,
            labelLayout: PropTypes.string, //'horizontal'|'vertical' | 	inline
            items: PropTypes.arrayOf(PropTypes.object),
            getFormInstance: PropTypes.func,
            onSubmit: PropTypes.func,
            onValidated: PropTypes.func, //表单验证之后,调用onSubmit之前
            formDefaultValues: PropTypes.object, //values 替代 formDefaultValues；相当于 formDefaultValues 改名为 values
            values: PropTypes.object,
            submitBtnName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
            submitMsg: PropTypes.any,
            defaultSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
            submitBtnRender: PropTypes.func,
            afterItemsRendered: PropTypes.func, // 表单控件渲染完的回调
            colContentRender: PropTypes.func, //每个col内除了控件还可插入其他内容
            otherForms: PropTypes.func, // 取得其他表单对象
            confirm: PropTypes.object, // antd 的 modal 参数
            // initAnimation: PropTypes.bool,
            momentFormat: PropTypes.bool,
            booleanToNumber: PropTypes.bool,
            controlSize: PropTypes.string,
            excludeHideValue: PropTypes.bool, //onSubmit的values是否不包含隐藏控件的值
            excludeHideValid: PropTypes.bool, //触发onSubmit后是否不验证隐藏控件的值
            hiddenItemFirstRendering: PropTypes.bool, //默认隐藏的控件是否初始就渲染
            onlySetCurrentValues: PropTypes.bool, //setFieldsValue时 是否 只对当前form设置值，排除otherForms方法的其他form
        };
        static defaultProps = {
            onlySetCurrentValues: false,
            excludeHideValue: true,
            excludeHideValid: true,
            hiddenItemFirstRendering: false,
            confirm: {},
            items: [
                {
                    lable: '字段名',
                    key: 'name',
                    options: {},
                    render: (form, panel) => <Input />,
                },
            ],
            submitMsg: '点击确定按钮提交数据',
            defaultSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
            submitBtnName: '保存',
            labelLayout: 'vertical',
            // initAnimation: true,
            momentFormat: false,
            booleanToNumber: true,
            controlSize: 'default',
        };

        state = {
            items: [],
            saveSettingValues: {},
        };
        formkey = GenNonDuplicateID();
        allAsync = [];

        form = {
            ...this.props.form,
            zformItems: [],
            saveFieldOptions: {},
            saveOptionsMapKey: {},
            getAsyncQueue: () => this.allAsync,
            saveSettingValues: {},
        };
        prevPropsForm = {};
        prevStateItems = [];
        methods = {
            getForms: () => {
                const forms = dataType.isFunction(this.props.otherForms)
                    ? this.props.otherForms(this.form).concat([this.form])
                    : [this.form];
                return forms;
            },
            getFieldsValue: (isValid, query) => {
                const forms = this.methods.getForms();
                let formsValues = [];
                const valideds = forms.map((form) => {
                    //保存的对应key的选项数据
                    const saveFieldOptions = form.saveFieldOptions;
                    const saveOptionsMapKey = form.saveOptionsMapKey;
                    // console.log("--form--",form)
                    let valided = true;
                    const otherFormItems = this.props.getOtherFormItems ? this.props.getOtherFormItems() : [];
                    const formitems = form.zformItems.concat(otherFormItems);
                    const filterItems = [];
                    const hiddenRenderingItems = [];

                    formitems.forEach((item) => {
                        const hiddenRendering = Object.prototype.hasOwnProperty.call(item, 'hiddenRendering')
                            ? !!item.hiddenRendering
                            : this.props.hiddenItemFirstRendering;
                        if (hiddenRendering) {
                            hiddenRenderingItems.push(item);
                        }
                        if (this.props.excludeHideValid) {
                            if (item.ref.current.itemShowStatus) {
                                filterItems.push(item);
                            }
                        } else {
                            filterItems.push(item);
                        }
                    });

                    const fieldNames = filterItems.map((item) => {
                        return item.key;
                    });
                    let validPromise = null;
                    if (isValid) {
                        if (isValid === 'asyncValid') {
                            //异步验证
                            validPromise = new Promise((resolve, reject) => {
                                form.validateFields(fieldNames, (err) => {
                                    if (err) {
                                        reject(err);
                                        return;
                                    }
                                    resolve();
                                });
                            });
                        } else {
                            form.validateFields(fieldNames, (err) => {
                                if (err) {
                                    valided = false;
                                    return;
                                }
                            });
                        }
                    }
                    const getEndValues = () => {
                        const currentValues = form.getFieldsValue(
                            this.props.excludeHideValue
                                ? [...fieldNames, ...hiddenRenderingItems.map((item) => item.key)]
                                : null,
                        );
                        const newValues = this.methods.getOneFormValue(
                            currentValues,
                            saveFieldOptions,
                            saveOptionsMapKey,
                            form.zformItems,
                        );
                        return {
                            ...newValues,
                            ...(dataType.isObject(query) ? query : {}),
                        };
                    };
                    if (validPromise) {
                        return new Promise((resolve, reject) => {
                            validPromise
                                .then(() => {
                                    resolve(getEndValues());
                                })
                                .catch(reject);
                        });
                    }

                    formsValues.push(getEndValues());
                    return valided;
                });
                if (isValid === 'asyncValid') {
                    //异步验证
                    const endPromise = new Promise((resolve, reject) => {
                        const otherValues = this.props.getOtherFieldsValue
                            ? this.props.getOtherFieldsValue(isValid, formsValues)
                            : Promise.resolve({});
                        otherValues
                            .then((ov) => {
                                return Promise.all(valideds)
                                    .then((validValues) => {
                                        formsValues = validValues.length > 1 ? validValues : validValues[0];
                                        if (dataType.isObject(ov) && Object.keys(ov).length) {
                                            if (Array.isArray(formsValues)) {
                                                formsValues.push(ov);
                                            } else {
                                                Object.keys(ov).forEach((key) => {
                                                    formsValues[key] = ov[key];
                                                });
                                            }
                                        }
                                        resolve(formsValues);
                                    })
                                    .catch(() => {
                                        message.error('表单未通过验证,请检查');
                                        reject();
                                    });
                            })
                            .catch(reject);
                    });
                    return endPromise;
                }
                //有一个验证失败，就阻止
                if (valideds.some((valid) => !valid)) {
                    message.error('表单未通过验证,请检查');
                    return false;
                }
                const otherValues = this.props.getOtherFieldsValue
                    ? this.props.getOtherFieldsValue(isValid, formsValues)
                    : {};
                const lastValues = formsValues.length > 1 ? formsValues : formsValues[0];
                if (dataType.isObject(otherValues) && Object.keys(otherValues).length) {
                    if (Array.isArray(lastValues)) {
                        lastValues.push(otherValues);
                    } else {
                        Object.keys(otherValues).forEach((key) => {
                            lastValues[key] = otherValues[key];
                        });
                    }
                } else if (!otherValues) {
                    return false;
                }
                return lastValues;
            },
            treatValue: ({ key, value, formItems }) => {
                if (value !== undefined) {
                    let newValue = value;
                    if (this.props.momentFormat) {
                        const currentItem = formItems.find((item) => item.key === key);
                        if (currentItem && currentItem.format) {
                            const toMoment = (val, format) => {
                                return moment(val, format);
                            };
                            if (dataType.isArray(value)) {
                                newValue = value.map((val) => {
                                    return val ? toMoment(val, currentItem.format) : undefined;
                                });
                            } else {
                                newValue = value ? toMoment(value, currentItem.format) : undefined;
                            }
                        } else {
                            newValue = value;
                        }
                    }
                    return newValue;
                }
            },
            setFieldsValue: (vals) => {
                const values = vals || this.props.values || this.props.formDefaultValues;
                if (values) {
                    const saveSettingValues = { ...(this.state.saveSettingValues || {}), ...(values || {}) };
                    this.setState({
                        saveSettingValues,
                    });
                }
                const forms = !this.props.onlySetCurrentValues ? this.methods.getForms() : [this.form];
                const otherFormItems = (this.props.getOtherFormItems && this.props.getOtherFormItems()) || [];
                forms.forEach((form) => {
                    const formItems = form.zformItems.concat(otherFormItems);
                    if (values && formItems.length) {
                        const newValues = {};
                        formItems.forEach((field) => {
                            const key = field.key;
                            const value = values[key];
                            if (value !== undefined) {
                                newValues[key] = this.methods.treatValue({ key, value, formItems });
                            }
                        });
                        const allKeys = Object.keys(newValues);
                        if (allKeys.length) {
                            console.log(newValues, '----0');
                            form.setFieldsValue(newValues);
                        }
                    }
                });
            },
            setFields: (vals) => {
                const values = vals;
                const forms = this.methods.getForms();
                const otherFormItems = this.props.getOtherFormItems ? this.props.getOtherFormItems() : [];
                forms.forEach((form) => {
                    const formItems = form.zformItems.concat(otherFormItems);
                    if (values && formItems.length) {
                        const newValues = {};
                        formItems.forEach((field) => {
                            const key = field.key;
                            const fieldValue = values[key];
                            if (fieldValue !== undefined) {
                                newValues[key] = fieldValue;
                                const value = fieldValue.value;

                                if (value !== undefined) {
                                    newValues[key].value = this.methods.treatValue({ key, value, formItems });
                                }
                            }
                        });
                        const allKeys = Object.keys(newValues);
                        if (allKeys.length) {
                            form.setFields(newValues);
                        }
                    }
                });
            },
            getOneFormValue: (values, saveFieldOptions, saveOptionsMapKey, items) => {
                const newValues = {};
                const otherFormItems = this.props.getOtherFormItems ? this.props.getOtherFormItems() : [];
                const formItems = (items || this.state.items).concat(otherFormItems);
                if (dataType.isObject(values)) {
                    Object.keys(values).forEach((key) => {
                        if (this.props.excludeHideValue) {
                            //不包含隐藏并且非强制渲染的控件的值
                            const hideItem = formItems.some((item) => {
                                const hiddenRendering = item.hasOwnProperty('hiddenRendering')
                                    ? !!item.hiddenRendering
                                    : this.props.hiddenItemFirstRendering;
                                return item.key === key && !item.ref.current.itemShowStatus && !hiddenRendering;
                            });

                            if (hideItem) {
                                return;
                            }
                        }
                        const isNotFormItem = formItems.find(
                            (item) => item.key === key && item.isFormItem !== undefined && !item.isFormItem,
                        );
                        if (isNotFormItem) {
                            return;
                        }
                        if (dataType.isString(values[key])) {
                            //字符串类型的值去掉首尾空格
                            newValues[key] = values[key].trim();
                            //凡是只有%_的都会转义
                            const hasSyml = newValues[key].match(/^[\%\_]+$/g);
                            if (hasSyml) {
                                //转义通配符% _
                                hasSyml.forEach((syml) => {
                                    newValues[key] = newValues[key].replace(syml, `\\${syml}`);
                                });
                            }
                        } else if (this.props.momentFormat) {
                            //如果需要把moment对象格式化对应的format
                            const formating = (val) => {
                                if (dataType.isObject(val) && val._isAMomentObject) {
                                    const currentItem = formItems.find((item) => item.key === key);
                                    return val.format(currentItem.format);
                                }
                                return val;
                            };
                            if (dataType.isArray(values[key])) {
                                newValues[key] = values[key].map((val) => formating(val));
                            } else {
                                newValues[key] = formating(values[key]);
                            }
                        } else if (this.props.booleanToNumber && dataType.isBoolean(values[key])) {
                            newValues[key] = Number(values[key]);
                        } else {
                            newValues[key] = values[key];
                        }
                        if (
                            (newValues[key] !== null &&
                                newValues[key] !== undefined &&
                                !Array.isArray(newValues[key])) ||
                            (Array.isArray(newValues[key]) && newValues[key].length)
                        ) {
                            const options = (saveFieldOptions || {})[key] || [];
                            const mapKeys = {
                                label: 'label',
                                value: 'value',
                                children: 'children',
                                ...(saveOptionsMapKey[key] || {}),
                            };
                            const currentLabel = turnLabelOrValue(options, newValues[key], {
                                src: mapKeys.value,
                                dist: mapKeys.label,
                            });
                            const labelVal =
                                (Array.isArray(currentLabel) && currentLabel.length) ||
                                (!Array.isArray(currentLabel) && currentLabel)
                                    ? currentLabel
                                    : this.state.saveSettingValues[`${key}Label`];
                            if (labelVal) {
                                newValues[`${key}Label`] = labelVal;
                            }
                        }
                    });
                }
                return newValues;
            },
            onSubmit: (e, query) => {
                e.preventDefault();
                e.stopPropagation();
                const forms = this.methods.getForms();
                if (
                    forms.some((form) => {
                        return form.zformItems.some((item) => {
                            if (item.ref.current && item.ref.current.itemShowStatus && item.ref.current.state.loading) {
                                console.log(item);
                            }
                            return (
                                item.ref.current && item.ref.current.itemShowStatus && item.ref.current.state.loading
                            );
                        });
                    })
                ) {
                    message.error('异步处理未完成，请稍后重试！');
                    return;
                }
                const validPromise = this.methods.getFieldsValue('asyncValid', query);
                validPromise
                    .then((newValues) => {
                        let pipe = Promise.resolve();
                        if (typeof this.props.onValidated === 'function') {
                            const forms = dataType.isFunction(this.props.otherForms)
                                ? this.props.otherForms(this.form).concat([this.form])
                                : [this.form];
                            const returned = this.props.onValidated({ forms, values: newValues });
                            if (dataType.isPromise(returned)) {
                                pipe = returned;
                            } else if (dataType.isBoolean(returned) && !returned) {
                                return;
                            } else if (dataType.isObject(returned)) {
                                if (dataType.isObject(newValues)) {
                                    newValues = { ...newValues, ...returned };
                                } else if (dataType.isArray(newValues)) {
                                    newValues.push(returned);
                                }
                            }
                        }
                        pipe.then((returned) => {
                            if (dataType.isBoolean(returned) && !returned) {
                                return;
                            } else if (dataType.isObject(returned)) {
                                if (dataType.isObject(newValues)) {
                                    newValues = { ...newValues, ...returned };
                                } else if (dataType.isArray(newValues)) {
                                    newValues.push(returned);
                                }
                            }
                            // console.log(newValues, 'newValues');
                            const { onOk, content, show, ...others } = this.props.confirm;
                            //submitMsg本可以弃掉，这里为了兼容，confirm的参数可以代替submitMsg
                            if (
                                (dataType.isBoolean(show) && show) ||
                                (this.props.submitMsg && !dataType.isBoolean(show))
                            ) {
                                Modal.confirm({
                                    title: '确定好提交了吗?',
                                    content: content || this.props.submitMsg,
                                    onOk: (e) => {
                                        return this.props.onSubmit ? this.props.onSubmit(newValues) : Promise.resolve();
                                    },
                                    ...others,
                                });
                            } else {
                                this.props.onSubmit && this.props.onSubmit(newValues);
                            }
                        });
                    })
                    .catch((res) => {
                        if (res) {
                            console.error(res);
                        }
                    });
            },
            changeFormItems: (newItems, part = false, callback) => {
                const_changeFormItems.call(this, newItems, part, callback);
            },
            getInsideItems: () => {
                return this.state.items;
            },
        };
        setFieldsValue(vals) {
            this.methods.setFieldsValue(vals);
        }
        execAsync(newItems) {
            const formItems = Array.isArray(newItems) ? newItems : this.props.items;
            if (!formItems.length) {
                this.setState({
                    items: formItems,
                });
                return;
            }
            const_initItems.call(this, formItems, this.form, this.methods.changeFormItems, () => {
                const_execAsync.call(this, (...rest) => {
                    this.form.formReady = true;
                    this.props.afterItemsRendered && this.props.afterItemsRendered(...rest);
                });
            });
        }
        componentDidMount() {
            this.setNewForm();
            this.execAsync();
        }
        componentDidUpdate(prevProps, prevState) {
            if (this.props.form !== prevProps.form) {
                this.setNewForm();
            }
            if (this.props.items !== prevProps.items && !this.allAsync.length) {
                this.execAsync();
            }
            if (
                (this.props.values !== prevProps.values ||
                    this.props.formDefaultValues !== prevProps.formDefaultValues) &&
                !this.allAsync.length
            ) {
                this.setFieldsValue();
            }
        }
        componentWillUnmount() {
            //组件卸载标识，用在异步回调阻止任何setState操作
            this.unmounted = true;
        }
        onFirstRender = (item) => {
            const val = this.methods.treatValue({
                key: item.key,
                value: this.state.saveSettingValues[item.key],
                formItems: this.state.items,
            });

            if (val !== undefined && val !== null) {
                this.form.setFieldsValue({
                    [item.key]: val,
                });
            }
        };
        setNewForm = () => {
            if (
                this.props.form !== this.prevPropsForm ||
                this.state.items !== this.prevStateItems ||
                this.state.saveSettingValues !== this.prevSettingValues
            ) {
                this.form = {
                    ...this.props.form,
                    zformItems: this.state.items,
                    saveFieldOptions: this.form.saveFieldOptions,
                    saveOptionsMapKey: this.form.saveOptionsMapKey,
                    getAsyncQueue: () => this.allAsync,
                    saveSettingValues: this.state.saveSettingValues || {},
                };
                this.prevSettingValues = this.state.saveSettingValues;
                this.prevPropsForm = this.props.form;
                this.prevStateItems = this.state.items;
                this.props.getFormInstance && this.props.getFormInstance(this.form, this.methods);
            }
        };
        getAnyMethods = () => {
            return this.methods;
        };
        getFormItems = () => {
            this.setNewForm();
            const formItems = this.state.items.map((item, i) => {
                const colItem = (
                    <ColFormItem
                        formkey={this.formkey}
                        hiddenItemFirstRendering={this.props.hiddenItemFirstRendering}
                        key={item.key}
                        valueLabel={this.state.saveSettingValues[`${item.key}Label`]}
                        colContentRender={this.props.colContentRender}
                        loading={item.loading}
                        form={this.form}
                        changeFormItems={this.methods.changeFormItems}
                        item={item}
                        ref={item.ref}
                        labelLayout={this.props.labelLayout}
                        getInsideItems={this.methods.getInsideItems}
                        controlSize={this.props.controlSize}
                        onFirstRender={this.onFirstRender}
                        getAnyMethods={this.getAnyMethods}
                    />
                );
                return colItem;
            });
            return formItems;
        };
        render() {
            const { submitBtnName, className, style, submitBtnRender, labelLayout, controlSize, children } = this.props;
            if (typeof children === 'function') {
                return this.setAntdConfigProvider(children(this));
            }
            const items = this.getFormItems();
            const wrapperClassname = classNames('z-form', className || '');
            return this.setAntdConfigProvider(
                <Form onSubmit={this.methods.onSubmit} className={wrapperClassname} style={style}>
                    <Row type="flex" className={`z-form-row z-form-label-${labelLayout} z-form-control-${controlSize}`}>
                        {items}
                    </Row>
                    {typeof submitBtnRender === 'function' ? (
                        submitBtnRender(this.methods.onSubmit, this.props, this.methods)
                    ) : submitBtnName ? (
                        <div
                            className="z-text-center z-padding-15"
                            style={this.props.labelLayout === 'inline' ? { marginTop: '-15px' } : null}>
                            <Button type="primary" htmlType="submit" icon="check">
                                {typeof submitBtnName === 'function' ? submitBtnName() : submitBtnName}
                            </Button>
                        </div>
                    ) : null}
                </Form>,
            );
        }
        setAntdConfigProvider(children) {
            return <ConfigProvider locale={zh_CN}>{children}</ConfigProvider>;
        }
    },
);

export default Zform;
