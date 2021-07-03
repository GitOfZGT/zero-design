<!-- @routePath:/component-doc/ZListMasonry-doc -->

# 堆砌列表：ZListMasonry

```jsx
/**
 * @renderMode: rightModal
 * @componentName: Demo1
 * @title: 基本使用
 * @description: 简单配置
 * @scroll: true
 *
 */

// @import : ../mock.md

import React from 'react';
import { ZListMasonry, ZpageWrapper,zTool } from 'zerod';
const api = {
    //获取列表接口
    getServiceList(query) {
        return zTool.httpAjax('post', '/mockjs/v1.0/config/center/pageServiceInfo', query);
    },
};
export default class Mylist extends React.PureComponent {
    render() {
        return (
            <ZpageWrapper
                pageHeader={{
                    show: true,
                    title: '',
                    content: '',
                }}
            >
                <ZListMasonry
                    listApiInterFace={this.listApiInterFace}
                    colContentRender={this.colContentRender}
                    colSpan={this.colSpan}
                    colKey="id"
                ></ZListMasonry>
            </ZpageWrapper>
        );
    }
    listApiInterFace = (query) => {
        return api.getServiceList(query);
    };
    colContentRender = (record, index) => {
        const random = Math.round(Math.random() * 400);
        const height = random < 60 ? 60 : random + 'px';
        return (
            <div className="z-panel z-margin-bottom-15">
                <div className="z-panel-body" style={{ height }}>
                    切块内容自适应
                </div>
            </div>
        );
    };
    colSpan = { xxl: 4, xl: 6, lg: 8, md: 12 };
}
```

## ZListMasonry 的 props

| 属性              | 说明                                         | 类型                                         | 默认值                           |
| ----------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------- |
| listApiInterFace  | 获取列表数据的后台接口函数, 必须返回 Promise | functon(query){return Promise}               | --                               |
| colKey            | 列表数据中唯一标识的 key                     | string                                       | id                               |
| colContentRender  | 列表中每个堆砌块的渲染函数                   | functon(record,index,list){return ReactNode} | --                               |
| colSpan           | 栅栏占比配置                                 | object                                       | { xxl: 4, xl: 6, lg: 8, md: 12 } |
| moreContentRender | 可在列表之下插入任意内容                     | functon(list){return ReactNode}              | --                               |

## ZListMasonry 实例方法 (通过 Ref.current.methods 取得)

| 属性           | 说明                                                                | 使用                     | 返回值 |
| -------------- | ------------------------------------------------------------------- | ------------------------ | ------ |
| startLoad      | 加载第一页的数据，会触发 listApiInterFace 函数 , query 查询参数对象 | methods.startLoad(query) |
| getCurrentList | 获取当前的所有列表数据                                              | methods.getCurrentList() | []     |
