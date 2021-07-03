```jsx
/**
 * @renderMode: rightModal
 * @componentName: MainDemo
 * @title: 基本使用
 * @description: 简单配置
 * @scroll: false
 *
 */
// react
import React from 'react';
import PropTypes from 'prop-types';
// zerod
import { Zlayout, ZmainHOC } from 'zerod';
// @import: ./routes.md

const pageConfig = {
    // 左侧边展开时的宽度
    leftExpandWidth: 280,
    // 主页的主题 light | dark | mazarine
    theme: 'mazarine',
    // logt区域
    logo: {
        title: '',
        render: () => {
            return <span className="z-padding-15">logo</span>;
        },
    },
    // 顶部栏右边内容的渲染钩子
    headerRightRender: (tool) => {
        return <UserDropdown />;
    },
    // 路由配置信息
    mainRoutes,
    // 侧边导航设置
    sideMenu: {
        //是否打开所有的submenu
        openAllSubmenu: true,
        //
        mapKeys: { iconClass: 'iconClass', path: 'permUrl', name: 'permName', children: 'children' },
    },
    // 组件加载完成的钩子
    componentDidMount: (callback) => {
        window.appPortalPath = false;
        callback(
            {
                userDO: { id: 13, userName: 'admin', userAcount: 'admin' },
            },
            myMenu,
        );
    },
};
const Main = ZmainHOC(pageConfig);

// @import : ./rootRouter.md

```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: MainDemoHeaderBtn
 * @title: 右顶部按钮
 * @description: 使用Zlayout.ZheaderBtn添加按钮
 * @scroll: false
 *
 */
// react
import React from 'react';
import PropTypes from 'prop-types';
// zerod
import { Zlayout, ZmainHOC } from 'zerod';
// @import: ./routes.md

const pageConfig = {
    // 左侧边展开时的宽度
    leftExpandWidth: 280,
    // 主页的主题 light | dark | mazarine
    theme: 'mazarine',
    // logt区域
    logo: {
        title: '',
        render: () => {
            return <span className="z-padding-15">logo</span>;
        },
    },
    // 顶部栏左边内容的渲染钩子
    headerLeftRender: (tool) => {
        return <Zlayout.ZheaderBtn className="z-margin-right-15">左边</Zlayout.ZheaderBtn>;
    },
    // 顶部栏右边内容的渲染钩子
    headerRightRender: (tool) => {
       
        return (
            <>
                <Zlayout.ZheaderBtn className="z-margin-right-15">按钮1</Zlayout.ZheaderBtn>
                <Zlayout.ZheaderBtn className="z-margin-right-15">按钮2</Zlayout.ZheaderBtn>
                <UserDropdown />
            </>
        );
    },
    // 路由配置信息
    mainRoutes,
    // 侧边导航设置
    sideMenu: {
        //是否打开所有的submenu
        openAllSubmenu: true,
        //
        mapKeys: { iconClass: 'iconClass', path: 'permUrl', name: 'permName', children: 'children' },
    },
    // 组件加载完成的钩子
    componentDidMount: (callback) => {
        window.appPortalPath = false;
        callback(
            {
                userDO: { id: 13, userName: 'admin', userAcount: 'admin' },
            },
            myMenu,
        );
    },
};
const Main = ZmainHOC(pageConfig);
// @import : ./rootRouter.md
```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: MainHideHeader
 * @title: 全局隐藏顶部
 * @description: 存在window.appPortalPath时就会隐藏顶部
 * @scroll: false
 *
 */
// react
import React from 'react';
import PropTypes from 'prop-types';
// zerod
import { Zlayout, ZmainHOC } from 'zerod';

// @import: ./routes.md

const pageConfig = {
    // 左侧边展开时的宽度
    leftExpandWidth: 280,
    // 主页的主题 light | dark | mazarine
    theme: 'mazarine',
    // logt区域
    logo: {
        title: '',
        render: () => {
            return <span className="z-padding-15">logo</span>;
        },
    },
    // 顶部栏左边内容的渲染钩子
    headerLeftRender: (tool) => {
        return <Zlayout.ZheaderBtn className="z-margin-right-15">左边</Zlayout.ZheaderBtn>;
    },
    // 顶部栏右边内容的渲染钩子
    headerRightRender: (tool) => {
        
        return (
            <>
                <Zlayout.ZheaderBtn className="z-margin-right-15">按钮1</Zlayout.ZheaderBtn>
                <Zlayout.ZheaderBtn className="z-margin-right-15">按钮2</Zlayout.ZheaderBtn>
                <UserDropdown />
            </>
        );
    },
    // 路由配置信息
    mainRoutes,
    // 侧边导航设置
    sideMenu: {
        //是否打开所有的submenu
        openAllSubmenu: true,
        //
        mapKeys: { iconClass: 'iconClass', path: 'permUrl', name: 'permName', children: 'children' },
    },
    // 组件加载完成的钩子
    componentDidMount: (callback) => {
        window.appPortalPath = '/root';
        callback(
            {
                userDO: { id: 13, userName: 'admin', userAcount: 'admin' },
            },
            myMenu,
        );
    },
};
const Main = ZmainHOC(pageConfig);
// @import : ./rootRouter.md
```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: MainOpenModes
 * @title: 打开导航path的模式
 * @description: 在menuData结构中可配置openMode属性
 * @scroll: false
 *
 */
