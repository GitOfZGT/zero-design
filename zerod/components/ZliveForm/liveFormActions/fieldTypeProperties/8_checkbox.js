import React from 'react';
import { getSelectCommonProperties, getMaxSelectProperties } from './3_select';
import { getControl, getOptions } from '../../../Zform/controls';
export default {
    label: '多选框',
    value: 8,
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
            ...getMaxSelectProperties({ itemsRef, controlList, formItemsLinkAction }),
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '多选框',
    //             value: 8,
    //             showKeys: [...commonKeys, ...selectKeys, ...multipleSelectKeys, 'colCount'],
    //             configKeys: [...selectKeys, ...commonConfigKeys, ...multipleSelectKeys, 'colCount'],
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
    //         ...getMaxSelectProperties({ itemsRef, controlList }),
    //     ];
    // },
};
