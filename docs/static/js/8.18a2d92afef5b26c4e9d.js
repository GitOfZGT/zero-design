(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "3OXX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(10);

/***/ }),

/***/ "Fok6":
/***/ (function(module, exports) {

module.exports = "<div class=\"z-doc-titles\"></div>\n\n<h1 id=\"-zsearchlisthoc\">列表展示：ZsearchListHOC</h1>\n<p><code>ZsearchListHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个有头有尾有查询列表的组件</p>\n<p><code>ZsearchListHOC</code>内置了一个<code>ZlistPanel</code>组件，可以<code>import {ZlistPanel} from &quot;zerod&quot;</code>引入，<code>ZlistPanel</code>的 props 同 <code>pageConfig.list</code></p>\n<p>1、table 类型</p>\n<div class=\"z-demo-box\" data-render=\"demo1\" data-title=\"此demo结合ZeditSimpleFormHOC、ZdetailSimpleBaseHOC的完整示例\"></div>\n\n<pre><code class=\"language-jsx\">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Input, message } from &quot;antd&quot;;\nimport { ZsearchListHOC, zTool } from &quot;zerod&quot;;\n\nimport api from &quot;@/App.api.js&quot;;\n\nimport getEditPage from &quot;./getEditPage.js&quot;;\nimport getDetailPage from &quot;./getDetailPage.js&quot;;\n\nconst pageConfig = {\n    pageHeader: {\n        show: true,\n        trademark: &lt;img src=&quot;https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png&quot; width=&quot;60&quot; className=&quot;z-margin-right-15&quot; /&gt;,\n        // array&gt;[object] | null,如果是null则不显示面包屑\n        breadcrumbRoutes: [{ path: &quot;config&quot;, name: &quot;案例&quot;, link: false }, { path: &quot;serviceWithTableList&quot;, name: &quot;表格列表&quot;, link: true }],\n        // any\n        title: &quot;服务器配置&quot;,\n        // any\n        content: &quot;微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！&quot;,\n        // element | node | function\n        rightMoreContent: &lt;div&gt;右边内容&lt;/div&gt;,\n    },\n    searchForm: {\n        // array&gt;[object] | null，如果是null则不显示搜索表单\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入内容&quot; /&gt;;\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入内容&quot; /&gt;;\n                },\n            },\n        ],\n    },\n    list: {\n        // table | card\n        listType: &quot;table&quot;,\n        cardCoverRender: null, // listType==&quot;card&quot;时的一个前置render\n        panelHeader: &quot;列表&quot;,\n        // 表格操作列的字段key\n        actionDataIndex: &quot;serviceName&quot;,\n        // antd  Table的参数\n        tableParams: {\n            //通过展开查看更多内容\n            expandedRowRender: (record, index, indent, expanded) =&gt; {\n                return (\n                    &lt;div&gt;\n                        &lt;dl className=&quot;z-info&quot;&gt;\n                            &lt;dt className=&quot;z-info-left z-padding-bottom-10&quot;&gt;服务名称&lt;/dt&gt;\n                            &lt;dd className=&quot;z-info-right z-padding-bottom-10&quot;&gt;{record.serviceName}&lt;/dd&gt;\n                        &lt;/dl&gt;\n                        &lt;dl className=&quot;z-info&quot;&gt;\n                            &lt;dt className=&quot;z-info-left z-padding-bottom-10&quot;&gt;服务编码&lt;/dt&gt;\n                            &lt;dd className=&quot;z-info-right z-padding-bottom-10&quot;&gt;{record.serviceCode}&lt;/dd&gt;\n                        &lt;/dl&gt;\n                        &lt;dl className=&quot;z-info&quot;&gt;\n                            &lt;dt className=&quot;z-info-left z-padding-bottom-10&quot;&gt;服务描述&lt;/dt&gt;\n                            &lt;dd className=&quot;z-info-right z-padding-bottom-10&quot;&gt;{record.remark}&lt;/dd&gt;\n                        &lt;/dl&gt;\n                    &lt;/div&gt;\n                );\n            },\n        },\n        // 表格列map数据数据，同antd的表格 columns\n        tableColumns: [\n            {\n                title: &quot;服务名称&quot;,\n                dataIndex: &quot;serviceName&quot;,\n                sorter: true, //启用排序字段\n            },\n            {\n                title: &quot;服务编码&quot;,\n                dataIndex: &quot;serviceCode&quot;,\n                sorter: true, //启用排序字段\n            },\n            {\n                title: &quot;约定端口号&quot;,\n                dataIndex: &quot;servicePort&quot;,\n                render: (text, record, index, instance) =&gt; {\n                    return &lt;span className=&quot;z-text-red&quot;&gt;{text}&lt;/span&gt;;\n                },\n            },\n            {\n                title: &quot;服务描述&quot;,\n                dataIndex: &quot;remark&quot;,\n            },\n        ],\n        // 是否显示新建按钮\n        showAddBtn: true,\n        addPageRender: (panel) =&gt; {\n            const AddPage = getEditPage({\n                pageType: &quot;add&quot;,\n                headerTitle: &quot;新增服务配置&quot;,\n                headerContent: &quot;新增一个服务,需要录入服务编码服务名称端口号等信息&quot;,\n                // 保存数据成功的回调\n                afterSubmitSuccess: (closeRightModal) =&gt; {\n                    // 保存数据成功后刷新列表数据\n                    panel.methods.getListData();\n                    // 关闭右边modal\n                    closeRightModal();\n                },\n            });\n            return &lt;AddPage /&gt;;\n        },\n        // 是否显示详情按钮\n        showDetailBtn: true,\n        detailPageRender: (record) =&gt; {\n            const DetailPage = getDetailPage({ headerTitle: record.serviceName, headerContent: record.remark });\n            return &lt;DetailPage detailId={record.id} /&gt;;\n        },\n        // 是否显示修改按钮\n        showUpdateBtn: true,\n        // 修改按钮权限控制代码\n        updateBtnPermCod: &quot;&quot;,\n        updatePageRender: (record, panel) =&gt; {\n            const UpdatePage = getEditPage({\n                pageType: &quot;update&quot;,\n                headerTitle: record.serviceName,\n                headerContent: record.remark,\n                afterSubmitSuccess: (closeRightModal) =&gt; {\n                    panel.methods.getListData(); // 保存数据成功后刷新列表数据\n                },\n            });\n            return &lt;UpdatePage detailId={record.id} /&gt;;\n        },\n        // 是否显示删除按钮\n        showDeleteBtn: true,\n        // 删除按钮权限控制代码\n        deleteBtnPermCod: &quot;&quot;,\n        //更多操作按钮的map数据\n        moreBtnMap: [\n            {\n                key: &quot;0&quot;,\n                name: &quot;默认的按钮&quot;,\n            },\n        ],\n        //更多操作按钮的的点击事件\n        onMoreBtnClick: (item, record) =&gt; {\n            message.success(`您当前点击的是[${record.serviceName}]这条数据`);\n        },\n        // 获取列表数据的后台接口函数，其必须内部返回Promise\n        listApiInterface: (query) =&gt; {\n            return api.config.getServiceList(Object.assign(query, { servcieName: query.serviceName })); //处理字段名\n        },\n        // 删除按钮的后台接口函数，其必须内部返回Promise\n        deleteApiInterface: (data) =&gt; {\n            return api.config.deleteService({ id: data.id });\n        },\n        //是否显示分页\n        showPagination: true,\n        // 分页类型 paging | infinite\n        paginationType: &quot;paging&quot;,\n    },\n};\nexport default ZsearchListHOC(pageConfig);</code></pre>\n<p>2、card 类型 + 按字段排序 + 无限追加的分页类型</p>\n<div class=\"z-demo-box\" data-render=\"demo2\" data-title=\"关键代码如下\"></div>\n\n<pre><code class=\"language-jsx\">const pageConfig = {\n    list: {\n        listType: &quot;card&quot;,\n        // 分页类型\n        paginationType: &quot;infinite&quot;,\n        getPageSize: (listType) =&gt; 2,\n        tableColumns: [\n            {\n                title: &quot;服务名称&quot;,\n                dataIndex: &quot;serviceName&quot;,\n                sorter: true, //启用排序\n            },\n            {\n                title: &quot;服务编码&quot;,\n                dataIndex: &quot;serviceCode&quot;,\n                sorter: true, //启用排序\n            },\n            {\n                title: &quot;约定端口号&quot;,\n                dataIndex: &quot;servicePort&quot;,\n                render: (text, record, index, instance) =&gt; {\n                    return &lt;span className=&quot;z-text-red&quot;&gt;{text}&lt;/span&gt;;\n                },\n            },\n            {\n                title: &quot;服务描述&quot;,\n                dataIndex: &quot;remark&quot;,\n            },\n        ],\n    },\n};</code></pre>\n<p>2、simple 类型</p>\n<div class=\"z-demo-box\" data-render=\"demo3\" data-title=\"关键代码如下\"></div>\n\n<pre><code class=\"language-jsx\">const pageConfig = {\n    list: {\n        listType: &quot;simple&quot;,\n        // 分页类型\n        paginationType: &quot;infinite&quot;,\n        getPageSize: (listType) =&gt; 3,\n        tableColumns: [\n            {\n                title: &quot;服务名称&quot;,\n                dataIndex: &quot;serviceName&quot;,\n                sorter: true, //启用排序\n            },\n            {\n                title: &quot;服务编码&quot;,\n                dataIndex: &quot;serviceCode&quot;,\n                sorter: true, //启用排序\n            },\n            {\n                title: &quot;约定端口号&quot;,\n                dataIndex: &quot;servicePort&quot;,\n                render: (text, record, index, instance) =&gt; {\n                    return &lt;span className=&quot;z-text-red&quot;&gt;{text}&lt;/span&gt;;\n                },\n            },\n            {\n                title: &quot;服务描述&quot;,\n                dataIndex: &quot;remark&quot;,\n            },\n        ],\n    },\n};</code></pre>\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig\">pageConfig</h2>\n<p>除了如下的属性，pageConfig 还包含 <span class=\"z-history-href\" data-path=\"/main/HOC-doc/ZpageWraperHOC-doc\">HOC/页面头尾结构：ZpageWrapper</span> 的 props</p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n         <tr>\n            <td>searchForm</td>\n            <td>\n                <p>1、<code>searchForm.defaultExpanded</code> 是否默认展开表单,(默认false)</p>\n                <p>2、<code>searchForm.insertTo</code> 此属性可以是:一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false || (tool)=>{return 一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false}，其用途为：将searchForm插到某个dom元素内,如为true则插到页头显示,(默认false)</p>\n                <p>3、<code>searchForm的其他属性</code>还包含： 请查看 <span class=\"z-history-href\" data-path=\"/main/component-doc/ZsearchForm-doc\">组件/ZsearchForm</span> 的 props  (除了onSearch, onReset, noCollapse ,hidden ,其他都有效)。</p>\n                <p>4、其中<code>searchForm.items</code>的<code>render函数</code>的参数在这里多加tool,如：items:[{render:(form,changeFormItems,tool)=>{},key:\"myKey\"}]。</p>\n                <p>5、其中<code>searchForm.items</code>的<code>options函数</code>的参数在这里多加tool,如：items:[{options:(tool)=>options}]。</p>\n                <p>6、<code>searchForm</code>的其他<code>函数属性</code>除了原有的参数，还多加tool，如 <code>searchForm.afterItemsRendered</code>:(form,methods,tool)=>{}</p>\n            </td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>list</td>\n            <td>列表展示，请看下面的pageConfig.list</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"pageconfig-list\">pageConfig.list</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>listType</td>\n            <td>列表类型</td>\n            <td>table | card | simple</td>\n            <td>table</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> cardCoverRender</td>\n            <td>listType=\"card\" | \"simple\"，卡片的上部渲染函数或者是自定义图标、图片等</td>\n            <td>function(record){return ;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>cardSpan</td>\n            <td>listType=\"card\" | \"simple\"，栅栏占格,默认{ xxl:6,xl:8:lg:12:md:24}</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelHeader</td>\n            <td>列表面板的头部内容,为null则不显示面板头部。也可以是一个对象：{left:(tool)=>span,center:(tool)=>span,right:(tool)=>span,}</td>\n            <td>string | (tool)=>span | object</td>\n            <td>列表</td>\n        </tr>\n        <tr>\n            <td>tableParams</td>\n            <td><a href=\"https://ant.design/components/table-cn/\" target=\"_blank\">Antd 的Table参数</a>,除了columns、dataSource、pagination，其他都可用,默认rowKey:\"id\"</td>\n            <td>object</td>\n            <td>{rowkey:\"id\"}</td>\n        </tr>\n        <tr>\n            <td>tableColumns</td>\n            <td>表格列数据,<a href=\"https://ant.design/components/table-cn/\" target=\"_blank\">同Antd的表格 columns</a>，其中render函数参数为：(text,record,index,tool)=>自定义内容。尽管属性名与\"table\"相关,当listType=\"card\"时也是有效的,也是必需的。在此，还额外增加show属性，为是否默认显示此列(字段)。</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>actionColumnWidth</td>\n            <td>表格操作列的宽度</td>\n            <td>string | number</td>\n            <td>360</td>\n        </tr>\n        <tr>\n            <td>actionDataIndex</td>\n            <td>操作区的key</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> actionRender</td>\n            <td>操作区的render,可以自定义操作按钮</td>\n            <td>(text, record,index,tool,isListCard,getDiffBtn)=>{return [按钮1,按钮2]}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>listApiInterface</td>\n            <td>获取列表数据的后台接口函数,其必须返回Promise,参数有query:查询表单相关值、分页数据、排序字段,sorter:更多排序数据。接口响应体的data属性支持 array和object类型</td>\n            <td>(query,sorter,tool) => Promise对象</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>deleteApiInterface</td>\n            <td>删除按钮后台接口函数,其必须返回Promise,参数有data:每一行数据</td>\n            <td>(data,tool) => Promise对象</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showPagination</td>\n            <td>是否启用分页</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>paginationType</td>\n            <td>分页类型,paging:普通分页，infinite:无限追加</td>\n            <td>paging | infinite</td>\n            <td>paging</td>\n        </tr>\n        <tr>\n            <td>getPageSize</td>\n            <td>设置pageSize的钩子 (listType, isListCard)=>isListCard ? 8 : 10</td>\n            <td>function</td>\n            <td>(listType, isListCard,tool)=>isListCard ? 8 : 10</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showAddBtn</td>\n            <td>是否显示新增按钮</td>\n            <td>boolean | function(tool){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>addPageRender</td>\n            <td>新增按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>\n            <td>function(tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showDetailBtn</td>\n            <td>是否显示详情按钮</td>\n            <td>boolean | function(record,index,tool){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>detailPageRender</td>\n            <td>详情按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>\n            <td>function(record,tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showUpdateBtn</td>\n            <td>是否显示修改按钮</td>\n            <td>boolean | function(record,index,tool){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>updatePageRender</td>\n            <td>修改按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>\n            <td>function(record,tool){return ReacNode}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> showDeleteBtn</td>\n            <td>是否显示删除按钮</td>\n            <td>boolean | function(record,index,tool){return false}</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>moreBtnType</td>\n            <td>更多操作按钮显示类型</td>\n            <td>rounding | menu</td>\n            <td>rounding</td>\n        </tr>\n        <tr>\n            <td>moreBtnMap</td>\n            <td>更多操作按钮的map数据,[{key: \"0\",name: \"默认的按钮\", <i class=\"zero-icon zerod-shengchangzhouqi\"></i> show: boolean | function(record,index,item){return true;},disabled:boolean}]</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onMoreBtnClick</td>\n            <td>更多操作按钮点击事件，参数有item:当前按钮的map对象，record:当前行的数据</td>\n            <td>function(item, record,tool){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelBeforeRender</td>\n            <td>列表面板上面的渲染函数</td>\n            <td>function(tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> panelAfterRender</td>\n            <td>列表面板下面的渲染函数</td>\n            <td>function(tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> moreContentRender</td>\n            <td>分页控件下面更多内容的渲染函数</td>\n            <td>function(tool){return ReacNode;}</td>\n            <td>--</td>\n        </tr>\n            <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> addBtnDisabled</td>\n            <td>是否禁用新建按钮</td>\n            <td>boolean | function(tool){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> detailBtnDisabled</td>\n            <td>是否禁用详情按钮</td>\n            <td>boolean | function(record,index,tool){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> updateBtnDisabled</td>\n            <td>是否禁用修改按钮</td>\n            <td>boolean | function(record,index,tool){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td><i class=\"zero-icon zerod-shengchangzhouqi\"></i> deleteBtnDisabled</td>\n            <td>是否禁用删除按钮</td>\n            <td>boolean | function(record,index,tool){return false}</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>exportSomething</td>\n            <td>是一个获取tool的钩子，相当于组件的componentDidMount</td>\n            <td>function(tool){ myTool=tool }</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>addCustomBtnsRender</td>\n            <td>操作列,可在内置默认的详情、修改、删除按钮之后追加自定义按钮</td>\n            <td>(text, record,index,tool,isListCard,getDiffBtn)=>{return [getDiffBtn(\"primary\",\"新按钮\",(e)=>{}),getDiffBtn(\"primary\",\"新按钮\",(e)=>{})]}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h2 id=\"tool-\">tool 参数</h2>\n<p>pageConfig.list 中的一些函数如<code>moreContentRender</code>提供了<code>tool</code>参数出来，有如下内容：</p>\n<p><code>tool</code>对象不但包含<code>ZerodMainContext</code>提供的东西（请 <span class=\"z-history-href\" data-path=\"/main/context-doc/ZerodMainContext-doc\">查看 上下文/ZerodMainContext</span>），比如 tool.showRightModal，还提供如下内容：</p>\n<h3 id=\"tool-getpage\">tool.getPage</h3>\n<p>获取当前列表的分页相关信息的函数</p>\n<h3 id=\"tool-getsearchquery\">tool.getSearchQuery</h3>\n<p>获取当前查询表单中各控件的值的函数</p>\n<h3 id=\"tool-methods\">tool.methods</h3>\n<p>tool.methods 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>方法</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLoading</td>\n            <td>用于 显示/取消 当前页的loading的方法，必需参数show：true|false</td>\n            <td>tool.methods.showLoading(true)</td>\n        </tr>\n        <tr>\n            <td>getListData</td>\n            <td>更新列表数据的方法，会触发pageConfig.list的listApiInterface函数；可选参数有isMerge:是否当前列表追加数据、否的话是覆盖原数据，moreQuery:是一个对象，是更多传入listApiInterface的参数</td>\n            <td>tool.methods.getListData()</td>\n        </tr>\n        <tr>\n            <td>removeOneData</td>\n            <td>移除当前列表的一条数据，必需参数rowData:一行的数据 或者 对应pageConfig.list.tableParams.rowKey的数据(默认是id)，如传入 {id:5}，则会移除列表数据中id=5的那一条 </td>\n            <td>tool.methods.removeOneData({id:5})</td>\n        </tr>\n        <tr>\n            <td>openModal</td>\n            <td>打开当前列表所在位置关联的rightModal，与tool.showRightModal有区别；必需参数content:窗口的内容</td>\n            <td>tool.methods.openModal(<\\div\\>内容<\\/div\\>)</td>\n        </tr>\n        <tr>\n            <td>closeCurrentModal</td>\n            <td>关闭当前的rightModal</td>\n            <td>tool.methods.closeCurrentModal()</td>\n        </tr>\n        <tr>\n            <td>currentListData</td>\n            <td>获取当前列表的全部数据(数组)的方法</td>\n            <td>const listData=tool.methods.currentListData()</td>\n        </tr>\n        <tr>\n            <td>setDataState</td>\n            <td>用于主动更新列表数据状态的方法，必需参数data:列表数据(数组)</td>\n            <td>tool.methods.setDataState([...tool.methods.currentListData()])</td>\n        </tr>\n        <tr>\n            <td>onAdd</td>\n            <td>新增按钮的点击事件，会触发pageConfig.list.addPageRender函数</td>\n            <td>tool.methods.onAdd()</td>\n        </tr>\n        <tr>\n            <td>onUpdate</td>\n            <td>修改按钮的点击事件，会触发pageConfig.list.updatePageRender函数</td>\n            <td>tool.methods.onUpdate(record)</td>\n        </tr>\n        <tr>\n            <td>onDetail</td>\n            <td>详情按钮的点击事件，会触发pageConfig.list.detailPageRender函数</td>\n            <td>tool.methods.onDetail(record)</td>\n        </tr>\n        <tr>\n            <td>onDelete</td>\n            <td>删除按钮的点击事件，会触发pageConfig.list.deleteApiInterface函数</td>\n            <td>tool.methods.onDelete(text,record)</td>\n        </tr>\n        <tr>\n            <td>notice</td>\n            <td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>\n            <td>tool.methods.notice.success(\"操作成功\" [,config])</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"z-doc-titles\"></div>\n\n<h3 id=\"tool-router\">tool.$router</h3>\n<p>tool.$router 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>属性</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>history</td>\n            <td>可以调用push、replace等跳转路由path得方法，<a href=\"https://reacttraining.com/react-router/web/api/history\" target=\"_blank\"> 更多请查看react-router的history</a></td>\n            <td>tool.$router.history.push(\"/login\")</td>\n        </tr>\n        <tr>\n            <td>location</td>\n            <td>当前路由的相关信息,<a href=\"https://reacttraining.com/react-router/web/api/location\" target=\"_blank\"> 更多请查看react-router的location</a></td>\n            <td>tool.$router.location.pathname</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "Revr":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./area.api.js": "eAri",
	"./config.api.js": "5WI2",
	"./login.api.js": "O3gd",
	"./scheduling.api.js": "Lwzs"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "Revr";

/***/ }),

