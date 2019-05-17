import React from 'react';
// import compnents from '@/components/load-components.js'
// const { Aexample }=compnents;
import { ZpageHeader } from 'zerod';


export default () => (
    <div>
        <ZpageHeader title="运维管理中心"
            breadcrumbRoutes={[
                { name: '首页', link: false }
            ]}
            content="运维管理中心主要提供后台运维人员使用相关功能。"
        >
        </ZpageHeader>
    </div>
);
