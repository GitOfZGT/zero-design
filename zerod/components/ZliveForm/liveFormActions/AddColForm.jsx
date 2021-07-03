/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef, useContext } from 'react';
import ZpageWrapper from '../../ZpageWrapper';
import Zform from '../../Zform';
import { getControl, getOptions } from '../../Zform/controls';
import { GenNonDuplicateID, dataType, parseJsonToObject } from '../../zTool';

import ZauxiliaryInput from '../liveFormControls/ZauxiliaryInput';
import { getFormItem, changeLinkageField, labelShowTags } from '../common';
import { Icon, Tooltip, Modal, message } from 'antd';
import { formLink } from './addColFormlink';
import fieldTypeProperties from './fieldTypeProperties';
import { getSwitchOpt, getKeyControl } from './fieldTypeProperties/common';
import { wechat } from './fieldTypeProperties/5_datePicker';
import ZerodMainContext from '../../ZerodMainContext';
import ZerodLayerContext from '../../ZerodLayerContext';
//所有控件打入config的属性
const commonConfigKeys = ['hiddenRendering', 'allowClear', 'labelWidth', 'wechatRequired'];
//所有控件都有的属性
const commonKeys = [
    'groupName',
    'fieldType',
    'label',
    'labelShowTag',
    'fieldKey',
    'required',
    'initialValue',
    'regularExpression',
    'errorMsg',
    'remark',
    'disabled',
    'hidden',
    ...commonConfigKeys,
];

// function LabelInput(props) {
//     return getControl('Input.Group', {
//         style: { display: 'flex' },
//         compact: true,
//         children: (
//             <>
//                 {getControl('InputNumber', {
//                     defaultValue: undefined,
//                     style: { flex: 1 },
//                     min: 0,
//                     ...props,
//                 })}
//                 {getControl('Input', {
//                     defaultValue: 'px',
//                     disabled: true,
//                     style: { width: '50px', textAlign: 'center' },
//                 })}
//             </>
//         ),
//     });
// }

//控件类型在微信小程序组件库wux-weapp-ex支持情况
const controlWechat = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19];

