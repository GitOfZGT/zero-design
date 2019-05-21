import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { Icon, Tooltip } from "antd";

export default React.memo(function InsertGroupBtns(props) {
	const { onInsertUp, onInsertDown } = props;
	return (
		<>
			<Tooltip placement="top" title="向上插入一组">
				<div className="z-live-tool-item all-border move small z-margin-right-10" onClick={onInsertUp}>
					<Icon type="arrow-up" className="z-group-insert"/>
				</div>
			</Tooltip>
			<Tooltip placement="top" title="向下插入一组">
				<div className="z-live-tool-item all-border move small z-margin-right-10" onClick={onInsertDown}>
					<Icon type="arrow-down"  className="z-group-insert"/>
				</div>
			</Tooltip>
		</>
	);
});
