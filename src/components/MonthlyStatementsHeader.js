import React from 'react';

const MonthlyStatementsHeader = () => {
  return (
    <div className='monthly-statement-grid monthly-statement-header'>
      <div id=''>
        <input type='checkbox' />
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        Name
      </div>
      <div id='' className='monthly-statement-summary-total'>
        <i class="fas fa-sort"></i>
        Total
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        From
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        To
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        Submitted
      </div>
    </div>
  );
}

export default MonthlyStatementsHeader;