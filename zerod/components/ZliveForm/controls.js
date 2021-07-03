import React, { useEffect, useState } from 'react';
import { doLinkageAction } from './linkageAction';
import { getControl, getOptions, regExps } from '../Zform/controls';
import { dataType, httpAjax, parseJsonToObject, itemsFromTree } from '../zTool';
import ZformUpload from './liveFormControls/ZformUpload';
import ZprosAndCons from './liveFormControls/ZprosAndCons';
import moment from 'moment';
import MapChooseAddress from './liveFormControls/ZmapChooseAddress';
import TreeSelectLoader from './liveFormControls/TreeSelectLoader';
import CascaderLoader from './liveFormControls/CascaderLoader';
import { treeDataAddKey } from './common';
import UsersSelection from './liveFormControls/UsersSelection';
import CurrentUserInfo from './liveFormControls/CurrentUserInfo';
import ZsearchInput from './liveFormControls/ZsearchInput';
import PasswordInput from './liveFormControls/PasswordInput';
import FrequentWordTextarea from './liveFormControls/FrequentWordTextarea';
import MultiRowControl from './liveFormControls/MultiRowControl';
import SignControl from './liveFormControls/SignControl';
import CheckGrouplist from './liveFormControls/CheckGrouplist';
import ZgapFilling from '../ZgapFilling';
import ZpdfViewer from '../ZpdfViewer';
import { dateFormats } from './liveFormActions/fieldTypeProperties/common';
function deleteProto(opt = {}) {
    delete opt.noAsync;
    delete opt.extraValue;
    delete opt.isAsync;
    delete opt.getMultiRowFormData;
}

function getCurrFormValue(currentForm) {
    const values = currentForm ? currentForm.getFieldsValue() : null;
    // console.log('getCurrFormValue', values, currentForm);
    if (Array.isArray(values)) {
        return values.reduce((total, currentItem) => ({ ...(total || {}), ...currentItem }));
    }
    return values || {};
}
function getMultiRowControlCustomProperties(e) {
    const names = ['customOnChange', 'customFormRules', 'customControlRender'];
    return names.reduce((tol, curr) => {
        const propers = dataType.isObject(e[curr]) ? e[curr] : {};
        return dataType.isObject(propers[e.fieldKey]) ? { ...tol, [curr]: propers[e.fieldKey] } : tol;
    }, {});
}
//处理默认的校验规则
export const getOptionsRules = function (e, rules = [], opt = {}) {
    const reg = typeof e.regularExpression === 'string' ? e.regularExpression.replace(/(^\/|\/$)/g, '') : '';
    return getOptions({
        ...opt,
        required: e.required,
        requiredMsg: e.requiredMsg,
        initialValue: e.initialValue,
        rules: [
            {
                validator: (rule, value, callback) => {
                    if (e.required) {
                        if (typeof value === 'string' && /^\s+$/.test(value)) {
                            return callback('不允许只输入空白字符');
                        }
                    }
                    return callback();
                },
            },
        ].concat(
            reg
                ? [
                      {
                          pattern: reg,
                          message: e.errorMsg,
                          type: e.valueType,
                      },
                      ...rules,
                  ]
                : rules,
        ),
    });
};

//
function docustomOnChange(e, opt, ...rest) {
    if (dataType.isObject(e.customOnChange)) {
        const confun = e.customOnChange[e.fieldKey];
        dataType.isFunction(confun) && confun(e, e.imperative, ...rest);
    }
    typeof opt.onChange === 'function' && opt.onChange(...rest);
}

const defaultFieldConfig = {
    selectionsType: 1,
    selectionsUrl: {},
    selectList: [],
    selectionsQuery: {},
    selectListFieldNames: {},
};

function paseFieldConfig(e, needDefault) {
    let config = parseJsonToObject(e.config);
    if (needDefault) {
        config = { ...defaultFieldConfig, ...config };
    }
    return config;
}

function getResponseData(result = {}, dataIndex = 'data') {
    const dotLs = dataIndex.split('.');
    let data = result[dotLs.shift()];
    while (dotLs.length) {
        data = data[dotLs.shift()];
    }
    return data;
}

