<!-- @routePath:/component-doc/ZpdfViewer -->

```jsx
/**
 * @renderMode: inline
 * @componentName: Demo1
 * @title: 基本使用
 * @description: 简单配置
 *
 */

import React, { useState } from 'react';
import { ZpdfViewer } from 'zerod';
const Com = () => {
    const [state, setState] = useState({
        value: [
            {
                label: '决定书1',
                key: 'key1',
                docInstancePdfId: 'docInstancePdfId',
                docJsonPdfId: 'docJsonPdfId',
            },
            {
                label: '决定书2',
                key: 'key2',
                docInstancePdfId: 'docInstancePdfId',
                docJsonPdfId: 'docJsonPdfId',
            },
            {
                label: '决定书3',
                key: 'key3',
                docInstancePdfId: 'docInstancePdfId',
                docJsonPdfId: 'docJsonPdfId',
            },
            {
                label: '决定书4',
                key: 'key4',
                docInstancePdfId: 'docInstancePdfId',
                docJsonPdfId: 'docJsonPdfId',
            },
        ],
    });
    return <div className="app-body z-padding-20"><ZpdfViewer sortDroppabled={true} value={state.value}/></div>;
};
export default React.memo(Com)
```