/***/ "SX+g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(498);

/***/ }),

/***/ "doIP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: delegated ./node_modules/_react@16.8.6@react/index.js from dll-reference _dll_vendor_e823eb2f1294e4241445
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445 = __webpack_require__("uqIC");
var _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default = /*#__PURE__*/__webpack_require__.n(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445);

// EXTERNAL MODULE: ./src/HOC/load-HOC.js
var load_HOC = __webpack_require__("ebhq");

// EXTERNAL MODULE: ./node_modules/zerod/components/Zcascader/index.jsx
var Zcascader = __webpack_require__("k9l9");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("MhH0");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/createClass.js
var createClass = __webpack_require__("FcZB");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Ratc");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("0j8+");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/inherits.js
var inherits = __webpack_require__("0kOG");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/zerod/components/zTool/index.js
var zTool = __webpack_require__("/sSO");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZsearchListHOC/index.jsx + 46 modules
var ZsearchListHOC = __webpack_require__("eYSq");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("II5r");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/message/index.js
var message = __webpack_require__("nMT3");

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/tag/index.js + 2 modules
var tag = __webpack_require__("wlyr");

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/input/index.js + 7 modules
var input = __webpack_require__("eaxb");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/objectSpread.js
var objectSpread = __webpack_require__("vEZV");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./src/App.api.js
var App_api = __webpack_require__("WiDR");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZeditSimpleFormHOC/index.jsx
var ZeditSimpleFormHOC = __webpack_require__("4QcI");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("rDdF");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/input-number/index.js + 4 modules
var input_number = __webpack_require__("bkI4");

