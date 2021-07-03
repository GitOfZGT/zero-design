import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { dataType, GenNonDuplicateID } from '../../zTool';
import httpAjax from '../../zTool/httpAjax';
import { Button, Modal, message, Icon, Tooltip } from 'antd';
import ZcolorPicker from '../../ZcolorPicker';
import SignaturePad from 'signature_pad/dist/signature_pad';
import ZpanelTitle from '../../ZpanelTitle';
import { AwesomeQR } from '../../../qrcode/Asesome-qr';
import { getProcessEnv } from '../../zTool/getProcessEnv';
const { basesocket } = getProcessEnv();
const removeOblique = (str) => {
    //去掉多余的 /
    const rexStart = /\/+(?=\/.*)/g;
    return str.replace(rexStart, '');
};
const getSignAsync = ({ userId, getSignUrlMethod, getSignUrl, isRequstSign, requestConfig, currentSign }) => {
    return new Promise((resolve, reject) => {
        if (isRequstSign && userId && !currentSign) {
            httpAjax(
                getSignUrlMethod || 'post',
                getSignUrl || '/tibmas2-webapi/api/v1.0/userLogo/getUserLogoByUserId',
                {
                    id: userId,
                    userId,
                },
                requestConfig,
            )
                .then((re) => {
                    if (re.data && re.data.personalSignature) {
                        resolve({
                            ...re.data,
                            personalSignature: /^data:image\//.test(re.data.personalSignature)
                                ? re.data.personalSignature
                                : `data:image/png;base64,${re.data.personalSignature}`,
                        });
                    } else {
                        reject();
                    }
                })
                .catch(reject);
        } else {
            reject();
        }
    });
};

const saveSignAsync = ({ userId, setSignUrlMethod, setSignUrl, isRequstSign, base64String, requestConfig }) => {
    if (isRequstSign && userId) {
        const bytes = window.atob(base64String.split(',')[1]);
        const array = [];
        for (let i = 0; i < bytes.length; i++) {
            array.push(bytes.charCodeAt(i));
        }
        const blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
        const fd = new FormData();
        fd.append('file', blob, Date.now() + '.png');
        return httpAjax(
            setSignUrlMethod || 'post',
            `${setSignUrl || '/tibmas2-webapi/api/v1.0/userLogo/insertUserLogoByFile'}?userId=${userId}`,
            fd,
            requestConfig,
        );
    }
    return Promise.resolve();
};

const DoSign = React.memo(
    React.forwardRef(({ base64String }, ref) => {
        const canvasRef = useRef();
        const wrapperRef = useRef();
        const signaturePadRef = useRef();
        const colorPickerRef = useRef();
        useEffect(() => {
            canvasRef.current.width = wrapperRef.current.clientWidth;
            canvasRef.current.height = 300;
            const minWidth = 6;
            signaturePadRef.current = new SignaturePad(canvasRef.current, {
                penColor: '#000000',
                minWidth,
                maxWidth: minWidth + 2,
            });
            if (base64String) {
                signaturePadRef.current.fromDataURL(base64String);
            }
        }, []);
        useImperativeHandle(ref, () => {
            return {
                getSignatureInstance() {
                    return signaturePadRef.current;
                },
                getCanvas() {
                    return canvasRef.current;
                },
            };
        });
        return (
            <div ref={wrapperRef}>
                <div className="z-do-signcontrol-tool">
                    <ZpanelTitle>请签名</ZpanelTitle>
                    <div>
                        <span>笔颜色：</span>
                        <ZcolorPicker
                            ref={colorPickerRef}
                            valueType="hex"
                            defaultValue="#000000"
                            style={{ width: '60px', marginRight: '10px' }}
                            onChange={(value, color) => {
                                signaturePadRef.current && (signaturePadRef.current.penColor = value);
                            }}></ZcolorPicker>
                        <Button
                            type="default"
                            onClick={() => {
                                signaturePadRef.current && signaturePadRef.current.clear();
                            }}>
                            重写
                        </Button>
                    </div>
                </div>
                <canvas
                    ref={canvasRef}
                    style={{ width: '100%', height: '300px', marginTop: '10px', border: '1px solid #cccccc' }}></canvas>
            </div>
        );
    }),
);
function getUserId({ config, currentForm, field }) {
    const userIdKey =
        config.userIdOriginKey || (/Sign$/.test(field.fieldKey) ? field.fieldKey.replace(/Sign$/g, '') : '');
    const userId = currentForm ? currentForm.saveSettingValues[userIdKey] : null;
    return userId;
}

