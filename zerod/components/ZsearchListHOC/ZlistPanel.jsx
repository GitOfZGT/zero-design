import React from "react";
import PropTypes from "prop-types";
import { const_showLoading, const_getModalType, const_getPanleHeader } from "../constant";
import { Button, Icon, Divider, Dropdown, Menu, Modal, message, Tooltip } from "antd";
import { ZsearchForm } from "../ZsearchForm";
import cssClass from "./style.scss";
// 上下文
import ZerodMainContext from "../ZerodMainContext";
import { dataTypeTest, deepCopy } from "../zTool";

import tableTemplate from "./tableTemplate";
import cardTemplate from "./cardTemplate";

class ZlistPanel extends React.Component {
	static propTypes = {
		listType: PropTypes.string, // table | card
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
		colFormItems: PropTypes.arrayOf(PropTypes.object), // 搜索表单列map数据数据
		tableColumns: PropTypes.arrayOf(PropTypes.object), // 表格列map数据数据，同antd的表格 columns
		moreBtnMap: PropTypes.arrayOf(PropTypes.object), //更多操作按钮的map数据
		onMoreBtnClick: PropTypes.func, // 更多按钮点击事件
		actionColumnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//表格操作列的宽度
		actionDataIndex: PropTypes.any, // 操作列的key
		actionRender: PropTypes.func, // 操作列的render,可以自定义操作列的按钮
		addBtnPermCode: PropTypes.string, // 新建按钮权限控制代码
		detailBtnPermCode: PropTypes.string, // 详情按钮权限控制代码
		updateBtnPermCod: PropTypes.string, // 修改按钮权限控制代码
		deleteBtnPermCod: PropTypes.string, // 删除按钮权限控制代码
		showDetailBtn: PropTypes.bool, // 是否显示详情按钮
		showUpdateBtn: PropTypes.bool, // 是否显示修改按钮
		showDeleteBtn: PropTypes.bool, // 是否显示删除按钮
		showAddBtn: PropTypes.bool, // 是否显示新建按钮
		listApiInterface: PropTypes.func, // 获取列表数据的后台接口函数，其必须内部返回Promise
		deleteApiInterface: PropTypes.func, // 删除按钮的后台接口函数，其必须内部返回Promise
		showPagination: PropTypes.bool, // 是否显示分页
		getPageSize: PropTypes.func, // 每页显示的条数
		addPageRender: PropTypes.func, // 新建页面渲染模板
		updatePageRender: PropTypes.func, // 修改页面渲染模板
		detailPageRender: PropTypes.func, // 详情页面渲染模板
		exportSomething: PropTypes.func, // 用于提供一些东西出去
		paginationType: PropTypes.string, // 分页类型， paging | infinite
		tableParams: PropTypes.object, // 对应antd 的Table的参数
		insertLocation: PropTypes.string, //  mainRoute | mainModal | appModal
	};
	static defaultProps = {
		tableParams: {},
		getPageSize: function(listType, isListCard) {
			return isListCard ? 8 : 10;
		},
		actionColumnWidth:360
	};

