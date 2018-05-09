import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Header from './../../Layouts/Header';
import Sidebar from './../../Layouts/Sidebar';
import Routes from './RouteAdmin';

const styles = theme => ({
    root: {
        flexGrow: 1,
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
    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <Header />
                <Sidebar />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <div >
                        <Routes {...this.props} />
                    </div>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Master);