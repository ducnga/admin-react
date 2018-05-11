
import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { get_token } from './../../actions/Login';

import Loadable from 'react-loadable';
import { LinearProgress } from 'material-ui/Progress';
const Loading = () => <div><LinearProgress /></div>;
const DashboardContainer = Loadable({
	loader: () =>
		System.import('./../../container/Admin/Dashboard/DashboardContainer'),
	loading: Loading,
});
const CompanyContainer = Loadable({
	loader: () =>
		System.import('./../../container/Admin/Company/CompanyContainer'),
	loading: Loading,
});
class RouteAdmin extends Component {
	render() {
		const { isLogin } = this.props;
		return (
			<Switch>
				<Route exact path={`${this.props.match.path}`} component={DashboardContainer} />
				<Route path={`${this.props.match.path}/company`} component={CompanyContainer} />
			</Switch>
		);
	}
}
// function mapStateToProps(state) {
// 	return {
// 		isLogin: state.Login.isLogin
// 	};
// }
// function mapDispatchToProps(dispatch) {
// 	return {
// 		checkToken: () => dispatch(get_token())
// 	};
// }
export default connect(null, null)(RouteAdmin)