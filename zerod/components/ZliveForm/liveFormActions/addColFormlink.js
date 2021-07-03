const showLinkage = {
    selectionsType: {
        1: {
            show: ['selectList'],
            hide: ['selectionsUrl', 'selectionsQuery', 'selectionsFromKey', 'responseDataIndex'],
        },
        2: {
            show: ['selectionsUrl', 'selectionsQuery', 'responseDataIndex'],
            hide: ['selectList', 'selectionsFromKey'],
        },
        3: {
            show: ['selectionsFromKey'],
            hide: ['selectionsUrl', 'selectionsQuery', 'selectionsFromKey', 'selectList', 'responseDataIndex'],
        },
    },
    storageType: {
        PUBLIC: { show: [], hide: ['getPrivateUrl'] },
        PRIVATE: { show: ['getPrivateUrl'], hide: [] },
    },
    ocrEnabled: {
        0: { show: [], hide: ['ocrUrl'] },
        1: { show: ['ocrUrl'], hide: [] },
    },
    isRequstSign: {
        0: { show: [], hide: ['getSignUrl', 'setSignUrl', 'userIdOriginKey'] },
        1: { show: ['getSignUrl', 'setSignUrl', 'userIdOriginKey'], hide: [] },
    },
    useQrcodeToSign: {
        0: { show: [], hide: ['qrcodeContentUrl', 'commitSignUrl', 'useWebsocket'] },
        1: { show: ['qrcodeContentUrl', 'commitSignUrl', 'useWebsocket'], hide: [] },
    },
    useWebsocket: {
        0: { show: [], hide: ['websocketUrl'] },
        1: { show: ['websocketUrl'], hide: [] },
    },
    useFrequentWord: {
        0: {
            show: [],
            hide: [
                'getFrequentWord',
                'getFrequentWordQuery',
                'frequentWordFieldNames',
                'addFrequentWord',
                'updateFrequentWord',
                'deleteFrequentWord',
            ],
        },
        1: {
            show: [
                'getFrequentWord',
                'getFrequentWordQuery',
                'frequentWordFieldNames',
                'addFrequentWord',
                'updateFrequentWord',
                'deleteFrequentWord',
            ],
            hide: [],
        },
    },
    useScanCode: {
        0: { show: [], hide: ['onlyFromCamera'] },
        1: { show: ['onlyFromCamera'], hide: [] },
    },
    type: {
        text: { show: ['useFrequentWord'], hide: [] },
        password: { show: [], hide: ['useFrequentWord'] },
    },
};

export function secondLink({ changeFormItems, values, form, showLinkage }) {
    const formValues = { ...form.getFieldsValue(), ...(values || {}) };
    Object.keys(formValues).forEach((key) => {
        if (typeof formValues[key] === 'boolean') {
            formValues[key] = Number(formValues[key]);
        }
    });
    let showKeys = [];
    let hideKeys = [];

    Object.keys(showLinkage).forEach((key) => {
        const age = showLinkage[key][formValues[key]] || null;
        if (age) {
            showKeys = showKeys.concat(age.show);
            hideKeys = hideKeys.concat(age.hide);
        }
    });
    const _showLinkage = {};
    Object.keys(showLinkage).forEach((key) => {
        if (hideKeys.includes(key)) {
            _showLinkage[key] = showLinkage[key];
            formValues[key] = 0;
        }
    });
    if (showKeys.length || hideKeys.length) {
        changeFormItems(
            [
                ...showKeys.map((item) => ({ key: item, show: true })),
                ...hideKeys.map((item) => ({ key: item, show: false })),
            ],
            true,
            () => {
                secondLink({
                    changeFormItems,
                    values: formValues,
                    form,
                    showLinkage: _showLinkage,
                });
            },
        );
    }
}

export function formLink({ changeFormItems, formItems, values, form, controlList, excludeKeys = [] }) {
    const formValues = { ...form.getFieldsValue(), ...(values || {}) };
    const fieldType = formValues.fieldType;
    const fieldTypeItem = controlList.find((cont) => cont.value === fieldType);
    const showKeys = fieldTypeItem.showKeys.filter((key) => !excludeKeys.includes(key));

    changeFormItems(
        formItems.map((item) => {
            const show = showKeys.includes(item.key);
            return { key: item.key, show };
        }),
        true,
        () => {
            secondLink({
                changeFormItems,
                values,
                form,
                hasShowKeys: showKeys,
                showLinkage: {
                    ...showLinkage,
                    ...formItems.reduce((tol, curr) => {
                        const coolection = { ...tol };
                        if (curr.linkVisibleMap) {
                            coolection[curr.key] = curr.linkVisibleMap;
                        }
                        return coolection;
                    }, {}),
                },
            });
        },
    );
}
