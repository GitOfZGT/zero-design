# 详情页面：ZdetailSimpleBaseHOC

`ZdetailSimpleBaseHOC`是一个函数，传入`pageConfig`参数配置，返回一个展示详细内容结构的组件

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
let defaultConfig = {
	insertLocation: "mainModal",
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
			return api.config.getServiceDetail({ serviceId: id });
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
```

## pageConfig

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>insertLocation</td>
			<td>这个组件渲染在的位置，mainRoute:main子路由，mainModal:在main子路由区域打开的右边窗口，appModal:在最外层打开的右边窗口</td>
			<td>mainRoute | mainModal | appModal</td>
			<td>mainRoute</td>
		</tr>
		<tr>
			<td>pageHeader</td>
			<td>页头内容,除了show属性，其他属性同 组件/ZpageHeader的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>detail</td>
			<td>表单配置，请看下面的pageConfig.detail</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>moreContentRender</td>
			<td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>
			<td>(detail,tool) =>{return;}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## pageConfig.detail

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>panelHeader</td>
			<td>列表面板的头部内容,为null则不显示面板头部</td>
			<td>string | function(){return ;}</td>
			<td>列表</td>
		</tr>
		<tr>
			<td>items</td>
			<td>同 组件/Zinfo的items属性</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>defaultSpan</td>
			<td>同 组件/Zinfo的defaultSpan属性</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>detailApiInterface</td>
			<td>获取详细数据的后台接口函数,必须返回Promise,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性</td>
			<td>(detailId, props,tool) =>{return Promise;}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>


## tool 参数

pageConfig 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

### tool.showLoading

用于显示/取消当前页的loading  :  tool.showLoading(true)