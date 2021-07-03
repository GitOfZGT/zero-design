import React from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
import { itemsFromTree } from '../../../zTool';
import { getCorresFormItem, urlRules } from './common';
import ZselectInput from '../../liveFormControls/ZselectInput';
import RequestConfigBtn from '../../liveFormControls/RequestConfigBtn';
//下拉、单选框/多选框的属性
export const selectionsType1keys = ['selectList'];
export const selectionsType2keys = ['selectionsUrl', 'selectionsQuery', 'responseDataIndex'];
export const multipleSelectKeys = ['maxSelectLength', 'minSelectLength'];
export const notFoundContentKey = ['notFoundContent'];
export const selectListFieldNamesKey = ['selectListFieldNames'];
export const selectKeys = [
    'selectionsType',
    'selectionsFromKey',
    ...selectListFieldNamesKey,
    ...selectionsType1keys,
    ...selectionsType2keys,
    ...notFoundContentKey,
];
export function getSelectListFieldNamesProperties({ itemsRef, controlList }) {
    return [
        getCorresFormItem({
            key: 'selectListFieldNames',
            label: 'lable、value、children对应选项数据中的字段',
            initialValue: [
                { label: 'label', value: 'label' },
                { label: 'value', value: 'value' },
                { label: 'children', value: 'children' },
            ],
        }),
    ];
}
export function getNotFoundContentProperties({ itemsRef, controlList, formItemsLinkAction }) {
    return [
        {
            key: 'notFoundContent',
            label: '没有选项数据时显示的内容',
            show: false,
            render(form, changeFormItems) {
                return getControl('Input');
            },
            options: getOptions({ required: true, initialValue: '无相关数据' }),
        },
    ];
}
export function getSelectionProperties({ itemsRef, controlList, formItemsLinkAction }) {
    return [
        {
            key: 'selectionsFromKey',
            label: '其他控件的key',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('Input');
            },
            options: getOptions({
                required: true,
                initialValue: '',
            }),
        },
        {
            key: 'selectionsUrl',
            label: '请求选项数据地址',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return (
                    <ZselectInput
                        controlCostrom={
                            [6, 7].includes(form.getFieldValue('fieldType'))
                                ? {
                                      right(value, valueChange) {
                                          return getControl('Select', {
                                              value,
                                              selectList: [
                                                  {
                                                      label: '全部加载',
                                                      value: 'all',
                                                  },
                                                  {
                                                      label: '分部加载',
                                                      value: 'part',
                                                  },
                                              ],
                                              onChange: valueChange,
                                              style: { width: '100%' },
                                          });
                                      },
                                  }
                                : undefined
                        }
                        leftSpan={4}
                        centerSpan={[3, 8, 9, 15, 17].includes(form.getFieldValue('fieldType')) ? 17 : 11}
                        rightSpan={[3, 8, 9, 15, 17].includes(form.getFieldValue('fieldType')) ? null : 6}
                        selectList={['post', 'get'].map((m) => ({ label: m, value: m }))}
                        valueKey={{ left: 'selectionsUrlMethod', center: 'selectionsUrl', right: 'requireType' }}
                        leftPlaceholde="请求方式"
                        centerPlaceholder="请求地址"
                        customControls={[
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
                initialValue: { selectionsUrlMethod: 'post', selectionsUrl: '', requireType: 'all' },
                rules: urlRules(['selectionsUrlMethod', 'selectionsUrl', 'requireType']),
            }),
        },
        {
            key: 'selectionsQuery',
            label: '请求参数配置',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('TreeInput', { multiple: false, labelPlaceholder: 'Key' });
            },
            options: getOptions({
                required: false,
                initialValue: [],
            }),
        },
        {
            key: 'responseDataIndex',
            label: '响应数据对应的key',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('Input');
            },
            options: getOptions({
                required: false,
                initialValue: 'data',
            }),
        },
    ];
}
//级联等其他控件也有的属性
export function getMaxSelectProperties({ itemsRef, controlList, formItemsLinkAction }) {
    return [
        {
            key: 'maxSelectLength',
            label: '最大选择个数',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('InputNumber', { min: 0 });
            },
        },
        {
            key: 'minSelectLength',
            label: '最小选择个数',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('InputNumber', { min: 0 });
            },
        },
    ];
}
export function getSelectCommonProperties({ itemsRef, controlList, formItemsLinkAction }) {
    return [
        {
            key: 'selectionsType',
            label: '选项类型',
            labelFocused: true,
            show: false,
            render(form, changeFormItems) {
                return getControl('Radio.Group', {
                    selectList: [
                        {
                            label: '自定义',
                            value: 1,
                        },
                        { label: '异步', value: 2 },
                        { label: '同其他控件', value: 3 },
                    ],
                    onChange(e) {
                        formItemsLinkAction({
                            changeFormItems,
                            formItems: itemsRef.current,
                            values: { selectionsType: e.target.value },
                            form,
                            controlList,
                            excludeKeys: [],
                        });
                    },
                });
            },
            options: getOptions({ required: true, initialValue: 1 }),
        },
        {
            key: 'selectList',
            label: '选项数据',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('TreeInput', {
                    multiple: [6, 7].includes(form.getFieldValue('fieldType')),
                });
            },
            options: getOptions({
                required: false,
                initialValue: [],
                rules: [
                    {
                        validator: (rule, value, callback) => {
                            const finished = itemsFromTree({
                                tree: value,
                                condition(val1, val2) {
                                    return val1.toString().trim() === val2.toString().trim();
                                },
                                sourceItem: { value: '' },
                                keyObj: { id: 'value', children: 'children' },
                            });
                            if (finished) {
                                return callback(new Error('选项中有未填写完整的值'));
                            }
                            callback();
                        },
                    },
                ],
            }),
        },
        ...getSelectionProperties({ itemsRef, controlList, formItemsLinkAction }),
        ...getSelectListFieldNamesProperties({ itemsRef, controlList, formItemsLinkAction }),
        ...getNotFoundContentProperties({ itemsRef, controlList, formItemsLinkAction }),
    ];
}
export default {
    label: '下拉选择',
    value: 3,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList, formItemsLinkAction }) {
        return [
            {
                key: 'mode',
                label: '模式',
                show: false,
                labelFocused: true,
                render(form, changeFormItems) {
                    return getControl('Radio.Group', {
                        selectList: [
                            {
                                label: '单选',
                                value: 'single',
                            },
                            { label: '多选', value: 'multiple' },
                            { label: '标签', value: 'tags' },
                        ],
                    });
                },
                options: getOptions({ required: true, initialValue: 'single' }),
            },
            ...getSelectCommonProperties({ itemsRef, controlList, formItemsLinkAction }),
            ...getMaxSelectProperties({ itemsRef, controlList, formItemsLinkAction }),
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '下拉选择',
    //             value: 3,
    //             showKeys: [...commonKeys, ...selectKeys, ...multipleSelectKeys, 'mode'],
    //             configKeys: [...commonConfigKeys, ...selectKeys, ...multipleSelectKeys, 'mode'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'mode',
    //             label: '模式',
    //             show: false,
    //             labelFocused: true,
    //             render(form, changeFormItems) {
    //                 return getControl('Radio.Group', {
    //                     selectList: [
    //                         {
    //                             label: '单选',
    //                             value: 'single',
    //                         },
    //                         { label: '多选', value: 'multiple' },
    //                         { label: '标签', value: 'tags' },
    //                     ],
    //                 });
    //             },
    //             options: getOptions({ required: true, initialValue: 'single' }),
    //         },
    //         ...getSelectCommonProperties({ itemsRef, controlList }),
    //         ...getMaxSelectProperties({ itemsRef, controlList }),
    //     ];
    // },
};
