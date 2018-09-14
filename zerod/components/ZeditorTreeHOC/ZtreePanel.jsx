import React from "react";
import PropTypes from "prop-types";
import { const_showLoading, const_getModalType ,const_getPanleHeader} from "../constant";
import { Button, Tree, Modal, message } from "antd";
const TreeNode = Tree.TreeNode;
import { ZsearchForm } from "../ZsearchForm";
import cssClass from "./style.scss";
import TreeTitle from "./TreeTitle";
import ZerodMainContext from "../ZerodMainContext";
import { dataTypeTest, deepCopy } from "../zTool";
import { Zlayout } from "../Zlayout";
import { Object } from "core-js";

class ZtreePanel extends React.Component {
	static propTypes = {
		treeDataKeys: PropTypes.object,
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
		moreBtnMap: PropTypes.arrayOf(PropTypes.object), //更多操作按钮的map数据
		onMoreBtnClick: PropTypes.func, // 更多按钮点击事件
		addBtnPermCode: PropTypes.string, // 新建按钮权限控制代码
		detailBtnPermCode: PropTypes.string, // 详情按钮权限控制代码
		updateBtnPermCod: PropTypes.string, // 修改按钮权限控制代码
		deleteBtnPermCod: PropTypes.string, // 删除按钮权限控制代码
		showDetailBtn: PropTypes.bool, // 是否显示详情按钮
		showUpdateBtn: PropTypes.bool, // 是否显示修改按钮
		showDeleteBtn: PropTypes.bool, // 是否显示删除按钮
		showAddBtn: PropTypes.bool, // 是否显示新建按钮
		treeApiInterface: PropTypes.func, // 获取tree的后台接口函数，其必须内部返回Promise
		childApiInterface: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 异步加载子节点的后台接口函数，其必须内部返回Promise
		deleteApiInterface: PropTypes.func, // 删除按钮的后台接口函数，其必须内部返回Promise
		addPageRender: PropTypes.func, // 新建页面渲染模板
		updatePageRender: PropTypes.func, // 修改页面渲染模板
		detailPageRender: PropTypes.func, // 详情页面渲染模板
		insertLocation: PropTypes.string, //  mainRoute | mainModal | appModal
	};
	static defaultProps = {
		treeDataKeys: {},
		childApiInterface: false,
	};
	treeDataKeys = Object.assign({ name: "name", id: "id", children: "children" }, this.props.treeDataKeys);
	state = {
		treeData: [],
		colFormItems: [],
	};
	searchQuery = null;
	ayncChild = typeof this.props.childApiInterface === "function";
	methods = {
		showLoading: (show) => {
			const_showLoading(this.props.insertLocation, this.props)(show);
		},
		// 获取列表数据
		loadTreeData: (moreQuery) => {
			let querys = this.searchQuery ? this.searchQuery : {};
			if (dataTypeTest(moreQuery) === "object") {
				querys = Object.assign({}, querys, moreQuery);
			}
			this.methods.showLoading(true);
			this.props.treeApiInterface &&
				this.props
					.treeApiInterface(querys)
					.then((re) => {
						this.setState({
							treeData: re.data,
						});
					})
					.catch((re) => {
						message.error(re && re.msg ? re.msg : "获取数据失败");
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
						.childApiInterface(deepCopy(treeNode.props.dataRef))
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
		removeOneData: (record, arr) => {
			let deleted = false;
			for (let index = 0; index < arr.length; index++) {
				const element = arr[index];
				if (element[this.treeDataKeys.id] === record[this.treeDataKeys.id]) {
					arr.splice(index, 1);
					break;
				} else if (Array.isArray(element[this.treeDataKeys.children])) {
					deleted = this.methods.removeOneData(record, element[this.treeDataKeys.children]);
				}
				if (deleted) break;
			}
			return deleted;
		},
		// 删除按钮触发
		onDelete: (record) => {
			Modal.confirm({
				title: `确认删除[${record[this.treeDataKeys.name]}]这条数据吗`,
				content: "将永久删除",
				okText: "删除",
				okType: "danger",
				cancelText: "取消",
				onOk: () => {
					return new Promise((resolve, rejects) => {
						this.props
							.deleteApiInterface(record)
							.then((re) => {
								message.success("删除成功");
								this.methods.removeOneData(record, this.state.treeData);
								this.setState({
									treeData: [...this.state.treeData],
								});
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
			content && this.props.showRightModal(true, const_getModalType(this.props.insertLocation), content);
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
		openSearch: () => {
			this.setState({
				colFormItems: this.state.colFormItems.length ? [] : this.props.colFormItems,
			});
		},
		//外部可以通过这个函数获取当前列表中的数据，
		currentTreeData: () => {
			return this.state.treeData;
		},
		setDataState:(data)=>{
			this.setState({
				treeData:data,
			})
		}
	};

	getExportSomething() {
		return {
			showRightModal: this.props.showRightModal,
			getSearchQuery: () => deepCopy(this.searchQuery),
			methods: this.methods,
		};
	}
	getTreeNode(tree) {
		return tree.map((node) => {
			const childrenKey = this.treeDataKeys.children;
			const idKey = this.treeDataKeys.id;
			const nameKey = this.treeDataKeys.name;
			const cilds = Array.isArray(node[childrenKey]) ? node[childrenKey] : [];
			return (
				<TreeNode
					title={
						<TreeTitle
							name={node[nameKey]}
							record={node}
							moreBtnMap={this.props.moreBtnMap}
							onMoreBtnClick={this.props.onMoreBtnClick}
							onDetailClick={this.methods.onDetail}
							onUpdateClick={this.methods.onUpdate}
							onDeleteClick={this.methods.onDelete}
						/>
					}
					key={node[idKey]}
					dataRef={node}
				>
					{cilds.length ? this.getTreeNode(cilds) : null}
				</TreeNode>
			);
		});
	}
	componentDidMount() {
		this.methods.onSearch();
	}
	render() {
		this.searchForm =
			this.state.colFormItems && this.state.colFormItems.length ? (
				<ZsearchForm
					colFormItems={this.state.colFormItems}
					onSearch={this.methods.onSearch}
					onReset={this.methods.onReset}
					noCollapse={true}
				/>
			) : null;
		return (
			<Zlayout.Template>
				{this.props.panelBeforeRender && this.props.panelBeforeRender(this.getExportSomething())}
				<div className="z-panel">
					{this.getPanleHeader()}
					<div className="z-panel-body">
						{this.searchForm}
						<div className={cssClass["z-editor-tree"]}>
							{this.state.treeData.length ? (
								<Tree
									showLine
									loadData={this.ayncChild ? this.methods.loadChildData : undefined}
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
			</Zlayout.Template>
		);
	}
}
ZtreePanel.prototype.getPanleHeader=const_getPanleHeader;
export default ZerodMainContext.setConsumer(ZtreePanel);