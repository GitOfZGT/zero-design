import React from "react";
import PropTypes from "prop-types";
import { Button, Dropdown, Menu, Icon } from "antd";
import cssClass from "./style.scss";
class TreeTitle extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		record: PropTypes.any,
		index: PropTypes.number,
		moreBtnMap: PropTypes.arrayOf(PropTypes.object),
		onMoreBtnClick: PropTypes.func,
		onDetailClick: PropTypes.func,
		onUpdateClick: PropTypes.func,
		onDeleteClick: PropTypes.func,
		showDetailBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示详情按钮
		showUpdateBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示修改按钮
		showDeleteBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否显示删除按钮

		detailBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用详情按钮
		updateBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用修改按钮
		deleteBtnDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]), // 是否禁用删除按钮
	};

	hasMoreMenu = this.props.moreBtnMap && this.props.moreBtnMap.length;

	//更多操作按钮
	moreMenu = (record, index) => {
		const onClick = this.methods.handleMenuClick(record);
		const items = [];
		this.hasMoreMenu &&
			this.props.moreBtnMap.forEach((item) => {
				const { show, name, ...others } = item;
				const _show = typeof show == "function" ? show(record, index, item) : show === undefined ? true : show;
				if (_show) items.push(<Menu.Item {...others}>{name}</Menu.Item>);
			});
		return items.length ? <Menu onClick={onClick}>{items}</Menu> : <span />;
	};
	methods = {
		handleMenuClick: (record) => {
			return (item) => {
				this.props.onMoreBtnClick && this.props.onMoreBtnClick(item, record);
			};
		},
		detailBtnClick: (e) => {
			this.props.onDetailClick && this.props.onDetailClick(this.props.record);
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
	render() {
		const { showDetailBtn, showUpdateBtn, showDeleteBtn,detailBtnDisabled,updateBtnDisabled,deleteBtnDisabled, record, index } = this.props;
		const _showDetailBtn = typeof showDetailBtn == "function" ? showDetailBtn(record, index) : showDetailBtn;
		const _showUpdateBtn = typeof showUpdateBtn == "function" ? showUpdateBtn(record, index) : showUpdateBtn;
		const _showDeleteBtn = typeof showDeleteBtn == "function" ? showDeleteBtn(record, index) : showDeleteBtn;
		const _detailBtnDisabled =
			typeof detailBtnDisabled == "function" ? detailBtnDisabled(record, index) : detailBtnDisabled;
		const _updateBtnDisabled =
			typeof updateBtnDisabled == "function" ? updateBtnDisabled(record, index) : updateBtnDisabled;
		const _deleteBtnDisabled =
			typeof deleteBtnDisabled == "function" ? deleteBtnDisabled(record, index) : deleteBtnDisabled;
		return (
			<span className="z-flex-space-between">
				<span>{this.props.name}</span>
				<span className={cssClass["z-tree-line"]} />
				<span className={cssClass["z-tree-btns"]}>
					{this.getBtn("default", "详情", this.methods.detailBtnClick, _showDetailBtn,_detailBtnDisabled)}
					{this.getBtn("primary", "修改", this.methods.updateBtnClick, _showUpdateBtn,_updateBtnDisabled)}
					{this.getBtn("danger", "删除", this.methods.deleteBtnClick, _showDeleteBtn,_deleteBtnDisabled)}
					{this.hasMoreMenu ? (
						<Dropdown
							key="more"
							overlay={this.moreMenu(record, index)}
							trigger={["click"]}
							placement="bottomRight"
						>
							<Button size="small">
								更多
								<Icon type="down" />
							</Button>
						</Dropdown>
					) : null}
				</span>
			</span>
		);
	}
}
export default TreeTitle;
