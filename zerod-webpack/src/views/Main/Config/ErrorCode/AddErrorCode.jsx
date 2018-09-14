import React from 'react';
import {Input} from 'antd';

import {ZeditSimpleFormHOC} from 'zerod';

import api from './A.api';


const getConfig=(listExports)=>({
    pageHeader:{
        show:true,
        breadcrumbRoutes:null,
        title:"新增错误编码",
        content:"注意：编码编码不能重复"
    },
    form:{
        type:"add",
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
        submitApiInterface:(query)=>{
            return api.addException(query);
        },
        afterSubmitSuccess:(closeRightModal)=>{
            closeRightModal();
            listExports&&listExports.getListData();
        },

        deleteApiInterface:(record)=>{
            return api.deleteException({
                exceptionInfoId:record.exceptionId
            });
        }
    }
});


export default  (listExports)=>{
    const Add= ZeditSimpleFormHOC(getConfig(listExports));
    return <Add/>
}