//控件类型列表
// export const controlList = fieldTypes.reduce((total, key) => {
//     return [...total, ...fieldTypeProperties[key].getFieldTypeCof({ commonKeys, commonConfigKeys })];
// }, []);
function getFormItems({
    formViewerRef,
    type,
    formItem,
    fieldType,
    keyDisabledRef,
    isUpdateRef,
    setState,
    itemsRef,
    groupId,
    controlList,
}) {
    const otherItems = controlList
        .find((item) => item.value === fieldType)
        .getFieldPropertiesFormItems({
            formItemsRef: itemsRef,
            componentList: controlList,
            formItemsLinkAction: formLink,
        });

    return [
        {
            key: 'groupName',
            label: '组名',
            show: true,
            render(form, changeFormItems) {
                return getControl('Input', { disabled: true });
            },
        },
        {
            key: 'fieldType',
            label: '控件类型',
            show: true,
            labelFocused: true,
            render() {
                return (form, changeFormItems) =>
                    getControl('Select', {
                        selectList: controlList.map((item) => {
                            const plat = [];
                            if (controlWechat.includes(item.value)) {
                                plat.push(wechat);
                            }
                            return { label: item.label, value: item.value, plat };
                        }),
                        onChange(val) {
                            setState({
                                items: getFormItems({
                                    formViewerRef,
                                    type,
                                    formItem,
                                    fieldType: val,
                                    keyDisabledRef,
                                    isUpdateRef,
                                    setState,
                                    itemsRef,
                                    groupId,
                                    controlList,
                                }),
                                values: {
                                    ...getCurrentValues({
                                        groupId,
                                        formViewerRef,
                                        formItem,
                                        controlList,
                                        currentFormValues: form.getFieldsValue(),
                                    }),
                                    fieldType: val,
                                },
                            });
                            // formLink({
                            //     changeFormItems,
                            //     formItems: itemsRef.current,
                            //     values: { fieldType: val },
                            //     form,
                            //     controlList,
                            //     excludeKeys: [],
                            // });
                        },
                        optLabelRender(item) {
                            return (
                                <div className="z-flex-space-between">
                                    <div>{item.label}</div>
                                    <div>
                                        {item.plat.map((p) => (
                                            <Tooltip title={p.title} key={p.key}>
                                                <Icon
                                                    className="z-margin-left-5"
                                                    key={p.key}
                                                    type={p.key}
                                                    style={{ color: '#39b54a' }}
                                                />
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            );
                        },
                    });
            },
            options: getOptions({ required: true, initialValue: 1 }),
        },
        {
            key: 'label',
            label: '控件标题',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('Input');
            },
            options: getOptions({ required: false, initialValue: '' }),
        },
        {
            key: 'labelShowTag',
            show: false,
            label: '控件标题显示样式',
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('Select', {
                    selectList: labelShowTags
                        .map((item) => ({ label: item.label.replace('组名', 'Label'), value: item.value }))
                        .concat({ label: '不显示Label(包括必填标识)', value: 3 }),
                });
            },
            options: getOptions({ required: false, initialValue: 1 }),
        },
        {
            key: 'labelWidth',
            show: false,
            label: '控件标题宽度(优先于组配置的LabelWidth)',
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('Input', {
                    allowClear: true,
                });
            },
            options: getOptions({
                required: false,
                rules: [
                    {
                        validator(rule, value, callback) {
                            if (value && !/^\d+\w*$/.test(value)) {
                                return callback('以数字开头带单位的宽度值');
                            }
                            callback();
                        },
                    },
                ],
            }),
        },
        {
            key: 'fieldKey',
            label: '控件唯一标识 (key)',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getKeyControl(keyDisabledRef, isUpdateRef, changeFormItems, form);
            },
            options: getOptions({
                required: true,
                initialValue: '',
                rules: [
                    {
                        validator: (rule, value, callback) => {
                            if (/Label$/.test(value)) {
                                return callback(new Error('禁止以Label结尾的key'));
                            }
                            if (/&&/.test(value)) {
                                return callback(new Error('禁止存在&&的key'));
                            }
                            const groups = formViewerRef.current.getFormGroups();
                            const hasKey = groups.some((g) =>
                                g.groupRef.current.getFormItems().some((item) => item.key === value),
                            );
                            if (hasKey && ((formItem && formItem.fieldKey !== value) || type === 'add')) {
                                return callback(new Error('key已存在，请填写其他的key'));
                            }
                            callback();
                        },
                    },
                ],
            }),
        },
        {
            key: 'required',
            show: false,
            label: '必填',
            labelFocused: true,
            ...getSwitchOpt(),
        },
        {
            key: 'wechatRequired',
            show: false,
            label: '小程序必填',
            labelFocused: true,
            ...getSwitchOpt(),
        },
        {
            key: 'disabled',
            show: false,
            label: '默认禁用',
            labelFocused: true,
            ...getSwitchOpt({ initialValue: false }),
        },
        {
            key: 'hidden',
            show: false,
            label: '默认隐藏',
            labelFocused: true,
            ...getSwitchOpt({ initialValue: false }),
        },
        {
            key: 'hiddenRendering',
            show: false,
            label: '默认隐藏时是否强制渲染,并且算入表单的提取值',
            labelFocused: true,
            ...getSwitchOpt({ initialValue: false }),
        },
        ...otherItems,
        {
            key: 'initialValue',
            labelFocused: true,
            show: false,
            label: '控件初始值',
            render(form, changeFormItems) {
                return [12].includes(form.getFieldValue('fieldType'))
                    ? getControl('ColorPicker', { valueType: form.getFieldValue('colorValueType') })
                    : getControl('Input');
            },
        },
        {
            key: 'regularExpression',
            label: '正则表达式',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return <ZauxiliaryInput />;
            },
            options: {
                rules: [
                    {
                        validator(rule, value, callback) {
                            let hasError = false;
                            try {
                                new RegExp(value);
                            } catch (e) {
                                hasError = true;
                            }
                            if (hasError) {
                                return callback('无效正则表达式');
                            }
                            callback();
                        },
                    },
                ],
            },
        },
        {
            key: 'errorMsg',
            label: '错误提示',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('Input');
            },
        },
        {
            key: 'remark',
            label: '备注',
            show: false,
            labelFocused: true,
            render(form, changeFormItems) {
                return getControl('TextArea', {
                    autosize: { minRows: 3 },
                });
            },
        },
    ];
}
//控件属性
function useFormItems({ formViewerRef, type, formItem, groupId, controlList }) {
    const itemsRef = useRef([]);
    const isUpdateRef = useRef(type === 'update');
    const keyDisabledRef = useRef(isUpdateRef.current);

    const fieldType = formItem ? formItem.fieldType : 1;
    const [state, setState] = useState({ items: [], values: {} });
    itemsRef.current = state.items;
    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            items: getFormItems({
                formViewerRef,
                type,
                formItem,
                fieldType,
                keyDisabledRef,
                isUpdateRef,
                setState,
                itemsRef,
                groupId,
                controlList,
            }),
            values: getCurrentValues({ groupId, formViewerRef, formItem, controlList }),
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, formItem, formViewerRef, fieldType, groupId]);
    return state;
}

