import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
// import { getControl, getOptions } from "../../Zform/controls";
import { Row, Col, Tag, Icon, Tooltip } from "antd";
import { linkageTypeActionName } from "../liveCanstant";
function ValueLinkConfigured(props, ref) {
	const { linkageType, onRemove } = props;
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
			{configured.map((c,index) => {
				return (
					<Row gutter={16} key={c.srcValue} type="flex" className="z-link-configured">
						<Col span={6}>
							<div className="z-flex-space-between">
								<Tag color="#2db7f5">{c.valueLabel}</Tag>
								<span>{linkageTypeActionName[linkageType]}</span>
							</div>
						</Col>
						<Col span={14}>
							{c.fields.map(item => {
								if (Array.isArray(item.options)) {
									return (
										<div key={item.fieldKey}>
											<Tag color="magenta">{item.label}</Tag>
											<span>可选的选项：</span>
											{item.options.map(opt => {
												return (
													<Tag key={opt.value} color="#2db7f5">
														{opt.label}
													</Tag>
												);
											})}
										</div>
									);
								}
								return (
									<Tag color="magenta" key={item.fieldKey ? item.fieldKey : item.groupName}>
										{item.fieldKey ? item.label : item.groupName}
									</Tag>
								);
							})}
						</Col>
						<Col span={4}>
							<Tooltip placement="top" title="移除">
								<div
									className="z-live-tool-item delete all-border small"
									onClick={() => {
										typeof onRemove === "function" && onRemove(c,index);
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

export default React.memo(React.forwardRef(ValueLinkConfigured));
