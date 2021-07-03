import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { getSwitchOpt, getMehtodWithUrlControl } from './common';
export default {
    label: '电子签名',
    value: 15,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [
            {
                key: 'isRequstSign',
                label: '是否异步获取签名',
                show: false,
                labelFocused: true,
                ...getSwitchOpt({ initialValue: true }, (form, changeFormItems) => ({
                    onChange(checked) {
                        formItemsLinkAction({
                            changeFormItems,
                            formItems: itemsRef.current,
                            values: { isRequstSign: Number(checked) },
                            form,
                            controlList,
                            excludeKeys: [],
                        });
                    },
                })),
            },
            getMehtodWithUrlControl({
                key: 'getSignUrl',
                label: '获取签名图片(base64)的地址',
                methodKey: 'getSignUrlMethod',
                urlKey: 'getSignUrl',
                initialValue: {
                    getSignUrlMethod: 'post',
                    getSignUrl: '/tibmas2-webapi/api/v1.0/userLogo/getUserLogoByUserId',
                },
            }),
            getMehtodWithUrlControl({
                key: 'setSignUrl',
                label: '提交签名(formData)的地址',
                methodKey: 'setSignUrlMethod',
                urlKey: 'setSignUrl',
                initialValue: {
                    setSignUrlMethod: 'post',
                    setSignUrl: '/tibmas2-webapi/api/v1.0/userLogo/insertUserLogoByFile',
                },
            }),
            {
                key: 'userIdOriginKey',
                label: '获取签名 userId 的来源fieldKey',
                labelFocused: true,
                show: false,
                render(form, changeFormItems) {
                    return getControl('Input');
                },
                options: getOptions({
                    required: true,
                }),
            },
            {
                key: 'useQrcodeToSign',
                label: '启用扫码签名',
                show: false,
                labelFocused: true,
                ...getSwitchOpt({ initialValue: true }, (form, changeFormItems) => ({
                    onChange(checked) {
                        formItemsLinkAction({
                            changeFormItems,
                            formItems: itemsRef.current,
                            values: { useQrcodeToSign: Number(checked) },
                            form,
                            controlList,
                            excludeKeys: [],
                        });
                    },
                })),
            },
            {
                key: 'qrcodeContentUrl',
                label: '扫码后跳转的地址',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input');
                },
                options: getOptions({ required: true, initialValue: '/zhzf/signature' }),
            },
            {
                key: 'commitSignUrl',
                label: '扫码后提交签名的地址',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input');
                },
                options: getOptions({ required: true, initialValue: '/doc-service/web/socket/send/msg' }),
            },
            {
                key: 'useWebsocket',
                label: '启用websocket',
                show: false,
                labelFocused: true,
                ...getSwitchOpt({ initialValue: true }, (form, changeFormItems) => ({
                    onChange(checked) {
                        formItemsLinkAction({
                            changeFormItems,
                            formItems: itemsRef.current,
                            values: { useWebsocket: Number(checked) },
                            form,
                            controlList,
                            excludeKeys: [],
                        });
                    },
                })),
            },
            {
                key: 'websocketUrl',
                label: 'websocket地址',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input');
                },
                options: getOptions({ required: true, initialValue: '/doc-service/websocket' }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '电子签名',
    //             value: 15,
    //             showKeys: [...commonKeys, ...signKeys],
    //             configKeys: [...commonConfigKeys, ...signKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'isRequstSign',
    //             label: '是否异步获取签名',
    //             show: false,
    //             labelFocused: true,
    //             ...getSwitchOpt({ initialValue: true }, (form, changeFormItems) => ({
    //                 onChange(checked) {
    //                     formItemsLinkAction({
    //                         changeFormItems,
    //                         formItems: itemsRef.current,
    //                         values: { isRequstSign: Number(checked) },
    //                         form,
    //                         controlList,
    //                         excludeKeys: [],
    //                     });
    //                 },
    //             })),
    //         },
    //         getMehtodWithUrlControl({
    //             key: 'getSignUrl',
    //             label: '获取签名图片(base64)的地址',
    //             methodKey: 'getSignUrlMethod',
    //             urlKey: 'getSignUrl',
    //             initialValue: {
    //                 getSignUrlMethod: 'post',
    //                 getSignUrl: '/tibmas2-webapi/api/v1.0/userLogo/getUserLogoByUserId',
    //             },
    //         }),
    //         getMehtodWithUrlControl({
    //             key: 'setSignUrl',
    //             label: '提交签名(formData)的地址',
    //             methodKey: 'setSignUrlMethod',
    //             urlKey: 'setSignUrl',
    //             initialValue: {
    //                 setSignUrlMethod: 'post',
    //                 setSignUrl: '/tibmas2-webapi/api/v1.0/userLogo/insertUserLogoByFile',
    //             },
    //         }),
    //         {
    //             key: 'userIdOriginKey',
    //             label: '获取签名 userId 的来源fieldKey',
    //             labelFocused: true,
    //             show: false,
    //             render(form, changeFormItems) {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({
    //                 required: true,
    //             }),
    //         },
    //         {
    //             key: 'useQrcodeToSign',
    //             label: '启用扫码签名',
    //             show: false,
    //             labelFocused: true,
    //             ...getSwitchOpt({ initialValue: true }, (form, changeFormItems) => ({
    //                 onChange(checked) {
    //                     formItemsLinkAction({
    //                         changeFormItems,
    //                         formItems: itemsRef.current,
    //                         values: { useQrcodeToSign: Number(checked) },
    //                         form,
    //                         controlList,
    //                         excludeKeys: [],
    //                     });
    //                 },
    //             })),
    //         },
    //         {
    //             key: 'qrcodeContentUrl',
    //             label: '扫码后跳转的地址',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({ required: true, initialValue: '/zhzf/signature' }),
    //         },
    //         {
    //             key: 'commitSignUrl',
    //             label: '扫码后提交签名的地址',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({ required: true, initialValue: '/doc-service/web/socket/send/msg' }),
    //         },
    //         {
    //             key: 'useWebsocket',
    //             label: '启用websocket',
    //             show: false,
    //             labelFocused: true,
    //             ...getSwitchOpt({ initialValue: true }, (form, changeFormItems) => ({
    //                 onChange(checked) {
    //                     formItemsLinkAction({
    //                         changeFormItems,
    //                         formItems: itemsRef.current,
    //                         values: { useWebsocket: Number(checked) },
    //                         form,
    //                         controlList,
    //                         excludeKeys: [],
    //                     });
    //                 },
    //             })),
    //         },
    //         {
    //             key: 'websocketUrl',
    //             label: 'websocket地址',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({ required: true, initialValue: '/doc-service/websocket' }),
    //         },
    //     ];
    // },
};
