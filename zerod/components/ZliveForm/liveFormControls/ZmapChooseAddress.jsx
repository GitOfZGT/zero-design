import React, { useEffect, useState } from 'react';
import { getControl } from '../../Zform/controls';
import { dataType } from '../../zTool';
import ZerodMainContext from '../../ZerodMainContext';
import ZerodLayerContext from '../../ZerodLayerContext';
import httpAjax from '../../zTool/httpAjax';
import { message } from 'antd';

const LoadMapIframe = React.forwardRef((props, ref) => {
    const { mapType, value, onChange, secretKey } = props;
    useEffect(() => {
        let messageCallback = null;
        if (mapType === 'amap') {
            //高德地图
            const iframe = document.getElementById('addressIframe').contentWindow;
            document.getElementById('addressIframe').onload = function() {
                iframe.postMessage('hello', 'https://m.amap.com/picker/');
            };
            messageCallback = function(event) {
                const loc = event.data;
                const latlng = loc.location.split(',');
                onChange &&
                    onChange({
                        name: loc.name,
                        address: loc.address,
                        longitude: latlng[0],
                        latitude: latlng[1],
                    });
            };
        } else if (mapType === 'qqmap') {
            //腾讯地图
            messageCallback = function(event) {
                // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
                const loc = event.data;
                if (loc && loc.module == 'locationPicker') {
                    //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                    onChange &&
                        onChange({
                            name: loc.poiname,
                            address: loc.poiaddress,
                            longitude: loc.latlng.lng,
                            latitude: loc.latlng.lat,
                        });
                }
            };
        }
        if (messageCallback) {
            window.addEventListener('message', messageCallback, false);

            return () => {
                window.removeEventListener('message', messageCallback, false);
            };
        }
    }, []);
    let url = '';
    let center = '';
    if (dataType.isObject(value)) {
        center = `${value.longitude},${value.latitude}`;
    }
    if (mapType === 'amap') {
        url = `https://m.amap.com/picker/?center=${center}&key=${secretKey ||
            '8c0945ac5a3ca41937724434563346c2'}&total=20&keywords=街道`;
    } else if (mapType === 'qqmap') {
        url = `https://apis.map.qq.com/tools/locpicker?coord=${center}&search=1&type=1&key=${secretKey ||
            '63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK'}&referer=wx_map&total=20`;
    }
    return <iframe frameBorder="0" width="100%" height="100%" id="addressIframe" src={url} />;
});

function getWebService(
    webserviceUrlDO = { urlMethod: 'post', url: '/form-service/webapi/geography/webService' },
    query,
) {
    return httpAjax(webserviceUrlDO.urlMethod, webserviceUrlDO.url, query, webserviceUrlDO.requestConfig);
}

//获取坐标位置详细信息
const geocoder = {
    amap: (location, webserviceUrlDO, secretKey) => {
        //process.env.amap 内网环境的映射路径
        const amaporigin = process && process.env && process.env.amap ? process.env.amap : 'https://restapi.amap.com';
        return getWebService(webserviceUrlDO, {
            serviceApi: `${amaporigin}/v3/geocode/regeo`,
            query: {
                key: secretKey || '8c0945ac5a3ca41937724434563346c2',
                //高德的是"经度,纬度"
                location: `${location.longitude},${location.latitude}`,
            },
        });
    },
    qqmap: (location, webserviceUrlDO, secretKey) => {
        const qqmaporigin = process && process.env && process.env.qqmap ? process.env.qqmap : 'https://apis.map.qq.com';
        return getWebService(webserviceUrlDO, {
            serviceApi: `${qqmaporigin}/ws/geocoder/v1`,
            query: {
                key: secretKey || '63QBZ-B5GKV-46RPH-UCUF2-K5TUJ-OKBAK',
                //腾讯的是"纬度,经度"
                location: `${location.latitude},${location.longitude}`,
            },
        });
    },
};

