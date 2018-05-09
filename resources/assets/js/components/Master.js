import React, { Component } from 'react';
import { Route, Switch, Link, Redirect, IndexRoute } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routes from './Routes/Routes';

class Master extends Component {
    render() {
        return <Routes />

    }
}
function mapStateToProps(state) {
    return {
        Login: state.Login
    };
}
export default (Master);