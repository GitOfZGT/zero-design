/*
 * @Author: zgt
 * @Date: 2019-03-29 12:10:53
 * @LastEditors: zgt
 * @LastEditTime: 2019-09-29 19:55:45
 * @Description: file content
 */
import React, { useEffect, useRef, useCallback } from "react";
import { dataType } from "../zTool";
import { Button } from "antd";
import linkageAction, { autoCheckedBySelected } from "./linkageAction";
import { pareLinkages } from "./common";
//返回获取最新formGroups的callback
export function useGetGroupsCallback(formGroups) {
	const groupsRef = useRef();
	useEffect(() => {
		groupsRef.current = formGroups;
	}, [formGroups]);

	return useCallback(() => {
		return groupsRef.current;
	}, [groupsRef.current]);
}
//返回执行linkageAction的callback
export function useLinkageCallback(formData, getGroupsFn) {
	const doLinkage = useCallback(
		selfItem => {
			if (formData) {
				const linkages = pareLinkages(formData.linkages);
				autoCheckedBySelected(linkages, getGroupsFn);
				linkageAction(linkages, getGroupsFn, selfItem);
			}
		},
		[getGroupsFn, formData],
	);
	return doLinkage;
}
//返回获取formGroups中非隐藏的forms的callback
export function useGetOtherFormsCallback(formGroups) {
	return useCallback(
		currentForm => {
			const forms = Array.isArray(formGroups)
				? formGroups.filter(g => {
						if (!g.groupRef.current) {
							return false;
						}
						const o = g.groupRef.current.getForm();
						return currentForm !== o.form && g.groupRef.current.getShowState();
				  })
				: [];

			return forms.map(g => g.groupRef.current.getForm().form);
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
		e => {
			const subForm = getEachFormMethod(formGroups);
			if (subForm) {
				subForm.methods.onSubmit(e);
			}
		},
		[formGroups],
	);
}
const buttonType = {
	1: "primary",
	2: "default",
	3: "dashed",
	4: "danger",
};
//返回渲染提交按钮的函数
export function useSubmitBtn(formData, formGroups) {
	const doSubmit = useDoSubmitCallback(formGroups);
	return useCallback(() => {
		return formData && dataType.isArray(formData.buttonList) ? (
			<div className="z-padding-bottom-20 z-text-center">
				{formData.buttonList.map(e => {
					return (
						<Button key={e.value} type={buttonType[e.buttonType]} onClick={doSubmit}>
							{e.value}
						</Button>
					);
				})}
			</div>
		) : null;
	}, [formData, doSubmit]);
}
