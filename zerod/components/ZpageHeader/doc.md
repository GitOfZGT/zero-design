<!-- @routePath:/component-doc/ZpageHeader-doc -->

# 页面头部组件：ZpageHeader

```jsx
/**
 * @renderMode: rightModal
 * @componentName: PageHeader1
 * @description: 置顶头部
 * @title: 基本使用
 */
import React from 'react';

import { ZpageHeader, ZpageWrapper } from 'zerod';
import { Icon } from 'antd';

class PageHeader extends React.PureComponent {
    pageHeader = {
        trademark: <Icon type="cloud" />,
        // array>[object] | null,如果是null则不显示面包屑
        breadcrumbRoutes: [
            { path: 'config', name: '案例', link: false },
            { path: 'serviceWithTableList', name: '表格列表', link: true },
        ],
        // any
        title: '服务器配置',
        //any
        content:
            '微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！',
        //element | node
        rightMoreContent: <div>右边内容</div>,
    };
    render() {
        return (
            <>
                {' '}
                <ZpageHeader
                    trademark={this.pageHeader.trademark}
                    title={this.pageHeader.title}
                    content={this.pageHeader.content}
                    rightMoreContent={this.pageHeader.rightMoreContent}
                    breadcrumbRoutes={this.pageHeader.breadcrumbRoutes}
                    ceiling={true}
                />
                <div className="z-panel" style={{ height: '1000px', margin: '20px' }}>
                    <div className="z-panel-body">内容</div>
                </div>
            </>
        );
    }
}
const Main = PageHeader;
// @import : ./rootRouter.md
```

1、追加更多内容

<div class="z-demo-box" data-render="demo2" data-title="使用children属性"></div>

```jsx
/**
 * @renderMode: inline
 * @componentName: PageHeader2
 * @description: 非置顶头部
 * @title: 追加更多内容
 */
import React from 'react';

import { ZpageHeader, Ztabs } from 'zerod';
import { Icon } from 'antd';

class PageHeader extends React.PureComponent {
    tabPanes = [
        { tab: '基本信息', key: '1', content: null },
        { tab: '配置信息', key: '2', content: null },
        {
            tab: '其他信息',
            key: '3',
            content: null,
        },
    ];
    pageHeader = {
        trademark: <Icon type="cloud" />,
        // array>[object] | null,如果是null则不显示面包屑
        breadcrumbRoutes: [
            { path: 'config', name: '案例', link: false },
            { path: 'serviceWithTableList', name: '表格列表', link: true },
        ],
        // any
        title: '服务器配置',
        //any
        content:
            '微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！',
        //element | node
        rightMoreContent: <div>右边内容</div>,
        children: () => {
            return <Ztabs tabPanes={this.tabPanes} />;
        },
        ceiling: false,
    };

    render() {
        return (
            <div className="app-body" style={{ padding: '20px' }}>
                <ZpageHeader {...this.pageHeader} />
            </div>
        );
    }
}

const Main = PageHeader;
// @import : ./rootRouter.md
```

## ZpageHeader 的 Props

可追加`className`、`style`

| 参数                                                              | 说明                                                | 类型                                   | 默认值 |
| ----------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------- | ------ |
| trademark                                                         | 图标\|图示                                          | any                                    | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> title            | 头部标题                                            | any                                    | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> content          | 头部描述说明                                        | any                                    | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> rightMoreContent | 标题列的右边可添加更多内容                          | React.element \| function \| ReactNode | --     |
| breadcrumbParams                                                  | 面包屑路由参数                                      | any                                    | --     |
| breadcrumbRoutes                                                  | 面包屑 routes，每个对象包括 path、name、link 等属性 | array>[object] \| null \| --           |
| <i class="zero-icon zerod-shengchangzhouqi"></i> children         | 更多内容                                            | any \| function(){return 内容}         | --     |
| ceiling                                                           | 是否脱离滚动区域                                    | boolean                                | false  |
