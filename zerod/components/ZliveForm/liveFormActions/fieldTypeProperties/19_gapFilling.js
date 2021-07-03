import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
export default {
    label: '完形填空',
    value: 19,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'textTemplate',
                label: '文本模板',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('TextArea', {
                        autoSize: { minRows: 2 },
                    });
                },
                options: getOptions({
                    required: true,
                    initialValue:
                        '模板案例{[input|100]<inputKey>}方括号内第一个属性是控件类型，可选input、textArea、datehour、datetime、date、month、year、radio、checkBox、select，第二个属性是控件宽度；尖括号内属性是填空的唯一字段key；\n圆括号内是radio、checkBox、select的选项：{[checkBox]<checkBoxKey>(选项1|选项2|选项3)}，{[radio]<radioKey>(选项1|选项2|选项3)}，\n下拉框：{[select|200]<selectKey>(选项1|选项2|选项3)}，\n年份：{[year|100]<yearStart>}至{[year|100]<yearEnd>}，\n月份：{[month|120]<monthStart>}至{[month|120]<monthEnd>}，\n日期：{[date|140]<dateStart>}至{[date|140]<dateEnd>}，\n日期时间：{[datehour|180]<datehourStart>}至{[datehour|180]<datehourEnd>}，\n日期时间：{[datetime|180]<dateTimeStart>}至{[datetime|180]<dateTimeEnd>}，\n文本域占整行：{[textArea]<textAreaKey>}\n<div style="text-align:right;">支持div标签排版\n日期：{[date|140]<rightdateStart>}</div>\nflex布局：<div style="display:flex;"><div style="flex:1;">左边\n{[textArea]<flexTextAreaKey>}</div><div style="flex:1;">右边\n{[input|180]<flexinputKey>}</div></div>',
                }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '完形填空',
    //             value: 19,
    //             showKeys: [...commonKeys, 'textTemplate'],
    //             configKeys: [...commonConfigKeys, 'textTemplate'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'textTemplate',
    //             label: '文本模板',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('TextArea', {
    //                     autoSize: { minRows: 2 },
    //                 });
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue:
    //                     '模板案例{[input|100]<inputKey>}方括号内第一个属性是控件类型，可选input、textArea、datehour、datetime、date、month、year、radio、checkBox、select，第二个属性是控件宽度；尖括号内属性是填空的唯一字段key；\n圆括号内是radio、checkBox、select的选项：{[checkBox]<checkBoxKey>(选项1|选项2|选项3)}，{[radio]<radioKey>(选项1|选项2|选项3)}，\n下拉框：{[select|200]<selectKey>(选项1|选项2|选项3)}，\n年份：{[year|100]<yearStart>}至{[year|100]<yearEnd>}，\n月份：{[month|120]<monthStart>}至{[month|120]<monthEnd>}，\n日期：{[date|140]<dateStart>}至{[date|140]<dateEnd>}，\n日期时间：{[datehour|180]<datehourStart>}至{[datehour|180]<datehourEnd>}，\n日期时间：{[datetime|180]<dateTimeStart>}至{[datetime|180]<dateTimeEnd>}，\n文本域占整行：{[textArea]<textAreaKey>}\n<div style="text-align:right;">支持div标签排版\n日期：{[date|140]<rightdateStart>}</div>\nflex布局：<div style="display:flex;"><div style="flex:1;">左边\n{[textArea]<flexTextAreaKey>}</div><div style="flex:1;">右边\n{[input|180]<flexinputKey>}</div></div>',
    //             }),
    //         },
    //     ];
    // },
};
