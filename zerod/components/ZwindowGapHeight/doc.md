<!-- @routePath:/component-doc/ZwindowGapHeight-doc -->

# ZwindowGapHeight

`ZwindowGapHeight`是给子 dom 元素设置: height(高度) = 视窗高度 - 子元素当前距离视窗顶部距离 - gap

```jsx
/**
 * @renderMode: rightModal
 * @componentName: Demo1
 * @title: 基本使用
 * @description: 简单配置
 * @scroll: false
 *
 */
import React from 'react';
import { ZwindowGapHeight, ZpageWrapper } from 'zerod';
import { Row, Col } from 'antd';
export default class MyComponent extends React.PureComponent {
    render() {
        return (
            <ZpageWrapper
                pageHeader={{
                    show: true,
                    title: '',
                    content: '',
                }}
            >
                <div>
                    <Row gutter={16}>
                        <Col md={10}>
                            <ZwindowGapHeight querySelector=".z-panel" gap={20}>
                                {/* 此节点必须是html元素 */}
                                <div>
                                    {/* 此节点可以是任意内容 */}
                                    <div className="z-panel">
                                        <div className="z-panel-heading">panel-heading</div>
                                        <div className="z-panel-body">panel-body</div>
                                    </div>
                                </div>
                            </ZwindowGapHeight>
                        </Col>
                        <Col md={14}>右边</Col>
                    </Row>
                </div>
            </ZpageWrapper>
        );
    }
}
```

## ZwindowGapHeight 的 props

| 参数          | 说明                                                                                          | 类型              | 默认值 |
| ------------- | --------------------------------------------------------------------------------------------- | ----------------- | ------ |
| children      | 必须是 HTMLElement,如 section、div 等                                                         | element           | --     |
| querySelector | 实际要设置 height 的那个元素的选择器（如 '.z-panel'）, 或者 具体的 dom 元素 , 默认取 children | string \| element | --     |
| gap           | 要减去的底部距离                                                                              | number            | 0      |
