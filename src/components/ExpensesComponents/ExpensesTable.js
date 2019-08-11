import React from 'react';
import ExpensesTableHeader from './ExpensesTableHeader';
import ExpenseSummary from './ExpenseSummary';

const ExpensesTable = () => {
  return (
    <React.Fragment>
      <ExpensesTableHeader />
      <ExpenseSummary />
    </React.Fragment>
  );
}

export default ExpensesTable;