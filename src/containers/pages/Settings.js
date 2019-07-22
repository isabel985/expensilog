import React from 'react';
import SecondarySideNav from '../../components/SecondarySideNav';
import SettingsSideNav from '../../components/SettingsComponents/SettingsSideNav';
import '../../styles/pages.css';
import '../../styles/settings.css';

const Settings = () => {
  return (
    <main>
      <header>
        <h1>Your Account: Details</h1>
      </header>
      <div className='leftSideBar-and-content-wrapper'>
        <SecondarySideNav><SettingsSideNav /></SecondarySideNav>
        <div className='content-wrapper'>Content</div>
      </div>
    </main>
  );
}

export default Settings;