<!-- @routePath:/component-doc/Zviewer-doc -->

# 图片查看器：Zviewer

`Zviewer`展示一组缩略图，点击查看大图

1、如果想定义显示缩略图大小，请使用样式覆盖，比如 添加 `className="pic-list"`, 样式中：`.pic-list>li{width:200px;height:180px;}`


```jsx
/**
 * @renderMode: inline
 * @componentName: Myjavascript
 * @description: 示例
 * @title: Zviewer
 */
import React from 'react';
import { Zviewer } from 'zerod';

class Myjavascript extends React.PureComponent {
    state = {
        urls: [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=772200601,462145758&fm=26&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3810345217,1257588557&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=356986022,721217029&fm=26&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1174892709,2540345903&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3675547813,1268056532&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1520783822,2456875881&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=887135549,123691985&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=331287437,1006101388&fm=26&gp=0.jpg',
        ],
    };
    render() {
        return <Zviewer urls={this.state.urls} className={'pic-list'} />;
    }
}
export default Myjavascript;
```

## Zviewer 的 props

可追加`className`

| 参数         | 说明                                                                                                                     | 类型                           | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------ |
| urls         | 多张图片的路径，如果缩略图和原图的路径不一样，可以使用 object 方式：[{url:"原图路径",thumb:"缩略图路径",alt:"图片描述"}] | array[string] \| array[object] | --     |
| showThumbAlt | 是否在缩略图下显示图片的 alt                                                                                             | Boolean                        | true   |
