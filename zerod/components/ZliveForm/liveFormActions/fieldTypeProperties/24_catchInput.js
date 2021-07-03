import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';

export default {
    label: '承接值控件', //控件类型名称
    value: 24, //类型值
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'catchKey',
                label: '承接值的来源key',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input');
                },
                options: getOptions({ required: true, initialValue: null }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '承接值控件', //控件类型名称
    //             value: 24, //类型值
    //             showKeys: [...commonKeys, ...inputKeys], //要显示的控件属性
    //             configKeys: [...inputKeys, ...commonConfigKeys], //保存时哪些要转成config的属性
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'catchKey',
    //             label: '承接值的来源key',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({ required: true, initialValue: null }),
    //         },
    //     ];
    // },
};
