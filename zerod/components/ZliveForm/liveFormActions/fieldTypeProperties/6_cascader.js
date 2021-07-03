import React from 'react';
import { getSwitchOpt } from './common';
import { getSelectCommonProperties } from './3_select';
//级联的属性
// const cascaderKeys = [...selectKeys, 'changeOnSelect'];
export default {
    label: '级联',
    value: 6,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [
            ...getSelectCommonProperties({ itemsRef, controlList, formItemsLinkAction }),
            {
                key: 'changeOnSelect',
                label: '可选择任意一级',
                labelFocused: true,
                show: false,
                ...getSwitchOpt(),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '级联',
    //             value: 6,
    //             showKeys: [...commonKeys, ...cascaderKeys],
    //             configKeys: [...cascaderKeys, ...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         ...getSelectCommonProperties({ itemsRef, controlList }),
    //         {
    //             key: 'changeOnSelect',
    //             label: '可选择任意一级',
    //             labelFocused: true,
    //             show: false,
    //             ...getSwitchOpt(),
    //         },
    //     ];
    // },
};
