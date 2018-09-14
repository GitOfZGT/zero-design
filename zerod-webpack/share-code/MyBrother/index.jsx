import React from "react";
import { Input,message } from "antd";
import{ ZsearchListHOC } from "zerod";

import api from "./A.api.js";

import getEditPage from "./getEditPage.js";
import getDetailPage from "./getDetailPage.js";
let listExports = null;
const config = {
	pageHeader: {
		show: true,
		//any
		title: "我也是是共享页面，但是我是他哥",
		//any
		content:
			"服务啥滴都是假的！",
		//element | node
		rightMoreContent: <div>想不到吧</div>,
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
	list: {
        // table | card
        listType:"table",
        cardCoverRender:null,// listType=="card"时的一个前置render
		panelHeader: "列表",
		// 表格操作列的字段key
		actionDataIndex: "serviceName",
		// 表格列map数据数据，同antd的表格 columns
		tableColumns: [
            {
                title: "服务名称",
                dataIndex: "serviceName",
            },
			{
				title: "服务编码",
				dataIndex: "serviceCode",
			},
			{
				title: "约定端口号",
				dataIndex: "servicePort",
				render: (record) => <span>{record}</span>,
			},
			{
				title: "服务描述",
				dataIndex: "remark",
			},
		],
		// 是否显示新建按钮
		showAddBtn: true,
		// 新建按钮权限控制代码
		addBtnPermCode: "",
		addPageRender: () => {
			const AddPage = getEditPage({
				pageType: "add",
				headerTitle: "新增服务配置",
				headerContent: "新增一个服务,需要录入服务编码服务名称端口号等信息",
				// 保存数据成功的回调
				afterSubmitSuccess: (closeRightModal) => {
					// 保存数据成功后刷新列表数据
					listExports && listExports.getListData();
					// 关闭右边modal
					closeRightModal();
				},
			});
			return <AddPage />;
		},
		// 是否显示详情按钮
		showDetailBtn: true,
		// 详情按钮权限控制代码
		detailBtnPermCode: "",
		detailPageRender: (record) => {
			const DetailPage = getDetailPage({ headerTitle: record.serviceName, headerContent: record.remark });
			return <DetailPage detailId={record.id} />;
		},
		// 是否显示修改按钮
		showUpdateBtn: true,
		// 修改按钮权限控制代码
		updateBtnPermCod: "",
		updatePageRender: (record) => {
			const UpdatePage = getEditPage({
				pageType: "update",
				headerTitle: record.serviceName,
				headerContent: record.remark,
				afterSubmitSuccess: (closeRightModal) => {
					listExports && listExports.getListData(); // 保存数据成功后刷新列表数据
				},
			});
			return <UpdatePage detailId={record.id} />;
		},
		// 是否显示删除按钮
		showDeleteBtn: true,
		// 删除按钮权限控制代码
		deleteBtnPermCod: "",
		//更多操作按钮的map数据
		moreBtnMap: [
			{
				key: '0',
				name: "默认的按钮",
			},
		],
		//更多操作按钮的的点击事件
		onMoreBtnClick:(item,record)=>{
			message.success(`您当前点击的是[${record.serviceName}]这条数据`)
		},
		// 获取列表数据的后台接口函数，其必须内部返回Promise
		listApiInterface: (query) => {
			return api.getServiceList(Object.assign(query, { servcieName: query.serviceName })); //处理字段名
		},
		// 删除按钮的后台接口函数，其必须内部返回Promise
		deleteApiInterface: (data) => {
			return api.deleteService({ id: data.id });
		},
		exportSomething: (obj) => (listExports = obj),
		//是否显示分页
        showPagination: true,
         // 分页类型 paging | infinite
         paginationType:'paging',
	},
};
export default ZsearchListHOC(config);
