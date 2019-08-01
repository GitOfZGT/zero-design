import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "swiper/dist/css/swiper.css";
import "../../zero-icon/iconfont.css";
import Swiper from "swiper/dist/js/swiper";
import moment from "moment";
import { Checkbox, Tooltip, DatePicker, Spin, Empty, Tag } from "antd";
import ZschedulingTable from "../ZschedulingTable";
import { dataType, deepCopy, removeClass ,isWhiteColor} from "../zTool";
import CellCheckList from "./CellCheckList";

const weekDayNums = {
	0: "周日",
	1: "周一",
	2: "周二",
	3: "周三",
	4: "周四",
	5: "周五",
	6: "周六",
};

class MonthSelect extends React.PureComponent {
	methods = {
		onChange: (dateMoment, dateString) => {
			this.setState({
				monthValue: dateMoment,
			});
			this.props.onMonthChange && this.props.onMonthChange(dateMoment, dateString);
		},
	};
	state = {
		monthValue: this.props.defaultMonth,
	};
	render() {
		const { defaultMonth, onGetPopupContainer } = this.props;
		return (
			<DatePicker.MonthPicker
				defaultValue={defaultMonth}
				onChange={this.methods.onChange}
				value={this.state.monthValue}
				getCalendarContainer={onGetPopupContainer}
				placeholder="选择月份"
				allowClear={false}
			/>
		);
	}
}
class ActionMsg extends React.PureComponent {
	methods = {
		showLoading: (show) => {
			this.setState({
				loading: show,
			});
		},
		starting: (show) => {
			this.setState({
				starting: show,
			});
		},
	};
	state = {
		loading: false,
		starting: false,
	};
	render() {
		const { style } = this.props;
		const { loading, starting } = this.state;
		return (
			<div className="z-data-null" style={style}>
				<Empty description={starting ? "初始化中..." : loading ? "加载中..." : "暂无数据"} />
			</div>
		);
	}
}
class Loading extends React.PureComponent {
	methods = {
		showLoading: (show) => {
			this.setState({
				loading: show,
			});
		},
	};
	state = {
		loading: false,
	};
	render() {
		const { loading } = this.state;
		return (
			<span className={"z-margin-left-15 z-margin-right-15"}>
				<Spin spinning={loading} size="small" />
				{loading ? <span className="z-margin-left-8">正在更新数据...</span> : null}
			</span>
		);
	}
}
class AllCheckBox extends React.PureComponent {
	methods = {
		onChange: (e) => {
			this.methods.check(e.target.checked, () => {
				this.props.onChange && this.props.onChange(e, this);
			});
		},
		check: (checked, callback) => {
			this.setState(
				{
					checked,
				},
				callback,
			);
		},
	};
	state = {
		checked: false,
	};
	render() {
		const { className, title } = this.props;
		return (
			<div className={`z-all-checked ${className ? className : ""}`}>
				<Tooltip placement="top" title={title} mouseLeaveDelay={0}>
					<Checkbox checked={this.state.checked} onChange={this.methods.onChange} />
				</Tooltip>
			</div>
		);
	}
}
class RowCheckBox extends React.PureComponent {
	methods = {
		onChange: (e) => {
			this.methods.check(e.target.checked, () => {
				this.props.onChange && this.props.onChange(e, this);
			});
		},
		check: (checked, callback) => {
			this.setState(
				{
					checked,
				},
				callback,
			);
		},
	};
	state = {
		checked: false,
	};
	render() {
		return <Checkbox checked={this.state.checked} onChange={this.methods.onChange} />;
	}
}
class ColCheckBox extends React.PureComponent {
	methods = {
		onChange: (e) => {
			this.methods.check(e.target.checked, () => {
				this.props.onChange && this.props.onChange(e, this);
			});
		},
		check: (checked, callback) => {
			this.setState(
				{
					checked,
				},
				callback,
			);
		},
	};
	state = {
		checked: false,
	};
	render() {
		const { className, title, weekDay } = this.props;
		return (
			<Checkbox checked={this.state.checked} onChange={this.methods.onChange}>
				<span className={className}>{title}</span>
				<span className={className}>{weekDayNums[weekDay]}</span>
			</Checkbox>
		);
	}
}
export class Zscheduling extends React.PureComponent {
	static propTypes = {
		dataSource: PropTypes.arrayOf(PropTypes.object), //行数据
		columns: PropTypes.arrayOf(PropTypes.object), //列数据
		defaultMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), //月份 格式可以： 2019-01  | 2019/01 | moment
		exportMethods: PropTypes.func,
		onMonthPickerChange: PropTypes.func, // 日期选框值改变的回调
		dateColCellRender: PropTypes.func, // 日期列单元格的 渲染函数
		// popoverTrigger: PropTypes.string, //popover 打开的方式  左键"click" | 右键"contextMenu"
		toolbarRender: PropTypes.func, // 工具栏 渲染函数，
		leftPopoverTitleRender: PropTypes.func, //checkBox列的 popover的title渲染函数，
		leftPopoverContentRender: PropTypes.func, //checkBox列的 popover的content渲染函数，
		rightPopoverTitleRender: PropTypes.func, //日期列的 popover的title渲染函数，
		rightPopoverContentRender: PropTypes.func, //日期列的 popover的content渲染函数，

