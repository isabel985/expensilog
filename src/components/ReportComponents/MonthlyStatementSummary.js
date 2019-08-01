import React from 'react';
import {user, statements} from '../../utils/data';

const MonthlyStatementSummary = (props) => {
  
  let displaySummary = (statement) => {
    return (
      <div 
        key={statement.id} 
        className='large-table large-table-summary monthly-statement-grid' 
        onClick={() => props.onReportClick(statement.id)}>
      <div id=''>
        <input type='checkbox' />
      </div>
      <div id=''>
        Monthly Statement Report - {statement.from} - {statement.name}
      </div>
      <div id='' className='monthly-statement-summary-total'>
        <div className={`status-label ${statement.status}`}>{statement.status}</div>
        ${statement.amount.toFixed(2)}
      </div>
      <div id=''>
        {statement.from}
      </div>
      <div id=''>
        {statement.to}
      </div>
      <div id=''>
        {statement.date}
      </div>
    </div>   
    )
  };

  return statements.map(displaySummary);
}

export default MonthlyStatementSummary;