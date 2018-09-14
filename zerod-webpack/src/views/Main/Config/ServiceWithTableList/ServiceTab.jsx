import React from "react";
import PropTypes from "prop-types";
// zerod
import { Ztabs, Zform, ZerodMainContext } from "zerod";
// 第三方组件
import { message } from "antd";

import api from "@/App.api.js";

class ServiceTab extends React.Component {
	static propTypes = {
		data: PropTypes.object,
		formItems: PropTypes.arrayOf(PropTypes.object),
	};
	methods = {
		saveData: (item, values) => {
			this.props.showModalLoading(true);
			return api.config
				.updateServiceConfig({
					configProperty: values["confProperty"],
					environment: item.key,
					serviceId: item.serviceId,
				})
				.then((re) => {
					message.success("更新配置成功");
				})
				.catch((re) => {
					message.error(re && re.msg ? re.msg : "更新配置失败");
				})
				.finally(() => {
					this.props.showModalLoading(false);
				});
		},
	};
	tabContent = (item) => {
		return (
			<Zform
				items={this.props.formItems}
				formDefaultValues={{
					confProperty: item.serviceConfig["confProperty"],
				}}
				onSubmit={(values) => {
					return this.methods.saveData(item, values);
				}}
			/>
		);
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
				<div className="z-panel-heading">修改配置信息</div>
				<div className="z-panel-body">
					<Ztabs tabPanes={tabPanes} />
				</div>
			</div>
		);
	}
}

export default ZerodMainContext.setConsumer(ServiceTab);
