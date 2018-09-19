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
	state = {
		selectKeys: [],
		openKeys: [],
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
	isOpenClick = false;
	openChange = (keys) => {
		if (this.props.onOpenChange) {
			clearTimeout(this.openTimer);
			this.openTimer = setTimeout(() => {
				this.props.onOpenChange();
			}, 300);
		}
		this.isOpenClick = true;
		this.setState({
			openKeys: keys,
		});
	};
	onSelect = ({ item, key, selectedKeys }) => {
		if (/^\/[A-Za-z0-9]*/.test(key)) this.props.history.push(key);
		this.props.onSelect && this.props.onSelect({ item, key, selectedKeys });
	};
	defaultOpenKeys = [];
	findKeys = (arr, currentPath) => {
		let keys = [];
		arr.forEach((item) => {
			if (item.children && item.children.length) {
				let childKeys = this.findKeys(item.children, currentPath);
				if (childKeys.length) {
					keys = keys.concat(childKeys);
					this.defaultOpenKeys.push(item.path);
				}
			} else if (currentPath.startsWith(item.path)) {
				keys.push(item.path);
			}
		});
		return keys;
	};
	getDefaultKeys = () => {
		const currentPath = this.props.location.pathname;
		return this.findKeys(this.props.menuData, currentPath);
	};

	initKeys = () => {
		const selectKeys = this.getDefaultKeys();
		this.setState({
			selectKeys,
			openKeys: this.defaultOpenKeys,
		});
	};
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.initKeys();
		}
	}
	componentDidMount() {
		this.initKeys();
	}
	render() {
		this.allSubKeys = [];
		const items = this.getMenuItems(this.props.menuData);
		const openKeys = this.props.openAllSubmenu && !this.isOpenClick ? this.allSubKeys : this.state.openKeys;
		return (
			<Menu
				mode="inline"
				selectedKeys={this.state.selectKeys}
				openKeys={openKeys}
				onSelect={this.onSelect}
				onOpenChange={this.openChange}
				inlineCollapsed={this.props.collapsed}
				theme={this.props.theme == "light" ? "light" : "dark"}
			>
				{items}
			</Menu>
		);
	}
}
export const ZsideMenu = withRouter(Com);
export default ZsideMenu;
