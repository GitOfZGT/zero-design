/*
 * @Author: zgt
 * @Date: 2019-03-29 12:10:53
 * @LastEditors: zgt
 * @LastEditTime: 2019-09-29 19:55:45
 * @Description: file content
 */
import React, { useEffect, useRef, useCallback } from 'react';
import { dataType } from '../zTool';
import { Button } from 'antd';
import linkageAction, { autoCheckedBySelected, doValidationExpAction } from './linkageAction';
import { pareLinkages } from './common';
//返回获取最新formGroups的callback
export function useGetGroupsCallback(formGroups) {
    const groupsRef = useRef();
    useEffect(() => {
        groupsRef.current = formGroups;
    }, [formGroups]);

    return useCallback(() => groupsRef.current, []);
}
//返回执行linkageAction的callback
export function useLinkageCallback(formData, getGroupsFn, getExtendComponents) {
    const doLinkage = useCallback(
        ({ selfItem, extraValue, formValues }) => {
            if (formData) {
                const linkages = pareLinkages(formData.linkages);
                autoCheckedBySelected({
                    ages: linkages,
                    getGroupsFn,
                    extraValue,
                    onFinally: () => {
                        linkageAction({
                            ages: linkages,
                            getGroupsFn,
                            selfItem,
                            extraValue,
                            formValues,
                            getExtendComponents,
                        });
                    },
                    getExtendComponents,
                });
            }
        },
        [formData, getGroupsFn, getExtendComponents],
    );
    return doLinkage;
}
//返回获取formGroups中非隐藏的forms的callback
export function useGetOtherFormsCallback(formGroups) {
    return useCallback(
        (currentForm) => {
            const forms = Array.isArray(formGroups)
                ? formGroups.filter((g) => {
                      if (!g.groupRef.current) {
                          return false;
                      }
                      const o = g.groupRef.current.getForm();
                      //排除不显示的组和当前触发校验的组（zform内已包含了当前组的form）
                      return currentForm !== o.form && g.groupRef.current.getShowState();
                  })
                : [];

            return forms.map((g) => g.groupRef.current.getForm().form);
        },
        [formGroups],
    );
}

export function getEachFormMethod(formGroups, isAll) {
    let subForm = isAll ? [] : null;
    for (let index = 0; index < formGroups.length; index++) {
        const g = formGroups[index];
        if (g.groupRef.current.getShowState()) {
            if (isAll) {
                subForm.push(g.groupRef.current.getForm());
            } else {
                subForm = g.groupRef.current.getForm();
                break;
            }
        }
    }
    return subForm;
}

//返回执行formGroups中任意一个非隐藏的onSubmit的callback
export function useDoSubmitCallback(formGroups) {
    return useCallback(
        (e) => {
            const subForm = getEachFormMethod(formGroups);
            if (subForm) {
                subForm.methods.onSubmit(e);
            }
        },
        [formGroups],
    );
}
const buttonType = {
    1: 'primary',
    2: 'default',
    3: 'dashed',
    4: 'danger',
};
//返回渲染提交按钮的函数
export function useSubmitBtn(formData, formGroups) {
    const doSubmit = useDoSubmitCallback(formGroups);
    return useCallback(
        () =>
            formData && dataType.isArray(formData.buttonList) ? (
                <div className="z-padding-bottom-20 z-text-center">
                    {formData.buttonList.map((e) => (
                        <Button key={e.value} type={buttonType[e.buttonType]} onClick={doSubmit}>
                            {e.value}
                        </Button>
                    ))}
                </div>
            ) : null,
        [formData, doSubmit],
    );
}

export function useValidated(formData, getGroupsFn, setCommitLoading, extraValue) {
    return useCallback(() => {
        const linkages = pareLinkages(formData.linkages);
        setCommitLoading(true);
        return new Promise((resolve, reject) => {
            doValidationExpAction({ ages: linkages, getGroupsFn, extraValue })
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    setCommitLoading(false);
                });
        });
    }, [extraValue, formData.linkages, getGroupsFn, setCommitLoading]);
}
