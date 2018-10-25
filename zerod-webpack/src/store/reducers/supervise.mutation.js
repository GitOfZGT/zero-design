export default {
	name: "supervise",
	mutations: {
		addList(state, action) {
			return {
				...state,
				list: action.payload,
			};
		},
	},
};
