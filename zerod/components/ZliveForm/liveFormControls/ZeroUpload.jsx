export * from './ZformUpload';

//旧版
// import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import { Icon, Modal, message, Spin } from 'antd';
// import { getControl } from '../../Zform/controls';
// import httpAjax from '../../zTool/httpAjax';
// import { dataType } from '../../zTool';
// import ZerodMainContext from '../../ZerodMainContext';
// import ZerodLayerContext from '../../ZerodLayerContext';
// import Zviewer from '../../Zviewer';
// import { imgTypeRegExp } from '../regExpression';
// function getFileUids(files, key = 'uid') {
//     return files.map((file) => {
//         return file[key];
//     });
// }
// const propTypes = {
//     config: PropTypes.object,
//     getUserInfo: PropTypes.func,
//     getInsertLocation: PropTypes.func,
//     getLayerModalInsertLocation: PropTypes.func,
//     showModalLoading: PropTypes.func,
//     showLayerModalLoading: PropTypes.func,
//     value: PropTypes.array,
//     onChange: PropTypes.func,
//     field: PropTypes.object,
//     noWrapper: PropTypes.bool,
// };
// const defaultProps = {
//     getUserInfo() {
//         return {};
//     },
//     getInsertLocation() {
//         return null;
//     },
//     noWrapper: false,
// };
// /**
//  * config
//  * 	{
//  * 		url: string //多文件上传的接口,
//  * 		urlMethod: string //多文件上传请求方式,
//  * 		urlParamName: string //上传接口的参数名,
//  *      uploaderResponse: object //转发value接收的字段名
//  * 		userIdName: string ,// 用户id参数名
//  *      autoUpload ：boolean //是否自动上传（是否出现确认上传按钮）
//  *      requestMode: string  //上传接口上传模式  single(单文件) | multiple(多文件)
//  *      isSourceFile ： boolean // onChange事件导出的value是否带着文件流数据，true时以上属性都无效，即不会调用上传接口，不会出现确认上传按钮
//  *      fileAccept: string //上传可选的文件类型
//  *      maxUploadLength ： number  //最大上传数量
//  *      fileListType ： stirng  //列表展示模式  picture | picture-card
//  *      maxMegabytes : number // 允许选择最大文件大小（M） 默认 10M
//  * 	}
//  */
// //上传文件组件
// const MyUpload = React.forwardRef((props, ref) => {
//     const {
//         config,
//         getUserInfo,
//         getInsertLocation,
//         getLayerModalInsertLocation,
//         showModalLoading,
//         showLayerModalLoading,
//         value,
//         onChange,
//         field,
//         buttonName,
//         noWrapper,
//     } = props;
//     const trigglePreviewRef = useRef(-1);
//     const [loading, setLoading] = useState(false);
//     const getModalName = getLayerModalInsertLocation || getInsertLocation;
//     const showLoading = showLayerModalLoading || showModalLoading || setLoading;

//     const { fileAccept, requestMode, maxUploadLength, autoUpload, isSourceFile } = config;
//     const fileListType = config.fileListType || 'picture-card';
//     const maxMegabytes = typeof config.maxMegabytes === 'number' ? config.maxMegabytes : 10;
//     const isPictureCardType = fileListType === 'picture-card';
//     const isOnlyPicture = !fileAccept || fileAccept === 'image/*';
//     const uploaderResponse = config.uploaderResponse || {
//         id: 'id',
//         filePath: 'filePath',
//         fileSuffix: 'fileSuffix',
//         originalFileName: 'originalFileName',
//     };
//     //是否单文件接口
//     const isSingle = requestMode === 'single';
//     //fileList：上传文件的列表数据，setTruefileList：文件数据流
//     const [fileState, setFileState] = useState({ fileList: [], setTruefileList: [] });
//     //保存已上传文件的uid和服务id
//     const hasUploadDoneServerIdsRef = useRef([]);
//     //过滤出未上传的文件
//     const noUploader = fileState.setTruefileList.filter((file) => {
//         // console.log("---ids", hasUploadDoneServerIdsRef.current, getFileUids(hasUploadDoneServerIdsRef.current));
//         return !getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid);
//     });
//     // console.log(noUploader, hasUploadDoneServerIdsRef.current, fileState);
//     //获取调用showModalLoading的第二个参数
//     const modalRef = useRef('');
//     //处理value
//     // console.log("render", value);
//     useEffect(() => {
//         if (!Array.isArray(value) || !value.length) {
//             setFileState({
//                 fileList: [],
//                 setTruefileList: [],
//             });
//             return;
//         }
//         const hasGetDetailIds = value.filter((server) => {
//             const isObject = dataType.isObject(server);
//             const currentServers = getFileUids(hasUploadDoneServerIdsRef.current, 'serverId');

