import React from "react";
import { Button } from "antd";
import { dataTypeTest } from "./zTool";
//
export const const_insertLocations = {
	mainRoute: "mainRoute",
	mainModal: "mainModal",
	appModal: "appModal",
};

export const const_showLoading = (insertLocation, props) => {
	return function(show) {
		if (insertLocation === const_insertLocations.mainRoute) {
			props.showRouteLoading && props.showRouteLoading(show);
		} else {
			props.showRouteLoading && props.showModalLoading(show, insertLocation);
		}
	};
};

export const const_getModalType = (insertLocation) => {
	switch (insertLocation) {
		case const_insertLocations.mainRoute:
			return const_insertLocations.mainModal;
		case const_insertLocations.mainModal:
			return const_insertLocations.appModal;
		case const_insertLocations.appModal:
			return "noModal";
	}
};

export const animateTimout = {
	flipInTime: 500,
	flipOutTime: 300,
};
//如在Zform中使用const_initItems.call(this,<Input placeholder="加载中" disabled />);
export const const_initItems = function(items,disableControl, renderArgument = {}) {
	this.allAsync = [];
	const newItems = items.map((item, index) => {
		let render = item.render;
		if (render && typeof render !== "function") {
			throw Error("render属性必须是函数");
		}
		let control = (value)=>value;
		let loading = false;
		let renderValue = null;
		if (render) {
			renderValue = render(renderArgument);
			if (Object.prototype.toString.call(renderValue) === "[object Promise]") {
				this.allAsync.push({ promise: renderValue, index });
				renderValue = disableControl;
				loading = true;
			}
		}
		if (renderValue) {
			control = renderValue;
		}
		let span0 = this.props.defaultSpan;
		span0 = typeof span0 === "number" ? { md: span0 } : span0;
		let span1 =
			dataTypeTest(control) == "object" &&
			control.props &&
			control.props.prefixCls == "ant-input" &&
			control.type.TextArea == undefined
				? { md: 24 }
				: span0;
		let span2 = typeof item.span === "number" ? { md: item.span } : item.span;
		let span = item.span ? span2 : span1;
		const newItem = {
			...item,
			loading,
			control,
			span,
		};
		return newItem;
	});
	this.setState({
		items: newItems,
	});
};
//如在Zform中使用 const_execAsync.call(this,callback);
export const const_execAsync = function(callback) {
	callback = typeof callback == "function" ? callback : function() {};
	if (this.allAsync.length) {
		this.allAsync.forEach((asy) => {
			asy.promise.then((control) => {
				this.state.items[asy.index].control = control;
				this.state.items[asy.index].loading = false;
			});
		});
		Promise.all(
			this.allAsync.map((asy) => {
				return asy.promise;
			}),
		).then((re) => {
			this.allAsync = [];
			this.setState(
				{
					items: [...this.state.items],
				},
				callback,
			);
		});
	} else {
		callback();
	}
};
//ZtreePanel和ZlistPanel的heading,这里不能是箭头函数
export const const_getPanleHeader = function() {
	this.addBtn = this.props.showAddBtn ? (
		// <div className="z-margin-bottom-15">
		<Button type="primary" icon="plus" className="z-margin-left-10" onClick={this.methods.onAdd}>
			新增
		</Button>
	) : // </div>
	null;
	const heading = this.props.panelHeader;
	return heading ? (
		<div className="z-panel-heading z-flex-items-v-center z-flex-space-between">
			<span>{typeof heading == "function" ? heading(this) : <span>{heading}</span>}</span>
			<span>
				{this.props.colFormItems && this.props.colFormItems.length ? (
					<Button type="dashed" icon="search" className="z-margin-left-10" onClick={this.methods.openSearch}>
						条件查询
					</Button>
				) : null}
				{this.addBtn}
			</span>
		</div>
	) : null;
};
export const const_getListConfig = (name, protos) => {
	const dataConfig = {
		/**----------------共有的属性-------------- */
		//面板头部string | function(){return ReactNode}
		panelHeader: "",
		// 是否显示新建按钮
		showAddBtn: true,
		// 新建按钮权限控制代码
		addBtnPermCode: "",
		addPageRender: (panel) => {
			return <div>新增页面</div>;
		},
		// 是否显示详情按钮
		showDetailBtn: true,
		// 详情按钮权限控制代码
		detailBtnPermCode: "",
		detailPageRender: (record, panel) => {
			return <div>详情页面</div>;
		},
		// 是否显示修改按钮
		showUpdateBtn: true,
		// 修改按钮权限控制代码
		updateBtnPermCod: "",
		updatePageRender: (record, panel) => {
			return <div>修改页面</div>;
		},
		// 是否显示删除按钮
		showDeleteBtn: true,
		// 删除按钮权限控制代码
		deleteBtnPermCod: "",
		//更多操作按钮的map数据 [{key: "0",name: "默认的按钮",}]
		moreBtnMap: null,
		onMoreBtnClick: (item, record) => {},
		// 删除按钮后台接口函数，其必须内部返回Promise
		deleteApiInterface: (data) => Promise.reject({ mag: "未提供后台接口" }),
		//用于接收列表内部一些东西的钩子 (obj)=>{}
		exportSomething: null,
		panelBeforeRender: null,
		panelAfterRender: null,
		moreContentRender: null,
		/**--------------ZlistPanel专有的属性---------------- */
		// 列表类型 table | card
		listType: "table",
		cardCoverRender: null, // listType=="card"时的一个前置render
		// 表格操作列的字段key
		actionDataIndex: "action",
		actionRender: null, // 操作列的render,可以自定义操作列的按钮
		// 对应antd的Table的参数
		tableParams: {},
		// 表格列map数据，同antd的表格 columns
		tableColumns: [],
		// 获取列表数据的后台接口函数，其必须内部返回Promise
		listApiInterface: (query, sorter) => Promise.reject({ mag: "未提供后台接口" }),
		// 分页
		showPagination: true,
		// 分页类型 paging | infinite
		paginationType: "paging",
		// 设置pageSize的钩子 (listType, isListCard)=>isListCard ? 8 : 10
		getPageSize: undefined,

		/**---------------ZtreePanel专有的属性-------- */
		treeDataKeys: { name: "name", id: "id", children: "children" },
		treeApiInterface: (query) => Promise.reject({ mag: "未提供后台接口" }),
		// childApiInterface: (query) => Promise.reject({ mag: "未提供后台接口" }),
		childApiInterface: false,
	};
	const list = {};
	protos.forEach((key) => {
		list[key] = dataConfig[key];
	});
	return {
		//视图显示的地方：  mainRoute | mainModal | appModal
		insertLocation: "mainRoute",
		pageHeader: {
			show: true,
			// array>[object] | null,如果是null则不显示面包屑
			breadcrumbRoutes: [],
			// any
			title: "",
			//any
			content: "",
			//element | node
			rightMoreContent: null,
		},
		searchForm: {
			// array>[object] | null，如果是null则不显示搜索表单
			items: [
				// {
				// 	key: "name",
				// 	label: "字段名称",
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
			],
		},
		[name]: list,
	};
};
