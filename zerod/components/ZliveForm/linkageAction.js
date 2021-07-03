import { dataType, parseJsonToObject } from '../zTool';
import httpAjax from '../zTool/httpAjax';
import debounce from 'lodash/debounce';
import { getAllControls, getOptionsRules } from './controls';
function concatKeys(values, arr, a, d) {
    const getNewFields = (srcFieldKey) => {
        if (d.fields.length) {
            return d.fields.map((item) => ({
                srcFieldKey: srcFieldKey || a.src.fieldKey,
                ...d,
                fields: undefined,
                ...item,
            }));
        }
        return [{ ...d, srcFieldKey: srcFieldKey || a.src.fieldKey }];
    };
    if (['13.1', '13.2'].includes(a.linkageType)) {
        if (d.combinationKey) {
            const regularExpression = d.regularExpression;
            const fieldKeys = d.combinationKey.split('&&');
            const combinationValue = fieldKeys.map((key) => (values[key] ? values[key].toString() : '')).join('&&');
            let testVaild = false;
            try {
                testVaild = new RegExp(regularExpression).test(combinationValue);
            } catch (e) {
                console.error(`${regularExpression}不是有效的正则表达式`, e);
            }
            if (testVaild) {
                fieldKeys.forEach((key) => {
                    arr = arr.concat(getNewFields(key));
                });
            }
        }
    } else if (
        ['6', '7', '8', '9', '9.2', '10.1', '10.2'].includes(a.linkageType) ||
        (d.srcValue !== undefined &&
            d.srcValue !== null &&
            values[a.src.fieldKey] !== undefined &&
            values[a.src.fieldKey] !== null &&
            d.srcValue.toString() === values[a.src.fieldKey].toString())
    ) {
        arr = arr.concat(getNewFields());
    } else if (['11.1', '11.2', '11.3', '11.4'].includes(a.linkageType)) {
        const srcValue = values[a.src.fieldKey];
        const regularExpression = d.regularExpression;
        console.log(values, regularExpression, 'regularExpression');
        if (srcValue !== undefined && srcValue !== null) {
            let testVaild = false;
            try {
                testVaild = new RegExp(regularExpression).test(srcValue.toString());
            } catch (e) {
                console.error(`${regularExpression}不是有效的正则表达式`, e);
            }
            if (testVaild) {
                arr = arr.concat(getNewFields());
            }
        }
    } else if (Array.isArray(values[a.src.fieldKey])) {
        if (Array.isArray(d.srcValue)) {
            if (JSON.stringify(values[a.src.fieldKey]) === JSON.stringify(d.srcValue)) {
                arr = arr.concat(getNewFields());
            }
        } else if (values[a.src.fieldKey].includes(d.srcValue)) {
            arr = arr.concat(getNewFields());
        }
    }
    return arr;
}
export function matchLinkages({ ages, values = {}, seftItem }) {
    let cardGetBirthdayKeys = [];
    let asyncParamNameKeys = [];
    let regionNameKeys = [];
    let ocrParamNameKeys = [];
    let groupHiddenKeys = [];
    let groupShowKeys = [];
    let hiddenKeys = [];
    let showKeys = [];
    let disabledKeys = [];
    let enabledKeys = [];
    let requiredKeys = [];
    let noRequiredKeys = [];
    let selectOptions = [];
    let hasClearSelect = false;
    let operationExpKeys = [];
    let validationExpKeys = [];

    ages.forEach((a) => {
        // if (values.hasOwnProperty(a.src.fieldKey)) {
        switch (a.linkageType) {
            //多控件值联合正则控制控件
            case '13.2':
                a.dist.forEach((d) => {
                    if (d.effect === 'controlHidden') {
                        hiddenKeys = concatKeys(values, hiddenKeys, a, d);
                    } else if (d.effect === 'controlVisibled') {
                        showKeys = concatKeys(values, showKeys, a, d);
                    } else if (d.effect === 'disabled') {
                        disabledKeys = concatKeys(values, disabledKeys, a, d);
                    } else if (d.effect === 'enabled') {
                        enabledKeys = concatKeys(values, enabledKeys, a, d);
                    } else if (d.effect === 'required') {
                        requiredKeys = concatKeys(values, requiredKeys, a, d);
                    } else if (d.effect === 'dispensable') {
                        noRequiredKeys = concatKeys(values, noRequiredKeys, a, d);
                    }
                });
                break;
            //多控件值联合正则控制组
            case '13.1':
                a.dist.forEach((d) => {
                    if (d.effect === 'groupHidden') {
                        groupHiddenKeys = concatKeys(values, groupHiddenKeys, a, d);
                    } else if (d.effect === 'groupVisibled') {
                        groupShowKeys = concatKeys(values, groupShowKeys, a, d);
                    }
                });
                break;
            //运算表达式
            case '10.1':
                a.dist.forEach((d) => {
                    operationExpKeys = concatKeys(values, operationExpKeys, a, d);
                });
                break;
            //校验表达式
            case '10.2':
                a.dist.forEach((d) => {
                    validationExpKeys = concatKeys(values, validationExpKeys, a, d);
                });
                break;
            //OCR识别联动
            case '9':
            case '9.2':
                a.dist.forEach((d) => {
                    ocrParamNameKeys = concatKeys(values, ocrParamNameKeys, a, d);
                });
                break;
            //地图选点取行政区划
            case '8':
                a.dist.forEach((d) => {
                    regionNameKeys = concatKeys(values, regionNameKeys, a, d);
                });
                break;
            //单选联动异步请求选项
            case '7':
                a.dist.forEach((d) => {
                    asyncParamNameKeys = concatKeys(values, asyncParamNameKeys, a, d);
                });
                break;
            //输入身份证自动联动生日
            case '6':
                a.dist.forEach((d) => {
                    cardGetBirthdayKeys = concatKeys(values, cardGetBirthdayKeys, a, d);
                });
                break;
            //隐藏组
            case '5.1':
            case '11.1':
                a.dist.forEach((d) => {
                    groupHiddenKeys = concatKeys(values, groupHiddenKeys, a, d);
                });
                break;
            //隐藏控件
            case '5.2':
            case '11.2':
                a.dist.forEach((d) => {
                    hiddenKeys = concatKeys(values, hiddenKeys, a, d);
                });
                break;
            //显示组
            case '5.3':
            case '11.3':
                a.dist.forEach((d) => {
                    groupShowKeys = concatKeys(values, groupShowKeys, a, d);
                });
                break;
            //显示控件
            case '5.4':
            case '11.4':
                a.dist.forEach((d) => {
                    showKeys = concatKeys(values, showKeys, a, d);
                });
                break;
            //禁用
            case '1':
                a.dist.forEach((d) => {
                    disabledKeys = concatKeys(values, disabledKeys, a, d);
                });
                break;
            //启用
            case '1.2':
                a.dist.forEach((d) => {
                    enabledKeys = concatKeys(values, enabledKeys, a, d);
                });
                break;
            // 必填
            case '2':
                a.dist.forEach((d) => {
                    requiredKeys = concatKeys(values, requiredKeys, a, d);
                });
                break;
            // 非必填
            case '3':
                a.dist.forEach((d) => {
                    noRequiredKeys = concatKeys(values, noRequiredKeys, a, d);
                });
                break;
            // 控制选项
            case '4':
                hasClearSelect = seftItem && a.src.fieldKey == seftItem.fieldKey;
                a.dist.forEach((d) => {
                    selectOptions = concatKeys(values, selectOptions, a, d);
                });
                // console.log("selectOptions",selectOptions)
                break;
            default:
        }
        // }
    });
    return {
        cardGetBirthdayKeys,
        asyncParamNameKeys,
        regionNameKeys,
        ocrParamNameKeys,
        groupHiddenKeys,
        groupShowKeys,
        hiddenKeys,
        showKeys,
        disabledKeys,
        enabledKeys,
        requiredKeys,
        noRequiredKeys,
        selectOptions,
        hasClearSelect,
        operationExpKeys,
        validationExpKeys,
    };
}
export function isSrcFieldEffective(groups, srcFieldKey) {
    let effective = false;
    for (let index = 0; index < groups.length; index++) {
        const g = groups[index];
        if (g.groupRef.current.getShowState()) {
            const o = g.groupRef.current.getForm();
            const formItems = (o.form && o.form.zformItems) || [];
            const srcItem = formItems.find((item) => item.key === srcFieldKey);
            console.log(formItems);
            if (
                srcItem &&
                (srcItem.ref.current.itemShowStatus ||
                    (Object.prototype.hasOwnProperty.call(srcItem, 'hiddenRendering') && !!srcItem.hiddenRendering))
            ) {
                effective = true;
                break;
            }
        }
    }
    return effective;
}
function findFieldSeq(groups, srcFieldKey) {
    let seq = -1;
    for (let index = 0; index < groups.length; index++) {
        const g = groups[index];
        if (g.groupRef.current.getShowState()) {
            const o = g.groupRef.current.getForm();
            const formItems = o.form ? o.form.zformItems : [];
            const srcItem = formItems.find((item) => item.key === srcFieldKey);
            if (srcItem && srcItem.ref.current.itemShowStatus) {
                seq = Number(srcItem.seq);
                break;
            }
        }
    }
    return seq;
}

export function linkGroupShow({
    group,
    groupHiddenKeys,
    groupShowKeys,
    groups,
    isSrcFieldEffectiveFun = isSrcFieldEffective,
    findFieldSeqFun = findFieldSeq,
}) {
    const findHideGroup = groupHiddenKeys.find((gh) => {
        const effective = isSrcFieldEffectiveFun(groups, gh.srcFieldKey);
        return gh.groupName && gh.groupName === group.name && effective;
    });
    const findShowGroup = groupShowKeys.find((gh) => {
        const effective = isSrcFieldEffectiveFun(groups, gh.srcFieldKey);
        return gh.groupName && gh.groupName === group.name && effective;
    });
    // let groupShowed = group.groupRef.current.getShowState(); //显示状态
    let groupShowed = !group.hidden; //显示状态
    if (findHideGroup && findShowGroup) {
        console.error(`警告：同时存在对同个组(${group.name})的"组隐藏"和"组显示"的联动配置,请检查是否合理`);
        //
        groupShowed =
            findFieldSeqFun(groups, findHideGroup.srcFieldKey) < findFieldSeqFun(groups, findShowGroup.srcFieldKey);
    } else if (findHideGroup) {
        groupShowed = false;
    } else if (findShowGroup) {
        groupShowed = true;
    }
    return groupShowed;
}
export function linkFieldShow({
    field,
    hiddenKeys,
    showKeys,
    groups,
    isSrcFieldEffectiveFun = isSrcFieldEffective,
    findFieldSeqFun = findFieldSeq,
}) {
    const hiddenField = hiddenKeys.find((item) => {
        const effective = item.srcFieldKey === item.fieldKey || isSrcFieldEffectiveFun(groups, item.srcFieldKey);
        return item.fieldKey === field.fieldKey && effective;
    });
    const showField = showKeys.find((item) => {
        const effective = item.srcFieldKey === item.fieldKey || isSrcFieldEffectiveFun(groups, item.srcFieldKey);
        return item.fieldKey === field.fieldKey && effective;
    });
    let show = !field.hidden;
    if (hiddenField && showField) {
        console.error(`警告：同时存在对同个控件(${field.fieldKey})的"控件隐藏"和"控件显示"的联动配置,请检查是否合理`);
        show = findFieldSeqFun(groups, hiddenField.srcFieldKey) < findFieldSeqFun(groups, showField.srcFieldKey);
    } else if (hiddenField) {
        show = false;
    } else if (showField) {
        show = true;
    }
    return show;
}

