
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


export const ListItemSidebar = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Tổng quan" />
    </ListItem>

    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Cấu hình" />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul>
          <ListItem button>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Công ty" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Công ty" />
          </ListItem>
          </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>

    <ListItem button>
      <ListItemIcon>
        <ViewList />
      </ListItemIcon>
      <ListItemText primary="Danh mục" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Edit />
      </ListItemIcon>
      <ListItemText primary="Bài viết" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Sản phẩm" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PermMedia />
      </ListItemIcon>
      <ListItemText primary="Media" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Book />
      </ListItemIcon>
      <ListItemText primary="Đơn hàng" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Description />
      </ListItemIcon>
      <ListItemText primary="Tin đăng" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SupervisorAccount />
      </ListItemIcon>
      <ListItemText primary="Nhân viên" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PermIdentity />
      </ListItemIcon>
      <ListItemText primary="Thành viên" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Close />
      </ListItemIcon>
      <ListItemText primary="Đăng xuất" />
    </ListItem>
  </div>
);

