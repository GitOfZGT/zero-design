import React from 'react';
import ZpureComponent from '../ZpureComponent';
import { Row, Col, Icon, Button, message, Modal, Empty } from 'antd';
import PropTypes from 'prop-types';
import '../../dragula/dragula.css';
import dragula from '../../dragula/dragula';
import './style.scss';
// import "../../zero-icon/iconfont.css";
import {
    // BuildScroll,
    // listenDivSizeChange,
    addClass,
    removeClass,
    getStyle,
    // arrayFilterBy,
    GenNonDuplicateID,
    hasClass,
    once,
} from '../zTool';

function getTransferTarget(target) {
    let el = target;
    while (
        el &&
        (typeof el.className !== 'string' ||
            (typeof el.className == 'string' && !el.className.includes('z-transfer-li')))
    ) {
        if (el.parentElement) {
            el = el.parentElement;
        } else {
            break;
        }
    }
    return el;
}

class Template extends React.Component {
    render() {
        return this.props.children;
    }
}
const _paddingLeft = '1em';
class ZTransfer extends ZpureComponent {
    static propTypes = {
        getUlElement: PropTypes.func,
        sourceKeys: PropTypes.object,
        sourceData: PropTypes.arrayOf(PropTypes.object),
        headerRender: PropTypes.func,
        itemRender: PropTypes.func,
    };
    static defaultProps = {
        getUlElement: function() {},
        sourceData: [],
    };
    methods = {
        showSubNextEl: (show, el, itemKey) => {
            el.animating = true;
            const $next = el.nextElementSibling;
            const animate = show ? 'flipX-enter fast' : 'flipX-exit fast';
            if ($next && hasClass($next, 'z-transfer-li') && !hasClass($next, 'is-sub')) {
                const nextData = JSON.parse($next.dataset.item);
                if (nextData.parName === itemKey) {
                    if (show) {
                        $next.style.display = '';
                        addClass($next, animate);
                        once($next, 'animationend', () => {
                            removeClass($next, animate);
                            el.animating = false;
                        });
                    } else {
                        addClass($next, animate);
                        once($next, 'animationend', () => {
                            $next.style.display = 'none';
                            removeClass($next, animate);
                            el.animating = false;
                        });
                    }
                    this.methods.showSubNextEl(show, $next, itemKey);
                }
            }
        },
        expandNext: (e) => {
            const el = getTransferTarget(e.target);
            if (el.animating) {
                return;
            }
            const $icon = el.querySelector(`.z-right`);
            const subData = JSON.parse(el.dataset.item);
            const expand = 'is-90';
            if ($icon) {
                if (hasClass($icon, expand)) {
                    removeClass($icon, expand);
                    this.methods.showSubNextEl(false, el, subData.itemKey);
                } else {
                    addClass($icon, expand);
                    this.methods.showSubNextEl(true, el, subData.itemKey);
                }
            }
        },
    };
    componentDidMount() {
        // this.scrollInstance = new BuildScroll(this.bodyEl, { scrollbars: 'custom', useCustomScroll: false });
        // if (!this.scrollInstance.scroll.hasVerticalScroll) {
        //     this.scrollInstance.scroll.destroy();
        //     this.destroyed = true;
        // }
        // const changeScroller = () => {
        //     this.scrollInstance.refresh();
        //     if (this.scrollInstance.scroll.hasVerticalScroll && this.destroyed) {
        //         this.destroyed = false;
        //         this.scrollInstance.scroll._init();
        //         this.scrollInstance.refresh();
        //     } else if (!this.scrollInstance.scroll.hasVerticalScroll && !this.destroyed) {
        //         this.destroyed = true;
        //         this.scrollInstance.scroll.destroy();
        //     }
        // };
        // listenDivSizeChange(this.contentEl, changeScroller);
        // listenDivSizeChange(this.bodyEl, changeScroller);
    }
    render() {
        const { getUlElement, sourceData, sourceKeys, headerRender, itemRender, placeholder } = this.props;
        return (
            <section className="z-transfer-box">
                <header className="z-transfer-heading">{headerRender && headerRender()}</header>
                <section
                    className="z-transfer-body"
                    ref={(el) => {
                        this.bodyEl = el;
                    }}>
                    <div
                        className={`z-transfer-ul z-min-height`}
                        ref={(el) => {
                            this.contentEl = el;
                            getUlElement(el);
                        }}>
                        {sourceData.map((item, i) => {
                            return (
                                <div
                                    onClick={this.methods.expandNext}
                                    style={{ paddingLeft: item.paddingLeft }}
                                    key={item.itemKey}
                                    data-expand="1"
                                    data-item={JSON.stringify(item)}
                                    data-disabled={item.disabled}
                                    className={`z-transfer-li ${item.isSub ? 'is-sub' : ''} ${
                                        item.droged ? 'is-li-droged' : ''
                                    } ${item.move ? 'is-li-move' : ''}  ${
                                        item.disabled || item.noChilds ? 'is-li-disabled' : ''
                                    }`}>
                                    {item.isSub ? (
                                        <Icon type="folder-open" style={{ marginRight: '0.4em', fontWeight: 500 }} />
                                    ) : null}
                                    {typeof itemRender === 'function' && !item.isSub
                                        ? itemRender(item, i)
                                        : item[sourceKeys.name]}
                                    {item.isSub ? (
                                        <Icon
                                            className={`z-right is-90`}
                                            type="right"
                                            style={{ fontSize: '12px', fontWeight: 500 }}
                                        />
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                    {!sourceData.length ? (
                        <div className="z-transfer-placeholder">
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={placeholder} />
                        </div>
                    ) : null}
                </section>
            </section>
        );
    }
}
export class ZoneWayTransfer extends ZpureComponent {
    static propTypes = {
        sourceKeys: PropTypes.object,
        leftSourceData: PropTypes.arrayOf(PropTypes.object),
        rightTargetData: PropTypes.arrayOf(PropTypes.object),
        onChange: PropTypes.func,
        leftItemRender: PropTypes.func,
        rightItemRender: PropTypes.func,
        leftTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        rightTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        repeated: PropTypes.bool,
        selectAllDisabled: PropTypes.bool,
        clearAllDisabled: PropTypes.bool,
    };
    static defaultProps = {
        sourceKeys: { name: 'name', id: 'id', children: 'children' },
        leftSourceData: [],
        rightTargetData: [],
        onChange: (newData) => {},
        repeated: true,
        selectAllDisabled: false,
        clearAllDisabled: false,
    };
    getDefaultSourceData = (data, paddingLeft, parName) => {
        paddingLeft = paddingLeft ? `${parseInt(paddingLeft, 10) + 1.4}em` : _paddingLeft;
        let newSource = [];
        data.forEach((item, i) => {
            const chids = item[this.props.sourceKeys.children];
            const isSub = Array.isArray(chids);
            const newData = Object.assign(
                {
                    disabled: false,
                    isSub,
                    parName: parName ? parName : 'root',
                    paddingLeft,
                    droged: false,
                    move: false,
                },
                item,
                {
                    itemKey: item.itemKey ? item.itemKey : GenNonDuplicateID() + '_' + i,
                    children: null,
                    noChilds: isSub && !chids.length,
                },
            );
            if (newData[this.props.sourceKeys.id] === undefined) {
                newData[this.props.sourceKeys.id] = GenNonDuplicateID() + '_id';
            }
            newSource.push(newData);
            if (isSub && chids.length) {
                newSource = newSource.concat(
                    this.getDefaultSourceData(item[this.props.sourceKeys.children], paddingLeft, newData.itemKey),
                );
            }
        });
        return newSource;
    };
    state = {
        leftSourceData: this.getDefaultSourceData(this.props.leftSourceData),
        rightTargetData: this.getDefaultSourceData(this.props.rightTargetData),
    };
    componentDidUpdate(prevProps) {
        if (prevProps.leftSourceData !== this.props.leftSourceData) {
            this.setState({
                leftSourceData: this.getDefaultSourceData(this.props.leftSourceData),
            });
        }
        if (prevProps.rightTargetData !== this.props.rightTargetData) {
            this.setState({
                rightTargetData: this.getDefaultSourceData(this.props.rightTargetData),
            });
        }
    }
    methods = {
        selectAll: () => {
            const allData = this.getDefaultSourceData(this.state.leftSourceData).filter((data) => {
                data.droged = true;
                data.paddingLeft = _paddingLeft;
                const hasAdd = !this.props.repeated
                    ? this.state.rightTargetData.findIndex((value, index, arr) => {
                          return value[this.props.sourceKeys.id] == data[this.props.sourceKeys.id];
                      })
                    : -1;
                return !data.disabled && hasAdd < 0 && !data.isSub;
            });
            this.setState(
                {
                    rightTargetData: this.state.rightTargetData.concat(allData),
                },
                () => {
                    this.props.onChange('selectAll', this.state.rightTargetData, null, null);
                },
            );
        },
        clearAll: () => {
            if (!this.state.rightTargetData.length) return;
            Modal.confirm({
                title: '确认清空全部吗?',
                content: '',
                okText: '确定',
                cancelText: '取消',
                onOk: () => {
                    this.setState(
                        {
                            rightTargetData: [],
                        },
                        () => {
                            this.props.onChange('clearAll', this.state.rightTargetData, null, null);
                        },
                    );
                    return Promise.resolve();
                },
                // onCancel() {},
            });
        },
    };
    render() {
        return (
            <Row gutter={16} type="flex" className={`z-transfer-row ${this.props.className}`} style={this.props.style}>
                {/* <p style={{ marginBottom: "12px" }}>
					鼠标指针呈现类似 <i className="zero-icon zerod-move" />{" "}
					即可拖动，从左框拖动到右框表示"选择"，右框中可上下拖动调整顺序，拖出右框可移除选项
				</p> */}
                <Col span={12}>
                    <ZTransfer
                        placeholder="暂无数据"
                        itemRender={this.props.leftItemRender}
                        getUlElement={(el) => {
                            this.leftUl = el;
                        }}
                        sourceData={this.state.leftSourceData}
                        sourceKeys={this.props.sourceKeys}
                        headerRender={() => {
                            return (
                                <Template>
                                    {typeof this.props.leftTitle == 'function' ? (
                                        this.props.leftTitle()
                                    ) : (
                                        <span>{this.props.leftTitle}</span>
                                    )}
                                    <Button
                                        size="small"
                                        onClick={this.methods.selectAll}
                                        disabled={this.props.selectAllDisabled}>
                                        全选
                                    </Button>
                                </Template>
                            );
                        }}
                    />
                    <div className="z-arrow-right">
                        <Icon type="arrow-right" />
                    </div>
                </Col>
                <Col span={12}>
                    <ZTransfer
                        placeholder="请从左边拖入"
                        itemRender={this.props.rightItemRender}
                        getUlElement={(el) => {
                            this.rightUl = el;
                        }}
                        sourceData={this.state.rightTargetData}
                        sourceKeys={this.props.sourceKeys}
                        headerRender={() => {
                            return (
                                <Template>
                                    {typeof this.props.rightTitle == 'function' ? (
                                        leftTitle()
                                    ) : (
                                        <span>{this.props.rightTitle}</span>
                                    )}
                                    <Button
                                        size="small"
                                        onClick={this.methods.clearAll}
                                        disabled={this.props.clearAllDisabled}>
                                        清空
                                    </Button>
                                </Template>
                            );
                        }}
                    />
                </Col>
            </Row>
        );
    }
    componentDidMount() {
        const drager = dragula([this.leftUl, this.rightUl], {
            copy: (el, source) => {
                return source === this.leftUl;
            },
            accepts: (el, target) => {
                return target !== this.leftUl;
            },
            invalid: (el) => {
                el = getTransferTarget(el);
                return (
                    (typeof el.dataset.disabled === 'boolean' ? el.dataset.disabled : el.dataset.disabled == 'true') ||
                    (el.dataset.item && JSON.parse(el.dataset.item).isSub)
                );
            },
            removeOnSpill: true,
            revertOnSpill: false,
        });
        drager
            .on('drop', (el, target, source, sibling) => {
                el = getTransferTarget(el);
                let newSibling = null;
                if (
                    sibling &&
                    getStyle(sibling, 'display') !== 'none' &&
                    getStyle(sibling, 'visibility') !== 'hidden'
                ) {
                    newSibling = sibling;
                }
                const oldData = this.state.rightTargetData;
                const i = newSibling
                    ? oldData.findIndex((value, index, arr) => {
                          return value.itemKey == JSON.parse(newSibling.dataset.item).itemKey;
                      })
                    : oldData.length;
                const siblingItem = oldData[i];
                const item = JSON.parse(el.dataset.item);
                let actionType = '';
                if (target !== source) {
                    target.removeChild(el);
                    if (!this.props.repeated) {
                        const hasAdded = oldData.findIndex((value, index, arr) => {
                            return value[this.props.sourceKeys.id] == item[this.props.sourceKeys.id];
                        });
                        if (hasAdded > -1) {
                            message.error('不能重复添加');
                            return;
                        }
                    }
                    actionType = 'transfer';
                    item.droged = true;
                    item.itemKey = GenNonDuplicateID();
                    oldData.splice(i, 0, item);
                } else {
                    actionType = 'move';
                    item.move = true;
                    const seftIndex = oldData.findIndex((value, index, arr) => {
                        return value.itemKey == item.itemKey;
                    });
                    if (seftIndex > i) {
                        oldData.splice(seftIndex, 1);
                        oldData.splice(i, 0, item);
                    } else if (seftIndex < i) {
                        oldData.splice(i, 0, item);
                        oldData.splice(seftIndex, 1);
                    }
                    // console.log(seftIndex, i, oldData);
                }
                item.paddingLeft = _paddingLeft;
                this.setState(
                    {
                        rightTargetData: [...oldData],
                    },
                    () => {
                        this.props.onChange(actionType, this.state.rightTargetData, item, siblingItem);
                    },
                );
            })
            .on('cloned', (clone, original, type) => {
                clone.className += ' z-transfer-item-clone';
                clone.style.paddingLeft = _paddingLeft;
            })
            .on('remove', (el, container, source) => {
                el = getTransferTarget(el);
                const oldData = this.state.rightTargetData;
                const item = JSON.parse(el.dataset.item);
                const seftIndex = oldData.findIndex((value, index, arr) => {
                    return value.itemKey == item.itemKey;
                });
                oldData.splice(seftIndex, 1);
                container.appendChild(el);
                this.setState(
                    {
                        rightTargetData: [...oldData],
                    },
                    () => {
                        message.info(`已移除[${item[this.props.sourceKeys.name]}]`);
                        this.props.onChange('remove', this.state.rightTargetData, item, null);
                    },
                );
            })
            .on('over', function(el, container) {
                container.parentElement.parentElement.className += ` is-over`;
            })
            .on('out', function(el, container) {
                container.parentElement.parentElement.className = container.parentElement.parentElement.className.replace(
                    'is-over',
                    '',
                );
            });
    }
}

export default ZoneWayTransfer;
