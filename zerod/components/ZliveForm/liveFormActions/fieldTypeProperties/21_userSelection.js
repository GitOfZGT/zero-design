import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { getSwitchOpt } from './common';
export default {
    label: '组织用户选择器',
    value: 21,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'selectionClassify',
                label: '选择内容',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Radio.Group', {
                        selectList: [
                            { label: '用户', value: 'user' },
                            {
                                label: '组织',
                                value: 'organization',
                            },
                        ],
                    });
                },
                options: getOptions({ required: true, initialValue: 'user' }),
            },
            {
                key: 'multiple',
                label: '是否多选',
                show: false,
                labelFocused: true,
                ...getSwitchOpt({ initialValue: false }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '组织用户选择器',
    //             value: 21,
    //             showKeys: [...commonKeys, 'selectionClassify', 'multiple'],
    //             configKeys: [...commonConfigKeys, 'selectionClassify', 'multiple'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'selectionClassify',
    //             label: '选择内容',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Radio.Group', {
    //                     selectList: [
    //                         { label: '用户', value: 'user' },
    //                         {
    //                             label: '组织',
    //                             value: 'organization',
    //                         },
    //                     ],
    //                 });
    //             },
    //             options: getOptions({ required: true, initialValue: 'user' }),
    //         },
    //         {
    //             key: 'multiple',
    //             label: '是否多选',
    //             show: false,
    //             labelFocused: true,
    //             ...getSwitchOpt({ initialValue: false }),
    //         },
    //     ];
    // },
};
