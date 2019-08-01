import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import linkageAction from "./linkageAction";
import { getControl, getOptions, regExps } from "../Zform/controls";
import { dataType, httpAjax, itemsFromTree } from "../zTool";
import ZeroUpload from "./ZeroUpload";
import moment from "moment";
import ZerodMainContext from "../ZerodMainContext";

export const getOptionsRules = function(e, rules = []) {
	const reg = typeof e.regularExpression === "string" ? e.regularExpression.replace(/((^\/)|(\/$))/g, "") : "";
	return getOptions({
		required: e.required,
		initialValue: e.initialValue,
		rules: reg
			? [
					...rules,
					{
						pattern: reg,
						message: e.errorMsg,
					},
			  ]
			: rules,
	});
};
export const dateFormats = {
	"YYYY-wo": "WeekPicker",
	YYYY: "YearPicker",
	"YYYY-MM": "MonthPicker",
	"YYYY-MM-DD": "DatePicker",
	"YYYY-MM-DD HH:mm": "DatePicker",
	"YYYY-MM-DD HH:mm:ss": "DatePicker",
	"YYYY-MM-DD h:mm a": "DatePicker",
	"YYYY-MM-DD h:mm:ss a": "DatePicker",
	"YYYY-MM-DD - YYYY-MM-DD": "RangePicker",
	"YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm": "RangePicker",
	"YYYY-MM-DD HH:mm:ss - YYYY-MM-DD HH:mm:ss": "RangePicker",
	"HH:mm": "TimePicker",
	"HH:mm:ss": "TimePicker",
	"h:mm a": "TimePicker",
	"h:mm:ss a": "TimePicker",
	"HH:mm - HH:mm": "TimeRange",
	"HH:mm:ss - HH:mm:ss": "TimeRange",
};
function docustomOnChange(e, opt, ...rest) {
	if (dataType.isObject(e.customOnChange)) {
		const confun = e.customOnChange[e.fieldKey];
		dataType.isFunction(confun) && confun(e, e.imperative, ...rest);
	}
	typeof opt.onChange === "function" && opt.onChange(...rest);
}
function treeDataAddKey(
	tree = [],
	distKey = { label: "label", value: "value", children: "children", key: "key" },
	srcKey = { label: "label", value: "value", children: "children" },
	isLeaf,
) {
	return Array.isArray(tree)
		? tree.map(item => {
				const ciilds = treeDataAddKey(item[srcKey.children], distKey, srcKey, isLeaf);
				return {
					[distKey.label]: item[srcKey.label],
					[distKey.value]: item[srcKey.value],
					[distKey.children]: ciilds.length ? ciilds : null,
					[distKey.key]: item[srcKey.value],
					isLeaf,
				};
		  })
		: [];
}
function selectControl(controlName) {
	return function(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
		const isAsync = opt.isAsync;
		delete opt.isAsync;
		let config = e.config || {};
		if (typeof e.config == "string") {
			try {
				config = JSON.parse(e.config);
			} catch (e) {}
		}
		const { selectionsType, selectionsUrl, selectList, selectionsQuery, selectListFieldNames, ...others } = config;
		function getCurrentControl(selectList) {
			if (currentForm) {
				//保存已有的selectList
				currentForm.saveFieldOptions[e.fieldKey] = selectList;
				// currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;
			}
			return getControl(controlName, {
				placeholder: e.placeholder,
				selectList,
				...others,
				...opt,
				onChange: (...rest) => {
					console.log(rest);
					linkageAction(linkages, getGroupsFn, e);
					docustomOnChange(e, opt, ...rest);
				},
			});
		}
		//异步类型
		if (selectionsType == 2) {
			if (!isAsync && currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
				return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
			}
			return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
				...selectionsQuery,
				...requestQuery,
			}).then(re => {
				return getCurrentControl(treeDataAddKey(re.data, undefined, selectListFieldNames, undefined));
			});
		}
		//自定义选项类型
		return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, undefined));
	};
}

