# 树列表页：ZeditorTreeHOC

`ZeditorTreeHOC`是一个函数，传入`pageConfig`参数配置，返回一个带按钮的树组件

`ZeditorTreeHOC`内置了一个`ZtreePanel`组件，可以`import {ZtreePanel} from "zerod"`引入，`ZtreePanel`的 props 同 `pageConfig.tree`

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
const config = {
	pageHeader: {
		show: true,
		...pageHeader,
	},
	searchForm: {
		// array>[object] | null，如果是null则不显示搜索表单
		items: [
			{
				key: "serviceCode",
				label: "服务编码",
				render: (form) => {
					return <Input placeholder="请输入内容" />;
				},
			},
			{
				key: "serviceName",
				label: "服务名称",
				render: (form) => {
					return <Input placeholder="请输入内容" />;
				},
			},
		],
	},
	tree: {
		treeDataKeys: { id: "areaId" },
		panelHeader: "树",
		// 是否显示新建按钮
		showAddBtn: true,
		// 新建按钮权限控制代码
		addBtnPermCode: "",
		addPageRender: (panel) => {
			return (
				<div className="z-panel z-text-center z-margin-bottom-20">
					<div className="z-panel-body">addPageRender 函数渲染的内容</div>
				</div>
			);
		},
		// 是否显示详情按钮
		showDetailBtn: true,
		// 详情按钮权限控制代码
		detailBtnPermCode: "",
		detailPageRender: (record) => {
			return (
				<div className="z-panel z-text-center z-margin-bottom-20">
					<div className="z-panel-body">detailPageRender 函数渲染的内容</div>
				</div>
			);
		},
		// 是否显示修改按钮
		showUpdateBtn: true,
		// 修改按钮权限控制代码
		updateBtnPermCod: "",
		updatePageRender: (record, panel) => {
			return (
				<div className="z-panel z-text-center z-margin-bottom-20">
					<div className="z-panel-body">updatePageRender 函数渲染的内容</div>
				</div>
			);
		},
		// 是否显示删除按钮
		showDeleteBtn: true,
		// 删除按钮权限控制代码
		deleteBtnPermCod: "",
		//更多操作按钮的map数据
		moreBtnMap: [
			{
				key: "0",
				name: "默认的按钮",
			},
		],
		//更多操作按钮的的点击事件
		onMoreBtnClick: (item, record) => {
			message.success(`您当前点击的是[${record.name}]这条数据`);
		},
		// 获取列表数据的后台接口函数，其必须内部返回Promise
		treeApiInterface: (query) => {
			// return api.area.getChildList({ id: "root" }).then((re) => {
			// 	return { data: re.list };
			// });
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({ data: deepCopy(area.data) });
				}, 500);
			});
		},
		childApiInterface: false,
		// childApiInterface: (query) => {
		// 	return api.area.getChildList({ id: query.areaId }).then((re) => {
		// 		return { data: re.list };
		// 	});
		// },
		// 删除按钮的后台接口函数，其必须内部返回Promise
		deleteApiInterface: (data) => {
			return Promise.resolve();
		},
		panelBeforeRender: (obj) => {
			return (
				<div className="z-panel z-text-center z-margin-bottom-20">
					<div className="z-panel-body">panelBeforeRender 函数渲染的内容</div>
				</div>
			);
		},
		panelAfterRender: (obj) => {
			return (
				<div className="z-panel z-margin-top-20 z-text-center">
					<div className="z-panel-body">panelAfterRender 函数渲染的内容</div>
				</div>
			);
		},
		moreContentRender: (obj) => {
			return (
				<div className="z-panel is-panel-border z-margin-top-20 z-text-center">
					<div className="z-panel-body">moreContentRender 函数渲染的内容</div>
				</div>
			);
		},
	},
};
export default ZeditorTreeHOC(pageConfig);
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
			<td>pageHeader</td>
			<td>页头内容,除了show属性(默认false)，其他属性同 组件/ZpageHeader的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>pageFooter</td>
			<td>页尾内容,除了show属性(默认true)，其他属性同 组件/pageFooter的Props</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>hasBodyPadding</td>
			<td>中间部分是否有padding值</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>searchForm</td>
			<td>查询表单，请看下面的pageConfig.searchForm</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>tree</td>
			<td>列表展示，请看下面的pageConfig.tree</td>
			<td>object</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## pageConfig.searchForm

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
			<td>items</td>
			<td>表单的渲染项，如果为null则不显示查询表单，map结构：{key:表单控件value对应的字段名,lable:表单控件名称,render:渲染表单控件的函数(form,panel)=>{return;},options:<a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>}</td>
			<td>array[object] | null</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## pageConfig.tree

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
			<td>treeDataKeys</td>
			<td>树数据对应的map结构，默认：{ name: "name", id: "id", children: "children" }</td>
			<td>object</td>
			<td>{ name: "name", id: "id", children: "children" }</td>
		</tr>
		<tr>
			<td>treeApiInterface</td>
			<td>获取树列表数据的后台接口函数,其必须返回Promise,参数有query:查询表单相关值</td>
			<td>(query,tool) => Promise对象</td>
			<td>--</td>
		</tr>
		<tr>
			<td>childApiInterface</td>
			<td>异步加载子节点的接口函数，其必须返回Promise,参数有data:当前节点的数据。如果不需要异步加载，设为false即可</td>
			<td>(data,tool) => Promise对象</td>
			<td>false</td>
		</tr>
		<tr>
			<td>deleteApiInterface</td>
			<td>删除按钮后台接口函数,其必须返回Promise,参数有data:每一行数据</td>
			<td>(data,tool) => Promise对象</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showAddBtn</td>
			<td>是否显示新增按钮</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>addBtnPermCode</td>
			<td>新增按钮权限控制代码</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>addPageRender</td>
			<td>新增按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showDetailBtn</td>
			<td>是否显示详情按钮</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>detailBtnPermCode</td>
			<td>详情按钮权限控制代码</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>detailPageRender</td>
			<td>详情按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(record,tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showUpdateBtn</td>
			<td>是否显示修改按钮</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>updateBtnPermCode</td>
			<td>修改按钮权限控制代码</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>updatePageRender</td>
			<td>修改按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(record,tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showDeleteBtn</td>
			<td>是否显示删除按钮</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>deleteBtnPermCode</td>
			<td>删除按钮权限控制代码</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>moreBtnMap</td>
			<td>更多操作按钮的map数据,[{key: "0",name: "默认的按钮",}]</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onMoreBtnClick</td>
			<td>更多操作按钮点击事件,参数有item:当前按钮的map对象，record:当前节点的数据</td>
			<td>function(item, record){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>panelBeforeRender</td>
			<td>列表面板上面的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>panelAfterRender</td>
			<td>列表面板下面的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>moreContentRender</td>
			<td>分页控件下面更多内容的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## tool 参数

pageConfig.tree 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请查看 上下文/ ZerodMainContext ），比如 tool.showRightModal，还提供如下内容：

### tool.getSearchQuery

获取当前查询表单中各控件的值的函数

### tool.methods

tool.methods 是一个对象，内容如下：

<table>
	<thead>
		<tr>
			<th>方法</th>
			<th>说明</th>
			<th>使用方式</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>showLoading</td>
			<td>用于 显示/取消 当前页的loading的方法，参数show：true|false</td>
			<td>tool.methods.showLoading(true)</td>
		</tr>
		<tr>
			<td>loadTreeData</td>
			<td>更新树列表数据的方法，会触发pageConfig.tree的treeApiInterface函数；参数有moreQuery:是一个对象--更多传入treeApiInterface的参数</td>
			<td>tool.methods.loadTreeData()</td>
		</tr>
		<tr>
			<td>removeOneData</td>
			<td>移除当前树的一条数据，参数有rowData:一节点的数据 或者 对应pageConfig.tree.treeDataKeys.id的数据(默认是id)，如传入 {id:5}，则会移除列表数据中id=5的那一条 </td>
			<td>tool.methods.removeOneData({id:5})</td>
		</tr>
		<tr>
			<td>openModal</td>
			<td>打开当前列表所在位置关联的rightModal，与tool.showRightModal有区别；参数content:窗口的内容</td>
			<td>tool.methods.openModal(<\div\>内容<\/div\>)</td>
		</tr>
		<tr>
			<td>closeCurrentModal</td>
			<td>关闭当前的rightModal</td>
			<td>tool.methods.closeCurrentModal()</td>
		</tr>
		<tr>
			<td>currentTreeData</td>
			<td>获取当前树列表的全部数据(数组)的方法</td>
			<td>const treeData=tool.methods.currentTreeData()</td>
		</tr>
		<tr>
			<td>setDataState</td>
			<td>用于主动更新列表数据状态的方法，参数data:列表数据(数组)</td>
			<td>tool.methods.setDataState([...tool.methods.currentTreeData()])</td>
		</tr>
			<tr>
			<td>onAdd</td>
			<td>新增按钮的点击事件，会触发pageConfig.tree.addPageRender函数</td>
			<td>tool.methods.onAdd()</td>
		</tr>
		<tr>
			<td>onUpdate</td>
			<td>修改按钮的点击事件，会触发pageConfig.tree.updatePageRender函数</td>
			<td>tool.methods.onUpdate(record)</td>
		</tr>
		<tr>
			<td>onDetail</td>
			<td>详情按钮的点击事件，会触发pageConfig.tree.detailPageRender函数</td>
			<td>tool.methods.onDetail(record)</td>
		</tr>
		<tr>
			<td>onDelete</td>
			<td>删除按钮的点击事件，会触发pageConfig.tree.deleteApiInterface函数</td>
			<td>tool.methods.onDelete(text,record)</td>
		</tr>
	</tbody>
</table>

### tool.$router

tool.$router 是一个对象，内容如下：

<table>
	<thead>
		<tr>
			<th>属性</th>
			<th>说明</th>
			<th>使用方式</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>history</td>
			<td>可以调用push、replace等跳转路由path得方法，<a href="https://reacttraining.com/react-router/web/api/history" target="_blank"> 更多请查看react-router的history</a></td>
			<td>tool.$router.history.push("/login")</td>
		</tr>
		<tr>
			<td>location</td>
			<td>当前路由的相关信息,<a href="https://reacttraining.com/react-router/web/api/location" target="_blank"> 更多请查看react-router的location</a></td>
			<td>tool.$router.location.pathname</td>
		</tr>
	</tbody>
</table>
