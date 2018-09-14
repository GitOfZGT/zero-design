import React from "react";
// import { Input, InputNumber, Button } from "antd";
import { ZdetailSimpleBaseHOC } from "zerod";
import api from "@/App.api.js";
import DetailTab from "./DetailTab";

function getPage({ headerTitle, headerContent }) {
	const pageCofig = {
		pageHeader: {
			show: true,
			// array>[object] | null,如果是null则不显示面包屑
			breadcrumbRoutes: null,
			// any
			title: headerTitle,
			//any
			content: headerContent,
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
					colSpan: { lg: 12 },
					render: (value, record) => {
						return value;
					},
				},
			],
			detailApiInterface: (id, props) => {
				return api.config.getServiceDetail({ serviceId: id });
			},
		},
		moreContentRender: (detail) => {
			return <DetailTab data={detail} />;
		},
	};
	return ZdetailSimpleBaseHOC(pageCofig);
}
export default getPage;
