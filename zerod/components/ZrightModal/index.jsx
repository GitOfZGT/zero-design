import React from 'react';
import PropTypes from 'prop-types';
// import { Icon } from 'antd';

import './style.scss';
// import Zlayout from "../Zlayout";
import ZpageLoading from '../ZpageLoading';
import { once } from '../zTool';
import RightModals from './RightModals';
import ModalContent from './ModalContent';

export class ZrightModal extends React.PureComponent {
    static propTypes = {
        show: PropTypes.bool,
        onClose: PropTypes.func,
        getWrapperEl: PropTypes.func, //
        showLoading: PropTypes.bool,
        mask: PropTypes.bool,
        maskClosable: PropTypes.bool,
        scroll: PropTypes.bool,
        getScrollInstance: PropTypes.func,
        onTransitionend: PropTypes.func,
        zIndex: PropTypes.number,
        width: PropTypes.string,
        name: PropTypes.string,
        exportMethods: PropTypes.func,
        closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.bool]),
    };
    static defaultProps = {
        scroll: true,
        mask: true,
        maskClosable: true,
        show: false,
        zIndex: 499,
        width: '90%',
        closeIcon: true,
    };
    state = {
        showCover: false,
        transparent: true,
        show: false,
    };
    componentDidMount() {
        this.props.exportMethods && this.props.exportMethods(this.methods);
    }
    componentDidUpdate(prevProps) {
        // console.log(this.props.show, prevProps.show);
        if (this.props.show !== prevProps.show) {
            this.making = true;
            if (this.props.show) {
                if (this.props.mask) {
                    this.setState({ showCover: true }, () => {
                        setTimeout(() => {
                            this.setState({
                                transparent: false,
                            });
                            once(this.coverElRef.current, 'transitionend', () => {
                                this.setState({
                                    show: this.props.show,
                                });
                                once(this.boxEl, 'transitionend', this.showAfter);
                            });
                        }, 75);
                    });
                } else {
                    this.setState({
                        show: this.props.show,
                    });
                    once(this.boxEl, 'transitionend', this.showAfter);
                }
            } else {
                this.setState({
                    show: this.props.show,
                });
                once(this.boxEl, 'transitionend', () => {
                    if (this.props.mask) {
                        this.setState({
                            transparent: true,
                        });

                        once(this.coverElRef.current, 'transitionend', () => {
                            this.setState({
                                showCover: false,
                            });
                            this.showAfter();
                        });
                        return;
                    }
                    this.showAfter();
                });
            }
            document.documentElement.style.overflow = 'hidden';
        }
    }
    render() {
        const { transparent } = this.state;
        return (
            <div data-zgt_modal={this.props.name}>
                {this.props.mask ? (
                    <div
                        ref={this.coverElRef}
                        className={`z-pop-cover ${transparent ? 'transparent' : ''}`}
                        style={{ display: this.state.showCover ? 'block' : 'none', zIndex: this.props.zIndex - 1 }}
                        onClick={this.props.maskClosable ? this.closeModal : null}
                    />
                ) : null}
                <div
                    ref={(el) => {
                        this.boxEl = el;
                    }}
                    onClick={(e) => {
                        e.nativeEvent.stopImmediatePropagation();
                    }}
                    className={`z-pop-content app-body ${this.state.show ? '' : this.hideClass}`}
                    style={{ width: this.props.width, zIndex: this.props.zIndex }}>
                    {this.props.scroll ? (
                        <ModalContent
                            getWrapperEl={this.props.getWrapperEl}
                            scroll={this.props.scroll}
                            getScrollInstance={this.props.getScrollInstance}>
                            {this.props.children}
                        </ModalContent>
                    ) : (
                        this.props.children
                    )}
                    {typeof this.props.closeIcon === 'boolean' && !this.props.closeIcon ? null : (
                        <div className="z-pop-close z-flex-items-v-center">
                            {typeof this.props.closeIcon === 'function' ? (
                                this.props.closeIcon()
                            ) : typeof this.props.closeIcon !== 'boolean' ? (
                                this.props.closeIcon
                            ) : (
                                <i className="z-btn zero-icon zerod-up" onClick={this.closeModal} />
                            )}
                        </div>
                    )}
                    <ZpageLoading ref={this.loadingRef} showLoading={this.props.showLoading} />
                </div>
            </div>
        );
    }
    hideClass = 'is-right-hide';
    closeModal = () => {
        if (this.making) return;
        this.props.onClose && this.props.onClose();
    };
    showAfter = (e) => {
        // if (e.target !== e.currentTarget) return;
        this.making = false;
        document.documentElement.style.overflow = '';
        this.props.onTransitionend && this.props.onTransitionend(this.props.show);
    };

    methods = {
        showLoading: (show, tip) => {
            this.loadingRef.current.methods.showLoading(show, tip);
        },
    };
    loadingRef = React.createRef();
    coverElRef = React.createRef();
}

ZrightModal.RightModals = RightModals;
export default ZrightModal;
