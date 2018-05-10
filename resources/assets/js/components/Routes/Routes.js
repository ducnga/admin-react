import React, { Component, Children } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_token } from '../../actions/Login';
import { LinearProgress } from 'material-ui/Progress';
// import Loadable from 'loadable-components';
import asyncComponent from './AsyncComponent';

const Dashboard = asyncComponent(() =>
	require('./../../container/Admin/Dashboard/DashboardContainer'));

// const LoginContainer = asyncComponent(() =>
// 	require('./../../container/Admin/Login/LoginContainer'));

// const Company = asyncComponent(() =>
// 	require('./../../container/Admin/Company/CompanyContainer'));

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			isLoad: false
		})
	}
	async componentDidMount() {
		await this.props.checkToken();
		this.setState({ isLoad: true });
	}
	render() {
		const { isLogin } = this.props;
		// console.log('chek',this.state.isLoad);
		// console.log('login',isLogin);
		if (!this.state.isLoad) {
			return <div><LinearProgress /></div>
		}

		return (
			<Switch>
				<Route exact path="/" component={Dashboard} />
				{/* <Route path="/login-system" component={LoginContainer} />
				<Route
					exact
					path="/xjk-system"
					render={
						() => (isLogin) ? (<Dashboard />) : (<Redirect to="/login-system" />)
					} 
				/>
				<Route path='/xjk-system/company' component={Company} /> */}
				
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