
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import ViewList from '@material-ui/icons/ViewList';
import Edit from '@material-ui/icons/Edit';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PlaylistPlay from '@material-ui/icons/PlaylistPlay';

export const ListItemSidebar = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Tổng quan" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Cấu hình" />
    </ListItem>
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
        <PlaylistPlay />
      </ListItemIcon>
      <ListItemText primary="Media" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Đơn hàng" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Tin đăng" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Nhân viên" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Thành viên" />
    </ListItem>
  </div>
);

