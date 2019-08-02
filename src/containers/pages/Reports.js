import React, { useState, useEffect } from 'react';
import { user, statements } from '../../utils/data';
import ReportsList from '../../components/ReportComponents/ReportsList';
import ReportForm from '../../components/ReportComponents/ReportForm';
import '../../styles/pages.css';
import '../../styles/reports.css';

const Reports = () => {
  const [formMode, setFormMode] = useState(false);
  const [formId, setFormId] = useState(Math.floor(Math.random() * 20));
  const [name, setName] = useState('');
  // useEffect(()=>{},[name]);
  let status = 'open';

  // create a list of months where the report is open or no report at all
  let months = ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'May 2019', 'June 2019', 'July 2019', 'August 2019', 'September 2019'];
  // map over statments and return the statment name
  let statementMonths = statements.map(statement => statement.name);
  // filter over months and get back a list of all available months
  let availableMonths = months.filter(month => !statementMonths.includes(month));

  // change title when date is selected
  const handleOnDateChange = ev => {
    let selectedDate = ev.target.value;
    setName(selectedDate);
  }

  const onReportClick = (id) => {
    console.log('onReportClick was called');
    console.log('id is ', id);
    let foundStatement = statements.find(statement => statement.id === id)
    // if found statement
    if (foundStatement) {
      // override the default variables 
      console.log('foundStatement is', foundStatement);
      setFormId(foundStatement.id);
      setName(foundStatement.name);
      status = foundStatement.status;
      setFormMode(true);
    }
    alert('no statement found');
  }

  const newReportClick = () => {
    setFormMode(true);
    console.log("newReportClick was called");
  }

  return (
    <main className='reports-page'>
      {formMode
        ? <ReportForm
          id={formId}
          setName={setName}
          name={name}
          user={user}
          status={status}
          availableMonths={availableMonths}
          handleOnDateChange={handleOnDateChange}
        />
        : <ReportsList
          onReportClick={onReportClick}
          newReportClick={newReportClick}
        />
      }
    </main>
  );
}

export default Reports;