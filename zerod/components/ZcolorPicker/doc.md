<!-- @routePath:/component-doc/ZcolorPicker-doc -->

# 颜色选择器：ZcolorPicker

`ZcolorPicker` 是一个颜色选择器控件，支持在 `Form` 、 `Zform` 等表单中使用

依赖 <a href="http://casesandberg.github.io/react-color/" target="_blank">react-color 库</a> ，目前只选用了 `react-color` 的 `SketchPicker` 组件

```jsx
/**
 * @renderMode: inline
 * @componentName: ZcolorPickerDemoe
 * @description: 基本使用
 * @title: ZcolorPicker
 */

import React from 'react';
import { ZcolorPicker } from 'zerod';
class ZcolorPickerDemoe extends React.PureComponent {
    state = {
        color: '#FFFFFF',
    };
    colorChange = (value) => {
        console.log(value);
    };
    picker = {
        style: { width: '200px' },
        valueType: 'hex',
        allowClear: true,
    };
    render() {
        return <ZcolorPicker {...this.picker} value={this.state.state} onChange={this.colorChange} />;
    }
}
export default ZcolorPickerDemoe;
```

## ZcolorPicker 的 props

| 参数         | 说明                                                                                 | 类型               | 默认值  |
| ------------ | ------------------------------------------------------------------------------------ | ------------------ | ------- |
| valueType    | 颜色值类型, hex: 十六进制模式，rgb：RGB 模式(包括 rgba)                              | hex \| rgb         | hex     |
| value        | 颜色值，支持十六进制和 RGB 模式，如 "#FFFFFF"、"rgba(255, 214, 21, 0.9)"             | string             | --      |
| defaultValue | 第一次渲染的颜色值，支持十六进制和 RGB 模式，如 "#FFFFFF"、"rgba(255, 214, 21, 0.9)" | string             | --      |
| onChange     | 颜色值改变后触发                                                                     | (value, color)=>{} | --      |
| disabled     | 是否禁用                                                                             | boolean            | false   |
| size         | 大小                                                                                 | large \| small     | default |
