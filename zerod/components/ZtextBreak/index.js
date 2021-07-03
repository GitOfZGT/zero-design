import React, { useEffect, useState } from 'react';

const ZtextBreak = ({ text }) => {
    const [textArr, setTextArr] = useState([]);
    useEffect(() => {
        if (typeof text === 'string' && /[\n\r]/.test(text)) {
            setTextArr(text.split(/[\n\r]/g));
        }
    }, [text]);
    return textArr.length > 1 ? (
        <div>
            {textArr.map((item) => {
                return <div key={item}>{item}</div>;
            })}
        </div>
    ) : (
        text
    );
};
export default React.memo(ZtextBreak);
