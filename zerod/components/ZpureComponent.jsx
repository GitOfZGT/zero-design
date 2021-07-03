import React from "react";
import { dataType } from "./zTool";

function diff_Prev_Next(prev, next) {
	if (!dataType.isObject(prev) || !dataType.isObject(next)) return true;
	const propsKeys = Object.keys(next);
	let should = false;
	for (let index = 0; index < propsKeys.length; index++) {
		const key = propsKeys[index];
		if (prev[key] !== next[key] || (dataType.isFunction(next[key]) && !/^(on|export)[A-Z]{1}[\w\-]*$/.test(key))) {
			should = true;
			break;
		}
	}
	return should;
}
export class ZpureComponent extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (diff_Prev_Next(this.props, nextProps)) {
			return true;
		}
		if (diff_Prev_Next(this.state, nextState)) {
			return true;
		}
		return false;
	}
}

export default ZpureComponent;
