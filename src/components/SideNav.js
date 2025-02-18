import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar.js';
import '../styles/sideNav.css';


const SideNav = () => {
  return (
    <aside className="side-nav">
      <Avatar />
      <nav>
        <ul>
          <li><NavLink to='/inbox'><i className="fas fa-inbox"></i>Inbox</NavLink></li>
          <li><NavLink to='/expenses'><i className="fas fa-file-invoice-dollar"></i>Expenses</NavLink></li>
          <li><NavLink to='/reports'><i className="fas fa-table"></i>Reports</NavLink></li>
          <li><NavLink to='/settings'><i className="fas fa-cog"></i>Settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNav;