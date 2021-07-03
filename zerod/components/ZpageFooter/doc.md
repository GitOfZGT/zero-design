<!-- @routePath:/component-doc/ZpageFooter-doc -->

# 页脚组件：ZpageFooter

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
/**
 * @renderMode: inline
 * @componentName: PageHeader2
 * @description: 非置顶头部
 * @title: 追加更多内容
 */
import React from 'react';
import { ZpageFooter } from 'zerod';
import { Icon } from 'antd';
class PageFooter extends React.PureComponent {
    footerLinks = [
        {
            key: 'hua-cloud',
            title: 'xxx有限公司',
            href: 'http://www.baidu.cn/',
            blankTarget: true,
        },
        {
            key: 'szhcf',
            title: 'xxx集团',
            href: 'http://www.baidu.cn/',
            blankTarget: true,
        },
    ];
    footerCopyright = () => (
        <div>
            Copyright <Icon type="copyright" /> 2021 版权
        </div>
    );
    render() {
        return (
            <div className="app-body" style={{ padding: '20px' }}>
                <ZpageFooter links={this.footerLinks} copyright={this.footerCopyright} />
            </div>
        );
    }
}

export default PageFooter;
```

## ZpageFooter 的 Props

可追加`className`、`style`

| 参数                                                       | 说明                                     | 类型               | 默认值 |
| ---------------------------------------------------------- | ---------------------------------------- | ------------------ | ------ |
| links                                                      | 快速链接                                 | array              | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> copyright | 版权信息                                 | string \| function | --     |
