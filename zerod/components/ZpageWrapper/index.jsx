import React from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ZpageHeader } from '../ZpageHeader';
import { ZpageFooter } from '../ZpageFooter';

import './style.scss';

// 上下文
import ZerodRootContext from '../ZerodRootContext';
import ZerodMainContext from '../ZerodMainContext';
import { dataType } from '../zTool';
import debounce from 'lodash/debounce';
// 递归获取面包屑数据
const getBreadcrumbsFromMenu = function (arr, path, rootArr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (item.path === path) {
            newArr.push({ path: item.path, name: item.name, link: false });
            if (item.parPath && rootArr) {
                newArr = getBreadcrumbsFromMenu(rootArr, item.parPath).concat(newArr);
            }
            break;
        } else if (item.children && item.children.length) {
            newArr = newArr.concat(getBreadcrumbsFromMenu(item.children, path, arr));
        }
    }
    return newArr;
};

export const ZpageWrapperProps = {
    pageHeader: PropTypes.object,
    pageFooter: PropTypes.object,
    hasBodyPadding: PropTypes.bool, //中间部分是否又padding
    showBreadcrumb: PropTypes.bool, //是否显示pageHeader面包屑
    titleFromLasterBreadcrumb: PropTypes.bool, //pageHeader的title是否来自面包屑的最后一个名称
};

class Page extends React.PureComponent {
    static propTypes = ZpageWrapperProps;
    static defaultProps = {
        pageHeader: { show: false },
        pageFooter: { show: false },
        hasBodyPadding: true,
        showBreadcrumb: false,
        titleFromLasterBreadcrumb: false,
    };
    breadcrumbsFromMenu = getBreadcrumbsFromMenu(
        this.props.getSideMenuData ? this.props.getSideMenuData() : [],
        this.props.location.pathname,
    );
    getNewPageHeader = () => {
        const newBreadcrumbRoutes = this.props.pageHeader.breadcrumbRoutes
            ? [
                  ...this.breadcrumbsFromMenu, // 由侧边导航和当前路由地址获取面包屑数据
                  ...this.props.pageHeader.breadcrumbRoutes,
              ]
            : this.breadcrumbsFromMenu;
        const newTitle = this.props.pageHeader.title || '';
        const _newTitleFromBreadcrumb = newBreadcrumbRoutes.length ? newBreadcrumbRoutes.slice(-1)[0].name : '';
        const header = Object.assign({}, this.props.pageHeader, {
            breadcrumbRoutes: this.props.showBreadcrumb ? newBreadcrumbRoutes : [],
            title: this.props.titleFromLasterBreadcrumb ? _newTitleFromBreadcrumb : newTitle,
        });
        const obj = Object.assign({}, header);
        Object.keys(header).forEach((key) => {
            const proto = header[key];
            if (typeof proto === 'function') {
                header[key] = obj[key] = function (o) {
                    return proto(dataType.isObject(o) ? Object.assign({}, o, obj) : obj);
                };
            }
        });
        return header;
    };

    initDoms = debounce((e) => {
        if (
            e &&
            (e.target.localName == 'input' || e.target.localName == 'textarea' || e.target.localName == 'button')
        ) {
            return;
        }
        if (this.footerWrapEl) {
            const pos = this.wrapEl.getBoundingClientRect();
            const fpos = this.footerWrapEl.getBoundingClientRect();
            if (pos.top >= 0) {
                const H = document.documentElement.clientHeight - pos.top - fpos.height;
                this.wrapEl.style.minHeight = `${H}px`;
            }
        }
    }, 60);

    componentDidMount() {
        document.addEventListener('transitionend', this.initDoms, false);
        setTimeout(() => {
            this.initDoms();
        }, 100);
        window.addEventListener('resize', this.initDoms, false);
        // console.log(this.props.location.pathname)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.initDoms, false);
        document.removeEventListener('transitionend', this.initDoms, false);
    }
    render() {
        const { className, style, pageFooter } = this.props;
        const { show, links, copyright, ref, ...footerOther } = pageFooter;
        const _footerLinks = links || this.props.footerLinks;
        const _footerCopyright = copyright || this.props.footerCopyright;
        const newPageHeader = this.getNewPageHeader();
        return (
            <>
                {this.props.pageHeader.show ? <ZpageHeader {...newPageHeader} /> : null}
                <div
                    className={`${this.props.hasBodyPadding ? 'z-wraper-body' : ''} ${
                        this.props.pageHeader.show ? '' : 'is-paddding-top'
                    } ${className || ''}`}
                    ref={(el) => (this.wrapEl = el)}
                    style={style}>
                    {this.props.children}
                </div>
                {pageFooter.show ? (
                    <ZpageFooter
                        links={_footerLinks}
                        copyright={_footerCopyright}
                        ref={(el) => (this.footerWrapEl = el)}
                        {...footerOther}
                    />
                ) : null}
            </>
        );
    }
}
export const ZpageWrapper = ZerodRootContext.setConsumer(ZerodMainContext.setConsumer(withRouter(Page)));
export function ZpageWraperHOC() {
    return ZpageWrapper;
}

export default ZpageWrapper;
