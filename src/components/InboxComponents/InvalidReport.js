import React from 'react';

const InvalidReport = () => {
  return (
    <div className="wrap-collapsible">
      <input id="collapsibleInvalid1" className="toggle" type="checkbox" />
      <label htmlFor="collapsibleInvalid1" className="lbl-toggle">
        <i className="fas fa-exclamation-triangle"></i>
        <div className='label-content'>
          <div className='label-text'>
            <h3>Invalid Report</h3>
            <p>This is an invalid report statement.</p>
          </div>
          <div className='rotate-arrow'>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
            Invalid Report details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvalidReport;