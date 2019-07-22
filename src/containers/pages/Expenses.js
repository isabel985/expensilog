import React from 'react';
import ExpensesTable from '../../components/ExpensesComponents/ExpensesTable';
import '../../styles/pages.css';
import '../../styles/expenses.css';

const Expenses = () => {
  return (
    <main>
      <header>
        <h1>Expenses</h1>
        <button id='newExpenseButton' className='btn btn-action-1'>New Expense</button>
      </header>
      <div className='content-wrapper'>
        <ExpensesTable />
      </div>
    </main>
  );
}

export default Expenses;