//             const hasServer = currentServers.find((item) =>
//                 isObject
//                     ? item[uploaderResponse.id]
//                         ? item[uploaderResponse.id] === server[uploaderResponse.id]
//                         : item[uploaderResponse.filePath] === server[uploaderResponse.filePath]
//                     : item === server,
//             );
//             return !hasServer;
//         });
//         if (hasGetDetailIds.length) {
//             const files = hasGetDetailIds.filter((item) => {
//                 const isPic = dataType.isObject(item) ? item[uploaderResponse.filePath] : item;
//                 if (!isPic) {
//                     console.warn('上传控件的value缺少相关的文件地址');
//                 }
//                 return isPic;
//             });
//             let picPromise = Promise.resolve(files);
//             if (config.storageType === 'PRIVATE') {
//                 picPromise = httpAjax(config.getPrivateUrl.urlMethod, config.getPrivateUrl.url, {
//                     fileIds: files.map((item) => item[uploaderResponse.id]),
//                 })
//                     .then((res) => {
//                         return Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
//                     })
//                     .catch(() => {
//                         return files;
//                     });
//             }
//             picPromise.then((files) => {
//                 files = files.map((item) => {
//                     const isObject = dataType.isObject(item);
//                     hasUploadDoneServerIdsRef.current.push({
//                         uid: isObject ? item[uploaderResponse.id] || item[uploaderResponse.filePath] : item,
//                         serverId: item,
//                     });
//                     if (isObject) {
//                         return {
//                             uid: item[uploaderResponse.id] || item[uploaderResponse.filePath],
//                             name: `${(item[uploaderResponse.originalFileName] || '').replace(
//                                 item[uploaderResponse.fileSuffix] || '',
//                                 '',
//                             )}.${item[uploaderResponse.fileSuffix]}`,
//                             status: 'done',
//                             // status: config.storageType === 'PRIVATE' ? 'private' : 'done',
//                             type:
//                                 item[uploaderResponse.fileSuffix] &&
//                                 imgTypeRegExp.test(item[uploaderResponse.fileSuffix])
//                                     ? 'image'
//                                     : '',
//                             url: item[uploaderResponse.filePath],
//                         };
//                     }
//                     return {
//                         uid: item,
//                         name: item,
//                         status: 'done',
//                         type: imgTypeRegExp.test(item) ? 'image' : '',
//                         url: item,
//                     };
//                 });
//                 setFileState({
//                     fileList: [...fileState.fileList, ...files],
//                     setTruefileList: [...fileState.setTruefileList, ...files],
//                 });
//             });
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [value]);
//     //上传文件
//     const uploadAsync = () => {
//         if (!config.url) {
//             message.error('未配置上传多文件的后台地址');
//             return;
//         }

