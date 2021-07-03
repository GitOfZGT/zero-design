import React from 'react';
import { Result } from 'antd';
export default (props) => {
    const { extra } = props;
    return (
        <div className="z-flex-items-center z-text-center" style={{ paddingTop: '100px' }}>
            <Result
                status="403"
                title="未找到！"
                subTitle="对不起，您请求的页面地址不存在，或者没有权限查看此页面地址！"
                extra={extra}
            />
        </div>
    );
};
