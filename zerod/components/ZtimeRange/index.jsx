import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Input, TimePicker } from "antd";
import moment from "moment";
const propTypes = {
	value: PropTypes.array,
	defaultValue: PropTypes.array,
	onChange: PropTypes.func,
	timePickerProps: PropTypes.object,
};
const defaultProps = {
	timePickerProps: {},
	format:"HH:mm:ss"
};
function formatNumber(str, t = 2) {
	str = str.toString();
	while (str.length < t) {
		str = "0" + str;
	}
	return str;
}

const ZtimeRange = React.forwardRef(function(props, ref) {
	const { defaultValue, value, onChange, className, style, timePickerProps, format } = props;
	const hasValue = Array.isArray(value);
	const [stateValue, setStateValue] = useState(defaultValue ? defaultValue : []);
	const valueStringRef = useRef([]);
	const bindValue = hasValue ? value : stateValue;
	const fromValue = bindValue[0] ? bindValue[0] : undefined;
	const toValue = bindValue[1] ? bindValue[1] : undefined;
	useEffect(() => {
		if (Array.isArray(value)) {
			const hasEmpyt = value.some(item => {
				return !item;
			});
			if (hasEmpyt) {
				onChange && onChange(undefined, undefined);
			}
		}
	}, [value]);
	return (
		<Input.Group compact className={className} style={style}>
			<TimePicker
				{...timePickerProps}
				format={format}
				style={{ width: "45%" }}
				value={fromValue}
				onChange={(time, timeString) => {
					bindValue[0] = time;
					valueStringRef.current[0] = timeString;

					if (!hasValue) {
						setStateValue([...bindValue]);
					}
					if (toValue) {
						const hour = time.hours();
						const minutes = time.minutes();
						const seconds = time.seconds();
						let tohour = toValue.hours();
						let tominutes = toValue.minutes();
						let toseconds = toValue.seconds();
						tohour = hour > tohour ? hour : tohour;
						tominutes = minutes > tominutes ? minutes : tominutes;
						toseconds = seconds > toseconds ? seconds : toseconds;
						bindValue[1] = moment(
							`${formatNumber(tohour)}:${formatNumber(tominutes)}:${formatNumber(toseconds)}`,
							format,
						);
					}
					onChange && onChange([...bindValue], [...valueStringRef.current]);
				}}
			/>
			<Input
				style={{
					width: "10%",
					borderLeft: 0,
					pointerEvents: "none",
					backgroundColor: "#fff",
				}}
				placeholder="~"
				disabled
			/>
			<TimePicker
				{...timePickerProps}
				format={format}
				value={toValue}
				className="z-timeRange-right"
				style={{ width: "45%" }}
				onChange={(time, timeString) => {
					bindValue[1] = time;
					valueStringRef.current[1] = timeString;
					if (!hasValue) {
						setStateValue([...bindValue]);
					}
					onChange && onChange([...bindValue], [...valueStringRef.current]);
				}}
				disabledHours={() => {
					const fromHour = fromValue ? fromValue.hours() : 0;
					const nums = [];
					for (let index = 0; index < fromHour; index++) {
						nums.push(index);
					}
					return nums;
				}}
				disabledMinutes={() => {
					const fromHour = fromValue ? fromValue.hours() : 0;
					const toHour = toValue ? toValue.hours() : fromHour;
					if (toHour <= fromHour) {
						const fromMinutes = fromValue ? fromValue.minutes() : 0;
						const nums = [];
						for (let index = 0; index < fromMinutes; index++) {
							nums.push(index);
						}
						return nums;
					} else {
						return [];
					}
				}}
				disabledSeconds={() => {
					const fromHour = fromValue ? fromValue.hours() : 0;
					const toHour = toValue ? toValue.hours() : fromHour;
					const fromMinutes = fromValue ? fromValue.minutes() : 0;
					const toMinutes = toValue ? toValue.minutes() : fromMinutes;
					if (toHour <= fromHour && toMinutes <= fromMinutes) {
						const fromSeconds = fromValue ? fromValue.seconds() : 0;
						const nums = [];
						for (let index = 0; index < fromSeconds; index++) {
							nums.push(index);
						}
						return nums;
					} else {
						return [];
					}
				}}
			/>
		</Input.Group>
	);
});
ZtimeRange.propTypes = propTypes;
ZtimeRange.defaultProps = defaultProps;
export default React.memo(ZtimeRange);
