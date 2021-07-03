import React from 'react';
import './style.scss';
//data  : [{leftText,status:done|processing|undone,title,content,key,statusName}]
const statusNames = {
    done: '已完成',
    processing: '进行中',
    undone: '未完成'
};
const TaskHistory = (props) => {
    const { data, itemBottomRender } = props;

    return (
        <section>
            {data.map((item) => {
                return (
                    <div key={item.key} className="z-task-history-item">
                        <div className={`z-task-history-item-left ${item.leftClassName || ''}`}>
                            <div className="z-task-history-item-line-top"></div>
                            <div className="z-task-history-item-left-text">{item.leftText}</div>
                            <div className="z-task-history-item-line-bottom"></div>
                        </div>
                        <div className={`z-task-history-item-right ${item.rightClassName || ''}`}>
                            <div
                                className="z-task-history-item-right-content"
                                onClick={() => {
                                    item.onClick && item.onClick(item);
                                }}
                            >
                                <header className={`z-task-history-item-right-title status-${item.status}`}>
                                    <span className="icon">
                                        {item.icon || <i className="zero-icon zerod-shenpizhong"></i>}
                                    </span>
                                    <span className="text">{item.title}</span>
                                    {item.statusName !== null ? (
                                        <span className="status-name">
                                            {item.statusName || statusNames[item.status]}
                                        </span>
                                    ) : null}
                                </header>
                                <section className="z-task-history-item-right-text">
                                    {typeof item.content === 'function' ? item.content(item, data) : item.content}
                                </section>
                            </div>
                            {typeof itemBottomRender === 'function' ? itemBottomRender(item, data) : null}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
export const ZtaskHistory = React.memo(TaskHistory);
export default ZtaskHistory;
