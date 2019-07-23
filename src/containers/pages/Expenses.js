import React from 'react';
import ExpensesTable from '../../components/ExpensesComponents/ExpensesTable';
import NewExpenseForm from '../../components/ExpensesComponents/NewExpenseForm';
import Modal from '../../components/Modal';
import '../../styles/pages.css';
import '../../styles/expenses.css';

const Expenses = () => {
  return (
    <main>
      <Modal><NewExpenseForm /></Modal>
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