import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render
   (<BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>, document.getElementById('root'));

reportWebVitals();