function selectControl(controlName) {
    return function (e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
        //当isAsync为true,并且selectionsType是异步类型,就强制异步请求
        const isAsync = opt.isAsync;
        const noAsync = opt.noAsync;
        const extraValue = opt.extraValue || {};
        deleteProto(opt);
        const config = paseFieldConfig(e, true);
        let { selectList } = config;
        const {
            selectionsType,
            selectionsFromKey,
            selectionsUrl,
            selectionsQuery,
            selectListFieldNames,
            responseDataIndex,
            tagName,
            ...others
        } = config;
        if (opt.selectList) {
            selectList = opt.selectList;
            delete opt.selectList;
        }
        function getCurrentControl(selectList) {
            return (form, changeItems, item, methods) => {
                if (typeof selectList === 'string' && selectList) {
                    selectList = form.saveFieldOptions[selectList] || [];
                }
                form.saveFieldOptions[e.fieldKey] = selectList;

                const conctrolOpt = {
                    allowClear: !e.required,
                    placeholder: e.placeholder,
                    dropdownMatchSelectWidth: false,
                    ...others,
                    ...opt,
                    selectList,
                    onChange: (...rest) => {
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                    },
                };
                if (controlName !== 'Select') {
                    delete conctrolOpt.dropdownMatchSelectWidth;
                }
                return typeof controlName === 'function'
                    ? controlName(conctrolOpt)
                    : getControl(controlName, conctrolOpt);
            };
        }
        let hasAsync = false;
        if (!isAsync && currentForm) {
            //当前表单中是否存在正在异步的队列
            const currnetFormAllAsync = currentForm.getAsyncQueue();
            if (currnetFormAllAsync && currnetFormAllAsync.length) {
                hasAsync = true;
            }
        }
        //异步类型
        if (+selectionsType === 2 && !hasAsync && !noAsync) {
            if (!isAsync && currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
                return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
            }
            const formValue = getCurrFormValue(currentForm);
            return httpAjax(
                selectionsUrl.selectionsUrlMethod,
                selectionsUrl.selectionsUrl,
                {
                    ...selectionsQuery,
                    ...requestQuery,
                    ...(selectionsUrl.selectionsUrlMethod !== 'get' ? { formValue, extraValue } : {}),
                },
                selectionsUrl.requestConfig,
            )
                .then((re) => {
                    const selectList = treeDataAddKey(
                        getResponseData(re, responseDataIndex) || [],
                        undefined,
                        selectListFieldNames,
                        undefined,
                    );
                    const hasCurrValue = selectList.find((item) => item.value === formValue[e.fieldKey]);
                    if (!hasCurrValue && currentForm) {
                        currentForm.resetFields([e.fieldKey]);
                    }
                    return getCurrentControl(selectList);
                })
                .catch(() => {
                    if (currentForm) {
                        currentForm.saveFieldOptions[e.fieldKey] = [];
                    }
                    return getCurrentControl([]);
                });
        } else if (+selectionsType === 3) {
            return () => getCurrentControl(selectionsFromKey);
        }
        //自定义选项类型
        return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, undefined));
    };
}

