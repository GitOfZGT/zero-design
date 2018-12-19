import React from "react";
import PropTypes from "prop-types";
import { Button, Dropdown, Menu, Icon } from "antd";
import cssClass from "./style.scss";
import { ZroundingButton } from "../ZroundingButton";
import { removeClass, addClass } from "../zTool";
class TreeTitle extends React.Component {
	static propTypes = {
		tool: PropTypes.object,
		name: PropTypes.string,
		record: PropTypes.any,
		index: PropTypes.number,
		moreBtnType: PropTypes.string,
		moreBtnMap: PropTypes.arrayOf(PropTypes.object),
		onMoreBtnClick: PropTypes.func,
		onDetailClick: PropTypes.func,
		onAddChildClick: PropTypes.func,
		onUpdateClick: PropTypes.func,
		onDeleteClick: PropTypes.func,
		showDetailBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示详情按钮
		showAddChildBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示新增子节点按钮
		showUpdateBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示修改按钮
		showDeleteBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示删除按钮

		detailBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用详情按钮
		addChildBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用新增子节点按钮
		updateBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用修改按钮
		deleteBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用删除按钮
	};

	hasMoreMenu = this.props.moreBtnMap && this.props.moreBtnMap.length;

	//更多操作按钮
	moreMenu = (record, index) => {
		const tool = this.props.tool;
		const onClick = this.methods.handleMenuClick(record);
		const items = [];
		this.hasMoreMenu &&
			this.props.moreBtnMap.forEach((item) => {
				const { show, disbaled, name, ...others } = item;
				const _show =
					typeof show == "function" ? show(record, index, item, tool) : show === undefined ? true : show;
				const _disbaled =
					typeof disbaled == "function"
						? disbaled(record, index, item, tool)
						: disbaled === undefined
						? false
						: disbaled;
				if (this.props.moreBtnType == "rounding") {
					items.push({
						...item,
						show: _show,
						disabled: _disbaled,
						onClick: onClick,
					});
				} else if (_show)
					items.push(
						<Menu.Item disabled={_disbaled} {...others}>
							{name}
						</Menu.Item>,
					);
			});
		return this.props.moreBtnType == "rounding" ? (
			items
		) : items.length ? (
			<Menu onClick={onClick}>{items}</Menu>
		) : (
			<span />
		);
	};
	methods = {
		handleMenuClick: (record) => {
			return (item) => {
				this.props.onMoreBtnClick && this.props.onMoreBtnClick(item, record, this.props.tool);
			};
		},

		detailBtnClick: (e) => {
			this.props.onDetailClick && this.props.onDetailClick(this.props.record);
			e.stopPropagation();
		},
		addChildBtnClick: (e) => {
			this.props.onAddChildClick && this.props.onAddChildClick(this.props.record);
			e.stopPropagation();
		},
		updateBtnClick: (e) => {
			this.props.onUpdateClick && this.props.onUpdateClick(this.props.record);
			e.stopPropagation();
		},
		deleteBtnClick: (e) => {
			this.props.onDeleteClick && this.props.onDeleteClick(this.props.record);
			e.stopPropagation();
		},
	};
	getBtn = (type, btnName, click, show, disabled) => {
		return show ? (
			<Button disabled={disabled} type={type} size="small" onClick={click}>
				{btnName}
			</Button>
		) : null;
	};
	onVisibleChange = (show) => {
		if (this.moreIconEl) {
			show ? removeClass(this.moreIconEl, "is-down") : addClass(this.moreIconEl, "is-down");
		}
	};
	render() {
		const tool = this.props.tool;
		const {
			showDetailBtn,
			showUpdateBtn,
			showAddChildBtn,
			showDeleteBtn,
			detailBtnDisabled,
			updateBtnDisabled,
			addChildBtnDisabled,
			deleteBtnDisabled,
			record,
			index,
		} = this.props;
		const _showDetailBtn = typeof showDetailBtn == "function" ? showDetailBtn(record, index, tool) : showDetailBtn;
		const _showUpdateBtn = typeof showUpdateBtn == "function" ? showUpdateBtn(record, index, tool) : showUpdateBtn;
		const _showAddChildBtn =
			typeof showUpdateBtn == "function" ? showAddChildBtn(record, index, tool) : showAddChildBtn;
		const _showDeleteBtn = typeof showDeleteBtn == "function" ? showDeleteBtn(record, index, tool) : showDeleteBtn;
		const _detailBtnDisabled =
			typeof detailBtnDisabled == "function" ? detailBtnDisabled(record, index, tool) : detailBtnDisabled;
		const _updateBtnDisabled =
			typeof updateBtnDisabled == "function" ? updateBtnDisabled(record, index, tool) : updateBtnDisabled;
		const _addChildBtnDisabled =
			typeof addChildBtnDisabled == "function" ? addChildBtnDisabled(record, index, tool) : addChildBtnDisabled;
		const _deleteBtnDisabled =
			typeof deleteBtnDisabled == "function" ? deleteBtnDisabled(record, index, tool) : deleteBtnDisabled;
		const moreBtn = (
			<Button size="small">
				更多
				<i
					className="zero-icon zerod-up z-open-btn is-down"
					ref={(el) => {
						this.moreIconEl = el;
					}}
				/>
			</Button>
		);

		return (
			<span className="z-flex-space-between">
				<span>{this.props.name}</span>
				<span className={cssClass["z-tree-line"]} />
				<span className={cssClass["z-tree-btns"]}>
					{this.getBtn("default", "详情", this.methods.detailBtnClick, _showDetailBtn, _detailBtnDisabled)}
					{this.getBtn(
						"primary",
						"新增子节点",
						this.methods.addChildBtnClick,
						_showAddChildBtn,
						_addChildBtnDisabled,
					)}
					{this.getBtn("primary", "修改", this.methods.updateBtnClick, _showUpdateBtn, _updateBtnDisabled)}
					{this.getBtn("danger", "删除", this.methods.deleteBtnClick, _showDeleteBtn, _deleteBtnDisabled)}
					{this.hasMoreMenu ? (
						this.props.moreBtnType == "rounding" ? (
							<ZroundingButton items={this.moreMenu(record, index)} onVisibleChange={this.onVisibleChange}> {moreBtn}</ZroundingButton>
						) : (
							<Dropdown
								key="more"
								overlay={this.moreMenu(record, index)}
								trigger={["click"]}
								placement="bottomRight"
								onVisibleChange={this.onVisibleChange}
							>
								{moreBtn}
							</Dropdown>
						)
					) : null}
				</span>
			</span>
		);
	}
}
export default TreeTitle;
