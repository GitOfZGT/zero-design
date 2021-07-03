import React from 'react';
import Zlayout from '../Zlayout';
import ErrorBoundary from '../../lazyLoad/ErrorBoundary';
export class ModalContent extends React.PureComponent {
    render() {
        return (
            <ErrorBoundary>
                <Zlayout>
                    <Zlayout.Zbody
                        getWrapperEl={this.props.getWrapperEl}
                        scroll={this.props.scroll}
                        getScrollInstance={this.props.getScrollInstance}>
                        {this.props.children}
                    </Zlayout.Zbody>
                </Zlayout>
            </ErrorBoundary>
        );
    }
}
export default ModalContent;
