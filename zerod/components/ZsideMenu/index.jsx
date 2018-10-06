import React from "react";
import { Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
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
		// iconTheme: PropTypes.string,
		theme: PropTypes.string,
	};
	static defaultProps = {
        // iconTheme: "outlined",
        theme:"light",
	};
	allSubKeys = [];
	getMenuItems(data) {
		return data.map((el, i) => {
			const icon = el.iconClass ? (
				typeof el.iconClass == "function" ? (
					el.iconClass()
				) : (
					<Icon type={el.iconClass} />
				)
			) : null;
			if (el.children && el.children.length) {
				this.allSubKeys.push(el.path);
				return (
					<Menu.SubMenu
						title={
							<span>
								{icon}
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
							{icon}
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
				this.props.onOpenChange(keys);
			}, 300);
		}
		this.isOpenClick = true;
		this.setState({
			openKeys: keys,
		});
	};
	onSelect = ({ item, key, selectedKeys }) => {
		let selected = true;
		if (this.props.onSelect) selected = this.props.onSelect({ item, key, selectedKeys });
		if (/^\/[A-Za-z0-9]*/.test(key) && selected !== false) this.props.history.push(key);
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
				const lastPath = currentPath.replace(item.path, "");
				if (!lastPath || lastPath.startsWith("/")) keys.push(item.path);
			}
		});
		return keys;
	};
	getDefaultKeys = () => {
		const currentPath = this.props.location.pathname;
		return this.findKeys(this.props.menuData, currentPath);
	};
	initKeys = () => {
		this.defaultOpenKeys = [];
		const selectKeys = this.getDefaultKeys();
		if (!this.props.collapsed)
			this.defaultOpenKeys = [...new Set([...this.state.openKeys, ...this.defaultOpenKeys])];
		this.setState({
			selectKeys,
			openKeys: this.defaultOpenKeys,
		});
	};
	state = {
		selectKeys: [],
		openKeys: [],
		noOpen: false,
		items: this.getMenuItems(this.props.menuData),
	};
	noOpenTimer = null;
	componentDidUpdate(prevProps, prevState) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.initKeys();
		}
		if (this.props.menuData !== prevProps.menuData) {
			this.allSubKeys = [];
			this.setState({
				items: this.getMenuItems(this.props.menuData),
			});
		}
		if (this.props.collapsed !== prevProps.collapsed) {
			const currentSelectedKey = this.state.selectKeys[0];
			if (currentSelectedKey) {
				this.defaultOpenKeys = [];
				this.findKeys(this.props.menuData, currentSelectedKey);
				this.setState({
					openKeys: this.defaultOpenKeys,
				});
			}
			if (this.props.collapsed) {
				this.setState({
					noOpen: true,
				});
				clearTimeout(this.noOpenTimer);
				this.noOpenTimer = setTimeout(() => {
					this.setState({
						noOpen: false,
					});
				}, 300);
			}
		}
	}
	componentDidMount() {
		this.initKeys();
	}
	render() {
		const openKeys =
			!this.props.collapsed && this.props.openAllSubmenu && !this.isOpenClick
				? this.allSubKeys
				: this.state.openKeys;
		return (
            <div className={cssClass["z-side-menu"]}>
			<Menu
				mode="inline"
				selectedKeys={this.state.selectKeys}
				openKeys={!this.noOpen ? openKeys : []}
				onSelect={this.onSelect}
				onOpenChange={this.openChange}
				inlineCollapsed={this.props.collapsed}
				theme={this.props.theme=="light"?"light":"dark"}
			>
				{this.state.items}
			</Menu>
            </div>
		);
	}
}
export const ZsideMenu = withRouter(Com);
export default ZsideMenu;
