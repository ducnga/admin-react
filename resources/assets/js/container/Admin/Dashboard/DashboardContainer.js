import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from './../../../Pages/Admin/Dashboard/Dashboard';

function mapStateToProps(state) {
    return {
        Login: state.Login
    };
}
function mapDispatchToProps(dispatch) {
    return {
        
    };
}

export default connect(null, null)(Dashboard);