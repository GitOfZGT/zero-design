import React, { useState, useEffect, useRef, useImperativeHandle, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FormViewer from './FormViewer';
import ZliveInfoViewer from '../ZliveInfoViewer';
import FormContext from './FormContext';
import { Button, Icon, Tag, Col, Slider, message, Modal, Tooltip, Input, Checkbox, Select } from 'antd';
const TextArea = Input.TextArea;
import controls from './controls';
import Zform from '../Zform';
import { getOptions, getControl } from '../Zform/controls';
import ZselectInput from './liveFormControls/ZselectInput';
import { dataType, GenNonDuplicateID, parseJsonToObject } from '../zTool';
import ZerodMainContext from '../ZerodMainContext';
import ZerodLayerContext from '../ZerodLayerContext';
import '../../dragula/dragula.css';
import dragula from '../../dragula/dragula';
import AddColForm from './liveFormActions/AddColForm';
import GroupMoveBtns from './liveFormActions/GroupMoveBtns';
import InsertGroupBtns from './liveFormActions/InsertGroupBtns';
import GroupNameEdit from './liveFormActions/GroupNameEdit';
import LinkageConfig from './LinkageConfig';
import { getGroupItem, pareLinkages, removeSomeLinkage, labelShowTags } from './common';
import ZfullLayer from '../ZfullLayer';
import AddTagName from './liveFormActions/AddTagName';
import ZliveFormMultiRow from '../ZliveFormMultiRow';
const formDataConfigkeys = ['groupLayout', 'initialValueApi'];
//校验、提取最新的formData数据
function commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave) {
    layoutFormRef.current.validateFields((errors, values) => {
        if (errors) return;

        const formConfig = {};
        Object.keys(values).forEach((key) => {
            if (formDataConfigkeys.includes(key)) {
                formConfig[key] = values[key];
            }
        });
        const groups = formViewerRef.current.getFormGroups();
        const newFormData = {
            code: values.code,
            description: values.description,
            name: values.name,
            labelLayout: values.labelLayout,
            formSubmitTypeCode: values.formSubmitTypeCode,
            config: JSON.stringify(formConfig),
        };
        let hasEmptyGroup = false;
        newFormData.sectionList = groups.map((g, gindex) => {
            const formList = g.groupRef.current.getFormItems().map((item, itemindex) => {
                const config = parseJsonToObject(item.config);
                config.tagName = item.tagName || [];
                return {
                    fieldKey: item.fieldKey,
                    fieldType: item.fieldType,
                    id: item.id,
                    config: JSON.stringify(config),
                    disabled: Number(item.disabled),
                    initialValue: item.initialValue,
                    label: item.label,
                    regularExpression: item.regularExpression,
                    required: Number(item.required),
                    sectionId: item.sectionId,
                    span: item.span,
                    seq: itemindex + 1,
                    errorMsg: item.errorMsg,
                    remark: item.remark,
                    hidden: Number(!!item.hidden),
                    labelShowTag: item.labelShowTag,
                };
            });
            if (!hasEmptyGroup && !formList.length) {
                hasEmptyGroup = true;
            }

            return {
                id: g.additive ? undefined : g.id,
                name: g.name,
                formFieldInfoList: formList,
                seq: gindex + 1,
                hidden: Number(!!g.hidden),
                labelShowTag: g.labelShowTag,
                config: JSON.stringify(g.config),
            };
        });
        if (hasEmptyGroup) {
            message.error('存在空的组，请为其添加控件或者移除该组');
            return;
        }
        newFormData.linkages = Array.isArray(linkageRef.current) ? JSON.stringify(linkageRef.current) : null;
        typeof onSave === 'function' && onSave(newFormData);
    });
}

const ExpanedFormBtn = React.memo((props) => {
    const { onClick } = props;
    const [down, setDown] = useState(false);

    return (
        <Tooltip placement="top" title="展开/折叠">
            <Button
                type="default"
                icon={down ? 'up' : 'down'}
                className="z-margin-right-12"
                onClick={() => {
                    setDown(!down);
                    onClick && onClick(!down);
                }}></Button>
        </Tooltip>
    );
});

