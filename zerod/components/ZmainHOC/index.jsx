/* eslint-disable camelcase */
import React from 'react';
// import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, matchPath } from 'react-router-dom';
import { Icon } from 'antd';
// my component
import Zlayout from '../Zlayout';
import ZsideMenu from '../ZsideMenu';
import ZpageLoading from '../ZpageLoading';
import ZiframeRoute from '../ZiframeRoute';
const ZiframeRouteWith = withRouter(ZiframeRoute);
import {
    const_getInsertLocation,
    const_showRightModal,
    const_showModalLoading,
    const_getModalScrollInstance,
    const_getScrollAreaWrapperEl,
    const_notification,
} from '../constant';
import ZerodMainContext from '../ZerodMainContext';
import RightModals from '../ZrightModal/RightModals';
import { mergeConfig, formatterMapKey, deepCopy, dataType, itemsFromTree } from '../zTool/';
import { KeepAlive, Provider as KeepAliveProvider } from 'react-keep-alive';
import { createRoute } from '../ZappHOC/createRoute';
import ResultPage from '../ZappHOC/ResultPage';
import { globalConfig } from 'zerod-ztool/axiosInterceptor/httpAjax';
// import { removeOblique } from '../zTool/getProcessEnv';
// 样式类
import './style.scss';
// import debounce from "lodash/debounce";
function getConstNames(witch) {
    return {
        content_name: `${witch}_Content`,
        show_name: `show_${witch}`,
        scroll_name: `${witch}_scroll`,
        instance_name: `${witch}_ScrollInstance`,
        loading_name: `show_${witch}_Loading`,
        trans_name: `${witch}_Transitionend`,
        wrapper_name: `${witch}_OutsideScrollWrapper`,
        wrapperMethods_name: `${witch}_OutsideScrollWrapperMethods`,
    };
}