		onLeftPopoverVisibleChange: PropTypes.func, ///checkBox列的 popover的打开/隐藏的回调，
		onRightPopoverVisibleChange: PropTypes.func, //日期列的 popover的打开/隐藏的回调，
		onCellSelected: PropTypes.func, //任何单元格选择/取消选择都会触发，
	};
	static defaultProps = {
		dataSource: [],
		columns: [],
		defaultMonth: moment(),
		popoverTrigger: "contextMenu",
	};
	methods = {
		//（父组件可调用）
		getElements: () => {
			const els = {};
			["schedulingEl", "maskEl"].forEach((key) => {
				els[key] = this[key];
			});
			return els;
		},
		//任何单元格选择/取消选择都会触发事件
		onCellSelected: (selected) => {
			this.props.onCellSelected && this.props.onCellSelected(this.methods.getSelectedCells(), selected);
		},
		//（父组件可调用）获取所有选中的单元格的数据，dime= 行维度row || 列维度col
		getSelectedCells: (dime = "col") => {
			if (dime == "col") {
				const selectedDataCol = {};
				this.dateColumns.forEach((col) => {
					this.state.dataList.forEach((row, index) => {
						if (row[col.key].ref && row[col.key].ref.current.state.selected) {
							if (!dataType.isArray(selectedDataCol[col.key])) {
								selectedDataCol[col.key] = [];
							}
							selectedDataCol[col.key].push(deepCopy(this.props.dataSource[index]));
						}
					});
				});
				Object.keys(selectedDataCol).forEach((key) => {
					if (!selectedDataCol[key].length) {
						delete selectedDataCol[key];
					}
				});
				return selectedDataCol;
			} else {
				const selectedDataRow = [];
				this.state.dataList.forEach((row, rowindex) => {
					const newRow = { ...row.record, selectedDates: [] };
					this.dateColumns.forEach((col, colindex) => {
						if (row[col.key].ref && row[col.key].ref.current.state.selected) {
							newRow.selectedDates.push({
								date: col.key,
							});
						}
					});
					if (newRow.selectedDates.length) {
						selectedDataRow.push(newRow);
					}
				});
				return selectedDataRow;
			}
		},
		//（父组件可调用）取消所有的选中
		cancelAllSelected: () => {
			this.methods.colAllCheckedChange({ target: { checked: false } });
			this.methods.rowAllCheckedChange({ target: { checked: false } });
			this.colAllCheckedRef.current.methods.check(false);
			this.rowAllCheckedRef.current.methods.check(false);
		},
		// setCheckColumns: () => {
		// 	this.setState({
		// 		checkColumns: [...this.state.checkColumns],
		// 	});
		// },
		// setColAllCheckedState: () => {
		// 	this.setState({
		// 		colAllChecked: this.dateColumns.every((item) => {
		// 			return item.disabled || item.checked;
		// 		}),
		// 	});
		// 	this.methods.setCheckColumns();
		// },
		// setRowAllCheckedState: () => {
		// 	this.setState({
		// 		rowAllChecked: this.state.dataList.every((item) => {
		// 			return item.checked;
		// 		}),
		// 	});
		// 	this.methods.setCheckColumns();
		// },
		// getDataListState: () => {
		// 	return deepCopy(this.state.dataList);
		// },
		// setDataListState: (newData, callback) => {
		// 	this.setState(
		// 		{
		// 			dataList: dataType.isArray(newData) ? newData : [...this.state.dataList],
		// 		},
		// 		callback,
		// 	);
		// },
		// getSwipreSlidesState: () => {
		// 	return deepCopy(this.state.swiperSlides);
		// },
		// setSwipreSlidesState: (newData, callback) => {
		// 	this.setState(
		// 		{
		// 			swiperSlides: dataType.isArray(newData)
		// 				? newData
		// 				: this.state.swiperSlides.map((item) => {
		// 						return { ...item, columns: [...item.columns] };
		// 				  }),
		// 		},
		// 		callback,
		// 	);
		// },
		//单元格点击触发
		onDateTableCellClick: (row, trindex, col, tdindex) => {
			if (col.disabled) return;
			const Cell = row[col.key].ref.current;
			const selected = !Cell.state.selected;
			Cell.methods.select(selected, () => {
				row.ref.current.methods.check(
					this.dateColumns.some((col) => {
						return row[col.key] && row[col.key].ref.current.state.selected;
					}),
				);
				col.ref.current.methods.check(
					this.state.dataList.some((row) => {
						return row[col.key] && row[col.key].ref.current.state.selected;
					}),
				);
				this.methods.onCellSelected(selected);
			});
		},
		//popover渲染在的父元素
		onGetPopupContainer: (triggerNode) => {
			return this.schedulingEl;
		},
		//当popover打开/关闭时，显示/隐藏一个遮罩
		onPopoverVisibleChange: (show) => {
			// console.log(this.maskEl, show);
			this.maskEl.style.display = show ? "block" : "none";
		},
		onLeftPopoverVisibleChange: (show, row, rowindex, col, colindex) => {
			this.methods.onPopoverVisibleChange(show);
			this.props.onLeftPopoverVisibleChange &&
				this.props.onLeftPopoverVisibleChange(show, row, rowindex, col, colindex);
		},
		onRightPopoverVisibleChange: (show, row, rowindex, col, colindex) => {
			this.methods.onPopoverVisibleChange(show);
			this.props.onRightPopoverVisibleChange &&
				this.props.onRightPopoverVisibleChange(show, row, rowindex, col, colindex);
		},

		//行勾选
		rowCheckChange: (e, RowCheckBox) => {
			const allP = [];
			this.dateColumns.forEach((col, colindex) => {
				if (col.ref) {
					const Cell = RowCheckBox.props.row[col.key].ref.current;
					allP.push(
						new Promise((rev, rej) => {
							Cell.methods.select(RowCheckBox.state.checked && col.ref.current.state.checked, () => {
								rev();
							});
						}),
					);
				}
			});
			if (allP.length) {
				Promise.all(allP).finally(() => {
					this.rowAllCheckedRef.current.methods.check(
						this.state.dataList.every((row) => {
							return !row.ref || (row.ref && row.ref.current.state.checked);
						}),
					);
					this.methods.onCellSelected(RowCheckBox.state.checked);
				});
			}
		},
		//列勾选
		colCheckChange: (e, ColCheckBox) => {
			const allP = [];
			this.state.dataList.forEach((row) => {
				if (row.ref) {
					const Cell = row[ColCheckBox.props.col.key].ref.current;
					allP.push(
						new Promise((rev, rej) => {
							Cell.methods.select(row.ref.current.state.checked && ColCheckBox.state.checked, () => {
								rev();
							});
						}),
					);
				}
			});
			if (allP.length) {
				Promise.all(allP).finally(() => {
					this.colAllCheckedRef.current.methods.check(
						this.dateColumns.every((col) => {
							return !col.ref || (col.ref && col.ref.current.state.checked);
						}),
					);
					this.methods.onCellSelected(ColCheckBox.state.checked);
				});
			}
		},
		//列全选
		colAllCheckedChange: (e, checkbox) => {
			const allP = [];
			this.state.swiperSlides.forEach((slide) => {
				slide.columns.forEach((col) => {
					if (col.ref) {
						const ColCheckBox = col.ref.current;
						ColCheckBox.methods.check(e.target.checked);
						this.state.dataList.forEach((row) => {
							if (row.ref) {
								const Cell = row[col.key].ref.current;
								allP.push(
									new Promise((rev, rej) => {
										Cell.methods.select(row.ref.current.state.checked && e.target.checked, () => {
											rev();
										});
									}),
								);
							}
						});
					}
				});
			});
			if (allP.length)
				Promise.all(allP).finally(() => {
					this.methods.onCellSelected(e.target.checked);
				});
		},
		//行全选
		rowAllCheckedChange: (e, checkbox) => {
			const allP = [];
			this.state.dataList.map((row) => {
				if (row.ref) {
					const RowCheckBox = row.ref.current;
					RowCheckBox.methods.check(e.target.checked);
					this.dateColumns.forEach((col) => {
						if (col.ref) {
							const Cell = row[col.key].ref.current;
							allP.push(
								new Promise((rev, rej) => {
									Cell.methods.select(e.target.checked && col.ref.current.state.checked, () => {
										rev();
									});
								}),
							);
						}
					});
				}
			});
			if (allP.length)
				Promise.all(allP).finally(() => {
					this.methods.onCellSelected(e.target.checked);
				});
		},
		//生成初始的列数据和swiper页数据
		getSwiperSlides: (value) => {
			let _month = moment(value);
			let year = _month.year(),
				month = _month.month() + 1;
			let day = 0;
			if (month == 2) {
				day = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
			} else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
				day = 31;
			} else {
				day = 30;
			}
			const columns = [];
			const rowData = {};
			const width = 100 / 7 + "%";
			for (let i = 1; i <= day; i++) {
				const key = `${year}-${(month < 10 ? "0" : "") + month}-${(i < 10 ? "0" : "") + i}`;
				const col_date = new Date(key);
				const weekDay = col_date.getDay();
				rowData[key] = {};
				columns.push({
					key,
					width,
					title: key,
					weekDay,
					ref: React.createRef(),
					className: weekDay == 6 || weekDay == 0 ? "z-weekend-color" : "",
					titleRender: (col, index) => {
						return (
							<ColCheckBox
								ref={col.ref}
								col={col}
								colindex={index}
								className={col.className}
								title={col.title}
								weekDay={col.weekDay}
								onChange={this.methods.colCheckChange}
							/>
						);
					},
					render: (row, trindex, col, tdindex) => {
						return this.props.dateColCellRender && this.props.dateColCellRender(row, trindex, col, tdindex);
					},
				});
			}
			if (day > 28) {
				let nextDate = 1;
				month++;
				for (let i = day + 1; i <= 35; i++) {
					const key = `${year}-${(month < 10 ? "0" : "") + month}-${(nextDate < 10 ? "0" : "") + nextDate}`;
					const col_date = new Date(key);
					const weekDay = col_date.getDay();
					rowData[key] = {};
					columns.push({
						key,
						width,
						title: key,
						disabled: true,
						className: "z-day-disabled-color",
						weekDay,
						titleRender: (col, i) => {
							return (
								<Checkbox disabled={col.disabled}>
									<span className={col.className}>{col.title}</span>
									<span className={col.className}>{weekDayNums[col.weekDay]}</span>
								</Checkbox>
							);
						},
						render: (row, trindex, col, tdindex) => {},
					});
					nextDate++;
				}
			}
			//日期列
			this.dateColumns = columns;
			const swiperSlides = [];
			const len = day > 28 ? 35 : 28;
			for (let i = 1; i <= len; i++) {
				if (i % 7 == 0) {
					swiperSlides.push({
						columns: columns.slice(swiperSlides.length * 7, (swiperSlides.length + 1) * 7),
					});
				}
			}
			//每一行数据的单元格对象
			this.rowData = rowData;
			// console.log(this.rowData)
			return swiperSlides;
		},
		//非日期列
		getCheckColumns: () => {
			return [
				{
					key: "checkbox-col",
					width: "60px",
					title: "checkbox-col",
					titleRender: (col, index) => {
						return (
							<div className="z-allcheck-box">
								<div className="z-cutting-line" ref={this.getElement("cutLineEl")} />
								<AllCheckBox
									ref={this.colAllCheckedRef}
									title="日期全选"
									className="is-col"
									onChange={this.methods.colAllCheckedChange}
								/>
								<AllCheckBox
									ref={this.rowAllCheckedRef}
									title="行全选"
									className="is-row"
									onChange={this.methods.rowAllCheckedChange}
								/>
							</div>
						);
					},
					render: (row, trindex, col, tdindex) => {
						const prop = { row, trindex, col, tdindex };
						return <RowCheckBox ref={row.ref} {...prop} onChange={this.methods.rowCheckChange} />;
					},
				},
				...this.props.columns,
			];
		},
		getNewDataSoure: () => {
			//处理行数据
			return this.props.dataSource.map((record) => {
				const celldatas = deepCopy(this.rowData);
				Object.keys(celldatas).forEach((key) => {
					celldatas[key] = { ...celldatas[key], ref: React.createRef() };
				});
				return {
					...celldatas,
					record,
					checked: false,
					ref: React.createRef(),
				};
			});
		},
		//年月改变触发
		monthPickerChange: (date, dateString) => {
			const returned = this.props.onMonthPickerChange && this.props.onMonthPickerChange(date, dateString);
			const updater = () => {
				this.setState(
					{
						swiperSlides: this.methods.getSwiperSlides(date),
						dataList: this.methods.getNewDataSoure(),
					},
					() => {
						this.methods.cancelAllSelected();

						this.swiper && this.swiper.slideTo(0, 800, false);
					},
				);
			};
			if (dataType.isPromise(returned)) {
				this.methods.showLoading(true);
				returned.finally(() => {
					updater();
					this.methods.showLoading(false);
				});
			} else {
				updater();
			}
		},
		//
		showLoading: (show) => {
			this.toolLoadingRef.current.methods.showLoading(show);
			this.actionMsgRef.current.methods.showLoading(show);
			this.methods.onPopoverVisibleChange(show);
		},
		//更新swiper大小
		updateSize: () => {
			const ps = this.cutLineEl.parentElement.getBoundingClientRect();
			this.cutLineEl.style.width = Math.sqrt(Math.pow(ps.width, 2) + Math.pow(ps.height, 2)) + "px";
			const lp = this.checkboxEl.getBoundingClientRect();
			this.contentEl.style.width = `calc(100% - ${lp.width}px)`;
			this.swiper && this.swiper.update();
		},
	};
	defaultMonth = this.props.month ? moment(this.props.month) : moment();
	defaultSwiperSlides = this.methods.getSwiperSlides(this.defaultMonth);
	defaultDataList = this.methods.getNewDataSoure();
	defaultCheckColumns = this.methods.getCheckColumns();
	state = {
		monthValue: this.defaultMonth,
		swiperSlides: this.defaultSwiperSlides,
		dataList: this.defaultDataList,
		checkColumns: this.defaultCheckColumns,
	};
	//列全选组件实例
	colAllCheckedRef = React.createRef();
	//行全选组件实例
	rowAllCheckedRef = React.createRef();
	//tool区域loading组件实例
	toolLoadingRef = React.createRef();
	//ActionMsg组件的实例
	actionMsgRef = React.createRef();
	//取dom元素
	getElement = (name) => {
		return (el) => (this[name] = el);
	};

	componentDidMount() {
		//将methods对象通过exportMethods导出去
		this.props.exportMethods && this.props.exportMethods(this.methods);
		this.methods.updateSize();
		removeClass(this.checkboxEl, "z-scheduling-hidden");
		removeClass(this.contentEl, "z-scheduling-hidden");
		this.swiper = new Swiper(this.swiperElement, {
			autoplay: false,
			direction: "horizontal",
			loop: false,
			shortSwipes: false,
			longSwipesRatio: 0.05,
			longSwipesMs: 100,
			grabCursor: false,
			speed: 1200,
			pagination: {
				el: this.swiperPaginationEl,
				clickable: true,
				// type : 'custom',
				// renderCustom:(swiper, current, total)=>{

				// }
			},
			// preventClicks:false,
			// freeMode:true,
			// freeModeMomentum:false,
			// freeModeMomentumRatio:2,
			// touchRatio:4,
			// effect:"cube",
		});
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.dataSource !== prevProps.dataSource) {
			this.setState(
				{
					dataList: this.methods.getNewDataSoure(),
				},
				() => {
					this.methods.cancelAllSelected();
					this.methods.updateSize();
					this.swiper && this.swiper.slideTo(0, 800, false);
				},
			);
		}
		if (this.props.columns !== prevProps.columns) {
			this.setState({
				checkColumns: this.methods.getCheckColumns(),
			});
		}
		if (
			this.state.swiperSlides !== prevState.shortSwipes &&
			this.state.swiperSlides.length !== prevState.swiperSlides.length
		) {
			this.methods.updateSize();
		}
	}
	componentWillUnmount() {
		this.swiper && this.swiper.destroy();
	}
	render() {
		const {
			leftPopoverTitleRender,
			leftPopoverContentRender,
			rightPopoverTitleRender,
			rightPopoverContentRender,
			popoverTrigger,
			toolbarRender,
		} = this.props;
		return (
			<section className="z-scheduling" ref={this.getElement("schedulingEl")}>
				<div className="z-scheduling-mask" ref={this.getElement("maskEl")} />
				<div className={`z-scheduling-tool`}>
					<section className="z-padding-left-15">
						<MonthSelect
							defaultMonth={this.defaultMonth}
							onGetPopupContainer={this.methods.onGetPopupContainer}
							onMonthChange={this.methods.monthPickerChange}
						/>
						{toolbarRender && toolbarRender()}
						<Loading ref={this.toolLoadingRef} />
					</section>

					<section>
						<span className="z-swiper-pagination" ref={this.getElement("swiperPaginationEl")} />
					</section>
				</div>
				<div className={`z-clear-fix z-scheduling-box`}>
					<div
						className={`z-scheduling-checkcolumn z-float-left z-scheduling-hidden`}
						ref={this.getElement("checkboxEl")}
					>
						<ZschedulingTable
							columns={this.state.checkColumns}
							dataSource={this.state.dataList}
							onGetPopupContainer={this.methods.onGetPopupContainer}
							onPopoverVisibleChange={this.methods.onLeftPopoverVisibleChange}
							popoverTitleRender={leftPopoverTitleRender}
							popoverContentRender={leftPopoverContentRender}
							popoverTrigger={popoverTrigger}
							className="is-border-right is-border-bottom"
						/>
					</div>

					<div
						className={`z-scheduling-content z-float-left z-scheduling-hidden`}
						ref={this.getElement("contentEl")}
					>
						<div className="swiper-container" ref={this.getElement("swiperElement")}>
							<div className="swiper-wrapper">
								{this.state.swiperSlides.map((slide, i) => {
									return (
										<div key={i} className="swiper-slide z-scheduling-swiper-slide">
											<ZschedulingTable
												dataSource={this.state.dataList}
												columns={slide.columns}
												onGetPopupContainer={this.methods.onGetPopupContainer}
												onPopoverVisibleChange={this.methods.onRightPopoverVisibleChange}
												popoverTitleRender={rightPopoverTitleRender}
												popoverContentRender={rightPopoverContentRender}
												popoverTrigger={popoverTrigger}
												onCellClick={this.methods.onDateTableCellClick}
												className="is-border-bottom"
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<ActionMsg ref={this.actionMsgRef} style={this.state.dataList.length ? { display: "none" } : {}} />
			</section>
		);
	}
}
export class CellTag extends React.PureComponent {
	static propTypes = {
		title: PropTypes.string,
		color: PropTypes.string,
		name: PropTypes.string,
	};
	render() {
		const { title, name, color } = this.props;
		return name ? (
			<Tooltip mouseLeaveDelay={0} title={title}>
				<div className="z-cell-tag">
					<Tag color={color} className={isWhiteColor(color)?"z-tag-white":""}>{name}</Tag>
				</div>
			</Tooltip>
		) : null;
	}
}
Zscheduling.CellTag = CellTag;
Zscheduling.CellCheckList = CellCheckList;
export default Zscheduling;
