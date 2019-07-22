import React from 'react';

const ExpensesTableHeader = () => {
  return (
    <div className='large-table expenses-grid'>
      <div id=''>
        <i class="fas fa-sort"></i>
        Date
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        Merchant
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        Amount
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        Category
      </div>
      <div id=''>
        <i class="fas fa-sort"></i>
        Description
      </div>
    </div>
  );
}

export default ExpensesTableHeader;