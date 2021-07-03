<!-- @routePath:/component-doc/ZpartSide-doc -->

# 局部侧边：ZpartSide

只能在 ZerodMainContext 的 showRightModal()方法打开的组件 或者 ZmainHOC 的路由组件内使用

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
/**
 * @renderMode: rightModal
 * @componentName: Demo1
 * @title: 基本使用
 * @description: 简单配置
 * @scroll: true
 *
 */
import React from 'react';
import { ZpartSide, ZpanelTitle, ZpageWrapper } from 'zerod';
export default class Myjavascript extends React.PureComponent {
    render() {
        return (
            <>
                <ZpartSide>
                    <div className="z-padding-15">
                        <div className="z-panel" style={{ height: '1000px' }}>
                            <div className="z-panel-body">
                                <ZpanelTitle>侧栏内容</ZpanelTitle>
                            </div>
                        </div>
                    </div>
                </ZpartSide>
                <ZpageWrapper>
                    <div className="z-panel" style={{ height: '1000px' }}>
                        <div className="z-panel-body">
                            <ZpanelTitle>滚动区域的内容</ZpanelTitle>
                        </div>
                    </div>
                </ZpageWrapper>
            </>
        );
    }
}
```

## ZpartSide 的 props

可追 `className` 、 `style`

| 参数        | 说明                                     | 类型          | 默认值 |
| ----------- | ---------------------------------------- | ------------- | ------ |
| width       | 侧边宽度                                 | string        | 200px  |
| position    | 侧边方向                                 | left \| right | left   |
| isKeepAlive | 是否在 keepAlive 的路由组件中使用        | boolean       | false  |
