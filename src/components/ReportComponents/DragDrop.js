import React, { useState } from 'react';

const DragDrop = () => {

  // set up local storage for unassigned expenses
  const [storedExpenses, setStoredExpenses] = useState(
    [
      { id: '123', name: "Google Services", assignedStatus: "unassigned" },
      { id: '456', name: "AWS", assignedStatus: "unassigned" },
      { id: '789', name: "Apple", assignedStatus: "unassigned" },
      { id: '135', name: "Slack", assignedStatus: "unassigned" },
      { id: '680', name: "Discount Tire", assignedStatus: "unassigned" }
    ]
  );

  // grab the id of the expense being dragged
  let onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData("id", id);
  }

  let onDragOver = (ev) => {
    ev.preventDefault();
  }

  let onDrop = (ev, assignStat) => {
    let id = ev.dataTransfer.getData("id");

    let expenses = storedExpenses.filter((expense) => {
      if (expense.name == id) {
        expense.assignedStatus = assignStat;
      }
      return expense;
    });

    setStoredExpenses(
      [...storedExpenses],
      expenses
    );
  }

  let expenses = {
    assigned: [],
    unassigned: []
  }

  storedExpenses.forEach((expense) => {
    expenses[expense.assignedStatus].push(
      <div key={expense.name}
        onDragStart={(e) => onDragStart(e, expense.name)}
        draggable
        className="draggable-expense"
      >
        {expense.name}
      </div>
    );
  });

  return (
    <div className="drag-drop-wrapper">
      <div className="drag-drop-box unassigned-expenses"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => { onDrop(e, "unassigned") }}>
        <div className='drag-drop-box-content'>
          <span className="task-header">UNASSIGNED</span>
          {expenses.unassigned}
        </div>
      </div>
      <div className="drag-drop-box selected-expenses"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "assigned")}>
        <div className='drag-drop-box-content'>
        <span className="task-header">ASSIGNED</span>
        {expenses.assigned}
      </div>
    </div>
    </div >
  );
}

export default DragDrop;