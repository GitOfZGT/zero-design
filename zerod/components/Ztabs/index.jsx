import React from "react";
import ZpureComponent from "../ZpureComponent";
import { Tabs } from "antd";
import PropTypes from "prop-types";
import "./style.scss";
export class Ztabs extends ZpureComponent {
	static propTypes = {
		tabPanes: PropTypes.arrayOf(PropTypes.object),
	};
	static defaultProps = {
		tabPanes: [{ tab: "名称", key: "name", content: "内容" }],
	};
	getTabPanes() {
		return this.props.tabPanes.map((item, i) => {
			return (
				<Tabs.TabPane tab={item.tab} key={item.key}>
					{typeof item.content === "function" ? item.content(item) : item.content}
				</Tabs.TabPane>
			);
		});
	}
	render() {
		const { tabPanes, className, ...others } = this.props;
		return (
			<Tabs className={`z-tabs ${className || ""}`} tabBarGutter={10} {...others}>
				{this.getTabPanes()}
			</Tabs>
		);
	}
}

export default Ztabs;
