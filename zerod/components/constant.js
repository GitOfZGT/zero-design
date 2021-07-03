/* eslint-disable no-use-before-define */
/*
 * @Author: zgt
 * @Date: 2018-08-21 10:59:31
 * @LastEditors: zgt
 * @LastEditTime: 2019-09-30 10:52:18
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ZsearchTags from './ZsearchTags';
import { Button, notification, message, Input, Tooltip } from 'antd';
import { dataType, GenNonDuplicateID, arrayFilterBy, getStyle } from './zTool';
import ZpanelTitle from './ZpanelTitle';
import './constant.scss';
export function const_getDomZIndex(wrapperEl = document.body) {
    let zindex = 1;
    Array.from(wrapperEl.children).forEach((el) => {
        const index = window.parseFloat(getStyle(el, 'z-index'), 10);
        if (zindex < index) {
            zindex = index;
        }
    });
    return zindex + 1;
}

const noticeMethod = {
    notification,
    message,
};
export const requireValid = {
    hasData(result) {
        if (!dataType.isObject(result.data) && !dataType.isArray(result.data)) {
            return Promise.reject({ msg: `响应体缺少data对象` });
        }
    },
};
// 相同的methods ,调用 const_getMethods.call(this)
export const const_getMethods = function() {
    return {
        notice: const_notification(this.props.noticeType),
        showLoading: (show) => {
            const_showLoading(this.insertLocation, this.props)(show);
        },
        openModal: (content) => {
            const showRightModal = this.props.showLayerRightModal || this.props.showRightModal;
            content && showRightModal && showRightModal(true, const_getModalType(this.insertLocation), content);
        },
        closeCurrentModal: () => {
            if (this.insertLocation !== const_insertLocations.mainRoute) {
                const showRightModal = this.props.showLayerRightModal || this.props.showRightModal;
                showRightModal && showRightModal(false, this.insertLocation);
            }
        },
    };
};

//通知方式：
const notice_config = {
    notification: {
        duration: 3,
        placement: 'topRight',
        message: '提示信息',
    },
    message: {
        duration: 3,
        onClose: undefined,
    },
};
const notice_names = ['success', 'error', 'info', 'warning'];
// const_notification("notification").success("内容")
export const const_notification = function(noticeType = 'message') {
    const notice = {};
    notice_names.forEach((name) => {
        notice[name] = function(content, newConfig = {}) {
            const agur = {
                ...notice_config[noticeType],
                ...newConfig,
                description: content,
            };
            const type = agur.noticeType ? agur.noticeType : noticeType;
            if (type == 'notification') {
                noticeMethod[type][name](agur);
            } else if (type == 'message') {
                noticeMethod[type][name](content, agur.duration, agur.onClose);
            }
        };
    });
    return notice;
};

// 获取mainHOC提供的tool , const_getMainTool.call(this);
export const const_getMainTool = function() {
    const tool = {};
    [
        'getSideMenuData',
        'showRouteLoading',
        'showModalLoading',
        'setScrollToTop',
        'getUserInfo',
        'showRightModal',
        '$router',
        'getTemporaryStorage',
        'setTemporaryStorage',
        'getScrollAreaWrapperEl',
        'getInsertLocation',
    ].forEach((key) => {
        tool[key] = this.props[key];
    });
    return tool;
};
//定义HOC放置的位置类型
export const const_insertLocations = {
    mainRoute: 'mainRoute',
    mainModal: 'mainModal',
    mainModal_top: 'mainModal_top',
    appModal: 'appModal',
    appModal_top: 'appModal_top',
};
//获取当前HOC的放置位置
export const const_getInsertLocation = function(el) {
    if (el) {
        let _parent = el.parentElement;
        while (_parent && !_parent.dataset.zgt_modal) {
            _parent = _parent.parentElement;
        }
        return _parent && _parent.dataset.zgt_modal ? _parent.dataset.zgt_modal : 'mainRoute';
    }
    return null;
};
//
export const const_showLoading = (insertLocation, props) => {
    return function(show) {
        const showLoadingFun = props.showLayerModalLoading || props.showModalLoading;
        if (typeof showLoadingFun === 'function') {
            showLoadingFun(show, insertLocation);
        }
    };
};

export const const_getModalType = (insertLocation) => {
    switch (insertLocation) {
        case const_insertLocations.mainRoute:
            return const_insertLocations.mainModal;
        case const_insertLocations.mainModal:
            return const_insertLocations.mainModal_top;
        case const_insertLocations.mainModal_top:
            return const_insertLocations.appModal;
        case const_insertLocations.appModal:
            return const_insertLocations.appModal_top;
        case const_insertLocations.appModal_top:
            return 'noModal';
    }
};

export const animateTimout = {
    flipInTime: 500,
    flipOutTime: 300,
};
function addItemCss(classNames) {
    let ht = '';
    classNames.forEach((item) => {
        ht += `.${item.className} .ant-form-item-label{width:${item.width} !important;white-space:normal !important;}`;
    });
    if (this.styleEl) {
        this.styleEl.innerHTML = ht;
    } else {
        this.styleEl = document.createElement('style');
        this.styleEl.innerHTML = ht;
        document.head.appendChild(this.styleEl);
    }
}
function const_extendItem(needRef, item, render, hasItemClass, renderArgument, changeItems, index, temporaryArr) {
    let control = (value) => value;
    let loading = false;
    let renderValue = null;
    let _return = null;
    if (
        typeof item.show === 'undefined' ||
        item.show ||
        (item.hasOwnProperty('hiddenRendering') ? !!item.hiddenRendering : this.props.hiddenItemFirstRendering)
    ) {
        if (typeof render === 'function') {
            _return = render(
                typeof changeItems === 'function' ? renderArgument : (renderArgument || {})[item.key],
                typeof changeItems === 'function' ? changeItems : renderArgument,
                item,
            );
        }
        if (dataType.isPromise(_return) && index !== undefined) {
            temporaryArr.push({ promise: _return, index });
            renderValue = <Input size={this.props.controlSize} placeholder="加载中"></Input>;
            loading = true;
        } else if (dataType.isFunction(_return)) {
            renderValue = _return;
        }
    }

    if (renderValue) {
        control = renderValue;
    } else {
        control = render;
    }
    let defaultSpan = this.props.defaultSpan;
    defaultSpan = dataType.isNumber(defaultSpan) ? { md: defaultSpan } : defaultSpan;
    let ramdon = '';
    const itemClassName =
        item.labelWidth && this.props.labelLayout === 'horizontal'
            ? ((ramdon = `z-form-item-${item.key}${GenNonDuplicateID()}`),
              hasItemClass.push({
                  className: ramdon,
                  width: /^\d+$/.test(item.labelWidth.toString()) ? `${item.labelWidth}px` : item.labelWidth,
              }),
              ramdon)
            : '';
    const newItem = {
        ...item,
        loading,
        control,
        defaultSpan,
        itemClassName,
    };
    if (needRef && !newItem.ref) {
        newItem.ref = React.createRef();
    }
    return newItem;
}
//如在Zform中使用const_initItems.call(this,this.props.items,<Input placeholder="加载中" />);
export const const_initItems = function(items, renderArgument = {}, changeItems = function() {}, callback) {
    callback = dataType.isFunction(callback) ? callback : function() {};
    const temporaryArr = [];
    // this.filedKeys = [];
    const hasItemClass = [];
    const newItems = items.map((item, index) => {
        const render = item.render;
        if (render && !dataType.isFunction(render)) {
            throw Error('render属性必须是函数');
        }

        // this.filedKeys.push(item.key);
        return const_extendItem.call(
            this,
            true,
            item,
            render,
            hasItemClass,
            renderArgument,
            changeItems,
            index,
            temporaryArr,
        );
    });
    //保存正在请求的promise
    this.allAsync = temporaryArr;
    addItemCss.call(this, hasItemClass);
    this.setState(
        {
            items: newItems,
        },
        callback,
    );
};

export const const_itemSpan = function(control, currentSpan, defaultSpan) {
    let span = defaultSpan;
    if (currentSpan !== undefined && currentSpan !== null) {
        span = dataType.isNumber(currentSpan) ? { md: currentSpan } : currentSpan;
    }
    return span;
};

//如在Zform中使用 const_execAsync.call(this,callback);
export const const_execAsync = function(callback) {
    callback = dataType.isFunction(callback) ? callback : function() {};
    if (this.allAsync.length) {
        this.allAsync.forEach((asy) => {
            asy.promise = asy.promise
                .then((control) => {
                    // console.log(control, '******control');
                    if (this.unmounted) return;
                    const formItem = this.state.items[asy.index].ref.current;
                    if (control) {
                        this.state.items[asy.index].control = control;
                        formItem.methods.changeItem({
                            control,
                        });
                    }
                    formItem.methods.showLoading(false);
                })
                .catch((e) => {
                    if (this.unmounted) return;
                    this.allAsync.forEach((asy) => {
                        const formItem = this.state.items[asy.index].ref.current;
                        formItem.methods.showLoading(false);
                    });
                });
        });
        Promise.all(
            this.allAsync.map((asy) => {
                return asy.promise;
            }),
        ).finally(() => {
            if (this.unmounted) return;
            this.setState({
                items: [...this.state.items],
            });
            this.allAsync = [];
            this.setFieldsValue();
            callback(this.props.form, this.methods);
        });
    } else {
        this.setFieldsValue();
        callback(this.props.form, this.methods);
    }
};
export function const_changeFormItems(newItems, part = false, callback) {
    if (part) {
        //part 表示局部
        let itemsKeys = [],
            items = [];
        if (dataType.isObject(newItems)) {
            itemsKeys = [{ key: newItems.key }];
            items = [newItems];
        } else if (dataType.isArray(newItems)) {
            itemsKeys = newItems.map((item) => ({ key: item.key }));
            items = newItems;
        }
        const needChangeItems = arrayFilterBy(this.state.items, itemsKeys);
        let promises = [];
        needChangeItems.forEach((item, i) => {
            const formItem = item.ref.current;
            const theItem = arrayFilterBy(items, { key: item.key })[0];
            const newColItem = {};
            if (theItem) {
                if (Object.prototype.hasOwnProperty.call(theItem, 'loading')) {
                    newColItem.loading = theItem.loading;
                }
                if (Object.prototype.hasOwnProperty.call(theItem, 'show')) {
                    newColItem.show = theItem.show;
                }
                if (Object.prototype.hasOwnProperty.call(theItem, 'newItem')) {
                    newColItem.item = theItem.newItem;
                    // newItem={
                    // 	control:<Input></Input>,
                    // 	span:{lg:12},
                    // 	options:{},
                    // 	isFormItem:true,
                    // 	label:"",
                    // }
                }

                newColItem.disabled = theItem.disabled;

                let itemPromise = null;
                if (
                    newColItem.show &&
                    !formItem.state.firstShow &&
                    ((newColItem.item && !newColItem.item.control) || !newColItem.item)
                ) {
                    const rendered = formItem.state.item.render(this.form, this.methods.changeFormItems);

                    if (dataType.isPromise(rendered)) {
                        formItem.methods.updateState({
                            show: true,
                            loading: true,
                            item: {
                                control: <Input size={this.props.controlSize} placeholder="加载中"></Input>,
                            },
                        });

                        itemPromise = new Promise(function(resolve) {
                            rendered
                                .then((newcontrol) => {
                                    formItem.methods.updateState(
                                        {
                                            loading: false,
                                            item: { control: newcontrol },
                                            disabled: newColItem.disabled,
                                        },
                                        resolve,
                                    );
                                })
                                .catch((e) => {
                                    resolve();
                                });
                        });
                    } else {
                        if (dataType.isFunction(rendered)) {
                            newColItem.item = { control: rendered };
                        }
                        itemPromise = new Promise(function(resolve) {
                            formItem.methods.updateState(newColItem, resolve);
                        });
                    }
                } else {
                    itemPromise = new Promise(function(resolve) {
                        formItem.methods.updateState(newColItem, resolve);
                    });
                }

                promises.push(itemPromise);
            }
        });
        if (promises.length && typeof callback === 'function') {
            Promise.all(promises).then(callback);
        } else {
            promises = null;
        }
    } else {
        this.execAsync(newItems);
    }
}
//ZtreePanel和ZlistPanel的heading,这里不能是箭头函数
export const const_getPanleHeader = function(hasControl) {
    const tool = this.getExportSomething();
    const { showAddBtn, addBtnDisabled } = this.props;
    const _showAddBtn = typeof showAddBtn == 'function' ? showAddBtn(tool) : showAddBtn;
    const _addBtnDisabled = typeof addBtnDisabled == 'function' ? addBtnDisabled(tool) : addBtnDisabled;
    this.addBtn =
        _showAddBtn && !this.state.isListCard ? (
            <Button disabled={_addBtnDisabled} type="primary" icon="plus" onClick={this.methods.onAdd}>
                {this.props.addBtnName || '新增'}
            </Button>
        ) : null;
    const heading = this.props.panelHeader;
    let left = null,
        center = null,
        right = null;

    if (dataType.isObject(heading)) {
        left = dataType.isFunction(heading.left) ? heading.left(tool) : left;
        center = dataType.isFunction(heading.center) ? heading.center(tool) : center;
        right = dataType.isFunction(heading.right) ? heading.right(tool) : right;
    } else if (dataType.isFunction(heading)) {
        left = heading(tool);
    } else {
        left = heading;
    }
    const items = this.colFormItems;
    const reloadBtn =
        this.props.reloadBtn === false ? null : (
            <Tooltip placement="top" title="刷新">
                <Button type="primary" icon="reload" onClick={this.methods.onReload}></Button>
            </Tooltip>
        );
    return (
        <div>
            <div
                ref={(el) => {
                    this.searchTagsWrapperEl = el;
                }}></div>
            {this.searchForm || left || center || right || items.length || this.addBtn || reloadBtn ? (
                <div className="z-flex-items-v-center z-flex-space-between">
                    {left ? (
                        <div className="z-list-header-left">
                            {typeof left === 'string' ? <ZpanelTitle>{left}</ZpanelTitle> : left}
                        </div>
                    ) : null}
                    <div className="z-list-header-center">{this.searchForm}</div>
                    {center}
                    {right || this.addBtn || reloadBtn ? (
                        <div className="z-list-header-right">
                            {right}
                            {reloadBtn}
                            {this.addBtn}
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

/**----------------共有的属性-------------- */
const common_protos = {
    //面板头部string | function(){return ReactNode}
    panelHeader: '',
    // 是否显示新建按钮
    showAddBtn: true,
    // 新建按钮权限控制代码
    addBtnPermCode: '',
    addPageRender: (tool) => {
        return <div>新增页面</div>;
    },
    // 是否显示详情按钮
    showDetailBtn: true,
    // 详情按钮权限控制代码
    detailBtnPermCode: '',
    detailPageRender: (record, tool) => {
        return <div>详情页面</div>;
    },
    // 是否显示修改按钮
    showUpdateBtn: true,
    // 修改按钮权限控制代码
    updateBtnPermCod: '',
    updatePageRender: (record, tool) => {
        return <div>修改页面</div>;
    },
    // 是否显示删除按钮
    showDeleteBtn: true,
    // 删除按钮权限控制代码
    deleteBtnPermCod: '',
    //更多操作按钮的map数据 [{key: "0",name: "默认的按钮",}]
    moreBtnMap: null,
    moreBtnType: 'rounding', // rounding | menu
    onMoreBtnClick: (item, record) => {},
    // 删除按钮后台接口函数，其必须内部返回Promise
    deleteApiInterface: (data) => Promise.resolve({ data: {} }),
    //用于接收列表内部一些东西的钩子 (obj)=>{}
    exportSomething: null,
    panelBeforeRender: null,
    panelAfterRender: null,
    moreContentRender: null,
};
const private_protos = {
    ZlistPanel: {
        // 列表类型 table | card
        listType: 'table',
        cardSpan: { xxl: 6, xl: 8, lg: 12, md: 24 },
        cardCoverRender: null, // listType=="card"时的一个前置render
        // 表格操作列的字段key
        actionDataIndex: 'action',
        actionRender: null, // 操作列的render,可以自定义操作列的按钮
        // 对应antd的Table的参数
        tableParams: {},
        // 表格列map数据，同antd的表格 columns
        tableColumns: [],
        // 获取列表数据的后台接口函数，其必须内部返回Promise
        listApiInterface: (query, sorter) => Promise.resolve({ data: [] }),
        // 分页
        showPagination: true,
        // 分页类型 paging | infinite
        paginationType: 'paging',
        // 设置pageSize的钩子 (listType, isListCard)=>isListCard ? 8 : 10
        getPageSize: function(listType, isListCard) {
            return isListCard ? 8 : 10;
        },
        actionColumnWidth: 'auto',
    },
    ZtreePanel: {
        treeDataKeys: { name: 'name', id: 'id', children: 'children' },
        treeApiInterface: (query) => Promise.resolve({ data: [] }),
        // childApiInterface: (query) => Promise.reject({ mag: "未提供后台接口" }),
        childApiInterface: false,
        treeProps: {},
        //是否显示新增子节点按钮
        showAddChildBtn: true,
        // 是否禁用新增子节点按钮
        addChildBtnDisabled: false,
        // 新增子节点页面渲染模板
        addChildPageRender: null,
    },
};