function createQR({ field, config, token, userId }) {
    let qrcodeContentUrl = config.qrcodeContentUrl || '/zhzf/signature';
    qrcodeContentUrl = /^https?:\/\//.test(qrcodeContentUrl)
        ? qrcodeContentUrl
        : `${window.location.protocol}//${window.location.host}${removeOblique(`/${qrcodeContentUrl}`)}`;
    const commitSignUrl = config.commitSignUrl || '/doc-service/web/socket/send/msg';
    const params = {
        title: encodeURIComponent(field.label),
        token: encodeURIComponent(token || GenNonDuplicateID().toString()),
        commitSignUrl: encodeURIComponent(commitSignUrl),
        userId,
    };
    const paramstring = Object.keys(params)
        .reduce((tol, curr) => {
            return [...tol, `${curr}=${params[curr]}`];
        }, [])
        .join('&');
    const text = `${qrcodeContentUrl}${qrcodeContentUrl.includes('?') ? '&' : '?'}${paramstring}`;
    return new AwesomeQR({
        text,
        size: 252,
        margin: 0,
        dotScale: 1,
    }).draw();
}

export const SignControl = React.memo(({ value, onChange, field, config, currentForm, extraValue, disabled }) => {
    const useQrcodeToSign = config.useQrcodeToSign === undefined ? 1 : config.useQrcodeToSign;
    const useWebsocket = config.useWebsocket === undefined ? 1 : config.useWebsocket;
    const signRef = useRef();
    const socketRef = useRef();
    const [state, setState] = useState({
        modalVisible: false,
        loading: false,
        dataURL: '',
        tip: false,
    });
    useEffect(() => {
        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, []);
    return (
        <div className={`z-form-control-signature ${disabled ? 'disabled' : ''}`}>
            <div
                className="z-form-control-signature-content"
                onClick={() => {
                    if (disabled) {
                        return;
                    }
                    const currentSign = dataType.isObject(value) ? value.personalSignature : '';
                    const userId = getUserId({ config, currentForm, field });
                    getSignAsync({ userId, currentSign, ...config })
                        .then((data) => {
                            onChange && onChange(data);
                        })
                        .catch(() => {
                            Modal.confirm({
                                centered: true,
                                className: 'z-do-signcontrol',
                                icon: <span></span>,
                                width: '50%',
                                title: '',
                                content: (
                                    <DoSign
                                        ref={signRef}
                                        // base64String={dataType.isObject(value) ? value.personalSignature : ''}
                                    ></DoSign>
                                ),
                                okText: '确定',
                                cancelText: '取消',
                                onOk: () => {
                                    if (signRef.current.getSignatureInstance().isEmpty()) {
                                        return Promise.reject();
                                    }
                                    const signatureInstance = signRef.current.getSignatureInstance();
                                    const lineData = signatureInstance.toData();
                                    const allX = [];
                                    const allY = [];
                                    //解构全部点
                                    lineData.forEach((item) => {
                                        item.points.forEach((p) => {
                                            allX.push(p.x);
                                            allY.push(p.y);
                                        });
                                    });
                                    //裁剪区域
                                    const minX = Math.min(...allX);
                                    const maxX = Math.max(...allX);
                                    const minY = Math.min(...allY);
                                    const maxY = Math.max(...allY);
                                    const padding = 15;
                                    const x = minX - padding;
                                    const y = minY - padding;
                                    const width = maxX + padding - x;
                                    const height = maxY + padding - y;
                                    const imageData = signatureInstance._ctx.getImageData(x, y, width, height);
                                    const smallCanvas = document.createElement('canvas');
                                    smallCanvas.width = width;
                                    smallCanvas.height = height;
                                    smallCanvas.style.position = 'fixed';
                                    smallCanvas.style.top = '0px';
                                    smallCanvas.style.left = '0px';
                                    smallCanvas.style.visibility = 'hidden';
                                    document.body.appendChild(smallCanvas);
                                    const ctx = smallCanvas.getContext('2d');
                                    ctx.putImageData(imageData, 0, 0);
                                    const base64String = smallCanvas.toDataURL();
                                    const image = new Image();
                                    return new Promise((resolve, reject) => {
                                        image.onload = function() {
                                            ctx.clearRect(0, 0, smallCanvas.width, smallCanvas.width);
                                            smallCanvas.width /= 1.5;
                                            smallCanvas.height /= 1.5;
                                            ctx.drawImage(image, 0, 0, smallCanvas.width, smallCanvas.height);

                                            const _png = smallCanvas.toDataURL();
                                            document.body.removeChild(smallCanvas);
                                            resolve(_png);
                                        };
                                        image.onerror = function() {
                                            message.error('处理签名失败，请重试。');
                                            reject();
                                        };
                                        image.src = base64String;
                                    }).then((base64String) => {
                                        return saveSignAsync({ userId, ...config, base64String }).then((res) => {
                                            return getSignAsync({ userId, ...config })
                                                .then((data) => {
                                                    onChange && onChange(data);
                                                })
                                                .catch(() => {
                                                    onChange &&
                                                        onChange({
                                                            personalSignature: base64String,
                                                        });
                                                });
                                        });
                                    });
                                },
                            });
                        });
                }}>
                {dataType.isObject(value) && value.personalSignature ? (
                    <img src={value.personalSignature}></img>
                ) : (
                    '+ 点击获取签名'
                )}
            </div>
            {useQrcodeToSign ? (
                <>
                    <Tooltip title="扫码签名" visible={state.tip}>
                        <div
                            className="z-form-control-signature-qr-create"
                            onMouseEnter={() => {
                                setState((prevSate) => {
                                    return { ...prevSate, tip: true };
                                });
                            }}
                            onMouseLeave={() => {
                                setState((prevSate) => {
                                    return { ...prevSate, tip: false };
                                });
                            }}
                            onClick={() => {
                                if (disabled) {
                                    return;
                                }
                                setState((prevSate) => {
                                    return { ...prevSate, loading: true };
                                });
                                const userId = getUserId({ config, currentForm, field });
                                if (!useWebsocket) {
                                    //不启用websocket直接打开二维码
                                    createQR({ field, config, userId }).then((dataURL) => {
                                        setState((prevSate) => {
                                            return {
                                                ...prevSate,
                                                modalVisible: true,
                                                dataURL,
                                                loading: false,
                                                tip: false,
                                            };
                                        });
                                    });
                                    return;
                                }
                                if (socketRef.current) {
                                    socketRef.current.close();
                                    socketRef.current = null;
                                }
                                //
                                const WebSocket = window.WebSocket;
                                //处理websocket连接地址
                                let websocketUrl = config.websocketUrl || '/doc-service/websocket';
                                if (!/^wss?:\/\/.+/.test(websocketUrl)) {
                                    websocketUrl = `${window.location.protocol === 'https:' ? 'wss' : 'ws'}://${
                                        window.location.host
                                    }${removeOblique(`/${basesocket}/${websocketUrl}`)}`;
                                }
                                const token = GenNonDuplicateID().toString();
                                //将websocketUrl 拼接上token
                                websocketUrl = `${websocketUrl.replace(/\/+$/g, '')}${removeOblique(`/${token}`)}`;
                                //连接
                                socketRef.current = new WebSocket(websocketUrl);
                                socketRef.current.addEventListener('open', (e) => {
                                    console.log(e, 'open');
                                    // if (state.dataURL) {
                                    //     setState((prevSate) => {
                                    //         return { ...prevSate, modalVisible: true, loading: false };
                                    //     });
                                    //     return;
                                    // }
                                    //连接成功打开二维码
                                    createQR({ field, config, token, userId }).then((dataURL) => {
                                        setState((prevSate) => {
                                            return {
                                                ...prevSate,
                                                modalVisible: true,
                                                dataURL,
                                                loading: false,
                                                tip: false,
                                            };
                                        });
                                    });
                                });
                                socketRef.current.addEventListener('message', (e) => {
                                    console.log(e, 'message');
                                    const base64String = e.data;
                                    if (typeof base64String === 'string' && /^data:image\//.test(base64String)) {
                                        //当收到base64的图片
                                        socketRef.current.close();
                                        return saveSignAsync({ userId, ...config, base64String })
                                            .then((res) => {
                                                return getSignAsync({ userId, ...config });
                                            })
                                            .then((data) => {
                                                onChange && onChange(data);
                                            })
                                            .catch(() => {
                                                onChange &&
                                                    onChange({
                                                        personalSignature: base64String,
                                                    });
                                            })
                                            .finally(() => {
                                                setState((prevSate) => {
                                                    return { ...prevSate, modalVisible: false };
                                                });
                                            });
                                    }
                                });
                                socketRef.current.addEventListener('error', (e) => {
                                    console.log(e, 'websocket 连接失败，请重试');
                                    message.error('websocket 连接失败，请重试');
                                    socketRef.current.close();
                                    socketRef.current = null;
                                    setState((prevSate) => {
                                        return { ...prevSate, loading: false };
                                    });
                                });
                                socketRef.current.addEventListener('close', (e) => {
                                    setState((prevSate) => {
                                        return { ...prevSate, modalVisible: false, loading: false };
                                    });
                                });
                            }}>
                            <Icon type={state.loading ? 'loading' : 'qrcode'} />
                        </div>
                    </Tooltip>
                    {!disabled ? (
                        <Modal
                            width="300px"
                            visible={state.modalVisible}
                            maskClosable={false}
                            title={
                                <>
                                    <div style={{ fontSize: '14px' }}>[{field.label}]的签名二维码</div>
                                    {useWebsocket ? (
                                        <div style={{ fontSize: '12px', color: '#aaaaaa', marginTop: '4px' }}>
                                            扫码签名后会自动关闭二维码
                                        </div>
                                    ) : null}
                                </>
                            }
                            footer={null}
                            onCancel={() => {
                                if (socketRef.current) {
                                    socketRef.current.close();
                                    socketRef.current = null;
                                }
                                setState((prevSate) => {
                                    return { ...prevSate, modalVisible: false };
                                });
                            }}>
                            {state.dataURL ? <img src={state.dataURL} /> : null}
                        </Modal>
                    ) : null}
                </>
            ) : null}
        </div>
    );
});

export default SignControl;
