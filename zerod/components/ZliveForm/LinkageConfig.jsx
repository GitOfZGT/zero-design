import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import Zform from "../Zform";
import { getControl, getOptions } from "../Zform/controls";

export default React.memo(function LinkageConfig(props) {
	const { onSubmit, defaultValue } = props;
	const [items, setItems] = useState([
		{
			key: "linkages",
			label: "联动配置json",
			span: 24,
			render() {
				return getControl("TextArea", {
					autosize: {
						minRows: 4,
					},
				});
			},
			options: getOptions({
				required: true,
			}),
		},
	]);

	return (
		<div className="z-panel">
			<div className="z-panel-heading">联动配置(暂未完成)</div>
			<div className="z-panel-body">
				<Zform
					items={items}
					formDefaultValues={{
						linkages:
							defaultValue && typeof defaultValue === "string"
								? defaultValue
								: defaultValue
								? JSON.stringify(defaultValue)
								: null,
					}}
					labelLayout="vertical"
					onSubmit={onSubmit}
					confirm={{ show: false }}
				/>
			</div>
		</div>
	);
});
