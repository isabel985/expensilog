import React, { useState } from 'react';

const DragDrop = () => {

  // set up local storage for unassigned expenses
  const [storedExpenses, setStoredExpenses] = useState(
    [
      { id: '123', name: "Google Services", assignedStatus: "unassigned"},
      { id: '456', name: "AWS", assignedStatus: "unassigned"},
      { id: '789', name: "Apple", assignedStatus: "unassigned"}
    ]
  );

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

  storedExpenses.forEach((t) => {
    expenses[t.assignedStatus].push(
      <div key={t.name}
        onDragStart={(e) => onDragStart(e, t.name)}
        draggable
        className="draggable"
      >
        {t.name}
      </div>
    );
  });

  return (
    <div className="container-drag">
      <h2 className="header">DRAG & DROP DEMO</h2>
      <div className="wip"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => { onDrop(e, "unassigned") }}>
        <span className="task-header">UNASSIGNED</span>
        {expenses.unassigned}
      </div>
      <div className="droppable"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "assigned")}>
        <span className="task-header">ASSIGNED</span>
        {expenses.assigned}
      </div>
    </div>
  );
}

export default DragDrop;