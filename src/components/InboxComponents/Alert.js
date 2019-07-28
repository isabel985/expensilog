import React from 'react';

const Alert = () => {
  return (
    <div className="wrap-collapsible">
      <input id="collapsibleAlert1" className="toggle" type="checkbox" />
      <label htmlFor="collapsibleAlert1" className="lbl-toggle">
        <i className="fas fa-bell"></i>
        <div className='label-content'>
          <div className='label-text'>
            <h3>Alert</h3>
            <p>This is an alert statement.</p>
          </div>
          <div className='rotate-arrow'>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
            Alert text and stuff.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Alert;