import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { const_showLoading, const_getInsertLocation,const_getMainTool,const_getModalType,const_insertLocations } from "../constant";
import { message, } from "antd";
// 工具
import { mergeConfig } from "../zTool/";
// 上下文
import ZerodMainContext from "../ZerodMainContext";
import Zinfo from "../Zinfo";
// 其他HOC
import {ZpageWraperHOC} from "../ZpageWrapper";
const PageWraper = ZpageWraperHOC();

export function ZdetailSimpleBaseHOC(pageConfig) {
	pageConfig = pageConfig ? pageConfig : {};
	let defaultConfig = {
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
				const_showLoading(this.insertLocation, this.props)(show);
			},
			openModal: (content) => {
				content &&
					this.props.showRightModal &&
					this.props.showRightModal(true, const_getModalType(this.insertLocation), content);
			},
			closeCurrentModal: () => {
				if (this.insertLocation !== const_insertLocations.mainRoute)
					this.props.showRightModal && this.props.showRightModal(false, this.insertLocation);
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
			...const_getMainTool.call(this),
			showLoading: this.methods.showLoading,//同 methods.showLoading,这为了版本兼容
			methods: this.methods,
			$router:{
                history:this.props.history,
                location:this.props.location,
            }
		};
		componentDidMount() {
            const_getInsertLocation.call(this);
			this.methods.getDetailData();
		}
		render() {
			return (
                <section
					ref={(el) => {
						this.hocWrapperEl = el;
					}}
				>
				<PageWraper pageHeader={this.config.pageHeader} pageFooter={this.config.pageFooter} hasBodyPadding={this.config.hasBodyPadding}>
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
                </section>
			);
		}
	}
	return ZerodMainContext.setConsumer(withRouter(myDetail));
}

export default ZdetailSimpleBaseHOC;
