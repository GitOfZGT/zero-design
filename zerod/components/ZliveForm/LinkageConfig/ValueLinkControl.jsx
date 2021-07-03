import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getControl, getOptions } from '../../Zform/controls';
import { Row, Col, Tag, Button, message, Input } from 'antd';
import ZoneWayTransfer from '../../ZoneWayTransfer';
import { itemsFromTree, parseJsonToObject } from '../../zTool';
import fieldTypeProperties from '../liveFormActions/fieldTypeProperties';
import { linkRemark1, linkRemark2, linkRemark3, linkRemark4 } from './linkRemark';
import { regionNames, ocrFieldNames } from '../common';
import { linkageTypeActionName, controlEffectList, groupEffectList } from '../liveCanstant';
function turnSelectOptions(section, needChild, filter = (list) => list) {
    return section.map((g) => {
        let group = false;
        let children = null;
        if (Array.isArray(g.formFieldInfoList)) {
            group = true;
            children = filter(g.formFieldInfoList).map((item) => ({ ...item, value: item.fieldKey, disabled: false }));
        }
        const newItem = {
            ...g,
            value: g.name,
            group: needChild ? group : false,
            label: g.name,
            formFieldInfoList: null,
        };
        if (children && needChild) {
            newItem.children = children;
        }
        return newItem;
    });
}
function getControlitem(type, getExtendComponents) {
    const extendComs = (typeof getExtendComponents === 'function' ? getExtendComponents() : null) || [];
    const controlList = [...fieldTypeProperties, ...extendComs];
    const findItem = controlList.find((item) => item.value.toString() === (type && type.toString()));
    return findItem;
}

function getLinkValue(query = {}) {
    return {
        srcControl: null,
        srcValues: [],
        srcControls: [],
        distControls: [],
        leftSelectedVal: '',
        rightSelectedVal: '',
        distControl: null,
        distValues: [],
        ...query,
    };
}

