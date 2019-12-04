import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Icon, Modal, message } from "antd";
import { getControl } from "../Zform/controls";
import httpAjax from "../zTool/httpAjax";
import { dataType } from "../zTool";
import ZerodMainContext from "../ZerodMainContext";
import ZerodLayerContext from "../ZerodLayerContext";
import Zviewer from "../Zviewer";
function getFileUids(files, key = "uid") {
	return files.map(file => {
		return file[key];
	});
}
const propTypes = {
	config: PropTypes.object,
	getUserInfo: PropTypes.func,
	getInsertLocation: PropTypes.func,
	getLayerModalInsertLocation: PropTypes.func,
	showModalLoading: PropTypes.func,
	showLayerModalLoading: PropTypes.func,
	value: PropTypes.array,
	onChange: PropTypes.func,
	field: PropTypes.object,
	noWrapper: PropTypes.bool,
};
const defaultProps = {
	getUserInfo: function() {
		return {};
	},
	getInsertLocation: function() {
		return null;
	},
	showModalLoading: function() {
		return null;
	},
	noWrapper: false,
};
/**
 * config
 * 	{
 * 		url: string //多文件上传的接口,
 * 		urlMethod: string //多文件上传请求方式,
 * 		urlParamName: string //上传接口的参数名,
 *      uploaderResponse: object //转发value接收的字段名
 * 		userIdName: string ,// 用户id参数名
 *      autoUpload ：boolean //是否自动上传（是否出现确认上传按钮）
 *      requestMode: string  //上传接口上传模式  single(单文件) | multiple(多文件)
 *      isSourceFile ： boolean // onChange事件导出的value是否带着文件流数据，true时以上属性都无效，即不会调用上传接口，不会出现确认上传按钮
 *      fileAccept: string //上传可选的文件类型
 *      maxUploadLength ： number  //最大上传数量
 *      fileListType ： stirng  //列表展示模式  picture | picture-card
 *      maxMegabytes : number // 允许选择最大文件大小（M） 默认 10M
 * 	}
 */
