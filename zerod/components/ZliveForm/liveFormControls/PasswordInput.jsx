import React, { useState, useCallback } from 'react';
import { getControl } from '../../Zform/controls';
import httpAjax from '../../zTool/httpAjax';
import { Icon, Popover, Button, Tooltip, message, Spin, Modal } from 'antd';
import MenuList from './MenuList';
export function useOpenWordListBtn({ btnProps, useFrequentWord, getFrequentWord, getFrequentWordQuery }) {
    const [popoverState, setPopoverState] = useState({ list: [], visible: false, loading: false });
    const getList = () => {
        setPopoverState((prevState) => {
            return {
                ...prevState,
                loading: true,
                visible: false,
            };
        });
        httpAjax(getFrequentWord.urlMethod, getFrequentWord.url, getFrequentWordQuery, getFrequentWord.requestConfig)
            .then((res) => {
                setPopoverState((prevState) => {
                    return {
                        ...prevState,
                        list: res.data,
                        loading: false,
                        visible: true,
                    };
                });
            })
            .catch(() => {
                setPopoverState((prevState) => {
                    return {
                        ...prevState,
                        loading: false,
                    };
                });
            });
    };
    const openBtn = useFrequentWord ? (
        <Tooltip placement="top" title="常用语">
            <Button
                icon="unordered-list"
                {...btnProps}
                loading={popoverState.loading}
                onClick={(e) => {
                    if (popoverState.visible) {
                        setPopoverState((prevState) => {
                            return {
                                ...prevState,
                                visible: false,
                            };
                        });
                        return;
                    }
                    getList();
                }}></Button>
        </Tooltip>
    ) : null;
    return { popoverState, setPopoverState, openBtn, getList };
}
export function useFrequentWordRender({
    frequentWordFieldNames,
    onChange,
    inputRender,
    popoverState,
    useFrequentWord,
    setPopoverState,
    getList,
    addFrequentWord,
    updateFrequentWord,
    deleteFrequentWord,
    getFrequentWordQuery,
}) {
    const handleMenuClick = useCallback(
        ({ key }) => {
            const finded = popoverState.list.find((item) => +item[frequentWordFieldNames.value] === +key);
            if (finded) {
                setPopoverState((prevState) => {
                    return {
                        ...prevState,
                        visible: false,
                    };
                });
                onChange && onChange(finded[frequentWordFieldNames.label]);
            }
        },
        [popoverState.list, frequentWordFieldNames, onChange],
    );
    const popoverRender = useFrequentWord ? (
        <Popover
            // trigger="focus"
            autoAdjustOverflow={true}
            overlayClassName="z-search-input-popover"
            trigger="click"
            visible={popoverState.visible}
            content={
                <MenuList
                    list={popoverState.list}
                    labelRender={(text, record) => {
                        return record.createName === '系统预设' ? (
                            <div className="z-flex-space-between z-flex-items-v-center">
                                <div>{text}</div>
                                <div>
                                    <Button
                                        icon="edit"
                                        size="small"
                                        type="primary"
                                        ghost
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!updateFrequentWord) {
                                                message.warn('缺少修改常用语的接口,请重新配置表单控件');
                                                return;
                                            }
                                            setPopoverState((prevState) => {
                                                return {
                                                    ...prevState,
                                                    visible: false,
                                                };
                                            });
                                            let inputValue = '';
                                            Modal.confirm({
                                                icon: <Icon type="edit"></Icon>,
                                                title: '修改常用语',
                                                content: getControl('Input', {
                                                    defaultValue: text,
                                                    onChange(val) {
                                                        inputValue = val;
                                                    },
                                                }),
                                                onOk() {
                                                    if (inputValue) {
                                                        return httpAjax(
                                                            updateFrequentWord.urlMethod,
                                                            updateFrequentWord.url,
                                                            { ...(record || {}), presetName: inputValue },
                                                            updateFrequentWord.requestConfig,
                                                        ).then((res) => {
                                                            getList();
                                                        });
                                                    }
                                                },
                                            });
                                        }}></Button>
                                    <Button
                                        icon="delete"
                                        size="small"
                                        type="danger"
                                        ghost
                                        className="z-margin-left-8"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setPopoverState((prevState) => {
                                                return {
                                                    ...prevState,
                                                    visible: false,
                                                };
                                            });
                                            if (!deleteFrequentWord) {
                                                message.warn('缺少删除常用语的接口,请重新配置表单控件');
                                                return;
                                            }

                                            Modal.confirm({
                                                title: '是否确认删除此条常用语?',
                                                content: '',
                                                okType: 'danger',
                                                onOk() {
                                                    return httpAjax(
                                                        deleteFrequentWord.urlMethod,
                                                        deleteFrequentWord.url,
                                                        { ...(record || {}) },
                                                        deleteFrequentWord.requestConfig,
                                                    ).then((res) => {
                                                        getList();
                                                    });
                                                },
                                            });
                                        }}></Button>
                                </div>
                            </div>
                        ) : (
                            text
                        );
                    }}
                    selectListFieldNames={frequentWordFieldNames}
                    onClick={handleMenuClick}></MenuList>
            }
            title={
                <div className="z-flex-space-between z-flex-items-v-center">
                    <span>常用语列表</span>
                    <Button
                        icon="plus"
                        size="small"
                        type="primary"
                        ghost
                        block
                        onClick={() => {
                            if (!addFrequentWord) {
                                message.warn('缺少添加常用语的接口,请重新配置表单控件');
                                return;
                            }
                            setPopoverState((prevState) => {
                                return {
                                    ...prevState,
                                    visible: false,
                                };
                            });
                            let inputValue = '';
                            Modal.confirm({
                                icon: <Icon type="plus"></Icon>,
                                title: '添加常用语',
                                content: getControl('Input', {
                                    onChange(val) {
                                        inputValue = val;
                                    },
                                }),
                                onOk() {
                                    if (inputValue) {
                                        return httpAjax(
                                            addFrequentWord.urlMethod,
                                            addFrequentWord.url,
                                            { ...(getFrequentWordQuery || {}), presetName: inputValue },
                                            addFrequentWord.requestConfig,
                                        ).then((res) => {
                                            getList();
                                        });
                                    }
                                },
                            });
                        }}></Button>
                </div>
            }
            placement="right"
            onVisibleChange={(vis) => {
                if (!vis) {
                    setPopoverState((prevState) => {
                        return {
                            ...prevState,
                            visible: vis,
                        };
                    });
                }
            }}>
            {inputRender}
        </Popover>
    ) : (
        inputRender
    );
    return popoverRender;
}

