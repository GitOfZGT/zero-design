import React from 'react';
import { getInputCommonProperties } from './1_input';
// const textarayKeys = [...textKeys];

export default {
    label: '多行输入',
    value: 2,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [...getInputCommonProperties({ itemsRef, controlList, formItemsLinkAction })];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '多行输入',
    //             value: 2,
    //             showKeys: [...commonKeys, ...textarayKeys],
    //             configKeys: [...textarayKeys, ...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [...getInputCommonProperties({ itemsRef, controlList })];
    // },
};
