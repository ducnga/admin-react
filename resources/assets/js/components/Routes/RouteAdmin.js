
import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_token } from './../../actions/Login';

import Loadable from 'react-loadable';
import { LinearProgress } from 'material-ui/Progress';
const Loading = () => <div><LinearProgress /></div>;
const CompanyContainer = Loadable({
	loader: () =>
		System.import('./../../container/Admin/Company/CompanyContainer'),
	loading: Loading,
});
class RouteAdmin extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = ({
	// 		isLoadding: false
	// 	})
	// }
	render() {
		const { isLogin } = this.props;
		console.log('kiểm tra url',this.props);
		console.log('checkurrl',`${this.props.match.url}/company`);
		return (
			<Switch>
				<Route exact path={`${this.props.match.path}`} component={CompanyContainer} />
				<Route path={`${this.props.match.path}/company`} component={CompanyContainer} />
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
export default connect(null, null)(RouteAdmin)