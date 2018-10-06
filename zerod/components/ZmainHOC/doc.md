# 主页布局：ZmainHOC

`ZmainHOC`是一个函数，传入`pageConfig`参数配置，返回一个主页布局结构的`路由组件`(我们这里称它为`main`组件)

在`zerod-admin-webpack 脚手架`的`src/views/Main/index.jsx`已经使用。

只有使用了`ZmainHOC`后，它内部的子孙组件才能使用`ZerodMainContext`的内容。

且`ZsearchListHOC`、`ZeditSimpleFormHOC`、`ZdetailSimpleBaseHOC`、`ZeditorTreeHOC`就应该是`ZmainHOC`的子孙组件才能发挥所长

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="这个demo取zerod-design文档主页展示，所有代码如下"></div>

```jsx
// react
import React from "react";
import PropTypes from "prop-types";
// zerod
import { Zlayout, ZmainHOC } from "zerod";
import GlobalLoading from "@/lazyLoad/Loading.jsx";
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

const myMenu = [
	{
		permUrl: "start-doc",
		permName: "开始",
	},
];

let logoMethods = null;
const pageConfig = {
	// 左侧边展开时的宽度
	leftExpandWidth: 280,
	// 主页的主题 light | dark
	theme: "dark",
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
	globalLoading: () => <GlobalLoading />,
	// 侧边导航设置
	sideMenu: {
		//是否打开所有的submenu
		openAllSubmenu: true,
		//追加在上面的menu
		topOtherMenu: myMenu,
		//追加在下面的menu
		bottomOtherMenu: [],
		//
		mapKeys: { iconClass: "iconClass", path: "permUrl", name: "permName", children: "children" },
	},
	// 顶部栏左边内容的渲染钩子
	headerLeftRender: (main) => {
		return <img className="z-margin-left-20" src={flower} height="60" />;
	},
	// 顶部栏右边内容的渲染钩子
	// headerRightRender: (main) => {
	// 	return ;
	// },
	// 侧边栏折叠按钮触发后，过渡动画之前
	beforeToggleCollapse: (collapsed) => {
		logoMethods && logoMethods.toggleTitle(collapsed);
	},
	// 侧边栏折叠按钮触发后，过渡动画之后
	// afterToggleCollapse: (collapsed) => {},
	// 组件加载完成的钩子
	componentDidMount: (callback) => {
		callback();
		//// 获取登录信息
		// api.login.getUserInfo().then((re) => {
		// 	if (re.data) {
		//         console.log(re.data)
		// 		//已经登录了保存登录信息数据，传入导航数据
		// 		callback(re.data,[]);
		// 		// callback(re.data, re.data.userInfo.permTreeVOS);
		// 	} else {
		// 		//如果没有登录回到登录页
		// 		window.location.assign("/login");
		// 	}
		// });
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
						Zero-design
					</span>
				) : null}
			</div>
		);
	}
}
```

2、右边顶部按钮

<div class="z-demo-box" data-render="demo2" data-title="需要在右上角添加更多按钮时，可使用Zlayout.ZheaderBtn"></div>

```jsx
const pageConfig = {
	// 左侧边展开时的宽度
	leftExpandWidth: 280,
	// 主页的主题 light | dark
	theme: "dark",
	// 顶部栏左边内容的渲染钩子
	headerLeftRender: (main) => {
		return <Zlayout.ZheaderBtn className="z-margin-right-15">左边</Zlayout.ZheaderBtn>;
	},
	// 顶部栏右边内容的渲染钩子
	headerRightRender: (main) => {
		return (
			<Zlayout.Template>
				<Zlayout.ZheaderBtn className="z-margin-right-15">按钮1</Zlayout.ZheaderBtn>
				<Zlayout.ZheaderBtn className="z-margin-right-15">按钮2</Zlayout.ZheaderBtn>
				<UserDropdown />
			</Zlayout.Template>
		);
	},
	// 组件加载完成的钩子
	componentDidMount: (callback) => {
		callback();
	},
};

class UserDropdown extends React.Component {
	methods = {
		//用户dropdown按钮点击触发
		onMenuClick: (item) => {
			// if (item.key === "/logout") {
			// 	window.location.assign(item.key);
			// } else {
			// }
		},
	};
	dropdownMenu = (
		<Menu
			className={cssClass["z-main-user-menu"]}
			selectedKeys={[]}
			onClick={this.methods.onMenuClick && this.methods.onMenuClick}
		>
			<Menu.Item disabled>
				<Icon type="user" />
				个人中心
			</Menu.Item>
			<Menu.Item disabled>
				<Icon type="setting" />
				设置
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="/logout">
				<Icon type="logout" />
				退出登录
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
export default ZmainHOC(pageConfig);
```

