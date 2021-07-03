import React from 'react';
import ZpureComponent from '../ZpureComponent';
class ZheaderBtn extends ZpureComponent {
    render() {
        const { className, children, ...others } = this.props;
        return (
            <div {...others} className={`z-header-btn ${className || ''}`}>
                {children}
            </div>
        );
    }
}
export default ZheaderBtn;
