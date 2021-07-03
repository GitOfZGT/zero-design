import React from 'react';
import { getSwitchOpt } from './common';
import { getUploadCommonProperties } from './11_uploader';
export default {
    label: '证件照(OCR)',
    value: 16,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            ...getUploadCommonProperties({ itemsRef, controlList }),
            {
                key: 'positiveRequired',
                label: '正面必传',
                labelFocused: true,
                show: false,
                ...getSwitchOpt(),
            },
            {
                key: 'reverseRequired',
                label: '反面必传',
                labelFocused: true,
                show: false,
                ...getSwitchOpt({ initialValue: false }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '证件照(OCR)',
    //             value: 16,
    //             showKeys: [...commonKeys, ...loadKey, 'positiveRequired', 'reverseRequired'],
    //             configKeys: [...loadKey, ...commonConfigKeys, 'positiveRequired', 'reverseRequired'],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         ...getUploadCommonProperties({ itemsRef, controlList }),
    //         {
    //             key: 'positiveRequired',
    //             label: '正面必传',
    //             labelFocused: true,
    //             show: false,
    //             ...getSwitchOpt(),
    //         },
    //         {
    //             key: 'reverseRequired',
    //             label: '反面必传',
    //             labelFocused: true,
    //             show: false,
    //             ...getSwitchOpt({ initialValue: false }),
    //         },
    //     ];
    // },
};