const controls = {
	//Input
	1: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return getControl("Input", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onBlur: (...rest) => {
					linkageAction(linkages, getGroupsFn, e);
				},
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions(e, rules = []) {
			const regType = e.regType; //regType 来自Zform/controls的regExps
			return getOptionsRules(e, regType ? [regExps[regType], ...rules] : rules);
		},
	},
	//TextArea
	2: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return getControl("TextArea", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	//Select
	3: {
		getControl: selectControl("Select"),
		getOptions(e, rules = []) {
			const field={...e};
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			if (["multiple", "tags"].includes(config.mode)) {
				field.initialValue = typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
			}
			return getOptionsRules(field, rules);
		},
	},

	//InputNumber
	4: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return getControl("InputNumber", {
				placeholder: e.placeholder,
				...config,
				...opt,
				onChange: (...rest) => {
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions: getOptionsRules,
	},
	//日期/时间控件
	5: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			let showTime = false;
			config.format = config.format ? config.format : "";

			let format = config.format;
			const setShowTime = format => {
				if (format.startsWith("YYYY") && (format.includes("HH") || format.includes("h"))) {
					showTime = {
						format: format.split(" ")[1],
						use12Hours: format.includes("h"),
					};
				}
			};
			if (config.format.includes(" - ")) {
				format = config.format.split(" - ")[0];
				// console.log(format)
				setShowTime(format);
			} else {
				setShowTime(config.format);
			}
			// let defaultOpt = {};
			let timeOpt = {
				showTime,
			};
			if (dateFormats[config.format] === "TimePicker") {
				timeOpt = { use12Hours: config.format.includes("h") };
			}

			return getControl(dateFormats[config.format], {
				format,
				placeholder: e.placeholder,
				...opt,
				...timeOpt,
				// ...defaultOpt,
				onChange: (...rest) => {
					// console.log(rest);
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions(es, rules = []) {
			const e = { ...es };
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			config.format = config.format ? config.format : "";
			const isTimeRange = ["RangePicker", "TimeRange"].includes(dateFormats[config.format]);
			const format = config.format.includes(" - ") ? config.format.split(" - ")[0] : config.format;
			if (isTimeRange) {
				if (e.required)
					rules.push({
						validator(rule, value, callback) {
							if (Array.isArray(value) && value.length === 2) {
								callback();
							} else {
								callback("未填完整");
							}
						},
					});
				e.initialValue =
					typeof e.initialValue === "string" && e.initialValue.includes("-")
						? e.initialValue.split("-")
						: e.initialValue;
				e.initialValue =
					Array.isArray(e.initialValue) && e.initialValue.length
						? e.initialValue.map(time => moment(time, format))
						: null;
			} else {
				if (typeof e.initialValue === "string") {
					try {
						e.initialValue = moment(e.initialValue, format);
					} catch (e) {
						throw Error("initialValue格式有误");
					}
				}
			}
			return getOptionsRules(e, rules);
		},
	},
	//Cascader级联
	6: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
			// const that = this;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			const {
				selectionsType,
				selectionsUrl,
				selectList,
				selectionsQuery,
				selectListFieldNames,
				changeOnSelect,
				...others
			} = config;
			function getCurrentControl(selectList) {
				const newProps = {
					...others,
					changeOnSelect,
					...opt,
					selectionsUrl,
					selectionsQuery,
					placeholder: e.placeholder,
					selectList,
					optionsChange: options => {
						if (currentForm) {
							//保存已有的selectList
							currentForm.saveFieldOptions[e.fieldKey] = options;
							// currentForm.saveOptionsMapKey[e.fieldKey] = selectListFieldNames;
						}
					},
					selectListFieldNames,
					onChange: (...rest) => {
						linkageAction(linkages, getGroupsFn, e);
						docustomOnChange(e, opt, ...rest);
					},
				};
				return <CascaderLoader {...newProps} />;
			}
			//异步类型
			if (selectionsType == 2) {
				if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
					return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
				}
				return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
					...selectionsQuery,
					...requestQuery,
				}).then(re => {
					return getCurrentControl(
						treeDataAddKey(
							re.data,
							undefined,
							selectListFieldNames,
							selectionsUrl.requireType !== "part", // false  即为分部加载
						),
					);
				});
			}
			//自定义选项类型
			return getCurrentControl(treeDataAddKey(selectList, undefined, selectListFieldNames, true));
		},
		getOptions: getOptionsRules,
	},
	//TreeSelect树选择
	7: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}, currentForm) {
			// const that = this;
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			const {
				selectionsType,
				selectionsUrl,
				selectList,
				selectionsQuery,
				selectListFieldNames,
				...others
			} = config;
			function getCurrentControl(selectList) {
				const newProps = {
					...others,
					...opt,
					selectionsUrl,
					selectionsQuery,
					placeholder: e.placeholder,
					selectList,
					optionsChange: options => {
						if (currentForm) {
							//保存已有的selectList
							currentForm.saveFieldOptions[e.fieldKey] = options;
							currentForm.saveOptionsMapKey[e.fieldKey] = {
								label: "title",
								value: "value",
								children: "children",
							};
						}
					},
					selectListFieldNames,
					onChange: (...rest) => {
						linkageAction(linkages, getGroupsFn, e);
						docustomOnChange(e, opt, ...rest);
					},
				};
				return <TreeSelectLoader {...newProps} />;
			}
			//异步类型
			if (selectionsType == 2) {
				if (currentForm && currentForm.saveFieldOptions[e.fieldKey]) {
					return getCurrentControl(currentForm.saveFieldOptions[e.fieldKey]);
				}
				return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
					...selectionsQuery,
					...requestQuery,
				}).then(re => {
					return getCurrentControl(
						treeDataAddKey(
							re.data,
							{ label: "title", value: "value", children: "children", key: "key" },
							selectListFieldNames,
							selectionsUrl.requireType !== "part", // false  即为分部加载
						),
					);
				});
			}
			//自定义选项类型
			return getCurrentControl(
				treeDataAddKey(
					selectList,
					{ label: "title", value: "value", children: "children", key: "key" },
					selectListFieldNames,
					true,
				),
			);
		},
		getOptions: getOptionsRules,
	},
	//Checkbox.Group
	8: {
		getControl: selectControl("Checkbox.Group"),
		getOptions(e, rules = []) {
			const field={...e};
			field.initialValue = typeof field.initialValue === "string" ? field.initialValue.replace("，", ",").split(",") : [];
			return getOptionsRules(field, rules);
		},
	},
	//Radio.Group
	9: {
		getControl: selectControl("Radio.Group"),
		getOptions: getOptionsRules,
	},
	// //TimePicker
	// 10: {
	// 	getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
	// 		return getControl("TimePicker", {
	// 			format: e.format,
	// 			placeholder: e.placeholder,
	// 			...opt,
	// 			onChange: (...rest) => {
	// 				docustomOnChange(e,opt, ...rest);
	// 			},
	// 		});
	// 	},
	// 	getOptions: getOptionsRules,
	// },
	//Upload
	11: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return <ZeroUpload config={{ ...config, multiple: e.multiple }} />;
		},
		getOptions: getOptionsRules,
	},
	//ColorPicker
	12: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}, requestQuery = {}) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return getControl("ColorPicker", {
				...config,
				...opt,
				onChange: (...rest) => {
					e.currentSaturability = rest[1] ? rest[1].hsv.s : 0;
					// console.log("color-change", rest[1]);
					docustomOnChange(e, opt, ...rest);
				},
			});
		},
		getOptions(e, rules = []) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			if (config.minSaturability > 0) {
				rules.push({
					validator(rule, value, callback) {
						const currentSaturability = e.currentSaturability;
						if (currentSaturability && config.minSaturability > currentSaturability) {
							return callback(e.errorMsg ? e.errorMsg : `饱和度不能小于${config.minSaturability * 100}%`);
						}
						return callback();
					},
				});
			}
			return getOptionsRules(e, rules);
		},
	},
	//地图选点
	13: {
		getControl(e = {}, linkages, getGroupsFn = () => [], opt = {}) {
			let config = e.config || {};
			if (typeof e.config == "string") {
				try {
					config = JSON.parse(e.config);
				} catch (e) {}
			}
			return (
				<MapChooseAddress
					{...{
						placeholder: e.placeholder,
						...config,
						...opt,
					}}
				/>
			);
		},
		getOptions: getOptionsRules,
	},
};
export default controls;

