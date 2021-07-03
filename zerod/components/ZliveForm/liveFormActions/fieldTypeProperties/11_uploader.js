import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { getSwitchOpt, getMehtodWithUrlControl, getCorresFormItem, urlRules } from './common';
import ZselectInput from '../../liveFormControls/ZselectInput';
import RequestConfigBtn from '../../liveFormControls/RequestConfigBtn';
import { Icon, Tooltip } from 'antd';
//上传文件的类型在微信小程序组件库wux-weapp-ex支持情况
const uploadTypeWechat = ['image/*', 'video/*'];
import { wechat } from './5_datePicker';
//上传相关的属性
export const loadKey = [
    'url',
    'uploaderResponse',
    'autoUpload',
    'maxMegabytes',
    'storageType',
    'getPrivateUrl',
    'ocrEnabled',
    'ocrUrl',
    'wxSourceTypes',
];
export function getUploadCommonProperties({ itemsRef, controlList, formItemsLinkAction }) {
    return [
        {
            key: 'url',
            label: '上传地址(依次为：请求方式、请求地址、formData参数名、是否多文件上传)',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return (
                    <ZselectInput
                        selectList={['post'].map((m) => ({ label: m, value: m }))}
                        valueKey={{ left: 'urlMethod', center: 'url', right: 'urlParamName' }}
                        leftPlaceholde="请求方式"
                        centerPlaceholder="请求地址"
                        rightPlaceholder="参数名"
                        leftSpan={3}
                        centerSpan={12}
                        rightSpan={3}
                        customControls={[
                            {
                                key: 'requestMode',
                                span: 3,
                                render(value, item, change) {
                                    return getControl('Select', {
                                        value: value[item.key],
                                        selectList: [
                                            { label: '单文件', value: 'single' },
                                            { label: '多文件', value: 'multiple' },
                                        ],
                                        onChange(val) {
                                            change(val, item.key);
                                        },
                                        className: 'z-label',
                                    });
                                },
                            },
                            {
                                key: 'requestConfig',
                                span: 3,
                                render: (value, item, customChange) => (
                                    <RequestConfigBtn
                                        value={value[item.key]}
                                        onChange={(val) => {
                                            customChange(val, item.key);
                                        }}></RequestConfigBtn>
                                ),
                            },
                        ]}
                    />
                );
            },
            options: getOptions({
                required: true,
                initialValue: {
                    urlMethod: 'post',
                    url: '/file-upload-service/webapi/v1.0/fileUpload/uploads',
                    urlParamName: 'files',
                    requestMode: 'multiple',
                },
                rules: urlRules(['urlMethod', 'url', 'urlParamName', 'requestMode']),
            }),
        },
        getCorresFormItem({
            key: 'uploaderResponse',
            label: '响应体对应的字段',
            initialValue: [
                { label: 'id', value: 'id' },
                { label: 'filePath', value: 'filePath' },
                { label: 'fileSuffix', value: 'fileSuffix' },
                { label: 'originalFileName', value: 'originalFileName' },
            ],
        }),
        {
            key: 'autoUpload',
            label: '选完文件自动上传',
            labelFocused: true,
            show: false,
            ...getSwitchOpt(),
        },
        {
            key: 'maxMegabytes',
            label: '最大上传大小(M)',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('InputNumber', { min: 0, precision: 2 });
            },
            options: getOptions({
                required: true,
                initialValue: 10,
            }),
        },
        {
            key: 'storageType',
            label: '文件存储类型',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('Radio.Group', {
                    selectList: [
                        {
                            label: '公读',
                            value: 'PUBLIC',
                        },
                        {
                            label: '私读',
                            value: 'PRIVATE',
                        },
                    ],
                    onChange(e) {
                        formItemsLinkAction({
                            changeFormItems,
                            formItems: itemsRef.current,
                            values: { storageType: e.target.value },
                            form,
                            controlList,
                            excludeKeys: [],
                        });
                    },
                });
            },
            options: getOptions({ required: true, initialValue: 'PRIVATE' }),
        },
        getMehtodWithUrlControl({
            key: 'getPrivateUrl',
            label: '查看私读图片的地址',
            methodKey: 'urlMethod',
            urlKey: 'url',
            initialValue: {
                urlMethod: 'post',
                url: '/file-upload-service/webapi/v1.0/fileUpload/listUploadInfoByIds',
            },
        }),
        {
            key: 'ocrEnabled',
            label: '启用OCR',
            show: false,
            labelFocused: true,
            ...getSwitchOpt({ initialValue: false }, (form, changeFormItems) => ({
                onChange(value) {
                    formItemsLinkAction({
                        changeFormItems,
                        formItems: itemsRef.current,
                        values: { ocrEnabled: Number(value) },
                        form,
                        controlList,
                        excludeKeys: [],
                    });
                },
            })),
        },
        getMehtodWithUrlControl({
            key: 'ocrUrl',
            label: 'OCR识别的地址',
            methodKey: 'ocrUrlMethod',
            urlKey: 'ocrUrl',
            initialValue: { ocrUrlMethod: 'post', ocrUrl: '/file-upload-service/webapi/v1.0/ocr/upload' },
        }),
        {
            key: 'wxSourceTypes',
            label: '小程序文件来源',
            show: false,
            render() {
                return getControl('Checkbox.Group', {
                    selectList: [
                        { label: '使用相机', value: 'camera' },
                        { label: '从相册选图', value: 'album' },
                        { label: '从微信聊天记录', value: 'messageFile' },
                    ],
                });
            },
            options: getOptions({
                required: true,
                initialValue: ['album', 'camera', 'messageFile'],
            }),
        },
    ];
}

