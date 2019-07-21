import React from 'react';

const OverdueReport = () => {
  return (
    <div class="wrap-collapsible">
      <input id="collapsibleOverdue1" class="toggle" type="checkbox" />
      <label htmlFor="collapsibleOverdue1" class="lbl-toggle">
        <i class="fas fa-clock"></i>
        <div className='label-content'>
          <div className='label-text'>
            <h3>Overdue Report</h3>
            <p>This is an overdue report statement.</p>
          </div>
          <div className='rotate-arrow'>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <p>
            Overdue Report details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverdueReport;