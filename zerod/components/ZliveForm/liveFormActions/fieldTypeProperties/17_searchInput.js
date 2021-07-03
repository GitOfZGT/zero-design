import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { getSelectionProperties, getSelectListFieldNamesProperties, getNotFoundContentProperties } from './3_select';

export default {
    label: '搜索框',
    value: 17,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [
            {
                key: 'valueParamName',
                label: '输入框的值映射给请求地址的参数名',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input', { addonBefore: 'value' });
                },
                options: getOptions({
                    required: true,
                    initialValue: '',
                }),
            },
            {
                key: 'inputValueKeyName',
                label: '搜索到的结果映射给输入框值的键名',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input', { addonAfter: 'inputValue' });
                },
                options: getOptions({
                    required: false,
                    initialValue: '',
                }),
            },
            ...getSelectionProperties({ itemsRef, controlList }),
            ...getSelectListFieldNamesProperties({ itemsRef, controlList }),
            ...getNotFoundContentProperties({ itemsRef, controlList }),
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '搜索框',
    //             value: 17,
    //             showKeys: [...commonKeys, ...inputSearchKeys],
    //             configKeys: [...commonConfigKeys, ...inputSearchKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'valueParamName',
    //             label: '输入框的值映射给请求地址的参数名',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input', { addonBefore: 'value' });
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue: '',
    //             }),
    //         },
    //         {
    //             key: 'inputValueKeyName',
    //             label: '搜索到的结果映射给输入框值的键名',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input', { addonAfter: 'inputValue' });
    //             },
    //             options: getOptions({
    //                 required: false,
    //                 initialValue: '',
    //             }),
    //         },
    //         ...getSelectionProperties({ itemsRef, controlList }),
    //         ...getSelectListFieldNamesProperties({ itemsRef, controlList }),
    //         ...getNotFoundContentProperties({ itemsRef, controlList }),
    //     ];
    // },
};