class CollapseBtn extends React.PureComponent {
    state = {
        collapsed: false,
    };
    methods = {
        changeCollapsed: (collapsed) => {
            this.setState({
                collapsed,
            });
        },
    };
    render() {
        const { collapseBtnRender } = this.props;
        const { collapsed } = this.state;
        // console.log(collapsed);
        const icon =
            typeof collapseBtnRender === 'function' ? (
                collapseBtnRender(collapsed)
            ) : (
                <Icon type={collapsed ? 'double-right' : 'double-left'}></Icon>
            );
        return (
            <div className="z-collapse-btn" onClick={this.props.onClick}>
                {icon}
            </div>
        );
        // return (
        //     <Zlayout.ZheaderBtn
        //         onClick={this.props.onClick}
        //         style={{ padding: '0 24px', fontSize: '20px' }}
        //     >
        //         {icon}
        //     </Zlayout.ZheaderBtn>
        // );
    }
}
// //Pace进度条开始时
// function paceRestart() {
// 	window.appProtalWindow && window.appProtalWindow.postMessage({ paceRestart: true }, window.appProtalOrigin);
// }
// //Pace进度条结束时
// function paceDone() {
// 	window.appProtalWindow && window.appProtalWindow.postMessage({ paceDone: true }, window.appProtalOrigin);
// }
// //当页面加载完后 当前window执行一次消息事件
// window.addEventListener(
// 	"load",
// 	() => {
// 		window.postMessage("currentWindow", window.location.origin);
// 	},
// 	false,
// );
export function ZmainHOC(pageConfig, mounted) {
    const MainComponent = dataType.isFunction(pageConfig) ? pageConfig : null;
    pageConfig = dataType.isObject(pageConfig) ? pageConfig : {};
    let defaultConfig = {
        noticeType: 'notification', //notification | message
        // 左侧边展开时的宽度
        leftExpandWidth: 240,
        showCollapseBtn: true, //boolean | function
        mainBodyId: 'Z_mainBody', // 主页路由区域html元素的id
        // 主题有 light | dark | mazarine
        theme: 'light',
        logo: {
            title: '',
            render: () => null,
        },
        // 路由配置
        mainRoutes: [],
        // 加载之前显示的loading
        globalLoading: <div />,
        // 导航
        sideMenu: {
            collapseBtnRender: null,
            openAllSubmenu: false,
            topOtherMenu: [],
            bottomOtherMenu: [],
            // mapKeys: { iconClass: "iconClass", path: "permUrl", name: "permName", children: "children" },
            noParentPath: false,
        },
        // 顶部栏左边内容的渲染钩子
        headerLeftRender: (tool) => null,
        // 顶部栏右边内容的渲染钩子
        headerRightRender: (tool) => null,
        // 侧边栏折叠按钮触发后，过渡动画之前
        beforeToggleCollapse: (collapsed) => {},
        // 侧边栏折叠按钮触发后，过渡动画之后
        afterToggleCollapse: (collapsed) => {},
        // 组件加载完成的钩子
        componentDidMount: (callback, $router, tool) => {},
        // rightModalType
        // rightModalType: "mainModal",
    };
    defaultConfig = mergeConfig(defaultConfig, pageConfig);
    //设置httpAjax的请求错误弹出提示框方法
    window.globalMsgError = const_notification(defaultConfig.noticeType)['error'];
    class Main extends React.PureComponent {
        match = matchPath(this.props.location.pathname, {
            path: this.props.routePath,
        });
        config = defaultConfig;
        navRoutes = [];
        state = {
            hasLogin: false,
            showHeader: true,
        };
        componentDidMount() {
            console.log(this.match);
            this.didMount();
            //监听消息事件
            // window.addEventListener("message", this.receiveMessage, false);
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.state.hasLogin !== prevState.hasLogin && this.state.hasLogin) {
                //1366内的自动折叠
                if (window.innerWidth <= 1366) {
                    setTimeout(() => {
                        this.methods.collapseBtnClick(true);
                    }, 1000);
                }
            }
            //路由地址改变，关闭右边modal
            if (this.props.location.pathname !== prevProps.location.pathname) {
                console.log(this.props.location.pathname,prevProps.location.pathname)
                // //路由地址改变触发父窗口的消息事件
                // if (window.appProtalWindow) {
                // 	window.appProtalWindow &&
                // 		window.appProtalWindow.postMessage(
                // 			{ currentAppPath: this.props.location.pathname },
                // 			window.appProtalOrigin,
                // 		);
                // }
                this.closeRightModal();
                this.methods.setScrollToTop('mainRoute');
                if (window.innerWidth <= 1366) {
                    this.methods.collapseBtnClick(true);
                }
            }
        }
        componentWillUnmount() {
            // window.removeEventListener("message", this.receiveMessage, false);
            // window.Pace && window.Pace.off("restart", paceRestart);
            // window.Pace && window.Pace.off("done", paceDone);
        }
        render() {
            const GlobalLoading = this.config.globalLoading;
            return this.state.hasLogin
                ? this.getTemplate()
                : typeof GlobalLoading === 'function'
                ? GlobalLoading()
                : GlobalLoading;
        }
        didMount = () => {
            const mount = MainComponent ? mounted : this.config.componentDidMount;
            typeof mount === 'function' && mount(this.setInitData, this.$router, this.tool);
        };
        // receiveMessage = debounce(event => {
        // 	if (Object.prototype.toString.call(event.data) === "[object Object]") {
        // 		//如果消息事件传递的数据存在isAppPortal，说明是统一门户入口进入的
        // 		if (event.data.isAppPortal) {
        // 			window.isAppPortal = true;
        // 			document.body.className += " app-portal";
        // 			window.appProtalWindow = event.source;
        // 			window.appProtalOrigin = event.origin;
        // 			window.Pace && window.Pace.on("restart", paceRestart);
        // 			window.Pace && window.Pace.on("done", paceDone);
        // 			this.config.theme = "mazarine";
        // 			this.config.leftExpandWidth = 240;
        // 			window.appProtalWindow.postMessage(
        // 				{ currentAppPath: this.props.location.pathname },
        // 				window.appProtalOrigin,
        // 			);
        // 			this.didMount();
        // 		}
        // 		//如果消息事件传递的数据存在isCollapse，执行折叠/展开操作
        // 		if (typeof event.data.isCollapse === "boolean") {
        // 			this.methods.collapseBtnClick(event.data.isCollapse);
        // 		}
        // 	} else {
        // 		this.didMount();
        // 	}
        // }, 60);
        temporaryStorage = {};
        setNavRoutes({ menuData, mainRoutes }) {
            const newNav = [];
            let firstmenu = null;
            mainRoutes = mainRoutes || this.config.mainRoutes;
            if (typeof mainRoutes === 'function') {
                mainRoutes = mainRoutes(menuData, this.tool);
            } else {
                mainRoutes = mainRoutes.filter((item, i) => {
                    const currentPath = this.match.url + item.path;
                    let hasPath = true;
                    if (!item.notFilterByMenu) {
                        hasPath = itemsFromTree({
                            tree: menuData,
                            sourceItem: { path: currentPath },
                            keyObj: {
                                id: 'path',
                                children: 'children',
                            },
                            condition: (menuPath, routePath) => {
                                if (routePath && /\/:[^:/]+/.test(routePath)) {
                                    return menuPath.includes(routePath.replace(/\/:[^:/]+/g, ''));
                                }
                                return menuPath === routePath;
                            },
                        });
                    }

                    return hasPath;
                });

                if (menuData.length && !firstmenu) {
                    itemsFromTree({
                        tree: menuData,
                        sourceItem: { isHomePage: true },
                        keyObj: {
                            id: 'isHomePage',
                            children: 'children',
                        },
                        action: ({ tree, currentItem, item, index, keyObj }) => {
                            if (!firstmenu) {
                                firstmenu = currentItem;
                            }
                        },
                    });
                    if (!firstmenu) {
                        const _firstmenu = menuData[0];
                        if (Array.isArray(_firstmenu.children) && _firstmenu.children.length) {
                            firstmenu = _firstmenu.children[0];
                        } else {
                            firstmenu = _firstmenu;
                        }
                    }
                }
            }
            if (firstmenu) {
                const isIframe = firstmenu.openMode && firstmenu.openMode.includes('iframe');
                if (isIframe || mainRoutes.some((item) => this.match.url + item.path === firstmenu.path)) {
                    //重定向
                    mainRoutes.push({
                        path: '',
                        redirect: true,
                        to: isIframe
                            ? `/frame/win/${encodeURIComponent(firstmenu.path.replace(/^\//, ''))}`
                            : firstmenu.path.replace(this.match.url, ''),
                    });
                }
            }

            mainRoutes.forEach((item, i) => {
                newNav.push(
                    createRoute({
                        routeItem: item,
                        parentPath: this.match.url,
                    }),
                );
            });

            return (this.navRoutes = newNav);
        }
        sideMenuData = [];
        // 处理侧边导航数据
        setSideMenu = (sideMenu) => {
            console.log(this.match.url)
            let menuData = sideMenu.menuData;
            let topOtherMenu = sideMenu.topOtherMenu || this.config.sideMenu.topOtherMenu;
            let bottomOtherMenu = sideMenu.bottomOtherMenu || this.config.sideMenu.bottomOtherMenu;
            topOtherMenu = Array.isArray(topOtherMenu) ? topOtherMenu : [];
            bottomOtherMenu = Array.isArray(bottomOtherMenu) ? bottomOtherMenu : [];
            menuData = Array.isArray(menuData) ? menuData : [];
            this.sideMenuData = formatterMapKey(
                [...topOtherMenu, ...menuData, ...bottomOtherMenu],
                sideMenu.mapKeys || this.config.sideMenu.mapKeys,
                `${this.match.url}/`,
                this.config.sideMenu.noParentPath,
            );
            return {
                navData: this.sideMenuData,
                navRoutes: this.setNavRoutes({ menuData: this.sideMenuData, mainRoutes: sideMenu.mainRoutes }),
            };
        };
        methods = {
            getTemporaryStorage: () => this.temporaryStorage,
            setTemporaryStorage: (data) => {
                this.temporaryStorage = Object.assign(this.TemporaryStorage ? this.temporaryStorage : {}, data);
            },
            getSideMenuData: () => deepCopy(this.sideMenuData),
            // 登录的用户信息对象存储在this.userInfoStorage
            saveUserInfo: (data) => {
                this.userInfoStorage = data;
            },
            getUserInfo: () => deepCopy(this.userInfoStorage),
            collapseToggleEnd: () => {
                this.collapsing = false;
                this.config.afterToggleCollapse &&
                    this.config.afterToggleCollapse(this.MainLeftRef.current.state.isCollapse, this.tool);
            },
            //折叠按钮点击触发
            collapseBtnClick: (isCollapse) => {
                if (this.collapsing) return;
                if (isCollapse === this.colapseState) return;
                this.collapsing = true;
                this.config.beforeToggleCollapse && this.config.beforeToggleCollapse(this.colapseState, this.tool);
                // this.setState({
                // 	isCollapse: !this.state.isCollapse,
                // });
                this.MainLeftRef.current && this.MainLeftRef.current.methods.collapse(isCollapse);
                this.CollapseBtnRef.current && this.CollapseBtnRef.current.methods.changeCollapsed(isCollapse);
            },
            //是否显示loading
            showRouteLoading: (show, tip) => {
                this.mainRoute_Loading_ref.current && this.mainRoute_Loading_ref.current.methods.showLoading(show, tip);
                // this.setState({
                // 	show_mainRoute_Loading: show, //true || false
                // });
            },
            showModalLoading: (show, witch, tip) => {
                const { loading_name } = getConstNames(witch);
                if (loading_name === 'show_mainRoute_Loading') {
                    this.methods.showRouteLoading(show, tip);
                } else {
                    const_showModalLoading.call(this, show, witch, tip);
                    // const modal = this.RightModalsRef.current.methods.findModal(witch);
                    // modal && modal.ref.current.methods.showModalLoading(show);
                }
            },

            //是否弹出右边窗口
            showRightModal: (show, witch, content, scroll, onTransitionend, wrapperEl, width) => {
                this.defaultWrapper = document.querySelector(`#${this.mainBodyId || this.config.mainBodyId}`);
                const_showRightModal.call(this, show, witch, content, scroll, onTransitionend, wrapperEl, width);
            },

            // 下次滚动条更新的时候，让滚动条回到顶部
            setScrollToTop: (witch) => {
                const scrollInstance = this.methods.getScrollInstance(witch);
                scrollInstance && (scrollInstance.nextScrollToTop = true);
            },
            getScrollInstance: (witch) => {
                if (witch === 'mainRoute') {
                    const { instance_name } = getConstNames(witch);
                    return this[instance_name];
                }
                return const_getModalScrollInstance.call(this, witch);
                // const modal = this.RightModalsRef.current.methods.findModal(witch);
                // return modal && modal.ref.current.methods.getScrollInstance();
            },
            getScrollAreaWrapperEl: (witch) => {
                if (witch === 'mainRoute') {
                    const { wrapper_name, wrapperMethods_name } = getConstNames(witch);
                    return { wrapperEl: this[wrapper_name], methods: this[wrapperMethods_name] };
                }
                return const_getScrollAreaWrapperEl.call(this, witch);
                // const modal = this.RightModalsRef.current.methods.findModal(witch);
                // return modal && modal.ref.current.methods.getWrapperEl();
            },
            sideMenuContentAboveRender: () =>
                this.config.sideMenuContentAboveRender &&
                this.config.sideMenuContentAboveRender(this.tool, this.config),
        };

        closeRightModal = () => {
            this.RightModalsRef.current && this.RightModalsRef.current.methods.closeAllModal();
        };

        setInitData = (userInfo = {}, menuData = [], mapKeys, mainRoutes) => {
            //已经登录了，保存数据
            try {
                window[globalConfig.storageMode].setItem('main_save_userInfo', JSON.stringify(userInfo));
            } catch (e) {
                console.error(e);
            }
            this.methods.saveUserInfo(userInfo);
            this.setSideMenu({ menuData, mapKeys, mainRoutes });
            console.log('window.appPortalPath', window.appPortalPath);
            if (window.appPortalPath) {
                this.config.theme = window.appChildsConfig?.sideMenu?.theme || 'mazarine'; //ES2020的链判断运算符
                this.config.leftExpandWidth = window.appChildsConfig?.leftExpandWidth?.leftExpandWidth || 240;
            }
            this.setState({
                hasLogin: true,
                showHeader: !window.appPortalPath,
            });
        };
        $router = {
            history: this.props.history,
            location: this.props.location,
        };
        tool = {
            ...this.methods,
            getInsertLocation: const_getInsertLocation,
            $router: this.$router,
            noticeType: this.config.noticeType,
            setInitData: this.setInitData,
            getWrapperProps: () => this.props,
        };
        //refs
        MainLeftRef = React.createRef();
        CollapseBtnRef = React.createRef();
        mainRoute_Loading_ref = React.createRef();
        RightModalsRef = React.createRef();
        getSideMenuTemplate = ({ theme, isCollapse, openAllSubmenu, onSelect }) => {
            this.colapseState = isCollapse;
            return (
                <Zlayout.Zbody className={`z-main-nav is-${theme}`} scroll useCustomScroll>
                    <div style={{ padding: '10px 0' }}>
                        <ZsideMenu
                            ifrmeRoutePath={`${this.match.url}/frame/win`}
                            menuData={this.sideMenuData}
                            collapsed={isCollapse}
                            theme={theme}
                            openAllSubmenu={openAllSubmenu}
                            onSelect={onSelect}
                        />
                    </div>
                </Zlayout.Zbody>
            );
        };
        getMaimRouteTemplate = (mainBodyId, opt = {}) => {
            this.mainBodyId = mainBodyId;
            return (
                <Zlayout.Zbody
                    id={mainBodyId}
                    data-zgt_modal="mainRoute"
                    className={'z-main-body app-body'}
                    scroll
                    getScrollInstance={(instance) => (this[getConstNames('mainRoute').instance_name] = instance)}
                    getWrapperEl={(el, method) => {
                        const { wrapper_name, wrapperMethods_name } = getConstNames('mainRoute');
                        this[wrapper_name] = el;
                        this[wrapperMethods_name] = method;
                    }}
                    insertToScrollWraper={
                        <>
                            <ZpageLoading ref={this.mainRoute_Loading_ref} />
                            {opt.onCollapseClick ? (
                                <CollapseBtn
                                    ref={this.CollapseBtnRef}
                                    onClick={(e) => {
                                        opt.onCollapseClick(
                                            this.CollapseBtnRef.current &&
                                                this.CollapseBtnRef.current.methods.changeCollapsed,
                                        );
                                    }}
                                    collapseBtnRender={this.config.sideMenu.collapseBtnRender}
                                />
                            ) : null}
                        </>
                    }>
                    <section>
                        <Switch>
                            {this.navRoutes}
                            <Route
                                exact={true}
                                key={`${this.match.url}/frame/win`}
                                path={`${this.match.url}/frame/win/:url`}
                                render={(props) => {
                                    if (
                                        props.match.params.url &&
                                        itemsFromTree({
                                            tree: this.sideMenuData,
                                            sourceItem: { path: decodeURIComponent(props.match.params.url) },
                                            keyObj: {
                                                id: 'path',
                                                children: 'children',
                                            },
                                        })
                                    ) {
                                        return (
                                            <KeepAlive name="iframeRoute">
                                                <ZiframeRouteWith reoutePath={`${this.match.url}/frame/win/:url`} />
                                            </KeepAlive>
                                        );
                                    }
                                    return <ResultPage></ResultPage>;
                                }}></Route>
                            <Route path="*">
                                <ResultPage></ResultPage>
                            </Route>
                        </Switch>
                    </section>
                    {this.props.children}
                </Zlayout.Zbody>
            );
        };
        getBodyTemplate = () => (
            <Zlayout flexRow className={`z-layout-${this.config.theme}`}>
                <MainLeft
                    ref={this.MainLeftRef}
                    logo={this.config.logo}
                    collapseToggleEnd={this.methods.collapseToggleEnd}
                    theme={this.config.theme}
                    openAllSubmenu={this.config.sideMenu.openAllSubmenu}
                    onSelect={this.config.sideMenu.onSelect}
                    leftExpandWidth={this.config.leftExpandWidth}
                    location={this.props.location}
                    getSideMenuTemplate={this.getSideMenuTemplate}
                    showHeader={this.state.showHeader}
                    contentAboveRender={this.methods.sideMenuContentAboveRender}
                />
                <Zlayout>
                    {this.state.showHeader ? (
                        <Zlayout.Zheader className="z-main-header z-flex-space-between">
                            <div className="z-flex">
                                {typeof this.config.headerLeftRender === 'function' &&
                                    this.config.headerLeftRender(this.tool)}
                            </div>
                            <div className="z-flex">
                                {typeof this.config.headerRightRender === 'function' &&
                                    this.config.headerRightRender(this.tool)}
                            </div>
                        </Zlayout.Zheader>
                    ) : null}
                    {this.getMaimRouteTemplate(this.config.mainBodyId, {
                        onCollapseClick: (
                            typeof this.config.showCollapseBtn === 'function'
                                ? this.config.showCollapseBtn(this.tool)
                                : this.config.showCollapseBtn
                        )
                            ? () => {
                                  this.methods.collapseBtnClick(!this.colapseState);
                              }
                            : false,
                    })}
                </Zlayout>
            </Zlayout>
        );
        getTemplate = () => (
            <ZerodMainContext.Provider value={this.tool}>
                <KeepAliveProvider>
                    {MainComponent ? (
                        <MainComponent
                            {...this.props}
                            getSideMenuTemplate={this.getSideMenuTemplate}
                            getMaimRouteTemplate={this.getMaimRouteTemplate}
                        />
                    ) : (
                        this.getBodyTemplate()
                    )}

                    <RightModals ref={this.RightModalsRef} />
                </KeepAliveProvider>
            </ZerodMainContext.Provider>
        );
    }
    return withRouter(Main);
}
class MainLeft extends React.PureComponent {
    static propTypes = {
        collapseToggleEnd: PropTypes.func,
        theme: PropTypes.string,
        sideMenuData: PropTypes.array,
        openAllSubmenu: PropTypes.bool,
        onSelect: PropTypes.func,
        leftExpandWidth: PropTypes.number,
        showHeader: PropTypes.bool,
    };
    methods = {
        collapse: (isCollapse) => {
            this.setState({
                isCollapse: typeof isCollapse === 'boolean' ? isCollapse : !this.state.isCollapse,
            });
        },
    };
    state = {
        isCollapse: false,
    };
    render() {
        const {
            collapseToggleEnd,
            theme,
            openAllSubmenu,
            onSelect,
            logo,
            showHeader,
            footerRender,
            contentAboveRender,
        } = this.props;
        const leftWidth = this.state.isCollapse ? 80 : this.props.leftExpandWidth;
        return (
            <div style={{ height: '100%' }}>
                <Zlayout
                    onTransitionend={collapseToggleEnd}
                    width={leftWidth}
                    className={`z-main-left is-${theme}`}
                    useCustomScroll>
                    {showHeader ? (
                        <Zlayout.Zheader className={`z-main-logo is-${theme}`}>{logo.render()}</Zlayout.Zheader>
                    ) : null}
                    {contentAboveRender && contentAboveRender()}
                    {this.props.getSideMenuTemplate({
                        theme,
                        isCollapse: this.state.isCollapse,
                        openAllSubmenu,
                        onSelect,
                    })}
                    {footerRender ? <Zlayout.Zfooter>{footerRender()}</Zlayout.Zfooter> : null}
                </Zlayout>
            </div>
        );
    }
}
export default ZmainHOC;
