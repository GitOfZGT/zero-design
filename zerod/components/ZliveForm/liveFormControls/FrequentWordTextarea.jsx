import React, { useState, useCallback } from 'react';
import { getControl } from '../../Zform/controls';
import { useOpenWordListBtn, useFrequentWordRender } from './PasswordInput';

const PasswordInput = (props) => {
    const {
        onChange,
        useFrequentWord,
        getFrequentWord,
        getFrequentWordQuery,
        frequentWordFieldNames,
        addFrequentWord,
        updateFrequentWord,
        deleteFrequentWord,
        ...others
    } = props;
    const { popoverState, setPopoverState, openBtn, getList } = useOpenWordListBtn({
        btnProps: { size: others.size, className: 'z-frequentWord-btn', disabled: others.disabled },
        useFrequentWord,
        getFrequentWord,
        getFrequentWordQuery,
    });
    const btnContent = useFrequentWordRender({
        popoverState,
        setPopoverState,
        frequentWordFieldNames,
        onChange,
        getList,
        inputRender: openBtn,
        useFrequentWord,
        addFrequentWord,
        updateFrequentWord,
        deleteFrequentWord,
        getFrequentWordQuery,
    });
    const inputRender = (
        <div style={{ position: 'relative' }}>
            {getControl('TextArea', {
                onChange,
                ...others,
            })}
            {useFrequentWord ? btnContent : ''}
        </div>
    );

    return inputRender;
};

export default React.memo(PasswordInput);
