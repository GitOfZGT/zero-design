/*
 * @Author: zgt
 * @Date: 2019-05-18 14:14:29
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-12 15:55:32
 * @Description: file content
 */
import React from 'react';
import { dataType, httpAjax, parseJsonToObject } from '../zTool';

import { getOptionsRules, getAllControls } from './controls';

import { doLinkageAction as doLinkageActionDefault } from './linkageAction';

export const regionNames = [
    { label: '省份', value: 'province' },
    { label: '城市', value: 'city' },
    { label: '区', value: 'district' },
    { label: '街道', value: 'street' },
    { label: '省市', value: 'province,city' },
    { label: '省市区', value: 'province,city,district' },
    { label: '省市区街道', value: 'province,city,district,street' },
];
export const ocrFieldNames = [
    { label: '姓名', value: 'name' },
    { label: '性别', value: 'sex' },
    { label: '民族', value: 'national' },
    { label: '出生日期', value: 'born' },
    { label: '地址', value: 'address' },
    { label: '证件号码', value: 'idCard' },
    { label: '年龄', value: 'age' },
];

export const labelShowTags = [
    {
        label: '不显示组名',
        value: 0,
    },
    {
        label: '默认组名样式',
        value: 1,
    },
    // {
    //     label: '修饰符组名样式',
    //     value: 2,
    // },
];
//以 "seq" 字段排序
function sortList(o1, o2) {
    const v1 = Object.prototype.hasOwnProperty.call(o1, 'seq') ? o1['seq'] : 0;
    const v2 = Object.prototype.hasOwnProperty.call(o2, 'seq') ? o2['seq'] : 0;
    return v1 - v2;
}

