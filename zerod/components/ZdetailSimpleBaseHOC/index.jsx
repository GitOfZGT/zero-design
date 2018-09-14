import React from "react";
// import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { const_showLoading, animateTimout } from "../constant";
import { message, Row, Col } from "antd";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import cssClass from "./style.scss";
// 工具
import { dataTypeTest, mergeConfig } from "../zTool/";
// 上下文
import ZerodMainContext from "../ZerodMainContext";

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
			items: [
				{
					key: "serviceCode",
					label: "名称",
					span: 8,
					render: (value, record) => {
						return value;
					},
				},
				{
					key: "serviceName",
					label: "描述",
					span: 8,
					render: (value, record) => {
						return value;
					},
				},
			],
			// 用于修改每个item的结构的钩子，(item,data)=>{return <div>{`${item.label}:${data[item.key]}`}</div>}
			itemsRender: null,
			// 获取详情数据的后台接口函数，必须返回 Promise
			detailApiInterface: () => Promise.reject({ mag: "未提供后台接口" }),
		},
		// 更多渲染内容
		moreContentRender: (detail) => {
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
					.detailApiInterface(this.props.detailId, this.props)
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
		getItems() {
			const data = this.state.detailData;
			return this.config.detail.items.map((item, i) => {
				let span = dataTypeTest(item.span) === "object" ? item.span : { xxl: 6, xl: 8, lg: 12 };
				return (
					<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="flipX">
						<Col {...span}>
							{typeof this.config.detail.itemsRender === "function" ? (
								this.config.detail.itemsRender(item, data)
							) : (
								<div className="z-info z-margin-bottom-20 is-border-right">
									<div className="z-info-left z-padding-bottom-10">{item.label}</div>
									<div className="z-info-right z-padding-bottom-10">
										{typeof item.render === "function"
											? item.render(data[item.key], data)
											: data[item.key]}
									</div>
								</div>
								// <div className="z-flex z-margin-bottom-20">
								// 	<label className="z-text-black">{item.label}</label>
								// 	<span className="z-margin-left-5 z-margin-right-5">:</span>
								// 	<span className="flex-1">
								// 		{typeof item.render === "function"
								// 			? item.render(data[item.key], data)
								// 			: data[item.key]}
								// 	</span>
								// </div>
							)}
						</Col>
					</CSSTransition>
				);
			});
		}
		getPanleHeader() {
			const heading = this.config.detail.panelHeader;
			return heading ? (
				<div className="z-panel-heading">{typeof heading == "function" ? heading(this) : heading}</div>
			) : null;
		}
		tool = {
			showLoading: this.methods.showLoading,
		};
		componentDidMount() {
			this.methods.getDetailData();
		}
		render() {
			return (
				<PageWraper pageHeader={this.config.pageHeader}>
					<div className="z-panel">
						{this.getPanleHeader()}
						<div className="z-panel-body">
							<Row type="flex" className={cssClass["z-info-row"]}>
								<TransitionGroup component={null} enter={true} exit={true} appear={true}>
									{this.getItems()}
								</TransitionGroup>
							</Row>
						</div>
					</div>
					{typeof this.config.moreContentRender === "function" &&
						this.config.moreContentRender(this.state.detailData, this.tool)}
				</PageWraper>
			);
		}
	}
	return ZerodMainContext.setConsumer(myDetail);
}

export default ZdetailSimpleBaseHOC;
