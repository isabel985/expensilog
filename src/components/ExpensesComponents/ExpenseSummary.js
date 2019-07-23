import React from 'react';

const ExpenseSummary = () => {
  return (
    <div className='large-table large-table-summary expenses-grid'>
      <div id=''>
        Jul 19
      </div>
      <div id=''>
        <div className='merchant-name'>Google Services</div>
        <div className='associated-report'>
          <div class='status-label approved'>Approved</div>
          <div className='report-name'>Monthly Statement Report - Danielle Quevedo - June</div>
        </div>
      </div>
      <div id=''>
        $1.99
      </div>
      <div id=''>
        Marketing
      </div>
      <div id=''>
        Add Description
      </div>
    </div>
  );
}

export default ExpenseSummary;