export function getAllGroupsFormValues(getGroupsFn, extraValue) {
    const formObjs = [];
    const groups = getGroupsFn();
    groups.forEach((g) => {
        if (g.groupRef.current.getIsFirstShow()) {
            formObjs.push(g.groupRef.current.getForm());
        }
    });
    let values = {};
    const onformvalue = formObjs[0] ? formObjs[0].methods.getFieldsValue() : {};
    values = {
        ...values,
        ...(Array.isArray(onformvalue)
            ? onformvalue.reduce((currentAll, currValue, index, arr) => ({ ...currentAll, ...currValue }), {})
            : onformvalue),
        ...(extraValue || {}),
    };
    // console.log(groups, 'groups', values);
    return { values, groups, formObjs };
}

//执行禁用、启用、必填、非必填
export function universalAction({
    asyncParamNameKeys,
    groupHiddenKeys,
    groupShowKeys,
    hiddenKeys,
    showKeys,
    disabledKeys,
    enabledKeys,
    requiredKeys,
    noRequiredKeys,
    selectOptions,
    hasClearSelect,
    groups,
    seftItem,
    values,
    ages,
    getGroupsFn,
    formValues,
    onAfterSetFieldsValue,
    controls,
}) {
    console.log(
        groupHiddenKeys,
        groupShowKeys,
        hiddenKeys,
        showKeys,
        disabledKeys,
        enabledKeys,
        requiredKeys,
        noRequiredKeys,
        controls,
    );

    const newFormObjs = [];
    const newItems = [];
    const asyncFields = [];
    let hasGroupFirstShow = false;
    for (let gindex = 0; gindex < groups.length; gindex++) {
        const g = groups[gindex];
        const groupShowed = linkGroupShow({ group: g, groupHiddenKeys, groupShowKeys, groups });
        if (!g.groupRef.current.getIsFirstShow()) {
            g.groupRef.current.show(groupShowed);
            if (groupShowed) {
                //发现第一次显示渲染的组
                hasGroupFirstShow = true;
                break;
            }
        }
        g.groupRef.current.show(groupShowed);
        const formO = g.groupRef.current.getForm();
        formO.firstShowFields = [];
        if (formO.form) {
            newFormObjs.push(formO);
        }
        g.groupRef.current.getFormItems().forEach((field) => {
            console.log(field);
            const show = linkFieldShow({ field, hiddenKeys, showKeys, groups, group: g });
            const formItems = (formO.form && formO.form.zformItems) || [];
            const currentItem = formItems.find((item) => item.key === field.fieldKey);
            if (currentItem && currentItem.ref.current && !currentItem.ref.current.state.firstShow && show) {
                formO.firstShowFields.push(field.fieldKey);
            }
            const disabledFields = disabledKeys.find(
                (f) => f.fieldKey === field.fieldKey && isSrcFieldEffective(groups, f.srcFieldKey),
            );
            const enabledFields = enabledKeys.find(
                (f) => f.fieldKey === field.fieldKey && isSrcFieldEffective(groups, f.srcFieldKey),
            );
            const requiredFields = requiredKeys.find(
                (f) => f.fieldKey === field.fieldKey && isSrcFieldEffective(groups, f.srcFieldKey),
            );
            const noRequiredFields = noRequiredKeys.find(
                (f) => f.fieldKey === field.fieldKey && isSrcFieldEffective(groups, f.srcFieldKey),
            );
            const selectOptionsFields = selectOptions.find(
                (f) => f.fieldKey === field.fieldKey && isSrcFieldEffective(groups, f.srcFieldKey),
            );

            const e = { ...field };
            const defaultDisabled = Boolean(e.disabled);
            //将要的禁用状态
            let disabled = defaultDisabled;
            if (disabledFields && enabledFields) {
                console.error(
                    `警告：同时存在对同个控件(${field.fieldKey})的"控件禁用"和"控件启用"的联动配置,请检查是否合理`,
                );
                disabled =
                    findFieldSeq(groups, enabledFields.srcFieldKey) < findFieldSeq(groups, disabledFields.srcFieldKey);
            } else if (disabledFields) {
                disabled = true;
            } else if (enabledFields) {
                disabled = false;
            }

            if (requiredFields && noRequiredFields) {
                console.error(
                    `警告：同时存在对同个控件(${field.fieldKey})的"控件必填"和"控件非必填"的联动配置,请检查是否合理`,
                );
                e.required =
                    findFieldSeq(groups, requiredFields.srcFieldKey) <
                    findFieldSeq(groups, noRequiredFields.srcFieldKey);
            } else if ((disabled && !defaultDisabled) || noRequiredFields) {
                e.required = 0;
            } else if (requiredFields) {
                e.required = 1;
            }
            e.config = parseJsonToObject(e.config);
            if (selectOptionsFields) {
                e.config = {
                    ...e.config,
                    selectList: selectOptionsFields.options,
                    customOnChange: null,
                };
            }

            const control = selectOptionsFields
                ? controls[e.fieldType].getControl(
                      e,
                      ages,
                      getGroupsFn,
                      {
                          isAsync: false,
                      },
                      null,
                      formO.form,
                  )
                : null;

            const newFieldProto = {
                ...e,
                imperative: null,
                options: null,
                render: null,
                config: JSON.stringify(e.config),
            };
            console.log(e.fieldKey);
            const currentFieldProto = {
                ...field,
                imperative: null,
                options: null,
                render: null,
            };
            const options =
                JSON.stringify(newFieldProto) !== JSON.stringify(currentFieldProto)
                    ? controls[e.fieldType].getOptions(e, [], getOptionsRules)
                    : null;
            const newItem = {};
            if (control) {
                newItem.control = control;
            }
            if (options) {
                newItem.options = options;
            }

            newItems.push({
                key: e.fieldKey,
                show,
                disabled,
                newItem: control || options ? newItem : +e.config.selectionsType === 2 ? undefined : 'reset', //'reset'主要是为了linkageType==="4"的情况
            });
            //单选联动异步请求选项
            const paramField = asyncParamNameKeys.find((item) => item.fieldKey === e.fieldKey);
            if (paramField && +e.config.selectionsType === 2) {
                e.config = {
                    ...e.config,
                    selectionsQuery: {
                        ...e.config.selectionsQuery,
                        [paramField.asyncParamName]: values[paramField.srcFieldKey],
                    },
                };
                e.groupName = g.name;
                e.srcFieldKey = paramField.srcFieldKey;
                asyncFields.push(e);
            }
        });
    }

    const asycnpromise = [];
    //所有将隐藏的
    const hideItems = newItems.filter((item) => !item.show);
    //被showKeys控制显示的控件key，并且其控制源控件是将隐藏的
    let toHideKeys = [];
    hideItems.forEach((item) => {
        toHideKeys = toHideKeys.concat(
            showKeys
                .filter((f) => f.srcFieldKey === item.key && f.srcValue === values[f.srcFieldKey])
                .map((f) => f.fieldKey),
        );
    });
    //被showKeys控制显示的控件，其控制源控件是将隐藏的时候，就隐藏控件
    newItems.forEach((item) => {
        item.show = toHideKeys.includes(item.key) ? false : item.show;
    });
    console.log(newItems, 'newItems--');
    let hasSetValue = false;
    if (!hasGroupFirstShow) {
        newFormObjs.forEach((o, i) => {
            asycnpromise.push(
                new Promise((resolve, reject) => {
                    o.methods.changeFormItems(newItems, true, () => {
                        const resetDisable = disabledKeys.map((item) => item.fieldKey).filter((key) => !!key);
                        const resetNoRequired = noRequiredKeys.map((item) => item.fieldKey).filter((key) => !!key);
                        const resetSelect = selectOptions.map((item) => item.fieldKey).filter((key) => !!key);
                        o.form.validateFields([...resetDisable, ...resetNoRequired]);
                        o.form.resetFields([...(hasClearSelect ? resetSelect : [])]);
                        //联动第一次渲染的控件，需重新添加值
                        if (formValues && o.firstShowFields && o.firstShowFields.length) {
                            const fieldvalues = {};
                            Object.keys(formValues).forEach((key) => {
                                if (o.firstShowFields.includes(key)) {
                                    fieldvalues[key] = formValues[key];
                                    fieldvalues[`${key}Label`] = formValues[`${key}Label`];
                                }
                            });
                            o.methods.setFieldsValue(fieldvalues);
                            if (!hasSetValue) {
                                hasSetValue = true;
                            }
                        }
                        resolve();
                    });
                }),
            );
        });
    }
    if (asycnpromise.length) {
        return Promise.all(asycnpromise).then(() => {
            if (hasSetValue) {
                typeof onAfterSetFieldsValue === 'function' && onAfterSetFieldsValue();
            }
            return { newFormObjs, asyncFields, hasGroupFirstShow };
        });
    }
    return Promise.resolve({ newFormObjs, asyncFields, hasGroupFirstShow });
}

