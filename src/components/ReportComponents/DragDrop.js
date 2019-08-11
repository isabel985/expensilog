// to do: remove assignedStatus from expenses, fix the drag and drop to work with assigned and unassigned expenses

import React, { useState, useContext } from 'react';
import { ReportContext } from '../../containers/pages/ReportContext';

const DragDrop = props => {
  const { state, dispatch } = useContext(ReportContext);

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
    let id = event.dataTransfer.getData("id");

    // let expenses = storedExpenses.filter((expense) => {
    //   if (expense.id == id) {
    //     expense.assignedStatus = assignStat;
    //   }
    //   return expense;
    // });

    // setStoredExpenses(expenses);
  }

  let initialExpenses = {
    assigned: [],
    unassigned: []
  }



  // storedExpenses.forEach((expense) => {
  //   let expenseSummary = `${expense.merchant} - ${expense.service}`;
  //   initialExpenses[expense.assignedStatus].push(
  //     <div key={expense.id}
  //       onDragStart={(event) => onDragStart(event, expense.id)}
  //       draggable
  //       className="draggable-expense"
  //     >
  //       <span>{expenseSummary}</span>
  //       <span>${expense.cost.toFixed(2)}</span>
  //     </div>
  //   );
  // });

  // let getAssignedExpenses = () => {
  //   // grab all expenses currently assigned to this report
  //   return storedExpenses.filter((storedExpense) => {
  //     return storedExpense.assignedStatus === 'assigned';
  //   });
  // }

  let getAssignedExpensesTotal = () => {

    // grab all expenses currently assigned to this report
    // let assignedExpenses = getAssignedExpenses();

    // total assignedExpenses
    const reducer = (total, assignedExpense) => total + assignedExpense.cost;
    return assignedExpenses.reduce(reducer, 0);
  }

  // let getReimbursableExpensesTotal = () => {
  //   // grab all expenses currently assigned to this report and find the ones that are reimbursable
  //   let assignedReimbursableExpenses = getAssignedExpenses().filter((assignedExpense) => {
  //     return assignedExpense.reimbursable;
  //   });

  //   // total up all reimbursable assigned expenses
  //   const reducer = (total, assignedReimbursableExpense) => total + assignedReimbursableExpense.cost;
  //   return assignedReimbursableExpenses.reduce(reducer, 0);
  // }

  // let getNonReimbursableExpensesTotal = () => getAssignedExpensesTotal() - getReimbursableExpensesTotal();

  return (
    <div></div>
    // <div>
    //   <div className='origin'>
    //     from DragDrop
    //     </div>
    //   <div className='drag-drop-wrapper'>
    //     {props.children}

    //     <div className='report-totals'>
    //       <div className="assigned-expense-total">
    //         <span>Assigned Expenses Total: ${getAssignedExpensesTotal().toFixed(2)}</span>
    //       </div>
    //       <div className="assigned-expense-total">
    //         <span>Non-Reimbursable: ${getNonReimbursableExpensesTotal().toFixed(2)}</span>
    //       </div>
    //       <div className="assigned-expense-total">
    //         <span>Reimbursable: ${getReimbursableExpensesTotal().toFixed(2)}</span>
    //       </div>
    //     </div>
    //   </div>


    //   <div className="drag-drop-wrapper">

    //     <div className="drag-drop-box unassigned-expenses"
    //       onDragOver={(event) => onDragOver(event)}
    //       onDrop={(event) => { onDrop(event, "unassigned") }}>
    //       <div className='drag-drop-box-content'>
    //         <span className="task-header">UNASSIGNED</span>
    //         {initialExpenses.unassigned}
    //       </div>
    //     </div>

    //     <div className="drag-drop-box selected-expenses"
    //       onDragOver={(event) => onDragOver(event)}
    //       onDrop={(event) => onDrop(event, "assigned")}>
    //       <div className='drag-drop-box-content'>
    //         <span className="task-header">ASSIGNED</span>
    //         {initialExpenses.assigned}
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

export default DragDrop;