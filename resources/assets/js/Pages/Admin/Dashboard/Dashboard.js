import React, { Component } from 'react';
import Header from '../../../Layouts/Header';
import Sidebar from '../../../Layouts/Sidebar';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

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

class Dashboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <Sidebar />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography ></Typography>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);