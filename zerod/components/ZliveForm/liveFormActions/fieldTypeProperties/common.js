import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import ZselectInput from '../../liveFormControls/ZselectInput';
import { Icon, Tooltip, Modal, message } from 'antd';
import RequestConfigBtn from '../../liveFormControls/RequestConfigBtn';

//日期/时间的格式
export const dateFormats = {
    'YYYY-wo': 'WeekPicker',
    YYYY: 'YearPicker',
    'YYYY-MM': 'MonthPicker',
    'YYYY-MM-DD': 'DatePicker',
    'YYYY-MM-DD HH': 'DatePicker',
    'YYYY-MM-DD HH:mm': 'DatePicker',
    'YYYY-MM-DD HH:mm:ss': 'DatePicker',
    'YYYY-MM-DD h:mm a': 'DatePicker',
    'YYYY-MM-DD h:mm:ss a': 'DatePicker',
    'YYYY-MM-DD - YYYY-MM-DD': 'RangePicker',
    'YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm': 'RangePicker',
    'YYYY-MM-DD HH:mm:ss - YYYY-MM-DD HH:mm:ss': 'RangePicker',
    'HH:mm': 'TimePicker',
    'HH:mm:ss': 'TimePicker',
    'h:mm a': 'TimePicker',
    'h:mm:ss a': 'TimePicker',
    'HH:mm - HH:mm': 'TimeRange',
    'HH:mm:ss - HH:mm:ss': 'TimeRange',
};

export function getCorresFormItem({ key, label, initialValue, ...others }) {
    return {
        key,
        label,
        show: false,
        labelFocused: true,
        ...others,
        render(form, changeFormItems) {
            return getControl('TreeInput', {
                multiple: false,
                showBtns: false,
                inputType: 'coustom',
                customInputKeys: [
                    { key: 'label', initValue: '' },
                    { key: 'value', initValue: '' },
                ],
                children: (states, setStates, customInputKeys) =>
                    getControl('Input.Group', {
                        compact: true,
                        style: { width: '100%' },
                        children: (
                            <>
                                {getControl('Input', {
                                    style: { width: '50%' },
                                    value: states[customInputKeys[0].key],
                                    onChange: (value) => {
                                        setStates({
                                            [customInputKeys[0].key]: value,
                                        });
                                    },
                                    size: 'small',
                                    disabled: true,
                                })}
                                {getControl('Input', {
                                    style: { width: '50%' },
                                    value: states[customInputKeys[1].key],
                                    onChange: (value) => {
                                        setStates({
                                            [customInputKeys[1].key]: value,
                                        });
                                    },
                                    size: 'small',
                                })}
                            </>
                        ),
                    }),
            });
        },
        options: getOptions({
            required: true,
            initialValue,
        }),
    };
}
//填写是否...的控件
export const getSwitchOpt = (options = {}, getProps) => ({
    render(form, changeFormItems) {
        return getControl('Switch', getProps && getProps(form, changeFormItems));
    },
    options: getOptions({
        required: true,
        initialValue: true,
        normalize(value, prevValue, allValues) {
            return Boolean(value);
        },
        valuePropName: 'checked',
        ...options,
    }),
});
//处理ZselectInput的值的验证规则
export const urlRules = function (keys = []) {
    return [
        {
            validator: (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                const hasError = keys.some((key) => value[key] === undefined || !value[key].toString().trim());
                if (hasError) {
                    return callback(new Error('有未填写的值'));
                }
                callback();
            },
        },
    ];
};

//填写method和url的控件
export function getMehtodWithUrlControl({
    key,
    label,
    methodKey,
    urlKey,
    initialValue,
    urlMethodList,
    showRequestConfig = true,
}) {
    return {
        key,
        label,
        show: false,
        labelFocused: true,
        render(form, changeFormItems) {
            return (
                <ZselectInput
                    leftSpan={6}
                    centerSpan={15}
                    rightSpan={null}
                    selectList={(urlMethodList || ['post', 'get']).map((m) => ({ label: m, value: m }))}
                    valueKey={{ left: methodKey, center: urlKey }}
                    leftPlaceholde="请求方式"
                    centerPlaceholder="请求地址"
                    customControls={
                        showRequestConfig
                            ? [
                                  {
                                      key: 'requestConfig',
                                      span: 3,
                                      render: (value, item, customChange) => (
                                          <RequestConfigBtn
                                              value={value[item.key]}
                                              onChange={(val) => {
                                                  customChange(val, item.key);
                                              }}></RequestConfigBtn>
                                      ),
                                  },
                              ]
                            : []
                    }
                />
            );
        },
        options: getOptions({
            required: true,
            initialValue,
            rules: urlRules([methodKey, urlKey]),
        }),
    };
}

export function getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems, form) {
    const inputOpt = {
        disabled: keyDisabledRef.current,
        onBlur(e) {
            const fieldType = form.getFieldValue('fieldType');
            if (fieldType === 15 && !e.target.value.match(/Sign$/g)) {
                //电子签名的fieldKey自动添加Sign后缀
                form.setFieldsValue({
                    fieldKey: `${e.target.value}Sign`,
                });
            }
        },
    };
    if (isUpdateRef.current) {
        inputOpt.addonAfter = (
            <Tooltip title={`${inputOpt.disabled ? '开启' : '关闭'}修改key`}>
                <i
                    className="zero-icon zerod-chushihualiuchengshitu z-fieldKey-lock"
                    onClick={() => {
                        const doChange = () => {
                            keyDisabledRef.current = !keyDisabledRef.current;
                            changeFormItems(
                                [
                                    {
                                        key: 'fieldKey',
                                        show: true,
                                        newItem: {
                                            control: getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems, form),
                                        },
                                    },
                                ],
                                true,
                            );
                        };
                        if (keyDisabledRef.current) {
                            Modal.confirm({
                                title: '提醒',
                                content: '如果修改了字段key,有可能会影响key相关的内容,是否继续?',
                                onOk: doChange,
                            });
                        } else {
                            doChange();
                        }
                    }}
                />
            </Tooltip>
        );
    }
    return getControl('Input', inputOpt);
}
