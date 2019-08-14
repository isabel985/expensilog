import React, { useState, useContext } from 'react';
import { ReportContext } from '../../containers/pages/ReportContext';

const DragDrop = props => {
  const { state, dispatch } = useContext(ReportContext);

  console.log('state: ', state);
  // grab the unassigned expenses
  let unassignedExpenses = state.expenses.filter(expense => !expense.statementId);
  console.log(unassignedExpenses);

  // create assigned expenses to this particular statement
  let assignedExpenses = state.expenses.filter(expense => expense.statementId === state.statementSelected.id)
  console.log(assignedExpenses)

  // grab the id of the expense being dragged
  let onDragStart = (event, id) => {
    console.log('dragstart:', id);
    event.dataTransfer.setData("id", id);
  }

  let onDragOver = (event) => {
    event.preventDefault();
  }

  let onDrop = (event, assignStat) => {
    let expenseId = event.dataTransfer.getData("id");
    console.log('expenseId', expenseId);

    // get the expenses from state and find the expense that matches the expense id
    let expenses = state.expenses;
    let droppedExpense = expenses.find((expense) => expense.id === expenseId);
    console.log('droppedExpense: ', droppedExpense);

    // get statement id from statementSelected
    let currentStatementId = state.statementSelected.id;
    console.log('currentStatementId: ', currentStatementId);

    // if assigned, give the expense a statement id
    if (assignStat === "assigned") {
      droppedExpense.statementId = currentStatementId;
      console.log('expenses: ', expenses);
    }

    // if unassigned, remove the statement id
    if (assignStat === "unassigned") {
      droppedExpense.statementId = "";
      console.log('expenses: ', expenses);
    }

    dispatch({ type: "updateExpense", payload: expenses })
  }

  // create a function that maps over an array of expenses and returns an array of JSX expenses
  const expenseSummary = (expenses) => {
    return expenses.map((expense) => {
      let expenseSummary = `${expense.merchant} - ${expense.service}`;

      return (
        <div key={expense.id}
          onDragStart={(event) => onDragStart(event, expense.id)}
          draggable
          className="draggable-expense"
        >
          <span>{expenseSummary}</span>
          <span>${expense.cost.toFixed(2)}</span>
        </div>
      )
    }
    )
  }

  let getAssignedExpensesTotal = () => {
    const reducer = (total, assignedExpense) => total + assignedExpense.cost;
    return assignedExpenses.reduce(reducer, 0);
  }

  return (
    <div>
      <div className='origin'>
        from DragDrop
        </div>
      <div className='drag-drop-wrapper'>
        {props.children}

        {/* <div className='report-totals'>
          <div className="assigned-expense-total">
            <span>Assigned Expenses Total: ${getAssignedExpensesTotal().toFixed(2)}</span>
          </div>
          <div className="assigned-expense-total">
            <span>Non-Reimbursable: ${getNonReimbursableExpensesTotal().toFixed(2)}</span>
          </div>
          <div className="assigned-expense-total">
            <span>Reimbursable: ${getReimbursableExpensesTotal().toFixed(2)}</span>
          </div>
        </div> */}
      </div>

      <div className="drag-drop-wrapper">

        <div className="drag-drop-box unassigned-expenses"
          onDragOver={(event) => onDragOver(event)}
          onDrop={(event) => { onDrop(event, "unassigned") }}>
          <div className='drag-drop-box-content'>
            <span className="task-header">UNASSIGNED</span>
            {expenseSummary(unassignedExpenses)}
          </div>
        </div>

        <div className="drag-drop-box selected-expenses"
          onDragOver={(event) => onDragOver(event)}
          onDrop={(event) => onDrop(event, "assigned")}>
          <div className='drag-drop-box-content'>
            <span className="task-header">ASSIGNED</span>
            <span className="assigned-total">${getAssignedExpensesTotal().toFixed(2)}</span>
            {expenseSummary(assignedExpenses)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DragDrop;