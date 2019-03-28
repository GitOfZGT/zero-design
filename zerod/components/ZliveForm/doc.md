<div class="z-doc-titles"></div>

# 动态表单配置：ZliveForm

`ZliveForm`是动态表单配置模块（暂未完成）

`ZliveForm.FormViewer`是动态表单展示模块(包括控件联动效果)

控件联动功能有：1、单选/多选控制其他控件禁用，2、单选/多选控制其他控件必填，3、单选/多选控制其控件非必填，4、单选/多选 控制 其他单选/多选的选择项，5.1、单选/多选控制一个组隐藏，5.2、单选/多选控制其他控件隐藏

1、ZliveForm.FormViewer 的例子

<div class="z-demo-box" data-render="demo1" data-title="ZliveForm.FormViewer的例子"></div>

```jsx
import React from "react";
import { ZliveForm } from "zerod";
import formData from "./formData";
import linkages from "./linkages";
class Myjavascript extends React.PureComponent {
	formData = { ...formData, linkages };
	onSubmit = (values) => {
		console.log(values);
		return Promise.resolve();
	};
	render() {
		return <ZliveForm.FormViewer formData={this.formData} onSubmit={this.onSubmit} />;
	}
}
```



<div class="z-doc-titles"></div>

## ZliveForm.FormViewer 的 props

| 参数     | 说明                                                                    | 类型                                       | 默认值 |
| -------- | ----------------------------------------------------------------------- | ------------------------------------------ | ------ |
| formData | 渲染整个表单的数据                                                      | object                                     | --     |
| onSubmit | submit 类型的按钮触发表单验证通过后的确定回调函数，同/Zform 的 onSubmit | function(values){return Promise.resolve()} | --     |

## formData 基本结构

<div class="z-demo-box" data-render="demo2" data-title="formData"></div>

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
	"buttonList": [
		//按钮
		{
			"id": 58,
			"formId": 111,
			"buttonType": 1,
			"name": "保存按钮",
			"value": "保存",
			"seq": 1,
			"description": null
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
	]
}
```