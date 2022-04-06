import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = () => {
   ReactDOM.render
      (<BrowserRouter>
         <App dispatch={store.dispatch.bind(store)} state={store.getState()} />
      </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState);
store.subscribe(rerenderEntireTree)