import React from 'react';

const ExpensesTableHeader = () => {
  return (
    <div className='large-table expenses-grid'>
      <div id=''>
        <i className="fas fa-sort"></i>
        Date
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        Merchant
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        Amount
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        Department
      </div>
      <div id=''>
        <i className="fas fa-sort"></i>
        Description
      </div>
    </div>
  );
}

export default ExpensesTableHeader;