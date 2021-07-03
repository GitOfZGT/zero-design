import React, { useEffect } from 'react';
// import compnents from '@/components/load-components.js'
// const { Aexample }=compnents;
import { ZpageHeader } from 'zerod';
import './style.scss';

export default () => {
    useEffect(() => {
        console.log('测试');
    }, []);
    return (
        <div styleName="z-my-box actives">
            <ZpageHeader title="测试页面" breadcrumbRoutes={[{ name: '测试页面', link: false }]}></ZpageHeader>
        </div>
    );
};
