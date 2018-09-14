import React from "react";
import { Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
/**
 * menuData
 * [{
 * path,
 * name,
 * iconClass
 * }]
 */
class Com extends React.Component {
	static propTypes = {
		openAllSubmenu: PropTypes.bool,
		onSelect: PropTypes.func,
		collapsed: PropTypes.bool,
		onOpenChange: PropTypes.func,
		menuData: PropTypes.arrayOf(PropTypes.object).isRequired,
	};

	allSubKeys = [];
	getMenuItems(data) {
		return data.map((el, i) => {
			if (el.children && el.children.length) {
				this.allSubKeys.push(el.path);
				return (
					<Menu.SubMenu
						title={
							<span>
								{el.iconClass ? <Icon type={el.iconClass} /> : null}
								<span>{el.name}</span>
							</span>
						}
						key={el.path}
					>
						{this.getMenuItems(el.children)}
					</Menu.SubMenu>
				);
			} else {
				return (
					<Menu.Item key={el.path}>
						<span>
							{el.iconClass ? <Icon type={el.iconClass} /> : null}
							<span>{el.name}</span>
						</span>
					</Menu.Item>
				);
			}
		});
	}
	openTimer = null;
	openChange = () => {
		if (this.props.onOpenChange) {
			clearTimeout(this.openTimer);
			this.openTimer = setTimeout(() => {
				this.props.onOpenChange();
			}, 300);
		}
	};
	onSelect = ({ item, key, selectedKeys }) => {
		if (/^\/[A-Za-z0-9]*/.test(key)) this.props.history.push(key);
		this.props.onSelect && this.props.onSelect({ item, key, selectedKeys });
	};
	defaultSelectedKeys = [this.props.location.pathname];
	defaultOpenKeys = [this.props.location.pathname.replace(`/${this.props.location.pathname.split("/").pop()}`, "")];

	render() {
		this.allSubKeys = [];
		const items = this.getMenuItems(this.props.menuData);
		const openKeys = this.props.openAllSubmenu ? this.allSubKeys : this.defaultOpenKeys;
		return (
			<Menu
				mode="inline"
				defaultSelectedKeys={this.defaultSelectedKeys}
				defaultOpenKeys={openKeys}
				onSelect={this.onSelect}
				onOpenChange={this.openChange}
				inlineCollapsed={this.props.collapsed}
				theme={this.props.theme=="light"?"light":"dark"}
			>
				{items}
			</Menu>
		);
	}
}
export const ZsideMenu = withRouter(Com);
export default ZsideMenu;