// EXTERNAL MODULE: ./node_modules/_antd@3.16.4@antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("9DAX");

// EXTERNAL MODULE: ./src/mock/serviceDefaultConfigData.js
var serviceDefaultConfigData = __webpack_require__("40mi");

// EXTERNAL MODULE: ./node_modules/zerod/components/ZerodMainContext.js
var ZerodMainContext = __webpack_require__("MaNN");

// EXTERNAL MODULE: ./node_modules/zerod/components/Ztabs/index.jsx
var Ztabs = __webpack_require__("VQbk");

// EXTERNAL MODULE: ./node_modules/zerod/components/Zform/index.jsx
var Zform = __webpack_require__("+Qac");

// EXTERNAL MODULE: delegated ./node_modules/_prop-types@15.7.2@prop-types/index.js from dll-reference _dll_vendor_e823eb2f1294e4241445
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445 = __webpack_require__("EH+i");
var _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default = /*#__PURE__*/__webpack_require__.n(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445);

// CONCATENATED MODULE: ./src/views/Main/HOC-doc/ZsearchListHOC-doc/demos/ServiceTab.jsx










 // zerod



var ServiceTab_ServiceTab =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(ServiceTab, _React$PureComponent);

  function ServiceTab() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ServiceTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ServiceTab)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.methods = {
      saveData: function saveData(item, values) {
        _this.props.showModalLoading(true);

        return App_api["a" /* default */].config.updateServiceConfig({
          configProperty: values["confProperty"],
          environment: item.key,
          serviceId: item.serviceId
        }).then(function (re) {
          message["a" /* default */].success("更新配置成功");
        }).catch(function (re) {
          message["a" /* default */].error(re && re.msg ? re.msg : "更新配置失败");
        }).finally(function () {
          _this.props.showModalLoading(false);
        });
      }
    };

    _this.tabContent = function (item) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Zform["b" /* default */], {
        items: _this.props.formItems,
        formDefaultValues: {
          confProperty: item.serviceConfig["confProperty"]
        },
        onSubmit: function onSubmit(values) {
          return _this.methods.saveData(item, values);
        }
      });
    };

    _this.defaultTabPanes = [{
      tab: "默认环境",
      key: "default",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "开发环境",
      key: "dev",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "测试环境",
      key: "test",
      serviceConfig: {},
      content: _this.tabContent
    }, {
      tab: "生产环境",
      key: "prod",
      serviceConfig: {},
      content: _this.tabContent
    }];
    return _this;
  }

  createClass_default()(ServiceTab, [{
    key: "getTabPanes",
    value: function getTabPanes(defaultTabPanes) {
      var data = this.props.data;

      if (data && data.cfgcPropertyDOList) {
        return defaultTabPanes.map(function (item, index) {
          item.serviceId = data.serviceId;
          var tabpanes = data.cfgcPropertyDOList;

          for (var i = 0; i < tabpanes.length; i++) {
            if (item.key === tabpanes[i]["environment"]) {
              item.serviceConfig = tabpanes[i];
              break;
            }
          }

          return item;
        });
      } else {
        return [];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var tabPanes = this.getTabPanes(this.defaultTabPanes);
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel z-margin-top-20"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel-heading"
      }, "\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel-body"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Ztabs["a" /* default */], {
        tabPanes: tabPanes
      })));
    }
  }]);

  return ServiceTab;
}(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.PureComponent);

