```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZliveFormBaseDemo
 * @description: ZliveForm基本使用的示例
 * @title: ZliveForm
 */
import React from 'react';
import { ZliveForm } from 'zerod';
import { getControl, getOptions } from 'zerod/components/Zform/controls';
import { parseJsonToObject } from 'zerod/components/zTool';
import linkageAction from 'zerod/components/ZliveForm/linkageAction';
const getExtendComponents = () => [
    {
        label: '下拉控件',
        value: 'selections',
        // 获取此控件配置属性时的表单控件
        getFieldPropertiesFormItems({ formItemsRef, componentList, formItemsLinkAction }) {
            return [
                {
                    key: 'mode',
                    label: '模式',
                    show: false,
                    labelFocused: true,
                    // 当前控件属性控制其他属性显示/隐藏
                    linkVisibleMap: {
                        // 当mode值为single时，显示属性protos1，隐藏属性protos2
                        single: { show: ['protos1'], hide: ['protos2'] },
                        multiple: { show: ['protos2'], hide: ['protos1'] },
                        tags: { show: [], hide: ['protos1', 'protos2'] },
                    },
                    render() {
                        return (form, changeFormItems) => {
                            return getControl('Radio.Group', {
                                selectList: [
                                    {
                                        label: '单选',
                                        value: 'single',
                                    },
                                    { label: '多选', value: 'multiple' },
                                    { label: '标签', value: 'tags' },
                                ],
                                onChange: (e) => {
                                    // 执行属性控件的显示/隐藏处理
                                    formItemsLinkAction({
                                        changeFormItems,
                                        formItems: formItemsRef.current,
                                        values: { mode: e.target.value },
                                        form,
                                        controlList: componentList,
                                        excludeKeys: [],
                                    });
                                },
                            });
                        };
                    },
                    options: getOptions({ required: true, initialValue: 'single' }),
                },
                {
                    key: 'protos1',
                    label: '属性值1',
                    show: false,
                    labelFocused: true,
                    linkVisibleMap: {},
                    render(form, changeFormItems) {
                        return getControl('Input');
                    },
                },
                {
                    key: 'protos2',
                    label: '属性值2',
                    show: false,
                    labelFocused: true,
                    linkVisibleMap: {},
                    render(form, changeFormItems) {
                        return getControl('Input');
                    },
                },
            ];
        },
        ZliveFormViewerControlRender: {
            getControl(field, linkages, getGroupsFn, options) {
                const extraValue = options.extraValue || {};
                const config = parseJsonToObject(field.config);
                // 通过 getFieldPropertiesFormItems 配置的属性，会在config中
                const { tagName, protos1, protos2, mode } = config;

                return (form, changeItems, item, methods) => {
                    return getControl('Input', {
                        placeholder: field.placeholder,
                        ...options,
                        onChange: () => {
                            // linkageAction({
                            //     ages: linkages,
                            //     getGroupsFn,
                            //     selfItem: item,
                            //     extraValue,
                            //     getExtendComponents: field.getExtendComponents,
                            // });
                        },
                    });
                };
            },
            getOptions(field, rules, getDefaultOptions) {
                return getDefaultOptions(field, rules);
            },
        },
        ZliveInfoViewerControlRender: {
            render({ value }) {
                return <strong>8889877</strong>;
            },
        },
    },
];

export default class Demo extends React.PureComponent {
    onSave = (newFormData) => {
        console.log(newFormData);
    };
    render() {
        return <ZliveForm onSave={this.onSave} getExtendComponents={getExtendComponents} />;
    }
}
```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZliveFormValDemo
 * @description: ZliveForm回填formData的示例
 * @title: ZliveForm
 */
