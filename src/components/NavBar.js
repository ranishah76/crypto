import React, { Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import '../App.css'


class NavBar extends Component {

  render() {
    return (
      <div className="topheader">
    <Menu >
     <Menu.Menu >
     <NavLink to="/allcoins"><Menu.Item> All Coins </Menu.Item></NavLink>
     <NavLink to="/dashboard"><Menu.Item> My Dashboard </Menu.Item></NavLink>
     <NavLink to="/extremefomo"><Menu.Item> Earnings Calculator  </Menu.Item></NavLink>
     <NavLink to="/iframe"><Menu.Item> Blocks Visualisation </Menu.Item></NavLink>
     <NavLink to="/aframe"><Menu.Item> Multiple Charts </Menu.Item></NavLink>
     <NavLink to="/sound"><Menu.Item> Testing Music </Menu.Item></NavLink>

     </Menu.Menu>
     <Menu.Menu position="right">
     <NavLink to="/"><Menu.Item onClick={this.handleClick}> LogOut </Menu.Item></NavLink>
     </Menu.Menu>
   </Menu>
   </div>
  )
 }
}

export default NavBar;
