import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// my component
import ZrightModal from './index';
import { Skeleton } from 'antd';
import { dataType, GenNonDuplicateID, getStyle } from '../zTool/';
function getParentLen(wrapperEl) {
    let parLen = 0;
    let el = wrapperEl;
    while (el && el.parentElement) {
        el = el.parentElement;
        parLen++;
    }
    return parLen;
}
export class RightModals extends React.PureComponent {
    state = {
        modals: [],
    };
    render() {
        return this.state.modals.map((item) => {
            return item.wrapperEl ? (
                <ItemModal
                    key={item.options.witch}
                    item={item}
                    onBeforeClose={this.onBeforeClose}
                    onShow={this.onShow}></ItemModal>
            ) : null;
        });
    }
    methods = {
        closeAllModal: (allAfter) => {
            let promises = [];
            this.state.modals.forEach((modal) => {
                if (modal.show) {
                    console.log(modal);
                    promises.push(
                        new Promise((resolve, reject) => {
                            if (modal.ref.current) {
                                modal.ref.current.methods.close(resolve);
                            } else {
                                resolve();
                            }
                        }),
                    );
                }
            });
            if (typeof allAfter === 'function') {
                console.log(promises);
                Promise.all(promises).then(allAfter);
            }
        },
        getModalEls: (wrapperEl) => {
            const modalEls = [];
            Array.prototype.slice.call(wrapperEl.children).forEach((el) => {
                if (el.dataset['zgt_modal']) {
                    modalEls.push(el);
                }
            });
            return modalEls;
        },
        findModal: (witch) => {
            let modal = null;
            for (let index = 0; index < this.state.modals.length; index++) {
                const element = this.state.modals[index];
                if (element.options.witch == witch) {
                    modal = element;
                    break;
                }
            }
            return modal;
        },
        changeModals: (opt, wrapperEl) => {
            if (this.opening) return;
            this.opening = true;
            const end = opt.onTransitionend;
            const id = GenNonDuplicateID();
            const witch = opt.witch || `modal_${id}`;

            opt.onTransitionend = (show) => {
                this.opening = false;
                if (show) {
                    // const laster = this.state.modals.slice(-1)[0];
                    // laster &&
                    // 	laster.ref.current.methods.showModal({
                    // 		content: laster.content,
                    // 	});
                } else {
                    const index = this.state.modals.findIndex((item) => item.options.witch === witch);
                    // console.log(index, 'close');
                    const m = this.state.modals[index];
                    m.show = false;
                    this.setState({
                        modals: [...this.state.modals],
                    });
                }
                typeof end === 'function' && end(show);
            };

            if (opt.show) {
                const hasModal = this.state.modals.find((item) => item.options.witch === witch);

                if (hasModal && hasModal.show) {
                    console.warn(`modal:"${witch}"已被占用`);
                    // witch = 'modal_' + id;
                    // hasModal = false;
                    return;
                }

                let len = 0;
                const showingModals = this.state.modals.filter((m) => m.show);
                if (showingModals.length) {
                    const lasterModal = showingModals[showingModals.length - 1];
                    const parlen1 = getParentLen(lasterModal.wrapperEl);
                    const parlen2 = getParentLen(wrapperEl);
                    if (parlen1 < parlen2) {
                        wrapperEl = lasterModal.wrapperEl;
                    }
                }
                for (let index = 0; index < this.state.modals.length; index++) {
                    const element = this.state.modals[index];
                    if (element.wrapperEl === wrapperEl && element.show) {
                        len++;
                    }
                }
                if (len > 0) {
                    const modalEls = this.methods.getModalEls(wrapperEl);
                    modalEls.forEach((el) => {
                        el.firstChild.style.backgroundColor = 'transparent';
                    });
                }
                const width = opt.width ? opt.width : `${94 - len * 6}%`;
                let baseZindex = 9;
                if (wrapperEl && wrapperEl.children) {
                    Array.prototype.slice.call(wrapperEl.children).forEach((child) => {
                        const elZindex = Number(
                            getStyle(
                                child.dataset['zgt_modal'] ? child.querySelector('.z-pop-content') : child,
                                'z-index',
                            ),
                        );
                        if (baseZindex < elZindex) {
                            baseZindex = elZindex;
                        }
                    });
                }
                const zIndex = baseZindex + 1;

                if (hasModal) {
                    hasModal.show = true;
                    hasModal.wrapperEl = wrapperEl;
                    hasModal.options = {
                        ...hasModal.options,
                        ...opt,
                        width,
                        zIndex,
                    };
                } else {
                    this.state.modals.push({
                        wrapperEl,
                        show: true,
                        ref: React.createRef(),

                        options: {
                            ...opt,
                            width,
                            zIndex,

                            witch,
                        },
                    });
                }

                this.setState({
                    modals: [...this.state.modals],
                });
            } else {
                if (opt.witch) {
                    const modal = this.methods.findModal(opt.witch);
                    if (modal && modal.show) {
                        modal.ref.current && modal.ref.current.methods.close();
                    } else {
                        this.opening = false;
                    }
                } else {
                    const showingModals = this.state.modals.filter((item) => {
                        return item.show;
                    });

                    let lastOne = { index: 0, zIndex: 0 };
                    showingModals.forEach((item, i) => {
                        if (item.options.zIndex > lastOne.zIndex) {
                            lastOne = { index: i, zIndex: item.options.zIndex };
                        }
                    });
                    if (showingModals.length) {
                        const laster = showingModals[lastOne.index];
                        laster && laster.ref.current && laster.ref.current.methods.close();
                    } else {
                        this.opening = false;
                    }
                }
            }
        },
    };
    onBeforeClose = (props, close) => {
        const index = this.state.modals.findIndex((item) => item.options.witch === props.witch);
        const modalEls = this.methods.getModalEls(props.wrapperEl);
        const elIndex = modalEls.findIndex((el) => el.dataset['zgt_modal'] === props.witch);
        if (elIndex > 0) {
            modalEls[elIndex - 1].firstChild.style.backgroundColor = '';
        }
        if (index > -1) {
            const bclose = this.state.modals[index];
            return typeof bclose.options.onBeforeClose == 'function'
                ? bclose.options.onBeforeClose(bclose.options, close)
                : true;
        }
    };
    onShow = (item) => {
        setTimeout(() => {
            const laster = this.state.modals.find((m) => m.options.witch === item.options.witch);
            // console.log(laster, 'laster');
            laster && laster.ref.current && laster.ref.current.methods.showModal(laster.options);
        }, 60);
    };
}
function ItemModal(props) {
    const { item, onBeforeClose, onShow } = props;
    useEffect(() => {
        if (item.show) {
            onShow && onShow(item);
        }
    }, [item.show]);
    return item.show
        ? ReactDOM.createPortal(
              <RightModalSelf
                  id={item.options.witch}
                  witch={item.options.witch}
                  key={item.options.witch}
                  wrapperEl={item.wrapperEl}
                  ref={item.ref}
                  onBeforeClose={onBeforeClose}
              />,
              item.wrapperEl,
          )
        : null;
}
class RightModalSelf extends React.PureComponent {
    content = null;
    onTransitionend = () => {};
    methods = {
        setContent: (show) => {
            this.methods.showModalLoading(false);
            if (show) {
                this.setState({
                    content: this.content,
                });
            }
            dataType.isFunction(this.onTransitionend) && this.onTransitionend(show, this.state);
            if (!show) {
                dataType.isFunction(this.afterClose) && this.afterClose(show, this.state);
            }
        },
        showModal: (opt) => {
            this.content = opt.content;
            this.onTransitionend = opt.onTransitionend;
            this.methods.showModalLoading(true);

            this.setState({ ...opt, content: null, onTransitionend: null });
        },
        showModalLoading: (show, tip) => {
            this.modalRef.current && this.modalRef.current.methods.showLoading(show, tip);
        },
        getScrollInstance: () => {
            return this.ScrollInstance;
        },
        getWrapperEl: () => {
            return { wrapperEl: this.wrapperEl, methods: this.wrapperMethods };
        },
        close: (afterClose) => {
            const closed =
                this.props.onBeforeClose &&
                this.props.onBeforeClose(this.props, () => {
                    this.setState({
                        show: false,
                    });
                });
            if (dataType.isBoolean(closed) && !closed) {
                return;
            }
            this.setState({
                show: false,
            });
            this.afterClose = afterClose;
        },
    };
    state = {
        witch: 'modalName',
        zIndex: 499,
        width: '90%',
        show: false,
        scroll: true,
        content: null,
        mask: true,
        maskClosable: true,
    };
    modalRef = React.createRef();
    getScrollInstance = (instance) => {
        this.ScrollInstance = instance;
    };
    getWrapperEl = (el, method) => {
        this.wrapperEl = el;
        this.wrapperMethods = method;
    };
    render() {
        const { witch, zIndex, width, show, scroll, content, mask, maskClosable, closeIcon } = this.state;
        return (
            <ZrightModal
                ref={this.modalRef}
                name={witch}
                zIndex={zIndex}
                width={width}
                show={show}
                scroll={scroll}
                getScrollInstance={this.getScrollInstance}
                onClose={this.methods.close}
                onTransitionend={this.methods.setContent}
                getWrapperEl={this.getWrapperEl}
                mask={mask}
                maskClosable={maskClosable}
                closeIcon={closeIcon}>
                {content || (
                    <div className="z-padding-20">
                        {new Array(4).fill(1).map((a, i) => {
                            return (
                                <div className="z-panel z-margin-bottom-20" key={i}>
                                    <div className="z-panel-body">
                                        <Skeleton active avatar />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </ZrightModal>
        );
    }
}
export default RightModals;
