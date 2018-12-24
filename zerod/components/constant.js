import React from "react";
import ReactDOM from "react-dom";
import { ZsearchForm } from "./ZsearchForm";
import { Button, notification, message, Tooltip, Popover,Checkbox } from "antd";
import { dataType, GenNonDuplicateID } from "./zTool";
import searchCssClass from "./ZsearchListHOC/style.scss";
const noticeMethod = {
	notification,
	message,
};
// 相同的methods ,调用 const_getMethods.call(this)
export const const_getMethods = function() {
	return {
		notice: const_notification(this.props.noticeType),
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
	};
};

//通知方式：
const notice_config = {
	notification: {
		duration: 3,
		placement: "topRight",
		message: "提示信息",
	},
	message: {
		duration: 3,
		onClose: undefined,
	},
};
const notice_names = ["success", "error", "info", "warning"];
// const_notification("notification").success("内容")
export const const_notification = function(noticeType = "message") {
	const notice = {};
	notice_names.forEach((name) => {
		notice[name] = function(content, newConfig = {}) {
			const agur = {
				...notice_config[noticeType],
				...newConfig,
				description: content,
			};
			const type = agur.noticeType ? agur.noticeType : noticeType;
			if (type == "notification") {
				noticeMethod[type][name](agur);
			} else if (type == "message") {
				noticeMethod[type][name](content, agur.duration, agur.onClose);
			}
		};
	});
	return notice;
};

// 获取mainHOC提供的tool , const_getMainTool.call(this);
export const const_getMainTool = function() {
	const tool = {};
	[
		"getSideMenuData",
		"showRouteLoading",
		"showModalLoading",
		"setScrollToTop",
		"getUserInfo",
		"showRightModal",
		"$router",
		"getTemporaryStorage",
		"setTemporaryStorage",
		"getScrollAreaWrapperEl",
		"getInsertLocation",
	].forEach((key) => {
		tool[key] = this.props[key];
	});
	return tool;
};
//定义HOC放置的位置类型
export const const_insertLocations = {
	mainRoute: "mainRoute",
	mainModal: "mainModal",
	mainModal_top: "mainModal_top",
	appModal: "appModal",
	appModal_top: "appModal_top",
};
//获取当前HOC的放置位置
export const const_getInsertLocation = function(el) {
	if (el) {
		let _parent = el.parentElement;
		while (_parent && !_parent.dataset.zgt_modal) {
			_parent = _parent.parentElement;
		}
		return _parent && _parent.dataset.zgt_modal ? _parent.dataset.zgt_modal : "mainRoute";
	}
	return null;
};
//
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
function addItemCss(classNames) {
	let ht = "";
	classNames.forEach((item) => {
		ht += `.${item.className} .ant-form-item-label{width:${item.width} !important;white-space:normal !important;}`;
	});
	if (this.styleEl) {
		this.styleEl.innerHTML = ht;
	} else {
		this.styleEl = document.createElement("style");
		this.styleEl.innerHTML = ht;
		document.head.appendChild(this.styleEl);
	}
}
//如在Zform中使用const_initItems.call(this,this.props.items,<Input placeholder="加载中" disabled />);
export const const_initItems = function(
	items,
	disableControl,
	renderArgument = {},
	changeItems = function() {},
	callback,
) {
	callback = dataType.isFunction(callback) ? callback : function() {};
	this.allAsync = [];
	this.filedKeys = [];
	const hasItemClass = [];
	const newItems = items.map((item, index) => {
		let render = item.render;
		if (render && !dataType.isFunction(render)) {
			throw Error("render属性必须是函数");
		}
		let control = (value) => value;
		let loading = false;
		let renderValue = null;
		if (render) {
			const _return = render(renderArgument, changeItems);
			if (dataType.isPromise(_return)) {
				this.allAsync.push({ promise: _return, index });
				renderValue = disableControl;
				loading = true;
			} else if (dataType.isFunction(_return)) {
				renderValue = _return;
			}
		}
		if (renderValue) {
			control = renderValue;
		} else {
			control = render;
		}
		let defaultSpan = this.props.defaultSpan;
		defaultSpan = dataType.isNumber(defaultSpan) ? { md: defaultSpan } : defaultSpan;
		let ramdon = "";
		const itemClassName = item.labelWidth
			? ((ramdon = "z-form-item-" + GenNonDuplicateID()),
			  hasItemClass.push({ className: ramdon, width: item.labelWidth }),
			  ramdon)
			: "";
		const newItem = {
			...item,
			loading,
			control,
			defaultSpan,
			itemClassName,
		};
		this.filedKeys.push(item.key);
		return newItem;
	});
	addItemCss.call(this, hasItemClass);
	this.setState(
		{
			items: newItems,
		},
		callback,
	);
};

