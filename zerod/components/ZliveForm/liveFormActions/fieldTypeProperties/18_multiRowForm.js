import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { getSwitchOpt } from './common';
export default {
    label: '表格多行编辑',
    value: 18,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'getFormDataParams',
                label: '获取表单数据的参数',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('TreeInput', {
                        multiple: false,
                        showBtns: true,
                        canDelete: (states, customInputKeys, index) => states[customInputKeys[0].key] !== 'formCode',
                        inputType: 'coustom',
                        customInputKeys: [
                            { key: 'label', initValue: '' },
                            { key: 'value', initValue: '' },
                        ],
                        children: (states, setStates, customInputKeys, index) =>
                            getControl('Input.Group', {
                                compact: true,
                                style: { width: '100%' },
                                children: (
                                    <>
                                        {getControl('Input', {
                                            style: { width: '50%' },
                                            value: states[customInputKeys[0].key],
                                            onChange: (value) => {
                                                setStates({
                                                    [customInputKeys[0].key]: value,
                                                });
                                            },
                                            size: 'small',
                                            disabled: states[customInputKeys[0].key] === 'formCode',
                                        })}
                                        {getControl('Input', {
                                            style: { width: '50%' },
                                            value: states[customInputKeys[1].key],
                                            onChange: (value) => {
                                                setStates({
                                                    [customInputKeys[1].key]: value,
                                                });
                                            },
                                            size: 'small',
                                        })}
                                    </>
                                ),
                            }),
                    });
                },
                options: getOptions({
                    required: true,
                    initialValue: [{ label: 'formCode', value: '' }],
                    rules: [
                        {
                            validator(rule, value, callback) {
                                if (
                                    Array.isArray(value) &&
                                    value.some((item) => Object.keys(item).some((key) => !item[key]))
                                ) {
                                    return callback('请填写完整！');
                                }
                                return callback();
                            },
                        },
                    ],
                }),
            },
            {
                key: 'showAddButton',
                show: false,
                label: '是否显示添加按钮',
                labelFocused: true,
                ...getSwitchOpt({ initialValue: true }),
            },
            {
                key: 'showRemoveButton',
                show: false,
                label: '是否显示移除按钮',
                labelFocused: true,
                ...getSwitchOpt({ initialValue: true }),
            },
            {
                key: 'formMode',
                label: '编辑模式',
                labelFocused: true,
                show: false,
                render(form, changeFormItems) {
                    return getControl('Radio.Group', {
                        selectList: [
                            {
                                label: '行内编辑',
                                value: 'inline',
                            },
                            { label: '打开编辑', value: 'open' },
                        ],
                    });
                },
                options: getOptions({ required: true, initialValue: 'inline' }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '表格多行编辑',
    //             value: 18,
    //             showKeys: [...commonKeys, 'getFormDataParams', 'showAddButton', 'showRemoveButton', 'formMode'],
    //             configKeys: [...commonConfigKeys, 'getFormDataParams', 'showAddButton', 'showRemoveButton', 'formMode'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'getFormDataParams',
    //             label: '获取表单数据的参数',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('TreeInput', {
    //                     multiple: false,
    //                     showBtns: true,
    //                     canDelete: (states, customInputKeys, index) => {
    //                         return states[customInputKeys[0].key] !== 'formCode';
    //                     },
    //                     inputType: 'coustom',
    //                     customInputKeys: [
    //                         { key: 'label', initValue: '' },
    //                         { key: 'value', initValue: '' },
    //                     ],
    //                     children: (states, setStates, customInputKeys, index) => {
    //                         return getControl('Input.Group', {
    //                             compact: true,
    //                             style: { width: '100%' },
    //                             children: (
    //                                 <>
    //                                     {getControl('Input', {
    //                                         style: { width: '50%' },
    //                                         value: states[customInputKeys[0].key],
    //                                         onChange: (value) => {
    //                                             setStates({
    //                                                 [customInputKeys[0].key]: value,
    //                                             });
    //                                         },
    //                                         size: 'small',
    //                                         disabled: states[customInputKeys[0].key] === 'formCode',
    //                                     })}
    //                                     {getControl('Input', {
    //                                         style: { width: '50%' },
    //                                         value: states[customInputKeys[1].key],
    //                                         onChange: (value) => {
    //                                             setStates({
    //                                                 [customInputKeys[1].key]: value,
    //                                             });
    //                                         },
    //                                         size: 'small',
    //                                     })}
    //                                 </>
    //                             ),
    //                         });
    //                     },
    //                 });
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue: [{ label: 'formCode', value: '' }],
    //                 rules: [
    //                     {
    //                         validator(rule, value, callback) {
    //                             if (
    //                                 Array.isArray(value) &&
    //                                 value.some((item) => {
    //                                     return Object.keys(item).some((key) => !item[key]);
    //                                 })
    //                             ) {
    //                                 return callback('请填写完整！');
    //                             }
    //                             return callback();
    //                         },
    //                     },
    //                 ],
    //             }),
    //         },
    //         {
    //             key: 'showAddButton',
    //             show: false,
    //             label: '是否显示添加按钮',
    //             labelFocused: true,
    //             ...getSwitchOpt({ initialValue: true }),
    //         },
    //         {
    //             key: 'showRemoveButton',
    //             show: false,
    //             label: '是否显示移除按钮',
    //             labelFocused: true,
    //             ...getSwitchOpt({ initialValue: true }),
    //         },
    //         {
    //             key: 'formMode',
    //             label: '编辑模式',
    //             labelFocused: true,
    //             show: false,
    //             render(form, changeFormItems) {
    //                 return getControl('Radio.Group', {
    //                     selectList: [
    //                         {
    //                             label: '行内编辑',
    //                             value: 'inline',
    //                         },
    //                         { label: '打开编辑', value: 'open' },
    //                     ],
    //                 });
    //             },
    //             options: getOptions({ required: true, initialValue: 'inline' }),
    //         },
    //     ];
    // },
};