import React from 'react';
import { ZliveForm } from 'zerod';
import { zTool } from 'zerod';
const api = {
    //根据code查询表单
    getFormDetailByCode(query) {
        return zTool.httpAjax('post', '/form-service/webapi/v1.0/form/getFormDetailByCode', query);
    },
};
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
export default class Demo extends React.PureComponent {
    formData = {
        name: '动态表单-demo',
        labelLayout: 'horizontal',
        code: 'liveform_demo_code',
        config: '{"initialValueApi":{"urlMethod":"post","url":""}}',
        sectionList: [
            {
                name: '组名-1',
                formFieldInfoList: [
                    {
                        fieldKey: 'myInput',
                        fieldType: 1,
                        config: '{"maxLength":100,"type":"text","hiddenRendering":0,"tagName":[]}',
                        disabled: 0,
                        label: '输入框',
                        required: 1,
                        span: 8,
                        seq: 1,
                        hidden: 0,
                        labelShowTag: 1,
                    },
                ],
                seq: 1,
                hidden: 0,
                labelShowTag: 1,
                config: '{}',
            },
        ],
        linkages: '[]',
    };
    state = {
        formData: {},
    };
    componentDidMount() {
        axios.get(`${baserouter}/static/zliveformdata.json`).then((res) => {
            this.setState({
                formData: res.data,
            });
        });
        // api.getFormDetailByCode({
        //     code: 'wx_app_test_zgt',
        //     // code: 'park_plan_add',
        // }).then((res) => {
        //     this.setState({
        //         formData: res.data,
        //     });
        // });
    }
    onSave = (newFormData) => {
        console.log(newFormData);
    };
    render() {
        return (
            <ZliveForm
                getMultiRowFormData={({ params }) => {
                    return axios.get(`${baserouter}/static/zlivefromviewerdata.json`).then((res) => {
                        return res.data;
                    });
                    // return api
                    //     .getFormDetailByCode({
                    //         code: params.formCode,
                    //     })
                    //     .then((res) => {
                    //         return res.data;
                    //     });
                }}
                formData={this.state.formData}
                onSave={this.onSave}
            />
        );
    }
}
```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZliveFormViewerDemo1
 * @description: ZliveFormViewer的简单使用示例
 * @title: ZliveFormViewer
 */
import React from 'react';
import { render } from 'react-dom';
import { ZliveFormViewer, ZpageWrapper, zTool } from 'zerod';
import { Button } from 'antd';
const api = {
    //根据code查询表单
    getFormDetailByCode(query) {
        return zTool.httpAjax('post', '/form-service/webapi/v1.0/form/getFormDetailByCode', query);
    },
};
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
export default class ZliveFormViewerDemo1 extends React.PureComponent {
    state = {
        formData: {},
    };
    componentDidMount() {
        axios.get(`${baserouter}/static/zlivefromviewerdata.json`).then((res) => {
            this.setState({
                formData: res.data,
            });
        });
        // api.getFormDetailByCode({
        //     code: 'leave_flow_start_form',
        // }).then((res) => {
        //     this.setState({
        //         formData: res.data,
        //     });
        // });
    }

    onSubmit = (values) => {
        console.log(values);
        return Promise.resolve();
    };

    render() {
        return (
            <ZpageWrapper pageHeader={{ show: false }}>
                <ZliveFormViewer
                    momentFormat={true}
                    getMultiRowFormData={({ params }) => {
                        return api
                            .getFormDetailByCode({
                                code: params.formCode,
                            })
                            .then((res) => {
                                return res.data;
                            });
                    }}
                    formValues={{ problemDeadlineTime: '2020-11-20', problemFeedbackHandleTime: '2020-11-21' }}
                    formData={this.state.formData}
                    onSubmit={this.onSubmit}
                    submitBtnRender={(submit) => {
                        return (
                            <Button type="primary" onClick={submit}>
                                提交
                            </Button>
                        );
                    }}
                    allDisabled={false}
                />
            </ZpageWrapper>
        );
    }
}
```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZliveInfoViewerDemo1
 * @description: ZliveInfoViewer的简单使用示例
 * @title:ZliveInfoViewer
 */
