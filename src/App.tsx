import React from 'react';
import { Provider } from 'react-redux';
import './assets/styles/app.scss';
import Router from './routing';
import store from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
