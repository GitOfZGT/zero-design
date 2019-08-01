import React from "react";
// import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ZpureComponent from "../ZpureComponent";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Icon } from "antd";
// my component
import { Zlayout } from "../Zlayout";
import { ZsideMenu } from "../ZsideMenu";
import { ZpageLoading } from "../ZpageLoading";
import {
	const_getInsertLocation,
	const_showRightModal,
	const_showModalLoading,
	const_getModalScrollInstance,
	const_getScrollAreaWrapperEl,
	const_notification,
} from "../constant";
import ZerodMainContext from "../ZerodMainContext";
import RightModals from "../ZrightModal/RightModals";
import { mergeConfig, formatterMapKey, deepCopy, dataTypeTest, dataType, itemsFromTree } from "../zTool/";
// 样式类
import cssClass from "./style.scss";

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
		changeCollapsed: () => {
			this.setState({
				collapsed: !this.state.collapsed,
			});
		},
	};
	render() {
		const { collapseBtnRender } = this.props;
		const { collapsed } = this.state;
		const icon =
			typeof collapseBtnRender == "function" ? (
				collapseBtnRender(collapsed)
			) : (
				<Icon type={collapsed ? "menu-unfold" : "menu-fold"} />
			);
		return (
			<Zlayout.ZheaderBtn
				onClick={this.props.onClick && this.props.onClick}
				className="z-padding-left-24-important z-padding-right-24-important z-font-size-20"
			>
				{icon}
			</Zlayout.ZheaderBtn>
		);
	}
}

