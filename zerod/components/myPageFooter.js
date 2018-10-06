import React from "react";
import { Icon } from "antd";

export const footerLinks = [
	{
		key: "hua-cloud",
		title: "深圳市华云中盛科技有限公司",
		href: "http://www.hua-cloud.com.cn/",
		blankTarget: true,
	},
	{
		key: "szhcf",
		title: "华成峰集团",
		href: "http://www.szhcf.com.cn/",
		blankTarget: true,
	},
];
export const footerCopyright = () => (
	<div>
		Copyright <Icon type="copyright" /> 2018 华云中盛-项目交付中心技术团队出品
	</div>
);
