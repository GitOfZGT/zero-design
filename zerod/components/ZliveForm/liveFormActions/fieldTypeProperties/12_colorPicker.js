import React, { useState, useEffect } from 'react';
import { getControl, getOptions } from '../../../Zform/controls';
const PercentInput = React.memo(
    React.forwardRef((props) => {
        const { value, onChange } = props;
        const [num, setNum] = useState(typeof value === 'number' ? value : 0);
        useEffect(() => {
            setNum(value * 100);
        }, [value]);
        return getControl('Input.Group', {
            compact: true,
            children: (
                <>
                    {getControl('InputNumber', {
                        min: 0,
                        max: 100,
                        precision: 4,
                        style: { width: '80%' },
                        value: num,
                        onChange: (num) => {
                            onChange && onChange(num / 100);
                        },
                    })}
                    {getControl('Input', {
                        defaultValue: '%',
                        disabled: true,
                        style: { width: '20%' },
                    })}
                </>
            ),
        });
    }),
);

export default {
    label: '颜色值',
    value: 12,
    getFieldPropertiesFormItems({ formItemsRef: itemsRef, componentList: controlList }) {
        return [
            {
                key: 'colorValueType',
                label: '颜色值类型',
                labelFocused: true,
                show: false,
                render(form, changeFormItems) {
                    return getControl('Select', {
                        selectList: [
                            { label: 'hex', value: 'hex' },
                            { label: 'rgb', value: 'rgb' },
                        ],
                    });
                },
                options: getOptions({
                    required: true,
                    initialValue: 'rgb',
                }),
            },
            {
                key: 'minSaturability',
                label: '最小饱和度(0%~100%,越小越趋近白色)',
                labelFocused: true,
                show: false,
                render(form, changeFormItems) {
                    return <PercentInput />;
                },
                options: getOptions({
                    required: false,
                    initialValue: 0,
                }),
            },
        ];
    },
    // getFieldTypeCof({ commonKeys, commonConfigKeys }) {
    //     return [
    //         {
    //             label: '颜色值',
    //             value: 12,
    //             showKeys: [...commonKeys, ...colorKeys],
    //             configKeys: [...colorKeys, ...commonConfigKeys],
    //         },
    //     ];
    // },
    // getPropertiesConf({ itemsRef, controlList }) {
    //     return [
    //         {
    //             key: 'colorValueType',
    //             label: '颜色值类型',
    //             labelFocused: true,
    //             show: false,
    //             render(form, changeFormItems) {
    //                 return getControl('Select', {
    //                     selectList: [
    //                         { label: 'hex', value: 'hex' },
    //                         { label: 'rgb', value: 'rgb' },
    //                     ],
    //                 });
    //             },
    //             options: getOptions({
    //                 required: true,
    //                 initialValue: 'rgb',
    //             }),
    //         },
    //         {
    //             key: 'minSaturability',
    //             label: '最小饱和度(0%~100%,越小越趋近白色)',
    //             labelFocused: true,
    //             show: false,
    //             render(form, changeFormItems) {
    //                 return <PercentInput />;
    //             },
    //             options: getOptions({
    //                 required: false,
    //                 initialValue: 0,
    //             }),
    //         },
    //     ];
    // },
};
