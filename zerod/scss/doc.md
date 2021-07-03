<!-- @routePath: /style-doc -->

# 通用样式类名

积累了一些通用的 ClassName

`zerod-admin-webpack` 脚手架中的`src/app.scss`已经全部引入 `@import '~zerod/index.scss';`，所以可以直接使用如下的所有的样式类名

## 字体颜色

```jsx
/**
 * @renderMode: inline
 * @componentName: TextColors
 * @description : colors
 */
import React from 'react';
const TextColors = () => {
    const colors = {
        'z-text-red': { name: '嫣红' },
        'z-text-orange': { name: '桔橙' },
        'z-text-yellow': { name: '明黄' },
        'z-text-olive': { name: '橄榄' },
        'z-text-green': { name: '森绿' },
        'z-text-cyan': { name: '天青' },
        'z-text-blue': { name: '海蓝' },
        'z-text-purple': { name: '姹紫' },
        'z-text-mauve': { name: '木槿' },
        'z-text-pink': { name: '桃粉' },
        'z-text-brown': { name: '棕褐' },
        'z-text-grey': { name: '玄灰' },
        'z-text-black': { name: '墨黑' },
        'z-text-darkGray': { name: '暗灰' },
        'z-text-gray': { name: '草灰' },
        'z-text-white': { name: '雅白', bg: 'z-bg-black' },
    };
    return (
        <div className="z-flex-wrap">
            {Object.keys(colors).map((key, i) => {
                return (
                    <div
                        className={key}
                        key={key}
                        className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ${colors[key]
                            .shadow || 'z-shadow-gray'} ${key} ${colors[key].bg || 'z-bg-white'}`}
                        style={{ width: '156px' }}
                    >
                        <div>{colors[key].name}</div>
                        <div>{key}</div>
                    </div>
                );
            })}
        </div>
    );
};
export default TextColors;
```

## 浅色背景

```jsx
/**
 * @renderMode: inline
 * @componentName: BgLightColor
 * @description : colors
 */
import React from 'react';
const BgLightColor = () => {
    const colors = {
        'z-bg-light-red': { name: '浅嫣红' },
        'z-bg-light-orange': { name: '浅桔橙' },
        'z-bg-light-yellow': { name: '浅明黄' },
        'z-bg-light-olive': { name: '浅橄榄' },
        'z-bg-light-green': { name: '浅森绿' },
        'z-bg-light-cyan': { name: '浅天青' },
        'z-bg-light-blue': { name: '浅海蓝' },
        'z-bg-light-purple': { name: '浅姹紫' },
        'z-bg-light-mauve': { name: '浅木槿' },
        'z-bg-light-pink': { name: '浅桃粉' },
        'z-bg-light-brown': { name: '浅棕褐' },
        'z-bg-light-grey': { name: '浅玄灰' },
    };
    return (
        <div className="z-flex-wrap">
            {Object.keys(colors).map((key, i) => {
                return (
                    <div
                        className={key}
                        key={key}
                        className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ${key} ${key.replace(
                            'z-bg-light',
                            'z-text',
                        )}`}
                        style={{ width: '156px' }}
                    >
                        <div>{colors[key].name}</div>
                        <div>{key}</div>
                    </div>
                );
            })}
        </div>
    );
};
export default BgLightColor;
```

## 深色背景

```jsx
/**
 * @renderMode: inline
 * @componentName: BgColor
 * @description : colors
 */
import React from 'react';
const BgColor = () => {
    const colors = {
        'z-bg-red': { name: '嫣红' },
        'z-bg-orange': { name: '桔橙' },
        'z-bg-yellow': { name: '明黄' },
        'z-bg-olive': { name: '橄榄' },
        'z-bg-green': { name: '森绿' },
        'z-bg-cyan': { name: '天青' },
        'z-bg-blue': { name: '海蓝' },
        'z-bg-purple': { name: '姹紫' },
        'z-bg-mauve': { name: '木槿' },
        'z-bg-pink': { name: '桃粉' },
        'z-bg-brown': { name: '棕褐' },
        'z-bg-grey': { name: '玄灰' },
        'z-bg-black': { name: '墨黑' },
        'z-bg-darkGray': { name: '暗灰' },
        'z-bg-gray': { name: '草灰' },
        'z-bg-ghostWhite': { name: '灰白', color: 'z-text-black', shadow: 'z-shadow-gray' },
        'z-bg-white': { name: '雅白', color: 'z-text-black', shadow: 'z-shadow-gray' },
    };

    return (
        <div className="z-flex-wrap">
            {Object.keys(colors).map((key, i) => {
                return (
                    <div
                        className={key}
                        key={key}
                        className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ${colors[key]
                            .shadow || 'z-shadow-blur'} ${key} ${colors[key].color || 'z-text-white'}`}
                        style={{ width: '156px' }}
                    >
                        <div>{colors[key].name}</div>
                        <div>{key}</div>
                    </div>
                );
            })}
        </div>
    );
};
export default BgColor;
```

## 渐变色背景

```jsx
/**
 * @renderMode: inline
 * @componentName: BgGradientColor
 * @description : colors
 */
