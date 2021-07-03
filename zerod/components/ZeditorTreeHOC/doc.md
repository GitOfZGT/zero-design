<!-- @routePath:/HOC-doc/ZeditorTreeHOC-doc -->

# 树列表页：ZeditorTreeHOC

`ZeditorTreeHOC`是一个函数，传入`pageConfig`参数配置，返回一个带按钮的树组件

`ZeditorTreeHOC`内置了一个`ZtreePanel`组件，可以`import {ZtreePanel} from "zerod"`引入，`ZtreePanel`的 props 同 `pageConfig.tree`

1、基本使用

```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZeditorTreeHOCDemo
 * @description:基本使用
 * @title: 基本使用
 */
import React from 'react';
import { ZeditorTreeHOC, zTool } from 'zerod';
import { Input, message, Button } from 'antd';
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
const pageConfig = {
    pageHeader: {
        show: true,
    },
    searchForm: {
        // array>[object] | null，如果是null则不显示搜索表单
        items: [
            {
                key: 'serviceCode',
                label: '服务编码',
                render: (form) => {
                    return <Input placeholder="请输入内容" />;
                },
            },
            {
                key: 'serviceName',
                label: '服务名称',
                render: (form) => {
                    return <Input placeholder="请输入内容" />;
                },
            },
        ],
    },
    tree: {
        treeDataKeys: { id: 'areaId' },
        panelHeader: '树',
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
        updateBtnPermCod: '',
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
        deleteBtnPermCod: '',
        //更多操作按钮的map数据
        moreBtnMap: [
            {
                key: '0',
                name: '默认的按钮',
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
            return axios.get(`${baserouter}/static/area.json`).then((res) => {
                console.log(res);
                return res;
            });
            // return new Promise(resolve => {
            // 	setTimeout(() => {
            // 		resolve({ data: deepCopy(area.data) });
            // 	}, 500);
            // });
        },
        childApiInterface: false,
        // childApiInterface: (query) => {
        // 	return api.area.getChildList({ id: query.areaId }).then((re) => {
        // 		return { data: re.list };
        // 	});
        // },
        // 删除按钮的后台接口函数，其必须内部返回Promise
        // deleteApiInterface: data => {
        // 	return Promise.resolve();
        // },
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

除了如下的属性，pageConfig 还包含 <span class="z-history-href" data-path="/main/HOC-doc/ZpageWraperHOC-doc">HOC/页面头尾结构：ZpageWrapper</span> 的 props

| 参数       | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 类型       | 默认值 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| searchForm | <p>1、<code>searchForm.defaultExpanded</code> 是否默认展开表单,(默认 false)</p><p>2、<code>searchForm.insertTo</code> 此属性可以是:一个已存在的 dom 元素 \|\| 一个已存在的 dom 元素的 Id \|\| true \|\| false \|\| (tool)=>{return 一个已存在的 dom 元素 \|\| 一个已存在的 dom 元素的 Id \|\| true \|\| false}，其用途为：将 searchForm 插到某个 dom 元素内,如为 true 则插到页头显示,(默认 false)</p><p>3、<code>searchForm 的其他属性</code>还包含： 请查看 <span class="z-history-href" data-path="/main/component-doc/ZsearchForm-doc">组件/ZsearchForm</span> 的 props (除了 onSearch, onReset, noCollapse ,hidden ,其他都有效)。</p><p>4、其中<code>searchForm.items</code>的<code>render 函数</code>的参数在这里多加 tool,如：items:[{render:(form,changeFormItems,tool)=>{},key:"myKey"}]。</p><p>5、其中<code>searchForm.items</code>的<code>options 函数</code>的参数在这里多加 tool,如：items:[{options:(tool)=>options}]。</p><p>6、<code>searchForm</code>的其他<code>函数属性</code>除了原有的参数，还多加 tool，如 <code>searchForm.afterItemsRendered</code>:(form,methods,tool)=>{}</p> | object     | --     |
| tree       | 列表展示，请看下面的 pageConfig.tree                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | object     | --     |

## pageConfig.tree

| 参数                                                                 | 说明                                                                                                                                                                                                                                  | 类型                                            | 默认值                                           |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelHeader         | 列表面板的头部内容,为 null 则不显示面板头部。也可以是一个对象：{left:(tool)=>span,center:(tool)=>span,right:(tool)=>span,}                                                                                                            | string \| (tool)=>span \| object                | 列表                                             |
| treeDataKeys                                                         | 树数据对应的 map 结构，默认：{ name: "name", id: "id", children: "children" }                                                                                                                                                         | object                                          | { name: "name", id: "id", children: "children" } |
| treeProps                                                            | [Antd 的 Tree 参数](https://ant.design/components/tree-cn/),除了 loadData,loadedKeys,onLoad，其他可用，其中启用 draggable 后 onDrop 参数扩展 function(info,dropData,done,tool){}，defaultExpandAll 可采用 funtion(tool){return true;} | object                                          | { name: "name", id: "id", children: "children" } |
| nodeTitleRender                                                      | 每个节点的 title 渲染函数                                                                                                                                                                                                             | function(text,record){return text;}             | --                                               |
| treeApiInterface                                                     | 获取树列表数据的后台接口函数,其必须返回 Promise,参数有 query:查询表单相关值。                                                                                                                                                         | (query,tool) => Promise 对象                    | --                                               |
| childApiInterface                                                    | 异步加载子节点的接口函数，其必须返回 Promise,参数有 data:当前节点的数据。如果不需要异步加载，设为 false 即可                                                                                                                          | (data,tool) => Promise 对象                     | false                                            |
| deleteApiInterface                                                   | 删除按钮后台接口函数,其必须返回 Promise,参数有 data:每一行数据                                                                                                                                                                        | (data,tool) => Promise 对象                     | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> showAddBtn          | 是否显示新增按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | true                                             |
| addPageRender                                                        | 新增按钮打开的页面渲染函数,如果函数 return false,此函数相当于按钮点击事件的回调；tool 参数是列表组件的内部提供的一些工具方法                                                                                                          | function(tool){return ReacNode}                 | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> showAddChildBtn     | 是否显示新增子节点按钮                                                                                                                                                                                                                | boolean \| function(record,index){return false} | true                                             |
| addChildPageRender                                                   | 新增子节点按钮打开的页面渲染函数,如果函数 return false,此函数相当于按钮点击事件的回调；tool 参数是列表组件的内部提供的一些工具方法                                                                                                    | function(record,tool){return ReacNode}          | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> showDetailBtn       | 是否显示详情按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | true                                             |
| detailPageRender                                                     | 详情按钮打开的页面渲染函数,如果函数 return false,此函数相当于按钮点击事件的回调；tool 参数是列表组件的内部提供的一些工具方法                                                                                                          | function(record,tool){return ReacNode}          | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> showUpdateBtn       | 是否显示修改按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | true                                             |
| updatePageRender                                                     | 修改按钮打开的页面渲染函数,如果函数 return false,此函数相当于按钮点击事件的回调；tool 参数是列表组件的内部提供的一些工具方法                                                                                                          | function(record,tool){return ReacNode}          | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> showDeleteBtn       | 是否显示删除按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | true                                             |
| moreBtnType                                                          | 更多操作按钮显示类型                                                                                                                                                                                                                  | rounding \| menu                                | rounding                                         |
| moreBtnMap                                                           | 更多操作按钮的 map 数据,[{key: "0",name: "默认的按钮", <i class="zero-icon zerod-shengchangzhouqi"></i> show: boolean \| function(record,index,item){return true;},disabled:boolean}]                                                 | array[object]                                   | --                                               |
| onMoreBtnClick                                                       | 更多操作按钮点击事件,参数有 item:当前按钮的 map 对象，record:当前节点的数据                                                                                                                                                           | function(item, record){}                        | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelBeforeRender   | 列表面板上面的渲染函数                                                                                                                                                                                                                | function(tool){return ReacNode;}                | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> panelAfterRender    | 列表面板下面的渲染函数                                                                                                                                                                                                                | function(tool){return ReacNode;}                | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> moreContentRender   | 分页控件下面更多内容的渲染函数                                                                                                                                                                                                        | function(tool){return ReacNode;}                | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> addBtnDisabled      | 是否禁用新建按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | false                                            |
| <i class="zero-icon zerod-shengchangzhouqi"></i> addChildBtnDisabled | 是否禁用新建按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | false                                            |
| <i class="zero-icon zerod-shengchangzhouqi"></i> detailBtnDisabled   | 是否禁用详情按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | false                                            |
| <i class="zero-icon zerod-shengchangzhouqi"></i> updateBtnDisabled   | 是否禁用修改按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | false                                            |
| <i class="zero-icon zerod-shengchangzhouqi"></i> deleteBtnDisabled   | 是否禁用删除按钮                                                                                                                                                                                                                      | boolean \| function(record,index){return false} | false                                            |
| exportSomething                                                      | 是一个获取 tool 的钩子，相当于组件的 componentDidMount                                                                                                                                                                                | function(tool){ myTool=tool }                   | --                                               |

## tool 参数

pageConfig.tree 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：

### tool.getSearchQuery

获取当前查询表单中各控件的值的函数

### tool.methods

tool.methods 是一个对象，内容如下：

| 方法              | 说明                                                                                                                                                                                                                                                             | 使用方式                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| getWrapperProps   | 用于获取 ZeditorTreeHOC()返回的那个组件的 props                                                                                                                                                                                                                  | tool.methods.getWrapperProps()                                 |
| showLoading       | 用于 显示/取消 当前页的 loading 的方法，参数 show：true\|false                                                                                                                                                                                                   | tool.methods.showLoading(true)                                 |
| loadTreeData      | 更新树列表数据的方法，会触发 pageConfig.tree 的 treeApiInterface 函数；参数有 moreQuery:是一个对象--更多传入 treeApiInterface 的参数                                                                                                                             | tool.methods.loadTreeData()                                    |
| removeOneData     | 移除当前树的一条数据，参数有 rowData:一节点的数据 或者 对应 pageConfig.tree.treeDataKeys.id 的数据(默认是 id)，如 tool.methods.removeOneData({id:5})，则会移除列表数据中 id=5 的那一条                                                                           | tool.methods.removeOneData({id:5})                             |
| replaceOneData    | 替换当前树的一条数据，参数有 rowData:一节点的数据 或者 对应 pageConfig.tree.treeDataKeys.id 的数据(默认是 id),newData:替换的新数据，如 tool.methods.replaceOneData({id:5}，newData)，则会替换列表数据中 id=5 的那一条                                            | tool.methods.replaceOneData({id:5}，newData)                   |
| addOneChildData   | 在当前树的一条数据中新增一条子数据，参数有 rowData:一节点的数据 或者 对应 pageConfig.tree.treeDataKeys.id 的数据(默认是 id),newData:新增的子数据，如 tool.methods.addOneChildData({id:5}，newData)，则会在列表数据中 id=5 的那一条数据的 children 里新增 newData | tool.methods.addOneChildData({id:5}，newData)                  |
| openModal         | 打开当前列表所在位置关联的 rightModal，与 tool.showRightModal 有区别；参数 content:窗口的内容                                                                                                                                                                    | tool.methods.openModal(\<div>内容<\/div\>)                     |
| closeCurrentModal | 关闭当前的 rightModal                                                                                                                                                                                                                                            | tool.methods.closeCurrentModal()                               |
| currentTreeData   | 获取当前树列表的全部数据(数组)的方法                                                                                                                                                                                                                             | const treeData=tool.methods.currentTreeData()                  |
| setDataState      | 用于主动更新列表数据状态的方法，参数 data:列表数据(数组)                                                                                                                                                                                                         | tool.methods.setDataState([...tool.methods.currentTreeData()]) |
| onAdd             | 新增按钮的点击事件，会触发 pageConfig.tree.addPageRender 函数                                                                                                                                                                                                    | tool.methods.onAdd()                                           |
| onAddChild        | 新增子节点按钮的点击事件，会触发 pageConfig.tree.addChildPageRender 函数                                                                                                                                                                                         | tool.methods.onAddChild()                                      |
| onUpdate          | 修改按钮的点击事件，会触发 pageConfig.tree.updatePageRender 函数                                                                                                                                                                                                 | tool.methods.onUpdate(record)                                  |
| onDetail          | 详情按钮的点击事件，会触发 pageConfig.tree.detailPageRender 函数                                                                                                                                                                                                 | tool.methods.onDetail(record)                                  |
| onDelete          | 删除按钮的点击事件，会触发 pageConfig.tree.deleteApiInterface 函数                                                                                                                                                                                               | tool.methods.onDelete(text,record)                             |
| notice            | 是一个对象，弹出提示通告的方式，跟 ZmainHOC 中的 noticeType 有关，属性函数有 success、error、info、warning，它们的参数有 content:提示内容，config:同 antd 的 notification 和 message 参数                                                                        | tool.methods.notice.success("操作成功" [,config])              |

### tool.\$router

tool.\$router 是一个对象，内容如下：

| 属性     | 说明                                                                                                                                        | 使用方式                            |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| history  | 可以调用 push、replace 等跳转路由 path 得方法，[更多请查看 react-router 的 history](https://reacttraining.com/react-router/web/api/history) | tool.$router.history.push("/login") |
| location | 当前路由的相关信息, [更多请查看 react-router 的 location](https://reacttraining.com/react-router/web/api/location)                          | tool.$router.location.pathname      |