const propTypes = {
    newFormData: PropTypes.object,
    onSrcSelected: PropTypes.func,
    onOk: PropTypes.func,
    onBack: PropTypes.func,
};
function ValueLinkControl(props) {
    const { newFormData, onSrcSelected, onOk, onBack, linkageType, getExtendComponents } = props;
    const [leftTransferSelections, setLeftTransferSelections] = useState([]);
    const [leftTransferSelected, setLeftTransferSelected] = useState([]);
    const [rightTransferSelections, setRightTransferSelections] = useState();
    const [rightTransferSelected, setRightTransferSelected] = useState([]);
    const asyncParamNameRef = useRef('id');
    const regionNameRef = useRef('province,city,district');
    const ocrFieldNameRef = useRef('name');
    const regularExpressionRef = useRef('');
    const combinationKeyRef = useRef('');
    const effectRef = useRef('');
    const expressionRef = useRef({ expression: '', apiUrl: '/elite-service/elite/webapi/core/getValueByExp' });
    const [linkValue, setLinkValue] = useState(getLinkValue());
    const extendComsKeys = ((typeof getExtendComponents === 'function' ? getExtendComponents() : null) || []).map(
        (item) => item.value,
    );
    useEffect(() => {
        switch (linkageType) {
            // 单选/多选控制控件禁用
            case '1':
            // 单选/多选控制控件启用
            case '1.2':
            // 单选/多选控制控件必填
            case '2':
            // 单选/多选控制控件非必填
            case '3':
            // 单选/多选控制控件隐藏
            case '5.2':
            // 单选/多选控制控件显示
            case '5.4':
                setLeftTransferSelections([]);
                setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true));
                break;
            // 单选/多选控制组隐藏
            case '5.1':
            // 单选/多选控制组显示
            case '5.3':
                setLeftTransferSelections([]);
                setRightTransferSelections(turnSelectOptions(newFormData.sectionList, false));
                break;
            // 单选/多选控制选项
            case '4':
                setLeftTransferSelections([]);
                setRightTransferSelections([]);
                break;
            // 身份证取出生年月日
            case '6':
                setLeftTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [1].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                setRightTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [1, 5].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                break;
            // 单选联动其他控件异步选项
            case '7':
                setLeftTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [3, 6, 7, 8, 9].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                setRightTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => {
                            const config = parseJsonToObject(item.config);
                            return (
                                [3, 6, 7, 8, 9].concat(extendComsKeys).includes(item.fieldType) &&
                                +config.selectionsType === 2
                            );
                        }),
                    ),
                );
                break;
            // 地图选点取行政区划
            case '8':
                setLeftTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [13].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                setRightTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [1, 2].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                break;
            // 证件照OCR识别取值
            case '9':
                setLeftTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [16].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                setRightTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [1, 2, 5].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                break;
            // 任意图片OCR识别取值
            case '9.2':
                setLeftTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [11].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                setRightTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [1, 2, 5].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                break;
            // 运算表达式
            case '10.1':
            // 校验表达式
            case '10.2':
                setLeftTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) =>
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 18, 21].concat(extendComsKeys).includes(item.fieldType),
                        ),
                    ),
                );
                setRightTransferSelections(
                    linkageType === '10.2'
                        ? []
                        : turnSelectOptions(newFormData.sectionList, true, (list) =>
                              list.filter((item) =>
                                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18].concat(extendComsKeys).includes(item.fieldType),
                              ),
                          ),
                );
                break;
            // 正则控制组隐藏
            case '11.1':
            // 正则控制组显示
            case '11.3':
                setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true));
                setRightTransferSelections(turnSelectOptions(newFormData.sectionList, false));
                break;
            // 正则控制控件隐藏
            case '11.2':
            // 正则控制控件显示
            case '11.4':
                setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true));
                setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true));
                break;
            // 小程序文本框扫码异步取值
            case '12':
                setLeftTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) => [1, 2].concat(extendComsKeys).includes(item.fieldType)),
                    ),
                );
                setRightTransferSelections(
                    turnSelectOptions(newFormData.sectionList, true, (list) =>
                        list.filter((item) =>
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18].concat(extendComsKeys).includes(item.fieldType),
                        ),
                    ),
                );
                break;
            // 多控件值联合正则控制组
            case '13.1':
                setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true));
                setRightTransferSelections(turnSelectOptions(newFormData.sectionList, false));
                break;
            // 多控件值联合正则控制控件
            case '13.2':
                setLeftTransferSelections(turnSelectOptions(newFormData.sectionList, true));
                setRightTransferSelections(turnSelectOptions(newFormData.sectionList, true));
                break;
            default:
        }
        setLinkValue(getLinkValue());
        setLeftTransferSelected([]);
        setRightTransferSelected([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [linkageType, newFormData.sectionList]);

    const selectOptionsRef = useRef(
        turnSelectOptions(newFormData.sectionList, true, (list) =>
            list.filter((item) => {
                const config = parseJsonToObject(item.config);

                return [3, 8, 9].concat(extendComsKeys).includes(item.fieldType) && config.selectionsType != 2;
            }),
        ),
    );
    //第一个穿梭框的特殊属性
    const leftTransferPropsRef = useRef({});
    const getSelectControl = (opt = {}) => (
        <div className="z-flex-1 z-margin-right-10" style={{ overflow: 'hidden' }}>
            {getControl('Select', {
                showSearch: false,
                size: 'small',
                placeholder: '请选择单选/多选控件',
                selectList: selectOptionsRef.current,
                style: {
                    width: '100%',
                },
                dropdownMatchSelectWidth: false,
                dropdownStyle: { width: '400px' },
                optLabelRender(item) {
                    const findItem = getControlitem(item.fieldType, getExtendComponents);
                    return (
                        <div className="z-flex-space-between z-link-config-control-box">
                            <span className="z-margin-right-8 z-link-config-control-label">
                                {item.label}
                                {item.fieldKey ? `-${item.fieldKey}` : ''}
                            </span>
                            {findItem ? <Tag color="#2db7f5">{findItem.label}</Tag> : null}
                        </div>
                    );
                },
                ...opt,
            })}
        </div>
    );
    if (['1', '1.2', '2', '3', '4', '5.1', '5.2', '5.3', '5.4'].includes(linkageType)) {
        leftTransferPropsRef.current = {
            leftTitle() {
                return getSelectControl({
                    value: linkValue.leftSelectedVal,
                    onChange(val) {
                        itemsFromTree({
                            tree: selectOptionsRef.current,
                            sourceItem: { value: val },
                            keyObj: { id: 'value', children: 'children' },
                            action({ tree, currentItem, item, index }) {
                                const config = parseJsonToObject(currentItem.config);
                                setLeftTransferSelections(config.selectList);
                                setLinkValue({
                                    ...linkValue,
                                    leftSelectedVal: currentItem.value,
                                    srcValues: [],
                                    distControls: [],
                                    srcControls: [],
                                    srcControl: currentItem,
                                });
                                setLeftTransferSelected([]);
                                setRightTransferSelected([]);
                                if (!['4', '5.1', '5.3'].includes(linkageType)) {
                                    setRightTransferSelections(
                                        turnSelectOptions(newFormData.sectionList, true, (list) =>
                                            list.filter((item) => item.fieldKey !== val),
                                        ),
                                    );
                                }
                                onSrcSelected && onSrcSelected(currentItem);
                            },
                        });
                        // console.log(turnSelectOptions(newFormData.sectionList));
                    },
                });
            },
            rightTitle: '已选择的选项',
        };
    } else if (
        ['6', '7', '8', '9', '9.2', '10.1', '10.2', '11.1', '11.2', '11.3', '11.4', '12', '13.1', '13.2'].includes(
            linkageType,
        )
    ) {
        leftTransferPropsRef.current = {
            leftTitle: '可选控件列表',
            rightTitle: ['10.1', '10.2', '12'].includes(linkageType) ? '触发表达式的控件' : '已选择的控件',
            leftItemRender(item, index) {
                const findControl = getControlitem(item.fieldType, getExtendComponents);
                return (
                    <div className="z-flex-space-between z-link-config-control-box">
                        <span>
                            {item.label}
                            {item.fieldKey ? `-${item.fieldKey}` : ''}
                        </span>
                        {findControl ? <Tag color="purple">{findControl.label}</Tag> : null}
                    </div>
                );
            },
        };
    }
    //第二个穿梭框的特殊属性
    const rightTransferPropsRef = useRef({});
    if (
        [
            '1',
            '1.2',
            '2',
            '3',
            '5.2',
            '5.4',
            '6',
            '7',
            '8',
            '9',
            '9.2',
            '10.1',
            '10.2',
            '11.1',
            '11.2',
            '11.3',
            '11.4',
            '12',
            '13.1',
            '13.2',
        ].includes(linkageType)
    ) {
        rightTransferPropsRef.current = {
            leftTitle: '可选控件列表',
            rightTitle: ['6', '8', '9', '9.2', '10.1', '10.2', '12'].includes(linkageType)
                ? '接收值得控件'
                : '被控制的控件',
            leftItemRender(item, index) {
                const findControl = getControlitem(item.fieldType, getExtendComponents);
                return (
                    <div className="z-flex-space-between z-link-config-control-box">
                        <span>
                            {item.label}
                            {item.fieldKey ? `-${item.fieldKey}` : ''}
                        </span>
                        {findControl ? <Tag color="purple">{findControl.label}</Tag> : null}
                    </div>
                );
            },
        };
    } else if (['4'].includes(linkageType)) {
        rightTransferPropsRef.current = {
            leftTitle() {
                return getSelectControl({
                    value: linkValue.rightSelectedVal,
                    onChange(val) {
                        itemsFromTree({
                            tree: selectOptionsRef.current,
                            sourceItem: { value: val },
                            keyObj: { id: 'value', children: 'children' },
                            action({ tree, currentItem, item, index }) {
                                const config = parseJsonToObject(currentItem.config);
                                setRightTransferSelections(config.selectList);
                                setLinkValue({
                                    ...linkValue,
                                    rightSelectedVal: currentItem.value,
                                    distValues: [],
                                    distControls: [],
                                    srcControls: [],
                                    distControl: currentItem,
                                });
                                setRightTransferSelected([]);
                            },
                        });
                    },
                });
            },
            rightTitle: '已选择的选项',
        };
    } else if (['5.1', '5.3'].includes(linkageType)) {
        rightTransferPropsRef.current = {
            leftTitle: '可选组列表',
            rightTitle: '已选择的组',
        };
    }

    let linkRemark = null;
    switch (linkageType) {
        case '1':
        case '1.2':
        case '2':
        case '3':
        case '5.1':
        case '5.2':
        case '5.3':
        case '5.4':
            linkRemark = linkRemark1({ ...linkValue, linkageType });
            break;
        case '4':
            linkRemark = linkRemark2(linkValue);
            break;
        case '6':
            linkRemark = linkRemark3(linkValue, { remmak1: '身份证输入控件：', remmak2: '联动出生年月日接收控件：' });
            break;
        case '7':
            linkRemark = linkRemark3(linkValue, { remmak1: '单选框/下拉框控件：', remmak2: '联动异步接收控件：' });
            break;
        case '8':
            linkRemark = linkRemark3(linkValue, { remmak1: '地图选点控件：', remmak2: '联动接收控件：' });
            break;
        case '9':
            linkRemark = linkRemark3(linkValue, { remmak1: '证件照(OCR)控件：', remmak2: '联动接收控件：' });
            break;
        case '9.2':
            linkRemark = linkRemark3(linkValue, { remmak1: '上传控件：', remmak2: '联动接收控件：' });
            break;
        case '10.1':
        case '10.2':
        case '12':
            linkRemark = linkRemark3(linkValue, { remmak1: '控件：', remmak2: '表达式生效后联动接收控件：' });
        case '11.1':
        case '11.2':
        case '11.3':
        case '11.4':
            linkRemark = linkRemark3(linkValue, {
                remmak1: '控件：',
                remmak2: `的值联动${linkageTypeActionName[linkageType]}`,
            });
            break;
        case '13.1':
        case '13.2':
            linkRemark = linkRemark3(linkValue, {
                remmak1: '控件：',
                remmak2: '的值同时联动：',
            });
            break;
        default:
    }
    const regularExpressionInput = {
        remark: linkRemark4(linkValue, { remmak1: '控件', remmak2: '的值匹配的正则表达式：' }),
        defaultValue: regularExpressionRef.current,
        onChange: (val) => {
            regularExpressionRef.current = val;
        },
    };
    const selectParamname = {
        8: {
            remark: linkRemark4(linkValue, { remmak1: '选项的行政区划信息传入：', remmak2: '的内容是：' }),
            defaultValue: regionNameRef.current,
            onChange: (val) => {
                regionNameRef.current = val;
            },
            selectList: regionNames,
        },
        9: {
            remark: linkRemark4(linkValue, { remmak1: 'OCR识别的证件信息传入：', remmak2: '的内容是：' }),
            defaultValue: ocrFieldNameRef.current,
            onChange: (val) => {
                ocrFieldNameRef.current = val;
            },
            selectList: ocrFieldNames,
        },
        9.2: {
            remark: linkRemark4(linkValue, { remmak1: 'OCR识别的信息传入：', remmak2: '的内容key是：' }),
            defaultValue: ocrFieldNameRef.current,
            onChange: (val) => {
                ocrFieldNameRef.current = val;
            },
        },
        11.1: regularExpressionInput,
        11.2: regularExpressionInput,
        11.3: regularExpressionInput,
        11.4: regularExpressionInput,
    };

    return (
        <Row gutter={20} className="z-margin-top-15" type="flex">
            <Col span={!['10.2'].includes(linkageType) ? 12 : 24}>
                <ZoneWayTransfer
                    {...leftTransferPropsRef.current}
                    sourceKeys={{
                        name: 'label',
                        id: 'value',
                        children: 'children',
                    }}
                    repeated={false}
                    leftSourceData={leftTransferSelections}
                    rightTargetData={leftTransferSelected}
                    onChange={(actionType, rightData, actionItem, sibligItem) => {
                        if (['13.1', '13.2'].includes(linkageType)) {
                            combinationKeyRef.current = rightData.map((item) => item.fieldKey).join('&&');
                        }
                        setLinkValue(
                            [
                                '6',
                                '7',
                                '8',
                                '9',
                                '9.2',
                                '10.1',
                                '10.2',
                                '11.1',
                                '11.2',
                                '11.3',
                                '11.4',
                                '12',
                                '13.1',
                                '13.2',
                            ].includes(linkageType)
                                ? { ...linkValue, srcControls: rightData }
                                : {
                                      ...linkValue,
                                      srcValues: rightData.map((item) => ({
                                          label: item.label,
                                          value: item.value,
                                      })),
                                  },
                        );
                    }}
                />
            </Col>

            {!['10.2'].includes(linkageType) ? (
                <Col span={12}>
                    <ZoneWayTransfer
                        {...rightTransferPropsRef.current}
                        repeated={false}
                        sourceKeys={{
                            name: 'label',
                            id: 'value',
                            children: 'children',
                        }}
                        leftSourceData={rightTransferSelections}
                        rightTargetData={rightTransferSelected}
                        onChange={(actionType, rightData, actionItem, sibligItem) => {
                            setLinkValue(
                                linkageType === '4'
                                    ? { ...linkValue, distValues: rightData }
                                    : {
                                          ...linkValue,
                                          distControls: rightData,
                                      },
                            );
                        }}
                    />
                </Col>
            ) : null}
            <Col span={9} className="z-flex-items-center">
                {['7'].includes(linkageType) ? (
                    <div className="z-linkage-remark z-flex-1">
                        <div className="z-margin-bottom-12">
                            {linkRemark4(linkValue, {
                                remmak1: '选项的value传入异步控件：',
                                remmak2: '的请求参数名：',
                            })}
                        </div>
                        {getControl('Input.Group', {
                            style: { width: '100%' },
                            compact: true,
                            children: (
                                <>
                                    {getControl('Input', {
                                        style: { width: '20%' },
                                        defaultValue: 'value',
                                        disabled: true,
                                    })}
                                    {getControl('Input', {
                                        style: { width: '80%' },
                                        defaultValue: asyncParamNameRef.current,
                                        onChange: (value) => {
                                            asyncParamNameRef.current = value;
                                        },
                                    })}
                                </>
                            ),
                        })}
                    </div>
                ) : null}
                {['8', '9'].includes(linkageType) ? (
                    <div className="z-linkage-remark z-flex-1">
                        <div className="z-margin-bottom-12">{selectParamname[linkageType].remark}</div>
                        {getControl('Select', {
                            style: { width: '100%' },
                            defaultValue: selectParamname[linkageType].defaultValue,
                            selectList: selectParamname[linkageType].selectList,
                            onChange: selectParamname[linkageType].onChange,
                        })}
                    </div>
                ) : null}
                {['9.2', '11.1', '11.2', '11.3', '11.4'].includes(linkageType) ? (
                    <div className="z-linkage-remark z-flex-1">
                        <div className="z-margin-bottom-12">{selectParamname[linkageType].remark}</div>
                        {getControl('Input', {
                            style: { width: '100%' },
                            defaultValue: selectParamname[linkageType].defaultValue,
                            onChange: selectParamname[linkageType].onChange,
                        })}
                    </div>
                ) : null}
                {['10.1', '10.2', '12'].includes(linkageType) ? (
                    <div className="z-linkage-remark z-flex-1">
                        <div className="z-margin-bottom-6 z-margin-top-10">执行表达式的后台接口:</div>
                        {getControl('Input', {
                            addonBefore: 'post',
                            style: { width: '100%' },
                            defaultValue: expressionRef.current.apiUrl,
                            onChange: (value) => {
                                expressionRef.current = { ...expressionRef.current, apiUrl: value };
                            },
                        })}
                        <div className="z-margin-bottom-6 z-margin-top-6">
                            表达式{['10.2'].includes(linkageType) ? ' + 校验失败提示信息' : ''}:
                        </div>
                        {['10.2'].includes(linkageType)
                            ? getControl('Input.Group', {
                                  style: { width: '100%' },
                                  compact: true,
                                  children: (
                                      <>
                                          {getControl('Input', {
                                              style: { width: '50%' },
                                              defaultValue: expressionRef.current.expression,
                                              onChange: (value) => {
                                                  expressionRef.current = {
                                                      ...expressionRef.current,
                                                      expression: value,
                                                  };
                                              },
                                          })}
                                          {getControl('Input', {
                                              style: { width: '50%' },
                                              defaultValue: expressionRef.current.expressionErrorMsg,
                                              onChange: (value) => {
                                                  expressionRef.current = {
                                                      ...expressionRef.current,
                                                      expressionErrorMsg: value,
                                                  };
                                              },
                                          })}
                                      </>
                                  ),
                              })
                            : getControl('Input', {
                                  style: { width: '100%' },
                                  defaultValue: expressionRef.current.expression,
                                  onChange: (value) => {
                                      expressionRef.current = { ...expressionRef.current, expression: value };
                                  },
                              })}
                    </div>
                ) : null}
                {['13.1', '13.2'].includes(linkageType) ? (
                    <div className="z-linkage-remark z-flex-1">
                        <div className="z-margin-bottom-6 z-margin-top-10">正则匹配的值的格式：</div>
                        {getControl('Input', {
                            disabled: true,
                            style: { width: '100%' },
                            value: combinationKeyRef.current,
                            // onChange: (value) => {
                            //     combinationKeyRef.current = value;
                            // },
                        })}
                        <div className="z-margin-bottom-6 z-margin-top-6">正则表达式 + 联动效果:：</div>
                        {getControl('Input.Group', {
                            style: { width: '100%' },
                            compact: true,
                            children: (
                                <>
                                    {getControl('Input', {
                                        style: { width: '70%' },
                                        defaultValue: regularExpressionRef.current,
                                        onChange(value) {
                                            regularExpressionRef.current = value;
                                        },
                                    })}
                                    {getControl('Select', {
                                        style: { width: '30%' },
                                        selectList: ['13.2'].includes(linkageType)
                                            ? controlEffectList
                                            : groupEffectList,
                                        defaultValue:
                                            effectRef.current ||
                                            (['13.2'].includes(linkageType) ? 'controlHidden' : 'groupHidden'),
                                        onChange: (value) => {
                                            effectRef.current = value;
                                        },
                                    })}
                                </>
                            ),
                        })}
                    </div>
                ) : null}
            </Col>
            <Col span={12}>
                <div className="z-linkage-line z-linkage-remark z-flex-items-center">{linkRemark}</div>
            </Col>
            <Col span={3} className="z-flex-items-end">
                <div className="z-display-inline-block">
                    <Button
                        icon="check"
                        block
                        type="primary"
                        onClick={(e) => {
                            let error = false;
                            if (['13.1', '13.2'].includes(linkageType)) {
                                if (!combinationKeyRef.current) {
                                    message.error('请填写组合key');
                                    return;
                                }
                                if (!regularExpressionRef.current) {
                                    message.error('请填写正则表达式');
                                    return;
                                }
                                linkValue.srcControls = [
                                    {
                                        fieldKey: combinationKeyRef.current,
                                        label: linkValue.srcControls.map((item) => item.label).join('&&'),
                                    },
                                ];
                            } else if (['11.1', '11.2', '11.3', '11.4', '13.1', '13.2'].includes(linkageType)) {
                                if (!linkValue.srcControls.length || !linkValue.distControls.length) {
                                    error = true;
                                }
                                if (!regularExpressionRef.current) {
                                    message.error('请填写正则表达式');
                                    return;
                                }
                            } else if (['10.1', '10.2', '12'].includes(linkageType)) {
                                if (!linkValue.srcControls.length) {
                                    error = true;
                                }
                            } else if (['6', '7', '8', '9', '9.2'].includes(linkageType)) {
                                if (!linkValue.srcControls.length || !linkValue.distControls.length) {
                                    error = true;
                                }
                            } else if (['4'].includes(linkageType)) {
                                if (!linkValue.srcValues.length || !linkValue.distValues.length) {
                                    error = true;
                                }
                            } else if (!linkValue.srcValues.length || !linkValue.distControls.length) {
                                error = true;
                            }
                            if (error) {
                                message.error('请配置完整');
                                return;
                            }
                            setLinkValue({
                                ...linkValue,
                                srcValues: [],
                                srcControls: [],
                                distValues: [],
                                distControls: [],
                            });
                            setLeftTransferSelected([]);
                            setRightTransferSelected([]);
                            onOk &&
                                onOk(linkValue, {
                                    asyncParamName: asyncParamNameRef.current,
                                    regionName: regionNameRef.current,
                                    ocrParamName: ocrFieldNameRef.current,
                                    expressionContent: expressionRef.current,
                                    regularExpression: regularExpressionRef.current,
                                    combinationKey: combinationKeyRef.current,
                                    effect:
                                        effectRef.current ||
                                        (['13.2'].includes(linkageType) ? 'controlHidden' : 'groupHidden'),
                                });
                        }}>
                        保存到表单
                    </Button>
                    <Button type="default" block onClick={onBack} className="z-margin-top-15" icon="close">
                        关闭窗口
                    </Button>
                </div>
            </Col>
        </Row>
    );
}
ValueLinkControl.propTypes = propTypes;
export default React.memo(ValueLinkControl);
