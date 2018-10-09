import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// my component
import { Zlayout } from "../Zlayout";
import { ZpageHeader } from "../ZpageHeader";
import { ZpageFooter } from "../ZpageFooter";

import cssClass from "./style.scss";
//
import { footerLinks, footerCopyright } from "../myPageFooter.js";
// 上下文
import ZerodRootContext from "../ZerodRootContext";
import ZerodMainContext from "../ZerodMainContext";
// 递归获取面包屑数据
const getBreadcrumbsFromMenu = function(arr, path, rootArr) {
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
class Page extends React.Component {
    static propTypes = {
        pageHeader: PropTypes.object,
        pageFooter: PropTypes.object,
        hasBodyPadding: PropTypes.bool,
    };
    static defaultProps = {
        pageHeader: { show: false },
        pageFooter: { show: true },
        hasBodyPadding: true,
    };
    breadcrumbsFromMenu = getBreadcrumbsFromMenu(
        this.props.getSideMenuData ? this.props.getSideMenuData() : [],
        this.props.location.pathname,
    );
    newPageHeader = Object.assign({}, this.props.pageHeader, {
        breadcrumbRoutes: this.props.pageHeader.breadcrumbRoutes
            ? [
                    ...this.breadcrumbsFromMenu, // 由侧边导航和当前路由地址获取面包屑数据
                    ...this.props.pageHeader.breadcrumbRoutes,
              ]
            : this.breadcrumbsFromMenu,
    });
    initDoms = () => {
        if (this.footerWrapEl) {
            const pos = this.wrapEl.getBoundingClientRect();
            const fpos = this.footerWrapEl.getBoundingClientRect();
            let H = document.documentElement.clientHeight - pos.top - fpos.height;
            this.wrapEl.style.minHeight = H + "px";
        }
    };

    componentDidMount() {
        document.addEventListener("transitionend", this.initDoms, false);
        setTimeout(() => {
            this.initDoms();
        }, 100);
        window.addEventListener("resize", this.initDoms, false);
        // console.log(this.props.location.pathname)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.initDoms, false);
        document.removeEventListener("transitionend", this.initDoms, false);
    }
    render() {
        const { className, pageFooter } = this.props;
        const { show,links, copyright,ref, ...footerOther } = pageFooter;
        const _footerLinks = links ? links : this.props.footerLinks ? this.props.footerLinks : footerLinks;
        const _footerCopyright = copyright
            ? copyright
            : this.props.footerCopyright
                ? this.props.footerCopyright
                : footerCopyright;

        return (
            <Zlayout.Template>
                {this.props.pageHeader.show ? <ZpageHeader {...this.newPageHeader} /> : null}
                <div
                    className={`${this.props.hasBodyPadding ? cssClass["z-wraper-body"] : ""} ${
                        className ? className : ""
                    }`}
                    ref={(el) => (this.wrapEl = el)}
                >
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
            </Zlayout.Template>
        );
    }
}
export  const ZpageWrapper= ZerodRootContext.setConsumer(ZerodMainContext.setConsumer(withRouter(Page)));
export function ZpageWraperHOC() {
    return ZpageWrapper;
}

export default ZpageWrapper;