ServiceTab_ServiceTab.propTypes = {
  data: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.object,
  formItems: _prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.arrayOf(_prop_types_15_7_2_prop_typesfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.object)
};
/* harmony default export */ var demos_ServiceTab = (ZerodMainContext["a" /* default */].setConsumer(ServiceTab_ServiceTab));
// CONCATENATED MODULE: ./src/views/Main/HOC-doc/ZsearchListHOC-doc/demos/getEditPage.js







 // 第三方组件

// 后台接口
 // import components from '@/components/load-components'




function getEditPage(_ref) {
  var pageType = _ref.pageType,
      headerTitle = _ref.headerTitle,
      headerContent = _ref.headerContent,
      afterSubmitSuccess = _ref.afterSubmitSuccess;
  var configFormItems = [{
    key: "quick",
    label: "快捷操作",
    render: function render(form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(es_button["a" /* default */], {
        onClick: function onClick() {
          form.setFieldsValue({
            confProperty: serviceDefaultConfigData["a" /* default */].default
          });
        }
      }, "\u6A21\u677F\u914D\u7F6E");
    }
  }, {
    key: "confProperty",
    label: "默认配置",
    span: 24,
    render: function render(form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */].TextArea, {
        rows: 15,
        placeholder: "\u8BF7\u8F93\u5165\u9ED8\u8BA4\u914D\u7F6E",
        ref: function ref(el) {
          zTool["g" /* default */].scrollDisableWheel(el.textAreaRef);
        }
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }];
  var formItems = [{
    key: "serviceCode",
    label: "服务编码",
    render: function render(form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
        placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u7F16\u7801"
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }, {
    key: "serviceName",
    label: "服务名称",
    render: function render(form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
        placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u540D\u79F0"
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }, {
    key: "remark",
    label: "服务说明",
    span: 24,
    render: function render(form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */].TextArea, {
        rows: 2,
        placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u8BF4\u660E"
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }, {
    key: "servicePort",
    // detailKey:'servicePort',
    label: "端口号",
    render: function render(form) {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input_number["a" /* default */], {
        min: 11110,
        max: 65535,
        step: 10
      });
    },
    //antd的 form.getFieldDecorator的options
    options: {
      //验证规则
      rules: [{
        required: true,
        message: "不能为空。"
      }]
    }
  }];

  if (pageType === "add") {
    formItems = [].concat(toConsumableArray_default()(formItems), configFormItems);
  }

  var pageCofig = {
    insertLocation: "mainModal_top",
    pageHeader: {
      show: true,
      // any
      title: headerTitle,
      //any
      content: headerContent,
      //element | node
      rightMoreContent: null
    },
    form: {
      type: pageType,
      panelHeader: pageType === "add" ? "新增服务信息" : "修改基础信息",
      items: formItems,
      detailApiInterface: function detailApiInterface(id, props) {
        return App_api["a" /* default */].config.getServiceDetail({
          serviceId: id
        });
      },
      submitApiInterface: function submitApiInterface(values, props) {
        if (pageType === "add") {
          return App_api["a" /* default */].config.addService(assign_default()({}, values, {
            environment: "default"
          }));
        } else {
          return App_api["a" /* default */].config.updateService(assign_default()({}, values, {
            serviceId: props.detailId
          }));
        }
      },
      afterSubmitSuccess: afterSubmitSuccess
    }
  };

  if (pageType === "update") {
    pageCofig.panelAfterRender = function (detail) {
      // console.log(detail);
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(demos_ServiceTab, {
        data: detail,
        formItems: configFormItems
      });
    };
  }

  return Object(ZeditSimpleFormHOC["a" /* default */])(pageCofig);
}

/* harmony default export */ var demos_getEditPage = (getEditPage);
// EXTERNAL MODULE: ./src/views/Main/HOC-doc/ZsearchListHOC-doc/demos/getDetailPage.js + 1 modules
var getDetailPage = __webpack_require__("LQqe");

// EXTERNAL MODULE: ./src/mock/area.js
var mock_area = __webpack_require__("R7NC");

// EXTERNAL MODULE: ./src/views/Main/component-doc/ZpageHeader-doc/pageHeader.js
var pageHeader = __webpack_require__("3P0Q");

// CONCATENATED MODULE: ./src/views/Main/HOC-doc/ZsearchListHOC-doc/demos/index.jsx


















 // let listExports = null;

function getDemo(pageConfig) {
  var config = {
    insertLocation: "mainModal",
    pageHeader: objectSpread_default()({
      show: true
    }, pageHeader["a" /* default */]),
    searchForm: {
      defaultExpanded: true,
      labelLayout: "horizontal",
      // array>[object] | null，如果是null则不显示搜索表单
      items: [{
        key: "serviceCode",
        label: "服务编码",
        render: function render(form, changeItems, tool) {
          console.log("items_render_tool", form, changeItems, tool);
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
          });
        },
        options: function options(tool) {
          console.log("form", tool);
        }
      }, {
        key: "serviceCode2",
        label: "服务编码",
        render: function render(form) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
          });
        }
      }, {
        key: "serviceCode3",
        label: "服务编码",
        render: function render(form) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
          });
        }
      }, {
        key: "serviceName",
        label: "服务名称",
        render: function render(form) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(input["a" /* default */], {
            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
          });
        }
      }],
      afterItemsRendered: function afterItemsRendered(form, methods, tool) {
        console.log("afterItemsRendered", form, methods, tool);
      }
    },
    list: {
      // table | card
      listType: "table",
      cardCoverRender: null,
      // listType=="card"时的一个前置render
      panelHeader: "列表",
      // 表格操作列的字段key
      actionDataIndex: "serviceName",
      // antd  Table的参数
      tableParams: {
        expandedRowRender: function expandedRowRender(record, index, indent, expanded) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", null, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dl", {
            className: "z-info"
          }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dt", {
            className: "z-info-left z-padding-bottom-10"
          }, "\u670D\u52A1\u540D\u79F0"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dd", {
            className: "z-info-right z-padding-bottom-10"
          }, record.serviceName)), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dl", {
            className: "z-info"
          }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dt", {
            className: "z-info-left z-padding-bottom-10"
          }, "\u670D\u52A1\u7F16\u7801"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dd", {
            className: "z-info-right z-padding-bottom-10"
          }, record.serviceCode)), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dl", {
            className: "z-info"
          }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dt", {
            className: "z-info-left z-padding-bottom-10"
          }, "\u670D\u52A1\u63CF\u8FF0"), _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("dd", {
            className: "z-info-right z-padding-bottom-10"
          }, record.remark)));
        }
      },
      // 表格列map数据数据，同antd的表格 columns
      tableColumns: [{
        title: "服务名称",
        dataIndex: "serviceName",
        sorter: true,
        defaultSortOrder: "ascend"
      }, {
        title: "服务编码",
        dataIndex: "serviceCode",
        sorter: true,
        render: function render(text, record, index, instance) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(tag["a" /* default */], {
            color: "volcano"
          }, text);
        }
      }, {
        title: "约定端口号",
        dataIndex: "servicePort",
        render: function render(text, record, index, instance) {
          return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(tag["a" /* default */], {
            color: "magenta"
          }, text);
        }
      }, {
        title: "服务描述",
        dataIndex: "remark",
        show: false
      }],
      // 是否显示新建按钮
      showAddBtn: true,
      // 新建按钮权限控制代码
      addBtnPermCode: "",
      addPageRender: function addPageRender(panel) {
        var AddPage = demos_getEditPage({
          pageType: "add",
          headerTitle: "新增服务配置",
          headerContent: "新增一个服务,需要录入服务编码服务名称端口号等信息",
          // 保存数据成功的回调
          afterSubmitSuccess: function afterSubmitSuccess(closeRightModal) {
            // 保存数据成功后刷新列表数据
            panel.methods.getListData(); // 关闭右边modal

            closeRightModal();
          }
        });
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(AddPage, null);
      },
      // 是否显示详情按钮
      showDetailBtn: true,
      // 详情按钮权限控制代码
      detailBtnPermCode: "",
      detailPageRender: function detailPageRender(record) {
        var DetailPage = Object(getDetailPage["a" /* default */])({
          headerTitle: record.serviceName,
          headerContent: record.remark
        });
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(DetailPage, {
          detailId: record.id
        });
      },
      // 是否显示修改按钮
      showUpdateBtn: true,
      // 修改按钮权限控制代码
      updateBtnPermCod: "",
      updatePageRender: function updatePageRender(record, panel) {
        var UpdatePage = demos_getEditPage({
          pageType: "update",
          headerTitle: record.serviceName,
          headerContent: record.remark,
          afterSubmitSuccess: function afterSubmitSuccess(closeRightModal) {
            panel.methods.getListData(); // 保存数据成功后刷新列表数据
          }
        });
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(UpdatePage, {
          detailId: record.id
        });
      },
      // 是否显示删除按钮
      showDeleteBtn: true,
      // 删除按钮权限控制代码
      deleteBtnPermCod: "",
      // moreBtnType:"menu",
      //更多操作按钮的map数据
      moreBtnMap: [{
        key: "0",
        name: "0默认的按钮0"
      }, {
        key: "1",
        name: "1默认的按钮1"
      }, {
        key: "2",
        name: "2默认的按钮2"
      }, {
        key: "3",
        name: "3默认的按钮3"
      }, {
        key: "4",
        name: "4默认的按钮4"
      }, {
        key: "5",
        name: "5默认的按钮5"
      }, {
        key: "6",
        name: "6默认的按钮6"
      }, {
        key: "7",
        name: "7默认的按钮7"
      }],
      //更多操作按钮的的点击事件
      onMoreBtnClick: function onMoreBtnClick(item, record) {
        message["a" /* default */].success("\u60A8\u5F53\u524D\u70B9\u51FB\u7684\u662F[".concat(record.serviceName, "]\u8FD9\u6761\u6570\u636E"));
      },
      // 获取列表数据的后台接口函数，其必须内部返回Promise
      listApiInterface: function listApiInterface(query, sorter, tool) {
        console.log(query, sorter, tool);
        return App_api["a" /* default */].config.getServiceList(assign_default()(query, {
          servcieName: query.serviceName
        })); //处理字段名
      },
      // 删除按钮的后台接口函数，其必须内部返回Promise
      deleteApiInterface: function deleteApiInterface(data) {
        return App_api["a" /* default */].config.deleteService({
          id: data.id
        });
      },
      exportSomething: function exportSomething(obj) {
        console.log("exportSomething");
      },
      //是否显示分页
      showPagination: true,
      // 分页类型 paging | infinite
      paginationType: "paging",
      panelBeforeRender: function panelBeforeRender(obj) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(demos_AreaDemo, null);
      },
      panelAfterRender: function panelAfterRender(obj) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
          className: "z-panel z-margin-top-20 z-text-center"
        }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
          className: "z-panel-body"
        }, "panelAfterRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      },
      moreContentRender: function moreContentRender(obj) {
        return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
          className: "z-panel is-panel-border z-margin-top-20 z-text-center"
        }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
          className: "z-panel-body"
        }, "moreContentRender \u51FD\u6570\u6E32\u67D3\u7684\u5185\u5BB9"));
      }
    }
  };
  return Object(ZsearchListHOC["a" /* default */])(zTool["g" /* default */].mergeConfig(config, pageConfig ? pageConfig : {}));
}

