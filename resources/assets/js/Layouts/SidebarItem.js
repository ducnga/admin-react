import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SidebarItem extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/xjk-system/company" >Thông tin công ty</Link>
          </li>
          <li>
            <Link to="/xjk-system" >Dashbord</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarItem;

