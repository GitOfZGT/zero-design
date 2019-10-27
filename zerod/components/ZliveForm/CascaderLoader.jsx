import React, { useState, useEffect } from "react";
import { getControl } from "../Zform/controls";
import { httpAjax } from "../zTool";
//Cascader 异步加载子节点组件
const CascaderLoader = React.forwardRef(function(props, ref) {
	const {
		changeOnSelect,
		selectList,
		selectionsUrl,
		selectionsQuery,
		selectListFieldNames,
		optionsChange,
		...others
	} = props;
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(selectList);
	}, [selectList]);
	useEffect(() => {
		optionsChange && optionsChange(options);
	}, [options]);
	return getControl("Cascader", {
		...others,
		options,
		changeOnSelect: Boolean(changeOnSelect),
		showSearch: false,
		loadData:
			selectionsUrl && selectionsUrl.requireType === "part"
				? selectedOptions => {
						const targetOption = selectedOptions[selectedOptions.length - 1];
						targetOption.loading = true;
						httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
							...selectionsQuery,
							id: targetOption.value,
						})
							.then(re => {
								if (Array.isArray(re.data) && re.data.length) {
									targetOption.children = treeDataAddKey(
										re.data,
										undefined,
										selectListFieldNames,
										false,
									);
								} else {
									targetOption.children = null;
									targetOption.isLeaf = true;
								}
							})
							.catch(re => {
								targetOption.children = null;
							})
							.finally(() => {
								targetOption.loading = false;
								setOptions([...options]);
							});
				  }
				: undefined,
	});
});

export default CascaderLoader;
