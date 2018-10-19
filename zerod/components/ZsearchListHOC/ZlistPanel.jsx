import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
	const_showLoading,
	const_getModalType,
	const_getPanleHeader,
	const_getListConfig,
	const_getInsertLocation,
	const_getMainTool,
	const_insertLocations
} from "../constant";
import { Button, Icon, Divider, Dropdown, Menu, Modal, message, Tooltip } from "antd";
import { ZsearchForm } from "../ZsearchForm";
import cssClass from "./style.scss";
// 上下文
import ZerodMainContext from "../ZerodMainContext";
import ZerodRootContext from "../ZerodRootContext";
import { dataTypeTest, deepCopy } from "../zTool";

import tableTemplate from "./tableTemplate";
import cardTemplate from "./cardTemplate";
import simpleTemplate from "./simpleTemplate";
let defaultConfig = const_getListConfig("list", "ZlistPanel");
class ZlistPanel extends React.Component {
	static propTypes = {
		listType: PropTypes.string, // table | card
		cardSpan: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
		cardCoverRender: PropTypes.func, // listType=="card"时的一个前置render,
		panelBeforeRender: PropTypes.func,
		panelAfterRender: PropTypes.func,
		panelHeader: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			PropTypes.func,
			PropTypes.element,
			PropTypes.node,
		]), //面板title,可以自定义
		moreContentRender: PropTypes.func,
		searchForm: PropTypes.object,
		colFormItems: PropTypes.arrayOf(PropTypes.object), // 搜索表单列map数据数据
		tableColumns: PropTypes.arrayOf(PropTypes.object), // 表格列map数据数据，同antd的表格 columns
		moreBtnMap: PropTypes.arrayOf(PropTypes.object), //更多操作按钮的map数据
		onMoreBtnClick: PropTypes.func, // 更多按钮点击事件
		actionColumnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), //表格操作列的宽度
		actionDataIndex: PropTypes.any, // 操作列的key
		actionRender: PropTypes.func, // 操作列的render,可以自定义操作列的按钮
		addBtnPermCode: PropTypes.string, // 新建按钮权限控制代码
		detailBtnPermCode: PropTypes.string, // 详情按钮权限控制代码
		updateBtnPermCod: PropTypes.string, // 修改按钮权限控制代码
		deleteBtnPermCod: PropTypes.string, // 删除按钮权限控制代码
		showDetailBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示详情按钮
		showUpdateBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示修改按钮
		showDeleteBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示删除按钮
		showAddBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示新建按钮
		listApiInterface: PropTypes.func, // 获取列表数据的后台接口函数，其必须内部返回Promise
		deleteApiInterface: PropTypes.func, // 删除按钮的后台接口函数，其必须内部返回Promise
		showPagination: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示分页
		getPageSize: PropTypes.func, // 每页显示的条数
		addPageRender: PropTypes.func, // 新建页面渲染模板
		updatePageRender: PropTypes.func, // 修改页面渲染模板
		detailPageRender: PropTypes.func, // 详情页面渲染模板
		exportSomething: PropTypes.func, // 用于提供一些东西出去
		paginationType: PropTypes.string, // 分页类型， paging | infinite
		tableParams: PropTypes.object, // 对应antd 的Table的参数
		responseKeys: PropTypes.object, //后台接口请求响应体的key处理
	};
	static defaultProps = defaultConfig.list;

	hasMoreMenu = this.props.moreBtnMap && this.props.moreBtnMap.length;
	//更多操作按钮
	moreMenu = (record, index, otherItem) => {
		const onClick = this.methods.handleMenuClick(record);
		const items = otherItem ? [otherItem] : [];
		this.hasMoreMenu &&
			this.props.moreBtnMap.forEach((item) => {
				const { show, name, ...others } = item;
				const _show = typeof show == "function" ? show(record, index, item) : show === undefined ? true : show;
				if (_show) items.push(<Menu.Item {...others}>{name}</Menu.Item>);
			});
		return items.length ? <Menu onClick={onClick}>{items}</Menu> : <span />;
	};
	state = {
		listData: [],
		noMore: false,
		isListCard: this.props.listType === "card",
		colFormItems: [],
	};
	isInfinite = this.props.paginationType === "infinite";
	getPageSize = () => {
		return this.props.getPageSize(this.props.listType, this.state.isListCard);
	};
	page = {
		pageNumber: 1,
		pageSize: this.getPageSize(),
		totalCount: 0,
		totalPage: 1,
	};
	searchQuery = null;
	sorter = {};
	methods = {
		handleMenuClick: (record) => {
			return (item) => {
				if (item.key === "_delete") {
					this.methods.onDelete(item.item.props.text, record);
				} else {
					this.props.onMoreBtnClick && this.props.onMoreBtnClick(item, record, this.getExportSomething());
				}
			};
		},
		showLoading: (show) => {
			const_showLoading(this.insertLocation, this.props)(show);
		},
		// 获取列表数据
		getListData: (merge, moreQuery) => {
			let querys = this.searchQuery ? this.searchQuery : {};
			if (dataTypeTest(moreQuery) === "object") {
				this.page.pageNumber = moreQuery.pageNumber ? moreQuery.pageNumber : this.page.pageNumber;
				this.page.pageSize = moreQuery.pageSize ? moreQuery.pageSize : this.page.pageSize;
				querys = Object.assign({}, querys, moreQuery);
			}
			this.methods.showLoading(true);
			this.props
				.listApiInterface(
					Object.assign(
						{
							currPage: this.page.pageNumber,
							pageSize: this.page.pageSize,
							sortFieldName: this.sorter.field,
							sortType: this.sorter.order === "descend" ? "DESC" : "ASC",
						},
						querys,
					),
					this.sorter,
					this.getExportSomething()
				)
				.then((re) => {
					const data = re.data;
					const dataKeys = this.props.responseKeys.listType;
					let list = [];
					if (Array.isArray(data)) {
						list = data;
						this.page.totalCount = list.length;
						this.page.totalPage = 1;
					} else {
						const listData = data[dataKeys["list"]];
						if (listData === undefined) {
							return Promise.reject({ msg: "接口返回的列表数据缺少列表数据" });
						} else if (Array.isArray(listData)) {
							list = listData;
							this.page.totalCount = data[dataKeys["totalCount"]];
							this.page.totalPage = data[dataKeys["totalPage"]];
						}
					}
					this.methods.setDataState(list, merge);
				})
				.catch((re) => {
					message.error(re && re.msg ? re.msg : "获取数据失败");
				})
				.finally((re) => {
					this.methods.showLoading(false);
				});
		},
		//表格分页、排序等改变时触发
		onTableChange: (pagination, filters, sorter) => {
			this.sorter = sorter;
			if (pagination && pagination.pageSize) {
				this.page.pageNumber = pagination.current;
				this.page.pageSize = pagination.pageSize;
			}
			this.methods.getListData();
			this.props.tableParams &&
				this.props.tableParams.onChange &&
				this.props.tableParams.onChange(pagination, filters, sorter, this.getExportSomething());
		},
		// 查询
		onSearch: (query) => {
			this.searchQuery = query;
			this.page.pageNumber = 1;
			this.methods.getListData();
		},
		// 重置
		onReset: () => {
			this.methods.onSearch();
		},
		// 页码改变触发
		paginationOnChange: (page, pageSize) => {
			this.page.pageNumber = page;
			this.methods.getListData();
		},
		// 页数改变触发
		paginationOnSizeChange: (current, size) => {
			this.page.pageSize = size;
			this.methods.getListData();
		},
		//递归获取列表中tableParams.rowKey对应的值等于value的那行数据，
		findData: (value, list, other) => {
			const { isRemove, row } = typeof other == "object" ? other : {};
			let key = this.props.tableParams.rowKey;
			key = key ? key : "id";
			list = list ? list : this.methods.currentListData();
			let newData = null;
			let hasRemove = false;
			for (let i = 0; i < list.length; i++) {
				let data = list[i];
				if (isRemove && data[key] === row[key]) {
					list.splice(i, 1);
					hasRemove = true;
					break;
				} else if (data[key] === value) {
					newData = data;
				} else if (data.children && data.children.length > 0) {
					const returnValue = this.methods.findData(value, data.children, { isRemove, row });
					typeof returnValue === "boolean" ? (hasRemove = returnValue) : (newData = returnValue);
					if (data.children.length === 0) {
						data.children = null;
					}
				}

				if (newData) {
					break;
				}
			}
			return hasRemove ? hasRemove : newData;
		},
		addChildrenData: (childs, value) => {
			let list = this.methods.currentListData();
			let data = this.methods.findData(value, list);
			if (data) {
				data.children = childs;
				this.methods.setDataState(list);
			}
		},
		//移除一条数据
		removeOneData: (row) => {
			// let key = this.props.tableParams.rowKey;
			// key = key ? key : "id";
			const list = this.methods.currentListData();
			const hasRemove = this.methods.findData(null, list, { isRemove: true, row });
			if (typeof hasRemove === "boolean" && hasRemove) {
				this.setState({
					listData: list,
				});
			}
			// const index = list.findIndex((item) => {
			// 	return item[key] === row[key];
			// });
			// if (index >= 0) {
			// 	list.splice(index, 1);
			// 	this.setState({
			// 		listData: list,
			// 	});
			// }
		},
		// 删除按钮触发
		onDelete: (text, row) => {
			Modal.confirm({
				title: `确认删除 [${text}] 这条数据吗`,
				content: "将永久删除",
				okText: "删除",
				okType: "danger",
				cancelText: "取消",
				onOk: () => {
					return new Promise((resolve, rejects) => {
						this.props
							.deleteApiInterface(row,this.getExportSomething())
							.then((re) => {
								message.success("删除成功");
								this.methods.removeOneData(row);
								resolve();
							})
							.catch((re) => {
								message.error(re && re.msg ? re.msg : "删除失败");
								rejects();
							});
					});
				},
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
		onAdd: () => {
			const content = this.props.addPageRender(this.getExportSomething());
			this.methods.openModal(content);
		},
		onUpdate: (record) => {
			const content = this.props.updatePageRender(record, this.getExportSomething());
			this.methods.openModal(content);
		},
		onDetail: (record) => {
			const content = this.props.detailPageRender(record, this.getExportSomething());
			this.methods.openModal(content);
		},
		infiniteLoader: () => {
			this.page.pageNumber++;
			this.methods.getListData(true);
		},
		openSearch: () => {
			this.setState({
				colFormItems: this.state.colFormItems.length ? [] : this.props.colFormItems,
			});
		},
		//外部可以通过这个函数获取当前列表中的数据，
		currentListData: () => {
			return deepCopy(this.state.listData);
		},
		setDataState: (data, merge) => {
			const noMore = this.isInfinite && !data.length;
			if (noMore && this.page.pageNumber > 1) {
				this.page.pageNumber--;
			}
			this.setState({
				listData: merge ? [...this.state.listData, ...data] : data,
				noMore,
			});
		},
	};
	getDiffBtn(type, btnName, onClick) {
		switch (this.props.listType) {
			case "table":
			case "card":
				return (
					<Button size="small" type={type} onClick={onClick}>
						{btnName}
					</Button>
				);
			case "simple":
				return (
					<a
						className={`z-text-underline-hover z-text-blue ${cssClass["z-simple-link"]}`}
						href="javascript:void(0)"
						onClick={onClick}
					>
						{btnName}
					</a>
				);
		}
	}
	actionBtns() {
		const { showDetailBtn, showUpdateBtn, showDeleteBtn } = this.props;
		return showDetailBtn || showUpdateBtn || showDeleteBtn || this.hasMoreMenu
			? [
					{
						title: "操作",
						dataIndex: this.props.actionDataIndex,
						key: "actionBtns",
						width: this.props.actionColumnWidth,
						render: (text, record, index) => {
							if (typeof this.props.actionRender === "function") {
								return this.props.actionRender(
									text,
									record,
									index,
									this.getExportSomething(),
									this.props.listType,
								);
							}
							const btnSize = "small";
							const detailBtnName = "详情";
							const detailBtn = (
								<span key="detail">
									{this.getDiffBtn("default", detailBtnName, (e) => {
										e.stopPropagation();
										this.methods.onDetail(record);
									})}
									{!this.state.isListCard ? <Divider type="vertical" /> : null}
								</span>
							);
							const updateBtnName = "修改";
							const updateBtn = (
								<span key="update">
									{this.getDiffBtn("primary", updateBtnName, (e) => {
										e.stopPropagation();
										this.methods.onUpdate(record);
									})}
									{!this.state.isListCard ? <Divider type="vertical" /> : null}
								</span>
							);
							const deleteBtnName = "删除";
							const deleteBtn = (
								<span key="delete">
									{this.getDiffBtn("danger", deleteBtnName, (e) => {
										e.stopPropagation();
										this.methods.onDelete(text, record);
									})}
									{this.hasMoreMenu && !this.state.isListCard ? <Divider type="vertical" /> : null}
								</span>
							);

							const btns = [];
							const _showDetailBtn =
								typeof showDetailBtn == "function" ? showDetailBtn(record, index) : showDetailBtn;
							const _showUpdateBtn =
								typeof showUpdateBtn == "function" ? showUpdateBtn(record, index) : showUpdateBtn;
							const _showDeleteBtn =
								typeof showDeleteBtn == "function" ? showDeleteBtn(record, index) : showDeleteBtn;
							_showDetailBtn && btns.push(detailBtn);
							_showUpdateBtn && btns.push(updateBtn);
							_showDeleteBtn && btns.push(deleteBtn);
							// const _otherItem =
							// 	_showDeleteBtn && this.props.listType === "simple" ? (
							// 		<Menu.Item key="_delete" text={text}>
							// 			{deleteBtnName}
							// 		</Menu.Item>
							// 	) : null;
							const moreBtnName = (
								<span>
									<span>更多</span>
									<Icon type="down" />
								</span>
							);
							const moreBtn = (
								<Dropdown
									key="more"
									overlay={this.moreMenu(record, index)}
									trigger={["click"]}
									placement="bottomRight"
								>
									{this.getDiffBtn("default", moreBtnName)}
								</Dropdown>
							);
							if (this.hasMoreMenu) {
								btns.push(moreBtn);
							}

							return this.state.isListCard
								? btns
								: btns.map((btn) => {
										return btn;
								  });
						},
					},
			  ]
			: [];
	}
	tableColumns = [...this.props.tableColumns, ...this.actionBtns()].map((col) => {
		const colRender = col.render;
		if (typeof colRender === "function") {
			col.render = (text, record, index) => {
				return colRender(text, record, index, this.getExportSomething());
			};
		}
		return col;
	});
	getExportSomething() {
		return {
			...const_getMainTool.call(this),
			getListData: this.methods.getListData,//同 methods.getListData,这为了版本兼容
			showLoading: this.methods.showLoading,//
			getPage: () => deepCopy(this.page),
			getSearchQuery: () => deepCopy(this.searchQuery),
			methods: this.methods,
			$router: {
				history: this.props.history,
				location: this.props.location,
			},
		};
	}

	componentDidMount() {
		const_getInsertLocation.call(this);
		this.methods.onSearch();
		this.props.exportSomething && this.props.exportSomething(this.getExportSomething());
	}
	render() {
		this.showPagination =
			typeof this.props.showPagination === "function"
				? this.props.showPagination(this.getExportSomething())
				: this.props.showPagination;
		this.moreBtn =
			this.isInfinite && this.showPagination && this.state.listData.length ? (
				<div>
					<Button
						type="dashed"
						className={cssClass["z-list-block-btn"]}
						disabled={this.state.noMore}
						onClick={this.methods.infiniteLoader}
					>
						{this.state.noMore ? "没有更多数据" : "下一页"}
					</Button>
					{this.props.moreContentRender && this.props.moreContentRender(this.getExportSomething())}
				</div>
			) : (
				this.props.moreContentRender && this.props.moreContentRender(this.getExportSomething())
			);
		const { items, onSearch, onReset, noCollapse, ...formOthers } = this.props.searchForm
			? this.props.searchForm
			: {};
		this.searchForm =
			this.state.colFormItems && this.state.colFormItems.length ? (
				<ZsearchForm
					colFormItems={this.state.colFormItems}
					onSearch={this.methods.onSearch}
					onReset={this.methods.onReset}
					noCollapse={true}
					{...formOthers}
				/>
			) : null;

		this.paginationOpt = {
			total: this.page.totalCount,
			pageSize: this.page.pageSize,
			current: this.page.pageNumber,
			showTotal: (total, range) => `共 ${total} 条`,
			showSizeChanger: !this.state.isListCard,
			showQuickJumper: true,
			// onChange: this.methods.paginationOnChange,
			// onShowSizeChange: this.methods.paginationOnSizeChange,
		};
		let content = "";
		switch (this.props.listType) {
			case "table":
				content = tableTemplate.call(this);
				break;
			case "card":
				content = cardTemplate.call(this);
				break;
			case "simple":
				content = simpleTemplate.call(this);
				break;
		}
		return (
			<section
				ref={(el) => {
					this.hocWrapperEl = el;
				}}
			>
				{content}
			</section>
		);
	}
}
ZlistPanel.prototype.getPanleHeader = const_getPanleHeader;
export default ZerodRootContext.setConsumer(ZerodMainContext.setConsumer(withRouter(ZlistPanel)));
