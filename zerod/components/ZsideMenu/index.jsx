import './style.scss';
import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ZiframeFull from '../ZiframeFull';
import { parseQueryString } from '../zTool';
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
        theme: PropTypes.string,
    };
    static defaultProps = {
        // iconTheme: "outlined",
        theme: 'light',
    };

    state = {
        items: [],
        selectKeys: [],
        openKeys: [],
    };
    componentDidMount() {
        // console.log(this.props);
        this.initItems();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.menuData !== prevProps.menuData) {
            this.initItems();
        }
        if (prevProps.location.pathname !== this.props.location.pathname) {
            const { openKeys, selectKeys } = this.getSelectKeys(this.props.menuData, this.props.location.pathname);
            this.setState({
                selectKeys,
                openKeys: this.state.openKeys.concat(openKeys),
            });
        }
        if (prevProps.collapsed !== this.props.collapsed) {
            if (this.props.collapsed) {
                this.oldopenkeys = this.state.openKeys;
                this.setState({
                    openKeys: [],
                });
            } else {
                this.setState({
                    openKeys: this.oldopenkeys,
                });
            }
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
            ifrmeRoutePath,
            ...others
        } = this.props;
        return (
            <>
                <div className="z-side-menu">
                    {this.state.items.length ? (
                        <Menu
                            mode="inline"
                            selectedKeys={this.state.selectKeys}
                            // defaultOpenKeys={this.state.openKeys}
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            onSelect={this.onSelect}
                            inlineCollapsed={this.props.collapsed}
                            theme={this.props.theme === 'light' ? 'light' : 'dark'}
                            expandIcon={(props) => {
                                // console.log(props);
                                const { isOpen, mode } = props;
                                return mode === 'vertical' ? null : (
                                    <Icon type="caret-down" className={`expand-icon ${isOpen ? 'expanded' : ''}`} />
                                );
                            }}
                            {...others}>
                            {this.state.items}
                        </Menu>
                    ) : null}
                </div>
                <ZiframeFull ref={this.iframeFullRef}></ZiframeFull>
            </>
        );
    }
    iframeFullRef = React.createRef();
    selectKeys = [];
    // defaultOpenKeys = [];
    initItems = () => {
        const { selectKeys, defaultOpenKeys, menuItems } = this.getMenuItems(
            this.props.menuData,
            this.props.location.pathname,
            this.props.openAllSubmenu,
        );
        // this.defaultOpenKeys = defaultOpenKeys;
        this.setState({
            items: menuItems,
            selectKeys,
            openKeys: defaultOpenKeys,
        });
    };
    getSelectKeys = (data, currentPath) => {
        let selectKeys = [];
        let openKeys = [];
        data.forEach((el) => {
            let path = el.path;
            if (el.openMode === 'iframe') {
                path = `${this.props.ifrmeRoutePath}/${encodeURIComponent(el.path.replace(/^\//, ''))}`;
            }
            if (el.children && el.children.length) {
                const childMenu = this.getSelectKeys(el.children, currentPath);
                if (childMenu.selectKeys.length && !this.state.openKeys.includes(path)) {
                    openKeys.push(path);
                    openKeys = openKeys.concat(childMenu.openKeys);
                }
                selectKeys = selectKeys.concat(childMenu.selectKeys);
            } else if (currentPath.startsWith(path)) {
                const lastPath = currentPath.replace(path, '');
                if (!lastPath || lastPath.startsWith('/')) selectKeys.push(path);
            }
        });
        return {
            selectKeys,
            openKeys,
        };
    };
    getMenuItems = (data, currentPath, isAllopen) => {
        let selectKeys = [];
        let defaultOpenKeys = [];
        const menuItems = data.map((el, i) => {
            let path = el.path;
            const urlOpenMode = parseQueryString(`http://${el.path.replace(/^(https?:\/\/|\/)/, '')}`).openMode;
            let mode = el.openMode || urlOpenMode || 'route';
            if (el.openMode === 'iframe') {
                path = `${this.props.ifrmeRoutePath}/${encodeURIComponent(el.path.replace(/^\//, ''))}`;
            } else if (mode === 'newWindow' || el.newWindow) {
                mode = 'newWindow';
            }
            const icon = el.iconClass ? (
                typeof el.iconClass === 'function' ? (
                    el.iconClass()
                ) : (
                    <Icon theme={el.antdIconTheme} type={el.iconClass} />
                )
            ) : null;
            if (el.children && el.children.length) {
                const childMenu = this.getMenuItems(el.children, currentPath, isAllopen);
                if (isAllopen || childMenu.selectKeys.length) {
                    defaultOpenKeys.push(path);
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
                        key={path}
                        popupClassName={`z-side-menu-${this.props.theme}`}>
                        {childMenu.menuItems}
                    </Menu.SubMenu>
                );
            }
            if (currentPath.startsWith(path)) {
                const lastPath = currentPath.replace(path, '');
                if (!lastPath || lastPath.startsWith('/')) selectKeys.push(path);
            }
            return (
                <Menu.Item key={path} data-mode={mode}>
                    <span>
                        {icon}
                        <span>{el.name}</span>
                    </span>
                </Menu.Item>
            );
        });
        return { selectKeys, defaultOpenKeys, menuItems };
    };
    onOpenChange = (openKeys) => {
        this.setState({
            openKeys,
        });
    };
    onSelect = ({ item, key, selectedKeys }) => {
        // console.log(item);
        let selected = true;
        if (this.props.onSelect) {
            selected = this.props.onSelect({ item, key, selectedKeys });
        }
        if (selected !== false) {
            switch (item.props['data-mode']) {
                case 'route':
                case 'iframe':
                    this.props.history.push(key);
                    break;
                case 'newWindow':
                    window.open(key, '_blank');
                    break;
                case 'iframe-full':
                    this.iframeFullRef.current && this.iframeFullRef.current.openIframe(key);
                    break;
                default:
            }
        }
    };
}
export const ZsideMenu = withRouter(SideMenu);
export default ZsideMenu;
