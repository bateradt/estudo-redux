import React from 'react';
import { Provider } from 'react-redux';
import Catalog from './component/Catalog';
import Cart from './component/Cart';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Catalog />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
