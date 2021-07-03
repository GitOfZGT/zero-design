<!-- @fragment -->

```jsx

// 这里渲染demo需要创建一个router根,  如果直接用在项目中的router则不需要
import { getProcessEnv } from 'zerod/components/zTool/getProcessEnv';
// const { baserouter } = getProcessEnv();
import ZappHOC from 'zerod/components/ZappHOC';
const routerType=  'history';
const path = routerType==='hash'?window.location.hash.replace('#','') :window.location.pathname;
export default ZappHOC({
    rootRoutes: [
        {
            path,
            component: Main,
        },
    ],
    routerType,
    routerBasename:"/"
});
```
