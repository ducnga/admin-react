import React, { Component } from 'react';
import { connect } from 'react-redux';

import Company from './../../../Pages/Admin/Company/Company';

function mapStateToProps(state) {
    return {
        Login: state.Login
    };
}
function mapDispatchToProps(dispatch) {
    return {
        
    };
}

export default connect(null, null)(Company);