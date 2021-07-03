```jsx
/**
 * @renderMode: rightModal
 * @componentName: Demo4
 * @title: ZlistPanel
 * @description: 简单配置
 * @scroll: true
 *
 */

// @import : ./common1.md

import { ZlistPanel,ZpageWrapper } from 'zerod';

export default ()=>{
    return <ZpageWrapper> <ZlistPanel {...pageConfig.list} searchForm={pageConfig.searchForm} /> </ZpageWrapper>
};
```
