import React from 'react';

import api from './A.api';
import{ ZsearchListHOC } from "zerod";

import addErrorCode from './AddErrorCode';
import updateErrorCode from './UpdateErrorCode';
import detailErrorCode from './ErrorCodeDetail';

let listExports = null;
const config={
    pageHeader: {
		show: true,
		//any
		title: "错误编码服务",
		//any
		content:
			"定义了所有的错误编码。如果CommonException里抛出了指定的业务错误，需要这此先定义。",
		//element | node
		rightMoreContent: null,
    },
    
    searchForm:{
        items:[
        ]
    },
    list:{

        //展示方式
        listType:"table",
        cardCoverRender:null,

        //表头
        panelHeader:"错误编码列表",


        actionDataIndex:"exceptionInfo",
        tableParams:{
            rowKey:"exceptionId"
        },
        tableColumns:[
            {
                title:"错误编码",
                dataIndex:"exceptionCode"
            },
            {
                title:"错误描述",
                dataIndex:"exceptionInfo"
            }
        ],
       listApiInterface:(query)=>{
           return api.listException(query)
       },


       detailPageRender:(record)=>detailErrorCode(record),

       deleteApiInterface:(record)=>{
        return api.deleteException({
            exceptionInfoId:record.exceptionId
        });
      },

       showPagination:false,

       showAddBtn:true,

       addPageRender:()=>addErrorCode(listExports),
       updatePageRender:(record)=>updateErrorCode(listExports,record),

       paginationType:"paging",
       exportSomething: (obj) => (listExports = obj),
    }
};


export default ZsearchListHOC(config);