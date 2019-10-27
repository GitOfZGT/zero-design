<!--
 * @Author: zgt
 * @Date: 2019-09-20 19:52:56
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-12 17:04:09
 * @Description: file content
 -->
# 动态表单配置：ZliveForm

`ZliveForm` 是动态表单配置模块

`ZliveForm.FormViewer` 是动态表单展示模块(包括控件联动效果)

控件联动功能有：1、单选/多选控制其他控件禁用，2、单选/多选控制其他控件必填，3、单选/多选控制其控件非必填，4、单选/多选 控制 其他单选/多选的选择项，5.1、单选/多选控制一个组隐藏，5.2、单选/多选控制其他控件隐藏，6、身份证号取出生年月日，7、单选联动异步请求选项，8、地图选点取行政区划

2、ZliveForm 的例子

<div class="z-demo-box" data-render="demo0" data-title="ZliveForm的例子"></div>

``` jsx
import React from "react";
import { ZliveForm } from "zerod";
import formData from "./formData";
import linkages from "./linkages";
class Myjavascript extends React.PureComponent {
	formData = { ...formData, linkages };
	onSave = newFormData => {
		console.log(newFormData);
	};
	render() {
		return <ZliveForm formData={this.formData} onSave={this.onSave} />;
	}
}
```

1、ZliveForm. FormViewer 的例子

<div class="z-demo-box" data-render="demo1" data-title="ZliveForm. FormViewer的例子"></div>

``` jsx
import React from "react";
import { ZliveForm } from "zerod";
import formData from "./formData";
import linkages from "./linkages";
class Myjavascript extends React.PureComponent {
	formData = { ...formData, linkages };
	onSubmit = values => {
		console.log(values);
		return Promise.resolve();
	};
	render() {
		return <ZliveForm.FormViewer formData={this.formData} onSubmit={this.onSubmit} />;
	}
}
```

<div class="z-doc-titles"></div>

## ZliveForm 的 props

| 参数     | 说明                                     | 类型                    | 默认值 |
| -------- | ---------------------------------------- | ----------------------- | ------ |
| formData | 渲染整个表单的数据                       | object                  | --     |
| onSave   | 保存按钮的事件                           | function(newFormData){} | --     |

<div class="z-doc-titles"></div>

## ZliveForm. FormViewer 的 props

可追 `className` 、 `style` 

| 参数               | 说明                                                                                                                                             | 类型                                       | 默认值 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------ |
| formData           | 渲染整个表单的数据                                                                                                                               | object                                     | --     |
| formValues         | 表单字段对应的值                                                                                                                                 | object                                     | --     |
| onSubmit           | submit 类型的按钮触发表单验证通过后的确定回调函数，同/Zform 的 onSubmit                                                                          | function(values){return Promise.resolve()} | --     |
| momentFormat       | 是否在触发 onSubmit 函数后里面传出的 values 中存在 moment 对象进行表单控件对应的 format 格式化，启用此属性，相关 moment 值的控件必需 format 属性 | boolean                                    | false  |
| submitBtnRender    | 表单之下的渲染函数，可以渲染一个或多个按钮，或者其他内容。提供了一个 submit 函数，可以直接绑定给提交按钮 click 等, 触发后会用 onSubmit 回调       | (submit)=>{return ReactNode}               | --     |
| linkage            | 是否启用联动功能 (联动的前提 formData 中存在 linkages 配置)                                                                                      | boolean                                    | true   |
| title              | 表单的标题，默认来自 formData.name, 如果 title==false, 则不显示标题                                                                               | boolean \| string                          | --     |
| afterItemsRendered | 所有表单控件渲染完成（包括异步）的回调                                                                                                           | funcion                                    | --     |
| customOnChange | 为某些控件添加onChange事件                                                                                                           | object                                    | --     |
| customFormRules | 为某些控件添加自定义rules                                                                                                           | object                                    | --     |
| customControlRender | 添加对应的自定义占位控件的渲染函数                                                                                                           | object                                    | --     |

## ZliveForm. FormViewer 实例方法 (通过 Ref 取得)

| 参数              | 说明                                     | 使用                | 返回值           |
| ----------------- | ---------------------------------------- | ------------------- | ---------------- |
| getEachFormMethod | 获取所有 Zform 的 form 实例和 methods    | getEachFormMethod() | [{form, methods}] |

## formData 基本结构

<div class="z-demo-box" data-render="demo2" data-title="formData"></div>

``` json
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
		"dogType": function(field, imperativeRef, e) {
			console.log("dogType", field, imperativeRef.current(), e);
		}
	},
	//为某些控件添加自定义rules
	"customFormRules": {
		"dogName": function(field, imperativeRef) {
			console.log("dogName", field, imperativeRef.current());
			return [
				{
					"validator": (rule, value, callback) => {}
				}
			];
		}
	},
	"customControlRender":{
		"customsKey":function({field,linkages,getGroupsFn}){
			return <div>9999999</div>
		}
	}
}
```

