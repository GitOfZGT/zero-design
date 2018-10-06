import React from "react";
import { animateTimout } from "../constant";
import { Button, Card, Row, Col, Pagination } from "antd";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// my component
import { Zlayout } from "../Zlayout";
import { ZsorterBtn } from "../ZsorterBtn";
import { deepCopy } from "../zTool";

import cssClass from "./style.scss";

// 卡片类型
export default function cardTemplate() {
	const _cardSpan = this.props.cardSpan;
	const _span = typeof _cardSpan == "number" ? { md: _cardSpan } : _cardSpan;
	const contentColumns = deepCopy(this.tableColumns);
	const actionCol = contentColumns[contentColumns.length - 1];
	if (actionCol && actionCol.key == "actionBtns") {
		contentColumns.pop();
	}
	let sorters = [];
	this.tableColumns.forEach((col, index) => {
		if (col.sorter) {
			sorters.push(
				<ZsorterBtn
					key={col.dataIndex}
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
	const { showAddBtn } = this.props;
	const _showAddBtn = typeof showAddBtn == "function" ? showAddBtn() : showAddBtn;
	return (
		<Zlayout.Template>
			{this.props.panelBeforeRender && this.props.panelBeforeRender(this.getExportSomething())}
			<div className="z-panel z-margin-bottom-15 is-radius-top">
				{this.getPanleHeader()}
				{this.searchForm ? (
					<div className="z-panel-body z-padding-bottom-0-important">{this.searchForm}</div>
				) : null}
			</div>
			{sorters.length ? <div className="z-margin-bottom-15">{sorters}</div> : null}
			<Row type="flex" className={cssClass["z-card-row"]}>
				{_showAddBtn ? (
					<Col {..._span} className={`${cssClass["z-list-card"]} z-margin-bottom-15`}>
						<Button
							type="dashed"
							icon="plus"
							className={cssClass["z-list-block-btn"]}
							onClick={this.methods.onAdd}
							style={{ height: "100%", fontSize: "20px", minHeight: "120px" }}
						>
							新增
						</Button>
					</Col>
				) : null}
				<TransitionGroup component={null} enter={true} exit={false} appear={true}>
					{this.state.listData.map((item, i) => {
						const cardActions =
							actionCol && actionCol.key == "actionBtns"
								? actionCol.render(
										item[actionCol.dataIndex],
										item,
										i,
										this.getExportSomething(),
										this.state.isListCard,
								  )
								: [];
						const getColContent = (col) => {
                            if(!col)return null;
							return typeof col.render === "function"
								? col.render(item[col.dataIndex], item, i, this.getExportSomething())
								: item[col.dataIndex];
						};
						let _title = getColContent(contentColumns[0]);
						return (
							<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="fadeIn-to-down">
								<Col {..._span} className={`${cssClass["z-list-card"]} z-margin-bottom-15`}>
									<Card
										cover={
										 this.props.cardCoverRender &&
											this.props.cardCoverRender(item, i, this.getExportSomething())
										}
										actions={cardActions}
										className={cssClass["z-card"]}
									>
										<h1
											className={cssClass["z-list-card-title"]}
											onClick={(e) => {
												this.methods.onDetail(item);
											}}
										>
											{_title}
										</h1>
										{contentColumns.slice(1).map((col, index) => {
											return (
												<div
													className={`${cssClass["z-list-card-content"]} z-text-gray`}
													key={`${i}_${index}`}
												>
													{getColContent(col)}
												</div>
											);
										})}
									</Card>
								</Col>
							</CSSTransition>
						);
					})}
				</TransitionGroup>
				{!this.state.listData.length ? (
					<p className="z-text-gray z-text-center z-flex-1 z-flex-items-center">
						<span>无相关数据</span>
					</p>
				) : null}
			</Row>
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
			{this.props.panelAfterRender && this.props.panelAfterRender(this.getExportSomething())}
		</Zlayout.Template>
	);
}
