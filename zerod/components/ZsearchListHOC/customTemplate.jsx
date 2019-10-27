import React from "react";
import { Pagination } from "antd";
import { ZsorterBtn } from "../ZsorterBtn";
import { deepCopy } from "../zTool";
// 卡片类型
export default function customTemplate() {
	const tool = this.getExportSomething();
	const contentColumns = deepCopy(this.state.tableColumns);
	const actionCol = contentColumns[contentColumns.length - 1];
	if (actionCol && actionCol.key == "actionBtns") {
		contentColumns.pop();
	}
	let sorters = [];
	contentColumns.forEach((col, index) => {
		if (col.sorter) {
			sorters.push(
				<ZsorterBtn
					key={col.dataIndex}
					defaultSortOrder={col.defaultSortOrder}
					onClick={(order, e) => {
						this.methods.onTableChange(
							null,
							null,
							order
								? {
										column: col,
										field: col.dataIndex,
										order,
										columnKey: col.key ? col.key : col.dataIndex,
								  }
								: {},
						);
					}}
				>
					{col.title}
				</ZsorterBtn>,
			);
		}
	});
	const { customTemplateRender } = this.props;
	return (
		<>
			{this.props.panelBeforeRender && this.props.panelBeforeRender(tool)}
			<div className="z-panel z-margin-bottom-15 is-radius-top">
				{this.getPanleHeader()}
				{this.searchForm}
			</div>
			{sorters.length ? <div className="z-margin-bottom-15">{sorters}</div> : null}
			{typeof customTemplateRender === "function" &&
				customTemplateRender({ columns: this.state.tableColumns, listData: this.state.listData, tool })}
			{this.showPagination && !this.isInfinite ? (
				<div className="z-panel is-radius-bottom">
					<div className="z-panel-body z-clear-fix">
						<Pagination
							className="z-float-right"
							{...this.paginationOpt}
							onChange={this.methods.paginationOnChange}
							onShowSizeChange={this.methods.paginationOnSizeChange}
						/>
					</div>
				</div>
			) : null}
			{this.moreBtn}
			{this.props.panelAfterRender && this.props.panelAfterRender(tool)}
		</>
	);
}
