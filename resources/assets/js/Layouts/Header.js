import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            ADMINCP
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);