var demos_AreaDemo =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(AreaDemo, _React$PureComponent);

  function AreaDemo() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, AreaDemo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(AreaDemo)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.methods = {
      onSelect: function onSelect(items) {
        var names = items.map(function (item) {
          return item.name;
        });

        message["a" /* default */].success("\u60A8\u9009\u62E9\u4E86".concat(names.join('-')));
      }
    };
    _this.selections = ["1710121748130980000000166"];
    return _this;
  }

  createClass_default()(AreaDemo, [{
    key: "render",
    value: function render() {
      return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel z-margin-bottom-15"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement("div", {
        className: "z-panel-body"
      }, _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Zcascader["a" /* default */], {
        tree: mock_area["a" /* default */].data,
        itemKeys: {
          name: "name",
          id: "areaId",
          disabled: "disable",
          children: "children"
        },
        selections: this.selections,
        onSelect: this.methods.onSelect
      })));
    }
  }]);

  return AreaDemo;
}(_react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.PureComponent);

/* harmony default export */ var demos = (getDemo);
// EXTERNAL MODULE: ./node_modules/zerod/components/ZsearchListHOC/doc.md
var doc = __webpack_require__("Fok6");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// CONCATENATED MODULE: ./src/views/Main/HOC-doc/ZsearchListHOC-doc/index.jsx
// react
 // zerod
