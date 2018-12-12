import React from "react";
import { withRouter } from "react-router-dom";
import { const_getInsertLocation, const_getMainTool, const_getMethods ,const_getPageWrapperProps,const_extendArguments} from "../constant";
import PropTypes from "prop-types";
import { Zform } from "../Zform";
// import { Input } from "antd";
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
			rightMoreContent: null,
		},
		form: {
			type: "add", //'add' | 'update'
			panelHeader: "表单",
			defaultSpan: undefined,
			submitBtnRender: undefined,
			submitMsg: undefined,
			submitBtnName: undefined,
			items: [
				// {
				// 	key: "serviceCode",
				// 	label: "名称",
				// 	render: (form) => {
				// 		return <Input placeholder="请输入内容" />;
				// 	},
				// 	//antd的 form.getFieldDecorator的options
				// 	options: {
				// 		//验证规则
				// 		rules: [
				// 			{
				// 				required: true,
				// 				message: "不能为空。",
				// 			},
				// 		],
				// 	},
				// },
				// {
				// 	key: "serviceName",
				// 	label: "描述",
				// 	render: (form) => {
				// 		return <Input placeholder="请输入内容" />;
				// 	},
				// },
			],
			// 获取详细数据的后台接口函数
			detailApiInterface: (detailId, props, tool) => Promise.resolve({ data: {} }),
			// 保存数据的后台接口函数
			submitApiInterface: (values, props, tool) => Promise.resolve({ data: {} }),
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
		exportSomething:null,
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
			...const_getMethods.call(this),
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
						this.methods.notice.error(re && re.msg ? re.msg : "获取数据失败");
					})
					.finally(() => {
						this.methods.showLoading(false);
					});
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
						this.methods.notice.success("保存成功");
						typeof afterSuccess === "function" && afterSuccess(values, this.tool);
					})
					.catch((re) => {
						this.methods.notice.error(re && re.msg ? re.msg : "保存失败");
					})
					.finally(() => {
						this.props.showModalLoading(false);
					});
			},
		};
		getPanleHeader() {
			const heading = this.config.form.panelHeader;
			return heading ? (
				<div className="z-panel-heading">{typeof heading == "function" ? heading(this.tool) : heading}</div>
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
			typeof this.config.exportSomething=='function'&&this.config.exportSomething(this.tool);
			this.insertLocation = const_getInsertLocation(this.hocWrapperEl);
		}
		pageWraper = const_getPageWrapperProps(this.config);
		getDefaultFormItems = () => {
			const formItems=this.config.form.items? this.config.form.items
			: []
			return formItems.map(item=>{
				return {
					...item,
					render:(form,changeFormItems)=>{
						return typeof item.render=='function'&&item.render(form,changeFormItems,this.tool)
					}
				}
			});
		};
		formItems=this.getDefaultFormItems();
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
				items,
				submitBtnRender,
				...formOthers
			} = this.config.form;
			return (
				<section
					ref={(el) => {
						this.hocWrapperEl = el;
					}}
				>
					<PageWraper
						{...this.pageWraper}
					>
						{typeof this.config.panelBeforeRender === "function" &&
							this.config.panelBeforeRender(this.state.detailData, this.tool)}
						<div className="z-panel">
							{this.getPanleHeader()}
							<div className="z-panel-body">
								<Zform
									{...formOthers}
									submitBtnRender={const_extendArguments(submitBtnRender,this.tool)}
									items={this.formItems}
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
