import React from "react";
import { withRouter } from "react-router-dom";
import {
	const_showLoading,
	const_insertLocations,
	const_getInsertLocation,
	const_getModalType,
	const_getMainTool,
} from "../constant";
import PropTypes from "prop-types";
import { Zform } from "../Zform";
import { Input, message } from "antd";
// import cssClass from "./style.scss";
// 工具
import { mergeConfig } from "../zTool";
// 上下文
import ZerodMainContext from "../ZerodMainContext";

import { ZpageWraperHOC } from "../ZpageWrapper";
const PageWraper = ZpageWraperHOC();

export function ZeditSimpleFormHOC(pageConfig) {
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
		form: {
			type: "add", //'add' | 'update'
			panelHeader: "表单",
			defaultSpan: undefined,
			submitBtnRender: undefined,
			submitMsg: undefined,
			submitBtnName: undefined,
			items: [
				{
					key: "serviceCode",
					label: "名称",
					render: (form) => {
						return <Input placeholder="请输入内容" />;
					},
					//antd的 form.getFieldDecorator的options
					options: {
						//验证规则
						rules: [
							{
								required: true,
								message: "不能为空。",
							},
						],
					},
				},
				{
					key: "serviceName",
					label: "描述",
					render: (form) => {
						return <Input placeholder="请输入内容" />;
					},
				},
			],
			// 获取详细数据的后台接口函数
			detailApiInterface: (detailId, props, tool) => Promise.reject({ mag: "未提供后台接口" }),
			// 保存数据的后台接口函数
			submitApiInterface: (values, props, tool) => Promise.reject({ mag: "未提供后台接口" }),
			showSubmitBtn: true,
			// submitApiInterface接口成功之后的回调
			afterSubmitSuccess: (values, tool) => {},
		},
		// 更多渲染内容函数
		moreContentRender: (detail, tool) => {
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
	class myForm extends React.Component {
		static propTypes = {
			detailId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		};
		config = defaultConfig;
		state = {
			detailData: {},
		};
		methods = {
			showLoading: (show) => {
				const_showLoading(this.insertLocation, this.props)(show);
			},
			getFormDetailData: () => {
				if (this.props.detailId === undefined || this.props.detailId === null) {
					throw Error("缺少获取详细数据的detailId");
				}
				this.methods.showLoading(true);
				this.config.form
					.detailApiInterface(this.props.detailId, this.props, this.tool)
					.then((re) => {
						const valueData = {};
						this.config.form.items.forEach((item) => {
							valueData[item.key] = re.data[item.detailKey ? item.detailKey : item.key];
						});

						this.setState(
							{
								detailData: re.data,
							},
							() => {
								this.form.setFieldsValue(valueData);
							},
						);
					})
					.catch((re) => {
						message.error(re && re.msg ? re.msg : "获取数据失败");
					})
					.finally(() => {
						this.methods.showLoading(false);
					});
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
			closeRightModal: () => {
				this.methods.closeCurrentModal();
			},
			onSubmit: (values) => {
				const afterSuccess = this.config.form.afterSubmitSuccess;
				this.props.showModalLoading(true);
				return this.config.form
					.submitApiInterface(values, this.props, this.tool)

					.then((re) => {
						message.success("保存成功");
						typeof afterSuccess === "function" && afterSuccess(values, this.tool);
					})
					.catch((re) => {
						message.error(re && re.msg ? re.msg : "保存失败");
					})
					.finally(() => {
						this.props.showModalLoading(false);
					});
			},
		};
		getPanleHeader() {
			const heading = this.config.form.panelHeader;
			return heading ? (
				<div className="z-panel-heading">{typeof heading == "function" ? heading(this) : heading}</div>
			) : null;
		}
		getFormInstance = (form) => {
			this.form = form;
		};
		tool = {
			...const_getMainTool.call(this),
			getFormInstance: () => {
				return this.form;
			},
			submit: this.methods.onSubmit, //已在methods属性中提供，为了向下兼容
			showLoading: this.methods.showLoading,
			closeRightModal: this.methods.closeRightModal,
			methods: this.methods,
			$router: {
				history: this.props.history,
				location: this.props.location,
			},
		};
		didAsync = () => {
			if (this.config.form.type === "update") {
				this.methods.getFormDetailData();
			}
		};
		componentDidMount() {
			this.insertLocation=const_getInsertLocation(this.hocWrapperEl);
		}
		render() {
			const {
				type,
				panelHeader,
				detailApiInterface,
				submitApiInterface,
				showSubmitBtn,
				afterSubmitSuccess,
				getFormInstance,
				onSubmit,
				submitBtnName,
				...formOthers
			} = this.config.form;
			return (
				<section
					ref={(el) => {
						this.hocWrapperEl = el;
					}}
				>
					<PageWraper
						pageHeader={this.config.pageHeader}
						pageFooter={this.config.pageFooter}
						hasBodyPadding={this.config.hasBodyPadding}
					>
						{typeof this.config.panelBeforeRender === "function" &&
							this.config.panelBeforeRender(this.state.detailData, this.tool)}
						<div className="z-panel">
							{this.getPanleHeader()}
							<div className="z-panel-body">
								<Zform
									{...formOthers}
									onSubmit={this.methods.onSubmit}
									getFormInstance={this.getFormInstance}
									submitBtnName={this.config.form.showSubmitBtn ? this.config.form.submitBtnName : ""}
									afterItemsRendered={this.didAsync}
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
	return ZerodMainContext.setConsumer(withRouter(myForm));
}

export default ZeditSimpleFormHOC;
