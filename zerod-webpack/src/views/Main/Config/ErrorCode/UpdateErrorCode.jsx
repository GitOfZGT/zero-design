import React from 'react';
import {Input} from 'antd';

import {ZeditSimpleFormHOC} from 'zerod';

import api from './A.api';


const getConfig=(listExports,record)=>({
    pageHeader:{
        show:true,
        breadcrumbRoutes:null,
        title:"更新错误编码",
        content:"注意：编码编码不能重复"
    },
    form:{
        type:"update",
        panelHeader:"错误编码",
        items:[
            {
                key:"exceptionCode",
                label:"错误编码",
                render: (form) => {
                    return <Input placeholder="请输入错误编码" />;
                },
                options: {
                    //验证规则
                    rules: [
                        {
                            required: true,
                            message: "不能为空。",
                        },
                    ],
                },
            },
            {
                key:"exceptionInfo",
                label:"错误描述",
                render: (form) => {
                    return <Input placeholder="请输入错误描述" />;
                },
                options: {
                    //验证规则
                    rules: [
                        {
                            required: true,
                            message: "不能为空。",
                        },
                    ],
                },
            }
        ],
        detailApiInterface:(id,props)=>{
            //console.log(id,props);
            return api.getExceptionDetail({id:id});
            //return api.getExceptionDetail({id:record.exceptionId});
        },
        submitApiInterface:(query)=>{
            //console.log(api);
            return api.updateException({...query,exceptionId:record.exceptionId});
        },
        afterSubmitSuccess:(closeRightModal)=>{
            closeRightModal();
            listExports&&listExports.getListData();
        },
    }
});


export default  (listExports,record)=>{
    const Update= ZeditSimpleFormHOC(getConfig(listExports,record));
    //console.log(record,Update);
    return <Update detailId={record.exceptionId}/>
}
