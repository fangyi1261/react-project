import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store/index';
import RouterConfig from './router/index';
import ErrorBoundary from '@/components/ErrorBoundary.js';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RouterConfig />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;