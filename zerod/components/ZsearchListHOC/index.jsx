import React from "react";
// import { Input } from "antd";

// 工具
import { mergeConfig, GenNonDuplicateID } from "../zTool";

import { ZpageWraperHOC } from "../ZpageWrapper";

import { const_getListConfig, const_getPageWrapperProps } from "../constant";
// childs
import ZlistPanel from "./ZlistPanel";

// import cssClass from "./style.scss";

// HOC
const PageWraper = ZpageWraperHOC();

export function ZsearchListHOC(pageConfig) {
	pageConfig = pageConfig ? pageConfig : {};
	let defaultConfig = const_getListConfig("list", "ZlistPanel");

	defaultConfig = mergeConfig(defaultConfig, pageConfig);
	class List extends React.Component {
		config = defaultConfig;
		pageWraper = const_getPageWrapperProps(this.config);
		//pageId 是 pageHeader内部一个插槽id，这里将ZlistPanel的searchForm插到pageHeader显示
		pageId = GenNonDuplicateID();
		render() {
			if(this.pageWraper.pageHeader&&this.pageWraper.pageHeader.show){
				this.pageWraper.pageHeader.pageId=this.pageId;
			}
			return (
				<PageWraper {...this.pageWraper}>
					<ZlistPanel
						pageId={this.pageId}
						colFormItems={this.config.searchForm.items}
						searchForm={this.config.searchForm}
						{...this.config.list}
						insertLocation={this.config.insertLocation}
					/>
				</PageWraper>
			);
		}
	}

	return List;
}

export default ZsearchListHOC;
