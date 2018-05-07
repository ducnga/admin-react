import React, { Component } from 'react';
import { Route, Switch, Link, Redirect, IndexRoute } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_token } from '../../actions/Login';
// import Loadable from 'loadable-components';
import asyncComponent from './AsyncComponent';

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
	componentDidMount() {
		this.props.checkToken();
	}
	render() {
		const { isLogin } = this.props;
		return (
			// <Switch>
			// 	<Route exact path="/" component={Dashboard} />
			// 	<Route exact path="/login-system" component={LoginContainer} />
			// 	<Route path="/xjk-system" component={Dashboard}/>
			// 	<Route exact path="/xjk-system" component={Dashboard} />
			// 	<Route exact path="/xjk-system/list-user" component={Dashboard} />
			// 	<Route exact path="/xjk-system/add-user" component={Dashboard} />
			// 	<Route exact path="/xjk-system/edit-user/:id" component={Dashboard} />

			// </Switch>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/login-system" component={LoginContainer} />
				<Route
					path="/xjk-system"
					render={
						() => (isLogin) ? (<Dashboard />) : (<Redirect to="/login-system" />)
					}
				/>
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

function mapDispatchToProps(dispatch) {
	return {
		checkToken: () => dispatch(get_token())
	};
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Routes)