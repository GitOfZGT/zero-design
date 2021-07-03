import React from 'react';
import { getSelectCommonProperties } from './3_select';
import { getControl, getOptions } from '../../../Zform/controls';
export default {
    label: '单选框',
    value: 9,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [
            ...getSelectCommonProperties({ itemsRef, controlList, formItemsLinkAction }),
            {
                key: 'colCount',
                show: false,
                label: '每列选项数量',
                labelFocused: true,
                render() {
                    return getControl('InputNumber');
                },
                options: getOptions({
                    required: true,
                    initialValue: 1,
                }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '单选框',
    //             value: 9,
    //             showKeys: [...commonKeys, ...selectKeys, 'colCount'],
    //             configKeys: [...selectKeys, ...commonConfigKeys, 'colCount'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         ...getSelectCommonProperties({ itemsRef, controlList }),
    //         {
    //             key: 'colCount',
    //             show: false,
    //             label: '每列选项数量',
    //             labelFocused: true,
    //             render() {
    //                 return getControl('InputNumber');
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue: 1,
    //             }),
    //         },
    //     ];
    // },
};
