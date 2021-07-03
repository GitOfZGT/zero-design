import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import { dataType } from '../zTool';
import { Row, Col, Button, Spin, Empty } from 'antd';

export default class ListMasonry extends React.PureComponent {
    static propTypes = {
        listApiInterFace: PropTypes.func.isRequired,
        colKey: PropTypes.string,
        colContentRender: PropTypes.func.isRequired,
        colSpan: PropTypes.object,
        moreContentRender: PropTypes.object,
    };
    static defaultProps = {
        colKey: 'id',
        colSpan: { xxl: 4, xl: 6, lg: 8, md: 12 },
    };
    state = {
        list: [],
        noMoreData: false,
        showMoreBtn: false,
        startLoading: false,
        moreLoading: false,
    };
    componentDidMount() {
        this.methods.startLoad();
    }
    componentDidUpdate(preProps, prevState) {
        if (prevState.list !== this.state.list) {
            this.methods.masonryLayout();
        }
    }
    render() {
        return (
            <Spin spinning={this.state.startLoading}>
                <Row gutter={16} className="grid">
                    {this.state.list.length ? (
                        this.state.list.map((record, i) => {
                            return (
                                <Col {...this.props.colSpan} key={record[this.props.colKey]} className="grid-item">
                                    {this.props.colContentRender(record, i, this.state.list)}
                                </Col>
                            );
                        })
                    ) : (
                        <Empty />
                    )}
                </Row>
                {this.state.showMoreBtn ? (
                    <div className="z-text-center z-padding-top-15 z-padding-bottom-15">
                        <Button
                            type="dashed"
                            className="z-load-more-btn"
                            onClick={this.methods.loaderMore}
                            disabled={this.state.noMoreData}
                            loading={this.state.moreLoading}>
                            {this.state.noMoreData ? '没有更多数据' : '加载更多'}
                        </Button>
                    </div>
                ) : null}
                {typeof this.props.moreContentRender === 'function' && this.props.moreContentRender(this.state.list)}
            </Spin>
        );
    }
    page = {
        currPage: 1,
        pageSize: 20,
    };
    query = {};
    methods = {
        startLoad: (query) => {
            this.setState({
                startLoading: true,
            });
            this.page.currPage = 1;

            this.methods.requestListData(query, true).finally(() => {
                this.setState({
                    startLoading: false,
                });
            });
        },
        masonryLayout: () => {
            if (this.Masonry) {
                this.Masonry.reloadItems();
                this.Masonry.layout();
            } else if (this.state.list.length) {
                this.Masonry = new Masonry('.grid', {
                    // set itemSelector so .grid-sizer is not used in layout
                    itemSelector: '.grid-item',
                    // use element for option
                    // columnWidth: '.grid-sizer',
                    percentPosition: true,
                });
            }
        },
        requestListData: (query = {}, noMerge) => {
            this.query = { ...this.query, ...query };
            let returner = this.props.listApiInterFace
                ? this.props.listApiInterFace({ ...this.page, ...this.query })
                : null;
            if (dataType.isPromise(returner)) {
                returner.then((re) => {
                    this.setState({
                        list: noMerge ? re.data.list : [...this.state.list, ...re.data.list],
                        noMoreData:
                            re.data.totalPage === this.page.currPage || re.data.list.length < this.page.pageSize,
                        showMoreBtn: re.data.totalPage > 0,
                        moreLoading: false,
                        startLoading: false,
                    });
                });
            } else {
                returner = Promise.resolve();
            }
            return returner;
        },
        loaderMore: (e) => {
            this.setState({
                moreLoading: true,
            });
            this.page.currPage++;
            this.methods.requestListData().finally(() => {
                this.setState({
                    moreLoading: false,
                });
            });
        },
        getCurrentList: () => {
            return this.state.list;
        },
    };
}
