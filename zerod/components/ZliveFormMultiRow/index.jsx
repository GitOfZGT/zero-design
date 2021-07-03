import React, { useEffect, useState, useRef, useCallback } from 'react';
import ZmultiRowFormControl from '../ZmultiRowFormControl';
import { dataType } from '../zTool';
import { translateGroups, pareLinkages } from '../ZliveForm/common';
import { doLinkageAction, autoCheckedBySelected, initialValueLinkageAction } from '../ZliveForm/linkageAction';

const ZliveFormMultiRow = (props) => {
    const {
        formData,
        value,
        onChange,
        extraValue,
        customOnChange,
        customFormRules,
        customControlRender,
        showAddButton,
        showRemoveButton,
        momentFormat,
        booleanToNumber,
        exportMethods,
        disabled,
        getExtendComponents,
        onAdd,
    } = props;
    const [state, setState] = useState({ items: [], titleGroups: [] });
    const multiRowMethodsRef = useRef();
    const formDataRef = useRef();
    const multiGetGroupsFn = useCallback(
        (rowKey) => [
            {
                groupRef: {
                    current: {
                        getForm(_rowKey) {
                            return {
                                ...multiRowMethodsRef.current.getFormMethodsGather()[_rowKey || rowKey],
                                group: { name: _rowKey || rowKey },
                            };
                        },
                        show(showStatus) {},
                        getShowState() {
                            return true;
                        },
                        getWrapperDom() {
                            return null;
                        },
                        getFormItems() {
                            return multiRowMethodsRef.current.getInitialFormItems();
                        },
                        setFormItems: () => {},
                        getIsFirstShow() {
                            return true;
                        },
                    },
                },
            },
        ],
        [],
    );
    const rowDoLinkageAction = useCallback(
        ({ ages, getGroupsFn, seftItem }) => {
            doLinkageAction({
                ages,
                getGroupsFn: () => multiGetGroupsFn(seftItem.rowKey),
                seftItem,
                extraValue,
                onAfterSetFieldsValue: () => {
                    multiRowMethodsRef.current && multiRowMethodsRef.current.oneControlChange();
                },
                getExtendComponents,
            });
        },
        [extraValue, multiGetGroupsFn, getExtendComponents],
    );
    useEffect(() => {
        if (!dataType.isObject(formData)) return;
        const setItems = (formData) => {
            formDataRef.current = formData;
            translateGroups({
                formData,
                getGroupsFn: null,
                linkage: true,
                imperative: {
                    current: multiGetGroupsFn,
                },
                customOnChange,
                customFormRules,
                customControlRender,
                noAsync: false,
                extraValue,
                allDisabled: disabled,
                getMultiRowFormData: undefined,
                doLinkageAction: rowDoLinkageAction,
                getExtendComponents,
            }).then((groups) => {
                let items = [];
                const titleGroups = [];
                groups.forEach((g) => {
                    items = items.concat(g.formItems);
                    if (g.labelShowTag !== 0) {
                        titleGroups.push({ id: g.id || g.name, title: g.name });
                    }
                });
                setState((prevState) => ({
                    ...prevState,
                    items,
                    titleGroups,
                }));
            });
        };

        setItems(formData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);
    const _exportMethods = useCallback(
        (methods) => {
            multiRowMethodsRef.current = methods;
            exportMethods && exportMethods(methods);
        },
        [exportMethods],
    );
    const oneFormAfterItemsRendered = useCallback(
        ({ rowKey }) => {
            if (formDataRef.current) {
                const linkages = pareLinkages(formDataRef.current.linkages);
                const getGroupsFn = () => multiGetGroupsFn(rowKey);
                autoCheckedBySelected({
                    ages: linkages,
                    getGroupsFn,
                    extraValue,
                    onAfterSetFieldsValue: () => {
                        multiRowMethodsRef.current && multiRowMethodsRef.current.oneControlChange();
                    },
                    getExtendComponents,
                    onFinally: () => {
                        initialValueLinkageAction({
                            ages: linkages,
                            getGroupsFn,
                            selfItem: null,
                            extraValue,
                            onAfterSetFieldsValue: () => {
                                multiRowMethodsRef.current && multiRowMethodsRef.current.oneControlChange();
                            },
                            getExtendComponents,
                        });
                    },
                });
            }
        },
        [extraValue, getExtendComponents, multiGetGroupsFn],
    );
    return (
        <ZmultiRowFormControl
            showAddButton={showAddButton}
            showRemoveButton={showRemoveButton}
            value={value}
            onChange={onChange}
            items={state.items}
            titleGroups={state.titleGroups}
            exportMethods={_exportMethods}
            oneFormAfterItemsRendered={oneFormAfterItemsRendered}
            momentFormat={momentFormat}
            booleanToNumber={booleanToNumber}
            disabled={disabled}
            onAdd={onAdd}
        />
    );
};
export default React.memo(ZliveFormMultiRow);
