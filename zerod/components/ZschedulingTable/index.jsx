import React from 'react';
import PropTypes from 'prop-types';
import { dataType } from '../zTool';
import { Popover } from 'antd';
class Cell extends React.PureComponent {
    methods = {
        select: (selected, callback) => {
            this.setState(
                {
                    selected,
                },
                callback,
            );
        },
        update: () => {
            this.setState({
                updated: !this.state.updated,
            });
        },
    };
    state = {
        selected: false,
        updated: false,
    };
    // cellEl = React.createRef();
    render() {
        const { className, children, tr, tr_i, td, td_i, ...others } = this.props;
        return (
            <div className={`${className} ${this.state.selected ? 'selected' : ''}`} {...others}>
                {dataType.isFunction(td.render)
                    ? td.render(tr, tr_i, td, td_i)
                    : dataType.isObject(tr.record)
                    ? tr.record[td.dataIndex]
                    : tr[td.dataIndex]}
            </div>
        );
    }
}
export class ZschedulingTable extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        showThead: PropTypes.bool, //是否显示table的thead
        columns: PropTypes.arrayOf(PropTypes.object), //列数据
        dataSource: PropTypes.arrayOf(PropTypes.object), //行数据
        popoverEnabled: PropTypes.bool, //是否启用单元格右键popover
        popoverTitleRender: PropTypes.func, //popover的title渲染函数，
        popoverContentRender: PropTypes.func, //popover的content渲染函数，
        onPopoverVisibleChange: PropTypes.func, //popover显示/隐藏时的回调，
        onGetPopupContainer: PropTypes.func, //popover渲染的父节点，默认渲染到 body 上
        onCellClick: PropTypes.func, //单元格点击事件
        popoverTrigger: PropTypes.string, //popover 打开的方式  左键"click" | 右键"contextMenu"
    };
    static defaultProps = {
        className: '',
        columns: [
            // {
            // 	key: "col",
            // 	width: "auto",
            // 	dataIndex: "date",
            // 	title: "日期",
            // 	titleRender: () => {},
            // 	render: () => {},
            // 	align: "left",
            // },
        ],
        dataSource: [],
        popoverEnabled: true,
        popoverTrigger: 'contextMenu',
        showThead: true,
    };
    methods = {
        cellClick: (tr, trindex, td, tdindex) =>
            this.props.onCellClick
                ? (e) => {
                      this.props.onCellClick(tr, trindex, td, tdindex);
                  }
                : undefined,
        onContextMenu: (e) => {
            e.preventDefault();
        },
        popoverVisibleChange: (tr, tr_i, td, td_i) => (show) => {
            this.props.onPopoverVisibleChange && this.props.onPopoverVisibleChange(show, tr, tr_i, td, td_i);
        },
    };
    state = {};
    render() {
        const {
            columns,
            popoverEnabled,
            className,
            style,
            dataSource,
            popoverTitleRender,
            popoverContentRender,
            onPopoverVisibleChange,
            onGetPopupContainer,
            popoverTrigger,
            showThead,
            disabled,
        } = this.props;
        const cols = [];
        const th = columns.map((col, i) => {
            const key = col.key ? col.key : col.dataIndex ? col.dataIndex : i;
            cols.push(<col key={key} width={col.width ? col.width : ''} />);
            return (
                <td key={key}>
                    <div className={col.className}>
                        {dataType.isFunction(col.titleRender) ? col.titleRender(col, i) : col.title}
                    </div>
                </td>
            );
        });

        return (
            <table
                className={`z-scheduling-table ${className}`}
                style={style}
                onContextMenu={this.methods.onContextMenu}>
                <colgroup>{cols}</colgroup>
                {th.length && showThead ? (
                    <thead>
                        <tr>{th}</tr>
                    </thead>
                ) : null}
                <tbody>
                    {dataSource.map((tr, tr_i) => {
                        const trKey = tr.id ? tr.id : tr_i;
                        return (
                            <tr key={trKey}>
                                {columns.map((td, td_i) => {
                                    const tdKey = `${trKey}_${td.key ? td.key : td.dataIndex ? td.dataIndex : td_i}`;
                                    let cell = tr[td.key];
                                    cell = dataType.isObject(cell) ? cell : {};
                                    const onNodeClick = this.methods.cellClick(tr, tr_i, td, td_i);

                                    const popoverTitle = popoverTitleRender
                                        ? popoverTitleRender(tr, tr_i, td, td_i)
                                        : '标题';
                                    const popoverContent = popoverContentRender
                                        ? popoverContentRender(tr, tr_i, td, td_i)
                                        : '内容';
                                    const nodeEvent =
                                        popoverTrigger == 'contextMenu'
                                            ? { onClick: onNodeClick }
                                            : { onDoubleClick: onNodeClick };
                                    let disabledCellClassName = tr.disabled || td.disabled ? 'disabled' : '';
                                    if (disabled) {
                                        disabledCellClassName = '';
                                    }
                                    const textNode = (
                                        <Cell
                                            className={`${disabledCellClassName}`}
                                            {...{ tr, tr_i, td, td_i }}
                                            {...nodeEvent}
                                            ref={cell.ref}
                                        />
                                    );
                                    return (
                                        <td key={tdKey}>
                                            {!disabledCellClassName && popoverEnabled && popoverTitle ? (
                                                <Popover
                                                    onVisibleChange={this.methods.popoverVisibleChange(
                                                        tr,
                                                        tr_i,
                                                        td,
                                                        td_i,
                                                    )}
                                                    getPopupContainer={onGetPopupContainer}
                                                    placement="right"
                                                    title={popoverTitle}
                                                    content={popoverContent}
                                                    trigger={popoverTrigger}
                                                    overlayClassName="z-scheduling-popover">
                                                    {textNode}
                                                </Popover>
                                            ) : (
                                                textNode
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default ZschedulingTable;
