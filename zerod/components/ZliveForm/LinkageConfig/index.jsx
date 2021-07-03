import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import ReactDom from 'react-dom';
import { Tag, Modal, Icon, Button, message } from 'antd';
import ZerodMainContext from '../../ZerodMainContext';
import Ztabs from '../../Ztabs';
import { ZcascaderItemGroup } from '../../Zcascader';
import ValueLinkControl from './ValueLinkControl';
import ValueLinkConfigured from './ValueLinkConfigured';
import IDLinkagesConfigured from './IDLinkagesConfigured';
import LinkagesList from './LinkagesList';
const linkageTypes = [
    {
        tab: '单选/多选控制控件禁用',
        key: '1',
        active: true,
    },
    {
        tab: '单选/多选控制控件启用',
        key: '1.2',
    },
    {
        tab: '单选/多选控制控件必填',
        key: '2',
    },
    {
        tab: '单选/多选控制控件非必填',
        key: '3',
    },
    {
        tab: '单选/多选控制选项',
        key: '4',
    },
    {
        tab: '单选/多选控制组隐藏',
        key: '5.1',
    },
    {
        tab: '单选/多选控制控件隐藏',
        key: '5.2',
    },
    {
        tab: '单选/多选控制组显示',
        key: '5.3',
    },
    {
        tab: '单选/多选控制控件显示',
        key: '5.4',
    },
    {
        tab: '身份证取出生年月日',
        key: '6',
    },
    {
        tab: '单选联动其他控件异步选项',
        key: '7',
    },
    {
        tab: '地图选点取行政区划',
        key: '8',
    },
    {
        tab: '证件照OCR识别取值',
        key: '9',
    },
    {
        tab: '任意图片OCR识别取值',
        key: '9.2',
    },
    {
        tab: '运算表达式',
        key: '10.1',
    },
    {
        tab: '校验表达式',
        key: '10.2',
    },
    {
        tab: '正则控制组隐藏',
        key: '11.1',
    },
    {
        tab: '正则控制控件隐藏',
        key: '11.2',
    },
    {
        tab: '正则控制组显示',
        key: '11.3',
    },
    {
        tab: '正则控制控件显示',
        key: '11.4',
    },
    {
        tab: '小程序文本框扫码异步取值',
        key: '12',
    },
    {
        tab: '多控件值联合正则控制组',
        key: '13.1',
    },
    {
        tab: '多控件值联合正则控制控件',
        key: '13.2',
    },
];
const itemKeys = {
    name: 'tab',
    id: 'key',
};
// const propTypes = {};
const defaultProps = {
    //默认的linkages
    defaultValue: [],
};

