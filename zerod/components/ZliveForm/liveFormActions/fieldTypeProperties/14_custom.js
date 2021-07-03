// import React, { useState, useEffect, useRef } from 'react';

import { getSwitchOpt } from './common';

export default {
    label: '自定义占位',
    value: 14,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'isFormItem',
                label: '自定义内容是否为表单控件',
                labelFocused: true,
                show: false,
                ...getSwitchOpt(),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '自定义占位',
    //             value: 14,
    //             showKeys: [...commonKeys, 'isFormItem'],
    //             configKeys: [...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'isFormItem',
    //             label: '自定义内容是否为表单控件',
    //             labelFocused: true,
    //             show: false,
    //             ...getSwitchOpt(),
    //         },
    //     ];
    // },
};
