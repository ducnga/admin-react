import React, { Component } from 'react';
import { Route, Switch, Link, Redirect, IndexRoute } from 'react-router-dom';
import Dashboard from './../../container/Admin/Dashboard/DashboardContainer';
// import ListUser from './../Page/Admin/User/ListUser';
// import User from './../Page/Admin/User/User';
import LoginContainer from './../../container/Admin/Login/LoginContainer';

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


// const routes = [

// // đường dẫn admin
// 	{
// 		path: '/xjk-system',
// 		exact: true,
// 		main: () => <HomePage />
// 	},
// 	{
// 		path: '/login-system',
// 		exact: true,
// 		main: () => <Login />
// 	},
// 	{
// 		path: '/xjk-system/list-user',
// 		exact: true,
// 		main: () => <ListUser />
// 	},
// 	{
// 		path: '/xjk-system/add-user',
// 		exact: true,
// 		main: () => <User />
// 	},
// 	{
// 		path: '/xjk-system/edit-user/:id',
// 		exact: true,
// 		main: () => <User />
// 	},

// // đường dẫn người dùng

// 	{
// 		path: '/',
// 		exact: true,
// 		main: () => <HomePage />
// 	},
// ];

// export default routes;