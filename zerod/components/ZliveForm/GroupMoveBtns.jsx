import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { Icon, Tooltip } from "antd";

export default React.memo(function GroupMoveBtns(props) {
	const { onMoveUp, onMoveDown,onRemove } = props;
	return (
		<>
			<Tooltip placement="top" title="上移">
				<div className="z-live-tool-item all-border move small z-margin-right-10" onClick={onMoveUp}>
					<Icon type="arrow-up" />
				</div>
			</Tooltip>
			<Tooltip placement="top" title="下移">
				<div className="z-live-tool-item all-border move small z-margin-right-10" onClick={onMoveDown}>
					<Icon type="arrow-down" />
				</div>
			</Tooltip>
			<Tooltip placement="top" title="移除组">
					<div
						className="z-live-tool-item all-border small delete z-margin-right-10"
						onClick={onRemove}
					>
						<Icon type="delete" />
					</div>
				</Tooltip>
		</>
	);
});