import React from 'react';
import { ZliveInfoViewer, ZpageWrapper, zTool } from 'zerod';
const api = {
    //根据code查询表单
    getFormDetailByCode(query) {
        return zTool.httpAjax('post', '/form-service/webapi/v1.0/form/getFormDetailByCode', query);
    },
};
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
export default class ZliveInfoViewerDemo1 extends React.PureComponent {
    state = {
        formValues: {},
    };
    formValue = {
        textnormal:
            '1.以演出为媒介进行广告宣传或者产品促销的，没收违法所得，并处违法所得8倍处罚；演出没有违法所得的并处5万元罚款\n2.售票或接受赞助或接受捐赠款物的，违法所得金额较大的，没收违法所得，并处违法所得10倍处罚；违法所得不足一万元的，并处8万元罚款\n3.未经批准举办涉港澳台的文艺表演团体、个人参加的营业性演出的，没收违法所得，并处违法所得10倍处罚；或没有违法所得或违法所得不足一万元的，并处8万元罚款\n4.未经批准举办涉外的文艺表演团体、个人参加的营业性演出的，没收违法所得，并处违法所得10倍处罚；或没有违法所得或违法所得不足一万元的，并处10万元罚款',
        textarea1: '878',
        selectcons: '我是个',
        selectconsLabel: '我是个',
        sycnselect: null,
        numberinput: '9',
        dayssd: '2020-08-07',
        checkmore: ['电视公司', '是的事告诉对方'],
        checkmoreLabel: ['电视公司', '是的事告诉对方'],
        sycnchecks: [],
        radiosss: '山豆根士大夫但是',
        radiosssLabel: '山豆根士大夫但是',
        asyncradio: null,
        tiemedsdg: '12:38',
        uploadsss: [
            {
                id: 36919,
                originalFileName: 'u=2105498697,2746169904&fm=11&gp=0.jpg',
                fileName: '2df6ceb197b6409eb914027f61c4a561.jpg',
                fileKey: null,
                fileSuffix: 'jpg',
                filePath:
                    'https://cgzf-1257892252.cos.ap-chengdu.myqcloud.com/2020/08/12/12/2df6ceb197b6409eb914027f61c4a561.jpg',
                fileSize: 16639,
                storage: 'PUBLIC',
            },
            {
                id: 369209,
                originalFileName: 'u=2105498697,2746169904&fm=11&gp=0.jpg',
                fileName: '2df6ceb197b6409eb914027f61c4a561.jpg',
                fileKey: null,
                fileSuffix: 'jpg',
                filePath:
                    'https://cgzf-1257892252.cos.ap-chengdu.myqcloud.com/2020/08/12/12/2df6ceb197b6409eb914027f61c4a561.jpg',
                fileSize: 16639,
                storage: 'PUBLIC',
            },
        ],
        asyncSelect: null,
        aseeetAsync: null,
        monthosss: '2020-08',
        dateTimessdd: '2020-08-20 12:30',
        yearssss: '2020',
        phoneLocation: '广东省深圳市南山区',
        key_74571575253681250: '8885555',
        key_73471575253874880: '2',
        key_73471575253874880Label: '选项2',
        mapLocation: {
            name: '西海明珠大厦F座',
            address: '广东省深圳市南山区桃园路1号',
            longitude: 113.931007,
            latitude: 22.531813,
            adcode: '440305',
            citycode: '156440300',
            country: '中国',
            province: '广东省',
            city: '深圳市',
            district: '南山区',
            street: '南头街道',
            streetcode: '440305001',
            pointWkt: 'POINT(113.931007 22.531813)',
            pointWkt2000: '',
        },
        key_20561575253965416: ['1'],
        key_20561575253965416Label: ['选项1'],
        key_22411575254943164: null,
        key_22111575255184200: [],
        key_98571575509832860: '2020-08',
        key_13051575509913716: '2020-08-15',
        key_34451575509946700: '2020-08-12 12:30',
        mycustoms: null,
        dsdsdsddddddddd: ['7878', '豆腐干大锅饭', '豆腐干豆腐干'],
        dsdsdsdddddddddLabel: ['7878', '豆腐干大锅饭', '豆腐干豆腐干'],
        key_57201575510434430: '1-1',
        key_57201575510434430Label: '选项1-1',
        key_51821575510612480: ['2', '1'],
        key_51821575510612480Label: ['选项2', '选项1'],
        key_22141575510738370: '选项3',
        key_22141575510738370Label: '选项3',
        key_96151575510695970: [],
        key_68361575512415380: null,
        key_44061575512485950: true,
        key_40451575512509730: [
            {
                id: 36917,
                originalFileName: 'login.png',
                fileName: '3e23c69985474469ae0b1200f967d6c2.png',
                fileKey: null,
                fileSuffix: 'png',
                filePath:
                    'https://cgzf-private-1257892252.cos.ap-guangzhou.myqcloud.com/2020/08/12/12/3e23c69985474469ae0b1200f967d6c2.png?q-sign-algorithm=sha1&q-ak=AKID08X2YCGXDtlfPxufonkW9aqfJn6XAaEm&q-sign-time=1597206556;1597206586&q-key-time=1597206556;1597206586&q-header-list=&q-url-param-list=&q-signature=2f6bdaeae9bc9d991fe6f6387ca1c4ed47641692',
                fileSize: 201546,
                storage: 'PRIVATE',
            },
        ],
        key_40261575512600730: [
            {
                id: 36918,
                originalFileName: '363.txt',
                fileName: '351b5daaedcd4ac48726426468e62568.txt',
                fileKey: null,
                fileSuffix: 'txt',
                filePath:
                    'https://cgzf-private-1257892252.cos.ap-guangzhou.myqcloud.com/2020/08/12/12/351b5daaedcd4ac48726426468e62568.txt?q-sign-algorithm=sha1&q-ak=AKID08X2YCGXDtlfPxufonkW9aqfJn6XAaEm&q-sign-time=1597206567;1597206597&q-key-time=1597206567;1597206597&q-header-list=&q-url-param-list=&q-signature=cc484039ad93d75ac1eb7612bae79a297a2ec93c',
                fileSize: 14975,
                storage: 'PRIVATE',
            },
        ],
        key_47431575512660160Sign: {
            personalSignature:
                'data:image/png;base64,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',
        },
        key_11541574849635220: null,
        key_20911583653306450: {
            name: '南山区政府大楼',
            address: '广东省深圳市南山区桃园路2号',
            longitude: 113.930396,
            latitude: 22.533403,
            adcode: '440305',
            citycode: '156440300',
            country: '中国',
            province: '广东省',
            city: '深圳市',
            district: '南山区',
            street: '南头街道',
            streetcode: '440305001',
            pointWkt: 'POINT(113.930396 22.533403)',
            pointWkt2000: '',
        },
        key_23561585817873990: null,
    };
    componentDidMount() {
        axios.get(`${baserouter}/static/zliveformdata.json`).then((res) => {
            this.setState({
                formData: res.data,
                formValues: { ...this.formValue, multiRow: [this.formValue] },
            });
        });
        // api.getFormDetailByCode({
        //     code: 'ordinary_flow_apply_register',
        // }).then((res) => {
        //     this.setState({
        //         formData: res.data,
        //         // formValues: { ...this.formValue, multiRow: [this.formValue] },
        //     });
        // });
    }
    render() {
        return (
            <ZpageWrapper pageHeader={{ show: false }}>
                <ZliveInfoViewer
                    getMultiRowFormData={({ params }) => {
                        return axios.get(`${baserouter}/static/zliveformdata.json`).then((res) => {
                            return res.data;
                        });
                    }}
                    formData={this.state.formData}
                    formValues={this.state.formValues}
                />
            </ZpageWrapper>
        );
    }
}
```
```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZliveFormMultiRow
 * @description: ZliveFormMultiRow的示例
 * @title: ZliveFormMultiRow
 */