const controlsMap = {
    //Input
    1: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) => (
                <PasswordInput
                    {...{
                        placeholder: e.placeholder,
                        ...others,
                        ...opt,
                        maxLength: others.maxLength || 100,
                        onBlur: (...rest) => {
                            (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                ages: linkages,
                                getGroupsFn,
                                seftItem: item,
                                extraValue,
                                getExtendComponents: e.getExtendComponents,
                            });
                        },
                        onChange: (...rest) => {
                            docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        },
                    }}></PasswordInput>
            );
        },
        getOptions(e, rules = []) {
            const regType = e.regType; //regType 来自Zform/controls的regExps
            return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules, {
                validateTrigger: 'onChange',
            });
        },
    },
    //TextArea
    2: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) => (
                <FrequentWordTextarea
                    placeholder={e.placeholder}
                    {...others}
                    {...opt}
                    maxLength={others.maxLength || 100}
                    onBlur={(...rest) => {
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                    }}
                    onChange={(...rest) => {
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                    }}></FrequentWordTextarea>
            );
        },
        getOptions(e, rules = []) {
            const regType = e.regType; //regType 来自Zform/controls的regExps
            return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules, {
                validateTrigger: 'onChange',
            });
        },
    },
    //Select
    3: {
        getControl: selectControl('Select'),
        getOptions(e, rules = []) {
            const field = { ...e };
            const config = paseFieldConfig(e);
            if (['multiple', 'tags'].includes(config.mode)) {
                field.initialValue =
                    typeof field.initialValue === 'string' ? field.initialValue.replace('，', ',').split(',') : [];
                rules.push({
                    validator(rule, value, callback) {
                        if (Array.isArray(value)) {
                            if (typeof config.minSelectLength === 'number' && value.length < config.minSelectLength) {
                                return callback(`至少选择${config.minSelectLength}个`);
                            }
                            if (typeof config.maxSelectLength === 'number' && value.length > config.maxSelectLength) {
                                return callback(`最多选择${config.maxSelectLength}个`);
                            }
                        }
                        return callback();
                    },
                });
            }
            return getOptionsRules(field, rules);
        },
    },

    //InputNumber
    4: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) =>
                getControl('InputNumber', {
                    allowClear: !e.required,
                    placeholder: e.placeholder,
                    ...others,
                    ...opt,
                    onChange: (...rest) => {
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                    },
                });
        },
        getOptions(e, rules) {
            const field = { ...e, valueType: 'number' };
            return getOptionsRules(field, rules);
        },
    },
    //日期/时间控件
    5: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            let showTime = false;
            config.format = config.format ? config.format : '';

            let format = config.format;
            const setShowTime = (format) => {
                if (format.startsWith('YYYY') && (format.includes('HH') || format.includes('h'))) {
                    const tiemFormat = format.split(' ')[1];
                    showTime = {
                        format: tiemFormat.includes(':') ? tiemFormat : `${tiemFormat}:mm`,
                        use12Hours: format.includes('h'),
                    };

                    if (!tiemFormat.includes(':')) {
                        //'HH'格式的时间以 'HH:mm'格式显示，但不可选 分
                        showTime.hideDisabledOptions = true;
                        showTime.disabledMinutes = () => new Array(59).fill(1).map((k, i) => i + 1);
                        showTime.defaultValue = moment('00:00', 'HH:mm');
                    }
                }
            };
            if (format === 'YYYY-MM-DD HH') {
                format = `${format}:mm`;
            }
            if (config.format.includes(' - ')) {
                format = config.format.split(' - ')[0];
                // console.log(format)
                setShowTime(format);
            } else {
                setShowTime(config.format);
            }
            // let defaultOpt = {};
            let timeOpt = {
                showTime,
            };
            if (dateFormats[config.format] === 'TimePicker') {
                timeOpt = { use12Hours: config.format.includes('h') };
            }
            return (form, changeItems, item, methods) =>
                dateFormats[config.format]
                    ? getControl(dateFormats[config.format], {
                          showToday: false,
                          format: config.format.includes(' - ') ? format : config.format,
                          placeholder: e.placeholder,
                          ...opt,
                          ...timeOpt,
                          // ...defaultOpt,
                          onChange: (...rest) => {
                              if (!showTime) {
                                  (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                      ages: linkages,
                                      getGroupsFn,
                                      seftItem: item,
                                      extraValue,
                                      getExtendComponents: e.getExtendComponents,
                                  });
                                  docustomOnChange(e, opt, ...rest);
                              }
                          },
                          onOk: (...rest) => {
                              if (showTime) {
                                  (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                      ages: linkages,
                                      getGroupsFn,
                                      seftItem: item,
                                      extraValue,
                                      getExtendComponents: e.getExtendComponents,
                                  });
                                  docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                              }
                          },
                      })
                    : getControl('Input');
        },
        getOptions(es, rules = []) {
            const e = { ...es };
            const config = paseFieldConfig(e);
            config.format = config.format ? config.format : '';
            const isTimeRange = ['RangePicker', 'TimeRange'].includes(dateFormats[config.format]);
            const format = config.format.includes(' - ') ? config.format.split(' - ')[0] : config.format;
            if (isTimeRange) {
                if (e.required) {
                    rules.push({
                        validator(rule, value, callback) {
                            if (Array.isArray(value) && value.length === 2) {
                                return callback();
                            }
                            return callback('未填完整');
                        },
                    });
                }
                if (e.initialValue === 'now') {
                    e.initialValue = [moment(), moment()];
                } else {
                    e.initialValue =
                        typeof e.initialValue === 'string' && e.initialValue.includes('-')
                            ? e.initialValue.split('-')
                            : e.initialValue;
                    e.initialValue =
                        Array.isArray(e.initialValue) && e.initialValue.length
                            ? e.initialValue.map((time) => moment(time, format))
                            : null;
                }
            } else if (typeof e.initialValue === 'string') {
                if (e.initialValue === 'now') {
                    e.initialValue = moment();
                } else {
                    try {
                        e.initialValue = moment(e.initialValue, format);
                    } catch (e) {
                        throw Error('initialValue格式有误');
                    }
                }
            }
            return getOptionsRules(e, rules);
        },
    },
    //Cascader级联
    6: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
            const isAsync = opt.isAsync;
            const noAsync = opt.noAsync;
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e, true);
            const {
                selectionsType,
                selectionsFromKey,
                selectionsUrl,
                selectList,
                selectionsQuery,
                selectListFieldNames,
                changeOnSelect,
                responseDataIndex,
                ...others
            } = config;
            function getCurrentControl(selectList) {
                return (form, changeItems, item, methods) => {
                    if (typeof selectList === 'string' && selectList) {
                        selectList = form.saveFieldOptions[selectList] || [];
                    }
                    const newProps = {
                        allowClear: !e.required,
                        ...others,
                        changeOnSelect,
                        ...opt,
                        selectionsUrl,
                        selectionsQuery,
                        placeholder: e.placeholder,
                        selectList,
                        optionsChange: (options) => {
                            if (form) {
                                //保存已有的selectList
                                form.saveFieldOptions[e.fieldKey] = options;
                            }
                        },
                        selectListFieldNames,
                        onChange: (...rest) => {
                            (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                ages: linkages,
                                getGroupsFn,
                                seftItem: item,
                                extraValue,
                                getExtendComponents: e.getExtendComponents,
                            });
                            docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        },
                    };
                    return <CascaderLoader {...newProps} />;
                };
            }
            let hasAsync = false;
            if (!isAsync && currentForm) {
                const currnetFormAllAsync = currentForm.getAsyncQueue();
                if (currnetFormAllAsync && currnetFormAllAsync.length) {
                    hasAsync = true;
                }
            }
            //异步类型
            if (selectionsType == 2 && !hasAsync && !noAsync) {
                if (!isAsync && currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
                    return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
                }
                const formValue = getCurrFormValue(currentForm);
                return httpAjax(
                    selectionsUrl.selectionsUrlMethod,
                    selectionsUrl.selectionsUrl,
                    {
                        ...selectionsQuery,
                        ...requestQuery,
                        ...(selectionsUrl.selectionsUrlMethod !== 'get' ? { formValue, extraValue } : {}),
                    },
                    selectionsUrl.requestConfig,
                )
                    .then((re) =>
                        getCurrentControl(
                            treeDataAddKey(
                                getResponseData(re, responseDataIndex) || [],
                                undefined,
                                selectListFieldNames,
                                selectionsUrl.requireType !== 'part', // false  即为分部加载
                            ),
                        ),
                    )
                    .catch(() => {
                        if (currentForm) {
                            currentForm.saveFieldOptions[e.fieldKey] = [];
                        }
                        return getCurrentControl([]);
                    });
            } else if (+selectionsType === 3) {
                return () => getCurrentControl(selectionsFromKey);
            }
            //自定义选项类型
            return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, true));
        },
        getOptions: getOptionsRules,
    },
    //TreeSelect树选择
    7: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
            const isAsync = opt.isAsync;
            const noAsync = opt.noAsync;
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e, true);
            const {
                selectionsType,
                selectionsFromKey,
                selectionsUrl,
                selectList,
                selectionsQuery,
                selectListFieldNames,
                responseDataIndex,
                ...others
            } = config;
            function getCurrentControl(selectList) {
                return (form, changeItems, item, methods) => {
                    if (typeof selectList === 'string' && selectList) {
                        selectList = form.saveFieldOptions[selectList] || [];
                    }
                    const newProps = {
                        allowClear: !e.required,
                        placeholder: e.placeholder,
                        dropdownMatchSelectWidth: false,
                        ...others,
                        ...opt,
                        selectionsUrl,
                        selectionsQuery,
                        selectList,
                        optionsChange: (options) => {
                            if (form) {
                                //保存已有的selectList
                                form.saveFieldOptions[e.fieldKey] = options;
                                form.saveOptionsMapKey[e.fieldKey] = {
                                    label: 'title',
                                    value: 'value',
                                    children: 'children',
                                };
                            }
                        },
                        selectListFieldNames,
                        onChange: (...rest) => {
                            (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                ages: linkages,
                                getGroupsFn,
                                seftItem: item,
                                extraValue,
                                getExtendComponents: e.getExtendComponents,
                            });
                            docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        },
                    };
                    return <TreeSelectLoader {...newProps} />;
                };
            }
            let hasAsync = false;
            if (!isAsync && currentForm) {
                const currnetFormAllAsync = currentForm.getAsyncQueue();
                if (currnetFormAllAsync && currnetFormAllAsync.length) {
                    hasAsync = true;
                }
            }
            //异步类型
            if (+selectionsType === 2 && !hasAsync && !noAsync) {
                if (!isAsync && currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
                    return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
                }
                const formValue = getCurrFormValue(currentForm);
                return httpAjax(
                    selectionsUrl.selectionsUrlMethod,
                    selectionsUrl.selectionsUrl,
                    {
                        ...selectionsQuery,
                        ...requestQuery,
                        ...(selectionsUrl.selectionsUrlMethod !== 'get' ? { formValue, extraValue } : {}),
                    },
                    selectionsUrl.requestConfig,
                )
                    .then((re) => {
                        const selectList = treeDataAddKey(
                            getResponseData(re, responseDataIndex) || [],
                            { label: 'title', value: 'value', children: 'children', key: 'key' },
                            selectListFieldNames,
                            selectionsUrl.requireType !== 'part' ? undefined : false, // false  即为分部加载
                        );
                        const hasCurrValue = itemsFromTree({
                            tree: selectList,
                            sourceItem: { value: formValue[e.fieldKey] },
                            keyObj: { id: 'value', children: 'children' },
                        });
                        if (!hasCurrValue && currentForm) {
                            currentForm.resetFields([e.fieldKey]);
                        }
                        return getCurrentControl(selectList);
                    })
                    .catch(() => {
                        if (currentForm) {
                            currentForm.saveFieldOptions[e.fieldKey] = [];
                        }
                        return getCurrentControl([]);
                    });
            } else if (+selectionsType === 3) {
                return () => getCurrentControl(selectionsFromKey);
            }
            //自定义选项类型
            return getCurrentControl(
                treeDataAddKey(
                    selectList,
                    { label: 'title', value: 'value', children: 'children', key: 'key' },
                    selectListFieldNames,
                ),
            );
        },
        getOptions: getOptionsRules,
    },
    //Checkbox.Group
    8: {
        getControl: selectControl((opt) => <CheckGrouplist {...opt} controlType="Checkbox"></CheckGrouplist>),
        getOptions(e, rules = []) {
            const field = { ...e, valueType: 'array' };
            const config = paseFieldConfig(e);
            field.initialValue =
                typeof field.initialValue === 'string' ? field.initialValue.replace('，', ',').split(',') : [];
            rules.push({
                validator: (rule, value, callback) => {
                    if (Array.isArray(value)) {
                        if (typeof config.minSelectLength === 'number' && value.length < config.minSelectLength) {
                            return callback(`至少选择${config.minSelectLength}个`);
                        }
                        if (typeof config.maxSelectLength === 'number' && value.length > config.maxSelectLength) {
                            return callback(`最多选择${config.maxSelectLength}个`);
                        }
                    }
                    return callback();
                },
            });
            return getOptionsRules(field, rules, {});
        },
    },
    //Radio.Group
    9: {
        getControl: selectControl((opt) => <CheckGrouplist {...opt} controlType="Radio"></CheckGrouplist>),
        getOptions: getOptionsRules,
    },
    //Switch
    10: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) =>
                getControl('Switch', {
                    placeholder: e.placeholder,
                    ...others,
                    ...opt,
                    onChange: (...rest) => {
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                    },
                });
        },
        getOptions(e, rules = []) {
            e.initialValue = dataType.isString(e.initialValue) ? Number(e.initialValue) : e.initialValue;
            return getOptionsRules(e, rules, { valuePropName: 'checked' });
        },
    },
    //Upload
    11: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            return (form, changeItems, item, methods) =>
                config.fileAccept === 'image/*' && config.ocrEnabled ? (
                    <ZprosAndCons
                        multiple={!config.ocrEnabled}
                        config={config}
                        field={e}
                        onChange={(...rest) => {
                            (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                ages: linkages,
                                getGroupsFn,
                                seftItem: item,
                                extraValue,
                                getExtendComponents: e.getExtendComponents,
                            });
                            docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        }}
                        secondUpload={false}
                        firstButtonName="选择图片"></ZprosAndCons>
                ) : (
                    <ZformUpload
                        config={config}
                        field={e}
                        onChange={(...rest) => {
                            (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                ages: linkages,
                                getGroupsFn,
                                seftItem: item,
                                extraValue,
                                getExtendComponents: e.getExtendComponents,
                            });
                            docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        }}
                    />
                );
        },
        getOptions(e, rules = []) {
            const config = paseFieldConfig(e);
            const newRules = [
                {
                    validator(rule, value, callback) {
                        // console.log('验证', value, config);
                        if (Array.isArray(value)) {
                            if (e.required && !value.length) {
                                return callback('未上传任何文件');
                            }
                            if (config.minUploadLength && config.minUploadLength > value.length) {
                                return callback(`上传数量不能少于${config.minUploadLength}`);
                            }
                        }
                        return callback();
                    },
                },
            ];
            return getOptionsRules({ ...e, regularExpression: null }, newRules.concat(rules), {
                validateTrigger: 'onChange',
            });
        },
    },
    //ColorPicker
    12: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
            // const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) =>
                getControl('ColorPicker', {
                    ...others,
                    ...opt,
                    onChange: (...rest) => {
                        e.currentSaturability = rest[1] ? rest[1].hsv.s : 0;

                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                    },
                });
        },
        getOptions(e, rules = []) {
            const config = paseFieldConfig(e);
            if (config.minSaturability > 0) {
                rules.push({
                    validator(rule, value, callback) {
                        const currentSaturability = e.currentSaturability;
                        if (currentSaturability && config.minSaturability > currentSaturability) {
                            return callback(e.errorMsg ? e.errorMsg : `饱和度不能小于${config.minSaturability * 100}%`);
                        }
                        return callback();
                    },
                });
            }
            return getOptionsRules(e, rules);
        },
    },
    //地图选点
    13: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) => (
                <MapChooseAddress
                    {...{
                        placeholder: e.placeholder,
                        ...others,
                        ...opt,
                        onChange: (...rest) => {
                            (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                                ages: linkages,
                                getGroupsFn,
                                seftItem: item,
                                extraValue,
                                getExtendComponents: e.getExtendComponents,
                            });
                            docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        },
                    }}
                />
            );
        },
        getOptions(e, rules = []) {
            // rules.push({
            //     validator(rule, value, callback) {
            //         if (dataType.isObject(value)) {
            //             if (!/^.{10,}/.test(value.name)) {
            //                 return callback('地址名称不能少于10个字符');
            //             }
            //         }
            //         return callback();
            //     }
            // });
            return getOptionsRules(e, rules);
        },
    },
    //自定义占位
    14: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            if (dataType.isObject(e.customControlRender)) {
                const confun = e.customControlRender[e.fieldKey];
                if (dataType.isFunction(confun)) {
                    return confun({ ...opt, field: e, linkages, getGroupsFn, doLinkageAction, extraValue });
                }
            }
            return <div className="z-form-control-placeholder">自定义区域</div>;
        },
        getOptions: getOptionsRules,
    },
    //电子签名
    15: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            return (form, changeItems, item, methods) => (
                <SignControl
                    {...opt}
                    field={e}
                    config={config}
                    currentForm={form}
                    extraValue={extraValue}></SignControl>
            );
        },
        getOptions: getOptionsRules,
    },
    //证件照
    16: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            return (form, changeItems, item, methods) => (
                <ZprosAndCons
                    multiple={false}
                    config={config}
                    field={e}
                    onChange={(...rest) => {
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                    }}
                    secondUpload={true}></ZprosAndCons>
            );
        },
        getOptions(e, rules = []) {
            const config = parseJsonToObject(e.config);
            const newRules = [
                {
                    validator(rule, value, callback) {
                        if (Array.isArray(value)) {
                            if (value.length && (!value[0] || !value[1])) {
                                if ((config.positiveRequired === undefined || config.positiveRequired) && !value[0]) {
                                    return callback('正面图片必须上传');
                                }
                                if (config.reverseRequired && !value[1]) {
                                    return callback('反面图片必须上传');
                                }
                            }
                        }
                        return callback();
                    },
                },
            ];

            return getOptionsRules({ ...e, regularExpression: null }, !e.disabled ? newRules.concat(rules) : rules);
        },
    },
    //searchInput
    17: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) => (
                <ZsearchInput
                    placeholder={e.placeholder}
                    {...others}
                    {...opt}
                    onChange={(...rest) => {
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                    }}></ZsearchInput>
            );
        },
        getOptions(e, rules = []) {
            const config = parseJsonToObject(e.config);
            rules.push({
                validator(rule, value, callback) {
                    if (
                        e.required &&
                        ((config.inputValueKeyName && !value) ||
                            (!config.inputValueKeyName && !dataType.isObject(value)))
                    ) {
                        return callback('请搜索结果');
                    }
                    return callback();
                },
            });
            return getOptionsRules(e, rules);
        },
    },
    //多行数据
    18: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
            const extraValue = opt.extraValue || {};
            const noAsync = opt.noAsync;
            const getMultiRowFormData = opt.getMultiRowFormData;
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const getFormDataParams = config.getFormDataParams || {};
            const showAddButton = config.showAddButton === undefined ? true : !!config.showAddButton;
            const showRemoveButton = config.showRemoveButton === undefined ? true : !!config.showRemoveButton;

            if (noAsync) {
                return <ParamsShower params={getFormDataParams} />;
            }
            return (form, changeItems, item, methods) => (
                <MultiRowControl
                    formMode={config.formMode}
                    showAddButton={showAddButton}
                    showRemoveButton={showRemoveButton}
                    formItem={item}
                    extraValue={extraValue}
                    getMultiRowFormData={getMultiRowFormData}
                    getFormDataParams={getFormDataParams}
                    onChange={(...rest) => {
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                    }}
                    {...getMultiRowControlCustomProperties(e)}
                    {...opt}
                />
            );
        },
        getOptions(e, rules = []) {
            return getOptionsRules({ ...e, valueType: 'array' }, rules);
        },
    },
    //填空
    19: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
            const extraValue = opt.extraValue || {};
            const noAsync = opt.noAsync;
            deleteProto(opt);
            const config = paseFieldConfig(e);
            return (form, changeItems, item, methods) => (
                <ZgapFilling disabled={!!e.disabled} {...config}></ZgapFilling>
            );
        },
        getOptions(e, rules = []) {
            return getOptionsRules({ ...e, valueType: 'object' }, rules);
        },
    },
    //文书占位
    20: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) =>
                getControl('Input', {
                    placeholder: e.placeholder,
                    ...others,
                    ...opt,
                    onBlur: (...rest) => {
                        (typeof e.doLinkageAction === 'function' ? e.doLinkageAction : doLinkageAction)({
                            ages: linkages,
                            getGroupsFn,
                            seftItem: item,
                            extraValue,
                            getExtendComponents: e.getExtendComponents,
                        });
                    },
                    onChange: (...rest) => {
                        docustomOnChange(e, opt, ...rest, { form, changeItems, item, methods });
                    },
                    disabled: true,
                });
        },
        getOptions(e, rules = []) {
            const regType = e.regType; //regType 来自Zform/controls的regExps
            return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules);
        },
    },
    //组织用户选择器
    21: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) => (
                <UsersSelection placeholder={e.placeholder} {...others} {...opt}></UsersSelection>
            );
        },
        getOptions: getOptionsRules,
    },
    //当前登录用户信息
    22: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) => <CurrentUserInfo {...opt} {...others}></CurrentUserInfo>;
        },
        getOptions: getOptionsRules,
    },
    //pdf展示器
    23: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, getPrivateFile, ...others } = config;
            return (form, changeItems, item, methods) => (
                <ZpdfViewer
                    isViewArea={false}
                    getPrivateFile={(query) =>
                        httpAjax(getPrivateFile.urlMethod, getPrivateFile.url, query, getPrivateFile.requestConfig)
                    }
                    {...opt}
                    {...others}></ZpdfViewer>
            );
        },
        getOptions: getOptionsRules,
    },
    //承接值控件
    24: {
        getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
            // const extraValue = opt.extraValue || {};
            deleteProto(opt);
            const config = paseFieldConfig(e);
            const { tagName, ...others } = config;
            return (form, changeItems, item, methods) => (
                <CatchInput
                    {...{
                        ...opt,
                        ...others,
                        getFieldsValue: methods ? methods.getFieldsValue : null,
                        form,
                    }}></CatchInput>
            );
        },
        getOptions: getOptionsRules,
    },
};
function CatchInput(props) {
    const { getFieldsValue, catchKey, onChange, form, value, ...others } = props;
    const [inputValue, setInputValue] = useState(null);
    useEffect(() => {
        if (inputValue !== null) {
            return;
        }
        let vals = {};
        const values = { ...form.saveSettingValues, ...(typeof getFieldsValue === 'function' ? getFieldsValue() : {}) };
        if (Array.isArray(values)) {
            vals = values.reduce((tol, curr) => ({ ...tol, ...curr }), {});
        } else {
            vals = values;
        }
        if (value !== vals[catchKey] && vals[catchKey] !== undefined && vals[catchKey] !== null) {
            onChange && onChange(vals[catchKey]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form]);
    return getControl('Input', {
        onChange: (val) => {
            setInputValue(val);
            onChange && onChange(val);
        },
        value: inputValue || value,
        ...others,
    });
}
function ParamsShower(props) {
    const { params } = props;
    return (
        <div className="z-panel is-panel-border z-bordercolor-light-cyan">
            {Object.keys(params).map((key) => (
                <div className="z-info" key={key}>
                    <div className="z-info-left" style={{ padding: '8px 12px' }}>
                        {key}
                    </div>
                    <div className="z-info-right" style={{ padding: '8px 12px' }}>
                        {params[key]}
                    </div>
                </div>
            ))}
        </div>
    );
}

import fieldTypeProperties from './liveFormActions/fieldTypeProperties';
const getDefaultComs = () =>
    fieldTypeProperties.map((item) => ({
        ...item,
        ZliveFormViewerControlRender: controlsMap[item.value],
    }));
export function getAllControls({ getExtendComponents }) {
    const extendComs = (typeof getExtendComponents === 'function' ? getExtendComponents() : null) || [];
    const controls = [...getDefaultComs(), ...extendComs].reduce(
        (tol, curr) => ({ ...tol, [curr.value]: curr.ZliveFormViewerControlRender }),
        {},
    );
    return controls;
}

export default controlsMap;
