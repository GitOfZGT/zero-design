```jsx
/**
 * @renderMode: inline
 * @componentName: ZmultiRowFormControl1
 * @description: 多行编辑在Zform中使用
 * @title: ZmultiRowFormControl
 */
import React from 'react';
import { ZmultiRowFormControl, Zform, ZcolorPicker } from 'zerod';
import { Input, message, InputNumber } from 'antd';
import { getControl } from 'zerod/components/Zform/controls';
export default class ZmultiRowFormControl1 extends React.PureComponent {
    render() {
        return (
            <Zform
                items={this.items}
                isFocusComponentUpdate={true}
                labelLayout="horizontal"
                getFormInstance={this.getFormInstance}
                getOtherFieldsValue={this.getOtherFieldsValue}
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
    getOtherFieldsValue = (isValid) => {
        return this.multiRowMethods.validateFormFields(isValid);
    };
    getMultiRowMethods = (methods) => {
        this.multiRowMethods = methods;
    };
    multiItems = [
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
                            changeFormItems(
                                [
                                    {
                                        key: 'serviceCode',
                                        rowKey: currItem.rowKey,
                                        show: val === 1,
                                    },
                                ],
                                true,
                            );
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
                return <Input placeholder="请输入服务名称" onBlur={() => {}} />;
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
        // {
        //     key: 'myButton',
        //     label: '按钮',
        //     render: () => {
        //         return (form, changeFormItems) => {
        //             return (
        //                 <Button
        //                     type="primary"
        //                     onClick={() => {
        //                         const newItems = this.items.slice(0);
        //                         newItems.splice(4, 1);
        //                         changeFormItems(hasHide ? this.items : newItems);
        //                         hasHide = !hasHide;
        //                     }}
        //                 >
        //                     {hasHide ? '显示' : '不显示'}端口号
        //                 </Button>
        //             );
        //         };
        //     },
        // },
        {
            key: 'confProperty',
            label: '默认配置',
            span: 24,
            render: (form) => {
                return <Input.TextArea placeholder="请输入默认配置" />;
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
                    return (
                        <ZmultiRowFormControl
                            titleGroups={this.titleGroups}
                            items={this.multiItems}
                            exportMethods={this.getMultiRowMethods}
                        />
                    );
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
    titleGroups = [{ id: '1', title: '组件' }, { id: '2' }];
    // titleGroups = [];
}
```