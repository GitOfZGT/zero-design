import React from "react";
// import { Input } from "antd";

// 工具
import { mergeConfig } from "../zTool";

import ZpageWraperHOC from "../ZpageWraperHOC";

import { const_getListConfig } from "../constant";
// childs
import ZtreePanel from "./ZtreePanel";

// import cssClass from "./style.scss";

// HOC
const PageWraper = ZpageWraperHOC();

export function ZeditorTreeHOC(pageConfig) {
	pageConfig = pageConfig ? pageConfig : {};
	let defaultConfig = const_getListConfig("tree", [
		"panelHeader",
		"showAddBtn",
		"addBtnPermCode",
		"addPageRender",
		"showDetailBtn",
		"detailBtnPermCode",
		"detailPageRender",
		"showUpdateBtn",
		"updateBtnPermCod",
		"updatePageRender",
		"showDeleteBtn",
		"deleteBtnPermCod",
		"moreBtnMap",
		"onMoreBtnClick",
		"deleteApiInterface",
		"exportSomething",
		"treeDataKeys",
		"treeApiInterface",
		"childApiInterface",
		"panelBeforeRender",
		"panelAfterRender",
		"moreContentRender",
	]);

	defaultConfig = mergeConfig(defaultConfig, pageConfig);
	class List extends React.Component {
		config = defaultConfig;
		render() {
			return (
				<PageWraper pageHeader={this.config.pageHeader}>
					<ZtreePanel
						colFormItems={this.config.searchForm.items}
						{...this.config.tree}
						insertLocation={this.config.insertLocation}
					/>
				</PageWraper>
			);
		}
	}

	return List;
}

export default ZeditorTreeHOC;