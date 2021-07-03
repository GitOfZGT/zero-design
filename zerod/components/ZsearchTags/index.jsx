import React, { useEffect, useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Button, Tag, Spin, Popover, Tooltip } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
// import PropTypes from 'prop-types';
import Zform from '../Zform';
import './style.scss';
const confirm = {
    show: false,
};
const defaultProps = {
    labelLayout: 'vertical',
    momentFormat: true,
};
export const ZsearchTags = React.memo((props) => {
    const {
        getFormInstance,
        items,
        labelLayout,
        momentFormat,
        getTagsContainer,
        onSearch,
        onReset,
        popoverProps,
        afterItemsRendered,
        tagClassName,
        tagChildren,
        searchColConfig,
        defaultTags,
        ...others
    } = props;
    const [state, setState] = useState({
        formItems: [],
        popoverVisible: false,
        tags: Array.isArray(defaultTags) ? defaultTags : [],
        spinning: true,
    });
    const { formItems, popoverVisible, tags, spinning } = state;
    const methodsRef = useRef({ form: null, methods: null });
    const searchSubmit = useCallback(
        (values, notClose) => {
            const allValues = Array.isArray(values) ? values.reduce((total, curr) => ({ ...total, curr })) : values;
            const tags = [];
            Object.keys(allValues).forEach((key) => {
                if (
                    key !== '_search-btns_' &&
                    allValues[key] !== null &&
                    allValues[key] !== undefined &&
                    allValues[key] !== '' &&
                    !/Label$/.test(key)
                ) {
                    if (Array.isArray(allValues[key]) && !allValues[key].length) {
                        return;
                    }
                    const _label = allValues[`${key}Label`] || allValues[key];
                    const formItem = items.find((item) => item.key === key);
                    tags.push({
                        key,
                        value: allValues[key],
                        label: _label,
                        title: formItem ? formItem.label : '',
                    });
                }
            });
            setState((prevState) => ({
                ...prevState,
                tags,
                popoverVisible: notClose ? prevState.popoverVisible : false,
            }));
        },
        [items],
    );
    const searchReset = useCallback(() => {
        if (methodsRef.current.form) {
            methodsRef.current.form.resetFields();
            const values = methodsRef.current.methods.getFieldsValue();
            searchSubmit(values, true);
            onReset && onReset(values);
        }
    }, [onReset, searchSubmit]);
    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            formItems: [
                ...items,
                {
                    isFormItem: labelLayout === 'vertical',
                    label: '',
                    key: '_search-btns_',
                    render() {
                        const btns = (
                            <span>
                                <Button type="primary" htmlType="submit" className="z-search-tags-search">
                                    查询
                                </Button>
                                <Button onClick={searchReset}>重置</Button>
                            </span>
                        );
                        return labelLayout === 'vertical' ? (
                            btns
                        ) : (
                            <div className="ant-row ant-form-item z-form-item  ">
                                <div className="ant-col ant-form-item-control-wrapper">
                                    <div className="ant-form-item-control">
                                        <span className="ant-form-item-children">{btns}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    },
                    ...(searchColConfig || {}),
                },
            ],
        }));
    }, [items, labelLayout, searchColConfig, searchReset]);

    const _getFormInstance = useCallback(
        (form, methods) => {
            methodsRef.current = { form, methods };
            getFormInstance && getFormInstance(form, { ...methods, searchReset });
        },
        [getFormInstance, searchReset],
    );
    const container = typeof getTagsContainer === 'function' ? getTagsContainer() : null;
    const tagsNode = (
        <div className={`z-search-tags-tags ${container ? '' : 'z-margin-left-10'}`}>
            <TweenOneGroup
                enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                    onComplete: (e) => {
                        e.target.style = '';
                    },
                }}
                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                appear={false}>
                {tags.map((tag) => {
                    const tagText = typeof tagChildren === 'function' ? tagChildren(tag) : tag.label;
                    return tagText ? (
                        <span key={tag.key} style={{ display: 'inline-block' }}>
                            <Tooltip placement="top" title={tag.title}>
                                <Tag
                                    closable
                                    className={tagClassName}
                                    onClose={(e) => {
                                        e.preventDefault();
                                        setState((prevState) => ({
                                            ...prevState,
                                            tags: prevState.tags.filter((item) => item.key !== tag.key),
                                        }));

                                        if (methodsRef.current.form) {
                                            methodsRef.current.form.setFieldsValue({
                                                [tag.key]: undefined,
                                            });
                                            const values = methodsRef.current.methods.getFieldsValue();
                                            searchSubmit(values);
                                            onSearch && onSearch(values);
                                        }
                                    }}>
                                    {tagText}
                                </Tag>
                            </Tooltip>
                        </span>
                    ) : null;
                })}
            </TweenOneGroup>
        </div>
    );
    const _afterItemsRendered = useCallback(
        (...rest) => {
            setState((prevState) => ({
                ...prevState,
                spinning: false,
            }));
            afterItemsRendered && afterItemsRendered(...rest);
        },
        [afterItemsRendered],
    );
    return (
        <div className="z-search-tags">
            <Popover
                placement="bottom"
                title={
                    <span>
                        全部查询条件
                        <span
                            className="z-search-all-form-close"
                            onClick={() => {
                                setState((prevState) => ({
                                    ...prevState,
                                    popoverVisible: false,
                                }));
                            }}>
                            x
                        </span>
                    </span>
                }
                overlayClassName="z-search-all-form"
                overlayStyle={{ width: '50%' }}
                visible={popoverVisible}
                content={
                    <Spin spinning={spinning}>
                        <Zform
                            momentFormat={momentFormat}
                            labelLayout={labelLayout}
                            items={formItems}
                            submitBtnName=""
                            onSubmit={(values) => {
                                searchSubmit(values);
                                onSearch && onSearch(values);
                            }}
                            getFormInstance={_getFormInstance}
                            confirm={confirm}
                            afterItemsRendered={_afterItemsRendered}
                            {...others}></Zform>
                    </Spin>
                }
                onVisibleChange={(visible) => {
                    setState((prevState) => ({
                        ...prevState,
                        popoverVisible: visible,
                    }));
                }}
                trigger="click"
                {...(popoverProps || {})}>
                <Button type="primary" className="z-search-tags-search">
                    查询条件
                </Button>
            </Popover>
            <Button onClick={searchReset}>重置</Button>
            {tags.length ? (container ? ReactDOM.createPortal(tagsNode, container) : tagsNode) : null}
        </div>
    );
});
ZsearchTags.defaultProps = defaultProps;
export default ZsearchTags;
