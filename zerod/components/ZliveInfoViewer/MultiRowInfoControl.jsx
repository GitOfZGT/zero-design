import React, { useEffect, useState, useRef, useContext, useCallback } from 'react';

import { dataType } from '../zTool';
import ZliveInfoMultiRow from '../ZliveInfoMultiRow';
import ZpageLoading from '../ZpageLoading';

const MultiRowControl = (props) => {
    const {
        getMultiRowFormData,
        getFormDataParams,
        value,
        formItem,
        canOpenAddressLocation,
        customOnChange,
        customFormRules,
        customControlRender,
        getExtendComponents,
    } = props;
    const [state, setState] = useState({ formData: null });
    const loadingRef = useRef();
    useEffect(() => {
        if (typeof getMultiRowFormData === 'function') {
            const setItems = (formData) => {
                setState((prevState) => ({
                    ...prevState,
                    formData,
                }));
            };
            const returned = getMultiRowFormData({ params: getFormDataParams, currentItem: formItem });
            if (dataType.isPromise(returned)) {
                loadingRef.current.methods.showLoading(true);
                returned
                    .then((formData) => {
                        setItems(formData);
                    })
                    .finally(() => {
                        loadingRef.current.methods.showLoading(false);
                    });
            } else {
                setItems(returned);
            }
        }
    }, [formItem, getFormDataParams, getMultiRowFormData]);
    return (
        <div style={{ position: 'relative' }}>
            <ZpageLoading ref={loadingRef} size="small" />
            <ZliveInfoMultiRow
                className="z-infoViewer-multi-row"
                value={value}
                canOpenAddressLocation={canOpenAddressLocation}
                formData={state.formData}
                customControlRender={customControlRender}
                getExtendComponents={getExtendComponents}
            />
        </div>
    );
};
export default React.memo(MultiRowControl);