//上传文件组件(多文件)
const MyUpload = React.forwardRef(function(props, ref) {
	const {
		config,
		getUserInfo,
		getInsertLocation,
		getLayerModalInsertLocation,
		showModalLoading,
		showLayerModalLoading,
		value,
		onChange,
		field,
		buttonName,
		noWrapper,
	} = props;
	const getModalName = getLayerModalInsertLocation || getInsertLocation;
	const showLoading = showLayerModalLoading || showModalLoading;

	const { fileAccept, requestMode, maxUploadLength, autoUpload, isSourceFile } = config;
	const fileListType = config.fileListType || "picture-card";
	const maxMegabytes = typeof config.maxMegabytes === "number" ? config.maxMegabytes : 10;
	const isPictureCardType = fileListType === "picture-card";
	const isOnlyPicture = fileAccept === "image/*";
	const uploaderResponse = config.uploaderResponse || {
		id: "id",
		filePath: "filePath",
		fileSuffix: "fileSuffix",
		originalFileName: "originalFileName",
	};
	//是否单文件接口
	const isSingle = requestMode === "single";
	//fileList：上传文件的列表数据，setTruefileList：文件数据流
	const [fileState, setFileState] = useState({ fileList: [], setTruefileList: [] });
	//保存已上传文件的uid和服务id
	const hasUploadDoneServerIdsRef = useRef([]);
	//过滤出未上传的文件
	const noUploader = fileState.setTruefileList.filter(file => {
		// console.log("---ids", hasUploadDoneServerIdsRef.current, getFileUids(hasUploadDoneServerIdsRef.current));
		return !getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid);
	});
	// console.log(noUploader, hasUploadDoneServerIdsRef.current, fileState);
	//获取调用showModalLoading的第二个参数
	const modalRef = useRef("");
	//处理value
	// console.log("render", value);
	useEffect(() => {
		if (!Array.isArray(value) || !value.length) {
			setFileState({
				fileList: [],
				setTruefileList: [],
			});
			return;
		}
		const hasGetDetailIds = value.filter(server => {
			const isObject = dataType.isObject(server);
			const currentServers = getFileUids(hasUploadDoneServerIdsRef.current, "serverId");

			const hasServer = currentServers.find(item =>
				isObject
					? item[uploaderResponse.id]
						? item[uploaderResponse.id] === server[uploaderResponse.id]
						: item[uploaderResponse.filePath] === server[uploaderResponse.filePath]
					: item === server,
			);
			return !hasServer;
		});
		if (hasGetDetailIds.length) {
			const files = hasGetDetailIds
				.filter(item => {
					const isPic = dataType.isObject(item) ? item[uploaderResponse.filePath] : item;
					if (!isPic) {
						console.warn("上传控件的value缺少相关的文件地址");
					}
					return isPic;
				})
				.map(item => {
					const isObject = dataType.isObject(item);
					hasUploadDoneServerIdsRef.current.push({
						uid: isObject ? item[uploaderResponse.id] || item[uploaderResponse.filePath] : item,
						serverId: item,
					});
					if (isObject) {
						return {
							uid: item[uploaderResponse.id] || item[uploaderResponse.filePath],
							name: `${item[uploaderResponse.originalFileName]}.${item[uploaderResponse.fileSuffix]}`,
							status: "done",
							type:
								item[uploaderResponse.fileSuffix] &&
								/(webp|svg|png|gif|jpg|jpeg|bmp|dpg)$/.test(item[uploaderResponse.fileSuffix])
									? "image"
									: "",
							url: item[uploaderResponse.filePath],
						};
					} else {
						return {
							uid: item,
							name: "",
							status: "done",
							type: /\.(webp|svg|png|gif|jpg|jpeg|bmp|dpg)$/.test(item) ? "image" : "",
							url: item,
						};
					}
				});
			setFileState({
				fileList: [...fileState.fileList, ...files],
				setTruefileList: [...fileState.setTruefileList, ...files],
			});
		}
	}, [value]);
	//上传文件
	const uploadAsync = () => {
		if (!config.url) {
			message.error("未配置上传多文件的后台地址");
			return;
		}

		const userinfo = getUserInfo();
		const userId = userinfo && userinfo.userDO ? userinfo.userDO.id : "";
		// console.log("userinfo---", userinfo);
		const formData = new FormData();
		noUploader.forEach(file => {
			formData.append(config.urlParamName ? config.urlParamName : "files", file);
		});
		showLoading(true, modalRef.current, "上传中...");
		if (config.url)
			httpAjax(
				config.urlMethod ? config.urlMethod : "post",
				`${config.url}?${config.userIdName ? config.userIdName : "userId"}=${userId}`,
				formData,
			)
				.then(re => {
					const ulploadData = isSingle ? [re.data] : re.data;
					hasUploadDoneServerIdsRef.current = [
						...hasUploadDoneServerIdsRef.current,
						...ulploadData.map((server, i) => {
							return { uid: noUploader[i].uid, serverId: server };
						}),
					];
					setFileState({
						...fileState,
						fileList: fileState.fileList.map(file => {
							return {
								...file,
								status: getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid)
									? "done"
									: "undetermined",
							};
						}),
					});
					message.success("上传成功。");
					const newValue = getFileUids(hasUploadDoneServerIdsRef.current, "serverId");
					console.log("上传完的value", newValue);
					return typeof onChange === "function" && onChange(newValue, noUploader);
				})
				.catch(re => {
					// message.error(re && re.msg ? re.msg : "上传失败。");
					//自动上传模式，上传失败时移除列表
					if (autoUpload) {
						setFileState({
							fileList: fileState.fileList.filter(file => {
								const isNoUploader = noUploader.find(item => item.uid === file.uid);
								return !isNoUploader;
							}),
							setTruefileList: fileState.setTruefileList.filter(file => {
								const isNoUploader = noUploader.find(item => item.uid === file.uid);
								return !isNoUploader;
							}),
						});
					}
				})
				.finally(() => {
					showLoading(false, modalRef.current);
				});
	};
	//确认上传事件
	const handleUpload = () => {
		if (noUploader.length) {
			uploadAsync();
		}
	};
	//确认上传按钮
	const commitButton = isPictureCardType ? (
		<div
			className="ant-upload ant-upload-select ant-upload-select-picture-card z-float-left z-flex-items-center"
			onClick={handleUpload}
		>
			<Icon type="check" />
			<div>确认上传</div>
		</div>
	) : (
		<div className="z-liveform-upload-btn z-margin-top-10" onClick={handleUpload}>
			<span>
				<Icon type="check" /> 确认上传
			</span>
		</div>
	);
	const uploadButtonName = buttonName ? buttonName : isOnlyPicture ? "选择图片" : "选择文件";
	//选文件按钮
	const uploadButton =
		isSingle && noUploader.length ? null : isPictureCardType ? (
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
	const viewerRef = useRef();
	useEffect(() => {
		autoUpload && !isSourceFile && handleUpload();
	}, [fileState]);

	const contentNode = (
		<div
			className="z-clear-fix"
			ref={el => {
				modalRef.current = getModalName(el);
			}}
		>
			{/* 使用antd的上传组件 */}
			{getControl("Upload", {
				disabled: !!field.disabled,
				children: maxUploadLength && maxUploadLength <= fileState.fileList.length ? null : uploadButton,
				multiple: false,
				// action: config.url,
				listType: fileListType,
				name: "file",
				className: `z-liveform-upload ${fileListType === "picture-card" ? "z-float-left" : ""}`,
				accept: fileAccept !== "all" ? fileAccept : undefined,
				//onChange={this.handleUploadChange}
				fileList: fileState.fileList,
				onPreview: file => {
					// console.log("----", file, fileState.fileList);
					if (file.type && !file.type.includes("image")) {
						message.error("无法预览非图片文件");
						return;
					}
					viewerRef.current && viewerRef.current.viewer.show(true);
					viewerRef.current &&
						viewerRef.current.viewer.view(fileState.fileList.findIndex(item => item.url === file.url));
				},
				//移除
				onRemove: file => {
					function removeFlieFromList() {
						const index = fileState.fileList.findIndex(item => {
							return item.uid === file.uid;
						});
						const serverIndex = hasUploadDoneServerIdsRef.current.findIndex(item => {
							return item.uid === file.uid;
						});
						if (serverIndex > -1) {
							hasUploadDoneServerIdsRef.current.splice(serverIndex, 1);
							const newValue = getFileUids(hasUploadDoneServerIdsRef.current, "serverId");
							console.log("移除完的value", newValue);
							typeof onChange === "function" && onChange(newValue);
						}
						if (index > -1) {
							fileState.fileList.splice(index, 1);
							fileState.setTruefileList.splice(index, 1);
							setFileState({
								fileList: [...fileState.fileList],
								setTruefileList: [...fileState.setTruefileList],
							});
						}
					}
					if (getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid)) {
						Modal.confirm({
							title: "此文件已上传到服务器，确定从列表中移除?",
							content: "",
							okText: "确定",
							cancelText: "取消",
							onOk() {
								removeFlieFromList();
							},
							// onCancel() {
							// 	console.log("Cancel");
							// },
						});
					} else {
						removeFlieFromList();
					}
				},
				//取消自动上传，实现手动上传
				beforeUpload: file => {
					// console.log("--beforeload--", file);
					const currM = file.size / 1024 / 1024;
					if (currM > maxMegabytes) {
						message.error(`选择的文件近${currM.toFixed(2)}M,不允许上传超过${maxMegabytes}M的文件`);
						return;
					}

					let reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = () => {
						let setTruefileList = [];

						if (isSourceFile) {
							const sourceFile = {
								[uploaderResponse.id]: file.uid,
								uid: file.uid,
								[uploaderResponse.filePath]: reader.result,
								sourceFile: file,
							};
							hasUploadDoneServerIdsRef.current = [
								...hasUploadDoneServerIdsRef.current,
								{ uid: file.uid, serverId: sourceFile },
							];
							setTruefileList = [...fileState.setTruefileList, sourceFile];
							typeof onChange === "function" && onChange(setTruefileList);
						} else {
							setTruefileList = [...fileState.setTruefileList, file];
						}
						setFileState({
							fileList: [
								...fileState.fileList,
								{
									uid: file.uid,
									name: file.name,
									status: "undetermined",
									type: file.type,
									url: reader.result,
								},
							],
							setTruefileList,
						});
					};
					return false;
				},
			})}
			{noUploader.length && !autoUpload && !isSourceFile ? commitButton : null}
			{fileState.fileList.length
				? ReactDOM.createPortal(
						<div
							style={{
								position: "fixed",
								visibility: "hidden",
								top: 0,
								left: 0,
								width: "100%",
								transform: "translate(-100%,0)",
							}}
						>
							<Zviewer
								urls={fileState.fileList
									.filter(item => item.type && item.type.includes("image"))
									.map(item => item.url)}
								ref={viewerRef}
							/>
						</div>,
						document.body,
				  )
				: null}
		</div>
	);

	return noWrapper ? contentNode : <div className="z-liveform-upload-wrapper">{contentNode}</div>;
});
MyUpload.propTypes = propTypes;
MyUpload.defaultProps = defaultProps;
export default ZerodMainContext.setConsumer(ZerodLayerContext.setConsumer(React.memo(MyUpload)));