export const const_getListConfig = (name, componentName) => {
    const list = Object.assign({}, common_protos, private_protos[componentName]);
    return {
        pageHeader: {
            show: true,
            // array>[object] | null,如果是null则不显示面包屑
            breadcrumbRoutes: [],
            // any
            title: '',
            //any
            content: '',
            //element | node
            rightMoreContent: null,
        },
        pageFooter: undefined,
        hasBodyPadding: true,
        searchForm: {
            // defaultExpanded: false,
            insertTo: false,
            // array>[object] | null，如果是null则不显示搜索表单
            items: [
                // {
                // 	key: "name",
                // 	label: "字段名称",
                // 	render: (form) => {
                // 		return <Input placeholder="请输入内容" />;
                // 	},
                // 	//antd的 form.getFieldDecorator的options
                // 	options: {
                // 		//验证规则
                // 		rules: [
                // 			{
                // 				required: true,
                // 				message: "不能为空。",
                // 			},
                // 		],
                // 	},
                // },
            ],
        },
        [name]: list,
    };
};
import { ZpageWrapperProps } from './ZpageWrapper';
export const const_getPageWrapperProps = function(config) {
    const newProps = {};
    Object.keys(ZpageWrapperProps).forEach((key) => {
        if (config[key] != undefined) {
            newProps[key] = config[key];
        }
    });
    return newProps;
};

