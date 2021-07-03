import lazyLoad from '@/lazyLoad/lazyLoad';
//lazyLoad返回的组件根节点不是一个真实的dom,如需keepAlive,必需启用一个dom元素(可能是一个dev)：keepAlive: { domProperties: true }
//这个dom作为组件的父元素,如果会影响内部的样式布局,可以给dom元素添加属性： keepAlive: { domProperties: { style:{position:'relative'},className:'z-my-name'} }
const Home = lazyLoad(() => import('./'));
export default [
    {
        path: '/home',
        component: Home,
        // keepAlive: true,
        // keepAlive: { domProperties: true },
        keepAlive: { domProperties: { style: { position: 'relative' }, className: 'z-my-name' } },
    },
];