function LinkageConfig(props) {
    const { getInsertLocation, showRightModal, newFormData, defaultValue, onChange, getExtendComponents } = props;
    const wrapperRef = useRef(null);
    const [tabPanes, setTabPanes] = useState([
        {
            tab: '联动列表',
            key: '1',
            content: null,
        },
        {
            tab: '联动配置',
            key: '2',
            content: null,
        },
    ]);
    const [tabKey, setTabKey] = useState('1');
    const [linkageTypesState, setLinkageTypes] = useState(linkageTypes);
    const curentLinkTypeRef = useRef(linkageTypesState.find((item) => item.active));
    const objRef = useRef(null);
    const defaultLinkagesRef = useRef(defaultValue);
    // console.log("defaultValue", defaultValue);
    const [insetLocaltion, setInsetLocaltion] = useState();
    useEffect(() => {
        // 首先得获取wrapperRef.current元素所在得位置
        const insetLocaltion = getInsertLocation(wrapperRef.current);
        let parEl = wrapperRef.current;
        while (parEl && !parEl.dataset.zgt_modal) {
            parEl = parEl.parentElement;
        }
        if (parEl) {
            objRef.current = parEl.querySelector('#ZpageHeaderBox');
        }
        setInsetLocaltion(insetLocaltion);
    }, [getInsertLocation]);
    const onItemClick = useCallback(
        (e, item, i, props) => {
            setLinkageTypes(
                linkageTypesState.map((l) => {
                    const active = l.key === item.data.key;
                    if (active) {
                        curentLinkTypeRef.current = item.data;
                    }
                    return { ...l, active };
                }),
            );
        },
        [linkageTypesState],
    );
    //当前选择的控件
    const [currentControl, setCurrentControl] = useState({});
    //取ValueLinkConfigured提供的属性
    const configuredRef = useRef(null);
    useEffect(() => {
        if (
            Array.isArray(defaultLinkagesRef.current) &&
            ['6', '7', '8', '9', '9.2', '10.1', '10.2', '11.1', '11.2', '11.3', '11.4', '12', '13.1', '13.2'].includes(
                curentLinkTypeRef.current.key,
            )
        ) {
            const IDconfigured = defaultLinkagesRef.current.filter(
                (age) => age.linkageType === curentLinkTypeRef.current.key,
            );
            configuredRef.current && configuredRef.current.setConfigured(IDconfigured);
        } else {
            configuredRef.current && configuredRef.current.setConfigured([]);
        }
    }, [curentLinkTypeRef.current.key]);

    const onRemove = (currentConf, srcIndex, distIndex) => {
        Modal.confirm({
            title: '是否确认移除这条配置?',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                const currentConfigured = configuredRef.current.getCurrentConfigured();
                const currentLinkageType = curentLinkTypeRef.current.key;
                let ageIndex = -1;
                const getageIndex = (currentKey) =>
                    defaultLinkagesRef.current.findIndex(
                        (item) => item.linkageType === currentLinkageType && item.src.fieldKey === currentKey,
                    );
                if (
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
                    ].includes(currentLinkageType)
                ) {
                    ageIndex = getageIndex(currentConf.src.fieldKey);
                } else {
                    ageIndex = getageIndex(currentConf.srcKey);
                }
                if (ageIndex > -1) {
                    if (
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
                        ].includes(currentLinkageType)
                    ) {
                        currentConf.dist.splice(distIndex, 1);
                        currentConfigured[srcIndex].dist = currentConf.dist;
                        defaultLinkagesRef.current[ageIndex].dist = currentConf.dist;
                        if (!currentConf.dist.length) {
                            currentConfigured.splice(srcIndex, 1);
                            defaultLinkagesRef.current.splice(ageIndex, 1);
                        }
                    } else {
                        currentConfigured.splice(srcIndex, 1);
                        defaultLinkagesRef.current[ageIndex].dist = [...currentConfigured];
                        if (!currentConfigured.length) {
                            defaultLinkagesRef.current.splice(ageIndex, 1);
                        }
                    }
                    const newConfigured = [...currentConfigured];
                    configuredRef.current.setConfigured(newConfigured);
                    defaultLinkagesRef.current = [...defaultLinkagesRef.current];
                    onChange && onChange(defaultLinkagesRef.current);
                }
            },
        });
    };

    return (
        <section ref={wrapperRef} className="z-age-config z-padding-20">
            {objRef.current
                ? ReactDom.createPortal(
                      <div className="z-age-tab">
                          <Ztabs
                              tabPanes={tabPanes}
                              activeKey={tabKey}
                              onChange={(key) => {
                                  setTabKey(key);
                              }}
                          />
                      </div>,
                      objRef.current,
                  )
                : null}
            {tabKey === '1' ? (
                <section className="z-panel">
                    <LinkagesList
                        linkages={defaultLinkagesRef.current}
                        // onLinkagesChange={(list) => {
                        //     defaultLinkagesRef.current = list;
                        // }}
                    />
                </section>
            ) : null}
            {tabKey === '2' ? (
                <div>
                    <div className="z-panel">
                        <ZcascaderItemGroup
                            label={{ icon: <Icon type="tags"></Icon>, text: '联动类型' }}
                            itemData={linkageTypesState}
                            itemKeys={itemKeys}
                            onItemClick={onItemClick}
                            autoExpanded={true}
                        />
                    </div>
                    <ValueLinkControl
                        getExtendComponents={getExtendComponents}
                        newFormData={newFormData}
                        linkageType={curentLinkTypeRef.current.key}
                        onSrcSelected={(control) => {
                            let existLinkage = null;
                            if (Array.isArray(defaultLinkagesRef.current)) {
                                existLinkage = defaultLinkagesRef.current.find(
                                    (age) =>
                                        age.linkageType === curentLinkTypeRef.current.key &&
                                        age.src.fieldKey === control.fieldKey,
                                );
                            }
                            configuredRef.current.setConfigured(existLinkage ? [...existLinkage.dist] : []);
                            setCurrentControl(control);
                        }}
                        onOk={(links, other) => {
                            // if(curentLinkTypeRef.current.key === "6"){

                            // }

                            //转成linkage
                            const age = {
                                linkageType: curentLinkTypeRef.current.key,
                                name: curentLinkTypeRef.current.tab,
                                src: null,
                                dist: null,
                            };
                            if (links.srcControl) {
                                age.src = {
                                    fieldKey: links.srcControl.fieldKey,
                                    label: links.srcControl.label,
                                    fieldType: links.srcControl.fieldType,
                                };
                            }
                            let linkages = [];
                            if (['1', '1.2', '2', '3', '5.2', '5.4'].includes(curentLinkTypeRef.current.key)) {
                                age.dist = links.srcValues.map((val) => {
                                    const fields = links.distControls.map((d) => ({
                                        fieldKey: d.fieldKey,
                                        label: d.label,
                                        fieldType: d.fieldType,
                                    }));
                                    return {
                                        srcKey: age.src.fieldKey,
                                        srcValue: val.value,
                                        valueLabel: val.label,
                                        fields,
                                    };
                                });
                            } else if (['4'].includes(curentLinkTypeRef.current.key)) {
                                age.dist = links.srcValues.map((val) => {
                                    const fields = [
                                        {
                                            fieldKey: links.distControl.fieldKey,
                                            label: links.distControl.label,
                                            fieldType: links.distControl.fieldType,
                                            options: links.distValues.map((dv) => ({
                                                label: dv.label,
                                                value: dv.value,
                                            })),
                                        },
                                    ];
                                    return {
                                        srcKey: age.src.fieldKey,
                                        srcValue: val.value,
                                        valueLabel: val.label,
                                        fields,
                                    };
                                });
                            } else if (['5.1', '5.3'].includes(curentLinkTypeRef.current.key)) {
                                age.dist = links.srcValues.map((val) => {
                                    const fields = links.distControls.map((d) => ({
                                        groupId: d.id,
                                        groupName: d.label,
                                        label: d.label,
                                    }));
                                    return {
                                        srcKey: age.src.fieldKey,
                                        srcValue: val.value,
                                        valueLabel: val.label,
                                        fields,
                                    };
                                });
                            } else if (
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
                                ].includes(curentLinkTypeRef.current.key)
                            ) {
                                const dis = {};
                                if (['7'].includes(curentLinkTypeRef.current.key) && other.asyncParamName) {
                                    dis.asyncParamName = other.asyncParamName;
                                } else if (['8'].includes(curentLinkTypeRef.current.key) && other.regionName) {
                                    dis.regionName = other.regionName;
                                } else if (['9', '9.2'].includes(curentLinkTypeRef.current.key)) {
                                    dis.ocrParamName = other.ocrParamName;
                                } else if (['10.1', '10.2', '12'].includes(curentLinkTypeRef.current.key)) {
                                    dis.expressionContent = other.expressionContent;
                                } else if (
                                    ['11.1', '11.2', '11.3', '11.4', '13.1', '13.2'].includes(
                                        curentLinkTypeRef.current.key,
                                    )
                                ) {
                                    dis.regularExpression = other.regularExpression;
                                    if (['13.1', '13.2'].includes(curentLinkTypeRef.current.key)) {
                                        dis.combinationKey = other.combinationKey;
                                        dis.effect = other.effect;
                                    }
                                }

                                linkages = links.srcControls.map((l) => {
                                    const fields = links.distControls.map((d) =>
                                        ['13.1', '11.1', '11.3'].includes(curentLinkTypeRef.current.key)
                                            ? { label: d.label, groupId: d.id, groupName: d.label }
                                            : {
                                                  fieldKey: d.fieldKey,
                                                  fieldType: d.fieldType,
                                                  label: d.label,
                                              },
                                    );

                                    dis.fields = fields;
                                    return {
                                        ...age,
                                        src: {
                                            fieldKey: l.fieldKey,
                                            label: l.label,
                                            fieldType: l.fieldType,
                                        },
                                        dist: [dis],
                                    };
                                });
                            }
                            console.log(age.dist, curentLinkTypeRef.current.key, 'age.dist');
                            //查找配置的选项中是否存在，存在就替换，不存在就追加
                            if (Array.isArray(age.dist) && age.dist.length) {
                                const currentConfigured = configuredRef.current.getCurrentConfigured();
                                console.log(age.dist, currentConfigured, 'age.dist');
                                age.dist.forEach((di) => {
                                    const existIndex = currentConfigured.findIndex(
                                        (con) => con.srcValue !== undefined && con.srcValue === di.srcValue,
                                    );
                                    if (existIndex > -1) {
                                        const newFields = [];
                                        currentConfigured[existIndex].fields.forEach((f) => {
                                            const hasFieldindex = di.fields.findIndex(
                                                (df) =>
                                                    (df.fieldKey && df.fieldKey === f.fieldKey) ||
                                                    (df.groupName && df.groupName === f.groupName),
                                            );
                                            if (hasFieldindex > -1) {
                                                newFields.push(di.fields[hasFieldindex]);
                                                di.fields.splice(hasFieldindex, 1);
                                            } else {
                                                newFields.push(f);
                                            }
                                        });
                                        di.fields = [...newFields, ...di.fields];
                                        currentConfigured.splice(existIndex, 1, di);
                                    } else {
                                        currentConfigured.push(di);
                                    }
                                });
                                age.dist = [...currentConfigured];
                                configuredRef.current.setConfigured([...currentConfigured]);
                                //新的linkages
                                let existLinkageIndex = -1;
                                if (Array.isArray(defaultLinkagesRef.current)) {
                                    existLinkageIndex = defaultLinkagesRef.current.findIndex(
                                        (item) =>
                                            age.linkageType === item.linkageType &&
                                            age.src.fieldKey === item.src.fieldKey,
                                    );
                                }
                                if (existLinkageIndex > -1) {
                                    defaultLinkagesRef.current.splice(existLinkageIndex, 1, age);
                                } else {
                                    defaultLinkagesRef.current.push(age);
                                }
                            }
                            if (
                                Array.isArray(linkages) &&
                                linkages.length &&
                                Array.isArray(defaultLinkagesRef.current)
                            ) {
                                // console.log(linkages, defaultLinkagesRef.current, 'defaultLinkagesRef.current');
                                linkages.forEach((age) => {
                                    const hasAgeIndex = defaultLinkagesRef.current.findIndex(
                                        (item) =>
                                            age.linkageType === item.linkageType &&
                                            age.src.fieldKey === item.src.fieldKey,
                                    );
                                    if (hasAgeIndex > -1) {
                                        const hasAge = defaultLinkagesRef.current[hasAgeIndex];
                                        let currageKeysConcat = '';
                                        const currAgeDist = age.dist[0];
                                        currAgeDist.fields.forEach((f) => {
                                            currageKeysConcat += f.fieldKey;
                                        });
                                        currageKeysConcat += `${currAgeDist.asyncParamName}${currAgeDist.regionName}${currAgeDist.ocrParamName}${currAgeDist.expressionContent}${currAgeDist.regularExpression}${currAgeDist.combinationKey}${currAgeDist.effect}`;
                                        const fieldsIndex = hasAge.dist.findIndex((item) => {
                                            let keysConcat = '';
                                            item.fields.forEach((f) => {
                                                keysConcat += f.fieldKey || f.groupName;
                                            });
                                            keysConcat += `${item.asyncParamName}${item.regionName}${item.ocrParamName}${item.expressionContent}${item.regularExpression}${item.combinationKey}${item.effect}`;
                                            return currageKeysConcat === keysConcat;
                                        });
                                        // console.log(currAgeDist, fieldsIndex, [...hasAge.dist]);
                                        if (fieldsIndex > -1) {
                                            hasAge.dist.splice(fieldsIndex, 1, currAgeDist);
                                        } else {
                                            hasAge.dist.push(currAgeDist);
                                        }
                                        age.dist = hasAge.dist;
                                        defaultLinkagesRef.current.splice(hasAgeIndex, 1, age);
                                    } else {
                                        defaultLinkagesRef.current.push(age);
                                    }
                                });
                                const IDconfigured = defaultLinkagesRef.current.filter(
                                    (item) => item.linkageType === curentLinkTypeRef.current.key,
                                );
                                configuredRef.current.setConfigured(IDconfigured);
                            }
                            defaultLinkagesRef.current = [...defaultLinkagesRef.current];
                            onChange && onChange(defaultLinkagesRef.current);
                            console.log('联动配置', age, linkages, defaultLinkagesRef.current);
                        }}
                        onBack={() => {
                            showRightModal({
                                show: false,
                                modal: insetLocaltion,
                            });
                        }}
                    />

                    <div className="z-panel z-margin-top-20">
                        <div className="z-panel-heading">
                            <span>
                                {currentControl.label ? <Tag color="volcano">{currentControl.label}</Tag> : null}
                                已配置的选项
                            </span>
                        </div>
                        <div className="z-panel-body">
                            {[
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
                            ].includes(curentLinkTypeRef.current.key) ? (
                                <IDLinkagesConfigured ref={configuredRef} onRemove={onRemove} />
                            ) : (
                                <ValueLinkConfigured
                                    linkageType={curentLinkTypeRef.current.key}
                                    ref={configuredRef}
                                    onRemove={onRemove}
                                />
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
LinkageConfig.defaultProps = defaultProps;
export default React.memo(ZerodMainContext.setConsumer(LinkageConfig));
