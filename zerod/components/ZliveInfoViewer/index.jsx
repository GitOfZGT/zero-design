import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ZpanelTitle from '../ZpanelTitle';
import Zinfo from '../Zinfo';
import { matchLinkages, linkGroupShow, linkFieldShow } from '../ZliveForm/linkageAction';
import { pareLinkages } from '../ZliveForm/common';
import './style.scss';
import Zviewer from '../Zviewer';
import { getPrivateImgs, valueAccuracy } from './common';
import ZfullLayer from '../ZfullLayer';
import { parseJsonToObject } from '../zTool';
const propTypes = {
    showGroupName: PropTypes.bool,
    canOpenAddressLocation: PropTypes.bool,
    formData: PropTypes.object.isRequired,
    formValues: PropTypes.object,
    customControlRender: PropTypes.object,
    getMultiRowFormData: PropTypes.func,
    children: PropTypes.func,
    getExtendComponents: PropTypes.func,
};
const defaultProps = {
    showGroupName: true,
    canOpenAddressLocation: true,
    formValues: {},
};

function isSrcFieldEffectiveFun(groups, srcFieldKey) {
    return true;
    // let effective = false;
    // for (let index = 0; index < groups.length; index++) {
    //     const g = groups[index];
    //     if (g.show) {
    //         const formItems = g.formItems || [];
    //         const srcItem = formItems.find((item) => item.key === srcFieldKey);
    //         if (srcItem) {
    //             effective = true;
    //             break;
    //         }
    //     }
    // }
    // return effective;
}
function findFieldSeqFun(groups, srcFieldKey) {
    let seq = -1;
    for (let index = 0; index < groups.length; index++) {
        const g = groups[index];
        if (g.show) {
            const formItems = g.formFieldInfoList || [];
            const srcItem = formItems.find((item) => item.fieldKey === srcFieldKey);
            if (srcItem) {
                seq = Number(srcItem.seq);
                break;
            }
        }
    }
    return seq;
}
const InfoViewer = (props) => {
    const {
        formData,
        formValues,
        showGroupName,
        canOpenAddressLocation,
        customControlRender,
        children,
        getMultiRowFormData,
        getExtendComponents,
    } = props;

    const _customControlRender = customControlRender || {};
    const [state, setState] = useState({ groups: [], fieldValue: {} });
    const [imgUrls, setImgUrls] = useState([]);
    const [iframeUrl, setIframeUrl] = useState('');
    const trigglePreviewRef = useRef(-1);
    const viewerRef = useRef();
    const ZfullLayerRef = useRef();
    const onImagePreview = useCallback(({ index, images, config }) => {
        getPrivateImgs({ files: images, config }).then((newImgs) => {
            trigglePreviewRef.current = index;
            setImgUrls(newImgs.map((item) => item.filePath));
        });
    }, []);
    const onOpenLocation = useCallback(({ value, config }) => {
        let latitude = value.latitude;
        let longitude = value.longitude;
        if ((!latitude || !longitude) && value.pointWkt) {
            const lats = value.pointWkt.replace(/(POINT\(|\))/g, '').split(' ');
            longitude = Number(lats[0]);
            latitude = Number(lats[1]);
        }
        const url = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${latitude},${longitude};title:${value.name};addr:${value.address}&key=${config.secretKey}&referer=myapp`;
        setIframeUrl(url);
        ZfullLayerRef.current.methods.showLayer(true, null, true)();
    }, []);
    useEffect(() => {
        const extendComs = (typeof getExtendComponents === 'function' ? getExtendComponents() : null) || [];

        const renderMap = extendComs.reduce(
            (tol, curr) => ({ ...tol, [curr.value]: (curr.ZliveInfoViewerControlRender || {}).render }),
            {},
        );

        const fd = formData || {};
        const sectionList = Array.isArray(fd.sectionList) ? fd.sectionList : [];
        sectionList.forEach((g) => {
            g.formFieldInfoList.forEach((field) => {
                if ([24].includes(field.fieldType)) {
                    const config = parseJsonToObject(field.config);

                    formValues[field.fieldKey] = formValues[config.catchKey];
                }
            });
        });
        const linkages = pareLinkages(fd.linkages);
        const { groupHiddenKeys, groupShowKeys, hiddenKeys, showKeys } = matchLinkages({
            ages: linkages,
            values: formValues,
        });
        const newGroups = [];
        const values = {};
        sectionList.forEach((g) => {
            const labelShowTag = showGroupName ? (typeof g.labelShowTag === 'number' ? g.labelShowTag : 1) : 0;
            const groupShowed = linkGroupShow({
                group: g,
                groupHiddenKeys,
                groupShowKeys,
                groups: sectionList,
                isSrcFieldEffectiveFun,
                findFieldSeqFun,
            });
            if (groupShowed) {
                const groupConfig = parseJsonToObject(g.config);
                const formItems = [];
                if (Array.isArray(g.formFieldInfoList)) {
                    g.formFieldInfoList.forEach((field) => {
                        const config = parseJsonToObject(field.config);
                        const tagName =
                            Array.isArray(field.tagName) && field.tagName.length
                                ? field.tagName
                                : Array.isArray(config.tagName)
                                ? config.tagName
                                : [];

                        let fieldShowed = true;
                        if (tagName.some((item) => ['5'].includes(item.value))) {
                            //"5"强制隐藏
                            fieldShowed = false;
                        } else {
                            //"4"优先展示
                            fieldShowed =
                                tagName.some((item) => ['4'].includes(item.value)) ||
                                linkFieldShow({
                                    field,
                                    hiddenKeys,
                                    showKeys,
                                    groups: sectionList,
                                    isSrcFieldEffectiveFun,
                                    findFieldSeqFun,
                                });
                        }

                        if (fieldShowed) {
                            const labelShowTag = typeof field.labelShowTag === 'number' ? field.labelShowTag : 1;

                            const { value, render } = valueAccuracy({
                                field,
                                formValues,
                                config,
                                onImagePreview,
                                onOpenLocation: canOpenAddressLocation ? onOpenLocation : null,
                                getMultiRowFormData,
                                customControlRender: _customControlRender,
                                getExtendComponents,
                            });
                            values[field.fieldKey] = value;
                            if (
                                typeof values[field.fieldKey] === 'string' &&
                                /(\\n|\\n\\r)/.test(values[field.fieldKey])
                            ) {
                                values[field.fieldKey] = values[field.fieldKey].replace(/(\\n|\\n\\r)/g, '<br/>');
                            }
                            const newItem = {
                                ...field,
                                show: fieldShowed,
                                key: field.fieldKey,
                                label: labelShowTag === 3 ? false : labelShowTag !== 0 ? field.label : '',
                                width: config.labelWidth || groupConfig.labelWidth,
                                span: field.span || 8,
                                groupId: g.id || g.name,
                            };
                            if (typeof render === 'function') {
                                newItem.render = render;
                            }
                            if (typeof _customControlRender[field.fieldKey] === 'function') {
                                newItem.render = (val, rerod) =>
                                    _customControlRender[field.fieldKey](field, formValues);
                            } else if (typeof renderMap[field.fieldType] === 'function') {
                                newItem.render = (value) => renderMap[field.fieldType]({ value, field, formValues });
                            }
                            formItems.push(newItem);
                        }
                    });
                }

                newGroups.push({
                    name: g.name,
                    show: groupShowed,
                    formItems,
                    labelShowTag,
                });
            }
        });
        setState({ groups: newGroups, fieldValue: values });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, formValues]);
    const { groups, fieldValue } = state;
    return (
        <>
            {typeof children === 'function'
                ? children({ groups, fieldValue })
                : groups.map((g) => (
                      <div key={g.name} className="z-infoViewer-group">
                          {g.labelShowTag ? <ZpanelTitle className="z-margin-bottom-10">{g.name}</ZpanelTitle> : null}
                          <Zinfo items={g.formItems} fieldValue={fieldValue} colCount={2} layoutType="freeCol"></Zinfo>
                      </div>
                  ))}
            {imgUrls.length
                ? ReactDOM.createPortal(
                      <div
                          style={{
                              position: 'fixed',
                              visibility: 'hidden',
                              top: 0,
                              left: 0,
                              width: '100%',
                              transform: 'translate(-100%,0)',
                          }}>
                          <Zviewer
                              urls={imgUrls}
                              ref={viewerRef}
                              viewerUpdated={() => {
                                  if (trigglePreviewRef.current > -1) {
                                      viewerRef.current &&
                                          viewerRef.current.viewer &&
                                          viewerRef.current.viewer.show(true);
                                      viewerRef.current &&
                                          viewerRef.current.viewer &&
                                          viewerRef.current.viewer.view(trigglePreviewRef.current);
                                  }
                              }}
                              onViewerHide={() => {
                                  // console.log("hide");
                                  trigglePreviewRef.current = -1;
                              }}
                          />
                      </div>,
                      document.body,
                  )
                : null}
            <ZfullLayer ref={ZfullLayerRef} scroll={false}>
                <div className="z-infoViewer-location-modal">
                    {iframeUrl ? <iframe frameBorder="0" width="100%" height="100%" src={iframeUrl} /> : null}
                </div>
            </ZfullLayer>
        </>
    );
};
InfoViewer.propTypes = propTypes;
InfoViewer.defaultProps = defaultProps;
const ZliveInfoViewer = React.memo(InfoViewer);
export default ZliveInfoViewer;
