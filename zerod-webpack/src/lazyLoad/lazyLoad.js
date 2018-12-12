import Loadable from 'react-loadable';
// import Loading from './Loading';
const lazyLoad = (component) => {
   return Loadable({
        loader: component,//异步加载组件
        loading:()=>null,//component加载前显示的组件
        // delay: 300,//component在300毫秒未加载成功，就显示loading组件，所以一般正常情况不会出现loading
    })
}
export default lazyLoad;