import React, { useState, useCallback, useRef } from 'react';
import { Icon, Modal, Input } from 'antd';
import UserSelector from 'zerod-pro/components/UserSelector';
import OrganizationTreeSelector from 'zerod-pro/components/UserSelector/TreeSelector';
export default React.memo((props) => {
    const { value, onChange, disabled, selectionClassify, multiple, ...others } = props;
    const [visible, setVisible] = useState(false);
    const [targetItems, setTargetItems] = useState([]);
    const selectedRef = useRef(value);
    const handleOk = useCallback(() => {
        onChange && onChange(selectedRef.current);
        setVisible(false);
    }, [selectedRef.current]);
    const handleChange = useCallback((items) => {
        selectedRef.current = items.map((item) =>
            selectionClassify === 'organization'
                ? {
                      id: item.id,
                      parentDeptName: item.parentDeptName,
                      deptCode: item.deptCode,
                      name: item.name,
                      areaId: item.areaId
                  }
                : {
                      id: item.key,
                      userName: item.title,
                      userAccout: item.userAccout
                  }
        );
    }, []);
    const handleCancel = useCallback(() => {
        setVisible(false);
    }, []);
    const handleOpen = useCallback(() => {
        if (disabled) {
            return;
        }
        setVisible(true);
        setTargetItems(
            Array.isArray(value)
                ? value.map((item) =>
                      selectionClassify === 'organization'
                          ? item
                          : { key: item.id, title: item.userName, userAccout: item.userAccout }
                  )
                : []
        );
    }, [value, disabled]);
    return (
        <>
            <Input
                {...others}
                disabled={disabled}
                addonAfter={<Icon type="right" onClick={handleOpen} />}
                value={(Array.isArray(value) ? value : [])
                    .map((item) => (selectionClassify === 'organization' ? item.name : item.userName))
                    .join(',')}
                onClick={handleOpen}
                onChange={() => {}}
            ></Input>

            <Modal
                width={1100}
                visible={visible}
                title={selectionClassify === 'organization' ? '选择组织' : '选择用户'}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
            >
                {selectionClassify === 'organization' ? (
                    <div style={{ overflow: 'auto', height: '600px' }}>
                        <OrganizationTreeSelector
                            rootId={0}
                            type={1}
                            targetItems={targetItems}
                            onChange={handleChange}
                            multiple={multiple}
                        ></OrganizationTreeSelector>
                    </div>
                ) : (
                    <UserSelector
                        rootId={0}
                        type="user"
                        listStyle={{ width: 500, height: 400 }}
                        targetItems={targetItems}
                        onChange={handleChange}
                        multiple={multiple}
                    ></UserSelector>
                )}
            </Modal>
        </>
    );
});
