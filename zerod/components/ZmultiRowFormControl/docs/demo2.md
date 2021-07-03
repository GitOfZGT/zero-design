```jsx
/**
 * @renderMode: inline
 * @componentName: ZmultiRowDataTable1
 * @description: 多行数据展示在Zform中使用
 * @title: ZmultiRowBaseTable
 */
import React from 'react';
import { ZmultiRowDataTable, Zform, ZcolorPicker } from 'zerod';
import { Input, message, InputNumber } from 'antd';
import { getControl } from 'zerod/components/Zform/controls';
export default class Demo extends React.PureComponent {
    render() {
        return (
            <Zform
                items={this.items}
                isFocusComponentUpdate={true}
                labelLayout="vertical"
                getFormInstance={this.getFormInstance}
                onSubmit={(values) => {
                    console.log(values);
                }}
                values={{
                    multiRow: [
                        {
                            rowKey: '9999',
                            serviceName: '9999sdsdd大幅度',
                        },
                        {
                            rowKey: '888',
                            serviceName: '9999sdsdd大幅度',
                        },
                    ],
                }}
            />
        );
    }
    getFormInstance = (form, methods) => {
        this.zformMethods = methods;
    };
    multiItems = [
        {
            key: 'selectone',
            label: '选择器',
        },
        {
            key: 'serviceCode',
            label: '服务编码',
        },
        {
            key: 'serviceName',
            label: '服务名称',
            render: (text, record) => {
                return text;
            },
        },
        {
            key: 'colorValue',
            label: '颜色值',
        },
        {
            groupId: '1',
            key: 'serviceRemark',
            label: '服务说明',
            span: { md: 24 },
        },
        {
            groupId: '1',
            key: 'servicePort',
            label: '端口号',
        },
        {
            key: 'confProperty',
            label: '默认配置',
            span: 24,
        },
    ];
    multiRowFormItems = {};
    items = [
        {
            key: 'selectone',
            label: '选择器',
            render: () => {
                return (form, changeFormItems, currItem) => {
                    return getControl('Select', {
                        selectList: [
                            { label: '1', value: 1 },
                            { label: '2', value: 2 },
                        ],
                        onChange: (val) => {
                            // this.zformMethods.setCurrentFocusKeys(['serviceCode']);
                            this.zformMethods.setFieldsValue({
                                serviceCode: val,
                            });
                            // changeFormItems(
                            //     [
                            //         {
                            //             key: 'serviceCode',
                            //             rowKey: currItem.rowKey,
                            //             show: val === 1,
                            //         },
                            //     ],
                            //     true,
                            // );
                        },
                    });
                };
            },
            //antd的 form.getFieldDecorator的options
            options: () => ({
                //验证规则
                rules: [
                    {
                        required: true,
                        message: '不能为空。',
                    },
                ],
            }),
        },
        {
            key: 'serviceCode',
            label: '服务编码',
            render: (form) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(<Input placeholder="请输入服务编码" />);
                    }, 2000);
                });
            },
            //antd的 form.getFieldDecorator的options
            options: () => ({
                //验证规则
                rules: [
                    {
                        required: true,
                        message: '不能为空。',
                    },
                ],
            }),
        },
        {
            key: 'serviceName',
            label: '服务名称',
            render: (form) => {
                return (
                    <Input
                        placeholder="请输入服务名称"
                        onBlur={(e) => {
                            console.log(e.target.value);
                            this.zformMethods.setFieldsValue({
                                serviceCode: e.target.value,
                            });
                        }}
                    />
                );
            },
            //antd的 form.getFieldDecorator的options
            options: {
                //验证规则
                rules: [
                    {
                        required: true,
                        message: '不能为空。',
                    },
                ],
            },
        },
        {
            key: 'colorValue',
            label: '颜色值',
            render: (form) => {
                return <ZcolorPicker className="z-margin-top-4" />;
            },
            //antd的 form.getFieldDecorator的options
            options: {
                //验证规则
                rules: [
                    {
                        required: true,
                        message: '不能为空。',
                    },
                ],
            },
        },
        {
            groupId: '1',
            key: 'serviceRemark',
            label: '服务说明',
            span: { md: 24 },
            render: (form) => {
                return <Input.TextArea autoSize={true} placeholder="请输入服务说明" />;
            },
            //antd的 form.getFieldDecorator的options
            options: {
                //验证规则
                rules: [
                    {
                        required: true,
                        message: '不能为空。',
                    },
                ],
            },
        },
        {
            groupId: '1',
            key: 'servicePort',
            label: '端口号',
            render: (form) => {
                return <InputNumber min={11110} max={65535} step={10} />;
            },
            //antd的 form.getFieldDecorator的options
            options: {
                //验证规则
                rules: [
                    {
                        required: true,
                        message: '不能为空。',
                    },
                ],
            },
        },
        {
            span: 24,
            key: 'multiRow',
            label: false,
            isFormItem: true,
            render: () => {
                return (form, changeItems, curr) => {
                    return <ZmultiRowDataTable titleGroup={this.titleGroup} items={this.multiItems} />;
                };
            },
            options: {
                //验证规则
                rules: [
                    {
                        required: true,
                        message: '不能为空。',
                    },
                ],
            },
        },
    ];
    // titleGroups = [{ id: '1', title: '组件' }, { id: '2' }];
    titleGroups = [];
}
```