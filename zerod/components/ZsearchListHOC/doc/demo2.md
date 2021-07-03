```jsx
/**
 * @renderMode: rightModal
 * @componentName: Demo2
 * @title: card 类型 + 按字段排序 + 无限追加的分页类型
 * @description: 简单配置
 * @scroll: true
 *
 */

// @import : ./common1.md
pageConfig.list.listType = 'card';
pageConfig.list.paginationType = 'infinite';
pageConfig.searchForm.tagsPlacement = 'in';
export default ZsearchListHOC(pageConfig);
```
