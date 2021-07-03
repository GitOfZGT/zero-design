import React, { useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import httpAjax from '../../zTool/httpAjax';
import ZformUpload from './ZformUpload';
import ZerodMainContext from '../../ZerodMainContext';
import ZerodLayerContext from '../../ZerodLayerContext';
import { message, Spin } from 'antd';
const propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    config: PropTypes.object,
    field: PropTypes.object,
    //是否显示第二个选文件按钮
    secondUpload: PropTypes.bool,
    firstButtonName: PropTypes.string,
    secondButtonName: PropTypes.string,
};
const defaultProps = {
    secondUpload: false,
    multiple: false,
};
const ZprosAndCons = React.memo((props) => {
    const { value, onChange, config, field, secondUpload, firstButtonName, secondButtonName, multiple } = props;
    const [loading, setLoading] = useState(false);
    const { getInsertLocation, showModalLoading } = useContext(ZerodMainContext.context);
    const { getLayerModalInsertLocation, showLayerModalLoading } = useContext(ZerodLayerContext.context);
    const currentValue = value || [];
    const getModalName = getLayerModalInsertLocation || getInsertLocation || (() => {});
    const showLoading = showLayerModalLoading || showModalLoading || setLoading;
    const modalRef = useRef('');
    return (
        <Spin spinning={loading}>
            <div
                className="z-liveform-upload-wrapper"
                style={{ display: 'flex' }}
                ref={(el) => {
                    modalRef.current = getModalName(el);
                }}>
                <ZformUpload
                    noWrapper={true}
                    multiple={multiple}
                    value={currentValue[0] ? [currentValue[0]] : undefined}
                    onChange={(val, uploadFiles) => {
                        if (val.length && uploadFiles && uploadFiles.length) {
                            const picData = val[0] || null;
                            const { ocrUrl, ocrUrlMethod, ocrEnabled, requestConfig } = config;
                            if (ocrEnabled && ocrUrl) {
                                const formData = new FormData();
                                uploadFiles.forEach((file) => {
                                    formData.append('file', file);
                                });
                                showLoading(true, modalRef.current, 'OCR识别中...');
                                httpAjax(ocrUrlMethod, ocrUrl, formData, requestConfig)
                                    .then((res) => {
                                        message.success('OCR识别成功。');
                                        currentValue[0] = picData;
                                        picData['ocr'] = res.data;
                                        onChange && onChange([...currentValue]);
                                    })
                                    .catch((e) => {
                                        message.error('OCR识别失败。');
                                    })
                                    .finally(() => {
                                        showLoading(false, modalRef.current);
                                    });
                            } else {
                                currentValue[0] = picData;
                                onChange &&
                                    onChange(!currentValue[0] && !currentValue[1] ? undefined : [...currentValue]);
                            }
                        } else {
                            currentValue[0] = val[0];
                            onChange && onChange(!currentValue[0] && !currentValue[1] ? undefined : [...currentValue]);
                        }
                    }}
                    config={{ ...config, maxUploadLength: 1, fileAccept: 'image/*', fileListType: 'picture-card' }}
                    field={field}
                    buttonName={firstButtonName || '正面'}
                />
                {secondUpload ? (
                    <ZformUpload
                        noWrapper={true}
                        multiple={multiple}
                        value={currentValue[1] ? [currentValue[1]] : undefined}
                        onChange={(val, formData) => {
                            if (val[0]) {
                                currentValue[1] = val[0];
                            } else {
                                currentValue.splice(1, 1);
                            }
                            onChange && onChange(!currentValue[0] && !currentValue[1] ? undefined : [...currentValue]);
                        }}
                        config={{ ...config, maxUploadLength: 1, fileAccept: 'image/*', fileListType: 'picture-card' }}
                        field={field}
                        buttonName={secondButtonName || '反面'}
                    />
                ) : null}
            </div>
        </Spin>
    );
});
ZprosAndCons.propTypes = propTypes;
ZprosAndCons.defaultProps = defaultProps;
export default ZprosAndCons;
