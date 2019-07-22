import React from 'react';
import ExpensesTableHeader from './ExpensesTableHeader';
import ExpenseSummary from './ExpenseSummary';
import Pagination from '../Pagination';

const ExpensesTable = () => {
  return (
    <React.Fragment>
      <ExpensesTableHeader />
      <ExpenseSummary />
      <Pagination />
    </React.Fragment>
  );
}

export default ExpensesTable;