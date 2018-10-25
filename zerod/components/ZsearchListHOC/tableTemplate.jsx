import React from "react";
import { Table } from "antd";
import { Zlayout } from "../Zlayout";
import cssClass from "./style.scss";
// 表格类型
export default function tableTemplate() {
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
			? expandedRowKeys()
			: Array.isArray(expandedRowKeys)
				? expandedRowKeys
				: [];
	const _onExpandedRowsChange =
		typeof onExpandedRowsChange == "function"
			? (expandedRows) => {
					onExpandedRowsChange(expandedRows, this.getExportSomething());
			  }
			: () => {};
	return (
		<Zlayout.Template>
			{this.props.panelBeforeRender && this.props.panelBeforeRender(this.getExportSomething())}
			<div className="z-panel">
				{this.getPanleHeader()}
				<div className="z-panel-body">
					{this.searchForm}
					<div className={cssClass["z-list-table"]}>
						<Table
							expandRowByClick={true}
							columns={this.tableColumns}
							rowKey="id"
							dataSource={this.state.listData}
							pagination={this.showPagination && !this.isInfinite ? this.paginationOpt : false}
							onChange={this.methods.onTableChange}
							expandedRowKeys={_expandedRowKeys}
							onExpandedRowsChange={_onExpandedRowsChange}
							{...others}
						/>
					</div>
					{this.moreBtn}
				</div>
			</div>
			{this.props.panelAfterRender && this.props.panelAfterRender(this.getExportSomething())}
		</Zlayout.Template>
	);
}
