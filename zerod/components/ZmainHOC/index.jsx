import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Icon,message } from "antd";
// my component
import { Zlayout } from "../Zlayout";
import { ZsideMenu } from "../ZsideMenu";
import { ZpageLoading } from "../ZpageLoading";
import { ZrightModal } from "../ZrightModal";

import ZerodMainContext from "../ZerodMainContext";

import zTool from "../zTool/";
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
	};
}

class CollapseBtn extends React.Component {
	render() {
		return (
			<Zlayout.ZheaderBtn
				onClick={this.props.onClick && this.props.onClick}
				className="z-padding-left-24-important z-padding-right-24-important z-font-size-20"
			>
				<Icon type={this.props.collapseIcon} />
			</Zlayout.ZheaderBtn>
		);
	}
}

export function ZmainHOC(pageConfig) {
	pageConfig = pageConfig ? pageConfig : {};
	let defaultConfig = {
		// 左侧边展开时的宽度
		leftExpandWidth: 240,
		showCollapseBtn: true, //boolean | function
		mainBodyId: "", // 主页路由区域html元素的id
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
			openAllSubmenu: false,
			topOtherMenu: [],
			bottomOtherMenu: [],
			mapKeys: { iconClass: "iconClass", path: "permUrl", name: "permName", children: "children" },
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
	defaultConfig = zTool.mergeConfig(defaultConfig, pageConfig);
	class Main extends React.Component {
		config = defaultConfig;
		navRoutes = this.config.mainRoutes.map((item, i) => {
			return item.redirect ? (
				<Route
					exact={typeof item.exact == "boolean" ? item.exact : true}
					key={i}
					path={this.props.match.url + item.path}
					render={() => <Redirect to={this.props.match.url + item.to} />}
				/>
			) : (
				<Route
					exact={typeof item.exact == "boolean" ? item.exact : true}
					key={i}
					path={this.props.match.url + item.path}
					component={item.component}
				/>
			);
		});

		state = {
			hasLogin: false, //
			isCollapse: false, //侧边栏折叠状态
			show_mainRoute_Loading: false, // 路由页面的loading
			mainModal_Content: null,
			appModal_Content: null,
			mainModal_top_Content: null,
			appModal_top_Content: null,
			show_mainModal: false,
			show_mainModal_Loading: false, // 右侧拉开页面的loading
			show_mainModal_top: false,
			show_mainModal_top_Loading: false,
			show_appModal: false,
			show_appModal_Loading: false,
			show_appModal_top: false,
			show_appModal_top_Loading: false,
		};
		sideMenuData = [];
		// 处理侧边导航数据
		setSideMenu(menuData) {
			let topOtherMenu = this.config.sideMenu.topOtherMenu;
			let bottomOtherMenu = this.config.sideMenu.bottomOtherMenu;
			topOtherMenu = Array.isArray(topOtherMenu) ? topOtherMenu : [];
			bottomOtherMenu = Array.isArray(bottomOtherMenu) ? bottomOtherMenu : [];
			menuData = Array.isArray(menuData) ? menuData : [];
			this.sideMenuData = zTool.formatterMapKey(
				[...topOtherMenu, ...menuData, ...bottomOtherMenu],
				this.config.sideMenu.mapKeys,
				this.config.sideMenu.noParentPath ? false : `${this.props.match.url}/`,
			);
		}
		methods = {
			getTemporaryStorage: () => {
				return zTool.deepCopy(this.temporaryStorage);
			},
			setTemporaryStorage: (data) => {
				this.temporaryStorage = Object.assign(this.TemporaryStorage ? this.temporaryStorage : {}, data);
			},
			getSideMenuData: () => {
				return zTool.deepCopy(this.sideMenuData);
			},
			// 登录的用户信息对象存储在this.userInfoStorage
			saveUserInfo: (data) => {
				this.userInfoStorage = data;
			},
			getUserInfo: () => {
				return zTool.deepCopy(this.userInfoStorage);
			},
			collapseToggleEnd: () => {
				this.config.beforeToggleCollapse && this.config.afterToggleCollapse(this.state.isCollapse);
			},
			//折叠按钮点击触发
			collapseBtnClick: () => {
				this.config.beforeToggleCollapse && this.config.beforeToggleCollapse(this.state.isCollapse);
				this.setState({
					isCollapse: !this.state.isCollapse,
				});
			},
			//是否显示loading
			showRouteLoading: (show) => {
				this.setState({
					show_mainRoute_Loading: show, //true || false
				});
			},
			showModalLoading: (show, witch) => {
				const { loading_name } = getConstNames(witch);
				this.setState({
					[loading_name]: show, //true || false
				});
			},
			mainModal_Content: null,
			mainModal_scroll: true,
			mainModal_top_Content: null,
			mainModal_top_scroll: true,
			appModal_Content: null,
			appModal_scroll: true,
			appModal_top_Content: null,
			appModal_top_scroll: true,
			currentModalType: "",
			mainModal_Transitionend: null,
			mainModal_top_Transitionend: null,
			appModal_Transitionend: null,
			appModal_top_Transitionend: null,
			//是否弹出右边窗口
			showRightModal: function(show, witch, content, scroll, onTransitionend) {
				if(witch=="noModal"){
                    message.warning("已经没有更高级的modal了");
                    return;
                }
				let opt = null;
				if (zTool.dataTypeTest(show) === "object") {
					opt = show;
					show = opt.show;
					witch = opt.modal;
					content = opt.content;
					scroll = opt.scroll;
					onTransitionend = opt.onTransitionend;
				}
				this.methods.setScrollToTop(witch);
				const { content_name, trans_name, show_name, scroll_name } = getConstNames(witch);
				this.methods[content_name] = content;
				if (onTransitionend) this.methods[trans_name] = onTransitionend;
				if (this.state[show_name] && show) {
					this.setState({
						[content_name]: content,
					});
				} else {
					this.setState({
						[show_name]: show, //true || false
					});
				}
				this.methods[scroll_name] = typeof scroll === "boolean" ? scroll : true;
				this.methods.currentModalType = witch;
				return show;
			}.bind(this),
			//右边窗口弹出过渡动画之后执行
			afterModalTransitionend: (show) => {
				const witch = this.methods.currentModalType;
				const { content_name, trans_name } = getConstNames(witch);
				this.setState({
					[content_name]: show ? this.methods[content_name] : null, //设置modal内容
				});
				this.methods[trans_name] && this.methods[trans_name](show);
			},
			// 下次滚动条更新的时候，让滚动条回到顶部
			setScrollToTop: (witch) => {
				const { instance_name } = getConstNames(witch);
				let scrollInstance = this[instance_name];
				scrollInstance && (scrollInstance.nextScrollToTop = true);
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
			setScrollToTop: this.methods.setScrollToTop,
			getUserInfo: this.methods.getUserInfo,
			showRightModal: this.methods.showRightModal,
			getTemporaryStorage: this.methods.getTemporaryStorage,
			setTemporaryStorage: this.methods.setTemporaryStorage,
			$router: this.$router,
		};
		closeRightModal = (witch) => {
			const { show_name } = getConstNames(witch);
			if (this.state[show_name]) {
				this.methods.showRightModal(false, witch);
			}
		};
		componentDidUpdate(prevProps) {
			//路由地址改变，关闭右边modal
			if (this.props.location.pathname !== prevProps.location.pathname) {
				["mainModal", "mainModal_top", "appModal", "appModal_top"].forEach((name) => {
					this.closeRightModal(name);
				});
				this.methods.setScrollToTop("mainRoute");
			}
		}

		componentDidMount() {
			const mount = this.config.componentDidMount;
			typeof mount === "function" &&
				mount(
					(userInfo = {}, menuData = []) => {
						//已经登录了保存数据
						this.methods.saveUserInfo(userInfo);
						this.setSideMenu(menuData);
						this.setState({
							hasLogin: true,
						});
					},
					this.$router,
					this.tool,
				);
		}
		modalTemplate(witch, zIndex, width) {
			const { content_name, show_name, scroll_name, loading_name, instance_name } = getConstNames(witch);
			return (
				<ZrightModal
                    name={witch}
					zIndex={zIndex}
					width={width}
					show={this.state[show_name]}
					scroll={this.methods[scroll_name]}
					getScrollInstance={(instance) => (this[instance_name] = instance)}
					showLoading={this.state[loading_name]}
					onClose={() => {
						this.methods.showRightModal(false, witch, null);
					}}
					onTransitionend={this.methods.afterModalTransitionend}
				>
					{this.state[content_name]}
				</ZrightModal>
			);
		}
		getTemplate() {
			const leftWidth = this.state.isCollapse ? 80 : this.config.leftExpandWidth;
			const collapseIcon = this.state.isCollapse ? "menu-unfold" : "menu-fold";
			const _showCollapseBtn =
				typeof this.config.showCollapseBtn == "function"
					? this.config.showCollapseBtn(this)
					: this.config.showCollapseBtn;
			return (
				<ZerodMainContext.Provider value={this.tool}>
					<Zlayout flexRow className={`z-layout-${this.config.theme}`}>
						<Zlayout
							onTransitionend={this.methods.collapseToggleEnd}
							width={leftWidth}
							className={`${cssClass["z-main-left"]} ${cssClass[`is-${this.config.theme}`]}`}
						>
							<Zlayout.Zheader
								className={`${cssClass["z-main-logo"]} ${cssClass[`is-${this.config.theme}`]}`}
							>
								{this.config.logo.render()}
							</Zlayout.Zheader>
							<Zlayout.Zbody
								className={`${cssClass["z-main-nav"]} ${cssClass[`is-${this.config.theme}`]}`}
								scroll
							>
								<div className="z-padding-top-10">
									<ZsideMenu
										menuData={this.sideMenuData}
										collapsed={this.state.isCollapse}
										theme={this.config.theme}
                                        openAllSubmenu={this.config.sideMenu.openAllSubmenu}
                                        iconTheme={this.config.sideMenu.iconTheme}
									/>
								</div>
							</Zlayout.Zbody>
						</Zlayout>
						<Zlayout>
							<Zlayout.Zheader className={`${cssClass["z-main-header"]} z-flex-space-between`}>
								<div className="z-flex">
									{_showCollapseBtn ? (
										<CollapseBtn
											onClick={this.methods.collapseBtnClick}
											collapseIcon={collapseIcon}
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
							<Zlayout.Zbody
								id={this.config.mainBodyId}
								className={`${cssClass["z-main-body"]} app-body`}
								scroll
								getScrollInstance={(instance) => (this.mainRoute_ScrollInstance = instance)}
								insertToScrollWraper={
									<Zlayout.Template>
										<ZpageLoading showLoading={this.state.show_mainRoute_Loading} />
										{this.modalTemplate("mainModal", 99, "94%")}
										{this.modalTemplate("mainModal_top", 100, "88%")}
									</Zlayout.Template>
								}
							>
								<section>
									<Switch>{this.navRoutes}</Switch>
								</section>
							</Zlayout.Zbody>
						</Zlayout>
					</Zlayout>
					{this.modalTemplate("appModal", 99, "90%")}
					{this.modalTemplate("appModal_top", 100, "80%")}
				</ZerodMainContext.Provider>
			);
		}
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

export default ZmainHOC;