//         // const userinfo = getUserInfo();
//         // const userId = userinfo && userinfo.userDO ? userinfo.userDO.id : "";
//         // console.log("userinfo---", userinfo);
//         const formData = new FormData();
//         noUploader.forEach((file) => {
//             formData.append(config.urlParamName ? config.urlParamName : 'files', file);
//         });
//         showLoading(true, modalRef.current, '上传中...');
//         if (config.url)
//             httpAjax(
//                 config.urlMethod ? config.urlMethod : 'post',
//                 `${config.url}?${config.userIdName ? config.userIdName : 'userId'}=&storage=${config.storageType ||
//                     'PUBLIC'}`,
//                 formData,
//                 config.requestConfig,
//             )
//                 .then((re) => {
//                     const ulploadData = isSingle ? [re.data] : re.data;
//                     hasUploadDoneServerIdsRef.current = [
//                         ...hasUploadDoneServerIdsRef.current,
//                         ...ulploadData.map((server, i) => {
//                             return { uid: noUploader[i].uid, serverId: server };
//                         }),
//                     ];
//                     setFileState({
//                         ...fileState,
//                         fileList: fileState.fileList.map((file) => {
//                             return {
//                                 ...file,
//                                 status: getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid)
//                                     ? 'done'
//                                     : 'undetermined',
//                             };
//                         }),
//                     });
//                     message.success('上传成功。');
//                     const newValue = getFileUids(hasUploadDoneServerIdsRef.current, 'serverId');
//                     // console.log('上传完的value', newValue);
//                     return typeof onChange === 'function' && onChange(newValue, noUploader);
//                 })
//                 .catch((re) => {
//                     // message.error(re && re.msg ? re.msg : "上传失败。");
//                     //自动上传模式，上传失败时移除列表
//                     if (autoUpload) {
//                         setFileState({
//                             fileList: fileState.fileList.filter((file) => {
//                                 const isNoUploader = noUploader.find((item) => item.uid === file.uid);
//                                 return !isNoUploader;
//                             }),
//                             setTruefileList: fileState.setTruefileList.filter((file) => {
//                                 const isNoUploader = noUploader.find((item) => item.uid === file.uid);
//                                 return !isNoUploader;
//                             }),
//                         });
//                     }
//                 })
//                 .finally(() => {
//                     showLoading(false, modalRef.current);
//                 });
//     };
//     //确认上传事件
//     const handleUpload = () => {
//         if (noUploader.length) {
//             uploadAsync();
//         }
//     };
//     //确认上传按钮
//     const commitButton = isPictureCardType ? (
//         <div
//             className="ant-upload ant-upload-select ant-upload-select-picture-card z-float-left z-flex-items-center"
//             onClick={handleUpload}>
//             <Icon type="check" />
//             <div>确认上传</div>
//         </div>
//     ) : (
//         <div className="z-liveform-upload-btn z-margin-top-10" onClick={handleUpload}>
//             <span>
//                 <Icon type="check" /> 确认上传
//             </span>
//         </div>
//     );
//     const uploadButtonName = buttonName || (isOnlyPicture ? '选择图片' : '选择文件');
//     //选文件按钮
//     const uploadButton =
//         isSingle && noUploader.length ? null : isPictureCardType ? (
//             <span>
//                 <Icon type="upload" /> {uploadButtonName}
//             </span>
//         ) : (
//             <div className="z-liveform-upload-btn">
//                 <span>
//                     <Icon type="upload" /> {uploadButtonName}
//                 </span>
//             </div>
//         );
//     const viewerRef = useRef();
//     useEffect(() => {
//         autoUpload && !isSourceFile && handleUpload();
//     }, [fileState]);
//     const contentNode = (
//         <div
//             className="z-clear-fix"
//             ref={(el) => {
//                 modalRef.current = getModalName(el);
//             }}>
//             {/* 使用antd的上传组件 */}
//             {getControl('Upload', {
//                 disabled: !!field.disabled,
//                 children:
//                     (maxUploadLength && maxUploadLength <= fileState.fileList.length) || !!field.disabled
//                         ? !!field.disabled && !fileState.fileList.length
//                             ? '禁用'
//                             : null
//                         : uploadButton,
//                 multiple: false,
//                 // action: config.url,
//                 listType: fileListType,
//                 name: 'file',
//                 className: `z-liveform-upload ${fileListType === 'picture-card' ? 'z-float-left' : ''}`,
//                 accept: fileAccept !== 'all' ? fileAccept : undefined,
//                 //onChange={this.handleUploadChange}
//                 fileList: fileState.fileList,
//                 onPreview: (file) => {
//                     // console.log("----", file, fileState.fileList);
//                     if (typeof file.type === 'string' && !file.type.includes('image')) {
//                         message.error('无法预览非图片文件');
//                         return;
//                     }
//                     const privateIds = [];
//                     fileState.fileList.forEach((item) => {
//                         const finded = hasUploadDoneServerIdsRef.current.find((f) => f.uid === item.uid);
//                         if (finded && finded.serverId && finded.serverId.storage === 'PRIVATE') {
//                             privateIds.push({ uid: finded.uid, id: finded.serverId[uploaderResponse.id] });
//                         }
//                     });
//                     // console.log(privateIds, fileState.fileList, hasUploadDoneServerIdsRef.current);
//                     if (privateIds.length && config.getPrivateUrl) {
//                         showLoading(true, modalRef.current);
//                         httpAjax(
//                             config.getPrivateUrl.urlMethod,
//                             config.getPrivateUrl.url,
//                             {
//                                 fileIds: privateIds.map((item) => item.id),
//                             },
//                             config.getPrivateUrl.requestConfig,
//                         )
//                             .then((res) => {
//                                 const urls = res.data.map((item, i) => {
//                                     return {
//                                         ...privateIds[i],
//                                         url: item[uploaderResponse.filePath],
//                                     };
//                                 });
//                                 trigglePreviewRef.current = fileState.fileList.findIndex(
//                                     (item) => item.uid === file.uid,
//                                 );
//                                 setFileState({
//                                     ...fileState,
//                                     fileList: fileState.fileList.map((item, i) => {
//                                         const findFile = urls.find((f) => f.uid === item.uid);
//                                         return {
//                                             ...item,
//                                             url: findFile ? findFile.url : item.url,
//                                         };
//                                     }),
//                                 });
//                             })
//                             .finally(() => {
//                                 showLoading(false, modalRef.current);
//                             });
//                     } else {
//                         viewerRef.current && viewerRef.current.viewer.show(true);
//                         viewerRef.current &&
//                             viewerRef.current.viewer.view(
//                                 fileState.fileList.findIndex((item) => item.uid === file.uid),
//                             );
//                     }
//                 },
//                 //移除
//                 onRemove: (file) => {
//                     function removeFlieFromList() {
//                         const index = fileState.fileList.findIndex((item) => {
//                             return item.uid === file.uid;
//                         });
//                         const serverIndex = hasUploadDoneServerIdsRef.current.findIndex((item) => {
//                             return item.uid === file.uid;
//                         });
//                         if (serverIndex > -1) {
//                             hasUploadDoneServerIdsRef.current.splice(serverIndex, 1);
//                             const newValue = getFileUids(hasUploadDoneServerIdsRef.current, 'serverId');
//                             console.log('移除完的value', newValue);
//                             typeof onChange === 'function' && onChange(newValue);
//                         }
//                         if (index > -1) {
//                             fileState.fileList.splice(index, 1);
//                             fileState.setTruefileList.splice(index, 1);
//                             setFileState({
//                                 fileList: [...fileState.fileList],
//                                 setTruefileList: [...fileState.setTruefileList],
//                             });
//                         }
//                     }
//                     if (getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid)) {
//                         Modal.confirm({
//                             title: '此文件已上传到服务器，确定从列表中移除?',
//                             content: '',
//                             okText: '确定',
//                             cancelText: '取消',
//                             onOk() {
//                                 removeFlieFromList();
//                             },
//                             // onCancel() {
//                             // 	console.log("Cancel");
//                             // },
//                         });
//                     } else {
//                         removeFlieFromList();
//                     }
//                 },
//                 //取消自动上传，实现手动上传
//                 beforeUpload: (file) => {
//                     //打印出文件类型
//                     console.table({
//                         'upload file type': file.type || ' ',
//                     });
//                     const currM = file.size / 1024 / 1024;
//                     const reg =
//                         typeof field.regularExpression === 'string'
//                             ? field.regularExpression.replace(/(^\/|\/$)/g, '')
//                             : '';
//                     if (reg && typeof file.type === 'string') {
//                         //正则校验上传的文件类型
//                         try {
//                             if (!new RegExp(reg).test(file.type)) {
//                                 message.error(field.errorMsg || '上传的文件类型未通过校验');
//                                 return;
//                             }
//                         } catch (e) {
//                             console.log(e);
//                         }
//                     }
//                     if (currM > maxMegabytes) {
//                         message.error(`选择的文件近${currM.toFixed(2)}M,不允许上传超过${maxMegabytes}M的文件`);
//                         return;
//                     }
//                     if (isOnlyPicture && !/^image/.test(file.type)) {
//                         message.error('请选择图片类型的文件');
//                         return;
//                     }
//                     const setFileList = (filePath) => {
//                         let setTruefileList = [];
//                         if (isSourceFile) {
//                             const sourceFile = {
//                                 [uploaderResponse.id]: file.uid,
//                                 uid: file.uid,
//                                 [uploaderResponse.filePath]: filePath,
//                                 sourceFile: file,
//                             };
//                             hasUploadDoneServerIdsRef.current = [
//                                 ...hasUploadDoneServerIdsRef.current,
//                                 { uid: file.uid, serverId: sourceFile },
//                             ];
//                             setTruefileList = [...fileState.setTruefileList, sourceFile];
//                             typeof onChange === 'function' && onChange(setTruefileList);
//                         } else {
//                             setTruefileList = [...fileState.setTruefileList, file];
//                         }
//                         setFileState({
//                             fileList: [
//                                 ...fileState.fileList,
//                                 {
//                                     uid: file.uid,
//                                     name: file.name,
//                                     status: 'undetermined',
//                                     type: file.type,
//                                     url: filePath,
//                                 },
//                             ],
//                             setTruefileList,
//                         });
//                     };
//                     if (!/^image/.test(file.type)) {
//                         setFileList(file.name);
//                         return false;
//                     }
//                     let reader = new FileReader();
//                     reader.readAsDataURL(file);
//                     reader.onloadend = () => {
//                         setFileList(reader.result);
//                     };
//                     return false;
//                 },
//             })}
//             {noUploader.length && !autoUpload && !isSourceFile ? commitButton : null}
//             {fileState.fileList.length
//                 ? ReactDOM.createPortal(
//                       <div
//                           style={{
//                               position: 'fixed',
//                               visibility: 'hidden',
//                               top: 0,
//                               left: 0,
//                               width: '100%',
//                               transform: 'translate(-100%,0)',
//                           }}>
//                           <Zviewer
//                               urls={fileState.fileList
//                                   .filter((item) => item.type && item.type.includes('image'))
//                                   .map((item) => item.url)}
//                               ref={viewerRef}
//                               viewerUpdated={() => {
//                                   if (trigglePreviewRef.current > -1) {
//                                       viewerRef.current && viewerRef.current.viewer.show(true);
//                                       viewerRef.current && viewerRef.current.viewer.view(trigglePreviewRef.current);
//                                   }
//                               }}
//                               onViewerHide={() => {
//                                   // console.log("hide");
//                                   trigglePreviewRef.current = -1;
//                               }}
//                           />
//                       </div>,
//                       document.body,
//                   )
//                 : null}
//         </div>
//     );

//     return (
//         <Spin spinning={loading} size="small">
//             {noWrapper ? contentNode : <div className="z-liveform-upload-wrapper">{contentNode}</div>}
//         </Spin>
//     );
// });
// MyUpload.propTypes = propTypes;
// MyUpload.defaultProps = defaultProps;
// export default ZerodMainContext.setConsumer(ZerodLayerContext.setConsumer(React.memo(MyUpload)));
