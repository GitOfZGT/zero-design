<!-- @routePath: /component-doc/Ztabs-doc -->

# 标签页：Ztabs

`Ztabs`是将`antd`的`Tabs`、`Tabs.TabPane` 的结构转成数据结构直接渲染的方式，

```jsx
/**
 * @renderMode: inline
 * @componentName: ZtabsDemo
 * @description: Ztabs基本使用的示例
 * @title: Ztabs
 */
import React from 'react';
import { Ztabs } from 'zerod';

class Myjavascript extends React.PureComponent {
    tabPanes = [
        { tab: '基本信息', key: '1', content: '基本信息内容' },
        { tab: '配置信息', key: '2', content: '配置信息内容' },
        {
            tab: '其他信息',
            key: '3',
            content: () => {
                return '其他内容';
            },
        },
    ];
    render() {
        return <Ztabs tabPanes={this.tabPanes} />;
    }
}
export default Myjavascript;
```

## Ztabs 的 Props

`Ztabs`除了`tabPanes`参数，还有同<a href="https://ant.design/components/tabs-cn/">Antd 的 Tabs 组件的参数</a>

| 参数     | 说明                                                                                                       | 类型          | 默认值 |
| -------- | ---------------------------------------------------------------------------------------------------------- | ------------- | ------ |
| tabPanes | 选项卡数据，数据结构有{tab ：tab 名称，key:对应 Antd 的 Tabs 组件 activeKey，content：string \| ()=>内容 } | array[object] | --     |
