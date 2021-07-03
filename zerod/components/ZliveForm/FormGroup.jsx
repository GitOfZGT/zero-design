import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Zform from '../Zform';
import FormContext from './FormContext';
import { Col } from 'antd';
import ZpanelTitle from '../ZpanelTitle';

const MyForm = FormContext.setConsumer(Zform);
const FormGroup = React.memo(
    React.forwardRef(
        (
            {
                formItems,
                getOtherForms,
                labelLayout,
                onSubmit,
                onValidated,
                group,
                titleLeftRender,
                titleRightRender,
                children,
                formValues,
                momentFormat,
                booleanToNumber,
                afterItemsRendered,
                defaultShow,
                getFormOtherFieldsValue,
                className,
                confirm,
            },
            ref,
        ) => {
            const domRef = useRef();
            const formRef = useRef({});

            const showStatusRef = useRef(!!defaultShow);
            const [firstShow, setFirstShow] = useState(!!defaultShow);
            const getFormInstance = useCallback((form, methods) => {
                formRef.current = { form, methods };
            }, []);
            const [stateFormItems, setFormItems] = useState([]);
            useEffect(() => {
                setFormItems(Array.isArray(formItems) ? formItems : []);
            }, [formItems]);
            useEffect(() => {
                domRef.current && (domRef.current.style.display = showStatusRef.current ? '' : 'none');
            }, [firstShow]);
            useImperativeHandle(ref, () => ({
                getForm() {
                    return { ...formRef.current, group };
                },
                show(showStatus) {
                    if (showStatusRef.current === showStatus) return;
                    showStatusRef.current = showStatus;
                    if (!firstShow && showStatusRef.current) {
                        setFirstShow(true);
                    } else {
                        domRef.current && (domRef.current.style.display = showStatusRef.current ? '' : 'none');
                    }
                    // formRef.current.methods.changeFormItems(
                    //     stateFormItems.map((item) => ({
                    //         key: item.key,
                    //         show: showStatus
                    //     })),
                    //     true
                    // );
                },
                getShowState() {
                    return showStatusRef.current;
                },
                getWrapperDom() {
                    return domRef.current;
                },
                getFormItems() {
                    return stateFormItems;
                },
                setFormItems,
                getIsFirstShow() {
                    return firstShow;
                },
            }));

            const [groupAttr, setGroupAttr] = useState({});
            return firstShow ? (
                <Col
                    span={group.config.groupSpan || 24}
                    key={group.id || group.name}
                    className={group.groupLayout === 'horizontal' ? 'z-view-form-col-hor' : 'z-view-form-col'}
                    ref={(el) => {
                        domRef.current = ReactDOM.findDOMNode(el);
                    }}>
                    <div className={`z-panel z-view-form-panel ${className || ''}`}>
                        {group.panelHeaderShow ? (
                            <div className="z-panel-heading z-flex-space-between z-flex-wrap">
                                <div className="z-flex-items-v-center">
                                    {typeof titleLeftRender === 'function' ? (
                                        titleLeftRender(group, groupAttr, setGroupAttr)
                                    ) : (
                                        <ZpanelTitle>{group.name}</ZpanelTitle>
                                    )}
                                </div>
                                <div className="z-flex-items-v-center">
                                    {typeof titleRightRender === 'function' &&
                                        titleRightRender(group, groupAttr, setGroupAttr)}
                                </div>
                            </div>
                        ) : null}
                        <div className={group.groupLayout === 'horizontal' ? 'z-flex-1' : 'z-padding-15'}>
                            <MyForm
                                group={group}
                                onSubmit={onSubmit}
                                onValidated={onValidated}
                                labelLayout={labelLayout || 'inline'}
                                items={stateFormItems}
                                submitBtnName=""
                                getFormInstance={getFormInstance}
                                otherForms={getOtherForms}
                                formDefaultValues={formValues}
                                momentFormat={momentFormat}
                                booleanToNumber={booleanToNumber}
                                afterItemsRendered={afterItemsRendered}
                                initAnimation={false}
                                onlySetCurrentValues={true}
                                getOtherFieldsValue={getFormOtherFieldsValue}
                                confirm={confirm}
                            />

                            {children}
                        </div>
                    </div>
                </Col>
            ) : null;
        },
    ),
);
export default FormGroup;
