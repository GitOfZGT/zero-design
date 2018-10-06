import React from "react";
import { Table } from "antd";
import { Zlayout } from "../Zlayout";
import cssClass from "./style.scss";
// 表格类型
export default function tableTemplate() {
	const { columns, dataSource, pagination, onChange, ...others } = this.props.tableParams;

	return (
		<Zlayout.Template>
			{this.props.panelBeforeRender && this.props.panelBeforeRender(this.getExportSomething())}
			<div className="z-panel">
				{this.getPanleHeader()}
				<div className="z-panel-body">
					{this.searchForm}
					<div className={cssClass["z-list-table"]}>
						<Table
							columns={this.tableColumns}
							rowKey="id"
							dataSource={this.state.listData}
							pagination={this.showPagination && !this.isInfinite ? this.paginationOpt : false}
							onChange={this.methods.onTableChange}
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
