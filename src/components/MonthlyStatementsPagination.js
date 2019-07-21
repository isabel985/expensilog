import React from 'react';

const MonthlyStatementsPagination = () => {
  return (
    <div className='pagination'>
      <div>Page 1 of 4</div>
      <button><i class="fas fa-caret-left"></i></button>
      <button><i class="fas fa-caret-right"></i></button>
    </div>
  );
}

export default MonthlyStatementsPagination;