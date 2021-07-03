<!-- @routePath:/component-doc/Zcascader-doc -->

# 级联选择: Zcascader

`Zcascader`是一个级联选择组件，通常做地区级联。

```jsx
/**
 * @renderMode: inline
 * @componentName: ZcascaderDemo1
 * @description: 地区树方式
 * @title: Zcascader基本使用
 */
import React from 'react';
import { message } from 'antd';
import { Zcascader } from 'zerod';
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
class Myjavascript extends React.PureComponent {
    state = {
        data: [],
    };
    methods = {
        onSelect: (items) => {
            let names = items.map((item) => {
                return item.name;
            });
            message.success(`您选择了${names.join('-')}`);
        },
    };
    componentDidMount() {
        axios.get(`${baserouter}/static/area.json`).then((res) => {
            this.setState({
                data: res.data,
            });
        });
    }
    render() {
        return (
            <div className="app-body" style={{ padding: '20px' }}>
                <div className="z-panel">
                    <Zcascader
                        tree={this.state.data}
                        itemKeys={{ name: 'name', id: 'areaId', disabled: 'disable', children: 'children' }}
                        selections={['1710121748130980000000166']}
                        onSelect={this.methods.onSelect}
                    />
                </div>
            </div>
        );
    }
}
export default Myjavascript;
```

```jsx
/**
 * @renderMode: inline
 * @componentName: ZcascaderDemo2
 * @description: 异步加载
 * @title: Zcascader异步加载
 */
import React from 'react';
import { message } from 'antd';
import { Zcascader } from 'zerod';
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
class Myjavascript extends React.PureComponent {
    methods = {
        onSelect: (items) => {
            let names = items.map((item) => {
                return item.name;
            });
            message.success(`您选择了${names.join('-')}`);
        },
        treeAsync: (data, resolve) => {
            if (data.root) {
                axios.get(`${baserouter}/static/area.json`).then((res) => {
                    resolve(res.data);
                });
            } else if (data.children && data.children.length) {
                setTimeout(() => {
                    resolve(data.children);
                }, 500);
            } else {
                resolve([]);
            }
        },
    };
    selections = ['1710121748130980000000166'];
    render() {
        return (
            <div className="app-body" style={{ padding: '20px' }}>
                <div className="z-panel">
                    <Zcascader
                        treeAsync={this.methods.treeAsync}
                        itemKeys={{ name: 'name', id: 'areaId', disabled: 'disable', children: 'children' }}
                        selections={this.selections}
                        onSelect={this.methods.onSelect}
                    />
                </div>
            </div>
        );
    }
}
export default Myjavascript;
```

```jsx
/**
 * @renderMode: inline
 * @componentName: ZcascaderDemo3
 * @description: 添加操作按钮
 * @title: Zcascader添加操作按钮
 */
import React from 'react';
import { message, Button } from 'antd';
import { Zcascader, ZcodeHighlight } from 'zerod';
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
class Myjavascript extends React.PureComponent {
    state = {
        data: [],
    };
    methods = {
        onSelect: (items) => {
            let names = items.map((item) => {
                return item.name;
            });
            message.success(`您选择了${names.join('-')}`);
        },
    };
    selections = ['1710121748130980000000166'];
    itemKeys = { name: 'name', id: 'areaId', disabled: 'disable', children: 'children' };
    popoverContentRender = (data, index) => {
        return (
            <>
                <Button type="primary" size="small" onClick={(e) => e.stopPropagation()}>
                    修改
                </Button>
                <Button type="danger" className="z-margin-left-10" size="small" onClick={(e) => e.stopPropagation()}>
                    删除
                </Button>
            </>
        );
    };
    componentDidMount() {
        axios.get(`${baserouter}/static/area.json`).then((res) => {
            this.setState({
                data: res.data,
            });
        });
    }
    render() {
        return (
            <div className="app-body" style={{ padding: '20px' }}>
                <div className="z-panel">
                    <Zcascader
                        tree={this.state.data}
                        itemKeys={this.itemKeys}
                        selections={this.selections}
                        onSelect={this.methods.onSelect}
                        popoverContentRender={this.popoverContentRender}
                    />
                </div>
            </div>
        );
    }
}

export default Myjavascript;
```

## Zcascader 的 props

| 参数                 | 说明                                                                                                                   | 类型                         | 默认值                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------- |
| tree                 | 级联树数据，非 treeAsync 下有效, (请使用变量缓存所需设置的值而非直接使用字面量)                                        | array[object]                | []                                     |
| lables               | 对应每一级的 label, 对象用法：[{icon:any,text:"省",onIconClick:()=>{}}]                                                | array[string]\|array[object] | ["省", "市", "区/县", "街道/镇", "村"] |
| itemKeys             | 定义 tree 的 key 对象，默认：{ name: "name", id: "id", disabled: "disabled", children: "children" }                    | object                       | --                                     |
| selections           | 默认已选择的每一级选项的 ids，如 默认选择 广东省：["1710121748130980000000166"], (请不要在 onSelect 中修改 selections) | array[string]                | --                                     |
| onSelect             | 点击选项的回调                                                                                                         | function(selectItems){}      | --                                     |
| treeAsync            | 异步加载选项函数,有两个参数，data:当前选项的数据，resolve:加载下一级的钩子 resolve([下一级的所有选项]])                | function(data,resolve){}     | --                                     |
| popoverContentRender | 每一项的 popover 的内容区渲染函数                                                                                      | function(data,index){}       | --                                     |
| unselected           | 是否可以取消选中                                                                                                       | boolean                      | true                                   |