export const const_itemSpan = function(control, currentSpan, defaultSpan) {
	let span = defaultSpan;
	if (currentSpan !== undefined && currentSpan !== null) {
		span = dataType.isNumber(currentSpan) ? { md: currentSpan } : currentSpan;
	} else if (
		dataType.isObject(control) &&
		control.props &&
		control.props.prefixCls == "ant-input" &&
		dataType.isUndefined(control.type.TextArea)
	) {
		span = { md: 24 };
	}
	return span;
};

//如在Zform中使用 const_execAsync.call(this,callback);
export const const_execAsync = function(callback) {
	callback = dataType.isFunction(callback) ? callback : function() {};
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
				() => {
					this.setFieldValue();
					callback(this.props.form, this.methods);
				},
			);
		});
	} else {
		this.setFieldValue();
		callback(this.props.form, this.methods);
	}
};
//ZtreePanel和ZlistPanel的heading,这里不能是箭头函数
export const const_getPanleHeader = function(hasControl) {
	const tool = this.getExportSomething();
	const { showAddBtn, addBtnDisabled } = this.props;
	const _showAddBtn = typeof showAddBtn == "function" ? showAddBtn(tool) : showAddBtn;
	const _addBtnDisabled = typeof addBtnDisabled == "function" ? addBtnDisabled(tool) : addBtnDisabled;
	this.addBtn =
		_showAddBtn && !this.state.isListCard ? (
			// <div className="z-margin-bottom-15">
			<Button
				disabled={_addBtnDisabled}
				type="primary"
				icon="plus"
				className="z-margin-left-10"
				onClick={this.methods.onAdd}
			>
				新增
			</Button>
		) : // </div>
		null;
	const heading = this.props.panelHeader;
	let left = null,
		center = null,
		right = null;

	if (dataType.isObject(heading)) {
		left = dataType.isFunction(heading.left) ? heading.left(tool) : left;
		center = dataType.isFunction(heading.center) ? heading.center(tool) : center;
		right = dataType.isFunction(heading.right) ? heading.right(tool) : right;
	} else if (dataType.isFunction(heading)) {
		left = heading(tool);
	} else {
		left = heading;
	}
	const items = this.colFormItems;
	return left || center || right || items.length || this.addBtn ? (
		<div className="z-panel-heading z-flex-items-v-center z-flex-space-between">
			<span>
				{left}
				{hasControl ? (
					<Tooltip title="控制显示字段" placement="top">
						<Popover content={<Checkbox.Group className={searchCssClass['z-control-group']} defaultValue={this.checkColumnsValue} options={this.props.tableColumns.map(item=>{
							return {label:item.title+(item.dataIndex==this.props.actionDataIndex?"(包括操作区)":""),value:item.dataIndex};
						})} onChange={this.methods.checkColumnsChange}></Checkbox.Group>} title="控制显示字段" trigger="click" placement="rightTop">
							<i className={`zero-icon zerod-kongzhitai ${searchCssClass["z-control-icon"]}`} />
						</Popover>
					</Tooltip>
				) : null}
			</span>
			{center}
			<span>
				{right}
				{items.length ? (
					<Button type="dashed" icon="search" className="z-margin-left-10" onClick={this.methods.openSearch}>
						{this.state.expandedSearch ? "折叠" : "展开"}查询
						<i
							className={`zero-icon zerod-up z-margin-left-4 z-open-btn ${
								this.state.expandedSearch ? "" : "is-down"
							}`}
						/>
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
	moreBtnType: "rounding", // rounding | menu
	onMoreBtnClick: (item, record) => {},
	// 删除按钮后台接口函数，其必须内部返回Promise
	deleteApiInterface: (data) => Promise.resolve({ data: {} }),
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
		listApiInterface: (query, sorter) => Promise.resolve({ data: [] }),
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
		treeApiInterface: (query) => Promise.resolve({ data: [] }),
		// childApiInterface: (query) => Promise.reject({ mag: "未提供后台接口" }),
		childApiInterface: false,
		treeProps: {},
		//是否显示新增子节点按钮
		showAddChildBtn: true,
		// 是否禁用新增子节点按钮
		addChildBtnDisabled: false,
		// 新增子节点页面渲染模板
		addChildPageRender: null,
	},
};

export const const_getListConfig = (name, componentName) => {
	const list = Object.assign({}, common_protos, private_protos[componentName]);
	return {
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
		pageFooter: undefined,
		hasBodyPadding: true,
		searchForm: {
			defaultExpanded: false,
			insertTo: false,
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
import { ZpageWrapperProps } from "./ZpageWrapper";
export const const_getPageWrapperProps = function(config) {
	const newProps = {};
	Object.keys(ZpageWrapperProps).forEach((key) => {
		if (config[key] != undefined) {
			newProps[key] = config[key];
		}
	});
	return newProps;
};

export function const_extendArguments(func, ...otherArg) {
	if (dataType.isFunction(func))
		return (...arg) => {
			return func(...arg, ...otherArg);
		};
}
//ZlistPanel 和 ZtreePanel 调用 const_extendPanelFormConfig.call(this)
export function const_extendPanelFormConfig() {
	const config = this.props.searchForm;
	if (config) {
		const newConfig = {};
		Object.keys(config).forEach((key) => {
			if (dataType.isFunction(config[key])) {
				newConfig[key] = const_extendArguments(config[key], this.getExportSomething());
			} else {
				newConfig[key] = config[key];
			}
		});
		return newConfig;
	}
}
//ZlistPanel 和 ZtreePanel 调用 const_getPanelDefaultFormItems.call(this)
export function const_getPanelDefaultFormItems() {
	const formItems = this.props.colFormItems
		? this.props.colFormItems
		: this.searchFormConfig
		? this.searchFormConfig.items
		: [];
	const tool = this.getExportSomething();
	return formItems.map((item) => {
		const options = dataType.isFunction(item.options) ? const_extendArguments(item.options, tool) : item.options;
		return {
			...item,
			render: const_extendArguments(item.render, tool),
			options,
		};
	});
}
//ZlistPanel 和 ZtreePanel 调用 const_searchFormNode.call(this)，给this.searchForm赋值
export function const_searchFormNode() {
	const { items, onSearch, onReset, noCollapse, defaultExpanded, insertTo, ...formOthers } = this.searchFormConfig
		? this.searchFormConfig
		: {};
	this.searchForm =
		this.colFormItems && this.colFormItems.length ? (
			<ZsearchForm
				{...formOthers}
				hidden={!this.state.expandedSearch}
				colFormItems={this.colFormItems}
				onSearch={this.methods.onSearch}
				onReset={this.methods.onReset}
				noCollapse={true}
			/>
		) : null;
	let insertEl = null;
	const insertor = dataType.isFunction(insertTo) ? insertTo(this.getExportSomething()) : insertTo;
	if (dataType.isBoolean(insertor) && insertor && this.props.pageId) {
		insertEl = document.getElementById(this.props.pageId);
	} else if (dataType.isElement(insertor)) {
		insertEl = insertor;
	} else if (insertor && dataType.isString(insertor)) {
		insertEl = document.getElementById(insertor);
	}
	if (this.searchForm && insertEl) {
		this.searchForm = ReactDOM.createPortal(this.searchForm, insertEl);
	} else {
		this.searchForm = this.searchForm ? (
			<div
				className={`${searchCssClass["z-embedded-form"]} ${
					this.state.expandedSearch ? "" : "z-padding-top-0-important"
				}`}
			>
				{this.searchForm}
			</div>
		) : null;
	}
}
