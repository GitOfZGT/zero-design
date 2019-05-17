import httpAjax from '@/zTool/httpAjax.js';
export default {
    name: 'login',
    apis: {
        //获取用户信息
        getUserInfo() {
            return httpAjax('post', '/loginUserInfo');
        },
    },
};
