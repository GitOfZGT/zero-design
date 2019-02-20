import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ZpureComponent from "../ZpureComponent";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Icon } from "antd";
// my component
import { Zlayout } from "../Zlayout";
import { ZsideMenu } from "../ZsideMenu";
import { ZpageLoading } from "../ZpageLoading";
import { ZrightModal } from "../ZrightModal";
import { const_getInsertLocation } from "../constant";
import ZerodMainContext from "../ZerodMainContext";

import {
	mergeConfig,
	formatterMapKey,
	deepCopy,
	dataTypeTest,
	dataType,
	itemsFromTree,
	GenNonDuplicateID,
} from "../zTool/";
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
	console.log(MainComponent);
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
		headerLeftRender: (tool) => {
			return null;
		},
		// 顶部栏右边内容的渲染钩子
		headerRightRender: (tool) => {
			return null;
		},
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
	class Main extends ZpureComponent {
		config = defaultConfig;
		navRoutes = [];
		state = {
			hasLogin: false, //
			isCollapse: false, //侧边栏折叠状态
			show_mainRoute_Loading: false, // 路由页面的loading
		};
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
		setSideMenu = (sideMenu) => {
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
				return deepCopy(this.temporaryStorage);
			},
			setTemporaryStorage: (data) => {
				this.temporaryStorage = Object.assign(this.TemporaryStorage ? this.temporaryStorage : {}, data);
			},
			getSideMenuData: () => {
				return deepCopy(this.sideMenuData);
			},
			// 登录的用户信息对象存储在this.userInfoStorage
			saveUserInfo: (data) => {
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
			showRouteLoading: (show) => {
				this.mainRoute_Loading_ref.current && this.mainRoute_Loading_ref.current.methods.showLoading(show);
				// this.setState({
				// 	show_mainRoute_Loading: show, //true || false
				// });
			},
			showModalLoading: (show, witch) => {
				const { loading_name } = getConstNames(witch);
				if (loading_name == "show_mainRoute_Loading") {
					this.methods.showRouteLoading(show);
				} else {
					const modal = this.RightModalsRef.current.methods.findModal(witch);
					modal && modal.ref.current.methods.showModalLoading(show);
					// this.setState({
					// 	[loading_name]: show, //true || false
					// });
				}
			},

			//是否弹出右边窗口
			showRightModal: (show, witch, content, scroll, onTransitionend, wrapperEl) => {
				let opt = null;
				if (dataTypeTest(show) === "object") {
					opt = show;
					show = opt.show;
					witch = opt.modal;
					content = opt.content;
					scroll = opt.scroll;
					onTransitionend = opt.onTransitionend;
					wrapperEl = opt.wrapperEl;
				}
				const defaultWrapper = document.querySelector(
					"#" + (this.mainBodyId ? this.mainBodyId : this.config.mainBodyId),
				);
				this.RightModalsRef.current.methods.changeModals(
					{
						show,
						content,
						scroll,
						witch,
						onTransitionend,
					},
					wrapperEl ? wrapperEl : defaultWrapper ? defaultWrapper : document.body,
				);
			},

			// 下次滚动条更新的时候，让滚动条回到顶部
			setScrollToTop: (witch) => {
				let scrollInstance = this.methods.getScrollInstance(witch);
				scrollInstance && (scrollInstance.nextScrollToTop = true);
			},
			getScrollInstance: (witch) => {
				if (witch == "mainRoute") {
					const { instance_name } = getConstNames(witch);
					return this[instance_name];
				} else {
					const modal = this.RightModalsRef.current.methods.findModal(witch);
					return modal && modal.ref.current.methods.getScrollInstance();
				}
			},
			getScrollAreaWrapperEl: (witch) => {
				const modal = this.RightModalsRef.current.methods.findModal(witch);
				return modal && modal.ref.current.methods.getWrapperEl();
				// const { wrapper_name, wrapperMethods_name } = getConstNames(witch);
				// return { wrapperEl: this[wrapper_name], methods: this[wrapperMethods_name] };
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
			//已经登录了保存数据
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
							collapsed={isCollapse}
							theme={theme}
							openAllSubmenu={openAllSubmenu}
							onSelect={onSelect}
						/>
					</div>
				</Zlayout.Zbody>
			);
		};
		getMaimRouteTemplate = (mainBodyId) => {
			this.mainBodyId = mainBodyId;
			return (
				<Zlayout.Zbody
					id={mainBodyId ? mainBodyId : this.config.mainBodyId}
					className={`${cssClass["z-main-body"]} app-body`}
					scroll
					getScrollInstance={(instance) => (this[getConstNames("mainRoute").instance_name] = instance)}
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
		getBodyTemplate = (_showCollapseBtn) => {
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
		const leftWidth = this.state.isCollapse ? 80 : this.props.leftExpandWidth;
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

class RightModals extends React.PureComponent {
	methods = {
		closeAllModal: () => {
			this.state.modals.forEach((modal) => {
				modal.ref.current.methods.close();
			});
		},
		getModalEls: (wrapperEl) => {
			const modalEls = [];
			Array.prototype.slice.call(wrapperEl.children).forEach((el) => {
				if (el.dataset["zgt_modal"]) {
					modalEls.push(el);
				}
			});
			return modalEls;
		},
		findModal: (witch) => {
			let modal = null;
			for (let index = 0; index < this.state.modals.length; index++) {
				const element = this.state.modals[index];
				if (element.options.witch == witch) {
					modal = element;
					break;
				}
			}
			return modal;
		},
		changeModals: (opt, wrapperEl) => {
			if (this.opening) return;
			this.opening = true;
			const end = opt.onTransitionend;
			const id = GenNonDuplicateID();
			opt.onTransitionend = (show) => {
				this.opening = false;
				if (show) {
					// const laster = this.state.modals.slice(-1)[0];
					// laster &&
					// 	laster.ref.current.methods.showModal({
					// 		content: laster.content,
					// 	});
				} else {
					const index = this.state.modals.findIndex((item) => item.id == id);
					this.state.modals.splice(index, 1);
					this.setState({
						modals: [...this.state.modals],
					});
				}
				typeof end == "function" && end(show);
			};

			if (opt.show) {
				const witch = opt.witch ? opt.witch : "modal_" + id;
				const hased = this.methods.findModal(witch);
				if (hased) {
					console.warn(`showRightModal()的 ${witch} 已存在，请使用别的名称`);
				}
				let len = 0;
				for (let index = 0; index < this.state.modals.length; index++) {
					const element = this.state.modals[index];
					if (element.wrapperEl == wrapperEl) {
						len++;
					}
				}
				if (len > 0) {
					const modalEls = this.methods.getModalEls(wrapperEl);
					modalEls.forEach((el) => {
						el.previousElementSibling.style.backgroundColor = "transparent";
					});
				}
				const width = 94 - len * 6 + "%";
				const zIndex = 99 + len * 6;
				this.setState(
					{
						modals: [
							...this.state.modals,
							...[
								{
									id,
									wrapperEl,
									ref: React.createRef(),
									// content: opt.content,
									options: {
										...opt,
										width,
										zIndex,
										// content: null,
										witch,
									},
								},
							],
						],
					},
					() => {
						const laster = this.state.modals.slice(-1)[0];
						laster && laster.ref.current.methods.showModal(laster.options);
					},
				);
			} else {
				if (opt.witch) {
					const modal = this.methods.findModal(opt.witch);
					modal && modal.ref.current.methods.close();
				} else {
					const laster = this.state.modals.slice(-1)[0];
					laster && laster.ref.current.methods.close();
				}
			}
		},
	};
	onBeforeClose = (props) => {
		const index = this.state.modals.findIndex((item) => item.id == props.id);
		if (index == this.state.modals.length - 1 && this.state.modals.length > 1) {
			const modalEls = this.methods.getModalEls(props.wrapperEl);
			modalEls[this.state.modals.length - 2].previousElementSibling.style.backgroundColor = "";
		}
	};
	state = {
		modals: [],
	};
	render() {
		return this.state.modals.map((item) => {
			return item.wrapperEl
				? ReactDOM.createPortal(
						<RightModalSelf
							id={item.id}
							key={item.id}
							wrapperEl={item.wrapperEl}
							ref={item.ref}
							onBeforeClose={this.onBeforeClose}
						/>,
						item.wrapperEl,
				  )
				: null;
		});
	}
}

class RightModalSelf extends React.PureComponent {
	methods = {
		showModal: (opt) => {
			this.setState(opt);
		},
		showModalLoading: (show) => {
			this.modalRef.current && this.modalRef.current.methods.showLoading(show);
		},
		getScrollInstance: () => {
			return this.ScrollInstance;
		},
		getWrapperEl: () => {
			return { wrapperEl: this.wrapperEl, methods: this.wrapperMethods };
		},
		close: () => {
			this.props.onBeforeClose && this.props.onBeforeClose(this.props);
			this.setState({
				show: false,
			});
		},
	};
	state = {
		witch: "modalName",
		zIndex: 9,
		width: "90%",
		show: false,
		scroll: true,
		onTransitionend: () => {},
		content: null,
	};
	modalRef = React.createRef();
	getScrollInstance = (instance) => (this.ScrollInstance = instance);
	getWrapperEl = (el, method) => {
		this.wrapperEl = el;
		this.wrapperMethods = method;
	};
	render() {
		const { witch, zIndex, width, show, scroll, content, onTransitionend } = this.state;
		const newOnTransitionend = (show) => {
			dataType.isFunction(onTransitionend) && onTransitionend(show, this.state);
		};
		return (
			<ZrightModal
				ref={this.modalRef}
				name={witch}
				zIndex={zIndex}
				width={width}
				show={show}
				scroll={scroll}
				getScrollInstance={this.getScrollInstance}
				onClose={this.methods.close}
				onTransitionend={newOnTransitionend}
				getWrapperEl={this.getWrapperEl}
			>
				{content}
			</ZrightModal>
		);
	}
}
export default ZmainHOC;
