
import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_token } from './../../actions/Login';

import Loadable from 'react-loadable';
import { LinearProgress } from 'material-ui/Progress';
const Loading = () => <div><LinearProgress /></div>;
const Dashboard = Loadable({
	loader: () =>
		System.import('./../../container/Admin/Dashboard/DashboardContainer'),
	loading: Loading,
});
const MasterContainer = Loadable({
	loader: () =>
		System.import('./../../container/Admin/MasterContainer'),
	loading: Loading,
});
const LoginContainer = Loadable({
	loader: () =>
		System.import('./../../container/Admin/Login/LoginContainer'),
	loading: Loading,
});
class Routes extends Component {
	async componentWillMount() {
		await this.props.checkToken();
	}
	render() {
		const { isLogin, isCheck } = this.props;
		if (!isCheck) {
			return <div><LinearProgress /></div>;
		}
		return (
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route
					exact
					path="/login-system"
					component={LoginContainer}
				/>
				<Route
					path="/xjk-system"
					render={(match) =>
						(!isLogin) ?
							(<Redirect to="/login-system" />)
							:
							(<MasterContainer {...match} />)
					}
				/>

			</Switch>
		);
	}
}
function mapStateToProps(state) {
	return {
		isLogin: state.Login.isLogin,
		isCheck: state.Login.isCheck
	};
}
function mapDispatchToProps(dispatch) {
	return {
		checkToken: () => dispatch(get_token())
	};
}
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Routes)