import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Input, TimePicker } from 'antd';
import moment from 'moment';
import { isMorrowTime } from '../zTool';
const propTypes = {
    value: PropTypes.array,
    defaultValue: PropTypes.array,
    onChange: PropTypes.func,
    timePickerProps: PropTypes.object,
    allowMorrow: PropTypes.bool,
};
const defaultProps = {
    timePickerProps: {},
    format: 'HH:mm:ss',
    allowMorrow: true,
};
function formatNumber(str, t = 2) {
    str = str.toString();
    while (str.length < t) {
        str = '0' + str;
    }
    return str;
}

function isMorrow(fromValue, toValue, format) {
    if (!fromValue || !toValue) {
        return false;
    }
    return isMorrowTime(fromValue.format(format), toValue.format(format));
}

const ZtimeRange = React.forwardRef((props, ref) => {
    const { defaultValue, value, onChange, className, style, timePickerProps, format, allowMorrow } = props;
    const hasValue = Array.isArray(value);
    const [stateValue, setStateValue] = useState(defaultValue || []);
    const valueStringRef = useRef([]);
    const bindValue = hasValue ? value : stateValue;
    const fromValue = bindValue[0] ? bindValue[0] : undefined;
    const toValue = bindValue[1] ? bindValue[1] : undefined;
    // useEffect(() => {
    //     if (Array.isArray(value)) {
    //         const hasEmpyt = value.some((item) => {
    //             return !item;
    //         });
    //         if (hasEmpyt) {
    //             onChange && onChange(undefined, undefined);
    //         }
    //     }
    // }, [value]);
    const timeRightProps = !allowMorrow
        ? {
              disabledHours: () => {
                  const fromHour = fromValue ? fromValue.hours() : 0;
                  const nums = [];
                  for (let index = 0; index < fromHour; index++) {
                      nums.push(index);
                  }
                  return nums;
              },
              disabledMinutes: () => {
                  const fromHour = fromValue ? fromValue.hours() : 0;
                  const toHour = toValue ? toValue.hours() : fromHour;
                  if (toHour <= fromHour) {
                      const fromMinutes = fromValue ? fromValue.minutes() : 0;
                      const nums = [];
                      for (let index = 0; index < fromMinutes; index++) {
                          nums.push(index);
                      }
                      return nums;
                  }
                  return [];
              },
              disabledSeconds: () => {
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
                  }
                  return [];
              },
          }
        : {};
    const showMorrowText = isMorrow(fromValue, toValue, format);
    return (
        <Input.Group compact className={`z-flex ${className || ''}`} style={style}>
            <TimePicker
                {...timePickerProps}
                format={format}
                className="z-flex-1"
                value={fromValue}
                onChange={(time, timeString) => {
                    bindValue[0] = time;
                    valueStringRef.current[0] = timeString;

                    if (!hasValue) {
                        setStateValue([...bindValue]);
                    }
                    if (toValue && time) {
                        const hour = time.hours();
                        const minutes = time.minutes();
                        const seconds = time.seconds();
                        let tohour = toValue.hours();
                        let tominutes = toValue.minutes();
                        let toseconds = toValue.seconds();
                        if (!allowMorrow) {
                            tohour = hour > tohour ? hour : tohour;
                            tominutes = minutes > tominutes ? minutes : tominutes;
                            toseconds = seconds > toseconds ? seconds : toseconds;
                            bindValue[1] = moment(
                                `${formatNumber(tohour)}:${formatNumber(tominutes)}:${formatNumber(toseconds)}`,
                                format,
                            );
                        }
                    }
                    console.log('bindValue', bindValue);
                    onChange && onChange([...bindValue], [...valueStringRef.current]);
                }}
            />
            <span className="z-timeRange-segmentation">~</span>
            {showMorrowText && allowMorrow ? <span className="z-timeRange-morrow">次日</span> : null}
            <TimePicker
                {...timePickerProps}
                format={format}
                value={toValue}
                className="z-timeRange-right z-flex-1"
                onChange={(time, timeString) => {
                    bindValue[1] = time;
                    valueStringRef.current[1] = timeString;
                    if (!hasValue) {
                        setStateValue([...bindValue]);
                    }
                    onChange && onChange([...bindValue], [...valueStringRef.current]);
                }}
                {...timeRightProps}
            />
        </Input.Group>
    );
});
ZtimeRange.propTypes = propTypes;
ZtimeRange.defaultProps = defaultProps;
export default React.memo(ZtimeRange);
