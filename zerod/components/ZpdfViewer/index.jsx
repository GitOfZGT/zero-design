import React, { useState, useEffect, useCallback, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ZwindowGapHeight from '../ZwindowGapHeight';
import './style.scss';
import { Icon, Button, message } from 'antd';
import Loading from '../../lazyLoad/Loading';
import { GenNonDuplicateID, isUrl, dataType } from '../zTool';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
function getWritDocPdf({ pagerType, docInstancePdfId, docJsonPdfId, getPrivateFile, label, privateFileFieldNames }) {
    if (!docInstancePdfId && !docJsonPdfId) {
        message.info(`[${label}]无PDF可预览`);
        return Promise.reject();
    }
    const existPdfId = docInstancePdfId || docJsonPdfId;
    const togglePdfId = pagerType === 'A4' ? docInstancePdfId : docJsonPdfId;
    //获取最新的私读pdf
    return typeof getPrivateFile === 'function'
        ? getPrivateFile({
              id: togglePdfId || existPdfId,
          }).then((res) => {
              const url = res.data ? res.data[privateFileFieldNames.filePath] : '';
              if (!url) {
                  return null;
              }
              let newpath = isUrl(url) ? url : `${window.location.origin}/${url.replace(/^\//, '')}`;
              const reg = /id=[\w-]*(?=(&?))/g;
              if (newpath.search(reg) > -1) {
                  newpath = newpath.replace(reg, `id=${GenNonDuplicateID()}`);
              } else {
                  newpath += /\?.+/.test(newpath) ? '&' : '?' + `id=${GenNonDuplicateID()}`;
              }
              return {
                  pdfUrl: newpath,
                  pagerType,
                  showToggleBtn: docInstancePdfId && docJsonPdfId,
              };
          })
        : Promise.resolve();
}

const propTypes = {
    value: PropTypes.array,
    writTopRender: PropTypes.func,
    writLabelRightRender: PropTypes.func,
    getPrivateFile: PropTypes.func.isRequired,
    actionBtns: PropTypes.array,
    isViewArea: PropTypes.bool,
    sortDroppabled: PropTypes.bool,
    onDragSorterChange: PropTypes.func,
    pdfListFieldNames: PropTypes.object,
    privateFileFieldNames: PropTypes.object,
    defaultActiveKey: PropTypes.string,
};
const defaultProps = {
    actionBtns: [
        // { title: '', onClick: () => {}, key: '1' },
        // { title: '', onClick: () => {}, key: '2' },
        // { title: '', onClick: () => {}, key: '3' },
    ],
    isViewArea: true,
    pdfListFieldNames: {
        label: 'label',
        key: 'key',
        docInstancePdfId: 'docInstancePdfId',
        docJsonPdfId: 'docJsonPdfId',
    },
    privateFileFieldNames: {
        filePath: 'filePath',
    },
};
// writList ： [{key:"",url:"",label:""}]
const ZpdfViewer = React.forwardRef((props, ref) => {
    const {
        value,
        writTopRender,
        actionBtns,
        writLabelLeftRender,
        writLabelRightRender,
        writContentRender,
        isViewArea,
        getPrivateFile,
        style,
        className,
        pdfListFieldNames,
        privateFileFieldNames,
        defaultActiveKey,
        sortDroppabled,
        onDragSorterChange,
        onActive,
    } = props;
    const [writList, setWritList] = useState([]);
    const originListRef = useRef([]);
    useEffect(() => {
        if (Array.isArray(value)) {
            originListRef.current = value.map((item) => ({
                ...item,
                key: item[pdfListFieldNames.key],
                label: item[pdfListFieldNames.label],
                docInstancePdfId: item[pdfListFieldNames.docInstancePdfId],
                docJsonPdfId: item[pdfListFieldNames.docJsonPdfId],
            }));
            setWritList(originListRef.current);
        } else {
            originListRef.current = [];
            setWritList([]);
        }
    }, [value, pdfListFieldNames]);
    const [active, setActive] = useState({ key: '', iframeUrl: '', pagerType: '', showToggleBtn: false });
    const [btnLoading, setBtnLoading] = useState({});
    const [loading, setLoading] = useState(false);
    const leftScrollRef = useRef();
    const currentWritRef = useRef();
    const pagerTypeRef = useRef('A4');
    const setCurrentWrit = useCallback(
        (item) => {
            currentWritRef.current = item;
            const returned =
                typeof onActive === 'function' ? onActive({ current: currentWritRef.current, setActive }) : null;
            setLoading(true);
            (dataType.isPromise(returned) ? returned : Promise.resolve())
                .then((result) => {
                    if (typeof result === 'boolean' && !result) {
                        return null;
                    }
                    return getWritDocPdf({
                        ...item,
                        pagerType: pagerTypeRef.current,
                        getPrivateFile,
                        privateFileFieldNames,
                    }).then((activeInfo) => {
                        if (activeInfo) {
                            setActive((prevState) => ({
                                ...prevState,
                                iframeUrl: activeInfo.pdfUrl,
                                key: item.key,
                                pagerType: activeInfo.pagerType,
                                showToggleBtn: activeInfo.showToggleBtn,
                            }));
                        }
                    });
                })

                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                });
        },
        [getPrivateFile, onActive, privateFileFieldNames],
    );
    const wElRef = useRef();
    useEffect(() => {
        if (writList.length) {
            const noActive = writList.every((item) => item.key !== active.key);
            if (noActive) {
                pagerTypeRef.current = 'A4';
                //当前列表中不存在选中状态才选中第一个
                let activeWrit = writList[0];
                if (defaultActiveKey) {
                    activeWrit = writList.find((item) => item.key === defaultActiveKey);
                }
                setCurrentWrit(activeWrit);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [writList, active]);
    const methods = {
        reloadIframe(activeWrit) {
            if (currentWritRef.current && activeWrit && currentWritRef.current.key === activeWrit.key) {
                setCurrentWrit(activeWrit);
            }
        },
        setCurrentWrit,
    };
    useImperativeHandle(ref, () => methods);
    const onDragEnd = useCallback(
        (result) => {
            if (result.source && result.destination && result.source.index !== result.destination.index) {
                const prevList = writList;
                const currentList = [...writList];
                if (result.source.index < result.destination.index) {
                    currentList.splice(result.destination.index + 1, 0, currentList[result.source.index]);
                    currentList.splice(result.source.index, 1);
                } else {
                    const removes = currentList.splice(result.source.index, 1);
                    currentList.splice(result.destination.index, 0, removes[0]);
                }
                setWritList(currentList);
                onDragSorterChange &&
                    onDragSorterChange({
                        originList: originListRef.current,
                        prevList,
                        currentList,
                        setWritList,
                        dragResult: result,
                    });
            }
        },
        [writList, onDragSorterChange],
    );
    const getFrameContent = (active) => {
        const returned = typeof writContentRender === 'function' ? writContentRender(active, writList) : false;
        return typeof returned === 'boolean' && !returned ? (
            <iframe src={active.iframeUrl} frameBorder="0" className="z-writ-iframe" seamless scrolling="auto" />
        ) : (
            returned
        );
    };
    const content = (
        <section className={`z-writ-wrapper ${className || ''}`} ref={wElRef} style={style}>
            <div className="z-writ-left " ref={leftScrollRef}>
                {actionBtns.length ? (
                    <div className="z-writ-list-header">
                        <div className="z-writ-btn-row">
                            {actionBtns.map((item) => {
                                const { key, render, onClick, title, className, ...others } = item;
                                return (
                                    <div className={`btn-col ${className}`} key={key} {...others}>
                                        {render ? (
                                            render(currentWritRef.current, writList, [
                                                btnLoading[key],
                                                (loading) => {
                                                    setBtnLoading({ ...btnLoading, [key]: loading });
                                                },
                                            ])
                                        ) : (
                                            <Button
                                                loading={btnLoading[key]}
                                                size="small"
                                                type="primary"
                                                onClick={(e) => {
                                                    typeof onClick === 'function' &&
                                                        onClick(item, currentWritRef.current, writList, (loading) => {
                                                            setBtnLoading({ ...btnLoading, [key]: loading });
                                                        });
                                                }}
                                                block={actionBtns.length > 1}>
                                                {title}
                                            </Button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : null}
                <div className="z-writ-list-body">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="list" isDropDisabled={!sortDroppabled}>
                            {(provided) => (
                                <ul className="z-writ-list" ref={provided.innerRef} {...provided.droppableProps}>
                                    {writList.map((item, index) => (
                                        <Draggable key={item.key} draggableId={item.key.toString()} index={index}>
                                            {(draged) => (
                                                <li
                                                    className={`z-writ-list-item ${
                                                        active.key === item.key ? 'active' : ''
                                                    }`}
                                                    ref={draged.innerRef}
                                                    {...draged.draggableProps}
                                                    {...draged.dragHandleProps}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        pagerTypeRef.current = 'A4';
                                                        setCurrentWrit(item);
                                                    }}>
                                                    <div className="z-flex-wrap">
                                                        <div>
                                                            {writLabelLeftRender ? (
                                                                writLabelLeftRender(item, methods)
                                                            ) : (
                                                                <Icon type="file-pdf" />
                                                            )}
                                                        </div>
                                                        <div className="z-margin-left-10 z-flex-1">
                                                            {item.label}
                                                            {writLabelRightRender &&
                                                                writLabelRightRender(item, methods)}
                                                        </div>
                                                    </div>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>

            <div className="z-writ-right">
                {writTopRender && writTopRender(currentWritRef.current, writList)}
                <div className="z-writ-content">
                    {getFrameContent(active, writList)}
                    {active.showToggleBtn ? (
                        <div className="z-toggle-btns">
                            <Button
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const activeItem = writList.find((item) => item.key === active.key);
                                    if (activeItem) {
                                        pagerTypeRef.current = pagerTypeRef.current === 'A4' ? 'small' : 'A4';
                                        setCurrentWrit(activeItem);
                                    }
                                }}>
                                切换到{active.pagerType === 'A4' ? '小票pdf' : 'A4纸pdf'}
                            </Button>
                        </div>
                    ) : null}
                    {loading ? (
                        <div className="z-writ-loading">
                            <Loading></Loading>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
    return isViewArea ? <ZwindowGapHeight gap={20}>{content}</ZwindowGapHeight> : content;
});
ZpdfViewer.propTypes = propTypes;
ZpdfViewer.defaultProps = defaultProps;
export default React.memo(ZpdfViewer);
