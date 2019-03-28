import React from "react";
import { Checkbox, Input, Select, InputNumber, DatePicker, Radio, TimePicker, Upload, Icon, message } from "antd";
import linkageAction from "./linkageAction";
const getOptions = function(e) {
	return {
		rules: [
			{
				required: e.required == 1,
				message: "不能为空。",
			},
			...(e.regularExpression
				? [
						{
							pattern: e.regularExpression,
							message: e.errorMsg,
						},
				  ]
				: []),
		],
		initialValue: e.initialValue,
	};
};
const controls = {
	1: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return <Input placeholder={e.placeholder} {...opt} />;
		},
		getOptions,
	},
	2: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return <Input.TextArea placeholder={e.placeholder} {...opt} />;
		},
		getOptions,
	},
	3: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			const that = this;
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return (
				<Select
					placeholder={e.placeholder}
					{...opt}
					onChange={(v) => {
						linkageAction(linkages, getGroupsFn, e);
					}}
				>
					{config.selectList.map((item) => {
						if (item != null) {
							return (
								<Select.Option value={item.value} key={item.value}>
									{item.label}
								</Select.Option>
							);
						}
					})}
				</Select>
			);
		},
		getOptions,
	},
	4: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return <InputNumber placeholder={e.placeholder} {...opt} />;
		},
		getOptions,
	},
	5: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return <DatePicker format={e.format} placeholder={e.placeholder} {...opt} />;
		},
		getOptions,
	},
	8: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			const that = this;
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return (
				<Checkbox.Group
					{...opt}
					onChange={(v) => {
						linkageAction(linkages, getGroupsFn, e);
					}}
				>
					{config.selectList.map((e) => {
						return (
							<Checkbox key={e.value} value={e.value}>
								{e.label}
							</Checkbox>
						);
					})}
				</Checkbox.Group>
			);
		},
		getOptions,
	},
	9: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			const that = this;
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return (
				<Radio.Group
					{...opt}
					onChange={(v) => {
						linkageAction(linkages, getGroupsFn, e);
					}}
				>
					{config.selectList.map((e) => {
						return (
							<Radio key={e.value} value={e.value}>
								{e.label}
							</Radio>
						);
					})}
				</Radio.Group>
			);
		},
		getOptions,
	},
	10: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			return <TimePicker format={e.format} placeholder={e.placeholder} {...opt} />;
		},
		getOptions,
	},
	11: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			const that = this;
			let config = e.config;
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			const uploadButton = (
				<div>
					<Icon type="plus" />
					<div style={{ marginTop: "8px", color: "#666" }}>Upload</div>
				</div>
			);
			return (
				<Upload
					multiple={e.multiple}
					action={config.url}
					listType="picture-card"
					name="file"
					accept={config.accept}
					//onChange={this.handleUploadChange}
					//fileList={this.state.fileList}
					beforeUpload={(file) => {
						const isJPG = file.type === "image/jpeg" || "image/png";
						if (!isJPG) {
							message.error("图片要求是jpg或者png格式!");
							return isJPG;
						}
					}}
					//onPreview={this.handlePreview}
				>
					{uploadButton}
				</Upload>
			);
		},
		getOptions,
	},
};
export default controls;
