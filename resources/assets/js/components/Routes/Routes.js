import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_token } from './../../actions/Login';
// import asyncComponent from './AsyncComponent';
import Loadable from 'react-loadable';
import { LinearProgress } from 'material-ui/Progress';
const Loading = () => <div><LinearProgress /></div>;
const Dashboard = Loadable({
	loader: () =>
		System.import('./../../container/Admin/Dashboard/DashboardContainer'),
	loading: Loading,
});
const LoginContainer = Loadable({
	loader: () =>
		System.import('./../../container/Admin/Login/LoginContainer'),
	loading: Loading,
});

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			isLoadding:false
		})
	}
	async componentDidMount() {
		await this.props.checkToken();
		this.setState({isLoadding:true})
	}
	render() {
		const { isLogin } = this.props;
		if(!this.state.isLoadding){
			return <div><LinearProgress /></div>;
		}
		return (
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/login-system" component={LoginContainer} />
				<Route path="/xjk-system" render={() =>
					(!isLogin) ?
						(<Redirect to="/login-system" />)
						:
						(<Dashboard />)
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