const LoadMapIframe = React.forwardRef(function(props, ref) {
	const { mapType, value, onChange } = props;
	useEffect(() => {
		let messageCallback = null;
		if (mapType === "amap") {
			//高德地图
			const iframe = document.getElementById("addressIframe").contentWindow;
			document.getElementById("addressIframe").onload = function() {
				iframe.postMessage("hello", "https://m.amap.com/picker/");
			};
			messageCallback = function(event) {
				const loc = event.data;
				const latlng = loc.location.split(",");
				onChange &&
					onChange({
						name: loc.name,
						address: loc.address,
						longitude: latlng[0],
						latitude: latlng[1],
					});
			};
		} else if (mapType === "qqmap") {
			//腾讯地图
			messageCallback = function(event) {
				// 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
				const loc = event.data;
				if (loc && loc.module == "locationPicker") {
					//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
					onChange &&
						onChange({
							name: loc.poiname,
							address: loc.poiaddress,
							longitude: loc.latlng.lng,
							latitude: loc.latlng.lat,
						});
				}
			};
		}
		if (messageCallback) {
			window.addEventListener("message", messageCallback, false);

			return () => {
				window.removeEventListener("message", messageCallback, false);
			};
		}
	}, []);
	let url = "";
	let center = "";
	if (dataType.isObject(value)) {
		center = `${value.longitude},${value.latitude}`;
	}
	if (mapType === "amap") {
		url = `https://m.amap.com/picker/?center=${center}&key=3d5c1c6169c64554d6f9fcca35d4abff&total=20`;
	} else if (mapType === "qqmap") {
		url = `https://apis.map.qq.com/tools/locpicker?coord=${center}&search=1&type=1&key=63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK&referer=wx_map&total=20`;
	}
	return <iframe frameBorder="0" width="100%" height="100%" id="addressIframe" src={url} />;
});

