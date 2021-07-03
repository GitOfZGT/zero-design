<!-- @routePath: /component-doc/Zform-doc -->

# 普通表单：Zform

`Zform`将`antd`的`Form`、`Form.item`的结构转成数据结构直接渲染的方式，并且自带有一个`提交`表单的按钮

```jsx
/**
 * @renderMode: inline
 * @componentName: ZliveFormBaseDemo
 * @description: ZliveForm基本使用的示例
 * @title: ZliveForm
 */
import React from 'react';
import { Zform, ZcolorPicker } from 'zerod';
import { Input, message, InputNumber, Button } from 'antd';

function AButton({ value, onChange, methods, changeFormItems }) {
    return (
        <Button
            type="primary"
            onClick={() => {
                // const insideItems = methods.getInsideItems();
                // const portItem = insideItems.find((item) => item.key === 'servicePort');
                // changeFormItems(
                //     {
                //         key: 'servicePort',
                //         show: !portItem.ref.current.itemShowStatus,
                //     },
                //     true,
                // );
                changeFormItems(
                    {
                        key: 'servicePort',
                        show: !!value,
                    },
                    true,
                );
                onChange(!value);
            }}>
            {value ? '显示' : '不显示'}
            端口号
        </Button>
    );
}

export default class Myjavascript extends React.PureComponent {
    items = [
        {
            key: 'serviceCode',
            label: '服务编码',
            render: (form) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(<Input placeholder="请输入服务编码" />);
                    }, 5000);
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
                return <Input placeholder="请输入服务名称" allowClear />;
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
                return <ZcolorPicker className="z-margin-top-4" allowClear />;
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
            key: 'serviceRemark',
            label: '服务说明',
            span: { md: 24 },
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
        {
            key: 'servicePort',
            label: '端口号',
            labelWidth: '80px',
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
            key: 'myButton',
            label: false,
            show: true,
            render: () => {
                return (form, changeFormItems, item, methods) => {
                    return <AButton methods={methods} changeFormItems={changeFormItems} />;
                };
            },
        },
        {
            key: 'confProperty',
            label: '默认配置',
            span: 24,
            render: (form) => {
                return <Input.TextArea rows={15} placeholder="请输入默认配置" />;
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
    defaultValue = {
        serviceCode: '9999',
        serviceRemark: 'llll',
    };
    render() {
        return (
            <div className="app-body" style={{ padding: '20px' }}>
                <div className="z-panel">
                    <div className="z-panel-body">
                        <Zform
                            labelLayout="inline"
                            values={this.defaultValue}
                            items={this.items}
                            onSubmit={(values) => {
                                // console.log(values);
                                return Promise.resolve().then((re) => {
                                    message.success('提交成功：' + JSON.stringify(values));
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
```

## Zform 的 props

可追 `className`、`style`

