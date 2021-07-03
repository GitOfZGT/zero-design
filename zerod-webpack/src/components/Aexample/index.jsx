import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import cssClass from './style.scss';

function itemRender(route, params, routes, paths) {
    return !route.link ? <span>{route.name}</span> : <Link to={paths.join('/')}>{route.name}</Link>;
}
class Aexample extends React.Component {
    static propTypes = {
        trademark: PropTypes.any, //图标|图示
        title: PropTypes.any, // 标题
        content: PropTypes.any, //描述说明...
        rightMoreContent: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]), // 标题列的右边可添加更多内容
        breadcrumbParams: PropTypes.any, // 面包屑路由参数
        breadcrumbRoutes: PropTypes.arrayOf(PropTypes.object), // 面包屑routes
        children: PropTypes.any,
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
        } = this.props;
        const mb = 'bottom-16';
        return (
            <section className={cssClass['z-page-header']}>
                {breadcrumbRoutes && breadcrumbRoutes.length ? (
                    <div className={`z-padding-${mb}`}>
                        <Breadcrumb itemRender={itemRender} routes={breadcrumbRoutes} params={breadcrumbParams} />
                    </div>
                ) : null}
                <div className="z-flex">
                    {trademark ? <div>{trademark}</div> : null}
                    <div className="z-flex-1">
                        {typeof title === 'function' ? (
                            title()
                        ) : (
                            <h1 className={`${cssClass['z-page-header-title']} z-margin-${mb}`}>{title}</h1>
                        )}
                        {typeof content === 'function' ? content() : <p className={`z-margin-${mb}`}>{content}</p>}
                    </div>
                    {typeof rightMoreContent === 'function' ? rightMoreContent() : rightMoreContent}
                </div>
                {children}
            </section>
        );
    }
}

export default {
    name: 'Aexample',
    component: Aexample,
};
