import React from "react";
import { animateTimout } from "../constant";
import { Row, Col, Pagination } from "antd";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// my component
import { Zlayout } from "../Zlayout";
import { ZsorterBtn } from "../ZsorterBtn";

import cssClass from "./style.scss";
import { deepCopy } from "zerod/components/zTool";

export default function simpleTemplate() {
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
			<div className="z-panel z-margin-bottom-15">
				<div className="z-panel-body">
					<Row type="flex" className={cssClass["z-simple-row"]}>
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
								if (!item.hsl) {
									const ramder_number = Math.floor(Math.random() * 360);
									const cicle_bg = `hsl(${ramder_number},70%,65%)`;
									item.hsl = cicle_bg;
								}
								const getColContent = (col) => {
                                    if(!col)return null;
									return typeof col.render === "function"
										? col.render(item[col.dataIndex], item, i, this.getExportSomething())
										: item[col.dataIndex];
								};
								let _title = contentColumns[0];
								let _ic = "";
								if (_title) {
									_title = getColContent(_title);
									_ic = _title.substr(0, 1);
								}
								return (
									<CSSTransition
										key={i}
										timeout={animateTimout.flipInTime}
										classNames="fadeIn-to-down"
									>
										<Col
											{..._span}
											className={`${cssClass["z-list-simple-col"]} z-margin-bottom-50`}
										>
											<div className={`${cssClass["z-list-simple"]}`}>
												<div className={`${cssClass["z-list-simple-left"]}`}>
													{typeof this.props.cardCoverRender == "function" ? (
														this.props.cardCoverRender(
															item,
															i,
															this.getExportSomething(),
															_ic,
															item.hsl,
														)
													) : (
														<span
															className={`${cssClass["z-list-simple-icon"]}`}
															style={{ backgroundColor: item.hsl }}
														>
															{_ic}
														</span>
													)}
												</div>
												<div className={`${cssClass["z-list-simple-right"]}`}>
													<h1
														className={`${
															cssClass["z-list-card-title"]
														} z-margin-bottom-18-important`}
														onClick={(e) => {
															this.methods.onDetail(item);
														}}
													>
														{_title}
													</h1>
													{contentColumns.slice(1).map((col, index) => {
														return (
															<div
																className={`z-text-gray
                                                                z-text-ellipsis z-margin-bottom-10 z-font-size-14`}
																key={`${i}_${index}`}
															>
																{getColContent(col)}
															</div>
														);
													})}
													<div className="z-margin-top-30">{cardActions}</div>
												</div>
											</div>
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
				</div>
			</div>
			{this.showPagination && !this.isInfinite ? (
				<div className="z-clear-fix">
					<Pagination
						className="z-float-right"
						{...this.paginationOpt}
						onChange={this.methods.paginationOnChange}
						onShowSizeChange={this.methods.paginationOnSizeChange}
					/>
				</div>
			) : null}
			{this.moreBtn}
			{this.props.panelAfterRender && this.props.panelAfterRender(this.getExportSomething())}
		</Zlayout.Template>
	);
}
