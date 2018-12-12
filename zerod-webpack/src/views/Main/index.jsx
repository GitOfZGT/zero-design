// react
import React from "react";
import PropTypes from "prop-types";
// zerod
import { Zlayout, ZmainHOC } from "zerod";
// import GlobalLoading from "@/lazyLoad/Loading.jsx";
// 路由组件
import mainRoutes from "./load-child-routes.js";
// ant ui
import { Icon, Dropdown, Menu } from "antd";
// img
import logo from "@/assets/images/logo.png";
import flower from "@/assets/images/flower.jpg";
// 样式类
import cssClass from "./style.scss";
// 后台接口
import api from "@/App.api.js";

let logoMethods = null;
const pageConfig = {
    // 右边窗口的类型  appModal | mainModal
    rightModalType:"appModal",
	 // 左侧边展开时的宽度
     leftExpandWidth:240,
    // 主页的主题 light | dark | mazarine
	theme: "mazarine",
	// logt区域
	logo: {
		title: "",
		render: () => {
			return <Logo getLogoMethods={(methods) => (logoMethods = methods)} />;
		},
	},
	// 路由配置信息
	mainRoutes: mainRoutes,
	// 加载前要显示一个全局loading
	// globalLoading: () => <GlobalLoading />,
	// 侧边导航设置
	sideMenu: {
		//追加在上面的menu
		topOtherMenu: [
			/*
			{
				permUrl: "share",
				permName: "共享页面",
            },
            {
				permUrl: "myBrother",
				permName: "共享TWO",
			},
			*/
			{
				permUrl: "home",
				permName: "首页",
				permIconUrl:"home"
			},
		],
		//追加在下面的menu
		bottomOtherMenu: [],
		//
		mapKeys: { iconClass: "permIconUrl", path: "permUrl", name: "permName", children: "children" },
	},
	// 顶部栏左边内容的渲染钩子
	headerLeftRender: (main) => {
		return <img className="z-margin-left-20" src={flower} height="60" />;
	},
	// 顶部栏右边内容的渲染钩子
	headerRightRender: (main) => {
		return <UserDropdown />;
	},
	// 侧边栏折叠按钮触发后，过渡动画之前
	beforeToggleCollapse: (collapsed) => {
		logoMethods && logoMethods.toggleTitle(collapsed);
	},
	// 侧边栏折叠按钮触发后，过渡动画之后
	// afterToggleCollapse: (collapsed) => {},
	// 组件加载完成的钩子
	componentDidMount: (callback) => {
		//获取登录信息
		api.login.getUserInfo().then((re) => {
			if (re.data) {
				//已经登录了保存登录信息数据，传入导航数据
				callback(re.data, re.data.userInfo.permTreeVOS);
			} else {
				//如果没有登录回到登录页
				window.location.assign("/login");
			}
		});
	},
};
export default ZmainHOC(pageConfig);



class Logo extends React.Component {
	static propTypes = {
		getLogoMethods: PropTypes.func,
	};
	state = {
		showTitle: true,
	};
	toggleTitle = (show) => {
		this.setState({
			showTitle: show,
		});
	};
	componentDidMount() {
		this.props.getLogoMethods &&
			this.props.getLogoMethods({
				toggleTitle: this.toggleTitle,
			});
	}
	render() {
		return (
			<div className="z-flex-items-v-center" style={{ height: "100%" }}>
				<img src={logo} alt="" width="32" className="z-margin-left-24" />
				{this.state.showTitle ? (
					<span className="z-margin-left-12 z-font-size-20" style={{ fontWeight: 600 }}>
						Zerod-webpack
					</span>
				) : null}
			</div>
		);
	}
}

class UserDropdown extends React.Component {
	methods = {
		//用户dropdown按钮点击触发
		onMenuClick: (item) => {
			if (item.key === "/logout") {
				window.location.assign(item.key);
			} else {
			}
		},
	};
	dropdownMenu = (
		<Menu
			className={cssClass["z-main-user-menu"]}
			selectedKeys={[]}
			onClick={this.methods.onMenuClick && this.methods.onMenuClick}
		>
			<Menu.Item disabled>
				<Icon type="user" />个人中心
			</Menu.Item>
			<Menu.Item disabled>
				<Icon type="setting" />设置
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="/logout">
				<Icon type="logout" />退出登录
			</Menu.Item>
		</Menu>
	);
	render() {
		return (
			<Dropdown overlay={this.dropdownMenu} trigger={["click"]} placement="bottomRight">
				<Zlayout.ZheaderBtn className="z-margin-right-15">
					<span className="z-icon-circle z-margin-right-8">
						<Icon type="user" />
					</span>
					登录用户
				</Zlayout.ZheaderBtn>
			</Dropdown>
		);
	}
}