import React from 'react';
import { ZliveFormMultiRow } from 'zerod';
import { zTool } from 'zerod';
import { message } from 'antd';
const api = {
    //根据code查询表单
    getFormDetailByCode(query) {
        return zTool.httpAjax('post', '/form-service/webapi/v1.0/form/getFormDetailByCode', query);
    },
};
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
export default class Demo extends React.PureComponent {
    state = {
        formData: {},
        fomValues: [
            {
                leaveType: '1',
                leaveTypeLabel: '事假',
                hours: 8,
                beginTime: '2021-06-03 08:00',
                finishTime: '2021-06-03 18:00',
                reason: '不告诉你',
                fileList: [
                    {
                        id: 36917,
                        originalFileName: 'login.png',
                        fileName: '3e23c69985474469ae0b1200f967d6c2.png',
                        fileKey: null,
                        fileSuffix: 'png',
                        filePath:
                            'https://cgzf-private-1257892252.cos.ap-guangzhou.myqcloud.com/2020/08/12/12/3e23c69985474469ae0b1200f967d6c2.png?q-sign-algorithm=sha1&q-ak=AKID08X2YCGXDtlfPxufonkW9aqfJn6XAaEm&q-sign-time=1597206556;1597206586&q-key-time=1597206556;1597206586&q-header-list=&q-url-param-list=&q-signature=2f6bdaeae9bc9d991fe6f6387ca1c4ed47641692',
                        fileSize: 201546,
                        storage: 'PRIVATE',
                    },
                    {
                        id: 36918,
                        originalFileName: '363.txt',
                        fileName: '351b5daaedcd4ac48726426468e62568.txt',
                        fileKey: null,
                        fileSuffix: 'txt',
                        filePath:
                            'https://cgzf-private-1257892252.cos.ap-guangzhou.myqcloud.com/2020/08/12/12/351b5daaedcd4ac48726426468e62568.txt?q-sign-algorithm=sha1&q-ak=AKID08X2YCGXDtlfPxufonkW9aqfJn6XAaEm&q-sign-time=1597206567;1597206597&q-key-time=1597206567;1597206597&q-header-list=&q-url-param-list=&q-signature=cc484039ad93d75ac1eb7612bae79a297a2ec93c',
                        fileSize: 14975,
                        storage: 'PRIVATE',
                    },
                ],
            },
        ],
    };
    componentDidMount() {
        axios.get(`${baserouter}/static/zlivefromviewerdata.json`).then((res) => {
            this.setState({
                formData: res.data,
            });
        });
        // api.getFormDetailByCode({
        //     code: 'wx_app_test_zgt',
        //     // code: 'park_plan_add',
        // }).then((res) => {
        //     this.setState({
        //         formData: res.data,
        //     });
        // });
    }
    render() {
        return (
            <div className="z-panel">
                <div className="z-panel-body">
                    <ZliveFormMultiRow
                        momentFormat={true}
                        showAddButton={true}
                        showRemoveButton={true}
                        formData={this.state.formData}
                        onChange={(val) => {
                            console.log(val);
                        }}
                        value={this.state.fomValues}
                    />
                </div>
            </div>
        );
    }
}
```

```jsx
/**
 * @renderMode: rightModal
 * @componentName: ZliveInfoMultiRow
 * @description: ZliveInfoMultiRow的示例
 * @title: ZliveInfoMultiRow
 */
