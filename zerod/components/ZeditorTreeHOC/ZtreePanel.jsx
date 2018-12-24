import React from "react";
import "../../zero-icon/iconfont.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
	const_getPanleHeader,
	const_getListConfig,
	const_getInsertLocation,
	const_getMainTool,
	const_getMethods,
	const_getPanelDefaultFormItems,
	const_extendPanelFormConfig,
	const_searchFormNode,
} from "../constant";
import { Tree, Modal } from "antd";
const TreeNode = Tree.TreeNode;
import cssClass from "./style.scss";
import TreeTitle from "./TreeTitle";
import ZerodMainContext from "../ZerodMainContext";
import {
	unshiftItemToTree,
	deepCopy,
	removeItemFromTree,
	pushItemToTree,
	replaceItemFromTree,
	insertBeforeItemFromTree,
	insertAfterItemFromTree,
	itemsFromTree,
	dataType,
} from "../zTool";
// import { Zlayout } from "../Zlayout";
let defaultConfig = const_getListConfig("list", "ZtreePanel");
class ZtreePanel extends React.Component {
	static propTypes = {
		treeDataKeys: PropTypes.object,
		panelBeforeRender: PropTypes.func,
		panelAfterRender: PropTypes.func,
		exportSomething: PropTypes.func,
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
		moreBtnMap: PropTypes.arrayOf(PropTypes.object), //更多操作按钮的map数据
		onMoreBtnClick: PropTypes.func, // 更多按钮点击事件
		addBtnPermCode: PropTypes.string, // 新建按钮权限控制代码
		detailBtnPermCode: PropTypes.string, // 详情按钮权限控制代码
		updateBtnPermCod: PropTypes.string, // 修改按钮权限控制代码
		deleteBtnPermCod: PropTypes.string, // 删除按钮权限控制代码
		showDetailBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示详情按钮
		showAddChildBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示新增子节点按钮
		showUpdateBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示修改按钮
		showDeleteBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示删除按钮
		showAddBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示新建按钮
		detailBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用详情按钮
		addChildBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用新增子节点按钮
		updateBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用修改按钮
		deleteBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用删除按钮
		treeApiInterface: PropTypes.func, // 获取tree的后台接口函数，其必须内部返回Promise
		childApiInterface: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 异步加载子节点的后台接口函数，其必须内部返回Promise
		deleteApiInterface: PropTypes.func, // 删除按钮的后台接口函数，其必须内部返回Promise
		addPageRender: PropTypes.func, // 新建页面渲染模板
		addChildPageRender: PropTypes.func, // 新增子节点页面渲染模板
		updatePageRender: PropTypes.func, // 修改页面渲染模板
		detailPageRender: PropTypes.func, // 详情页面渲染模板
		treeProps: PropTypes.object,
		responseKeys: PropTypes.object, //后台接口请求响应体的key处理
	};
	static defaultProps = defaultConfig.tree;
	treeDataKeys = Object.assign({ name: "name", id: "id", children: "children" }, this.props.treeDataKeys);