//处理身份证号码获取生日联动到其他控件：
export function cardGetBirthdayAction({
    cardGetBirthdayKeys,
    seftItem,
    values,
    newFormObjs,
    groups,
    onAfterSetFieldsValue,
}) {
    cardGetBirthdayKeys.forEach((field) => {
        const effective = isSrcFieldEffective(groups, field.srcFieldKey);
        if ((seftItem && seftItem.fieldKey !== field.srcFieldKey) || !effective) return;
        const birthday = values[field.srcFieldKey];
        if (typeof birthday === 'string' && birthday.length > 14) {
            const val = birthday.substring(6, 14);
            // if (newFormObjs.length) {
            //     newFormObjs[0].methods.setFieldsValue({
            //         [field.fieldKey]: stringJoinSyml(val)
            //     });
            // }
            let hasSetValue = false;
            newFormObjs.forEach((o) => {
                const formValues = o.form.getFieldsValue();
                if (field.fieldKey && Object.prototype.hasOwnProperty.call(formValues, field.fieldKey)) {
                    o.methods.setFieldsValue({
                        [field.fieldKey]: stringJoinSyml(val),
                    });
                    if (!hasSetValue) {
                        hasSetValue = true;
                    }
                }
            });
            if (hasSetValue) {
                typeof onAfterSetFieldsValue === 'function' && onAfterSetFieldsValue();
            }
        }
    });
}
//处理地图选点的信息联动到其他控件：
export function regionNameAction({ regionNameKeys, seftItem, values, newFormObjs, groups, onAfterSetFieldsValue }) {
    regionNameKeys.forEach((field) => {
        const effective = isSrcFieldEffective(groups, field.srcFieldKey);
        if ((seftItem && seftItem.fieldKey !== field.srcFieldKey) || !effective) return;
        const info = values[field.srcFieldKey];
        if (dataType.isObject(info) && field.regionName) {
            const regions = field.regionName.split(',');
            let inputString = '';
            regions.forEach((key) => {
                inputString += info[key];
            });
            // if (newFormObjs.length) {
            //     newFormObjs[0].methods.setFieldsValue({
            //         [field.fieldKey]: inputString
            //     });
            // }
            let hasSetValue = false;
            newFormObjs.forEach((o) => {
                const formValues = o.form.getFieldsValue();
                if (field.fieldKey && Object.prototype.hasOwnProperty.call(formValues, field.fieldKey)) {
                    o.methods.setFieldsValue({
                        [field.fieldKey]: inputString,
                    });
                    if (!hasSetValue) {
                        hasSetValue = true;
                    }
                }
            });
            if (hasSetValue) {
                typeof onAfterSetFieldsValue === 'function' && onAfterSetFieldsValue();
            }
        }
    });
}
//处理OCR联动其他控件
export function ocrParamNameAction({ ocrParamNameKeys, seftItem, values, newFormObjs, groups, onAfterSetFieldsValue }) {
    ocrParamNameKeys.forEach((field) => {
        const effective = isSrcFieldEffective(groups, field.srcFieldKey);
        if ((seftItem && seftItem.fieldKey !== field.srcFieldKey) || !effective) return;
        const info = Array.isArray(values[field.srcFieldKey]) ? values[field.srcFieldKey] : [];
        if (dataType.isObject(info[0]) && field.ocrParamName) {
            const ocr = info[0].ocr || {};
            const regions = field.ocrParamName.split(',');
            let inputString = '';
            regions.forEach((key) => {
                inputString += ocr[key];
            });
            // if (newFormObjs.length) {
            //     newFormObjs[0].methods.setFieldsValue({
            //         [field.fieldKey]: inputString
            //     });
            // }
            let hasSetValue = false;
            newFormObjs.forEach((o) => {
                const formValues = o.form.getFieldsValue();
                if (field.fieldKey && Object.prototype.hasOwnProperty.call(formValues, field.fieldKey)) {
                    o.methods.setFieldsValue({
                        [field.fieldKey]: inputString,
                    });
                    if (!hasSetValue) {
                        hasSetValue = true;
                    }
                }
            });
            if (hasSetValue) {
                typeof onAfterSetFieldsValue === 'function' && onAfterSetFieldsValue();
            }
        }
    });
}

