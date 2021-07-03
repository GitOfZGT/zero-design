import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Form } from 'antd';
import ZpageLoading from '../ZpageLoading';
import { const_itemSpan } from '../constant';
import { dataType } from '../zTool';
function itemTostring(item) {
    if (dataType.isObject(item)) {
        return JSON.stringify({ ...item, control: null, defaultSpan: null, render: null, ref: null, options: null });
    }
    return '';
}
class ColFormItem extends React.PureComponent {
    static defaultProps = {
        item: {},
        controlSize: 'default',
        hiddenItemFirstRendering: false,
    };
    itemShowStatus = dataType.isBoolean(this.props.item.show) ? this.props.item.show : true;

    state = {
        loading: this.props.loading,
        item: this.props.item,
        firstShow: this.itemShowStatus
            ? this.itemShowStatus
            : this.props.item.hasOwnProperty('hiddenRendering')
            ? !!this.props.item.hiddenRendering
            : this.props.hiddenItemFirstRendering,
        focus: false,
    };
    // componentDidMount() {
    //     this.methods.showLoading(this.props.loading);
    // }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.item !== prevProps.item) {
            const show = dataType.isBoolean(this.props.item.show) ? this.props.item.show : true;
            this.setState(
                {
                    item: this.props.item,
                    firstShow: this.state.firstShow || show,
                    loading: this.props.loading,
                },
                () => {
                    this.methods.showItem(show);
                },
            );
            // this.methods.showLoading(this.props.loading);
        }
        if (this.state.firstShow !== prevState.firstShow && this.state.firstShow) {
            this.props.onFirstRender && this.props.onFirstRender(this.state.item);
        }
    }
    getInlineControl = (control) => {
        if (React.isValidElement(control)) {
            let newControl = control;
            if (this.props.labelLayout === 'inline') {
                newControl = React.cloneElement(control, {
                    ...control.props,
                    disabled:
                        control.props.disabled !== undefined ? control.props.disabled : !!this.state.item.disabled,
                    placeholder: '',
                    size: this.props.controlSize,
                    valueLabel: this.props.valueLabel,
                    onFocus: (e) => {
                        this.setState({
                            focus: true,
                        });
                        control.props.onFocus && control.props.onFocus(e);
                    },
                    onBlur: (e) => {
                        this.setState({
                            focus: false,
                        });
                        control.props.onBlur && control.props.onBlur(e);
                    },
                });
            } else {
                newControl = React.cloneElement(control, {
                    ...control.props,
                    disabled:
                        control.props.disabled !== undefined ? control.props.disabled : !!this.state.item.disabled,
                    size: this.props.controlSize,
                    valueLabel: this.props.valueLabel,
                });
            }

            return newControl;
        }
        return control;
    };
    disabled = this.props.item.disabled;
    getFormatProp = (control) => {
        if (React.isValidElement(control) && typeof this.props.getInsideItems === 'function') {
            const items = this.props.getInsideItems();
            const currentItem = items.find((item) => item.key === this.state.item.key);
            currentItem.format = control.props.format;
            this.disabled = control.props.disabled;
        }
    };
    saveItemString = itemTostring(this.state.item);
    render() {
        if (!this.state.firstShow) {
            return null;
        }
        const { getFieldDecorator } = this.props.form;
        const { item } = this.state;
        // console.log(typeof item.control, item.key);
        let control = typeof item.control === 'function' ? this.getControl(item.control) : item.control;
        let controlDisabled = true;
        const span = const_itemSpan(control, item.span, item.defaultSpan);
        const isFormItem = typeof item.isFormItem === 'boolean' ? item.isFormItem : true;
        let formItemClassName = item.itemClassName;
        let options = null;
        if (isFormItem) {
            options = dataType.isFunction(item.options) ? item.options() : item.options;
            control = this.getInlineControl(control);
            control = getFieldDecorator(item.key, options)(control);
            if (this.props.labelLayout === 'inline') {
                const labelFocused = (control.props && control.props.disabled) || item.labelFocused;
                const hasvalue =
                    control.props &&
                    control.props.value !== undefined &&
                    control.props.value !== '' &&
                    control.props.value !== null;
                formItemClassName = `${hasvalue || labelFocused ? 'has-value' : ''} ${this.state.focus ? 'focus' : ''}`;
            }
            this.getFormatProp(control);
            controlDisabled = control.props && control.props.disabled;
        }
        const loader = (
            <ZpageLoading
                ref={this.loadingRef}
                showLoading={this.state.loading}
                size="small"
                coverClassName="z-form-item-loading"
            />
        );

        return (
            <Col
                {...span}
                data-formkey={this.props.formkey}
                className={`z-form-item-col-wrapper ${item.className || ''}`}
                data-item={this.saveItemString}
                ref={(el) => {
                    this.colEL = ReactDOM.findDOMNode(el);
                }}
                style={{ display: this.itemShowStatus ? '' : 'none' }}>
                {isFormItem ? (
                    <Form.Item
                        label={
                            item.label ? (
                                item.label
                            ) : (
                                <span style={{ paddingTop: '3px', display: 'inline-block' }}>&nbsp;</span>
                            )
                        }
                        className={`z-form-item ${formItemClassName} ${controlDisabled ? 'has-disabled' : ''} ${
                            (options &&
                                options.rules &&
                                options.rules[0] &&
                                options.rules[0].required &&
                                item.label !== false) ||
                            item.label
                                ? ''
                                : 'hide-label'
                        }`}>
                        {loader}
                        {control}
                    </Form.Item>
                ) : (
                    <div className={this.props.labelLayout === 'inline' ? 'z-margin-bottom-10' : ''}>
                        {loader}
                        {control}
                    </div>
                )}
                {dataType.isFunction(this.props.colContentRender)
                    ? this.props.colContentRender(item, this.props.form)
                    : null}
            </Col>
        );
    }
    getControl = (fn) => {
        let control = fn(
            this.props.form,
            this.props.changeFormItems,
            this.state.item,
            this.props.getAnyMethods ? this.props.getAnyMethods() : {},
        );
        //如果还是function 再一次
        if (typeof control === 'function') {
            control = this.getControl(control);
        }
        return control;
    };
    loadingRef = React.createRef();
    methods = {
        //手动显示loading
        showLoading: (show) => {
            this.setState({
                loading: show,
            });
            // this.loadingRef.current && this.loadingRef.current.methods.showLoading(show);
        },
        //获取当前item对象
        getStateItem: () => this.state.item,
        //手动改变item对象属性
        changeItem: (newItem, callback) => {
            if (dataType.isObject(newItem)) {
                this.setState(
                    {
                        item: { ...this.state.item, ...newItem },
                    },
                    callback,
                );
            } else if (newItem === 'reset') {
                this.setState(
                    {
                        item: this.props.item,
                    },
                    callback,
                );
            }
        },
        //手动控制控件是否显示
        showItem: (show, callback) => {
            this.itemShowStatus = show;
            this.colEL && (this.colEL.style.display = show ? '' : 'none');
            callback && callback();
        },
        updateState: (newState = {}, callback) => {
            let newItem = newState.item;
            if (dataType.isObject(newItem)) {
                newItem = { ...this.state.item, ...newItem };
            } else if (newItem === 'reset') {
                newItem = this.props.item;
            } else {
                newItem = this.state.item;
            }
            let show = dataType.isBoolean(this.itemShowStatus)
                ? this.itemShowStatus
                : dataType.isBoolean(this.props.item.show)
                ? this.props.item.show
                : true;

            if (Object.prototype.hasOwnProperty.call(newState, 'show')) {
                show = newState.show;
            }
            // if (Object.prototype.hasOwnProperty.call(newState, 'loading')) {
            //     this.methods.showLoading(newState.loading);
            //     delete newState.loading;
            //     if (Object.keys(newState).length === 0) {
            //         callback && callback();
            //         return;
            //     }
            // }
            if (
                Object.prototype.hasOwnProperty.call(newState, 'disabled') &&
                newState.disabled !== undefined &&
                newState.disabled !== null
            ) {
                newItem.disabled = newState.disabled;
            }
            this.setState(
                {
                    ...this.state,
                    ...newState,
                    firstShow: this.state.firstShow || show,
                    item: newItem,
                },
                () => {
                    this.methods.showItem(show);
                    callback && callback();
                },
            );
        },
    };
}

export default ColFormItem;
