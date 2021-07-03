<!-- @routePath:/HOC-doc/ZeditSimpleFormHOC-doc -->

# 编辑页面：ZeditSimpleFormHOC

> 创建简单的表单页面，不建议再使用，可直接用 ZpageWrapper 和 Zform 组装

`ZeditSimpleFormHOC`是一个函数，传入`pageConfig`参数配置，返回一个表单编辑结构的组件

1、新增表单

```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZeditSimpleFormHOCDemo
 * @description: 基本使用
 * @title: 基本使用
 */
import React from 'react';
import { Input, InputNumber, Button } from 'antd';
import { ZeditSimpleFormHOC, zTool } from 'zerod';

const pageConfig = {
    pageHeader: {
        show: true,
        // any
        title: '表单页',
        //any
        content: '描述',
        //element | node
        rightMoreContent: <div>右边</div>,
    },
    form: {
        type: 'add',
        panelHeader: '新增服务信息',
        items: [
            {
                key: 'serviceCode',
                label: '服务编码',
                render: (form) => {
                    return <Input placeholder="请输入服务编码" />;
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
            {
                key: 'servicePort',
                detailKey: 'serviceProt',
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
                key: 'quick',
                label: '快捷操作',
                render: (form) => {
                    return (
                        <Button
                            onClick={() => {
                                // form.setFieldsValue({
                                // 	confProperty: defaultConfigData.default,
                                // });
                            }}>
                            模板配置
                        </Button>
                    );
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
        ],
        // detailApiInterface: (id, props) => {
        // 	return api.config.getServiceDetail({ serviceId: id });
        // },
        // submitApiInterface: (values, props) => {
        // 	return api.config.addService(Object.assign({}, values, { environment: "default" }));
        // },
    },
    moreContentRender: function () {
        return (
            <div className="z-panel z-margin-top-20">
                <div className="z-panel-body">moreContentRender</div>
            </div>
        );
    },
    panelBeforeRender: function () {
        return (
            <div className="z-panel z-margin-bottom-20">
                <div className="z-panel-body">panelBeforeRender</div>
            </div>
        );
    },
    panelAfterRender: function () {
        return (
            <div className="z-panel z-margin-top-20">
                <div className="z-panel-body">更多内容</div>
            </div>
        );
    },
};
export default ZeditSimpleFormHOC(pageConfig);
```

## pageConfig

除了如下的属性，pageConfig 还包含 <span class="z-history-href" data-path="/main/HOC-doc/ZpageWraperHOC-doc">HOC/页面头尾结构：ZpageWrapper</span> 的 props

| 参数                                                               | 说明                                                                                                            | 类型                                    | 默认值 |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------ |
| form                                                               | 表单配置，请看下面的 pageConfig.form                                                                            | object                                  | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> moreContentRender | 在表单之后添加更多内容的渲染函数,有两个参数 detail：detailApiInterface 接口获取的详情数据、panel:组件的实例对象 | (detail,tool) =>{return;}               | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelBeforeRender | 列表面板上面的渲染函数                                                                                          | function(detail,tool){return ReacNode;} | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelAfterRender  | 列表面板下面的渲染函数                                                                                          | function(detail,tool){return ReacNode;} | --     |

## pageConfig.form

