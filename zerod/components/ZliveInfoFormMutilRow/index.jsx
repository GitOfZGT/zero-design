import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import ZliveInfoMultiRow from '../ZliveInfoMultiRow';
import ZfullLayer from '../ZfullLayer';
import ZliveFormViewer from '../ZliveFormViewer';

import { Button } from 'antd';
export function reduceFormValues(values) {
    //values 拿到的表单的数据可能是多个组的，解成对象
    const allGroupValues = Array.isArray(values) ? values.reduce((tol, curr) => ({ ...tol, ...curr }), {}) : values;
    return allGroupValues;
}
export default React.memo((props) => {
    const { formData, value, onChange, customControlRender, disabled, showAddButton, ...others } = props;
    const [state, setState] = useState({ formData: null, formValues: {} });
    useEffect(() => {
        if (formData) {
            const data = { ...formData };
            if (Array.isArray(formData.sectionList)) {
                if (!disabled) {
                    data.sectionList = [
                        {
                            name: '修改',
                            formFieldInfoList: [
                                {
                                    fieldKey: 'row_edit_open_form_button',
                                    fieldType: 14,
                                    config: '{ "labelWidth":"86px" }',
                                    label: '',
                                },
                            ],
                            seq: 0,
                            hidden: 0,
                            labelShowTag: 0,
                            config: '{}',
                        },
                        ...formData.sectionList,
                    ];
                }
                setState((prevState) => ({
                    ...prevState,
                    formData: data,
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);
    const ZfullLayerMethodsRef = useRef();
    const ZliveFormViewerRef = useRef();
    const openEditIndexRef = useRef(-1);
    const handleCancel = useCallback(() => {
        openEditIndexRef.current = -1;
        ZfullLayerMethodsRef.current.showLayer(false);
    }, []);

    const _exportMethods = useCallback((m) => {
        ZfullLayerMethodsRef.current = m;
    }, []);
    const infoCustomControlRender = useMemo(
        () => ({
            ...(customControlRender || {}),
            row_edit_open_form_button(field, formValues, index, dataSource) {
                // console.log(field, '===');
                return () => (
                    <Button
                        size="small"
                        onClick={() => {
                            openEditIndexRef.current = index;
                            setState((prevState) => ({
                                ...prevState,
                                formValues: dataSource[index],
                            }));
                            const amplify = ZfullLayerMethodsRef.current.showLayer(
                                true,
                                () => {
                                    console.log('open');
                                },
                                true, //是否先缩放
                            );
                            //再放大效果
                            amplify();
                        }}>
                        修改
                    </Button>
                );
            },
        }),
        [customControlRender],
    );
    return (
        <>
            <ZliveInfoMultiRow
                showAddButton={showAddButton}
                disabled={disabled}
                value={value}
                formData={state.formData}
                onAdd={() => {
                    const amplify = ZfullLayerMethodsRef.current.showLayer(
                        true,
                        () => {
                            console.log('open');
                        },
                        true, //是否先缩放
                    );
                    //再放大效果
                    amplify();
                }}
                onChange={onChange}
                customControlRender={infoCustomControlRender}
                {...others}
            />
            {showAddButton || !disabled ? (
                <ZfullLayer exportMethods={_exportMethods}>
                    <div style={{ width: '94%', margin: '20px auto 0' }}>
                        <ZliveFormViewer
                            title={false}
                            ref={ZliveFormViewerRef}
                            formData={formData}
                            formValues={state.formValues}
                            {...others}
                            confirm={{
                                show: false,
                            }}
                            onSubmit={(values) => {
                                if (openEditIndexRef.current > -1) {
                                    value.splice(openEditIndexRef.current, 1, values);
                                    onChange && onChange([...(value || [])]);
                                } else {
                                    onChange && onChange([...(value || []), values]);
                                }

                                handleCancel();
                            }}
                            submitBtnRender={(doSubmit) => (
                                <div className="z-text-center">
                                    <Button onClick={handleCancel}>取消</Button>
                                    <Button type="primary" className="z-margin-left-20" onClick={doSubmit}>
                                        确定
                                    </Button>
                                </div>
                            )}
                        />
                    </div>
                </ZfullLayer>
            ) : null}
        </>
    );
});
