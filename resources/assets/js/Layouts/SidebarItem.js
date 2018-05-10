
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarItem extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      isOpen: false
    });
  }
  componentDidMount() {
    var submenu = document.getElementById('submenu');
    (this.state.isOpen === true) ? submenu.classList.add('submenu-active') : submenu.classList.remove('submenu-active')
  }

  clickopen() {
    var submenu = document.getElementById('submenu');
    if(this.state.isOpen === false){
      this.setState({ isOpen: !this.state.isOpen });
      submenu.classList.add('submenu-active');
    }else{
      this.setState({ isOpen: !this.state.isOpen });
      submenu.classList.remove('submenu-active');
    }
  }
  render() {
    return (
      <div>
        <ul className="mainmenu">
          <li>
            <Link to='/'>Tổng quan</Link>
          </li>
          <li onClick={this.clickopen.bind(this)} >
            <a to='/'>Cấu hình</a>
            <ul id="submenu">
              <li>
                <Link to='/xjk-system/company'>Thông tin công ty</Link>
              </li>
              <li>
                <Link to='/'>Tổng quan</Link>
              </li>
              <li>
                <Link to='/'>Tổng quan</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/'>Media</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarItem;