function getExpArr({ ageFields, groups, values, seftItem }) {
    const newExpKeys = []; // [{ apiUrl, expression, srcFieldKey, targetKeys }];
    if (ageFields.length) {
        ageFields.forEach((field) => {
            const effective = isSrcFieldEffective(groups, field.srcFieldKey);
            if ((seftItem && seftItem.fieldKey !== field.srcFieldKey) || !effective) return;
            // console.log(field, values, '---=');
            if (values[field.srcFieldKey] !== undefined && values[field.srcFieldKey] !== null) {
                if (field.expressionContent && field.expressionContent.apiUrl) {
                    const finded = newExpKeys.find(
                        (item) =>
                            item.srcFieldKey === field.srcFieldKey &&
                            item.apiUrl === field.expressionContent.apiUrl &&
                            (item.expression === field.expressionContent.expression ||
                                (!item.expression && !field.expressionContent.expression)),
                    );
                    if (finded) {
                        finded.targetKeys.push(field);
                    } else {
                        newExpKeys.push({
                            ...field.expressionContent,
                            srcFieldKey: field.srcFieldKey,
                            targetKeys: [field],
                        });
                    }
                }
            }
        });
    }
    return newExpKeys;
}
function getExpRequest({ newExpKeys, onOneSuccess, values }) {
    const sameKeyPromise = []; //[{srcFieldKey,promises:[]}]
    newExpKeys.forEach((item) => {
        const finded = sameKeyPromise.find((f) => f.srcFieldKey === item.srcFieldKey);
        const onmePromise = item.apiUrl
            ? httpAjax('post', item.apiUrl, {
                  context: values,
                  exp: item.expression,
              }).then((res) => {
                  onOneSuccess && onOneSuccess(res, item);
                  return res;
              })
            : null;
        if (!onmePromise) {
            return;
        }
        if (finded) {
            finded.promises.push(onmePromise);
        } else {
            sameKeyPromise.push({
                srcFieldKey: item.srcFieldKey,
                promises: [onmePromise],
            });
        }
    });
    return sameKeyPromise;
}
//处理运算表达式
export function operationExpAction({ operationExpKeys, seftItem, values, newFormObjs, groups, onAfterSetFieldsValue }) {
    const newExpKeys = getExpArr({ ageFields: operationExpKeys, groups, values, seftItem });
    // console.log(operationExpKeys, newExpKeys, '---');
    if (newExpKeys.length) {
        const sameKeyPromise = getExpRequest({
            values,
            newExpKeys,
            onOneSuccess: (res, item) => {
                let fieldValue = {};
                item.targetKeys.forEach((field) => {
                    if (field.fieldKey) {
                        if (dataType.isObject(res.data)) {
                            if (Object.prototype.hasOwnProperty.call(res.data, field.fieldKey)) {
                                fieldValue[field.fieldKey] = res.data[field.fieldKey];
                            }
                        } else if (res.data) {
                            fieldValue[field.fieldKey] = res.data;
                        }
                    } else if (dataType.isObject(res.data)) {
                        fieldValue = { ...fieldValue, ...res.data };
                    }
                });
                //不是控件触发联动时，已经存在值的控件，是显示并且非禁用的，就不赋值
                if (!seftItem) {
                    Object.keys(fieldValue).forEach((key) => {
                        const field = findField({ groups, fieldKey: key });
                        if (
                            values[key] !== undefined &&
                            values[key] !== null &&
                            field &&
                            field.ref.current &&
                            field.ref.current.itemShowStatus &&
                            !field.disabled
                        ) {
                            delete fieldValue[key];
                        }
                    });
                }

                newFormObjs.forEach((o) => {
                    o.methods.setFieldsValue(fieldValue);
                });
                typeof onAfterSetFieldsValue === 'function' && onAfterSetFieldsValue();
            },
        });
        if (seftItem) {
            return Promise.all(sameKeyPromise.reduce((total, curr) => [...total, ...curr.promises], []));
        }
        sameKeyPromise.forEach((item) => {
            newFormObjs.forEach((o) => {
                o.methods.changeFormItems({ key: item.srcFieldKey, loading: true }, true);
            });
            Promise.all(item.promises).finally(() => {
                newFormObjs.forEach((o) => {
                    o.methods.changeFormItems({ key: item.srcFieldKey, loading: false }, true);
                });
            });
        });
    }
    return Promise.resolve();
}
//处理校验表达式
export function validationExpAction({ validationExpKeys, seftItem, values, newFormObjs, groups }) {
    const newExpKeys = getExpArr({ ageFields: validationExpKeys, groups, values, seftItem });

    if (newExpKeys.length) {
        const errors = [];
        const sameKeyPromise = getExpRequest({
            values,
            newExpKeys,
            onOneSuccess: (res, item) => {
                if (!dataType.isBoolean(res.data) || !res.data) {
                    if (!dataType.isBoolean(res.data)) {
                        console.error(`校验表达式${item.expression}返回的不是boolean类型的值，请纠正`);
                    }
                    const finded = errors.find((f) => f.srcFieldKey === item.srcFieldKey);
                    if (finded) {
                        finded.errorMsgs.push(item.expressionErrorMsg);
                    } else {
                        errors.push({
                            srcFieldKey: item.srcFieldKey,
                            errorMsgs: [item.expressionErrorMsg],
                        });
                    }
                }
            },
        });

        return new Promise((resolve, reject) => {
            Promise.all(sameKeyPromise.reduce((total, curr) => [...total, ...curr.promises], []))
                .then(() => {
                    if (errors.length) {
                        const val = errors.reduce(
                            (total, err) => ({
                                ...total,
                                [err.srcFieldKey]: {
                                    value: values[err.srcFieldKey],
                                    errors: err.errorMsgs.map((msg) => new Error(msg)),
                                },
                            }),
                            {},
                        );
                        if (newFormObjs.length) {
                            newFormObjs[0].methods.setFields(val);
                        }

                        reject(errors);
                    } else {
                        resolve();
                    }
                })
                .catch(reject);
        });
    }
    return Promise.resolve();
}
export function onChangeTonExpAction({
    validationExpKeys,
    operationExpKeys,
    seftItem,
    values,
    newFormObjs,
    groups,
    onAfterSetFieldsValue,
}) {
    if (!validationExpKeys.length && !operationExpKeys.length) {
        return;
    }
    const srcKeys = seftItem
        ? [seftItem.key]
        : [...operationExpKeys, ...validationExpKeys]
              .map((item) => item.srcFieldKey)
              .filter((key) => isSrcFieldEffective(groups, key));
    newFormObjs.forEach((o) => {
        srcKeys.forEach((key) => {
            o.methods.changeFormItems({ key, loading: true }, true);
        });
    });

    Promise.all([
        operationExpAction({ operationExpKeys, seftItem, values, newFormObjs, groups, onAfterSetFieldsValue }),
        validationExpAction({ validationExpKeys, seftItem, values, newFormObjs, groups }),
    ]).finally(() => {
        newFormObjs.forEach((o) => {
            srcKeys.forEach((key) => {
                o.methods.changeFormItems({ key, loading: false }, true);
            });
        });
    });
}
//提交时执行校验表达联动
export function doValidationExpAction({ ages, getGroupsFn, seftItem, extraValue }) {
    ages = dataType.isArray(ages) ? ages : [];
    if (!ages.length) return Promise.resolve();
    const { values, groups, formObjs } = getAllGroupsFormValues(getGroupsFn, extraValue);

    // console.log(values, '-----------------------99999');
    const { validationExpKeys } = matchLinkages({ ages, values });
    return validationExpAction({ validationExpKeys, seftItem, values, newFormObjs: formObjs, groups });
}
function findField({ groups, fieldKey }) {
    let field = null;
    for (let index = 0; index < groups.length; index++) {
        const g = groups[index];
        if (g.groupRef.current.getIsFirstShow()) {
            const o = g.groupRef.current.getForm();
            const formItems = (o.form && o.form.zformItems) || [];
            const srcItem = formItems.find((item) => item.key === fieldKey);
            if (srcItem) {
                field = srcItem;
                break;
            }
        }
    }
    return field;
}
//执行异步获取选项
export function asyncFieldsAction({ asyncFields, seftItem, getGroupsFn, ages, newFormObjs, groups, controls }) {
    asyncFields.forEach((field) => {
        const effective = isSrcFieldEffective(groups, field.srcFieldKey);
        if ((seftItem && seftItem.fieldKey !== field.srcFieldKey) || !effective) return;
        newFormObjs.forEach((o) => {
            // console.log(o.group.name, field.groupName);
            if (o.group.name === field.groupName) {
                o.methods.changeFormItems({ key: field.fieldKey, loading: true }, true);
                // const currField = findField({ groups, fieldKey: field.fieldKey });
                controls[field.fieldType]
                    .getControl(field, ages, getGroupsFn, { isAsync: true }, undefined, o.form)
                    .then((control) => {
                        const formItems = (o.form && o.form.zformItems) || [];
                        const srcItem = formItems.find((item) => item.key === field.fieldKey);
                        o.methods.changeFormItems(
                            {
                                key: field.fieldKey,
                                disabled:
                                    srcItem && srcItem.ref.current
                                        ? srcItem.ref.current.state.disabled
                                        : !!field.disabled,
                                loading: false,
                                newItem: { control },
                            },
                            true,
                        );
                    })
                    .catch(() => {
                        o.methods.changeFormItems({ key: field.fieldKey, loading: false }, true);
                    });
            }
        });
    });
}
//表单初始化后执行联动
export const initialValueLinkageAction = debounce(
    ({ ages, getGroupsFn, seftItem, extraValue, formValues, onAfterSetFieldsValue, getExtendComponents }) => {
        ages = dataType.isArray(ages) ? ages : [];
        // console.log(ages, getGroupsFn, seftItem);
        if (!ages.length) return;
        const controls = getAllControls({ getExtendComponents });
        const { values: val, groups } = getAllGroupsFormValues(getGroupsFn, extraValue);
        let values = val;
        // console.log(values, '-----------------------99999');
        const {
            cardGetBirthdayKeys,
            asyncParamNameKeys,
            regionNameKeys,
            ocrParamNameKeys,
            groupHiddenKeys,
            groupShowKeys,
            hiddenKeys,
            showKeys,
            disabledKeys,
            enabledKeys,
            requiredKeys,
            noRequiredKeys,
            selectOptions,
            hasClearSelect,
            validationExpKeys,
            operationExpKeys,
        } = matchLinkages({ ages, values, seftItem });

        universalAction({
            asyncParamNameKeys,
            groupHiddenKeys,
            groupShowKeys,
            hiddenKeys,
            showKeys,
            disabledKeys,
            enabledKeys,
            requiredKeys,
            noRequiredKeys,
            selectOptions,
            hasClearSelect,
            groups,
            seftItem,
            values,
            ages,
            getGroupsFn,
            formValues,
            onAfterSetFieldsValue,
            getExtendComponents,
            controls,
        }).then(({ newFormObjs, asyncFields, hasGroupFirstShow }) => {
            // 如果发现需要第一次显示渲染的组，就不再往下走，等这个组渲染完会重新进入 initialValueLinkageAction
            if (hasGroupFirstShow) {
                return;
            }
            //存在显示/隐藏的联动，重新获取表单值
            if (hiddenKeys.length || showKeys.length) {
                const { values: val } = getAllGroupsFormValues(getGroupsFn, extraValue);
                values = val;
            }
            asyncFieldsAction({ asyncFields, seftItem, getGroupsFn, newFormObjs, ages, groups, controls });
            cardGetBirthdayAction({
                cardGetBirthdayKeys,
                seftItem,
                values,
                newFormObjs,
                groups,
                onAfterSetFieldsValue,
            });
            regionNameAction({ regionNameKeys, seftItem, values, newFormObjs, groups, onAfterSetFieldsValue });
            ocrParamNameAction({ ocrParamNameKeys, seftItem, values, newFormObjs, groups, onAfterSetFieldsValue });

            onChangeTonExpAction({
                validationExpKeys,
                operationExpKeys,
                seftItem,
                values,
                newFormObjs,
                groups,
                onAfterSetFieldsValue,
            });
        });
    },
    60,
);
function stringJoinSyml(str) {
    return str.length === 8 ? `${str.substring(0, 4)}-${str.substring(4, 6)}-${str.substring(6, 8)}` : '';
}
//自动勾选selected选项
export const autoCheckedBySelected = debounce(
    ({ ages, getGroupsFn, onFinally, onAfterSetFieldsValue, getExtendComponents, seftItem, extraValue }) => {
        const controls = getAllControls({ getExtendComponents });
        ages = dataType.isArray(ages) ? ages : [];
        const groups = getGroupsFn();
        let hasSetValue = false;
        groups.forEach((g) => {
            const currentForm = g.groupRef.current.getForm();

            if (!g.groupRef.current.getShowState()) {
                return;
            }
            g.groupRef.current.getFormItems().forEach((field) => {
                const config = parseJsonToObject(field.config);

                const options = currentForm.form.saveFieldOptions[field.fieldKey];
                const zformItem = currentForm.form.zformItems.find((item) => item.key === field.fieldKey);
                if (!zformItem) {
                    return;
                }
                const currentValue = currentForm.form.getFieldValue(field.fieldKey);
                if (options && options.length) {
                    const hasValue =
                        (currentValue !== undefined &&
                            currentValue !== null &&
                            currentValue !== '' &&
                            !Array.isArray(currentValue)) ||
                        (Array.isArray(currentValue) && currentValue.length);
                    if (hasValue) return;
                    const multiple = ['multiple', 'tags'].includes(config.mode);
                    let newValue = null;
                    const selectedValue = options
                        .filter(
                            (item) =>
                                // if (item.selected && multiple) {
                                //     item.disabled = true;
                                // }
                                item.selected,
                        )
                        .map((item) => item.value);

                    if (field.fieldType === 9 || (field.fieldType === 3 && !multiple)) {
                        newValue = selectedValue[0];
                    } else if (field.fieldType === 8 || (field.fieldType === 3 && multiple)) {
                        newValue = selectedValue;
                    }
                    if (newValue) {
                        const currentStateItem = zformItem.ref.current.state.item;
                        const originProps = {};
                        if (currentStateItem.control.props) {
                            Object.keys(currentStateItem.control.props).forEach((key) => {
                                if (!['children', 'value', 'onChange', 'disabled'].includes(key)) {
                                    originProps[key] = currentStateItem.control.props[key];
                                }
                            });
                        }
                        currentForm.methods.changeFormItems(
                            {
                                key: field.fieldKey,
                                newItem: {
                                    control: controls[field.fieldType].getControl(
                                        field,
                                        ages,
                                        getGroupsFn,
                                        { ...originProps, isAsync: false },
                                        undefined,
                                        currentForm.form,
                                    ),
                                },
                            },
                            true,
                        );
                        currentForm.methods.setFieldsValue({
                            [field.fieldKey]: newValue,
                        });
                        if (!hasSetValue) {
                            hasSetValue = true;
                        }
                    }
                } else if (
                    [3, 8, 9].includes(field.fieldType) &&
                    g.groupRef.current.getIsFirstShow() &&
                    zformItem.ref.current.state.firstShow &&
                    currentValue
                ) {
                    let values = currentValue;
                    let labels = currentForm.form.saveSettingValues[`${field.fieldKey}Label`];
                    const multiple = ['multiple', 'tags'].includes(config.mode);
                    if (field.fieldType === 9 || (field.fieldType === 3 && !multiple)) {
                        values = [values];
                        labels = labels ? [labels] : values;
                    } else if (field.fieldType === 8 || (field.fieldType === 3 && multiple)) {
                        values = Array.isArray(values) ? values : [values];
                        labels = Array.isArray(labels) ? labels : values;
                    }
                    const currentStateItem = zformItem.ref.current.state.item;
                    const originProps = {};
                    if (currentStateItem.control.props) {
                        Object.keys(currentStateItem.control.props).forEach((key) => {
                            if (!['children', 'value', 'onChange', 'disabled'].includes(key)) {
                                originProps[key] = currentStateItem.control.props[key];
                            }
                        });
                    }
                    currentForm.methods.changeFormItems(
                        {
                            key: field.fieldKey,
                            newItem: {
                                control: controls[field.fieldType].getControl(
                                    field,
                                    ages,
                                    getGroupsFn,
                                    {
                                        ...originProps,
                                        noAsync: true,
                                        isAsync: false,
                                        selectList: values.map((val, i) => ({
                                            [config.selectListFieldNames.label]: labels[i] || val,
                                            [config.selectListFieldNames.value]: val,
                                        })),
                                    },
                                    undefined,
                                    currentForm.form,
                                ),
                            },
                        },
                        true,
                    );
                }
            });
        });
        if (hasSetValue) {
            typeof onAfterSetFieldsValue === 'function' && onAfterSetFieldsValue();
        }
        onFinally && onFinally();
    },
    60,
);
//控件值改变触发联动
export const doLinkageAction = debounce(
    ({ ages, getGroupsFn, seftItem, extraValue, onAfterSetFieldsValue, getExtendComponents }) => {
        ages = dataType.isArray(ages) ? ages : [];
        if (!ages.length || !seftItem || !getGroupsFn) return;
        const controls = getAllControls({ getExtendComponents });
        const { values: val, groups, formObjs: f } = getAllGroupsFormValues(getGroupsFn, extraValue);
        let values = val;
        let formObjs = f;
        let _asyncFields = [];

        const {
            cardGetBirthdayKeys,
            asyncParamNameKeys,
            regionNameKeys,
            ocrParamNameKeys,
            groupHiddenKeys,
            groupShowKeys,
            hiddenKeys,
            showKeys,
            disabledKeys,
            enabledKeys,
            requiredKeys,
            noRequiredKeys,
            selectOptions,
            hasClearSelect,
            operationExpKeys,
            validationExpKeys,
        } = matchLinkages({ ages, values, seftItem });
        // console.log(ages, requiredKeys, noRequiredKeys, 'noRequiredKeys');
        const doUniversal = () =>
            new Promise((resolve, reject) => {
                universalAction({
                    asyncParamNameKeys,
                    groupHiddenKeys,
                    groupShowKeys,
                    hiddenKeys,
                    showKeys,
                    disabledKeys,
                    enabledKeys,
                    requiredKeys,
                    noRequiredKeys,
                    selectOptions,
                    hasClearSelect,
                    groups,
                    seftItem,
                    values,
                    ages,
                    getGroupsFn,
                    onAfterSetFieldsValue,
                    controls,
                })
                    .then(({ newFormObjs, asyncFields, hasGroupFirstShow }) => {
                        formObjs = newFormObjs;
                        _asyncFields = asyncFields;
                        if (hasGroupFirstShow) {
                            reject();
                            return;
                        }
                        //存在显示/隐藏的联动，重新获取表单值
                        if (hiddenKeys.length || showKeys.length) {
                            const { values: val } = getAllGroupsFormValues(getGroupsFn, extraValue);
                            values = val;
                        }
                        resolve({ values });
                    })
                    .catch(reject);
            });

        switch (seftItem.fieldType) {
            case 1:
            case 2:
            case 14:
            case 17:
            case 18:
                // 如果发现需要第一次显示渲染的组，就不再往下走，等这个组渲染完会重新进入 initialValueLinkageAction
                doUniversal()
                    .then(({ values }) => {
                        cardGetBirthdayAction({
                            cardGetBirthdayKeys,
                            seftItem,
                            values,
                            newFormObjs: formObjs,
                            groups,
                            onAfterSetFieldsValue,
                        });
                        onChangeTonExpAction({
                            validationExpKeys,
                            operationExpKeys,
                            seftItem,
                            values,
                            newFormObjs: formObjs,
                            groups,
                            onAfterSetFieldsValue,
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                    });

                break;
            case 4:
            case 5:
            case 21:
                doUniversal()
                    .then(({ values }) => {
                        onChangeTonExpAction({
                            validationExpKeys,
                            operationExpKeys,
                            seftItem,
                            values,
                            newFormObjs: formObjs,
                            groups,
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                    });
                break;
            case 3:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                doUniversal()
                    .then(({ values }) => {
                        asyncFieldsAction({
                            asyncFields: _asyncFields,
                            seftItem,
                            getGroupsFn,
                            newFormObjs: formObjs,
                            ages,
                            groups,
                            controls,
                        });
                        onChangeTonExpAction({
                            validationExpKeys,
                            operationExpKeys,
                            seftItem,
                            values,
                            newFormObjs: formObjs,
                            groups,
                        });
                        autoCheckedBySelected({ ages, getGroupsFn, onAfterSetFieldsValue, getExtendComponents });
                    })
                    .catch((err) => {
                        console.error(err);
                    });
                break;
            case 13:
                regionNameAction({
                    regionNameKeys,
                    seftItem,
                    values,
                    newFormObjs: formObjs,
                    groups,
                    onAfterSetFieldsValue,
                });
                break;
            case 11:
            case 16:
                ocrParamNameAction({
                    ocrParamNameKeys,
                    seftItem,
                    values,
                    newFormObjs: formObjs,
                    groups,
                    onAfterSetFieldsValue,
                });
                break;
            default:
        }
    },
    60,
);

export default initialValueLinkageAction;
