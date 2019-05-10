import React from "react";import ZpureComponent from "../ZpureComponent";
import { Table } from "antd";
import { Zlayout } from "../Zlayout";
import cssClass from "./style.scss";
// 表格类型
export default function tableTemplate() {
	const tool = this.getExportSomething();
	const {
		columns,
		dataSource,
		pagination,
		onChange,
		expandedRowKeys,
		onExpandedRowsChange,
		...others
	} = this.props.tableParams;

	const _expandedRowKeys =
		typeof expandedRowKeys == "function"
			? expandedRowKeys(tool)
			: Array.isArray(expandedRowKeys)
			? expandedRowKeys
			: this.state.expandedRowKeys;
	const _onExpandedRowsChange =
		typeof onExpandedRowsChange == "function"
			? (expandedRows) => {
					onExpandedRowsChange(expandedRows, tool);
			  }
			: (expandedRows) => {
					this.setState({
						expandedRowKeys: expandedRows,
					});
			  };
	const _others={};
	Object.keys(others).forEach(key=>{
		if(typeof others[key] =="function"){
			_others[key]=(...rest)=>{
				return others[key](...rest,tool);
			}
		}else{
			_others[key]=others[key];
		}
	})
	return (
		<Zlayout.Template>
			{this.props.panelBeforeRender && this.props.panelBeforeRender(tool)}
			<div className="z-panel">
				{this.getPanleHeader()}
				<div>
					{this.searchForm}
					<div className={cssClass["z-list-table"]}>
						<Table
							expandRowByClick={true}
							columns={this.state.tableColumns}
							rowKey="id"
							dataSource={this.state.listData}
							pagination={this.showPagination && !this.isInfinite ? this.paginationOpt : false}
							onChange={this.methods.onTableChange}
							expandedRowKeys={_expandedRowKeys}
							onExpandedRowsChange={_onExpandedRowsChange}
							{..._others}
						/>
					</div>
					{this.moreBtn}
				</div>
			</div>
			{this.props.panelAfterRender && this.props.panelAfterRender(tool)}
		</Zlayout.Template>
	);
}
