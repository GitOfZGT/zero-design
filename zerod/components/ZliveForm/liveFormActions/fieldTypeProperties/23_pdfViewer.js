import React from 'react';

import { getCorresFormItem, getMehtodWithUrlControl } from './common';

export default {
    label: 'PDF展示器',
    value: 23,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            getCorresFormItem({
                key: 'pdfListFieldNames',
                label: 'pdf列表的映射字段',
                initialValue: [
                    { label: 'label', value: 'docInstanceName' },
                    { label: 'key', value: 'id' },
                    { label: 'docInstancePdfId', value: 'docInstancePdfId' },
                    { label: 'docJsonPdfId', value: 'docJsonPdfId' },
                ],
            }),
            getMehtodWithUrlControl({
                key: 'getPrivateFile',
                label: '获取文件的地址',
                methodKey: 'urlMethod',
                urlKey: 'url',
                initialValue: {
                    urlMethod: 'post',
                    url: '/file-upload-service/webapi/v2.0/fileUpload/getFile',
                },
            }),
            getCorresFormItem({
                key: 'privateFileFieldNames',
                label: '获取文件的地址请求后的映射字段',
                initialValue: [{ label: 'filePath', value: 'filePath' }],
            }),
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: 'PDF展示器',
    //             value: 23,
    //             showKeys: [...commonKeys, ...pdfKeys],
    //             configKeys: [...commonConfigKeys, ...pdfKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         getCorresFormItem({
    //             key: 'pdfListFieldNames',
    //             label: 'pdf列表的映射字段',
    //             initialValue: [
    //                 { label: 'label', value: 'docInstanceName' },
    //                 { label: 'key', value: 'id' },
    //                 { label: 'docInstancePdfId', value: 'docInstancePdfId' },
    //                 { label: 'docJsonPdfId', value: 'docJsonPdfId' },
    //             ],
    //         }),
    //         getMehtodWithUrlControl({
    //             key: 'getPrivateFile',
    //             label: '获取文件的地址',
    //             methodKey: 'urlMethod',
    //             urlKey: 'url',
    //             initialValue: {
    //                 urlMethod: 'post',
    //                 url: '/file-upload-service/webapi/v2.0/fileUpload/getFile',
    //             },
    //         }),
    //         getCorresFormItem({
    //             key: 'privateFileFieldNames',
    //             label: '获取文件的地址请求后的映射字段',
    //             initialValue: [{ label: 'filePath', value: 'filePath' }],
    //         }),
    //     ];
    // },
};
