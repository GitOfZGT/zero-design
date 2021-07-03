import React from 'react';
import PropTypes from 'prop-types';
import { GenNonDuplicateID, dataType, parseJsonToObject } from '../zTool';
import './style.scss';
import ZmultiRowBaseTable from '../ZmultiRowBaseTable';
import ZliveInfoViewer from '../ZliveInfoViewer';
import RowTr from './RowTr';
import { message, Pagination } from 'antd';

class ZliveInfoMultiRow extends React.PureComponent {
    static propTypes = {
        value: PropTypes.arrayOf(PropTypes.object),
        canOpenAddressLocation: PropTypes.bool,
        formData: PropTypes.object,
        onChange: PropTypes.func,
        onAdd: PropTypes.func,
        showAddButton: PropTypes.bool,
        showRemoveButton: PropTypes.bool,
        disabled: PropTypes.bool,
        pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        customControlRender: PropTypes.object,
        getExtendComponents: PropTypes.func,
        className: PropTypes.string,
    };
    static defaultProps = {
        showAddButton: false,
        showRemoveButton: false,
        pagination: true,
    };
    state = {
        dataSource: [],
        checkedKeys: [],
        allChecked: false,
        titleGroups: [],
        items: [],
        currentPage: 1,
        pageSize: 9,
    };
    componentDidMount() {
        this.initFormItems();
        if ((this.props.value || []).length) {
            this.methods.setFormFieldsValue(this.props.value);
        }
        this.props.exportMethods && this.props.exportMethods(this.methods);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== prevProps.value) {
            this.methods.setFormFieldsValue(this.props.value);
        }
        if (this.props.formData !== prevProps.formData) {
            this.initFormItems();
        }
    }

    render() {
        const { dataSource, items, titleGroups, formData, allChecked, currentPage } = this.state;
        const {
            className,
            canOpenAddressLocation,
            showAddButton,
            showRemoveButton,
            pagination,
            customControlRender,
            disabled,
            getExtendComponents,
        } = this.props;
        let paginationView = null;
        let pageSize = 9;
        if (pagination) {
            const paginationProps = typeof pagination === 'object' ? pagination : {};
            if (paginationProps.pageSize) {
                pageSize = paginationProps.pageSize;
            }
            paginationView = dataSource.length ? (
                <div className="z-live-info-multi-row-pagination">
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={dataSource.length}
                        onChange={this.paginationChange}
                        showTotal={this.showTotal}
                        {...(typeof pagination === 'object' ? pagination : {})}></Pagination>
                </div>
            ) : null;
        }
        const extendComs = (typeof getExtendComponents === 'function' ? getExtendComponents() : null) || [];

        const renderMap = extendComs.reduce(
            (tol, curr) => ({ ...tol, [curr.value]: (curr.ZliveInfoViewerControlRender || {}).render }),
            {},
        );
        return (
            <>
                <ZmultiRowBaseTable
                    dataSource={dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                    items={items}
                    titleGroups={titleGroups}
                    showAddButton={showAddButton}
                    showRemoveButton={showRemoveButton}
                    onAdd={this.addRow}
                    onRemove={this.removeRow}
                    onAllChecked={this.allRowChecked}
                    allChecked={allChecked}
                    disabled={disabled}
                    className={`z-live-info-multi-row-body ${className || ''}`}>
                    {formData
                        ? ({ dataSource, columns }) => (
                              <tbody>
                                  {dataSource.map((tr, tr_i) => (
                                      <ZliveInfoViewer
                                          key={tr.rowKey}
                                          formData={formData}
                                          formValues={tr}
                                          canOpenAddressLocation={canOpenAddressLocation}>
                                          {({ groups, fieldValue }) => {
                                              if (this.saveGroups !== groups) {
                                                  this.saveGroups = groups;
                                                  const allItems = groups.reduce(
                                                      (tol, g) => [...tol, ...g.formItems],
                                                      [],
                                                  );
                                                  this.saveColumns = columns.map((col) => {
                                                      const newCol = { ...col };

                                                      const _customControlRender = customControlRender || {};
                                                      if (typeof _customControlRender[newCol.key] === 'function') {
                                                          newCol.render = () =>
                                                              _customControlRender[newCol.key](
                                                                  newCol,
                                                                  tr,
                                                                  tr_i,
                                                                  dataSource,
                                                              );
                                                          return newCol;
                                                      }

                                                      const finded = allItems.find((item) => item.key === newCol.key);

                                                      if (finded) {
                                                          if (typeof renderMap[finded.fieldType] === 'function') {
                                                              newCol.render = (value) =>
                                                                  renderMap[finded.fieldType]({
                                                                      value,
                                                                      field: finded,
                                                                      formValues: fieldValue,
                                                                  });
                                                              return newCol;
                                                          }
                                                          newCol.render = finded.render;
                                                      } else {
                                                          newCol.render = () => '';
                                                      }
                                                      return newCol;
                                                  });
                                              }
                                              return (
                                                  <RowTr
                                                      rowKey={tr.rowKey}
                                                      columns={this.saveColumns || []}
                                                      row={fieldValue}
                                                      rowIndex={tr_i + (currentPage - 1) * pageSize}
                                                      showCheckBox={showRemoveButton}
                                                      checked={this.state.checkedKeys.includes(tr.rowKey)}
                                                      onChecked={this.rowChecked}></RowTr>
                                              );
                                          }}
                                      </ZliveInfoViewer>
                                  ))}
                              </tbody>
                          )
                        : null}
                </ZmultiRowBaseTable>
                {paginationView}
            </>
        );
    }
    initFormItems = () => {
        const { formData } = this.props;
        if (!dataType.isObject(formData)) return;
        // console.log(formData);
        const setItems = (formData) => {
            const items = [];
            const titleGroups = [];
            const fd = formData || {};
            const sectionList = Array.isArray(fd.sectionList) ? fd.sectionList : [];
            sectionList.forEach((g) => {
                const groupConfig = parseJsonToObject(g.config);

                const labelShowTag = typeof g.labelShowTag === 'number' ? g.labelShowTag : 1;
                if (labelShowTag !== 0) {
                    titleGroups.push({ id: g.id || g.name, title: g.name });
                }
                g.formFieldInfoList.forEach((field) => {
                    const config = parseJsonToObject(field.config);

                    items.push({
                        ...field,
                        key: field.fieldKey,
                        labelWidth: config.labelWidth || groupConfig.labelWidth,
                        groupId: g.id || g.name,
                    });
                });
            });
            this.setState({
                items,
                titleGroups,
                formData,
            });
        };
        setItems(formData);
    };
    loadingRef = React.createRef();
    methods = {
        setFormFieldsValue: (value) => {
            this.setState({
                dataSource: (value || this.props.value).map((row) => {
                    if (!row.rowKey) {
                        row.rowKey = GenNonDuplicateID(5);
                    }
                    return row;
                }),
            });
        },
        getInitialFormItems: () => this.saveColumns,
    };
    showTotal = (total, range) => `共${total}条`;
    paginationChange = (page, pageSize) => {
        this.setState({
            currentPage: page,
            pageSize,
        });
    };
    rowChecked = (e) => {
        const { checkedKeys } = this.state;
        if (e.target.checked) {
            checkedKeys.push(e.target.rowKey);
        } else {
            const i = checkedKeys.findIndex((key) => key === e.target.rowKey);
            checkedKeys.splice(i, 1);
        }

        this.setState({
            checkedKeys: [...checkedKeys],
            allChecked: checkedKeys.length === this.state.dataSource.length,
        });
    };
    allRowChecked = (e) => {
        if (e.target.checked) {
            this.setState({
                checkedKeys: this.state.dataSource.map((item) => item.rowKey),
                allChecked: e.target.checked,
            });
        } else {
            this.setState({
                checkedKeys: [],
                allChecked: e.target.checked,
            });
        }
    };
    addRow = () => {
        if (typeof this.props.onAdd === 'function') {
            this.props.onAdd();
            this.setState({ allChecked: false });
            return;
        }
    };
    removeRow = () => {
        if (!this.state.checkedKeys.length) {
            message.info('请勾选行数据！');
            return;
        }
        const dataSource = this.state.dataSource.filter((item) => !this.state.checkedKeys.includes(item.rowKey));
        this.setState(
            {
                dataSource,
                allChecked: false,
                checkedKeys: [],
            },
            () => {
                this.props.onChange && this.props.onChange(dataSource);
            },
        );
    };
}

export default ZliveInfoMultiRow;
