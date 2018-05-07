import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send_login } from './../../../actions/Login'

import Login from './../../../Pages/Admin/Login/Login';

function mapStateToProps(state) {
    return {
        isLogin: state.Login.isLogin,
        errorEmail: state.Login.errorEmail,
        errorPassword: state.Login.errorPassword,
        Msg: state.Login.Msg,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        sendLogin: (Email, Password) => dispatch(send_login(Email, Password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps,null,{ pure: false })(Login);