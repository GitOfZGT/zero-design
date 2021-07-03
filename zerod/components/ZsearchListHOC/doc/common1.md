<!-- @fragment -->

```jsx
// @import : ../../mock.md

import React from 'react';
import { Input, message } from 'antd';
import { ZsearchListHOC, zTool } from 'zerod';

const api = {
		//获取列表接口
		getServiceList(query) {
			return zTool.httpAjax("post", "/mockjs/v1.0/config/center/pageServiceInfo", query);
		},
		//删除服务
		deleteService(query) {
			return zTool.httpAjax("post", "/mockjs/v1.0/config/center/deleteServiceInfo", query);
		},
		//新增服务
		addService(query) {
			return zTool.httpAjax("post", "/mockjs/v1.0/config/center/addServiceConfig", query);
		},
		//更新服务
		updateService(query) {
			return zTool.httpAjax("post", "/mockjs/v1.0/config/center/updateServiceInfo", query);
		},
		//获取详细数据
		getServiceDetail(query) {
			return zTool.httpAjax("post", "/mockjs/v1.0/config/center/getServiceConfigDetail", query);
		},
		//更新配置信息
		updateServiceConfig(query){
			return zTool.httpAjax("post", "/mockjs/v1.0/config/center/updateConfigProperty", query);
		}
	};
const pageConfig = {
    pageHeader: {
        show: true,
        trademark: (
            <img
                src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                width="60"
                className="z-margin-right-15"
            />
        ),
        // array>[object] | null,如果是null则不显示面包屑
        breadcrumbRoutes: [
            { path: 'config', name: '案例', link: false },
            { path: 'serviceWithTableList', name: '表格列表', link: true },
        ],
        // any
        title: '服务器配置',
        // any
        content:
            '微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！',
        // element | node | function
        rightMoreContent: <div>右边内容</div>,
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
    list: {
        // table | card
        listType: 'table',
        cardCoverRender: null, // listType=="card"时的一个前置render
        panelHeader: '列表',
        // 表格操作列的字段key
        actionDataIndex: 'serviceName',
        // antd  Table的参数
        tableParams: {
            //通过展开查看更多内容
            expandedRowRender: (record, index, indent, expanded) => {
                return (
                    <div className="z-bordercolor-light-mauve" style={{borderWidth:'1px',borderStyle:'solid'}}>
                        <dl className="z-info">
                            <dt className="z-info-left z-padding-bottom-10-important">服务名称</dt>
                            <dd className="z-info-right z-padding-bottom-10-important">{record.serviceName}</dd>
                        </dl>
                        <dl className="z-info">
                            <dt className="z-info-left z-padding-bottom-10-important">服务编码</dt>
                            <dd className="z-info-right z-padding-bottom-10-important">{record.serviceCode}</dd>
                        </dl>
                        <dl className="z-info">
                            <dt className="z-info-left z-padding-bottom-10-important">服务描述</dt>
                            <dd className="z-info-right z-padding-bottom-10-important">{record.remark}</dd>
                        </dl>
                    </div>
                );
            },
        },
        // 表格列map数据数据，同antd的表格 columns
        tableColumns: [
            {
                title: '服务名称',
                dataIndex: 'serviceName',
                sorter: true, //启用排序字段
            },
            {
                title: '服务编码',
                dataIndex: 'serviceCode',
                sorter: true, //启用排序字段
            },
            {
                title: '约定端口号',
                dataIndex: 'servicePort',
                render: (text, record, index, instance) => {
                    return <span className="z-text-red">{text}</span>;
                },
            },
            {
                title: '服务描述',
                dataIndex: 'remark',
            },
        ],
        // 是否显示新建按钮
        showAddBtn: true,
        addPageRender: (tool) => {
            return <div>新增页面内容</div>
        },
        // 是否显示详情按钮
        showDetailBtn: true,
        detailPageRender: (record) => {
             return <div>详情页面内容</div>
        },
        // 是否显示修改按钮
        showUpdateBtn: true,
        // 修改按钮权限控制代码
        updateBtnPermCod: '',
        updatePageRender: (record, tool) => {
            return <div>修改页面内容</div>
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
            message.success(`您当前点击的是[${record.serviceName}]这条数据`);
        },
        // 获取列表数据的后台接口函数，其必须内部返回Promise
        listApiInterface: (query) => {
            return api.getServiceList(query); //处理字段名
        },
        // 删除按钮的后台接口函数，其必须内部返回Promise
        deleteApiInterface: (data) => {
            return api.deleteService({ id: data.id });
        },
        //是否显示分页
        showPagination: true,
        // 分页类型 paging | infinite
        paginationType: 'paging',
    },
};
```
