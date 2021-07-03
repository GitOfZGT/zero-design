import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import Loading from './Loading';
import ErrorBoundary from './ErrorBoundary';
//
export const lazyLoad = (component) => {
    // const Loader = React.lazy(component);
    const Loader = loadable(component, {
        fallback: <Loading />,
    });
    const Com = (props) => {
        return (
            <ErrorBoundary>
                <Loader {...props} />
            </ErrorBoundary>
        );
        // return (
        //     <ErrorBoundary>
        //         <Suspense fallback={<Loading />}>
        //             <Loader {...others} />
        //         </Suspense>
        //     </ErrorBoundary>
        // );
    };
    return Com;
};
export default lazyLoad;
