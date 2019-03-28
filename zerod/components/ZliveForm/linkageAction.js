import { arrayFilterBy, dataType } from "../zTool";
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
		groups.forEach((g) => {
			formObjs.push(g.groupRef.current.getForm());
		});
		let values = {};
		formObjs.forEach((o) => {
			values = { ...values, ...o.form.getFieldsValue() };
		});
		let groupHiddenIds = [];
		let hiddenKeys = [];
		let disabledKeys = [];
		let requiredKeys = [];
		let noRequiredKeys = [];
		let selectOptions = [];
		let hasClearSelect = false;

		ages.forEach((a) => {
			if (values.hasOwnProperty(a.src.fieldKey)) {
				switch (a.linkageType) {
					//隐藏
					case "5.1":
						a.dist.forEach((d) => {
							groupHiddenIds = concatKeys(values, groupHiddenIds, a, d);
						});
						break;
					case "5.2":
						a.dist.forEach((d) => {
							hiddenKeys = concatKeys(values, hiddenKeys, a, d);
						});
						break;
					//禁用
					case "1":
						a.dist.forEach((d) => {
							disabledKeys = concatKeys(values, disabledKeys, a, d);
						});
						break;
					// 必填
					case "2":
						a.dist.forEach((d) => {
							requiredKeys = concatKeys(values, requiredKeys, a, d);
						});
						break;
					// 非必填
					case "3":
						a.dist.forEach((d) => {
							noRequiredKeys = concatKeys(values, noRequiredKeys, a, d);
						});
						break;
					// 控制选项
					case "4":
						hasClearSelect = seftItem && a.src.fieldKey == seftItem.fieldKey;
						a.dist.forEach((d) => {
							selectOptions = concatKeys(values, selectOptions, a, d);
						});
						// console.log("selectOptions",selectOptions)
						break;
				}
			}
		});
		let newFormObjs = [];
		groups.forEach((g) => {
			const _groupHidden = arrayFilterBy(groupHiddenIds, { groupId: g.id });
			g.groupRef.current.show(!_groupHidden.length);
			if (!_groupHidden.length) {
				formItems = formItems.concat(g.formItems);
				newFormObjs.push(g.groupRef.current.getForm());
			}
		});

		const newItems = [];
		formItems.forEach((field) => {
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
				// console.log(selectOptionsFields, field.fieldKey, values);
				const control =
					disabledFields.length > 0
						? controls[e.fieldType].getControl(e, ages, getGroupsFn, {
								disabled: disabledFields.length > 0,
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
		newFormObjs.forEach((o) => {
			o.methods.changeFormItems(newItems, true);
			const resetDisable = disabledKeys.map((item) => item.fieldKey);
			const resetNoRequired = noRequiredKeys.map((item) => item.fieldKey);
			const resetSelect = selectOptions.map((item) => item.fieldKey);
			o.form.validateFields([...resetDisable, ...resetNoRequired]);
			o.form.resetFields([...resetDisable, ...(hasClearSelect ? resetSelect : [])]);
		});
	}, 10);
};
export default initialValueLinkageAction;