export default {
    label: '文件上传',
    value: 11,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [
            ...getUploadCommonProperties({ itemsRef, controlList, formItemsLinkAction }),
            {
                key: 'maxUploadLength',
                label: '最大上传数',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('InputNumber', { min: 0 });
                },
            },
            {
                key: 'minUploadLength',
                label: '最小上传数',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('InputNumber', { min: 0 });
                },
            },
            {
                key: 'fileAccept',
                label: '过滤选择窗口的文件类型',
                show: false,
                render() {
                    return getControl('Select', {
                        selectList: [
                            {
                                label: '只图片',
                                value: 'image/*',
                            },
                            {
                                label: '只视频文件',
                                value: 'video/*',
                            },
                            {
                                label: '任意文件',
                                value: 'all',
                            },
                        ].map((item) => {
                            const plat = [];
                            if (uploadTypeWechat.includes(item.value)) {
                                plat.push(wechat);
                            }
                            return { ...item, plat };
                        }),
                        optLabelRender(item) {
                            return (
                                <div className="z-flex-space-between">
                                    <div>{item.label}</div>
                                    <div>
                                        {item.plat.map((p) => (
                                            <Tooltip title={p.title} key={p.key}>
                                                <Icon
                                                    className="z-text-green z-margin-left-5"
                                                    key={p.key}
                                                    type={p.key}
                                                />
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            );
                        },
                    });
                },
                options: getOptions({
                    required: true,
                    initialValue: 'image/*',
                }),
            },
            {
                key: 'fileListType',
                label: '上传列表样式',
                show: false,
                render() {
                    return getControl('Select', {
                        selectList: ['picture', 'picture-card', 'text'],
                    });
                },
                options: getOptions({
                    required: true,
                    initialValue: 'picture-card',
                }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '文件上传',
    //             value: 11,
    //             showKeys: [...commonKeys, ...uploadKeys],
    //             configKeys: [...uploadKeys, ...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         ...getUploadCommonProperties({ itemsRef, controlList }),
    //         {
    //             key: 'maxUploadLength',
    //             label: '最大上传数',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('InputNumber', { min: 0 });
    //             },
    //         },
    //         {
    //             key: 'minUploadLength',
    //             label: '最小上传数',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('InputNumber', { min: 0 });
    //             },
    //         },
    //         {
    //             key: 'fileAccept',
    //             label: '过滤选择窗口的文件类型',
    //             show: false,
    //             render() {
    //                 return getControl('Select', {
    //                     selectList: [
    //                         {
    //                             label: '只图片',
    //                             value: 'image/*',
    //                         },
    //                         {
    //                             label: '只视频文件',
    //                             value: 'video/*',
    //                         },
    //                         {
    //                             label: '任意文件',
    //                             value: 'all',
    //                         },
    //                     ].map((item) => {
    //                         const plat = [];
    //                         if (uploadTypeWechat.includes(item.value)) {
    //                             plat.push(wechat);
    //                         }
    //                         return { ...item, plat };
    //                     }),
    //                     optLabelRender(item) {
    //                         return (
    //                             <div className="z-flex-space-between">
    //                                 <div>{item.label}</div>
    //                                 <div>
    //                                     {item.plat.map((p) => {
    //                                         return (
    //                                             <Tooltip title={p.title} key={p.key}>
    //                                                 <Icon
    //                                                     className="z-text-green z-margin-left-5"
    //                                                     key={p.key}
    //                                                     type={p.key}
    //                                                 />
    //                                             </Tooltip>
    //                                         );
    //                                     })}
    //                                 </div>
    //                             </div>
    //                         );
    //                     },
    //                 });
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue: 'image/*',
    //             }),
    //         },
    //         {
    //             key: 'fileListType',
    //             label: '上传列表样式',
    //             show: false,
    //             render() {
    //                 return getControl('Select', {
    //                     selectList: ['picture', 'picture-card', 'text'],
    //                 });
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue: 'picture-card',
    //             }),
    //         },
    //     ];
    // },
};
