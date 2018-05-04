
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
require('material-ui');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });
// require('./components/Index');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Master from './components/Master';
// redux
import { createStore } from 'redux';
import store from './configStore';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <Router>
            {/* <MuiThemeProvider> */}
                <Master />
            {/* </MuiThemeProvider> */}
        </Router>
    </Provider>,
    document.getElementById('root')
);
