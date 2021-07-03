import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { hasClass, addClass, removeClass, getStyle } from '../zTool';
import './style.scss';
import debounce from 'lodash/debounce';
export class ZpageLoading extends React.PureComponent {
    static propTypes = {
        showLoading: PropTypes.bool,
        size: PropTypes.string,
        exportMethods: PropTypes.func,
        coverClassName: PropTypes.string,
    };
    methods = {
        showLoading: (show, tip) => {
            this.setState({
                loading: show,
                tip,
            });
        },
    };
    state = {
        loading: false,
        tip: '',
        show: false,
    };
    componentDidMount() {
        this.props.exportMethods && this.props.exportMethods(this.methods);
        this.showDOM();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.showLoading !== prevProps.showLoading || this.state.loading !== prevState.loading) {
            this.showDOM();
        }
    }
    render() {
        const { size, showLoading, tip, exportMethods, coverClassName, ...others } = this.props;
        const loading = showLoading !== undefined ? showLoading : this.state.loading;
        return (
            <div
                className={`z-page-loading-cover hide ${coverClassName || ''}`}
                onTransitionEnd={this.onTransitionEnd}
                ref={this.wrapperRef}>
                <div className="z-page-loading">
                    <Spin spinning={loading} size={size ? size : 'large'} tip={this.state.tip || tip} {...others} />
                </div>
            </div>
        );
    }
    wrapperRef = React.createRef();
    showDOM = debounce(() => {
        const { showLoading } = this.props;
        const loading = showLoading !== undefined ? showLoading : this.state.loading;
        clearTimeout(this.removeTimer);
        if (loading) {
            removeClass(this.wrapperRef.current, 'hide');
            removeClass(this.wrapperRef.current, 'fade');
        } else {
            this.removeTimer = setTimeout(() => {
                let hidingParent = this.wrapperRef.current.parentElement;
                while (hidingParent && getStyle(hidingParent, 'display') !== 'none') {
                    hidingParent = hidingParent.parentElement;
                }
                if (hidingParent) {
                    addClass(this.wrapperRef.current, 'hide');
                    removeClass(this.wrapperRef.current, 'fade');
                    return;
                }
                if (!hasClass(this.wrapperRef.current, 'hide')) {
                    addClass(this.wrapperRef.current, 'fade');
                }
                setTimeout(() => {
                    if (getStyle(this.wrapperRef.current, 'display') !== 'none') {
                        addClass(this.wrapperRef.current, 'hide');
                        removeClass(this.wrapperRef.current, 'fade');
                    }
                }, 300);
            }, 0);
        }
    }, 10);
    onTransitionEnd = () => {
        const { showLoading } = this.props;
        const loading = showLoading !== undefined ? showLoading : this.state.loading;
        if (!loading) {
            addClass(this.wrapperRef.current, 'hide');
            removeClass(this.wrapperRef.current, 'fade');
        }
    };
}

export default ZpageLoading;
