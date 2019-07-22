import React from 'react';
import '../../styles/pages.css';
import SecondarySideNav from '../../components/SecondarySideNav';
import SettingsSideNav from '../../components/SettingsComponents/SettingsSideNav';

const Settings = () => {
  return (
    
    <main>
      <header>
        <h1>Your Account: Account Details</h1>
      </header>

      <div className="content-wrapper">
        <SecondarySideNav><SettingsSideNav /></SecondarySideNav>
        <div>content</div>
      </div>
    </main>
  );
}

export default Settings;