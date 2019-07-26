import React from 'react';

const OverdueReport = () => {
  return (
    <div className="wrap-collapsible">
      <input id="collapsibleOverdue1" className="toggle" type="checkbox" />
      <label htmlFor="collapsibleOverdue1" className="lbl-toggle">
        <i className="fas fa-clock"></i>
        <div className='label-content'>
          <div className='label-text'>
            <h3>Overdue Report</h3>
            <p>This is an overdue report statement.</p>
          </div>
          <div className='rotate-arrow'>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
            Overdue Report details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverdueReport;