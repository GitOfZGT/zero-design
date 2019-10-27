import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import { dataType } from 'zerod/components/zTool';
import { Row, Col, Button } from 'antd';
export default class ListMasonry extends React.PureComponent {
    static propTypes = {
        listApiInterFace: PropTypes.func.isRequired,
        colKey: PropTypes.string,
        colContentRender: PropTypes.func.isRequired,
    };
    static defaultProps = {
        colKey: 'id',
    };
    state = {
        list: [],
        noMoreData: false,
    };
    componentDidMount() {
        this.methods.requestListData();
    }
    componentDidUpdate(preProps, prevState) {
        if (prevState.list !== this.state.list) {
            this.methods.masonryLayout();
        }
    }
    render() {
        return (
            <>
                <Row gutter={16} className="grid">
                    {this.state.list.map((record, i) => {
                        return (
                            <Col
                                {...{ xxl: 4, xl: 6, lg: 8, md: 12 }}
                                key={record[this.props.colKey]}
                                className="grid-item"
                            >
                                {this.props.colContentRender(record, i)}
                            </Col>
                        );
                    })}
                </Row>
                <div className="z-padding-top-15 z-padding-bottom-15">
                    <Button type="dashed" block onClick={this.methods.loaderMore} disabled={this.state.noMoreData}>
                        {this.state.noMoreData ? '没有更多数据' : '加载更多'}
                    </Button>
                </div>
            </>
        );
    }
    page = {
        currPage: 1,
        pageSize: 20,
    };
    methods = {
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
        requestListData: () => {
            const returner = this.props.listApiInterFace ? this.props.listApiInterFace(this.page) : null;
            if (dataType.isPromise(returner)) {
                returner.then((re) => {
                    this.setState({
                        list: [...this.state.list, ...re.data.list],
                        noMoreData: re.data.totalPage === this.page.currPage,
                    });
                });
            }
            return returner;
        },
        loaderMore: (e) => {
            this.page.currPage++;
            this.methods.requestListData();
        },
    };
}
