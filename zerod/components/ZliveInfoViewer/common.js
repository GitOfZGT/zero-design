/* eslint-disable no-case-declarations */
import React, { useState, useEffect } from 'react';
import { dataType } from '../zTool';
import httpAjax from '../zTool/httpAjax';
import './style.scss';
import ZbgImage from '../ZbgImage';
import { imgTypeRegExp } from '../ZliveForm/regExpression';
import ZpdfViewer from '../ZpdfViewer';
import MultiRowInfoControl from './MultiRowInfoControl';
import ZgapFilling from '../ZgapFilling';

export function getPrivateImgs({ files, config }) {
    const privates = files.filter((item) => item.storage === 'PRIVATE');
    let asycnPromise = Promise.resolve();
    if (privates.length && config.getPrivateUrl) {
        asycnPromise = httpAjax(config.getPrivateUrl.urlMethod, config.getPrivateUrl.url, {
            fileIds: privates.map((item) => item.id),
        });
    }
    return new Promise((resolve, reject) => {
        asycnPromise
            .then((res) => {
                if (res && Array.isArray(res.data)) {
                    files.forEach((item) => {
                        const finded = res.data.find((f) => f.id === item.id);
                        if (finded) {
                            item.filePath = finded.filePath;
                        }
                    });
                }
            })
            .finally(() => {
                resolve(files);
            });
    });
}
function DownLoadFile(props) {
    const { file, config } = props;
    return (
        <a
            href={file.filePath}
            onClick={(e) => {
                e.preventDefault();
                getPrivateImgs({ files: [file], config }).then((files) => {
                    if (files.length) {
                        const a = document.createElement('a');
                        a.download = files[0].originalFileName || files[0].name;
                        a.href = files[0].filePath;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                });
            }}>
            {file.originalFileName || file.name}
        </a>
    );
}

export function valueAccuracy({
    field,
    formValues = {},
    config,
    onImagePreview,
    onOpenLocation,
    getMultiRowFormData,
    customControlRender,
    getExtendComponents,
}) {
    let value = '';
    let fileList = [];
    let render = null;
    switch (field.fieldType) {
        case 11:
        case 16:
            if (Array.isArray(formValues[field.fieldKey])) {
                fileList = formValues[field.fieldKey];
                value = formValues[field.fieldKey];
                render = (value, data) => {
                    const val = value;
                    const imgs = [];
                    const files = [];
                    if (Array.isArray(val)) {
                        val.forEach((item) => {
                            if (!dataType.isObject(item)) return;
                            if (imgTypeRegExp.test(item.filePath)) {
                                imgs.push(item);
                            } else {
                                files.push(item);
                            }
                        });
                        return getPrivateImgs({ files: imgs, config }).then((newImgs) => (value, data) => (
                            <>
                                {newImgs.length ? (
                                    <div className="z-infoViewer-imgs">
                                        {newImgs.map((file, index) => (
                                            <div key={file.filePath} className="z-infoViewer-imgs-child">
                                                <ZbgImage
                                                    url={file.filePath}
                                                    onClick={() => {
                                                        onImagePreview &&
                                                            onImagePreview({
                                                                index,
                                                                images: newImgs,
                                                                config,
                                                            });
                                                    }}></ZbgImage>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}

                                {files.map((file) => (
                                    <p key={file.id} className="z-infoViewer-file">
                                        <DownLoadFile file={file} config={config}></DownLoadFile>
                                    </p>
                                ))}
                            </>
                        ));
                    }
                };
            } else {
                render = () => {};
            }
            break;
        case 12:
            value = formValues[field.fieldKey];
            if (value) {
                render = (val, record) => (
                    <div className="z-infoViewer-colorpicker">
                        <div style={{ backgroundColor: value }}></div>
                    </div>
                );
            }
            break;
        case 13: {
            if (dataType.isObject(formValues[field.fieldKey])) {
                value = formValues[field.fieldKey];
                render = (val, record) => (
                    <>
                        {val.name ? (
                            onOpenLocation ? (
                                <div
                                    key="name"
                                    className="z-infoViewer-location"
                                    onClick={() => {
                                        onOpenLocation && onOpenLocation({ value: val, config });
                                    }}>
                                    {val.name}
                                </div>
                            ) : (
                                <div>{val.name}</div>
                            )
                        ) : null}
                        <div key="address" className="z-infoViewer-location-address">
                            {val.address}
                        </div>
                    </>
                );
            }
            break;
        }
        case 15:
            if (dataType.isObject(formValues[field.fieldKey])) {
                value = formValues[field.fieldKey];
                render = (val) => (
                    <div>
                        <img
                            className="z-infoViewer-sign"
                            src={
                                /^data:image\//.test(val.personalSignature)
                                    ? val.personalSignature
                                    : `data:image/png;base64,${val.personalSignature}`
                            }
                            onClick={() => {
                                onImagePreview &&
                                    onImagePreview({
                                        index: 0,
                                        images: [{ filePath: val.personalSignature }],
                                        config: {},
                                    });
                            }}></img>
                    </div>
                );
            }
            break;
        case 17:
            if (dataType.isObject(formValues[field.fieldKey])) {
                const { selectListFieldNames, inputValueKeyName } = config;
                value = formValues[field.fieldKey][inputValueKeyName || selectListFieldNames.label];
            } else {
                value = formValues[field.fieldKey];
            }
            break;
        case 18:
            if (dataType.isArray(formValues[field.fieldKey])) {
                value = formValues[field.fieldKey];
            }
            render = (val) => {
                const { getFormDataParams } = config;
                return (
                    <div style={{ width: '100%' }}>
                        <MultiRowInfoControl
                            getMultiRowFormData={getMultiRowFormData}
                            getFormDataParams={getFormDataParams}
                            value={val || []}
                            canOpenAddressLocation={!!onOpenLocation}
                            customControlRender={customControlRender[field.fieldKey]}
                            getExtendComponents={getExtendComponents}
                        />
                    </div>
                );
            };
            break;
        case 19:
            if (dataType.isObject(formValues[field.fieldKey])) {
                value = formValues[field.fieldKey];
            }
            render = (val) => {
                const { textTemplate } = config;
                return (
                    <div style={{ width: '100%' }}>
                        <ZgapFilling textTemplate={textTemplate} value={val} disabled={true} />
                    </div>
                );
            };
            break;
        case 21:
            if (Array.isArray(formValues[field.fieldKey])) {
                value = formValues[field.fieldKey].map((item) => item.userName);
            } else {
                value = formValues[field.fieldKey];
            }
            break;
        // pdf展示器
        case 23: {
            if (dataType.isArray(formValues[field.fieldKey])) {
                value = formValues[field.fieldKey];
                render = (val, record) => {
                    const { tagName, getPrivateFile, ...others } = config;
                    return (
                        <div className="z-flex-1">
                            <ZpdfViewer
                                isViewArea={false}
                                value={val}
                                {...others}
                                getPrivateFile={(query) =>
                                    httpAjax(getPrivateFile.urlMethod, getPrivateFile.url, query)
                                }></ZpdfViewer>
                        </div>
                    );
                };
            }
            break;
        }
        default:
            const valLabel = formValues[`${field.fieldKey}Label`];
            const val = formValues[field.fieldKey];
            const strSyml = field.fieldType === 6 ? '/' : field.fieldType === 5 ? ' ~ ' : ' , ';
            if (valLabel) {
                value = Array.isArray(valLabel) ? valLabel.join(strSyml) : valLabel;
            } else if (Array.isArray(val)) {
                value = val[0] && (dataType.isObject(val[0]) || Array.isArray(val[0])) ? val : val.join(strSyml);
            } else if (Array.isArray(config.selectList) && config.selectList.length) {
                const selectItem = config.selectList.find((item) => item.value == val);
                value = selectItem ? selectItem.label : val;
            } else {
                value = val;
            }
            render = (text) => text;
    }
    return { value, render, fileList };
}
