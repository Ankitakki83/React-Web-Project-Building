import React, { StrictMode,Suspense } from 'react';
import { 
  ErrorBoundary, 
  FallbackView,
} from 'react-error-boundaries';
import { Provider } from 'react-redux';

import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';


const AppKernel = (Component) => {
    return () => (
        <StrictMode>
            <ErrorBoundary FallbackComponent={FallbackView}>
                <Provider store={store}>
                <Router>
                <Suspense fallback={<div>Loading...</div>}>

                    <Component />
                    </Suspense>
                    </Router>
                </Provider>
            </ErrorBoundary>
        </StrictMode>
    );
};

export default AppKernel;