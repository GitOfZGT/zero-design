import React from 'react';
import { Button, Modal, Icon } from 'antd';
import Zform from '../../Zform';
import { dataType } from '../../zTool';
import { getControl, getOptions } from '../../Zform/controls';
const arrToObj = (keyName, values) => {
    const newSelectionsQuery = {};
    Array.isArray(values[keyName]) &&
        values[keyName].forEach((item) => {
            if (item.label && item.value) {
                newSelectionsQuery[item.label] = item.value;
            }
        });
    values[keyName] = newSelectionsQuery;
};
const objToArr = (keyName, values) => {
    if (dataType.isObject(values[keyName])) {
        const Arr = [];
        Object.keys(values[keyName]).forEach((key) => {
            Arr.push({
                label: key,
                value: values[keyName][key],
            });
        });
        values[keyName] = Arr;
    }
};
const RequestConfigBtn = React.memo((props) => {
    const { value, onChange } = props;
    return (
        <Button
            onClick={() => {
                let formMethods = null;
                let closeConfirm = null;
                const formValues = value ? { ...value } : {};
                objToArr('headers', formValues);

                Modal.confirm({
                    width: '1000px',
                    title: '请求的其他属性',
                    icon: <Icon type="plus" />,
                    content: (
                        <Zform
                            values={formValues}
                            labelLayout="horizontal"
                            submitBtnName={false}
                            onSubmit={(values) => {
                                arrToObj('headers', values);
                                onChange && onChange(values);
                                if (closeConfirm) {
                                    closeConfirm();
                                }
                                closeConfirm = null;
                                formMethods = null;
                            }}
                            defaultSpan={24}
                            items={[
                                {
                                    key: 'headers',
                                    label: '请求头',
                                    show: true,
                                    labelFocused: true,
                                    render(form, changeFormItems) {
                                        return getControl('TreeInput', { multiple: false, labelPlaceholder: 'Key' });
                                    },
                                    options: getOptions({
                                        required: false,
                                        initialValue: [],
                                    }),
                                },
                            ]}
                            getFormInstance={(form, methods) => {
                                formMethods = methods;
                            }}
                            confirm={{ show: false }}
                        ></Zform>
                    ),
                    onOk: (close) => {
                        closeConfirm = close;
                        if (formMethods) {
                            formMethods.onSubmit({ preventDefault: () => {}, stopPropagation: () => {} });
                        }
                    },
                });
            }}
        >
            其他
        </Button>
    );
});

export default RequestConfigBtn;