export const MapChooseAddress = React.memo(
    React.forwardRef((props, ref) => {
        const {
            value,
            onChange,
            placeholder,
            showRightModal,
            showModalLoading,
            showLayerRightModal,
            showLayerModalLoading,
            mapType,
            secretKey,
            disabled,
            webserviceUrlDO,
        } = props;
        const thisType = mapType || 'qqmap';
        const [inputValue, setInputValue] = useState();
        useEffect(() => {
            setInputValue(dataType.isObject(value) ? value.name : '');
        }, [value]);
        const triggerModal = showLayerRightModal || showRightModal;
        const triggerModalLodaing = showLayerModalLoading || showModalLoading;
        // useEffect(() => {}, []);
        const openMap = () => {
            triggerModal({
                show: true,
                modal: 'addressModal',
                scroll: false,
                width: '500px',
                content: (
                    <LoadMapIframe
                        mapType={thisType}
                        secretKey={secretKey}
                        value={value}
                        onChange={(val) => {
                            triggerModalLodaing(true, 'addressModal');
                            geocoder[thisType](val, webserviceUrlDO, secretKey)
                                .then((res) => {
                                    let area = {};
                                    if (thisType === 'amap') {
                                        const ac = res.data.regeocode.addressComponent;
                                        area = {
                                            adcode: ac.adcode,
                                            citycode: ac.citycode,
                                            country: ac.country,
                                            towncode: ac.towncode,
                                            province: ac.province === ac.city ? '' : ac.province,
                                            city: ac.city,
                                            district: ac.district,
                                            street: ac.streetNumber ? ac.streetNumber.street : '',
                                            streetcode: '', //街道code
                                            pointWkt: `POINT(${val.longitude} ${val.latitude})`,
                                            pointWkt2000: '',
                                        };
                                    } else if (thisType === 'qqmap') {
                                        const ac = res.data.result.ad_info;
                                        const address_reference = (res.data.result || {}).address_reference || {};
                                        area = {
                                            adcode: ac.adcode, //区划编码
                                            citycode: ac.city_code, //市编码
                                            country: ac.nation, //国
                                            province: ac.province === ac.city ? '' : ac.province, //省
                                            city: ac.city, //城市
                                            district: ac.district, //区
                                            street: (address_reference.town || {}).title, //街道
                                            streetcode: (address_reference.town || {}).id, //街道code
                                            pointWkt: `POINT(${val.longitude} ${val.latitude})`,
                                            pointWkt2000: '',
                                        };
                                    }
                                    onChange && onChange({ ...val, ...area });
                                })
                                .catch((re) => {
                                    message.error(re && re.msg ? re.msg : '获取区划信息失败，请重试');
                                })
                                .finally(() => {
                                    triggerModalLodaing(false, 'addressModal');
                                    triggerModal({
                                        show: false,
                                        modal: 'addressModal',
                                    });
                                });
                        }}
                    />
                ),
            });
        };

        return getControl('Input.Group', {
            compact: true,
            style: dataType.isObject(value) ? { padding: '6px 0' } : null,
            children: (
                <>
                    {getControl('Input', {
                        value: inputValue,
                        disabled,
                        addonAfter: (
                            <i
                                className="zero-icon zerod-address z-address-btn"
                                onClick={!disabled ? openMap : undefined}
                            />
                        ),
                        placeholder,
                        onChange(e) {
                            if (dataType.isObject(value)) {
                                value.name = e;
                                setInputValue(value.name);
                            }
                        },
                        onBlur(e) {
                            if (dataType.isObject(value)) {
                                value.name = e.target.value;
                                onChange && onChange({ ...value });
                            }
                        },
                        onFocus() {
                            if (!dataType.isObject(value) && !disabled) {
                                openMap();
                            }
                        },
                    })}
                    {dataType.isObject(value) ? (
                        <div className="z-mapChooseAddress-address">{value.address}</div>
                    ) : null}
                </>
            ),
        });
    }),
);

export default ZerodMainContext.setConsumer(ZerodLayerContext.setConsumer(MapChooseAddress));
