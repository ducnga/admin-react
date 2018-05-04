import React, { Component } from 'react';
import { Route, Switch, Link, Redirect, IndexRoute } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Sidebar from './../Layouts/Sidebar';
import Header from './../Layouts/Header';
import Routes from './Routes/Routes';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
  });
  
class Master extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isLogin: false
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: true }), 500);
    }

    render() {
        if (this.state.loading === false) {
            return (
                <div className="loadding"><LinearProgress /></div>
            );
        }
        else if (this.state.isLogin === false) {
            return <Routes />
        }
        else {
            return (
                <div className={classes.root}>
                    <Header />
                    <Sidebar />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Typography noWrap><Routes /></Typography>
                    </main>
                </div>
            );
        }
    }
}

export default withStyles(styles)(Master);