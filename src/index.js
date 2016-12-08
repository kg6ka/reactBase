import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './containers/mainApp';
import './styles/app.css';

const appBox = document.getElementById('app');
const store = configureStore();

render(
    <Provider store={store}>
        <div className="app">
            <App />
        </div>
    </Provider>,
    appBox
);