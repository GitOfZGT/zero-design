<!-- @routePath:/component-doc/ZtreeInput-doc -->

# ZtreeInput 树编辑控件

```jsx
/**
 * @renderMode: inline
 * @componentName: ZtreeInput1
 * @description: ZtreeInput1
 * @title: inputType === double
 */
import React from 'react';
import { ZtreeInput } from 'zerod';
class ZtreeInput1 extends React.PureComponent {
    state = {
        tree: [],
    };
    treeChange = (value) => {
        console.log(value);
        this.setState({
            tree: value,
        });
    };
    render() {
        return (
            <div style={{ width: '500px' }}>
                <ZtreeInput value={this.state.tree} onChange={this.treeChange} />
            </div>
        );
    }
}
export default ZtreeInput1;
```

```jsx
/**
 * @renderMode: inline
 * @componentName: ZtreeInput2
 * @description: ZtreeInput2
 * @title: inputType === single
 */
import React from 'react';
import { ZtreeInput } from 'zerod';
class ZtreeInput2 extends React.PureComponent {
    state = {
        tree: [],
    };
    treeChange = (value) => {
        console.log(value);
        this.setState({
            tree: value,
        });
    };
    render() {
        return (
            <div style={{ width: '500px' }}>
                <ZtreeInput inputType="single" value={this.state.tree} onChange={this.treeChange} />
            </div>
        );
    }
}
export default ZtreeInput2;
```

```jsx
/**
 * @renderMode: inline
 * @componentName: ZtreeInput3
 * @description: ZtreeInput3
 * @title: multiple === false
 */
import React from 'react';
import { ZtreeInput } from 'zerod';
class Myjavascript extends React.PureComponent {
    state = {
        tree: [],
    };
    treeChange = (value) => {
        this.setState({
            tree: value,
        });
    };
    render() {
        return (
            <div style={{ width: '500px' }}>
                <ZtreeInput multiple={false} value={this.state.tree} onChange={this.treeChange} />
            </div>
        );
    }
}
export default Myjavascript;
```

```jsx
/**
 * @renderMode: inline
 * @componentName: ZtreeInput4
 * @description: ZtreeInput4
 * @title: 自定义输入框等 : inputType === coustom
 */
import React from 'react';
import { ZtreeInput } from 'zerod';
import { Input, Select, InputNumber } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
class Myjavascript extends React.PureComponent {
    state = {
        tree: [],
    };
    treeChange = (value) => {
        this.setState({
            tree: value,
        });
    };
    render() {
        return (
            <div style={{ width: '500px' }}>
                <ZtreeInput
                    inputType="coustom"
                    multiple={true}
                    value={this.state.tree}
                    onChange={this.treeChange}
                    customInputKeys={[
                        { key: 'left', initValue: '' },
                        { key: 'center', initValue: '' },
                        { key: 'right', initValue: 0 },
                    ]}>
                    {(states, setStates, customInputKeys) => {
                        return (
                            <InputGroup compact style={{ width: '100%' }}>
                                <Select
                                    value={states[customInputKeys[0].key]}
                                    onChange={(val) => {
                                        setStates({
                                            [customInputKeys[0].key]: val,
                                        });
                                    }}
                                    style={{
                                        width: '30%',
                                    }}
                                    size="small">
                                    <Option value="Option1">Option1</Option>
                                    <Option value="Option2">Option2</Option>
                                </Select>
                                <Input
                                    style={{ width: '50%' }}
                                    value={states[customInputKeys[1].key]}
                                    onChange={(e) => {
                                        setStates({
                                            [customInputKeys[1].key]: e.target.value,
                                        });
                                    }}
                                    size="small"
                                />
                                <InputNumber
                                    value={states[customInputKeys[2].key]}
                                    onChange={(val) => {
                                        setStates({
                                            [customInputKeys[2].key]: val,
                                        });
                                    }}
                                    style={{
                                        width: '20%',
                                    }}
                                    size="small"
                                />
                            </InputGroup>
                        );
                    }}
                </ZtreeInput>
            </div>
        );
    }
}
export default Myjavascript;
```

## ZtreeInput 的 props

可追 `className`

| 参数             | 说明                                                                                                                                                                                                           | 类型                        | 默认值                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------- |
| inputType        | 输入框类型 ，当 "coustom"时 ，通过 ZtreeInput 的 children 必须是 (state,setState,customInputKeys)=>{ return 自定义 }来实现自定义，state：一个对应 customInputKeys 的 key 的状态对象，setState： 更新状态的方法 | single \| double \| coustom | double                                                  |
| customInputKeys  | 自定义输入框等的 key 名 和 initValue 初始值, 默认是 [{key:"label",initValue:""},{key:"value",initValue:""}]                                                                                                    | array                       | [{key:"label",initValue:""},{key:"value",initValue:""}] |
| value            | tree 数据, array[{children}] , 数据对象的属性除了 children , 其他属性对应 customInputKeys 的 key                                                                                                               | array                       | []                                                      |
| onChange         | 新增兄弟节点、上移、下移、移除、新增子节点、输入框取消聚焦 都会触发 onChange                                                                                                                                   | function(newTree){}         | --                                                      |
| multiple         | 是否多级节点，如为 false, value 里是不存在 children 的                                                                                                                                                         | boolean                     | true                                                    |
| toolTips         | 各个操作按钮的 tooltip 名称，默认{addSiblings:"添加兄弟节点",moveUp:"上移",moveDown:"下移",remove:"移除",addChild:"新增子节点"} ， 可修改单个名称：{addSiblings:"新增兄弟节点"}                                | object                      | --                                                      |
| showBtns         | 是否显示任意操作按钮                                                                                                                                                                                           | boolean                     | true                                                    |
| canMove          | 是否可以上下移动 ，优先级大于 showBtns                                                                                                                                                                         | boolean                     | true                                                    |
| canAdd           | 是否可以添加节点 ，优先级大于 showBtns                                                                                                                                                                         | boolean                     | true                                                    |
| canDelete        | 是否可以移除节点 ，优先级大于 showBtns                                                                                                                                                                         | boolean                     | true                                                    |
| canDeleteLastOne | 是否可以移除只剩的最后一个节点                                                                                                                                                                                 | boolean                     | false                                                   |
