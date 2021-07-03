import React from 'react';
import './style.scss';

const Loading = () => {
    return (
        <div className="load-3">
            <div className="k-line2 k-line12-1"></div>
            <div className="k-line2 k-line12-2"></div>
            <div className="k-line2 k-line12-3"></div>
            <div className="k-line2 k-line12-4"></div>
            <div className="k-line2 k-line12-5"></div>
            <div className="k-line2 k-line12-6"></div>
            <div className="k-line2 k-line12-7"></div>
            <div className="k-line2 k-line12-8"></div>
        </div>
    );
};

export function getLoadingHtml() {
    return `<div class="load-3">
    <div class="k-line2 k-line12-1"></div>
    <div class="k-line2 k-line12-2"></div>
    <div class="k-line2 k-line12-3"></div>
    <div class="k-line2 k-line12-4"></div>
    <div class="k-line2 k-line12-5"></div>
    <div class="k-line2 k-line12-6"></div>
    <div class="k-line2 k-line12-7"></div>
    <div class="k-line2 k-line12-8"></div>
</div>`;
}
export default Loading;
