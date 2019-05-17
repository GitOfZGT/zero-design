import React from "react";
import PropTypes from "prop-types";
// zerod
import { Ztabs, ZerodMainContext } from "zerod";

class DetailTab extends React.Component {
	static propTypes = {
		data: PropTypes.object,
	};
	getConfig = (content) => {
		if (!content) {
			return <div className="z-text-center z-text-gray">无相关配置信息</div>;
		}
		return (
			<div style={{ background: "#2B2B2B", padding: 16 }}>
				{content.split("\n").map((line, n) => {
					let tmp = line;
					if (line.startsWith("#")) {
						tmp = <span style={{ color: "#629755" }}>{line}</span>;
					} else if (line.indexOf("=") > 0) {
						const idx = line.indexOf("=");
						const key = line.substring(0, idx);
						const value = line.substring(idx + 1, line.length);
						tmp = (
							<span>
								<span style={{ color: "#9876AA" }}>{key}</span>
								<span style={{ color: "rgba(255,255,255,0.85)" }}>=</span>
								<span style={{ color: "#BABABA" }}>{value}</span>
							</span>
						);
					}
					return <div key={`${line}-${n}`}>{tmp}</div>;
				})}
			</div>
		);
	};
	tabContent = (item) => {
		return this.getConfig(item.serviceConfig["confProperty"]);
	};
	defaultTabPanes = [
		{ tab: "默认环境", key: "default", serviceConfig: {}, content: this.tabContent },
		{ tab: "开发环境", key: "dev", serviceConfig: {}, content: this.tabContent },
		{ tab: "测试环境", key: "test", serviceConfig: {}, content: this.tabContent },
		{ tab: "生产环境", key: "prod", serviceConfig: {}, content: this.tabContent },
	];
	getTabPanes(defaultTabPanes) {
		const { data } = this.props;
		if (data && data.cfgcPropertyDOList) {
			return defaultTabPanes.map((item, index) => {
				item.serviceId = data.serviceId;
				const tabpanes = data.cfgcPropertyDOList;
				for (let i = 0; i < tabpanes.length; i++) {
					if (item.key === tabpanes[i]["environment"]) {
						item.serviceConfig = tabpanes[i];
						break;
					}
				}
				return item;
			});
		} else {
			return [];
		}
	}

	render() {
		const tabPanes = this.getTabPanes(this.defaultTabPanes);
		return (
			<div className="z-panel z-margin-top-20">
				<div className="z-panel-heading">配置信息</div>
				<div className="z-panel-body">
					<Ztabs tabPanes={tabPanes} />
				</div>
			</div>
		);
	}
}

export default ZerodMainContext.setConsumer(DetailTab);