export function pareLinkages(linkages) {
    if (Array.isArray(linkages)) {
        return linkages;
    } else if (typeof linkages === 'string' && /^\[.+/.test(linkages)) {
        return JSON.parse(linkages);
    }
    return [];
}
//单个formItem
export function getFormItem({
    field,
    group,
    linkages,
    getGroupsFn,
    imperative,
    customOnChange,
    customFormRules,
    customControlRender,
    noAsync,
    extraValue,
    groupConfig,
    initialValues,
    allDisabled,
    getMultiRowFormData,
    doLinkageAction,
    getExtendComponents,
}) {
    const getRules = dataType.isObject(customFormRules) ? customFormRules[field.fieldKey] : null;
    const config = parseJsonToObject(field.config);
    // console.log(config);
    const labelShowTag = typeof field.labelShowTag === 'number' ? field.labelShowTag : 1;
    const newField = {
        ...field,
        disabled: allDisabled ? 1 : field.disabled,
        show: linkages === null ? true : !field.hidden,
        groupId: group.id || group.name,
        groupName: group.name,
        key: field.fieldKey,
        label: linkages === null ? field.label : labelShowTag === 0 ? '' : labelShowTag === 3 ? false : field.label,
        labelShowTag,
        labelWidth: config.labelWidth || groupConfig.labelWidth,
        hiddenRendering: config.hiddenRendering,
        span: field.span || 8,
        tagName:
            Array.isArray(field.tagName) && field.tagName.length
                ? field.tagName
                : Array.isArray(config.tagName)
                ? config.tagName
                : [],
        // labelFocused: [5, 8, 9, 10, 11, 14, 15, 16].includes(field.fieldType),
        labelFocused: true,
        imperative,
        customOnChange,
        customFormRules,
        customControlRender,
        initialValue:
            initialValues && initialValues[field.fieldKey] ? initialValues[field.fieldKey] : field.initialValue,
        doLinkageAction,
        getExtendComponents,
    };
    if (!customControlRender && field.fieldType === 14) {
        newField.isFormItem = true;
    }

    const controls = getAllControls({ getExtendComponents });

    newField.options = controls[field.fieldType].getOptions(
        newField,
        typeof getRules === 'function' ? getRules(newField, imperative) : [],
        getOptionsRules,
    );

    newField.render = (currentForm) => {
        const re = controls[newField.fieldType].getControl(
            newField,
            linkages,
            getGroupsFn,
            { noAsync, extraValue, getMultiRowFormData },
            undefined,
            currentForm,
        );
        return re;
    };
    return newField;
}
//从item.formFieldInfoList生成Zform的items
export function getGroupItem(opt = {}, index) {
    const { group, labelLayout, groupLayout } = opt;
    const groupConfig = parseJsonToObject(group.config);
    const formItems = group.formFieldInfoList.map((field) =>
        getFormItem({
            field,
            ...opt,
            groupConfig,
        }),
    );
    formItems.sort(sortList);
    const labelShowTag = typeof group.labelShowTag === 'number' ? group.labelShowTag : 1;

    return {
        additive: group.additive, //添加状态
        groupRef: React.createRef(),
        seq: group.seq,
        id: group.id || group.name,
        name: group.name,
        panelHeaderShow: opt.linkages === null ? 1 : labelShowTag,
        labelShowTag,
        groupLayout,
        formItems,
        labelLayout,
        config: groupConfig,
        hidden: group.hidden,
        show: opt.linkages === null ? index === 0 : !group.hidden,
    };
}
//从formData生成group数据
export function translateGroups({
    formData,
    getGroupsFn,
    linkage,
    imperative,
    customOnChange,
    customFormRules,
    customControlRender,
    noAsync,
    extraValue,
    allDisabled,
    getMultiRowFormData,
    getExtendComponents,
    doLinkageAction,
}) {
    if (dataType.isObject(formData) && Array.isArray(formData.sectionList)) {
        let formDataConf = parseJsonToObject(formData.config);
        formDataConf = dataType.isObject(formDataConf) ? formDataConf : {};
        const getGroups = (initialValues) => {
            const linkages = pareLinkages(formData.linkages);
            const groups = formData.sectionList.map((group, index) =>
                getGroupItem(
                    {
                        group,
                        linkages: linkage ? linkages : null,
                        getGroupsFn,
                        imperative,
                        customOnChange: customOnChange || formData.customOnChange,
                        customFormRules: customFormRules || formData.customFormRules,
                        customControlRender: customControlRender || formData.customControlRender,
                        labelLayout: formData.labelLayout,
                        noAsync,
                        extraValue,
                        initialValues,
                        allDisabled,
                        getMultiRowFormData,
                        doLinkageAction:
                            typeof doLinkageAction === 'function' ? doLinkageAction : doLinkageActionDefault,
                        groupLayout: formDataConf.groupLayout,
                        getExtendComponents,
                    },
                    index,
                ),
            );

            groups.sort(sortList);
            return groups;
        };

        if (dataType.isObject(formDataConf.initialValueApi) && linkage) {
            const { urlMethod, url } = formDataConf.initialValueApi;
            if (urlMethod && url) {
                return httpAjax(urlMethod, url, extraValue || {})
                    .then((res) => getGroups(dataType.isObject(res.data) ? res.data : {}))
                    .catch((res) => getGroups({}));
            }
        }
        return Promise.resolve(getGroups({}));
    }
    return Promise.resolve([]);
}
//移除linkageRef对应fieldKey的联动配置
export function removeSomeLinkage(linkageRef, fieldKey) {
    if (!Array.isArray(linkageRef.current)) {
        return;
    }
    const newAges = [];
    linkageRef.current.forEach((age) => {
        if (age.src.fieldKey && age.src.fieldKey === fieldKey) {
            return;
        }
        age.dist.forEach((d) => {
            if (d.srcKey && d.srcKey === fieldKey) {
                d.srcKey = '';
            }
            if (Array.isArray(d.fields)) {
                d.fields.forEach((f) => {
                    if (f.fieldKey && f.fieldKey === fieldKey) {
                        f.fieldKey = '';
                    }
                });
            }
        });
        newAges.push(age);
    });
    linkageRef.current = newAges;
}
//fieldKey改变时，调整联动配置里面对应的fieldKey
export function changeLinkageField(linkageRef, prevItem, currItem) {
    if (!Array.isArray(linkageRef.current)) {
        return;
    }

    linkageRef.current.forEach((age) => {
        if (age.src.fieldKey && age.src.fieldKey === prevItem.fieldKey) {
            age.src.fieldKey = currItem.fieldKey;
            age.src.fieldType = currItem.fieldType;
            age.src.label = currItem.label;
        }
        age.dist.forEach((d) => {
            if (d.srcKey && d.srcKey === prevItem.fieldKey) {
                d.srcKey = currItem.fieldKey;
            }
            if (
                d.expressionContent &&
                typeof d.expressionContent.expression === 'string' &&
                d.expressionContent.expression.includes(`${prevItem.fieldKey}`)
            ) {
                d.expressionContent.expression = d.expressionContent.expression.replace(
                    new RegExp(`${prevItem.fieldKey}`, 'gi'),
                    `${currItem.fieldKey}`,
                );
            }
            if (Array.isArray(d.fields)) {
                d.fields.forEach((f) => {
                    if (f.fieldKey && f.fieldKey === prevItem.fieldKey) {
                        f.fieldKey = currItem.fieldKey;
                        f.fieldType = currItem.fieldType;
                        f.label = currItem.label;
                    }
                });
            }
        });
    });
}

export function treeDataAddKey(tree = [], distMap, srcMap, isLeaf) {
    const distKey = Object.assign({ label: 'label', value: 'value', children: 'children', key: 'key' }, distMap || {});
    const srcKey = Object.assign({ label: 'label', value: 'value', children: 'children' }, srcMap || {});
    return Array.isArray(tree)
        ? tree.map((item) => {
              const ciilds = treeDataAddKey(item[srcKey.children], distKey, srcKey, isLeaf);
              return {
                  ...item,
                  [srcKey.children]: null,
                  [distKey.label]: item[srcKey.label],
                  [distKey.value]: item[srcKey.value],
                  [distKey.children]: ciilds.length ? ciilds : null,
                  [distKey.key]: item[srcKey.value],
                  isLeaf,
              };
          })
        : [];
}
