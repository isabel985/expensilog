import React from 'react';

const MonthlyStatementSummary = () => {
  return (
    <div className='monthly-statement-grid monthly-statement-summary'>
      <div id=''>
        <input type='checkbox' />
      </div>
      <div id=''>
        Monthly Statement Report - Danielle Quevedo - June
      </div>
      <div id='' className='monthly-statement-summary-total'>
        <div class='approved'>Approved</div>
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