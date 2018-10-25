
// 变异状态 例子：
export default {
	name: "evaluate",
	mutations: {
		changeInput1(state, action) {
			return {
				...state,
				currentValue:action.payload.value,
			};
		},
		changeInput2(state, action) {
			return {
				...state,
				maxValue:action.payload.value,
			};
		},
	},
};
