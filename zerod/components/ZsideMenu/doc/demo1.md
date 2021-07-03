
```jsx
import React from 'react';
import ZpureComponent from 'zerod/components/ZpureComponent';
import { ZsideMenu } from 'zerod';
const menus = [
    {
        path: '/start-doc',
        name: '开始'
        // iconClass: "",
    },
    {
        path: '/component-doc',
        name: '组件',
        children: [
            {
                path: '/ZcodeHighlight-doc',
                name: '代码高亮 : ZcodeHighlight',
                iconClass: ''
            }
        ]
    },
    {
        path: '/config',
        name: '案例',
        children: [
            {
                path: '/serviceWithTableList',
                name: '表格列表',
                iconClass: ''
            }
        ]
    }
];
<ZsideMenu menuData={menus} />;
```