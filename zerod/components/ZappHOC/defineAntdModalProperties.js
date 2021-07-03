import { Modal } from 'antd';
const defineConfirm = Modal.confirm;
const defineInfo = Modal.info;
const defineSuccess = Modal.success;
const defineError = Modal.error;
const defineWarning = Modal.warning;
function getDefaultOpt(opt) {
    //处理 antd v3.x的 Modal.xxx()默认下关闭后再打开按钮的名称国际化翻译失效问题  （至antd v3.26.20依然存在此问题）
    return {
        okText: '确定',
        cancelText: '取消',
        ...(opt || {}),
    };
}
Object.defineProperties(Modal, {
    confirm: {
        get() {
            return (opt) => {
                return defineConfirm(getDefaultOpt(opt));
            };
        },
    },
    info: {
        get() {
            return (opt) => {
                return defineInfo(getDefaultOpt(opt));
            };
        },
    },
    success: {
        get() {
            return (opt) => {
                return defineSuccess(getDefaultOpt(opt));
            };
        },
    },
    error: {
        get() {
            return (opt) => {
                return defineError(getDefaultOpt(opt));
            };
        },
    },
    warning: {
        get() {
            return (opt) => {
                return defineWarning(getDefaultOpt(opt));
            };
        },
    },
});