function useGetItems(
    formData,
    formViewerRef,
    layoutFormRef,
    showModal,
    onSave,
    layerRef,
    showViewerRef,
    titleFormRendered,
    linkageRef,
    showJsonRef,
    setInsideFormData,
    getExtendComponents,
) {
    const hasCodeRef = useRef(false);
    // const linkageRef = useRef(pareLinkages(formData.linkages));
    useEffect(() => {
        if (layoutFormRef.current && titleFormRendered) {
            const formValue = {
                name: formData.name,
                code: formData.code,
                labelLayout: formData.labelLayout,
                description: formData.description,
                formSubmitTypeCode: formData.formSubmitTypeCode,
                ...parseJsonToObject(formData.config),
            };
            layoutFormRef.current.setFieldsValue(formValue);
        }
        hasCodeRef.current = !!formData.code;
        linkageRef.current = pareLinkages(formData.linkages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, titleFormRendered]);
    const allTagNameRef = useRef([]);
    const itemsRef = useRef([
        {
            key: 'name',
            label: '表单名称',
            span: 4,
            render: (form, changeFormItems) => getControl('Input'),
            options: getOptions({
                required: true,
                // initialValue: formData.name,
            }),
        },
        {
            key: 'code',
            label: '表单编码',
            span: 4,
            render: (form, changeFormItems) => getControl('Input', { disabled: hasCodeRef.current }),
            options: getOptions({
                required: true,
                // initialValue: formData.name,
            }),
        },
        {
            key: 'labelLayout',
            label: '控件Label布局',
            span: 3,
            render: (form, changeFormItems) =>
                getControl('Select', {
                    selectList: [
                        { label: '内联', value: 'inline' },
                        { label: '纵向', value: 'vertical' },
                        { label: '横向', value: 'horizontal' },
                    ],
                    onChange: (value) => {
                        const groups = formViewerRef.current.getFormGroups();
                        formViewerRef.current.setFormGroups(groups.map((g) => ({ ...g, labelLayout: value })));
                    },
                }),
            options: getOptions({
                initialValue: 'inline',
            }),
        },
        {
            key: 'formSubmitTypeCode',
            label: '表单提交类型',
            span: 3,
            labelFocused: false,
            render: (form, changeFormItems) =>
                getControl('Select', {
                    selectList: [
                        { label: '普通表单', value: 1 },
                        { label: '文书编辑', value: 2 },
                        { label: '文书签名', value: 3 },
                        { label: '文书盖章', value: 4 },
                        { label: '文书制作', value: 5 },
                        { label: '文书预览', value: 6 },
                    ],
                }),
            options: getOptions({
                initialValue: 1,
            }),
        },
        {
            key: 'description',
            label: '描述',
            span: 3,
            render: (form, changeFormItems) => getControl('Input'),
            // options: controls['1'].getOptions({
            //     required: false,
            //     initialValue: formData.description
            // })
        },
        {
            key: 'buttons',
            label: null,
            span: 7,
            render: (form, changeFormItems) => (
                <div className="z-text-right">
                    <Tooltip placement="top" title="当前JSON">
                        <Button
                            type="primary"
                            onClick={() => {
                                commitFormData(formViewerRef, layoutFormRef, linkageRef, (newFormData) => {
                                    layerRef.current.methods.showLayer(
                                        true,
                                        () => {
                                            showViewerRef.current.triggleShow(false);
                                            showJsonRef.current.setFormData(newFormData);
                                        },
                                        true,
                                    )();
                                });
                            }}
                            icon="file-text"
                            className="z-margin-right-12"></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="导入JSON">
                        <Button
                            type="primary"
                            onClick={() => {
                                layerRef.current.methods.showLayer(
                                    true,
                                    () => {
                                        showViewerRef.current.triggleShow(false);
                                        showJsonRef.current.onImportJson((data) => {
                                            setInsideFormData(data);
                                            layerRef.current.methods.showLayer(false);
                                        });
                                    },
                                    true,
                                )();
                            }}
                            icon="file-add"
                            className="z-margin-right-12"></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="全局打标签">
                        <Button
                            type="primary"
                            onClick={() => {
                                Modal.confirm({
                                    title: '为所有控件添加标签?',
                                    content: (
                                        <AddTagName
                                            onChange={(val) => {
                                                allTagNameRef.current = val;
                                            }}></AddTagName>
                                    ),
                                    okText: '确定',
                                    cancelText: '取消',
                                    onOk() {
                                        const groups = formViewerRef.current.getFormGroups();
                                        groups.forEach((g) => {
                                            const currentItems = g.groupRef.current.getFormItems();
                                            g.groupRef.current.setFormItems(
                                                currentItems.map((item) => ({
                                                    ...item,
                                                    tagName: allTagNameRef.current,
                                                })),
                                            );
                                        });
                                    },
                                });
                            }}
                            icon="tag"
                            className="z-margin-right-12"></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="联动配置">
                        <Button
                            type="primary"
                            icon="block"
                            className="z-margin-right-12"
                            onClick={() => {
                                commitFormData(formViewerRef, layoutFormRef, linkageRef, (newFormData) => {
                                    showModal({
                                        show: true,
                                        // modal: 'linkageConfigModal',
                                        content: (
                                            <LinkageConfig
                                                newFormData={newFormData}
                                                defaultValue={linkageRef.current}
                                                onChange={(newLinkages) => {
                                                    linkageRef.current = newLinkages;
                                                }}
                                                getExtendComponents={getExtendComponents}
                                            />
                                        ),
                                    });
                                });
                            }}></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="ZliveInfoViewer预览">
                        <Button
                            type="primary"
                            icon="file-unknown"
                            className="z-margin-right-12"
                            onClick={() => {
                                commitFormData(formViewerRef, layoutFormRef, linkageRef, (newFormData) => {
                                    layerRef.current.methods.showLayer(
                                        true,
                                        () => {
                                            showJsonRef.current.triggleShow(false);
                                            showViewerRef.current.setFormData(newFormData, 'info');
                                        },
                                        true,
                                    )();
                                });
                            }}></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="ZliveFormViewer预览">
                        <Button
                            type="primary"
                            icon="file-unknown"
                            className="z-margin-right-12"
                            onClick={() => {
                                commitFormData(formViewerRef, layoutFormRef, linkageRef, (newFormData) => {
                                    layerRef.current.methods.showLayer(
                                        true,
                                        () => {
                                            showJsonRef.current.triggleShow(false);
                                            showViewerRef.current.setFormData(newFormData, 'form');
                                        },
                                        true,
                                    )();
                                });
                            }}></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="用于多行编辑预览">
                        <Button
                            type="primary"
                            icon="file-unknown"
                            className="z-margin-right-12"
                            onClick={() => {
                                commitFormData(formViewerRef, layoutFormRef, linkageRef, (newFormData) => {
                                    layerRef.current.methods.showLayer(
                                        true,
                                        () => {
                                            showJsonRef.current.triggleShow(false);
                                            showViewerRef.current.setFormData(newFormData, 'multiForm');
                                        },
                                        true,
                                    )();
                                });
                            }}></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="保存">
                        <Button
                            type="primary"
                            icon="check"
                            className="z-margin-right-12"
                            onClick={() => {
                                commitFormData(formViewerRef, layoutFormRef, linkageRef, onSave);
                            }}></Button>
                    </Tooltip>
                    <ExpanedFormBtn
                        onClick={(up) => {
                            changeFormItems(
                                formDataConfigkeys.map((key) => ({ key, show: up })),
                                true,
                            );
                        }}></ExpanedFormBtn>
                </div>
            ),
        },
        {
            key: 'groupLayout',
            label: '组内布局',
            span: 3,
            show: false,
            labelFocused: true,
            render: (form, changeFormItems) =>
                controls['3'].getControl(
                    {
                        config: {
                            selectList: [
                                { label: '纵向', value: 'vertical' },
                                { label: '横向', value: 'horizontal' },
                            ],
                        },
                    },
                    undefined,
                    undefined,
                    {},
                ),
            options: controls['3'].getOptions({
                initialValue: 'vertical',
            }),
        },
        {
            key: 'initialValueApi',
            label: '异步获取表单初始值的后台接口',
            span: 21,
            show: false,
            labelFocused: true,
            hiddenRendering: true,
            render(form, changeFormItems) {
                return (
                    <ZselectInput
                        leftSpan={4}
                        centerSpan={20}
                        rightSpan={0}
                        selectList={['post', 'get'].map((m) => ({ label: m, value: m }))}
                        valueKey={{ left: 'urlMethod', center: 'url' }}
                        leftPlaceholde="请求方式"
                        centerPlaceholder="请求地址"
                    />
                );
            },
            options: getOptions({
                required: false,
                valueType: 'object',
                initialValue: {
                    urlMethod: 'post',
                    url: '',
                },
            }),
        },
    ]);
    return itemsRef.current;
}

function openUpdateControl(showModal, groupId, formViewerRef, linkageRef, formItem, type, getExtendComponents) {
    showModal({
        show: true,
        // modal: 'controlProtoModal',
        content: (
            <AddColForm
                groupId={groupId}
                formItem={formItem}
                formViewerRef={formViewerRef}
                linkageRef={linkageRef}
                type={type}
                getExtendComponents={getExtendComponents}
            />
        ),
        width: '800px',
    });
}

function setNewCurrentGroupItems(formViewerRef, item, action) {
    const groups = formViewerRef.current.getFormGroups();
    const groupRefIndex = groups.findIndex((g) => g.id == item.groupId);
    const groupRef = groups[groupRefIndex].groupRef;
    const currentItems = groupRef.current.getFormItems().slice(0);
    const i = currentItems.findIndex((o) => o.key == item.key);
    const newItems = typeof action === 'function' ? action(currentItems, i) : currentItems;
    groupRef.current.setFormItems(newItems);
}
function setNewCurrentGroups(formViewerRef, item, action) {
    const groups = formViewerRef.current.getFormGroups();
    const i = groups.findIndex((g) => g.id == item.groupId);
    const newGroups = typeof action === 'function' ? action(groups, i) : [...groups];
    formViewerRef.current.setFormGroups(newGroups);
}

function useFormProps(showModal, formViewerRef, linkageRef, getExtendComponents) {
    const tagNameRef = useRef([]);
    return useRef({
        colContentRender: (item, form) => {
            tagNameRef.current = item.tagName || [];
            return (
                <div className="z-live-tool">
                    <div style={{ width: '40%' }} className="z-padding-left-10">
                        <Slider
                            min={2}
                            max={24}
                            defaultValue={item.span}
                            onAfterChange={(value) => {
                                setNewCurrentGroupItems(formViewerRef, item, (currentItems, i) => {
                                    currentItems.splice(i, 1, { ...currentItems[i], span: value });
                                    return [...currentItems];
                                });
                            }}
                        />
                    </div>
                    <div>
                        <span className="z-padding-right-10 z-text-gray">{item.fieldKey}</span>
                        <Tooltip placement="top" title="标签">
                            <div
                                className="z-live-tool-item right-item tag"
                                onClick={() => {
                                    Modal.confirm({
                                        title: `为 [${item.label}] 这个控件添加标签?`,
                                        content: (
                                            <AddTagName
                                                value={item.tagName}
                                                onChange={(val) => {
                                                    tagNameRef.current = val;
                                                }}></AddTagName>
                                        ),
                                        okText: '确定',
                                        cancelText: '取消',
                                        onOk() {
                                            setNewCurrentGroupItems(formViewerRef, item, (currentItems, i) => {
                                                currentItems.splice(i, 1, {
                                                    ...currentItems[i],
                                                    tagName: tagNameRef.current,
                                                });
                                                return [...currentItems];
                                            });
                                        },
                                    });
                                }}>
                                <Icon type="tag" />
                            </div>
                        </Tooltip>
                        <Tooltip placement="top" title="移除控件">
                            <div
                                className="z-live-tool-item right-item delete"
                                onClick={() => {
                                    Modal.confirm({
                                        title: `确认移除[${item.label}]这个控件吗?`,
                                        okText: '确定',
                                        cancelText: '取消',
                                        onOk() {
                                            setNewCurrentGroupItems(formViewerRef, item, (currentItems, i) => {
                                                linkageRef.current &&
                                                    removeSomeLinkage(linkageRef, currentItems[i].fieldKey);
                                                currentItems.splice(i, 1);
                                                return currentItems;
                                            });
                                        },
                                    });
                                }}>
                                <Icon type="delete" />
                            </div>
                        </Tooltip>
                        <Tooltip placement="top" title="修改控件">
                            <div
                                className="z-live-tool-item right-item"
                                onClick={() => {
                                    openUpdateControl(
                                        showModal,
                                        item.groupId,
                                        formViewerRef,
                                        linkageRef,
                                        item,
                                        'update',
                                        getExtendComponents,
                                    );
                                }}>
                                <Icon type="form" />
                            </div>
                        </Tooltip>
                        <div className="z-live-tool-item right-item">
                            <i className="zero-icon zerod-move" data-handle="handle" />
                        </div>
                    </div>
                </div>
            );
        },
        submitBtnRender: (onSubmit, props) => (
            <div
                span={24}
                data-groupid={props.group.id}
                className="z-text-center z-margin-bottom-10 z-add-formitem-btn"
                onClick={() => {
                    openUpdateControl(
                        showModal,
                        props.group.id,
                        formViewerRef,
                        linkageRef,
                        null,
                        'add',
                        getExtendComponents,
                    );
                }}>
                <Icon type="plus" /> 添加控件
            </div>
        ),
    }).current;
}
function getParentElement(el) {
    let _pE = el.parentElement;
    while (_pE && !_pE.className.includes('z-form-row')) {
        _pE = el.parentElement;
    }
    return _pE;
}

function getGroupIndex(formViewerRef, group) {
    const groups = formViewerRef.current.getFormGroups();
    const index = groups.findIndex((g) => g.id === group.id);
    const newGroups = groups.slice(0);
    return [newGroups, index];
}

function getNewGroupData(labelLayout, groupnameNumRef) {
    groupnameNumRef.current++;
    const item = {
        additive: true,
        name: `组名-${groupnameNumRef.current}`,
        id: GenNonDuplicateID(),
        formFieldInfoList: [],
        labelLayout,
    };
    return item;
}

const propTypes = {
    formData: PropTypes.object.isRequired,
    onSave: PropTypes.func,
    showRightModal: PropTypes.func,
    showLayerRightModal: PropTypes.func,
    getMultiRowFormData: PropTypes.func,
};
const defaultProps = {
    formData: {},
};

const ShowFormViewer = React.memo(
    React.forwardRef((props, ref) => {
        const { getMultiRowFormData, getExtendComponents } = props;
        const [formData, setFormData] = useState(null);
        const [show, triggleShow] = useState(false);
        const [mode, setMode] = useState('form');
        useImperativeHandle(ref, () => ({
            setFormData: (data, mode) => {
                triggleShow(true);
                setFormData(data);
                setMode(mode || 'form');
            },
            triggleShow,
        }));

        return formData && show ? (
            <div
                style={{
                    width: '90%',
                    margin: '0 auto',
                    padding: '20px 0',
                }}>
                {mode === 'form' ? (
                    <FormViewer
                        formData={formData}
                        momentFormat={true}
                        getExtendComponents={getExtendComponents}
                        getMultiRowFormData={getMultiRowFormData}
                        onSubmit={(values) => {
                            console.log(
                                Array.isArray(values)
                                    ? values.reduce((tol, curr) => ({ ...tol, ...curr }), {})
                                    : values,
                            );
                        }}
                        submitBtnRender={(submit) => (
                            <Button type="primary" onClick={submit}>
                                提交
                            </Button>
                        )}
                    />
                ) : mode === 'multiForm' ? (
                    <div className="z-panel">
                        <div className="z-panel-body">
                            <ZliveFormMultiRow
                                getExtendComponents={getExtendComponents}
                                showAddButton={true}
                                showRemoveButton={true}
                                extraValue={null}
                                formData={formData}
                                value={[{}]}
                                onChange={(value) => {
                                    console.log(value);
                                }}
                                momentFormat={true}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="z-panel" style={{ backgroundColor: '#f0f2f6' }}>
                        <div className="z-panel-body">
                            <ZliveInfoViewer
                                getExtendComponents={getExtendComponents}
                                formData={formData}
                                formValues={{}}
                                getMultiRowFormData={getMultiRowFormData}></ZliveInfoViewer>
                        </div>
                    </div>
                )}
            </div>
        ) : null;
    }),
);
const ShowJson = React.memo(
    React.forwardRef((props, ref) => {
        const [formData, setFormData] = useState(null);
        const [jsonValue, setJson] = useState('');
        const [show, triggleShow] = useState(false);

        const clickFunRef = useRef(null);
        useImperativeHandle(ref, () => ({
            setFormData: (data) => {
                clickFunRef.current = null;
                triggleShow(true);
                setFormData(data);
            },
            triggleShow,
            onImportJson: (callback) => {
                triggleShow(true);
                clickFunRef.current = callback;
                setJson('');
            },
        }));

        useEffect(() => {
            if (formData) {
                formData.sectionList.forEach((item) => {
                    delete item.id;
                    item.formFieldInfoList.forEach((field) => {
                        delete field.id;
                    });
                });
                delete formData.id;
                delete formData.code;
                setJson(JSON.stringify(formData));
            }
        }, [formData]);
        return show ? (
            <>
                <div
                    style={{
                        width: '90%',
                        margin: '0 auto',
                        padding: '20px 0',
                    }}>
                    <div className="z-panel">
                        <div className="z-panel-body">
                            <TextArea
                                value={jsonValue}
                                autoSize={false}
                                rows={30}
                                onChange={({ target: { value } }) => {
                                    setJson(value);
                                }}></TextArea>
                            {clickFunRef.current ? (
                                <div className="z-text-center z-padding-top-15">
                                    <Button
                                        type="primary"
                                        onClick={() => {
                                            if (jsonValue) {
                                                clickFunRef.current &&
                                                    clickFunRef.current(parseJsonToObject(jsonValue));
                                            }
                                        }}>
                                        导入JSON
                                    </Button>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </>
        ) : null;
    }),
);

const GroupNameStyle = React.memo((props) => {
    const { value, onChange } = props;
    const [selectValue, setSelectValue] = useState(value);
    useEffect(() => {
        setSelectValue(value);
    }, [value]);
    return (
        <Select
            value={selectValue}
            onChange={(val) => {
                setSelectValue(val);
                onChange && onChange(val);
            }}
            size="small"
            className="z-margin-left-15-important"
            style={{ width: '140px' }}>
            {labelShowTags.map((item) => (
                <Select.Option key={item.value} value={item.value}>
                    {item.label}
                </Select.Option>
            ))}
        </Select>
    );
});

const ZliveForm = function LiveForm({ formData, onSave, getMultiRowFormData, getExtendComponents }) {
    const mainContext = useContext(ZerodMainContext.context);
    const fullLayerContext = useContext(ZerodLayerContext.context);
    const showRightModal = fullLayerContext.showLayerRightModal || mainContext.showRightModal;
    const [insideFormData, setInsideFormData] = useState({});
    useEffect(() => {
        if (formData) {
            setInsideFormData(formData);
        }
    }, [formData]);
    insideFormData.customControlRender = null;
    const domWrapperElRef = useRef();
    const groupnameNumRef = useRef(0);
    const layerRef = useRef(null);
    const linkageRef = useRef(null);
    const showViewerRef = useRef(null);
    const showJsonRef = useRef(null);
    const layoutFormRef = useRef(null);
    //取FormViewer的实例
    const formViewerRef = useRef(null);
    //打开modal的方法
    const showModal = dataType.isFunction(showRightModal) ? showRightModal : () => {};
    if (!insideFormData.sectionList || !insideFormData.sectionList.length) {
        insideFormData.sectionList = [getNewGroupData(insideFormData.labelLayout, groupnameNumRef)];
    }
    //当前Zform的items
    const [titleFormRendered, setTitleFormRendered] = useState(false);
    const items = useGetItems(
        insideFormData,
        formViewerRef,
        layoutFormRef,
        showModal,
        onSave,
        layerRef,
        showViewerRef,
        titleFormRendered,
        linkageRef,
        showJsonRef,
        setInsideFormData,
        getExtendComponents,
    );
    const [showGroups, setShowGroups] = useState({ value: [], groups: [] });

    //FormGroup里面Zform的扩展属性
    const formProps = useFormProps(showModal, formViewerRef, linkageRef, getExtendComponents);
    //存dragula的实例
    const drakeRef = useRef(null);
    //存拖动元素下一个元素
    const nextSiblingRef = useRef(null);
    //动态表单组变化的回调
    const onFormGroupsChange = useCallback(
        (formGroups, fromName) => {
            if (!drakeRef.current) {
                if (formGroups.length) {
                    drakeRef.current = dragula(
                        formGroups
                            .filter((g) => g.groupRef.current && g.groupRef.current.getShowState())
                            .map((g) => g.groupRef.current.getWrapperDom().querySelector('.z-form-row')),
                        {
                            removeOnSpill: false,
                            revertOnSpill: true,
                            direction: 'mixed',
                            copy: false,
                            copySortSource: false,
                            accepts(el, target, source, sibling) {
                                //因为 z-add-formitem-btn 按钮是target/source最后一个子元素，也就是没有sibling时是不能被停放的
                                if (!sibling) {
                                    return false;
                                }
                                return true;
                            },
                            moves(el, source, handle, sibling) {
                                return handle.dataset.handle == 'handle';
                            },
                        },
                    )
                        .on('cloned', (cloneEl, sourceEl, type) => {
                            nextSiblingRef.current = sourceEl.nextElementSibling;
                            const _parEl = getParentElement(sourceEl);
                            cloneEl.className += ` z-live-form-item-clone ${_parEl.className.slice(
                                /z\-form\-label\-/g.exec(_parEl.className).index,
                            )}`;
                        })
                        .on('drop', (el, target, source, sibling) => {
                            const groups = formViewerRef.current.getFormGroups();
                            const currentItem = parseJsonToObject(el.dataset.item);
                            const currentGroup = groups.find((g) => g.id == currentItem.groupId);
                            const newFormItems = currentGroup.groupRef.current.getFormItems().slice(0);
                            const currentindex = newFormItems.findIndex((item) => item.key == currentItem.key);
                            const currentFormitem = newFormItems[currentindex];
                            if (target === source) {
                                if (sibling.dataset.item) {
                                    const siblingItem = parseJsonToObject(sibling.dataset.item);
                                    const sibingindex = newFormItems.findIndex((item) => item.key == siblingItem.key);
                                    if (currentindex < sibingindex) {
                                        newFormItems.splice(sibingindex, 0, currentFormitem);
                                        newFormItems.splice(currentindex, 1);
                                    } else if (currentindex > sibingindex) {
                                        newFormItems.splice(currentindex, 1);
                                        newFormItems.splice(sibingindex, 0, currentFormitem);
                                    }
                                } else {
                                    newFormItems.splice(currentindex, 1);
                                    newFormItems.push(currentFormitem);
                                }
                                currentGroup.groupRef.current.setFormItems(newFormItems);
                            } else {
                                let targetGroup = null;
                                let targetFormItems = [];
                                if (sibling.dataset.item) {
                                    const siblingItem = parseJsonToObject(sibling.dataset.item);

                                    targetGroup = groups.find((g) => g.id == siblingItem.groupId);
                                    targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);
                                    const sibingindex = targetFormItems.findIndex(
                                        (item) => item.key == siblingItem.key,
                                    );
                                    currentFormitem.groupId = siblingItem.groupId;
                                    targetFormItems.splice(sibingindex, 0, currentFormitem);
                                } else if (sibling.dataset.groupid) {
                                    targetGroup = groups.find((g) => g.id == sibling.dataset.groupid);
                                    targetFormItems = targetGroup.groupRef.current.getFormItems().slice(0);
                                    currentFormitem.groupId = sibling.dataset.groupid;
                                    targetFormItems.push(currentFormitem);
                                }
                                if (targetGroup) {
                                    target.removeChild(el);
                                    source.appendChild(el);
                                    newFormItems.splice(currentindex, 1);
                                    targetGroup.groupRef.current.setFormItems(targetFormItems);
                                    currentGroup.groupRef.current.setFormItems(newFormItems);
                                }
                            }
                        });
                }
            } else {
                drakeRef.current.containers = formGroups
                    .filter((g) => g.groupRef.current && g.groupRef.current.getShowState())
                    .map((g) => g.groupRef.current.getWrapperDom().querySelector('.z-form-row'));
            }
            if (fromName !== 'showEdit') {
                setShowGroups({
                    ...showGroups,
                    groups: [...formGroups],
                    value: formGroups
                        .filter((g) => {
                            console.log(g.name, g.groupRef.current);
                            return g.groupRef.current && g.groupRef.current.getShowState();
                        })
                        .map((g) => g.name),
                });
            }
            groupnameNumRef.current = formGroups.length;
        },
        [groupnameNumRef, showGroups],
    );
    const getFormInstance = useCallback((form) => {
        layoutFormRef.current = form;
    }, []);

    const [pageHeaderBox, setPageHeaderBox] = useState(null);
    useEffect(() => {
        let parEl = domWrapperElRef.current;
        while (parEl && !parEl.dataset.zgt_modal) {
            parEl = parEl.parentElement;
        }
        if (parEl) {
            setPageHeaderBox(parEl.querySelector('#ZpageHeaderBox'));
        }
    }, []);

    const groupTitleLeftRender = useCallback(
        (group, groupAttr, setGroupAttr, groups) => (
            <>
                <GroupNameEdit
                    value={group.name}
                    onChange={(val) => {
                        if (!val) {
                            message.error('组名不能为空');
                            return true;
                        }
                        const hasindex = groups.findIndex((item) => item.name === val);
                        if (hasindex > -1) {
                            message.error('组名不能与其他组名相同');
                            return true;
                        }
                        const vi = showGroups.value.findIndex((item) => item === group.name);
                        if (vi > -1) {
                            showGroups.value.splice(vi, 1, val);
                        }
                        if (Array.isArray(linkageRef.current)) {
                            linkageRef.current.forEach((a) => {
                                if (['5.1', '5.3'].includes(a.linkageType)) {
                                    a.dist.forEach((f) => {
                                        f.fields.forEach((g) => {
                                            if (g.groupName === group.name) {
                                                g.groupName = val;
                                            }
                                        });
                                    });
                                }
                            });
                        }
                        // console.log(linkageRef.current);
                        group.name = val;
                        setGroupAttr({ ...groupAttr, name: group.name });
                        setShowGroups({ ...showGroups, groups });
                    }}
                />
                <GroupNameStyle
                    value={group.labelShowTag}
                    onChange={(val) => {
                        group.labelShowTag = val;
                    }}></GroupNameStyle>
                <div style={{ display: 'inline-block', width: '200px', marginLeft: '15px' }}>
                    <Slider
                        min={60}
                        max={800}
                        tipFormatter={(val) => `控件LabelWidth:${val}px`}
                        defaultValue={parseInt(
                            group.config && group.config.labelWidth ? group.config.labelWidth : '120px',
                            10,
                        )}
                        onAfterChange={(value) => {
                            const newConfig = group.config || {};
                            newConfig.labelWidth = `${value}px`;
                            group.config = newConfig;
                            setNewCurrentGroupItems(formViewerRef, { groupId: group.id }, (currentItems, i) =>
                                currentItems.map((item) => ({ ...item, labelWidth: `${value}px` })),
                            );
                        }}
                    />
                </div>
            </>
        ),
        [showGroups],
    );
    const groupTitleRightRender = useCallback(
        (group, groupAttr, setGroupAttr, groups) => (
            <>
                <div style={{ display: 'inline-block', width: '200px', marginRight: '15px' }}>
                    <Slider
                        min={1}
                        max={24}
                        tipFormatter={(val) => `组占格:${val}`}
                        defaultValue={parseInt(
                            group.config && group.config.groupSpan ? group.config.groupSpan : 24,
                            10,
                        )}
                        onAfterChange={(value) => {
                            const newConfig = group.config || {};
                            newConfig.groupSpan = value;
                            group.config = newConfig;
                            setNewCurrentGroups(formViewerRef, { groupId: group.id }, (goups, i) => {
                                groups[i].config.groupSpan = value;
                                goups.splice(i, 1, { ...groups[i] });
                                return [...goups];
                            });
                        }}
                    />
                </div>

                <Checkbox
                    style={{ marginRight: '15px' }}
                    checked={!!group.hidden}
                    onChange={(e) => {
                        group.hidden = Number(e.target.checked);
                        setGroupAttr({ ...groupAttr, hidden: group.hidden });
                    }}>
                    默认隐藏组
                </Checkbox>
                <InsertGroupBtns
                    onInsertUp={() => {
                        const [newGroups, index] = getGroupIndex(formViewerRef, group);
                        const groupItem = getGroupItem({
                            group: getNewGroupData(layoutFormRef.current.getFieldValue('labelLayout'), groupnameNumRef),
                        });
                        if (index === 0) {
                            newGroups.unshift(groupItem);
                        } else {
                            newGroups.splice(index, 0, groupItem);
                        }
                        formViewerRef.current.setFormGroups(newGroups);
                        message.success('向上插入组成功');
                    }}
                    onInsertDown={() => {
                        const [newGroups, index] = getGroupIndex(formViewerRef, group);
                        const groupItem = getGroupItem({
                            group: getNewGroupData(layoutFormRef.current.getFieldValue('labelLayout'), groupnameNumRef),
                        });
                        if (index === newGroups.length - 1) {
                            newGroups.push(groupItem);
                        } else {
                            newGroups.splice(index + 1, 0, groupItem);
                        }
                        formViewerRef.current.setFormGroups(newGroups);
                        message.success('向下插入组成功');
                    }}
                />
                <GroupMoveBtns
                    onMoveUp={() => {
                        const [newGroups, index] = getGroupIndex(formViewerRef, group);
                        if (index > 0) {
                            newGroups.splice(index, 1);
                            newGroups.splice(index - 1, 0, group);
                            formViewerRef.current.setFormGroups(newGroups);
                            message.success('上移成功');
                        }
                    }}
                    onMoveDown={() => {
                        const [newGroups, index] = getGroupIndex(formViewerRef, group);
                        if (index > -1 && index < newGroups.length - 1) {
                            newGroups.splice(index + 2, 0, group);
                            newGroups.splice(index, 1);
                            formViewerRef.current.setFormGroups(newGroups);
                            message.success('下移成功');
                        }
                    }}
                    onRemove={() => {
                        Modal.confirm({
                            title: `确认移除[${group.name}]这个组吗?`,
                            okText: '确定',
                            cancelText: '取消',
                            onOk() {
                                const [newGroups, index] = getGroupIndex(formViewerRef, group);
                                if (newGroups.length === 1) {
                                    message.warning('最后一组不能移除');
                                    return;
                                }
                                newGroups.splice(index, 1);
                                formViewerRef.current.setFormGroups(newGroups);
                                message.success('移除成功');
                            },
                        });
                    }}
                />
                <Tag color={group.additive ? 'blue' : 'magenta'}>{group.additive ? '新增' : `ID${group['id']}`}</Tag>
            </>
        ),
        [],
    );
    const configHeader = (
        <section className="app-body" style={{ padding: '20px 20px 15px' }}>
            <div className="z-panel">
                <div className="z-panel-body" style={{ paddingBottom: '10px' }}>
                    <Zform
                        items={items}
                        labelLayout="inline"
                        style={{ width: '100%' }}
                        submitBtnName=""
                        getFormInstance={getFormInstance}
                        afterItemsRendered={() => {
                            setTitleFormRendered(true);
                        }}
                        excludeHideValue={false}
                        excludeHideValid={false}
                        hiddenItemFirstRendering={false}
                    />
                    <div className="z-flex">
                        <div>显示编辑组：</div>
                        <div className="z-flex-1">
                            <Checkbox.Group
                                options={showGroups.groups.map((g) => g.name)}
                                value={showGroups.value}
                                onChange={(val) => {
                                    setShowGroups({ ...showGroups, value: val });
                                    const firstShowing = [];
                                    showGroups.groups.forEach((g) => {
                                        if (val.includes(g.name) && !g.groupRef.current.getIsFirstShow()) {
                                            firstShowing.push(g);
                                        } else {
                                            g.groupRef.current.show(val.includes(g.name));
                                        }
                                    });
                                    if (firstShowing.length) {
                                        setTimeout(() => {
                                            firstShowing.forEach((g) => {
                                                g.groupRef.current.show(true);
                                            });
                                            onFormGroupsChange(showGroups.groups, 'showEdit');
                                        }, 300);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    return (
        <section ref={domWrapperElRef} style={{ padding: '0 20px 20px' }}>
            <FormContext.Provider value={formProps}>
                {pageHeaderBox ? ReactDOM.createPortal(configHeader, pageHeaderBox) : configHeader}
                <FormViewer
                    onFormGroupsChange={onFormGroupsChange}
                    ref={formViewerRef}
                    groupClassName="z-live-form-group"
                    formData={insideFormData}
                    title={false}
                    linkage={false}
                    noAsync={true}
                    groupTitleLeftRender={groupTitleLeftRender}
                    groupTitleRightRender={groupTitleRightRender}
                    getExtendComponents={getExtendComponents}
                />
            </FormContext.Provider>
            <ZfullLayer ref={layerRef}>
                <ShowFormViewer
                    ref={showViewerRef}
                    getMultiRowFormData={getMultiRowFormData}
                    getExtendComponents={getExtendComponents}
                />
                <ShowJson ref={showJsonRef} />
            </ZfullLayer>
        </section>
    );
};
ZliveForm.propTypes = propTypes;
ZliveForm.defaultProps = defaultProps;
ZliveForm.FormViewer = FormViewer;
export default ZliveForm;
