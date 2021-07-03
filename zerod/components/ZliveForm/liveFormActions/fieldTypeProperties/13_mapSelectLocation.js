import React, { useState, useEffect, useRef } from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { getMehtodWithUrlControl } from './common';
//地图的默认密钥(默认是邹国涛个人注册)
const initSereKey = {
    amap: '3d5c1c6169c64554d6f9fcca35d4abff', //高德地图
    qqmap: '63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK', //腾讯地图
};

export default {
    label: '地图选点',
    value: 13,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'mapType',
                label: '地图类型',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Radio.Group', {
                        selectList: [
                            {
                                label: '腾讯',
                                value: 'qqmap',
                            },
                            { label: '高德', value: 'amap' },
                        ],
                        onChange(e) {
                            const val = e.target.value;
                            form.setFieldsValue({
                                secretKey: initSereKey[val],
                            });
                        },
                    });
                },
                options: getOptions({ required: true, initialValue: 'qqmap' }),
            },

            {
                key: 'secretKey',
                label: '密钥',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Input');
                },
                options: getOptions({ required: true, initialValue: initSereKey['qqmap'] }),
            },
            getMehtodWithUrlControl({
                key: 'webserviceUrlDO',
                label: '调用地图web服务的代理地址',
                methodKey: 'urlMethod',
                urlKey: 'url',
                initialValue: {
                    urlMethod: 'post',
                    url: '/form-service/webapi/geography/webService',
                },
            }),
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '地图选点',
    //             value: 13,
    //             showKeys: [...commonKeys, ...mapSelectKeys],
    //             configKeys: [...mapSelectKeys, ...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'mapType',
    //             label: '地图类型',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Radio.Group', {
    //                     selectList: [
    //                         {
    //                             label: '腾讯',
    //                             value: 'qqmap',
    //                         },
    //                         { label: '高德', value: 'amap' },
    //                     ],
    //                     onChange(e) {
    //                         const val = e.target.value;
    //                         form.setFieldsValue({
    //                             secretKey: initSereKey[val],
    //                         });
    //                     },
    //                 });
    //             },
    //             options: getOptions({ required: true, initialValue: 'qqmap' }),
    //         },

    //         {
    //             key: 'secretKey',
    //             label: '密钥',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Input');
    //             },
    //             options: getOptions({ required: true, initialValue: initSereKey['qqmap'] }),
    //         },
    //         getMehtodWithUrlControl({
    //             key: 'webserviceUrlDO',
    //             label: '调用地图web服务的代理地址',
    //             methodKey: 'urlMethod',
    //             urlKey: 'url',
    //             initialValue: {
    //                 urlMethod: 'post',
    //                 url: '/form-service/webapi/geography/webService',
    //             },
    //         }),
    //     ];
    // },
};
