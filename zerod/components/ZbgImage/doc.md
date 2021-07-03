<!-- @routePath:/component-doc/ZbgImage-doc -->

# 展示图片：ZbgImage

`ZbgImage`是以背景图的方式展示一张图片

```jsx
/**
 * @renderMode: inline
 * @componentName: ZbgImageDemo
 * @description: 基本使用
 * @title: ZbgImageDemo
 */

import React from 'react';
import { ZbgImage } from 'zerod';
import { Row, Col } from 'antd';
class Myjavascript extends React.PureComponent {
    render() {
        const height = '300px';
        return (
            <Row gutter={20}>
                <Col span={8}>
                    <ZbgImage style={{ height: height }} />
                    <p className="z-text-center z-margin-top-15">
                        <span className="z-text-gray z-margin-left-5">默认：无url</span>
                    </p>
                </Col>
                <Col span={8}>
                    <ZbgImage
                        style={{ height: height }}
                        url="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1538842050,2735915256&fm=26&gp=0.jpg"
                    />
                    <p className="z-text-center z-margin-top-15">
                        <span className="z-text-gray z-margin-left-5">有url，position:"center"</span>
                    </p>
                </Col>
                <Col span={8}>
                    <ZbgImage
                        position="top"
                        style={{ height: height }}
                        url="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=447570595,1994839721&fm=26&gp=0.jpg"
                    />
                    <p className="z-text-center z-margin-top-15">
                        <span className="z-text-gray z-margin-left-5">有url，position:"top"</span>
                    </p>
                </Col>
            </Row>
        );
    }
}
export default Myjavascript;
```

## ZbgImage 的 props

可追 `className`、`style`

| 参数     | 说明                                         | 类型          | 默认值 |
| -------- | -------------------------------------------- | ------------- | ------ |
| url      | 背景图片路径                                 | string        | --     |
| position | 背景图片在可视区域的位置                     | center \| top | center |
| onClick  | 点击事件                                     | funtion(e){}  | --     |
| children | 可选择放一些子内容通过绝对定位浮于背景图之上 | ReactNode     | --     |
