import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { Icon, Tooltip } from 'antd';
import { dateFormats } from './common';
//日期格式在微信小程序组件库wux-weapp-ex支持情况
const formatWechat = [
    'YYYY',
    'YYYY-MM',
    'YYYY-MM-DD',
    'YYYY-MM-DD HH',
    'YYYY-MM-DD HH:mm',
    'YYYY-MM-DD HH:mm:ss', //小程序不能选秒，只能在YYYY-MM-DD HH:mm上添加 ":00"
    'HH:mm',
    'YYYY-MM-DD - YYYY-MM-DD',
    'YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm',
    'HH:mm - HH:mm',
];
//微信小程序组件库wux-weapp-ex支持标识
export const wechat = { key: 'wechat', title: '微信小程序可用' };
export default {
    label: '日期/时间选择',
    value: 5,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'format',
                label: '格式',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Select', {
                        selectList: Object.keys(dateFormats).map((key) => {
                            const plat = [];
                            if (formatWechat.includes(key)) {
                                plat.push(wechat);
                            }
                            return { label: key, value: key, plat };
                        }),
                        optLabelRender(item) {
                            return (
                                <div className="z-flex-space-between">
                                    <div>{item.label}</div>
                                    <div>
                                        {item.plat.map((p) => (
                                            <Tooltip title={p.title} key={p.key}>
                                                <Icon
                                                    className="z-margin-left-5"
                                                    key={p.key}
                                                    type={p.key}
                                                    style={{ color: '#39b54a' }}
                                                />
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            );
                        },
                    });
                },
                options: getOptions({ required: true, initialValue: 'YYYY-MM-DD' }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '日期/时间选择',
    //             value: 5,
    //             showKeys: [...commonKeys, ...dateKeys],
    //             configKeys: [...dateKeys, ...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'format',
    //             label: '格式',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Select', {
    //                     selectList: Object.keys(dateFormats).map((key) => {
    //                         const plat = [];
    //                         if (formatWechat.includes(key)) {
    //                             plat.push(wechat);
    //                         }
    //                         return { label: key, value: key, plat };
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
    //                                                     className="z-margin-left-5"
    //                                                     key={p.key}
    //                                                     type={p.key}
    //                                                     style={{ color: '#39b54a' }}
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
    //             options: getOptions({ required: true, initialValue: 'YYYY-MM-DD' }),
    //         },
    //     ];
    // },
};
