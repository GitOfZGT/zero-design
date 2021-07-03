import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
// const inputNumberKeys = ['min', 'max', 'step'];
export default {
    label: '数字输入',
    value: 4,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'max',
                label: '最大值',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('InputNumber');
                },
            },
            {
                key: 'min',
                label: '最小值',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('InputNumber');
                },
            },
            {
                key: 'step',
                label: '调节按钮的计数间隔',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('InputNumber', { min: 1 });
                },
                options: getOptions({ required: false, initialValue: 1 }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '数字输入',
    //             value: 4,
    //             showKeys: [...commonKeys, ...inputNumberKeys],
    //             configKeys: [...commonConfigKeys, ...inputNumberKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'max',
    //             label: '最大值',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('InputNumber');
    //             },
    //         },
    //         {
    //             key: 'min',
    //             label: '最小值',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('InputNumber');
    //             },
    //         },
    //         {
    //             key: 'step',
    //             label: '调节按钮的计数间隔',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('InputNumber', { min: 1 });
    //             },
    //             options: getOptions({ required: false, initialValue: 1 }),
    //         },
    //     ];
    // },
};
