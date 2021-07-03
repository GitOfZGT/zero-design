import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import { GenNonDuplicateID, removeItemFromTree, itemsFromTree } from '../zTool';
import PropTypes from 'prop-types';
import InputGroup from './InputGroup';
import InputContext from './InputContext';
import { message, Tooltip, Icon } from 'antd';
import './style.scss';
import { Checkbox } from 'antd';
function getNewItem() {
    return { id: GenNonDuplicateID(), label: '', value: '' };
}

const propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    multiple: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    showBtns: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    canMove: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    canAdd: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    canDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    inputType: PropTypes.string,
    labelPlaceholder: PropTypes.string,
    valuePlaceholder: PropTypes.string,
    customInputKeys: PropTypes.array,
    children: PropTypes.func,
    toolTips: PropTypes.object,
};

const defaultProps = {
    value: [],
    multiple: true,
    inputType: 'double',
    labelPlaceholder: 'Label',
    valuePlaceholder: 'Value',
    customInputKeys: [
        { key: 'label', initValue: '' },
        { key: 'value', initValue: '' },
    ],
    showBtns: true,
    canMove: true,
    canAdd: true,
    canDelete: true,
    canDeleteLastOne: false,
    toolTips: {},
};

function setId(arr) {
    Array.isArray(arr) &&
        arr.forEach((item) => {
            if (item.id === undefined) {
                item.id = GenNonDuplicateID();
            }
            if (Array.isArray(item.children)) {
                setId(item.children);
            }
        });
}

const _ZtreeInput = React.forwardRef((props, ref) => {
    const {
        value,
        onChange,
        multiple,
        inputType,
        labelPlaceholder,
        valuePlaceholder,
        customInputKeys,
        children,
        showBtns,
        toolTips,
        canMove,
        canAdd,
        canDelete,
        canDeleteLastOne,
    } = props;
    const [sync, setSync] = useState(false);
    console.log(value, '--treeinput');
    const valueTree = Array.isArray(value) && value.length ? value : [getNewItem()];
    const addChild = (item, newItem) => {
        item.children = Array.isArray(item.children) ? [...item.children, newItem] : [newItem];
        onChange && onChange([...valueTree]);
    };
    setId(valueTree);
    const [isNumberValue, setNumberType] = useState(typeof valueTree[0].value === 'number');
    useEffect(() => {
        const isNumber = typeof valueTree[0].value === 'number';
        if (isNumberValue !== isNumber && (valueTree[0].value || isNumber)) {
            setNumberType(isNumber);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueTree]);
    const _toolTips = Object.assign(
        {
            addRootChild: '添加根节点',
            addSiblings: '添加兄弟节点',
            moveUp: '上移',
            moveDown: '下移',
            remove: '移除',
            addChild: '新增子节点',
        },
        toolTips,
    );
    return (
        <InputContext.Provider
            value={{
                onBlur: () => {
                    onChange && onChange([...valueTree]);
                },
                sync,
                inputType,
                multiple,
                isNumberValue,
                canMove,
                canAdd,

                labelPlaceholder,
                valuePlaceholder,
                customInputKeys,
                customInputFunc: children,
                showBtns,
                toolTips: _toolTips,
                onSibingsClick: (e, data, index) => {
                    itemsFromTree({
                        tree: valueTree,
                        sourceItem: { id: data.id },
                        action: ({ tree, currentItem, item, index, keyObj, parentItem }) => {
                            if (parentItem) {
                                parentItem.children = [...parentItem.children, getNewItem()];
                                onChange && onChange([...valueTree]);
                            } else {
                                onChange && onChange([...valueTree, getNewItem()]);
                            }
                        },
                    });
                },
                onMoveUp: (e, data, index) => {
                    itemsFromTree({
                        tree: valueTree,
                        sourceItem: { id: data.id },
                        action: ({ tree, currentItem, item, index, keyObj }) => {
                            if (index === 0) {
                                return;
                            }
                            tree.splice(index, 1);
                            tree.splice(index - 1, 0, currentItem);
                            onChange && onChange([...valueTree]);
                        },
                    });
                },
                onMoveDown: (e, data, index) => {
                    itemsFromTree({
                        tree: valueTree,
                        sourceItem: { id: data.id },
                        action: ({ tree, currentItem, item, index, keyObj }) => {
                            if (index === tree.length - 1) {
                                return;
                            }
                            tree.splice(index + 2, 0, currentItem);
                            tree.splice(index, 1);
                            onChange && onChange([...valueTree]);
                        },
                    });
                },
                onRemove: (e, data, index) => {
                    if (valueTree.length === 1 && valueTree[0].id === data.id) {
                        message.warning('必须保留一项');
                        return;
                    }
                    const newTree = removeItemFromTree({
                        tree: valueTree,
                        sourceItem: {
                            id: data.id,
                        },
                    });
                    onChange && onChange(newTree);
                },
                onAddChild: (e, data, index) => {
                    const newItem = getNewItem();
                    addChild(data, newItem);
                },
            }}>
            <div className="z-tree-root">
                {inputType === 'double' && typeof children !== 'function' ? (
                    <div className="z-tree-type">
                        {showBtns && canAdd ? (
                            <Tooltip
                                placement="top"
                                title={_toolTips.addRootChild}
                                mouseEnterDelay={0}
                                mouseLeaveDelay={0}>
                                <span
                                    className="z-option-btn-item"
                                    style={{ margin: '0 6px 0 0' }}
                                    onClick={() => {
                                        onChange && onChange([...valueTree, getNewItem()]);
                                    }}>
                                    <Icon type="plus"></Icon>
                                </span>
                            </Tooltip>
                        ) : null}

                        <Checkbox
                            disabled={isNumberValue}
                            checked={sync}
                            onChange={(e) => {
                                setSync(e.target.checked);
                            }}>
                            左右同步输入
                        </Checkbox>

                        <Checkbox
                            checked={isNumberValue}
                            onChange={(e) => {
                                setNumberType(e.target.checked);
                                if (e.target.checked) {
                                    setSync(false);
                                }
                            }}>
                            右值为数字类型
                        </Checkbox>
                    </div>
                ) : null}
                <InputGroup options={valueTree} canDelete={canDelete} canDeleteLastOne={canDeleteLastOne} />
            </div>
        </InputContext.Provider>
    );
});
_ZtreeInput.propTypes = propTypes;
_ZtreeInput.defaultProps = defaultProps;
const ZtreeInput = React.memo(_ZtreeInput);
export default ZtreeInput;