## 重点

在主页中定义了两种打开右边窗口的模式，如需调用打开右边窗口和调用显示 loading 的方法请<a href="/main/context-doc/ZerodMainContext-doc">查看上下文 ZerodMainContext</a>

## pageConfig

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>leftExpandWidth</td>
			<td>左侧栏展开时的宽度</td>
			<td>string | number</td>
			<td>--</td>
		</tr>
		<tr>
			<td>theme</td>
			<td>主题</td>
			<td>light | dark | mazarine</td>
			<td>light</td>
		</tr>
		<tr>
			<td>logo</td>
			<td>logo区域配置,请看下面的pageConfig.logo</td>
			<td>object</td>
			<td>'{title:"",render:()=><span>logo</span>}'</td>
		</tr>
		<tr>
			<td>mainRoutes</td>
			<td>路由配置,如[{path: "/start-doc",component: 组件,exact:是否精准匹配默认true, redirect:false,to:"/redirect-path"}];  当重定向属性redirect为true时,component无效，to属性有效</td>
			<td>array[object]</td>
			<td>[]</td>
		</tr>
		<tr>
			<td>globalLoading</td>
			<td>加载前要显示的一个全局loading</td>
			<td>Element | ReactNode | function(){return ;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>sideMenu</td>
			<td>侧边导航配置,请看下面的pageConfig.sideMenu</td>
			<td>object</td>
			<td>{}</td>
		</tr>
		<tr>
			<td>headerLeftRender</td>
			<td>右侧顶部栏左边内容的渲染钩子,参数有main组件的实例对象</td>
			<td>function(main){return ;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>headerRightRender</td>
			<td>右侧顶部栏右边内容的渲染钩子,参数有main组件的实例对象</td>
			<td>function(main){return ;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>beforeToggleCollapse</td>
			<td>侧边栏折叠按钮触发后，过渡动画之前回调,参数有折叠状态collapsed</td>
			<td>function(collapsed){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>beforeToggleCollapse</td>
			<td>侧边栏折叠按钮触发后，过渡动画之后回调,参数有折叠状态collapsed</td>
			<td>function(collapsed){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>componentDidMount</td>
			<td>main组件加载完的钩子,考虑到可能走后台接口,提供一个一定要调用的callback，这个函数可传入两个可选参数:callback(userInfo = {}, menuData = []),userInfo是用户登录后要储存的一个对象，menuData是侧边导航的数据(map结构由pageConfig.sideMenu.mapKeys对应)。$router:是一个对象，提供history和location属性</td>
			<td>function(callback,$router){}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## pageConfig.logo

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>title</td>
			<td>标题</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td>render</td>
			<td>渲染logo的钩子</td>
			<td>function(){return ;}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## pageConfig.sideMenu

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>openAllSubmenu</td>
			<td>侧边导航存在二级导航时，是否打开所有的一级导航</td>
			<td>boolean</td>
			<td>false</td>
		</tr>
		<tr>
			<td>topOtherMenu</td>
			<td>追加在上面的导航配置(map结构由pageConfig.sideMenu.mapKeys对应)，中间的导航配置是由pageConfig.componentDidMount中的callback函数注入进去的</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>bottomOtherMenu</td>
			<td>追加在下面的导航配置(map结构由pageConfig.sideMenu.mapKeys对应)</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>mapKeys</td>
			<td>导航配置的map对象key的对应，默认{ iconClass: "iconClass", path: "path", name: "name", children: "children" }</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>noParentPath</td>
			<td>为false时，菜单导航的path会取父路由的path拼接</td>
			<td>boolean</td>
			<td>false</td>
		</tr>
	</tbody>
</table>
