import React from 'react';

const Notification = () => {
  return (
    <div className="wrap-collapsible">
      <input id="collapsibleNotify1" className="toggle" type="checkbox" />
      <label htmlFor="collapsibleNotify1" className="lbl-toggle">
        <i className="fas fa-envelope-open-text"></i>
        <div className='label-content'>
          <div className='label-text'>
            <h3>Notification</h3>
            <p>This is a notification statement.</p>
          </div>
          <div className='rotate-arrow'>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
            Notification details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;