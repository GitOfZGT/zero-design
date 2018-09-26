import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Icon } from "antd";
// my component
import { Zlayout } from "../Zlayout";
import { ZsideMenu } from "../ZsideMenu";
import { ZpageLoading } from "../ZpageLoading";
import { ZrightModal } from "../ZrightModal";

import ZerodMainContext from "../ZerodMainContext";

import zTool from "../zTool/";
// 样式类
import cssClass from "./style.scss";

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
		// 主题有 light | dark
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
		},
		// 顶部栏左边内容的渲染钩子
		headerLeftRender: (main) => {
			return null;
		},
		// 顶部栏右边内容的渲染钩子
		headerRightRender: (main) => {
			return null;
		},
		// 侧边栏折叠按钮触发后，过渡动画之前
		beforeToggleCollapse: (collapsed) => {},
		// 侧边栏折叠按钮触发后，过渡动画之后
		afterToggleCollapse: (collapsed) => {},
		// 组件加载完成的钩子
		componentDidMount: (callback) => {},
		// rightModalType
		// rightModalType: "mainModal",
	};
	defaultConfig = zTool.mergeConfig(defaultConfig, pageConfig);
	class Main extends React.Component {
		config = defaultConfig;
		navRoutes = this.config.mainRoutes.map((item, i) => {
			return <Route exact={typeof item.exact=="boolean"?item.exact:true} key={i} path={this.props.match.url + item.path} component={item.component} />;
		});

		state = {
			isCollapse: false, //侧边栏折叠状态
			isShowLoading: false, // 路由页面的loading
			isShowModalLoading: false, // 右侧拉开页面的loading
			isShowRightModal: false,
			rightModalContent: null,
			hasLogin: false, //
			isShowAppModal: false,
			isShowAppModalLoading: false,
			appModalContent: null,
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
				`${this.props.match.url}/`,
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
					isShowLoading: show, //true || false
				});
			},
			showModalLoading: (show, witch) => {
				// witch = witch ? witch : this.config.rightModalType;
				switch (witch) {
					case "mainModal":
						this.setState({
							isShowModalLoading: show, //true || false
						});
						break;
					case "appModal":
						this.setState({
							isShowAppModalLoading: show, //true || false
						});
						break;
				}
			},
			rightModalContent: null,
			mainModal_scroll: true,
			appModalContent: null,
			appModal_scroll: true,
			currentModalType: "",
			mainModalTransitionend: null,
			appModalTransitionend: null,
			//是否弹出右边窗口
			showRightModal: function(show, witch, content, scroll, onTransitionend) {
				// witch = witch ? witch : this.config.rightModalType;
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
				switch (witch) {
					case "mainModal":
						this.methods.rightModalContent = content;
						if (onTransitionend) this.methods.mainModalTransitionend = onTransitionend;
						if (this.state.isShowRightModal && show) {
							this.setState({
								rightModalContent: content,
							});
						} else {
							this.setState({
								isShowRightModal: show, //true || false
							});
						}
						break;
					case "appModal":
						this.methods.appModalContent = content;
						if (onTransitionend) this.methods.appModalTransitionend = onTransitionend;
						if (this.state.isShowAppModal && show) {
							this.setState({
								appModalContent: content,
							});
						} else {
							this.setState({
								isShowAppModal: show, //true || false
							});
						}
						break;
				}
				this.methods[witch + "_scroll"] = typeof scroll === "boolean" ? scroll : true;
				this.methods.currentModalType = witch;
				return show;
			}.bind(this),
			//右边窗口弹出过渡动画之后执行
			afterModalTransitionend: (show) => {
				switch (this.methods.currentModalType) {
					case "mainModal":
						this.setState({
							rightModalContent: show ? this.methods.rightModalContent : null, //设置modal内容
						});
						this.methods.mainModalTransitionend && this.methods.mainModalTransitionend(show);
						break;
					case "appModal":
						this.setState({
							appModalContent: show ? this.methods.appModalContent : null, //设置modal内容
						});
						this.methods.appModalTransitionend && this.methods.appModalTransitionend(show);
						break;
				}
			},
			// 下次滚动条更新的时候，让滚动条回到顶部
			setScrollToTop: (witch) => {
				let scrollInstance = null;
				switch (witch) {
					case "mainRoute":
						scrollInstance = this.mainBodyScrollInstance;
						break;
					case "mainModal":
						scrollInstance = this.rightBodyScrollInstance;
						break;
					case "appModal":
						scrollInstance = this.appModalScrollInstance;
						break;
				}
				scrollInstance && (scrollInstance.nextScrollToTop = true);
			},
		};
		componentDidUpdate(prevProps) {
			//路由地址改变，关闭右边modal
			if (this.props.location.pathname !== prevProps.location.pathname) {
				this.methods.showRightModal(false, "mainModal");
				this.methods.showRightModal(false, "appModal");
				this.methods.setScrollToTop("mainRoute");
			}
		}
		componentDidMount() {
			const mount = this.config.componentDidMount;
			typeof mount === "function" &&
				mount((userInfo = {}, menuData = []) => {
					//已经登录了保存数据
					this.methods.saveUserInfo(userInfo);
					this.setSideMenu(menuData);
					this.setState({
						hasLogin: true,
					});
				},this.$router);
		}
		$router={
			history:this.props.history,
			location:this.props.location,
		}
		getTemplate() {
			const leftWidth = this.state.isCollapse ? 80 : this.config.leftExpandWidth;
			const collapseIcon = this.state.isCollapse ? "menu-unfold" : "menu-fold";
			return (
				<ZerodMainContext.Provider
					value={{
						getSideMenuData: this.methods.getSideMenuData,
						showRouteLoading: this.methods.showRouteLoading,
						showModalLoading: this.methods.showModalLoading,
						setScrollToTop: this.methods.setScrollToTop,
						getUserInfo: this.methods.getUserInfo,
						showRightModal: this.methods.showRightModal,
						getTemporaryStorage: this.methods.getTemporaryStorage,
						setTemporaryStorage: this.methods.setTemporaryStorage,
						$router:this.$router,
					}}
				>
					<Zlayout flexRow className={`z-layout-${this.config.theme}`}>
						<Zlayout
							onTransitionend={this.methods.collapseToggleEnd}
							width={leftWidth}
							className={`${cssClass["z-main-left"]} ${cssClass[`is-${this.config.theme}`]}`}
						>
							<Zlayout.Zheader className={`${cssClass["z-main-logo"]} ${cssClass[`is-${this.config.theme}`]}`}>
								{this.config.logo.render()}
							</Zlayout.Zheader>
							<Zlayout.Zbody className={`${cssClass["z-main-nav"]} ${cssClass[`is-${this.config.theme}`]}`} scroll>
								<div className="z-padding-top-10">
									<ZsideMenu
										menuData={this.sideMenuData}
										collapsed={this.state.isCollapse}
										theme={this.config.theme}
										openAllSubmenu={this.config.sideMenu.openAllSubmenu}
									/>
								</div>
							</Zlayout.Zbody>
						</Zlayout>
						<Zlayout>
							<Zlayout.Zheader className={`${cssClass["z-main-header"]} z-flex-space-between`}>
								<div className="z-flex">
									<CollapseBtn onClick={this.methods.collapseBtnClick} collapseIcon={collapseIcon} />
									{typeof this.config.headerLeftRender === "function" &&
										this.config.headerLeftRender(this)}
								</div>
								<div className="z-flex">
									{typeof this.config.headerRightRender === "function" &&
										this.config.headerRightRender(this)}
								</div>
							</Zlayout.Zheader>
							<Zlayout.Zbody
								className={`${cssClass["z-main-body"]} app-body`}
								scroll
								getScrollInstance={(instance) => (this.mainBodyScrollInstance = instance)}
								insertToScrollWraper={
									<Zlayout.Template>
										<ZpageLoading showLoading={this.state.isShowLoading} />
										<ZrightModal
											show={this.state.isShowRightModal}
											scroll={this.methods.mainModal_scroll}
											getScrollInstance={(instance) => (this.rightBodyScrollInstance = instance)}
											showLoading={this.state.isShowModalLoading}
											onClose={() => {
												this.methods.showRightModal(false, "mainModal", null);
											}}
											onTransitionend={this.methods.afterModalTransitionend}
										>
											{this.state.rightModalContent}
										</ZrightModal>
									</Zlayout.Template>
								}
							>
								<section>
									<Switch>{this.navRoutes}</Switch>
								</section>
							</Zlayout.Zbody>
						</Zlayout>
					</Zlayout>
					<ZrightModal
						show={this.state.isShowAppModal}
						scroll={this.methods.appModal_scroll}
						getScrollInstance={(instance) => (this.appModalScrollInstance = instance)}
						showLoading={this.state.isShowAppModalLoading}
						onClose={() => {
							this.methods.showRightModal(false, "appModal", null);
						}}
						onTransitionend={this.methods.afterModalTransitionend}
					>
						{this.state.appModalContent}
					</ZrightModal>
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
