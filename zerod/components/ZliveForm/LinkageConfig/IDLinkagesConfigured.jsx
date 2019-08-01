import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
// import { getControl, getOptions } from "../../Zform/controls";
import { Row, Col, Tag, Tooltip, Icon } from "antd";
function IDLinkagesConfigured(props, ref) {
	const { onRemove } = props;
	const [configured, setConfigured] = useState([]);
	useImperativeHandle(ref, () => {
		return {
			getCurrentConfigured() {
				return configured;
			},
			setConfigured,
		};
	});
	return (
		<>
			{configured.map((c, index) => {
				return (
					<Row gutter={16} key={c.linkageType + c.src.fieldKey} type="flex" className="z-link-configured">
						<Col span={6}>
							{c.linkageType === "6" ? <span>身份证输入控件：</span> : null}
							<Tag color="#2db7f5">{c.src.label}</Tag>
						</Col>
						<Col span={14}>
							<span>{c.linkageType === "6" ? "出生年月日接收控件：" : "联动异步控件："}</span>
							{c.dist.map(d => {
								return d.fields.map(item => {
									return (
										<Tag color="magenta" key={item.fieldKey}>
											{item.label}
										</Tag>
									);
								});
							})}
							{c.asyncParamName ? <span>请求选项，其参数名：<Tag color="red">{c.asyncParamName}</Tag></span> : null}
						</Col>
						<Col span={4}>
							<Tooltip placement="top" title="移除">
								<div
									className="z-live-tool-item delete all-border small"
									onClick={() => {
										typeof onRemove === "function" && onRemove(c, index);
									}}
								>
									<Icon type="delete" />
								</div>
							</Tooltip>
						</Col>
					</Row>
				);
			})}
			{!configured.length ? <p className="z-text-center">无配置</p> : null}
		</>
	);
}

export default React.memo(React.forwardRef(IDLinkagesConfigured));
