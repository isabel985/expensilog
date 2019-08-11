import React from 'react';

const MonthlyStatementsHeader = () => {
  return (
    <div className='large-table monthly-statement-header monthly-statement-grid'>
      <div className='origin'>
        from MonthlyStatementsHeader
      </div>
      <div id=''>
        <input type='checkbox' />
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        Name
      </div>
      <div id='' className='monthly-statement-summary-total'>
        <i className="fas fa-sort"></i>
        Total
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        From
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        To
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        Submitted
      </div>
    </div>
  );
}

export default MonthlyStatementsHeader;