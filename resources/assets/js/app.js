
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
require('material-ui');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Master from './components/Master';
// redux
import { createStore } from 'redux';
import store from './configStore';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <Router>
            <Master />
        </Router>
    </Provider>,
    document.getElementById('root')
);
