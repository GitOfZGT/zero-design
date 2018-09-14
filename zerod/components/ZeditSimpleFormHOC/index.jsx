import React from "react";
import { const_showLoading, const_insertLocations } from "../constant";
import PropTypes from "prop-types";
import { Zform } from "../Zform";
import { Input, message } from "antd";
// import cssClass from "./style.scss";
// 工具
import { mergeConfig } from "../zTool";
// 上下文
import ZerodMainContext from "../ZerodMainContext";

import ZpageWraperHOC from "../ZpageWraperHOC";
const PageWraper = ZpageWraperHOC();

export function ZeditSimpleFormHOC(pageConfig) {
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
		form: {
			type: "add", //'add' | 'update'
			panelHeader: "表单",
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
			detailApiInterface: (detailId, props) => Promise.reject({ mag: "未提供后台接口" }),
			// 保存数据的后台接口函数
			submitApiInterface: (values, props) => Promise.reject({ mag: "未提供后台接口" }),
			showSubmitBtn: true,
			// 保存数据成功的回调 closeRightModal是一个关闭modal的函数
			afterSubmitSuccess: (closeRightModal, values) => {},
		},
		// 更多渲染内容函数
		moreContentRender: (detail, tool) => {
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
			submitLoading: false,
		};
		detailData = {};
		methods = {
			showLoading: (show) => {
				const_showLoading(this.config.insertLocation, this.props)(show);
			},
			getFormDetailData: () => {
				if (this.props.detailId === undefined || this.props.detailId === null) {
					throw Error("缺少获取详细数据的detailId");
				}
				this.methods.showLoading(true);
				this.config.form
					.detailApiInterface(this.props.detailId, this.props)
					.then((re) => {
						this.detailData = re.data;
						const valueData = {};
						this.config.form.items.forEach((item) => {
							valueData[item.key] = re.data[item.detailKey ? item.detailKey : item.key];
						});
						this.form.setFieldsValue(valueData);
					})
					.catch((re) => {
						message.error(re && re.msg ? re.msg : "获取数据失败");
					})
					.finally(() => {
						this.methods.showLoading(false);
					});
			},
			closeRightModal: () => {
				if (this.config.insertLocation !== const_insertLocations.mainRoute)
					this.props.showRightModal(false, this.config.insertLocation);
			},
			onSubmit: (values) => {
				const afterSuccess = this.config.form.afterSubmitSuccess;
				this.props.showModalLoading(true);
				return this.config.form
					.submitApiInterface(values, this.props)

					.then((re) => {
						message.success("保存成功");
						typeof afterSuccess === "function" && afterSuccess(this.methods.closeRightModal, values);
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
			getFormInstance: () => {
				return this.form;
			},
			submit: this.methods.onSubmit,
			showLoading: this.methods.showLoading,
			closeRightModal: this.methods.closeRightModal,
		};

		componentDidMount() {
			if (this.config.form.type === "update") {
				this.methods.getFormDetailData();
			}
		}
		render() {
			return (
				<PageWraper pageHeader={this.config.pageHeader}>
					<div className="z-panel">
						{this.getPanleHeader()}
						<div className="z-panel-body">
							<Zform
								onSubmit={this.config.form.showSubmitBtn ? this.methods.onSubmit : null}
								items={this.config.form.items}
								getFormInstance={this.getFormInstance}
							/>
						</div>
					</div>
					{typeof this.config.moreContentRender === "function" &&
						this.config.moreContentRender(this.detailData, this.tool)}
				</PageWraper>
			);
		}
	}
	return ZerodMainContext.setConsumer(myForm);
}

export default ZeditSimpleFormHOC;
