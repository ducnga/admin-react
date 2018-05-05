import React, { Component } from 'react';
import { Route, Switch, Link, Redirect, IndexRoute } from 'react-router-dom';
// import Loadable from 'loadable-components';
import asyncComponent from './AsyncComponent';
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

export default class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false
		}
	}
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/login-system" component={LoginContainer} />
				<Route path="/xjk-system" render={() =>
					(this.state.isLogin === false) ?
						(<Redirect to="/login-system" />)
						:
						(Dashboard)
				}
				/>
				<Route path="/list-user" component={Dashboard} />
				<Route path="/add-user" component={Dashboard} />
				<Route path="/edit-user/:id" component={Dashboard} />

			</Switch>
		);
	}
}