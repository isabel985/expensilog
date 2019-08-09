import React from 'react';

const ReportFilter = (props) => {
  return (
    <div className={`filter-checkbox ${props.type}`}>
      <input type='checkbox' id={props.id} onClick={props.onClick} />
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
}

export default ReportFilter;