import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './components/App';

// Make the Provider the top level element so that it can 
// provide the store to all child components
ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <App />
    </Provider>, 
    document.querySelector('#root')
);
