
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import ViewList from '@material-ui/icons/ViewList';
import Edit from '@material-ui/icons/Edit';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PermMedia from '@material-ui/icons/PermMedia';
import Book from '@material-ui/icons/Book';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Description from '@material-ui/icons/Description';
import Close from '@material-ui/icons/Close';
import Business from '@material-ui/icons/Business';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

export const ListItemSidebar = (
  <div>
    <ul className="mainmenu">
      <li>
        <Link to='/1'>Tổng quan</Link>
      </li>
      <li>
        <a>Cấu hình</a>
        <ul className="submenu">
          <li>
            <Link to='/2'>Thông tin công ty</Link>
          </li>
          <li>
            <Link to='/3'>Tổng quan</Link>
          </li>
          <li>
            <Link to='/4'>Tổng quan</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to='/5'>Media</Link>
      </li>
      <li>
        <Link to='/6'>Tổng quan</Link>
      </li>
    </ul>
  </div>
);

