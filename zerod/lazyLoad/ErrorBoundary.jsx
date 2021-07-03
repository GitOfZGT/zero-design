import React from 'react';
import { Result, Button } from 'antd';
import ZerodRootContext from '../components/ZerodRootContext';
function logErrorToMyService(error, errorInfo) {
    console.error(error, errorInfo);
}
const pattern = /Loading chunk \d+ failed/g;
export class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorText: error.stack || error.toString(), error };
    }
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorText: '' };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (typeof this.props.errorBoundaryFallback === 'function') {
                return this.props.errorBoundaryFallback(this.state);
            }
            if (this.state.errorText.match(pattern)) {
                return (
                    <Result status="error" title="加载出错了" subTitle="请清除浏览器缓存，刷新页面重试！">
                        <div style={{ textAlign: 'center' }}>
                            <Button
                                type="primary"
                                onClick={() => {
                                    window.location.reload();
                                }}>
                                尝试直接刷新
                            </Button>
                        </div>
                    </Result>
                );
            }
            // You can render any custom fallback UI
            return (
                <Result
                    status="error"
                    title="程序出错了"
                    subTitle="错误信息已输出到控制台，请联系开发者排查，或者尝试刷新页面重试！">
                    <div>
                        <Button
                            style={{ marginBottom: '20px' }}
                            type="primary"
                            onClick={() => {
                                window.location.reload();
                            }}>
                            尝试直接刷新
                        </Button>
                        {this.state.errorText}
                    </div>
                </Result>
            );
        }

        return this.props.children;
    }
}
export default ZerodRootContext.setConsumer(ErrorBoundary);
