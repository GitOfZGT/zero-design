import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.scss';
import { Tooltip } from 'antd';
const coverClass = 'z-round-btn-cover';
const btnWidth = 40;
const btnMargin = 10;
import { on, off, once, deepCopy, dataType } from '../zTool';
import ZerodMainContext from '../ZerodMainContext';
export const ZroundingButton = ZerodMainContext.setConsumer(
    class extends React.Component {
        static propTypes = {
            className: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.object),
            onVisibleChange: PropTypes.func,
        };
        static defaultProps = {
            items: [],
        };
        state = {
            createPortal: false,
        };
        on = on;
        off = off;
        diameter = 0;
        $btns = [];
        isShow = false;
        transitioning = false;
        first = true;
        originalTop = 0;
        originalLeft = 0;
        setPosition = () => {
            const postion = this.childEl.getBoundingClientRect();
            const direction = [
                postion.top,
                window.innerWidth - postion.left - postion.width,
                window.innerHeight - postion.top - postion.height,
                postion.left,
            ];
            this.directionLen = direction.map((n) => {
                const len = Math.floor(n / (btnMargin + btnWidth));
                return len > 0 ? new Array(len).fill(1) : [];
            });
            this.diameterW = postion.width;
            this.diameterH = postion.height;
            const _leftCenter = postion.left + postion.width / 2;
            const _topCenter = postion.top + postion.height / 2;
            const $btns = (this.$btns = Array.prototype.slice.call(this.coverEl.children));
            this.originalTop = _topCenter - btnWidth / 2;
            this.originalLeft = _leftCenter - btnWidth / 2;
            $btns.forEach((el, i) => {
                el.style.top = `${this.originalTop}px`;
                el.style.left = `${this.originalLeft}px`;
                el.style.opacity = 0;
                el.style.transform = 'scale(0.1)';
                if (this.first) {
                    on(el, 'click', (e) => {
                        let parentEl = e.target;
                        while (
                            parentEl &&
                            ((typeof parentEl.className === 'string' && !parentEl.className.includes('z-round-btn')) ||
                                typeof parentEl.className !== 'string')
                        ) {
                            parentEl = parentEl.parentElement;
                        }
                        const item = this.props.items[i];
                        if (typeof item.onClick === 'function' && parentEl && parentEl.dataset.disabled == '0') {
                            item.onClick(item);
                            this.showBtns();
                        }

                        e.stopPropagation();
                    });
                }
            });
            this.first = false;
        };
        getTo(diameter, i) {
            const to = diameter / 2 + btnWidth / 2 + btnMargin;
            const d = to + (btnWidth + btnMargin) * i;
            return d;
        }
        setTranslate = (isStart) => {
            this.transitioning = true;
            const theBtns = this.$btns.slice(0);
            const lens = deepCopy(this.directionLen);
            let i = 0;
            while (theBtns.length) {
                lens.forEach((dir, index) => {
                    if (dir.length && theBtns.length) {
                        const el = theBtns.shift();
                        let translate = '';
                        let gap = 0;
                        const H = isStart
                            ? this.diameterH / 2 + btnWidth / 2 + btnMargin
                            : this.getTo(this.diameterH, i);
                        const W = isStart
                            ? this.diameterW / 2 + btnWidth / 2 + btnMargin
                            : this.getTo(this.diameterW, i);
                        switch (index) {
                            case 0:
                                translate = 'top';
                                gap = this.originalTop - H;
                                break;
                            case 1:
                                translate = 'left';
                                gap = this.originalLeft + W;
                                break;
                            case 2:
                                translate = 'top';
                                gap = this.originalTop + H;
                                break;
                            case 3:
                                translate = 'left';
                                gap = this.originalLeft - W;
                                break;
                        }
                        el.style.opacity = isStart ? 0 : 1;
                        el.style.transform = `scale(${isStart ? '0' : '1'})`;
                        el.style[translate] = `${gap}px`;
                        dir.shift();
                    }
                });
                i++;
            }
        };
        doShow = () => {
            this.setPosition();
            if (!this.$btns.length) return;
            this.coverEl.style.display = 'block';
            this.isShow = true;
            this.setTranslate(true);
            setTimeout(() => {
                this.setTranslate(false);
                this.transitioning = false;
            }, 10);
        };
        doHide = () => {
            if (this.$btns.length) {
                once(this.$btns[0], 'transitionend', () => {
                    this.coverEl.style.display = 'none';
                    this.transitioning = false;
                });
            }
            this.setTranslate(true);
            this.isShow = false;
        };
        showBtns = () => {
            if (!this.childEl || this.transitioning) return;
            if (this.isShow) {
                this.doHide();
            } else if (this.state.createPortal) {
                this.doShow();
            } else {
                this.setState(
                    {
                        createPortal: true,
                    },
                    this.doShow,
                );
            }
            this.props.onVisibleChange && this.props.onVisibleChange(this.isShow);
        };
        closeBtns = () => {
            if (this.isShow) this.showBtns();
        };
        setEvent = (ev) => {
            // const childs = Array.prototype.slice.call(this.wrapEl.children);
            if (this.childEl) {
                // this[ev](this.childEl, "click", this.showBtns);
                this[ev](document.documentElement, 'click', this.closeBtns);
                if (this.props.getInsertLocation) {
                    const insert = this.props.getInsertLocation(this.childEl);
                    const instance = this.props.getScrollInstance(insert);
                    instance && instance.scroll[ev]('scrollStart', this.closeBtns);
                }
            }
        };
        componentDidMount() {
            if (dataType.isElement(this.wrapEl)) {
                this.childEl = this.wrapEl;
            } else if (this.wrapEl) {
                this.childEl = ReactDOM.findDOMNode(this.wrapEl);
            }
            this.setEvent('on');
        }
        componentWillUnmount() {
            this.setEvent('off');
        }
        render() {
            // const { className, style } = this.props;
            const btnItems = this.props.items.map((item) => ({
                ...item,
                show: item.show == undefined ? true : item.show,
                disabled: item.disabled == undefined ? false : item.disabled,
            }));
            return (
                <>
                    {React.isValidElement(this.props.children)
                        ? React.cloneElement(this.props.children, {
                              ...this.props.children.props,
                              ref: (el) => {
                                  this.wrapEl = el;
                              },
                              onClick: (e) => {
                                  this.showBtns();
                                  this.props.children.props.onClick && this.props.children.props.onClick(e);
                                  e.stopPropagation();
                              },
                          })
                        : this.props.children}
                    {this.state.createPortal
                        ? ReactDOM.createPortal(
                              <div className={coverClass} ref={(el) => (this.coverEl = el)}>
                                  {btnItems.map((item, i) =>
                                      item.show ? (
                                          <Tooltip key={i} placement="top" title={item.name} mouseLeaveDelay={0}>
                                              <div
                                                  className={`z-round-btn ${item.disabled ? 'is-disabled' : ''} ${
                                                      item.icon ? 'has-icon' : item.name ? 'has-text' : ''
                                                  }`}
                                                  key={i}
                                                  data-disabled={item.disabled ? '1' : '0'}>
                                                  {item.icon
                                                      ? typeof item.icon === 'function'
                                                          ? item.icon()
                                                          : item.icon
                                                      : typeof item.name === 'string' && item.name
                                                      ? item.name.slice(0, 2)
                                                      : ''}
                                              </div>
                                          </Tooltip>
                                      ) : null,
                                  )}
                              </div>,
                              document.body,
                          )
                        : null}
                </>
            );
        }
    },
);

export default ZroundingButton;
