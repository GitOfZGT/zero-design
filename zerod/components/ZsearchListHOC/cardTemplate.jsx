import React from "react";
import { animateTimout } from "../constant";
import { Button, Card, Row, Col, Pagination } from "antd";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// my component
import { Zlayout } from "../Zlayout";
import { ZsorterBtn } from "../ZsorterBtn";

import cssClass from "./style.scss";

// 卡片类型
export default function cardTemplate() {
	const actionCol = this.tableColumns.slice(-1)[0];

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
				{this.props.showAddBtn ? (
					<Col span={8} className={`${cssClass["z-list-card"]} z-margin-bottom-15`}>
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
								? actionCol.render(item[actionCol.dataIndex], item)
								: [];
						return (
							<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="fadeIn-to-down">
								<Col span={8} className={`${cssClass["z-list-card"]} z-margin-bottom-15`}>
									<Card
										cover={this.props.cardCoverRender && this.props.cardCoverRender(item)}
										actions={cardActions}
										className={cssClass["z-card"]}
									>
										{this.tableColumns.map((col, index) => {
											const contentRender = () => {
												return typeof col.render === "function"
													? col.render(
															item[col.dataIndex],
															item,
															i,
															this.getExportSomething(),
													  )
													: item[col.dataIndex];
											};
											if (index === 0) {
												return (
													<h1
														className={cssClass["z-list-card-title"]}
														key={`${col.dataIndex}_${index}`}
													>
														{contentRender()}
													</h1>
												);
											} else if (index === 1) {
												return (
													<h2
														className={cssClass["z-list-card-sub"]}
														key={`${col.dataIndex}_${index}`}
													>
														{contentRender()}
													</h2>
												);
											} else if (index !== this.tableColumns.length - 1) {
												return (
													<div
														className={cssClass["z-list-card-content"]}
														key={`${col.dataIndex}_${index}`}
													>
														{contentRender()}
													</div>
												);
											}
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
			{this.props.showPagination && !this.isInfinite ? (
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
