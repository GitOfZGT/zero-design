import React from "react";
import { Tabs } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

export  class Ztabs extends React.Component {
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
		const { tabPanes, ...others } = this.props;
		return <Tabs {...others}>{this.getTabPanes()}</Tabs>;
	}
}

export default Ztabs;
