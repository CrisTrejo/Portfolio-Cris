import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/Styles/Main.css';
import App from './App';
import '../src/index.css';

import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './Redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();