<!-- @routePath:/component-doc/ZoneWayTransfer-doc -->

# 单向转移框: ZoneWayTransfer

`ZoneWayTransfer`是一个通过拖动的单向转移选择框组件，左侧源数据框，右侧是接收框

```jsx
/**
 * @renderMode: inline
 * @componentName: Demo1
 * @title: 基本使用
 * @description: 简单配置
 *
 */
import React from 'react';
import { ZoneWayTransfer, ZwindowGapHeight } from 'zerod';
class Myjavascript extends React.Component {
    state = {
        leftData: [
            { name: '风中飘摇', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '枫叶南山' },
            { name: '相信时代(禁用状态)', disabled: true },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
            { name: '天下三官', children: [{ name: '由于天涯' }, { name: '泪如雨下' }] },
        ],
        rightData: [],
    };
    methods = {
        onChange: (actionType, rightData, actionItem, sibligItem) => {
            //actionType="transfer" 从左转移到右
            //actionType="move" 右框内移动排序
            //actionType="remove" 拖出右框移除
            //actionType="selectAll" 全选
            //actionType="clearAll 清空
        },
    };
    render() {
        return (
            <ZwindowGapHeight gap={78} querySelector=".z-transfer-row">
                <div>
                    <ZoneWayTransfer
                        style={{ width: '600px' }}
                        repeated={true}
                        onChange={this.methods.onChange}
                        leftSourceData={this.state.leftData}
                        rightTargetData={this.state.rightData}
                        leftTitle="左边"
                        rightTitle="右边"
                        sourceKeys={{ name: 'name', id: 'id', children: 'children' }}
                    />
                </div>
            </ZwindowGapHeight>
        );
    }
}
export default Myjavascript;
```

## ZoneWayTransfer 的 props

可追加`className`、`style`

| 参数                                                             | 说明                                                                                                                                     | 类型                                                  | 默认值                                           |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| leftSourceData                                                   | 左侧框的数据源,[{name:"名称",id:"1",disabled:false}]                                                                                     | array[object]                                         | []                                               |
| rightTargetData                                                  | 右侧框的数据,[{name:"名称",id:"1",disabled:false}]                                                                                       | array[object]                                         | []                                               |
| sourceKeys                                                       | 定义 leftSourceData 和 rightTargetData 的 key 对象，默认：{ name: "name", id: "id", children: "children" }                               | object                                                | { name: "name", id: "id", children: "children" } |
| onChange                                                         | 操作之后的回调，参数有 actionType：操作类型，rightData：操作之后右框数据，actionItem：当前操作的数据，sibligItem：当前操作位置下一个数据 | (actionType, rightData, actionItem, sibligItem) => {} | --                                               |
| repeated                                                         | 是否允许重复选择                                                                                                                         | Boolean                                               | true                                             |
| <i class="zero-icon zerod-shengchangzhouqi"></i> leftTitle       | 左框标题                                                                                                                                 | string \| function(){}                                | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> rightTitle      | 右框标题                                                                                                                                 | string \| function(){}                                | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> leftItemRender  | 左框选择项的渲染函数                                                                                                                     | function(item,index){}                                | --                                               |
| <i class="zero-icon zerod-shengchangzhouqi"></i> rightItemRender | 右框选择项的渲染函数                                                                                                                     | function(item,index){                                 | --                                               |
| selectAllDisabled                                                | 禁用全选按钮                                                                                                                             | boolean                                               | --                                               |
| clearAllDisabled                                                 | 禁用清空按钮                                                                                                                             | boolean                                               | --                                               |
