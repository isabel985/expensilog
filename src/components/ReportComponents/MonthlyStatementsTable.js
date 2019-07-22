import React from 'react';
import MonthlyStatementsHeader from './MonthlyStatementsHeader';
import MonthlyStatementSummary from './MonthlyStatementSummary';
import MonthlyStatementsPagination from '../Pagination';

const MonthlyStatementsTable = () => {
  return (
    <React.Fragment>
      <MonthlyStatementsHeader />
      <MonthlyStatementSummary />
      <MonthlyStatementsPagination />
    </React.Fragment>
  );
}

export default MonthlyStatementsTable;