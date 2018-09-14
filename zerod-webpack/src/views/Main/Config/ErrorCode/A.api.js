import {zTool} from 'zerod';
export default {
    //获取列表接口
    listException(query) {
        return zTool.httpAjax("post", "/webapi/v1.0/config/center/exception/list", query);
    },
    getExceptionDetail(query) {
        return zTool.httpAjax("post", "/webapi/v1.0/config/center/exception/getDetailById", query);
    },
    addException(query){
        return zTool.httpAjax("post", "/webapi/v1.0/config/center/exception/add", query);
    },
    
    deleteException(query){
        return zTool.httpAjax("post", "/webapi/v1.0/config/center/exception/delete", query);
    },
    updateException(query){
        return zTool.httpAjax("post", "/webapi/v1.0/config/center/exception/update", query);
    },
}
