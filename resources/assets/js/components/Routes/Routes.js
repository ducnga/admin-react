import React, { Component } from 'react';
import { Route, Switch, Link, Redirect, IndexRoute } from 'react-router-dom';
import { connect } from 'react-redux';
// import Loadable from 'loadable-components';
import asyncComponent from './AsyncComponent';
import Axios from 'axios';
// const Loading = () => <div>Loading...</div>;
// const Dashboard = Loadable (() => require('./../../container/Admin/Dashboard/DashboardContainer'));

// const LoginContainer =Loadable({
// 	loader: () => require('./../../container/Admin/Login/LoginContainer')
// 	.then(m => m.LoginContainer),
// 	loading: Loading,
// });
const Dashboard = asyncComponent(() =>
	require('./../../container/Admin/Dashboard/DashboardContainer'));

const LoginContainer = asyncComponent(() =>
	require('./../../container/Admin/Login/LoginContainer'));

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: props.isLogin
		}
	}
	render() {
		var jwt_token = localStorage.getItem('jwt_token');
		console.log(typeof jwt_token);
		return (
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/login-system" component={LoginContainer} />
				<Route path="/xjk-system" render={() =>
					
					(jwt_token) ?
						(	
							(Dashboard)
							// (<Redirect to="/14" />)
						)
						:
						(<Redirect to="/login-system" />)
						
				}
				/>
				<Route exact path="/xjk-system" component={Dashboard} />
				<Route exact path="/xjk-system/list-user" component={Dashboard} />
				<Route exact path="/xjk-system/add-user" component={Dashboard} />
				<Route exact path="/xjk-system/edit-user/:id" component={Dashboard} />

			</Switch>
		);
	}
}
function mapStateToProps(state) {
    return {
        isLogin: state.Login.isLogin
    };
}

export default connect(mapStateToProps, null,null,{pure:false})(Routes)