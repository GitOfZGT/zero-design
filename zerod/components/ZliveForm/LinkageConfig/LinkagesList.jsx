import React, { useCallback, useEffect, useState } from 'react';
import { Collapse, Tag, Icon, Tooltip, Modal } from 'antd';
import { controlEffectList, groupEffectList } from '../liveCanstant';
const controlEffectMap = controlEffectList.reduce((tol, curr) => {
    return { ...tol, [curr.value]: curr.label };
}, {});
const groupEffectMap = groupEffectList.reduce((tol, curr) => {
    return { ...tol, [curr.value]: curr.label };
}, {});
const InfoLayout = ({ header, children }) => {
    return (
        <div className="z-info is-border">
            <div className="z-info-left" style={{ whiteSpace: 'nowrap', width: 'auto' }}>
                <div style={{ marginBottom: '10px' }}>{header}</div>
            </div>
            <div className="z-info-right">{children}</div>
        </div>
    );
};

const CollapseHeader = React.memo(({ age, onRemove }) => {
    const labels = age.src.label.split('&&');
    const keys = age.src.fieldKey.split('&&');
    return (
        <div className="z-flex-space-between">
            <div>
                触发控件：
                {labels.map((label, i) => {
                    return <Tag color="#2db7f5" key={keys[i]}>{`${label}[${keys[i]}]`}</Tag>;
                })}
            </div>
            <div className="z-flex">
                <div>{age.name}</div>
                {/* <Tooltip placement="top" title="移除">
                    <div
                        style={{ marginLeft: '15px' }}
                        className="z-live-tool-item delete all-border small"
                        onClick={(e) => {
                            e.stopPropagation();
                            typeof onRemove === 'function' && onRemove(age);
                        }}>
                        <Icon type="delete" />
                    </div>
                </Tooltip> */}
            </div>
        </div>
    );
});