import React from 'react';
const BgGradientColor = () => {
    const colors = {
        'z-bg-gradient-red': { name: '魅红' },
        'z-bg-gradient-orange': { name: '鎏金' },
        'z-bg-gradient-green': { name: '翠柳' },
        'z-bg-gradient-blue': { name: '靛青' },
        'z-bg-gradient-purple': { name: '惑紫' },
        'z-bg-gradient-pink': { name: '霞彩' },
    };
    return (
        <div className="z-flex-wrap">
            {Object.keys(colors).map((key, i) => {
                return (
                    <div
                        className={key}
                        key={key}
                        className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ${key} z-text-white z-shadow-blur`}
                        style={{ width: '180px' }}
                    >
                        <div>{colors[key].name}</div>
                        <div>{key}</div>
                    </div>
                );
            })}
        </div>
    );
};
export default BgGradientColor;
```

## 边框颜色

```jsx
/**
 * @renderMode: inline
 * @componentName: BorderColor
 * @description : colors
 */
import React from 'react';
const BorderColor = () => {
    const colors = {
        'z-bordercolor-red': { name: '嫣红' },
        'z-bordercolor-orange': { name: '桔橙' },
        'z-bordercolor-yellow': { name: '明黄' },
        'z-bordercolor-olive': { name: '橄榄' },
        'z-bordercolor-green': { name: '森绿' },
        'z-bordercolor-cyan': { name: '天青' },
        'z-bordercolor-blue': { name: '海蓝' },
        'z-bordercolor-purple': { name: '姹紫' },
        'z-bordercolor-mauve': { name: '木槿' },
        'z-bordercolor-pink': { name: '桃粉' },
        'z-bordercolor-brown': { name: '棕褐' },
        'z-bordercolor-grey': { name: '玄灰' },
        'z-bordercolor-black': { name: '墨黑' },
        'z-bordercolor-darkGray': { name: '暗灰' },
        'z-bordercolor-gray': { name: '草灰' },
        'z-bordercolor-ghostWhite': { name: '灰白' },

        'z-bordercolor-light-red': { name: '浅嫣红' },
        'z-bordercolor-light-orange': { name: '浅桔橙' },
        'z-bordercolor-light-yellow': { name: '浅明黄' },
        'z-bordercolor-light-olive': { name: '浅橄榄' },
        'z-bordercolor-light-green': { name: '浅森绿' },
        'z-bordercolor-light-cyan': { name: '浅天青' },
        'z-bordercolor-light-blue': { name: '浅海蓝' },
        'z-bordercolor-light-purple': { name: '浅姹紫' },
        'z-bordercolor-light-mauve': { name: '浅木槿' },
        'z-bordercolor-light-pink': { name: '浅桃粉' },
        'z-bordercolor-light-brown': { name: '浅棕褐' },
        'z-bordercolor-light-grey': { name: '浅玄灰' },
    };

    return (
        <div className="z-flex-wrap">
            {Object.keys(colors).map((key, i) => {
                return (
                    <div
                        className={key}
                        key={key}
                        className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ${key} ${key.replace(
                            /bordercolor(-light)?/g,
                            'text',
                        )}`}
                        style={{ width: '156px', borderWidth: '1px', borderStyle: 'solid' }}
                    >
                        <div>{colors[key].name}</div>
                        <div>{key}</div>
                    </div>
                );
            })}
        </div>
    );
};
export default BorderColor;
```

## 阴影

```jsx
/**
 * @renderMode: inline
 * @componentName: ShadowColor
 * @description : colors
 */