| 参数                                                             | 说明                                                                                                                                                                                                          | 类型                                       | 默认值               |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------- |
| labelLayout                                                      | label 的布局方式                                                                                                                                                                                              | 'horizontal'\|'vertical'\|'inline'         | 'vertical'           |
| items                                                            | 生成表单的 json 数组，请看下面的 items 结构, (请使用变量缓存所需设置的值而非直接使用字面量)                                                                                                                   | array                                      | --                   |
| defaultSpan                                                      | 统一设置 items 栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但 items 中的 span 属性的优先级比这个高                                                                                                              | number \| object                           | --                   |
| onSubmit                                                         | 触发保存按钮会先验证表单是否通过,通过了当 confirm.show 为 ture 会打开确认提示框,确认后才调用 onSubmit,onSubmit 函数必须返回 Promise 对象才能关闭提示框，如果存在 otherForms,values 是一个数组，否则是一个对象 | function(values){return Promise.resolve()} | --                   |
| momentFormat                                                     | 是否在触发 onSubmit 函数后里面传出的 values 中存在 moment 对象进行表单控件对应的 format 格式化，启用此属性，相关 moment 值的控件必需 format 属性                                                              | boolean                                    | false                |
| <i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnName   | 提交按钮的名称，如果为空则不显示默认的提交按钮                                                                                                                                                                | string \| furnction(){return ReactNode;}   | 保存                 |
| <del>submitMsg</del>                                             | <del>提交表单时的确认提示框文本，如果为空，则不会打开提示框直接调用 onSubmit 函数</del>，submitMsg 已经被 confirm.content 替代，这里保留着向下兼容                                                            | string                                     | 点击确定按钮提交数据 |
| <i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnRender | 渲染提交按钮的函数，可以用自定义内容替换默认的提交按钮;参数有 onSubmit：内置的提交按钮的方法,其可传入参数 onSubmit(e,query)，props:Zform 组件的 props,可以取得 props.form                                     | funtion(onSubmit,props){return ReactNode;} | --                   |
| values                                                           | 所有表单控件的值，如{serviceName:"名称"}，"serviceName"对应 items 属性里面的 key                                                                                                                              | object                                     | --                   |
| getFormInstance                                                  | 获取 form 对象的钩子，外部通过(form)=>{this.formIstance=form;}获得 form 对象,通过 this.formInstance.调用 antd [表单相关方法](https://ant.design/components/form-cn/)                                          | function(form,methods){}                   | --                   |
| afterItemsRendered                                               | 所有表单控件渲染完的回调，包括异步渲染控件                                                                                                                                                                    | function(form,methods){}                   | --                   |
| otherForms                                                       | 有时存在多个 Zform 时，只想有一个保存按钮来触发提交，当触发保存时，会调用 otherForms 函数，otherForms 应该 return 一个其他 form 对象的数组，会加上当前的 form 一起验证表单是否通过，通过了才会调用 onSubmit   | function(){return [form1,form2]}           | --                   |
| confirm                                                          | 是一个对象，触发保存按钮后的确认提示框的配置，包含[Antd 的 Modal 的属性（除了 onOk）](https://ant.design/components/modal-cn/)，还包含 show 属性(如果为 false 则不会出现确认提示框，直接调用 onSubmit 函数)   | object                                     | --                   |
| booleanToNumber                                                  | 表单验证通过后是否把 boolean 类型的值转成 0 或 1，通常处理 Switch 控件的值                                                                                                                                    | boolean                                    | true                 |
| controlSize                                                      | 表单控件大小                                                                                                                                                                                                  | default \| large \| small                  | default              |
| excludeHideValue                                                 | onSubmit 的 values 是否不包含隐藏控件的值                                                                                                                                                                     | boolean                                    | true                 |
| excludeHideValid                                                 | 触发 onSubmit 后是否不验证隐藏控件的值                                                                                                                                                                        | boolean                                    | true                 |
| hiddenItemFirstRendering                                         | 默认隐藏的控件是否初始就渲染,并且算入 onSubmit 的提取值                                                                                                                                                       | boolean                                    | false                |
| onlySetCurrentValues                                             | values 存在时 是否 只对当前 form 设置值，排除 otherForms 方法的其他 form                                                                                                                                      | boolean                                    | false                |

## items 结构

| 参数                                                     | 说明                                                                                                                                                                                                                                                   | 类型                                                  | 默认值 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ------ |
| key                                                      | 表单控件 value 对应的字段名                                                                                                                                                                                                                            | string                                                | --     |
| label                                                    | 表单控件 label                                                                                                                                                                                                                                         | string                                                | --     |
| labelFocused                                             | 当 labelLayout==="inline"时，label 是否始终处于聚集样式                                                                                                                                                                                                | boolean                                               | false  |
| labelWidth                                               | label 的宽度，如 labelWidth:"120px"，当 labelLayout=='horizontal'才有效                                                                                                                                                                                | string                                                | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> render  | 渲染表单控件的钩子。支持异步加载：必须 return 的是 Promise 对象。例如使用了后台接口：(form,changeFormItems)=>api.getOptions.then(re=>{return 表单控件})。changeFormItems 是一个方法，主要用于局部改变 items，实现表单控件之间交互联动,使用方式请往下看 | (form,changeFormItems)=>{return ReactNode \| Promise} | --     |
| show                                                     | 默认显示                                                                                                                                                                                                                                               | boolean                                               | true   |
| hiddenRendering                                          | 隐藏时是否强制渲染,并且算入 onSubmit 的提取值,优先级大于 hiddenItemFirstRendering                                                                                                                                                                      | boolean                                               | false  |
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

## 辅助

在`zerod/components/Zform/controls.js`提供了 `getControl(name,config)`和`getOptions(config)` 两个方法

在如下的 items 结构中 render 和 options 内容可用`getControl`和`getOptions`获取：

```jsx
import { getControl, getOptions } from 'zerod/components/Zform/controls';
const items = [
    {
        key: 'numberPlate',
        label: '车牌号码',
        render: (form) => {
            return getControl('Input', { placeholder: '请输入车牌号码' });
        },
        options: getOptions({
            required: true,
            requiredMsg: '请输入车牌号码！',
            rules: [
                {
                    pattern: /^.{1,10}$/,
                    message: '车牌号码必须为长度1到10位的字符！',
                },
            ],
            initialValue: '',
        }),
    },
    {
        key: 'vehicleType',
        label: '车辆类别',
        render: (form) => {
            return getControl('Select', {
                selectList: [
                    { label: '人货车', value: '0' },
                    { label: '的士头', value: '1' },
                    { label: '小汽车', value: '2' },
                    { label: '其他', value: '3' },
                ],
                placeholder: '请选择车辆类别',
            });
        },
        options: getOptions({ required: true, requiredMsg: '请选择车辆类别' }),
    },
];
```

## getControl(name,config)中

name 可选：`Input`、`Input.Group`、`TextArea`、`Switch`、`Select`、`Checkbox`、`InputNumber`、`DatePicker`、`Radio`、`Checkbox.Group`、`Radio.Group`、`TimePicker`、`Upload`、`TreeSelect`、`Mention`、
`RangePicker`、`MonthPicker`、`Rate`、`AutoComplete`（在 antd-design 可找到对应的表单控件）、`TreeInput`(就是 ZtreeInput)、`Cascader`、`ColorPicker`(即 ZcolorPicker)、`TimeRange`(即 ZtimeRange) 、`YearPicker`(年份)

当`Select`、`Checkbox.Group`、`Radio.Group`，需 config.selectList=[{label:"label",value:"value"},]

当`Select`，如果需选择项分组需 config.group=true，并且 config.selectList=[{label:"组名",children:[{label:"label",value:"value"}]},]

```js
getControl('Select', {
    selectList: [{ label: 'label', value: 'value' }], //当`Select`、`Checkbox.Group`、`Radio.Group`时的选项数据
    //...antd-design 可找到对应的表单控件的更多属性
});
```

## getOptions(config) 中

```js
getOptions({
    required: true, //是否必填规则
    requiredMsg: '请选择车辆类别', //是否必填规则的错误提示
    rules: [], //其他规则
    initialValue: 'initialValue', //控件初始值
    //...更多属性同items结构的options
});
```