// react
import React from 'react';
import PropTypes from 'prop-types';
// zerod
import { Zlayout, ZmainHOC } from 'zerod';
window.appPortalPath = false;
const Start = (props) => {
    return <div className="z-padding-20">第一页</div>;
};
const Second = (props) => {
    return <div className="z-padding-20">第二页</div>;
};
const mainRoutes = [
    {
        path: '/start-doc',
        component: Start,
    },
    {
        path: '/second-doc',
        component: Second,
    },
];
const myMenu = [
    {
        permUrl: 'start-doc',
        permName: '开始',
        iconClass: 'home',
    },
    {
        permUrl: 'second-doc',
        permName: '第二页',
    },
    {
        permUrl: 'https://www.baidu.com/',
        permName: '用 iframe 打开1',
        openMode: 'iframe',
    },
    {
        permUrl: 'https://tool.oschina.net/regex/',
        permName: '用 iframe 打开2',
        openMode: 'iframe',
    },
    {
        permUrl: 'https://www.baidu.com/',
        permName: '用 iframe-full 打开',
        openMode: 'iframe-full',
    },
    {
        permUrl: 'https://www.baidu.com/',
        permName: '用 newWindow 打开',
        openMode: 'newWindow',
    },
];

const pageConfig = {
    // 左侧边展开时的宽度
    leftExpandWidth: 280,
    // 主页的主题 light | dark | mazarine
    theme: 'mazarine',
    // logt区域
    logo: {
        title: '',
        render: () => {
            return <span className="z-padding-15">logo</span>;
        },
    },
    // 路由配置信息
    mainRoutes,
    // 侧边导航设置
    sideMenu: {
        //是否打开所有的submenu
        openAllSubmenu: true,
        //
        mapKeys: { iconClass: 'iconClass', path: 'permUrl', name: 'permName', children: 'children' },
    },
    // 组件加载完成的钩子
    componentDidMount: (callback) => {
        window.appPortalPath = false;
        callback(
            {
                userDO: { id: 13, userName: 'admin', userAcount: 'admin' },
            },
            myMenu,
        );
    },
};
const Main = ZmainHOC(pageConfig);
// @import : ./rootRouter.md
```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: MainParent
 * @title: Main不作为路由组件
 * @description: tool.getWrapperProps()可以取得Main组件的props
 * @scroll: false
 *
 */
// react
import React from 'react';
import PropTypes from 'prop-types';
// zerod
import { Zlayout, ZmainHOC } from 'zerod';

// @import: ./routes.md

const pageConfig = {
    // 左侧边展开时的宽度
    leftExpandWidth: 280,
    // 主页的主题 light | dark | mazarine
    theme: 'mazarine',
    // logt区域
    logo: {
        title: '',
        render: () => {
            return <span className="z-padding-15">logo</span>;
        },
    },
    // 顶部栏左边内容的渲染钩子
    headerLeftRender: (tool) => {
        return <Zlayout.ZheaderBtn className="z-margin-right-15">左边</Zlayout.ZheaderBtn>;
    },
    // 顶部栏右边内容的渲染钩子
    headerRightRender: (tool) => {
        return (
            <>
                <Zlayout.ZheaderBtn
                    onClick={() => {
                        console.log(tool.getWrapperProps());
                    }}
                    className="z-margin-right-15"
                >
                    按钮getWrapperProps
                </Zlayout.ZheaderBtn>
                <Zlayout.ZheaderBtn className="z-margin-right-15">按钮2</Zlayout.ZheaderBtn>
                <UserDropdown />
            </>
        );
    },
    // 路由配置信息
    mainRoutes,
    // 侧边导航设置
    sideMenu: {
        //是否打开所有的submenu
        openAllSubmenu: true,
        //
        mapKeys: { iconClass: 'iconClass', path: 'permUrl', name: 'permName', children: 'children' },
    },
    // 组件加载完成的钩子
    componentDidMount: (callback) => {
        window.appPortalPath = false;
        callback(
            {
                userDO: { id: 13, userName: 'admin', userAcount: 'admin' },
            },
            myMenu,
        );
    },
};
const MainChild = ZmainHOC(pageConfig);
const Main = (props) => {
    //RouteMain作为路由组件，需要把props转发给Main，然后可以添加任意其他的props供pageConfig内的参数使用
    return <MainChild {...props} myName="SuperMain" />;
};

// @import : ./rootRouter.md

```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: MainCustom
 * @title: 自定义布局
 * @description: 能使用<span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">上下文/ZerodMainContext</span>，ZmainHOC 需要的参数就不是 pageConfig 参数配置 ，而是自己写的 Main 组件
 * @scroll: false
 *
 */