export function ZmainHOC(pageConfig, mounted) {
	const MainComponent = dataType.isFunction(pageConfig) ? pageConfig : null;
	pageConfig = dataType.isObject(pageConfig) ? pageConfig : {};
	let defaultConfig = {
		noticeType: "notification", //notification | message
		// 左侧边展开时的宽度
		leftExpandWidth: 240,
		showCollapseBtn: true, //boolean | function
		mainBodyId: "Z_mainBody", // 主页路由区域html元素的id
		// 主题有 light | dark | mazarine
		theme: "light",
		logo: {
			title: "",
			render: () => {
				return null;
			},
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
		headerLeftRender: tool => {
			return null;
		},
		// 顶部栏右边内容的渲染钩子
		headerRightRender: tool => {
			return null;
		},
		// 侧边栏折叠按钮触发后，过渡动画之前
		beforeToggleCollapse: collapsed => {},
		// 侧边栏折叠按钮触发后，过渡动画之后
		afterToggleCollapse: collapsed => {},
		// 组件加载完成的钩子
		componentDidMount: (callback, $router, tool) => {},
		// rightModalType
		// rightModalType: "mainModal",
	};
	defaultConfig = mergeConfig(defaultConfig, pageConfig);
	//设置httpAjax的请求错误弹出提示框方法
	window.globalMsgError = const_notification(defaultConfig.noticeType)["error"];
	class Main extends ZpureComponent {
		config = defaultConfig;
		navRoutes = [];
		state = {
			hasLogin: false, //
			isCollapse: false, //侧边栏折叠状态
			show_mainRoute_Loading: false, // 路由页面的loading
		};
		temporaryStorage = {};
		setNavRoutes({ menuData, mainRoutes }) {
			let newNav = [];
			mainRoutes = mainRoutes ? mainRoutes : this.config.mainRoutes;
			if (typeof mainRoutes == "function") {
				newNav = mainRoutes(menuData, this.tool);
			} else {
				mainRoutes.forEach((item, i) => {
					const currentPath = this.props.match.url + item.path;
					const currentTo = this.props.match.url + item.to;
					let hasPath = itemsFromTree({
						tree: menuData,
						sourceItem: { path: currentPath },
						keyObj: {
							id: "path",
							children: "children",
						},
					});
					if (hasPath || item.redirect) {
						newNav.push(
							item.redirect ? (
								<Route
									exact={typeof item.exact == "boolean" ? item.exact : true}
									key={i}
									path={currentPath}
									render={() => <Redirect to={currentTo} />}
								/>
							) : (
								<Route
									exact={typeof item.exact == "boolean" ? item.exact : true}
									key={i}
									path={currentPath}
									component={item.component}
								/>
							),
						);
					}
				});
			}

			return (this.navRoutes = newNav);
		}
		sideMenuData = [];
		// 处理侧边导航数据
		setSideMenu = sideMenu => {
			let menuData = sideMenu.menuData;
			let topOtherMenu = sideMenu.topOtherMenu ? sideMenu.topOtherMenu : this.config.sideMenu.topOtherMenu;
			let bottomOtherMenu = sideMenu.bottomOtherMenu
				? sideMenu.bottomOtherMenu
				: this.config.sideMenu.bottomOtherMenu;
			topOtherMenu = Array.isArray(topOtherMenu) ? topOtherMenu : [];
			bottomOtherMenu = Array.isArray(bottomOtherMenu) ? bottomOtherMenu : [];
			menuData = Array.isArray(menuData) ? menuData : [];
			this.sideMenuData = formatterMapKey(
				[...topOtherMenu, ...menuData, ...bottomOtherMenu],
				sideMenu.mapKeys ? sideMenu.mapKeys : this.config.sideMenu.mapKeys,
				`${this.props.match.url}/`,
				this.config.sideMenu.noParentPath,
			);
			return {
				navData: this.sideMenuData,
				navRoutes: this.setNavRoutes({ menuData: this.sideMenuData, mainRoutes: sideMenu.mainRoutes }),
			};
		};
		methods = {
			getTemporaryStorage: () => {
				return this.temporaryStorage;
			},
			setTemporaryStorage: data => {
				this.temporaryStorage = Object.assign(this.TemporaryStorage ? this.temporaryStorage : {}, data);
			},
			getSideMenuData: () => {
				return deepCopy(this.sideMenuData);
			},
			// 登录的用户信息对象存储在this.userInfoStorage
			saveUserInfo: data => {
				this.userInfoStorage = data;
			},
			getUserInfo: () => {
				return deepCopy(this.userInfoStorage);
			},
			collapseToggleEnd: () => {
				this.config.afterToggleCollapse &&
					this.config.afterToggleCollapse(this.MainLeftRef.current.state.isCollapse, this.tool);
			},
			//折叠按钮点击触发
			collapseBtnClick: () => {
				this.config.beforeToggleCollapse &&
					this.config.beforeToggleCollapse(this.MainLeftRef.current.state.isCollapse, this.tool);
				// this.setState({
				// 	isCollapse: !this.state.isCollapse,
				// });
				this.MainLeftRef.current.methods.collapse();
				this.CollapseBtnRef.current.methods.changeCollapsed();
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
				if (loading_name == "show_mainRoute_Loading") {
					this.methods.showRouteLoading(show, tip);
				} else {
					const_showModalLoading.call(this, show, witch, tip);
					// const modal = this.RightModalsRef.current.methods.findModal(witch);
					// modal && modal.ref.current.methods.showModalLoading(show);
				}
			},

			//是否弹出右边窗口
			showRightModal: (show, witch, content, scroll, onTransitionend, wrapperEl, width) => {
				this.defaultWrapper = document.querySelector(
					"#" + (this.mainBodyId ? this.mainBodyId : this.config.mainBodyId),
				);
				const_showRightModal.call(this, show, witch, content, scroll, onTransitionend, wrapperEl, width);
			},

			// 下次滚动条更新的时候，让滚动条回到顶部
			setScrollToTop: witch => {
				let scrollInstance = this.methods.getScrollInstance(witch);
				scrollInstance && (scrollInstance.nextScrollToTop = true);
			},
			getScrollInstance: witch => {
				if (witch == "mainRoute") {
					const { instance_name } = getConstNames(witch);
					return this[instance_name];
				} else {
					return const_getModalScrollInstance.call(this, witch);
					// const modal = this.RightModalsRef.current.methods.findModal(witch);
					// return modal && modal.ref.current.methods.getScrollInstance();
				}
			},
			getScrollAreaWrapperEl: witch => {
				if (witch == "mainRoute") {
					const { wrapper_name, wrapperMethods_name } = getConstNames(witch);
					return { wrapperEl: this[wrapper_name], methods: this[wrapperMethods_name] };
				}
				return const_getScrollAreaWrapperEl.call(this, witch);
				// const modal = this.RightModalsRef.current.methods.findModal(witch);
				// return modal && modal.ref.current.methods.getWrapperEl();
			},
		};
		$router = {
			history: this.props.history,
			location: this.props.location,
		};
		tool = {
			getSideMenuData: this.methods.getSideMenuData,
			showRouteLoading: this.methods.showRouteLoading,
			showModalLoading: this.methods.showModalLoading,
			getScrollInstance: this.methods.getScrollInstance,
			getScrollAreaWrapperEl: this.methods.getScrollAreaWrapperEl,
			setScrollToTop: this.methods.setScrollToTop,
			getUserInfo: this.methods.getUserInfo,
			showRightModal: this.methods.showRightModal,
			getTemporaryStorage: this.methods.getTemporaryStorage,
			setTemporaryStorage: this.methods.setTemporaryStorage,
			getInsertLocation: const_getInsertLocation,
			$router: this.$router,
			noticeType: this.config.noticeType,
		};
		closeRightModal = () => {
			this.RightModalsRef.current.methods.closeAllModal();
		};
		componentDidUpdate(prevProps) {
			//路由地址改变，关闭右边modal
			if (this.props.location.pathname !== prevProps.location.pathname) {
				this.closeRightModal();
				this.methods.setScrollToTop("mainRoute");
			}
		}
		setInitData = (userInfo = {}, menuData = [], mapKeys, mainRoutes) => {
			//已经登录了，保存数据
			try {
				localStorage.setItem("main_save_userInfo", JSON.stringify(userInfo));
			} catch (e) {
				console.error(e);
			}

			this.methods.saveUserInfo(userInfo);
			this.setSideMenu({ menuData, mapKeys, mainRoutes });
			this.setState({
				hasLogin: true,
			});
		};
		componentDidMount() {
			const mount = MainComponent ? mounted : this.config.componentDidMount;
			typeof mount === "function" && mount(this.setInitData, this.$router, this.tool);
		}
		//refs
		MainLeftRef = React.createRef();
		CollapseBtnRef = React.createRef();
		mainRoute_Loading_ref = React.createRef();
		RightModalsRef = React.createRef();
		getSideMenuTemplate = ({ theme, isCollapse, openAllSubmenu, onSelect }) => {
			return (
				<Zlayout.Zbody className={`${cssClass["z-main-nav"]} ${cssClass[`is-${theme}`]}`} scroll>
					<div className="z-padding-top-10">
						<ZsideMenu
							menuData={this.sideMenuData}
							collapsed={false}
							theme={theme}
							openAllSubmenu={openAllSubmenu}
							onSelect={onSelect}
						/>
					</div>
				</Zlayout.Zbody>
			);
		};
		getMaimRouteTemplate = mainBodyId => {
			this.mainBodyId = mainBodyId;
			return (
				<Zlayout.Zbody
					id={mainBodyId ? mainBodyId : this.config.mainBodyId}
					className={`${cssClass["z-main-body"]} app-body`}
					scroll
					getScrollInstance={instance => (this[getConstNames("mainRoute").instance_name] = instance)}
					getWrapperEl={(el, method) => {
						const { wrapper_name, wrapperMethods_name } = getConstNames("mainRoute");
						this[wrapper_name] = el;
						this[wrapperMethods_name] = method;
					}}
					insertToScrollWraper={<ZpageLoading ref={this.mainRoute_Loading_ref} />}
				>
					<section>
						<Switch>{this.navRoutes}</Switch>
					</section>
				</Zlayout.Zbody>
			);
		};
		getBodyTemplate = _showCollapseBtn => {
			return (
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
					/>
					<Zlayout>
						<Zlayout.Zheader className={`${cssClass["z-main-header"]} z-flex-space-between`}>
							<div className="z-flex">
								{_showCollapseBtn ? (
									<CollapseBtn
										ref={this.CollapseBtnRef}
										onClick={this.methods.collapseBtnClick}
										collapseBtnRender={this.config.sideMenu.collapseBtnRender}
									/>
								) : null}
								{typeof this.config.headerLeftRender === "function" &&
									this.config.headerLeftRender(this.tool)}
							</div>
							<div className="z-flex">
								{typeof this.config.headerRightRender === "function" &&
									this.config.headerRightRender(this.tool)}
							</div>
						</Zlayout.Zheader>
						{this.getMaimRouteTemplate()}
					</Zlayout>
				</Zlayout>
			);
		};
		getTemplate = () => {
			const _showCollapseBtn =
				typeof this.config.showCollapseBtn == "function"
					? this.config.showCollapseBtn(this)
					: this.config.showCollapseBtn;
			return (
				<ZerodMainContext.Provider value={this.tool}>
					{MainComponent ? (
						<MainComponent
							{...this.props}
							getSideMenuTemplate={this.getSideMenuTemplate}
							getMaimRouteTemplate={this.getMaimRouteTemplate}
						/>
					) : (
						this.getBodyTemplate(_showCollapseBtn)
					)}

					<RightModals ref={this.RightModalsRef} />
				</ZerodMainContext.Provider>
			);
		};
		render() {
			const GlobalLoading = this.config.globalLoading;
			return this.state.hasLogin
				? this.getTemplate()
				: typeof GlobalLoading === "function"
				? GlobalLoading()
				: GlobalLoading;
		}
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
	};
	methods = {
		collapse: () => {
			this.setState({
				isCollapse: !this.state.isCollapse,
			});
		},
	};
	state = {
		isCollapse: false,
	};
	render() {
		const { collapseToggleEnd, theme, openAllSubmenu, onSelect, logo } = this.props;
		const leftWidth = this.state.isCollapse ? 0 : this.props.leftExpandWidth;
		return (
			<Zlayout
				onTransitionend={collapseToggleEnd}
				width={leftWidth}
				className={`${cssClass["z-main-left"]} ${cssClass[`is-${theme}`]}`}
			>
				<Zlayout.Zheader className={`${cssClass["z-main-logo"]} ${cssClass[`is-${theme}`]}`}>
					{logo.render()}
				</Zlayout.Zheader>
				{this.props.getSideMenuTemplate({
					theme,
					isCollapse: this.state.isCollapse,
					openAllSubmenu,
					onSelect,
				})}
			</Zlayout>
		);
	}
}
export default ZmainHOC;
