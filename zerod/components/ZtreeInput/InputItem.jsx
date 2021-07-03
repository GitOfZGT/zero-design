import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getControl, getOptions } from '../Zform/controls';
import ZlabelInput from '../ZlabelInput';
import { Tooltip, Icon } from 'antd';
import InputContext from './InputContext';
function singleInput(states, setStates, inputKeys, valuePlaceholder) {
    return getControl('Input', {
        placeholder: valuePlaceholder,
        value: states[inputKeys[1].key],
        onChange: (value) => {
            setStates({
                [inputKeys[0].key]: value,
                [inputKeys[1].key]: value,
            });
        },
        size: 'small',
    });
}

const _InputItem = React.forwardRef((props, ref) => {
    const {
        data,
        length,
        index,
        onSibingsClick,
        onMoveUp,
        onMoveDown,
        onRemove,
        onAddChild,
        sync,
        onBlur,
        multiple,
        inputType,
        isNumberValue,
        labelPlaceholder,
        valuePlaceholder,
        customInputKeys,
        customInputFunc,
        showBtns,
        toolTips,
        canMove,
        canAdd,
        canDelete,
    } = props;

    const coustomStates = {};
    const setCoustomStates = {};
    customInputKeys.forEach((item) => {
        const [keyState, setKeyState] = useState(item.initValue);
        coustomStates[item.key] = keyState;
        setCoustomStates[item.key] = setKeyState;
    });
    const setState = (newState) => {
        Object.keys(newState).forEach((key) => {
            data[key] = newState[key];
            setCoustomStates[key](newState[key]);
        });
        onBlur();
    };

    const [doubleValue, setDoubleValue] = useState(null);
    const doubleChange = (val, e) => {
        data[customInputKeys[0].key] = val.label;
        data[customInputKeys[1].key] = val.value;
        setDoubleValue(val);
        onBlur();
    };
    useEffect(() => {
        if (inputType === 'double') {
            setDoubleValue({ label: data[customInputKeys[0].key], value: data[customInputKeys[1].key] });
        } else {
            customInputKeys.forEach((item) => {
                if (data[item.key]) {
                    setCoustomStates[item.key](data[item.key]);
                } else {
                    data[item.key] = item.initValue;
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    const _onSibingsClick = (e) => {
        onSibingsClick && onSibingsClick(e, data, index);
    };
    const _onMoveUp = (e) => {
        onMoveUp && onMoveUp(e, data, index);
    };
    const _onMoveDown = (e) => {
        onMoveDown && onMoveDown(e, data, index);
    };
    const _onRemove = (e) => {
        onRemove && onRemove(e, data, index);
    };
    const _onAddChild = (e) => {
        onAddChild && onAddChild(e, data, index);
    };
    const _showBtns = typeof showBtns === 'function' ? showBtns(coustomStates, customInputKeys, index) : showBtns;
    const _canAdd = typeof canAdd === 'function' ? canAdd(coustomStates, customInputKeys, index) : canAdd;
    const _canMove = typeof canMove === 'function' ? canMove(coustomStates, customInputKeys, index) : canMove;
    const _canDelete = typeof canDelete === 'function' ? canDelete(coustomStates, customInputKeys, index) : canDelete;
    const _multiple = typeof multiple === 'function' ? multiple(coustomStates, customInputKeys, index) : multiple;
    return (
        <div className={`z-option-item ${index === 0 ? 'first-item' : ''}`}>
            {index === length - 1 && _showBtns && _canAdd ? (
                <Tooltip placement="top" title={toolTips.addSiblings} mouseEnterDelay={0} mouseLeaveDelay={0}>
                    <span className="z-option-btn-item z-add-siblings" onClick={_onSibingsClick}>
                        <Icon type="plus"></Icon>
                    </span>
                </Tooltip>
            ) : null}
            <div className="z-flex">
                <div className="z-flex-1">
                    {inputType === 'coustom' ? (
                        typeof customInputFunc === 'function' ? (
                            customInputFunc(coustomStates, setState, customInputKeys, index)
                        ) : null
                    ) : inputType === 'double' ? (
                        <ZlabelInput
                            labelSpan={12}
                            valueSpan={12}
                            size="small"
                            value={doubleValue}
                            onChange={doubleChange}
                            labelPlaceholder={labelPlaceholder}
                            valuePlaceholder={valuePlaceholder}
                            sync={sync}
                            valueDataType={isNumberValue ? 'number' : 'string'}
                            // onBlur={onBlur}
                        />
                    ) : (
                        singleInput(coustomStates, setState, customInputKeys, valuePlaceholder)
                    )}
                </div>

                {_showBtns ? (
                    <div className="z-flex-items-v-center">
                        {_canMove
                            ? [
                                  <Tooltip
                                      key="up"
                                      placement="top"
                                      title={toolTips.moveUp}
                                      mouseEnterDelay={0}
                                      mouseLeaveDelay={0}>
                                      <span className="z-option-btn-item  move" onClick={_onMoveUp}>
                                          <Icon type="up"></Icon>
                                      </span>
                                  </Tooltip>,
                                  <Tooltip
                                      key="down"
                                      placement="top"
                                      title={toolTips.moveDown}
                                      mouseEnterDelay={0}
                                      mouseLeaveDelay={0}>
                                      <span className="z-option-btn-item  move" onClick={_onMoveDown}>
                                          <Icon type="down"></Icon>
                                      </span>
                                  </Tooltip>,
                              ]
                            : null}
                        {_canDelete ? (
                            <Tooltip placement="top" title={toolTips.remove} mouseEnterDelay={0} mouseLeaveDelay={0}>
                                <span className="z-option-btn-item  delete" onClick={_onRemove}>
                                    <Icon type="minus"></Icon>
                                </span>
                            </Tooltip>
                        ) : null}
                        {_multiple ? (
                            <Tooltip placement="top" title={toolTips.addChild} mouseEnterDelay={0} mouseLeaveDelay={0}>
                                <span className="z-option-btn-item " onClick={_onAddChild}>
                                    <Icon type="branches"></Icon>
                                </span>
                            </Tooltip>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    );
});
const InputItem = InputContext.setConsumer(_InputItem);
export default InputItem;
