import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';

import { getSwitchOpt, getMehtodWithUrlControl, getCorresFormItem } from './common';
//input 和 textarea 共有属性
// export const textKeys = [
//     'maxLength',
//     'minLength',
//     'useFrequentWord',
//     'getFrequentWord',
//     'getFrequentWordQuery',
//     'updateFrequentWord',
//     'addFrequentWord',
//     'deleteFrequentWord',
//     'frequentWordFieldNames',
//     'useScanCode',
//     'onlyFromCamera',
// ];
//input 独立属性
// const inputKeys = [...textKeys, 'type'];
export function getInputCommonProperties({ itemsRef, controlList, formItemsLinkAction }) {
    return [
        {
            key: 'useFrequentWord',
            show: false,
            label: '常用语',
            labelFocused: true,
            ...getSwitchOpt({ initialValue: false }, (form, changeFormItems) => ({
                onChange(checked) {
                    formItemsLinkAction({
                        changeFormItems,
                        formItems: itemsRef.current,
                        values: { useFrequentWord: Number(checked) },
                        form,
                        controlList,
                        excludeKeys: [],
                    });
                },
            })),
        },
        getMehtodWithUrlControl({
            key: 'getFrequentWord',
            label: '获取常用语的请求地址',
            methodKey: 'urlMethod',
            urlKey: 'url',
            initialValue: {
                urlMethod: 'post',
                url: '/resource-manager/webapi/preset/getFormPresetInfoById',
            },
        }),
        {
            key: 'getFrequentWordQuery',
            label: '获取常用语的请求参数',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('TreeInput', { multiple: false, labelPlaceholder: 'Key' });
            },
            options: getOptions({
                required: false,
                initialValue: [
                    {
                        label: 'moduleTypeCode',
                        value: 'wsba',
                    },
                    {
                        label: 'moduleCode',
                        value: 'slsp',
                    },
                ],
            }),
        },
        getCorresFormItem({
            key: 'frequentWordFieldNames',
            label: '接口返回数据的映射字段',
            initialValue: [
                { label: 'label', value: 'presetName' },
                { label: 'value', value: 'id' },
                { label: 'children', value: 'children' },
            ],
        }),
        getMehtodWithUrlControl({
            key: 'addFrequentWord',
            label: '添加常用语的请求地址',
            methodKey: 'urlMethod',
            urlKey: 'url',
            initialValue: {
                urlMethod: 'post',
                url: '/resource-manager/webapi/preset/addFormPreset',
            },
        }),
        getMehtodWithUrlControl({
            key: 'updateFrequentWord',
            label: '修改常用语的请求地址',
            methodKey: 'urlMethod',
            urlKey: 'url',
            initialValue: {
                urlMethod: 'post',
                url: '/resource-manager/webapi/preset/updateFormPresetInfo',
            },
        }),
        getMehtodWithUrlControl({
            key: 'deleteFrequentWord',
            label: '删除常用语的请求地址',
            methodKey: 'urlMethod',
            urlKey: 'url',
            initialValue: {
                urlMethod: 'post',
                url: '/resource-manager/webapi/preset/deletePresetInfo',
            },
        }),
        {
            key: 'useScanCode',
            show: false,
            label: '扫码(小程序端)',
            labelFocused: true,
            ...getSwitchOpt({ initialValue: false }, (form, changeFormItems) => ({
                onChange(checked) {
                    formItemsLinkAction({
                        changeFormItems,
                        formItems: itemsRef.current,
                        values: { useScanCode: Number(checked) },
                        form,
                        controlList,
                        excludeKeys: [],
                    });
                },
            })),
        },
        {
            key: 'onlyFromCamera',
            show: false,
            label: '是否只能从相机扫码，不允许从相册选择图片',
            labelFocused: true,
            ...getSwitchOpt({ initialValue: false }),
        },
        {
            key: 'maxLength',
            label: '最大输入长度',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('InputNumber', { min: 0 });
            },
            options: getOptions({ required: false, initialValue: 100 }),
        },
        {
            key: 'minLength',
            label: '最小输入长度',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('InputNumber', { min: 0 });
            },
        },
    ];
}
export default {
    label: '单行输入', //控件类型名称
    value: 1, //类型值
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [
            {
                key: 'type',
                label: '文本类型',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Radio.Group', {
                        selectList: [
                            {
                                label: '文本框',
                                value: 'text',
                            },
                            {
                                label: '密码框',
                                value: 'password',
                            },
                        ],
                        onChange: (e) => {
                            formItemsLinkAction({
                                changeFormItems,
                                formItems: itemsRef.current,
                                values: {
                                    type: e.target.value,
                                    useFrequentWord:
                                        e.target.value === 'password' ? 0 : form.getFieldValue('useFrequentWord'),
                                },
                                form,
                                controlList,
                                excludeKeys: [],
                            });
                        },
                    });
                },
                options: getOptions({ required: true, initialValue: 'text' }),
            },
            ...getInputCommonProperties({ itemsRef, controlList, formItemsLinkAction }),
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '单行输入', //控件类型名称
    //             value: 1, //类型值
    //             showKeys: [...commonKeys, ...inputKeys], //要显示的控件属性
    //             configKeys: [...inputKeys, ...commonConfigKeys], //保存时哪些要转成config的属性
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'type',
    //             label: '文本类型',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Radio.Group', {
    //                     selectList: [
    //                         {
    //                             label: '文本框',
    //                             value: 'text',
    //                         },
    //                         {
    //                             label: '密码框',
    //                             value: 'password',
    //                         },
    //                     ],
    //                     onChange: (e) => {
    //                         formItemsLinkAction({
    //                             changeFormItems,
    //                             formItems: itemsRef.current,
    //                             values: {
    //                                 type: e.target.value,
    //                                 useFrequentWord:
    //                                     e.target.value === 'password' ? 0 : form.getFieldValue('useFrequentWord'),
    //                             },
    //                             form,
    //                             controlList,
    //                             excludeKeys: [],
    //                         });
    //                     },
    //                 });
    //             },
    //             options: getOptions({ required: true, initialValue: 'text' }),
    //         },
    //         ...getInputCommonProperties({ itemsRef, controlList }),
    //     ];
    // },
};
