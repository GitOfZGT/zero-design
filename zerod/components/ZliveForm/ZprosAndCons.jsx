import React, { useRef } from "react";
import PropTypes from "prop-types";
import httpAjax from "../zTool/httpAjax";
import ZeroUpload from "./ZeroUpload";
import ZerodMainContext from "../ZerodMainContext";
import ZerodLayerContext from "../ZerodLayerContext";
import { message } from "antd";
const propTypes = {
	getInsertLocation: PropTypes.func,
	getLayerModalInsertLocation: PropTypes.func,
	showModalLoading: PropTypes.func,
	showLayerModalLoading: PropTypes.func,
	value: PropTypes.array,
	onChange: PropTypes.func,
	config: PropTypes.object,
	field: PropTypes.object,
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
const ZprosAndCons = React.memo(props => {
	const {
		value,
		onChange,
		config,
		field,
		getLayerModalInsertLocation,
		getInsertLocation,
		showLayerModalLoading,
		showModalLoading,
	} = props;
	const currentValue = value || [];
	const getModalName = getLayerModalInsertLocation || getInsertLocation;
	const showLoading = showLayerModalLoading || showModalLoading;
	const modalRef = useRef("");
	return (
		<div
			className="z-liveform-upload-wrapper z-flex"
			ref={el => {
				modalRef.current = getModalName(el);
			}}
		>
			<ZeroUpload
				value={currentValue[0] ? [currentValue[0]] : undefined}
				onChange={(val, uploadFiles) => {
					if (val.length && uploadFiles && uploadFiles.length) {
						const picData = val[0] || null;
						const { ocrUrl, ocrUrlMethod, ocrEnabled } = config;
						if ((ocrEnabled === undefined || ocrEnabled) && ocrUrl) {
							const formData = new FormData();
							uploadFiles.forEach(file => {
								formData.append("file", file);
							});
							showLoading(true, modalRef.current, "证件识别中...");
							return httpAjax(ocrUrlMethod, ocrUrl, formData).then(res => {
								message.success("证件识别成功。");
								currentValue[0] = picData;
								picData["ocr"] = res.data;
								onChange && onChange([...currentValue]);
							});
						} else {
							currentValue[0] = picData;
							onChange && onChange([...currentValue]);
						}
					} else {
						currentValue[0] = val[0];
						onChange && onChange([...currentValue]);
					}
				}}
				config={{ ...config, maxUploadLength: 1, fileAccept: "image/*", fileListType: "picture-card" }}
				field={field}
				buttonName="正面"
			/>
			<ZeroUpload
				value={currentValue[1] ? [currentValue[1]] : undefined}
				onChange={(val, formData) => {
					currentValue[1] = val[0] || null;
					onChange && onChange([...currentValue]);
				}}
				config={{ ...config, maxUploadLength: 1, fileAccept: "image/*", fileListType: "picture-card" }}
				field={field}
				buttonName="反面"
			/>
		</div>
	);
});
ZprosAndCons.propTypes = propTypes;
ZprosAndCons.defaultProps = defaultProps;
export default ZerodMainContext.setConsumer(ZerodLayerContext.setConsumer(ZprosAndCons));