| 参数                                                             | 说明                                                                                                                                                                                                                                                            | 类型                                            | 默认值               |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------- |
| type                                                             | 表单类型：新增操作 \| 修改操作                                                                                                                                                                                                                                  | add \| update                                   | mainRoute            |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelHeader     | 列表面板的头部内容,为 null 则不显示面板头部                                                                                                                                                                                                                     | string \| function(tool){return ;}              | 列表                 |
| items                                                            | 生成表单的 json 数组，结构：同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的 items 结构,render 函数参数在这里多加 tool,如：items:[{render:(form,changeFormItems,tool)=>{}}]                                       | array[object] \| null                           | --                   |
| defaultSpan                                                      | 同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的 defaultSpan 属性                                                                                                                                                 | number \| object                                | --                   |
| submitBtnName                                                    | 同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的 submitBtnName 属性                                                                                                                                               | string                                          | 保存                 |
| submitMsg                                                        | 同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的 submitMsg 属性                                                                                                                                                   | string                                          | 点击确定按钮提交数据 |
| afterItemsRendered                                               | 同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的 afterItemsRendered 属性                                                                                                                                          | function                                        | 所有控件渲染的回调   |
| <i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnRender | 同 <span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform</span> 的 submitBtnRender 属性                                                                                                                                             | funtion(onSubmit,props,tool){return ReactNode;} | --                   |
| detailApiInterface                                               | 获取详细数据的后台接口函数,必须返回 Promise,只有 form.type="update"才自动调用,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的 detailId 属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。then((re)=>{})的回调中 re 结构须：{ data:{} } | (detailId, props,tool) =>{return Promise;}      | --                   |
| submitApiInterface                                               | 保存数据的后台接口函数,即保存按钮点击触发的函数,必须返回 Promise,参数有：values:表单的值，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性                                                                                                              | (values, props,tool) =>{return Promise;}        | --                   |
| showSubmitBtn                                                    | 是否显示提交按钮                                                                                                                                                                                                                                                | boolean                                         | true                 |
| afterSubmitSuccess                                               | 保存数据成功的回调 values：表单的值                                                                                                                                                                                                                             | (value, tool) =>{}                              | --                   |
| exportSomething                                                  | 是一个获取 tool 的钩子，相当于组件的 componentDidMount                                                                                                                                                                                                          | function(tool){ myTool=tool }                   | --                   |

## tool 参数

pageConfig 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：

### tool.getFormInstance

是一个方法，可以 const myform=tool.getFormInstance()取得 antd 中经 Form.create() 包装过的组件自带的 this.props.form 属性;<a href="https://ant.design/components/form-cn/" target="_blank"> 更多请查看 antd 的 Form</a>

### tool.getFormMethods

是一个方法，可以 const myMethods=tool.getFormMethods()取得 Zform 中的 methods 属性;

### tool.methods

tool.methods 是一个对象，内容如下：

| 方法              | 说明                                                                                                                                                                                      | 使用方式                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| getWrapperProps   | 用于获取 ZeditSimpleFormHOC()返回的那个组件的 props                                                                                                                                       | tool.methods.getWrapperProps()                    |
| showLoading       | 用于 显示/取消 当前页的 loading 的方法，必需参数 show：true \| false                                                                                                                      | tool.methods.showLoading(true)                    |
| getFormDetailData | 会触发 pageConfig.form.detailApiInterface 函数                                                                                                                                            | tool.methods.getFormDetailData()                  |
| openModal         | 根据当前位置打开下一级 rightModal                                                                                                                                                         | tool.methods.openModal(content)                   |
| closeCurrentModal | 关闭当前的 rightModal                                                                                                                                                                     | tool.methods.closeCurrentModal()                  |
| onSubmit          | ZeditSimpleFormHOC 的 submit 方法，需参数 values:表单的所有值的 map 对象，tool.submit(values)会触发 submitApiInterface，异步回调后会触发 afterSuccess                                     | tool.methods.onSubmit(values)                     |
| notice            | 是一个对象，弹出提示通告的方式，跟 ZmainHOC 中的 noticeType 有关，属性函数有 success、error、info、warning，它们的参数有 content:提示内容，config:同 antd 的 notification 和 message 参数 | tool.methods.notice.success("操作成功" [,config]) |

### tool.\$router

tool.\$router 是一个对象，内容如下：

| 属性     | 说明                                                                                                                                        | 使用方式                            |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| history  | 可以调用 push、replace 等跳转路由 path 得方法，[更多请查看 react-router 的 history](https://reacttraining.com/react-router/web/api/history) | tool.$router.history.push("/login") |
| location | 当前路由的相关信息,[更多请查看 react-router 的 location](https://reacttraining.com/react-router/web/api/location)                           | tool.$router.location.pathname      |
