import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import { Icon, Modal, message } from "antd";
import { getControl } from "../Zform/controls";
import { httpAjax } from "zerod/components/zTool";
import ZerodMainContext from "../ZerodMainContext";
import ZerodLayerContext from "../ZerodLayerContext";
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
};
/**
 * config
 * 	{
 * 		url:多文件上传的接口,
 * 		urlMethod:多文件上传请求方式,
 * 		urlParamName:上传接口的参数名,
 * 		detailUrl:获取多文件列表的接口,
 * 		detailUrlMethod:获取多文件请求类型，
 * 		detailUrlParamName:获取多文件列表的接口的参数名,
 * 		userIdName:"userId",// 用户id参数名
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
	} = props;
	const wrapperElRef = useRef(null);
	//fileList：上传文件的列表数据，setTruefileList：文件数据流
	const [fileState, setFileState] = useState({ fileList: [], setTruefileList: [] });
	//保存已上传文件的uid和服务id
	const hasUploadDoneServerIdsRef = useRef([]);
	const noUploader = fileState.setTruefileList.filter(file => {
		// console.log("---ids", hasUploadDoneServerIdsRef.current, getFileUids(hasUploadDoneServerIdsRef.current));
		return !getFileUids(hasUploadDoneServerIdsRef.current).includes(file.uid);
	});
	// console.log(noUploader, hasUploadDoneServerIdsRef.current, fileState);
	//获取调用showModalLoading的第二个参数
	const modalRef = useRef("");
	useEffect(() => {
		modalRef.current =
			getLayerModalInsertLocation && typeof getLayerModalInsertLocation === "function"
				? getLayerModalInsertLocation(wrapperElRef.current)
				: typeof getInsertLocation === "function"
				? getInsertLocation(wrapperElRef.current)
				: null;
	}, []);
	const showLoading =
		showLayerModalLoading && typeof showLayerModalLoading === "function"
			? showLayerModalLoading
			: typeof showModalLoading === "function"
			? showModalLoading
			: () => {
					return null;
			  };
	//处理value
	useEffect(() => {
		if (!Array.isArray(value)) {
			return;
		}
		if (!config.detailUrl) {
			message.error("未配置请求多文件的后台地址");
			return;
		}
		const hasGetDetailIds = value.filter(id => {
			return !getFileUids(hasUploadDoneServerIdsRef.current, "serverId").includes(id);
		});
		// console.log(modalRef.current)
		if (hasGetDetailIds.length) {
			showLoading(true, modalRef.current, "获取文件中...");
			httpAjax(config.detailUrlMethod ? config.detailUrlMethod : "post", config.detailUrl, {
				[config.detailUrlParamName ? config.detailUrlParamName : "fileIds"]: hasGetDetailIds,
			})
				.then(re => {
					const files = re.data.map(item => {
						return {
							uid: item.id,
							name: `${item.originalFileName}.${item.fileSuffix}`,
							status: "done",
							type: item.fileType,
							url: item.filePath,
						};
					});
					hasUploadDoneServerIdsRef.current = [
						...hasUploadDoneServerIdsRef.current,
						...re.data.map(item => {
							return { uid: item.id, serverId: item.id };
						}),
					];
					setFileState({
						fileList: [...fileState.fileList, ...files],
						setTruefileList: [...fileState.setTruefileList, ...files],
					});
				})
				.catch(re => {
					message.error(re && re.msg ? re.msg : "获取已上传列表失败。");
				})
				.finally(() => {
					showLoading(false, modalRef.current);
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
		httpAjax(
			config.urlMethod ? config.urlMethod : "post",
			`${config.url}?${config.userIdName ? config.userIdName : "userId"}=${userId}`,
			formData,
		)
			.then(re => {
				hasUploadDoneServerIdsRef.current = [
					...hasUploadDoneServerIdsRef.current,
					...re.data.map((server, i) => {
						return { uid: noUploader[i].uid, serverId: server.id };
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
				typeof onChange === "function" && onChange(getFileUids(hasUploadDoneServerIdsRef.current, "serverId"));
			})
			.catch(re => {
				message.error(re && re.msg ? re.msg : "上传失败。");
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
	const commitButton = (
		<div className="z-liveform-upload-btn z-margin-top-10" onClick={handleUpload}>
			<span>
				<Icon type="check" /> 上传
			</span>
		</div>
	);
	//选文件按钮
	const uploadButton = (
		<div className="z-liveform-upload-btn">
			<span>
				<Icon type="upload" /> 选择文件
			</span>
		</div>
	);
	return (
		<div className="z-liveform-upload-wrapper" ref={wrapperElRef}>
			{/* 使用antd的上传组件 */}
			{getControl("Upload", {
				children: uploadButton,
				multiple: config.multiple,
				// action: config.url,
				listType: "picture",
				name: "file",
				className: "z-liveform-upload",
				accept: config.accept,
				//onChange={this.handleUploadChange}
				fileList: fileState.fileList,
				onPreview: file => {
					console.log("----", file);
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
							typeof onChange === "function" &&
								onChange(getFileUids(hasUploadDoneServerIdsRef.current, "serverId"));
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
					let reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = () => {
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
							setTruefileList: [...fileState.setTruefileList, file],
						});
					};
					return false;
				},
			})}
			{noUploader.length ? commitButton : null}
		</div>
	);
});
MyUpload.propTypes = propTypes;
MyUpload.defaultProps = defaultProps;
export default ZerodMainContext.setConsumer(ZerodLayerContext.setConsumer(React.memo(MyUpload)));
