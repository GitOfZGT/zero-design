import React, { useState, useEffect } from 'react';
import { Radio, Checkbox } from 'antd';
import '../style.scss';
const CheckGrouplist = (props) => {
    const { colCount, selectList, controlType, ...others } = props;
    const [state, setstate] = useState({ cols: [] });
    const Group = controlType === 'Checkbox' ? Checkbox.Group : Radio.Group;
    const Option = controlType === 'Checkbox' ? Checkbox : Radio;
    useEffect(() => {
        const cols = [];
        const count = colCount || 1;
        for (let index = 0; index < Math.ceil(selectList.length / count); index++) {
            cols[index] = selectList.slice(count * index, count * (index + 1));
        }
        setstate({
            cols,
        });
    }, [selectList, colCount]);
    return (
        <Group className="z-check-group-list" {...others}>
            {state.cols.map((options, i) => {
                return (
                    <div key={i} className="z-check-group-list-col">
                        {options.map((item) => {
                            return (
                                <Option key={item.value} value={item.value}>
                                    {item.label}
                                </Option>
                            );
                        })}
                    </div>
                );
            })}
        </Group>
    );
};

export default React.memo(CheckGrouplist);