const MapChooseAddress = ZerodMainContext.setConsumer(
	React.forwardRef(function(props, ref) {
		const { value, onChange, placeholder, showRightModal, mapType, disabled } = props;
		const inputValue = dataType.isObject(value) ? `${value.name}[${value.address}]` : "";
		useEffect(() => {}, []);
		const openMap = () => {
			showRightModal({
				show: true,
				modal: "addressModal",
				scroll: false,
				width: "500px",
				content: (
					<LoadMapIframe
						mapType={mapType || "qqmap"}
						value={value}
						onChange={val => {
							showRightModal({
								show: false,
								modal: "addressModal",
							});
							onChange && onChange(val);
						}}
					/>
				),
			});
		};
		return getControl("Input", {
			value: inputValue,
			addonAfter: (
				<i className="zero-icon zerod-address z-address-btn" onClick={!disabled ? openMap : undefined} />
			),
			placeholder,
			disabled,
		});
	}),
);

//Cascader 异步加载子节点组件
const CascaderLoader = React.forwardRef(function(props, ref) {
	const {
		changeOnSelect,
		selectList,
		selectionsUrl,
		selectionsQuery,
		selectListFieldNames,
		optionsChange,
		...others
	} = props;
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(selectList);
	}, [selectList]);
	useEffect(() => {
		optionsChange && optionsChange(options);
	}, [options]);
	return getControl("Cascader", {
		...others,
		options,
		changeOnSelect: Boolean(changeOnSelect),
		showSearch: false,
		loadData:
			selectionsUrl && selectionsUrl.requireType === "part"
				? selectedOptions => {
						const targetOption = selectedOptions[selectedOptions.length - 1];
						targetOption.loading = true;
						httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
							...selectionsQuery,
							id: targetOption.value,
						})
							.then(re => {
								if (Array.isArray(re.data) && re.data.length) {
									targetOption.children = treeDataAddKey(
										re.data,
										undefined,
										selectListFieldNames,
										false,
									);
								} else {
									targetOption.children = null;
									targetOption.isLeaf = true;
								}
							})
							.catch(re => {
								targetOption.children = null;
							})
							.finally(() => {
								targetOption.loading = false;
								setOptions([...options]);
							});
				  }
				: undefined,
	});
});
//treeSelect 异步加载子节点组件
const TreeSelectLoader = React.forwardRef(function(props, ref) {
	const { selectList, selectionsUrl, selectionsQuery, selectListFieldNames, optionsChange, ...others } = props;
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(selectList);
	}, [selectList]);
	useEffect(() => {
		optionsChange && optionsChange(options);
	}, [options]);
	return getControl("TreeSelect", {
		...others,
		treeData: options,
		showSearch: false,
		treeDefaultExpandAll: false,
		allowClear: true,
		loadData:
			selectionsUrl && selectionsUrl.requireType === "part"
				? treeNode => {
						// console.log(treeNode);
						if (treeNode.props.isLeaf) {
							return Promise.resolve();
						}
						return httpAjax(selectionsUrl.selectionsUrlMethod, selectionsUrl.selectionsUrl, {
							...selectionsQuery,
							id: treeNode.props.value,
						})
							.then(re => {
								itemsFromTree({
									tree: options,
									sourceItem: { value: treeNode.props.value },
									keyObj: { id: "value", children: "children" },
									action({ tree, currentItem, item, index, keyObj }) {
										if (Array.isArray(re.data) && re.data.length) {
											currentItem.children = treeDataAddKey(
												re.data,
												{
													label: "title",
													value: "value",
													children: "children",
													key: "key",
												},
												selectListFieldNames,
												false,
											);
										} else {
											currentItem.children = null;
											currentItem.isLeaf = true;
										}
									},
								});
							})
							.finally(() => {
								setOptions([...options]);
							});
				  }
				: undefined,
	});
});