import React from 'react';
import { ZliveInfoMultiRow } from 'zerod';
import { zTool } from 'zerod';
import { message } from 'antd';
const api = {
    //根据code查询表单
    getFormDetailByCode(query) {
        return zTool.httpAjax('post', '/form-service/webapi/v1.0/form/getFormDetailByCode', query);
    },
};
import axios from 'axios';
import getProcessEnv from 'zerod/components/zTool/getProcessEnv';
const { baserouter } = getProcessEnv();
export default class Demo extends React.PureComponent {
    state = {
        formData: {},
        fomValues: [
            {
                leaveType: '1',
                leaveTypeLabel: '事假',
                hours: 8,
                beginTime: '2021-06-03 08:00',
                finishTime: '2021-06-03 18:00',
                reason: '不告诉你',
                fileList: [
                    {
                        id: 36917,
                        originalFileName: 'login.png',
                        fileName: '3e23c69985474469ae0b1200f967d6c2.png',
                        fileKey: null,
                        fileSuffix: 'png',
                        filePath:
                            'https://cgzf-private-1257892252.cos.ap-guangzhou.myqcloud.com/2020/08/12/12/3e23c69985474469ae0b1200f967d6c2.png?q-sign-algorithm=sha1&q-ak=AKID08X2YCGXDtlfPxufonkW9aqfJn6XAaEm&q-sign-time=1597206556;1597206586&q-key-time=1597206556;1597206586&q-header-list=&q-url-param-list=&q-signature=2f6bdaeae9bc9d991fe6f6387ca1c4ed47641692',
                        fileSize: 201546,
                        storage: 'PRIVATE',
                    },
                    {
                        id: 36918,
                        originalFileName: '363.txt',
                        fileName: '351b5daaedcd4ac48726426468e62568.txt',
                        fileKey: null,
                        fileSuffix: 'txt',
                        filePath:
                            'https://cgzf-private-1257892252.cos.ap-guangzhou.myqcloud.com/2020/08/12/12/351b5daaedcd4ac48726426468e62568.txt?q-sign-algorithm=sha1&q-ak=AKID08X2YCGXDtlfPxufonkW9aqfJn6XAaEm&q-sign-time=1597206567;1597206597&q-key-time=1597206567;1597206597&q-header-list=&q-url-param-list=&q-signature=cc484039ad93d75ac1eb7612bae79a297a2ec93c',
                        fileSize: 14975,
                        storage: 'PRIVATE',
                    },
                ],
            },
        ],
    };
    componentDidMount() {
        axios.get(`${baserouter}/static/zlivefromviewerdata.json`).then((res) => {
            this.setState({
                formData: res.data,
            });
        });
        // api.getFormDetailByCode({
        //     code: 'wx_app_test_zgt',
        //     // code: 'park_plan_add',
        // }).then((res) => {
        //     this.setState({
        //         formData: res.data,
        //     });
        // });
    }
    render() {
        return (
            <div className="z-panel">
                <div className="z-panel-body">
                    <ZliveInfoMultiRow
                        onAdd={() => {
                            message.success('点击了添加按钮');
                        }}
                        showAddButton={true}
                        showRemoveButton={true}
                        formData={this.state.formData}
                        value={this.state.fomValues}
                    />
                </div>
            </div>
        );
    }
}
```

