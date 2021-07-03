import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import { dataType } from '../zTool';
import PropTypes from 'prop-types';
import {
    useGetGroupsCallback,
    useLinkageCallback,
    useGetOtherFormsCallback,
    // useSubmitBtn,
    getEachFormMethod,
    useDoSubmitCallback,
    useValidated,
} from './customHook';
import FormGroup from './FormGroup';
import { translateGroups } from './common';
import './style.scss';
import FormGroupContext from './FormGroupContext';
import { Row, Col } from 'antd';
//formData: {id:1,name:"表",labelLayout:"",code:"dog_check_in_form",sectionList: [{id:"12",name:"名称",seq:1,formFieldInfoList:[{config:"{}",fieldKey:"name",fieldType:1,id:333,initialValue:"",label:"名称",required:1,span:8,regularExpression:null,seq:1,placeholder:"",errorMsg:""}]}]}
const FormViewer = React.forwardRef(
    (
        {
            formData,
            formValues,
            onSubmit,
            groupTitleLeftRender,
            groupTitleRightRender,
            className,
            groupClassName,
            onFormGroupsChange,
            linkage,
            groupChildrenRender,
            submitBtnRender,
            title,
            style,
            momentFormat,
            booleanToNumber,
            afterItemsRendered,
            customOnChange,
            customFormRules,
            customControlRender,
            noAsync,
            extraValue,
            allDisabled,
            getMultiRowFormData,
            getExtendComponents,
            confirm,
        },
        ref,
    ) => {
        const _linkage = dataType.isBoolean(linkage) ? linkage : true;
        const [formGroups, setFormGroups] = useState([]);
        const [initMsg, setInitMsg] = useState('表单初始化中...');
        const getOtherForms = useGetOtherFormsCallback(formGroups);
        // const submitBtnRender = useSubmitBtn(formData, formGroups);
        const getGroupsFn = useGetGroupsCallback(formGroups);
        const doSubmit = useDoSubmitCallback(formGroups);
        const imperativeRef = useRef();
        imperativeRef.current = () => ({
            getFormGroups: () => formGroups,
            setFormGroups,
            getEachFormMethod: () => getEachFormMethod(formGroups, true),
            doSubmit,
        });
        const allFormRenderedRef = useRef(0);
        const multiRowMethodsRef = useRef({});
        //formData改变时==>处理数据
        useEffect(() => {
            allFormRenderedRef.current = 0;
            multiRowMethodsRef.current = {};
            translateGroups({
                formData,
                getGroupsFn,
                linkage: _linkage,
                imperative: imperativeRef,
                customOnChange,
                customFormRules,
                customControlRender,
                noAsync,
                extraValue,
                allDisabled,
                getMultiRowFormData,
                getExtendComponents,
            }).then((newGroups) => {
                setInitMsg('');
                setFormGroups(newGroups);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [formData, allDisabled]);
        //formGroups改变时==>调用onFormGroupsChange
        useEffect(() => {
            dataType.isFunction(onFormGroupsChange) && onFormGroupsChange(formGroups);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [formGroups]);
        const [commitLoading, setCommitLoading] = useState(false);
        const doLinkage = _linkage ? useLinkageCallback(formData, getGroupsFn, getExtendComponents) : null;
        const onValidated = _linkage ? useValidated(formData, getGroupsFn, setCommitLoading, extraValue) : null;
        useImperativeHandle(ref, imperativeRef.current);
        const titleText =
            dataType.isBoolean(title) && !title ? '' : title || (formData && formData.name ? formData.name : '');

        const formGroupTitleLeftRender = useCallback(
            (group, groupAttr, setGroupAttr) => groupTitleLeftRender(group, groupAttr, setGroupAttr, formGroups),
            [formGroups, groupTitleLeftRender],
        );
        const formGroupTitleRightRender = useCallback(
            (group, groupAttr, setGroupAttr) => groupTitleRightRender(group, groupAttr, setGroupAttr, formGroups),
            [formGroups, groupTitleRightRender],
        );
        const formGroupAfterItemsRendered = useCallback(() => {
            allFormRenderedRef.current++;
            const visibleGroups = formGroups.filter((g) => g.groupRef.current && g.groupRef.current.getIsFirstShow());
            if (allFormRenderedRef.current > visibleGroups.length) {
                allFormRenderedRef.current = visibleGroups.length;
            }
            if (allFormRenderedRef.current === visibleGroups.length) {
                doLinkage && doLinkage({ extraValue, formValues });
                afterItemsRendered && afterItemsRendered(imperativeRef);
            }
        }, [formGroups, doLinkage, extraValue, formValues, afterItemsRendered]);

        const getFormOtherFieldsValue = useCallback((isValid) => {
            if (isValid === 'asyncValid') {
                return Promise.all(
                    Object.keys(multiRowMethodsRef.current).map((key) =>
                        multiRowMethodsRef.current[key].getFormFieldsValue(isValid),
                    ),
                ).then((allvalues) => ({}));
            } else if (isValid) {
                const keys = Object.keys(multiRowMethodsRef.current);
                for (let index = 0; index < keys.length; index++) {
                    const key = keys[index];
                    const val = multiRowMethodsRef.current[key].getFormFieldsValue(isValid);
                    if (typeof val === 'boolean' && !val) {
                        return false;
                    }
                }
            }
            return {};
        }, []);
        const getMultiRowFormMethods = useCallback((fieldKey, methods) => {
            multiRowMethodsRef.current[fieldKey] = methods;
        }, []);
        const isGroupHorizontal = formGroups.some((group) => group.groupLayout === 'horizontal');
        return initMsg ? (
            <div className="z-text-center z-padding-20">{initMsg}</div>
        ) : (
            <div className={`${allDisabled ? 'z-live-form-disbled' : ''} ${className || ''}`} style={style}>
                {titleText ? (
                    <div className="z-padding-bottom-10 z-text-center">
                        <h2>{titleText}</h2>
                    </div>
                ) : null}
                <FormGroupContext.Provider
                    value={{
                        getMultiRowFormMethods,
                        momentFormat,
                        booleanToNumber,
                    }}>
                    <Row
                        type="flex"
                        gutter={isGroupHorizontal ? 6 : 16}
                        className={
                            formGroups.some((group) => group.groupLayout === 'horizontal') ? 'z-view-form-row' : ''
                        }>
                        {formGroups.map((group, i) => (
                            <FormGroup
                                key={group.id || group.name}
                                titleLeftRender={groupTitleLeftRender ? formGroupTitleLeftRender : undefined}
                                titleRightRender={groupTitleLeftRender ? formGroupTitleRightRender : undefined}
                                group={group}
                                onSubmit={onSubmit}
                                onValidated={onValidated}
                                labelLayout={group.labelLayout}
                                ref={group.groupRef}
                                formItems={group.formItems}
                                getOtherForms={getOtherForms}
                                formValues={formValues}
                                momentFormat={momentFormat}
                                booleanToNumber={booleanToNumber}
                                afterItemsRendered={formGroupAfterItemsRendered}
                                defaultShow={group.show}
                                getFormOtherFieldsValue={getFormOtherFieldsValue}
                                className={groupClassName}
                                confirm={confirm}>
                                {typeof groupChildrenRender === 'function' && groupChildrenRender(group)}
                            </FormGroup>
                        ))}
                    </Row>
                </FormGroupContext.Provider>
                {typeof submitBtnRender === 'function' ? (
                    <div style={{ paddingTop: '15px' }}>
                        {submitBtnRender(doSubmit, [commitLoading, setCommitLoading])}
                    </div>
                ) : null}
            </div>
        );
    },
);
FormViewer.propTypes = {
    formData: PropTypes.object.isRequired,
    formValues: PropTypes.object,
    onSubmit: PropTypes.func,
    groupTitleRightRender: PropTypes.func,
    className: PropTypes.string,
    onFormGroupsChange: PropTypes.func,
    linkage: PropTypes.bool,
    groupChildrenRender: PropTypes.func,
    submitBtnRender: PropTypes.func,
    afterItemsRendered: PropTypes.func,
    momentFormat: PropTypes.bool,
    booleanToNumber: PropTypes.bool,
    customOnChange: PropTypes.object,
    customFormRules: PropTypes.object,
    customControlRender: PropTypes.object,
    confirm: PropTypes.object,
    getMultiRowFormData: PropTypes.func,
};
export const ZliveFormViewer = React.memo(FormViewer);
export default ZliveFormViewer;
