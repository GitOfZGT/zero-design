<!-- @fragment -->

```jsx
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
