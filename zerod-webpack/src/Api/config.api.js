import httpAjax from '@/zTool/httpAjax.js';
export default {
    name: 'config',
    apis: {
        //获取列表接口
        getServiceList(query) {
            return httpAjax('post', '/v1.0/config/center/pageServiceInfo', query);
        },
        //删除服务
        deleteService(query) {
            return httpAjax('post', '/v1.0/config/center/deleteServiceInfo', query);
        },
        //新增服务
        addService(query) {
            return httpAjax('post', '/v1.0/config/center/addServiceConfig', query);
        },
        //更新服务
        updateService(query) {
            return httpAjax('post', '/v1.0/config/center/updateServiceInfo', query);
        },
        //获取详细数据
        getServiceDetail(query) {
            return httpAjax('post', '/v1.0/config/center/getServiceConfigDetail', query);
        },
        //更新配置信息
        updateServiceConfig(query) {
            return httpAjax('post', '/v1.0/config/center/updateConfigProperty', query);
        }
    },
};
