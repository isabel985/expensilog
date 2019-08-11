import React from 'react';
import MonthlyStatementsHeader from './MonthlyStatementsHeader';
import MonthlyStatementSummary from './MonthlyStatementSummary';
import MonthlyStatementsPagination from '../Pagination';

const MonthlyStatementsTable = (props) => {
  return (
    <React.Fragment>
      <div className='origin'>
        from MonthlyStatementsTable
      </div>
      <MonthlyStatementsHeader />
      <MonthlyStatementSummary />
      <MonthlyStatementsPagination />
    </React.Fragment>
  );
}

export default MonthlyStatementsTable;