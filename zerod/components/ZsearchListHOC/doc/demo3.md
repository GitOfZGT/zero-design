```jsx
/**
 * @renderMode: rightModal
 * @componentName: Demo3
 * @title: 自定义查询表单
 * @description: 使用ZsearchForm作为查询表单
 * @scroll: true
 *
 */

// @import : ./common1.md

import { ZsearchForm } from 'zerod';

pageConfig.searchForm.customSearchRender = (searchProps)=>{
    return <div className="z-padding-top-6"><ZsearchForm {...searchProps}/></div>
};
export default ZsearchListHOC(pageConfig);
```
