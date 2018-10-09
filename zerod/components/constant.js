import React from "react";
import { Button } from "antd";
import { dataTypeTest } from "./zTool";
//
export const const_insertLocations = {
	mainRoute: "mainRoute",
	mainModal: "mainModal",
	mainModal_top: "mainModal_top",
	appModal: "appModal",
	appModal_top: "appModal_top",
};
export const const_getInsertLocation = function() {
	if (this.hocWrapperEl) {
		let _parent = this.hocWrapperEl.parentElement;
		while (!_parent.dataset.zgt_modal && _parent) {
			_parent = _parent.parentElement;
		}
		this.insertLocation = _parent && _parent.dataset.zgt_modal ? _parent.dataset.zgt_modal : "mainRoute";
	}
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
			return const_insertLocations.mainModal_top;
		case const_insertLocations.appModal:
			return const_insertLocations.appModal_top;
		case const_insertLocations.appModal_top:
			return "noModal";
	}
};

export const animateTimout = {
	flipInTime: 500,
	flipOutTime: 300,
};
//如在Zform中使用const_initItems.call(this,this.props.items,<Input placeholder="加载中" disabled />);
export const const_initItems = function(items, disableControl, renderArgument = {}, callback) {
	callback = typeof callback == "function" ? callback : function() {};
	this.allAsync = [];
	this.filedKeys = [];
	const newItems = items.map((item, index) => {
		let render = item.render;
		if (render && typeof render !== "function") {
			throw Error("render属性必须是函数");
		}
		let control = (value) => value;
		let loading = false;
		let renderValue = null;
		if (render) {
			const _return = render(renderArgument);
			if (Object.prototype.toString.call(_return) === "[object Promise]") {
				this.allAsync.push({ promise: _return, index });
				renderValue = disableControl;
				loading = true;
			} else if (typeof _return === "function") {
				renderValue = _return;
			}
		}
		if (renderValue) {
			control = renderValue;
		} else {
			control = render;
		}
		let defaultSpan = this.props.defaultSpan;
		defaultSpan = typeof defaultSpan === "number" ? { md: defaultSpan } : defaultSpan;

		const newItem = {
			...item,
			loading,
			control,
			defaultSpan,
		};
		this.filedKeys.push(item.key);
		return newItem;
	});
	this.setState(
		{
			items: newItems,
		},
		callback,
	);
};

export const const_itemSpan = function(control, currentSpan, defaultSpan) {
	let span = defaultSpan;
	if (currentSpan !== undefined) {
		span = typeof currentSpan === "number" ? { md: currentSpan } : currentSpan;
	} else if (
		dataTypeTest(control) == "object" &&
		control.props &&
		control.props.prefixCls == "ant-input" &&
		control.type.TextArea == undefined
	) {
		span = { md: 24 };
	}
	return span;
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
	}
};
//ZtreePanel和ZlistPanel的heading,这里不能是箭头函数
export const const_getPanleHeader = function() {
	const { showAddBtn } = this.props;
	const _showAddBtn = typeof showAddBtn == "function" ? showAddBtn() : showAddBtn;
	this.addBtn =
		_showAddBtn && !this.state.isListCard ? (
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

/**----------------共有的属性-------------- */
const common_protos = {
	//面板头部string | function(){return ReactNode}
	panelHeader: "",
	// 是否显示新建按钮
	showAddBtn: true,
	// 新建按钮权限控制代码
	addBtnPermCode: "",
	addPageRender: (tool) => {
		return <div>新增页面</div>;
	},
	// 是否显示详情按钮
	showDetailBtn: true,
	// 详情按钮权限控制代码
	detailBtnPermCode: "",
	detailPageRender: (record, tool) => {
		return <div>详情页面</div>;
	},
	// 是否显示修改按钮
	showUpdateBtn: true,
	// 修改按钮权限控制代码
	updateBtnPermCod: "",
	updatePageRender: (record, tool) => {
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
};
const private_protos = {
	ZlistPanel: {
		// 列表类型 table | card
		listType: "table",
		cardSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
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
		getPageSize: function(listType, isListCard) {
			return isListCard ? 8 : 10;
		},
		actionColumnWidth: 360,
	},
	ZtreePanel: {
		treeDataKeys: { name: "name", id: "id", children: "children" },
		treeApiInterface: (query) => Promise.reject({ mag: "未提供后台接口" }),
		// childApiInterface: (query) => Promise.reject({ mag: "未提供后台接口" }),
		childApiInterface: false,
		treeProps:{},
	},
};

export const const_getListConfig = (name, componentName) => {
	const list = Object.assign({}, common_protos, private_protos[componentName]);
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