const PasswordInput = (props) => {
    const {
        type,
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
    const [eyeVisible, setEyeVisible] = useState(false);
    const { popoverState, setPopoverState, openBtn, getList } = useOpenWordListBtn({
        btnProps: { size: others.size, className: 'z-input-openword-btn', disabled: others.disabled },
        useFrequentWord,
        getFrequentWord,
        getFrequentWordQuery,
    });
    const inputRender = getControl('Input', {
        addonAfter:
            type === 'password' ? (
                <Icon
                    onClick={() => {
                        setEyeVisible(!eyeVisible);
                    }}
                    type={eyeVisible ? 'eye-invisible' : 'eye'}
                />
            ) : (
                openBtn
            ),
        onChange,
        ...others,
        className: `${useFrequentWord ? 'z-FrequentWord-input' : ''} ${others.className || ''}`,
        type: type === 'password' ? (!eyeVisible ? 'password' : 'text') : type,
    });
    const inputContent = useFrequentWordRender({
        popoverState,
        setPopoverState,
        frequentWordFieldNames,
        onChange,
        inputRender,
        useFrequentWord,
        getList,
        addFrequentWord,
        updateFrequentWord,
        deleteFrequentWord,
        getFrequentWordQuery,
    });
    return inputContent;
};

export default React.memo(PasswordInput);
