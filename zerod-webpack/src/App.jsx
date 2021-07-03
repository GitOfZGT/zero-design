// import React from "react";
import { ZappHOC } from 'zerod';
// 路由组件
import Main from '@/views/Main/';
const pageConfig = {
    rootRoutes: [
        {
            path: '/main',
            component: Main,
        },
        {
            redirect: true,
            path: '/',
            to: '/main/home',
        },
        {
            redirect: true,
            path: '/main',
            to: '/main/home',
        },
    ],
};
export default ZappHOC(pageConfig);
