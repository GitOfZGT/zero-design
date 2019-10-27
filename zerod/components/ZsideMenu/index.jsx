import React from "react";
import { Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { itemsFromTree } from "../zTool";
import "./style.scss";
/**
 * menuData
 * [{
 * path,
 * name,
 * iconClass
 * }]
 */
class SideMenu extends React.PureComponent {
	static propTypes = {
		openAllSubmenu: PropTypes.bool,
		onSelect: PropTypes.func,
		collapsed: PropTypes.bool,
		menuData: PropTypes.arrayOf(PropTypes.object).isRequired,
		// iconTheme: PropTypes.string,
		theme: PropTypes.string,
	};
	static defaultProps = {
		// iconTheme: "outlined",
		theme: "light",
	};

	state = {
		items: [],
	};
	componentDidMount() {
		this.initItems();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.menuData !== prevProps.menuData) {
			this.initItems();
		}
	}
	render() {
		const {
			openAllSubmenu,
			onSelect,
			collapsed,
			menuData,
			theme,
			history,
			location,
			match,
			staticContext,
			...others
		} = this.props;
		return (
			<div className="z-side-menu">
				{this.state.items.length ? (
					<Menu
						mode="inline"
						defaultSelectedKeys={this.selectKeys}
						defaultOpenKeys={this.defaultOpenKeys}
						onSelect={this.onSelect}
						inlineCollapsed={this.props.collapsed}
						theme={this.props.theme == "light" ? "light" : "dark"}
						{...others}
					>
						{this.state.items}
					</Menu>
				) : null}
			</div>
		);
	}
	selectKeys = [];
	defaultOpenKeys = [];
	initItems = () => {
		const { selectKeys, defaultOpenKeys, menuItems } = this.getMenuItems(
			this.props.menuData,
			this.props.location.pathname,
			this.props.openAllSubmenu,
		);
		this.selectKeys = selectKeys;
		this.defaultOpenKeys = defaultOpenKeys;
		this.setState({
			items: menuItems,
		});
	};

	getMenuItems = (data, currentPath, isAllopen) => {
		let selectKeys = [];
		let defaultOpenKeys = [];
		const menuItems = data.map((el, i) => {
			const icon = el.iconClass ? (
				typeof el.iconClass == "function" ? (
					el.iconClass()
				) : (
					<Icon type={el.iconClass} />
				)
			) : null;
			if (el.children && el.children.length) {
				const childMenu = this.getMenuItems(el.children, currentPath, isAllopen);
				if (isAllopen || childMenu.selectKeys.length) {
					defaultOpenKeys.push(el.path);
					defaultOpenKeys = defaultOpenKeys.concat(childMenu.defaultOpenKeys);
				}
				if (childMenu.selectKeys.length) {
					selectKeys = selectKeys.concat(childMenu.selectKeys);
				}
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
						{childMenu.menuItems}
					</Menu.SubMenu>
				);
			} else {
				if (currentPath.startsWith(el.path)) {
					const lastPath = currentPath.replace(el.path, "");
					if (!lastPath || lastPath.startsWith("/")) selectKeys.push(el.path);
				}
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
		return { selectKeys, defaultOpenKeys, menuItems };
	};
	onSelect = ({ item, key, selectedKeys }) => {
		let selected = true;
		if (this.props.onSelect) {
			selected = this.props.onSelect({ item, key, selectedKeys });
		}
		if (selected !== false) {
			let data = null;
			itemsFromTree({
				tree: this.props.menuData,
				sourceItem: { path: key },
				keyObj: { id: "path", children: "children" },
				action: function({ tree, currentItem, item, index, keyObj }) {
					data = currentItem;
				},
			});
			if (data && data.newWindow) {
				window.open(key, "_blank");
			} else if (/^\/[A-Za-z0-9]*/.test(key)) {
				this.props.history.push(key);
			}
		}
	};
}
export const ZsideMenu = withRouter(SideMenu);
export default ZsideMenu;