const ContentOne = React.memo(({ dist, actionName }) => {
    return dist.map((item) => {
        return (
            <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                <span>
                    选项值：<Tag color="red">{item.srcValue}</Tag>
                </span>
                <span>
                    选项Label：<Tag color="blue">{item.valueLabel}</Tag>
                </span>
                联动控件：
                {item.fields.map((field) => {
                    return (
                        <Tag color="magenta" key={field.fieldKey}>
                            {`${field.label}[${field.fieldKey}]`}
                        </Tag>
                    );
                })}
                {actionName}
            </div>
        );
    });
});
const ContentTwo = React.memo(({ dist }) => {
    return dist.map((item) => {
        return (
            <div style={{ marginBottom: '10px' }} key={item.srcValue} className="z-flex">
                <div>
                    <span>
                        当 选项值：<Tag color="red">{item.srcValue}</Tag>
                    </span>
                    <span>
                        选项Label：<Tag color="blue">{item.valueLabel}</Tag>
                    </span>
                    时，
                </div>
                <div>
                    {item.fields.map((field) => {
                        return (
                            <div key={field.fieldKey}>
                                控件：
                                <Tag color="magenta">{`${field.label}[${field.fieldKey}]`}</Tag>
                                的可选选项有：
                                {field.options.map((opt) => {
                                    return (
                                        <Tag color="blue" key={opt.value}>
                                            {opt.label}
                                        </Tag>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });
});
const ContentThree = React.memo(({ dist, actionName }) => {
    return dist.map((item) => {
        return (
            <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                <span>
                    选项值：<Tag color="red">{item.srcValue}</Tag>
                </span>
                <span>
                    选项Label：<Tag color="blue">{item.valueLabel}</Tag>
                </span>
                联动组：
                {item.fields.map((group) => {
                    return (
                        <Tag color="magenta" key={group.groupName}>
                            {group.groupName}
                        </Tag>
                    );
                })}
                {actionName}
            </div>
        );
    });
});
const ContentFour = React.memo(({ dist, actionName }) => {
    return dist.map((item) => {
        return (
            <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                当触发控件的值为身份证号时，取得出生年月日值后自动填入控件：
                {item.fields.map((field) => {
                    return (
                        <Tag color="magenta" key={field.fieldKey}>
                            {`${field.label}[${field.fieldKey}]`}
                        </Tag>
                    );
                })}
            </div>
        );
    });
});

const ContentFive = React.memo(({ dist }) => {
    return (
        <InfoLayout header="触发控件的值改变时">
            {dist.map((item) => {
                return (
                    <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                        联动异步控件：
                        {item.fields.map((field) => {
                            return (
                                <Tag color="magenta" key={field.fieldKey}>
                                    {`${field.label}[${field.fieldKey}]`}
                                </Tag>
                            );
                        })}
                        请求选项；请求参数有：
                        <code>
                            {`{
                        extraValue: {...表单外部传入的},
                        formValue: {...当前表单的值},
                        ${item.asyncParamName} : 触发控件的值
                    }`}
                        </code>
                    </div>
                );
            })}
        </InfoLayout>
    );
});
const ContentSix = React.memo(({ dist }) => {
    return dist.map((item) => {
        return (
            <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                选点完成时，取<Tag color="red">{`${item.regionName}`}</Tag>
                填入：
                {item.fields.map((field) => {
                    return (
                        <Tag color="magenta" key={field.fieldKey}>
                            {`${field.label}[${field.fieldKey}]`}
                        </Tag>
                    );
                })}
            </div>
        );
    });
});
const ContentSeven = React.memo(({ dist }) => {
    return dist.map((item) => {
        return (
            <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                OCR识别成功时，取 <Tag color="red">{`${item.ocrParamName}`}</Tag>
                填入：
                {item.fields.map((field) => {
                    return (
                        <Tag color="magenta" key={field.fieldKey}>
                            {`${field.label}[${field.fieldKey}]`}
                        </Tag>
                    );
                })}
            </div>
        );
    });
});
const ContentEight = React.memo(({ dist }) => {
    return (
        <InfoLayout header="触发控件的值改变时">
            {dist.map((item) => {
                return (
                    <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                        {item.fields.length ? '联动控件：' : ''}
                        {item.fields.map((field) => {
                            return (
                                <Tag color="magenta" key={field.fieldKey}>
                                    {`${field.label}[${field.fieldKey}]`}
                                </Tag>
                            );
                        })}
                        请求地址：<Tag color="red">{item.expressionContent?.apiUrl}</Tag>,请求参数有：
                        <code>
                            {`{
                        context: {...当前表单的值},
                        exp : ${item.expressionContent?.expression}
                     }`}
                        </code>
                        ,当响应体
                        <code>
                            {`{
                        code: 0,
                        data : {...表单的值}
                     }`}
                        </code>
                        的data内字段对应表单其他控件的key时，会回填其他控件
                    </div>
                );
            })}
        </InfoLayout>
    );
});
const ContentNine = React.memo(({ dist }) => {
    return (
        <InfoLayout header="触发控件的值改变时">
            {dist.map((item) => {
                return (
                    <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                        {item.fields.length ? '联动控件：' : ''}
                        {item.fields.map((field) => {
                            return (
                                <Tag color="magenta" key={field.fieldKey}>
                                    {`${field.label}[${field.fieldKey}]`}
                                </Tag>
                            );
                        })}
                        请求地址：<Tag color="red">{item.expressionContent?.apiUrl}</Tag>,请求参数有：
                        <code>
                            {`{
                        context: {...当前表单的值},
                        exp : ${item.expressionContent?.expression}
                     }`}
                        </code>
                        ,当响应体
                        <code>
                            {`{
                        code: 0,
                        data : Boolean
                     }`}
                        </code>
                        的data是布尔类型时表示是否校验通过
                    </div>
                );
            })}
        </InfoLayout>
    );
});
const ContentTen = React.memo(({ dist, actionName, src }) => {
    return (
        <InfoLayout
            header={
                <>
                    当触发控件的值
                    {src?.fieldKey ? (
                        <span>
                            以 <Tag color="blue">{src?.fieldKey}</Tag>的格式
                        </span>
                    ) : null}
                </>
            }>
            {dist.map((item) => {
                return (
                    <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                        通过正则 <Tag color="red">{item.regularExpression}</Tag> 匹配时， 联动组：
                        {item.fields.map((field) => {
                            return (
                                <Tag color="magenta" key={field.label}>
                                    {field.label}
                                </Tag>
                            );
                        })}
                        {item.effect ? groupEffectMap[item.effect] : actionName}
                    </div>
                );
            })}
        </InfoLayout>
    );
});
const ContentEleven = React.memo(({ dist, actionName, src }) => {
    return (
        <InfoLayout
            header={
                <>
                    当触发控件的值
                    {src?.fieldKey ? (
                        <span>
                            以 <Tag color="blue">{src?.fieldKey}</Tag>的格式
                        </span>
                    ) : null}
                </>
            }>
            {dist.map((item) => {
                return (
                    <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                        通过正则 <Tag color="red">{item.regularExpression}</Tag> 匹配时， 联动控件：
                        {item.fields.map((field) => {
                            return (
                                <Tag color="magenta" key={field.fieldKey}>
                                    {`${field.label}[${field.fieldKey}]`}
                                </Tag>
                            );
                        })}
                        {item.effect ? controlEffectMap[item.effect] : actionName}
                    </div>
                );
            })}
        </InfoLayout>
    );
});
const ContentTwelve = React.memo(({ dist }) => {
    return (
        <InfoLayout header="当小程序扫码控件成功时">
            {dist.map((item) => {
                return (
                    <div style={{ marginBottom: '10px' }} key={item.srcValue}>
                        {item.fields.length ? '联动控件：' : ''}
                        {item.fields.map((field) => {
                            return (
                                <Tag color="magenta" key={field.fieldKey}>
                                    {`${field.label}[${field.fieldKey}]`}
                                </Tag>
                            );
                        })}
                        请求地址：<Tag color="red">{item.expressionContent?.apiUrl}</Tag>,请求参数有：
                        <code>
                            {`{
                        context: {...当前表单的值,scanCodeResult:扫码的结果},
                        exp : ${item.expressionContent?.expression}
                     }`}
                        </code>
                        ,当响应体
                        <code>
                            {`{
                        code: 0,
                        data : {...表单的值}
                     }`}
                        </code>
                        的data内字段对应表单其他控件的key时，会回填其他控件
                    </div>
                );
            })}
        </InfoLayout>
    );
});
const CollapseContent = React.memo(({ age, onRemove }) => {
    let content = null;
    switch (age.linkageType) {
        case '1':
            content = <ContentOne dist={age.dist} actionName="禁用" />;
            break;
        case '1.2':
            content = <ContentOne dist={age.dist} actionName="启用" />;
            break;
        case '2':
            content = <ContentOne dist={age.dist} actionName="必填" />;
            break;
        case '3':
            content = <ContentOne dist={age.dist} actionName="非必填" />;
            break;
        case '4':
            content = <ContentTwo dist={age.dist} />;
            break;
        case '5.1':
            content = <ContentThree dist={age.dist} actionName="隐藏" />;
            break;
        case '5.2':
            content = <ContentOne dist={age.dist} actionName="隐藏" />;
            break;
        case '5.3':
            content = <ContentThree dist={age.dist} actionName="显示" />;
            break;
        case '5.4':
            content = <ContentOne dist={age.dist} actionName="显示" />;
            break;
        case '6':
            content = <ContentFour dist={age.dist} />;
            break;
        case '7':
            content = <ContentFive dist={age.dist} />;
            break;
        case '8':
            content = <ContentSix dist={age.dist} />;
            break;
        case '9':
            content = <ContentSeven dist={age.dist} />;
            break;
        case '9.2':
            content = <ContentSeven dist={age.dist} />;
            break;
        case '10.1':
            content = <ContentEight dist={age.dist} />;
            break;
        case '10.2':
            content = <ContentNine dist={age.dist} />;
            break;
        case '11.1':
            content = <ContentTen dist={age.dist} actionName="隐藏" />;
            break;
        case '11.2':
            content = <ContentEleven dist={age.dist} actionName="隐藏" />;
            break;
        case '11.3':
            content = <ContentTen dist={age.dist} actionName="显示" />;
            break;
        case '11.4':
            content = <ContentEleven dist={age.dist} actionName="显示" />;
            break;
        case '12':
            content = <ContentTwelve dist={age.dist} />;
            break;
        case '13.1':
            content = <ContentTen dist={age.dist} src={age.src} />;
            break;
        case '13.2':
            content = <ContentEleven dist={age.dist} src={age.src} />;
            break;
        default:
            break;
    }
    return content;
});

const LinkagesList = ({ linkages, onLinkagesChange }) => {
    const [linkageList, setLinkageList] = useState([]);
    useEffect(() => {
        setLinkageList(
            linkages.sort((a, b) => {
                return a.linkageType - b.linkageType;
            }),
        );
    }, [linkages]);
    const removeAge = useCallback(
        (age) => {
            Modal.confirm({
                title: '是否确认移除?',
                onOk(close) {
                    const list = linkageList.filter(
                        (item) => age.src.fieldKey !== item.src.fieldKey || item.linkageType !== age.linkageType,
                    );
                    setLinkageList(list);
                    onLinkagesChange && onLinkagesChange(list);
                    close();
                },
            });
        },
        [linkageList, onLinkagesChange],
    );
    return linkageList.length ? (
        <Collapse onChange={() => {}}>
            {linkageList.map((age) => {
                return (
                    <Collapse.Panel
                        header={<CollapseHeader age={age} onRemove={removeAge} />}
                        key={`${age.src.fieldKey}${age.linkageType}`}>
                        <CollapseContent age={age} />
                    </Collapse.Panel>
                );
            })}
        </Collapse>
    ) : (
        <div className="z-panel">
            <div className="z-panel-body z-text-center">无相关数据</div>
        </div>
    );
};

export default LinkagesList;
