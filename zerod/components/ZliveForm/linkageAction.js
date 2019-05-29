import { arrayFilterBy, dataType } from "../zTool";
import moment from "moment";
import controls from "./controls";
function concatKeys(values, arr, a, d) {
	if (Array.isArray(values[a.src.fieldKey])) {
		if (Array.isArray(d.srcValue)) {
			if (JSON.stringify(values[a.src.fieldKey]) == JSON.stringify(d.srcValue)) {
				arr = arr.concat(d.fields);
			}
		} else if (values[a.src.fieldKey].includes(d.srcValue)) {
			arr = arr.concat(d.fields);
		}
	} else if (d.srcValue == values[a.src.fieldKey]) {
		arr = arr.concat(d.fields);
	} else if (a.linkageType === "6") {
		arr = arr.concat({
			srcFieldKey: a.src.fieldKey,
			fields: d.fields,
		});
	}
	return arr;
}
const initialValueLinkageAction = function(ages = [], getGroupsFn, seftItem) {
	ages = dataType.isArray(ages) ? ages : [];
	if (!ages.length) return;
	setTimeout(() => {
		let formItems = [];
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
		groups.forEach(g => {
			const findHideGroup = groupHiddenIds.findIndex(gh => {
				return gh.groupName && gh.groupName === g.name;
			});
			g.groupRef.current.show(findHideGroup === -1);
			if (findHideGroup === -1) {
				formItems = formItems.concat(g.formItems);
				newFormObjs.push(g.groupRef.current.getForm());
			}
		});
		// console.log(selectOptions)
		const newItems = [];
		formItems.forEach(field => {
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
				if (selectOptionsFields.length) {
					if (typeof e.config == "string") {
						try {
							e.config = JSON.parse(e.config);
						} catch (e) {}
					}
					e.config = { ...e.config, selectList: selectOptionsFields[0].options };
				}
				// console.log(selectOptionsFields,e)
				// console.log(selectOptionsFields, field.fieldKey, values);
				const control =
					disabledFields.length || selectOptionsFields.length ? controls[e.fieldType].getControl(e, ages, getGroupsFn, {
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
					newItem: control || options ? newItem : "reset",
				});
			} else {
				newItems.push({
					key: field.fieldKey,
					show: !hiddenFields.length,
				});
			}
		});
		newFormObjs.forEach(o => {
			o.methods.changeFormItems(newItems, true);
			const resetDisable = disabledKeys.map(item => item.fieldKey);
			const resetNoRequired = noRequiredKeys.map(item => item.fieldKey);
			const resetSelect = selectOptions.map(item => item.fieldKey);
			o.form.validateFields([...resetDisable, ...resetNoRequired]);
			o.form.resetFields([...resetDisable, ...(hasClearSelect ? resetSelect : [])]);
			//处理身份证号码获取生日联动到其他控件：
			if (cardGetBirthdayKeys.length) {
				cardGetBirthdayKeys.forEach(card => {
					if (!card.srcFieldKey) {
						return;
					}
					const formValues = o.form.getFieldsValue();
					let birthday = values[card.srcFieldKey];
					card.fields.forEach(field => {
						if (formValues.hasOwnProperty(field.fieldKey)) {
							const val = birthday && birthday.length > 14 ? birthday.substring(6, 14) : "";
							o.form.setFieldsValue({
								[field.fieldKey]:
									field.fieldType == 5 ? moment(stringJoinSyml(val)) : stringJoinSyml(val),
							});
						}
					});
				});
			}
		});
	}, 17);
};
function stringJoinSyml(str) {
	return str.length === 8 ? str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 8) : "";
}
export default initialValueLinkageAction;
