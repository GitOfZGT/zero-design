<!-- @routePath: /component-doc/ZsearchForm-doc -->
<!--
 * @Author: zgt
 * @Date: 2018-08-21 10:59:31
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-11 17:35:00
 * @Description: file content
 -->
<div class="z-doc-titles"></div>

# 查询表单：ZsearchForm

`ZsearchForm`是有栅栏布局的横向排版的，将`antd`的`Form`、`Form.item` 的结构转成数据结构直接渲染的方式，并且带有查询、重置、折叠按钮

继承了 React.PureComponent

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
/**
 * @renderMode: inline
 * @componentName: ZsearchFormDemo
 * @description: ZsearchForm基本使用的示例
 * @title: ZsearchForm
 */
import React from 'react';
import { ZsearchForm } from 'zerod';
import { Input, message, DatePicker } from 'antd';

class Myjavascript extends React.PureComponent {
    items = [
        {
            key: 'serviceCode',
            label: '服务编码',
            render: (form) => {
                //异步加载表单控件
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(<Input placeholder="请输入服务编码" />);
                    }, 5000);
                });
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
            key: 'serviceName',
            label: '服务名称',
            render: (form) => {
                return <Input placeholder="请输入服务名称" />;
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
            key: 'time',
            label: '申请时间',
            render: (form) => {
                return <DatePicker.RangePicker renderExtraFooter={() => 'extra footer'} showTime />;
            },
        },
        {
            key: 'serviceRemark',
            label: '服务说明',
            span: 24,
            render: (form) => {
                return <Input.TextArea rows={2} placeholder="请输入服务说明" />;
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
    render() {
        return (
            <div className="app-body" style={{ padding: '20px' }}>
                <div className="z-panel">
                    <div className="z-panel-body">
                        <ZsearchForm
                            labelLayout="inline"
                            colFormItems={this.items}
                            onSearch={(values) => {
                                message.success('提交成功：' + JSON.stringify(values));
                            }}
                            collapseCount={2}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Myjavascript;
```

<div class="z-doc-titles"></div>

### ZsearchForm Props

| 参数               | 说明                                                                                                                                                                     | 类型                               | 默认值     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ---------- |
| items              | 生成表单的 json 数组，请看下面的 items 结构, (请使用变量缓存所需设置的值而非直接使用字面量)                                                                              | array                              | --         |
| defaultSpan        | 统一设置 items 栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但 items 中的 span 属性的优先级比这个高                                                                         | number \| object                   | --         |
| onSearch           | 验证表单后的提交事件                                                                                                                                                     | function(values){}                 | --         |
| momentFormat       | 是否在触发 onSubmit 函数后里面传出的 values 中存在 moment 对象进行表单控件对应的 format 格式化，启用此属性，相关 moment 值的控件必需 format 属性                         | boolean                            | false      |
| onReset            | 重置表单后的事件                                                                                                                                                         | function                           | --         |
| noCollapse         | 禁用折叠                                                                                                                                                                 | boolean                            | false      |
| collapseCount      | 启用折叠后，折叠起来显示的数量                                                                                                                                           | number                             | 2          |
| values             | 所有表单控件的值，如{serviceName:"名称"}，"serviceName"对应 items 属性里面的 key                                                                                         | object                             | --         |
| getFormInstance    | 获取 Form 实例的钩子，外部通过(form)=>{this.formIstance=form;}获得 form 实例对象,通过 this.formInstance.调用 antd [表单相关方法](https://ant.design/components/form-cn/) | function(form,methods){}           | --         |
| afterItemsRendered | 所有表单控件渲染完的回调，包括异步渲染控件                                                                                                                               | function(form,methods){}           | --         |
| labelLayout        | label 的布局方式                                                                                                                                                         | 'horizontal'\|'vertical'\|'inline' | 'vertical' |
| booleanToNumber    | 表单验证通过后是否把 boolean 类型的值转成 0 或 1，通常处理 Switch 控件的值                                                                                               | boolean                            | true       |
| searchColConfig    | 查询按钮列的 formitem 配置                                                                                                                                               | object                             | --         |

<div class="z-doc-titles"></div>

## items 结构

| 参数                                                     | 说明                                                                                                                                                                                                                                                   | 类型                                                  | 默认值 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ------ |
| key                                                      | 表单控件 value 对应的字段名                                                                                                                                                                                                                            | string                                                | --     |
| label                                                    | 表单控件 label                                                                                                                                                                                                                                         | string                                                | --     |
| labelWidth                                               | label 的宽度，如 labelWidth:"120px"，当 labelLayout=='horizontal'才可能用的上                                                                                                                                                                          | string                                                | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> render  | 渲染表单控件的钩子。支持异步加载：必须 return 的是 Promise 对象。例如使用了后台接口：(form,changeFormItems)=>api.getOptions.then(re=>{return 表单控件})。changeFormItems 是一个方法，主要用于局部改变 items，实现表单控件之间交互联动,使用方式请往下看 | (form,changeFormItems)=>{return ReactNode \| Promise} | --     |
| span                                                     | 栅栏占格(antd 的栅栏组件分 24 栏)，例：{xxl:4,xl:6,lg:8}，默认取 this.props.defaultSpan                                                                                                                                                                | number \| object                                      | --     |
| isFormItem                                               | 默认为 true、如果为 false 则 render 函数可以渲染非表单控件内容                                                                                                                                                                                         | boolean                                               | --     |
| className                                                | 可以给每项添加 className                                                                                                                                                                                                                               | string                                                | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> options | [Antd 的表单中 getFieldDecorator 函数的 options 参数](https://ant.design/components/form-cn/) ,可以配置验证规则                                                                                                                                        | object \|\| ()=>options                               | --     |

## changeFormItems

changeFormItems 是一个方法，主要用于局部改变 items，实现表单控件之间交互联动。但不能直接在 render 函数中使用，应在控件的事件当中。changeFormItems 除了在 items 里的 render 参数中，还存在于 getFormInstance 函数的 methods 参数里。

changeFormItems 需要两个参数：`newItems`：array | object 和 `part` : boolean

`newItems`的结构取决于 `part`参数

如果`part`为 false (默认为 false),`newItems`同 Zform 的 items，会重新渲染全部 items，这是早期的做法，不建议使用

```jsx
//this.items就是Zform的items
const newItems = this.items.slice(0);
newItems.splice(4, 1); //不显示第五个
changeFormItems(this.items, false); //触发渲染
```

如果`part`为 true，就是局部改变，`newItems`可以为数组(多个 item 改变)，可以为对象(单个 item 改变),推荐使用方式如下

```jsx
//不显示key为servicePort的那个item，
changeFormItems(
    {
        key: 'servicePort', //对应Zform的items里的key
        show: false, //是否显示
    },
    true,
);
//其他内容
changeFormItems(
    [
        {
            key: 'servicePort', //对应Zform的items里的key
            //改变key为servicePort的那个item的内容
            newItem: {
                control: <Input />, //控件  ReactNode
                span: { lg: 12 }, //栅栏占格 同zform 的items里的span
                options: {}, //同zform 的items里的options
                isFormItem: true, //control是否是表单控件
                label: '', //label
            },
        },
    ],
    true,
);
```
