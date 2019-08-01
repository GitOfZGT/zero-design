import { arrayFilterBy, dataType } from "../zTool";
import moment from "moment";
import controls from "./controls";
function concatKeys(values, arr, a, d) {
	const getNewFields = () => {
		return d.fields.map(item => {
			return {
				...item,
				srcFieldKey: a.src.fieldKey,
			};
		});
	};
	if (Array.isArray(values[a.src.fieldKey])) {
		if (Array.isArray(d.srcValue)) {
			if (JSON.stringify(values[a.src.fieldKey]) == JSON.stringify(d.srcValue)) {
				arr = arr.concat(getNewFields());
			}
		} else if (values[a.src.fieldKey].includes(d.srcValue)) {
			arr = arr.concat(getNewFields());
		}
	} else if (d.srcValue == values[a.src.fieldKey] || ["6", "7"].includes(a.linkageType)) {
		arr = arr.concat(getNewFields());
	}
	return arr;
}
const initialValueLinkageAction = function(ages = [], getGroupsFn, seftItem) {
	ages = dataType.isArray(ages) ? ages : [];
	if (!ages.length) return;
	setTimeout(() => {
		let formObjs = [];
		const groups = getGroupsFn();
		groups.forEach(g => {
			formObjs.push(g.groupRef.current.getForm());
		});
		let values = {};
		formObjs.forEach(o => {
			values = { ...values, ...o.form.getFieldsValue() };
		});
		let cardGetBirthdayKeys = [];
		let asyncParamNameKeys = [];
		let groupHiddenIds = [];
		let hiddenKeys = [];
		let disabledKeys = [];
		let requiredKeys = [];
		let noRequiredKeys = [];
		let selectOptions = [];
		let hasClearSelect = false;
		ages.forEach(a => {
			if (values.hasOwnProperty(a.src.fieldKey)) {
				switch (a.linkageType) {
					//单选联动异步请求选项
					case "7":
						a.dist.forEach(d => {
							asyncParamNameKeys = concatKeys(values, asyncParamNameKeys, a, d);
						});
						break;
					//输入身份证自动联动生日
					case "6":
						a.dist.forEach(d => {
							cardGetBirthdayKeys = concatKeys(values, cardGetBirthdayKeys, a, d);
						});
						break;
					//隐藏
					case "5.1":
						a.dist.forEach(d => {
							groupHiddenIds = concatKeys(values, groupHiddenIds, a, d);
						});
						break;
					case "5.2":
						a.dist.forEach(d => {
							hiddenKeys = concatKeys(values, hiddenKeys, a, d);
						});
						break;
					//禁用
					case "1":
						a.dist.forEach(d => {
							disabledKeys = concatKeys(values, disabledKeys, a, d);
						});
						break;
					// 必填
					case "2":
						a.dist.forEach(d => {
							requiredKeys = concatKeys(values, requiredKeys, a, d);
						});
						break;
					// 非必填
					case "3":
						a.dist.forEach(d => {
							noRequiredKeys = concatKeys(values, noRequiredKeys, a, d);
						});
						break;
					// 控制选项
					case "4":
						hasClearSelect = seftItem && a.src.fieldKey == seftItem.fieldKey;
						a.dist.forEach(d => {
							selectOptions = concatKeys(values, selectOptions, a, d);
						});
						// console.log("selectOptions",selectOptions)
						break;
				}
			}
		});
		let newFormObjs = [];
		const newItems = [];
		const asyncFields = [];
		groups.forEach((g, gindex) => {
			const findHideGroup = groupHiddenIds.findIndex(gh => {
				return gh.groupName && gh.groupName === g.name;
			});
			g.groupRef.current.show(findHideGroup === -1);
			if (findHideGroup === -1) {
				newFormObjs.push(g.groupRef.current.getForm());
				g.formItems.forEach(field => {
					const hiddenFields = arrayFilterBy(hiddenKeys, { fieldKey: field.fieldKey });
					if (values.hasOwnProperty(field.fieldKey)) {
						const disabledFields = arrayFilterBy(disabledKeys, { fieldKey: field.fieldKey });
						const requiredFields = arrayFilterBy(requiredKeys, { fieldKey: field.fieldKey });
						const noRequiredFields = arrayFilterBy(noRequiredKeys, { fieldKey: field.fieldKey });
						const selectOptionsFields = arrayFilterBy(selectOptions, { fieldKey: field.fieldKey });

						let e = { ...field };
						if (disabledFields.length) {
							e.required = 0;
						} else if (requiredFields.length && noRequiredFields.length) {
							console.error(`同个控件不应该同时存在"必填"和"非必填"联动配置，请纠正`);
						} else if (requiredFields.length) {
							e.required = 1;
						} else if (noRequiredFields.length) {
							e.required = 0;
						}
						if (typeof e.config == "string") {
							try {
								e.config = JSON.parse(e.config);
							} catch (e) {}
						}
						if (selectOptionsFields.length) {
							e.config = { ...e.config, selectList: selectOptionsFields[0].options };
						}
						// console.log(selectOptionsFields,e)
						// console.log(selectOptionsFields, field.fieldKey, values);
						const control =
							disabledFields.length || selectOptionsFields.length
								? controls[e.fieldType].getControl(e, ages, getGroupsFn, {
										disabled: disabledFields.length > 0 || e.disabled,
								  })
								: null;
						const options =
							JSON.stringify(e) !== JSON.stringify(field) ? controls[e.fieldType].getOptions(e) : null;
						const newItem = {};
						if (control) {
							newItem.control = control;
						}
						if (options) {
							newItem.options = options;
						}
						newItems.push({
							key: e.fieldKey,
							show: !hiddenFields.length,
							newItem: control || options ? newItem : e.config.selectionsType == 2 ? undefined : "reset",
						});
						//单选联动异步请求选项
						let paramField = asyncParamNameKeys.find(item => item.fieldKey === e.fieldKey);
						if (paramField && e.config.selectionsType == 2) {
							e.config = {
								...e.config,
								selectionsQuery: {
									...e.config.selectionsQuery,
									[paramField.asyncParamName]: values[paramField.srcFieldKey],
								},
							};
							e.groupIndex = gindex;
							e.srcFieldKey = paramField.srcFieldKey;
							asyncFields.push(e);
						}
					} else {
						newItems.push({
							key: field.fieldKey,
							show: !hiddenFields.length,
						});
					}
				});
			}
		});
		// console.log(selectOptions)

		newFormObjs.forEach((o, i) => {
			o.methods.changeFormItems(newItems, true);
			asyncFields.forEach(e => {
				if (i === e.groupIndex && ((seftItem && e.srcFieldKey == seftItem.fieldKey) || !seftItem)) {
					o.methods.changeFormItems({ key: e.fieldKey, loading: true }, true);
					controls[e.fieldType]
						.getControl(e, ages, getGroupsFn, { isAsync: true }, undefined, o.form)
						.then(control => {
							o.methods.changeFormItems({ key: e.fieldKey, loading: false, newItem: { control } }, true);
						});
				}
			});
			const resetDisable = disabledKeys.map(item => item.fieldKey);
			const resetNoRequired = noRequiredKeys.map(item => item.fieldKey);
			const resetSelect = selectOptions.map(item => item.fieldKey);
			o.form.validateFields([...resetDisable, ...resetNoRequired]);
			o.form.resetFields([...resetDisable, ...(hasClearSelect ? resetSelect : [])]);
			//处理身份证号码获取生日联动到其他控件：
			if (cardGetBirthdayKeys.length) {
				const formValues = o.form.getFieldsValue();
				cardGetBirthdayKeys.forEach(field => {
					if (formValues.hasOwnProperty(field.fieldKey)) {
						let birthday = values[field.srcFieldKey];
						const val = birthday && birthday.length > 14 ? birthday.substring(6, 14) : "";
						o.form.setFieldsValue({
							[field.fieldKey]: field.fieldType == 5 ? moment(stringJoinSyml(val)) : stringJoinSyml(val),
						});
					}
				});
			}
		});
	}, 60);
};
function stringJoinSyml(str) {
	return str.length === 8 ? str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 8) : "";
}
export default initialValueLinkageAction;
