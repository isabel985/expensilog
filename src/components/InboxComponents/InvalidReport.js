import React from 'react';

const InvalidReport = () => {
  return (
    <div class="wrap-collapsible">
      <input id="collapsibleInvalid1" class="toggle" type="checkbox" />
      <label htmlFor="collapsibleInvalid1" class="lbl-toggle">
        <i class="fas fa-exclamation-triangle"></i>
        <div className='label-content'>
          <div className='label-text'>
            <h3>Invalid Report</h3>
            <p>This is an invalid report statement.</p>
          </div>
          <div className='rotate-arrow'>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <p>
            Invalid Report details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvalidReport;