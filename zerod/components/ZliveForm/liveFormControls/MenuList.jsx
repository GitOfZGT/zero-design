import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

export const SelectList = React.memo((props) => {
    const { list, notFoundContent, selectListFieldNames, onClick, labelRender } = props;
    return list.length ? (
        <Menu onClick={onClick} prefixCls="ant-dropdown-menu">
            {list.map((item) => {
                return (
                    <Menu.Item key={item[selectListFieldNames.value]}>
                        {labelRender
                            ? labelRender(item[selectListFieldNames.label], item)
                            : item[selectListFieldNames.label]}
                    </Menu.Item>
                );
            })}
        </Menu>
    ) : (
        <div className="z-menu-notfound">{notFoundContent || '无相关数据'}</div>
    );
});
export default SelectList;