	handleMenuClick = (record) => {
		return (item) => {
			this.props.onMoreBtnClick && this.props.onMoreBtnClick(item, record, this.getExportSomething());
		};
	};
	hasMoreMenu = this.props.moreBtnMap && this.props.moreBtnMap.length;
	//更多操作按钮
	moreMenu = (record) => {
		const onClick = this.handleMenuClick(record);
		return this.hasMoreMenu ? (
			<Menu onClick={onClick}>
				{this.props.moreBtnMap.map((item) => {
					return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
				})}
			</Menu>
		) : (
			<span />
		);
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
		showLoading: (show) => {
			const_showLoading(this.props.insertLocation, this.props)(show);
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
				)
				.then((re) => {
					const data = re.data;
					let list = [];
					if (Array.isArray(data)) {
						list = data;
						this.page.totalCount = list.length;
						this.page.totalPage = 1;
					} else {
						if (data.list === undefined) {
							return Promise.reject({ msg: "接口返回的列表数据缺少list属性" });
						} else if (Array.isArray(data.list)) {
							list = data.list;
							this.page.totalCount = data.totalCount;
							this.page.totalPage = data.totalPage;
						}
					}
					this.setState({
						listData: merge ? [...this.state.listData, ...list] : list,
						noMore: this.isInfinite && !list.length,
					});
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
		//移除一条数据
		removeOneData: (row) => {
			let key = this.props.tableParams.rowKey;
			key = key ? key : "id";
			const list = this.methods.currentListData();
			const index = list.findIndex((item) => {
				return item[key] === row[key];
			});
			if (index >= 0) {
				list.splice(index, 1);
				this.setState({
					listData: list,
				});
			}
		},
		// 删除按钮触发
		onDelete: (text, row) => {
			Modal.confirm({
				title: `确认删除[${text}]这条数据吗`,
				content: "将永久删除",
				okText: "删除",
				okType: "danger",
				cancelText: "取消",
				onOk: () => {
					return new Promise((resolve, rejects) => {
						this.props
							.deleteApiInterface(row)
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
				this.props.showRightModal(true, const_getModalType(this.props.insertLocation), content);
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
		setDataState: (data) => {
			this.setState({
				listData: data,
			});
		},
	};
	actionBtns() {
		return this.props.showDetailBtn || this.props.showUpdateBtn || this.props.showDeleteBtn || this.hasMoreMenu
			? [
					{
						title: "操作",
						dataIndex: this.props.actionDataIndex,
						key: "actionBtns",
						width: this.props.actionColumnWidth,
						render: (text, record,index) => {
							if (typeof this.props.actionRender === "function") {
								return this.props.actionRender(
									text,
									record,
									index,
									this.getExportSomething(),
									this.state.isListCard,
								);
							}
							const btnSize = "small";
							const detailBtnName = "详情";
							const detailBtn = (
								// this.state.isListCard ? (
								// 	<div
								// 		className="z-list-card-btns"
								// 		onClick={(e) => {
								// 			this.methods.onDetail(record);
								// 		}}
								// 	>
								// 		{detailBtnName}
								// 	</div>
								// ) : (
								<span key="detail">
									<Button
										size={btnSize}
										onClick={(e) => {
											this.methods.onDetail(record);
										}}
									>
										{detailBtnName}
									</Button>
									{!this.state.isListCard ? <Divider type="vertical" /> : null}
								</span>
							);
							// );
							const updateBtnName = "修改";
							const updateBtn = (
								// this.state.isListCard ? (
								// 	<div
								// 		className="z-list-card-btns"
								// 		onClick={(e) => {
								// 			this.methods.onUpdate(record);
								// 		}}
								// 	>
								// 		{updateBtnName}
								// 	</div>
								// ) : (
								<span key="update">
									<Button
										size={btnSize}
										type="primary"
										onClick={(e) => {
											this.methods.onUpdate(record);
										}}
									>
										{updateBtnName}
									</Button>
									{!this.state.isListCard ? <Divider type="vertical" /> : null}
								</span>
							);
							// );
							const deleteBtnName = "删除";
							const deleteBtn = (
								// this.state.isListCard ? (
								// 	<div
								// 		className="z-list-card-btns"
								// 		onClick={(e) => {
								// 			this.methods.onDelete(text, record);
								// 		}}
								// 	>
								// 		{deleteBtnName}
								// 	</div>
								// ) : (
								<span key="delete">
									<Button
										size={btnSize}
										type="danger"
										onClick={(e) => {
											this.methods.onDelete(text, record);
										}}
									>
										{deleteBtnName}
									</Button>
									{this.hasMoreMenu && !this.state.isListCard ? <Divider type="vertical" /> : null}
								</span>
							);
							// );
							const moreBtnName = "更多";
							const moreBtn = (
								<Dropdown
									key="more"
									overlay={this.moreMenu(record)}
									trigger={["click"]}
									placement="bottomRight"
								>
									{
										// 	this.state.isListCard ? (
										// 	<div className="z-list-card-btns">{moreBtnName}</div>
										// ) : (
										<Button size={btnSize}>
											{moreBtnName}
											<Icon type="down" />
										</Button>
										// )
									}
								</Dropdown>
							);
							const btns = [];
							this.props.showDetailBtn && btns.push(detailBtn);
							this.props.showUpdateBtn && btns.push(updateBtn);
							this.props.showDeleteBtn && btns.push(deleteBtn);
							this.hasMoreMenu && btns.push(moreBtn);

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
			getListData: this.methods.getListData,
			showRightModal: this.props.showRightModal,
			showLoading: this.methods.showLoading,
			getPage: () => deepCopy(this.page),
			getSearchQuery: () => deepCopy(this.searchQuery),
			methods: this.methods,
		};
	}
	componentDidMount() {
		this.methods.onSearch();
		this.props.exportSomething && this.props.exportSomething(this.getExportSomething());
	}
	render() {
		this.moreBtn =
			this.isInfinite && this.props.showPagination && this.state.listData.length ? (
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
		this.searchForm =
			this.state.colFormItems && this.state.colFormItems.length ? (
				<ZsearchForm
					colFormItems={this.state.colFormItems}
					onSearch={this.methods.onSearch}
					onReset={this.methods.onReset}
					noCollapse={true}
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
		return this.state.isListCard ? cardTemplate.call(this) : tableTemplate.call(this);
	}
}
ZlistPanel.prototype.getPanleHeader = const_getPanleHeader;
export default ZerodMainContext.setConsumer(ZlistPanel);
