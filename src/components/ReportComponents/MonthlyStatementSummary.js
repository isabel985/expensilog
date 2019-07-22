import React from 'react';

const MonthlyStatementSummary = () => {
  return (
    <div className='large-table large-table-summary monthly-statement-grid'>
      <div id=''>
        <input type='checkbox' />
      </div>
      <div id=''>
        Monthly Statement Report - Danielle Quevedo - June
      </div>
      <div id='' className='monthly-statement-summary-total'>
        <div class='status-label approved'>Approved</div>
        $1,234.00
      </div>
      <div id=''>
        Danielle Quevedo
      </div>
      <div id=''>
        Joe Schmoe
      </div>
      <div id=''>
        Aug 10, 2019
      </div>
    </div>    
  );
}

export default MonthlyStatementSummary;