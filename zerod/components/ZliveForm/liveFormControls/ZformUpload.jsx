/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Icon, message, Spin } from 'antd';
import { getControl } from '../../Zform/controls';
import httpAjax from '../../zTool/httpAjax';
import { dataType } from '../../zTool';
import Zviewer from '../../Zviewer';
import { imgTypeRegExp } from '../regExpression';
function getFileFormData({ filename, files, data }) {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
    }
    files.forEach((file) => {
        formData.append(filename, file, file.name);
    });
    return formData;
}
function cunstomUploadRequest({ config, uploadContent }) {
    const { urlMethod = 'post', url, storageType = 'PUBLIC', requestConfig, urlParamName } = config;
    let data = {};
    const files = [];
    uploadContent.forEach((item) => {
        files.push(item.file);
        data = { ...data, ...item.data };
    });
    const formData = getFileFormData({
        filename: urlParamName,
        files,
        data,
    });
    httpAjax(urlMethod, `${url}?storage=${storageType}`, formData, {
        ...(requestConfig || {}),
        onUploadProgress: ({ total, loaded }) => {
            uploadContent.forEach((item) => {
                item.onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, item.file);
            });
        },
    })
        .then(({ data: response }) => {
            uploadContent.forEach((item, i) => {
                item.onSuccess(Array.isArray(response) ? response[i] : response, item.file);
            });
        })
        .catch((err) => {
            uploadContent.forEach((item) => {
                item.onError(err);
            });
        });
}

