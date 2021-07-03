import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
export default {
    label: '当前登录用户对象',
    value: 22,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'keyString',
                label: '对象里的字段名(A.B.C)',
                labelFocused: true,
                show: false,
                render() {
                    return getControl('Input');
                },
                options: getOptions({
                    required: true,
                    initialValue: 'userDO.userName',
                }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '当前登录用户对象',
    //             value: 22,
    //             showKeys: [...commonKeys, 'keyString'],
    //             configKeys: [...commonConfigKeys, 'keyString'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'keyString',
    //             label: '对象里的字段名(A.B.C)',
    //             labelFocused: true,
    //             show: false,
    //             render() {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue: 'userDO.userName',
    //             }),
    //         },
    //     ];
    // },
};
