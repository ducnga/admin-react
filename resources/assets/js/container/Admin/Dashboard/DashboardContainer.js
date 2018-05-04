import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send_login } from './../../../actions/Login'

import Dashboard from './../../../Pages/Admin/Dashboard/Dashboard';

function mapStateToProps(state) {
    return {
        Login: state.Login
    };
}
function mapDispatchToProps(dispatch) {
    return {
        sendLogin: (Email, Password) => dispatch(send_login(Email, Password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);