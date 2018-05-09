import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ListItemSidebar from './SidebarItem';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List><ListItemSidebar /></List>
      </Drawer>
    );
  }
}

// Sidebar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Sidebar);