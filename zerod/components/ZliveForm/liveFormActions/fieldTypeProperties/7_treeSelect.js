import React from 'react';
import { getSelectCommonProperties } from './3_select';
export default {
    label: '树选择',
    value: 7,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [...getSelectCommonProperties({ itemsRef, controlList, formItemsLinkAction })];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '树选择',
    //             value: 7,
    //             showKeys: [...commonKeys, ...selectKeys],
    //             configKeys: [...selectKeys, ...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [...getSelectCommonProperties({ itemsRef, controlList })];
    // },
};