	methods = {
		...const_getMethods.call(this),
		// 获取列表数据
		loadTreeData: (moreQuery) => {
			let querys = this.searchQuery ? this.searchQuery : {};
			if (dataType.isObject(moreQuery)) {
				querys = Object.assign({}, querys, moreQuery);
			}
			this.methods.showLoading(true);
			this.props.treeApiInterface &&
				this.props
					.treeApiInterface(querys, this.getExportSomething())
					.then((re) => {
						this.setState({
							treeData: re.data,
						});
					})
					.catch((re) => {
						this.methods.notice.error(re && re.msg ? re.msg : "获取数据失败");
					})
					.finally((re) => {
						this.methods.showLoading(false);
					});
		},
		loadChildData: (treeNode) => {
			const childrenKey = this.treeDataKeys.children;

			return new Promise((resolve) => {
				if (treeNode.props.children) {
					resolve();
					return;
				}
				this.ayncChild &&
					this.props
						.childApiInterface(deepCopy(treeNode.props.dataRef), this.getExportSomething())
						.then((re) => {
							treeNode.props.dataRef[childrenKey] = re.data;
							this.setState({
								treeData: [...this.state.treeData],
							});
						})
						.finally(() => {
							resolve();
						});
			});
		},
		// 查询
		onSearch: (query) => {
			this.searchQuery = query;
			this.methods.loadTreeData();
		},
		// 重置
		onReset: () => {
			this.methods.onSearch();
		},
		commonActionArr: ({ tree, record, data, action }) => {
			const _tree = Array.isArray(tree) ? tree : this.state.treeData.slice(0);
			const newTree = action({ tree: _tree, sourceItem: record, item: data, keyObj: this.treeDataKeys });
			if (newTree && !Array.isArray(tree)) {
				this.setState({
					treeData: newTree,
				});
			}
			return newTree;
		},
		//移除tree中的一条数据
		removeOneData: (record, tree) => {
			return this.methods.commonActionArr({
				tree,
				record,
				action: removeItemFromTree,
			});
		},
		//在record的children中添加一条数据
		addOneChildData: (record, data, tree) => {
			return this.methods.commonActionArr({
				tree,
				record,
				data,
				action: pushItemToTree,
			});
		},
		//在tree中替换一条数据
		replaceOneData: (record, data, tree) => {
			return this.methods.commonActionArr({
				tree,
				record,
				data,
				action: replaceItemFromTree,
			});
		},
		getDropType: (info) => {
			const dropKey = info.node.props.eventKey; //拖入的源key
			const dragKey = info.dragNode.props.eventKey; //拖动对象的key
			const dropPos = info.node.props.pos.split("-");
			const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
			let dropData = null;
			let dragData = null;
			const dropItem = { [this.treeDataKeys.id]: dropKey };
			const dragItem = { [this.treeDataKeys.id]: dragKey };
			let newTree = this.state.treeData;
			itemsFromTree({
				tree: newTree,
				sourceItem: dropItem,
				keyObj: this.treeDataKeys,
				action: ({ tree, currentItem, index, keyObj }) => {
					dropData = currentItem;
				},
			});
			itemsFromTree({
				tree: newTree,
				sourceItem: dragItem,
				keyObj: this.treeDataKeys,
				action: ({ tree, currentItem, index, keyObj }) => {
					dragData = currentItem;
				},
			});
			if (!dragData || !dropData) return;
			if (!info.dropToGap) {
				return {
					type: "inLast",
					msg: `确认将 [${dragData[this.treeDataKeys.name]}] 放入到 [${
						dropData[this.treeDataKeys.name]
					}] 里面最后一个吗？`,
					dropData,
					dragData,
				};
			} else if ((info.node.props.children || []).length > 0 && info.node.props.expanded && dropPosition === 1) {
				return {
					type: "inFirst",
					msg: `确认将 [${dragData[this.treeDataKeys.name]}] 放入到 [${
						dropData[this.treeDataKeys.name]
					}] 里面最前一个吗？`,
					dropData,
					dragData,
				};
			} else if (dropPosition === -1) {
				return {
					type: "insertBefore",
					msg: `确认将 [${dragData[this.treeDataKeys.name]}] 移动到 [${
						dropData[this.treeDataKeys.name]
					}] 的前面吗？`,
					dropData,
					dragData,
				};
			} else {
				return {
					type: "insertAfter",
					msg: `确认将[${dragData[this.treeDataKeys.name]}]移动到[${
						dropData[this.treeDataKeys.name]
					}]的后面吗？`,
					dropData,
					dragData,
				};
			}
		},
		dropDone: () => {
			let newTree = [...this.state.treeData];
			const { type, dropData, dragData } = this.methods.droped;
			if (!type) return;
			newTree = removeItemFromTree({
				tree: newTree,
				sourceItem: dragData,
				keyObj: this.treeDataKeys,
			});
			newTree = this.methods.dropAction[type]({
				tree: newTree,
				sourceItem: dropData,
				item: dragData,
				keyObj: this.treeDataKeys,
			});
			this.setState({
				treeData: newTree,
			});
		},
		droped: {},
		dropAction: {
			inLast: pushItemToTree,
			inFirst: unshiftItemToTree,
			insertBefore: insertBeforeItemFromTree,
			insertAfter: insertAfterItemFromTree,
		},
		onDrop: (info) => {
			let { onDrop } = this.props.treeProps || {};
			if (typeof onDrop == "function") {
				const hasDrop = this.methods.getDropType(info);
				if (hasDrop) {
					this.methods.droped = hasDrop;
					Modal.confirm({
						title: this.methods.droped.msg,
						content: "",
						okText: "确定",
						okType: "primary",
						cancelText: "取消",
						onOk: () => {
							return onDrop(
								info,
								deepCopy(this.methods.droped),
								this.methods.dropDone,
								this.getExportSomething(),
							);
						},
					});
				}
			}
		},
		// 删除按钮触发
		onDelete: (record) => {
			const text = record[this.treeDataKeys.name];
			Modal.confirm({
				title: `确认删除 ${text ? `[${text}]` : ""} 这条数据吗`,
				content: "将永久删除",
				okText: "删除",
				okType: "danger",
				cancelText: "取消",
				onOk: () => {
					return new Promise((resolve, rejects) => {
						this.props
							.deleteApiInterface(record, this.getExportSomething())
							.then((re) => {
								this.methods.notice.success("删除成功");
								this.methods.removeOneData(record);
								resolve();
							})
							.catch((re) => {
								this.methods.notice.error(re && re.msg ? re.msg : "删除失败");
								rejects();
							});
					});
				},
			});
		},
		onAdd: () => {
			const content = this.props.addPageRender(this.getExportSomething());
			this.methods.openModal(content);
		},
		onAddChild: (record) => {
			const content = this.props.addChildPageRender(record, this.getExportSomething());
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
		openSearch: () => {
			this.setState({
				expandedSearch: !this.state.expandedSearch,
			});
		},
		//外部可以通过这个函数获取当前列表中的数据，
		currentTreeData: () => {
			return this.state.treeData;
		},
		setDataState: (data) => {
			this.setState({
				treeData: data,
			});
		},
	};

	getExportSomething() {
		return {
			...const_getMainTool.call(this),
			getSearchQuery: () => deepCopy(this.searchQuery),
			methods: this.methods,
			$router: {
				history: this.props.history,
				location: this.props.location,
			},
		};
	}
	searchFormConfig = const_extendPanelFormConfig.call(this);
	colFormItems = const_getPanelDefaultFormItems.call(this);
	state = {
		treeData: [],
		expandedSearch: this.searchFormConfig && this.searchFormConfig.defaultExpanded,
	};
	searchQuery = null;
	ayncChild = typeof this.props.childApiInterface === "function";
	getTreeNode(tree) {
		return tree.map((data, index) => {
			const childrenKey = this.treeDataKeys.children;
			const idKey = this.treeDataKeys.id;
			const nameKey = this.treeDataKeys.name;

			const cilds = Array.isArray(data[childrenKey]) ? data[childrenKey] : [];
			const { title, key, dataRef, ...otherData } = data;
			return (
				<TreeNode
					title={
						<TreeTitle
							name={data[nameKey]}
							record={data}
							index={index}
							moreBtnType={this.props.moreBtnType}
							moreBtnMap={this.props.moreBtnMap}
							onMoreBtnClick={this.props.onMoreBtnClick}
							onDetailClick={this.methods.onDetail}
							onAddChildClick={this.methods.onAddChild}
							onUpdateClick={this.methods.onUpdate}
							onDeleteClick={this.methods.onDelete}
							showDetailBtn={this.props.showDetailBtn}
							showAddChildBtn={this.props.showAddChildBtn}
							showUpdateBtn={this.props.showUpdateBtn}
							showDeleteBtn={this.props.showDeleteBtn}
							detailBtnDisabled={this.props.detailBtnDisabled}
							addChildBtnDisabled={this.props.addChildBtnDisabled}
							updateBtnDisabled={this.props.updateBtnDisabled}
							deleteBtnDisabled={this.props.deleteBtnDisabled}
						/>
					}
					key={data[idKey]}
					dataRef={data}
					{...otherData}
				>
					{cilds.length ? this.getTreeNode(cilds) : null}
				</TreeNode>
			);
		});
	}
	componentDidMount() {
		typeof this.props.exportSomething == "function" && this.props.exportSomething(this.getExportSomething());
		this.insertLocation = const_getInsertLocation(this.hocWrapperEl);
		this.methods.onSearch();
	}
	render() {
		const_searchFormNode.call(this);
		const { showLine, loadData, onDrop, ...treeOthers } = this.props.treeProps || {};
		return (
			<section
				ref={(el) => {
					this.hocWrapperEl = el;
				}}
			>
				{this.props.panelBeforeRender && this.props.panelBeforeRender(this.getExportSomething())}
				<div className="z-panel">
					{this.getPanleHeader()}
					<div>
						{this.searchForm}
						<div className={cssClass["z-editor-tree"]}>
							{this.state.treeData.length ? (
								<Tree
									showLine
									onDrop={this.methods.onDrop}
									loadData={this.ayncChild ? this.methods.loadChildData : undefined}
									{...treeOthers}
									autoExpandParent={false}
								>
									{this.getTreeNode(this.state.treeData)}
								</Tree>
							) : (
								<div className="z-text-center">暂无数据</div>
							)}
						</div>
						{this.props.moreContentRender && this.props.moreContentRender(this.getExportSomething())}
					</div>
				</div>
				{this.props.panelAfterRender && this.props.panelAfterRender(this.getExportSomething())}
			</section>
		);
	}
}
ZtreePanel.prototype.getPanleHeader = const_getPanleHeader;
export default ZerodMainContext.setConsumer(withRouter(ZtreePanel));
