<!-- @routePath: /component-doc/Zinfo-doc -->
# 信息展示：Zinfo

`Zinfo` 用于展示一组 label 和 value 的组件

```jsx
/**
 * @renderMode: inline
 * @componentName: PageHeader2
 * @description: 基本使用
 * @title: 基本使用
 */
import React from 'react';
import { Zinfo } from 'zerod';
import { Tag } from 'antd';
class Myjavascript extends React.PureComponent {
    items = [
        {
            key: 'serviceCode',
            label: '服务编码',
            render: () => {
                //异步加载自定义项
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve((value, record) => {
                            return <Tag color="red">{value}</Tag>;
                        });
                    }, 5000);
                });
                //    return api.getOptions.then(re=>{
                //         return (value,record)=>{
                //               return 自定义内容
                //         }
                //     })
            }
        },
        {
            key: 'serviceName',
            label: '服务名称'
        }
    ];
    state = {
        data: {
            serviceCode: 'IDDKKDSSDSD',
            serviceName: '测试治大国'
        }
    };
    render() {
        return <div className="app-body" style={{padding:'20px'}}><Zinfo items={this.items} fieldValue={this.state.data} /></div>;
    }
}
export default Myjavascript;
```

## Zinfo 的 props

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| items           | json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)            | array           | --         |
| layoutType      | 布局方式                                                                          | fixedCol\|\|freeCol | fixedCol   |
| colCount        | 列数,layoutType===fixedCol有效                                                        | number          | 2          |
| fieldValue      | 对应items中key属性的map对象, (请使用变量缓存所需设置的值而非直接使用字面量)              | object          | --         |
| gutter          | 列之间的间隔,layoutType===fixedCol有效                                                | number          | 20         |

<div class="z-doc-titles"></div>

## items 结构

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| key             | 表单控件value对应的字段名                                                             | string          | --         |
| span            | 栅栏占格(antd的栅栏组件分24栏)，例：{xxl:4,xl:6,lg:8}，layoutType===freeCol有效       | number \| object | --         |
| label           | 表单控件label                                                                        | string          | --         |
| width           | label区的宽度，默认"160px"                                                            | string          | 160px      |
| <i class="zero-icon zerod-shengchangzhouqi"></i> render | 自定义value钩子,render函数必须return一个函数。如果异步加载自定义内容：必须return的是Promise对象(这时候then回调里需return一个函数)。例如使用了后台接口：()=>api.getOptions.then(re=>{return <i class="zero-icon zerod-shengchangzhouqi"></i>  (value,record)=>自定义内容)}) | ()=>{return function(value,record){return 自定义内容})}   | --         |
