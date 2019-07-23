import React from 'react';

const SettingsSideNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <i className='fas fa-user-circle' />
          <span>Account Details</span>
        </li>
        <li>
          <i className='fas fa-tools' />
          <span>Preferences</span>
        </li>
        <li>
          <i className='fas fa-envelope-open-text' />
          <span>Billing</span>
        </li>
      </ul>
    </nav>
  );
}

export default SettingsSideNav;