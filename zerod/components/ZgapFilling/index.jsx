import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getControl } from '../Zform/controls';
import moment from 'moment';
import './style.scss';
import {
    analysisTextTemplate,
    findControlFromBlocks,
    formatDatestringSyml,
    fomatName,
    addValueLabel,
    getControlDefaultValue,
} from './common';

const formatPlaceholder = {
    year: '请选择年份',
    month: '请选择年月',
    date: '请选择年月日',
    datehour: '请选择年月日时',
    datetime: '请选择年月日时分',
};
const contorlName = {
    input: 'Input',
    textArea: 'TextArea',
    select: 'Select',
    checkBox: 'Checkbox.Group',
    radio: 'Radio.Group',
    year: 'YearPicker',
    month: 'MonthPicker',
    date: 'DatePicker',
    datehour: 'DatePicker',
    datetime: 'DatePicker',
};

/**
 * textTemplate 插值的规则 {[select|160]<selectKey>(选项1|选项2|选项3)}：
 * 方括号内第一个属性是控件类型，可选input、textArea、datetime、date、month、year、radio、checkBox、select，第二个属性是控件宽度；
 * 尖括号内属性是填空的字段key；
 * 圆括号内是radio、checkBox、select的选项；
 * textArea类型会强制占整行。
 * 还可以嵌套<div style="display:flex;"></div>进行排版
 */

const propTypes = {
    textTemplate: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};
const createControls = ({ controls, conctrolSegments, controlValues, textTemplate, value, onChange, disabled }) => {
    return conctrolSegments.map((segment, i) => {
        const controlAttr = controls[i];
        const control = controlAttr
            ? getControl(contorlName[controlAttr.type], {
                  allowClear: controlAttr.type !== 'textArea',
                  disabled,
                  ...(controlAttr.type === 'textArea' ? { autoSize: { minRows: 2 } } : {}),
                  placeholder: disabled ? '' : controlAttr.placeholder || formatPlaceholder[controlAttr.type],
                  format: fomatName[controlAttr.type],
                  size: 'small',
                  style: { width: '100%', minWidth: '100%' },
                  selectList: controlAttr.selectList,
                  value: (controlValues || {})[controlAttr.key],
                  ...(['datetime', 'datehour'].includes(controlAttr.type)
                      ? {
                            showTime: {
                                format: controlAttr.type === 'datehour' ? 'HH' : 'HH:mm',
                            },
                        }
                      : {}),
                  onChange: (val, valstring) => {
                      const currentValues = value || {};
                      let newValue = {
                          ...currentValues,
                          theValueForControl: 'gapFilling',
                      };
                      let realval = val;
                      if (['year', 'month', 'date', 'datetime', 'datehour'].includes(controlAttr.type)) {
                          realval = val ? val.format(fomatName[controlAttr.type]) : val;
                      } else if (controlAttr.type === 'radio') {
                          realval = val.target.value;
                      }
                      newValue[controlAttr.key] = realval;
                      const valueLael = addValueLabel({ controlAttr, value: realval });
                      newValue = { ...newValue, ...valueLael };
                      onChange && onChange(newValue);
                  },
              })
            : null;
        return (
            <span key={segment.currentTemplate}>
                {segment.textSegments.map((text, i) => {
                    return (
                        <span key={text}>
                            {i > 0 ? text ? <div /> : <br /> : null}
                            {text}
                        </span>
                    );
                })}
                {control ? (
                    <span
                        className="z-gap-filling-control"
                        style={['radio', 'checkBox'].includes(controlAttr.type) ? {} : { width: controlAttr.width }}>
                        {control}
                    </span>
                ) : null}
            </span>
        );
    });
};

const createBolcks = ({ blocks, controlValues, textTemplate, value, onChange, disabled }) => {
    return blocks.map((block) => {
        return block ? (
            <div key={block.currentTemplate} {...block.attributes}>
                {block.children.length
                    ? createBolcks({
                          blocks: block.children,
                          controlValues,
                          textTemplate,
                          value,
                          onChange,
                          disabled,
                      })
                    : createControls({
                          controls: block.controls,
                          conctrolSegments: block.conctrolSegments,
                          controlValues,
                          textTemplate,
                          value,
                          onChange,
                          disabled,
                      })}
            </div>
        ) : null;
    });
};

const GapFilling = (props) => {
    const { value, onChange, textTemplate, disabled } = props;
    const [state, setState] = useState({ blocks: [], controlValues: {} });
    useEffect(() => {
        if (!textTemplate) {
            return;
        }
        setState((prevState) => {
            return {
                ...prevState,
                blocks: analysisTextTemplate(textTemplate),
            };
        });
    }, [textTemplate]);

    useEffect(() => {
        if (typeof value === 'object' && value) {
            const controlValues = { ...value };

            Object.keys(controlValues).forEach((key) => {
                const finded = findControlFromBlocks({ blocks: state.blocks, key });
                if (
                    finded &&
                    controlValues[key] &&
                    ['year', 'month', 'date', 'datehour', 'datetime'].includes(finded.type) &&
                    typeof controlValues[key] === 'string'
                ) {
                    controlValues[key] = moment(
                        formatDatestringSyml(controlValues[key]),
                        formatDatestringSyml(fomatName[finded.type]),
                    );
                }
            });
            setState((prevState) => {
                return { ...prevState, controlValues: { ...prevState.controlValues, ...controlValues } };
            });
        }
    }, [value, state.blocks]);
    useEffect(() => {
        const blocks = state.blocks;
        const defaultValue = getControlDefaultValue({ blocks });
        if (Object.keys(defaultValue).length) {
            onChange &&
                onChange({
                    ...defaultValue,
                    ...(typeof value === 'object' && value ? value : {}),
                    theValueForControl: 'gapFilling',
                });
        }
    }, [state.blocks]);
    return <div className="z-gap-filling">{createBolcks({ ...state, textTemplate, value, onChange, disabled })}</div>;
};
GapFilling.propTypes = propTypes;
export default React.memo(GapFilling);
