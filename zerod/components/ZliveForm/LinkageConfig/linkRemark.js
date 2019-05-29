import React from "react";
import { Tag } from "antd";
import { linkageTypeActionName } from "../liveCanstant";

function srcControlRemark(srcControl, srcValues) {
	return (
		<>
			<Tag color="volcano">{srcControl ? srcControl.label : "未选控件"}</Tag>
			<span>的值：</span>
			{srcValues.map(item => (
				<Tag color="#2db7f5" key={item.label}>
					{item.label}
				</Tag>
			))}
		</>
	);
}

export function linkRemark1({ srcControl, srcValues, distControls, linkageType }) {
	return (
		<span>
			{srcControlRemark(srcControl, srcValues)}
			<span className="z-margin-right-5">联动</span>
			{distControls.map(item => (
				<Tag color="magenta" key={item.label}>
					{item.label}
				</Tag>
			))}
			<span>{linkageTypeActionName[linkageType]}</span>
		</span>
	);
}

export function linkRemark2({ srcControl, srcValues, distControl, distValues }) {
	return (
		<span>
			{srcControlRemark(srcControl, srcValues)}
			<span className="z-margin-right-5">联动</span>
			<Tag color="volcano">{distControl ? distControl.label : "未选控件"}</Tag>
			<span>可选项：</span>
			{distValues.map(item => (
				<Tag color="#2db7f5" key={item.label}>
					{item.label}
				</Tag>
			))}
		</span>
	);
}

export function linkRemark3({ srcControls, distControls }) {
	return (
		<span>
			<span>身份证输入控件：</span>
			{srcControls.map(item => {
				return (
					<Tag color="volcano" key={item.label}>
						{item.label}
					</Tag>
				);
			})}
			<span className="z-margin-right-5">联动出生年月日接收控件：</span>
			{distControls.map(item => {
				return (
					<Tag color="volcano" key={item.label}>
						{item.label}
					</Tag>
				);
			})}
		</span>
	);
}
