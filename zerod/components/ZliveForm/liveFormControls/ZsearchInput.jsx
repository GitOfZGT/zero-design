import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Popover, Input } from 'antd';
import { httpAjax, dataType } from '../../zTool';
import MenuList from './MenuList';
const propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    selectionsUrl: PropTypes.object,
    selectionsQuery: PropTypes.object,
    selectListFieldNames: PropTypes.object,
    valueParamName: PropTypes.string,
    inputValueKeyName: PropTypes.string,
    notFoundContent: PropTypes.string,
};
const ZsearchInput = (props) => {
    const {
        value,
        onChange,
        selectionsUrl,
        selectionsQuery,
        valueParamName,
        inputValueKeyName,
        notFoundContent,
        selectListFieldNames,
        ...others
    } = props;
    // console.log(props);
    const currValue = dataType.isObject(value) ? value : { label: typeof value === 'string' && value ? value : '' };
    const timerRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState(currValue.label);
    useEffect(() => {
        setInputValue(currValue.label);
    }, [currValue.label]);
    const handleMenuClick = useCallback(
        ({ key }) => {
            const finded = list.find((item) => item[selectListFieldNames.value] === key);
            if (finded) {
                setVisible(false);
                const val = {
                    ...finded,
                    label: finded[selectListFieldNames.label],
                    value: finded[selectListFieldNames.value],
                };
                onChange && onChange(inputValueKeyName ? val[inputValueKeyName] : val);
            }
        },
        [list, selectListFieldNames.value, selectListFieldNames.label, onChange, inputValueKeyName],
    );
    const searchRequest = useCallback(
        (val) => {
            clearTimeout(timerRef.current);
            setLoading(true);
            httpAjax(
                selectionsUrl.selectionsUrlMethod,
                selectionsUrl.selectionsUrl,
                {
                    ...(selectionsQuery || {}),
                    [valueParamName]: val,
                },
                selectionsUrl.requestConfig,
            )
                .then((res) => {
                    if (dataType.isArray(res.data)) {
                        if (res.data.length > 1 || res.data.length === 0) {
                            setVisible(true);
                        } else {
                            const finded = res.data[0];
                            if (finded) {
                                const val = {
                                    ...finded,
                                    label: finded[selectListFieldNames.label],
                                    value: finded[selectListFieldNames.value],
                                };
                                onChange && onChange(inputValueKeyName ? val[inputValueKeyName] : val);
                            }
                        }
                        setList(res.data);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        [
            inputValueKeyName,
            onChange,
            selectListFieldNames.label,
            selectListFieldNames.value,
            selectionsQuery,
            selectionsUrl.requestConfig,
            selectionsUrl.selectionsUrl,
            selectionsUrl.selectionsUrlMethod,
            valueParamName,
        ],
    );
    return (
        <Popover
            // trigger="focus"
            overlayClassName="z-search-input-popover"
            trigger="click"
            visible={visible}
            content={
                <MenuList
                    list={list}
                    notFoundContent={notFoundContent}
                    selectListFieldNames={selectListFieldNames}
                    onClick={handleMenuClick}></MenuList>
            }
            title="搜索结果"
            placement="right"
            onVisibleChange={(vis) => {
                if (!vis) {
                    setVisible(vis);
                }
            }}>
            <Input.Search
                {...others}
                value={inputValue}
                onBlur={(e) => {
                    if (!e.target.value) {
                        onChange && onChange(null);
                    }
                }}
                onChange={(e) => {
                    const val = e.target.value;
                    setInputValue(val);
                    clearTimeout(timerRef.current);
                    if (val) {
                        timerRef.current = setTimeout(() => {
                            searchRequest(val);
                        }, 500);
                    }
                }}
                // addonBefore={<Icon type="eye"></Icon>}
                enterButton
                loading={loading}
                onSearch={searchRequest}></Input.Search>
        </Popover>
    );
};
ZsearchInput.propTypes = propTypes;
export default React.memo(ZsearchInput);