function getCurrentValues({ groupId, formViewerRef, formItem, controlList, currentFormValues }) {
    const group = { id: groupId };
    const groups = formViewerRef.current.getFormGroups();
    const i = groups.findIndex((g) => g.id == groupId);
    group.name = groups[i].name;
    //新增/修改都需groupName
    let data = { groupName: group.name };
    //修改控件情况
    if (formItem) {
        const currentItem = controlList.find((item) => item.value === formItem['fieldType']);
        if (currentItem) {
            Object.keys(formItem).forEach((key) => {
                if (currentItem.showKeys.includes(key)) {
                    data[key] = formItem[key];
                }
            });
        }
        const config = parseJsonToObject(formItem['config']);
        //wechatRequired在 required之后添加的，之前没有wechatRequired，取required
        config.wechatRequired =
            typeof config.wechatRequired !== 'undefined' ? config.wechatRequired : formItem['required'];
        const objToArr = (keyName) => {
            if (dataType.isObject(config[keyName])) {
                const okeys = Object.keys(config[keyName]);
                if (okeys.length) {
                    config[keyName] = okeys.map((key) => ({
                        label: key,
                        value: config[keyName][key],
                    }));
                }
            } else {
                config[keyName] = undefined;
            }
        };
        const extractConfig = (config, keys, targetKey) => {
            const url = {};
            Object.keys(config).forEach((key) => {
                if (keys.includes(key)) {
                    if (config[key]) {
                        url[key] = config[key];
                        delete config[key];
                    }
                }
            });
            config[targetKey] = Object.keys(url).length ? url : undefined;
        };
        if ([1, 2].includes(formItem['fieldType'])) {
            objToArr('getFrequentWordQuery');
            objToArr('frequentWordFieldNames');
        } else if ([11, 16].includes(formItem['fieldType'])) {
            //当是上传控件
            extractConfig(config, ['urlMethod', 'url', 'urlParamName', 'requestMode', 'requestConfig'], 'url');
            extractConfig(config, ['ocrUrlMethod', 'ocrUrl', 'requestConfig'], 'ocrUrl');
            objToArr('uploaderResponse');
            data.ocrEnabled = data.ocrEnabled === undefined ? 0 : Number(data.ocrEnabled);
        } else if ([3, 6, 7, 8, 9, 17].includes(formItem['fieldType'])) {
            config.selectionsType = config.selectionsType === undefined ? 1 : Number(config.selectionsType);
            objToArr('selectionsQuery');
            objToArr('selectListFieldNames');
        } else if ([23].includes(formItem['fieldType'])) {
            objToArr('pdfListFieldNames');
            objToArr('privateFileFieldNames');
        } else if ([18].includes(formItem['fieldType'])) {
            objToArr('getFormDataParams');
        } else if ([15].includes(formItem['fieldType'])) {
            extractConfig(config, ['getSignUrlMethod', 'getSignUrl', 'requestConfig'], 'getSignUrl');
            extractConfig(config, ['setSignUrlMethod', 'setSignUrl', 'requestConfig'], 'setSignUrl');
            if (!config['userIdOriginKey'] && /Sign$/.test(formItem['fieldKey'])) {
                config['userIdOriginKey'] = formItem['fieldKey'].replace(/Sign$/g, '');
            }
        }
        if (currentItem.configKeys && config) {
            Object.keys(config).forEach((key) => {
                if (!currentItem.configKeys.includes(key)) {
                    delete config[key];
                }
            });
        }
        data.disabled = data.disabled === undefined ? 0 : Number(data.disabled);
        data = { ...data, ...config };
        Object.keys(data).forEach((key) => {
            if (
                (dataType.isObject(data[key]) && !Object.keys(data[key]).length) ||
                (dataType.isArray(data[key]) && !data[key].length)
            ) {
                data[key] = undefined;
            }
        });
    } else {
        const _currentFormValues = currentFormValues || {};
        const hashkey = GenNonDuplicateID(5);
        data.label = _currentFormValues.label || `名称_${hashkey}`;
        data.fieldKey = _currentFormValues.fieldKey || `key_${hashkey}`;
    }
    return data;
}

