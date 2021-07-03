import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import ZpageLoading from '../ZpageLoading';
import { once, dataType } from '../zTool';
import ModalContent from '../ZrightModal/ModalContent';
import RightModals from '../ZrightModal/RightModals';
import {
    const_showRightModal,
    const_showModalLoading,
    const_getModalScrollInstance,
    const_getScrollAreaWrapperEl,
    const_getInsertLocation,
} from '../constant';
import ZerodLayerContext from '../ZerodLayerContext';
import './style.scss';
export class ZfullLayer extends React.PureComponent {
    static propTypes = {
        header: PropTypes.node,
        children: PropTypes.node,
        type: PropTypes.string, //normal | dark
        exportMethods: PropTypes.func,
        scroll: PropTypes.bool,
        destroyOnClose: PropTypes.bool,
    };
    static defaultProps = {
        scroll: true,
        type: 'dark',
        destroyOnClose: true,
    };
    isScale = false;
    getWrapperEl = (el) => {
        this.scrollWrapper = el;
    };
    getScrollInstance = (scroll) => {
        this.layerSroll = scroll;
    };
    setFisrtRenders = ({ key, args }) => {
        if (!this.state.firstRenders) {
            this.setState((prevState) => {
                const originRenders = prevState.firstRenders || [];
                const i = originRenders.findIndex((item) => item.key === key);
                if (i > -1) {
                    originRenders.splice(i, 1, { key, args });
                } else {
                    originRenders.push({ key, args });
                }
                return {
                    firstRenders: [...originRenders],
                };
            });
            return true;
        }
    };
    methods = {
        showLayerRightModal: (show, witch, content, scroll, onTransitionend, wrapperEl, width) => {
            if (
                this.setFisrtRenders({
                    key: 'showLayerRightModal',
                    args: [show, witch, content, scroll, onTransitionend, wrapperEl, width],
                })
            ) {
                return;
            }
            const_showRightModal.call(this, show, witch, content, scroll, onTransitionend, wrapperEl, width);
        },
        showLayerModalLoading: (show, witch, tip) => {
            if (
                this.setFisrtRenders({
                    key: 'showLayerModalLoading',
                    args: [show, witch, tip],
                })
            ) {
                return;
            }
            if (witch === 'mainRoute') {
                this.methods.showLoading(show, tip);
                return;
            }
            const_showModalLoading.call(this, show, witch);
        },
        getLayerModalInsertLocation: const_getInsertLocation,
        getLayerModalScrollInstance: (witch) => {
            if (
                this.setFisrtRenders({
                    key: 'getLayerModalScrollInstance',
                    args: [witch],
                })
            ) {
                return;
            }
            if (witch === 'mainRoute') {
                return this.layerSroll;
            }
            return const_getModalScrollInstance.call(this, witch);
        },
        getLayerScrollAreaWrapperEl: (witch) => {
            if (
                this.setFisrtRenders({
                    key: 'getLayerScrollAreaWrapperEl',
                    args: [witch],
                })
            ) {
                return;
            }
            if (witch === 'mainRoute') {
                return this.scrollWrapper;
            }
            return const_getScrollAreaWrapperEl.call(this, witch);
        },
        showLoading: (show, tip) => {
            this.ZpageLoadingRef.current.methods.showLoading(show, tip);
        },
        showLayer: (show, callback, scale) => {
            if (this.isScale && this.scaling) {
                return;
            }

            if (dataType.isObject(show)) {
                show = show.show;
                callback = show.callback;
                scale = show.scale;
            }
            if (
                this.setFisrtRenders({
                    key: 'showLayer',
                    args: [show, callback, scale],
                })
            ) {
                if (scale && show) {
                    return this.methods.amplify;
                }
                return;
            }

            const stateCallback = () => {
                this.scaling = false;
                callback && callback();
            };
            if (show) {
                this.setState(
                    scale
                        ? {
                              show,
                              scale,
                          }
                        : {
                              show,
                          },
                    () => {
                        setTimeout(() => {
                            this.setState(
                                {
                                    transparent: false,
                                },
                                stateCallback,
                            );
                        }, 10);
                    },
                );
                this.isScale = scale;
                if (this.isScale) {
                    this.scaling = true;
                }
            } else {
                if (this.isScale) {
                    this.scaling = true;
                    this.setState({
                        scale: true,
                        transparent: true,
                    });
                    once(this.bodyElRef.current, 'transitionend', () => {
                        this.setState(
                            {
                                show,
                            },
                            stateCallback,
                        );
                    });
                } else {
                    this.setState(
                        {
                            show,
                        },
                        stateCallback,
                    );
                }
            }
            if (scale && show) {
                return this.methods.amplify;
            }
        },
        amplify: () => {
            if (
                this.setFisrtRenders({
                    key: 'amplify',
                    args: [],
                })
            ) {
                return;
            }
            setTimeout(() => {
                this.setState({
                    scale: false,
                });
                once(this.bodyElRef.current, 'transitionend', () => {
                    this.scaling = false;
                    this.layerSroll && this.layerSroll.refresh();
                });
            }, 10);
        },
        closeLayer: () => {
            if (
                this.setFisrtRenders({
                    key: 'closeLayer',
                    args: [],
                })
            ) {
                return;
            }
            const closeBefore = typeof this.props.onCloseBefore === 'function' ? this.props.onCloseBefore() : true;

            if (dataType.isPromise(closeBefore)) {
                closeBefore.then(() => {
                    this.RightModalsRef.current.methods.closeAllModal(() => {
                        this.methods.showLayer(false, this.props.onCloseAfter);
                    });
                });
            } else if (closeBefore) {
                this.RightModalsRef.current.methods.closeAllModal(() => {
                    this.methods.showLayer(false, this.props.onCloseAfter);
                });
            }
        },
    };
    componentDidMount() {
        this.props.exportMethods && this.props.exportMethods(this.methods);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.firstRenders !== prevState.firstRenders && this.state.firstRenders) {
            this.state.firstRenders.forEach((item) => {
                this.methods[item.key](...item.args);
            });
        }
    }
    state = {
        show: false,
        scale: false,
        transparent: true,
        firstRenders: null,
    };
    ZpageLoadingRef = React.createRef();
    bodyElRef = React.createRef();
    layerElRef = React.createRef();
    RightModalsRef = React.createRef();

    render() {
        const { header, children, type, destroyOnClose, className } = this.props;
        const { scale, show, transparent } = this.state;

        return this.state.firstRenders
            ? ReactDOM.createPortal(
                  <ZerodLayerContext.Provider value={this.methods}>
                      <div>
                          <div
                              ref={(el) => {
                                  this.layerElRef.current = el;
                                  this.defaultWrapper = el;
                              }}
                              className={`z-full-layer ${type} ${transparent ? 'transparent' : ''} ${className || ''}`}
                              style={{ display: show ? 'block' : 'none' }}>
                              {header ? <div className="z-full-layer-heading">{header}</div> : null}
                              <div
                                  className={`z-full-layer-body ${scale ? 'scale' : ''}`}
                                  ref={this.bodyElRef}
                                  style={header ? { height: 'calc(100% - 64px)' } : null}>
                                  <ModalContent
                                      getWrapperEl={this.getWrapperEl}
                                      scroll={this.props.scroll}
                                      getScrollInstance={this.getScrollInstance}>
                                      {show && destroyOnClose ? children : !destroyOnClose ? children : null}
                                  </ModalContent>
                              </div>
                              <div className="close" onClick={this.methods.closeLayer}></div>
                              <ZpageLoading ref={this.ZpageLoadingRef} size="default" />
                              <RightModals ref={this.RightModalsRef} />
                          </div>
                      </div>
                  </ZerodLayerContext.Provider>,
                  document.body,
              )
            : null;
    }
}

export default ZfullLayer;
