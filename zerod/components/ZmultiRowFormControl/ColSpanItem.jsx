import React from 'react';
// import ReactDOM from 'react-dom';
import { Form } from 'antd';
import ZpageLoading from '../ZpageLoading';
import { dataType } from '../zTool';
function itemTostring(item) {
    if (dataType.isObject(item))
        return JSON.stringify({ ...item, control: null, defaultSpan: null, render: null, ref: null, options: null });
    else return '';
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
            newControl = React.cloneElement(control, {
                ...control.props,
                disabled: control.props.disabled !== undefined ? control.props.disabled : !!this.state.item.disabled,
                size: this.props.controlSize,
                onChange: (...rest) => {
                    control.props.onChange && control.props.onChange(...rest);
                    this.props.onChange && this.props.onChange(...rest);
                },
                valueLabel: this.props.valueLabel,
            });
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
        let control = typeof item.control === 'function' ? this.getControl(item.control) : item.control;
        const isFormItem = typeof item.isFormItem === 'boolean' ? item.isFormItem : true;
        let options = null;
        if (isFormItem) {
            options = dataType.isFunction(item.options) ? item.options() : item.options;
            control = this.getInlineControl(control);
            control = getFieldDecorator(item.key, options)(control);
            this.getFormatProp(control);
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
            <div
                className="z-multi-row-colcontrol-wrapper"
                data-item={this.saveItemString}
                ref={(el) => {
                    this.colEL = el;
                }}
                style={{ display: this.itemShowStatus ? '' : 'none' }}>
                {isFormItem ? (
                    <Form.Item label={<span>&nbsp;</span>} className="z-form-item">
                        {loader}
                        {control}
                    </Form.Item>
                ) : (
                    <div>
                        {loader}
                        {control}
                    </div>
                )}
                {dataType.isFunction(this.props.colContentRender)
                    ? this.props.colContentRender(item, this.props.form)
                    : null}
            </div>
        );
    }
    loadingRef = React.createRef();
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
            // if (newState.hasOwnProperty('loading')) {
            //     this.methods.showLoading(newState.loading);
            //     delete newState.loading;
            //     if (Object.keys(newState).length === 0) {
            //         callback && callback();
            //         return;
            //     }
            // }
            if (Object.prototype.hasOwnProperty.call(newState, 'disabled')) {
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
