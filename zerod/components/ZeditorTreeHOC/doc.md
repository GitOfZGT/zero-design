<div class="z-doc-titles"></div>

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
		addPageRender: (panel) => {
			return (
				<div className="z-panel z-text-center z-margin-bottom-20">
					<div className="z-panel-body">addPageRender 函数渲染的内容</div>
				</div>
			);
		},
		// 是否显示详情按钮
		showDetailBtn: true,
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

<div class="z-doc-titles"></div>

## pageConfig

除了如下的属性，pageConfig 还包含 <span class="z-history-href" data-path="/main/HOC-doc/ZpageWraperHOC-doc">HOC/页面头尾结构：ZpageWrapper</span> 的 props

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
			<td>searchForm</td>
			<td>
				<p>1、<code>searchForm.defaultExpanded</code> 是否默认展开表单,(默认false)</p>
				<p>2、<code>searchForm.insertTo</code> 此属性可以是:一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false || (tool)=>{return 一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false}，其用途为：将searchForm插到某个dom元素内,如为true则插到页头显示,(默认false)</p>
				<p>3、<code>searchForm的其他属性</code>还包含： 请查看 <span class="z-history-href" data-path="/main/component-doc/ZsearchForm-doc">组件/ZsearchForm</span> 的 props  (除了onSearch, onReset, noCollapse ,hidden ,其他都有效)。</p>
				<p>4、其中<code>searchForm.items</code>的<code>render函数</code>的参数在这里多加tool,如：items:[{render:(form,changeFormItems,tool)=>{},key:"myKey"}]。</p>
				<p>5、其中<code>searchForm.items</code>的<code>options函数</code>的参数在这里多加tool,如：items:[{options:(tool)=>options}]。</p>
				<p>6、<code>searchForm</code>的其他<code>函数属性</code>除了原有的参数，还多加tool，如 <code>searchForm.afterItemsRendered</code>:(form,methods,tool)=>{}</p>
			</td>
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

<div class="z-doc-titles"></div>

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
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelHeader</td>
			<td>列表面板的头部内容,为null则不显示面板头部。也可以是一个对象：{left:(tool)=>span,center:(tool)=>span,right:(tool)=>span,}</td>
			<td>string | (tool)=>span | object</td>
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
			<td>获取树列表数据的后台接口函数,其必须返回Promise,参数有query:查询表单相关值。</td>
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
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showAddBtn</td>
			<td>是否显示新增按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>addPageRender</td>
			<td>新增按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showAddChildBtn</td>
			<td>是否显示新增子节点按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>addChildPageRender</td>
			<td>新增子节点按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showDetailBtn</td>
			<td>是否显示详情按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>detailPageRender</td>
			<td>详情按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(record,tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showUpdateBtn</td>
			<td>是否显示修改按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>updatePageRender</td>
			<td>修改按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(record,tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showDeleteBtn</td>
			<td>是否显示删除按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>moreBtnType</td>
			<td>更多操作按钮显示类型</td>
			<td>rounding | menu</td>
			<td>rounding</td>
		</tr>
		<tr>
			<td>moreBtnMap</td>
			<td>更多操作按钮的map数据,[{key: "0",name: "默认的按钮", <i class="zero-icon zerod-shengchangzhouqi"></i> show: boolean | function(record,index,item){return true;},disabled:boolean}]</td>
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
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelBeforeRender</td>
			<td>列表面板上面的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelAfterRender</td>
			<td>列表面板下面的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> moreContentRender</td>
			<td>分页控件下面更多内容的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> addBtnDisabled</td>
			<td>是否禁用新建按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> addChildBtnDisabled</td>
			<td>是否禁用新建按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> detailBtnDisabled</td>
			<td>是否禁用详情按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> updateBtnDisabled</td>
			<td>是否禁用修改按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> deleteBtnDisabled</td>
			<td>是否禁用删除按钮</td>
			<td>boolean | function(record,index){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td>exportSomething</td>
			<td>是一个获取tool的钩子，相当于组件的componentDidMount</td>
			<td>function(tool){ myTool=tool }</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

## tool 参数

pageConfig.tree 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：

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
			<td>移除当前树的一条数据，参数有rowData:一节点的数据 或者 对应pageConfig.tree.treeDataKeys.id的数据(默认是id)，如tool.methods.removeOneData({id:5})，则会移除列表数据中id=5的那一条 </td>
			<td>tool.methods.removeOneData({id:5})</td>
		</tr>
		<tr>
			<td>replaceOneData</td>
			<td>替换当前树的一条数据，参数有rowData:一节点的数据 或者 对应pageConfig.tree.treeDataKeys.id的数据(默认是id),newData:替换的新数据，如tool.methods.replaceOneData({id:5}，newData)，则会替换列表数据中id=5的那一条 </td>
			<td>tool.methods.replaceOneData({id:5}，newData)</td>
		</tr>
		<tr>
			<td>addOneChildData</td>
			<td>在当前树的一条数据中新增一条子数据，参数有rowData:一节点的数据 或者 对应pageConfig.tree.treeDataKeys.id的数据(默认是id),newData:新增的子数据，如tool.methods.addOneChildData({id:5}，newData)，则会在列表数据中id=5的那一条数据的children里新增newData </td>
			<td>tool.methods.addOneChildData({id:5}，newData)</td>
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
		</tr>
			<tr>
			<td>onAddChild</td>
			<td>新增子节点按钮的点击事件，会触发pageConfig.tree.addChildPageRender函数</td>
			<td>tool.methods.onAddChild()</td>
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
		<tr>
			<td>notice</td>
			<td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>
			<td>tool.methods.notice.success("操作成功" [,config])</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

### tool.\$router

tool.\$router 是一个对象，内容如下：

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
