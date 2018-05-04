
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


import React, { Component } from 'react'
import { render } from 'react-dom'
// import Master from './components/Master'
// render(<Master />,document.getElementById('root'));

import Sidebar from './layouts/Sidebar'
render(<Sidebar/>,document.getElementById('root'));