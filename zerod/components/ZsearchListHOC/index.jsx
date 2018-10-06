import React from "react";
// import { Input } from "antd";

// 工具
import { mergeConfig } from "../zTool";

import ZpageWraperHOC from "../ZpageWraperHOC";

import { const_getListConfig } from "../constant";
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
		render() {
			return (
				<PageWraper pageHeader={this.config.pageHeader}>
					<ZlistPanel
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
