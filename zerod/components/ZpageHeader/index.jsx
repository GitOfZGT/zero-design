import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Icon } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

function itemRender(route, params, routes, paths) {
	return !route.link ? <span>{route.name}</span> : <Link to={paths.join("/")}>{route.name}</Link>;
}
export class ZpageHeader extends React.Component {
	static propTypes = {
		trademark: PropTypes.any, //图标|图示
		title: PropTypes.any, // 标题
		content: PropTypes.any, //描述说明...
		rightMoreContent: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]), // 标题列的右边可添加更多内容
		breadcrumbParams: PropTypes.any, // 面包屑路由参数
		breadcrumbRoutes: PropTypes.arrayOf(PropTypes.object), // 面包屑routes
	};
	render() {
		const {
			children,
			trademark,
			rightMoreContent,
			title,
			content,
			breadcrumbParams,
			breadcrumbRoutes,
			className,
			show,
			pageId,
			...others
		} = this.props;
		const mb = "bottom-16";
		return (
			<section className={`${cssClass["z-page-header"]} ${className ? className : ""}`} {...others}>
				<div className="z-flex ">
					<div className="z-flex-1">
						{breadcrumbRoutes && breadcrumbRoutes.length ? (
							<div className={`z-padding-${mb}`}>
								<Breadcrumb
									itemRender={itemRender}
									routes={breadcrumbRoutes}
									params={breadcrumbParams}
								/>
							</div>
						) : null}
						<section className="z-flex z-padding-left-30">
							{trademark ? (
								typeof trademark === "function" ? (
									trademark(this.props)
								) : (
									<div>{trademark}</div>
								)
							) : null}
							<div className="z-flex-1">
								{title ? (
									typeof title === "function" ? (
										title(this.props)
									) : (
										<header className={`${cssClass["z-page-header-title"]}`}>{title}</header>
									)
								) : null}
								{content ? (
									typeof content === "function" ? (
										content(this.props)
									) : (
										<p className={`z-margin-bottom-10 z-text-gray`}>{content}</p>
									)
								) : null}
								{title || content ? (
									<ul className={`${cssClass["z-pillars"]} z-clear-fix z-margin-bottom-20`}>
										<li className={`z-float-left ${cssClass["blue"]}`} />
										<li className={`z-float-left ${cssClass["yellow"]}`} />
										<li className={`z-float-left ${cssClass["green"]}`} />
									</ul>
								) : null}
							</div>
						</section>
					</div>
					{typeof rightMoreContent === "function" ? rightMoreContent(this.props) : rightMoreContent}
				</div>
				{typeof children == "function" ? children(this.props) : children}
				<div id={pageId}></div>
			</section>
		);
	}
}

export default ZpageHeader;
