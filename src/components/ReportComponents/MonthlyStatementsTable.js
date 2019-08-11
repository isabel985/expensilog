import React from 'react';
import MonthlyStatementsHeader from './MonthlyStatementsHeader';
import MonthlyStatementSummary from './MonthlyStatementSummary';

const MonthlyStatementsTable = (props) => {
  return (
    <React.Fragment>
      <div className='origin'>
        from MonthlyStatementsTable
      </div>
      <MonthlyStatementsHeader />
      <MonthlyStatementSummary />
    </React.Fragment>
  );
}

export default MonthlyStatementsTable;