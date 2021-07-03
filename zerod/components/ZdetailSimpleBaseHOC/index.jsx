import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    const_getInsertLocation,
    const_getMainTool,
    const_getMethods,
    const_getPageWrapperProps,
    requireValid,
} from '../constant';
import ZpanelTitle from '../ZpanelTitle';
// 工具
import { mergeConfig } from '../zTool/';
// 上下文
import ZerodMainContext from '../ZerodMainContext';
import Zinfo from '../Zinfo';
// 其他HOC
import { ZpageWraperHOC } from '../ZpageWrapper';
const PageWraper = ZpageWraperHOC();

export function ZdetailSimpleBaseHOC(pageConfig) {
    pageConfig = pageConfig || {};
    let defaultConfig = {
        pageHeader: {
            show: true,
            // array>[object] | null,如果是null则不显示面包屑
            breadcrumbRoutes: null,
            // any
            title: '标题',
            //any
            content: '描述',
            //element | node
            rightMoreContent: null,
        },
        detail: {
            panelHeader: '基础信息',
            defaultSpan: undefined,
            items: [
                // {
                // 	key: "serviceCode",
                // 	label: "名称",
                // 	span: 8,
                // 	render: () => {
                // 		return (value, record)=>value;
                // 	},
                // },
                // {
                // 	key: "serviceName",
                // 	label: "描述",
                // 	span: 8,
                // 	render: () => {
                // 		return (value, record)=>value;
                // 	},
                // },
            ],
            // 获取详情数据的后台接口函数，必须返回 Promise
            detailApiInterface: () => Promise.resolve({ data: {} }),
        },
        // 更多渲染内容
        moreContentRender: (detail) => null,
        // 更多渲染内容函数
        panelBeforeRender: (detail, tool) => null,
        // 更多渲染内容函数
        panelAfterRender: (detail, tool) => null,
        exportSomething: null,
    };
    defaultConfig = mergeConfig(defaultConfig, pageConfig);
    class myDetail extends React.PureComponent {
        static propTypes = {
            detailId: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
        };
        config = defaultConfig;
        state = {
            detailData: {},
        };
        methods = {
            ...const_getMethods.call(this),
            getDetailData: () => {
                this.methods.showLoading(true);
                this.config.detail
                    .detailApiInterface(this.props.detailId, this.props, this.tool)
                    .then((re) => {
                        const noData = requireValid.hasData(re);
                        if (noData) {
                            return noData;
                        }
                        this.setState({
                            detailData: re.data,
                        });
                    })
                    // .catch(re => {
                    // 	this.methods.notice.error(re && re.msg ? re.msg : "获取数据失败");
                    // })
                    .finally(() => {
                        this.methods.showLoading(false);
                    });
            },
        };
        getPanleHeader() {
            const heading = this.config.detail.panelHeader;
            return heading ? (
                <ZpanelTitle className="z-margin-bottom-15">
                    {typeof heading === 'function' ? heading(this.tool) : heading}
                </ZpanelTitle>
            ) : null;
        }
        tool = {
            ...const_getMainTool.call(this),
            getWrapperProps: () => this.props,
            showLoading: this.methods.showLoading, //同 methods.showLoading,这为了版本兼容
            methods: this.methods,
            $router: {
                history: this.props.history,
                location: this.props.location,
            },
        };
        componentDidMount() {
            typeof this.config.exportSomething === 'function' && this.config.exportSomething(this.tool);
            this.insertLocation = const_getInsertLocation(this.hocWrapperEl);
            this.methods.getDetailData();
        }
        pageWraper = const_getPageWrapperProps(this.config);
        render() {
            return (
                <section
                    ref={(el) => {
                        this.hocWrapperEl = el;
                    }}>
                    <PageWraper {...this.pageWraper}>
                        {typeof this.config.panelBeforeRender === 'function' &&
                            this.config.panelBeforeRender(this.state.detailData, this.tool)}
                        <div>
                            {this.getPanleHeader()}
                            <Zinfo
                                items={this.config.detail.items}
                                fieldValue={this.state.detailData}
                                defaultSpan={this.config.detail.defaultSpan}
                            />
                            {typeof this.config.moreContentRender === 'function' &&
                                this.config.moreContentRender(this.state.detailData, this.tool)}
                        </div>

                        {typeof this.config.panelAfterRender === 'function' &&
                            this.config.panelAfterRender(this.state.detailData, this.tool)}
                    </PageWraper>
                </section>
            );
        }
    }
    return ZerodMainContext.setConsumer(withRouter(myDetail));
}

export default ZdetailSimpleBaseHOC;
