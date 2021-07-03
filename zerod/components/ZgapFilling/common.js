export function analysisTextTemplate(textTemplate) {
    const { blocks, controls } = analysisTextTemplateForBLOCK(textTemplate);
    return blocks;
}
export function analysisTextTemplateForBLOCK(textTemplate) {
    let texts = textTemplate;
    const placeRules = textTemplate.match(/<(div)[^>]*?>(?:<(div)[^>]*?>[\s\S]*?<\/\2>|[\s\S])*?<\/\1>/g);
    const blocks = [];
    let controls = [];
    if (placeRules) {
        const divBlocks = [];
        placeRules.forEach((reString) => {
            texts = texts.replace(reString, '#REPLACE#');
            const attributeString = reString
                .replace(/(^[\r\n]+|[\r\n]+$)/g, '')
                .match(/^<(div)[^>]*?>/)[0]
                .match(/\w+=(['"])[^=]+\1/g);
            const attributes = {};
            if (attributeString) {
                attributeString.forEach((str) => {
                    const strSplit = str.split('=');
                    let val = strSplit[1].replace(/(^['"]|['"]$)/g, '');
                    if (strSplit[0] === 'style') {
                        if (val) {
                            val = val.replace(/-(\w)/g, function(_, c) {
                                return c ? c.toUpperCase() : '';
                            });
                            const css = val.split(';').filter((item) => item);
                            val = css.reduce((tol, curr) => {
                                const attrs = curr.split(':');
                                return { ...tol, [attrs[0].replace(/\s/g, '')]: attrs[1] };
                            }, {});
                        } else {
                            val = null;
                        }
                    }
                    attributes[strSplit[0]] = val;
                });
            }
            const childrenString = reString.replace(/(^<(div)[^>]*?>|<\/div>$)/g, '');
            const childContent = analysisTextTemplateForBLOCK(childrenString);
            controls = controls.concat(childContent.controls);
            divBlocks.push({
                currentTemplate: reString,
                attributes,
                children: childContent.blocks,
            });
        });
        texts.split('#REPLACE#').forEach((text) => {
            if (text) {
                const contorlContent = analysisTextTemplateForCONTROL(text);
                controls = controls.concat(contorlContent.controls);
                blocks.push({
                    currentTemplate: text,
                    attributes: { style: { display: 'inline' } },
                    children: [],
                    ...contorlContent,
                });
            }
            if (divBlocks.length) {
                blocks.push(divBlocks.shift());
            }
        });
    } else {
        const contorlContent = analysisTextTemplateForCONTROL(textTemplate);
        controls = controls.concat(contorlContent.controls);
        blocks.push({
            currentTemplate: textTemplate,
            attributes: { style: { display: 'inline' } },
            children: [],
            ...contorlContent,
        });
    }

    return { blocks, controls };
}

export function analysisTextTemplateForCONTROL(textTemplate) {
    let texts = textTemplate;
    const placeRules = textTemplate.match(/\{\s*[\[\<\(][^\{\}]+[\]\>\)]\s*\}/g);
    let controls = [];
    if (placeRules) {
        controls = placeRules.map((rule) => {
            texts = texts.replace(rule, '#REPLACE#');
            const controlAttr = {};
            const square = rule.match(/\[[^\[\]]+\]/g);
            if (square) {
                const attrs = square[0].replace(/(^\[|\]$)/g, '').split('|');
                controlAttr.type = attrs[0];
                controlAttr.width =
                    controlAttr.type === 'textArea'
                        ? '100%'
                        : attrs[1] && /\d+%/.test(attrs[1])
                        ? attrs[1]
                        : `${attrs[1] || 100}px`;
                controlAttr.placeholder = attrs[2] || '';
            }
            const needle = rule.match(/\<[^\<\>]+\>/g);
            if (needle) {
                const needleContent = needle[0].replace(/(^\<|\>$)/g, '');
                controlAttr.key = needleContent;
                if (/:/.test(needleContent)) {
                    const needlespit = needleContent.split(':');
                    controlAttr.key = needlespit[0];
                    controlAttr.defaultValue =
                        controlAttr.type === 'checkBox' ? needlespit[1].split(',') : needlespit[1];
                }
            }
            const circle = rule.match(/\([^\(\)]+\)/g);
            if (circle) {
                const attrs = circle[0].replace(/(^\(|\)$)/g, '').split('|');
                controlAttr.selectList = attrs.map((item) => {
                    let label = item;
                    let value = item;
                    if (/:/.test(item)) {
                        const lv = item.split(':');
                        label = lv[0];
                        value = lv[1];
                    }
                    return { label, value };
                });
            }
            return controlAttr;
        });
    }
    const conctrolSegments = texts.split('#REPLACE#').map((text) => {
        return { currentTemplate: text, textSegments: text.split('\n') };
    });
    return { controls, conctrolSegments };
}

export function findControlFromBlocks({ blocks, key }) {
    let fined = null;
    for (let index = 0; index < blocks.length; index++) {
        const item = blocks[index];
        if (item.children.length) {
            fined = findControlFromBlocks({ blocks: item.children, key });
        } else {
            fined = item.controls.find((c) => c.key === key);
        }
        if (fined) {
            break;
        }
    }
    return fined;
}
export const fomatName = {
    year: 'YYYY年',
    month: 'YYYY年MM月',
    date: 'YYYY年MM月DD日',
    datehour: 'YYYY年MM月DD日HH时',
    datetime: 'YYYY年MM月DD日HH时mm分',
};
export function formatDatestringSyml(datestring) {
    const dateArr = datestring
        .replace(/[\u2E80-\u9FFF]/g, '-')
        .replace(/(^-|-$)/g, '')
        .split('-');
    if (dateArr.length > 3) {
        return `${dateArr.slice(0, 3).join('-')} ${dateArr
            .slice(3)
            .join(':')
            .replace(/:$/g, '')}`;
    }
    return dateArr.slice(0).join('-');
}
import moment from 'moment';
export function addValueLabel({ controlAttr, value }) {
    const valueLael = {};
    if (['radio', 'select'].includes(controlAttr.type)) {
        const currItem = controlAttr.selectList.find((item) => item.value === value);
        if (currItem) {
            valueLael[`${controlAttr.key}Label`] = currItem.label;
        }
    } else if (controlAttr.type === 'checkBox') {
        if (Array.isArray(value)) {
            valueLael[`${controlAttr.key}Label`] = value.map((v) => {
                const currItem = controlAttr.selectList.find((item) => item.value === v);
                return currItem ? currItem.label : '';
            });
        }
    } else if (['year', 'month', 'date', 'datehour', 'datetime'].includes(controlAttr.type) && value === 'now') {
        valueLael[controlAttr.key] = moment().format(fomatName[controlAttr.type]);
    }
    return valueLael;
}

export function getControlDefaultValue({ blocks }) {
    let defaultValue = {};
    for (let index = 0; index < blocks.length; index++) {
        const item = blocks[index];
        if (item.children.length) {
            defaultValue = { ...defaultValue, ...getControlDefaultValue({ blocks: item.children }) };
        } else {
            item.controls.forEach((c) => {
                if (c.defaultValue) {
                    defaultValue[c.key] = c.defaultValue;
                    const valueLael = addValueLabel({ controlAttr: c, value: c.defaultValue });
                    defaultValue = { ...defaultValue, ...valueLael };
                }
            });
        }
    }
    return defaultValue;
}
