import React from 'react';
import api from './A.api';


import {ZdetailSimpleBaseHOC} from 'zerod';



const config={
    pageHeader:{
        show:true,
        breadcrumbRoutes:null,
        title:"错误编码详情",
        content:null,
    },
    detail:{
        panelHeader:"详情信息",
        items:[
            {
                key: "exceptionId",
                label: "异常ID",
                colSpan: 12,
                render: (value, record) => {
                    return value;
                },
            },
            {
                key: "exceptionCode",
                label: "异常编码",
                colSpan: 12,
                render: (value, record) => {
                    return value;
                },
            },
            {
                key: "exceptionInfo",
                label: "异常说明",
                colSpan: 24,
                render: (value, record) => {
                    return value;
                },
            }
        ],
        detailApiInterface:(id)=>{
            return api.getExceptionDetail({id:id});
        }
    }
};


export default (record)=>{
    const Detail=ZdetailSimpleBaseHOC(config);
    return <Detail detailId={record.exceptionId}/>;
}