import React from "react";
import PropTypes from "prop-types";
import { Button, Dropdown, Menu, Icon } from "antd";
import cssClass from "./style.scss";
class TreeTitle extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		record: PropTypes.any,
		moreBtnMap: PropTypes.arrayOf(PropTypes.object),
		onMoreBtnClick: PropTypes.func,
		onDetailClick: PropTypes.func,
		onUpdateClick: PropTypes.func,
		onDeleteClick: PropTypes.func,
	};

	hasMoreMenu = this.props.moreBtnMap && this.props.moreBtnMap.length;
	//更多操作按钮
	moreMenu(record) {
		const onClick = this.methods.handleMenuClick(record);
		return this.hasMoreMenu ? (
			<Menu onClick={onClick}>
				{this.props.moreBtnMap.map((item) => {
					return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
				})}
			</Menu>
		) : (
			<span />
		);
	}
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
	render() {
		return (
			<span className="z-flex-space-between">
				<span>{this.props.name}</span>
				<span className={cssClass["z-tree-line"]} />
				<span className={cssClass["z-tree-btns"]}>
					<Button type="defualt" size="small" onClick={this.methods.detailBtnClick}>
						详情
					</Button>
					<Button type="primary" size="small" onClick={this.methods.updateBtnClick}>
						修改
					</Button>
					<Button type="danger" size="small" onClick={this.methods.deleteBtnClick}>
						删除
					</Button>
					<Dropdown
						key="more"
						overlay={this.moreMenu(this.props.record)}
						trigger={["click"]}
						placement="bottomRight"
					>
						<Button size="small">
							更多
							<Icon type="down" />
						</Button>
					</Dropdown>
				</span>
			</span>
		);
	}
}
export default TreeTitle;