// react
import React from 'react';
import PropTypes from 'prop-types';
// zerod
import { Zlayout, ZmainHOC } from 'zerod';

// @import: ./routes.md

class MainCustom extends React.Component {
    state = {
        isCollapse: false,
    };
    componentDidMount() {}
    render() {
        const { isCollapse } = this.state;
        //自定义主页布局，经过ZmainHOC包装的组件，会this.props.getSideMenuTemplate和this.props.getMaimRouteTemplate两个方法
        return (
            <Zlayout>
                <Zlayout.Zheader style={{ backgroundColor: '#585D64', color: '#ffffff' }}>
                    <div className="z-padding-10">logo</div>
                </Zlayout.Zheader>
                <Zlayout.Zbody scroll={false}>
                    <Zlayout flexRow>
                        <Zlayout width={isCollapse ? '80px' : '320px'}>
                            {this.props.getSideMenuTemplate({
                                theme: 'dark',
                                isCollapse,
                                openAllSubmenu: true,
                            })}
                        </Zlayout>
                        <Zlayout>
                            {this.props.getMaimRouteTemplate('my_main_body', {
                                onCollapseClick: this.onCollapseClick,
                            })}
                        </Zlayout>
                    </Zlayout>
                </Zlayout.Zbody>
            </Zlayout>
        );
    }
    onCollapseClick = (toggleCollapse) => {
        const isCollapse = !this.state.isCollapse;
        this.setState({
            isCollapse,
        });
        toggleCollapse(isCollapse);
    };
}
const Main = ZmainHOC(MainCustom, (callback) => {
    //同pageConfig的componentDidMount函数
    callback(
        //保存的用户信息
        {},
        //侧边导航数据
        myMenu,
        //mapKeys
        { iconClass: 'permIconUrl', path: 'permUrl', name: 'permName', children: 'children' },
        //路由配置数据
        mainRoutes,
    );
});

// @import : ./rootRouter.md

```
