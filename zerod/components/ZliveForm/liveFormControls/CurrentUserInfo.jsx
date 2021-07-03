import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { dataType, getMapValue } from '../../zTool';
import ZerodMainContext from '../../ZerodMainContext';

export default ZerodMainContext.setConsumer(
    React.memo((props) => {
        const { value, onChange, getUserInfo, keyString } = props;
        const [inputValue, setInputValue] = useState();
        useEffect(() => {
            if ((value && value !== inputValue) || !value) {
                const userInfo = getUserInfo();
                const val = getMapValue(userInfo, keyString);
                setInputValue(val);
                onChange && onChange(val);
            }
        }, [keyString, value]);
        return <Input value={inputValue} disabled={true}></Input>;
    }),
);