import React from 'react';
const ShadowColor = () => {
    const colors = {
        'z-shadow-red': { name: '嫣红' },
        'z-shadow-orange': { name: '桔橙' },
        'z-shadow-yellow': { name: '明黄' },
        'z-shadow-olive': { name: '橄榄' },
        'z-shadow-green': { name: '森绿' },
        'z-shadow-cyan': { name: '天青' },
        'z-shadow-blue': { name: '海蓝' },
        'z-shadow-purple': { name: '姹紫' },
        'z-shadow-mauve': { name: '木槿' },
        'z-shadow-pink': { name: '桃粉' },
        'z-shadow-brown': { name: '棕褐' },
        'z-shadow-grey': { name: '玄灰' },
        'z-shadow-black': { name: '墨黑' },
        'z-shadow-gray': { name: '草灰' },
    };

    return (
        <div className="z-flex-wrap">
            <div
                className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 z-shadow-blur z-bg-red z-text-white`}
                style={{ width: '200px' }}
            >
                <div>自动根据背景色的阴影</div>
                <div>z-shadow-blur</div>
            </div>
            <div
                className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 z-shadow-blur z-bg-mauve z-text-white`}
                style={{ width: '200px' }}
            >
                <div>自动根据背景色的阴影</div>
                <div>z-shadow-blur</div>
            </div>
            <div
                className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 z-shadow-blur z-bg-pink z-text-white`}
                style={{ width: '200px' }}
            >
                <div>自动根据背景色的阴影</div>
                <div>z-shadow-blur</div>
            </div>
            {Object.keys(colors).map((key, i) => {
                return (
                    <div
                        className={key}
                        key={key}
                        className={`z-text-center z-padding-20 z-margin-right-10 z-margin-bottom-10 ${key} z-bg-white ${key.replace(
                            'shadow',
                            'text',
                        )}`}
                        style={{ width: '156px' }}
                    >
                        <div>{colors[key].name}</div>
                        <div>{key}</div>
                    </div>
                );
            })}
        </div>
    );
};
export default ShadowColor;
```

## 面板

```jsx
/**
 * @renderMode: inline
 * @componentName: DefaultPanel
 * @description : colors
 */
import React from 'react';
import { Row, Col } from 'antd';
const DefaultPanel = () => {
    return (
        <Row gutter={40}>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body">无边框面板</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-panel-border">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body">有边框面板</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-panel-border is-radius-top">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body">有边框+只有上圆角</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-panel-border is-radius-bottom">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body">有边框+只有下圆角</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-no-radius">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body">四周无圆角</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body is-no-padding">面板body全无padding</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body is-no-padding-sides">面板body左右无padding</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15">
                    <div className="z-panel-heading">标题</div>
                    <div className="z-panel-body is-no-padding-vertical">面板body上下无padding</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15">
                    <div className="z-panel-heading z-bg-light-olive z-text-olive">标题z-bg-light-olive</div>
                    <div className="z-panel-body">无边框面板</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-orange">
                    <div className="z-panel-heading z-bg-light-orange z-bordercolor-light-orange z-text-orange">
                        标题z-bg-light-orange z-bordercolor-light-orange
                    </div>
                    <div className="z-panel-body">有边框面板</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-pink">
                    <div className="z-panel-heading z-bg-light-pink z-bordercolor-light-pink z-text-pink">
                        标题z-bg-light-pink
                    </div>
                    <div className="z-panel-body">有边框面板</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-cyan">
                    <div className="z-panel-heading z-bg-light-cyan z-bordercolor-light-cyan z-text-cyan">
                        标题z-bg-light-cyan z-bordercolor-cyan
                    </div>
                    <div className="z-panel-body">有边框面板</div>
                </div>
            </Col>
            <Col span={12}>
                <div className="z-panel z-margin-bottom-15 is-panel-border z-bordercolor-light-grey">
                    <div className="z-panel-heading z-bg-light-grey z-bordercolor-light-grey z-text-grey">
                        标题z-bg-light-orange z-bordercolor-pink
                    </div>
                    <div className="z-panel-body">有边框面板</div>
                </div>
            </Col>
        </Row>
    );
};
export default DefaultPanel;
```

## z-info

```jsx
/**
 * @renderMode: inline
 * @componentName: DefaultInfo
 * @description : colors
 */
import React from 'react';
const DefaultInfo = () => {
    return (
        <div>
            <dl className="z-info">
                <dt className="z-info-left">
                    <span className="z-margin-bottom-10">标题1</span>
                </dt>
                <dd className="z-info-right">
                    <span className="z-margin-bottom-10">
                        为了使我们有更高的可控性，即自由控制顶点位置，WebGL把这个权力交给了我们，这就是可编程渲染管线（不用理解）。
                    </span>
                </dd>
            </dl>
            <dl className="z-info">
                <dt className="z-info-left">
                    <span className="z-margin-bottom-10">标题2</span>
                </dt>
                <dd className="z-info-right">
                    <span className="z-margin-bottom-10">我们引入了一个新的名词，叫“顶点着色器”</span>
                </dd>
            </dl>
            <div className="z-margin-top-15">
                <dl className="z-info z-bordercolor-light-mauve">
                    <dt className="z-info-left z-bg-light-mauve z-bordercolor-light-mauve">
                        <span className="z-margin-bottom-10">标题2</span>
                    </dt>
                    <dd className="z-info-right">
                        <span className="z-margin-bottom-10">我们引入了一个新的名词，叫“顶点着色器”</span>
                    </dd>
                </dl>
                <dl className="z-info z-bordercolor-light-brown">
                    <dt className="z-info-left z-bg-light-brown z-bordercolor-light-brown">
                        <span className="z-margin-bottom-10">标题2</span>
                    </dt>
                    <dd className="z-info-right">
                        <span className="z-margin-bottom-10">我们引入了一个新的名词，叫“顶点着色器”</span>
                    </dd>
                </dl>
                <dl className="z-info z-bordercolor-light-green">
                    <dt className="z-info-left z-bg-light-green z-bordercolor-light-green">
                        <span className="z-margin-bottom-10">标题2</span>
                    </dt>
                    <dd className="z-info-right">
                        <span className="z-margin-bottom-10">我们引入了一个新的名词，叫“顶点着色器”</span>
                    </dd>
                </dl>
            </div>
        </div>
    );
};
export default DefaultInfo;
```

## 元素浮动

```html
<div className="z-clear-fix">
    //清除浮动
    <div className="z-float-left"></div>
    //左浮动
    <div className="z-float-right"></div>
    //右浮动
</div>
```

## 字体大小

定义了 12-50px 的字体大小

```html
<div className="z-font-size-16">16像素大小</div>
<div className="z-font-size-16-important">权重优先</div>
```

## 文本对齐

定义了文本对齐的 clasName

```html
<div className="z-text-left">文本居左</div>
<div className="z-text-center">文本居中</div>
<div className="z-text-right">文本居右</div>
<div className="z-text-underline">文字下划线</div>
<div className="z-text-underline-hover">文字hover后显示下划线</div>
<div className="z-vertical-top">文字顶部对齐</div>
<div className="z-vertical-middle">文字中间对齐</div>
<div className="z-vertical-bottom">文字底部对齐</div>
```

## margin 和 padding 值

定义了 0-50px 的 margin 和 padding 值的 className

如需提高权重，加后缀："-important"

`z-margin-10` : 四个方位 margin 值为 10px

`z-margin-left-10` : margin-left 为 10px

`z-margin-top-10` : margin-top 为 10px

`z-margin-right-10` : margin-right 为 10px

`z-margin-bottom-10` : margin-bottom 为 10px

`z-margin-bottom-10-important` :权重优先

同理`padding`值 ：

`z-padding-10` : 四个方位 padding 值为 10px

## flex 盒子(更多请了解弹性布局)

```html
//z-flex-1只到z-flex-5
<div className="z-flex"> //启用弹性盒子
    <div className="z-flex-1"></div> //占比1
    <div className="z-flex-2"></div> //占比2
</div>

//盒子子元素挤不下自动转行
<div className="z-flex-wrap">
    <div className="z-flex-1"></div> //占比1
    <div className="z-flex-2"></div> //占比2
</div>

// 盒子子元素底部对齐
<div className="z-flex-items-end">
    <div className="z-flex-1"></div> //占比1
    <div className="z-flex-2"></div> //占比2
</div>

//盒子子元素水平居中
<div className="z-flex-items-h-center">
    //内部子元素呈水平居中
    <div></div>
    <div></div>
</div>

//盒子子元素垂直居中
<div className="z-flex-items-v-center">
    //内部子元素呈垂直居中
    <div></div>
    <div></div>
</div>

//盒子子元素水平垂直居中
<div className="z-flex-items-center">
    //内部子元素呈水平垂直居中
    <div></div>
    <div></div>
</div>

//子元素自身高度跟随内容
<div className="z-flex"> //父元素
    <div>子元素默认高度占父元素100%</div>
    <div className="z-flex-self-baseline">子元素高度跟随内容高度</div>
</div>

//子元素 两端对齐
<div className="z-flex-space-between"> //父元素
    <div>最左</div>
    <div>中间</div>
    <div>最右</div>
</div>

//子元素自身垂直居中
<div className="z-flex"> //父元素
    <div></div>
    <div></div>
    <div className="z-flex-self-center"只有我是垂直居中</div>
</div>

//纵向排列方式
<div className="z-flex-direction-column">
    <div>上</div>
    <div>中</div>
    <div>下</div>
</div>
```

## 定义了 em 单位的字体缩进

1-10em 单位的字体缩进

如需提高权重，加后缀："-important"

```html
<div className="z-text-indent-2">文本</div>
```
