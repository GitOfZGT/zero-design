import React from 'react';
import ZpureComponent from '../ZpureComponent';
import PropTypes from 'prop-types';
import '../../zero-icon/iconfont.css';
import { BuildScroll, listenDivSizeChange, addClass, removeClass, once } from '../zTool';
import debounce from 'lodash/debounce';
class Zbody extends ZpureComponent {
    static propTypes = {
        className: PropTypes.string,
        scroll: PropTypes.bool,
        getScrollInstance: PropTypes.func,
        getWrapperEl: PropTypes.func, //获取最外层包裹元素
        insertToScrollWraper: PropTypes.any,
        useCustomScroll: PropTypes.bool,
    };
    state = {
        scrollAreaStyle: {},
        scrollAreaClassName: '',
    };
    hasShowToTop = false;
    backToTop = () => {
        this.scroollInstance.scroll.scrollTo(0, 0, 200);
    };
    showBackToTop = () => {
        if (this.scroollInstance.scroll.y < -100) {
            if (!this.hasShowToTop) {
                addClass(this.toTopBtnEl, 'is-animate-start');
                removeClass(this.toTopBtnEl, 'is-hide');
                this.hasShowToTop = true;
                setTimeout(() => {
                    addClass(this.toTopBtnEl, `fadeIn-to-down-enter`);
                    once(this.toTopBtnEl, 'animationend', () => {
                        addClass(this.toTopBtnEl, 'is-opacity');
                        removeClass(this.toTopBtnEl, `fadeIn-to-down-enter is-animate-start`);
                    });
                }, 10);
            }
        } else {
            if (this.hasShowToTop) {
                removeClass(this.toTopBtnEl, 'is-opacity');
                addClass(this.toTopBtnEl, 'is-hide');
                this.hasShowToTop = false;
            }
        }
    };
    createScroll = () => {
        if (this.scroollInstance) {
            this.scroollInstance.scroll.destroy();
            this.scroollInstance = null;
        }
        Array.prototype.slice.call(this.bodyEl.querySelectorAll('.resize-sensor')).forEach((el) => {
            if (el.parentElement == this.bodyEl) this.bodyEl.removeChild(el);
        });
        if (this.props.scroll) {
            this.scroollInstance = new BuildScroll(this.bodyEl, {
                scrollbars: 'custom',
                disablePointer: false,
                disableMouse: false,
                useCustomScroll: this.props.useCustomScroll,
            });
            if (this.props.useCustomScroll) {
                listenDivSizeChange(this._contentEl, this.scroollInstance.refresh);
                listenDivSizeChange(this.bodyEl, this.scroollInstance.refresh);
            }
            this.scroollInstance.scroll.on('scrollEnd', this.showBackToTop);
            this.props.getScrollInstance && this.props.getScrollInstance(this.scroollInstance);
            this._initEvents();
        }
    };
    disbleEvent = false;
    _initEvents = () => {
        this.scroollInstance && this.scroollInstance.scroll._initEvents(!this.disbleEvent);
        this.disbleEvent = !this.disbleEvent;
        this._contentEl.style.cursor = !this.disbleEvent ? 'grab' : 'default';
    };
    metods = {
        setScrollAreaStyle: (style, callback) => {
            if (typeof style !== 'object') return;
            delete style.height;
            if (Object.keys(style).length) {
                this.setState(
                    {
                        scrollAreaStyle: { ...this.state.scrollAreaStyle, ...style },
                    },
                    callback,
                );
            }
        },
        setScrollAreaClassName: (className) => {
            if (typeof className !== 'string') return;
            this.setState({
                scrollAreaClassName: className,
            });
        },
        resetScrollArea: () => {
            this.setState({
                scrollAreaStyle: {},
                scrollAreaClassName: '',
            });
            this.otherHeight = 0;
            this.metods.initScrollAreaSize();
        },
        initScrollAreaSize: debounce((otherHeight = 0) => {
            if (!this.wrapperEl) return;
            if (otherHeight > 0) {
                this.otherHeight = otherHeight;
            }
            const newStyle = {
                ...this.state.scrollAreaStyle,
            };
            if (this.pageHeaderBoxEl.scrollHeight > 0 || this.otherHeight > 0) {
                const scrollh = `calc(100% - ${this.pageHeaderBoxEl.scrollHeight + this.otherHeight}px)`;
                newStyle.height = scrollh;
            } else {
                newStyle.height = '100%';
            }
            this.setState({ scrollAreaStyle: newStyle });
        }, 60),
    };
    otherHeight = 0;
    componentDidMount() {
        this.createScroll();
        this.props.getWrapperEl && this.props.getWrapperEl(this.wrapperEl, this.metods);
        listenDivSizeChange(this.pageHeaderBoxEl, () => {
            this.metods.initScrollAreaSize();
        });
        this.metods.initScrollAreaSize();
        // this.bodyEl.onscroll = () => {
        // 	if (this.bodyEl.scrollTop > 0) {
        // 		this.bodyEl.scrollTop = 0;
        // 	}
        // };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.scroll != this.props.scroll) {
            this.createScroll();
        }
    }
    componentWillUnmount() {
        if (this.scroollInstance) {
            this.scroollInstance.scroll.off('scrollEnd', this.showBackToTop);
            this.scroollInstance.scroll.destroy();
            this.scroollInstance = null;
        }
    }
    render() {
        const {
            scroll,
            className,
            children,
            insertToScrollWraper,
            getScrollInstance,
            getWrapperEl,
            useCustomScroll,
            ...others
        } = this.props;
        return (
            <section
                {...others}
                className={`z-layout-body ${className ? className : ''}`}
                ref={(el) => (this.wrapperEl = el)}>
                <div ref={(el) => (this.pageHeaderBoxEl = el)} style={{ position: 'relative', zIndex: 9 }}>
                    <div id="ZpageHeaderBox"></div>
                </div>
                <section
                    style={this.state.scrollAreaStyle}
                    className={`z-body-scroll z-scroll-color ${this.state.scrollAreaClassName}`}
                    ref={(el) => (this.bodyEl = el)}>
                    {scroll ? (
                        <div ref={(el) => (this._contentEl = el)}>
                            <section>{children}</section>
                        </div>
                    ) : (
                        children
                    )}
                </section>
                {typeof insertToScrollWraper === 'function' ? insertToScrollWraper() : insertToScrollWraper}
                <i
                    className={`z-to-top ${this.hasShowToTop ? '' : 'is-hide'} z-toTop-btn zero-icon zerod-top`}
                    ref={(el) => (this.toTopBtnEl = el)}
                    onClick={this.backToTop}
                />
            </section>
        );
    }
}
export default Zbody;
