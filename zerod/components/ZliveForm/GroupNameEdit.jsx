import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { Icon, Input, Tooltip } from "antd";
import { getControl, getOptions } from "../Zform/controls";
export default React.memo(function GroupNameEdit(props) {
	const { value, onChange } = props;
	const [inputValue, setInputValue] = useState();
	const [edited, setEdited] = useState(false);
	return (
		<>
			{!edited ? <span>{value}</span> : null}
			{edited ? (
				<div className="z-display-inline-block" style={{ width: "180px" }}>
					{getControl("Input", {
						size: "small",
						value: inputValue,
						onChange: value => {
							setInputValue(value);
						},
					})}
				</div>
			) : null}
			{edited ? (
				<Tooltip placement="top" title="取消">
					<div
						className="z-live-tool-item all-border small delete z-margin-left-10"
						onClick={() => {
							setEdited(false);
						}}
					>
						<Icon type="close" />
					</div>
				</Tooltip>
			) : null}
			{edited ? (
				<Tooltip placement="top" title="确定">
					<div
						className="z-live-tool-item all-border small z-margin-left-10"
						onClick={() => {
							const returner = typeof onChange === "function" && onChange(inputValue);
							if (returner) {
								return;
							}
							setEdited(false);
						}}
					>
						<Icon type="check" />
					</div>
				</Tooltip>
			) : null}
			{!edited ? (
				<Tooltip placement="top" title="修改组名">
					<div
						className="z-live-tool-item all-border small z-margin-left-10"
						onClick={() => {
							setEdited(true);
							setInputValue(value);
						}}
					>
						<Icon type="form" />
					</div>
				</Tooltip>
			) : null}
		</>
	);
});
