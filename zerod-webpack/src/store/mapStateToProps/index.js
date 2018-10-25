//例子：
export const getInputValueState1 = function(state) {
	return {
		value: state.currentValue,
	};
};
export const getInputValueState2 = function(state) {
	return {
		value: state.maxValue,
	};
};

export const getPropressState = function(state) {
	return {
		value: Number(state.currentValue),
		maxValue:Number(state.maxValue)
	};
};
