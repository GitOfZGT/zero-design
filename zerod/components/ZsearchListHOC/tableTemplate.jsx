import React from 'react';
import { Table } from 'antd';
// 表格类型
export default function tableTemplate() {
    const tool = this.getExportSomething();
    const {
        columns,
        dataSource,
        pagination,
        onChange,
        expandedRowKeys,
        onExpandedRowsChange,
        ...others
    } = this.props.tableParams;

    const _expandedRowKeys =
        typeof expandedRowKeys === 'function'
            ? expandedRowKeys(tool)
            : Array.isArray(expandedRowKeys)
            ? expandedRowKeys
            : this.state.expandedRowKeys;
    const _onExpandedRowsChange =
        typeof onExpandedRowsChange === 'function'
            ? (expandedRows) => {
                  onExpandedRowsChange(expandedRows, tool);
              }
            : (expandedRows) => {
                  this.setState({
                      expandedRowKeys: expandedRows,
                  });
              };
    const _others = {};

    Object.keys(others).forEach((key) => {
        if (typeof others[key] === 'function') {
            _others[key] = (...rest) => others[key](...rest, tool);
        } else {
            _others[key] = others[key];
        }
    });
    return (
        <>
            {this.props.panelBeforeRender && this.props.panelBeforeRender(tool)}
            {this.getPanleHeader()}
            <div>
                <div className={`z-list-table ${this.props.className || ''}`}>
                    <Table
                        expandRowByClick={true}
                        columns={this.state.tableColumns}
                        rowKey="id"
                        dataSource={this.state.listData}
                        pagination={this.showPagination && !this.isInfinite ? this.paginationOpt : false}
                        onChange={this.methods.onTableChange}
                        expandedRowKeys={_expandedRowKeys}
                        onExpandedRowsChange={_onExpandedRowsChange}
                        {..._others}
                    />
                </div>
                {this.moreBtn}
            </div>
            {this.props.panelAfterRender && this.props.panelAfterRender(tool)}
        </>
    );
}