const defaultUploaderResponse = {
    id: 'id',
    filePath: 'filePath',
    fileSuffix: 'fileSuffix',
    originalFileName: 'originalFileName',
    fileName: 'fileName',
};
const propTypes = {
    config: PropTypes.shape({
        //文件上传的接口,
        url: PropTypes.string.isRequired,
        //文件上传请求方式,
        urlMethod: PropTypes.string,
        //上传接口的参数名,
        urlParamName: PropTypes.string.isRequired,
        //转发value接收的字段名
        uploaderResponse: PropTypes.shape({
            id: PropTypes.string,
            filePath: PropTypes.string,
            fileSuffix: PropTypes.string,
            originalFileName: PropTypes.string,
        }),
        //上传是 axios 的其他的参数，可以添加请求头等
        requestConfig: PropTypes.object,
        // 上传接口上传模式  single(单文件) | multiple(多文件)
        requestMode: PropTypes.string,
        //上传可选的文件类型
        fileAccept: PropTypes.string,
        //最大上传数量
        maxUploadLength: PropTypes.number,
        //列表展示模式  picture | picture-card
        fileListType: PropTypes.string,
        // 允许选择最大文件大小（M） 默认 10M
        maxMegabytes: PropTypes.number,
        //存储文件的类型 ： 'PRIVATE'（私有的）| 'PUBLIC'（公开的）
        storageType: PropTypes.string,
        //获取私有文件的接口
        getPrivateUrl: PropTypes.shape({
            url: PropTypes.string,
            urlMethod: PropTypes.string,
        }),
        // onChange事件导出的value是否带着文件流数据，true时以上属性都无效，即不会调用上传接口
        isSourceFile: PropTypes.bool,
    }),
    value: PropTypes.array,
    onChange: PropTypes.func,
    field: PropTypes.shape({
        //是否禁用选文件
        disabled: PropTypes.bool,
        //校验选的文件类型的正则
        regularExpression: PropTypes.string,
        //校验失败的提示
        errorMsg: PropTypes.string,
    }),
    //不加包裹div
    noWrapper: PropTypes.bool,
    //是否允许多选
    multiple: PropTypes.bool,
    //添加按钮的名称
    buttonName: PropTypes.string,
};
const defaultProps = {
    noWrapper: false,
    multiple: true,
    field: {},
    config: {},
};
//上传文件组件
const MyUpload = React.forwardRef((props, ref) => {
    const { config, multiple, value, onChange, field, buttonName, noWrapper } = props;
    const { fileAccept, maxUploadLength, isSourceFile } = config;
    const fileListType = config.fileListType || 'picture-card';
    const isPictureCardType = fileListType === 'picture-card';
    const maxMegabytes = typeof config.maxMegabytes === 'number' ? config.maxMegabytes : 10;
    const isOnlyPicture = !fileAccept || fileAccept === 'image/*';
    const uploaderResponse = { ...defaultUploaderResponse, ...(config.uploaderResponse || {}) };
    const trigglePreviewRef = useRef(-1);
    const viewerRef = useRef();
    const [loading, showLoading] = useState(false);
    //fileList：上传文件的列表数据
    const [fileState, setFileState] = useState({ fileList: [], uploading: false });

    //存起实际待上传的
    const waitTopUploadListRef = useRef([]);
    //多文件接口的上传请求处理内容
    const multipleUploadContentRef = useRef([]);

    //处理value
    useEffect(() => {
        if (isSourceFile && Array.isArray(value) && value.length) {
            setFileState((prevState) => ({
                ...prevState,
                fileList: [
                    ...value.map((item) => ({
                        uid: item.id,
                        name: `${(item.originalFileName || '').replace(item.fileSuffix || '', '')}.${item.fileSuffix}`,
                        status: 'done',
                        type: item.fileSuffix && imgTypeRegExp.test(item.fileSuffix) ? 'image' : '',
                        url: item.filePath,
                        thumbUrl: item.filePath,
                        response: item,
                    })),
                    ...fileState.fileList.filter((item) => item.status && item.status !== 'done'),
                ],
            }));
            return;
        }
        if (!Array.isArray(value) || !value.length) {
            setFileState((prevState) => ({
                ...prevState,
                fileList: prevState.fileList.filter((item) => item.status && item.status !== 'done'),
            }));
            return;
        }
        const allObject = value.every((val) => dataType.isObject(val));
        if (allObject) {
            let fliePromise = Promise.resolve(value);
            //私读标识 或者 文件中存在 私读标识，就去请求新的文件地址
            if (config.storageType === 'PRIVATE' || value.some((item) => item.storage === 'PRIVATE')) {
                const fileIds = value
                    .filter(
                        (item) =>
                            !fileState.fileList.some(
                                (file) => file.response && file.response[uploaderResponse['id']] === item.id,
                            ),
                    )
                    .map((item) => item.id);
                if (fileIds.length && config.getPrivateUrl && config.getPrivateUrl.url) {
                    showLoading(true);
                    fliePromise = httpAjax(config.getPrivateUrl.urlMethod, config.getPrivateUrl.url, {
                        fileIds,
                    })
                        .then((res) => {
                            showLoading(false);
                            return Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
                        })
                        .catch(() => {
                            showLoading(false);
                            return [];
                        });
                }
            }
            fliePromise.then((data) => {
                setFileState((prevState) => ({
                    ...prevState,
                    fileList: [
                        ...value.map((item) => {
                            const existFile = fileState.fileList.find(
                                (file) =>
                                    file.status === 'done' &&
                                    file.response &&
                                    file.response[uploaderResponse.id] === item.id,
                            );
                            if (existFile) {
                                return existFile;
                            }
                            const founded = data.find((f) => f[uploaderResponse.id] === item.id);
                            if (founded) {
                                return {
                                    uid: founded[uploaderResponse.id],
                                    name: `${(founded[uploaderResponse.originalFileName] || '').replace(
                                        founded[uploaderResponse.fileSuffix] || '',
                                        '',
                                    )}.${founded[uploaderResponse.fileSuffix]}`,
                                    status: 'done',
                                    type:
                                        founded[uploaderResponse.fileSuffix] &&
                                        imgTypeRegExp.test(item[uploaderResponse.fileSuffix])
                                            ? 'image'
                                            : '',
                                    url: founded[uploaderResponse.filePath],
                                    thumbUrl: founded[uploaderResponse.filePath],
                                    response: founded,
                                };
                            }

                            return {
                                uid: item.id,
                                name: `${(item.originalFileName || '').replace(item.fileSuffix || '', '')}.${
                                    item.fileSuffix
                                }`,
                                status: 'done',
                                type: item.fileSuffix && imgTypeRegExp.test(item.fileSuffix) ? 'image' : '',
                                url: item.filePath,
                                thumbUrl: item.filePath,
                                response: item,
                            };
                        }),
                        ...fileState.fileList.filter((item) => item.status && item.status !== 'done'),
                    ],
                }));
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const uploadButtonName = buttonName || (isOnlyPicture ? '选择图片' : '选择文件');
    //选文件按钮
    const uploadButton = isPictureCardType ? (
        <span>
            <Icon type="upload" /> {uploadButtonName}
        </span>
    ) : (
        <div className="z-liveform-upload-btn">
            <span>
                <Icon type="upload" /> {uploadButtonName}
            </span>
        </div>
    );
    // console.log(fileState.fileList, '----fileState.fileList');
    const contentNode = (
        <div>
            {/* 使用antd的上传组件 */}
            {getControl('Upload', {
                disabled: !!field.disabled || fileState.uploading,
                children:
                    (maxUploadLength && maxUploadLength <= fileState.fileList.length) || !!field.disabled
                        ? !!field.disabled && !fileState.fileList.length
                            ? '禁用'
                            : null
                        : uploadButton,
                multiple,
                listType: fileListType,
                accept: fileAccept !== 'all' ? fileAccept : undefined,
                //onChange={this.handleUploadChange}
                fileList: fileState.fileList,
                onPreview: (file) => {
                    const requestPrivate = (privateIds) => {
                        if (privateIds.length && config.getPrivateUrl && config.getPrivateUrl.url) {
                            showLoading(true);
                            return httpAjax(config.getPrivateUrl.urlMethod, config.getPrivateUrl.url, {
                                fileIds: privateIds.map((item) => item.fileId),
                            });
                        }
                        return Promise.resolve();
                    };
                    if ((typeof file.type === 'string' && !file.type.includes('image')) || !file.type) {
                        //非图片类型的文件，打开新标签页
                        const foundFile = fileState.fileList.find((f) => f.uid === file.uid);
                        if (
                            config.storageType === 'PRIVATE' ||
                            (foundFile.response && foundFile.response.storage === 'PRIVATE')
                        ) {
                            const privateIds = [
                                {
                                    uid: file.uid,
                                    fileId:
                                        (foundFile?.response && foundFile.response[uploaderResponse['id']]) || file.uid,
                                },
                            ];
                            requestPrivate(privateIds)
                                .then((res) => {
                                    if (!res) {
                                        return;
                                    }
                                    if (Array.isArray(res.data)) {
                                        res.data.forEach((item) => {
                                            window.open(item[uploaderResponse['filePath']], '_blank');
                                        });
                                    }
                                })
                                .finally(() => {
                                    showLoading(false);
                                });
                        } else {
                            window.open(
                                (file.response && file.response[uploaderResponse['filePath']]) || file.url,
                                '_blank',
                            );
                        }
                        return;
                    }
                    //图片类型的私读文件，获取最新地址预览
                    if (
                        config.storageType === 'PRIVATE' ||
                        fileState.fileList.some((file) => file.response && file.response.storage === 'PRIVATE')
                    ) {
                        const privateIds = fileState.fileList
                            .filter((file) => file.status === 'done')
                            .map((file) => ({
                                uid: file.uid,
                                fileId: (file.response && file.response[uploaderResponse['id']]) || file.uid,
                            }));
                        requestPrivate(privateIds)
                            .then((res) => {
                                if (!res) {
                                    return;
                                }
                                const urls = res.data.map((item, i) => ({
                                    ...privateIds[i],
                                    url: item[uploaderResponse.filePath],
                                }));
                                trigglePreviewRef.current = fileState.fileList.findIndex(
                                    (item) => item.uid === file.uid,
                                );
                                setFileState((prevState) => ({
                                    ...prevState,
                                    fileList: prevState.fileList.map((file) => {
                                        const newUrl = urls.find((item) => item.uid === file.uid);
                                        if (newUrl) {
                                            file.url = newUrl.url;
                                        }
                                        return file;
                                    }),
                                }));
                            })
                            .finally(() => {
                                showLoading(false);
                            });
                    } else {
                        trigglePreviewRef.current = fileState.fileList.findIndex((item) => item.uid === file.uid);
                        setFileState((prevState) => ({
                            ...prevState,
                            fileList: prevState.fileList.map((file) => {
                                file.url = (file.response && file.response[uploaderResponse['filePath']]) || file.url;
                                return file;
                            }),
                        }));
                    }
                },
                //移除
                onRemove: (file) => {
                    console.log(file, '移除');
                },
                //取消自动上传，实现手动上传
                beforeUpload: (file, fileList) => {
                    //打印出文件类型
                    console.table({
                        'upload file type': file.type || ' ',
                    });

                    const reg =
                        typeof field.regularExpression === 'string'
                            ? field.regularExpression.replace(/(^\/|\/$)/g, '')
                            : '';
                    if (reg && typeof file.type === 'string') {
                        //正则校验上传的文件类型
                        try {
                            if (!new RegExp(reg).test(file.type)) {
                                message.error(`${file.name}：${field.errorMsg || '上传的文件类型未通过校验'}`);
                                return false;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    }
                    const currM = file.size / 1024 / 1024;
                    if (currM > maxMegabytes) {
                        message.error(`选择的文件近${currM.toFixed(2)}M,不允许上传超过${maxMegabytes}M的文件`);
                        return false;
                    }
                    if (isOnlyPicture && !/^image/.test(file.type)) {
                        message.error('请选择图片类型的文件');
                        return false;
                    }
                    if (
                        maxUploadLength &&
                        waitTopUploadListRef.current.length + fileState.fileList.length >= maxUploadLength
                    ) {
                        message.warning(`允许上传数量不超过${maxUploadLength}`);
                        return false;
                    }
                    //存起实际待上传的
                    waitTopUploadListRef.current = [...waitTopUploadListRef.current, file];
                    //不上传，只取文件流数据
                    if (isSourceFile) {
                        return false;
                    }
                },
                //自定义请求
                customRequest({
                    action,
                    data,
                    file,
                    filename,
                    headers,
                    onError,
                    onProgress,
                    onSuccess,
                    withCredentials,
                }) {
                    // console.log(filename, file, data, '====');
                    const { requestMode } = config;
                    if (requestMode === 'single') {
                        //单文件接口上传，直接请求
                        cunstomUploadRequest({
                            config,
                            uploadContent: [
                                {
                                    onProgress,
                                    file,
                                    onSuccess,
                                    onError,
                                    data,
                                },
                            ],
                        });
                    } else {
                        onProgress({ percent: 0 }, file);
                        multipleUploadContentRef.current.push({
                            onProgress,
                            file,
                            onSuccess,
                            onError,
                            data,
                        });
                    }
                },
                onChange: ({ file, fileList, event }) => {
                    const realList = fileList.filter((item) => {
                        const founded = waitTopUploadListRef.current.find((f) => f.uid === item.uid);
                        return founded || item.status !== undefined;
                    });
                    // console.log('change----up', realList);

                    setFileState((prevState) => ({
                        ...prevState,
                        fileList: realList,
                    }));
                    //不上传，只取文件流数据
                    if (isSourceFile) {
                        if (waitTopUploadListRef.current.length === realList.length) {
                            onChange && onChange(waitTopUploadListRef.current);
                        }
                        return;
                    }

                    //多文件接口情况，开始上传
                    if (
                        !fileState.uploading &&
                        multipleUploadContentRef.current.length &&
                        waitTopUploadListRef.current.length &&
                        waitTopUploadListRef.current.length === multipleUploadContentRef.current.length
                    ) {
                        setFileState((prevState) => ({
                            ...prevState,
                            uploading: true,
                        }));
                        cunstomUploadRequest({
                            config,
                            uploadContent: multipleUploadContentRef.current,
                        });
                    } else if (
                        waitTopUploadListRef.current.length ===
                        realList.filter((item) => item.status === 'uploading').length
                    ) {
                        //单文件接口上传时
                        setFileState((prevState) => ({
                            ...prevState,
                            uploading: true,
                        }));
                    }
                    //所有上传成功的时候
                    if (realList.every((item) => item.status && item.status !== 'uploading')) {
                        if (realList.some((item) => item.status === 'error')) {
                            message.warning('注意：存在上传失败的文件');
                        }
                        const doneList = realList.filter((item) => item.status === 'done');
                        const newVal = doneList
                            .map((file) => {
                                const isJeust = waitTopUploadListRef.current.some((item) => item.uid === file.uid);
                                if (isJeust && file.response) {
                                    //刚刚上传的
                                    return {
                                        id: file.response[uploaderResponse['id']],
                                        filePath: file.response[uploaderResponse['filePath']],
                                        fileSuffix: file.response[uploaderResponse['fileSuffix']],
                                        originalFileName: file.response[uploaderResponse['originalFileName']],
                                        fileName: file.response[uploaderResponse['fileName'] || 'fileName'],
                                        storage: file.response.storage,
                                    };
                                }
                                //value里存在的
                                const founded = Array.isArray(value)
                                    ? value.find(
                                          (f) =>
                                              f.id === file.uid ||
                                              f.id === (file.response && file.response[uploaderResponse['id']]),
                                      )
                                    : null;
                                if (founded) {
                                    return founded;
                                }
                                return null;
                            })
                            .filter((item) => item !== null);
                        // console.log(newVal, doneList, realList, waitTopUploadListRef.current, 'success----');
                        onChange && onChange(newVal, waitTopUploadListRef.current);
                        //上传成功清除
                        waitTopUploadListRef.current = [];
                        multipleUploadContentRef.current = [];
                        setFileState((prevState) => ({
                            ...prevState,
                            uploading: false,
                        }));
                    }
                },
            })}
            {fileState.fileList.length
                ? ReactDOM.createPortal(
                      <div
                          style={{
                              position: 'fixed',
                              visibility: 'hidden',
                              top: 0,
                              left: 0,
                              width: '100%',
                              transform: 'translate(-100%,0)',
                          }}>
                          <Zviewer
                              urls={fileState.fileList
                                  .filter((item) => item.url && item.type && item.type.includes('image'))
                                  .map((item) => item.url)}
                              ref={viewerRef}
                              viewerUpdated={() => {
                                  if (trigglePreviewRef.current > -1) {
                                      viewerRef.current && viewerRef.current.viewer.show(true);
                                      viewerRef.current && viewerRef.current.viewer.view(trigglePreviewRef.current);
                                  }
                              }}
                              onViewerHide={() => {
                                  trigglePreviewRef.current = -1;
                              }}
                          />
                      </div>,
                      document.body,
                  )
                : null}
        </div>
    );

    return (
        <Spin spinning={loading}>
            {noWrapper ? contentNode : <div className="z-liveform-upload-wrapper">{contentNode}</div>}
        </Spin>
    );
});
MyUpload.propTypes = propTypes;
MyUpload.defaultProps = defaultProps;
export default React.memo(MyUpload);
