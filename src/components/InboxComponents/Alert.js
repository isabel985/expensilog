import React from 'react';

const Alert = () => {
  return (
    <div class="wrap-collapsible">
      <input id="collapsibleAlert1" class="toggle" type="checkbox" />
      <label htmlFor="collapsibleAlert1" class="lbl-toggle">
        <i class="fas fa-bell"></i>
        <div className='label-content'>
          <div className='label-text'>
            <h3>Alert</h3>
            <p>This is an alert statement.</p>
          </div>
          <div className='rotate-arrow'>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <p>
            Alert text and stuff.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Alert;