export function const_extendArguments(func, ...otherArg) {
    if (dataType.isFunction(func))
        return (...arg) => {
            return func(...arg, ...otherArg);
        };
}
//ZlistPanel 和 ZtreePanel 调用 const_extendPanelFormConfig.call(this)
export function const_extendPanelFormConfig() {
    const config = this.props.searchForm;
    if (config) {
        const newConfig = {};
        Object.keys(config).forEach((key) => {
            if (dataType.isFunction(config[key])) {
                newConfig[key] = const_extendArguments(config[key], this.getExportSomething());
            } else {
                newConfig[key] = config[key];
            }
        });
        return newConfig;
    }
}
//ZlistPanel 和 ZtreePanel 调用 const_getPanelDefaultFormItems.call(this)
export function const_getPanelDefaultFormItems() {
    const formItems =
        this.props.colFormItems && this.props.colFormItems.length
            ? this.props.colFormItems
            : this.searchFormConfig
            ? this.searchFormConfig.items
            : [];
    const tool = this.getExportSomething();
    return formItems.map((item) => {
        const options = dataType.isFunction(item.options) ? const_extendArguments(item.options, tool) : item.options;
        return {
            ...item,
            render: const_extendArguments(item.render, tool),
            options,
        };
    });
}
//ZlistPanel 和 ZtreePanel 调用 const_searchFormNode.call(this)，给this.searchForm赋值
export function const_searchFormNode() {
    const {
        customSearchRender,
        items,
        onSearch,
        onReset,
        insertTo,
        tagsPlacement,
        getFormInstance,
        popoverProps,
        ...formOthers
    } = this.searchFormConfig ? this.searchFormConfig : {};
    const ZsearchProps = {
        popoverProps: { placement: 'bottomLeft', ...(popoverProps || {}) },
        labelLayout: 'inline',
        items: this.colFormItems,
        onSearch: this.methods.onSearch,
        onReset: this.methods.onReset,
        tagClassName: tagsPlacement !== 'in' ? 'z-margin-bottom-10' : '',
        ...formOthers,
        getFormInstance: (form, methods) => {
            this.getSearchFormMethods && this.getSearchFormMethods(form, methods);
            getFormInstance && getFormInstance(form, methods);
        },
        getTagsContainer:
            tagsPlacement !== 'in'
                ? () => {
                      return this.searchTagsWrapperEl;
                  }
                : undefined,
    };
    this.searchForm =
        this.colFormItems && this.colFormItems.length ? (
            customSearchRender ? (
                customSearchRender(ZsearchProps)
            ) : (
                <ZsearchTags {...ZsearchProps} />
            )
        ) : null;
    let insertEl = null;
    const insertor = dataType.isFunction(insertTo) ? insertTo(this.getExportSomething()) : insertTo;
    if (dataType.isBoolean(insertor) && insertor && this.props.pageId) {
        insertEl = document.getElementById(this.props.pageId);
    } else if (dataType.isElement(insertor)) {
        insertEl = insertor;
    } else if (insertor && dataType.isString(insertor)) {
        insertEl = document.getElementById(insertor);
    }
    if (this.searchForm && insertEl) {
        this.searchForm = ReactDOM.createPortal(this.searchForm, insertEl);
    }
}

export const const_showRightModal = function(show, witch, content, scroll, onTransitionend, wrapperEl, width, mask) {
    let options = {
        show,
        witch,
        content,
        scroll,
        onTransitionend,
        wrapperEl,
        width,
        mask,
    };
    if (dataType.isObject(show)) {
        options = { ...options, ...show };
    }
    this.RightModalsRef.current.methods.changeModals(options, wrapperEl || this.defaultWrapper || document.body);
};
export const const_showModalLoading = function(show, witch, tip) {
    const modal = this.RightModalsRef.current.methods.findModal(witch);
    modal && modal.ref.current && modal.ref.current.methods.showModalLoading(show, tip);
};
export const const_getModalScrollInstance = function(witch) {
    const modal = this.RightModalsRef.current.methods.findModal(witch);
    return modal && modal.ref.current && modal.ref.current.methods.getScrollInstance();
};
export const const_getScrollAreaWrapperEl = function(witch) {
    const modal = this.RightModalsRef.current.methods.findModal(witch);
    return modal && modal.ref.current && modal.ref.current.methods.getWrapperEl();
};
