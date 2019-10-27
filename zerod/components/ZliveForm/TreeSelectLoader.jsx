import React, { useState, useEffect } from "react";
import { getControl } from "../Zform/controls";
import { httpAjax, itemsFromTree } from "../zTool";
//treeSelect 异步加载子节点组件
const TreeSelectLoader = React.forwardRef(function(props, ref) {
	const { selectList, selectionsUrl, selectionsQuery, selectListFieldNames, optionsChange, ...others } = props;
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(selectList);
	}, [selectList]);
	useEffect(() => {
		optionsChange && optionsChange(options);
	}, [options]);
	return getControl("TreeSelect", {
		...others,
		treeData: options,
		showSearch: false,
		treeDefaultExpandAll: false,
		allowClear: true,
		loadData:
			selectionsUrl && selectionsUrl.requireType === "part"
				? treeNode => {
						// console.log(treeNode);
						if (treeNode.props.isLeaf) {
							return Promise.resolve();
						}
						return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
							...selectionsQuery,
							id: treeNode.props.value,
						})
							.then(re => {
								itemsFromTree({
									tree: options,
									sourceItem: { value: treeNode.props.value },
									keyObj: { id: "value", children: "children" },
									action({ tree, currentItem, item, index, keyObj }) {
										if (Array.isArray(re.data) && re.data.length) {
											currentItem.children = treeDataAddKey(
												re.data,
												{
													label: "title",
													value: "value",
													children: "children",
													key: "key",
												},
												selectListFieldNames,
												false,
											);
										} else {
											currentItem.children = null;
											currentItem.isLeaf = true;
										}
									},
								});
							})
							.finally(() => {
								setOptions([...options]);
							});
				  }
				: undefined,
	});
});
export default TreeSelectLoader;
