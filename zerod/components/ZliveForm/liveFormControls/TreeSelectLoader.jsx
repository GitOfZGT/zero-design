import React, { useState, useEffect } from 'react';
import { getControl } from '../../Zform/controls';
import { httpAjax, itemsFromTree } from '../../zTool';
import { treeDataAddKey } from '../common';
//treeSelect 异步加载子节点组件
// const TreeSelectLoader = React.forwardRef((props, ref) => {
//     const { selectList, selectionsUrl, selectionsQuery, selectListFieldNames, optionsChange, ...others } = props;
//     const [options, setOptions] = useState([]);

//     useEffect(() => {
//         setOptions(selectList);
//     }, [selectList]);
//     useEffect(() => {
//         optionsChange && optionsChange(options);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [options]);
//     return getControl('TreeSelect', {
//         ...others,
//         treeData: options,
//         showSearch: false,
//         treeDefaultExpandAll: false,
//         allowClear: true,
//         loadData:
//             selectionsUrl && selectionsUrl.requireType === 'part'
//                 ? (treeNode) => {
//                       // console.log(treeNode);
//                       if (treeNode.props.isLeaf) {
//                           return Promise.resolve();
//                       }
//                       return httpAjax(
//                           selectionsUrl.selectionsUrlMethod,
//                           selectionsUrl.selectionsUrl,
//                           {
//                               ...selectionsQuery,
//                               id: treeNode.props.value,
//                           },
//                           selectionsUrl.requestConfig,
//                       )
//                           .then((re) => {
//                               itemsFromTree({
//                                   tree: options,
//                                   sourceItem: { value: treeNode.props.value },
//                                   keyObj: { id: 'value', children: 'children' },
//                                   action({ tree, currentItem, item, index, keyObj }) {
//                                       if (Array.isArray(re.data) && re.data.length) {
//                                           currentItem.children = treeDataAddKey(
//                                               re.data,
//                                               {
//                                                   label: 'title',
//                                                   value: 'value',
//                                                   children: 'children',
//                                                   key: 'key',
//                                               },
//                                               selectListFieldNames,
//                                               false,
//                                           );
//                                       } else {
//                                           currentItem.children = null;
//                                           currentItem.isLeaf = true;
//                                       }
//                                   },
//                               });
//                           })
//                           .finally(() => {
//                               setOptions([...options]);
//                           });
//                   }
//                 : undefined,
//     });
// });
class TreeSelectLoader extends React.PureComponent {
    state = {
        options: [],
    };
    componentDidMount() {
        this.setState({
            options: this.props.selectList,
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectList !== prevProps.selectList) {
            this.setState({
                options: this.props.selectList,
            });
        }
        if (this.state.options !== prevState.options) {
            this.props.optionsChange && this.props.optionsChange(this.state.options);
        }
    }
    render() {
        const {
            selectList,
            selectionsUrl,
            selectionsQuery,
            selectListFieldNames,
            optionsChange,
            ...others
        } = this.props;
        return getControl('TreeSelect', {
            ...others,
            showSearch: true,
            treeNodeFilterProp: 'title',
            searchPlaceholder: '搜索',
            treeData: this.state.options,
            treeDefaultExpandAll: false,
            allowClear: true,
            loadData: selectionsUrl && selectionsUrl.requireType === 'part' ? this.loadData : undefined,
        });
    }
    loadData = (treeNode) => {
        const { selectionsUrl, selectionsQuery, selectListFieldNames } = this.props;

        if (treeNode.props.isLeaf) {
            return Promise.resolve();
        }
        const { options } = this.state;
        return httpAjax(
            selectionsUrl.selectionsUrlMethod,
            selectionsUrl.selectionsUrl,
            {
                ...selectionsQuery,
                id: treeNode.props.value,
            },
            selectionsUrl.requestConfig,
        )
            .then((re) => {
                itemsFromTree({
                    tree: options,
                    sourceItem: { value: treeNode.props.value },
                    keyObj: { id: 'value', children: 'children' },
                    action({ tree, currentItem, item, index, keyObj }) {
                        if (Array.isArray(re.data) && re.data.length) {
                            currentItem.children = treeDataAddKey(
                                re.data,
                                {
                                    label: 'title',
                                    value: 'value',
                                    children: 'children',
                                    key: 'key',
                                },
                                selectListFieldNames,
                                false,
                            );
                        } else {
                            currentItem.children = null;
                            currentItem.isLeaf = true;
                        }
                    },
                });
            })
            .finally(() => {
                this.setState({
                    options: [...options],
                });
            });
    };
}
export default TreeSelectLoader;
