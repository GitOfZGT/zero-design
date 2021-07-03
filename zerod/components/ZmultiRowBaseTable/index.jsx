import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Checkbox, Input } from 'antd';
import { dataType, getStyle } from '../zTool';

import ZpageLoading from '../ZpageLoading';
import './style.scss';

export default class ZmultiRowBaseTable extends React.PureComponent {
    static propTypes = {
        titleGroups: PropTypes.arrayOf(PropTypes.object),
        items: PropTypes.arrayOf(PropTypes.object),
        showAddButton: PropTypes.bool,
        showRemoveButton: PropTypes.bool,
        disabled: PropTypes.bool,
    };
    static defaultProps = {
        showAddButton: true,
        showRemoveButton: true,
        titleGroups: [],
        items: [],
    };
    state = {
        columnsGroups: [],
        columns: [],
        exceedWrapperWidth: false,
    };
    componentDidMount() {
        this.initStateData();
        this.tableBodyWrapperRef.current.addEventListener('scroll', this.onBodyScroll, false);
        this.addEventForScrollYWrapper(this.getScrollYWrapper());
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.initStateData();
        } else if (this.props.titleGroups !== prevProps.titleGroups) {
            this.viewStateData(this.state.columns);
        }
        if (
            this.props.dataSource !== prevProps.dataSource &&
            (this.props.dataSource.length > prevProps.dataSource.length ||
                this.props.dataSource.length < prevProps.dataSource.length)
        ) {
            this.addEventForScrollYWrapper(this.getScrollYWrapper());
        }
    }
    componentWillUnmount() {
        this.tableBodyWrapperRef.current.removeEventListener('scroll', this.onBodyScroll, false);
        if (this.scrollYWrapper) {
            this.scrollYWrapper.removeEventListener('scroll', this.onScrollYWrapperScroll, false);
        }
    }
    render() {
        const { columnsGroups, columns, tableWidth, exceedWrapperWidth } = this.state;
        const { children, dataSource, allChecked, onAllChecked, onAdd, onRemove, className, disabled } = this.props;
        const showAddButton = disabled ? !disabled : this.props.showAddButton;
        const showRemoveButton = disabled ? !disabled : this.props.showRemoveButton;
        return (
            <div className={`z-multi-row-wrapper ${className || ''}`}>
                <ZpageLoading ref={this.loadingRef} size="small" />
                <div>
                    <div ref={this.ceilingRef}>
                        {showAddButton || showRemoveButton ? (
                            <div className="z-multi-row-tool">
                                {showAddButton ? (
                                    <span className="z-option-btn-item" onClick={onAdd}>
                                        <Icon type="plus"></Icon>
                                    </span>
                                ) : null}
                                {showRemoveButton ? (
                                    <span className="z-option-btn-item delete" onClick={onRemove}>
                                        <Icon type="minus"></Icon>
                                    </span>
                                ) : null}
                            </div>
                        ) : null}
                        <div
                            className="z-multi-row-table-wrapper __header"
                            style={{ visibility: columns.length ? 'visible' : 'hidden' }}
                            ref={this.tableHeaderWrapperRef}>
                            <table
                                className="z-multi-row-table"
                                style={{ width: tableWidth }}
                                ref={this.tableHeaderRef}>
                                <colgroup>
                                    {showRemoveButton ? <col width="40px"></col> : null}
                                    <col width="56px"></col>
                                    {columns.map((col, i) => {
                                        return (
                                            <col
                                                key={col.key}
                                                width={
                                                    !exceedWrapperWidth && columns.length - 1 === i
                                                        ? 'auto'
                                                        : col.labelWidth
                                                }
                                            />
                                        );
                                    })}
                                </colgroup>
                                {columns.length ? (
                                    <thead>
                                        {columnsGroups.length ? (
                                            <tr>
                                                {showRemoveButton ? (
                                                    <th rowSpan="2">
                                                        <Checkbox
                                                            className="z-multi-row-checked"
                                                            checked={allChecked}
                                                            onChange={onAllChecked}
                                                            disabled={!dataSource.length}
                                                        />
                                                    </th>
                                                ) : null}
                                                <th rowSpan="2">
                                                    <span>序号</span>
                                                </th>
                                                {columnsGroups.map((g, i) => {
                                                    return (
                                                        <th key={g.id || g.title} colSpan={g.colLen}>
                                                            <div>{g.title}</div>
                                                        </th>
                                                    );
                                                })}
                                            </tr>
                                        ) : null}
                                        <tr>
                                            {!columnsGroups.length && showRemoveButton ? (
                                                <th>
                                                    <Checkbox
                                                        className="z-multi-row-checked"
                                                        checked={allChecked}
                                                        onChange={onAllChecked}
                                                        disabled={!dataSource.length}
                                                    />
                                                </th>
                                            ) : null}
                                            {!columnsGroups.length ? (
                                                <th>
                                                    <span>序号</span>
                                                </th>
                                            ) : null}
                                            {columns.map((col, i) => {
                                                return (
                                                    <th key={col.key}>
                                                        <div>{col.label}</div>
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                    </thead>
                                ) : null}
                            </table>
                        </div>
                    </div>
                </div>
                <div
                    className="z-multi-row-table-wrapper __body"
                    style={{ visibility: columns.length ? 'visible' : 'hidden' }}
                    ref={this.tableBodyWrapperRef}>
                    <table className="z-multi-row-table" style={{ width: tableWidth }}>
                        <colgroup>
                            {showRemoveButton ? <col width="40px"></col> : null}
                            <col width="56px"></col>
                            {columns.map((col, i) => {
                                return (
                                    <col
                                        key={col.key}
                                        width={
                                            !exceedWrapperWidth && columns.length - 1 === i ? 'auto' : col.labelWidth
                                        }
                                    />
                                );
                            })}
                        </colgroup>
                        {typeof children === 'function' ? children({ dataSource, columns }) : null}
                    </table>
                </div>
            </div>
        );
    }

    tableHeaderWrapperRef = React.createRef();
    tableBodyWrapperRef = React.createRef();
    tableHeaderRef = React.createRef();
    ceilingRef = React.createRef();
    initStateData = (items) => {
        this.methods.showLoading(true);
        const allAsync = [];
        const fromItems = [...(Array.isArray(items) ? items : this.props.items)];
        const newItems = [];
        fromItems.forEach((one) => {
            const item = { ...one };
            newItems.push(item);
            const render = item.render;
            if (!render || !dataType.isFunction(render)) {
                return;
            }
            const _return = render(this.props.form, this.methods.changeFormItems);
            if (typeof item.show === 'undefined' || item.show) {
                if (dataType.isPromise(_return)) {
                    allAsync.push({ async: _return, key: item.key });
                    item.render = () => <Input size={this.props.controlSize} placeholder="加载中" disabled></Input>;
                    return;
                }
            }
            if (typeof _return === 'function') {
                item.render = _return;
                return;
            }
            item.render = render;
        });
        this.viewStateData(newItems)
            .then(() => {
                if (allAsync.length) {
                    return Promise.all(allAsync.map((item) => item.async)).then((res) => {
                        res.forEach((control, i) => {
                            this.state.columns.forEach((item) => {
                                if (item.key === allAsync[i].key) {
                                    item.render = () => control;
                                }
                            });
                            this.setState({
                                columns: [...this.state.columns],
                            });
                        });
                    });
                }
            })
            .finally(() => {
                this.methods.showLoading(false);
            });
    };
    viewStateData = (items) => {
        const { titleGroups, showRemoveButton } = this.props;
        const columnsGroups = [];
        let columns = [];
        if (titleGroups.length) {
            const groups = {};
            items.forEach((item) => {
                const id = item.groupId !== undefined ? item.groupId : 'no_group_gatter';
                const group = groups[id] || [];
                group.push(item);
                groups[id] = group;
            });
            const hasIds = [];
            titleGroups.forEach((item) => {
                const group = groups[item.id];
                if (group && group.length) {
                    hasIds.push(item.id.toString());
                    columnsGroups.push({ title: item.title, colLen: group.length });
                    columns = columns.concat(group);
                }
            });
            let no_group_gatter_num = 0;
            Object.keys(groups)
                .filter((key) => !hasIds.includes(key))
                .forEach((key) => {
                    no_group_gatter_num += groups[key].length;
                    columns = columns.concat(groups[key]);
                });
            if (no_group_gatter_num) {
                columnsGroups.push({ title: '', colLen: no_group_gatter_num });
            }
        } else {
            columns = items;
        }
        let tableWidth = 0;
        columns.forEach((item) => {
            item.labelWidth = item.labelWidth || '220px';
            tableWidth += parseInt(item.labelWidth);
        });
        tableWidth = tableWidth + (showRemoveButton ? 40 : 0) + 56;
        return new Promise((resolve) => {
            this.setState(
                (prevState) => {
                    return {
                        ...prevState,
                        columnsGroups,
                        columns,
                        tableWidth,
                        exceedWrapperWidth: this.tableHeaderWrapperRef.current.clientWidth < tableWidth,
                    };
                },
                () => {
                    resolve();
                },
            );
        });
    };
    loadingRef = React.createRef();
    methods = {
        //手动显示loading
        showLoading: (show) => {
            this.loadingRef.current && this.loadingRef.current.methods.showLoading(show);
        },
    };
    onBodyScroll = (e) => {
        this.tableHeaderRef.current.style.left = `-${this.tableBodyWrapperRef.current.scrollLeft}px`;
    };
    getScrollYWrapper = () => {
        let wrapperEl = this.tableHeaderWrapperRef.current;
        while (
            wrapperEl &&
            (!['auto', 'scroll'].includes(getStyle(wrapperEl, 'overflow-y')) || !this.isShowingScroller(wrapperEl))
        ) {
            wrapperEl = wrapperEl.parentElement;
        }
        return wrapperEl;
    };
    isShowingScroller = (wrapperEl) => {
        if (wrapperEl && !getStyle(wrapperEl, 'display').includes('inline')) {
            let contentHeight = 0;
            Array.from(wrapperEl.children).forEach((el) => {
                if (!['absolute', 'fixed'].includes(getStyle(el, 'position'))) {
                    contentHeight +=
                        el.clientHeight +
                        parseInt(getStyle(el, 'margin-top'), 10) +
                        parseInt(getStyle(el, 'margin-bottom'), 10);
                }
            });
            // console.log(wrapperEl.scrollHeight, contentHeight);
            return wrapperEl.clientHeight < contentHeight;
        }
    };
    onScrollYWrapperScroll = (e) => {
        const scrollRect = this.scrollYWrapper.getBoundingClientRect();
        const currentCeilingReact = (this.shadowEl || this.ceilingRef.current).getBoundingClientRect();
        this.ceilingInitRect = { top: currentCeilingReact.top - scrollRect.top + this.scrollYWrapper.scrollTop };
        if (
            this.ceilingInitRect.top < this.scrollYWrapper.scrollTop &&
            this.tableBodyWrapperRef.current.clientHeight + this.ceilingInitRect.top > this.scrollYWrapper.scrollTop
        ) {
            if (this.shadowEl) {
                return;
            }
            this.shadowEl = document.createElement('div');
            const scrollRect = this.scrollYWrapper.getBoundingClientRect();
            const currentCeilingReact = this.ceilingRef.current.getBoundingClientRect();
            this.shadowEl.style.height = currentCeilingReact.height + 'px';
            this.ceilingRef.current.parentElement.appendChild(this.shadowEl);
            this.ceilingRef.current.style.position = 'fixed';
            this.ceilingRef.current.style.width = currentCeilingReact.width + 'px';
            this.ceilingRef.current.style.top = scrollRect.top + 'px';
            this.ceilingRef.current.style.left = currentCeilingReact.left + 'px';
            this.ceilingRef.current.style.zIndex = 9;
            this.ceilingRef.current.style.backgroundColor = 'white';
        } else {
            if (this.shadowEl) {
                this.shadowEl.parentElement.removeChild(this.shadowEl);
            }
            this.ceilingRef.current.style.position = 'relative';
            this.ceilingRef.current.style.width = '';
            this.ceilingRef.current.style.top = '';
            this.ceilingRef.current.style.left = '';
            this.ceilingRef.current.style.backgroundColor = '';
            this.shadowEl = null;
        }
    };
    addEventForScrollYWrapper = (el) => {
        if (el) {
            if (this.scrollYWrapper) {
                this.scrollYWrapper.removeEventListener('scroll', this.onScrollYWrapperScroll, false);
            }
            this.scrollYWrapper = el;
            this.scrollYWrapper.addEventListener('scroll', this.onScrollYWrapperScroll, false);
        }
    };
}
