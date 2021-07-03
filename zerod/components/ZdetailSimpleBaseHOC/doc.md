<!-- @routePath:/HOC-doc/ZdetailSimpleBaseHOC-doc -->


# 详情页面：ZdetailSimpleBaseHOC

> 创建简单的详情展示页面，不建议再使用，可直接用 ZpageWrapper 和 Zinfo 组装

`ZdetailSimpleBaseHOC`是一个函数，传入`pageConfig`参数配置，返回一个展示详细内容结构的组件

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZdetailSimpleBaseHOCDemo
 * @description: 基本使用
 * @title: 基本使用
 */
import React from 'react';
import { ZdetailSimpleBaseHOC } from 'zerod';
let defaultConfig = {
	pageHeader: {
		show: true,
		// any
		title: "详情页",
		//any
		content: "描述",
		//element | node
		rightMoreContent: <div>右边</div>,
	},
	detail: {
		panelHeader: "基础信息",
		items: [
			{
				key: "serviceName",
				label: "服务名称",
			},
			{
				key: "serviceCode",
				label: "服务编码",
			},
			{
				key: "serviceProt",
				label: "约定端口号",
				render: (value, record) => {
					return <span className="z-text-red">{value}</span>;
				},
			},
			{
				key: "serviceRemark",
				label: "服务描述",
				span: { lg: 12 },
				render: (value, record) => {
					return value;
				},
			},
		],
		// 用于修改每个item的结构的钩子，(item,data)=>{return <div>{`${item.label}:${data[item.key]}`}</div>}
		itemsRender: null,
		// 获取详情数据的后台接口函数，必须返回 Promise
		detailApiInterface: (id, props) => {
			// return api.config.getServiceDetail({ serviceId: id });
			return Promise.resolve({
				data:{
					serviceRemark:"测试我归属感",serviceName:"斗士大哥"
				}
			})
		},
	},
	// 更多渲染内容
	moreContentRender: function(detail, panel) {
		return (
			<div className="z-panel z-margin-top-20">
				<div className="z-panel-body">更多内容</div>
			</div>
		);
	},
};

export default ZdetailSimpleBaseHOC(defaultConfig)

```



## pageConfig

除了如下的属性，pageConfig还包含 <span class="z-history-href" data-path="/main/HOC-doc/ZpageWraperHOC-doc">HOC/页面头尾结构：ZpageWrapper</span> 的props

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| detail          | 表单配置，请看下面的pageConfig.detail                                                 | object          | --         |
| <i class="zero-icon zerod-shengchangzhouqi"></i> moreContentRender  | 在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象            | (detail,tool) =>{return;}          | --         |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelBeforeRender  | 列表面板上面的渲染函数        | function(detail,tool){return ReacNode;} | --         |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelAfterRender | 列表面板下面的渲染函数 | function(detail,tool){return ReacNode;}   | --         |
| exportSomething  | 是一个获取tool的钩子，相当于组件的componentDidMount          | function(tool){ myTool=tool }          | --         |




## pageConfig.detail

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| panelHeader     | 列表面板的头部内容,为null则不显示面板头部                                          | string \| function(tool){return ;}          | 列表         |
| items           | 同 <span class="z-history-href" data-path="/main/component-doc/Zinfo-doc">组件/Zinfo</span> 的items属性 | array[object]          | --         |
| defaultSpan     | 同 <span class="z-history-href" data-path="/main/component-doc/Zinfo-doc">组件/Zinfo</span> 的defaultSpan属性 | array[object]          | --         |
| detailApiInterface | 获取详细数据的后台接口函数,必须返回Promise,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。then((re)=>{})的回调中re结构须：{ data:{} } | (detailId, props,tool) =>{return Promise;}          | --         |




## tool 参数

pageConfig 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请查看 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：

### tool.methods

tool.methods 是一个对象，内容如下：

| 方法               | 说明                                 | 使用方式                                                        |
| ------------------ | -------------------------------------| ---------------------------------------------------------- |
| getWrapperProps    | 用于获取ZdetailSimpleBaseHOC()返回的那个组件的props | tool.methods.getWrapperProps()                |
| showLoading        | 用于 显示/取消 当前页的loading的方法，必需参数show：true\|false | tool.methods.showLoading(true)     |
| getDetailData      | 会触发pageConfig.detail.detailApiInterface函数 | tool.methods.getDetailData()                      |
| openModal          | 根据当前位置打开下一级rightModal       | tool.methods.openModal(content)                            |
| closeCurrentModal  | 是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数  | tool.methods.closeCurrentModal()                         |
| notice             | 设置滚动区域的style （除了 height属性）  | tool.methods.notice.success("操作成功" [,config])         |



### tool.$router

tool.$router是一个对象，内容如下：

| 属性               | 说明                                 | 使用方式                                                        |
| ------------------ | -------------------------------------| ---------------------------------------------------------- |
| history            | 可以调用push、replace等跳转路由path得方法，[更多请查看react-router的history](https://reacttraining.com/react-router/web/api/history)  | tool.$router.history.push("/login")     |
| location        | 当前路由的相关信息,[更多请查看react-router的location](https://reacttraining.com/react-router/web/api/location) | tool.$router.location.pathname               |
