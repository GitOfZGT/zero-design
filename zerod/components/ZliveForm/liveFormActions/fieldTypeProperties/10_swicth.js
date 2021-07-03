import React from 'react';
export default {
    label: '开关',
    value: 10,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '开关',
    //             value: 10,
    //             showKeys: [...commonKeys],
    //             configKeys: [...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [];
    // },
};
