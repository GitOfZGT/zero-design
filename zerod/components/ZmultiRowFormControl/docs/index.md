# 多行编辑控件：ZmultiRowFormControl

<!-- @routePath:/component-doc/ZmultiRowFormControl -->

<!-- @import:./demo1.md -->

<!-- @import:./demo2.md -->

## ZmultiRowFormControl 的 props

| 参数                 | 说明                                                                                                                | 类型                  | 默认值  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| disabled             | 禁用每行的控件                                                                                                      | boolean               | false   |
| value                | 多行的数据                                                                                                          | object[]              | --      |
| controlSize          | 每行控件的大小                                                                                                      | default\|small\|large | default |
| items                | 每列的控件配置，同<span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform 的 items</span> | object[]              | --      |
| titleGroups          | 可以给表头分组                                                                                                      | object[]              | --      |
| titleGroupsp[].id    | 组的 id, 让哪些 items 分到这组，就在添加对应的 items[].groupId                                                      | string                | --      |
| titleGroupsp[].title | 组的 名称                                                                                                           | string                | --      |
| momentFormat         | 每一行的日期控件是否自动将 moment 格式化                                                                            | boolean               | false   |
| booleanToNumber      | 每一行的 Boolean 类型的值转 0 和 1                                                                                  | boolean               | false   |
| showAddButton        | 是否显示添加行的按钮                                                                                                | boolean               | true    |
| showRemoveButton     | 是否显示移除行的按钮                                                                                                | boolean               | true    |
| onChange             | 多行的值改变时的回调                                                                                                | function(value){}     | --      |
| onAdd                | 添加行按钮的触发，可以自定义添加行的逻辑                                                                            | function(){}          | --      |
| exportMethods        | 组件加载完的回调，会提供一些方法                                                                                    | function(methods){}   | --      |

## ZmultiRowDataTable 的 props

| 参数                 | 说明                                                                                                                | 类型       | 默认值 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| value                | 多行的数据                                                                                                          | object[]   | --     |
| items                | 每列的控件配置，同<span class="z-history-href" data-path="/main/component-doc/Zform-doc">组件/Zform 的 items</span> | object[]   | --     |
| titleGroups          | 可以给表头分组                                                                                                      | object[]   | --     |
| titleGroupsp[].id    | 组的 id, 让哪些 items 分到这组，就在添加对应的 items[].groupId                                                      | string     | --     |
| titleGroupsp[].title | 组的 名称                                                                                                           | string     | --     |
