import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store/index';
import RouterConfig from './router/index';

function App() {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  );
}

export default App;