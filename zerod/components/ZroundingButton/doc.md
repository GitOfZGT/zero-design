<!-- @routePath:/component-doc/ZroundingButton-doc -->

# 环绕按钮：ZroundingButton

`ZroundingButton` 环绕在四周的更多按钮展示方式

```jsx
/**
 * @renderMode: inline
 * @componentName: ZroundingButton
 * @description: 基本使用
 * @title: ZroundingButton
 */
import React from 'react';
import { Button, Icon } from 'antd';
import { ZroundingButton } from 'zerod';
export default class Myjavascript extends React.Component {
    onClick = (item) => {
        message.success('点击了' + item.name);
    };
    items = [
        {
            name: '按钮1',
            icon: () => <i className="zero-icon zerod-shengchangzhouqi" />,
            onClick: this.onClick,
        },
        { name: '按钮2', icon: <Icon type="star" theme="filled" />, onClick: this.onClick },
        { name: '按钮3', icon: () => <Icon type="eye" theme="filled" />, onClick: this.onClick },
        { name: '按钮4', icon: <Icon type="camera" theme="filled" />, onClick: this.onClick },
        { name: '按钮5', show: true, icon: <Icon type="pay-circle" theme="filled" />, onClick: this.onClick },
        {
            name: '按钮6',
            disabled: true,
            icon: <Icon type="hourglass" theme="filled" />,
            onClick: this.onClick,
        },
    ];
    render() {
        return (
            <span>
                <ZroundingButton items={this.items}>
                    <Button size="small">open</Button>
                </ZroundingButton>
                <ZroundingButton items={this.items} >
                    <Button size="small" style={{marginLeft:'80px'}}>open</Button>
                </ZroundingButton>
            </span>
        );
    }
}
```

## ZroundingButton 的 props

| 参数            | 说明                                     | 类型          | 默认值 |
| --------------- | ---------------------------------------- | ------------- | ------ |
| items           | 按钮组的渲染数据，结构如下 items         | array[object] | --     |
| onVisibleChange | 显示状态改变会触发 onVisibleChange       | (visible)=>{} | --     |

## items

| 参数                                                  | 说明                                               | 类型                                      | 默认值 |
| ----------------------------------------------------- | -------------------------------------------------- | ----------------------------------------- | ------ |
| name                                                  | 按钮名称                                           | string                                    | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> icon | 按钮图标，如果没有图标会以按钮名称的第一个字符显示 | reactNode \| function(){return reactNode} | --     |
| onClick                                               | 按钮点击事件,参数有当前点击的按钮 map 对象         | function(item){}                          | --     |
| show                                                  | 是否显示此按钮                                     | Boolean                                   | true   |
| disabled                                              | 是否禁用此按钮                                     | Boolean                                   | false  |