function commitForm({ formItem, formViewerRef, groupId, values, linkageRef, controlList, getExtendComponents }) {
    const group = formViewerRef.current.getFormGroups().find((g) => g.id === groupId);
    const fieldTypeItem = controlList.find((item) => item.value === values['fieldType']);
    if (values['fieldType'] === 15 && !values['fieldKey'].match(/Sign$/g)) {
        values['fieldKey'] = `${values['fieldKey']}Sign`;
    }
    const config = {};
    if (Array.isArray(fieldTypeItem.configKeys)) {
        fieldTypeItem.configKeys.forEach((key) => {
            config[key] = values[key];
            delete values[key];
        });
    }
    values.config = config;
    values.fieldTypeName = fieldTypeItem.label;
    const arrToObj = (keyName) => {
        const newSelectionsQuery = {};
        Array.isArray(values.config[keyName]) &&
            values.config[keyName].forEach((item) => {
                if (item.label && item.value) {
                    newSelectionsQuery[item.label] = item.value;
                }
            });
        values.config[keyName] = newSelectionsQuery;
    };
    if ([11, 15, 16].includes(values['fieldType'])) {
        let newConf = values.config;
        Object.keys(values.config).forEach((key) => {
            const val = values.config[key];
            if (['url', 'ocrUrl', 'getSignUrl', 'setSignUrl'].includes(key)) {
                newConf = { ...newConf, ...val };
            }
        });
        values.config = newConf;
    }
    if ([1, 2].includes(values['fieldType'])) {
        arrToObj('getFrequentWordQuery');
        arrToObj('frequentWordFieldNames');
    } else if ([11, 16].includes(values['fieldType'])) {
        arrToObj('uploaderResponse');
    } else if ([3, 6, 7, 8, 9, 17].includes(values['fieldType'])) {
        arrToObj('selectionsQuery');
        arrToObj('selectListFieldNames');
    } else if ([23].includes(values['fieldType'])) {
        arrToObj('pdfListFieldNames');
        arrToObj('privateFileFieldNames');
    } else if ([18].includes(values['fieldType'])) {
        arrToObj('getFormDataParams');
    }
    if (values.config) {
        if (formItem) {
            const prevConfig = parseJsonToObject(formItem.config);
            values.config = { ...(prevConfig || {}), ...values.config };
        }
        Object.keys(values.config).forEach((key) => {
            const _conf = values.config[key];
            if (
                (dataType.isArray(_conf) && !_conf.length) ||
                (dataType.isObject(_conf) && !Object.keys(_conf).length)
            ) {
                delete values.config[key];
            }
        });
        values.config = JSON.stringify(values.config);
    }

    const newItem = getFormItem({
        field: formItem ? { ...formItem, ...values } : values,
        group,
        noAsync: true,
        linkages: null,
        groupConfig: group.config,
        getExtendComponents,
    });

    const currentItems = group.groupRef.current.getFormItems();
    let newItems = [...currentItems];
    const i = currentItems.findIndex(
        (item) => item['fieldKey'] === (formItem ? formItem['fieldKey'] : values['fieldKey']),
    );
    const successMsg = `${formItem ? '修改' : '添加'}控件成功`;
    if (i > -1) {
        if (
            formItem &&
            linkageRef.current &&
            (formItem['fieldKey'] !== values['fieldKey'] ||
                formItem['fieldType'] !== values['fieldType'] ||
                formItem['label'] !== values['label'])
        ) {
            changeLinkageField(linkageRef, formItem, values);
        }
        if (formItem['fieldKey'] === values['fieldKey']) {
            group.groupRef.current.getForm().form.setFieldsValue({
                [formItem['fieldKey']]: null,
            });
        }
        newItems.splice(i, 1, newItem);
    } else {
        newItems = [...newItems, newItem];
    }
    group.groupRef.current.setFormItems(newItems);
    message.success(successMsg);
}
export default React.memo(
    React.forwardRef(({ groupId, formItem, formViewerRef, linkageRef, type, getExtendComponents }, ref) => {
        const extendComs = (typeof getExtendComponents === 'function' ? getExtendComponents() : null) || [];
        // const extentFieldTypeProperties = extendComs.reduce((tol, curr) => {
        //     const fieldkeys = curr.getFieldPropertiesFormItems({}).map((item) => item.key);
        //     return {
        //         ...tol,
        //         [curr.value]: {
        //             getFieldTypeCof({ commonKeys, commonConfigKeys }) {
        //                 return {
        //                     label: curr.label,
        //                     value: curr.value,
        //                     showKeys: [...commonKeys, ...fieldkeys],
        //                     configKeys: [...commonConfigKeys, ...fieldkeys],
        //                 };
        //             },
        //             getPropertiesConf({ itemsRef, controlList }) {
        //                 return curr.getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList });
        //             },
        //         },
        //     };
        // }, {});
        // const fieldTypes = Object.keys(fieldTypeProperties);
        // const _fieldTypeProperties = { ...fieldTypeProperties, ...extentFieldTypeProperties };
        // const controlList = [...fieldTypes, ...extendComs.map((item) => item.value)].reduce(
        //     (total, key) => [
        //         ...total,
        //         ..._fieldTypeProperties[key].getFieldTypeCof({
        //             commonKeys,
        //             commonConfigKeys,
        //         }),
        //     ],
        //     [],
        // );
        const controlList = [...fieldTypeProperties, ...extendComs].map((curr) => {
            const fieldkeys = curr.getFieldPropertiesFormItems({}).map((item) => item.key);
            return {
                ...curr,
                showKeys: [...commonKeys, ...fieldkeys],
                configKeys: [...commonConfigKeys, ...fieldkeys],
            };
        });
        const { items, values } = useFormItems({
            formViewerRef,
            type,
            formItem,
            groupId,
            controlList,
        });
        const mainContext = useContext(ZerodMainContext.context);
        const fullLayerContext = useContext(ZerodLayerContext.context);
        const showRightModal = fullLayerContext.showLayerRightModal || mainContext.showRightModal;

        return (
            <ZpageWrapper pageHeader={{ show: false }}>
                <div className="z-panel">
                    <div className="z-panel-body">
                        <Zform
                            values={values}
                            labelLayout="inline"
                            items={items}
                            defaultSpan={24}
                            afterItemsRendered={(form, mathods) => {
                                if (items.length) {
                                    formLink({
                                        changeFormItems: mathods.changeFormItems,
                                        formItems: items,
                                        values: mathods.getFieldsValue(),
                                        form,
                                        controlList,
                                        excludeKeys: [],
                                    });
                                }
                            }}
                            submitBtnName="确定"
                            confirm={{ show: false }}
                            onSubmit={(values) => {
                                commitForm({
                                    formItem,
                                    formViewerRef,
                                    groupId,
                                    values,
                                    linkageRef,
                                    controlList,
                                    getExtendComponents,
                                });
                                showRightModal(false);
                            }}></Zform>
                    </div>
                </div>
            </ZpageWrapper>
        );
    }),
);
