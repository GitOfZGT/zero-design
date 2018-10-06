import React from "react";
// import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { const_showLoading,  } from "../constant";
import { message, } from "antd";
// 工具
import { mergeConfig } from "../zTool/";
// 上下文
import ZerodMainContext from "../ZerodMainContext";
import Zinfo from "../Zinfo";
// 其他HOC
import ZpageWraperHOC from "../ZpageWraperHOC/";
const PageWraper = ZpageWraperHOC();

export function ZdetailSimpleBaseHOC(pageConfig) {
	pageConfig = pageConfig ? pageConfig : {};
	let defaultConfig = {
		//视图显示的地方：  mainRoute | mainModal | appModal
		insertLocation: "mainModal",
		pageHeader: {
			show: true,
			// array>[object] | null,如果是null则不显示面包屑
			breadcrumbRoutes: null,
			// any
			title: "标题",
			//any
			content: "描述",
			//element | node
			rightMoreContent: <div>右边</div>,
		},
		detail: {
			panelHeader: "基础信息",
			defaultSpan: undefined,
			items: [
				{
					key: "serviceCode",
					label: "名称",
					span: 8,
					render: () => {
						return (value, record)=>value;
					},
				},
				{
					key: "serviceName",
					label: "描述",
					span: 8,
					render: () => {
						return (value, record)=>value;
					},
				},
			],
			// 获取详情数据的后台接口函数，必须返回 Promise
			detailApiInterface: () => Promise.reject({ mag: "未提供后台接口" }),
		},
		// 更多渲染内容
		moreContentRender: (detail) => {
			return null;
		},
		// 更多渲染内容函数
		panelBeforeRender: (detail, tool) => {
			return null;
		},
		// 更多渲染内容函数
		panelAfterRender: (detail, tool) => {
			return null;
		},
	};
	defaultConfig = mergeConfig(defaultConfig, pageConfig);
	class myDetail extends React.Component {
		static propTypes = {
			detailId: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
		};
		config = defaultConfig;
		state = {
			detailData: {},
		};
		methods = {
			showLoading: (show) => {
				const_showLoading(this.config.insertLocation, this.props)(show);
			},
			getDetailData: () => {
				this.methods.showLoading(true);
				this.config.detail
					.detailApiInterface(this.props.detailId, this.props, this.tool)
					.then((re) => {
						this.setState({
							detailData: re.data,
						});
					})
					.catch((re) => {
						message.error(re && re.msg ? re.msg : "获取数据失败");
					})
					.finally(() => {
						this.methods.showLoading(false);
					});
			},
		};
		getPanleHeader() {
			const heading = this.config.detail.panelHeader;
			return heading ? (
				<div className="z-panel-heading">{typeof heading == "function" ? heading(this) : heading}</div>
			) : null;
		}
		tool = {
			showLoading: this.methods.showLoading,
			methods:this.methods,
		};
		componentDidMount() {
			this.methods.getDetailData();
		}
		render() {
			return (
				<PageWraper pageHeader={this.config.pageHeader}>
				{typeof this.config.panelBeforeRender === "function" &&
						this.config.panelBeforeRender(this.state.detailData, this.tool)}
					<div className="z-panel">
						{this.getPanleHeader()}
						<div className="z-panel-body">
							<Zinfo
								items={this.config.detail.items}
								fieldValue={this.state.detailData}
								defaultSpan={this.config.detail.defaultSpan}
							/>
							{typeof this.config.moreContentRender === "function" &&
						this.config.moreContentRender(this.state.detailData, this.tool)}
						</div>
					</div>
					{typeof this.config.panelAfterRender === "function" &&
						this.config.panelAfterRender(this.state.detailData, this.tool)}
				</PageWraper>
			);
		}
	}
	return ZerodMainContext.setConsumer(myDetail);
}

export default ZdetailSimpleBaseHOC;
