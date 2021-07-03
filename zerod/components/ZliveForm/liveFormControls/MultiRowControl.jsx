import React, { useEffect, useState, useRef, useContext, useCallback } from 'react';

import { dataType } from '../../zTool';

import FormGroupContext from '../FormGroupContext';

import ZliveFormMultiRow from '../../ZliveFormMultiRow';
import ZliveInfoFormMutilRow from '../../ZliveInfoFormMutilRow';
const MultiRowControl = (props) => {
    const {
        getMultiRowFormData,
        getFormDataParams,
        formItem,
        value,
        onChange,
        extraValue,
        customOnChange,
        customFormRules,
        customControlRender,
        showAddButton,
        showRemoveButton,
        disabled,
        size,
        formMode,
    } = props;
    const [state, setState] = useState({ formData: null });
    const { getMultiRowFormMethods, momentFormat, booleanToNumber } = useContext(FormGroupContext.context);

    useEffect(() => {
        if (typeof getMultiRowFormData === 'function') {
            const setItems = (formData) => {
                setState((prevState) => {
                    return {
                        ...prevState,
                        formData,
                    };
                });
            };
            const returned = getMultiRowFormData({ params: getFormDataParams, currentItem: formItem });
            if (dataType.isPromise(returned)) {
                returned.then((formData) => {
                    setItems(formData);
                });
            } else {
                setItems(returned);
            }
        }
    }, []);
    const exportMethods = useCallback(
        (methods) => {
            getMultiRowFormMethods && getMultiRowFormMethods(formItem.key, methods);
        },
        [getMultiRowFormMethods, formItem],
    );
    const _props = {
        controlSize: size,
        formData: state.formData,
        value,
        onChange,
        extraValue,
        customOnChange,
        customFormRules,
        customControlRender,
        showAddButton,
        showRemoveButton,
        disabled,
        momentFormat,
        booleanToNumber,
        getMultiRowFormData,
    };
    return formMode === 'open' ? (
        <ZliveInfoFormMutilRow {..._props} />
    ) : (
        <ZliveFormMultiRow {..._props} exportMethods={exportMethods} />
    );
};
export default React.memo(MultiRowControl);
