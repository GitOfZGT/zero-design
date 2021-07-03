import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
export default {
    label: '文书占位',
    value: 20,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'docCode',
                show: false,
                label: '文书模板编码',
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input');
                },
                options: getOptions({ required: true }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '文书占位',
    //             value: 20,
    //             showKeys: [...commonKeys, 'docCode'],
    //             configKeys: [...commonConfigKeys, 'docCode'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'docCode',
    //             show: false,
    //             label: '文书模板编码',
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({ required: true }),
    //         },
    //     ];
    // },
};
