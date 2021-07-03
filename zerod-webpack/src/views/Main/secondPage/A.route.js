import lazyLoad from '@/lazyLoad/lazyLoad';
const Home = lazyLoad(() => import('.'));

export default [
    {
        path: '/secondPage',
        component: Home,
        keepAlive: { domProperties: true },
    },
];
