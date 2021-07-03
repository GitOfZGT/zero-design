<!--
 * @routePath: /component-doc/ZliveForm-doc
 -->

# 动态表单配置：ZliveForm

`ZliveForm` 是动态表单配置模块

`ZliveFormViewer` 是动态表单展示模块(包括控件联动效果)

`ZliveInfoViewer` 是动态表单值的展示模块(包括控件联动效果)

`联动配置` 类型有：1、单选/多选控制其他控件禁用，1.2、单选/多选控制其他控件启用用，2、单选/多选控制其他控件必填，3、单选/多选控制其控件非必填，4、单选/多选 控制 其他单选/多选的选择项，5.1、单选/多选控制一个组隐藏，5.2、单选/多选控制其他控件隐藏，5.3、单选/多选控制一个组显示，5.4、单选/多选控制其他控件显示，6、身份证号取出生年月日，7、单选联动异步请求选项，8、地图选点取行政区划，9、身份证上传 OCR 识别取值，10.1、运算表达式，10.2、校验表达式，'11.1'、 '正则控制组隐藏'，'11.2'、 '正则控制控件隐藏'，'11.3'、'正则控制组显示'，'11.4'、'正则控制控件显示'，'12'、小程序文本框扫码异步取值，'13.1'、多控件值联合正则控制组，'13.2'、多控件值联合正则控制控件

<!-- @import: ./demo.md -->

## ZliveForm 的 props

| 参数                | 说明                                     | 类型                                                | 默认值 |
| ------------------- | ---------------------------------------- | --------------------------------------------------- | ------ |
| formData            | 渲染整个表单的数据                       | object                                              | --     |
| onSave              | 保存按钮的事件                           | function(newFormData){}                             | --     |
| getMultiRowFormData | 多行编辑表格获取表单的渲染数据的函数     | function({params}){params.formCode;return formData} | --     |
| getExtendComponents | 扩展控件的函数                           | function(){return []}                               | --     |

## ZliveFormViewer 的 props

可追 `className` 、 `style`