// import { ZsearchListHOC } from "zerod";


var AmdDocHOC = load_HOC["a" /* default */].AmdDocHOC,
    AshowDemoHOC = load_HOC["a" /* default */].AshowDemoHOC; // import pageHeader from "@/views/Main/component-doc/ZpageHeader-doc/pageHeader";
// import api from "@/App.api.js";



var ZsearchListHOC_doc_showDemo = function showDemo(Component) {
  return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(Component, null);
};


/* harmony default export */ var ZsearchListHOC_doc = __webpack_exports__["default"] = (AmdDocHOC(doc_default.a, {
  demo1: function demo1() {
    var MyScript = AshowDemoHOC(ZsearchListHOC_doc_showDemo(demos()), true);
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(MyScript, null);
  },
  demo2: function demo2() {
    var MyScript = AshowDemoHOC(ZsearchListHOC_doc_showDemo(demos({
      list: {
        listType: "card",
        paginationType: "infinite",
        getPageSize: function getPageSize(listType, isListCard) {
          return 7;
        }
      }
    })), true);
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(MyScript, null);
  },
  demo3: function demo3() {
    var MyScript = AshowDemoHOC(ZsearchListHOC_doc_showDemo(demos({
      list: {
        listType: "simple",
        paginationType: "infinite",
        cardSpan: {
          xxl: 8,
          xl: 12,
          lg: 24
        },
        getPageSize: function getPageSize(listType, isListCard) {
          return 3;
        }
      }
    })), true);
    return _react_16_8_6_reactfrom_dll_reference_dll_vendor_e823eb2f1294e4241445_default.a.createElement(MyScript, null);
  }
}));

/***/ }),

/***/ "jjl2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AmdDocHOC/index.jsx": "pnNO",
	"./AshowDemoHOC/index.jsx": "+fre"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "jjl2";

/***/ }),

/***/ "q3Yw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("sG4F"))(313);

/***/ })

}]);
//# sourceMappingURL=8.18a2d92afef5b26c4e9d.js.map