| 参数                | 说明                                                                                                                                                                                                        | 类型                                                | 默认值 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------ |
| formData            | 渲染整个表单的数据                                                                                                                                                                                          | object                                              | --     |
| formValues          | 表单字段对应的值                                                                                                                                                                                            | object                                              | --     |
| onSubmit            | submit 类型的按钮触发表单验证通过后的确定回调函数，同/Zform 的 onSubmit                                                                                                                                     | function(values){return Promise.resolve()}          | --     |
| momentFormat        | 是否在触发 onSubmit 函数后里面传出的 values 中存在 moment 对象进行表单控件对应的 format 格式化，启用此属性，相关 moment 值的控件必需 format 属性                                                            | boolean                                             | false  |
| submitBtnRender     | 表单之下的渲染函数，可以渲染一个或多个按钮，或者其他内容。提供了一个 submit 函数，可以直接绑定给提交按钮 click 等, 触发后会用 onSubmit 回调                                                                 | (submit)=>{return ReactNode}                        | --     |
| title               | 表单的标题，默认来自 formData.name, 如果 title==false, 则不显示标题                                                                                                                                         | boolean \| string                                   | --     |
| afterItemsRendered  | 所有表单控件渲染完成（包括异步）的回调                                                                                                                                                                      | funcion                                             | --     |
| customOnChange      | 为某些控件添加 onChange 事件                                                                                                                                                                                | object                                              | --     |
| customFormRules     | 为某些控件添加自定义 rules                                                                                                                                                                                  | object                                              | --     |
| customControlRender | 添加对应的自定义占位控件的渲染函数                                                                                                                                                                          | object                                              | --     |
| getMultiRowFormData | 多行编辑表格获取表单的渲染数的函数据                                                                                                                                                                        | function({params}){params.formCode;return formData} | --     |
| getExtendComponents | 扩展控件的函数                                                                                                                                                                                              | function(){return []}                               | --     |
| confirm             | 是一个对象，触发保存按钮后的确认提示框的配置，包含[Antd 的 Modal 的属性（除了 onOk）](https://ant.design/components/modal-cn/)，还包含 show 属性(如果为 false 则不会出现确认提示框，直接调用 onSubmit 函数) | object                                              | --     |
| allDisabled         | 禁用所有控件                                                                                                                                                                                                | boolean                                             | false  |
| extraValue          | 添加任意的额外值，会作为参数传入内部的异步请求                                                                                                                                                              | object                                              | {}     |

## ZliveFormViewer 实例方法 (通过 Ref 取得)

| 参数              | 说明                                     | 使用                | 返回值            |
| ----------------- | ---------------------------------------- | ------------------- | ----------------- |
| getEachFormMethod | 获取所有 Zform 的 form 实例和 methods    | getEachFormMethod() | [{form, methods}] |

## ZliveInfoViewer 的 props

可追 `className` 、 `style`

| 参数                   | 说明                                     | 类型                                                | 默认值 |
| ---------------------- | ---------------------------------------- | --------------------------------------------------- | ------ |
| formData               | 渲染整个表单的数据                       | object                                              | --     |
| formValues             | 表单字段对应的值                         | object                                              | --     |
| showGroupName          | 是否显示组名                             | boolean                                             | true   |
| canOpenAddressLocation | 地图选点的地址是否需要打开当前位置的地图 | boolean                                             | true   |
| customControlRender    | 添加自定义展示控件的值的渲染函数         | object                                              | --     |
| getMultiRowFormData    | 多行编辑表格获取表单的渲染数的函数据     | function({params}){params.formCode;return formData} | --     |
| getExtendComponents    | 扩展控件的函数                           | function(){return []}                               | --     |

## formData 基本结构

```json
{
    "id": 111, //formId
    "name": "养犬信息登记表",
    "code": "dog_check_in_form",
    "description": "养犬信息登记表",
    "linkages": [
        //联动配置
        {
            "linkageType": "5.1",
            "name": "单选/多选控制组隐藏",
            "src": { "fieldKey": "rfid" },
            "dist": [
                {
                    "srcValue": "2",
                    "fields": [
                        {
                            "groupId": 113,
                            "groupName": "名称"
                        }
                    ]
                }
            ]
        },
        {
            "linkageType": "5.2",
            "name": "单选/多选控制控件隐藏",
            "src": { "fieldKey": "isEntity" },
            "dist": [
                {
                    "srcValue": "2",
                    "fields": [
                        {
                            "fieldKey": "recipientName",
                            "label": "收件人姓名",
                            "fieldType": 1
                        },
                        {
                            "fieldKey": "contact",
                            "label": "联系方式",
                            "fieldType": 4
                        }
                    ]
                }
            ]
        },
        {
            "linkageType": "1",
            "name": "单选/多选控制控件禁用",
            "src": { "fieldKey": "dogSex" },
            "dist": [
                {
                    "srcValue": "2",
                    "fields": [
                        {
                            "fieldKey": "dogProperty",
                            "label": "犬只性质",
                            "fieldType": 3
                        },
                        {
                            "fieldKey": "dogColor",
                            "label": "犬只颜色",
                            "fieldType": 1
                        }
                    ]
                }
            ]
        },
        {
            "linkageType": "2",
            "name": "单选/多选控制控件必填",
            "src": { "fieldKey": "isIris" },
            "dist": [
                {
                    "srcValue": "2",
                    "fields": [
                        {
                            "fieldKey": "birthday",
                            "label": "出生日期",
                            "fieldType": 5
                        }
                    ]
                }
            ]
        },
        {
            "linkageType": "3",
            "name": "单选/多选控制控件非必填",
            "src": { "fieldKey": "isIris" },
            "dist": [
                {
                    "srcValue": "1",
                    "fields": [
                        {
                            "fieldKey": "birthday",
                            "label": "出生日期",
                            "fieldType": 5
                        }
                    ]
                }
            ]
        },
        {
            "linkageType": "4",
            "name": "单选/多选 控制 选项",
            "src": { "fieldKey": "rfid" },
            "dist": [
                {
                    "srcValue": "1",
                    "fields": [
                        {
                            "fieldKey": "domicile",
                            "label": "住所性质",
                            "options": [
                                { "label": "自有", "value": "1" },
                                { "label": "租赁", "value": "2" },
                                { "label": "其他", "value": "3" }
                            ]
                        }
                    ]
                },
                {
                    "srcValue": "2",
                    "fields": [
                        {
                            "fieldKey": "domicile",
                            "label": "住所性质",
                            "options": [{ "label": "自有", "value": "1" }]
                        }
                    ]
                }
            ]
        }
    ],
    "sectionList": [
        //表单控件组
        {
            "id": 111, //groupId
            "formId": 111,
            "name": "犬只信息",
            "seq": 1, //组排序
            "description": "犬只信息表",
            "formFieldInfoList": [
                //表单控件
                {
                    "id": 466,
                    "sectionId": 111,
                    "label": "犬只名称",
                    "fieldKey": "dogName",
                    "fieldType": 1, //控件类型
                    "required": 1, //是否必填
                    "regularExpression": null, //正则表达式
                    "description": null,
                    "errorMsg": null, //验证失败的提示信息
                    "placeholder": null,
                    "span": 8, //栅栏占格(1-24)
                    "labelWidth": 4,
                    "config": "{\"maxLength\":8,\"minLength\":1}", //规则配置等
                    "initialValue": null, //初始值
                    "seq": 1 //排序
                }
            ]
        },
        {
            "id": 112,
            "formId": 111,
            "name": "养犬人信息",
            "seq": 2,
            "description": "养犬人信息表",
            "gmtCreate": "2019-03-26 12:09:59",
            "gmtModified": "2019-03-26 12:09:59",
            "formFieldInfoList": [
                {
                    "id": 475,
                    "sectionId": 112,
                    "label": "养犬人姓名",
                    "fieldKey": "name",
                    "fieldType": 1,
                    "required": 1,
                    "regularExpression": null,
                    "description": null,
                    "errorMsg": null,
                    "placeholder": null,
                    "span": 8,
                    "labelWidth": 4,
                    "config": "{\"maxLength\":8,\"minLength\":1}",
                    "initialValue": null,
                    "seq": 1
                }
            ]
        }
    ],
    //为某些控件添加onChange事件
    "customOnChange": {
        "dogType": function (field, imperativeRef, e) {
            console.log("dogType", field, imperativeRef.current(), e);
        }
    },
    //为某些控件添加自定义rules
    "customFormRules": {
        "dogName": function (field, imperativeRef) {
            console.log("dogName", field, imperativeRef.current());
            return [
                {
                    "validator": (rule, value, callback) => {}
                }
            ];
        }
    },
    "customControlRender": {
        "customsKey": function ({ field, linkages, getGroupsFn }) {
            return <div>9999999</div>;
        }
    }
}
```
